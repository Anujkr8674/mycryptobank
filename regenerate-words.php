<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['passcode'])) {
    require_once 'random-words.php';
    $_SESSION['recovery_words'] = generateRandomWords();
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?> 