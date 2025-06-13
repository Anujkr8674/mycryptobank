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
            font-family: 'Segoe UI', Arial, sans-serif;
        }
        #main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            width: 100%;
            margin-left: 0;
        }
        .active-toggle {
            background: #23262F !important;
            color: #fff !important;
            font-weight: 700;
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
        }
        .toggle-btn {
            color: #888c98;
            background: transparent;
            font-weight: 600;
            transition: background 0.2s, color 0.2s;
        }

        /* Responsive styles for different screen sizes */
        @media (max-width: 1200px) {
            #main-content {
                padding: 15px;
            }
            div[style*="max-width: 1200px;"] {
                margin: 0 10px;
            }
        }

        @media (max-width: 992px) {
            body {
                padding-top: 80px;
            }
            #main-content {
                margin-left: 200px;
                width: calc(100% - 200px);
            }
            div[style*="font-size: 2.3rem;"] {
                font-size: 2rem !important;
            }
            div[style*="display: flex; justify-content: space-between;"] {
                flex-direction: column;
                gap: 20px;
            }
            div[style*="display: flex; flex-direction: row; align-items: flex-start;"] {
                width: 100%;
                justify-content: space-between;
            }
            #sidebar {
                width: 250px;
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
                padding-top: 120px;
            }
            div[style*="max-width: 1200px;"] {
                padding: 20px !important;
            }
            div[style*="display: flex; gap: 48px;"] {
                flex-direction: column;
                gap: 20px;
            }
            div[style*="display: flex; gap: 0;"] {
                flex-direction: column;
            }
            div[style*="width: 1px; background: #23262F;"] {
                width: 100%;
                height: 1px;
                margin: 20px 0;
            }
            div[style*="display: flex; flex-direction: row; align-items: flex-start;"] {
                flex-wrap: wrap;
                gap: 10px;
            }
            button[style*="background: #f0b90b;"] {
                flex: 1;
                min-width: 120px;
            }
            div[style*="display: flex; align-items: center; gap: 18px;"] {
                flex-direction: column;
                align-items: flex-start;
            }
            input[type="text"] {
                width: 100% !important;
            }
            table {
                display: block;
                overflow-x: auto;
                white-space: nowrap;
            }
            #sidebar {
                width: 250px;
                /* position: relative; */
                height: auto;
            }
        }

        @media (max-width: 480px) {
            body {
                padding-top: 50px;
            }
            div[style*="font-size: 1.6rem;"] {
                font-size: 1.3rem !important;
            }
            div[style*="font-size: 2.3rem;"] {
                font-size: 1.8rem !important;
            }
            div[style*="font-size: 1.1rem;"] {
                font-size: 1rem !important;
            }
            button[style*="background: #f0b90b;"] {
                padding: 8px 16px !important;
                font-size: 1rem !important;
            }
            div[style*="width: 180px; height: 180px;"] {
                width: 150px !important;
                height: 150px !important;
            }
            div[style*="width: 120px; height: 120px;"] {
                width: 100px !important;
                height: 100px !important;
            }
            th, td {
                font-size: 0.9rem !important;
                padding: 6px 4px !important;
            }
        }
    </style>
</head>
<body>
 <?php include "sidebar.php"; ?>
    <div id="main-content">
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
                  <button id="assetBtn" class="toggle-btn active-toggle" onclick="toggleAssetAccount('asset')">Asset</button>
                  <button id="accountBtn" class="toggle-btn" onclick="toggleAssetAccount('account')">Account</button>
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
    </div>
    <script>
      function toggleAssetAccount(type) {
        var assetBtn = document.getElementById('assetBtn');
        var accountBtn = document.getElementById('accountBtn');
        if(type === 'asset') {
          assetBtn.classList.add('active-toggle');
          accountBtn.classList.remove('active-toggle');
        } else {
          accountBtn.classList.add('active-toggle');
          assetBtn.classList.remove('active-toggle');
        }
      }
    </script>
</body>
</html>