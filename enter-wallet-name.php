<?php
session_start();
// Check if passcode exists in session
if (!isset($_SESSION['passcode'])) {
    header('Location: new-login.php');
    exit;
}

$passcode = $_SESSION['passcode'];
// We no longer need the stored wallet name from the initial check here
// $storedWalletName = isset($_SESSION['wallet_name']) ? $_SESSION['wallet_name'] : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <title>Enter Wallet Name</title> -->
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
    .wallet-container {
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
    .wallet-container h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 18px;
      color: #fff;
      text-align: left;
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
    #walletNameMessage {
      color: #F0B90B;
      font-size: 14px;
      margin-top: 5px;
    }
    @media (max-width: 768px) {
      .wallet-container {
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
      .wallet-container h2 {
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
    }
    @media (max-width: 480px) {
      .wallet-container {
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
      .wallet-container h2 {
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
    }
  </style>
</head>
<body>
  <div class="wallet-container">
    <div class="binance-logo">
      <img src="./img/logo.jpg" alt="logo">
      <span>MyCryptoBank</span>
    </div>
    <h2>Enter Wallet Name</h2>
    <form id="walletForm">
      <div class="form-group">
        <label for="walletName">Wallet Name</label>
        <input type="text" id="walletName" name="walletName" maxlength="20" placeholder="Enter your wallet name" required>
        <div id="walletNameMessage"></div>
      </div>
      <button class="next-btn" type="submit" id="nextBtn" disabled>Next</button>
    </form>
  </div>

  <script>
    const passcode = '<?php echo addslashes($passcode); ?>';
    let isWalletNameValid = false;
    const nextBtn = document.getElementById('nextBtn');
    const messageDiv = document.getElementById('walletNameMessage');

    document.getElementById('walletName').addEventListener('input', function(e) {
      const walletName = this.value.trim();
      
      if (walletName.length > 0) {
        // We no longer check against a stored wallet name on input. Validation happens on submit.
        messageDiv.textContent = ''; // Clear previous messages
        nextBtn.disabled = false; // Enable the button once there's text
      } else {
        messageDiv.textContent = '';
        nextBtn.disabled = true;
      }
    });

    document.getElementById('walletForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const walletName = document.getElementById('walletName').value.trim();
      
      if (walletName.length === 0) {
        messageDiv.textContent = 'Please enter your wallet name.';
        messageDiv.style.color = '#ff4d4f';
        return;
      }

      // Send passcode and wallet name to check-passcode-and-wallet.php
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
      .then(data => {
        console.log('Response from check-passcode-and-wallet.php:', data);
        if (data.success) {
          // Match found, store wallet name and recovery words in session
          fetch('set-session-data.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                passcode: passcode,
                wallet_name: data.wallet_name, // Use wallet name from the response
                recovery_words: data.recovery_words
            })
          })
          .then(response => response.json())
          .then(setData => {
            console.log('Response from set-session-data.php after wallet verification:', setData);
            if (setData.success) {
              // Session data set, redirect to new-password.php
              window.location.href = 'new-password.php';
            } else {
              console.error('Error setting session data after wallet verification:', setData.message);
              messageDiv.textContent = 'Error setting session data. Please try again.';
              messageDiv.style.color = '#ff4d4f';
            }
          })
          .catch(error => {
            console.error('Fetch error for set-session-data.php after wallet verification:', error);
            messageDiv.textContent = 'An error occurred. Please try again.';
            messageDiv.style.color = '#ff4d4f';
          });
        } else {
          console.error('Verification failed:', data.message);
          messageDiv.textContent = data.message || 'Invalid passcode or wallet name.';
          messageDiv.style.color = '#ff4d4f';
        }
      })
      .catch(error => {
        console.error('Fetch error for check-passcode-and-wallet.php:', error);
        messageDiv.textContent = 'An error occurred during verification. Please try again.';
        messageDiv.style.color = '#ff4d4f';
      });
    });
  </script>
</body>
</html> 