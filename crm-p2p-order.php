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
    <!-- Litepicker CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/litepicker/dist/css/litepicker.css" />
    <!-- Litepicker JS -->
    <script src="https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js"></script>
    
    <style>
        body {
            margin: 0;
            padding: 0;
            background: #0b0e11;
            color: #eaecef;
            font-family: 'Inter', Arial, sans-serif;
            min-height: 100vh;
            padding-top: 80px;
            display: flex;
        }
        .sidebar {
            width: 250px !important;
            min-width: 250px !important;
            max-width: 250px !important;
        }
        .main-content {
            /* margin-left: 250px; */
            flex: 1;
            width: calc(100% - 250px);
            padding: 40px 24px 24px 24px;
            min-height: 100vh;
            background: #0b0e11;
        }

        .sidebar-container{
            margin-top: 20px;
        }

        /* Responsive styles for different screen sizes */
        @media (max-width: 1200px) {
            .main-content {
                /* margin-left: 200px; */
                width: calc(100% - 250px);
                padding: 30px 20px 20px 20px;
            }
            div[style*="max-width: 100%;"] {
                padding: 24px 20px !important;
            }
            .p2p-dropdown {
                min-width: 200px !important;
            }
        }

        @media (max-width: 992px) {
            body {
                padding-top: 70px;
            }
            .sidebar {
                width: 200px !important;
                min-width: 200px !important;
                max-width: 200px !important;
            }
            .main-content {
                /* margin-left: 200px; */
                width: calc(100% - 200px);
                padding: 20px 15px 15px 15px;
            }
          
            .main-toggle-btn, .p2p-toggle-btn, .p2p-processing-toggle-btn {
                padding: 8px 24px !important;
                font-size: 1.1rem !important;
            }
            .p2p-dropdown-selected {
                padding: 8px 16px !important;
            }
        }

        @media (max-width: 768px) {
            body {
                padding-top: 60px;
            }
            .sidebar {
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
            }
            .main-content {
                margin-left: 0;
                width: 100%;
                padding: 15px 10px 10px 10px;
                margin-top: 50px;
            }
          
            #p2pOrderMainToggle {
                flex-direction: column;
                align-items: stretch !important;
                gap: 10px !important;
            }
            .main-toggle-btn {
                width: 100%;
                text-align: center;
            }
            #p2pToggleBtns, #p2pProcessingToggleBtns {
                flex-wrap: wrap;
                gap: 8px !important;
            }
            .p2p-toggle-btn, .p2p-processing-toggle-btn {
                flex: 1;
                min-width: 120px;
                text-align: center;
                padding: 8px 16px !important;
            }
            div[style*="display: flex; gap: 18px;"] {
                flex-direction: column;
                gap: 12px !important;
            }
            .p2p-dropdown {
                width: 100% !important;
                max-width: 100% !important;
            }
            .p2p-dropdown-selected {
                width: 50%;
            }
            .order-date-range {
                width: 100% !important;
            }
            input[type="text"] {
                width: 100% !important;
            }
            #p2pResetBtn {
                width: 100%;
                margin-left: 0 !important;
                margin-top: 8px;
            }
            table {
                margin: 0 -10px;
                padding: 0 10px;
            }
            th, td {
                padding: 8px 4px !important;
                font-size: 0.9rem !important;
            }
        }

        @media (max-width: 480px) {
            body {
                padding-top: 50px;
            }
            .main-content {
                padding: 10px 8px 8px 8px;
                padding-top: 80px;
            }
            div[style*="max-width: 100%;"] {
                padding: 16px 12px !important;
                border-radius: 8px !important;
            }
            .main-toggle-btn, .p2p-toggle-btn, .p2p-processing-toggle-btn {
                font-size: 1rem !important;
                padding: 8px 12px !important;
            }
            .p2p-dropdown-selected {
                font-size: 1rem !important;
                padding: 8px 12px !important;
                width: 50% !important;
            }
            input[type="text"] {
                font-size: 1rem !important;
                padding: 8px 12px 8px 36px !important;
            }
            .p2p-dropdown-list {
                font-size: 0.95rem !important;
            }
            .p2p-dropdown-list li {
                padding: 8px 12px !important;
            }
            th, td {
                font-size: 0.85rem !important;
                padding: 6px 3px !important;
            }
            .litepicker {
                width: 100% !important;
            }
            .litepicker .container__months {
                width: 100% !important;
            }
        }

        /* Litepicker responsive styles */
        @media (max-width: 768px) {
            .litepicker .container__months {
                display: flex;
                flex-direction: column;
            }
            .litepicker .month-item {
                width: 100% !important;
            }
            .litepicker .container__days {
                width: 100% !important;
            }
        }

        /* Litepicker custom color for range and selected */
        .litepicker .day-item.is-in-range:not(.is-start-date):not(.is-end-date) {
          background: #726a2c !important; /* Olive/dark yellow */
          color: #fff !important;
          border-radius: 8px !important;
        }
        .litepicker .day-item.is-start-date,
        .litepicker .day-item.is-end-date {
          background: #f0b90b !important; /* Bright yellow */
          color: #181A20 !important;
          border-radius: 8px !important;
          font-weight: 700;
          box-shadow: 0 0 0 2px #f0b90b;
        }
        /* Litepicker dark theme */
        .litepicker {
          background: #181A20 !important;
          color: #fff !important;
          border-radius: 18px !important;
          border: 1.5px solid #23262F !important;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
          font-family: 'Inter', Arial, sans-serif;
        }
        .litepicker .container__months,
        .litepicker .container__days {
          background: #181A20 !important;
          color: #fff !important;
        }
        .litepicker .month-item-header,
        .litepicker .container__months .month-item {
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
        .litepicker select {
          background: #23262F !important;
          color: #fff !important;
          border: 1.5px solid #23262F !important;
          border-radius: 6px !important;
          font-size: 1rem;
          font-family: inherit;
        }
        .litepicker .container__days .day-item {
          min-width: 36px !important;
          min-height: 36px !important;
          line-height: 36px !important;
          margin: 2px 0 !important;
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div class="main-content">
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
                    window.p2pPicker = new Litepicker({
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
                    window.p2pPicker.setDateRange(lastWeek, today);
                    document.getElementById('p2pDateRange').value = `${window.p2pPicker.getStartDate().format('YYYY-MM-DD')} → ${window.p2pPicker.getEndDate().format('YYYY-MM-DD')}`;
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
        </div>
    </div>
</body>
</html>