<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Base rates for each coin (from the image)
$baseRates = [
    'BTC' => 1.150538,
    'ETH' => 2.778427,
    'USDT' => 6.143581,
    'XRP' => 6.669654,
    'SOL' => 8.384161,
    'USDC' => 5.54755,
    'DOGE' => 4.365318,
    'ADA' => 5.272767,
    'BNB' => 13.414468
];

// Add small random variations to simulate live updates
$liveRates = [];
foreach ($baseRates as $coin => $rate) {
    // Random variation between -0.000001 and +0.000001
    $variation = (mt_rand(-100, 100) / 100000000);
    $newRate = $rate + $variation;
    
    $liveRates[] = [
        'asset' => $coin,
        'annualRate' => number_format($newRate, 6, '.', ''),
        'hourlyRate' => number_format($newRate / (24 * 365), 6, '.', ''),
        'timestamp' => time()
    ];
}

echo json_encode($liveRates);
?> 