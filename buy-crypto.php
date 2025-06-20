<?php include "header.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <style>
        /* Base styles */
        body {
            background-color: #1a1d26;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            width: 100%;
            box-sizing: border-box;
        }

        /* Navigation Styles */
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            flex-wrap: wrap;
            padding-left: 100px;
            /* gap: 15px; */
        }
        .nav-left, .nav-right {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }
        .nav a {
            color: #808080;
            text-decoration: none;
            font-size: 16px;
            white-space: nowrap;
        }
        .nav a.active {
            color: white;
            border-bottom: 2px solid #ffd700;
            padding-bottom: 20px;
            margin-bottom: -21px;
        }

        /* Main Content */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: 40px;
        }
        h1 {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 30px;
            word-wrap: break-word;
        }

        /* Hot Cryptos Section */
        .hot-cryptos {
            background-color: #242731;
            border-radius: 15px;
            padding: 25px;
        }
        .hot-cryptos h2 {
            font-size: 20px;
            margin-bottom: 20px;
        }
        .crypto-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .crypto-item:last-child {
            border-bottom: none;
        }
        .crypto-name {
            display: flex;
            align-items: center;
            width: 120px;
        }
        .crypto-icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
        }
        .crypto-price {
            flex: 1;
            text-align: right;
            padding-right: 40px;
        }
        .change-up {
            color: #00c853;
        }
        .change-down {
            color: #ff3d00;
        }

        /* Trade Form */
        .trade-form {
            background-color: #242731;
            border-radius: 15px;
            padding: 25px;
        }
        .trade-tabs {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
        }
        .tab {
            font-size: 18px;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 8px;
        }
        .tab.active {
            background-color: #1a1d26;
        }
        .tab.inactive {
            color: #808080;
        }
        .input-group {
            margin-bottom: 20px;
        }
        .input-group label {
            display: block;
            color: #808080;
            margin-bottom: 10px;
        }
        .currency-input {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1a1d26;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 15px;
            position: relative;
        }
        .currency-input input {
            background: none;
            border: none;
            color: white;
            font-size: 16px;
            width: 100%;
            outline: none;
        }
        .currency-select {
            position: relative;
            width: 100%;
        }
        .currency-select-header {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            padding: 12px;
            background: #1a1d26;
            border-radius: 8px;
            border: 1px solid #2a2d38;
        }
        .currency-select-header img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }
        .currency-select-header span {
            color: #fff;
            font-size: 14px;
        }
        .currency-select-header .balance {
            margin-left: auto;
            color: #808191;
            font-size: 12px;
        }
        .currency-dropdown {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            width: 100%;
            background: #1E2128;
            border: 1px solid #2a2d38;
            border-radius: 8px;
            padding: 16px;
            display: none;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .currency-dropdown.active {
            display: block;
        }
        .currency-search {
            width: 100%;
            background: #242731;
            border: 1px solid #2a2d38;
            border-radius: 8px;
            padding: 12px;
            color: white;
            font-size: 14px;
            margin-bottom: 12px;
            outline: none;
        }
        .currency-search:focus {
            border-color: #3a3d48;
        }
        .currency-search::placeholder {
            color: #808080;
        }
        .currency-list {
            max-height: 300px;
            overflow-y: auto;
        }
        .currency-list::-webkit-scrollbar {
            width: 6px;
        }
        .currency-list::-webkit-scrollbar-track {
            background: #1E2128;
            border-radius: 3px;
        }
        .currency-list::-webkit-scrollbar-thumb {
            background: #2a2d38;
            border-radius: 3px;
        }
        .currency-option {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.2s;
        }
        .currency-option:hover {
            background: #242731;
        }
        .currency-option img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            object-fit: cover;
        }
        .currency-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .currency-name {
            color: white;
            font-size: 14px;
            font-weight: 500;
        }
        .currency-full-name {
            color: #808080;
            font-size: 12px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .container {
                padding: 15px;
            }
            h1 {
                font-size: 36px;
            }
            .main-content {
                gap: 30px;
            }
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            .nav {
                justify-content: center;
            }
            .nav-left, .nav-right {
                justify-content: center;
                width: 100%;
            }
            h1 {
                font-size: 32px;
                text-align: center;
            }
            .hot-cryptos {
                order: 2;
            }
            .trade-form {
                order: 1;
            }
            .currency-dropdown {
                width: 280px;
                right: -10px;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 10px;
            }
            h1 {
                font-size: 28px;
            }
            .nav {
                padding: 15px 0;
            }
            .nav a {
                font-size: 14px;
            }
            .crypto-item {
                flex-wrap: wrap;
                gap: 10px;
            }
            .crypto-name {
                width: auto;
                min-width: 120px;
            }
            .crypto-price {
                padding-right: 20px;
            }
            .currency-input {
                flex-wrap: wrap;
                gap: 10px;
            }
            .tab {
                font-size: 16px;
                padding: 8px 15px;
            }
            .currency-dropdown {
                width: 280px;
                right: -10px;
            }
            .crypto-item {
                padding: 12px 0;
            }
            .crypto-name {
                width: 100px;
            }
            .crypto-icon {
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
        }

        /* Fix for very small screens */
        @media (max-width: 360px) {
            .currency-dropdown {
                width: 250px;
                right: -50px;
            }
            .nav-left, .nav-right {
                gap: 15px;
            }
            .crypto-price {
                font-size: 14px;
            }
        }

        /* Fix for currency dropdowns on mobile */
        @media (max-width: 480px) {
            .currency-input {
                flex-direction: column;
                align-items: stretch;
            }
            .currency-select {
                width: 100%;
            }
            .currency-select-header {
                justify-content: end;
            }
        }

        /* How to Buy Crypto Section */
        .how-to-buy {
            padding: 40px 0;
            color: white;
            background-color: #1a1d26;
        }
        .how-to-buy h1 {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 40px;
            text-align: left;
            padding-left: 20px;
        }
        .steps-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            padding: 0 20px;
        }
        .step-card {
            background-color: #1E2128;
            border-radius: 16px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-height: 240px;
        }
        .step-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 24px;
        }
        .step-title {
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .step-title::before {
            content: attr(data-number);
            font-size: 20px;
            font-weight: 500;
        }
        .step-description {
            color: #808191;
            line-height: 1.5;
            font-size: 15px;
        }

        /* Responsive styles for How to Buy section */
        @media (max-width: 1024px) {
            .steps-container {
                gap: 20px;
                padding: 0 15px;
            }
            .step-card {
                padding: 24px;
            }
        }

        @media (max-width: 768px) {
            .steps-container {
                grid-template-columns: 1fr;
                max-width: 500px;
                margin: 0 auto;
            }
            .how-to-buy h1 {
                font-size: 32px;
                margin-bottom: 30px;
                text-align: center;
                padding-left: 0;
            }
            .step-card {
                min-height: auto;
            }
        }

        @media (max-width: 480px) {
            .how-to-buy {
                padding: 30px 0;
            }
            .how-to-buy h1 {
                font-size: 28px;
                margin-bottom: 25px;
            }
            .step-card {
                padding: 20px;
            }
            .step-title {
                font-size: 18px;
            }
            .step-description {
                font-size: 14px;
            }
        }

        /* Navigation Styles */
        .nav-btn {
            background: none;
            border: none;
            color: #808080;
            padding: 20px;
            font-size: 16px;
            cursor: pointer;
            position: relative;
        }

        .nav-btn.active {
            color: white;
        }

        .nav-btn.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #ffd700;
        }

        /* Section Styles */
        .section {
            display: none;
            padding: 20px;
        }

        .section.active {
            display: block;
        }

        /* Deposit & Withdraw Styles */
        .deposit-container,
        .withdraw-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .currency-selector {
            margin-bottom: 30px;
        }

        .currency-selector label {
            display: block;
            color: #808080;
            margin-bottom: 10px;
        }

        .select-box {
            background-color: #1a1d26;
            border: 1px solid #2a2d38;
            border-radius: 8px;
            padding: 15px;
        }

        .selected-currency {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }

        .selected-currency img {
            width: 24px;
            height: 24px;
        }

        .selected-currency .balance {
            margin-left: auto;
            color: #808080;
        }

        .arrow-down {
            border: solid #808080;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(45deg);
            margin-left: auto;
        }

        .payment-method,
        .receive-method {
            background-color: #1a1d26;
            border-radius: 12px;
            padding: 20px;
        }

        .payment-option {
            display: flex;
            align-items: center;
            gap: 20px;
            background-color: #242731;
            border-radius: 8px;
            padding: 20px;
            margin-top: 15px;
        }

        .payment-logo img {
            width: 40px;
            height: 40px;
        }

        .payment-info h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
        }

        .payment-info p {
            margin: 5px 0;
            color: #808080;
            font-size: 14px;
        }

        .fee {
            display: inline-block;
            background-color: #1a1d26;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            color: #808080;
        }

        /* Updated Deposit Section Styles */
        .deposit-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        .deposit-container h1 {
            font-size: 32px;
            font-weight: 600;
            margin-bottom: 40px;
            color: #fff;
        }

        .deposit-form .input-group {
            margin-bottom: 24px;
        }

        .deposit-form .input-group label {
            display: block;
            font-size: 16px;
            color: #808080;
            margin-bottom: 8px;
        }

        .deposit-form .currency-input {
            background: #1a1d26;
            border: 1px solid #2a2d38;
            border-radius: 8px;
            padding: 16px;
        }

        .deposit-form .currency-select-header {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }

        .deposit-form .currency-select-header img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        .deposit-form .currency-select-header span {
            color: #fff;
            font-size: 16px;
        }

        .zen-option {
            background: #1a1d26;
            border: 1px solid #2a2d38;
            border-radius: 8px;
            padding: 20px;
            cursor: pointer;
            transition: border-color 0.2s;
        }

        .zen-option:hover {
            border-color: #3a3d48;
        }

        .zen-option .payment-logo img {
            width: 40px;
            height: 40px;
            border-radius: 8px;
        }

        .zen-option .payment-info h3 {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .zen-option .payment-info p {
            color: #808080;
            font-size: 14px;
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .zen-option .fee {
            display: inline-block;
            background: #242731;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            color: #808080;
        }

        .verify-identity-btn {
            width: 100%;
            background-color: #FFD700;
            color: #000000;
            border: none;
            border-radius: 12px;
            padding: 16px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 24px;
            transition: background-color 0.2s ease;
            text-align: center;
            display: inline-block;
            text-decoration: none;
        }
        .verify-identity-btn:hover {
            background-color: #F4CD00;
        }

        .verify-identity-btn:active {
            transform: scale(0.98);
        }

        /* Withdraw Section Specific Styles - Keep these separate */
        #withdraw .currency-select-header {
            display: flex;
            align-items: center;
            gap: 16px;
            cursor: pointer;
            padding: 16px;
            background: #1a1d26;
            border-radius: 8px;
            border: 1px solid #2a2d38;
            margin-bottom: 24px;
        }

        #withdraw .currency-select-header img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }

        #withdraw .currency-select-header span {
            color: #fff;
            font-size: 16px;
        }

        #withdraw .currency-select-header .balance {
            margin-left: auto;
            color: #808191;
            font-size: 14px;
        }

        #withdraw .currency-select-header svg {
            margin-left: 12px;
        }
    </style>
