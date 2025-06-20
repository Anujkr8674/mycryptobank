<?php include "header.php"; ?>
<!doctype html>
<html lang="en" dir="ltr" path-prefix="/en">

<head>
    <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no" />
    <meta charset="utf-8" />
    <!-- <title data-shuvi-head="true">Friends Referral Program | Refer &amp; Earn | Binance Official</title> -->
    <meta name="keywords" content="Binance Referral, Crypto Exchange Referral" data-shuvi-head="true" />
    <meta name="description" content="Get a 100 USD cashback voucher when you refer a friend. T&amp;C apply." data-shuvi-head="true" />
    <!-- <meta property="og:url" content="https://www.binance.com/en/activity/referral/offers" data-shuvi-head="true" /> -->
    <meta property="og:type" content="website" data-shuvi-head="true" />
    <meta property="og:title" content="Friends Referral Program | Refer &amp; Earn | Binance Official" data-shuvi-head="true" />
    <meta property="og:site_name" content="Binance" data-shuvi-head="true" />
    <!-- <meta property="og:image" content="https://public.bnbstatic.com/images/referral-lite/cpa/en-ogImage.png" data-shuvi-head="true" /> -->
    <meta property="twitter:title" content="Friends Referral Program | Refer &amp; Earn | Binance Official" data-shuvi-head="true" />
    <meta property="twitter:site" content="Binance" data-shuvi-head="true" />
    <!-- <meta property="twitter:image" content="https://public.bnbstatic.com/images/referral-lite/cpa/en-ogImage.png" data-shuvi-head="true" /> -->
    <!-- <meta property="twitter:image:src" content="https://public.bnbstatic.com/images/referral-lite/cpa/en-ogImage.png" data-shuvi-head="true" /> -->
    <meta property="twitter:card" content="summary_large_image" data-shuvi-head="true" />
    <meta http-equiv="etag" content="ecd0c2ba027e56e733d57c0550aff69a730f2602" />
    <meta name="msapplication-TileImage" content="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />

    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/referral-ui" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/activity-ui" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/growth-platform" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="fetch" href="./bin.bnbstatic.com/api/i18n/-/web/cms/en/widget-common" crossorigin="anonymous" fetchpriority="low" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/essential/essential@0.3.52.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.16.14.0.js" />
    <link as="image" media="(max-width: 767px)" rel="preload" href="./bin.bnbstatic.com/static/images/activity/referral-lite/cpa/landing-bg-mobile-dark-4.png" data-shuvi-head="true" />
    <link as="image" media="(min-width: 768px) and (max-width: 1023px)" rel="preload" href="./bin.bnbstatic.com/static/images/activity/referral-lite/cpa/title-background-tablet-dark.png" data-shuvi-head="true" />
    <link as="image" media="(min-width: 1024px)" rel="preload" href="./bin.bnbstatic.com/static/images/activity/referral-lite/cpa/title-background-desktop-dark.png" data-shuvi-head="true" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/layout-851b.ce5f0300.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/page-45d7.fbe1dc49.js" as="script" />
    <link rel="preload" href="./bin.bnbstatic.com/static/chunks/536.017dfb83.js" as="script" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.664.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.664.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/data@1.3.664.min.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.664.min.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/webpack-runtime.91fa8d8b.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/common/framework.0b17b0b1.js" />
    <link rel="preload" as="script" href="./bin.bnbstatic.com/static/main.1ba57270.js" />
    <link rel="preload" as="script" href="./public.bnbstatic.com/unpkg/config/remote-config.js" />
    <link rel="shortcut icon" href="./bin.bnbstatic.com/static/images/common/favicon.ico" />
    <link rel="apple-touch-icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <link rel="icon" href="./bin.bnbstatic.com/static/images/bnb-for/brand.png" />
    <link rel="canonical" href="https://www.binance.com/en/activity/referral/offers" data-shuvi-head="true" />
    <script id="OneTrust-sdk" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
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
                s.nonce = 'aa187cd2-7af2-420a-863c-c41a3c9d800b';
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
    <script id="Reporter-init" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
        window._bn_reporter = window._bn_reporter || [];
        window._bn_reporter_version = '4.0.14';

        function reportEvent(data) {
            window._bn_reporter.push(data);
        }
        reportEvent({
            key: "init",
            data: {
                "packageName": "referral-ui",
                "apiId": "cc1ljun9gpbp8ciciolg",
                "apiDomain": "https://api.saasexch.com",
                "ssr": true,
                "COMMIT_HEAD": "ecd0c2ba027e56e733d57c0550aff69a730f2602",
                "pikaVersion": "0.3.62",
                "traceId": "b4393984-a470-4455-9757-8d6fbaded966",
                "analyticsId": "referral-ui,Frontend,clkjc0c7z2120150t4au7fxrc0d"
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
    <script nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
        ! function() {
            try {
                !(t = function() {
                    try {
                        return document.getElementsByTagName("head")[0]
                    } catch (e) {
                        return null
                    }
                }()) || ~(e = "undefined" != typeof navigator ? navigator.userAgent : "").indexOf(" BNC/") && !~e.indexOf("electron") && ((e = document.createElement("style")).setAttribute("type", "text/css"), e.innerHTML = "#__APP_HEADER {display:none !important;} .hidden-in-bnc-app {display:none !important;}", t.appendChild(e))
            } catch (e) {}
            var e, t
        }();
    </script>
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/5786cf4a.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/0b7e4ad7.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/cecc4641.chunk.css" />
    <link rel="stylesheet" href="./bin.bnbstatic.com/static/css/866cad71.chunk.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/header@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.664.css" />
    <link rel="stylesheet" href="./public.bnbstatic.com/unpkg/common-widget/common@1.3.664.css" />
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

<body>
    <div id="__APP_TOP_PORTAL"></div>
   
            <div id="__APP">
                <style data-emotion-css="uym9vf">
                    html {
                        line-height: 1.15;
                        -webkit-text-size-adjust: 100%;
                    }

                    body {
                        margin: 0;
                    }

                    main {
                        display: block;
                    }

                    h1 {
                        font-size: 2em;
                        margin: 0.67em 0;
                    }

                    hr {
                        box-sizing: content-box;
                        height: 0;
                        overflow: visible;
                    }

                    pre {
                        font-family: monospace, monospace;
                        font-size: 1em;
                    }

                    a {
                        background-color: transparent;
                    }

                    abbr[title] {
                        border-bottom: none;
                        -webkit-text-decoration: underline;
                        text-decoration: underline;
                        -webkit-text-decoration: underline dotted;
                        text-decoration: underline dotted;
                    }

                    b,
                    strong {
                        font-weight: bolder;
                    }

                    code,
                    kbd,
                    samp {
                        font-family: monospace, monospace;
                        font-size: 1em;
                    }

                    small {
                        font-size: 80%;
                    }

                    sub,
                    sup {
                        font-size: 75%;
                        line-height: 0;
                        position: relative;
                        vertical-align: baseline;
                    }

                    sub {
                        bottom: -0.25em;
                    }

                    sup {
                        top: -0.5em;
                    }

                    img {
                        border-style: none;
                    }

                    button,
                    input,
                    optgroup,
                    select,
                    textarea {
                        font-family: inherit;
                        font-size: 100%;
                        line-height: 1.15;
                        margin: 0;
                    }

                    button,
                    input {
                        overflow: visible;
                    }

                    button,
                    select {
                        text-transform: none;
                    }

                    button,
                    [type="button"],
                    [type="reset"],
                    [type="submit"] {
                        -webkit-appearance: button;
                    }

                    button::-moz-focus-inner,
                    [type="button"]::-moz-focus-inner,
                    [type="reset"]::-moz-focus-inner,
                    [type="submit"]::-moz-focus-inner {
                        border-style: none;
                        padding: 0;
                    }

                    button:-moz-focusring,
                    [type="button"]:-moz-focusring,
                    [type="reset"]:-moz-focusring,
                    [type="submit"]:-moz-focusring {
                        outline: 1px dotted ButtonText;
                    }

                    fieldset {
                        padding: 0.35em 0.75em 0.625em;
                    }

                    legend {
                        box-sizing: border-box;
                        color: inherit;
                        display: table;
                        max-width: 100%;
                        padding: 0;
                        white-space: normal;
                    }

                    progress {
                        vertical-align: baseline;
                    }

                    textarea {
                        overflow: auto;
                    }

                    [type="checkbox"],
                    [type="radio"] {
                        box-sizing: border-box;
                        padding: 0;
                    }

                    [type="number"]::-webkit-inner-spin-button,
                    [type="number"]::-webkit-outer-spin-button {
                        height: auto;
                    }

                    [type="search"] {
                        -webkit-appearance: textfield;
                        outline-offset: -2px;
                    }

                    [type="search"]::-webkit-search-decoration {
                        -webkit-appearance: none;
                    }

                    ::-webkit-file-upload-button {
                        -webkit-appearance: button;
                        font: inherit;
                    }

                    details {
                        display: block;
                    }

                    summary {
                        display: list-item;
                    }

                    template {
                        display: none;
                    }

                    [hidden] {
                        display: none;
                    }

                    #__APP {
                        width: 100vw;
                        height: 100vh;
                        overflow-x: hidden;
                        overflow-y: auto;
                        box-sizing: border-box;
                        -webkit-tap-highlight-color: transparent;
                    }

                    html[dir='rtl'] .mirror {
                        -webkit-transform: rotateY(180deg);
                        -ms-transform: rotateY(180deg);
                        transform: rotateY(180deg);
                    }

                    .rc-table.bordered table {
                        border-collapse: collapse;
                    }

                    .rc-table.bordered th,
                    .rc-table.bordered td {
                        border: 1px solid #e9e9e9;
                    }

                    .rc-table {
                        font-size: 12px;
                        color: #666;
                        -webkit-transition: opacity 0.3s ease;
                        transition: opacity 0.3s ease;
                        position: relative;
                        line-height: 1.5;
                        overflow: hidden;
                    }

                    .rc-table .rc-table-scroll {
                        overflow: auto;
                    }

                    .rc-table .rc-table-scroll table {
                        width: auto;
                        min-width: 100%;
                    }

                    .rc-table .rc-table-header {
                        overflow: hidden;
                        background: #f7f7f7;
                    }

                    .rc-table-fixed-header .rc-table-body {
                        background: #fff;
                        position: relative;
                    }

                    .rc-table-fixed-header .rc-table-body-inner {
                        height: 100%;
                        overflow: scroll;
                    }

                    .rc-table-fixed-header .rc-table-scroll .rc-table-header {
                        padding-bottom: 20px;
                        margin-bottom: -20px;
                        overflow: scroll;
                        box-sizing: border-box;
                    }

                    .rc-table-hide-scrollbar {
                        -webkit-scrollbar-color: transparent transparent;
                        -moz-scrollbar-color: transparent transparent;
                        -ms-scrollbar-color: transparent transparent;
                        scrollbar-color: transparent transparent;
                    }

                    .rc-table-hide-scrollbar::-webkit-scrollbar {
                        background-color: transparent;
                    }

                    .rc-table-fixed-columns-in-body {
                        visibility: hidden;
                        pointer-events: none;
                    }

                    .rc-table .rc-table-title {
                        padding: 12px 16px;
                        border-top: 1px solid #e9e9e9;
                    }

                    .rc-table .rc-table-content {
                        position: relative;
                    }

                    .rc-table .rc-table-footer {
                        padding: 12px 16px;
                        border-bottom: 1px solid #e9e9e9;
                    }

                    .rc-table .rc-table-placeholder {
                        padding: 12px 16px;
                        background: #fff;
                        border-bottom: 1px solid #e9e9e9;
                        text-align: center;
                        position: relative;
                    }

                    .rc-table .rc-table-placeholder-fixed-columns {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        background: transparent;
                        pointer-events: none;
                    }

                    .rc-table table {
                        width: 100%;
                        border-collapse: collapse;
                        text-align: left;
                    }

                    .rc-table th {
                        background: #F9F9FA;
                        color: #848E9C;
                        font-size: 12px;
                        font-weight: normal;
                        -webkit-transition: background .3s ease;
                        transition: background .3s ease;
                    }

                    .rc-table td {
                        border-bottom: 1px solid #EAECEF;
                        background-color: #fff;
                        color: #212833;
                        font-size: 14px;
                    }

                    .rc-table tr {
                        -webkit-transition: all .3s ease;
                        transition: all .3s ease;
                    }

                    .rc-table th,
                    .rc-table td {
                        padding: 12px 16px;
                        white-space: nowrap;
                    }

                    .rc-table-expand-icon-col {
                        width: 34px;
                    }

                    .rc-table-row-expand-icon,
                    .rc-table-expanded-row-expand-icon {
                        cursor: pointer;
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        text-align: center;
                        line-height: 16px;
                        border: 1px solid #e9e9e9;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        background: #fff;
                    }

                    .rc-table-row-spaced,
                    .rc-table-expanded-row-spaced {
                        visibility: hidden;
                    }

                    .rc-table-row-spaced:after,
                    .rc-table-expanded-row-spaced:after {
                        content: '.';
                    }

                    .rc-table-row-expanded:after,
                    .rc-table-expanded-row-expanded:after {
                        content: '-';
                    }

                    .rc-table-row-collapsed:after,
                    .rc-table-expanded-row-collapsed:after {
                        content: '+';
                    }

                    tr.rc-table-expanded-row {
                        background: #f7f7f7;
                    }

                    tr.rc-table-expanded-row:hover {
                        background: #f7f7f7;
                    }

                    .rc-table-column-hidden {
                        display: none;
                    }

                    .rc-table-prev-columns-page,
                    .rc-table-next-columns-page {
                        cursor: pointer;
                        color: #666;
                        z-index: 1;
                    }

                    .rc-table-prev-columns-page:hover,
                    .rc-table-next-columns-page:hover {
                        color: #2db7f5;
                    }

                    .rc-table-prev-columns-page-disabled,
                    .rc-table-next-columns-page-disabled {
                        cursor: not-allowed;
                        color: #999;
                    }

                    .rc-table-prev-columns-page-disabled:hover,
                    .rc-table-next-columns-page-disabled:hover {
                        color: #999;
                    }

                    .rc-table-prev-columns-page {
                        margin-right: 8px;
                    }

                    .rc-table-prev-columns-page:before {
                        content: '<';
                    }

                    .rc-table-next-columns-page {
                        float: right;
                    }

                    .rc-table-next-columns-page:before {
                        content: '>';
                    }

                    .rc-table-fixed-left,
                    .rc-table-fixed-right {
                        position: absolute;
                        top: 0;
                        overflow: hidden;
                    }

                    .rc-table-fixed-left table,
                    .rc-table-fixed-right table {
                        width: auto;
                        background: #fff;
                    }

                    .rc-table-fixed-left {
                        left: 0;
                        border-right: 1px solid #EAECEF;
                    }

                    .rc-table-fixed-left .rc-table-body-inner {
                        margin-right: -20px;
                        padding-right: 20px;
                    }

                    .rc-table-fixed-header .rc-table-fixed-left .rc-table-body-inner {
                        padding-right: 0;
                    }

                    .rc-table-fixed-right {
                        right: 0;
                        border-left: 1px solid #EAECEF;
                    }

                    .rc-table-fixed-right .rc-table-expanded-row {
                        color: transparent;
                        pointer-events: none;
                    }

                    .rc-table.rc-table-scroll-position-left .rc-table-fixed-left {
                        box-shadow: none;
                    }

                    .rc-table.rc-table-scroll-position-right .rc-table-fixed-right {
                        box-shadow: none;
                    }

                    .rc-table-row-cell-ellipsis {
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }

                    .rc-table-row-cell-break-word {
                        word-wrap: break-word;
                        word-break: break-word;
                    }

                    .rc-table-layout-fixed table {
                        table-layout: fixed;
                    }

                    .rc-table .rc-table-placeholder {
                        border-bottom: none;
                    }

                    .rc-table .rc-table-placeholder .rc-table-cell {
                        border-bottom: none;
                    }

                    td.rc-table-cell-fix-left,
                    td.rc-table-cell-fix-right {
                        background-clip: padding-box;
                    }

                    td.rc-table-cell-fix-left::after,
                    td.rc-table-cell-fix-right::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -1px;
                        width: 100%;
                        height: 1px;
                        background: #EAECEF;
                    }
                </style>
                <style data-emotion-css="11m81d1">
                    body,
                    #__APP {
                        height: auto !important;
                        width: 100%;
                    }

                    body {
                        overflow-x: hidden;
                    }

                    img {
                        visibility: hidden;
                    }

                    img[src] {
                        visibility: visible;
                    }

                    .bn-lazy-img {
                        background-color: transparent !important;
                    }
                </style>
                <style data-emotion-css="1b6iipj">
                    body {
                        background-color: #181A20;
                    }

                    .bn-layer-notifies-wrap {
                        position: fixed;
                        z-index: 9999;
                    }
                </style>
                <style data-emotion-css="mh0s1k">
                    @font-face {
                        font-weight: 900;
                        font-family: 'IBM Plex Sans';
                        font-style: normal;
                        src: url(./bin.bnbstatic.com/static/images/activity/referral-lite/ibmplexsans-black.otf) format('opentype');
                    }

                    @font-face {
                        font-weight: 700;
                        font-family: 'IBM Plex Sans';
                        font-style: normal;
                        src: url(./bin.bnbstatic.com/static/fonts/ibm/IBMPlexSans-Bold.woff2) format('woff2');
                    }

                    @font-face {
                        font-weight: 500;
                        font-family: 'IBM Plex Sans';
                        font-style: normal;
                        src: url(./bin.bnbstatic.com/static/fonts/ibm/IBMPlexSans-Medium.woff2) format('woff2');
                    }

                    @font-face {
                        font-weight: 400;
                        font-family: 'IBM Plex Sans';
                        font-style: normal;
                        src: url(./bin.bnbstatic.com/static/fonts/ibm/IBMPlexSans-Regular.woff2) format('woff2');
                    }
                </style>
                <style data-emotion-css="ivxrp3">
                    @font-face {
                        font-weight: 700;
                        font-family: 'Gotham HTF';
                        font-style: normal;
                        src: url(./bin.bnbstatic.com/static/fonts/gotham/gotham-htf-bold.otf);
                    }

                    @font-face {
                        font-weight: 900;
                        font-family: 'Gotham HTF';
                        font-style: normal;
                        src: url(./bin.bnbstatic.com/static/fonts/gotham/gotham-htf-black.otf);
                    }
                </style>
                <div style="display:block" class="overflow-y-scroll notMobile:bg-[--color-bg2] notMobile:pt-[40px]">
                    <div class="mobile:sticky z-[10] mobile:px-[16px] w-screen top-0 max-w-[1248px] px-[24px] mx-auto" style="height:42px"></div>
                    <div class="mobile:px-[16px] pb-[125px] bg-[--color-BasicBg] min-h-full">
                        <div>
                            <div class="w-full bg-[--color-bg2] pb-[40px]">
                                <div class="bn-flex max-w-[1248px] mx-auto px-[24px]">
                                    <div class="w-[690px]">
                                       
                                       
                                        <div class="w-[405px]">
                                            <div class="mt-[32px] mx-auto w-full">
                                            <div class="h-[220px]">
                                            <h2 style="color: white;">Referral</h2>
                                            <h1 style="color: white;">Refer a Friend Both Earn $100</h1>
                                            <p style="color: white;">Refer friends to deposit over $50, and both receive $100 in trading fee rebate vouchers.</p>
                                        </div>
                                               
                                            <div class="referlink">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="mt-[32px]">
                                            <div class="bn-flex w-full h-[100px] justify-center items-center">
                                                <div role="status" aria-label="loading" aria-live="polite" aria-busy="true" class="bn-spinner__nezha">
                                                    <div class="nezha-line" style="animation-delay:50ms"></div>
                                                    <div class="nezha-line" style="animation-delay:100ms"></div>
                                                    <div class="nezha-line" style="animation-delay:150ms"></div>
                                                    <div class="nezha-line" style="animation-delay:200ms"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="aspect-[414/290] w-[414px] m-auto"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFill w-full h-full" mode="aspectFill" src="./bin.bnbstatic.com/static/images/referral/lite-reward-web.png" data-src="./bin.bnbstatic.com/static/images/referral/lite-reward-web.png"
                                    /></div>
                                    
                                </div>
                                <link rel="stylesheet" href="share-style.css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

