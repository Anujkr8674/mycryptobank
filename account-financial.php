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
        @media (max-width: 768px) {
          #main-content {
            margin-top: 50px;
          }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="main-content">
        <div id="financial-management-content" class="content-section">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px;">
              <h1 style="color: #fff; font-size: 2.4rem; font-weight: 700; margin: 0;">Financial Reports</h1>
              <button id="refreshBtn" style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 600; font-size: 1.13rem; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.2rem;">&#8635;</span> Refresh
              </button>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 340px; margin-top: 48px;">
              <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 88px; opacity: 0.35; margin-bottom: 24px;">
              <div style="color: #888c98; font-size: 1.35rem; text-align: center;">There are no documents generated for you at this time.</div>
            </div>
        </div>
    </div>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var refreshBtn = document.getElementById('refreshBtn');
        if(refreshBtn) {
            refreshBtn.onclick = function() {
                location.reload();
            };
        }
    });
    </script>
</body>
</html>