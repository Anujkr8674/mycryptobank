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
    $btc_amount = floatval($_POST['btc_amount']);
    $inr_amount = floatval($_POST['inr_amount']);
    $payment_method = $_POST['payment_method'];
    $payment_instruction = $_POST['payment_instruction'];
    $fee_btc = floatval($_POST['fee_btc']);
    $fee_inr = floatval($_POST['fee_inr']);
    $escrow_btc = floatval($_POST['escrow_btc']);
    $escrow_inr = floatval($_POST['escrow_inr']);

    $stmt = $conn->prepare("INSERT INTO btc_sell_orders (btc_amount, inr_amount, payment_method, payment_instruction, fee_btc, fee_inr, escrow_btc, escrow_inr) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ddssdddd", $btc_amount, $inr_amount, $payment_method, $payment_instruction, $fee_btc, $fee_inr, $escrow_btc, $escrow_inr);
    if ($stmt->execute()) {
        $success = true;
    } else {
        $error = "Database error: " . $conn->error;
    }
    $stmt->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sell BTC | P2P</title>
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
            min-width: 320px;
            background: #232323;
            border-radius: 16px;
            padding: 32px 32px 32px 32px;
            margin-top: 10px;
            color: #fff;
            box-sizing: border-box;
        }
        .summary-card h3 {
            margin-top: 0;
            margin-bottom: 28px;
            font-size: 1.6rem;
            font-weight: bold;
            letter-spacing: 0.5px;
        }
        .summary-row {
            margin-bottom: 22px;
            font-size: 1.15rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .summary-fee {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 22px;
        }
        .fee-badge {
            background: #ff9800;
            color: #fff;
            padding: 3px 12px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            margin-right: 10px;
            letter-spacing: 0.5px;
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
        }
        @media (max-width: 600px) {
            .summary-card {
                padding: 18px 8px;
                min-width: unset;
            }
            .summary-card h3 {
                font-size: 1.2rem;
                margin-bottom: 18px;
            }
            .summary-row, .summary-fee {
                font-size: 1rem;
                margin-bottom: 14px;
            }
            .fee-badge {
                font-size: 0.95rem;
                padding: 2px 8px;
            }
        }
    </style>
</head>
<body>
    <h1 class="heading">Sell Bitcoin (BTC) for INR</h1>
    <div class="sell-container">
        <form class="sell-form" method="POST" id="sellForm" autocomplete="off">
            <?php if ($success): ?>
                <div class="success">Order placed successfully!</div>
            <?php elseif ($error): ?>
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
            <h3>Summary</h3>
            <div class="summary-row">
                Amount to sell:
                <b><span id="summary_btc">0</span> BTC</b>
                ≈
                <b><span id="summary_inr">0</span> INR</b>
            </div>
            <div class="summary-fee">
                <span class="fee-badge">FEE 0.5%</span>
                <span>
                    <b><span id="summary_fee_btc">0</span> BTC</b>
                    ≈
                    <b><span id="summary_fee_inr">0</span> INR</b>
                </span>
            </div>
            <div class="summary-row">
                Amount to be deposited in escrow:
                <b><span id="summary_escrow_btc">0</span> BTC</b>
                ≈
                <b><span id="summary_escrow_inr">0</span> INR</b>
            </div>
        </div>
    </div>
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
        setInterval(fetchBtcInr, 30000); // update every 30s
    </script>
</body>
</html>