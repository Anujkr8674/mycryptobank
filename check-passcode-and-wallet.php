<?php
require_once 'config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode the incoming JSON data
    $data = json_decode(file_get_contents('php://input'), true);

    $passcode = isset($data['passcode']) ? $data['passcode'] : '';
    $walletName = isset($data['wallet_name']) ? $data['wallet_name'] : '';

    if (!empty($passcode) && !empty($walletName)) {
        // Query the database for a user matching both passcode and wallet name
        $stmt = $conn->prepare("SELECT recovery_words FROM wallet_data WHERE passcode = ? AND BINARY wallet_name = ?");
        $stmt->bind_param("ss", $passcode, $walletName);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($row = $result->fetch_assoc()) {
            // Match found, decode and return recovery words
            $recoveryWords = json_decode($row['recovery_words'], true);
            if (!empty($recoveryWords) && is_array($recoveryWords) && count($recoveryWords) === 12) {
                 echo json_encode([
                    'success' => true,
                    'wallet_name' => $walletName, // Return the verified wallet name
                    'recovery_words' => $recoveryWords
                ]);
            } else {
                 echo json_encode(['success' => false, 'message' => 'Recovery words data incomplete for this wallet.']);
            }
        } else {
            // No match found for the given passcode and wallet name
            echo json_encode(['success' => false, 'message' => 'Invalid passcode or wallet name.']);
        }
        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'message' => 'Missing passcode or wallet name.']);
    }
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?> 