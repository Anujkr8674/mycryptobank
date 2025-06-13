(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [5877], {
        A4nT: (e, t, r) => {
            "use strict";
            r.d(t, {
                Bz: () => i
            });
            const n = e => e ? "CM" : "UM",
                i = {
                    PRODUCT_FUTURE_SERVICE: ["productFutureService"],
                    BRACKETS: e => ["brackets", n(e)],
                    BRACKETS_V2: e => ["brackets_v2", n(e)],
                    QUERY_FUTURES_FAVORITES: ["queryFuturesFavorites"],
                    QUERY_FUTURES_SECTION_INFO: ["queryFuturesSectionInfo"],
                    QUERY_FUTURES_SYMBOL_EXT_INFO: ["queryFuturesSymbolExtInfo"],
                    SYMBOL_CONFIG_INFO: ["symbolConfigInfo"],
                    QUERY_UNIT: e => ["queryUnit", n(e)],
                    QUERY_POSITION_SIDE: (e, t) => ["queryPositionSide", n(e), t],
                    QUERY_ARBITRAGE_UNIMMR: ["queryArbitrageUniMMR"],
                    QUERY_PRICE_DIFFER_SWITCH: e => ["queryPriceDifferSwitch", n(e)],
                    QUERY_ORDER_CONFIRMATION: e => ["queryOrderConfirmation", n(e)],
                    QUERY_MULTI_ASSET_MARGIN_ENABLE: ["queryMultiAssetMarginEnable"],
                    QUERY_JOIN_MARGIN: ["queryJoinMargin"],
                    GET_PNL_PRICE_BASIS: ["getPnlPriceBasis"],
                    GET_PNL_PRICE_BASIS_DENOMINATOR: ["getPnlPriceBasisDenominator"],
                    FUTURES_STOP_LIMIT_ORDER_NOTIFY: ["futuresStopLimitOrderNotify"],
                    FUTURES_FUNDING_FEE_NOTIFY: ["futuresFundingFeeNotify"],
                    GET_FUNDING_FEE_RANGE: ["getFundingFeeRange"],
                    fundingFeeHistory: ["FUNDING_FEE_HISTORY"],
                    fundingFeeHistoryList: (e, t, r, n) => [`FUNDING_FEE_HISTORY_${e}_${t?"CM":"UM"}`, r, n],
                    realTimeFundingInfo: ["realTimeFundingInfo"],
                    FUTURE_FEE_TIER: e => ["futureFeeTier", e],
                    FEE_TIER: (e, t) => ["feeTier", n(e), t],
                    QUERY_ASSET_INDEX: e => ["queryAssetIndex", n(e)],
                    LEVERAGE: (e, t) => ["leverage", n(e), t],
                    SYMBOL_CONFIG: (e, t) => ["symbolConfig", n(e), t],
                    POSITION_LIST: e => ["positionList", n(e)],
                    POSITION_MAP: e => ["positionMap", n(e)],
                    POSITION_MAP_V2: (e, t) => ["positionMapV2", n(e), t],
                    QUERY_INDEX_SYMBOL_DATA: e => ["queryIndexSymbolData", e],
                    QUERY_SPOT_ALL_TICKERS: ["querySpotAllTickers"],
                    QUERY_SINGLE_24HR_TICKER: e => ["querySingle24HRTicker", e],
                    QUERY_24HR_TICKER: e => ["query24HRTicker", n(e)],
                    QUERY_LAST_PRICE: e => ["queryLastPrice", e],
                    QUERY_MARK_PRICE: e => ["queryMarkPrice", e],
                    INDEX_PRICE: e => ["indexPrice", e],
                    OPEN_ORDERS: (e, t) => ["openOrders", n(e), t],
                    TRADING_BOT_OPEN_ORDERS: (e, t) => ["tradingBotOpenOrder", n(e), t ? .strategyId || 0],
                    TRADING_BOT_OPEN_ORDER_HISTORY: (e, t) => ["tradingBotOpenOrderHistoryByStrategyId", n(e), t ? .strategyId || 0],
                    NM_STRATEGY_OPEN_ORDERS: e => ["nmStrategyOpenOrders", n(e)],
                    PM_STRATEGY_OPEN_ORDERS: e => ["pmStrategyOpenOrders", n(e)],
                    BALANCE: (e, t) => ["balance", n(e), t],
                    QUERY_GRID_DETAIL: (e, t) => ["gridDetail", n(e), t],
                    OPEN_GRIDS_V2: e => ["openGridsV2", n(e)],
                    TOP_SEARCH_LIST: e => ["topSearch", n(e)],
                    SERVER_TIME: e => ["serverTime", n(e)],
                    QUERY_MARK_PRICE_ALL: e => ["queryMarkPriceAll", n(e)],
                    FETCH_NOTIONAL_LIMIT: ["fetchNotionalLimit"],
                    QUERY_STRATEGY_AGREEMENT: ["queryStrategyAgreement"],
                    QUERY_OPEN_TWAPS: ["queryOpenTwaps"],
                    QUERY_TRADE_HISTORY: (e, t) => ["queryTradeHistory", e, t],
                    QUERY_HISTORY_TWAPS: e => ["queryHistoryTwaps", e],
                    QUERY_TWAP_ORDERS: e => ["queryTwapOrders", e],
                    QUERY_TWAP_DETAIL: e => ["queryTwapDetail", e],
                    TUTORIAL_RESULT: ["tutorialResult"],
                    CHECK_FIRST_TRADE: ["checkFirstTrade"],
                    GET_MAJOR_ACCOUNT_FIRST_TRD_TIME: ["getMajorAccountFirstTradeTime"],
                    GET_FIRST_TRADE_TIME: ["getFirstTradeTime"],
                    QUERY_REBALANCING_RUNNING: e => ["queryRebalancingRunning", e],
                    QUERY_SYMBOL_RISK_DISCLAIMER: e => ["querySymbolRiskDisclaimer", e],
                    QUERY_TIMEZONE_OPEN_PRICE: (e, t) => ["queryTimeZoneOpenPrice", e, t],
                    QUERY_POSITION_HISTORY: (e, t) => ["positionHistory", e, t],
                    QUERY_DELIVERY_PRICE: (e, t) => ["queryDeliveryPrice", n(e), t],
                    QUERY_USER_PERSONAL_CONFIG: e => ["queryUserPersonalConfig", e],
                    QUERY_USER_CREDIT_STATUS: ["queryUserCreditStatus"],
                    QUERY_USER_ARBITRAGE_SUBSCRIBE_STATUS: e => ["queryUserArbitrageSubscribeStatus", e],
                    ASSET_SERVICE_WALLET_BALANCE_V2: e => ["assetServiceWalletBalanceV2", e],
                    QUERY_PORTFOLIO_MARGIN_CONFIG: ["queryPortfolioMarginConfig"],
                    QUERY_UNI_ACCOUNT_INFO: ["queryUniAccountInfo"],
                    QUERY_PORTFOLIO_MARGIN_ACCOUNT_STATUS: ["queryPortfolioMarginAccountStatus"],
                    QUERY_FUTURES_STABLE_ASSETS: ["queryFuturesStableAssets"],
                    QUERY_ASSET_INFO: ["queryAssetInfo"],
                    QUERY_USER_AGENT: ["queryUserAgent"],
                    QUERY_USER_BASE_INFO: ["queryUserBaseInfo"],
                    QUERY_CAN_USE_FUTURE_AGENT_CODE: ["queryCanUseFutureAgentCode"],
                    QUERY_USER_ASSET: ["queryUserAsset"],
                    QUERY_ARBITRAGE_HISTORY: e => ["queryArbitrageHistory", e],
                    QUERY_USER_STRATEGY_POSITION: e => ["queryUserStrategyPosition", n(e)],
                    QUERY_USER_STRATEGY_BALANCE: e => ["queryUserStrategyBalance", n(e)],
                    QUERY_USER_ARBITRAGE_STRATEGY_BALANCE: e => ["queryArbitrageUserStrategyBalance", n(e)],
                    STRATEGY_LEVERAGE: e => ["strategyLeverage", n(e)],
                    QUERY_HISTORY_GRID_V2: (e, t) => ["queryHistoryGrid", n(e), t],
                    QUERY_ALL_STRATEGY_ASSET: ["queryAllStrategyAsset"],
                    STRATEGY_USER_LISTEN_KEY: e => ["queryStrategyUserListenKeys", n(e)],
                    QUERY_STRATEGY_ORDER_TRADE: (e, t) => ["queryStrategyOrderTrade", n(e), t],
                    QUERY_STRATEGY_WALLET_ASSET: e => ["queryStrategyWalletAsset", n(e)],
                    GET_LDUSDT_CONVERSION_RATE: ["getLdusdtConversionRate"],
                    GET_LDUSDT_EARN_BALANCE: ["getLdusdtEarnBalance"],
                    GET_LDUSDT_COMMON_USER_FUTURES_BALANCE: e => ["getLdusdtCommonUserFuturesBalance", e],
                    GET_LDUSDT_PM_USER_FUTURES_BALANCE: (e, t) => ["getLdusdtPMUserFuturesBalance", e, t],
                    QUERY_PM_ASSET_INDEX: ["queryPMAssetIndex"],
                    GET_TICKERS: e => ["getTickers", n(e)],
                    TICKER_MAP: e => ["tickerMap", n(e)],
                    COLLATERAL_RATE: ["collateralRate"],
                    QUERY_OPEN_ORDER_LOSS: ["queryOpenOrderLoss"],
                    QUERY_PORTFOLIO_MARGIN_INFO: ["queryPortfolioMarginInfo"],
                    CM_EXCHANGE_INFO_SYMBOLS: ["cmExchangeInfoSymbols"],
                    FUTURES_REFERRAL_CODE: ["FUTURES_REFERRAL_CODE"],
                    QUERY_TIER_COMMISSION: (e, t, r) => ["queryTierCommission", n(e), t, r],
                    ADJUST_COEF: e => ["ADJUST_COEF", n(e)],
                    GET_OPEN_INTEREST: e => ["getOpenInterest", e],
                    NEWS_LIST: e => ["NEWS_LIST", e],
                    NEWS_LIST_BY_TOKEN: e => ["NEWS_LIST_BY_TOKEN", e],
                    PRODUCT_TICKER_MAP: ["PRODUCT_TICKER_MAP"],
                    GET_RESPONSIBLE_CONFIG: ["get-responsible-config"],
                    TRAILING_COEF: ["TRAILING_COEF"],
                    GET_COMMISION: (e, t) => ["FUTURES_COMMISSION", n(e), t],
                    QUERY_FUT_GRID_TRAILING_RECORD: (e, t) => ["gridFutTrailingRecord", n(e), t],
                    QUERY_ORDER_DETAIL: (e, t) => ["QUERY_ORDER_DETAIL", n(e), t],
                    QUERY_FILLED_ORDER: (e, t) => ["QUERY_FILLED_ORDER", e, t],
                    QUERY_WEB_HOOK_FAILED_ORDER_HISTORY: e => ["QUERY_WEB_HOOK_FAILED_ORDER_HISTORY", e],
                    QUERY_WEB_HOOK_ORDER_HISTORY: e => ["QUERY_WEB_HOOK_ORDER_HISTORY", e],
                    QUERY_WEB_HOOK_OPEN_ORDERS: e => ["QUERY_WEB_HOOK_OPEN_ORDERS", e],
                    QUERY_ORDER_ALERT: ["QUERY_ORDER_ALERT"],
                    QUERY_WEB_HOOK_SIGNAL: e => ["QUERY_WEB_HOOK_SIGNAL", e],
                    QUERY_WEB_HOOK_INFO: () => ["QUERY_WEB_HOOK_INFO"],
                    QUERY_WEB_HOOK_TOKEN: () => ["QUERY_WEB_HOOK_TOKEN"],
                    QUERY_HEADER_COIN_CONFIG: e => ["QUERY_HEADER_COIN_CONFIG", e],
                    COIN_INFO: e => ["COIN_INFO", e],
                    QUERY_COIN_LOGO_LIST: () => ["QUERY_COIN_LOGO_LIST"],
                    QUERY_USER_IP_INFO: ["queryUserIPInfo"],
                    QUERY_LANGUAGE_MAP: ["queryLanguageMap"],
                    QUERY_COMPLIANCE: e => ["queryCompliance", e],
                    USER_COMPLIANCE_CHECK: (e, t, r) => ["userComplianceCheck", e, t, r],
                    QUERY_E_OPTIONS_OPEN_STATUS: ["queryEOptionsOpenStatus"],
                    QUERY_ACCOUNTS_USER_CONFIG: ["queryAccountUserConfig"],
                    QUERY_CURRENCY: ["queryCurrency"],
                    PORTFOLIO_MARGIN_ACCOUNT_CONFIG: e => ["queryPortfolioMarginAccountConfig", e],
                    QUERY_ARBITRAGE_SYMBOLS: ["queryArbitrageSymbols"],
                    QUERY_ARBITRAGE_DETAIL: e => ["queryArbitrageDetail", e],
                    ARBITRAGE_POSITION_LIST: e => ["arbitragePositionList", n(e)],
                    QUERY_OPEN_ARBITRAGE: ["queryOpenArbitrage"],
                    QUERY_ARBITRAGE_OPEN_ORDERS: e => ["queryArbitrageOpenOrders", e],
                    QUERY_ARBITRAGE_ASSET_DETAIL: ["queryArbitrageAssetDetail"],
                    QUERY_ARBITRAGE_COEF: ["queryArbitrageCoef"],
                    QUERY_MARGIN_TIER: ["queryMarginTier"],
                    QUERY_FUNDING_INFO: e => ["queryFundingInfo", n(e)],
                    BNB_DISCOUNT_SETTING: ["BNB_DISCOUNT_SETTING"],
                    QUERY_ARBITRAGE_MAX_WITHDRAW_AMOUNT: e => ["queryArbitrageMaxWithdrawAmount", e],
                    QUERY_ARBITRAGE_FUNDING_FEE: e => ["queryArbitrageFundingFee", e],
                    QUERY_ARBITRAGE_INVESTMENT_HISTORY: e => ["queryArbitrageInvestmentHistory", e],
                    QUERY_ORDER_PRE_CHECK: (e, t) => ["QUERY_ORDER_PRE_CHECK", n(e), t],
                    QUERY_STABLE_ASSETS: ["QUERY_STABLE_ASSET"],
                    QUERY_PM_ACCOUNT_INDICATE: ["QUERY_PM_ACCOUNT_INDICATE"],
                    QUERY_SERVICE_STATUS: e => ["serviceStatus", e],
                    ARBITRAGE_FUNDING_FEE_HISTORY: (e, t, r, i) => ["FUNDING_FEE_HISTORY", n(t), e, r, i],
                    QUERY_BOTS_TOTAL_PNL: ["QUERY_BOTS_TOTAL_PNL"],
                    QUERY_BOTS_TOTAL_PNL_TRANSACTION_FEE: ["QUERY_BOTS_TOTAL_PNL_TRANSACTION_FEE"],
                    QUERY_BOTS_TOTAL_PNL_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_BY_STRATEGY", e],
                    QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY", e],
                    QUERY_BOTS_PNL_TREND: ({
                        startTime: e,
                        endTime: t,
                        recentDays: r
                    }) => ["QUERY_BOTS_TOTAL_PNL", e, t, r],
                    QUERY_MARGIN_CALL: ["QUERY_MARGIN_CALL"],
                    QUERY_TOP_MOVERS: ["QUERY_TOP_MOVERS"],
                    QUERY_CHALLENGE_POPUP_SCENARIO: ["QUERY_CHALLENGE_POPUP_SCENARIO"],
                    QUERY_CHALLENGE_USER_STATUS: ["QUERY_CHALLENGE_USER_STATUS"],
                    QUERY_CHALLENGE_SHOW_ENTRANCE: () => ["QUERY_CHALLENGE_SHOW_ENTRANCE"],
                    QUERY_UM_ASSET_RESIDUAL_DEPOSIT: e => ["QUERY_UM_ASSET_RESIDUAL_DEPOSIT", e],
                    QUERY_TRANSACTION_HISTORY: e => ["QUERY_TRANSACTION_HISTORY", e],
                    QUERY_BFUSD_SOLVENCY_YIELD_STATISTIC: e => ["QUERY_BFUSD_SOLVENCY_YIELD_STATISTIC", e],
                    QUERY_BFUSD_TOTAL_EARNED: () => ["QUERY_BFUSD_TOTAL_EARNED"],
                    QUERY_BFUSD_AGREED: ["QUERY_BFUSD_AGREED"],
                    QUERY_USER_FREE_POSITION_TASK_CONFIG: ["QUERY_USER_FREE_POSITION_TASK_CONFIG"],
                    QUERY_USER_FREE_POSITION_TASK: ["QUERY_USER_FREE_POSITION_TASK"],
                    QUERY_SYMBOL_TAGS: ["QUERY_SYMBOL_TAGS"],
                    QUERY_HISTORY_PTO: e => ["QUERY_HISTORY_PTO", e],
                    QUERY_RUNNING_PTO: ["QUERY_RUNNING_PTO"],
                    GET_ENTITY_TAG: ["GET_ENTITY_TAG"],
                    SEED_ZONE_AGREEMENT: ["seedZoneAgreement"],
                    PM_NEGATIVE_CONVERT_LIST: e => ["PM_NEGATIVE_CONVERT_LIST", e],
                    QUERY_BFUSD_PREORDER_STATUS: ["QUERY_BFUSD_PREORDER_STATUS"],
                    GET_BFUSD_PREORDER_LIST: e => ["GET_BFUSD_PREORDER_LIST", e],
                    GET_BFUSD_MINT_DAILY_POSITION: e => ["GET_BFUSD_MINT_DAILY_POSITION", e],
                    GET_BFUSD_MINT_DAILY_BALANCE: e => ["GET_BFUSD_MINT_DAILY_BALANCE", e],
                    QUERY_USER_POSITION_VOUCHER_LIST: e => ["QUERY_USER_POSITION_VOUCHER_LIST", e],
                    COPY_TRADE_COMMON_CONFIG: ["copyTradeCommonConfig"],
                    QUERY_COPY_TRADE_SUPPORT_SYMBOL: () => ["QUERY_COPY_TRADE_SUPPORT_SYMBOL"]
                }
        },
        YxIV: (e, t, r) => {
            "use strict";
            r.d(t, {
                OE: () => o,
                Qr: () => i
            });
            var n = r("DTvD");
            const i = (0, n.createContext)(void 0),
                o = () => {
                    const e = (0, n.useContext)(i);
                    if (!e) throw new Error("FuturesCoreProvider: Prop getSDK is not available");
                    return e
                }
        },
        "v76/": (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => o,
                z: () => i
            });
            var n = r("DTvD");
            const i = (0, n.createContext)(null),
                o = () => (0, n.useContext)(i)
        },
        cwOt: (e, t, r) => {
            "use strict";
            r.d(t, {
                Gb: () => i,
                OJ: () => s
            });
            var n = r("DTvD");
            const i = (0, n.createContext)({}),
                o = {},
                s = () => "copyTradeType" in (() => {
                    const {
                        useCopyTradingPayload: e = () => o
                    } = (0, n.useContext)(i);
                    return e()
                })()
        },
        iCNu: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => o,
                Q: () => i
            });
            var n = r("DTvD");
            const i = (0, n.createContext)(void 0),
                o = () => {
                    const e = (0, n.useContext)(i);
                    if (!e) throw new Error("SpotCoreProvider: Prop getSDK is not available");
                    return e
                }
        },
        BMee: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => o,
                z: () => i
            });
            var n = r("DTvD");
            const i = (0, n.createContext)(null),
                o = () => (0, n.useContext)(i)
        },
        QWVi: (e, t, r) => {
            "use strict";
            r.d(t, {
                Hj: () => n,
                OL: () => i
            });
            const n = {
                    SPOT_GRID: "Spot_Grid",
                    FUTURES_GRID: "Futures_Grid",
                    UM_FUTURES_GRID: "umTrade",
                    CM_FUTURES_GRID: "cmTrade",
                    REBALANCING_MANUAL: "Rebalancing_bot_Manual",
                    REBALANCING_AI: "Rebalancing_bot_AI",
                    AUTO_INVEST: "earnAutoInvest",
                    TRADING_BOT_ESSENTIAL: "basic",
                    TRADING_BOT_LIST: "trading_bots_list",
                    OTC_ALGO: "otc_trading_algo",
                    SPOT_GRID_TUTORIAL: "spot_grid_tutorial",
                    REBALANCING_TUTORIAL: "rebalancing_bots_tutorial",
                    SPOT_GRID_AI: "spot_grid_AI",
                    SPOT_GRID_POPULAR: "spot_grid_popular",
                    ARBITRAGE_BOT: "arbitrage_bot",
                    SHOW_JP_TC: "jp_bots_TC",
                    JP_BOT_WALLET: "jp_bots_Wallet",
                    OTC_FUTURES_TWAP: "otc_trading_future_twap",
                    OTC_FUTURES_VP: "otc_trading_future_vp",
                    COPY_STRATEGY_TRADING: "copy_trading",
                    NO_RESTRICTION: "no-compliance-rule-matched",
                    "overview-wallet-name-CARD": "overview-wallet-name-CARD",
                    futures_copy_trading_loss_voucher: "futures_copy_trading_loss_voucher"
                },
                i = "STRATEGY_BUSINESS_STATES"
        },
        bt5r: (e, t, r) => {
            "use strict";
            r.d(t, {
                C39: () => f,
                S$s: () => s,
                TPI: () => u,
                VSR: () => p,
                VsL: () => c,
                YxM: () => a,
                b8R: () => l,
                csZ: () => d,
                uxx: () => h
            });
            var n = r("m0k9"),
                i = r("uoy8");
            const {
                isHybrid: o
            } = (0, n.S)(), s = "undefined" === typeof window, u = {
                DEPOSIT_CRYPTO_URL_DEEP: "binance://account/deposit/crypto",
                DEPOSIT_CRYPTO_URL: "/fiat/deposit/EUR",
                CONVERT_CRYPTO_URL: "/convert",
                GRID_SUPPORT: "/support/faq/f4c453bab89648beb722aa26634120c3",
                REBALANCING_BOT_DETAIL_ROUTE: "/trading-bots/spot/rebalancing-bot/detail/%strategyId%",
                REBALANCING_BOT_SUPPORT: "/support/faq/29bbbd2e7fc24085be7a8a7d02779457",
                FUTURES_GRID_DETAIL_ROUTE: "/trading-bots/futures/grid/detail",
                FUT_GRID_AI_PARAM_FAQ: "/support/faq/647b0dba72d145219688b04aa51405fc",
                SHADOW_ACCOUNT_FAQ: "/support/faq/408ab63b852e47748a9554501669bce5",
                SPOT_GRID_FAQ: "/support/faq/d5f441e8ab544a5b98241e00efb3a4ab",
                FUTURES_GRID_FAQ: "/support/faq/f4c453bab89648beb722aa26634120c3",
                WALLET_ASSET_ROUTE: "/my/wallet/account/trading-bots",
                WALLET_ORDER_HISTORY: "/my/orders/trading-bots/orderhistory",
                TRAILING_SUPPORT_FAQ: "/support/faq/7a7bb22420404385991dee3a0930207d",
                TWAP_LEARN_URL: `/${i.FK}/%symbol%`,
                SPOT_GRID_AI_PARAM_FAQ: "/support/faq/76bd4effa3c4456c971a1c6835762742",
                SPOT_GRID_TRAILING_LEARN_MORE_FAQ: "/support/faq/3d987afd7906495cb4d997eccb8515bf",
                SPOT_GRID_PARAM_FAQ: "/support/faq/688ff6ff08734848915de76a07b953dd",
                TRADING_BOT_TERMS: "/support/faq/d5a7e374026f4f19a9c1aa0ae226c3ca",
                FUTURES_TRADE_ROUTE: "/futures/%symbol%",
                ELECTRON_FUTURES_TRADE_ROUTE: "binance://trade/futures",
                ELECTRON_SPOT_TRADE_ROUTE: "binance://trade/spot",
                FUTURES_TRADING_URL: "/futures/BTCUSDT",
                SPOT_TRADING_URL: "/trade/BTCUSDT",
                SPOT_GRID: "/trading-bots/spot/grid/BTCUSDT",
                ELECTRON_SPOT_GRID: "binance://trade/trading-bots/spot/grid/BTCUSDT",
                ELECTRON_FUT_GRID: "binance://trade/trading-bots/futures/grid/BTCUSDT",
                ALGO_TRADING: "/vip-portal/OTC-trading-platform?ref=OTC-Algo",
                REWARD_HUB: "/rewards-hub",
                ARBITRAGE_FAQ_SUPPORT: "/support/faq/trading-bots?c=216&navId=216#280",
                FAQ_TRADING_BOTS_TERMS: "/support/faq/binance-trading-bots-terms-d5a7e374026f4f19a9c1aa0ae226c3ca",
                MAIN_RISK_WARNING: "/risk-warning",
                FUTURES_RESPONSIBLE_TRADING: "/futures/responsible-trading",
                ARBITRAGE_NEXT_FUNDING: "/support/faq/introduction-to-binance-futures-funding-rates-360033525031",
                LOSS_PROTECTION_TERMS: "/support/faq/bb51a1f516c54dd6ab057db6c0dbd6d0",
                SPOT_WALLET_HISTORY_DISTRIBUTION: "/en/my/wallet/history/distribution"
            }, a = o ? "h5" : "web", c = "--", l = Boolean(!1), f = "futures-strategy-ui", h = 600, d = 3, p = "https://app.binance.com/uni-qr"
        },
        krnk: (e, t, r) => {
            "use strict";
            r.d(t, {
                $K: () => a,
                SY: () => c,
                g_: () => o,
                t5: () => s,
                z6: () => u
            });
            r("A4nT");
            var n = r("1Au+");
            const i = e => e ? "CM" : "UM",
                o = {
                    futTradingBotAddableBalance: "FUT_TRADING_BOT_ADDABLE_BALANCE"
                },
                s = {
                    businessComplianceCheck: "BUSINESS_COMPLIANCE_CHECK",
                    accountIpCountry: "ACCOUNT_IP_COUNTRY",
                    landingPageConfig: "LANDING_PAGE_CONFIG",
                    userComplianceStatus: "USER_COMPLIANCE_STATUS",
                    agreement: "STRATEGY_AGREEMENT_STATUS",
                    assetMode: "ASSET_MODE",
                    futuresConfig: "FUTURES_CONFIG",
                    assetIndex: "ASSET_INDEX",
                    brackets: "BRACKETS",
                    leverageList: "LEVERAGE_LIST",
                    QUERY_ASSET_LOGO: ["queryAssetLogo"],
                    strategyRoiChart: (e, t, r) => ["STRATEGY_ROI_CHART", e, t, r],
                    futGridRecommendParams: "FUT_GRID_RECOMMEND_PARAMS",
                    adjustCoef: e => ["ADJUST_COEF", i(e)],
                    topStrategies: e => ["TOP_STRATEGIES", e],
                    futTradingBotAddableBalance: e => [o.futTradingBotAddableBalance, e],
                    futTradingBotRemovableBalance: "FUT_TRADING_BOT_REMOVABLE_BALANCE",
                    futGridRewardTask: "FUT_GRID_REWARD_TASK",
                    domainSetting: "DOMAIN_SETTINGS",
                    strategyUserConfig: "STRATEGY_USER_CONFIG",
                    gridOpenSubOrders: "GRID_OPEN_SUB_ORDERS",
                    futuresBookTicker: "FUTURES_BOOK_TICKER",
                    latestLossProtectionVoucher: "LATEST_LOSS_PROTECTION_VOUCHER",
                    strategyUsingVoucher: "STRATEGY_USING_VOUCHER",
                    topStrategyRecommendQueryParams: "TOP_STRATEGY_RECOMMEND_QUERY_PARAMS",
                    getStrategyVoucherByStrategyId: (e, t) => ["GET_STRATEGY_VOUCHER_BY_STRATEGY_ID", e, t]
                },
                u = {
                    rebalancingBot: ["USER_CONFIG", n.YX.rebalancingBot]
                },
                a = {
                    all: ["queryUserAssetKey"]
                },
                c = {
                    all: "strategyInfo",
                    productLine: e => [c.all, e]
                }
        },
        uoy8: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ax: () => S,
                B2: () => d,
                C$: () => _,
                Di: () => T,
                Ek: () => D,
                FK: () => a,
                Gs: () => E,
                Hu: () => m,
                Kf: () => Q,
                LP: () => L,
                MI: () => Y,
                Mj: () => U,
                Nf: () => p,
                QX: () => M,
                Ql: () => g,
                Qr: () => l,
                VX: () => O,
                W$: () => C,
                WI: () => x,
                Wg: () => N,
                YY: () => R,
                ZG: () => f,
                ZH: () => h,
                aY: () => c,
                bT: () => w,
                cb: () => o,
                d5: () => i,
                eE: () => u,
                fP: () => b,
                gF: () => A,
                iO: () => y,
                n5: () => I,
                pM: () => P,
                rs: () => v,
                t7: () => F,
                tQ: () => G
            });
            var n = r("hbgo");
            const i = "BTCUSDT",
                o = "BTCUSDC",
                s = "trading-bots",
                u = s,
                a = `${s}/futures/twap`,
                c = `${s}/spot/grid`,
                l = `${s}/spot/grid/detail`,
                f = `${s}/futures/grid`,
                h = `${s}/futures/grid/detail`,
                d = `${s}/spot/rebalancing-bot`,
                p = `${s}/spot/rebalancing-bot/detail`,
                y = `${s}/spot/dca-bot`,
                E = `${s}/spot/dca-bot/detail`,
                _ = `${s}/futures/arbitrage`,
                v = "{symbol}",
                g = `/${s}`,
                m = `/${f}/${v}`,
                T = `/futures/${v}?orderType=TWAP`,
                R = `/${_}/${v}`,
                S = `/${l}`,
                b = `/${h}`,
                A = `/${c}/${v}`,
                O = `/${d}/${v}`,
                B = "binance://trade",
                C = `${B}/trading-bots/futures/grid/${v}`,
                D = `${B}/trading-bots/futures/twap/${v}`,
                I = `${B}/trading-bots/futures/arbitrage/${v}`,
                F = `${B}/trading-bots/spot/grid/${v}`,
                U = `${B}/trading-bots/spot/rebalancing-bot/${v}`,
                w = `${B}/trading-bots/spot/dca-bot/${v}`,
                x = `/${y}/${v}`,
                L = "bnc://app.binance.com",
                P = `${L}/trade/strategy?at=spotGrid`,
                N = `${L}/trade/strategy?at=strategyList`,
                Q = `${L}/trade/strategy?at=leaderBoard&subTab=topROI&gridType=futuresGrid`,
                M = {
                    futGrid: "FUT_GRID",
                    futTwap: "FUT_TWAP",
                    spotGrid: "SPOT_GRID",
                    spotGridDetail: "SPOT_GRID_DETAIL",
                    futuresGridDetail: "FUT_GRID_DETAIL",
                    rebalancingBot: "REBALANCING_BOT",
                    rebalancingBotDetail: "REBALANCING_BOT_DETAIL",
                    spotDca: "SPOT_DCA",
                    spotDcaDetail: "SPOT_DCA_DETAIL"
                },
                Y = {
                    STRATEGY_LIST: "strategyList",
                    BOT_MARKET_PLACE: "botMarketPlace",
                    TRENDING_MARKET: "hotCoinLeaderBoard",
                    VOLATILITY: "hotCoinLeaderBoard",
                    FEATURES: "features",
                    STRATEGY_ACADEMY: "strategyAcademy",
                    TUTORIAL: "tutorial",
                    FAQ: "faq"
                },
                G = {
                    spotGrid: n.Sn,
                    futGrid: n.us,
                    rebot: n.$$,
                    auto: n._$
                }
        },
        hbgo: (e, t, r) => {
            "use strict";
            r.d(t, {
                $$: () => o,
                J: () => f,
                Jo: () => c,
                Lw: () => h,
                S8: () => a,
                Sn: () => i,
                _$: () => s,
                sY: () => u,
                us: () => n,
                v0: () => l
            });
            const n = "futuresGrid",
                i = "spotGrid",
                o = "rebalancingBot",
                s = "autoInvest",
                u = "spotDca",
                a = "arbitrage",
                c = {
                    TWAP: "twap",
                    FUTURES_GRID: n,
                    SPOT_GRID: i,
                    REBALANCING_BOT: o,
                    SPOT_DCA: u,
                    SPOT_TWAP: "spotTwap",
                    ARBITRAGE: a
                },
                l = [i, u, o],
                f = {
                    SPOT_GIRD: 1,
                    FUTURES_GRID_UM: 2,
                    FUTURES_GRID_CM: 3
                },
                h = {
                    REBALANCE_BOT: "REBALANCE_BOT",
                    SPOT_GRID: "SPOT_GRID",
                    DELIVERY_GRID: "DELIVERY_GRID",
                    SPOT_DCA: "SPOT_DCA",
                    FUTURE_GRID: "FUTURE_GRID"
                }
        },
        "1Au+": (e, t, r) => {
            "use strict";
            r.d(t, {
                LO: () => s,
                YX: () => i,
                bo: () => o
            });
            var n = r("hbgo");
            const i = {
                    [n.$$]: "REBALANCING_BOT_DISCLAIMER",
                    [n.sY]: "TRADING_BOTS_DISCLAIMER",
                    [n.S8]: "TRADING_BOTS_DISCLAIMER"
                },
                o = "202404",
                s = {
                    [n.sY]: "202304",
                    [n.S8]: "202404"
                }
        },
        "J+48": (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => _,
                v: () => E
            });
            var n = r("DTvD"),
                i = r("RrWx"),
                o = r.n(i),
                s = r("VLTf"),
                u = r.n(s),
                a = r("+K15"),
                c = r("bt5r"),
                l = r("QWVi"),
                f = r("4hgs"),
                h = r("Zfyq"),
                d = r("krnk");
            const p = {},
                y = (e, t) => {
                    const r = e.restriction.keys ? .reduce(((e, t) => ({ ...e,
                        [t]: t
                    })), {});
                    return "function" === typeof t ? .onResponse && t.onResponse(r || p), r
                },
                E = ({
                    currency: e,
                    isUseCache: t = !1
                }) => {
                    const r = c.b8R ? "electron" : "WEB",
                        {
                            restriction: i,
                            isLoading: s,
                            isFetched: E,
                            isError: _
                        } = ((e, t, r) => {
                            const {
                                data: n,
                                isLoading: i,
                                isFetched: o,
                                isError: s
                            } = (0, f.useQuery)(d.t5.businessComplianceCheck, (() => (0, h.K$)({
                                platform: e,
                                currency: t
                            }).then((e => {
                                if (e.success) return y(e.data, r);
                                throw new Error("queryBusinessComplianceCheck failed")
                            }))), {
                                staleTime: 1 / 0
                            });
                            return {
                                restriction: n || p,
                                isLoading: i,
                                isFetched: o,
                                isError: s
                            }
                        })(r, e, {
                            onResponse: e => a.IG.setItem(l.OL, e)
                        }),
                        v = (0, n.useRef)(c.S$s ? {} : a.IG.getItem(l.OL));
                    if (c.S$s) return {
                        restrictedBusinessMap: i,
                        isLoading: !0,
                        isError: !1
                    };
                    if (t && (!E || u()(v.current, i))) try {
                        if (v.current && o()(v.current)) return {
                            restrictedBusinessMap: v.current,
                            isLoading: !1,
                            isError: !1
                        }
                    } catch (g) {}
                    return {
                        restrictedBusinessMap: i,
                        isLoading: s,
                        isError: _
                    }
                },
                _ = ({
                    queryClient: e,
                    currency: t
                }) => (({
                    queryClient: e,
                    platform: t,
                    currency: r
                }) => e.prefetchQuery(d.t5.businessComplianceCheck, (() => (0, h.K$)({
                    platform: t,
                    currency: r
                }).then((e => y(e.data)))), {
                    staleTime: 1 / 0
                }))({
                    queryClient: e,
                    currency: t,
                    platform: c.b8R ? "electron" : "WEB"
                })
        },
        tWDR: (e, t, r) => {
            "use strict";
            r.d(t, {
                Lu: () => u
            });
            var n = r("S+0I"),
                i = r("66mo"),
                o = r.n(i),
                s = r("u++W"),
                u = function() {
                    var e = (0, n._)(o().mark((function e(t) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, s.$s)()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, (0, s.lZ)({
                                        sourceUrl: t.sourceUrl,
                                        version: t.version || "V1",
                                        isHttp: t.isHttp,
                                        getWsToken: t.getWsToken,
                                        getSessionInfo: function(e) {
                                            return t.getSessionInfo().then((function(t) {
                                                return t[e]
                                            }))
                                        },
                                        track: t.track || function(e, t) {
                                            console.log(e + t.toString())
                                        },
                                        clientType: t.clientType
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        CudX: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => n
            });
            var n = function() {
                var e = !1,
                    t = new Set,
                    r = new Set,
                    n = function() {
                        t.forEach((function(e) {
                            e()
                        })), t.clear()
                    },
                    i = function(e) {
                        n(), e && (r.forEach((function(e) {
                            t.add(e())
                        })), r.clear())
                    };
                return {
                    setReady: function(t) {
                        i(e = t)
                    },
                    onReady: function(t) {
                        r.add(t), e && i(e)
                    },
                    clean: function() {
                        r.clear(), n()
                    }
                }
            }
        },
        CqRL: (e, t, r) => {
            "use strict";
            r.d(t, {
                FL: () => l,
                Lx: () => u,
                PD: () => f,
                ZI: () => a,
                tI: () => c
            });
            var n = new Set(["ws_start", "ws_connected", "ws_closed", "ws_error", "get_token", "get_token_error", "privateRequest"]),
                i = new Set(["ws_error", "ws_start", "ws_connected", "ws_closed", "publicRequest"]),
                o = new Set(["ws_start", "ws_connected", "ws_closed", "ws_error", "get_token", "get_token_error", "friendlyRequest"]),
                s = [],
                u = function(e) {
                    s.push({
                        status: e,
                        timeStamp: Date.now()
                    })
                },
                a = function() {
                    return s.filter((function(e) {
                        var t = e.status;
                        return n.has(t)
                    })).slice(-20)
                },
                c = function() {
                    return s.filter((function(e) {
                        var t = e.status;
                        return i.has(t)
                    })).slice(-20)
                },
                l = function() {
                    return s.filter((function(e) {
                        var t = e.status;
                        return o.has(t)
                    })).slice(-20)
                },
                f = function() {
                    return s.slice(-20)
                }
        },
        EzMS: (e, t, r) => {
            "use strict";
            r.d(t, {
                W: () => i,
                j: () => n
            });
            var n = function() {},
                i = function(e) {
                    return Math.pow(2, e)
                }
        },
        "u++W": (e, t, r) => {
            "use strict";
            r.d(t, {
                $s: () => O,
                HL: () => B,
                Lq: () => P,
                OX: () => D,
                P4: () => b,
                UE: () => M,
                Vl: () => Q,
                XK: () => A,
                gf: () => k,
                hT: () => N,
                iq: () => C,
                lZ: () => x,
                yS: () => q
            });
            var n, i, o = r("S+0I"),
                s = r("hrAD"),
                u = r("mguP"),
                a = r("66mo"),
                c = r.n(a),
                l = r("5nld"),
                f = r("8v4f"),
                h = r("jbOn"),
                d = r("EzMS"),
                p = r("CqRL"),
                y = r("CudX"),
                E = f.g.WsReq,
                _ = h.g.WsReq,
                v = f.g.WsMsg,
                g = h.g.WsMsg,
                m = 0,
                T = "",
                R = "V1",
                S = !0,
                b = function() {
                    0
                },
                A = function() {
                    0
                },
                O = function() {
                    return T
                },
                B = function() {
                    return "V2" === R ? _ : E
                },
                C = function() {
                    return "V2" === R ? g : v
                },
                D = function() {
                    return m++
                },
                I = function(e) {
                    return new Promise((function(e) {
                        return e(void 0)
                    }))
                },
                F = function(e, t) {},
                U = "",
                w = "web",
                x = function() {
                    var e = (0, o._)(c().mark((function e(t) {
                        var r, i, o, s, u, a, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.sourceUrl, i = t.version, o = t.getSessionInfo, s = t.track, u = t.isHttp, a = t.clientType, l = t.getWsToken, S = u, T = r, R = i, I = o, F = s, n = l, w = a, e.next = 11, I("bnc-uuid");
                                case 11:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 14;
                                        break
                                    }
                                    e.t0 = "";
                                case 14:
                                    U = e.t0;
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                L = d.j,
                P = function(e) {
                    L = e
                },
                N = function() {
                    return I
                },
                Q = function() {
                    return L
                },
                M = function() {
                    return function(e, t) {
                        var r = [];
                        switch (t) {
                            case "private":
                                r = (0, p.ZI)();
                                break;
                            case "public":
                                r = (0, p.tI)();
                                break;
                            case "friendly":
                                r = (0, p.FL)();
                                break;
                            default:
                                r = (0, p.PD)()
                        }
                        var n = r.reverse(),
                            o = function(e) {
                                return e >= 10 ? e : "0".concat(e)
                            },
                            a = new Date,
                            c = "".concat(a.getFullYear(), "-").concat(o(a.getMonth() + 1), "-").concat(o(a.getDate()), " ").concat(o(a.getHours()), ":").concat(o(a.getMinutes()), ":").concat(o(a.getSeconds()));
                        if (n.length) {
                            for (var l = (0, u._)(n, 1)[0], f = l.status, h = 1; h < n.length; h++) f += " <-".concat(n[h - 1].timeStamp - n[h].timeStamp, "- ").concat(n[h].status);
                            F("ws_http_sdk", (0, s._)({
                                ws_time: c,
                                uuid: U,
                                clientType: w,
                                isHttp: S.toString(),
                                status: l.status,
                                ws_token: "string" === typeof i ? i.slice(-16) : "undefined",
                                duration: 1 === n.length ? 0 : n[0].timeStamp - n[1].timeStamp,
                                statuses: f,
                                ws_sourceUrl: T
                            }, e))
                        } else F("ws_http_sdk", (0, s._)({
                            ws_time: c,
                            uuid: U,
                            clientType: w,
                            ws_token: "string" === typeof i ? i.slice(-16) : "undefined",
                            isHttp: S.toString(),
                            ws_sourceUrl: T
                        }, e))
                    }
                },
                Y = (0, y.H)(),
                G = Y.setReady,
                k = (Y.onReady, function() {
                    var e = (0, o._)(c().mark((function e() {
                        var t, r, o, s;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, N()("cr00");
                                case 2:
                                    if (t = e.sent, G(!1), !t) {
                                        e.next = 10;
                                        break
                                    }
                                    return (0, p.Lx)("get_token"), r = M(), o = Date.now(), s = function(e, t) {
                                        return Math.min(Math.floor(e / 1e3), t)
                                    }, e.abrupt("return", n ? n() : (0, l.Jt)("/bapi/composite/v1/private/market/ws-token", {
                                        enableErrorMsgIntercept: !1
                                    }).then((function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return null === (i = (null === e || void 0 === e ? void 0 : e.data) || null) && ((0, p.Lx)("get_token_value_invalid"), M()({
                                            ws_tokenData: JSON.stringify(e)
                                        })), G(null === i), M()({
                                            ws_token_time: s(Date.now() - o, 10)
                                        }), i
                                    })).catch((function(e) {
                                        return G(!0), (0, p.Lx)("get_token_error"), r({
                                            error: JSON.stringify(e.message)
                                        }), null
                                    })));
                                case 10:
                                    return e.abrupt("return", void 0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                q = function() {
                    return w
                }
        },
        a1X9: e => {
            "use strict";
            e.exports = function(e, t) {
                var r = new Array(arguments.length - 1),
                    n = 0,
                    i = 2,
                    o = !0;
                for (; i < arguments.length;) r[n++] = arguments[i++];
                return new Promise((function(i, s) {
                    r[n] = function(e) {
                        if (o)
                            if (o = !1, e) s(e);
                            else {
                                for (var t = new Array(arguments.length - 1), r = 0; r < t.length;) t[r++] = arguments[r];
                                i.apply(null, t)
                            }
                    };
                    try {
                        e.apply(t || null, r)
                    } catch (u) {
                        o && (o = !1, s(u))
                    }
                }))
            }
        },
        kkqJ: (e, t) => {
            "use strict";
            var r = t;
            r.length = function(e) {
                var t = e.length;
                if (!t) return 0;
                for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++r;
                return Math.ceil(3 * e.length) / 4 - r
            };
            for (var n = new Array(64), i = new Array(123), o = 0; o < 64;) i[n[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
            r.encode = function(e, t, r) {
                for (var i, o = null, s = [], u = 0, a = 0; t < r;) {
                    var c = e[t++];
                    switch (a) {
                        case 0:
                            s[u++] = n[c >> 2], i = (3 & c) << 4, a = 1;
                            break;
                        case 1:
                            s[u++] = n[i | c >> 4], i = (15 & c) << 2, a = 2;
                            break;
                        case 2:
                            s[u++] = n[i | c >> 6], s[u++] = n[63 & c], a = 0
                    }
                    u > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), u = 0)
                }
                return a && (s[u++] = n[i], s[u++] = 61, 1 === a && (s[u++] = 61)), o ? (u && o.push(String.fromCharCode.apply(String, s.slice(0, u))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, u))
            };
            var s = "invalid encoding";
            r.decode = function(e, t, r) {
                for (var n, o = r, u = 0, a = 0; a < e.length;) {
                    var c = e.charCodeAt(a++);
                    if (61 === c && u > 1) break;
                    if (void 0 === (c = i[c])) throw Error(s);
                    switch (u) {
                        case 0:
                            n = c, u = 1;
                            break;
                        case 1:
                            t[r++] = n << 2 | (48 & c) >> 4, n = c, u = 2;
                            break;
                        case 2:
                            t[r++] = (15 & n) << 4 | (60 & c) >> 2, n = c, u = 3;
                            break;
                        case 3:
                            t[r++] = (3 & n) << 6 | c, u = 0
                    }
                }
                if (1 === u) throw Error(s);
                return r - o
            }, r.test = function(e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
            }
        },
        CAcF: e => {
            "use strict";

            function t() {
                this._listeners = {}
            }
            e.exports = t, t.prototype.on = function(e, t, r) {
                return (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: r || this
                }), this
            }, t.prototype.off = function(e, t) {
                if (void 0 === e) this._listeners = {};
                else if (void 0 === t) this._listeners[e] = [];
                else
                    for (var r = this._listeners[e], n = 0; n < r.length;) r[n].fn === t ? r.splice(n, 1) : ++n;
                return this
            }, t.prototype.emit = function(e) {
                var t = this._listeners[e];
                if (t) {
                    for (var r = [], n = 1; n < arguments.length;) r.push(arguments[n++]);
                    for (n = 0; n < t.length;) t[n].fn.apply(t[n++].ctx, r)
                }
                return this
            }
        },
        I8D1: e => {
            "use strict";

            function t(e) {
                return "undefined" !== typeof Float32Array ? function() {
                    var t = new Float32Array([-0]),
                        r = new Uint8Array(t.buffer),
                        n = 128 === r[3];

                    function i(e, n, i) {
                        t[0] = e, n[i] = r[0], n[i + 1] = r[1], n[i + 2] = r[2], n[i + 3] = r[3]
                    }

                    function o(e, n, i) {
                        t[0] = e, n[i] = r[3], n[i + 1] = r[2], n[i + 2] = r[1], n[i + 3] = r[0]
                    }

                    function s(e, n) {
                        return r[0] = e[n], r[1] = e[n + 1], r[2] = e[n + 2], r[3] = e[n + 3], t[0]
                    }

                    function u(e, n) {
                        return r[3] = e[n], r[2] = e[n + 1], r[1] = e[n + 2], r[0] = e[n + 3], t[0]
                    }
                    e.writeFloatLE = n ? i : o, e.writeFloatBE = n ? o : i, e.readFloatLE = n ? s : u, e.readFloatBE = n ? u : s
                }() : function() {
                    function t(e, t, r, n) {
                        var i = t < 0 ? 1 : 0;
                        if (i && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, r, n);
                        else if (isNaN(t)) e(2143289344, r, n);
                        else if (t > 34028234663852886e22) e((i << 31 | 2139095040) >>> 0, r, n);
                        else if (t < 11754943508222875e-54) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, r, n);
                        else {
                            var o = Math.floor(Math.log(t) / Math.LN2);
                            e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, r, n)
                        }
                    }

                    function s(e, t, r) {
                        var n = e(t, r),
                            i = 2 * (n >> 31) + 1,
                            o = n >>> 23 & 255,
                            s = 8388607 & n;
                        return 255 === o ? s ? NaN : i * (1 / 0) : 0 === o ? 1401298464324817e-60 * i * s : i * Math.pow(2, o - 150) * (s + 8388608)
                    }
                    e.writeFloatLE = t.bind(null, r), e.writeFloatBE = t.bind(null, n), e.readFloatLE = s.bind(null, i), e.readFloatBE = s.bind(null, o)
                }(), "undefined" !== typeof Float64Array ? function() {
                    var t = new Float64Array([-0]),
                        r = new Uint8Array(t.buffer),
                        n = 128 === r[7];

                    function i(e, n, i) {
                        t[0] = e, n[i] = r[0], n[i + 1] = r[1], n[i + 2] = r[2], n[i + 3] = r[3], n[i + 4] = r[4], n[i + 5] = r[5], n[i + 6] = r[6], n[i + 7] = r[7]
                    }

                    function o(e, n, i) {
                        t[0] = e, n[i] = r[7], n[i + 1] = r[6], n[i + 2] = r[5], n[i + 3] = r[4], n[i + 4] = r[3], n[i + 5] = r[2], n[i + 6] = r[1], n[i + 7] = r[0]
                    }

                    function s(e, n) {
                        return r[0] = e[n], r[1] = e[n + 1], r[2] = e[n + 2], r[3] = e[n + 3], r[4] = e[n + 4], r[5] = e[n + 5], r[6] = e[n + 6], r[7] = e[n + 7], t[0]
                    }

                    function u(e, n) {
                        return r[7] = e[n], r[6] = e[n + 1], r[5] = e[n + 2], r[4] = e[n + 3], r[3] = e[n + 4], r[2] = e[n + 5], r[1] = e[n + 6], r[0] = e[n + 7], t[0]
                    }
                    e.writeDoubleLE = n ? i : o, e.writeDoubleBE = n ? o : i, e.readDoubleLE = n ? s : u, e.readDoubleBE = n ? u : s
                }() : function() {
                    function t(e, t, r, n, i, o) {
                        var s = n < 0 ? 1 : 0;
                        if (s && (n = -n), 0 === n) e(0, i, o + t), e(1 / n > 0 ? 0 : 2147483648, i, o + r);
                        else if (isNaN(n)) e(0, i, o + t), e(2146959360, i, o + r);
                        else if (n > 17976931348623157e292) e(0, i, o + t), e((s << 31 | 2146435072) >>> 0, i, o + r);
                        else {
                            var u;
                            if (n < 22250738585072014e-324) e((u = n / 5e-324) >>> 0, i, o + t), e((s << 31 | u / 4294967296) >>> 0, i, o + r);
                            else {
                                var a = Math.floor(Math.log(n) / Math.LN2);
                                1024 === a && (a = 1023), e(4503599627370496 * (u = n * Math.pow(2, -a)) >>> 0, i, o + t), e((s << 31 | a + 1023 << 20 | 1048576 * u & 1048575) >>> 0, i, o + r)
                            }
                        }
                    }

                    function s(e, t, r, n, i) {
                        var o = e(n, i + t),
                            s = e(n, i + r),
                            u = 2 * (s >> 31) + 1,
                            a = s >>> 20 & 2047,
                            c = 4294967296 * (1048575 & s) + o;
                        return 2047 === a ? c ? NaN : u * (1 / 0) : 0 === a ? 5e-324 * u * c : u * Math.pow(2, a - 1075) * (c + 4503599627370496)
                    }
                    e.writeDoubleLE = t.bind(null, r, 0, 4), e.writeDoubleBE = t.bind(null, n, 4, 0), e.readDoubleLE = s.bind(null, i, 0, 4), e.readDoubleBE = s.bind(null, o, 4, 0)
                }(), e
            }

            function r(e, t, r) {
                t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24
            }

            function n(e, t, r) {
                t[r] = e >>> 24, t[r + 1] = e >>> 16 & 255, t[r + 2] = e >>> 8 & 255, t[r + 3] = 255 & e
            }

            function i(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            }

            function o(e, t) {
                return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }
            e.exports = t(t)
        },
        mpzN: module => {
            "use strict";

            function inquire(moduleName) {
                try {
                    var mod = eval("quire".replace(/^/, "re"))(moduleName);
                    if (mod && (mod.length || Object.keys(mod).length)) return mod
                } catch (e) {}
                return null
            }
            module.exports = inquire
        },
        FmKl: e => {
            "use strict";
            e.exports = function(e, t, r) {
                var n = r || 8192,
                    i = n >>> 1,
                    o = null,
                    s = n;
                return function(r) {
                    if (r < 1 || r > i) return e(r);
                    s + r > n && (o = e(n), s = 0);
                    var u = t.call(o, s, s += r);
                    return 7 & s && (s = 1 + (7 | s)), u
                }
            }
        },
        gA9B: (e, t) => {
            "use strict";
            var r = t;
            r.length = function(e) {
                for (var t = 0, r = 0, n = 0; n < e.length; ++n)(r = e.charCodeAt(n)) < 128 ? t += 1 : r < 2048 ? t += 2 : 55296 === (64512 & r) && 56320 === (64512 & e.charCodeAt(n + 1)) ? (++n, t += 4) : t += 3;
                return t
            }, r.read = function(e, t, r) {
                if (r - t < 1) return "";
                for (var n, i = null, o = [], s = 0; t < r;)(n = e[t++]) < 128 ? o[s++] = n : n > 191 && n < 224 ? o[s++] = (31 & n) << 6 | 63 & e[t++] : n > 239 && n < 365 ? (n = ((7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[s++] = 55296 + (n >> 10), o[s++] = 56320 + (1023 & n)) : o[s++] = (15 & n) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), s = 0);
                return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
            }, r.write = function(e, t, r) {
                for (var n, i, o = r, s = 0; s < e.length; ++s)(n = e.charCodeAt(s)) < 128 ? t[r++] = n : n < 2048 ? (t[r++] = n >> 6 | 192, t[r++] = 63 & n | 128) : 55296 === (64512 & n) && 56320 === (64512 & (i = e.charCodeAt(s + 1))) ? (n = 65536 + ((1023 & n) << 10) + (1023 & i), ++s, t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128, t[r++] = n >> 6 & 63 | 128, t[r++] = 63 & n | 128) : (t[r++] = n >> 12 | 224, t[r++] = n >> 6 & 63 | 128, t[r++] = 63 & n | 128);
                return r - o
            }
        },
        "R/bV": (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => i
            });
            var n = r("DTvD"),
                i = (0, n.createContext)({
                    ssrSize: "web",
                    isSSRedPage: !0
                })
        },
        Gii1: (e, t, r) => {
            "use strict";
            r.d(t, {
                Zx: () => _,
                wA: () => u,
                ud: () => i.ud,
                nH: () => n.nH,
                Wi: () => i.Wi,
                vz: () => n.vz,
                Qs: () => o.Q,
                HH: () => i.XY,
                X_: () => i.X_,
                I7: () => c.I,
                Py: () => n.Py
            });
            var n = r("TajZ"),
                i = r("WLZf"),
                o = r("GeCL"),
                s = r("MD8j"),
                u = function() {
                    return (0, s.wA)()
                },
                a = r("DTvD");
            var c = r("I/8y"),
                l = r("J+48"),
                f = r("QWVi");
            const h = "display",
                d = "visibility",
                p = ({
                    type: e,
                    complianceKey: t
                }) => {
                    if (!t) return "";
                    switch (e) {
                        case h:
                            return `\n           .${t}-hit-hidden { display: none; } \n           .${t}-hit-block { display: block; }\n           .${t}-hit-inline { display: inline; }\n         `;
                        case d:
                            return `\n           .${t}-hit-invisible { visibility: hidden; }\n           .${t}-hit-visible { visibility: visible; }\n         `;
                        default:
                            return ""
                    }
                };
            const y = ({
                    complianceRestrictList: e = []
                }) => ({
                    cssRules: e.reduce(((e, t) => {
                        const r = p({
                            type: h,
                            complianceKey: t
                        });
                        return t && Object.values(f.Hj).includes(t) && (e += r), e
                    }), "") || "",
                    id: "compliance_css_display"
                }),
                E = ({
                    complianceRestrictList: e = []
                }) => ({
                    cssRules: e.reduce(((e, t) => {
                        const r = p({
                            type: d,
                            complianceKey: t
                        });
                        return t && Object.values(f.Hj).includes(t) && (e += r), e
                    }), "") || "",
                    id: "compliance_css_visibility"
                });
            var _ = function() {
                var e = (0, c.I)(),
                    t = (0, l.v)({
                        currency: e,
                        isUseCache: !0
                    }),
                    r = t.restrictedBusinessMap,
                    n = t.isLoading;
                (0, a.useEffect)((function() {
                    r && !n && [y({
                        complianceRestrictList: Object.values(r)
                    }), E({
                        complianceRestrictList: Object.values(r)
                    })].forEach((function(e) {
                        var t = e.id,
                            r = e.cssRules;
                        if (t) {
                            var n = document.getElementById(t);
                            n && (n.innerHTML = r || "")
                        }
                    }))
                }), [r, n])
            }
        },
        Yh6a: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => o,
                y: () => s
            });
            var n = r("J02F"),
                i = r("hjFp"),
                o = Boolean(window.navigator.userAgent && /BNC\/[\d\.]+/i.test(window.navigator.userAgent) ? window.navigator.userAgent.match(/BNC\/[\d\.]+/i)[0].slice(4) : ""),
                s = (0, n.vt)((0, n.Q)(i))
        },
        "I/8y": (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => i
            });
            var n = r("HS2I"),
                i = function() {
                    return (0, n.useCurrency)().currency
                }
        },
        WLZf: (e, t, r) => {
            "use strict";
            r.d(t, {
                CU: () => c,
                Wi: () => d,
                XY: () => h,
                X_: () => l,
                ud: () => f
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("KrVi"),
                s = r("DTvD"),
                u = r("ipKi"),
                a = function(e, t) {
                    var r = (0, u.B)(t),
                        n = r.t,
                        i = r.i18n,
                        o = (0, s.useCallback)((function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = [e, t].filter((function(e) {
                                    return e
                                })).join("-");
                            return n(i, r).trim() || r.defaultValue
                        }), [n, e]);
                    return {
                        i18n: i,
                        t: n,
                        getI18n: o
                    }
                },
                c = function() {
                    return a("trd", "trade-ui")
                },
                l = function() {
                    return a("", "strategy-widget")
                },
                f = function() {
                    var e = a("futures-trade", "futures-ui");
                    return (0, i._)((0, n._)({}, e), {
                        getFutI18n: e.getI18n
                    })
                },
                h = function() {
                    return function(e) {
                        var t = (0, u.B)(e),
                            r = t.t,
                            a = (0, o._)(t, ["t"]),
                            c = (0, s.useCallback)((function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    i = e.find((function(e) {
                                        return r("".concat(e, ":").concat(t)) !== t
                                    }));
                                return i ? r("".concat(i, ":").concat(t), n).trim() : (null === n || void 0 === n ? void 0 : n.defaultValue) || t
                            }), [r, e]);
                        return (0, i._)((0, n._)({}, a), {
                            t: c,
                            getI18n: c
                        })
                    }(["landing-strategy-ui", "futures-strategy-ui"])
                },
                d = function() {
                    return a("", "landing-strategy-ui")
                }
        },
        GeCL: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => o
            });
            var n = r("gYIm"),
                i = r("S9gL");

            function o() {
                var e = n.S$ ? {
                    deviceWidth: 1600
                } : void 0;
                return {
                    isSmallMobile: (0, i.useMediaQuery)({
                        query: "screen and (max-width: 375px)"
                    }, e),
                    isMobile: (0, i.useMediaQuery)({
                        query: "screen and (max-width: 767px)"
                    }, e),
                    isNotPc: (0, i.useMediaQuery)({
                        query: "screen and (max-width: 1023px)"
                    }, e),
                    isTablet: (0, i.useMediaQuery)({
                        query: "screen and (min-width: 768px) and (max-width: 1023px)"
                    }, e),
                    isLeastWebSize: (0, i.useMediaQuery)({
                        query: "screen and (min-width: 1024px)"
                    }, e),
                    is13Desk: (0, i.useMediaQuery)({
                        query: "screen and (max-width: 1439px)"
                    }, e)
                }
            }
        },
        kI1i: (e, t, r) => {
            "use strict";
            r.d(t, {
                DP: () => v,
                GZ: () => R,
                QE: () => g,
                Sg: () => m,
                by: () => _,
                c$: () => S,
                wD: () => T
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                s = r("DTvD"),
                u = r("MD8j"),
                a = r("Hf/4"),
                c = r("VLTf"),
                l = r.n(c),
                f = r("XOJJ"),
                h = r("HS2I"),
                d = r("QL2w"),
                p = r("4Oak"),
                y = r("Yh6a"),
                E = function() {
                    return "light" === (0, h.useTheme)().theme
                },
                _ = function() {
                    return (0, u.d4)(d._)
                },
                v = function() {
                    var e = E(),
                        t = (0, h.useTheme)(),
                        r = t.toggleTheme,
                        n = t.theme;
                    return (0, s.useMemo)((function() {
                        return {
                            isLight: e,
                            toggleTheme: r,
                            theme: n
                        }
                    }), [e, n, r])
                },
                g = function() {
                    return E() ? "light" : "dark"
                },
                m = function() {
                    return (0, s.useContext)(f.IT)
                },
                T = function() {
                    ! function(e) {
                        var t = (0, s.useContext)(f.fY),
                            r = e.isLight,
                            i = e.color,
                            u = void 0 === i ? "fresh" : i,
                            c = e.isRUGD,
                            h = void 0 !== c && c,
                            d = {
                                isLight: r,
                                color: u,
                                isRUGD: h
                            },
                            y = (0, a.A)(d),
                            E = y && !l()(d, y);
                        (0, s.useEffect)((function() {
                            (0, n._)(o().mark((function e() {
                                var n;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!E) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, (0, p.Y3)(!!r, u, h);
                                        case 3:
                                            n = e.sent, t(n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }), [t, u, r, h, E])
                    }({
                        isLight: E(),
                        color: (0, u.d4)(d._),
                        isRUGD: (0, u.d4)(d.K)
                    })
                },
                R = function(e) {
                    var t = (0, s.useRef)(!1),
                        r = (0, h.useTheme)(),
                        n = r.setTheme,
                        i = r.theme;
                    t.current || (y.l && i !== e && n(e), t.current = !0)
                },
                S = function() {
                    var e = _(),
                        t = (0, u.d4)(d.K),
                        r = E();
                    return (0, s.useCallback)((function() {
                        var n = !r;
                        (0, p.Y3)(n, e, t)
                    }), [e, t, r])
                }
        },
        TajZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                nH: () => a,
                vz: () => u,
                Py: () => c
            });
            var n = r("MD8j"),
                i = function(e) {
                    return e.userCenter.loginStatus
                },
                o = function(e) {
                    return e.userCenter.loginStatus.isLoggedIn
                },
                s = function(e) {
                    return e.userCenter.userInfo
                },
                u = function() {
                    return (0, n.d4)(i)
                },
                a = function() {
                    return (0, n.d4)(o)
                },
                c = function() {
                    return (0, n.d4)(s)
                }
        },
        QL2w: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => i,
                _: () => n
            });
            var n = function(e) {
                    return e.setting.color
                },
                i = function(e) {
                    return e.setting.isRedUpGreenDown
                }
        },
        "570F": (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => Ft
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                s = r("ypu0"),
                u = r("G4ls"),
                a = r("aooZ"),
                c = r("XxhU"),
                l = r("hOz3"),
                f = r("1CC6"),
                h = r("cwOt"),
                d = r("YxIV"),
                p = r("v76/"),
                y = r("21Yo");
            const E = (0, i.memo)((({
                getSDK: e,
                isLoggedIn: t,
                userInfo: r,
                children: n,
                useIsPM2: s = () => !1,
                useCopyTradingPayload: u = () => ({})
            }) => {
                const a = (0, i.useMemo)((() => ({
                    useIsPM2: s,
                    useCopyTradingPayload: u
                })), [s, u]);
                return o().createElement(d.Qr.Provider, {
                    value: e
                }, o().createElement(p.z.Provider, {
                    value: t
                }, o().createElement(y.tY.Provider, {
                    value: r
                }, o().createElement(h.Gb.Provider, {
                    value: a
                }, n))))
            }));
            E.displayName = "FuturesCoreProvider";
            var _ = r("iCNu"),
                v = r("BMee");
            const g = (0, i.memo)((({
                getSDK: e,
                isLoggedIn: t,
                children: r
            }) => (0, n.jsx)(_.Q.Provider, {
                value: e,
                children: (0, n.jsx)(v.z.Provider, {
                    value: t,
                    children: r
                })
            })));
            g.displayName = "SpotCoreProvider";
            var m = r("tWDR"),
                T = {
                    a: {
                        a: {
                            o: {
                                "-": !0
                            }
                        },
                        b: {
                            h: {
                                "-": !0
                            },
                            v: {
                                "-": !0
                            }
                        },
                        c: {
                            m: {
                                "-": !0
                            },
                            q: {
                                "-": !0
                            },
                            w: {
                                "-": !0
                            },
                            x: {
                                "-": !0
                            },
                            y: {
                                "-": !0
                            }
                        },
                        d: {
                            f: {
                                "-": !0
                            },
                            s: {
                                "-": !0
                            }
                        },
                        e: {
                            b: {
                                "-": !0
                            },
                            c: {
                                "-": !0
                            }
                        },
                        f: {
                            b: {
                                "-": !0
                            }
                        },
                        j: {
                            p: {
                                "-": !0
                            }
                        },
                        p: {
                            c: {
                                "-": !0
                            },
                            d: {
                                "-": !0
                            }
                        },
                        r: {
                            "-": !0,
                            b: {
                                "-": !0
                            },
                            q: {
                                "-": !0
                            },
                            s: {
                                "-": !0
                            },
                            y: {
                                "-": !0
                            },
                            z: {
                                "-": !0
                            }
                        },
                        u: {
                            z: {
                                "-": !0
                            }
                        },
                        v: {
                            l: {
                                "-": !0
                            }
                        },
                        y: {
                            h: {
                                "-": !0
                            },
                            l: {
                                "-": !0
                            },
                            n: {
                                "-": !0
                            },
                            p: {
                                "-": !0
                            }
                        }
                    },
                    b: {
                        b: {
                            z: {
                                "-": !0
                            }
                        }
                    },
                    d: {
                        v: {
                            "-": !0
                        }
                    },
                    f: {
                        a: {
                            "-": !0
                        }
                    },
                    h: {
                        b: {
                            o: {
                                "-": !0
                            }
                        },
                        e: {
                            "-": !0
                        }
                    },
                    i: {
                        w: {
                            "-": !0
                        }
                    },
                    j: {
                        i: {
                            "-": !0
                        },
                        p: {
                            r: {
                                "-": !0
                            }
                        }
                    },
                    m: {
                        e: {
                            n: {
                                "-": !0
                            }
                        }
                    },
                    p: {
                        b: {
                            t: {
                                "-": !0
                            },
                            u: {
                                "-": !0
                            }
                        },
                        e: {
                            o: {
                                "-": !0
                            },
                            s: {
                                "-": !0
                            }
                        },
                        g: {
                            a: {
                                "-": !0
                            }
                        },
                        r: {
                            d: {
                                "-": !0
                            },
                            p: {
                                "-": !0
                            },
                            s: {
                                "-": !0
                            }
                        },
                        s: {
                            "-": !0,
                            t: {
                                "-": !0
                            }
                        }
                    },
                    s: {
                        a: {
                            m: {
                                "-": !0
                            }
                        },
                        h: {
                            u: {
                                "-": !0
                            }
                        },
                        q: {
                            r: {
                                "-": !0
                            }
                        },
                        s: {
                            h: {
                                "-": !0
                            }
                        }
                    },
                    u: {
                        g: {
                            "-": !0
                        },
                        r: {
                            "-": !0
                        }
                    },
                    x: {
                        a: {
                            a: {
                                "-": !0
                            }
                        },
                        m: {
                            n: {
                                "-": !0
                            }
                        }
                    },
                    y: {
                        d: {
                            d: {
                                "-": !0
                            },
                            s: {
                                "-": !0
                            }
                        },
                        h: {
                            d: {
                                "-": !0
                            }
                        },
                        i: {
                            "-": !0,
                            h: {
                                "-": !0
                            }
                        },
                        u: {
                            d: {
                                "-": !0
                            }
                        }
                    }
                },
                R = function(e) {
                    if ("string" !== typeof e) return "ltr";
                    e += "-";
                    for (var t = T, r = 0; r < e.length; r++) {
                        if (!0 === (t = t[e.charAt(r)]) || void 0 === t) break
                    }
                    return !0 === t ? "rtl" : "ltr"
                },
                S = r("H8rm"),
                b = r("iKFe"),
                A = r("P/tn"),
                O = r("b6CO"),
                B = r("wIZF"),
                C = "#FFFFFF",
                D = "#FAFAFA",
                I = "#F5F5F5",
                F = "#EAECEF",
                U = "#B7BDC6",
                w = "#929AA5",
                x = "#848E9C",
                L = "#707A8A",
                P = "#5E6673",
                N = "#474D57",
                Q = "#2B3139",
                M = "#1E2329",
                Y = "#202630",
                G = "#1E2026",
                k = "#181A20",
                q = "#191A1F",
                H = "#0B0E11",
                j = "#FCD535",
                $ = "#F0B90B",
                K = "#C99400",
                W = "#A37200",
                z = "#8D5F02",
                V = "#6A4403",
                Z = "#2D2A20",
                X = "#E6FFF1",
                J = "#32D993",
                ee = "#0ECB81",
                te = "#2EBD85",
                re = "#102821",
                ne = "#FEF1F2",
                ie = "#FF707E",
                oe = "#F6465D",
                se = "#E33B54",
                ue = "#35141D",
                ae = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)",
                ce = "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                le = {
                    BasicBg: C,
                    SecondaryBg: D,
                    Input: I,
                    InputLine: "#D8DCE1",
                    CardBg: C,
                    Vessel: D,
                    Line: F,
                    DisableBtn: F,
                    DisabledText: U,
                    DisableText: U,
                    TertiaryText: L,
                    SecondaryText: N,
                    PrimaryText: Y,
                    RedGreenBgText: C,
                    EmphasizeText: "#FF693D",
                    TextOnGray: F,
                    TextOnYellow: Y,
                    IconNormal: w,
                    LiteBg1: C,
                    LiteBg2: D,
                    BtnBg: j,
                    PrimaryYellow: $,
                    TextLink: K,
                    TradeBg: I,
                    TextToast: z,
                    DepthSellBg: ne,
                    SellHover: ie,
                    Sell: oe,
                    TextSell: se,
                    DepthBuyBg: X,
                    BuyHover: J,
                    Buy: te,
                    TextBuy: te,
                    Error: se,
                    SuccessBg: X,
                    Success: te,
                    TagBg: F,
                    Grid: F,
                    Placeholder: U,
                    ToastBg: L,
                    TwoColorIcon: N,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                fe = {
                    DepthBuyBg: ne,
                    BuyHover: ie,
                    Buy: oe,
                    TextBuy: se,
                    DepthSellBg: X,
                    SellHover: J,
                    Sell: te,
                    TextSell: te
                },
                he = {
                    BasicBg: k,
                    SecondaryBg: H,
                    Input: Q,
                    InputLine: N,
                    CardBg: M,
                    Vessel: M,
                    Line: Q,
                    DisableBtn: Q,
                    DisabledText: P,
                    DisableText: P,
                    TertiaryText: x,
                    SecondaryText: U,
                    PrimaryText: F,
                    RedGreenBgText: C,
                    EmphasizeText: "#FF693D",
                    TextOnGray: F,
                    TextOnYellow: Y,
                    IconNormal: x,
                    LiteBg1: Y,
                    LiteBg2: q,
                    BtnBg: j,
                    PrimaryYellow: $,
                    TextLink: $,
                    TradeBg: H,
                    TextToast: W,
                    DepthSellBg: ue,
                    SellHover: ie,
                    Sell: oe,
                    TextSell: oe,
                    DepthBuyBg: re,
                    BuyHover: J,
                    Buy: te,
                    TextBuy: te,
                    Error: oe,
                    SuccessBg: re,
                    Success: te,
                    TagBg: N,
                    Grid: Q,
                    Placeholder: N,
                    ToastBg: L,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                de = {
                    DepthBuyBg: ue,
                    BuyHover: ie,
                    Buy: oe,
                    TextBuy: oe,
                    DepthSellBg: re,
                    SellHover: J,
                    Sell: te,
                    TextSell: te
                },
                pe = "#FFFFFF",
                ye = "#FAFAFA",
                Ee = "#F5F5F5",
                _e = "#EAECEF",
                ve = "#D8DCE1",
                ge = "#B7BDC6",
                me = "#848E9C",
                Te = "#707A8A",
                Re = "#434C5A",
                Se = "#333B47",
                be = "#29313D",
                Ae = "#202630",
                Oe = "#FCD535",
                Be = "#F0B90B",
                Ce = "#E6FFF1",
                De = "#2EBD85",
                Ie = "#102821",
                Fe = "#FEF1F2",
                Ue = "#F6465D",
                we = "#35141D",
                xe = {
                    BasicBg: pe,
                    SecondaryBg: ye,
                    Input: Ee,
                    InputLine: ve,
                    CardBg: pe,
                    TagBg: _e,
                    Line: _e,
                    DisableBtn: ve,
                    Grid: _e,
                    DisabledText: ge,
                    DisableText: ge,
                    Placeholder: ge,
                    TertiaryText: ge,
                    SecondaryText: me,
                    PrimaryText: Ae,
                    RedGreenBgText: pe,
                    EmphasizeText: "#FF693D",
                    TextOnGray: _e,
                    TextOnYellow: Ae,
                    IconNormal: "#929AA5",
                    ToastBg: Te,
                    BtnBg: Oe,
                    PrimaryYellow: Be,
                    TextLink: "#D89F00",
                    TradeBg: Ee,
                    SellHover: Ue,
                    Sell: Ue,
                    TextSell: Ue,
                    DepthBuyBg: Ce,
                    BuyHover: De,
                    Buy: De,
                    TextBuy: De,
                    Error: Ue,
                    Success: De,
                    Vessel: ye,
                    LiteBg1: pe,
                    LiteBg2: ye,
                    TextToast: Be,
                    DepthSellBg: Fe,
                    SuccessBg: Ce,
                    TwoColorIcon: Re,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                Le = {
                    DepthBuyBg: Fe,
                    BuyHover: Ue,
                    Buy: Ue,
                    TextBuy: Ue,
                    DepthSellBg: Ce,
                    SellHover: De,
                    Sell: De,
                    TextSell: De
                },
                Pe = {
                    BasicBg: "#181E25",
                    SecondaryBg: "#191A1F",
                    Input: be,
                    InputLine: Re,
                    CardBg: Ae,
                    TagBg: Re,
                    Line: Se,
                    DisableBtn: Re,
                    Grid: Se,
                    DisabledText: Te,
                    DisableText: Te,
                    Placeholder: Re,
                    TertiaryText: "#4F5867",
                    SecondaryText: me,
                    PrimaryText: _e,
                    RedGreenBgText: pe,
                    EmphasizeText: "#FF693D",
                    TextOnGray: _e,
                    TextOnYellow: Ae,
                    IconNormal: Te,
                    ToastBg: Te,
                    BtnBg: Oe,
                    PrimaryYellow: Be,
                    TextLink: Be,
                    TradeBg: "#0B0E11",
                    SellHover: Ue,
                    Sell: Ue,
                    TextSell: Ue,
                    DepthBuyBg: Ie,
                    BuyHover: De,
                    Buy: De,
                    TextBuy: De,
                    Error: Ue,
                    Success: De,
                    Vessel: be,
                    LiteBg1: pe,
                    LiteBg2: ye,
                    TextToast: Be,
                    DepthSellBg: we,
                    SuccessBg: Ie,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                Ne = {
                    DepthBuyBg: we,
                    BuyHover: Ue,
                    Buy: Ue,
                    TextBuy: Ue,
                    DepthSellBg: Ie,
                    SellHover: De,
                    Sell: De,
                    TextSell: De
                },
                Qe = {
                    sell: oe,
                    textSell: se,
                    sellHover: ie,
                    depthSellBg: ne,
                    buy: ee,
                    textBuy: te,
                    buyHover: J,
                    depthBuyBg: X,
                    line: F,
                    outlineHover: "#FFEF87",
                    primary: j,
                    primaryHover: $,
                    error: se,
                    errorBg: ne,
                    success: ee,
                    successBg: X,
                    disable: F,
                    iconNormal: w,
                    textWhite: C,
                    textGray: F,
                    textBlack: H,
                    textPrimary: M,
                    textSecondary: N,
                    textThird: L,
                    textDisabled: U,
                    textBrand: K,
                    textToast: z,
                    bg: I,
                    bg1: C,
                    bg2: D,
                    bg3: I,
                    bg4: P,
                    bg6: C,
                    bg7: D,
                    popupBg: C,
                    badgeBg: "#FEF6D8",
                    selectedBg: D,
                    gradientBrand: ae,
                    gradientPrimary: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                },
                Me = (0, B.__assign)((0, B.__assign)((0, B.__assign)({}, Qe), le), {
                    mobile: (0, B.__assign)({}, xe)
                }),
                Ye = {
                    sell: oe,
                    textSell: oe,
                    sellHover: ie,
                    depthSellBg: ue,
                    buy: ee,
                    textBuy: ee,
                    buyHover: J,
                    depthBuyBg: re,
                    line: Q,
                    outlineHover: V,
                    primary: j,
                    primaryHover: $,
                    error: oe,
                    errorBg: ue,
                    success: ee,
                    successBg: re,
                    disable: N,
                    iconNormal: x,
                    textWhite: C,
                    textGray: F,
                    textBlack: H,
                    textPrimary: F,
                    textSecondary: U,
                    textThird: x,
                    textDisabled: P,
                    textBrand: $,
                    textToast: W,
                    bg: k,
                    bg1: k,
                    bg2: H,
                    bg3: Q,
                    bg4: P,
                    bg6: Y,
                    bg7: q,
                    popupBg: M,
                    badgeBg: Z,
                    selectedBg: G,
                    gradientBrand: ae,
                    gradientPrimary: ce
                },
                Ge = (0, B.__assign)((0, B.__assign)((0, B.__assign)({}, Ye), he), {
                    mobile: (0, B.__assign)({}, Pe)
                }),
                ke = {
                    reverse: (0, B.__assign)((0, B.__assign)({
                        sell: ee,
                        textSell: te,
                        sellHover: J,
                        depthSellBg: X,
                        buy: oe,
                        textBuy: se,
                        buyHover: ie,
                        depthBuyBg: ne
                    }, fe), {
                        mobile: (0, B.__assign)({}, Le)
                    }),
                    cvd: (0, B.__assign)((0, B.__assign)({
                        sell: "#EC8D42",
                        textSell: "#DD7A2B",
                        sellHover: "#EEA062",
                        depthSellBg: "#FFEFE2",
                        buy: "#1F8DF9",
                        textBuy: "#297FD4",
                        buyHover: "#69B1F8",
                        depthBuyBg: "#E6F3FF",
                        error: "#EC8D42",
                        errorBg: "#FFEFE2",
                        success: "#1F8DF9",
                        successBg: "#E6F3FF"
                    }, {
                        Sell: "#EC8D42",
                        TextSell: "#DD7A2B",
                        SellHover: "#EEA062",
                        DepthSellBg: "#FFEFE2",
                        Buy: "#1F8DF9",
                        TextBuy: "#297FD4",
                        BuyHover: "#69B1F8",
                        DepthBuyBg: "#E6F3FF",
                        Error: "#EC8D42",
                        ErrorBg: "#FFEFE2",
                        Success: "#1F8DF9",
                        SuccessBg: "#E6F3FF"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Sell: "#DD7A2B",
                            TextSell: "#DD7A2B",
                            SellHover: "#DD7A2B",
                            DepthSellBg: "#FFEFE2",
                            Buy: "#1F8DF9",
                            TextBuy: "#1F8DF9",
                            BuyHover: "#1F8DF9",
                            DepthBuyBg: "#E6F3FF",
                            Error: "#DD7A2B",
                            ErrorBg: "#FFEFE2",
                            Success: "#1F8DF9",
                            SuccessBg: "#E6F3FF"
                        })
                    }),
                    "cvd-reverse": (0, B.__assign)((0, B.__assign)({
                        sell: "#1F8DF9",
                        textSell: "#297FD4",
                        sellHover: "#69B1F8",
                        depthSellBg: "#E6F3FF",
                        buy: "#EC8D42",
                        textBuy: "#DD7A2B",
                        buyHover: "#EEA062",
                        depthBuyBg: "#FFEFE2",
                        error: "#EC8D42",
                        errorBg: "#FFEFE2",
                        success: "#1F8DF9",
                        successBg: "#E6F3FF"
                    }, {
                        Sell: "#1F8DF9",
                        TextSell: "#297FD4",
                        SellHover: "#69B1F8",
                        DepthSellBg: "#E6F3FF",
                        Buy: "#EC8D42",
                        TextBuy: "#DD7A2B",
                        BuyHover: "#EEA062",
                        DepthBuyBg: "#FFEFE2",
                        Error: "#EC8D42",
                        ErrorBg: "#FFEFE2",
                        Success: "#1F8DF9",
                        SuccessBg: "#E6F3FF"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Sell: "#1F8DF9",
                            TextSell: "#1F8DF9",
                            SellHover: "#1F8DF9",
                            DepthSellBg: "#E6F3FF",
                            Buy: "#DD7A2B",
                            TextBuy: "#DD7A2B",
                            BuyHover: "#DD7A2B",
                            DepthBuyBg: "#FFEFE2",
                            Error: "#DD7A2B",
                            ErrorBg: "#FFEFE2",
                            Success: "#1F8DF9",
                            SuccessBg: "#E6F3FF"
                        })
                    }),
                    traditional: (0, B.__assign)((0, B.__assign)({}, {
                        Sell: "#EA0070",
                        TextSell: "#EA0070",
                        SellHover: "#EE358D",
                        DepthSellBg: "#FFD9EB",
                        Buy: "#74A700",
                        TextBuy: "#74A700",
                        BuyHover: "#9BCB2F",
                        DepthBuyBg: "#F6FFE1",
                        Error: "#EA0070",
                        ErrorBg: "#FFD9EB",
                        Success: "#74A700",
                        SuccessBg: "#F6FFE1"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Sell: "#EA0070",
                            TextSell: "#EA0070",
                            SellHover: "#EE358D",
                            DepthSellBg: "#FFD9EB",
                            Buy: "#74A700",
                            TextBuy: "#74A700",
                            BuyHover: "#9BCB2F",
                            DepthBuyBg: "#F6FFE1",
                            Error: "#EA0070",
                            ErrorBg: "#FFD9EB",
                            Success: "#74A700",
                            SuccessBg: "#F6FFE1"
                        })
                    }),
                    "traditional-reverse": (0, B.__assign)((0, B.__assign)({}, {
                        Buy: "#EA0070",
                        TextBuy: "#EA0070",
                        BuyHover: "#EE358D",
                        DepthBuyBg: "#FFD9EB",
                        Sell: "#74A700",
                        TextSell: "#74A700",
                        SellHover: "#9BCB2F",
                        DepthSellBg: "#F6FFE1",
                        Error: "#EA0070",
                        ErrorBg: "#FFD9EB",
                        Success: "#74A700",
                        SuccessBg: "#F6FFE1"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Buy: "#EA0070",
                            TextBuy: "#EA0070",
                            BuyHover: "#EE358D",
                            DepthBuyBg: "#FFD9EB",
                            Sell: "#74A700",
                            TextSell: "#74A700",
                            SellHover: "#9BCB2F",
                            DepthSellBg: "#F6FFE1",
                            Error: "#EA0070",
                            ErrorBg: "#FFD9EB",
                            Success: "#74A700",
                            SuccessBg: "#F6FFE1"
                        })
                    })
                },
                qe = {
                    reverse: (0, B.__assign)((0, B.__assign)({
                        sell: ee,
                        textSell: ee,
                        sellHover: J,
                        depthSellBg: re,
                        buy: oe,
                        textBuy: oe,
                        buyHover: ie,
                        depthBuyBg: ue
                    }, de), {
                        mobile: (0, B.__assign)({}, Ne)
                    }),
                    cvd: (0, B.__assign)((0, B.__assign)({
                        sell: "#EC8D42",
                        textSell: "#DD7A2B",
                        sellHover: "#EEA062",
                        depthSellBg: "#553821",
                        buy: "#1F8DF9",
                        textBuy: "#1F8DF9",
                        buyHover: "#69B1F8",
                        depthBuyBg: "#22384E",
                        error: "#EC8D42",
                        errorBg: "#553821",
                        success: "#1F8DF9",
                        successBg: "#22384E"
                    }, {
                        Sell: "#EC8D42",
                        TextSell: "#DD7A2B",
                        SellHover: "#EEA062",
                        DepthSellBg: "#553821",
                        Buy: "#1F8DF9",
                        TextBuy: "#1F8DF9",
                        BuyHover: "#69B1F8",
                        DepthBuyBg: "#22384E",
                        Error: "#EC8D42",
                        ErrorBg: "#553821",
                        Success: "#1F8DF9",
                        SuccessBg: "#22384E"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Sell: "#DD7A2B",
                            TextSell: "#DD7A2B",
                            SellHover: "#DD7A2B",
                            DepthSellBg: "#553821",
                            Buy: "#1F8DF9",
                            TextBuy: "#1F8DF9",
                            BuyHover: "#1F8DF9",
                            DepthBuyBg: "#22384E",
                            Error: "#EC8D42",
                            ErrorBg: "#553821",
                            Success: "#1F8DF9",
                            SuccessBg: "#22384E"
                        })
                    }),
                    "cvd-reverse": (0, B.__assign)((0, B.__assign)({
                        sell: "#1F8DF9",
                        textSell: "#297FD4",
                        sellHover: "#69B1F8",
                        depthSellBg: "#E6F3FF",
                        buy: "#EC8D42",
                        textBuy: "#DD7A2B",
                        buyHover: "#EEA062",
                        depthBuyBg: "#FFEFE2",
                        error: "#EC8D42",
                        errorBg: "#553821",
                        success: "#1F8DF9",
                        successBg: "#22384E"
                    }, {
                        Sell: "#1F8DF9",
                        TextSell: "#297FD4",
                        SellHover: "#69B1F8",
                        DepthSellBg: "#E6F3FF",
                        Buy: "#EC8D42",
                        TextBuy: "#DD7A2B",
                        BuyHover: "#EEA062",
                        DepthBuyBg: "#FFEFE2",
                        Error: "#EC8D42",
                        ErrorBg: "#553821",
                        Success: "#1F8DF9",
                        SuccessBg: "#22384E"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Sell: "#1F8DF9",
                            TextSell: "#1F8DF9",
                            SellHover: "#1F8DF9",
                            DepthSellBg: "#22384E",
                            Buy: "#DD7A2B",
                            TextBuy: "#DD7A2B",
                            BuyHover: "#DD7A2B",
                            DepthBuyBg: "#553821",
                            Error: "#EC8D42",
                            ErrorBg: "#553821",
                            Success: "#1F8DF9",
                            SuccessBg: "#22384E"
                        })
                    }),
                    traditional: (0, B.__assign)((0, B.__assign)({}, {
                        Sell: "#EA0070",
                        TextSell: "#EA0070",
                        SellHover: "#EE358D",
                        DepthSellBg: "#40172B",
                        Buy: "#74A700",
                        TextBuy: "#74A700",
                        BuyHover: "#9BCB2F",
                        DepthBuyBg: "#2A3315",
                        Error: "#EA0070",
                        ErrorBg: "#40172B",
                        Success: "#74A700",
                        SuccessBg: "#2A3315"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Sell: "#EA0070",
                            TextSell: "#EA0070",
                            SellHover: "#EE358D",
                            DepthSellBg: "#40172B",
                            Buy: "#74A700",
                            TextBuy: "#74A700",
                            BuyHover: "#9BCB2F",
                            DepthBuyBg: "#2A3315",
                            Error: "#EA0070",
                            ErrorBg: "#40172B",
                            Success: "#74A700",
                            SuccessBg: "#2A3315"
                        })
                    }),
                    "traditional-reverse": (0, B.__assign)((0, B.__assign)({}, {
                        Buy: "#EA0070",
                        TextBuy: "#EA0070",
                        BuyHover: "#EE358D",
                        DepthBuyBg: "#40172B",
                        Sell: "#74A700",
                        TextSell: "#74A700",
                        SellHover: "#9BCB2F",
                        DepthSellBg: "#2A3315",
                        Error: "#EA0070",
                        ErrorBg: "#40172B",
                        Success: "#74A700",
                        SuccessBg: "#2A3315"
                    }), {
                        mobile: (0, B.__assign)({}, {
                            Buy: "#EA0070",
                            TextBuy: "#EA0070",
                            BuyHover: "#EE358D",
                            DepthBuyBg: "#40172B",
                            Sell: "#74A700",
                            TextSell: "#74A700",
                            SellHover: "#9BCB2F",
                            DepthSellBg: "#2A3315",
                            Error: "#EA0070",
                            ErrorBg: "#40172B",
                            Success: "#74A700",
                            SuccessBg: "#2A3315"
                        })
                    })
                },
                He = r("kKcW"),
                je = r("UVzS"),
                $e = r("LYqd");
            const Ke = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    n = e.level2Domain,
                    i = e.lang,
                    s = e.prefixCls,
                    u = e.isRTL,
                    a = e.iconConfig,
                    c = e.children,
                    l = e.isElectron,
                    f = e.isMobile,
                    h = (0, B.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    d = {
                        prefixCls: s,
                        isRTL: u,
                        iconConfig: a,
                        isElectron: l,
                        isMobile: f
                    },
                    p = {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: n,
                        lang: i
                    },
                    y = Object.values(p).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    E = o().createElement(je.A, (0, B.__assign)({}, d), o().createElement(He.A, (0, B.__assign)({}, h), c));
                return y ? o().createElement($e.A, (0, B.__assign)({}, p), E) : E
            };
            var We = r("wROZ"),
                ze = r("iCLV"),
                Ve = r("HKzA"),
                Ze = r("SLx+");
            const Xe = function(e) {
                var t = e.willClose,
                    r = e.closeCallback,
                    n = e.content,
                    s = (0, B.__rest)(e, ["willClose", "closeCallback", "content"]),
                    u = o().useState(!0),
                    a = u[0],
                    c = u[1],
                    l = (0, i.useCallback)((function() {
                        c(!1), setTimeout((function() {
                            r && r()
                        }), Ze.p)
                    }), [r]);
                return o().useEffect((function() {
                    t && l()
                }), [t, l]), o().createElement(Ve.Ay, (0, B.__assign)({}, s, {
                    visible: a,
                    onClose: l,
                    children: n
                }))
            };
            var Je = r("xqbL"),
                et = r.n(Je),
                tt = r("1lvF"),
                rt = r("AlcF");
            const nt = function(e) {
                var t = e.duration,
                    r = void 0 === t ? 3e3 : t,
                    n = e.visible,
                    i = e.onClose,
                    s = void 0 === i ? We.es : i,
                    u = e.children,
                    a = (0, B.__rest)(e, ["duration", "visible", "onClose", "children"]),
                    c = o().useRef(),
                    l = (0, je.r)().prefixCls,
                    f = et()("".concat(l, "-toast"), e.className);
                return o().useEffect((function() {
                    return r ? (c.current = setTimeout((function() {
                        n && s(), c.current = null
                    }), r), function() {
                        return clearTimeout(c.current)
                    }) : function() {}
                }), [n, r, s]), o().createElement(rt.A, (0, B.__assign)({}, a, {
                    visible: n,
                    onClose: s,
                    className: f
                }), o().createElement(tt.Ay, {
                    className: "".concat(l, "-toast-wrap"),
                    children: u
                }))
            };
            const it = function(e) {
                var t = e.willClose,
                    r = e.closeCallback,
                    n = e.content,
                    s = (0, B.__rest)(e, ["willClose", "closeCallback", "content"]),
                    u = o().useState(!0),
                    a = u[0],
                    c = u[1],
                    l = (0, i.useCallback)((function() {
                        c(!1), setTimeout((function() {
                            r && r()
                        }), Ze.p)
                    }), [r]);
                return o().useEffect((function() {
                    t && l()
                }), [t, l]), o().createElement(nt, (0, B.__assign)({}, s, {
                    visible: a,
                    onClose: l,
                    children: n
                }))
            };
            var ot = r("frD5");
            const st = function(e) {
                var t = e.willClose,
                    r = e.closeCallback,
                    n = e.direction,
                    s = void 0 === n ? "bottom" : n,
                    u = e.content,
                    a = (0, B.__rest)(e, ["willClose", "closeCallback", "direction", "content"]),
                    c = o().useState(!0),
                    l = c[0],
                    f = c[1],
                    h = (0, i.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            r && r()
                        }), Ze.p)
                    }), [r]);
                return o().useEffect((function() {
                    t && h()
                }), [t, h]), o().createElement(ot.A, (0, B.__assign)({}, a, {
                    direction: s,
                    visible: l,
                    onClose: h,
                    children: u
                }))
            };
            var ut = r("X/Nh"),
                at = r("HYEe"),
                ct = r("TQvm");
            const lt = function(e) {
                return o().createElement(ct.A, (0, B.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            };
            var ft = r("pNeN"),
                ht = {
                    error: o().createElement(ut.A, {
                        name: "CircledCloseF",
                        color: "error"
                    }),
                    warn: o().createElement(at.A, {
                        name: "CircledWarningF",
                        color: "PrimaryYellow"
                    }),
                    success: o().createElement(lt, {
                        name: "CircledCheckmarkF",
                        color: "success"
                    }),
                    push: o().createElement(lt, {
                        name: "CircledCheckmarkF",
                        color: "success"
                    })
                };
            const dt = function(e) {
                var t, r, n = e.variant,
                    s = void 0 === n ? "primary" : n,
                    u = e.sz,
                    a = void 0 === u ? "middle" : u,
                    c = e.icon,
                    l = e.title,
                    f = e.message,
                    h = e.closable,
                    d = e.onClose,
                    p = e.closeIcon,
                    y = e.minWidth,
                    E = (0, B.__rest)(e, ["variant", "sz", "icon", "title", "message", "closable", "onClose", "closeIcon", "minWidth"]),
                    _ = (0, je.r)(),
                    v = _.prefixCls,
                    g = _.isRTL,
                    m = "".concat(v, "-notification"),
                    T = et()(m, ((t = {})["".concat(m, "-rtl")] = !!g, t["".concat(m, "__").concat(s)] = !!s, t["data-size-".concat(a)] = !!a, t["".concat(m, "-mw")] = !!y, t), e.className),
                    R = et()("".concat(m, "-content-message"), {
                        "data-push-message": "push" === s && !l
                    });
                if (!l && !f) return null;
                var S = !1 === c ? null : (0, i.isValidElement)(c) ? c : ht[s],
                    b = (0, i.useMemo)((function() {
                        var e;
                        return h ? p ? o().cloneElement(p, {
                            color: "IconNormal",
                            className: et()("".concat(m, "-close"), null === (e = null === p || void 0 === p ? void 0 : p.props) || void 0 === e ? void 0 : e.className),
                            onClick: d
                        }) : o().createElement(ft.A, {
                            name: "CloseF",
                            color: "IconNormal",
                            className: "".concat(m, "-close"),
                            onClick: d
                        }) : null
                    }), [m, d, p, h]);
                return o().createElement(tt.Ay, (0, B.__assign)({}, E, {
                    className: T
                }), !!S && o().cloneElement(S, {
                    className: et()("".concat(m, "-prefix"), null === (r = null === S || void 0 === S ? void 0 : S.props) || void 0 === r ? void 0 : r.className)
                }), o().createElement(tt.Ay, {
                    className: et()("".concat(m, "-content"), {
                        closable: h
                    })
                }, !!l && o().createElement(tt.Ay, {
                    className: "".concat(m, "-content-title"),
                    children: l
                }), !!f && o().createElement(tt.Ay, {
                    className: R,
                    children: f
                }), b))
            };
            const pt = function(e) {
                var t = e.className,
                    r = e.duration,
                    n = void 0 === r ? 3e3 : r,
                    s = e.willClose,
                    u = e.closeCallback,
                    a = (0, B.__rest)(e, ["className", "duration", "willClose", "closeCallback"]),
                    c = o().useState(!0),
                    l = c[0],
                    f = c[1],
                    h = o().useRef(),
                    d = (0, i.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            u && u()
                        }), Ze.p)
                    }), [u]);
                return o().useEffect((function() {
                    s && d()
                }), [s, d]), o().useEffect((function() {
                    return n ? (h.current = setTimeout((function() {
                        l && d(), h.current = null
                    }), n), function() {
                        return clearTimeout(h.current)
                    }) : function() {}
                }), [l, n, d]), o().createElement(Ze.A, {
                    className: t,
                    visible: l
                }, o().createElement(dt, (0, B.__assign)({
                    closable: !0,
                    variant: "push"
                }, a, {
                    onClose: d
                })))
            };
            var yt = function(e) {
                var t = e.placement,
                    r = e.offsetX,
                    n = e.offsetY,
                    i = t.split("-"),
                    o = i[0],
                    s = i[1],
                    u = s ? 0 : "50%",
                    a = n,
                    c = s ? r : "50%";
                return ("end" === s ? {
                    top: {
                        transform: "translate(-".concat(u, ", 0)"),
                        top: a,
                        right: c
                    },
                    bottom: {
                        transform: "translate(-".concat(u, ", 0)"),
                        bottom: a,
                        right: c
                    }
                } : {
                    top: {
                        transform: "translate(-".concat(u, ", 0)"),
                        top: a,
                        left: c
                    },
                    bottom: {
                        transform: "translate(-".concat(u, ", 0)"),
                        bottom: a,
                        left: c
                    }
                })[o]
            };
            const Et = function(e) {
                var t = e.offsetX,
                    r = void 0 === t ? 16 : t,
                    n = e.offsetY,
                    i = void 0 === n ? 16 : n,
                    s = e.notifies,
                    u = (0, je.r)().prefixCls,
                    a = "".concat(u, "-layer-notifies");
                if (!s.length) return null;
                var c = s.reduce((function(e, t) {
                    var r = t.uid,
                        n = t.placement,
                        i = void 0 === n ? "top-end" : n,
                        s = (0, B.__rest)(t, ["uid", "placement"]);
                    return e[i].push(o().createElement(pt, (0, B.__assign)({
                        key: r
                    }, s))), e
                }), {
                    "top-start": [],
                    top: [],
                    "top-end": [],
                    "bottom-start": [],
                    bottom: [],
                    "bottom-end": []
                });
                return o().createElement(tt.Ay, {
                    className: "".concat(a, "-wrap")
                }, Object.keys(c).map((function(e) {
                    var t, n = e.split("-"),
                        s = (n[0], n[1]),
                        u = c[e],
                        l = et()(a, ((t = {})["data-pos-".concat(s)] = s, t));
                    return u.length ? o().createElement(tt.Ay, {
                        key: e,
                        className: l,
                        children: u,
                        style: yt({
                            placement: e,
                            offsetX: r,
                            offsetY: i
                        })
                    }) : null
                })))
            };
            var _t = (0, i.createContext)({
                openModal: We.es,
                closeModal: We.es,
                openToast: We.es,
                closeToast: We.es,
                openDrawer: We.es,
                closeDrawer: We.es,
                pushNotify: We.es,
                closeNotify: We.es
            });
            const vt = function(e) {
                var t = e.children,
                    r = e.notifiesPosition,
                    n = (0, i.useState)(),
                    s = n[0],
                    u = n[1],
                    a = (0, i.useState)(),
                    c = a[0],
                    l = a[1],
                    f = (0, i.useState)(),
                    h = f[0],
                    d = f[1],
                    p = (0, i.useState)([]),
                    y = p[0],
                    E = p[1],
                    _ = {};
                return _.openModal = (0, i.useCallback)((function(e) {
                    var t = e.closeCallback;
                    u((0, B.__assign)((0, B.__assign)({}, e), {
                        closeCallback: function() {
                            u(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), _.closeModal = (0, i.useCallback)((function() {
                    u((function(e) {
                        return e ? (0, B.__assign)((0, B.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), _.openToast = (0, i.useCallback)((function(e) {
                    var t = e.closeCallback;
                    l((0, B.__assign)((0, B.__assign)({}, e), {
                        closeCallback: function() {
                            l(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), _.closeToast = (0, i.useCallback)((function() {
                    l((function(e) {
                        return e ? (0, B.__assign)((0, B.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), _.openDrawer = (0, i.useCallback)((function(e) {
                    var t = e.closeCallback;
                    d((0, B.__assign)((0, B.__assign)({}, e), {
                        closeCallback: function() {
                            d(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), _.closeDrawer = (0, i.useCallback)((function() {
                    d((function(e) {
                        return e ? (0, B.__assign)((0, B.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), _.pushNotify = (0, i.useCallback)((function(e) {
                    var t = (0, ze.uR)(8),
                        r = (0, B.__assign)((0, B.__assign)({}, e), {
                            uid: t,
                            closeCallback: function() {
                                e.closeCallback && e.closeCallback(), E((function(e) {
                                    return e.filter((function(e) {
                                        return e.uid !== t
                                    }))
                                }))
                            },
                            willClose: !1
                        });
                    return E((function(e) {
                        return (0, B.__spreadArray)((0, B.__spreadArray)([], e, !0), [r], !1)
                    })), r.uid
                }), []), _.closeNotify = (0, i.useCallback)((function(e) {
                    E((function(t) {
                        return t.map((function(t) {
                            return t.uid === e ? (0, B.__assign)((0, B.__assign)({}, t), {
                                willClose: !0
                            }) : t
                        }))
                    }))
                }), []), o().createElement(_t.Provider, {
                    value: _
                }, t, c && o().createElement(it, (0, B.__assign)({}, c)), s && o().createElement(Xe, (0, B.__assign)({}, s)), h && o().createElement(st, (0, B.__assign)({}, h)), o().createElement(Et, (0, B.__assign)({
                    notifies: y
                }, r)))
            };
            var gt = r("MD8j"),
                mt = r("kI1i"),
                Tt = r("QL2w"),
                Rt = r("gYIm");
            const St = function(e) {
                var t = (0, O._)({}, e),
                    r = (0, mt.DP)().isLight,
                    i = (0, mt.by)(),
                    o = (0, u.L)(),
                    s = o.lng,
                    a = o.pathPrefix,
                    c = o.level2Domain,
                    l = o.isRegionMode,
                    f = (0, gt.d4)(Tt.K),
                    h = r ? Me : Ge,
                    d = r ? ke : qe,
                    p = "cvd" === i,
                    y = "rtl" === R(s);
                return (0, n.jsx)(Ke, {
                    mode: r ? "light" : "dark",
                    iconConfig: {
                        path: Rt.uH
                    },
                    themeColors: h,
                    themeExtraColors: d,
                    isRTL: y,
                    isCVD: p,
                    isReverse: f,
                    lang: s,
                    pathPrefix: a,
                    level2Domain: c,
                    isRegionMode: l,
                    colorMode: "traditional" === i ? "traditional" : "fresh",
                    children: (0, n.jsx)(vt, {
                        children: t.children
                    })
                })
            };
            var bt = r("Gii1"),
                At = r("zokI");
            var Ot = r("Hf/4"),
                Bt = r("R/bV"),
                Ct = (0, i.memo)((function(e) {
                    var t = e.children,
                        r = e.ssrSize,
                        o = (0, a.K7)().pathname,
                        s = !(0, Ot.A)(o),
                        u = (0, i.useMemo)((function() {
                            return {
                                ssrSize: r,
                                isSSRedPage: s
                            }
                        }), [r, s]);
                    return (0, n.jsx)(Bt.B.Provider, {
                        value: u,
                        children: t
                    })
                }));
            r("m+5l"), r("pC2Q");
            window.__WS_PING__ = !0;
            var Dt, It = (Dt = function() {
                return r.e(6526).then(r.bind(r, "CfyP"))
            }, (0, At.A)(Dt, {
                ssr: !1,
                loading: function() {
                    return null
                }
            }));
            const Ft = function() {
                var e = (0, u.L)(),
                    t = (0, bt.vz)().isLoggedIn,
                    r = (0, bt.Py)(),
                    o = e.lng,
                    h = e.ssrSize,
                    d = e.ssrTheme,
                    p = (0, i.useMemo)((function() {
                        return (0, S.A)({
                            stylisPlugins: ["rtl" === R(o) ? s.Ay : void 0]
                        })
                    }), [o]);
                ! function() {
                    var e = (0, gt.wA)();
                    (0, i.useEffect)((function() {
                        e.cookies.loadBasisTimeZone()
                    }), [e.cookies])
                }(), (0, mt.GZ)(d), (0, i.useEffect)((function() {
                    (0, m.Lu)({
                        clientType: "web",
                        isHttp: Rt.Zc,
                        getSessionInfo: function() {
                            return new Promise((function(e) {
                                return e({
                                    "bnc-uuid": f.U.read("bnc-uuid"),
                                    lang: f.U.read("lang"),
                                    cr00: f.U.read("cr00")
                                })
                            }))
                        },
                        tokenUrlPrefix: Rt.yG
                    })
                }), []);
                var y = (0, i.useContext)(c.$);
                return (0, n.jsxs)(A.A, {
                    i18n: y,
                    lng: o,
                    ns: "futures-strategy-ui",
                    children: [(0, n.jsx)(It, {}), (0, n.jsx)(St, {
                        children: (0, n.jsx)(Ct, {
                            ssrSize: h,
                            children: (0, n.jsx)(b._y, {
                                value: p,
                                children: (0, n.jsx)(g, {
                                    getSDK: Rt.D5,
                                    isLoggedIn: t,
                                    children: (0, n.jsxs)(E, {
                                        getSDK: Rt.Ri,
                                        isLoggedIn: t,
                                        userInfo: r,
                                        children: [(0, n.jsx)(l.A, {}), (0, n.jsx)(a.Tp, {})]
                                    })
                                })
                            })
                        })
                    })]
                })
            }
        },
        sHFo: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i),
                s = r("n0gm"),
                u = (0, i.forwardRef)((function(e, t) {
                    return o().createElement(s.A, (0, n.__assign)({}, e, {
                        ref: t
                    }))
                }));
            u.displayName = "Box";
            const a = u
        },
        EUvc: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("DTvD");
            const i = (0, n.createContext)({
                prefixCls: "bn",
                getI18n: function(e) {
                    return e
                }
            })
        },
        TQvm: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i),
                s = r("xqbL"),
                u = r.n(s),
                a = r("sHFo"),
                c = r("EUvc");
            const l = function(e) {
                var t = (0, i.useContext)(c.A).prefixCls,
                    r = e.color,
                    s = (e.name, e.viewBox),
                    l = void 0 === s ? "0 0 96 96" : s,
                    f = e.children,
                    h = (0, n.__rest)(e, ["color", "name", "viewBox", "children"]),
                    d = u()("".concat(t, "-svg"), e.className),
                    p = {
                        as: "svg",
                        viewBox: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: r
                    };
                return o().createElement(a.A, (0, n.__assign)({}, h, p, {
                    className: d,
                    children: f
                }))
            }
        },
        "X/Nh": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i),
                s = r("TQvm");
            const u = function(e) {
                return o().createElement(s.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
                    fill: "currentColor"
                }))
            }
        },
        HYEe: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i),
                s = r("TQvm");
            const u = function(e) {
                return o().createElement(s.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        "1lvF": (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => n
            });
            const n = r("sHFo").A
        },
        n0gm: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i);
            const s = (0, i.forwardRef)((function(e, t) {
                var r = e.as,
                    i = void 0 === r ? "div" : r,
                    s = (0, n.__rest)(e, ["as"]);
                return o().createElement(i, (0, n.__assign)((0, n.__assign)({}, s), {
                    ref: t
                }))
            }))
        },
        lRhT: (e, t) => {
            "use strict";
            t.Y = function(e, t) {
                return u(e).some((function(e) {
                    var r = e.inverse,
                        n = "all" === e.type || t.type === e.type;
                    if (n && r || !n && !r) return !1;
                    var i = e.expressions.every((function(e) {
                        var r = e.feature,
                            n = e.modifier,
                            i = e.value,
                            o = t[r];
                        if (!o) return !1;
                        switch (r) {
                            case "orientation":
                            case "scan":
                                return o.toLowerCase() === i.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                i = l(i), o = l(o);
                                break;
                            case "resolution":
                                i = c(i), o = c(o);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                i = a(i), o = a(o);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                i = parseInt(i, 10) || 1, o = parseInt(o, 10) || 0
                        }
                        switch (n) {
                            case "min":
                                return o >= i;
                            case "max":
                                return o <= i;
                            default:
                                return o === i
                        }
                    }));
                    return i && !r || !i && r
                }))
            };
            var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                i = /^(?:(min|max)-)?(.+)/,
                o = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                s = /(dpi|dpcm|dppx)?$/;

            function u(e) {
                return e.split(",").map((function(e) {
                    var t = (e = e.trim()).match(r),
                        o = t[1],
                        s = t[2],
                        u = t[3] || "",
                        a = {};
                    return a.inverse = !!o && "not" === o.toLowerCase(), a.type = s ? s.toLowerCase() : "all", u = u.match(/\([^\)]+\)/g) || [], a.expressions = u.map((function(e) {
                        var t = e.match(n),
                            r = t[1].toLowerCase().match(i);
                        return {
                            modifier: r[1],
                            feature: r[2],
                            value: t[2]
                        }
                    })), a
                }))
            }

            function a(e) {
                var t, r = Number(e);
                return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
            }

            function c(e) {
                var t = parseFloat(e);
                switch (String(e).match(s)[1]) {
                    case "dpcm":
                        return t / 2.54;
                    case "dppx":
                        return 96 * t;
                    default:
                        return t
                }
            }

            function l(e) {
                var t = parseFloat(e);
                switch (String(e).match(o)[1]) {
                    case "em":
                    case "rem":
                        return 16 * t;
                    case "cm":
                        return 96 * t / 2.54;
                    case "mm":
                        return 96 * t / 2.54 / 10;
                    case "in":
                        return 96 * t;
                    case "pt":
                        return 72 * t;
                    case "pc":
                        return 72 * t / 12;
                    default:
                        return t
                }
            }
        },
        NYym: (e, t) => {
            var r;

            function n(e, t) {
                var r = [],
                    n = 0;

                function i(e) {
                    return r.push(e), t
                }

                function o() {
                    return r[n++]
                }
                return {
                    tokenize: function(t) {
                        return t.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + t + ")", "g"), o)
                    }
                }
            }
            r = new function() {
                var e = "`TMP`",
                    t = "[^\\u0020-\\u007e]",
                    r = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    i = "direction\\s*:\\s*",
                    o = "['\"]?\\s*",
                    s = "(^|[^a-zA-Z])",
                    u = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    a = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    c = "(?:[_a-z0-9-]|" + t + "|" + a + ")",
                    l = r + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + t + "|" + a + ")") + c + "*") + ")?",
                    f = "((?:-?" + l + ")|(?:inherit|auto))",
                    h = "(#?" + c + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    d = "(?:[!#$%&*-~]|" + t + "|" + a + ")*?",
                    p = "(?![a-zA-Z])",
                    y = "(?!(" + c + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    E = "(?!" + d + o + "\\))",
                    _ = "(?=" + d + o + "\\))",
                    v = "(\\s*(?:!important\\s*)?[;}])",
                    g = new RegExp("`TMP`", "g"),
                    m = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    T = new RegExp("(" + u + y + "[^;}]+;?)", "gi"),
                    R = new RegExp("(" + u + "[^\\}]*?})", "gi"),
                    S = new RegExp("(" + i + ")ltr", "gi"),
                    b = new RegExp("(" + i + ")rtl", "gi"),
                    A = new RegExp(s + "(left)" + p + E + y, "gi"),
                    O = new RegExp(s + "(right)" + p + E + y, "gi"),
                    B = new RegExp(s + "(left)" + _, "gi"),
                    C = new RegExp(s + "(right)" + _, "gi"),
                    D = new RegExp(s + "(ltr)" + _, "gi"),
                    I = new RegExp(s + "(rtl)" + _, "gi"),
                    F = new RegExp(s + "([ns]?)e-resize", "gi"),
                    U = new RegExp(s + "([ns]?)w-resize", "gi"),
                    w = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + f + "(\\s+)" + f + "(\\s+)" + f + "(\\s+)" + f + v, "gi"),
                    x = new RegExp("((?:-color|border-style)\\s*:\\s*)" + h + "(\\s+)" + h + "(\\s+)" + h + "(\\s+)" + h + v, "gi"),
                    L = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + l + ")", "gi"),
                    P = new RegExp("(background-position-x\\s*:\\s*)(-?" + r + "%)", "gi"),
                    N = new RegExp("(border-radius\\s*:\\s*)" + f + "(?:(?:\\s+" + f + ")(?:\\s+" + f + ")?(?:\\s+" + f + ")?)?(?:(?:(?:\\s*\\/\\s*)" + f + ")(?:\\s+" + f + ")?(?:\\s+" + f + ")?(?:\\s+" + f + ")?)?" + v, "gi"),
                    Q = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + f, "gi"),
                    M = new RegExp("(text-shadow\\s*:\\s*)" + f + "(\\s*)" + h, "gi"),
                    Y = new RegExp("(text-shadow\\s*:\\s*)" + h + "(\\s*)" + f, "gi"),
                    G = new RegExp("(text-shadow\\s*:\\s*)" + f, "gi"),
                    k = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + f + "(\\s*\\))", "gi"),
                    q = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + f + "((?:\\s*,\\s*" + f + "){0,2}\\s*\\))", "gi");

                function H(e, t, r) {
                    var n, i;
                    return "%" === r.slice(-1) && (-1 !== (n = r.indexOf(".")) ? (i = r.length - n - 2, r = (r = 100 - parseFloat(r)).toFixed(i) + "%") : r = 100 - parseFloat(r) + "%"), t + r
                }

                function j(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function $(e, t) {
                    var r = [].slice.call(arguments),
                        n = r.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = r.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        o = r[10] || "";
                    return t + (i.length ? j(n) + " / " + j(i) : j(n)) + o
                }

                function K(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function W(e, t, r) {
                    return t + K(r)
                }

                function z(e, t, r, n, i) {
                    return t + r + K(n) + i
                }

                function V(e, t, r, n, i) {
                    return t + r + n + K(i)
                }
                return {
                    transform: function(t, r) {
                        var i = new n(T, "`NOFLIP_SINGLE`"),
                            o = new n(R, "`NOFLIP_CLASS`"),
                            s = new n(m, "`COMMENT`");
                        return t = s.tokenize(o.tokenize(i.tokenize(t.replace("`", "%60")))), r.transformDirInUrl && (t = t.replace(D, "$1" + e).replace(I, "$1ltr").replace(g, "rtl")), r.transformEdgeInUrl && (t = t.replace(B, "$1" + e).replace(C, "$1left").replace(g, "right")), t = t.replace(S, "$1" + e).replace(b, "$1ltr").replace(g, "rtl").replace(A, "$1" + e).replace(O, "$1left").replace(g, "right").replace(F, "$1$2" + e).replace(U, "$1$2e-resize").replace(g, "w-resize").replace(N, $).replace(Q, W).replace(M, V).replace(Y, V).replace(G, W).replace(k, z).replace(q, z).replace(w, "$1$2$3$8$5$6$7$4$9").replace(x, "$1$2$3$8$5$6$7$4$9").replace(L, H).replace(P, H), t = i.detokenize(o.detokenize(s.detokenize(t)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, n) {
                var i;
                return "object" === typeof t ? i = t : (i = {}, "boolean" === typeof t && (i.transformDirInUrl = t), "boolean" === typeof n && (i.transformEdgeInUrl = n)), r.transform(e, i)
            } : "undefined" !== typeof window && (window.cssjanus = r)
        },
        oOBz: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = /[A-Z]/g,
                i = /^ms-/,
                o = {};

            function s(e) {
                return "-" + e.toLowerCase()
            }
            const u = function(e) {
                if (o.hasOwnProperty(e)) return o[e];
                var t = e.replace(n, s);
                return o[e] = i.test(t) ? "-" + t : t
            }
        },
        C7x3: (e, t, r) => {
            "use strict";
            var n = r("rnmQ");

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, r, i, o, s) {
                    if (s !== n) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return r.PropTypes = r, r
            }
        },
        "1YyT": (e, t, r) => {
            e.exports = r("C7x3")()
        },
        rnmQ: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        gHJi: (e, t, r) => {
            "use strict";
            e.exports = r("wRAs")
        },
        wRAs: (e, t, r) => {
            "use strict";
            var n = t;

            function i() {
                n.util._configure(), n.Writer._configure(n.BufferWriter), n.Reader._configure(n.BufferReader)
            }
            n.build = "minimal", n.Writer = r("R/rw"), n.BufferWriter = r("f0T6"), n.Reader = r("iUYL"), n.BufferReader = r("Fa0v"), n.util = r("a8eG"), n.rpc = r("IZNV"), n.roots = r("gESf"), n.configure = i, i()
        },
        iUYL: (e, t, r) => {
            "use strict";
            e.exports = a;
            var n, i = r("a8eG"),
                o = i.LongBits,
                s = i.utf8;

            function u(e, t) {
                return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
            }

            function a(e) {
                this.buf = e, this.pos = 0, this.len = e.length
            }
            var c = "undefined" !== typeof Uint8Array ? function(e) {
                    if (e instanceof Uint8Array || Array.isArray(e)) return new a(e);
                    throw Error("illegal buffer")
                } : function(e) {
                    if (Array.isArray(e)) return new a(e);
                    throw Error("illegal buffer")
                },
                l = function() {
                    return i.Buffer ? function(e) {
                        return (a.create = function(e) {
                            return i.Buffer.isBuffer(e) ? new n(e) : c(e)
                        })(e)
                    } : c
                };

            function f() {
                var e = new o(0, 0),
                    t = 0;
                if (!(this.len - this.pos > 4)) {
                    for (; t < 3; ++t) {
                        if (this.pos >= this.len) throw u(this);
                        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e
                    }
                    return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
                }
                for (; t < 4; ++t)
                    if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
                if (t = 0, this.len - this.pos > 4) {
                    for (; t < 5; ++t)
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
                } else
                    for (; t < 5; ++t) {
                        if (this.pos >= this.len) throw u(this);
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
                    }
                throw Error("invalid varint encoding")
            }

            function h(e, t) {
                return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
            }

            function d() {
                if (this.pos + 8 > this.len) throw u(this, 8);
                return new o(h(this.buf, this.pos += 4), h(this.buf, this.pos += 4))
            }
            a.create = l(), a.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, a.prototype.uint32 = function() {
                var e = 4294967295;
                return function() {
                    if (e = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return e;
                    if ((this.pos += 5) > this.len) throw this.pos = this.len, u(this, 10);
                    return e
                }
            }(), a.prototype.int32 = function() {
                return 0 | this.uint32()
            }, a.prototype.sint32 = function() {
                var e = this.uint32();
                return e >>> 1 ^ -(1 & e)
            }, a.prototype.bool = function() {
                return 0 !== this.uint32()
            }, a.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return h(this.buf, this.pos += 4)
            }, a.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return 0 | h(this.buf, this.pos += 4)
            }, a.prototype.float = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                var e = i.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, e
            }, a.prototype.double = function() {
                if (this.pos + 8 > this.len) throw u(this, 4);
                var e = i.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, e
            }, a.prototype.bytes = function() {
                var e = this.uint32(),
                    t = this.pos,
                    r = this.pos + e;
                if (r > this.len) throw u(this, e);
                return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? new this.buf.constructor(0) : this._slice.call(this.buf, t, r)
            }, a.prototype.string = function() {
                var e = this.bytes();
                return s.read(e, 0, e.length)
            }, a.prototype.skip = function(e) {
                if ("number" === typeof e) {
                    if (this.pos + e > this.len) throw u(this, e);
                    this.pos += e
                } else
                    do {
                        if (this.pos >= this.len) throw u(this)
                    } while (128 & this.buf[this.pos++]);
                return this
            }, a.prototype.skipType = function(e) {
                switch (e) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 !== (e = 7 & this.uint32());) this.skipType(e);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + e + " at offset " + this.pos)
                }
                return this
            }, a._configure = function(e) {
                n = e, a.create = l(), n._configure();
                var t = i.Long ? "toLong" : "toNumber";
                i.merge(a.prototype, {
                    int64: function() {
                        return f.call(this)[t](!1)
                    },
                    uint64: function() {
                        return f.call(this)[t](!0)
                    },
                    sint64: function() {
                        return f.call(this).zzDecode()[t](!1)
                    },
                    fixed64: function() {
                        return d.call(this)[t](!0)
                    },
                    sfixed64: function() {
                        return d.call(this)[t](!1)
                    }
                })
            }
        },
        Fa0v: (e, t, r) => {
            "use strict";
            e.exports = o;
            var n = r("iUYL");
            (o.prototype = Object.create(n.prototype)).constructor = o;
            var i = r("a8eG");

            function o(e) {
                n.call(this, e)
            }
            o._configure = function() {
                i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice)
            }, o.prototype.string = function() {
                var e = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
            }, o._configure()
        },
        gESf: e => {
            "use strict";
            e.exports = {}
        },
        IZNV: (e, t, r) => {
            "use strict";
            t.Service = r("4UAz")
        },
        "4UAz": (e, t, r) => {
            "use strict";
            e.exports = i;
            var n = r("a8eG");

            function i(e, t, r) {
                if ("function" !== typeof e) throw TypeError("rpcImpl must be a function");
                n.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(r)
            }(i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i, i.prototype.rpcCall = function e(t, r, i, o, s) {
                if (!o) throw TypeError("request must be specified");
                var u = this;
                if (!s) return n.asPromise(e, u, t, r, i, o);
                if (u.rpcImpl) try {
                    return u.rpcImpl(t, r[u.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), (function(e, r) {
                        if (e) return u.emit("error", e, t), s(e);
                        if (null !== r) {
                            if (!(r instanceof i)) try {
                                r = i[u.responseDelimited ? "decodeDelimited" : "decode"](r)
                            } catch (e) {
                                return u.emit("error", e, t), s(e)
                            }
                            return u.emit("data", r, t), s(null, r)
                        }
                        u.end(!0)
                    }))
                } catch (a) {
                    return u.emit("error", a, t), void setTimeout((function() {
                        s(a)
                    }), 0)
                } else setTimeout((function() {
                    s(Error("already ended"))
                }), 0)
            }, i.prototype.end = function(e) {
                return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        },
        dsAi: (e, t, r) => {
            "use strict";
            e.exports = i;
            var n = r("a8eG");

            function i(e, t) {
                this.lo = e >>> 0, this.hi = t >>> 0
            }
            var o = i.zero = new i(0, 0);
            o.toNumber = function() {
                return 0
            }, o.zzEncode = o.zzDecode = function() {
                return this
            }, o.length = function() {
                return 1
            };
            var s = i.zeroHash = "\0\0\0\0\0\0\0\0";
            i.fromNumber = function(e) {
                if (0 === e) return o;
                var t = e < 0;
                t && (e = -e);
                var r = e >>> 0,
                    n = (e - r) / 4294967296 >>> 0;
                return t && (n = ~n >>> 0, r = ~r >>> 0, ++r > 4294967295 && (r = 0, ++n > 4294967295 && (n = 0))), new i(r, n)
            }, i.from = function(e) {
                if ("number" === typeof e) return i.fromNumber(e);
                if (n.isString(e)) {
                    if (!n.Long) return i.fromNumber(parseInt(e, 10));
                    e = n.Long.fromString(e)
                }
                return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o
            }, i.prototype.toNumber = function(e) {
                if (!e && this.hi >>> 31) {
                    var t = 1 + ~this.lo >>> 0,
                        r = ~this.hi >>> 0;
                    return t || (r = r + 1 >>> 0), -(t + 4294967296 * r)
                }
                return this.lo + 4294967296 * this.hi
            }, i.prototype.toLong = function(e) {
                return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: Boolean(e)
                }
            };
            var u = String.prototype.charCodeAt;
            i.fromHash = function(e) {
                return e === s ? o : new i((u.call(e, 0) | u.call(e, 1) << 8 | u.call(e, 2) << 16 | u.call(e, 3) << 24) >>> 0, (u.call(e, 4) | u.call(e, 5) << 8 | u.call(e, 6) << 16 | u.call(e, 7) << 24) >>> 0)
            }, i.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, i.prototype.zzEncode = function() {
                var e = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
            }, i.prototype.zzDecode = function() {
                var e = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
            }, i.prototype.length = function() {
                var e = this.lo,
                    t = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    r = this.hi >>> 24;
                return 0 === r ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10
            }
        },
        a8eG: function(e, t, r) {
            "use strict";
            var n = t;

            function i(e, t, r) {
                for (var n = Object.keys(t), i = 0; i < n.length; ++i) void 0 !== e[n[i]] && r || (e[n[i]] = t[n[i]]);
                return e
            }

            function o(e) {
                function t(e, r) {
                    if (!(this instanceof t)) return new t(e, r);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return e
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                        value: (new Error).stack || ""
                    }), r && i(this, r)
                }
                return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return e
                    }
                }), t.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, t
            }
            n.asPromise = r("a1X9"), n.base64 = r("kkqJ"), n.EventEmitter = r("CAcF"), n.float = r("I8D1"), n.inquire = r("mpzN"), n.utf8 = r("gA9B"), n.pool = r("FmKl"), n.LongBits = r("dsAi"), n.isNode = Boolean("undefined" !== typeof r.g && r.g && r.g.process && r.g.process.versions && r.g.process.versions.node), n.global = n.isNode && r.g || "undefined" !== typeof window && window || "undefined" !== typeof self && self || this, n.emptyArray = Object.freeze ? Object.freeze([]) : [], n.emptyObject = Object.freeze ? Object.freeze({}) : {}, n.isInteger = Number.isInteger || function(e) {
                return "number" === typeof e && isFinite(e) && Math.floor(e) === e
            }, n.isString = function(e) {
                return "string" === typeof e || e instanceof String
            }, n.isObject = function(e) {
                return e && "object" === typeof e
            }, n.isset = n.isSet = function(e, t) {
                var r = e[t];
                return !(null == r || !e.hasOwnProperty(t)) && ("object" !== typeof r || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
            }, n.Buffer = function() {
                try {
                    var e = n.inquire("buffer").Buffer;
                    return e.prototype.utf8Write ? e : null
                } catch (t) {
                    return null
                }
            }(), n._Buffer_from = null, n._Buffer_allocUnsafe = null, n.newBuffer = function(e) {
                return "number" === typeof e ? n.Buffer ? n._Buffer_allocUnsafe(e) : new n.Array(e) : n.Buffer ? n._Buffer_from(e) : "undefined" === typeof Uint8Array ? e : new Uint8Array(e)
            }, n.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array, n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long"), n.key2Re = /^true|false|0|1$/, n.key32Re = /^-?(?:0|[1-9][0-9]*)$/, n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, n.longToHash = function(e) {
                return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash
            }, n.longFromHash = function(e, t) {
                var r = n.LongBits.fromHash(e);
                return n.Long ? n.Long.fromBits(r.lo, r.hi, t) : r.toNumber(Boolean(t))
            }, n.merge = i, n.lcFirst = function(e) {
                return e.charAt(0).toLowerCase() + e.substring(1)
            }, n.newError = o, n.ProtocolError = o("ProtocolError"), n.oneOfGetter = function(e) {
                for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = 1;
                return function() {
                    for (var e = Object.keys(this), r = e.length - 1; r > -1; --r)
                        if (1 === t[e[r]] && void 0 !== this[e[r]] && null !== this[e[r]]) return e[r]
                }
            }, n.oneOfSetter = function(e) {
                return function(t) {
                    for (var r = 0; r < e.length; ++r) e[r] !== t && delete this[e[r]]
                }
            }, n.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, n._configure = function() {
                var e = n.Buffer;
                e ? (n._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, r) {
                    return new e(t, r)
                }, n._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                    return new e(t)
                }) : n._Buffer_from = n._Buffer_allocUnsafe = null
            }
        },
        "R/rw": (e, t, r) => {
            "use strict";
            e.exports = f;
            var n, i = r("a8eG"),
                o = i.LongBits,
                s = i.base64,
                u = i.utf8;

            function a(e, t, r) {
                this.fn = e, this.len = t, this.next = void 0, this.val = r
            }

            function c() {}

            function l(e) {
                this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
            }

            function f() {
                this.len = 0, this.head = new a(c, 0, 0), this.tail = this.head, this.states = null
            }
            var h = function() {
                return i.Buffer ? function() {
                    return (f.create = function() {
                        return new n
                    })()
                } : function() {
                    return new f
                }
            };

            function d(e, t, r) {
                t[r] = 255 & e
            }

            function p(e, t) {
                this.len = e, this.next = void 0, this.val = t
            }

            function y(e, t, r) {
                for (; e.hi;) t[r++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
                for (; e.lo > 127;) t[r++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
                t[r++] = e.lo
            }

            function E(e, t, r) {
                t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24
            }
            f.create = h(), f.alloc = function(e) {
                return new i.Array(e)
            }, i.Array !== Array && (f.alloc = i.pool(f.alloc, i.Array.prototype.subarray)), f.prototype._push = function(e, t, r) {
                return this.tail = this.tail.next = new a(e, t, r), this.len += t, this
            }, p.prototype = Object.create(a.prototype), p.prototype.fn = function(e, t, r) {
                for (; e > 127;) t[r++] = 127 & e | 128, e >>>= 7;
                t[r] = e
            }, f.prototype.uint32 = function(e) {
                return this.len += (this.tail = this.tail.next = new p((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
            }, f.prototype.int32 = function(e) {
                return e < 0 ? this._push(y, 10, o.fromNumber(e)) : this.uint32(e)
            }, f.prototype.sint32 = function(e) {
                return this.uint32((e << 1 ^ e >> 31) >>> 0)
            }, f.prototype.uint64 = function(e) {
                var t = o.from(e);
                return this._push(y, t.length(), t)
            }, f.prototype.int64 = f.prototype.uint64, f.prototype.sint64 = function(e) {
                var t = o.from(e).zzEncode();
                return this._push(y, t.length(), t)
            }, f.prototype.bool = function(e) {
                return this._push(d, 1, e ? 1 : 0)
            }, f.prototype.fixed32 = function(e) {
                return this._push(E, 4, e >>> 0)
            }, f.prototype.sfixed32 = f.prototype.fixed32, f.prototype.fixed64 = function(e) {
                var t = o.from(e);
                return this._push(E, 4, t.lo)._push(E, 4, t.hi)
            }, f.prototype.sfixed64 = f.prototype.fixed64, f.prototype.float = function(e) {
                return this._push(i.float.writeFloatLE, 4, e)
            }, f.prototype.double = function(e) {
                return this._push(i.float.writeDoubleLE, 8, e)
            };
            var _ = i.Array.prototype.set ? function(e, t, r) {
                t.set(e, r)
            } : function(e, t, r) {
                for (var n = 0; n < e.length; ++n) t[r + n] = e[n]
            };
            f.prototype.bytes = function(e) {
                var t = e.length >>> 0;
                if (!t) return this._push(d, 1, 0);
                if (i.isString(e)) {
                    var r = f.alloc(t = s.length(e));
                    s.decode(e, r, 0), e = r
                }
                return this.uint32(t)._push(_, t, e)
            }, f.prototype.string = function(e) {
                var t = u.length(e);
                return t ? this.uint32(t)._push(u.write, t, e) : this._push(d, 1, 0)
            }, f.prototype.fork = function() {
                return this.states = new l(this), this.head = this.tail = new a(c, 0, 0), this.len = 0, this
            }, f.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new a(c, 0, 0), this.len = 0), this
            }, f.prototype.ldelim = function() {
                var e = this.head,
                    t = this.tail,
                    r = this.len;
                return this.reset().uint32(r), r && (this.tail.next = e.next, this.tail = t, this.len += r), this
            }, f.prototype.finish = function() {
                for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e;) e.fn(e.val, t, r), r += e.len, e = e.next;
                return t
            }, f._configure = function(e) {
                n = e, f.create = h(), n._configure()
            }
        },
        f0T6: (e, t, r) => {
            "use strict";
            e.exports = o;
            var n = r("R/rw");
            (o.prototype = Object.create(n.prototype)).constructor = o;
            var i = r("a8eG");

            function o() {
                n.call(this)
            }

            function s(e, t, r) {
                e.length < 40 ? i.utf8.write(e, t, r) : t.utf8Write ? t.utf8Write(e, r) : t.write(e, r)
            }
            o._configure = function() {
                o.alloc = i._Buffer_allocUnsafe, o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function(e, t, r) {
                    t.set(e, r)
                } : function(e, t, r) {
                    if (e.copy) e.copy(t, r, 0, e.length);
                    else
                        for (var n = 0; n < e.length;) t[r++] = e[n++]
                }
            }, o.prototype.bytes = function(e) {
                i.isString(e) && (e = i._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return this.uint32(t), t && this._push(o.writeBytesBuffer, t, e), this
            }, o.prototype.string = function(e) {
                var t = i.Buffer.byteLength(e);
                return this.uint32(t), t && this._push(s, t, e), this
            }, o._configure()
        },
        FtkP: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => s
            });
            var n = r("lAeT"),
                i = r("z+I1"),
                o = r("iLh5"),
                s = new(function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).setup = function(e) {
                            var t;
                            if (!o.S$ && (null == (t = window) ? void 0 : t.addEventListener)) {
                                var r = function() {
                                    return e()
                                };
                                return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1),
                                    function() {
                                        window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r)
                                    }
                            }
                        }, t
                    }(0, n.A)(t, e);
                    var r = t.prototype;
                    return r.onSubscribe = function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }, r.onUnsubscribe = function() {
                        var e;
                        this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
                    }, r.setEventListener = function(e) {
                        var t, r = this;
                        this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((function(e) {
                            "boolean" === typeof e ? r.setFocused(e) : r.onFocus()
                        }))
                    }, r.setFocused = function(e) {
                        this.focused = e, e && this.onFocus()
                    }, r.onFocus = function() {
                        this.listeners.forEach((function(e) {
                            e()
                        }))
                    }, r.isFocused = function() {
                        return "boolean" === typeof this.focused ? this.focused : "undefined" === typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                    }, t
                }(i.Q))
        },
        vpTH: (e, t, r) => {
            "use strict";
            r.d(t, {
                QueryClient: () => n.E
            });
            var n = r("lGK8"),
                i = r("3EYX");
            r.o(i, "QueryClientProvider") && r.d(t, {
                QueryClientProvider: function() {
                    return i.QueryClientProvider
                }
            }), r.o(i, "useMutation") && r.d(t, {
                useMutation: function() {
                    return i.useMutation
                }
            }), r.o(i, "useQuery") && r.d(t, {
                useQuery: function() {
                    return i.useQuery
                }
            }), r.o(i, "useQueryClient") && r.d(t, {
                useQueryClient: function() {
                    return i.useQueryClient
                }
            })
        },
        dZ8p: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => o,
                t: () => i
            });
            var n = console;

            function i() {
                return n
            }

            function o(e) {
                n = e
            }
        },
        XmiK: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => c,
                s: () => a
            });
            var n = r("ga4H"),
                i = r("dZ8p"),
                o = r("ag8D"),
                s = r("2N81"),
                u = r("iLh5"),
                a = function() {
                    function e(e) {
                        this.options = (0, n.A)({}, e.defaultOptions, e.options), this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.observers = [], this.state = e.state || c(), this.meta = e.meta
                    }
                    var t = e.prototype;
                    return t.setState = function(e) {
                        this.dispatch({
                            type: "setState",
                            state: e
                        })
                    }, t.addObserver = function(e) {
                        -1 === this.observers.indexOf(e) && this.observers.push(e)
                    }, t.removeObserver = function(e) {
                        this.observers = this.observers.filter((function(t) {
                            return t !== e
                        }))
                    }, t.cancel = function() {
                        return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(u.lQ).catch(u.lQ)) : Promise.resolve()
                    }, t.continue = function() {
                        return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
                    }, t.execute = function() {
                        var e, t = this,
                            r = "loading" === this.state.status,
                            n = Promise.resolve();
                        return r || (this.dispatch({
                            type: "loading",
                            variables: this.options.variables
                        }), n = n.then((function() {
                            null == t.mutationCache.config.onMutate || t.mutationCache.config.onMutate(t.state.variables, t)
                        })).then((function() {
                            return null == t.options.onMutate ? void 0 : t.options.onMutate(t.state.variables)
                        })).then((function(e) {
                            e !== t.state.context && t.dispatch({
                                type: "loading",
                                context: e,
                                variables: t.state.variables
                            })
                        }))), n.then((function() {
                            return t.executeMutation()
                        })).then((function(r) {
                            e = r, null == t.mutationCache.config.onSuccess || t.mutationCache.config.onSuccess(e, t.state.variables, t.state.context, t)
                        })).then((function() {
                            return null == t.options.onSuccess ? void 0 : t.options.onSuccess(e, t.state.variables, t.state.context)
                        })).then((function() {
                            return null == t.options.onSettled ? void 0 : t.options.onSettled(e, null, t.state.variables, t.state.context)
                        })).then((function() {
                            return t.dispatch({
                                type: "success",
                                data: e
                            }), e
                        })).catch((function(e) {
                            return null == t.mutationCache.config.onError || t.mutationCache.config.onError(e, t.state.variables, t.state.context, t), (0, i.t)().error(e), Promise.resolve().then((function() {
                                return null == t.options.onError ? void 0 : t.options.onError(e, t.state.variables, t.state.context)
                            })).then((function() {
                                return null == t.options.onSettled ? void 0 : t.options.onSettled(void 0, e, t.state.variables, t.state.context)
                            })).then((function() {
                                throw t.dispatch({
                                    type: "error",
                                    error: e
                                }), e
                            }))
                        }))
                    }, t.executeMutation = function() {
                        var e, t = this;
                        return this.retryer = new s.eJ({
                            fn: function() {
                                return t.options.mutationFn ? t.options.mutationFn(t.state.variables) : Promise.reject("No mutationFn found")
                            },
                            onFail: function() {
                                t.dispatch({
                                    type: "failed"
                                })
                            },
                            onPause: function() {
                                t.dispatch({
                                    type: "pause"
                                })
                            },
                            onContinue: function() {
                                t.dispatch({
                                    type: "continue"
                                })
                            },
                            retry: null != (e = this.options.retry) ? e : 0,
                            retryDelay: this.options.retryDelay
                        }), this.retryer.promise
                    }, t.dispatch = function(e) {
                        var t = this;
                        this.state = function(e, t) {
                            switch (t.type) {
                                case "failed":
                                    return (0, n.A)({}, e, {
                                        failureCount: e.failureCount + 1
                                    });
                                case "pause":
                                    return (0, n.A)({}, e, {
                                        isPaused: !0
                                    });
                                case "continue":
                                    return (0, n.A)({}, e, {
                                        isPaused: !1
                                    });
                                case "loading":
                                    return (0, n.A)({}, e, {
                                        context: t.context,
                                        data: void 0,
                                        error: null,
                                        isPaused: !1,
                                        status: "loading",
                                        variables: t.variables
                                    });
                                case "success":
                                    return (0, n.A)({}, e, {
                                        data: t.data,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    });
                                case "error":
                                    return (0, n.A)({}, e, {
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        isPaused: !1,
                                        status: "error"
                                    });
                                case "setState":
                                    return (0, n.A)({}, e, t.state);
                                default:
                                    return e
                            }
                        }(this.state, e), o.j.batch((function() {
                            t.observers.forEach((function(t) {
                                t.onMutationUpdate(e)
                            })), t.mutationCache.notify(t)
                        }))
                    }, e
                }();

            function c() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
        },
        ag8D: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => i
            });
            var n = r("iLh5"),
                i = new(function() {
                    function e() {
                        this.queue = [], this.transactions = 0, this.notifyFn = function(e) {
                            e()
                        }, this.batchNotifyFn = function(e) {
                            e()
                        }
                    }
                    var t = e.prototype;
                    return t.batch = function(e) {
                        var t;
                        this.transactions++;
                        try {
                            t = e()
                        } finally {
                            this.transactions--, this.transactions || this.flush()
                        }
                        return t
                    }, t.schedule = function(e) {
                        var t = this;
                        this.transactions ? this.queue.push(e) : (0, n.G6)((function() {
                            t.notifyFn(e)
                        }))
                    }, t.batchCalls = function(e) {
                        var t = this;
                        return function() {
                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                            t.schedule((function() {
                                e.apply(void 0, n)
                            }))
                        }
                    }, t.flush = function() {
                        var e = this,
                            t = this.queue;
                        this.queue = [], t.length && (0, n.G6)((function() {
                            e.batchNotifyFn((function() {
                                t.forEach((function(t) {
                                    e.notifyFn(t)
                                }))
                            }))
                        }))
                    }, t.setNotifyFunction = function(e) {
                        this.notifyFn = e
                    }, t.setBatchNotifyFunction = function(e) {
                        this.batchNotifyFn = e
                    }, e
                }())
        },
        A99o: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => s
            });
            var n = r("lAeT"),
                i = r("z+I1"),
                o = r("iLh5"),
                s = new(function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).setup = function(e) {
                            var t;
                            if (!o.S$ && (null == (t = window) ? void 0 : t.addEventListener)) {
                                var r = function() {
                                    return e()
                                };
                                return window.addEventListener("online", r, !1), window.addEventListener("offline", r, !1),
                                    function() {
                                        window.removeEventListener("online", r), window.removeEventListener("offline", r)
                                    }
                            }
                        }, t
                    }(0, n.A)(t, e);
                    var r = t.prototype;
                    return r.onSubscribe = function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }, r.onUnsubscribe = function() {
                        var e;
                        this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
                    }, r.setEventListener = function(e) {
                        var t, r = this;
                        this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((function(e) {
                            "boolean" === typeof e ? r.setOnline(e) : r.onOnline()
                        }))
                    }, r.setOnline = function(e) {
                        this.online = e, e && this.onOnline()
                    }, r.onOnline = function() {
                        this.listeners.forEach((function(e) {
                            e()
                        }))
                    }, r.isOnline = function() {
                        return "boolean" === typeof this.online ? this.online : "undefined" === typeof navigator || "undefined" === typeof navigator.onLine || navigator.onLine
                    }, t
                }(i.Q))
        },
        lGK8: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => v
            });
            var n = r("ga4H"),
                i = r("iLh5"),
                o = r("lAeT"),
                s = r("ag8D"),
                u = r("dZ8p"),
                a = r("2N81"),
                c = function() {
                    function e(e) {
                        this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = e.meta, this.scheduleGc()
                    }
                    var t = e.prototype;
                    return t.setOptions = function(e) {
                        var t;
                        this.options = (0, n.A)({}, this.defaultOptions, e), this.meta = null == e ? void 0 : e.meta, this.cacheTime = Math.max(this.cacheTime || 0, null != (t = this.options.cacheTime) ? t : 3e5)
                    }, t.setDefaultOptions = function(e) {
                        this.defaultOptions = e
                    }, t.scheduleGc = function() {
                        var e = this;
                        this.clearGcTimeout(), (0, i.gn)(this.cacheTime) && (this.gcTimeout = setTimeout((function() {
                            e.optionalRemove()
                        }), this.cacheTime))
                    }, t.clearGcTimeout = function() {
                        clearTimeout(this.gcTimeout), this.gcTimeout = void 0
                    }, t.optionalRemove = function() {
                        this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
                    }, t.setData = function(e, t) {
                        var r, n, o = this.state.data,
                            s = (0, i.Zw)(e, o);
                        return (null == (r = (n = this.options).isDataEqual) ? void 0 : r.call(n, o, s)) ? s = o : !1 !== this.options.structuralSharing && (s = (0, i.BH)(o, s)), this.dispatch({
                            data: s,
                            type: "success",
                            dataUpdatedAt: null == t ? void 0 : t.updatedAt
                        }), s
                    }, t.setState = function(e, t) {
                        this.dispatch({
                            type: "setState",
                            state: e,
                            setStateOptions: t
                        })
                    }, t.cancel = function(e) {
                        var t, r = this.promise;
                        return null == (t = this.retryer) || t.cancel(e), r ? r.then(i.lQ).catch(i.lQ) : Promise.resolve()
                    }, t.destroy = function() {
                        this.clearGcTimeout(), this.cancel({
                            silent: !0
                        })
                    }, t.reset = function() {
                        this.destroy(), this.setState(this.initialState)
                    }, t.isActive = function() {
                        return this.observers.some((function(e) {
                            return !1 !== e.options.enabled
                        }))
                    }, t.isFetching = function() {
                        return this.state.isFetching
                    }, t.isStale = function() {
                        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((function(e) {
                            return e.getCurrentResult().isStale
                        }))
                    }, t.isStaleByTime = function(e) {
                        return void 0 === e && (e = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, i.j3)(this.state.dataUpdatedAt, e)
                    }, t.onFocus = function() {
                        var e, t = this.observers.find((function(e) {
                            return e.shouldFetchOnWindowFocus()
                        }));
                        t && t.refetch(), null == (e = this.retryer) || e.continue()
                    }, t.onOnline = function() {
                        var e, t = this.observers.find((function(e) {
                            return e.shouldFetchOnReconnect()
                        }));
                        t && t.refetch(), null == (e = this.retryer) || e.continue()
                    }, t.addObserver = function(e) {
                        -1 === this.observers.indexOf(e) && (this.observers.push(e), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
                            type: "observerAdded",
                            query: this,
                            observer: e
                        }))
                    }, t.removeObserver = function(e) {
                        -1 !== this.observers.indexOf(e) && (this.observers = this.observers.filter((function(t) {
                            return t !== e
                        })), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
                            revert: !0
                        }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: e
                        }))
                    }, t.getObserversCount = function() {
                        return this.observers.length
                    }, t.invalidate = function() {
                        this.state.isInvalidated || this.dispatch({
                            type: "invalidate"
                        })
                    }, t.fetch = function(e, t) {
                        var r, n, o, s = this;
                        if (this.state.isFetching)
                            if (this.state.dataUpdatedAt && (null == t ? void 0 : t.cancelRefetch)) this.cancel({
                                silent: !0
                            });
                            else if (this.promise) {
                            var c;
                            return null == (c = this.retryer) || c.continueRetry(), this.promise
                        }
                        if (e && this.setOptions(e), !this.options.queryFn) {
                            var l = this.observers.find((function(e) {
                                return e.options.queryFn
                            }));
                            l && this.setOptions(l.options)
                        }
                        var f = (0, i.HN)(this.queryKey),
                            h = (0, i.jY)(),
                            d = {
                                queryKey: f,
                                pageParam: void 0,
                                meta: this.meta
                            };
                        Object.defineProperty(d, "signal", {
                            enumerable: !0,
                            get: function() {
                                if (h) return s.abortSignalConsumed = !0, h.signal
                            }
                        });
                        var p, y, E = {
                            fetchOptions: t,
                            options: this.options,
                            queryKey: f,
                            state: this.state,
                            fetchFn: function() {
                                return s.options.queryFn ? (s.abortSignalConsumed = !1, s.options.queryFn(d)) : Promise.reject("Missing queryFn")
                            },
                            meta: this.meta
                        };
                        (null == (r = this.options.behavior) ? void 0 : r.onFetch) && (null == (p = this.options.behavior) || p.onFetch(E));
                        (this.revertState = this.state, this.state.isFetching && this.state.fetchMeta === (null == (n = E.fetchOptions) ? void 0 : n.meta)) || this.dispatch({
                            type: "fetch",
                            meta: null == (y = E.fetchOptions) ? void 0 : y.meta
                        });
                        return this.retryer = new a.eJ({
                            fn: E.fetchFn,
                            abort: null == h || null == (o = h.abort) ? void 0 : o.bind(h),
                            onSuccess: function(e) {
                                s.setData(e), null == s.cache.config.onSuccess || s.cache.config.onSuccess(e, s), 0 === s.cacheTime && s.optionalRemove()
                            },
                            onError: function(e) {
                                (0, a.wm)(e) && e.silent || s.dispatch({
                                    type: "error",
                                    error: e
                                }), (0, a.wm)(e) || (null == s.cache.config.onError || s.cache.config.onError(e, s), (0, u.t)().error(e)), 0 === s.cacheTime && s.optionalRemove()
                            },
                            onFail: function() {
                                s.dispatch({
                                    type: "failed"
                                })
                            },
                            onPause: function() {
                                s.dispatch({
                                    type: "pause"
                                })
                            },
                            onContinue: function() {
                                s.dispatch({
                                    type: "continue"
                                })
                            },
                            retry: E.options.retry,
                            retryDelay: E.options.retryDelay
                        }), this.promise = this.retryer.promise, this.promise
                    }, t.dispatch = function(e) {
                        var t = this;
                        this.state = this.reducer(this.state, e), s.j.batch((function() {
                            t.observers.forEach((function(t) {
                                t.onQueryUpdate(e)
                            })), t.cache.notify({
                                query: t,
                                type: "queryUpdated",
                                action: e
                            })
                        }))
                    }, t.getDefaultState = function(e) {
                        var t = "function" === typeof e.initialData ? e.initialData() : e.initialData,
                            r = "undefined" !== typeof e.initialData ? "function" === typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0,
                            n = "undefined" !== typeof t;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: n ? null != r ? r : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchMeta: null,
                            isFetching: !1,
                            isInvalidated: !1,
                            isPaused: !1,
                            status: n ? "success" : "idle"
                        }
                    }, t.reducer = function(e, t) {
                        var r, i;
                        switch (t.type) {
                            case "failed":
                                return (0, n.A)({}, e, {
                                    fetchFailureCount: e.fetchFailureCount + 1
                                });
                            case "pause":
                                return (0, n.A)({}, e, {
                                    isPaused: !0
                                });
                            case "continue":
                                return (0, n.A)({}, e, {
                                    isPaused: !1
                                });
                            case "fetch":
                                return (0, n.A)({}, e, {
                                    fetchFailureCount: 0,
                                    fetchMeta: null != (r = t.meta) ? r : null,
                                    isFetching: !0,
                                    isPaused: !1
                                }, !e.dataUpdatedAt && {
                                    error: null,
                                    status: "loading"
                                });
                            case "success":
                                return (0, n.A)({}, e, {
                                    data: t.data,
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (i = t.dataUpdatedAt) ? i : Date.now(),
                                    error: null,
                                    fetchFailureCount: 0,
                                    isFetching: !1,
                                    isInvalidated: !1,
                                    isPaused: !1,
                                    status: "success"
                                });
                            case "error":
                                var o = t.error;
                                return (0, a.wm)(o) && o.revert && this.revertState ? (0, n.A)({}, this.revertState) : (0, n.A)({}, e, {
                                    error: o,
                                    errorUpdateCount: e.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: e.fetchFailureCount + 1,
                                    isFetching: !1,
                                    isPaused: !1,
                                    status: "error"
                                });
                            case "invalidate":
                                return (0, n.A)({}, e, {
                                    isInvalidated: !0
                                });
                            case "setState":
                                return (0, n.A)({}, e, t.state);
                            default:
                                return e
                        }
                    }, e
                }(),
                l = r("z+I1"),
                f = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this) || this).config = t || {}, r.queries = [], r.queriesMap = {}, r
                    }(0, o.A)(t, e);
                    var r = t.prototype;
                    return r.build = function(e, t, r) {
                        var n, o = t.queryKey,
                            s = null != (n = t.queryHash) ? n : (0, i.F$)(o, t),
                            u = this.get(s);
                        return u || (u = new c({
                            cache: this,
                            queryKey: o,
                            queryHash: s,
                            options: e.defaultQueryOptions(t),
                            state: r,
                            defaultOptions: e.getQueryDefaults(o),
                            meta: t.meta
                        }), this.add(u)), u
                    }, r.add = function(e) {
                        this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                            type: "queryAdded",
                            query: e
                        }))
                    }, r.remove = function(e) {
                        var t = this.queriesMap[e.queryHash];
                        t && (e.destroy(), this.queries = this.queries.filter((function(t) {
                            return t !== e
                        })), t === e && delete this.queriesMap[e.queryHash], this.notify({
                            type: "queryRemoved",
                            query: e
                        }))
                    }, r.clear = function() {
                        var e = this;
                        s.j.batch((function() {
                            e.queries.forEach((function(t) {
                                e.remove(t)
                            }))
                        }))
                    }, r.get = function(e) {
                        return this.queriesMap[e]
                    }, r.getAll = function() {
                        return this.queries
                    }, r.find = function(e, t) {
                        var r = (0, i.b_)(e, t)[0];
                        return "undefined" === typeof r.exact && (r.exact = !0), this.queries.find((function(e) {
                            return (0, i.MK)(r, e)
                        }))
                    }, r.findAll = function(e, t) {
                        var r = (0, i.b_)(e, t)[0];
                        return Object.keys(r).length > 0 ? this.queries.filter((function(e) {
                            return (0, i.MK)(r, e)
                        })) : this.queries
                    }, r.notify = function(e) {
                        var t = this;
                        s.j.batch((function() {
                            t.listeners.forEach((function(t) {
                                t(e)
                            }))
                        }))
                    }, r.onFocus = function() {
                        var e = this;
                        s.j.batch((function() {
                            e.queries.forEach((function(e) {
                                e.onFocus()
                            }))
                        }))
                    }, r.onOnline = function() {
                        var e = this;
                        s.j.batch((function() {
                            e.queries.forEach((function(e) {
                                e.onOnline()
                            }))
                        }))
                    }, t
                }(l.Q),
                h = r("XmiK"),
                d = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this) || this).config = t || {}, r.mutations = [], r.mutationId = 0, r
                    }(0, o.A)(t, e);
                    var r = t.prototype;
                    return r.build = function(e, t, r) {
                        var n = new h.s({
                            mutationCache: this,
                            mutationId: ++this.mutationId,
                            options: e.defaultMutationOptions(t),
                            state: r,
                            defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0,
                            meta: t.meta
                        });
                        return this.add(n), n
                    }, r.add = function(e) {
                        this.mutations.push(e), this.notify(e)
                    }, r.remove = function(e) {
                        this.mutations = this.mutations.filter((function(t) {
                            return t !== e
                        })), e.cancel(), this.notify(e)
                    }, r.clear = function() {
                        var e = this;
                        s.j.batch((function() {
                            e.mutations.forEach((function(t) {
                                e.remove(t)
                            }))
                        }))
                    }, r.getAll = function() {
                        return this.mutations
                    }, r.find = function(e) {
                        return "undefined" === typeof e.exact && (e.exact = !0), this.mutations.find((function(t) {
                            return (0, i.nJ)(e, t)
                        }))
                    }, r.findAll = function(e) {
                        return this.mutations.filter((function(t) {
                            return (0, i.nJ)(e, t)
                        }))
                    }, r.notify = function(e) {
                        var t = this;
                        s.j.batch((function() {
                            t.listeners.forEach((function(t) {
                                t(e)
                            }))
                        }))
                    }, r.onFocus = function() {
                        this.resumePausedMutations()
                    }, r.onOnline = function() {
                        this.resumePausedMutations()
                    }, r.resumePausedMutations = function() {
                        var e = this.mutations.filter((function(e) {
                            return e.state.isPaused
                        }));
                        return s.j.batch((function() {
                            return e.reduce((function(e, t) {
                                return e.then((function() {
                                    return t.continue().catch(i.lQ)
                                }))
                            }), Promise.resolve())
                        }))
                    }, t
                }(l.Q),
                p = r("FtkP"),
                y = r("A99o");

            function E(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function _(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }
            var v = function() {
                function e(e) {
                    void 0 === e && (e = {}), this.queryCache = e.queryCache || new f, this.mutationCache = e.mutationCache || new d, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
                }
                var t = e.prototype;
                return t.mount = function() {
                    var e = this;
                    this.unsubscribeFocus = p.m.subscribe((function() {
                        p.m.isFocused() && y.t.isOnline() && (e.mutationCache.onFocus(), e.queryCache.onFocus())
                    })), this.unsubscribeOnline = y.t.subscribe((function() {
                        p.m.isFocused() && y.t.isOnline() && (e.mutationCache.onOnline(), e.queryCache.onOnline())
                    }))
                }, t.unmount = function() {
                    var e, t;
                    null == (e = this.unsubscribeFocus) || e.call(this), null == (t = this.unsubscribeOnline) || t.call(this)
                }, t.isFetching = function(e, t) {
                    var r = (0, i.b_)(e, t)[0];
                    return r.fetching = !0, this.queryCache.findAll(r).length
                }, t.isMutating = function(e) {
                    return this.mutationCache.findAll((0, n.A)({}, e, {
                        fetching: !0
                    })).length
                }, t.getQueryData = function(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state.data
                }, t.getQueriesData = function(e) {
                    return this.getQueryCache().findAll(e).map((function(e) {
                        return [e.queryKey, e.state.data]
                    }))
                }, t.setQueryData = function(e, t, r) {
                    var n = (0, i.vh)(e),
                        o = this.defaultQueryOptions(n);
                    return this.queryCache.build(this, o).setData(t, r)
                }, t.setQueriesData = function(e, t, r) {
                    var n = this;
                    return s.j.batch((function() {
                        return n.getQueryCache().findAll(e).map((function(e) {
                            var i = e.queryKey;
                            return [i, n.setQueryData(i, t, r)]
                        }))
                    }))
                }, t.getQueryState = function(e, t) {
                    var r;
                    return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state
                }, t.removeQueries = function(e, t) {
                    var r = (0, i.b_)(e, t)[0],
                        n = this.queryCache;
                    s.j.batch((function() {
                        n.findAll(r).forEach((function(e) {
                            n.remove(e)
                        }))
                    }))
                }, t.resetQueries = function(e, t, r) {
                    var o = this,
                        u = (0, i.b_)(e, t, r),
                        a = u[0],
                        c = u[1],
                        l = this.queryCache,
                        f = (0, n.A)({}, a, {
                            active: !0
                        });
                    return s.j.batch((function() {
                        return l.findAll(a).forEach((function(e) {
                            e.reset()
                        })), o.refetchQueries(f, c)
                    }))
                }, t.cancelQueries = function(e, t, r) {
                    var n = this,
                        o = (0, i.b_)(e, t, r),
                        u = o[0],
                        a = o[1],
                        c = void 0 === a ? {} : a;
                    "undefined" === typeof c.revert && (c.revert = !0);
                    var l = s.j.batch((function() {
                        return n.queryCache.findAll(u).map((function(e) {
                            return e.cancel(c)
                        }))
                    }));
                    return Promise.all(l).then(i.lQ).catch(i.lQ)
                }, t.invalidateQueries = function(e, t, r) {
                    var o, u, a, c = this,
                        l = (0, i.b_)(e, t, r),
                        f = l[0],
                        h = l[1],
                        d = (0, n.A)({}, f, {
                            active: null == (o = null != (u = f.refetchActive) ? u : f.active) || o,
                            inactive: null != (a = f.refetchInactive) && a
                        });
                    return s.j.batch((function() {
                        return c.queryCache.findAll(f).forEach((function(e) {
                            e.invalidate()
                        })), c.refetchQueries(d, h)
                    }))
                }, t.refetchQueries = function(e, t, r) {
                    var o = this,
                        u = (0, i.b_)(e, t, r),
                        a = u[0],
                        c = u[1],
                        l = s.j.batch((function() {
                            return o.queryCache.findAll(a).map((function(e) {
                                return e.fetch(void 0, (0, n.A)({}, c, {
                                    meta: {
                                        refetchPage: null == a ? void 0 : a.refetchPage
                                    }
                                }))
                            }))
                        })),
                        f = Promise.all(l).then(i.lQ);
                    return (null == c ? void 0 : c.throwOnError) || (f = f.catch(i.lQ)), f
                }, t.fetchQuery = function(e, t, r) {
                    var n = (0, i.vh)(e, t, r),
                        o = this.defaultQueryOptions(n);
                    "undefined" === typeof o.retry && (o.retry = !1);
                    var s = this.queryCache.build(this, o);
                    return s.isStaleByTime(o.staleTime) ? s.fetch(o) : Promise.resolve(s.state.data)
                }, t.prefetchQuery = function(e, t, r) {
                    return this.fetchQuery(e, t, r).then(i.lQ).catch(i.lQ)
                }, t.fetchInfiniteQuery = function(e, t, r) {
                    var n = (0, i.vh)(e, t, r);
                    return n.behavior = {
                        onFetch: function(e) {
                            e.fetchFn = function() {
                                var t, r, n, o, s, u, c, l = null == (t = e.fetchOptions) || null == (r = t.meta) ? void 0 : r.refetchPage,
                                    f = null == (n = e.fetchOptions) || null == (o = n.meta) ? void 0 : o.fetchMore,
                                    h = null == f ? void 0 : f.pageParam,
                                    d = "forward" === (null == f ? void 0 : f.direction),
                                    p = "backward" === (null == f ? void 0 : f.direction),
                                    y = (null == (s = e.state.data) ? void 0 : s.pages) || [],
                                    v = (null == (u = e.state.data) ? void 0 : u.pageParams) || [],
                                    g = (0, i.jY)(),
                                    m = null == g ? void 0 : g.signal,
                                    T = v,
                                    R = !1,
                                    S = e.options.queryFn || function() {
                                        return Promise.reject("Missing queryFn")
                                    },
                                    b = function(e, t, r, n) {
                                        return T = n ? [t].concat(T) : [].concat(T, [t]), n ? [r].concat(e) : [].concat(e, [r])
                                    },
                                    A = function(t, r, n, i) {
                                        if (R) return Promise.reject("Cancelled");
                                        if ("undefined" === typeof n && !r && t.length) return Promise.resolve(t);
                                        var o = {
                                                queryKey: e.queryKey,
                                                signal: m,
                                                pageParam: n,
                                                meta: e.meta
                                            },
                                            s = S(o),
                                            u = Promise.resolve(s).then((function(e) {
                                                return b(t, n, e, i)
                                            }));
                                        return (0, a.dd)(s) && (u.cancel = s.cancel), u
                                    };
                                if (y.length)
                                    if (d) {
                                        var O = "undefined" !== typeof h,
                                            B = O ? h : E(e.options, y);
                                        c = A(y, O, B)
                                    } else if (p) {
                                    var C = "undefined" !== typeof h,
                                        D = C ? h : _(e.options, y);
                                    c = A(y, C, D, !0)
                                } else ! function() {
                                    T = [];
                                    var t = "undefined" === typeof e.options.getNextPageParam,
                                        r = !l || !y[0] || l(y[0], 0, y);
                                    c = r ? A([], t, v[0]) : Promise.resolve(b([], v[0], y[0]));
                                    for (var n = function(r) {
                                            c = c.then((function(n) {
                                                if (!l || !y[r] || l(y[r], r, y)) {
                                                    var i = t ? v[r] : E(e.options, n);
                                                    return A(n, t, i)
                                                }
                                                return Promise.resolve(b(n, v[r], y[r]))
                                            }))
                                        }, i = 1; i < y.length; i++) n(i)
                                }();
                                else c = A([]);
                                var I = c.then((function(e) {
                                    return {
                                        pages: e,
                                        pageParams: T
                                    }
                                }));
                                return I.cancel = function() {
                                    R = !0, null == g || g.abort(), (0, a.dd)(c) && c.cancel()
                                }, I
                            }
                        }
                    }, this.fetchQuery(n)
                }, t.prefetchInfiniteQuery = function(e, t, r) {
                    return this.fetchInfiniteQuery(e, t, r).then(i.lQ).catch(i.lQ)
                }, t.cancelMutations = function() {
                    var e = this,
                        t = s.j.batch((function() {
                            return e.mutationCache.getAll().map((function(e) {
                                return e.cancel()
                            }))
                        }));
                    return Promise.all(t).then(i.lQ).catch(i.lQ)
                }, t.resumePausedMutations = function() {
                    return this.getMutationCache().resumePausedMutations()
                }, t.executeMutation = function(e) {
                    return this.mutationCache.build(this, e).execute()
                }, t.getQueryCache = function() {
                    return this.queryCache
                }, t.getMutationCache = function() {
                    return this.mutationCache
                }, t.getDefaultOptions = function() {
                    return this.defaultOptions
                }, t.setDefaultOptions = function(e) {
                    this.defaultOptions = e
                }, t.setQueryDefaults = function(e, t) {
                    var r = this.queryDefaults.find((function(t) {
                        return (0, i.Od)(e) === (0, i.Od)(t.queryKey)
                    }));
                    r ? r.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }, t.getQueryDefaults = function(e) {
                    var t;
                    return e ? null == (t = this.queryDefaults.find((function(t) {
                        return (0, i.Cp)(e, t.queryKey)
                    }))) ? void 0 : t.defaultOptions : void 0
                }, t.setMutationDefaults = function(e, t) {
                    var r = this.mutationDefaults.find((function(t) {
                        return (0, i.Od)(e) === (0, i.Od)(t.mutationKey)
                    }));
                    r ? r.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }, t.getMutationDefaults = function(e) {
                    var t;
                    return e ? null == (t = this.mutationDefaults.find((function(t) {
                        return (0, i.Cp)(e, t.mutationKey)
                    }))) ? void 0 : t.defaultOptions : void 0
                }, t.defaultQueryOptions = function(e) {
                    if (null == e ? void 0 : e._defaulted) return e;
                    var t = (0, n.A)({}, this.defaultOptions.queries, this.getQueryDefaults(null == e ? void 0 : e.queryKey), e, {
                        _defaulted: !0
                    });
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, i.F$)(t.queryKey, t)), t
                }, t.defaultQueryObserverOptions = function(e) {
                    return this.defaultQueryOptions(e)
                }, t.defaultMutationOptions = function(e) {
                    return (null == e ? void 0 : e._defaulted) ? e : (0, n.A)({}, this.defaultOptions.mutations, this.getMutationDefaults(null == e ? void 0 : e.mutationKey), e, {
                        _defaulted: !0
                    })
                }, t.clear = function() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }, e
            }()
        },
        "2N81": (e, t, r) => {
            "use strict";
            r.d(t, {
                dd: () => u,
                eJ: () => l,
                wm: () => c
            });
            var n = r("FtkP"),
                i = r("A99o"),
                o = r("iLh5");

            function s(e) {
                return Math.min(1e3 * Math.pow(2, e), 3e4)
            }

            function u(e) {
                return "function" === typeof(null == e ? void 0 : e.cancel)
            }
            var a = function(e) {
                this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
            };

            function c(e) {
                return e instanceof a
            }
            var l = function(e) {
                var t, r, c, l, f = this,
                    h = !1;
                this.abort = e.abort, this.cancel = function(e) {
                    return null == t ? void 0 : t(e)
                }, this.cancelRetry = function() {
                    h = !0
                }, this.continueRetry = function() {
                    h = !1
                }, this.continue = function() {
                    return null == r ? void 0 : r()
                }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise((function(e, t) {
                    c = e, l = t
                }));
                var d = function(t) {
                        f.isResolved || (f.isResolved = !0, null == e.onSuccess || e.onSuccess(t), null == r || r(), c(t))
                    },
                    p = function(t) {
                        f.isResolved || (f.isResolved = !0, null == e.onError || e.onError(t), null == r || r(), l(t))
                    };
                ! function c() {
                    if (!f.isResolved) {
                        var l;
                        try {
                            l = e.fn()
                        } catch (y) {
                            l = Promise.reject(y)
                        }
                        t = function(e) {
                            if (!f.isResolved && (p(new a(e)), null == f.abort || f.abort(), u(l))) try {
                                l.cancel()
                            } catch (t) {}
                        }, f.isTransportCancelable = u(l), Promise.resolve(l).then(d).catch((function(t) {
                            var u, a;
                            if (!f.isResolved) {
                                var l = null != (u = e.retry) ? u : 3,
                                    d = null != (a = e.retryDelay) ? a : s,
                                    y = "function" === typeof d ? d(f.failureCount, t) : d,
                                    E = !0 === l || "number" === typeof l && f.failureCount < l || "function" === typeof l && l(f.failureCount, t);
                                !h && E ? (f.failureCount++, null == e.onFail || e.onFail(f.failureCount, t), (0, o.yy)(y).then((function() {
                                    if (!n.m.isFocused() || !i.t.isOnline()) return new Promise((function(t) {
                                        r = t, f.isPaused = !0, null == e.onPause || e.onPause()
                                    })).then((function() {
                                        r = void 0, f.isPaused = !1, null == e.onContinue || e.onContinue()
                                    }))
                                })).then((function() {
                                    h ? p(t) : c()
                                }))) : p(t)
                            }
                        }))
                    }
                }()
            }
        },
        "z+I1": (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => n
            });
            var n = function() {
                function e() {
                    this.listeners = []
                }
                var t = e.prototype;
                return t.subscribe = function(e) {
                    var t = this,
                        r = e || function() {};
                    return this.listeners.push(r), this.onSubscribe(),
                        function() {
                            t.listeners = t.listeners.filter((function(e) {
                                return e !== r
                            })), t.onUnsubscribe()
                        }
                }, t.hasListeners = function() {
                    return this.listeners.length > 0
                }, t.onSubscribe = function() {}, t.onUnsubscribe = function() {}, e
            }()
        },
        "3EYX": () => {},
        iLh5: (e, t, r) => {
            "use strict";
            r.d(t, {
                BH: () => g,
                Cp: () => _,
                F$: () => y,
                G6: () => A,
                GR: () => f,
                HN: () => a,
                MK: () => d,
                Od: () => E,
                S$: () => i,
                Zw: () => s,
                b_: () => h,
                f8: () => m,
                gn: () => u,
                j3: () => c,
                jY: () => O,
                lQ: () => o,
                nJ: () => p,
                vh: () => l,
                yy: () => b
            });
            var n = r("ga4H"),
                i = "undefined" === typeof window;

            function o() {}

            function s(e, t) {
                return "function" === typeof e ? e(t) : e
            }

            function u(e) {
                return "number" === typeof e && e >= 0 && e !== 1 / 0
            }

            function a(e) {
                return Array.isArray(e) ? e : [e]
            }

            function c(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function l(e, t, r) {
                return S(e) ? "function" === typeof t ? (0, n.A)({}, r, {
                    queryKey: e,
                    queryFn: t
                }) : (0, n.A)({}, t, {
                    queryKey: e
                }) : e
            }

            function f(e, t, r) {
                return S(e) ? "function" === typeof t ? (0, n.A)({}, r, {
                    mutationKey: e,
                    mutationFn: t
                }) : (0, n.A)({}, t, {
                    mutationKey: e
                }) : "function" === typeof e ? (0, n.A)({}, t, {
                    mutationFn: e
                }) : (0, n.A)({}, e)
            }

            function h(e, t, r) {
                return S(e) ? [(0, n.A)({}, t, {
                    queryKey: e
                }), r] : [e || {}, t]
            }

            function d(e, t) {
                var r = e.active,
                    n = e.exact,
                    i = e.fetching,
                    o = e.inactive,
                    s = e.predicate,
                    u = e.queryKey,
                    a = e.stale;
                if (S(u))
                    if (n) {
                        if (t.queryHash !== y(u, t.options)) return !1
                    } else if (!_(t.queryKey, u)) return !1;
                var c = function(e, t) {
                    return !0 === e && !0 === t || null == e && null == t ? "all" : !1 === e && !1 === t ? "none" : (null != e ? e : !t) ? "active" : "inactive"
                }(r, o);
                if ("none" === c) return !1;
                if ("all" !== c) {
                    var l = t.isActive();
                    if ("active" === c && !l) return !1;
                    if ("inactive" === c && l) return !1
                }
                return ("boolean" !== typeof a || t.isStale() === a) && (("boolean" !== typeof i || t.isFetching() === i) && !(s && !s(t)))
            }

            function p(e, t) {
                var r = e.exact,
                    n = e.fetching,
                    i = e.predicate,
                    o = e.mutationKey;
                if (S(o)) {
                    if (!t.options.mutationKey) return !1;
                    if (r) {
                        if (E(t.options.mutationKey) !== E(o)) return !1
                    } else if (!_(t.options.mutationKey, o)) return !1
                }
                return ("boolean" !== typeof n || "loading" === t.state.status === n) && !(i && !i(t))
            }

            function y(e, t) {
                return ((null == t ? void 0 : t.queryKeyHashFn) || E)(e)
            }

            function E(e) {
                var t, r = a(e);
                return t = r, JSON.stringify(t, (function(e, t) {
                    return T(t) ? Object.keys(t).sort().reduce((function(e, r) {
                        return e[r] = t[r], e
                    }), {}) : t
                }))
            }

            function _(e, t) {
                return v(a(e), a(t))
            }

            function v(e, t) {
                return e === t || typeof e === typeof t && (!(!e || !t || "object" !== typeof e || "object" !== typeof t) && !Object.keys(t).some((function(r) {
                    return !v(e[r], t[r])
                })))
            }

            function g(e, t) {
                if (e === t) return e;
                var r = Array.isArray(e) && Array.isArray(t);
                if (r || T(e) && T(t)) {
                    for (var n = r ? e.length : Object.keys(e).length, i = r ? t : Object.keys(t), o = i.length, s = r ? [] : {}, u = 0, a = 0; a < o; a++) {
                        var c = r ? a : i[a];
                        s[c] = g(e[c], t[c]), s[c] === e[c] && u++
                    }
                    return n === o && u === n ? e : s
                }
                return t
            }

            function m(e, t) {
                if (e && !t || t && !e) return !1;
                for (var r in e)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function T(e) {
                if (!R(e)) return !1;
                var t = e.constructor;
                if ("undefined" === typeof t) return !0;
                var r = t.prototype;
                return !!R(r) && !!r.hasOwnProperty("isPrototypeOf")
            }

            function R(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function S(e) {
                return "string" === typeof e || Array.isArray(e)
            }

            function b(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }

            function A(e) {
                Promise.resolve().then(e).catch((function(e) {
                    return setTimeout((function() {
                        throw e
                    }))
                }))
            }

            function O() {
                if ("function" === typeof AbortController) return new AbortController
            }
        },
        "4hgs": (e, t, r) => {
            "use strict";
            r.d(t, {
                QueryClient: () => n.QueryClient,
                QueryClientProvider: () => i.QueryClientProvider,
                useMutation: () => i.useMutation,
                useQuery: () => i.useQuery,
                useQueryClient: () => i.useQueryClient
            });
            var n = r("vpTH");
            r.o(n, "QueryClientProvider") && r.d(t, {
                QueryClientProvider: function() {
                    return n.QueryClientProvider
                }
            }), r.o(n, "useMutation") && r.d(t, {
                useMutation: function() {
                    return n.useMutation
                }
            }), r.o(n, "useQuery") && r.d(t, {
                useQuery: function() {
                    return n.useQuery
                }
            }), r.o(n, "useQueryClient") && r.d(t, {
                useQueryClient: function() {
                    return n.useQueryClient
                }
            });
            var i = r("rS2p")
        },
        rS2p: (e, t, r) => {
            "use strict";
            r.d(t, {
                QueryClientProvider: () => p,
                useMutation: () => R,
                useQuery: () => U,
                useQueryClient: () => d
            });
            var n = r("ag8D"),
                i = r("hTvQ"),
                o = r.n(i)().unstable_batchedUpdates;
            n.j.setBatchNotifyFunction(o);
            var s = r("dZ8p"),
                u = console;
            (0, s.B)(u);
            var a = r("DTvD"),
                c = r.n(a),
                l = c().createContext(void 0),
                f = c().createContext(!1);

            function h(e) {
                return e && "undefined" !== typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = l), window.ReactQueryClientContext) : l
            }
            var d = function() {
                    var e = c().useContext(h(c().useContext(f)));
                    if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                p = function(e) {
                    var t = e.client,
                        r = e.contextSharing,
                        n = void 0 !== r && r,
                        i = e.children;
                    c().useEffect((function() {
                        return t.mount(),
                            function() {
                                t.unmount()
                            }
                    }), [t]);
                    var o = h(n);
                    return c().createElement(f.Provider, {
                        value: n
                    }, c().createElement(o.Provider, {
                        value: t
                    }, i))
                },
                y = r("ga4H"),
                E = r("iLh5"),
                _ = r("lAeT"),
                v = r("XmiK"),
                g = r("z+I1"),
                m = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this) || this).client = t, n.setOptions(r), n.bindMethods(), n.updateResult(), n
                    }(0, _.A)(t, e);
                    var r = t.prototype;
                    return r.bindMethods = function() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }, r.setOptions = function(e) {
                        this.options = this.client.defaultMutationOptions(e)
                    }, r.onUnsubscribe = function() {
                        var e;
                        this.listeners.length || (null == (e = this.currentMutation) || e.removeObserver(this))
                    }, r.onMutationUpdate = function(e) {
                        this.updateResult();
                        var t = {
                            listeners: !0
                        };
                        "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                    }, r.getCurrentResult = function() {
                        return this.currentResult
                    }, r.reset = function() {
                        this.currentMutation = void 0, this.updateResult(), this.notify({
                            listeners: !0
                        })
                    }, r.mutate = function(e, t) {
                        return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, (0, y.A)({}, this.options, {
                            variables: "undefined" !== typeof e ? e : this.options.variables
                        })), this.currentMutation.addObserver(this), this.currentMutation.execute()
                    }, r.updateResult = function() {
                        var e = this.currentMutation ? this.currentMutation.state : (0, v.$)(),
                            t = (0, y.A)({}, e, {
                                isLoading: "loading" === e.status,
                                isSuccess: "success" === e.status,
                                isError: "error" === e.status,
                                isIdle: "idle" === e.status,
                                mutate: this.mutate,
                                reset: this.reset
                            });
                        this.currentResult = t
                    }, r.notify = function(e) {
                        var t = this;
                        n.j.batch((function() {
                            t.mutateOptions && (e.onSuccess ? (null == t.mutateOptions.onSuccess || t.mutateOptions.onSuccess(t.currentResult.data, t.currentResult.variables, t.currentResult.context), null == t.mutateOptions.onSettled || t.mutateOptions.onSettled(t.currentResult.data, null, t.currentResult.variables, t.currentResult.context)) : e.onError && (null == t.mutateOptions.onError || t.mutateOptions.onError(t.currentResult.error, t.currentResult.variables, t.currentResult.context), null == t.mutateOptions.onSettled || t.mutateOptions.onSettled(void 0, t.currentResult.error, t.currentResult.variables, t.currentResult.context))), e.listeners && t.listeners.forEach((function(e) {
                                e(t.currentResult)
                            }))
                        }))
                    }, t
                }(g.Q);

            function T(e, t, r) {
                return "function" === typeof t ? t.apply(void 0, r) : "boolean" === typeof t ? t : !!e
            }

            function R(e, t, r) {
                var i = c().useRef(!1),
                    o = c().useState(0)[1],
                    s = (0, E.GR)(e, t, r),
                    u = d(),
                    a = c().useRef();
                a.current ? a.current.setOptions(s) : a.current = new m(u, s);
                var l = a.current.getCurrentResult();
                c().useEffect((function() {
                    i.current = !0;
                    var e = a.current.subscribe(n.j.batchCalls((function() {
                        i.current && o((function(e) {
                            return e + 1
                        }))
                    })));
                    return function() {
                        i.current = !1, e()
                    }
                }), []);
                var f = c().useCallback((function(e, t) {
                    a.current.mutate(e, t).catch(E.lQ)
                }), []);
                if (l.error && T(void 0, a.current.options.useErrorBoundary, [l.error])) throw l.error;
                return (0, y.A)({}, l, {
                    mutate: f,
                    mutateAsync: l.mutate
                })
            }
            var S = r("FtkP"),
                b = r("2N81"),
                A = function(e) {
                    function t(t, r) {
                        var n;
                        return (n = e.call(this) || this).client = t, n.options = r, n.trackedProps = [], n.previousSelectError = null, n.bindMethods(), n.setOptions(r), n
                    }(0, _.A)(t, e);
                    var r = t.prototype;
                    return r.bindMethods = function() {
                        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                    }, r.onSubscribe = function() {
                        1 === this.listeners.length && (this.currentQuery.addObserver(this), O(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                    }, r.onUnsubscribe = function() {
                        this.listeners.length || this.destroy()
                    }, r.shouldFetchOnReconnect = function() {
                        return e = this.currentQuery, !1 !== (t = this.options).enabled && ("always" === t.refetchOnReconnect || !1 !== t.refetchOnReconnect && C(e, t));
                        var e, t
                    }, r.shouldFetchOnWindowFocus = function() {
                        return e = this.currentQuery, !1 !== (t = this.options).enabled && ("always" === t.refetchOnWindowFocus || !1 !== t.refetchOnWindowFocus && C(e, t));
                        var e, t
                    }, r.destroy = function() {
                        this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this)
                    }, r.setOptions = function(e, t) {
                        var r = this.options,
                            n = this.currentQuery;
                        if (this.options = this.client.defaultQueryObserverOptions(e), "undefined" !== typeof this.options.enabled && "boolean" !== typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
                        this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                        var i = this.hasListeners();
                        i && B(this.currentQuery, n, this.options, r) && this.executeFetch(), this.updateResult(t), !i || this.currentQuery === n && this.options.enabled === r.enabled && this.options.staleTime === r.staleTime || this.updateStaleTimeout();
                        var o = this.computeRefetchInterval();
                        !i || this.currentQuery === n && this.options.enabled === r.enabled && o === this.currentRefetchInterval || this.updateRefetchInterval(o)
                    }, r.getOptimisticResult = function(e) {
                        var t = this.client.defaultQueryObserverOptions(e),
                            r = this.client.getQueryCache().build(this.client, t);
                        return this.createResult(r, t)
                    }, r.getCurrentResult = function() {
                        return this.currentResult
                    }, r.trackResult = function(e, t) {
                        var r = this,
                            n = {},
                            i = function(e) {
                                r.trackedProps.includes(e) || r.trackedProps.push(e)
                            };
                        return Object.keys(e).forEach((function(t) {
                            Object.defineProperty(n, t, {
                                configurable: !1,
                                enumerable: !0,
                                get: function() {
                                    return i(t), e[t]
                                }
                            })
                        })), (t.useErrorBoundary || t.suspense) && i("error"), n
                    }, r.getNextResult = function(e) {
                        var t = this;
                        return new Promise((function(r, n) {
                            var i = t.subscribe((function(t) {
                                t.isFetching || (i(), t.isError && (null == e ? void 0 : e.throwOnError) ? n(t.error) : r(t))
                            }))
                        }))
                    }, r.getCurrentQuery = function() {
                        return this.currentQuery
                    }, r.remove = function() {
                        this.client.getQueryCache().remove(this.currentQuery)
                    }, r.refetch = function(e) {
                        return this.fetch((0, y.A)({}, e, {
                            meta: {
                                refetchPage: null == e ? void 0 : e.refetchPage
                            }
                        }))
                    }, r.fetchOptimistic = function(e) {
                        var t = this,
                            r = this.client.defaultQueryObserverOptions(e),
                            n = this.client.getQueryCache().build(this.client, r);
                        return n.fetch().then((function() {
                            return t.createResult(n, r)
                        }))
                    }, r.fetch = function(e) {
                        var t = this;
                        return this.executeFetch(e).then((function() {
                            return t.updateResult(), t.currentResult
                        }))
                    }, r.executeFetch = function(e) {
                        this.updateQuery();
                        var t = this.currentQuery.fetch(this.options, e);
                        return (null == e ? void 0 : e.throwOnError) || (t = t.catch(E.lQ)), t
                    }, r.updateStaleTimeout = function() {
                        var e = this;
                        if (this.clearStaleTimeout(), !E.S$ && !this.currentResult.isStale && (0, E.gn)(this.options.staleTime)) {
                            var t = (0, E.j3)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                            this.staleTimeoutId = setTimeout((function() {
                                e.currentResult.isStale || e.updateResult()
                            }), t)
                        }
                    }, r.computeRefetchInterval = function() {
                        var e;
                        return "function" === typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                    }, r.updateRefetchInterval = function(e) {
                        var t = this;
                        this.clearRefetchInterval(), this.currentRefetchInterval = e, !E.S$ && !1 !== this.options.enabled && (0, E.gn)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((function() {
                            (t.options.refetchIntervalInBackground || S.m.isFocused()) && t.executeFetch()
                        }), this.currentRefetchInterval))
                    }, r.updateTimers = function() {
                        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                    }, r.clearTimers = function() {
                        this.clearStaleTimeout(), this.clearRefetchInterval()
                    }, r.clearStaleTimeout = function() {
                        clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0
                    }, r.clearRefetchInterval = function() {
                        clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0
                    }, r.createResult = function(e, t) {
                        var r, n = this.currentQuery,
                            i = this.options,
                            o = this.currentResult,
                            u = this.currentResultState,
                            a = this.currentResultOptions,
                            c = e !== n,
                            l = c ? e.state : this.currentQueryInitialState,
                            f = c ? this.currentResult : this.previousQueryResult,
                            h = e.state,
                            d = h.dataUpdatedAt,
                            p = h.error,
                            y = h.errorUpdatedAt,
                            _ = h.isFetching,
                            v = h.status,
                            g = !1,
                            m = !1;
                        if (t.optimisticResults) {
                            var T = this.hasListeners(),
                                R = !T && O(e, t),
                                S = T && B(e, n, t, i);
                            (R || S) && (_ = !0, d || (v = "loading"))
                        }
                        if (t.keepPreviousData && !h.dataUpdateCount && (null == f ? void 0 : f.isSuccess) && "error" !== v) r = f.data, d = f.dataUpdatedAt, v = f.status, g = !0;
                        else if (t.select && "undefined" !== typeof h.data) {
                            var b;
                            if (o && h.data === (null == u ? void 0 : u.data) && t.select === (null == (b = this.previousSelect) ? void 0 : b.fn) && !this.previousSelectError) r = this.previousSelect.result;
                            else try {
                                r = t.select(h.data), !1 !== t.structuralSharing && (r = (0, E.BH)(null == o ? void 0 : o.data, r)), this.previousSelect = {
                                    fn: t.select,
                                    result: r
                                }, this.previousSelectError = null
                            } catch (D) {
                                (0, s.t)().error(D), p = D, this.previousSelectError = D, y = Date.now(), v = "error"
                            }
                        } else r = h.data;
                        if ("undefined" !== typeof t.placeholderData && "undefined" === typeof r && ("loading" === v || "idle" === v)) {
                            var A;
                            if ((null == o ? void 0 : o.isPlaceholderData) && t.placeholderData === (null == a ? void 0 : a.placeholderData)) A = o.data;
                            else if (A = "function" === typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && "undefined" !== typeof A) try {
                                A = t.select(A), !1 !== t.structuralSharing && (A = (0, E.BH)(null == o ? void 0 : o.data, A)), this.previousSelectError = null
                            } catch (D) {
                                (0, s.t)().error(D), p = D, this.previousSelectError = D, y = Date.now(), v = "error"
                            }
                            "undefined" !== typeof A && (v = "success", r = A, m = !0)
                        }
                        return {
                            status: v,
                            isLoading: "loading" === v,
                            isSuccess: "success" === v,
                            isError: "error" === v,
                            isIdle: "idle" === v,
                            data: r,
                            dataUpdatedAt: d,
                            error: p,
                            errorUpdatedAt: y,
                            failureCount: h.fetchFailureCount,
                            isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
                            isFetchedAfterMount: h.dataUpdateCount > l.dataUpdateCount || h.errorUpdateCount > l.errorUpdateCount,
                            isFetching: _,
                            isRefetching: _ && "loading" !== v,
                            isLoadingError: "error" === v && 0 === h.dataUpdatedAt,
                            isPlaceholderData: m,
                            isPreviousData: g,
                            isRefetchError: "error" === v && 0 !== h.dataUpdatedAt,
                            isStale: C(e, t),
                            refetch: this.refetch,
                            remove: this.remove
                        }
                    }, r.shouldNotifyListeners = function(e, t) {
                        if (!t) return !0;
                        var r = this.options,
                            n = r.notifyOnChangeProps,
                            i = r.notifyOnChangePropsExclusions;
                        if (!n && !i) return !0;
                        if ("tracked" === n && !this.trackedProps.length) return !0;
                        var o = "tracked" === n ? this.trackedProps : n;
                        return Object.keys(e).some((function(r) {
                            var n = r,
                                s = e[n] !== t[n],
                                u = null == o ? void 0 : o.some((function(e) {
                                    return e === r
                                })),
                                a = null == i ? void 0 : i.some((function(e) {
                                    return e === r
                                }));
                            return s && !a && (!o || u)
                        }))
                    }, r.updateResult = function(e) {
                        var t = this.currentResult;
                        if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !(0, E.f8)(this.currentResult, t)) {
                            var r = {
                                cache: !0
                            };
                            !1 !== (null == e ? void 0 : e.listeners) && this.shouldNotifyListeners(this.currentResult, t) && (r.listeners = !0), this.notify((0, y.A)({}, r, e))
                        }
                    }, r.updateQuery = function() {
                        var e = this.client.getQueryCache().build(this.client, this.options);
                        if (e !== this.currentQuery) {
                            var t = this.currentQuery;
                            this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                        }
                    }, r.onQueryUpdate = function(e) {
                        var t = {};
                        "success" === e.type ? t.onSuccess = !0 : "error" !== e.type || (0, b.wm)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                    }, r.notify = function(e) {
                        var t = this;
                        n.j.batch((function() {
                            e.onSuccess ? (null == t.options.onSuccess || t.options.onSuccess(t.currentResult.data), null == t.options.onSettled || t.options.onSettled(t.currentResult.data, null)) : e.onError && (null == t.options.onError || t.options.onError(t.currentResult.error), null == t.options.onSettled || t.options.onSettled(void 0, t.currentResult.error)), e.listeners && t.listeners.forEach((function(e) {
                                e(t.currentResult)
                            })), e.cache && t.client.getQueryCache().notify({
                                query: t.currentQuery,
                                type: "observerResultsUpdated"
                            })
                        }))
                    }, t
                }(g.Q);

            function O(e, t) {
                return function(e, t) {
                    return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount)
                }(e, t) || function(e, t) {
                    return !1 !== t.enabled && e.state.dataUpdatedAt > 0 && ("always" === t.refetchOnMount || !1 !== t.refetchOnMount && C(e, t))
                }(e, t)
            }

            function B(e, t, r, n) {
                return !1 !== r.enabled && (e !== t || !1 === n.enabled) && (!r.suspense || "error" !== e.state.status) && C(e, r)
            }

            function C(e, t) {
                return e.isStaleByTime(t.staleTime)
            }

            function D() {
                var e = !1;
                return {
                    clearReset: function() {
                        e = !1
                    },
                    reset: function() {
                        e = !0
                    },
                    isReset: function() {
                        return e
                    }
                }
            }
            var I = c().createContext(D()),
                F = function() {
                    return c().useContext(I)
                };

            function U(e, t, r) {
                return function(e, t) {
                    var r = c().useRef(!1),
                        i = c().useState(0)[1],
                        o = d(),
                        s = F(),
                        u = o.defaultQueryObserverOptions(e);
                    u.optimisticResults = !0, u.onError && (u.onError = n.j.batchCalls(u.onError)), u.onSuccess && (u.onSuccess = n.j.batchCalls(u.onSuccess)), u.onSettled && (u.onSettled = n.j.batchCalls(u.onSettled)), u.suspense && ("number" !== typeof u.staleTime && (u.staleTime = 1e3), 0 === u.cacheTime && (u.cacheTime = 1)), (u.suspense || u.useErrorBoundary) && (s.isReset() || (u.retryOnMount = !1));
                    var a = c().useState((function() {
                            return new t(o, u)
                        }))[0],
                        l = a.getOptimisticResult(u);
                    if (c().useEffect((function() {
                            r.current = !0, s.clearReset();
                            var e = a.subscribe(n.j.batchCalls((function() {
                                r.current && i((function(e) {
                                    return e + 1
                                }))
                            })));
                            return a.updateResult(),
                                function() {
                                    r.current = !1, e()
                                }
                        }), [s, a]), c().useEffect((function() {
                            a.setOptions(u, {
                                listeners: !1
                            })
                        }), [u, a]), u.suspense && l.isLoading) throw a.fetchOptimistic(u).then((function(e) {
                        var t = e.data;
                        null == u.onSuccess || u.onSuccess(t), null == u.onSettled || u.onSettled(t, null)
                    })).catch((function(e) {
                        s.clearReset(), null == u.onError || u.onError(e), null == u.onSettled || u.onSettled(void 0, e)
                    }));
                    if (l.isError && !s.isReset() && !l.isFetching && T(u.suspense, u.useErrorBoundary, [l.error, a.getCurrentQuery()])) throw l.error;
                    return "tracked" === u.notifyOnChangeProps && (l = a.trackResult(l, u)), l
                }((0, E.vh)(e, t, r), A)
            }
        },
        S9gL: function(e, t, r) {
            ! function() {
                var t;
                e.exports = (t = r("DTvD"), function(e) {
                    function t(n) {
                        if (r[n]) return r[n].exports;
                        var i = r[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                    }
                    var r = {};
                    return t.m = e, t.c = r, t.d = function(e, r, n) {
                        t.o(e, r) || Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: n
                        })
                    }, t.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(r, "a", r), r
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 7)
                }([function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        return a(e) || u(e, t) || o(e, t) || i()
                    }

                    function i() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
                        }
                    }

                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                        return n
                    }

                    function u(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var r = [],
                                n = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var s, u = e[Symbol.iterator](); !(n = (s = u.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                            } catch (a) {
                                i = !0, o = a
                            } finally {
                                try {
                                    n || null == u.return || u.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return r
                        }
                    }

                    function a(e) {
                        if (Array.isArray(e)) return e
                    }
                    var c = r(1),
                        l = r.n(c),
                        f = r(8),
                        h = r.n(f),
                        d = r(2),
                        p = r(10),
                        y = r.n(p),
                        E = r(3),
                        _ = r(6),
                        v = function(e) {
                            return e.query || Object(E.a)(e)
                        },
                        g = function(e) {
                            if (!e) return null;
                            var t = Object.keys(e);
                            return 0 === t.length ? null : t.reduce((function(t, r) {
                                return t[Object(d.a)(r)] = e[r], t
                            }), {})
                        },
                        m = function() {
                            var e = l.a.useRef(!1);
                            return l.a.useEffect((function() {
                                e.current = !0
                            }), []), e.current
                        },
                        T = function(e) {
                            var t = l.a.useContext(_.a),
                                r = function() {
                                    return g(e) || g(t)
                                },
                                i = n(l.a.useState(r), 2),
                                o = i[0],
                                s = i[1];
                            return l.a.useEffect((function() {
                                var e = r();
                                y()(o, e) || s(e)
                            }), [e, t]), o
                        },
                        R = function(e) {
                            var t = function() {
                                    return v(e)
                                },
                                r = n(l.a.useState(t), 2),
                                i = r[0],
                                o = r[1];
                            return l.a.useEffect((function() {
                                var e = t();
                                i !== e && o(e)
                            }), [e]), i
                        },
                        S = function(e, t) {
                            var r = function() {
                                    return h()(e, t || {}, !!t)
                                },
                                i = n(l.a.useState(r), 2),
                                o = i[0],
                                s = i[1],
                                u = m();
                            return l.a.useEffect((function() {
                                return u && s(r()),
                                    function() {
                                        o.dispose()
                                    }
                            }), [e, t]), o
                        },
                        b = function(e) {
                            var t = n(l.a.useState(e.matches), 2),
                                r = t[0],
                                i = t[1];
                            return l.a.useEffect((function() {
                                var t = function() {
                                    i(e.matches)
                                };
                                return e.addListener(t), t(),
                                    function() {
                                        e.removeListener(t)
                                    }
                            }), [e]), r
                        },
                        A = function(e, t, r) {
                            var n = T(t),
                                i = R(e);
                            if (!i) throw new Error("Invalid or missing MediaQuery!");
                            var o = S(i, n),
                                s = b(o),
                                u = m();
                            return l.a.useEffect((function() {
                                u && r && r(s)
                            }), [s]), s
                        };
                    t.a = A
                }, function(e, r) {
                    e.exports = t
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        return "-" + e.toLowerCase()
                    }

                    function i(e) {
                        if (u.hasOwnProperty(e)) return u[e];
                        var t = e.replace(o, n);
                        return u[e] = s.test(t) ? "-" + t : t
                    }
                    var o = /[A-Z]/g,
                        s = /^ms-/,
                        u = {};
                    t.a = i
                }, function(e, t, r) {
                    "use strict";
                    var n = r(2),
                        i = r(11),
                        o = function(e) {
                            return "not ".concat(e)
                        },
                        s = function(e, t) {
                            var r = Object(n.a)(e);
                            return "number" == typeof t && (t = "".concat(t, "px")), !0 === t ? r : !1 === t ? o(r) : "(".concat(r, ": ").concat(t, ")")
                        },
                        u = function(e) {
                            return e.join(" and ")
                        },
                        a = function(e) {
                            var t = [];
                            return Object.keys(i.a.all).forEach((function(r) {
                                var n = e[r];
                                null != n && t.push(s(r, n))
                            })), u(t)
                        };
                    t.a = a
                }, function(e, t, r) {
                    "use strict";
                    e.exports = r(13)
                }, function(e, t, r) {
                    "use strict";
                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                }, function(e, t, r) {
                    "use strict";
                    var n = r(1),
                        i = r.n(n).a.createContext();
                    t.a = i
                }, function(e, t, r) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = r(0),
                        i = r(17),
                        o = r(3),
                        s = r(6);
                    r.d(t, "default", (function() {
                        return i.a
                    })), r.d(t, "useMediaQuery", (function() {
                        return n.a
                    })), r.d(t, "toQuery", (function() {
                        return o.a
                    })), r.d(t, "Context", (function() {
                        return s.a
                    }))
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t, r) {
                        function n(e) {
                            l && l.addListener(e)
                        }

                        function i(e) {
                            l && l.removeListener(e)
                        }

                        function u(e) {
                            c.matches = e.matches, c.media = e.media
                        }

                        function a() {
                            l && l.removeListener(u)
                        }
                        var c = this;
                        if (s && !r) {
                            var l = s.call(window, e);
                            this.matches = l.matches, this.media = l.media, l.addListener(u)
                        } else this.matches = o(e, t), this.media = e;
                        this.addListener = n, this.removeListener = i, this.dispose = a
                    }

                    function i(e, t, r) {
                        return new n(e, t, r)
                    }
                    var o = r(9).match,
                        s = "undefined" != typeof window ? window.matchMedia : null;
                    e.exports = i
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        return i(e).some((function(e) {
                            var r = e.inverse,
                                n = "all" === e.type || t.type === e.type;
                            if (n && r || !n && !r) return !1;
                            var i = e.expressions.every((function(e) {
                                var r = e.feature,
                                    n = e.modifier,
                                    i = e.value,
                                    a = t[r];
                                if (!a) return !1;
                                switch (r) {
                                    case "orientation":
                                    case "scan":
                                        return a.toLowerCase() === i.toLowerCase();
                                    case "width":
                                    case "height":
                                    case "device-width":
                                    case "device-height":
                                        i = u(i), a = u(a);
                                        break;
                                    case "resolution":
                                        i = s(i), a = s(a);
                                        break;
                                    case "aspect-ratio":
                                    case "device-aspect-ratio":
                                    case "device-pixel-ratio":
                                        i = o(i), a = o(a);
                                        break;
                                    case "grid":
                                    case "color":
                                    case "color-index":
                                    case "monochrome":
                                        i = parseInt(i, 10) || 1, a = parseInt(a, 10) || 0
                                }
                                switch (n) {
                                    case "min":
                                        return a >= i;
                                    case "max":
                                        return a <= i;
                                    default:
                                        return a === i
                                }
                            }));
                            return i && !r || !i && r
                        }))
                    }

                    function i(e) {
                        return e.split(",").map((function(e) {
                            var t = (e = e.trim()).match(a),
                                r = t[1],
                                n = t[2],
                                i = t[3] || "",
                                o = {};
                            return o.inverse = !!r && "not" === r.toLowerCase(), o.type = n ? n.toLowerCase() : "all", i = i.match(/\([^\)]+\)/g) || [], o.expressions = i.map((function(e) {
                                var t = e.match(c),
                                    r = t[1].toLowerCase().match(l);
                                return {
                                    modifier: r[1],
                                    feature: r[2],
                                    value: t[2]
                                }
                            })), o
                        }))
                    }

                    function o(e) {
                        var t, r = Number(e);
                        return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
                    }

                    function s(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(h)[1]) {
                            case "dpcm":
                                return t / 2.54;
                            case "dppx":
                                return 96 * t;
                            default:
                                return t
                        }
                    }

                    function u(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(f)[1]) {
                            case "em":
                            case "rem":
                                return 16 * t;
                            case "cm":
                                return 96 * t / 2.54;
                            case "mm":
                                return 96 * t / 2.54 / 10;
                            case "in":
                                return 96 * t;
                            case "pt":
                                return 72 * t;
                            case "pc":
                                return 72 * t / 12;
                            default:
                                return t
                        }
                    }
                    t.match = n, t.parse = i;
                    var a = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                        c = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                        l = /^(?:(min|max)-)?(.+)/,
                        f = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                        h = /(dpi|dpcm|dppx)?$/
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        if (e === t) return !0;
                        if (!e || !t) return !1;
                        var r = Object.keys(e),
                            n = Object.keys(t),
                            i = r.length;
                        if (n.length !== i) return !1;
                        for (var o = 0; o < i; o++) {
                            var s = r[o];
                            if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
                        }
                        return !0
                    }
                    e.exports = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function i(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? n(Object(r), !0).forEach((function(t) {
                                o(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }

                    function o(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e
                    }
                    var s = r(12),
                        u = r.n(s),
                        a = u.a.oneOfType([u.a.string, u.a.number]),
                        c = {
                            orientation: u.a.oneOf(["portrait", "landscape"]),
                            scan: u.a.oneOf(["progressive", "interlace"]),
                            aspectRatio: u.a.string,
                            deviceAspectRatio: u.a.string,
                            height: a,
                            deviceHeight: a,
                            width: a,
                            deviceWidth: a,
                            color: u.a.bool,
                            colorIndex: u.a.bool,
                            monochrome: u.a.bool,
                            resolution: a
                        },
                        l = i({
                            minAspectRatio: u.a.string,
                            maxAspectRatio: u.a.string,
                            minDeviceAspectRatio: u.a.string,
                            maxDeviceAspectRatio: u.a.string,
                            minHeight: a,
                            maxHeight: a,
                            minDeviceHeight: a,
                            maxDeviceHeight: a,
                            minWidth: a,
                            maxWidth: a,
                            minDeviceWidth: a,
                            maxDeviceWidth: a,
                            minColor: u.a.number,
                            maxColor: u.a.number,
                            minColorIndex: u.a.number,
                            maxColorIndex: u.a.number,
                            minMonochrome: u.a.number,
                            maxMonochrome: u.a.number,
                            minResolution: a,
                            maxResolution: a
                        }, c),
                        f = {
                            all: u.a.bool,
                            grid: u.a.bool,
                            aural: u.a.bool,
                            braille: u.a.bool,
                            handheld: u.a.bool,
                            print: u.a.bool,
                            projection: u.a.bool,
                            screen: u.a.bool,
                            tty: u.a.bool,
                            tv: u.a.bool,
                            embossed: u.a.bool
                        },
                        h = i(i({}, f), l);
                    c.type = Object.keys(f), t.a = {
                        all: h,
                        types: f,
                        matchers: c,
                        features: l
                    }
                }, function(e, t, r) {
                    var n = r(4);
                    e.exports = r(14)(n.isElement, !0)
                }, function(e, t, r) {
                    "use strict";
                    ! function() {
                        function e(e) {
                            return "string" == typeof e || "function" == typeof e || e === g || e === A || e === T || e === m || e === B || e === C || "object" == typeof e && null !== e && (e.$$typeof === I || e.$$typeof === D || e.$$typeof === R || e.$$typeof === S || e.$$typeof === O || e.$$typeof === U || e.$$typeof === w || e.$$typeof === x || e.$$typeof === F)
                        }

                        function r(e) {
                            if ("object" == typeof e && null !== e) {
                                var t = e.$$typeof;
                                switch (t) {
                                    case _:
                                        var r = e.type;
                                        switch (r) {
                                            case b:
                                            case A:
                                            case g:
                                            case T:
                                            case m:
                                            case B:
                                                return r;
                                            default:
                                                var n = r && r.$$typeof;
                                                switch (n) {
                                                    case S:
                                                    case O:
                                                    case I:
                                                    case D:
                                                    case R:
                                                        return n;
                                                    default:
                                                        return t
                                                }
                                        }
                                    case v:
                                        return t
                                }
                            }
                        }

                        function n(e) {
                            return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(e) || r(e) === b
                        }

                        function i(e) {
                            return r(e) === A
                        }

                        function o(e) {
                            return r(e) === S
                        }

                        function s(e) {
                            return r(e) === R
                        }

                        function u(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === _
                        }

                        function a(e) {
                            return r(e) === O
                        }

                        function c(e) {
                            return r(e) === g
                        }

                        function l(e) {
                            return r(e) === I
                        }

                        function f(e) {
                            return r(e) === D
                        }

                        function h(e) {
                            return r(e) === v
                        }

                        function d(e) {
                            return r(e) === T
                        }

                        function p(e) {
                            return r(e) === m
                        }

                        function y(e) {
                            return r(e) === B
                        }
                        var E = "function" == typeof Symbol && Symbol.for,
                            _ = E ? Symbol.for("react.element") : 60103,
                            v = E ? Symbol.for("react.portal") : 60106,
                            g = E ? Symbol.for("react.fragment") : 60107,
                            m = E ? Symbol.for("react.strict_mode") : 60108,
                            T = E ? Symbol.for("react.profiler") : 60114,
                            R = E ? Symbol.for("react.provider") : 60109,
                            S = E ? Symbol.for("react.context") : 60110,
                            b = E ? Symbol.for("react.async_mode") : 60111,
                            A = E ? Symbol.for("react.concurrent_mode") : 60111,
                            O = E ? Symbol.for("react.forward_ref") : 60112,
                            B = E ? Symbol.for("react.suspense") : 60113,
                            C = E ? Symbol.for("react.suspense_list") : 60120,
                            D = E ? Symbol.for("react.memo") : 60115,
                            I = E ? Symbol.for("react.lazy") : 60116,
                            F = E ? Symbol.for("react.block") : 60121,
                            U = E ? Symbol.for("react.fundamental") : 60117,
                            w = E ? Symbol.for("react.responder") : 60118,
                            x = E ? Symbol.for("react.scope") : 60119,
                            L = b,
                            P = A,
                            N = S,
                            Q = R,
                            M = _,
                            Y = O,
                            G = g,
                            k = I,
                            q = D,
                            H = v,
                            j = T,
                            $ = m,
                            K = B,
                            W = !1;
                        t.AsyncMode = L, t.ConcurrentMode = P, t.ContextConsumer = N, t.ContextProvider = Q, t.Element = M, t.ForwardRef = Y, t.Fragment = G, t.Lazy = k, t.Memo = q, t.Portal = H, t.Profiler = j, t.StrictMode = $, t.Suspense = K, t.isAsyncMode = n, t.isConcurrentMode = i, t.isContextConsumer = o, t.isContextProvider = s, t.isElement = u, t.isForwardRef = a, t.isFragment = c, t.isLazy = l, t.isMemo = f, t.isPortal = h, t.isProfiler = d, t.isStrictMode = p, t.isSuspense = y, t.isValidElementType = e, t.typeOf = r
                    }()
                }, function(e, t, r) {
                    "use strict";

                    function n() {
                        return null
                    }
                    var i = r(4),
                        o = r(15),
                        s = r(5),
                        u = r(16),
                        a = Function.call.bind(Object.prototype.hasOwnProperty),
                        c = function() {};
                    c = function(e) {
                        var t = "Warning: " + e;
                        "undefined" != typeof console && console.error(t);
                        try {
                            throw new Error(t)
                        } catch (r) {}
                    }, e.exports = function(e, t) {
                        function r(e) {
                            var t = e && (B && e[B] || e[C]);
                            if ("function" == typeof t) return t
                        }

                        function l(e, t) {
                            return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
                        }

                        function f(e) {
                            this.message = e, this.stack = ""
                        }

                        function h(e) {
                            function r(r, o, u, a, l, h, d) {
                                if (a = a || D, h = h || u, d !== s) {
                                    if (t) {
                                        var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                        throw p.name = "Invariant Violation", p
                                    }
                                    if ("undefined" != typeof console) {
                                        var y = a + ":" + u;
                                        !n[y] && i < 3 && (c("You are manually calling a React.PropTypes validation function for the `" + h + "` prop on `" + a + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[y] = !0, i++)
                                    }
                                }
                                return null == o[u] ? r ? new f(null === o[u] ? "The " + l + " `" + h + "` is marked as required in `" + a + "`, but its value is `null`." : "The " + l + " `" + h + "` is marked as required in `" + a + "`, but its value is `undefined`.") : null : e(o, u, a, l, h)
                            }
                            var n = {},
                                i = 0,
                                o = r.bind(null, !1);
                            return o.isRequired = r.bind(null, !0), o
                        }

                        function d(e) {
                            function t(t, r, n, i, o, s) {
                                var u = t[r];
                                return S(u) !== e ? new f("Invalid " + i + " `" + o + "` of type `" + b(u) + "` supplied to `" + n + "`, expected `" + e + "`.") : null
                            }
                            return h(t)
                        }

                        function p(e) {
                            function t(t, r, n, i, o) {
                                if ("function" != typeof e) return new f("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                                var u = t[r];
                                if (!Array.isArray(u)) return new f("Invalid " + i + " `" + o + "` of type `" + S(u) + "` supplied to `" + n + "`, expected an array.");
                                for (var a = 0; a < u.length; a++) {
                                    var c = e(u, a, n, i, o + "[" + a + "]", s);
                                    if (c instanceof Error) return c
                                }
                                return null
                            }
                            return h(t)
                        }

                        function y(e) {
                            function t(t, r, n, i, o) {
                                if (!(t[r] instanceof e)) {
                                    var s = e.name || D;
                                    return new f("Invalid " + i + " `" + o + "` of type `" + O(t[r]) + "` supplied to `" + n + "`, expected instance of `" + s + "`.")
                                }
                                return null
                            }
                            return h(t)
                        }

                        function E(e) {
                            function t(t, r, n, i, o) {
                                for (var s = t[r], u = 0; u < e.length; u++)
                                    if (l(s, e[u])) return null;
                                var a = JSON.stringify(e, (function(e, t) {
                                    return "symbol" === b(t) ? String(t) : t
                                }));
                                return new f("Invalid " + i + " `" + o + "` of value `" + String(s) + "` supplied to `" + n + "`, expected one of " + a + ".")
                            }
                            return Array.isArray(e) ? h(t) : (c(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), n)
                        }

                        function _(e) {
                            function t(t, r, n, i, o) {
                                if ("function" != typeof e) return new f("Property `" + o + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                                var u = t[r],
                                    c = S(u);
                                if ("object" !== c) return new f("Invalid " + i + " `" + o + "` of type `" + c + "` supplied to `" + n + "`, expected an object.");
                                for (var l in u)
                                    if (a(u, l)) {
                                        var h = e(u, l, n, i, o + "." + l, s);
                                        if (h instanceof Error) return h
                                    }
                                return null
                            }
                            return h(t)
                        }

                        function v(e) {
                            function t(t, r, n, i, o) {
                                for (var u = 0; u < e.length; u++)
                                    if (null == (0, e[u])(t, r, n, i, o, s)) return null;
                                return new f("Invalid " + i + " `" + o + "` supplied to `" + n + "`.")
                            }
                            if (!Array.isArray(e)) return c("Invalid argument supplied to oneOfType, expected an instance of array."), n;
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if ("function" != typeof i) return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + A(i) + " at index " + r + "."), n
                            }
                            return h(t)
                        }

                        function g(e) {
                            function t(t, r, n, i, o) {
                                var u = t[r],
                                    a = S(u);
                                if ("object" !== a) return new f("Invalid " + i + " `" + o + "` of type `" + a + "` supplied to `" + n + "`, expected `object`.");
                                for (var c in e) {
                                    var l = e[c];
                                    if (l) {
                                        var h = l(u, c, n, i, o + "." + c, s);
                                        if (h) return h
                                    }
                                }
                                return null
                            }
                            return h(t)
                        }

                        function m(e) {
                            function t(t, r, n, i, u) {
                                var a = t[r],
                                    c = S(a);
                                if ("object" !== c) return new f("Invalid " + i + " `" + u + "` of type `" + c + "` supplied to `" + n + "`, expected `object`.");
                                var l = o({}, t[r], e);
                                for (var h in l) {
                                    var d = e[h];
                                    if (!d) return new f("Invalid " + i + " `" + u + "` key `" + h + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(t[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                    var p = d(a, h, n, i, u + "." + h, s);
                                    if (p) return p
                                }
                                return null
                            }
                            return h(t)
                        }

                        function T(t) {
                            switch (typeof t) {
                                case "number":
                                case "string":
                                case "undefined":
                                    return !0;
                                case "boolean":
                                    return !t;
                                case "object":
                                    if (Array.isArray(t)) return t.every(T);
                                    if (null === t || e(t)) return !0;
                                    var n = r(t);
                                    if (!n) return !1;
                                    var i, o = n.call(t);
                                    if (n !== t.entries) {
                                        for (; !(i = o.next()).done;)
                                            if (!T(i.value)) return !1
                                    } else
                                        for (; !(i = o.next()).done;) {
                                            var s = i.value;
                                            if (s && !T(s[1])) return !1
                                        }
                                    return !0;
                                default:
                                    return !1
                            }
                        }

                        function R(e, t) {
                            return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                        }

                        function S(e) {
                            var t = typeof e;
                            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : R(t, e) ? "symbol" : t
                        }

                        function b(e) {
                            if (void 0 === e || null === e) return "" + e;
                            var t = S(e);
                            if ("object" === t) {
                                if (e instanceof Date) return "date";
                                if (e instanceof RegExp) return "regexp"
                            }
                            return t
                        }

                        function A(e) {
                            var t = b(e);
                            switch (t) {
                                case "array":
                                case "object":
                                    return "an " + t;
                                case "boolean":
                                case "date":
                                case "regexp":
                                    return "a " + t;
                                default:
                                    return t
                            }
                        }

                        function O(e) {
                            return e.constructor && e.constructor.name ? e.constructor.name : D
                        }
                        var B = "function" == typeof Symbol && Symbol.iterator,
                            C = "@@iterator",
                            D = "<<anonymous>>",
                            I = {
                                array: d("array"),
                                bool: d("boolean"),
                                func: d("function"),
                                number: d("number"),
                                object: d("object"),
                                string: d("string"),
                                symbol: d("symbol"),
                                any: h(n),
                                arrayOf: p,
                                element: function() {
                                    function t(t, r, n, i, o) {
                                        var s = t[r];
                                        return e(s) ? null : new f("Invalid " + i + " `" + o + "` of type `" + S(s) + "` supplied to `" + n + "`, expected a single ReactElement.")
                                    }
                                    return h(t)
                                }(),
                                elementType: function() {
                                    function e(e, t, r, n, o) {
                                        var s = e[t];
                                        return i.isValidElementType(s) ? null : new f("Invalid " + n + " `" + o + "` of type `" + S(s) + "` supplied to `" + r + "`, expected a single ReactElement type.")
                                    }
                                    return h(e)
                                }(),
                                instanceOf: y,
                                node: function() {
                                    function e(e, t, r, n, i) {
                                        return T(e[t]) ? null : new f("Invalid " + n + " `" + i + "` supplied to `" + r + "`, expected a ReactNode.")
                                    }
                                    return h(e)
                                }(),
                                objectOf: _,
                                oneOf: E,
                                oneOfType: v,
                                shape: g,
                                exact: m
                            };
                        return f.prototype = Error.prototype, I.checkPropTypes = u, I.resetWarningCache = u.resetWarningCache, I.PropTypes = I, I
                    }
                }, function(e, t, r) {
                    "use strict";

                    function n(e) {
                        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var i = Object.getOwnPropertySymbols,
                        o = Object.prototype.hasOwnProperty,
                        s = Object.prototype.propertyIsEnumerable;
                    e.exports = function() {
                        try {
                            if (!Object.assign) return !1;
                            var e = new String("abc");
                            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                            for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                    return t[e]
                                })).join("")) return !1;
                            var n = {};
                            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                n[e] = e
                            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                        } catch (i) {
                            return !1
                        }
                    }() ? Object.assign : function(e, t) {
                        for (var r, u, a = n(e), c = 1; c < arguments.length; c++) {
                            for (var l in r = Object(arguments[c])) o.call(r, l) && (a[l] = r[l]);
                            if (i) {
                                u = i(r);
                                for (var f = 0; f < u.length; f++) s.call(r, u[f]) && (a[u[f]] = r[u[f]])
                            }
                        }
                        return a
                    }
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t, r, n, a) {
                        for (var c in e)
                            if (u(e, c)) {
                                var l;
                                try {
                                    if ("function" != typeof e[c]) {
                                        var f = Error((n || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.");
                                        throw f.name = "Invariant Violation", f
                                    }
                                    l = e[c](t, c, n, r, null, o)
                                } catch (d) {
                                    l = d
                                }
                                if (!l || l instanceof Error || i((n || "React class") + ": type specification of " + r + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), l instanceof Error && !(l.message in s)) {
                                    s[l.message] = !0;
                                    var h = a ? a() : "";
                                    i("Failed " + r + " type: " + l.message + (null != h ? h : ""))
                                }
                            }
                    }
                    var i = function() {},
                        o = r(5),
                        s = {},
                        u = Function.call.bind(Object.prototype.hasOwnProperty);
                    i = function(e) {
                        var t = "Warning: " + e;
                        "undefined" != typeof console && console.error(t);
                        try {
                            throw new Error(t)
                        } catch (r) {}
                    }, n.resetWarningCache = function() {
                        s = {}
                    }, e.exports = n
                }, function(e, t, r) {
                    "use strict";

                    function n(e, t) {
                        if (null == e) return {};
                        var r, n, o = i(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                    }

                    function i(e, t) {
                        if (null == e) return {};
                        var r, n, i = {},
                            o = Object.keys(e);
                        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                        return i
                    }

                    function o(e) {
                        var t = e.children,
                            r = e.device,
                            i = e.onChange,
                            o = n(e, ["children", "device", "onChange"]),
                            u = Object(s.a)(o, r, i);
                        return "function" == typeof t ? t(u) : u ? t : null
                    }
                    t.a = o;
                    var s = r(0)
                }]))
            }("undefined" != typeof self && self)
        },
        "Hf/4": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("DTvD");

            function i(e) {
                var t = (0, n.useRef)();
                return (0, n.useEffect)((function() {
                    t.current = e
                })), t.current
            }
        },
        ypu0: (e, t, r) => {
            "use strict";
            var n, i = r("NYym"),
                o = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var s = 1;
            t.Ay = function(e, t) {
                if (e === s) return o.default.transform(t)
            }
        },
        xqbL: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = s(e, o(r)))
                    }
                    return e
                }

                function o(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return i.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var r in e) n.call(e, r) && e[r] && (t = s(t, r));
                    return t
                }

                function s(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
                    return i
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        lAeT: (e, t, r) => {
            "use strict";

            function n(e, t) {
                return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, n(e, t)
            }

            function i(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, n(e, t)
            }
            r.d(t, {
                A: () => i
            })
        }
    }
]);