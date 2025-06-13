<?php
// Binance API Configuration
define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');

// Get initial price data
$ticker = file_get_contents(BINANCE_API_URL . 'ticker/price?symbol=BTCUSDT');
$price = json_decode($ticker, true);
$currentPrice = number_format($price['price'], 2);

// Get 24h stats
$stats = file_get_contents(BINANCE_API_URL . 'ticker/24hr?symbol=BTCUSDT');
$stats = json_decode($stats, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binance Trading Interface</title>
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        body {
            background: #0b0e11;
            color: #eaecef;
            min-height: 100vh;
        }
        .header {
            background: #1e222d;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #2a2e39;
            flex-wrap: wrap;
            gap: 10px;
        }
        .pair-info {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }
        .price-large {
            font-size: clamp(18px, 4vw, 24px);
            font-weight: bold;
        }
        .change-negative {
            color: #f6465d;
        }
        .change-positive {
            color: #0ecb81;
        }
        .main-container {
            display: grid;
            grid-template-columns: minmax(250px, 300px) 1fr minmax(250px, 300px);
            gap: 1px;
            background: #2a2e39;
            height: calc(100vh - 60px);
        }
        .order-book {
            background: #1e222d;
            padding: 15px;
            overflow-y: auto;
        }
        .chart-container {
            background: #1e222d;
            position: relative;
            min-height: 400px;
        }
        .trading-form {
            background: #1e222d;
            padding: 15px;
        }
        .book-header {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            color: #848e9c;
            font-size: clamp(10px, 2vw, 12px);
        }
        .book-row {
            display: flex;
            justify-content: space-between;
            padding: 2px 0;
            font-size: clamp(10px, 2vw, 12px);
            position: relative;
        }
        .book-row:hover {
            background: rgba(255,255,255,0.05);
        }
        .depth-bar {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 1;
            opacity: 0.1;
        }
        .depth-bar-bid {
            right: 0;
            background: #0ecb81;
        }
        .depth-bar-ask {
            left: 0;
            background: #f6465d;
        }
        .price-col {
            width: 40%;
            z-index: 2;
        }
        .amount-col {
            width: 30%;
            text-align: right;
            z-index: 2;
        }
        .total-col {
            width: 30%;
            text-align: right;
            z-index: 2;
        }
        .bid-price {
            color: #0ecb81;
        }
        .ask-price {
            color: #f6465d;
        }
        .trading-tabs {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        .tab {
            padding: 8px 16px;
            cursor: pointer;
            border-radius: 4px;
        }
        .tab.active {
            background: #2a2e39;
        }
        .trading-input {
            background: #2a2e39;
            border: none;
            color: #eaecef;
            padding: 10px;
            width: 100%;
            margin: 5px 0;
            border-radius: 4px;
        }
        .trading-button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
        }
        .buy-button {
            background: #0ecb81;
        }
        .sell-button {
            background: #f6465d;
        }

        /* Media Queries for Responsive Design */
        @media screen and (max-width: 1200px) {
            .main-container {
                grid-template-columns: 1fr;
                height: auto;
            }
            .order-book, .trading-form {
                height: 400px;
            }
            .chart-container {
                height: 500px;
            }
        }

        @media screen and (max-width: 768px) {
            .header {
                flex-direction: column;
                align-items: flex-start;
            }
            .market-info {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            .trading-tabs {
                gap: 10px;
            }
            .tab {
                padding: 6px 12px;
                font-size: 14px;
            }
        }

        @media screen and (max-width: 480px) {
            .pair-info {
                flex-direction: column;
                align-items: flex-start;
            }
            .book-header, .book-row {
                font-size: 10px;
            }
            .trading-input {
                padding: 8px;
            }
            .trading-button {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="pair-info">
            <h2>BTC/USDT</h2>
            <div class="price-large" id="current-price"><?php echo $currentPrice; ?></div>
            <div class="24h-change" id="24h-change">-0.14%</div>
        </div>
        <div class="market-info">
            <span>24h High: $<span id="24h-high"><?php echo number_format($stats['highPrice'], 2); ?></span></span>
            <span>24h Low: $<span id="24h-low"><?php echo number_format($stats['lowPrice'], 2); ?></span></span>
            <span>24h Volume: <span id="24h-volume"><?php echo number_format($stats['volume'], 2); ?></span> BTC</span>
        </div>
    </div>

    <div class="main-container">
        <div class="order-book" id="order-book">
            <div class="book-header">
                <span class="price-col">Price(USDT)</span>
                <span class="amount-col">Amount(BTC)</span>
                <span class="total-col">Total</span>
            </div>
            <div id="asks"></div>
            <div id="bids"></div>
        </div>

        <div class="chart-container">
            <div id="tv_chart_container" style="height: 100%;"></div>
        </div>

        <div class="trading-form">
            <div class="trading-tabs">
                <div class="tab active">Limit</div>
                <div class="tab">Market</div>
                <div class="tab">Stop-Limit</div>
            </div>

            <div>
                <input type="number" class="trading-input" placeholder="Price USDT" id="price-input">
                <input type="number" class="trading-input" placeholder="Amount BTC" id="amount-input">
                <input type="number" class="trading-input" placeholder="Total USDT" id="total-input">
                
                <button class="trading-button buy-button">Buy BTC</button>
                <button class="trading-button sell-button">Sell BTC</button>
            </div>
        </div>
    </div>

    <script>
        // Initialize TradingView Widget
        new TradingView.widget({
            "autosize": true,
            "symbol": "BINANCE:BTCUSDT",
            "interval": "1",
            "timezone": "Asia/Kolkata",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#1e222d",
            "enable_publishing": false,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "container_id": "tv_chart_container",
            "studies": [
                "MASimple@tv-basicstudies",
                "RSI@tv-basicstudies",
                "MACD@tv-basicstudies"
            ]
        });

        // WebSocket connections for live data
        const tradeWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
        const bookWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@100ms');
        
        // Handle live trade updates
        tradeWs.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const price = parseFloat(data.p).toFixed(2);
            document.getElementById('current-price').textContent = price;
            updatePriceColor(price);
        };

        // Handle order book updates
        bookWs.onmessage = (event) => {
            const data = JSON.parse(event.data);
            updateOrderBook(data.bids, data.asks);
        };

        function updateOrderBook(bids, asks) {
            const asksContainer = document.getElementById('asks');
            const bidsContainer = document.getElementById('bids');
            
            // Clear containers
            asksContainer.innerHTML = '';
            bidsContainer.innerHTML = '';

            // Calculate max total for depth visualization
            let maxTotal = 0;
            [...bids, ...asks].forEach(order => {
                const total = parseFloat(order[0]) * parseFloat(order[1]);
                if (total > maxTotal) maxTotal = total;
            });

            // Update asks (sells)
            asks.forEach(ask => {
                const price = parseFloat(ask[0]);
                const amount = parseFloat(ask[1]);
                const total = price * amount;
                const percentage = (total / maxTotal) * 100;

                asksContainer.innerHTML += `
                    <div class="book-row">
                        <div class="depth-bar depth-bar-ask" style="width: ${percentage}%"></div>
                        <span class="price-col ask-price">${price.toFixed(2)}</span>
                        <span class="amount-col">${amount.toFixed(8)}</span>
                        <span class="total-col">${total.toFixed(2)}</span>
                    </div>
                `;
            });

            // Update bids (buys)
            bids.forEach(bid => {
                const price = parseFloat(bid[0]);
                const amount = parseFloat(bid[1]);
                const total = price * amount;
                const percentage = (total / maxTotal) * 100;

                bidsContainer.innerHTML += `
                    <div class="book-row">
                        <div class="depth-bar depth-bar-bid" style="width: ${percentage}%"></div>
                        <span class="price-col bid-price">${price.toFixed(2)}</span>
                        <span class="amount-col">${amount.toFixed(8)}</span>
                        <span class="total-col">${total.toFixed(2)}</span>
                    </div>
                `;
            });
        }

        function updatePriceColor(newPrice) {
            const priceElement = document.getElementById('current-price');
            const oldPrice = parseFloat(priceElement.getAttribute('data-prev') || 0);
            
            if (newPrice > oldPrice) {
                priceElement.style.color = '#0ecb81';
            } else if (newPrice < oldPrice) {
                priceElement.style.color = '#f6465d';
            }
            
            priceElement.setAttribute('data-prev', newPrice);
        }

        // Calculate total when price or amount changes
        document.getElementById('price-input').addEventListener('input', calculateTotal);
        document.getElementById('amount-input').addEventListener('input', calculateTotal);

        function calculateTotal() {
            const price = parseFloat(document.getElementById('price-input').value) || 0;
            const amount = parseFloat(document.getElementById('amount-input').value) || 0;
            document.getElementById('total-input').value = (price * amount).toFixed(8);
        }
    </script>
</body>
</html>