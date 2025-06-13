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
            padding: 0 15px;
        }

        h1 {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 600;
            margin-bottom: 40px;
            color: #fff;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 40px;
        }

        .feature-card {
            padding: 24px;
            background-color: rgba(30, 35, 41, 0.1);
            border-radius: 8px;
            transition: transform 0.2s, background-color 0.2s;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            background-color: rgba(30, 35, 41, 0.2);
        }

        .feature-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            background-color: #1E2329;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .feature-icon img {
            width: 24px;
            height: 24px;
        }

        .feature-title {
            font-size: clamp(18px, 2vw, 20px);
            font-weight: 500;
            margin-bottom: 12px;
            color: #fff;
        }

        .feature-description {
            font-size: 14px;
            color: #848E9C;
            line-height: 1.5;
            margin-bottom: 16px;
        }

        .feature-links {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .feature-link {
            color: #848E9C;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.2s;
            padding: 4px 0;
        }

        .feature-link:hover {
            color: #F0B90B;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 992px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            body {
                padding: 16px;
            }

            .container {
                padding: 0 10px;
            }

            .features-grid {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .feature-card {
                padding: 20px;
            }

            .feature-icon {
                width: 40px;
                height: 40px;
            }

            .feature-description {
                font-size: 13px;
            }
        }

        @media (max-width: 480px) {
            body {
                padding: 12px;
            }

            h1 {
                margin-bottom: 24px;
            }

            .feature-card {
                padding: 16px;
            }

            .feature-icon {
                width: 36px;
                height: 36px;
            }

            .feature-title {
                font-size: 18px;
            }

            .feature-description {
                font-size: 12px;
                margin-bottom: 12px;
            }

            .feature-link {
                font-size: 13px;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            .feature-card {
                background-color: rgba(255, 255, 255, 0.03);
            }

            .feature-card:hover {
                background-color: rgba(255, 255, 255, 0.05);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Learn More</h1>
        
        <div class="features-grid">
            <!-- Flexible Products -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#F0B90B">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 16.2V9.8l8 3.2v6.4l-8-3.2zm10 3.2v-6.4l8-3.2v6.4l-8 3.2z"/>
                    </svg>
                </div>
                <h3 class="feature-title">Flexible Products</h3>
                <p class="feature-description">Subscribe at any time and start earning rewards.</p>
                <div class="feature-links">
                    <a href="#" class="feature-link">Redemption Policy</a>
                    <a href="#" class="feature-link">Flexible Loans</a>
                    <a href="#" class="feature-link">Real-Time APR</a>
                    <a href="#" class="feature-link">Bonus Tiered APR</a>
                </div>
            </div>

            <!-- Locked Products -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#F0B90B">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                </div>
                <h3 class="feature-title">Locked Products</h3>
                <p class="feature-description">Lock assets for a fixed term and earn higher rewards</p>
                <div class="feature-links">
                    <a href="#" class="feature-link">Rewards Distribution Timeline</a>
                    <a href="#" class="feature-link">Daily Maintenance Schedule</a>
                    <a href="#" class="feature-link">Redemption Policy</a>
                </div>
            </div>

            <!-- Launchpool & Megadrop Rewards -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#F0B90B">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                </div>
                <h3 class="feature-title">Launchpool & Megadrop Rewards</h3>
                <p class="feature-description">Eligible Simple Earn users will automatically participate in Launchpool (applies to both Flexible and Locked BNB) and Megadrop (only applicable to Locked BNB) for rewards.</p>
                <div class="feature-links">
                    <a href="#" class="feature-link">Historical Rewards</a>
                    <a href="#" class="feature-link">Megadrop FAQ</a>
                    <a href="#" class="feature-link">Launchpool FAQ</a>
                </div>
            </div>

            <!-- Auto-Subscribe -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#F0B90B">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                </div>
                <h3 class="feature-title">Auto-Subscribe</h3>
                <p class="feature-description">Hassle-free automatic subscription for Flexible or Locked.</p>
                <div class="feature-links">
                    <a href="#" class="feature-link">Flexible Products</a>
                    <a href="#" class="feature-link">Locked Products</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html> 