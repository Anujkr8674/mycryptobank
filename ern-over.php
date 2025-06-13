<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binance Earn</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: #0b0e11;
            color: white;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .crypto-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
            margin-top: 40px;
        }

        .crypto-card {
            background-color: #161920;
            border-radius: 12px;
            padding: 20px;
        }

        .crypto-header {
            margin-bottom: 24px;
        }

        .crypto-title {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .crypto-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        .crypto-symbol {
            font-size: 24px;
            font-weight: 500;
            color: white;
        }

        .crypto-details {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 8px;
            margin-bottom: 12px;
            align-items: center;
        }

        .label {
            color: #848e9c;
            font-size: 14px;
        }

        .value {
            color: white;
            font-size: 14px;
        }

        .crypto-types {
            display: flex;
            gap: 16px;
            color: #848e9c;
            font-size: 14px;
        }

        .price-change {
            font-size: 14px;
            font-weight: 500;
        }

        .price-up {
            color: #02C076;
        }

        .price-down {
            color: #F6465D;
        }

        .apr-section {
            margin-top: auto;
        }

        .apr-label {
            color: #848e9c;
            font-size: 14px;
            margin-bottom: 8px;
        }

        .apr-value {
            font-size: 28px;
            font-weight: 500;
            color: #02C076;
        }

        @media screen and (max-width: 600px) {
            .crypto-cards {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <?php
    // API Configuration
    define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
    define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
    define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');

    // Crypto data array
    $cryptoData = [
        [
            'symbol' => 'USDC',
            'pair' => 'USDCUSDT',
            'icon' => 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMyNzc1Q0EiLz48cGF0aCBkPSJNMjAgOEMxMy4zNzIgOCA4IDEzLjM3MiA4IDIwYzAgNi42MjggNS4zNzIgMTIgMTIgMTJzMTItNS4zNzIgMTItMTJjMC02LjYyOC01LjM3Mi0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTUuNTIzIDQuNDc3LTEwIDEwLTEwczEwIDQuNDc3IDEwIDEwYzAgNS41MjMtNC40NzcgMTAtMTAgMTB6IiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yMiAxNmgtNHY4aDR2LTh6bS0yLTRjLTEuMTA1IDAtMiAuODk1LTIgMnMuODk1IDIgMiAyIDItLjg5NSAyLTItLjg5NS0yLTItMnoiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
            'types' => ['Simple Earn', 'Flexible']
        ],
        [
            'symbol' => 'USDT',
            'pair' => 'BUSDUSDT',
            'icon' => 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMyNkE2OUIiLz48cGF0aCBkPSJNMjAgOEMxMy4zNzIgOCA4IDEzLjM3MiA4IDIwYzAgNi42MjggNS4zNzIgMTIgMTIgMTJzMTItNS4zNzIgMTItMTJjMC02LjYyOC01LjM3Mi0xMi0xMi0xMnptMCAyMmMtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMCAwLTUuNTIzIDQuNDc3LTEwIDEwLTEwczEwIDQuNDc3IDEwIDEwYzAgNS41MjMtNC40NzcgMTAtMTAgMTB6IiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0yMCAxNnY4bTAtMTJjLTEuMTA1IDAtMiAuODk1LTIgMnMuODk1IDIgMiAyIDItLjg5NSAyLTItLjg5NS0yLTItMnoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==',
            'types' => ['Simple Earn', 'Flexible']
        ],
        [
            'symbol' => 'ETH',
            'pair' => 'ETHUSDT',
            'icon' => 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MjdFRUEiLz48cGF0aCBkPSJNMjAgOGwtOCAxMiA4IDQgOC00LTgtMTJ6bTAgMjBsLTgtMTAgOCA0IDggLTQtOCAxMHoiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
            'types' => ['Simple Earn', 'Flexible']
        ],
        [
            'symbol' => 'AXL',
            'pair' => 'AXLUSDT',
            'icon' => 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJNMjAgOGwtOCAxNmg0bDQtOCA0IDhoNGwtOC0xNnoiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
            'types' => ['Simple Earn', 'Locked/Flexible']
        ]
    ];

    // Fetch APRs from Binance Earn API
    $earnApiUrl = 'https://www.binance.com/bapi/earn/v1/public/simple/earn/product/list';
    $ch = curl_init($earnApiUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'User-Agent: Mozilla/5.0'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    $aprData = json_decode($response, true);
    $aprMap = [];
    if (isset($aprData['data']) && is_array($aprData['data'])) {
        foreach ($aprData['data'] as $product) {
            $asset = $product['asset'];
            if (isset($product['annualInterestRate'])) {
                $aprMap[$asset] = ($product['annualInterestRate'] * 100) . '%';
            } elseif (isset($product['minAnnualInterestRate']) && isset($product['maxAnnualInterestRate'])) {
                $aprMap[$asset] = ($product['minAnnualInterestRate'] * 100) . '%~' . ($product['maxAnnualInterestRate'] * 100) . '%';
            }
        }
    }
    // Attach APR to $cryptoData
    foreach ($cryptoData as &$crypto) {
        $crypto['apr'] = isset($aprMap[$crypto['symbol']]) ? $aprMap[$crypto['symbol']] : 'N/A';
    }
    unset($crypto);
    ?>

    <div class="container">
        <div class="crypto-cards">
            <?php foreach ($cryptoData as $crypto): ?>
            <div class="crypto-card" id="card-<?php echo $crypto['symbol']; ?>">
                <div class="crypto-header">
                    <div class="crypto-title">
                        <img src="<?php echo $crypto['icon']; ?>" alt="<?php echo $crypto['symbol']; ?>" class="crypto-icon">
                        <span class="crypto-symbol"><?php echo $crypto['symbol']; ?></span>
                    </div>
                    
                    <div class="crypto-details">
                        <span class="label">Price:</span>
                        <span class="value" id="price-<?php echo $crypto['symbol']; ?>">$0.0000</span>
                        
                        <span class="label">24h Change:</span>
                        <span class="price-change" id="change-<?php echo $crypto['symbol']; ?>">0.00%</span>
                    </div>

                    <div class="crypto-types">
                        <?php foreach ($crypto['types'] as $type): ?>
                        <span><?php echo $type; ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="apr-section">
                    <div class="apr-label">APR</div>
                    <div class="apr-value"><?php echo $crypto['apr']; ?></div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <script>
        let previousPrices = {};

        async function updatePrices() {
            try {
                const symbols = <?php echo json_encode(array_column($cryptoData, 'symbol')); ?>;
                const pairs = <?php echo json_encode(array_column($cryptoData, 'pair')); ?>;

                for (let i = 0; i < symbols.length; i++) {
                    const symbol = symbols[i];
                    const pair = pairs[i];
                    
                    const response = await fetch(`<?php echo BINANCE_API_URL; ?>ticker/24hr?symbol=${pair}`);
                    const data = await response.json();
                    
                    if (data.lastPrice && data.priceChangePercent) {
                        const priceElement = document.getElementById(`price-${symbol}`);
                        const changeElement = document.getElementById(`change-${symbol}`);
                        const currentPrice = parseFloat(data.lastPrice);
                        const priceChangePercent = parseFloat(data.priceChangePercent);
                        
                        // Update price with proper formatting (4 decimal places for all)
                        priceElement.textContent = `$${currentPrice.toFixed(4)}`;
                        
                        // Update price change percentage
                        const sign = priceChangePercent >= 0 ? '+' : '';
                        changeElement.textContent = `${sign}${priceChangePercent.toFixed(2)}%`;
                        changeElement.className = `price-change ${priceChangePercent >= 0 ? 'price-up' : 'price-down'}`;
                        
                        previousPrices[symbol] = currentPrice;
                    }
                }
            } catch (error) {
                console.error('Error updating prices:', error);
            }
        }

        // Update prices every 2 seconds
        setInterval(updatePrices, 2000);
        // Initial update
        updatePrices();
        </script>
    </div>
</body>
</html>
