<?php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode the incoming JSON data
    $data = json_decode(file_get_contents('php://input'), true);

    $passcode = isset($data['passcode']) ? $data['passcode'] : '';
    $walletName = isset($data['wallet_name']) ? $data['wallet_name'] : '';
    // Recovery words are *not* validated here, they are received but validation happens in new-password.php
    // $recoveryWords = isset($data['recovery_words']) ? $data['recovery_words'] : '';

    if (!empty($passcode) && !empty($walletName)) {
        require_once 'config.php'; // Include database connection

        // Prepare and execute the query to find the user by passcode and wallet name
        $stmt = $conn->prepare("SELECT user_id, recovery_words FROM wallet_data WHERE passcode = ? AND wallet_name = ? LIMIT 1");
        $stmt->bind_param("ss", $passcode, $walletName);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($row = $result->fetch_assoc()) {
            // Match found, set session variables with data from the database
            $_SESSION['passcode'] = $passcode;
            $_SESSION['wallet_name'] = $walletName;
            $_SESSION['user_id'] = $row['user_id']; // Set user_id from database
            $_SESSION['recovery_words'] = $row['recovery_words']; // Set recovery words from database
            
            // Set the logged_in flag here as well, as this is the point where the user is authenticated
            // We will primarily rely on is_logged_in in crm-dashboard.php
            // $_SESSION['is_logged_in'] = true;
            
            echo json_encode(['success' => true, 'user_id' => $row['user_id'], 'wallet_name' => $walletName, 'recovery_words' => json_decode($row['recovery_words'])]);

        } else {
            // No matching user found with the provided passcode and wallet name
            echo json_encode(['success' => false, 'message' => 'Invalid passcode or wallet name.']);
        }
        $stmt->close();

    } else {
        echo json_encode(['success' => false, 'message' => 'Missing passcode or wallet name.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?> 