<?php
session_start();

// Get JSON data from POST request
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Check if action is login and user_id is provided
if (isset($data['action']) && $data['action'] === 'login' && isset($data['user_id'])) {
    // Set session variables for logged in user
    $_SESSION['is_logged_in'] = true; // Explicitly set to true
    $_SESSION['wallet_name'] = $data['wallet_name'];
    $_SESSION['user_id'] = $data['user_id']; // Set user_id from provided data
    
    // Save session data and close the session
    session_write_close();
    
    // Create a secure cookie for persistent login
    $cookie_name = "persistent_login";
    $cookie_value = bin2hex(random_bytes(32)); // Generate a random token
    $expiry = time() + (30 * 24 * 60 * 60); // 30 days from now
    
    // Store the token in database for the *specific* user_id
    require_once 'config.php';
    $stmt = $conn->prepare("UPDATE wallet_data SET login_token = ?, token_expiry = FROM_UNIXTIME(?) WHERE user_id = ?");
    $stmt->bind_param("sss", $cookie_value, $expiry, $data['user_id']); // Use user_id from $data
    $stmt->execute();
    $stmt->close(); 
    
    // Set secure cookie
    setcookie(
        $cookie_name,
        $cookie_value,
        [
            'expires' => $expiry,
            'path' => '/',
            'secure' => true, // Only send over HTTPS
            'httponly' => true, // Not accessible via JavaScript
            'samesite' => 'Strict' // Protect against CSRF
        ]
    );
    
    // Send success response
    echo json_encode(['success' => true]);
} else {
    // Send error response for invalid action or missing user_id
    echo json_encode(['success' => false, 'error' => 'Invalid action or missing user ID']);
} 