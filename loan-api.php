<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: #0a0a0a;
            color: #fff;
            margin: 0;
            padding: 15px;
            min-width: 320px;
            line-height: 1.5;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding: 0 10px;
        }

        .header h1 {
            font-size: 20px;
            font-weight: 500;
            color: #ffffff;
        }

        .search-container {
            position: relative;
            width: 300px;
        }

        .search-container input {
            background-color: #1a1a1a;
            border: 1px solid #333;
            border-radius: 4px;
            padding: 8px 15px;
            color: #fff;
            width: 100%;
            font-size: 14px;
        }

        .search-container input:focus {
            outline: none;
            border-color: #444;
        }

        .table-container {
            background-color: #0a0a0a;
            border-radius: 4px;
            overflow: hidden;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }

        th {
            text-align: left;
            padding: 12px 15px;
            color: #888;
            font-weight: 500;
            font-size: 13px;
            border-bottom: 1px solid #222;
            background-color: #0a0a0a;
        }

        td {
            padding: 16px 15px;
            border-bottom: 1px solid #181818;
            background-color: #0a0a0a;
            font-size: 14px;
        }

        tr:hover td {
            background-color: #111;
        }

        .coin-cell {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .coin-icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #1a1a1a;
            flex-shrink: 0;
        }

        .coin-icon i {
            font-size: 14px;
        }

        .rate-value {
            font-family: 'Roboto Mono', monospace;
            position: relative;
            color: #fff;
        }

        .rate-up, .rate-down {
            position: relative;
            padding-right: 15px;
        }

        .rate-up .rate-indicator {
            color: #00c087;
        }

        .rate-down .rate-indicator {
            color: #ff5757;
        }

        .rate-indicator {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 10px;
            opacity: 1;
        }

        .borrow-btn {
            background-color: transparent;
            border: none;
            color: #f0b90b;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            padding: 6px 12px;
            border-radius: 4px;
        }

        .borrow-btn:hover {
            background-color: rgba(240, 185, 11, 0.1);
        }

        /* Icon Colors */
        .fa-btc { color: #f7931a; }
        .fa-ethereum { color: #627eea; }
        .fa-tether { color: #26a17b; }
        .fa-xrp { color: #00aae4; }
        .fa-solana { color: #00ffa3; }
        .fa-usd { color: #2775ca; }
        .fa-dogecoin { color: #c2a633; }
        .fa-cardano { color: #0033ad; }
        .fa-tron { color: #ff0013; }
        .fa-stellar { color: #7d00ff; }
        .fa-s { color: #6fbcf0; }
        .fa-link { color: #2a5ada; }
        .fa-avalanche { color: #e84142; }
        .fa-hashnode { color: #00b4ff; }
        .fa-shiba-inu { color: #ffa409; }
        .fa-ton { color: #0088cc; }
        .fa-bch { color: #8dc351; }
        .fa-dot { color: #e6007a; }
        .fa-ltc { color: #345d9d; }
        .fa-dai { color: #f5ac37; }

        @media screen and (max-width: 768px) {
            body {
                padding: 10px;
            }

            .header {
                flex-direction: column;
                gap: 15px;
            }

            .search-container {
                width: 100%;
            }

            td, th {
                padding: 12px 10px;
            }
        }

        @media screen and (max-width: 480px) {
            .header h1 {
                font-size: 18px;
            }

            td, th {
                padding: 10px 8px;
                font-size: 13px;
            }

            .coin-icon {
                width: 20px;
                height: 20px;
            }

            .coin-icon i {
                font-size: 12px;
            }

            .borrow-btn {
                font-size: 13px;
                padding: 4px 8px;
            }
        }
    </style>
</head>
<body>
    <?php
    // Binance API Configuration
    define('BINANCE_API_KEY', 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A');
    define('BINANCE_API_SECRET', 'NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j');
    define('BINANCE_API_URL', 'https://api.binance.com/api/v3/');

    function getSignature($query_string) {
        return hash_hmac('sha256', $query_string, BINANCE_API_SECRET);
    }

    // Get initial market data
    function getMarketData() {
        $timestamp = round(microtime(true) * 1000);
        $query = http_build_query([
            'timestamp' => $timestamp
        ]);
        
        $signature = getSignature($query);
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, BINANCE_API_URL . "ticker/24hr?" . $query . "&signature=" . $signature);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'X-MBX-APIKEY: ' . BINANCE_API_KEY
        ));
        
        $response = curl_exec($ch);
        curl_close($ch);
        
        return json_decode($response, true);
    }

    // Get initial data
    $initialData = getMarketData();
    ?>

    <div class="header">
        <h1>Borrow Market</h1>
        <div class="search-container">
            <input type="text" placeholder="Search coin name">
        </div>
    </div>

    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Hourly Interest Rate</th>
                    <th>Annual Interest Rate</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="marketData">
                <!-- Data will be populated here -->
            </tbody>
        </table>
    </div>

    <script>
    const coins = [
        { 
            symbol: 'BTC', 
            icon: '<i class="fab fa-bitcoin fa-fw"></i>',
            baseRate: 1.150538 
        },
        { 
            symbol: 'ETH', 
            icon: '<i class="fab fa-ethereum fa-fw"></i>',
            baseRate: 2.778427 
        },
        { 
            symbol: 'USDT', 
            icon: '<i class="fab fa-tether fa-fw"></i>',
            baseRate: 6.143581 
        },
        { 
            symbol: 'XRP', 
            icon: '<i class="fa-solid fa-x fa-fw"></i>',
            baseRate: 6.669654 
        },
        { 
            symbol: 'SOL', 
            icon: '<i class="fa-solid fa-bolt fa-fw"></i>',
            baseRate: 8.384161 
        },
        { 
            symbol: 'USDC', 
            icon: '<i class="fa-solid fa-dollar-sign fa-fw"></i>',
            baseRate: 5.54755 
        },
        { 
            symbol: 'DOGE', 
            icon: '<i class="fab fa-dogecoin fa-fw"></i>',
            baseRate: 4.365318 
        },
        { 
            symbol: 'ADA', 
            icon: '<i class="fa-solid fa-a fa-fw"></i>',
            baseRate: 5.272767 
        },
        { 
            symbol: 'TRX', 
            icon: '<i class="fa-solid fa-t fa-fw"></i>',
            baseRate: 7.123456 
        },
        { 
            symbol: 'XLM', 
            icon: '<i class="fa-solid fa-star fa-fw"></i>',
            baseRate: 4.987654 
        },
        { 
            symbol: 'SUI', 
            icon: '<i class="fa-solid fa-s fa-fw"></i>',
            baseRate: 9.876543 
        },
        { 
            symbol: 'LINK', 
            icon: '<i class="fa-solid fa-link fa-fw"></i>',
            baseRate: 6.543210 
        },
        { 
            symbol: 'AVAX', 
            icon: '<i class="fa-solid fa-mountain fa-fw"></i>',
            baseRate: 8.765432 
        },
        { 
            symbol: 'HBAR', 
            icon: '<i class="fa-solid fa-h fa-fw"></i>',
            baseRate: 5.432109 
        },
        { 
            symbol: 'SHIB', 
            icon: '<i class="fa-solid fa-dog fa-fw"></i>',
            baseRate: 10.123456 
        },
        { 
            symbol: 'TON', 
            icon: '<i class="fa-solid fa-paper-plane fa-fw"></i>',
            baseRate: 10.362414 
        },
        { 
            symbol: 'BCH', 
            icon: '<i class="fa-solid fa-b fa-fw"></i>',
            baseRate: 11.642093 
        },
        { 
            symbol: 'DOT', 
            icon: '<i class="fa-solid fa-circle-nodes fa-fw"></i>',
            baseRate: 4.941586 
        },
        { 
            symbol: 'LTC', 
            icon: '<i class="fa-solid fa-l fa-fw"></i>',
            baseRate: 3.703325 
        },
        { 
            symbol: 'DAI', 
            icon: '<i class="fa-solid fa-d fa-fw"></i>',
            baseRate: 33.133509 
        }
    ];

    // WebSocket connection
    const wsConnection = new WebSocket('wss://stream.binance.com:9443/ws');

    // Subscribe to all coin pairs
    const subscribeMessage = {
        method: 'SUBSCRIBE',
        params: coins.map(coin => `${coin.symbol.toLowerCase()}usdt@ticker`),
        id: 1
    };

    wsConnection.onopen = () => {
        wsConnection.send(JSON.stringify(subscribeMessage));
    };

    // Handle incoming WebSocket messages
    wsConnection.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.s && data.p) { // Symbol and price change exists
            const symbol = data.s.replace('USDT', '');
            updateCoinRate(symbol, parseFloat(data.p));
        }
    };

    function createInitialTable() {
        const tbody = document.getElementById('marketData');
        tbody.innerHTML = '';
        
        coins.forEach(coin => {
            const hourlyRate = (coin.baseRate / (24 * 365)).toFixed(6);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="coin-cell">
                        <span class="coin-icon">${coin.icon}</span>
                        <span>${coin.symbol}</span>
                    </div>
                </td>
                <td><span id="hourly-${coin.symbol}" class="rate-value">${hourlyRate}%</span></td>
                <td><span id="annual-${coin.symbol}" class="rate-value">${coin.baseRate}%</span></td>
                <td><button class="borrow-btn">Borrow</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    function updateCoinRate(symbol, priceChange) {
        const coin = coins.find(c => c.symbol === symbol);
        if (!coin) return;

        const hourlyElement = document.getElementById(`hourly-${symbol}`);
        const annualElement = document.getElementById(`annual-${symbol}`);
        
        if (hourlyElement && annualElement) {
            // Store previous rates
            const prevHourlyRate = parseFloat(hourlyElement.textContent);
            const prevAnnualRate = parseFloat(annualElement.textContent);

            // Calculate new rates based on price change
            const variation = Math.abs(priceChange) * 0.0001;
            const newAnnualRate = (coin.baseRate + variation).toFixed(6);
            const newHourlyRate = (newAnnualRate / (24 * 365)).toFixed(6);
            
            // Update rates with indicators
            const updateElement = (element, newValue, prevValue) => {
                // Remove previous classes
                element.classList.remove('rate-up', 'rate-down');
                
                // Clear previous indicator
                const oldIndicator = element.querySelector('.rate-indicator');
                if (oldIndicator) {
                    oldIndicator.remove();
                }

                // Add new value and indicator
                if (newValue > prevValue) {
                    element.classList.add('rate-up');
                    element.innerHTML = `${newValue}%<span class="rate-indicator">▲</span>`;
                } else if (newValue < prevValue) {
                    element.classList.add('rate-down');
                    element.innerHTML = `${newValue}%<span class="rate-indicator">▼</span>`;
                } else {
                    element.textContent = `${newValue}%`;
                }

                // Remove classes after animation
                setTimeout(() => {
                    element.classList.remove('rate-up', 'rate-down');
                    const indicator = element.querySelector('.rate-indicator');
                    if (indicator) {
                        indicator.style.opacity = '0';
                    }
                }, 1000);
            };

            updateElement(hourlyElement, newHourlyRate, prevHourlyRate);
            updateElement(annualElement, newAnnualRate, prevAnnualRate);
        }
    }

    // Initialize
    createInitialTable();

    // Search functionality
    document.querySelector('.search-container input').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('#marketData tr').forEach(row => {
            const coinName = row.querySelector('.coin-cell span:last-child').textContent.toLowerCase();
            row.style.display = coinName.includes(searchTerm) ? '' : 'none';
        });
    });

    // Handle WebSocket errors and reconnection
    wsConnection.onerror = (error) => {
        console.error('WebSocket Error:', error);
    };

    wsConnection.onclose = () => {
        console.log('WebSocket Connection Closed. Reconnecting...');
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    };
    </script>
</body>
</html>