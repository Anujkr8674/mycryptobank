<?php
require_once 'config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $passcode = isset($_POST['passcode']) ? $_POST['passcode'] : '';
    if (!empty($passcode)) {
        $stmt = $conn->prepare("SELECT recovery_words FROM wallet_data WHERE passcode = ?");
        $stmt->bind_param("s", $passcode);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $recoveryWords = json_decode($row['recovery_words'], true);
            echo json_encode(['success' => true, 'words' => $recoveryWords]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Passcode not found']);
        }
        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'message' => 'No passcode provided']);
    }
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?> 