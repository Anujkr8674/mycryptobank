<?php
header('Content-Type: application/json');

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

// Return the price as JSON
echo json_encode([
    'btcPrice' => $btcPrice,
    'timestamp' => time()
]);
?> 