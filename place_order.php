<?php
require_once 'new.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

try {
    $result = placeOrder(
        $data['symbol'],
        $data['side'],
        $data['type'],
        $data['quantity'],
        $data['price'] ?? null
    );

    if (isset($result['orderId'])) {
        echo json_encode(['success' => true, 'data' => $result]);
    } else {
        echo json_encode(['success' => false, 'message' => $result['msg'] ?? 'Unknown error']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}