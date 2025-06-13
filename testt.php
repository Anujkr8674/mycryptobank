<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if (!isset($_SESSION['recovery_words']) || !isset($_SESSION['is_logged_in']) || $_SESSION['is_logged_in'] !== true) {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <title>Login Required</title> -->
      <style>
        body {
          background: #181A20;
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-popup-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(24,26,32,0.85);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-popup {
          background: #23262F;
          color: #fff;
          border-radius: 18px;
          box-shadow: 0 0 24px 0 rgba(0,0,0,0.5);
          padding: 36px 28px 28px 28px;
          max-width: 90vw;
          width: 350px;
          text-align: center;
          font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
          position: relative;
        }
        .custom-popup h2 {
          color: #F0B90B;
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        .custom-popup p {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 24px;
        }
        .custom-popup button {
          background: #F0B90B;
          color: #181A20;
          border: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .custom-popup button:hover {
          background: #e5a800;
        }
        @media (max-width: 480px) {
          .custom-popup {
            width: 98vw;
            padding: 18px 6vw 18px 6vw;
            border-radius: 10px;
          }
          .custom-popup h2 {
            font-size: 1.1rem;
          }
          .custom-popup button {
            font-size: 1rem;
            padding: 10px 18px;
          }
        }
      </style>
    </head>
    <body>
      <div class="custom-popup-bg">
        <div class="custom-popup">
          <h2>Login Required</h2>
          <p>Please login to access the dashboard.</p>
          <button onclick="window.location.href='new-login.php'">Login</button>
        </div>
      </div>
    </body>
    </html>
    <?php
    exit();
}
// Fetch wallet name and user ID from DB
require_once 'config.php';
$walletName = 'Wallet User';
$memberSince = 'Member Since';
$profilePic = 'Profile pic';


$userId = '';
if (isset($_SESSION['passcode'])) {
    $stmt = $conn->prepare("SELECT wallet_name, user_id, created_at, profile_pic FROM wallet_data WHERE passcode = ? ORDER BY id DESC LIMIT 1");
    $stmt->bind_param("s", $_SESSION['passcode']);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        $walletName = htmlspecialchars($user['wallet_name']);
        $userId = htmlspecialchars($user['user_id']);
        // $profilePic = htmlspecialchars(varchar: $user['profile_pic']);
        $profilePic = htmlspecialchars($user['profile_pic']);

        // $memberSince = htmlspecialchars($row['created_at']);

         // Convert 'created_at' to only date (YYYY-MM-DD)
        $createdAt = $user['created_at'];
        $dateTime = new DateTime($createdAt);
        $memberSince = $dateTime->format('Y-m-d');
    }
    $stmt->close();
}
$balances = [
    'BTC' => ['amount' => 0.00, 'usd' => 0.00, 'pnl' => 0.00, 'pnl_percent' => 0.00],
    'ETH' => ['amount' => 0.00, 'usd' => 0.00, 'pnl' => 0.00, 'pnl_percent' => 0.00],
    'BNB' => ['amount' => 0.00, 'usd' => 0.00, 'pnl' => 0.00, 'pnl_percent' => 0.00],
    'USDT' => ['amount' => 0.00, 'usd' => 0.00, 'pnl' => 0.00, 'pnl_percent' => 0.00],
];
$defaultCoin = 'BTC';
$default = $balances[$defaultCoin];
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
            padding-top: 130px;
            background: #181A20;
            color: #fff;
            font-family: 'Segoe UI', Arial, sans-serif;
        }
        .sidebar {
            width: 250px !important;
            min-width: 250px !important;
            max-width: 250px !important;
            background: #181A20;
            position: relative;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 1000;
        }
        #dashboard-content {
            flex: 1;
            width: 100%;
            padding: 20px;
        }
        .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 0 16px;
        }

        .sidebar-container{
            margin-top: -30px;
        }

        /* Responsive styles for different screen sizes */
        @media (max-width: 1200px) {
            #dashboard-content {
                padding: 15px;
                width: 100%;
            }
            .container {
                max-width: 100%;
            }
        }

        @media (max-width: 992px) {
            body {
                padding-top: 100px;
            }
            .sidebar {
                width: 200px !important;
                min-width: 200px !important;
                max-width: 200px !important;
            }
            #dashboard-content {
                width: 100%;
            }
        }

        @media (max-width: 768px) {
            body {
                padding-top: 80px;
            }
            .sidebar-container{
            margin-top: -2px;
        }
            .sidebar {
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                height: auto;
                position: relative;
                top: 0;
            }
            #dashboard-content {
                width: 100%;
                padding: 10px;
                padding-top: 100px;
            }
            .container {
                padding: 0 10px;
            }
            /* Adjust user info section */
            div[style*="background: #181A20; border-radius: 12px; padding: 24px; display: flex;"] {
                flex-direction: column;
                text-align: center;
                padding: 15px;
            }
            /* Adjust steps section */
            div[style*="display: flex; gap: 18px; flex-wrap: nowrap;"] {
                flex-direction: column;
                gap: 10px;
            }
            /* Make steps full width on mobile */
            div[style*="flex: 1 1 0; min-width: 220px;"] {
                min-width: 100%;
            }
            /* Adjust balance section */
            div[style*="margin-top: 28px; background: #181A20;"] {
                padding: 15px;
            }
            /* Make buttons stack on mobile */
            div[style*="display: flex; gap: 10px;"] {
                flex-direction: column;
            }
            button[style*="background: #23262F;"] {
                width: 100%;
                margin-bottom: 8px;
            }
        }

        @media (max-width: 480px) {
            body {
                padding-top: 60px;
            }
            .container {
                padding: 0 5px;
            }
            /* Adjust font sizes for smaller screens */
            div[style*="font-size: 1.3rem;"] {
                font-size: 1.1rem !important;
            }
            div[style*="font-size: 2.1rem;"] {
                font-size: 1.8rem !important;
            }
            /* Adjust profilePic size */
            img[style*="width: 100px;"] {
                width: 80px !important;
                height: 80px !important;
            }
        }
    </style>

   
   
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="dashboard-content" class="content-section">
        <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-start;">
          <!-- Left: User Info and Steps -->
          <div style="flex: 2; min-width: 320px;">



      <!-- Hide the old profile picture upload section -->
      <!--
      <div class="row">
        <div class="col-md-4">
          <h4>Profile Picture</h4>
          <?php if (!empty($user['profile_pic']) && file_exists($user['profile_pic'])): ?>
            <img style="display:none;" src="<?php echo $user['profile_pic']; ?>" class="profile-pic" alt="Profile Picture">
          <?php else: ?>
            <p>No profile picture uploaded.</p>
          <?php endif; ?>

          <div class="upload-form">
            <form action="upload_profile.php" method="POST" enctype="multipart/form-data">
              <input type="hidden" name="uid" value="<?php echo $userId; ?>">
              <div class="form-group">
                <label for="profile_pic">Upload New Profile Picture</label>
                <input type="file" name="profile_pic" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary mt-2">Upload</button>
            </form>
          </div>
        </div>

        <div class="col-md-8">
          <-- Existing content like charts or cards can go here -->
        </div>
      </div>
     


            <div id="user-info-block" style="background: #181A20; border-radius: 12px; padding: 24px; display: flex; align-items: center; gap: 24px; margin-bottom: 32px; justify-content: space-evenly;">
              <div id="profile-pic-container" style="position: relative; cursor: pointer;">
                <img id="main-profile-pic" src="<?php echo (!empty($user['profile_pic']) && file_exists($user['profile_pic'])) ? htmlspecialchars($user['profile_pic']) : './img/earn3.png'; ?>" alt="profilePic" style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #f0b90b; background: #23262F; display: block;">
                
                 <div id="upload-icon" style="position: absolute; bottom: 0; right: 0; background: #f0b90b; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; color: #181A20; font-size: 24px; font-weight: bold; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.3); line-height: 1;">
                    +
                 </div>
              </div>
              <form id="profile-upload-form" action="upload_profile.php" method="POST" enctype="multipart/form-data" style="display: none;">
                  <input type="hidden" name="uid" value="<?php echo $userId; ?>">
                  <input type="file" name="profile_pic" id="profile-pic-input" accept="image/*">
              </form>


              <div>
                <div style="font-size: 1.3rem; font-weight: 600; color: #fff;">
                  <?php echo $walletName; ?><br><span style="font-size: 1rem; color: #f0b90b;"> </span>
                </div>
                <div style="margin-top: 6px; color: #aaa; font-size: 0.95rem;">UID :  <span style="color: #fff;"><?php echo $userId; ?></span></div>
                <div style="margin-top: 2px; color: #aaa; font-size: 0.95rem;">Since : <span style="color: #fff;"><?php echo $memberSince; ?></span></div>
              </div>
            </div>
            <!-- User Info Section End -->
            <!-- News/Ads Ticker Start -->
            <div style="width: 100%; overflow: hidden; margin: 18px 0;">
              <div id="news-ticker" style="white-space: nowrap; display: inline-block; animation: ticker 18s linear infinite; font-size: 1.08rem; color: #f0b90b; font-weight: 600;">
                🚀  New feature: Instant Withdrawals now live! &nbsp;&nbsp;|&nbsp;&nbsp; Refer friends and earn rewards! &nbsp;&nbsp;|&nbsp;&nbsp; Stay tuned for more updates...
              </div>
            </div>
            <style>
            @keyframes ticker {
              0% { transform: translateX(100%);}
              100% { transform: translateX(-100%);}
            }
            #news-ticker:hover {
              animation-play-state: paused;
              cursor: pointer;
            }
            </style>
            <!-- News/Ads Ticker End -->
            <!-- Get Started Section Start -->
            <div style="background: #181A20; border-radius: 12px; padding: 24;">
              <div style="font-size: 1.2rem; font-weight: 600; color: #fff; margin-bottom: 18px;">Get Started</div>
              <div style="display: flex; gap: 18px; flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start;">
                <!-- Step 1: Verify Account -->
                <!-- <div style="flex: 1 1 0; min-width: 220px; background: #23262F; border-radius: 10px; padding: 18px; display: flex; flex-direction: column; align-items: flex-start; border: 1.5px solid #f0b90b;">
                  <div style="font-weight: 600; color: #fff; margin-bottom: 6px;">Verify Account</div>
                  <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 14px;">Complete identity verification to access all MyCryptoBank services</div>
                  <button style="background: #f0b90b; color: #181A20; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;" onclick="window.location.href='get-verify.php'">Verify Now</button>
                </div> -->

                <div style="flex: 1 1 0; min-width: 220px; background: #23262F; border-radius: 10px; padding: 18px; display: flex; flex-direction: column; align-items: flex-start; border: 1.5px solid #f0b90b;">
                  <div style="font-weight: 600; color: #fff; margin-bottom: 6px;">Build. Grow. Succeed</div>
                  <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 14px;">Your journey begins with a deposit at MyCryptoBank — your future unfolds with every trade.</div>
                  <!-- <button style="background: #f0b90b; color: #181A20; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;" onclick="window.location.href='get-verify.php'">Verify Now</button> -->
                </div>
                <!-- Step 2: Deposit -->
                <div style="flex: 1 1 0; min-width: 160px; background: #23262F; border-radius: 10px; padding: 18px; display: flex; flex-direction: column; align-items: flex-start; opacity: 0.7;">
                  <div style="font-weight: 600; color: #fff; margin-bottom: 6px;">Deposit</div>
                  <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 14px;">Pending</div>
                </div>
                <!-- Step 3: Trade -->
                <div style="flex: 1 1 0; min-width: 160px; background: #23262F; border-radius: 10px; padding: 18px; display: flex; flex-direction: column; align-items: flex-start; opacity: 0.7;">
                  <div style="font-weight: 600; color: #fff; margin-bottom: 6px;">Trade</div>
                  <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 14px;">Pending</div>
                </div>
              </div>
            </div>
            <!-- Estimated Balance section below cards -->
            <div style="margin-top: 28px; background: #181A20; border-radius: 12px; padding: 24px; min-width: 260px; max-width: 520px;">
              <div style="color: #aaa; font-size: 1.1rem; margin-bottom: 8px; font-weight: 500; display: flex; align-items: center; gap: 6px;">
                Estimated Balance
                <span id="toggleEye" style="cursor:pointer; display: flex; align-items: center;">
                  <svg id="eyeOpen" style="width: 18px; height: 18px; fill: #888; display:inline;" viewBox="0 0 24 24"><path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/></svg>
                  <svg id="eyeClosed" style="width: 18px; height: 18px; fill: #888; display:none;" viewBox="0 0 24 24"><path d="M12 5c-7 0-11 7-11 7s4 7 11 7c2.5 0 4.7-.6 6.6-1.6l1.4 1.4 1.4-1.4-18-18-1.4 1.4 2.1 2.1c-1.7 1.2-3.1 2.7-4.1 4.5 1.7 2.9 5.1 7 11 7 1.7 0 3.3-.3 4.7-.8l2.1 2.1 1.4-1.4-2.1-2.1c1.1-1.2 2-2.6 2.7-4.2-1.7-2.9-5.1-7-11-7zm0 12c-2.8 0-5-2.2-5-5 0-.7.1-1.4.4-2l6.6 6.6c-.6.2-1.3.4-2 .4zm7.6-2.6l-1.4-1.4c.2-.6.4-1.3.4-2 0-2.8-2.2-5-5-5-.7 0-1.4.1-2 .4l-1.4-1.4c1.2-.7 2.6-1.1 4-1.1 5.9 0 9.3 4.1 11 7-1.1 1.8-2.5 3.3-4.1 4.5z"/></svg>
                </span>
              </div>
              <!-- Dropdown -->
              <div style="display: flex; align-items: center; gap: 8px;">
                <span id="balance-amount" style="font-size: 2.1rem; color: #fff; font-weight: 700;">
                  <?php echo number_format($default['amount'], 2); ?>
                </span>
                <div class="custom-dropdown" style="position: relative;">
                  <button id="dropdownBtn" style="background: none; border: none; color: #fff; font-size: 13px; font-weight: 400; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                    <span id="selectedCoin"><?php echo $defaultCoin; ?></span>
                    <svg style="width: 16px; height: 16px; fill: #fff;" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                  </button>
                  <div id="dropdownList" style="display: none; position: absolute; top: 120%; left: 0; background: #23262F; border-radius: 10px; box-shadow: 0 2px 12px #0008; min-width: 100px; z-index: 10;">
                    <?php foreach(array_keys($balances) as $coin): ?>
                      <div class="dropdown-item" data-coin="<?php echo $coin; ?>" style="padding: 12px 18px; color: #fff; cursor: pointer; font-size: 13px; border-bottom: 1px solid #222;">
                        <?php echo $coin; ?>
                      </div>
                    <?php endforeach; ?>
                  </div>
                </div>
              </div>
              <div id="balance-usd" style="color: #aaa; font-size: 1rem; margin-bottom: 8px;">
                ≈ $<?php echo number_format($default['usd'], 2); ?>
              </div>
              <div id="balance-pnl" style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">
                Today's PnL <span style="color: #fff;">+ $<?php echo number_format($default['pnl'], 2); ?> (<?php echo number_format($default['pnl_percent'], 2); ?>%)</span>
              </div>
              <div style="display: flex; gap: 10px;">
                <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Deposit</button>
                <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Withdraw</button>
                <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Cash In</button>
              </div>
            </div>
          </div>
          <!-- Right: Balance Card -->
         
        </div>
      </div>
      