</head>
<body style="padding-top: 80px;">
<nav class="nav">
    <div class="nav-left">
        <button class="nav-btn active" data-section="buy-sell">Buy & Sell</button>
        <button class="nav-btn" data-section="deposit">Deposit</button>
        <button class="nav-btn" data-section="withdraw">Withdraw</button>
    </div>
</nav>

<!-- Main Content Sections -->
<div class="content-sections">
    <!-- Buy & Sell Section -->
    <div class="section active" id="buy-sell">
        <!-- Existing buy-sell content -->
        <div class="main-content">
            <div class="left-section">
                <h1>Buy ATOM with INR</h1>
                
                <!-- Hot Cryptos Section -->
                <div class="hot-cryptos">
                    <h2>Hot Cryptos</h2>
                    <div id="crypto-list">
                        <div class="crypto-item">
                            <div class="crypto-name">
                                <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" class="crypto-icon" alt="BNB">
                                BNB
                            </div>
                            <div class="crypto-price">Loading...</div>
                            <div class="change-down">-</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right-section">
                <div class="trade-form">
                    <div class="trade-tabs">
                        <button class="tab active">Buy</button>
                        <button class="tab inactive">Sell</button>
                    </div>

                    <div class="input-group">
                        <label>Spend</label>
                        <div class="currency-input">
                            <input type="text" placeholder="Enter Amount">
                            <div class="currency-select">
                                <div class="currency-select-header">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGOTgwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1LjQ3IDEwLjYxNWMuMzQyLjQyNy41MTQuOTU4LjUxNCAxLjU5NyAwIC42ODItLjE5MiAxLjI1Ni0uNTc0IDEuNzIyLS4zODMuNDY2LS45NTYuNjk5LTEuNzIxLjY5OWgtMS41NDl2MS43NDhoLTEuMTgyVjguOTk4aDIuODMxYy43MjQgMCAxLjI4Mi4yMzkgMS42ODEuNzE3em0tMS4wNjggMi41MjRjLjIwNS0uMjM5LjMwNy0uNTY2LjMwNy0uOTgyIDAtLjQzOC0uMTI2LS43NzQtLjM3OS0xLjAwOC0uMjUzLS4yMzMtLjYyMS0uMzUtMS4xMDQtLjM1aC0xLjZWMTMuODNoMS42NDJjLjUwMiAwIC45MjktLjEzIDEuMTM0LS4zNjl6TTI4LjA1NyA4Ljk5OGgxLjE4NnY3LjM4M2gtMS4xODZWOC45OTh6TTIzLjU0MyAyMi4xNzJoLTEuMjM5bC0yLjQzOS0yLjQzOS0yLjQzOSAyLjQzOWgtMS4yMzdsMy4wNDYtMy4wNDUtMi44NzItMi44NzJoMS4yMzhsMi4yNjUgMi4yNjQgMi4yNjQtMi4yNjRoMS4yMzlsLTIuODczIDIuODcyIDMuMDQ3IDMuMDQ1ek0xMy40NTEgMjIuNTgyYy0uNzQ3IDAtMS40MTItLjE4MS0xLjk5NS0uNTQyLS41ODMtLjM2MS0xLjAzNS0uODY4LTEuMzU0LTEuNTIxLS4zMi0uNjUyLS40NzktMS40MDMtLjQ3OS0yLjI1MiAwLS44NDguMTYtMS41OTkuNDc5LTIuMjUxLjMxOS0uNjUyLjc3MS0xLjE1OCAxLjM1NC0xLjUyLjU4My0uMzYxIDEuMjQ4LS41NDIgMS45OTUtLjU0Mi43NDYgMCAxLjQxMS4xODEgMS45OTQuNTQyLjU4My4zNjEgMS4wMzUuODY3IDEuMzU0IDEuNTIuMzE5LjY1Mi40NzkgMS40MDMuNDc5IDIuMjUxcy0uMTYgMS42LS40NzkgMi4yNTJjLS4zMTkuNjUyLS43NzEgMS4xNTktMS4zNTQgMS41MjEtLjU4My4zNjEtMS4yNDguNTQyLTEuOTk0LjU0MnptMC0xLjAxN2MuNzY4IDAgMS4zNjQtLjI2NiAxLjc4OC0uNzk5LjQyNC0uNTMyLjYzNi0xLjI4NC42MzYtMi4yNTVzLS4yMTItMS43MjMtLjYzNi0yLjI1NWMtLjQyNC0uNTMyLTEuMDItLjc5OS0xLjc4OC0uNzk5LS43NjkgMC0xLjM2NS4yNjctMS43ODkuNzk5LS40MjQuNTMyLS42MzYgMS4yODQtLjYzNiAyLjI1NXMuMjEyIDEuNzIzLjYzNiAyLjI1NWMuNDI0LjUzMyAxLjAyLjc5OSAxLjc4OS43OTl6Ii8+PC9zdmc+" alt="INR">
                                    <span>INR</span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="currency-dropdown">
                                    <input type="text" class="currency-search" placeholder="Search">
                                    <div class="currency-list">
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwODk3QiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxLjQ2MyAyNy4zMzNjLS4wMDYuMDA2LS4wMTIuMDA2LS4wMTguMDEyLS4wMTIuMDA2LS4wMjQuMDEyLS4wMzcuMDEySDEzLjA2OWMtLjcwNyAwLTEuMjgxLS41NzQtMS4yODEtMS4yODF2LTEuNjgzaDEwLjk1NnYxLjY4M2MwIC4zMzktLjEzMy42NjQtLjM3MS45MDItLjExNS4xMTUtLjI0Ny4yMTEtLjM5LjI4MS0uMTY5LjA1Mi0uMzI2LjA4Ni0uNTIuMDg2em0xLjI4MS0xNi45NTJ2MTIuNDQ0SDExLjc4OFYxMC4zODFjMC0uNzA3LjU3NC0xLjI4MSAxLjI4MS0xLjI4MWg4LjM5NGMuNzA3IDAgMS4yODEuNTc0IDEuMjgxIDEuMjgxem0tOC4zOTQtMi41NjJoNi40MzJ2MS4yODFoLTYuNDMyVjcuODE5em0tLjMyMSAxNC42ODdjMC0uMzU0LS4yODctLjY0MS0uNjQxLS42NDFzLS42NDEuMjg3LS42NDEuNjQxYzAgLjM1NC4yODcuNjQxLjY0MS42NDFzLjY0MS0uMjg3LjY0MS0uNjQxem02LjQzMiAwaC0yLjU2MnYuNjQxaDIuNTYydi0uNjQxeiIvPjwvc3ZnPg==" alt="AED">
                                            <div class="currency-info">
                                                <span class="currency-name">AED</span>
                                                <span class="currency-full-name">United Arab Emirates dirham</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0UzMEExNyIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4LjY2NyAxMi4zMzNoLTIuNjY3djIuNjY3aC0yLjY2N3YyLjY2N2gyLjY2N3YyLjY2N2gyLjY2N3YtMi42NjdIMjEuMzM0VjE1aC0yLjY2N3oiLz48L3N2Zz4=" alt="AFN">
                                            <div class="currency-info">
                                                <span class="currency-name">AFN</span>
                                                <span class="currency-full-name">Afghan Afghani</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0YyQTExRiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="AMD">
                                            <div class="currency-info">
                                                <span class="currency-name">AMD</span>
                                                <span class="currency-full-name">Armenian Dram</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwNTVBNCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="AOA">
                                            <div class="currency-info">
                                                <span class="currency-name">AOA</span>
                                                <span class="currency-full-name">Angolan Kwanza</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzc1QkVGRiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="ARS">
                                            <div class="currency-info">
                                                <span class="currency-name">ARS</span>
                                                <span class="currency-full-name">Argentine Peso</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTJGRiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0IDIyaC00di00aDR2NHptLTYgMGgtNHYtNGg0djR6bS02IDBoLTR2LTRoNHY0em0xMi00aC00di00aDR2NHptLTYgMGgtNHYtNGg0djR6bS02IDBoLTR2LTRoNHY0eiIvPjwvc3ZnPg==" alt="AUD">
                                            <div class="currency-info">
                                                <span class="currency-name">AUD</span>
                                                <span class="currency-full-name">Australian Dollar</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="AZN">
                                            <div class="currency-info">
                                                <span class="currency-name">AZN</span>
                                                <span class="currency-full-name">Azerbaijani Manat</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwNTVBNCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BAM">
                                            <div class="currency-info">
                                                <span class="currency-name">BAM</span>
                                                <span class="currency-full-name">Bosnia-Herzegovina Convertible Mark</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BBD">
                                            <div class="currency-info">
                                                <span class="currency-name">BBD</span>
                                                <span class="currency-full-name">Barbadian Dollar</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BDT">
                                            <div class="currency-info">
                                                <span class="currency-name">BDT</span>
                                                <span class="currency-full-name">Bangladeshi Taka</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BGN">
                                            <div class="currency-info">
                                                <span class="currency-name">BGN</span>
                                                <span class="currency-full-name">Bulgarian Lev</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BHD">
                                            <div class="currency-info">
                                                <span class="currency-name">BHD</span>
                                                <span class="currency-full-name">Bahraini Dinar</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BIF">
                                            <div class="currency-info">
                                                <span class="currency-name">BIF</span>
                                                <span class="currency-full-name">Burundian Franc</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BMD">
                                            <div class="currency-info">
                                                <span class="currency-name">BMD</span>
                                                <span class="currency-full-name">Bermudan Dollar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="input-group">
                        <label>Receive</label>
                        <div class="currency-input">
                            <input type="text" placeholder="0">
                            <div class="currency-select">
                                <div class="currency-select-header">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGOTgwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1LjQ3IDEwLjYxNWMuMzQyLjQyNy41MTQuOTU4LjUxNCAxLjU5NyAwIC42ODItLjE5MiAxLjI1Ni0uNTc0IDEuNzIyLS4zODMuNDY2LS45NTYuNjk5LTEuNzIxLjY5OWgtMS41NDl2MS43NDhoLTEuMTgyVjguOTk4aDIuODMxYy43MjQgMCAxLjI4Mi4yMzkgMS42ODEuNzE3em0tMS4wNjggMi41MjRjLjIwNS0uMjM5LjMwNy0uNTY2LjMwNy0uOTgyIDAtLjQzOC0uMTI2LS43NzQtLjM3OS0xLjAwOC0uMjUzLS4yMzMtLjYyMS0uMzUtMS4xMDQtLjM1aC0xLjZWMTMuODNoMS42NDJjLjUwMiAwIC45MjktLjEzIDEuMTM0LS4zNjl6TTI4LjA1NyA4Ljk5OGgxLjE4NnY3LjM4M2gtMS4xODZWOC45OTh6TTIzLjU0MyAyMi4xNzJoLTEuMjM5bC0yLjQzOS0yLjQzOS0yLjQzOSAyLjQzOWgtMS4yMzdsMy4wNDYtMy4wNDUtMi44NzItMi44NzJoMS4yMzhsMi4yNjUgMi4yNjQgMi4yNjQtMi4yNjRoMS4yMzlsLTIuODczIDIuODcyIDMuMDQ3IDMuMDQ1ek0xMy40NTEgMjIuNTgyYy0uNzQ3IDAtMS40MTItLjE4MS0xLjk5NS0uNTQyLS41ODMtLjM2MS0xLjAzNS0uODY4LTEuMzU0LTEuNTIxLS4zMi0uNjUyLS40NzktMS40MDMtLjQ3OS0yLjI1MiAwLS44NDguMTYtMS41OTkuNDc5LTIuMjUxLjMxOS0uNjUyLjc3MS0xLjE1OCAxLjM1NC0xLjUyLjU4My0uMzYxIDEuMjQ4LS41NDIgMS45OTUtLjU0Mi43NDYgMCAxLjQxMS4xODEgMS45OTQuNTQyLjU4My4zNjEgMS4wMzUuODY3IDEuMzU0IDEuNTIuMzE5LjY1Mi40NzkgMS40MDMuNDc5IDIuMjUxcy0uMTYgMS42LS40NzkgMi4yNTJjLS4zMTkuNjUyLS43NzEgMS4xNTktMS4zNTQgMS41MjEtLjU4My4zNjEtMS4yNDguNTQyLTEuOTk0LjU0MnptMC0xLjAxN2MuNzY4IDAgMS4zNjQtLjI2NiAxLjc4OC0uNzk5LjQyNC0uNTMyLjYzNi0xLjI4NC42MzYtMi4yNTVzLS4yMTItMS43MjMtLjYzNi0yLjI1NWMtLjQyNC0uNTMyLTEuMDItLjc5OS0xLjc4OC0uNzk5LS43NjkgMC0xLjM2NS4yNjctMS43ODkuNzk5LS40MjQuNTMyLS42MzYgMS4yODQtLjYzNiAyLjI1NXMuMjEyIDEuNzIzLjYzNiAyLjI1NWMuNDI0LjUzMyAxLjAyLjc5OSAxLjc4OS43OTl6Ii8+PC9zdmc+" alt="ATOM">
                                    <span>ATOM</span>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="currency-dropdown">
                                    <input type="text" class="currency-search" placeholder="Search">
                                    <div class="currency-list">
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwODk3QiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxLjQ2MyAyNy4zMzNjLS4wMDYuMDA2LS4wMTIuMDA2LS4wMTguMDEyLS4wMTIuMDA2LS4wMjQuMDEyLS4wMzcuMDEySDEzLjA2OWMtLjcwNyAwLTEuMjgxLS41NzQtMS4yODEtMS4yODF2LTEuNjgzaDEwLjk1NnYxLjY4M2MwIC4zMzktLjEzMy42NjQtLjM3MS45MDItLjExNS4xMTUtLjI0Ny4yMTEtLjM5LjI4MS0uMTY5LjA1Mi0uMzI2LjA4Ni0uNTIuMDg2em0xLjI4MS0xNi45NTJ2MTIuNDQ0SDExLjc4OFYxMC4zODFjMC0uNzA3LjU3NC0xLjI4MSAxLjI4MS0xLjI4MWg4LjM5NGMuNzA3IDAgMS4yODEuNTc0IDEuMjgxIDEuMjgxem0tOC4zOTQtMi41NjJoNi40MzJ2MS4yODFoLTYuNDMyVjcuODE5em0tLjMyMSAxNC42ODdjMC0uMzU0LS4yODctLjY0MS0uNjQxLS42NDFzLS42NDEuMjg3LS42NDEuNjQxYzAgLjM1NC4yODcuNjQxLjY0MS42NDFzLjY0MS0uMjg3LjY0MS0uNjQxem02LjQzMiAwaC0yLjU2MnYuNjQxaDIuNTYydi0uNjQxeiIvPjwvc3ZnPg==" alt="ARS">
                                            <div class="currency-info">
                                                <span class="currency-name">ARS</span>
                                                <span class="currency-full-name">Argentine Peso</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTJGRiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0IDIyaC00di00aDR2NHptLTYgMGgtNHYtNGg0djR6bS02IDBoLTR2LTRoNHY0em0xMi00aC00di00aDR2NHptLTYgMGgtNHYtNGg0djR6bS02IDBoLTR2LTRoNHY0eiIvPjwvc3ZnPg==" alt="AUD">
                                            <div class="currency-info">
                                                <span class="currency-name">AUD</span>
                                                <span class="currency-full-name">Australian Dollar</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="AZN">
                                            <div class="currency-info">
                                                <span class="currency-name">AZN</span>
                                                <span class="currency-full-name">Azerbaijani Manat</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwNTVBNCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BAM">
                                            <div class="currency-info">
                                                <span class="currency-name">BAM</span>
                                                <span class="currency-full-name">Bosnia-Herzegovina Convertible Mark</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BBD">
                                            <div class="currency-info">
                                                <span class="currency-name">BBD</span>
                                                <span class="currency-full-name">Barbadian Dollar</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BDT">
                                            <div class="currency-info">
                                                <span class="currency-name">BDT</span>
                                                <span class="currency-full-name">Bangladeshi Taka</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BGN">
                                            <div class="currency-info">
                                                <span class="currency-name">BGN</span>
                                                <span class="currency-full-name">Bulgarian Lev</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BHD">
                                            <div class="currency-info">
                                                <span class="currency-name">BHD</span>
                                                <span class="currency-full-name">Bahraini Dinar</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BIF">
                                            <div class="currency-info">
                                                <span class="currency-name">BIF</span>
                                                <span class="currency-full-name">Burundian Franc</span>
                                            </div>
                                        </div>
                                        <div class="currency-option">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BMD">
                                            <div class="currency-info">
                                                <span class="currency-name">BMD</span>
                                                <span class="currency-full-name">Bermudan Dollar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <button class="verify-btn">Verify Identity</button> -->
                    <a href="./get-verify.php" class="verify-identity-btn">Verify Identity</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Deposit Section -->
    <div class="section" id="deposit">
        <div class="deposit-container">
            <h1>Deposit DKK</h1>
            
            <div class="deposit-form">
                <!-- Currency Selection -->
                <div class="input-group">
                    <label>Currency</label>
                    <div class="currency-input">
                        <div class="currency-select">
                            <div class="currency-select-header">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwODk3QiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxLjQ2MyAyNy4zMzNjLS4wMDYuMDA2LS4wMTIuMDA2LS4wMTguMDEyLS4wMTIuMDA2LS4wMjQuMDEyLS4wMzcuMDEySDEzLjA2OWMtLjcwNyAwLTEuMjgxLS41NzQtMS4yODEtMS4yODF2LTEuNjgzaDEwLjk1NnYxLjY4M2MwIC4zMzktLjEzMy42NjQtLjM3MS45MDItLjExNS4xMTUtLjI0Ny4yMTEtLjM5LjI4MS0uMTY5LjA1Mi0uMzI2LjA4Ni0uNTIuMDg2em0xLjI4MS0xNi45NTJ2MTIuNDQ0SDExLjc4OFYxMC4zODFjMC0uNzA3LjU3NC0xLjI4MSAxLjI4MS0xLjI4MWg4LjM5NGMuNzA3IDAgMS4yODEuNTc0IDEuMjgxIDEuMjgxem0tOC4zOTQtMi41NjJoNi40MzJ2MS4yODFoLTYuNDMyVjcuODE5em0tLjMyMSAxNC42ODdjMC0uMzU0LS4yODctLjY0MS0uNjQxLS42NDFzLS42NDEuMjg3LS42NDEuNjQxYzAgLjM1NC4yODcuNjQxLjY0MS42NDFzLjY0MS0uMjg3LjY0MS0uNjQxem02LjQzMiAwaC0yLjU2MnYuNjQxaDIuNTYydi0uNjQxeiIvPjwvc3ZnPg==" alt="AED">
                                <span>AED</span>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="currency-dropdown">
                                <input type="text" class="currency-search" placeholder="Search">
                                <div class="currency-list">
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwODk3QiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxLjQ2MyAyNy4zMzNjLS4wMDYuMDA2LS4wMTIuMDA2LS4wMTguMDEyLS4wMTIuMDA2LS4wMjQuMDEyLS4wMzcuMDEySDEzLjA2OWMtLjcwNyAwLTEuMjgxLS41NzQtMS4yODEtMS4yODF2LTEuNjgzaDEwLjk1NnYxLjY4M2MwIC4zMzktLjEzMy42NjQtLjM3MS45MDItLjExNS4xMTUtLjI0Ny4yMTEtLjM5LjI4MS0uMTY5LjA1Mi0uMzI2LjA4Ni0uNTIuMDg2em0xLjI4MS0xNi45NTJ2MTIuNDQ0SDExLjc4OFYxMC4zODFjMC0uNzA3LjU3NC0xLjI4MSAxLjI4MS0xLjI4MWg4LjM5NGMuNzA3IDAgMS4yODEuNTc0IDEuMjgxIDEuMjgxem0tOC4zOTQtMi41NjJoNi40MzJ2MS4yODFoLTYuNDMyVjcuODE5em0tLjMyMSAxNC42ODdjMC0uMzU0LS4yODctLjY0MS0uNjQxLS42NDFzLS42NDEuMjg3LS42NDEuNjQxYzAgLjM1NC4yODcuNjQxLjY0MS42NDFzLjY0MS0uMjg3LjY0MS0uNjQxem02LjQzMiAwaC0yLjU2MnYuNjQxaDIuNTYydi0uNjQxeiIvPjwvc3ZnPg==" alt="AED">
                                        <div class="currency-info">
                                            <span class="currency-name">AED</span>
                                            <span class="currency-full-name">United Arab Emirates dirham</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0UzMEExNyIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4LjY2NyAxMi4zMzNoLTIuNjY3djIuNjY3aC0yLjY2N3YyLjY2N2gyLjY2N3YyLjY2N2gyLjY2N3YtMi42NjdIMjEuMzM0VjE1aC0yLjY2N3oiLz48L3N2Zz4=" alt="AMD">
                                        <div class="currency-info">
                                            <span class="currency-name">AMD</span>
                                            <span class="currency-full-name">Armenian Dram</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzc1QkVGRiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="ARS">
                                        <div class="currency-info">
                                            <span class="currency-name">ARS</span>
                                            <span class="currency-full-name">Argentine Peso</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTJGRiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="AUD">
                                        <div class="currency-info">
                                            <span class="currency-name">AUD</span>
                                            <span class="currency-full-name">Australian Dollar</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="AZN">
                                        <div class="currency-info">
                                            <span class="currency-name">AZN</span>
                                            <span class="currency-full-name">Azerbaijani Manat</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwNTVBNCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BAM">
                                        <div class="currency-info">
                                            <span class="currency-name">BAM</span>
                                            <span class="currency-full-name">Bosnia-Herzegovina Convertible Mark</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BBD">
                                        <div class="currency-info">
                                            <span class="currency-name">BBD</span>
                                            <span class="currency-full-name">Barbadian Dollar</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BDT">
                                        <div class="currency-info">
                                            <span class="currency-name">BDT</span>
                                            <span class="currency-full-name">Bangladeshi Taka</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BGN">
                                        <div class="currency-info">
                                            <span class="currency-name">BGN</span>
                                            <span class="currency-full-name">Bulgarian Lev</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BHD">
                                        <div class="currency-info">
                                            <span class="currency-name">BHD</span>
                                            <span class="currency-full-name">Bahraini Dinar</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwOTVERiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BIF">
                                        <div class="currency-info">
                                            <span class="currency-name">BIF</span>
                                            <span class="currency-full-name">Burundian Franc</span>
                                        </div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="BMD">
                                        <div class="currency-info">
                                            <span class="currency-name">BMD</span>
                                            <span class="currency-full-name">Bermudan Dollar</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pay With Section -->
                <div class="input-group">
                    <label>Pay With</label>
                    <div class="payment-option zen-option">
                        <div class="payment-logo">
                            <img src="https://zen.com/favicon.ico" alt="ZEN.COM">
                        </div>
                        <div class="payment-info">
                            <h3>ZEN.COM</h3>
                            <p>Instant deposit with cards, wallets and other local payment methods</p>
                            <span class="fee">1.2% Fee</span>
                        </div>
                    </div>
                </div>

                <!-- Verify Identity Button for Deposit Section -->
                <a href="./get-verify.php" class="verify-identity-btn">Verify Identity</a>
                
            </div>
        </div>
    </div>

    <!-- Withdraw Section -->
    <div class="section" id="withdraw">
        <div class="withdraw-container">
            <h1>Withdraw</h1>
            
            <div class="withdraw-form">
                <!-- Currency Selection -->
                <div class="input-group">
                    <label>Currency</label>
                    <div class="currency-input">
                        <div class="currency-select">
                            <div class="currency-select-header">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwODk3QiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxLjQ2MyAyNy4zMzNjLS4wMDYuMDA2LS4wMTIuMDA2LS4wMTguMDEyLS4wMTIuMDA2LS4wMjQuMDEyLS4wMzcuMDEySDEzLjA2OWMtLjcwNyAwLTEuMjgxLS41NzQtMS4yODEtMS4yODF2LTEuNjgzaDEwLjk1NnYxLjY4M2MwIC4zMzktLjEzMy42NjQtLjM3MS45MDItLjExNS4xMTUtLjI0Ny4yMTEtLjM5LjI4MS0uMTY5LjA1Mi0uMzI2LjA4Ni0uNTIuMDg2em0xLjI4MS0xNi45NTJ2MTIuNDQ0SDExLjc4OFYxMC4zODFjMC0uNzA3LjU3NC0xLjI4MSAxLjI4MS0xLjI4MWg4LjM5NGMuNzA3IDAgMS4yODEuNTc0IDEuMjgxIDEuMjgxem0tOC4zOTQtMi41NjJoNi40MzJ2MS4yODFoLTYuNDMyVjcuODE5em0tLjMyMSAxNC42ODdjMC0uMzU0LS4yODctLjY0MS0uNjQxLS42NDFzLS42NDEuMjg3LS42NDEuNjQxYzAgLjM1NC4yODcuNjQxLjY0MS42NDFzLjY0MS0uMjg3LjY0MS0uNjQxem02LjQzMiAwaC0yLjU2MnYuNjQxaDIuNTYydi0uNjQxeiIvPjwvc3ZnPg==" alt="BRL">
                                <span>BRL</span>
                                <span class="balance">Balance: R$0.00</span>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="currency-dropdown">
                                <div class="search-container">
                                    <input type="text" class="currency-search" placeholder="Search">
                                </div>
                                <div class="currency-list">
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE4IDI0Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2em0wLTEwYy0yLjIwNiAwLTQgMS43OTQtNCA0czEuNzk0IDQgNCA0IDQtMS43OTQgNC00LTEuNzk0LTQtNC00eiIvPjwvc3ZnPg==" alt="CZK" class="currency-icon">
                                        <div class="currency-info">
                                            <div class="currency-name">CZK</div>
                                            <div class="currency-full-name">Czech Koruna</div>
                                        </div>
                                        <div class="currency-balance">Kč0.00</div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0M2MDAwMCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1LjUgMTMuNWgtMTV2OWgxNXoiLz48L3N2Zz4=" alt="DKK" class="currency-icon">
                                        <div class="currency-info">
                                            <div class="currency-name">DKK</div>
                                            <div class="currency-full-name">Danish Krone</div>
                                        </div>
                                        <div class="currency-balance">kr0.00</div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwNTVBNCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTE4IDNjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIC4xNjktLjAxOC4zMzMtLjAyMi41MDJMMTggMTcuNDAybC0xNC45NzggMS4xYy0uMDA0LS4xNjktLjAyMi0uMzMzLS4wMjItLjUwMkMzIDkuNzE2IDkuNzE2IDMgMTggM3oiLz48L3N2Zz4=" alt="EUR" class="currency-icon">
                                        <div class="currency-info">
                                            <div class="currency-name">EUR</div>
                                            <div class="currency-full-name">Euro</div>
                                        </div>
                                        <div class="currency-balance">€0.00</div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwNTVBNCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRDcwMCIgZD0iTTE4IDNjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIC4xNjktLjAxOC4zMzMtLjAyMi41MDJMMTggMTcuNDAybC0xNC45NzggMS4xYy0uMDA0LS4xNjktLjAyMi0uMzMzLS4wMjItLjUwMkMzIDkuNzE2IDkuNzE2IDMgMTggM3oiLz48L3N2Zz4=" alt="EURPS" class="currency-icon">
                                        <div class="currency-info">
                                            <div class="currency-name">EURPS</div>
                                            <div class="currency-full-name">EURPaysafe</div>
                                        </div>
                                        <div class="currency-balance">€0.00000000</div>
                                    </div>
                                    <div class="currency-option">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwMjQ3RCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI3LjI0IDIyLjVoLTE4LjQ4di05aDE4LjQ4eiIvPjxwYXRoIGZpbGw9IiNDRjE0MkIiIGQ9Ik0yNy4yNCAxNi41aC04LjI0di0zaDguMjR6TTguNzYgMTYuNWg4LjI0di0zSDguNzZ6TTI3LjI0IDE5LjVoLTguMjR2M2g4LjI0ek04Ljc2IDE5LjVoOC4yNHYzSDguNzZ6Ii8+PC9zdmc+" alt="GBP" class="currency-icon">
                                        <div class="currency-info">
                                            <div class="currency-name">GBP</div>
                                            <div class="currency-full-name">Pound Sterling</div>
                                        </div>
                                        <div class="currency-balance">£0.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Receive Method -->
                <div class="input-group">
                    <label>Receive Method</label>
                    <div class="payment-option">
                        <div class="payment-logo">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzAwODk3QiIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTh6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIxLjQ2MyAyNy4zMzNjLS4wMDYuMDA2LS4wMTIuMDA2LS4wMTguMDEyLS4wMTIuMDA2LS4wMjQuMDEyLS4wMzcuMDEySDEzLjA2OWMtLjcwNyAwLTEuMjgxLS41NzQtMS4yODEtMS4yODF2LTEuNjgzaDEwLjk1NnYxLjY4M2MwIC4zMzktLjEzMy42NjQtLjM3MS45MDItLjExNS4xMTUtLjI0Ny4yMTEtLjM5LjI4MS0uMTY5LjA1Mi0uMzI2LjA4Ni0uNTIuMDg2em0xLjI4MS0xNi45NTJ2MTIuNDQ0SDExLjc4OFYxMC4zODFjMC0uNzA3LjU3NC0xLjI4MSAxLjI4MS0xLjI4MWg4LjM5NGMuNzA3IDAgMS4yODEuNTc0IDEuMjgxIDEuMjgxem0tOC4zOTQtMi41NjJoNi40MzJ2MS4yODFoLTYuNDMyVjcuODE5em0tLjMyMSAxNC42ODdjMC0uMzU0LS4yODctLjY0MS0uNjQxLS42NDFzLS42NDEuMjg3LS42NDEuNjQxYzAgLjM1NC4yODcuNjQxLjY0MS42NDFzLjY0MS0uMjg3LjY0MS0uNjQxem02LjQzMiAwaC0yLjU2MnYuNjQxaDIuNTYydi0uNjQxeiIvPjwvc3ZnPg==" alt="P2P Express">
                        </div>
                        <div class="payment-info">
                            <h3>P2P Express</h3>
                            <p>Sell on Binance P2P</p>
                        </div>
                    </div>
                </div>

                <!-- Verify Identity Button -->
                 <a href="./get-verify.php" class="verify-identity-btn" >Verify Identity</a>
            </div>
        </div>
    </div>
