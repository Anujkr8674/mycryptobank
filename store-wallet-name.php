<?php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $walletName = isset($_POST['walletName']) ? trim($_POST['walletName']) : '';
    
    if (!empty($walletName)) {
        // Store wallet name in session
        $_SESSION['wallet_name'] = $walletName;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No wallet name provided']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?> 