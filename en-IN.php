<?php require_once 'check-persistent-login.php'; ?>
<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <title>Document</title> -->
    <style>
        body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
    </style>
</head>
<body>
<?php
// Crypto Price Display Component
?>
<div class="main-container">
    <!-- Get Verified Section -->

    <div id="div1">
   
    <div  class="get-verified-section">
        <h1><span class="highlight">Get Verified</span> and Start Your Crypto Journey</h1>
        <div class="balance-info">
            <div class="balance-label">Your Estimated Balance <span class="info-icon">ⓘ</span></div>
            <div class="balance-amount">0.00 <span class="currency">--</span></div>
            <div class="pnl">Today's PnL: $0.00 (0.00%)</div>
        </div>
        <div class="action-buttons">
            <!-- <button   class="verify-now" onclick="window.location.href='get-verify.php'">Verify Now</button> -->
                         <button   class="verify-now" onclick="window.location.href='referal.php'">Refer Now</button>
            <button class="read-tutorial"><span class="tutorial-icon">📑</span> Read Tutorial</button>
        </div>
        <div class="notification-update">
            <div class="notification-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 5.83333V9.16666C15.8333 12.8333 13.3333 15 10 15C6.66667 15 4.16667 12.8333 4.16667 9.16666V5.83333C4.16667 2.16666 6.66667 0 10 0C13.3333 0 15.8333 2.16666 15.8333 5.83333Z" fill="#808A9D"/>
                    <path d="M18.3333 10.8333C18.3333 14.5 15.8333 16.6667 12.5 16.6667H11.6667C11.6667 17.5833 10.9167 18.3333 10 18.3333C9.08333 18.3333 8.33333 17.5833 8.33333 16.6667H7.5C4.16667 16.6667 1.66667 14.5 1.66667 10.8333" stroke="#808A9D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="notification-content">
                <span>Important Update About Identity Verification for MyCryptoBank Users</span>
                <span class="notification-date">2025-04-18</span>
            </div>
        </div>

        <div class="promo-cards">
            <a href="#" class="promo-card web3-wallet">
                <img src="./img/slider4.jpg" alt="MyCryptoBank" class="card-image">
            </a>

            <a href="#" class="promo-card referral">
                <img src="./img/slider4.jpg" alt="MyCryptoBank" class="card-image">
            </a>
        </div>

    </div>

    <!-- Right Side Content -->
    <div class="right-content">
        <!-- Crypto Price Section -->
        <div class="crypto-widget">
            <div class="header">
                <div class="tabs">
                    <button class="tab active" data-tab="popular">Popular</button>
                    <button class="tab" data-tab="new">New Listing</button>
                </div>
                <a href="./market.php" class="view-all">View More Coins ›</a>
            </div>
            <div class="crypto-list" id="cryptoList">
                <!-- Crypto items will be populated here -->
            </div>
        </div>

        <!-- News Section -->
        <div class="news-card">
            <div class="card-header">
                <h3>News</h3>
                <a href="#" class="view-all">View All News ›</a>
            </div>
            <div class="news-list">
                <div class="news-item">BNB Surpasses 580 USDT with a Narrowed 1.54% Decrease in 24 Hours</div>
                <div class="news-item">Crypto News Today: Cardano Leads Market Drop as Bitcoin Falls Below $84K; ProShares Updates Spot XRP ETF Filing</div>
                <div class="news-item">Fed Chair Powell Addresses Economic Concerns Amid Inflation and Recession Risks</div>
                <div class="news-item">Crypto News: Bitcoin Drops as Nvidia's $5.5B Charge Sparks Market Sell-Off; XRP, ADA Follow</div>
            </div>
        </div>
    </div>
    </div>


    
  

 
    <div id="window" class="mobile-section">
        <h2>Trade on the go. Anywhere, anytime.</h2>
        <div class="mobile-content">
            <div class="mobile-mockup" id="appPreview">
                <img src="./img/mob.svg" alt="Mobile App" class="preview-image" data-version="lite">
                <img src="./img/pro.svg" alt="Mobile App" class="preview-image" data-version="pro" style="display: none;">
                <img src="./img/window.png" alt="Mobile App" class="preview-image" data-version="windows" style="display: none;">
            </div>
            <div class="download-section">
                <div class="qr-section">
                    <div class="qr-code">
                        <!-- QR Code SVG -->
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="180" height="180" fill="white"/>
                            <path d="M40 40h20v20H40zM70 40h20v20H70zM100 40h20v20h-20zM40 70h20v20H40zM100 70h20v20h-20zM40 100h20v20H40zM70 100h20v20H70zM100 100h20v20h-20z" fill="black"/>
                        </svg>
                    </div>
                    <p>Scan to Download App</p>
                    <h3>iOS and Android</h3>
                </div>
                <div class="platform-list">
                    <div class="platform-item">
                        <div class="platform-icon macos">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 22C14.32 22.05 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09998 22C7.78998 22.05 6.79998 20.68 5.95998 19.47C4.24998 17 2.93998 12.45 4.69998 9.39C5.56998 7.87 7.12998 6.91 8.81998 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="white"/>
                            </svg>
                        </div>
                        <span>MacOS</span>
                    </div>
                    <div class="platform-item">
                        <div class="platform-icon windows">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 5.1L10.5 4.5V11H3V5.1ZM11.5 4.4L20.5 3.5V11H11.5V4.4ZM3 12H10.5V18.5L3 17.9V12ZM11.5 12H20.5V20.5L11.5 19.6V12Z" fill="white"/>
                            </svg>
                        </div>
                        <span>Windows</span>
                    </div>
                    <div class="platform-item">
                        <div class="platform-icon linux">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C9.24 2 7 4.24 7 7C7 8.34 7.47 9.57 8.29 10.54C6.68 11.35 5.38 12.67 4.67 14.29C4.89 14.23 5.11 14.2 5.34 14.2C6.56 14.2 7.61 14.82 8.17 15.76C8.83 15.3 9.56 15 10.34 14.89C10.41 14.31 10.88 13.85 11.47 13.77C9.95 12.89 9 11.31 9 9.5C9 7.01 10.7 5 12.81 5C14.93 5 16.62 7.01 16.62 9.5C16.62 11.31 15.67 12.89 14.15 13.77C14.74 13.85 15.21 14.31 15.28 14.89C16.06 15 16.79 15.3 17.45 15.76C18.01 14.82 19.06 14.2 20.28 14.2C20.5 14.2 20.73 14.23 20.95 14.29C20.24 12.67 18.94 11.35 17.33 10.54C18.15 9.57 18.62 8.34 18.62 7C18.62 4.24 16.38 2 13.62 2H12ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="white"/>
                            </svg>
                        </div>
                        <span>Linux</span>
                    </div>
                </div>
                <a href="#" class="more-downloads">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12L3 7H13L8 12Z" fill="#808A9D"/>
                    </svg>
                    More Download Options
                </a>
            </div>
        </div>
        <div class="version-selector">
            <span class="version active" data-version="lite">Lite</span>
            <span class="version" data-version="pro">Pro</span>
            <span class="version" data-version="windows">Windows</span>
        </div>
    </div>
    

    <!-- FAQ Section -->
    <div class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-container">
            <div class="faq-item">
                <div class="faq-question" data-faq="1">
                    <span class="question-number">1</span>
                    <span class="question-text">What is a cryptocurrency exchange?</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="faq-answer">
                    <p>A cryptocurrency exchange is a digital marketplace where users can buy, sell, and trade cryptocurrencies. These platforms match buyers with sellers and typically charge a small fee for facilitating transactions.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" data-faq="2">
                    <span class="question-number">2</span>
                    <span class="question-text">What products does MyCryptoBank provide?</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="faq-answer">
                    <p>MyCryptoBank is the world's leading cryptocurrency exchange, catering to 235 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, MyCryptoBank is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.</p>
                    <p>With MyCryptoBank users can:</p>
                    <ul>
                        <li>Trade hundreds of cryptocurrencies on <span class="highlight">Spot</span>, <span class="highlight">Margin</span>, and <span class="highlight">Futures</span> markets.</li>
                        <li>Buy and sell cryptocurrencies with <span class="highlight">MyCryptoBank P2P</span>.</li>
                        <li>Earn interest on your crypto with <span class="highlight">MyCryptoBank Earn</span>.</li>
                        <li>Buy or earn new tokens on <span class="highlight">MyCryptoBank Launchpad</span>.</li>
                        <li>Trade, stake, and loan NFTs on <span class="highlight">MyCryptoBank NFT</span> marketplace.</li>
                    </ul>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" data-faq="3">
                    <span class="question-number">3</span>
                    <span class="question-text">How to buy Bitcoin and other cryptocurrencies on MyCryptoBank</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="faq-answer">
                    <p>You can buy cryptocurrencies on MyCryptoBank using multiple payment methods including credit/debit cards, bank transfers, and P2P trading.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" data-faq="4">
                    <span class="question-number">4</span>
                    <span class="question-text">How to track cryptocurrency prices</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="faq-answer">
                    <p>Track real-time cryptocurrency prices using MyCryptoBank's price charts and market data tools.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" data-faq="5">
                    <span class="question-number">5</span>
                    <span class="question-text">How to trade cryptocurrencies on MyCryptoBank</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="faq-answer">
                    <p>Learn to trade cryptocurrencies using MyCryptoBank's advanced trading platform and various order types.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" data-faq="6">
                    <span class="question-number">6</span>
                    <span class="question-text">How to earn from crypto on MyCryptoBank</span>
                    <span class="toggle-icon">+</span>
                </div>
                <div class="faq-answer">
                    <p>Explore various ways to earn from your crypto holdings through MyCryptoBank Earn, staking, and trading.</p>
                </div>
            </div>
        </div>
    </div>

   

    <style>
    .faq-section {
      
       width: 100%;
        margin: 0 auto;
    }

    .faq-section h2 {
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 48px;
        color: #fff;
    }

    .faq-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .faq-item {
        background: #1E1E1E;
        border-radius: 8px;
        overflow: hidden;
    }

    .faq-question {
        padding: 24px;
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .faq-question:hover {
        background: #2C2C2C;
    }

    .question-number {
        color: #808A9D;
        font-size: 14px;
        min-width: 20px;
    }

    .question-text {
        flex: 1;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }

    .toggle-icon {
        color: #FCD535;
        font-size: 20px;
        font-weight: 600;
        transition: transform 0.3s ease;
    }

    .faq-question.active .toggle-icon {
        transform: rotate(45deg);
    }

    .faq-answer {
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        background: #2C2C2C;
    }

    .faq-answer.active {
        padding: 24px;
        max-height: 500px;
    }

    .faq-answer p {
        color: #E5E7EB;
        font-size: 14px;
        line-height: 1.6;
        margin: 0 0 16px 0;
    }

    .faq-answer p:last-child {
        margin-bottom: 0;
    }

    .faq-answer ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .faq-answer li {
        color: #E5E7EB;
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 8px;
        padding-left: 20px;
        position: relative;
    }

    .faq-answer li:before {
        content: "•";
        color: #FCD535;
        position: absolute;
        left: 0;
    }

    .faq-answer .highlight {
        color: #FCD535;
    }

    .start-trading-section {
        text-align: center;
        padding: 120px 0;
        background: #0B0E11;
        margin-top: 80px;
    }

    .start-trading-section h2 {
        font-size: 48px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 32px;
    }

    .trade-now-btn {
        display: inline-block;
        background: #FCD535;
        color: #000;
        padding: 16px 32px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
    }

    .trade-now-btn:hover {
        background: #FFE251;
        transform: translateY(-2px);
    }
    </style>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const currentAnswer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                
                // Close all FAQs
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });
                
                // If the clicked question wasn't active, open it
                if (!isActive) {
                    question.classList.add('active');
                    currentAnswer.classList.add('active');
                }
            });
        });
    });
    </script>

 

    <style>
    .start-trading {
        text-align: center;
        padding: 80px 0;
    }

    .start-trading h2 {
        font-size: 32px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 32px;
    }

    .trade-now-btn {
        display: inline-block;
        background: #FCD535;
        color: #000;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: background-color 0.3s ease;
    }

    .trade-now-btn:hover {
        background: #FFE251;
    }
    </style>
