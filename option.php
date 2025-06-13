
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
  <!-- <title>MyCryptoBank  Options Agreement</title> -->
  <link rel="stylesheet" href="styles.css">
  <style>
    :root {
      --bg: #181A20;
      --text: #fff;
      --muted: #b7bdc6;
      --yellow: #fcd535;
      --card: #2e2c23;
      --btn: #363a45;
      --btn-text: #b7bdc6;
      --btn-active: #fcd535;
      --border-radius: 16px;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background: var(--bg, #181A20);
      color: var(--text, #fff);
      font-family: 'Inter', Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      padding-top: 100px;
      margin: 0;
    }
    #main-content {
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: calc(100vh - 100px);
      overflow-x: hidden;
      overflow-y: auto;
    }
    .option-container {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 16px;
    }
    .option-icon {
      margin-bottom: 32px;
      margin-top: 32px;
    }
    .option-icon svg {
      width: 96px;
      height: 96px;
      display: block;
      margin: 0 auto;
    }
    .option-desc {
      color: var(--muted);
      font-size: 1.08rem;
      max-width: 900px;
      margin: 0 auto 32px auto;
      line-height: 1.5;
      text-align: left;
    }
    .option-guide {
      color: var(--yellow);
      font-size: 1rem;
      margin-bottom: 40px;
      margin-top: 8px;
      text-align: left;
      width: 100%;
      max-width: 900px;
      text-decoration: none;
      display: block;
      font-weight: 500;
      cursor: pointer;
    }
    .option-agree-row {
      display: flex;
      align-items: center;
      margin-top: 32px;
      margin-bottom: 48px;
      width: 100%;
      max-width: 900px;
    }
    .option-checkbox {
      width: 20px;
      height: 20px;
      accent-color: var(--yellow);
      margin-right: 12px;
      cursor: pointer;
    }
    .option-agree-label {
      color: var(--muted);
      font-size: 1rem;
      user-select: none;
      cursor: pointer;
    }
    .option-agree-label .yellow {
      color: var(--yellow);
      font-weight: 500;
      text-decoration: none;
      margin-left: 2px;
    }
    .option-confirm-btn {
      background: var(--btn);
      color: var(--btn-text);
      border: none;
      border-radius: 8px;
      padding: 16px 0;
      width: 260px;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: not-allowed;
      opacity: 0.6;
      transition: background 0.2s, color 0.2s;
      margin: 0 auto 0 auto;
      display: block;
    }
    .option-confirm-btn.enabled {
      background: var(--btn-active);
      color: #181A20;
      cursor: pointer;
      opacity: 1;
    }
    @media (max-width: 600px) {
      .option-desc, .option-guide, .option-agree-row {
        max-width: 98vw;
        font-size: 0.98rem;
      }
      .option-confirm-btn {
        width: 100%;
        font-size: 1rem;
        padding: 14px 0;
      }
      .option-icon svg {
        width: 64px;
        height: 64px;
      }
    }
  </style>
</head>
<body>
  <?php include 'sidebar.php'; ?>
  <div id="main-content">
    <div class="option-container">
      <div class="option-icon">
        <!-- Warning SVG -->
        <svg viewBox="0 0 96 96" fill="none">
          <rect x="24" y="42" width="12" height="30" rx="3" fill="#353945"/>
          <rect x="42" y="30" width="12" height="42" rx="3" fill="#353945"/>
          <rect x="60" y="18" width="12" height="54" rx="3" fill="#353945"/>
          <circle cx="72" cy="72" r="15" fill="#fcd535"/>
          <rect x="69" y="63" width="6" height="11" rx="3" fill="#181A20"/>
          <rect x="69" y="77" width="6" height="6" rx="3" fill="#181A20"/>
        </svg>
      </div>
      <div class="option-desc">
        A MyCryptoBank  Option is a type of European Option contract which, unlike American style options, can only be exercised at expiry, but can be bought or sold at the current market price at any time prior to expiry.<br>
        Options trading is a highly risky endeavor with the potential for both great profits and significant losses.<br>
        The maximum loss of an Options buyer is the amount of premium paid to purchase the Option. An Options seller may however lose the entire amount of margin posted to collateralise its position and risks being subject to liquidation if sufficient margin is not maintained.<br>
        Options trading is restricted for users from certain regions. Only certain users will be eligible to act as Option Writers.<br>
        By trading Options on MyCryptoBank , you will be subject to the terms of the MyCryptoBank  Options Service Agreement.
      </div>
      <!-- <a href="#" class="option-guide">Click here to see Options Trading Guide</a> -->
      <div class="option-agree-row">
        <input type="checkbox" id="agree" class="option-checkbox" onclick="toggleConfirm()">
        <label for="agree" class="option-agree-label">
          I have read and agree to <a href="#" class="yellow">MyCryptoBank  Options Service Agreement</a>
        </label>
      </div>
      <button class="option-confirm-btn" id="confirmBtn" disabled>Confirm</button>
    </div>
  </div>
  <script>
    function toggleConfirm() {
      var cb = document.getElementById('agree');
      var btn = document.getElementById('confirmBtn');
      if(cb.checked) {
        btn.disabled = false;
        btn.classList.add('enabled');
      } else {
        btn.disabled = true;
        btn.classList.remove('enabled');
      }
    }
  </script>
</body>
</html>
