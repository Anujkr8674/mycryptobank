<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binance Megadrop</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        body {
            background-color: #0B0E11;
            color: white;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
        }

        .left-section {
            flex: 1;
            min-width: 300px;
            padding-right: 2rem;
            padding-top: 2rem;
        }

        .right-section {
            flex: 1;
            min-width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .brand {
            color: #F0B90B;
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-weight: 600;
        }

        .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: #848E9C;
            margin-bottom: 2rem;
        }

        .get-started-btn {
            background-color: #F0B90B;
            color: #000;
            border: none;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .get-started-btn:hover {
            background-color: #e6b00a;
        }

        .phone-mockup {
            max-width: 100%;
            height: auto;
        }

        .how-to-participate {
            width: 100%;
            padding: 4rem 0;
        }

        .how-to-participate h2 {
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-align: left;
            padding-left: 1rem;
        }

        .steps-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            padding: 1rem;
            margin-top: 40px;
        }

        .step-card {
            background: #1E2329;
            border-radius: 24px;
            padding: 32px;
            min-height: 240px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: transform 0.3s ease;
        }

        .step-card:hover {
            transform: translateY(-5px);
        }

        .step-icon {
            margin-bottom: 24px;
        }

        .step-icon img {
            
            height: 150px;
            object-fit: contain;
        }

        .step-content {
            flex: 1;
        }

        .step-card h3 {
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 12px;
        }

        .step-card p {
            color: #848E9C;
            line-height: 1.5;
            font-size: 16px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .container {
                padding: 1rem;
            }

            .left-section, .right-section {
                padding: 1rem;
            }

            .steps-container {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.25rem;
            }

            .how-to-participate h2 {
                font-size: 2rem;
                text-align: center;
            }

            .steps-container {
                grid-template-columns: 1fr;
            }

            .left-section, .right-section {
                flex: 100%;
                padding: 1rem;
                text-align: center;
            }

            .step-card {
                min-height: auto;
                padding: 24px;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
            }

            .get-started-btn {
                width: 100%;
            }

            .step-card {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }

        /* FAQ Section Styles */
        .faq-section {
            width: 100%;
            padding: 4rem 0;
        }

        .faq-container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .faq-item {
            background: #1E2329;
            border-radius: 8px;
            margin-bottom: 16px;
            overflow: hidden;
        }

        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px;
            cursor: pointer;
            width: 100%;
            border: none;
            background: transparent;
            color: white;
            text-align: left;
            font-size: 18px;
            font-weight: 500;
        }

        .faq-number {
            background: rgba(240, 185, 11, 0.1);
            color: #F0B90B;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 16px;
            font-weight: 600;
        }

        .faq-title {
            flex: 1;
        }

        .faq-toggle {
            background: #F0B90B;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
        }

        .faq-toggle.active {
            transform: rotate(180deg);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0 24px;
            color: #848E9C;
            line-height: 1.6;
        }

        .faq-answer.active {
            max-height: 500px;
            padding-bottom: 24px;
        }

        @media (max-width: 768px) {
            .faq-container {
                padding: 0 16px;
            }
            
            .faq-question {
                font-size: 16px;
                padding: 20px;
            }
        }

        /* Global Responsive Styles */
        @media screen and (max-width: 1200px) {
            .container {
                max-width: 960px;
                padding: 1rem 2rem;
            }

            .hero-title {
                font-size: 3rem;
            }

            .steps-container {
                gap: 20px;
            }

            .faq-container {
                max-width: 900px;
                padding: 0 2rem;
            }
        }

        @media screen and (max-width: 992px) {
            .container {
                max-width: 720px;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.25rem;
            }

            .steps-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
            }

            .step-card {
                min-height: 200px;
            }

            .right-section {
                padding-left: 0;
            }

            .phone-mockup {
                max-width: 90%;
            }
        }

        @media screen and (max-width: 768px) {
            .container {
                max-width: 540px;
                padding: 1rem;
            }

            .left-section, .right-section {
                flex: 100%;
                text-align: center;
                padding: 1rem;
            }

            .right-section {
                order: -1;
                margin-bottom: 2rem;
            }

            .hero-title {
                font-size: 2.25rem;
            }

            .get-started-btn {
                width: 100%;
                max-width: 300px;
            }

            .steps-container {
                grid-template-columns: 1fr;
                padding: 1rem;
            }

            .step-card {
                min-height: auto;
                padding: 1.5rem;
            }

            .step-icon img {
                height: 120px;
            }

            .how-to-participate h2 {
                font-size: 2rem;
                padding: 0 1rem;
            }

            .faq-container {
                padding: 0 1rem;
            }

            .faq-question {
                padding: 1rem;
            }

            .faq-answer {
                padding: 0 1rem;
            }

            .faq-answer.active {
                padding-bottom: 1rem;
            }
        }

        @media screen and (max-width: 576px) {
            .container {
                padding: 0.5rem;
            }

            .hero-title {
                font-size: 2rem;
                line-height: 1.3;
            }

            .hero-subtitle {
                font-size: 1.1rem;
            }

            .step-icon img {
                height: 100px;
            }

            .step-card h3 {
                font-size: 1.1rem;
            }

            .step-card p {
                font-size: 0.9rem;
            }

            .faq-question {
                font-size: 1rem;
            }

            .faq-number {
                width: 28px;
                height: 28px;
                font-size: 0.9rem;
            }

            .faq-toggle {
                width: 20px;
                height: 20px;
            }
        }

        /* Fix for very small screens */
        @media screen and (max-width: 360px) {
            .hero-title {
                font-size: 1.75rem;
            }

            .hero-subtitle {
                font-size: 1rem;
            }

            .step-icon img {
                height: 80px;
            }

            .faq-question {
                padding: 0.75rem;
            }
        }

        /* Fix for landscape mode on mobile */
        @media screen and (max-height: 600px) and (orientation: landscape) {
            .container {
                padding: 0.5rem;
            }

            .right-section {
                margin-bottom: 1rem;
            }

            .phone-mockup {
                max-width: 60%;
            }

            .steps-container {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* High resolution screens */
        @media screen and (min-width: 1400px) {
            .container {
                max-width: 1320px;
            }

            .hero-title {
                font-size: 4rem;
            }

            .hero-subtitle {
                font-size: 1.75rem;
            }

            .step-card {
                min-height: 260px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="left-section">
            <h3 class="brand">Binance Megadrop</h3>
            <h1 class="hero-title">Welcome to the Future<br>of Airdrops</h1>
            <p class="hero-subtitle">Discover, Participate, and Earn Rewards</p>
            <button class="get-started-btn">Get Started</button>
        </div>

        <div class="right-section">
            <img src="./img/top-bg.png" alt="Crypto App Interface" class="phone-mockup">
        </div>

        <section class="how-to-participate">
            <h2>How to Participate in Megadrop?</h2>
            
            <div class="steps-container">
                <div class="step-card">
                    <div class="step-icon">
                        <img src="./img/img-1.png" alt="Lock BNB">
                    </div>
                    <div class="step-content">
                        <h3>Lock BNB</h3>
                        <p>Subscribe to a fixed term in Simple Earn to accumulate points.</p>
                    </div>
                </div>

                <div class="step-card">
                    <div class="step-icon">
                        <img src="./img/img-2.png" alt="Web3 Quests">
                    </div>
                    <div class="step-content">
                        <h3>Complete Web3 Quests</h3>
                        <p>Participate in Web3 quests to boost your airdrop rewards.</p>
                    </div>
                </div>

                <div class="step-card">
                    <div class="step-icon">
                        <img src="./img/img-3.png" alt="Earn Rewards">
                    </div>
                    <div class="step-content">
                        <h3>Earn Rewards</h3>
                        <p>Receive new token rewards proportional to your accumulated score.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq-section">
            <div class="faq-container">
                <div class="faq-item">
                    <button class="faq-question">
                        <div class="faq-number">1</div>
                        <div class="faq-title">What is Binance Megadrop?</div>
                        <div class="faq-toggle">-</div>
                    </button>
                    <div class="faq-answer">
                        Binance Megadrop is a new token launch platform that seamlessly integrates Binance Simple Earn and the Binance Web3 Wallet, reinventing the airdrop experience. Megadrop grants users early access to select Web3 projects before they are listed on Binance.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <div class="faq-number">2</div>
                        <div class="faq-title">How do I lock BNB to earn points?</div>
                        <div class="faq-toggle">-</div>
                    </button>
                    <div class="faq-answer">
                        You can visit the BNB Simple Earn Locked Products page and follow the instructions to subscribe your BNB to Locked Products. Your Locked BNB Score will be determined by the quantity of BNB subscribed and the length of the subscription period. Longer subscriptions yield higher scores, and consequently, higher rewards. For more details, please visit the Megadrop page on the Binance app and refer to the announcement.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <div class="faq-number">3</div>
                        <div class="faq-title">How do I complete Web3 quests to boost my score?</div>
                        <div class="faq-toggle">-</div>
                    </button>
                    <div class="faq-answer">
                        Visit the Megadrop page and you will find the quest introduction in the project detail page. You can check the tutorials and start the web3 quests from there.
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <div class="faq-number">4</div>
                        <div class="faq-title">What is Binance Web3 Wallet?</div>
                        <div class="faq-toggle">-</div>
                    </button>
                    <div class="faq-answer">
                        Binance Web3 Wallet is a self-custody crypto wallet within the Binance app, designed to empower users in the realm of decentralized finance (DeFi). Serving as a digital gateway to blockchain-based applications (DApps), it offers users a secure and streamlined method to manage their cryptocurrencies, execute token swaps across multiple chains, earn yields, and interact with a variety of blockchain platforms.
                    </div>
                </div>
            </div>
        </section>

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const faqItems = document.querySelectorAll('.faq-item');
                
                faqItems.forEach(item => {
                    const question = item.querySelector('.faq-question');
                    const answer = item.querySelector('.faq-answer');
                    const toggle = item.querySelector('.faq-toggle');
                    
                    question.addEventListener('click', () => {
                        const isActive = answer.classList.contains('active');
                        
                        // Close all FAQs
                        document.querySelectorAll('.faq-answer').forEach(a => {
                            a.classList.remove('active');
                            a.style.maxHeight = null;
                        });
                        document.querySelectorAll('.faq-toggle').forEach(t => {
                            t.classList.remove('active');
                            t.textContent = '-';
                        });
                        
                        // Open clicked FAQ if it wasn't active
                        if (!isActive) {
                            answer.classList.add('active');
                            answer.style.maxHeight = answer.scrollHeight + "px";
                            toggle.classList.add('active');
                            toggle.textContent = '+';
                        }
                    });
                });
            });
        </script>
    </div>
</body>
<?php include "footer.php";?>
</html>
