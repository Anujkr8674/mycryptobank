<?php
require_once 'config.php';

function generateUniqueUserId() {
    // Generate a random number between 7-9 digits
    $length = rand(7, 9);
    $userId = '';
    for ($i = 0; $i < $length; $i++) {
        $userId .= rand(0, 9);
    }
    return $userId;
}

function isUserIdUnique($userId, $conn) {
    $stmt = $conn->prepare("SELECT COUNT(*) as count FROM wallet_data WHERE user_id = ?");
    $stmt->bind_param("s", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $stmt->close();
    return $row['count'] == 0;
}

// Generate a unique user ID
do {
    $userId = generateUniqueUserId();
} while (!isUserIdUnique($userId, $conn));

// Return the generated user ID
header('Content-Type: application/json');
echo json_encode(['user_id' => $userId]);

$conn->close();
?> 