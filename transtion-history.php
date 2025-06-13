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
    <!-- <title>Crypto Transaction History</title> -->
    <style>
        body {
            background: #181A20;
            color: #fff;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
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
            max-width: 100%;
            margin: 40px auto;
            padding: 24px;
            background: #1E2329;
            border-radius: 12px;
            padding-top: 150px;
            margin-left: 25px;
        }
        h2 {
            margin-bottom: 24px;
        }
        .filters {
            display: flex;
            gap: 16px;
            margin-bottom: 24px;
            flex-wrap: wrap;
        }
        .dropdown {
            position: relative;
            min-width: 120px;
            flex: 1 1 160px;
        }
        .dropdown select {
            background: #23262F;
            color: #fff;
            border: 1px solid #393E4B;
            border-radius: 6px;
            padding: 8px 32px 8px 12px;
            font-size: 16px;
            appearance: none;
            min-width: 100px;
            width: 100%;
        }
        .dropdown:after {
            content: '\25BC';
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #888;
        }
        .table-container {
            background: #181A20;
            border-radius: 8px;
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 0;
            min-width: 700px;
        }
        th, td {
            padding: 12px 8px;
            text-align: left;
        }
        th {
            color: #aaa;
            font-weight: 500;
            border-bottom: 1px solid #23262F;
        }
        td {
            border-bottom: 1px solid #23262F;
        }
        .no-records {
            text-align: center;
            padding: 48px 0;
            color: #888;
        }
        .no-records-icon {
            font-size: 40px;
            margin-bottom: 12px;
            color: #444;
        }
        .link {
            color: #FCD535;
            text-decoration: underline;
            cursor: pointer;
            margin-bottom: 16px;
            display: inline-block;
        }
        #header-tabs {
            display: flex;
            gap: 32px;
            align-items: center;
            margin-bottom: 18px;
            flex-wrap: wrap;
        }
        .tab-btn {
            color: #fff;
            font-size: 20px;
            font-weight: 500;
            padding-bottom: 8px;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: color 0.2s, border-bottom 0.2s;
        }
        .tab-btn.active {
            color: #fff;
            border-bottom: 3px solid #FCD535;
            font-weight: 700;
        }
        .tab-btn:hover {
            color: #FCD535;
        }
        .filters button, .filters input[type="text"] {
            min-width: 100px;
        }
     
        @media (max-width: 900px) {
            #header-tabs { gap: 16px; }
            .tab-btn { font-size: 16px; }
        }
        @media (max-width: 700px) {
            .container { padding: 8px;    margin: 4px auto; padding-top: 150px; }
            .filters { flex-direction: column; gap: 10px; margin-bottom: 18px; align-items: stretch; }
            .dropdown, .filters button, .filters input[type="text"] { width: 100%; min-width: 0; }
            .tab-btn { font-size: 15px; padding-bottom: 4px; }
            table { min-width: 500px; font-size: 13px; }
            th, td { padding: 8px 4px; }
        }
        @media (max-width: 500px) {
            .container { padding: 2px;    margin: 4px auto;padding-top: 150px; border-radius: 0; }
            #header-tabs { gap: 8px; }
            .tab-btn { font-size: 12px; }
            .filters { gap: 6px; margin-bottom: 10px; }
            table { min-width: 400px; font-size: 11px; }
            th, td { padding: 6px 2px; }
        }
        @media (max-width: 400px) {
            .tab-btn { font-size: 10px; }
            .filters { gap: 4px; }
        }
        #tab-content-distribution .filters {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            white-space: nowrap;
            gap: 12px;
            align-items: center;
            width: 100%;
            margin-bottom: 10px !important;
            padding-bottom: 0 !important;
        }
        #tab-content-distribution .filters > * {
            display: inline-block !important;
            min-width: 140px;
            flex: 0 0 auto !important;
            margin-bottom: 0 !important;
            vertical-align: middle;
        }
        #tab-content-distribution .filters button {
            min-width: 90px;
        }
        @media (max-width: 700px) {
            #tab-content-distribution .filters {
                padding-bottom: 4px;
            }
            #tab-content-distribution .filters > * {
                min-width: 120px;
                font-size: 14px;
            }
        }
        #tab-content-fundingwallet .filters {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            white-space: nowrap;
            gap: 12px;
            align-items: center;
            width: 100%;
            margin-bottom: 10px !important;
            padding-bottom: 0 !important;
        }
        #tab-content-fundingwallet .filters > * {
            display: inline-block !important;
            min-width: 140px;
            flex: 0 0 auto !important;
            margin-bottom: 0 !important;
            vertical-align: middle;
        }
        #tab-content-fundingwallet .filters button {
            min-width: 90px;
        }

        .sidebar-container{
            margin-top: 110px;
        }
        @media (max-width: 700px) {
            #tab-content-fundingwallet .filters {
                padding-bottom: 4px;
            }
            #tab-content-fundingwallet .filters > * {
                min-width: 120px;
                font-size: 14px;
            }
        }
        @media (max-width: 992px) {
            .sidebar {
                width: 200px !important;
                min-width: 200px !important;
                max-width: 200px !important;
            }
        }
        @media (max-width: 768px) {
            .sidebar {
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                height: auto;
                position: relative;
            }
        }
    </style>