<div class="share-container">
  <h2 class="share-title">Share to</h2>
  <div class="share-icons">
    
    <div class="share-item">
      <div class="share-icon"><i class="fab fa-whatsapp"></i></div>
      <span>WhatsApp</span>
    </div>

    <div class="share-item">
      <div class="share-icon"><i class="fab fa-facebook-f"></i></div>
      <span>Facebook</span>
    </div>

    <div class="share-item">
      <div class="share-icon"><i class="fab fa-telegram-plane"></i></div>
      <span>Telegram</span>
    </div>

    <div class="share-item">
      <div class="share-icon"><i class="fab fa-x-twitter"></i></div>
      <span>X</span>
    </div>

    <div class="share-item">
      <div class="share-icon"><i class="fab fa-reddit-alien"></i></div>
      <span>Reddit</span>
    </div>

    <div class="share-item">
      <div class="share-icon"><i class="fas fa-qrcode"></i></div>
      <span>QR code</span>
    </div>

    <div class="share-item">
      <div class="share-icon"><i class="fas fa-ellipsis-h"></i></div>
      <span>More</span>
    </div>

  </div>
</div>


<style>
.share-container {
  background-color: #000;
  padding: 16px;
  color: white;
  font-family: sans-serif;
}

.share-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.share-icons {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.share-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  width: 80px;
}

