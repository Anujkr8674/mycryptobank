<?php
// Binance API Configuration
define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
define('BINANCE_API_URL', 'https://api.binance.com');

// Function to generate signature for Binance API
function generateSignature($query_string) {
    return hash_hmac('sha256', $query_string, BINANCE_API_SECRET);
}

// Function to make API request
function makeRequest($endpoint, $params = [], $method = 'GET') {
    $timestamp = round(microtime(true) * 1000);
    $params['timestamp'] = $timestamp;
    
    $query_string = http_build_query($params);
    $signature = generateSignature($query_string);
    
    $url = BINANCE_API_URL . $endpoint;
    if ($method === 'GET') {
        $url .= '?' . $query_string . '&signature=' . $signature;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'X-MBX-APIKEY: ' . BINANCE_API_KEY
    ]);

    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query_string . '&signature=' . $signature);
    }

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code !== 200) {
        error_log("API Error: " . $response);
        return null;
    }

    return json_decode($response, true);
}

// Get Simple Earn Flexible Products
function getFlexibleProducts() {
    return makeRequest('/sapi/v1/simple-earn/flexible/list', [
        'current' => 1,
        'size' => 100
    ]);
}

// Get Simple Earn Locked Products
function getLockedProducts() {
    return makeRequest('/sapi/v1/simple-earn/locked/list', [
        'current' => 1,
        'size' => 100
    ]);
}

// Get current prices for the coins
function getCurrentPrices($symbols) {
    $prices = [];
    foreach ($symbols as $symbol) {
        $response = makeRequest('/api/v3/ticker/price', ['symbol' => $symbol . 'USDT']);
        if (isset($response['price'])) {
            $prices[$symbol] = $response['price'];
        }
    }
    return $prices;
}

// Define coin icons
$coinIcons = [
    'BTC' => 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
    'ETH' => 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
    'EURI' => 'https://assets.coingecko.com/coins/images/26315/thumb/euri.png?1657276251',
    'SOL' => 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1640133422',
    'BABY' => 'https://assets.coingecko.com/coins/images/24210/thumb/baby.png?1646895088',
    'INIT' => 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
    'USDC' => 'https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389',
    'FDUSD' => 'https://assets.coingecko.com/coins/images/31079/thumb/fdusd.png?1690347250',
    'USDT' => 'https://assets.coingecko.com/coins/images/325/thumb/Tether.png?1668148663',
    'BNB' => 'https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850'
];

// Fetch real-time data
$flexible_products = getFlexibleProducts();
$locked_products = getLockedProducts();
$all_products = [];

// Process flexible products
if ($flexible_products && isset($flexible_products['data'])) {
    foreach ($flexible_products['data'] as $product) {
        if ($product['status'] === 'PURCHASING') {
            $all_products[] = [
                'coin' => $product['asset'],
                'apr' => $product['latestAnnualPercentageRate'],
                'duration' => 'Flexible',
                'type' => 'FLEXIBLE',
                'minPurchaseAmount' => $product['minPurchaseAmount'],
                'maxPurchaseAmount' => $product['maxPurchaseAmount']
            ];
        }
    }
}

// Process locked products
if ($locked_products && isset($locked_products['data'])) {
    foreach ($locked_products['data'] as $product) {
        if ($product['status'] === 'PURCHASING') {
            $all_products[] = [
                'coin' => $product['asset'],
                'apr' => $product['interestRate'],
                'duration' => $product['duration'] . ' Days',
                'type' => 'LOCKED',
                'minPurchaseAmount' => $product['minPurchaseAmount'],
                'maxPurchaseAmount' => $product['maxPurchaseAmount']
            ];
        }
    }
}

