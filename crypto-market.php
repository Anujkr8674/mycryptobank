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
        }
    </style>
</head>
<body>
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
                        <button class="action-button">📈</button>
                        <button class="action-button">⭐</button>
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
</body>
</html> 