.share-icon {
  width: 56px;
  height: 56px;
  background-color: #FFD700; /* Yellow */
  color: #000;
  border-radius: 50%;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.share-icon:hover {
  transform: scale(1.1);
}

.share-item span {
  font-size: 13px;
  color: white;
}
</style>
                            </div>

                            
                            <div class="max-w-[1248px] px-[24px] mx-auto mt-[40px]">
                                <div class="bn-flex justify-between gap-[24px]">
                                    <div class="flex-1">
                                        <div class="bn-flex gap-[8px] w-full h-full rounded-[16px] border-solid border-[1px] border-[--color-line] pt-[8px] pb-[16px] desktop:pb-[8px] ps-[24px]">
                                            <div style="color: white;" class="t-subtitle3 desktop:t-subtitle1 desktop:mt-[24px] mt-[10px]">1.Share your referral link with friends</div>
                                            <div class="order-2 w-[60px] desktop:w-[130px] h-auto ms-auto me-[2px] shrink-0 my-auto aspect-[1/1]"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFill w-full h-full" mode="aspectFill" src="./bin.bnbstatic.com/static/images/referral/share-link-web.png" data-src="./bin.bnbstatic.com/static/images/referral/share-link-web.png"
                                                /></div>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="bn-flex gap-[8px] w-full h-full rounded-[16px] border-solid border-[1px] border-[--color-line] pt-[8px] pb-[16px] desktop:pb-[8px] ps-[24px]">
                                            <div style="color: white;"  class="t-subtitle3 desktop:t-subtitle1 desktop:mt-[24px] mt-[10px]">2.Invite your friends to sign up and deposit more than $50 within 14 days of registration</div>
                                            <div class="order-2 w-[60px] desktop:w-[130px] h-auto ms-auto me-[2px] shrink-0 my-auto aspect-[1/1]"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFill w-full h-full" mode="aspectFill" src="./bin.bnbstatic.com/static/images/referral/deposit-task-web.png" data-src="./bin.bnbstatic.com/static/images/referral/deposit-task-web.png"
                                                /></div>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div class="bn-flex gap-[8px] w-full h-full rounded-[16px] border-solid border-[1px] border-[--color-line] pt-[8px] pb-[16px] desktop:pb-[8px] ps-[24px]">
                                            <div style="color: white;" class="t-subtitle3 desktop:t-subtitle1 desktop:mt-[24px] mt-[10px]">Receive trading fee rebate vouchers worth $100 each.</div>
                                            <div class="order-2 w-[60px] desktop:w-[130px] h-auto ms-auto me-[2px] shrink-0 my-auto aspect-[1/1]"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFill w-full h-full" mode="aspectFill" src="./bin.bnbstatic.com/static/images/referral/lite-reward-voucher-web.png" data-src="./bin.bnbstatic.com/static/images/referral/lite-reward-voucher-web.png"
                                                /></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-[60px]">
                                    <div class="bn-flex justify-between">
                                        <div class="t-headline5 text-PrimaryText my-auto">Overview</div>
                                        <div class="bg-BasicBg py-[12px] mb-[-12px]">
                                            <div class="bn-web-datepicker bn-web-datepicker-range bn-web-datepicker-invalid bn-web-datepicker data-size-middle data-outlined bg-[transparent] cursor-pointer [&amp;_input]:cursor-pointer flex-shrink-0">
                                                <div class="bn-web-datepicker-input"><input aria-invalid="false" autoComplete="off" readonly="" size="12" placeholder="YYYY-MM-DD" date-range="start" value="2019-01-01" /></div>
                                                <div class="bn-web-datepicker-range-separator"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg></div>
                                                <div
                                                    class="bn-web-datepicker-input"><input aria-invalid="true" autoComplete="off" readonly="" size="12" placeholder="YYYY-MM-DD" date-range="end" value="2025-04-23" /></div>
                                            <div class="bn-web-datepicker-active-bar" style="position:absolute;width:0"></div><span class="bn-web-datepicker-suffix"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H7v2H4v3.5h16V6h-3V4h-3v2h-4V4zm10 8H4v7h16v-7z" fill="currentColor"></path></svg></span></div>
                                    </div>
                                </div>
                                <div class="bn-flex mt-[24px]">
                                    <div class="w-[31%]">
                                        <div class="bn-flex flex-col justify-start grow desktop:p-[16px] rounded-[8px] notMobile:bg-[transparent] notMobile:p-0 mt-[16px]">
                                            <div class="t-caption1 text-PrimaryText">
                                                <div class="bn-tooltips-wrap">
                                                    <div aria-describedby="bn-tooltips-sQL0xr4e" class="bn-tooltips-ele"><span class="mobile:!inline-block w-fit !flex"><span class="!inline-block w-fit align-middle notMobile:t-body5 desktop:t-body2">Total Rewards (USD)</span>
                                                        <div class="bn-tooltips-wrap">
                                                            <div aria-describedby="bn-tooltips-TKlBpq7P" class="bn-tooltips-ele"><svg fill="TertiaryText" class="bn-svg align-middle ms-[4px] text-TertiaryText cursor-pointer w-[14px] h-[14px] mt-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z" fill="currentColor"></path></svg></div>
                                                        </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bn-flex">
                                                <div class="t-headline0 notMobile:t-headline3 text-PrimaryText mt-[4px]">
                                                    <div class="text-[48px] font-[600] leading-[56px]">0</div>
                                                </div>
                                            </div>
                                            <div class="t-caption1 notMobile:t-body2 mt-[4px] text-SecondaryText">≈ $0</div>
                                        </div>
                                    </div>
                                    <div class="bn-grid grid-cols-2 gap-[12px] rounded-[16px] notMobile:gap-[16px] w-[64%] p-0 ms-auto" style="grid-template-columns:repeat(2, 1fr)">
                                        <div class="bn-flex flex-col justify-start grow notMobile:bg-SecondaryBg notMobile:p-[10px] desktop:p-[16px] rounded-[8px]">
                                            <div class="t-caption1 text-PrimaryText">
                                                <div class="bn-tooltips-wrap">
                                                    <div aria-describedby="bn-tooltips-YdJjeLgx" class="bn-tooltips-ele"><span class="mobile:!inline-block w-fit !flex"><span class="!inline-block w-fit align-middle notMobile:t-body5 desktop:t-body2">Total Referrals</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bn-flex">
                                                <div class="t-headline0 notMobile:t-headline3 text-PrimaryText mt-[4px]"></div>
                                            </div>
                                        </div>
                                        <div class="bn-flex flex-col justify-start grow notMobile:bg-SecondaryBg notMobile:p-[10px] desktop:p-[16px] rounded-[8px]">
                                            <div class="t-caption1 text-PrimaryText">
                                                <div class="bn-tooltips-wrap">
                                                    <div aria-describedby="bn-tooltips-fm3HenjT" class="bn-tooltips-ele"><span class="mobile:!inline-block w-fit !flex"><span class="!inline-block w-fit align-middle notMobile:t-body5 desktop:t-body2">Task Completed Referrals</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bn-flex">
                                                <div class="t-headline0 notMobile:t-headline3 text-PrimaryText mt-[4px]"></div>
                                            </div>
                                        </div>
                                        <div class="bn-flex flex-col justify-start grow notMobile:bg-SecondaryBg notMobile:p-[10px] desktop:p-[16px] rounded-[8px]">
                                            <div class="t-caption1 text-PrimaryText">
                                                <div class="bn-tooltips-wrap">
                                                    <div aria-describedby="bn-tooltips-6L16QByo" class="bn-tooltips-ele"><span class="mobile:!inline-block w-fit !flex"><span class="!inline-block w-fit align-middle notMobile:t-body5 desktop:t-body2">Total Trading Fee Rebate Voucher (USD)</span>
                                                        <div class="bn-tooltips-wrap">
                                                            <div aria-describedby="bn-tooltips-AZh5j7xq" class="bn-tooltips-ele"><svg fill="TertiaryText" class="bn-svg align-middle ms-[4px] text-TertiaryText cursor-pointer w-[14px] h-[14px] mt-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z" fill="currentColor"></path></svg></div>
                                                        </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bn-flex">
                                                <div class="t-headline0 notMobile:t-headline3 text-PrimaryText mt-[4px]">0</div>
                                            </div>
                                            <div class="t-caption1 notMobile:t-body2 mt-[4px]">≈ $NaN</div>
                                        </div>
                                        <div class="bn-flex flex-col justify-start grow notMobile:bg-SecondaryBg notMobile:p-[10px] desktop:p-[16px] rounded-[8px]">
                                            <div class="t-caption1 text-PrimaryText">
                                                <div class="bn-tooltips-wrap">
                                                    <div aria-describedby="bn-tooltips-JLoucggm" class="bn-tooltips-ele"><span class="mobile:!inline-block w-fit !flex"><span class="!inline-block w-fit align-middle notMobile:t-body5 desktop:t-body2">Total Token Voucher (USD)</span>
                                                        <div class="bn-tooltips-wrap">
                                                            <div aria-describedby="bn-tooltips-DhDA8cA0" class="bn-tooltips-ele"><svg fill="TertiaryText" class="bn-svg align-middle ms-[4px] text-TertiaryText cursor-pointer w-[14px] h-[14px] mt-[2px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z" fill="currentColor"></path></svg></div>
                                                        </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bn-flex">
                                                <div class="t-headline0 notMobile:t-headline3 text-PrimaryText mt-[4px]">0</div>
                                            </div>
                                            <div class="t-caption1 notMobile:t-body2 mt-[4px]">≈ $NaN</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-[40px]">
                                <div class="bn-flex">
                                    <div class="bn-tabs bn-tabs__default">
                                        <div role="tablist" aria-orientation="horizontal" class="bn-tab-list bn-tab-list__default">
                                            <div role="tab" aria-selected="true" class="bn-tab bn-tab__default active" id="bn-tab-0" aria-controls="bn-tab-pane-0" tabindex="0">Referrals</div>
                                            <div role="tab" aria-selected="false" class="bn-tab bn-tab__default" id="bn-tab-1" aria-controls="bn-tab-pane-1" tabindex="-1">Rewards</div>
                                        </div>
                                        <div class="bn-tab-pane-list">
                                            <div role="tabpanel" aria-hidden="false" id="bn-tab-pane-0" aria-labelledby="bn-tab-0" class="bn-tab-pane active"></div>
                                            <div role="tabpanel" aria-hidden="true" id="bn-tab-pane-1" aria-labelledby="bn-tab-1" style="display:none" class="bn-tab-pane"></div>
                                        </div>
                                    </div>
                                    <div class="bn-flex ms-auto my-auto gap-[16px]">
                                        <div class="bn-textField bn-textField__line data-size-middle data-gap-size-normal w-full rounded-full overflow-hidden notMobile:rounded-[8px] notMobile:w-[240px]">
                                            <div class="bn-textField-prefix"><svg fill="IconNormal" class="bn-svg text-IconNormal w-[20px] h-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z" fill="currentColor"></path></svg></div><input
                                                aria-label="Search by UID/Note/Referral Code" class="bn-textField-input" placeholder="Search by UID/Note/Referral Code" spellcheck="false" autoComplete="" value="" /></div>
                                        <div class="bn-web-datepicker bn-web-datepicker-range bn-web-datepicker-invalid bn-web-datepicker data-size-middle data-outlined bg-[transparent] cursor-pointer [&amp;_input]:cursor-pointer flex-shrink-0">
                                            <div class="bn-web-datepicker-input"><input aria-invalid="false" autoComplete="off" readonly="" size="12" placeholder="YYYY-MM-DD" date-range="start" value="2019-01-01" /></div>
                                            <div class="bn-web-datepicker-range-separator"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg></div>
                                            <div
                                                class="bn-web-datepicker-input"><input aria-invalid="true" autoComplete="off" readonly="" size="12" placeholder="YYYY-MM-DD" date-range="end" value="2025-04-23" /></div>
                                        <div class="bn-web-datepicker-active-bar" style="position:absolute;width:0"></div><span class="bn-web-datepicker-suffix"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="bn-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4H7v2H4v3.5h16V6h-3V4h-3v2h-4V4zm10 8H4v7h16v-7z" fill="currentColor"></path></svg></span></div>
                                </div>
                            </div>
                            <div class="mt-[24px] min-h-[100px]">
                                <div class="bn-loading bn-loading__secondary py-[200px] mx-auto">
                                    <div role="status" aria-label="loading" aria-live="polite" aria-busy="true" class="bn-spinner__nezha bn-loading-nezha">
                                        <div class="nezha-line" style="animation-delay:50ms"></div>
                                        <div class="nezha-line" style="animation-delay:100ms"></div>
                                        <div class="nezha-line" style="animation-delay:150ms"></div>
                                        <div class="nezha-line" style="animation-delay:200ms"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[40px]">
                            <div class="bn-flex w-full gap-[40px]">
                                <div class="flex-1">
                                    <div class="mobile:mt-[40px] mobile:mb-[24px]">
                                        <div class="bn-flex mb-[16px]">
                                            <div style="color: white;" class="typography-headline3 text-[--color-PrimaryText">Activity History</div>
                                            <div class="bn-flex cursor-pointer ps-[4px] ms-auto my-auto">
                                                <div class="typography-body3 text-[--color-TextLink]">More</div><svg fill="TextLink" class="bn-svg mt-[2px] w-[20px] h-[20px] text-[--color-TextLink]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg></div>
                                        </div>
                                        <div class="bn-flex gap-[32px] tablet:gap-[20px]">
                                            <div class="w-full notMobile:w-[345px] shrink-0">
                                                <div></div>
                                            </div>
                                            <div class="mobile:hidden">
                                                <div></div><button class="bn-button bn-button__primary data-size-tiny mt-[8px]">View</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[391px] border-solid border-[1px] border-Line p-[24px] rounded-[16px]">
                                    <div>
                                        <div class="bn-flex">
                                            <div class="t-subtitle2 text-[--color-PrimaryText]">Top 24H Commission Earners</div>
                                            <div class="ms-auto ps-[8px] h-[20px] cursor-pointer"><svg fill="IconNormal" class="bn-svg w-[20px] h-[20px] text-[--color-IconNormal]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg></div>
                                        </div>
                                        <div class="bn-flex flex-col gap-[20px] mt-[20px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="bn-flex gap-[16px] mt-[40px] justify-center">
                                <div class="bn-flex flex-col flex-1 rounded-[16px] py-[40px] px-[24px] bg-SecondaryBg max-w-[50%]">
                                    <div class="aspect-[315/124] w-full notMobile:w-[200px] mx-auto"><img role="img" aria-label="image" alt="image" class="bn-lazy-img data-mode-aspectFill w-full h-full" mode="aspectFill" src="./bin.bnbstatic.com/static/images/referral/join-kol.png" data-src="./bin.bnbstatic.com/static/images/referral/join-kol.png"
                                        /></div>
                                    <div class="mt-[32px] text-center text-[--color-PrimaryText] t-headline2 notMobile:t-headline4 ">Become a KOL</div>
                                    <div class="mb-[24px] mt-[8px] text-center mobile:typography-body1 notMobile:text-[16px] notMobile:leading-[24px] notMobile:font-[400] text-[--color-PrimaryText]">Have over 5,000 social media followers? Leverage your community by becoming an Affiliate and earn up to
                                        <div class="inline-block text-[--color-TextLink]">50%</div> commission on every trade.</div><button class="bn-button bn-button__primary data-size-large mt-auto w-full !rounded-full notMobile:w-[284px] mx-auto">Join Now</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="hidden mobile:block">
                <div class="bg-[--color-BasicBg] fixed bottom-0 w-screen z-[1] border-0 border-solid border-t border-Line">
                    <div style="padding-bottom:34px" class="bn-flex justify-between mx-auto px-[28px] pt-[8px]">
                        <div class="cursor-pointer">
                            <div class="mx-auto w-fit h-[24px] relative"><svg fill="PrimaryText" class="bn-svg w-[24px] h-[24px]  text-[--color-PrimaryText]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM2 17a3 3 0 013-3h5a3 3 0 013 3v3H2v-3zm14.5-1v-3h-3v-3h3V7h3v3h3v3h-3v3h-3z" fill="currentColor"></path></svg></div>
                            <div
                                class="text-center text-[12px] font-[500] text-[--color-PrimaryText]">Invite</div>
                    </div>
                    <div class="cursor-pointer">
                        <div class="mx-auto w-fit h-[24px] relative"><svg fill="IconNormal" class="bn-svg w-[24px] h-[24px]  text-[--color-IconNormal]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.22 11.778a3.11 3.11 0 100-6.22 3.11 3.11 0 000 6.22zM6.11 13.778A3.11 3.11 0 003 16.888v1.554h12.44v-1.555a3.11 3.11 0 00-3.11-3.11H6.11zM21 18.442h-3.56v-1.555c0-1.17-.394-2.248-1.055-3.11h1.505a3.11 3.11 0 013.11 3.11v1.555zM14.33 8.668a5.087 5.087 0 01-.852 2.825 3.11 3.11 0 100-5.65c.538.809.852 1.78.852 2.825z" fill="currentColor"></path></svg></div>
                        <div
                            class="text-center text-[12px] font-[500] text-[--color-IconNormal]">Referrals</div>
                </div>
                <div class="cursor-pointer">
                    <div class="mx-auto w-fit h-[24px] relative"><svg fill="IconNormal" class="bn-svg w-[24px] h-[24px]  text-[--color-IconNormal]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15z" fill="currentColor"></path></svg></div>
                    <div
                        class="text-center text-[12px] font-[500] text-[--color-IconNormal]">Rewards</div>
            </div>
            <div class="cursor-pointer">
                <div class="mx-auto w-fit h-[24px] relative"><svg style="width:24px;height:24px" fill="IconNormal" class="bn-svg w-[24px] h-[24px]  text-[--color-IconNormal]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.3333 7.72217H20V20.1666H17.3333V7.72217Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.77777 5.94428H20V4.1665H4V19.2776H8.85697L15.0154 22.8331V11.2776L5.77777 5.94428ZM7.55555 9.49983H5.77777V16.6109H7.55555V9.49983Z" fill="currentColor"></path></svg></div>
                <div
                    class="text-center text-[12px] font-[500] text-[--color-IconNormal]">More</div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
           <footer></footer>
            <script id="custom-console" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
                try {
                    if (!Boolean(localStorage.getItem("enableLog"))) {
                        window.console.log = window.console.warn = window.console.info = window.console.debug = function noop() {};
                    }
                } catch (e) {}
            </script>
            <script id="pika-version" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
                try {
                    window.pika = window.pika || {};
                    window.pika.version = "0.3.62";
                    window.__HTTP_NEXT_MODE_ENABLED__ = true
                } catch (e) {
                    console.error(e)
                }
            </script>
            <script id="Sentry-sdk" src="./bin.bnbstatic.com/static/runtime/sentry/7.38.0/bundle.es5.min.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script id="Sentry-init" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
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
                        dsn: 'https://9aafb2dd426047009bab6884bd1a56b4@o529943.ingest.sentry.io/4505594236502016',
                        release: '20250422-ecd0c2ba-229035',
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
            <script type="application/json" id="bnc-cpl-headers" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
                {}
            </script>
            <script nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
                __referral_ui_dynamic_public_path__ = "https://bin.bnbstatic.com/"
            </script>
            <script id="prefetch-rules" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
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
            <script type="application/javascript" id="__COMMON_WIDGET_SSR_DATA__" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
                window.__COMMON_WIDGET_SSR_DATA__ = {
                    "theme": "dark",
                    "bizChannel": "",
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
                    "mediaState": {
                        "isMobile": false,
                        "isTablet": false,
                        "isDesktop": true
                    },
                    "userStatus": {
                        "isLogin": true,
                        "isKyc": true,
                        "isDeposit": false,
                        "isTrade": false
                    }
                }
            </script>
            <script nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
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
            <script id="gtm-trueMetrics" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" data-nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
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
                            nonce: '1cbbe69c-fad8-4c35-a1a9-01485197b13b'
                        },
                    });
                })(window, 'dataLayer', '_bn_reporter');
            </script>
            <script nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
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
            <script id="__APP_DATA" type="application/json" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b">
                {
                    "dynamicIds": ["vTXz", "M5j3", "xj71", "JfTh", "w/Qz", "Y4uf", "eeEA", "fvKX", "xSa8", "5tkj", "40we", "yQMN", "ohKi", "kg2c", "C6y2", "yhUQ", "pR+c", "k5JY", "OKcK", "N/Z2", "7vYB", "pFSi", "vGGS", "NYSw", "QT01", "UAs9", "7Pat", "S3pA", "cH1A", "km/J", "Ni9m", "Lp65", "o98L", "wgY5", "vM3x", "yKdM", "mOQS", "mdhG", "RZg6", "nS6q"],
                    "ssr": true,
                    "appState": {
                        "error": {
                            "error": null
                        },
                        "loader": {
                            "dataByRouteId": {
                                "851b": {
                                    "pageProps": {
                                        "locale": "en"
                                    }
                                },
                                "45d7": {
                                    "activityId": 11,
                                    "activityCode": "CPA",
                                    "origin": "https://www.binance.com",
                                    "locale": "en",
                                    "url": "https://www.binance.com/en/activity/referral/offers",
                                    "path": "/en/activity/referral/offers",
                                    "host": "https://www.binance.com",
                                    "metaData": {
                                        "ogUrl": "https://www.binance.com/en/activity/referral/offers",
                                        "title": "Crypto Exchange Referral Program | Binance Official",
                                        "keywords": "Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Binance, Poloniex, Bittrex",
                                        "description": "The official way to invite your friends. Get rewarded up to 40% commission for every friend you refer to the https://binance.com/Exchange. No limits to invites!",
                                        "ogImage": "https://public.bnbstatic.com/images/referral-lite/cpa/en-ogImage.png"
                                    },
                                    "linkData": [{
                                        "rel": "preconnect",
                                        "href": "https://public.bnbstatic.com"
                                    }, {
                                        "rel": "preload",
                                        "href": "./bin.bnbstatic.com/static/images/activity/referral-lite/cpa/landing-bg-mobile-dark-4.png",
                                        "as": "image",
                                        "media": "(max-width: 767px)"
                                    }, {
                                        "rel": "preload",
                                        "href": "./bin.bnbstatic.com/static/images/activity/referral-lite/cpa/title-background-tablet-dark.png",
                                        "as": "image",
                                        "media": "(min-width: 768px) and (max-width: 1023px)"
                                    }, {
                                        "rel": "preload",
                                        "href": "./bin.bnbstatic.com/static/images/activity/referral-lite/cpa/title-background-desktop-dark.png",
                                        "as": "image",
                                        "media": "(min-width: 1024px)"
                                    }],
                                    "activityInfo": {
                                        "activityId": 11,
                                        "activityCode": "CPA",
                                        "startTime": 1648706400000,
                                        "endTime": 7960053600000,
                                        "status": "IN_PROGRESS",
                                        "disableRegistration": false,
                                        "seasonalEventStart": null,
                                        "seasonalEventEnd": null,
                                        "disableSeasonalEvent": null
                                    }
                                }
                            }
                        }
                    },
                    "pageData": {
                        "shuviInitialState": {
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
                                "userPreferredCurrency": "USD_USD"
                            },
                            "products": {
                                "loading": true,
                                "productMap": {},
                                "hotProduct": [],
                                "updateTime": 1745324995057
                            },
                            "ssrStore": {
                                "ssrUserStatus": {
                                    "isLogin": true
                                }
                            },
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
                            "persistSetting": {
                                "favorites": [],
                                "isHideSmallBalance": false,
                                "maskedBalance": false
                            }
                        },
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
                                "userPreferredCurrency": "USD_USD"
                            },
                            "products": {
                                "loading": true,
                                "productMap": {},
                                "hotProduct": [],
                                "updateTime": 1745324995057
                            },
                            "ssrStore": {
                                "ssrUserStatus": {
                                    "isLogin": true
                                }
                            },
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
                            "persistSetting": {
                                "favorites": [],
                                "isHideSmallBalance": false,
                                "maskedBalance": false
                            }
                        },
                        "i18nResource": {
                            "en": {
                                "referral-ui": {
                                    "main-seo-keywords": "Binance Referral, Crypto Exchange Referral",
                                    "referral-cpa-dialog-ineligible-title": "Ineligible Account Detected",
                                    "referral-cpa-dialog-ineligible-description": "Sub-accounts aren't eligible for Referral Mode.",
                                    "common-text-ok": "OK",
                                    "main-via": "Invite via",
                                    "main-ref-id": "Referral Code",
                                    "main-ref-link": "Referral Link",
                                    "main-lite-invite-step-1": "1.Share your referral link with friends",
                                    "main-lite-invite-step-2": "2.Invite your friends to sign up and deposit more than $50 within 14 days of registration",
                                    "main-lite-invite-step-3": "Receive trading fee rebate vouchers worth $100 each.",
                                    "common-text-overview": "Overview",
                                    "main-column-registered-friends": "Total Referrals",
                                    "main-column-tasks-completed": "Task Completed Referrals",
                                    "main-column-total-rewards-currency": "Total Rewards ({{currency}})",
                                    "main-lite-reward-list-perfs-total-rewards-tooltip": "This data is the sum of the total face value of the trading fee rebate voucher and token voucher received via referral.",
                                    "main-column-total-rebate-voucher-currency": "Total Trading Fee Rebate Voucher ({{currency}})",
                                    "main-lite-reward-list-perfs-rebate-voucher-tooltip": "Kindly note that this data is the total face value of the trading fee rebate vouchers you received.",
                                    "main-column-total-token-voucher-currency": "Total Token Voucher ({{currency}})",
                                    "main-lite-reward-list-perfs-token-voucher-tooltip": "This data represents the USD value of the token vouchers you received through referrals.",
                                    "main-menu-friends": "Referrals",
                                    "main-menu-rewards": "Rewards",
                                    "main-friend-list-search-placeholder": "Search by UID/Note/Referral Code",
                                    "common-text-status": "Status",
                                    "main-column-registration-date": "Registration Date",
                                    "main-column-note": "Note",
                                    "main-friend-list-item-uid": "UID {{uid}}",
                                    "main-lite-activity-history": "Activity History",
                                    "common-text-more": "More",
                                    "main-kol-hub-material-link": "View",
                                    "main-kol-hub-ranking": "Top 24H Commission Earners",
                                    "main-kol-hub-ranking-title": "Top 24H Commission Earners",
                                    "main-kol-hub-join-title": "Become a KOL",
                                    "main-kol-hub-join-cta": "Join Now",
                                    "main-kol-hub-join-desc": "Have over 5,000 social media followers? Leverage your community by becoming an Affiliate and earn up to \u003cspan\u003e50%\u003c/span\u003e commission on every trade.",
                                    "main-menu-invite": "Invite",
                                    "common-country-restriction-nonLogin": "Dear user, as per our Terms of Use and compliance with local regulations, this service may not be accessible to users in this region. Please login to your account to access your usual services.",
                                    "common-country-restriction-title": "Service Notice",
                                    "common-country-restriction-desc": "Dear user, as per our Terms of Use and compliance with local regulations, these features are not available in your region.",
                                    "common-country-restriction-homepage": "Back to Homepage"
                                },
                                "activity-ui": {
                                    "referral-cpa-seo-title": "Friends Referral Program | Refer \u0026 Earn | Binance Official",
                                    "referral-cpa-seo-description": "Get a {{amount}} {{asset}} cashback voucher when you refer a friend. T\u0026C apply."
                                },
                                "growth-platform": {},
                                "widget-common": {}
                            }
                        },
                        "i18nNamespaces": ["referral-ui", "activity-ui", "growth-platform", "widget-common"],
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
                        // "STATIC_HOST": "https://bin.bnbstatic.com",
                        "STATIC_HOST": "http://localhost//test2/",
                        "STATIC_HOST_SHARE": "https://public.bnbstatic.com",
                        "GA_TRACKING_ID": "UA-162512367-1",
                        "GTM_TRACKING_ID": "M86QHGF",
                        "API_HOST": "https://www.binance.com",
                        "API_HOST_PRIVATE": "http://dispatcher-service.bin.internal",
                        "API_ACCELERATE_HOST_PUBLIC": "https://www.binance.com",
                        "INBOX_STREAM_HOST": "wss://bstream.binance.com:9443",
                        "DEV": "production",
                        "NODE_ENV": "production",
                        "MARKET_STREAM_HOST_TEMPLATE": "wss://nbstream.{{rootDomain}}",
                        "SKIP_LOGIN": "",
                        "USE_MOCK": "",
                        "SENSORS_SERVER_HOST": "https://api.saasexch.com/bapi/fe/usd/sa?project=binance",
                        "ACCOUNTS_PREFIX": "accounts",
                        "THEMIS_ADDRESS": "https://api.saasexch.com/bapi/themis/api/",
                        "THEMIS_BINANCE_APP_WEB_AUTH": "NDA0NDcwMTczNjp0UTFVaXBHZndBS3RoVTVzbjRhSUlJbjFHVlZPOFR2SQ",
                        "THEMIS_MANUAL_SYNC_STRATEGY": "54",
                        "THEMIS_REFERRAL_APP_AUTH": "NzExMDg2MzE0NTpjUW50Y1hqb1F1S3VPVGMyWVpNWHRxMVdoOFA4VkUwNA==",
                        "THEMIS_REFERRAL_ENTRY_STRATEGY": "127",
                        "GAME_WSS": "wss://nbstream.binance.com",
                        "SASS_FORM_HOST": "https://api.commonservice.io",
                        "SASS_FORM_CLIENT_ID": "referral",
                        "I18N_TRACK": "true",
                        "I18N_TRACK_APPID": "cc1ljun9gpbp8ciciolg",
                        "I18N_TRACK_HOST": "https://api.saasexch.com",
                        "DEPLOYMENT_ENV": "prod",
                        "SENTRY_DSN": "https://9aafb2dd426047009bab6884bd1a56b4@o529943.ingest.sentry.io/4505594236502016",
                        "SENTRY_ENV": "prod",
                        "THEMIS_ENV": "PROD",
                        "MICA_ORION_RULE": "30",
                        "RETURN_TO_DEFAULT": "#origin#/:locale/my/dashboard",
                        "COMMIT_HEAD": "ecd0c2ba027e56e733d57c0550aff69a730f2602",
                        "I18N_BASE_PUBLIC": "./bin.bnbstatic.com/api/i18n/-/web/cms"
                    },
                    "filesByRoutId": {
                        "3359": ["static/css/5663f40e.chunk.css", "static/chunks/page-3359.f149c601.js"],
                        "851b": ["static/css/5786cf4a.chunk.css", "static/css/0b7e4ad7.chunk.css", "static/chunks/layout-851b.ce5f0300.js"],
                        "e2d6": ["static/css/0ca9d249.chunk.css", "static/chunks/page-e2d6.67b7dc05.js"],
                        "becf": ["static/css/41062251.chunk.css", "static/chunks/page-becf.4842e257.js"],
                        "b972": ["static/css/cecc4641.chunk.css", "static/chunks/page-b972.ab6a5d5d.js"],
                        "f563": ["static/css/0ca9d249.chunk.css", "static/chunks/page-f563.be814cf4.js"],
                        "0436": ["static/css/74e6469c.chunk.css", "static/chunks/page-0436.d96fc32b.js"],
                        "45d7": ["static/css/cecc4641.chunk.css", "static/chunks/page-45d7.fbe1dc49.js"],
                        "6f55": ["static/css/aad94434.chunk.css", "static/chunks/page-6f55.5c7961d4.js"],
                        "5bd0": ["static/css/0ca9d249.chunk.css", "static/chunks/page-5bd0.be944130.js"],
                        "53aa": ["static/css/0ca9d249.chunk.css", "static/chunks/page-53aa.4dbcee6c.js"],
                        "66a6": ["static/css/0ca9d249.chunk.css", "static/chunks/page-66a6.2caf65ef.js"],
                        "df88": ["static/css/0ca9d249.chunk.css", "static/chunks/page-df88.6a9539e2.js"],
                        "f337": ["static/css/0ca9d249.chunk.css", "static/chunks/page-f337.7448d824.js"],
                        "63c9": ["static/css/0ca9d249.chunk.css", "static/chunks/page-63c9.1ec788ba.js"],
                        "ec02": ["static/css/9170dbe2.chunk.css", "static/chunks/page-ec02.ca6de057.js"],
                        "6b7a": ["static/css/0ca9d249.chunk.css", "static/chunks/page-6b7a.fc8ded79.js"],
                        "a8dd": ["static/css/0ca9d249.chunk.css", "static/chunks/page-a8dd.bbf29455.js"],
                        "8eb7": ["static/css/0ca9d249.chunk.css", "static/chunks/page-8eb7.705c15ec.js"],
                        "9ecf": ["static/css/31195e00.chunk.css", "static/chunks/page-9ecf.628843b5.js"],
                        "80ee": ["static/css/0ca9d249.chunk.css", "static/chunks/page-80ee.f2f5572f.js"],
                        "666f": ["static/css/0ca9d249.chunk.css", "static/chunks/page-666f.6650670e.js"],
                        "8f4c": ["static/css/177440f8.chunk.css", "static/chunks/page-8f4c.c4adbe86.js"],
                        "5c7a": ["static/css/0ca9d249.chunk.css", "static/chunks/page-5c7a.7fe06d84.js"],
                        "16a5": ["static/css/122d728b.chunk.css", "static/chunks/page-16a5.00d62c9c.js"],
                        "d93b": ["static/css/0ca9d249.chunk.css", "static/chunks/page-d93b.60412824.js"],
                        "8c15": ["static/chunks/page-8c15.d0b7309e.js"]
                    },
                    "publicPath": "./test2/"
                }
            </script>
            <div id="__APP_EXTENSION" style="position: absolute;"></div><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M86QHGF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <script id="remote-config" src="./public.bnbstatic.com/unpkg/config/remote-config.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/polyfills.d7582762.js" nomodule data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script id="essential-js" src="./public.bnbstatic.com/unpkg/essential/essential@0.3.52.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script id="vendor-umd" src="./public.bnbstatic.com/unpkg/vendor/vendor.umd.0.0.11.production.min.16.14.0.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/configs/newbase/common-widget-icon.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/themis/themis@0.0.39.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/vendor@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/utils@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/data@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/common@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/webpack-runtime.91fa8d8b.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/common/framework.0b17b0b1.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./bin.bnbstatic.com/static/main.1ba57270.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b" fetchpriority="high"></script>
            <script src="./public.bnbstatic.com/unpkg/web-push-odin/web-push-odin-pre.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/header@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/footer@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./public.bnbstatic.com/unpkg/common-widget/extension@1.3.664.min.js" nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/versionCheck.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/headerRender.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/footerRender.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
            <script src="./bin.bnbstatic.com/static/js/common-widget/extensionRender.js" data-ot-ignore nonce="aa187cd2-7af2-420a-863c-c41a3c9d800b"></script>
</body>
<?php include "footer.php" ?>

</html>