</div>

<style>
    .main-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        /* max-width: 1200px; */
        margin: 0 auto;
        padding: 70px;
        color: #ffffff;
        background: #121212;
        display: grid;
        grid-template-columns: 1fr 400px;
        gap: 40px;
    }

    /* Get Verified Section */
    .get-verified-section {
        grid-column: 1;
    }

    .get-verified-section h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 32px;
        line-height: 1.2;
    }

    .highlight {
        color: #FCD535;
    }

    .balance-info {
        margin-bottom: 32px;
    }

    .balance-label {
        color: #808A9D;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-size: 14px;
    }

    .info-icon {
        color: #808A9D;
        font-size: 12px;
    }

    .balance-amount {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .currency {
        color: #808A9D;
        font-size: 24px;
    }

    .pnl {
        color: #808A9D;
        font-size: 14px;
    }

    .action-buttons {
        display: flex;
        gap: 16px;
    }

    .verify-now {
        background: #FCD535;
        color: #000000;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        font-size: 14px;
    }

    .read-tutorial {
        background: transparent;
        color: #ffffff;
        border: 1px solid #2C2C2C;
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 14px;
    }

    /* Right Content */
    .right-content {
        grid-column: 2;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .crypto-widget, .news-card {
        background: #1E1E1E;
        border-radius: 16px;
        padding: 24px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }

    .tabs {
        display: flex;
        gap: 24px;
    }

    .tab {
        background: none;
        border: none;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        padding: 0;
        position: relative;
        color: #808A9D;
        transition: color 0.3s ease;
    }

    .tab.active {
        color: #fff;
    }

    .tab.active::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #FCD535;
    }

    .view-all {
        color: #808A9D;
        text-decoration: none;
        font-size: 14px;
    }

    .crypto-list {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .crypto-item {
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        align-items: center;
        gap: 12px;
    }

    .crypto-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .crypto-name-container {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .crypto-symbol {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
    }

    .crypto-label {
        font-size: 16px;
        color: #808A9D;
    }

    .price {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        text-align: right;
        margin-right: 32px;
    }

    .price-change {
        font-size: 16px;
        font-weight: 500;
        text-align: right;
        min-width: 80px;
    }

    .price-change.negative {
        color: #EA3943;
    }

    .price-change.positive {
        color: #16C784;
    }

    /* News Section */
    .news-card h3 {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
    }

    .news-list {
        display: flex;
        flex-direction: column;
    }

    .news-item {
        padding: 16px 0;
        border-bottom: 1px solid #2C2C2C;
        font-size: 14px;
        line-height: 1.5;
        color: #E5E7EB;
    }

    .news-item:last-child {
        border-bottom: none;
    }

    /* Mobile Section */
    .mobile-section {
        grid-column: 1 / -1;
        text-align: center;
        padding: 80px 0;
        margin-left: -520px;
    }

    .mobile-section h2 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 48px;
    }

    .mobile-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 80px;
        margin-bottom: 48px;
        transition: all 0.3s ease;
    }

    .mobile-content.windows-mode {
        gap: 40px;
        align-items: center;
    }

    .mobile-mockup {
        position: relative;
        width: 300px;
        height: 600px;
        background: #1E1E1E;
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    }

    /* Windows version specific styling */
    .mobile-mockup.windows-mode {
        width: 900px;
        height: 500px;
        border-radius: 12px;
        background: #121212;
    }

    .preview-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }

    .preview-image[data-version] {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        pointer-events: none;
    }

    .preview-image[data-version].active {
        opacity: 1;
        pointer-events: auto;
    }

    .download-section {
        text-align: left;
    }

    .qr-section {
        margin-bottom: 48px;
    }

    .qr-code {
        width: 180px;
        height: 180px;
        background: #ffffff;
        border-radius: 16px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .qr-code svg {
        width: 100%;
        height: 100%;
    }

    .qr-section p {
        color: #808A9D;
        margin: 0 0 8px;
        font-size: 14px;
    }

    .qr-section h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
    }

    .platform-list {
        display: flex;
        gap: 40px;
        margin-bottom: 24px;
    }

    .platform-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .platform-icon {
        width: 40px;
        height: 40px;
        background: #2C2C2C;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    .platform-icon:hover {
        background: #3C3C3C;
    }

    .platform-item span {
        color: #808A9D;
        font-size: 14px;
    }

    .more-downloads {
        color: #808A9D;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        transition: color 0.3s ease;
    }

    .more-downloads:hover {
        color: #fff;
    }

    .more-downloads svg {
        transition: fill 0.3s ease;
    }

    .more-downloads:hover svg path {
        fill: #fff;
    }

    .version-selector {
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    .version {
        color: #808A9D;
        font-size: 14px;
        cursor: pointer;
        padding-bottom: 8px;
        position: relative;
        transition: color 0.3s ease;
    }

    .version:hover {
        color: #fff;
    }

    .version.active {
        color: #fff;
    }

    .version.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #FCD535;
        transition: transform 0.3s ease;
        transform-origin: left;
    }

    .notification-update {
        margin-top: 32px;
        padding: 16px;
        background: #1E1E1E;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .notification-update:hover {
        background: #2C2C2C;
    }

    .notification-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .notification-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .notification-content span {
        color: #E5E7EB;
        font-size: 14px;
        line-height: 1.4;
    }

    .notification-date {
        color: #808A9D !important;
        font-size: 12px !important;
    }

    .promo-cards {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }

    .promo-card {
        position: relative;
        aspect-ratio: 16/9;
        border-radius: 16px;
        overflow: hidden;
        display: block;
        text-decoration: none;
        transition: transform 0.3s ease;
    }

    .promo-card:hover {
        transform: translateY(-2px);
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .promo-card:hover .card-image {
        transform: scale(1.05);
    }

    .promo-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
    }

    .promo-header img {
        height: 20px;
    }

    .promo-header span {
        color: #808A9D;
        font-size: 12px;
        font-weight: 600;
    }

    .promo-content {
        position: relative;
        z-index: 1;
    }

    .promo-content h3 {
        font-size: 28px;
        font-weight: 700;
        margin: 0 0 8px 0;
        color: #fff;
    }

    .promo-content h4 {
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 8px 0;
        color: #fff;
    }

    .promo-content p {
        font-size: 14px;
        color: #FCD535;
        margin: 0 0 16px 0;
    }

    .token-list {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .token-list img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .promo-graphic {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 180px;
        pointer-events: none;
    }

    .competition-date {
        font-size: 12px;
        color: #808A9D;
        margin-top: 16px;
    }

    .referral .promo-content h3 {
        font-size: 24px;
        margin-bottom: 16px;
    }

    .referral .promo-content p {
        color: #E5E7EB;
        margin: 0;
        line-height: 1.4;
    }

    .promo-card.web3-wallet {
        background: #0B0E11;
        overflow: hidden;
        padding: 20px;
        position: relative;
    }

    .trading-image {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 65%;
        overflow: hidden;
    }

    .chart-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        transition: transform 0.3s ease;
    }

    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: linear-gradient(to bottom, #0B0E11 0%, rgba(11,14,17,0) 30%);
        pointer-events: none;
    }

    .promo-card.web3-wallet:hover .chart-image {
        transform: scale(1.05);
    }

    .promo-card.web3-wallet .promo-content {
        position: relative;
        z-index: 2;
    }

    .promo-card.web3-wallet .promo-content h3 {
        font-size: 24px;
        margin-bottom: 8px;
        background: linear-gradient(90deg, #FCD535, #F0B90B);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .promo-card.web3-wallet .promo-content h4 {
        color: #fff;
        margin-bottom: 4px;
    }

    .promo-card.web3-wallet .promo-content p {
        color: #808A9D;
        font-size: 14px;
    }
</style>

<script>
const popularData = [
    {
        symbol: 'BTCUSDT',
        name: 'Bitcoin',
        displaySymbol: 'BTC',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
    },
    {
        symbol: 'ETHUSDT',
        name: 'Ethereum',
        displaySymbol: 'ETH',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
    },
    {
        symbol: 'BNBUSDT',
        name: 'BNB',
        displaySymbol: 'BNB',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
    },
    {
        symbol: 'XRPUSDT',
        name: 'XRP',
        displaySymbol: 'XRP',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'
    },
    {
        symbol: 'SOLUSDT',
        name: 'Solana',
        displaySymbol: 'SOL',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png'
    }
];

const newListingData = [
    {
        symbol: 'WCTUSDT',
        name: 'WalletConnect',
        displaySymbol: 'WCT',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24452.png'
    },
    {
        symbol: 'KERNELUSDT',
        name: 'KernelDAO',
        displaySymbol: 'KERNEL',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28672.png'
    },
    {
        symbol: 'BIGTIMEUSDT',
        name: 'Big Time',
        displaySymbol: 'BIGTIME',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28307.png'
    },
    {
        symbol: 'ONDOUSDT',
        name: 'Ondo',
        displaySymbol: 'ONDO',
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28980.png'
    }
];

let currentTab = 'popular'; // Default to popular tab

// Initialize the crypto list
function initializeCryptoList(tabData) {
    const cryptoList = document.getElementById('cryptoList');
    cryptoList.innerHTML = ''; // Clear existing items
    
    tabData.forEach(crypto => {
        const cryptoItem = document.createElement('div');
        cryptoItem.className = 'crypto-item';
        cryptoItem.innerHTML = `
            <img src="${crypto.icon}" alt="${crypto.displaySymbol}" class="crypto-icon">
            <div class="crypto-name-container">
                <span class="crypto-symbol">${crypto.displaySymbol}</span>
                <span class="crypto-label">${crypto.name}</span>
            </div>
            <div class="price" data-symbol="${crypto.symbol}">$0.00</div>
            <div class="price-change negative" data-symbol="${crypto.symbol}">0.00%</div>
        `;
        cryptoList.appendChild(cryptoItem);
    });
}

// Format price with appropriate decimal places
function formatPrice(price) {
    const numPrice = parseFloat(price);
    if (numPrice >= 1000) {
        return numPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (numPrice >= 1) {
        return numPrice.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    } else {
        return numPrice.toLocaleString('en-US', { minimumFractionDigits: 5, maximumFractionDigits: 5 });
    }
}

// Update prices from MyCryptoBank API
async function updatePrices() {
    const currentData = currentTab === 'popular' ? popularData : newListingData;
    
    try {
        const responses = await Promise.all(
            currentData.map(crypto =>
                fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${crypto.symbol}`)
            )
        );
        
        const data = await Promise.all(responses.map(res => res.json()));
        
        data.forEach((priceData, index) => {
            const symbol = currentData[index].symbol;
            const priceElement = document.querySelector(`.price[data-symbol="${symbol}"]`);
            const changeElement = document.querySelector(`.price-change[data-symbol="${symbol}"]`);
            
            if (priceElement && changeElement) {
                const price = formatPrice(priceData.lastPrice);
                const change = parseFloat(priceData.priceChangePercent).toFixed(2);
                const isNegative = parseFloat(change) < 0;
                
                priceElement.textContent = `$${price}`;
                changeElement.textContent = `${isNegative ? '' : '+'}${change}%`;
                changeElement.className = `price-change ${isNegative ? 'negative' : 'positive'}`;
            }
        });
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

// Initialize and start updates
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update current tab and refresh data
            currentTab = tab.dataset.tab;
            initializeCryptoList(currentTab === 'popular' ? popularData : newListingData);
            updatePrices();
        });
    });

    // Initial setup with Popular tab
    initializeCryptoList(popularData);
    updatePrices();
    setInterval(updatePrices, 5000); // Update every 5 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const versionButtons = document.querySelectorAll('.version');
    const previewImages = document.querySelectorAll('.preview-image');
    const mobileContent = document.querySelector('.mobile-content');
    const mockupContainer = document.querySelector('.mobile-mockup');
    
    function updateVersion(version) {
        // Update buttons
        versionButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.version === version);
        });
        
        // Update container classes for Windows mode
        mobileContent.classList.toggle('windows-mode', version === 'windows');
        mockupContainer.classList.toggle('windows-mode', version === 'windows');
        
        // Update images
        previewImages.forEach(img => {
            if (img.dataset.version === version) {
                img.style.display = 'block';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 50);
            } else {
                img.style.opacity = '0';
                setTimeout(() => {
                    img.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add click event listeners to version buttons
    versionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const version = button.dataset.version;
            updateVersion(version);
        });
    });

    // Initialize with default version (lite)
    updateVersion('lite');
});
</script> 

<style>
     #div1{
        display: flex;
        gap: 100px;
     }

     .main-container{
        padding-top: 120px;
     }

     .get-verified-section{
        width:max-content ;
     }

     .crypto-widget, .news-card{
        width: fit-content;
     }

    @media (max-width: 768px) {
        #div1{
            display: block;
        }
    

        .main-container {
            padding: 10px;
        }

        .news-card{
            width:50%;
        }

        .mobile-content{
            display: grid;
            margin-left: -220px;
        }

        .version-selector{
            margin-left: -150px;
        }

        .mobile-section h2, .faq-section h2{
            font-size: 20px;
            margin-left: -113px;
            width: 100%;
        }

        .faq-answer.active{
            padding: 8px;
            width: 55%;
        }

        .faq-question{
            padding: 10px;
            width: 55%;
        }

        .main-container{
        padding-top: 120px;
     }

      
    }
</style>
<?php include "footer.php";?>
</body>
</html>