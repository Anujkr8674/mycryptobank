<?php
header('Content-Type: application/json');

// Binance API Secret
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$queryString = $data['queryString'] ?? '';

// Generate signature
$signature = hash_hmac('sha256', $queryString, BINANCE_API_SECRET);

// Return signature
echo json_encode(['signature' => $signature]);
?> 