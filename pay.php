<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <title>MyCryptoBankPay</title> -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: #0b0e11;
            color: #fff;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }

        .floating-coins {
            position: absolute;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            pointer-events: none;
        }

        .coin {
            position: absolute;
            width: 60px;
            height: 60px;
            background: #f0b90b;
            border-radius: 50%;
        }

        .coin:nth-child(1) {
            top: 20px;
            right: 20px;
            width: 80px;
            height: 80px;
        }

        .coin:nth-child(2) {
            top: 60px;
            right: 120px;
            width: 40px;
            height: 40px;
        }

        .coin:nth-child(3) {
            top: 140px;
            right: 60px;
            width: 50px;
            height: 50px;
        }

        .diamond {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #2b3139;
            transform: rotate(45deg);
        }

        .diamond:nth-child(1) {
            top: 10px;
            right: 140px;
        }

        .diamond:nth-child(2) {
            top: 80px;
            right: 40px;
        }

        header {
            padding: 40px 0 20px;
        }

        header h1 {
            font-size: 48px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #fff;
        }

        .subtitle {
            color: #848e9c;
            font-size: 16px;
        }

        .user-info {
            margin: 40px 0;
            padding: 20px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
        }

        .user-info h2 {
            font-size: 28px;
            margin-bottom: 15px;
            font-weight: 500;
        }

        .user-details {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #848e9c;
            font-size: 14px;
        }

        .binance-id {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .copy-icon {
            cursor: pointer;
            opacity: 0.7;
        }

        .settings, .pay-limit {
            cursor: pointer;
            color: #f0b90b;
        }

        .divider {
            color: #2b3139;
        }

        .action-buttons {
            position: absolute;
            top: 20px;
            right: 0;
            display: flex;
            gap: 15px;
        }

        .send-btn, .receive-btn {
            padding: 8px 24px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            min-width: 100px;
        }

        .send-btn {
            background-color: #f0b90b;
            color: #0b0e11;
        }

        .receive-btn {
            background-color: #2b3139;
            color: #fff;
        }

        .content-section {
            display: flex;
            gap: 40px;
            margin-top: 40px;
        }

        .transactions {
            flex: 1;
        }

        .faq {
            flex: 1;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }

        .section-header h3 {
            font-size: 20px;
            font-weight: 500;
        }

        .view-all {
            color: #f0b90b;
            text-decoration: none;
            font-size: 14px;
        }

        .no-transactions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            color: #848e9c;
            padding: 60px 0;
        }

        .no-transactions img {
            width: 48px;
            height: 48px;
            opacity: 0.5;
        }

        .faq-items {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .faq-item {
            padding: 16px;
            background-color: #1e2329;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .faq-item:hover {
            background-color: #2b3139;
        }

        .faq-item p {
            color: #848e9c;
            font-size: 14px;
            line-height: 1.4;
        }

        .toggle-ui {
            display: none;
            background-color: #1e2329;
            border-radius: 8px;
            padding: 30px;
            margin: 20px 0;
        }

        .steps-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
            position: relative;
        }

        .step {
            text-align: center;
            position: relative;
            flex: 1;
            z-index: 1;
        }

        .step-number {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #2b3139;
            color: #848e9c;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 10px;
            font-size: 14px;
        }

        .step.active .step-number {
            background: #f0b90b;
            color: #0b0e11;
        }

        .step-title {
            color: #848e9c;
            font-size: 14px;
        }

        .step.active .step-title {
            color: #fff;
        }

        .progress-bar {
            position: absolute;
            top: 12px;
            left: 0;
            right: 0;
            height: 1px;
            background: #2b3139;
            z-index: 0;
        }

        .send-tabs {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #2b3139;
        }

        .send-tab {
            padding: 10px 0;
            color: #848e9c;
            cursor: pointer;
            position: relative;
            font-size: 16px;
        }

        .send-tab.active {
            color: #fff;
        }

        .send-tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background: #f0b90b;
        }

        .send-description {
            color: #848e9c;
            font-size: 14px;
            margin-bottom: 30px;
        }

        .input-tabs {
            display: flex;
            background: #2b3139;
            border-radius: 4px;
            padding: 2px;
            margin-bottom: 15px;
            width: fit-content;
        }

        .input-tab {
            padding: 8px 24px;
            color: #848e9c;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
            transition: all 0.2s;
            user-select: none;
        }

        .input-tab.active {
            background: #0b0e11;
            color: #fff;
        }

        .send-input {
            width: 100%;
            padding: 16px;
            background: #2b3139;
            border: 1px solid transparent;
            border-radius: 4px;
            color: #fff;
            font-size: 16px;
            margin-bottom: 20px;
            transition: all 0.2s;
        }

        .send-input:focus {
            outline: none;
            border-color: #f0b90b;
        }

        .send-input::placeholder {
            color: #848e9c;
        }

        .continue-btn {
            width: 100%;
            padding: 16px;
            background: #2b3139;
            color: #848e9c;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 500;
            cursor: not-allowed;
            transition: all 0.2s;
        }

        .continue-btn:not(:disabled) {
            background: #f0b90b;
            color: #0b0e11;
            cursor: pointer;
        }

        .continue-btn:not(:disabled):hover {
            background: #8a7a1f;
        }

        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            display: none;
            z-index: 1000;
        }

        .popup-window {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 600px;
            background: #1e2329;
            border-radius: 8px;
            padding: 30px;
        }

        .close-popup {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #848e9c;
            cursor: pointer;
            font-size: 24px;
            line-height: 1;
        }

        .verification-popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #1e2329;
            border-radius: 12px;
            padding: 32px;
            width: 90%;
            max-width: 400px;
            text-align: center;
            z-index: 1001;
        }

        .verification-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 24px;
            background: #2b3139;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .verification-title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 16px;
            color: #fff;
        }

        .verification-text {
            color: #848e9c;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 24px;
        }

        .verification-text a {
            color: #f0b90b;
            text-decoration: none;
        }

        .verification-buttons {
            display: flex;
            gap: 16px;
        }

        .verification-buttons button {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
        }

        .verify-now-btn {
            background: #f0b90b;
            color: #0b0e11;
        }

        .cancel-btn {
            background: #2b3139;
            color: #fff;
        }
    </style>
    
