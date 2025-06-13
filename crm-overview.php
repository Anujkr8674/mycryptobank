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

    <style>
        body {
            background: #181A20;
            color: #fff;
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
            padding-top: 130px;
            display: flex;
        }
        .sidebar {
            width: 250px !important;
            min-width: 250px !important;
            max-width: 250px !important;
            background: #181A20;
            position: relative;
            height: 100vh;
            left: 0;
            top: 0;
        }
        .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 0 16px;
            margin-left: 0;
            width: 100%;
        }
        .card {
            background: #23262F;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .balance {
            font-size: 2.5rem;
            font-weight: bold;
        }
        .subtext {
            color: #848E9C;
            font-size: 1rem;
        }
        .btn-group {
            margin-top: 16px;
        }
        .btn {
            background: #262A34;
            color: #F0B90B;
            border: none;
            border-radius: 6px;
            padding: 8px 20px;
            margin-right: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .btn:last-child { margin-right: 0; }
        .btn:hover {
            background: #2c313a;
        }
        .section-title {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 18px;
        }
        .toggle {
            display: flex;
            align-items: center;
            margin-bottom: 18px;
        }
        .toggle-btn {
            background: none;
            border: none;
            color: #848E9C;
            font-size: 1.1rem;
            margin-right: 18px;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            padding-bottom: 2px;
            transition: color 0.2s, border 0.2s;
        }
        .toggle-btn.active {
            color: #F0B90B;
            border-bottom: 2px solid #F0B90B;
            font-weight: bold;
        }
        .assets-table {
            width: 100%;
            border-collapse: collapse;
        }
        .assets-table th, .assets-table td {
            padding: 12px 8px;
            text-align: left;
        }
        .assets-table th {
            color: #848E9C;
            font-size: 1rem;
            font-weight: 600;
        }
        .assets-table tr {
            border-bottom: 1px solid #23262F;
        }
        .assets-table tr:last-child {
            border-bottom: none;
        }
        .coin-icon, .account-icon {
            width: 28px;
            height: 28px;
            vertical-align: middle;
            margin-right: 10px;
            border-radius: 50%;
            background: #23262F;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .coin-icon img, .account-icon img {
            width: 22px;
            height: 22px;
        }
        .action-link {
            color: #F0B90B;
            text-decoration: none;
            font-weight: 500;
            cursor: pointer;
        }
        .action-link:hover {
            text-decoration: underline;
        }
        .search-bar {
            background: #181A20;
            border: 1px solid #23262F;
            border-radius: 6px;
            padding: 6px 12px;
            color: #fff;
            margin-right: 10px;
            width: 180px;
        }
        .checkbox {
            accent-color: #F0B90B;
            margin-left: 6px;
        }
        .three-dots {
            color: #848E9C;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .sidebar-container{
            margin-top: -30px;
        }
        @media (max-width: 992px) {
            body {
                padding-top: 100px;
            }
            .sidebar {
                width: 200px !important;
                min-width: 200px !important;
                max-width: 200px !important;
            }
        }
        @media (max-width: 768px) {
            .container { 
                padding: 0 4px; 
                margin-left: 0;
                width: 100%;
                padding-top: 140px;
            }

            .sidebar-container{
            margin-top: -2px;
        }
            .card { 
                padding: 12px;
                margin-bottom: 16px;
            }
            .assets-table th, .assets-table td { 
                padding: 8px 4px;
                font-size: 0.9rem;
            }
            .search-bar { 
                width: 100px;
            }
            .balance {
                font-size: 1.8rem;
            }
            .btn {
                padding: 6px 12px;
                font-size: 0.9rem;
                margin-right: 5px;
            }
            .flex {
                flex-direction: column;
                align-items: flex-start;
            }
            .flex > div:last-child {
                margin-top: 15px;
                width: 100%;
            }
            .btn-group {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            .toggle {
                flex-wrap: wrap;
                gap: 10px;
            }
            .toggle-btn {
                font-size: 1rem;
                margin-right: 10px;
            }
            .section-title {
                font-size: 1.1rem;
            }
            .coin-icon, .account-icon {
                width: 24px;
                height: 24px;
            }
            .coin-icon img, .account-icon img {
                width: 18px;
                height: 18px;
            }
            .sidebar {
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                height: auto;
                position: relative;
            }
            body {
                padding-top: 0;
            }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div class="container">
        <!-- Estimated Balance Card -->
        <div class="card">
            <div class="flex" style="align-items: flex-start;">
                <div>
                    <div class="subtext">Estimated Balance <span style="font-size:1.1em;vertical-align:middle;">👁️</span></div>
                    <div class="balance">0.00 <span style="font-size:1.1rem;font-weight:400;">BTC</span></div>
                    <div class="subtext">≈ $0.00</div>
                </div>
                <div>
                    <button class="btn">Deposit</button>
                    <button class="btn">Withdraw</button>
                    <button class="btn">Transfer</button>
                </div>
            </div>
        </div>
        <!-- My Assets Card -->
        <div class="card">
            <div class="flex">
                <div class="section-title">My Assets</div>
                <div style="font-size:1rem;color:#F0B90B;cursor:pointer;">View All 350+ Coins &gt;</div>
            </div>
            <div class="toggle">
                <button class="toggle-btn active" id="coinViewBtn" onclick="showView('coin')">Coin View</button>
                <button class="toggle-btn" id="accountViewBtn" onclick="showView('account')">Account View</button>
                <input class="search-bar" type="text" placeholder="" style="margin-left:30px;">
                <label style="color:#848E9C;font-size:1rem;margin-left:10px;">
                    <input type="checkbox" class="checkbox"> Hide assets &lt;1 USD
                </label>
            </div>
            <!-- Coin View Table -->
            <div id="coinView">
                <table class="assets-table">
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Amount</th>
                            <th>Coin Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="coin-icon"><img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=026" alt="BNB"></span>BNB<br><span style="color:#848E9C;font-size:0.95em;">BNB</span></td>
                            <td>0.00<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>$606.94</td>
                            <td><a class="action-link">Cash In</a></td>
                        </tr>
                        <tr>
                            <td><span class="coin-icon"><img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026" alt="BTC"></span>BTC<br><span style="color:#848E9C;font-size:0.95em;">Bitcoin</span></td>
                            <td>0.00<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>$95,147.44</td>
                            <td><a class="action-link">Cash In</a></td>
                        </tr>
                        <tr>
                            <td><span class="coin-icon"><img src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026" alt="ETH"></span>ETH<br><span style="color:#848E9C;font-size:0.95em;">Ethereum</span></td>
                            <td>0.00<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>$1,810.33</td>
                            <td><a class="action-link">Cash In</a></td>
                        </tr>
                        <tr>
                            <td><span class="coin-icon"><img src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=026" alt="USDT"></span>USDT<br><span style="color:#848E9C;font-size:0.95em;">TetherUS</span></td>
                            <td>0.00<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>$1.00</td>
                            <td><a class="action-link">Cash In</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Account View Table -->
            <div id="accountView" style="display:none;">
                <table class="assets-table">
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Amount</th>
                            <th>Ratio</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="account-icon"><img src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" alt="Spot"></span>Spot</td>
                            <td>--<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>-</td>
                            <td><span class="three-dots">&#8942;</span></td>
                        </tr>
                        <tr>
                            <td><span class="account-icon"><img src="https://cdn-icons-png.flaticon.com/512/1827/1827505.png" alt="Cross Margin"></span>Cross Margin</td>
                            <td>--<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>-</td>
                            <td><span class="three-dots">&#8942;</span></td>
                        </tr>
                        <tr>
                            <td><span class="account-icon"><img src="https://cdn-icons-png.flaticon.com/512/1827/1827506.png" alt="Isolated Margin"></span>Isolated Margin</td>
                            <td>--<br><span style="color:#848E9C;font-size:0.95em;">$0.00</span></td>
                            <td>-</td>
                            <td><span class="three-dots">&#8942;</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Recent Transactions Card -->
        <div class="card">
            <div class="section-title">Recent Transactions</div>
            <div style="text-align:center;color:#848E9C;padding:30px 0;">
                <div style="font-size:2.2rem;">📄</div>
                <div>No records</div>
            </div>
        </div>
    </div>
    <script>
        function showView(view) {
            const coinBtn = document.getElementById('coinViewBtn');
            const accountBtn = document.getElementById('accountViewBtn');
            const coinView = document.getElementById('coinView');
            const accountView = document.getElementById('accountView');
            if(view === 'coin') {
                coinBtn.classList.add('active');
                accountBtn.classList.remove('active');
                coinView.style.display = '';
                accountView.style.display = 'none';
            } else {
                coinBtn.classList.remove('active');
                accountBtn.classList.add('active');
                coinView.style.display = 'none';
                accountView.style.display = '';
            }
        }
    </script>
</body>
</html>
