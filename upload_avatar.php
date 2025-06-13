<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Check if user is logged in
if (!isset($_SESSION['is_logged_in']) || $_SESSION['is_logged_in'] !== true) {
    // Redirect to login page if not logged in
    header("Location: new-login.php");
    exit();
}

require_once 'config.php'; // Include your database configuration file

$uploadDir = 'avatars/'; // Directory where uploaded profil_pics will be stored
$maxFileSize = 5 * 1024 * 1024; // 5MB maximum file size
$allowedTypes = ['jpg' => 'image/jpeg', 'png' => 'image/png', 'gif' => 'image/gif'];

$response = ['success' => false, 'message' => 'An error occurred.'];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['profil_pic'])) {
    $file = $_FILES['profil_pic'];

    // Check for upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        switch ($file['error']) {
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                $response['message'] = 'File is too large.';
                break;
            case UPLOAD_ERR_PARTIAL:
                $response['message'] = 'File upload was incomplete.';
                break;
            case UPLOAD_ERR_NO_FILE:
                $response['message'] = 'No file was uploaded.';
                break;
            case UPLOAD_ERR_NO_TMP_DIR:
                $response['message'] = 'Missing a temporary folder.';
                break;
            case UPLOAD_ERR_CANT_WRITE:
                $response['message'] = 'Failed to write file to disk.';
                break;
            case UPLOAD_ERR_EXTENSION:
                $response['message'] = 'A PHP extension stopped the file upload.';
                break;
            default:
                $response['message'] = 'Unknown upload error.';
                break;
        }
    } else {
        // Validate file size
        if ($file['size'] > $maxFileSize) {
            $response['message'] = 'File size exceeds the limit.';
        } else {
            // Validate file type
            $fileInfo = finfo_open(FILEINFO_MIME_TYPE);
            $mimeType = finfo_file($fileInfo, $file['tmp_name']);
            finfo_close($fileInfo);

            $extension = array_search($mimeType, $allowedTypes, true);

            if ($extension === false) {
                $response['message'] = 'Invalid file type.';
            } else {
                // Generate a unique filename
                $fileName = uniqid() . '.' . $extension;
                $destination = $uploadDir . $fileName;

                // Create the upload directory if it doesn't exist
                if (!is_dir($uploadDir)) {
                    mkdir($uploadDir, 0777, true);
                }

                // Move the uploaded file
                if (move_uploaded_file($file['tmp_name'], $destination)) {
                    // File uploaded successfully, now update the database
                    if (isset($_SESSION['passcode'])) {
                        $passcode = $_SESSION['passcode'];
                        // Update the wallet_data table with the profil_pic path
                        $stmt = $conn->prepare("UPDATE wallet_data SET avatar_path = ? WHERE passcode = ?");
                        $stmt->bind_param("ss", $destination, $passcode);

                        if ($stmt->execute()) {
                            $response['success'] = true;
                            $response['message'] = 'Profil picture uploaded successfully.';
                            // You might want to update the session or redirect the user
                            $_SESSION['avatar_path'] = $destination; // Store profil_pic path in session
                        } else {
                            $response['message'] = 'Database update failed: ' . $conn->error;
                            // Optional: Delete the uploaded file if database update fails
                            unlink($destination);
                        }
                        $stmt->close();
                    } else {
                        $response['message'] = 'User session not found.';
                         // Optional: Delete the uploaded file if session data is missing
                         unlink($destination);
                    }
                } else {
                    $response['message'] = 'Failed to move uploaded file.';
                }
            }
        }
    }
}

// Send JSON response back to the client (or handle as needed)
header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?> 