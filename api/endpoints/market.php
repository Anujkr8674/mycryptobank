<?php
// Check request method
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    throw new Exception('Method not allowed', 405);
}

// Get query parameters
$symbol = $_GET['symbol'] ?? null;
$limit = min((int)($_GET['limit'] ?? 100), 1000);

// Validate parameters
if (!$symbol) {
    throw new Exception('Symbol parameter is required', 400);
}

// Sample market data response
$response = [
    'symbol' => $symbol,
    'price' => '84707.55',
    'volume' => '18870.53',
    'high' => '85500.00',
    'low' => '83140.89',
    'timestamp' => time() * 1000,
    'trades' => [
        [
            'id' => 1,
            'price' => '84707.55',
            'qty' => '0.12345',
            'time' => time() * 1000,
            'isBuyerMaker' => false
        ]
    ]
];

// Send response
echo json_encode($response);
?> 