<?php
include 'config.php';

// Binance API credentials
define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');

// Handle AJAX request for live BTC price
if (isset($_GET['get_btc_inr'])) {
    $url = BINANCE_API_URL . "ticker/price?symbol=BTCUSDT";
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    $btc_usdt = isset($data['price']) ? floatval($data['price']) : 0;

    // Get USDT/INR from Binance (if available) or fallback to CoinGecko
    $url_inr = BINANCE_API_URL . "ticker/price?symbol=USDTINR";
    $response_inr = @file_get_contents($url_inr);
    $data_inr = json_decode($response_inr, true);
    $usdt_inr = isset($data_inr['price']) ? floatval($data_inr['price']) : 0;

    if ($usdt_inr == 0) {
        // fallback to CoinGecko
        $cg = file_get_contents("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr");
        $cg_data = json_decode($cg, true);
        $usdt_inr = isset($cg_data['tether']['inr']) ? floatval($cg_data['tether']['inr']) : 0;
    }

    $btc_inr = $btc_usdt * $usdt_inr;
    echo json_encode(['btc_inr' => $btc_inr, 'btc_usdt' => $btc_usdt, 'usdt_inr' => $usdt_inr]);
    exit;
}

// Handle form submission
$success = false;
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate required fields
    $required_fields = ['btc_amount', 'inr_amount', 'payment_method', 'payment_instruction'];
    $missing_fields = [];
    
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field]) || empty($_POST[$field])) {
            $missing_fields[] = $field;
        }
    }
    
    if (!empty($missing_fields)) {
        $error = "Please fill in all required fields: " . implode(', ', $missing_fields);
    } else {
        $btc_amount = floatval($_POST['btc_amount']);
        $inr_amount = floatval($_POST['inr_amount']);
        $payment_method = $_POST['payment_method'];
        $payment_instruction = $_POST['payment_instruction'];
        $fee_btc = floatval($_POST['fee_btc']);
        $fee_inr = floatval($_POST['fee_inr']);
        $escrow_btc = floatval($_POST['escrow_btc']);
        $escrow_inr = floatval($_POST['escrow_inr']);

        // Validate numeric values
        if ($btc_amount <= 0 || $inr_amount <= 0) {
            $error = "Invalid amount values";
        } else {
            $stmt = $conn->prepare("INSERT INTO btc_sell_orders (btc_amount, inr_amount, payment_method, payment_instruction, fee_btc, fee_inr, escrow_btc, escrow_inr) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ddssdddd", $btc_amount, $inr_amount, $payment_method, $payment_instruction, $fee_btc, $fee_inr, $escrow_btc, $escrow_inr);
            
            if ($stmt->execute()) {
                // Redirect to avoid resubmission and show success message
                header('Location: ' . strtok($_SERVER['REQUEST_URI'], '?') . '?success=1');
                exit;
            } else {
                $error = "Database error: " . $conn->error;
            }
            $stmt->close();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <title>Sell BTC | P2P</title> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #1a1a1a;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            padding-top: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        .sell-container {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            background: #2d2d2d;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            max-width: 900px;
            width: 100%;
        }
        .sell-form {
            flex: 1 1 320px;
            min-width: 320px;
        }
        .summary-card {
            flex: 1 1 320px;
            min-width: 280px;
            background: #232323;
            border-radius: 18px;
            padding: 32px 28px;
            margin-top: 10px;
            color: #fff;
            box-shadow: 0 4px 24px rgba(0,0,0,0.18);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .summary-title {
            font-size: 1.18rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #fff;
        }
        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4px;
        }
        .summary-label {
            color: #bdbdbd;
            font-size: 1rem;
        }
        .summary-value {
            font-weight: 500;
            font-size: 1rem;
            color: #fff;
        }
        .summary-badge {
            background: #ff9800;
            color: #fff;
            padding: 2px 12px;
            border-radius: 8px;
            font-size: 0.95rem;
            font-weight: 600;
            margin-left: 8px;
        }
        .fee-info {
            font-size: 1.1em;
            color: #ff9800;
            cursor: pointer;
            margin-left: 4px;
        }
        .summary-divider {
            border: none;
            border-top: 1px solid #333;
            margin: 12px 0 10px 0;
        }
        .input-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #aaa;
        }
        input, select {
            width: 100%;
            padding: 12px;
            border: none;
            background: #404040;
            color: white;
            border-radius: 10px;
            margin-top: 8px;
            font-size: 16px;
        }
        input:focus, select:focus {
            outline: none;
            box-shadow: 0 0 0 2px #666;
        }
        .sell-btn {
            width: 100%;
            padding: 14px;
            background: #1976d2;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 18px;
            cursor: pointer;
            margin-top: 10px;
            transition: background 0.2s;
        }
        .sell-btn:hover {
            background: #1565c0;
        }
        .success {
            color: #4caf50;
            text-align: center;
            margin-bottom: 15px;
        }
        .error {
            color: #ff4444;
            text-align: center;
            margin-bottom: 15px;
        }
        @media (max-width: 900px) {
            .sell-container {
                flex-direction: column;
                align-items: stretch;
            }
            .summary-card {
                margin-top: 24px;
                min-width: unset;
                width: 100%;
                padding: 24px 12px;
            }
        }
        @media (max-width: 600px) {
            .summary-card {
                padding: 16px 4vw;
                border-radius: 12px;
            }
            .summary-title {
                font-size: 1.05rem;
            }
            .summary-label, .summary-value {
                font-size: 0.98rem;
            }
        }
        .modal-success {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        .modal-success-content {
            background: #232323;
            color: #4caf50;
            font-size: 1.3rem;
            font-weight: 600;
            padding: 32px 48px;
            border-radius: 16px;
            box-shadow: 0 4px 32px rgba(0,0,0,0.18);
            text-align: center;
        }
    </style>
</head>
<body>
    <h1 class="heading">Sell Bitcoin (BTC) for INR</h1>
    <div class="sell-container">
        <form class="sell-form" method="POST" id="sellForm" autocomplete="off" onsubmit="return validateForm()">
            <?php if ($error): ?>
                <div class="error"><?= htmlspecialchars($error) ?></div>
            <?php endif; ?>
            <div class="input-group">
                <label for="btc_amount">Amount to sell (BTC)</label>
                <input type="number" step="any" min="0.00001" id="btc_amount" name="btc_amount" required>
            </div>
            <div class="input-group">
                <label for="inr_amount">You get (INR)</label>
                <input type="number" step="any" id="inr_amount" name="inr_amount" readonly required>
            </div>
            <div class="input-group">
                <label for="payment_method">Payment method</label>
                <select id="payment_method" name="payment_method" required>
                    <option value="">Select payment method</option>
                    <option value="UPI">UPI</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Paytm">Paytm</option>
                </select>
            </div>
            <div class="input-group">
                <label for="payment_instruction">My payment instruction</label>
                <input type="text" id="payment_instruction" name="payment_instruction" maxlength="255" required placeholder="Enter your UPI ID, bank details, etc.">
            </div>
            <!-- Hidden fields for fee/escrow -->
            <input type="hidden" id="fee_btc" name="fee_btc">
            <input type="hidden" id="fee_inr" name="fee_inr">
            <input type="hidden" id="escrow_btc" name="escrow_btc">
            <input type="hidden" id="escrow_inr" name="escrow_inr">
            <button type="submit" class="sell-btn" id="sellBtn">Accept offer for <span id="offer_inr">0</span> INR</button>
        </form>
        <div class="summary-card" id="summaryCard">
            <h3 class="summary-title">Amount to sell</h3>
            <div class="summary-row">
                <span class="summary-label">BTC</span>
                <span class="summary-value"><span id="summary_btc">0</span> BTC</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">INR</span>
                <span class="summary-value">≈ <span id="summary_inr">0</span> INR</span>
            </div>
            <hr class="summary-divider">
            <div class="summary-row" style="align-items:center;">
                <span class="summary-label">Trading fee <span class="fee-info" title="Platform fee for this transaction">&#9432;</span></span>
                <span class="summary-badge">FEE 0.5%</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">BTC</span>
                <span class="summary-value"><span id="summary_fee_btc">0</span> BTC</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">INR</span>
                <span class="summary-value">≈ <span id="summary_fee_inr">0</span> INR</span>
            </div>
            <hr class="summary-divider">
            <h3 class="summary-title">Amount to be deposited in escrow</h3>
            <div class="summary-row">
                <span class="summary-label">BTC</span>
                <span class="summary-value"><span id="summary_escrow_btc">0</span> BTC</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">INR</span>
                <span class="summary-value">≈ <span id="summary_escrow_inr">0</span> INR</span>
            </div>
        </div>
    </div>
    <?php if (isset($_GET['success']) && $_GET['success'] == 1): ?>
        <div class="modal-success" id="modalSuccess">
            <div class="modal-success-content">Order placed successfully!</div>
        </div>
    <?php endif; ?>
    <script>
        let btcInr = 0;
        let lastBtcAmount = 0;

        // Fetch live BTC/INR price from backend
        function fetchBtcInr() {
            fetch('?get_btc_inr=1')
                .then(res => res.json())
                .then(data => {
                    btcInr = data.btc_inr;
                    updateAll();
                });
        }

        function updateAll() {
            const btcAmount = parseFloat(document.getElementById('btc_amount').value) || 0;
            const inrAmount = btcAmount * btcInr;
            const feeBtc = btcAmount * 0.005;
            const feeInr = inrAmount * 0.005;
            const escrowBtc = btcAmount + feeBtc;
            const escrowInr = inrAmount + feeInr;

            document.getElementById('inr_amount').value = inrAmount ? inrAmount.toFixed(2) : '';
            document.getElementById('offer_inr').innerText = inrAmount ? inrAmount.toFixed(2) : '0';

            document.getElementById('summary_btc').innerText = btcAmount ? btcAmount.toFixed(8) : '0';
            document.getElementById('summary_inr').innerText = inrAmount ? inrAmount.toFixed(2) : '0';
            document.getElementById('summary_fee_btc').innerText = feeBtc ? feeBtc.toFixed(8) : '0';
            document.getElementById('summary_fee_inr').innerText = feeInr ? feeInr.toFixed(2) : '0';
            document.getElementById('summary_escrow_btc').innerText = escrowBtc ? escrowBtc.toFixed(8) : '0';
            document.getElementById('summary_escrow_inr').innerText = escrowInr ? escrowInr.toFixed(2) : '0';

            // Hidden fields for backend
            document.getElementById('fee_btc').value = feeBtc;
            document.getElementById('fee_inr').value = feeInr;
            document.getElementById('escrow_btc').value = escrowBtc;
            document.getElementById('escrow_inr').value = escrowInr;
        }

        document.getElementById('btc_amount').addEventListener('input', updateAll);

        // On page load, fetch price and set interval for live update
        fetchBtcInr();
        setInterval(fetchBtcInr, 3000); // update every 3s

        function validateForm() {
            const btcAmount = parseFloat(document.getElementById('btc_amount').value);
            const paymentMethod = document.getElementById('payment_method').value;
            const paymentInstruction = document.getElementById('payment_instruction').value;
            
            if (!btcAmount || btcAmount <= 0) {
                alert('Please enter a valid BTC amount');
                return false;
            }
            
            if (!paymentMethod) {
                alert('Please select a payment method');
                return false;
            }
            
            if (!paymentInstruction.trim()) {
                alert('Please enter payment instructions');
                return false;
            }
            
            return true;
        }

        // Auto-hide modal success popup after 2.5 seconds and remove ?success=1 from URL
        window.addEventListener('DOMContentLoaded', function() {
            var modal = document.getElementById('modalSuccess');
            if (modal) {
                setTimeout(function() {
                    modal.style.display = 'none';
                    // Remove ?success=1 from URL without reloading
                    if (window.history.replaceState) {
                        const url = new URL(window.location);
                        url.searchParams.delete('success');
                        window.history.replaceState({}, document.title, url.pathname + url.search);
                    }
                }, 2500);
            }
        });
    </script>
</body>
</html>