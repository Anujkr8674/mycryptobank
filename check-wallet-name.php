<?php
require_once 'config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $walletName = isset($_POST['walletName']) ? trim($_POST['walletName']) : '';
    
    if (!empty($walletName)) {
        // Check if wallet name exists
        $stmt = $conn->prepare("SELECT COUNT(*) as count FROM wallet_data WHERE LOWER(wallet_name) = LOWER(?)");
        $stmt->bind_param("s", $walletName);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        
        if ($row['count'] > 0) {
            echo json_encode(['exists' => true, 'message' => 'This wallet name is already taken. Please choose another one.']);
        } else {
            echo json_encode(['exists' => false, 'message' => 'Wallet name is available.']);
        }
        $stmt->close();
    } else {
        echo json_encode(['exists' => false, 'message' => 'No wallet name provided']);
    }
    $conn->close();
} else {
    echo json_encode(['exists' => false, 'message' => 'Invalid request method']);
}
?> 