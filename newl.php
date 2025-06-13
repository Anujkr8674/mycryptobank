<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <title>Log in</title> -->
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
    .login-btn {
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
    .login-btn:hover {
      background: #e5a800;
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
    .social-btn {
      width: 100%;
      display: flex;
      align-items: center;
      background: #23262F;
      color: #fff;
      border: 1px solid #353945;
      border-radius: 8px;
      padding: 11px 0;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 10px;
      cursor: pointer;
      transition: background 0.2s;
      text-align: left;
      gap: 10px;
      justify-content: center;
    }
    .social-btn:last-child { margin-bottom: 0; }
    .social-btn:hover {
      background: #353945;
    }
    .social-btn img {
      height: 20px;
      width: 20px;
      margin-right: 8px;
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
      .login-btn, .social-btn {
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
      .login-btn, .social-btn {
        font-size: 12px;
        padding: 8px 0;
        border-radius: 5px;
      }
      .social-btn img {
        height: 16px;
        width: 16px;
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
    <h2>Log in</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="email">Passcode</label>
        <input type="text" id="email" maxlength="6" placeholder="Enter your passcode" required inputmode="numeric" pattern="[0-9]*">
      </div>
      <button class="login-btn" type="submit">Next</button>
      <div class="or-divider">or</div>
    </form>
    <a href="./signup-new.php" class="footer-link">Create a MyCryptoBank Account</a>
  </div>
  <script>
    document.getElementById('email').addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const passcode = document.getElementById('email').value;
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
          // Set passcode in session before redirect
          fetch('set-session-passcode.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'passcode=' + encodeURIComponent(passcode)
          })
          .then(() => {
            window.location.href = 'enter-wallet-name.php';
          });
        } else {
          alert('Wrong passcode');
        }
      })
      .catch(error => {
        alert('An error occurred. Please try again.');
      });
    });
  </script>
</body>
</html>
