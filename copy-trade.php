<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
            background-color: #0b0e11;
            color: #eaecef;
            min-height: 100vh;
            padding: 16px 24px;
            
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
            flex-wrap: wrap;
            gap: 16px;
        }

        .nav-tabs {
            display: flex;
            gap: 32px;
            align-items: center;
            flex-wrap: wrap;
        }

        .tab {
            font-size: 16px;
            cursor: pointer;
            position: relative;
            padding: 0 4px 8px 4px;
        }

        .tab.active {
            color: #fcd535;
            font-weight: 500;
        }

        .tab.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #fcd535;
            border-radius: 2px;
        }

        .tab.inactive {
            color: #848e9c;
        }

        .new-tag {
            background-color: #fcd535;
            color: #0b0e11;
            padding: 1px 4px;
            border-radius: 2px;
            font-size: 12px;
            margin-left: 4px;
            font-weight: 500;
        }

        .watch-tutorial {
            color: #848e9c;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }

        .promo-banner {
            background-color: rgba(71, 77, 55, 0.9);
            border-radius: 8px;
            padding: 16px 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
            flex-wrap: wrap;
            gap: 16px;
        }

        .promo-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        .trader-icon {
            width: 32px;
            height: 32px;
            background-color: #fcd535;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .yellow-dot {
            width: 8px;
            height: 8px;
            background-color: #fcd535;
            border-radius: 50%;
            margin-right: 8px;
        }

        .apply-btn {
            background-color: #fcd535;
            color: #0b0e11;
            padding: 8px 24px;
            border-radius: 4px;
            border: none;
            font-weight: 500;
            cursor: pointer;
        }

        .main-content {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        .balance-section {
            flex: 1;
            min-width: 300px;
        }

        .balance-title {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #848e9c;
            margin-bottom: 8px;
        }

        .balance-amount {
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 8px;
        }

        .pnl {
            color: #848e9c;
            margin-bottom: 16px;
        }

        .copy-btn {
            background-color: #fcd535;
            color: #0b0e11;
            padding: 8px 24px;
            border-radius: 4px;
            border: none;
            font-weight: 500;
            cursor: pointer;
        }

        .growth-plan {
            background-color: #1e2329;
            border-radius: 8px;
            padding: 24px;
            width: 380px;
            min-width: 300px;
        }

        .growth-plan-title {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 8px;
        }

        .growth-plan-subtitle {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .dashes {
            color: #848e9c;
            letter-spacing: 4px;
        }

        .news-banner {
            margin-top: 24px;
            color: #848e9c;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            word-break: break-word;
        }

        .speaker-icon {
            font-size: 20px;
        }

        /* Media Queries for Responsive Design */
        @media screen and (max-width: 768px) {
            body {
                padding: 12px 16px;
            }

            .header {
                flex-direction: column;
                align-items: flex-start;
            }

            .nav-tabs {
                gap: 16px;
            }

            .promo-banner {
                padding: 12px 16px;
            }

            .promo-left {
                font-size: 14px;
            }

            .balance-amount {
                font-size: 24px;
            }

            .growth-plan {
                width: 100%;
            }

            .apply-btn {
                width: 100%;
            }
        }

        @media screen and (max-width: 480px) {
            .nav-tabs {
                width: 100%;
                justify-content: space-between;
            }

            .tab {
                font-size: 14px;
            }

            .balance-title {
                font-size: 14px;
            }

            .balance-amount {
                font-size: 20px;
            }

            .growth-plan-title {
                font-size: 20px;
            }

            .growth-plan-subtitle {
                font-size: 24px;
            }

            .news-banner {
                font-size: 14px;
            }
        }
    </style>
   
</head>
<body style="padding-top: 120px;">
    <div class="header">
        <div class="nav-tabs">
            <div class="tab active">Futures</div>
            <div class="tab inactive">Spot<span class="new-tag">new</span></div>
        </div>
        <div class="watch-tutorial">
            <span>▶</span>
            Watch Tutorial
        </div>
    </div>

    <div class="promo-banner">
        <div class="promo-left">
            <div class="yellow-dot"></div>
            <div class="trader-icon">👨‍💼</div>
            <div>Be a Futures Lead Trader, enjoy up to 30% profit share + 10% commission rebate!</div>
        </div>
        <button class="apply-btn">Apply Now</button>
    </div>

    <div class="main-content">
        <div class="balance-section">
            <div class="balance-title">
                Total Margin Balance
                <span>👁️</span>
            </div>
            <div class="balance-amount">0.00 USDT</div>
            <div class="pnl">Total Unrealized PnL --</div>
            <button class="copy-btn">Copy Overview</button>
        </div>

        <div class="growth-plan">
            <div class="growth-plan-title">Copy Trading Lead Trader</div>
            <div class="growth-plan-subtitle">Growth Plan</div>
            <div class="dashes">- - -</div>
        </div>
    </div>

    <div class="news-banner">
        <span class="speaker-icon">🔊</span>
        MyCryptoBank Futures Copy Trading Adds New USD©-M Perpetual Contracts (2025-01-21)
        <span>›</span>
    </div>

    <br/><br/>
    <?php include "copy-trade-api.php"; ?>

    <script>
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    document.querySelector('.tab.active').classList.remove('active');
                    document.querySelector('.tab.active').classList.add('inactive');
                    this.classList.remove('inactive');
                    this.classList.add('active');
                }
            });
        });
    </script>
    <?php include "footer.php"; ?>
</body>
</html>
