<?php
// Crypto Price Display Component
?>
<!-- Crypto Price Display Component Start -->
<div id="crypto-container" class="crypto-container">
    <div class="nav-section">
        <div class="left-nav">
            <span class="nav-item" data-tab="popular">Popular</span>
            <span class="nav-item active" data-tab="new">New Listing</span>
        </div>
        <div class="right-nav">
            <span>View More Coins ›</span>
        </div>
    </div>
    <div id="crypto-list"></div>
</div>

<style>
    .crypto-container {
        background: #1E1E1E;
        border-radius: 16px;
        padding: 24px;
        width: 100%;
        max-width: 600px;
        margin: 20px auto;
        font-family: BinancePlex, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .nav-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .left-nav {
        display: flex;
        gap: 24px;
    }

    .nav-item {
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        color: #6B7280;
        padding-bottom: 8px;
    }

    .nav-item.active {
        color: #ffffff;
    }

    .nav-item.active:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #FCD535;
    }

    .right-nav {
        color: #6B7280;
        font-size: 16px;
        cursor: pointer;
    }

    .crypto-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
    }

    .crypto-left {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .crypto-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #2C2C2C;
    }

    .crypto-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 2px;
    }

    .crypto-name {
        display: flex;
        flex-direction: column;
    }

    .symbol {
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
    }

    .name {
        color: #6B7280;
        font-size: 14px;
    }

    .crypto-right {
        text-align: right;
    }

    .price {
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .change-negative {
        color: #FF4D4D;
        font-size: 14px;
    }

    .change-positive {
        color: #00C087;
        font-size: 14px;
    }
</style>

<script>
    const popularData = [
        { 
            symbol: 'BTCUSDT', 
            displaySymbol: 'BTC', 
            name: 'Bitcoin', 
            icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
        },
        { 
            symbol: 'ETHUSDT', 
            displaySymbol: 'ETH', 
            name: 'Ethereum', 
            icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
        },
        { 
            symbol: 'BNBUSDT', 
            displaySymbol: 'BNB', 
            name: 'BNB', 
            icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
        },
        { 
            symbol: 'XRPUSDT', 
            displaySymbol: 'XRP', 
            name: 'XRP', 
            icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'
        },
        { 
            symbol: 'SOLUSDT', 
            displaySymbol: 'SOL', 
            name: 'Solana', 
            icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png'
        }
    ];

    const newListingData = [
        { symbol: 'WCTUSDT', displaySymbol: 'WCT', name: 'WalletConnect', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24452.png' },
        { symbol: 'KERNELUSDT', displaySymbol: 'KERNEL', name: 'KernelDAO', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28672.png' },
        { symbol: 'BIGTIMEUSDT', displaySymbol: 'BIGTIME', name: 'Big Time', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28307.png' },
        { symbol: 'ONDOUSDT', displaySymbol: 'ONDO', name: 'Ondo', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28980.png' }
    ];

    let currentTab = 'new'; // Default to new listing tab

    async function fetchPrices() {
        const currentData = currentTab === 'popular' ? popularData : newListingData;
        try {
            const responses = await Promise.all(
                currentData.map(crypto =>
                    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${crypto.symbol}`)
                )
            );
            const data = await Promise.all(responses.map(res => res.json()));
            updateUI(data, currentData);
        } catch (error) {
            console.error('Error fetching prices:', error);
            // Fallback to mock data for new listings if API fails
            if (currentTab === 'new') {
                const mockData = [
                    { lastPrice: '0.4857', priceChangePercent: '0.70' },
                    { lastPrice: '0.2054', priceChangePercent: '-3.61' },
                    { lastPrice: '0.07005', priceChangePercent: '-1.24' },
                    { lastPrice: '0.8819', priceChangePercent: '3.96' }
                ];
                updateUI(mockData, currentData);
            }
        }
    }

    function updateUI(data, cryptoList) {
        const cryptoListElement = document.getElementById('crypto-list');
        cryptoListElement.innerHTML = '';

        data.forEach((priceData, index) => {
            const crypto = cryptoList[index];
            const price = parseFloat(priceData.lastPrice).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 5
            });
            const change = parseFloat(priceData.priceChangePercent).toFixed(2);
            const isNegative = change < 0;

            const cryptoItem = document.createElement('div');
            cryptoItem.className = 'crypto-item';
            cryptoItem.innerHTML = `
                <div class="crypto-left">
                    <div class="crypto-icon">
                        <img src="${crypto.icon}" alt="${crypto.displaySymbol}" loading="lazy">
                    </div>
                    <div class="crypto-name">
                        <span class="symbol">${crypto.displaySymbol}</span>
                        <span class="name">${crypto.name}</span>
                    </div>
                </div>
                <div class="crypto-right">
                    <div class="price">$${price}</div>
                    <div class="change-${isNegative ? 'negative' : 'positive'}">
                        ${isNegative ? '' : '+'}${change}%
                    </div>
                </div>
            `;
            cryptoListElement.appendChild(cryptoItem);
        });
    }

    // Add click event listeners to tabs
    document.querySelectorAll('.nav-item').forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            document.querySelectorAll('.nav-item').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update current tab and fetch new data
            currentTab = tab.dataset.tab;
            fetchPrices();
        });
    });

    // Initial fetch
    fetchPrices();

    // Update every 5 seconds
    setInterval(fetchPrices, 5000);
</script>
<!-- Crypto Price Display Component End --> 