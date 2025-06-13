<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background: #181A20;
            color: #fff;
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px 0 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }
        .left-section {
            flex: 1.2;
        }
        .right-section {
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }
        .right-section .promo-img {
            width: 480px;
            height: 260px;
            background: #111318;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 16px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        .right-section .promo-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .main-title {
            font-size: 64px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 28px;
            color: #b7bdc6;
            margin-bottom: 40px;
        }
        .login-btn {
            background: #fcd535;
            color: #181A20;
            font-size: 24px;
            font-weight: 600;
            border: none;
            border-radius: 12px;
            padding: 18px 60px;
            cursor: pointer;
            margin-bottom: 60px;
            transition: background 0.2s;
        }
        .login-btn:hover {
            background: #ffe580;
        }
        .cards-row {
            display: flex;
            flex-direction: row;
            gap: 24px;
            margin-top: 30px;
        }
        .card {
            background: #23262f;
            border-radius: 18px;
            padding: 28px 32px;
            min-width: 220px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .card .icon {
            width: 40px;
            height: 40px;
            margin-bottom: 18px;
        }
        .card-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .card-desc {
            font-size: 15px;
            color: #b7bdc6;
            margin-bottom: 18px;
        }
        .apr-label {
            font-size: 14px;
            color: #b7bdc6;
        }
        .apr-value {
            font-size: 28px;
            font-weight: bold;
            color: #1ed760;
            margin-top: 2px;
        }
        @media (max-width: 900px) {
            .container {
                flex-direction: column;
                align-items: stretch;
            }
            .right-section {
                justify-content: center;
                margin-top: 30px;
            }
            .right-section .promo-img {
                width: 100%;
                max-width: 400px;
            }
            .cards-row {
                flex-direction: column;
                gap: 18px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="left-section">
            <div class="main-title">Binance Earn</div>
            <div class="subtitle">Smart Earning Starts Here – 300+ Crypto Assets Supported</div>
            <button class="login-btn">Log In</button>
            <div class="cards-row">
                <div class="card">
                    <img class="icon" src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USDC">
                    <div class="card-title">USDC</div>
                    <div class="card-desc">Simple Earn | Flexible</div>
                    <div class="apr-label">APR</div>
                    <div class="apr-value">10.57%</div>
                </div>
                <div class="card">
                    <img class="icon" src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="USDT">
                    <div class="card-title">USDT</div>
                    <div class="card-desc">Simple Earn | Flexible</div>
                    <div class="apr-label">APR</div>
                    <div class="apr-value">6.72%</div>
                </div>
                <div class="card">
                    <img class="icon" src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH">
                    <div class="card-title">ETH</div>
                    <div class="card-desc">Simple Earn | Flexible</div>
                    <div class="apr-label">APR</div>
                    <div class="apr-value">3.33%</div>
                </div>
                <div class="card">
                    <img class="icon" src="https://cryptologos.cc/logos/axelar-axl-logo.png" alt="AXL">
                    <div class="card-title">AXL</div>
                    <div class="card-desc">Simple Earn | Flexible/Locked</div>
                    <div class="apr-label">APR</div>
                    <div class="apr-value">1.45%~20%</div>
                </div>
            </div>
        </div>
        <div class="right-section">
            <div class="promo-img">
                <!-- Yahan apni image ka path lagayein -->
                <img src="your-image-path.png" alt="Promo Image">
            </div>
        </div>
    </div>
</body>
</html>