</head>
<body style="background-color: #0b0e11; padding-top: 80px;">
    <div class="container">
        <div class="floating-coins">
            <div class="coin"></div>
            <div class="coin"></div>
            <div class="coin"></div>
            <div class="diamond"></div>
            <div class="diamond"></div>
        </div>

        <header>
            <h1>MyCryptoBank Pay</h1>
            <p class="subtitle">Send, receive and spend crypto</p>
        </header>

        <div class="user-info">
            <h2>Mirtha Vandoren sx2a</h2>
            <div class="user-details">
                <span class="binance-id">MyCryptoBank ID: 110207982 <span class="copy-icon">📋</span></span>
                <span class="divider">|</span>
                <span class="settings">Settings</span>
                <span class="divider">|</span>
                <span class="pay-limit">Pay Limit</span>
            </div>
            <div class="action-buttons">
                <button class="send-btn" onclick="toggleUI('send')">Send</button>
                <button class="receive-btn" onclick="toggleUI('receive')">Receive</button>
            </div>
        </div>

        <div class="toggle-ui" id="send-ui">
            <div class="steps-header">
                <div class="progress-bar"></div>
                <div class="step active">
                    <div class="step-number">1</div>
                    <div class="step-title">Send to</div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-title">Enter Amount</div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-title">Confirm Payment</div>
                </div>
            </div>

            <div class="send-tabs">
                <div class="send-tab active">Send To</div>
                <div class="send-tab">Common Payees</div>
            </div>

            <p class="send-description">Send crypto to MyCryptoBank users via email, phone number, or MyCryptoBankID</p>

            <div class="input-tabs">
                <div class="input-tab active" data-input-type="email">Email / Phone</div>
                <div class="input-tab" data-input-type="binance">MyCryptoBank ID</div>
            </div>

            <input type="text" class="send-input" id="main-send-input" placeholder="Enter email (e.g. user@example.com) or phone (e.g. +1234567890)">

            <button class="continue-btn" disabled>Continue</button>
        </div>

        <div class="toggle-ui" id="receive-ui">
            <h3>Receive Crypto</h3>
            <div class="qr-placeholder">
                <img src="https://via.placeholder.com/200" alt="QR Code Placeholder">
                <p>Scan QR code to receive payment</p>
            </div>
        </div>

        <div class="content-section">
            <div class="transactions">
                <div class="section-header">
                    <h3>Recent Transactions</h3>
                    <a href="#" class="view-all">View All</a>
                </div>
                <div class="no-transactions">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4NDhlOWMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB5MT0iMjEiIHgyPSIxNi42NSIgeTI9IjE2LjY1Ii8+PC9zdmc+" alt="No transactions">
                    <p>No transactions in the last 24 hours</p>
                </div>
            </div>

            <div class="faq">
                <div class="section-header">
                    <h3>FAQ</h3>
                    <a href="#" class="view-all">View All</a>
                </div>
                <div class="faq-items">
                    <div class="faq-item">
                        <p>How to Send Cryptocurrency to an Individual with MyCryptoBankPay</p>
                    </div>
                    <div class="faq-item">
                        <p>Why Haven't I Received the Cryptocurrency from MyCryptoBankPay?</p>
                    </div>
                    <div class="faq-item">
                        <p>MyCryptoBankPay Frequently Asked Questions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- New Popup Window -->
    <div class="popup-overlay" id="sendPopup">
        <div class="popup-window">
            <span class="close-popup" onclick="closePopup()">&times;</span>
            <div class="steps-header">
                <div class="progress-bar"></div>
                <div class="step active">
                    <div class="step-number">1</div>
                    <div class="step-title">Send to</div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-title">Enter Amount</div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-title">Confirm Payment</div>
                </div>
            </div>

            <div class="send-tabs">
                <div class="send-tab active">Send To</div>
                <div class="send-tab">Common Payees</div>
            </div>

            <p class="send-description">Send crypto to MyCryptoBankusers via email, phone number, or MyCryptoBankID</p>

            <div class="input-tabs">
                <div class="input-tab active" data-input-type="email">Email / Phone</div>
                <div class="input-tab" data-input-type="binance">MyCryptoBankID</div>
            </div>

            <input type="text" class="send-input" id="popup-send-input" placeholder="Enter email (e.g. user@example.com) or phone (e.g. +1234567890)">

            <button class="continue-btn" disabled>Continue</button>
        </div>
    </div>

    <!-- Add this new div after your existing popups -->
    <div class="verification-popup" id="verificationPopup">
        <div class="verification-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#848e9c">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke-width="2"/>
                <path d="M8 10h8M8 14h8" stroke-width="2"/>
            </svg>
        </div>
        <h2 class="verification-title">Verification Required</h2>
        <p class="verification-text">
            All new and existing users are required to complete Identity Verification to access the full range of MyCryptoBankproducts and services. 
            <a href="#">Learn more</a>
        </p>
        <div class="verification-buttons">
            <button class="cancel-btn" onclick="closeVerificationPopup()">Cancel</button>
            <button class="verify-now-btn" onclick="startVerification()">Verify Now</button>
        </div>
    </div>

    <script>
        function toggleUI(type) {
            if (type === 'send') {
                document.getElementById('sendPopup').style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                const receiveUI = document.getElementById('receive-ui');
                receiveUI.style.display = receiveUI.style.display === 'none' ? 'block' : 'none';
            }
        }

        function closePopup() {
            document.getElementById('sendPopup').style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Close popup when clicking outside
        document.getElementById('sendPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });

        // Enhanced input tab functionality
        document.querySelectorAll('.input-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const inputType = this.dataset.inputType;
                const input = this.closest('.popup-window, .toggle-ui').querySelector('.send-input');
                const allTabs = this.closest('.input-tabs').querySelectorAll('.input-tab');
                
                allTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                if (inputType === 'email') {
                    input.placeholder = 'Enter email (e.g. user@example.com) or phone (e.g. +1234567890)';
                } else if (inputType === 'binance') {
                    input.placeholder = 'Enter MyCryptoBankID (e.g. 123456789)';
                    showVerificationPopup(); // Show verification popup when switching to MyCryptoBankID
                }
                
                input.type = 'text';
                input.value = '';
                this.closest('.popup-window, .toggle-ui').querySelector('.continue-btn').disabled = true;
            });
        });

        // Enhanced input validation
        document.querySelector('.send-input').addEventListener('input', function(e) {
            const continueBtn = document.querySelector('.continue-btn');
            const activeTab = document.querySelector('.input-tab.active');
            const inputType = activeTab.dataset.inputType;
            const value = e.target.value.trim();
            
            if (inputType === 'email') {
                // Basic email or phone validation
                continueBtn.disabled = value.length < 3;
            } else {
                // MyCryptoBankID validation
                continueBtn.disabled = value.length < 4;
            }
        });

        // Add event listeners for tabs
        document.querySelectorAll('.send-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.send-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        function showVerificationPopup() {
            document.getElementById('verificationPopup').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeVerificationPopup() {
            document.getElementById('verificationPopup').style.display = 'none';
            document.body.style.overflow = '';
        }

        function startVerification() {
            // Add verification process logic here
            window.location.href = '#'; // Replace with actual verification URL
        }
    </script>
</body><?php include "footer.php" ?>
</html>
