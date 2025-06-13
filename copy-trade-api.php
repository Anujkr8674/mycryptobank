<?php
// Binance API Configuration
define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');
define('BINANCE_WS_URL', 'wss://stream.binance.com:9443/ws/');

// Add WebSocket server configuration
define('WS_SERVER', 'wss://stream.binance.com:9443/ws/');
define('UPDATE_INTERVAL_MS', 100); // 100ms update interval

// Handle AJAX requests for live data
if(isset($_GET['action']) && $_GET['action'] === 'get_data') {
    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    
    // Get time period and portfolio type from request
    $timePeriod = isset($_GET['time_period']) ? $_GET['time_period'] : '30';
    $portfolioType = isset($_GET['portfolio_type']) ? $_GET['portfolio_type'] : 'public';
    
    function getBinanceData() {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => BINANCE_API_URL . "ticker/24hr",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => ["X-MBX-APIKEY: " . BINANCE_API_KEY],
            CURLOPT_TIMEOUT => 2,
            CURLOPT_CONNECTTIMEOUT => 1
        ]);
        
        $response = curl_exec($ch);
        curl_close($ch);
        
        return json_decode($response, true) ?: [];
    }

    // Add new function to get KNOTMAIN specific data with millisecond precision
    function getKnotmainLiveData() {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => BINANCE_API_URL . "account",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => ["X-MBX-APIKEY: " . BINANCE_API_KEY],
            CURLOPT_TIMEOUT => 1, // Reduced timeout to 1 second
            CURLOPT_CONNECTTIMEOUT => 1
        ]);
        
        $response = curl_exec($ch);
        curl_close($ch);
        
        $data = json_decode($response, true) ?: [];
        
        // Get current timestamp with millisecond precision
        $timestamp = round(microtime(true) * 1000);
        
        // Generate signature for API request
        $queryString = "timestamp=" . $timestamp;
        $signature = hash_hmac('sha256', $queryString, BINANCE_API_SECRET);
        
        // Get current market data
        $marketData = getBinanceData();
        
        // Calculate live metrics for KNOTMAIN with millisecond precision
        $liveData = [
            'id' => 2,
            'name' => 'KNOTMAIN',
            'followers' => '964',
            'max_followers' => '1000',
            'base_pnl' => 139339.43,
            'base_roi' => 23.65,
            'base_aum' => 5445175.99,
            'mdd' => 10.29,
            'sharpe_ratio' => '2.68',
            'api_tag' => true,
            'has_full' => false,
            'live_data' => [
                'timestamp' => $timestamp,
                'market_data' => $marketData,
                'account_data' => $data,
                'update_interval_ms' => UPDATE_INTERVAL_MS
            ]
        ];
        
        return $liveData;
    }

    function calculateMetrics($portfolio, $marketData) {
        // Calculate real-time metrics based on market data
        $baseValue = $portfolio['base_pnl'];
        $marketChange = isset($marketData['priceChangePercent']) ? floatval($marketData['priceChangePercent']) : 0;
        $volume = isset($marketData['volume']) ? floatval($marketData['volume']) : 0;
        
        // Calculate market impact multiplier based on volume and price change
        $volumeImpact = $volume > 0 ? log10($volume) / 10 : 0;
        $marketMultiplier = 1 + (($marketChange * $volumeImpact) / 100);
        
        // Apply market impact to portfolio metrics
        $portfolio['pnl'] = $baseValue * (1 + ($marketChange / 100));
        $portfolio['roi'] = $portfolio['base_roi'] * (1 + ($marketChange / 200));
        
        // Update AUM with real-time market data
        $portfolio['aum'] = $portfolio['base_aum'] * $marketMultiplier;
        
        // Calculate real-time MDD based on market conditions
        $baseMdd = $portfolio['mdd'];
        if ($marketChange < 0) {
            // Increase MDD slightly during negative market movements
            $portfolio['mdd'] = $baseMdd * (1 + abs($marketChange) / 200);
        } else {
            // Decrease MDD slightly during positive market movements
            $portfolio['mdd'] = $baseMdd * (1 - ($marketChange / 300));
        }
        
        // Ensure MDD stays within reasonable bounds
        $portfolio['mdd'] = max(0.01, min(99.99, $portfolio['mdd']));
        
        return $portfolio;
    }

    // Get latest market data
    $marketData = getBinanceData();
    
    if ($portfolioType === 'public') {
        // Your existing portfolio data structure
        $portfolios = [
            // #1 - Top performing portfolio with highest PNL
            // Full trading access available
            [
                'id' => 1,
                'name' => 'GTR VS FERRARI',
                'followers' => '600',
                'max_followers' => '600',
                'base_pnl' => 196446.25,
                'base_roi' => 1964.46,
                'base_aum' => 445038.40,
                'mdd' => 0.09,
                'sharpe_ratio' => '-',
                'api_tag' => false,
                'has_full' => true
            ],
            // #2 - API-enabled portfolio with large AUM
            // High follower count with API integration
            [
                'id' => 2,
                'name' => 'KNOTMAIN',
                'followers' => '964',
                'max_followers' => '1000',
                'base_pnl' => 139339.43,
                'base_roi' => 23.65,
                'base_aum' => 5445175.99,
                'mdd' => 10.29,
                'sharpe_ratio' => '2.68',
                'api_tag' => true,
                'has_full' => false
            ],
            // #3 - New growing portfolio
            // Low follower count with good performance
            [
                'id' => 3,
                'name' => '踢倒母炉',
                'followers' => '19',
                'max_followers' => '400',
                'base_pnl' => 118905.17,
                'base_roi' => 19.48,
                'base_aum' => 820070.29,
                'mdd' => 16.10,
                'sharpe_ratio' => '2.06',
                'api_tag' => false,
                'has_full' => false
            ],
            // #4 - Stable high-ROI portfolio
            // Near maximum followers with excellent Sharpe ratio
            [
                'id' => 4,
                'name' => '稳定暴赚',
                'followers' => '917',
                'max_followers' => '1000',
                'base_pnl' => 62369.78,
                'base_roi' => 187.40,
                'base_aum' => 2875961.69,
                'mdd' => 11.29,
                'sharpe_ratio' => '3.73',
                'api_tag' => false,
                'has_full' => false
            ],
            // #5 - Maximum capacity portfolio
            // Full followers with highest ROI
            [
                'id' => 5,
                'name' => '熟感资本',
                'followers' => '1000',
                'max_followers' => '1000',
                'base_pnl' => 46739.70,
                'base_roi' => 273.72,
                'base_aum' => 1275347.92,
                'mdd' => 32.11,
                'sharpe_ratio' => '-',
                'api_tag' => false,
                'has_full' => true
            ],
            // #6 - Mid-tier portfolio
            // Moderate followers with balanced metrics
            [
                'id' => 6,
                'name' => '48ClubWuSi',
                'followers' => '478',
                'max_followers' => '700',
                'base_pnl' => 41629.96,
                'base_roi' => 8.76,
                'base_aum' => 2591786.03,
                'mdd' => 62.15,
                'sharpe_ratio' => '2.17',
                'api_tag' => false,
                'has_full' => false
            ]
        ];

        // Update KNOTMAIN portfolio with live data
        foreach ($portfolios as &$portfolio) {
            if ($portfolio['name'] === 'KNOTMAIN') {
                $liveData = getKnotmainLiveData();
                $portfolio = array_merge($portfolio, $liveData);
            }
        }

        // Update each portfolio with real-time data
        $updatedPortfolios = array_map(function($portfolio) use ($marketData) {
            return calculateMetrics($portfolio, $marketData);
        }, $portfolios);

        echo json_encode([
            'type' => 'public',
            'data' => $updatedPortfolios,
            'timestamp' => round(microtime(true) * 1000), // Millisecond precision
            'update_interval_ms' => UPDATE_INTERVAL_MS
        ]);
    } else {
        echo json_encode([
            'type' => $portfolioType,
            'data' => [],
            'timestamp' => round(microtime(true) * 1000), // Millisecond precision
            'update_interval_ms' => UPDATE_INTERVAL_MS
        ]);
    }
    exit;
}

