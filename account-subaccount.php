<?php include "login-stay.php"; ?>
    <?php

// Fetch wallet name and user ID from DB
require_once 'config.php';
$walletName = 'Wallet User';
$userId = '';
if (isset($_SESSION['passcode'])) {
    $stmt = $conn->prepare("SELECT wallet_name, user_id FROM wallet_data WHERE passcode = ? ORDER BY id DESC LIMIT 1");
    $stmt->bind_param("s", $_SESSION['passcode']);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        $walletName = htmlspecialchars($row['wallet_name']);
        $userId = htmlspecialchars($row['user_id']);
    }
    $stmt->close();
}?>
<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            min-height: 100vh;
            background: #0f0f0f;
            padding-top: 100px;
        }
        #main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="main-content">
        <div id="sub-accounts-content" class="content-section">
            <div style="max-width: 340px; margin: 0 auto; background: #181A20; border-radius: 12px; padding: 38px 24px 38px 24px; display: flex; flex-direction: column; align-items: center; box-shadow: none; border: none;">
              <div style="position: relative; margin-bottom: 24px;">
                <svg width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="45" cy="25" r="25" fill="#EDEDED"/>
                  <rect x="15" y="40" width="60" height="25" rx="8" fill="#8A8D93"/>
                  <rect x="35" y="40" width="20" height="25" rx="8" fill="#BFC2C7"/>
                </svg>
                <span style="position: absolute; right: 0; top: 0; background: #f0b90b; color: #181A20; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; border: 3px solid #181A20;">!</span>
              </div>
              <div style="color: #bfc2c7; font-size: 1.13rem; text-align: center; margin-bottom: 8px; line-height: 1.5;">
                Sub Accounts allow you to trade through multiple accounts. Please click Activate below to enable the function. <a href="#" style="color: #f0b90b; text-decoration: none;">Learn more.</a>
              </div>
              <button style="margin-top: 28px; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 16px 38px; font-weight: 700; font-size: 1.18rem; cursor: pointer;">Activate</button>
            </div>
        </div>
    </div>
</body>
</html>