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
<html lang="en" dir="ltr" path-prefix="">

<head>
    
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no" />
    <meta charset="utf-8" />
    <!-- <title data-shuvi-head="true">How to Complete Identity Verification for a Personal Account? | Binance Identity Verification,Binance verification,Binance account verification</title> -->
    <meta name="keywords" content="Binance Identity Verification,Binance verification,Binance account verification"
        data-shuvi-head="true" />
    <meta name="description" content="How to Complete Identity Verification for a Personal Account? Identity verification or Know Your Customer (KYC) standards are designed to protect your account against fraud, corruption, money launderi" data-shuvi-head="true"
    />

    <meta property="og:type" content="website" data-shuvi-head="true" />
    <meta property="og:title" content="How to Complete Identity Verification for a Personal Account? | Binance Identity Verification,Binance verification,Binance account verification" data-shuvi-head="true" />
    <meta property="og:site_name" content="Binance" data-shuvi-head="true" />
    <meta property="og:image" content="https://public.bnbstatic.com/static/images/cms/faq-og-1.jpg" data-shuvi-head="true" />
    <meta name="og:description" content="How to Complete Identity Verification for a Personal Account? Identity verification or Know Your Customer (KYC) standards are designed to protect your account against fraud, corruption, money launderi" data-shuvi-head="true"
    />
 
    <meta http-equiv="etag" content="c6e8226e0bbd07a97f9beff3c1fe8a393f0b2e00" />
    <meta name="msapplication-TileImage" content="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" data-shuvi-head="true" />
    <meta name="apple-mobile-web-app-capable" content="yes" data-shuvi-head="true" />
    <meta name="format-detection" content="email=no" data-shuvi-head="true" />

    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/support-center" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/binance-chat" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/essential/essential@0.3.47.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.18.2.0.js" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/commons.ff1bf95d.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/layout-e084.e73e4304.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/page-6080.41d1a90e.js" as="script" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.717.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.717.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/data@1.3.717.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.717.min.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/webpack-runtime.dfaf29a6.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/common/framework.4d28bf2b.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/main.5639ddf4.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/config/remote-config.js" />
    <link rel="shortcut icon" href="./bin.bnbstatic.com/static/images/common/favicon.ico" />
    <link rel="apple-touch-icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <link rel="icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
   
    <script id="OneTrust-sdk" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
        (function() {
            const agent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
            const REGEX_MATCH_CLIENT_TYPE = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/;
            const isMiniApp = typeof window !== 'undefined' && window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction;
            if (REGEX_MATCH_CLIENT_TYPE.test(agent) || isMiniApp) {
                return null;
            }

            function getJSON(str) {
                try {
                    return JSON.parse(str);
                } catch (e) {
                    return {};
                }
            }
            var AutoBlockScriptMap = getJSON('{"binance.com":"https://cdn.cookielaw.org/consent/e21a0e13-40c2-48a6-9ca2-57738356cdab/OtAutoBlock.js","binance.info":"https://cdn.cookielaw.org/consent/03246444-2043-432d-afae-413a91f535e9/OtAutoBlock.js","binance.me":"https://cdn.cookielaw.org/consent/39df5304-ea83-4bd5-8550-d57bca54d95a/OtAutoBlock.js"}');
            var SDKStubInfoMap = getJSON('{"binance.com":{"src":"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","hash":"e21a0e13-40c2-48a6-9ca2-57738356cdab"},"binance.info":{"src":"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","hash":"03246444-2043-432d-afae-413a91f535e9"},"binance.me":{"src":"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","hash":"39df5304-ea83-4bd5-8550-d57bca54d95a"}}');
            var domain = location.hostname.split('.').slice(-2).join('.');

            function isString(str) {
                return str && typeof str === 'string';
            };
            var AutoBlockScript = AutoBlockScriptMap[domain];
            var stubInfo = SDKStubInfoMap[domain] || {};
            var SDKStubSrc = stubInfo.src;
            var SDKStubHash = stubInfo.hash;
            var injectAutoBlock = isString(AutoBlockScript);
            var injectSDKStub = isString(SDKStubSrc) && isString(SDKStubHash);
            if (injectAutoBlock) {
                var script = document.createElement('script');
                script.src = AutoBlockScript;
                script.type = 'text/javascript';
                script.async = false;
                document.head.appendChild(script);
            }
            if (injectSDKStub) {
                var htmlLang = document.documentElement.lang ? .substr(0, 2) || 'en';
                var script = document.createElement('script');
                script.src = SDKStubSrc;
                script.type = 'text/javascript';
                script.async = false;
                script.setAttribute('charSet', 'UTF-8');
                script.setAttribute('data-domain-script', SDKStubHash);
                script.setAttribute('data-language', htmlLang);
                document.head.appendChild(script);
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.innerHTML = 'function OptanonWrapper() {};';
                s.nonce = 'a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab';
                document.head.appendChild(s);
                var ss = document.createElement('script');
                ss.src = './bin.bnbstatic.com/static/one-trust/onetrust-trigger.js';
                ss.type = 'text/javascript';
                script.async = false;
                ss.setAttribute('charSet', 'UTF-8');
                ss.setAttribute('data-domain-script', SDKStubHash);
                document.head.appendChild(ss);
            }
        }())
    </script>
    <script id="Reporter-init" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
        window._bn_reporter = window._bn_reporter || [];
        window._bn_reporter_version = '4.0.12';

        function reportEvent(data) {
            window._bn_reporter.push(data);
        }
        reportEvent({
            key: "init",
            data: {
                "packageName": "faq-anns-ui",
                "apiId": "cc1ljun9gpbp8ciciolg",
                "apiDomain": "https://api.saasexch.com",
                "ssr": true,
                "COMMIT_HEAD": "c6e8226e0bbd07a97f9beff3c1fe8a393f0b2e00",
                "pikaVersion": "0.3.56",
                "traceId": "f817bc9b-37eb-4fd8-b901-93ed626a3a2d",
                "analyticsId": "faq-anns-ui,COM,clztltzz23290610t2x5ur7wesm"
            }
        });
        const now = Date.now();
        reportEvent({
            key: "traceReporter",
            data: {
                name: 'PIKA_HTML_ENTRY_START',
                startTime: now,
                timestamp: now,
                id: 1,
                duration: 0,
                endTime: now
            }
        });
        window.addEventListener('error', function(event) {
            try {
                var _URL, _URL2;
                var target = event.target || event.srcElement;
                var isTarget = ['LINK', 'SCRIPT', 'IMG'].indexOf(target.nodeName) !== -1;
                if (!isTarget) {
                    return;
                }
                var link = target.src || target.href;
                if (window.location.href.indexOf(link) === 0) {
                    return;
                }
                var data = {
                    event: {
                        phost: window.location.host,
                        ppath: window.location.pathname,
                        host: (_URL = new URL(link)) === null || _URL === void 0 ? void 0 : _URL.host,
                        path: (_URL2 = new URL(link)) === null || _URL2 === void 0 ? void 0 : _URL2.pathname,
                        net_err_exist: true
                    }
                };
                reportEvent({
                    key: "reportMonitorEvent",
                    data: {
                        data: data
                    }
                });
            } catch (e) {
                console.error('static resource monitor', e);
            }
        }, true);
    </script>
    <script nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
        ! function() {
            try {
                (t = function() {
                    try {
                        return document.getElementsByTagName("head")[0]
                    } catch (e) {
                        return null
                    }
                }()) && ~("undefined" != typeof navigator ? navigator.userAgent : "").indexOf(" BNC/") && ((e = document.createElement("style")).setAttribute("type", "text/css"), e.innerHTML = ".hidden-header-in-bnc {display:none;} .hidden-in-bnc-app {display:none !important;}", t.appendChild(e))
            } catch (e) {}
            var e, t
        }();
    </script>
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/f4578a23.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/2cbe51a6.chunk.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/header@1.3.717.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.717.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.717.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.717.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.717.css" />
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
            --color-BasicBg: #181A20;
            background-color: var(--color-BasicBg);
            --color-SecondaryBg: #0B0E11;
            --color-Input: #2B3139;
            --color-InputLine: #474D57;
            --color-CardBg: #1E2329;
            --color-Vessel: #1E2329;
            --color-Line: #2B3139;
            --color-DisableBtn: #2B3139;
            --color-DisabledText: #5E6673;
            --color-DisableText: #5E6673;
            --color-TertiaryText: #848E9C;
            --color-SecondaryText: #B7BDC6;
            --color-PrimaryText: #EAECEF;
            color: var(--color-PrimaryText);
            --color-RedGreenBgText: #FFFFFF;
            --color-EmphasizeText: #FF693D;
            --color-TextOnGray: #EAECEF;
            --color-TextOnYellow: #202630;
            --color-IconNormal: #848E9C;
            --color-LiteBg1: #202630;
            --color-LiteBg2: #191A1F;
            --color-BtnBg: #FCD535;
            --color-PrimaryYellow: #F0B90B;
            --color-TextLink: #F0B90B;
            --color-TradeBg: #0B0E11;
            --color-TextToast: #A37200;
            --color-DepthSellBg: #35141D;
            --color-SellHover: #FF707E;
            --color-Sell: #F6465D;
            --color-TextSell: #F6465D;
            --color-DepthBuyBg: #102821;
            --color-BuyHover: #32D993;
            --color-Buy: #2EBD85;
            --color-TextBuy: #2EBD85;
            --color-Error: #F6465D;
            --color-SuccessBg: #102821;
            --color-Success: #2EBD85;
            --color-TagBg: #474D57;
            --color-Grid: #2B3139;
            --color-Placeholder: #474D57;
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
</head>

