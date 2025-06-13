<?php include "login-stay.php"; ?>
    <?php

// Fetch wallet name and user ID from DB
require_once 'config.php';
$walletName = 'Wallet User';
$referId = 'REFERRAL_ID';
$userId = '';
if (isset($_SESSION['passcode'])) {
    $stmt = $conn->prepare("SELECT wallet_name, user_id, refer_id FROM wallet_data WHERE passcode = ? ORDER BY id DESC LIMIT 1");
    $stmt->bind_param("s", $_SESSION['passcode']);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        $walletName = htmlspecialchars($row['wallet_name']);
        $userId = htmlspecialchars($row['user_id']);
        $referId = htmlspecialchars($row['refer_id']);
    }
    $stmt->close();
}
$referralLink = "mycryptobank.co/create-passcode.php?ref=" . urlencode($referId);
?>



<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        body {
            background: #000;
            color: #fff;
            font-family: 'Montserrat', Arial, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            padding-top: 120px;
        }
        .referral-header {
            color: #fff;
            font-size: 20px;
            font-weight: 500;
            margin-top: 20px;
            margin-left: 150px;
        }
        .referral-header .highlight {
            color: #FFD600;
            font-weight: 700;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 90vh;
            padding: 0 20px;
        }
        .card {
            background: #111;
            border-radius: 16px;
            box-shadow: 0 0 40px 0 #000a;
            width: 500px;
            max-width: 100%;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .title {
            font-size: 48px;
            font-weight: 800;
            margin-top: 30px;
            letter-spacing: 2px;
        }
        .subtitle {
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 30px;
            margin-top: 10px;
        }
        .progress-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: 30px 0 0 0;
        }
        .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #888;
            font-size: 14px;
            font-weight: 600;
        }
        .progress-step.active {
            color: #FFD600;
        }
        .progress-step .circle {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #222;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-bottom: 5px;
            border: 2px solid #444;
        }
        .progress-step.active .circle {
            background: #1de9b6;
            color: #fff;
            border: 2px solid #FFD600;
        }
        .progress-step:last-child .circle {
            background: #00e5ff;
            color: #fff;
            border: 2px solid #fff;
        }
        .progress-bar-line {
            position: absolute;
            top: 18px;
            left: 60px;
            width: 380px;
            height: 4px;
            background: #333;
            z-index: 0;
        }
        .progress-bar-container {
            position: relative;
            width: 90%;
            margin-bottom: 30px;
        }
        .progress-bar-fill {
            position: absolute;
            top: 18px;
            left: 60px;
            height: 4px;
            background: #FFD600;
            z-index: 1;
            width: 70px;
        }
        .circle-progress {
            margin: 30px 0 10px 0;
            width: 300px;
            height: 300px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .circle-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: radial-gradient(circle, #222 60%, #FFD60022 100%);
            z-index: 0;
        }
        .circle-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 16px solid #FFD600;
            border-top: 16px solid #222;
            border-bottom: 16px solid #FFD600;
            border-right: 16px solid #FFD600;
            border-left: 16px solid #FFD600;
            box-sizing: border-box;
            z-index: 1;
            transform: rotate(-20deg);
        }
        .circle-inner {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .circle-inner .percent {
            font-size: 50px;
            font-weight: 800;
            color: #fff;
            text-shadow: 0 0 20px #FFD60088;
        }
        .circle-inner .accumulated {
            font-size: 18px;
            margin-top: 10px;
            color: #bbb;
        }
        .circle-inner .amount {
            font-size: 24px;
            font-weight: 700;
            color: #FFD600;
            margin-top: 5px;
        }
        .circle-inner .withdraw {
            color: #FFD600;
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
            text-decoration: underline;
            cursor: pointer;
        }
        .notif {
            background: #222;
            color: #fff;
            border-radius: 20px;
            padding: 6px 18px;
            font-size: 15px;
            margin: 18px 0 0 0;
            display: inline-block;
        }
        .notif .highlight {
            color: #FFD600;
            font-weight: 700;
        }
        .round-timer {
            color: #bbb;
            font-size: 16px;
            margin: 20px 0 0 0;
        }
        .invite-btn {
            margin: 30px 0 40px 0;
            background: #FFD600;
            color: #000;
            font-size: 22px;
            font-weight: 700;
            border: none;
            border-radius: 30px;
            padding: 16px 60px;
            cursor: pointer;
            transition: background 0.2s;
        }
        .invite-btn:hover {
            background: #ffe066;
        }
        .invite-modal-overlay {
            display: none;
            position: fixed;
            z-index: 9999;
            left: 0; top: 0; width: 100vw; height: 100vh;
            background: rgba(24, 28, 32, 0.92);
            align-items: center;
            justify-content: center;
        }
        .invite-modal-overlay.active {
            display: flex;
        }
        .invite-modal {
            background: #111216;
            border-radius: 20px;
            box-shadow: 0 0 32px #000a;
            padding: 36px 32px 28px 32px;
            width: 420px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-height: 80vh;
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: none;      /* Firefox */
            -ms-overflow-style: none;   /* IE and Edge */
        }
        .invite-modal::-webkit-scrollbar {
            display: none;              /* Chrome, Safari, Opera */
        }
        .invite-modal-close {
            position: absolute;
            top: 18px;
            right: 18px;
            background: none;
            border: none;
            font-size: 32px;
            color: #bfc6c3;
            cursor: pointer;
            transition: color 0.2s;
        }
        .invite-modal-close:hover {
            color: #FFD600;
        }
        .invite-modal-card {
            background: #111216;
            border-radius: 16px;
            width: 100%;
            padding: 24px 18px 18px 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 28px;
        }
        .invite-modal-card h2 {
            color: #fff;
            font-size: 24px;
            font-weight: 800;
            margin: 0 0 10px 0;
            text-align: left;
            width: 100%;
        }
        .invite-modal-card p {
            color: #bfc6c3;
            font-size: 14px;
            margin: 0 0 4px 0;
            text-align: left;
            width: 100%;
        }
        .invite-modal-card .hashtag {
            color: #FFD600;
            font-size: 13px;
            margin-bottom: 10px;
            width: 100%;
            text-align: left;
        }
        .invite-modal-card .invite-img {
            margin: 18px 0 18px 0;
            width: 90px;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .invite-modal-card .invite-img svg {
            width: 90px; height: 90px;
        }
        .invite-modal-card .binance-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-top: 10px;
        }
        .invite-modal-card .binance-logo {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .invite-modal-card .binance-logo img {
            width: 28px; height: 28px;
        }
        .invite-modal-card .binance-logo span {
            color: #FFD600;
            font-weight: 700;
            font-size: 18px;
        }
        .invite-modal-card .binance-url {
            color: #FFD600;
            font-size: 14px;
            margin-left: 2px;
        }
        .invite-modal-card .qr {
            width: 54px; height: 54px;
            background: #fff;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .invite-modal-row {
            width: 100%;
            display: flex;
            align-items: center;
            background: #23272b;
            border-radius: 30px;
            margin: 10px 0 0 0;
            padding: 0 18px;
            height: 48px;
            font-size: 16px;
            color: #bfc6c3;
            justify-content: space-between;
        }
        .invite-modal-row-label {
            color: #bfc6c3;
            font-size: 15px;
        }
        .invite-modal-row-value {
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            margin-left: 8px;
        }
        .invite-modal-copy {
            background: none;
            border: none;
            color: #FFD600;
            font-size: 20px;
            cursor: pointer;
            margin-left: 8px;
            display: flex;
            align-items: center;
        }
        .invite-modal-share-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            margin-top: 18px;
        }
        .invite-modal-share-btn {
            background: #23272b;
            border-radius: 50%;
            width: 44px; height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 22px;
            border: none;
            cursor: pointer;
            transition: background 0.2s;
        }
        .invite-modal-share-btn:hover {
            background: #FFD600;
            color: #23272b;
        }
        .withdraw-modal-overlay {
            display: none;
            position: fixed;
            z-index: 10000;
            left: 0; top: 0; width: 100vw; height: 100vh;
            background: rgba(24, 28, 32, 0.92);
            align-items: center;
            justify-content: center;
        }
        .withdraw-modal-overlay.active {
            display: flex;
        }
        .withdraw-modal {
            background: #23272b;
            border-radius: 24px;
            box-shadow: 0 0 32px #000a;
            padding: 38px 32px 32px 32px;
            width: 340px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .withdraw-modal-close {
            position: absolute;
            top: 18px;
            right: 18px;
            background: none;
            border: none;
            font-size: 32px;
            color: #bfc6c3;
            cursor: pointer;
            transition: color 0.2s;
        }
        .withdraw-modal-close:hover {
            color: #FFD600;
        }
        .withdraw-modal .wallet-img {
            margin-bottom: 18px;
            margin-top: 8px;
        }
        .withdraw-modal .wallet-img svg {
            width: 90px; height: 70px;
            display: block;
        }
        .withdraw-modal-title {
            color: #fff;
            font-size: 32px;
            font-weight: 800;
            margin: 10px 0 8px 0;
            text-align: center;
            letter-spacing: 1px;
        }
        .withdraw-modal-msg {
            color: #fff;
            font-size: 17px;
            text-align: center;
            margin-bottom: 28px;
        }
        .withdraw-modal-invite-btn {
            background: #FFD600;
            color: #222;
            font-size: 22px;
            font-weight: 700;
            border: none;
            border-radius: 30px;
            padding: 16px 0;
            width: 100%;
            cursor: pointer;
            transition: background 0.2s;
            margin-top: 8px;
        }
        .withdraw-modal-invite-btn:hover {
            background: #ffe066;
        }

        /* Responsive styles for different screen sizes */
        @media (max-width: 1200px) {
            .referral-header {
                margin-left: 100px;
            }
            div[style*="width:700px;"] {
                width: 90% !important;
                max-width: 700px;
            }
            div[style*="width:800px;"] {
                width: 90% !important;
                max-width: 800px;
            }
        }

        @media (max-width: 992px) {
            body {
                padding-top: 100px;
            }
            .referral-header {
                margin-left: 80px;
                font-size: 18px;
            }
            .title {
                font-size: 42px !important;
            }
            .subtitle {
                font-size: 16px !important;
            }
            .circle-progress {
                width: 260px !important;
                height: 260px !important;
            }
            .circle-inner .percent {
                font-size: 42px !important;
            }
            .invite-btn {
                font-size: 20px !important;
                padding: 14px 50px !important;
            }
        }

        @media (max-width: 768px) {
            body {
                padding-top: 80px;
            }
            .referral-header {
                margin-left: 20px;
                font-size: 16px;
                padding-top: 50px;
            }
            .card {
                width: 100%;
                border-radius: 12px;
            }
            .title {
                font-size: 36px !important;
                margin-top: 20px !important;
            }
            .subtitle {
                font-size: 15px !important;
                margin-bottom: 20px !important;
            }
            .progress-bar-container {
                width: 95% !important;
            }
            .progress-bar-line {
                width: 85% !important;
                left: 7.5% !important;
            }
            .progress-bar-fill {
                left: 7.5% !important;
            }
            .progress-step {
                font-size: 12px !important;
            }
            .progress-step .circle {
                width: 32px !important;
                height: 32px !important;
            }
            .circle-progress {
                width: 220px !important;
                height: 220px !important;
            }
            .circle-inner .percent {
                font-size: 36px !important;
            }
            .circle-inner .accumulated {
                font-size: 16px !important;
            }
            .circle-inner .amount {
                font-size: 20px !important;
            }
            .notif {
                font-size: 14px !important;
                padding: 5px 15px !important;
            }
            .invite-btn {
                font-size: 18px !important;
                padding: 12px 40px !important;
                margin: 20px 0 30px 0 !important;
            }
            div[style*="font-size:38px;"] {
                font-size: 32px !important;
            }
            div[style*="font-size:32px;"] {
                font-size: 28px !important;
            }
            div[style*="font-size:48px;"] {
                font-size: 36px !important;
            }
            div[style*="width:700px;"] {
                width: 95% !important;
            }
            div[style*="width:800px;"] {
                width: 95% !important;
            }
            table {
                display: block;
                overflow-x: auto;
                white-space: nowrap;
            }
            th, td {
                padding: 10px 12px !important;
                font-size: 14px !important;
            }
        }

        @media (max-width: 480px) {
            body {
                padding-top: 60px;
            }
            .referral-header {
                margin-left: 15px;
                font-size: 15px;
                padding-top: 50px;
            }
            .card {
                border-radius: 8px;
            }
            .title {
                font-size: 28px !important;
                margin-top: 15px !important;
            }
            .subtitle {
                font-size: 14px !important;
                margin-bottom: 15px !important;
            }
            .progress-bar-container {
                width: 100% !important;
            }
            .progress-bar-line {
                width: 90% !important;
                left: 5% !important;
            }
            .progress-bar-fill {
                left: 5% !important;
            }
            .progress-step {
                font-size: 11px !important;
            }
            .progress-step .circle {
                width: 28px !important;
                height: 28px !important;
            }
            .circle-progress {
                width: 180px !important;
                height: 180px !important;
            }
            .circle-inner .percent {
                font-size: 32px !important;
            }
            .circle-inner .accumulated {
                font-size: 14px !important;
            }
            .circle-inner .amount {
                font-size: 18px !important;
            }
            .notif {
                font-size: 13px !important;
                padding: 4px 12px !important;
            }
            .invite-btn {
                font-size: 16px !important;
                padding: 10px 30px !important;
                margin: 15px 0 25px 0 !important;
            }
            div[style*="font-size:38px;"] {
                font-size: 28px !important;
            }
            div[style*="font-size:32px;"] {
                font-size: 24px !important;
            }
            div[style*="font-size:48px;"] {
                font-size: 32px !important;
            }
            div[style*="width:700px;"] {
                width: 100% !important;
            }
            div[style*="width:800px;"] {
                width: 100% !important;
            }
            th, td {
                padding: 8px 10px !important;
                font-size: 13px !important;
            }
            .invite-modal {
                width: 90% !important;
                padding: 24px 20px 20px 20px !important;
                max-height: 90vh;
                overflow-x: hidden;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            .invite-modal::-webkit-scrollbar {
                display: none;
            }
            .withdraw-modal {
                width: 90% !important;
                padding: 24px 20px 20px 20px !important;
            }
            .invite-modal-share-btn {
                width: 40px !important;
                height: 40px !important;
                font-size: 20px !important;
            }
        }

        /* Modal responsive styles */
        @media (max-width: 768px) {
            .invite-modal-overlay, .withdraw-modal-overlay {
                padding: 20px;
            }
            .invite-modal, .withdraw-modal {
                width: 100%;
                max-width: 400px;
            }
            .invite-modal-share-row {
                flex-wrap: wrap;
                justify-content: center;
                gap: 12px;
            }
        }
    </style>

</head>
<body>
    <div class="referral-header">
        Referral <span class="highlight">Time-Limited</span>
    </div>
    <div class="container">
        <div class="card">
            <div class="title">EARN TOGETHER</div>
            <div class="subtitle">Invite Friends to Unlock 2,000 USDC Each!</div>
            <div class="progress-bar-container">
                <div class="progress-bar-line"></div>
                <div class="progress-bar-fill" style="width: 80px;"></div>
                <div class="progress-bar">
                    <div class="progress-step active">
                        <div class="circle">R1</div>
                        $50
                    </div>
                    <div class="progress-step">
                        <div class="circle">R2</div>
                        $80
                    </div>
                    <div class="progress-step">
                        <div class="circle">R3</div>
                        $120
                    </div>
                    <div class="progress-step">
                        <div class="circle">R4</div>
                        $250
                    </div>
                    <div class="progress-step">
                        <div class="circle">R5</div>
                        $500
                    </div>
                    <div class="progress-step">
                        <div class="circle">R6</div>
                        $1,000
                    </div>
                </div>
            </div>
            <div class="circle-progress">
                <div class="circle-bg"></div>
                <div class="circle-ring"></div>
                <div class="circle-inner">
                    <div class="percent">89.40%</div>
                    <div class="accumulated">You've accumulated</div>
                    <div class="amount">$44.7036</div>
                    <div class="withdraw">Withdraw</div>
                </div>
            </div>
            <div class="notif">
                ******9 has received <span class="highlight">50 USDC</span> in tokens.
            </div>
            <div class="round-timer">
                Current round time left: <span style="color:#FFD600;">7 D 0 H 45 M</span>
            </div>
            <button class="invite-btn">Invite Friends</button>
        </div>
    </div>

    <!-- New Section: TASKS, REWARDS, PROGRESS, REFERRALS, MY REWARDS -->
    <div style="width:100%;display:flex;flex-direction:column;align-items:center;margin-top:60px;">
        <!-- TASKS -->
        <div style="font-size:38px;font-weight:800;letter-spacing:2px;margin-bottom:30px;">TASKS</div>
        <div style="width:700px;display:flex;flex-direction:column;gap:22px;">
            <div style="background:#181d1b;border-radius:14px;padding:24px 30px;box-shadow:0 0 16px #0003;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;align-items:center;font-size:20px;font-weight:700;color:#fff;gap:10px;">
                    <span style="font-size:28px;">🦺</span> Task 1: Invite Friends to Trade &gt; $100
                    <button style="margin-left:auto;background:#FFD600;color:#222;font-weight:700;border:none;border-radius:20px;padding:6px 28px;font-size:16px;cursor:pointer;">Invite</button>
                </div>
                <ul style="color:#bfc6c3;font-size:15px;margin:10px 0 0 38px;padding:0;list-style:disc;">
                    <li>Invite friends to register and cumulatively trade more than $100 via Spot or Convert to get a one-time boost.</li>
                    <li>Ensure you have an ongoing round before your friends register and your friends complete the tasks during the same round that they're invited. Otherwise, there will be no boost from their task completion.</li>
                </ul>
            </div>
            <div style="background:#181d1b;border-radius:14px;padding:24px 30px;box-shadow:0 0 16px #0003;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;align-items:center;font-size:20px;font-weight:700;color:#fff;gap:10px;">
                    <span style="font-size:28px;">🦺</span> Task 2: Invite Friends to Trade &gt; $300
                    <button style="margin-left:auto;background:#FFD600;color:#222;font-weight:700;border:none;border-radius:20px;padding:6px 28px;font-size:16px;cursor:pointer;">Invite</button>
                </div>
                <ul style="color:#bfc6c3;font-size:15px;margin:10px 0 0 38px;padding:0;list-style:disc;">
                    <li>Invite friends to register and cumulatively trade more than $300 via Spot or Convert to get a one-time boost.</li>
                    <li>Ensure you have an ongoing round before your friends register and your friends complete the tasks during the same round that they're invited. Otherwise, there will be no boost from their task completion.</li>
                </ul>
            </div>
            <div style="background:#181d1b;border-radius:14px;padding:24px 30px;box-shadow:0 0 16px #0003;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;align-items:center;font-size:20px;font-weight:700;color:#fff;gap:10px;">
                    <span style="font-size:28px;">🦺</span> Task 3: Invite Friends to Trade &gt; $1,000
                    <button style="margin-left:auto;background:#FFD600;color:#222;font-weight:700;border:none;border-radius:20px;padding:6px 28px;font-size:16px;cursor:pointer;">Invite</button>
                </div>
                <ul style="color:#bfc6c3;font-size:15px;margin:10px 0 0 38px;padding:0;list-style:disc;">
                    <li>Invite friends to register and cumulatively trade more than $1,000 via Spot or Convert to get a one-time boost.</li>
                    <li>Ensure you have an ongoing round before your friends register and your friends complete the tasks during the same round that they're invited. Otherwise, there will be no boost from their task completion.</li>
                </ul>
            </div>
        </div>

        <!-- AVAILABLE REWARDS -->
        <div style="font-size:32px;font-weight:800;letter-spacing:2px;margin:70px 0 30px 0;">AVAILABLE REWARDS</div>
        <div style="width:700px;display:flex;flex-direction:column;gap:22px;">
            <div style="background:#181d1b;border-radius:14px;padding:24px 30px;box-shadow:0 0 16px #0003;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;align-items:center;font-size:20px;font-weight:700;color:#fff;gap:10px;">
                    <span style="color:#00e5ff;font-size:22px;">●</span> 2,000 USDC in Tokens
                    <button style="margin-left:auto;background:#FFD600;color:#222;font-weight:700;border:none;border-radius:20px;padding:6px 28px;font-size:16px;cursor:pointer;">Invite</button>
                </div>
                <div style="color:#bfc6c3;font-size:15px;margin:10px 0 0 38px;">
                    Complete up to 6 rounds to unlock up to 2,000 USDC in token vouchers.<br>
                    Limited rewards with a total prize pool of 500,000 USDC, first come, first served.<br>
                    <span style="color:#bfc6c3;">Distributed rewards: <span style="color:#FFD600;">$25,400</span></span>
                </div>
            </div>
        </div>

        <!-- MY PROGRESS -->
        <div style="font-size:32px;font-weight:800;letter-spacing:2px;margin:70px 0 30px 0;">MY PROGRESS</div>
        <div style="width:700px;display:flex;flex-direction:column;gap:22px;">
            <div style="display:flex;align-items:center;gap:10px;">
                <select style="background:#181d1b;color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:16px;font-weight:600;">
                    <option>Round 1 in progress</option>
                </select>
            </div>
            <div style="background:#181d1b;border-radius:14px;padding:24px 30px;box-shadow:0 0 16px #0003;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <div style="font-size:20px;font-weight:700;color:#fff;">Unclaimed Boosts</div>
                    <button style="background:#FFD600;color:#222;font-weight:700;border:none;border-radius:20px;padding:6px 28px;font-size:16px;cursor:pointer;">Invite Friends</button>
                </div>
                <div style="font-size:32px;font-weight:800;color:#FFD600;margin:10px 0 0 0;">0</div>
                <div style="color:#bfc6c3;font-size:15px;margin-top:8px;">Total Unclaimed</div>
                <div style="color:#bfc6c3;font-size:15px;margin-top:8px;">Remind your referred friends to complete the required trade tasks to boost your progress to 100%.</div>
            </div>
            <div style="color:#bfc6c3;font-size:14px;margin:10px 0 0 0;">
                <span style="color:#FFD600;font-size:18px;">●</span> The status will be updated within 4 hours after completion. Stay tuned!
            </div>
            <table style="width:100%;background:#181d1b;border-radius:14px;margin-top:10px;color:#fff;font-size:15px;box-shadow:0 0 16px #0003;">
                <thead>
                    <tr style="color:#bfc6c3;text-align:left;">
                        <th style="padding:12px 18px;">ID</th>
                        <th style="padding:12px 18px;">Date Received</th>
                        <th style="padding:12px 18px;">Reward Type</th>
                        <th style="padding:12px 18px;">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-top:1px solid #222;">
                        <td style="padding:12px 18px;">MyCryptoBank</td>
                        <td style="padding:12px 18px;">2025-04-28 10:16</td>
                        <td style="padding:12px 18px;">Special Bonus</td>
                        <td style="padding:12px 18px;color:#FFD600;">+ 25 USDC</td>
                    </tr>
                    <tr style="border-top:1px solid #222;">
                        <td style="padding:12px 18px;">MyCryptoBank</td>
                        <td style="padding:12px 18px;">2025-04-28 08:49</td>
                        <td style="padding:12px 18px;">Special Bonus</td>
                        <td style="padding:12px 18px;color:#FFD600;">+ 1.107 USDC</td>
                    </tr>
                    <tr style="border-top:1px solid #222;">
                        <td style="padding:12px 18px;">MyCryptoBank</td>
                        <td style="padding:12px 18px;">2025-04-28 08:47</td>
                        <td style="padding:12px 18px;">Special Bonus</td>
                        <td style="padding:12px 18px;color:#FFD600;">+ 18.5964 USDC</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- MY REFERRALS (UPDATED SPACING & CENTERING) -->
        <div style="font-size:32px;font-weight:800;letter-spacing:2px;margin:70px 0 30px 0;text-align:center;text-shadow:0 0 8px #000;">MY REFERRALS</div>
        <div style="width:700px;max-width:95vw;margin:0 auto 60px auto;display:flex;flex-direction:column;align-items:center;">
            <div style="color:#FFD600;font-size:20px;display:flex;align-items:center;gap:10px;margin-bottom:6px;width:100%;">
                <span style="font-size:26px;">&#9888;</span>
                <span style="color:#fff;font-size:15px;">The status will be updated within 6 hours after completion. Stay tuned!</span>
            </div>
            <div style="color:#FFD600;font-size:20px;display:flex;align-items:center;gap:10px;margin-bottom:22px;width:100%;">
                <span style="font-size:26px;">&#9888;</span>
                <span style="color:#fff;font-size:15px;">If any of the users you invited are labeled as risky, your eligibility to receive rewards might be affected.</span>
            </div>
            <div style="background:#101316;border-radius:24px;padding:0 0 40px 0;box-shadow:0 0 16px #0003;width:100%;">
                <table style="width:100%;border-collapse:separate;border-spacing:0 0;color:#bfc6c3;font-size:18px;background:transparent;">
                    <thead>
                        <tr style="color:#bfc6c3;text-align:left;">
                            <th style="padding:12px 18px;">ID</th>
                            <th style="padding:12px 18px;;">Registration Date</th>
                            <th style="padding:12px 18px;;">Task 1 Completion</th>
                            <th style="padding:12px 18px;;">Task 2 Completion</th>
                            <th style="padding:12px 18px;;">Task 3 Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="5" style="padding:60px 0 0 0;">
                                <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;">
                                    <!-- SVG icon for magnifying glass over document -->
                                    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="18" y="18" width="54" height="60" rx="8" fill="#23272b"/>
                                        <rect x="26" y="28" width="38" height="8" rx="2" fill="#35393d"/>
                                        <rect x="26" y="42" width="38" height="8" rx="2" fill="#35393d"/>
                                        <rect x="26" y="56" width="24" height="8" rx="2" fill="#35393d"/>
                                        <circle cx="62" cy="70" r="10" fill="#35393d"/>
                                        <circle cx="62" cy="70" r="6" fill="#23272b"/>
                                        <rect x="70" y="78" width="8" height="4" rx="2" transform="rotate(45 70 78)" fill="#35393d"/>
                                    </svg>
                                    <div style="color:#bfc6c3;font-size:24px;margin-top:18px;">No referrals found</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5" style="padding:40px 0 0 0;">
                                <div style="display:flex;justify-content:center;">
                                    <button style="background:#FFD600;color:#222;font-size:24px;font-weight:700;border:none;border-radius:10px;padding:18px 0;width:420px;cursor:pointer;box-shadow:0 2px 8px #0002;">Invite Friends</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- MY REWARDS -->
        <div style="font-size:32px;font-weight:800;letter-spacing:2px;margin:70px 0 30px 0;">MY REWARDS</div>
        <div style="width:700px;display:flex;flex-direction:column;gap:22px;">
            <div style="color:#bfc6c3;font-size:14px;margin:10px 0 0 0;">
                <span style="color:#FFD600;font-size:18px;">●</span> After the activity ends, you can still check your reward history on the referral dashboard.
            </div>
            <table style="width:100%;background:#181d1b;border-radius:14px;margin-top:10px;color:#fff;font-size:15px;box-shadow:0 0 16px #0003;">
                <thead>
                    <tr style="color:#bfc6c3;text-align:left;">
                        <th style="padding:12px 18px;">Task Type</th>
                        <th style="padding:12px 18px;">Reward Type</th>
                        <th style="padding:12px 18px;">Distribution Date</th>
                        <th style="padding:12px 18px;">Bonus</th>
                        <th style="padding:12px 18px;">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5" style="text-align:center;padding:40px 0;color:#bfc6c3;">
                            <div style="display:flex;flex-direction:column;align-items:center;">
                                <span style="font-size:48px;">📄</span>
                                <div style="margin-top:10px;">No rewards found</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- ...end of new section... -->

    <!-- RULES SECTION -->
    <div style="width:100vw;display:flex;flex-direction:column;align-items:center;margin:90px 0 40px 0;">
        <div style="font-size:48px;font-weight:800;letter-spacing:2px;text-align:center;margin-bottom:36px;">RULES</div>
        <div style="background:#111;border-radius:16px;box-shadow:0 0 40px 0 #000a;width:800px;max-width:95vw;padding:36px 36px 28px 36px;color:#fff;font-size:16px;line-height:1.7;">
            <div style="margin-bottom:18px;">Activity period:</div>
            <div style="color:#bfc6c3;margin-bottom:18px;">2025/03/06 08:52 - 2025/06/06 23:59 UTC+0</div>
            <div style="font-weight:700;margin-bottom:8px;">I. Referral Rounds and Rewards</div>
            <ol style="margin:0 0 18px 18px;padding:0;color:#bfc6c3;">
                <li>Each eligible user can complete up to 6 referral rounds to earn up to 2,000 USDC in token vouchers.</li>
                <li>To unlock USDC rewards in a round, users must reach 100% progress by inviting friends to complete the required tasks. Otherwise, the progress accumulated in that round will be void if the 10-day period for each round passes.</li>
                <li>Each successful task completed by eligible referrals will boost your round progress by 0.005% to 10%.</li>
                <li>The rewards for each round will increase progressively with the difficulty of the tasks. To unlock higher rewards, you will need to invite more users.<br>
                    The rewards for each round are as follows:<br>
                    - Round 1: 50 USDC<br>
                    - Round 2: 80 USDC<br>
                    - Round 3: 120 USDC<br>
                    - Round 4: 250 USDC<br>
                    - Round 5: 500 USDC<br>
                    - Round 6: 1000 USDC
                </li>
            </ol>
            <div style="font-weight:700;margin-bottom:8px;">II. How to Participate and Tasks</div>
            <ol style="margin:0 0 18px 18px;padding:0;color:#bfc6c3;">
                <li>Each participant should follow these steps to join the campaign.<br>
                    - Step 1: Click [OK] to begin a new referral round on this campaign page.<br>
                    - Step 2: Share your unique campaign referral link/ID from this page with your friends.<br>
                    - Step 3: Encourage your referred friends to complete the required 3 trade tasks to boost your round progress.<br>
                    - Step 4: Repeat the above steps until your round progress reaches 100%.
                </li>
                <li>Required Tasks for New Referrals: New referrals must complete the following trade tasks via Spot or Convert. Each task completion will boost the inviter's round progress once.<br>
                    - Task 1: Achieve a cumulative trading volume of over $100<br>
                    - Task 2: Achieve a cumulative trading volume of over $300<br>
                    - Task 3: Achieve a cumulative trading volume of over $1,000<br>
                    *As an exclusive benefit for new referrals from this campaign, each task completion will also boost their own progress. New referrals should ensure they start the round before completing tasks.
                </li>
            </ol>
            <div style="font-weight:700;margin-bottom:8px;">III. Terms and Conditions</div>
            <ol style="margin:0 0 18px 18px;padding:0;color:#bfc6c3;">
                <li>Certain regions or countries are not eligible to participate in this activity. Users in restricted regions are disqualified from participating in the MyCryptoBank Referral Program as referrers or referred users.</li>
                <li>Each new user can only be referred to MyCryptoBank via one referral mode. New users registered through this activity's referral link will not be eligible for rewards from other referral modes.</li>
                <li>Trading volumes on Spot zero-fee trading pairs and USDT/DAI, as well as any Convert trades between USDT, USDC, FDUSD, TUSD, DAI, USDP, USDC, BUSD, AEUR, and EUR, will not be considered as valid.</li>
                <li>Referrers can boost their reward progress by 0.005% to 10% with each task completion of every successful referral during the Promotion Period. The value of the boost will be determined by the referee's historical activity with MyCryptoBank.</li>
                <li>MyCryptoBank reserves the right to disqualify and revoke rewards for participants who engage in dishonest or abusive activities during the promotion. This includes, but is not limited to, registering from the same IP or device, bulk account registrations to farm additional bonuses, and any other activity connected with unlawful, fraudulent, or harmful purposes.</li>
                <li>MyCryptoBank reserves the right of final interpretation of this promotion.</li>
            </ol>
            <div style="margin-top:10px;"><a href="#" style="color:#FFD600;text-decoration:underline;font-size:16px;">Detail Rules</a></div>
        </div>
        <div style="width:800px;max-width:95vw;text-align:center;margin:30px 0 0 0;">
            <a href="#" style="color:#fff;font-size:16px;font-weight:600;text-decoration:none;">View Activity History &amp; Overview &nbsp;&rsaquo;</a>
        </div>
    </div>
    <!-- ...end of RULES section... -->

    <!-- INVITE MODAL POPUP (hidden by default) -->
    <div id="inviteModalOverlay" class="invite-modal-overlay">
        <div class="invite-modal">
            <button class="invite-modal-close" onclick="document.getElementById('inviteModalOverlay').classList.remove('active')">&times;</button>
            <div class="invite-modal-card">
                <h2>WIN UP TO 2,000 USDC!</h2>
                <p>Let's earn together by joining MyCryptoBank's time-limited referral campaign.</p>
                <div class="hashtag">#MyCryptoBankEarnTogether</div>
                <div class="invite-img">
                    <!-- Coin stack SVG -->
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none"><ellipse cx="35" cy="60" rx="20" ry="6" fill="#2d3a5a"/><rect x="15" y="30" width="40" height="30" rx="8" fill="#2d3a5a"/><ellipse cx="35" cy="30" rx="20" ry="8" fill="#3b4e7e"/><ellipse cx="35" cy="30" rx="14" ry="5" fill="#fff" fill-opacity=".12"/><ellipse cx="35" cy="30" rx="8" ry="3" fill="#fff" fill-opacity=".18"/><ellipse cx="35" cy="20" rx="14" ry="6" fill="#4e6bb3"/><ellipse cx="35" cy="20" rx="8" ry="3" fill="#fff" fill-opacity=".18"/><ellipse cx="35" cy="10" rx="14" ry="6" fill="#5e7fd1"/><ellipse cx="35" cy="10" rx="8" ry="3" fill="#fff" fill-opacity=".18"/><text x="28" y="16" font-size="14" fill="#fff" font-weight="bold">$</text></svg>
                </div>
                <div class="binance-row">
                    <div class="binance-logo">
                        <img src="./img/logo.jpg" alt="MyCryptoBank"/>
                       <a href="https://mycryptobank.co" target="_blank"> <span>My Crypto Bank</span></a>
                    </div>
                    <!-- <span class="binance-url">mycryptobank.co</span> -->
                    <div class="qr">
                        <!-- Placeholder QR code -->
                        <img src="./img/qr.png" alt="QR" width="44" height="44"/>
                    </div>
                </div>
            </div>
            <div class="invite-modal-row">
                <span class="invite-modal-row-label">Referral ID</span>
                <span class="invite-modal-row-value" id="referralIdValue" style="color:#fff; font-weight:600;"><?php echo $referId; ?></span>
                <button class="invite-modal-copy" onclick="navigator.clipboard.writeText(document.getElementById('referralIdValue').innerText)"><svg width='18' height='18' fill='none' stroke='#FFD600' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='4' width='10' height='10' rx='2'/><path d='M8 2h6a2 2 0 0 1 2 2v10'/></svg></button>
            </div>
            <div class="invite-modal-row">
                <span class="invite-modal-row-label">Referral Link</span>
                <span class="invite-modal-row-value" id="referralLinkValue"><?php echo $referralLink; ?></span>
                <button class="invite-modal-copy" onclick="navigator.clipboard.writeText(document.getElementById('referralLinkValue').innerText)"><svg width='18' height='18' fill='none' stroke='#FFD600' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='4' width='10' height='10' rx='2'/><path d='M8 2h6a2 2 0 0 1 2 2v10'/></svg></button>
            </div>
            <div class="invite-modal-share-row">
                <button class="invite-modal-share-btn" onclick="document.getElementById('inviteModalOverlay').classList.remove('active')"><span style="font-size:22px;">&#10006;</span></button>
                <button class="invite-modal-share-btn" onclick="shareOnFacebook()"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="fb" style="width:22px;height:22px;filter:invert(1);"/></button>
                <button class="invite-modal-share-btn" onclick="shareOnTelegram()"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg" alt="tg" style="width:22px;height:22px;filter:invert(1);"/></button>
                <button class="invite-modal-share-btn" onclick="shareOnReddit()"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg" alt="rd" style="width:22px;height:22px;filter:invert(1);"/></button>
                <button class="invite-modal-share-btn" onclick="shareOnWhatsApp()"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="wa" style="width:22px;height:22px;filter:invert(1);"/></button>
                <button class="invite-modal-share-btn" onclick="copyReferralLink()"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/link.svg" alt="lnk" style="width:22px;height:22px;filter:invert(1);"/></button>
                <button class="invite-modal-share-btn" onclick="shareOnX()"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="x" style="width:22px;height:22px;filter:invert(1);"/></button>
            </div>
        </div>
    </div>
    <script>
    const referralLink = '<?php echo "https://" . $referralLink; ?>';
   
    const referralId = '<?php echo $referId; ?>';
    const shareText = encodeURIComponent(
      'Join me on My Crypto Bank and earn rewards! Referral Link: ' + referralLink + ' | *🔑 Referral ID: ' + referralId + '*'
    );
    function shareOnFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(referralLink) + '&quote=' + shareText, '_blank');
    }
    function shareOnTelegram() {
        window.open('https://t.me/share/url?url=' + encodeURIComponent(referralLink) + '&text=' + shareText, '_blank');
    }
    function shareOnReddit() {
        window.open('https://www.reddit.com/submit?url=' + encodeURIComponent(referralLink) + '&title=' + shareText, '_blank');
    }
    function shareOnWhatsApp() {
        window.open('https://wa.me/?text=' + shareText, '_blank');
    }
    function copyReferralLink() {
        navigator.clipboard.writeText('Link: ' + referralLink + '\nID: ' + referralId);
        alert('Referral link and ID copied!');
    }
    function shareOnX() {
        window.open('https://twitter.com/intent/tweet?text=' + shareText, '_blank');
    }
    // Fix: Open modal on Invite/Invite Friends button click (but not on share buttons)
    document.querySelectorAll('button').forEach(btn => {
        if ((btn.textContent.trim() === 'Invite' || btn.textContent.trim() === 'Invite Friends') && !btn.classList.contains('invite-modal-share-btn')) {
            btn.onclick = function() {
                document.getElementById('inviteModalOverlay').classList.add('active');
            }
        }
    });
    </script>
    <!-- ...end of INVITE MODAL POPUP... -->

    <!-- WITHDRAW MODAL POPUP (hidden by default) -->
    <div id="withdrawModalOverlay" class="withdraw-modal-overlay">
        <div class="withdraw-modal">
            <button class="withdraw-modal-close" onclick="document.getElementById('withdrawModalOverlay').classList.remove('active')">&times;</button>
            <div class="wallet-img">
                <!-- Wallet with coin SVG -->
                <svg width="90" height="70" viewBox="0 0 90 70" fill="none">
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <rect x="18" y="22" width="54" height="36" rx="8" fill="#FFD600"/>
                    <ellipse cx="45" cy="18" rx="16" ry="10" fill="#fff"/>
                    <ellipse cx="45" cy="18" rx="13" ry="8" fill="#23272b"/>
                    <text x="39" y="24" font-size="18" fill="#fff" font-weight="bold">$</text>
                    <rect x="65" y="38" width="10" height="10" rx="2" fill="#23272b"/>
                    <polygon points="75,43 70,48 70,38" fill="#fff"/>
                </svg>
            </div>
            <div class="withdraw-modal-title">WITHDRAW</div>
            <div class="withdraw-modal-msg">Withdraw is available when the progress<br>reaches 100%</div>
            <button class="withdraw-modal-invite-btn" onclick="document.getElementById('withdrawModalOverlay').classList.remove('active');document.getElementById('inviteModalOverlay').classList.add('active');">Invite Friends</button>
        </div>
    </div>
    <script>
    // Open withdraw modal on Withdraw button click
    Array.from(document.querySelectorAll('.withdraw')).forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            document.getElementById('withdrawModalOverlay').classList.add('active');
        }
    });
    </script>
    <!-- ...end of WITHDRAW MODAL POPUP... -->
</body>
</html>