// If API fails, use backup data
if (empty($all_products)) {
    $all_products = [
        [
            'coin' => 'BTC',
            'apr' => '0.27',
            'duration' => 'Flexible',
            'type' => 'FLEXIBLE',
            'maxLabel' => 'Max'
        ],
        [
            'coin' => 'ETH',
            'apr' => '2.59-3.34',
            'duration' => 'Flexible/Locked',
            'type' => 'FLEXIBLE_LOCKED'
        ],
        [
            'coin' => 'EURI',
            'apr' => '8.41',
            'duration' => 'Flexible',
            'type' => 'FLEXIBLE',
            'maxLabel' => 'Max'
        ],
        [
            'coin' => 'SOL',
            'apr' => '1.59-6.42',
            'duration' => 'Flexible/Locked',
            'type' => 'FLEXIBLE_LOCKED'
        ],
        [
            'coin' => 'BABY',
            'apr' => '5.86',
            'duration' => 'Flexible',
            'type' => 'FLEXIBLE'
        ],
        [
            'coin' => 'INIT',
            'apr' => '3.78',
            'duration' => 'Flexible',
            'type' => 'FLEXIBLE'
        ],
        [
            'coin' => 'USDC',
            'apr' => '4.56-10.49',
            'duration' => 'Flexible/Locked',
            'type' => 'FLEXIBLE_LOCKED'
        ],
        [
            'coin' => 'FDUSD',
            'apr' => '10.69-16.37',
            'duration' => 'Flexible/Locked',
            'type' => 'FLEXIBLE_LOCKED'
        ],
        [
            'coin' => 'USDT',
            'apr' => '4.76-6.77',
            'duration' => 'Flexible/Locked',
            'type' => 'FLEXIBLE_LOCKED'
        ],
        [
            'coin' => 'BNB',
            'apr' => '0.19-0.4',
            'duration' => 'Flexible/Locked',
            'type' => 'FLEXIBLE_LOCKED'
        ]
    ];
}

// Get current prices
$symbols = array_unique(array_column($all_products, 'coin'));
$prices = getCurrentPrices($symbols);

// Store previous APR values in session
session_start();
if (!isset($_SESSION['previous_apr'])) {
    $_SESSION['previous_apr'] = [];
}

// Compare APR values and store new ones
foreach ($all_products as &$product) {
    $coin = $product['coin'];
    $current_apr = floatval(str_replace(['%', '~'], '', explode('-', $product['apr'])[0]));
    
    if (isset($_SESSION['previous_apr'][$coin])) {
        $prev_apr = $_SESSION['previous_apr'][$coin];
        $product['apr_change'] = $current_apr - $prev_apr;
    } else {
        $product['apr_change'] = 0;
    }
    
    $_SESSION['previous_apr'][$coin] = $current_apr;
}

