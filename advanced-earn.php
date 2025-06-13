<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>   
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        .advanced-earn-section {
            background-color: #1a1a1a;
            color: white;
            padding: 40px 20px;
            min-height: 80vh;
            display: flex;
            align-items: center;
        }

        .advanced-earn-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            gap: 40px;
        }

        .advanced-earn-content {
            flex: 1;
            max-width: 600px;
        }

        .advanced-earn-content h1 {
            font-size: clamp(32px, 5vw, 48px);
            margin-bottom: 20px;
            font-weight: 600;
            line-height: 1.2;
            color: white;
        }

        .advanced-earn-content p {
            font-size: clamp(18px, 2.5vw, 24px);
            line-height: 1.5;
            color: #ffffff;
            margin-bottom: 20px;
        }

        .advanced-earn-disclaimer {
            font-size: clamp(12px, 1.5vw, 14px);
            color: #888;
        }

        .advanced-earn-disclaimer a {
            color: #ffd700;
            text-decoration: none;
        }

        .advanced-earn-disclaimer a:hover {
            text-decoration: underline;
        }

        .advanced-earn-image {
            flex: 1;
            max-width: 500px;
        }

        .advanced-earn-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        .advanced-earn-what-is {
            margin-top: 40px;
        }

        .advanced-earn-what-is h2 {
            color: #ffd700;
            font-size: clamp(20px, 2.5vw, 24px);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .advanced-earn-what-is h2::after {
            content: "?";
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid #ffd700;
            flex-shrink: 0;
        }

        /* Tablet Styles */
        @media screen and (max-width: 992px) {
            .advanced-earn-container {
                gap: 30px;
            }
            
            .advanced-earn-section {
                padding: 30px 20px;
            }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
            .advanced-earn-container {
                flex-direction: column;
                text-align: center;
            }

            .advanced-earn-content {
                order: 1;
                padding-right: 0;
            }

            .advanced-earn-image {
                order: 0;
                margin-bottom: 30px;
                max-width: 400px;
            }

            .advanced-earn-what-is h2 {
                justify-content: center;
            }

            .advanced-earn-section {
                padding: 20px 15px;
            }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
            .advanced-earn-container {
                gap: 20px;
            }

            .advanced-earn-image {
                margin-bottom: 20px;
            }

            .advanced-earn-section {
                padding: 15px 10px;
            }
        }
    </style>
</head>
<body>
    <section class="advanced-earn-section">
        <div class="advanced-earn-container">
            <div class="advanced-earn-content">
                <h1>Advanced Earn</h1>
                <p>Benefit from our innovative products that are designed to help navigate the various market scenarios.</p>
                <p class="advanced-earn-disclaimer">*Advanced Earn products involve higher risks. See our <a href="#">FAQ</a> for more information.</p>
                <!-- <div class="advanced-earn-what-is">
                    <h2>What is Advanced Earn</h2>
                </div> -->
            </div>
            <div class="advanced-earn-image">
                <img src="./img/earn.svg" alt="Advanced Earn Graphic">
            </div>
        </div>
    </section>

    <?php include 'advance-earn-api.php'; ?>
    
    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-list">
                <div class="faq-item">
                    <button class="faq-question">
                        <span>What is Advanced Earn?</span>
                        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <p>Advanced Earn products are designed to offer users the opportunity to potentially earn higher rewards through diversified products. These products, including Dual Investment, Smart Arbitrage, and On-Chain Yields, enable users to benefit from their market insights by leveraging different financial strategies. Tailored for users seeking to maximize their earnings while effectively managing corresponding risks, these products provide an attractive APR and the potential for high yield.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>What is Dual Investment?</span>
                        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <p>Dual Investment is a high yield product that allows you an opportunity to buy low or sell high cryptocurrency at your desired price and date in the future, while earning rewards no matter which direction the market goes.</p>
                        <p>There are two types of Dual Investment products: "Buy Low" and "Sell High". Buy Low gives you a chance to buy crypto at the target price on a future date while earning rewards regardless of the market direction. You can invest with BTC, ETH, USDC, and other stablecoins to achieve high yields.</p>
                        <p>Sell High gives you a chance to sell crypto at the target price on a future date while earning rewards regardless of the market direction. You are able to subscribe with BTC, ETH, BNB, SOL and other altcoins.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>What is Smart Arbitrage?</span>
                        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <p>Smart Arbitrage is an innovative tool designed for traders to engage in arbitrage strategies between perpetual futures contracts and their spot equivalents. It leverages the funding rate mechanism by hedging their futures position with a spot position to collect the funding fee.</p>
                        <p>In Smart Arbitrage, the product builds a strategic combination of futures and spot. It involves futures trading that needs to comply with futures trading rules.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>What are On-chain Yields?</span>
                        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <p>On-chain Yields allows users to easily participate in various on-chain protocols and earn rewards, such as tokens, points, and other rewards, directly through their MyCryptoBank account. With On-chain Yields, users can explore high-yield opportunities within MyCryptoBank without performing complex on-chain setups or operations.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>Where can I find more information?</span>
                        <svg class="arrow" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <p>For more information, please refer to our articles in the Support Center.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <style>
        .faq-section {
            background-color: #1a1a1a;
            padding: 40px 20px;
            color: white;
        }

        .faq-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .faq-container h2 {
            font-size: 32px;
            margin-bottom: 40px;
            color: white;
        }

        .faq-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .faq-item {
            border-bottom: 1px solid #333;
        }

        .faq-question {
            width: 100%;
            padding: 20px;
            background: none;
            border: none;
            text-align: left;
            color: white;
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .faq-question span {
            font-weight: 700;
        }

        .faq-question:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }

        .arrow {
            transition: transform 0.3s ease;
            fill: white;
        }

        .faq-item.active .arrow {
            transform: rotate(180deg);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            padding: 0 20px;
        }

        .faq-item.active .faq-answer {
            max-height: 1000px;
            padding-bottom: 20px;
        }

        .faq-answer p {
            margin-bottom: 16px;
            line-height: 1.6;
            color: #ccc;
        }

        .faq-answer p:last-child {
            margin-bottom: 0;
        }

        /* Mobile Responsive */
        @media screen and (max-width: 768px) {
            .faq-section {
                padding: 30px 15px;
            }

            .faq-container h2 {
                font-size: 24px;
                margin-bottom: 30px;
            }

            .faq-question {
                font-size: 16px;
                padding: 15px;
            }

            .faq-answer {
                padding: 0 15px;
            }
        }
    </style>

    <script>
        function initializeFAQ() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                // Remove existing event listener to prevent duplicates
                question.removeEventListener('click', handleFAQClick);
                // Add new event listener
                question.addEventListener('click', handleFAQClick);
            });
        }

        function handleFAQClick(event) {
            const currentItem = event.currentTarget.parentElement;
            const faqItems = document.querySelectorAll('.faq-item');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== currentItem && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            currentItem.classList.toggle('active');
        }

        // Initialize FAQ on page load
        document.addEventListener('DOMContentLoaded', initializeFAQ);

        // Re-initialize FAQ when content changes
        const targetNode = document.querySelector('.faq-list');
        if (targetNode) {
            const observer = new MutationObserver(function(mutations) {
                initializeFAQ();
            });

            observer.observe(targetNode, {
                childList: true,
                subtree: true
            });
        }
    </script>
    <?php include 'footer.php'; ?>
</body>
</html>
