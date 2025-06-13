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
   
    <link rel="stylesheet" href="crm-style.css">
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
            background: #18181b;
            position: relative;
            height: 100vh;
            left: 0;
            top: 0;
            z-index: 100;
            padding-top: 100px;
        }
        .main-content {
            flex: 1;
            /* width: calc(100% - 250px); */
            width: 100%; ;
            padding: 40px 24px 24px 0;
            min-height: 100vh;
            background: #0b0e11;
            margin-left: 10px !important;
        }
        .balance-card {
            background: #18181b;
            border-radius: 12px;
            padding: 32px 32px 24px 32px;
            margin-bottom: 32px;
            width: 100%;
            box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }
        .balance-title {
            color: #aaa;
            font-size: 1.2rem;
            margin-bottom: 8px;
            font-weight: 500;
        }
        .balance-amount {
            font-size: 2.5rem;
            color: #fff;
            font-weight: 700;
        }
        .balance-btc {
            font-size: 1.1rem;
            color: #aaa;
            font-weight: 400;
        }
        .balance-usd {
            color: #aaa;
            font-size: 1.1rem;
            margin-bottom: 8px;
        }
        .balance-pnl {
            color: #aaa;
            font-size: 1rem;
            margin-bottom: 18px;
        }
        .balance-pnl span {
            color: #00c48c;
        }
        .balance-actions {
            display: flex;
            gap: 12px;
            margin-top: 8px;
        }
        .balance-actions button {
            background: #23262f;
            color: #f0b90b;
            border: none;
            border-radius: 6px;
            padding: 8px 24px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.2s;
        }
        .balance-actions button:hover {
            background: #32343a;
        }
        .spot-section {
            background: #18181b;
            border-radius: 12px;
            padding: 32px 24px 24px 24px;
            max-width: 900px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.12);
        }
        .spot-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 24px;
            color: #fff;
        }
        .spot-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 18px;
        }
        .spot-header label {
            display: flex;
            align-items: center;
            font-size: 1rem;
            color: #aaa;
            gap: 8px;
        }
        .spot-header input[type="checkbox"] {
            accent-color: #f0b90b;
        }
        .spot-header .hide-assets {
            margin-left: auto;
            font-size: 1rem;
            color: #aaa;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .spot-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
        }
        .spot-table th, .spot-table td {
            padding: 16px 8px;
            text-align: left;
        }
        .spot-table th {
            color: #aaa;
            font-weight: 600;
            border-bottom: 1px solid #23262f;
            font-size: 1.05rem;
        }
        .spot-table td {
            color: #fff;
            font-size: 1.05rem;
            border-bottom: 1px solid #23262f;
        }
        .spot-table tr:last-child td {
            border-bottom: none;
        }
        .spot-table .coin-icon {
            width: 28px;
            height: 28px;
            margin-right: 10px;
            vertical-align: middle;
        }
        .spot-table .coin-name {
            font-weight: 600;
            color: #fff;
        }
        .spot-table .coin-symbol {
            color: #aaa;
            font-size: 0.98rem;
        }
        .spot-table .action-link {
            color: #f0b90b;
            text-decoration: none;
            font-weight: 600;
            margin-right: 16px;
            cursor: pointer;
        }
        .spot-table .action-link:hover {
            text-decoration: underline;
        }

        .sidebar-container{
            margin-top: 20px;
          
        }

        #block {
                display: flex;
                justify-content: space-between;
                align-items: center; 
                margin-bottom: 8px;
                width: 100%;
            }
        @media (max-width: 1200px) {
            .main-content {
                /* width: calc(100% - 250px); */
                width: 100%;
                padding: 25px;
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
                /* width: calc(100% - 200px); */
                width: 100%;
                padding: 25px;
            }
        }
        @media (max-width: 900px) {
            .main-content, .spot-section, .balance-card {
                margin-left: 0 !important;
                max-width: 100vw;
            }
        }
        @media (max-width: 768px) {
            body {
                padding-top: 60px;
            }

            .sidebar-container{
            margin-top: 10px;
        }
            .sidebar {
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                height: auto;
                position: relative;
                padding-top: 0;
            }
            .main-content {
                margin-left: 0;
                width: 100%;
                padding: 25px;
                margin-top: 100px;
            }
            #block {
                display: block;
            }
            .balance-actions {
                flex-direction: row !important;
                gap: 8px !important;
                width: auto !important;
                margin-left: auto !important;
                align-items: center !important;
            }
            .balance-actions button {
                width: auto !important;
                font-size: 1rem !important;
                padding: 8px 12px !important;
            }
        }
        @media (max-width: 600px) {
            .main-content {
                padding: 25px;
            }
            .spot-section, .balance-card {
                padding: 16px 4px;
            }
            .spot-table th, .spot-table td {
                padding: 10px 4px;
                font-size: 0.95rem;
            }
            #block {
                display: block;

                /* justify-content: space-between; */
            align-items: center; 
            margin-bottom: 8px;
            width: 100%;
            }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div class="main-content">
        <div class="balance-card">
            <div id="block" >
                <div class="balance-title">Estimated Balance <span style="font-size: 1rem; color: #888;">👁️</span></div>
                <div class="balance-actions" style="display: flex; gap: 16px; margin-left: auto;">
                    <button style="background: #23262f; color: #f0b90b; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 700; font-size: 1.1rem;">Deposit</button>
                    <button style="background: #23262f; color: #f0b90b; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 700; font-size: 1.1rem;">Withdraw</button>
                    <button style="background: #23262f; color: #f0b90b; border: none; border-radius: 8px; padding: 10px 28px; font-weight: 700; font-size: 1.1rem;">Transfer</button>
                </div>
            </div>
            <div class="balance-amount">0.00 <span class="balance-btc">BTC</span></div>
            <div class="balance-usd">≈ $0.00</div>
            <div class="balance-pnl">Today's PnL <span>+ $0.00(0.00%)</span></div>
        </div>
        <div class="spot-section">
          <h2>Spot</h2>
          <br/>
            <div class="spot-header">
                <label> Convert Small Balance to BNB <span style="font-size: 1.1rem;">&#8644;</span></label>
                <label class="hide-assets"><input type="checkbox"> Hide assets &lt;1 USD</label>
            </div>
            <table class="spot-table">
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Amount</th>
                        <th>Available</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="img/btc.png" class="coin-icon" alt="BTC"> <span class="coin-name">BTC</span><br><span class="coin-symbol">Bitcoin</span></td>
                        <td>0.00<br><span style="color:#aaa; font-size:0.98rem;">$0.00</span></td>
                        <td>0.00</td>
                        <td><a class="action-link">Convert</a> <a class="action-link">Earn</a></td>
                    </tr>
                    <tr>
                        <td><img src="img/eth.png" class="coin-icon" alt="ETH"> <span class="coin-name">ETH</span><br><span class="coin-symbol">Ethereum</span></td>
                        <td>0.00<br><span style="color:#aaa; font-size:0.98rem;">$0.00</span></td>
                        <td>0.00</td>
                        <td><a class="action-link">Convert</a> <a class="action-link">Earn</a></td>
                    </tr>
                    <tr>
                        <td><img src="img/bnb.png" class="coin-icon" alt="BNB"> <span class="coin-name">BNB</span><br><span class="coin-symbol">BNB</span></td>
                        <td>0.00<br><span style="color:#aaa; font-size:0.98rem;">$0.00</span></td>
                        <td>0.00</td>
                        <td><a class="action-link">Convert</a> <a class="action-link">Earn</a></td>
                    </tr>
                    <tr>
                        <td><img src="img/usdt.png" class="coin-icon" alt="USDT"> <span class="coin-name">USDT</span><br><span class="coin-symbol">TetherUS</span></td>
                        <td>0.00<br><span style="color:#aaa; font-size:0.98rem;">$0.00</span></td>
                        <td>0.00</td>
                        <td><a class="action-link">Convert</a> <a class="action-link">Earn</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
