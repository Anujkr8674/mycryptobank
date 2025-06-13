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
      --btn: #363a45;
      --btn-hover: #454a54;
      --border-radius: 18px;
      --table-header: #23262f;
      --table-row: #181A20;
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
      padding: 0 16px;
      width: 100%;
    }
    .card {
      background: var(--card);
      border-radius: var(--border-radius);
      padding: 32px 32px 24px 32px;
      margin-bottom: 32px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .balance-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .balance-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .balance-amount {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 2px;
      display: flex;
      align-items: baseline;
      gap: 8px;
    }
    .balance-amount span {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--muted);
    }
    .balance-usd {
      color: var(--muted);
      font-size: 1.1rem;
    }
    .balance-actions {
      display: flex;
      gap: 16px;
      margin-top: 4px;
    }
    .balance-btn {
      background: var(--btn);
      color: var(--text);
      border: none;
      border-radius: 8px;
      padding: 10px 24px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      margin-left: 0;
      transition: background 0.2s;
    }
    .balance-btn:hover {
      background: var(--btn-hover);
    }
    .funding-section {
      background: var(--card);
      border-radius: var(--border-radius);
      padding: 32px 24px 32px 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .funding-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 24px;
    }
    .funding-controls {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 18px;
      justify-content: flex-end;
    }
    .funding-search {
      background: var(--btn);
      border: none;
      border-radius: 6px;
      padding: 7px 10px;
      color: var(--text);
      font-size: 1.1rem;
      margin-right: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .funding-checkbox {
      margin-left: 8px;
      accent-color: var(--btn);
      width: 16px;
      height: 16px;
      vertical-align: middle;
    }
    .funding-label {
      color: var(--muted);
      font-size: 1rem;
      margin-left: 4px;
      vertical-align: middle;
      cursor: pointer;
    }
    .funding-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin-top: 0;
    }
    .funding-table th, .funding-table td {
      padding: 16px 8px;
      text-align: left;
      font-size: 1.08rem;
    }
    .funding-table th {
      color: var(--muted);
      font-weight: 500;
      background: var(--table-header);
      border-bottom: 1.5px solid var(--table-border);
    }
    .funding-table td {
      color: var(--text);
      border-bottom: 1px solid var(--table-border);
      vertical-align: middle;
    }
    .coin-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .coin-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .coin-btc { background: #f7931a; }
    .coin-eth { background: #627eea; }
    .coin-bnb { background: #f3ba2f; }
    .coin-usdt { background: #26a17b; }
    .coin-symbol {
      font-weight: 600;
      font-size: 1.08rem;
    }
    .coin-name {
      color: var(--muted);
      font-size: 0.98rem;
      font-weight: 400;
    }
    .funding-action {
      color: var(--text);
      font-size: 1rem;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
      margin-right: 12px;
      transition: color 0.2s;
    }
    .funding-action:hover {
      color: var(--yellow);
    }
    .funding-convert {
      color: var(--muted);
      font-size: 1rem;
      font-weight: 500;
      text-decoration: underline;
      cursor: pointer;
      margin-right: 12px;
      transition: color 0.2s;
    }
    .funding-convert:hover {
      color: var(--yellow);
    }
    .funding-menu {
      color: var(--muted);
      font-size: 1.6rem;
      cursor: pointer;
      padding: 0 8px;
      vertical-align: middle;
    }
    .dropdown {
      display: inline-block;
      position: relative;
      margin-left: 4px;
    }
    .dropdown-toggle {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 2px;
      outline: none;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
      min-width: 120px;
      background: #23262f;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
      z-index: 10;
      padding: 12px 0;
      font-size: 1.1rem;
    }
    .dropdown.open .dropdown-menu {
      display: block;
    }
    .dropdown-item {
      color: #fff;
      padding: 8px 24px;
      cursor: pointer;
      transition: background 0.18s, color 0.18s;
      font-weight: 500;
    }
    .dropdown-item.selected {
      color: var(--yellow);
    }
    .dropdown-item:hover {
      background: #181A20;
    }
    @media (max-width: 900px) {
      .container {
        max-width: 100vw;
        padding: 0 4vw;
      }
      .card, .funding-section {
        padding: 18px 4vw 18px 4vw;
      }
      .funding-table th, .funding-table td {
        padding: 10px 4px;
        font-size: 0.98rem;
      }
    }
    @media (max-width: 600px) {
      .container {
        padding: 0 2vw;
      }
      .card, .funding-section {
        padding: 12px 2vw 12px 2vw;
      }
      .balance-title, .funding-title {
        font-size: 1.1rem;
      }
      .balance-amount {
        font-size: 1.3rem;
      }
      .funding-table th, .funding-table td {
        padding: 7px 2px;
        font-size: 0.92rem;
      }
      .coin-icon {
        width: 22px;
        height: 22px;
        font-size: 1rem;
      }
      .balance-actions {
        flex-direction: column;
        gap: 8px;
      }
      .dropdown-menu {
        min-width: 90px;
        font-size: 0.98rem;
        left: 0;
        transform: none;
      }
      .dropdown-item {
        padding: 7px 14px;
      }
    }
  </style>
</head>
<body>
  <?php include 'sidebar.php'; ?>
  <div id="main-content">
    <div class="container">
      <div class="card">
        <div class="balance-info">
          <div class="balance-title">Estimated Balance <span style="font-size:1.1rem; color:#b7bdc6;">🔒</span></div>
          <div class="balance-amount">0.00 
            <div class="dropdown" id="coinDropdown">
              <button class="dropdown-toggle" onclick="toggleDropdown()">
                <span id="selectedCoin">BTC</span> <span style="font-size:1.1rem;">▼</span>
              </button>
              <div class="dropdown-menu" id="dropdownMenu">
                <div class="dropdown-item selected" onclick="selectCoin('BTC', this)">BTC</div>
                <div class="dropdown-item" onclick="selectCoin('ETH', this)">ETH</div>
                <div class="dropdown-item" onclick="selectCoin('BNB', this)">BNB</div>
                <div class="dropdown-item" onclick="selectCoin('USDT', this)">USDT</div>
              </div>
            </div>
          </div>
          <div class="balance-usd">≈ $0.00</div>
        </div>
        <div class="balance-actions">
          <button class="balance-btn">Deposit</button>
          <button class="balance-btn">Withdraw</button>
          <button class="balance-btn">Transfer</button>
        </div>
      </div>
      <div class="funding-section">
        <div class="funding-title">Funding</div>
        <div class="funding-controls">
          <button class="funding-search" title="Search"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#b7bdc6" stroke-width="1.5"/><path d="M13.5 13.5L16 16" stroke="#b7bdc6" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <input type="checkbox" class="funding-checkbox" id="hide-assets">
          <label for="hide-assets" class="funding-label">Hide assets &lt;1 USD</label>
        </div>
        <table class="funding-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Amount</th>
              <th>Available</th>
              <th>Frozen</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="coin-info">
                  <span class="coin-icon coin-btc"> <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#f7931a"/><text x="10" y="15" text-anchor="middle" font-size="11" fill="#fff" font-family="Arial" font-weight="bold">₿</text></svg> </span>
                  <div>
                    <div class="coin-symbol">BTC</div>
                    <div class="coin-name">Bitcoin</div>
                  </div>
                </div>
              </td>
              <td>0.00<br><span style="color:#b7bdc6; font-size:0.95em;">$0.00</span></td>
              <td>0.00</td>
              <td>0.00</td>
              <td><span class="funding-action">Buy / Sell</span><span class="funding-convert">Convert</span><span class="funding-menu">⋮</span></td>
            </tr>
            <tr>
              <td>
                <div class="coin-info">
                  <span class="coin-icon coin-eth"> <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#627eea"/><polygon points="10,4 15,14 10,12 5,14" fill="#fff"/></svg> </span>
                  <div>
                    <div class="coin-symbol">ETH</div>
                    <div class="coin-name">Ethereum</div>
                  </div>
                </div>
              </td>
              <td>0.00<br><span style="color:#b7bdc6; font-size:0.95em;">$0.00</span></td>
              <td>0.00</td>
              <td>0.00</td>
              <td><span class="funding-action">Buy / Sell</span><span class="funding-convert">Convert</span><span class="funding-menu">⋮</span></td>
            </tr>
            <tr>
              <td>
                <div class="coin-info">
                  <span class="coin-icon coin-bnb"> <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#f3ba2f"/><polygon points="10,5 13,10 10,15 7,10" fill="#fff"/></svg> </span>
                  <div>
                    <div class="coin-symbol">BNB</div>
                    <div class="coin-name">BNB</div>
                  </div>
                </div>
              </td>
              <td>0.00<br><span style="color:#b7bdc6; font-size:0.95em;">$0.00</span></td>
              <td>0.00</td>
              <td>0.00</td>
              <td><span class="funding-action">Buy / Sell</span><span class="funding-convert">Convert</span><span class="funding-menu">⋮</span></td>
            </tr>
            <tr>
              <td>
                <div class="coin-info">
                  <span class="coin-icon coin-usdt"> <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#26a17b"/><text x="10" y="15" text-anchor="middle" font-size="11" fill="#fff" font-family="Arial" font-weight="bold">T</text></svg> </span>
                  <div>
                    <div class="coin-symbol">USDT</div>
                    <div class="coin-name">TetherUS</div>
                  </div>
                </div>
              </td>
              <td>0.00<br><span style="color:#b7bdc6; font-size:0.95em;">$0.00</span></td>
              <td>0.00</td>
              <td>0.00</td>
              <td><span class="funding-action">Buy / Sell</span><span class="funding-convert">Convert</span><span class="funding-menu">⋮</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script>
    // Dropdown logic
    function toggleDropdown() {
      document.getElementById('coinDropdown').classList.toggle('open');
    }
    function selectCoin(coin, el) {
      document.getElementById('selectedCoin').innerText = coin;
      var items = document.querySelectorAll('.dropdown-item');
      items.forEach(function(item){ item.classList.remove('selected'); });
      el.classList.add('selected');
      document.getElementById('coinDropdown').classList.remove('open');
    }
    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
      var dropdown = document.getElementById('coinDropdown');
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  </script>
</body>
</html>
