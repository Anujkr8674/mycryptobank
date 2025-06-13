<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uid = $_POST['uid'];
    $uploadDir = "picture/profile/"; // Relative to the project root

    // Ensure directory exists
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    if (isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error'] === 0) {
        $fileTmpPath = $_FILES['profile_pic']['tmp_name'];
        $fileName = basename($_FILES['profile_pic']['name']);
        $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);

        // Validate file type
        $allowedExtensions = ['jpg', 'jpeg', 'png'];
        if (!in_array(strtolower($fileExtension), $allowedExtensions)) {
            die("Only JPG, JPEG, and PNG files are allowed.");
        }

        // Use the original filename instead of generating a new one
        $destination = $uploadDir . $fileName;

        if (move_uploaded_file($fileTmpPath, $destination)) {
            // Save path to database
            $query = "UPDATE wallet_data SET profile_pic = ? WHERE user_id = ?";
            $stmt = $conn->prepare($query);
            
            if ($stmt === false) {
                die("Error preparing statement: " . $conn->error);
            }
            
            if (!$stmt->bind_param("ss", $destination, $uid)) {
                die("Error binding parameters: " . $stmt->error);
            }
            
            if (!$stmt->execute()) {
                die("Error executing statement: " . $stmt->error);
            }
            
            if ($stmt->affected_rows > 0) {
                header("Location: crm-dashboard.php?upload=success");
                exit();
            } else {
                echo "No rows were updated. User ID may not exist.";
            }
            
            $stmt->close();
        } else {
            echo "Failed to move uploaded file.";
        }
    } else {
        echo "No file uploaded or upload error.";
    }
} else {
    echo "Invalid request.";
}
?>
