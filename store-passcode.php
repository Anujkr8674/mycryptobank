<?php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $passcode = isset($_POST['passcode']) ? $_POST['passcode'] : '';
    $walletName = isset($_POST['walletName']) ? $_POST['walletName'] : '';
    $refer_id = isset($_POST['refer_id']) ? $_POST['refer_id'] : '';
    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '';
    $input_referral_id = isset($_POST['input_referral_id']) ? $_POST['input_referral_id'] : '';
    
    if (!empty($passcode) && !empty($walletName)) {
        $_SESSION['passcode'] = $passcode;
        $_SESSION['walletName'] = $walletName;
        $_SESSION['refer_id'] = $refer_id;
        $_SESSION['user_id'] = $user_id;
        $_SESSION['sponser_id'] = $input_referral_id;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
