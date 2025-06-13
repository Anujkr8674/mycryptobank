<?php
header('Content-Type: application/json');

include '../../config.php'; // Include your database configuration

$data = []; // Array to hold your fetched data

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
$sql = "SELECT wallet_name, total_orders, completion_rate, thumbs_up_rating, avg_release_time_min, price_inr, amount, min_order_limit, max_order_limit, payment_methods FROM p2p_sell WHERE coins = ?";
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

// Define the clean_label function here (or ensure it's at the top of the file)
function clean_label($str) {
    return strtolower(preg_replace('/[^a-z0-9]/', '', $str));
}

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if (!empty($payment_methods) && strtolower($payment_methods) !== 'all payment methods') {
            $methods = array_map('trim', explode(',', $payment_methods)); // Selected filter methods (e.g. ['UPI', 'Digital eRupee'])
            $row_methods = array_map('trim', explode(',', $row['payment_methods'])); // Methods for the current row (e.g. ['IMPS', 'Bank Transfer (India)', 'UPI'])

            // Clean all labels for flexible match (e.g. methods: ['upi', 'digitaleurpee'], row_methods: ['imps', 'banktransferindia', 'upi'])
            $cleaned_methods = array_map('clean_label', $methods);
            $cleaned_row_methods = array_map('clean_label', $row_methods);

            // Find common elements between cleaned arrays (e.g. ['upi'])
            $common_methods = array_intersect($cleaned_methods, $cleaned_row_methods);

            // If there are no common elements, skip the row. If there's at least one common element, the row is a match.
            if (empty($common_methods)) {
                continue; // skip this row
            }
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
            'payment_methods' => $row['payment_methods'] // Keep original format for display
        ];
    }
}

// Close the statement and connection
$stmt->close();
$conn->close();

echo json_encode($data);

?> 