// Add WebSocket endpoint for real-time updates
if(isset($_GET['action']) && $_GET['action'] === 'ws') {
    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    
    $wsData = [
        'type' => 'ws',
        'url' => WS_SERVER,
        'symbols' => ['btcusdt@ticker', 'ethusdt@ticker', 'bnbusdt@ticker'],
        'update_interval_ms' => UPDATE_INTERVAL_MS
    ];
    
    echo json_encode($wsData);
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trading Portfolios</title>
    <style>
        :root {
            --background-color: #0a0a0a;
            --card-background: #1E2023;
            --border-color: #FFB800;
            --text-color: #ffffff;
            --text-secondary: #888888;
            --profit-green: #00E8A2;
            --loss-red: #ff4444;
            --yellow-button: #ffd700;
            --dark-button: #2D3035;
            --full-button: #3A2327;
        }

        body { 
            background-color: var(--background-color);
            color: var(--text-color);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            margin: 0;
            padding: 20px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            border-bottom: 1px solid var(--border-color);
        }

        .nav-section {
            display: flex;
            gap: 20px;
        }

        .nav-item {
            color: var(--text-color);
            padding: 10px 20px;
            text-decoration: none;
            position: relative;
            cursor: pointer;
            transition: color 0.3s;
        }

        .nav-item.active {
            color: var(--yellow-button);
        }

        .nav-item.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--yellow-button);
        }

        .filter-bar {
            display: flex;
            gap: 10px;
            padding: 20px;
            align-items: center;
        }

        .dropdown {
            background: var(--card-background);
            border: 1px solid var(--border-color);
            color: var(--text-color);
            padding: 5px 15px;
            border-radius: 4px;
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
            max-width: 1440px;
            margin: 0 auto;
        }

        @media (max-width: 1200px) {
            .portfolio-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .portfolio-grid {
                grid-template-columns: 1fr;
            }
        }

        .portfolio-card {
            background: var(--card-background);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 20px;
            position: relative;
        }

        .portfolio-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
        }

        .portfolio-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .portfolio-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            overflow: hidden;
        }

        .portfolio-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .portfolio-info {
            display: flex;
            flex-direction: column;
        }

        .portfolio-name {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-color);
        }

        .followers {
            color: var(--text-secondary);
            font-size: 14px;
            margin-top: 4px;
        }

        .favorite-star {
            color: var(--text-secondary);
            font-size: 24px;
            cursor: pointer;
        }

        .pnl-section {
            margin: 20px 0;
        }

        .pnl-label {
            color: var(--text-secondary);
            font-size: 14px;
            margin-bottom: 8px;
        }

        .pnl-amount {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .pnl-amount.profit {
            color: var(--profit-green);
        }

        .roi {
            color: var(--text-secondary);
            font-size: 14px;
        }

        .roi .value {
            color: var(--profit-green);
        }

        .chart-container {
            height: 80px;
            margin: 20px 0;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 24px 0;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 14px;
        }

        .stat-value {
            color: var(--text-color);
            font-size: 16px;
            font-weight: 500;
        }

        .button-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .btn {
            padding: 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            text-align: center;
        }

        .btn-mock {
            background: var(--dark-button);
            color: var(--text-color);
        }

        .btn-full {
            background: var(--full-button);
            color: #FF6B6B;
        }

        .btn-copy {
            background: #FFD700;
            color: black;
            font-weight: 600;
        }

        .portfolio-container {
            display: none;
        }

        .portfolio-container.active {
            display: block;
        }

        .empty-state {
            text-align: center;
            padding: 40px;
            color: var(--text-secondary);
        }

        .empty-state img {
            width: 120px;
            margin-bottom: 20px;
            opacity: 0.5;
        }

        .empty-state h3 {
            margin: 10px 0;
            color: var(--text-color);
        }

        .empty-state p {
            margin: 5px 0;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="nav-section">
            <a href="#" class="nav-item active" data-type="public">Public Portfolios</a>
            <a href="#" class="nav-item" data-type="private">Private Portfolios</a>
            <a href="#" class="nav-item" data-type="favorites">My Favorites</a>
        </div>
        <div class="nav-section">
            <a href="#" class="nav-item">Daily Picks</a>
        </div>
    </div>

    <div class="filter-bar">
        <select class="dropdown" id="timeFilter">
            <option value="30">30 Days</option>
        </select>
        <select class="dropdown">
            <option>PnL</option>
        </select>
        <label style="color: var(--text-secondary)">
            <input type="checkbox"> Smart Filter
        </label>
    </div>

    <div id="publicPortfolios" class="portfolio-container active">
        <div class="portfolio-grid">
            <!-- Public portfolios will be dynamically inserted here -->
        </div>
    </div>

    <div id="privatePortfolios" class="portfolio-container">
        <div class="empty-state">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00LjY0OCAxLjk5OEMzLjczOCAxLjk5OCAzIDIuNzM2IDMgMy42NDZ2MTYuNzA4YzAgLjkxLjczOCAxLjY0OGgxNC43MDRjLjkxIDAgMS42NDgtLjczOCAxLjY0OC0xLjY0OFYzLjY0NmMwLS45MS0uNzM4LTEuNjQ4LTEuNjQ4LTEuNjQ4SDQuNjQ4eiIgZmlsbD0iIzY2NiIvPjwvc3ZnPg==" alt="Empty Portfolio">
            <h3>No Private Portfolios Yet</h3>
            <p>Private portfolios will be available soon</p>
        </div>
    </div>

    <div id="favorites" class="portfolio-container">
        <div class="empty-state">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyTDkuMzggOC4yODUgMyA5LjI3bDQuNSA0LjM4NS0xLjA2MyA2LjE5M0wxMiAxNi43ODVsNS41NjMgMi45MjMtMS4wNjMtNi4xOTNMMjEgOS4yN2wtNi4zOC0uOTg1TDEyIDJ6IiBmaWxsPSIjNjY2Ii8+PC9zdmc+" alt="No Favorites">
            <h3>No Favorites Yet</h3>
            <p>Your favorite portfolios will appear here</p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        let charts = {};
        let currentPortfolioType = 'public';
        let currentTimePeriod = '30';
        let wsConnection = null;
        let lastUpdateTime = 0;
        const UPDATE_INTERVAL = 100; // 100ms update interval

        // Initialize WebSocket connection with millisecond precision
        function initWebSocket() {
            const symbols = ['btcusdt@ticker', 'ethusdt@ticker', 'bnbusdt@ticker'];
            const wsUrl = 'wss://stream.binance.com:9443/ws/' + symbols.join('/');
            
            wsConnection = new WebSocket(wsUrl);
            
            wsConnection.onmessage = function(event) {
                const data = JSON.parse(event.data);
                const currentTime = performance.now();
                
                // Update data immediately when we receive WebSocket updates
                if (currentTime - lastUpdateTime >= UPDATE_INTERVAL) {
                    updatePortfolios();
                    lastUpdateTime = currentTime;
                }
            };

            wsConnection.onclose = function() {
                // Reconnect if connection is closed
                setTimeout(initWebSocket, 100);
            };
        }

        // Enhanced updatePortfolios function with millisecond precision
        function updatePortfolios() {
            if (currentPortfolioType !== 'public') return;

            fetch(`copy-trade-api.php?action=get_data&time_period=${currentTimePeriod}&portfolio_type=${currentPortfolioType}&t=${performance.now()}`)
                .then(response => response.json())
                .then(response => {
                    if (response.type === 'public') {
                        const container = document.querySelector('#publicPortfolios .portfolio-grid');
                        
                        response.data.forEach(portfolio => {
                            let card = document.getElementById(`portfolio-${portfolio.id}`);
                            if (!card) {
                                card = createPortfolioCard(portfolio);
                                container.appendChild(card);
                            } else {
                                // Update existing card with new data
                                updatePortfolioCard(card, portfolio);
                            }
                        });
                    }
                })
                .catch(error => console.error('Error:', error));
        }

        // Function to update existing portfolio card with millisecond precision
        function updatePortfolioCard(card, portfolio) {
            const pnlElement = card.querySelector('.pnl-amount');
            const roiElement = card.querySelector('.roi .value');
            const aumElement = card.querySelector('.aum .stat-value');
            const mddElement = card.querySelector('.stat-item:nth-child(2) .stat-value');
            
            // Update PNL with animation and millisecond precision
            const currentPnl = parseFloat(pnlElement.getAttribute('data-value') || 0);
            const newPnl = portfolio.pnl;
            animateValue(pnlElement, currentPnl, newPnl, 100); // 100ms animation
            pnlElement.setAttribute('data-value', newPnl);
            
            // Update ROI with millisecond precision
            const roiValue = portfolio.roi.toFixed(4); // 4 decimal places
            roiElement.textContent = `${roiValue >= 0 ? '+' : ''}${roiValue}%`;
            
            // Update AUM with animation and millisecond precision
            const currentAum = parseFloat(aumElement.getAttribute('data-value') || portfolio.aum);
            animateValue(aumElement, currentAum, portfolio.aum, 100); // 100ms animation
            aumElement.setAttribute('data-value', portfolio.aum);
            
            // Update MDD with animation and millisecond precision
            const currentMdd = parseFloat(mddElement.getAttribute('data-value') || portfolio.mdd);
            animateValue(mddElement, currentMdd, portfolio.mdd, 100, '%'); // 100ms animation
            mddElement.setAttribute('data-value', portfolio.mdd);
            
            // Update chart if exists with millisecond precision
            if (charts[portfolio.id]) {
                const chart = charts[portfolio.id];
                chart.data.datasets[0].data = portfolio.chart_data;
                chart.update('none');
            }
        }

        // Enhanced animateValue function with millisecond precision
        function animateValue(element, start, end, duration, suffix = '') {
            const range = end - start;
            const startTime = performance.now();
            
            function updateValue(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                const value = start + (range * progress);
                element.textContent = (suffix !== '%' && value >= 0 ? '+' : '') + 
                    value.toLocaleString('en-US', {
                        minimumFractionDigits: 4, // 4 decimal places
                        maximumFractionDigits: 4
                    }) + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(updateValue);
                }
            }
            
            requestAnimationFrame(updateValue);
        }

        // Initialize everything with millisecond precision
        document.addEventListener('DOMContentLoaded', function() {
            initWebSocket();
            updatePortfolios();
            
            // Backup polling every 100ms in case WebSocket fails
            setInterval(updatePortfolios, UPDATE_INTERVAL);
        });

        // Add click handlers for navigation
        document.querySelectorAll('.nav-item[data-type]').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const type = this.dataset.type;
                
                // Update active state
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Update visible container
                document.querySelectorAll('.portfolio-container').forEach(container => container.classList.remove('active'));
                document.getElementById(type + 'Portfolios').classList.add('active');
                
                // Update current type and refresh data
                currentPortfolioType = type;
                updatePortfolios();
            });
        });

        function createPortfolioCard(portfolio) {
            const div = document.createElement('div');
            div.className = 'portfolio-card';
            div.id = `portfolio-${portfolio.id}`;
            
            const profitClass = portfolio.pnl >= 0 ? 'profit' : 'loss';
            const profitSign = portfolio.pnl >= 0 ? '+' : '';
            const roiSign = portfolio.roi >= 0 ? '+' : '';

            div.innerHTML = `
                <div class="portfolio-header">
                    <div class="portfolio-left">
                        <div class="portfolio-icon">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhwYHBoXFxodHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=" alt="${portfolio.name}">
                        </div>
                        <div class="portfolio-info">
                            <div class="portfolio-name">
                                ${portfolio.name}
                                ${portfolio.api_tag ? '<span class="api-tag">API</span>' : ''}
                            </div>
                            <div class="followers">${portfolio.followers} / ${portfolio.max_followers}</div>
                        </div>
                    </div>
                    <div class="favorite-star">★</div>
                </div>
                <div class="pnl-section">
                    <div class="pnl-label">30 Days PNL</div>
                    <div class="pnl-amount ${profitClass}">${profitSign}${portfolio.pnl.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    <div class="roi">ROI <span class="value">${roiSign}${portfolio.roi}%</span></div>
                </div>
                <div class="chart-container">
                    <canvas id="chart-${portfolio.id}"></canvas>
                </div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-label">AUM</div>
                        <div class="stat-value">${portfolio.aum.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">30 Days MDD</div>
                        <div class="stat-value">${portfolio.mdd}%</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Sharpe Ratio</div>
                        <div class="stat-value">${portfolio.sharpe_ratio}</div>
                    </div>
                </div>
                <div class="button-group">
                    <button class="btn btn-mock">Mock</button>
                    ${portfolio.has_full ? 
                        '<button class="btn btn-full">Full</button>' : 
                        '<button class="btn btn-copy">Copy</button>'}
                </div>
            `;

            setTimeout(() => {
                const ctx = div.querySelector(`#chart-${portfolio.id}`).getContext('2d');
                if (charts[portfolio.id]) {
                    charts[portfolio.id].destroy();
                }
                
                charts[portfolio.id] = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: Array.from({length: 30}, (_, i) => i + 1), // 30 days
                        datasets: [{
                            data: portfolio.chart_data || Array.from({length: 30}, () => Math.random() * 100),
                            borderColor: portfolio.pnl >= 0 ? '#00E8A2' : '#ff4444',
                            borderWidth: 2,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 0, // Hide points by default
                            pointHoverRadius: 6, // Show points on hover
                            pointBackgroundColor: '#FFB800',
                            pointBorderColor: '#FFB800',
                            pointHoverBackgroundColor: '#FFB800',
                            pointHoverBorderColor: '#fff',
                            pointHoverBorderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                enabled: true,
                                mode: 'index',
                                intersect: false,
                                backgroundColor: '#2D3035',
                                titleColor: '#fff',
                                bodyColor: '#fff',
                                borderColor: '#FFB800',
                                borderWidth: 1,
                                padding: 10,
                                displayColors: false,
                                callbacks: {
                                    title: function(tooltipItems) {
                                        return 'Day ' + tooltipItems[0].label;
                                    },
                                    label: function(context) {
                                        let value = context.parsed.y;
                                        return value.toFixed(2) + '%';
                                    }
                                }
                            }
                        },
                        hover: {
                            mode: 'index',
                            intersect: false
                        },
                        scales: {
                            x: {
                                display: false,
                                grid: { display: false }
                            },
                            y: {
                                display: false,
                                grid: { display: false }
                            }
                        },
                        interaction: {
                            intersect: false,
                            mode: 'index'
                        }
                    }
                });
            }, 0);

            return div;
        }

        // Add event listener for time period filter
        document.getElementById('timeFilter').addEventListener('change', function(e) {
            currentTimePeriod = e.target.value;
            updatePortfolios();
        });
    </script>
</body>
</html>
