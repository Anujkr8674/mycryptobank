<!DOCTYPE html>
<html>
<head>
    <style>
        .button-container {
            display: flex;
            gap: 12px;
            margin-top: 16px;
        }

        .task-button {
            padding: 8px 24px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            border: none;
            transition: all 0.3s ease;
        }

        .do-task-btn {
            background-color: #FCD535;
            color: #1E2329;
        }

        .rules-btn {
            background-color: transparent;
            border: 1px solid #848E9C;
            color: #848E9C;
        }

        .rules-btn:hover {
            border-color: #FCD535;
            color: #FCD535;
        }

        .do-task-btn:hover {
            background-color: #F0B90B;
        }

        /* Popup Styles */
        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }

        .popup-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #1E2329;
            padding: 24px;
            border-radius: 8px;
            max-width: 480px;
            width: 90%;
            color: #EAECEF;
        }

        .popup-header {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
            color: #EAECEF;
        }

        .popup-body {
            color: #848E9C;
            font-size: 14px;
            line-height: 1.5;
        }

        .ok-button {
            width: 100%;
            padding: 12px;
            background-color: #FCD535;
            color: #1E2329;
            border: none;
            border-radius: 4px;
            margin-top: 20px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s ease;
        }

        .ok-button:hover {
            background-color: #F0B90B;
        }
    </style>
</head>
<body>
    <div class="button-container">
        <button class="task-button do-task-btn" onclick="handleDoTask()">Do Task</button>
        <button class="task-button rules-btn" onclick="showRulesPopup()">Rules</button>
    </div>

    <!-- Rules Popup -->
    <div id="rulesPopup" class="popup-overlay">
        <div class="popup-content">
            <div class="popup-header">Task Rules</div>
            <div class="popup-body">
                <h3>Reward</h3>
                <p>Reward: 20 USDT Trading Fee Rebate Voucher (Spot)</p>
                
                <h3>General Rules</h3>
                <p>1. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.</p>
                <p>2. Binance reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions.</p>
                <p>3. Binance reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice.</p>
                <p>4. Where any discrepancy arises between the translated versions, the English version shall prevail.</p>
                <button class="ok-button" onclick="hideRulesPopup()">OK</button>
            </div>
        </div>
    </div>

    <script>
        function handleDoTask() {
            window.location.href = 'index.php';
        }

        function showRulesPopup() {
            document.getElementById('rulesPopup').style.display = 'block';
        }

        function hideRulesPopup() {
            document.getElementById('rulesPopup').style.display = 'none';
        }
    </script>
</body>
</html> 