// If this is an AJAX request, return only the products data
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
    header('Content-Type: application/json');
    echo json_encode([
        'products' => $all_products,
        'prices' => $prices
    ]);
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal-protected Products</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #999;
            margin-bottom: 30px;
        }
        .products-table {
            width: 100%;
            border-collapse: collapse;
        }
        .products-table th {
            text-align: left;
            padding: 15px;
            border-bottom: 1px solid #333;
            color: #999;
        }
        .products-table td {
            padding: 15px;
            border-bottom: 1px solid #333;
        }
        .coin-cell {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .coin-icon {
            width: 24px;
            height: 24px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 50%;
            background-color: transparent;
        }
        .coin-icon-BTC {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0Y3OTMxQSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIzLjE4OSAxNC4wMmMuMzE0LTIuMDk2LTEuMjgzLTMuMjIzLTMuNDY1LTMuOTc1bC43MDgtMi44NC0xLjcyOC0uNDMtLjY5IDIuNzY1Yy0uNDU0LS4xMTQtLjkyLS4yMi0xLjM4NS0uMzI2bC42OTUtMi43ODNMMTUuNTk2IDZsLS43MDggMi44MzljLS4zNzYtLjA4Ni0uNzQ5LS4xNy0xLjEwNC0uMjZsLjAwMi0uMDA5LTIuMzg0LS41OTUtLjQ2IDEuODQ2czEuMjgzLjI5NCAxLjI1Ni4zMTJjLjcuMTc1LjgyNi42MzguODA1IDEuMDA2bC0uODA2IDMuMjM1Yy4wNDguMDEyLjExLjAzLjE4LjA1N2wtLjE4My0uMDQ1LTEuMTMgNC41MzJjLS4wODYuMjEyLS4zMDMuNTMxLS43OTMuNDEuMDE4LjAyNi0xLjI1Ni0uMzEzLTEuMjU2LS4zMTNsLS44NTggMS45NzggMi4yNS41NjFjLjQxOC4xMDUuODI4LjIxNSAxLjIzMS4zMThsLS43MTUgMi44NzIgMS43MjcuNDMuNzA4LTIuODRjLjQ3Mi4xMjguOTMuMjQ2IDEuMzc4LjM1OGwtLjcwNiAyLjgyOCAxLjcyOC40My43MTUtMi44NjZjMi45NDguNTU4IDUuMTY0LjMzMyA2LjA5Ny0yLjMzMi43NTItMi4xNDYtLjAzNy0zLjM4NS0xLjU4OC00LjE5MiAxLjEzLS4yNiAxLjk4LTEuMDAzIDIuMjA3LTIuNTM4em0tMy45NSA1LjUzOGMtLjUzMyAyLjE0Ny00LjE0OC45ODYtNS4zMi42OTVsLjk1LTMuODA1YzEuMTcyLjI5MyA0LjkyOS44NzIgNC4zNyAzLjExem0uNTM1LTUuNTY5Yy0uNDg3IDEuOTUzLTMuNDk1Ljk2LTQuNDcuNzE3bC44Ni0zLjQ1Yy45NzUuMjQzIDQuMTE4LjY5NiAzLjYxIDIuNzMzeiIvPjwvZz48L3N2Zz4=');
        }
        .coin-icon-ETH {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzYyN0VFQSIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDR2OC44N2w3LjQ5NyAzLjM1eiIvPjxwYXRoIGQ9Ik0xNi40OTggNEw5IDE2LjIybDcuNDk4LTMuMzV6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDIxLjk2OHY2LjAyN0wyNCAxNy42MTZ6Ii8+PHBhdGggZD0iTTE2LjQ5OCAyNy45OTV2LTYuMDI4TDkgMTcuNjE2eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0xNi40OTggMjAuNTczbDcuNDk3LTQuMzUzLTcuNDk3LTMuMzQ4eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjYwMiIgZD0iTTkgMTYuMjJsNy40OTggNC4zNTN2LTcuNzAxeiIvPjwvZz48L2c+PC9zdmc+');
        }
        .coin-icon-EURI {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDY2Y2MiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUuNzUgMTEuMzc1YzIuMDgzIDAgMy43NyAxLjY4NyAzLjc3IDMuNzdzLTEuNjg3IDMuNzctMy43NyAzLjc3LTMuNzctMS42ODctMy43Ny0zLjc3IDEuNjg3LTMuNzcgMy43Ny0zLjc3eiIvPjwvZz48L3N2Zz4=');
        }
        .coin-icon-SOL {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTcuNyAzMTEuNyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM2MC44NzkiIHkxPSIzNTEuNDU1IiB4Mj0iMTQxLjIxMyIgeTI9IjU5LjcxMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5OS42KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBmZmE3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREMxRkZGIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNNjQuNiAyMzcuOWMzLjctMy43IDguMy01LjYgMTMuOS01LjZoMzYwLjNjOC4yIDAgMTIuMyA5LjkgNi41IDE1LjdsLTU5LjkgNTkuOWMtMy43IDMuNy04LjMgNS42LTEzLjkgNS42SDExLjFjLTguMiAwLTEyLjMtOS45LTYuNS0xNS43bDYwLTU5Ljl6IiBmaWxsPSJ1cmwoI2EpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJiIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI2NC44MjkiIHkxPSI0MDEuNjAxIiB4Mj0iNDUuMTYzIiB5Mj0iMTA5Ljg1OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5OS42KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBmZmE3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREMxRkZGIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNNjQuNiAxMy45QzY4LjMgMTAuMiA3Mi45IDguMyA3OC41IDguM2gzNjAuM2M4LjIgMCAxMi4zIDkuOSA2LjUgMTUuN2wtNTkuOSA1OS45Yy0zLjcgMy43LTguMyA1LjYtMTMuOSA1LjZIMTEuMWMtOC4yIDAtMTIuMy05LjktNi41LTE1LjdMNjQuNiAxMy45eiIgZmlsbD0idXJsKCNiKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMTIuNTQ4IiB5MT0iMzc2LjY4OCIgeDI9IjkyLjg4MiIgeTI9Ijg0Ljk0NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDM5OS42KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBmZmE3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjREMxRkZGIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMzMzLjEgMTI1LjljLTMuNy0zLjctOC4zLTUuNi0xMy45LTUuNkgxMS4xYy04LjIgMC0xMi4zIDkuOS02LjUgMTUuN2w1OS45IDU5LjljMy43IDMuNyA4LjMgNS42IDEzLjkgNS42aDM2MC4zYzguMiAwIDEyLjMtOS45IDYuNS0xNS43bC02MC01OS45eiIgZmlsbD0idXJsKCNjKSIvPjwvc3ZnPg==');
        }
        .coin-icon-BABY {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNmZmMwY2IiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgOGE4IDggMCAxIDAgMCAxNiA4IDggMCAwIDAgMC0xNnptMCAyYTYgNiAwIDEgMSAwIDEyIDYgNiAwIDAgMSAwLTEyeiIvPjwvZz48L3N2Zz4=');
        }
        .coin-icon-INIT {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMGIwZmYiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgOGE4IDggMCAxIDAgMCAxNiA4IDggMCAwIDAgMC0xNnptMCAyYTYgNiAwIDEgMSAwIDEyIDYgNiAwIDAgMSAwLTEyeiIvPjwvZz48L3N2Zz4=');
        }
        .coin-icon-USDC {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMyNzc1Q0EiLz48cGF0aCBkPSJNMTYgNkM5LjM3MyA2IDQgMTEuMzczIDQgMThjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMnMxMi01LjM3MyAxMi0xMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyem0zLjA3OSAxNy40NzdjLS4zMjkuMjU1LS43MDEuNDYxLTEuMTE2LjYxNnYxLjgyYS4zOTkuMzk5IDAgMCAxLS4zOTkuMzk5aC0zLjEyN2EuMzk5LjM5OSAwIDAgMS0uMzk5LS4zOTl2LTEuODJhOC4zMjggOC4zMjggMCAwIDEtMS4xMTYtLjYxNmMtMS4wMTYtLjc4OS0xLjY1LTIuMDI1LTEuNjUtMy40MjVWMTQuMzVjMC0xLjQgLjYzNC0yLjYzNiAxLjY1LTMuNDI1YTQuODg2IDQuODg2IDAgMCAxIDEuMTE2LS42MTZWOC40OWMwLS4yMi4xNzkuczE5LjM5OS4zOTkgcy4zOTktLjM5OWgzLjEyN2MuMjIgMCAuMzk5LjE3OS4zOTkuMzk5djEuODJjLjQxNS4xNTQuNzg3LjM2IDEuMTE2LjYxNiAxLjAxNi43ODkgMS42NSAyLjAyNSAxLjY1IDMuNDI1djIuNzAyYzAgMS40LS42MzQgMi42MzYtMS42NSAzLjQyNXoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+');
        }
        .coin-icon-FDUSD {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM2NkE3NkEiLz48cGF0aCBkPSJNMjIgMTYuMjVjMC0zLjMxNS0yLjY4NS02LTYtNnMtNiAyLjY4NS02IDYgMi42ODUgNiA2IDYgNi0yLjY4NSA2LTZ6bS01LjI1IDBoMS41di0xLjVoLTEuNXYxLjV6bS0zIDBoMS41di0xLjVoLTEuNXYxLjV6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==');
        }
        .coin-icon-USDT {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzI2QTE3QiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNy45MjIgMTcuMzgzdi0uMDAyYy0uMTEuMDA4LS42NzcuMDQyLTEuOTQyLjA0Mi0xLjAxIDAtMS43MjEtLjAzLTEuOTcxLS4wNDJ2LjAwM2MtMy44ODgtLjE3MS02Ljc5LS44NDgtNi43OS0xLjY1OCAwLS44MDkgMi45MDItMS40ODYgNi43OS0xLjY2di4wNDdjLjI1NC4wMTguOTgyLjA2MSAyLjAwMy4wNjEgMS4yMjcgMCAxLjg3Ni0uMDQ1IDEuOTM5LS4wNnYtLjA0OGMzLjg4LjE3NCA2Ljc3NS44NTEgNi43NzUgMS42NiAwIC44MDgtMi44OTUgMS40ODUtNi43NzUgMS42NTdtLjAwMi0zLjY2VjEwLjE5SDExLjg5djMuNTMzYy00LjE2Ni4yMi03LjMgMS4wNjQtNy4zIDIuMDQ3IDAgLjk4MyAzLjEzNCAxLjgyNyA3LjMgMi4wNDh2Ni41OGgzLjA2NXYtNi41N2M0LjE2Mi0uMjIgNy4yOTItMS4wNjUgNy4yOTItMi4wNDggMC0uOTg0LTMuMTMtMS44MjgtNy4yOTItMi4wNDciIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=');
        }
        .coin-icon-BNB {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGM0JBMkYiLz48cGF0aCBkPSJNMTIuMTE2IDE0LjQwNEwxNiAxMC41MmwzLjg4NiAzLjg4NiAyLjI2LTIuMjZMMTYgNmwtNi4xNDQgNi4xNDQgMi4yNiAyLjI2ek02IDE2bDIuMjYtMi4yNkwxMC41MiAxNmwtMi4yNiAyLjI2TDYgMTZ6bTYuMTE2IDEuNTk2TDE2IDIxLjQ4bDMuODg2LTMuODg2IDIuMjYgMi4yNTlMMTYgMjZsLTYuMTQ0LTYuMTQ0LS4wMDMtLjAwMyAyLjI2My0yLjI1N3ptMTEuNjI0LTEuNTk2bC0yLjI2LTIuMjZMMjMuNzQgMTZsLTIuMjYgMi4yNkwyNCAxNnptLTkuMjMzLjEyN2wtLjUwNy41MDctLjUwNy0uNTA3LjUwNy0uNTA3LjUwNy41MDd6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==');
        }
        .max-label {
            font-size: 12px;
            color: #999;
            margin-left: 5px;
        }
        .apr-value {
            color: #00ff88;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .apr-indicator {
            font-size: 12px;
            padding: 2px 4px;
            border-radius: 3px;
        }
        .apr-up {
            background-color: rgba(0, 255, 136, 0.2);
            color: #00ff88;
        }
        .apr-down {
            background-color: rgba(255, 59, 59, 0.2);
            color: #ff3b3b;
        }
        .expand-button {
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            float: right;
        }
        .product-details {
            display: none;
            background: #2a2a2a;
            padding: 15px;
        }
        .product-details.expanded {
            display: table-row;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Principal-protected Products</h1>
        <div class="subtitle">Earn rewards on principal-protected products.</div>
        
        <table class="products-table">
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>APR</th>
                    <th>Duration(Days)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($all_products as $product): ?>
                <tr class="product-row">
                    <td>
                        <div class="coin-cell">
                            <img src="<?php echo $coinIcons[$product['coin']]; ?>" 
                                 alt="<?php echo htmlspecialchars($product['coin']); ?>" 
                                 class="coin-icon">
                            <span><?php echo htmlspecialchars($product['coin']); ?></span>
                        </div>
                    </td>
                    <td class="apr-value">
                        <?php echo htmlspecialchars($product['apr']); ?>%
                        <?php if (isset($product['maxLabel'])): ?>
                            <span class="max-label"><?php echo htmlspecialchars($product['maxLabel']); ?></span>
                        <?php endif; ?>
                        <?php if ($product['apr_change'] !== 0): ?>
                            <span class="apr-indicator <?php echo $product['apr_change'] > 0 ? 'apr-up' : 'apr-down'; ?>">
                                <?php echo $product['apr_change'] > 0 ? '+' : ''; echo number_format($product['apr_change'], 2); ?>%
                            </span>
                        <?php endif; ?>
                    </td>
                    <td><?php echo htmlspecialchars($product['duration']); ?></td>
                    <td>
                        <button class="expand-button">▼</button>
                    </td>
                </tr>
                <tr class="product-details">
                    <td colspan="4">
                        <div>
                            <p>Current Price: $<?php echo isset($prices[$product['coin']]) ? number_format((float)$prices[$product['coin']], 2) : 'N/A'; ?></p>
                            <?php if (isset($product['minPurchaseAmount'])): ?>
                            <p>Min Purchase: <?php echo $product['minPurchaseAmount']; ?> <?php echo $product['coin']; ?></p>
                            <p>Max Purchase: <?php echo $product['maxPurchaseAmount']; ?> <?php echo $product['coin']; ?></p>
                            <?php endif; ?>
                        </div>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <script>
        // Add interactivity for expand buttons
        document.querySelectorAll('.expand-button').forEach((button, index) => {
            button.addEventListener('click', () => {
                const detailsRow = document.querySelectorAll('.product-details')[index];
                detailsRow.classList.toggle('expanded');
                button.textContent = detailsRow.classList.contains('expanded') ? '▲' : '▼';
            });
        });

        // Function to update prices and products
        async function updateData() {
            try {
                const response = await fetch(window.location.href, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                });
                const data = await response.json();
                
                // Update the table with new data
                const tbody = document.querySelector('.products-table tbody');
                tbody.innerHTML = '';

                data.products.forEach(product => {
                    const price = data.prices[product.coin] || 'N/A';
                    const aprChangeHtml = product.apr_change !== 0 
                        ? `<span class="apr-indicator ${product.apr_change > 0 ? 'apr-up' : 'apr-down'}">
                            ${product.apr_change > 0 ? '+' : ''}${product.apr_change.toFixed(2)}%
                           </span>`
                        : '';
                    
                    const row = `
                        <tr class="product-row">
                            <td>
                                <div class="coin-cell">
                                    <img src="${$coinIcons[product.coin]}" 
                                         alt="${product.coin}" 
                                         class="coin-icon">
                                    <span>${product.coin}</span>
                                </div>
                            </td>
                            <td class="apr-value">
                                ${product.apr}%
                                ${product.maxLabel ? `<span class="max-label">${product.maxLabel}</span>` : ''}
                                ${aprChangeHtml}
                            </td>
                            <td>${product.duration}</td>
                            <td>
                                <button class="expand-button">▼</button>
                            </td>
                        </tr>
                        <tr class="product-details">
                            <td colspan="4">
                                <div>
                                    <p>Current Price: $${typeof price === 'number' ? price.toFixed(2) : price}</p>
                                    ${product.minPurchaseAmount ? `
                                        <p>Min Purchase: ${product.minPurchaseAmount} ${product.coin}</p>
                                        <p>Max Purchase: ${product.maxPurchaseAmount} ${product.coin}</p>
                                    ` : ''}
                                </div>
                            </td>
                        </tr>
                    `;
                    tbody.innerHTML += row;
                });

                // Reattach event listeners
                document.querySelectorAll('.expand-button').forEach((button, index) => {
                    button.addEventListener('click', () => {
                        const detailsRow = document.querySelectorAll('.product-details')[index];
                        detailsRow.classList.toggle('expanded');
                        button.textContent = detailsRow.classList.contains('expanded') ? '▲' : '▼';
                    });
                });
            } catch (error) {
                console.error('Error updating data:', error);
            }
        }

        // Update data every 5 seconds
        setInterval(updateData, 5000);
    </script>
</body>
</html>
