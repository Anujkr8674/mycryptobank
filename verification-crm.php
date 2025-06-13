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
    :root {
      --bg: #181A20;
      --card: #23262f;
      --border: #23262f;
      --text: #fff;
      --muted: #b7bdc6;
      --yellow: #fcd535;
      --btn: #fcd535;
      --btn-text: #181A20;
      --btn-hover: #ffe066;
      --border-radius: 12px;
      --table-header: #23262f;
      --table-row: #23262f;
      --table-border: #23262f;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
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
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 36px 16px 0 16px;
    }
    .verif-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .verif-desc {
      color: var(--muted);
      font-size: 1.08rem;
      margin-bottom: 4px;
    }
    .verif-link {
      color: var(--yellow);
      text-decoration: underline;
      font-size: 1.08rem;
      font-weight: 500;
      cursor: pointer;
    }
    .verif-table {
      width: 100%;
      background: var(--card);
      border-radius: var(--border-radius) var(--border-radius) 0 0;
      margin-top: 32px;
      padding: 0 0 0 0;
      overflow: hidden;
    }
    .verif-row {
      display: flex;
      align-items: center;
      padding: 0 32px;
      min-height: 64px;
      border-bottom: 1px solid #23262f;
      font-size: 1.08rem;
    }
    .verif-row.header {
      color: var(--muted);
      font-weight: 500;
      background: var(--table-header);
      border-bottom: 1.5px solid var(--table-border);
      min-height: 48px;
      font-size: 1.05rem;
    }
    .verif-cell {
      flex: 1;
      padding: 18px 0;
      min-width: 0;
      word-break: break-word;
    }
    .verif-cell:last-child {
      flex: 0 0 48px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 0;
    }
    .verif-link-yellow {
      color: var(--yellow);
      text-decoration: underline;
      cursor: pointer;
      font-weight: 500;
    }
    .verif-arrow {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      border: none;
      background: none;
      transition: background 0.15s;
    }
    .verif-arrow:hover {
      background: #23262f;
    }
    .verif-arrow svg {
      display: block;
      width: 24px;
      height: 24px;
      transition: transform 0.2s;
    }
    .verif-arrow.open svg {
      transform: rotate(180deg);
    }
    .verif-details {
      background: #23262f;
      border-radius: 0 0 var(--border-radius) var(--border-radius);
      padding: 32px 32px 24px 32px;
      margin-bottom: 32px;
      display: none;
      animation: fadeIn 0.2s;
    }
    .verif-details.open {
      display: block;
    }
    .verif-details-row {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    .verif-details-label {
      color: var(--muted);
      font-size: 1rem;
      min-width: 160px;
      font-weight: 500;
      margin-right: 18px;
    }
    .verif-details-value {
      color: #fff;
      font-size: 1.08rem;
      font-weight: 500;
      word-break: break-all;
    }
    .verif-details-value .yellow {
      color: var(--yellow);
      font-weight: 600;
    }
    .verif-details-value .muted {
      color: var(--muted);
      font-weight: 500;
    }
    .verif-details-label .info {
      margin-left: 6px;
      vertical-align: middle;
      cursor: pointer;
    }
    .verif-download-btn {
      background: var(--btn);
      color: var(--btn-text);
      border: none;
      border-radius: 8px;
      padding: 12px 28px;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      margin-top: 18px;
      margin-bottom: 24px;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .verif-download-btn:hover {
      background: var(--btn-hover);
    }
    .verif-note {
      color: var(--muted);
      font-size: 1rem;
      margin-top: 18px;
      line-height: 1.5;
    }
    .verif-note .verif-link-yellow {
      color: var(--yellow);
      text-decoration: underline;
      font-weight: 500;
    }
    @media (max-width: 700px) {
      .container {
        padding: 18px 2vw 0 2vw;
      }
      .verif-row, .verif-details {
        padding: 12px 6px 12px 6px;
      }
      .verif-details-label {
        min-width: 90px;
        font-size: 0.98rem;
      }
      .verif-details-value {
        font-size: 0.98rem;
      }
      .verif-download-btn {
        width: 100%;
        font-size: 1rem;
        padding: 12px 0;
      }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>
  <?php include 'sidebar.php'; ?>
  <div id="main-content">
    <div class="container">
      <div class="verif-title">Verification</div>
      <div class="verif-desc">We regularly perform a Proof of Reserves verification as confirmation that your funds are safe and held 1:1 within MyCryptoBank .<a href="./proof.php" target="_blank" rel="noopener noreferrer"> <span class="verif-link">Learn More</span></a></div>
      <div class="verif-desc">For more information and FAQ about third-party verification, <a href="./Verification-faq.php" target="_blank" rel="noopener noreferrer"><span class="verif-link">click here</span></a></div>
      <div class="verif-table">
        <div class="verif-row header">
          <div class="verif-cell">Verification ID</div>
          <div class="verif-cell">Verification Date</div>
          <div class="verif-cell">Verification Mechanism</div>
          <div class="verif-cell">Verification Type</div>
          <div class="verif-cell"></div>
        </div>
        <div class="verif-row">
          <div class="verif-cell">PR22NOV22</div>
          <div class="verif-cell">22/11/22</div>
          <div class="verif-cell">Mazars</div>
          <div class="verif-cell"><span class="verif-link-yellow">Proof of Reserves</span></div>
          <div class="verif-cell">
            <button class="verif-arrow" id="toggleDetails" onclick="toggleDetails()">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 10l5 5 5-5" stroke="#b7bdc6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 6l5 5 5-5" stroke="#b7bdc6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="verif-details" id="verifDetails">
          <div class="verif-details-row">
            <div class="verif-details-label">Record ID</div>
            <div class="verif-details-value muted">N/A</div>
          </div>
          <div class="verif-details-row">
            <div class="verif-details-label">Asset Coverage</div>
            <div class="verif-details-value"><span class="yellow">BTC,D.BTC,N.BTC</span></div>
          </div>
          <div class="verif-details-row">
            <div class="verif-details-label">Account Code</div>
            <div class="verif-details-value muted">N/A</div>
          </div>
          <div class="verif-details-row">
            <div class="verif-details-label">Merkle Hash <span class="info" title="Merkle Hash Info"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#b7bdc6"/><text x="8" y="12" text-anchor="middle" font-size="10" fill="#23262f" font-family="Arial" font-weight="bold">i</text></svg></span></div>
            <div class="verif-details-value muted">N/A</div>
          </div>
          <div class="verif-details-row">
            <div class="verif-details-label">Merkle Leaf</div>
            <div class="verif-details-value muted">N/A</div>
          </div>
          <button class="verif-download-btn">Download Report <span style="font-size:1.2em;">↓</span></button>
          <div class="verif-note">
            Please note that audits are only available for users that have certain assets that they are holding during the snapshot. For more information on asset coverage and the snapshot, please refer to <a href="./proof.php" target="_blank" rel="noopener noreferrer"><span class="verif-link-yellow">Proof of Reserves.</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
    function toggleDetails() {
      var details = document.getElementById('verifDetails');
      var arrow = document.getElementById('toggleDetails');
      details.classList.toggle('open');
      arrow.classList.toggle('open');
    }
  </script>
</body>
</html>