</body>

</html>

<!-- Dropdown CSS -->
<style>
.custom-dropdown:focus-within #dropdownList,
.custom-dropdown.open #dropdownList {
  display: block !important;
}
#dropdownList .dropdown-item:last-child { border-bottom: none; }
#dropdownList .dropdown-item:hover { background: #181A20; color: #f0b90b; }
</style>

<!-- Dropdown JS -->
<script>
const balances = <?php echo json_encode($balances); ?>;
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownList = document.getElementById('dropdownList');
const selectedCoin = document.getElementById('selectedCoin');
const balanceAmount = document.getElementById('balance-amount');
const balanceUsd = document.getElementById('balance-usd');
const balancePnl = document.getElementById('balance-pnl');

let isHidden = false;
const eyeOpen = document.getElementById('eyeOpen');
const eyeClosed = document.getElementById('eyeClosed');
const toggleEye = document.getElementById('toggleEye');

function setBalanceDisplay(hidden, coin = null) {
  if (hidden) {
    balanceAmount.textContent = '******';
    balanceUsd.textContent = '******';
    balancePnl.innerHTML = "Today's PnL <span style=\"color: #fff;\">******</span>";
  } else {
    const c = coin || selectedCoin.textContent;
    balanceAmount.textContent = Number(balances[c].amount).toFixed(2);
    balanceUsd.textContent = '≈ $' + Number(balances[c].usd).toFixed(2);
    balancePnl.innerHTML = `Today's PnL <span style=\"color: #fff;\">+ $${Number(balances[c].pnl).toFixed(2)} (${Number(balances[c].pnl_percent).toFixed(2)}%)</span>`;
  }
}

toggleEye.onclick = function() {
  isHidden = !isHidden;
  eyeOpen.style.display = isHidden ? 'none' : 'inline';
  eyeClosed.style.display = isHidden ? 'inline' : 'none';
  setBalanceDisplay(isHidden);
};

dropdownBtn.onclick = function(e) {
  e.stopPropagation();
  dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
};
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.onclick = function() {
    const coin = this.getAttribute('data-coin');
    selectedCoin.textContent = coin;
    dropdownList.style.display = 'none';
    setBalanceDisplay(isHidden, coin);
  };
});
window.onclick = function(e) {
  if (!dropdownBtn.contains(e.target)) dropdownList.style.display = 'none';
};

const profilePicContainer = document.getElementById('profile-pic-container');
const profilePicInput = document.getElementById('profile-pic-input');
const profileUploadForm = document.getElementById('profile-upload-form');

profilePicContainer.onclick = function() {
    profilePicInput.click();
};

profilePicInput.onchange = function() {
    if (this.files.length > 0) {
        profileUploadForm.submit();
    }
};
</script>
