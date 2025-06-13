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
    <!-- Add Flatpickr CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
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
        /* Add styles for Flatpickr */
        .flatpickr-calendar {
            background: #181A20 !important;
            border: 1.5px solid #23262F !important;
        }
        .flatpickr-day {
            color: #fff !important;
        }
        .flatpickr-day.selected {
            background: #f0b90b !important;
            border-color: #f0b90b !important;
        }
        .flatpickr-day:hover {
            background: #23262F !important;
        }
        .flatpickr-months .flatpickr-month {
            background: #181A20 !important;
            color: #fff !important;
        }
        .flatpickr-current-month .flatpickr-monthDropdown-months {
            background: #181A20 !important;
            color: #fff !important;
        }
        .flatpickr-weekday {
            color: #888c98 !important;
        }
        .calendar-icon img {
            transition: opacity 0.2s;
        }
        .calendar-icon:hover img {
            opacity: 1;
        }
        .custom-date-range-picker {
            display: flex;
            align-items: center;
            background: #181A20;
            border: 1.5px solid #f0b90b;
            border-radius: 12px;
            padding: 8px 16px;
            gap: 10px;
            min-width: 320px;
            max-width: 400px;
        }
        .date-range-input {
            background: transparent;
            border: none;
            color: #fff;
            font-weight: 600;
            font-size: 1.13rem;
            width: 110px;
            outline: none;
            cursor: pointer;
        }
        .date-range-arrow {
            color: #888c98;
            font-size: 1.5rem;
            margin: 0 4px;
        }
        .calendar-icon img {
            width: 22px;
            opacity: 0.7;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .calendar-icon:hover img {
            opacity: 1;
        }

        @media (max-width: 768px) {
          #main-content {
            margin-top: 80px;
          }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="main-content">
        <div id="spot-order-content" class="content-section">
            <div style="background: #181A20; border-radius: 12px; padding: 20px ; margin-bottom: 32px; max-width: 100%;">
              <div style="display: flex; align-items: center; gap: 0; border-bottom: 1.5px solid #23262F;">
                <button id="openOrdersTab" class="order-tab-btn active" onclick="showOrderTab('open')">Open Orders</button>
                <button id="orderHistoryTab" class="order-tab-btn" onclick="showOrderTab('history')">Order History</button>
                <button id="tradeHistoryTab" class="order-tab-btn" onclick="showOrderTab('trade')">Trade History</button>
              </div>
              <div id="crm1" style="padding: 24px 0 0 0;">
                <div id="openOrdersFilters" style="display: none; flex-direction: row; align-items: center; flex-wrap: wrap; gap: 18px; width: 100%; margin-bottom: 18px;">
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
                      <div class="custom-date-range-picker">
                        <input id="orderDateStart" class="date-range-input" placeholder="Start date" readonly>
                        <span class="date-range-arrow">&#8594;</span>
                        <input id="orderDateEnd" class="date-range-input" placeholder="End date" readonly>
                        <span class="calendar-icon" id="orderDateCalendarIcon">
                        ▼
                        </span>
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
                        items.forEach(function(item) { 
                            item.classList.remove('selected');
                        });
                        if(li) {
                            li.classList.add('selected');
                        }
                        document.getElementById(dropdownId).parentElement.classList.remove('open');
                        
                        // Trigger change event
                        var event = new Event('change');
                        document.getElementById(dropdownId + 'Value').dispatchEvent(event);
                      }
                    </script>
                  </div>
                  <!-- Trade History Table -->
                  <div id="tradeHistorySection" style="display:none;">
                    <!-- Copied filter/search section from orderHistorySection -->
                    <div style="display: flex; gap: 18px; align-items: center; flex-wrap: wrap; margin-bottom: 18px;">
                      <!-- Date Range Picker -->
                      <div class="custom-date-range-picker">
                        <input id="tradeOrderStart" class="date-range-input" placeholder="Start date" readonly>
                        <span class="date-range-arrow">&#8594;</span>
                        <input id="tradeOrderEnd" class="date-range-input" placeholder="End date" readonly>
                        <span class="calendar-icon" id="tradeOrderCalendarIcon">
                        ▼
                        </span>
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
                        items.forEach(function(item) { 
                            item.classList.remove('selected');
                        });
                        if(li) {
                            li.classList.add('selected');
                        }
                        document.getElementById(dropdownId).parentElement.classList.remove('open');
                        
                        // Trigger change event
                        var event = new Event('change');
                        document.getElementById(dropdownId + 'Value').dispatchEvent(event);
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
                document.getElementById('openOrdersFilters').style.display = 'none';
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
                
                // Close all other dropdowns
                document.querySelectorAll('.order-dropdown').forEach(function(d) {
                    if (d !== parent) {
                        d.classList.remove('open');
                    }
                });
                
                // Toggle current dropdown
                if(!isOpen) {
                    parent.classList.add('open');
                } else {
                    parent.classList.remove('open');
                }
              }
              function selectDropdownOption(dropdownId, value) {
                document.getElementById(dropdownId + 'Value').innerText = value;
                document.getElementById(dropdownId).parentElement.classList.remove('open');
                
                // Trigger change event
                var event = new Event('change');
                document.getElementById(dropdownId + 'Value').dispatchEvent(event);
              }
              document.addEventListener('click', function(e) {
                document.querySelectorAll('.order-dropdown').forEach(function(d) {
                  if(!d.contains(e.target)) {
                    d.classList.remove('open');
                  }
                });
              });
            </script>
          </div>
        </div>
    </div>
    <!-- Add Flatpickr JS before closing body tag -->
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
        // Initialize Flatpickr on both inputs (shared instance)
        const orderDateInputs = [document.getElementById('orderDateStart'), document.getElementById('orderDateEnd')];
        const orderDateFlatpickr = flatpickr(orderDateInputs, {
          mode: "range",
          dateFormat: "Y-m-d",
          theme: "dark",
          maxDate: "today",
          onChange: function(selectedDates, dateStr) {
            if (selectedDates.length === 2) {
              orderDateInputs[0].value = flatpickr.formatDate(selectedDates[0], "Y-m-d");
              orderDateInputs[1].value = flatpickr.formatDate(selectedDates[1], "Y-m-d");
            } else if (selectedDates.length === 1) {
              orderDateInputs[0].value = flatpickr.formatDate(selectedDates[0], "Y-m-d");
              orderDateInputs[1].value = '';
            } else {
              orderDateInputs[0].value = '';
              orderDateInputs[1].value = '';
            }
          },
          onClose: function() {
            // Optional: blur inputs after close
            orderDateInputs[0].blur();
            orderDateInputs[1].blur();
          }
        });

        // Open calendar on icon click
        document.getElementById('orderDateCalendarIcon').addEventListener('click', function() {
          orderDateFlatpickr.open();
        });
        // Also open on input click
        orderDateInputs.forEach(input => {
          input.addEventListener('click', function() {
            orderDateFlatpickr.open();
          });
        });

        // Trade History Date Picker Initialization
        const tradeDateInputs = [document.getElementById('tradeOrderStart'), document.getElementById('tradeOrderEnd')];
        const tradeDateFlatpickr = flatpickr(tradeDateInputs, {
          mode: "range",
          dateFormat: "Y-m-d",
          theme: "dark",
          maxDate: "today",
          onChange: function(selectedDates, dateStr) {
            if (selectedDates.length === 2) {
              tradeDateInputs[0].value = flatpickr.formatDate(selectedDates[0], "Y-m-d");
              tradeDateInputs[1].value = flatpickr.formatDate(selectedDates[1], "Y-m-d");
            } else if (selectedDates.length === 1) {
              tradeDateInputs[0].value = flatpickr.formatDate(selectedDates[0], "Y-m-d");
              tradeDateInputs[1].value = '';
            } else {
              tradeDateInputs[0].value = '';
              tradeDateInputs[1].value = '';
            }
          },
          onClose: function() {
            tradeDateInputs[0].blur();
            tradeDateInputs[1].blur();
          }
        });
        document.getElementById('tradeOrderCalendarIcon').addEventListener('click', function() {
          tradeDateFlatpickr.open();
        });
        tradeDateInputs.forEach(input => {
          input.addEventListener('click', function() {
            tradeDateFlatpickr.open();
          });
        });

        // Improved dropdown functions
        function toggleDropdownMenu(id) {
            var el = document.getElementById(id);
            var parent = el.parentElement;
            var isOpen = parent.classList.contains('open');
            
            // Close all other dropdowns
            document.querySelectorAll('.order-dropdown').forEach(function(d) {
                if (d !== parent) {
                    d.classList.remove('open');
                }
            });
            
            // Toggle current dropdown
            if(!isOpen) {
                parent.classList.add('open');
            } else {
                parent.classList.remove('open');
            }
        }

        function selectDropdownOption(dropdownId, value) {
            document.getElementById(dropdownId + 'Value').innerText = value;
            document.getElementById(dropdownId).parentElement.classList.remove('open');
            
            // Trigger change event
            var event = new Event('change');
            document.getElementById(dropdownId + 'Value').dispatchEvent(event);
        }

        function selectDropdownOptionTick(dropdownId, value, li) {
            document.getElementById(dropdownId + 'Value').innerText = value;
            var items = document.querySelectorAll('#' + dropdownId + ' li');
            items.forEach(function(item) { 
                item.classList.remove('selected');
            });
            if(li) {
                li.classList.add('selected');
            }
            document.getElementById(dropdownId).parentElement.classList.remove('open');
            
            // Trigger change event
            var event = new Event('change');
            document.getElementById(dropdownId + 'Value').dispatchEvent(event);
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            document.querySelectorAll('.order-dropdown').forEach(function(d) {
                if(!d.contains(e.target)) {
                    d.classList.remove('open');
                }
            });
        });

        // Add search functionality for dropdowns
        document.querySelectorAll('.dropdown-list input[type="text"]').forEach(function(input) {
            input.addEventListener('input', function(e) {
                var searchText = e.target.value.toLowerCase();
                var list = this.closest('.dropdown-list');
                var items = list.querySelectorAll('li:not(:first-child)');
                
                items.forEach(function(item) {
                    var text = item.textContent.toLowerCase();
                    if(text.includes(searchText)) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Clear search input when closing dropdown
        document.querySelectorAll('.dropdown-selected').forEach(function(selected) {
            selected.addEventListener('click', function() {
                var input = this.nextElementSibling.querySelector('input[type="text"]');
                if(input) {
                    input.value = '';
                    var items = this.nextElementSibling.querySelectorAll('li:not(:first-child)');
                    items.forEach(function(item) {
                        item.style.display = '';
                    });
                }
            });
        });

        // Example: Filter logic (replace with your actual data filtering)
        document.querySelectorAll('.order-tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Tab switching logic (already present)
            });
        });

        // Search and Reset button functionality
        function getFilterValues(section) {
            const filters = {
                dateRange: document.querySelector(`#${section}OrderDateRange`).value,
                base: document.querySelector(`#${section}BaseDropdownValue`).innerText,
                quote: document.querySelector(`#${section}QuoteDropdownValue`).innerText,
                side: document.querySelector(`#${section}SideDropdownValue`).innerText,
                sortBy: document.querySelector(`#${section}SortDropdownValue`).innerText,
                hideCanceled: document.querySelector(`#${section}Section input[type="checkbox"]`).checked
            };
            return filters;
        }

        function resetFilters(section) {
            // Reset dropdowns
            document.querySelectorAll(`#${section}Section .dropdown-selected span[id$="Value"]`).forEach(span => {
                span.innerText = "All";
            });

            // Reset date range (Flatpickr instance bhi reset karo)
            if (section === 'order') {
                if (window.orderDateFlatpickr) orderDateFlatpickr.clear();
                if (document.getElementById('orderDateStart')) document.getElementById('orderDateStart').value = '';
                if (document.getElementById('orderDateEnd')) document.getElementById('orderDateEnd').value = '';
            } else if (section === 'trade') {
                if (window.tradeDateFlatpickr) tradeDateFlatpickr.clear();
                if (document.getElementById('tradeOrderStart')) document.getElementById('tradeOrderStart').value = '';
                if (document.getElementById('tradeOrderEnd')) document.getElementById('tradeOrderEnd').value = '';
            }

            // Reset checkbox
            document.querySelector(`#${section}Section input[type="checkbox"]`).checked = false;

            // Reset sort dropdown
            document.querySelector(`#${section}SortDropdownValue`).innerText = "Order Time";

            // Clear any search inputs in dropdowns
            document.querySelectorAll(`#${section}Section .dropdown-list input[type="text"]`).forEach(input => {
                input.value = '';
                const items = input.closest('.dropdown-list').querySelectorAll('li:not(:first-child)');
                items.forEach(item => item.style.display = '');
            });
        }

        // Add click handlers for search and reset buttons
        document.querySelectorAll('button').forEach(btn => {
            if (btn.textContent.trim() === "Search") {
                btn.addEventListener('click', function() {
                    const section = this.closest('div[id$="Section"]').id.replace('Section', '');
                    const filters = getFilterValues(section);
                    
                    // Here you can make an AJAX call to your backend with the filters
                    console.log('Search filters:', filters);
                    
                    // Example AJAX call (uncomment and modify as needed):
                    /*
                    fetch('your-backend-endpoint', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(filters)
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Update your table with the filtered data
                        updateTable(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                    */
                });
            }
            if (btn.textContent.trim() === "Reset") {
                btn.addEventListener('click', function() {
                    const section = this.closest('div[id$="Section"]').id.replace('Section', '');
                    resetFilters(section);
                    
                    // Here you can make an AJAX call to reset the data
                    console.log('Reset filters for section:', section);
                    
                    // Example AJAX call (uncomment and modify as needed):
                    /*
                    fetch('your-backend-endpoint/reset', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ section: section })
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Update your table with the reset data
                        updateTable(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                    */
                });
            }
        });

        // Helper function to update table data (implement based on your needs)
        function updateTable(data) {
            // Implement your table update logic here
            console.log('Updating table with data:', data);
        }

        // Calendar icon click opens Flatpickr
        setTimeout(function() {
          document.querySelectorAll('.calendar-icon').forEach(function(icon, idx) {
            icon.addEventListener('click', function() {
              if(idx === 0) {
                document.getElementById('orderDateRange')._flatpickr.open();
              } else {
                document.getElementById('tradeOrderRange')._flatpickr.open();
              }
            });
          });
        }, 500);

        // Ensure Open Orders tab and filters are visible on page load
        document.addEventListener('DOMContentLoaded', function() {
          showOrderTab('open');
        });
    </script>
</body>
</html>