<?php
// Debug Settings
if (!defined('DEBUG_MODE')) {
    define('DEBUG_MODE', true);
}

// Error Reporting
if (DEBUG_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Time Zone
date_default_timezone_set('UTC');

// Database Connection
$host = 'localhost';
$user = 'root'; //  MySQL username
$pass = '';     //  MySQL password
$db   = 'wallet_app';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create wallet_data table if it doesn't exist
$createTableSQL = "CREATE TABLE IF NOT EXISTS wallet_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_name VARCHAR(50) NOT NULL,
    passcode VARCHAR(6) NOT NULL,
    recovery_words TEXT NOT NULL,
    refer_id VARCHAR(32),
    user_id VARCHAR(12),
    sponser_id VARCHAR(32),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($createTableSQL) === FALSE) {
    die("Error creating table: " . $conn->error);
}
