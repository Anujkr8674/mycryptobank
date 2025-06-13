<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php include "header.php"; ?>

  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #0e0e11;
      overflow-x: hidden; /* Right side scrolling hata diya */
    }

    .sidebar {
      width: 250px;
      background: #0e0e11;
      color: white;
      height: -webkit-fill-available;
      position: fixed;
      overflow-y: auto;
      transition: transform 0.3s ease;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
    }

    .toggle-btn {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      display: none;
    }

    .menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .menu li {
      padding: 15px 20px;
      cursor: pointer;
    }

    .menu li a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .menu li:hover {
      background: #1a1a1d;
    }

    .icon {
      margin-right: 10px;
    }

    .dropdown-menu {
      display: none;
      background: #1a1a1d;
      overflow-y: auto;
      max-height: 250px;
      transition: max-height 0.4s ease;
    }

    .dropdown-menu.open {
      display: block;
      height: auto;
      overflow-y: auto;
    }

    .dropdown-menu li {
      padding-left: 40px;
    }

    .arrow {
      font-size: 12px;
    }

    .dropdown-menu::-webkit-scrollbar {
  width: 6px;
}
.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 10px;
}

    /* Responsive Design */
    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(-100%);
        z-index: 1202;
        box-shadow: 2px 0 16px rgba(0,0,0,0.18);
        width: 100%;
      }
      #sidebar{
        margin-top: 100px;
      }
      
      .sidebar.active {
        transform: translateX(0);
      }

      .toggle-btn {
        display: inline;
      }
    }

    .hamburger {
      display: none;
      position: fixed;
      top: 80px;
      left: 20px;
      z-index: 1000;
      background: #18181b;
      color: #f0b90b;
      font-size: 40px;
      font-weight: 700;
      border: none;
      border-radius: 6px;
      padding: 8px 14px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    }
    .overlay {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.45);
      z-index: 1200;
      transition: opacity 0.3s;
      pointer-events: none;
    }
    .close-btn {
      display: none;
      background: none;
      border: none;
      color: #f0b90b;
      font-size: 26px;
      cursor: pointer;
      margin-left: auto;
    }
    @media (max-width: 768px) {
      .hamburger {
        display: block;
        margin-top: 0;
      }
      .close-btn {
        display: block;
      }
      .overlay.active {
        display: block;
        opacity: 1;
      }
      .overlay {
        opacity: 0;
        pointer-events: none;
      }
      .sidebar.active ~ .overlay {
        pointer-events: auto;
      }
    }

    .menu li.active, .menu li.active > a {
      background: none !important;
      color: wheat !important;
    }
    .menu li.active a {
      color: wheat !important;
    }
    .menu li.active .icon {
      color: wheat !important;
    }
    .menu li:hover:not(.active) {
      background: #1a1a1d;
    }

    .main-content {
      margin-left: 250px;
      padding: 20px;
      min-height: 100vh;
      background: #0e0e11;
      color: white;
    }

    .content-section {
      display: none;
    }

    .content-section.active {
      display: block;
    }

    .dashboard-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .stat-card {
      background: #1a1a1d;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }

    .stat-card h3 {
      margin: 0;
      color: #f0b90b;
    }

    .stat-card p {
      font-size: 24px;
      margin: 10px 0 0;
    }

    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
      }
    }

    .nested-dropdown > a {
      position: relative;
    }
    .nested-menu {
      display: none;
      position: relative;
      left: 0;
      background: #23232a;
      margin-top: 0;
      margin-left: 10px;
      padding-left: 10px;
    }
    .nested-menu.open {
      display: block;
    }
    .nested-dropdown .arrow {
      float: right;
      margin-left: 8px;
    }
  </style>

  <!-- Add Litepicker CSS/JS in <head> if not already present -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/litepicker/dist/css/litepicker.css" />
  <script src="https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js"></script>

  <style>
/* Litepicker custom dark+yellow theme */
.litepicker {
  background: #181A20 !important;
  color: #fff !important;
  border-radius: 18px !important;
  border: 1.5px solid #23262F !important;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
}
.litepicker .container__months {
  background: #181A20 !important;
  border-radius: 18px !important;
}
.litepicker .container__days {
  background: #181A20 !important;
}
.litepicker .month-item-header {
  background: #181A20 !important;
  color: #fff !important;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: none !important;
  padding-bottom: 8px;
}
.litepicker .day-item {
  background: transparent !important;
  color: #fff !important;
  border-radius: 8px !important;
  font-size: 1.08rem;
  transition: background 0.15s, color 0.15s;
}
.litepicker .day-item.is-today {
  border: 1.5px solid #f0b90b !important;
}
.litepicker .day-item.is-start-date,
.litepicker .day-item.is-end-date {
  background: #f0b90b !important;
  color: #181A20 !important;
  border-radius: 8px !important;
  font-weight: 700;
  box-shadow: 0 0 0 2px #f0b90b;
}
.litepicker .day-item.is-in-range:not(.is-start-date):not(.is-end-date) {
  background: #35362f !important;
  color: #fff !important;
  border-radius: 8px !important;
}
.litepicker .day-item.is-disabled {
  color: #444 !important;
  background: transparent !important;
  cursor: not-allowed !important;
}
.litepicker .button-next-month, .litepicker .button-previous-month {
  color: #fff !important;
  background: none !important;
  border: none !important;
  font-size: 1.3rem;
  border-radius: 6px;
  transition: background 0.15s;
}
.litepicker .button-next-month:hover, .litepicker .button-previous-month:hover {
  background: #23262F !important;
}
.litepicker .container__months .month-item {
  background: #181A20 !important;
}
.litepicker .container__days .day-item:hover:not(.is-disabled):not(.is-start-date):not(.is-end-date) {
  background: #23262F !important;
  color: #f0b90b !important;
}
.litepicker .container__days .day-item.is-in-range.is-start-date,
.litepicker .container__days .day-item.is-in-range.is-end-date {
  background: #f0b90b !important;
  color: #181A20 !important;
}
.litepicker .container__days .day-item.is-in-range {
  box-shadow: none !important;
}
.litepicker .container__days .day-item.is-start-date,
.litepicker .container__days .day-item.is-end-date {
  border-radius: 8px !important;
}
.litepicker .container__days .day-item.is-in-range {
  border-radius: 8px !important;
}
.litepicker .container__days .day-item.is-in-range:not(.is-start-date):not(.is-end-date) {
  background: #35362f !important;
  color: #fff !important;
}
.litepicker .container__days .day-item.is-in-range.is-today {
  border: 1.5px solid #f0b90b !important;
}
.litepicker .container__days .day-item.is-today:not(.is-start-date):not(.is-end-date) {
  border: 1.5px solid #f0b90b !important;
}
.litepicker .container__days .day-item.is-disabled {
  color: #444 !important;
  background: transparent !important;
  cursor: not-allowed !important;
}
.litepicker .container__days .day-item {
  min-width: 36px !important;
  min-height: 36px !important;
  line-height: 36px !important;
  margin: 2px 0 !important;
}
.litepicker .container__days .day-item.is-in-range {
  font-weight: 600;
}
.litepicker .container__days .day-item.is-start-date,
.litepicker .container__days .day-item.is-end-date {
  font-weight: 700;
}
.litepicker .container__days .day-item.is-in-range.is-start-date,
.litepicker .container__days .day-item.is-in-range.is-end-date {
  font-weight: 700;
}
.litepicker .container__days .day-item.is-in-range:not(.is-start-date):not(.is-end-date) {
  font-weight: 600;
}
.litepicker .container__days .day-item.is-in-range.is-today {
  font-weight: 700;
}
.litepicker .container__days .day-item.is-today {
  font-weight: 700;
}
.litepicker .container__days .day-item.is-in-range.is-today {
  color: #181A20 !important;
  background: #f0b90b !important;
}
.litepicker .container__days .day-item.is-in-range.is-today:not(.is-start-date):not(.is-end-date) {
  color: #fff !important;
  background: #35362f !important;
}
.litepicker .container__days .day-item.is-in-range.is-start-date.is-today,
.litepicker .container__days .day-item.is-in-range.is-end-date.is-today {
  color: #181A20 !important;
  background: #f0b90b !important;
}
.litepicker .container__days .day-item.is-in-range.is-today {
  border: 1.5px solid #f0b90b !important;
}
.litepicker .container__days .day-item.is-in-range.is-today:not(.is-start-date):not(.is-end-date) {
  border: none !important;
}
.litepicker .container__days .day-item.is-in-range.is-today.is-disabled {
  color: #444 !important;
  background: transparent !important;
  border: none !important;
}
.litepicker .container__days .day-item.is-in-range.is-today.is-disabled.is-start-date,
.litepicker .container__days .day-item.is-in-range.is-today.is-disabled.is-end-date {
  color: #444 !important;
  background: transparent !important;
  border: none !important;
}
.litepicker .container__days .day-item.is-in-range.is-today.is-disabled:not(.is-start-date):not(.is-end-date) {
  color: #444 !important;
  background: transparent !important;
  border: none !important;
}
.litepicker .container__days .day-item.is-in-range.is-today.is-disabled.is-start-date,
.litepicker .container__days .day-item.is-in-range.is-today.is-disabled.is-end-date {
  color: #444 !important;
  background: transparent !important;
  border: none !important;
}
  </style>

</head>
<body>

<!-- Hamburger Icon (Mobile Only) -->
<div class="hamburger" id="hamburger" onclick="toggleSidebar()">
  <span id="arrow-icon">&#8594;</span>
</div>
<!-- Overlay (Mobile Only) -->
<div class="overlay" id="overlay"></div>

<div style="margin-top: 100px;" class="sidebar" id="sidebar">
  <div class="logo">
    <h2>Dashboard</h2>
    <!-- Close Icon (Mobile Only) -->
    <button class="close-btn" id="closeBtn" onclick="toggleSidebar()">✖</button>
  </div>
  
  <ul class="menu">
    <li class="active"><a href="#" onclick="showContent('dashboard-content')"><span><i class="icon">🏠</i> Dashboard</span></a></li>

    <li class="dropdown">
      <a href="#" onclick="toggleDropdown('assetsDropdown')">
        <span><i class="icon">💼</i> Assets</span>
        <span class="arrow">▼</span>
      </a>
      <ul id="assetsDropdown" class="dropdown-menu">
        <li><a href="#" onclick="showContent('assets-overview-content')">Overview</a></li>
        <li><a href="#" onclick="showContent('spot-content')">earn</a></li>
        <li><a href="#" onclick="showContent('margin-content')">Margin</a></li>
        <li class="dropdown nested-dropdown">
          <a href="#" onclick="toggleNestedDropdown('asset4SubDropdown'); event.stopPropagation();">
            Third-party Wallet <span class="arrow">▼</span>
          </a>
          <ul id="asset4SubDropdown" class="dropdown-menu nested-menu">
            <li><a href="#" onclick="showContent('binance-tr-content'); event.stopPropagation();">Binance TR</a></li>
            <li><a href="#" onclick="showContent('tokocrypto-content'); event.stopPropagation();">Tokocrypto</a></li>
            <li><a href="#" onclick="showContent('binance-th-content'); event.stopPropagation();">Binance TH</a></li>
          </ul>
        </li>
      </ul>
    </li>

    <li class="dropdown">
      <a href="#" onclick="toggleDropdown('ordersDropdown')">
        <span><i class="icon">📦</i> Orders</span>
        <span class="arrow">▼</span>
      </a>
      <ul id="ordersDropdown" class="dropdown-menu">
        <li><a href="#" onclick="showContent('spot-order-content')">Spot Order</a></li>
        <li><a href="#" onclick="showContent('p2p-order-content')">P2P Order</a></li>
        <li><a href="#" onclick="showContent('transaction-history-content')">Transaction History</a></li>
      </ul>
    </li>

    <li><a href="./rewards-hub.php" onclick="window.location.href='rewards-hub.php'; return false;"><span><i class="icon">🎁</i> Rewards Hub</span></a></li>
    <li><a href="./referal.php" onclick="window.location.href='referal.php'; return false;"><span><i class="icon">➕</i> Referral</span></a></li>

    <li class="dropdown">
      <a href="#" onclick="toggleDropdown('accountDropdown')">
        <span><i class="icon">👤</i> Account</span>
        <span class="arrow">▼</span>
      </a>
      <ul id="accountDropdown" class="dropdown-menu">
        <li><a href="#" onclick="showContent('identification-content')">Identification</a></li>
        <li><a href="#" onclick="showContent('security-content')">Security</a></li>
        <li><a href="#" onclick="showContent('payment-content')">Payment</a></li>
        <li><a href="#" onclick="showContent('api-management-content')">API Managment</a></li>
        <li><a href="#" onclick="showContent('account-management-content')">Account Managment</a></li>
        <li><a href="#" onclick="showContent('financial-management-content')">Financial Managment</a></li>
      </ul>
    </li>

    <li><a href="#" onclick="showContent('sub-accounts-content')"><span><i class="icon">👥</i> Sub Accounts</span></a></li>
    <!-- <li><a href="#" onclick="showContent('settings-content')"><span><i class="icon">⚙️</i> Settings</span></a></li> -->
  </ul>
</div>

