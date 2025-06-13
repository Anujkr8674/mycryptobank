<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- <title>Buy/Sell BTC Table</title> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #0e0e0e;
      font-family: Arial, sans-serif;
      color: #fff;
      margin: 0;
      padding: 20px;
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
  </style>
</head>
<body>

<?php
// Binance API configuration
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
</script>

</body>
</html>
