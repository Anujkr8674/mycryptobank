<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }

    body {
      background-color: #0b0e11;
      color: #ffffff;
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    .title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #d1d5db;
    }

    .message-card {
      background-color: #161b22;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: background-color 0.3s ease;
    }

    .message-card:hover {
      background-color: #1e2630;
    }

    .message-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .message-title {
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
    }

    .message-time {
      font-size: 12px;
      color: #9ca3af;
    }

    .message-body {
      font-size: 14px;
      color: #9ca3af;
      margin-bottom: 10px;
    }

    .view-more {
      font-size: 14px;
      color: #3b82f6;
      cursor: pointer;
      text-decoration: underline;
    }

    .footer-note {
      text-align: center;
      margin-top: 30px;
      font-size: 12px;
      color: #6b7280;
    }

    /* Responsive design */
    @media (max-width: 600px) {
      .container {
        padding: 10px;
      }

      .title {
        font-size: 24px;
      }

      .message-card {
        padding: 15px;
      }

      .message-title {
        font-size: 14px;
      }

      .message-body {
        font-size: 13px;
      }
    }
  </style>
</head>
<body style="padding-top: 120px;">

  <div class="container">
    <div class="title">Messages</div>

    <div class="section-title">Account Assistant</div>

    <div class="message-card">
      <div class="message-header">
        <div class="message-title">Login attempted from new IP</div>
        <div class="message-time">04/28/2025 11:02:55</div>
      </div>
      <div class="message-body">The system has detected that your account is logged in from an unused IP address.</div>
      <div class="view-more">View More</div>
    </div>

    <div class="message-card">
      <div class="message-header">
        <div class="message-title">[Risk warning]</div>
        <div class="message-time">04/23/2025 12:53:35</div>
      </div>
      <div class="message-body">You recently attempted to log in to your Binance account from a new device or location.</div>
    </div>

    <div class="message-card">
      <div class="message-header">
        <div class="message-title">New device has been authorized</div>
        <div class="message-time">04/17/2025 10:58:16</div>
      </div>
      <div class="message-body">You have successfully authorized a new device or in a new location to sign into your Binance account.</div>
      <div class="view-more">View More</div>
    </div>

    <div class="message-card">
      <div class="message-header">
        <div class="message-title">[Risk warning]</div>
        <div class="message-time">04/17/2025 10:57:56</div>
      </div>
      <div class="message-body">You recently attempted to log in to your Binance account from a new device or location.</div>
    </div>

    <div class="message-card">
      <div class="message-header">
        <div class="message-title">New device has been authorized</div>
        <div class="message-time">04/16/2025 14:04:10</div>
      </div>
      <div class="message-body">You have successfully authorized a new device or in a new location to sign into your Binance account.</div>
      <div class="view-more">View More</div>
    </div>

    <div class="message-card">
      <div class="message-header">
        <div class="message-title">[Risk warning]</div>
        <div class="message-time">04/16/2025 14:03:43</div>
      </div>
      <div class="message-body">You recently attempted to log in to your Binance account from a new device or location.</div>
    </div>

    <div class="footer-note">
      Messages retained for up to 60 days
    </div>
  </div>

  <?php include "footer.php"; ?>

</body>
</html>
