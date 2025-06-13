<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>

    <!-- ===== META TAGS AND TITLE ===== -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <title>Markets Overview</title> -->

    <!-- ===== STYLESHEET ===== -->
    <style>
        /* ===== BASE STYLES ===== */
        body {
            background-color: #0b0e11;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
        }

        /* ===== NAVIGATION STYLES ===== */
        .nav-tabs {
            display: flex;
            gap: 30px;
            margin-bottom: 30px;
        }

        .nav-item {
            font-size: 28px;
            font-weight: 600;
        }

        .nav-item.active {
            color: #fff;
        }

        .nav-item:not(.active) {
            color: #848e9c;
        }

        /* ===== GRID LAYOUT STYLES ===== */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        /* ===== MARKET SECTION STYLES ===== */
        .market-section {
            background: #1e2329;
            border-radius: 8px;
            padding: 16px;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .section-title {
            color: #fff;
            font-size: 16px;
            font-weight: 500;
        }

        .more-link {
            color: #848e9c;
            font-size: 14px;
            text-decoration: none;
        }

        /* ===== CRYPTO ROW STYLES ===== */
        .crypto-row {
            display: flex;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .crypto-row:last-child {
            border-bottom: none;
        }

        .crypto-icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
        }

        .crypto-name {
            font-weight: 500;
            min-width: 60px;
            margin-right: 12px;
        }

        .crypto-price {
            font-weight: 500;
            margin-right: auto;
        }

        .price-change {
            font-weight: 500;
            text-align: right;
        }

        .price-up {
            color: #0ecb81;
        }

        .price-down {
            color: #f6465d;
        }

        /* ===== RESPONSIVE STYLES ===== */
        @media (max-width: 1200px) {
            .grid-container {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .grid-container {
                grid-template-columns: 1fr;
            }
            .nav-item {
                font-size: 20px;
            }
        }

        /* ===== MARKET CAP SECTION STYLES ===== */
        .market-cap-container {
            background: #1e2329;
            border-radius: 8px;
            padding: 24px;
            margin-top: 30px;
        }

        .market-cap-header {
            margin-bottom: 24px;
        }

        .market-cap-header h2 {
            font-size: 24px;
            margin: 0 0 8px 0;
        }

        .market-cap-header p {
            color: #848e9c;
            margin: 0;
        }

        .market-cap-table {
            width: 100%;
        }

        .table-header {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr 0.5fr;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            color: #848e9c;
            font-size: 14px;
        }

        .table-body .row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr 0.5fr;
            padding: 16px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            align-items: center;
        }

        .coin-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .coin-info img {
            width: 32px;
            height: 32px;
        }

        .coin-name {
            font-weight: 500;
        }

        .coin-symbol {
            color: #848e9c;
            font-size: 14px;
        }

        .actions-cell {
            display: flex;
            gap: 8px;
        }

        .action-button {
            background: none;
            border: none;
            cursor: pointer;
            color: #848e9c;
            position: relative;
        }

        .action-button:hover::after {
            content: attr(title);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            padding: 4px 8px;
            background: #2b3139;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1000;
        }
    </style>
    
</head>
<body style="padding-top: 120px;">

    <!-- ===== NAVIGATION BAR ===== -->
    <nav class="nav-tabs">
        <div class="nav-item active">Markets Overview</div>
        <div class="nav-item">Trading Data</div>
        <div class="nav-item">Opportunity</div>
        <div class="nav-item">Token Unlock</div>
    </nav>

    <!-- ===== MARKET SECTIONS GRID ===== -->
    <div class="grid-container">
        <!-- Hot Coins Section -->
        <div class="market-section">
            <div class="section-header">
                <span class="section-title">Hot Coins</span>
                <a href="#" class="more-link">More ›</a>
            </div>
            <div id="hotCoinsContainer"></div>
        </div>

        <!-- New Listing Section -->
        <div class="market-section">
            <div class="section-header">
                <span class="section-title">New Listing</span>
                <a href="#" class="more-link">More ›</a>
            </div>
            <div id="newListingContainer"></div>
        </div>

        <!-- Top Gainer Section -->
        <div class="market-section">
            <div class="section-header">
                <span class="section-title">Top Gainer Coin</span>
                <a href="#" class="more-link">More ›</a>
            </div>
            <div id="topGainerContainer"></div>
        </div>

        <!-- Top Volume Section -->
        <div class="market-section">
            <div class="section-header">
                <span class="section-title">Top Volume Coin</span>
                <a href="#" class="more-link">More ›</a>
            </div>
            <div id="topVolumeContainer"></div>
        </div>
    </div>

    <!-- ===== TOP TOKENS BY MARKET CAP ===== -->
    <?php
    // Binance API Configuration
    define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
    define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
    define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');

    function getBinanceData() {
        $ticker_url = BINANCE_API_URL . 'ticker/24hr';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $ticker_url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        return json_decode($response, true);
    }

    $binance_data = getBinanceData();
    ?>

    <div class="market-cap-container">
        <div class="market-cap-header">
            <h2>Top Tokens by Market Capitalization</h2>
            <p>Get a comprehensive snapshot of all cryptocurrencies available on Binance.</p>
        </div>
        
        <div class="market-cap-table">
            <div class="table-header">
                <div class="col name">Name</div>
                <div class="col price">Price</div>
                <div class="col change">24h Change</div>
                <div class="col volume">24h Volume</div>
                <div class="col market-cap">Market Cap</div>
                <div class="col actions">Actions</div>
            </div>
            
            <div class="table-body" id="marketCapTableBody">
                <!-- Data will be populated via JavaScript -->
            </div>
        </div>
    </div>

    <!-- ===== JAVASCRIPT CODE ===== -->
    <script>
        // ===== CRYPTO DATA =====
        const sections = {
            'hotCoinsContainer': [
                { symbol: 'BNB', price: '603.18', change: '+2.10', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
                { symbol: 'BTC', price: '87.36K', change: '+3.82', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
                { symbol: 'ETH', price: '1.63K', change: '+3.43', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' }
            ],
            'newListingContainer': [
                { symbol: 'WCT', price: '0.4619', change: '-2.28', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24876.png' },
                { symbol: 'KERNEL', price: '0.1963', change: '-3.21', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28672.png' },
                { symbol: 'BIGTIME', price: '0.07108', change: '+2.72', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24055.png' }
            ],
            'topGainerContainer': [
                { symbol: 'MAGIC', price: '0.2354', change: '+78.20', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14783.png' },
                { symbol: 'ENJ', price: '0.1033', change: '+59.17', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2130.png' },
                { symbol: 'SKL', price: '0.02587', change: '+26.01', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5691.png' }
            ],
            'topVolumeContainer': [
                { symbol: 'BTC', price: '87.36K', change: '+3.82', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
                { symbol: 'ETH', price: '1.63K', change: '+3.43', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
                { symbol: 'SOL', price: '139.92', change: '+1.13', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' }
            ]
        };

        // ===== HELPER FUNCTIONS =====
        function createCryptoRow(data) {
            return `
                <div class="crypto-row">
                    <img src="${data.icon}" alt="${data.symbol}" class="crypto-icon" onerror="this.src='https://assets.coingecko.com/coins/images/1/small/bitcoin.png'">
                    <span class="crypto-name">${data.symbol}</span>
                    <span class="crypto-price">$${data.price}</span>
                    <span class="price-change ${parseFloat(data.change) >= 0 ? 'price-up' : 'price-down'}">
                        ${parseFloat(data.change) >= 0 ? '+' : ''}${data.change}%
                    </span>
                </div>
            `;
        }

        function updateSections() {
            Object.entries(sections).forEach(([containerId, data]) => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = data.map(item => createCryptoRow(item)).join('');
                }
            });
        }

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', updateSections);

        // ===== WEBSOCKET CONNECTION =====
        const wsEndpoint = `wss://stream.binance.com:9443/ws/!ticker@arr`;
        const ws = new WebSocket(wsEndpoint);

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Update prices based on WebSocket data
            data.forEach(item => {
                const symbol = item.s.replace('USDT', '');
                Object.values(sections).forEach(sectionData => {
                    const coin = sectionData.find(c => c.symbol === symbol);
                    if (coin) {
                        coin.price = parseFloat(item.c).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        });
                        coin.change = parseFloat(item.P).toFixed(2);
                    }
                });
            });
            updateSections();
        };

        ws.onclose = () => {
            setTimeout(() => {
                location.reload();
            }, 5000);
        };
    </script>

    <script>
    // Function to format numbers with appropriate suffixes (B, M, K)
    function formatNumber(num) {
        if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toFixed(2);
    }

    // Function to get CoinMarketCap icon ID
    const coinIconIds = {
        'BTC': '1',
        'ETH': '1027',
        'BNB': '1839',
        'SOL': '5426',
        'XRP': '52',
        'USDT': '825',
        'ADA': '2010',
        'AVAX': '5805',
        'DOGE': '74',
        'TRX': '1958',
        'DOT': '6636',
        'LINK': '1975',
        'MATIC': '3890',
        'UNI': '7083',
        'ICP': '8916',
        // Add more mappings as needed
    };

    function getCoinIconUrl(symbol) {
        const defaultIcon = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'; // Default to BTC icon
        const iconId = coinIconIds[symbol] || '1';
        return `https://s2.coinmarketcap.com/static/img/coins/64x64/${iconId}.png`;
    }

    // Function to update market cap table
    function updateMarketCapTable(data) {
        const tableBody = document.getElementById('marketCapTableBody');
        let html = '';

        data.forEach(item => {
            const price = parseFloat(item.lastPrice);
            const change = parseFloat(item.priceChangePercent);
            const volume = parseFloat(item.volume) * price;
            const marketCap = volume * 0.1;

            html += `
                <div class="row">
                    <div class="coin-info">
                        <img src="${getCoinIconUrl(item.symbol)}" 
                             onerror="this.src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'"
                             alt="${item.symbol}">
                        <div>
                            <div class="coin-name">${item.symbol}</div>
                            <div class="coin-symbol">${item.symbol}/USDT</div>
                        </div>
                    </div>
                    <div>$${parseFloat(price).toFixed(2)}</div>
                    <div class="${change >= 0 ? 'price-up' : 'price-down'}">
                        ${change >= 0 ? '+' : ''}${change.toFixed(2)}%
                    </div>
                    <div>$${formatNumber(volume)}</div>
                    <div>$${formatNumber(marketCap)}</div>
                    <div class="actions-cell">
                        <button class="action-button" title="Detail" onclick="showTradingGraph(this.getAttribute('data-symbol'))" data-symbol="${item.symbol}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                        </button>
                        <button class="action-button" title="Trade" onclick="window.location.href='./spot.php?symbol=' + this.getAttribute('data-symbol')" data-symbol="${item.symbol}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 20v-6M6 20V10M18 20V4"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        });

        tableBody.innerHTML = html;
    }

    // WebSocket connection for live updates
    const marketCapWs = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
    
    marketCapWs.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Filter and sort data by volume
        const sortedData = data
            .filter(item => item.s.endsWith('USDT'))
            .sort((a, b) => parseFloat(b.v) * parseFloat(b.c) - parseFloat(a.v) * parseFloat(a.c))
            .slice(0, 20); // Show top 20 tokens

        updateMarketCapTable(sortedData.map(item => ({
            symbol: item.s.replace('USDT', ''),
            lastPrice: item.c,
            priceChangePercent: item.P,
            volume: item.v
        })));
    };

    marketCapWs.onclose = () => {
        setTimeout(() => {
            location.reload();
        }, 5000);
    };
    </script>

    <script>
    // Add this function at the end of your existing script
    function showTradingGraph(symbol) {
        // Create modal container
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: #1e2329;
            padding: 20px;
            border-radius: 8px;
            width: 90%;
            height: 90%;
            position: relative;
            display: grid;
            grid-template-columns: 70% 30%;
            gap: 20px;
        `;

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.style.cssText = `
            position: absolute;
            right: 10px;
            top: 10px;
            background: none;
            border: none;
            color: #848e9c;
            font-size: 24px;
            cursor: pointer;
            z-index: 1001;
        `;
        closeButton.onclick = () => modal.remove();

        // Left section for chart
        const chartSection = document.createElement('div');
        chartSection.style.cssText = 'width: 100%; height: 100%;';

        // Right section for trading
        const tradingSection = document.createElement('div');
        tradingSection.style.cssText = `
            padding: 20px;
            background: #2b3139;
            border-radius: 8px;
            color: #fff;
        `;

        // Create trading interface
        tradingSection.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h2 style="margin: 0 0 10px 0;">${symbol} to USD</h2>
                <div id="price-${symbol}" style="font-size: 24px; font-weight: bold;"></div>
                <div id="change-${symbol}" style="color: #0ecb81;"></div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                    <button class="trade-tab active" style="flex: 1; padding: 10px; background: #1e2329; border: none; color: #fff; border-radius: 4px; cursor: pointer;">Buy</button>
                    <button class="trade-tab" style="flex: 1; padding: 10px; background: #2b3139; border: none; color: #848e9c; border-radius: 4px; cursor: pointer;">Sell</button>
                </div>

                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #848e9c;">You Buy</label>
                    <input type="number" id="buy-amount-${symbol}" placeholder="0" style="width: 100%; padding: 10px; background: #1e2329; border: 1px solid #848e9c; border-radius: 4px; color: #fff; margin-bottom: 5px;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #848e9c;">BTC</span>
                        <span id="btc-value-${symbol}" style="color: #848e9c;">1 BTC = $<span id="current-price-${symbol}"></span></span>
                    </div>
                </div>

                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; color: #848e9c;">You Spend</label>
                    <input type="number" id="spend-amount-${symbol}" placeholder="10 - 50,000" style="width: 100%; padding: 10px; background: #1e2329; border: 1px solid #848e9c; border-radius: 4px; color: #fff;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: #848e9c;">USD</span>
                    </div>
                </div>

                <button style="width: 100%; padding: 12px; background: #f0b90b; border: none; border-radius: 4px; color: #000; font-weight: bold; cursor: pointer;">
                    Buy BTC
                </button>
            </div>
        `;

        modalContent.appendChild(closeButton);
        modalContent.appendChild(chartSection);
        modalContent.appendChild(tradingSection);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Initialize TradingView widget
        new TradingView.widget({
            "width": "100%",
            "height": "100%",
            "symbol": "BINANCE:" + symbol + "USDT",
            "interval": "1D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#1e2329",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": chartSection.id,
            "hide_side_toolbar": false,
            "studies": [
                "MASimple@tv-basicstudies",
                "RSI@tv-basicstudies"
            ]
        });

        // Setup WebSocket connection for real-time price updates
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@ticker`);
        
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const price = parseFloat(data.c).toFixed(2);
            const priceChange = parseFloat(data.P).toFixed(2);
            const priceElement = document.getElementById(`price-${symbol}`);
            const changeElement = document.getElementById(`change-${symbol}`);
            const currentPriceElement = document.getElementById(`current-price-${symbol}`);
            
            if (priceElement && changeElement && currentPriceElement) {
                priceElement.textContent = `$${price}`;
                changeElement.textContent = `${priceChange}%`;
                changeElement.style.color = parseFloat(priceChange) >= 0 ? '#0ecb81' : '#f6465d';
                currentPriceElement.textContent = price;
            }
        };

        // Handle tab switching
        const tabs = tradingSection.querySelectorAll('.trade-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.style.background = '#2b3139';
                    t.style.color = '#848e9c';
                    t.classList.remove('active');
                });
                tab.style.background = '#1e2329';
                tab.style.color = '#fff';
                tab.classList.add('active');
            });
        });

        // Handle input calculations
        const buyAmountInput = document.getElementById(`buy-amount-${symbol}`);
        const spendAmountInput = document.getElementById(`spend-amount-${symbol}`);

        buyAmountInput.addEventListener('input', () => {
            const currentPrice = parseFloat(document.getElementById(`current-price-${symbol}`).textContent);
            if (!isNaN(currentPrice) && !isNaN(buyAmountInput.value)) {
                spendAmountInput.value = (buyAmountInput.value * currentPrice).toFixed(2);
            }
        });

        spendAmountInput.addEventListener('input', () => {
            const currentPrice = parseFloat(document.getElementById(`current-price-${symbol}`).textContent);
            if (!isNaN(currentPrice) && !isNaN(spendAmountInput.value)) {
                buyAmountInput.value = (spendAmountInput.value / currentPrice).toFixed(8);
            }
        });

        // Cleanup WebSocket on modal close
        closeButton.addEventListener('click', () => {
            ws.close();
        });
    }
    </script>

    <!-- Add TradingView Widget script -->
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
</body>
<?php include "footer.php";?>
</html> 