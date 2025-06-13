<?php
header('Content-Type: application/json');

include '../../config.php'; // Include your database configuration

$data = []; 

// Get the coin parameter from the GET request
$coin = $_GET['coin'] ?? 'BTC'; // Default to BTC if coin parameter is not set
$currency = $_GET['currency'] ?? '';
$payment_methods = isset($_GET['payment_methods']) ? $_GET['payment_methods'] : '';

// Validate and sanitize the coin parameter (basic example, you might need more robust validation)
// Important: You should have a list of valid coin symbols and check against that list.
$allowed_coins = ['USDT', 'HMSTR', 'BTC', 'USDC', 'FDUSD', 'BNB', 'ETH', 'TRX', 'SHIB', 'XRP', 'SOL', 'TON', 'DOGE', 'PEPE', 'TRUMP']; // Add all your supported coin symbols
if (!in_array($coin, $allowed_coins)) {
    // Handle invalid coin symbol, e.g., return empty data or an error message
    echo json_encode([]); // Return empty data for now
    exit(); // Stop execution
}

// Prepare SQL with optional currency filter
$sql = "SELECT wallet_name, total_orders, completion_rate, thumbs_up_rating, avg_release_time_min, price_inr, amount, min_order_limit, max_order_limit, payment_methods FROM p2p_buy WHERE coins = ?";
$params = [$coin];
$types = 's';
if (!empty($currency)) {
    $sql .= " AND currency = ?";
    $params[] = strtoupper($currency);
    $types .= 's';
}

// Prepare and bind the statement to prevent SQL injection
$stmt = $conn->prepare($sql);
$stmt->bind_param($types, ...$params);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Payment methods OR filter in PHP (show row if any selected method matches any in row, or vice versa)
        if (!empty($payment_methods) && strtolower($payment_methods) !== 'all payment methods') {
            $methods = array_map('trim', explode(',', strtolower($payment_methods)));
            $row_methods = array_map('trim', explode(',', strtolower($row['payment_methods'])));
            // Remove all spaces for flexible match
            $methods = array_map(function($m){ return str_replace(' ', '', $m); }, $methods);
            $row_methods = array_map(function($m){ return str_replace(' ', '', $m); }, $row_methods);
            $match = false;
            foreach ($methods as $method) {
                if (in_array($method, $row_methods)) {
                    $match = true;
                    break;
                }
            }
            if (!$match) {
                foreach ($row_methods as $row_method) {
                    if (in_array($row_method, $methods)) {
                        $match = true;
                        break;
                    }
                }
            }
            if (!$match) continue; // skip this row if no overlap
        }
        $data[] = [
            'wallet_name' => $row['wallet_name'],
            'total_orders' => $row['total_orders'],
            'completion_rate' => $row['completion_rate'],
            'thumbs_up_rating' => $row['thumbs_up_rating'],
            'avg_release_time_min' => $row['avg_release_time_min'],
            'price_inr' => $row['price_inr'],
            'amount' => $row['amount'],
            'min_order_limit' => $row['min_order_limit'],
            'max_order_limit' => $row['max_order_limit'],
            'payment_methods' => $row['payment_methods']
        ];
    }
}

// Close the statement and connection
$stmt->close();
$conn->close();

echo json_encode($data);