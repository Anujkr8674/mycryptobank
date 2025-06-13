<?php
include 'config.php';

// Handle AJAX request for live USDT price
if (isset($_GET['get_usdt_inr'])) {
    $cg = file_get_contents("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr");
    $cg_data = json_decode($cg, true);
    $usdt_inr = isset($cg_data['tether']['inr']) ? floatval($cg_data['tether']['inr']) : 0;
    echo json_encode(['usdt_inr' => $usdt_inr]);
    exit;
}

// Handle form submission
$success = false;
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $required_fields = ['usdt_amount', 'inr_amount', 'payment_method', 'payment_instruction'];
    $missing_fields = [];
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field]) || empty($_POST[$field])) {
            $missing_fields[] = $field;
        }
    }
    if (!empty($missing_fields)) {
        $error = "Please fill in all required fields: " . implode(', ', $missing_fields);
    } else {
        $usdt_amount = floatval($_POST['usdt_amount']);
        $inr_amount = floatval($_POST['inr_amount']);
        $payment_method = $_POST['payment_method'];
        $payment_instruction = $_POST['payment_instruction'];
        $fee_usdt = floatval($_POST['fee_usdt']);
        $fee_inr = floatval($_POST['fee_inr']);
        $escrow_usdt = floatval($_POST['escrow_usdt']);
        $escrow_inr = floatval($_POST['escrow_inr']);

        if ($usdt_amount <= 0 || $inr_amount <= 0) {
            $error = "Invalid amount values";
        } else {
            $stmt = $conn->prepare("INSERT INTO usdt_sell_orders (usdt_amount, inr_amount, payment_method, payment_instruction, fee_usdt, fee_inr, escrow_usdt, escrow_inr) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ddssdddd", $usdt_amount, $inr_amount, $payment_method, $payment_instruction, $fee_usdt, $fee_inr, $escrow_usdt, $escrow_inr);
            if ($stmt->execute()) {
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
    <title>Sell USDT | P2P</title>
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
    <h1 class="heading">Sell USDT for INR</h1>
    <div class="sell-container">
        <form class="sell-form" method="POST" id="sellFormUSDT" autocomplete="off" onsubmit="return validateFormUSDT()">
            <?php if ($error): ?>
                <div class="error"><?= htmlspecialchars($error) ?></div>
            <?php endif; ?>
            <div class="input-group">
                <label for="usdt_amount">Amount to sell (USDT)</label>
                <input type="number" step="any" min="0.01" id="usdt_amount" name="usdt_amount" required>
            </div>
            <div class="input-group">
                <label for="inr_amount_usdt">You get (INR)</label>
                <input type="number" step="any" id="inr_amount_usdt" name="inr_amount" required>
            </div>
            <div class="input-group">
                <label for="payment_method_usdt">Payment method</label>
                <select id="payment_method_usdt" name="payment_method" required>
                    <option value="">Select payment method</option>
                    <option value="UPI">UPI</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Paytm">Paytm</option>
                </select>
            </div>
            <div class="input-group">
                <label for="payment_instruction_usdt">My payment instruction</label>
                <input type="text" id="payment_instruction_usdt" name="payment_instruction" maxlength="255" required placeholder="Enter your UPI ID, bank details, etc.">
            </div>
            <!-- Hidden fields for fee/escrow -->
            <input type="hidden" id="fee_usdt" name="fee_usdt">
            <input type="hidden" id="fee_inr_usdt" name="fee_inr">
            <input type="hidden" id="escrow_usdt" name="escrow_usdt">
            <input type="hidden" id="escrow_inr_usdt" name="escrow_inr">
            <button type="submit" class="sell-btn" id="sellBtnUSDT">Accept offer for <span id="offer_inr_usdt">0</span> INR</button>
        </form>
        <div class="summary-card" id="summaryCardUSDT">
            <h3 class="summary-title">Amount to sell</h3>
            <div class="summary-row">
                <span class="summary-label">USDT</span>
                <span class="summary-value"><span id="summary_usdt">0</span> USDT</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">INR</span>
                <span class="summary-value">≈ <span id="summary_inr_usdt">0</span> INR</span>
            </div>
            <hr class="summary-divider">
            <div class="summary-row" style="align-items:center;">
                <span class="summary-label">Trading fee <span class="fee-info" title="Platform fee for this transaction">&#9432;</span></span>
                <span class="summary-badge">FEE 0.5%</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">USDT</span>
                <span class="summary-value"><span id="summary_fee_usdt">0</span> USDT</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">INR</span>
                <span class="summary-value">≈ <span id="summary_fee_inr_usdt">0</span> INR</span>
            </div>
            <hr class="summary-divider">
            <h3 class="summary-title">Amount to be deposited in escrow</h3>
            <div class="summary-row">
                <span class="summary-label">USDT</span>
                <span class="summary-value"><span id="summary_escrow_usdt">0</span> USDT</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">INR</span>
                <span class="summary-value">≈ <span id="summary_escrow_inr_usdt">0</span> INR</span>
            </div>
        </div>
    </div>
    <?php if (isset($_GET['success']) && $_GET['success'] == 1): ?>
        <div class="modal-success" id="modalSuccess">
            <div class="modal-success-content">Order placed successfully!</div>
        </div>
    <?php endif; ?>
    <script>
        let usdtInr = 0;
        let priceFetched = false;
        let lastChanged = null; // Track which field was last changed

        function fetchUsdtInrAndUpdateUI(showLoading = true) {
            if (showLoading) document.getElementById('inr_amount_usdt').placeholder = 'Loading...';
            fetch('?get_usdt_inr=1')
                .then(res => res.json())
                .then(data => {
                    usdtInr = data.usdt_inr;
                    priceFetched = true;
                    updateAllUSDT();
                })
                .catch(() => {
                    priceFetched = false;
                    document.getElementById('inr_amount_usdt').placeholder = 'Price error!';
                })
                .finally(() => {
                    if (showLoading) document.getElementById('inr_amount_usdt').placeholder = '';
                });
        }

        function updateAllUSDT() {
            const usdtAmount = parseFloat(document.getElementById('usdt_amount').value) || 0;
            const inrAmount = parseFloat(document.getElementById('inr_amount_usdt').value) || 0;
            if (!priceFetched) {
                document.getElementById('inr_amount_usdt').value = '';
                document.getElementById('offer_inr_usdt').innerText = '0';
                return;
            }
            let calcUsdt = usdtAmount;
            let calcInr = inrAmount;
            if (lastChanged === 'usdt') {
                calcInr = usdtAmount * usdtInr;
                document.getElementById('inr_amount_usdt').value = usdtAmount ? calcInr.toFixed(2) : '';
            } else if (lastChanged === 'inr') {
                calcUsdt = inrAmount / usdtInr;
                document.getElementById('usdt_amount').value = inrAmount ? calcUsdt.toFixed(6) : '';
            }
            const feeUsdt = calcUsdt * 0.005;
            const feeInr = calcInr * 0.005;
            const escrowUsdt = calcUsdt + feeUsdt;
            const escrowInr = calcInr + feeInr;
            document.getElementById('offer_inr_usdt').innerText = calcInr ? calcInr.toFixed(2) : '0';
            document.getElementById('summary_usdt').innerText = calcUsdt ? calcUsdt.toFixed(2) : '0';
            document.getElementById('summary_inr_usdt').innerText = calcInr ? calcInr.toFixed(2) : '0';
            document.getElementById('summary_fee_usdt').innerText = feeUsdt ? feeUsdt.toFixed(2) : '0';
            document.getElementById('summary_fee_inr_usdt').innerText = feeInr ? feeInr.toFixed(2) : '0';
            document.getElementById('summary_escrow_usdt').innerText = escrowUsdt ? escrowUsdt.toFixed(2) : '0';
            document.getElementById('summary_escrow_inr_usdt').innerText = escrowInr ? escrowInr.toFixed(2) : '0';
            document.getElementById('fee_usdt').value = feeUsdt;
            document.getElementById('fee_inr_usdt').value = feeInr;
            document.getElementById('escrow_usdt').value = escrowUsdt;
            document.getElementById('escrow_inr_usdt').value = escrowInr;
        }

        // Page load par ek hi API call
        fetchUsdtInrAndUpdateUI();

        // User input par calculation
        document.getElementById('usdt_amount').addEventListener('input', function() {
            lastChanged = 'usdt';
            updateAllUSDT();
        });
        document.getElementById('inr_amount_usdt').addEventListener('input', function() {
            lastChanged = 'inr';
            updateAllUSDT();
        });

        // Optional: Refresh Price button
        const refreshBtn = document.createElement('button');
        refreshBtn.type = 'button';
        refreshBtn.innerText = 'Refresh Price';
        refreshBtn.style = 'margin: 10px 0 20px 0; padding: 8px 18px; background:#1976d2;color:#fff;border:none;border-radius:8px;cursor:pointer;';
        refreshBtn.onclick = function() {
            fetchUsdtInrAndUpdateUI();
        };
        document.querySelector('.sell-form').insertBefore(refreshBtn, document.querySelector('.input-group:nth-child(2)'));

        function validateFormUSDT() {
            const usdtAmount = parseFloat(document.getElementById('usdt_amount').value);
            const paymentMethod = document.getElementById('payment_method_usdt').value;
            const paymentInstruction = document.getElementById('payment_instruction_usdt').value;
            if (!usdtAmount || usdtAmount <= 0) {
                alert('Please enter a valid USDT amount');
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
        window.addEventListener('DOMContentLoaded', function() {
            var modal = document.getElementById('modalSuccess');
            if (modal) {
                setTimeout(function() {
                    modal.style.display = 'none';
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