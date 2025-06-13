<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// If user is logged in, clear their login token from database
if (isset($_SESSION['user_id'])) {
    require_once 'config.php';
    $stmt = $conn->prepare("UPDATE wallet_data SET login_token = NULL, token_expiry = NULL WHERE user_id = ?");
    $stmt->bind_param("s", $_SESSION['user_id']);
    $stmt->execute();
    $stmt->close();
}

// Clear the persistent login cookie
setcookie(
    "persistent_login",
    "",
    [
        'expires' => time() - 3600, // Set to past time to delete
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]
);

// Remove all session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to home page
header("Location: en-IN.php");
exit();
?> 