</div>

<style>
/* Dark theme dropdown styles */
.currency-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
    background: #1E2128;
    border: 1px solid #2a2d38;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: none;
    padding: 16px;
}

.currency-dropdown.active {
    display: block;
}

.search-container {
    margin-bottom: 12px;
}

.currency-search {
    width: 100%;
    padding: 12px 16px;
    background: #242731;
    border: 1px solid #2a2d38;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
}

.currency-search::placeholder {
    color: #808191;
}

.currency-list {
    max-height: 300px;
    overflow-y: auto;
}

.currency-list::-webkit-scrollbar {
    width: 4px;
}

.currency-list::-webkit-scrollbar-track {
    background: #1E2128;
}

.currency-list::-webkit-scrollbar-thumb {
    background: #2a2d38;
    border-radius: 4px;
}

.currency-option {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s;
}

.currency-option:hover {
    background: #242731;
}

.currency-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 12px;
}

.currency-info {
    flex: 1;
}

.currency-name {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
}

.currency-full-name {
    color: #808191;
    font-size: 14px;
}

.currency-balance {
    color: #808191;
    font-size: 14px;
    margin-left: 12px;
}

/* Header styles */
.currency-select-header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: #1a1d26;
    border: 1px solid #2a2d38;
    border-radius: 8px;
    cursor: pointer;
}

