<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #1a1a1a;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            padding-top: 120px;
            display: flex;
            flex-direction: column;  /* Changed to column */
            align-items: center;
            min-height: 100vh;
        }

        .heading {
            text-align: center;
            font-size: 38px;  /* Increased size */
            font-weight: bold;
            margin-bottom: 40px;  /* Increased margin */
            color: #ffffff;  /* Changed from #ffd700 to #ffffff */
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .calculator {
            background: #2d2d2d;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 400px;
        }

        .input-group {
            margin-bottom: 20px;
        }

        select, input {
            width: 100%;
            padding: 12px;
            border: none;
            background: #404040;
            color: white;
            border-radius: 10px;
            margin-top: 8px;
            font-size: 16px;
        }

        input:focus, select:focus {
            outline: none;
            box-shadow: 0 0 0 2px #666;
        }

        .swap-btn {
            width: 100%;
            padding: 12px;
            background: #4CAF50;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            margin: 10px 0;
            transition: transform 0.2s;
        }

        .swap-btn:hover {
            transform: translateY(-2px);
            background: #45a049;
        }

        .rate-info {
            margin-top: 20px;
            padding: 15px;
            background: #404040;
            border-radius: 10px;
            font-size: 14px;
            text-align: center;
        }

        .error {
            color: #ff4444;
            text-align: center;
            margin-top: 10px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #aaa;
        }

        .loading {
            text-align: center;
            color: #666;
        }

        .crypto-list {
            width: 100%;
            max-width: 1200px;
            margin: 60px auto 20px;
            padding: 0 20px;
        }

        .crypto-heading {
            color: #ffffff;
            font-size: 24px;
            margin-bottom: 10px;
            text-align: center;
        }

        .crypto-subheading {
            color: #808080;
            text-align: center;
            margin-bottom: 30px;
            font-size: 14px;
        }

        .crypto-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .crypto-item {
            display: flex;
            align-items: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            text-decoration: none;
            color: #ffffff;
            transition: background 0.3s;
        }

        .crypto-item:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .crypto-item img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }

        .crypto-item span {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .crypto-grid {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            }
        }
    </style>
