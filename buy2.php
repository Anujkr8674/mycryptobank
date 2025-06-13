<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        body {
            background-color: #1a1d26;
            color: white;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 15px;
        }

        /* Header Styles */
        .header {
            margin-bottom: 25px;
        }

        .header h1 {
            font-size: clamp(24px, 4vw, 32px);
            font-weight: 600;
            color: #ffffff;
        }

        /* Trading Info Styles */
        .trading-info {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }

        .pair-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .coin-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        .pair-name {
            font-size: clamp(18px, 3vw, 24px);
            font-weight: 600;
        }

        .price-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .current-price {
            font-size: clamp(18px, 3vw, 24px);
            font-weight: 600;
        }

        .price-change {
            color: #ff3b3b;
            font-size: clamp(14px, 2vw, 16px);
        }

        /* Chart Section */
        .chart-section {
            background-color: #242731;
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 20px;
        }

        .timeframe-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
        }

        .timeframe-btn {
            background: none;
            border: none;
            color: #808080;
            padding: 5px 12px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .timeframe-btn.active {
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            border-radius: 4px;
        }

        .timeframe-btn:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.05);
        }

        .chart-container {
            height: 350px;
            position: relative;
            width: 100%;
        }

        #priceChart {
            width: 100% !important;
            height: 100% !important;
            margin: 0;
            padding: 0;
        }

        /* Market Stats */
        .market-stats {
            background-color: #242731;
            border-radius: 12px;
            padding: 20px;
        }

        .stats-header {
            font-size: clamp(18px, 3vw, 20px);
            font-weight: 600;
            margin-bottom: 20px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .stat-label {
            color: #808080;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .info-icon {
            width: 16px;
            height: 16px;
            opacity: 0.5;
            cursor: help;
        }

        .stat-value {
            font-size: clamp(16px, 2.5vw, 18px);
            font-weight: 600;
        }

        .market-description {
            color: #808080;
            line-height: 1.6;
            font-size: clamp(13px, 2vw, 14px);
        }

        /* Conversion Tables */
        .conversion-tables {
            margin-top: 25px;
        }

        .conversion-header {
            font-size: clamp(18px, 3vw, 20px);
            font-weight: 600;
            margin-bottom: 15px;
        }

        .conversion-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }

        .conversion-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            background-color: #242731;
            border-radius: 8px;
        }

        .conversion-label {
            color: #808080;
            font-size: clamp(13px, 2vw, 14px);
        }

        .conversion-value {
            color: #ff3b3b;
            font-weight: 500;
            font-size: clamp(13px, 2vw, 14px);
        }

        #div2{
            display:flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        

        /* Responsive Adjustments */
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }

            .trading-info {
                flex-direction: column;
                align-items: flex-start;
            }

            .chart-container {
                height: 300px;
            }

            .stats-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .conversion-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .chart-container {
                height: 250px;
            }

            .timeframe-buttons {
                justify-content: space-between;
            }

            .timeframe-btn {
                padding: 4px 8px;
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Cosmos Markets</h1>
        </div>

        <div class="trading-info">
            <div class="pair-info">
                <img src="./img/buy5.png" alt="ATOM" class="coin-icon">
                <span class="pair-name">ATOM/TRY</span>
            </div>
            <div class="price-info">
                <span class="current-price">₺155.81</span>
                <span class="price-change">-4.55%</span>
            </div>
        </div>

        <div id="div2">

        <div class="chart-section">
            <div class="timeframe-buttons">
                <button class="timeframe-btn active" data-timeframe="1D">1D</button>
                <button class="timeframe-btn" data-timeframe="7D">7D</button>
                <button class="timeframe-btn" data-timeframe="1M">1M</button>
                <button class="timeframe-btn" data-timeframe="3M">3M</button>
                <button class="timeframe-btn" data-timeframe="1Y">1Y</button>
            </div>
            <div class="chart-container">
                <canvas id="priceChart"></canvas>
            </div>
        </div>

        <div class="market-stats">
            <h2 class="stats-header">Markets</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-label">
                        Popularity
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=" class="info-icon" alt="info">
                    </div>
                    <div class="stat-value">#50</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">
                        Market Cap
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=" class="info-icon" alt="info">
                    </div>
                    <div class="stat-value">₺60.91B</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">
                        Volume
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=" class="info-icon" alt="info">
                    </div>
                    <div class="stat-value">₺4.29B</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">
                        Circulation Supply
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=" class="info-icon" alt="info">
                    </div>
                    <div class="stat-value">390.93M</div>
                </div>
            </div>
            <p class="market-description">
                Cosmos is experiencing a decline in value this week. Currently, Cosmos is priced at ₺155.81 per ATOM, with a circulating supply of 390.93M ATOM, resulting in a total market capitalisation of ₺60.91B. Over the past 24 hours, the trading volume for Cosmos has increased by ₺134.61B, representing a 31.3898% rise. Moreover, ATOM worth ₺4.29B has been traded in the last day.
            </p>
        </div>

        </div>

        <div class="conversion-tables">
            <h2 class="conversion-header">Conversion Tables</h2>
            <div class="conversion-grid">
                <div class="conversion-item">
                    <span class="conversion-label">7 days exchange rate</span>
                    <span class="conversion-value">-1.7%</span>
                </div>
                <div class="conversion-item">
                    <span class="conversion-label">24-hour exchange rate</span>
                    <span class="conversion-value">-4.55%</span>
                </div>
                <div class="conversion-item">
                    <span class="conversion-label">1 month exchange rate</span>
                    <span class="conversion-value">-15.48%</span>
                </div>
                <div class="conversion-item">
                    <span class="conversion-label">3 month exchange rate</span>
                    <span class="conversion-value">-33.96%</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Chart initialization
        const ctx = document.getElementById('priceChart').getContext('2d');
        let priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'ATOM Price',
                    data: [],
                    borderColor: '#ffd700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'x',
                            modifierKey: 'ctrl',
                        },
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'x',
                            drag: {
                                enabled: true,
                                backgroundColor: 'rgba(255, 215, 0, 0.3)',
                                borderColor: 'rgba(255, 215, 0, 0.5)',
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            drawBorder: false,
                            display: true
                        },
                        ticks: {
                            color: '#808080',
                            maxRotation: 0,
                            autoSkip: true,
                            maxTicksLimit: window.innerWidth < 768 ? 3 : 4,
                            callback: function(value, index, values) {
                                const date = new Date(this.getLabelForValue(value));
                                const hours = date.getHours();
                                const minutes = date.getMinutes();
                                const ampm = hours >= 12 ? 'PM' : 'AM';
                                const formattedHours = hours % 12 || 12;
                                return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
                            }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            drawBorder: false,
                            display: true
                        },
                        ticks: {
                            color: '#808080',
                            maxTicksLimit: window.innerWidth < 768 ? 4 : 6,
                            callback: function(value) {
                                return Math.round(value);
                            }
                        },
                        position: 'right'
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                tooltips: {
                    enabled: true,
                    mode: 'index',
                    intersect: false
                },
                elements: {
                    point: {
                        radius: 0,
                        hoverRadius: 6
                    },
                    line: {
                        tension: 0.2
                    }
                }
            }
        });

        // Add zoom controls
        const zoomButtons = document.createElement('div');
        zoomButtons.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 5px;
            z-index: 1000;
        `;
        
        const zoomInBtn = document.createElement('button');
        zoomInBtn.innerHTML = '+';
        zoomInBtn.style.cssText = `
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s;
        `;

        const zoomOutBtn = document.createElement('button');
        zoomOutBtn.innerHTML = '-';
        zoomOutBtn.style.cssText = zoomInBtn.style.cssText;

        const resetZoomBtn = document.createElement('button');
        resetZoomBtn.innerHTML = '↺';
        resetZoomBtn.style.cssText = zoomInBtn.style.cssText;

        zoomButtons.appendChild(zoomInBtn);
        zoomButtons.appendChild(zoomOutBtn);
        zoomButtons.appendChild(resetZoomBtn);

        // Add hover effects
        [zoomInBtn, zoomOutBtn, resetZoomBtn].forEach(btn => {
            btn.addEventListener('mouseover', () => {
                btn.style.background = 'rgba(255, 255, 255, 0.2)';
            });
            btn.addEventListener('mouseout', () => {
                btn.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });

        // Add zoom functionality
        zoomInBtn.onclick = () => {
            priceChart.zoom(1.1);
        };

        zoomOutBtn.onclick = () => {
            priceChart.zoom(0.9);
        };

        resetZoomBtn.onclick = () => {
            priceChart.resetZoom();
        };

        // Add buttons to chart container
        const chartContainer = document.querySelector('.chart-container');
        chartContainer.style.position = 'relative';
        chartContainer.appendChild(zoomButtons);

        // Add Chart.js Zoom plugin
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-zoom/2.0.1/chartjs-plugin-zoom.min.js';
        script.onload = () => {
            Chart.register(ChartZoom);
            // Refresh chart to apply zoom plugin
            priceChart.update();
        };
        document.head.appendChild(script);

        // Add touch gestures support
        let touchStartX = 0;
        let touchStartY = 0;
        let initialDistance = 0;

        chartContainer.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                initialDistance = Math.hypot(
                    touch2.clientX - touch1.clientX,
                    touch2.clientY - touch1.clientY
                );
            } else if (e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }
        });

        chartContainer.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const touch1 = e.touches[0];
                const touch2 = e.touches[1];
                const currentDistance = Math.hypot(
                    touch2.clientX - touch1.clientX,
                    touch2.clientY - touch1.clientY
                );
                
                const zoomFactor = currentDistance / initialDistance;
                if (zoomFactor > 1.1) {
                    priceChart.zoom(1.1);
                    initialDistance = currentDistance;
                } else if (zoomFactor < 0.9) {
                    priceChart.zoom(0.9);
                    initialDistance = currentDistance;
                }
            }
        });

        let currentTimeframe = '1D';
        let updateInterval;

        // Function to update current price
        async function updateCurrentPrice() {
            try {
                const response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=ATOMUSDT');
                const data = await response.json();
                
                const price = parseFloat(data.lastPrice);
                const change = parseFloat(data.priceChangePercent);
                
                // Update price display
                document.querySelector('.current-price').textContent = `₺${price.toFixed(2)}`;
                document.querySelector('.price-change').textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
                document.querySelector('.price-change').style.color = change >= 0 ? '#00c853' : '#ff3b3b';
            } catch (error) {
                console.error('Error updating current price:', error);
            }
        }

        // Function to update chart data
        async function updateChart(timeframe) {
            try {
                // Clear previous update interval
                if (updateInterval) {
                    clearInterval(updateInterval);
                }

                const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=ATOMUSDT&interval=${getInterval(timeframe)}&limit=100`);
                const data = await response.json();
                
                const chartData = data.map(item => ({
                    time: new Date(item[0]),
                    price: parseFloat(item[4])
                }));

                priceChart.data.labels = chartData.map(item => formatTime(item.time, timeframe));
                priceChart.data.datasets[0].data = chartData.map(item => item.price);
                priceChart.update();

                // Set update interval based on timeframe
                const updateTime = getUpdateInterval(timeframe);
                updateInterval = setInterval(() => updateChart(timeframe), updateTime);

                // Update current timeframe
                currentTimeframe = timeframe;
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        }

        // Helper function to get update interval based on timeframe
        function getUpdateInterval(timeframe) {
            const intervals = {
                '1D': 10000,     // 10 seconds for 1 day view
                '7D': 60000,     // 1 minute for 7 day view
                '1M': 300000,    // 5 minutes for 1 month view
                '3M': 900000,    // 15 minutes for 3 month view
                '1Y': 3600000    // 1 hour for 1 year view
            };
            return intervals[timeframe] || 15000;
        }

        // Helper function to get interval based on timeframe
        function getInterval(timeframe) {
            const intervals = {
                '1D': '15m',
                '7D': '1h',
                '1M': '4h',
                '3M': '1d',
                '1Y': '1w'
            };
            return intervals[timeframe] || '15m';
        }

        // Helper function to format time based on timeframe
        function formatTime(date, timeframe) {
            const options = {
                '1D': { hour: '2-digit', minute: '2-digit' },
                '7D': { month: 'short', day: 'numeric' },
                '1M': { month: 'short', day: 'numeric' },
                '3M': { month: 'short', day: 'numeric' },
                '1Y': { month: 'short', year: '2-digit' }
            };
            return date.toLocaleDateString('en-US', options[timeframe]);
        }

        // Handle window resize for chart responsiveness
        window.addEventListener('resize', () => {
            priceChart.options.scales.x.ticks.maxTicksLimit = window.innerWidth < 768 ? 3 : 4;
            priceChart.options.scales.y.ticks.maxTicksLimit = window.innerWidth < 768 ? 4 : 6;
            priceChart.update();
        });

        // Timeframe button handling
        document.querySelectorAll('.timeframe-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.timeframe-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                updateChart(this.dataset.timeframe);
            });
        });

        // Start updates
        updateCurrentPrice();
        updateChart('1D');

        // Update current price every 10 seconds
        setInterval(updateCurrentPrice, 10000);
    </script>
</body>
</html>
