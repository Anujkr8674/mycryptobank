<?php
session_start();

// Check if user is logged in and verified
if (!isset($_SESSION['user_id']) || !isset($_SESSION['is_verified']) || $_SESSION['is_verified'] !== true) {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0e0e0e;
            color: #fff;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1a1a1a;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }
        h1 {
            color: #00c896;
            text-align: center;
            margin-bottom: 30px;
        }
        .welcome-message {
            text-align: center;
            font-size: 18px;
            margin-bottom: 20px;
        }
        .back-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #00c896;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .back-btn:hover {
            background-color: #00a87a;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Verified User Page</h1>
        <div class="welcome-message">
            Congratulations! You are a verified user and can now access all features.
        </div>
        <div style="text-align: center;">
            <a href="p2222p.php" class="back-btn">Back to Main Page</a>
        </div>
    </div>
</body>
</html> 