<!-- Main Content Area -->
<div style="margin-top: 130px;" class="main-content" id="main-content">
  <div id="dashboard-content" class="content-section">
    <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-start;">
      <!-- Left: User Info and Steps -->
      <div style="flex: 2; min-width: 320px;">
        <div style="background: #181A20; border-radius: 12px; padding: 24px; display: flex; align-items: center; gap: 24px; margin-bottom: 32px; justify-content: space-around;">
          <img src="https://www.binance.com/static/images/common/avatar-default.png" alt="avatar" style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #f0b90b; background: #23262F;">
          <div>
            <div style="font-size: 1.3rem; font-weight: 600; color: #fff;">Mirtha Vandor<br><span style="font-size: 1rem; color: #f0b90b;">en sx2a</span></div>
            <div style="margin-top: 6px; color: #aaa; font-size: 0.95rem;">UID <span style="color: #fff;">1102079382</span></div>
            <div style="margin-top: 2px; color: #aaa; font-size: 0.95rem;">VIP Level <span style="color: #fff;">Regular User</span></div>
          </div>
        </div>
        <div style="background: #181A20; border-radius: 12px; padding: 24;">
          <div style="font-size: 1.2rem; font-weight: 600; color: #fff; margin-bottom: 18px;">Get Started</div>
          <div style="display: flex; gap: 18px; flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start;">
            <!-- Step 1: Verify Account -->
            <div style="flex: 1 1 0; min-width: 220px; background: #23262F; border-radius: 10px; padding: 18px; display: flex; flex-direction: column; align-items: flex-start; border: 1.5px solid #f0b90b;">
              <div style="font-weight: 600; color: #fff; margin-bottom: 6px;">Verify Account</div>
              <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 14px;">Complete identity verification to access all Binance services</div>
              <button style="background: #f0b90b; color: #181A20; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Verify Now</button>
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
          <div style="color: #aaa; font-size: 1.1rem; margin-bottom: 8px; font-weight: 500;">Estimated Balance <span style="font-size: 1rem; color: #888;">👁️</span></div>
          <div style="font-size: 2.1rem; color: #fff; font-weight: 700;">0.00 <span style="font-size: 1.1rem; color: #aaa; font-weight: 400;">BTC</span></div>
          <div style="color: #aaa; font-size: 1rem; margin-bottom: 8px;">≈ $0.00</div>
          <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">Today's PnL <span style="color: #fff;">+ $0.00 (0.00%)</span></div>
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

  <!-- Assets Content -->
  <div id="assets-overview-content" class="content-section">
    <div style="background: #181A20; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
      <div style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 18px;">Estimated Balance <span style='font-size:1.1rem;color:#888;'>👁️</span></div>
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
        <div>
          <div style="font-size: 2.1rem; color: #fff; font-weight: 700;">0.00 <span style="font-size: 1.1rem; color: #aaa; font-weight: 400;">BTC</span></div>
          <div style="color: #aaa; font-size: 1rem; margin-bottom: 8px;">≈ $0.00</div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Deposit</button>
          <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Withdraw</button>
          <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Transfer</button>
        </div>
      </div>
    </div>
    <div style="background: #181A20; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
      <div style="font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 18px; display: flex; align-items: center; justify-content: space-between;">
        <span>My Assets</span>
        <span style="font-size: 1rem; color: #aaa; cursor: pointer;">View All 350+ Coins &gt;</span>
      </div>
      <div style="display: flex; gap: 32px; align-items: center; margin-bottom: 18px;">
        <span id="coinViewTab" onclick="showAssetsTab('coin')" style="color: #f0b90b; font-weight: 600; border-bottom: 2px solid #f0b90b; padding-bottom: 2px; cursor: pointer;">Coin View</span>
        <span id="accountViewTab" onclick="showAssetsTab('account')" style="color: #aaa; font-weight: 600; cursor: pointer; position: relative;">Account View <span id="accountViewUnderline" style="display:none; position:absolute; left:0; right:0; bottom:-2px; height:2px; background:#f0b90b;"></span></span>
        <div style="margin-left: auto; display: flex; align-items: center; gap: 10px;">
          <input type="text" placeholder="" style="background: #23262F; border: none; border-radius: 4px; color: #fff; padding: 4px 10px; font-size: 1rem; width: 120px;">
          <label style="color: #aaa; font-size: 0.98rem; display: flex; align-items: center; gap: 4px; cursor: pointer;">
            <input type="checkbox" style="accent-color: #f0b90b;"> Hide assets &lt;1 USD
          </label>
        </div>
      </div>
      <!-- Coin View Table -->
      <div id="coinViewTable">
        <table style="width: 100%; border-collapse: collapse; color: #fff;">
          <thead>
            <tr style="color: #aaa; font-size: 1rem; border-bottom: 1px solid #23262F;">
              <th style="text-align: left; padding: 8px 0;">Coin</th>
              <th style="text-align: left; padding: 8px 0;">Amount</th>
              <th style="text-align: left; padding: 8px 0;">Coin Price</th>
              <th style="text-align: left; padding: 8px 0;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #23262F;">
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/binance-coin-bnb-logo.png' alt='BNB' style='width:28px;height:28px;border-radius:50%;'> <div><div>BNB</div><div style='color:#aaa;font-size:0.95rem;'>BNB</div></div></td>
              <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>$606.94</td>
              <td><a href="#" style="color: #f0b90b; font-weight: 600;">Cash In</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #23262F;">
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' alt='BTC' style='width:28px;height:28px;border-radius:50%;'> <div><div>BTC</div><div style='color:#aaa;font-size:0.95rem;'>Bitcoin</div></div></td>
              <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>$95,147.44</td>
              <td><a href="#" style="color: #f0b90b; font-weight: 600;">Cash In</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #23262F;">
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/ethereum-eth-logo.png' alt='ETH' style='width:28px;height:28px;border-radius:50%;'> <div><div>ETH</div><div style='color:#aaa;font-size:0.95rem;'>Ethereum</div></div></td>
              <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>$1,810.33</td>
              <td><a href="#" style="color: #f0b90b; font-weight: 600;">Cash In</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/tether-usdt-logo.png' alt='USDT' style='width:28px;height:28px;border-radius:50%;'> <div><div>USDT</div><div style='color:#aaa;font-size:0.95rem;'>TetherUS</div></div></td>
              <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>$1.00</td>
              <td><a href="#" style="color: #f0b90b; font-weight: 600;">Cash In</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Account View Table (hidden by default) -->
      <div id="accountViewTable" style="display:none;">
        <table style="width: 100%; border-collapse: collapse; color: #fff;">
          <thead>
            <tr style="color: #aaa; font-size: 1rem; border-bottom: 1px solid #23262F;">
              <th style="text-align: left; padding: 8px 0;">Account</th>
              <th style="text-align: left; padding: 8px 0;">Amount</th>
              <th style="text-align: left; padding: 8px 0;">Ratio</th>
              <th style="text-align: left; padding: 8px 0;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #23262F;">
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 14px;"><img src='https://cdn-icons-png.flaticon.com/512/3602/3602123.png' alt='Spot' style='width:28px;height:28px;border-radius:50%;background:#23262F;'> <span style='font-size:1.15rem;font-weight:600;'>Spot</span></td>
              <td>--<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>-</td>
              <td><span style='font-size:1.5rem;color:#aaa;cursor:pointer;'>⋮</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #23262F;">
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 14px;"><img src='https://cdn-icons-png.flaticon.com/512/3602/3602127.png' alt='Cross Margin' style='width:28px;height:28px;border-radius:50%;background:#23262F;'> <span style='font-size:1.15rem;font-weight:600;'>Cross Margin</span></td>
              <td>--<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>-</td>
              <td><span style='font-size:1.5rem;color:#aaa;cursor:pointer;'>⋮</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; display: flex; align-items: center; gap: 14px;"><img src='https://cdn-icons-png.flaticon.com/512/3602/3602125.png' alt='Isolated Margin' style='width:28px;height:28px;border-radius:50%;background:#23262F;'> <span style='font-size:1.15rem;font-weight:600;'>Isolated Margin</span></td>
              <td>--<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
              <td>-</td>
              <td><span style='font-size:1.5rem;color:#aaa;cursor:pointer;'>⋮</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="background: #181A20; border-radius: 12px; padding: 24px;">
      <div style="font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 18px; display: flex; align-items: center; justify-content: space-between;">
        <span>Recent Transactions</span>
        <span style="font-size: 1rem; color: #aaa; cursor: pointer;">More &gt;</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px;">
        <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 48px; opacity: 0.3; margin-bottom: 10px;">
        <div style="color: #aaa; font-size: 1.1rem;">No records</div>
      </div>
    </div>
  </div>
  <div id="spot-content" class="content-section">
    <div style="background: #181A20; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
      <div style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: 18px;">Estimated Balance <span style='font-size:1.1rem;color:#888;'>👁️</span></div>
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;">
        <div>
          <div style="font-size: 2.1rem; color: #fff; font-weight: 700;">0.00 <span style="font-size: 1.1rem; color: #aaa; font-weight: 400;">BTC</span></div>
          <div style="color: #aaa; font-size: 1rem; margin-bottom: 8px;">≈ $0.00</div>
          <div style="color: #aaa; font-size: 1rem;">Today's PnL <span style='color:#fff;'>+ $0.00(0.00%)</span></div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Deposit</button>
          <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Withdraw</button>
          <button style="background: #23262F; color: #f0b90b; border: none; border-radius: 6px; padding: 8px 18px; font-weight: 600; cursor: pointer;">Transfer</button>
        </div>
      </div>
    </div>
    <div style="background: #181A20; border-radius: 12px; padding: 24px;">
      <div style="font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: 18px;">Spot</div>
      <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 18px; flex-wrap: wrap;">
        <input type="text" placeholder="" style="background: #23262F; border: none; border-radius: 6px; color: #fff; padding: 6px 14px; font-size: 1rem; width: 44px; min-width: 44px; max-width: 44px; height: 36px;">
        <span style="color: #aaa; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px;">
          <span style="display: flex; align-items: center; gap: 4px;">
            Convert Small Balance to BNB <span style="font-size: 1.1rem;">&#8644;</span>
          </span>
        </span>
        <label style="color: #aaa; font-size: 1rem; display: flex; align-items: center; gap: 4px; cursor: pointer; margin-left: auto;">
          <input type="checkbox" style="accent-color: #f0b90b;"> Hide assets &lt;1 USD
        </label>
      </div>
      <table style="width: 100%; border-collapse: collapse; color: #fff;">
        <thead>
          <tr style="color: #aaa; font-size: 1rem; border-bottom: 1px solid #23262F;">
            <th style="text-align: left; padding: 8px 0;">Coin</th>
            <th style="text-align: left; padding: 8px 0;">Amount</th>
            <th style="text-align: left; padding: 8px 0;">Available</th>
            <th style="text-align: left; padding: 8px 0;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #23262F;">
            <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/bitcoin-btc-logo.png' alt='BTC' style='width:28px;height:28px;border-radius:50%;'> <div><div style='font-weight:600;'>BTC</div><div style='color:#aaa;font-size:0.95rem;'>Bitcoin</div></div></td>
            <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
            <td>0.00</td>
            <td><a href="#" style="color: #f0b90b; font-weight: 600; margin-right: 12px;">Convert</a><a href="#" style="color: #f0b90b; font-weight: 600;">Earn</a> <span style='font-size:1.5rem;color:#aaa;cursor:pointer;vertical-align:middle;margin-left:10px;'>⋮</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #23262F;">
            <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/ethereum-eth-logo.png' alt='ETH' style='width:28px;height:28px;border-radius:50%;'> <div><div style='font-weight:600;'>ETH</div><div style='color:#aaa;font-size:0.95rem;'>Ethereum</div></div></td>
            <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
            <td>0.00</td>
            <td><a href="#" style="color: #f0b90b; font-weight: 600; margin-right: 12px;">Convert</a><a href="#" style="color: #f0b90b; font-weight: 600;">Earn</a> <span style='font-size:1.5rem;color:#aaa;cursor:pointer;vertical-align:middle;margin-left:10px;'>⋮</span></td>
          </tr>
          <tr style="border-bottom: 1px solid #23262F;">
            <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/binance-coin-bnb-logo.png' alt='BNB' style='width:28px;height:28px;border-radius:50%;'> <div><div style='font-weight:600;'>BNB</div><div style='color:#aaa;font-size:0.95rem;'>BNB</div></div></td>
            <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
            <td>0.00</td>
            <td><a href="#" style="color: #f0b90b; font-weight: 600; margin-right: 12px;">Convert</a><a href="#" style="color: #f0b90b; font-weight: 600;">Earn</a> <span style='font-size:1.5rem;color:#aaa;cursor:pointer;vertical-align:middle;margin-left:10px;'>⋮</span></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; display: flex; align-items: center; gap: 10px;"><img src='https://cryptologos.cc/logos/tether-usdt-logo.png' alt='USDT' style='width:28px;height:28px;border-radius:50%;'> <div><div style='font-weight:600;'>USDT</div><div style='color:#aaa;font-size:0.95rem;'>TetherUS</div></div></td>
            <td>0.00<br><span style='color:#aaa;font-size:0.95rem;'>$0.00</span></td>
            <td>0.00</td>
            <td><a href="#" style="color: #f0b90b; font-weight: 600; margin-right: 12px;">Convert</a><a href="#" style="color: #f0b90b; font-weight: 600;">Earn</a> <span style='font-size:1.5rem;color:#aaa;cursor:pointer;vertical-align:middle;margin-left:10px;'>⋮</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div id="margin-content" class="content-section">
    <div style="background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 24px 32px; max-width: 1200px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <!-- Left Section -->
        <div>
          <div style="font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 2px; display: flex; align-items: center; gap: 8px;">
            <span style="border-bottom: 2px dotted #fff; padding-bottom: 2px;">Equity</span>
            <svg style="width:20px;height:20px;opacity:0.7;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2" fill="#23262F"/><path d="M12 8v4" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="#fff"/></svg>
          </div>
          <div style="font-size: 2.3rem; color: #fff; font-weight: 700; letter-spacing: 1px; margin-bottom: 2px; display: flex; align-items: center; gap: 8px;">
            0.00000000
            <span style="font-size: 1.2rem; color: #aaa; font-weight: 400; display: flex; align-items: center; gap: 2px;">
              <select style="background: black; color: white; width:80px; padding: 10px; border: none; font-size: 0.9rem; font-weight: 400; outline: none; appearance: none; padding-right: 18px; cursor: pointer;">
                <option value="BTC" selected>BTC</option>
                <option value="USDT">USDT</option>
                <option value="ETH">ETH</option>
                <option value="BNB">BNB</option>
              </select>
              <svg style="width:14px;height:14px;vertical-align:middle;opacity:0.7;margin-left:-16px;pointer-events:none;position:relative;z-index:1;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d='M7 10l5 5 5-5' stroke='#aaa' stroke-width='2' fill='none'/></svg>
            </span>
          </div>
          <div style="color: #aaa; font-size: 1.1rem; margin-bottom: 2px;">≈ $0.00</div>
          <div style="color: #aaa; font-size: 1.1rem; margin-bottom: 18px;">Today's PNL <span style="color: #fff;">$0.00(0.00%)</span> <svg style="width:14px;height:14px;vertical-align:middle;opacity:0.7;margin-left:2px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path d='M9 6l6 6-6 6' stroke='#aaa' stroke-width='2' fill='none'/></svg></div>
          <div style="display: flex; gap: 48px; margin-bottom: 0;">
            <div>
              <div style="color: #fff; font-size: 1.05rem; text-decoration: underline; font-weight: 600; margin-bottom: 2px;">Total balance(BTC)</div>
              <div style="color: #fff; font-size: 1.13rem;">0.00000000</div>
              <div style="color: #aaa; font-size: 1.01rem;">≈ $0.00</div>
            </div>
            <div>
              <div style="color: #fff; font-size: 1.05rem; text-decoration: underline; font-weight: 600; margin-bottom: 2px;">Total Debt(BTC)</div>
              <div style="color: #fff; font-size: 1.13rem;">0.00000000</div>
              <div style="color: #aaa; font-size: 1.01rem;">≈ $0.00</div>
            </div>
          </div>
        </div>
        <!-- Right Section -->
        <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 12px;">
          <button style="background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 600; font-size: 1.1rem; cursor: pointer;">Borrow</button>
          <button style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 600; font-size: 1.1rem; cursor: pointer;">Repay</button>
          <button style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 600; font-size: 1.1rem; cursor: pointer;">Transfer</button>
          <button style="background: none; border: none; margin-left: 8px; cursor: pointer;">
            <svg style="width:28px;height:28px;opacity:0.7;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#aaa" stroke-width="2" fill="#23262F"/><path d="M12 8v4" stroke="#aaa" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="#aaa"/></svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Details & Asset Allocation Section -->
    <div style="background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 32px 32px; max-width: 1200px; margin: 32px auto 0 auto; border: 1.5px solid #23262F; display: flex; gap: 0; align-items: flex-start;">
      <!-- Details -->
      <div style="flex: 2; min-width: 340px;">
        <div style="font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 18px;">Details</div>
        <div style="display: flex; gap: 0;">
          <div style="flex: 1; min-width: 220px;">
            <div style="color: #fff; font-size: 1.08rem; text-decoration: underline dotted; font-weight: 600; margin-bottom: 8px;">Cross Margin Margin Level</div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 24px;">
              <img src='https://cdn-icons-png.flaticon.com/512/942/942751.png' alt='icon' style='width: 24px; height: 24px; vertical-align: middle;'>
              <span style="color: #00c076; font-size: 1.35rem; font-weight: 700;">999.00</span>
            </div>
            <div style="color: #fff; font-size: 1.08rem; text-decoration: underline dotted; font-weight: 600; margin-bottom: 8px;">Cross Margin Collateral Value(USDT)</div>
            <div style="color: #fff; font-size: 1.13rem; margin-bottom: 0;">-</div>
          </div>
          <div style="flex: 1; min-width: 220px;">
            <div style="color: #fff; font-size: 1.08rem; text-decoration: underline dotted; font-weight: 600; margin-bottom: 8px;">Cross Margin Collateral Margin Level</div>
            <div style="color: #fff; font-size: 1.13rem; margin-bottom: 24px;">-</div>
          </div>
        </div>
      </div>
      <!-- Divider -->
      <div style="width: 1px; background: #23262F; height: 220px; margin: 0 32px;"></div>
      <!-- Asset Allocation -->
      <div style="flex: 1.2; min-width: 320px; display: flex; flex-direction: column; align-items: flex-start;">
        <div style="font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 18px;">Asset Allocation</div>
        <div style="display: flex; gap: 18px; margin-bottom: 18px;">
          <button id="assetBtn" onclick="toggleAssetAccount('asset')" style="background: #23262F; color: #fff; border: none; border-radius: 14px; padding: 10px 32px; font-weight: 700; font-size: 1.25rem; box-shadow: none; outline: none; cursor: pointer;">Asset</button>
          <button id="accountBtn" onclick="toggleAssetAccount('account')" style="background: transparent; color: #888c98; border: none; border-radius: 14px; padding: 10px 32px; font-weight: 700; font-size: 1.25rem; box-shadow: none; outline: none; cursor: pointer;">Account</button>
        </div>
        <div style="margin-top: 8px; display: flex; align-items: center; justify-content: center; width: 100%;">
          <div style="width: 180px; height: 180px; border-radius: 50%; border: 12px solid #35363b; display: flex; align-items: center; justify-content: center;">
            <div style="width: 120px; height: 120px; border-radius: 50%; background: #181A20;"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Table/Search Section -->
    <div style="background: #181A20; border-radius: 18px; border: 1.5px solid #23262F; margin: 32px auto 0 auto; max-width: 1200px; padding: 32px 32px 24px 32px;">
      <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 28px;">
        <div style="position: relative;">
          <input type="text" placeholder="Search" style="background: #181A20; border: 2px solid #23262F; border-radius: 10px; color: #fff; font-size: 1.15rem; padding: 12px 16px 12px 44px; width: 240px; outline: none;">
          <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #888c98; font-size: 1.3rem;">
            <svg width="20" height="20" fill="none" stroke="#888c98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="7"/><line x1="16" y1="16" x2="13.5" y2="13.5"/></svg>
          </span>
        </div>
        <label style="color: #fff; font-size: 1.13rem; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <input type="checkbox" style="accent-color: #f0b90b; width: 18px; height: 18px; margin-right: 4px;"> Only show debts
        </label>
      </div>
      <table style="width: 100%; border-collapse: collapse; color: #fff; margin-bottom: 0;">
        <thead>
          <tr style="color: #888c98; font-size: 1.13rem;">
            <th style="text-align: left; padding: 8px 0; font-weight: 500;">Coin</th>
            <th style="text-align: left; padding: 8px 0; font-weight: 500;">Equity</th>
            <th style="text-align: left; padding: 8px 0; font-weight: 500;">Total Balance</th>
            <th style="text-align: left; padding: 8px 0; font-weight: 500;">Debt</th>
            <th style="text-align: left; padding: 8px 0; font-weight: 500;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="5" style="padding: 48px 0 24px 0; text-align: center;">
              <span style="color: #fff; font-size: 1.25rem; font-weight: 600;">No Data</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 18px; width: 100%; display: flex; align-items: center;">
        <div style="height: 8px; border-radius: 8px; background: #35363b; width: 100%;"></div>
      </div>
    </div>
  </div>

  <!-- Orders Content -->
  <div id="spot-order-content" class="content-section">
    <div style="background: #181A20; border-radius: 12px; padding: 0 0 32px 0; margin-bottom: 32px; max-width: 100%;">
      <div style="display: flex; align-items: center; gap: 0; border-bottom: 1.5px solid #23262F;">
        <button id="openOrdersTab" class="order-tab-btn active" onclick="showOrderTab('open')">Open Orders</button>
        <button id="orderHistoryTab" class="order-tab-btn" onclick="showOrderTab('history')">Order History</button>
        <button id="tradeHistoryTab" class="order-tab-btn" onclick="showOrderTab('trade')">Trade History</button>
      </div>
      <div id="crm1" style="padding: 24px 0 0 0;">
        <div id="openOrdersFilters" style="display: flex; flex-direction: row; align-items: center; flex-wrap: wrap; gap: 18px; width: 100%; margin-bottom: 18px;">
          <div class="order-dropdown" style="min-width: 200px;">
            <div class="dropdown-selected" onclick="toggleDropdownMenu('filterDropdown')">Filter <span id="filterDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
            <ul id="filterDropdown" class="dropdown-list">
              <li onclick="selectDropdownOption('filterDropdown', 'All')">All</li>
              <li onclick="selectDropdownOption('filterDropdown', 'Limit Order')">Limit Order</li>
              <li onclick="selectDropdownOption('filterDropdown', 'Stop Limit')">Stop Limit</li>
              <li onclick="selectDropdownOption('filterDropdown', 'Stop Market')">Stop Market</li>
              <li onclick="selectDropdownOption('filterDropdown', 'Limit-Maker')">Limit-Maker</li>
              <li onclick="selectDropdownOption('filterDropdown', 'Trailing Stop')">Trailing Stop</li>
            </ul>
          </div>
          <div class="order-dropdown" style="min-width: 200px;">
            <div class="dropdown-selected" onclick="toggleDropdownMenu('pairDropdown')">Pair <span id="pairDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
            <ul id="pairDropdown" class="dropdown-list" style="max-height: 260px; overflow-y: auto;">
              <li onclick="selectDropdownOption('pairDropdown', 'All')">All</li>
              <li onclick="selectDropdownOption('pairDropdown', 'BNB/BTC')">BNB/BTC</li>
              <li onclick="selectDropdownOption('pairDropdown', 'NEO/BTC')">NEO/BTC</li>
              <li onclick="selectDropdownOption('pairDropdown', 'LINK/BTC')">LINK/BTC</li>
              <li onclick="selectDropdownOption('pairDropdown', 'IOTA/BTC')">IOTA/BTC</li>
              <li onclick="selectDropdownOption('pairDropdown', 'ETC/BTC')">ETC/BTC</li>
              <li onclick="selectDropdownOption('pairDropdown', 'KNC/BTC')">KNC/BTC</li>
              <li onclick="selectDropdownOption('pairDropdown', 'EOS/ETH')">EOS/ETH</li>
              <li onclick="selectDropdownOption('pairDropdown', 'BTC/USDT')">BTC/USDT</li>
            </ul>
          </div>
          <div class="order-dropdown" style="min-width: 200px;">
            <div class="dropdown-selected" onclick="toggleDropdownMenu('directionDropdown')">Direction <span id="directionDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
            <ul id="directionDropdown" class="dropdown-list">
              <li onclick="selectDropdownOption('directionDropdown', 'All')">All</li>
              <li onclick="selectDropdownOption('directionDropdown', 'Buy')">Buy</li>
              <li onclick="selectDropdownOption('directionDropdown', 'Sell')">Sell</li>
            </ul>
          </div>
        </div>
        <div id="orderTabContent" style="background: transparent;">
          <!-- Open Orders Table -->
          <div id="openOrdersSection">
            <div style="width: 100%; overflow-x: auto;">
              <table style="min-width: 1400px; width: 100%; border-collapse: collapse; color: #fff;">
                <thead>
                  <tr style="color: #888c98; font-size: 1rem; border-bottom: 1px solid #23262F;">
                    <th style="text-align: left; padding: 8px 0;">Date</th>
                    <th style="text-align: left; padding: 8px 0;">Pair</th>
                    <th style="text-align: left; padding: 8px 0;">Type</th>
                    <th style="text-align: left; padding: 8px 0;">Side</th>
                    <th style="text-align: left; padding: 8px 0;">Price</th>
                    <th style="text-align: left; padding: 8px 0;">Amount</th>
                    <th style="text-align: left; padding: 8px 0;">Amount per Iceberg Order</th>
                    <th style="text-align: left; padding: 8px 0;">Filled</th>
                    <th style="text-align: left; padding: 8px 0;">Total</th>
                    <th style="text-align: left; padding: 8px 0;">Trigger Conditions</th>
                    <th style="text-align: left; padding: 8px 0;">TP/SL</th>
                    <th style="text-align: left; padding: 8px 0;">Cancel All</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="12" style="padding: 80px 0 40px 0; text-align: center;">
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 48px; opacity: 0.3; margin-bottom: 10px;">
                        <div style="color: #aaa; font-size: 1.1rem;">No records</div>
                      </div>
                      <div style="margin-top: 32px; width: 100%; display: flex; align-items: center;">
                        <div style="height: 8px; border-radius: 8px; background: #35363b; width: 100%;"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Order History Table -->
          <div id="orderHistorySection" style="display:none;">
            <div style="display: flex; align-items: center; justify-content: flex-end; margin-bottom: 18px;">
              <!-- Download button removed as per user request -->
            </div>
            <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
              <!-- Date Range Picker -->
              <div class="order-date-range" style="display: flex; align-items: center; gap: 8px;">
                <input id="orderDateRange" class="date-picker-btn" style="background: #181A20; border: 1.5px solid #f0b90b; border-radius: 8px; padding: 12px 24px; color: #fff; font-weight: 600; font-size: 1.13rem; cursor: pointer; display: flex; align-items: center; gap: 12px; min-width: 220px; width: 260px;" readonly />
              </div>
              <!-- Base Dropdown -->
              <div class="order-dropdown order-dropdown-search" style="min-width: 180px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('baseDropdown')">Base <span id="baseDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="baseDropdown" class="dropdown-list" style="max-height: 320px; overflow-y: auto;">
                  <li style="padding: 0;">
                    <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                      <input type="text" placeholder="" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" />
                      <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#10006;</span>
                    </div>
                  </li>
                  <li onclick="selectDropdownOptionTick('baseDropdown', 'All', this)" class="selected"><span style="color: #f0b90b;">All</span> <span style="float:right;color:#f0b90b;font-size:1.2rem;">&#10003;</span></li>
                  <li onclick="selectDropdownOptionTick('baseDropdown', '1000CAT', this)">1000CAT</li>
                  <li onclick="selectDropdownOptionTick('baseDropdown', '1000CHEEMS', this)">1000CHEEMS</li>
                  <li onclick="selectDropdownOptionTick('baseDropdown', '1000PEPPER', this)">1000PEPPER</li>
                  <li onclick="selectDropdownOptionTick('baseDropdown', '1000SATS', this)">1000SATS</li>
                  <li onclick="selectDropdownOptionTick('baseDropdown', '1INCH', this)">1INCH</li>
                </ul>
              </div>
              <span style="color: #888c98; font-size: 1.5rem;">-</span>
              <!-- Quote Dropdown -->
              <div class="order-dropdown order-dropdown-search" style="min-width: 180px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('quoteDropdown')">Quote <span id="quoteDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="quoteDropdown" class="dropdown-list" style="max-height: 320px; overflow-y: auto;">
                  <li style="padding: 0;">
                    <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                      <input type="text" placeholder="" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" />
                      <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#10006;</span>
                    </div>
                  </li>
                  <li onclick="selectDropdownOptionTick('quoteDropdown', 'All', this)" class="selected"><span style="color: #f0b90b;">All</span> <span style="float:right;color:#f0b90b;font-size:1.2rem;">&#10003;</span></li>
                  <li onclick="selectDropdownOptionTick('quoteDropdown', 'USDC', this)">USDC</li>
                  <li onclick="selectDropdownOptionTick('quoteDropdown', 'USDT', this)">USDT</li>
                  <li onclick="selectDropdownOptionTick('quoteDropdown', 'FDUSD', this)">FDUSD</li>
                  <li onclick="selectDropdownOptionTick('quoteDropdown', 'BNB', this)">BNB</li>
                  <li onclick="selectDropdownOptionTick('quoteDropdown', 'BTC', this)">BTC</li>
                </ul>
              </div>
              <!-- Side Dropdown -->
              <div class="order-dropdown" style="min-width: 120px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('sideDropdown')">Side <span id="sideDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="sideDropdown" class="dropdown-list">
                  <li onclick="selectDropdownOptionTick('sideDropdown', 'All', this)" class="selected"><span style="color: #f0b90b;">All</span> <span style="float:right;color:#f0b90b;font-size:1.2rem;">&#10003;</span></li>
                  <li onclick="selectDropdownOptionTick('sideDropdown', 'Buy', this)">Buy</li>
                  <li onclick="selectDropdownOptionTick('sideDropdown', 'Sell', this)">Sell</li>
                </ul>
              </div>
              <label style="color: #aaa; font-size: 1.1rem; display: flex; align-items: center; gap: 6px; margin-left: 18px; cursor: pointer;">
                <input type="checkbox" style="accent-color: #f0b90b; width: 18px; height: 18px; margin-right: 4px;"> Hide all canceled
              </label>
            </div>
            <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
              <div class="order-dropdown" style="min-width: 180px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('sortDropdown')">Sort By <span id="sortDropdownValue">Order Time</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="sortDropdown" class="dropdown-list">
                  <li onclick="selectDropdownOption('sortDropdown', 'Order Time')">Order Time</li>
                  <li onclick="selectDropdownOption('sortDropdown', 'Update Time')">Update Time</li>
                  <!-- <li onclick="selectDropdownOption('sortDropdown', 'Type')">Type</li> -->
                </ul>
              </div>
              <button style="background: #f0b90b; color: #181A20; border: none; border-radius: 10px; padding: 12px 36px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Search</button>
              <button style="background: none; color: #f0b90b; border: none; border-radius: 10px; padding: 12px 24px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Reset</button>
            </div>
            <div style="width: 100%; overflow-x: auto;">
              <table style="min-width: 1200px; width: 100%; border-collapse: collapse; color: #fff;">
                <thead>
                  <tr style="color: #888c98; font-size: 1rem; border-bottom: 1px solid #23262F;">
                    <th style="text-align: left; padding: 8px 0;">Order Time</th>
                    <th style="text-align: left; padding: 8px 0;">Pair</th>
                    <th style="text-align: left; padding: 8px 0;">Type</th>
                    <th style="text-align: left; padding: 8px 0;">Side</th>
                    <th style="text-align: left; padding: 8px 0;">Average</th>
                    <th style="text-align: left; padding: 8px 0;">Price</th>
                    <th style="text-align: left; padding: 8px 0;">Executed</th>
                    <th style="text-align: left; padding: 8px 0;">Amount</th>
                    <th style="text-align: left; padding: 8px 0;">Amount per Iceberg Order</th>
                    <th style="text-align: left; padding: 8px 0;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="10" style="padding: 80px 0 40px 0; text-align: center;">
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 64px; opacity: 0.3; margin-bottom: 10px;">
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <style>
              .order-dropdown-search .dropdown-list input[type="text"] {
                width: 100%;
                background: transparent;
                border: none;
                color: #fff;
                padding: 10px 12px;
                font-size: 1.08rem;
                outline: none;
              }
              .order-dropdown-search .dropdown-list li.selected,
              .order-dropdown-search .dropdown-list li.selected span {
                color: #f0b90b !important;
                font-weight: 600;
              }
              .order-dropdown-search .dropdown-list li span {
                font-size: 1.2rem;
              }
            </style>
            <script>
              function selectDropdownOptionTick(dropdownId, value, li) {
                document.getElementById(dropdownId + 'Value').innerText = value;
                var items = document.querySelectorAll('#' + dropdownId + ' li');
                items.forEach(function(item) { item.classList.remove('selected'); });
                if(li) li.classList.add('selected');
                document.getElementById(dropdownId).parentElement.classList.remove('open');
              }
            </script>
          </div>
          <!-- Trade History Table -->
          <div id="tradeHistorySection" style="display:none;">
            <!-- Copied filter/search section from orderHistorySection -->
            <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
              <div class="order-date-range" style="display: flex; align-items: center; gap: 8px;">
                <input id="tradeOrderDateRange" class="date-picker-btn" style="background: #181A20; border: 1.5px solid #f0b90b; border-radius: 8px; padding: 12px 24px; color: #fff; font-weight: 600; font-size: 1.13rem; cursor: pointer; display: flex; align-items: center; gap: 12px; min-width: 220px; width: 260px;" readonly />
              </div>
              <div class="order-dropdown order-dropdown-search" style="min-width: 180px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('tradeBaseDropdown')">Base <span id="tradeBaseDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="tradeBaseDropdown" class="dropdown-list" style="max-height: 320px; overflow-y: auto;">
                  <li style="padding: 0;">
                    <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                      <input type="text" placeholder="" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" />
                      <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#10006;</span>
                    </div>
                  </li>
                  <li onclick="selectDropdownOptionTick('tradeBaseDropdown', 'All', this)" class="selected"><span style="color: #f0b90b;">All</span> <span style="float:right;color:#f0b90b;font-size:1.2rem;">&#10003;</span></li>
                  <li onclick="selectDropdownOptionTick('tradeBaseDropdown', '1000CAT', this)">1000CAT</li>
                  <li onclick="selectDropdownOptionTick('tradeBaseDropdown', '1000CHEEMS', this)">1000CHEEMS</li>
                  <li onclick="selectDropdownOptionTick('tradeBaseDropdown', '1000PEPPER', this)">1000PEPPER</li>
                  <li onclick="selectDropdownOptionTick('tradeBaseDropdown', '1000SATS', this)">1000SATS</li>
                  <li onclick="selectDropdownOptionTick('tradeBaseDropdown', '1INCH', this)">1INCH</li>
                </ul>
              </div>
              <span style="color: #888c98; font-size: 1.5rem;">-</span>
              <div class="order-dropdown order-dropdown-search" style="min-width: 180px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('tradeQuoteDropdown')">Quote <span id="tradeQuoteDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="tradeQuoteDropdown" class="dropdown-list" style="max-height: 320px; overflow-y: auto;">
                  <li style="padding: 0;">
                    <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                      <input type="text" placeholder="" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" />
                      <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#10006;</span>
                    </div>
                  </li>
                  <li onclick="selectDropdownOptionTick('tradeQuoteDropdown', 'All', this)" class="selected"><span style="color: #f0b90b;">All</span> <span style="float:right;color:#f0b90b;font-size:1.2rem;">&#10003;</span></li>
                  <li onclick="selectDropdownOptionTick('tradeQuoteDropdown', 'USDC', this)">USDC</li>
                  <li onclick="selectDropdownOptionTick('tradeQuoteDropdown', 'USDT', this)">USDT</li>
                  <li onclick="selectDropdownOptionTick('tradeQuoteDropdown', 'FDUSD', this)">FDUSD</li>
                  <li onclick="selectDropdownOptionTick('tradeQuoteDropdown', 'BNB', this)">BNB</li>
                  <li onclick="selectDropdownOptionTick('tradeQuoteDropdown', 'BTC', this)">BTC</li>
                </ul>
              </div>
              <div class="order-dropdown" style="min-width: 120px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('tradeSideDropdown')">Side <span id="tradeSideDropdownValue">All</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="tradeSideDropdown" class="dropdown-list">
                  <li onclick="selectDropdownOptionTick('tradeSideDropdown', 'All', this)" class="selected"><span style="color: #f0b90b;">All</span> <span style="float:right;color:#f0b90b;font-size:1.2rem;">&#10003;</span></li>
                  <li onclick="selectDropdownOptionTick('tradeSideDropdown', 'Buy', this)">Buy</li>
                  <li onclick="selectDropdownOptionTick('tradeSideDropdown', 'Sell', this)">Sell</li>
                </ul>
              </div>
              <label style="color: #aaa; font-size: 1.1rem; display: flex; align-items: center; gap: 6px; margin-left: 18px; cursor: pointer;">
                <input type="checkbox" style="accent-color: #f0b90b; width: 18px; height: 18px; margin-right: 4px;"> Hide all canceled
              </label>
            </div>
            <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
              <div class="order-dropdown" style="min-width: 180px;">
                <div class="dropdown-selected" onclick="toggleDropdownMenu('tradeSortDropdown')">Sort By <span id="tradeSortDropdownValue">Order Time</span> <span class="dropdown-arrow">&#9662;</span></div>
                <ul id="tradeSortDropdown" class="dropdown-list">
                  <li onclick="selectDropdownOption('tradeSortDropdown', 'Order Time')">Order Time</li>
                  <li onclick="selectDropdownOption('tradeSortDropdown', 'Update Time')">Update Time</li>
                </ul>
              </div>
              <button style="background: #f0b90b; color: #181A20; border: none; border-radius: 10px; padding: 12px 36px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Search</button>
              <button style="background: none; color: #f0b90b; border: none; border-radius: 10px; padding: 12px 24px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Reset</button>
            </div>
            <!-- Existing trade history table content below -->
            <div style="width: 100%; overflow-x: auto;">
              <table style="min-width: 1400px; width: 100%; border-collapse: collapse; color: #fff;">
                <thead>
                  <tr style="color: #888c98; font-size: 1rem; border-bottom: 1px solid #23262F;">
                    <th style="text-align: left; padding: 8px 0;">Date</th>
                    <th style="text-align: left; padding: 8px 0;">Pair</th>
                    <th style="text-align: left; padding: 8px 0;">Type</th>
                    <th style="text-align: left; padding: 8px 0;">Side</th>
                    <th style="text-align: left; padding: 8px 0;">Price</th>
                    <th style="text-align: left; padding: 8px 0;">Amount</th>
                    <th style="text-align: left; padding: 8px 0;">Amount per Iceberg Order</th>
                    <th style="text-align: left; padding: 8px 0;">Filled</th>
                    <th style="text-align: left; padding: 8px 0;">Total</th>
                    <th style="text-align: left; padding: 8px 0;">Trigger Conditions</th>
                    <th style="text-align: left; padding: 8px 0;">TP/SL</th>
                    <th style="text-align: left; padding: 8px 0;">Cancel All</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="12" style="padding: 80px 0 40px 0; text-align: center;">
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 48px; opacity: 0.3; margin-bottom: 10px;">
                        <div style="color: #aaa; font-size: 1.1rem;">No records</div>
                      </div>
                      <div style="margin-top: 32px; width: 100%; display: flex; align-items: center;">
                        <div style="height: 8px; border-radius: 8px; background: #35363b; width: 100%;"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <style>
              .order-dropdown-search .dropdown-list input[type="text"] {
                width: 100%;
                background: transparent;
                border: none;
                color: #fff;
                padding: 10px 12px;
                font-size: 1.08rem;
                outline: none;
              }
              .order-dropdown-search .dropdown-list li.selected,
              .order-dropdown-search .dropdown-list li.selected span {
                color: #f0b90b !important;
                font-weight: 600;
              }
              .order-dropdown-search .dropdown-list li span {
                font-size: 1.2rem;
              }
            </style>
            <script>
              function selectDropdownOptionTick(dropdownId, value, li) {
                document.getElementById(dropdownId + 'Value').innerText = value;
                var items = document.querySelectorAll('#' + dropdownId + ' li');
                items.forEach(function(item) { item.classList.remove('selected'); });
                if(li) li.classList.add('selected');
                document.getElementById(dropdownId).parentElement.classList.remove('open');
              }
            </script>
          </div>
        </div>
      </div>
    </div>
    <style>
      .order-tab-btn {
        background: none;
        border: none;
        color: #fff;
        font-size: 1.35rem;
        font-weight: 600;
        padding: 22px 32px 16px 0;
        margin-right: 18px;
        cursor: pointer;
        border-bottom: 2.5px solid transparent;
        transition: color 0.2s, border-bottom 0.2s;
      }
      .order-tab-btn.active {
        color: #f0b90b;
        border-bottom: 2.5px solid #f0b90b;
      }
      .order-dropdown {
        position: relative;
        min-width: 120px;
        max-width: 220px;
        font-size: 1.08rem;
        color: #fff;
        z-index: 10;
      }
      .dropdown-selected {
        background: #181A20;
        border: 1.5px solid #23262F;
        border-radius: 8px;
        padding: 10px 18px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 100px;
        font-weight: 600;
        transition: border 0.2s;
      }
      .dropdown-selected:focus, .dropdown-selected:hover {
        border: 1.5px solid #f0b90b;
      }
      .dropdown-arrow {
        margin-left: 10px;
        color: #aaa;
        font-size: 1.1rem;
      }
      .dropdown-list {
        display: none;
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        background: #181A20;
        border-radius: 12px;
        box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
        z-index: 20;
        padding: 0 0 8px 0;
        border: 1.5px solid #23262F;
        margin: 0;
        list-style: none;
        font-size: 1.08rem;
        color: #fff;
        max-height: 320px;
        overflow-y: auto;
        overflow-x: hidden; /* Remove horizontal scroll */
      }
      .dropdown-list li {
        padding: 12px 18px;
        cursor: pointer;
        transition: background 0.15s;
      }
      .dropdown-list li:hover, .dropdown-list li.selected {
        background: #23262F;
        color: #f0b90b;
      }
      .order-dropdown.open .dropdown-list {
        display: block;
      }
    </style>
    <script>
      function showOrderTab(tab) {
        document.getElementById('openOrdersTab').classList.remove('active');
        document.getElementById('orderHistoryTab').classList.remove('active');
        document.getElementById('tradeHistoryTab').classList.remove('active');
        document.getElementById('openOrdersSection').style.display = 'none';
        document.getElementById('orderHistorySection').style.display = 'none';
        document.getElementById('tradeHistorySection').style.display = 'none';
        if(tab === 'open') {
          document.getElementById('openOrdersTab').classList.add('active');
          document.getElementById('openOrdersSection').style.display = '';
          document.getElementById('openOrdersFilters').style.display = 'flex';
          document.getElementById('openOrdersFilters').style.flexDirection = 'row';
          document.getElementById('openOrdersFilters').style.alignItems = 'center';
          document.getElementById('openOrdersFilters').style.flexWrap = 'wrap';
          document.getElementById('openOrdersFilters').style.gap = '18px';
          document.getElementById('openOrdersFilters').style.width = '100%';
        } else if(tab === 'history') {
          document.getElementById('orderHistoryTab').classList.add('active');
          document.getElementById('orderHistorySection').style.display = '';
        } else if(tab === 'trade') {
          document.getElementById('tradeHistoryTab').classList.add('active');
          document.getElementById('tradeHistorySection').style.display = '';
        }
      }
      function toggleDropdownMenu(id) {
        var el = document.getElementById(id);
        var parent = el.parentElement;
        var isOpen = parent.classList.contains('open');
        document.querySelectorAll('.order-dropdown').forEach(function(d) { d.classList.remove('open'); });
        if(!isOpen) parent.classList.add('open');
        else parent.classList.remove('open');
      }
      function selectDropdownOption(dropdownId, value) {
        document.getElementById(dropdownId + 'Value').innerText = value;
        document.getElementById(dropdownId).parentElement.classList.remove('open');
      }
      document.addEventListener('click', function(e) {
        document.querySelectorAll('.order-dropdown').forEach(function(d) {
          if(!d.contains(e.target)) d.classList.remove('open');
        });
      });
    </script>
  </div>
  <div id="p2p-order-content" class="content-section">
    <!-- Main Toggle Switch for Processing / All Orders -->
    <div id="p2pOrderMainToggle" style="display: flex; gap: 18px; align-items: center; margin-bottom: 18px;">
      <button id="processingTab" class="main-toggle-btn" onclick="setMainP2PTab('processing')">Processing</button>
      <button id="allOrdersTab" class="main-toggle-btn active" onclick="setMainP2PTab('allOrders')">All Orders</button>
    </div>
    <!-- Processing Section (hidden for now) -->
    <div id="p2pProcessingSection" style="display:none;">
      <div style="background: #181A20; border-radius: 12px; padding: 32px 24px; max-width: 100%;">
        <!-- Top Toggle Buttons -->
        <div id="p2pProcessingToggleBtns" style="display: flex; gap: 12px; margin-bottom: 24px;">
          <button class="p2p-processing-toggle-btn active" onclick="setP2PProcessingTab('all')">All</button>
          <button class="p2p-processing-toggle-btn" onclick="setP2PProcessingTab('unpaid')">Unpaid</button>
          <button class="p2p-processing-toggle-btn" onclick="setP2PProcessingTab('paid')">Paid</button>
          <button class="p2p-processing-toggle-btn" onclick="setP2PProcessingTab('appeal')">Appeal in Progress</button>
        </div>
        <!-- Filter Bar (same as All Orders, but no date picker) -->
        <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
          <!-- Coins Dropdown -->
          <div class="p2p-dropdown" style="min-width: 220px;">
            <div class="p2p-dropdown-selected" onclick="toggleP2PDropdown('p2pProcessingCoinsDropdown')">Coins <span id="p2pProcessingCoinsDropdownValue">All coins</span> <span class="p2p-dropdown-arrow">&#9662;</span></div>
            <ul id="p2pProcessingCoinsDropdown" class="p2p-dropdown-list">
              <li style="padding: 0;">
                <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                  <input type="text" placeholder="search options" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" oninput="filterP2PDropdownOptions('p2pProcessingCoinsDropdown', this.value)" />
                  <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#128269;</span>
                </div>
              </li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'All coins', this)" class="selected"><b>All coins</b></li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'HMSTR', this)">HMSTR</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'XRP', this)">XRP</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'WLD', this)">WLD</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'USDT', this)">USDT</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'USDC', this)">USDC</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'TUSD', this)">TUSD</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'TST', this)">TST</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCoinsDropdown', 'TRX', this)">TRX</li>
            </ul>
          </div>
          <!-- Currency Dropdown -->
          <div class="p2p-dropdown" style="min-width: 180px;">
            <div class="p2p-dropdown-selected" onclick="toggleP2PDropdown('p2pProcessingCurrencyDropdown')">Currency <span id="p2pProcessingCurrencyDropdownValue">All</span> <span class="p2p-dropdown-arrow">&#9662;</span></div>
            <ul id="p2pProcessingCurrencyDropdown" class="p2p-dropdown-list">
              <li style="padding: 0;">
                <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                  <input type="text" placeholder="search options" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" oninput="filterP2PDropdownOptions('p2pProcessingCurrencyDropdown', this.value)" />
                  <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#128269;</span>
                </div>
              </li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'All', this)" class="selected"><b>All</b></li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'AFN', this)">AFN</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'ALL', this)">ALL</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'AOA', this)">AOA</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'AZN', this)">AZN</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'BAM', this)">BAM</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'BIF', this)">BIF</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingCurrencyDropdown', 'BND', this)">BND</li>
            </ul>
          </div>
          <!-- Order Type Dropdown -->
          <div class="p2p-dropdown" style="min-width: 180px;">
            <div class="p2p-dropdown-selected" onclick="toggleP2PDropdown('p2pProcessingOrderTypeDropdown')">Order Type <span id="p2pProcessingOrderTypeDropdownValue">All</span> <span class="p2p-dropdown-arrow">&#9662;</span></div>
            <ul id="p2pProcessingOrderTypeDropdown" class="p2p-dropdown-list">
              <li onclick="selectP2PDropdownOption('p2pProcessingOrderTypeDropdown', 'All', this)" class="selected"><b>All</b></li>
              <li onclick="selectP2PDropdownOption('p2pProcessingOrderTypeDropdown', 'Buy/Deposit', this)">Buy/Deposit</li>
              <li onclick="selectP2PDropdownOption('p2pProcessingOrderTypeDropdown', 'Sell/Withdraw', this)">Sell/Withdraw</li>
            </ul>
          </div>
        </div>
        <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
          <div style="position: relative; min-width: 260px;">
            <input id="p2pProcessingOrderSearch" type="text" placeholder="Search order no." style="background: #181A20; border: 2px solid #23262F; border-radius: 10px; color: #fff; font-size: 1.15rem; padding: 12px 16px 12px 44px; width: 100%; outline: none;" />
            <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #888c98; font-size: 1.3rem;">
              <svg width="20" height="20" fill="none" stroke="#888c98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="7"/><line x1="16" y1="16" x2="13.5" y2="13.5"/></svg>
            </span>
          </div>
          <button id="p2pProcessingResetBtn" style="background: none; color: #f0b90b; border: none; border-radius: 10px; padding: 12px 24px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Reset</button>
        </div>
        <!-- Table (same as All Orders) -->
        <div style="width: 100%; overflow-x: auto;">
          <table style="min-width: 1200px; width: 100%; border-collapse: collapse; color: #fff;">
            <thead>
              <tr style="color: #888c98; font-size: 1rem; border-bottom: 1px solid #23262F;">
                <th style="text-align: left; padding: 8px 0;">Type/Date</th>
                <th style="text-align: left; padding: 8px 0;">Order number</th>
                <th style="text-align: left; padding: 8px 0;">Price</th>
                <th style="text-align: left; padding: 8px 0;">Fiat / Crypto Amount</th>
                <th style="text-align: left; padding: 8px 0;">Counterparty</th>
                <th style="text-align: left; padding: 8px 0;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5" style="padding: 48px 0 24px 0; text-align: center; height: 300px;">
                  <span style="color: #fff; font-size: 1.25rem; font-weight: 600;">No Data</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style>
        .p2p-processing-toggle-btn {
          background: none;
          border: 2px solid #23262F;
          color: #fff;
          font-size: 1.13rem;
          font-weight: 600;
          padding: 10px 32px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .p2p-processing-toggle-btn.active {
          background: #23262F;
          color: #f0b90b;
          border: 2px solid #f0b90b;
        }
      </style>
      <script>
        function setP2PProcessingTab(tab) {
          document.querySelectorAll('.p2p-processing-toggle-btn').forEach(btn => btn.classList.remove('active'));
          if(tab==='all') document.querySelectorAll('.p2p-processing-toggle-btn')[0].classList.add('active');
          if(tab==='unpaid') document.querySelectorAll('.p2p-processing-toggle-btn')[1].classList.add('active');
          if(tab==='paid') document.querySelectorAll('.p2p-processing-toggle-btn')[2].classList.add('active');
          if(tab==='appeal') document.querySelectorAll('.p2p-processing-toggle-btn')[3].classList.add('active');
          // Data does not change, only style
        }
      </script>
    </div>
    <!-- All Orders Section (existing content wrapped) -->
    <div id="p2pAllOrdersSection">
      <div style="background: #181A20; border-radius: 12px; padding: 32px 24px; max-width: 100%;">
        <!-- Toggle Buttons -->
        <div id="p2pToggleBtns" style="display: flex; gap: 12px; margin-bottom: 24px;">
          <button class="p2p-toggle-btn active" onclick="setP2PTab('all')">All</button>
          <button class="p2p-toggle-btn" onclick="setP2PTab('completed')">Completed</button>
          <button class="p2p-toggle-btn" onclick="setP2PTab('canceled')">Canceled</button>
        </div>
        <!-- Filter Bar -->
        <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
          <!-- Coins Dropdown -->
          <div class="p2p-dropdown" style="min-width: 220px;">
            <div class="p2p-dropdown-selected" onclick="toggleP2PDropdown('p2pCoinsDropdown')">Coins <span id="p2pCoinsDropdownValue">All coins</span> <span class="p2p-dropdown-arrow">&#9662;</span></div>
            <ul id="p2pCoinsDropdown" class="p2p-dropdown-list">
              <li style="padding: 0;">
                <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                  <input type="text" placeholder="search options" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" oninput="filterP2PDropdownOptions('p2pCoinsDropdown', this.value)" />
                  <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#128269;</span>
                </div>
              </li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'All coins', this)" class="selected"><b>All coins</b></li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'HMSTR', this)">HMSTR</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'XRP', this)">XRP</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'WLD', this)">WLD</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'USDT', this)">USDT</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'USDC', this)">USDC</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'TUSD', this)">TUSD</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'TST', this)">TST</li>
              <li onclick="selectP2PDropdownOption('p2pCoinsDropdown', 'TRX', this)">TRX</li>
            </ul>
          </div>
          <!-- Currency Dropdown -->
          <div class="p2p-dropdown" style="min-width: 180px;">
            <div class="p2p-dropdown-selected" onclick="toggleP2PDropdown('p2pCurrencyDropdown')">Currency <span id="p2pCurrencyDropdownValue">All</span> <span class="p2p-dropdown-arrow">&#9662;</span></div>
            <ul id="p2pCurrencyDropdown" class="p2p-dropdown-list">
              <li style="padding: 0;">
                <div style="display: flex; align-items: center; background: #181A20; border-bottom: 1.5px solid #23262F;">
                  <input type="text" placeholder="search options" style="background: transparent; border: none; color: #fff; padding: 10px 12px; font-size: 1.08rem; flex: 1; outline: none;" oninput="filterP2PDropdownOptions('p2pCurrencyDropdown', this.value)" />
                  <span style="color: #888c98; font-size: 1.2rem; cursor: pointer; padding: 0 8px;">&#128269;</span>
                </div>
              </li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'All', this)" class="selected"><b>All</b></li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'AFN', this)">AFN</li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'ALL', this)">ALL</li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'AOA', this)">AOA</li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'AZN', this)">AZN</li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'BAM', this)">BAM</li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'BIF', this)">BIF</li>
              <li onclick="selectP2PDropdownOption('p2pCurrencyDropdown', 'BND', this)">BND</li>
            </ul>
          </div>
          <!-- Order Type Dropdown -->
          <div class="p2p-dropdown" style="min-width: 180px;">
            <div class="p2p-dropdown-selected" onclick="toggleP2PDropdown('p2pOrderTypeDropdown')">Order Type <span id="p2pOrderTypeDropdownValue">All</span> <span class="p2p-dropdown-arrow">&#9662;</span></div>
            <ul id="p2pOrderTypeDropdown" class="p2p-dropdown-list">
              <li onclick="selectP2PDropdownOption('p2pOrderTypeDropdown', 'All', this)" class="selected"><b>All</b></li>
              <li onclick="selectP2PDropdownOption('p2pOrderTypeDropdown', 'Buy/Deposit', this)">Buy/Deposit</li>
              <li onclick="selectP2PDropdownOption('p2pOrderTypeDropdown', 'Sell/Withdraw', this)">Sell/Withdraw</li>
            </ul>
          </div>
          <!-- Date Range Picker -->
          <div class="order-date-range" style="display: flex; align-items: center; gap: 8px; min-width: 260px;">
            <input id="p2pDateRange" class="date-picker-btn" style="background: #181A20; border: 1.5px solid #f0b90b; border-radius: 8px; padding: 12px 24px; color: #fff; font-weight: 600; font-size: 1.13rem; cursor: pointer; min-width: 220px; width: 260px;" readonly />
          </div>
        </div>
        <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
          <div style="position: relative; min-width: 260px;">
            <input id="p2pOrderSearch" type="text" placeholder="Search order no." style="background: #181A20; border: 2px solid #23262F; border-radius: 10px; color: #fff; font-size: 1.15rem; padding: 12px 16px 12px 44px; width: 100%; outline: none;" />
            <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #888c98; font-size: 1.3rem;">
              <svg width="20" height="20" fill="none" stroke="#888c98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="7"/><line x1="16" y1="16" x2="13.5" y2="13.5"/></svg>
            </span>
          </div>
          <button id="p2pResetBtn" style="background: none; color: #f0b90b; border: none; border-radius: 10px; padding: 12px 24px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Reset</button>
        </div>
        <!-- Table -->
        <div style="width: 100%; overflow-x: auto;">
          <table style="min-width: 1200px; width: 100%; border-collapse: collapse; color: #fff;">
            <thead>
              <tr style="color: #888c98; font-size: 1rem; border-bottom: 1px solid #23262F;">
                <th style="text-align: left; padding: 8px 0;">Type/Date</th>
                <th style="text-align: left; padding: 8px 0;">Order number</th>
                <th style="text-align: left; padding: 8px 0;">Price</th>
                <th style="text-align: left; padding: 8px 0;">Fiat / Crypto Amount</th>
                <th style="text-align: left; padding: 8px 0;">Counterparty</th>
                <th style="text-align: left; padding: 8px 0;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="5" style="padding: 48px 0 24px 0; text-align: center; height: 300px;">
                  <span style="color: #fff; font-size: 1.25rem; font-weight: 600;">No Data</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <style>
        .p2p-toggle-btn {
          background: none;
          border: 2px solid #23262F;
          color: #fff;
          font-size: 1.13rem;
          font-weight: 600;
          padding: 10px 32px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .p2p-toggle-btn.active {
          background: #23262F;
          color: #f0b90b;
          border: 2px solid #f0b90b;
        }
        .p2p-dropdown {
          position: relative;
          min-width: 120px;
          max-width: 220px;
          font-size: 1.08rem;
          color: #fff;
          z-index: 10;
        }
        .p2p-dropdown-selected {
          background: #181A20;
          border: 1.5px solid #23262F;
          border-radius: 8px;
          padding: 10px 18px;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 100px;
          font-weight: 600;
          transition: border 0.2s;
        }
        .p2p-dropdown-selected:focus, .p2p-dropdown-selected:hover {
          border: 1.5px solid #f0b90b;
        }
        .p2p-dropdown-arrow {
          margin-left: 10px;
          color: #aaa;
          font-size: 1.1rem;
        }
        .p2p-dropdown-list {
          display: none;
          position: absolute;
          top: 44px;
          left: 0;
          right: 0;
          background: #181A20;
          border-radius: 12px;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
          z-index: 20;
          padding: 0 0 8px 0;
          border: 1.5px solid #23262F;
          margin: 0;
          list-style: none;
          font-size: 1.08rem;
          color: #fff;
          max-height: 320px;
          overflow-y: auto;
          overflow-x: hidden; /* Remove horizontal scroll */
        }
        /* Custom vertical scrollbar for dropdowns */
        .p2p-dropdown-list::-webkit-scrollbar {
          width: 6px;
        }
        .p2p-dropdown-list::-webkit-scrollbar-thumb {
          background: #888c98;
          border-radius: 8px;
        }
        .p2p-dropdown-list::-webkit-scrollbar-track {
          background: #181A20;
          border-radius: 8px;
        }
        /* For Firefox */
        .p2p-dropdown-list {
          scrollbar-width: thin;
          scrollbar-color: #888c98 #181A20;
        }
        /* Processing section dropdowns too */
        #p2pProcessingSection .p2p-dropdown-list::-webkit-scrollbar {
          width: 6px;
        }
        #p2pProcessingSection .p2p-dropdown-list::-webkit-scrollbar-thumb {
          background: #888c98;
          border-radius: 8px;
        }
        #p2pProcessingSection .p2p-dropdown-list::-webkit-scrollbar-track {
          background: #181A20;
          border-radius: 8px;
        }
        #p2pProcessingSection .p2p-dropdown-list {
          scrollbar-width: thin;
          scrollbar-color: #888c98 #181A20;
        }
        .p2p-dropdown-list li {
          padding: 12px 18px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .p2p-dropdown-list li:hover, .p2p-dropdown-list li.selected {
          background: #23262F;
          color: #f0b90b;
        }
        .p2p-dropdown.open .p2p-dropdown-list {
          display: block;
        }
      </style>
      <style>
        .p2p-processing-toggle-btn {
          background: none;
          border: 2px solid #23262F;
          color: #fff;
          font-size: 1.13rem;
          font-weight: 600;
          padding: 10px 32px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .p2p-processing-toggle-btn.active {
          background: #23262F;
          color: #f0b90b;
          border: 2px solid #f0b90b;
        }
      </style>
      <script>
        function setP2PTab(tab) {
          document.querySelectorAll('.p2p-toggle-btn').forEach(btn => btn.classList.remove('active'));
          if(tab==='all') document.querySelectorAll('.p2p-toggle-btn')[0].classList.add('active');
          if(tab==='completed') document.querySelectorAll('.p2p-toggle-btn')[1].classList.add('active');
          if(tab==='canceled') document.querySelectorAll('.p2p-toggle-btn')[2].classList.add('active');
          // Data does not change, only style
        }
        function toggleP2PDropdown(id) {
          var el = document.getElementById(id);
          var parent = el.parentElement;
          var isOpen = parent.classList.contains('open');
          document.querySelectorAll('.p2p-dropdown').forEach(function(d) { d.classList.remove('open'); });
          if(!isOpen) parent.classList.add('open');
          else parent.classList.remove('open');
        }
        function selectP2PDropdownOption(dropdownId, value, li) {
          document.getElementById(dropdownId + 'Value').innerText = value;
          var items = document.querySelectorAll('#' + dropdownId + ' li');
          items.forEach(function(item) { item.classList.remove('selected'); });
          if(li) li.classList.add('selected');
          document.getElementById(dropdownId).parentElement.classList.remove('open');
        }
        function filterP2PDropdownOptions(dropdownId, value) {
          var items = document.querySelectorAll('#' + dropdownId + ' li');
          value = value.toLowerCase();
          items.forEach(function(item, idx) {
            if(idx === 0) return; // skip search input
            if(item.textContent.toLowerCase().includes(value)) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        }
        document.addEventListener('click', function(e) {
          document.querySelectorAll('.p2p-dropdown').forEach(function(d) {
            if(!d.contains(e.target)) d.classList.remove('open');
          });
        });
        // Date Picker
        document.addEventListener('DOMContentLoaded', function() {
          if (window.Litepicker) {
            var p2pPicker = new Litepicker({
              element: document.getElementById('p2pDateRange'),
              singleMode: false,
              numberOfMonths: 2,
              numberOfColumns: 2,
              format: 'YYYY-MM-DD',
              autoApply: true,
              maxDate: new Date(),
              dropdowns: {
                minYear: 2020,
                maxYear: new Date().getFullYear() + 1,
                months: true,
                years: true
              },
              setup: (picker) => {
                picker.on('selected', (start, end) => {
                  document.getElementById('p2pDateRange').value = `${start.format('YYYY-MM-DD')} → ${end.format('YYYY-MM-DD')}`;
                });
              }
            });
            // Set default range to last 7 days
            const today = new Date();
            const lastWeek = new Date();
            lastWeek.setDate(today.getDate() - 6);
            p2pPicker.setDateRange(lastWeek, today);
            document.getElementById('p2pDateRange').value = `${p2pPicker.getStartDate().format('YYYY-MM-DD')} → ${p2pPicker.getEndDate().format('YYYY-MM-DD')}`;
          }
          // Reset Button
          var resetBtn = document.getElementById('p2pResetBtn');
          if (resetBtn) {
            resetBtn.addEventListener('click', function(e) {
              // Reset dropdowns
              ['p2pCoinsDropdown','p2pCurrencyDropdown','p2pOrderTypeDropdown'].forEach(function(id) {
                document.getElementById(id+'Value').innerText = (id==='p2pOrderTypeDropdown'?'All':(id==='p2pCoinsDropdown'?'All coins':'All'));
                var items = document.querySelectorAll('#'+id+' li');
                items.forEach(function(item, idx) { item.classList.remove('selected'); });
                if(items[1]) items[1].classList.add('selected');
              });
              // Reset date range to last 7 days
              if(window.Litepicker && window.p2pPicker) {
                const today = new Date();
                const lastWeek = new Date();
                lastWeek.setDate(today.getDate() - 6);
                window.p2pPicker.setDateRange(lastWeek, today);
                document.getElementById('p2pDateRange').value = `${window.p2pPicker.getStartDate().format('YYYY-MM-DD')} → ${window.p2pPicker.getEndDate().format('YYYY-MM-DD')}`;
              }
              // Reset search
              document.getElementById('p2pOrderSearch').value = '';
            });
          }
        });
      </script>
    </div>
    <style>
      .main-toggle-btn {
        background: none;
        border: 2px solid #23262F;
        color: #fff;
        font-size: 1.13rem;
        font-weight: 600;
        padding: 10px 32px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s, color 0.2s, border 0.2s;
      }
      .main-toggle-btn.active {
        background: #23262F;
        color: #f0b90b;
        border: 2px solid #f0b90b;
      }
    </style>
    <script>
      function setMainP2PTab(tab) {
        document.getElementById('processingTab').classList.remove('active');
        document.getElementById('allOrdersTab').classList.remove('active');
        if(tab === 'processing') {
          document.getElementById('processingTab').classList.add('active');
          document.getElementById('p2pAllOrdersSection').style.display = 'none';
          document.getElementById('p2pProcessingSection').style.display = '';
        } else {
          document.getElementById('allOrdersTab').classList.add('active');
          document.getElementById('p2pAllOrdersSection').style.display = '';
          document.getElementById('p2pProcessingSection').style.display = 'none';
        }
      }
      // Default to All Orders
      document.addEventListener('DOMContentLoaded', function() {
        setMainP2PTab('allOrders');
      });
    </script>
  </div>
  <div id="transaction-history-content" class="content-section">
    <h2>Transaction History</h2>
    <p>This is the transaction history content.</p>
  </div>

  <!-- Rewards and Referral Content -->
  <div id="rewards-hub-content" class="content-section">
    <h2>Rewards Hub</h2>
    <p>This is the rewards hub content.</p>
  </div>
  <div id="referral-content" class="content-section">
    <h2>Referral Program</h2>
    <p>This is the referral program content.</p>
  </div>

  <!-- Account Content -->
  <div id="identification-content" class="content-section">
    <!-- Top user info row (outside card) -->
    <div style="display: flex; align-items: center; gap: 22px; margin-bottom: 36px; margin-left: 24px;">
      <img src="https://www.binance.com/static/images/common/avatar-default.png" alt="avatar" style="width: 80px; height: 80px; border-radius: 16px; background: #23262F; border: none;">
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div style="font-size: 1.35rem; font-weight: 700; color: #fff;">Mirtha Vandoren sx2a</div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="color: #bfc2c7; font-size: 1.08rem;">ID: 1102079382</span>
          <span style="background: #23262F; color: #bfc2c7; font-size: 1.01rem; font-weight: 600; border-radius: 7px; padding: 4px 14px; margin-left: 0;">Unverified</span>
        </div>
      </div>
    </div>
    <!-- Card -->
    <div style="max-width: 100%; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 38px 38px 32px 38px; border: 1.5px solid #23262F;">
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
    </div>
  </div>
  <div id="security-content" class="content-section">
    <h2>Security Settings</h2>
    <p>This is the security settings content.</p>
  </div>
  <div id="payment-content" class="content-section">
    <div style="max-width: 1200px; margin: 0 auto;">
      <h1 style="color: #fff; font-size: 2.6rem; font-weight: 700; margin-bottom: 18px;">Payment</h1>
      <div style="display: flex; align-items: center; gap: 0; border-bottom: 1.5px solid #23262F; margin-bottom: 0;">
        <button id="p2pToggleBtn" class="pay-toggle-btn" onclick="showPaymentTab('p2p')" style="border: none; background: none; color: #888c98; font-size: 1.35rem; font-weight: 700; padding: 0 32px 12px 0; margin: 0; border-bottom: 3px solid transparent;">P2P</button>
        <button id="cryptoToggleBtn" class="pay-toggle-btn" onclick="showPaymentTab('crypto')" style="border: none; background: none; color: #fff; font-size: 1.35rem; font-weight: 700; padding: 0 32px 12px 0; margin: 0; border-bottom: 3px solid #f0b90b;">Buy Crypto</button>
      </div>
      <div id="payment-p2p-section" style="margin-top: 32px; display: none;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px;">
          <div style="color: #bfc2c7; font-size: 1.18rem; max-width: 70%;">
            P2P payment methods: When you sell cryptocurrencies, the payment method added will be displayed to buyer as options to accept payment, please ensure that the account owner's name is consistent with your verified name on Binance. You can add up to 20 payment methods.
          </div>
          <button id="addPaymentMethodBtn" style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 14px 28px; font-weight: 700; font-size: 1.18rem; cursor: pointer; display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem; font-weight: 700;">+</span> Add a payment method
          </button>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 320px; margin-top: 48px;">
          <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 88px; opacity: 0.35; margin-bottom: 24px;">
          <div style="color: #bfc2c7; font-size: 1.35rem; text-align: center;">You have not added any payment methods</div>
        </div>
      </div>
      <div id="payment-crypto-section" style="margin-top: 32px;">
        <div style="color: #bfc2c7; font-size: 1.18rem; margin-bottom: 48px;">Manage the payment method of your credit and debit card on the buy crypto page</div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 220px; margin-top: 48px;">
          <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 88px; opacity: 0.35; margin-bottom: 24px;">
          <div style="color: #bfc2c7; font-size: 1.35rem; text-align: center;">You don't have any cards</div>
        </div>
      </div>
    </div>
    <!-- Modal Popup for Identity Verification -->
    <div id="identityModalOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.55); z-index:2000;"></div>
    <div id="identityModal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:2100; align-items:center; justify-content:center;">
      <div style="background:#181A20; border-radius:18px; max-width:410px; width:95vw; margin:auto; box-shadow:0 2px 24px 0 rgba(0,0,0,0.28); padding:38px 32px 28px 32px; position:relative; display:flex; flex-direction:column; align-items:center;">
        <button onclick="closeIdentityModal()" style="position:absolute; top:18px; right:18px; background:none; border:none; color:#bfc2c7; font-size:2rem; font-weight:700; cursor:pointer;">&times;</button>
        <div style="background:#f0b90b; border-radius:50%; width:70px; height:70px; display:flex; align-items:center; justify-content:center; margin-bottom:24px;">
          <span style="color:#181A20; font-size:2.8rem; font-weight:700;">!</span>
        </div>
        <div style="color:#fff; font-size:1.35rem; font-weight:700; text-align:center; margin-bottom:18px;">You haven't completed identity verification</div>
        <div style="color:#bfc2c7; font-size:1.08rem; text-align:center; margin-bottom:32px;">For the security of your account and that of your counterparty, please complete the verification first<br><span style='color:#888c98;'>(It is recommended to complete your SMS authentication)</span></div>
        <div style="display:flex; gap:18px; width:100%; justify-content:center;">
          <button onclick="closeIdentityModal()" style="flex:1; background:#23262F; color:#fff; border:none; border-radius:8px; padding:14px 0; font-weight:700; font-size:1.13rem; cursor:pointer;">Not now</button>
          <button onclick="window.location.href='get-verify.php'" style="flex:1; background:#f0b90b; color:#181A20; border:none; border-radius:8px; padding:14px 0; font-weight:700; font-size:1.13rem; cursor:pointer;">Verify</button>
        </div>
      </div>
    </div>
  </div>
  <style>
    .pay-toggle-btn {
      background: none;
      color: #888c98;
      border: none;
      border-radius: 0;
      font-weight: 700;
      font-size: 1.35rem;
      padding: 0 32px 12px 0;
      margin: 0;
      border-bottom: 3px solid transparent;
      transition: color 0.2s, border-bottom 0.2s;
      cursor: pointer;
    }
    .pay-toggle-btn.active {
      color: #fff;
      border-bottom: 3px solid #f0b90b;
    }
  </style>
  <script>
    function showPaymentTab(tab) {
      var p2pBtn = document.getElementById('p2pToggleBtn');
      var cryptoBtn = document.getElementById('cryptoToggleBtn');
      var p2pSection = document.getElementById('payment-p2p-section');
      var cryptoSection = document.getElementById('payment-crypto-section');
      if(tab === 'p2p') {
        p2pBtn.classList.add('active');
        cryptoBtn.classList.remove('active');
        p2pBtn.style.color = '#fff';
        p2pBtn.style.borderBottom = '3px solid #f0b90b';
        cryptoBtn.style.color = '#888c98';
        cryptoBtn.style.borderBottom = '3px solid transparent';
        p2pSection.style.display = '';
        cryptoSection.style.display = 'none';
      } else {
        cryptoBtn.classList.add('active');
        p2pBtn.classList.remove('active');
        cryptoBtn.style.color = '#fff';
        cryptoBtn.style.borderBottom = '3px solid #f0b90b';
        p2pBtn.style.color = '#888c98';
        p2pBtn.style.borderBottom = '3px solid transparent';
        p2pSection.style.display = 'none';
        cryptoSection.style.display = '';
      }
    }
    // Modal logic
    document.addEventListener('DOMContentLoaded', function() {
      // Set default tab to P2P
      showPaymentTab('p2p');
      var addBtn = document.getElementById('addPaymentMethodBtn');
      if(addBtn) {
        addBtn.onclick = function() {
          document.getElementById('identityModal').style.display = 'flex';
          document.getElementById('identityModalOverlay').style.display = 'block';
        };
      }
    });
    function closeIdentityModal() {
      document.getElementById('identityModal').style.display = 'none';
      document.getElementById('identityModalOverlay').style.display = 'none';
    }
  </script>
  <div id="api-management-content" class="content-section">
    <h2>API Management</h2>
    <p>This is the API management content.</p>
  </div>
  <div id="account-management-content" class="content-section">
    <div style="max-width: 1100px; margin: 0 auto;">
      <h1 style="color: #fff; font-size: 2.3rem; font-weight: 700; margin-bottom: 28px;">Account Statement</h1>
      <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 18px; flex-wrap: wrap;">
        <input id="statementDate" type="text" style="background: #181A20; border: 1.5px solid #23262F; border-radius: 8px; color: #fff; font-size: 1.13rem; padding: 12px 18px; width: 170px; font-weight: 600;" readonly placeholder="YYYY/MM/DD" />
        <select style="background: #181A20; border: 1.5px solid #23262F; border-radius: 8px; color: #fff; font-size: 1.13rem; padding: 12px 18px; min-width: 180px; font-weight: 600;">
          <option>Account</option>
          <option selected>piperfx272@gmail.com</option>
        </select>
        <div style="position: relative;">
          <button id="walletDropdownBtn" style="background: #181A20; border: 1.5px solid #23262F; border-radius: 8px; color: #fff; font-size: 1.13rem; padding: 12px 18px; min-width: 120px; font-weight: 600; display: flex; align-items: center; gap: 8px; cursor: pointer;">Wallet <span id="walletDropdownValue">A.</span> <span style="font-size:1.2rem;">&#9660;</span></button>
          <div id="walletDropdown" style="display: none; position: absolute; top: 48px; left: 0; background: #181A20; border-radius: 12px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); z-index: 10; padding: 0; border: 1.5px solid #23262F; min-width: 180px;">
            <div onclick="toggleWalletCheck(this)" data-wallet="All" class="wallet-option" style="display: flex; align-items: center; gap: 10px; padding: 14px 18px; cursor: pointer;">
              <span class="wallet-check" style="width: 18px; height: 18px; background: #f0b90b; border-radius: 4px; display: inline-block; margin-right: 8px;"></span> All
            </div>
            <div onclick="toggleWalletCheck(this)" data-wallet="Spot" class="wallet-option" style="display: flex; align-items: center; gap: 10px; padding: 14px 18px; cursor: pointer;">
              <span class="wallet-check" style="width: 18px; height: 18px; background: #23262F; border-radius: 4px; display: inline-block; margin-right: 8px;"></span> Spot
            </div>
            <div onclick="toggleWalletCheck(this)" data-wallet="Funding" class="wallet-option" style="display: flex; align-items: center; gap: 10px; padding: 14px 18px; cursor: pointer;">
              <span class="wallet-check" style="width: 18px; height: 18px; background: #f0b90b; border-radius: 4px; display: inline-block; margin-right: 8px;"></span> Funding
            </div>
          </div>
        </div>
        <select style="background: #181A20; border: 1.5px solid #23262F; border-radius: 8px; color: #fff; font-size: 1.13rem; padding: 12px 18px; min-width: 120px; font-weight: 600;">
          <option>Estimated Value</option>
          <option selected>USDT</option>
        </select>
        <button id="statementSearchBtn" style="background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 12px 38px; font-weight: 700; font-size: 1.13rem; margin-left: 8px; cursor: pointer;">Search</button>
        <button id="statementResetBtn" style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-weight: 700; font-size: 1.13rem; margin-left: 0; cursor: pointer;">Reset</button>
        <button style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-weight: 700; font-size: 1.13rem; margin-left: auto; cursor: pointer; display: flex; align-items: center; gap: 8px;"><span style="font-size: 1.2rem;">&#8681;</span> Export</button>
      </div>
      <div style="margin: 32px 0 18px 0; border-bottom: 1.5px solid #23262F;"></div>
      <div style="margin-bottom: 18px;">
        <h2 style="color: #fff; font-size: 1.35rem; font-weight: 700; margin-bottom: 18px;">Overview</h2>
        <div style="display: flex; gap: 48px; align-items: flex-end; flex-wrap: wrap; margin-bottom: 12px;">
          <div style="color: #bfc2c7; font-size: 1.08rem;">Date<br><span id="overviewDate" style="color: #fff; font-size: 1.13rem; font-weight: 600;">2025-04-29</span></div>
          <div style="color: #bfc2c7; font-size: 1.08rem;">User ID<br><span style="color: #fff; font-size: 1.13rem; font-weight: 600;">1102079382</span></div>
          <div style="color: #bfc2c7; font-size: 1.08rem;">Account Type<br><span style="color: #fff; font-size: 1.13rem; font-weight: 600;">Master Account</span></div>
          <div style="color: #bfc2c7; font-size: 1.08rem;">Wallet<br><span style="color: #fff; font-size: 1.13rem; font-weight: 600;">All</span></div>
          <div style="color: #bfc2c7; font-size: 1.08rem;">Rate<br><span style="color: #fff; font-size: 1.13rem; font-weight: 600;">1 BTC</span><br><span style="color: #bfc2c7; font-size: 1.01rem;">≈ 94,257 USDT</span></div>
        </div>
        <div style="color: #888c98; font-size: 0.98rem; margin-bottom: 8px;">Data refreshes at UTC+0 daily.</div>
      </div>
      <div style="display: flex; gap: 48px; align-items: flex-end; flex-wrap: wrap; margin-bottom: 32px;">
        <div style="color: #bfc2c7; font-size: 1.18rem;">Total Value<br><span style="color: #fff; font-size: 1.45rem; font-weight: 700;">-- BTC <span style="color: #888c98; font-size: 1.18rem; font-weight: 600;">≈-- USDT</span></span></div>
        <div style="color: #bfc2c7; font-size: 1.18rem;">Spot<br><span style="color: #fff; font-size: 1.15rem; font-weight: 700;">-- BTC <span style="color: #888c98; font-size: 1.08rem; font-weight: 600;">≈-- USDT</span></span></div>
        <div style="color: #bfc2c7; font-size: 1.18rem;">Funding<br><span style="color: #fff; font-size: 1.15rem; font-weight: 700;">-- BTC <span style="color: #888c98; font-size: 1.08rem; font-weight: 600;">≈-- USDT</span></span></div>
      </div>
      <div style="margin: 32px 0 18px 0; border-bottom: 1.5px solid #23262F;"></div>
      <div style="margin-bottom: 18px;">
        <h2 style="color: #fff; font-size: 1.35rem; font-weight: 700; margin-bottom: 18px;">Spot</h2>
        <div style="color: #bfc2c7; font-size: 1.13rem; margin-bottom: 8px;">Total Balance<br><span style="color: #fff; font-size: 1.25rem; font-weight: 700;">-- BTC <span style="color: #888c98; font-size: 1.13rem; font-weight: 600;">≈ -- USDT</span></span></div>
        <table style="width: 100%; border-collapse: collapse; color: #fff; background: none; margin-bottom: 0;">
          <thead>
            <tr style="color: #888c98; font-size: 1.13rem; border-bottom: 1px solid #23262F;">
              <th style="text-align: left; padding: 8px 0; font-weight: 500;">Coin</th>
              <th style="text-align: left; padding: 8px 0; font-weight: 500;">Total</th>
            </tr>
          </thead>
        </table>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px; margin-top: 18px;">
          <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 64px; opacity: 0.35; margin-bottom: 10px;">
          <div style="color: #888c98; font-size: 1.13rem;">No records found.</div>
        </div>
      </div>
      <div style="margin: 32px 0 18px 0; border-bottom: 1.5px solid #23262F;"></div>
      <div style="margin-bottom: 18px;">
        <h2 style="color: #fff; font-size: 1.35rem; font-weight: 700; margin-bottom: 18px;">Funding</h2>
        <div style="color: #bfc2c7; font-size: 1.13rem; margin-bottom: 8px;">Total Balance<br><span style="color: #fff; font-size: 1.25rem; font-weight: 700;">-- BTC <span style="color: #888c98; font-size: 1.13rem; font-weight: 600;">≈ -- USDT</span></span></div>
        <table style="width: 100%; border-collapse: collapse; color: #fff; background: none; margin-bottom: 0;">
          <thead>
            <tr style="color: #888c98; font-size: 1.13rem; border-bottom: 1px solid #23262F;">
              <th style="text-align: left; padding: 8px 0; font-weight: 500;">Coin</th>
              <th style="text-align: left; padding: 8px 0; font-weight: 500;">Total</th>
            </tr>
          </thead>
        </table>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px; margin-top: 18px;">
          <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 64px; opacity: 0.35; margin-bottom: 10px;">
          <div style="color: #888c98; font-size: 1.13rem;">No records found.</div>
        </div>
      </div>
    </div>
    <!-- Date Picker Modal -->
    <div id="statementDatePickerModal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.45); z-index:3000; align-items:center; justify-content:center;">
      <div style="background:#181A20; border-radius:18px; padding:24px 24px 18px 24px; box-shadow:0 2px 24px 0 rgba(0,0,0,0.28); min-width:320px; max-width:90vw;">
        <div id="statementDatePicker"></div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/litepicker/dist/css/litepicker.css" />
  <script>
    // Date Picker logic
    document.addEventListener('DOMContentLoaded', function() {
      var dateInput = document.getElementById('statementDate');
      var today = new Date();
      var picker = new Litepicker({
        element: dateInput,
        singleMode: true,
        format: 'YYYY/MM/DD',
        autoApply: true,
        maxDate: today,
        dropdowns: {
          minYear: today.getFullYear() - 1,
          maxYear: today.getFullYear(),
          months: true,
          years: true
        },
        setup: (picker) => {
          picker.on('selected', (date) => {
            dateInput.value = date.format('YYYY/MM/DD');
          });
        }
      });
      // Search button logic to update overview date
      var searchBtn = document.getElementById('statementSearchBtn');
      var overviewDate = document.getElementById('overviewDate');
      if(searchBtn && overviewDate && dateInput) {
        searchBtn.onclick = function() {
          if(dateInput.value) overviewDate.textContent = dateInput.value.replace(/\//g, '-');
        };
      }
      // Wallet Dropdown logic
      var btn = document.getElementById('walletDropdownBtn');
      var dropdown = document.getElementById('walletDropdown');
      var walletValue = document.getElementById('walletDropdownValue');
      btn.onclick = function(e) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      };
      document.addEventListener('click', function(e) {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });
      // Wallet selection logic (single select)
      window.toggleWalletCheck = function(el) {
        var allOptions = dropdown.querySelectorAll('.wallet-option');
        allOptions.forEach(function(opt) {
          var c = opt.querySelector('.wallet-check');
          c.style.background = '#23262F';
        });
        var check = el.querySelector('.wallet-check');
        check.style.background = '#f0b90b';
        // Update dropdown value
        var wallet = el.getAttribute('data-wallet');
        if(wallet === 'All') {
          walletValue.textContent = 'A.';
        } else {
          walletValue.textContent = wallet;
        }
      };
      // Reset button logic
      var resetBtn = document.getElementById('statementResetBtn');
      if(resetBtn) {
        resetBtn.onclick = function() {
          // Reset date
          dateInput.value = '';
          // Reset wallet selection to All only
          var allOptions = dropdown.querySelectorAll('.wallet-option');
          allOptions.forEach(function(opt) {
            var c = opt.querySelector('.wallet-check');
            if(opt.getAttribute('data-wallet') === 'All') {
              c.style.background = '#f0b90b';
            } else {
              c.style.background = '#23262F';
            }
          });
          walletValue.textContent = 'A.';
        };
      }
    });
  </script>
  <div id="financial-management-content" class="content-section">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px;">
      <h1 style="color: #fff; font-size: 2.4rem; font-weight: 700; margin: 0;">Financial Reports</h1>
      <button style="background: #23262F; color: #fff; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 600; font-size: 1.13rem; cursor: pointer; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 1.2rem;">&#8635;</span> Refresh
      </button>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 340px; margin-top: 48px;">
      <img src="https://www.svgrepo.com/show/503963/search-document.svg" alt="No records" style="width: 88px; opacity: 0.35; margin-bottom: 24px;">
      <div style="color: #888c98; font-size: 1.35rem; text-align: center;">There are no documents generated for you at this time.</div>
    </div>
  </div>

  <!-- Sub Accounts and Settings Content -->
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
  <!-- <div id="settings-content" class="content-section">
    <h2>Settings</h2>
    <p>This is the settings content.</p>
  </div> -->

  <!-- Third-party Wallet Content -->
  <div id="binance-tr-content" class="content-section">
    <div style="max-width: 520px; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 32px 32px; border: 1.5px solid #23262F;">
      <div style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Transfer to Binance TR</div>
      <div style="color: #aaa; font-size: 1.05rem; margin-bottom: 28px;">Trade with Turkish Lira. Deposit and withdraw instantly with direct bank transfer.</div>
      <div style="margin-bottom: 18px; position: relative;">
        <div style="color: #aaa; font-size: 1.01rem; margin-bottom: 6px; font-weight: 500;">Coin</div>
        <div id="coinDropdownSelected" onclick="toggleCoinDropdown()" style="display: flex; align-items: center; background: #23262F; border-radius: 10px; padding: 14px 18px; cursor: pointer; position: relative;">
          <img id="selectedCoinIcon" src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 36px; height: 36px; border-radius: 50%; margin-right: 14px;">
          <span style="font-size: 1.18rem; font-weight: 700; color: #fff; margin-right: 8px;" id="selectedCoinSymbol">1000CAT</span>
          <span style="color: #aaa; font-size: 1.08rem;" id="selectedCoinName">1000*Simons Cat</span>
          <svg style="margin-left: auto; color: #aaa; width: 22px; height: 22px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div id="coinDropdownList" style="display: none; position: absolute; top: 60px; left: 0; right: 0; background: #181A20; border-radius: 12px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); z-index: 10; padding: 0 0 8px 0; border: 1.5px solid #23262F;">
          <div style="padding: 12px 18px 8px 18px;">
            <input id="coinSearchInput" type="text" placeholder="Search" style="width: 100%; background: #23262F; border: none; border-radius: 6px; color: #fff; padding: 8px 12px; font-size: 1.08rem; outline: none;">
          </div>
          <div id="coinOptions" style="max-height: 320px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #35363b #181A20;">
            <div class="coin-option" data-symbol="1000CAT" data-name="1000*Simons Cat" data-icon="https://i.ibb.co/6bQ7QpK/cat.png" onclick="selectCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000CAT</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*Simons Cat</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1000SATS" data-name="1000*SATS (Ordinals)" data-icon="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" onclick="selectCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" alt="1000SATS" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000SATS</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*SATS (Ordinals)</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1MBABYDOGE" data-name="1M x BABYDOGE" data-icon="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" onclick="selectCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" alt="1MBABYDOGE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1MBABYDOGE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1M x BABYDOGE</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="AAVE" data-name="Aave" data-icon="https://cryptologos.cc/logos/aave-aave-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="AAVE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">AAVE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Aave</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACA" data-name="Acala Token" data-icon="https://cryptologos.cc/logos/acala-aca-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/acala-aca-logo.png" alt="ACA" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACA</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Acala Token</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACE" data-name="Fusionist" data-icon="https://cryptologos.cc/logos/fusionist-ace-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/fusionist-ace-logo.png" alt="ACE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Fusionist</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACH" data-name="Alchemy Pay" data-icon="https://cryptologos.cc/logos/alchemy-pay-ach-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/alchemy-pay-ach-logo.png" alt="ACH" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACH</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Alchemy Pay</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACM" data-name="AC Milan Fan Token" data-icon="https://cryptologos.cc/logos/ac-milan-fan-token-acm-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/ac-milan-fan-token-acm-logo.png" alt="ACM" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACM</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">AC Milan Fan Token</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACT" data-name="Act I : The AI Prophecy" data-icon="https://cryptologos.cc/logos/act-1-the-ai-prophecy-act-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/act-1-the-ai-prophecy-act-logo.png" alt="ACT" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACT</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Act I : The AI Prophecy</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
          </div>
        </div>
        <style>
          #coinOptions::-webkit-scrollbar {
            width: 7px;
          }
          #coinOptions::-webkit-scrollbar-thumb {
            background: #35363b;
            border-radius: 8px;
          }
          #coinOptions::-webkit-scrollbar-track {
            background: #181A20;
          }
        </style>
      </div>
      <div style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
        <div style="color: #aaa; font-size: 1.01rem; font-weight: 500;">Amount</div>
        <div style="color: #fff; font-size: 1.01rem; font-weight: 500;">Available: <span style="color: #aaa;">0 <span id='selectedCoinSymbol2'>1000CAT</span></span></div>
      </div>
      <div style="display: flex; align-items: center; background: #23262F; border-radius: 8px; padding: 10px 16px; margin-bottom: 6px;">
        <input type="number" value="0" min="0" style="background: transparent; border: none; color: #fff; font-size: 1.2rem; width: 100%; outline: none; font-weight: 600;" />
        <span style="color: #fff; font-size: 1.1rem; font-weight: 600; margin-left: 8px;" id='selectedCoinSymbol3'>1000CAT</span>
        <span style="color: #f0b90b; font-weight: 700; margin-left: 12px; cursor: pointer;">MAX</span>
      </div>
      <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">24h Withdraw Limit: <span style="color: #fff;">0 USDT</span> / 30000 USDT</div>
      <div style="display: flex; gap: 10px; margin-bottom: 28px;">
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">25%</button>
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">50%</button>
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">75%</button>
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">100%</button>
      </div>
      <button style="width: 100%; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 16px 0; font-weight: 700; font-size: 1.15rem; cursor: pointer;">Connect Binance TR</button>
    </div>
    <script>
      function toggleCoinDropdown() {
        var dropdown = document.getElementById('coinDropdownList');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        document.getElementById('coinSearchInput').value = '';
        filterCoinOptions();
      }
      function selectCoin(el) {
        var symbol = el.getAttribute('data-symbol');
        var name = el.getAttribute('data-name');
        var icon = el.getAttribute('data-icon');
        document.getElementById('selectedCoinSymbol').innerText = symbol;
        document.getElementById('selectedCoinName').innerText = name;
        document.getElementById('selectedCoinIcon').src = icon;
        document.getElementById('selectedCoinSymbol2').innerText = symbol;
        document.getElementById('selectedCoinSymbol3').innerText = symbol;
        document.getElementById('coinDropdownList').style.display = 'none';
      }
      function filterCoinOptions() {
        var input = document.getElementById('coinSearchInput').value.toLowerCase();
        var options = document.querySelectorAll('#coinOptions .coin-option');
        options.forEach(function(opt) {
          var symbol = opt.getAttribute('data-symbol').toLowerCase();
          var name = opt.getAttribute('data-name').toLowerCase();
          if(symbol.includes(input) || name.includes(input)) {
            opt.style.display = 'flex';
          } else {
            opt.style.display = 'none';
          }
        });
      }
      document.addEventListener('click', function(e) {
        var dropdown = document.getElementById('coinDropdownList');
        var selected = document.getElementById('coinDropdownSelected');
        if(dropdown.style.display === 'block' && !selected.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });
      document.getElementById('coinSearchInput') && document.getElementById('coinSearchInput').addEventListener('input', filterCoinOptions);
    </script>
  </div>
  <div id="tokocrypto-content" class="content-section">
    <div style="max-width: 520px; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 32px 32px; border: 1.5px solid #23262F;">
      <div style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Transfer to Tokocrypto</div>
      <div style="color: #aaa; font-size: 1.05rem; margin-bottom: 28px;">Trade with Indonesian rupiah. Deposit and withdraw instantly with direct bank transfer.</div>
      <div style="margin-bottom: 18px; position: relative;">
        <div style="color: #aaa; font-size: 1.01rem; margin-bottom: 6px; font-weight: 500;">Coin</div>
        <div id="tokocryptoCoinDropdownSelected" onclick="toggleTokocryptoCoinDropdown()" style="display: flex; align-items: center; background: #23262F; border-radius: 10px; padding: 14px 18px; min-height: 36px; min-width: 100%; width: 52px; cursor: pointer; position: relative;">
          <img id="tokocryptoSelectedCoinIcon" src="https://cryptologos.cc/logos/binance-idr-bidr-logo.png" alt="BIDR" style="width: 36px; height: 36px; border-radius: 50%; margin-right: 14px;">
          <span style="font-size: 1.18rem; font-weight: 700; color: #fff; margin-right: 8px;" id="tokocryptoSelectedCoinSymbol">BIDR</span>
          <span style="color: #aaa; font-size: 1.08rem;" id="tokocryptoSelectedCoinName">BIDR</span>
          <svg style="margin-left: auto; color: #aaa; width: 22px; height: 22px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div id="tokocryptoCoinDropdownList" style="display: none; position: absolute; top: 60px; left: 0; right: 0; background: #181A20; border-radius: 12px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); z-index: 10; padding: 0 0 8px 0; border: 1.5px solid #23262F;">
          <div style="padding: 12px 18px 8px 18px;">
            <input id="tokocryptoCoinSearchInput" type="text" placeholder="Search" style="width: 100%; background: #23262F; border: none; border-radius: 6px; color: #fff; padding: 8px 12px; font-size: 1.08rem; outline: none;">
          </div>
          <div id="tokocryptoCoinOptions" style="max-height: 320px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #35363b #181A20;">
            <div class="coin-option" data-symbol="AAVE" data-name="Aave" data-icon="https://cryptologos.cc/logos/aave-aave-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="AAVE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">AAVE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Aave</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACA" data-name="Acala Token" data-icon="https://cryptologos.cc/logos/acala-aca-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/acala-aca-logo.png" alt="ACA" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACA</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Acala Token</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACE" data-name="Fusionist" data-icon="https://cryptologos.cc/logos/fusionist-ace-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/fusionist-ace-logo.png" alt="ACE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Fusionist</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACH" data-name="Alchemy Pay" data-icon="https://cryptologos.cc/logos/alchemy-pay-ach-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/alchemy-pay-ach-logo.png" alt="ACH" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACH</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Alchemy Pay</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACM" data-name="AC Milan Fan Token" data-icon="https://cryptologos.cc/logos/ac-milan-fan-token-acm-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/ac-milan-fan-token-acm-logo.png" alt="ACM" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACM</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">AC Milan Fan Token</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="ACT" data-name="Act I : The AI Prophecy" data-icon="https://cryptologos.cc/logos/act-1-the-ai-prophecy-act-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/act-1-the-ai-prophecy-act-logo.png" alt="ACT" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">ACT</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Act I : The AI Prophecy</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <!-- Existing coins below -->
            <div class="coin-option" data-symbol="1000CAT" data-name="1000*Simons Cat" data-icon="https://i.ibb.co/6bQ7QpK/cat.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000CAT</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*Simons Cat</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1000SATS" data-name="1000*SATS (Ordinals)" data-icon="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" alt="1000SATS" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000SATS</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*SATS (Ordinals)</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1INCH" data-name="1inch" data-icon="https://cryptologos.cc/logos/1inch-1inch-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/1inch-1inch-logo.png" alt="1INCH" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1INCH</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1inch</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="BIDR" data-name="BIDR" data-icon="https://cryptologos.cc/logos/binance-idr-bidr-logo.png" onclick="selectTokocryptoCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/binance-idr-bidr-logo.png" alt="BIDR" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">BIDR</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">BIDR</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
          </div>
        </div>
        <style>
          #tokocryptoCoinOptions::-webkit-scrollbar {
            width: 7px;
          }
          #tokocryptoCoinOptions::-webkit-scrollbar-thumb {
            background: #35363b;
            border-radius: 8px;
          }
          #tokocryptoCoinOptions::-webkit-scrollbar-track {
            background: #181A20;
          }
        </style>
        <script>
          function toggleTokocryptoCoinDropdown() {
            var dropdown = document.getElementById('tokocryptoCoinDropdownList');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            document.getElementById('tokocryptoCoinSearchInput').value = '';
            filterTokocryptoCoinOptions();
          }
          function selectTokocryptoCoin(el) {
            var icon = el.getAttribute('data-icon');
            var symbol = el.getAttribute('data-symbol');
            var name = el.getAttribute('data-name');
            document.getElementById('tokocryptoSelectedCoinIcon').src = icon;
            document.getElementById('tokocryptoSelectedCoinSymbol').innerText = symbol;
            document.getElementById('tokocryptoSelectedCoinName').innerText = name;
            document.getElementById('tokocryptoCoinDropdownList').style.display = 'none';
          }
          function filterTokocryptoCoinOptions() {
            var input = document.getElementById('tokocryptoCoinSearchInput').value.toLowerCase();
            var options = document.querySelectorAll('#tokocryptoCoinOptions .coin-option');
            options.forEach(function(opt) {
              var symbol = opt.getAttribute('data-symbol').toLowerCase();
              var name = opt.getAttribute('data-name').toLowerCase();
              if(symbol.includes(input) || name.includes(input)) {
                opt.style.display = 'flex';
              } else {
                opt.style.display = 'none';
              }
            });
          }
          document.addEventListener('click', function(e) {
            var dropdown = document.getElementById('tokocryptoCoinDropdownList');
            var selected = document.getElementById('tokocryptoCoinDropdownSelected');
            if(dropdown.style.display === 'block' && !selected.contains(e.target) && !dropdown.contains(e.target)) {
              dropdown.style.display = 'none';
            }
          });
          document.getElementById('tokocryptoCoinSearchInput') && document.getElementById('tokocryptoCoinSearchInput').addEventListener('input', filterTokocryptoCoinOptions);
        </script>
      </div>
      <div style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
        <div style="color: #aaa; font-size: 1.01rem; font-weight: 500;">Amount</div>
        <div style="color: #fff; font-size: 1.01rem; font-weight: 500;">Available: <span style="color: #aaa;">0 BIDR</span></div>
      </div>
      <div style="display: flex; align-items: center; background: #23262F; border-radius: 8px; padding: 10px 16px; margin-bottom: 6px;">
        <input type="number" value="0" min="0" style="background: transparent; border: none; color: #fff; font-size: 1.2rem; width: 100%; outline: none; font-weight: 600;" />
        <span style="color: #fff; font-size: 1.1rem; font-weight: 600; margin-left: 8px;">BIDR</span>
        <span style="color: #f0b90b; font-weight: 700; margin-left: 12px; cursor: pointer;">MAX</span>
      </div>
      <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">24h Withdraw Limit: <span style="color: #fff;">0 USDT</span> / 10000 USDT</div>
      <div style="display: flex; gap: 10px; margin-bottom: 28px;">
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">25%</button>
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">50%</button>
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">75%</button>
        <button style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">100%</button>
      </div>
      <button style="width: 100%; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 16px 0; font-weight: 700; font-size: 1.15rem; cursor: pointer;">Connect Tokocrypto</button>
    </div>
  </div>
  <div id="binance-th-content" class="content-section">
    <div style="max-width: 520px; margin: 0 auto; background: #181A20; border-radius: 18px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); padding: 32px 32px 32px 32px; border: 1.5px solid #23262F;">
      <div style="font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 8px;">Transfer to Binance TH</div>
      <div style="color: #aaa; font-size: 1.05rem; margin-bottom: 28px;">Trade with Thai Baht. Deposit and withdraw instantly with direct bank transfer.</div>
      <div style="margin-bottom: 18px; position: relative;">
        <div style="color: #aaa; font-size: 1.01rem; margin-bottom: 6px; font-weight: 500;">Coin</div>
        <div id="binanceThCoinDropdownSelected" onclick="toggleBinanceThCoinDropdown()" style="display: flex; align-items: center; background: #23262F; border-radius: 10px; padding: 14px 18px; min-height: 36px; min-width: 100%; width: 52px; cursor: pointer; position: relative;">
          <img id="binanceThSelectedCoinIcon" src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 36px; height: 36px; border-radius: 50%; margin-right: 14px;">
          <span style="font-size: 1.18rem; font-weight: 700; color: #fff; margin-right: 8px;" id="binanceThSelectedCoinSymbol">1000CAT</span>
          <span style="color: #aaa; font-size: 1.08rem;" id="binanceThSelectedCoinName">1000*Simons Cat</span>
          <svg style="margin-left: auto; color: #aaa; width: 22px; height: 22px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div id="binanceThCoinDropdownList" style="display: none; position: absolute; top: 60px; left: 0; right: 0; background: #181A20; border-radius: 12px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18); z-index: 10; padding: 0 0 8px 0; border: 1.5px solid #23262F;">
          <div style="padding: 12px 18px 8px 18px;">
            <input id="binanceThCoinSearchInput" type="text" placeholder="Search" style="width: 100%; background: #23262F; border: none; border-radius: 6px; color: #fff; padding: 8px 12px; font-size: 1.08rem; outline: none;">
          </div>
          <div id="binanceThCoinOptions" style="max-height: 320px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #35363b #181A20;">
            <div class="coin-option" data-symbol="1000CAT" data-name="1000*Simons Cat" data-icon="https://i.ibb.co/6bQ7QpK/cat.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://i.ibb.co/6bQ7QpK/cat.png" alt="1000CAT" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000CAT</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*Simons Cat</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1000CHEEMS" data-name="1000*cheems.pet" data-icon="https://cryptologos.cc/logos/cheems-inu-cheems-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/cheems-inu-cheems-logo.png" alt="1000CHEEMS" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000CHEEMS</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*cheems.pet</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1000SATS" data-name="1000*SATS (Ordinals)" data-icon="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png" alt="1000SATS" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1000SATS</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1000*SATS (Ordinals)</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1INCH" data-name="1inch" data-icon="https://cryptologos.cc/logos/1inch-1inch-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/1inch-1inch-logo.png" alt="1INCH" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1INCH</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1inch</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="1MBABYDOGE" data-name="1M x BABYDOGE" data-icon="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/babydoge-coin-babydoge-logo.png" alt="1MBABYDOGE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">1MBABYDOGE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">1M x BABYDOGE</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
            <div class="coin-option" data-symbol="AAVE" data-name="Aave" data-icon="https://cryptologos.cc/logos/aave-aave-logo.png" onclick="selectBinanceThCoin(this)" style="display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; cursor: pointer; transition: background 0.15s;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="AAVE" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                  <div style="font-size: 1.13rem; font-weight: 700; color: #fff;">AAVE</div>
                  <div style="color: #aaa; font-size: 1.01rem; font-weight: 400;">Aave</div>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; min-width: 80px;">
                <span style="color: #fff; font-size: 1.08rem; font-weight: 500;">0</span>
                <span style="color: #aaa; font-size: 1.01rem;">≈ $0.00</span>
              </div>
            </div>
          </div>
          <style>
            #binanceThCoinOptions::-webkit-scrollbar {
              width: 7px;
            }
            #binanceThCoinOptions::-webkit-scrollbar-thumb {
              background: #35363b;
              border-radius: 8px;
            }
            #binanceThCoinOptions::-webkit-scrollbar-track {
              background: #181A20;
            }
          </style>
          <script>
            function toggleBinanceThCoinDropdown() {
              var dropdown = document.getElementById('binanceThCoinDropdownList');
              dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
              document.getElementById('binanceThCoinSearchInput').value = '';
              filterBinanceThCoinOptions();
            }
            function selectBinanceThCoin(el) {
              var icon = el.getAttribute('data-icon');
              var symbol = el.getAttribute('data-symbol');
              var name = el.getAttribute('data-name');
              document.getElementById('binanceThSelectedCoinIcon').src = icon;
              document.getElementById('binanceThSelectedCoinSymbol').innerText = symbol;
              document.getElementById('binanceThSelectedCoinName').innerText = name;
              document.getElementById('binanceThCoinDropdownList').style.display = 'none';
            }
            function filterBinanceThCoinOptions() {
              var input = document.getElementById('binanceThCoinSearchInput').value.toLowerCase();
              var options = document.querySelectorAll('#binanceThCoinOptions .coin-option');
              options.forEach(function(opt) {
                var symbol = opt.getAttribute('data-symbol').toLowerCase();
                var name = opt.getAttribute('data-name').toLowerCase();
                if(symbol.includes(input) || name.includes(input)) {
                  opt.style.display = 'flex';
                } else {
                  opt.style.display = 'none';
                }
              });
            }
            document.addEventListener('click', function(e) {
              var dropdown = document.getElementById('binanceThCoinDropdownList');
              var selected = document.getElementById('binanceThCoinDropdownSelected');
              if(dropdown.style.display === 'block' && !selected.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.style.display = 'none';
              }
            });
            document.getElementById('binanceThCoinSearchInput') && document.getElementById('binanceThCoinSearchInput').addEventListener('input', filterBinanceThCoinOptions);
          </script>
        </div>
      </div>
      <div style="margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
        <div style="color: #aaa; font-size: 1.01rem; font-weight: 500;">Amount</div>
        <div style="color: #fff; font-size: 1.01rem; font-weight: 500;">Available: <span style="color: #aaa;">0 <span id='selectedCoinSymbol2'>1000CAT</span></span></div>
      </div>
      <div style="display: flex; align-items: center; background: #23262F; border-radius: 8px; padding: 10px 16px; margin-bottom: 6px;">
        <input type="number" value="0" min="0" style="background: transparent; border: none; color: #fff; font-size: 1.2rem; width: 100%; outline: none; font-weight: 600;" />
        <span style="color: #fff; font-size: 1.1rem; font-weight: 600; margin-left: 8px;" id='selectedCoinSymbol3'>1000CAT</span>
        <span style="color: #f0b90b; font-weight: 700; margin-left: 12px; cursor: pointer;">MAX</span>
      </div>
      <div style="color: #aaa; font-size: 0.98rem; margin-bottom: 18px;">24h Withdraw Limit: <span style="color: #fff;">0 USDT</span> / 0 USDT</div>
      <div style="display: flex; gap: 10px; margin-bottom: 28px;">
        <button type="button" class="binance-th-percent-btn" data-percent="25" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">25%</button>
        <button type="button" class="binance-th-percent-btn" data-percent="50" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">50%</button>
        <button type="button" class="binance-th-percent-btn" data-percent="75" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">75%</button>
        <button type="button" class="binance-th-percent-btn" data-percent="100" style="flex: 1; background: #23262F; color: #fff; border: none; border-radius: 6px; padding: 8px 0; font-weight: 600; cursor: pointer;">100%</button>
      </div>
      <div id="binanceThAmountError" style="color: #f0b90b; font-size: 1.01rem; font-weight: 600; margin-bottom: 12px; display: none;"></div>
      <button style="width: 100%; background: #f0b90b; color: #181A20; border: none; border-radius: 8px; padding: 16px 0; font-weight: 700; font-size: 1.15rem; cursor: pointer;">Connect Binance TH</button>
    </div>
  </div>
