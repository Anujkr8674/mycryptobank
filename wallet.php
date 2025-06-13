<?php include "header.php"; ?>
<!doctype html>
<html lang="en" dir="ltr" class="dark" path-prefix=">

<head>
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no" />
    <meta charset="utf-8" />
    <!-- <title data-shuvi-head="true">Binance Wallet: Multi Blockchain, Crypto, DeFi</title> -->
    <meta name="keywords" content="Crypto Wallet, DeFi Wallet, Blockchain Wallet, Binance Wallet, cryptocurrency wallet" data-shuvi-head="true" />
    <meta name="description" content="Binance Wallet is a keyless, seedless, multi-chain, semi-custody wallet designed for DeFi. It provides a secure, streamlined way to manage cryptocurrencies, execute cross-chain swaps, earn yields, and interact with various blockchain applications."
        data-shuvi-head="true" />
    <meta property="og:type" content="website" data-shuvi-head="true" />
    <meta property="og:title" content="Binance Wallet: Multi Blockchain, Crypto, DeFi" data-shuvi-head="true" />
    <meta property="og:site_name" content="Binance" data-shuvi-head="true" />
    <meta property="og:image" content="https://public.bnbstatic.com/static/images/common/ogImage.jpg" data-shuvi-head="true" />
    <meta property="twitter:title" content="Binance Wallet: Multi Blockchain, Crypto, DeFi" data-shuvi-head="true" />
    <meta property="twitter:site" content="Binance" data-shuvi-head="true" />
    <meta property="twitter:image" content="https://public.bnbstatic.com/static/images/common/ogImage.jpg" data-shuvi-head="true" />
    <meta property="twitter:image:src" content="https://public.bnbstatic.com/static/images/common/ogImage.jpg" data-shuvi-head="true" />
    <meta property="twitter:card" content="summary_large_image" data-shuvi-head="true" />
    <meta http-equiv="etag" content="b2dca2e8e444d30ae47c4a11ebfc24463bd044db" />
    <meta name="msapplication-TileImage" content="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" data-shuvi-head="true" />
    <meta name="apple-mobile-web-app-capable" content="yes" data-shuvi-head="true" />
    <meta name="format-detection" content="email=no" data-shuvi-head="true" />

    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/MPC-wallet-web" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/new2fa" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/essential/essential@0.3.39.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.18.2.0.js" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/layout-b4aa.c6ae2769.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/page-26cb.80a2c7a8.js" as="script" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.664.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.664.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/data@1.3.664.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.664.min.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/webpack-runtime.4684ca46.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/common/framework.b444e70c.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/main.3a7d15a0.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/config/remote-config.js" />
    <link rel="shortcut icon" href="./bin.bnbstatic.com/static/images/common/favicon.ico" />
    <link rel="apple-touch-icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <link rel="icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <script id="OneTrust-sdk" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
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
                s.nonce = '49a23fde-d460-4c91-b1b1-1f87a615135b';
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
    <script id="Reporter-init" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
        window._bn_reporter = window._bn_reporter || [];
        window._bn_reporter_version = '4.0.12';

        function reportEvent(data) {
            window._bn_reporter.push(data);
        }
        reportEvent({
            key: "init",
            data: {
                "packageName": "project",
                "apiId": "cc1ljun9gpbp8ciciolg",
                "apiDomain": "https://api.saasexch.com",
                "ssr": true,
                "COMMIT_HEAD": "b2dca2e8e444d30ae47c4a11ebfc24463bd044db",
                "pikaVersion": "0.3.58",
                "traceId": "30473c74-63e7-4fdb-ba5e-0d5e19720926",
                "analyticsId": "web-mpc-wallet,Yaguang Xu,cloi8qe977254800u2pckjrfqd9"
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

    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/11f8b803.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/f6ff6d04.chunk.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/header@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.664.css" />
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
        #__APP{
            padding-top: 100px;
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

<body>
    <div id="__APP_TOP_PORTAL"></div>
  
            <div  id="__APP">
                <div class="relative w-full">
                    <div>
                        <div id="sticky-element">
                            <div class="section1 mb-[180px] md:mb-[240px] lg:mb-0">
                                <div class="relative z-20">
                                    <section class="mx-auto w-full px-6 md:px-12 lg:max-w-[1200px] lg:px-0  flex flex-col items-center pb-6 pt-12 md:min-h-[calc(100vh-64px)] md:pb-15 lg:flex-row lg:pb-0 lg:pl-0 lg:pt-0">
                                        <div class=" mb-[68px] flex w-full flex-col items-center text-center lg:mb-0 lg:block lg:max-w-[786px] lg:!text-left lg:rtl:!text-right ">
                                            <div class="relative flex"><span class=" lg:headline-5 md:headline-5 subtitle-1 gradient mb-[12px] ">MyCryptoBank Wallet</span></div>
                                            <div class="headline-4 md:headline-1 relative h-[40px] w-full md:h-[72px]">
                                                <h1 class="lg:justify-left absolute left-0 flex w-full justify-center lg:justify-start"><span class="wordsLoop opacity-0">Simple<!-- -->.</span></h1>
                                                <h1 class="lg:justify-left absolute left-0 flex w-full justify-center lg:justify-start"><span class="wordsLoop opacity-0">Secure<!-- -->.</span></h1>
                                                <h1 class="absolute left-0 flex w-full justify-center lg:justify-start"><span class="wordsLoop opacity-0">Rewarding<!-- -->.</span></h1>
                                            </div>
                                            <h1 class="md:headline-1 headline-4 mb-[40px] flex flex-wrap lg:max-w-[486px]">Your world of Web3.</h1><button class="
        subtitle-2-1 lg:subtitle-3 flex h-12 w-full items-center justify-center rounded-[8px] md:w-[180px] lg:w-[180px]
      cursor-pointer bg-yellow1 text-black1
     !w-[180px]">Get Started</button></div>
                                        <div id="mobile" class="flex w-full justify-center relative"><img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/phone-wrap.png" class="h-[649px] w-[320px]" />
                                            <div class="rounded-[38px] overflow-hidden absolute top-[14px] ml-[2px]"><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px)" autoplay="" loop="" muted="" playsinline="" class="mx-auto w-[285px]" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/hero-mobile-v3.mp4"></video></div>
                                        </div>
                                    </section>
                                </div>
                            </div>
<div id="sticky-animate" class="relative z-10 flex w-full translate-y-[-830px] justify-center overflow-hidden lg:sticky lg:bottom-[50px] lg:mx-auto lg:mt-[140px] lg:h-[678px] lg:w-[1200px] lg:translate-x-[46px] lg:translate-y-[56px] lg:items-end lg:justify-end lg:overflow-visible " style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><div id="animateWrap" class="lg:w-[678px]" style=""><div id="tokenSvg" class="w-[800px] md:w-[1000px] lg:w-auto" style="width: 300px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1970 1970" width="1970" height="1970" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"><defs><clipPath id="__lottie_element_124"><rect width="1970" height="1970" x="0" y="0"></rect></clipPath><linearGradient id="__lottie_element_131" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-520" y1="-556.8590087890625" x2="-781.0369873046875" y2="-533.343994140625"><stop offset="4%" stop-color="rgb(105,105,105)"></stop><stop offset="31%" stop-color="rgb(62,63,68)"></stop><stop offset="57%" stop-color="rgb(19,22,31)"></stop><stop offset="79%" stop-color="rgb(60,62,67)"></stop><stop offset="100%" stop-color="rgb(102,102,102)"></stop></linearGradient><linearGradient id="__lottie_element_132" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-711.3369750976562" y1="-1293.7080078125" x2="-777.364013671875" y2="-1408.0689697265625"><stop offset="0%" stop-color="rgb(19,22,31)"></stop><stop offset="50%" stop-color="rgb(60,62,67)"></stop><stop offset="100%" stop-color="rgb(102,102,102)"></stop></linearGradient><linearGradient id="__lottie_element_133" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="88.95700073242188" y1="-12.991999626159668" x2="-74.6709976196289" y2="-15.935999870300293"><stop offset="0%" stop-color="rgb(69,77,156)"></stop><stop offset="25%" stop-color="rgb(70,131,195)"></stop><stop offset="50%" stop-color="rgb(71,184,234)"></stop><stop offset="75%" stop-color="rgb(100,189,186)"></stop><stop offset="100%" stop-color="rgb(130,194,138)"></stop></linearGradient><linearGradient id="__lottie_element_137" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-650.4760131835938" y1="-1343.406005859375" x2="-712.0009765625" y2="-1420.5699462890625"><stop offset="0%" stop-color="rgb(255,255,255)"></stop><stop offset="50%" stop-color="rgb(243,244,245)"></stop><stop offset="100%" stop-color="rgb(230,232,234)"></stop></linearGradient><radialGradient id="__lottie_element_138" spreadMethod="pad" gradientUnits="userSpaceOnUse" cx="37.88999938964844" cy="10.987000465393066" r="36.799770189985274" fx="37.88999938964844" fy="10.987000465393066"><stop offset="20%" stop-color="rgb(86,242,255)"></stop><stop offset="60%" stop-color="rgb(80,191,245)"></stop><stop offset="100%" stop-color="rgb(74,140,234)"></stop></radialGradient><radialGradient id="__lottie_element_139" spreadMethod="pad" gradientUnits="userSpaceOnUse" cx="-0.1899999976158142" cy="24.677000045776367" r="49.59689015645734" fx="-0.1899999976158142" fy="24.677000045776367"><stop offset="0%" stop-color="rgb(238,255,131)"></stop><stop offset="34%" stop-color="rgb(162,204,184)"></stop><stop offset="69%" stop-color="rgb(86,153,236)"></stop></radialGradient><radialGradient id="__lottie_element_140" spreadMethod="pad" gradientUnits="userSpaceOnUse" cx="-3.805999994277954" cy="-7.011000156402588" r="13.126074056450895" fx="-3.805999994277954" fy="-7.011000156402588"><stop offset="0%" stop-color="rgb(86,242,255)"></stop><stop offset="50%" stop-color="rgb(86,198,246)"></stop><stop offset="100%" stop-color="rgb(86,153,236)"></stop></radialGradient><linearGradient id="__lottie_element_141" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="103.93800354003906" y1="-21.058000564575195" x2="-71.58599853515625" y2="-164.11500549316406"><stop offset="38%" stop-color="rgb(255,227,54)" stop-opacity="1"></stop><stop offset="69%" stop-color="rgb(137,210,118)" stop-opacity="0.8500000238418579"></stop><stop offset="100%" stop-color="rgb(19,192,182)" stop-opacity="0.699999988079071"></stop></linearGradient><linearGradient id="__lottie_element_142" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-35.55099868774414" y1="-20.40999984741211" x2="8.314000129699707" y2="-14.092000007629395"><stop offset="41%" stop-color="rgb(255,127,114)" stop-opacity="1"></stop><stop offset="70%" stop-color="rgb(148,123,176)" stop-opacity="0.8500000238418579"></stop><stop offset="100%" stop-color="rgb(41,120,239)" stop-opacity="0.699999988079071"></stop></linearGradient><linearGradient id="__lottie_element_152" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="35.367000579833984" y1="22.36400032043457" x2="-36.65700149536133" y2="-54.72700119018555"><stop offset="1%" stop-color="rgb(100,90,255)"></stop><stop offset="25%" stop-color="rgb(164,51,173)"></stop><stop offset="50%" stop-color="rgb(228,12,91)"></stop><stop offset="75%" stop-color="rgb(241,44,75)"></stop><stop offset="100%" stop-color="rgb(255,76,59)"></stop></linearGradient><linearGradient id="__lottie_element_156" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-85.45700073242188" y1="8.87399959564209" x2="87.5719985961914" y2="17.040000915527344"><stop offset="0%" stop-color="rgb(81,57,200)"></stop><stop offset="50%" stop-color="rgb(109,62,201)"></stop><stop offset="100%" stop-color="rgb(137,68,203)"></stop></linearGradient><linearGradient id="__lottie_element_157" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="64.03900146484375" y1="39.98500061035156" x2="-51.902000427246094" y2="-48.257999420166016"><stop offset="0%" stop-color="rgb(103,73,255)"></stop><stop offset="50%" stop-color="rgb(132,69,254)"></stop><stop offset="100%" stop-color="rgb(161,64,253)"></stop></linearGradient><linearGradient id="__lottie_element_174" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-353" y1="-680.3049926757812" x2="-822.0020141601562" y2="-806.4990234375"><stop offset="0%" stop-color="rgb(255,255,255)"></stop><stop offset="38%" stop-color="rgb(255,236,245)"></stop><stop offset="77%" stop-color="rgb(255,216,234)"></stop><stop offset="86%" stop-color="rgb(237,198,216)"></stop><stop offset="95%" stop-color="rgb(220,181,199)"></stop></linearGradient><linearGradient id="__lottie_element_175" spreadMethod="pad" gradientUnits="userSpaceOnUse" x1="-162.13499450683594" y1="-924.5830078125" x2="-222.83700561523438" y2="-1205.4429931640625"><stop offset="0%" stop-color="rgb(255,216,234)"></stop><stop offset="44%" stop-color="rgb(255,224,238)"></stop><stop offset="87%" stop-color="rgb(255,232,242)"></stop></linearGradient></defs><g clip-path="url(#__lottie_element_124)"><g transform="matrix(0.23504909873008728,-0.8772151470184326,0.8772151470184326,0.23504909873008728,1657.933349609375,838.1650390625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(123,63,228)" fill-opacity="1" d=" M163.33200073242188,-21.464496612548828 C163.33200073242188,-98.67723846435547 100.64146423339844,-161.3679962158203 23.429000854492188,-161.3679962158203 C23.429000854492188,-161.3679962158203 23.429000854492188,-161.3679962158203 23.429000854492188,-161.3679962158203 C-53.78346633911133,-161.3679962158203 -116.4739990234375,-98.67723846435547 -116.4739990234375,-21.464496612548828 C-116.4739990234375,-21.464496612548828 -116.4739990234375,-21.464496612548828 -116.4739990234375,-21.464496612548828 C-116.4739990234375,55.74824523925781 -53.78346633911133,118.43900299072266 23.429000854492188,118.43900299072266 C23.429000854492188,118.43900299072266 23.429000854492188,118.43900299072266 23.429000854492188,118.43900299072266 C100.64146423339844,118.43900299072266 163.33200073242188,55.74824523925781 163.33200073242188,-21.464496612548828 C163.33200073242188,-21.464496612548828 163.33200073242188,-21.464496612548828 163.33200073242188,-21.464496612548828z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M60.39099884033203,6.11299991607666 C60.39099884033203,6.11299991607666 96.54900360107422,-14.765999794006348 96.54900360107422,-14.765999794006348 C98.46399688720703,-15.871999740600586 99.64800262451172,-17.92799949645996 99.64800262451172,-20.141000747680664 C99.64800262451172,-20.141000747680664 99.64800262451172,-61.893001556396484 99.64800262451172,-61.893001556396484 C99.64800262451172,-64.0999984741211 98.45899963378906,-66.16200256347656 96.54900360107422,-67.26799774169922 C96.54900360107422,-67.26799774169922 60.39099884033203,-88.14600372314453 60.39099884033203,-88.14600372314453 C58.47600173950195,-89.25199890136719 56.10200119018555,-89.24700164794922 54.18600082397461,-88.14600372314453 C54.18600082397461,-88.14600372314453 18.02899932861328,-67.26799774169922 18.02899932861328,-67.26799774169922 C16.11400032043457,-66.16200256347656 14.928999900817871,-64.0999984741211 14.928999900817871,-61.893001556396484 C14.928999900817871,-61.893001556396484 14.928999900817871,12.723999977111816 14.928999900817871,12.723999977111816 C14.928999900817871,12.723999977111816 -10.427000045776367,27.36199951171875 -10.427000045776367,27.36199951171875 C-10.427000045776367,27.36199951171875 -35.78300094604492,12.723999977111816 -35.78300094604492,12.723999977111816 C-35.78300094604492,12.723999977111816 -35.78300094604492,-16.555999755859375 -35.78300094604492,-16.555999755859375 C-35.78300094604492,-16.555999755859375 -10.427000045776367,-31.19300079345703 -10.427000045776367,-31.19300079345703 C-10.427000045776367,-31.19300079345703 6.297999858856201,-21.538999557495117 6.297999858856201,-21.538999557495117 C6.297999858856201,-21.538999557495117 6.297999858856201,-41.180999755859375 6.297999858856201,-41.180999755859375 C6.297999858856201,-41.180999755859375 -7.327000141143799,-49.04499816894531 -7.327000141143799,-49.04499816894531 C-8.265999794006348,-49.5880012512207 -9.340999603271484,-49.875 -10.432000160217285,-49.875 C-11.52299976348877,-49.875 -12.597999572753906,-49.5880012512207 -13.531999588012695,-49.04499816894531 C-13.531999588012695,-49.04499816894531 -49.68899917602539,-28.166000366210938 -49.68899917602539,-28.166000366210938 C-51.604000091552734,-27.059999465942383 -52.78900146484375,-25.003999710083008 -52.78900146484375,-22.79199981689453 C-52.78900146484375,-22.79199981689453 -52.78900146484375,18.959999084472656 -52.78900146484375,18.959999084472656 C-52.78900146484375,21.16699981689453 -51.5989990234375,23.229000091552734 -49.68899917602539,24.334999084472656 C-49.68899917602539,24.334999084472656 -13.531999588012695,45.2130012512207 -13.531999588012695,45.2130012512207 C-11.621999740600586,46.314998626708984 -9.241999626159668,46.314998626708984 -7.327000141143799,45.2130012512207 C-7.327000141143799,45.2130012512207 28.83099937438965,24.34000015258789 28.83099937438965,24.34000015258789 C30.746000289916992,23.233999252319336 31.93000030517578,21.17300033569336 31.93000030517578,18.96500015258789 C31.93000030517578,18.96500015258789 31.93000030517578,-55.652000427246094 31.93000030517578,-55.652000427246094 C31.93000030517578,-55.652000427246094 32.38999938964844,-55.9119987487793 32.38999938964844,-55.9119987487793 C32.38999938964844,-55.9119987487793 57.2859992980957,-70.28900146484375 57.2859992980957,-70.28900146484375 C57.2859992980957,-70.28900146484375 82.64199829101562,-55.652000427246094 82.64199829101562,-55.652000427246094 C82.64199829101562,-55.652000427246094 82.64199829101562,-26.371000289916992 82.64199829101562,-26.371000289916992 C82.64199829101562,-26.371000289916992 57.2859992980957,-11.734000205993652 57.2859992980957,-11.734000205993652 C57.2859992980957,-11.734000205993652 40.5880012512207,-21.37700080871582 40.5880012512207,-21.37700080871582 C40.5880012512207,-21.37700080871582 40.5880012512207,-1.7359999418258667 40.5880012512207,-1.7359999418258667 C40.5880012512207,-1.7359999418258667 54.18600082397461,6.118000030517578 54.18600082397461,6.118000030517578 C56.10200119018555,7.218999862670898 58.47600173950195,7.218999862670898 60.39099884033203,6.118000030517578 C60.39099884033203,6.118000030517578 60.39099884033203,6.11299991607666 60.39099884033203,6.11299991607666z"></path></g></g><g transform="matrix(0.33803999423980713,0,0,0.33803999423980713,705,1513)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(123,63,228)" fill-opacity="1" d=" M163.33200073242188,-21.464496612548828 C163.33200073242188,-98.67723846435547 100.64146423339844,-161.3679962158203 23.429000854492188,-161.3679962158203 C23.429000854492188,-161.3679962158203 23.429000854492188,-161.3679962158203 23.429000854492188,-161.3679962158203 C-53.78346633911133,-161.3679962158203 -116.4739990234375,-98.67723846435547 -116.4739990234375,-21.464496612548828 C-116.4739990234375,-21.464496612548828 -116.4739990234375,-21.464496612548828 -116.4739990234375,-21.464496612548828 C-116.4739990234375,55.74824523925781 -53.78346633911133,118.43900299072266 23.429000854492188,118.43900299072266 C23.429000854492188,118.43900299072266 23.429000854492188,118.43900299072266 23.429000854492188,118.43900299072266 C100.64146423339844,118.43900299072266 163.33200073242188,55.74824523925781 163.33200073242188,-21.464496612548828 C163.33200073242188,-21.464496612548828 163.33200073242188,-21.464496612548828 163.33200073242188,-21.464496612548828z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M60.39099884033203,6.11299991607666 C60.39099884033203,6.11299991607666 96.54900360107422,-14.765999794006348 96.54900360107422,-14.765999794006348 C98.46399688720703,-15.871999740600586 99.64800262451172,-17.92799949645996 99.64800262451172,-20.141000747680664 C99.64800262451172,-20.141000747680664 99.64800262451172,-61.893001556396484 99.64800262451172,-61.893001556396484 C99.64800262451172,-64.0999984741211 98.45899963378906,-66.16200256347656 96.54900360107422,-67.26799774169922 C96.54900360107422,-67.26799774169922 60.39099884033203,-88.14600372314453 60.39099884033203,-88.14600372314453 C58.47600173950195,-89.25199890136719 56.10200119018555,-89.24700164794922 54.18600082397461,-88.14600372314453 C54.18600082397461,-88.14600372314453 18.02899932861328,-67.26799774169922 18.02899932861328,-67.26799774169922 C16.11400032043457,-66.16200256347656 14.928999900817871,-64.0999984741211 14.928999900817871,-61.893001556396484 C14.928999900817871,-61.893001556396484 14.928999900817871,12.723999977111816 14.928999900817871,12.723999977111816 C14.928999900817871,12.723999977111816 -10.427000045776367,27.36199951171875 -10.427000045776367,27.36199951171875 C-10.427000045776367,27.36199951171875 -35.78300094604492,12.723999977111816 -35.78300094604492,12.723999977111816 C-35.78300094604492,12.723999977111816 -35.78300094604492,-16.555999755859375 -35.78300094604492,-16.555999755859375 C-35.78300094604492,-16.555999755859375 -10.427000045776367,-31.19300079345703 -10.427000045776367,-31.19300079345703 C-10.427000045776367,-31.19300079345703 6.297999858856201,-21.538999557495117 6.297999858856201,-21.538999557495117 C6.297999858856201,-21.538999557495117 6.297999858856201,-41.180999755859375 6.297999858856201,-41.180999755859375 C6.297999858856201,-41.180999755859375 -7.327000141143799,-49.04499816894531 -7.327000141143799,-49.04499816894531 C-8.265999794006348,-49.5880012512207 -9.340999603271484,-49.875 -10.432000160217285,-49.875 C-11.52299976348877,-49.875 -12.597999572753906,-49.5880012512207 -13.531999588012695,-49.04499816894531 C-13.531999588012695,-49.04499816894531 -49.68899917602539,-28.166000366210938 -49.68899917602539,-28.166000366210938 C-51.604000091552734,-27.059999465942383 -52.78900146484375,-25.003999710083008 -52.78900146484375,-22.79199981689453 C-52.78900146484375,-22.79199981689453 -52.78900146484375,18.959999084472656 -52.78900146484375,18.959999084472656 C-52.78900146484375,21.16699981689453 -51.5989990234375,23.229000091552734 -49.68899917602539,24.334999084472656 C-49.68899917602539,24.334999084472656 -13.531999588012695,45.2130012512207 -13.531999588012695,45.2130012512207 C-11.621999740600586,46.314998626708984 -9.241999626159668,46.314998626708984 -7.327000141143799,45.2130012512207 C-7.327000141143799,45.2130012512207 28.83099937438965,24.34000015258789 28.83099937438965,24.34000015258789 C30.746000289916992,23.233999252319336 31.93000030517578,21.17300033569336 31.93000030517578,18.96500015258789 C31.93000030517578,18.96500015258789 31.93000030517578,-55.652000427246094 31.93000030517578,-55.652000427246094 C31.93000030517578,-55.652000427246094 32.38999938964844,-55.9119987487793 32.38999938964844,-55.9119987487793 C32.38999938964844,-55.9119987487793 57.2859992980957,-70.28900146484375 57.2859992980957,-70.28900146484375 C57.2859992980957,-70.28900146484375 82.64199829101562,-55.652000427246094 82.64199829101562,-55.652000427246094 C82.64199829101562,-55.652000427246094 82.64199829101562,-26.371000289916992 82.64199829101562,-26.371000289916992 C82.64199829101562,-26.371000289916992 57.2859992980957,-11.734000205993652 57.2859992980957,-11.734000205993652 C57.2859992980957,-11.734000205993652 40.5880012512207,-21.37700080871582 40.5880012512207,-21.37700080871582 C40.5880012512207,-21.37700080871582 40.5880012512207,-1.7359999418258667 40.5880012512207,-1.7359999418258667 C40.5880012512207,-1.7359999418258667 54.18600082397461,6.118000030517578 54.18600082397461,6.118000030517578 C56.10200119018555,7.218999862670898 58.47600173950195,7.218999862670898 60.39099884033203,6.118000030517578 C60.39099884033203,6.118000030517578 60.39099884033203,6.11299991607666 60.39099884033203,6.11299991607666z"></path></g></g><g transform="matrix(0.3571400046348572,0,0,0.3571400046348572,527,154)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(123,63,228)" fill-opacity="1" d=" M163.33200073242188,-21.464496612548828 C163.33200073242188,-98.67723846435547 100.64146423339844,-161.3679962158203 23.429000854492188,-161.3679962158203 C23.429000854492188,-161.3679962158203 23.429000854492188,-161.3679962158203 23.429000854492188,-161.3679962158203 C-53.78346633911133,-161.3679962158203 -116.4739990234375,-98.67723846435547 -116.4739990234375,-21.464496612548828 C-116.4739990234375,-21.464496612548828 -116.4739990234375,-21.464496612548828 -116.4739990234375,-21.464496612548828 C-116.4739990234375,55.74824523925781 -53.78346633911133,118.43900299072266 23.429000854492188,118.43900299072266 C23.429000854492188,118.43900299072266 23.429000854492188,118.43900299072266 23.429000854492188,118.43900299072266 C100.64146423339844,118.43900299072266 163.33200073242188,55.74824523925781 163.33200073242188,-21.464496612548828 C163.33200073242188,-21.464496612548828 163.33200073242188,-21.464496612548828 163.33200073242188,-21.464496612548828z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M60.39099884033203,6.11299991607666 C60.39099884033203,6.11299991607666 96.54900360107422,-14.765999794006348 96.54900360107422,-14.765999794006348 C98.46399688720703,-15.871999740600586 99.64800262451172,-17.92799949645996 99.64800262451172,-20.141000747680664 C99.64800262451172,-20.141000747680664 99.64800262451172,-61.893001556396484 99.64800262451172,-61.893001556396484 C99.64800262451172,-64.0999984741211 98.45899963378906,-66.16200256347656 96.54900360107422,-67.26799774169922 C96.54900360107422,-67.26799774169922 60.39099884033203,-88.14600372314453 60.39099884033203,-88.14600372314453 C58.47600173950195,-89.25199890136719 56.10200119018555,-89.24700164794922 54.18600082397461,-88.14600372314453 C54.18600082397461,-88.14600372314453 18.02899932861328,-67.26799774169922 18.02899932861328,-67.26799774169922 C16.11400032043457,-66.16200256347656 14.928999900817871,-64.0999984741211 14.928999900817871,-61.893001556396484 C14.928999900817871,-61.893001556396484 14.928999900817871,12.723999977111816 14.928999900817871,12.723999977111816 C14.928999900817871,12.723999977111816 -10.427000045776367,27.36199951171875 -10.427000045776367,27.36199951171875 C-10.427000045776367,27.36199951171875 -35.78300094604492,12.723999977111816 -35.78300094604492,12.723999977111816 C-35.78300094604492,12.723999977111816 -35.78300094604492,-16.555999755859375 -35.78300094604492,-16.555999755859375 C-35.78300094604492,-16.555999755859375 -10.427000045776367,-31.19300079345703 -10.427000045776367,-31.19300079345703 C-10.427000045776367,-31.19300079345703 6.297999858856201,-21.538999557495117 6.297999858856201,-21.538999557495117 C6.297999858856201,-21.538999557495117 6.297999858856201,-41.180999755859375 6.297999858856201,-41.180999755859375 C6.297999858856201,-41.180999755859375 -7.327000141143799,-49.04499816894531 -7.327000141143799,-49.04499816894531 C-8.265999794006348,-49.5880012512207 -9.340999603271484,-49.875 -10.432000160217285,-49.875 C-11.52299976348877,-49.875 -12.597999572753906,-49.5880012512207 -13.531999588012695,-49.04499816894531 C-13.531999588012695,-49.04499816894531 -49.68899917602539,-28.166000366210938 -49.68899917602539,-28.166000366210938 C-51.604000091552734,-27.059999465942383 -52.78900146484375,-25.003999710083008 -52.78900146484375,-22.79199981689453 C-52.78900146484375,-22.79199981689453 -52.78900146484375,18.959999084472656 -52.78900146484375,18.959999084472656 C-52.78900146484375,21.16699981689453 -51.5989990234375,23.229000091552734 -49.68899917602539,24.334999084472656 C-49.68899917602539,24.334999084472656 -13.531999588012695,45.2130012512207 -13.531999588012695,45.2130012512207 C-11.621999740600586,46.314998626708984 -9.241999626159668,46.314998626708984 -7.327000141143799,45.2130012512207 C-7.327000141143799,45.2130012512207 28.83099937438965,24.34000015258789 28.83099937438965,24.34000015258789 C30.746000289916992,23.233999252319336 31.93000030517578,21.17300033569336 31.93000030517578,18.96500015258789 C31.93000030517578,18.96500015258789 31.93000030517578,-55.652000427246094 31.93000030517578,-55.652000427246094 C31.93000030517578,-55.652000427246094 32.38999938964844,-55.9119987487793 32.38999938964844,-55.9119987487793 C32.38999938964844,-55.9119987487793 57.2859992980957,-70.28900146484375 57.2859992980957,-70.28900146484375 C57.2859992980957,-70.28900146484375 82.64199829101562,-55.652000427246094 82.64199829101562,-55.652000427246094 C82.64199829101562,-55.652000427246094 82.64199829101562,-26.371000289916992 82.64199829101562,-26.371000289916992 C82.64199829101562,-26.371000289916992 57.2859992980957,-11.734000205993652 57.2859992980957,-11.734000205993652 C57.2859992980957,-11.734000205993652 40.5880012512207,-21.37700080871582 40.5880012512207,-21.37700080871582 C40.5880012512207,-21.37700080871582 40.5880012512207,-1.7359999418258667 40.5880012512207,-1.7359999418258667 C40.5880012512207,-1.7359999418258667 54.18600082397461,6.118000030517578 54.18600082397461,6.118000030517578 C56.10200119018555,7.218999862670898 58.47600173950195,7.218999862670898 60.39099884033203,6.118000030517578 C60.39099884033203,6.118000030517578 60.39099884033203,6.11299991607666 60.39099884033203,6.11299991607666z"></path></g></g><g transform="matrix(0.396975040435791,-0.6875808835029602,0.6875808835029602,0.396975040435791,213.25244140625,715.73291015625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(104,126,227)" fill-opacity="1" d=" M61.34199905395508,-225.21299743652344 C173.86900329589844,-204.2740020751953 248.11599731445312,-96.0780029296875 227.177001953125,16.448999404907227 C206.23800659179688,128.9759979248047 98.04199981689453,203.22300720214844 -14.484999656677246,182.28399658203125 C-127.01200103759766,161.34500122070312 -201.25900268554688,53.14899826049805 -180.32000732421875,-59.37799835205078 C-159.38099670410156,-171.90499877929688 -51.185001373291016,-246.15199279785156 61.34199905395508,-225.21299743652344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 106.97899627685547,15.163000106811523 106.97899627685547,15.163000106811523 C106.97899627685547,15.163000106811523 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(196,200,216)" fill-opacity="1" d=" M30.39900016784668,-58.91600036621094 C30.39900016784668,-58.91600036621094 13.401000022888184,32.428001403808594 13.401000022888184,32.428001403808594 C13.401000022888184,32.428001403808594 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 30.39900016784668,-58.91600036621094 30.39900016784668,-58.91600036621094z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(208,214,234)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 -67.7030029296875,-17.341999053955078 -67.7030029296875,-17.341999053955078 C-67.7030029296875,-17.341999053955078 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 13.401000022888184,32.42900085449219 13.401000022888184,32.42900085449219 C13.401000022888184,32.42900085449219 -64.3239974975586,-35.500999450683594 -64.3239974975586,-35.500999450683594 C-64.3239974975586,-35.500999450683594 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.398000717163086,-58.915000915527344 30.398000717163086,-58.915000915527344 C30.398000717163086,-58.915000915527344 -64.3239974975586,-35.5 -64.3239974975586,-35.5 C-64.3239974975586,-35.5 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g></g><g transform="matrix(-0.15108682215213776,0.04676918685436249,-0.04676918685436249,-0.15108682215213776,1423,884)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(104,126,227)" fill-opacity="1" d=" M61.34199905395508,-225.21299743652344 C173.86900329589844,-204.2740020751953 248.11599731445312,-96.0780029296875 227.177001953125,16.448999404907227 C206.23800659179688,128.9759979248047 98.04199981689453,203.22300720214844 -14.484999656677246,182.28399658203125 C-127.01200103759766,161.34500122070312 -201.25900268554688,53.14899826049805 -180.32000732421875,-59.37799835205078 C-159.38099670410156,-171.90499877929688 -51.185001373291016,-246.15199279785156 61.34199905395508,-225.21299743652344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 106.97899627685547,15.163000106811523 106.97899627685547,15.163000106811523 C106.97899627685547,15.163000106811523 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(196,200,216)" fill-opacity="1" d=" M30.39900016784668,-58.91600036621094 C30.39900016784668,-58.91600036621094 13.401000022888184,32.428001403808594 13.401000022888184,32.428001403808594 C13.401000022888184,32.428001403808594 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 30.39900016784668,-58.91600036621094 30.39900016784668,-58.91600036621094z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(208,214,234)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 -67.7030029296875,-17.341999053955078 -67.7030029296875,-17.341999053955078 C-67.7030029296875,-17.341999053955078 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 13.401000022888184,32.42900085449219 13.401000022888184,32.42900085449219 C13.401000022888184,32.42900085449219 -64.3239974975586,-35.500999450683594 -64.3239974975586,-35.500999450683594 C-64.3239974975586,-35.500999450683594 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.398000717163086,-58.915000915527344 30.398000717163086,-58.915000915527344 C30.398000717163086,-58.915000915527344 -64.3239974975586,-35.5 -64.3239974975586,-35.5 C-64.3239974975586,-35.5 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g></g><g transform="matrix(-0.28473207354545593,-0.20535524189472198,0.20535524189472198,-0.28473207354545593,1096.1793212890625,1779.786376953125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(104,126,227)" fill-opacity="1" d=" M61.34199905395508,-225.21299743652344 C173.86900329589844,-204.2740020751953 248.11599731445312,-96.0780029296875 227.177001953125,16.448999404907227 C206.23800659179688,128.9759979248047 98.04199981689453,203.22300720214844 -14.484999656677246,182.28399658203125 C-127.01200103759766,161.34500122070312 -201.25900268554688,53.14899826049805 -180.32000732421875,-59.37799835205078 C-159.38099670410156,-171.90499877929688 -51.185001373291016,-246.15199279785156 61.34199905395508,-225.21299743652344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 106.97899627685547,15.163000106811523 106.97899627685547,15.163000106811523 C106.97899627685547,15.163000106811523 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(196,200,216)" fill-opacity="1" d=" M30.39900016784668,-58.91600036621094 C30.39900016784668,-58.91600036621094 13.401000022888184,32.428001403808594 13.401000022888184,32.428001403808594 C13.401000022888184,32.428001403808594 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 30.39900016784668,-58.91600036621094 30.39900016784668,-58.91600036621094z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(208,214,234)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 -67.7030029296875,-17.341999053955078 -67.7030029296875,-17.341999053955078 C-67.7030029296875,-17.341999053955078 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 13.401000022888184,32.42900085449219 13.401000022888184,32.42900085449219 C13.401000022888184,32.42900085449219 -64.3239974975586,-35.500999450683594 -64.3239974975586,-35.500999450683594 C-64.3239974975586,-35.500999450683594 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.398000717163086,-58.915000915527344 30.398000717163086,-58.915000915527344 C30.398000717163086,-58.915000915527344 -64.3239974975586,-35.5 -64.3239974975586,-35.5 C-64.3239974975586,-35.5 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g></g><g transform="matrix(0.3385014533996582,-0.13065077364444733,0.13065077364444733,0.3385014533996582,805,1329)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(104,126,227)" fill-opacity="1" d=" M61.34199905395508,-225.21299743652344 C173.86900329589844,-204.2740020751953 248.11599731445312,-96.0780029296875 227.177001953125,16.448999404907227 C206.23800659179688,128.9759979248047 98.04199981689453,203.22300720214844 -14.484999656677246,182.28399658203125 C-127.01200103759766,161.34500122070312 -201.25900268554688,53.14899826049805 -180.32000732421875,-59.37799835205078 C-159.38099670410156,-171.90499877929688 -51.185001373291016,-246.15199279785156 61.34199905395508,-225.21299743652344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 106.97899627685547,15.163000106811523 106.97899627685547,15.163000106811523 C106.97899627685547,15.163000106811523 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(196,200,216)" fill-opacity="1" d=" M30.39900016784668,-58.91600036621094 C30.39900016784668,-58.91600036621094 13.401000022888184,32.428001403808594 13.401000022888184,32.428001403808594 C13.401000022888184,32.428001403808594 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 30.39900016784668,-58.91600036621094 30.39900016784668,-58.91600036621094z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(208,214,234)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 110.35800170898438,-2.996000051498413 110.35800170898438,-2.996000051498413 C110.35800170898438,-2.996000051498413 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M10.022000312805176,50.58700180053711 C10.022000312805176,50.58700180053711 -3.183000087738037,121.552001953125 -3.183000087738037,121.552001953125 C-3.183000087738037,121.552001953125 -67.7030029296875,-17.341999053955078 -67.7030029296875,-17.341999053955078 C-67.7030029296875,-17.341999053955078 10.022000312805176,50.58700180053711 10.022000312805176,50.58700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(210,216,236)" fill-opacity="1" d=" M30.39900016784668,-58.915000915527344 C30.39900016784668,-58.915000915527344 13.401000022888184,32.42900085449219 13.401000022888184,32.42900085449219 C13.401000022888184,32.42900085449219 -64.3239974975586,-35.500999450683594 -64.3239974975586,-35.500999450683594 C-64.3239974975586,-35.500999450683594 30.39900016784668,-58.915000915527344 30.39900016784668,-58.915000915527344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(222,226,246)" fill-opacity="1" d=" M49.96900177001953,-164.08900451660156 C49.96900177001953,-164.08900451660156 30.398000717163086,-58.915000915527344 30.398000717163086,-58.915000915527344 C30.398000717163086,-58.915000915527344 -64.3239974975586,-35.5 -64.3239974975586,-35.5 C-64.3239974975586,-35.5 49.96900177001953,-164.08900451660156 49.96900177001953,-164.08900451660156z"></path></g></g><g transform="matrix(0.9928701519966125,0.11920113116502762,-0.11920113116502762,0.9928701519966125,1025,731)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(181,137,13)" fill-opacity="1" d=" M179.9969940185547,-211.4290008544922 C179.9969940185547,-211.4290008544922 -231.8560028076172,152.7899932861328 -231.8560028076172,152.7899932861328 C-231.8560028076172,152.7899932861328 -190.5709991455078,199.4739990234375 -190.5709991455078,199.4739990234375 C-133.90199279785156,252.8159942626953 -2.8010001182556152,218.2740020751953 107.33499908447266,119.93299865722656 C216.11199951171875,22.80500030517578 265.0320129394531,-101.9280014038086 221.2830047607422,-164.74400329589844 C221.2830047607422,-164.74400329589844 179.9969940185547,-211.4290008544922 179.9969940185547,-211.4290008544922z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(240,185,11)" fill-opacity="1" d=" M-122.22899627685547,-138.21299743652344 C-8.49899959564209,-238.78900146484375 126.81600189208984,-271.56500244140625 180.0050048828125,-211.4199981689453 C233.19400024414062,-151.27499389648438 184.11700439453125,-20.982999801635742 70.38700103759766,79.59300231933594 C-43.34299850463867,180.16900634765625 -178.6580047607422,212.94500732421875 -231.8470001220703,152.8000030517578 C-285.0360107421875,92.65499877929688 -235.95899963378906,-37.637001037597656 -122.22899627685547,-138.21299743652344z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(221,171,31)" fill-opacity="1" d=" M-104.58300018310547,-118.25599670410156 C-11.543999671936035,-200.53399658203125 99.09600067138672,-227.40899658203125 142.54100036621094,-178.2830047607422 C185.98500061035156,-129.15699768066406 145.78199768066406,-22.631999969482422 52.74300003051758,59.645999908447266 C-40.29600143432617,141.9239959716797 -150.93600463867188,168.7989959716797 -194.38099670410156,119.6729965209961 C-237.8260040283203,70.5469970703125 -197.6219940185547,-35.97800064086914 -104.58300018310547,-118.25599670410156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-122.13999938964844,-17.17799949645996 C-122.13999938964844,-17.17799949645996 -78.92900085449219,-87.8949966430664 -78.92900085449219,-87.8949966430664 C-78.92900085449219,-87.8949966430664 -3.4590001106262207,-122.13400268554688 -3.4590001106262207,-122.13400268554688 C-3.4590001106262207,-122.13400268554688 -19.316999435424805,-96.10199737548828 -19.316999435424805,-96.10199737548828 C-19.316999435424805,-96.10199737548828 -67.01200103759766,-74.41899871826172 -67.01200103759766,-74.41899871826172 C-67.01200103759766,-74.41899871826172 -94.36499786376953,-29.733999252319336 -94.36499786376953,-29.733999252319336 C-94.36499786376953,-29.733999252319336 -122.13999938964844,-17.17799949645996 -122.13999938964844,-17.17799949645996z M16.881999969482422,-99.13200378417969 C16.881999969482422,-99.13200378417969 -10.892999649047852,-86.5770034790039 -10.892999649047852,-86.5770034790039 C-10.892999649047852,-86.5770034790039 -38.24599838256836,-41.89099884033203 -38.24599838256836,-41.89099884033203 C-38.24599838256836,-41.89099884033203 -85.94100189208984,-20.20800018310547 -85.94100189208984,-20.20800018310547 C-85.94100189208984,-20.20800018310547 -101.79900360107422,5.822999954223633 -101.79900360107422,5.822999954223633 C-101.79900360107422,5.822999954223633 -89.88200378417969,19.298999786376953 -89.88200378417969,19.298999786376953 C-89.88200378417969,19.298999786376953 -42.1870002746582,-2.384999990463257 -42.1870002746582,-2.384999990463257 C-42.1870002746582,-2.384999990463257 -21.84600067138672,20.617000579833984 -21.84600067138672,20.617000579833984 C-21.84600067138672,20.617000579833984 5.929999828338623,8.062000274658203 5.929999828338623,8.062000274658203 C5.929999828338623,8.062000274658203 21.78700065612793,-17.969999313354492 21.78700065612793,-17.969999313354492 C21.78700065612793,-17.969999313354492 1.4459999799728394,-40.97100067138672 1.4459999799728394,-40.97100067138672 C1.4459999799728394,-40.97100067138672 28.799999237060547,-85.65599822998047 28.799999237060547,-85.65599822998047 C28.799999237060547,-85.65599822998047 16.881999969482422,-99.13200378417969 16.881999969482422,-99.13200378417969z M49.14099884033203,-62.654998779296875 C49.14099884033203,-62.654998779296875 37.2239990234375,-76.12999725341797 37.2239990234375,-76.12999725341797 C37.2239990234375,-76.12999725341797 21.365999221801758,-50.0989990234375 21.365999221801758,-50.0989990234375 C21.365999221801758,-50.0989990234375 33.28300094604492,-36.624000549316406 33.28300094604492,-36.624000549316406 C33.28300094604492,-36.624000549316406 49.14099884033203,-62.654998779296875 49.14099884033203,-62.654998779296875z M68.84300231933594,-71.58999633789062 C68.84300231933594,-71.58999633789062 41.48899841308594,-26.905000686645508 41.48899841308594,-26.905000686645508 C41.48899841308594,-26.905000686645508 53.40700149536133,-13.428999900817871 53.40700149536133,-13.428999900817871 C53.40700149536133,-13.428999900817871 96.61799621582031,-84.14600372314453 96.61799621582031,-84.14600372314453 C96.61799621582031,-84.14600372314453 64.36000061035156,-120.62300109863281 64.36000061035156,-120.62300109863281 C64.36000061035156,-120.62300109863281 48.50199890136719,-94.59200286865234 48.50199890136719,-94.59200286865234 C48.50199890136719,-94.59200286865234 68.84300231933594,-71.58999633789062 68.84300231933594,-71.58999633789062z M0.38499999046325684,-105.03800201416016 C0.38499999046325684,-105.03800201416016 28.15999984741211,-117.59300231933594 28.15999984741211,-117.59300231933594 C28.15999984741211,-117.59300231933594 40.07699966430664,-104.11799621582031 40.07699966430664,-104.11799621582031 C40.07699966430664,-104.11799621582031 55.935001373291016,-130.1490020751953 55.935001373291016,-130.1490020751953 C55.935001373291016,-130.1490020751953 44.018001556396484,-143.62399291992188 44.018001556396484,-143.62399291992188 C44.018001556396484,-143.62399291992188 16.243000030517578,-131.06900024414062 16.243000030517578,-131.06900024414062 C16.243000030517578,-131.06900024414062 0.38499999046325684,-105.03800201416016 0.38499999046325684,-105.03800201416016z M-13.319000244140625,30.259000778198242 C-13.319000244140625,30.259000778198242 -1.4010000228881836,43.73500061035156 -1.4010000228881836,43.73500061035156 C-1.4010000228881836,43.73500061035156 26.374000549316406,31.179000854492188 26.374000549316406,31.179000854492188 C26.374000549316406,31.179000854492188 42.231998443603516,5.1479997634887695 42.231998443603516,5.1479997634887695 C42.231998443603516,5.1479997634887695 30.31399917602539,-8.32699966430664 30.31399917602539,-8.32699966430664 C30.31399917602539,-8.32699966430664 14.456000328063965,17.70400047302246 14.456000328063965,17.70400047302246 C14.456000328063965,17.70400047302246 -13.319000244140625,30.259000778198242 -13.319000244140625,30.259000778198242z M-69.54000091552734,42.30099868774414 C-69.54000091552734,42.30099868774414 -41.76499938964844,29.7450008392334 -41.76499938964844,29.7450008392334 C-41.76499938964844,29.7450008392334 -53.68299865722656,16.268999099731445 -53.68299865722656,16.268999099731445 C-53.68299865722656,16.268999099731445 -81.45800018310547,28.825000762939453 -81.45800018310547,28.825000762939453 C-81.45800018310547,28.825000762939453 -69.54000091552734,42.30099868774414 -69.54000091552734,42.30099868774414z M-74.44499969482422,-38.86199951171875 C-74.44499969482422,-38.86199951171875 -46.66999816894531,-51.41699981689453 -46.66999816894531,-51.41699981689453 C-46.66999816894531,-51.41699981689453 -30.812000274658203,-77.447998046875 -30.812000274658203,-77.447998046875 C-30.812000274658203,-77.447998046875 -58.58700180053711,-64.89299774169922 -58.58700180053711,-64.89299774169922 C-58.58700180053711,-64.89299774169922 -74.44499969482422,-38.86199951171875 -74.44499969482422,-38.86199951171875z M-121.5009994506836,14.758999824523926 C-121.5009994506836,14.758999824523926 -105.64299774169922,-11.272000312805176 -105.64299774169922,-11.272000312805176 C-105.64299774169922,-11.272000312805176 -133.41799926757812,1.2829999923706055 -133.41799926757812,1.2829999923706055 C-133.41799926757812,1.2829999923706055 -149.2760009765625,27.31399917602539 -149.2760009765625,27.31399917602539 C-149.2760009765625,27.31399917602539 -137.35899353027344,40.790000915527344 -137.35899353027344,40.790000915527344 C-137.35899353027344,40.790000915527344 -109.58399963378906,28.233999252319336 -109.58399963378906,28.233999252319336 C-109.58399963378906,28.233999252319336 -121.5009994506836,14.758999824523926 -121.5009994506836,14.758999824523926z M-101.16000366210938,37.7599983215332 C-101.16000366210938,37.7599983215332 -128.93499755859375,50.316001892089844 -128.93499755859375,50.316001892089844 C-128.93499755859375,50.316001892089844 -96.6760025024414,86.79299926757812 -96.6760025024414,86.79299926757812 C-96.6760025024414,86.79299926757812 -21.20599937438965,52.55400085449219 -21.20599937438965,52.55400085449219 C-21.20599937438965,52.55400085449219 -33.12300109863281,39.077999114990234 -33.12300109863281,39.077999114990234 C-33.12300109863281,39.077999114990234 -80.81800079345703,60.762001037597656 -80.81800079345703,60.762001037597656 C-80.81800079345703,60.762001037597656 -101.16000366210938,37.7599983215332 -101.16000366210938,37.7599983215332z"></path></g></g><g transform="matrix(1,0,0,1,1617,429)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(232,65,66)" fill-opacity="1" d=" M-32.119998931884766,-120.12799835205078 C34.224998474121094,-137.8679962158203 102.38800048828125,-98.46499633789062 120.12799835205078,-32.119998931884766 C137.8679962158203,34.224998474121094 98.46499633789062,102.38800048828125 32.119998931884766,120.12799835205078 C-34.224998474121094,137.8679962158203 -102.38800048828125,98.46499633789062 -120.12799835205078,32.119998931884766 C-137.8679962158203,-34.224998474121094 -98.46499633789062,-102.38800048828125 -32.119998931884766,-120.12799835205078z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M55.303001403808594,-12.003999710083008 C49.654998779296875,-17.780000686645508 43.52799987792969,-16.142000198364258 41.516998291015625,-8.317999839782715 C41.516998291015625,-8.317999839782715 28.756000518798828,40.84700012207031 28.756000518798828,40.84700012207031 C26.71500015258789,48.560001373291016 31.378999710083008,53.2859992980957 38.928001403808594,51.266998291015625 C38.928001403808594,51.266998291015625 86.84700012207031,38.45500183105469 86.84700012207031,38.45500183105469 C94.50599670410156,36.40700149536133 96.18800354003906,29.983999252319336 90.56999969482422,24.319000244140625 C90.56999969482422,24.319000244140625 55.303001403808594,-12.003999710083008 55.303001403808594,-12.003999710083008z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M12.39799976348877,-54.35599899291992 C12.39799976348877,-54.35599899291992 -6.769000053405762,-73.49600219726562 -6.769000053405762,-73.49600219726562 C-6.769000053405762,-73.49600219726562 -14.949999809265137,-81.70800018310547 -14.949999809265137,-81.70800018310547 C-20.760000228881836,-87.44599914550781 -27.143999099731445,-85.73899841308594 -29.315000534057617,-77.86699676513672 C-29.315000534057617,-77.86699676513672 -68.78399658203125,66.91999816894531 -68.78399658203125,66.91999816894531 C-70.95500183105469,74.79199981689453 -66.18599700927734,79.3740005493164 -58.20600128173828,77.23999786376953 C-58.20600128173828,77.23999786376953 -37.91299819946289,71.81400299072266 -37.91299819946289,71.81400299072266 C-37.91299819946289,71.81400299072266 -24.003999710083008,68.09500122070312 -24.003999710083008,68.09500122070312 C-24.003999710083008,68.09500122070312 -21.610000610351562,67.45500183105469 -21.610000610351562,67.45500183105469 C-14.996999740600586,65.68599700927734 -8.01200008392334,58.917999267578125 -6.2270002365112305,52.345001220703125 C-6.2270002365112305,52.345001220703125 17.856000900268555,-33.941001892089844 17.856000900268555,-33.941001892089844 C19.586999893188477,-40.26100158691406 17.111000061035156,-49.52000045776367 12.39799976348877,-54.35599899291992z"></path></g></g></g><g transform="matrix(0.38878515362739563,0.1041746661067009,-0.1041746661067009,0.38878515362739563,513,757)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(232,65,66)" fill-opacity="1" d=" M-32.119998931884766,-120.12799835205078 C34.224998474121094,-137.8679962158203 102.38800048828125,-98.46499633789062 120.12799835205078,-32.119998931884766 C137.8679962158203,34.224998474121094 98.46499633789062,102.38800048828125 32.119998931884766,120.12799835205078 C-34.224998474121094,137.8679962158203 -102.38800048828125,98.46499633789062 -120.12799835205078,32.119998931884766 C-137.8679962158203,-34.224998474121094 -98.46499633789062,-102.38800048828125 -32.119998931884766,-120.12799835205078z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M55.303001403808594,-12.003999710083008 C49.654998779296875,-17.780000686645508 43.52799987792969,-16.142000198364258 41.516998291015625,-8.317999839782715 C41.516998291015625,-8.317999839782715 28.756000518798828,40.84700012207031 28.756000518798828,40.84700012207031 C26.71500015258789,48.560001373291016 31.378999710083008,53.2859992980957 38.928001403808594,51.266998291015625 C38.928001403808594,51.266998291015625 86.84700012207031,38.45500183105469 86.84700012207031,38.45500183105469 C94.50599670410156,36.40700149536133 96.18800354003906,29.983999252319336 90.56999969482422,24.319000244140625 C90.56999969482422,24.319000244140625 55.303001403808594,-12.003999710083008 55.303001403808594,-12.003999710083008z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M12.39799976348877,-54.35599899291992 C12.39799976348877,-54.35599899291992 -6.769000053405762,-73.49600219726562 -6.769000053405762,-73.49600219726562 C-6.769000053405762,-73.49600219726562 -14.949999809265137,-81.70800018310547 -14.949999809265137,-81.70800018310547 C-20.760000228881836,-87.44599914550781 -27.143999099731445,-85.73899841308594 -29.315000534057617,-77.86699676513672 C-29.315000534057617,-77.86699676513672 -68.78399658203125,66.91999816894531 -68.78399658203125,66.91999816894531 C-70.95500183105469,74.79199981689453 -66.18599700927734,79.3740005493164 -58.20600128173828,77.23999786376953 C-58.20600128173828,77.23999786376953 -37.91299819946289,71.81400299072266 -37.91299819946289,71.81400299072266 C-37.91299819946289,71.81400299072266 -24.003999710083008,68.09500122070312 -24.003999710083008,68.09500122070312 C-24.003999710083008,68.09500122070312 -21.610000610351562,67.45500183105469 -21.610000610351562,67.45500183105469 C-14.996999740600586,65.68599700927734 -8.01200008392334,58.917999267578125 -6.2270002365112305,52.345001220703125 C-6.2270002365112305,52.345001220703125 17.856000900268555,-33.941001892089844 17.856000900268555,-33.941001892089844 C19.586999893188477,-40.26100158691406 17.111000061035156,-49.52000045776367 12.39799976348877,-54.35599899291992z"></path></g></g></g><g transform="matrix(0.12146638333797455,-0.45331862568855286,0.45331862568855286,0.12146638333797455,827.79931640625,1670.376708984375)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(25,105,255)" fill-opacity="1" d=" M142.03599548339844,-85.52300262451172 C94.802001953125,-163.96800231933594 -7.079999923706055,-189.2689971923828 -85.52400207519531,-142.03599548339844 C-163.968994140625,-94.8030014038086 -189.27000427246094,7.078999996185303 -142.03700256347656,85.52300262451172 C-94.80400085449219,163.96800231933594 7.078000068664551,189.27000427246094 85.52300262451172,142.03599548339844 C163.9669952392578,94.8030014038086 189.2689971923828,-7.078999996185303 142.03599548339844,-85.52300262451172z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-91.68299865722656,66.93900299072266 C-97.08699798583984,63.67300033569336 -101.47100067138672,56.391998291015625 -101.8290023803711,50.08700180053711 C-101.8290023803711,50.08700180053711 -105.48799896240234,-14.241999626159668 -105.48799896240234,-14.241999626159668 C-105.7040023803711,-18.038999557495117 -104.39299774169922,-20.985000610351562 -102.22699737548828,-22.676000595092773 C-102.22699737548828,-22.676000595092773 -102.25499725341797,-22.722999572753906 -102.25499725341797,-22.722999572753906 C-102.25499725341797,-22.722999572753906 27.139999389648438,-100.63500213623047 27.139999389648438,-100.63500213623047 C29.72800064086914,-102.10600280761719 33.222999572753906,-102.03299713134766 36.762001037597656,-99.89399719238281 C36.762001037597656,-99.89399719238281 91.90599822998047,-66.56500244140625 91.90599822998047,-66.56500244140625 C97.30999755859375,-63.29899978637695 101.69400024414062,-56.016998291015625 102.0530014038086,-49.7130012512207 C102.0530014038086,-49.7130012512207 105.71099853515625,14.616999626159668 105.71099853515625,14.616999626159668 C105.94499969482422,18.72800064086914 104.2969970703125,21.76099967956543 101.8030014038086,23.36400032043457 C101.5469970703125,23.527999877929688 101.33300018310547,23.658000946044922 101.1510009765625,23.756999969482422 C101.1510009765625,23.756999969482422 -26.72100067138672,100.7509994506836 -26.72100067138672,100.7509994506836 C-26.89699935913086,100.86699676513672 -27.076000213623047,100.9749984741211 -27.257999420166016,101.07499694824219 C-27.257999420166016,101.07499694824219 -27.591999053955078,101.2760009765625 -27.591999053955078,101.2760009765625 C-27.591999053955078,101.2760009765625 -27.606000900268555,101.25399780273438 -27.606000900268555,101.25399780273438 C-30.099000930786133,102.45999908447266 -33.21500015258789,102.2770004272461 -36.53799819946289,100.26899719238281 C-36.53799819946289,100.26899719238281 -91.68299865722656,66.93900299072266 -91.68299865722656,66.93900299072266z M-25.63800048828125,-58.27199935913086 C-25.63800048828125,-58.27199935913086 26.2450008392334,-27.009000778198242 26.2450008392334,-27.009000778198242 C31.649999618530273,-23.75200080871582 36.02799987792969,-16.48200035095215 36.37699890136719,-10.182000160217285 C36.37699890136719,-10.182000160217285 39.72800064086914,50.165000915527344 39.72800064086914,50.165000915527344 C39.72800064086914,50.165000915527344 96.7300033569336,15.843000411987305 96.7300033569336,15.843000411987305 C96.7300033569336,15.843000411987305 93.2509994506836,-44.42599868774414 93.2509994506836,-44.42599868774414 C93.06900024414062,-48.00199890136719 92.78600311279297,-51.66400146484375 91.197998046875,-54.43899917602539 C91.197998046875,-54.43899917602539 91.1050033569336,-54.5989990234375 91.1050033569336,-54.5989990234375 C89.46900177001953,-57.33700180053711 86.48100280761719,-59.15399932861328 83.54499816894531,-61.053001403808594 C83.54499816894531,-61.053001403808594 31.209999084472656,-92.5009994506836 31.209999084472656,-92.5009994506836 C31.209999084472656,-92.5009994506836 -25.63800048828125,-58.27199935913086 -25.63800048828125,-58.27199935913086z M103.60800170898438,32.70899963378906 C108.56800079345703,29.722000122070312 111.48400115966797,27.187000274658203 113.0979995727539,24.670000076293945 C114.43599700927734,22.58300018310547 115.04100036621094,20.29599952697754 115.26000213623047,16.65399932861328 C115.26000213623047,16.65399932861328 115.27200317382812,16.44700050354004 115.27200317382812,16.44700050354004 C115.31600189208984,15.649999618530273 115.34400177001953,14.784000396728516 115.36100006103516,13.741000175476074 C115.36100006103516,13.741000175476074 115.375,12.513999938964844 115.375,12.513999938964844 C115.375,12.513999938964844 115.39399719238281,8.762999534606934 115.39399719238281,8.762999534606934 C115.39399719238281,8.762999534606934 124.33200073242188,8.746000289916992 124.33200073242188,8.746000289916992 C124.33200073242188,8.746000289916992 124.30999755859375,12.946000099182129 124.30999755859375,12.946000099182129 C124.30999755859375,12.946000099182129 124.3010025024414,13.654999732971191 124.3010025024414,13.654999732971191 C124.28299713134766,14.876999855041504 124.2509994506836,15.89900016784668 124.1969985961914,16.867000579833984 C123.6240005493164,27.216999053955078 119.8280029296875,33.233001708984375 108.53299713134766,40.108001708984375 C108.53299713134766,40.108001708984375 108.18900299072266,40.316001892089844 108.18900299072266,40.316001892089844 C108.18900299072266,40.316001892089844 103.60800170898438,32.70899963378906 103.60800170898438,32.70899963378906z M-25.12700080871582,20.42099952697754 C-24.790000915527344,20.70199966430664 -24.447999954223633,20.950000762939453 -24.104999542236328,21.156999588012695 C-24.104999542236328,21.156999588012695 31.07699966430664,54.36199951171875 31.07699966430664,54.36199951171875 C31.135000228881836,54.39699935913086 31.19099998474121,54.42900085449219 31.246000289916992,54.459999084472656 C31.246000289916992,54.459999084472656 31.295000076293945,54.48699951171875 31.295000076293945,54.48699951171875 C31.295000076293945,54.48699951171875 31.292999267578125,54.38399887084961 31.292999267578125,54.38399887084961 C31.292999267578125,54.38399887084961 31.285999298095703,54.236000061035156 31.285999298095703,54.236000061035156 C31.285999298095703,54.236000061035156 27.7549991607666,-10.069000244140625 27.7549991607666,-10.069000244140625 C27.732999801635742,-10.468999862670898 27.673999786376953,-10.887999534606934 27.582000732421875,-11.317000389099121 C27.582000732421875,-11.317000389099121 -25.12700080871582,20.42099952697754 -25.12700080871582,20.42099952697754z M-29.804000854492188,12.652999877929688 C-29.804000854492188,12.652999877929688 22.905000686645508,-19.083999633789062 22.905000686645508,-19.083999633789062 C22.569000244140625,-19.365999221801758 22.226999282836914,-19.61400032043457 21.882999420166016,-19.820999145507812 C21.882999420166016,-19.820999145507812 -33.29899978637695,-53.025001525878906 -33.29899978637695,-53.025001525878906 C-33.35599899291992,-53.060001373291016 -33.41299819946289,-53.09299850463867 -33.46699905395508,-53.12300109863281 C-33.46699905395508,-53.12300109863281 -33.51599884033203,-53.150001525878906 -33.51599884033203,-53.150001525878906 C-33.51599884033203,-53.150001525878906 -33.513999938964844,-53.047000885009766 -33.513999938964844,-53.047000885009766 C-33.513999938964844,-53.047000885009766 -33.50699996948242,-52.900001525878906 -33.50699996948242,-52.900001525878906 C-33.50699996948242,-52.900001525878906 -29.97599983215332,11.404999732971191 -29.97599983215332,11.404999732971191 C-29.95400047302246,11.805999755859375 -29.895000457763672,12.223999977111816 -29.804000854492188,12.652999877929688z M-88.33399963378906,-20.520999908447266 C-88.33399963378906,-20.520999908447266 -38.91600036621094,9.446000099182129 -38.91600036621094,9.446000099182129 C-38.91600036621094,9.446000099182129 -42.28300094604492,-48.25 -42.28300094604492,-48.25 C-42.28300094604492,-48.25 -88.33399963378906,-20.520999908447266 -88.33399963378906,-20.520999908447266z M-23.02199935913086,87.947998046875 C-23.02199935913086,87.947998046875 23.02899932861328,60.220001220703125 23.02899932861328,60.220001220703125 C23.02899932861328,60.220001220703125 -26.38800048828125,30.25200080871582 -26.38800048828125,30.25200080871582 C-26.38800048828125,30.25200080871582 -23.02199935913086,87.947998046875 -23.02199935913086,87.947998046875z M-92.89700317382812,49.3489990234375 C-92.71099853515625,52.69499969482422 -89.94599914550781,57.2859992980957 -87.0770034790039,59.01599884033203 C-87.0770034790039,59.01599884033203 -31.895999908447266,92.27899932861328 -31.895999908447266,92.27899932861328 C-31.83799934387207,92.31400299072266 -31.781999588012695,92.34700012207031 -31.726999282836914,92.37699890136719 C-31.726999282836914,92.37699890136719 -31.67799949645996,92.40399932861328 -31.67799949645996,92.40399932861328 C-31.67799949645996,92.40399932861328 -31.680999755859375,92.3010025024414 -31.680999755859375,92.3010025024414 C-31.680999755859375,92.3010025024414 -31.687000274658203,92.15399932861328 -31.687000274658203,92.15399932861328 C-31.687000274658203,92.15399932861328 -35.270999908447266,27.82200050354004 -35.270999908447266,27.82200050354004 C-35.457000732421875,24.476999282836914 -38.22100067138672,19.88599967956543 -41.090999603271484,18.1560001373291 C-41.090999603271484,18.1560001373291 -96.27200317382812,-15.107000350952148 -96.27200317382812,-15.107000350952148 C-96.33000183105469,-15.142000198364258 -96.38600158691406,-15.175000190734863 -96.44000244140625,-15.206000328063965 C-96.44000244140625,-15.206000328063965 -96.48899841308594,-15.232999801635742 -96.48899841308594,-15.232999801635742 C-96.48899841308594,-15.232999801635742 -96.48699951171875,-15.130000114440918 -96.48699951171875,-15.130000114440918 C-96.48699951171875,-15.130000114440918 -96.4800033569336,-14.982000350952148 -96.4800033569336,-14.982000350952148 C-96.4800033569336,-14.982000350952148 -92.89700317382812,49.3489990234375 -92.89700317382812,49.3489990234375z M-124.33399963378906,-8.744999885559082 C-124.33399963378906,-8.744999885559082 -124.31199645996094,-12.946000099182129 -124.31199645996094,-12.946000099182129 C-124.31199645996094,-12.946000099182129 -124.3030014038086,-13.654999732971191 -124.3030014038086,-13.654999732971191 C-124.28500366210938,-14.87600040435791 -124.25299835205078,-15.89900016784668 -124.1989974975586,-16.867000579833984 C-123.6259994506836,-27.216999053955078 -119.83000183105469,-33.233001708984375 -108.53500366210938,-40.108001708984375 C-108.53500366210938,-40.108001708984375 -108.19100189208984,-40.316001892089844 -108.19100189208984,-40.316001892089844 C-108.19100189208984,-40.316001892089844 -103.61000061035156,-32.70899963378906 -103.61000061035156,-32.70899963378906 C-108.57099914550781,-29.722000122070312 -111.48600006103516,-27.187000274658203 -113.0999984741211,-24.670000076293945 C-114.43800354003906,-22.58300018310547 -115.04299926757812,-20.29599952697754 -115.26200103759766,-16.65399932861328 C-115.26200103759766,-16.65399932861328 -115.27400207519531,-16.44700050354004 -115.27400207519531,-16.44700050354004 C-115.31800079345703,-15.649999618530273 -115.34600067138672,-14.784000396728516 -115.36299896240234,-13.741000175476074 C-115.36299896240234,-13.741000175476074 -115.37699890136719,-12.513999938964844 -115.37699890136719,-12.513999938964844 C-115.37699890136719,-12.513999938964844 -115.39600372314453,-8.76200008392334 -115.39600372314453,-8.76200008392334 C-115.39600372314453,-8.76200008392334 -124.33399963378906,-8.744999885559082 -124.33399963378906,-8.744999885559082z"></path></g></g><g transform="matrix(0.2588191032409668,-0.9659258127212524,0.9659258127212524,0.2588191032409668,1007.0328369140625,1520.965087890625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(235,0,41)" fill-opacity="1" d=" M0.0010000000474974513,124.34700012207031 C68.6760025024414,124.34700012207031 124.3479995727539,68.67500305175781 124.3479995727539,0 C124.3479995727539,-68.6760025024414 68.6760025024414,-124.34700012207031 0.0010000000474974513,-124.34700012207031 C-68.67500305175781,-124.34700012207031 -124.3479995727539,-68.6760025024414 -124.3479995727539,0 C-124.3479995727539,68.67500305175781 -68.67500305175781,124.34700012207031 0.0010000000474974513,124.34700012207031z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M53.81100082397461,-51.14500045776367 C53.81100082397461,-51.14500045776367 -74.60800170898438,-74.60900115966797 -74.60800170898438,-74.60900115966797 C-74.60800170898438,-74.60900115966797 -7.01200008392334,94.50399780273438 -7.01200008392334,94.50399780273438 C-7.01200008392334,94.50399780273438 87.04399871826172,-19.569000244140625 87.04399871826172,-19.569000244140625 C87.04399871826172,-19.569000244140625 53.81100082397461,-51.14500045776367 53.81100082397461,-51.14500045776367z M51.80400085449219,-40.7859992980957 C51.80400085449219,-40.7859992980957 71.49400329589844,-22.190000534057617 71.49400329589844,-22.190000534057617 C71.49400329589844,-22.190000534057617 17.819000244140625,-12.454999923706055 17.819000244140625,-12.454999923706055 C17.819000244140625,-12.454999923706055 51.80400085449219,-40.7859992980957 51.80400085449219,-40.7859992980957z M6.03000020980835,-14.45199966430664 C6.03000020980835,-14.45199966430664 -50.529998779296875,-61.130001068115234 -50.529998779296875,-61.130001068115234 C-50.529998779296875,-61.130001068115234 42.02199935913086,-44.15599822998047 42.02199935913086,-44.15599822998047 C42.02199935913086,-44.15599822998047 6.03000020980835,-14.45199966430664 6.03000020980835,-14.45199966430664z M2.0169999599456787,-6.215000152587891 C2.0169999599456787,-6.215000152587891 -7.138000011444092,69.66699981689453 -7.138000011444092,69.66699981689453 C-7.138000011444092,69.66699981689453 -57.05099868774414,-54.888999938964844 -57.05099868774414,-54.888999938964844 C-57.05099868774414,-54.888999938964844 2.0169999599456787,-6.215000152587891 2.0169999599456787,-6.215000152587891z M10.545000076293945,-2.0969998836517334 C10.545000076293945,-2.0969998836517334 69.98899841308594,-12.829999923706055 69.98899841308594,-12.829999923706055 C69.98899841308594,-12.829999923706055 1.7660000324249268,69.91699981689453 1.7660000324249268,69.91699981689453 C1.7660000324249268,69.91699981689453 10.545000076293945,-2.0969998836517334 10.545000076293945,-2.0969998836517334z"></path></g></g><g transform="matrix(0.4669886529445648,0.884263277053833,-0.884263277053833,0.4669886529445648,437.4173583984375,1571.40380859375)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(22,187,191)" fill-opacity="1" d=" M224.45399475097656,51.77199935913086 C224.45399475097656,51.77199935913086 -201.08900451660156,-112.35299682617188 -201.08900451660156,-112.35299682617188 C-201.08900451660156,-112.35299682617188 -219.6929931640625,-64.11799621582031 -219.6929931640625,-64.11799621582031 C-237.32200622558594,-2.009999990463257 -161.8000030517578,81.33200073242188 -47.308998107910156,124.86100006103516 C65.7699966430664,167.85400390625 176.30799865722656,156.22300720214844 205.85000610351562,100.01000213623047 C205.85000610351562,100.01000213623047 224.45399475097656,51.77199935913086 224.45399475097656,51.77199935913086z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(42,201,214)" fill-opacity="1" d=" M55.08000183105469,-142.8000030517578 C172.58999633789062,-97.47799682617188 248.42100524902344,-10.359000205993652 224.4530029296875,51.7859992980957 C200.48500061035156,113.93099975585938 85.79299926757812,127.56800079345703 -31.716999053955078,82.24600219726562 C-149.2270050048828,36.92399978637695 -225.05799865722656,-50.19499969482422 -201.08999633789062,-112.33999633789062 C-177.1219940185547,-174.48500061035156 -62.43000030517578,-188.1219940185547 55.08000183105469,-142.8000030517578z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(22,187,191)" fill-opacity="1" d=" M47.125999450683594,-122.18800354003906 C143.25799560546875,-85.11199951171875 205.31700134277344,-13.906000137329102 185.74000549316406,36.85300064086914 C166.16299438476562,87.61199951171875 72.36299896240234,98.7040023803711 -23.768999099731445,61.62799835205078 C-119.9010009765625,24.552000045776367 -181.9600067138672,-46.65399932861328 -162.38299560546875,-97.41300201416016 C-142.80599975585938,-148.1719970703125 -49.00600051879883,-159.26400756835938 47.125999450683594,-122.18800354003906z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(99,48,1)" fill-opacity="1" d=" M-10.845999717712402,27.860000610351562 C-45.361000061035156,14.531999588012695 -71.48100280761719,-0.5669999718666077 -87.87999725341797,-15.916000366210938 C-104.47599792480469,-31.450000762939453 -110.55500030517578,-46.755001068115234 -105.63099670410156,-59.52199935913086 C-100.88700103759766,-71.822998046875 -87.05799865722656,-76.67900085449219 -72.96900177001953,-78.13300323486328 C-61.928001403808594,-79.27200317382812 -50.58300018310547,-78.35299682617188 -42.82400131225586,-77.3489990234375 C-43.42499923706055,-80.56600189208984 -44.11399841308594,-84.73999786376953 -44.54899978637695,-88.94400024414062 C-45.130001068115234,-94.56999969482422 -45.35200119018555,-100.99299621582031 -43.792999267578125,-105.03600311279297 C-41.948001861572266,-109.81999969482422 -38.11899948120117,-113.86399841308594 -31.35099983215332,-115.54299926757812 C-24.201000213623047,-117.31700134277344 -14.913000106811523,-116.16300201416016 -4.71999979019165,-112.23100280761719 C3.246999979019165,-109.15899658203125 9.409000396728516,-104.98999786376953 13.666000366210938,-100.25599670410156 C17.735000610351562,-95.73100280761719 19.785999298095703,-91.01499938964844 20.738000869750977,-86.55500030517578 C22.410999298095703,-78.72000122070312 20.9689998626709,-70.24299621582031 18.388999938964844,-62.222999572753906 C18.388999938964844,-62.222999572753906 28.152999877929688,-58.45800018310547 28.152999877929688,-58.45800018310547 C31.62700080871582,-66.13300323486328 36.25,-73.38300323486328 42.75199890136719,-78.06500244140625 C46.45199966430664,-80.7300033569336 51.137001037597656,-82.8479995727539 57.19200134277344,-83.46800231933594 C63.525001525878906,-84.11799621582031 70.88999938964844,-83.06999969482422 78.85600280761719,-79.99700164794922 C89.0510025024414,-76.06600189208984 96.70800018310547,-70.68399810791016 100.81600189208984,-64.56800079345703 C104.7030029296875,-58.779998779296875 104.82499694824219,-53.21200180053711 102.9800033569336,-48.426998138427734 C101.4209976196289,-44.3849983215332 96.94200134277344,-39.775001525878906 92.73400115966797,-35.99700164794922 C89.58799743652344,-33.17300033569336 86.2760009765625,-30.542999267578125 83.66999816894531,-28.562999725341797 C90.09400177001953,-24.097000122070312 99.11799621582031,-17.159000396728516 106.53399658203125,-8.901000022888184 C115.99800109863281,1.6369999647140503 122.98400115966797,14.520000457763672 118.23999786376953,26.820999145507812 C113.31600189208984,39.5880012512207 98.53500366210938,46.847999572753906 75.80599975585938,47.21500015258789 C53.34700012207031,47.577999114990234 23.851999282836914,41.22700119018555 -10.67300033569336,27.926000595092773 C-10.67300033569336,27.926000595092773 -10.845999717712402,27.860000610351562 -10.845999717712402,27.860000610351562z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(209,136,79)" fill-opacity="1" d=" M-6.459000110626221,-107.6760025024414 C-21.388999938964844,-113.43399810791016 -30.55299949645996,-110.14299774169922 -33.72200012207031,-101.927001953125 C-36.24100112915039,-95.39600372314453 -33.29999923706055,-79.23600006103516 -31.988000869750977,-72.88099670410156 C-31.69300079345703,-71.45099639892578 -33.334999084472656,-70.64299774169922 -35.61800003051758,-71.01300048828125 C-48.55400085449219,-73.11199951171875 -87.4209976196289,-77.51599884033203 -95.55999755859375,-56.41299819946289 C-104.13400268554688,-34.18299865722656 -74.71299743652344,-3.5810000896453857 -8.54800033569336,21.9689998626709 C-8.520999908447266,21.979000091552734 -8.494999885559082,21.98900032043457 -8.468000411987305,21.999000549316406 C-8.442000389099121,22.009000778198242 -8.416000366210938,22.020000457763672 -8.390000343322754,22.030000686645508 C57.79600143432617,47.5260009765625 100.14600372314453,44.60499954223633 108.72000122070312,22.375 C116.86000061035156,1.2710000276565552 85.10199737548828,-21.562999725341797 74.10600280761719,-28.694000244140625 C72.16600036621094,-29.952999114990234 71.49199676513672,-31.65399932861328 72.66999816894531,-32.51499938964844 C77.91100311279297,-36.34299850463867 90.94100189208984,-46.34299850463867 93.45999908447266,-52.874000549316406 C96.62899780273438,-61.090999603271484 92.0479965209961,-69.68299865722656 77.11799621582031,-75.44100189208984 C55.62699890136719,-83.7300033569336 44.00600051879883,-69.55799865722656 36.902000427246094,-52.277000427246094 C36.42900085449219,-51.124000549316406 34.29999923706055,-50.86000061035156 32.119998931884766,-51.70100021362305 C32.119998931884766,-51.70100021362305 10.944000244140625,-59.86800003051758 10.944000244140625,-59.86800003051758 C8.762999534606934,-60.70899963378906 7.363999843597412,-62.33300018310547 7.7870001792907715,-63.50699996948242 C14.12600040435791,-81.08200073242188 15.031999588012695,-99.38700103759766 -6.459000110626221,-107.6760025024414z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(254,220,144)" fill-opacity="1" d=" M-5.64300012588501,14.909000396728516 C-54.26599884033203,-3.8440001010894775 -102.42400360107422,-38.367000579833984 -95.57599639892578,-56.37099838256836 C-95.58699798583984,-56.34299850463867 -95.5979995727539,-56.314998626708984 -95.60900115966797,-56.2869987487793 C-104.19000244140625,-34.03900146484375 -74.71499633789062,-3.4059998989105225 -8.437999725341797,22.1560001373291 C57.8390007019043,47.71799850463867 100.2490005493164,44.810001373291016 108.83000183105469,22.562000274658203 C108.84100341796875,22.534000396728516 108.85199737548828,22.506000518798828 108.86199951171875,22.47800064086914 C101.84700012207031,40.41699981689453 42.979000091552734,33.6619987487793 -5.64300012588501,14.909000396728516z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(99,48,1)" fill-opacity="1" d=" M-18.249000549316406,-32.88399887084961 C-20.589000701904297,-26.81599998474121 -27.183000564575195,-25.729999542236328 -33.814998626708984,-28.28700065612793 C-40.44599914550781,-30.844999313354492 -44.60300064086914,-36.077999114990234 -42.26300048828125,-42.145999908447266 C-39.92300033569336,-48.2140007019043 -33.327999114990234,-49.30099868774414 -26.69700050354004,-46.74300003051758 C-20.065000534057617,-44.185001373291016 -15.907999992370605,-38.95199966430664 -18.249000549316406,-32.88399887084961z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(99,48,1)" fill-opacity="1" d=" M59.78900146484375,-2.7860000133514404 C57.44900131225586,3.2820000648498535 50.854000091552734,4.368000030517578 44.222999572753906,1.8109999895095825 C37.590999603271484,-0.746999979019165 33.433998107910156,-5.980000019073486 35.775001525878906,-12.04800033569336 C38.1150016784668,-18.115999221801758 44.70899963378906,-19.202999114990234 51.340999603271484,-16.645000457763672 C57.97200012207031,-14.086999893188477 62.12900161743164,-8.854000091552734 59.78900146484375,-2.7860000133514404z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(209,136,79)" fill-opacity="1" d=" M-6.459000110626221,-107.6760025024414 C-21.388999938964844,-113.43399810791016 -30.55299949645996,-110.14299774169922 -33.72200012207031,-101.927001953125 C-36.24100112915039,-95.39600372314453 -33.29999923706055,-79.23600006103516 -31.988000869750977,-72.88099670410156 C-31.69300079345703,-71.45099639892578 -33.334999084472656,-70.64299774169922 -35.61800003051758,-71.01300048828125 C-48.55400085449219,-73.11199951171875 -87.4209976196289,-77.51599884033203 -95.55999755859375,-56.41299819946289 C-104.13400268554688,-34.18299865722656 -74.71299743652344,-3.5810000896453857 -8.54800033569336,21.9689998626709 C-8.520999908447266,21.979000091552734 -8.494999885559082,21.98900032043457 -8.468000411987305,21.999000549316406 C-8.442000389099121,22.009000778198242 -8.416000366210938,22.020000457763672 -8.390000343322754,22.030000686645508 C57.79600143432617,47.5260009765625 100.14600372314453,44.60499954223633 108.72000122070312,22.375 C116.86000061035156,1.2710000276565552 85.10199737548828,-21.562999725341797 74.10600280761719,-28.694000244140625 C72.16600036621094,-29.952999114990234 71.49199676513672,-31.65399932861328 72.66999816894531,-32.51499938964844 C77.91100311279297,-36.34299850463867 90.94100189208984,-46.34299850463867 93.45999908447266,-52.874000549316406 C96.62899780273438,-61.090999603271484 92.0479965209961,-69.68299865722656 77.11799621582031,-75.44100189208984 C55.62699890136719,-83.7300033569336 44.00600051879883,-69.55799865722656 36.902000427246094,-52.277000427246094 C36.42900085449219,-51.124000549316406 34.29999923706055,-50.86000061035156 32.119998931884766,-51.70100021362305 C32.119998931884766,-51.70100021362305 10.944000244140625,-59.86800003051758 10.944000244140625,-59.86800003051758 C8.762999534606934,-60.70899963378906 7.363999843597412,-62.33300018310547 7.7870001792907715,-63.50699996948242 C14.12600040435791,-81.08200073242188 15.031999588012695,-99.38700103759766 -6.459000110626221,-107.6760025024414z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(254,220,144)" fill-opacity="1" d=" M-5.64300012588501,14.909000396728516 C-54.26599884033203,-3.8440001010894775 -102.42400360107422,-38.367000579833984 -95.57599639892578,-56.37099838256836 C-95.58699798583984,-56.34299850463867 -95.5979995727539,-56.314998626708984 -95.60900115966797,-56.2869987487793 C-104.19000244140625,-34.03900146484375 -74.71499633789062,-3.4059998989105225 -8.437999725341797,22.1560001373291 C57.8390007019043,47.71799850463867 100.2490005493164,44.810001373291016 108.83000183105469,22.562000274658203 C108.84100341796875,22.534000396728516 108.85199737548828,22.506000518798828 108.86199951171875,22.47800064086914 C101.84700012207031,40.41699981689453 42.979000091552734,33.6619987487793 -5.64300012588501,14.909000396728516z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(99,48,1)" fill-opacity="1" d=" M-18.249000549316406,-32.88399887084961 C-20.589000701904297,-26.81599998474121 -27.183000564575195,-25.729999542236328 -33.814998626708984,-28.28700065612793 C-40.44599914550781,-30.844999313354492 -44.60300064086914,-36.077999114990234 -42.26300048828125,-42.145999908447266 C-39.92300033569336,-48.2140007019043 -33.327999114990234,-49.30099868774414 -26.69700050354004,-46.74300003051758 C-20.065000534057617,-44.185001373291016 -15.907999992370605,-38.95199966430664 -18.249000549316406,-32.88399887084961z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(99,48,1)" fill-opacity="1" d=" M59.78900146484375,-2.7860000133514404 C57.44900131225586,3.2820000648498535 50.854000091552734,4.368000030517578 44.222999572753906,1.8109999895095825 C37.590999603271484,-0.746999979019165 33.433998107910156,-5.980000019073486 35.775001525878906,-12.04800033569336 C38.1150016784668,-18.115999221801758 44.70899963378906,-19.202999114990234 51.340999603271484,-16.645000457763672 C57.97200012207031,-14.086999893188477 62.12900161743164,-8.854000091552734 59.78900146484375,-2.7860000133514404z"></path></g></g><g transform="matrix(-0.29739734530448914,0.797716498374939,-0.797716498374939,-0.29739734530448914,1737.802001953125,1153.9329833984375)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(25,105,255)" fill-opacity="1" d=" M142.03599548339844,-85.52300262451172 C94.802001953125,-163.96800231933594 -7.079999923706055,-189.2689971923828 -85.52400207519531,-142.03599548339844 C-163.968994140625,-94.8030014038086 -189.27000427246094,7.078999996185303 -142.03700256347656,85.52300262451172 C-94.80400085449219,163.96800231933594 7.078000068664551,189.27000427246094 85.52300262451172,142.03599548339844 C163.9669952392578,94.8030014038086 189.2689971923828,-7.078999996185303 142.03599548339844,-85.52300262451172z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-91.68299865722656,66.93900299072266 C-97.08699798583984,63.67300033569336 -101.47100067138672,56.391998291015625 -101.8290023803711,50.08700180053711 C-101.8290023803711,50.08700180053711 -105.48799896240234,-14.241999626159668 -105.48799896240234,-14.241999626159668 C-105.7040023803711,-18.038999557495117 -104.39299774169922,-20.985000610351562 -102.22699737548828,-22.676000595092773 C-102.22699737548828,-22.676000595092773 -102.25499725341797,-22.722999572753906 -102.25499725341797,-22.722999572753906 C-102.25499725341797,-22.722999572753906 27.139999389648438,-100.63500213623047 27.139999389648438,-100.63500213623047 C29.72800064086914,-102.10600280761719 33.222999572753906,-102.03299713134766 36.762001037597656,-99.89399719238281 C36.762001037597656,-99.89399719238281 91.90599822998047,-66.56500244140625 91.90599822998047,-66.56500244140625 C97.30999755859375,-63.29899978637695 101.69400024414062,-56.016998291015625 102.0530014038086,-49.7130012512207 C102.0530014038086,-49.7130012512207 105.71099853515625,14.616999626159668 105.71099853515625,14.616999626159668 C105.94499969482422,18.72800064086914 104.2969970703125,21.76099967956543 101.8030014038086,23.36400032043457 C101.5469970703125,23.527999877929688 101.33300018310547,23.658000946044922 101.1510009765625,23.756999969482422 C101.1510009765625,23.756999969482422 -26.72100067138672,100.7509994506836 -26.72100067138672,100.7509994506836 C-26.89699935913086,100.86699676513672 -27.076000213623047,100.9749984741211 -27.257999420166016,101.07499694824219 C-27.257999420166016,101.07499694824219 -27.591999053955078,101.2760009765625 -27.591999053955078,101.2760009765625 C-27.591999053955078,101.2760009765625 -27.606000900268555,101.25399780273438 -27.606000900268555,101.25399780273438 C-30.099000930786133,102.45999908447266 -33.21500015258789,102.2770004272461 -36.53799819946289,100.26899719238281 C-36.53799819946289,100.26899719238281 -91.68299865722656,66.93900299072266 -91.68299865722656,66.93900299072266z M-25.63800048828125,-58.27199935913086 C-25.63800048828125,-58.27199935913086 26.2450008392334,-27.009000778198242 26.2450008392334,-27.009000778198242 C31.649999618530273,-23.75200080871582 36.02799987792969,-16.48200035095215 36.37699890136719,-10.182000160217285 C36.37699890136719,-10.182000160217285 39.72800064086914,50.165000915527344 39.72800064086914,50.165000915527344 C39.72800064086914,50.165000915527344 96.7300033569336,15.843000411987305 96.7300033569336,15.843000411987305 C96.7300033569336,15.843000411987305 93.2509994506836,-44.42599868774414 93.2509994506836,-44.42599868774414 C93.06900024414062,-48.00199890136719 92.78600311279297,-51.66400146484375 91.197998046875,-54.43899917602539 C91.197998046875,-54.43899917602539 91.1050033569336,-54.5989990234375 91.1050033569336,-54.5989990234375 C89.46900177001953,-57.33700180053711 86.48100280761719,-59.15399932861328 83.54499816894531,-61.053001403808594 C83.54499816894531,-61.053001403808594 31.209999084472656,-92.5009994506836 31.209999084472656,-92.5009994506836 C31.209999084472656,-92.5009994506836 -25.63800048828125,-58.27199935913086 -25.63800048828125,-58.27199935913086z M103.60800170898438,32.70899963378906 C108.56800079345703,29.722000122070312 111.48400115966797,27.187000274658203 113.0979995727539,24.670000076293945 C114.43599700927734,22.58300018310547 115.04100036621094,20.29599952697754 115.26000213623047,16.65399932861328 C115.26000213623047,16.65399932861328 115.27200317382812,16.44700050354004 115.27200317382812,16.44700050354004 C115.31600189208984,15.649999618530273 115.34400177001953,14.784000396728516 115.36100006103516,13.741000175476074 C115.36100006103516,13.741000175476074 115.375,12.513999938964844 115.375,12.513999938964844 C115.375,12.513999938964844 115.39399719238281,8.762999534606934 115.39399719238281,8.762999534606934 C115.39399719238281,8.762999534606934 124.33200073242188,8.746000289916992 124.33200073242188,8.746000289916992 C124.33200073242188,8.746000289916992 124.30999755859375,12.946000099182129 124.30999755859375,12.946000099182129 C124.30999755859375,12.946000099182129 124.3010025024414,13.654999732971191 124.3010025024414,13.654999732971191 C124.28299713134766,14.876999855041504 124.2509994506836,15.89900016784668 124.1969985961914,16.867000579833984 C123.6240005493164,27.216999053955078 119.8280029296875,33.233001708984375 108.53299713134766,40.108001708984375 C108.53299713134766,40.108001708984375 108.18900299072266,40.316001892089844 108.18900299072266,40.316001892089844 C108.18900299072266,40.316001892089844 103.60800170898438,32.70899963378906 103.60800170898438,32.70899963378906z M-25.12700080871582,20.42099952697754 C-24.790000915527344,20.70199966430664 -24.447999954223633,20.950000762939453 -24.104999542236328,21.156999588012695 C-24.104999542236328,21.156999588012695 31.07699966430664,54.36199951171875 31.07699966430664,54.36199951171875 C31.135000228881836,54.39699935913086 31.19099998474121,54.42900085449219 31.246000289916992,54.459999084472656 C31.246000289916992,54.459999084472656 31.295000076293945,54.48699951171875 31.295000076293945,54.48699951171875 C31.295000076293945,54.48699951171875 31.292999267578125,54.38399887084961 31.292999267578125,54.38399887084961 C31.292999267578125,54.38399887084961 31.285999298095703,54.236000061035156 31.285999298095703,54.236000061035156 C31.285999298095703,54.236000061035156 27.7549991607666,-10.069000244140625 27.7549991607666,-10.069000244140625 C27.732999801635742,-10.468999862670898 27.673999786376953,-10.887999534606934 27.582000732421875,-11.317000389099121 C27.582000732421875,-11.317000389099121 -25.12700080871582,20.42099952697754 -25.12700080871582,20.42099952697754z M-29.804000854492188,12.652999877929688 C-29.804000854492188,12.652999877929688 22.905000686645508,-19.083999633789062 22.905000686645508,-19.083999633789062 C22.569000244140625,-19.365999221801758 22.226999282836914,-19.61400032043457 21.882999420166016,-19.820999145507812 C21.882999420166016,-19.820999145507812 -33.29899978637695,-53.025001525878906 -33.29899978637695,-53.025001525878906 C-33.35599899291992,-53.060001373291016 -33.41299819946289,-53.09299850463867 -33.46699905395508,-53.12300109863281 C-33.46699905395508,-53.12300109863281 -33.51599884033203,-53.150001525878906 -33.51599884033203,-53.150001525878906 C-33.51599884033203,-53.150001525878906 -33.513999938964844,-53.047000885009766 -33.513999938964844,-53.047000885009766 C-33.513999938964844,-53.047000885009766 -33.50699996948242,-52.900001525878906 -33.50699996948242,-52.900001525878906 C-33.50699996948242,-52.900001525878906 -29.97599983215332,11.404999732971191 -29.97599983215332,11.404999732971191 C-29.95400047302246,11.805999755859375 -29.895000457763672,12.223999977111816 -29.804000854492188,12.652999877929688z M-88.33399963378906,-20.520999908447266 C-88.33399963378906,-20.520999908447266 -38.91600036621094,9.446000099182129 -38.91600036621094,9.446000099182129 C-38.91600036621094,9.446000099182129 -42.28300094604492,-48.25 -42.28300094604492,-48.25 C-42.28300094604492,-48.25 -88.33399963378906,-20.520999908447266 -88.33399963378906,-20.520999908447266z M-23.02199935913086,87.947998046875 C-23.02199935913086,87.947998046875 23.02899932861328,60.220001220703125 23.02899932861328,60.220001220703125 C23.02899932861328,60.220001220703125 -26.38800048828125,30.25200080871582 -26.38800048828125,30.25200080871582 C-26.38800048828125,30.25200080871582 -23.02199935913086,87.947998046875 -23.02199935913086,87.947998046875z M-92.89700317382812,49.3489990234375 C-92.71099853515625,52.69499969482422 -89.94599914550781,57.2859992980957 -87.0770034790039,59.01599884033203 C-87.0770034790039,59.01599884033203 -31.895999908447266,92.27899932861328 -31.895999908447266,92.27899932861328 C-31.83799934387207,92.31400299072266 -31.781999588012695,92.34700012207031 -31.726999282836914,92.37699890136719 C-31.726999282836914,92.37699890136719 -31.67799949645996,92.40399932861328 -31.67799949645996,92.40399932861328 C-31.67799949645996,92.40399932861328 -31.680999755859375,92.3010025024414 -31.680999755859375,92.3010025024414 C-31.680999755859375,92.3010025024414 -31.687000274658203,92.15399932861328 -31.687000274658203,92.15399932861328 C-31.687000274658203,92.15399932861328 -35.270999908447266,27.82200050354004 -35.270999908447266,27.82200050354004 C-35.457000732421875,24.476999282836914 -38.22100067138672,19.88599967956543 -41.090999603271484,18.1560001373291 C-41.090999603271484,18.1560001373291 -96.27200317382812,-15.107000350952148 -96.27200317382812,-15.107000350952148 C-96.33000183105469,-15.142000198364258 -96.38600158691406,-15.175000190734863 -96.44000244140625,-15.206000328063965 C-96.44000244140625,-15.206000328063965 -96.48899841308594,-15.232999801635742 -96.48899841308594,-15.232999801635742 C-96.48899841308594,-15.232999801635742 -96.48699951171875,-15.130000114440918 -96.48699951171875,-15.130000114440918 C-96.48699951171875,-15.130000114440918 -96.4800033569336,-14.982000350952148 -96.4800033569336,-14.982000350952148 C-96.4800033569336,-14.982000350952148 -92.89700317382812,49.3489990234375 -92.89700317382812,49.3489990234375z M-124.33399963378906,-8.744999885559082 C-124.33399963378906,-8.744999885559082 -124.31199645996094,-12.946000099182129 -124.31199645996094,-12.946000099182129 C-124.31199645996094,-12.946000099182129 -124.3030014038086,-13.654999732971191 -124.3030014038086,-13.654999732971191 C-124.28500366210938,-14.87600040435791 -124.25299835205078,-15.89900016784668 -124.1989974975586,-16.867000579833984 C-123.6259994506836,-27.216999053955078 -119.83000183105469,-33.233001708984375 -108.53500366210938,-40.108001708984375 C-108.53500366210938,-40.108001708984375 -108.19100189208984,-40.316001892089844 -108.19100189208984,-40.316001892089844 C-108.19100189208984,-40.316001892089844 -103.61000061035156,-32.70899963378906 -103.61000061035156,-32.70899963378906 C-108.57099914550781,-29.722000122070312 -111.48600006103516,-27.187000274658203 -113.0999984741211,-24.670000076293945 C-114.43800354003906,-22.58300018310547 -115.04299926757812,-20.29599952697754 -115.26200103759766,-16.65399932861328 C-115.26200103759766,-16.65399932861328 -115.27400207519531,-16.44700050354004 -115.27400207519531,-16.44700050354004 C-115.31800079345703,-15.649999618530273 -115.34600067138672,-14.784000396728516 -115.36299896240234,-13.741000175476074 C-115.36299896240234,-13.741000175476074 -115.37699890136719,-12.513999938964844 -115.37699890136719,-12.513999938964844 C-115.37699890136719,-12.513999938964844 -115.39600372314453,-8.76200008392334 -115.39600372314453,-8.76200008392334 C-115.39600372314453,-8.76200008392334 -124.33399963378906,-8.744999885559082 -124.33399963378906,-8.744999885559082z"></path></g></g><g transform="matrix(1.1608799695968628,0,0,1.1608799695968628,1323.157958984375,1653.9210205078125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(240,185,11)" fill-opacity="1" d=" M0,-41.44900131225586 C22.892000198364258,-41.44900131225586 41.44900131225586,-22.892000198364258 41.44900131225586,0 C41.44900131225586,22.892000198364258 22.892000198364258,41.44900131225586 0,41.44900131225586 C-22.892000198364258,41.44900131225586 -41.44900131225586,22.892000198364258 -41.44900131225586,0 C-41.44900131225586,-22.892000198364258 -22.892000198364258,-41.44900131225586 0,-41.44900131225586z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14.765999794006348,-19.07900047302246 C-14.765999794006348,-19.07900047302246 -0.16500000655651093,-27.577999114990234 -0.16500000655651093,-27.577999114990234 C-0.16500000655651093,-27.577999114990234 14.4350004196167,-19.07900047302246 14.4350004196167,-19.07900047302246 C14.4350004196167,-19.07900047302246 9.067999839782715,-15.939000129699707 9.067999839782715,-15.939000129699707 C9.067999839782715,-15.939000129699707 -0.16500000655651093,-21.29800033569336 -0.16500000655651093,-21.29800033569336 C-0.16500000655651093,-21.29800033569336 -9.39799976348877,-15.939000129699707 -9.39799976348877,-15.939000129699707 C-9.39799976348877,-15.939000129699707 -14.765999794006348,-19.07900047302246 -14.765999794006348,-19.07900047302246z M14.4350004196167,-8.361000061035156 C14.4350004196167,-8.361000061035156 9.067999839782715,-11.50100040435791 9.067999839782715,-11.50100040435791 C9.067999839782715,-11.50100040435791 -0.16500000655651093,-6.140999794006348 -0.16500000655651093,-6.140999794006348 C-0.16500000655651093,-6.140999794006348 -9.39799976348877,-11.50100040435791 -9.39799976348877,-11.50100040435791 C-9.39799976348877,-11.50100040435791 -14.765999794006348,-8.361000061035156 -14.765999794006348,-8.361000061035156 C-14.765999794006348,-8.361000061035156 -14.765999794006348,-2.0810000896453857 -14.765999794006348,-2.0810000896453857 C-14.765999794006348,-2.0810000896453857 -5.5329999923706055,3.2780001163482666 -5.5329999923706055,3.2780001163482666 C-5.5329999923706055,3.2780001163482666 -5.5329999923706055,13.996000289916992 -5.5329999923706055,13.996000289916992 C-5.5329999923706055,13.996000289916992 -0.16500000655651093,17.135000228881836 -0.16500000655651093,17.135000228881836 C-0.16500000655651093,17.135000228881836 5.203000068664551,13.996000289916992 5.203000068664551,13.996000289916992 C5.203000068664551,13.996000289916992 5.203000068664551,3.2780001163482666 5.203000068664551,3.2780001163482666 C5.203000068664551,3.2780001163482666 14.4350004196167,-2.0810000896453857 14.4350004196167,-2.0810000896453857 C14.4350004196167,-2.0810000896453857 14.4350004196167,-8.361000061035156 14.4350004196167,-8.361000061035156z M14.4350004196167,8.63700008392334 C14.4350004196167,8.63700008392334 14.4350004196167,2.3570001125335693 14.4350004196167,2.3570001125335693 C14.4350004196167,2.3570001125335693 9.067999839782715,5.497000217437744 9.067999839782715,5.497000217437744 C9.067999839782715,5.497000217437744 9.067999839782715,11.776000022888184 9.067999839782715,11.776000022888184 C9.067999839782715,11.776000022888184 14.4350004196167,8.63700008392334 14.4350004196167,8.63700008392334z M18.246999740600586,10.855999946594238 C18.246999740600586,10.855999946594238 9.013999938964844,16.21500015258789 9.013999938964844,16.21500015258789 C9.013999938964844,16.21500015258789 9.013999938964844,22.4950008392334 9.013999938964844,22.4950008392334 C9.013999938964844,22.4950008392334 23.614999771118164,13.996000289916992 23.614999771118164,13.996000289916992 C23.614999771118164,13.996000289916992 23.614999771118164,-3.002000093460083 23.614999771118164,-3.002000093460083 C23.614999771118164,-3.002000093460083 18.246999740600586,0.1379999965429306 18.246999740600586,0.1379999965429306 C18.246999740600586,0.1379999965429306 18.246999740600586,10.855999946594238 18.246999740600586,10.855999946594238z M12.878999710083008,-13.720000267028809 C12.878999710083008,-13.720000267028809 18.246999740600586,-10.579999923706055 18.246999740600586,-10.579999923706055 C18.246999740600586,-10.579999923706055 18.246999740600586,-4.301000118255615 18.246999740600586,-4.301000118255615 C18.246999740600586,-4.301000118255615 23.614999771118164,-7.440999984741211 23.614999771118164,-7.440999984741211 C23.614999771118164,-7.440999984741211 23.614999771118164,-13.720000267028809 23.614999771118164,-13.720000267028809 C23.614999771118164,-13.720000267028809 18.246999740600586,-16.860000610351562 18.246999740600586,-16.860000610351562 C18.246999740600586,-16.860000610351562 12.878999710083008,-13.720000267028809 12.878999710083008,-13.720000267028809z M-5.5329999923706055,18.48900032043457 C-5.5329999923706055,18.48900032043457 -5.5329999923706055,24.76799964904785 -5.5329999923706055,24.76799964904785 C-5.5329999923706055,24.76799964904785 -0.16500000655651093,27.908000946044922 -0.16500000655651093,27.908000946044922 C-0.16500000655651093,27.908000946044922 5.203000068664551,24.76799964904785 5.203000068664551,24.76799964904785 C5.203000068664551,24.76799964904785 5.203000068664551,18.48900032043457 5.203000068664551,18.48900032043457 C5.203000068664551,18.48900032043457 -0.16500000655651093,21.628000259399414 -0.16500000655651093,21.628000259399414 C-0.16500000655651093,21.628000259399414 -5.5329999923706055,18.48900032043457 -5.5329999923706055,18.48900032043457z M-14.765999794006348,8.63700008392334 C-14.765999794006348,8.63700008392334 -9.39799976348877,11.776000022888184 -9.39799976348877,11.776000022888184 C-9.39799976348877,11.776000022888184 -9.39799976348877,5.497000217437744 -9.39799976348877,5.497000217437744 C-9.39799976348877,5.497000217437744 -14.765999794006348,2.3570001125335693 -14.765999794006348,2.3570001125335693 C-14.765999794006348,2.3570001125335693 -14.765999794006348,8.63700008392334 -14.765999794006348,8.63700008392334z M-5.5329999923706055,-13.720000267028809 C-5.5329999923706055,-13.720000267028809 -0.16500000655651093,-10.579999923706055 -0.16500000655651093,-10.579999923706055 C-0.16500000655651093,-10.579999923706055 5.203000068664551,-13.720000267028809 5.203000068664551,-13.720000267028809 C5.203000068664551,-13.720000267028809 -0.16500000655651093,-16.860000610351562 -0.16500000655651093,-16.860000610351562 C-0.16500000655651093,-16.860000610351562 -5.5329999923706055,-13.720000267028809 -5.5329999923706055,-13.720000267028809z M-18.57699966430664,-10.579999923706055 C-18.57699966430664,-10.579999923706055 -13.208999633789062,-13.720000267028809 -13.208999633789062,-13.720000267028809 C-13.208999633789062,-13.720000267028809 -18.57699966430664,-16.860000610351562 -18.57699966430664,-16.860000610351562 C-18.57699966430664,-16.860000610351562 -23.94499969482422,-13.720000267028809 -23.94499969482422,-13.720000267028809 C-23.94499969482422,-13.720000267028809 -23.94499969482422,-7.440999984741211 -23.94499969482422,-7.440999984741211 C-23.94499969482422,-7.440999984741211 -18.57699966430664,-4.301000118255615 -18.57699966430664,-4.301000118255615 C-18.57699966430664,-4.301000118255615 -18.57699966430664,-10.579999923706055 -18.57699966430664,-10.579999923706055z M-18.57699966430664,0.1379999965429306 C-18.57699966430664,0.1379999965429306 -23.94499969482422,-3.002000093460083 -23.94499969482422,-3.002000093460083 C-23.94499969482422,-3.002000093460083 -23.94499969482422,13.996000289916992 -23.94499969482422,13.996000289916992 C-23.94499969482422,13.996000289916992 -9.343999862670898,22.4950008392334 -9.343999862670898,22.4950008392334 C-9.343999862670898,22.4950008392334 -9.343999862670898,16.21500015258789 -9.343999862670898,16.21500015258789 C-9.343999862670898,16.21500015258789 -18.57699966430664,10.855999946594238 -18.57699966430664,10.855999946594238 C-18.57699966430664,10.855999946594238 -18.57699966430664,0.1379999965429306 -18.57699966430664,0.1379999965429306z"></path></g></g><g transform="matrix(0.2588191032409668,-0.9659258127212524,0.9659258127212524,0.2588191032409668,623.3223876953125,1778.42578125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(240,185,11)" fill-opacity="1" d=" M0,-41.44900131225586 C22.892000198364258,-41.44900131225586 41.44900131225586,-22.892000198364258 41.44900131225586,0 C41.44900131225586,22.892000198364258 22.892000198364258,41.44900131225586 0,41.44900131225586 C-22.892000198364258,41.44900131225586 -41.44900131225586,22.892000198364258 -41.44900131225586,0 C-41.44900131225586,-22.892000198364258 -22.892000198364258,-41.44900131225586 0,-41.44900131225586z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14.765999794006348,-19.07900047302246 C-14.765999794006348,-19.07900047302246 -0.16500000655651093,-27.577999114990234 -0.16500000655651093,-27.577999114990234 C-0.16500000655651093,-27.577999114990234 14.4350004196167,-19.07900047302246 14.4350004196167,-19.07900047302246 C14.4350004196167,-19.07900047302246 9.067999839782715,-15.939000129699707 9.067999839782715,-15.939000129699707 C9.067999839782715,-15.939000129699707 -0.16500000655651093,-21.29800033569336 -0.16500000655651093,-21.29800033569336 C-0.16500000655651093,-21.29800033569336 -9.39799976348877,-15.939000129699707 -9.39799976348877,-15.939000129699707 C-9.39799976348877,-15.939000129699707 -14.765999794006348,-19.07900047302246 -14.765999794006348,-19.07900047302246z M14.4350004196167,-8.361000061035156 C14.4350004196167,-8.361000061035156 9.067999839782715,-11.50100040435791 9.067999839782715,-11.50100040435791 C9.067999839782715,-11.50100040435791 -0.16500000655651093,-6.140999794006348 -0.16500000655651093,-6.140999794006348 C-0.16500000655651093,-6.140999794006348 -9.39799976348877,-11.50100040435791 -9.39799976348877,-11.50100040435791 C-9.39799976348877,-11.50100040435791 -14.765999794006348,-8.361000061035156 -14.765999794006348,-8.361000061035156 C-14.765999794006348,-8.361000061035156 -14.765999794006348,-2.0810000896453857 -14.765999794006348,-2.0810000896453857 C-14.765999794006348,-2.0810000896453857 -5.5329999923706055,3.2780001163482666 -5.5329999923706055,3.2780001163482666 C-5.5329999923706055,3.2780001163482666 -5.5329999923706055,13.996000289916992 -5.5329999923706055,13.996000289916992 C-5.5329999923706055,13.996000289916992 -0.16500000655651093,17.135000228881836 -0.16500000655651093,17.135000228881836 C-0.16500000655651093,17.135000228881836 5.203000068664551,13.996000289916992 5.203000068664551,13.996000289916992 C5.203000068664551,13.996000289916992 5.203000068664551,3.2780001163482666 5.203000068664551,3.2780001163482666 C5.203000068664551,3.2780001163482666 14.4350004196167,-2.0810000896453857 14.4350004196167,-2.0810000896453857 C14.4350004196167,-2.0810000896453857 14.4350004196167,-8.361000061035156 14.4350004196167,-8.361000061035156z M14.4350004196167,8.63700008392334 C14.4350004196167,8.63700008392334 14.4350004196167,2.3570001125335693 14.4350004196167,2.3570001125335693 C14.4350004196167,2.3570001125335693 9.067999839782715,5.497000217437744 9.067999839782715,5.497000217437744 C9.067999839782715,5.497000217437744 9.067999839782715,11.776000022888184 9.067999839782715,11.776000022888184 C9.067999839782715,11.776000022888184 14.4350004196167,8.63700008392334 14.4350004196167,8.63700008392334z M18.246999740600586,10.855999946594238 C18.246999740600586,10.855999946594238 9.013999938964844,16.21500015258789 9.013999938964844,16.21500015258789 C9.013999938964844,16.21500015258789 9.013999938964844,22.4950008392334 9.013999938964844,22.4950008392334 C9.013999938964844,22.4950008392334 23.614999771118164,13.996000289916992 23.614999771118164,13.996000289916992 C23.614999771118164,13.996000289916992 23.614999771118164,-3.002000093460083 23.614999771118164,-3.002000093460083 C23.614999771118164,-3.002000093460083 18.246999740600586,0.1379999965429306 18.246999740600586,0.1379999965429306 C18.246999740600586,0.1379999965429306 18.246999740600586,10.855999946594238 18.246999740600586,10.855999946594238z M12.878999710083008,-13.720000267028809 C12.878999710083008,-13.720000267028809 18.246999740600586,-10.579999923706055 18.246999740600586,-10.579999923706055 C18.246999740600586,-10.579999923706055 18.246999740600586,-4.301000118255615 18.246999740600586,-4.301000118255615 C18.246999740600586,-4.301000118255615 23.614999771118164,-7.440999984741211 23.614999771118164,-7.440999984741211 C23.614999771118164,-7.440999984741211 23.614999771118164,-13.720000267028809 23.614999771118164,-13.720000267028809 C23.614999771118164,-13.720000267028809 18.246999740600586,-16.860000610351562 18.246999740600586,-16.860000610351562 C18.246999740600586,-16.860000610351562 12.878999710083008,-13.720000267028809 12.878999710083008,-13.720000267028809z M-5.5329999923706055,18.48900032043457 C-5.5329999923706055,18.48900032043457 -5.5329999923706055,24.76799964904785 -5.5329999923706055,24.76799964904785 C-5.5329999923706055,24.76799964904785 -0.16500000655651093,27.908000946044922 -0.16500000655651093,27.908000946044922 C-0.16500000655651093,27.908000946044922 5.203000068664551,24.76799964904785 5.203000068664551,24.76799964904785 C5.203000068664551,24.76799964904785 5.203000068664551,18.48900032043457 5.203000068664551,18.48900032043457 C5.203000068664551,18.48900032043457 -0.16500000655651093,21.628000259399414 -0.16500000655651093,21.628000259399414 C-0.16500000655651093,21.628000259399414 -5.5329999923706055,18.48900032043457 -5.5329999923706055,18.48900032043457z M-14.765999794006348,8.63700008392334 C-14.765999794006348,8.63700008392334 -9.39799976348877,11.776000022888184 -9.39799976348877,11.776000022888184 C-9.39799976348877,11.776000022888184 -9.39799976348877,5.497000217437744 -9.39799976348877,5.497000217437744 C-9.39799976348877,5.497000217437744 -14.765999794006348,2.3570001125335693 -14.765999794006348,2.3570001125335693 C-14.765999794006348,2.3570001125335693 -14.765999794006348,8.63700008392334 -14.765999794006348,8.63700008392334z M-5.5329999923706055,-13.720000267028809 C-5.5329999923706055,-13.720000267028809 -0.16500000655651093,-10.579999923706055 -0.16500000655651093,-10.579999923706055 C-0.16500000655651093,-10.579999923706055 5.203000068664551,-13.720000267028809 5.203000068664551,-13.720000267028809 C5.203000068664551,-13.720000267028809 -0.16500000655651093,-16.860000610351562 -0.16500000655651093,-16.860000610351562 C-0.16500000655651093,-16.860000610351562 -5.5329999923706055,-13.720000267028809 -5.5329999923706055,-13.720000267028809z M-18.57699966430664,-10.579999923706055 C-18.57699966430664,-10.579999923706055 -13.208999633789062,-13.720000267028809 -13.208999633789062,-13.720000267028809 C-13.208999633789062,-13.720000267028809 -18.57699966430664,-16.860000610351562 -18.57699966430664,-16.860000610351562 C-18.57699966430664,-16.860000610351562 -23.94499969482422,-13.720000267028809 -23.94499969482422,-13.720000267028809 C-23.94499969482422,-13.720000267028809 -23.94499969482422,-7.440999984741211 -23.94499969482422,-7.440999984741211 C-23.94499969482422,-7.440999984741211 -18.57699966430664,-4.301000118255615 -18.57699966430664,-4.301000118255615 C-18.57699966430664,-4.301000118255615 -18.57699966430664,-10.579999923706055 -18.57699966430664,-10.579999923706055z M-18.57699966430664,0.1379999965429306 C-18.57699966430664,0.1379999965429306 -23.94499969482422,-3.002000093460083 -23.94499969482422,-3.002000093460083 C-23.94499969482422,-3.002000093460083 -23.94499969482422,13.996000289916992 -23.94499969482422,13.996000289916992 C-23.94499969482422,13.996000289916992 -9.343999862670898,22.4950008392334 -9.343999862670898,22.4950008392334 C-9.343999862670898,22.4950008392334 -9.343999862670898,16.21500015258789 -9.343999862670898,16.21500015258789 C-9.343999862670898,16.21500015258789 -18.57699966430664,10.855999946594238 -18.57699966430664,10.855999946594238 C-18.57699966430664,10.855999946594238 -18.57699966430664,0.1379999965429306 -18.57699966430664,0.1379999965429306z"></path></g></g><g transform="matrix(-0.17627830803394318,-0.37803003191947937,0.37803003191947937,-0.17627830803394318,169.177978515625,1456.22900390625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(246,146,26)" fill-opacity="1" d=" M-119.51100158691406,34.3390007019043 C-138.54100036621094,-31.702999114990234 -100.18599700927734,-100.53199768066406 -34.30099868774414,-119.4729995727539 C31.583999633789062,-138.41400146484375 100.5719985961914,-100.15299987792969 119.51000213623047,-34.27000045776367 C138.54100036621094,31.77199935913086 100.34500122070312,100.50900268554688 34.30099868774414,119.54100036621094 C-31.834999084472656,138.41400146484375 -100.5719985961914,100.22200012207031 -119.51100158691406,34.3390007019043z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-37.422000885009766,42.98400115966797 C-31.22100067138672,58.50199890136719 -15.98799991607666,59.893001556396484 2.005000114440918,56.50699996948242 C2.005000114440918,56.50699996948242 8.4399995803833,78.68000030517578 8.4399995803833,78.68000030517578 C8.4399995803833,78.68000030517578 21.964000701904297,74.90399932861328 21.964000701904297,74.90399932861328 C21.964000701904297,74.90399932861328 15.803999900817871,53.20800018310547 15.803999900817871,53.20800018310547 C19.44700050354004,52.16600036621094 22.996999740600586,50.96500015258789 26.481000900268555,50.01499938964844 C26.481000900268555,50.01499938964844 32.731998443603516,71.87000274658203 32.731998443603516,71.87000274658203 C32.731998443603516,71.87000274658203 46.25600051879883,68.09400177001953 46.25600051879883,68.09400177001953 C46.25600051879883,68.09400177001953 39.82099914550781,45.92100143432617 39.82099914550781,45.92100143432617 C42.73500061035156,45.08700180053711 45.55699920654297,44.09400177001953 48.3120002746582,43.35300064086914 C48.3120002746582,43.35300064086914 66.93499755859375,38.11800003051758 66.93499755859375,38.11800003051758 C66.93499755859375,38.11800003051758 62.85900115966797,23.707000732421875 62.85900115966797,23.707000732421875 C62.85900115966797,23.707000732421875 52.9109992980957,26.691999435424805 53.06999969482422,26.600000381469727 C47.560001373291016,28.083999633789062 44.85900115966797,25.611000061035156 43.54800033569336,22.972999572753906 C43.54800033569336,22.972999572753906 36.34700012207031,-2.365000009536743 36.34700012207031,-2.365000009536743 C35.9370002746582,-2.3410000801086426 35.45899963378906,-2.065000057220459 34.88999938964844,-1.9490000009536743 C35.29999923706055,-1.9730000495910645 35.777000427246094,-2.249000072479248 36.34700012207031,-2.365000009536743 C36.34700012207031,-2.365000009536743 26.22800064086914,-37.90299987792969 26.22800064086914,-37.90299987792969 C26.038000106811523,-39.702999114990234 26.183000564575195,-42.757999420166016 29.985000610351562,-43.891998291015625 C29.733999252319336,-43.95899963378906 39.77399826049805,-46.78499984741211 39.77399826049805,-46.78499984741211 C39.77399826049805,-46.78499984741211 37.85300064086914,-63.71200180053711 37.85300064086914,-63.71200180053711 C37.85300064086914,-63.71200180053711 20.208999633789062,-58.61899948120117 20.208999633789062,-58.61899948120117 C16.885000228881836,-57.7599983215332 13.652999877929688,-56.74300003051758 10.487000465393066,-55.97700119018555 C10.487000465393066,-55.97700119018555 4.11899995803833,-78.4010009765625 4.11899995803833,-78.4010009765625 C4.11899995803833,-78.4010009765625 -9.404000282287598,-74.625 -9.404000282287598,-74.625 C-9.404000282287598,-74.625 -2.9690001010894775,-52.45199966430664 -2.9690001010894775,-52.45199966430664 C-6.703000068664551,-51.569000244140625 -10.345999717712402,-50.527000427246094 -13.73799991607666,-49.417999267578125 C-13.73799991607666,-49.417999267578125 -20.08099937438965,-71.43199920654297 -20.08099937438965,-71.43199920654297 C-20.08099937438965,-71.43199920654297 -33.60499954223633,-67.65599822998047 -33.60499954223633,-67.65599822998047 C-33.60499954223633,-67.65599822998047 -27.236000061035156,-45.23099899291992 -27.236000061035156,-45.23099899291992 C-49.654998779296875,-37.38100051879883 -63.85599899291992,-27.059999465942383 -59.74700164794922,-5.241000175476074 C-56.387001037597656,12.340999603271484 -46.10599899291992,17.652000427246094 -32.3849983215332,17.158000946044922 C-39.10599899291992,23.15999984741211 -41.89500045776367,31.56100082397461 -37.422000885009766,42.98400115966797z M-32.23400115966797,-10.515999794006348 C-37.027000427246094,-27.270999908447266 -7.763000011444092,-33.555999755859375 1.4559999704360962,-36.33300018310547 C1.4559999704360962,-36.33300018310547 9.907999992370605,-6.624000072479248 9.907999992370605,-6.624000072479248 C0.6890000104904175,-3.8469998836517334 -27.232999801635742,6.9679999351501465 -32.23400115966797,-10.515999794006348z M-13.934000015258789,29.635000228881836 C-18.309999465942383,14.336999893188477 6.171999931335449,9.326000213623047 13.776000022888184,7.059000015258789 C13.776000022888184,7.059000015258789 21.486000061035156,34.01300048828125 21.486000061035156,34.01300048828125 C13.883000373840332,36.28099822998047 -9.350000381469727,45.6619987487793 -13.934000015258789,29.635000228881836z"></path></g></g><g transform="matrix(0.8797896504402161,0.47536319494247437,-0.47536319494247437,0.8797896504402161,157.2457275390625,1022.8800048828125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,4,32)" fill-opacity="1" d=" M34.553001403808594,-129.11300659179688 C-36.72600173950195,-148.21200561523438 -109.99199676513672,-105.91200256347656 -129.09100341796875,-34.632999420166016 C-148.19000244140625,36.645999908447266 -105.88999938964844,109.91100311279297 -34.611000061035156,129.00999450683594 C36.667999267578125,148.10899353027344 109.93299865722656,105.80899810791016 129.03199768066406,34.53099822998047 C148.13099670410156,-36.74800109863281 105.83200073242188,-110.01399993896484 34.553001403808594,-129.11300659179688z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M46.40399932861328,-24.406999588012695 C54.0890007019043,-22.347999572753906 59.895999908447266,-18.856000900268555 63.83399963378906,-13.92300033569336 C67.68900299072266,-8.946000099182129 68.70899963378906,-3.069000005722046 66.89199829101562,3.7119998931884766 C66.51100158691406,5.13100004196167 65.88400268554688,6.833000183105469 65.00599670410156,8.8100004196167 C62.91899871826172,13.234000205993652 60.22999954223633,18.499000549316406 56.935001373291016,24.601999282836914 C47.7869987487793,41.17900085449219 34.08000183105469,47.02000045776367 15.810999870300293,42.125 C10.840999603271484,40.792999267578125 6.611999988555908,38.75899887084961 3.124000072479248,36.0260009765625 C-0.38100001215934753,33.35599899291992 -2.8259999752044678,30.072999954223633 -4.198999881744385,26.176000595092773 C-5.59499979019165,22.344999313354492 -5.686999797821045,18.166000366210938 -4.474999904632568,13.645999908447266 C-4.111999988555908,12.288000106811523 -3.49399995803833,10.623000144958496 -2.614000082015991,8.640000343322754 C-0.10499999672174454,3.1559998989105225 2.552999973297119,-2.117000102996826 5.357999801635742,-7.177999973297119 C9.98900032043457,-15.418000221252441 15.668000221252441,-20.988000869750977 22.39299964904785,-23.89299964904785 C29.104999542236328,-26.729999542236328 37.10599899291992,-26.90399932861328 46.404998779296875,-24.41200065612793 C46.404998779296875,-24.41200065612793 46.40399932861328,-24.406999588012695 46.40399932861328,-24.406999588012695z M41.310001373291016,-10.826000213623047 C37.69300079345703,-11.795000076293945 34.34199905395508,-11.553000450134277 31.253000259399414,-10.097000122070312 C28.10099983215332,-8.656999588012695 25.385000228881836,-5.888999938964844 23.110000610351562,-1.7970000505447388 C19.996999740600586,3.874000072479248 17.447999954223633,8.866000175476074 15.46399974822998,13.175000190734863 C14.843000411987305,14.463000297546387 14.342000007629395,15.817000389099121 13.961000442504883,17.236000061035156 C12.387999534606934,23.108999252319336 14.666000366210938,26.867000579833984 20.797000885009766,28.510000228881836 C24.415000915527344,29.479000091552734 27.797000885009766,29.246000289916992 30.947999954223633,27.805999755859375 C34.03799819946289,26.349000930786133 36.71799850463867,23.570999145507812 38.99300003051758,19.479000091552734 C41.3129997253418,15.465999603271484 43.893001556396484,10.482000350952148 46.736000061035156,4.533999919891357 C47.34000015258789,3.312999963760376 47.83300018310547,1.9900000095367432 48.2130012512207,0.5709999799728394 C49.80500030517578,-5.36899995803833 47.49800109863281,-9.168000221252441 41.30500030517578,-10.82699966430664 C41.30500030517578,-10.82699966430664 41.310001373291016,-10.826000213623047 41.310001373291016,-10.826000213623047z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M3.73799991607666,-34.79999923706055 C4.449999809265137,-34.60900115966797 4.935999870300293,-34.23500061035156 5.203000068664551,-33.68199920654297 C5.389999866485596,-33.07899856567383 5.326000213623047,-32.47100067138672 5.02400016784668,-31.861000061035156 C5.02400016784668,-31.861000061035156 -25.20199966430664,27.500999450683594 -25.20199966430664,27.500999450683594 C-25.52199935913086,28.17799949645996 -26.033000946044922,28.660999298095703 -26.732999801635742,28.959999084472656 C-27.437999725341797,29.257999420166016 -28.106000900268555,29.316999435424805 -28.756000518798828,29.14299964904785 C-28.756000518798828,29.14299964904785 -54.513999938964844,22.240999221801758 -54.513999938964844,22.240999221801758 C-61.68299865722656,20.31999969482422 -67.02799987792969,17.295000076293945 -70.55799865722656,13.168000221252441 C-74.15499877929688,9.02400016784668 -75.197998046875,4.14300012588501 -73.69200134277344,-1.4780000448226929 C-73.25900268554688,-3.0929999351501465 -72.61299896240234,-4.7179999351501465 -71.75900268554688,-6.357999801635742 C-68.15399932861328,-13.35200023651123 -63.426998138427734,-17.96500015258789 -57.56800079345703,-20.201000213623047 C-51.775001525878906,-22.45400047302246 -44.64699935913086,-22.44700050354004 -36.194000244140625,-20.18199920654297 C-36.194000244140625,-20.18199920654297 -23.121000289916992,-16.679000854492188 -23.121000289916992,-16.679000854492188 C-23.121000289916992,-16.679000854492188 -12.986000061035156,-36.69200134277344 -12.986000061035156,-36.69200134277344 C-12.666000366210938,-37.369998931884766 -12.154999732971191,-37.85200119018555 -11.454999923706055,-38.1510009765625 C-10.75,-38.44900131225586 -10.07699966430664,-38.50699996948242 -9.430999755859375,-38.33399963378906 C-9.430999755859375,-38.33399963378906 3.739000082015991,-34.80500030517578 3.739000082015991,-34.80500030517578 C3.739000082015991,-34.80500030517578 3.73799991607666,-34.79999923706055 3.73799991607666,-34.79999923706055z M-40.452999114990234,-6.992000102996826 C-43.1619987487793,-7.7179999351501465 -45.720001220703125,-7.605999946594238 -48.12099838256836,-6.6570000648498535 C-50.58300018310547,-5.7230000495910645 -52.512001037597656,-3.9560000896453857 -53.89899826049805,-1.3569999933242798 C-54.38999938964844,-0.3100000023841858 -54.742000579833984,0.6299999952316284 -54.96699905395508,1.4709999561309814 C-55.46900177001953,3.3440001010894775 -55.301998138427734,4.909999847412109 -54.4630012512207,6.175000190734863 C-53.63999938964844,7.501999855041504 -51.90999984741211,8.517999649047852 -49.26300048828125,9.227999687194824 C-49.26300048828125,9.227999687194824 -37.63999938964844,12.342000007629395 -37.63999938964844,12.342000007629395 C-37.63999938964844,12.342000007629395 -29.31599998474121,-4.006999969482422 -29.31599998474121,-4.006999969482422 C-29.31599998474121,-4.006999969482422 -40.452999114990234,-6.992000102996826 -40.452999114990234,-6.992000102996826z"></path></g></g><g transform="matrix(1,0,0,1,348.3380126953125,1204.0589599609375)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(171,168,164)" fill-opacity="1" d=" M30.27400016784668,-81.18800354003906 C24.816999435424805,-86.22799682617188 14.644000053405762,-88.5250015258789 7.552000045776367,-86.31900024414062 C7.552000045776367,-86.31900024414062 -125.44300079345703,-44.959999084472656 -125.44300079345703,-44.959999084472656 C-132.53599548339844,-42.75400161743164 -133.86099243164062,-36.88100051879883 -128.40499877929688,-31.840999603271484 C-128.40499877929688,-31.840999603271484 -117.39900207519531,-21.674999237060547 -117.39900207519531,-21.674999237060547 C-117.39900207519531,-21.674999237060547 -118.29499816894531,-17.704999923706055 -118.29499816894531,-17.704999923706055 C-118.29499816894531,-17.704999923706055 -111.41799926757812,-16.152000427246094 -111.41799926757812,-16.152000427246094 C-111.41799926757812,-16.152000427246094 -26.09000015258789,62.654998779296875 -26.09000015258789,62.654998779296875 C-20.632999420166016,67.69499969482422 -10.460000038146973,69.99199676513672 -3.367000102996826,67.78600311279297 C-3.367000102996826,67.78600311279297 107.5459976196289,33.29399871826172 107.5459976196289,33.29399871826172 C107.5459976196289,33.29399871826172 114.42400360107422,34.84700012207031 114.42400360107422,34.84700012207031 C114.42400360107422,34.84700012207031 115.31999969482422,30.875999450683594 115.31999969482422,30.875999450683594 C115.31999969482422,30.875999450683594 129.6269989013672,26.427000045776367 129.6269989013672,26.427000045776367 C136.72000122070312,24.22100067138672 138.04600524902344,18.347999572753906 132.58900451660156,13.307999610900879 C132.58900451660156,13.307999610900879 30.27400016784668,-81.18800354003906 30.27400016784668,-81.18800354003906z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(239,234,228)" fill-opacity="1" d=" M26.09000015258789,-62.65599822998047 C26.09000015258789,-62.65599822998047 128.40499877929688,31.840999603271484 128.40499877929688,31.840999603271484 C133.86199951171875,36.88100051879883 132.53599548339844,42.75400161743164 125.44300079345703,44.959999084472656 C125.44300079345703,44.959999084472656 -7.552000045776367,86.31900024414062 -7.552000045776367,86.31900024414062 C-14.645000457763672,88.5250015258789 -24.81800079345703,86.22799682617188 -30.27400016784668,81.18800354003906 C-30.27400016784668,81.18800354003906 -132.58900451660156,-13.309000015258789 -132.58900451660156,-13.309000015258789 C-138.04600524902344,-18.349000930786133 -136.72000122070312,-24.22100067138672 -129.6269989013672,-26.427000045776367 C-129.6269989013672,-26.427000045776367 3.367000102996826,-67.78700256347656 3.367000102996826,-67.78700256347656 C10.460000038146973,-69.99299621582031 20.632999420166016,-67.69599914550781 26.09000015258789,-62.65599822998047z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(23,21,18)" fill-opacity="1" d=" M-61.893001556396484,19.636999130249023 C-66.61000061035156,15.10200023651123 -68.65599822998047,9.899999618530273 -67.80599975585938,5.304999828338623 C-67.13800048828125,1.753999948501587 -64.64700317382812,-1.4320000410079956 -60.72999954223633,-3.691999912261963 C-58.90700149536133,-4.751999855041504 -56.790000915527344,-5.574999809265137 -54.53200149536133,-6.304999828338623 C-45.14699935913086,-9.25100040435791 -35.7400016784668,-12.175999641418457 -26.33300018310547,-15.10099983215332 C-25.091999053955078,-15.487000465393066 -24.31800079345703,-17.016000747680664 -24.16900062561035,-17.91200065612793 C-23.375,-21.66699981689453 -23.457000732421875,-25.697999954223633 -21.722000122070312,-29.225000381469727 C-20.676000595092773,-31.358999252319336 -18.78499984741211,-33.31700134277344 -16.472000122070312,-34.88600158691406 C-14.380999565124512,-36.30400085449219 -11.118000030517578,-37.564998626708984 -7.40500020980835,-37.020999908447266 C-5.584000110626221,-36.76499938964844 -3.859999895095825,-35.847999572753906 -2.765000104904175,-34.87300109863281 C2.0810000896453857,-30.433000564575195 6.8470001220703125,-25.9950008392334 11.664999961853027,-21.54599952697754 C14.291000366210938,-22.363000869750977 16.850000381469727,-23.240999221801758 19.586999893188477,-23.954999923706055 C22.61199951171875,-24.759000778198242 26.632999420166016,-24.50200080871582 30.16699981689453,-23.51799964904785 C33.49599838256836,-22.579999923706055 36.30500030517578,-20.87700080871582 38.404998779296875,-19.009000778198242 C41.983001708984375,-15.845999717712402 42.66699981689453,-12.57800006866455 40.37900161743164,-9.810999870300293 C39.612998962402344,-8.914999961853027 38.42300033569336,-8.161999702453613 36.99599838256836,-7.663000106811523 C34.52299880981445,-6.811999797821045 31.940000534057617,-6.063000202178955 29.399999618530273,-5.2729997634887695 C29.44499969482422,-5.23199987411499 29.48200035095215,-5.1620001792907715 29.527000427246094,-5.120999813079834 C32.62799835205078,-2.2209999561309814 35.76499938964844,0.6399999856948853 38.89500045776367,3.5309998989105225 C41.571998596191406,2.7260000705718994 44.691001892089844,1.5099999904632568 47.54800033569336,0.9779999852180481 C51.58300018310547,0.2160000056028366 56.46200180053711,0.9459999799728394 60.55799865722656,2.7690000534057617 C64.08999633789062,4.35699987411499 66.75399780273438,6.816999912261963 68.1240005493164,9.187000274658203 C68.85399627685547,10.467000007629395 68.9469985961914,11.836000442504883 68.75399780273438,13.04699993133545 C68.447998046875,14.758999824523926 67.00599670410156,16.277000427246094 64.84600067138672,17.167999267578125 C62.275001525878906,18.214000701904297 59.33599853515625,18.990999221801758 56.5369987487793,19.861000061035156 C60.68899917602539,23.69499969482422 64.83999633789062,27.52899932861328 68.99099731445312,31.363000869750977 C70.43399810791016,32.69599914550781 70.81400299072266,34.222999572753906 69.85099792480469,35.39899826049805 C67.61100006103516,38.069000244140625 58.74300003051758,38.25 53.762001037597656,37.854000091552734 C46.672000885009766,37.290000915527344 37.39799880981445,34.63800048828125 30.356000900268555,32.909000396728516 C28.933000564575195,32.55699920654297 26.63599967956543,32.39400100708008 25.43000030517578,32.742000579833984 C15.244000434875488,35.909000396728516 4.311999797821045,39.8849983215332 -6.25600004196167,42.486000061035156 C-10.902000427246094,43.57400131225586 -16.28700065612793,43.65999984741211 -21.759000778198242,43.058998107910156 C-27.674999237060547,42.404998779296875 -33.86800003051758,40.60300064086914 -39.051998138427734,38.13199996948242 C-42.709999084472656,36.391998291015625 -45.88199996948242,34.28099822998047 -48.52799987792969,31.979999542236328 C-53.05500030517578,27.9060001373291 -57.54600143432617,23.79400062561035 -61.893001556396484,19.636999130249023z M17.599000930786133,-16.10099983215332 C17.599000930786133,-16.10099983215332 23.48200035095215,-10.668000221252441 23.48200035095215,-10.668000221252441 C25.687999725341797,-11.409000396728516 27.868000030517578,-12.031999588012695 30.163000106811523,-12.690999984741211 C31.253000259399414,-13.003000259399414 32.06800079345703,-13.640000343322754 32.042999267578125,-14.482000350952148 C32.042999267578125,-14.838000297546387 31.840999603271484,-15.48799991607666 31.54400062561035,-15.833999633789062 C30.524999618530273,-17.024999618530273 28.91699981689453,-18.222999572753906 26.742000579833984,-18.451000213623047 C26.399999618530273,-18.48200035095215 25.382999420166016,-18.4950008392334 25.124000549316406,-18.413999557495117 C22.70400047302246,-17.798999786376953 20.483999252319336,-16.99799919128418 18.15399932861328,-16.301000595092773 C17.981000900268555,-16.246999740600586 17.801000595092773,-16.163999557495117 17.599000930786133,-16.10099983215332z M44.770999908447266,8.994000434875488 C44.770999908447266,8.994000434875488 50.65399932861328,14.428000450134277 50.65399932861328,14.428000450134277 C53.09400177001953,13.723999977111816 55.51100158691406,13 57.84000015258789,12.192999839782715 C58.39500045776367,11.993000030517578 58.875999450683594,11.76099967956543 59.071998596191406,11.371999740600586 C59.42900085449219,10.739999771118164 59.35599899291992,9.994999885559082 58.737998962402344,9.282999992370605 C57.7130012512207,8.121999740600586 56.26499938964844,6.927000045776367 54.09700012207031,6.670000076293945 C53.65299987792969,6.616000175476074 52.665000915527344,6.593999862670898 52.31800079345703,6.702000141143799 C49.72600173950195,7.370999813079834 47.28200149536133,8.21399974822998 44.770999908447266,8.994000434875488z M-50.85200119018555,16.368000030517578 C-48.487998962402344,18.729000091552734 -45.891998291015625,21.018999099731445 -43.37699890136719,23.30699920654297 C-41.52799987792969,24.979000091552734 -39.79399871826172,26.687000274658203 -37.887001037597656,28.340999603271484 C-36.91899871826172,29.163999557495117 -36.055999755859375,29.854999542236328 -34.827999114990234,30.597000122070312 C-33.555999755859375,31.3799991607666 -32.154998779296875,32.06800079345703 -30.655000686645508,32.66999816894531 C-26.22599983215332,34.44499969482422 -21.062999725341797,35.222999572753906 -16.61199951171875,34.88100051879883 C-15.467000007629395,34.79899978637695 -13.961999893188477,34.54999923706055 -12.96500015258789,34.29499816894531 C-10.625,33.676998138427734 -8.440999984741211,32.915000915527344 -6.2129998207092285,32.19499969482422 C-6.122000217437744,32.02899932861328 -6.057000160217285,31.98200035095215 -6.1479997634887695,31.791000366210938 C-7.2210001945495605,29.76799964904785 -8.241999626159668,27.756000518798828 -8.82800006866455,25.718000411987305 C-10.484999656677246,19.983999252319336 -10.21399974822998,14.390999794006348 -7.586999893188477,9.407999992370605 C-6.691999912261963,7.704999923706055 -5.513999938964844,6.050000190734863 -4.0269999504089355,4.573999881744385 C-2.609999895095825,3.1740000247955322 -1.1430000066757202,1.7860000133514404 0.6830000281333923,0.5870000123977661 C2.1589999198913574,-0.36500000953674316 3.7799999713897705,-1.3619999885559082 5.586999893188477,-2.115999937057495 C8.494000434875488,-3.3489999771118164 11.567000389099121,-4.359000205993652 14.607999801635742,-5.468999862670898 C9.545999526977539,-10.144000053405762 4.461999893188477,-14.83899974822998 -0.5989999771118164,-19.513999938964844 C-0.843999981880188,-19.73900032043457 -1.284999966621399,-20.041000366210938 -1.6230000257492065,-20.209999084472656 C-2.4730000495910645,-20.60300064086914 -3.6689999103546143,-20.888999938964844 -4.572999954223633,-20.690000534057617 C-5.339000225067139,-20.506999969482422 -6.249000072479248,-20.277999877929688 -6.859000205993652,-19.951000213623047 C-8.538999557495117,-19.045000076293945 -9.88700008392334,-17.83099937438965 -10.32800006866455,-16.35099983215332 C-10.920999526977539,-14.4399995803833 -10.963000297546387,-12.234000205993652 -11.723999977111816,-10.407999992370605 C-12.12600040435791,-9.461000442504883 -13.128999710083008,-8.821000099182129 -14.513999938964844,-8.390000343322754 C-25.472999572753906,-5.008999824523926 -36.46099853515625,-1.6200000047683716 -47.35300064086914,1.8220000267028809 C-48.41999816894531,2.1540000438690186 -49.40599822998047,2.5980000495910645 -50.222999572753906,3.125999927520752 C-50.981998443603516,3.635999917984009 -51.689998626708984,4.1579999923706055 -52.250999450683594,4.74399995803833 C-53.858001708984375,6.394000053405762 -54.59700012207031,8.597999572753906 -54.09600067138672,10.770999908447266 C-53.64899826049805,12.71500015258789 -52.617000579833984,14.559000015258789 -50.85200119018555,16.368000030517578z M0.7229999899864197,23.104000091552734 C1.559999942779541,24.625 3.555999994277954,26.0049991607666 6.129000186920166,26.493000030517578 C8.628000259399414,26.948999404907227 11.182999610900879,26.56599998474121 12.239999771118164,25.33300018310547 C13.289999961853027,24.128999710083008 13.008000373840332,22.408000946044922 11.222999572753906,21.045000076293945 C10.168000221252441,20.249000549316406 8.642999649047852,19.517000198364258 7.0920000076293945,19.260000228881836 C4.499000072479248,18.860000610351562 2.174999952316284,19.172000885009766 1.0470000505447388,20.48200035095215 C0.3790000081062317,21.183000564575195 0.20999999344348907,22.16699981689453 0.7229999899864197,23.104000091552734z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(23,21,18)" fill-opacity="1" d=" M-21.95800018310547,2.4760000705718994 C-23.690000534057617,0.5210000276565552 -22.663999557495117,-1.524999976158142 -19.96299934387207,-2.2009999752044678 C-17.861000061035156,-2.7170000076293945 -14.678000450134277,-2.200000047683716 -12.720000267028809,-0.8899999856948853 C-10.689000129699707,0.4519999921321869 -10.001999855041504,2.046999931335449 -10.75,3.4579999446868896 C-11.401000022888184,4.673999786376953 -13.557999610900879,5.317999839782715 -15.753999710083008,5.178999900817871 C-18.15999984741211,5.021999835968018 -20.70199966430664,3.921999931335449 -21.95800018310547,2.4760000705718994z"></path></g></g><g transform="matrix(0.2712053060531616,0.9625215530395508,-0.9625215530395508,0.2712053060531616,1152.4658203125,1257.9049072265625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(246,146,26)" fill-opacity="1" d=" M-119.51100158691406,34.3390007019043 C-138.54100036621094,-31.702999114990234 -100.18599700927734,-100.53199768066406 -34.30099868774414,-119.4729995727539 C31.583999633789062,-138.41400146484375 100.5719985961914,-100.15299987792969 119.51000213623047,-34.27000045776367 C138.54100036621094,31.77199935913086 100.34500122070312,100.50900268554688 34.30099868774414,119.54100036621094 C-31.834999084472656,138.41400146484375 -100.5719985961914,100.22200012207031 -119.51100158691406,34.3390007019043z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-37.422000885009766,42.98400115966797 C-31.22100067138672,58.50199890136719 -15.98799991607666,59.893001556396484 2.005000114440918,56.50699996948242 C2.005000114440918,56.50699996948242 8.4399995803833,78.68000030517578 8.4399995803833,78.68000030517578 C8.4399995803833,78.68000030517578 21.964000701904297,74.90399932861328 21.964000701904297,74.90399932861328 C21.964000701904297,74.90399932861328 15.803999900817871,53.20800018310547 15.803999900817871,53.20800018310547 C19.44700050354004,52.16600036621094 22.996999740600586,50.96500015258789 26.481000900268555,50.01499938964844 C26.481000900268555,50.01499938964844 32.731998443603516,71.87000274658203 32.731998443603516,71.87000274658203 C32.731998443603516,71.87000274658203 46.25600051879883,68.09400177001953 46.25600051879883,68.09400177001953 C46.25600051879883,68.09400177001953 39.82099914550781,45.92100143432617 39.82099914550781,45.92100143432617 C42.73500061035156,45.08700180053711 45.55699920654297,44.09400177001953 48.3120002746582,43.35300064086914 C48.3120002746582,43.35300064086914 66.93499755859375,38.11800003051758 66.93499755859375,38.11800003051758 C66.93499755859375,38.11800003051758 62.85900115966797,23.707000732421875 62.85900115966797,23.707000732421875 C62.85900115966797,23.707000732421875 52.9109992980957,26.691999435424805 53.06999969482422,26.600000381469727 C47.560001373291016,28.083999633789062 44.85900115966797,25.611000061035156 43.54800033569336,22.972999572753906 C43.54800033569336,22.972999572753906 36.34700012207031,-2.365000009536743 36.34700012207031,-2.365000009536743 C35.9370002746582,-2.3410000801086426 35.45899963378906,-2.065000057220459 34.88999938964844,-1.9490000009536743 C35.29999923706055,-1.9730000495910645 35.777000427246094,-2.249000072479248 36.34700012207031,-2.365000009536743 C36.34700012207031,-2.365000009536743 26.22800064086914,-37.90299987792969 26.22800064086914,-37.90299987792969 C26.038000106811523,-39.702999114990234 26.183000564575195,-42.757999420166016 29.985000610351562,-43.891998291015625 C29.733999252319336,-43.95899963378906 39.77399826049805,-46.78499984741211 39.77399826049805,-46.78499984741211 C39.77399826049805,-46.78499984741211 37.85300064086914,-63.71200180053711 37.85300064086914,-63.71200180053711 C37.85300064086914,-63.71200180053711 20.208999633789062,-58.61899948120117 20.208999633789062,-58.61899948120117 C16.885000228881836,-57.7599983215332 13.652999877929688,-56.74300003051758 10.487000465393066,-55.97700119018555 C10.487000465393066,-55.97700119018555 4.11899995803833,-78.4010009765625 4.11899995803833,-78.4010009765625 C4.11899995803833,-78.4010009765625 -9.404000282287598,-74.625 -9.404000282287598,-74.625 C-9.404000282287598,-74.625 -2.9690001010894775,-52.45199966430664 -2.9690001010894775,-52.45199966430664 C-6.703000068664551,-51.569000244140625 -10.345999717712402,-50.527000427246094 -13.73799991607666,-49.417999267578125 C-13.73799991607666,-49.417999267578125 -20.08099937438965,-71.43199920654297 -20.08099937438965,-71.43199920654297 C-20.08099937438965,-71.43199920654297 -33.60499954223633,-67.65599822998047 -33.60499954223633,-67.65599822998047 C-33.60499954223633,-67.65599822998047 -27.236000061035156,-45.23099899291992 -27.236000061035156,-45.23099899291992 C-49.654998779296875,-37.38100051879883 -63.85599899291992,-27.059999465942383 -59.74700164794922,-5.241000175476074 C-56.387001037597656,12.340999603271484 -46.10599899291992,17.652000427246094 -32.3849983215332,17.158000946044922 C-39.10599899291992,23.15999984741211 -41.89500045776367,31.56100082397461 -37.422000885009766,42.98400115966797z M-32.23400115966797,-10.515999794006348 C-37.027000427246094,-27.270999908447266 -7.763000011444092,-33.555999755859375 1.4559999704360962,-36.33300018310547 C1.4559999704360962,-36.33300018310547 9.907999992370605,-6.624000072479248 9.907999992370605,-6.624000072479248 C0.6890000104904175,-3.8469998836517334 -27.232999801635742,6.9679999351501465 -32.23400115966797,-10.515999794006348z M-13.934000015258789,29.635000228881836 C-18.309999465942383,14.336999893188477 6.171999931335449,9.326000213623047 13.776000022888184,7.059000015258789 C13.776000022888184,7.059000015258789 21.486000061035156,34.01300048828125 21.486000061035156,34.01300048828125 C13.883000373840332,36.28099822998047 -9.350000381469727,45.6619987487793 -13.934000015258789,29.635000228881836z"></path></g></g><g transform="matrix(1.2589588165283203,0.630577027797699,-0.630577027797699,1.2589588165283203,1295.5260009765625,333.60400390625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(45,55,75)" fill-opacity="1" d=" M0,-82.89800262451172 C45.784000396728516,-82.89800262451172 82.89800262451172,-45.784000396728516 82.89800262451172,0 C82.89800262451172,45.784000396728516 45.784000396728516,82.89800262451172 0,82.89800262451172 C-45.784000396728516,82.89800262451172 -82.89800262451172,45.784000396728516 -82.89800262451172,0 C-82.89800262451172,-45.784000396728516 -45.784000396728516,-82.89800262451172 0,-82.89800262451172z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(45,55,75)" fill-opacity="1" d=" M12.444000244140625,-4.663000106811523 C12.444000244140625,-4.663000106811523 20.371000289916992,-18.11199951171875 20.371000289916992,-18.11199951171875 C20.371000289916992,-18.11199951171875 41.73500061035156,15.163000106811523 41.73500061035156,15.163000106811523 C41.73500061035156,15.163000106811523 41.744998931884766,21.548999786376953 41.744998931884766,21.548999786376953 C41.744998931884766,21.548999786376953 41.67499923706055,-22.393999099731445 41.67499923706055,-22.393999099731445 C41.625,-23.468000411987305 41.05400085449219,-24.451000213623047 40.14400100708008,-25.030000686645508 C40.14400100708008,-25.030000686645508 1.680999994277954,-47.154998779296875 1.680999994277954,-47.154998779296875 C0.781000018119812,-47.59700012207031 -0.36000001430511475,-47.59199905395508 -1.2580000162124634,-47.14099884033203 C-1.378999948501587,-47.08000183105469 -1.4930000305175781,-47.013999938964844 -1.6019999980926514,-46.94200134277344 C-1.6019999980926514,-46.94200134277344 -1.7359999418258667,-46.858001708984375 -1.7359999418258667,-46.858001708984375 C-1.7359999418258667,-46.858001708984375 -39.07099914550781,-25.222000122070312 -39.07099914550781,-25.222000122070312 C-39.07099914550781,-25.222000122070312 -39.215999603271484,-25.156999588012695 -39.215999603271484,-25.156999588012695 C-39.402000427246094,-25.070999145507812 -39.590999603271484,-24.961999893188477 -39.768001556396484,-24.834999084472656 C-40.47600173950195,-24.32699966430664 -40.94499969482422,-23.57699966430664 -41.09700012207031,-22.735000610351562 C-41.119998931884766,-22.60700035095215 -41.137001037597656,-22.47800064086914 -41.14500045776367,-22.347000122070312 C-41.14500045776367,-22.347000122070312 -41.08599853515625,13.463000297546387 -41.08599853515625,13.463000297546387 C-41.08599853515625,13.463000297546387 -21.187000274658203,-17.381000518798828 -21.187000274658203,-17.381000518798828 C-18.68199920654297,-21.47100067138672 -13.222000122070312,-22.788000106811523 -8.154999732971191,-22.715999603271484 C-8.154999732971191,-22.715999603271484 -2.2079999446868896,-22.55900001525879 -2.2079999446868896,-22.55900001525879 C-2.2079999446868896,-22.55900001525879 -37.25,33.638999938964844 -37.25,33.638999938964844 C-37.25,33.638999938964844 -33.119998931884766,36.018001556396484 -33.119998931884766,36.018001556396484 C-33.119998931884766,36.018001556396484 2.3429999351501465,-22.50200080871582 2.3429999351501465,-22.50200080871582 C2.3429999351501465,-22.50200080871582 18.01799964904785,-22.55900001525879 18.01799964904785,-22.55900001525879 C18.01799964904785,-22.55900001525879 -17.354000091552734,37.4379997253418 -17.354000091552734,37.4379997253418 C-17.354000091552734,37.4379997253418 -2.614000082015991,45.915000915527344 -2.614000082015991,45.915000915527344 C-2.614000082015991,45.915000915527344 -0.8529999852180481,46.92900085449219 -0.8529999852180481,46.92900085449219 C-0.1080000028014183,47.23099899291992 0.7710000276565552,47.244998931884766 1.5219999551773071,46.9739990234375 C1.5219999551773071,46.9739990234375 40.5260009765625,24.371999740600586 40.5260009765625,24.371999740600586 C40.5260009765625,24.371999740600586 33.069000244140625,28.69300079345703 33.069000244140625,28.69300079345703 C33.069000244140625,28.69300079345703 12.444000244140625,-4.663000106811523 12.444000244140625,-4.663000106811523z M15.468999862670898,38.893001556396484 C15.468999862670898,38.893001556396484 0.5809999704360962,15.526000022888184 0.5809999704360962,15.526000022888184 C0.5809999704360962,15.526000022888184 9.668999671936035,0.10499999672174454 9.668999671936035,0.10499999672174454 C9.668999671936035,0.10499999672174454 29.22100067138672,30.92300033569336 29.22100067138672,30.92300033569336 C29.22100067138672,30.92300033569336 15.468999862670898,38.893001556396484 15.468999862670898,38.893001556396484z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(40,160,240)" fill-opacity="1" d=" M0.5809999704360962,15.527000427246094 C0.5809999704360962,15.527000427246094 15.468999862670898,38.893001556396484 15.468999862670898,38.893001556396484 C15.468999862670898,38.893001556396484 29.22100067138672,30.92300033569336 29.22100067138672,30.92300033569336 C29.22100067138672,30.92300033569336 9.668999671936035,0.10499999672174454 9.668999671936035,0.10499999672174454 C9.668999671936035,0.10499999672174454 0.5809999704360962,15.527000427246094 0.5809999704360962,15.527000427246094z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(40,160,240)" fill-opacity="1" d=" M41.744998931884766,21.548999786376953 C41.744998931884766,21.548999786376953 41.73500061035156,15.163000106811523 41.73500061035156,15.163000106811523 C41.73500061035156,15.163000106811523 20.371000289916992,-18.11199951171875 20.371000289916992,-18.11199951171875 C20.371000289916992,-18.11199951171875 12.444999694824219,-4.663000106811523 12.444999694824219,-4.663000106811523 C12.444999694824219,-4.663000106811523 33.069000244140625,28.69300079345703 33.069000244140625,28.69300079345703 C33.069000244140625,28.69300079345703 40.5260009765625,24.371999740600586 40.5260009765625,24.371999740600586 C41.25699996948242,23.777999877929688 41.70000076293945,22.9060001373291 41.74599838256836,21.96500015258789 C41.74599838256836,21.96500015258789 41.744998931884766,21.548999786376953 41.744998931884766,21.548999786376953z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-47.78099822998047,27.57200050354004 C-47.78099822998047,27.57200050354004 -37.250999450683594,33.638999938964844 -37.250999450683594,33.638999938964844 C-37.250999450683594,33.638999938964844 -2.2079999446868896,-22.55900001525879 -2.2079999446868896,-22.55900001525879 C-2.2079999446868896,-22.55900001525879 -8.156000137329102,-22.716999053955078 -8.156000137329102,-22.716999053955078 C-13.222999572753906,-22.788999557495117 -18.680999755859375,-21.47100067138672 -21.187000274658203,-17.381000518798828 C-21.187000274658203,-17.381000518798828 -41.08700180053711,13.461999893188477 -41.08700180053711,13.461999893188477 C-41.08700180053711,13.461999893188477 -47.78099822998047,23.749000549316406 -47.78099822998047,23.749000549316406 C-47.78099822998047,23.749000549316406 -47.78099822998047,27.57200050354004 -47.78099822998047,27.57200050354004 C-47.78099822998047,27.57200050354004 -47.78099822998047,27.57200050354004 -47.78099822998047,27.57200050354004z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M18.017000198364258,-22.55900001525879 C18.017000198364258,-22.55900001525879 2.3429999351501465,-22.50200080871582 2.3429999351501465,-22.50200080871582 C2.3429999351501465,-22.50200080871582 -33.119998931884766,36.018001556396484 -33.119998931884766,36.018001556396484 C-33.119998931884766,36.018001556396484 -20.725000381469727,43.15399932861328 -20.725000381469727,43.15399932861328 C-20.725000381469727,43.15399932861328 -17.354000091552734,37.4379997253418 -17.354000091552734,37.4379997253418 C-17.354000091552734,37.4379997253418 18.017000198364258,-22.55900001525879 18.017000198364258,-22.55900001525879z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(150,190,220)" fill-opacity="1" d=" M48.349998474121094,-22.639999389648438 C48.21900177001953,-25.917999267578125 46.444000244140625,-28.91900062561035 43.66400146484375,-30.666000366210938 C43.66400146484375,-30.666000366210938 4.696000099182129,-53.07500076293945 4.696000099182129,-53.07500076293945 C1.9459999799728394,-54.459999084472656 -1.4889999628067017,-54.46200180053711 -4.24399995803833,-53.07600021362305 C-4.570000171661377,-52.9119987487793 -42.138999938964844,-31.12299919128418 -42.138999938964844,-31.12299919128418 C-42.659000396728516,-30.874000549316406 -43.15999984741211,-30.57699966430664 -43.63100051879883,-30.239999771118164 C-46.112998962402344,-28.461000442504883 -47.625999450683594,-25.69700050354004 -47.78099822998047,-22.65999984741211 C-47.78099822998047,-22.65999984741211 -47.78099822998047,23.75 -47.78099822998047,23.75 C-47.78099822998047,23.75 -41.08700180053711,13.463000297546387 -41.08700180053711,13.463000297546387 C-41.08700180053711,13.463000297546387 -41.14500045776367,-22.34600067138672 -41.14500045776367,-22.34600067138672 C-41.137001037597656,-22.476999282836914 -41.12099838256836,-22.606000900268555 -41.097999572753906,-22.732999801635742 C-40.946998596191406,-23.576000213623047 -40.47600173950195,-24.32699966430664 -39.768001556396484,-24.834999084472656 C-39.590999603271484,-24.961999893188477 -1.3799999952316284,-47.08000183105469 -1.2580000162124634,-47.14099884033203 C-0.36000001430511475,-47.59199905395508 0.781000018119812,-47.59700012207031 1.6799999475479126,-47.154998779296875 C1.6799999475479126,-47.154998779296875 40.14400100708008,-25.030000686645508 40.14400100708008,-25.030000686645508 C41.05400085449219,-24.451000213623047 41.624000549316406,-23.468000411987305 41.67499923706055,-22.393999099731445 C41.67499923706055,-22.393999099731445 41.67499923706055,21.96500015258789 41.67499923706055,21.96500015258789 C41.62799835205078,22.9060001373291 41.25699996948242,23.777999877929688 40.525001525878906,24.371999740600586 C40.525001525878906,24.371999740600586 33.06800079345703,28.69300079345703 33.06800079345703,28.69300079345703 C33.06800079345703,28.69300079345703 29.22100067138672,30.92300033569336 29.22100067138672,30.92300033569336 C29.22100067138672,30.92300033569336 15.468000411987305,38.893001556396484 15.468000411987305,38.893001556396484 C15.468000411987305,38.893001556396484 1.5210000276565552,46.97600173950195 1.5210000276565552,46.97600173950195 C0.7699999809265137,47.24700164794922 -0.1080000028014183,47.231998443603516 -0.8529999852180481,46.92900085449219 C-0.8529999852180481,46.92900085449219 -17.354000091552734,37.4379997253418 -17.354000091552734,37.4379997253418 C-17.354000091552734,37.4379997253418 -20.725000381469727,43.15399932861328 -20.725000381469727,43.15399932861328 C-20.725000381469727,43.15399932861328 -5.895999908447266,51.69300079345703 -5.895999908447266,51.69300079345703 C-5.406000137329102,51.97100067138672 -4.9679999351501465,52.21799850463867 -4.610000133514404,52.41999816894531 C-4.054999828338623,52.731998443603516 -3.677000045776367,52.93899917602539 -3.5429999828338623,53.00299835205078 C-2.489000082015991,53.51499938964844 -0.9729999899864197,53.81399917602539 0.39399999380111694,53.81399917602539 C1.6469999551773071,53.81399917602539 2.868000030517578,53.58300018310547 4.02400016784668,53.130001068115234 C4.02400016784668,53.130001068115234 44.534000396728516,29.67099952697754 44.534000396728516,29.67099952697754 C46.85900115966797,27.8700008392334 48.22700119018555,25.152999877929688 48.349998474121094,22.209999084472656 C48.349998474121094,22.209999084472656 48.349998474121094,-22.639999389648438 48.349998474121094,-22.639999389648438z"></path></g></g><g transform="matrix(0.10895766317844391,-0.40663546323776245,0.40663546323776245,0.10895766317844391,633.9244384765625,975.4229736328125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(45,55,75)" fill-opacity="1" d=" M0,-82.89800262451172 C45.784000396728516,-82.89800262451172 82.89800262451172,-45.784000396728516 82.89800262451172,0 C82.89800262451172,45.784000396728516 45.784000396728516,82.89800262451172 0,82.89800262451172 C-45.784000396728516,82.89800262451172 -82.89800262451172,45.784000396728516 -82.89800262451172,0 C-82.89800262451172,-45.784000396728516 -45.784000396728516,-82.89800262451172 0,-82.89800262451172z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(45,55,75)" fill-opacity="1" d=" M12.444000244140625,-4.663000106811523 C12.444000244140625,-4.663000106811523 20.371000289916992,-18.11199951171875 20.371000289916992,-18.11199951171875 C20.371000289916992,-18.11199951171875 41.73500061035156,15.163000106811523 41.73500061035156,15.163000106811523 C41.73500061035156,15.163000106811523 41.744998931884766,21.548999786376953 41.744998931884766,21.548999786376953 C41.744998931884766,21.548999786376953 41.67499923706055,-22.393999099731445 41.67499923706055,-22.393999099731445 C41.625,-23.468000411987305 41.05400085449219,-24.451000213623047 40.14400100708008,-25.030000686645508 C40.14400100708008,-25.030000686645508 1.680999994277954,-47.154998779296875 1.680999994277954,-47.154998779296875 C0.781000018119812,-47.59700012207031 -0.36000001430511475,-47.59199905395508 -1.2580000162124634,-47.14099884033203 C-1.378999948501587,-47.08000183105469 -1.4930000305175781,-47.013999938964844 -1.6019999980926514,-46.94200134277344 C-1.6019999980926514,-46.94200134277344 -1.7359999418258667,-46.858001708984375 -1.7359999418258667,-46.858001708984375 C-1.7359999418258667,-46.858001708984375 -39.07099914550781,-25.222000122070312 -39.07099914550781,-25.222000122070312 C-39.07099914550781,-25.222000122070312 -39.215999603271484,-25.156999588012695 -39.215999603271484,-25.156999588012695 C-39.402000427246094,-25.070999145507812 -39.590999603271484,-24.961999893188477 -39.768001556396484,-24.834999084472656 C-40.47600173950195,-24.32699966430664 -40.94499969482422,-23.57699966430664 -41.09700012207031,-22.735000610351562 C-41.119998931884766,-22.60700035095215 -41.137001037597656,-22.47800064086914 -41.14500045776367,-22.347000122070312 C-41.14500045776367,-22.347000122070312 -41.08599853515625,13.463000297546387 -41.08599853515625,13.463000297546387 C-41.08599853515625,13.463000297546387 -21.187000274658203,-17.381000518798828 -21.187000274658203,-17.381000518798828 C-18.68199920654297,-21.47100067138672 -13.222000122070312,-22.788000106811523 -8.154999732971191,-22.715999603271484 C-8.154999732971191,-22.715999603271484 -2.2079999446868896,-22.55900001525879 -2.2079999446868896,-22.55900001525879 C-2.2079999446868896,-22.55900001525879 -37.25,33.638999938964844 -37.25,33.638999938964844 C-37.25,33.638999938964844 -33.119998931884766,36.018001556396484 -33.119998931884766,36.018001556396484 C-33.119998931884766,36.018001556396484 2.3429999351501465,-22.50200080871582 2.3429999351501465,-22.50200080871582 C2.3429999351501465,-22.50200080871582 18.01799964904785,-22.55900001525879 18.01799964904785,-22.55900001525879 C18.01799964904785,-22.55900001525879 -17.354000091552734,37.4379997253418 -17.354000091552734,37.4379997253418 C-17.354000091552734,37.4379997253418 -2.614000082015991,45.915000915527344 -2.614000082015991,45.915000915527344 C-2.614000082015991,45.915000915527344 -0.8529999852180481,46.92900085449219 -0.8529999852180481,46.92900085449219 C-0.1080000028014183,47.23099899291992 0.7710000276565552,47.244998931884766 1.5219999551773071,46.9739990234375 C1.5219999551773071,46.9739990234375 40.5260009765625,24.371999740600586 40.5260009765625,24.371999740600586 C40.5260009765625,24.371999740600586 33.069000244140625,28.69300079345703 33.069000244140625,28.69300079345703 C33.069000244140625,28.69300079345703 12.444000244140625,-4.663000106811523 12.444000244140625,-4.663000106811523z M15.468999862670898,38.893001556396484 C15.468999862670898,38.893001556396484 0.5809999704360962,15.526000022888184 0.5809999704360962,15.526000022888184 C0.5809999704360962,15.526000022888184 9.668999671936035,0.10499999672174454 9.668999671936035,0.10499999672174454 C9.668999671936035,0.10499999672174454 29.22100067138672,30.92300033569336 29.22100067138672,30.92300033569336 C29.22100067138672,30.92300033569336 15.468999862670898,38.893001556396484 15.468999862670898,38.893001556396484z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(40,160,240)" fill-opacity="1" d=" M0.5809999704360962,15.527000427246094 C0.5809999704360962,15.527000427246094 15.468999862670898,38.893001556396484 15.468999862670898,38.893001556396484 C15.468999862670898,38.893001556396484 29.22100067138672,30.92300033569336 29.22100067138672,30.92300033569336 C29.22100067138672,30.92300033569336 9.668999671936035,0.10499999672174454 9.668999671936035,0.10499999672174454 C9.668999671936035,0.10499999672174454 0.5809999704360962,15.527000427246094 0.5809999704360962,15.527000427246094z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(40,160,240)" fill-opacity="1" d=" M41.744998931884766,21.548999786376953 C41.744998931884766,21.548999786376953 41.73500061035156,15.163000106811523 41.73500061035156,15.163000106811523 C41.73500061035156,15.163000106811523 20.371000289916992,-18.11199951171875 20.371000289916992,-18.11199951171875 C20.371000289916992,-18.11199951171875 12.444999694824219,-4.663000106811523 12.444999694824219,-4.663000106811523 C12.444999694824219,-4.663000106811523 33.069000244140625,28.69300079345703 33.069000244140625,28.69300079345703 C33.069000244140625,28.69300079345703 40.5260009765625,24.371999740600586 40.5260009765625,24.371999740600586 C41.25699996948242,23.777999877929688 41.70000076293945,22.9060001373291 41.74599838256836,21.96500015258789 C41.74599838256836,21.96500015258789 41.744998931884766,21.548999786376953 41.744998931884766,21.548999786376953z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-47.78099822998047,27.57200050354004 C-47.78099822998047,27.57200050354004 -37.250999450683594,33.638999938964844 -37.250999450683594,33.638999938964844 C-37.250999450683594,33.638999938964844 -2.2079999446868896,-22.55900001525879 -2.2079999446868896,-22.55900001525879 C-2.2079999446868896,-22.55900001525879 -8.156000137329102,-22.716999053955078 -8.156000137329102,-22.716999053955078 C-13.222999572753906,-22.788999557495117 -18.680999755859375,-21.47100067138672 -21.187000274658203,-17.381000518798828 C-21.187000274658203,-17.381000518798828 -41.08700180053711,13.461999893188477 -41.08700180053711,13.461999893188477 C-41.08700180053711,13.461999893188477 -47.78099822998047,23.749000549316406 -47.78099822998047,23.749000549316406 C-47.78099822998047,23.749000549316406 -47.78099822998047,27.57200050354004 -47.78099822998047,27.57200050354004 C-47.78099822998047,27.57200050354004 -47.78099822998047,27.57200050354004 -47.78099822998047,27.57200050354004z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M18.017000198364258,-22.55900001525879 C18.017000198364258,-22.55900001525879 2.3429999351501465,-22.50200080871582 2.3429999351501465,-22.50200080871582 C2.3429999351501465,-22.50200080871582 -33.119998931884766,36.018001556396484 -33.119998931884766,36.018001556396484 C-33.119998931884766,36.018001556396484 -20.725000381469727,43.15399932861328 -20.725000381469727,43.15399932861328 C-20.725000381469727,43.15399932861328 -17.354000091552734,37.4379997253418 -17.354000091552734,37.4379997253418 C-17.354000091552734,37.4379997253418 18.017000198364258,-22.55900001525879 18.017000198364258,-22.55900001525879z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(150,190,220)" fill-opacity="1" d=" M48.349998474121094,-22.639999389648438 C48.21900177001953,-25.917999267578125 46.444000244140625,-28.91900062561035 43.66400146484375,-30.666000366210938 C43.66400146484375,-30.666000366210938 4.696000099182129,-53.07500076293945 4.696000099182129,-53.07500076293945 C1.9459999799728394,-54.459999084472656 -1.4889999628067017,-54.46200180053711 -4.24399995803833,-53.07600021362305 C-4.570000171661377,-52.9119987487793 -42.138999938964844,-31.12299919128418 -42.138999938964844,-31.12299919128418 C-42.659000396728516,-30.874000549316406 -43.15999984741211,-30.57699966430664 -43.63100051879883,-30.239999771118164 C-46.112998962402344,-28.461000442504883 -47.625999450683594,-25.69700050354004 -47.78099822998047,-22.65999984741211 C-47.78099822998047,-22.65999984741211 -47.78099822998047,23.75 -47.78099822998047,23.75 C-47.78099822998047,23.75 -41.08700180053711,13.463000297546387 -41.08700180053711,13.463000297546387 C-41.08700180053711,13.463000297546387 -41.14500045776367,-22.34600067138672 -41.14500045776367,-22.34600067138672 C-41.137001037597656,-22.476999282836914 -41.12099838256836,-22.606000900268555 -41.097999572753906,-22.732999801635742 C-40.946998596191406,-23.576000213623047 -40.47600173950195,-24.32699966430664 -39.768001556396484,-24.834999084472656 C-39.590999603271484,-24.961999893188477 -1.3799999952316284,-47.08000183105469 -1.2580000162124634,-47.14099884033203 C-0.36000001430511475,-47.59199905395508 0.781000018119812,-47.59700012207031 1.6799999475479126,-47.154998779296875 C1.6799999475479126,-47.154998779296875 40.14400100708008,-25.030000686645508 40.14400100708008,-25.030000686645508 C41.05400085449219,-24.451000213623047 41.624000549316406,-23.468000411987305 41.67499923706055,-22.393999099731445 C41.67499923706055,-22.393999099731445 41.67499923706055,21.96500015258789 41.67499923706055,21.96500015258789 C41.62799835205078,22.9060001373291 41.25699996948242,23.777999877929688 40.525001525878906,24.371999740600586 C40.525001525878906,24.371999740600586 33.06800079345703,28.69300079345703 33.06800079345703,28.69300079345703 C33.06800079345703,28.69300079345703 29.22100067138672,30.92300033569336 29.22100067138672,30.92300033569336 C29.22100067138672,30.92300033569336 15.468000411987305,38.893001556396484 15.468000411987305,38.893001556396484 C15.468000411987305,38.893001556396484 1.5210000276565552,46.97600173950195 1.5210000276565552,46.97600173950195 C0.7699999809265137,47.24700164794922 -0.1080000028014183,47.231998443603516 -0.8529999852180481,46.92900085449219 C-0.8529999852180481,46.92900085449219 -17.354000091552734,37.4379997253418 -17.354000091552734,37.4379997253418 C-17.354000091552734,37.4379997253418 -20.725000381469727,43.15399932861328 -20.725000381469727,43.15399932861328 C-20.725000381469727,43.15399932861328 -5.895999908447266,51.69300079345703 -5.895999908447266,51.69300079345703 C-5.406000137329102,51.97100067138672 -4.9679999351501465,52.21799850463867 -4.610000133514404,52.41999816894531 C-4.054999828338623,52.731998443603516 -3.677000045776367,52.93899917602539 -3.5429999828338623,53.00299835205078 C-2.489000082015991,53.51499938964844 -0.9729999899864197,53.81399917602539 0.39399999380111694,53.81399917602539 C1.6469999551773071,53.81399917602539 2.868000030517578,53.58300018310547 4.02400016784668,53.130001068115234 C4.02400016784668,53.130001068115234 44.534000396728516,29.67099952697754 44.534000396728516,29.67099952697754 C46.85900115966797,27.8700008392334 48.22700119018555,25.152999877929688 48.349998474121094,22.209999084472656 C48.349998474121094,22.209999084472656 48.349998474121094,-22.639999389648438 48.349998474121094,-22.639999389648438z"></path></g></g><g transform="matrix(1,0,0,1,117,825)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,144,255)" fill-opacity="1" d=" M297.3900146484375,-230.5570068359375 C251.79600524902344,-230.5570068359375 214.49200439453125,-267.8599853515625 214.49200439453125,-313.8689880371094 C214.906005859375,-359.4630126953125 251.79600524902344,-396.7669982910156 297.80499267578125,-396.3529968261719 C343.39898681640625,-395.9389953613281 380.2879943847656,-359.04901123046875 380.2879943847656,-312.6260070800781 C379.8739929199219,-267.4469909667969 342.9840087890625,-230.5570068359375 297.3900146484375,-230.5570068359375z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M305.2650146484375,-323.40301513671875 C305.2650146484375,-323.40301513671875 302.77801513671875,-310.1390075683594 302.77801513671875,-310.1390075683594 C302.77801513671875,-310.1390075683594 326.40399169921875,-306.822998046875 326.40399169921875,-306.822998046875 C326.40399169921875,-306.822998046875 324.7460021972656,-300.6059875488281 324.7460021972656,-300.6059875488281 C324.7460021972656,-300.6059875488281 301.5350036621094,-303.9219970703125 301.5350036621094,-303.9219970703125 C299.87701416015625,-298.53399658203125 299.04901123046875,-292.7309875488281 296.97601318359375,-287.7569885253906 C294.90399169921875,-281.9540100097656 292.83099365234375,-276.1510009765625 290.343994140625,-270.76300048828125 C287.02801513671875,-263.7170104980469 281.2250061035156,-258.7430114746094 273.3500061035156,-257.4989929199219 C268.7909851074219,-256.6700134277344 263.8160095214844,-257.0849914550781 260.08599853515625,-259.9859924316406 C258.8429870605469,-260.81500244140625 257.5989990234375,-262.4729919433594 257.5989990234375,-263.7170104980469 C257.5989990234375,-265.375 258.4280090332031,-267.4469909667969 259.6709899902344,-268.2760009765625 C260.5,-268.69000244140625 262.572998046875,-268.2760009765625 263.8160095214844,-267.8609924316406 C265.0589904785156,-266.6180114746094 266.3030090332031,-264.9599914550781 267.1319885253906,-263.302001953125 C269.6189880371094,-259.9859924316406 272.93499755859375,-259.5719909667969 276.2510070800781,-262.0589904785156 C279.9809875488281,-265.375 282.0539855957031,-269.9339904785156 283.2969970703125,-274.4930114746094 C285.78399658203125,-284.4410095214844 288.27099609375,-293.9750061035156 290.343994140625,-303.9219970703125 C290.343994140625,-303.9219970703125 290.343994140625,-305.5799865722656 290.343994140625,-305.5799865722656 C290.343994140625,-305.5799865722656 268.3760070800781,-308.89599609375 268.3760070800781,-308.89599609375 C268.3760070800781,-308.89599609375 269.2049865722656,-315.1130065917969 269.2049865722656,-315.1130065917969 C269.2049865722656,-315.1130065917969 292.00201416015625,-311.7969970703125 292.00201416015625,-311.7969970703125 C292.00201416015625,-311.7969970703125 294.90301513671875,-324.64599609375 294.90301513671875,-324.64599609375 C294.90301513671875,-324.64599609375 271.2770080566406,-328.37701416015625 271.2770080566406,-328.37701416015625 C271.2770080566406,-328.37701416015625 272.1059875488281,-335.0090026855469 272.1059875488281,-335.0090026855469 C272.1059875488281,-335.0090026855469 296.5610046386719,-331.6929931640625 296.5610046386719,-331.6929931640625 C297.3900146484375,-334.17999267578125 297.80499267578125,-336.25201416015625 298.6340026855469,-338.32501220703125 C300.7070007324219,-345.7860107421875 302.77801513671875,-353.2460021972656 307.75201416015625,-359.87799072265625 C312.72601318359375,-366.510009765625 318.52899169921875,-370.656005859375 327.2330017089844,-370.2409973144531 C330.9639892578125,-370.2409973144531 334.6940002441406,-368.99700927734375 337.1809997558594,-366.09600830078125 C337.59600830078125,-365.6820068359375 338.42498779296875,-364.85198974609375 338.42498779296875,-364.02301025390625 C338.42498779296875,-362.364990234375 338.42498779296875,-360.2919921875 337.1809997558594,-359.04901123046875 C335.52301025390625,-357.8059997558594 333.45098876953125,-358.2200012207031 331.7929992675781,-359.87799072265625 C330.54901123046875,-361.1210021972656 329.7200012207031,-362.3659973144531 328.47698974609375,-363.6090087890625 C325.989990234375,-366.92498779296875 322.2590026855469,-367.3389892578125 319.3580017089844,-364.43798828125 C317.2850036621094,-362.364990234375 315.2130126953125,-359.4630126953125 313.9700012207031,-356.56201171875 C311.0679931640625,-347.8580017089844 308.9949951171875,-338.739013671875 306.093994140625,-329.6199951171875 C306.093994140625,-329.6199951171875 328.8909912109375,-326.3039855957031 328.8909912109375,-326.3039855957031 C328.8909912109375,-326.3039855957031 327.2330017089844,-320.0870056152344 327.2330017089844,-320.0870056152344 C327.2330017089844,-320.0870056152344 305.2650146484375,-323.40301513671875 305.2650146484375,-323.40301513671875z"></path></g></g><g transform="matrix(0.9135454297065735,0.4067366421222687,-0.4067366421222687,0.9135454297065735,1013.264404296875,583.0216064453125)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,439.9750061035156,103.81800079345703)"><path fill="rgb(78,103,128)" fill-opacity="0.77" d=" M78.72164154052734,-286.6512451171875 C84.93236541748047,-288.95086669921875 89.99801635742188,-285.44085693359375 90.02635955810547,-278.818115234375 C90.02635955810547,-278.818115234375 90.92363739013672,-69.18189239501953 90.92363739013672,-69.18189239501953 C90.95198059082031,-62.55915069580078 85.91969299316406,-55.34946823120117 79.69335174560547,-53.09244155883789 C79.69335174560547,-53.09244155883789 -81.19335174560547,5.2284417152404785 -81.19335174560547,5.2284417152404785 C-87.41969299316406,7.485468864440918 -92.44039916992188,3.940911054611206 -92.39778900146484,-2.6817517280578613 C-92.39778900146484,-2.6817517280578613 -91.05220794677734,-211.8182373046875 -91.05220794677734,-211.8182373046875 C-91.00959777832031,-218.44090270996094 -85.93236541748047,-225.68511962890625 -79.72164154052734,-227.98475646972656 C-79.72164154052734,-227.98475646972656 78.72164154052734,-286.6512451171875 78.72164154052734,-286.6512451171875z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(216,216,216)" stroke-opacity="1" stroke-width="0" d=" M78.72164154052734,-286.6512451171875 C84.93236541748047,-288.95086669921875 89.99801635742188,-285.44085693359375 90.02635955810547,-278.818115234375 C90.02635955810547,-278.818115234375 90.92363739013672,-69.18189239501953 90.92363739013672,-69.18189239501953 C90.95198059082031,-62.55915069580078 85.91969299316406,-55.34946823120117 79.69335174560547,-53.09244155883789 C79.69335174560547,-53.09244155883789 -81.19335174560547,5.2284417152404785 -81.19335174560547,5.2284417152404785 C-87.41969299316406,7.485468864440918 -92.44039916992188,3.940911054611206 -92.39778900146484,-2.6817517280578613 C-92.39778900146484,-2.6817517280578613 -91.05220794677734,-211.8182373046875 -91.05220794677734,-211.8182373046875 C-91.00959777832031,-218.44090270996094 -85.93236541748047,-225.68511962890625 -79.72164154052734,-227.98475646972656 C-79.72164154052734,-227.98475646972656 78.72164154052734,-286.6512451171875 78.72164154052734,-286.6512451171875z"></path></g><g opacity="1" transform="matrix(1,0,0,1,400.0920104980469,198.61700439453125)"><path fill="rgb(105,115,133)" fill-opacity="1" d=" M35.09199905395508,-145.11700439453125 C35.09199905395508,-145.11700439453125 34.59199905395508,-131.38299560546875 34.59199905395508,-131.38299560546875 C34.59199905395508,-131.38299560546875 -37.09199905395508,-108.88300323486328 -37.09199905395508,-108.88300323486328 C-37.09199905395508,-108.88300323486328 -35.59199905395508,-121.61699676513672 -35.59199905395508,-121.61699676513672 C-35.59199905395508,-121.61699676513672 35.09199905395508,-145.11700439453125 35.09199905395508,-145.11700439453125z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(216,216,216)" stroke-opacity="1" stroke-width="0" d=" M35.09199905395508,-145.11700439453125 C35.09199905395508,-145.11700439453125 34.59199905395508,-131.38299560546875 34.59199905395508,-131.38299560546875 C34.59199905395508,-131.38299560546875 -37.09199905395508,-108.88300323486328 -37.09199905395508,-108.88300323486328 C-37.09199905395508,-108.88300323486328 -35.59199905395508,-121.61699676513672 -35.59199905395508,-121.61699676513672 C-35.59199905395508,-121.61699676513672 35.09199905395508,-145.11700439453125 35.09199905395508,-145.11700439453125z"></path></g><g opacity="1" transform="matrix(0.4864400029182434,0,0,0.4864400029182434,460.18267822265625,-10.037101745605469)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(32,129,226)" fill-opacity="1" d=" M88.2959976196289,-156.4759979248047 C84.93800354003906,-84.20800018310547 33.54499816894531,-7.117000102996826 -26.179000854492188,16.58799934387207 C-92.32599639892578,42.84199905395508 -165.86199951171875,30.915000915527344 -167.37899780273438,-46.49300003051758 C-169.04400634765625,-131.48699951171875 -101.10700225830078,-215.7740020751953 -30.291000366210938,-237.031005859375 C37.8849983215332,-257.4949951171875 91.36000061035156,-222.4199981689453 88.2959976196289,-156.4759979248047z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-26.586000442504883,-186.99400329589844 C-26.586000442504883,-186.99400329589844 -42.00400161743164,-181.34100341796875 -42.00400161743164,-181.34100341796875 C-42.00400161743164,-181.34100341796875 -42.00400161743164,-168.4929962158203 -42.00400161743164,-168.4929962158203 C-42.00400161743164,-168.4929962158203 -61.02000045776367,-165.92300415039062 -61.02000045776367,-165.92300415039062 C-61.02000045776367,-165.92300415039062 -46.630001068115234,-140.74000549316406 -46.11600112915039,-124.29399871826172 C-45.60200119018555,-107.8479995727539 -61.02000045776367,-75.98400115966797 -61.02000045776367,-75.98400115966797 C-61.02000045776367,-75.98400115966797 -42.518001556396484,-82.1510009765625 -42.518001556396484,-82.1510009765625 C-42.518001556396484,-82.1510009765625 -42.518001556396484,-69.81700134277344 -42.518001556396484,-69.81700134277344 C-42.518001556396484,-69.81700134277344 -55.36600112915039,-63.13600158691406 -64.10299682617188,-61.08000183105469 C-69.00700378417969,-59.92599868774414 -70.2699966430664,-67.76200103759766 -72.32599639892578,-72.9010009765625 C-80.54900360107422,-70.33100128173828 -113.95500183105469,-57.99599838256836 -113.95500183105469,-57.99599838256836 C-113.95500183105469,-57.99599838256836 -106.24600219726562,-20.479999542236328 -81.5770034790039,-25.618999481201172 C-56.90800094604492,-30.757999420166016 11.958999633789062,-58.5099983215332 11.958999633789062,-58.5099983215332 C11.958999633789062,-58.5099983215332 26.349000930786133,-94.48600006103516 29.433000564575195,-99.625 C32.516998291015625,-104.76399993896484 46.393001556396484,-114.52899932861328 46.393001556396484,-114.52899932861328 C46.393001556396484,-114.52899932861328 45.87900161743164,-123.77999877929688 45.87900161743164,-123.77999877929688 C45.87900161743164,-123.77999877929688 3.7360000610351562,-98.59700012207031 3.7360000610351562,-98.59700012207031 C3.7360000610351562,-98.59700012207031 -0.8899999856948853,-87.80500030517578 -5.514999866485596,-85.23500061035156 C-10.140000343322754,-82.66500091552734 -25.04400062561035,-77.01200103759766 -25.04400062561035,-77.01200103759766 C-25.04400062561035,-77.01200103759766 -25.04400062561035,-89.34700012207031 -25.04400062561035,-89.34700012207031 C-25.04400062561035,-89.34700012207031 -11.168000221252441,-91.4020004272461 -2.430999994277954,-107.8479995727539 C6.306000232696533,-124.29399871826172 8.87600040435791,-131.48899841308594 5.791999816894531,-141.25399780273438 C2.7079999446868896,-151.0189971923828 -19.90399932861328,-168.4929962158203 -23.50200080871582,-168.4929962158203 C-27.100000381469727,-168.4929962158203 -26.586000442504883,-186.99400329589844 -26.586000442504883,-186.99400329589844z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(32,129,226)" stroke-opacity="1" stroke-width="0" d=" M-26.586000442504883,-186.99400329589844 C-26.586000442504883,-186.99400329589844 -42.00400161743164,-181.34100341796875 -42.00400161743164,-181.34100341796875 C-42.00400161743164,-181.34100341796875 -42.00400161743164,-168.4929962158203 -42.00400161743164,-168.4929962158203 C-42.00400161743164,-168.4929962158203 -61.02000045776367,-165.92300415039062 -61.02000045776367,-165.92300415039062 C-61.02000045776367,-165.92300415039062 -46.630001068115234,-140.74000549316406 -46.11600112915039,-124.29399871826172 C-45.60200119018555,-107.8479995727539 -61.02000045776367,-75.98400115966797 -61.02000045776367,-75.98400115966797 C-61.02000045776367,-75.98400115966797 -42.518001556396484,-82.1510009765625 -42.518001556396484,-82.1510009765625 C-42.518001556396484,-82.1510009765625 -42.518001556396484,-69.81700134277344 -42.518001556396484,-69.81700134277344 C-42.518001556396484,-69.81700134277344 -55.36600112915039,-63.13600158691406 -64.10299682617188,-61.08000183105469 C-69.00700378417969,-59.92599868774414 -70.2699966430664,-67.76200103759766 -72.32599639892578,-72.9010009765625 C-80.54900360107422,-70.33100128173828 -113.95500183105469,-57.99599838256836 -113.95500183105469,-57.99599838256836 C-113.95500183105469,-57.99599838256836 -106.24600219726562,-20.479999542236328 -81.5770034790039,-25.618999481201172 C-56.90800094604492,-30.757999420166016 11.958999633789062,-58.5099983215332 11.958999633789062,-58.5099983215332 C11.958999633789062,-58.5099983215332 26.349000930786133,-94.48600006103516 29.433000564575195,-99.625 C32.516998291015625,-104.76399993896484 46.393001556396484,-114.52899932861328 46.393001556396484,-114.52899932861328 C46.393001556396484,-114.52899932861328 45.87900161743164,-123.77999877929688 45.87900161743164,-123.77999877929688 C45.87900161743164,-123.77999877929688 3.7360000610351562,-98.59700012207031 3.7360000610351562,-98.59700012207031 C3.7360000610351562,-98.59700012207031 -0.8899999856948853,-87.80500030517578 -5.514999866485596,-85.23500061035156 C-10.140000343322754,-82.66500091552734 -25.04400062561035,-77.01200103759766 -25.04400062561035,-77.01200103759766 C-25.04400062561035,-77.01200103759766 -25.04400062561035,-89.34700012207031 -25.04400062561035,-89.34700012207031 C-25.04400062561035,-89.34700012207031 -11.168000221252441,-91.4020004272461 -2.430999994277954,-107.8479995727539 C6.306000232696533,-124.29399871826172 8.87600040435791,-131.48899841308594 5.791999816894531,-141.25399780273438 C2.7079999446868896,-151.0189971923828 -19.90399932861328,-168.4929962158203 -23.50200080871582,-168.4929962158203 C-27.100000381469727,-168.4929962158203 -26.586000442504883,-186.99400329589844 -26.586000442504883,-186.99400329589844z"></path></g></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M427,-81.25 C427,-81.25 409.5,-47.75 409.5,-47.75 C409.5,-47.75 427,-53 427,-53 C427,-53 433.5,-59.5 432.25,-68.5 C431,-77.5 427,-81.25 427,-81.25z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(32,129,226)" stroke-opacity="1" stroke-width="0" d=" M427,-81.25 C427,-81.25 409.5,-47.75 409.5,-47.75 C409.5,-47.75 427,-53 427,-53 C427,-53 433.5,-59.5 432.25,-68.5 C431,-77.5 427,-81.25 427,-81.25z"></path></g></g><g transform="matrix(0.8571673035621643,0.5150380730628967,-0.5150380730628967,0.8571673035621643,891.907958984375,261.099853515625)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_174)" fill-opacity="1" d=" M-148.03500366210938,-75.14299774169922 C-155.29400634765625,-69.45500183105469 -160.1269989013672,-57.441001892089844 -158.8300018310547,-48.31100082397461 C-158.8300018310547,-48.31100082397461 -119.6729965209961,227.3419952392578 -119.6729965209961,227.3419952392578 C-118.3759994506836,236.47300720214844 -111.44000244140625,239.26300048828125 -104.18099975585938,233.5749969482422 C-104.18099975585938,233.5749969482422 -75.33200073242188,210.96600341796875 -75.33200073242188,210.96600341796875 C-75.33200073242188,210.96600341796875 -67.91799926757812,213.94900512695312 -67.91799926757812,213.94900512695312 C-67.91799926757812,213.94900512695312 -62.750999450683594,201.10699462890625 -62.750999450683594,201.10699462890625 C-62.750999450683594,201.10699462890625 114.96299743652344,61.83700180053711 114.96299743652344,61.83700180053711 C122.22200012207031,56.14799880981445 127.05400085449219,44.1349983215332 125.75700378417969,35.005001068115234 C125.75700378417969,35.005001068115234 94.00299835205078,-188.53500366210938 94.00299835205078,-188.53500366210938 C94.00299835205078,-188.53500366210938 99.16999816894531,-201.3780059814453 99.16999816894531,-201.3780059814453 C99.16999816894531,-201.3780059814453 91.75499725341797,-204.36099243164062 91.75499725341797,-204.36099243164062 C91.75499725341797,-204.36099243164062 86.5999984741211,-240.6479949951172 86.5999984741211,-240.6479949951172 C85.3030014038086,-249.7779998779297 78.36699676513672,-252.56900024414062 71.10900115966797,-246.88099670410156 C71.10900115966797,-246.88099670410156 -148.03500366210938,-75.14299774169922 -148.03500366210938,-75.14299774169922z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_175)" fill-opacity="1" d=" M-114.96299743652344,-61.83700180053711 C-114.96299743652344,-61.83700180053711 104.18099975585938,-233.5749969482422 104.18099975585938,-233.5749969482422 C111.44000244140625,-239.26300048828125 118.3759994506836,-236.47300720214844 119.6729965209961,-227.34300231933594 C119.6729965209961,-227.34300231933594 158.8300018310547,48.31100082397461 158.8300018310547,48.31100082397461 C160.1269989013672,57.441001892089844 155.2949981689453,69.4540023803711 148.03599548339844,75.14199829101562 C148.03599548339844,75.14199829101562 -71.10900115966797,246.88099670410156 -71.10900115966797,246.88099670410156 C-78.36799621582031,252.56900024414062 -85.3030014038086,249.7779998779297 -86.5999984741211,240.6479949951172 C-86.5999984741211,240.6479949951172 -125.75800323486328,-35.005001068115234 -125.75800323486328,-35.005001068115234 C-127.05500030517578,-44.1349983215332 -122.22200012207031,-56.14899826049805 -114.96299743652344,-61.83700180053711z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M-16.000999450683594,-60.89899826049805 C-18.14699935913086,-59.659000396728516 -18.28499984741211,-59.638999938964844 -17.29400062561035,-60.59299850463867 C-15.451000213623047,-62.47999954223633 -10.875,-65.44599914550781 -7.710999965667725,-66.9520034790039 C-0.1860000044107437,-70.45899963378906 7.118000030517578,-70.0739974975586 15.527999877929688,-65.86499786376953 C15.527999877929688,-65.86499786376953 17.72599983215332,-64.75499725341797 17.72599983215332,-64.75499725341797 C17.72599983215332,-64.75499725341797 20.30699920654297,-67.39700317382812 20.30699920654297,-67.39700317382812 C31.198999404907227,-78.41200256347656 42.847999572753906,-85.59300231933594 53.12799835205078,-87.54100036621094 C55.93899917602539,-88.06199645996094 60.54899978637695,-88.30999755859375 61.16899871826172,-87.91100311279297 C61.393001556396484,-87.82099914550781 61.87200164794922,-86.4260025024414 62.362998962402344,-84.9520034790039 C63.89699935913086,-79.60299682617188 64.21399688720703,-74.89399719238281 63.233001708984375,-70.40699768066406 C62.733001708984375,-67.97899627685547 62.749000549316406,-67.37200164794922 63.481998443603516,-66.1760025024414 C64.10700225830078,-65.24800109863281 65.37100219726562,-65.26499938964844 66.51100158691406,-66.15899658203125 C68.85399627685547,-67.99500274658203 70.77200317382812,-74.80899810791016 70.96099853515625,-82.39399719238281 C70.96099853515625,-82.39399719238281 71.03099822998047,-85.37000274658203 71.03099822998047,-85.37000274658203 C71.03099822998047,-85.37000274658203 72.1729965209961,-84.76100158691406 72.1729965209961,-84.76100158691406 C78.26899719238281,-81.48200225830078 83.71399688720703,-74.86000061035156 85.40699768066406,-68.39600372314453 C85.40699768066406,-68.39600372314453 85.85700225830078,-66.71299743652344 85.85700225830078,-66.71299743652344 C85.85700225830078,-66.71299743652344 84.73300170898438,-67.69100189208984 84.73300170898438,-67.69100189208984 C82.86900329589844,-69.41699981689453 81.0770034790039,-70.13800048828125 78.95099639892578,-70.24199676513672 C75.1240005493164,-70.43000030517578 71.37799835205078,-68.55699920654297 61.724998474121094,-61.70000076293945 C52.970001220703125,-55.45800018310547 47.95800018310547,-52.59299850463867 42.79800033569336,-50.76300048828125 C34.09000015258789,-47.65700149536133 29.266000747680664,-48.922000885009766 17.163999557495117,-57.31999969482422 C11.776000022888184,-61.064998626708984 8.560999870300293,-62.88399887084961 5.385000228881836,-63.93600082397461 C-1.6380000114440918,-66.31099700927734 -8.133999824523926,-65.47000122070312 -16.000999450683594,-60.89899826049805z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M61.11800003051758,-103.62899780273438 C60.62900161743164,-108.55699920654297 60.74599838256836,-112.19100189208984 61.35200119018555,-115.85199737548828 C61.637001037597656,-117.31500244140625 61.88100051879883,-118.56900024414062 61.94499969482422,-118.61799621582031 C62.007999420166016,-118.66799926757812 61.94200134277344,-117.64299774169922 61.83599853515625,-116.40899658203125 C61.47200012207031,-113.0250015258789 61.888999938964844,-109.10199737548828 63.02899932861328,-105.03800201416016 C64.46600341796875,-99.87899780273438 64.95899963378906,-99.37999725341797 70.64299774169922,-97.01799774169922 C73.26699829101562,-95.88700103759766 76.43599700927734,-94.38700103759766 77.54900360107422,-93.48899841308594 C77.54900360107422,-93.48899841308594 79.65499877929688,-92.04100036621094 79.65499877929688,-92.04100036621094 C79.65499877929688,-92.04100036621094 77.66200256347656,-92.69200134277344 77.66200256347656,-92.69200134277344 C75.22200012207031,-93.52400207519531 69.66600036621094,-94.48200225830078 68.5510025024414,-94.40499877929688 C67.78700256347656,-94.33699798583984 67.66000366210938,-94.23699951171875 67.2959976196289,-93.33200073242188 C66.98400115966797,-92.55699920654297 66.97000122070312,-91.66100311279297 67.41600036621094,-88.0270004272461 C68.1449966430664,-82.4010009765625 68.03199768066406,-78.23999786376953 67.08499908447266,-73.51399993896484 C66.53299713134766,-70.95700073242188 66.3499984741211,-71.25599670410156 66.80400085449219,-74.00199890136719 C67.072998046875,-76.0719985961914 67.03500366210938,-76.83899688720703 66.26499938964844,-82.25599670410156 C64.71499633789062,-93.16899871826172 63.32899856567383,-95.00399780273438 56.6150016784668,-94.69999694824219 C54.9370002746582,-94.6240005493164 52.16600036621094,-94.31199645996094 50.45800018310547,-93.9469985961914 C48.750999450683594,-93.58300018310547 47.44599914550781,-93.35700225830078 47.49800109863281,-93.48600006103516 C47.65399932861328,-93.8740005493164 53.8489990234375,-96.33899688720703 56.42499923706055,-97.02999877929688 C60.20899963378906,-98.13600158691406 60.8129997253418,-98.34400177001953 61.23400115966797,-98.85099792480469 C61.38999938964844,-99.23899841308594 61.43299865722656,-100.4229965209961 61.11800003051758,-103.62899780273438z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M-7.035999774932861,-29.503000259399414 C-12.319999694824219,-33.50600051879883 -16.586999893188477,-42.73400115966797 -17.204999923706055,-51.54399871826172 C-17.204999923706055,-51.54399871826172 -17.388999938964844,-54.321998596191406 -17.388999938964844,-54.321998596191406 C-17.388999938964844,-54.321998596191406 -16.405000686645508,-54.827999114990234 -16.405000686645508,-54.827999114990234 C-14.51200008392334,-55.86899948120117 -11.194000244140625,-56.7869987487793 -9.515000343322754,-56.862998962402344 C-5.020999908447266,-56.93199920654297 -2.744999885559082,-54.28900146484375 0.5619999766349792,-45.37300109863281 C1.4989999532699585,-42.74300003051758 2.681999921798706,-39.862998962402344 3.1689999103546143,-38.91699981689453 C3.947000026702881,-37.402000427246094 6.458000183105469,-34.5890007019043 8.447999954223633,-32.96200180053711 C9.883000373840332,-31.784000396728516 9.258000373840332,-30.232999801635742 6.743000030517578,-28.615999221801758 C2.8239998817443848,-25.98699951171875 -2.927999973297119,-26.347999572753906 -7.035999774932861,-29.503000259399414z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M66.33499908447266,-26.273000717163086 C44.96099853515625,-20.676000595092773 36.698001861572266,-23.850000381469727 34.604000091552734,-38.58700180053711 C34.29899978637695,-40.737998962402344 34.112998962402344,-42.540000915527344 34.176998138427734,-42.59000015258789 C34.2400016784668,-42.638999938964844 35.10200119018555,-42.518001556396484 36.112998962402344,-42.33700180053711 C40.74300003051758,-41.45000076293945 45.487998962402344,-43.22200012207031 58.34400177001953,-50.81800079345703 C65.88300323486328,-55.22100067138672 70.22100067138672,-57.38100051879883 74.29900360107422,-58.89500045776367 C87.1709976196289,-63.404998779296875 96.16699981689453,-59.03499984741211 99.9209976196289,-46.48400115966797 C101.00399780273438,-42.819000244140625 101.76300048828125,-35.00299835205078 101.51699829101562,-30.295000076293945 C101.27300262451172,-26.562999725341797 100.05000305175781,-19.319000244140625 99.5770034790039,-18.683000564575195 C99.46199798583984,-18.503999710083008 99.16999816894531,-19.07200050354004 99.02300262451172,-20.10700035095215 C98.08599853515625,-25.215999603271484 95.20800018310547,-28.62700080871582 91.11900329589844,-29.67099952697754 C86.52899932861328,-30.766000747680664 80.58499908447266,-30.003000259399414 66.33499908447266,-26.273000717163086z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M52.93899917602539,-11.083000183105469 C52.42599868774414,-12.715999603271484 51.643001556396484,-14.758999824523926 51.242000579833984,-15.595999717712402 C51.242000579833984,-15.595999717712402 50.4640007019043,-17.110000610351562 50.4640007019043,-17.110000610351562 C50.4640007019043,-17.110000610351562 51.606998443603516,-16.500999450683594 51.606998443603516,-16.500999450683594 C53.196998596191406,-15.711000442504883 54.54999923706055,-14.114999771118164 55.87699890136719,-11.70300006866455 C56.91400146484375,-9.859000205993652 57.07899856567383,-9.192000389099121 57.632999420166016,-5.289000034332275 C58.17599868774414,-1.465000033378601 58.22600173950195,-0.6190000176429749 57.89799880981445,2.0280001163482666 C57.435001373291016,6.197999954223633 56.57099914550781,9.531000137329102 54.90700149536133,13.668000221252441 C51.88999938964844,21.16699981689453 47.62900161743164,27.339000701904297 41.01100158691406,33.76499938964844 C39.83100128173828,34.867000579833984 36.45600128173828,37.86600112915039 33.513999938964844,40.4370002746582 C25.98200035095215,46.87099838256836 21.125999450683594,51.82699966430664 16.97599983215332,57.29199981689453 C16.38800048828125,58.106998443603516 15.840999603271484,58.7130012512207 15.765999794006348,58.68299865722656 C15.541999816894531,58.59299850463867 18.264999389648438,53.98099899291992 20.57200050354004,50.402000427246094 C23.812999725341797,45.47200012207031 27.18899917602539,41.49800109863281 34.87900161743164,33.70100021362305 C38.69300079345703,29.82699966430664 42.5989990234375,25.615999221801758 43.55500030517578,24.42300033569336 C52.5629997253418,13.026000022888184 56.20899963378906,-0.45399999618530273 52.93899917602539,-11.083000183105469z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M64.93299865722656,2.005000114440918 C61.26599884033203,-3.000999927520752 59.71200180053711,-9.484000205993652 60.20000076293945,-16.948999404907227 C60.224998474121094,-17.764999389648438 60.39899826049805,-18.520999908447266 60.5890007019043,-18.670000076293945 C60.71500015258789,-18.770000457763672 61.404998779296875,-18.868000030517578 62.11800003051758,-18.805999755859375 C63.46799850463867,-18.714000701904297 66.18699645996094,-18.89699935913086 73.33200073242188,-19.62700080871582 C82.29399871826172,-20.452999114990234 87.52799987792969,-19.774999618530273 91.38400268554688,-17.39699935913086 C94.78199768066406,-15.279000282287598 97.18199920654297,-11.760000228881836 98.85399627685547,-6.429999828338623 C99.77300262451172,-3.431999921798706 100.68499755859375,4.9710001945495605 100.46399688720703,8.86299991607666 C99.7750015258789,21.354000091552734 95.90799713134766,33.768001556396484 89.37899780273438,44.28499984741211 C88.40399932861328,45.84600067138672 87.53299713134766,47.14799880981445 87.48100280761719,47.277000427246094 C87.35399627685547,47.375999450683594 87.56500244140625,45.88399887084961 87.98300170898438,43.874000549316406 C89.5479965209961,35.566001892089844 88.91799926757812,29.15399932861328 86.09700012207031,23.663000106811523 C84.35800170898438,20.333999633789062 81.34200286865234,16.94300079345703 75.4219970703125,11.932000160217285 C68.48699951171875,6.2129998207092285 66.77200317382812,4.546999931335449 64.93299865722656,2.005000114440918z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M-4.455999851226807,99.14199829101562 C1.843999981880188,85.52899932861328 10.234999656677246,72.75700378417969 18.420000076293945,64.48300170898438 C21.92799949645996,60.9370002746582 27.97800064086914,56.46099853515625 31.493000030517578,54.94599914550781 C37.125,52.47999954223633 42.48099899291992,52.53200149536133 45.59600067138672,55.137001037597656 C48.69900131225586,57.6619987487793 50.266998291015625,60.77199935913086 52.57699966430664,68.61100006103516 C53.50699996948242,71.68900299072266 54.4370002746582,74.76699829101562 54.676998138427734,75.46399688720703 C56.13399887084961,79.27999877929688 58.23699951171875,81.7030029296875 60.45000076293945,81.91699981689453 C63.959999084472656,82.35299682617188 69.42900085449219,78.24400329589844 74.38700103759766,71.5260009765625 C75.20500183105469,70.35399627685547 75.99500274658203,69.47000122070312 76.00599670410156,69.54900360107422 C76.2300033569336,69.63899993896484 73.88700103759766,73.9540023803711 72.15699768066406,76.63800048828125 C69.8499984741211,80.21600341796875 67.91400146484375,82.44200134277344 65.25399780273438,84.5260009765625 C60.37799835205078,88.3479995727539 55.882999420166016,88.41699981689453 51.632999420166016,84.75399780273438 C50.819000244140625,83.97599792480469 48.77799987792969,81.50299835205078 47.16299819946289,79.0510025024414 C42.17900085449219,71.71299743652344 39.96500015258789,69.99600219726562 35.36199951171875,69.7969970703125 C31.33300018310547,69.6780014038086 26.631000518798828,72.74299621582031 23.45400047302246,77.6240005493164 C19.290000915527344,83.98500061035156 19.06399917602539,92.30699920654297 22.951000213623047,94.39600372314453 C24.541000366210938,95.18599700927734 27.173999786376953,94.89299774169922 29.18199920654297,93.6729965209961 C32.99800109863281,91.3030014038086 35.66600036621094,85.31600189208984 34.999000549316406,80.61599731445312 C34.569000244140625,77.58899688720703 33.369998931884766,76.58100128173828 30.833999633789062,77.06300354003906 C27.3439998626709,77.76200103759766 24.16699981689453,82.64199829101562 24.761999130249023,86.33699798583984 C24.988000869750977,87.93000030517578 25.704999923706055,88.51899719238281 27.073999404907227,88.24299621582031 C27.96500015258789,88.07599639892578 27.96500015258789,88.07599639892578 27.30900001525879,88.41300201416016 C24.2189998626709,89.9489974975586 22.888999938964844,86.03399658203125 24.87700080871582,81.20099639892578 C27.216999053955078,75.38300323486328 33.33300018310547,72.36000061035156 36.04999923706055,75.63099670410156 C37.16699981689453,77.05699920654297 37.86000061035156,80.94100189208984 37.45100021362305,84.00599670410156 C36.584999084472656,90.79299926757812 32.11600112915039,97.48200225830078 27.01300048828125,99.70999908447266 C23.510000228881836,101.30500030517578 22.010000228881836,101.15299987792969 17.222000122070312,99.1510009765625 C8.913000106811523,95.65799713134766 5.940999984741211,96.04000091552734 -4.410999774932861,101.94000244140625 C-4.410999774932861,101.94000244140625 -6.431000232696533,103.08000183105469 -6.431000232696533,103.08000183105469 C-6.431000232696533,103.08000183105469 -4.455999851226807,99.14199829101562 -4.455999851226807,99.14199829101562z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M-60.33599853515625,-36.599998474121094 C-31.857999801635742,-19.434999465942383 -13.6899995803833,-17.382999420166016 -11.475000381469727,-15.666000366210938 C-9.656999588012695,-14.258999824523926 -9.835000038146973,-11.550999641418457 -12.107999801635742,-7.734000205993652 C-13.354000091552734,-5.60699987411499 -16.131999969482422,-2.368000030517578 -17.58799934387207,-1.2259999513626099 C-19.235000610351562,0.06400000303983688 -19.917999267578125,-0.28600001335144043 -19.917999267578125,-0.28600001335144043 C-21.025999069213867,-0.6570000052452087 -21.510000228881836,-0.10000000149011612 -27.98900032043457,-7.063000202178955 C-36.63199996948242,-14.895999908447266 -43.88199996948242,-21.343000411987305 -44.03099822998047,-21.402999877929688 C-44.46799850463867,-21.503999710083008 -44.46799850463867,-21.503999710083008 -28.277999877929688,-3.6489999294281006 C-25.5,0.5479999780654907 -26.788999557495117,3.859999895095825 -26.676000595092773,4.656000137329102 C-26.437999725341797,6.328999996185303 -26.694000244140625,7.502999782562256 -28.02400016784668,11.02400016784668 C-30.20400047302246,16.98200035095215 -30.80699920654297,22.14699935913086 -30.437999725341797,31.68400001525879 C-30.04800033569336,42.35499954223633 -31.774999618530273,51.5 -37.792999267578125,69.58300018310547 C-41.292999267578125,80.11699676513672 -41.87200164794922,81.98699951171875 -42.60499954223633,85.74800109863281 C-43.551998138427734,90.4739990234375 -43.64899826049805,92.76300048828125 -43.141998291015625,97.322998046875 C-42.65299987792969,102.25199890136719 -41.84299850463867,104.98100280761719 -40.05799865722656,108.62799835205078 C-38.479000091552734,111.81700134277344 -37.02899932861328,113.60199737548828 -33.558998107910156,116.72599792480469 C-30.570999145507812,119.43000030517578 -28.766000747680664,121.73400115966797 -28.572999954223633,123.08799743652344 C-28.426000595092773,124.12300109863281 -28.236000061035156,123.9749984741211 -24.77400016784668,120.11000061035156 C-16.447999954223633,110.84100341796875 -9.965999603271484,100.98100280761719 -6.7870001792907715,92.64700317382812 C-4.781000137329102,87.44499969482422 -4.4710001945495605,85.16600036621094 -5.105000019073486,80.70500183105469 C-5.52400016784668,77.75800323486328 -5.677000045776367,77.16999816894531 -6.547999858856201,75.99400329589844 C-7.946000099182129,74.0790023803711 -10.173999786376953,73.25800323486328 -14.800000190734863,72.89900207519531 C-20.902999877929688,72.5469970703125 -23.714000701904297,70.58999633789062 -25.08300018310547,65.90799713134766 C-26.190000534057617,62.08399963378906 -26.038000106811523,58.68899917602539 -24.118999481201172,48.42100143432617 C-22.170000076293945,37.86399841308594 -21.908000946044922,33.76300048828125 -22.566999435424805,25.160999298095703 C-23.007999420166016,19.576000213623047 -22.79599952697754,17.107999801635742 -21.829999923706055,14.491999626159668 C-20.812999725341797,11.746999740600586 -19.75200080871582,10.295999526977539 -16.665000915527344,7.256999969482422 C-11.659000396728516,2.3610000610351562 -8.604000091552734,-1.8930000066757202 -6.385000228881836,-7.084000110626221 C-4.427000045776367,-11.628999710083008 -3.8389999866485596,-14.92199993133545 -4.267000198364258,-18.924999237060547 C-4.267000198364258,-18.924999237060547 -4.559000015258789,-21.972000122070312 -4.559000015258789,-21.972000122070312 C-4.559000015258789,-21.972000122070312 -6.159999847412109,-22.840999603271484 -6.159999847412109,-22.840999603271484 C-11.819999694824219,-26.018999099731445 -64.35800170898438,-39.64500045776367 -64.67500305175781,-39.39699935913086 C-64.58899688720703,-39.2869987487793 -62.72999954223633,-38.0880012512207 -60.33599853515625,-36.599998474121094z M-29.844999313354492,92.83399963378906 C-29.10700035095215,89.60099792480469 -30.10700035095215,87.0199966430664 -32.08399963378906,86.97599792480469 C-33.99800109863281,86.88200378417969 -36.49300003051758,89.63400268554688 -36.231998443603516,91.46600341796875 C-36.15299987792969,92.02400207519531 -35.84299850463867,92.2229995727539 -35.21699905395508,92.17500305175781 C-34.17599868774414,92.06800079345703 -34.02199935913086,92.65499877929688 -34.59000015258789,94.6050033569336 C-35.145999908447266,96.63500213623047 -34.91299819946289,97.77999877929688 -33.91299819946289,97.88200378417969 C-32.327999114990234,98.14399719238281 -30.530000686645508,95.93800354003906 -29.844999313354492,92.83399963378906z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,0,122)" fill-opacity="1" d=" M1.4950000047683716,-5.116000175476074 C-0.7760000228881836,-2.2739999294281006 -2.6659998893737793,2.749000072479248 -2.888000011444092,6.639999866485596 C-3.0369999408721924,9.059000015258789 -2.2739999294281006,12.444999694824219 -1.49399995803833,12.984000205993652 C-0.1679999977350235,13.892999649047852 0.9129999876022339,13.57699966430664 3.6989998817443848,11.392999649047852 C9.197999954223633,6.995999813079834 13.529000282287598,0.32600000500679016 13.57800006866455,-3.7850000858306885 C13.592000007629395,-7.158999919891357 10.913000106811523,-9.663999557495117 7.802999973297119,-9.26200008392334 C6.146999835968018,-9.027000427246094 2.9240000247955322,-6.943999767303467 1.4950000047683716,-5.116000175476074z M8.77400016784668,-3.9149999618530273 C9.381999969482422,-6.073999881744385 8.83899974822998,-7.419000148773193 7.223999977111816,-7.392000198364258 C4.206999778747559,-7.328999996185303 0.26499998569488525,-2.38100004196167 0.7289999723434448,0.8849999904632568 C0.9549999833106995,2.4779999256134033 3.3570001125335693,2.5429999828338623 5.320000171661377,1.0049999952316284 C6.714000225067139,-0.08699999749660492 8.35099983215332,-2.433000087738037 8.77400016784668,-3.9149999618530273z"></path></g></g><g transform="matrix(0.677079975605011,0,0,0.677079975605011,1222.5,1454)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(12,12,12)" fill-opacity="1" d=" M48,0 C48,-26.510000228881836 26.510000228881836,-48 0,-48 C-26.510000228881836,-48 -48,-26.510000228881836 -48,0 C-48,26.510000228881836 -26.510000228881836,48 0,48 C26.510000228881836,48 48,26.510000228881836 48,0z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-8.140000343322754,-9.404999732971191 C-8.140000343322754,-9.404999732971191 -22.025999069213867,-25.7810001373291 -22.025999069213867,-25.7810001373291 C-22.025999069213867,-25.7810001373291 25.5939998626709,-25.7810001373291 25.5939998626709,-25.7810001373291 C25.5939998626709,-25.7810001373291 25.5939998626709,21.92099952697754 25.5939998626709,21.92099952697754 C25.5939998626709,21.92099952697754 9.312000274658203,7.841000080108643 9.312000274658203,7.841000080108643 C11.121000289916992,5.698999881744385 12.211999893188477,2.930000066757202 12.211999893188477,-0.09399999678134918 C12.211999893188477,-6.889999866485596 6.702000141143799,-12.399999618530273 -0.09399999678134918,-12.399999618530273 C-3.1700000762939453,-12.399999618530273 -5.982999801635742,-11.270999908447266 -8.140000343322754,-9.404999732971191z M-0.09399999678134918,12.211999893188477 C2.2829999923706055,12.211999893188477 4.501999855041504,11.538999557495117 6.383999824523926,10.371000289916992 C6.383999824523926,10.371000289916992 19.29400062561035,25.5939998626709 19.29400062561035,25.5939998626709 C19.29400062561035,25.5939998626709 -25.7810001373291,25.5939998626709 -25.7810001373291,25.5939998626709 C-25.7810001373291,25.5939998626709 -25.7810001373291,-19.64900016784668 -25.7810001373291,-19.64900016784668 C-25.7810001373291,-19.64900016784668 -10.57800006866455,-6.539999961853027 -10.57800006866455,-6.539999961853027 C-11.732999801635742,-4.664999961853027 -12.399999618530273,-2.4579999446868896 -12.399999618530273,-0.09399999678134918 C-12.399999618530273,6.702000141143799 -6.889999866485596,12.211999893188477 -0.09399999678134918,12.211999893188477z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="1.249" d=" M-8.140000343322754,-9.404999732971191 C-8.140000343322754,-9.404999732971191 -22.025999069213867,-25.7810001373291 -22.025999069213867,-25.7810001373291 C-22.025999069213867,-25.7810001373291 25.5939998626709,-25.7810001373291 25.5939998626709,-25.7810001373291 C25.5939998626709,-25.7810001373291 25.5939998626709,21.92099952697754 25.5939998626709,21.92099952697754 C25.5939998626709,21.92099952697754 9.312000274658203,7.841000080108643 9.312000274658203,7.841000080108643 C11.121000289916992,5.698999881744385 12.211999893188477,2.930000066757202 12.211999893188477,-0.09399999678134918 C12.211999893188477,-6.889999866485596 6.702000141143799,-12.399999618530273 -0.09399999678134918,-12.399999618530273 C-3.1700000762939453,-12.399999618530273 -5.982999801635742,-11.270999908447266 -8.140000343322754,-9.404999732971191z M-0.09399999678134918,12.211999893188477 C2.2829999923706055,12.211999893188477 4.501999855041504,11.538999557495117 6.383999824523926,10.371000289916992 C6.383999824523926,10.371000289916992 19.29400062561035,25.5939998626709 19.29400062561035,25.5939998626709 C19.29400062561035,25.5939998626709 -25.7810001373291,25.5939998626709 -25.7810001373291,25.5939998626709 C-25.7810001373291,25.5939998626709 -25.7810001373291,-19.64900016784668 -25.7810001373291,-19.64900016784668 C-25.7810001373291,-19.64900016784668 -10.57800006866455,-6.539999961853027 -10.57800006866455,-6.539999961853027 C-11.732999801635742,-4.664999961853027 -12.399999618530273,-2.4579999446868896 -12.399999618530273,-0.09399999678134918 C-12.399999618530273,6.702000141143799 -6.889999866485596,12.211999893188477 -0.09399999678134918,12.211999893188477z"></path></g></g><g transform="matrix(1.225725531578064,-0.24514661729335785,0.24514661729335785,1.225725531578064,1132.385986328125,1042.56396484375)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,86,79)" fill-opacity="1" d=" M0,48 C26.510000228881836,48 48,26.510000228881836 48,0 C48,-26.510000228881836 26.510000228881836,-48 0,-48 C-26.510000228881836,-48 -48,-26.510000228881836 -48,0 C-48,26.510000228881836 -26.510000228881836,48 0,48z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-12.706999778747559,27.743000030517578 C-12.706999778747559,27.743000030517578 -12.706999778747559,-27.716999053955078 -12.706999778747559,-27.716999053955078 C-12.706999778747559,-27.716999053955078 -22.389999389648438,-27.716999053955078 -22.389999389648438,-27.716999053955078 C-22.389999389648438,-27.716999053955078 -22.389999389648438,27.743000030517578 -22.389999389648438,27.743000030517578 C-22.389999389648438,27.743000030517578 -12.706999778747559,27.743000030517578 -12.706999778747559,27.743000030517578z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M13.755000114440918,27.729999542236328 C13.755000114440918,27.729999542236328 -7.460999965667725,0 -7.460999965667725,0 C-7.460999965667725,0 13.755000114440918,-27.729000091552734 13.755000114440918,-27.729000091552734 C13.755000114440918,-27.729000091552734 25.878000259399414,-27.729000091552734 25.878000259399414,-27.729000091552734 C25.878000259399414,-27.729000091552734 4.9770002365112305,0 4.9770002365112305,0 C4.9770002365112305,0 25.878000259399414,27.729999542236328 25.878000259399414,27.729999542236328 C25.878000259399414,27.729999542236328 13.755000114440918,27.729999542236328 13.755000114440918,27.729999542236328z"></path></g></g><g transform="matrix(1.1875,0,0,1.1875,819,1134)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(46,49,72)" fill-opacity="1" d=" M0,48 C26.510000228881836,48 48,26.510000228881836 48,0 C48,-26.510000228881836 26.510000228881836,-48 0,-48 C-26.510000228881836,-48 -48,-26.510000228881836 -48,0 C-48,26.510000228881836 -26.510000228881836,48 0,48z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(27,30,54)" fill-opacity="1" d=" M-0.010999999940395355,27.81800079345703 C15.357999801635742,27.81800079345703 27.81800079345703,15.359000205993652 27.81800079345703,-0.010999999940395355 C27.81800079345703,-15.380000114440918 15.357999801635742,-27.84000015258789 -0.010999999940395355,-27.84000015258789 C-15.380000114440918,-27.84000015258789 -27.84000015258789,-15.380000114440918 -27.84000015258789,-0.010999999940395355 C-27.84000015258789,15.359000205993652 -15.380000114440918,27.81800079345703 -0.010999999940395355,27.81800079345703z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(111,115,144)" fill-opacity="1" d=" M-0.2630000114440918,-42.2400016784668 C-5.493000030517578,-42.2400016784668 -9.60200023651123,-23.37700080871582 -9.60200023651123,-0.21699999272823334 C-9.60200023651123,22.94300079345703 -5.306000232696533,41.80699920654297 -0.2630000114440918,41.80699920654297 C4.78000020980835,41.80699920654297 9.076000213623047,22.94300079345703 9.076000213623047,-0.21699999272823334 C9.076000213623047,-23.37700080871582 4.78000020980835,-42.2400016784668 -0.2630000114440918,-42.2400016784668z M0.296999990940094,39.37799835205078 C-0.2630000114440918,40.125 -0.8230000138282776,39.564998626708984 -0.8230000138282776,39.564998626708984 C-3.250999927520752,36.76300048828125 -4.372000217437744,31.72100067138672 -4.372000217437744,31.72100067138672 C-8.480999946594238,18.273000717163086 -7.546999931335449,-10.675999641418457 -7.546999931335449,-10.675999641418457 C-5.492000102996826,-33.64899826049805 -1.944000005722046,-39.064998626708984 -0.8230000138282776,-40.18600082397461 C-0.6359999775886536,-40.37300109863281 -0.07599999755620956,-40.560001373291016 0.11100000143051147,-40.18600082397461 C1.7920000553131104,-38.87900161743164 3.2860000133514404,-33.64899826049805 3.2860000133514404,-33.64899826049805 C7.581999778747559,-17.399999618530273 7.208000183105469,-2.2709999084472656 7.208000183105469,-2.2709999084472656 C7.580999851226807,10.989999771118164 4.9670000076293945,25.743999481201172 4.9670000076293945,25.743999481201172 C3.0989999771118164,37.137001037597656 0.296999990940094,39.37799835205078 0.296999990940094,39.37799835205078z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(111,115,144)" fill-opacity="1" d=" M36.66999816894531,-20.56100082397461 C34.05500030517578,-25.042999267578125 15.751999855041504,-19.253000259399414 -4.419000148773193,-7.860000133514404 C-24.59000015258789,3.7200000286102295 -38.78499984741211,16.79400062561035 -36.16999816894531,21.275999069213867 C-33.55500030517578,25.757999420166016 -15.251999855041504,19.9689998626709 4.919000148773193,8.576000213623047 C25.09000015258789,-3.003999948501587 39.28499984741211,-16.07900047302246 36.66999816894531,-20.56100082397461z M-33.92900085449219,20.715999603271484 C-34.862998962402344,20.52899932861328 -34.67599868774414,19.781999588012695 -34.67599868774414,19.781999588012695 C-33.55500030517578,16.420000076293945 -29.632999420166016,12.684000015258789 -29.632999420166016,12.684000015258789 C-20.107999801635742,2.4119999408721924 5.480000019073486,-11.222000122070312 5.480000019073486,-11.222000122070312 C26.398000717163086,-20.93400001525879 32.74800109863281,-20.559999465942383 34.42900085449219,-20 C34.801998138427734,-19.812999725341797 34.9900016784668,-19.62700080871582 34.9900016784668,-19.253000259399414 C34.803001403808594,-17.011999130249023 31.066999435424805,-13.277000427246094 31.066999435424805,-13.277000427246094 C19.11400032043457,-1.3240000009536743 5.853000164031982,5.77400016784668 5.853000164031982,5.77400016784668 C-5.539999961853027,12.6850004196167 -19.54800033569336,17.913999557495117 -19.54800033569336,17.913999557495117 C-30.381000518798828,21.836000442504883 -33.92900085449219,20.715999603271484 -33.92900085449219,20.715999603271484z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(111,115,144)" fill-opacity="1" d=" M36.48400115966797,21.459999084472656 C39.0989990234375,16.97800064086914 24.902999877929688,3.9040000438690186 4.919000148773193,-7.676000118255615 C-15.0649995803833,-19.256000518798828 -33.55500030517578,-25.045000076293945 -36.16999816894531,-20.562999725341797 C-38.78499984741211,-16.08099937438965 -24.59000015258789,-3.006999969482422 -4.419000148773193,8.572999954223633 C15.5649995803833,20.152999877929688 34.055999755859375,25.941999435424805 36.48400115966797,21.459999084472656z M-34.48899841308594,-19.069000244140625 C-34.862998962402344,-20.003000259399414 -34.11600112915039,-20.18899917602539 -34.11600112915039,-20.18899917602539 C-30.566999435424805,-20.93600082397461 -25.52400016784668,-19.2549991607666 -25.52400016784668,-19.2549991607666 C-11.70300006866455,-16.079999923706055 12.763999938964844,-0.7649999856948853 12.763999938964844,-0.7649999856948853 C31.628000259399414,12.496000289916992 34.43000030517578,18.28499984741211 34.9900016784668,19.965999603271484 C34.9900016784668,20.34000015258789 34.9900016784668,20.71299934387207 34.61600112915039,20.899999618530273 C32.56100082397461,21.833999633789062 27.332000732421875,20.527000427246094 27.332000732421875,20.527000427246094 C11.083000183105469,16.231000900268555 -1.8040000200271606,8.199999809265137 -1.8040000200271606,8.199999809265137 C-13.383999824523926,1.850000023841858 -24.964000701904297,-7.86299991607666 -24.964000701904297,-7.86299991607666 C-33.742000579833984,-15.333999633789062 -34.48899841308594,-18.881999969482422 -34.48899841308594,-19.069000244140625z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(183,185,200)" fill-opacity="1" d=" M0.054999999701976776,4.9120001792907715 C2.736999988555908,4.9120001792907715 4.910999774932861,2.73799991607666 4.910999774932861,0.0560000017285347 C4.910999774932861,-2.625999927520752 2.736999988555908,-4.800000190734863 0.054999999701976776,-4.800000190734863 C-2.627000093460083,-4.800000190734863 -4.801000118255615,-2.625999927520752 -4.801000118255615,0.0560000017285347 C-4.801000118255615,2.73799991607666 -2.627000093460083,4.9120001792907715 0.054999999701976776,4.9120001792907715z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(183,185,200)" fill-opacity="1" d=" M20.08300018310547,-16.104000091552734 C21.6299991607666,-16.104000091552734 22.884000778198242,-17.441999435424805 22.884000778198242,-19.091999053955078 C22.884000778198242,-20.742000579833984 21.6299991607666,-22.079999923706055 20.08300018310547,-22.079999923706055 C18.535999298095703,-22.079999923706055 17.2810001373291,-20.742000579833984 17.2810001373291,-19.091999053955078 C17.2810001373291,-17.441999435424805 18.535999298095703,-16.104000091552734 20.08300018310547,-16.104000091552734z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(183,185,200)" fill-opacity="1" d=" M-26.959999084472656,-5.543000221252441 C-25.413000106811523,-5.543000221252441 -24.159000396728516,-6.88100004196167 -24.159000396728516,-8.531000137329102 C-24.159000396728516,-10.180999755859375 -25.413000106811523,-11.520000457763672 -26.959999084472656,-11.520000457763672 C-28.506999969482422,-11.520000457763672 -29.761999130249023,-10.180999755859375 -29.761999130249023,-8.531000137329102 C-29.761999130249023,-6.88100004196167 -28.506999969482422,-5.543000221252441 -26.959999084472656,-5.543000221252441z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(183,185,200)" fill-opacity="1" d=" M-5.839000225067139,30.937000274658203 C-4.291999816894531,30.937000274658203 -3.0380001068115234,29.597999572753906 -3.0380001068115234,27.947999954223633 C-3.0380001068115234,26.29800033569336 -4.291999816894531,24.959999084472656 -5.839000225067139,24.959999084472656 C-7.386000156402588,24.959999084472656 -8.640999794006348,26.29800033569336 -8.640999794006348,27.947999954223633 C-8.640999794006348,29.597999572753906 -7.386000156402588,30.937000274658203 -5.839000225067139,30.937000274658203z"></path></g></g><g transform="matrix(1.5247752666473389,0.3969184458255768,-0.3969184458255768,1.5247752666473389,674,574.5)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_156)" fill-opacity="1" d=" M76.76799774169922,-6.118000030517578 C75.1520004272461,-7.5970001220703125 73.22699737548828,-8.996999740600586 70.99500274658203,-10.28600025177002 C70.99500274658203,-10.28600025177002 29.28499984741211,-34.367000579833984 29.28499984741211,-34.367000579833984 C13.112000465393066,-43.70399856567383 -13.109000205993652,-43.70399856567383 -29.281999588012695,-34.367000579833984 C-29.281999588012695,-34.367000579833984 -70.99199676513672,-10.28600025177002 -70.99199676513672,-10.28600025177002 C-73.2249984741211,-8.996999740600586 -75.14900207519531,-7.5970001220703125 -76.76499938964844,-6.118000030517578 C-76.76499938964844,-6.118000030517578 -83.11699676513672,-6.118000030517578 -83.11699676513672,-6.118000030517578 C-83.11699676513672,-6.118000030517578 -83.11699676513672,6.255000114440918 -83.11699676513672,6.255000114440918 C-83.28099822998047,12.494999885559082 -79.23999786376953,18.766000747680664 -70.99199676513672,23.527999877929688 C-70.99199676513672,23.527999877929688 -29.281999588012695,47.60900115966797 -29.281999588012695,47.60900115966797 C-13.109000205993652,56.94599914550781 13.112000465393066,56.94599914550781 29.28499984741211,47.60900115966797 C29.28499984741211,47.60900115966797 70.99500274658203,23.527999877929688 70.99500274658203,23.527999877929688 C79.22200012207031,18.777999877929688 83.26399993896484,12.527000427246094 83.12100219726562,6.302000045776367 C83.12100219726562,6.302000045776367 83.12300109863281,6.302000045776367 83.12300109863281,6.302000045776367 C83.12300109863281,6.302000045776367 83.12300109863281,-6.118000030517578 83.12300109863281,-6.118000030517578 C83.12300109863281,-6.118000030517578 76.76799774169922,-6.118000030517578 76.76799774169922,-6.118000030517578z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_157)" fill-opacity="1" d=" M70.99400329589844,10.286999702453613 C70.99400329589844,10.286999702453613 29.283000946044922,34.36800003051758 29.283000946044922,34.36800003051758 C13.109999656677246,43.70500183105469 -13.109999656677246,43.70500183105469 -29.283000946044922,34.36800003051758 C-29.283000946044922,34.36800003051758 -70.99400329589844,10.286999702453613 -70.99400329589844,10.286999702453613 C-87.16699981689453,0.949999988079071 -87.16699981689453,-14.1899995803833 -70.99400329589844,-23.527000427246094 C-70.99400329589844,-23.527000427246094 -29.283000946044922,-47.608001708984375 -29.283000946044922,-47.608001708984375 C-13.109999656677246,-56.94499969482422 13.109999656677246,-56.94499969482422 29.283000946044922,-47.608001708984375 C29.283000946044922,-47.608001708984375 70.99400329589844,-23.527000427246094 70.99400329589844,-23.527000427246094 C87.16699981689453,-14.1899995803833 87.16699981689453,0.949999988079071 70.99400329589844,10.286999702453613z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-9.715999603271484,19.246000289916992 C-15.817999839782715,10.307000160217285 -17.3700008392334,0.550000011920929 -14.190999984741211,-8.873000144958496 C-11.01200008392334,-18.297000885009766 -3.2330000400543213,-26.9950008392334 8.229000091552734,-33.944000244140625 C14.281000137329102,-33.257999420166016 20.040000915527344,-31.889999389648438 25.18000030517578,-29.920000076293945 C30.319000244140625,-27.950000762939453 34.737998962402344,-25.415000915527344 38.18299865722656,-22.461000442504883 C41.62900161743164,-19.506000518798828 44.034000396728516,-16.190000534057617 45.26100158691406,-12.701000213623047 C46.487998962402344,-9.211999893188477 46.51300048828125,-5.618000030517578 45.33399963378906,-2.125999927520752 C44.15599822998047,1.3660000562667847 41.79800033569336,4.689000129699707 38.393001556396484,7.6529998779296875 C34.98899841308594,10.616999626159668 30.606000900268555,13.163999557495117 25.493999481201172,15.14900016784668 C20.381999969482422,17.132999420166016 14.642000198364258,18.517000198364258 8.60099983215332,19.219999313354492 C2.559000015258789,19.92300033569336 -3.6649999618530273,19.93199920654297 -9.715999603271484,19.246000289916992z M-11.668999671936035,20.61199951171875 C-11.668999671936035,20.61199951171875 -7.550000190734863,22.989999771118164 -7.550000190734863,22.989999771118164 C-7.507999897003174,23.014999389648438 -7.4770002365112305,23.045000076293945 -7.461999893188477,23.07900047302246 C-7.446000099182129,23.11199951171875 -7.446000099182129,23.148000717163086 -7.460999965667725,23.18000030517578 C-7.460999965667725,23.18000030517578 -8.92300033569336,26.43199920654297 -8.92300033569336,26.43199920654297 C-8.937000274658203,26.46500015258789 -8.96500015258789,26.493999481201172 -9.005999565124512,26.517000198364258 C-9.045999526977539,26.540000915527344 -9.095999717712402,26.55699920654297 -9.152999877929688,26.565000534057617 C-9.208999633789062,26.572999954223633 -9.267999649047852,26.57200050354004 -9.324999809265137,26.562000274658203 C-9.381999969482422,26.552000045776367 -9.434000015258789,26.534000396728516 -9.47599983215332,26.510000228881836 C-9.47599983215332,26.510000228881836 -13.595000267028809,24.131999969482422 -13.595000267028809,24.131999969482422 C-13.63700008392334,24.10700035095215 -13.668000221252441,24.077999114990234 -13.684000015258789,24.045000076293945 C-13.699999809265137,24.011999130249023 -13.70199966430664,23.97800064086914 -13.689000129699707,23.945999145507812 C-13.689000129699707,23.945999145507812 -12.222999572753906,20.69099998474121 -12.222999572753906,20.69099998474121 C-12.208999633789062,20.658000946044922 -12.180000305175781,20.628999710083008 -12.138999938964844,20.606000900268555 C-12.098999977111816,20.58300018310547 -12.048999786376953,20.56599998474121 -11.991999626159668,20.558000564575195 C-11.935999870300293,20.549999237060547 -11.876999855041504,20.551000595092773 -11.819999694824219,20.56100082397461 C-11.762999534606934,20.570999145507812 -11.711000442504883,20.58799934387207 -11.668999671936035,20.61199951171875z M-46.652000427246094,-2.878999948501587 C-45.03900146484375,2.7039999961853027 -40.444000244140625,7.859000205993652 -33.507999420166016,11.86400032043457 C-28.398000717163086,14.815999984741211 -22.172000885009766,17.045000076293945 -15.321999549865723,18.374000549316406 C-18.371000289916992,4.650000095367432 -27.757999420166016,-8.354000091552734 -42.5,-19.27199935913086 C-46.8129997253418,-14.194000244140625 -48.26499938964844,-8.461999893188477 -46.652000427246094,-2.878999948501587z"></path></g></g><g transform="matrix(1.359208345413208,-0.32541394233703613,0.32541394233703613,1.359208345413208,1638,1542)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-1.0870000123977661,33.36000061035156 C25.42300033569336,33.36000061035156 46.91299819946289,11.869999885559082 46.91299819946289,-14.640000343322754 C46.91299819946289,-41.150001525878906 25.42300033569336,-62.63999938964844 -1.0870000123977661,-62.63999938964844 C-27.597000122070312,-62.63999938964844 -49.08700180053711,-41.150001525878906 -49.08700180053711,-14.640000343322754 C-49.08700180053711,11.869999885559082 -27.597000122070312,33.36000061035156 -1.0870000123977661,33.36000061035156z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_152)" fill-opacity="1" d=" M-1.0880000591278076,27.39900016784668 C22.128999710083008,27.39900016784668 40.95100021362305,8.579000473022461 40.95100021362305,-14.640000343322754 C40.95100021362305,-37.85900115966797 22.128999710083008,-56.67900085449219 -1.0880000591278076,-56.67900085449219 C-24.30500030517578,-56.67900085449219 -43.12699890136719,-37.85300064086914 -43.12699890136719,-14.640000343322754 C-43.12699890136719,8.572999954223633 -24.30699920654297,27.39900016784668 -1.0880000591278076,27.39900016784668z M-0.9160000085830688,23.45599937438965 C-0.9160000085830688,23.45599937438965 -0.9160000085830688,23.45400047302246 -0.9160000085830688,23.45400047302246 C-21.95400047302246,23.45400047302246 -39.0099983215332,6.4039998054504395 -39.0099983215332,-14.640000343322754 C-39.0099983215332,-35.683998107910156 -21.95400047302246,-52.731998443603516 -0.9160000085830688,-52.731998443603516 C20.121999740600586,-52.731998443603516 37.17499923706055,-35.67599868774414 37.17499923706055,-14.637999534606934 C37.17499923706055,6.400000095367432 20.121999740600586,23.45599937438965 -0.9160000085830688,23.45599937438965z M-1.0880000591278076,20.538000106811523 C5.86899995803833,20.538000106811523 12.670000076293945,18.475000381469727 18.454999923706055,14.609999656677246 C24.239999771118164,10.744999885559082 28.74799919128418,5.25 31.40999984741211,-1.1770000457763672 C34.073001861572266,-7.605000019073486 34.76900100708008,-14.677000045776367 33.4119987487793,-21.5 C32.05500030517578,-28.322999954223633 28.70400047302246,-34.59199905395508 23.78499984741211,-39.51100158691406 C18.864999771118164,-44.43000030517578 12.597999572753906,-47.78099822998047 5.77400016784668,-49.13800048828125 C-1.0490000247955322,-50.494998931884766 -8.121000289916992,-49.79800033569336 -14.548999786376953,-47.13600158691406 C-20.97599983215332,-44.4739990234375 -26.469999313354492,-39.96500015258789 -30.334999084472656,-34.18000030517578 C-34.20000076293945,-28.395000457763672 -36.26300048828125,-21.594999313354492 -36.26300048828125,-14.637999534606934 C-36.262001037597656,-5.309000015258789 -32.55699920654297,3.638000011444092 -25.959999084472656,10.234000205993652 C-19.363000869750977,16.829999923706055 -10.416999816894531,20.535999298095703 -1.0880000591278076,20.535999298095703 C-1.0880000591278076,20.535999298095703 -1.0880000591278076,20.538000106811523 -1.0880000591278076,20.538000106811523z M-1.003000020980835,16.249000549316406 C-1.003000020980835,16.249000549316406 -1.003000020980835,16.246999740600586 -1.003000020980835,16.246999740600586 C-9.217000007629395,16.246999740600586 -17.094999313354492,12.984000205993652 -22.90399932861328,7.176000118255615 C-28.711999893188477,1.3669999837875366 -31.975000381469727,-6.511000156402588 -31.975000381469727,-14.725000381469727 C-31.975000381469727,-20.850000381469727 -30.156999588012695,-26.83799934387207 -26.753999710083008,-31.930999755859375 C-23.35099983215332,-37.02399826049805 -18.51300048828125,-40.99399948120117 -12.854000091552734,-43.3380012512207 C-7.193999767303467,-45.68199920654297 -0.9679999947547913,-46.29399871826172 5.039999961853027,-45.0989990234375 C11.04800033569336,-43.90399932861328 16.566999435424805,-40.952999114990234 20.898000717163086,-36.62200164794922 C25.229000091552734,-32.290000915527344 28.179000854492188,-26.77199935913086 29.374000549316406,-20.763999938964844 C30.569000244140625,-14.755999565124512 29.954999923706055,-8.529000282287598 27.611000061035156,-2.869999885559082 C25.267000198364258,2.7890000343322754 21.297000885009766,7.626999855041504 16.20400047302246,11.029999732971191 C11.111000061035156,14.432999610900879 5.123000144958496,16.249000549316406 -1.003000020980835,16.249000549316406z M-0.9340000152587891,-9.48799991607666 C-2.4539999961853027,-9.48900032043457 -3.9709999561309814,-9.36299991607666 -5.468999862670898,-9.109000205993652 C-5.468999862670898,-9.109000205993652 -3.2109999656677246,-13.008999824523926 -3.2109999656677246,-13.008999824523926 C-2.450000047683716,-13.0600004196167 -1.6890000104904175,-13.086000442504883 -0.9340000152587891,-13.086000442504883 C0.8420000076293945,-13.085000038146973 2.615000009536743,-12.942999839782715 4.368000030517578,-12.661999702453613 C4.368000030517578,-12.661999702453613 -4.370999813079834,-27.797000885009766 -4.370999813079834,-27.797000885009766 C-4.370999813079834,-27.797000885009766 -18.926000595092773,-2.5959999561309814 -18.926000595092773,-2.5959999561309814 C-18.926000595092773,-2.5959999561309814 -21.006000518798828,-6.198999881744385 -21.006000518798828,-6.198999881744385 C-21.006000518798828,-6.198999881744385 -4.4039998054504395,-34.95500183105469 -4.4039998054504395,-34.95500183105469 C-4.4039998054504395,-34.95500183105469 -4.370999813079834,-34.895999908447266 -4.370999813079834,-34.895999908447266 C-4.370999813079834,-34.895999908447266 -4.336999893188477,-34.952999114990234 -4.336999893188477,-34.952999114990234 C-4.336999893188477,-34.952999114990234 15.699000358581543,-0.25 15.699000358581543,-0.25 C15.699000358581543,-0.25 11.538999557495117,-0.25 11.538999557495117,-0.25 C11.538999557495117,-0.25 6.855999946594238,-8.359999656677246 6.855999946594238,-8.359999656677246 C4.328999996185303,-9.116999626159668 1.7039999961853027,-9.498000144958496 -0.9340000152587891,-9.489999771118164 C-0.9340000152587891,-9.489999771118164 -0.9340000152587891,-9.48799991607666 -0.9340000152587891,-9.48799991607666z M16.98699951171875,-2.5369999408721924 C16.98699951171875,-2.5369999408721924 19.066999435424805,-6.139999866485596 19.066999435424805,-6.139999866485596 C19.066999435424805,-6.139999866485596 1.7489999532699585,-36.13600158691406 1.7489999532699585,-36.13600158691406 C1.7489999532699585,-36.13600158691406 -2.4110000133514404,-36.13600158691406 -2.4110000133514404,-36.13600158691406 C-2.4110000133514404,-36.13600158691406 16.98699951171875,-2.5369999408721924 16.98699951171875,-2.5369999408721924z M-2.265000104904175,-19.55699920654297 C-2.265000104904175,-19.55699920654297 -10.230999946594238,-5.755000114440918 -10.230999946594238,-5.755000114440918 C-7.380000114440918,-6.614999771118164 -4.026000022888184,-6.999000072479248 -0.8610000014305115,-6.999000072479248 C-0.6050000190734863,-6.999000072479248 -0.3479999899864197,-7 -0.09200000017881393,-6.989999771118164 C1.7050000429153442,-6.947000026702881 3.496000051498413,-6.761000156402588 5.263000011444092,-6.434000015258789 C5.263000011444092,-6.434000015258789 7.921000003814697,-1.8289999961853027 7.921000003814697,-1.8289999961853027 C5.109000205993652,-2.865000009536743 2.135999917984009,-3.3989999294281006 -0.8610000014305115,-3.4070000648498535 C-5.228000164031982,-3.421999931335449 -9.529999732971191,-2.3489999771118164 -13.378000259399414,-0.2840000092983246 C-13.378000259399414,-0.2840000092983246 -13.319000244140625,-0.3880000114440918 -13.319000244140625,-0.3880000114440918 C-13.319000244140625,-0.3880000114440918 -13.39900016784668,-0.25 -13.39900016784668,-0.25 C-13.39900016784668,-0.25 -17.559999465942383,-0.25 -17.559999465942383,-0.25 C-17.559999465942383,-0.25 -4.330999851226807,-23.15999984741211 -4.330999851226807,-23.15999984741211 C-4.330999851226807,-23.15999984741211 -2.265000104904175,-19.55699920654297 -2.265000104904175,-19.55699920654297z"></path></g></g><g transform="matrix(0.8563200235366821,0,0,0.8563200235366821,585,1365)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-1.0870000123977661,-62.63999938964844 C25.42300033569336,-62.63999938964844 46.91299819946289,-41.150001525878906 46.91299819946289,-14.640000343322754 C46.91299819946289,11.869999885559082 25.42300033569336,33.36000061035156 -1.0870000123977661,33.36000061035156 C-27.597000122070312,33.36000061035156 -49.08700180053711,11.869999885559082 -49.08700180053711,-14.640000343322754 C-49.08700180053711,-41.150001525878906 -27.597000122070312,-62.63999938964844 -1.0870000123977661,-62.63999938964844z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(26,26,26)" fill-opacity="1" d=" M12.310999870300293,-8.564000129699707 C12.310999870300293,-8.564000129699707 -1.2089999914169312,4.955999851226807 -1.2089999914169312,4.955999851226807 C-1.2089999914169312,4.955999851226807 -8.732999801635742,-2.569000005722046 -8.732999801635742,-2.569000005722046 C-8.732999801635742,-2.569000005722046 4.785999774932861,-16.08799934387207 4.785999774932861,-16.08799934387207 C4.785999774932861,-16.08799934387207 -1.2259999513626099,-22.10099983215332 -1.2259999513626099,-22.10099983215332 C-1.2259999513626099,-22.10099983215332 -20.823999404907227,-2.503999948501587 -20.823999404907227,-2.503999948501587 C-20.823999404907227,-2.503999948501587 -1.2799999713897705,17.040000915527344 -1.2799999713897705,17.040000915527344 C-1.2799999713897705,17.040000915527344 18.316999435424805,-2.558000087738037 18.316999435424805,-2.558000087738037 C18.316999435424805,-2.558000087738037 12.310999870300293,-8.564000129699707 12.310999870300293,-8.564000129699707z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(56,161,219)" fill-opacity="1" d=" M24.375,-20.784000396728516 C24.375,-20.784000396728516 -1.159999966621399,-46.31999969482422 -1.159999966621399,-46.31999969482422 C-1.159999966621399,-46.31999969482422 -26.767000198364258,-20.71299934387207 -26.767000198364258,-20.71299934387207 C-26.767000198364258,-20.71299934387207 -26.684999465942383,-8.744000434875488 -26.684999465942383,-8.744000434875488 C-26.684999465942383,-8.744000434875488 -1.2680000066757202,-34.15999984741211 -1.2680000066757202,-34.15999984741211 C-1.2680000066757202,-34.15999984741211 24.33300018310547,-8.557999610900879 24.33300018310547,-8.557999610900879 C24.33300018310547,-8.557999610900879 24.375,-20.784000396728516 24.375,-20.784000396728516z"></path></g></g><g transform="matrix(1,0,0,1,1385,1149)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M0,-48 C26.510000228881836,-48 48,-26.510000228881836 48,0 C48,26.510000228881836 26.510000228881836,48 0,48 C-26.510000228881836,48 -48,26.510000228881836 -48,0 C-48,-26.510000228881836 -26.510000228881836,-48 0,-48z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(79,71,62)" fill-opacity="1" d=" M1.9529999494552612,-0.2770000100135803 C1.9529999494552612,-0.2770000100135803 25.06399917602539,22.724000930786133 25.06399917602539,22.724000930786133 C31.256000518798828,16.089000701904297 34.020999908447266,7.795000076293945 34.020999908447266,-0.2770000100135803 C34.020999908447266,-8.902000427246094 30.815000534057617,-17.084999084472656 24.95400047302246,-23.38800048828125 C24.95400047302246,-23.38800048828125 1.9529999494552612,-0.2770000100135803 1.9529999494552612,-0.2770000100135803z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(79,71,62)" fill-opacity="1" d=" M0.29600000381469727,1.3819999694824219 C0.29600000381469727,1.3819999694824219 -22.482999801635742,24.27199935913086 -22.482999801635742,24.27199935913086 C-22.482999801635742,24.27199935913086 0.1860000044107437,33.67100143432617 0.1860000044107437,33.67100143432617 C0.1860000044107437,33.67100143432617 23.076000213623047,24.27199935913086 23.076000213623047,24.27199935913086 C23.076000213623047,24.27199935913086 0.29600000381469727,1.3819999694824219 0.29600000381469727,1.3819999694824219z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(79,71,62)" fill-opacity="1" d=" M-0.5910000205039978,-1.1610000133514404 C-0.5910000205039978,-1.1610000133514404 22.96299934387207,-24.71500015258789 22.96299934387207,-24.71500015258789 C22.96299934387207,-24.71500015258789 1.2890000343322754,-33.672000885009766 1.2890000343322754,-33.672000885009766 C1.2890000343322754,-33.672000885009766 -20.4950008392334,18.854000091552734 -20.4950008392334,18.854000091552734 C-20.4950008392334,18.854000091552734 -0.5910000205039978,-1.1610000133514404 -0.5910000205039978,-1.1610000133514404z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(79,71,62)" fill-opacity="1" d=" M-33.65299987792969,-0.16599999368190765 C-33.65299987792969,7.574999809265137 -30.888999938964844,16.09000015258789 -24.586000442504883,22.834999084472656 C-24.586000442504883,22.834999084472656 -1.805999994277954,-32.01300048828125 -1.805999994277954,-32.01300048828125 C-1.805999994277954,-32.01300048828125 -33.65299987792969,-0.16599999368190765 -33.65299987792969,-0.16599999368190765z"></path></g></g><g transform="matrix(1.8811365365982056,0.46584784984588623,-0.46584784984588623,1.8811365365982056,354,301)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(211,211,211)" fill-opacity="1" d=" M-70.4990005493164,7.797999858856201 C-77.76899719238281,13.593999862670898 -76.64900207519531,21.051000595092773 -67.9990005493164,24.45400047302246 C-67.9990005493164,24.45400047302246 -7.505000114440918,48.250999450683594 -7.505000114440918,48.250999450683594 C1.1449999809265137,51.65399932861328 14.050999641418457,49.7130012512207 21.320999145507812,43.91699981689453 C21.320999145507812,43.91699981689453 72.1760025024414,3.367000102996826 72.1760025024414,3.367000102996826 C79.44499969482422,-2.428999900817871 78.32599639892578,-9.88599967956543 69.6760025024414,-13.288999557495117 C69.6760025024414,-13.288999557495117 69.62799835205078,-13.309000015258789 69.62799835205078,-13.309000015258789 C69.62799835205078,-13.309000015258789 69.2699966430664,-15.690999984741211 69.2699966430664,-15.690999984741211 C69.2699966430664,-15.690999984741211 65.14700317382812,-15.071000099182129 65.14700317382812,-15.071000099182129 C65.14700317382812,-15.071000099182129 9.182000160217285,-37.08599853515625 9.182000160217285,-37.08599853515625 C0.5320000052452087,-40.48899841308594 -12.37399959564209,-38.54800033569336 -19.643999099731445,-32.75199890136719 C-19.643999099731445,-32.75199890136719 -66.6709976196289,4.745999813079834 -66.6709976196289,4.745999813079834 C-66.6709976196289,4.745999813079834 -70.81600189208984,5.36899995803833 -70.81600189208984,5.36899995803833 C-70.81600189208984,5.36899995803833 -70.45700073242188,7.763999938964844 -70.45700073242188,7.763999938964844 C-70.45700073242188,7.763999938964844 -70.4990005493164,7.797999858856201 -70.4990005493164,7.797999858856201z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_137)" fill-opacity="1" d=" M-72.1760025024414,-3.382999897003174 C-72.1760025024414,-3.382999897003174 -21.333999633789062,-43.91999816894531 -21.333999633789062,-43.91999816894531 C-14.0649995803833,-49.715999603271484 -1.159999966621399,-51.65399932861328 7.491000175476074,-48.25 C7.491000175476074,-48.25 67.9990005493164,-24.441999435424805 67.9990005493164,-24.441999435424805 C76.6500015258789,-21.038000106811523 77.7699966430664,-13.579999923706055 70.5009994506836,-7.783999919891357 C70.5009994506836,-7.783999919891357 19.659000396728516,32.75299835205078 19.659000396728516,32.75299835205078 C12.390000343322754,38.54899978637695 -0.5149999856948853,40.48699951171875 -9.166000366210938,37.08300018310547 C-9.166000366210938,37.08300018310547 -69.6729965209961,13.27400016784668 -69.6729965209961,13.27400016784668 C-78.3239974975586,9.869999885559082 -79.44499969482422,2.4130001068115234 -72.1760025024414,-3.382999897003174z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_138)" fill-opacity="1" d=" M6.866000175476074,-2.5510001182556152 C6.866000175476074,-2.5510001182556152 -20.416000366210938,6.053999900817871 -20.416000366210938,6.053999900817871 C-20.416000366210938,6.053999900817871 -20.049999237060547,6.72599983215332 -20.049999237060547,6.72599983215332 C-15.920000076293945,14.307999610900879 -2.8420000076293945,18.124000549316406 11.392000198364258,15.899999618530273 C28.142000198364258,13.282999992370605 40.67900085449219,3.2869999408721924 39.39500045776367,-6.427000045776367 C38.303001403808594,-14.682000160217285 27.458999633789062,-20.27899932861328 13.324000358581543,-19.884000778198242 C13.324000358581543,-19.884000778198242 12.071000099182129,-19.849000930786133 12.071000099182129,-19.849000930786133 C12.071000099182129,-19.849000930786133 6.866000175476074,-2.5510001182556152 6.866000175476074,-2.5510001182556152z"></path></g><g opacity="0.6" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_139)" fill-opacity="1" d=" M-17.77400016784668,-12.272000312805176 C-17.77400016784668,-12.272000312805176 -22.246999740600586,2.640000104904175 -22.246999740600586,2.640000104904175 C-22.246999740600586,2.640000104904175 1.2690000534057617,-4.7789998054504395 1.2690000534057617,-4.7789998054504395 C1.2690000534057617,-4.7789998054504395 5.74399995803833,-19.67799949645996 5.74399995803833,-19.67799949645996 C5.74399995803833,-19.67799949645996 -17.77400016784668,-12.272000312805176 -17.77400016784668,-12.272000312805176z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_140)" fill-opacity="1" d=" M-15.270999908447266,-11.309000015258789 C-15.270999908447266,-11.309000015258789 -20.399999618530273,6.046000003814697 -20.399999618530273,6.046000003814697 C-20.399999618530273,6.046000003814697 6.880000114440918,-2.5490000247955322 6.880000114440918,-2.5490000247955322 C6.880000114440918,-2.5490000247955322 12.07699966430664,-19.851999282836914 12.07699966430664,-19.851999282836914 C12.07699966430664,-19.851999282836914 -15.270999908447266,-11.309000015258789 -15.270999908447266,-11.309000015258789z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_141)" fill-opacity="1" d=" M-33.79499816894531,-18.573999404907227 C-33.79499816894531,-18.573999404907227 -22.246999740600586,2.6410000324249268 -22.246999740600586,2.6410000324249268 C-22.246999740600586,2.6410000324249268 1.2680000066757202,-4.7769999504089355 1.2680000066757202,-4.7769999504089355 C1.2680000066757202,-4.7769999504089355 -33.79499816894531,-18.573999404907227 -33.79499816894531,-18.573999404907227z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_142)" fill-opacity="1" d=" M1.2710000276565552,-4.7779998779296875 C1.2710000276565552,-4.7779998779296875 5.755000114440918,-19.684999465942383 5.755000114440918,-19.684999465942383 C5.755000114440918,-19.684999465942383 -33.80500030517578,-18.579999923706055 -33.80500030517578,-18.579999923706055 C-33.80500030517578,-18.579999923706055 1.2710000276565552,-4.7779998779296875 1.2710000276565552,-4.7779998779296875z"></path></g></g><g transform="matrix(1.0061724185943604,0.731456458568573,-0.731456458568573,1.0061724185943604,466,1031)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_131)" fill-opacity="1" d=" M-83.47699737548828,-2.308000087738037 C-83.64700317382812,4.796000003814697 -79.03700256347656,11.930999755859375 -69.64800262451172,17.351999282836914 C-69.64800262451172,17.351999282836914 -22.079999923706055,44.814998626708984 -22.079999923706055,44.814998626708984 C-3.635999917984009,55.4640007019043 26.26799964904785,55.4640007019043 44.7130012512207,44.814998626708984 C44.7130012512207,44.814998626708984 92.28099822998047,17.351999282836914 92.28099822998047,17.351999282836914 C101.62300109863281,11.958000183105469 106.23300170898438,4.867000102996826 106.11199951171875,-2.2019999027252197 C106.11199951171875,-2.2019999027252197 106.11199951171875,-16.461999893188477 106.11199951171875,-16.461999893188477 C106.11199951171875,-16.461999893188477 98.86000061035156,-16.461999893188477 98.86000061035156,-16.461999893188477 C97.01799774169922,-18.148000717163086 94.82499694824219,-19.742000579833984 92.28099822998047,-21.211000442504883 C92.28099822998047,-21.211000442504883 44.7130012512207,-48.67499923706055 44.7130012512207,-48.67499923706055 C26.26799964904785,-59.32400131225586 -3.635999917984009,-59.32400131225586 -22.079999923706055,-48.67499923706055 C-22.079999923706055,-48.67499923706055 -69.64800262451172,-21.211000442504883 -69.64800262451172,-21.211000442504883 C-72.19200134277344,-19.742000579833984 -74.38600158691406,-18.148000717163086 -76.22799682617188,-16.461999893188477 C-76.22799682617188,-16.461999893188477 -83.47699737548828,-16.461999893188477 -83.47699737548828,-16.461999893188477 C-83.47699737548828,-16.461999893188477 -83.47699737548828,-2.308000087738037 -83.47699737548828,-2.308000087738037z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_132)" fill-opacity="1" d=" M-69.64399719238281,-36.305999755859375 C-69.64399719238281,-36.305999755859375 -22.075000762939453,-63.77000045776367 -22.075000762939453,-63.77000045776367 C-3.63100004196167,-74.41899871826172 26.27400016784668,-74.41899871826172 44.71799850463867,-63.77000045776367 C44.71799850463867,-63.77000045776367 92.28600311279297,-36.305999755859375 92.28600311279297,-36.305999755859375 C110.7300033569336,-25.656999588012695 110.7300033569336,-8.392000198364258 92.28600311279297,2.256999969482422 C92.28600311279297,2.256999969482422 44.71799850463867,29.72100067138672 44.71799850463867,29.72100067138672 C26.27400016784668,40.369998931884766 -3.63100004196167,40.369998931884766 -22.075000762939453,29.72100067138672 C-22.075000762939453,29.72100067138672 -69.64399719238281,2.256999969482422 -69.64399719238281,2.256999969482422 C-88.08799743652344,-8.392000198364258 -88.08799743652344,-25.656999588012695 -69.64399719238281,-36.305999755859375z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="url(#__lottie_element_133)" fill-opacity="1" d=" M37.22999954223633,-48.007999420166016 C37.22999954223633,-48.007999420166016 56.78900146484375,-5.853000164031982 56.78900146484375,-5.853000164031982 C57.34600067138672,-4.566999912261963 57.41600036621094,-3.240999937057495 56.78900146484375,-1.9950000047683716 C56.231998443603516,-0.7089999914169312 55.04899978637695,0.4569999873638153 53.448001861572266,1.38100004196167 C51.84700012207031,2.305000066757202 49.82899856567383,2.98799991607666 47.60100173950195,3.309999942779541 C45.374000549316406,3.63100004196167 43.07699966430664,3.671999931335449 40.91899871826172,3.309999942779541 C40.91899871826172,3.309999942779541 28.18199920654297,1.340999960899353 28.18199920654297,1.340999960899353 C28.18199920654297,1.340999960899353 28.11199951171875,1.2999999523162842 28.11199951171875,1.2999999523162842 C28.11199951171875,1.2999999523162842 28.042999267578125,1.2599999904632568 28.11199951171875,1.2200000286102295 C28.11199951171875,1.2200000286102295 28.18199920654297,1.1799999475479126 28.18199920654297,1.1799999475479126 C28.18199920654297,1.1799999475479126 28.25200080871582,1.1399999856948853 28.320999145507812,1.1799999475479126 C29.992000579833984,1.1799999475479126 31.66200065612793,0.9390000104904175 33.124000549316406,0.4970000088214874 C34.58599853515625,0.054999999701976776 35.90800094604492,-0.5490000247955322 36.95199966430664,-1.312000036239624 C37.99599838256836,-2.0759999752044678 38.69200134277344,-2.9600000381469727 38.97100067138672,-3.9240000247955322 C39.319000244140625,-4.8480000495910645 39.249000549316406,-5.853000164031982 38.83100128173828,-6.736999988555908 C38.83100128173828,-6.736999988555908 22.405000686645508,-42.02000045776367 22.405000686645508,-42.02000045776367 C21.917999267578125,-42.944000244140625 21.152000427246094,-43.78799819946289 20.107999801635742,-44.551998138427734 C18.993999481201172,-45.275001525878906 17.601999282836914,-45.83700180053711 16.070999145507812,-46.23899841308594 C14.470000267028809,-46.60100173950195 12.798999786376953,-46.762001037597656 11.199000358581543,-46.72200012207031 C9.527999877929688,-46.641998291015625 7.927000045776367,-46.36000061035156 6.466000080108643,-45.917999267578125 C6.466000080108643,-45.917999267578125 6.395999908447266,-45.87799835205078 6.395999908447266,-45.87799835205078 C6.395999908447266,-45.87799835205078 6.326000213623047,-45.917999267578125 6.326000213623047,-45.917999267578125 C6.326000213623047,-45.917999267578125 6.256999969482422,-45.95800018310547 6.256999969482422,-45.95800018310547 C6.256999969482422,-45.95800018310547 6.326000213623047,-45.99800109863281 6.326000213623047,-45.99800109863281 C6.326000213623047,-45.99800109863281 15.791999816894531,-51.4640007019043 15.791999816894531,-51.4640007019043 C17.39299964904785,-52.38800048828125 19.41200065612793,-53.07099914550781 21.638999938964844,-53.393001556396484 C23.865999221801758,-53.71500015258789 26.163000106811523,-53.755001068115234 28.320999145507812,-53.393001556396484 C30.54800033569336,-53.07099914550781 32.56700134277344,-52.38800048828125 34.167999267578125,-51.4640007019043 C35.42100143432617,-50.41899871826172 36.534000396728516,-49.29399871826172 37.22999954223633,-48.007999420166016z M-8.289999961853027,-37.720001220703125 C-8.289999961853027,-37.720001220703125 -17.54800033569336,-32.375 -17.54800033569336,-32.375 C-17.54800033569336,-32.375 -17.617000579833984,-32.334999084472656 -17.617000579833984,-32.334999084472656 C-17.617000579833984,-32.334999084472656 -17.54800033569336,-32.29499816894531 -17.54800033569336,-32.29499816894531 C-17.54800033569336,-32.29499816894531 -17.47800064086914,-32.255001068115234 -17.47800064086914,-32.255001068115234 C-17.47800064086914,-32.255001068115234 -17.47800064086914,-32.255001068115234 -17.408000946044922,-32.29499816894531 C-16.572999954223633,-32.5359992980957 -15.597999572753906,-32.61600112915039 -14.62399959564209,-32.61600112915039 C-13.649999618530273,-32.61600112915039 -12.744999885559082,-32.49599838256836 -11.90999984741211,-32.255001068115234 C-11.074999809265137,-32.013999938964844 -10.307999610900879,-31.652000427246094 -9.682000160217285,-31.290000915527344 C-9.055999755859375,-30.847999572753906 -8.638999938964844,-30.365999221801758 -8.430000305175781,-29.8439998626709 C-8.430000305175781,-29.8439998626709 1.3839999437332153,-8.585000038146973 1.3839999437332153,-8.585000038146973 C1.6629999876022339,-8.022000312805176 1.6629999876022339,-7.460999965667725 1.4539999961853027,-6.938000202178955 C1.315000057220459,-6.375 0.8970000147819519,-5.89300012588501 0.3400000035762787,-5.410999774932861 C-0.2160000056028366,-4.928999900817871 -0.9819999933242798,-4.566999912261963 -1.8170000314712524,-4.326000213623047 C-2.6530001163482666,-4.085000038146973 -3.627000093460083,-3.9230000972747803 -4.60099983215332,-3.8429999351501465 C-4.60099983215332,-3.8429999351501465 -4.671000003814697,-3.802999973297119 -4.741000175476074,-3.8429999351501465 C-4.741000175476074,-3.8429999351501465 -4.809999942779541,-3.802999973297119 -4.809999942779541,-3.802999973297119 C-4.809999942779541,-3.802999973297119 -4.739999771118164,-3.763000011444092 -4.809999942779541,-3.7230000495910645 C-4.809999942779541,-3.7230000495910645 -4.741000175476074,-3.683000087738037 -4.741000175476074,-3.683000087738037 C-4.741000175476074,-3.683000087738037 8.206000328063965,-1.6729999780654907 8.206000328063965,-1.6729999780654907 C9.666999816894531,-1.472000002861023 11.199000358581543,-1.472000002861023 12.65999984741211,-1.6729999780654907 C14.121999740600586,-1.8739999532699585 15.444000244140625,-2.315999984741211 16.558000564575195,-2.9590001106262207 C17.601999282836914,-3.562000036239624 18.368000030517578,-4.326000213623047 18.78499984741211,-5.210000038146973 C19.202999114990234,-6.093999862670898 19.132999420166016,-6.938000202178955 18.78499984741211,-7.7820000648498535 C18.78499984741211,-7.7820000648498535 6.117000102996826,-35.5099983215332 6.117000102996826,-35.5099983215332 C5.769000053405762,-36.354000091552734 5.004000186920166,-37.117000579833984 3.890000104904175,-37.7599983215332 C2.8459999561309814,-38.362998962402344 1.5240000486373901,-38.80500030517578 -0.00800000037997961,-39.04600143432617 C-1.468999981880188,-39.24700164794922 -3.000999927520752,-39.24700164794922 -4.461999893188477,-39.04600143432617 C-5.854000091552734,-38.80500030517578 -7.176000118255615,-38.362998962402344 -8.289999961853027,-37.720001220703125z M-40.37799835205078,-19.194000244140625 C-41.979000091552734,-18.270000457763672 -43.02299880981445,-17.104999542236328 -43.5099983215332,-15.859000205993652 C-43.928001403808594,-14.572999954223633 -43.71900177001953,-13.246000289916992 -42.81399917602539,-12.081000328063965 C-41.979000091552734,-10.875 -40.516998291015625,-9.871000289916992 -38.707000732421875,-9.14799976348877 C-36.89699935913086,-8.425000190734863 -34.66999816894531,-8.02299976348877 -32.44300079345703,-8.02299976348877 C-30.215999603271484,-8.02299976348877 -27.98900032043457,-8.425000190734863 -26.179000854492188,-9.14799976348877 C-24.368999481201172,-9.871000289916992 -22.906999588012695,-10.875 -22.07200050354004,-12.081000328063965 C-21.23699951171875,-13.286999702453613 -20.95800018310547,-14.572999954223633 -21.375999450683594,-15.859000205993652 C-21.79400062561035,-17.145000457763672 -22.906999588012695,-18.270000457763672 -24.507999420166016,-19.194000244140625 C-25.552000045776367,-19.797000885009766 -26.80500030517578,-20.27899932861328 -28.19700050354004,-20.60099983215332 C-29.589000701904297,-20.92300033569336 -31.051000595092773,-21.12299919128418 -32.51300048828125,-21.08300018310547 C-34.04399871826172,-21.08300018310547 -35.43600082397461,-20.92300033569336 -36.827999114990234,-20.60099983215332 C-38.08100128173828,-20.27899932861328 -39.33399963378906,-19.797000885009766 -40.37799835205078,-19.194000244140625z"></path></g></g><g transform="matrix(-1.4030777215957642,0.6879984736442566,-0.6879984736442566,-1.4030777215957642,1531.5,1275)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(242,242,242)" fill-opacity="1" d=" M11.321000099182129,-57.47700119018555 C37.83100128173828,-57.47700119018555 59.32099914550781,-35.98699951171875 59.32099914550781,-9.47700023651123 C59.32099914550781,17.033000946044922 37.83100128173828,38.52299880981445 11.321000099182129,38.52299880981445 C-15.189000129699707,38.52299880981445 -36.67900085449219,17.033000946044922 -36.67900085449219,-9.47700023651123 C-36.67900085449219,-35.98699951171875 -15.189000129699707,-57.47700119018555 11.321000099182129,-57.47700119018555z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M-9.800000190734863,-9.619999885559082 C-9.800000190734863,-9.619999885559082 10.967000007629395,-20.70199966430664 10.967000007629395,-20.70199966430664 C10.967000007629395,-20.70199966430664 31.46500015258789,-9.699999809265137 31.46500015258789,-9.699999809265137 C31.46500015258789,-9.699999809265137 10.984000205993652,1.3910000324249268 10.984000205993652,1.3910000324249268 C10.984000205993652,1.3910000324249268 -9.800000190734863,-9.619999885559082 -9.800000190734863,-9.619999885559082z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(1,200,83)" fill-opacity="1" d=" M-9.800000190734863,-9.619999885559082 C-9.800000190734863,-9.619999885559082 10.967000007629395,-20.70199966430664 10.967000007629395,-20.70199966430664 C10.967000007629395,-20.70199966430664 31.46500015258789,-9.699999809265137 31.46500015258789,-9.699999809265137 C31.46500015258789,-9.699999809265137 10.984000205993652,1.3910000324249268 10.984000205993652,1.3910000324249268 C10.984000205993652,1.3910000324249268 -9.800000190734863,-9.619999885559082 -9.800000190734863,-9.619999885559082z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M10.965999603271484,-20.70199966430664 C10.965999603271484,-20.70199966430664 31.464000701904297,-9.699999809265137 31.464000701904297,-9.699999809265137 C31.464000701904297,-9.699999809265137 10.984000205993652,1.3910000324249268 10.984000205993652,1.3910000324249268 C10.984000205993652,1.3910000324249268 10.965999603271484,-20.70199966430664 10.965999603271484,-20.70199966430664z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,120,49)" fill-opacity="1" d=" M10.965999603271484,-7.920000076293945 C10.965999603271484,-7.920000076293945 31.464000701904297,-9.699999809265137 31.464000701904297,-9.699999809265137 C31.464000701904297,-9.699999809265137 10.984000205993652,1.3919999599456787 10.984000205993652,1.3919999599456787 C10.984000205993652,1.3919999599456787 10.965999603271484,-7.920000076293945 10.965999603271484,-7.920000076293945 C10.965999603271484,-7.920000076293945 10.965999603271484,-7.920000076293945 10.965999603271484,-7.920000076293945z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M10.965999603271484,-7.920000076293945 C10.965999603271484,-7.920000076293945 -9.800000190734863,-9.619999885559082 -9.800000190734863,-9.619999885559082 C-9.800000190734863,-9.619999885559082 10.949000358581543,1.3910000324249268 10.949000358581543,1.3910000324249268 C10.949000358581543,1.3910000324249268 10.965999603271484,-7.920000076293945 10.965999603271484,-7.920000076293945 C10.965999603271484,-7.920000076293945 10.965999603271484,-7.920000076293945 10.965999603271484,-7.920000076293945z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M-9.803999900817871,-6.672999858856201 C-2.5299999713897705,-2.815000057220459 5.050000190734863,1.2300000190734863 10.918000221252441,4.35699987411499 C10.918000221252441,4.35699987411499 31.47100067138672,-6.669000148773193 31.47100067138672,-6.669000148773193 C24.030000686645508,4.388999938964844 17.83099937438965,13.586000442504883 10.918000221252441,23.767000198364258 C3.996999979019165,13.607999801635742 -3.6510000228881836,2.3929998874664307 -9.803999900817871,-6.672999858856201z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(1,200,83)" fill-opacity="1" d=" M-9.803999900817871,-6.672999858856201 C-2.5299999713897705,-2.815000057220459 5.050000190734863,1.2300000190734863 10.918000221252441,4.35699987411499 C10.918000221252441,4.35699987411499 31.47100067138672,-6.669000148773193 31.47100067138672,-6.669000148773193 C24.030000686645508,4.388999938964844 17.83099937438965,13.586000442504883 10.918000221252441,23.767000198364258 C3.996999979019165,13.607999801635742 -3.6510000228881836,2.3929998874664307 -9.803999900817871,-6.672999858856201z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M10.918999671936035,4.35699987411499 C10.918999671936035,4.35699987411499 31.472000122070312,-6.670000076293945 31.472000122070312,-6.670000076293945 C24.0310001373291,4.388000011444092 10.918999671936035,23.767000198364258 10.918999671936035,23.767000198364258 C10.918999671936035,23.767000198364258 10.918999671936035,4.35699987411499 10.918999671936035,4.35699987411499z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M10.918999671936035,4.35699987411499 C10.918999671936035,4.35699987411499 31.472000122070312,-6.670000076293945 31.472000122070312,-6.670000076293945 C24.0310001373291,4.388000011444092 17.832000732421875,13.586000442504883 10.918999671936035,23.767000198364258 C10.918999671936035,23.767000198364258 10.918999671936035,4.35699987411499 10.918999671936035,4.35699987411499z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(1,200,83)" fill-opacity="1" d=" M10.916000366210938,-23.783000946044922 C10.916000366210938,-23.783000946044922 -9.800000190734863,-12.87399959564209 -9.800000190734863,-12.87399959564209 C-9.800000190734863,-12.87399959564209 10.826000213623047,-43.07699966430664 10.826000213623047,-43.07699966430664 C10.826000213623047,-43.07699966430664 31.46500015258789,-12.809000015258789 31.46500015258789,-12.809000015258789 C31.46500015258789,-12.809000015258789 10.916000366210938,-23.783000946044922 10.916000366210938,-23.783000946044922z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(0,159,66)" fill-opacity="1" d=" M10.914999961853027,-23.783000946044922 C10.914999961853027,-23.783000946044922 10.824999809265137,-43.07699966430664 10.824999809265137,-43.07699966430664 C10.824999809265137,-43.07699966430664 31.464000701904297,-12.809000015258789 31.464000701904297,-12.809000015258789 C31.464000701904297,-12.809000015258789 10.914999961853027,-23.783000946044922 10.914999961853027,-23.783000946044922z"></path></g></g></g></svg></div></div></div>                                <div id="animateWrap" class="lg:w-[678px]">
                                    <div id="tokenSvg" class="w-[800px] md:w-[1000px] lg:w-auto"></div>
                                </div>
                            </div>
                            <div id="section2" class="section2 relative mt-[48px] pb-[180px] md:pb-[280px] lg:top-0 lg:mt-0 lg:pb-0">
                                <div class="relative z-20 flex w-full items-center  justify-center pb-20 lg:pb-[140px]">
                                    <section class="mx-auto w-full px-6 md:px-12 lg:max-w-[1200px] lg:px-0 ">
                                        <div class="mx-auto flex w-full flex-col items-center md:w-[594px] lg:w-auto">
                                            <h4 style="color: black;" id="explore-title" class="headline-4 md:headline-2 lg:headline-1 dark-t-primary mb-[16px] text-center ">Explore Web3 with ease</h4>
                                            <div style="color: black;" class="lg:body-1 body-2 dark-t-secondary dark-t-secondary text-center lg:max-w-[600px]">Trade your favorite tokens. Access multiple blockchains. Explore some of the best dApps. All without leaving your wallet.</div>
                                            <div  class="subtitle-3 t-primary-hover mb-[16px] mt-4 flex cursor-pointer items-center lg:max-w-[600px]">
                                                <div>View Networks and dApps</div><img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/chevron-right-f.svg" class="h-6 w-6 translate-y-[1px]" /></div>
                                                <a class="hidden lg:block" href="./wallet.php"><button class="
        subtitle-2-1 lg:subtitle-3 flex h-12 w-full items-center justify-center rounded-[8px] md:w-[180px] lg:w-[180px]
      cursor-pointer bg-yellow1 text-black1
     h-[32px] w-auto px-[15px] lg:w-auto">List Your DApp</button></a></div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <section class="mx-auto w-full px-6 md:px-12 lg:max-w-[1200px] lg:px-0 mb-10 mt-[80px] md:mb-[120px] md:mt-[120px]">
                            <div class="transition-opacity duration-[1000ms] !opacity-0">
                                <div class="flex w-full justify-between py-10 md:mb-12 md:p-12 lg:mb-15  lg:px-[102px] lg:py-[48px] flex-col-reverse lg:flex-row lg:rtl:text-left">
                                    <div class="relative top-[-26px] overflow-hidden"><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px)" autoplay="" loop="" muted="" playsinline="" class="mx-auto flex w-full translate-y-[1px] justify-center md:w-[384px] lg:mx-0" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/switch-v2.mp4"></video></div>
                                    <div
                                        class="mb-[48px] flex w-full flex-col justify-center md:mb-[64px] lg:mb-0 lg:w-[486px]">
                                        <div class="t-primary-hover subtitle-1 mb-2">Transfer</div>
                                        <h6 id="head" class="t-primary headline-6 md:headline-3 mb-6">Bridge between the exchange and Web3</h6>
                                        <div id="para" class="body-2 t-secondary">Why juggle multiple apps? Simply do it all in one! Transfer funds between exchange and wallet quickly and easily. Move across CeFi, DeFi, and Web3 in a single tap.</div>
                                </div>
                            </div>
                    </div>
                    <div class="transition-opacity duration-[1000ms] !opacity-0">
                        <div class="flex w-full justify-between py-10 md:mb-12 md:p-12 lg:mb-15  lg:px-[102px] lg:py-[48px] flex-col lg:flex-row">
                            <div class="mb-[48px] flex w-full flex-col justify-center md:mb-[64px] lg:mb-0 lg:w-[486px]">
                                <div class="t-primary-hover subtitle-1 mb-2">Swap</div>
                                <h6 id="head" class="t-primary headline-6 md:headline-3 mb-6">Swap tokens cross-chain at the best prices</h6>
                                <div id="para" class="body-2 t-secondary">Powered by Binance Bridge and other DEXs, trade thousands of tokens across various networks. Get the best prices thanks to deep liquidity and low slippage.</div>
                            </div>
                            <div class="overflow-hidden"><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px)" autoplay="" loop="" muted="" playsinline="" class="mx-auto flex h-[240px] w-full translate-y-[1px] justify-center md:h-[300px] md:w-[384px] lg:mx-0"
                                    src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/swap-v3.mp4"></video></div>
                        </div>
                    </div>
                    <div class="transition-opacity duration-[1000ms] !opacity-0">
                        <div class="flex w-full justify-between py-10 md:mb-12 md:p-12 lg:mb-15  lg:px-[102px] lg:py-[48px] flex-col-reverse lg:flex-row">
                            <div class="mx-auto flex items-center lg:mx-0">
                                <div class="hover:bg-2 p-4 rounded-full cursor-pointer rtl:rotate-180 left-stack"><img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/chevron-left-f.svg" /></div>
                                <div class="stack mx-1 h-[354px] w-[228px] md:mx-7 lg:mx-4"></div>
                                <div class="hover:bg-2 p-4 rounded-full cursor-pointer rtl:rotate-180 right-stack"><img class="rotate-180" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/chevron-left-f.svg" /></div>
                            </div>
                            <div class="mb-[48px] flex w-full flex-col justify-center md:mb-[64px] lg:mb-0 lg:w-[486px]">
                                <div class="t-primary-hover subtitle-1 mb-2">Earn</div>
                                <h6 id="head" class="t-primary headline-6 md:headline-3 mb-6">Grow your portfolio with one click</h6>
                                <div id="para" class="body-2 t-secondary">Put your idle crypto to work. Find the best opportunities to earn yield on your assets in seconds.</div>
                            </div>
                        </div>
                    </div>
                    </section>
                    <div class="dark-bg-2 py-20 lg:py-[120px]">
                        <section class="mx-auto w-full px-6 md:px-12 lg:max-w-[1200px] lg:px-0 !px-0">
                            <div class="transition-opacity duration-[1000ms] !opacity-0">
                                <div class="px-6 lg:px-0">
                                    <h3 class="headline-4 md:headline-3 lg:headline-2 dark-t-primary mb-12 lg:mb-[64px]">
                                        <div class="hidden md:block md:text-center">
                                            <div>Putting you in control.</div>
                                            <div>Security at every stage.</div>
                                        </div>
                                        <div class="block text-center md:hidden md:text-left"><span class="mr-[4px]">Putting you in control.</span>Security at every stage.</div>
                                    </h3>
                                </div>
                                <div class="block lg:hidden">
                                    <div class="swiper swiper-wrap">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide md:!w-[327px] pl-6">
                                                <div class="dark-bg-1 md:mx-unset relative mx-auto h-[490px] rounded-2xl p-[24px] pb-0 md:w-[327px] lg:h-[520px] lg:w-[340px] lg:p-10 undefined">
                                                    <div class="headline-6 dark-t-primary mb-[16px]">Self-custody wallet</div>
                                                    <div class="body-2 dark-t-secondary">Funds in the wallet are exclusively held and managed by the user. You are in complete control over your crypto assets.</div><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px);outline-offset:-2px"
                                                        autoplay="" loop="" muted="" playsinline="" outline="2px solid #181A20" class="absolute bottom-[54px] left-0 right-0 mx-auto w-[279px] }" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/lock-v2.mp4"></video></div>
                                            </div>
                                            <div class="swiper-slide md:!w-[327px] md:pl-6">
                                                <div class="dark-bg-1 md:mx-unset relative mx-auto h-[490px] rounded-2xl p-[24px] pb-0 md:w-[327px] lg:h-[520px] lg:w-[340px] lg:p-10 lg:mx-[24px] lg:h-[580px] lg:w-[472px]">
                                                    <div class="headline-6 dark-t-primary mb-[16px]">Powered by MPC</div>
                                                    <div class="body-2 dark-t-secondary">
                                                        <div>Advanced multi-party computation (MPC) technology creates three separately stored ‘key shares’. Enjoy unparalleled security without the need for a seed phrase.</div>
                                                        <div class="t-primary-hover mt-[8px] flex cursor-pointer items-center">Learn More<img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/chevron-right-f.svg" class="h-6 w-6" /></div>
                                                    </div><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px);outline-offset:-2px" autoplay="" loop="" muted="" playsinline="" outline="2px solid #181A20" class="absolute bottom-[54px] left-0 right-0 mx-auto w-[279px] lg:w-[392px]}"
                                                        src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/cloud-mpc-v2.mp4"></video></div>
                                            </div>
                                            <div class="swiper-slide md:!w-[327px] pr-6 md:px-6">
                                                <div class="dark-bg-1 md:mx-unset relative mx-auto h-[490px] rounded-2xl p-[24px] pb-0 md:w-[327px] lg:h-[520px] lg:w-[340px] lg:p-10 undefined">
                                                    <div class="headline-6 dark-t-primary mb-[16px]">Built-in risk controls</div>
                                                    <div class="body-2 dark-t-secondary">Get alerts if a token or blockchain carries security risks, including wrong address protection or malicious contract detection.</div><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px);outline-offset:-2px"
                                                        autoplay="" loop="" muted="" playsinline="" outline="2px solid #181A20" class="absolute bottom-[54px] left-0 right-0 mx-auto w-[279px] }" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/risk-v2.mp4"></video></div>
                                            </div>
                                        </div>
                                        <div class="swiper-pagination"></div>
                                    </div>
                                </div>
                                <div class="hidden items-center justify-between lg:flex">
                                    <div class="dark-bg-1 md:mx-unset relative mx-auto h-[490px] rounded-2xl p-[24px] pb-0 md:w-[327px] lg:h-[520px] lg:w-[340px] lg:p-10 undefined">
                                        <div class="headline-6 dark-t-primary mb-[16px]">Self-custody wallet</div>
                                        <div class="body-2 dark-t-secondary">Funds in the wallet are exclusively held and managed by the user. You are in complete control over your crypto assets.</div><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px);outline-offset:-2px"
                                            autoplay="" loop="" muted="" playsinline="" outline="2px solid #181A20" class="absolute bottom-[54px] left-0 right-0 mx-auto w-[279px] }" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/lock-v2.mp4"></video></div>
                                    <div
                                        class="dark-bg-1 md:mx-unset relative mx-auto h-[490px] rounded-2xl p-[24px] pb-0 md:w-[327px] lg:h-[520px] lg:w-[340px] lg:p-10 lg:mx-[24px] lg:h-[580px] lg:w-[472px]">
                                        <div class="headline-6 dark-t-primary mb-[16px]">Powered by MPC</div>
                                        <div class="body-2 dark-t-secondary">
                                            <div>Advanced multi-party computation (MPC) technology creates three separately stored ‘key shares’. Enjoy unparalleled security without the need for a seed phrase.</div>
                                            <div class="t-primary-hover mt-[8px] flex cursor-pointer items-center">Learn More<img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/chevron-right-f.svg" class="h-6 w-6" /></div>
                                        </div><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px);outline-offset:-2px" autoplay="" loop="" muted="" playsinline="" outline="2px solid #181A20" class="absolute bottom-[54px] left-0 right-0 mx-auto w-[279px] lg:w-[392px]}"
                                            src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/cloud-mpc-v2.mp4"></video></div>
                                <div class="dark-bg-1 md:mx-unset relative mx-auto h-[490px] rounded-2xl p-[24px] pb-0 md:w-[327px] lg:h-[520px] lg:w-[340px] lg:p-10 undefined">
                                    <div class="headline-6 dark-t-primary mb-[16px]">Built-in risk controls</div>
                                    <div class="body-2 dark-t-secondary">Get alerts if a token or blockchain carries security risks, including wrong address protection or malicious contract detection.</div><video style="background:transparent;aspect-ratio:auto;clip-path:inset(1px);outline-offset:-2px"
                                        autoplay="" loop="" muted="" playsinline="" outline="2px solid #181A20" class="absolute bottom-[54px] left-0 right-0 mx-auto w-[279px] }" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/risk-v2.mp4"></video></div>
                            </div>
                    </div>
                    </section>
                </div>
                <div class="hidden py-[120px] lg:block">
                    <div class="mx-[auto] w-[1200px] rounded-[16px] border border-solid border-[#EAECEF] px-[120px] py-[80px]">
                        <div id="head" class="headline-2 t-primary mb-2 text-center">Engage with Millions of Users</div>
                        <div id="para" class="mx-auto mb-[48px] w-[640px] text-center">Deepen your understanding of your users with our robust Wallet SDK. Connect, engage, and grow with Binance&#x27;s vast and active user base.</div>
                        <div class="text-center"><a href="./wallet.php"><button class="
        subtitle-2-1 lg:subtitle-3 flex h-12 w-full items-center justify-center rounded-[8px] md:w-[180px] lg:w-[180px]
      cursor-pointer bg-yellow1 text-black1
     !inline-block">Get Wallet SDK</button></a></div>
                    </div>
                </div>
                <div class="dark-bg-2 hidden pt-[70px] lg:block">
                    <div class="mx-auto flex w-[990px] flex-row items-start justify-between">
                        <div>
                            <div class="headline-4 dark-t-primary mb-[16px]">Drive Impactful Campaigns</div>
                            <div class="body-2 dark-t-primary mb-[48px]">Harness the power of MyCryptoBank Wallet to host impactful campaigns for your project. Boost your project&#x27;s visibility and rely on our advanced technology for seamless execution.</div>
                            <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSeycrYmDp3GkE000ulzPqu830vxn5Baw53Quv18WjpDMgSPJg/viewform?usp=header"><button class="
        subtitle-2-1 lg:subtitle-3 flex h-12 w-full items-center justify-center rounded-[8px] md:w-[180px] lg:w-[180px]
      cursor-pointer bg-yellow1 text-black1
    ">Contact Us</button></a></div>
                        </div><img class="lg:h-[294px] lg:w-[282px]" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/business-mail.png" /></div>
                </div>
                <section class="mx-auto w-full px-6 md:px-12 lg:max-w-[1200px] lg:px-0 mt-12 md:mt-20 lg:mt-30 mb-20 md:mb-[120px]">
                    <div class="transition-opacity duration-[1000ms] !opacity-0">
                        <div class="light-line-border flex flex-col items-center rounded-2xl border px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-[120px] lg:py-[80px]">
                            <div class="flex flex-col items-center lg:max-w-[332px] lg:items-start">
                                <div class="t-primary-hover subtitle-1 lg:headline-6 mb-2">MyCryptoBank Wallet</div>
                                <h4 id="head" class="headline-6 md:headline-3 lg:headline-2 t-primary mb-6 text-center lg:mb-12 lg:!text-left">Web3 is easier with Binance</h4>
                                <div class="mb-12 lg:mb-0"><button class="
        subtitle-2-1 lg:subtitle-3 flex h-12 w-full items-center justify-center rounded-[8px] md:w-[180px] lg:w-[180px]
      cursor-pointer bg-yellow1 text-black1
     !w-[180px]">Get Started</button></div>
                            </div><img class="w-[253px] md:w-[478px] lg:w-[535px]" src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/phones.png" /></div>
                    </div>
                </section>
               
                <section class="mx-auto w-full px-6 md:px-12 lg:max-w-[1200px] lg:px-0 caption-2 t-third mt-[48px] md:mt-[64px]">
                    <div id="para" class="disclaimer mb-[24px]">Disclaimer: Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any
                        losses you may incur. APR is an estimate of rewards you will earn in cryptocurrency over the selected timeframe. It does not display the actual or predicted returns/yield in any fiat currency. APR is adjusted daily and the estimated
                        rewards may differ from the actual rewards generated. For selected staking products, Binance takes on all slashing risk. This means that the same amount of digital assets staked will be returned to you, even if they are slashed.
                        Not financial advice. For more information, see our Terms of Use and Risk Warning.</div>
                </section>
            </div>
            <div class="modal-base fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center modal-fade hidden">
                <div class="absolute h-full w-full bg-black opacity-40"></div>
                <div class="bg-1 modal-content relative z-10 h-full w-full px-6 py-5 md:h-auto md:rounded-[8px] md:w-[473px] lg:p-10 sm:pt-8 md:!w-[400px]">
                    <div class="flex items-center justify-between lg:items-baseline"><text class="subtitle-1 md:w-[203px]">Get Web3 Wallet With the Binance App</text><img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/close-f.svg" class="absolute right-6 top-6 h-6 w-6 cursor-pointer" /></div>
                    <div class="flex justify-center py-6 lg:pb-[30px] lg:pt-[34px]"><img class="h-[200px] w-[200px]" alt="qrcode" /></div>
                    <div class="grid gap-y-2">
                        <a href="https://app.appsflyer.com/id1436799971?pid=https%3A%2F%2Fwww.binance.com%2Fen&amp;c=https%3A%2F%2Fwww.binance.com%2Fen">
                            <div class="hover:bg-selected light-line-border rounded-lg border px-5 py-4 hover:cursor-pointer">
                                <div class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7732 18.7033C21.407 19.5418 20.9734 20.3136 20.4711 21.0232C19.7864 21.9906 19.2258 22.6602 18.7938 23.032C18.1241 23.6424 17.4065 23.955 16.6381 23.9728C16.0865 23.9728 15.4212 23.8172 14.6468 23.5017C13.8699 23.1876 13.1559 23.032 12.5031 23.032C11.8184 23.032 11.0841 23.1876 10.2986 23.5017C9.512 23.8172 8.87829 23.9816 8.39378 23.9979C7.65692 24.0291 6.92246 23.7076 6.18934 23.032C5.72142 22.6276 5.13615 21.9343 4.43502 20.9521C3.68277 19.9033 3.06431 18.687 2.5798 17.3004C2.0609 15.8026 1.80078 14.3523 1.80078 12.9482C1.80078 11.3398 2.1515 9.95259 2.85397 8.79011C3.40605 7.85636 4.14052 7.11979 5.05976 6.57906C5.979 6.03834 6.97224 5.76279 8.04187 5.74516C8.62714 5.74516 9.39465 5.92456 10.3484 6.27715C11.2995 6.63091 11.9102 6.81032 12.1779 6.81032C12.3781 6.81032 13.0565 6.60054 14.2066 6.18233C15.2941 5.79449 16.212 5.63391 16.964 5.69716C19.0016 5.86012 20.5324 6.6561 21.5505 8.09013C19.7281 9.18432 18.8267 10.7169 18.8446 12.6829C18.8611 14.2142 19.4217 15.4886 20.5235 16.5004C21.0228 16.97 21.5804 17.333 22.2008 17.5907C22.0662 17.9774 21.9242 18.3477 21.7732 18.7033ZM17.1 0.480137C17.1 1.68041 16.6575 2.8011 15.7755 3.8384C14.7111 5.07155 13.4237 5.78412 12.0275 5.67168C12.0098 5.52769 11.9994 5.37614 11.9994 5.21688C11.9994 4.06462 12.5056 2.83147 13.4045 1.82321C13.8533 1.3127 14.4241 0.888228 15.1162 0.549615C15.8069 0.216055 16.4602 0.031589 17.0746 0C17.0926 0.160458 17.1 0.320926 17.1 0.480121V0.480137Z" fill="currentColor"></path></svg>
                                    <div
                                        class="ml-4">
                                        <div class="subtitle-4">Download for iOS</div>
                                        <div class="caption-2 t-secondary">Get the Binance app from the App Store</div>
                                </div>
                            </div>
                    </div>
                    </a>
                    <a href="https://app.appsflyer.com/com.binance.dev?pid=https%3A%2F%2Fwww.binance.com%2Fen&amp;c=https%3A%2F%2Fwww.binance.com%2Fen">
                        <div class="hover:bg-selected light-line-border rounded-lg border px-5 py-4 hover:cursor-pointer">
                            <div class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.0313 11.4375L2.09375 22.0313C2.375 23.1563 3.40625 24 4.71875 24C5.1875 24 5.65625 23.9063 6.125 23.625L17.375 17.1563L12.0313 11.4375Z" fill="#EA4335"></path><path d="M22.1563 9.65625L17.2812 6.84375L11.8438 11.7188L17.2812 17.1563L22.0625 14.3438C22.9063 13.875 23.4688 13.0313 23.4688 12C23.5625 10.9688 23 10.125 22.1563 9.65625Z" fill="#FBBC04"></path><path d="M2.09375 1.96875C2 2.15625 2 2.4375 2 2.625V21.375C2 21.6563 2 21.8438 2.09375 22.0313L12.4063 11.7188L2.09375 1.96875Z" fill="#4285F4"></path><path d="M12.125 12L17.2813 6.84375L6.03125 0.375C5.65625 0.0937496 5.1875 0 4.625 0C3.40625 0 2.28125 0.843749 2 1.96875L12.125 12Z" fill="#34A853"></path></svg>
                                <div
                                    class="ml-4">
                                    <div class="subtitle-4">Download for Android</div>
                                    <div class="caption-2 t-secondary">Get the Binance app from Google Play</div>
                            </div>
                        </div>
                </div>
                </a>
            </div>
            </div>
            </div>
            <div class="modal-base fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center modal-fade hidden">
                <div class="absolute h-full w-full bg-black opacity-40"></div>
                <div class="bg-1 modal-content relative z-10 h-full w-full px-6 py-5 md:h-auto md:rounded-[8px] md:w-[473px] lg:p-10 sm:pt-8">
                    <div class="flex items-center justify-between lg:items-baseline"><text class="subtitle-1">Multi-Party Computation (MPC)</text><img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/close-f.svg" class="absolute right-6 top-6 h-6 w-6 cursor-pointer" /></div>
                    <div class="body-3 t-secondary mt-6">
                        <div>Binance Web3 Wallet uses advanced multi-party computation (MPC) technology. This means you can enjoy a self-custody wallet experience without the need for a seed phrase. MPC allows the creation of a secure key management system
                            without a single point of failure. For a standard wallet this would be losing your seed phrase.</div>
                        <div class="my-4">Instead, Binance Web3 Wallet is secured by three key-shares and a recovery password solely known to the user. These key-shares are generated when you create the wallet and stored in different locations for added security:</div>
                        <ul
                            class="mb-4 list-disc pl-[14px]">
                            <li>Share 1: Secured by Binance;</li>
                            <li>Share 2: Stored on your device;</li>
                            <li>Share 3: Encrypted by the recovery password you entered, and backed up to your personal cloud storage (iCloud or Google Drive).</li>
                            </ul>
                            <div>Please note that backing up Share 3 is mandatory before using the wallet. To access your wallet, you must have at least two key-shares.</div>
                    </div>
                </div>
            </div>
            <div class="modal-base fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center modal-fade hidden">
                <div class="absolute h-full w-full bg-black opacity-40"></div>
                <div class="bg-1 modal-content relative z-10 h-full w-full px-6 py-5 md:h-auto md:rounded-[8px] md:w-[473px] lg:p-10 sm:pt-8 w-[475px] max-h-full md:max-h-[560px] flex flex-col overflow-hidden">
                    <div class="flex items-center justify-between lg:items-baseline"><text class="subtitle-1">Supported Networks and dApps</text><img src="./bin.bnbstatic.com/image/julia/web-mpc-wallet/close-f.svg" class="absolute right-6 top-6 h-6 w-6 cursor-pointer" /></div>
                    <div class="mb-[-40px] flex flex-col overflow-hidden">
                        <div class="bg-3 subtitle-4 my-6 grid flex-shrink-0 grid-cols-2 gap-x-[2px] overflow-hidden rounded p-[2px]">
                            <div class="flex h-[30px] cursor-pointer items-center justify-center rounded-[3px] bg-1">Networks</div>
                            <div class="flex h-[30px] cursor-pointer items-center justify-center rounded-[3px] bg-3">dApps</div>
                        </div>
                        <div class="modal-content-scroll flex overflow-hidden pb-6">
                            <div class="scrollbar-hide grid w-full flex-shrink-0 grid-cols-2 overflow-y-scroll "></div>
                            <div class="scrollbar-hide w-full flex-shrink-0 overflow-y-scroll hidden"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        <?php include "footer.php"; ?>
            <script id="custom-console" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
                try {
                    if (!Boolean(localStorage.getItem("enableLog"))) {
                        window.console.log = window.console.warn = window.console.info = window.console.debug = function noop() {};
                    }
                } catch (e) {}
            </script>
            <script id="pika-version" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
                try {
                    window.pika = window.pika || {};
                    window.pika.version = "0.3.58";
                    window.__HTTP_NEXT_MODE_ENABLED__ = true
                } catch (e) {
                    console.error(e)
                }
            </script>
            <script id="Sentry-sdk" src="./bin.bnbstatic.com/static/runtime/sentry/7.38.0/bundle.es5.min.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script id="Sentry-init" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
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
                }
            </script>
            <script type="application/json" id="bnc-cpl-headers" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
                {}
            </script>
            <script nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
                __project_dynamic_public_path__ = "https://bin.bnbstatic.com/"
            </script>
            <script id="prefetch-rules" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
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
            </script>
            <script type="application/javascript" id="__COMMON_WIDGET_SSR_DATA__" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
                window.__COMMON_WIDGET_SSR_DATA__ = {
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
                        "ba-whistleblowing": "Spain Whistleblowing Form",
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
                    "mediaState": {
                        "isMobile": false,
                        "isTablet": false,
                        "isDesktop": true
                    },
                    "userStatus": {
                        "isLogin": true,
                        "isKyc": false,
                        "isDeposit": false,
                        "isTrade": false
                    }
                }
            </script>
            <script nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
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
            <script id="gtm-trueMetrics" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" data-nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
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
                            nonce: '0f31c7e4-34c5-4deb-9c79-16733f9ff6bb'
                        },
                    });
                })(window, 'dataLayer', '_bn_reporter');
            </script>
            <script nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
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
            <script id="__APP_DATA" type="application/json" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b">
                {
                    "dynamicIds": ["uVKZ", "PJuR", "IedM", "kxow", "rz+5", "ZGwD", "xYZv", "AdcS", "F8bZ", "2swF", "iCkf", "cIYf", "JN65", "5j/h", "GDbF", "oZ2f", "3zi4", "4LV3", "r3S0", "a8Ch", "fXHe", "63T4", "jChU", "C/vZ"],
                    "ssr": true,
                    "appState": {
                        "error": {
                            "error": null
                        },
                        "loader": {
                            "dataByRouteId": {
                                "b4aa": {
                                    "lang": "en",
                                    "configs": {
                                        "header": {
                                            "logo": {},
                                            "menus": [{
                                                "menuType": "text",
                                                "subMenuFlow": "row",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "crypto-f",
                                                    "title": "ba-titile2-2",
                                                    "link": "https://www.%suffixOrigin%/%locale%/crypto/buy",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "businessKeys": "buycrypto"
                                                },
                                                "subMenuSize": "normal",
                                                "subMenus": []
                                            }, {
                                                "menuType": "text",
                                                "subMenuFlow": "row",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "market-s24",
                                                    "title": "ba-tableMarkets",
                                                    "link": "https://www.%suffixOrigin%/%locale%/markets/overview",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "sceneNames": "marketsOverview"
                                                },
                                                "subMenuSize": "large",
                                                "subMenus": [{
                                                    "icon": "market-overview-g",
                                                    "title": "ba-markets-overview",
                                                    "link": "https://www.%suffixOrigin%/%locale%/markets/overview",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-markets-overview-desc"
                                                }, {
                                                    "icon": "trading-data-g",
                                                    "title": "ba-markets-data",
                                                    "link": "https://www.%suffixOrigin%/%locale%/markets/trading_data",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-markets-data-desc"
                                                }]
                                            }, {
                                                "menuType": "gird-small",
                                                "subMenuFlow": "column",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "trade-f",
                                                    "title": "ba-trade",
                                                    "linkTarget": "_self",
                                                    "langMapping": ""
                                                },
                                                "subMenuSize": "large",
                                                "subMenus": [{
                                                    "icon": "Spot2C",
                                                    "title": "ba-spot-only",
                                                    "link": "https://www.%suffixOrigin%/%locale%/trade",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-spot-only-subtitle"
                                                }, {
                                                    "icon": "margin-g",
                                                    "title": "ba-margin",
                                                    "link": "https://www.%suffixOrigin%/%locale%/trade?type=cross",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-margin-content",
                                                    "businessKeys": "marginTrade"
                                                }, {
                                                    "icon": "p2p-g",
                                                    "title": "ba-titile2-1",
                                                    "link": "https://p2p.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-c2c-content",
                                                    "sceneNames": "trade-p2p-hide",
                                                    "businessKeys": "tradeC2C"
                                                }, {
                                                    "icon": "convert-g",
                                                    "title": "ba-convert-block",
                                                    "link": "https://www.%suffixOrigin%/%locale%/convert/BNB/USDT",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-BasicCONVERT-content",
                                                    "businessKeys": "tradeConvert"
                                                }, {
                                                    "icon": "trade-trading-bot-g",
                                                    "title": "ba-StrategyTrading",
                                                    "link": "https://www.%suffixOrigin%/%locale%/trading-bots",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-StrategyTrading-desc",
                                                    "businessKeys": "Spot_Grid"
                                                }, {
                                                    "icon": "copy-trading-g",
                                                    "title": "ba-copy-trading",
                                                    "link": "https://www.%suffixOrigin%/%locale%/copy-trading",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-copy-trading-desc",
                                                    "businessKeys": "all_copy_trading"
                                                }, {
                                                    "icon": "api-g",
                                                    "title": "header-tier2-api",
                                                    "link": "https://www.%suffixOrigin%/%locale%/binance-api",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "description-tier2-api"
                                                }]
                                            }, {
                                                "menuType": "list",
                                                "subMenuFlow": "column",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "futures-f",
                                                    "title": "ba-binanceFutrue",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "businessKeys": "Derivatives"
                                                },
                                                "subMenuSize": "large",
                                                "subMenus": [{
                                                    "icon": "futures-usdt-m-g",
                                                    "title": "ba-perpetualFutures",
                                                    "link": "https://www.%suffixOrigin%/%locale%/futures",
                                                    "linkTarget": "_self",
                                                    "langMapping": "it(en)",
                                                    "content": "ba-perpetualFutures-content",
                                                    "businessKeys": "umTrade"
                                                }, {
                                                    "icon": "futures-coin-m-g",
                                                    "title": "ba-quarterlyFutures",
                                                    "link": "https://www.%suffixOrigin%/%locale%/delivery",
                                                    "linkTarget": "_self",
                                                    "langMapping": "it(en)",
                                                    "content": "ba-quarterlyFutures-content",
                                                    "businessKeys": "cmTrade"
                                                }, {
                                                    "icon": "futures-options-european-g",
                                                    "title": "ba-voptions",
                                                    "link": "https://www.%suffixOrigin%/%locale%/eoptions",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-voptionscontent",
                                                    "sceneNames": "Option-exclude-lang",
                                                    "businessKeys": "E-option"
                                                }]
                                            }, {
                                                "menuType": "text",
                                                "subMenuFlow": "column",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "piggy-bank-f",
                                                    "title": "ba-Earntitle",
                                                    "link": "https://www.%suffixOrigin%/%locale%/earn",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "businessKeys": "earnHome"
                                                },
                                                "subMenuSize": "large",
                                                "subMenus": [{
                                                    "icon": "piggy-bank",
                                                    "title": "ba-Earntitle",
                                                    "link": "https://www.%suffixOrigin%/%locale%/earn",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-Earndeatil",
                                                    "businessKeys": "earnHome"
                                                }, {
                                                    "icon": "earn-savings-g",
                                                    "title": "ba-simple-earn-title",
                                                    "link": "https://www.%suffixOrigin%/%locale%/simple-earn",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-simple-earn-con",
                                                    "businessKeys": "savings"
                                                }, {
                                                    "icon": "auto-invest",
                                                    "title": "ba-auto-invest",
                                                    "link": "https://www.%suffixOrigin%/%locale%/auto-invest/",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-auto-invest-con",
                                                    "suffixTips": "new",
                                                    "businessKeys": "earnAutoInvest"
                                                }, {
                                                    "icon": "earn-lending-g",
                                                    "title": "ba-CryptoLoans",
                                                    "link": "https://www.%suffixOrigin%/%locale%/loan",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-Getaninstantloan",
                                                    "businessKeys": "loan"
                                                }, {
                                                    "icon": "savings-dual-g",
                                                    "title": "ba-Dual",
                                                    "link": "https://www.%suffixOrigin%/%locale%/dual-investment",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-Dualtitle-content",
                                                    "businessKeys": "earnDualInv"
                                                }, {
                                                    "icon": "liquid-swap-g",
                                                    "title": "ba-liquidswap",
                                                    "link": "https://www.%suffixOrigin%/%locale%/swap/pool",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-swap-desc",
                                                    "businessKeys": "liquidswap"
                                                }, {
                                                    "icon": "launchpad-g",
                                                    "title": "ba-Launchpad",
                                                    "link": "https://launchpad.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-launchpad-launchpool-desc",
                                                    "sceneNames": "earn-launchpad-hide",
                                                    "businessKeys": "launchpad"
                                                }, {
                                                    "icon": "pool-g",
                                                    "title": "ba-pool",
                                                    "link": "https://pool.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "de-CH(en),en-BH(en),en-IN(en),en-KZ(en),en-NG(en),es-ES(en),fr-FR(en),hi(en),hu(en),kk-kZ(en),ru-UA(en)",
                                                    "content": "ba-pool-content",
                                                    "businessKeys": "earnMiningPool"
                                                }]
                                            }, {
                                                "menuType": "list",
                                                "subMenuFlow": "column",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "rules-f",
                                                    "title": "ba-Square",
                                                    "linkTarget": "_self",
                                                    "langMapping": ""
                                                },
                                                "subMenuSize": "large",
                                                "subMenus": [{
                                                    "icon": "feed-g",
                                                    "title": "ba-Square",
                                                    "link": "https://www.%suffixOrigin%/%locale%/feed",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-feed-description"
                                                }, {
                                                    "icon": "educate-g",
                                                    "title": "ba-academy-le",
                                                    "link": "https://academy.%suffixOrigin%/%locale%/learn-and-earn",
                                                    "linkTarget": "_self",
                                                    "langMapping": "el(en),en-IN(en),en-KZ(en),en-NG(en),es-AR(es),es-ES(es),es-LA(es),es-MX(es),fr-AF(en),fr-FR(en),hi(en),kk-KZ(en),pt-PT(pt),ru-UA(en),sl(en),uk-UA(uk),zh-TC(zt)",
                                                    "content": "ba-learn-earn-content"
                                                }, {
                                                    "icon": "blog-g",
                                                    "title": "ba-blog",
                                                    "link": "https://www.%suffixOrigin%/%locale%/blog",
                                                    "linkTarget": "_self",
                                                    "langMapping": "sl(en),hi(en),en-KZ(en),hu(en)",
                                                    "content": "ba-blogdescription"
                                                }, {
                                                    "icon": "research-g",
                                                    "title": "ba-Research",
                                                    "link": "https://www.%suffixOrigin%/%locale%/research",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-research"
                                                }]
                                            }, {
                                                "menuType": "gird-small",
                                                "subMenuFlow": "column",
                                                "menuItem": {
                                                    "type": "text",
                                                    "icon": "list-grid-f",
                                                    "title": "ba-moreManagement",
                                                    "linkTarget": "_self",
                                                    "langMapping": ""
                                                },
                                                "subMenuSize": "large",
                                                "subMenus": [{
                                                    "icon": "institutional-home-g",
                                                    "title": "ba-vip-institutional",
                                                    "link": "https://www.%suffixOrigin%/%locale%/vip-institutional-services",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-vip-institutional-desc"
                                                }, {
                                                    "icon": "launchpad-g",
                                                    "title": "ba-Launchpad",
                                                    "link": "https://launchpad.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-launchpad-launchpool-desc",
                                                    "sceneNames": "earn-launchpad-hide",
                                                    "businessKeys": "launchpad"
                                                }, {
                                                    "icon": "pool-g",
                                                    "title": "ba-pool",
                                                    "link": "https://pool.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "de-CH(en),en-BH(en),en-IN(en),en-KZ(en),en-NG(en),es-ES(en),fr-FR(en),hi(en),hu(en),kk-kZ(en),ru-UA(en)",
                                                    "content": "ba-pool-content",
                                                    "businessKeys": "earnMiningPool"
                                                }, {
                                                    "icon": "pay-g",
                                                    "title": "ba-Binance Pay",
                                                    "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/payment",
                                                    "linkTarget": "_self",
                                                    "langMapping": "vi(en)",
                                                    "content": "ba-Binance Pay-content",
                                                    "businessKeys": "binancepay"
                                                }, {
                                                    "icon": "earn-lending-g",
                                                    "title": "ba-CryptoLoans",
                                                    "link": "https://www.%suffixOrigin%/%locale%/loan",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-Getaninstantloan",
                                                    "businessKeys": "loan"
                                                }, {
                                                    "icon": "nft-marketplace-g",
                                                    "title": "ba-NFT",
                                                    "link": "https://www.%suffixOrigin%/%locale%/nft/home?utm_source=binance-header\u0026utm_medium=header",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-nft-description"
                                                }, {
                                                    "icon": "fan-token",
                                                    "title": "ba-Fantoken",
                                                    "link": "https://www.%suffixOrigin%/%locale%/fan-token",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-FanToken-content",
                                                    "businessKeys": "fantoken"
                                                }, {
                                                    "icon": "defi-wallet-g",
                                                    "title": "ba-web3-wallet",
                                                    "link": "https://www.%suffixOrigin%/%locale%/web3wallet",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-defi-wallet-desc",
                                                    "businessKeys": "web3wallet"
                                                }, {
                                                    "icon": "Dex-g",
                                                    "title": "ba-bnbchain",
                                                    "link": "https://www.bnbchain.org",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-dex",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "icon": "charity-g",
                                                    "title": "ba-Charity",
                                                    "link": "https://www.binance.charity",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "content": "ba-BCFcontnet"
                                                }]
                                            }],
                                            "userInfo": {
                                                "noLogged": {
                                                    "login": "https://accounts.%suffixOrigin%/%locale%/login",
                                                    "register": "https://accounts.%suffixOrigin%/%locale%/register",
                                                    "returnToList": [{
                                                        "regexp": "/([a-z]{2})?(-[A-Z]{2})?/?$",
                                                        "return_to": "https://www.%suffixOrigin%/%locale%/my/dashboard"
                                                    }]
                                                },
                                                "loggedMenu": {
                                                    "outerMenus": [{
                                                        "menuType": "list",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "wallet-f",
                                                            "title": "ba-wallet",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal",
                                                        "subMenus": [{
                                                            "icon": "list-grid-f",
                                                            "title": "ba-wallet-overview",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/overview",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "spot-f",
                                                            "title": "ba-exchangeWallet",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/exchange/balance",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "content": "ba-exchangeWalletMsg"
                                                        }, {
                                                            "icon": "margin-f",
                                                            "title": "ba-marginWallet",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/margin",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "sceneNames": "mg-ex-bg",
                                                            "businessKeys": "marginWallet"
                                                        }, {
                                                            "icon": "futures-f",
                                                            "title": "ba-futureWallet",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/futures",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "futuresWalletTab"
                                                        }, {
                                                            "icon": "futures-options-european-f",
                                                            "title": "ba-optionsWallet",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/eoptions",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "sceneNames": "exclude-local-kz",
                                                            "businessKeys": "E-option"
                                                        }, {
                                                            "icon": "trade-trading-bot-f",
                                                            "title": "ba-strategywallet",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/trading-bots",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "Rebalancing_bot_Manual"
                                                        }, {
                                                            "icon": "piggy-bank-f",
                                                            "title": "ba-earnAssets",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/saving/asset",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "earnWallet"
                                                        }, {
                                                            "icon": "coin-f",
                                                            "title": "ba-FundingWallet",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/funding",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "transaction-history-f",
                                                            "title": "ba-transactionhistory",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/history/deposit-crypto",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "ac-statement",
                                                            "title": "ba-AccountStatement",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/statement",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "proof-reserve-f",
                                                            "title": "header-tier2-wallet-verification",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/verification",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }]
                                                    }, {
                                                        "menuType": "list",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "orders-f",
                                                            "title": "ba-others",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal",
                                                        "subMenus": [{
                                                            "icon": "spot-f",
                                                            "title": "ba-exchangeOrders",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/orders/exchange/openorder",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "margin-f",
                                                            "title": "ba-marginOrders",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/orders/margin/openorder",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "sceneNames": "mg-ex-bg",
                                                            "businessKeys": "ba-marginOrders"
                                                        }, {
                                                            "icon": "futures-f",
                                                            "title": "ba-futureOrders",
                                                            "link": "https://www.%suffixOrigin%/%locale%/usercenter/future-history/open-order",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "futuresTab",
                                                            "validate": "isExistFutureAccount"
                                                        }, {
                                                            "icon": "futures-options-european-f",
                                                            "title": "ba-optionsOrder",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/orders/eoptions/openorders",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "sceneNames": "exclude-local-kz",
                                                            "businessKeys": "E-option"
                                                        }, {
                                                            "icon": "trade-trading-bot-f",
                                                            "title": "ba-strategy-order",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/orders/trading-bots/openorders",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "Rebalancing_bot_Manual"
                                                        }, {
                                                            "icon": "p2p-f",
                                                            "title": "ba-corder",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/orders/p2p",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "tradeC2C"
                                                        }, {
                                                            "icon": "piggy-bank-f",
                                                            "title": "ba-earnHistory",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/saving/history/subscription",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "earnOrder"
                                                        }, {
                                                            "icon": "trade-f",
                                                            "title": "ba-buySellHistory",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/exchange/buysell-history",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "earn-lending-f",
                                                            "title": "ba-loan-history",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/loan/order",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "loanOrder"
                                                        }, {
                                                            "icon": "convert-f",
                                                            "title": "ba-nav-otc",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/orders/convert/history",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        }, {
                                                            "icon": "launchpad-f",
                                                            "title": "ba-launchpadhistory",
                                                            "link": "https://launchpad.%suffixOrigin%/%locale%/history/stackSchema",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "launchpadOrder"
                                                        }, {
                                                            "icon": "pay-f",
                                                            "title": "ba-payment history",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/wallet/account/payment/history",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "businessKeys": "payOrder",
                                                            "excludeRegion": "th"
                                                        }]
                                                    }],
                                                    "innerMenus": [{
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "security-f",
                                                            "title": "ba-security",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/security",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal"
                                                    }, {
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "id-f",
                                                            "title": "ba-identification",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/settings/profile",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal"
                                                    }, {
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "referral-f",
                                                            "title": "ba-referral",
                                                            "link": "https://www.%suffixOrigin%/%locale%/activity/referral?utm_source=Lite_web_account",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "suffixTips": "new"
                                                        },
                                                        "subMenuSize": "normal"
                                                    }, {
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "new-user-zone-new-g",
                                                            "title": "ba-header-nuz",
                                                            "link": "https://app.binance.com/new-user-zone?_dp=L3dlYnZpZXcvd2Vidmlldz90eXBlPWRlZmF1bHQmdXJsPWFIUjBjSE02THk5M2QzY3VZbWx1WVc1alpTNWpiMjB2ZTJ4aGJtZDlMMjVsZHkxMWMyVnlMWHB2Ym1V\u0026utm_source=web\u0026utm_medium=dropdown",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal"
                                                    }, {
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "rewards-hub-f",
                                                            "title": "ba-loyalty-hub",
                                                            "link": "https://www.%suffixOrigin%/%locale%/rewards-hub",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal"
                                                    }, {
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "api-f",
                                                            "title": "ba-APIManagement",
                                                            "link": "https://www.%suffixOrigin%/%locale%/my/settings/api-management",
                                                            "linkTarget": "_self",
                                                            "langMapping": ""
                                                        },
                                                        "subMenuSize": "normal",
                                                        "subMenus": []
                                                    }, {
                                                        "menuType": "text",
                                                        "subMenuFlow": "row",
                                                        "menuItem": {
                                                            "type": "text",
                                                            "icon": "subaccount-s24",
                                                            "title": "ba-subaccount",
                                                            "link": "https://www.%suffixOrigin%/%locale%/usercenter/sub-account/account-management",
                                                            "linkTarget": "_self",
                                                            "langMapping": "",
                                                            "validate": "parentUser"
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
                                                        "langMapping": ""
                                                    },
                                                    "subMenuSize": "normal"
                                                }]
                                            },
                                            "extra": {
                                                "needLng": true,
                                                "needFiat": true,
                                                "qrCodeUrl": "https://www.%suffixOrigin%/%locale%/download"
                                            },
                                            "others": {
                                                "googleOneTap": {
                                                    "enabled": true,
                                                    "excludedRegions": "US"
                                                }
                                            },
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
                                            }]
                                        },
                                        "headerProps": {
                                            "flexProps": {
                                                "as": "header",
                                                "height": 64
                                            }
                                        },
                                        "footer": {
                                            "downloadQR": {},
                                            "signUp": {},
                                            "logo": {
                                                "logoInfo": {}
                                            },
                                            "menu": [{
                                                "title": "ba-aboutUs",
                                                "list": [{
                                                    "link": "https://www.%suffixOrigin%/%locale%/about",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-About"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/about#email",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-ContactUs"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/careers",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-joinUs"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/support/announcement",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Announcement"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/feed/news/all",
                                                    "linkTarget": "_self",
                                                    "langMapping": "el(en),de-CH(en),cs(en),bn(en),bg(en),en-IN(en),en-KZ(en),en-NG(en),es-AR(en),es-ES(en),es-LA(en),es-MX(en),fr-AF(en),fr-FR(en),hi(en),hu(en),it(en),kk-KZ(en),lv(en),ph(en),pl(en),pt-PT(en),ro(en),ru(en),ru-UA(en),sk(en),sl(en),sv(en),uk-UA(en),ur(en)",
                                                    "title": "ba-news",
                                                    "sceneNames": "footer-news-hide"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/press",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Press"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/legal/home",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer-legal"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/community",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Community"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/blog",
                                                    "linkTarget": "_self",
                                                    "langMapping": "en-KZ(en),hi(en),hu(en),kk-kZ(en),sl(en)",
                                                    "title": "ba-blog"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/land/building_trust",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer-building-trust"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/terms",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Terms"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/about-legal/privacy-portal",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Privacy"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/risk-warning",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-risk-warning"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/support/list/notices",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Notices",
                                                    "sceneNames": "footer-notices-hide"
                                                }, {
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-one-trust-cookie",
                                                    "hideElement": false
                                                }]
                                            }, {
                                                "title": "ba-Products",
                                                "list": [{
                                                    "link": "https://www.%suffixOrigin%/%locale%/trade",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Exchange"
                                                }, {
                                                    "link": "https://academy.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "en-IN(en),en-KZ(en),en-NG(en),es-AR(es),es-ES(es),es-LA(es),es-MX(es),fr-AF(en),fr-FR(en),fr-FR(en),hi(en),kk-KZ(en),pt-PT(pt),ua(uk),ru-UA(en),sl(en),uk-UA(uk),zh-TC(zt)",
                                                    "title": "ba-Academy"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/leveraged-tokens/tokens/allTokens",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-levaragedtoken",
                                                    "businessKeys": "ETF"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/live",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-live"
                                                }, {
                                                    "link": "https://www.binance.charity",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Charity"
                                                }, {
                                                    "link": "https://labs.%suffixOrigin%/",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Labs"
                                                }, {
                                                    "link": "https://launchpad.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Launchpad",
                                                    "sceneNames": "earn-launchpad-hide",
                                                    "businessKeys": "launchpad"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/auto-invest",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-auto-invest"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/eth2",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-eth2"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/research",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Research"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/nft/home",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-NFT",
                                                    "sceneNames": "exclude-local-kz",
                                                    "businessKeys": "nft"
                                                }, {
                                                    "link": "https://pay.%suffixOrigin%/%locale%",
                                                    "linkTarget": "_self",
                                                    "langMapping": "vi(en)",
                                                    "title": "ba-Binance Pay",
                                                    "businessKeys": "binancepay",
                                                    "excludeRegion": "th"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/gift-card",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-GiftCard",
                                                    "businessKeys": "giftcard"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/BABT?source=footer",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "BABT",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/tax",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-tax",
                                                    "sceneNames": "exclude-local-kz",
                                                    "excludeRegion": "BO,BR,CR,CL,CO,CU,DO,EC,SV,GT,HT,HN,MX,NI,PA,PY,PE,PR,UY,VE,bo,br,cr,cl,co,cu,do,ec,sv,gt,ht,hn,mx,ni,pa,py,pe,pr,uy,ve"
                                                }]
                                            }, {
                                                "title": "ba-Service",
                                                "list": [{
                                                    "link": "https://www.%suffixOrigin%/%locale%/download",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Download"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/desktop-download",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Desktop Application"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/buy-sell-crypto",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-creditCard"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/vip-institutional-services",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-institutional",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/otc",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-otctrading",
                                                    "sceneNames": "exclude-local-kz",
                                                    "businessKeys": "tradeC2C"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/activity/referral?utm_source=Lite_web_footer",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-referral"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/activity/affiliate",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Affiliate"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/bnb",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-binanceCoin"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/my/coin-apply",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-ListingApplication"
                                                }, {
                                                    "link": "https://c2c.%suffixOrigin%/%locale%/merchantApplication",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-applyP2P",
                                                    "sceneNames": "exclude-local-kz",
                                                    "businessKeys": "tradeC2C"
                                                }, {
                                                    "link": "https://p2p.%suffixOrigin%/%locale%/p2pro",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-p2pro",
                                                    "sceneNames": "exclude-local-kz",
                                                    "businessKeys": "tradeC2C"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/landing/data",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "landing-data-title"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/proof-of-reserves",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Proof-of-Reserves"
                                                }]
                                            }, {
                                                "title": "ba-Support",
                                                "list": [{
                                                    "link": "https://www.%suffixOrigin%/%locale%/my/user-support/feedback/entry",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer_support_request_feature",
                                                    "needLogin": false
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/support",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-SupportCenter"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/chat?sourceEntry=4",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-SubmitARequest",
                                                    "needLogout": false
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/binance-api",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "header-tier2-api",
                                                    "langOnly": "en,zh-CN"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/fee/trading",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-Fees"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/trade-rule",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-tradeRules"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/official-verification",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-official-verification"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/support/law-enforcement",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-law",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/airdrop",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-airdrop",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/ethereum-merge",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-eth-merge",
                                                    "includeRegion": "en,en-IN"
                                                }]
                                            }, {
                                                "title": "ba-Learn",
                                                "list": [{
                                                    "link": "https://academy.%suffixOrigin%/%locale%/learn-and-earn",
                                                    "linkTarget": "_self",
                                                    "langMapping": "el(en),en-IN(en),en-KZ(en),en-NG(en),es-AR(es),es-ES(es),es-LA(es),es-MX(es),fr-AF(en),fr-FR(en),hi(en),kk-KZ(en),pt-PT(pt),ru-UA(en),sl(en),uk-UA(uk),zh-TC(zt)",
                                                    "title": "ba-learn-earn-title"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/price",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-footer-pricepage"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/price/bitcoin",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer_bitcoin_price"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/price/ethereum",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer_ethereum_price"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/price-prediction",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer_price_predictions",
                                                    "langOnly": "en"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/price-prediction/bitcoin",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer_bitcoin_price_prediction",
                                                    "langOnly": "en"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/price-prediction/ethereum",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "footer_ethereum_price_prediction",
                                                    "langOnly": "en"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/how-to-buy/bnb",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-buybnb"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/how-to-buy/bitcoin",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-buy-bitcoin"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/how-to-buy/ethereum",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-buyEthereum"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/how-to-buy/dogecoin",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-buydogecoin",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/how-to-buy/xrp",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-buyRipple",
                                                    "sceneNames": "exclude-local-kz"
                                                }, {
                                                    "link": "https://www.%suffixOrigin%/%locale%/altcoins/tradable",
                                                    "linkTarget": "_self",
                                                    "langMapping": "",
                                                    "title": "ba-BuyTradable"
                                                }]
                                            }],
                                            "community": {
                                                "title": "ba-Community",
                                                "needLng": false,
                                                "communities": [{
                                                    "name": "h-discord",
                                                    "link": "https://discord.gg/jE4wt8g2H2",
                                                    "linkTarget": "_self"
                                                }, {
                                                    "name": "h-telegram",
                                                    "link": "https://www.%suffixOrigin%/%locale%/community",
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
                                                    "name": "h-twitter",
                                                    "link": "https://twitter.com/binance",
                                                    "linkTarget": "_self"
                                                }, {
                                                    "name": "h-reddit",
                                                    "link": "https://www.reddit.com/r/binance",
                                                    "linkTarget": "_self"
                                                }, {
                                                    "name": "h-weibo",
                                                    "link": "https://weibo.com/binance?is_hot=1",
                                                    "linkTarget": "_self",
                                                    "langOnly": "cn"
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
                                                }]
                                            },
                                            "copyRight": {},
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
                                            }]
                                        },
                                        "footerProps": {},
                                        "origin": "https://www.binance.com",
                                        "lang": {
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
                                            "ba-academy-le": "Academy (Learn \u0026 Earn)",
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
                                            "ba-buy-and-sell": "Buy \u0026 Sell",
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
                                            "ba-c2c-content": "Buy \u0026 sell cryptocurrencies using bank transfer and 800+ options",
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
                                            "ba-convert-block": "Convert \u0026 Block Trade",
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
                                            "ba-depositWithdrawHistory": "Deposit \u0026 Withdrawal History",
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
                                            "ba-downloadapp": "Scan to Download App iOS \u0026 Android",
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
                                            "ba-eoptions-OpenInterestAndVolume": "Open Interest \u0026 Volume",
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
                                            "ba-exchangeWalletMsg": "(Deposit \u0026 Withdraw)",
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
                                            "ba-footer-kz-disclaimer": "Binance Kazakhstan is authorised by the financial regulator of the AIFC, Astana Financial Services Authority (“AFSA”), to conduct the activities of Operating Digital Asset Trading Platform and Providing Custody. Status of the licence and its validity may be verified at the AFSA website (www.afsa.kz).\u003cbr/\u003e\u003cbr/\u003eRisk Warning: Digital Asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance Kazakhstan is not liable for any losses you may incur.",
                                            "ba-footer-pricepage": "Browse Crypto Prices",
                                            "ba-footer-signup-title": "Trade on the go with Binance",
                                            "ba-footer-token-unlock": "Token Unlock",
                                            "ba-full-creen-content": "Fullscreen",
                                            "ba-full-creen-title": "Trade with larger charts in the fullscreen",
                                            "ba-fundingandtrade": "Funding \u0026 Trade Analysis",
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
                                            "ba-institutional": "Institutional \u0026 VIP Services",
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
                                            "ba-learn-earn-title": "Learn \u0026 Earn",
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
                                            "ba-p2p-desc": "Buy \u0026 sell cryptocurrencies using bank transfer and 100+ options",
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
                                            "ba-spot-margin": "Spot \u0026 Margin",
                                            "ba-spot-margin-desc": "Buy and sell on the Spot market and leverage with margin",
                                            "ba-spot-only": "Spot",
                                            "ba-spot-only-content": "Buy \u0026 Sell Crypto Efficiently",
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
                                            "ba-tableMarkets-content": "Trade Bitcoin \u0026 Other Cryptos",
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
                                            "ba-vip-institutional": "VIP \u0026 Institutional",
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
                                            "ba-whistleblowing": "Spain Whistleblowing Form",
                                            "ba-win-dwon": "Download Desktop Clients \u003e",
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
                                            "exchange-wallet-minDeposit": "Deposit amount must be greater than \u003cstrong\u003e##\u003c/strong\u003e",
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
                                            "footer_support_request_feature": "Product Feedback \u0026 Suggestions",
                                            "footer_transparency": "Trust \u0026 Transparency",
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
                                            "header-tier2-execution-otc": "Execution \u0026 OTC Services",
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
                                            "terms-200004079-global-tou": "We have updated our \u003ca href=\"https://www.{{suffixOrigin}}/{{locale}}/terms\"\u003eTerms of Use\u003c/a\u003e. \u003cbr/\u003e\u003cbr/\u003eThese will automatically be binding and effective on 31 Aug, 2023.\u003cbr/\u003e\u003cbr/\u003eNo further action is required on your part.\u003cbr/\u003e\u003cbr/\u003eYour continued use of our services constitutes your acceptance of the updated \u003ca href=\"https://www.{{suffixOrigin}}/{{locale}}/terms\"\u003eTerms of Use\u003c/a\u003e.",
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
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "pageData": {
                        "shuviInitialState": {},
                        "redux": {
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
                            "cookies": {
                                "theme": "dark",
                                "userPreferredCurrency": "USD_USD",
                                "changeBasisTimeZone": ""
                            },
                            "products": {
                                "loading": true,
                                "productMap": {},
                                "hotProduct": [],
                                "updateTime": 1742791252108
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
                                "userQuoteAsset": "BTC"
                            },
                            "persistSetting": {
                                "favorites": [],
                                "isHideSmallBalance": false,
                                "maskedBalance": false
                            }
                        },
                        "i18nResource": {
                            "en": {
                                "MPC-wallet-web": {
                                    "web3-wallet-page-title": "Binance Wallet: Multi Blockchain, Crypto, DeFi",
                                    "web3-wallet-page-meta-keywords": "Crypto Wallet, DeFi Wallet, Blockchain Wallet, Binance Wallet, cryptocurrency wallet",
                                    "web3-wallet-page-meta-description": "Binance Wallet is a keyless, seedless, multi-chain, semi-custody wallet designed for DeFi. It provides a secure, streamlined way to manage cryptocurrencies, execute cross-chain swaps, earn yields, and interact with various blockchain applications.",
                                    "mpweb-defi-wallet": "Binance Wallet",
                                    "mpweb-your-gateway-to-web3": "Your world of Web3.",
                                    "mpweb-simple": "Simple",
                                    "mpweb-secure": "Secure",
                                    "mpweb-rewarding": "Rewarding",
                                    "mpweb-get-started": "Get Started",
                                    "mpweb-explore-world": "Explore Web3 with ease",
                                    "mpweb-trade-favorite-tokens": "Trade your favorite tokens. Access multiple blockchains. Explore some of the best dApps. All without leaving your wallet.",
                                    "mpweb-view-networks-and-dapps": "View Networks and dApps",
                                    "mpweb-transfer": "Transfer",
                                    "mpweb-transfer-title": "Bridge between the exchange and Web3",
                                    "mpweb-transfer-text": "Why juggle multiple apps? Simply do it all in one! Transfer funds between exchange and wallet quickly and easily. Move across CeFi, DeFi, and Web3 in a single tap.",
                                    "mpweb-swap": "Swap",
                                    "mpweb-swap-title": "Swap tokens cross-chain at the best prices",
                                    "mpweb-swap-text": "Powered by Binance Bridge and other DEXs, trade thousands of tokens across various networks. Get the best prices thanks to deep liquidity and low slippage.",
                                    "mpweb-earn": "Earn",
                                    "mpweb-earn-title": "Grow your portfolio with one click",
                                    "mpweb-earn-text": "Put your idle crypto to work. Find the best opportunities to earn yield on your assets in seconds.",
                                    "mpweb-security-title1": "Putting you in control.",
                                    "mpweb-security-title2": "Security at every stage.",
                                    "mpweb-self-custody-wallet": "Self-custody wallet",
                                    "mpweb-self-custody-wallet-text": "Funds in the wallet are exclusively held and managed by the user. You are in complete control over your crypto assets.",
                                    "mpweb-powered-mpc-title": "Powered by MPC",
                                    "mpweb-powered-mpc-text": "Advanced multi-party computation (MPC) technology creates three separately stored ‘key shares’. Enjoy unparalleled security without the need for a seed phrase.",
                                    "wmp-learn-more": "Learn More",
                                    "mpweb-risk-controls-title": "Built-in risk controls",
                                    "mpweb-risk-controls-text": "Get alerts if a token or blockchain carries security risks, including wrong address protection or malicious contract detection.",
                                    "mpweb-drive-campaigns-desc-new": "Harness the power of Binance Wallet to host impactful campaigns for your project. Boost your project's visibility and rely on our advanced technology for seamless execution.",
                                    "mpweb-web3-easier": "Web3 is easier with Binance",
                                    "wmp-faq-1019-1": "What is Binance Wallet?",
                                    "wmp-faq-1019-1-sen1": "Binance Wallet is a self-custody crypto wallet within the Binance app, designed to empower users in the realm of decentralized finance (DeFi). Serving as a digital gateway to blockchain-based applications (dApps), it offers users a secure and streamlined method to manage their cryptocurrencies, execute token swaps across multiple chains, earn yields, and interact with a variety of blockchain platforms.",
                                    "wmp-faq-1019-2": "What are the benefits of using Binance Wallet?",
                                    "wmp-faq-1019-2-sen1": "Binance Wallet is the easiest way to get involved with Web3. It offers users a secure and streamlined method to manage their cryptocurrencies, execute token swaps across multiple chains, earn yields, and interact with a variety of blockchain platforms.",
                                    "wmp-faq-1019-2-sen2": "Simple",
                                    "wmp-faq-1019-2-sen3": "Create a wallet in seconds using your Binance app without having to worry about seed phrases or private keys.",
                                    "wmp-faq-1019-2-sen4": "Convenient",
                                    "wmp-faq-1019-2-sen5": "With integration to Binance Bridge and other providers, Web3 Wallet fosters easy cross-blockchain token swaps at better prices. You can explore dApps and generate yield effortlessly with a single click.",
                                    "wmp-faq-1019-2-sen6": "Secure",
                                    "wmp-faq-1019-2-sen7": "MPC (multi-party computation) technology governs every transaction and mitigates single points of failure to ensure that your assets are SAFU.",
                                    "wmp-faq-1019-3": "How do I use my Binance Wallet to send and receive tokens?",
                                    "wmp-faq-1019-3-sen1": "To send tokens",
                                    "wmp-faq-1019-3-sen2": "Tap [Transfer Now] on the Binance Wallet homepage.",
                                    "wmp-faq-1019-3-sen3": "Paste the recipient’s address and tap [Continue].",
                                    "wmp-faq-1019-3-sen4": "Please note that if you select the wrong network or send assets to the wrong address, your funds might be lost and cannot be recovered.",
                                    "wmp-faq-1019-3-sen5": "To receive tokens",
                                    "wmp-faq-1019-3-sen6": "Tap on the token you wish to receive on the Binance Wallet homepage.",
                                    "wmp-faq-1019-3-sen7": "You’ll see a QR code and the token address. Tap the copy or share icon to share it with your sender.",
                                    "wmp-faq-1019-4": "Is Binance Wallet a self-custody wallet? Who has control over my funds?",
                                    "wmp-faq-1019-4-sen1": "Yes, Binance Wallet is a self-custody wallet. You have full control over your funds and assets. Therefore, you’re solely responsible for safeguarding your assets and backing up your wallet.",
                                    "wmp-faq-1019-5": "Do I need to back up my Binance Wallet?",
                                    "wmp-faq-1019-5-sen1": "Binance Wallet employs Multi-Party Computation (MPC) to create three key-shares, which are then stored in different locations for added security. These locations include your cloud storage and device. It is crucial that you protect the key-share stored on the cloud by implementing encryption using a recovery password that's solely known to you.",
                                    "wmp-faq-1019-6": "Will I be charged any network fees when using Binance Wallet?",
                                    "wmp-faq-1019-6-sen1": "Blockchain transactions involve network fees. These fees, also known as gas fees, are required to compensate miners or validators for the computational resources they contribute to process and confirm transactions on the network. The exact fees may vary depending on the network traffic and the blockchain you’re using.",
                                    "wmp-faq-1019-7": "What is a Multi-Party Computation (MPC) wallet and how does it work?",
                                    "wmp-faq-1019-7-sen1": "Multi-Party Computation (MPC) is an enhanced cryptography security mechanism. It alters the traditional method of storing private keys by eliminating the need to retain them in one sole location. In this way, MPC lowers the risk of the keys being compromised and reduces the vulnerability of the system.",
                                    "wmp-faq-1019-8": "Can I restore my Binance Wallet?",
                                    "wmp-faq-1019-8-sen1": "Yes, you can restore your Binance Wallet. When using a new device, connect your Binance app to the previously used cloud service and decrypt your key-share using its password.",
                                    "wmp-faq-1019-9": "Can I get my seed phrases or private keys?",
                                    "wmp-faq-1019-9-sen1": "There are no seed phrases for Binance Wallet. Instead, it’s an MPC wallet that requires you to store private key-shares in different locations. If you want to export your private keys, you can use the \"Emergency Export\" function. However, please note that your Binance Wallet will become unavailable and you won’t be able to use it anymore. Please keep your private keys secure. If you lose them, your funds will be permanently lost.",
                                    "wmp-faq-1019-10": "What can I do if I forget my wallet recovery password?",
                                    "wmp-faq-1019-10-sen1": "Your recovery password is crucial in encrypting your Binance Wallet’s key-share on cloud storage. Should you forget your password and lose access to your device or delete the Binance app, you won’t be able to access your Binance Wallet and Binance won't be able to restore it for you.",
                                    "wmp-faq-1019-10-sen2": "If you forget your recovery password, backing up your Binance Wallet immediately is highly recommended.",
                                    "wmp-view-more": "View more",
                                    "mpweb-disclaimer": "Disclaimer: Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. APR is an estimate of rewards you will earn in cryptocurrency over the selected timeframe. It does not display the actual or predicted returns/yield in any fiat currency. APR is adjusted daily and the estimated rewards may differ from the actual rewards generated. For selected staking products, Binance takes on all slashing risk. This means that the same amount of digital assets staked will be returned to you, even if they are slashed. Not financial advice. For more information, see our Terms of Use and Risk Warning.",
                                    "mpweb-ios-download": "Download for iOS",
                                    "mpweb-ios-download-desc": "Get the Binance app from the App Store",
                                    "mpweb-qrcode-title": "Get Web3 Wallet With the Binance App",
                                    "mpweb-multi-party-computation": "Multi-Party Computation (MPC)",
                                    "mpweb-mpc-modal-text-1": "Binance Web3 Wallet uses advanced multi-party computation (MPC) technology. This means you can enjoy a self-custody wallet experience without the need for a seed phrase. MPC allows the creation of a secure key management system without a single point of failure. For a standard wallet this would be losing your seed phrase.",
                                    "mpweb-mpc-modal-text-2": "Instead, Binance Web3 Wallet is secured by three key-shares and a recovery password solely known to the user. These key-shares are generated when you create the wallet and stored in different locations for added security:",
                                    "mpweb-mpc-modal-text-3-1": "Share 1: Secured by Binance;",
                                    "mpweb-mpc-modal-text-3-2": "Share 2: Stored on your device;",
                                    "mpweb-mpc-modal-text-3-3": "Share 3: Encrypted by the recovery password you entered, and backed up to your personal cloud storage (iCloud or Google Drive).",
                                    "mpweb-mpc-modal-text-4": "Please note that backing up Share 3 is mandatory before using the wallet. To access your wallet, you must have at least two key-shares.",
                                    "mpweb-support-networks-and-dapps": "Supported Networks and dApps",
                                    "mpweb-networks": "Networks",
                                    "mpweb-dapps": "dApps"
                                },
                                "new2fa": {}
                            }
                        },
                        "i18nNamespaces": ["MPC-wallet-web", "new2fa"],
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
                        "API_HOST": "https://www.binance.com",
                        "API_HOST_PRIVATE": "http://dispatcher-service.bin.internal",
                        "CACHE_PROXY_HOST": "http://cache-proxy.cache-proxy",
                        "GA_TRACKING_ID": "UA-162512367-1",
                        "GTM_TRACKING_ID": "M86QHGF",
                        "SITE_HOST": "https://www.binance.com",
                        "I18N_BASE_PRIVATE": "http://bin.bnbstatic.com.s3.ap-northeast-1.amazonaws.com/api/i18n/-/web/cms",
                        "I18N_BASE_PUBLIC": "./bin.bnbstatic.com/api/i18n/-/web/cms",
                        "INTERNAL_API_HOST": "http://dispatcher-service.bin.internal",
                        "REDIS_READ": "redis.fe-master.binance.internal:6379",
                        "REDIS_WRITE": "redis.fe-master.binance.internal:6379",
                        "SENTRY_DSN": "https://7b0916eed4e748dea6bbdcfcfd4e326c@report.binance.gg/10",
                        // "STATIC_HOST": "https://bin.bnbstatic.com",
                        "STATIC_HOST": "http://localhost//test2/",
                        "STATIC_HOST_PRIVATE": "http://bin.bnbstatic.com.s3.ap-northeast-1.amazonaws.com",
                        "STATIC_HOST_SHARE": "https://public.bnbstatic.com",
                        "ACCOUNTS_HOST_PUBLIC": "https://accounts.binance.com",
                        "ACCOUNTS_HOST_PUBLIC_TEMPLATE": "https://accounts.{{rootDomain}}",
                        "PAY_HOST": "https://pay.binance.com",
                        "PAY_HOST_TEMPLATE": "https://pay.{{rootDomain}}",
                        "WS_HTTP_SDK_RESTFUL_RATE": "0.5",
                        "SENSORS_SERVER_HOST": "https://api.saasexch.com/bapi/fe/usd/sa?project=binance",
                        "I18N_TRACK": "true",
                        "I18N_TRACK_HOST": "https://api.saasexch.com",
                        "I18N_TRACK_APPID": "cc1ljun9gpbp8ciciolg",
                        "COMMIT_HEAD": "b2dca2e8e444d30ae47c4a11ebfc24463bd044db"
                    },
                    "filesByRoutId": {
                        "b4aa": ["static/css/11f8b803.chunk.css", "static/chunks/layout-b4aa.c6ae2769.js"],
                        "26cb": ["static/css/f6ff6d04.chunk.css", "static/chunks/page-26cb.80a2c7a8.js"],
                        "95e9": ["static/css/f6ff6d04.chunk.css", "static/chunks/page-95e9.7dcb57f8.js"],
                        "ca67": ["static/chunks/page-ca67.3b699b11.js"],
                        "dbf4": ["static/css/f6ff6d04.chunk.css", "static/chunks/page-dbf4.d322fb98.js"],
                        "a4aa": ["static/css/f6ff6d04.chunk.css", "static/chunks/page-a4aa.405e9c28.js"]
                    },
                    "publicPath": "./test2/"
                }
            </script>
            <div id="__APP_EXTENSION" style="position: absolute;"></div><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M86QHGF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <script id="remote-config" src="./public.bnbstatic.com/unpkg/config/remote-config.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/polyfills.d7582762.js" nomodule data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script id="essential-js" src="./public.bnbstatic.com/unpkg/essential/essential@0.3.39.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script id="vendor-umd" src="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.18.2.0.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/data@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/common@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/webpack-runtime.4684ca46.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/common/framework.b444e70c.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/main.3a7d15a0.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/web-push-odin/web-push-odin-pre.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/header@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.664.min.js" nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/versionCheck.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/headerRender.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/footerRender.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/extensionRender.js" data-ot-ignore nonce="49a23fde-d460-4c91-b1b1-1f87a615135b"></script>

            <style>
            #para{
                color: #d2cfcf;
            }

            #head{
                color: white;
            }
            </style>
</body>

</html>