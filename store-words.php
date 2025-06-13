<?php
session_start();

if(isset($_POST['words'])) {
    $_SESSION['recovery_words'] = $_POST['words'];
    $_SESSION['is_logged_in'] = true;
    
    // Get user_id from wallet_data table
    require_once 'config.php';
    if (isset($_SESSION['passcode'])) {
        $stmt = $conn->prepare("SELECT user_id FROM wallet_data WHERE passcode = ? ORDER BY id DESC LIMIT 1");
        $stmt->bind_param("s", $_SESSION['passcode']);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($row = $result->fetch_assoc()) {
            $_SESSION['user_id'] = $row['user_id'];
        }
        $stmt->close();
    }
    
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?> 