</div>

<script>
  function toggleDropdown(id) {
    const allDropdowns = document.querySelectorAll('.dropdown-menu');
    allDropdowns.forEach(drop => {
      if (drop.id !== id) {
        drop.classList.remove('open');
      }
    });
    const menu = document.getElementById(id);
    menu.classList.toggle('open');
  }

  function toggleNestedDropdown(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('open');
  }

  // Overwrite toggleSidebar to only open, not close
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.classList.contains('active')) {
      // Close sidebar
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      // Open sidebar
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  // Prevent overlay click from closing sidebar
  document.getElementById('overlay').onclick = function(e) {
    e.stopPropagation();
    // Do nothing
  };

  // Add event listener to detect header hamburger clicks
  document.addEventListener('DOMContentLoaded', function() {
    const headerHamburger = document.querySelector('.header1-hamburger');
    if (headerHamburger) {
      headerHamburger.addEventListener('click', function() {
        // If CRM sidebar is active, close it
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
          closeSidebarUnlock();
        }
      });
    }
    // Add click event to all menu items to close sidebar and unlock body
    document.querySelectorAll('.sidebar .menu li a').forEach(function(link) {
      link.addEventListener('click', function() {
        closeSidebarUnlock();
      });
    });
    // Also close on close button
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
      closeBtn.onclick = function(e) {
        e.stopPropagation();
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      };
    }
  });

  function showContent(contentId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Show selected content
    document.getElementById(contentId).classList.add('active');
    
    // Remove active class from all menu items
    document.querySelectorAll('.menu li').forEach(item => {
      item.classList.remove('active');
    });

    // Find and highlight the active menu item
    const activeLink = document.querySelector(`a[onclick*="showContent('${contentId}')"]`);
    if (activeLink) {
      const activeItem = activeLink.closest('li');
      if (activeItem) {
        activeItem.classList.add('active');
      }
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      closeSidebarUnlock();
    }
  }

  // Show dashboard content by default
  document.addEventListener('DOMContentLoaded', function() {
    showContent('dashboard-content');
  });

  function showAssetsTab(tab) {
    var coinTab = document.getElementById('coinViewTab');
    var accountTab = document.getElementById('accountViewTab');
    var coinTable = document.getElementById('coinViewTable');
    var accountTable = document.getElementById('accountViewTable');
    if(tab === 'coin') {
      coinTab.style.color = '#f0b90b';
      coinTab.style.fontWeight = '600';
      coinTab.style.borderBottom = '2px solid #f0b90b';
      accountTab.style.color = '#aaa';
      accountTab.style.fontWeight = '600';
      accountTab.style.borderBottom = 'none';
      coinTable.style.display = '';
      accountTable.style.display = 'none';
    } else {
      coinTab.style.color = '#aaa';
      coinTab.style.fontWeight = '600';
      coinTab.style.borderBottom = 'none';
      accountTab.style.color = '#f0b90b';
      accountTab.style.fontWeight = '700';
      accountTab.style.borderBottom = '2px solid #f0b90b';
      coinTable.style.display = 'none';
      accountTable.style.display = '';
    }
  }

  function toggleAssetAccount(type) {
    var assetBtn = document.getElementById('assetBtn');
    var accountBtn = document.getElementById('accountBtn');
    if(type === 'asset') {
      assetBtn.style.background = '#23262F';
      assetBtn.style.color = '#fff';
      accountBtn.style.background = 'transparent';
      accountBtn.style.color = '#888c98';
    } else {
      accountBtn.style.background = '#23262F';
      accountBtn.style.color = '#fff';
      assetBtn.style.background = 'transparent';
      assetBtn.style.color = '#888c98';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#binance-th-content .binance-th-percent-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var percent = parseFloat(btn.getAttribute('data-percent'));
        var input = document.getElementById('binanceThAmountInput');
        var errorDiv = document.getElementById('binanceThAmountError');
        // Get available balance from the 'Available' text
        var availableText = document.querySelector('#binance-th-content [style*="Available:"]').innerText;
        var match = availableText.match(/Available: *([\d.]+)/i);
        var available = match ? parseFloat(match[1]) : 0;
        // Set input value to the percentage
        var newValue = (available * percent / 100).toFixed(8).replace(/\.0+$/, '');
        input.value = newValue;
        // Validate
        var value = parseFloat(input.value);
        if (isNaN(value) || value < 0.01) {
          errorDiv.innerText = 'Amount to withdraw must be at least 0.01';
          errorDiv.style.display = 'block';
        } else {
          errorDiv.style.display = 'none';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Date Range Picker
    if (window.Litepicker) {
      var picker = new Litepicker({
        element: document.getElementById('orderDateRange'),
        singleMode: false,
        numberOfMonths: 2,
        numberOfColumns: 2,
        format: 'YYYY-MM-DD',
        autoApply: true,
        maxDate: new Date(), // Only allow past dates
        dropdowns: {
          minYear: 2020,
          maxYear: new Date().getFullYear() + 1,
          months: true,
          years: true
        },
        setup: (picker) => {
          picker.on('selected', (start, end) => {
            document.getElementById('orderDateRange').value = `${start.format('YYYY-MM-DD')} → ${end.format('YYYY-MM-DD')}`;
          });
        }
      });
      // Set default range to last 7 days
      const today = new Date();
      const lastWeek = new Date();
      lastWeek.setDate(today.getDate() - 6);
      picker.setDateRange(lastWeek, today);
      document.getElementById('orderDateRange').value = `${picker.getStartDate().format('YYYY-MM-DD')} → ${picker.getEndDate().format('YYYY-MM-DD')}`;

      // Trade History Date Picker
      var tradePicker = new Litepicker({
        element: document.getElementById('tradeOrderDateRange'),
        singleMode: false,
        numberOfMonths: 2,
        numberOfColumns: 2,
        format: 'YYYY-MM-DD',
        autoApply: true,
        maxDate: new Date(),
        dropdowns: {
          minYear: 2020,
          maxYear: new Date().getFullYear() + 1,
          months: true,
          years: true
        },
        setup: (picker) => {
          picker.on('selected', (start, end) => {
            document.getElementById('tradeOrderDateRange').value = `${start.format('YYYY-MM-DD')} → ${end.format('YYYY-MM-DD')}`;
          });
        }
      });
      tradePicker.setDateRange(lastWeek, today);
      document.getElementById('tradeOrderDateRange').value = `${tradePicker.getStartDate().format('YYYY-MM-DD')} → ${tradePicker.getEndDate().format('YYYY-MM-DD')}`;
    }

    // Reset Button
    var resetBtn = Array.from(document.querySelectorAll('#orderHistorySection button')).find(btn => btn.textContent.trim() === 'Reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function(e) {
        // Reset dropdowns
        ['baseDropdown','quoteDropdown','sideDropdown','sortDropdown'].forEach(function(id) {
          document.getElementById(id+'Value').innerText = (id==='sortDropdown'?'Order Time':'All');
          var items = document.querySelectorAll('#'+id+' li');
          items.forEach(function(item, idx) { item.classList.remove('selected'); });
          if(items[0]) items[0].classList.add('selected');
        });
        // Reset date range to last 7 days
        if(window.Litepicker && window.picker) {
          const today = new Date();
          const lastWeek = new Date();
          lastWeek.setDate(today.getDate() - 6);
          window.picker.setDateRange(lastWeek, today);
          document.getElementById('orderDateRange').value = `${window.picker.getStartDate().format('YYYY-MM-DD')} → ${window.picker.getEndDate().format('YYYY-MM-DD')}`;
        }
      });
    }
  });
</script>

<style>
     @media (max-width: 768px) {
     #crm1{
      display: none;
     }
    }
</style>

<?php include "footer.php";?>
</body>

</html>

<script>
// ... existing code ...
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.sidebar .menu li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Show the corresponding content section
      const onclickAttr = link.getAttribute('onclick');
      if (onclickAttr && onclickAttr.includes('showContent')) {
        // Extract contentId from showContent('contentId')
        const match = onclickAttr.match(/showContent\(['\"]([\w-]+)['\"]\)/);
        if (match && match[1]) {
          showContent(match[1]);
        }
      }
      // Highlight the active menu item
      document.querySelectorAll('.sidebar .menu li').forEach(function(item) {
        item.classList.remove('active');
      });
      const activeItem = link.closest('li');
      if (activeItem) {
        activeItem.classList.add('active');
      }
      // Close sidebar and overlay
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});
// ... existing code ...
</script>

