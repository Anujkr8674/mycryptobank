<?php
session_start();
require_once 'check-persistent-login.php';

// If user is already logged in, redirect to dashboard
if (isset($_SESSION['is_logged_in']) && $_SESSION['is_logged_in'] === true) {
    header('Location: crm-dashboard.php');
    exit;
}

// Check if passcode exists in session
$hasPasscode = isset($_SESSION['passcode']);
$passcode = $hasPasscode ? $_SESSION['passcode'] : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
      background: #181A20;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .login-container {
      background: #1E2329;
      border-radius: 20px;
      box-shadow: 0 0 16px 0 rgba(0,0,0,0.4);
      padding: 48px 36px 36px 36px;
      width: 100%;
      max-width: 420px;
      color: #fff;
      position: relative;
    }
    .binance-logo {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      justify-content: center;
    }
    .binance-logo img {
      height: 32px;
      width: 32px;
      margin-right: 8px;
      border-radius: 6px;
    }
    .binance-logo span {
      font-size: 22px;
      font-weight: 700;
      color: #F0B90B;
      letter-spacing: 1px;
    }
    .login-container h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 18px;
      color: #fff;
      text-align: left;
    }
    .qr-btn {
      position: absolute;
      right: 36px;
      top: 48px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }
    .qr-btn svg {
      width: 28px;
      height: 28px;
      fill: #F0B90B;
    }
    .form-group {
      margin-bottom: 18px;
    }
    .form-group label {
      display: block;
      font-size: 15px;
      margin-bottom: 6px;
      color: #fff;
      font-weight: 600;
    }
    .form-group input[type="text"] {
      width: 100%;
      padding: 13px 14px;
      font-size: 16px;
      border: 1.5px solid #353945;
      border-radius: 8px;
      background: #181A20;
      color: #fff;
      margin-bottom: 0;
      outline: none;
      transition: border-color 0.3s;
    }
    .form-group input[type="text"]:focus {
      border-color: #F0B90B;
    }
    .next-btn {
      width: 100%;
      padding: 15px 0;
      background: #F0B90B;
      color: #181A20;
      border: none;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 18px;
      transition: background 0.2s;
    }
    .next-btn:hover {
      background: #e5a800;
    }
    .next-btn:disabled {
      background: #353945;
      cursor: not-allowed;
    }
    .or-divider {
      display: flex;
      align-items: center;
      text-align: center;
      color: #848E9C;
      margin: 18px 0 12px 0;
      font-size: 13px;
    }
    .or-divider::before, .or-divider::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #353945;
      margin: 0 8px;
    }
    .footer-link {
      text-align: center;
      margin-top: 18px;
      font-size: 15px;
      color: #F0B90B;
      font-weight: 600;
      text-decoration: none;
      display: block;
    }
    .footer-link:hover {
      text-decoration: underline;
    }
    #walletNameMessage, #passcodeMessage {
      color: #F0B90B;
      font-size: 14px;
      margin-top: 5px;
    }
    .wallet-section {
      display: none;
    }
    .wallet-section.active {
      display: block;
    }
    .passcode-section {
      display: block;
    }
    .passcode-section.hidden {
      display: none;
    }
    @media (max-width: 768px) {
      .login-container {
        max-width: 98vw;
        padding: 24px 8vw 20px 8vw;
        border-radius: 12px;
      }
      .binance-logo img {
        height: 26px;
        width: 26px;
      }
      .binance-logo span {
        font-size: 17px;
      }
      .login-container h2 {
        font-size: 22px;
      }
      .next-btn {
        font-size: 15px;
        padding: 10px 0;
      }
      .form-group input[type="text"] {
        font-size: 14px;
        padding: 10px 10px;
      }
      .footer-link {
        font-size: 13px;
      }
    }
    @media (max-width: 480px) {
      .login-container {
        padding: 10px 2vw 10px 2vw;
        border-radius: 0;
        min-width: unset;
        box-shadow: none;
      }
      .binance-logo img {
        height: 20px;
        width: 20px;
      }
      .binance-logo span {
        font-size: 13px;
      }
      .login-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .form-group label {
        font-size: 11px;
      }
      .form-group input[type="text"] {
        font-size: 12px;
        padding: 8px 8px;
        border-radius: 5px;
      }
      .next-btn {
        font-size: 12px;
        padding: 8px 0;
        border-radius: 5px;
      }
      .or-divider {
        font-size: 11px;
        margin: 12px 0 8px 0;
      }
      .footer-link {
        font-size: 11px;
        margin-top: 8px;
      }
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="binance-logo">
      <img src="./img/logo.jpg" alt="logo">
      <span>MyCryptoBank</span>
    </div>
    <button class="qr-btn" title="QR Code">
      <svg viewBox="0 0 24 24"><path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm10-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h6v6h-6v-6zm2 2v2h2v-2h-2z"/></svg>
    </button>
    <h2 id="loginTitle">Log in</h2>
    <form id="combinedForm">
      <div class="form-group">
        <label for="passcode">Passcode</label>
        <input type="text" id="passcode" maxlength="6" placeholder="Enter your passcode" required inputmode="numeric" pattern="[0-9]*">
        <div id="passcodeMessage"></div>
      </div>
      <div class="form-group">
        <label for="walletName">Wallet Name</label>
        <input type="text" id="walletName" name="walletName" maxlength="20" placeholder="Enter your wallet name" required>
        <div id="walletNameMessage"></div>
      </div>
      <button class="next-btn" type="submit" id="combinedNextBtn" disabled>Next</button>
      <div class="or-divider">or</div>
    </form>
    <a href="./signup-new.php" class="footer-link">Create a MyCryptoBank Account</a>
  </div>

  <script>
    const passcodeInput = document.getElementById('passcode');
    const walletNameInput = document.getElementById('walletName');
    const combinedForm = document.getElementById('combinedForm');
    const combinedNextBtn = document.getElementById('combinedNextBtn');
    const passcodeMessage = document.getElementById('passcodeMessage');
    const walletNameMessage = document.getElementById('walletNameMessage');

    // Enable button only if both fields have values
    function validateInputs() {
      if (passcodeInput.value.trim().length > 0 && walletNameInput.value.trim().length > 0) {
        combinedNextBtn.disabled = false;
      } else {
        combinedNextBtn.disabled = true;
      }
    }
    passcodeInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
      passcodeMessage.textContent = '';
      validateInputs();
    });
    walletNameInput.addEventListener('input', function() {
      walletNameMessage.textContent = '';
      validateInputs();
    });

    combinedForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const passcode = passcodeInput.value.trim();
      const walletName = walletNameInput.value.trim();
      let hasError = false;
      if (passcode.length === 0) {
        passcodeMessage.textContent = 'Please enter your passcode.';
        passcodeMessage.style.color = '#ff4d4f';
        hasError = true;
      }
      if (walletName.length === 0) {
        walletNameMessage.textContent = 'Please enter your wallet name.';
        walletNameMessage.style.color = '#ff4d4f';
        hasError = true;
      }
      if (hasError) return;
      // Step 1: Check passcode
      fetch('check-passcode.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'passcode=' + encodeURIComponent(passcode)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Set passcode in session
          fetch('set-session-passcode.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'passcode=' + encodeURIComponent(passcode)
          })
          .then(response => response.json())
          .then(setData => {
            if (setData.success) {
              // Step 2: Check wallet name
              fetch('check-passcode-and-wallet.php', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  passcode: passcode,
                  wallet_name: walletName
                })
              })
              .then(response => response.json())
              .then(data2 => {
                if (data2.success) {
                  // Set wallet name and recovery words in session
                  fetch('set-session-data.php', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      passcode: passcode,
                      wallet_name: data2.wallet_name,
                      recovery_words: data2.recovery_words
                    })
                  })
                  .then(response => response.json())
                  .then(setData2 => {
                    if (setData2.success) {
                      window.location.href = 'new-password.php';
                    } else {
                      walletNameMessage.textContent = 'Error setting session data. Please try again.';
                      walletNameMessage.style.color = '#ff4d4f';
                    }
                  })
                  .catch(() => {
                    walletNameMessage.textContent = 'An error occurred. Please try again.';
                    walletNameMessage.style.color = '#ff4d4f';
                  });
                } else {
                  walletNameMessage.textContent = data2.message || 'Invalid passcode or wallet name.';
                  walletNameMessage.style.color = '#ff4d4f';
                }
              })
              .catch(() => {
                walletNameMessage.textContent = 'An error occurred during verification. Please try again.';
                walletNameMessage.style.color = '#ff4d4f';
              });
            } else {
              passcodeMessage.textContent = 'Error setting session passcode: ' + (setData.message || 'Unknown error');
              passcodeMessage.style.color = '#ff4d4f';
            }
          })
          .catch(() => {
            passcodeMessage.textContent = 'An error occurred while setting session passcode. Please try again.';
            passcodeMessage.style.color = '#ff4d4f';
          });
        } else {
          passcodeMessage.textContent = data.message || 'Invalid passcode';
          passcodeMessage.style.color = '#ff4d4f';
        }
      })
      .catch(() => {
        passcodeMessage.textContent = 'An error occurred. Please try again.';
        passcodeMessage.style.color = '#ff4d4f';
      });
    });

    // Replace the previous history entry with combined-login.php
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, '', 'combined-login.php');
    }
  </script>
</body>
</html> 