</head>
<body >
    <h1 class="heading">MyCryptoBank Convert USDT to BTC</h1>
    
    <div class="calculator">
        <div class="input-group">
            <label>From:</label>
            <select id="fromCurrency">
                <option value="USDT">Tether (USDT)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="XRP">Ripple (XRP)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="DOGE">Dogecoin (DOGE)</option>
                <option value="SOL">Solana (SOL)</option>
            </select>
            <input type="number" id="fromAmount" placeholder="Enter amount" step="any">
        </div>

        <button class="swap-btn" id="swapBtn">🔄 Swap</button>

        <div class="input-group">
            <label>To:</label>
            <select id="toCurrency">
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="USDT">Tether (USDT)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="BNB">Binance Coin (BNB)</option>
                <option value="XRP">Ripple (XRP)</option>
                <option value="ADA">Cardano (ADA)</option>
                <option value="DOGE">Dogecoin (DOGE)</option>
                <option value="SOL">Solana (SOL)</option>
            </select>
            <input type="number" id="toAmount" readonly placeholder="Converted amount">
        </div>

        <div class="rate-info" id="rateInfo">
            Connecting to live rates...
        </div>
    </div>

    <div class="crypto-list">
        <h2 class="crypto-heading">Convert USDT (TetherUS) to other currencies</h2>
        <p class="crypto-subheading">Swap your TetherUS to other currencies easily in one go!</p>
        
        <div class="crypto-grid">
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png" alt="Bitcoin">
                <span>Bitcoin</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png" alt="Ethereum">
                <span>Ethereum</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png" alt="XRP">
                <span>XRP</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/9576/small/BUSD.png" alt="BUSD">
                <span>BUSD</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png" alt="Euro">
                <span>Euro</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png" alt="BNB">
                <span>BNB</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png" alt="USDC">
                <span>USDC</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/325/small/Tether.png" alt="TetherUS">
                <span>TetherUS</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/2/small/litecoin.png" alt="Litecoin">
                <span>Litecoin</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/4128/small/solana.png" alt="Solana">
                <span>Solana</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/5/small/dogecoin.png" alt="Dogecoin">
                <span>Dogecoin</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/738/small/tron-logo.png" alt="TRON">
                <span>TRON</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png" alt="Polygon">
                <span>Polygon</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/975/small/cardano.png" alt="Cardano">
                <span>Cardano</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/11939/small/shiba.png" alt="SHIBA INU">
                <span>SHIBA INU</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/692/small/worldcoin.png" alt="Worldcoin">
                <span>Worldcoin</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/100/small/trueusd.png" alt="TrueUSD">
                <span>TrueUSD</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/2117/small/stellar-lumens.png" alt="Stellar Lumens">
                <span>Stellar Lumens</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png" alt="Bitcoin Cash">
                <span>Bitcoin Cash</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12171/small/aave-icon.png" alt="Pepe">
                <span>Pepe</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/4324/small/U85xTl2.png" alt="Arbitrum">
                <span>Arbitrum</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12409/small/chainlink-new-logo.png" alt="ChainLink">
                <span>ChainLink</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png" alt="Polkadot">
                <span>Polkadot</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12645/small/AAVE.png" alt="Auction">
                <span>Auction</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12559/small/avalanche-logo.png" alt="Avalanche">
                <span>Avalanche</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/10775/small/COMP.png" alt="Compound">
                <span>Compound</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12436/small/terra-luna-classic.png" alt="Terra Classic">
                <span>Terra Classic</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12493/small/GALA-COINGECKO.png" alt="Gala">
                <span>Gala</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/13469/small/1inch-token.png" alt="Injective">
                <span>Injective</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/4001/small/Fantom.png" alt="Fantom">
                <span>Fantom</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/9545/small/Brazilian_Digital_Token.png" alt="Brazilian Real">
                <span>Brazilian Real</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/15223/small/logo_200x200.png" alt="Arkham">
                <span>Arkham</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/14483/small/token_OPT_black.png" alt="Optimism">
                <span>Optimism</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/279/small/cosmos_hub.png" alt="Cosmos">
                <span>Cosmos</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12186/small/yield_guild_games_logo.jpg" alt="Yield Guild Games">
                <span>Yield Guild Games</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/4380/small/download.png" alt="Algorand">
                <span>Algorand</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/3688/small/hbar.png" alt="Hedera Hashgraph">
                <span>Hedera Hashgraph</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg" alt="ApeCoin">
                <span>ApeCoin</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/28205/small/SingularityNET.png" alt="SingularityNET Token">
                <span>SingularityNET Token</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12409/small/adventure-gold-logo.png" alt="Adventure Gold">
                <span>Adventure Gold</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/4001/small/conflux.png" alt="Conflux Network">
                <span>Conflux Network</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/13397/small/1inch.png" alt="1inch">
                <span>1inch</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12559/small/amp-200x200.png" alt="AMP">
                <span>AMP</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/12645/small/aptos_logo.png" alt="Aptos">
                <span>Aptos</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/25057/small/verge-symbol-black.png" alt="Verge">
                <span>Verge</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/1167/small/VeChain-Logo-768x725.png" alt="VeChain">
                <span>VeChain</span>
            </a>
            <a href="#" class="crypto-item">
                <img src="https://assets.coingecko.com/coins/images/1120/small/filecoin.png" alt="Filecoin">
                <span>Filecoin</span>
            </a>
        </div>
    </div>

    <script>
        class CryptoCalculator {
            constructor() {
                this.rates = {};
                this.socket = null;
                this.setupElements();
                this.setupEventListeners();
                this.connectWebSocket();
            }

            setupElements() {
                this.fromSelect = document.getElementById('fromCurrency');
                this.toSelect = document.getElementById('toCurrency');
                this.fromAmount = document.getElementById('fromAmount');
                this.toAmount = document.getElementById('toAmount');
                this.rateInfo = document.getElementById('rateInfo');
                this.swapBtn = document.getElementById('swapBtn');
            }

            setupEventListeners() {
                this.fromAmount.addEventListener('input', () => this.convert());
                this.fromSelect.addEventListener('change', () => this.convert());
                this.toSelect.addEventListener('change', () => this.convert());
                this.swapBtn.addEventListener('click', () => this.swapCurrencies());
            }

            connectWebSocket() {
                const pairs = [
                    'btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt',
                    'adausdt', 'dogeusdt', 'solusdt'
                ];

                this.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${pairs.join('@ticker/')}@ticker`);

                this.socket.onopen = () => {
                    this.rateInfo.textContent = 'Connected to live rates...';
                };

                this.socket.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.s) {  // Check if it's a ticker message
                        const symbol = data.s.replace('USDT', '');
                        this.rates[symbol] = parseFloat(data.c);
                        this.convert();
                    }
                };

                this.socket.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    this.rateInfo.textContent = 'Error connecting to rates. Retrying...';
                };

                this.socket.onclose = () => {
                    this.rateInfo.textContent = 'Connection lost. Reconnecting...';
                    setTimeout(() => this.connectWebSocket(), 5000);
                };
            }

            updateRate(data) {
                if (data.s) {  // Check if it's a ticker message
                    const symbol = data.s.replace('USDT', '');
                    this.rates[symbol] = parseFloat(data.c);
                    this.convert();
                }
            }

            convert() {
                const fromCurrency = this.fromSelect.value;
                const toCurrency = this.toSelect.value;
                const amount = parseFloat(this.fromAmount.value);

                if (isNaN(amount)) {
                    this.toAmount.value = '';
                    return;
                }

                let rate;
                if (fromCurrency === toCurrency) {
                    rate = 1;
                } else if (fromCurrency === 'USDT') {
                    rate = 1 / (this.rates[toCurrency] || 0);
                } else if (toCurrency === 'USDT') {
                    rate = this.rates[fromCurrency] || 0;
                } else {
                    const fromRate = this.rates[fromCurrency] || 0;
                    const toRate = this.rates[toCurrency] || 0;
                    rate = fromRate / toRate;
                }

                if (rate && !isNaN(rate)) {
                    const result = amount * rate;
                    this.toAmount.value = result.toFixed(8);
                    this.updateRateInfo(fromCurrency, toCurrency, rate);
                } else {
                    this.rateInfo.textContent = 'Waiting for rates...';
                }
            }

            updateRateInfo(from, to, rate) {
                const time = new Date().toLocaleTimeString();
                this.rateInfo.textContent = `1 ${from} = ${rate.toFixed(8)} ${to}
                    Last updated: ${time}`;
            }

            swapCurrencies() {
                const tempValue = this.fromSelect.value;
                this.fromSelect.value = this.toSelect.value;
                this.toSelect.value = tempValue;
                this.convert();
            }
        }

        // Initialize calculator when page loads
        window.addEventListener('load', () => {
            new CryptoCalculator();
        });
    </script>
    <?php include 'footer.php'; ?>
</body>
</html>