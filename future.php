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
  <!-- <title>Open Futures Account</title> -->
  <link rel="stylesheet" href="styles.css">
  <style>
    :root {
      --bg: #181A20;
      --text: #fff;
      --muted: #b7bdc6;
      --yellow: #fcd535;
      --card: #2e2c23;
      --btn: #fcd535;
      --btn-text: #181A20;
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
    .header {
      width: 100vw;
      max-width: 100vw;
      display: flex;
      align-items: center;
      padding: 32px 0 0 0;
      justify-content: center;
    }
    .toggle-switch {
      display: flex;
      background: #23262f;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .toggle-option {
      padding: 10px 32px;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--muted);
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .toggle-option.active {
      background: var(--yellow);
      color: var(--bg);
    }
    .toggle-option .usd {
      color: #fff;
      font-weight: bold;
    }
    .toggle-option .m {
      color: var(--yellow);
      font-size: 1.2em;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;
      min-height: 80vh;
      margin-left: -100px;
    }
    .icon {
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon-img {
      width: 64px;
      height: 64px;
      background: none;
      position: relative;
    }
    .icon-img svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .title {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 24px;
      text-align: center;
    }
    .promo-bar {
      background: var(--card);
      color: #fff;
      border-radius: var(--border-radius);
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 600px;
      width: 90vw;
      margin-bottom: 32px;
      font-size: 1.1rem;
      font-weight: 500;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .promo-bar .promo-icon {
      margin-left: 16px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .promo-bar .promo-icon svg {
      width: 100%;
      height: 100%;
    }
    .promo-bar .promo-text {
      flex: 1;
      text-align: center;
    }
    .desc {
      color: var(--muted);
      font-size: 1rem;
      text-align: center;
      max-width: 700px;
      margin: 0 auto 40px auto;
      line-height: 1.6;
    }
    .cta-btn {
      background: var(--btn);
      color: var(--btn-text);
      border: none;
      border-radius: 10px;
      padding: 18px 48px;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
      margin-top: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .cta-btn:hover {
      background: #ffe066;
    }
    @media (max-width: 600px) {
      .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding-left: 12px;
      }
      .toggle-switch {
        width: 100%;
      }
      .toggle-option {
        flex: 1;
        justify-content: center;
        padding: 10px 0;
        font-size: 1rem;
      }
      .container {
        min-height: 70vh;
      }
      .promo-bar {
        flex-direction: column;
        gap: 12px;
        padding: 16px 8px;
      }
      .promo-bar .promo-icon {
        margin-left: 0;
      }
      .title {
        font-size: 1.3rem;
      }
      .cta-btn {
        width: 100%;
        padding: 16px 0;
        font-size: 1.1rem;
      }
    }
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(24,26,32,0.85);
      z-index: 1000;
      width: 100vw;
      height: 100vh;
    }
    .modal-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #23262f;
      border-radius: 24px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.25);
      padding: 36px 32px 28px 32px;
      z-index: 1001;
      min-width: 320px;
      max-width: 90vw;
      width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .modal-icon {
      margin-bottom: 18px;
    }
    .modal-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 14px;
      color: #fff;
    }
    .modal-desc {
      color: #b7bdc6;
      font-size: 1.08rem;
      margin-bottom: 28px;
      line-height: 1.5;
    }
    .modal-btn {
      background: #fcd535;
      color: #181A20;
      border: none;
      border-radius: 10px;
      padding: 16px 0;
      width: 100%;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      margin-bottom: 18px;
      transition: background 0.2s;
    }
    .modal-btn:hover {
      background: #ffe066;
    }
    .modal-support {
      color: #fcd535;
      font-size: 1.1rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      gap: 4px;
    }
    @media (max-width: 500px) {
      .modal-popup {
        min-width: 0;
        width: 95vw;
        padding: 24px 6vw 18px 6vw;
      }
      .modal-title {
        font-size: 1.1rem;
      }
      .modal-btn {
        font-size: 1rem;
        padding: 13px 0;
      }
    }
  </style>
</head>
<body>
  <?php include 'sidebar.php'; ?>
  <div id="main-content">
    <div class="header">
      <div class="toggle-switch">
        <button class="toggle-option active" id="usd-toggle" onclick="toggleTab('usd')">
          <span class="usd">USD</span><span class="m">Ⓜ</span>
        </button>
        <button class="toggle-option" id="coinm-toggle" onclick="toggleTab('coinm')">
          COIN-M
        </button>
      </div>
    </div>
    <div class="container" id="content-area">
      <div class="icon">
        <div class="icon-img">
          <!-- Chart with exclamation SVG -->
          <svg viewBox="0 0 64 64" fill="none">
            <rect x="16" y="28" width="8" height="20" rx="2" fill="#353945"/>
            <rect x="28" y="20" width="8" height="28" rx="2" fill="#353945"/>
            <rect x="40" y="12" width="8" height="36" rx="2" fill="#353945"/>
            <circle cx="48" cy="48" r="10" fill="#fcd535"/>
            <rect x="46.5" y="42" width="3" height="7" rx="1.5" fill="#181A20"/>
            <rect x="46.5" y="51" width="3" height="3" rx="1.5" fill="#181A20"/>
          </svg>
        </div>
      </div>
      <div class="title">Open Futures Account</div>
      <div class="promo-bar">
        <div class="promo-text">Sign up and get up to $5,000 free position</div>
        <div class="promo-icon">
          <!-- Money box SVG -->
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="6" y="12" width="20" height="12" rx="2" fill="#fcd535"/>
            <rect x="10" y="16" width="12" height="4" rx="1" fill="#181A20"/>
            <circle cx="16" cy="10" r="4" fill="#fcd535" stroke="#181A20" stroke-width="2"/>
            <text x="16" y="13" text-anchor="middle" font-size="8" fill="#181A20" font-family="Arial" font-weight="bold">$</text>
          </svg>
        </div>
      </div>
      <div class="desc">
        Futures trading is a highly risky endeavor, with the potential for both great profits and significant losses. Please be aware that in the event of extreme price movement, there is a chance that all margin balance in your futures wallet may be liquidated. Futures trading is restricted for users from certain regions.
      </div>
      <button class="cta-btn" onclick="openModal()">Open Futures Account</button>
    </div>
    <div class="modal-backdrop" id="modal-backdrop" style="display:none;"></div>
    <div class="modal-popup" id="modal-popup" style="display:none;">
      <div class="modal-icon">
        <!-- ID card SVG -->
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="16" width="48" height="32" rx="4" fill="#353945"/>
          <rect x="16" y="24" width="16" height="12" rx="2" fill="#23262f"/>
          <rect x="36" y="24" width="12" height="4" rx="1" fill="#23262f"/>
          <rect x="36" y="32" width="12" height="4" rx="1" fill="#23262f"/>
          <circle cx="24" cy="30" r="3" fill="#fcd535"/>
        </svg>
      </div>
      <div class="modal-title">Identity Verification Required</div>
      <div class="modal-desc">To comply with regulations, complete identity verification to access MyCryptoBank  Futures services.</div>
      <button class="modal-btn" onclick="window.location.href='./get-verify.php'">Verify Now</button>
      <div class="modal-support">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="vertical-align:middle;margin-right:6px;">
          <circle cx="10" cy="10" r="10" fill="#fcd535"/>
          <path d="M10 14v-1m0-6a3 3 0 0 1 3 3c0 1.5-1.5 2-1.5 2h-3S7 11.5 7 10a3 3 0 0 1 3-3z" stroke="#181A20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Customer Support</span>
      </div>
    </div>
  </div>
  <script>
    function toggleTab(tab) {
      const usdBtn = document.getElementById('usd-toggle');
      const coinmBtn = document.getElementById('coinm-toggle');
      if(tab === 'usd') {
        usdBtn.classList.add('active');
        coinmBtn.classList.remove('active');
      } else {
        coinmBtn.classList.add('active');
        usdBtn.classList.remove('active');
      }
      // Content remains the same for both
    }
    function openModal() {
      document.getElementById('modal-backdrop').style.display = 'block';
      document.getElementById('modal-popup').style.display = 'flex';
    }
  </script>
</body>
</html>
