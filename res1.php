<?php
// First check if this is an AJAX request
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest') {
    // Return only the data for AJAX requests
    $symbols = ['BTCUSDT', 'BNBUSDT', 'ETHUSDT', 'UNIUSDT'];
    $symbolsData = [];
    foreach ($symbols as $symbol) {
        $symbolsData[$symbol] = getSymbolData($symbol);
    }
    header('Content-Type: application/json');
    echo json_encode($symbolsData);
    exit;
}

// Initial data load for first page render
define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');

function makeBinanceRequest($endpoint, $params = []) {
    $url = BINANCE_API_URL . $endpoint;
    if (!empty($params)) {
        $url .= '?' . http_build_query($params);
    }
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'X-MBX-APIKEY: ' . BINANCE_API_KEY
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode != 200) {
        return ['error' => 'API request failed with HTTP code: ' . $httpCode];
    }
    
    return json_decode($response, true);
}

function getSymbolData($symbol) {
    $ticker24h = makeBinanceRequest('ticker/24hr', ['symbol' => $symbol]);
    return $ticker24h;
}

$symbols = ['BTCUSDT', 'BNBUSDT', 'ETHUSDT', 'UNIUSDT'];
$symbolsData = [];
foreach ($symbols as $symbol) {
    $symbolsData[$symbol] = getSymbolData($symbol);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Price Cards</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .cards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            /* max-width: 1400px; */
            margin: 0 auto;
            justify-content: space-between;
        }
        .card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            width: calc(10% - 20px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            min-width: 250px;
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }
        .card.price-up {
            background: rgba(40, 167, 69, 0.1);
        }
        .card.price-down {
            background: rgba(220, 53, 69, 0.1);
        }
        .pair {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .price {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .price-usd {
            color: #666;
            font-size: 14px;
        }
        .current-price{
            color: blue;
        }
        .change-negative {
            color: #dc3545;
        }
        .change-positive {
            color: #28a745;
        }
        .volume {
            color: #666;
            font-size: 14px;
            margin-top: 10px;
        }
        .chart {
            width: 100%;
            height: 50px;
            margin-top: 10px;
            opacity: 0.5;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
            .card {
                width: calc(33.33% - 20px);
            }
        }
        @media (max-width: 900px) {
            .card {
                width: calc(50% - 20px);
            }
        }
        @media (max-width: 600px) {
            .card {
                width: 100%;
            }
            .cards-container {
                gap: 15px;
            }
            body {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="cards-container">
        <?php foreach ($symbolsData as $symbol => $data): ?>
            <?php if (!isset($data['error'])): ?>
                <div class="card" id="card-<?php echo $symbol; ?>">
                    <div class="pair"><?php echo substr($symbol, 0, -4) . ' / ' . substr($symbol, -4); ?></div>
                    <div class="price">
                        <span class="current-price"><?php echo number_format($data['lastPrice'], $symbol === 'BTCUSDT' ? 0 : ($symbol === 'UNIUSDT' ? 2 : 1)); ?></span>
                        <span class="price-usd">$<span class="price-usd-value"><?php echo number_format($data['lastPrice'], 2); ?></span></span>
                    </div>
                    <div class="percent-change <?php echo $data['priceChangePercent'] < 0 ? 'change-negative' : 'change-positive'; ?>">
                        <?php echo number_format($data['priceChangePercent'], 2); ?>%
                    </div>
                    <div class="volume">
                        Volume: <span class="volume-value"><?php echo number_format($data['quoteVolume'], 0); ?></span> USDT
                    </div>
                    <div class="chart">
                        <svg viewBox="0 0 100 20" preserveAspectRatio="none" style="width: 100%; height: 100%;">
                            <path d="M0,10 Q25,<?php echo ($data['priceChangePercent'] < 0 ? '15' : '5'); ?>,50,10 T100,<?php echo ($data['priceChangePercent'] < 0 ? '15' : '5'); ?>" 
                                  stroke="<?php echo $data['priceChangePercent'] < 0 ? '#ffcdd2' : '#c8e6c9'; ?>"
                                  fill="none"
                                  stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            <?php endif; ?>
        <?php endforeach; ?>
    </div>

    <script>
        // Store previous prices to detect changes
        let previousPrices = {};
        
        // WebSocket connection
        const ws = new WebSocket('wss://stream.binance.com:9443/ws');
        
        // Subscribe to multiple streams
        const subscribeMsg = {
            method: 'SUBSCRIBE',
            params: [
                'btcusdt@ticker',
                'bnbusdt@ticker',
                'ethusdt@ticker',
                'uniusdt@ticker'
            ],
            id: 1
        };
        
        ws.onopen = () => {
            console.log('WebSocket Connected');
            ws.send(JSON.stringify(subscribeMsg));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.s) { // Valid ticker data
                const symbol = data.s;
                const card = document.getElementById(`card-${symbol}`);
                
                if (card) {
                    // Get price format based on symbol
                    const priceFormat = symbol === 'BTCUSDT' ? 0 : (symbol === 'UNIUSDT' ? 2 : 1);
                    
                    // Update price with animation
                    const newPrice = parseFloat(data.c);
                    const oldPrice = previousPrices[symbol] || newPrice;
                    
                    // Add price change animation
                    if (newPrice > oldPrice) {
                        card.classList.remove('price-down');
                        card.classList.add('price-up');
                    } else if (newPrice < oldPrice) {
                        card.classList.remove('price-up');
                        card.classList.add('price-down');
                    }
                    
                    // Remove animation class after transition
                    setTimeout(() => {
                        card.classList.remove('price-up', 'price-down');
                    }, 300);
                    
                    // Update price display
                    card.querySelector('.current-price').textContent = Number(newPrice).toLocaleString(undefined, {
                        minimumFractionDigits: priceFormat,
                        maximumFractionDigits: priceFormat
                    });
                    
                    card.querySelector('.price-usd-value').textContent = Number(newPrice).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                    
                    // Update 24h change
                    const percentChange = parseFloat(data.P);
                    const percentChangeElement = card.querySelector('.percent-change');
                    percentChangeElement.textContent = `${percentChange.toFixed(2)}%`;
                    percentChangeElement.className = `percent-change ${percentChange < 0 ? 'change-negative' : 'change-positive'}`;
                    
                    // Update volume
                    card.querySelector('.volume-value').textContent = Number(data.q).toLocaleString(undefined, {
                        maximumFractionDigits: 0
                    });
                    
                    // Update chart
                    const path = card.querySelector('path');
                    path.setAttribute('stroke', percentChange < 0 ? '#ffcdd2' : '#c8e6c9');
                    path.setAttribute('d', `M0,10 Q25,${percentChange < 0 ? '15' : '5'},50,10 T100,${percentChange < 0 ? '15' : '5'}`);
                    
                    // Store current price for next comparison
                    previousPrices[symbol] = newPrice;
                }
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket Disconnected');
            // Attempt to reconnect after 5 seconds
            setTimeout(() => {
                location.reload();
            }, 5000);
        };
    </script>
</body>
</html>