.currency-select-header img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 12px;
}

.currency-select-header span {
    color: #fff;
    font-size: 16px;
}

.currency-select-header .balance {
    color: #808191;
    margin-left: auto;
    margin-right: 12px;
}

/* Withdraw specific styles */
.withdraw-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 40px 20px;
}

.withdraw-form .input-group {
    margin-bottom: 24px;
}

.withdraw-form .input-group label {
    display: block;
    color: #808191;
    font-size: 14px;
    margin-bottom: 8px;
}

.payment-option {
    background: #1a1d26;
    border: 1px solid #2a2d38;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.payment-logo img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}

.payment-info h3 {
    color: #fff;
    font-size: 16px;
    margin: 0 0 4px 0;
}

.payment-info p {
    color: #808191;
    font-size: 14px;
    margin: 0;
}

.verify-identity-btn {
    width: 100%;
    background: #fcd535;
    color: #1a1d26;
    border: none;
    border-radius: 8px;
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.verify-identity-btn:hover {
    background: #f0c923;
}
</style>

<script>
    // Handle main navigation tab switching
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and sections
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and corresponding section
            this.classList.add('active');
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Handle trade form tab switching
    document.querySelectorAll('.trade-tabs .tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.trade-tabs .tab').forEach(t => {
                t.classList.remove('active');
                t.classList.add('inactive');
            });
            this.classList.remove('inactive');
            this.classList.add('active');
        });
    });

    // Add this to your existing JavaScript
    document.addEventListener('DOMContentLoaded', function() {
        initializeCurrencyDropdown();
    });

    function initializeCurrencyDropdown() {
        const currencySelects = document.querySelectorAll('.currency-select');
        
        currencySelects.forEach(select => {
            const header = select.querySelector('.currency-select-header');
            const dropdown = select.querySelector('.currency-dropdown');
            const search = select.querySelector('.currency-search');
            const options = select.querySelectorAll('.currency-option');

            // Toggle dropdown
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                const isActive = dropdown.classList.contains('active');
                
                // Close all other dropdowns
                document.querySelectorAll('.currency-dropdown').forEach(d => {
                    d.classList.remove('active');
                });

                // Toggle current dropdown
                if (!isActive) {
                    dropdown.classList.add('active');
                    if (search) {
                        search.focus();
                    }
                }
            });

            // Handle search
            if (search) {
                search.addEventListener('input', (e) => {
                    const value = e.target.value.toLowerCase().trim();
                    options.forEach(option => {
                        const name = option.querySelector('.currency-name').textContent.toLowerCase();
                        const fullName = option.querySelector('.currency-full-name').textContent.toLowerCase();
                        const matches = name.includes(value) || fullName.includes(value);
                        option.style.display = matches ? 'flex' : 'none';
                    });
                });

                search.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }

            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', () => {
                    const img = option.querySelector('img').cloneNode(true);
                    const name = option.querySelector('.currency-name').textContent;
                    const fullName = option.querySelector('.currency-full-name').textContent;
                    
                    header.innerHTML = `
                        ${img.outerHTML}
                        <span>${name} ${fullName}</span>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                    
                    dropdown.classList.remove('active');
                    if (search) {
                        search.value = '';
                        options.forEach(opt => opt.style.display = 'flex');
                    }
                });
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.currency-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });

        // Prevent dropdown from closing when clicking inside
        document.querySelectorAll('.currency-dropdown').forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }
</script>


 <div class="how-to-buy">
            <h1>How to Buy Crypto</h1>
            <div class="steps-container">
                <div class="step-card">
                    <img src="./img/buy1.svg" alt="Payment" class="step-icon">
                    <h3 class="step-title" data-number="1.">Enter Amount & Select Payment</h3>
                    <p class="step-description">Enter the amount, select the available payment method, and choose the payment account or bind the payment card.</p>
                </div>
                <div class="step-card">
                    <img src="./img/buy2.svg" alt="Cart" class="step-icon">
                    <h3 class="step-title" data-number="2.">Confirm Order</h3>
                    <p class="step-description">Confirmation of transaction detail information, including trading pair quotes, fees, and other explanatory tips.</p>
                </div>
                <div class="step-card">
                    <img src="./img/buy3.svg" alt="Receive" class="step-icon">
                    <h3 class="step-title" data-number="3.">Receive Crypto</h3>
                    <p class="step-description">After successful payment, the purchased crypto will be deposited into your Spot or Funding Wallet.</p>
                </div>
            </div>
        </div>

<?php include "buy2.php"; ?>


        <div class="container">
            <div class="card">
            <h2>ATOM to TRY</h2>
            <ul>
                <li><span>0.5 ATOM</span><span>74.40 TRY</span></li>
                <li><span>1 ATOM</span><span>148.79 TRY</span></li>
                <li><span>5 ATOM</span><span>743.96 TRY</span></li>
                <li><span>10 ATOM</span><span>1,487.93 TRY</span></li>
                <li><span>50 ATOM</span><span>7,439.63 TRY</span></li>
                <li><span>100 ATOM</span><span>14,879.26 TRY</span></li>
                <li><span>500 ATOM</span><span>74,396.30 TRY</span></li>
                <li><span>1000 ATOM</span><span>148,792.59 TRY</span></li>
            </ul>
            </div>
            <div class="card">
            <h2>TRY to ATOM</h2>
            <ul>
                <li><span>0.5 TRY</span><span>0.0033604 ATOM</span></li>
                <li><span>1 TRY</span><span>0.0067208 ATOM</span></li>
                <li><span>5 TRY</span><span>0.0336038 ATOM</span></li>
                <li><span>10 TRY</span><span>0.0672076 ATOM</span></li>
                <li><span>50 TRY</span><span>0.3360382 ATOM</span></li>
                <li><span>100 TRY</span><span>0.6720765 ATOM</span></li>
                <li><span>500 TRY</span><span>3.3603823 ATOM</span></li>
                <li><span>1000 TRY</span><span>6.7207646 ATOM</span></li>
            </ul>
            </div>
        </div>
    </div>
        <style>



            .container {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            }

            .card {
            background-color: #14161e;
            border-radius: 10px;
            padding: 20px 30px;
            flex: 1 1 300px;
            max-width: 450px;
            min-width: 250px;
            box-shadow: 0 0 10px rgba(255,255,255,0.05);
            }

            .card h2 {
            margin-bottom: 20px;
            font-size: 1.5rem;
            color: #ffffff;
            }

            .card ul {
            list-style: none;
            }

            .card ul li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #2a2d38;
            font-size: 1rem;
            }

            .card ul li:last-child {
            border-bottom: none;
            }

            @media (max-width: 768px) {
            .container {
                flex-direction: column;
                align-items: center;
            }
            }

        </style>


        <section class="buy-conversions-section">
        <div class="buy-container">
            <h2 class="buy-heading">Popular Cosmos Conversions</h2>
            <p class="buy-subheading">
            A selection of other popular currency conversions of Cosmos to various fiat currencies.
            </p>

            <div class="buy-grid">
            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to USD</span>
                <img src="img/buy7.png" alt="USD Icon">
                </div>
                <p>1 ATOM = 4.0860457 USD</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to TRY</span>
                <img src="img/buy5.png" alt="TRY Icon">
                </div>
                <p>1 ATOM = 156.33 TRY</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to RUB</span>
                <img src="images/rub.svg" alt="RUB Icon">
                </div>
                <p>1 ATOM = 332.24 RUB</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to EUR</span>
                <img src="img/buy8.png" alt="EUR Icon">
                </div>
                <p>1 ATOM = 3.5524081 EUR</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to SAR</span>
                <img src="img/buy9.png" alt="SAR Icon">
                </div>
                <p>1 ATOM = 15.32 SAR</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to AUD</span>
                <img src="img/buy10.png" alt="AUD Icon">
                </div>
                <p>1 ATOM = 6.3742312 AUD</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to BRL</span>
                <img src="img/buy10.png" alt="BRL Icon">
                </div>
                <p>1 ATOM = 23.78 BRL</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to VND</span>
                <img src="img/buy11.png" alt="VND Icon">
                </div>
                <p>1 ATOM = 106,392.38 VND</p>
            </div>

            <div class="buy-card">
                <div class="buy-flex">
                <span>ATOM to INR</span>
                <img src="img/buy12.png" alt="INR Icon">
                </div>
                <p>1 ATOM = 348.09 INR</p>
            </div>
            </div>
        </div>
        </section>

        <style>
                        /* Base Styles */
            .buy-conversions-section {
            background-color: #0d111c;
            padding: 50px 20px;
            color: #ffffff;
            font-family: 'Segoe UI', sans-serif;
            }

            .buy-container {
            max-width: 1200px;
            margin: 0 auto;
            }

            .buy-heading {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
            }

            .buy-subheading {
            font-size: 16px;
            color: #bbbbbb;
            margin-bottom: 40px;
            }

            /* Grid Layout */
            .buy-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            }

            .buy-card {
            background-color: #1a1e2d;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
            }

            .buy-card:hover {
            transform: translateY(-5px);
            }

            .buy-flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            }

            .buy-flex img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            }

            /* Text inside cards */
            .buy-card span {
            font-weight: 600;
            font-size: 16px;
            }

            .buy-card p {
            color: #ccc;
            font-size: 15px;
            }

            /* Responsive Breakpoints */
            @media (max-width: 992px) {
            .buy-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .buy-heading {
                font-size: 28px;
            }
            }

            @media (max-width: 600px) {
            .buy-grid {
                grid-template-columns: 1fr;
            }

            .buy-heading {
                font-size: 24px;
                text-align: center;
            }

            .buy-subheading {
                text-align: center;
                font-size: 14px;
            }
            }
            
            
        
        </style>


    <script>
        const cryptos = [
            { 
                symbol: 'BNBUSDT', 
                name: 'BNB', 
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0iI2YzYmEyZiI+PHBhdGggZD0iTTE2IDBoNC4ydjMyaC00LjJ6Ii8+PHBhdGggZD0iTTIyLjEgNS45bDMgMy0xNS4yIDE1LjItMyAzTDIyLjEgNS45eiIvPjxwYXRoIGQ9Ik0yMi4xIDI2LjFsMyAzTDkuOSAxMy45bC0zLTN6Ii8+PHBhdGggZD0iTTAgMTZoNC4ydjMySDAweiIvPjwvZz48L3N2Zz4='
            },
            { 
                symbol: 'BTCUSDT', 
                name: 'BTC', 
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0iI2Y3OTMxYSI+PHBhdGggZD0iTTE1LjYgMTMuMmMuMi0xLjQtLjktMi4yLTIuNG0tMi43bC41LTEuOS0xLjItLjMtLjUgMS45LS45LjIuNSAxLjkuMmMuNS4yLjYuNiAxIC42IDIuMiAxLjQgNS43IDEuNCA1LjdzLjEuMi0uMy4yYy0uNC4xLS42LjMtLjYuM2wuOSAzLjJjLjUuMi45LjQgMS40LjZsLjUgMS45IDEuMi4zLjUtMS45LjkuMi41IDEuOSAxLjIuMy0uNS0xLjljMS42LjMgMi44LjIgMy4zLTEuMi40LS45LjItMi43LTEuMi0zLjQuOC0uMiAxLjQtLjcgMS42LTEuOHptLTIuOSAzLjdjLS44LS4yLTEuNi0uNC0yLjQtLjZsLS42LTIuM2MuOC4yIDEuNi40IDIuNC42LjkuMiAxLjguNSAyLjcuNy0uOC4xLTEuNi4xLTIuMS0uMXYxLjd6bTEuMi00LjNjLS43LS4yLTEuNS0uNC0yLjItLjZsLS41LTIuMWMuNy4yIDEuNC40IDIuMS42LjguMiAxLjcuNCAyLjUuNi0uNy4yLTEuNC4xLTEuOS0uMXYxLjZ6Ii8+PC9nPjwvc3ZnPg=='
            },
            { 
                symbol: 'ETHUSDT', 
                name: 'ETH', 
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0iIzYyN2VlYSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTYgMGwxNiAxNi0xNiA0LTE2LTR6Ii8+PHBhdGggZD0iTTE2IDI0bDE2LTguODlMMTYgMzJsLTE2LTguODl6Ii8+PC9nPjwvc3ZnPg=='
            },
            { 
                symbol: 'SOLUSDT', 
                name: 'SOL', 
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZD0iTTM1LjcgMTcuM0wyNy4xIDguN2MtLjMtLjMtLjYtLjUtMS0uNUg2LjljLS40IDAtLjcuMi0uOS41LS4yLjMtLjIuNyAwIDFsOC42IDguNmMuMy4zLjYuNSAxIC41aDE5LjJjLjQgMCAuNy0uMi45LS41LjItLjMuMi0uNyAwLTF6IiBmaWxsPSIjODU0N0U1Ii8+PHBhdGggZD0iTTM1LjcgMjkuM2wtOC42LTguNmMtLjMtLjMtLjYtLjUtMS0uNUg2LjljLS40IDAtLjcuMi0uOS41LS4yLjMtLjIuNyAwIDFsOC42IDguNmMuMy4zLjYuNSAxIC41aDE5LjJjLjQgMCAuNy0uMi45LS41LjItLjMuMi0uNyAwLTFsLTguNi04LjZ6IiBmaWxsPSIjMDBGRkE5Ii8+PHBhdGggZD0iTTI3LjEgMjAuN2MtLjMtLjMtLjYtLjUtMS0uNUg2LjljLS40IDAtLjcuMi0uOS41LS4yLjMtLjIuNyAwIDFsOC42IDguNmMuMy4zLjYuNSAxIC41aDE5LjJjLjQgMCAuNy0uMi45LS41LjItLjMuMi0uNyAwLTFsLTguNi04LjZ6IiBmaWxsPSIjMDBGRkE5Ii8+PC9zdmc+'
            },
            { 
                symbol: 'PIXELUSDT', 
                name: 'PIXEL', 
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4MjQ3ZTUiLz48cGF0aCBkPSJNMjEuNDEgMTcuODdsLTIuNzgtMi43OCAyLjc4LTIuNzhjLjM0LS4zNC4zNC0uOS4wMS0xLjI0bC0xLjQyLTEuNDJjLS4xNy0uMTctLjQtLjI2LS42Mi0uMjYtLjIyIDAtLjQ1LjA5LS42Mi4yNmwtMi43OCAyLjc4LTIuNzgtMi43OGMtLjE3LS4xNy0uNC0uMjYtLjYyLS4yNi0uMjIgMC0uNDUuMDktLjYyLjI2bC0xLjQyIDEuNDJjLS4zNC4zNC0uMzQuOS0uMDEgMS4yNGwyLjc4IDIuNzgtMi43OCAyLjc4Yy0uMzQuMzQtLjM0LjktLjAxIDEuMjRsMS40MiAxLjQyYy4xNy4xNy40LjI2LjYyLjI2LjIyIDAgLjQ1LS4wOS42Mi0uMjZsMi43OC0yLjc4IDIuNzggMi43OGMuMTcuMTcuNC4yNi42Mi4yNi4yMiAwIC40NS0uMDkuNjItLjI2bDEuNDItMS40MmMuMzQtLjM0LjM0LS45LjAxLTEuMjR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'
            }
        ];

        let priceData = {};
        let socket;

        function formatPrice(price) {
            if (price >= 1000) {
                return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            } else if (price >= 1) {
                return price.toFixed(2);
            } else {
                return price.toFixed(5);
            }
        }

        function updateUI() {
            const cryptoList = document.getElementById('crypto-list');
            let html = '';

            cryptos.forEach(crypto => {
                const data = priceData[crypto.symbol];
                if (data) {
                    const formattedPrice = formatPrice(parseFloat(data.price));
                    const change = parseFloat(data.priceChangePercent);
                    const changeClass = change >= 0 ? 'change-up' : 'change-down';
                    const changeSign = change >= 0 ? '+' : '';

                    html += `
                        <div class="crypto-item">
                            <div class="crypto-name">
                                <img src="${crypto.icon}" alt="${crypto.name}" class="crypto-icon">
                                ${crypto.name}
                            </div>
                            <div class="crypto-price">$${formattedPrice}</div>
                            <div class="${changeClass}">
                                ${changeSign}${change.toFixed(2)}%
                            </div>
                        </div>
                    `;
                }
            });

            cryptoList.innerHTML = html;
        }

        function connectWebSocket() {
            // Create WebSocket connection
            socket = new WebSocket('wss://stream.binance.com:9443/ws');

            socket.onopen = function() {
                console.log('WebSocket Connected');
                
                // Subscribe to all crypto pairs
                const subscribeMsg = {
                    method: "SUBSCRIBE",
                    params: cryptos.map(crypto => `${crypto.symbol.toLowerCase()}@ticker`),
                    id: 1
                };
                
                socket.send(JSON.stringify(subscribeMsg));
            };

            socket.onmessage = function(event) {
                const data = JSON.parse(event.data);
                if (data.s) { // If it's a ticker message
                    priceData[data.s] = {
                        price: data.c,
                        priceChangePercent: data.P
                    };
                    updateUI();
                }
            };

            socket.onclose = function() {
                console.log('WebSocket Disconnected');
                // Attempt to reconnect after 1 second
                setTimeout(connectWebSocket, 1000);
            };

            socket.onerror = function(error) {
                console.error('WebSocket Error:', error);
                socket.close();
            };
        }

        // Initial connection
        connectWebSocket();

        // Handle tab switching
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.classList.add('inactive');
                });
                this.classList.remove('inactive');
                this.classList.add('active');
            });
        });
    </script>
</body>
<?php include "footer.php";?>
</html>

