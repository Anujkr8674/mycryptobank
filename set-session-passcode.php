<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $passcode = isset($_POST['passcode']) ? $_POST['passcode'] : '';
    if (!empty($passcode)) {
        $_SESSION['passcode'] = $passcode;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'No passcode provided']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?> 