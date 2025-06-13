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
            background-color: #0B0E11;
            color: white;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            padding: 0 15px;
        }

        h1 {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 600;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }

        .subtitle {
            font-size: clamp(16px, 2vw, 20px);
            color: #848E9C;
            margin-bottom: 32px;
        }

        .info-link {
            color: #F0B90B;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: clamp(14px, 1.5vw, 16px);
            margin-bottom: 48px;
            width: fit-content;
        }

        .stats-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: clamp(16px, 3vw, 48px);
            margin-bottom: 48px;
        }

        .stat-box {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
            padding: clamp(16px, 2vw, 24px);
            transition: transform 0.2s;
        }

        .stat-box:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.04);
        }

        .stat-label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #848E9C;
            font-size: clamp(14px, 1.5vw, 16px);
            margin-bottom: 12px;
        }

        .stat-value {
            font-size: clamp(24px, 3vw, 32px);
            font-weight: 500;
            color: #fff;
        }

        .auto-subscribe-btn {
            background-color: #FCD535;
            color: #0B0E11;
            border: none;
            padding: clamp(12px, 2vw, 16px) clamp(16px, 3vw, 24px);
            font-size: clamp(14px, 1.5vw, 16px);
            font-weight: 500;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            width: fit-content;
        }

        .auto-subscribe-btn:hover {
            background-color: #F0B90B;
            transform: translateY(-2px);
        }

        .auto-subscribe-btn:active {
            transform: translateY(0);
        }

        .ad-banner {
            position: fixed;
            top: 40px;
            right: 40px;
            width: min(320px, 30vw);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .ad-banner img {
            width: 100%;
            height: auto;
            display: block;
        }

        .icon {
            width: clamp(14px, 1.5vw, 16px);
            height: clamp(14px, 1.5vw, 16px);
            opacity: 0.8;
        }

        .copy-icon {
            cursor: pointer;
            margin-left: 8px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
            .ad-banner {
                position: static;
                width: 100%;
                margin: 20px auto;
                max-width: 320px;
            }
        }

        @media (max-width: 768px) {
            body {
                padding: 16px;
            }

            .container {
                padding: 0 10px;
            }

            .stats-container {
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            }

            .info-link {
                margin-bottom: 32px;
            }
        }

        @media (max-width: 480px) {
            body {
                padding: 12px;
            }

            .stats-container {
                grid-template-columns: 1fr;
            }

            .stat-box {
                padding: 16px;
            }

            .info-link {
                margin-bottom: 24px;
            }

            .subtitle {
                margin-bottom: 24px;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .stat-box {
                background: rgba(255, 255, 255, 0.03);
            }

            .stat-box:hover {
                background: rgba(255, 255, 255, 0.05);
            }
        }

        /* Touch device optimizations */
        @media (hover: none) {
            .stat-box:hover {
                transform: none;
            }

            .auto-subscribe-btn:hover {
                transform: none;
            }
        }

        /* FAQ Section Styles */
        .faq-section {
            margin-top: 48px;
            margin-bottom: 48px;
        }

        .faq-section h2 {
            font-size: 24px;
            margin-bottom: 24px;
            color: #fff;
        }

        .faq-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .faq-item {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
            overflow: hidden;
        }

        .faq-question {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            font-weight: 500;
            color: #fff;
            transition: background-color 0.3s;
        }

        .faq-question:hover {
            background: rgba(255, 255, 255, 0.04);
        }

        .arrow-icon {
            width: 24px;
            height: 24px;
            transition: transform 0.3s;
        }

        .faq-answer {
            padding: 0;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease-out;
            background: rgba(255, 255, 255, 0.01);
        }

        .faq-answer p {
            padding: 0 20px;
            margin-bottom: 16px;
            color: #848E9C;
            line-height: 1.5;
        }

        .faq-answer p:first-child {
            margin-top: 0;
        }

        .faq-item.active .faq-question {
            background: rgba(255, 255, 255, 0.04);
        }

        .faq-item.active .arrow-icon {
            transform: rotate(180deg);
        }

        .faq-item.active .faq-answer {
            padding: 20px 0;
            max-height: 1000px;
        }

        @media (max-width: 768px) {
            .faq-section {
                margin-top: 32px;
                margin-bottom: 32px;
            }

            .faq-question {
                padding: 16px;
            }

            .faq-answer {
                padding: 0 16px;
            }
        }
    </style>
   
</head>
<body style="padding-top: 100px;">
    <div class="container">
        <h1>Simple Earn</h1>
        <p class="subtitle">Simple way to deposit & Earn.</p>
        
        <a href="#" class="info-link">
            What is Simple Earn?
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#F0B90B">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
        </a>

        <div class="stats-container">
            <div class="stat-box">
                <div class="stat-label">
                    My Holdings
                    <svg class="icon" viewBox="0 0 24 24" fill="#848E9C">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <svg class="icon copy-icon" viewBox="0 0 24 24" fill="#848E9C">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                </div>
                <div class="stat-value">≈ $0.00</div>
            </div>

            <div class="stat-box">
                <div class="stat-label">
                    Total Profit
                    <svg class="icon" viewBox="0 0 24 24" fill="#848E9C">
                        <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                </div>
                <div class="stat-value">≈ $0.00</div>
            </div>

            <div class="stat-box">
                <div class="stat-label">Last Day Profit</div>
                <div class="stat-value">≈ $0.00</div>
            </div>
        </div>

        <button class="auto-subscribe-btn">Auto-Subscribe</button>
    </div>

    <!-- <div class="ad-banner">
        <img src="https://public.bnbstatic.com/static/images/common/yield-arena.png" alt="MyCryptoBank Earn - Yield Arena" onerror="this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAZADIAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+f6KKK+FP7DCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z';">
    </div> -->

    <br/>
    <?php include 'simple-earn-api.php'; ?>
    <br/>
    <?php include 'learn-more.php'; ?>

    <!-- FAQ Section -->
    <div class="container faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-container">
            <div class="faq-item">
                <div class="faq-question">
                    <span>How does Simple Earn work?</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                </div>
                <div class="faq-answer">
                    <p>Simple Earn allows users to earn rewards by depositing their digital assets for either flexible or locked periods of time.</p>
                    <p>Users can subscribe to Flexible Products at any time to start earning rewards every minute. Locked Products offer different locked terms and rewards are distributed on a daily basis.</p>
                    <p>Simple Earn is a principal protected product. Your deposits are protected by MyCryptoBank in token amount (value of the assets are subject to market fluctuation).</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What rewards can I earn from Flexible Products?</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                </div>
                <div class="faq-answer">
                    <p>Flexible Products distribute rewards based on Real-Time APR and Bonus Tiered APR. Rewards distributed are rounded down to 8 decimal places.</p>
                    <p>Real-Time APR is a live indication of rewards you can receive, and is subject to change every minute. Rewards are accrued and directly accumulated in your Earn Wallet every minute.</p>
                    <p>Bonus Tiered APR is offered from time to time on selected Flexible Products through a tiered rate structure, and is subject to change on a daily basis. These rewards are accrued the day after subscription, starting at 00:00 UTC. You will start receiving reward distributions in your Spot Wallet the day after accrual starts (two days after subscription) between 00:00 UTC and 08:00 UTC.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What is the redemption policy for Flexible Products?</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                </div>
                <div class="faq-answer">
                    <p>Your Flexible Product assets will be returned to your Spot Wallet immediately upon successful processing of redemption requests.</p>
                    <p>However, daily redemption limits apply to each Flexible Product, and are subject to change at any time. These limits and potential delays in receiving redemption proceeds may be a result of various factors, including but not limited to: extreme market volatility, network delays, a significant number of simultaneous instructions to redeem from other MyCryptoBank users, or any other unanticipated events.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Where can I look for the rewards I have earned for Flexible Products?</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                </div>
                <div class="faq-answer">
                    <p>Real-Time APR rewards are added every minute directly on the balance of each Flexible Product in your Earn Wallet (not your Spot Wallet). Bonus Tiered APR rewards are distributed to your Spot Wallet daily. You can refer to your Earn Wallet on the rewards you have earned, or Simple Earn History for the historical records under 'Real-Time APR Rewards' or 'Bonus Tiered APR Rewards'.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What rewards can I earn for Locked Products?</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z"/>
                    </svg>
                </div>
                <div class="faq-answer">
                    <p>Locked Product APR is subject to change on a daily basis. These rewards are accrued the day after subscription, starting at 00:00 UTC. You will start receiving reward distributions in your Spot Wallet the day after accrual starts (two days after subscription) between 00:00 UTC and 08:00 UTC.</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Add any interactive functionality here if needed
        document.querySelector('.auto-subscribe-btn').addEventListener('click', function() {
            alert('Auto-Subscribe feature clicked');
        });

        // FAQ Accordion functionality
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // If the clicked item wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    </script>
    <?php include 'footer.php'; ?>
</body>
</html>
