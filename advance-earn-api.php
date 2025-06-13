<?php
// Binance API Configuration
define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');
define('BINANCE_PUBLIC_API_URL', 'https://www.binance.com/bapi/earn/v1/');
define('BINANCE_WS_URL', 'wss://stream.binance.com:9443/ws');

// Function to generate signature for authenticated endpoints
function generateSignature($query_string) {
    return hash_hmac('sha256', $query_string, BINANCE_API_SECRET);
}

// Function to get current price
function getBinancePrice($symbol) {
    $url = BINANCE_API_URL . "ticker/price?symbol=" . $symbol;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

// Function to get public savings products
function getPublicSavingsProducts() {
    $url = BINANCE_PUBLIC_API_URL . "public/dual/daily/projectList";
    $data = json_encode([
        "status" => "SUBSCRIBABLE",
        "current" => 1,
        "size" => 100,
        "projectType" => "REGULAR"
    ]);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'User-Agent: Mozilla/5.0'
    ]);
    
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

// Check if this is an API request
if(isset($_GET['action'])) {
    header('Content-Type: application/json');
    
    if($_GET['action'] === 'get_prices') {
        // Get prices for BTC, ETH, and BNB
        $prices = [
            'BTC' => getBinancePrice("BTCUSDT"),
            'ETH' => getBinancePrice("ETHUSDT"),
            'BNB' => getBinancePrice("BNBUSDT")
        ];
        
        echo json_encode($prices);
        exit;
    }
    
    if($_GET['action'] === 'get_savings_info') {
        $savings_data = getPublicSavingsProducts();
        $formatted_data = [];
        
        if(isset($savings_data['data']) && is_array($savings_data['data'])) {
            foreach($savings_data['data'] as $product) {
                $asset = $product['baseAsset'];
                if(in_array($asset, ['BTC', 'ETH', 'BNB'])) {
                    $formatted_data[$asset] = [
                        'apr' => $product['apy'],
                        'duration' => $product['duration'],
                        'minAmount' => $product['minAmount'],
                        'maxAmount' => $product['maxAmount']
                    ];
                }
            }
        }
        
        echo json_encode($formatted_data);
        exit;
    }
}

// Get initial prices for page load
$btcPrice = getBinancePrice("BTCUSDT");
$ethPrice = getBinancePrice("ETHUSDT");
$bnbPrice = getBinancePrice("BNBUSDT");

