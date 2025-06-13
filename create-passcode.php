<?php
session_start();
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$referralId = isset($_GET['ref']) ? htmlspecialchars($_GET['ref']) : '';

// Function to generate unique numeric user ID
function generateUniqueUserId() {
    // Generate a random number between 7-9 digits
    $length = rand(7, 9);
    $userId = '';
    for ($i = 0; $i < $length; $i++) {
        $userId .= rand(0, 9);
    }
    return $userId;
}
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
    .verify-container {
      background: #1E2329;
      border-radius: 24px;
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
    .verify-container h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 18px;
      color: #fff;
      text-align: left;
    }
    .verify-message {
      color: #b7bdc6;
      font-size: 16px;
      margin-bottom: 28px;
      line-height: 1.5;
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
      border: 2px solid #F0B90B;
      border-radius: 8px;
      background: #181A20;
      color: #fff;
      margin-bottom: 0;
      outline: none;
      transition: border-color 0.3s;
    }
    .form-group input[type="text"]:focus {
      border-color: #e5a800;
    }
    .code-sent {
      position: absolute;
      right: 50px;
      top: 260px;
      color: #848E9C;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .verify-btn {
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
    .verify-btn:hover {
      background: #e5a800;
    }
    .resend-link {
      text-align: center;
      color: #F0B90B;
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
      text-decoration: none;
      display: block;
    }
    @media (max-width: 768px) {
      .verify-container {
        max-width: 98vw;
        padding: 50px;
        border-radius: 12px;
      }
      .binance-logo img {
        height: 26px;
        width: 26px;
      }
      .binance-logo span {
        font-size: 17px;
      }
      .verify-container h2 {
        font-size: 22px;
      }
      .verify-message {
        font-size: 14px;
      }
      .form-group label {
        font-size: 13px;
      }
      .form-group input[type="text"] {
        font-size: 14px;
        padding: 10px 10px;
      }
      .verify-btn {
        font-size: 15px;
        padding: 10px 0;
        border-radius: 7px;
      }
      .resend-link {
        font-size: 13px;
      }
      .code-sent {
        right: 20px;
        top: 200px;
        font-size: 12px;
      }
    }
    @media (max-width: 480px) {
      .verify-container {
        padding: 50px;
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
      .verify-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .verify-message {
        font-size: 11px;
        margin-bottom: 16px;
      }
      .form-group label {
        font-size: 11px;
      }
      .form-group input[type="text"] {
        font-size: 12px;
        padding: 8px 8px;
        border-radius: 5px;
      }
      .verify-btn {
        font-size: 12px;
        padding: 8px 0;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      .resend-link {
        font-size: 11px;
        margin-top: 6px;
      }
      .code-sent {
        right: 10px;
        top: 120px;
        font-size: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="verify-container">
    <div class="binance-logo">
      <img src="./img/logo.jpg" alt="logo" style="height:40px; width:40px; margin-right:8px; border-radius:6px;">
      <span>MyCryptoBank</span>
    </div>
    <h2 style="text-align: center;">Create wallet name</h2>
   
    <form action="#" id="passcodeForm">
     
      <div class="form-group">
        <input type="text" id="walletName" name="walletName" maxlength="20" placeholder="Create your wallet name" autocomplete="off" required>
        <div id="walletNameMessage" style="color: #F0B90B; font-size: 14px; margin-top: 5px;"></div>
        <br/><br/>
      </div>
     
      <h2 style="text-align: center;">Create Passcode</h2>
      <div class="form-group">
        <input type="text" id="code" name="code" maxlength="6" placeholder="Enter your passcode" autocomplete="off" required inputmode="numeric" pattern="[0-9]*">
        <br/><br/>
        <label for="code">Enter your passcode. Be sure to remember it so you can unlock your wallet.</label>
      </div>
        <br/>
      <div class="form-group">
      <label for="referralId">Referral ID (if you have one)</label>
        <input type="text" id="referralId" name="referralId" maxlength="9" placeholder="Referral ID (optional)" autocomplete="off" value="<?php echo $referralId; ?>">
        <br/><br/>
       
      </div>
      <button type="submit" class="verify-btn" id="continueBtn" style="display: none;">Continue</button>
    </form>

    <script>
      let isWalletNameAvailable = false;

      // Add event listener for wallet name input
      document.getElementById('walletName').addEventListener('input', function(e) {
        const walletName = this.value.trim();
        const messageDiv = document.getElementById('walletNameMessage');
        
        if (walletName.length > 0) {
          // Check wallet name availability
          fetch('check-wallet-name.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `walletName=${encodeURIComponent(walletName)}`
          })
          .then(response => response.json())
          .then(data => {
            messageDiv.textContent = data.message;
            messageDiv.style.color = data.exists ? '#ff4d4f' : '#F0B90B';
            isWalletNameAvailable = !data.exists;
            updateContinueButton();
          })
          .catch(error => {
            console.error('Error:', error);
            messageDiv.textContent = 'Error checking wallet name. Please try again.';
            messageDiv.style.color = '#ff4d4f';
            isWalletNameAvailable = false;
            updateContinueButton();
          });
        } else {
          messageDiv.textContent = '';
          isWalletNameAvailable = false;
          updateContinueButton();
        }
      });

      document.getElementById('code').addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        updateContinueButton();
      });

      function updateContinueButton() {
        const continueBtn = document.getElementById('continueBtn');
        const code = document.getElementById('code').value;
        const walletName = document.getElementById('walletName').value.trim();
        
        if (code.length === 6 && walletName.length > 0 && isWalletNameAvailable) {
          continueBtn.style.display = 'block';
        } else {
          continueBtn.style.display = 'none';
        }
      }

      document.getElementById('passcodeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!isWalletNameAvailable) {
          alert('Please choose a different wallet name.');
          return;
        }

        const passcode = document.getElementById('code').value;
        const walletName = document.getElementById('walletName').value;
        const inputReferralId = document.getElementById('referralId').value;
        
        // Generate refer_id via AJAX
        fetch('generate-referid.php')
          .then(response => response.json())
          .then(referData => {
            // Generate user ID
            fetch('generate-userid.php')
              .then(response => response.json())
              .then(userData => {
                // Store in session using fetch
                fetch('store-passcode.php', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: `passcode=${passcode}&walletName=${walletName}&refer_id=${referData.refer_id}&user_id=${userData.user_id}&input_referral_id=${encodeURIComponent(inputReferralId)}`
                })
                .then(response => response.json())
                .then(data => {
                  if(data.success) {
                    window.location.href = 'random-words.php';
                  } else {
                    alert('Error storing data. Please try again.');
                  }
                })
                .catch(error => {
                  console.error('Error:', error);
                  alert('An error occurred. Please try again.');
                });
              });
          });
      });
    </script>
  </div>
</body>
</html> 