<body style="margin-top: 100px;">
    <div id="__APP_TOP_PORTAL"></div>
  
            <div id="__APP">
                <div class="theme-root dark bg-bg1 ltr" style="--color-sell:#F6465D;--color-textSell:#F6465D;--color-sellHover:#FF707E;--color-depthSellBg:#35141D;--color-buy:#0ECB81;--color-textBuy:#0ECB81;--color-buyHover:#32D993;--color-depthBuyBg:#102821;--color-line:#2B3139;--color-outlineHover:#6A4403;--color-primary:#FCD535;--color-primaryHover:#F0B90B;--color-error:#F6465D;--color-errorBg:#35141D;--color-success:#0ECB81;--color-successBg:#102821;--color-disable:#474D57;--color-iconNormal:#848E9C;--color-textWhite:#FFFFFF;--color-textGray:#EAECEF;--color-textBlack:#0B0E11;--color-textPrimary:#EAECEF;--color-textSecondary:#B7BDC6;--color-textThird:#848E9C;--color-textDisabled:#5E6673;--color-textBrand:#F0B90B;--color-textToast:#A37200;--color-bg:#181A20;--color-bg1:#181A20;--color-bg2:#0B0E11;--color-bg3:#2B3139;--color-bg4:#5E6673;--color-bg6:#202630;--color-bg7:#191A1F;--color-popupBg:#1E2329;--color-badgeBg:#2D2A20;--color-selectedBg:#1E2026;--color-gradientBrand:linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%);--color-gradientPrimary:linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%);--color-BasicBg:#181A20;--color-SecondaryBg:#0B0E11;--color-Input:#2B3139;--color-InputLine:#474D57;--color-CardBg:#1E2329;--color-Vessel:#1E2329;--color-Line:#2B3139;--color-DisableBtn:#2B3139;--color-DisabledText:#5E6673;--color-DisableText:#5E6673;--color-TertiaryText:#848E9C;--color-SecondaryText:#B7BDC6;--color-PrimaryText:#EAECEF;--color-RedGreenBgText:#FFFFFF;--color-EmphasizeText:#FF693D;--color-TextOnGray:#EAECEF;--color-TextOnYellow:#202630;--color-IconNormal:#848E9C;--color-LiteBg1:#202630;--color-LiteBg2:#191A1F;--color-BtnBg:#FCD535;--color-PrimaryYellow:#F0B90B;--color-TextLink:#F0B90B;--color-TradeBg:#0B0E11;--color-TextToast:#A37200;--color-DepthSellBg:#35141D;--color-SellHover:#FF707E;--color-Sell:#F6465D;--color-TextSell:#F6465D;--color-DepthBuyBg:#102821;--color-BuyHover:#32D993;--color-Buy:#2EBD85;--color-TextBuy:#2EBD85;--color-Error:#F6465D;--color-SuccessBg:#102821;--color-Success:#2EBD85;--color-TagBg:#474D57;--color-Grid:#2B3139;--color-Placeholder:#474D57;--color-ToastBg:#707A8A;--color-TwoColorIcon:#CACED3;--color-ErrorBg:rgba(246, 70, 93, 0.1);--color-BadgeBg:rgba(240,185,11,0.1)">
                    <div class="px-[15px] tablet:pl-10 tablet:pr-10 desktop:pl-10 desktop:pr-10">
                        <div class="max-w-[1200px] m-auto">
                            <div class="grid grid-cols-[min-content_minmax(0,1fr)_min-content] gap-12 pt-[26px] pb-[120px]">
                                <div class="cms-skeleton table w-full is-active md:w-[200px] lg:w-[240px] min-w-full md:min-w-[200px] lg:min-w-[240px] pt-3">
                                    <div class="cms-skeleton-content w-full table-cell align-top">
                                        <h3 class="cms-skeleton-title bg-Line h-4 rounded-2" style="width:38%"></h3>
                                        <ul class="cms-skeleton-list list-none m-0 p-0 mt-[28px]">
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none"></li>
                                            <li class="bg-Line h-4 rounded-2 list-none" style="width:61%"></li>
                                        </ul>
                                    </div>
                                </div>
                               
                                <div class="tablet:p-6 tablet:border tablet:border-solid tablet:border-Line tablet:rounded-xl">
                                    <div class="bn-flex flex-col gap-2 desktop:gap-4 mb-6 tablet:-mx-6 tablet:mb-4 tablet:px-6 tablet:pb-4 tablet:border-0 tablet:border-b tablet:border-solid tablet:border-Line mobile:mb-6">
                                        <h1 class="typography-headline4 text-PrimaryText m-0">How to Complete Identity Verification for a Personal Account?</h1>
                                        <div class="bn-flex flex items-center gap-4">
                                            <div class="typography-subtitle2 text-TertiaryText mobile:text-SecondaryText">2019-04-23 03:59</div>
                                        </div>
                                    </div>
                                    <div id="support_article">
                                        <div class="faq-anns-articleContent faq-anns-articleNew">
                                            <div class="richtext-container">
                                                <div class="bn-tabs bn-tabs__primary-gray cms-tabs">
                                                    <div role="tablist" aria-orientation="horizontal" class="bn-tab-list bn-tab-list__primary-gray">
                                                        <div role="tab" aria-selected="true" class="bn-tab bn-tab__primary-gray active" id="bn-tab-cfbb7c0fc6797dec" aria-controls="bn-tab-pane-cfbb7c0fc6797dec" tabindex="0" data-tab-key="cfbb7c0fc6797dec">Website</div>
                                                        <div role="tab" aria-selected="false" class="bn-tab bn-tab__primary-gray" id="bn-tab-6542f67335803279" aria-controls="bn-tab-pane-6542f67335803279" tabindex="-1" data-tab-key="6542f67335803279">App</div>
                                                    </div>
                                                    <div class="bn-tab-pane-list">
                                                        <div role="tabpanel" aria-hidden="false" id="bn-tab-pane-cfbb7c0fc6797dec" aria-labelledby="bn-tab-cfbb7c0fc6797dec" class="bn-tab-pane active">
                                                            <p class="richtext-p">
                                                                <div class="bn-flex flex-col gap-3">
                                                                    <div class="cms-video relative" style="padding:56.25% 0 0 0">
                                                                        <div class="w-full h-full absolute left-0 top-0">
                                                                        <iframe src="./img/comoros0.jpeg" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" name="cms_embed" allowfullscreen=""
                                                                                msallowfullscreen="true" width="100%" height="100%">
                                                                        </iframe>
                                                                        </div>
                                                                    </div>
                                                                    <div class="bn-flex justify-center typography-caption1 text-TertiaryText mobile:text-SecondaryText">Video Tutorial</div>
                                                                </div>
                                                            </p>
                                                            <h3 class="richtext-h3"><strong class="richtext-strong">Where can I get my personal account verified on theMyCryptoBank website? </strong></h3>
                                                            <p class="richtext-p">You can access the identity verification from <strong class="richtext-strong">[Account] </strong>- <strong class="richtext-strong">[</strong><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                    href="/en/my/settings/profile"><strong class="richtext-strong">Identification</strong></a><strong class="richtext-strong">]</strong>, or click <strong class="richtext-strong">[Verify]</strong>                                                                / <strong class="richtext-strong">[Get verified]</strong> from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your
                                                                Binance account. To increase your limit, please complete the respective identity verification level. </p>
                                                            <section class="cms-accordion" data-bn-type="accordion" data-bn-accordion-expand="false">
                                                                <div class="bn-flex accordion-header">
                                                                    <div class="accordion-title"><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a" href="/en/support/faq/f36339596002454a9eb2a2228b2695f7"><strong class="richtext-strong">Why do I need to complete identity verification?</strong></a></div>
                                                                    <div
                                                                        class="accordion-action"><svg class="bn-svg accordion-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg></div>
                                                        </div>
                                                        <div class="accordion-body">
                                                            <div class="accordion-body-inner">
                                                                <p class="richtext-p">Identity verification or <a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a" href="https://academy.binance.com/en/articles/what-is-KYC-know-your-customer">Know Your Customer (KYC)</a>                                                                    standards are designed to protect your account against fraud, corruption, money laundering, and terrorist financing.</p>
                                                                <p class="richtext-p">All new users are required to complete [Verified] to access Binance products and service offerings, including cryptocurrency deposits and trades. </p>
                                                                <p class="richtext-p">Existing users who haven’t completed the [Verified] verification will have their account permissions temporarily changed to “Withdraw Only,” with services limited to fund withdrawal, order
                                                                    cancelation, position close, and redemption. </p>
                                                                <p class="richtext-p">Based on your region or selected payment channels, you may need to increase your identity verification level to improve your account security. For more details, please refer to <a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                        href="/en/support/faq/f36339596002454a9eb2a2228b2695f7">Why Do I Need to Complete Identity Verification for My Binance Account?</a>.</p>
                                                            </div>
                                                        </div>
                                                        </section>
                                                        <p class="richtext-p"><i class="richtext-i">To learn how to complete identity verification via MyCryptoBank app, click to view the “App” tab on this page.</i></p>
                                                        <h3 class="richtext-h3"><strong class="richtext-strong">How to complete identity verification for a personal account on theMyCryptoBank website?</strong></h3>
                                                        <p class="richtext-p">1. Log in to your personal Binance account and mouseover the profile icon. Click <strong class="richtext-strong">[Account]</strong> and go to <strong class="richtext-strong">[</strong><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                href="/en/my/settings/profile"><strong class="richtext-strong">Identification</strong></a><strong class="richtext-strong">]</strong>.</p>
                                                        <figure class="richtext-figure image image_resized" style="width:624px">
                                                            <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="./public.bnbstatic.com/image/cms/article/body/202409/ff0fc66b0149497b08ae204c71de0191.png"
                                                                    data-src="https://public.bnbstatic.com/image/cms/article/body/202409/ff0fc66b0149497b08ae204c71de0191.png" /></div>
                                                        </figure>
                                                        <p class="richtext-p">2. Click <strong class="richtext-strong">[Get Verified]</strong>.</p>
                                                        <figure class="richtext-figure image image_resized" style="width:624px">
                                                            <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202307/5c9b991e3f14f7869e367395773def31.png"
                                                                    data-src="https://public.bnbstatic.com/image/cms/article/body/202307/5c9b991e3f14f7869e367395773def31.png" /></div>
                                                        </figure>
                                                        <p class="richtext-p">3. Select your country of residence. </p>
                                                        <figure class="richtext-figure image image_resized" style="width:624px">
                                                            <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="./public.bnbstatic.com/image/cms/article/body/202307/35a87d77228230b033f10c65abb9b5b8.png"
                                                                    data-src="./public.bnbstatic.com/image/cms/article/body/202307/35a87d77228230b033f10c65abb9b5b8.png" /></div>
                                                        </figure>
                                                        <p class="richtext-p">4. Enter your personal information and click <strong class="richtext-strong">[Continue]</strong>.</p>
                                                        <p class="richtext-p"><span class="richtext-span" style="color:hsl(0,75%,60%)"><strong class="richtext-strong">Please make sure that all the information entered is consistent with your ID documents.</strong></span> You
                                                            won’t be able to change it once confirmed.</p>
                                                        <figure class="richtext-figure image image_resized" style="width:624px">
                                                            <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="./public.bnbstatic.com/image/cms/article/body/202307/213b9c6f29d3a294c755a7993d53a662.png"
                                                                    data-src="./public.bnbstatic.com/image/cms/article/body/202307/213b9c6f29d3a294c755a7993d53a662.png" /></div>
                                                        </figure>
                                                        <figure class="richtext-figure image image_resized" style="width:624px">
                                                            <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="./public.bnbstatic.com/image/cms/article/body/202307/14ce561e0efb8bc3203473a57cf6772f.png"
                                                                    data-src="./public.bnbstatic.com/image/cms/article/body/202307/14ce561e0efb8bc3203473a57cf6772f.png" /></div>
                                                        </figure>
                                                        <p class="richtext-p">5. Next, you’ll need to verify your ID documents. You can take a photo with your phone camera, or upload photos. Choose an option and click <strong class="richtext-strong">[Continue]</strong>.</p>
                                                        <p
                                                            class="richtext-p">6. You’ll need to complete a liveness check. Follow the instructions to take a video of yourself.</p>
                                                            <p class="richtext-p"><strong class="richtext-strong">Note: </strong></p>
                                                            <ul class="richtext-ul">
                                                                <li class="richtext-li">Please enable camera access on your device.</li>
                                                                <li class="richtext-li"><span class="richtext-span" style="color:hsl(0,75%,60%)"><strong class="richtext-strong">Do not wear hats, glasses, or use filters, and make sure that the lighting is sufficient.</strong></span></li>
                                                            </ul>
                                                            <figure class="richtext-figure image image_resized" style="width:422px">
                                                                <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202308/65f7621562ae3aca78406648640ae03b.png"
                                                                        data-src="https://public.bnbstatic.com/image/cms/article/body/202308/65f7621562ae3aca78406648640ae03b.png" /></div>
                                                            </figure>
                                                            <figure class="richtext-figure image image_resized" style="width:426px">
                                                                <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202308/59a89ff3d2a80798fe492f51608ea622.png"
                                                                        data-src="https://public.bnbstatic.com/image/cms/article/body/202308/59a89ff3d2a80798fe492f51608ea622.png" /></div>
                                                            </figure>
                                                            <figure class="richtext-figure image image_resized" style="width:460px">
                                                                <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202308/c6337108c3fa408f2b9f41315742bb05.png"
                                                                        data-src="https://public.bnbstatic.com/image/cms/article/body/202308/c6337108c3fa408f2b9f41315742bb05.png" /></div>
                                                            </figure>
                                                            <p class="richtext-p">7. MyCryptoBank  will review your data in a timely manner. Once your application has been verified, we will send you a notification.</p>
                                                            <ul class="richtext-ul">
                                                                <li class="richtext-li"><strong class="richtext-strong">Do not refresh your browser during the process.</strong></li>
                                                            </ul>
                                                            <h3 class="richtext-h3"><strong class="richtext-strong">Frequently Asked Questions</strong></h3>
                                                            <section class="cms-accordion" data-bn-type="accordion" data-bn-accordion-expand="false">
                                                                <div class="bn-flex accordion-header">
                                                                    <div class="accordion-title"><strong class="richtext-strong">1. What are my daily withdrawal limits after completing identity verification?</strong></div>
                                                                    <div class="accordion-action"><svg class="bn-svg accordion-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg></div>
                                                                </div>
                                                                <div class="accordion-body">
                                                                    <div class="accordion-body-inner">
                                                                        <p class="richtext-p">Binance reviews its products and services on an ongoing basis to determine changes and improvements. Please refer to the<strong class="richtext-strong"> [Identification] </strong>page
                                                                            for the most updated withdrawal limits. </p>
                                                                        <p class="richtext-p">All new users are required to complete the <span class="richtext-span" style="color:#e64c4c"><strong class="richtext-strong">[Verified] verification</strong></span><span class="richtext-span"
                                                                                style="color:t.primary"> </span>to access Binance products and service offerings, including cryptocurrency deposits and trades. Existing users who haven’t completed the [Verified]
                                                                            verification will have their account permissions temporarily changed to<span class="richtext-span" style="color:t.primary"> </span><span class="richtext-span" style="color:#e64c4c">“Withdraw Only”, </span>with
                                                                            services limited to fund withdrawal, order cancelation, position close, and redemption. For more information, please refer to our <a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                                href="/en/support/announcement/51bf294e26324211a4731ca998e110ca">announcement</a>.</p>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section class="cms-accordion" data-bn-type="accordion" data-bn-accordion-expand="false">
                                                                <div class="bn-flex accordion-header">
                                                                    <div class="accordion-title"><strong class="richtext-strong">2. How to update/reset my identity verification information?</strong></div>
                                                                    <div class="accordion-action"><svg class="bn-svg accordion-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg></div>
                                                                </div>
                                                                <div class="accordion-body">
                                                                    <div class="accordion-body-inner">
                                                                        <p class="richtext-p">If your identity information has changed and one of the following conditions is met, you can go to the <strong class="richtext-strong">[</strong><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                                href="/en/my/settings/profile/reset-kyc"><strong class="richtext-strong">Update Identity Verification</strong></a><strong class="richtext-strong">] </strong>page to update. </p>
                                                                        <p
                                                                            class="richtext-p">You may also contact our customer service agents via <a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                                href="/en/chat">Binance Support</a> to update your information. Enter “How to update Identity Verification” and click on the link <strong class="richtext-strong">[</strong>
                                                                            <a
                                                                                class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a" href="/en/my/settings/profile/reset-kyc"><strong class="richtext-strong">Click here to reset KYC</strong></a><strong class="richtext-strong">] </strong>provided in the Customer Service response. </p>
                                                                                <p class="richtext-p">Reasons for updating your identity verification include: </p>
                                                                                <p class="richtext-p">1. The documents have expired; </p>
                                                                                <p class="richtext-p">2. The name on the document has changed; </p>
                                                                                <p class="richtext-p">3. The ID number on the document has changed; </p>
                                                                                <p class="richtext-p">4. The nationality has changed; </p>
                                                                                <p class="richtext-p">5. Update or replace your existing documents to meet specific fiat channels’ requirements; </p>
                                                                                <p class="richtext-p">6. Change the name to a system-recognizable language (e.g., from local-language ID card to English-language passport);</p>
                                                                                <p class="richtext-p">7. Update documents to meet Binance Card requirements.</p>
                                                                                <p class="richtext-p"><strong class="richtext-strong">Please note:</strong></p>
                                                                                <ul class="richtext-ul">
                                                                                    <li class="richtext-li">Please read the declaration carefully before clicking <strong class="richtext-strong">[Confirm Update]</strong>.</li>
                                                                                    <li class="richtext-li">You cannot transfer your account to another person or substitute another person’s ID for your ID.</li>
                                                                                </ul>
                                                                                <p class="richtext-p"><strong class="richtext-strong">Steps: </strong></p>
                                                                                <p class="richtext-p">1. Go to the<strong class="richtext-strong"> [</strong><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                                        href="/en/my/settings/profile/reset-kyc"><strong class="richtext-strong">Identity Verification Update</strong></a><strong class="richtext-strong">]</strong> page. Select
                                                                                    the reason for the update and carefully read the declaration. Check the <strong class="richtext-strong">[I understand and agree to the declaration]</strong> box and click
                                                                                    <strong
                                                                                        class="richtext-strong"> [Confirm Update]</strong>. </p>
                                                                                <figure class="richtext-figure image image_resized" style="width:552px">
                                                                                    <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202208/bbe79160181c737c03889e45ae98c3b2.png"
                                                                                            data-src="https://public.bnbstatic.com/image/cms/article/body/202208/bbe79160181c737c03889e45ae98c3b2.png" /></div>
                                                                                </figure>
                                                                                <p class="richtext-p">2. Enter the required information and click<strong class="richtext-strong"> [Continue]</strong>. </p>
                                                                                <figure class="richtext-figure image image_resized" style="width:566px">
                                                                                    <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202208/9430f5f2054d9bcf76164b82a2994e29.png"
                                                                                            data-src="https://public.bnbstatic.com/image/cms/article/body/202208/9430f5f2054d9bcf76164b82a2994e29.png" /></div>
                                                                                </figure>
                                                                                <p class="richtext-p">3. Please wait patiently for the system to process your update request. Once complete, you will receive an email notification.</p>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section class="cms-accordion" data-bn-type="accordion" data-bn-accordion-expand="false">
                                                                <div class="bn-flex accordion-header">
                                                                    <div class="accordion-title"><strong class="richtext-strong">3. How long does it take for Binance to verify my identity verification?</strong></div>
                                                                    <div class="accordion-action"><svg class="bn-svg accordion-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg></div>
                                                                </div>
                                                                <div class="accordion-body">
                                                                    <div class="accordion-body-inner">
                                                                        <p class="richtext-p">Submitted documents are usually reviewed within 48 hours. However, it may take longer in some particular cases.</p>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <section class="cms-accordion" data-bn-type="accordion" data-bn-accordion-expand="false">
                                                                <div class="bn-flex accordion-header">
                                                                    <div class="accordion-title"><strong class="richtext-strong">4. Is identity verification safe?</strong></div>
                                                                    <div class="accordion-action"><svg class="bn-svg accordion-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg></div>
                                                                </div>
                                                                <div class="accordion-body">
                                                                    <div class="accordion-body-inner">
                                                                        <p class="richtext-p">Yes, completing identity verification on MyCryptoBank is safe and it helps us make our platform secure for you and everyone else. Your documents are also confidential with us.</p>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <p class="richtext-p"><strong class="richtext-strong">To learn more about your MyCryptoBank account, please visit the </strong><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                    href="/en/support/faq/account-functions?c=1&amp;amp;navId=1"><strong class="richtext-strong">Account Functions FAQs</strong></a><strong class="richtext-strong"> page.</strong></p>
                                                            <p class="richtext-p">
                                                            </p>
                                                    </div>
                                                    <div role="tabpanel" aria-hidden="true" id="bn-tab-pane-6542f67335803279" aria-labelledby="bn-tab-6542f67335803279" style="display:none" class="bn-tab-pane">
                                                        <h3 class="richtext-h3"><strong class="richtext-strong">Where can I get my personal account verified on the MyCryptoBank app? </strong></h3>
                                                        <p class="richtext-p">You can access the identity verification from <strong class="richtext-strong">[Account Center] </strong>- <strong class="richtext-strong">[Unverified]</strong>, or tap <strong class="richtext-strong">[Verify Now]</strong>                                                            from the app homepage. You will see your current verification level on the page, which determines the trading limit of your MyCryptoBankaccount. To increase your limit, please complete the respective
                                                            identity verification level. </p>
                                                        <section class="cms-accordion" data-bn-type="accordion" data-bn-accordion-expand="false">
                                                            <div class="bn-flex accordion-header">
                                                                <div class="accordion-title"><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a" href="/en/support/faq/f36339596002454a9eb2a2228b2695f7"><strong class="richtext-strong">Why do I need to complete identity verification?</strong></a></div>
                                                                <div
                                                                    class="accordion-action"><svg class="bn-svg accordion-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z" fill="currentColor"></path></svg></div>
                                                    </div>
                                                    <div class="accordion-body">
                                                        <div class="accordion-body-inner">
                                                            <p class="richtext-p">Identity verification or <a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a" href="https://academy.binance.com/en/articles/what-is-KYC-know-your-customer">Know Your Customer (KYC)</a>                                                                standards are designed to protect your account against fraud, corruption, money laundering, and terrorist financing.</p>
                                                            <p class="richtext-p">All new users are required to complete [Verified] to access MyCryptoBank products and service offerings, including cryptocurrency deposits and trades. </p>
                                                            <p class="richtext-p">Existing users who haven’t completed the [Verified] verification will have their account permissions temporarily changed to “Withdraw Only,” with services limited to fund withdrawal, order cancelation,
                                                                position close, and redemption. </p>
                                                            <p class="richtext-p">Based on your region or selected payment channels, you may need to increase your identity verification level to improve your account security. For more details, please refer to <a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                    href="/en/support/faq/f36339596002454a9eb2a2228b2695f7">Why Do I Need to Complete Identity Verification for My MyCryptoBank Account?</a></p>
                                                        </div>
                                                    </div>
                                                    </section>
                                                    <h3 class="richtext-h3"><strong class="richtext-strong">How to complete identity verification for a personal account on the MyCryptoBank app?</strong></h3>
                                                    <p class="richtext-p">1. Log in to your MyCryptoBank account and tap <strong class="richtext-strong">[Verify] </strong>or<strong class="richtext-strong"> [Verify Identity]</strong> on the app homepage.</p>
                                                    <figure class="richtext-figure image image_resized"
                                                        style="width:345px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202406/9641ff14018a23094788e15c87a2a481.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202406/9641ff14018a23094788e15c87a2a481.png" /></div>
                                                    </figure>
                                                    <p class="richtext-p">Alternatively, tap the account center icon and the <strong class="richtext-strong">[Unverified]</strong> button.</p>
                                                    <figure class="richtext-figure image image_resized" style="width:624px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202406/71bca01b07c5374e8e4bfef9d71d9058.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202406/71bca01b07c5374e8e4bfef9d71d9058.png" /></div>
                                                    </figure>
                                                    <p class="richtext-p"><br class="richtext" />2. You will be redirected to the Verification Center screen. Tap <strong class="richtext-strong">[Get Verified]</strong>.<br class="richtext" />Select your country of residence
                                                        and you’ll see a list of verifications required for your country/region. Tap <strong class="richtext-strong">[Continue]</strong>. </p>
                                                    <figure class="richtext-figure image image_resized" style="width:624px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202406/be2bd83f4d2f4c54ae86e1c5ba883366.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202406/be2bd83f4d2f4c54ae86e1c5ba883366.png" /></div>
                                                    </figure>
                                                    <figure class="richtext-figure image image_resized" style="width:324px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202406/b36d3a80dff2264f7f9b0d9994da1359.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202406/b36d3a80dff2264f7f9b0d9994da1359.png" /></div>
                                                    </figure>
                                                    <p class="richtext-p">3. Enter your personal information and tap <strong class="richtext-strong">[Continue]</strong>.</p>
                                                    <p class="richtext-p"><span class="richtext-span" style="color:hsl(0,75%,60%)"><strong class="richtext-strong">Please make sure that all the information entered is consistent with your ID documents.</strong></span> You won’t
                                                        be able to change it once confirmed.</p>
                                                    <figure class="richtext-figure image image_resized" style="width:624px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202307/42c40a18b7c0ec2d53553e59d0552e38.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202307/42c40a18b7c0ec2d53553e59d0552e38.png" /></div>
                                                    </figure>
                                                    <p class="richtext-p">4. Next, you will need to upload pictures of your ID documents. Please choose the type of ID and the country your documents were issued. Most users can choose to verify with a passport, ID card, or driver’s
                                                        license.<strong class="richtext-strong"> Please refer to the respective options offered for your country.</strong></p>
                                                    <figure class="richtext-figure image image_resized" style="width:309px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202307/fd6ec0f6ce7de63a066d978f6c2b554d.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202307/fd6ec0f6ce7de63a066d978f6c2b554d.png" /></div>
                                                    </figure>
                                                    <p class="richtext-p">5. Follow the instructions to take photos of your document. Your photos should clearly show the full ID document.</p>
                                                    <p class="richtext-p">For example, if you are using an ID card, you have to take photos of the front and back of your ID card. </p>
                                                    <p class="richtext-p"><strong class="richtext-strong">Note:</strong> Please enable camera access on your device. </p>
                                                    <figure class="richtext-figure image image_resized" style="width:624px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202307/fa8c4fc73004d968fd2810a4aad84a5e.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202307/fa8c4fc73004d968fd2810a4aad84a5e.png" /></div>
                                                    </figure>
                                                    <p class="richtext-p">6. After uploading the document photos, the system will ask you to do a liveness check. Center your face in the frame and follow the instructions to complete it. <span class="richtext-span" style="color:hsl(0,75%,60%)"><strong class="richtext-strong">Please make sure your whole face is clearly visible, centered, and your eyes are open. Do not wear hats, glasses, or use filters, and make sure that the lighting is sufficient. </strong></span></p>
                                                    <figure
                                                        class="richtext-figure image image_resized" style="width:399px">
                                                        <div class="bn-flex relative justify-center article-image-container"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFit richtext-img" mode="aspectFit" src="https://public.bnbstatic.com/image/cms/article/body/202307/6e621e9f41aef42b6b2bb9385fd486a8.png"
                                                                data-src="https://public.bnbstatic.com/image/cms/article/body/202307/6e621e9f41aef42b6b2bb9385fd486a8.png" /></div>
                                                        </figure>
                                                        <p class="richtext-p">7. After completing the process, please wait patiently. MyCryptoBank will review your data in a timely manner. Once your application has been verified, we will send you an email notification.</p>
                                                        <ul class="richtext-ul">
                                                            <li class="richtext-li"><strong class="richtext-strong">Do not refresh or quit the App during the process.</strong></li>
                                                        </ul>
                                                        <p class="richtext-p"><strong class="richtext-strong">To learn more about your MyCryptoBank account, please visit the </strong><a class="hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer text-TextLink richtext-a"
                                                                href=""><strong class="richtext-strong">Account Functions FAQs</strong></a><strong class="richtext-strong"> page.</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[262px]">
                        <div class="bn-flex flex-col gap-6">
                            <div class="bn-flex flex-col gap-4">
                                <div class="hidden noH5:block relative w-fit"><button class="bn-button bn-button__primary data-size-middle rounded-m flex gap-1 bg-Input"><svg class="bn-svg w-4 h-4 text-PrimaryText" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 10a3.5 3.5 0 10-3.476-3.09L8.62 9.216a3.5 3.5 0 100 5.568l4.403 2.306a3.5 3.5 0 101.16-2.214L9.94 12.652a3.52 3.52 0 000-1.304l4.245-2.224A3.487 3.487 0 0016.5 10z" fill="currentColor"></path></svg><div class="text-PrimaryText">Share</div></button></div>
                                <div
                                    class="bn-textField bn-textField__line data-size-middle data-gap-size-normal faq-search-input faq-header-search-input w-full">
                                    <div class="bn-textField-prefix"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z" fill="currentColor"></path></svg></div><input
                                        aria-label="Search" class="bn-textField-input" placeholder="Search" spellcheck="false" autoComplete="off" value="" /></div>
                        </div>
                        <div class="bn-flex flex-row gap-3 tablet:flex-row-reverse tablet:justify-between desktop:flex-col desktop:items-center"><svg xmlns="http://www.w3.org/2000/svg" class="bn-svg flex-shrink-0 w-12 h-12 tablet:w-[96px] tablet:h-[96px] desktop:w-[58px] desktop:h-[58px]" viewBox="0 0 58 58"><path fill="#F8D33A" d="M24.721 15.959 3.631 27.976 29 42.433l21.09-12.019L24.72 15.96ZM50.097 30.413 24.722 15.958 29 13.52l25.376 14.456-4.279 2.437Z"></path><path fill="#F0B90B" d="M29 58V42.432L3.626 27.976v15.569L29.001 58Z"></path><path fill="#DA3300" fill-rule="evenodd" d="m15.795 47.194-1.467-9.126c0-.892.657-1.238 1.467-.771.81.466 1.467 1.565 1.467 2.456l-1.467 7.44ZM14.69 46.802l-4.235-9.469a2.006 2.006 0 0 1-.083-.984c.092-.455.407-.727.877-.67.748.09 1.607.973 1.917 1.975l1.525 9.146v.002ZM7.395 38.582l6.36 8.37-4.286-9.46c-.573-.953-1.502-1.494-2.077-1.193a.811.811 0 0 0-.395.562c-.102.459.03 1.103.398 1.72ZM13.136 47.623l-7.51-5.995c-.66-.68-1.014-1.654-.877-2.317.018-.087.046-.17.083-.25.31-.647 1.17-.544 1.917.228l6.391 8.334h-.004ZM18.462 50.684l7.51 2.64c.747.088 1.104-.653.799-1.654a3.395 3.395 0 0 0-.986-1.511 1.82 1.82 0 0 0-.935-.476l-6.391.99.003.011ZM23.522 45.148c-.487-.422-1.03-.594-1.413-.394l-4.285 4.538 6.36-1.062c.575-.302.575-1.324 0-2.282-.176-.3-.4-.57-.662-.8ZM16.9 48.06v.01l4.236-4.602c.31-.646-.045-1.795-.799-2.567a3.672 3.672 0 0 0-.182-.173c-.702-.612-1.453-.652-1.739-.057l-1.525 7.394.01-.004ZM15.795 48.67c-.852-.49-1.542-.126-1.542.812v.12l3.074 1.745v-.099c.01-.938-.676-2.088-1.532-2.578ZM26.202 54.732l-7.527-2.71.434.342 8.566 4.876v-.051c0-.892-.663-1.992-1.473-2.457ZM3.915 43.544v.17l8.403 4.786.585.211-7.528-5.939c-.802-.466-1.46-.12-1.46.772Z" clip-rule="evenodd"></path><g filter="url(#a)"><path fill="#fff" d="M7.357 27.976v-3.14c0-.652.174-1.293.503-1.858a3.719 3.719 0 0 1 1.373-1.357l16.055-9.148a7.506 7.506 0 0 1 7.426 0l16.051 9.148c.57.325 1.044.793 1.373 1.358.329.564.502 1.205.501 1.858v3.139L29.001 40.312 7.357 27.976Z"></path></g><path fill="#fff" d="m50.097 25.224-1.864-1.062-.373.213v2.13l2.237-1.281Z"></path><path fill="#D0980B" d="M29.001 58V42.432l21.09-12.019v15.568L29.002 58Z"></path><path fill="#5C34AD" d="M38.807 40.682 35.041 48.3l.545-7.49c.407-1.428 1.457-2.607 2.347-2.642.89-.035 1.281 1.089.874 2.514ZM41.32 45.231l-5.476 3.69 4.24-7.25c.917-1.031 1.937-1.07 2.279-.088.342.982-.125 2.61-1.042 3.648ZM41.255 47.722l-5.451 2.764 3.106 1.87 3.104-1.767a4.98 4.98 0 0 0 .117-.35c.402-1.425.011-2.551-.876-2.517ZM34.938 52.086l.052 2.501 1.598-.91-1.65-1.591ZM33.568 55.398l.192-2.616-1.729 3.492 1.537-.876ZM29 58l.813-.464 3.143-5.374L29 54.827v3.172ZM29 52.62l3.995-2.027-3.98-2.398h-.02L29 52.62ZM33.714 41.912l.15 7.08-3.474-3.342c-.341-.984.125-2.617 1.042-3.65.917-1.034 1.94-1.07 2.282-.088ZM35.041 50.806c.29-.643.24-1.291-.11-1.447-.351-.155-.87.24-1.16.884-.288.643-.239 1.291.112 1.447.35.155.869-.24 1.158-.884Z"></path><path fill="#D0980B" d="M50.098 45.981V30.413l4.279-2.437v15.569l-4.28 2.436Z"></path><path fill="#F8D33A" d="m50.097 16.893-2.237 1.27-25.379-14.45 2.237-1.269L29 0l25.376 14.457-4.279 2.436ZM22.483 3.715 3.629 14.458 29 28.913 47.855 18.17 22.483 3.715Z"></path><path fill="#F0B90B" fill-rule="evenodd" d="m45.25 17.137 1.928-1.094 3.686-2.099L29.001 1.488l-3.69 2.106-1.927 1.094L7.14 13.944 29 26.398l16.245-9.256-21-11.964L45.25 17.137Z" clip-rule="evenodd"></path><path fill="#F0B90B" d="m40.67 22.266-2.238 1.27L13.057 9.077l2.236-1.27 4.28-2.437 25.375 14.457-4.279 2.438Z"></path><path fill="#F0B90B" d="m17.332 22.266 2.237 1.27L44.945 9.077l-2.237-1.27-4.28-2.437-25.376 14.457 4.28 2.438ZM29 37.068v-8.155L3.626 14.458v8.154l25.376 14.456Z"></path><path fill="#D0980B" d="M29.001 37.068v-8.155l25.376-14.455v8.154L29 37.068Z"></path><path fill="#F8D33A" d="m19.367 52.533-6.391-3.65.078-29.055 6.517 3.714-.204 28.991Z"></path><path fill="#F0B90B" d="m38.583 52.533 6.392-3.65-.079-29.055-6.517 3.714.204 28.991Z"></path><path fill="#D0980B" d="m15.75 11.412 6.811 3.031 2.716-1.587-6.926-7.188-2.876 1.428c-.043.023-.086.045-.128.069-1.733.974-1.473 3.558.403 4.247Z"></path><path fill="#F8D33A" d="m25.615 5.169 3.386 5.575-6.439 3.7L19.846 10c-1.171-2.127-2.12-3.419-4.474-2.798l6.462-3.255a2.868 2.868 0 0 1 2.14-.153 2.846 2.846 0 0 1 1.641 1.375Z"></path><path fill="#D0980B" d="m42.294 11.412-6.79 3.031-2.237-1.27 6.426-7.505 2.876 1.428c.043.023.086.045.128.069 1.735.974 1.473 3.558-.403 4.247Z"></path><path fill="#F8D33A" d="M32.43 5.168 29 10.743l6.519 3.714 2.7-4.617c1.171-2.126 2.1-3.26 4.46-2.639l-6.462-3.255a2.868 2.868 0 0 0-2.145-.155 2.845 2.845 0 0 0-1.643 1.377Z"></path><path fill="#F0B90B" d="m29 18.17 6.52-3.713L29 10.743l-6.519 3.714 6.52 3.712Z"></path><path fill="#F8D33A" d="m29.001 18.17 6.519-3.713 4.847-.686a3.59 3.59 0 0 1 2.894.88 3.544 3.544 0 0 1 1.171 2.77 3.527 3.527 0 0 1-.556 1.76 3.558 3.558 0 0 1-1.372 1.244l-3.006 1.539a4.208 4.208 0 0 1-3.994-.089L29 18.17Z"></path><path fill="#D0980B" d="m29.001 18.17 5.694-1.621a3.59 3.59 0 0 1 2.894.88 3.544 3.544 0 0 1 1.171 2.77c-.053 1.27-.86 2.65-2.617 2.016l-7.142-4.046Z"></path><path fill="#F8D33A" d="m29.097 18.17-6.517-3.713-4.85-.686a3.59 3.59 0 0 0-2.892.88 3.541 3.541 0 0 0-1.172 2.77c.026.626.219 1.233.558 1.76.339.528.812.957 1.372 1.244l3 1.534a4.207 4.207 0 0 0 3.995-.089l6.506-3.7Z"></path><path fill="#D0980B" d="m29.097 18.17-5.694-1.621a3.59 3.59 0 0 0-2.893.88 3.544 3.544 0 0 0-1.172 2.77c.053 1.27.861 2.65 2.619 2.016l7.14-4.046Z"></path><path fill="#E4435A" d="m51.88 38.88.944-6.216.94 5.187a2.029 2.029 0 0 1-.94 1.635c-.526.28-.943.009-.943-.605ZM47.419 38.18l4.053-5.45-2.723 6.302c-.368.639-.964.964-1.332.726-.368-.238-.367-.935.002-1.577ZM46.124 32.929l4.792-1.494-4.792 3.736c-.529.284-.941.013-.941-.607a2.033 2.033 0 0 1 .94-1.635ZM53.814 30.625c.347-.647.318-1.336-.066-1.54-.384-.203-.977.156-1.324.803-.347.646-.318 1.336.066 1.539.384.204.977-.156 1.324-.802Z"></path><defs><filter id="a" width="46.214" height="31.753" x="5.891" y="10.025" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=".733"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_97_22103"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_97_22103" result="shape"></feBlend></filter></defs></svg>
                            <div
                                class="bn-flex flex-col items-start gap-3 tablet:justify-between desktop:items-center tablet:gap-10">
                                <div class="bn-flex flex-col gap-2 text-start desktop:text-center">
                                    <h2 class="hidden tablet:block typography-headline5">Register to get rewards</h2>
                                    <p class="typography-body3">Register Now - Get up to 100 USDT in trading fee rebate (for verified users)</p>
                                </div><a href="#" class="no-underline"><button class="bn-button bn-button__primary data-size-small w-fit">Register Now</button></a></div>
                    </div>
                    <div class="bn-flex flex-col gap-6">
                        <h2 class="typography-subtitle6">Related Articles</h2>
                        <div class="grid gap-6 grid-cols-1">
                            <div class="bn-flex flex-col gap-1">
                                <a class="bn-balink text-PrimaryText hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer no-underline w-fit" href="/en/support/faq/detail/f36339596002454a9eb2a2228b2695f7" role="link">
                                    <h3 class="typography-body3">Why Do I Need to Complete Identity Verification for My MyCryptoBank Account?</h3>
                                </a>
                            </div>
                            <div class="bn-flex flex-col gap-1">
                                <a class="bn-balink text-PrimaryText hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer no-underline w-fit" href="/en/support/faq/detail/360015552032" role="link">
                                    <h3 class="typography-body3">How to Complete Entity Verification (KYB) on MyCryptoBank: Step-by-Step Guide</h3>
                                </a>
                            </div>
                            <div class="bn-flex flex-col gap-1">
                                <a class="bn-balink text-PrimaryText hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer no-underline w-fit" href="/en/support/faq/detail/5f93f32905c0492eb36e908f26351178" role="link">
                                    <h3 class="typography-body3">How to Request/Provide Signatures for MyCryptoBank Entity Verification Documents Online</h3>
                                </a>
                            </div>
                            <div class="bn-flex flex-col gap-1">
                                <a class="bn-balink text-PrimaryText hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer no-underline w-fit" href="/en/support/faq/detail/5843ae03965047598db1023b3b1fce04" role="link">
                                    <h3 class="typography-body3">How to Verify My, MyCryptoBank Account? (EEA Countries)</h3>
                                </a>
                            </div>
                            <div class="bn-flex flex-col gap-1">
                                <a class="bn-balink text-PrimaryText hover:text-PrimaryYellow active:text-PrimaryYellow focus:text-PrimaryYellow cursor-pointer no-underline w-fit" href="/en/support/faq/detail/e742b9bf6d2a4aa5ad2c2b5dbd83d702" role="link">
                                    <h3 class="typography-body3">How to Use the Verification Collaborators Function in MyCryptoBank Entity Verification</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
           <?php include "footer.php"; ?>
            <script id="custom-console" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                try {
                    if (!Boolean(localStorage.getItem("enableLog"))) {
                        window.console.log = window.console.warn = window.console.info = window.console.debug = function noop() {};
                    }
                } catch (e) {}
            </script>
            <script id="pika-version" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                try {
                    window.pika = window.pika || {};
                    window.pika.version = "0.3.56";
                    window.__HTTP_NEXT_MODE_ENABLED__ = true
                } catch (e) {
                    console.error(e)
                }
            </script>
            <script id="Sentry-sdk" src="./bin.bnbstatic.com/static/runtime/sentry/7.38.0/bundle.es5.min.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script id="Sentry-init" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                if (typeof Sentry !== 'undefined') {
                    var originalSentry = Sentry;
                    Sentry = {};
                    Object.keys(originalSentry).forEach(key => {
                        Object.defineProperty(Sentry, key, {
                            get: function() {
                                if (typeof originalSentry[key] === 'function') {
                                    return function() {};
                                } else {
                                    return undefined;
                                }
                            }
                        });
                    });
                    window.addEventListener('unhandledrejection', event => {
                        console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
                        originalSentry.captureMessage(event.reason);
                    });
                    originalSentry.init({
                        dsn: 'https://bc7b4aa7b676d0e66992b3013f95e1b7@o529943.ingest.us.sentry.io/4507770388414464',
                        release: '20250417-c6e8226e-228648',
                        attachStacktrace: true,
                        environment: 'prod',
                        integrations: [],
                        denyUrls: [/^chrome-extension:\/\//i],
                        ignoreErrors: [/Network request failed.*/, /pageName is require.*/, /Loading chunk \d+ failed.*/, /Loading CSS chunk \d+ failed.*/, /Your operation is too frequent, please try again later.*/, /Non-Error promise rejection captured with keys: code, message, standard/, /Cannot read properties of undefined \(reading 'firefoxSample'\)/],
                        beforeSend: (event, hint) => {
                            var sampleRate = 0.01; /* if error level is fatal, we don't want to sample it */
                            if (event && event.level && event.level === 'fatal') {
                                sampleRate = 1;
                                if (event.exception && event.exception.values && event.exception.values[0] && event.exception.values[0].mechanism) {
                                    event.exception.values[0].mechanism.handled = false;
                                }
                            }
                            try {
                                var fileName = event.exception.values[0].stacktrace.frames.slice(-1)[0].filename;
                                var message = hint.originalException.message;
                                if (message.includes('The object does not support the operation or argument') && fileName.includes('sensor')) {
                                    return null;
                                }
                            } catch (e) {}
                            if (hint && hint.originalException) {
                                var error = hint.originalException;
                                if (error && error.message === 'ResizeObserver loop limit exceeded') {
                                    return null;
                                } /* add more info for some errors to make it more useful */
                                if (error && error.message && error.message.includes('The quota has been exceeded')) {
                                    try {
                                        var _lsTotal = 0,
                                            _xLen, _x;
                                        for (_x in localStorage) {
                                            if (!localStorage.hasOwnProperty(_x)) {
                                                continue;
                                            }
                                            _xLen = ((localStorage[_x].length + _x.length) * 2);
                                            _lsTotal += _xLen;
                                            if ((_xLen / 1024).toFixed(2) > 1) {
                                                event.extra[_x.substr(0, 50)] = (_xLen / 1024).toFixed(2);
                                            }
                                        }
                                        event.extra['localStorageTotal'] = (_lsTotal / 1024).toFixed(2);
                                        event.tags['localStorage'] = '1';
                                    } catch (e) {
                                        event.tags['localStorage'] = '0';
                                    }
                                } /* add more info for some errors to make it more useful */
                                if (error && error.message === 'Cannot redefine property: src') {
                                    try {
                                        event.extra['plugins'] = Array.from(navigator.plugins || []).map(item => item.name).join();
                                        event.extra['OtAutoBlockTimes'] = Array.from(document.querySelectorAll('script')).filter(script => script.src.includes('OtAutoBlock.js')).length;
                                        event.tags['plugins'] = '1';
                                    } catch (e) {
                                        event.tags['plugins'] = '0';
                                    }
                                }
                            }
                            var random = Math.random();
                            if (random <= sampleRate) {
                                return event;
                            } else {
                                return null;
                            }
                        }
                    });
                    originalSentry.configureScope(scope => {
                        scope.setExtra('isServer', false);
                        scope.setTag('isServer', false);
                    });
                }
            </script>
            <script type="application/json" id="bnc-cpl-headers" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                {}
            </script>
            <script nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                __faq_anns_ui_dynamic_public_path__ = "https://bin.bnbstatic.com/"
            </script>
            <script id="prefetch-rules" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                var runtimeConfig = {
                    "__ACCELERATE_ENABLED__": false,
                    "__ACCELERATE_DEFAULT_DOMAIN__": "api.yshyqxx.com",
                    "__ACCELERATE_AVAILABLE_DOMAIN__": "api.yshyqxx.com,api.bnwebzh.com",
                    "__ACCELERATE_ENBLED_SITES__": "www.binancezh.info,accounts.binancezh.info"
                };
                window._bn_http_init = window._bn_http_init || [];
                window._bn_http_init.push({
                    accelerateConfig: runtimeConfig,
                    baseUrl: "",
                });
                var requestConfig = {};
                window._bn_http_prefetch = window._bn_http_prefetch || [];
                Object.keys(requestConfig).forEach((url) => {
                    const config = requestConfig[url];
                    window._bn_http_prefetch.push({
                        url,
                        options: config,
                    });
                });
            </script>
            <script type="application/javascript" id="__COMMON_WIDGET_SSR_DATA__" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                window.__COMMON_WIDGET_SSR_DATA__ = {
                    "lang": "en",
                    "theme": "dark",
                    "mediaState": {
                        "isMobile": false,
                        "isTablet": false,
                        "isDesktop": true
                    },
                    "currencyList": [{
                        "name": "AED",
                        "pair": "AED_USD",
                        "rate": 3.67,
                        "symbol": "د.إ",
                        "fullName": "UAE dirham",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/AED.png",
                        "value": "AED"
                    }, {
                        "name": "ARS",
                        "pair": "ARS_USD",
                        "rate": 1207.2,
                        "symbol": "ARS$",
                        "fullName": "Argentine Peso",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/ARS.png",
                        "value": "ARS"
                    }, {
                        "name": "AUD",
                        "pair": "AUD_USD",
                        "rate": 1.57,
                        "symbol": "A$",
                        "fullName": "Australian Dollar",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/AUD.png",
                        "value": "AUD"
                    }, {
                        "name": "BDT",
                        "pair": "BDT_USD",
                        "rate": 121.52,
                        "symbol": "৳",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/BDT.png",
                        "value": "BDT"
                    }, {
                        "name": "BGN",
                        "pair": "BGN_USD",
                        "rate": 1.73,
                        "symbol": "лв",
                        "fullName": "Bulgarian Lev",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/BGN.png",
                        "value": "BGN"
                    }, {
                        "name": "BHD",
                        "pair": "BHD_USD",
                        "rate": 0.376,
                        "symbol": ".د.ب",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/BHD.png",
                        "value": "BHD"
                    }, {
                        "name": "BOB",
                        "pair": "BOB_USD",
                        "rate": 6.91,
                        "symbol": "$b",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/BOB.png",
                        "value": "BOB"
                    }, {
                        "name": "BRL",
                        "pair": "BRL_USD",
                        "rate": 5.69,
                        "symbol": "R$",
                        "fullName": "Brazilian Real",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/BRL.png",
                        "value": "BRL"
                    }, {
                        "name": "CAD",
                        "pair": "CAD_USD",
                        "rate": 1.38,
                        "symbol": "C$",
                        "fullName": "Canadian Dollar",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/CAD.png",
                        "value": "CAD"
                    }, {
                        "name": "CHF",
                        "pair": "CHF_USD",
                        "rate": 0.8274,
                        "symbol": "CHF",
                        "fullName": "Swiss Franc",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/CHF.png",
                        "value": "CHF"
                    }, {
                        "name": "CNY",
                        "pair": "CNY_USD",
                        "rate": 7.27,
                        "symbol": "¥",
                        "fullName": "Chinese Yuan",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/CNY.png",
                        "value": "CNY"
                    }, {
                        "name": "COP",
                        "pair": "COP_USD",
                        "rate": 4242.22,
                        "symbol": "COL$",
                        "fullName": "Colombian Peso",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/COP.png",
                        "value": "COP"
                    }, {
                        "name": "CZK",
                        "pair": "CZK_USD",
                        "rate": 22.01,
                        "symbol": "Kč",
                        "fullName": "Czech Koruna",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/CZK.png",
                        "value": "CZK"
                    }, {
                        "name": "DKK",
                        "pair": "DKK_USD",
                        "rate": 6.59,
                        "symbol": "KR",
                        "fullName": "Danish Krone",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/DKK.png",
                        "value": "DKK"
                    }, {
                        "name": "EGP",
                        "pair": "EGP_USD",
                        "rate": 50.85,
                        "symbol": "E£",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/EGP.png",
                        "value": "EGP"
                    }, {
                        "name": "EUR",
                        "pair": "EUR_USD",
                        "rate": 0.8835,
                        "symbol": "€",
                        "fullName": "Euro",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/EUR.png",
                        "value": "EUR"
                    }, {
                        "name": "GBP",
                        "pair": "GBP_USD",
                        "rate": 0.7508,
                        "symbol": "£",
                        "fullName": "Pound Sterling",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/GBP.png",
                        "value": "GBP"
                    }, {
                        "name": "HKD",
                        "pair": "HKD_USD",
                        "rate": 7.76,
                        "symbol": "HKD",
                        "fullName": "Hong Kong Dollar",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/HKD.png",
                        "value": "HKD"
                    }, {
                        "name": "HRK",
                        "pair": "HRK_USD",
                        "rate": 7.03,
                        "symbol": "kn",
                        "fullName": "Croatian Kuna",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/HRK.png",
                        "value": "HRK"
                    }, {
                        "name": "HUF",
                        "pair": "HUF_USD",
                        "rate": 357.36,
                        "symbol": "Ft",
                        "fullName": "Hungarian Forint",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/HUF.png",
                        "value": "HUF"
                    }, {
                        "name": "IDR",
                        "pair": "IDR_USD",
                        "rate": 16587.36,
                        "symbol": "Rp",
                        "fullName": "Indonesian Rupiah",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/IDR.png",
                        "value": "IDR"
                    }, {
                        "name": "INR",
                        "pair": "INR_USD",
                        "rate": 84.6,
                        "symbol": "₹",
                        "fullName": "Indian Rupee",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/INR.png",
                        "value": "INR"
                    }, {
                        "name": "JPY",
                        "pair": "JPY_USD",
                        "rate": 144.39,
                        "symbol": "¥",
                        "fullName": "Japanese Yen",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/JPY.png",
                        "value": "JPY"
                    }, {
                        "name": "KES",
                        "pair": "KES_USD",
                        "rate": 129.65,
                        "symbol": "KSh",
                        "fullName": "Kenyan Shilling",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/KES.png",
                        "value": "KES"
                    }, {
                        "name": "KWD",
                        "pair": "KWD_USD",
                        "rate": 0.3067,
                        "symbol": "ك.د",
                        "fullName": "Kuwaiti Dinar",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/KWD.png",
                        "value": "KWD"
                    }, {
                        "name": "KZT",
                        "pair": "KZT_USD",
                        "rate": 514.58,
                        "symbol": "₸",
                        "fullName": "Kazakhstani Tenge",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/KZT.png",
                        "value": "KZT"
                    }, {
                        "name": "MAD",
                        "pair": "MAD_USD",
                        "rate": 9.27,
                        "symbol": "م.د.",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/MAD.png",
                        "value": "MAD"
                    }, {
                        "name": "MNT",
                        "pair": "MNT_USD",
                        "rate": 3574.42,
                        "symbol": "₮",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/MNT.png",
                        "value": "MNT"
                    }, {
                        "name": "MXN",
                        "pair": "MXN_USD",
                        "rate": 19.64,
                        "symbol": "Mex$",
                        "fullName": "Mexican Peso",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/MXN.png",
                        "value": "MXN"
                    }, {
                        "name": "NZD",
                        "pair": "NZD_USD",
                        "rate": 1.69,
                        "symbol": "NZ$",
                        "fullName": "New Zealand Dollar",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/NZD.png",
                        "value": "NZD"
                    }, {
                        "name": "OMR",
                        "pair": "OMR_USD",
                        "rate": 0.385,
                        "symbol": "ر.ع.",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/OMR.png",
                        "value": "OMR"
                    }, {
                        "name": "PEN",
                        "pair": "PEN_USD",
                        "rate": 3.67,
                        "symbol": "S/.",
                        "fullName": "Nuevo Sol",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/PEN.png",
                        "value": "PEN"
                    }, {
                        "name": "PHP",
                        "pair": "PHP_USD",
                        "rate": 55.85,
                        "symbol": "₱",
                        "fullName": "Philippine Peso",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/PHP.png",
                        "value": "PHP"
                    }, {
                        "name": "PKR",
                        "pair": "PKR_USD",
                        "rate": 281.84,
                        "symbol": "₨",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/PKR.png",
                        "value": "PKR"
                    }, {
                        "name": "PLN",
                        "pair": "PLN_USD",
                        "rate": 3.79,
                        "symbol": "zł",
                        "fullName": "Polish Zloty",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/PLN.png",
                        "value": "PLN"
                    }, {
                        "name": "QAR",
                        "pair": "QAR_USD",
                        "rate": 3.64,
                        "symbol": "ر.ق",
                        "fullName": "Qatari Riyal",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/QAR.png",
                        "value": "QAR"
                    }, {
                        "name": "RON",
                        "pair": "RON_USD",
                        "rate": 4.4,
                        "symbol": "lei",
                        "fullName": "Romanian Leu",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/RON.png",
                        "value": "RON"
                    }, {
                        "name": "RUB",
                        "pair": "RUB_USD",
                        "rate": 81.87,
                        "symbol": "₽",
                        "fullName": "Russian Ruble",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/RUB.png",
                        "value": "RUB"
                    }, {
                        "name": "SAR",
                        "pair": "SAR_USD",
                        "rate": 3.75,
                        "symbol": "ر.س",
                        "fullName": "Saudi Riyal",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/SAR.png",
                        "value": "SAR"
                    }, {
                        "name": "SEK",
                        "pair": "SEK_USD",
                        "rate": 9.7,
                        "symbol": "kr",
                        "fullName": "Swedish Krona",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/SEK.png",
                        "value": "SEK"
                    }, {
                        "name": "THB",
                        "pair": "THB_USD",
                        "rate": 33.5,
                        "symbol": "฿",
                        "fullName": "Thai Baht",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/THB.png",
                        "value": "THB"
                    }, {
                        "name": "TRY",
                        "pair": "TRY_USD",
                        "rate": 38.47,
                        "symbol": "₺",
                        "fullName": "Turkish Lira",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/TRY.png",
                        "value": "TRY"
                    }, {
                        "name": "TWD",
                        "pair": "TWD_USD",
                        "rate": 32.06,
                        "symbol": "NT$",
                        "fullName": "New Taiwan dollar",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/TWD.png",
                        "value": "TWD"
                    }, {
                        "name": "UAH",
                        "pair": "UAH_USD",
                        "rate": 41.59,
                        "symbol": "₴",
                        "fullName": "Ukrainian Hryvnia",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/UAH.png",
                        "value": "UAH"
                    }, {
                        "name": "UGX",
                        "pair": "UGX_USD",
                        "rate": 3664.26,
                        "symbol": "USh",
                        "fullName": "Uganda Shilling",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/UGX.png",
                        "value": "UGX"
                    }, {
                        "name": "VES",
                        "pair": "VES_USD",
                        "rate": 87.1,
                        "symbol": "Bs",
                        "fullName": null,
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/VES.png",
                        "value": "VES"
                    }, {
                        "name": "VND",
                        "pair": "VND_USD",
                        "rate": 25981.96,
                        "symbol": "₫",
                        "fullName": "Vietnamese Dong",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/VND.png",
                        "value": "VND"
                    }, {
                        "name": "ZAR",
                        "pair": "ZAR_USD",
                        "rate": 18.67,
                        "symbol": "R",
                        "fullName": "South African Rand",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/ZAR.png",
                        "value": "ZAR"
                    }, {
                        "name": "USD",
                        "pair": "USD_USD",
                        "rate": 1,
                        "symbol": "$",
                        "fullName": "US Dollar",
                        "value": "USD",
                        "imageUrl": "https://public.bnbstatic.com/image/currencies/USD.png"
                    }],
                    "currency": "USD",
                    "isSeo": false,
                    "navI18n": {
                        "200003971": "Please provide us with current proof of residential address outside of Singapore before July 21st.If you are unable to provide this evidence within the specified timeframe, your account will be restricted until you can do so, with the exception of permitting withdrawals of assets from your account.",
                        "200003972": "Please provide us with current proof of residential address outside of Singapore before July 21st.If you are unable to provide this evidence within the specified timeframe, your account will be restricted until you can do so, with the exception of permitting withdrawals of assets from your account.",
                        "200004039": "Please complete the KYB verification as soon as possible. Please note that if you fail to pass the verification on time, your account will be restricted to withdrawals only.",
                        "200004040": "Please complete the KYB verification soon.  Kindly note, if you do not submit the verification soon, your account will be restricted to withdraw only.",
                        "BINANCE_BAHRAIN_BSC": "Bahrain",
                        "Channel Advcash2": "SEPA, Advcash, Payeer, Epay",
                        "Channel Advcash4": "Epay",
                        "EDD_false_200003962": "Your Source of Wealth Declaration did not meet our review requirements. Please complete your declaration.",
                        "EDD_none_200003961": "Dear user, kindly note that your account may be subject to some additional verification measures.We kindly require you to confirm if you are a politically exposed person and provide some information about your source of income.",
                        "JP": "Japan",
                        "KZ": "Binance Kazakhstan",
                        "Navigation-fiat-zar-stitch": "Online Banking",
                        "Navigation-fiat-zar-stitch-subtitle": "Instant EFT",
                        "Register Now": "Sign Up",
                        "Register now and receive up to 100 USDT in rewards": "Sign up now and receive up to 100 USD in rewards",
                        "Secure digital assets with leading infrastructure": "description-tier2-custody",
                        "VIP_0": "Regular User",
                        "action-registerNow": "Register free",
                        "action-trade": "Trade",
                        "action-tradeNow": "trade now",
                        "ba-0fee": "0 Fees - 3 Days Only!",
                        "ba-5tournament": "Tournament",
                        "ba-AED": "Buy Crypto with your AED balance",
                        "ba-AED-bank": "Deposit AED via Bank Transfer",
                        "ba-AED-deposit": "Bank Deposit",
                        "ba-APIDocumentation": "API Documentation",
                        "ba-APIDocuments": "API Documentation",
                        "ba-APIManagement": "API Management",
                        "ba-AUD": "Buy Crypto with your AUD balance",
                        "ba-About": "About",
                        "ba-Academy": "Academy",
                        "ba-AccountStatement": "Account Statement",
                        "ba-Activity": "Activity",
                        "ba-Advanced": "Advanced",
                        "ba-Affiliate": "Affiliate",
                        "ba-Alpha": "Alpha",
                        "ba-Alpha-desc": "Quick access to Web3 via Alpha Trading",
                        "ba-Announcement": "Announcements",
                        "ba-BCF": "BCF",
                        "ba-BCFcontnet": "Blockchain empowers charity to be more transparent, efficient, and traceable",
                        "ba-BHD-bank": "Deposit BHD via bank transfer",
                        "ba-BHD-deposit": "Bank Transfer or Card",
                        "ba-BNBVault ": "BNB Vault",
                        "ba-BNBVault-content  ": "Earn Multi-benefits with BNB",
                        "ba-BNBVault-title": "BNB Vault",
                        "ba-BNBVaulttitle-content": "Earn Multi-benefits with BNB",
                        "ba-BRL": "Buy Crypto with your BRL balance",
                        "ba-BUSDBonus": "BUSD Bonus",
                        "ba-BUSDPerpetual": "BUSD Perpetual",
                        "ba-BankDeposit4bill": "Deposit UAH with VISA / MasterCard",
                        "ba-BankDepositAUD": "Deposit AUD with PayID",
                        "ba-BankDepositFasterPayment": "Deposit GBP with Faster Payment",
                        "ba-BankDepositFasterPayment0": "0 fee via Faster Payments deposit",
                        "ba-BankDepositSEPA": "0 fee via SEPA deposit",
                        "ba-BankDepositSEPAiDEAL": "Deposit EUR with SEPA, iDEAL",
                        "ba-BankDepositTransfer": "Bank Transfer",
                        "ba-BankDepositTransfer2": "Bank Transfer",
                        "ba-BankDepositTransferduitku": "Deposit IDR with Permata/Maybank/CIMB Niaga",
                        "ba-BankDepositUGX": "Deposit UGX with Flutterwave",
                        "ba-BankTransferSubtitle": "Bank transfer and 100+ options",
                        "ba-BankTransferSubtitle2": "Buy/Sell from Local Verified Vendors",
                        "ba-BankTransferSubtitle3": "Buy/Sell from Local Verified Vendors",
                        "ba-BanktransferTitle": "P2P Express",
                        "ba-BanktransferTitle-p2p": "P2P Trading",
                        "ba-Basic": "Classic",
                        "ba-Basic-content": "Simple and easy-to-use interface",
                        "ba-BasicCONVERT": "Binance Convert",
                        "ba-BasicCONVERT-content": "The easiest way to trade at all sizes",
                        "ba-BasicConvert": "Convert",
                        "ba-Binance Pay": "Pay",
                        "ba-Binance Pay-content": "Send, receive and spend crypto",
                        "ba-BuyTradable": "Buy Tradable Altcoins",
                        "ba-CAD": "Buy Crypto with your CAD balance",
                        "ba-CHF": "Buy Crypto with your CHF balance",
                        "ba-COIN-MDelivery": "COIN-M Delivery",
                        "ba-COIN-MPerpetual": "COIN-M Perpetual",
                        "ba-COINM": "COIN-M",
                        "ba-CZK": "Buy Crypto with your CZK balance",
                        "ba-Card": "Card",
                        "ba-Career": "Careers",
                        "ba-CashBalanceSubtitleA": "Pay by your",
                        "ba-CashBalanceSubtitleB": "balance",
                        "ba-CashBalanceTitle": "Cash Balance",
                        "ba-Charity": "Charity",
                        "ba-Cloud": "Cloud",
                        "ba-Community": "Community",
                        "ba-ContactUs": "Business Contacts",
                        "ba-CrediCardSubtitle": "Visa, Mastercard",
                        "ba-CrediCardSubtitle2": "Visa",
                        "ba-CrediCardSubtitleNGN": "Visa, Mastercard, Verve",
                        "ba-CreditCardTitle": "Credit/Debit Card",
                        "ba-CryptoLoans": "Loans",
                        "ba-Currency": "Currency",
                        "ba-DA5-subtitle": "Buy crypto via e-wallets, bank transfer etc",
                        "ba-DA5-title": "Local Payment Methods",
                        "ba-DEX": "DEX",
                        "ba-DKK": "Buy Crypto with your DKK balance",
                        "ba-DebitCard": "Binance Visa Card",
                        "ba-DebitCard-content": "Get up to 8% cashback when you spend at 90M merchants worldwide",
                        "ba-DeliveryOrder": "COIN-M Futures Order",
                        "ba-DeliveryWallet": "COIN-M Futures",
                        "ba-Deposit-EUR": "Deposit EUR via card",
                        "ba-Deposit-GBP": "Deposit GBP via card",
                        "ba-Deposit-HKD": "Deposit HKD via card",
                        "ba-Deposit-PEN": "Deposit PEN via card",
                        "ba-Deposit-RUB": "Deposit RUB via card",
                        "ba-Deposit-UAH": "Deposit UAH via card",
                        "ba-DepositSubtitle1": "Bank Transfer, Card payment",
                        "ba-DepositSubtitle2": "SEPA, Advcash, Payeer, Epay",
                        "ba-DepositSubtitle3": "Advcash",
                        "ba-DepositSubtitle4": "Advcash, Payeer",
                        "ba-DepositSubtitle5": "Papara, Advcash",
                        "ba-DepositSubtitle6": "Advcash",
                        "ba-DepositSubtitle7": "Epay",
                        "ba-DepositSubtitle8": "Faster Payment, Epay",
                        "ba-DepositSubtitle9": "Bank Transfer",
                        "ba-Desktop Application": "Desktop Application",
                        "ba-Download": "Downloads",
                        "ba-Dual": "Dual Investment",
                        "ba-Dual-content    ": "Commit your crypto holdings and enjoy high returns",
                        "ba-Dualtitle-content": "Commit your crypto holdings and enjoy high returns",
                        "ba-EUR": "Buy Crypto with your EUR balance",
                        "ba-EUR-SEPA-card": "Deposit EUR via SEPA or card",
                        "ba-Earn": "Earn",
                        "ba-Earndeatil": "One-stop Investment Solution",
                        "ba-Earntitle": "Earn",
                        "ba-Exchange": "Exchange",
                        "ba-FAQ": "FAQ",
                        "ba-FanToken\t": "Fan Token",
                        "ba-FanToken": "Fan Token",
                        "ba-FanToken-content": "Discover an all-new fandom and unlock unlimited fan experiences",
                        "ba-Fantoken": "Fan Token",
                        "ba-Featured.market": "Featured.market",
                        "ba-Fees": "Fees",
                        "ba-FundingWallet": "Funding",
                        "ba-Futures-Service-Agreement": "Futures Service Agreement",
                        "ba-GBD": "Buy Crypto with your GBP balance",
                        "ba-GBP-FPS-card": "Deposit GBP via Faster Payments or card",
                        "ba-GBP-deposit": "Bank Deposit",
                        "ba-GHS": "Buy Crypto with your GHS balance",
                        "ba-Getaninstantloan": "Get an instant loan secured by crypto assets",
                        "ba-GiftCard": "Gift Card",
                        "ba-GiftCard-content": "Customizable crypto gift card",
                        "ba-GridTrading": "Futures Grid",
                        "ba-HKD": "Buy Crypto with your HKD balance",
                        "ba-HUF": "Buy Crypto with your HUF balance",
                        "ba-Info": "Cryptocurrency information platform",
                        "ba-JPY": "Buy crypto with your JPY balance",
                        "ba-JPY-bank": "Deposit JPY via bank transfer",
                        "ba-JPY-deposit": "Bank Deposit",
                        "ba-KES": "Buy Crypto with your KES balance",
                        "ba-KZT": "Buy Crypto with your KZT balance",
                        "ba-KZT-card": "Deposit KZT with your bank card",
                        "ba-Labs": "Labs",
                        "ba-Launchpad": "Launchpad",
                        "ba-Learn": "Learn",
                        "ba-ListingApplication": "Listing Application",
                        "ba-LogIn": "Log In",
                        "ba-MXN": "Buy Crypto with your MXN balance",
                        "ba-NFT": "NFT",
                        "ba-NGN": "Buy Crypto with your NGN balance",
                        "ba-NOK": "Buy Crypto with your NOK balance",
                        "ba-NZD": "Buy Crypto with your NZD balance",
                        "ba-NotVerified": "Unverified",
                        "ba-Notices": "Notices",
                        "ba-Notification": "Notification",
                        "ba-OTC": "OTC",
                        "ba-OTC-content": "Better pricing and fast settlement for large trades",
                        "ba-OldSite": "Old Website",
                        "ba-Onboarding": "Onboarding",
                        "ba-PEN": "Buy Crypto with your PEN balance",
                        "ba-PLN": "Buy Crypto with your PLN balance",
                        "ba-Payment": "Payments",
                        "ba-Perpetual": "USDⓈ-M Futures",
                        "ba-PerpetualOrder": "USDⓈ-M Futures Order",
                        "ba-PerpetualWallet": "USDⓈ-M Futures",
                        "ba-Press": "Press",
                        "ba-Prices": "Prices",
                        "ba-Privacy": "Privacy",
                        "ba-Products": "Products",
                        "ba-Proof-of-Reserves": "Proof of Reserves",
                        "ba-Quarterly": "COIN-M Futures",
                        "ba-RUB": "Buy Crypto with your RUB balance",
                        "ba-Range-Bound-Desc": "Earn high rewards when the market moves sideways",
                        "ba-Range-Bound-Title": "Range Bound",
                        "ba-Register": "Sign Up",
                        "ba-Research": "Research",
                        "ba-ResponsibleTrading": "Responsible Trading",
                        "ba-Reward": "Reward Center",
                        "ba-SEK": "Buy Crypto with your SEK balance",
                        "ba-SWIFT Bank Transfer": "SWIFT Bank Transfer",
                        "ba-Service": "Service",
                        "ba-Spend": "Spend",
                        "ba-SpotGrid": "Spot Grid",
                        "ba-Square": "Square",
                        "ba-Staking": "Staking",
                        "ba-StrategyTrading": "Trading Bots",
                        "ba-StrategyTrading-desc": "Trade smarter with our various automated strategies - easy, fast and reliable",
                        "ba-SubmitARequest": "24/7 Chat Support",
                        "ba-Support": "Support",
                        "ba-SupportCenter": "Support Center",
                        "ba-TRY": "Buy Crypto with your TRY balance",
                        "ba-TWAP": "TWAP",
                        "ba-Terms": "Terms",
                        "ba-Theme": "Theme",
                        "ba-ThirdPartyPaymentvSubtitl7": "Simplex, Koinal, Latamex",
                        "ba-ThirdPartyPaymentvSubtitle": "Mercuryo, Simplex, BANXA",
                        "ba-ThirdPartyPaymentvSubtitle1": "Koinal",
                        "ba-ThirdPartyPaymentvSubtitle10": "BANXA, Simplex, BPAY, Poli, Binance Lite",
                        "ba-ThirdPartyPaymentvSubtitle11": "Simplex, Koinal",
                        "ba-ThirdPartyPaymentvSubtitle12": "BANXA",
                        "ba-ThirdPartyPaymentvSubtitle13": "Mercuryo, Koinal",
                        "ba-ThirdPartyPaymentvSubtitle14": "Latamex",
                        "ba-ThirdPartyPaymentvSubtitle15": "Mercuryo",
                        "ba-ThirdPartyPaymentvSubtitle16": "Koinal",
                        "ba-ThirdPartyPaymentvSubtitle2": "Mercuryo, Simplex, Koinal",
                        "ba-ThirdPartyPaymentvSubtitle3": "Simplex, Koinal, BANXA",
                        "ba-ThirdPartyPaymentvSubtitle4": "Satang",
                        "ba-ThirdPartyPaymentvSubtitle5": "Simplex, WazirX",
                        "ba-ThirdPartyPaymentvSubtitle6": "Simplex, Koinal, Latamex",
                        "ba-ThirdPartyPaymentvSubtitle7": "Mercuryo, Simplex, Koinal, Latamex",
                        "ba-ThirdPartyPaymentvSubtitle8": "Simplex",
                        "ba-ThirdPartyPaymentvSubtitle9": "Simplex, Banxa",
                        "ba-ThirdpaymentTitle": "Third-party Payment",
                        "ba-Trust Wallet": "Trust Wallet",
                        "ba-TrustWallet": "Trust Wallet",
                        "ba-UAH": "Buy Crypto with your UAH balance",
                        "ba-UGX": "Buy crypto with your UGX balance",
                        "ba-USDF": "BFUSD",
                        "ba-USDM": "USDⓈ-M",
                        "ba-USDSPerpetual": "USD(s) Perpetual",
                        "ba-USDTDelivery": "USDT Delivery",
                        "ba-USDTPerpetual": "USDT Perpetual",
                        "ba-Verified": "Verified",
                        "ba-Volume": "Quote Volume",
                        "ba-WalletTitle": "Wallet ({{currency}})",
                        "ba-ZAR": "Buy Crypto with your ZAR balance",
                        "ba-ZAR-deposit": "Zero fees",
                        "ba-aboutUs": "About Us",
                        "ba-academy-le": "Academy (Learn & Earn)",
                        "ba-accept-crypto-payment": "Accept Crypto Payment",
                        "ba-accept-crypto-payment-desc": "Allow your customers to pay with crypto",
                        "ba-activities": "Activities",
                        "ba-advanced-content": "Able to customize layout",
                        "ba-aed-cash": "Buy crypto with your AED balance",
                        "ba-affiliate-subtitle": "Earn up to 50% commission per trade from referrals",
                        "ba-affiliate-title": "Affiliate",
                        "ba-ago": "ago",
                        "ba-airdrop": "Binance Airdrop Portal",
                        "ba-algo-orders": "Algo Orders",
                        "ba-algo-orders-desc": "Trade with TWAP and POV Algo Orders",
                        "ba-apiAccess": "API Access",
                        "ba-apis": "Unlimited opportunities with one Key",
                        "ba-applyP2P": "P2P Merchant Application",
                        "ba-applyToList": "Listing Application",
                        "ba-applypay": "Pay Merchant Application",
                        "ba-arbitrageBot": "Arbitrage Bot",
                        "ba-assetExchange": "Blockchain and crypto asset exchange",
                        "ba-auto-invest": "Auto-Invest",
                        "ba-auto-invest-con": "Accumulate crypto on autopilot",
                        "ba-back-0812": "We're back",
                        "ba-balances": "Balance",
                        "ba-basic": "Basic",
                        "ba-battle": "Battle",
                        "ba-battle-cm": "COIN-M Battle",
                        "ba-battle-um": "USDⓈ-M Battle",
                        "ba-battlecontent": "Battle to Win, Long vs Short",
                        "ba-bhd-cash": "Buy crypto with your BHD balance",
                        "ba-binance": "Binance",
                        "ba-binance-app": "Binance App",
                        "ba-binance-legal": "Binance Legal (Court Orders)",
                        "ba-binance-otc": "Binance OTC",
                        "ba-binance-otc-content": "OTC liquidity and execution services",
                        "ba-binance-send": "Binance Send",
                        "ba-binanceBlog": "Blog",
                        "ba-binanceCoin": "BNB",
                        "ba-binanceFutrue": "Futures",
                        "ba-blog": "Blog",
                        "ba-blogdescription": "Expand your knowledge and get the latest insights",
                        "ba-bnbchain": "BNB Chain",
                        "ba-bonus": "Bonus",
                        "ba-broker-link": "Link",
                        "ba-broker-main-title": "Broker",
                        "ba-broker-subtitle": "Trading terminal solutions",
                        "ba-busd": "Buy BUSD",
                        "ba-business-footer": "Business",
                        "ba-buy": "Buy",
                        "ba-buy-DeFi-tokens": "Buy DeFi Tokens",
                        "ba-buy-and-sell": "Buy & Sell",
                        "ba-buy-bitcoin": "Buy Bitcoin",
                        "ba-buy-new": "Buy crypto via card",
                        "ba-buyBitcion": "Buy Bitcoin",
                        "ba-buyBitcoinCash": "Buy Bitcoin Cash",
                        "ba-buyDeFi": "Buy DeFi",
                        "ba-buyEthereum": "Buy Ethereum",
                        "ba-buyLitecoin": "Buy Litecoin",
                        "ba-buyRipple": "Buy XRP",
                        "ba-buySellHistory": "Buy Crypto History",
                        "ba-buybnb": "Buy BNB",
                        "ba-buydogecoin": "Buy Dogecoin",
                        "ba-c2c-content": "Buy & sell cryptocurrencies using bank transfer and 800+ options",
                        "ba-capital-connect": "Capital Connect",
                        "ba-capital-connect-desc": "Connecting investors and investment managers",
                        "ba-card-AP": "Buy crypto via Card, Apple Pay",
                        "ba-card-AP-GP": "Buy crypto via Card, Apple Pay, Google Pay",
                        "ba-card-GP": "Buy crypto via Card, Google Pay",
                        "ba-card-new": "Binance Card",
                        "ba-card1": "Card",
                        "ba-cashlink-subtitle": "Instant deposit via Cashlink",
                        "ba-cashlink-title": "Bank Transfer",
                        "ba-chat-support-desc": "Chat with Customer Support",
                        "ba-chooseCurrency": "Choose a currency",
                        "ba-chooseLang": "Please choose your language.",
                        "ba-chooseLanguageRegion": "Choose a language and region",
                        "ba-clearAll": "Clear All",
                        "ba-close": "Close",
                        "ba-cloud": "Binance Cloud",
                        "ba-common-all": "All",
                        "ba-content": "Trade",
                        "ba-continue": "Continue",
                        "ba-contrac-info-desc": "Index, Arbitrage and Delivery Data",
                        "ba-contract-info": "Contract Info",
                        "ba-convert-block": "Convert & Block Trade",
                        "ba-convert-desc": "The easiest way to convert between different cryptocurrencies",
                        "ba-cookie-policy": "Cookie Policy",
                        "ba-copy-trading": "Copy Trading",
                        "ba-copy-trading-desc": "Follow the most popular traders",
                        "ba-corder": "P2P Order",
                        "ba-countdown": "Service Suspended for users from restricted countries. Now you have  {{ time }} to withdraw your funds. Please withdraw as soon, failing which your account will be locked and can’t withdraw anymore.",
                        "ba-creditCard": "Buy Crypto",
                        "ba-creditcard": "Credit Card",
                        "ba-cwallet": "P2P",
                        "ba-czk-cash": "Buy crypto with your CZK balance",
                        "ba-d": "d",
                        "ba-dashboard": "Dashboard",
                        "ba-data": "Data",
                        "ba-defi-staking-con": "Easy Access to DeFi Opportunities",
                        "ba-defi-staking-title": "Defi Staking",
                        "ba-defi-staking-title-correct": "DeFi Staking",
                        "ba-defi-wallet": "DeFi Wallet",
                        "ba-defi-wallet-desc": "Access and Navigate Web3 Effortlessly",
                        "ba-delivery-title": "COIN-M Futures",
                        "ba-deliverydata": "Delivery Data",
                        "ba-deposit": "Deposit",
                        "ba-deposit-CAD": "Deposit CAD",
                        "ba-deposit-CHF": "Deposit CHF",
                        "ba-deposit-CZK": "Deposit CAK",
                        "ba-deposit-DKK": "Deposit DKK",
                        "ba-deposit-GBP": "Deposit GBP",
                        "ba-deposit-GHS": "Deposit GHS with 0% Fee",
                        "ba-deposit-HKD": "Deposit HKD",
                        "ba-deposit-HUF": "Deposit HUF",
                        "ba-deposit-KES": "Deposit KES",
                        "ba-deposit-KZT": "Deposit KZT",
                        "ba-deposit-MXN": "Deposit MXN",
                        "ba-deposit-NGN": "Deposit NGN",
                        "ba-deposit-NOK": "Deposit NOK",
                        "ba-deposit-NZD": "Deposit NZD",
                        "ba-deposit-PLN": "Deposit PLN",
                        "ba-deposit-RUB": "Deposit RUB",
                        "ba-deposit-SEK": "Deposit SEK",
                        "ba-deposit-TRY": "Deposit TRY",
                        "ba-deposit-UAH": "Deposit UAH",
                        "ba-deposit-UGX": "Deposit UGX",
                        "ba-deposit-ZAR": "Deposit ZAR",
                        "ba-deposit-ZEN": "Deposit",
                        "ba-deposit-ZEN-CZK": "Deposit CZK via ZEN",
                        "ba-deposit-ZEN-HUF": "Deposit HUF via ZEN",
                        "ba-deposit-ZEN-PLN": "Deposit PLN via ZEN",
                        "ba-deposit-ZEN-RON": "Deposit RON via ZEN",
                        "ba-deposit-tips": "Deposit",
                        "ba-deposit-tips1": "Bank Deposit",
                        "ba-deposit-tips2": "Deposit %currency%",
                        "ba-deposit-tips3": "Card Deposit",
                        "ba-deposit-vnd": "Deposit VND via Vietcombank",
                        "ba-depositWithdrawHistory": "Deposit & Withdrawal History",
                        "ba-derivatives": "Derivatives",
                        "ba-derivatives-vip-portal": "VIP Derivatives Portal",
                        "ba-derivatives-vip-portal-con": "VIP Exclusive, Tailor-made Institutional Grade Services",
                        "ba-derivatives-vip-portal-new": "VIP Portal",
                        "ba-desktop": "Desktop",
                        "ba-dex": "The most popular blockchain to build your own dApp",
                        "ba-distributionHistory": "Distribution History",
                        "ba-download": "Download",
                        "ba-download-slogan": "Secure, fast and elegant",
                        "ba-download-slogan-new": "Secure, fast and elegant",
                        "ba-downloadapp": "Scan to Download App iOS & Android",
                        "ba-downloadapp-cn": "1. Scan to download; 2.Send email to download@binance.com to get download link",
                        "ba-downloadoptions": "More Download Options",
                        "ba-duocoin-sidebarTitle": "Dual Investment Order",
                        "ba-earn": "Earn",
                        "ba-earn-advancedearn": "Advanced Earn",
                        "ba-earn-highyield": "High Yield",
                        "ba-earn-highyield-sub": "Maximize your returns with our advanced yield investment products",
                        "ba-earn-loans": "Loans",
                        "ba-earn-loans-sub": "Access quick and easy loans with competitive rates",
                        "ba-earn-overview": "Overview",
                        "ba-earn-overview-sub": "One-stop portal for all Earn products",
                        "ba-earn-simpleearn": "Simple Earn",
                        "ba-earn-simpleearn-sub": "Earn passive income on 300+ crypto assets with flexible and locked terms",
                        "ba-earnAssets": "Earn",
                        "ba-earnHistory": "Earn History",
                        "ba-earnbonus": "Earn Bonus",
                        "ba-education": "Blockchain and crypto education",
                        "ba-eoptions-Beginner": "Beginner",
                        "ba-eoptions-EasyOptions": "Easy Options",
                        "ba-eoptions-ExercisedHistory": "Exercised History",
                        "ba-eoptions-ExpiryDate": "Expiry Date",
                        "ba-eoptions-IV": "Implied Volatility",
                        "ba-eoptions-MaxPain": "Max Pain",
                        "ba-eoptions-OpenInterestAndVolume": "Open Interest & Volume",
                        "ba-eoptions-Options": "Options",
                        "ba-eoptions-OptionsData": "Options Data",
                        "ba-eoptions-OptionsDataOverview": "Options Data Overview",
                        "ba-eoptions-OptionsHome": "Options Home",
                        "ba-eoptions-PNLCalculator": "PNL Calculator",
                        "ba-estimatedValue": "Estimated Value",
                        "ba-eth-merge": "Ethereum Merge",
                        "ba-eth-upgrade-pectra": "Ethereum Upgrade (Pectra)",
                        "ba-eth2": "ETH Staking",
                        "ba-eth2-content": "One click staking, rewards paid daily",
                        "ba-eur-mobilum-subtitle": "Buy BUSD via SEPA",
                        "ba-eur-mobilum-title": "Bank Transfer",
                        "ba-exchange-spot": "Exchange has now been updated to Spot",
                        "ba-exchangeOrders": "Spot Order",
                        "ba-exchangeWallet": "Fiat and Spot",
                        "ba-exchangeWalletMsg": "(Deposit & Withdraw)",
                        "ba-execution-solutions": "Execution Solutions",
                        "ba-exscontent": "Enterprise exchange solutions",
                        "ba-fait": "Buy Crypto",
                        "ba-faitTitle": "Cash",
                        "ba-faq": "FAQ",
                        "ba-feed-description": "Stay informed with everything crypto",
                        "ba-fiat-challenge-0922": "Fiat Challenge",
                        "ba-fiat-payWith": "Pay with",
                        "ba-fiat-search": "Search",
                        "ba-fiat-under-fiat-maintenance": "Fiat service is under maintenance.",
                        "ba-finance": "Finance",
                        "ba-footer-download": "Scan to download the app",
                        "ba-footer-kz-disclaimer": "Binance Kazakhstan is authorised by the financial regulator of the AIFC, Astana Financial Services Authority (“AFSA”), to conduct the activities of Operating Digital Asset Trading Platform and Providing Custody. Status of the licence and its validity may be verified at the AFSA website (www.afsa.kz).<br/><br/>Risk Warning: Digital Asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance Kazakhstan is not liable for any losses you may incur.",
                        "ba-footer-pricepage": "Browse Crypto Prices",
                        "ba-footer-signup-title": "Trade on the go with Binance",
                        "ba-footer-token-unlock": "Token Unlock",
                        "ba-full-creen-content": "Fullscreen",
                        "ba-full-creen-title": "Trade with larger charts in the fullscreen",
                        "ba-fundingandtrade": "Funding & Trade Analysis",
                        "ba-fundingrates": "Funding Rates",
                        "ba-fut-exchange": "Spot Trading",
                        "ba-futrue": "Futures",
                        "ba-futrue-content": "Long or short market with up to 125x leverage",
                        "ba-futureFeeH": "Funding Rate History",
                        "ba-futureOrders": "Futures Order",
                        "ba-futureRealTimeFee": "Real-Time Funding Rate",
                        "ba-futureWallet": "Futures",
                        "ba-futures": "Futures",
                        "ba-futures-4th": "Futures 4th Anniversary",
                        "ba-futures-binancehome": "Binance Home",
                        "ba-futures-challenge": "Futures Challenge",
                        "ba-futures-content": "Fast navigation to our latest products, services and resources",
                        "ba-futures-home": "Futures Home",
                        "ba-futures-markets": "Futures Markets",
                        "ba-futures-markets-desc": "View trends and opportunities in the Futures Markets before trading",
                        "ba-futures-mock": "Mock Trading",
                        "ba-futures-referral": "Futures Referral",
                        "ba-futures-reward-hub": "Reward Hub",
                        "ba-futures-title": "USDT-M Futures",
                        "ba-futuresdata": "Futures Data",
                        "ba-futuress-content": "Long or short the market with up to 125x leverage",
                        "ba-gateway": "Fiat Gateway Application",
                        "ba-getstarted": "Get Started",
                        "ba-gift-binance": "Binance Gift Card",
                        "ba-gift-binance-grid": "Binance Gift Card",
                        "ba-give-us-feedback": "Give Us Feedback",
                        "ba-gridtradingbonus": "Grid Trading Bonus",
                        "ba-guide": "Guide",
                        "ba-h": "h",
                        "ba-happy-hour": "Happy hour",
                        "ba-happyhour": "Happy Hour",
                        "ba-header-loyality-redeem": "Redeem Gift",
                        "ba-header-loyality1_2-gp3": "Register now and get verified - Enjoy Welcome Rewards up to $100!",
                        "ba-header-nuz": "New User Zone",
                        "ba-header-register-popup-title": "Start Your Crypto Journey",
                        "ba-header-switch-accounts": "Switch Account",
                        "ba-headerbattle": "Battle",
                        "ba-heatmap": "Heatmap",
                        "ba-historicalData": "Historical Data",
                        "ba-hot-happyhour": "Hot",
                        "ba-huf-cash": "Buy crypto with your HUF balance",
                        "ba-iUnderstand": "I understand",
                        "ba-identification": "Identification",
                        "ba-imprint": "Imprint",
                        "ba-indexPrice": "Index Price",
                        "ba-information": "Information",
                        "ba-institutional": "Institutional & VIP Services",
                        "ba-institutional-content": "White-glove approach for tailored trading solutions",
                        "ba-institutional-title": "Institutional",
                        "ba-insuranceFundH": "Insurance Fund History",
                        "ba-inswitch-subtitle-CRC-sinpeMovil": "Buy Crypto via Sinpe Móvil",
                        "ba-inswitch-subtitle-GTQ-fri": "Buy crypto via Fri",
                        "ba-inswitch-subtitle-XOF-mobilebanking": "Buy Crypto with your XOF balance",
                        "ba-inswitch-subtitle-XOF-mobilemoney": "Buy Crypto with Mobile Money",
                        "ba-inswitch-subtitle-ars": "Buy Crypto with Bank Transfer",
                        "ba-inswitch-subtitle-cop": "Buy Crypto with Bank Transfer",
                        "ba-inswitch-subtitle-mxn": "Buy Crypto with Bank Transfer",
                        "ba-inswitch-subtitle-usd": "Buy Crypto with Bank Payment",
                        "ba-inswitch-subtitle-uyu": "Buy Crypto with Online Banking",
                        "ba-inswitch-title-CRC-sinpeMovil": "Sinpe Móvil",
                        "ba-inswitch-title-GTQ-fri": "Fri",
                        "ba-inswitch-title-XOF-mobilebanking": "Mobile Banking",
                        "ba-inswitch-title-XOF-mobilemoney": "Mobile Money",
                        "ba-inswitch-title-ars": "Bank Transfer (DEBIN)",
                        "ba-inswitch-title-cop": "Bank Transfer",
                        "ba-inswitch-title-mxn": "Bank Transfer (SPEI)",
                        "ba-inswitch-title-usd": "Bank Payment",
                        "ba-inswitch-title-uyu": "Online Banking",
                        "ba-inverseFutures": "COIN-M Futures",
                        "ba-inverseFuturesOrder": "COIN-M Futures Order",
                        "ba-inverseFuturesWallet": "COIN-M Futures",
                        "ba-isolated-margin": "Isolated Margin",
                        "ba-jexfutrue": "JEX Futures",
                        "ba-joinUs": "Careers",
                        "ba-justNow": "Just now",
                        "ba-keyAccountCoverage": "Key Account Coverage",
                        "ba-labs": "Incubator for top blockchain projects",
                        "ba-language": "Language",
                        "ba-languageRegion": "Language and Region",
                        "ba-launchpad": "Token Launch Platform",
                        "ba-launchpad-launchpool": "Launchpool",
                        "ba-launchpad-launchpool-desc": "Discover and gain access to new token launches",
                        "ba-launchpadhistory": "Launchpad History",
                        "ba-law": "Law Enforcement Requests",
                        "ba-leaderboard": "Leaderboard",
                        "ba-learn-earn-content": "Earn crypto by learning about blockchain",
                        "ba-learn-earn-title": "Learn & Earn",
                        "ba-lending": "Savings",
                        "ba-lending-con": "Your Crypto Savings Account",
                        "ba-lending-content": "Deposit crypto and earn rewards",
                        "ba-lendingAssets": "Savings",
                        "ba-lendingHistory": "Savings History",
                        "ba-levaragedtoken": "Leveraged Tokens",
                        "ba-levaragedtoken-content": "Enjoy increased leverage without risk of liquidation",
                        "ba-liquidswap": "Liquid Swap",
                        "ba-live": "Live",
                        "ba-live-desc": "Bringing blockchain broadcasts to you live",
                        "ba-loan-history": "Loan History",
                        "ba-logOut": "Log Out",
                        "ba-loyalty-hub": "Rewards Hub",
                        "ba-m": "mo",
                        "ba-margin": "Margin",
                        "ba-margin-content": "Increase your profits with leverage",
                        "ba-margin-title": "Margin",
                        "ba-marginOrders": "Margin Order",
                        "ba-marginWallet": "Margin",
                        "ba-marketing-consent-popup-desc1": "Would you like to be included in relevant offers, campaigns and market insight?",
                        "ba-marketing-consent-popup-desc2": "Would you like updates on special offers, campaigns, giveaways and rewards?",
                        "ba-marketing-consent-popup-desc3": "Do you want to receive updates on token airdrops, campaigns and special rewards?",
                        "ba-marketing-consent-popup-desc4": "Tell me about exclusive campaign offers, online content, events and giveaways.",
                        "ba-marketing-consent-popup-title1": "Keep up-to-date",
                        "ba-marketing-consent-popup-title2": "Stay in-the-know",
                        "ba-marketing-consent-popup-title3": "Stay informed",
                        "ba-marketing-consent-popup-title4": "Keeping you updated",
                        "ba-markets": "Markets",
                        "ba-markets-data": "Trading Data",
                        "ba-markets-data-desc": "View top market movers and price performance",
                        "ba-markets-overview": "Markets Overview",
                        "ba-markets-overview-desc": "Overview of the crypto market with real-time prices and key data",
                        "ba-meda-btitle-mxn": "Medá (E-Wallet)",
                        "ba-meda-subtitle-mxn": "For payments with MXN, use the Medá Wallet",
                        "ba-megadrop-subtitle": "Lock your BNB and complete Web3 quests for boosted airdrop rewards",
                        "ba-min": "min",
                        "ba-more": "More",
                        "ba-moreManagement": "More",
                        "ba-nav-otc": "Convert History",
                        "ba-new-user-zone": "Claim 100 USDT",
                        "ba-news": "News",
                        "ba-newyear": "$20,000 New Year Giveaway - Top prize 2,000 BUSD",
                        "ba-newyear-newuser": "$10,000 Lucky Draw, 11th - 14th Jan 2021",
                        "ba-next": "Next",
                        "ba-nft-description": "Explore NFTs from creators worldwide",
                        "ba-no": "No",
                        "ba-noLatestNotification": "No new notifications",
                        "ba-notificationDetail": "Notification Detail",
                        "ba-ocbs-content": "Purchase crypto with credit/debit cards",
                        "ba-official-verification": "Binance Verify",
                        "ba-oldWebsite": "Old Website",
                        "ba-one-trust-cookie": "Cookie Preferences",
                        "ba-open": "Open",
                        "ba-openOrder": "Open Orders",
                        "ba-options-rfq": "Options RFQ",
                        "ba-optionsBLOCK": "BLOCK",
                        "ba-optionsData": "Options Data",
                        "ba-optionsOrder": "Options Order",
                        "ba-optionsWallet": "Options",
                        "ba-orderHistory": "Order History",
                        "ba-orders": "Orders",
                        "ba-otc-block-trading": "Block Trading",
                        "ba-otc-block-trading-desc": "Easily execute large trades with minimum slippage",
                        "ba-otc-trading": "OTC Trading",
                        "ba-otc-trading-desc": "Spot, Options, Algo Orders and more",
                        "ba-otctrading": "OTC Trading",
                        "ba-others": "Orders",
                        "ba-overview": "Futures Overview",
                        "ba-overviewcontent": "View our full range of crypto-derivative instruments",
                        "ba-p2p-NZD": "Buy and sell crypto easily on Binance P2P",
                        "ba-p2p-desc": "Buy & sell cryptocurrencies using bank transfer and 100+ options",
                        "ba-p2pcontent": "Web Online",
                        "ba-p2pro": "P2Pro Merchant Application",
                        "ba-p2ptiitlle": "P2P Crypto Exchange",
                        "ba-p2ptitle2": "P2P Crypto Exchange",
                        "ba-p2ptitle3": "Bank Transfer, Alipay, Wechat",
                        "ba-partner-wallet": "WazirX Wallet",
                        "ba-payment history": "Payment History",
                        "ba-pendingNotifications": "pending notifications",
                        "ba-perference": "Preference",
                        "ba-perpetualFutures": "USDⓈ-M Futures",
                        "ba-perpetualFutures-content": "Contracts settled in USDT and USDC",
                        "ba-php-deposit": "Bank transfer",
                        "ba-php-wallet": "Buy Crypto with your PHP balance",
                        "ba-pm": "Portfolio Margin",
                        "ba-pnlAnalysis": "PNL Analysis",
                        "ba-pool": "Mining Pool",
                        "ba-pool-content": "Mine more rewards by connecting to the pool",
                        "ba-poolaccouts": "Pool",
                        "ba-portfolio-margin": "Portfolio Margin",
                        "ba-prev": "Prev",
                        "ba-promotion-card": "7 BUSD Cashback for your first purchase",
                        "ba-promotion-deposit": "7 BUSD Cashback for your first deposit",
                        "ba-proof-asset": "Proof of Btoken Asset",
                        "ba-qrcode-tip": "Send email to download@binance.com, obtain stable/fast App download links automatically.",
                        "ba-quarterlyFutures": "COIN-M Futures",
                        "ba-quarterlyFutures-content": "Contracts settled in cryptocurrency",
                        "ba-rateArbitrage": "Arbitrage Data",
                        "ba-recurring-buy-subtitle": "Schedule regular crypto purchases via card",
                        "ba-recurring-buy-title": "Recurring Buy",
                        "ba-referFriendsToEarn": "Refer Friends to Earn",
                        "ba-referral": "Referral",
                        "ba-referral-subtitle": "Invite friends to earn either a commission rebate or a one-time reward",
                        "ba-referral-title": "Referral Program",
                        "ba-reponsible": "Responsible Trading",
                        "ba-reponsible-content": "Learn how you could practice responsible trading with Binance Futures",
                        "ba-research": "Institutional-grade analysis, in-depth insights, and more",
                        "ba-risk-warning": "Risk Warning",
                        "ba-ron-cash": "Buy crypto with your RON balance",
                        "ba-safetypay-subtitle": "Buy Crypto with Online Banking",
                        "ba-safetypay-title": "Online Banking",
                        "ba-safetypay-title-PEN": "PagoEfectivo (QR Code)",
                        "ba-scanToDownload": "Scan to Download",
                        "ba-security": "Security",
                        "ba-signIn": "Log In",
                        "ba-signup": "Sign Up",
                        "ba-simple-earn-con": "Earn daily rewards on your idle tokens",
                        "ba-simple-earn-title": "Simple Earn",
                        "ba-spot": "Spot",
                        "ba-spot-margin": "Spot & Margin",
                        "ba-spot-margin-desc": "Buy and sell on the Spot market and leverage with margin",
                        "ba-spot-only": "Spot",
                        "ba-spot-only-content": "Buy & Sell Crypto Efficiently",
                        "ba-spot-only-subtitle": "Buy and sell on the Spot market with advanced tools",
                        "ba-spot-title": "Spot",
                        "ba-spotdca": "Spot DCA",
                        "ba-staking": "Staking",
                        "ba-staking-con": "Easy Stake, Higher Returns",
                        "ba-staking-content": "Earn more rewards with Binance Staking",
                        "ba-status": "Status",
                        "ba-stock-token": "Stock Token",
                        "ba-stock-token-desc": "Trade Stocks with Crypto",
                        "ba-strategy-order": "Trading Bots Order",
                        "ba-strategy-overview": "Overview",
                        "ba-strategy-rebalancingBot": "Rebalancing Bot",
                        "ba-strategywallet": "Trading Bots",
                        "ba-subaccount": "Sub Accounts",
                        "ba-submenu-staking": "Staking",
                        "ba-submenutitle-staking": "Staking",
                        "ba-suggest": "Suggest for you",
                        "ba-support": "Support",
                        "ba-support-center-desc": "Access Support FAQ articles",
                        "ba-supportSubmit": "Submit a request",
                        "ba-swap-desc": "Add liquidity and earn double",
                        "ba-swap-title": "Liquidity Farming",
                        "ba-swapfarming": "Swap Farming",
                        "ba-swapfarming-desc": "Swap to earn BNB",
                        "ba-tableMarkets": "Markets",
                        "ba-tableMarkets-content": "Trade Bitcoin & Other Cryptos",
                        "ba-tap-BHD-subtitle": "Buy with BENIFIT card",
                        "ba-tap-KWD-subtitle": "Buy with KNET card",
                        "ba-tap-credit-card": "Credit Card",
                        "ba-tap-title": "ATM/Debit Card",
                        "ba-task-taskCenter": "Task Center",
                        "ba-tax": "Tax",
                        "ba-testnet": "Testnet",
                        "ba-titile1": "Fiat",
                        "ba-titile2-1": "P2P",
                        "ba-titile2-2": "Buy Crypto",
                        "ba-tour": "Tour",
                        "ba-tournament": "Tournament",
                        "ba-trade": "Trade",
                        "ba-tradeHistory": "Trade History",
                        "ba-tradeRules": "Trading Rules",
                        "ba-trading-fees": "Trading Fees",
                        "ba-trading-fees-desc": "View the trading fees",
                        "ba-trading-rules-desc": "View the trading rules and limits",
                        "ba-tradingData": "Trading Data",
                        "ba-transactionhistory": "Transaction History",
                        "ba-travel-rule": "Travel Rule",
                        "ba-travel-rule-desc": "Enhance transparency and combat financial crimes such as money laundering and terrorism financing",
                        "ba-travel-rule-gtr": "GTR",
                        "ba-travel-rule-title": "Travel Rule Partner",
                        "ba-trbinance": "TRBINANCE.COM",
                        "ba-trustWallet": "Binance's official crypto wallet",
                        "ba-tutorial": "Tutorial",
                        "ba-usdtFutures": "USDⓈ-M Futures",
                        "ba-usdtFuturesOrder": "USDⓈ-M Futures Order",
                        "ba-usdtFuturesWallet": "USDⓈ-M Futures",
                        "ba-vanillaoptions": "Vanilla Options",
                        "ba-viewAll": "View All",
                        "ba-viewMore": "View more",
                        "ba-viewmore": "View More",
                        "ba-vip-institutional": "VIP & Institutional",
                        "ba-vip-institutional-desc": "Your trusted digital asset platform for VIPs and institutions",
                        "ba-volatilityIndex": "Volatility Index",
                        "ba-voptions": "Options",
                        "ba-voptionscontent": "USDT Options with limited downside and affordable entry",
                        "ba-wallet": "Wallet",
                        "ba-wallet-card": "Card",
                        "ba-wallet-overview": "Overview",
                        "ba-wallet-title-AED": "Wallet (AED)",
                        "ba-wallet-title-ARS": "Wallet (ARS)",
                        "ba-wallet-title-AUD": "Wallet (AUD)",
                        "ba-wallet-title-BHD": "Wallet (BHD)",
                        "ba-wallet-title-BRL": "Wallet (BRL)",
                        "ba-wallet-title-DKK": "Wallet (DKK)",
                        "ba-wallet-title-EUR": "Wallet (EUR)",
                        "ba-wallet-title-GBP": "Wallet (GBP)",
                        "ba-wallet-title-GHS": "Wallet (GHS)",
                        "ba-wallet-title-HKD": "Wallet (HKD)",
                        "ba-wallet-title-HUF": "Wallet (HUF)",
                        "ba-wallet-title-JPY": "Wallet (JPY)",
                        "ba-wallet-title-KWD": "Wallet (KWD)",
                        "ba-wallet-title-KZT": "Wallet (KZT)",
                        "ba-wallet-title-NGN": "Wallet (NGN)",
                        "ba-wallet-title-PHP": "Wallet (PHP)",
                        "ba-wallet-title-RON": "Wallet (RON)",
                        "ba-wallet-title-RUB": "Wallet (RUB)",
                        "ba-wallet-title-TRY": "Wallet (TRY)",
                        "ba-wallet-title-UAH": "Wallet (UAH)",
                        "ba-wallet-title-UGX": "Wallet (UGX)",
                        "ba-wallet-title-ZAR": "Wallet (ZAR)",
                        "ba-walletDepositSubtitl3": "Epay",
                        "ba-walletDepositSubtitle": "Advcash, Payeer",
                        "ba-walletDepositSubtitle1": "Papara,  Advcash",
                        "ba-walletDepositSubtitle2": "Advcash",
                        "ba-walletDepositSubtitle3": "Epay",
                        "ba-walletDepositSubtitle4": "Deposit NGN with Bank Transfer",
                        "ba-walletDepositSubtitle5": "Deposit ZAR with Bank Transfer",
                        "ba-walletDepositSubtitle6": "Advcash, Payeer, Epay",
                        "ba-walletDepositSubtitle7": "Etana, Epay",
                        "ba-walletDepositSubtitle8": "Etana",
                        "ba-walletDepositSubtitle9": "Mobile Money",
                        "ba-web3-wallet": "Binance Wallet",
                        "ba-whistleblowing": "Secure Internal Communication Channel",
                        "ba-win-dwon": "Download Desktop Clients >",
                        "ba-withdraw": "Withdraw",
                        "ba-y": "Y",
                        "ba-yes": "Yes",
                        "ba_copy_trading": "Copy Trading",
                        "ba_social_trading": "Social Trading",
                        "babt_description": "Verified user credentials for the Web3 era",
                        "binance-base-Volume": "Quote Volume",
                        "binancecloud": "Enterprise exchange solutions",
                        "binancecould": "Binance Cloud",
                        "bn-hk-limit-popup-checkbox-content": "I Understand",
                        "bn-hk-limit-popup-content": "The products and services on this website are not intended for individuals in Hong Kong. Nothing on this website is intended to be construed as a solicitation of any individual in Hong Kong.",
                        "bn-pop-cancel": "Cancel",
                        "bn-pop-close": "Close",
                        "bn-pop-content1": "Please complete New Identity Verification before 2021-12-01 and receive a reward. If you do not pass verification by this date, your account will be restricted to: withdrawal only.",
                        "bn-pop-content2": "Please provide your source of wealth declaration. We will not be able to provide services before you submit the source of wealth declaration.",
                        "bn-pop-content3": "Your Source of Wealth Declaration did not meet our review requirements. Services have been suspended. Please resubmit your declaration.",
                        "bn-pop-continue": "Continue",
                        "bn-pop-linkContent": "New Identity Verification",
                        "bn-pop-proceed": "I Understand",
                        "bn-pop-reset-kyc-content": "To avoid account restrictions, please complete our new identity verification process. Please go to the verification center now to start the process. It should not take more than 5-10 minutes to complete.",
                        "bn-pop-startNow": "Start Now",
                        "bn-pop-title-1": "Verification Required",
                        "bn-pop-title-2": "Source of Wealth Declaration Required",
                        "bn-pop-title-3": "Source of Wealth Declaration Failed",
                        "bn-pop-tryAgain": "Try Again",
                        "bn-pop-verify-now": "Verify now",
                        "bn-pop-verifyNow": "Verify Now",
                        "bottom-keyclient": "Key Client Privileges",
                        "com_account_guide_kyc": "Complete verification to access Binance products and services.",
                        "com_account_guide_kyc_Voucher": "Plus, verify now and get a 500 BUSD Savings Trial Fund Voucher.",
                        "com_account_guide_learn_more": "Learn more",
                        "com_account_guide_verify": "Verify",
                        "com_header_btn_click_here": "Click here",
                        "com_header_btn_details": "Details",
                        "com_header_btn_disagree": "I Disagree",
                        "com_header_btn_start_now": "Start Now",
                        "com_header_btn_support": "Support",
                        "com_header_btn_try_again": "Try Again",
                        "com_header_btn_upload_now": "Upload Now",
                        "com_header_btn_view_details": "View Details",
                        "com_header_content_200004045": "Due to regulatory requirements, we require you to provide additional information.",
                        "com_header_contnet_200004082": "We noticed that your trade and withdrawal functions are temporarily suspended due to a dispute on your P2P order. We apologize for the inconvenience. Please click \"I Disagree\" below and our Customer Support team will assist you immediately.",
                        "com_header_contnet_3983": "In order to use this service, please first complete address verification.",
                        "com_header_contnet_3984": "Your address verification is under review. Thank you for your patience.",
                        "com_header_contnet_3985": "Your address verification has failed. We have emailed you explaining why this has happened. Please check the email before submitting your request again.",
                        "com_header_contnet_3986": "Unfortunately, our services are not available for your account. This could be due to country restrictions. We apologize for any inconvenience caused. You can withdraw assets from binance.com to binance.ca.",
                        "com_header_contnet_3987": "In order to enhance our services and ensure the accuracy of your account information, we kindly request your cooperation in providing some additional information. Please click \"Start Now\" to begin the process.",
                        "com_header_contnet_3992 content": "Some balances on your account have been temporarily frozen. Potential reasons for freezing may include, security concerns or potential violations of our Terms of Use. Please try again after 24 hours.",
                        "com_header_contnet_4001": "Your ID document expires soon. Please upload a new ID before the current one expires, or your Binance account will be restricted to “Withdrawal Only” mode.",
                        "com_header_contnet_4002": "Your ID document has expired. Please upload a new one now, or your Binance account will be restricted to “Withdrawal Only” mode 30 days after the expiration date of the ID document.",
                        "com_header_contnet_4003": "Please complete your Source of Wealth verification. Service access may be restricted until this is finished.",
                        "com_header_contnet_4004": "Source of Wealth verification failed. Please resubmit your application.",
                        "com_header_contnet_4005": "Source of Wealth verification is under review.",
                        "com_header_contnet_4013": "To meet our global standards, we need you to update your information. You will need to provide this information to continue using fiat channels as usual. All other products and services will continue to be available.",
                        "com_header_contnet_4014": "We have noticed that you have not yet provided your Tax ID. Please note that Binance is required by law to collect this information.",
                        "com_header_contnet_4042_1": "You have been invited to become a Verification Collaborator by an entity. As a collaborator, you will be able to provide certain required information to help the entity pass the enterprise verification process.",
                        "com_header_contnet_4042_2": "If you would like to become a Verification Collaborator, please click \"View Details\" below. You will be redirected to the start of enterprise verification process.",
                        "com_header_contnet_4069": "Action Required: Please complete the Binance Japan Verification Process.",
                        "com_header_contnet_4070": "Please convert, liquidate, or withdraw any impermissible assets by Nov 30th 2023, or earlier (if advised).",
                        "com_header_contnet_52": "We are unable to provide services to users who are residing in restricted countries/regions. If you have changed addresses, please complete verification again. If you cannot provide a verified address outside of restricted areas, please withdraw funds from your account.",
                        "com_header_contnet_53": "It seems that you are attempting to access our services from a restricted area. Please upload your Proof of Address to continue using our services.",
                        "com_header_contnet_54": "Your address verification is under review. Thank you for your patience.",
                        "com_header_contnet_55": "Your address verification has failed. Please refer to your email for the reason before submitting your request again.",
                        "com_header_contnet_56": "We are unable to serve business accounts registered in restricted countries/regions. If your business registration address has changed, please contact our customer service representatives.",
                        "com_header_contnet_66": "You are required to complete the application for this product and Wholesale Assessment before trading.",
                        "com_header_contnet_67": "You must complete Wholesale Assessment before trading these products.",
                        "com_header_contnet_68": "We are currently reviewing your documentation, to confirm your classification as a Wholesale Client before you are able to trade these products.",
                        "com_header_contnet_69": "You are not eligible to access certain products/features in your region at this time. If you need further assistance, please reach out to Binance Support.",
                        "com_header_contnet_70": "We were unable to confirm your classification as a Wholesale Client. Please see details for your next action.",
                        "com_header_contnet_71": "Please provide us with current proof of residential address outside of Singapore before July 21st.If you are unable to provide this evidence within the specified timeframe, your account will be restricted until you can do so, with the exception of permitting withdrawals of assets from your account.",
                        "com_header_contnet_72": "Please provide us with current proof of residential address outside of Singapore before July 21st.If you are unable to provide this evidence within the specified timeframe, your account will be restricted until you can do so, with the exception of permitting withdrawals of assets from your account.",
                        "com_header_contnet_jp_4070": "Binance.com services will remain available until Nov 30th 2023, or earlier (if advised).",
                        "com_header_contnet_jp_tip": "Binance.com services will remain available even if you complete the verification process (until Nov 30th 2023, or earlier (if advised)).",
                        "com_header_contnet_marketing_consent": "Don’t miss out! We need your consent to send you occasional updates on special offers and exclusive events. Just click below to stay up to date.",
                        "com_header_contnet_pep": "Please provide the requested information. By providing us with more information, you can speed up the review process.",
                        "com_header_contnet_pep_title": "Information Required",
                        "com_header_contnet_please_go_here": "Please Go Here",
                        "com_header_contnet_wck": "In order to access our services, we kindly request your cooperation in providing some additional information about your potential position as a Politically Exposed Person (PEP). The questionnaire will only require a minute of your attention. Please click “Start Now” to begin the process.",
                        "com_header_later": "Later",
                        "com_header_title_4042": "Invitation to Become a Verification Collaborator",
                        "common-th-24hChange": "24h Change",
                        "common-th-account": "Account",
                        "common-th-lastPrice": "Last Price",
                        "common-th-marketCap": "Market Cap",
                        "common-th-name": "Coin",
                        "description-tier2-api": "Unlimited opportunities with one key",
                        "description-tier2-assets-management": "Discover various asset management solutions",
                        "description-tier2-custody": "Secure digital assets with leading infrastructure",
                        "description-tier2-execution-otc": "First-class OTC liquidity and execution services",
                        "description-tier2-institutional-homepage": "Premium digital asset solutions for institutions",
                        "description-tier2-link-program": "Connect and grow with Binance liquidity solutions",
                        "description-tier2-vip": "One-stop station made for VIP and institutions",
                        "description-tier2-vip-historical-market": "Your all-in-one trading data repository",
                        "description-tier2-vip-loan": "Bespoke institutional loan with wide coverage",
                        "download-bar-downloadAndroid": "Android APK",
                        "download-bar-downloadIOS": "iOS Download",
                        "earn-eth2": "One click staking, rewards paid daily.",
                        "exchange-check": "Success! Please scroll down to check.",
                        "exchange-fiat-zar-stitch": "Online Banking",
                        "exchange-fiat-zar-stitch-subtitle": "Deposit ZAR via top banks",
                        "exchange-inmail-markAllread": "Mark all as read",
                        "exchange-wallet-fee": "Fee:",
                        "exchange-wallet-matchedNetworksTip": "该地址自动匹配网络 ## , 建议您选择",
                        "exchange-wallet-minDeposit": "Deposit amount must be greater than <strong>##</strong>",
                        "exchangeWallet": "Spot Wallet",
                        "fait-titile": "Fiat",
                        "footer-building-trust": "Building Trust",
                        "footer-community": "community",
                        "footer-legal": "Legal",
                        "footer-trading-insight": "Trading Insight",
                        "footer_bitcoin_price": "Bitcoin Price",
                        "footer_bitcoin_price_prediction": "Bitcoin Price Prediction",
                        "footer_buy_dogecoin": "Buy Dogecoin",
                        "footer_buy_xrp": "Buy XRP",
                        "footer_country_region_selector": "Country Selector",
                        "footer_ethereum_price": "Ethereum Price",
                        "footer_ethereum_price_prediction": "Ethereum Price Prediction",
                        "footer_price_predictions": "Browse Crypto Price Predictions",
                        "footer_proof_of_reserves": "Proof of Reserves (PoR)",
                        "footer_service_proof_b_tokens": "Proof of Collateral for B-Tokens",
                        "footer_sitemap": "Sitemap",
                        "footer_support_request_feature": "Product Feedback & Suggestions",
                        "footer_transparency": "Trust & Transparency",
                        "futures_copy_trading": "Copy Trading",
                        "futures_social_trading": "Social Trading",
                        "gcc_registration_bh": "Binance Bahrain",
                        "gcc_registration_jp": "Binance Japan",
                        "header-link-twitter": "Link X",
                        "header-linked": "Linked",
                        "header-tier1-deposit": "Deposit",
                        "header-tier1-feed": "Feed",
                        "header-tier1-institutional": "Institutional",
                        "header-tier2-api": "APIs",
                        "header-tier2-assets-management": "Asset Management Solutions",
                        "header-tier2-audit": "Audit",
                        "header-tier2-custody": "Custody",
                        "header-tier2-execution-otc": "Execution & OTC Services",
                        "header-tier2-institutional-homepage": "Institutional Home",
                        "header-tier2-leaderboard": "Leaderboard",
                        "header-tier2-leaderboard-desc": "Exclusive ranking for Binance traders, follow top traders' strategies",
                        "header-tier2-link-program": "Link",
                        "header-tier2-vip": "VIP Portal",
                        "header-tier2-vip-historical-market": "Historical Market Data",
                        "header-tier2-vip-loan": "VIP Loan",
                        "header-tier2-wallet-verification": "Verification",
                        "header-title-bifinity": "Binance Connect",
                        "header-todolist": "You have {{count}} pending action requests to complete.",
                        "header_title_binance_tax": "Free tax tool to calculate your crypto taxes",
                        "home_market_consent_popup_No": "No",
                        "home_market_consent_popup_Yes": "Yes",
                        "home_market_consent_popup_content": "Would you like to be included in relevant offers, campaigns and market insight?",
                        "home_market_consent_popup_content_planB": "Would you like updates on special offers, campaigns, giveaways and rewards?",
                        "home_market_consent_popup_content_planC": "Do you want to receive updates on token airdrops, campaigns and special rewards?",
                        "home_market_consent_popup_content_planD": "Tell me about exclusive campaign offers, online content, events and giveaways.",
                        "home_market_consent_popup_title": "Keep up-to-date",
                        "home_market_consent_popup_title_planB": "Stay in-the-know",
                        "homepage-br-ip-switch-lan": "To view content specific to your location, we suggest that you set Brazil as your country of choice.",
                        "homepage-br-ip-switch-lan-continue": "Continue",
                        "landing-data-title": "Historical Market Data",
                        "na-assetPR": "Access",
                        "nc-announcement": "Announcements",
                        "nc-campaign": "Campaigns",
                        "nc-chat": "Chats",
                        "nc-chat-file": "[File]",
                        "nc-no-news": "No news to report",
                        "nc-system_message": "System Messages",
                        "no_need_sign_agreement": "You are not required to complete the declaration.",
                        "ph-send-header": "Binance Send",
                        "pos-type-ahead": "Redeem earlier",
                        "pos-type-mature": "Redeemed",
                        "pos-type-transferred": "Transfer to Flexible",
                        "price-alert-fluctuation-drop": "{{symbol}} has dropped by {{pricePercent}} in the past 24 hours to {{price}} {{coin}}",
                        "price-alert-fluctuation-rise": "{{symbol}} has up by {{pricePercent}} in the past 24 hours to {{price}} {{coin}}",
                        "price-alert-history-rise-limit": "{{symbol}} achieves record high, surpassing {{price}} {{quote}}. Analyze market trends to refine your trading strategy. Explore now ➡️",
                        "price-alert-milestone-drop": "{{symbol}} dips below {{price}} {{coin}}",
                        "price-alert-milestone-rise": "{{symbol}} crosses {{price}} {{coin}}",
                        "referral_tag": "Unlock Rewards",
                        "service_group_card_binanceredpacket_allclaimed": "All Claimed",
                        "service_group_placeholder_bestwishes": "Happy New Year, HODL to the moon!",
                        "service_group_placeholder_giftwishes_regular": "Crypto moon high, profits fly!",
                        "share-poster-commonEarn": "Earn coins together",
                        "share-poster-download": "download",
                        "share-poster-future": "contract",
                        "share-poster-high": "Up to",
                        "share-poster-highReferral": "Rebate up to",
                        "share-poster-inviteFrends": "invite friends",
                        "share-poster-lieEarn": "Lying down to make money",
                        "share-poster-mining": "Mining pool",
                        "share-poster-notDream": "Not a dream",
                        "share-poster-oneBillion": "Achieve a small goal and earn him 100 million",
                        "share-poster-share": "Share",
                        "share-poster-slectSize": "Choose size",
                        "share-poster-spot": "spot",
                        "share-poster-trade": "transaction",
                        "tax-ui-footer-risk-warnings": "Binance Tax Risk Warnings",
                        "tax-ui-footer-send-feedback": "Send your feedback to:",
                        "terms-200004079": "We have updated our Terms of Use and Privacy Notice which will automatically be binding and effective from 31 Aug, 2023. No further action is required on your part. Your continued use of our services constitutes your acceptance of the updated Terms of Use and Privacy Notice.",
                        "terms-200004079-global-tou": "We have updated our <a href=\"https://www.{{suffixOrigin}}/{{locale}}/terms\">Terms of Use</a>. <br/><br/>These will automatically be binding and effective on 31 Aug, 2023.<br/><br/>No further action is required on your part.<br/><br/>Your continued use of our services constitutes your acceptance of the updated <a href=\"https://www.{{suffixOrigin}}/{{locale}}/terms\">Terms of Use</a>.",
                        "tnc_accept_btn": "I accept",
                        "tnc_agree_terms": "I agree to the terms",
                        "tnc_receive_marketing": "I agree to receive marketing updates from Binance.",
                        "tnc_receive_marketing_v2": "Yes! I want to be the first to know about special offers and exclusive Binance events.",
                        "todo-tips": "You have {{count}} pending action requests to complete.",
                        "tradeGuide-startTrading": "Start trading now",
                        "uc-account": "Account",
                        "uc-assets": "Assets",
                        "uc-orders": "Orders",
                        "uc-settings": "Settings",
                        "uk-do-it": "Do it.",
                        "uk-navi": "You are required to complete self certification to access several Binance products.",
                        "universal-link-appOnlyNotice": "The page is only available in Binance App",
                        "universal-link-download": "Download Binance App",
                        "universal-link-ok": "OK",
                        "universal-link-stayWeb": "Stay here",
                        "universal-link-viewApp": "View in Binance App",
                        "webPushAlert-btnText": "Allow",
                        "webPushAlert-title": "Click here to receive desktop notifications and updates from Binance.com"
                    },
                    "commonEnv": {
                        "API_HOST": "https://www.binance.com",
                        "STATIC_HOST": "https://bin.bnbstatic.com",
                        "STATIC_HOST_SHARE": "https://public.bnbstatic.com",
                        "THEMIS_ADDRESS": "https://api.saasexch.com/bapi/themis/api/",
                        "THEMIS_ENV": "PROD",
                        "GOOGLE_CLIENT_ID": "960821425630-aclsesu662patrhhq95iuuijekgg15p3.apps.googleusercontent.com",
                        "MARKET_STREAM_HOST": "wss://nbstream.binance.com",
                        "domain": "binance.com",
                        "theme": "dark"
                    },
                    "allConfig": {
                        "scenes": [{
                            "sceneName": "Option-exclude-lang",
                            "visibleType": "all",
                            "excludeLang": "en-ZA,sv",
                            "themisInfo": {}
                        }, {
                            "sceneName": "a",
                            "visibleType": "login",
                            "validate": "!noDerivativesLVT",
                            "excludeLang": "en-ZA",
                            "includeRegion": "es",
                            "themisInfo": {}
                        }, {
                            "sceneName": "b",
                            "visibleType": "login",
                            "excludeLang": "en-ZA",
                            "excludeRegion": "es",
                            "themisInfo": {}
                        }, {
                            "sceneName": "c",
                            "visibleType": "nologin",
                            "excludeLang": "es,en-ZA",
                            "excludeRegion": "es",
                            "themisInfo": {}
                        }, {
                            "sceneName": "with_deposit_button",
                            "visibleType": "all",
                            "themisInfo": {
                                "authHeader": "ODAwODc0MTAyNDp6dTYwTHZpbmxDTWxGZUFnMnRGSURreFA4RnNOQVJlSg==",
                                "expression": "deposit_button=have_button"
                            }
                        }, {
                            "sceneName": "exclude-local-kz",
                            "visibleType": "all",
                            "excludeLang": "en-KZ,kk-KZ,ru-KZ",
                            "themisInfo": {}
                        }, {
                            "sceneName": "trade-p2p-hide",
                            "visibleType": "all",
                            "excludeLang": "id",
                            "themisInfo": {}
                        }, {
                            "sceneName": "earn-launchpad-hide",
                            "visibleType": "all",
                            "excludeLang": "zh-CN,en-KZ,kk-KZ,ru-KZ",
                            "themisInfo": {}
                        }, {
                            "sceneName": "footer-news-hide",
                            "visibleType": "all",
                            "excludeLang": "tr",
                            "themisInfo": {}
                        }, {
                            "sceneName": "footer-notices-hide",
                            "visibleType": "all",
                            "excludeLang": "tr,en-KZ,kk-KZ,ru-KZ,zh-CN",
                            "themisInfo": {}
                        }, {
                            "sceneName": "parentUser",
                            "visibleType": "all",
                            "validate": "parentUser",
                            "themisInfo": {}
                        }, {
                            "sceneName": "isExistFutureAccount",
                            "visibleType": "all",
                            "validate": "isExistFutureAccount",
                            "themisInfo": {}
                        }, {
                            "sceneName": "tradingview",
                            "visibleType": "all",
                            "includeLang": "en",
                            "themisInfo": {}
                        }, {
                            "sceneName": "paymenthistory-exclude",
                            "visibleType": "all",
                            "excludeRegion": "th",
                            "themisInfo": {}
                        }, {
                            "sceneName": "show-new-user-zone",
                            "visibleType": "all",
                            "themisInfo": {
                                "authHeader": "MTI4NTE4NDgxMTptd3dXU2x5bkR2dTBkbXpxT1d0NEhta0hhZmg2ZGVmaw==",
                                "expression": "showentry=NewUserZone"
                            }
                        }, {
                            "sceneName": "nuz",
                            "visibleType": "all",
                            "themisInfo": {
                                "authHeader": "MDg3MDc0NDIwNjpOUkthd3pWTzREUUx4NUh0cExTYTQ3aDRQMmk4RVNJZQ==",
                                "featureName": "new-user-zone"
                            }
                        }, {
                            "sceneName": "futures-showPortfolioIsolatedMargin",
                            "visibleType": "all",
                            "validate": "isPortfolioMarginRetailUser",
                            "themisInfo": {}
                        }, {
                            "sceneName": "futures-showMarginFutures",
                            "visibleType": "all",
                            "validate": "!isPortfolioMarginRetailUser",
                            "themisInfo": {}
                        }, {
                            "sceneName": "vip_user",
                            "visibleType": "all",
                            "validate": "tradeLevel",
                            "themisInfo": {}
                        }, {
                            "sceneName": "spain-whistleblowing",
                            "visibleType": "all",
                            "includeRegion": "ES",
                            "themisInfo": {}
                        }],
                        "header": {
                            "logo": {
                                "link": "https://www.binance.com/en"
                            },
                            "menus": [{
                                "menuType": "text",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "crypto-f",
                                    "title": "ba-titile2-2",
                                    "link": "https://www.binance.com/en/crypto/buy",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeys": "buycrypto",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "normal",
                                "subMenus": []
                            }, {
                                "menuType": "text",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "crypto-f",
                                    "title": "ba-buy-and-sell",
                                    "link": "https://www.binance.com/en/convert-buy",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeys": "convert-buy",
                                    "businessKeysIsWhite": true
                                },
                                "subMenuSize": "normal"
                            }, {
                                "menuType": "text",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "market-s24",
                                    "title": "ba-tableMarkets",
                                    "link": "https://www.binance.com/en/markets/overview",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "large",
                                "subMenus": [{
                                    "icon": "market-overview-g",
                                    "title": "ba-markets-overview",
                                    "link": "https://www.binance.com/en/markets/overview",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-markets-overview-desc",
                                    "columnNumber": 1
                                }, {
                                    "icon": "trading-data-g",
                                    "title": "ba-markets-data",
                                    "link": "https://www.binance.com/en/markets/trading_data",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-markets-data-desc",
                                    "columnNumber": 1
                                }]
                            }, {
                                "menuType": "gird",
                                "subMenuFlow": "column",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "trade-f",
                                    "title": "ba-trade",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "large",
                                "subMenus": [{
                                    "title": "ba-basic",
                                    "link": "ba-basic",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "subTitle",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Spot2C",
                                    "title": "ba-spot-only",
                                    "link": "https://www.binance.com/en/trade/BTC_USDT?type=spot",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-spot-only-subtitle",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Margin2C",
                                    "title": "ba-margin",
                                    "link": "https://www.binance.com/en/trade?type=cross",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-margin-content",
                                    "columnNumber": 1,
                                    "businessKeys": "marginTrade"
                                }, {
                                    "icon": "P2P2C",
                                    "title": "ba-titile2-1",
                                    "link": "https://p2p.binance.com/en",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-c2c-content",
                                    "sceneNames": "trade-p2p-hide",
                                    "columnNumber": 1,
                                    "businessKeys": "tradeC2C"
                                }, {
                                    "icon": "Convert2C",
                                    "title": "ba-convert-block",
                                    "link": "https://www.binance.com/en/convert",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-BasicCONVERT-content",
                                    "columnNumber": 1,
                                    "businessKeys": "tradeConvert"
                                }, {
                                    "title": "ba-Advanced",
                                    "link": "ba-Advanced",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "subTitle",
                                    "columnNumber": 2
                                }, {
                                    "icon": "alpha-2c",
                                    "title": "ba-Alpha",
                                    "link": "https://www.binance.com/en/alpha",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-Alpha-desc",
                                    "columnNumber": 2,
                                    "businessKeys": "BinanceAlpha"
                                }, {
                                    "icon": "TradingBot2C",
                                    "title": "ba-StrategyTrading",
                                    "link": "https://www.binance.com/en/trading-bots",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-StrategyTrading-desc",
                                    "columnNumber": 2,
                                    "businessKeys": "Spot_Grid"
                                }, {
                                    "icon": "CopyTrading2C",
                                    "title": "ba-copy-trading",
                                    "link": "https://www.binance.com/en/copy-trading",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-copy-trading-desc",
                                    "columnNumber": 2,
                                    "businessKeys": "all_copy_trading"
                                }, {
                                    "icon": "Api2C",
                                    "title": "header-tier2-api",
                                    "link": "https://www.binance.com/en/binance-api",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "description-tier2-api",
                                    "columnNumber": 2
                                }]
                            }, {
                                "menuType": "gird",
                                "subMenuFlow": "column",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "futures-f",
                                    "title": "ba-binanceFutrue",
                                    "link": "https://www.binance.com/en/futures/home",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeys": "Derivatives",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "large",
                                "subMenus": [{
                                    "icon": "FuturesUsdtM2C",
                                    "title": "ba-perpetualFutures",
                                    "link": "https://www.binance.com/en/futures",
                                    "linkTarget": "_self",
                                    "langMapping": "it(en)",
                                    "type": "normal",
                                    "content": "ba-perpetualFutures-content",
                                    "columnNumber": 1,
                                    "businessKeys": "umTrade"
                                }, {
                                    "icon": "FuturesCoinM2C",
                                    "title": "ba-quarterlyFutures",
                                    "link": "https://www.binance.com/en/delivery",
                                    "linkTarget": "_self",
                                    "langMapping": "it(en)",
                                    "type": "normal",
                                    "content": "ba-quarterlyFutures-content",
                                    "columnNumber": 1,
                                    "businessKeys": "cmTrade"
                                }, {
                                    "icon": "FuturesOptionsEuropean2C",
                                    "title": "ba-voptions",
                                    "link": "https://www.binance.com/en/eoptions",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-voptionscontent",
                                    "sceneNames": "Option-exclude-lang",
                                    "columnNumber": 1,
                                    "businessKeys": "E-option"
                                }]
                            }, {
                                "menuType": "gird",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "earn-jar-2cF",
                                    "title": "ba-Earntitle",
                                    "link": "https://www.binance.com/en/earn",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeys": "earnHome",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "large",
                                "subMenus": [{
                                    "icon": "earn-jar-2c",
                                    "title": "ba-earn-overview",
                                    "link": "https://www.binance.com/en/earn",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-earn-overview-sub",
                                    "columnNumber": 1,
                                    "businessKeys": "earnEarnOverviewWeb"
                                }, {
                                    "icon": "earn-simple-earn",
                                    "title": "ba-simple-earn-title",
                                    "link": "https://www.binance.com/en/earn/simple-earn",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-earn-simpleearn-sub",
                                    "columnNumber": 1,
                                    "businessKeys": "earnSimpleEarn"
                                }, {
                                    "icon": "earn-high-yield",
                                    "title": "ba-earn-advancedearn",
                                    "link": "https://www.binance.com/en/earn/advanced-earn",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-earn-highyield-sub",
                                    "columnNumber": 1,
                                    "businessKeys": "earnHighYield"
                                }, {
                                    "icon": "earn-loans",
                                    "title": "ba-earn-loans",
                                    "link": "https://www.binance.com/en/loan",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-earn-loans-sub",
                                    "columnNumber": 1,
                                    "businessKeys": "earnLoanFlexibleRate"
                                }]
                            }, {
                                "menuType": "gird",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "rules-f",
                                    "title": "ba-Square",
                                    "link": "https://www.binance.com/en/square",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "normal",
                                "subMenus": [{
                                    "icon": "Feed2C",
                                    "title": "ba-Square",
                                    "link": "https://www.binance.com/en/square",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-feed-description",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Academy2C",
                                    "title": "ba-academy-le",
                                    "link": "https://academy.binance.com/en/learn-and-earn",
                                    "linkTarget": "_self",
                                    "langMapping": "el(en),en-IN(en),en-KZ(en),en-NG(en),es-AR(es),es-ES(es),es-LA(es),es-MX(es),fr-AF(en),fr-FR(en),hi(en),kk-KZ(en),pt-PT(pt),ru-UA(en),sl(en),uk-UA(uk),zh-TC(zt)",
                                    "type": "normal",
                                    "content": "ba-learn-earn-content",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Blog2C",
                                    "title": "ba-blog",
                                    "link": "https://www.binance.com/en/blog",
                                    "linkTarget": "_self",
                                    "langMapping": "sl(en),hi(en),en-KZ(en),hu(en)",
                                    "type": "normal",
                                    "content": "ba-blogdescription",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Research2C",
                                    "title": "ba-Research",
                                    "link": "https://www.binance.com/en/research",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-research",
                                    "columnNumber": 1
                                }]
                            }, {
                                "menuType": "gird",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "list-grid-f",
                                    "title": "ba-moreManagement",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeys": "binancesendtr",
                                    "businessKeysIsWhite": true
                                },
                                "subMenuSize": "large",
                                "subMenus": [{
                                    "icon": "Institutions2C",
                                    "title": "ba-vip-institutional",
                                    "link": "https://www.binance.com/en/vip-institutional-services",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-vip-institutional-desc",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Launchpad2C",
                                    "title": "ba-launchpad-launchpool",
                                    "link": "https://launchpad.binance.com/en",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-launchpad-launchpool-desc",
                                    "sceneNames": "earn-launchpad-hide",
                                    "columnNumber": 1,
                                    "businessKeys": "launchpad"
                                }, {
                                    "icon": "megadrop-2c-blk",
                                    "title": "Megadrop",
                                    "link": "https://www.binance.com/en/megadrop",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-megadrop-subtitle",
                                    "columnNumber": 1,
                                    "businessKeys": "fea-title-megadrop"
                                }, {
                                    "icon": "CloudMining2C",
                                    "title": "ba-pool",
                                    "link": "https://pool.binance.com/en",
                                    "linkTarget": "_self",
                                    "langMapping": "de-CH(en),en-BH(en),en-IN(en),en-KZ(en),en-NG(en),es-ES(en),fr-FR(en),hi(en),hu(en),kk-kZ(en),ru-UA(en)",
                                    "type": "normal",
                                    "content": "ba-pool-content",
                                    "columnNumber": 1,
                                    "businessKeys": "earnMiningPool"
                                }, {
                                    "icon": "EarnLending2C",
                                    "title": "ba-CryptoLoans",
                                    "link": "https://www.binance.com/en/loan",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-Getaninstantloan",
                                    "columnNumber": 1,
                                    "businessKeys": "loan"
                                }, {
                                    "icon": "Pay2C",
                                    "title": "ba-binance-send",
                                    "link": "https://www.binance.com/en/my/wallet/account/payment",
                                    "linkTarget": "_self",
                                    "langMapping": "vi(en)",
                                    "type": "normal",
                                    "content": "ba-Binance Pay-content",
                                    "columnNumber": 2
                                }, {
                                    "icon": "NftFi2C",
                                    "title": "ba-NFT",
                                    "link": "https://www.binance.com/en/nft/home",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-nft-description",
                                    "columnNumber": 1
                                }, {
                                    "icon": "FanToken2C",
                                    "title": "ba-Fantoken",
                                    "link": "https://www.binance.com/en/fan-token",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-FanToken-content",
                                    "columnNumber": 2,
                                    "businessKeys": "fantoken"
                                }, {
                                    "icon": "DefiWallet2C",
                                    "title": "ba-web3-wallet",
                                    "link": "https://www.binance.com/en/web3wallet",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-defi-wallet-desc",
                                    "columnNumber": 2,
                                    "businessKeys": "web3wallet"
                                }, {
                                    "icon": "BNB1C",
                                    "title": "ba-bnbchain",
                                    "link": "https://www.bnbchain.org",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-dex",
                                    "sceneNames": "exclude-local-kz",
                                    "columnNumber": 2
                                }, {
                                    "icon": "Charity2C",
                                    "title": "ba-Charity",
                                    "link": "https://www.binance.charity",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-BCFcontnet",
                                    "columnNumber": 1
                                }, {
                                    "icon": "rules-f",
                                    "title": "ba-travel-rule",
                                    "link": "https://www.globaltravelrule.com/en/home",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-travel-rule-desc",
                                    "columnNumber": 2
                                }]
                            }, {
                                "menuType": "gird",
                                "subMenuFlow": "row",
                                "menuItem": {
                                    "type": "text",
                                    "icon": "list-grid-f",
                                    "title": "ba-moreManagement",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "businessKeys": "binancesendnotr",
                                    "businessKeysIsWhite": false
                                },
                                "subMenuSize": "large",
                                "subMenus": [{
                                    "icon": "Institutions2C",
                                    "title": "ba-vip-institutional",
                                    "link": "https://www.binance.com/en/vip-institutional-services",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-vip-institutional-desc",
                                    "columnNumber": 1
                                }, {
                                    "icon": "affiliates-entry-2c",
                                    "title": "ba-affiliate-title",
                                    "link": "https://www.binance.com/en/events/affiliate",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-affiliate-subtitle",
                                    "columnNumber": 1
                                }, {
                                    "icon": "referral2-2c",
                                    "title": "ba-referral-title",
                                    "link": "https://www.binance.com/en/activity/referral/offers?stopRedirectToActivity=true",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-referral-subtitle",
                                    "columnNumber": 1
                                }, {
                                    "icon": "Launchpad2C",
                                    "title": "ba-launchpad-launchpool",
                                    "link": "https://launchpad.binance.com/en",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-launchpad-launchpool-desc",
                                    "sceneNames": "earn-launchpad-hide",
                                    "columnNumber": 1,
                                    "businessKeys": "launchpad"
                                }, {
                                    "icon": "megadrop-2c-blk",
                                    "title": "Megadrop",
                                    "link": "https://www.binance.com/en/megadrop",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-megadrop-subtitle",
                                    "columnNumber": 1,
                                    "businessKeys": "fea-title-megadrop"
                                }, {
                                    "icon": "CloudMining2C",
                                    "title": "ba-pool",
                                    "link": "https://pool.binance.com/en",
                                    "linkTarget": "_self",
                                    "langMapping": "de-CH(en),en-BH(en),en-IN(en),en-KZ(en),en-NG(en),es-ES(en),fr-FR(en),hi(en),hu(en),kk-kZ(en),ru-UA(en)",
                                    "type": "normal",
                                    "content": "ba-pool-content",
                                    "columnNumber": 1,
                                    "businessKeys": "earnMiningPool"
                                }, {
                                    "icon": "Pay2C",
                                    "title": "ba-Binance Pay",
                                    "link": "https://www.binance.com/en/my/wallet/account/payment",
                                    "linkTarget": "_self",
                                    "langMapping": "vi(en)",
                                    "type": "normal",
                                    "content": "ba-Binance Pay-content",
                                    "columnNumber": 2,
                                    "businessKeys": "binancepay"
                                }, {
                                    "icon": "NftFi2C",
                                    "title": "ba-NFT",
                                    "link": "https://www.binance.com/en/nft/home",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-nft-description",
                                    "columnNumber": 1
                                }, {
                                    "icon": "FanToken2C",
                                    "title": "ba-Fantoken",
                                    "link": "https://www.binance.com/en/fan-token",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-FanToken-content",
                                    "columnNumber": 2,
                                    "businessKeys": "fantoken"
                                }, {
                                    "icon": "DefiWallet2C",
                                    "title": "ba-web3-wallet",
                                    "link": "https://www.binance.com/en/web3wallet",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-defi-wallet-desc",
                                    "columnNumber": 2,
                                    "businessKeys": "web3wallet"
                                }, {
                                    "icon": "BNB1C",
                                    "title": "ba-bnbchain",
                                    "link": "https://www.bnbchain.org",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-dex",
                                    "sceneNames": "exclude-local-kz",
                                    "columnNumber": 2
                                }, {
                                    "icon": "Charity2C",
                                    "title": "ba-Charity",
                                    "link": "https://www.binance.charity",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-BCFcontnet",
                                    "columnNumber": 2
                                }, {
                                    "icon": "rules-f",
                                    "title": "ba-travel-rule",
                                    "link": "https://www.globaltravelrule.com/en/home",
                                    "linkTarget": "_self",
                                    "langMapping": "",
                                    "type": "normal",
                                    "content": "ba-travel-rule-desc",
                                    "columnNumber": 2
                                }]
                            }],
                            "userInfo": {
                                "noLogged": {
                                    "login": "https://accounts.binance.com/en/login",
                                    "register": "https://accounts.binance.com/en/register",
                                    "returnToList": [{
                                        "regexp": "/([a-z]{2})?(-[A-Z]{2})?/?$",
                                        "return_to": ""
                                    }]
                                },
                                "loggedMenu": {
                                    "outerMenus": [{
                                        "menuType": "gird",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "wallet-f",
                                            "title": "ba-wallet",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal",
                                        "subMenus": [{
                                            "icon": "list-grid-f",
                                            "title": "ba-wallet-overview",
                                            "link": "https://www.binance.com/en/my/wallet/account/overview",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1
                                        }, {
                                            "icon": "spot-f",
                                            "title": "ba-spot-title",
                                            "link": "https://www.binance.com/en/my/wallet/exchange/balance",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "content": "ba-exchangeWalletMsg",
                                            "columnNumber": 1
                                        }, {
                                            "icon": "margin-f",
                                            "title": "ba-marginWallet",
                                            "link": "https://www.binance.com/en/my/wallet/account/margin",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "sceneNames": "futures-showMarginFutures,mg-ex-bg",
                                            "columnNumber": 1,
                                            "businessKeys": "marginWallet"
                                        }, {
                                            "icon": "futures-f",
                                            "title": "ba-futureWallet",
                                            "link": "https://www.binance.com/en/my/wallet/account/futures",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "sceneNames": "futures-showMarginFutures",
                                            "columnNumber": 1,
                                            "businessKeys": "futuresWalletTab"
                                        }, {
                                            "icon": "margin-f",
                                            "title": "ba-isolated-margin",
                                            "link": "https://www.binance.com/en/my/wallet/account/margin/isolated",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "sceneNames": "futures-showPortfolioIsolatedMargin",
                                            "columnNumber": 1,
                                            "businessKeys": "marginWallet"
                                        }, {
                                            "icon": "futures-f",
                                            "title": "ba-portfolio-margin",
                                            "link": "https://www.binance.com/en/my/wallet/account/portfolio-margin",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "sceneNames": "futures-showPortfolioIsolatedMargin",
                                            "columnNumber": 1,
                                            "businessKeys": "futuresWalletTab"
                                        }, {
                                            "icon": "futures-options-european-f",
                                            "title": "ba-optionsWallet",
                                            "link": "https://www.binance.com/en/my/wallet/account/eoptions",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "sceneNames": "exclude-local-kz",
                                            "columnNumber": 1,
                                            "businessKeys": "E-option"
                                        }, {
                                            "icon": "trade-trading-bot-f",
                                            "title": "ba-strategywallet",
                                            "link": "https://www.binance.com/en/my/wallet/account/trading-bots",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1,
                                            "businessKeys": "Rebalancing_bot_Manual"
                                        }, {
                                            "icon": "earn-jar-2cF",
                                            "title": "ba-earnAssets",
                                            "link": "https://www.binance.com/en/my/saving/asset",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1,
                                            "businessKeys": "earnWallet"
                                        }, {
                                            "icon": "coin-f",
                                            "title": "ba-FundingWallet",
                                            "link": "https://www.binance.com/en/my/wallet/funding",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1
                                        }, {
                                            "icon": "transaction-history-f",
                                            "title": "ba-transactionhistory",
                                            "link": "https://www.binance.com/en/my/wallet/history/deposit-crypto",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1
                                        }, {
                                            "icon": "ac-statement",
                                            "title": "ba-AccountStatement",
                                            "link": "https://www.binance.com/en/my/wallet/account/statement",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1
                                        }, {
                                            "icon": "proof-reserve-f",
                                            "title": "header-tier2-wallet-verification",
                                            "link": "https://www.binance.com/en/my/wallet/verification",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "type": "normal",
                                            "columnNumber": 1
                                        }]
                                    }],
                                    "innerMenus": [{
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "wallet-f",
                                            "title": "uc-assets",
                                            "link": "https://www.binance.com/en/my/wallet/account/overview",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "orders-f",
                                            "title": "uc-orders",
                                            "link": "https://www.binance.com/en/my/orders/exchange",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "user-f",
                                            "title": "uc-account",
                                            "link": "https://www.binance.com/en/my/settings/profile",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "referral-f",
                                            "title": "ba-referral",
                                            "link": "https://www.binance.com/en/activity/referral?utm_source=Lite_web_account",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "new-user-zone-new-g",
                                            "title": "ba-header-nuz",
                                            "link": "https://app.binance.com/new-user-zone?_dp=L3dlYnZpZXcvd2Vidmlldz90eXBlPWRlZmF1bHQmdXJsPWFIUjBjSE02THk5M2QzY3VZbWx1WVc1alpTNWpiMjB2ZTJ4aGJtZDlMMjVsZHkxMWMyVnlMWHB2Ym1V&utm_source=web&utm_medium=dropdown",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "sceneNames": "show-new-user-zone",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "reward-center-f",
                                            "title": "ba-loyalty-hub",
                                            "link": "https://www.binance.com/en/rewards-hub",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "vip-1c",
                                            "title": "header-tier2-vip",
                                            "link": "https://www.binance.com/en/vip-portal",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "sceneNames": "vip_user",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "subaccount-s24",
                                            "title": "ba-subaccount",
                                            "link": "https://www.binance.com/en/my/sub-account/account-management",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "sceneNames": "parentUser",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }, {
                                        "menuType": "text",
                                        "subMenuFlow": "row",
                                        "menuItem": {
                                            "type": "text",
                                            "icon": "settings-cog-1c",
                                            "title": "uc-settings",
                                            "link": "https://www.binance.com/en/my/settings/preference",
                                            "linkTarget": "_self",
                                            "langMapping": "",
                                            "businessKeysIsWhite": false
                                        },
                                        "subMenuSize": "normal"
                                    }]
                                }
                            },
                            "search": {
                                "enable": true
                            },
                            "featuresAlwaysVisible": {
                                "noLogged": {},
                                "loggedMenu": [{
                                    "menuType": "cryptoDepositDrawer",
                                    "subMenuFlow": "row",
                                    "menuItem": {
                                        "type": "text",
                                        "icon": "deposit-new-f",
                                        "title": "header-tier1-deposit",
                                        "linkTarget": "_self",
                                        "langMapping": "",
                                        "businessKeysIsWhite": false
                                    },
                                    "subMenuSize": "normal"
                                }]
                            },
                            "extra": {
                                "needLng": true,
                                "needFiat": true,
                                "needNewUserZone": false,
                                "displayNewUserZoneScene": "all",
                                "qrCodeUrl": "https://www.binance.com/en/download"
                            },
                            "others": {
                                "googleOneTap": {
                                    "enabled": true,
                                    "excludedRegions": "US,CN"
                                },
                                "accountSwitch": {
                                    "enabled": true
                                }
                            },
                            "theme": "inherit"
                        },
                        "footer": {
                            "disabledMenu": false,
                            "copyRight": {
                                "enterprise": "Binance"
                            },
                            "menu": [{
                                "title": "ba-aboutUs",
                                "columnNumber": 1,
                                "list": [{
                                    "link": "https://www.binance.com/en/about",
                                    "linkTarget": "_self",
                                    "title": "ba-About",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/careers",
                                    "linkTarget": "_self",
                                    "title": "ba-joinUs",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/support/announcement",
                                    "linkTarget": "_self",
                                    "title": "ba-Announcement",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/square/news/all",
                                    "linkTarget": "_self",
                                    "title": "ba-news",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/press",
                                    "linkTarget": "_self",
                                    "title": "ba-Press",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/legal/home",
                                    "linkTarget": "_self",
                                    "title": "footer-legal",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/terms",
                                    "linkTarget": "_self",
                                    "title": "ba-Terms",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/about-legal/privacy-portal",
                                    "linkTarget": "_self",
                                    "title": "ba-Privacy",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/land/building_trust",
                                    "linkTarget": "_self",
                                    "title": "footer-building-trust",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/blog",
                                    "linkTarget": "_self",
                                    "title": "ba-binanceBlog",
                                    "langMapping": "en-KZ(en),hi(en),hu(en),kk-kZ(en),sl(en)"
                                }, {
                                    "link": "https://www.binance.com/en/community",
                                    "linkTarget": "_self",
                                    "title": "ba-Community",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/risk-warning",
                                    "linkTarget": "_self",
                                    "title": "ba-risk-warning",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/support/list/notices",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-Notices",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/download",
                                    "linkTarget": "_self",
                                    "title": "ba-Download",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/desktop-download",
                                    "linkTarget": "_self",
                                    "title": "ba-Desktop Application",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/whistleblowing/welcome",
                                    "linkTarget": "_self",
                                    "sceneNames": "spain-whistleblowing",
                                    "title": "ba-whistleblowing",
                                    "langMapping": ""
                                }]
                            }, {
                                "title": "ba-Products",
                                "columnNumber": 2,
                                "list": [{
                                    "link": "https://www.binance.com/en/trade",
                                    "linkTarget": "_self",
                                    "title": "ba-Exchange",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/crypto/buy",
                                    "linkTarget": "_self",
                                    "title": "ba-creditCard",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/my/wallet/account/payment",
                                    "linkTarget": "_self",
                                    "title": "ba-Binance Pay",
                                    "langMapping": "vi(en)",
                                    "businessKeys": "binancepay"
                                }, {
                                    "link": "https://academy.binance.com/en",
                                    "linkTarget": "_self",
                                    "title": "ba-Academy",
                                    "langMapping": "en-IN(en),en-KZ(en),en-NG(en),es-AR(es),es-ES(es),es-LA(es),es-MX(es),fr-AF(en),fr-FR(en),fr-FR(en),hi(en),kk-KZ(en),pt-PT(pt),ua(uk),ru-UA(en),sl(en),uk-UA(uk),zh-TC(zt)"
                                }, {
                                    "link": "https://www.binance.com/en/live",
                                    "linkTarget": "_self",
                                    "title": "ba-live",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/tax",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-tax",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/gift-card",
                                    "linkTarget": "_self",
                                    "title": "ba-GiftCard",
                                    "langMapping": ""
                                }, {
                                    "link": "https://launchpad.binance.com/en",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-launchpad-launchpool",
                                    "langMapping": "",
                                    "businessKeys": "launchpad"
                                }, {
                                    "link": "https://www.binance.com/en/auto-invest",
                                    "linkTarget": "_self",
                                    "title": "ba-auto-invest",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/eth2",
                                    "linkTarget": "_self",
                                    "title": "ba-eth2",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/nft/home",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-NFT",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/BABT?source=footer",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "BABT",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/research",
                                    "linkTarget": "_self",
                                    "title": "ba-Research",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.charity",
                                    "linkTarget": "_self",
                                    "title": "ba-Charity",
                                    "langMapping": ""
                                }]
                            }, {
                                "title": "ba-Service",
                                "columnNumber": 4,
                                "list": [{
                                    "link": "https://www.binance.com/en/activity/affiliate",
                                    "linkTarget": "_self",
                                    "title": "ba-Affiliate",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/activity/referral?utm_source=Lite_web_footer",
                                    "linkTarget": "_self",
                                    "title": "ba-referral",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/bnb",
                                    "linkTarget": "_self",
                                    "title": "ba-binanceCoin",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/otc",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-otctrading",
                                    "langMapping": ""
                                }, {
                                    "link": "https://data.binance.vision",
                                    "linkTarget": "_self",
                                    "title": "landing-data-title",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/trading_insight/glass?id=22&token=BTC",
                                    "linkTarget": "_self",
                                    "title": "footer-trading-insight",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/proof-of-reserves",
                                    "linkTarget": "_self",
                                    "title": "ba-Proof-of-Reserves",
                                    "langMapping": ""
                                }]
                            }, {
                                "title": "ba-business-footer",
                                "columnNumber": 3,
                                "list": [{
                                    "link": "https://c2c.binance.com/en/merchantApplication",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-applyP2P",
                                    "langMapping": ""
                                }, {
                                    "link": "https://p2p.binance.com/en/p2pro",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-p2pro",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/my/coin-apply",
                                    "linkTarget": "_self",
                                    "title": "ba-ListingApplication",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/vip-institutional-services",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-institutional",
                                    "langMapping": ""
                                }, {
                                    "link": "https://labs.binance.com/",
                                    "linkTarget": "_self",
                                    "title": "ba-Labs",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/binance-connect",
                                    "linkTarget": "_self",
                                    "title": "header-title-bifinity",
                                    "langMapping": "",
                                    "businessKeys": "fiat_BinanceConnect"
                                }]
                            }, {
                                "title": "ba-Support",
                                "columnNumber": 4,
                                "list": [{
                                    "link": "https://www.binance.com/en/chat?sourceEntry=4",
                                    "linkTarget": "_self",
                                    "title": "ba-SubmitARequest",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/support",
                                    "linkTarget": "_self",
                                    "title": "ba-SupportCenter",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/my/user-support/feedback/entry",
                                    "linkTarget": "_self",
                                    "title": "footer_support_request_feature",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/fee/schedule",
                                    "linkTarget": "_self",
                                    "title": "ba-Fees",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/binance-api",
                                    "linkTarget": "_self",
                                    "title": "header-tier2-api",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/official-verification",
                                    "linkTarget": "_self",
                                    "title": "ba-official-verification",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/trade-rule",
                                    "linkTarget": "_self",
                                    "title": "ba-tradeRules",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/airdrop",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-airdrop",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/support/law-enforcement",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-law",
                                    "langMapping": ""
                                }]
                            }, {
                                "title": "ba-Learn",
                                "columnNumber": 3,
                                "list": [{
                                    "link": "https://academy.binance.com/en/learn-and-earn",
                                    "linkTarget": "_self",
                                    "title": "ba-learn-earn-title",
                                    "langMapping": "el(en),en-IN(en),en-KZ(en),en-NG(en),es-AR(es),es-ES(es),es-LA(es),es-MX(es),fr-AF(en),fr-FR(en),hi(en),kk-KZ(en),pt-PT(pt),ru-UA(en),sl(en),uk-UA(uk),zh-TC(zt)"
                                }, {
                                    "link": "https://www.binance.com/en/price",
                                    "linkTarget": "_self",
                                    "title": "ba-footer-pricepage",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/price/bitcoin",
                                    "linkTarget": "_self",
                                    "title": "footer_bitcoin_price",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/price/ethereum",
                                    "linkTarget": "_self",
                                    "title": "footer_ethereum_price",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/price-prediction",
                                    "linkTarget": "_self",
                                    "title": "footer_price_predictions",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/price-prediction/bitcoin",
                                    "linkTarget": "_self",
                                    "title": "footer_bitcoin_price_prediction",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/price-prediction/ethereum",
                                    "linkTarget": "_self",
                                    "title": "footer_ethereum_price_prediction",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/ethereum-upgrade",
                                    "linkTarget": "_self",
                                    "title": "ba-eth-upgrade-pectra",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/how-to-buy/bitcoin",
                                    "linkTarget": "_self",
                                    "title": "ba-buy-bitcoin",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/how-to-buy/bnb",
                                    "linkTarget": "_self",
                                    "title": "ba-buybnb",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/how-to-buy/xrp",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-buyRipple",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/how-to-buy/dogecoin",
                                    "linkTarget": "_self",
                                    "sceneNames": "exclude-local-kz",
                                    "title": "ba-buydogecoin",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/how-to-buy/ethereum",
                                    "linkTarget": "_self",
                                    "title": "ba-buyEthereum",
                                    "langMapping": ""
                                }, {
                                    "link": "https://www.binance.com/en/altcoins/tradable",
                                    "linkTarget": "_self",
                                    "title": "ba-BuyTradable",
                                    "langMapping": ""
                                }]
                            }],
                            "community": {
                                "title": "ba-Community",
                                "needLng": true,
                                "needThemeSwitch": true,
                                "communities": [{
                                    "name": "h-discord",
                                    "link": "https://discord.gg/jE4wt8g2H2",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "social-telegram-f",
                                    "link": "https://www.binance.com/en/community",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "h-tiktok",
                                    "link": "https://www.tiktok.com/@binance?lang=en",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "h-facebook",
                                    "link": "https://www.facebook.com/binance",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "social-x-f",
                                    "link": "https://twitter.com/binance",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "h-reddit",
                                    "link": "https://www.reddit.com/r/binance",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "h-instagram",
                                    "link": "https://www.instagram.com/Binance/",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "h-coinmarketcap",
                                    "link": "https://coinmarketcap.com/exchanges/binance/",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "h-youtube",
                                    "link": "https://www.youtube.com/binanceyoutube",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "social-whatsapp",
                                    "link": "https://www.whatsapp.com/channel/0029VarQ6LL6rsQq7nwhmn1y",
                                    "linkTarget": "_self"
                                }, {
                                    "name": "more-f",
                                    "link": "https://www.binance.com/en/community",
                                    "linkTarget": "_self"
                                }]
                            },
                            "theme": "inherit"
                        }
                    },
                    "bizChannel": "",
                    "userStatus": {
                        "isLogin": false,
                        "isKyc": false,
                        "isDeposit": false,
                        "isTrade": false
                    }
                }
            </script>
            <script nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                window.ga = window.ga || function() {
                    (ga.q = ga.q || []).push(arguments)
                };
                ga.l = +new Date;
                ga('create', 'UA-162512367-1', 'auto');
                window.gaFilterExp = "^(email|mobile)";
                if (document.location.search) {
                    var search = document.location.search.trim().replace(/^[?#&]/, '');
                    if (search) {
                        var regexp = new RegExp(gaFilterExp);
                        var params = search.split('&');
                        params = params.filter(val => !(regexp.test(val)));
                        paramsString = params.join('&');
                        ga('set', 'location', location.origin + location.pathname + '?' + paramsString);
                    }
                }
            </script>
            <script id="gtm-trueMetrics" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" data-nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                (function(w, l, r) {
                    w[l] = w[l] || [];
                    w[l].push({
                        "gtm.start": new Date().getTime(),
                        event: "gtm.js"
                    });
                    w[r] = w[r] || [];
                    w[r].push({
                        key: "loadGTMScript",
                        data: {
                            gtmID: 'M86QHGF',
                            nonce: '7dc52edf-3ce0-4c71-8231-90ea3cdca87b'
                        },
                    });
                })(window, 'dataLayer', '_bn_reporter');
            </script>
            <script nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                (function() {
                    var cookies = document.cookie.split(';');
                    var keyValue = cookies.find(mp => {
                        var values = mp.split('=');
                        return values[0].trim() === 'data_opt_out';
                    });
                    if (keyValue && keyValue.split('=')[1] === 'y') {
                        window['ga-disable-M86QHGF'] = true;
                    }
                }())
            </script>
            <script id="__APP_DATA" type="application/json" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab">
                {
                    "dynamicIds": ["wKhF", "QFfC", "hytd", "GW+C", "OaXm", "oCr4", "C8Ti", "Db3U", "1vR2", "W9lI", "Bzb8", "lyQL", "UIY8", "1FXO", "HHrZ", "HiJp", "Y6qq", "nAjJ", "LcZo", "hQPs", "3GIA", "NOsX", "kn3Q", "Q4oW", "S3pA", "cH1A", "Kkar", "RA6d", "PA3q", "serT", "nsO7", "YgHN"],
                    "ssr": true,
                    "appState": {
                        "error": {
                            "error": null
                        },
                        "loader": {
                            "dataByRouteId": {
                                "6080": {
                                    "ssrUserIsLoggedIn": false,
                                    "articleDetail": {
                                        "id": 19959,
                                        "title": "How to Complete Identity Verification for a Personal Account?",
                                        "body": "{\"node\":\"root\",\"child\":[{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"tabs\",\"data-bn-tabs-default-active-index\":\"0\"},\"child\":[{\"node\":\"element\",\"tag\":\"ul\",\"attr\":{\"data-bn-tabs-block\":\"header\"},\"child\":[{\"node\":\"element\",\"tag\":\"li\",\"attr\":{\"data-bn-tabs-tab-id\":\"cfbb7c0fc6797dec\"},\"child\":[{\"node\":\"text\",\"text\":\"Website\"}]},{\"node\":\"element\",\"tag\":\"li\",\"attr\":{\"data-bn-tabs-tab-id\":\"6542f67335803279\"},\"child\":[{\"node\":\"text\",\"text\":\"App\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-tabs-block\":\"body\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"https://fast.wistia.net/embed/iframe/nldhiwsms7\"},\"child\":[{\"node\":\"text\",\"text\":\"Video Tutorial\"}]}]},{\"node\":\"element\",\"tag\":\"h3\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Where can I get my personal account verified on theMyCryptoBank website?\u0026nbsp;\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"You can access the identity verification from \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Account] \"}]},{\"node\":\"text\",\"text\":\"- \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[\"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/my/settings/profile\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Identification\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"]\"}]},{\"node\":\"text\",\"text\":\", or click \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Verify]\"}]},{\"node\":\"text\",\"text\":\" / \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Get verified]\"}]},{\"node\":\"text\",\"text\":\" from the homepage banners. You can check your current verification level on the page, which determines the trading limit of your MyCryptoBank account. To increase your limit, please complete the respective identity verification level.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"accordion\",\"data-bn-accordion-expand\":\"false\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-title\"},\"child\":[{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/faq/f36339596002454a9eb2a2228b2695f7\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Why do I need to complete identity verification?\"}]}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-description\"},\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Identity verification or \"},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"https://academy.binance.com/en/articles/what-is-KYC-know-your-customer\"},\"child\":[{\"node\":\"text\",\"text\":\"Know Your Customer (KYC)\"}]},{\"node\":\"text\",\"text\":\" standards are designed to protect your account against fraud, corruption, money laundering, and terrorist financing.\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"All new users are required to complete [Verified] to access MyCryptoBank products and service offerings, including cryptocurrency deposits and trades.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Existing users who haven’t completed the [Verified] verification will have their account permissions temporarily changed to “Withdraw Only,” with services limited to fund withdrawal, order cancelation, position close, and redemption.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Based on your region or selected payment channels, you may need to increase your identity verification level to improve your account security. For more details, please refer to \"},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/faq/f36339596002454a9eb2a2228b2695f7\"},\"child\":[{\"node\":\"text\",\"text\":\"Why Do I Need to Complete Identity Verification for My, MyCryptoBank Account?\"}]},{\"node\":\"text\",\"text\":\".\"}]}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"i\",\"child\":[{\"node\":\"text\",\"text\":\"To learn how to complete identity verification via MyCryptoBank app, click to view the “App” tab on this page.\"}]}]},{\"node\":\"element\",\"tag\":\"h3\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"How to complete identity verification for a personal account on theMyCryptoBank website?\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"1. Log in to your personal MyCryptoBank account and mouseover the profile icon. Click \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Account]\"}]},{\"node\":\"text\",\"text\":\" and go to \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[\"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/my/settings/profile\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Identification\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"]\"}]},{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"./public.bnbstatic.com/image/cms/article/body/202409/ff0fc66b0149497b08ae204c71de0191.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"2. Click \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Get Verified]\"}]},{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202307/5c9b991e3f14f7869e367395773def31.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"3. Select your country of residence.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"./public.bnbstatic.com/image/cms/article/body/202307/35a87d77228230b033f10c65abb9b5b8.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"4. Enter your personal information and click \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Continue]\"}]},{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:hsl(0,75%,60%);\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Please make sure that all the information entered is consistent with your ID documents.\"}]}]},{\"node\":\"text\",\"text\":\" You won’t be able to change it once confirmed.\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"./public.bnbstatic.com/image/cms/article/body/202307/213b9c6f29d3a294c755a7993d53a662.png\"}}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202307/14ce561e0efb8bc3203473a57cf6772f.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"5. Next, you’ll need to verify your ID documents. You can take a photo with your phone camera, or upload photos. Choose an option and click \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Continue]\"}]},{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"6. You’ll need to complete a liveness check. Follow the instructions to take a video of yourself.\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Note:\u0026nbsp;\"}]}]},{\"node\":\"element\",\"tag\":\"ul\",\"child\":[{\"node\":\"element\",\"tag\":\"li\",\"child\":[{\"node\":\"text\",\"text\":\"Please enable camera access on your device.\"}]},{\"node\":\"element\",\"tag\":\"li\",\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:hsl(0,75%,60%);\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Do not wear hats, glasses, or use filters, and make sure that the lighting is sufficient.\"}]}]}]}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:422px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202308/65f7621562ae3aca78406648640ae03b.png\"}}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:426px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202308/59a89ff3d2a80798fe492f51608ea622.png\"}}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:460px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202308/c6337108c3fa408f2b9f41315742bb05.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"7. Binance will review your data in a timely manner. Once your application has been verified, we will send you a notification.\"}]},{\"node\":\"element\",\"tag\":\"ul\",\"child\":[{\"node\":\"element\",\"tag\":\"li\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Do not refresh your browser during the process.\"}]}]}]},{\"node\":\"element\",\"tag\":\"h3\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Frequently Asked Questions\"}]}]},{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"accordion\",\"data-bn-accordion-expand\":\"false\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-title\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"1. What are my daily withdrawal limits after completing identity verification?\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-description\"},\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Binance reviews its products and services on an ongoing basis to determine changes and improvements. Please refer to the\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" [Identification] \"}]},{\"node\":\"text\",\"text\":\"page for the most updated withdrawal limits.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"All new users are required to complete the \"},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:#e64c4c;\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Verified] verification\"}]}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:#1e2026;\"},\"child\":[{\"node\":\"text\",\"text\":\" \"}]},{\"node\":\"text\",\"text\":\"to access Binance products and service offerings, including cryptocurrency deposits and trades. Existing users who haven’t completed the [Verified] verification will have their account permissions temporarily changed to\"},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:#1e2026;\"},\"child\":[{\"node\":\"text\",\"text\":\" \"}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:#e64c4c;\"},\"child\":[{\"node\":\"text\",\"text\":\"“Withdraw Only”, \"}]},{\"node\":\"text\",\"text\":\"with services limited to fund withdrawal, order cancelation, position close, and redemption. For more information, please refer to our \"},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/announcement/51bf294e26324211a4731ca998e110ca\"},\"child\":[{\"node\":\"text\",\"text\":\"announcement\"}]},{\"node\":\"text\",\"text\":\".\"}]}]}]},{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"accordion\",\"data-bn-accordion-expand\":\"false\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-title\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"2. How to update/reset my identity verification information?\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-description\"},\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"If your identity information has changed and one of the following conditions is met, you can go to the \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[\"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/my/settings/profile/reset-kyc\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Update Identity Verification\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"] \"}]},{\"node\":\"text\",\"text\":\"page to update.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"You may also contact our customer service agents via \"},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/chat\"},\"child\":[{\"node\":\"text\",\"text\":\"Binance Support\"}]},{\"node\":\"text\",\"text\":\" to update your information. Enter “How to update Identity Verification” and click on the link \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[\"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/my/settings/profile/reset-kyc\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Click here to reset KYC\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"] \"}]},{\"node\":\"text\",\"text\":\"provided in the Customer Service response.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Reasons for updating your identity verification include:\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"1. The documents have expired;\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"2. The name on the document has changed;\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"3. The ID number on the document has changed;\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"4. The nationality has changed;\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"5. Update or replace your existing documents to meet specific fiat channels’ requirements;\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"6. Change the name to a system-recognizable language (e.g., from local-language ID card to English-language passport);\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"7. Update documents to meet Binance Card requirements.\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Please note:\"}]}]},{\"node\":\"element\",\"tag\":\"ul\",\"child\":[{\"node\":\"element\",\"tag\":\"li\",\"child\":[{\"node\":\"text\",\"text\":\"Please read the declaration carefully before clicking \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Confirm Update]\"}]},{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"li\",\"child\":[{\"node\":\"text\",\"text\":\"You cannot transfer your account to another person or substitute another person’s ID for your ID.\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Steps:\u0026nbsp;\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"1. Go to the\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" [\"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/my/settings/profile/reset-kyc\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Identity Verification Update\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"]\"}]},{\"node\":\"text\",\"text\":\" page. Select the reason for the update and carefully read the declaration. Check the \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[I understand and agree to the declaration]\"}]},{\"node\":\"text\",\"text\":\" box and click\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" [Confirm Update]\"}]},{\"node\":\"text\",\"text\":\".\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:552px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202208/bbe79160181c737c03889e45ae98c3b2.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"2. Enter the required information and click\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" [Continue]\"}]},{\"node\":\"text\",\"text\":\".\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:566px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202208/9430f5f2054d9bcf76164b82a2994e29.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"3. Please wait patiently for the system to process your update request. Once complete, you will receive an email notification.\"}]}]}]},{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"accordion\",\"data-bn-accordion-expand\":\"false\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-title\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"3. How long does it take for Binance to verify my identity verification?\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-description\"},\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Submitted documents are usually reviewed within 48 hours. However, it may take longer in some particular cases.\"}]}]}]},{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"accordion\",\"data-bn-accordion-expand\":\"false\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-title\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"4. Is identity verification safe?\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-description\"},\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Yes, completing identity verification on Binance is safe and it helps us make our platform secure for you and everyone else. Your documents are also confidential with us.\"}]}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"To learn more about your Binance account, please visit the \"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/faq/account-functions?c=1\u0026amp;navId=1\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Account Functions FAQs\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" page.\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"\u0026nbsp;\"}]}]},{\"node\":\"element\",\"tag\":\"div\",\"child\":[{\"node\":\"element\",\"tag\":\"h3\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Where can I get my personal account verified on the MyCryptoBank app?\u0026nbsp;\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"You can access the identity verification from \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Account Center] \"}]},{\"node\":\"text\",\"text\":\"- \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Unverified]\"}]},{\"node\":\"text\",\"text\":\", or tap \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Verify Now]\"}]},{\"node\":\"text\",\"text\":\" from the app homepage. You will see your current verification level on the page, which determines the trading limit of your Binance account. To increase your limit, please complete the respective identity verification level.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"section\",\"attr\":{\"data-bn-type\":\"accordion\",\"data-bn-accordion-expand\":\"false\"},\"child\":[{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-title\"},\"child\":[{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/faq/f36339596002454a9eb2a2228b2695f7\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Why do I need to complete identity verification?\"}]}]}]},{\"node\":\"element\",\"tag\":\"div\",\"attr\":{\"data-bn-type\":\"accordion-description\"},\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Identity verification or \"},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"https://academy.binance.com/en/articles/what-is-KYC-know-your-customer\"},\"child\":[{\"node\":\"text\",\"text\":\"Know Your Customer (KYC)\"}]},{\"node\":\"text\",\"text\":\" standards are designed to protect your account against fraud, corruption, money laundering, and terrorist financing.\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"All new users are required to complete [Verified] to access Binance products and service offerings, including cryptocurrency deposits and trades.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Existing users who haven’t completed the [Verified] verification will have their account permissions temporarily changed to “Withdraw Only,” with services limited to fund withdrawal, order cancelation, position close, and redemption.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Based on your region or selected payment channels, you may need to increase your identity verification level to improve your account security. For more details, please refer to \"},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/faq/f36339596002454a9eb2a2228b2695f7\"},\"child\":[{\"node\":\"text\",\"text\":\"Why Do I Need to Complete Identity Verification for My Binance Account?\"}]}]}]}]},{\"node\":\"element\",\"tag\":\"h3\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"How to complete identity verification for a personal account on the MyCryptoBank app?\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"1. Log in to your Binance account and tap \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Verify] \"}]},{\"node\":\"text\",\"text\":\"or\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" [Verify Identity]\"}]},{\"node\":\"text\",\"text\":\" on the app homepage.\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:345px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202406/9641ff14018a23094788e15c87a2a481.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"Alternatively, tap the account center icon and the \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Unverified]\"}]},{\"node\":\"text\",\"text\":\" button.\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202406/71bca01b07c5374e8e4bfef9d71d9058.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"br\"},{\"node\":\"text\",\"text\":\"2. You will be redirected to the Verification Center screen. Tap \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Get Verified]\"}]},{\"node\":\"text\",\"text\":\".\"},{\"node\":\"element\",\"tag\":\"br\"},{\"node\":\"text\",\"text\":\"Select your country of residence and you’ll see a list of verifications required for your country/region. Tap \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Continue]\"}]},{\"node\":\"text\",\"text\":\".\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202406/be2bd83f4d2f4c54ae86e1c5ba883366.png\"}}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:324px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202406/b36d3a80dff2264f7f9b0d9994da1359.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"3. Enter your personal information and tap \"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"[Continue]\"}]},{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:hsl(0,75%,60%);\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Please make sure that all the information entered is consistent with your ID documents.\"}]}]},{\"node\":\"text\",\"text\":\" You won’t be able to change it once confirmed.\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202307/42c40a18b7c0ec2d53553e59d0552e38.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"4. Next, you will need to upload pictures of your ID documents. Please choose the type of ID and the country your documents were issued. Most users can choose to verify with a passport, ID card, or driver’s license.\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" Please refer to the respective options offered for your country.\"}]}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:309px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202307/fd6ec0f6ce7de63a066d978f6c2b554d.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"5. Follow the instructions to take photos of your document. Your photos should clearly show the full ID document.\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"For example, if you are using an ID card, you have to take photos of the front and back of your ID card.\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Note:\"}]},{\"node\":\"text\",\"text\":\" Please enable camera access on your device.\u0026nbsp;\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:624px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202307/fa8c4fc73004d968fd2810a4aad84a5e.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"6. After uploading the document photos, the system will ask you to do a liveness check. Center your face in the frame and follow the instructions to complete it. \"},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:hsl(0,75%,60%);\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Please make sure your whole face is clearly visible, centered, and your eyes are open. Do not wear hats, glasses, or use filters, and make sure that the lighting is sufficient.\u0026nbsp;\"}]}]}]},{\"node\":\"element\",\"tag\":\"figure\",\"attr\":{\"class\":[\"image\",\"image_resized\"],\"style\":\"width:399px;\"},\"child\":[{\"node\":\"element\",\"tag\":\"img\",\"attr\":{\"src\":\"https://public.bnbstatic.com/image/cms/article/body/202307/6e621e9f41aef42b6b2bb9385fd486a8.png\"}}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"7. After completing the process, please wait patiently. Binance will review your data in a timely manner. Once your application has been verified, we will send you an email notification.\"}]},{\"node\":\"element\",\"tag\":\"ul\",\"child\":[{\"node\":\"element\",\"tag\":\"li\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Do not refresh or quit the App during the process.\"}]}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"To learn more about your Binance account, please visit the \"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"/en/support/faq/account-functions?c=1\u0026amp;navId=1\"},\"child\":[{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Account Functions FAQs\"}]}]},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\" page.\"}]}]}]}]}]}]}",
                                        "code": "360027287111",
                                        "publishDate": 1555991954000,
                                        "relatedArticles": [{
                                            "id": 53246,
                                            "code": "f36339596002454a9eb2a2228b2695f7",
                                            "title": "Why Do I Need to Complete Identity Verification for My Binance Account?",
                                            "imageLink": null,
                                            "shortLink": null,
                                            "body": null,
                                            "type": 2,
                                            "catalogId": null,
                                            "catalogName": null,
                                            "publishDate": null,
                                            "footer": null
                                        }, {
                                            "id": 20093,
                                            "code": "360015552032",
                                            "title": "How to Complete Entity Verification (KYB) on Binance: Step-by-Step Guide",
                                            "imageLink": null,
                                            "shortLink": null,
                                            "body": null,
                                            "type": 2,
                                            "catalogId": null,
                                            "catalogName": null,
                                            "publishDate": null,
                                            "footer": null
                                        }, {
                                            "id": 169405,
                                            "code": "5f93f32905c0492eb36e908f26351178",
                                            "title": "How to Request/Provide Signatures for Binance Entity Verification Documents Online",
                                            "imageLink": null,
                                            "shortLink": null,
                                            "body": null,
                                            "type": 2,
                                            "catalogId": null,
                                            "catalogName": null,
                                            "publishDate": null,
                                            "footer": null
                                        }, {
                                            "id": 68850,
                                            "code": "5843ae03965047598db1023b3b1fce04",
                                            "title": "How to Verify My Binance Account? (EEA Countries)",
                                            "imageLink": null,
                                            "shortLink": null,
                                            "body": null,
                                            "type": 2,
                                            "catalogId": null,
                                            "catalogName": null,
                                            "publishDate": null,
                                            "footer": null
                                        }, {
                                            "id": 166248,
                                            "code": "e742b9bf6d2a4aa5ad2c2b5dbd83d702",
                                            "title": "How to Use the Verification Collaborators Function in Binance Entity Verification",
                                            "imageLink": null,
                                            "shortLink": null,
                                            "body": null,
                                            "type": 2,
                                            "catalogId": null,
                                            "catalogName": null,
                                            "publishDate": null,
                                            "footer": null
                                        }],
                                        "articleType": 2,
                                        "firstCatalogName": "Account Functions",
                                        "firstCatalogId": 1,
                                        "secondCatalogName": "Identity Verification",
                                        "secondCatalogId": 10,
                                        "thirdCatalogName": null,
                                        "thirdCatalogId": null,
                                        "seoTitle": "How to Complete Identity Verification for a Personal Account?",
                                        "seoKeywords": "Binance Identity Verification,Binance verification,Binance account verification",
                                        "seoDesc": "How to Complete Identity Verification for a Personal Account? Identity verification or Know Your Customer (KYC) standards are designed to protect your account against fraud, corruption, money launderi",
                                        "version": "1",
                                        "shareCount": 0,
                                        "riskWarning": "{\"node\":\"root\",\"child\":[{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":[\"color:hsl(0,\",\"0%,\",\"60%);\"]},\"child\":[{\"node\":\"text\",\"text\":\"Binance reserves the right in its sole discretion to amend or change or cancel this announcement at any time and for any reasons without prior notice.\"},{\"node\":\"element\",\"tag\":\"strong\",\"child\":[{\"node\":\"text\",\"text\":\"Risk Warning\"}]},{\"node\":\"text\",\"text\":\": Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. Futures trading, in particular, is subject to high market risk and price volatility. All of your margin balance may be liquidated in the event of adverse price movement. Past performance is not a reliable predictor of future performance. Before trading, you should make an independent assessment of the appropriateness of the transaction in light of your own objectives and circumstances, including the risks and potential benefits. Consult your own advisers, where appropriate. This information should not be construed as financial or investment advice. To learn more about how to protect yourself, visit our\"}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:rgb(30,35,41);\"},\"child\":[{\"node\":\"text\",\"text\":\" \"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"https://www.binance.com/en/futures/responsible-trading\"},\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:rgb(201,148,0);\"},\"child\":[{\"node\":\"text\",\"text\":\"Responsible Trading page\"}]}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":[\"color:hsl(0,\",\"0%,\",\"90%);\"]},\"child\":[{\"node\":\"text\",\"text\":\".\"}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":[\"color:hsl(0,\",\"0%,\",\"60%);\"]},\"child\":[{\"node\":\"text\",\"text\":\" For more information, see our\"}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:rgb(30,35,41);\"},\"child\":[{\"node\":\"text\",\"text\":\" \"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"https://www.binance.com/en/terms\"},\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:rgb(201,148,0);\"},\"child\":[{\"node\":\"text\",\"text\":\"Terms of Use\"}]}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:rgb(30,35,41);\"},\"child\":[{\"node\":\"text\",\"text\":\" \"}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":[\"color:hsl(0,\",\"0%,\",\"60%);\"]},\"child\":[{\"node\":\"text\",\"text\":\"and \"}]},{\"node\":\"element\",\"tag\":\"a\",\"attr\":{\"href\":\"https://www.binance.com/en/risk-warning\"},\"child\":[{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":\"color:rgb(201,148,0);\"},\"child\":[{\"node\":\"text\",\"text\":\"Risk Warning\"}]}]},{\"node\":\"element\",\"tag\":\"span\",\"attr\":{\"style\":[\"color:hsl(0,\",\"0%,\",\"90%);\"]},\"child\":[{\"node\":\"text\",\"text\":\".\"}]}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"\u0026nbsp;\"}]},{\"node\":\"element\",\"tag\":\"p\",\"child\":[{\"node\":\"text\",\"text\":\"\u0026nbsp;\"}]}]}",
                                        "footer": null,
                                        "contentJson": "",
                                        "pairs": null,
                                        "content": ""
                                    },
                                    "articles": [{
                                        "id": 53246,
                                        "code": "f36339596002454a9eb2a2228b2695f7",
                                        "title": "Why Do I Need to Complete Identity Verification for My Binance Account?",
                                        "imageLink": null,
                                        "shortLink": null,
                                        "body": null,
                                        "type": 2,
                                        "catalogId": null,
                                        "catalogName": null,
                                        "publishDate": null,
                                        "footer": null
                                    }, {
                                        "id": 20093,
                                        "code": "360015552032",
                                        "title": "How to Complete Entity Verification (KYB) on Binance: Step-by-Step Guide",
                                        "imageLink": null,
                                        "shortLink": null,
                                        "body": null,
                                        "type": 2,
                                        "catalogId": null,
                                        "catalogName": null,
                                        "publishDate": null,
                                        "footer": null
                                    }, {
                                        "id": 169405,
                                        "code": "5f93f32905c0492eb36e908f26351178",
                                        "title": "How to Request/Provide Signatures for Binance Entity Verification Documents Online",
                                        "imageLink": null,
                                        "shortLink": null,
                                        "body": null,
                                        "type": 2,
                                        "catalogId": null,
                                        "catalogName": null,
                                        "publishDate": null,
                                        "footer": null
                                    }, {
                                        "id": 68850,
                                        "code": "5843ae03965047598db1023b3b1fce04",
                                        "title": "How to Verify My Binance Account? (EEA Countries)",
                                        "imageLink": null,
                                        "shortLink": null,
                                        "body": null,
                                        "type": 2,
                                        "catalogId": null,
                                        "catalogName": null,
                                        "publishDate": null,
                                        "footer": null
                                    }, {
                                        "id": 166248,
                                        "code": "e742b9bf6d2a4aa5ad2c2b5dbd83d702",
                                        "title": "How to Use the Verification Collaborators Function in Binance Entity Verification",
                                        "imageLink": null,
                                        "shortLink": null,
                                        "body": null,
                                        "type": 2,
                                        "catalogId": null,
                                        "catalogName": null,
                                        "publishDate": null,
                                        "footer": null
                                    }],
                                    "catalogs": [],
                                    "lastCategory": {
                                        "id": 10,
                                        "name": "Identity Verification",
                                        "level": 2
                                    },
                                    "coinPairs": [],
                                    "coinPriceVisible": false,
                                    "needEnForDefault": false
                                },
                                "e084": {}
                            }
                        }
                    },
                    "pageData": {
                        "shuviInitialState": {},
                        "redux": {
                            "cmsUI": {
                                "activePath": ""
                            },
                            "cookies": {
                                "theme": "light",
                                "userPreferredCurrency": "USD_USD"
                            },
                            "global": {
                                "origin": "https://www.binance.com",
                                "url": "https://www.binance.com/en/support/faq/detail/360027287111",
                                "path": "",
                                "host": "www.binance.com",
                                "dir": "ltr",
                                "metaData": {
                                    "metaTitle": "How to Complete Identity Verification for a Personal Account?",
                                    "metaKeyword": "Binance Identity Verification,Binance verification,Binance account verification",
                                    "metaDescription": "How to Complete Identity Verification for a Personal Account? Identity verification or Know Your Customer (KYC) standards are designed to protect your account against fraud, corruption, money launderi",
                                    "ogImage": "https://public.bnbstatic.com/static/images/cms/faq-og-1.jpg",
                                    "suffix": "Binance Identity Verification,Binance verification,Binance account verification",
                                    "brand": "Binance"
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
                            "mpConfig": {
                                "firstLoad": true,
                                "theme": "light"
                            },
                            "mpUser": {
                                "firstLoad": true,
                                "isLoading": true,
                                "isLoggedIn": false
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
                                "updateTime": 1746081565569
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
                            }
                        },
                        "i18nResource": {
                            "en": {
                                "support-center": {
                                    "support-center-related": "Related Articles",
                                    "support-center-supportCenter": "Support Center",
                                    "support-center-faq": "FAQ",
                                    "support-center-binance": "Binance",
                                    "share": "Share",
                                    "support-center-search": "Search",
                                    "register-incentive-new-user-reward-title": "Register to get rewards",
                                    "register-incentive-new-user-reward-desc": "Register Now - Get up to 100 USDT in trading fee rebate (for verified users)",
                                    "register-now": "Register Now",
                                    "coin-price-widget-title": "Popular Cryptocurrencies",
                                    "coin-price-widget-view-more": "View More Markets"
                                },
                                "binance-chat": {}
                            }
                        },
                        "i18nNamespaces": ["support-center", "binance-chat"],
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
                        "SITE_HOST": "https://www.binance.com",
                        "API_HOST": "https://www.binance.com",
                        "I18N_BASE_PRIVATE": "http://bin.bnbstatic.com.s3.ap-northeast-1.amazonaws.com/api/i18n/-/web/cms",
                        "I18N_BASE_PUBLIC": "./bin.bnbstatic.com/api/i18n/-/web/cms",
                        // "STATIC_HOST": "https://bin.bnbstatic.com",
                        "STATIC_HOST": "http://localhost//test2/",
                        "STATIC_HOST_PRIVATE": "http://bin.bnbstatic.com.s3.ap-northeast-1.amazonaws.com",
                        "STATIC_HOST_PUBLIC": "https://bin.bnbstatic.com",
                        "STATIC_HOST_SHARE": "https://public.bnbstatic.com",
                        "SENTRY_DSN": "https://bc7b4aa7b676d0e66992b3013f95e1b7@o529943.ingest.us.sentry.io/4507770388414464",
                        "SENTRY_ENV": "prod",
                        "COMMIT_HEAD": "c6e8226e0bbd07a97f9beff3c1fe8a393f0b2e00",
                        "SENSORS_SERVER_HOST": "https://api.saasexch.com/bapi/fe/usd/sa?project=binance"
                    },
                    "filesByRoutId": {
                        "3865": ["static/chunks/commons.ff1bf95d.js", "static/css/2f9ab09b.chunk.css", "static/chunks/page-3865.23d809f7.js"],
                        "4700": ["static/chunks/commons.ff1bf95d.js", "static/css/397a849d.chunk.css", "static/chunks/page-4700.8f9ffe5f.js"],
                        "6080": ["static/chunks/commons.ff1bf95d.js", "static/css/2cbe51a6.chunk.css", "static/chunks/page-6080.41d1a90e.js"],
                        "e084": ["static/chunks/commons.ff1bf95d.js", "static/css/f4578a23.chunk.css", "static/chunks/layout-e084.e73e4304.js"],
                        "ad1e": ["static/chunks/commons.ff1bf95d.js", "static/chunks/page-ad1e.c191bfad.js"],
                        "6b4e": ["static/chunks/page-6b4e.6095753b.js"],
                        "456a": ["static/chunks/commons.ff1bf95d.js", "static/chunks/page-456a.57367979.js"],
                        "0df4": ["static/chunks/commons.ff1bf95d.js", "static/chunks/page-0df4.a19d6181.js"],
                        "cd8e": ["static/chunks/commons.ff1bf95d.js", "static/css/24e64710.chunk.css", "static/chunks/page-cd8e.d510b267.js"],
                        "ebc2": ["static/chunks/commons.ff1bf95d.js", "static/css/397a849d.chunk.css", "static/chunks/page-ebc2.f1eb59c8.js"],
                        "d72f": ["static/chunks/commons.ff1bf95d.js", "static/css/a5e0875b.chunk.css", "static/chunks/page-d72f.43880971.js"],
                        "d34e": ["static/chunks/page-d34e.48e20f06.js"],
                        "ccf9": ["static/chunks/commons.ff1bf95d.js", "static/css/2c105127.chunk.css", "static/chunks/page-ccf9.e46f2812.js"]
                    },
                    "publicPath": "./test2/"
                }
            </script>
            <div id="__APP_EXTENSION" style="position: absolute;"></div><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M86QHGF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <script id="remote-config" src="./public.bnbstatic.com/unpkg/config/remote-config.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/polyfills.d7582762.js" nomodule data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script id="essential-js" src="./public.bnbstatic.com/unpkg/essential/essential@0.3.47.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script id="vendor-umd" src="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.18.2.0.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/data@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/common@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/webpack-runtime.dfaf29a6.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/common/framework.4d28bf2b.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/main.5639ddf4.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/web-push-odin/web-push-odin-pre.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/header@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.717.min.js" nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/versionCheck.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/headerRender.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/footerRender.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/extensionRender.js" data-ot-ignore nonce="a9660ce4-54bd-4dd0-a8c8-6d81a4c2c8ab"></script>
</body>

</html>