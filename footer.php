<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 

  <!-- Font Awesome Link -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #0b0b0d;
      color: #ffffff;
    }

    #foot-main {
      padding: 40px 20px;
    }

    .foot-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
      max-width: 1200px;
      margin: auto;
    }

    .foot-section {
      flex: 1 1 180px;
      min-width: 150px;
    }

    .foot-heading {
      font-size: 18px;
      margin-bottom: 15px;
      font-weight: bold;
    }

    .foot-list {
      list-style: none;
    }

    .foot-list li {
      margin-bottom: 12px;
    }

    .foot-list a {
      text-decoration: none;
      color: #ffffff;
      font-size: 14px;
      transition: color 0.3s;
    }

    .foot-list a:hover {
      color: #f0b90b;
    }

    .foot-icons {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .foot-icons a {
      font-size: 22px;
      color: #ffffff;
      transition: color 0.3s;
    }

    .foot-icons a:hover {
      color: #f0b90b;
    }

    @media (max-width: 768px) {
      .foot-container {
        flex-direction: column;
        align-items: center;
      }

      .foot-section {
        text-align: center;
      }
    }
  </style>
</head>

<body>

<footer id="foot-main">
  <div class="foot-container">

    <div class="foot-section foot-community">
      <h3 class="foot-heading">Community</h3>
      <div class="foot-icons">
        <a href="#"><i class="fab fa-discord"></i></a>
        <a href="#"><i class="fab fa-telegram"></i></a>
        <a href="#"><i class="fab fa-tiktok"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fas fa-times"></i></a>
        <a href="#"><i class="fab fa-reddit"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fas fa-chart-line"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fas fa-ellipsis-h"></i></a>
      </div>
    </div>

    <div class="foot-section foot-about">
      <h3 class="foot-heading">Trade</h3>
      <ul class="foot-list">
        <li><a href="./spot.php">spot</a></li>
        <li><a href="./spot.php">margin</a></li>
        <li><a href="./p2222p.php">p2p</a></li>
      
        <li><a href="./copy-trade.php">Copy Trade</a></li>
        <li><a href="./currency-converter.php">Currency Converter</a></li>
      
      </ul>
    </div>

    <div class="foot-section foot-products">
      <h3 class="foot-heading">Earn</h3>
      <ul class="foot-list">
        <li><a href="./overview.php">Overview</a></li>
        <li><a href="./Simple-earn.php">Simple Earn</a></li>
        <li><a href="./advanced-earn.php">Advanced Earn</a></li>
        <li><a href="./loan">loans</a></li>
        <li><a href="./">Blogs</a></li>
     
      </ul>
    </div>

    <div class="foot-section foot-business">
      <h3 class="foot-heading">Services</h3>
      <ul class="foot-list">
      <li><a href="./research.php">Research</a></li>
        <li><a href="./pay">Pay</a></li>
        <li><a href="./fan">Fan Token</a></li>
        <li><a href="./wallet.php">Wallet</a></li>
       
      </ul>
    </div>

    <div class="foot-section foot-service">
      <h3 class="foot-heading">Products</h3>
      <ul class="foot-list">
        <li><a href="./vip.php">VIP & Institutional</a></li>
        <li><a href="./affiliate.php">Affiliate </a></li>
        <li><a href="./refer.php">Referral Program</a></li>
      
      </ul>
    </div>

  </div>
</footer>

</body>
</html>
