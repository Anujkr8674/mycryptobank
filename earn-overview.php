<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    body {
      background: #181A20;
      color: #fff;
      font-family: 'Segoe UI', Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px 0 20px;
    }
    .header {
      font-size: 64px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .subtitle {
      font-size: 28px;
      color: #b7bdc6;
      margin-bottom: 40px;
    }
    .login-btn {
      background: #fcd535;
      color: #181A20;
      border: none;
      border-radius: 12px;
      font-size: 28px;
      font-weight: 500;
      padding: 18px 60px;
      cursor: pointer;
      margin-bottom: 60px;
      transition: background 0.2s;
      display: inline-block;
    }
    .login-btn:hover {
      background: #ffe566;
    }
    .banner {
      background: #101114;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 40px;
      margin-bottom: 50px;
      min-height: 200px;
    }
    .banner-content {
      max-width: 60%;
    }
    .banner-title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #fff;
    }
    .banner-desc {
      font-size: 20px;
      color: #b7bdc6;
      margin-bottom: 18px;
    }
    .banner-btn {
      background: #fcd535;
      color: #181A20;
      border: none;
      border-radius: 8px;
      font-size: 20px;
      font-weight: 600;
      padding: 10px 32px;
      cursor: pointer;
      margin-bottom: 10px;
      transition: background 0.2s;
    }
    .banner-btn:hover {
      background: #ffe566;
    }
    .banner-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .banner-img span {
      background: #23262f;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }
    .products {
      display: flex;
      gap: 24px;
      margin-top: 30px;
      overflow-x: auto;
      padding-bottom: 30px;
    }
    .product-card {
      background: #23262f;
      border-radius: 18px;
      padding: 32px 28px 28px 28px;
      min-width: 260px;
      flex: 0 0 260px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    .product-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #181A20;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      margin-bottom: 18px;
    }
    .product-title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 6px;
    }
    .product-type {
      font-size: 15px;
      color: #b7bdc6;
      margin-bottom: 18px;
    }
    .product-apr-label {
      font-size: 15px;
      color: #b7bdc6;
      margin-bottom: 2px;
    }
    .product-apr {
      font-size: 28px;
      font-weight: bold;
      color: #1ed761;
    }
    @media (max-width: 900px) {
      .header { font-size: 38px; }
      .subtitle { font-size: 18px; }
      .banner { flex-direction: column; align-items: flex-start; }
      .banner-content { max-width: 100%; }
      .products { flex-direction: column; gap: 18px; }
      .product-card { min-width: 0; width: 100%; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Binance Earn</div>
    <div class="subtitle">Smart Earning Starts Here – 300+ Crypto Assets Supported</div>
    <button class="login-btn">Log In</button>
    <div class="banner">
      <div class="banner-content">
        <div class="banner-title">BINANCE SIMPLE EARN</div>
        <div class="banner-desc">Limited-time Offer: <b>AXL</b> Locked Products<br>
          <span style="font-size:28px;color:#fff;font-weight:bold;">UP TO 20% APR*<br>AND AIRDROP</span><br>
          Limited Quota Available · Boosted Rewards
        </div>
        <button class="banner-btn">SUBSCRIBE</button>
        <div style="font-size:10px;color:#b7bdc6;max-width:400px;">DISCLAIMER: The value of your investment may go down or up and you may not get back the amount invested. For Simple Earn Locked Products, you may not be able to access your assets until the end of the agreed term. Please read the product terms for full details. Not financial advice.</div>
      </div>
      <div class="banner-img">
        <span>✖</span>
        <span>✖</span>
        <span>✖</span>
      </div>
    </div>
    <div class="products">
      <div class="product-card">
        <div class="product-icon" style="background:#2563eb;">$
        </div>
        <div class="product-title">USDC</div>
        <div class="product-type">Simple Earn | Flexible</div>
        <div class="product-apr-label">APR</div>
        <div class="product-apr">10.57%</div>
      </div>
      <div class="product-card">
        <div class="product-icon" style="background:#26a17b;">₹
        </div>
        <div class="product-title">USDT</div>
        <div class="product-type">Simple Earn | Flexible</div>
        <div class="product-apr-label">APR</div>
        <div class="product-apr">6.72%</div>
      </div>
      <div class="product-card">
        <div class="product-icon" style="background:#627eea;">◆
        </div>
        <div class="product-title">ETH</div>
        <div class="product-type">Simple Earn | Flexible</div>
        <div class="product-apr-label">APR</div>
        <div class="product-apr">3.33%</div>
      </div>
      <div class="product-card">
        <div class="product-icon" style="background:#23262f;">✖
        </div>
        <div class="product-title">AXL</div>
        <div class="product-type">Simple Earn | Flexible/Locked</div>
        <div class="product-apr-label">APR</div>
        <div class="product-apr">1.45%~20%</div>
      </div>
    </div>
  </div>
</body>
</html>