// Get initial savings data
$initial_savings = getPublicSavingsProducts();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Investment Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #1a1a1a;
            color: #ffffff;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            width: 100%;
        }

        .nav-tabs {
            display: flex;
            gap: 20px;
            background-color: #2a2a2a;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        .tab {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            cursor: pointer;
            opacity: 0.7;
            flex: 1;
            min-width: 200px;
            justify-content: center;
        }

        .tab.active {
            opacity: 1;
            background-color: #333;
            border-radius: 8px;
        }

        .tab img {
            width: 24px;
            height: 24px;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 30px;
            color: #ffffff;
        }

        .crypto-table {
            background-color: #2a2a2a;
            border-radius: 10px;
            padding: 20px;
            overflow-x: auto;
        }

        .table-header {
            display: grid;
            grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
            padding: 15px;
            border-bottom: 1px solid #3a3a3a;
            color: #888;
            min-width: 800px;
        }

        .crypto-item {
            display: grid;
            grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
            padding: 20px 15px;
            border-bottom: 1px solid #3a3a3a;
            align-items: center;
            gap: 15px;
            min-width: 800px;
        }

        .coin-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .crypto-icon {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            object-fit: contain;
            vertical-align: middle;
        }

        .coin-name {
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
        }

        .coin-price {
            color: #888;
            margin-left: 8px;
        }

        .apr {
            color: #00b897;
        }

        .btn {
            padding: 10px 20px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            transition: all 0.3s ease;
            width: 120px;
            text-align: center;
            white-space: nowrap;
        }

        .btn-customize {
            background-color: transparent;
            border: 1px solid #fcd535;
            color: #fcd535;
        }

        .btn-customize:hover {
            background-color: rgba(252, 213, 53, 0.1);
        }

        .btn-subscribe {
            background-color: #fcd535;
            color: #000;
            margin-left: 10px;
        }

        .btn-subscribe:hover {
            background-color: #fde373;
            transform: translateY(-1px);
        }

        .button-container {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
            grid-column: span 2;
            flex-wrap: wrap;
        }

        .tutorials {
            position: fixed;
            right: 20px;
            bottom: 20px;
            background-color: #2a2a2a;
            padding: 10px 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }

        .price-change {
            font-size: 14px;
            margin-left: 10px;
        }
        .price-up {
            color: #00b897;
        }
        .price-down {
            color: #f6465d;
        }
        .loading {
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* Media Queries for Responsive Design */
        @media screen and (max-width: 1024px) {
            .container {
                padding: 15px;
            }

            .tab {
                min-width: 150px;
            }

            h1 {
                font-size: 20px;
            }
        }

        @media screen and (max-width: 768px) {
            .nav-tabs {
                gap: 10px;
                padding: 10px;
            }

            .tab {
                min-width: 120px;
                padding: 8px 15px;
                font-size: 14px;
            }

            .crypto-table {
                padding: 10px;
            }

            .coin-name {
                font-size: 14px;
            }

            .btn {
                width: 100px;
                padding: 8px 15px;
                font-size: 12px;
            }

            .tutorials {
                right: 10px;
                bottom: 10px;
                padding: 8px 15px;
                font-size: 14px;
            }
        }

        @media screen and (max-width: 480px) {
            .container {
                padding: 10px;
            }

            .nav-tabs {
                flex-direction: column;
                gap: 5px;
            }

            .tab {
                width: 100%;
                min-width: unset;
            }

            h1 {
                font-size: 18px;
                margin-bottom: 20px;
            }

            .crypto-icon {
                width: 24px;
                height: 24px;
            }

            .coin-price {
                font-size: 12px;
            }

            .apr {
                font-size: 14px;
            }

            .button-container {
                flex-direction: column;
                width: 100%;
            }

            .btn {
                width: 100%;
                margin-left: 0 !important;
            }

            .tutorials {
                width: calc(100% - 20px);
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <nav class="nav-tabs">
            <div class="tab active">
                <span>📈 Dual Investment</span>
            </div>
            <div class="tab">
                <span>🤖 Smart Arbitrage</span>
            </div>
            <div class="tab">
                <span>💰 On-chain Yields</span>
            </div>
        </nav>

        <h1>Enjoy high rewards - Buy Low, Sell High</h1>

        <div class="crypto-table">
            <div class="table-header">
                <span>Coins</span>
                <span>APR</span>
                <span>Settlement Date</span>
                <span></span>
                <span></span>
            </div>
            <div id="crypto-list">
                <div class="crypto-item">
                    <div class="coin-info">
                        <img src="./img/earn1.png" alt="BTC" class="crypto-icon">
                        <span class="coin-name">BTC</span>
                        <span class="coin-price">$95327.00</span>
                    </div>
                    <div class="apr">Up to 102.52%</div>
                    <div>4-154 days</div>
                    <div class="button-container">
                        <button class="btn btn-customize">Customize</button>
                        <button class="btn btn-subscribe">Subscribe</button>
                    </div>
                </div>
                <div class="crypto-item">
                    <div class="coin-info">
                        <img src="./img/earn2.png" alt="ETH" class="crypto-icon">
                        <span class="coin-name">ETH</span>
                        <span class="coin-price">$2345.00</span>
                    </div>
                    <div class="apr">Up to 129.93%</div>
                    <div>4-154 days</div>
                    <div class="button-container">
                        <button class="btn btn-customize">Customize</button>
                        <button class="btn btn-subscribe">Subscribe</button>
                    </div>
                </div>
                <div class="crypto-item">
                    <div class="coin-info">
                        <img src="./img/earn3.png" alt="BNB" class="crypto-icon">
                        <span class="coin-name">BNB</span>
                        <span class="coin-price">$345.00</span>
                    </div>
                    <div class="apr">Up to 69.52%</div>
                    <div>4-154 days</div>
                    <div class="button-container">
                        <button class="btn btn-customize">Customize</button>
                        <button class="btn btn-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="tutorials">
        <span>📹 Tutorials</span>
    </div>

    <script>
        // Store previous prices for comparison
        let previousPrices = {
            BTC: 0,
            ETH: 0,
            BNB: 0,
            SOL: 0,
            XRP: 0,
            DOGE: 0
        };

        // Store image paths
        const cryptoImages = {
            'BTC': './img/earn1.png',
            'ETH': './img/earn2.png',
            'BNB': './img/earn3.png',
            'SOL': './img/sol.png',
            'XRP': './img/xrp.png',
            'DOGE': './img/doge.png'
        };

        // WebSocket connection
        let ws;
        let wsReconnectTimer;
        let currentTab = 'dual'; // Track current tab

        function connectWebSocket() {
            ws = new WebSocket('<?php echo BINANCE_WS_URL; ?>');

            ws.onopen = function() {
                console.log('WebSocket Connected');
                const subscribeMsg = {
                    method: "SUBSCRIBE",
                    params: [
                        "btcusdt@ticker",
                        "ethusdt@ticker",
                        "bnbusdt@ticker"
                    ],
                    id: 1
                };
                ws.send(JSON.stringify(subscribeMsg));
            };

            ws.onmessage = function(event) {
                const data = JSON.parse(event.data);
                if (data.e === '24hrTicker') {
                    updateCryptoData(data);
                }
            };

            ws.onclose = function() {
                console.log('WebSocket Disconnected');
                clearTimeout(wsReconnectTimer);
                wsReconnectTimer = setTimeout(connectWebSocket, 5000);
            };

            ws.onerror = function(error) {
                console.error('WebSocket Error:', error);
                ws.close();
            };
        }

        function updateCryptoData(data) {
            const cryptoList = document.getElementById('crypto-list');
            const items = cryptoList.getElementsByClassName('crypto-item');
            
            let symbol = data.s.replace('USDT', '');
            let price = parseFloat(data.c).toFixed(2);
            let priceChange = parseFloat(data.P).toFixed(2);
            
            let index = symbol === 'BTC' ? 0 : symbol === 'ETH' ? 1 : 2;
            let item = items[index];
            
            if (item) {
                const coinInfo = item.querySelector('.coin-info');
                const oldPrice = previousPrices[symbol];
                const priceClass = price > oldPrice ? 'price-up' : price < oldPrice ? 'price-down' : '';

                // Update only the price and percentage, keep the image and symbol
                const priceElement = coinInfo.querySelector('.coin-price');
                if (priceElement) {
                    priceElement.textContent = `$${price}`;
                    priceElement.className = `coin-price ${priceClass}`;
                }

                // Update or add price change element
                let priceChangeElement = coinInfo.querySelector('.price-change');
                if (!priceChangeElement) {
                    priceChangeElement = document.createElement('span');
                    priceChangeElement.className = 'price-change';
                    coinInfo.appendChild(priceChangeElement);
                }
                priceChangeElement.textContent = `${priceChange}%`;
                priceChangeElement.className = `price-change ${parseFloat(priceChange) >= 0 ? 'price-up' : 'price-down'}`;
                
                // Update APR based on price movement
                const aprElement = item.querySelector('.apr');
                if (aprElement) {
                    const baseApr = symbol === 'BTC' ? 102.52 : symbol === 'ETH' ? 129.93 : 69.52;
                    const aprAdjustment = Math.abs(parseFloat(priceChange)) * 0.1;
                    const newApr = (baseApr + aprAdjustment).toFixed(2);
                    aprElement.textContent = `Up to ${newApr}%`;
                    aprElement.classList.add('loading');
                    setTimeout(() => aprElement.classList.remove('loading'), 1000);
                }
                
                previousPrices[symbol] = price;
            }
        }

        function updateCountdown() {
            // Get current server time from PHP
            fetch('?action=get_server_time')
                .then(response => response.json())
                .then(data => {
                    // Clear any existing interval
                    if (window.countdownInterval) {
                        clearInterval(window.countdownInterval);
                    }
                    
                    // Create new interval
                    window.countdownInterval = setInterval(() => {
                        const now = new Date();
                        // Next update time is every 8 hours (3 times a day)
                        const currentHour = now.getHours();
                        const nextUpdateHour = currentHour < 8 ? 8 : currentHour < 16 ? 16 : 24;
                        const nextUpdate = new Date(now);
                        nextUpdate.setHours(nextUpdateHour, 0, 0, 0);
                        
                        if (nextUpdateHour === 24) {
                            nextUpdate.setDate(nextUpdate.getDate() + 1);
                            nextUpdate.setHours(0, 0, 0, 0);
                        }
                        
                        const diff = nextUpdate - now;
                        const hours = Math.floor(diff / (1000 * 60 * 60));
                        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                        
                        // Check if elements exist before updating
                        const hoursEl = document.getElementById('hours');
                        const minutesEl = document.getElementById('minutes');
                        const secondsEl = document.getElementById('seconds');
                        
                        if (hoursEl && minutesEl && secondsEl) {
                            hoursEl.textContent = hours.toString().padStart(2, '0');
                            minutesEl.textContent = minutes.toString().padStart(2, '0');
                            secondsEl.textContent = seconds.toString().padStart(2, '0');
                        } else {
                            // If elements don't exist, clear the interval
                            clearInterval(window.countdownInterval);
                        }
                    }, 1000);
                });
        }

        function setupSmartArbitrageWebSocket() {
            ws = new WebSocket('<?php echo BINANCE_WS_URL; ?>');

            ws.onopen = function() {
                console.log('Smart Arbitrage WebSocket Connected');
                const subscribeMsg = {
                    method: "SUBSCRIBE",
                    params: [
                        "solusdt@ticker",
                        "xrpusdt@ticker",
                        "dogeusdt@ticker"
                    ],
                    id: 2
                };
                ws.send(JSON.stringify(subscribeMsg));
            };

            ws.onmessage = function(event) {
                const data = JSON.parse(event.data);
                if (data.e === '24hrTicker') {
                    updateSmartArbitrageData(data);
                }
            };

            ws.onclose = function() {
                console.log('WebSocket Disconnected');
                setTimeout(setupSmartArbitrageWebSocket, 5000);
            };
        }

        function updateSmartArbitrageData(data) {
            const symbol = data.s.replace('USDT', '');
            const priceChange = parseFloat(data.P).toFixed(2);
            
            // Calculate APR based on price movement
            let nextApr;
            let monthlyApr;
            
            switch(symbol) {
                case 'SOL':
                    nextApr = (1.35 + Math.abs(parseFloat(priceChange)) * 0.01).toFixed(2);
                    monthlyApr = (4.07 + Math.abs(parseFloat(priceChange)) * 0.02).toFixed(2);
                    break;
                case 'XRP':
                    nextApr = (1.14 + Math.abs(parseFloat(priceChange)) * 0.01).toFixed(2);
                    monthlyApr = (3.08 + Math.abs(parseFloat(priceChange)) * 0.02).toFixed(2);
                    break;
                case 'DOGE':
                    nextApr = (7.31 + Math.abs(parseFloat(priceChange)) * 0.01).toFixed(2);
                    monthlyApr = (3.59 + Math.abs(parseFloat(priceChange)) * 0.02).toFixed(2);
                    break;
            }
            
            // Update APR values in the table
            const rows = document.querySelectorAll('.crypto-item');
            rows.forEach(row => {
                const coinName = row.querySelector('.coin-name').textContent;
                if (coinName.includes(symbol)) {
                    const aprElements = row.querySelectorAll('.apr');
                    aprElements[0].textContent = nextApr + '%';
                    aprElements[1].textContent = monthlyApr + '%';
                    
                    // Add loading animation
                    aprElements.forEach(el => {
                        el.classList.add('loading');
                        setTimeout(() => el.classList.remove('loading'), 1000);
                    });
                }
            });
        }

        // Update tab switching functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelector('.tab.active').classList.remove('active');
                tab.classList.add('active');
                const tabName = tab.textContent.trim();
                if (tabName === '📈 Dual Investment') {
                    currentTab = 'dual';
                    document.querySelector('h1').textContent = 'Enjoy high rewards - Buy Low, Sell High';
                } else if (tabName === '🤖 Smart Arbitrage') {
                    currentTab = 'arbitrage';
                    document.querySelector('h1').textContent = 'Arbitrage Steadily and Increase Your Profits Easily';
                } else {
                    currentTab = 'yields';
                    document.querySelector('h1').textContent = 'Unlock the potential of on-chain rewards and stay ahead with earning opportunities.';
                }
                updateContentBasedOnTab(tabName);
            });
        });

        function updateContentBasedOnTab(tabName) {
            const cryptoList = document.getElementById('crypto-list');
            
            // Remove any existing timer divs first
            const existingTimers = document.querySelectorAll('.next-apr-timer');
            existingTimers.forEach(timer => timer.remove());
            
            // Clear any existing intervals
            if (window.countdownInterval) {
                clearInterval(window.countdownInterval);
            }
            
            if (tabName === '📈 Dual Investment') {
                // Show original Dual Investment content
                cryptoList.innerHTML = `
                    <div class="crypto-item">
                        <div class="coin-info">
                            <img src="./img/earn1.png" alt="BTC" class="crypto-icon">
                            <span class="coin-name">BTC</span>
                            <span class="coin-price">$95327.00</span>
                        </div>
                        <div class="apr">Up to 102.52%</div>
                        <div>4-154 days</div>
                        <div class="button-container">
                            <button class="btn btn-customize">Customize</button>
                            <button class="btn btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                    <div class="crypto-item">
                        <div class="coin-info">
                            <img src="./img/earn2.png" alt="ETH" class="crypto-icon">
                            <span class="coin-name">ETH</span>
                            <span class="coin-price">$2345.00</span>
                        </div>
                        <div class="apr">Up to 129.93%</div>
                        <div>4-154 days</div>
                        <div class="button-container">
                            <button class="btn btn-customize">Customize</button>
                            <button class="btn btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                    <div class="crypto-item">
                        <div class="coin-info">
                            <img src="./img/earn3.png" alt="BNB" class="crypto-icon">
                            <span class="coin-name">BNB</span>
                            <span class="coin-price">$345.00</span>
                        </div>
                        <div class="apr">Up to 69.52%</div>
                        <div>4-154 days</div>
                        <div class="button-container">
                            <button class="btn btn-customize">Customize</button>
                            <button class="btn btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                `;
                connectWebSocket();
            } else if (tabName === '🤖 Smart Arbitrage') {
                // Update table header
                document.querySelector('.table-header').innerHTML = `
                    <div style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 15px; color: #888;">
                        <span>Portfolio</span>
                        <span style="text-align: start;">Next APR</span>
                        <span style="text-align: start;">30d APR</span>
                        <span></span>
                    </div>
                `;
                
                cryptoList.innerHTML = `
                    <div class="crypto-item" style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 20px 15px; border-bottom: 1px solid #2a2a2a;">
                        <div class="coin-info" style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/sol.png" alt="SOL" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span class="coin-name" style="color: #fff;">SOL/USDT</span>
                        </div>
                        <div class="apr" style="color: #00b897;">1.35%</div>
                        <div class="apr" style="color: #00b897;">4.07%</div>
                        <div style="text-align: right;">
                            <button class="btn btn-subscribe" style="background: #fcd535; color: #000; border-radius: 4px; padding: 8px 24px; border: none; cursor: pointer; font-size: 14px;">Subscribe</button>
                        </div>
                    </div>
                    <div class="crypto-item" style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 20px 15px; border-bottom: 1px solid #2a2a2a;">
                        <div class="coin-info" style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/xrp.png" alt="XRP" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span class="coin-name" style="color: #fff;">XRP/USDT</span>
                        </div>
                        <div class="apr" style="color: #00b897;">1.14%</div>
                        <div class="apr" style="color: #00b897;">3.08%</div>
                        <div style="text-align: right;">
                            <button class="btn btn-subscribe" style="background: #fcd535; color: #000; border-radius: 4px; padding: 8px 24px; border: none; cursor: pointer; font-size: 14px;">Subscribe</button>
                        </div>
                    </div>
                    <div class="crypto-item" style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 20px 15px; border-bottom: 1px solid #2a2a2a;">
                        <div class="coin-info" style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/doge.png" alt="DOGE" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span class="coin-name" style="color: #fff;">DOGE/USDT</span>
                        </div>
                        <div class="apr" style="color: #00b897;">7.31%</div>
                        <div class="apr" style="color: #00b897;">3.59%</div>
                        <div style="text-align: right;">
                            <button class="btn btn-subscribe" style="background: #fcd535; color: #000; border-radius: 4px; padding: 8px 24px; border: none; cursor: pointer; font-size: 14px;">Subscribe</button>
                        </div>
                    </div>
                `;
                
                // Setup WebSocket for Smart Arbitrage
                if (ws) ws.close();
                setupSmartArbitrageWebSocket();
            } else if (tabName === '💰 On-chain Yields') {
                // Update table header
                document.querySelector('.table-header').innerHTML = `
                    <div style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 15px; color: #888;">
                        <span>Coins</span>
                        <span style="text-align: start;">Protocols</span>
                        <span style="text-align: start;">APR</span>
                        <span></span>
                    </div>
                `;
                
                cryptoList.innerHTML = `
                    <div class="crypto-item" style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 20px 15px; border-bottom: 1px solid #2a2a2a;">
                        <div class="coin-info" style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/earn3.png" alt="BNB" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span class="coin-name" style="color: #fff;">BNB</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/lista.svg" alt="Lista" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span style="color: #fff;">Lista</span>
                        </div>
                        <div class="apr" style="color: #00b897;">0.4%~0.8%</div>
                        <div style="text-align: right;">
                            <button class="btn btn-subscribe" style="background: #fcd535; color: #000; border-radius: 4px; padding: 8px 24px; border: none; cursor: pointer; font-size: 14px;">Subscribe</button>
                        </div>
                    </div>
                    <div class="crypto-item" style="display: grid; grid-template-columns: 300px 200px 200px 1fr; padding: 20px 15px; border-bottom: 1px solid #2a2a2a;">
                        <div class="coin-info" style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/web.png" alt="WBETH" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span class="coin-name" style="color: #fff;">WBETH</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <img src="./img/layer.svg" alt="EigenLayer" class="crypto-icon" style="width: 24px; height: 24px;">
                            <span style="color: #fff;">EigenLayer</span>
                        </div>
                        <div class="apr" style="color: #00b897;">0.2%~0.6%</div>
                        <div style="text-align: right;">
                            <button class="btn btn-subscribe" style="background: #fcd535; color: #000; border-radius: 4px; padding: 8px 24px; border: none; cursor: pointer; font-size: 14px;">Subscribe</button>
                        </div>
                    </div>
                 
                `;
                if (ws) ws.close();
            }
            
            // Reattach button event listeners
            attachButtonListeners();
        }

        function attachButtonListeners() {
            document.querySelectorAll('.btn-customize').forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('Customize options coming soon!');
                });
            });

            document.querySelectorAll('.btn-subscribe').forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('Subscription feature coming soon!');
                });
            });
        }

        // Initial WebSocket connection
        connectWebSocket();

        // Cleanup on page unload
        window.addEventListener('beforeunload', function() {
            if (ws) {
                ws.close();
            }
        });
    </script>
</body>
</html>
