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
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #1a1a1a;
            color: white;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 0 15px;
        }

        .flexible-loan {
            padding: 20px;
        }

        .flexible-loan h1 {
            color: #FFD700;
            font-size: clamp(24px, 4vw, 28px);
            margin-bottom: 15px;
        }

        .flexible-loan h2 {
            font-size: clamp(18px, 3vw, 24px);
            margin-bottom: 20px;
            font-weight: normal;
            line-height: 1.4;
        }

        .features {
            list-style: none;
            margin: 20px 0;
        }

        .features li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: #cccccc;
            font-size: clamp(14px, 2vw, 16px);
        }

        .features li svg {
            flex-shrink: 0;
            margin-right: 15px;
        }

        .borrow-btn {
            background-color: #FFD700;
            color: black;
            border: none;
            padding: clamp(12px, 2vw, 15px) clamp(30px, 4vw, 40px);
            border-radius: 5px;
            font-size: clamp(14px, 2vw, 16px);
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }

        .borrow-btn:hover {
            background-color: #e6c200;
        }

        .loan-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .loan-card {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: transform 0.3s ease;
        }

        .loan-card:hover {
            transform: translateY(-5px);
        }

        .loan-card-content {
            flex: 1;
            margin-right: 20px;
        }

        .loan-card-content h3 {
            font-size: clamp(18px, 3vw, 20px);
            margin-bottom: 10px;
        }

        .loan-card-content p {
            color: #cccccc;
            margin-bottom: 10px;
            font-size: clamp(14px, 2vw, 16px);
        }

        .explore-now {
            color: #FFD700;
            text-decoration: none;
            font-weight: bold;
            font-size: clamp(14px, 2vw, 16px);
            transition: color 0.3s ease;
        }

        .explore-now:hover {
            color: #e6c200;
        }

        .loan-card img {
            width: clamp(120px, 15vw, 160px);
            height: clamp(120px, 15vw, 160px);
            object-fit: contain;
        }

        /* Media Queries */
        @media screen and (max-width: 968px) {
            .container {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .flexible-loan {
                padding: 10px;
            }
        }

        @media screen and (max-width: 576px) {
            body {
                padding: 10px;
            }

            .loan-card {
                flex-direction: column;
                text-align: center;
            }

            .loan-card-content {
                margin-right: 0;
                margin-bottom: 20px;
            }

            .loan-card img {
                width: clamp(100px, 30vw, 120px);
                height: clamp(100px, 30vw, 120px);
            }
        }
    </style>
  
</head>
<body style="padding-top: 100px;">
    <div class="container">
        <div class="flexible-loan">
            <h1>Flexible Rate Loan</h1>
            <h2 style="font-weight: 700;">Borrow for Spot/Margin/Futures Trading or staking to earn high APY.</h2>
            
            <ul class="features">
                <li>
                    <svg style="margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    Repay at any time
                </li>
                <li>
                    <svg style="margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 5h-4l2 4h-3l-2-4H7L5 9h3l2 4H7l-2 4h14"/>
                        <line x1="3" y1="3" x2="21" y2="21" stroke="#cccccc"/>
                    </svg>
                    No transaction fee
                </li>
                <li>
                    <svg style="margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v12"/>
                        <path d="M8 12h8"/>
                        <path d="M9 9l6 6"/>
                        <path d="M15 9l-6 6"/>
                    </svg>
                    Simple Earn (Flexible) assets can be collateralized in Flexible Loan ↗
                </li>
            </ul>

            <button class="borrow-btn">Borrow Now</button>
        </div>

        <div class="loan-cards">
            <div class="loan-card">
                <div class="loan-card-content">
                    <h3>Fixed Rate Loan</h3>
                    <p>Create a borrow request or supply order with your preferred amount and interest rate.</p>
                    <a href="#" class="explore-now">Explore Now</a>
                </div>
                <img src="./img/loan1.svg" alt="Coins">
            </div>

            <div class="loan-card">
                <div class="loan-card-content">
                    <h3>VIP Loan</h3>
                    <p>Institutional Level Loan Services for VIP users</p>
                    <a href="#" class="explore-now">Explore Now</a>
                </div>
                <img src="./img/loan2.svg" alt="Bank">
            </div>
        </div>
    </div>

    <br/>
    <?php include "loan-api.php"; ?>
    <br/>
    <?php include "footer.php"; ?>
</body>
</html>
