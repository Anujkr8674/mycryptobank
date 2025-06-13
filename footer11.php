<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <title>Document</title> -->
</head>
<body class="footer">
  <footer  style="background: linear-gradient(135deg, #232629 60%, #2b5876 100%); color: #e0e6ed; padding: 40px 0 20px 0; font-family: 'Segoe UI', sans-serif; box-shadow: 0 8px 32px 0 #1a1a1a44; position: relative; overflow: hidden;">
  <div class="footer-main" style="max-width: 1200px; margin: auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 1px;">
    <div class="footer-logo-text" style="flex: 1 1 250px; min-width: 250px; margin-bottom: 30px; background: rgba(255,255,255,0.03); border-radius: 18px; box-shadow: 0 4px 24px #0002; padding: 24px 18px 18px 18px;">
      <img src="/gall/metagreylabel.png" alt="Logo" style="height: 70px; margin-bottom: 20px; filter: drop-shadow(0 2px 8px #3fa9f5cc);">
      <p style="font-size: 1.15rem; line-height: 1.6;">We provide innovative solutions for the forex trading industry. Our services are designed to meet the needs of brokers and traders alike. <a href="#" style="color: #3fa9f5; text-decoration: underline; font-weight: 500;">Read More</a></p>
      <div class="footer-social">
        <a href="#" title="Facebook"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="fb"/></a>
        <a href="#" title="Twitter"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="tw"/></a>
        <a href="#" title="LinkedIn"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="li"/></a>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-middle-container" style="display: flex;  min-width: 300px; gap: 1px;">
      <div class="footer-quick-links" style="flex: 1 1 180px; min-width: 180px; margin-bottom: 30px;">
        <h3 class="footer-title">Quick Links</h3>
        <ul class="footer-list">
          <li><a href="./index.php">Home</a></li>
          <li><a href="./about.php">About Us</a></li>
          <li><a href="./Faq.php">FAQs</a></li>
          <li><a href="./contact.php">Contact Us</a></li>
          <li><a href="./privacy.php">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-divider footer-divider-mobile"></div>
      <div class="footer-services" style="flex: 1 1 200px; min-width: 100px; margin-bottom: 30px;">
        <h3 class="footer-title">Services</h3>
        <ul class="footer-list">
          <li><a href="./Forex-Trading-Platform.php">Forex Trading Platform</a></li>
          <li><a href="./Forex-Grey-Label-Solution.php">Forex Grey Label Solution</a></li>
          <li><a href="./Forex-White-Label-Solution.php">Forex White Label Solution</a></li>
          <li><a href="./Forex-Brokerage-Setup.php">Forex Brokerage Setup</a></li>
          <li><a href="./Stock-Trading-Software.php">Stock Trading Software</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-contact" style="flex: 1 1 200px; min-width: 200px; margin-bottom: 30px;">
      <h3 class="footer-title">Contact Info</h3>
      <ul class="footer-list">
        <li><span class="footer-icon">📍</span> Londan</li>
        <li><span class="footer-icon">📞</span> +91 773983639</li>
        <li><span class="footer-icon">✉</span> support@gmail.com</li>
      </ul>
    </div>
  </div>
  <style>
    .footer-title {
      color: #fff;
      font-size: 1.3rem;
      margin-bottom: 18px;
      font-weight: 700;
      letter-spacing: 1px;
      text-shadow: 0 2px 8px #3fa9f5aa;
      background: linear-gradient(90deg, #3fa9f5 40%, #fff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .footer-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-list li {
      margin-bottom: 14px;
      border-radius: 8px;
      position: relative;
      transition: none;
    }
    .footer-list li a {
      display: block;
      width: -webkit-fill-available;
      color: #e0e6ed;
      text-decoration: none;
      font-size: 1.08rem;
      font-weight: 500;
      border-radius: 8px;
      padding: 4px 8px;
      transition: color 0.22s, background 0.22s, box-shadow 0.22s, transform 0.22s, text-shadow 0.22s;
    }
    .footer-list li:hover a, .footer-list li a:hover {
      color: #fff;
      background: linear-gradient(90deg, #3fa9f5 60%, #2b5876 100%);
      box-shadow: 0 2px 16px #3fa9f555, 0 1.5px 0 #3fa9f5;
      transform: translateX(10px) scale(1.09);
      text-shadow: 0 2px 12px #3fa9f5cc;
    }
    .footer-icon {
      font-size: 1.2em;
      margin-right: 8px;
      vertical-align: middle;
      filter: drop-shadow(0 1px 4px #3fa9f5cc);
    }
    .footer-social {
      margin-top: 18px;
    }
    .footer-social a {
      display: inline-block;
      margin-right: 12px;
      transition: transform 0.22s, filter 0.22s;
      filter: grayscale(1) brightness(1.2);
    }
    .footer-social a:hover {
      transform: scale(1.18) rotate(-8deg);
      filter: none;
    }
    .footer-social img {
      width: 28px;
      height: 28px;
      vertical-align: middle;
      filter: drop-shadow(0 2px 8px #3fa9f5cc);
    }
    .footer-divider {
      width: 2px;
      min-height: 180px;
      background: linear-gradient(180deg, #3fa9f5 0%, #232629 100%);
      margin: 0 18px;
      border-radius: 2px;
      display: block;
    }
    .footer-divider-mobile { display: none; }
    @media (max-width: 900px) {
      .footer-main { flex-direction: column; align-items: flex-start; gap: 0; }
      .footer-divider { display: none; }
      .footer-main > div { width: 100%; min-width: unset; margin-bottom: 18px !important; }
      .footer-middle-container { flex-direction: row; gap: 18px; }
    }
    @media (max-width: 728px) {
      .footer-main { flex-direction: column; align-items: stretch; }
      .footer-logo-text { order: 1; }
      .footer-middle-container { order: 2; display: flex; flex-direction: row; gap: 10px; justify-content: space-between; }
      .footer-quick-links, .footer-services { width: 50%; min-width: unset; margin-bottom: 0 !important; }
      .footer-divider-mobile { display: block; width: 8px; min-height: 100px; background: none; }
      .footer-contact { order: 3; margin-top: 18px; }
    }
  </style>
</footer>
</body>
</html>