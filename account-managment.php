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
            padding: 50px;
            overflow-y: auto;
        }
        @media (max-width: 768px) {
          #main-content {
            margin-top: 50px;
            padding: 20px;
          }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div id="main-content">
        <div id="account-management-content" class="content-section">
            <div style="max-width: 1100px; margin: 0 auto;">
              <h1 style="color: #fff; font-size: 1.8rem; font-weight: 700; margin-bottom: 28px;">Account Statement</h1>
              <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 18px; flex-wrap: wrap;">
                <input id="statementDate" type="text" style="background: #181A20; border: 1.5px solid #23262F; border-radius: 8px; color: #fff; font-size: 1.13rem; padding: 12px 18px; width: 170px; font-weight: 600;" readonly placeholder="YYYY/MM/DD" />
                <select style="background: #181A20; border: 1.5px solid #23262F; border-radius: 8px; color: #fff; font-size: 1.13rem; padding: 12px 18px; min-width: 180px; font-weight: 600;">
                  <option>Account</option>
                  <option selected><?php echo $userId; ?></option>
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
</body>
</html>