<?php
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <title>Verify your email</title> -->
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
    <h2>Verify your email</h2>
    <div class="verify-message">
      A 6-digit code has been sent to <b><?php echo $email; ?></b>. Please enter it within the next 30 minutes.
    </div>
    <form action="#">
      <div class="form-group">
        <label for="code">Verification Code</label>
        <input type="text" id="code" name="code" maxlength="6" autocomplete="off" required>
      </div>
      <button class="verify-btn" type="submit">Next</button>
    </form>
    <a href="#" class="resend-link">Didn't receive the code?</a>
  </div>
</body>
</html> 