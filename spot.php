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

<?php include "header1.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<title>Binance Trading Interface</title>-->
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
            grid-template-rows: auto auto;
            gap: 1px;
            background: #2a2e39;
            height: calc(100vh - 60px);
        }
        .order-book {
            grid-row: 1 / span 2;
            background: #1e222d;
            padding: 15px;
            overflow-y: auto;
        }
        .chart-container {
            grid-column: 2;
            grid-row: 1;
            background: #1e222d;
            position: relative;
            min-height: 400px;
            display: flex;
            flex-direction: column;
        }
        .chart-header {
            display: flex;
            align-items: center;
            padding: 0 16px;
            height: 40px;
            background: #1e222d;
            border-bottom: 1px solid #2a2e39;
        }
        .chart-tabs {
            display: flex;
            height: 100%;
            align-items: center;
            gap: 24px;
        }
        .chart-tab {
            color: #848e9c;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            font-size: 14px;
        }
        .chart-tab.active {
            color: #f0b90b;
        }
        .chart-tab.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: #f0b90b;
        }
        .chart-actions {
            display: flex;
            gap: 16px;
            margin-left: auto;
        }
        .chart-action-button {
            color: #848e9c;
            cursor: pointer;
            padding: 4px;
        }
        .chart-action-button:hover {
            color: #f0b90b;
        }
        .trading-form {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        .right-section {
            grid-column: 3;
            grid-row: 1 / span 2;
            display: flex;
            flex-direction: column;
            gap: 1px;
            background: #2a2e39;
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
        .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 10px;
        }
        .top-nav-tabs {
            display: flex;
            gap: 20px;
        }
        .top-nav-tab {
            padding: 8px 16px;
            cursor: pointer;
            color: #666;
            font-weight: 500;
        }
        .top-nav-tab.active {
            color: #1E88E5;
            border-bottom: 2px solid #1E88E5;
        }
        .top-nav-actions {
            display: flex;
            gap: 15px;
            align-items: center;
        }
        .fee-level, .auto-invest, .buy-inr {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 6px 12px;
            border-radius: 4px;
            background: #f5f5f5;
            cursor: pointer;
        }
        .trading-type {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }
        .trading-type-item {
            padding: 6px 12px;
            cursor: pointer;
            color: #666;
            border-radius: 4px;
        }
        .trading-type-item.active {
            background: #E3F2FD;
            color: #1E88E5;
        }
        .trading-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .trade-box {
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .trade-input-group {
            position: relative;
            display: flex;
            align-items: center;
        }
        .trade-input {
            width: 100%;
            height: 40px;
            padding: 8px 70px 8px 12px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            font-size: 14px;
        }
        .trade-input:focus {
            outline: none;
            border-color: #1E88E5;
        }
        .trade-input-currency {
            position: absolute;
            right: 12px;
            color: #666;
        }
        .trade-slider {
            padding: 10px 0;
        }
        .trade-slider-dots {
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
        }
        .trade-slider-dot {
            width: 4px;
            height: 4px;
            background: #e0e0e0;
            border-radius: 50%;
            cursor: pointer;
        }
        .tp-sl-checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .tp-sl-checkbox input[type="checkbox"] {
            width: 16px;
            height: 16px;
        }
        .avbl-info {
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 12px;
        }
        .trade-button {
            padding: 12px;
            border: none;
            border-radius: 4px;
            color: white;
            font-weight: 500;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        .trade-button:hover {
            opacity: 0.9;
        }
        .buy-button {
            background: #26A69A;
        }
        .sell-button {
            background: #EF5350;
        }
        .market-trades {
            background: #1e222d;
            padding: 15px;
            overflow-y: auto;
            height: 546px; /* Calculated to show exactly 21 rows: (21 rows * 24px row height) + header height */
        }
        
        .trades-header {
            height: 42px; /* Fixed height for header */
            margin-bottom: 10px;
        }
        
        .trades-header .tab {
            color: #848e9c;
            cursor: pointer;
            padding: 0;
            background: none;
        }
        
        .trades-header .tab.active {
            color: #eaecef;
            border-bottom: 2px solid #f0b90b;
            background: none;
        }
        
        .trades-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }
        
        .trades-table tr {
            height: 24px; /* Fixed height for each row */
            line-height: 24px;
        }
        
        .trades-table td {
            padding: 0 8px;
            border: none;
        }
        
        .trade-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 4px 8px;
        }
        
        .trade-price {
            color: #0ecb81;
        }
        
        .trade-price.sell {
            color: #f6465d;
        }
        
        .trade-amount {
            text-align: right;
            color: #848e9c;
        }
        
        .trade-time {
            text-align: right;
            color: #848e9c;
        }

        .market-list {
            background: #1e222d;
            padding: 15px;
            overflow-y: auto;
        }

        .market-list-header {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            padding: 10px 0;
            color: #848e9c;
            font-size: 12px;
            border-bottom: 1px solid #2a2e39;
        }

        .market-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            padding: 12px 0;
            font-size: 14px;
            border-bottom: 1px solid #2a2e39;
            cursor: pointer;
        }

        .market-item:hover {
            background: rgba(255,255,255,0.05);
        }

        .coin-info {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .coin-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #2a2e39;
        }

        .price-column {
            text-align: right;
        }

        .change-column {
            text-align: right;
        }

        .secondary-price {
            font-size: 12px;
            color: #848e9c;
        }

        .fee-level img, .auto-invest img, .buy-inr img {
            width: 16px;
            height: 16px;
        }

        .info-icon {
            width: 16px;
            height: 16px;
            cursor: pointer;
        }

        .arrow-icon {
            width: 12px;
            height: 12px;
            margin-left: 4px;
        }

        .currency-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
        }

        /* Media Queries for Responsive Design */
        @media screen and (max-width: 1200px) {
            .main-container {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                height: auto;
            }
            .order-book {
                grid-row: auto;
            }
            .chart-container {
                grid-column: 1;
            }
            .trading-form {
                grid-column: 1;
            }
            .right-section {
                grid-column: 1;
                grid-row: auto;
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
<body style="padding-top: 100px;">
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
            <div class="chart-header">
                <div class="chart-tabs">
                    <div class="chart-tab active">Chart</div>
                    <div class="chart-tab">Info</div>
                    <div class="chart-tab">Trading Data</div>
                    <div class="chart-tab">Square</div>
                </div>
                <div class="chart-actions">
                    <div class="chart-action-button">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                    </div>
                    <div class="chart-action-button">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="tv_chart_container" style="height: calc(100% - 40px);"></div>
        </div>

        <div class="trading-form">
            <div class="top-nav">
                <div class="top-nav-tabs">
                    <div class="top-nav-tab active">Spot</div>
                    <div class="top-nav-tab">Cross</div>
                    <div class="top-nav-tab">Isolated</div>
                    <div class="top-nav-tab">Grid</div>
                </div>
                <!-- <div class="top-nav-actions">
                    <div class="fee-level">
                        <span>Fee Level</span>
                        <img src="fee-icon.png" alt="Fee Level">
                    </div>
                    <div class="auto-invest">
                        <img src="auto-invest-icon.png" alt="Auto-Invest">
                        <span>Auto-Invest</span>
                    </div>
                    <div class="buy-inr">
                        <img src="inr-icon.png" alt="INR">
                        <span>Buy with INR</span>
                    </div>
                </div> -->
            </div>

            <div class="trading-type">
                <div class="trading-type-item active">Limit</div>
                <div class="trading-type-item">Market</div>
                <div class="trading-type-item">Stop Limit</div>
                <!-- <img src="info-icon.png" alt="Info" class="info-icon"> -->
            </div>

            <div class="trading-container">
                <!-- Buy Box -->
                <div class="trade-box">
                    <div class="trade-input-group">
                        <input type="number" class="trade-input" value="85130.40" id="buy-price-input">
                        <span class="trade-input-currency">USDT</span>
                    </div>

                    <div class="trade-input-group">
                        <input type="number" class="trade-input" id="buy-amount-input" placeholder="Amount">
                        <span class="trade-input-currency">BTC</span>
                    </div>

                    <div class="trade-slider">
                        <div class="trade-slider-dots">
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                        </div>
                    </div>

                    <div class="trade-input-group">
                        <input type="number" class="trade-input" id="buy-total-input" placeholder="Total">
                        <span class="trade-input-currency">USDT</span>
                    </div>

                    <div class="tp-sl-checkbox">
                        <input type="checkbox" id="buy-tp-sl">
                        <label for="buy-tp-sl">TP/SL</label>
                    </div>

                    <div class="avbl-info">
                        <span>Avbl</span>
                        <span>0.00000000 USDT</span>
                    </div>

                    <button class="trade-button buy-button">Buy BTC</button>
                </div>

                <!-- Sell Box -->
                <div class="trade-box">
                    <div class="trade-input-group">
                        <input type="number" class="trade-input" value="85130.40" id="sell-price-input">
                        <span class="trade-input-currency">USDT</span>
                    </div>

                    <div class="trade-input-group">
                        <input type="number" class="trade-input" id="sell-amount-input" placeholder="Amount">
                        <span class="trade-input-currency">BTC</span>
                    </div>

                    <div class="trade-slider">
                        <div class="trade-slider-dots">
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                            <span class="trade-slider-dot"></span>
                        </div>
                    </div>

                    <div class="trade-input-group">
                        <input type="number" class="trade-input" id="sell-total-input" placeholder="Total">
                        <span class="trade-input-currency">USDT</span>
                    </div>

                    <div class="tp-sl-checkbox">
                        <input type="checkbox" id="sell-tp-sl">
                        <label for="sell-tp-sl">TP/SL</label>
                    </div>

                    <div class="avbl-info">
                        <span>Avbl</span>
                        <span>0.00000000 BTC</span>
                    </div>

                    <button class="trade-button sell-button">Sell BTC</button>
                </div>
            </div>
        </div>

        <div class="right-section">
            <div class="market-list">
                <div class="market-list-header">
                    <div>Coin</div>
                    <div class="price-column">Last Price</div>
                    <div class="change-column">24h Change</div>
                </div>
                <div id="market-items">
                    <!-- Market items will be populated here -->
                </div>
            </div>

            <div class="market-trades">
                <div class="trades-header">
                    <div class="tab active">Market Trades</div>
                    <div class="tab">My Trades</div>
                </div>
                <table class="trades-table" id="trades-table">
                    <tbody>
                        <!-- Trades will be populated here -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script>
        // Initialize TradingView Widget
        new TradingView.widget({
            "autosize": true,
            "symbol": "BINANCE:BTCUSDT",
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#131722",
            "enable_publishing": false,
            "hide_top_toolbar": false,
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "save_image": true,
            "container_id": "tv_chart_container",
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "disabled_features": [
                "header_symbol_search",
                "header_interval_dialog_button",
                "volume_force_overlay"
            ],
            "enabled_features": [
                "use_localstorage_for_settings",
                "side_toolbar_in_fullscreen_mode"
            ],
            "overrides": {
                "mainSeriesProperties.style": 1,
                "mainSeriesProperties.candleStyle.upColor": "#26a69a",
                "mainSeriesProperties.candleStyle.downColor": "#ef5350",
                "mainSeriesProperties.candleStyle.drawWick": true,
                "mainSeriesProperties.candleStyle.drawBorder": true,
                "mainSeriesProperties.candleStyle.borderColor": "#26a69a",
                "mainSeriesProperties.candleStyle.borderUpColor": "#26a69a",
                "mainSeriesProperties.candleStyle.borderDownColor": "#ef5350",
                "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
                "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350",
                "paneProperties.background": "#131722",
                "paneProperties.vertGridProperties.color": "#363c4e",
                "paneProperties.horzGridProperties.color": "#363c4e",
                "symbolWatermarkProperties.transparency": 90,
                "scalesProperties.textColor": "#AAA"
            },
            "studies": [
                {
                    "id": "MASimple@tv-basicstudies",
                    "inputs": {
                        "length": 7,
                        "source": "close"
                    }
                },
                {
                    "id": "MASimple@tv-basicstudies",
                    "inputs": {
                        "length": 25,
                        "source": "close"
                    }
                },
                {
                    "id": "MASimple@tv-basicstudies",
                    "inputs": {
                        "length": 99,
                        "source": "close"
                    }
                }
            ],
            "time_frames": [
                { text: "1s", resolution: "1S" },
                { text: "15m", resolution: "15" },
                { text: "1H", resolution: "60" },
                { text: "4H", resolution: "240" },
                { text: "1D", resolution: "D" },
                { text: "1W", resolution: "W" },
                { text: "1M", resolution: "M" }
            ]
        });

        // WebSocket connections for live data
        const tradeWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
        const bookWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@100ms');
        
        // Sample market data
        const marketData = [
            { symbol: 'WCT', name: 'WCT', price: 0.3598, secondaryPrice: '$0.35980000', change: '+2.51%', changeClass: 'change-positive' },
            { symbol: 'KERNEL', name: 'KERNEL', price: 0.1956, secondaryPrice: '$0.19560000', change: '-4.91%', changeClass: 'change-negative' },
            { symbol: 'BIGTIME', name: 'BIGTIME', price: 0.07146, secondaryPrice: '$0.07146000', change: '-0.75%', changeClass: 'change-negative' },
            { symbol: 'ONDO', name: 'ONDO', price: 0.8412, secondaryPrice: '$0.84120000', change: '+1.99%', changeClass: 'change-positive' },
            { symbol: 'VIRTUAL', name: 'VIRTUAL', price: 0.5724, secondaryPrice: '$0.57240000', change: '+3.60%', changeClass: 'change-positive' },
            { symbol: 'BABY', name: 'BABY', price: 0.07051, secondaryPrice: '$0.07051000', change: '-7.48%', changeClass: 'change-negative' },
            { symbol: 'GUN', name: 'GUN', price: 0.04605, secondaryPrice: '$0.04605000', change: '-6.50%', changeClass: 'change-negative' }
        ];

        // Populate market list
        function populateMarketList() {
            const container = document.getElementById('market-items');
            marketData.forEach(item => {
                const marketItem = document.createElement('div');
                marketItem.className = 'market-item';
                marketItem.innerHTML = `
                    <div class="coin-info">
                        <div class="coin-icon"></div>
                        <div>${item.name}</div>
                    </div>
                    <div class="price-column">
                        ${item.price}
                        <div class="secondary-price">${item.secondaryPrice}</div>
                    </div>
                    <div class="change-column ${item.changeClass}">${item.change}</div>
                `;
                container.appendChild(marketItem);
            });
        }

        // Initialize market list
        populateMarketList();

        // Sample trade data
        const sampleTrades = [
            { price: 84975.52, amount: 0.00024, time: '12:48:03', isSell: false },
            { price: 84975.52, amount: 0.00058, time: '12:48:02', isSell: false },
            { price: 84975.51, amount: 0.00103, time: '12:48:01', isSell: true },
            { price: 84975.51, amount: 0.00059, time: '12:47:59', isSell: true },
            { price: 84975.52, amount: 0.00059, time: '12:47:57', isSell: false },
            { price: 84975.52, amount: 0.00013, time: '12:47:56', isSell: false },
            { price: 84975.52, amount: 0.00059, time: '12:47:55', isSell: false },
            { price: 84975.52, amount: 0.00028, time: '12:47:55', isSell: false },
            { price: 84975.52, amount: 0.00024, time: '12:47:55', isSell: false },
            { price: 84975.51, amount: 0.00059, time: '12:47:54', isSell: true },
            { price: 84975.51, amount: 0.00007, time: '12:47:53', isSell: true },
            { price: 84975.51, amount: 0.00007, time: '12:47:53', isSell: true },
            { price: 84975.52, amount: 0.00023, time: '12:47:53', isSell: false },
            { price: 84975.52, amount: 0.00059, time: '12:47:52', isSell: false },
            { price: 84975.51, amount: 0.01441, time: '12:47:51', isSell: true },
            { price: 84975.51, amount: 0.00149, time: '12:47:50', isSell: true },
            { price: 84975.52, amount: 0.00077, time: '12:47:50', isSell: false },
            { price: 84975.51, amount: 0.00059, time: '12:47:49', isSell: true },
            { price: 84975.52, amount: 0.00013, time: '12:47:48', isSell: false },
            { price: 84975.51, amount: 0.00103, time: '12:47:47', isSell: true },
            { price: 84975.52, amount: 0.00024, time: '12:47:46', isSell: false }
        ];

        // Initialize trades table with sample data
        function initializeTrades() {
            const tbody = document.querySelector('#trades-table tbody');
            tbody.innerHTML = ''; // Clear existing trades
            
            sampleTrades.forEach(trade => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="trade-price ${trade.isSell ? 'sell' : ''}">${trade.price.toFixed(2)}</td>
                    <td class="trade-amount">${trade.amount.toFixed(8)}</td>
                    <td class="trade-time">${trade.time}</td>
                `;
                tbody.appendChild(row);
            });
        }

        // Initialize trades
        initializeTrades();
        
        // Handle live trade updates
        tradeWs.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const price = parseFloat(data.p).toFixed(2);
            document.getElementById('current-price').textContent = price;
            updatePriceColor(price);
            
            // Add new trade to table
            const tbody = document.querySelector('#trades-table tbody');
            const row = document.createElement('tr');
            
            const time = new Date(data.T).toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            
            row.innerHTML = `
                <td class="trade-price ${data.m ? 'sell' : ''}">${price}</td>
                <td class="trade-amount">${parseFloat(data.q).toFixed(8)}</td>
                <td class="trade-time">${time}</td>
            `;
            
            tbody.insertBefore(row, tbody.firstChild);
            
            // Keep trades history but show scrollbar after 21 trades
            if (tbody.children.length > 100) { // Keep last 100 trades
                tbody.removeChild(tbody.lastChild);
            }
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
        document.getElementById('buy-price-input').addEventListener('input', calculateTotal);
        document.getElementById('buy-amount-input').addEventListener('input', calculateTotal);

        function calculateTotal() {
            const price = parseFloat(document.getElementById('buy-price-input').value) || 0;
            const amount = parseFloat(document.getElementById('buy-amount-input').value) || 0;
            document.getElementById('buy-total-input').value = (price * amount).toFixed(8);
        }
    </script>
</body>

</html>