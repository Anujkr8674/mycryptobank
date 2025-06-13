<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Only proceed if user is not already logged in
if (!isset($_SESSION['is_logged_in']) && isset($_COOKIE['persistent_login'])) {
    require_once 'config.php';
    
    // Get the token from cookie
    $token = $_COOKIE['persistent_login'];
    
    // Check if token exists and is not expired
    $stmt = $conn->prepare("SELECT user_id, wallet_name FROM wallet_data WHERE login_token = ? AND token_expiry > NOW()");
    $stmt->bind_param("s", $token);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($row = $result->fetch_assoc()) {
        // Token is valid, restore the session
        $_SESSION['is_logged_in'] = true;
        $_SESSION['user_id'] = htmlspecialchars($row['user_id']);
        $_SESSION['wallet_name'] = htmlspecialchars($row['wallet_name']);
        
        // Get passcode for the user
        $stmt = $conn->prepare("SELECT passcode FROM wallet_data WHERE user_id = ? ORDER BY id DESC LIMIT 1");
        $stmt->bind_param("s", $row['user_id']);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($passcode_row = $result->fetch_assoc()) {
            $_SESSION['passcode'] = $passcode_row['passcode'];
        }
    } else {
        // Token is invalid or expired, clear the cookie
        setcookie(
            "persistent_login",
            "",
            [
                'expires' => time() - 3600,
                'path' => '/',
                'secure' => true,
                'httponly' => true,
                'samesite' => 'Strict'
            ]
        );
    }
    $stmt->close();
}
?> 