</head>
<body>
    <?php include 'sidebar.php'; ?>
    <div class="container">
        <div id="header-tabs" style="display: flex; gap: 32px; align-items: center; margin-bottom: 18px;">
            <div class="tab-btn active" data-tab="crypto">Crypto</div>
            <div class="tab-btn" data-tab="transfer">Transfer</div>
            <div class="tab-btn" data-tab="distribution">Distribution</div>
            <div class="tab-btn" data-tab="bnbconvert">BNB Convert</div>
            <div class="tab-btn" data-tab="loan">Loan</div>
            <div class="tab-btn" data-tab="fundingwallet">Funding Wallet</div>
            <div class="tab-btn" data-tab="referral">Referral</div>
        </div>
        <div id="tab-content-crypto">
            <div class="filters" style="align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 16px; flex: 1;">
                    <div class="dropdown">
                        <select id="type">
                            <option value="Deposit">Deposit</option>
                            <option value="Withdraw">Withdraw</option>
                            <option value="Auto deduction">Auto deduction</option>
                            <option value="Auto funding">Auto funding</option>
                            <option value="Arrears repayment">Arrears repayment</option>
                            <option value="Auto convert">Auto convert</option>
                            <option value="Partners Transfer">Partners Transfer</option>
                        </select>
                    </div>
                    <div class="dropdown">
                        <select id="time">
                            <option value="Past 7 days">Past 7 days</option>
                            <option value="Past 30 days" selected>Past 30 days</option>
                            <option value="Past 90 days">Past 90 days</option>
                            <option value="Customized">Customized</option>
                        </select>
                    </div>
                    <div class="dropdown">
                        <select id="coin">
                            <option value="All">All</option>
                            <option value="1000CAT">1000CAT</option>
                            <option value="1000CHEEMS">1000CHEEMS</option>
                            <option value="1000PEPPER">1000PEPPER</option>
                            <option value="1000SATS">1000SATS</option>
                            <option value="1INCH">1INCH</option>
                            <option value="1MBABYDOGE">1MBABYDOGE</option>
                            <option value="AAVE">AAVE</option>
                            <option value="ACA">ACA</option>
                            <option value="ACE">ACE</option>
                            <option value="ACH">ACH</option>
                        </select>
                    </div>
                    <div class="dropdown">
                        <select id="status">
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
                <button id="resetBtn" style="background: none; border: none; color: #fff; font-weight: 600; font-size: 16px; margin-left: 24px; cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#FCD535'" onmouseout="this.style.color='#fff'">Reset</button>
            </div>
            <div style="margin-bottom: 12px;">
                <div style="background: #23262F; border-radius: 8px; display: flex; align-items: center; padding: 0 12px; height: 44px; min-width: 220px; border: 1px solid #393E4B; width: 260px;">
                    <span style="color: #888; font-size: 18px; margin-right: 8px;">🔍</span>
                    <input type="text" placeholder="Enter TxID" style="background: transparent; border: none; outline: none; color: #fff; font-size: 16px; width: 100%;" />
                </div>
            </div>
            <a class="link" href="#">Deposit hasn't arrived?</a>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Deposit wallet</th>
                            <th>Coin</th>
                            <th>Amount</th>
                            <th>Destination</th>
                            <th>TxID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr>
                            <td colspan="8">
                                <div class="no-records">
                                    <div class="no-records-icon">🔍</div>
                                    No records
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="tab-content-transfer" style="display:none;">
            <div class="filters" style="align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 16px; flex: 1;">
                    <div class="dropdown">
                        <span style="color:#aaa; font-size:15px; margin-right:6px;">From</span>
                        <select id="from-wallet">
                            <option value="Funding">Funding</option>
                            <option value="Options">Options</option>
                            <option value="Fiat and Spot" selected>Fiat and Spot</option>
                            <option value="USDⓈ-M Futures">USDⓈ-M Futures</option>
                            <option value="COIN-M Futures">COIN-M Futures</option>
                            <option value="Pool">Pool</option>
                            <option value="P2P">P2P</option>
                            <option value="Isolated Margin">Isolated Margin</option>
                        </select>
                    </div>
                    <span style="font-size: 22px; color: #aaa;">⇄</span>
                    <div class="dropdown">
                        <span style="color:#aaa; font-size:15px; margin-right:6px;">To</span>
                        <select id="to-wallet">
                            <option value="Options">Options</option>
                            <option value="Cross Margin" selected>Cross Margin</option>
                            <option value="USDⓈ-M Futures">USDⓈ-M Futures</option>
                            <option value="COIN-M Futures">COIN-M Futures</option>
                            <option value="P2P">P2P</option>
                            <option value="Pool">Pool</option>
                            <option value="Funding">Funding</option>
                            <option value="Isolated Margin">Isolated Margin</option>
                            <option value="Trading Bots">Trading Bots</option>
                            <option value="Copy Trading">Copy Trading</option>
                        </select>
                    </div>
                    <div class="dropdown">
                        <span style="color:#aaa; font-size:15px; margin-right:6px;">Time</span>
                        <select id="transfer-time">
                            <option value="Past 7 days">Past 7 days</option>
                            <option value="Past 30 days" selected>Past 30 days</option>
                            <option value="Past 90 days">Past 90 days</option>
                        </select>
                    </div>
                    <div class="dropdown">
                        <span style="color:#aaa; font-size:15px; margin-right:6px;">Coin</span>
                        <select id="transfer-coin">
                            <option value="All">All</option>
                            <option value="1000CAT">1000CAT</option>
                            <option value="1000CHEEMS">1000CHEEMS</option>
                            <option value="1000PEPPER">1000PEPPER</option>
                            <option value="1000SATS">1000SATS</option>
                            <option value="1INCH">1INCH</option>
                            <option value="1MBABYDOGE">1MBABYDOGE</option>
                            <option value="AAVE">AAVE</option>
                            <option value="ACA">ACA</option>
                            <option value="ACE">ACE</option>
                            <option value="ACH">ACH</option>
                        </select>
                    </div>
                </div>
                <button id="resetTransferBtn" style="background: none; border: none; color: #fff; font-weight: 600; font-size: 16px; margin-left: 24px; cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#FCD535'" onmouseout="this.style.color='#fff'">Reset</button>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Coin</th>
                            <th>Amount</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5">
                                <div class="no-records">
                                    <div class="no-records-icon">🔍</div>
                                    No records
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="tab-content-distribution" style="display:none;">
            <div class="filters" style="align-items: center; justify-content: flex-start; gap: 16px;">
                <div class="dropdown">
                    <span style="color:#aaa; font-size:15px; margin-right:6px;">Time</span>
                    <select id="distribution-time">
                        <option value="Past 7 days">Past 7 days</option>
                        <option value="Past 30 days" selected>Past 30 days</option>
                        <option value="Past 90 days">Past 90 days</option>
                        <option value="Customized">Customized</option>
                    </select>
                </div>
                <div class="dropdown">
                    <span style="color:#aaa; font-size:15px; margin-right:6px;">Coin</span>
                    <select id="distribution-coin">
                        <option value="All">All</option>
                        <option value="1000CAT">1000CAT</option>
                        <option value="1000CHEEMS">1000CHEEMS</option>
                        <option value="1000PEPPER">1000PEPPER</option>
                        <option value="1000SATS">1000SATS</option>
                        <option value="1INCH">1INCH</option>
                        <option value="1MBABYDOGE">1MBABYDOGE</option>
                        <option value="AAVE">AAVE</option>
                        <option value="ACA">ACA</option>
                        <option value="ACE">ACE</option>
                        <option value="ACH">ACH</option>
                    </select>
                </div>
                <div class="dropdown">
                    <span style="color:#aaa; font-size:15px; margin-right:6px;">Account</span>
                    <select id="distribution-account">
                        <option value="Fiat and Spot" selected>Fiat and Spot</option>
                        <option value="Pool">Pool</option>
                        <option value="Funding">Funding</option>
                    </select>
                </div>
                <button id="resetDistributionBtn" style="background: none; border: none; color: #fff; font-weight: 600; font-size: 16px; margin-left: 24px; cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#FCD535'" onmouseout="this.style.color='#fff'">Reset</button>
            </div>
            <div style="margin: 18px 0 0 0;">
                <a href="#" style="color: #FCD535; text-decoration: underline; font-size: 18px; font-weight: 500;">MyCryptoBank Airdrop Portal</a>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Coin</th>
                            <th>Amount</th>
                            <th>Account</th>
                            <th>Type</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="6">
                                <div class="no-records">
                                    <div class="no-records-icon">🔍</div>
                                    No records
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="tab-content-fundingwallet" style="display:none;">
            <div class="filters" style="align-items: center; justify-content: flex-start; gap: 16px;">
                <div class="dropdown">
                    <span style="color:#aaa; font-size:15px; margin-right:6px;">Time</span>
                    <select id="fundingwallet-time">
                        <option value="Past 7 days">Past 7 days</option>
                        <option value="Past 30 days" selected>Past 30 days</option>
                        <option value="Past 90 days">Past 90 days</option>
                        <option value="Customized">Customized</option>
                    </select>
                </div>
                <div class="dropdown">
                    <span style="color:#aaa; font-size:15px; margin-right:6px;">Coin</span>
                    <select id="fundingwallet-coin">
                        <option value="All">All</option>
                        <option value="1000CAT">1000CAT</option>
                        <option value="1000CHEEMS">1000CHEEMS</option>
                        <option value="1000PEPPER">1000PEPPER</option>
                        <option value="1000SATS">1000SATS</option>
                        <option value="1INCH">1INCH</option>
                        <option value="1MBABYDOGE">1MBABYDOGE</option>
                        <option value="AAVE">AAVE</option>
                        <option value="ACA">ACA</option>
                        <option value="ACE">ACE</option>
                        <option value="ACH">ACH</option>
                    </select>
                </div>
                <button id="resetFundingWalletBtn" style="background: none; border: none; color: #fff; font-weight: 600; font-size: 16px; margin-left: 24px; cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#FCD535'" onmouseout="this.style.color='#fff'">Reset</button>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Transaction Type</th>
                            <th>Asset</th>
                            <th>Change</th>
                            <th>Balance <span style='color:#888; font-size:15px; cursor:pointer;' title='Info'>6C8</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5">
                                <div class="no-records">
                                    <div class="no-records-icon">🔍</div>
                                    No records
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="tab-content-referral" style="display:none;">
            <div style="background: #39320b; color: #fff; border-radius: 10px; padding: 18px 24px; margin-bottom: 18px; display: flex; align-items: center; font-size: 16px;">
                <span style="color: #FCD535; font-size: 22px; margin-right: 12px;">&#9888;</span>
                <span style="color: #fff;">Only records from the past 7 days are shown. For your detailed transaction history, tap "Export" in the top right of the page. To view more referral information, <a href="#" style="color: #FCD535; text-decoration: underline;">click here</a></span>
            </div>
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
                <div id="commission-toggle" style="display: flex; gap: 0;">
                    <button id="commissionRebateBtn" class="commission-tab active" style="border-radius: 8px 0 0 8px;">Commission Rebate</button>
                    <button id="sharedCommissionBtn" class="commission-tab" style="border-radius: 0 8px 8px 0;">Shared Commission</button>
                </div>
                <div class="dropdown">
                    <span style="color:#aaa; font-size:15px; margin-right:6px;">Account</span>
                    <select id="referral-account">
                        <option value="All Accounts" selected>All Accounts</option>
                        <option value="Spot (Margin Included)">Spot (Margin Included)</option>
                        <option value="Futures">Futures</option>
                        <option value="Mining">Mining</option>
                    </select>
                </div>
                <button id="resetReferralBtn" style="background: none; border: none; color: #fff; font-weight: 600; font-size: 16px; margin-left: 24px; cursor: pointer; transition: color 0.2s;" onmouseover="this.style.color='#FCD535'" onmouseout="this.style.color='#fff'">Reset</button>
            </div>
            <div style="color: #888; font-size: 15px; margin-bottom: 8px;">* Commissions refer to the amount earned when your referred friends start trading on MyCryptoBank Spot, Futures, and Pool.</div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Order Type</th>
                            <th>Friend's User ID</th>
                            <th>Commission Earned</th>
                            <th>Friend's Trading Date</th>
                            <th>Commission Date</th>
                            <th>Distribution Status</th>
                        </tr>
                    </thead>
                    <tbody id="referral-table-body">
                        <tr>
                            <td colspan="6">
                                <div class="no-records">
                                    <div class="no-records-icon">🔍</div>
                                    No records
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <style>
                .commission-tab {
                    background: #23262F;
                    color: #fff;
                    border: none;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 10px 22px;
                    cursor: pointer;
                    border-right: 1px solid #393E4B;
                    transition: background 0.2s, color 0.2s;
                }
                .commission-tab:last-child {
                    border-right: none;
                }
                .commission-tab.active {
                    background: #23262F;
                    color: #fff;
                    font-weight: 700;
                    box-shadow: 0 0 0 2px #FCD535 inset;
                }
                .commission-tab:not(.active) {
                    color: #aaa;
                }
            </style>
        </div>
        <div id="tab-content-other" style="display:none;">
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Deposit wallet</th>
                            <th>Coin</th>
                            <th>Amount</th>
                            <th>Destination</th>
                            <th>TxID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="8">
                                <div class="no-records">
                                    <div class="no-records-icon">🔍</div>
                                    No records (Section coming soon)
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script>
        // Tab toggle logic
        const tabBtns = document.querySelectorAll('.tab-btn');
        const cryptoContent = document.getElementById('tab-content-crypto');
        const transferContent = document.getElementById('tab-content-transfer');
        const distributionContent = document.getElementById('tab-content-distribution');
        const fundingWalletContent = document.getElementById('tab-content-fundingwallet');
        const referralContent = document.getElementById('tab-content-referral');
        const otherContent = document.getElementById('tab-content-other');
        tabBtns.forEach(btn => {
            btn.onclick = function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                if (this.dataset.tab === 'crypto') {
                    cryptoContent.style.display = '';
                    transferContent.style.display = 'none';
                    distributionContent.style.display = 'none';
                    fundingWalletContent.style.display = 'none';
                    referralContent.style.display = 'none';
                    otherContent.style.display = 'none';
                } else if (this.dataset.tab === 'transfer') {
                    cryptoContent.style.display = 'none';
                    transferContent.style.display = '';
                    distributionContent.style.display = 'none';
                    fundingWalletContent.style.display = 'none';
                    referralContent.style.display = 'none';
                    otherContent.style.display = 'none';
                } else if (this.dataset.tab === 'distribution') {
                    cryptoContent.style.display = 'none';
                    transferContent.style.display = 'none';
                    distributionContent.style.display = '';
                    fundingWalletContent.style.display = 'none';
                    referralContent.style.display = 'none';
                    otherContent.style.display = 'none';
                } else if (this.dataset.tab === 'fundingwallet') {
                    cryptoContent.style.display = 'none';
                    transferContent.style.display = 'none';
                    distributionContent.style.display = 'none';
                    fundingWalletContent.style.display = '';
                    referralContent.style.display = 'none';
                    otherContent.style.display = 'none';
                } else if (this.dataset.tab === 'referral') {
                    cryptoContent.style.display = 'none';
                    transferContent.style.display = 'none';
                    distributionContent.style.display = 'none';
                    fundingWalletContent.style.display = 'none';
                    referralContent.style.display = '';
                    otherContent.style.display = 'none';
                } else {
                    cryptoContent.style.display = 'none';
                    transferContent.style.display = 'none';
                    distributionContent.style.display = 'none';
                    fundingWalletContent.style.display = 'none';
                    referralContent.style.display = 'none';
                    otherContent.style.display = '';
                }
            }
        });
        // Commission/Shared toggle logic
        const commissionRebateBtn = document.getElementById('commissionRebateBtn');
        const sharedCommissionBtn = document.getElementById('sharedCommissionBtn');
        commissionRebateBtn.onclick = function() {
            commissionRebateBtn.classList.add('active');
            sharedCommissionBtn.classList.remove('active');
            // Placeholder: update table if needed
        };
        sharedCommissionBtn.onclick = function() {
            sharedCommissionBtn.classList.add('active');
            commissionRebateBtn.classList.remove('active');
            // Placeholder: update table if needed
        };
        // Reset button logic for Crypto
        document.getElementById('resetBtn').onclick = function() {
            document.getElementById('type').selectedIndex = 0;
            document.getElementById('time').selectedIndex = 0;
            document.getElementById('coin').selectedIndex = 0;
            document.getElementById('status').selectedIndex = 0;
            var txidInputs = document.querySelectorAll('input[placeholder="Enter TxID"]');
            txidInputs.forEach(function(input) { input.value = ''; });
        };
        // Reset button logic for Transfer
        document.getElementById('resetTransferBtn').onclick = function() {
            document.getElementById('from-wallet').selectedIndex = 2;
            document.getElementById('to-wallet').selectedIndex = 1;
            document.getElementById('transfer-time').selectedIndex = 1;
            document.getElementById('transfer-coin').selectedIndex = 0;
        };
        // Reset button logic for Distribution
        document.getElementById('resetDistributionBtn').onclick = function() {
            document.getElementById('distribution-time').selectedIndex = 1;
            document.getElementById('distribution-coin').selectedIndex = 0;
            document.getElementById('distribution-account').selectedIndex = 0;
        };
        // Reset button logic for Funding Wallet
        document.getElementById('resetFundingWalletBtn').onclick = function() {
            document.getElementById('fundingwallet-time').selectedIndex = 1;
            document.getElementById('fundingwallet-coin').selectedIndex = 0;
        };
        // Reset button logic for Referral
        document.getElementById('resetReferralBtn').onclick = function() {
            document.getElementById('referral-account').selectedIndex = 0;
        };
    </script>
</body>
</html>
