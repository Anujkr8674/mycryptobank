<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <title>Welcome to Binance</title> -->
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
    .binance-container {
      background: #1E2329;
      border-radius: 16px;
      box-shadow: 0 0 16px 0 rgba(0,0,0,0.4);
      padding: 52px;
      width: 100%;
      max-width: 400px;
      color: #fff;
    }
    .binance-logo {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      justify-content: center;
    }
    .binance-logo svg {
      height: 32px;
      width: 32px;
      margin-right: 8px;
    }
    .binance-logo span {
      font-size: 22px;
      font-weight: 700;
      color: #F0B90B;
      letter-spacing: 1px;
    }
    .binance-container h2 {
      text-align: left;
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 18px;
      color: #fff;
    }
    .form-group {
      margin-bottom: 18px;
    }
    .form-group label {
      display: block;
      font-size: 14px;
      margin-bottom: 6px;
      color: #fff;
    }
    .form-group input[type="text"],
    .form-group input[type="email"] {
      width: 100%;
      padding: 12px 14px;
      font-size: 15px;
      border: 1px solid #353945;
      border-radius: 8px;
      background: #181A20;
      color: #fff;
      margin-bottom: 0;
      outline: none;
      transition: border-color 0.3s;
    }
    .form-group input[type="text"]:focus,
    .form-group input[type="email"]:focus {
      border-color: #F0B90B;
    }
    .checkbox-group {
      display: flex;
      align-items: flex-start;
      margin-bottom: 18px;
      font-size: 13px;
      color: #b7bdc6;
    }
    .checkbox-group input[type="checkbox"] {
      accent-color: #F0B90B;
      margin-right: 8px;
      margin-top: 2px;
    }
    .checkbox-group a {
      color: #F0B90B;
      text-decoration: underline;
    }
    .binance-btn {
      width: 100%;
      padding: 13px 0;
      background: #F0B90B;
      color: #181A20;
      border: none;
      border-radius: 8px;
      font-size: 17px;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 16px;
      transition: background 0.2s;
    }
    .binance-btn:hover {
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
    .footer-links {
      text-align: center;
      margin-top: 18px;
      font-size: 14px;
      color: #848E9C;
    }
    .footer-links a {
      color: #F0B90B;
      text-decoration: none;
      margin: 0 2px;
    }
    .footer-links a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .binance-container {
        max-width: 95vw;
        padding: 52px;
      }
      .binance-logo svg {
        height: 26px;
        width: 26px;
      }
      .binance-logo span {
        font-size: 18px;
      }
      .binance-container h2 {
        font-size: 20px;
      }
      .binance-btn, .social-btn {
        font-size: 15px;
        padding: 10px 0;
      }
      .form-group input[type="text"],
      .form-group input[type="email"] {
        font-size: 14px;
        padding: 10px 10px;
      }
    }
    @media (max-width: 480px) {
      .binance-container {
        padding: 52px;
        border-radius: 0;
        min-width: unset;
        box-shadow: none;
      }
      .binance-logo svg {
        height: 22px;
        width: 22px;
      }
      .binance-logo span {
        font-size: 15px;
      }
      .binance-container h2 {
        font-size: 16px;
        margin-bottom: 12px;
      }
      .form-group label, .checkbox-group, .footer-links {
        font-size: 12px;
      }
      .binance-btn, .social-btn {
        font-size: 13px;
        padding: 8px 0;
        border-radius: 6px;
      }
      .social-btn img {
        height: 16px;
        width: 16px;
      }
      .or-divider {
        font-size: 11px;
        margin: 12px 0 8px 0;
      }
    }
  </style>
</head>
<body>
  <div class="binance-container">
    <div class="binance-logo">
      <!-- <img src="./img/logo.jpg" alt="logo"/> -->
      <!-- <svg viewBox="0 0 32 32" fill="none"><g><path d="M16 2.667l4.667 4.666-4.667 4.667-4.667-4.667L16 2.667zm8.667 8.666l4.666 4.667-4.666 4.667-4.667-4.667 4.667-4.667zm-17.334 0l4.667 4.667-4.667 4.667-4.666-4.667 4.666-4.667zm8.667 8.667l4.667 4.667-4.667 4.666-4.667-4.666 4.667-4.667z" fill="#F0B90B"/></g></svg> -->
      <img src="./img/logo.jpg" alt="logo" style="height:40px; width:40px; margin-right:8px; border-radius:6px;">
      <span>MyCryptoBank</span>
    </div>
    <h2>Welcome to MyCryptoBank</h2>
    <br/>
    <a href="create-passcode.php">
    <button class="binance-btn" >Create a new  wallet</button>
    </a>
    <a href="new-login.php">
    <button class="binance-btn">I already have a wallet</button>
    </a>

    <!-- <div class="footer-links">
      Sign up as an entity <span>or</span> <a href="./login.php">Log in</a>
    </div>
  </div> -->
</body>
</html>
