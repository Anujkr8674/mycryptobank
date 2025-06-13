<?php
session_start();
include 'config.php'; // Assuming you have database configuration file

// Function to check user login status from database
function checkUserLogin($conn) {
    if(isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
        $stmt = $conn->prepare("SELECT id FROM users WHERE id = ?");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->num_rows > 0;
    }
    return false;
}

// Function to check user verification status
function checkUserVerification($conn) {
    if(isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
        $stmt = $conn->prepare("SELECT is_verified FROM users WHERE id = ?");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();
        if($row = $result->fetch_assoc()) {
            return $row['is_verified'] == 1;
        }
    }
    return false;
}

// Handle button click
if(isset($_POST['buy_btc_click'])) {
    if(!checkUserLogin($conn)) {
        echo json_encode(['redirect' => './new-login.php']);
        exit();
    }
    if(!checkUserVerification($conn)) {
        echo json_encode(['redirect' => './get-verify.php']);
        exit();
    }
    echo json_encode(['redirect' => 'verified_page.php']);
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>

<?php include "header.php"; ?>
  <meta charset="UTF-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #0e0e0e;
      font-family: Arial, sans-serif;
      color: #fff;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
      min-width: 0;
      min-height: 0;
    }
    .tab-buttons {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .tab-btn {
      padding: 10px 20px;
      background-color: #1a1a1a;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 16px;
    }
    .tab-btn.active {
      background-color: #00c896;
    }
    .tab-btn:hover {
      background-color: #222;
    }
    .tab-btn.active:hover {
      background-color: #00a87a;
    }
    .table-container {
      width: 100%;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 900px;
      background: transparent;
    }
    thead {
      background-color: #121212;
    }
    th, td {
      text-align: left;
      padding: 15px;
      vertical-align: middle;
      font-size: 14px;
    }
    th {
      color: #888;
      font-weight: normal;
    }
    tr {
      background-color: #1a1a1a;
    }
    tr:hover {
      background-color: #222;
    }
    hr {
      border: 0;
      border-top: 1px solid #333;
      margin: 0;
    }
    .advertiser {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      min-width: 36px;
    }
    .advertiser-info {
      display: flex;
      flex-direction: column;
    }
    .advertiser-name {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: bold;
      font-size: 16px;
      flex-wrap: wrap;
    }
    .stats {
      color: #aaa;
      font-size: 12px;
    }
    .icons {
      font-size: 12px;
      color: #888;
      margin-top: 4px;
    }
    .price {
      font-size: 18px;
      font-weight: bold;
      word-break: break-all;
    }
    .btc {
      font-size: 12px;
      color: #aaa;
      margin-top: 5px;
      word-break: break-all;
    }
    .limit {
      font-size: 12px;
      color: #aaa;
    }
    .payment-methods {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      color: #ccc;
      word-break: break-all;
    }
    .buy-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: flex-end;
    }
    .buy-btn {
      padding: 8px 16px;
      background-color: #00c896;
      border: none;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 15px;
    }
    .buy-btn:hover {
      background-color: #00a87a;
    }
    .badge {
      background: orange;
      color: black;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: bold;
      margin-left: 5px;
      margin-top: 2px;
      display: inline-block;
    }
    /* Responsive Styles */
    @media (max-width: 1024px) {
      table {
        min-width: 700px;
      }
      .tab-btn {
        font-size: 15px;
        padding: 8px 14px;
      }
      th, td {
        padding: 10px;
        font-size: 13px;
      }
      .price {
        font-size: 16px;
      }
      .advertiser-name {
        font-size: 14px;
      }
    }
    @media (max-width: 768px) {
      table {
        min-width: 600px;
      }
      .tab-btn {
        font-size: 14px;
        padding: 7px 10px;
      }
      th, td {
        padding: 8px 6px;
        font-size: 12px;
      }
      .price {
        font-size: 15px;
      }
      .advertiser-name {
        font-size: 13px;
      }
      .avatar {
        width: 30px;
        height: 30px;
        font-size: 13px;
        min-width: 30px;
      }
    }
    @media (max-width: 600px) {
      .table-container {
        overflow-x: auto;
      }
      table {
        min-width: 500px;
      }
      .tab-btn {
        font-size: 13px;
        padding: 6px 8px;
      }
      th, td {
        padding: 6px 4px;
        font-size: 11px;
      }
      .price {
        font-size: 13px;
      }
      .advertiser-name {
        font-size: 12px;
      }
      .avatar {
        width: 24px;
        height: 24px;
        font-size: 10px;
        min-width: 24px;
      }
      .buy-btn {
        padding: 5px 8px;
        font-size: 11px;
      }
      .badge {
        font-size: 8px;
        padding: 1px 4px;
      }
    }
    @media (max-width: 480px) {
      .table-container {
        overflow-x: auto;
      }
      table {
        min-width: 400px;
      }
      .tab-btn {
        font-size: 12px;
        padding: 5px 6px;
      }
      th, td {
        padding: 4px 2px;
        font-size: 10px;
      }
      .price {
        font-size: 11px;
      }
      .advertiser-name {
        font-size: 10px;
      }
      .avatar {
        width: 18px;
        height: 18px;
        font-size: 8px;
        min-width: 18px;
      }
      .buy-btn {
        padding: 3px 5px;
        font-size: 9px;
      }
      .badge {
        font-size: 7px;
        padding: 1px 2px;
      }
    }
    /* Card style for very small screens */
    @media (max-width: 400px) {
      .table-container {
        padding: 0;
      }
      table, thead, tbody, th, td, tr {
        display: block;
      }
      thead {
        display: none;
      }
      tr {
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        background: #181818;
      }
      td {
        padding: 8px 10px;
        border: none;
        position: relative;
        font-size: 10px;
      }
      td:before {
        content: attr(data-label);
        font-weight: bold;
        color: #888;
        display: block;
        margin-bottom: 2px;
      }
      .buy-section {
        align-items: flex-start;
      }
    }
    /* Card style for mobile screens */
    @media (max-width: 700px) {
      .table-container {
        padding: 0;
        overflow-x: unset;
      }
      table, thead, tbody, th, tr {
        display: block;
        width: 100%;
      }
      thead {
        display: none;
      }
      #priceTableBody {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      tr {
        background: #181818;
        margin-bottom: 0;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
        padding: 0 0 10px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      td {
        border: none;
        padding: 8px 16px 0 16px;
        font-size: 14px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      td[data-label]::before {
        content: attr(data-label) ': ';
        font-weight: bold;
        color: #00c896;
        min-width: 110px;
        display: inline-block;
        font-size: 13px;
      }
      .advertiser {
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
      }
      .buy-section {
        align-items: flex-start;
        margin-top: 10px;
        width: 100%;
      }
      .buy-btn {
        width: 80%;
        font-size: 15px;
        padding: 10px 0;
      }
      .badge {
        margin-top: 6px;
        display: inline-block;
      }
      .price, .btc, .limit, .payment-methods {
        margin-bottom: 6px;
      }
      hr {
        display: none;
      }
    }
    /* How P2P Works Section */
    .p2p-works-section {
      margin: 40px auto 0 auto;
      max-width: 1200px;
      padding: 24px 12px;
      background: none;
    }
    .p2p-works-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 32px;
    }
    .p2p-works-title {
      font-size: 2.6rem;
      font-weight: bold;
      color: #fff;
      margin: 0;
    }
    .p2p-works-buttons {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .p2p-works-btn {
      background: linear-gradient(90deg, #00c896 0%, #00e0b6 100%);
      color: #181818;
      border: none;
      border-radius: 32px;
      padding: 14px 38px;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,200,150,0.12);
      transition: background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.1s;
      outline: none;
      letter-spacing: 0.5px;
      position: relative;
      z-index: 1;
    }
    .p2p-works-btn:not(.active) {
      background: #23272f;
      color: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    }
    .p2p-works-btn.active, .p2p-works-btn:hover {
      background: linear-gradient(90deg, #00c896 0%, #00e0b6 100%);
      color: #181818;
      box-shadow: 0 6px 24px rgba(0,200,150,0.18);
      transform: translateY(-2px) scale(1.04);
    }
    .p2p-steps {
      display: flex;
      gap: 24px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .p2p-step-card {
      background: #181b20;
      border-radius: 20px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.12);
      flex: 1 1 300px;
      min-width: 260px;
      max-width: 370px;
      padding: 32px 28px 28px 28px;
      margin-bottom: 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }
    .p2p-step-icon {
      width: 54px;
      height: 54px;
      background: #23272f;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
    }
    .p2p-step-icon img {
      width: 36px;
      height: 36px;
    }
    .p2p-step-title {
      font-size: 1.3rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 8px;
    }
    .p2p-step-desc {
      color: #bdbdbd;
      font-size: 1rem;
      margin-bottom: 0;
    }
    @media (max-width: 900px) {
      .p2p-steps {
        flex-direction: column !important;
        gap: 18px;
        align-items: stretch;
      }
      .p2p-step-card {
        max-width: 100%;
        min-width: 0;
        width: 100%;
      }
      .p2p-works-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;
      }
    }
    @media (max-width: 600px) {
      .p2p-works-title {
        font-size: 1.5rem;
      }
      .p2p-step-title {
        font-size: 1.1rem;
      }
      .p2p-step-card {
        padding: 18px 10px 16px 10px;
      }
      .p2p-works-buttons {
        flex-direction: column;
        gap: 10px;
        width: 100%;
        align-items: stretch;
      }
      .p2p-works-btn {
        padding: 12px 0;
        font-size: 1.05rem;
        width: 100%;
      }
    }
    .top-payments-section {
      max-width: 1200px;
      margin: 48px auto 0 auto;
      padding: 0 12px 32px 12px;
    }
    .top-payments-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 32px;
    }
    .top-payments-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    @media (max-width: 900px) {
      .top-payments-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .top-payments-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
      }
      .top-payments-grid {
        grid-template-columns: 1fr;
        gap: 14px;
      }
    }
    .top-payment-card {
      background: #181b20;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.10);
      padding: 28px 24px 24px 24px;
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;
      border-left: 5px solid #00c896;
      min-height: 60px;
      transition: box-shadow 0.2s, border-color 0.2s;
    }
    .top-payment-card[data-color="orange"] { border-left-color: #ff9900; }
    .top-payment-card[data-color="yellow"] { border-left-color: #ffd600; }
    .top-payment-card[data-color="blue"] { border-left-color: #1e90ff; }
    .top-payment-card[data-color="purple"] { border-left-color: #a259ff; }
    .top-payment-card[data-color="gray"] { border-left-color: #888; }
    .top-payment-card:hover {
      box-shadow: 0 4px 24px rgba(0,200,150,0.18);
      border-left-width: 7px;
    }
    .faq-section {
      max-width: 900px;
      margin: 48px auto 0 auto;
      padding: 0 12px 48px 12px;
    }
    .faq-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 32px;
    }
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .faq-card {
      background: #181b20;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.10);
      padding: 0 0 0 0;
      overflow: hidden;
      transition: box-shadow 0.2s;
    }
    .faq-card.open {
      box-shadow: 0 4px 24px rgba(0,200,150,0.18);
    }
    .faq-question {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 22px 28px 22px 28px;
      font-size: 1.18rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      border: none;
      background: none;
      width: 100%;
      outline: none;
      transition: background 0.15s;
    }
    .faq-question:hover {
      background: #22242a;
    }
    .faq-qnum {
      color: #888;
      font-size: 1.1rem;
      margin-right: 16px;
      font-weight: bold;
    }
    .faq-toggle {
      font-size: 1.5rem;
      color: #888;
      margin-left: 12px;
      transition: transform 0.2s;
    }
    .faq-card.open .faq-toggle {
      transform: rotate(90deg);
    }
    .faq-answer {
      padding: 0 28px 22px 60px;
      color: #bdbdbd;
      font-size: 1.05rem;
      line-height: 1.6;
      display: none;
    }
    .faq-card.open .faq-answer {
      display: block;
    }
    .faq-link {
      color: #00c896;
      text-decoration: underline;
      font-weight: 500;
    }
    @media (max-width: 600px) {
      .faq-title {
        font-size: 1.5rem;
        margin-bottom: 18px;
      }
      .faq-question {
        font-size: 1rem;
        padding: 16px 12px 16px 12px;
      }
      .faq-answer {
        font-size: 0.98rem;
        padding: 0 12px 16px 32px;
      }
    }
    /* --- Global Responsive Enhancements --- */
    @media (max-width: 1200px) {
      .top-payments-section, .faq-section, .p2p-works-section {
        max-width: 1000px;
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    @media (max-width: 1024px) {
      .top-payments-section, .faq-section, .p2p-works-section {
        max-width: 900px;
      }
      .table-container {
        padding: 0 2px;
      }
    }
    @media (max-width: 900px) {
      .top-payments-section, .faq-section, .p2p-works-section {
        max-width: 100%;
        padding-left: 4px;
        padding-right: 4px;
      }
      .top-payments-title, .faq-title, .p2p-works-title {
        font-size: 2rem;
      }
    }
    @media (max-width: 700px) {
      .top-payments-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      .p2p-works-section, .faq-section, .top-payments-section {
        padding-left: 2px;
        padding-right: 2px;
      }
    }
    @media (max-width: 600px) {
      .top-payments-grid {
        grid-template-columns: 1fr;
        gap: 10px;
      }
      .top-payments-title, .faq-title, .p2p-works-title {
        font-size: 1.2rem;
        margin-bottom: 12px;
      }
      .p2p-works-section, .faq-section, .top-payments-section {
        padding-left: 0;
        padding-right: 0;
      }
      .p2p-step-card, .faq-card, .top-payment-card {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
      .tab-buttons {
        flex-direction: column;
        gap: 8px;
        width: 100%;
        align-items: stretch;
      }
      .tab-btn {
        width: 100%;
        font-size: 1rem;
        padding: 8px 0;
      }
    }
    @media (max-width: 480px) {
      .top-payments-title, .faq-title, .p2p-works-title {
        font-size: 1rem;
        margin-bottom: 8px;
      }
      .p2p-step-title, .faq-question {
        font-size: 0.95rem;
      }
      .p2p-step-card, .faq-card, .top-payment-card {
        padding: 8px 4px 8px 8px !important;
        font-size: 0.95rem;
      }
      .buy-btn, .p2p-works-btn {
        font-size: 0.95rem;
        padding: 8px 0;
      }
      .avatar {
        width: 16px;
        height: 16px;
        font-size: 7px;
        min-width: 16px;
      }
    }
    body {
      box-sizing: border-box;
      min-width: 0;
      min-height: 0;
    }
    /* --- End Global Responsive Enhancements --- */
  </style>

  
</head>
<body style="padding-top: 120px;">

<?php
// MyCryptoBank API configuration
$apiKey = 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A';
$apiSecret = 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j';

// Function to get current BTC price
function getBTCPrice() {
    global $apiKey, $apiSecret;
    
    $url = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'X-MBX-APIKEY: ' . $apiKey
    ]);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    $data = json_decode($response, true);
    return $data['price'] ?? 0;
}

// Get current BTC price
$btcPrice = getBTCPrice();
$inrPrice = $btcPrice * 83; // Approximate INR conversion rate
?>

<div class="tab-buttons">
  <button class="tab-btn active" data-tab="buy">Buy BTC</button>
  <button class="tab-btn" data-tab="sell">Sell BTC</button>
</div>

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Advertisers</th>
        <th>Price</th>
        <th>Available/Order Limit</th>
        <th>Payment</th>
        <th>Trade</th>
      </tr>
    </thead>
    <tbody id="priceTableBody">
      <!-- Table content will be dynamically updated -->
    </tbody>
  </table>
</div>

<!-- How P2P Works Section -->
<div class="p2p-works-section">
  <div class="p2p-works-header">
    <div class="p2p-works-title">How P2P Works</div>
    <div class="p2p-works-buttons">
      <button class="p2p-works-btn active" id="showBuyCrypto">Buy Crypto</button>
      <button class="p2p-works-btn" id="showSellCrypto">Sell Crypto</button>
    </div>
  </div>
  <!-- Buy Steps -->
  <div class="p2p-steps" id="p2pBuySteps">
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/document--v1.png" alt="Order"></div>
      <div class="p2p-step-title">1. Place an Order</div>
      <div class="p2p-step-desc">Once you place a P2P order, the crypto asset will be escrowed by MyCryptoBank P2P.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/handshake.png" alt="Pay"></div>
      <div class="p2p-step-title">2. Pay the Seller</div>
      <div class="p2p-step-desc">Send money to the seller via the suggested payment methods. Complete the fiat transaction and click "Transferred, notify seller" on MyCryptoBank P2P.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/receive-cash.png" alt="Receive"></div>
      <div class="p2p-step-title">3. Receive Crypto</div>
      <div class="p2p-step-desc">Once the seller confirms receipt of money, the escrowed crypto will be released to you.</div>
    </div>
  </div>
  <!-- Sell Steps -->
  <div class="p2p-steps" id="p2pSellSteps" style="display:none;">
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/document--v1.png" alt="Order"></div>
      <div class="p2p-step-title">1. Place an Order</div>
      <div class="p2p-step-desc">After you place an order, your crypto will be escrowed by MyCryptoBank P2P.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/conference-call.png" alt="Verify"></div>
      <div class="p2p-step-title">2. Verify Payment</div>
      <div class="p2p-step-desc">Check the transaction record in the given payment account, and make sure you receive the money sent by the buyer.</div>
    </div>
    <div class="p2p-step-card">
      <div class="p2p-step-icon"><img src="https://img.icons8.com/ios-filled/50/ffd600/money-transfer.png" alt="Release"></div>
      <div class="p2p-step-title">3. Release Crypto</div>
      <div class="p2p-step-desc">Once you confirm the receipt of money, release crypto to the buyer on MyCryptoBank P2P.</div>
    </div>
  </div>
</div>

<div class="top-payments-section">
  <div class="top-payments-title">Top Payment Methods</div>
  <div class="top-payments-grid">
    <div class="top-payment-card" data-color="gray">UPI</div>
    <div class="top-payment-card" data-color="orange">IMPS</div>
    <div class="top-payment-card" data-color="yellow">Bank Transfer (India)</div>
    <div class="top-payment-card" data-color="blue">Digital eRupee</div>
    <div class="top-payment-card" data-color="blue">Google Pay (GPay)</div>
    <div class="top-payment-card" data-color="blue">Paytm</div>
    <div class="top-payment-card" data-color="purple">PhonePe</div>
    <div class="top-payment-card" data-color="orange">IMPS - PAN</div>
    <div class="top-payment-card" data-color="gray">UPI-PAN</div>
  </div>
</div>

<div class="faq-section">
  <div class="faq-title">FAQs</div>
  <div class="faq-list">
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">1</span> What is P2P exchange?<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">P2P stands for peer-to-peer, and P2P exchanges are platforms that allow users to buy and sell crypto for fiat currency directly with other users. Learn more about <a href="#" class="faq-link">What is P2P Trading</a> and <a href="#" class="faq-link">How Does a Local Bitcoin Exchange Work?</a></div>
    </div>
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">2</span> How do I sell Bitcoin locally on MyCryptoBank P2P?<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">First, browse Buy Ads for the crypto you wish to sell, and find the best offers with your preferred payment method. You can read the reviews and check the requirements of the buyer. If they are agreeable to you, start the trade, and do not release the crypto until you have received the money in the payment method you provided. Learn more about <a href="#" class="faq-link">how to sell crypto peer-to-peer</a> or <a href="#" class="faq-link">how to trade bitcoin for cash via MyCryptoBank P2P</a>.</div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">3</span> Which cryptocurrencies are supported in the P2P trade zone?<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer">There are many cryptocurrencies that you can use in the P2P trade zone. You can choose from digital assets like <a href="#" class="faq-link">Bitcoin</a>, <a href="#" class="faq-link">Ethereum</a> and stablecoins.</div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">4</span> Glossary of P2P trading terms<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">5</span> How to add new payment methods on MyCryptoBank P2P?<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">6</span> How do I buy Bitcoin locally on MyCryptoBank P2P?<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">After you complete identity verification and add your payment methods, you are ready to <a href="#" class="faq-link">buy crypto on MyCryptoBank P2P platform</a>. First, choose from all the available offers in the marketplace. Second, place an order to buy your crypto, and pay the seller based on the preferred payment methods. Lastly, get your crypto from the seller after you complete the fiat transaction and confirm your payment on MyCryptoBank P2P.</div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">7</span> Why is MyCryptoBank P2P better than other P2P marketplaces?<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer">MyCryptoBank P2P is the largest peer-to-peer exchange with more than 800+ payment methods and 100+ fiat currencies. We provide an escrow service that ensures safe and fair trading. Also, on MyCryptoBank P2P you can buy and sell crypto at zero fees. Learn more about <a href="#" class="faq-link">.</a></div>
    </div>
    <div class="faq-card open">
      <button class="faq-question"><span class="faq-qnum">8</span> How do I protect myself against fraud? MyCryptoBank P2P Escrow FTW!<span class="faq-toggle">&#8212;</span></button>
      <div class="faq-answer">As one of the several safeguards on the platform, MyCryptoBank P2P has a holding mechanism for crypto funds that are involved in any pending transaction. This mechanism prevents incidents of theft or scam by adding another layer of trust, thus preventing malicious actors from stealing your money or crypto without completing their part of the trade.<a href="#" class="faq-link">Learn more.</a></div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">9</span> MyCryptoBank P2P trading FAQ<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
    <div class="faq-card">
      <button class="faq-question"><span class="faq-qnum">10</span> P2P user transaction policy<span class="faq-toggle">&#43;</span></button>
      <div class="faq-answer"></div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
// Advertisers data from the image
const advertisers = [
    {
        name: "Thor1512",
        avatar: "T",
        orders: 450,
        completion: 98.50,
        rating: 96.80,
        time: 15,
        limit: "₹15,000.00 - ₹150,000.00",
        payment: ["Bank Transfer (India)", "IMPS", "UPI"],
        verification: true
    },
    {
        name: "GenuineGatewayTrader",
        avatar: "G",
        orders: 320,
        completion: 97.80,
        rating: 95.90,
        time: 15,
        limit: "₹25,000.00 - ₹200,000.00",
        payment: ["Bank Transfer (India)", "IMPS", "PhonePe"],
        verification: true
    },
    {
        name: "crypto king",
        avatar: "C",
        orders: 289,
        completion: 98.00,
        rating: 95.48,
        time: 15,
        limit: "₹20,000.00 - ₹100,000.00",
        payment: ["PhonePe", "Google Pay (GPay)", "UPI"],
        verification: false
    },
    {
        name: "CryptoTamizhan_24x7",
        avatar: "C",
        orders: 307,
        completion: 100.00,
        rating: 97.74,
        time: 15,
        limit: "₹2,000.00 - ₹47,113.00",
        payment: ["UPI", "Google Pay (GPay)", "IMPS"],
        verification: false
    },
    {
        name: "BobyChaudhary",
        avatar: "B",
        orders: 1377,
        completion: 99.50,
        rating: 99.31,
        time: 15,
        limit: "₹10,000.00 - ₹124,542.00",
        payment: ["Bank Transfer (India)", "IMPS", "PhonePe"],
        verification: true
    },
    {
        name: "Xpress_Trader_",
        avatar: "X",
        orders: 315,
        completion: 95.80,
        rating: 96.51,
        time: 15,
        limit: "₹10,000.00 - ₹220,260.00",
        payment: ["IMPS", "Bank Transfer (India)", "UPI"],
        verification: true
    },
    {
        name: "Cyberpatrol",
        avatar: "C",
        orders: 137,
        completion: 89.60,
        rating: 94.78,
        time: 15,
        limit: "₹10,000.00 - ₹100,000.00",
        payment: ["IMPS", "UPI"],
        verification: false
    },
    {
        name: "Sat_Nakamoto",
        avatar: "S",
        orders: 240,
        completion: 98.00,
        rating: 98.61,
        time: 15,
        limit: "₹10,000.00 - ₹125,597.00",
        payment: ["IMPS", "Bank Transfer (India)", "UPI"],
        verification: false
    },
    {
        name: "AbandonedBaby",
        avatar: "A",
        orders: 99,
        completion: 79.20,
        rating: 97.63,
        time: 15,
        limit: "₹20,000.00 - ₹100,000.00",
        payment: ["IMPS", "UPI"],
        verification: false
    }
];

const sellAdvertisers = [
    {
        featured: true,
        name: "LedgerTower",
        avatar: "L",
        pro: true,
        verified: true,
        orders: 2297,
        completion: 91.60,
        rating: 93.91,
        time: 60,
        limit: "₹10,000.00 - ₹37,500,000.00",
        btc: "199.85356904",
        payment: ["IMPS", "Bank Transfer (India)", "UPI"]
    },
    {
        name: "R-K-P2P-BOSS",
        avatar: "R",
        verified: true,
        orders: 816,
        completion: 98.10,
        rating: 95.96,
        time: 15,
        limit: "₹12,000.00 - ₹204,725.00",
        btc: "0.02500000",
        payment: ["Bank Transfer (India)", "IMPS", "Paytm"]
    },
    {
        name: "coinhive",
        avatar: "c",
        verified: false,
        orders: 313,
        completion: 97.90,
        rating: 94.7,
        time: 120,
        limit: "₹10,000.00 - ₹25,482.00",
        btc: "0.00311606",
        payment: ["UPI", "Paytm", "IMPS"]
    },
    {
        name: "VikramDigra",
        avatar: "V",
        verified: true,
        orders: 3603,
        completion: 98.60,
        rating: 97.83,
        time: 120,
        limit: "₹20,000.00 - ₹30,000.00",
        btc: "0.00400000",
        payment: ["IMPS", "Bank Transfer (India)"]
    },
    {
        name: "RAHUL-KYC-TDS-APPLY",
        avatar: "R",
        verified: false,
        orders: 131,
        completion: 100.00,
        rating: 86.37,
        time: 60,
        limit: "₹40,000.00 - ₹100,000.00",
        btc: "0.01253934",
        payment: ["Bank Transfer (India)", "IMPS"]
    }
];

// Function to update prices using AJAX
function updatePrices(tab = 'buy') {
    $.ajax({
        url: 'get_price.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const tableBody = $('#priceTableBody');
            tableBody.empty();
            
            if (tab === 'buy') {
                advertisers.forEach(advertiser => {
                    const price = (data.btcPrice * 83).toLocaleString('en-IN', {maximumFractionDigits: 2});
                    const btcAmount = (Math.random() * 0.08 + 0.005).toFixed(8);
                    const row = `
                        <tr>
                            <td data-label="Advertisers">
                                <div class="advertiser">
                                    <div class="avatar">${advertiser.avatar}</div>
                                    <div class="advertiser-info">
                                        <div class="advertiser-name">${advertiser.name} ${advertiser.verification ? '🛡️' : ''}</div>
                                        <div class="stats">${advertiser.orders} orders | ${advertiser.completion}% completion</div>
                                        <div class="icons">👍 ${advertiser.rating}% ⏰ ${advertiser.time} min</div>
                                    </div>
                                </div>
                            </td>
                            <td data-label="Price">
                                <div class="price">${price} INR</div>
                                <div class="btc">${btcAmount} BTC</div>
                            </td>
                            <td data-label="Available/Order Limit">
                                <div class="limit">${advertiser.limit}</div>
                            </td>
                            <td data-label="Payment">
                                <div class="payment-methods">${advertiser.payment.join('<br>')}</div>
                            </td>
                            <td data-label="Trade">
                                <div class="buy-section">
                                    <button class="buy-btn">Buy BTC</button>
                                    ${advertiser.verification ? '<div class="badge">Requires Verification</div>' : ''}
                                </div>
                            </td>
                        </tr>
                        <tr><td colspan="5"><hr /></td></tr>
                    `;
                    tableBody.append(row);
                });
            } else {
                sellAdvertisers.forEach((advertiser, idx) => {
                    const price = (data.btcPrice * 83).toLocaleString('en-IN', {maximumFractionDigits: 2});
                    const featuredRow = advertiser.featured ? `<tr><td colspan="5" style="background: #18120a; border:2px solid gold; color: gold; font-weight: bold;">Featured Ad</td></tr>` : '';
                    const pro = advertiser.pro ? '<span class="badge" style="background: #e10098; color: #fff; margin-left: 5px;">Pro</span>' : '';
                    const verified = advertiser.verified ? '🛡️' : '';
                    const row = `
                        ${featuredRow}
                        <tr ${advertiser.featured ? 'style="border:2px solid gold;background:#18120a;"' : ''}>
                            <td data-label="Advertisers">
                                <div class="advertiser">
                                    <div class="avatar">${advertiser.avatar}</div>
                                    <div class="advertiser-info">
                                        <div class="advertiser-name">${advertiser.name} ${verified} ${pro}</div>
                                        <div class="stats">${advertiser.orders} orders | ${advertiser.completion}% completion</div>
                                        <div class="icons">👍 ${advertiser.rating}% ⏰ ${advertiser.time} min</div>
                                    </div>
                                </div>
                            </td>
                            <td data-label="Price">
                                <div class="price">${price} INR</div>
                                <div class="btc">${advertiser.btc} BTC</div>
                            </td>
                            <td data-label="Available/Order Limit">
                                <div class="limit">${advertiser.limit}</div>
                            </td>
                            <td data-label="Payment">
                                <div class="payment-methods">${advertiser.payment.join('<br>')}</div>
                            </td>
                            <td data-label="Trade">
                                <div class="buy-section">
                                    <button class="buy-btn" style="background-color: #ff6b6b;">Sell BTC</button>
                                </div>
                            </td>
                        </tr>
                        <tr><td colspan="5"><hr /></td></tr>
                    `;
                    tableBody.append(row);
                });
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching prices:', error);
        }
    });
}

// Handle tab switching
$('.tab-btn').click(function() {
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    updatePrices(tab);
});

// Update prices every 5 seconds using AJAX
updatePrices('buy');
setInterval(() => {
    const activeTab = $('.tab-btn.active').data('tab');
    updatePrices(activeTab);
}, 5000);

// Add loading indicator
$(document).ajaxStart(function() {
    $('.table-container').append('<div id="loading" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.8); color: white; padding: 20px; border-radius: 5px;">Loading...</div>');
}).ajaxStop(function() {
    $('#loading').remove();
});

// Show/hide buy/sell crypto table and steps on button click
$('#showBuyCrypto').click(function() {
  $(this).addClass('active');
  $('#showSellCrypto').removeClass('active');
  $('.tab-btn[data-tab="buy"]').click();
  $('#p2pBuySteps').show();
  $('#p2pSellSteps').hide();
});
$('#showSellCrypto').click(function() {
  $(this).addClass('active');
  $('#showBuyCrypto').removeClass('active');
  $('.tab-btn[data-tab="sell"]').click();
  $('#p2pBuySteps').hide();
  $('#p2pSellSteps').show();
});

// FAQ accordion logic
$('.faq-question').on('click', function() {
  const card = $(this).closest('.faq-card');
  if (card.hasClass('open')) {
    card.removeClass('open');
    $(this).find('.faq-toggle').html('&#43;');
  } else {
    // Close all other cards
    $('.faq-card').removeClass('open');
    $('.faq-toggle').html('&#43;');
    // Open this one
    card.addClass('open');
    $(this).find('.faq-toggle').html('&#8212;');
  }
});

// Handle buy/sell button clicks
$(document).on('click', '.buy-btn', function(e) {
    e.preventDefault();
    $.ajax({
        url: window.location.href,
        method: 'POST',
        data: { buy_btc_click: true },
        dataType: 'json',
        success: function(response) {
            if(response.redirect) {
                window.location.href = response.redirect;
            }
        },
        error: function(xhr, status, error) {
            alert('Something went wrong!');
        }
    });
});
</script>


</body>
<?php include "footer.php";?>
</html>
