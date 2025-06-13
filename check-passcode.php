<?php
require_once 'config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $passcode = isset($_POST['passcode']) ? $_POST['passcode'] : '';
    if (!empty($passcode)) {
        // Simply check if the passcode exists in the database
        $stmt = $conn->prepare("SELECT COUNT(*) FROM wallet_data WHERE passcode = ?");
        $stmt->bind_param("s", $passcode);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        $stmt->close();

        if ($count > 0) {
            // Passcode exists, return success
            echo json_encode(['success' => true]);
        } else {
            // Passcode does not exist
            echo json_encode(['success' => false, 'message' => 'Invalid passcode']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No passcode provided']);
    }
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?> 