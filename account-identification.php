<?php include "login-stay.php"; ?>
    <?php
  
// Fetch wallet name and user ID from DB
require_once 'config.php';


$userId = '';
$walletName = 'Wallet User';
// $profilePic = 'Profile pic';
if (isset($_SESSION['user_id'])) {
  $stmt = $conn->prepare("SELECT wallet_name, user_id, created_at, profile_pic FROM wallet_data WHERE user_id = ? LIMIT 1");
  $stmt->bind_param("s", $_SESSION['user_id']);
  $stmt->execute();
  $result = $stmt->get_result();
  $user = $result->fetch_assoc();

  if (!$user) {
      // If user data not found for this user_id, something is wrong. Log out.
      // error_log("DEBUG: User data not found in DB for user_id in session: " . $_SESSION['user_id']);
      session_destroy();
      header("Location: new-login.php");
      exit();
  }

  // Populate variables from fetched user data
  $walletName = htmlspecialchars($user['wallet_name']);
  $userId = htmlspecialchars($user['user_id']);
  $profilePic = htmlspecialchars($user['profile_pic']);

  // Convert 'created_at' to only date (YYYY-MM-DD)
  $createdAt = $user['created_at'];
  // $dateTime = new DateTime($createdAt);
  // $memberSince = $dateTime->format('Y-m-d');

} else {
  // If is_logged_in is true but user_id is NOT set, something is wrong.
  // error_log("DEBUG: User logged in but user_id not set in session. Logging out.");
  session_destroy();
  header("Location: new-login.php");
  exit();
}
?>



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
            font-family: 'Inter', Arial, sans-serif;
        }
        #main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            width: 100%;
            margin-left: 0;
        }

        /* Responsive styles for different screen sizes */
        @media (max-width: 1200px) {
            #main-content {
                padding: 15px;
            }
            div[style*="max-width: 100%;"] {
                padding: 30px !important;
            }
        }

        @media (max-width: 992px) {
            body {
                padding-top: 80px;
            }
            #main-content {
                margin-left: 200px;
                width: calc(100% - 200px);
                padding: 15px;
            }
            div[style*="font-size: 2.1rem;"] {
                font-size: 1.8rem !important;
            }
            div[style*="font-size: 1.3rem;"] {
                font-size: 1.2rem !important;
            }
            button[style*="width: 30%;"] {
                width: 40% !important;
            }
        }

        @media (max-width: 768px) {
            body {
                padding-top: 60px;
            }
            #main-content {
                margin-left: 0;
                width: 100%;
                padding: 10px;
                padding-top: 100px;
                margin-top: 50px;
            }
            div[style*="display: flex; align-items: center; gap: 22px;"] {
                flex-direction: column;
                align-items: flex-start !important;
                gap: 15px !important;
                margin-left: 10px !important;
            }
            div[style*="max-width: 100%;"] {
                padding: 20px !important;
                margin: 0 10px !important;
            }
            div[style*="display: flex; justify-content: flex-start; gap: 32px;"] {
                flex-direction: column;
                gap: 15px !important;
            }
            button[style*="width: 30%;"] {
                width: 100% !important;
            }
            img[style*="width: 80px;"] {
                width: 60px !important;
                height: 60px !important;
            }
            div[style*="font-size: 1.35rem;"] {
                font-size: 1.2rem !important;
            }
            div[style*="font-size: 1.08rem;"] {
                font-size: 1rem !important;
            }
            div[style*="font-size: 1.01rem;"] {
                font-size: 0.9rem !important;
            }
        }

        @media (max-width: 480px) {
            body {
                padding-top: 50px;
            }
            #main-content {
                padding: 8px;
                padding-top: 100px;
            }
            div[style*="display: flex; align-items: center; gap: 22px;"] {
                margin-left: 5px !important;
            }
            div[style*="max-width: 100%;"] {
                padding: 15px !important;
                margin: 0 5px !important;
                border-radius: 12px !important;
            }
            div[style*="font-size: 2.1rem;"] {
                font-size: 1.5rem !important;
            }
            div[style*="font-size: 1.3rem;"] {
                font-size: 1.1rem !important;
            }
            img[style*="width: 80px;"] {
                width: 50px !important;
                height: 50px !important;
            }
            div[style*="font-size: 1.35rem;"] {
                font-size: 1.1rem !important;
            }
            div[style*="font-size: 1.08rem;"] {
                font-size: 0.9rem !important;
            }
            div[style*="font-size: 1.01rem;"] {
                font-size: 0.85rem !important;
            }
            button[style*="width: 30%;"] {
                padding: 15px 0 !important;
                font-size: 1.1rem !important;
            }
            span[style*="width: 48px;"] {
                width: 40px !important;
                height: 40px !important;
            }
            img[style*="width: 32px;"] {
                width: 24px !important;
                height: 24px !important;
            }
        }
    </style>
