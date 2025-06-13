<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #0b0e11;
      color: #e0e0e0;
    }

    .container {
      max-width: 900px;
      margin: auto;
      padding: 20px;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .settings-icon {
      font-size: 20px;
      cursor: pointer;
    }

    .message {
      background-color: #131517;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: background-color 0.3s;
    }

    .message:hover {
      background-color: #1a1d20;
    }

    .message-header {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 8px;
    }

    .message-body {
      font-size: 14px;
      color: #ccc;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .view-more {
      color: #4aa3ff;
      font-size: 14px;
      text-decoration: none;
      display: inline-block;
    }

    .message-footer {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 12px;
      color: #777;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .arrow {
      font-size: 18px;
      color: #777;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .container {
        padding: 10px;
      }
      .message {
        padding: 10px;
      }
      .message-body {
        white-space: normal;
      }
      .message-footer {
        position: static;
        margin-top: 10px;
        justify-content: flex-end;
      }
    }
  </style>
</head>
<body style="padding-top: 100px;">

<div class="container">
  <h1>Messages</h1>
  <div class="section-header">
    Marketing &amp; Transactional
    <span class="settings-icon">&#9881;</span>
  </div>

  <div class="message">
    <div class="message-header">Start your trading journey on Binance</div>
    <div class="message-body">Make your first trade in 3 simple steps, and unlock a 50 USDT Trading Fee Rebate voucher...</div>
    <a href="#" class="view-more">View More</a>
    <div class="message-footer">
      04/23/2025 14:21:53 <span class="arrow">&#8250;</span>
    </div>
  </div>

  <div class="message">
    <div class="message-header">Claim a Free Red Packet!</div>
    <div class="message-body">Open your Red Packet and get up to $10 worth of crypto rewards! Get more packets when you...</div>
    <a href="#" class="view-more">View More</a>
    <div class="message-footer">
      04/20/2025 14:24:33 <span class="arrow">&#8250;</span>
    </div>
  </div>

  <div class="message">
    <div class="message-header">Claim your reward before it's gone forever!</div>
    <div class="message-body">Don't miss out on your welcome gift! Claim your 30 USDT Trading Fee Rebate voucher today...</div>
    <a href="#" class="view-more">View More</a>
    <div class="message-footer">
      04/18/2025 14:27:32 <span class="arrow">&#8250;</span>
    </div>
  </div>

  <div class="message">
    <div class="message-header">Verify your identity to start trading on Binance today!</div>
    <div class="message-body">Your safety is our priority. Complete your identity verification to help us keep you and the...</div>
    <a href="#" class="view-more">View More</a>
    <div class="message-footer">
      04/17/2025 14:22:15 <span class="arrow">&#8250;</span>
    </div>
  </div>

  <div class="message">
    <div class="message-header">You have received a Binance Welcome pack!</div>
    <div class="message-body">Welcome on board! We’ve just sent you a Welcome Pack. Redeem your Welcome Pack rewards...</div>
    <a href="#" class="view-more">View More</a>
    <div class="message-footer">
      04/16/2025 14:21:34 <span class="arrow">&#8250;</span>
    </div>
  </div>

</div>
<?php include "footer.php"; ?>

</body>
</html>
