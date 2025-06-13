<?php
require_once '../config.php';

// Handle CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get request path
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$path = str_replace('/api/', '', $path);

// Rate limiting check
if (RATE_LIMIT_ENABLED) {
    // Implement rate limiting logic here
}

// API Router
try {
    switch ($path) {
        case 'trade':
            require_once 'endpoints/trade.php';
            break;
            
        case 'market':
            require_once 'endpoints/market.php';
            break;
            
        case 'account':
            require_once 'endpoints/account.php';
            break;
            
        case 'order':
            require_once 'endpoints/order.php';
            break;
            
        case 'ticker':
            require_once 'endpoints/ticker.php';
            break;
            
        case 'depth':
            require_once 'endpoints/depth.php';
            break;
            
        case 'klines':
            require_once 'endpoints/klines.php';
            break;
            
        default:
            throw new Exception('Endpoint not found', 404);
    }
} catch (Exception $e) {
    http_response_code($e->getCode() ?: 500);
    echo json_encode([
        'error' => true,
        'message' => $e->getMessage(),
        'code' => $e->getCode()
    ]);
}
?> 