</head>
<body>
   <?php include "sidebar.php"; ?>
    <div id="main-content">
        <div id="identification-content" class="content-section">
            <!-- Top user info row (outside card) -->
            <div style="display: flex; align-items: center; gap: 22px; margin-bottom: 36px; margin-left: 24px;">
            <img id="main-profile-pic" src="<?php echo (!empty($profilePic) && file_exists($profilePic)) ? htmlspecialchars($profilePic) : './img/earn3.png'; ?>" style="width: 80px; height: 80px; border-radius: 16px;  border: none;">
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">
                  <?php echo $walletName; ?> 
                </div>
                <div style="display: flex; align-items: center; gap: 16px;">
                  <span style="color: #bfc2c7; font-size: 1.08rem;">UID: <?php echo $userId; ?></span><br/>
                </div>
                  <!-- <span style="background: #23262F; color: #bfc2c7; font-size: 1.01rem; font-weight: 600; border-radius: 7px; padding: 4px 14px; margin-left: 0;">Unverified</span> -->
                  <div style="margin-top: 2px; color: #aaa; font-size: 0.95rem;">Since : <span style="color: #fff;"><?php echo $createdAt; ?></span>
                </div>
              </div>
            </div>
            <!-- Card -->
            <!-- <div style="max-width: 100%; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 38px 38px 32px 38px; border: 1.5px solid #23262F;">
              <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 18px;">
                <span style="font-size: 2.1rem; color: #bfc2c7; display: flex; align-items: center; justify-content: center; background: #23262F; border-radius: 8px; width: 48px; height: 48px;">
                  <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="doc" style="width: 32px; height: 32px; opacity: 0.7;">
                </span>
                <span style="font-size: 1.3rem; font-weight: 700; color: #fff;">Complete Identity Verification</span>
              </div>
              <a href="get-verify.php" style="text-decoration: none; color: #fff;">
              <button style="width: 30%; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 18px 0; font-weight: 700; font-size: 1.18rem; margin: 18px 0 0 0; cursor: pointer;">Get Verified</button></a>
              <div style="display: flex; justify-content: flex-start; gap: 32px; margin-top: 24px;">
                <span style="color: #bfc2c7; font-size: 1.08rem; display: flex; align-items: center; gap: 6px;"><span style="font-size: 1.2rem;">&#128712;</span> Need help?</span>
                <a href="./verification-faq">
                <span style="color: #bfc2c7; font-size: 1.08rem; display: flex; text-decoration: none; align-items: center; gap: 6px;"><span style="font-size: 1.2rem;">&#128712;</span> Identity Verification FAQ</span></a>
              </div>
            </div> -->

            <div style="max-width: 100%; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 38px 38px 32px 38px; border: 1.5px solid #23262F;">
              <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 18px;">
                <span style="font-size: 2.1rem; color: #bfc2c7; display: flex; align-items: center; justify-content: center;  border-radius: 8px; width: 48px; height: 48px;">
                <img id="main-profile-pic" src="<?php echo (!empty($profilePic) && file_exists($profilePic)) ? htmlspecialchars($profilePic) : './img/earn3.png'; ?>" alt="doc" style="width: 32px; height: 32px; opacity: 0.8;">
                </span>
                <span style="font-size: 1.3rem; font-weight: 700; color: #fff;">Welcome back <?php echo $walletName; ?></span>
              </div>


              <span style="font-size: 14px;  color: #fff;">You're not just a trader — you're a trend-setter. Your smart decisions, calm mindset, and sharp instincts make you stand out on MyCryptoBank. Whether it's spotting the right entry point or knowing when to hold, your every move reflects confidence and experience. Keep leading with the same energy — your journey is inspiring, and the future is yours to conquer.</span>


             
            </div>
          </div>
    </div>
</body>
</html>