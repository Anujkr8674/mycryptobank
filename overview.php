<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #181A20;
      color: #fff;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 100vh;
      padding: 0 40px;
      flex-wrap: wrap;
    }
    .left {
      max-width: 700px;
    }
    .title {
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .subtitle {
      font-size: 25px;
      color: #eaecef;
      margin-bottom: 48px;
      font-weight: 400;
    }
    .login-btn {
      background: #fcd535;
      color: #181A20;
      border: none;
      border-radius: 16px;
      font-size: 20px;
      font-weight: 500;
      padding: 20px 20px;
      cursor: pointer;
      transition: background 0.2s;
      box-shadow: none;
      outline: none;
    }
    .login-btn:hover {
      background: #ffe566;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 50px;
    }
    .token-card {
      background: #23262F;
      border-radius: 16px;
      padding: 24px;
      width: 220px;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 24px rgba(0,0,0,0.3);
      position: relative;
    }
    .token-header {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 22px;
      font-weight: 700;
    }
    .token-header img {
      width: 32px;
      height: 32px;
    }
    .token-subtitle {
      font-size: 14px;
      color: #b7b8bb;
      margin-top: 5px;
    }
    .token-apr {
      font-size: 14px;
      color: #b7b8bb;
      margin-top: 20px;
    }
    .token-rate {
      font-size: 24px;
      font-weight: 700;
      color: #00b37f;
      margin-top: 5px;
    }
    @media (max-width: 1100px) {
      .container {
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 10px;
      }
      .right {
        min-width: unset;
        width: 100%;
        margin-top: 40px;
        justify-content: center;
      }
    }

    /* FAQ styles */
    .faq-section {
      max-width: 800px;
      margin: 80px auto;
      padding: 0 20px;
    }
    .faq-title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 40px;
      text-align: center;
    }
    .faq-item {
      background: #23262F;
      margin-bottom: 16px;
      border-radius: 12px;
      overflow: hidden;
    }
    .faq-question {
      padding: 20px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
      padding: 0 20px;
      font-size: 16px;
      color: #b7b8bb;
    }
    .faq-item.active .faq-answer {
      padding: 20px;
      max-height: 500px;
    }
  </style>
  
</head>
<body style="padding-top: 100px;">

  <div class="container">
    <div class="left">
      <div class="title">MyCryptoBank Earn</div>
      <div class="subtitle">Smart Earning Starts Here – 300+ Crypto Assets Supported</div>
      <a href="./new-login.php"> <button class="login-btn">Log In</button> </a>
    </div>

    <div class="right">
      <div class="token-card">
        <div class="token-header">
          <img src="./img/over1.png" alt="USDC">
          USDC
        </div>
        <div class="token-subtitle">Simple Earn | Flexible</div>
        <div class="token-apr">APR</div>
        <div class="token-rate">10.57%</div>
      </div>

      <div class="token-card">
        <div class="token-header">
          <img src="./img/over2.png" alt="USDT">
          USDT
        </div>
        <div class="token-subtitle">Simple Earn | Flexible</div>
        <div class="token-apr">APR</div>
        <div class="token-rate">6.72%</div>
      </div>

      <div class="token-card">
        <div class="token-header">
          <img src="./img/over3.png" alt="ETH">
          ETH
        </div>
        <div class="token-subtitle">Simple Earn | Flexible</div>
        <div class="token-apr">APR</div>
        <div class="token-rate">3.33%</div>
      </div>

      <div class="token-card">
        <div class="token-header">
          <img src="./img/over4.png" alt="AXL">
          AXL
        </div>
        <div class="token-subtitle">Simple Earn | Flexible/Locked</div>
        <div class="token-apr">APR</div>
        <div class="token-rate">1.45% ~ 20%</div>
      </div>
    </div>
  </div>
  
  <br/>
  <?php include 'overview-api.php'; ?>
  <br/>

  <!-- FAQ Section Start -->
  <div class="faq-section">
    <div class="faq-title">Frequently Asked Questions</div>

    <div class="faq-item">
      <div class="faq-question">1. What is MyCryptoBank Earn?</div>
      <div class="faq-answer">MyCryptoBank Earn is a one-stop hub on MyCryptoBank where you can see all your earning possibilities open for you and the cryptocurrency you hold.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">2. How does MyCryptoBank Earn work?</div>
      <div class="faq-answer">Using MyCryptoBank Earn is easy. Choose from dozens of available offerings, and transfer your cryptocurrencies into your chosen product.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">3. Which cryptocurrencies are supported?</div>
      <div class="faq-answer">MyCryptoBank Earn supports 300+ cryptocurrencies, including Bitcoin, Ethereum, BNB, and stablecoins like USDC.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">4. Am I eligible for MyCryptoBank Earn?</div>
      <div class="faq-answer">As long as you have the minimum amount of cryptocurrency indicated in your chosen product and completed necessary identity verifications, you're good to go.</div>
    </div>

    <div class="faq-item">
      <div class="faq-question">5. How do I start earning?</div>
      <div class="faq-answer">Simply deposit your preferred amount of cryptocurrencies into a product and see your earnings on your dashboard.</div>
    </div>
  </div>
  <!-- FAQ Section End -->

  <script>
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        faqItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });
        item.classList.toggle('active');
      });
    });
  </script>

  <?php include 'footer.php'; ?>

</body>
</html>
