(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [5585], {
        A4nT: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bz: () => o
            });
            const r = e => e ? "CM" : "UM",
                o = {
                    PRODUCT_FUTURE_SERVICE: ["productFutureService"],
                    BRACKETS: e => ["brackets", r(e)],
                    BRACKETS_V2: e => ["brackets_v2", r(e)],
                    QUERY_FUTURES_FAVORITES: ["queryFuturesFavorites"],
                    QUERY_FUTURES_SECTION_INFO: ["queryFuturesSectionInfo"],
                    QUERY_FUTURES_SYMBOL_EXT_INFO: ["queryFuturesSymbolExtInfo"],
                    SYMBOL_CONFIG_INFO: ["symbolConfigInfo"],
                    QUERY_UNIT: e => ["queryUnit", r(e)],
                    QUERY_POSITION_SIDE: (e, t) => ["queryPositionSide", r(e), t],
                    QUERY_ARBITRAGE_UNIMMR: ["queryArbitrageUniMMR"],
                    QUERY_PRICE_DIFFER_SWITCH: e => ["queryPriceDifferSwitch", r(e)],
                    QUERY_ORDER_CONFIRMATION: e => ["queryOrderConfirmation", r(e)],
                    QUERY_MULTI_ASSET_MARGIN_ENABLE: ["queryMultiAssetMarginEnable"],
                    QUERY_JOIN_MARGIN: ["queryJoinMargin"],
                    GET_PNL_PRICE_BASIS: ["getPnlPriceBasis"],
                    GET_PNL_PRICE_BASIS_DENOMINATOR: ["getPnlPriceBasisDenominator"],
                    FUTURES_STOP_LIMIT_ORDER_NOTIFY: ["futuresStopLimitOrderNotify"],
                    FUTURES_FUNDING_FEE_NOTIFY: ["futuresFundingFeeNotify"],
                    GET_FUNDING_FEE_RANGE: ["getFundingFeeRange"],
                    fundingFeeHistory: ["FUNDING_FEE_HISTORY"],
                    fundingFeeHistoryList: (e, t, n, r) => [`FUNDING_FEE_HISTORY_${e}_${t?"CM":"UM"}`, n, r],
                    realTimeFundingInfo: ["realTimeFundingInfo"],
                    FUTURE_FEE_TIER: e => ["futureFeeTier", e],
                    FEE_TIER: (e, t) => ["feeTier", r(e), t],
                    QUERY_ASSET_INDEX: e => ["queryAssetIndex", r(e)],
                    LEVERAGE: (e, t) => ["leverage", r(e), t],
                    SYMBOL_CONFIG: (e, t) => ["symbolConfig", r(e), t],
                    POSITION_LIST: e => ["positionList", r(e)],
                    POSITION_MAP: e => ["positionMap", r(e)],
                    POSITION_MAP_V2: (e, t) => ["positionMapV2", r(e), t],
                    QUERY_INDEX_SYMBOL_DATA: e => ["queryIndexSymbolData", e],
                    QUERY_SPOT_ALL_TICKERS: ["querySpotAllTickers"],
                    QUERY_SINGLE_24HR_TICKER: e => ["querySingle24HRTicker", e],
                    QUERY_24HR_TICKER: e => ["query24HRTicker", r(e)],
                    QUERY_LAST_PRICE: e => ["queryLastPrice", e],
                    QUERY_MARK_PRICE: e => ["queryMarkPrice", e],
                    INDEX_PRICE: e => ["indexPrice", e],
                    OPEN_ORDERS: (e, t) => ["openOrders", r(e), t],
                    TRADING_BOT_OPEN_ORDERS: (e, t) => ["tradingBotOpenOrder", r(e), t ? .strategyId || 0],
                    TRADING_BOT_OPEN_ORDER_HISTORY: (e, t) => ["tradingBotOpenOrderHistoryByStrategyId", r(e), t ? .strategyId || 0],
                    NM_STRATEGY_OPEN_ORDERS: e => ["nmStrategyOpenOrders", r(e)],
                    PM_STRATEGY_OPEN_ORDERS: e => ["pmStrategyOpenOrders", r(e)],
                    BALANCE: (e, t) => ["balance", r(e), t],
                    QUERY_GRID_DETAIL: (e, t) => ["gridDetail", r(e), t],
                    OPEN_GRIDS_V2: e => ["openGridsV2", r(e)],
                    TOP_SEARCH_LIST: e => ["topSearch", r(e)],
                    SERVER_TIME: e => ["serverTime", r(e)],
                    QUERY_MARK_PRICE_ALL: e => ["queryMarkPriceAll", r(e)],
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
                    QUERY_DELIVERY_PRICE: (e, t) => ["queryDeliveryPrice", r(e), t],
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
                    QUERY_USER_STRATEGY_POSITION: e => ["queryUserStrategyPosition", r(e)],
                    QUERY_USER_STRATEGY_BALANCE: e => ["queryUserStrategyBalance", r(e)],
                    QUERY_USER_ARBITRAGE_STRATEGY_BALANCE: e => ["queryArbitrageUserStrategyBalance", r(e)],
                    STRATEGY_LEVERAGE: e => ["strategyLeverage", r(e)],
                    QUERY_HISTORY_GRID_V2: (e, t) => ["queryHistoryGrid", r(e), t],
                    QUERY_ALL_STRATEGY_ASSET: ["queryAllStrategyAsset"],
                    STRATEGY_USER_LISTEN_KEY: e => ["queryStrategyUserListenKeys", r(e)],
                    QUERY_STRATEGY_ORDER_TRADE: (e, t) => ["queryStrategyOrderTrade", r(e), t],
                    QUERY_STRATEGY_WALLET_ASSET: e => ["queryStrategyWalletAsset", r(e)],
                    GET_LDUSDT_CONVERSION_RATE: ["getLdusdtConversionRate"],
                    GET_LDUSDT_EARN_BALANCE: ["getLdusdtEarnBalance"],
                    GET_LDUSDT_COMMON_USER_FUTURES_BALANCE: e => ["getLdusdtCommonUserFuturesBalance", e],
                    GET_LDUSDT_PM_USER_FUTURES_BALANCE: (e, t) => ["getLdusdtPMUserFuturesBalance", e, t],
                    QUERY_PM_ASSET_INDEX: ["queryPMAssetIndex"],
                    GET_TICKERS: e => ["getTickers", r(e)],
                    TICKER_MAP: e => ["tickerMap", r(e)],
                    COLLATERAL_RATE: ["collateralRate"],
                    QUERY_OPEN_ORDER_LOSS: ["queryOpenOrderLoss"],
                    QUERY_PORTFOLIO_MARGIN_INFO: ["queryPortfolioMarginInfo"],
                    CM_EXCHANGE_INFO_SYMBOLS: ["cmExchangeInfoSymbols"],
                    FUTURES_REFERRAL_CODE: ["FUTURES_REFERRAL_CODE"],
                    QUERY_TIER_COMMISSION: (e, t, n) => ["queryTierCommission", r(e), t, n],
                    ADJUST_COEF: e => ["ADJUST_COEF", r(e)],
                    GET_OPEN_INTEREST: e => ["getOpenInterest", e],
                    NEWS_LIST: e => ["NEWS_LIST", e],
                    NEWS_LIST_BY_TOKEN: e => ["NEWS_LIST_BY_TOKEN", e],
                    PRODUCT_TICKER_MAP: ["PRODUCT_TICKER_MAP"],
                    GET_RESPONSIBLE_CONFIG: ["get-responsible-config"],
                    TRAILING_COEF: ["TRAILING_COEF"],
                    GET_COMMISION: (e, t) => ["FUTURES_COMMISSION", r(e), t],
                    QUERY_FUT_GRID_TRAILING_RECORD: (e, t) => ["gridFutTrailingRecord", r(e), t],
                    QUERY_ORDER_DETAIL: (e, t) => ["QUERY_ORDER_DETAIL", r(e), t],
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
                    USER_COMPLIANCE_CHECK: (e, t, n) => ["userComplianceCheck", e, t, n],
                    QUERY_E_OPTIONS_OPEN_STATUS: ["queryEOptionsOpenStatus"],
                    QUERY_ACCOUNTS_USER_CONFIG: ["queryAccountUserConfig"],
                    QUERY_CURRENCY: ["queryCurrency"],
                    PORTFOLIO_MARGIN_ACCOUNT_CONFIG: e => ["queryPortfolioMarginAccountConfig", e],
                    QUERY_ARBITRAGE_SYMBOLS: ["queryArbitrageSymbols"],
                    QUERY_ARBITRAGE_DETAIL: e => ["queryArbitrageDetail", e],
                    ARBITRAGE_POSITION_LIST: e => ["arbitragePositionList", r(e)],
                    QUERY_OPEN_ARBITRAGE: ["queryOpenArbitrage"],
                    QUERY_ARBITRAGE_OPEN_ORDERS: e => ["queryArbitrageOpenOrders", e],
                    QUERY_ARBITRAGE_ASSET_DETAIL: ["queryArbitrageAssetDetail"],
                    QUERY_ARBITRAGE_COEF: ["queryArbitrageCoef"],
                    QUERY_MARGIN_TIER: ["queryMarginTier"],
                    QUERY_FUNDING_INFO: e => ["queryFundingInfo", r(e)],
                    BNB_DISCOUNT_SETTING: ["BNB_DISCOUNT_SETTING"],
                    QUERY_ARBITRAGE_MAX_WITHDRAW_AMOUNT: e => ["queryArbitrageMaxWithdrawAmount", e],
                    QUERY_ARBITRAGE_FUNDING_FEE: e => ["queryArbitrageFundingFee", e],
                    QUERY_ARBITRAGE_INVESTMENT_HISTORY: e => ["queryArbitrageInvestmentHistory", e],
                    QUERY_ORDER_PRE_CHECK: (e, t) => ["QUERY_ORDER_PRE_CHECK", r(e), t],
                    QUERY_STABLE_ASSETS: ["QUERY_STABLE_ASSET"],
                    QUERY_PM_ACCOUNT_INDICATE: ["QUERY_PM_ACCOUNT_INDICATE"],
                    QUERY_SERVICE_STATUS: e => ["serviceStatus", e],
                    ARBITRAGE_FUNDING_FEE_HISTORY: (e, t, n, o) => ["FUNDING_FEE_HISTORY", r(t), e, n, o],
                    QUERY_BOTS_TOTAL_PNL: ["QUERY_BOTS_TOTAL_PNL"],
                    QUERY_BOTS_TOTAL_PNL_TRANSACTION_FEE: ["QUERY_BOTS_TOTAL_PNL_TRANSACTION_FEE"],
                    QUERY_BOTS_TOTAL_PNL_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_BY_STRATEGY", e],
                    QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY", e],
                    QUERY_BOTS_PNL_TREND: ({
                        startTime: e,
                        endTime: t,
                        recentDays: n
                    }) => ["QUERY_BOTS_TOTAL_PNL", e, t, n],
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
        ugJu: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => p
            });
            var r = n("mXdx"),
                o = n("DTvD"),
                i = n.n(o),
                a = (n("kUzC"), n("wIZF")),
                s = n("TQvm");
            const u = function(e) {
                    return i().createElement(s.A, (0, a.__assign)({
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), i().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9 3h11v13h-3V6H9V3zM4 8v13h11V8.02L4 8z",
                        fill: "currentColor"
                    }))
                },
                c = ({
                    sentryEventId: e,
                    name: t,
                    resetErrorBoundary: n
                }) => {
                    const i = (0, o.useCallback)((() => {
                            window.location.reload()
                        }), []),
                        a = (0, o.useCallback)((() => {
                            e && function(e) {
                                if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                                    var t = document.createElement("textarea");
                                    t.textContent = e, t.style.position = "fixed", document.body.appendChild(t), t.select();
                                    try {
                                        return document.execCommand("copy")
                                    } catch (n) {
                                        return console.warn("Copy to clipboard failed.", n), !1
                                    } finally {
                                        document.body.removeChild(t)
                                    }
                                }
                            }(e)
                        }), [e]);
                    return (0, r.jsxs)("div", {
                        className: "error-boundary-default",
                        children: [(0, r.jsxs)("p", {
                            className: "error-boundary-default-tip",
                            children: ["Sorry, ", t || "something", " went wrong."]
                        }), !!e && (0, r.jsxs)("p", {
                            className: "error-boundary-default-id",
                            onClick: a,
                            children: [e, (0, r.jsx)(u, {})]
                        }), (0, r.jsxs)("p", {
                            className: "error-boundary-default-tip",
                            children: [(0, r.jsx)("span", {
                                className: "error-boundary-default-action",
                                onClick: n,
                                children: "Reload"
                            }), " ", "it or", " ", (0, r.jsx)("span", {
                                className: "error-boundary-default-action",
                                onClick: i,
                                children: "refresh"
                            }), " ", "the page."]
                        })]
                    })
                },
                l = {
                    hasError: !1,
                    error: null,
                    info: null,
                    sentryEventId: null
                },
                f = "fatal";
            let d = !1;
            class p extends i().Component {
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e, t) {
                    const {
                        name: n,
                        beforeCapture: r
                    } = this.props, o = t ? .componentStack;
                    console.error(`${n||"Something"} went wrong.`, e, o);
                    try {
                        if ("undefined" !== typeof window && "undefined" !== typeof window.Sentry) {
                            const t = window.Sentry.captureException(e, (function(t) {
                                return r ? .(t, e, o), t.setExtra("componentStack", o), t.setLevel(f), t.setTag("component", n || "ErrorBoundary ".concat(e.message)), t
                            }));
                            this.setState({
                                sentryEventId: t
                            })
                        }
                    } catch (i) {
                        console.error("Error reporting failed: ", i)
                    }
                    this.props.onError ? .(e, t ? .componentStack, null), this.setState({
                        error: e,
                        info: t,
                        hasError: !0
                    })
                }
                componentDidMount() {
                    const {
                        onComponentMounting: e
                    } = this.props;
                    e && e()
                }
                componentWillUnmount() {
                    const {
                        error: e,
                        info: t
                    } = this.state, {
                        onUnmount: n
                    } = this.props;
                    n && n(e, t ? .componentStack, null)
                }
                render() {
                    const {
                        error: e,
                        info: t,
                        hasError: n,
                        sentryEventId: o
                    } = this.state, {
                        fallbackRender: a,
                        FallbackComponent: s,
                        fallback: u,
                        name: l
                    } = this.props;
                    if (n) {
                        const n = {
                            componentStack: t ? .componentStack,
                            error: e,
                            resetErrorBoundary: this.resetErrorBoundary,
                            eventId: null
                        };
                        return i().isValidElement(u) ? u : "function" === typeof a ? a(n) : "function" === typeof s ? (0, r.jsx)(s, { ...n
                        }) : (0, r.jsx)(c, {
                            name: l,
                            sentryEventId: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        })
                    }
                    return this.props.children
                }
                constructor(e) {
                    super(e), this.state = l, this.resetErrorBoundary = () => {
                        const {
                            error: e,
                            info: t,
                            sentryEventId: n
                        } = this.state, {
                            onReset: r
                        } = this.props;
                        r && r(e, t ? .componentStack, n), this.setState(l)
                    }, !d && "undefined" !== typeof Sentry && "addGlobalEventProcessor" in Sentry && (Sentry.addGlobalEventProcessor((e => {
                        try {
                            return e.level === f && e.exception && e.exception.values.forEach((e => {
                                e.mechanism.handled = !1
                            })), e
                        } catch (t) {
                            return e
                        }
                    })), d = !0)
                }
            }
        },
        aaF1: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r
            });
            const r = {
                QUERY_ASSET_LOGO: ["queryAssetLogo"],
                QUERY_ALL_COINS: ["queryAllCoins"],
                QUERY_ALL_COINS_FINANCE: ["QUERY_ALL_COINS_FINANCE"],
                QUERY_REBALANCING_RUNNING: ["queryRebalancingRunning"],
                QUERY_REBALANCING_HISTORY: (e, t, n, r) => ["queryRebalancingHistory", e || "all", t || "no-startTime", n || "no-endTIme", r || "no-pageRow"],
                QUERY_REBALANCING_HISTORY_PAGINATION: ["queryRebalancingHistoryPagination"],
                QUERY_LAST_PRICE: ["queryLastPrice"],
                QUERY_USER_ASSET: ["queryUserAsset"],
                QUERY_USER_BALANCE: ["queryUserBalance"],
                QUERY_SPOT_TICKER_MAP: ["querySpotTickerMap"],
                QUERY_SPOT_PRODUCTS: ["querySpotProducts"],
                QUERY_SPOT_EXCHANGE_INFO: ["queryExchangeInfo"],
                QUERY_SPOT_EXCHANGE_INFO_V3: ["queryExchangeInfoV3"],
                QUERY_STRATEGY_SYMBOLS: ["queryStrategySymbols"],
                QUERY_STRATEGY_ORDER_TRADE: e => ["queryStrategyOrderTrade", e],
                QUERY_SPOT_GRID_HISTORY: ["querySpotGridHistory"],
                QUERY_SPOT_GRID_HISTORY_V2: ["querySpotGridHistoryV2"],
                QUERY_SPOT_GRID_RUNNING: ["querySpotGridRunning"],
                QUERY_SPOT_GRID_DETAIL: ["spot_grid_detail"],
                QUERY_MARGIN_CROSS_ASSET: ["queryCrossAsset"],
                QUERY_MARGIN_CROSS_DEBT: ["queryCrossAssetDebt"],
                QUERY_INDEX_PRICE_MAP: ["queryIndexPriceMap"],
                QUERY_SPOT_WITHDRAW_OPERATE_RECORD: e => ["queryOperateRecord", e],
                QUERY_SPOT_DCA_DETAIL: e => ["querySpotDcaDetail", e],
                QUERY_SPOT_DAC_ORDER_ITEMS: (e, t, n, r) => ["querySpotDcaOrderItems", e, ...t ? [`round-${t}`] : [], ...n ? [`page-${n}`] : [], ...r ? [`rows-${r}`] : []],
                QUERY_DCA_BOT_RUNNING: ["queryDCABotRunning"],
                QUERY_DCA_BOT_HISTORY: ["queryDCABotHistory"],
                QUERY_SPOT_BALANCE: ["querySpotBalance"],
                QUERY_SPOT_GRID_CONFIG: ["SPOT_GRID_CONFIG"],
                QUERY_SPOT_STRATEGY_SYMBOL_CONFIG: ["SPOT_STRATEGY_SYMBOL_CONFIG"],
                QUERY_SPOT_ASSET_DETAIL: e => ["QUERY_SPOT_ASSET_DETAIL", e],
                QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY", e],
                QUERY_BOTS_TOTAL_PNL_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_BY_STRATEGY", e],
                QUERY_SPOT_STRATEGY_OPEN_ORDERS: (e, t, n, r) => ["SPOT_STRATEGY_OPEN_ORDERS", e, t, n, Array.isArray(r) && r.length > 0 ? r.sort().join("_") : "EMPTY_USER_ID"],
                QUERY_SPOT_GRID_STRATEGY_OPEN_ORDERS_HISTORY: (e, t, n) => ["SPOT_GRID_STRATEGY_OPEN_ORDERS_HISTORY", e, t || "all", n],
                QUERY_SPOT_GRID_TRAILING_RECORDS: (e, t, n) => ["QUERY_SPOT_GRID_TRAILING_RECORDS", e, t, n],
                QUERY_SPOT_STRATEGY_USER_COMPLIANCE_CHECK: e => ["queryUserStrategyComplianceCheck", e],
                avgPrice: ["AVG_PRICE"],
                QUERY_SPOT_GRID_RECOMMEND_PARAMS: ["querySpotGridRecommendParams"],
                QUERY_MARGIN_ASSET_LV: ["MARGIN_ASSET_LV"],
                QUERY_MARGIN_ASSET_MMR: ["MARGIN_ASSET_MMR"],
                QUERY_MARGIN_INTEREST_RATE: ["marginInterestRate"],
                QUERY_ISOLATED_INTEREST_RATE: ["isolatedInterestRate"],
                QUERY_ISOLATED_ACCOUNT_DETAIL: ["isolatedAccountDetail"],
                QUERY_USER_CREDIT_STATUS: ["queryUserCreditStatus"],
                getSpotCommissionService: e => ["SPOT_COMMISSION_SERVICE", e],
                QUERY_SPOT_PM_TAGS: ["querySpotPmTags"],
                QUERY_SPOT_MARKET_HOT_SEARCH: ["querySpotMarketHotSearch"],
                QUERY_MARKET_TOKEN_UNLOCK_DETAIL: e => ["QUERY_MARKET_TOKEN_UNLOCK_DETAIL", e],
                QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE: ({
                    baseAsset: e,
                    range: t
                }) => ["QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE", e, t],
                QUERY_MARKET_TOKEN_UNLOCK_EVENT: ({
                    baseAsset: e,
                    type: t,
                    page: n,
                    raws: r
                }) => ["QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE", e, t, n, r]
            }
        },
        PsuI: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q_: () => u,
                y9: () => s
            });
            var r = n("K6aR"),
                o = n("1VHe");
            const i = {
                    s: "symbol",
                    g: "grid",
                    ts: "tickSize",
                    i: "minQty",
                    q: "quoteAsset",
                    b: "baseAsset",
                    qn: "quoteName",
                    an: "baseAssetName",
                    pm: "parentMarket",
                    pn: "parentMarketName",
                    cs: "circulatingSupply",
                    etf: "etf",
                    pom: "delisted",
                    pomt: "delistedTime",
                    st: "tradingStatus",
                    lc: "lowCirculation",
                    sd: "softDelisting",
                    rb: "rb",
                    qv: "quoteVolume",
                    v: "volume",
                    tags: "tags",
                    c: "closePrice",
                    o: "openPrice",
                    h: "highPrice",
                    l: "lowPrice"
                },
                a = e => (Array.isArray(e) ? e : []).reduce(((e, t) => (t.s && (e[t.s] = (e => {
                    if (!e) return e;
                    const t = i;
                    return Object.keys(t).reduce(((n, r) => {
                        const o = t[r];
                        return "ts" === r && 0 === Number(e.ts) && (e.ts = 1), o && (n[o] = e[r]), n
                    }), {
                        symbolDisplay: e ? .isDelivery ? [e.s].join("/") : [e.b, e.q].join("/")
                    })
                })(t)), e)), {}),
                s = ({
                    headers: e
                }) => (0, r.ll)({
                    includeEtf: !1
                }, e).then((e => a(e))),
                u = () => (0, o.$U)({}).then((e => {
                    const {
                        success: t,
                        data: n
                    } = e;
                    return t ? n.reduce((function(e, t) {
                        return e[t.symbol] = t, e
                    }), {}) : {}
                }))
        },
        QWVi: (e, t, n) => {
            "use strict";
            n.d(t, {
                Hj: () => r,
                OL: () => o
            });
            const r = {
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
                o = "STRATEGY_BUSINESS_STATES"
        },
        "7wiY": (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => r,
                V: () => o
            });
            const r = {
                    strategyList: "strategylist",
                    trade: "trade",
                    allOrders: "allorders",
                    leaderBoard: "leaderboard"
                },
                o = "h5Tab"
        },
        bt5r: (e, t, n) => {
            "use strict";
            n.d(t, {
                C39: () => f,
                S$s: () => a,
                TPI: () => s,
                VSR: () => h,
                VsL: () => c,
                YxM: () => u,
                b8R: () => l,
                csZ: () => p,
                uxx: () => d
            });
            var r = n("m0k9"),
                o = n("uoy8");
            const {
                isHybrid: i
            } = (0, r.S)(), a = "undefined" === typeof window, s = {
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
                TWAP_LEARN_URL: `/${o.FK}/%symbol%`,
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
            }, u = i ? "h5" : "web", c = "--", l = Boolean(!1), f = "futures-strategy-ui", d = 600, p = 3, h = "https://app.binance.com/uni-qr"
        },
        "+Log": (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => a,
                p: () => s
            });
            var r = n("BmHO"),
                o = n.n(r),
                i = n("bt5r");
            const a = o().createInstance({
                    name: i.C39
                }),
                s = {
                    lastViewedStrategy: "LAST_VIEWED_STRATEGY",
                    futGridFormLeverage: "FUTURES_GRID_FORM_LEVERAGE",
                    futGridFormMarginMode: "FUTURES_GRID_FORM_MARGIN_MODE_V2",
                    spotGridCps: "SPOT_GRID_CPS",
                    isAnnouncementRedDotVisible: "IS_ANNOUNCEMENT_RED_DOT_VISIBLE",
                    isTrailingUpReverseTipShownBefore: "IS_TRAILING_UP_REVERSE_TIP_SHOWN_BEFORE",
                    isTrailingDownReverseTipShownBefore: "IS_TRAILING_DOWN_REVERSE_TIP_SHOWN_BEFORE",
                    SHOULD_SHOW_TPSL_CPS_TIPS_CM: "SHOULD_SHOW_TPSL_CPS_TIPS_CM",
                    SHOULD_SHOW_TPSL_CPS_TIPS_UM: "SHOULD_SHOW_TPSL_CPS_TIPS_UM",
                    lossProtectionProcess: "LOSS_PROTECTION_PROCESS"
                }
        },
        krnk: (e, t, n) => {
            "use strict";
            n.d(t, {
                $K: () => u,
                SY: () => c,
                g_: () => i,
                t5: () => a,
                z6: () => s
            });
            n("A4nT");
            var r = n("1Au+");
            const o = e => e ? "CM" : "UM",
                i = {
                    futTradingBotAddableBalance: "FUT_TRADING_BOT_ADDABLE_BALANCE"
                },
                a = {
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
                    strategyRoiChart: (e, t, n) => ["STRATEGY_ROI_CHART", e, t, n],
                    futGridRecommendParams: "FUT_GRID_RECOMMEND_PARAMS",
                    adjustCoef: e => ["ADJUST_COEF", o(e)],
                    topStrategies: e => ["TOP_STRATEGIES", e],
                    futTradingBotAddableBalance: e => [i.futTradingBotAddableBalance, e],
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
                s = {
                    rebalancingBot: ["USER_CONFIG", r.YX.rebalancingBot]
                },
                u = {
                    all: ["queryUserAssetKey"]
                },
                c = {
                    all: "strategyInfo",
                    productLine: e => [c.all, e]
                }
        },
        uoy8: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ax: () => R,
                B2: () => p,
                C$: () => m,
                Di: () => E,
                Ek: () => I,
                FK: () => u,
                Gs: () => v,
                Hu: () => b,
                Kf: () => j,
                LP: () => N,
                MI: () => F,
                Mj: () => D,
                Nf: () => h,
                QX: () => B,
                Ql: () => g,
                Qr: () => l,
                VX: () => A,
                W$: () => x,
                WI: () => L,
                Wg: () => M,
                YY: () => T,
                ZG: () => f,
                ZH: () => d,
                aY: () => c,
                bT: () => U,
                cb: () => i,
                d5: () => o,
                eE: () => s,
                fP: () => O,
                gF: () => S,
                iO: () => y,
                n5: () => C,
                pM: () => k,
                rs: () => _,
                t7: () => P,
                tQ: () => G
            });
            var r = n("hbgo");
            const o = "BTCUSDT",
                i = "BTCUSDC",
                a = "trading-bots",
                s = a,
                u = `${a}/futures/twap`,
                c = `${a}/spot/grid`,
                l = `${a}/spot/grid/detail`,
                f = `${a}/futures/grid`,
                d = `${a}/futures/grid/detail`,
                p = `${a}/spot/rebalancing-bot`,
                h = `${a}/spot/rebalancing-bot/detail`,
                y = `${a}/spot/dca-bot`,
                v = `${a}/spot/dca-bot/detail`,
                m = `${a}/futures/arbitrage`,
                _ = "{symbol}",
                g = `/${a}`,
                b = `/${f}/${_}`,
                E = `/futures/${_}?orderType=TWAP`,
                T = `/${m}/${_}`,
                R = `/${l}`,
                O = `/${d}`,
                S = `/${c}/${_}`,
                A = `/${p}/${_}`,
                w = "binance://trade",
                x = `${w}/trading-bots/futures/grid/${_}`,
                I = `${w}/trading-bots/futures/twap/${_}`,
                C = `${w}/trading-bots/futures/arbitrage/${_}`,
                P = `${w}/trading-bots/spot/grid/${_}`,
                D = `${w}/trading-bots/spot/rebalancing-bot/${_}`,
                U = `${w}/trading-bots/spot/dca-bot/${_}`,
                L = `/${y}/${_}`,
                N = "bnc://app.binance.com",
                k = `${N}/trade/strategy?at=spotGrid`,
                M = `${N}/trade/strategy?at=strategyList`,
                j = `${N}/trade/strategy?at=leaderBoard&subTab=topROI&gridType=futuresGrid`,
                B = {
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
                F = {
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
                    spotGrid: r.Sn,
                    futGrid: r.us,
                    rebot: r.$$,
                    auto: r._$
                }
        },
        xfYC: (e, t, n) => {
            "use strict";
            n.d(t, {
                EH: () => l,
                Lk: () => c,
                O6: () => f,
                Yx: () => a,
                ll: () => s,
                vV: () => u
            });
            var r = n("m0k9"),
                o = n("hbgo");
            const {
                isHybrid: i
            } = (0, r.S)(), a = i ? "h5" : "web", s = {
                click: "$WebClick",
                moduleView: "ModuleView",
                popupView: "PopupView",
                $pageView: "$pageview",
                placeOrderEvent: "place_order_event",
                user_convert_event: "user_convert_event",
                widgetError: "widget_error",
                edit_reminder_popup: "edit_reminder_popup"
            }, u = {
                spot: "spot",
                um: "um",
                cm: "cm",
                spotGrid: "spot_grid",
                futuresGrid: "futures_grid",
                strategyTrading: "strategy_trading",
                rebalancingBot: "rebalancing_bot",
                arbitrageBot: "arbitrage_bot"
            }, c = {
                twap: "fut_twap_trading",
                arbitrageBotTrading: "arbitrage_bot_trading",
                arbitrageBotDetail: "arbitrage_bot_detail",
                futuresGrid: "fut_grid_trading",
                futuresGridCM: "cm_grid_trading",
                spotGrid: "spot_grid_trading",
                arbitrage: "arbitrage",
                introduction: "introduction",
                strategyPool: "strategy_pool",
                tradingAnalytics: "trading_analytics",
                spotGridDetail: "spot_grid_order_detail",
                futuresGridDetail: "fut_grid_running_order_detail",
                landingPage: "strategy_landing",
                leaderboard: "strategy_leaderboard",
                rebalancingBotTrading: "rebalancing_bot_trading",
                rebalancingBotRunning: "rebalancing_bot_running",
                rebalancingBotHistory: "rebalancing_bot_history",
                rebalancingBotDetail: "rebalancing_bot_detail",
                rebalancingBotRunningDetail: "rebalancing_bot_running_detail",
                rebalancingBotHistoryDetail: "rebalancing_bot_history_detail",
                spotDcaTrading: "spot_dca_trading",
                spotDcaDetail: "spot_dca_detail",
                spotDcaRunningDetail: "spot_dca_running_detail",
                spotDcaHistoryDetail: "spot_dca_hitory_detail"
            }, l = {
                [o.Jo.FUTURES_GRID]: c.futuresGrid,
                [o.Jo.SPOT_GRID]: c.spotGrid,
                [o.Jo.ARBITRAGE]: c.arbitrageBotTrading,
                [o.Jo.REBALANCING_BOT]: c.rebalancingBotTrading,
                [o.Jo.SPOT_DCA]: c.spotDcaTrading,
                [o.Jo.TWAP]: c.twap
            }, f = {
                [c.futuresGrid]: "fut_grid_trading",
                [c.spotGrid]: "spot_grid_trading",
                [c.twap]: "fut_twap_trading",
                [c.introduction]: "introduction",
                [c.strategyPool]: "strategyPool",
                [c.tradingAnalytics]: "tradingAnalytics"
            }
        },
        hbgo: (e, t, n) => {
            "use strict";
            n.d(t, {
                $$: () => i,
                J: () => f,
                Jo: () => c,
                Lw: () => d,
                S8: () => u,
                Sn: () => o,
                _$: () => a,
                sY: () => s,
                us: () => r,
                v0: () => l
            });
            const r = "futuresGrid",
                o = "spotGrid",
                i = "rebalancingBot",
                a = "autoInvest",
                s = "spotDca",
                u = "arbitrage",
                c = {
                    TWAP: "twap",
                    FUTURES_GRID: r,
                    SPOT_GRID: o,
                    REBALANCING_BOT: i,
                    SPOT_DCA: s,
                    SPOT_TWAP: "spotTwap",
                    ARBITRAGE: u
                },
                l = [o, s, i],
                f = {
                    SPOT_GIRD: 1,
                    FUTURES_GRID_UM: 2,
                    FUTURES_GRID_CM: 3
                },
                d = {
                    REBALANCE_BOT: "REBALANCE_BOT",
                    SPOT_GRID: "SPOT_GRID",
                    DELIVERY_GRID: "DELIVERY_GRID",
                    SPOT_DCA: "SPOT_DCA",
                    FUTURE_GRID: "FUTURE_GRID"
                }
        },
        "1Au+": (e, t, n) => {
            "use strict";
            n.d(t, {
                LO: () => a,
                YX: () => o,
                bo: () => i
            });
            var r = n("hbgo");
            const o = {
                    [r.$$]: "REBALANCING_BOT_DISCLAIMER",
                    [r.sY]: "TRADING_BOTS_DISCLAIMER",
                    [r.S8]: "TRADING_BOTS_DISCLAIMER"
                },
                i = "202404",
                a = {
                    [r.sY]: "202304",
                    [r.S8]: "202404"
                }
        },
        Cr5V: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => a,
                L: () => i
            });
            var r = n("DTvD"),
                o = n("J+48");
            const i = ({
                    currency: e,
                    isUseCache: t = !0
                }) => {
                    const {
                        restrictedBusinessMap: n,
                        isLoading: i
                    } = (0, o.v)({
                        currency: e,
                        isUseCache: t
                    });
                    return {
                        checkIsValidOption: (0, r.useCallback)((e => !i && "undefined" === typeof n[e]), [i, n]),
                        isValidCheckReady: !i
                    }
                },
                a = async ({
                    queryClient: e,
                    currency: t
                }) => {
                    await (0, o.T)({
                        queryClient: e,
                        currency: t
                    })
                }
        },
        "J+48": (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => m,
                v: () => v
            });
            var r = n("DTvD"),
                o = n("RrWx"),
                i = n.n(o),
                a = n("VLTf"),
                s = n.n(a),
                u = n("+K15"),
                c = n("bt5r"),
                l = n("QWVi"),
                f = n("4hgs"),
                d = n("Zfyq"),
                p = n("krnk");
            const h = {},
                y = (e, t) => {
                    const n = e.restriction.keys ? .reduce(((e, t) => ({ ...e,
                        [t]: t
                    })), {});
                    return "function" === typeof t ? .onResponse && t.onResponse(n || h), n
                },
                v = ({
                    currency: e,
                    isUseCache: t = !1
                }) => {
                    const n = c.b8R ? "electron" : "WEB",
                        {
                            restriction: o,
                            isLoading: a,
                            isFetched: v,
                            isError: m
                        } = ((e, t, n) => {
                            const {
                                data: r,
                                isLoading: o,
                                isFetched: i,
                                isError: a
                            } = (0, f.useQuery)(p.t5.businessComplianceCheck, (() => (0, d.K$)({
                                platform: e,
                                currency: t
                            }).then((e => {
                                if (e.success) return y(e.data, n);
                                throw new Error("queryBusinessComplianceCheck failed")
                            }))), {
                                staleTime: 1 / 0
                            });
                            return {
                                restriction: r || h,
                                isLoading: o,
                                isFetched: i,
                                isError: a
                            }
                        })(n, e, {
                            onResponse: e => u.IG.setItem(l.OL, e)
                        }),
                        _ = (0, r.useRef)(c.S$s ? {} : u.IG.getItem(l.OL));
                    if (c.S$s) return {
                        restrictedBusinessMap: o,
                        isLoading: !0,
                        isError: !1
                    };
                    if (t && (!v || s()(_.current, o))) try {
                        if (_.current && i()(_.current)) return {
                            restrictedBusinessMap: _.current,
                            isLoading: !1,
                            isError: !1
                        }
                    } catch (g) {}
                    return {
                        restrictedBusinessMap: o,
                        isLoading: a,
                        isError: m
                    }
                },
                m = ({
                    queryClient: e,
                    currency: t
                }) => (({
                    queryClient: e,
                    platform: t,
                    currency: n
                }) => e.prefetchQuery(p.t5.businessComplianceCheck, (() => (0, d.K$)({
                    platform: t,
                    currency: n
                }).then((e => y(e.data)))), {
                    staleTime: 1 / 0
                }))({
                    queryClient: e,
                    currency: t,
                    platform: c.b8R ? "electron" : "WEB"
                })
        },
        trXm: (e, t, n) => {
            "use strict";
            n.d(t, {
                $y: () => o,
                F$: () => i,
                Y_: () => a,
                ud: () => s,
                w7: () => u
            });
            var r = n("3ARj");
            const o = () => (0, r.o)("", "spot-strategy-ui"),
                i = () => (0, r.o)("", "futures-strategy-ui"),
                a = () => (0, r.o)("", "strategy-widget"),
                s = () => {
                    const e = (0, r.o)("futures-trade", "futures-ui");
                    return { ...e,
                        getFutI18n: e.getI18n
                    }
                },
                u = () => (0, r.o)("trd-market", "trade-ui")
        },
        "5rIN": (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => i
            });
            var r = n("bt5r"),
                o = n("S9gL");

            function i() {
                const e = r.S$s ? {
                    deviceWidth: 1600
                } : void 0;
                return {
                    isMobile: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 767px)"
                    }, e),
                    isNotPc: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 1023px)"
                    }, e),
                    isTablet: (0, o.useMediaQuery)({
                        query: "screen and (min-width: 768px) and (max-width: 1023px)"
                    }, e),
                    isLeastWebSize: (0, o.useMediaQuery)({
                        query: "screen and (min-width: 1024px)"
                    }, e),
                    is13Desk: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 1439px)"
                    }, e)
                }
            }
        },
        G3iB: (e, t, n) => {
            "use strict";
            n.d(t, {
                F7: () => i,
                Nx: () => o
            });
            var r = n("DTvD");
            const o = (0, r.createContext)(void 0),
                i = () => (() => {
                    const e = (0, r.useContext)(o);
                    if (!e) throw new Error("SkeletonProvider: Prop Skeleton need themes");
                    return e
                })()
        },
        dFCX: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => o,
                v: () => i
            });
            var r = n("DTvD");
            const o = (0, r.createContext)(void 0),
                i = () => (0, r.useContext)(o)
        },
        UuPx: (e, t, n) => {
            "use strict";
            n.d(t, {
                fu: () => u,
                lA: () => c,
                nE: () => l
            });
            var r = n("1HmZ"),
                o = n("fc5I"),
                i = n.n(o),
                a = n("DTvD"),
                s = n("dFCX");
            const u = (0, a.createContext)(void 0),
                c = () => (0, a.useContext)(u),
                l = () => {
                    const e = (0, s.v)(),
                        t = c();
                    return (0, r.Z)(((n, r, o) => e ? e(n, { ...t,
                        ...r || {}
                    }, o || i()) : i()))
                }
        },
        qV1O: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => s
            });
            var r = n("mXdx"),
                o = n("DTvD"),
                i = n("dFCX"),
                a = n("UuPx");
            const s = (0, o.memo)((({
                children: e,
                defaultTrackingData: t,
                sensorTrack: n
            }) => {
                const s = (0, o.useContext)(a.fu) || {},
                    u = (0, o.useContext)(i.G),
                    c = { ...s,
                        ...t || {}
                    };
                return (0, r.jsx)(i.G.Provider, {
                    value: n || u,
                    children: (0, r.jsx)(a.fu.Provider, {
                        value: c,
                        children: e
                    })
                })
            }));
            a.fu.displayName = "TrackProvider"
        },
        P0pw: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r,
                R: () => o
            });
            const r = new class {
                    constructor() {
                        this.cbs = {}, this.on = (e, t) => (this.cbs[e] || (this.cbs[e] = []), this.cbs[e].push(t), () => this.off(e, t)), this.off = (e, t) => {
                            this.cbs[e] || (this.cbs[e] = []), this.cbs[e] = this.cbs[e].filter((e => e !== t))
                        }, this.emit = (e, ...t) => {
                            this.cbs[e] || (this.cbs[e] = []), this.cbs[e].forEach((e => "function" === typeof e && e(...t)))
                        }
                    }
                },
                o = {
                    CLOSE_MODAL: "CLOSE_MODAL",
                    CLOSE_REBALANCING_MODAL: "CLOSE_REBALANCING_MODAL",
                    ADJUST_REBALANCING_MODAL: "ADJUST_REBALANCING_MODAL",
                    CLOSE_SPOT_GRID_MODAL: "CLOSE_SPOT_GRID_MODAL",
                    TOGGLE_FORM_TAB: "TOGGLE_FORM_TAB",
                    REFRESH_OPEN_SPOT_GRID: "REFRESH_OPEN_SPOT_GRID",
                    UPDATE_RB_HISTORY_TOTAL: "UPDATE_RB_HISTORY_TOTAL",
                    END_DCA_BOT_MODAL: "END_DCA_BOT_MODAL",
                    REFRESH_DCA_RUNNING: "REFRESH_DCA_RUNNING",
                    COPY_GRID: "COPY_GRID",
                    VIEW_AGREEMENT_MODAL: "VIEW_AGREEMENT_MODAL",
                    COPY_SPOT_GRID: "COPY_SPOT_GRID",
                    FUTURES_STRATEGY_FOCUS_INIT_MARGIN: "FUTURES_STRATEGY_FOCUS_INIT_MARGIN",
                    WITHDRAW_GRID_PROFIT: "WITHDRAW_GRID_PROFIT",
                    ARBITRAGE_SPEED_UP_MODAL: "ARBITRAGE_SPEED_UP_MODAL"
                }
        },
        jM3e: (e, t, n) => {
            "use strict";
            n.d(t, {
                $g: () => x,
                CX: () => D,
                GM: () => P,
                NU: () => I,
                Wy: () => w,
                fc: () => m,
                k4: () => O,
                lV: () => g,
                nu: () => E,
                pW: () => C,
                xw: () => U,
                z0: () => S
            });
            n("Vur3");
            var r = n("m0k9"),
                o = n("uoy8"),
                i = n("7wiY"),
                a = n("bt5r");
            const s = "undefined" === typeof window,
                {
                    isHybrid: u
                } = (0, r.S)(),
                c = "TWAP",
                l = "FUTURES_GRID",
                f = "SPOT_GRID",
                d = "REBALANCING_BOT",
                p = "SPOT_DCA",
                h = "ARBITRAGE_BOT",
                y = e => {
                    let t = e === l || e === c ? o.cb : o.d5;
                    if (s) return t;
                    try {
                        const n = localStorage.getItem(`${e}_LOCAL_SYMBOL`);
                        return n ? JSON.parse(n) : t
                    } catch {
                        return t
                    }
                },
                v = e => o.W$.replace("{symbol}", e ? .symbol || y(l)),
                m = (e, t, n = {
                    shouldCheckElectron: !1
                }) => n ? .shouldCheckElectron && a.b8R ? v(e) : o.Hu.replace(o.rs, e.symbol || y(l)) + (t || ""),
                _ = e => o.Ek.replace("{symbol}", e ? .symbol || y(c)),
                g = (e, t, n = {
                    shouldCheckElectron: !1
                }) => n ? .shouldCheckElectron && a.b8R ? _({
                    symbol: e ? .symbol
                }) : o.Di.replace(o.rs, e.symbol || y(c)) + (t || ""),
                b = e => o.Mj.replace("{symbol}", e ? .symbol || y(d)),
                E = (e, t, n = {
                    shouldCheckElectron: !1
                }) => n ? .shouldCheckElectron && a.b8R ? b({
                    symbol: e ? .symbol
                }) : o.VX.replace(o.rs, e.symbol || y(d)) + (t || ""),
                T = e => o.bT.replace("{symbol}", e ? .symbol || y(p)),
                R = e => o.n5.replace("{symbol}", e ? .symbol || y(h)),
                O = (e, t, n = {
                    shouldCheckElectron: !1
                }) => n ? .shouldCheckElectron && a.b8R ? T({
                    symbol: e ? .symbol
                }) : o.WI.replace("{symbol}", e.symbol || y(p)) + (t || ""),
                S = (e, t, n = {
                    shouldCheckElectron: !1
                }) => n ? .shouldCheckElectron && a.b8R ? R({
                    symbol: e ? .symbol
                }) : o.YY.replace("{symbol}", e.symbol || y(h)) + (t || ""),
                A = e => o.t7.replace("{symbol}", e ? .symbol || y(f)),
                w = (e, t, n = {
                    shouldCheckH5: !1,
                    shouldCheckElectron: !1
                }) => n.shouldCheckH5 && u ? (e => `${o.pM}&symbol=${e.symbol||y(f)}`)({
                    symbol: e.symbol
                }) : n.shouldCheckElectron && a.b8R ? A({
                    symbol: e.symbol
                }) : o.gF.replace(o.rs, e.symbol || y(f)) + (t || ""),
                x = e => o.Ax + (e || ""),
                I = e => o.fP + (e || ""),
                C = (e, t, n) => {
                    const r = (e => e.includes(o.FK) ? c : e.includes(o.ZG) ? l : e.includes(o.aY) ? f : e.includes(o.B2) ? d : e.includes(o.iO) ? p : e.includes(o.C$) ? h : "")(e);
                    switch (r) {
                        case f:
                            return w(t, n || "");
                        case l:
                            return m(t, n || "");
                        case c:
                            return g(t, n || "");
                        case d:
                            return E(t, n || "");
                        case p:
                            return O(t, n || "");
                        case h:
                            return S(t, n || "");
                        default:
                            return ""
                    }
                },
                P = (e, t, n) => {
                    switch (e) {
                        case "spotGrid":
                            return w(t, n || "");
                        case "futuresGrid":
                            return m(t, n || "");
                        case "twap":
                            return g(t, n || "");
                        case "rebalancingBot":
                            return E(t, n || "");
                        case "spotDca":
                            return O(t, n || "");
                        case "arbitrage":
                            return S(t, n || "");
                        default:
                            return ""
                    }
                },
                D = ({
                    search: e,
                    tab: t,
                    strategy: n,
                    module: r
                }) => {
                    if (u) return t === i.F.strategyList ? o.Wg : o.Kf;
                    const a = t === i.F.leaderBoard,
                        s = o.Ql + (e || "");
                    if (a || r) {
                        const e = `${s}#${a?o.MI.BOT_MARKET_PLACE:r}`;
                        return n ? `${e}-${n}` : e
                    }
                    return s
                },
                U = e => e.includes(o.LP)
        },
        qRru: (e, t, n) => {
            "use strict";
            n.d(t, {
                w_: () => u,
                cc: () => s,
                u4: () => l
            });
            var r = n("1CC6");
            const o = "undefined" === typeof window;
            let i, a = "";
            "undefined" !== typeof window && (a = function(e, t) {
                const n = document.getElementsByTagName("meta");
                for (let r = 0; r < n.length; r++)
                    if (n[r].getAttribute(e) === t) return n[r].getAttribute("content");
                return ""
            }("http-equiv", "etag"));
            const s = e => {
                    i = e
                },
                u = () => i,
                c = new Set,
                l = (e, t) => {
                    o || (c.add([e, t]), i && (c.forEach((([e, t]) => {
                        const n = { ...t,
                            etag: a,
                            bnc_uuid: r.U.read("bnc-uuid")
                        };
                        i.track(e, n)
                    })), c.clear()))
                }
        },
        "1VHe": (e, t, n) => {
            "use strict";
            n.d(t, {
                $U: () => u,
                fY: () => c
            });
            var r = n("S+0I"),
                o = n("66mo"),
                i = n.n(o),
                a = n("5nld"),
                s = n("XqCI"),
                u = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.Jt)("/bapi/asset/v1/public/asset-service/product/get-exchange-info?".concat((0, s.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.Jt)("/api/v3/exchangeInfo".concat(t ? "?".concat((0, s.E2)(t)) : ""));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 2, e.next = 5, (0, a.Jt)("/api/v3/avgPrice?".concat((0, s.E2)(t)));
                                case 5:
                                    r = e.sent, n = {
                                        success: !0,
                                        data: r
                                    }, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(2), n = {
                                        success: !1
                                    };
                                case 12:
                                    return e.abrupt("return", n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())
        },
        UiLJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ow: () => s,
                Ph: () => u,
                kI: () => c
            });
            var r = n("S+0I"),
                o = n("66mo"),
                i = n.n(o),
                a = n("5nld"),
                s = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.Jt)("/bapi/futures/v1/private/future/grid/query-grid-detail?strategyId=".concat(t.strategyId));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {}
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.Jt)("/bapi/futures/v1/private/future/grid/query-open-grids?symbol=".concat(t.symbol));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: []
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.Jt)("/bapi/futures/v1/private/future/grid/query-matched-info?strategyId=".concat(t.strategyId));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v1/private/future/grid/query-grid-matched-items", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v1/private/future/grid/update-grid", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                u = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v2/private/future/grid/query-grid-history", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", t);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                c = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v1/private/future/grid/query-trailing-records", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", n);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v2/private/future/grid/query-reward-center-tasks");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: !1,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", t);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }());
            ! function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, a.bE)("/bapi/futures/v1/private/future/grid/update-grid-investment", t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                    code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                };
                            case 10:
                                return e.abrupt("return", n);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }()
        },
        lUEC: (e, t, n) => {
            "use strict";

            function r(e) {
                if ("undefined" === typeof window) {
                    var t, n, r = null === (t = null === e || void 0 === e ? void 0 : e.request.headers) || void 0 === t ? void 0 : t["bnc-cpl-tags"],
                        o = null === (n = null === e || void 0 === e ? void 0 : e.request.headers) || void 0 === n ? void 0 : n["bnc-region"],
                        i = {};
                    return r && (i["bnc-cpl-tags"] = r), o && (i["bnc-region"] = o), i
                }
                var a, s = null === (a = document.querySelector('script[id="bnc-cpl-headers"]')) || void 0 === a ? void 0 : a.textContent;
                try {
                    return JSON.parse(null !== s && void 0 !== s ? s : "{}")
                } catch (u) {
                    return {}
                }
            }
            n.d(t, {
                M: () => r
            })
        },
        "1/4D": (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => l
            });
            var r = n("DTvD"),
                o = n("S+0I"),
                i = n("66mo"),
                a = n.n(i),
                s = {
                    experiments: {
                        isLoading: !1,
                        result: {}
                    },
                    featureGates: {
                        isLoading: !1,
                        result: {}
                    },
                    lazyFetch: !1,
                    fetch: (0, o._)(a().mark((function e() {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                u = (0, r.createContext)(s),
                c = {
                    futuresTradeUI: (0, r.createContext)(s),
                    "finance-common": (0, r.createContext)(s),
                    "spot-trade-ui": (0, r.createContext)(s),
                    "futures-strategy-ui": (0, r.createContext)(s),
                    "options-ui": (0, r.createContext)(s),
                    default: u
                },
                l = function(e) {
                    return e in c ? c[e] : (console.warn("No context found for themis app: ".concat(e)), c.default)
                }
        },
        AyYO: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => d
            });
            var r = n("S+0I"),
                o = n("mguP"),
                i = n("66mo"),
                a = n.n(i),
                s = n("DTvD"),
                u = n("BmHO"),
                c = n.n(u),
                l = n("1HmZ"),
                f = {},
                d = function(e, t, n, i) {
                    var u = i || {},
                        d = u.onError,
                        p = u.afterInit,
                        h = (0, o._)((0, s.useState)(n), 2),
                        y = h[0],
                        v = h[1],
                        m = (0, o._)((0, s.useState)(!1), 2),
                        _ = m[0],
                        g = m[1],
                        b = f[e] || c().createInstance({
                            name: e
                        });
                    b && !f[e] && (f[e] = b);
                    var E = (0, l.Z)((function(e) {
                            "function" === typeof d && d(e)
                        })),
                        T = (0, l.Z)((function(e) {
                            "function" === typeof p && p(e)
                        })),
                        R = (0, l.Z)((function(e) {
                            b.setItem(t, e).then((function() {
                                v(e)
                            })).catch((function(e) {
                                E(e)
                            }))
                        }));
                    return (0, s.useEffect)((function() {
                        var e = function() {
                            var e = (0, r._)(a().mark((function e() {
                                var n;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, b.getItem(t);
                                        case 3:
                                            n = e.sent, v((function(e) {
                                                var r = null === n,
                                                    o = r ? e : n;
                                                return r && b.setItem(t, o), T(o), o
                                            })), g(!0), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), E(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [t, E, R, b, T]), {
                        data: y,
                        setData: R,
                        getData: (0, s.useCallback)((0, r._)(a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b.getItem(t);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [b, t]),
                        hasInitialized: _
                    }
                }
        },
        "3ARj": (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => i
            });
            var r = n("DTvD"),
                o = n("ipKi"),
                i = function(e, t) {
                    var n = (0, o.B)(t),
                        i = n.t,
                        a = n.i18n,
                        s = (0, r.useCallback)((function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = [e, t].filter((function(e) {
                                    return e
                                })).join("-");
                            return i(r, n).trim() || ("string" === typeof n ? n : n.defaultValue) || ""
                        }), [i, e]);
                    return {
                        i18n: a,
                        t: i,
                        getI18n: s
                    }
                }
        },
        cFMj: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => P
            });
            var r = n("mguP"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("TGX5"),
                s = n.n(a),
                u = n("oOBz"),
                c = n("7so9"),
                l = n.n(c),
                f = n("hrAD"),
                d = n("1YyT"),
                p = n.n(d),
                h = p().oneOfType([p().string, p().number]),
                y = {
                    orientation: p().oneOf(["portrait", "landscape"]),
                    scan: p().oneOf(["progressive", "interlace"]),
                    aspectRatio: p().string,
                    deviceAspectRatio: p().string,
                    height: h,
                    deviceHeight: h,
                    width: h,
                    deviceWidth: h,
                    color: p().bool,
                    colorIndex: p().bool,
                    monochrome: p().bool,
                    resolution: h
                },
                v = (0, f._)({
                    minAspectRatio: p().string,
                    maxAspectRatio: p().string,
                    minDeviceAspectRatio: p().string,
                    maxDeviceAspectRatio: p().string,
                    minHeight: h,
                    maxHeight: h,
                    minDeviceHeight: h,
                    maxDeviceHeight: h,
                    minWidth: h,
                    maxWidth: h,
                    minDeviceWidth: h,
                    maxDeviceWidth: h,
                    minColor: p().number,
                    maxColor: p().number,
                    minColorIndex: p().number,
                    maxColorIndex: p().number,
                    minMonochrome: p().number,
                    maxMonochrome: p().number,
                    minResolution: h,
                    maxResolution: h
                }, y),
                m = {
                    all: p().bool,
                    grid: p().bool,
                    aural: p().bool,
                    braille: p().bool,
                    handheld: p().bool,
                    print: p().bool,
                    projection: p().bool,
                    screen: p().bool,
                    tty: p().bool,
                    tv: p().bool,
                    embossed: p().bool
                },
                _ = (0, f._)({}, m, v);
            y.type = Object.keys(m);
            const g = {
                all: _,
                types: m,
                matchers: y,
                features: v
            };
            const b = function(e) {
                var t = [];
                return Object.keys(g.all).forEach((function(n) {
                    var r = e[n];
                    null != r && t.push(function(e, t) {
                        var n = (0, u.A)(e);
                        return "number" === typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? "not ".concat(n) : "(".concat(n, ": ").concat(t, ")")
                    }(n, r))
                })), t.join(" and ")
            };
            const E = i().createContext();
            var T = function(e) {
                    if (!e) return null;
                    var t = Object.keys(e);
                    return 0 === t.length ? null : t.reduce((function(t, n) {
                        return t[(0, u.A)(n)] = e[n], t
                    }), {})
                },
                R = function() {
                    var e = i().useRef(!1);
                    return i().useEffect((function() {
                        e.current = !0
                    }), []), e.current
                },
                O = function(e) {
                    var t = function() {
                            return function(e) {
                                return e.query || b(e)
                            }(e)
                        },
                        n = (0, r._)(i().useState(t), 2),
                        o = n[0],
                        a = n[1];
                    return i().useEffect((function() {
                        var e = t();
                        o !== e && a(e)
                    }), [e]), o
                };
            const S = function(e, t, n) {
                var o = function(e) {
                        var t = i().useContext(E),
                            n = function() {
                                return T(e) || T(t)
                            },
                            o = (0, r._)(i().useState(n), 2),
                            a = o[0],
                            s = o[1];
                        return i().useEffect((function() {
                            var e = n();
                            l()(a, e) || s(e)
                        }), [e, t]), a
                    }(t),
                    a = O(e);
                if (!a) throw new Error("Invalid or missing MediaQuery!");
                var u = function(e, t) {
                        var n = function() {
                                return s()(e, t || {}, !!t)
                            },
                            o = (0, r._)(i().useState(n), 2),
                            a = o[0],
                            u = o[1],
                            c = R();
                        return i().useEffect((function() {
                            return c && u(n()),
                                function() {
                                    a.dispose()
                                }
                        }), [e, t]), a
                    }(a, o),
                    c = function(e) {
                        var t = (0, r._)(i().useState(e.matches), 2),
                            n = t[0],
                            o = t[1];
                        return i().useEffect((function() {
                            var t = function() {
                                o(e.matches)
                            };
                            return e.addListener(t), t(),
                                function() {
                                    e.removeListener(t)
                                }
                        }), [e]), n
                    }(u),
                    f = R();
                return i().useEffect((function() {
                    f && n && n(c)
                }), [c]), c
            };
            var A = "undefined" === typeof window,
                w = {
                    query: "screen and (max-width: 767px)"
                },
                x = {
                    query: "screen and (max-width: 1023px)"
                },
                I = {
                    query: "screen and (max-width: 1279px)"
                },
                C = {
                    query: "screen and (max-width: 1439px)"
                };

            function P() {
                if (A) return {
                    isMobile: !1,
                    isIPad: !1,
                    is13Desk: !1,
                    isLeastWebSize: !1
                };
                var e = S(w),
                    t = S(x),
                    n = S(I);
                return {
                    isMobile: e,
                    isIPad: t,
                    is13Desk: S(C),
                    isLeastWebSize: n
                }
            }
        },
        "1HmZ": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("d12p"),
                o = n("DTvD");

            function i(e) {
                var t = this,
                    n = (0, o.useRef)(e);
                n.current = e;
                var i = (0, o.useCallback)((function() {
                    for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                    return ("function" === typeof n.current ? n.current : function() {}).apply(t, (0, r._)(o))
                }), []);
                return "function" === typeof e ? i : e
            }
        },
        tdZS: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("ZWPC"),
                s = n("5E2b"),
                u = (0, a.UF)("uikit-core", "Mask"),
                c = (0, o.forwardRef)((function(e, t) {
                    return u(), e.visible ? i().createElement(s.A, (0, r._)({
                        ref: t,
                        variant: "mask"
                    }, e, {
                        __css: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }
                    })) : null
                }));
            c.displayName = "Mask";
            const l = c
        },
        TUyf: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => h
            });
            var r = n("DTvD"),
                o = n.n(r);

            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(null, arguments)
            }
            var a = n("hTvQ"),
                s = n.n(a),
                u = ["as"];
            var c = n("mguP"),
                l = "undefined" !== typeof window ? o().useLayoutEffect : o().useEffect,
                f = function(e, t) {
                    "function" === typeof e ? e(t) : e && (e.current = t)
                };
            const d = o().forwardRef((function(e, t) {
                var n = e.children,
                    r = e.container,
                    i = e.disablePortal,
                    a = void 0 !== i && i,
                    u = (0, c._)(o().useState(), 2),
                    d = u[0],
                    p = u[1];
                return l((function() {
                    a || p(function(e) {
                        return e = "function" === typeof e ? e() : e, s().findDOMNode(e)
                    }(r) || document.body)
                }), [r]), l((function() {
                    if (d && !a) return f(t, d),
                        function() {
                            f(t, null)
                        }
                }), [t, d, a]), a ? o().isValidElement(n) ? o().cloneElement(n, {
                    ref: t
                }) : n : d ? s().createPortal(n, d) : null
            }));
            var p = function(e) {
                var t = (void 0 === e ? {} : e).multiSources,
                    n = {};

                function r(e) {
                    n.value = e, n.set && n.set.current && n.set.current(e)
                }
                return {
                    Source: function(e) {
                        var r = e.children,
                            i = o().useState(null),
                            a = i[0],
                            u = i[1];
                        return o().useLayoutEffect((function() {
                            var e, r = {
                                current: u
                            };
                            return n.set && (e = n.set, t || n.set.current(null)), n.set = r, u(n.value),
                                function() {
                                    r.current = null, n.set = null, e && e.current && (n.set = e, n.set.current(n.value))
                                }
                        }), []), a ? s().createPortal(r, a) : null
                    },
                    Target: function(e) {
                        var t = e.as,
                            n = void 0 === t ? "div" : t,
                            a = function(e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        n[r] = e[r]
                                    }
                                return n
                            }(e, u);
                        return o().createElement(n, i({
                            ref: r
                        }, a))
                    },
                    useTargetRef: function() {
                        return r
                    }
                }
            }();
            (0, r.createContext)(p.Source);
            const h = d
        },
        cj1O: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD"),
                o = n.n(r);

            function i(e, t) {
                "function" === typeof e ? e(t) : e && (e.current = t)
            }

            function a(e, t) {
                return o().useMemo((function() {
                    return null == e && null == t ? null : function(n) {
                        i(e, n), i(t, n)
                    }
                }), [e, t])
            }
        },
        OLW9: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            }
        },
        "/Cny": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
                    fill: "currentColor"
                }))
            }
        },
        rLsV: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        eMzf: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z",
                    fill: "url(#not-found-data_svg__paint0)"
                }), i().createElement("path", {
                    opacity: .15,
                    d: "M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z",
                    fill: "#929AA5"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z",
                    fill: "url(#not-found-data_svg__paint1)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z",
                    fill: "url(#not-found-data_svg__paint2)"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "not-found-data_svg__paint0",
                    x1: 55,
                    y1: 8,
                    x2: 55,
                    y2: 88,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#929AA5",
                    stopOpacity: .1
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#929AA5",
                    stopOpacity: .25
                })), i().createElement("linearGradient", {
                    id: "not-found-data_svg__paint1",
                    x1: 4.172,
                    y1: 68.75,
                    x2: 24.328,
                    y2: 68.75,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#929AA5"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), i().createElement("linearGradient", {
                    id: "not-found-data_svg__paint2",
                    x1: 15,
                    y1: 48,
                    x2: 55,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#929AA5"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            }
        },
        txKm: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15z",
                    fill: "currentColor"
                }))
            }
        },
        vOeE: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M8.825 8L3.95 12.95 5 14l6-6-6-6-1.05 1.05L8.825 8z",
                    fill: "currentColor"
                }))
            }
        },
        DQRa: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.326 13.909l-1.429 1.417L12 13.429l-3.897 3.897-1.429-1.417 3.909-3.898-3.909-3.908 1.429-1.417L12 10.583l3.897-3.897 1.429 1.417-3.897 3.908 3.897 3.898z",
                    fill: "currentColor"
                }))
            }
        },
        "4+lJ": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("b6CO"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("FHqy");
            const s = function(e) {
                return i().createElement(a.A, (0, r._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z",
                    fill: "currentColor"
                }))
            }
        },
        nzVK: (e, t, n) => {
            "use strict";
            n.d(t, {
                PX: () => o,
                Zz: () => s,
                _w: () => i
            });
            var r = n("d12p"),
                o = function(e) {
                    return "string" === typeof e ? e.toLowerCase() : e
                },
                i = function(e) {
                    return function(t) {
                        return t[e]
                    }
                },
                a = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    return function() {
                        for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                        var s = (0, r._)(n).concat((0, r._)(o));
                        return s.length >= e.length ? e.apply(this, s) : a.apply(void 0, [e].concat((0, r._)(s)))
                    }
                },
                s = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return 0 === t.length ? function() {} : 1 === t.length ? t[0] : a(t.reduce((function(e, t) {
                        return function() {
                            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                            return e(t.apply(void 0, (0, r._)(o)))
                        }
                    })))
                }
        },
        tWDR: (e, t, n) => {
            "use strict";
            n.d(t, {
                Lu: () => s
            });
            var r = n("S+0I"),
                o = n("66mo"),
                i = n.n(o),
                a = n("u++W"),
                s = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, a.$s)()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, (0, a.lZ)({
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
        CudX: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => r
            });
            var r = function() {
                var e = !1,
                    t = new Set,
                    n = new Set,
                    r = function() {
                        t.forEach((function(e) {
                            e()
                        })), t.clear()
                    },
                    o = function(e) {
                        r(), e && (n.forEach((function(e) {
                            t.add(e())
                        })), n.clear())
                    };
                return {
                    setReady: function(t) {
                        o(e = t)
                    },
                    onReady: function(t) {
                        n.add(t), e && o(e)
                    },
                    clean: function() {
                        n.clear(), r()
                    }
                }
            }
        },
        CqRL: (e, t, n) => {
            "use strict";
            n.d(t, {
                FL: () => l,
                Lx: () => s,
                PD: () => f,
                ZI: () => u,
                tI: () => c
            });
            var r = new Set(["ws_start", "ws_connected", "ws_closed", "ws_error", "get_token", "get_token_error", "privateRequest"]),
                o = new Set(["ws_error", "ws_start", "ws_connected", "ws_closed", "publicRequest"]),
                i = new Set(["ws_start", "ws_connected", "ws_closed", "ws_error", "get_token", "get_token_error", "friendlyRequest"]),
                a = [],
                s = function(e) {
                    a.push({
                        status: e,
                        timeStamp: Date.now()
                    })
                },
                u = function() {
                    return a.filter((function(e) {
                        var t = e.status;
                        return r.has(t)
                    })).slice(-20)
                },
                c = function() {
                    return a.filter((function(e) {
                        var t = e.status;
                        return o.has(t)
                    })).slice(-20)
                },
                l = function() {
                    return a.filter((function(e) {
                        var t = e.status;
                        return i.has(t)
                    })).slice(-20)
                },
                f = function() {
                    return a.slice(-20)
                }
        },
        EzMS: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => o,
                j: () => r
            });
            var r = function() {},
                o = function(e) {
                    return Math.pow(2, e)
                }
        },
        "u++W": (e, t, n) => {
            "use strict";
            n.d(t, {
                $s: () => A,
                HL: () => w,
                Lq: () => k,
                OX: () => I,
                P4: () => O,
                UE: () => B,
                Vl: () => j,
                XK: () => S,
                gf: () => Q,
                hT: () => M,
                iq: () => x,
                lZ: () => L,
                yS: () => Y
            });
            var r, o, i = n("S+0I"),
                a = n("hrAD"),
                s = n("mguP"),
                u = n("66mo"),
                c = n.n(u),
                l = n("5nld"),
                f = n("8v4f"),
                d = n("jbOn"),
                p = n("EzMS"),
                h = n("CqRL"),
                y = n("CudX"),
                v = f.g.WsReq,
                m = d.g.WsReq,
                _ = f.g.WsMsg,
                g = d.g.WsMsg,
                b = 0,
                E = "",
                T = "V1",
                R = !0,
                O = function() {
                    0
                },
                S = function() {
                    0
                },
                A = function() {
                    return E
                },
                w = function() {
                    return "V2" === T ? m : v
                },
                x = function() {
                    return "V2" === T ? g : _
                },
                I = function() {
                    return b++
                },
                C = function(e) {
                    return new Promise((function(e) {
                        return e(void 0)
                    }))
                },
                P = function(e, t) {},
                D = "",
                U = "web",
                L = function() {
                    var e = (0, i._)(c().mark((function e(t) {
                        var n, o, i, a, s, u, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.sourceUrl, o = t.version, i = t.getSessionInfo, a = t.track, s = t.isHttp, u = t.clientType, l = t.getWsToken, R = s, E = n, T = o, C = i, P = a, r = l, U = u, e.next = 11, C("bnc-uuid");
                                case 11:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 14;
                                        break
                                    }
                                    e.t0 = "";
                                case 14:
                                    D = e.t0;
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
                N = p.j,
                k = function(e) {
                    N = e
                },
                M = function() {
                    return C
                },
                j = function() {
                    return N
                },
                B = function() {
                    return function(e, t) {
                        var n = [];
                        switch (t) {
                            case "private":
                                n = (0, h.ZI)();
                                break;
                            case "public":
                                n = (0, h.tI)();
                                break;
                            case "friendly":
                                n = (0, h.FL)();
                                break;
                            default:
                                n = (0, h.PD)()
                        }
                        var r = n.reverse(),
                            i = function(e) {
                                return e >= 10 ? e : "0".concat(e)
                            },
                            u = new Date,
                            c = "".concat(u.getFullYear(), "-").concat(i(u.getMonth() + 1), "-").concat(i(u.getDate()), " ").concat(i(u.getHours()), ":").concat(i(u.getMinutes()), ":").concat(i(u.getSeconds()));
                        if (r.length) {
                            for (var l = (0, s._)(r, 1)[0], f = l.status, d = 1; d < r.length; d++) f += " <-".concat(r[d - 1].timeStamp - r[d].timeStamp, "- ").concat(r[d].status);
                            P("ws_http_sdk", (0, a._)({
                                ws_time: c,
                                uuid: D,
                                clientType: U,
                                isHttp: R.toString(),
                                status: l.status,
                                ws_token: "string" === typeof o ? o.slice(-16) : "undefined",
                                duration: 1 === r.length ? 0 : r[0].timeStamp - r[1].timeStamp,
                                statuses: f,
                                ws_sourceUrl: E
                            }, e))
                        } else P("ws_http_sdk", (0, a._)({
                            ws_time: c,
                            uuid: D,
                            clientType: U,
                            ws_token: "string" === typeof o ? o.slice(-16) : "undefined",
                            isHttp: R.toString(),
                            ws_sourceUrl: E
                        }, e))
                    }
                },
                F = (0, y.H)(),
                G = F.setReady,
                Q = (F.onReady, function() {
                    var e = (0, i._)(c().mark((function e() {
                        var t, n, i, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, M()("cr00");
                                case 2:
                                    if (t = e.sent, G(!1), !t) {
                                        e.next = 10;
                                        break
                                    }
                                    return (0, h.Lx)("get_token"), n = B(), i = Date.now(), a = function(e, t) {
                                        return Math.min(Math.floor(e / 1e3), t)
                                    }, e.abrupt("return", r ? r() : (0, l.Jt)("/bapi/composite/v1/private/market/ws-token", {
                                        enableErrorMsgIntercept: !1
                                    }).then((function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return null === (o = (null === e || void 0 === e ? void 0 : e.data) || null) && ((0, h.Lx)("get_token_value_invalid"), B()({
                                            ws_tokenData: JSON.stringify(e)
                                        })), G(null === o), B()({
                                            ws_token_time: a(Date.now() - i, 10)
                                        }), o
                                    })).catch((function(e) {
                                        return G(!0), (0, h.Lx)("get_token_error"), n({
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
                Y = function() {
                    return U
                }
        },
        C9w4: (e, t, n) => {
            "use strict";

            function r(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function o(e) {
                return e instanceof r(e).Element || e instanceof Element
            }

            function i(e) {
                return e instanceof r(e).HTMLElement || e instanceof HTMLElement
            }

            function a(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
            }
            n.d(t, {
                n4: () => ye
            });
            var s = Math.max,
                u = Math.min,
                c = Math.round;

            function l() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function f() {
                return !/^((?!chrome|android).)*safari/i.test(l())
            }

            function d(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var a = e.getBoundingClientRect(),
                    s = 1,
                    u = 1;
                t && i(e) && (s = e.offsetWidth > 0 && c(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && c(a.height) / e.offsetHeight || 1);
                var l = (o(e) ? r(e) : window).visualViewport,
                    d = !f() && n,
                    p = (a.left + (d && l ? l.offsetLeft : 0)) / s,
                    h = (a.top + (d && l ? l.offsetTop : 0)) / u,
                    y = a.width / s,
                    v = a.height / u;
                return {
                    width: y,
                    height: v,
                    top: h,
                    right: p + y,
                    bottom: h + v,
                    left: p,
                    x: p,
                    y: h
                }
            }

            function p(e) {
                var t = r(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function h(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function y(e) {
                return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function v(e) {
                return d(y(e)).left + p(e).scrollLeft
            }

            function m(e) {
                return r(e).getComputedStyle(e)
            }

            function _(e) {
                var t = m(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function g(e, t, n) {
                void 0 === n && (n = !1);
                var o = i(t),
                    a = i(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = c(t.width) / e.offsetWidth || 1,
                            r = c(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    s = y(t),
                    u = d(e, a, n),
                    l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    f = {
                        x: 0,
                        y: 0
                    };
                return (o || !o && !n) && (("body" !== h(t) || _(s)) && (l = function(e) {
                    return e !== r(e) && i(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : p(e);
                    var t
                }(t)), i(t) ? ((f = d(t, !0)).x += t.clientLeft, f.y += t.clientTop) : s && (f.x = v(s))), {
                    x: u.left + l.scrollLeft - f.x,
                    y: u.top + l.scrollTop - f.y,
                    width: u.width,
                    height: u.height
                }
            }

            function b(e) {
                var t = d(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function E(e) {
                return "html" === h(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || y(e)
            }

            function T(e) {
                return ["html", "body", "#document"].indexOf(h(e)) >= 0 ? e.ownerDocument.body : i(e) && _(e) ? e : T(E(e))
            }

            function R(e, t) {
                var n;
                void 0 === t && (t = []);
                var o = T(e),
                    i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = r(o),
                    s = i ? [a].concat(a.visualViewport || [], _(o) ? o : []) : o,
                    u = t.concat(s);
                return i ? u : u.concat(R(E(s)))
            }

            function O(e) {
                return ["table", "td", "th"].indexOf(h(e)) >= 0
            }

            function S(e) {
                return i(e) && "fixed" !== m(e).position ? e.offsetParent : null
            }

            function A(e) {
                for (var t = r(e), n = S(e); n && O(n) && "static" === m(n).position;) n = S(n);
                return n && ("html" === h(n) || "body" === h(n) && "static" === m(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(l());
                    if (/Trident/i.test(l()) && i(e) && "fixed" === m(e).position) return null;
                    var n = E(e);
                    for (a(n) && (n = n.host); i(n) && ["html", "body"].indexOf(h(n)) < 0;) {
                        var r = m(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var w = "top",
                x = "bottom",
                I = "right",
                C = "left",
                P = "auto",
                D = [w, x, I, C],
                U = "start",
                L = "end",
                N = "viewport",
                k = "popper",
                M = D.reduce((function(e, t) {
                    return e.concat([t + "-" + U, t + "-" + L])
                }), []),
                j = [].concat(D, [P]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + U, t + "-" + L])
                }), []),
                B = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function F(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }

            function G(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var Q = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function Y() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function q(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    i = t.defaultOptions,
                    a = void 0 === i ? Q : i;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var i = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, Q, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        s = [],
                        u = !1,
                        c = {
                            state: i,
                            setOptions: function(n) {
                                var u = "function" === typeof n ? n(i.options) : n;
                                l(), i.options = Object.assign({}, a, i.options, u), i.scrollParents = {
                                    reference: o(e) ? R(e) : e.contextElement ? R(e.contextElement) : [],
                                    popper: R(t)
                                };
                                var f = function(e) {
                                    var t = F(e);
                                    return B.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, i.options.modifiers)));
                                return i.orderedModifiers = f.filter((function(e) {
                                    return e.enabled
                                })), i.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" === typeof o) {
                                        var a = o({
                                                state: i,
                                                name: t,
                                                instance: c,
                                                options: r
                                            }),
                                            u = function() {};
                                        s.push(a || u)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!u) {
                                    var e = i.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (Y(t, n)) {
                                        i.rects = {
                                            reference: g(t, A(n), "fixed" === i.options.strategy),
                                            popper: b(n)
                                        }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach((function(e) {
                                            return i.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < i.orderedModifiers.length; r++)
                                            if (!0 !== i.reset) {
                                                var o = i.orderedModifiers[r],
                                                    a = o.fn,
                                                    s = o.options,
                                                    l = void 0 === s ? {} : s,
                                                    f = o.name;
                                                "function" === typeof a && (i = a({
                                                    state: i,
                                                    options: l,
                                                    name: f,
                                                    instance: c
                                                }) || i)
                                            } else i.reset = !1, r = -1
                                    }
                                }
                            },
                            update: G((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(i)
                                }))
                            })),
                            destroy: function() {
                                l(), u = !0
                            }
                        };
                    if (!Y(e, t)) return c;

                    function l() {
                        s.forEach((function(e) {
                            return e()
                        })), s = []
                    }
                    return c.setOptions(n).then((function(e) {
                        !u && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), c
                }
            }
            var H = {
                passive: !0
            };

            function V(e) {
                return e.split("-")[0]
            }

            function z(e) {
                return e.split("-")[1]
            }

            function W(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function $(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? V(o) : null,
                    a = o ? z(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    u = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case w:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case x:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case I:
                        t = {
                            x: n.x + n.width,
                            y: u
                        };
                        break;
                    case C:
                        t = {
                            x: n.x - r.width,
                            y: u
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? W(i) : null;
                if (null != c) {
                    var l = "y" === c ? "height" : "width";
                    switch (a) {
                        case U:
                            t[c] = t[c] - (n[l] / 2 - r[l] / 2);
                            break;
                        case L:
                            t[c] = t[c] + (n[l] / 2 - r[l] / 2)
                    }
                }
                return t
            }
            var K = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function X(e) {
                var t, n = e.popper,
                    o = e.popperRect,
                    i = e.placement,
                    a = e.variation,
                    s = e.offsets,
                    u = e.position,
                    l = e.gpuAcceleration,
                    f = e.adaptive,
                    d = e.roundOffsets,
                    p = e.isFixed,
                    h = s.x,
                    v = void 0 === h ? 0 : h,
                    _ = s.y,
                    g = void 0 === _ ? 0 : _,
                    b = "function" === typeof d ? d({
                        x: v,
                        y: g
                    }) : {
                        x: v,
                        y: g
                    };
                v = b.x, g = b.y;
                var E = s.hasOwnProperty("x"),
                    T = s.hasOwnProperty("y"),
                    R = C,
                    O = w,
                    S = window;
                if (f) {
                    var P = A(n),
                        D = "clientHeight",
                        U = "clientWidth";
                    if (P === r(n) && "static" !== m(P = y(n)).position && "absolute" === u && (D = "scrollHeight", U = "scrollWidth"), i === w || (i === C || i === I) && a === L) O = x, g -= (p && P === S && S.visualViewport ? S.visualViewport.height : P[D]) - o.height, g *= l ? 1 : -1;
                    if (i === C || (i === w || i === x) && a === L) R = I, v -= (p && P === S && S.visualViewport ? S.visualViewport.width : P[U]) - o.width, v *= l ? 1 : -1
                }
                var N, k = Object.assign({
                        position: u
                    }, f && K),
                    M = !0 === d ? function(e, t) {
                        var n = e.x,
                            r = e.y,
                            o = t.devicePixelRatio || 1;
                        return {
                            x: c(n * o) / o || 0,
                            y: c(r * o) / o || 0
                        }
                    }({
                        x: v,
                        y: g
                    }, r(n)) : {
                        x: v,
                        y: g
                    };
                return v = M.x, g = M.y, l ? Object.assign({}, k, ((N = {})[O] = T ? "0" : "", N[R] = E ? "0" : "", N.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", N)) : Object.assign({}, k, ((t = {})[O] = T ? g + "px" : "", t[R] = E ? v + "px" : "", t.transform = "", t))
            }
            const Z = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.offset,
                        i = void 0 === o ? [0, 0] : o,
                        a = j.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = V(e),
                                    o = [C, w].indexOf(r) >= 0 ? -1 : 1,
                                    i = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    a = i[0],
                                    s = i[1];
                                return a = a || 0, s = (s || 0) * o, [C, I].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: a
                                } : {
                                    x: a,
                                    y: s
                                }
                            }(n, t.rects, i), e
                        }), {}),
                        s = a[t.placement],
                        u = s.x,
                        c = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                }
            };
            var J = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function ee(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return J[e]
                }))
            }
            var te = {
                start: "end",
                end: "start"
            };

            function ne(e) {
                return e.replace(/start|end/g, (function(e) {
                    return te[e]
                }))
            }

            function re(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && a(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function ie(e, t, n) {
                return t === N ? oe(function(e, t) {
                    var n = r(e),
                        o = y(e),
                        i = n.visualViewport,
                        a = o.clientWidth,
                        s = o.clientHeight,
                        u = 0,
                        c = 0;
                    if (i) {
                        a = i.width, s = i.height;
                        var l = f();
                        (l || !l && "fixed" === t) && (u = i.offsetLeft, c = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: s,
                        x: u + v(e),
                        y: c
                    }
                }(e, n)) : o(t) ? function(e, t) {
                    var n = d(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                }(t, n) : oe(function(e) {
                    var t, n = y(e),
                        r = p(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = s(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        a = s(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        u = -r.scrollLeft + v(e),
                        c = -r.scrollTop;
                    return "rtl" === m(o || n).direction && (u += s(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: a,
                        x: u,
                        y: c
                    }
                }(y(e)))
            }

            function ae(e, t, n, r) {
                var a = "clippingParents" === t ? function(e) {
                        var t = R(E(e)),
                            n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && i(e) ? A(e) : e;
                        return o(n) ? t.filter((function(e) {
                            return o(e) && re(e, n) && "body" !== h(e)
                        })) : []
                    }(e) : [].concat(t),
                    c = [].concat(a, [n]),
                    l = c[0],
                    f = c.reduce((function(t, n) {
                        var o = ie(e, n, r);
                        return t.top = s(o.top, t.top), t.right = u(o.right, t.right), t.bottom = u(o.bottom, t.bottom), t.left = s(o.left, t.left), t
                    }), ie(e, l, r));
                return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f
            }

            function se(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function ue(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function ce(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    i = void 0 === r ? e.placement : r,
                    a = n.strategy,
                    s = void 0 === a ? e.strategy : a,
                    u = n.boundary,
                    c = void 0 === u ? "clippingParents" : u,
                    l = n.rootBoundary,
                    f = void 0 === l ? N : l,
                    p = n.elementContext,
                    h = void 0 === p ? k : p,
                    v = n.altBoundary,
                    m = void 0 !== v && v,
                    _ = n.padding,
                    g = void 0 === _ ? 0 : _,
                    b = se("number" !== typeof g ? g : ue(g, D)),
                    E = h === k ? "reference" : k,
                    T = e.rects.popper,
                    R = e.elements[m ? E : h],
                    O = ae(o(R) ? R : R.contextElement || y(e.elements.popper), c, f, s),
                    S = d(e.elements.reference),
                    A = $({
                        reference: S,
                        element: T,
                        strategy: "absolute",
                        placement: i
                    }),
                    C = oe(Object.assign({}, T, A)),
                    P = h === k ? C : S,
                    U = {
                        top: O.top - P.top + b.top,
                        bottom: P.bottom - O.bottom + b.bottom,
                        left: O.left - P.left + b.left,
                        right: P.right - O.right + b.right
                    },
                    L = e.modifiersData.offset;
                if (h === k && L) {
                    var M = L[i];
                    Object.keys(U).forEach((function(e) {
                        var t = [I, x].indexOf(e) >= 0 ? 1 : -1,
                            n = [w, x].indexOf(e) >= 0 ? "y" : "x";
                        U[e] += M[n] * t
                    }))
                }
                return U
            }

            function le(e, t, n) {
                return s(e, u(t, n))
            }
            const fe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.mainAxis,
                        i = void 0 === o || o,
                        a = n.altAxis,
                        c = void 0 !== a && a,
                        l = n.boundary,
                        f = n.rootBoundary,
                        d = n.altBoundary,
                        p = n.padding,
                        h = n.tether,
                        y = void 0 === h || h,
                        v = n.tetherOffset,
                        m = void 0 === v ? 0 : v,
                        _ = ce(t, {
                            boundary: l,
                            rootBoundary: f,
                            padding: p,
                            altBoundary: d
                        }),
                        g = V(t.placement),
                        E = z(t.placement),
                        T = !E,
                        R = W(g),
                        O = "x" === R ? "y" : "x",
                        S = t.modifiersData.popperOffsets,
                        P = t.rects.reference,
                        D = t.rects.popper,
                        L = "function" === typeof m ? m(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : m,
                        N = "number" === typeof L ? {
                            mainAxis: L,
                            altAxis: L
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, L),
                        k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        M = {
                            x: 0,
                            y: 0
                        };
                    if (S) {
                        if (i) {
                            var j, B = "y" === R ? w : C,
                                F = "y" === R ? x : I,
                                G = "y" === R ? "height" : "width",
                                Q = S[R],
                                Y = Q + _[B],
                                q = Q - _[F],
                                H = y ? -D[G] / 2 : 0,
                                $ = E === U ? P[G] : D[G],
                                K = E === U ? -D[G] : -P[G],
                                X = t.elements.arrow,
                                Z = y && X ? b(X) : {
                                    width: 0,
                                    height: 0
                                },
                                J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                ee = J[B],
                                te = J[F],
                                ne = le(0, P[G], Z[G]),
                                re = T ? P[G] / 2 - H - ne - ee - N.mainAxis : $ - ne - ee - N.mainAxis,
                                oe = T ? -P[G] / 2 + H + ne + te + N.mainAxis : K + ne + te + N.mainAxis,
                                ie = t.elements.arrow && A(t.elements.arrow),
                                ae = ie ? "y" === R ? ie.clientTop || 0 : ie.clientLeft || 0 : 0,
                                se = null != (j = null == k ? void 0 : k[R]) ? j : 0,
                                ue = Q + oe - se,
                                fe = le(y ? u(Y, Q + re - se - ae) : Y, Q, y ? s(q, ue) : q);
                            S[R] = fe, M[R] = fe - Q
                        }
                        if (c) {
                            var de, pe = "x" === R ? w : C,
                                he = "x" === R ? x : I,
                                ye = S[O],
                                ve = "y" === O ? "height" : "width",
                                me = ye + _[pe],
                                _e = ye - _[he],
                                ge = -1 !== [w, C].indexOf(g),
                                be = null != (de = null == k ? void 0 : k[O]) ? de : 0,
                                Ee = ge ? me : ye - P[ve] - D[ve] - be + N.altAxis,
                                Te = ge ? ye + P[ve] + D[ve] - be - N.altAxis : _e,
                                Re = y && ge ? function(e, t, n) {
                                    var r = le(e, t, n);
                                    return r > n ? n : r
                                }(Ee, ye, Te) : le(y ? Ee : me, ye, y ? Te : _e);
                            S[O] = Re, M[O] = Re - ye
                        }
                        t.modifiersData[r] = M
                    }
                },
                requiresIfExists: ["offset"]
            };
            const de = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        o = e.options,
                        i = n.elements.arrow,
                        a = n.modifiersData.popperOffsets,
                        s = V(n.placement),
                        u = W(s),
                        c = [C, I].indexOf(s) >= 0 ? "height" : "width";
                    if (i && a) {
                        var l = function(e, t) {
                                return se("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : ue(e, D))
                            }(o.padding, n),
                            f = b(i),
                            d = "y" === u ? w : C,
                            p = "y" === u ? x : I,
                            h = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
                            y = a[u] - n.rects.reference[u],
                            v = A(i),
                            m = v ? "y" === u ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                            _ = h / 2 - y / 2,
                            g = l[d],
                            E = m - f[c] - l[p],
                            T = m / 2 - f[c] / 2 + _,
                            R = le(g, T, E),
                            O = u;
                        n.modifiersData[r] = ((t = {})[O] = R, t.centerOffset = R - T, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && re(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function pe(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function he(e) {
                return [w, I, x, C].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var ye = q({
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            o = e.options,
                            i = o.scroll,
                            a = void 0 === i || i,
                            s = o.resize,
                            u = void 0 === s || s,
                            c = r(t.elements.popper),
                            l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return a && l.forEach((function(e) {
                                e.addEventListener("scroll", n.update, H)
                            })), u && c.addEventListener("resize", n.update, H),
                            function() {
                                a && l.forEach((function(e) {
                                    e.removeEventListener("scroll", n.update, H)
                                })), u && c.removeEventListener("resize", n.update, H)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = $({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = n.gpuAcceleration,
                            o = void 0 === r || r,
                            i = n.adaptive,
                            a = void 0 === i || i,
                            s = n.roundOffsets,
                            u = void 0 === s || s,
                            c = {
                                placement: V(t.placement),
                                variation: z(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, X(Object.assign({}, c, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: a,
                            roundOffsets: u
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, X(Object.assign({}, c, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: u
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach((function(e) {
                            var n = t.styles[e] || {},
                                r = t.attributes[e] || {},
                                o = t.elements[e];
                            i(o) && h(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                var t = r[e];
                                !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                            })))
                        }))
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach((function(e) {
                                    var r = t.elements[e],
                                        o = t.attributes[e] || {},
                                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                            return e[t] = "", e
                                        }), {});
                                    i(r) && h(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function(e) {
                                        r.removeAttribute(e)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                }, Z, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name;
                        if (!t.modifiersData[r]._skip) {
                            for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, y = n.allowedAutoPlacements, v = t.options.placement, m = V(v), _ = u || (m === v || !h ? [ee(v)] : function(e) {
                                    if (V(e) === P) return [];
                                    var t = ee(e);
                                    return [ne(e), t, ne(t)]
                                }(v)), g = [v].concat(_).reduce((function(e, n) {
                                    return e.concat(V(n) === P ? function(e, t) {
                                        void 0 === t && (t = {});
                                        var n = t,
                                            r = n.placement,
                                            o = n.boundary,
                                            i = n.rootBoundary,
                                            a = n.padding,
                                            s = n.flipVariations,
                                            u = n.allowedAutoPlacements,
                                            c = void 0 === u ? j : u,
                                            l = z(r),
                                            f = l ? s ? M : M.filter((function(e) {
                                                return z(e) === l
                                            })) : D,
                                            d = f.filter((function(e) {
                                                return c.indexOf(e) >= 0
                                            }));
                                        0 === d.length && (d = f);
                                        var p = d.reduce((function(t, n) {
                                            return t[n] = ce(e, {
                                                placement: n,
                                                boundary: o,
                                                rootBoundary: i,
                                                padding: a
                                            })[V(n)], t
                                        }), {});
                                        return Object.keys(p).sort((function(e, t) {
                                            return p[e] - p[t]
                                        }))
                                    }(t, {
                                        placement: n,
                                        boundary: l,
                                        rootBoundary: f,
                                        padding: c,
                                        flipVariations: h,
                                        allowedAutoPlacements: y
                                    }) : n)
                                }), []), b = t.rects.reference, E = t.rects.popper, T = new Map, R = !0, O = g[0], S = 0; S < g.length; S++) {
                                var A = g[S],
                                    L = V(A),
                                    N = z(A) === U,
                                    k = [w, x].indexOf(L) >= 0,
                                    B = k ? "width" : "height",
                                    F = ce(t, {
                                        placement: A,
                                        boundary: l,
                                        rootBoundary: f,
                                        altBoundary: d,
                                        padding: c
                                    }),
                                    G = k ? N ? I : C : N ? x : w;
                                b[B] > E[B] && (G = ee(G));
                                var Q = ee(G),
                                    Y = [];
                                if (i && Y.push(F[L] <= 0), s && Y.push(F[G] <= 0, F[Q] <= 0), Y.every((function(e) {
                                        return e
                                    }))) {
                                    O = A, R = !1;
                                    break
                                }
                                T.set(A, Y)
                            }
                            if (R)
                                for (var q = function(e) {
                                        var t = g.find((function(t) {
                                            var n = T.get(t);
                                            if (n) return n.slice(0, e).every((function(e) {
                                                return e
                                            }))
                                        }));
                                        if (t) return O = t, "break"
                                    }, H = h ? 3 : 1; H > 0; H--) {
                                    if ("break" === q(H)) break
                                }
                            t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, fe, de, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            r = t.rects.reference,
                            o = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            a = ce(t, {
                                elementContext: "reference"
                            }),
                            s = ce(t, {
                                altBoundary: !0
                            }),
                            u = pe(a, r),
                            c = pe(s, o, i),
                            l = he(u),
                            f = he(c);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: u,
                            popperEscapeOffsets: c,
                            isReferenceHidden: l,
                            hasPopperEscaped: f
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": l,
                            "data-popper-escaped": f
                        })
                    }
                }]
            })
        },
        a1X9: e => {
            "use strict";
            e.exports = function(e, t) {
                var n = new Array(arguments.length - 1),
                    r = 0,
                    o = 2,
                    i = !0;
                for (; o < arguments.length;) n[r++] = arguments[o++];
                return new Promise((function(o, a) {
                    n[r] = function(e) {
                        if (i)
                            if (i = !1, e) a(e);
                            else {
                                for (var t = new Array(arguments.length - 1), n = 0; n < t.length;) t[n++] = arguments[n];
                                o.apply(null, t)
                            }
                    };
                    try {
                        e.apply(t || null, n)
                    } catch (s) {
                        i && (i = !1, a(s))
                    }
                }))
            }
        },
        kkqJ: (e, t) => {
            "use strict";
            var n = t;
            n.length = function(e) {
                var t = e.length;
                if (!t) return 0;
                for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t);) ++n;
                return Math.ceil(3 * e.length) / 4 - n
            };
            for (var r = new Array(64), o = new Array(123), i = 0; i < 64;) o[r[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
            n.encode = function(e, t, n) {
                for (var o, i = null, a = [], s = 0, u = 0; t < n;) {
                    var c = e[t++];
                    switch (u) {
                        case 0:
                            a[s++] = r[c >> 2], o = (3 & c) << 4, u = 1;
                            break;
                        case 1:
                            a[s++] = r[o | c >> 4], o = (15 & c) << 2, u = 2;
                            break;
                        case 2:
                            a[s++] = r[o | c >> 6], a[s++] = r[63 & c], u = 0
                    }
                    s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, a)), s = 0)
                }
                return u && (a[s++] = r[o], a[s++] = 61, 1 === u && (a[s++] = 61)), i ? (s && i.push(String.fromCharCode.apply(String, a.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, a.slice(0, s))
            };
            var a = "invalid encoding";
            n.decode = function(e, t, n) {
                for (var r, i = n, s = 0, u = 0; u < e.length;) {
                    var c = e.charCodeAt(u++);
                    if (61 === c && s > 1) break;
                    if (void 0 === (c = o[c])) throw Error(a);
                    switch (s) {
                        case 0:
                            r = c, s = 1;
                            break;
                        case 1:
                            t[n++] = r << 2 | (48 & c) >> 4, r = c, s = 2;
                            break;
                        case 2:
                            t[n++] = (15 & r) << 4 | (60 & c) >> 2, r = c, s = 3;
                            break;
                        case 3:
                            t[n++] = (3 & r) << 6 | c, s = 0
                    }
                }
                if (1 === s) throw Error(a);
                return n - i
            }, n.test = function(e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
            }
        },
        CAcF: e => {
            "use strict";

            function t() {
                this._listeners = {}
            }
            e.exports = t, t.prototype.on = function(e, t, n) {
                return (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: n || this
                }), this
            }, t.prototype.off = function(e, t) {
                if (void 0 === e) this._listeners = {};
                else if (void 0 === t) this._listeners[e] = [];
                else
                    for (var n = this._listeners[e], r = 0; r < n.length;) n[r].fn === t ? n.splice(r, 1) : ++r;
                return this
            }, t.prototype.emit = function(e) {
                var t = this._listeners[e];
                if (t) {
                    for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                    for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, n)
                }
                return this
            }
        },
        I8D1: e => {
            "use strict";

            function t(e) {
                return "undefined" !== typeof Float32Array ? function() {
                    var t = new Float32Array([-0]),
                        n = new Uint8Array(t.buffer),
                        r = 128 === n[3];

                    function o(e, r, o) {
                        t[0] = e, r[o] = n[0], r[o + 1] = n[1], r[o + 2] = n[2], r[o + 3] = n[3]
                    }

                    function i(e, r, o) {
                        t[0] = e, r[o] = n[3], r[o + 1] = n[2], r[o + 2] = n[1], r[o + 3] = n[0]
                    }

                    function a(e, r) {
                        return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], t[0]
                    }

                    function s(e, r) {
                        return n[3] = e[r], n[2] = e[r + 1], n[1] = e[r + 2], n[0] = e[r + 3], t[0]
                    }
                    e.writeFloatLE = r ? o : i, e.writeFloatBE = r ? i : o, e.readFloatLE = r ? a : s, e.readFloatBE = r ? s : a
                }() : function() {
                    function t(e, t, n, r) {
                        var o = t < 0 ? 1 : 0;
                        if (o && (t = -t), 0 === t) e(1 / t > 0 ? 0 : 2147483648, n, r);
                        else if (isNaN(t)) e(2143289344, n, r);
                        else if (t > 34028234663852886e22) e((o << 31 | 2139095040) >>> 0, n, r);
                        else if (t < 11754943508222875e-54) e((o << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
                        else {
                            var i = Math.floor(Math.log(t) / Math.LN2);
                            e((o << 31 | i + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -i) * 8388608)) >>> 0, n, r)
                        }
                    }

                    function a(e, t, n) {
                        var r = e(t, n),
                            o = 2 * (r >> 31) + 1,
                            i = r >>> 23 & 255,
                            a = 8388607 & r;
                        return 255 === i ? a ? NaN : o * (1 / 0) : 0 === i ? 1401298464324817e-60 * o * a : o * Math.pow(2, i - 150) * (a + 8388608)
                    }
                    e.writeFloatLE = t.bind(null, n), e.writeFloatBE = t.bind(null, r), e.readFloatLE = a.bind(null, o), e.readFloatBE = a.bind(null, i)
                }(), "undefined" !== typeof Float64Array ? function() {
                    var t = new Float64Array([-0]),
                        n = new Uint8Array(t.buffer),
                        r = 128 === n[7];

                    function o(e, r, o) {
                        t[0] = e, r[o] = n[0], r[o + 1] = n[1], r[o + 2] = n[2], r[o + 3] = n[3], r[o + 4] = n[4], r[o + 5] = n[5], r[o + 6] = n[6], r[o + 7] = n[7]
                    }

                    function i(e, r, o) {
                        t[0] = e, r[o] = n[7], r[o + 1] = n[6], r[o + 2] = n[5], r[o + 3] = n[4], r[o + 4] = n[3], r[o + 5] = n[2], r[o + 6] = n[1], r[o + 7] = n[0]
                    }

                    function a(e, r) {
                        return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], n[4] = e[r + 4], n[5] = e[r + 5], n[6] = e[r + 6], n[7] = e[r + 7], t[0]
                    }

                    function s(e, r) {
                        return n[7] = e[r], n[6] = e[r + 1], n[5] = e[r + 2], n[4] = e[r + 3], n[3] = e[r + 4], n[2] = e[r + 5], n[1] = e[r + 6], n[0] = e[r + 7], t[0]
                    }
                    e.writeDoubleLE = r ? o : i, e.writeDoubleBE = r ? i : o, e.readDoubleLE = r ? a : s, e.readDoubleBE = r ? s : a
                }() : function() {
                    function t(e, t, n, r, o, i) {
                        var a = r < 0 ? 1 : 0;
                        if (a && (r = -r), 0 === r) e(0, o, i + t), e(1 / r > 0 ? 0 : 2147483648, o, i + n);
                        else if (isNaN(r)) e(0, o, i + t), e(2146959360, o, i + n);
                        else if (r > 17976931348623157e292) e(0, o, i + t), e((a << 31 | 2146435072) >>> 0, o, i + n);
                        else {
                            var s;
                            if (r < 22250738585072014e-324) e((s = r / 5e-324) >>> 0, o, i + t), e((a << 31 | s / 4294967296) >>> 0, o, i + n);
                            else {
                                var u = Math.floor(Math.log(r) / Math.LN2);
                                1024 === u && (u = 1023), e(4503599627370496 * (s = r * Math.pow(2, -u)) >>> 0, o, i + t), e((a << 31 | u + 1023 << 20 | 1048576 * s & 1048575) >>> 0, o, i + n)
                            }
                        }
                    }

                    function a(e, t, n, r, o) {
                        var i = e(r, o + t),
                            a = e(r, o + n),
                            s = 2 * (a >> 31) + 1,
                            u = a >>> 20 & 2047,
                            c = 4294967296 * (1048575 & a) + i;
                        return 2047 === u ? c ? NaN : s * (1 / 0) : 0 === u ? 5e-324 * s * c : s * Math.pow(2, u - 1075) * (c + 4503599627370496)
                    }
                    e.writeDoubleLE = t.bind(null, n, 0, 4), e.writeDoubleBE = t.bind(null, r, 4, 0), e.readDoubleLE = a.bind(null, o, 0, 4), e.readDoubleBE = a.bind(null, i, 4, 0)
                }(), e
            }

            function n(e, t, n) {
                t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24
            }

            function r(e, t, n) {
                t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = 255 & e
            }

            function o(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            }

            function i(e, t) {
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
            e.exports = function(e, t, n) {
                var r = n || 8192,
                    o = r >>> 1,
                    i = null,
                    a = r;
                return function(n) {
                    if (n < 1 || n > o) return e(n);
                    a + n > r && (i = e(r), a = 0);
                    var s = t.call(i, a, a += n);
                    return 7 & a && (a = 1 + (7 | a)), s
                }
            }
        },
        gA9B: (e, t) => {
            "use strict";
            var n = t;
            n.length = function(e) {
                for (var t = 0, n = 0, r = 0; r < e.length; ++r)(n = e.charCodeAt(r)) < 128 ? t += 1 : n < 2048 ? t += 2 : 55296 === (64512 & n) && 56320 === (64512 & e.charCodeAt(r + 1)) ? (++r, t += 4) : t += 3;
                return t
            }, n.read = function(e, t, n) {
                if (n - t < 1) return "";
                for (var r, o = null, i = [], a = 0; t < n;)(r = e[t++]) < 128 ? i[a++] = r : r > 191 && r < 224 ? i[a++] = (31 & r) << 6 | 63 & e[t++] : r > 239 && r < 365 ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, i[a++] = 55296 + (r >> 10), i[a++] = 56320 + (1023 & r)) : i[a++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], a > 8191 && ((o || (o = [])).push(String.fromCharCode.apply(String, i)), a = 0);
                return o ? (a && o.push(String.fromCharCode.apply(String, i.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, i.slice(0, a))
            }, n.write = function(e, t, n) {
                for (var r, o, i = n, a = 0; a < e.length; ++a)(r = e.charCodeAt(a)) < 128 ? t[n++] = r : r < 2048 ? (t[n++] = r >> 6 | 192, t[n++] = 63 & r | 128) : 55296 === (64512 & r) && 56320 === (64512 & (o = e.charCodeAt(a + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & o), ++a, t[n++] = r >> 18 | 240, t[n++] = r >> 12 & 63 | 128, t[n++] = r >> 6 & 63 | 128, t[n++] = 63 & r | 128) : (t[n++] = r >> 12 | 224, t[n++] = r >> 6 & 63 | 128, t[n++] = 63 & r | 128);
                return n - i
            }
        },
        "9PqG": (e, t, n) => {
            "use strict";
            n.d(t, {
                ok: () => $.o
            });
            var r = n("wIZF"),
                o = n("DTvD");

            function i(e) {
                return e && e.Math == Math ? e : void 0
            }
            var a = "object" == typeof globalThis && i(globalThis) || "object" == typeof window && i(window) || "object" == typeof self && i(self) || "object" == typeof n.g && i(n.g) || function() {
                    return this
                }() || {},
                s = (n("g77m"), n("8SIA")),
                u = n("NPvb").hp,
                c = "/bapi/fe/usd/login",
                l = "/bapi/fe/usd/report/upload";
            ! function() {
                function e(e, t) {
                    this.appid = e, this.host = t || "https://api.saasexch.com"
                }
                e.prototype.login = function() {
                    return (0, r.__awaiter)(this, void 0, void 0, (function() {
                        var e, t;
                        return (0, r.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.appid ? (e = this.host ? "".concat(this.host).concat(c, "?appid=").concat(this.appid) : "".concat(c, "?appid=").concat(this.appid), [4, (0, s.Jt)(e)]) : [3, 2];
                                case 1:
                                    t = n.sent().data.token, this.token = t, n.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.uploadLog = function(e) {
                    return (0, r.__awaiter)(this, void 0, void 0, (function() {
                        var t, n, o;
                        return (0, r.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 4, , 5]), this.token ? [3, 2] : [4, this.login()];
                                case 1:
                                    r.sent(), r.label = 2;
                                case 2:
                                    return t = "".concat(this.appid, ":").concat(this.token), n = this.host ? "".concat(this.host).concat(l) : l, [4, (0, s.bE)(n, e, {
                                        headers: {
                                            Authorization: "Basic ".concat((i = t, "undefined" !== typeof btoa ? btoa(i) : u && u.from ? u.from(i).toString("base64") : i))
                                        }
                                    })];
                                case 3:
                                    return r.sent(), [3, 5];
                                case 4:
                                    return o = r.sent(), console.log("upload log error", o), [3, 5];
                                case 5:
                                    return [2]
                            }
                            var i
                        }))
                    }))
                }
            }();
            n("+K15");
            var f, d = function() {
                function e() {
                    this.type = "postProcessor", this.name = "i18n-clean-processor"
                }
                return e.prototype.process = function(e, t, n) {
                    return f && f.addData({
                        ns: n.ns,
                        key: t[0]
                    }), e
                }, e
            }();
            new d;

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function h() {
                return "function" === typeof XMLHttpRequest || "object" === ("undefined" === typeof XMLHttpRequest ? "undefined" : p(XMLHttpRequest))
            }
            var y = n("ufZf"),
                v = n.t(y, 2);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        g(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != b(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != b(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == b(t) ? t : t + ""
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e) {
                return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, b(e)
            }
            var E, T, R = "function" === typeof fetch ? fetch : void 0;
            "undefined" !== typeof global && global.fetch ? R = global.fetch : "undefined" !== typeof window && window.fetch && (R = window.fetch), h() && ("undefined" !== typeof global && global.XMLHttpRequest ? E = global.XMLHttpRequest : "undefined" !== typeof window && window.XMLHttpRequest && (E = window.XMLHttpRequest)), "function" === typeof ActiveXObject && ("undefined" !== typeof global && global.ActiveXObject ? T = global.ActiveXObject : "undefined" !== typeof window && window.ActiveXObject && (T = window.ActiveXObject)), R || !v || E || T || (R = y || v), "function" !== typeof R && (R = void 0);
            var O = function(e, t) {
                    if (t && "object" === b(t)) {
                        var n = "";
                        for (var r in t) n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
                        if (!n) return e;
                        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
                    }
                    return e
                },
                S = function(e, t, n, r) {
                    var o = function(e) {
                        if (!e.ok) return n(e.statusText || "Error", {
                            status: e.status
                        });
                        e.text().then((function(t) {
                            n(null, {
                                status: e.status,
                                data: t
                            })
                        })).catch(n)
                    };
                    if (r) {
                        var i = r(e, t);
                        if (i instanceof Promise) return void i.then(o).catch(n)
                    }
                    "function" === typeof fetch ? fetch(e, t).then(o).catch(n) : R(e, t).then(o).catch(n)
                },
                A = !1;
            const w = function(e, t, n, r) {
                return "function" === typeof n && (r = n, n = void 0), r = r || function() {}, R && 0 !== t.indexOf("file:") ? function(e, t, n, r) {
                    e.queryStringParams && (t = O(t, e.queryStringParams));
                    var o = _({}, "function" === typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                    "undefined" === typeof window && "undefined" !== typeof global && "undefined" !== typeof global.process && global.process.versions && global.process.versions.node && (o["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), n && (o["Content-Type"] = "application/json");
                    var i = "function" === typeof e.requestOptions ? e.requestOptions(n) : e.requestOptions,
                        a = _({
                            method: n ? "POST" : "GET",
                            body: n ? e.stringify(n) : void 0,
                            headers: o
                        }, A ? {} : i),
                        s = "function" === typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
                    try {
                        S(t, a, r, s)
                    } catch (u) {
                        if (!i || 0 === Object.keys(i).length || !u.message || u.message.indexOf("not implemented") < 0) return r(u);
                        try {
                            Object.keys(i).forEach((function(e) {
                                delete a[e]
                            })), S(t, a, r, s), A = !0
                        } catch (c) {
                            r(c)
                        }
                    }
                }(e, t, n, r) : h() || "function" === typeof ActiveXObject ? function(e, t, n, r) {
                    n && "object" === b(n) && (n = O("", n).slice(1)), e.queryStringParams && (t = O(t, e.queryStringParams));
                    try {
                        var o;
                        (o = E ? new E : new T("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", t, 1), e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!e.withCredentials, n && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
                        var i = e.customHeaders;
                        if (i = "function" === typeof i ? i() : i)
                            for (var a in i) o.setRequestHeader(a, i[a]);
                        o.onreadystatechange = function() {
                            o.readyState > 3 && r(o.status >= 400 ? o.statusText : null, {
                                status: o.status,
                                data: o.responseText
                            })
                        }, o.send(n)
                    } catch (s) {
                        console && console.log(s)
                    }
                }(e, t, n, r) : void r(new Error("No fetch and no xhr implementation found!"))
            };

            function x(e) {
                return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, x(e)
            }

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        D(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function P(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, U(r.key), r)
                }
            }

            function D(e, t, n) {
                return (t = U(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function U(e) {
                var t = function(e, t) {
                    if ("object" != x(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != x(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == x(t) ? t : t + ""
            }
            var L = function(e, t, n) {
                return t && P(e.prototype, t), n && P(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }((function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r)
            }), [{
                key: "init",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.services = e, this.options = C(C(C({}, {
                            loadPath: "/locales/{{lng}}/{{ns}}.json",
                            addPath: "/locales/add/{{lng}}/{{ns}}",
                            parse: function(e) {
                                return JSON.parse(e)
                            },
                            stringify: JSON.stringify,
                            parsePayload: function(e, t, n) {
                                return D({}, t, n || "")
                            },
                            parseLoadPayload: function(e, t) {},
                            request: w,
                            reloadInterval: "undefined" === typeof window && 36e5,
                            customHeaders: {},
                            queryStringParams: {},
                            crossDomain: !1,
                            withCredentials: !1,
                            overrideMimeType: !1,
                            requestOptions: {
                                mode: "cors",
                                credentials: "same-origin",
                                cache: "default"
                            }
                        }), this.options || {}), n), this.allOptions = r, this.services && this.options.reloadInterval) {
                        var o = setInterval((function() {
                            return t.reload()
                        }), this.options.reloadInterval);
                        "object" === x(o) && "function" === typeof o.unref && o.unref()
                    }
                }
            }, {
                key: "readMulti",
                value: function(e, t, n) {
                    this._readAny(e, e, t, t, n)
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    this._readAny([e], e, [t], t, n)
                }
            }, {
                key: "_readAny",
                value: function(e, t, n, r, o) {
                    var i, a = this,
                        s = this.options.loadPath;
                    "function" === typeof this.options.loadPath && (s = this.options.loadPath(e, n)), (s = function(e) {
                        return !!e && "function" === typeof e.then
                    }(i = s) ? i : Promise.resolve(i)).then((function(i) {
                        if (!i) return o(null, {});
                        var s = a.services.interpolator.interpolate(i, {
                            lng: e.join("+"),
                            ns: n.join("+")
                        });
                        a.loadUrl(s, o, t, r)
                    }))
                }
            }, {
                key: "loadUrl",
                value: function(e, t, n, r) {
                    var o = this,
                        i = "string" === typeof n ? [n] : n,
                        a = "string" === typeof r ? [r] : r,
                        s = this.options.parseLoadPayload(i, a);
                    this.options.request(this.options, e, s, (function(i, a) {
                        if (a && (a.status >= 500 && a.status < 600 || !a.status)) return t("failed loading " + e + "; status code: " + a.status, !0);
                        if (a && a.status >= 400 && a.status < 500) return t("failed loading " + e + "; status code: " + a.status, !1);
                        if (!a && i && i.message) {
                            var s = i.message.toLowerCase();
                            if (["failed", "fetch", "network", "load"].find((function(e) {
                                    return s.indexOf(e) > -1
                                }))) return t("failed loading " + e + ": " + i.message, !0)
                        }
                        if (i) return t(i, !1);
                        var u, c;
                        try {
                            u = "string" === typeof a.data ? o.options.parse(a.data, n, r) : a.data
                        } catch (l) {
                            c = "failed parsing " + e + " to json"
                        }
                        if (c) return t(c, !1);
                        t(null, u)
                    }))
                }
            }, {
                key: "create",
                value: function(e, t, n, r, o) {
                    var i = this;
                    if (this.options.addPath) {
                        "string" === typeof e && (e = [e]);
                        var a = this.options.parsePayload(t, n, r),
                            s = 0,
                            u = [],
                            c = [];
                        e.forEach((function(n) {
                            var r = i.options.addPath;
                            "function" === typeof i.options.addPath && (r = i.options.addPath(n, t));
                            var l = i.services.interpolator.interpolate(r, {
                                lng: n,
                                ns: t
                            });
                            i.options.request(i.options, l, a, (function(t, n) {
                                s += 1, u.push(t), c.push(n), s === e.length && "function" === typeof o && o(u, c)
                            }))
                        }))
                    }
                }
            }, {
                key: "reload",
                value: function() {
                    var e = this,
                        t = this.services,
                        n = t.backendConnector,
                        r = t.languageUtils,
                        o = t.logger,
                        i = n.language;
                    if (!i || "cimode" !== i.toLowerCase()) {
                        var a = [],
                            s = function(e) {
                                r.toResolveHierarchy(e).forEach((function(e) {
                                    a.indexOf(e) < 0 && a.push(e)
                                }))
                            };
                        s(i), this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                            return s(e)
                        })), a.forEach((function(t) {
                            e.allOptions.ns.forEach((function(e) {
                                n.read(t, e, "read", null, null, (function(r, i) {
                                    r && o.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), r), !r && i && o.log("loaded namespace ".concat(e, " for language ").concat(t), i), n.loaded("".concat(t, "|").concat(e), r, i)
                                }))
                            }))
                        }))
                    }
                }
            }]);
            L.type = "backend";
            var N = (0, o.createContext)(null),
                k = n("S9mB"),
                M = k.A.createInstance();
            M.init({
                lng: "en"
            });
            null === a || void 0 === a || a.PRERENDER, N.Provider;
            var j = n("7ZgD"),
                B = n("nzVK"),
                F = {
                    cn: "zh-cn",
                    tw: "zh-tw",
                    kr: "ko-kr",
                    ru: "ru-ru",
                    vn: "vi-vn",
                    it: "it-it",
                    es: "es-es",
                    de: "de-de",
                    fr: "fr-fr",
                    jp: "ja-jp"
                },
                G = n("qTxo"),
                Q = n.n(G),
                Y = "(".concat("[a-zA-Z]+", ")(-(").concat("[a-zA-Z]+", "))?"),
                q = Q()((function(e) {
                    var t, n, o, i = "en",
                        a = "";
                    if ("string" !== typeof e) return console.log("The type of path should be string, current is: ", typeof e), {
                        lang: i,
                        region: a,
                        path: e
                    };
                    var s = e.match(new RegExp("^".concat(Y, "$")));
                    return s ? {
                        lang: i = void 0 === (n = (t = (0, r.__read)(s, 4))[1]) ? "" : n,
                        region: a = void 0 === (o = t[3]) ? "" : o,
                        path: e
                    } : {
                        lang: i,
                        region: a,
                        path: e
                    }
                })),
                H = (0, B.Zz)(B.PX, (function(e) {
                    return F[e] || e
                })),
                V = (0, B.Zz)((0, B._w)("lang"), q, H),
                z = (0, B.Zz)((0, B._w)("region"), q, H),
                W = function() {
                    var e;
                    if (j.o) {
                        var t = "([a-zA-Z]+)(-([a-zA-Z]+))?",
                            n = null === (e = window.location.pathname) || void 0 === e ? void 0 : e.match(new RegExp("^/(".concat(t, ")($|/)")));
                        return n ? n[1] : (console.log("Can't get path from window.location, regexp: ".concat(t)), "")
                    }
                    return k.A.language
                },
                $ = ((0, B.Zz)(V, W), (0, B.Zz)(z, W), n("yFTX"))
        },
        nK1b: (e, t, n) => {
            "use strict";
            n.d(t, {
                DM: () => l,
                QX: () => u,
                Yx: () => i,
                Zx: () => d,
                b8: () => s,
                eQ: () => f,
                ll: () => a,
                vV: () => c
            });
            var r = n("m0k9"),
                o = n("xfYC"),
                i = (0, r.S)().isHybrid ? "h5" : "web",
                a = {
                    click: "$WebClick",
                    moduleView: "ModuleView",
                    popupView: "PopupView"
                },
                s = {
                    hintView: "hint_view_event",
                    strategyLanding: "strategy_landing"
                },
                u = o.Lk,
                c = {
                    spot: "spot",
                    um: "um",
                    spotGrid: "spot_grid",
                    futuresGrid: "futures_grid",
                    strategyTrading: "strategy_trading",
                    rebalancingBot: "rebalancing_bot",
                    autoInvest: "auto_invst",
                    arbitrage: "arbitrage_academy"
                },
                l = {
                    HERO: "hero",
                    HEADER: "header",
                    BOTTOM: "bottom",
                    ACADEMY: "academy",
                    STRATEGY_LIST: "strategy_list",
                    STRATEGY_POOL: "strategy_pool",
                    BOT_MARKET: "bot_market",
                    TRENDING_MARKET_LIST: "trending_market_top_10",
                    VOLATILITY_TOP: "volatility_top_10",
                    TUTORIAL: "tutorial",
                    FAQ: "faq",
                    BODY: "body"
                },
                f = {
                    LANDING: "strategy_landing",
                    ACADEMY: "strategy_landing_academy",
                    TIP: "strategy_landing_tip"
                },
                d = {
                    roi: "top_roi_list",
                    pnl: "top_pnl_list",
                    copyCount: "top_copied_list",
                    latestMatchedCount: "most_matched"
                }
        },
        "R/bV": (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => o
            });
            var r = n("DTvD"),
                o = (0, r.createContext)({
                    ssrSize: "web",
                    isSSRedPage: !0
                })
        },
        Gii1: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zx: () => m,
                wA: () => s,
                ud: () => o.ud,
                nH: () => r.nH,
                Wi: () => o.Wi,
                vz: () => r.vz,
                Qs: () => i.Q,
                HH: () => o.XY,
                X_: () => o.X_,
                I7: () => c.I,
                Py: () => r.Py
            });
            var r = n("TajZ"),
                o = n("WLZf"),
                i = n("GeCL"),
                a = n("MD8j"),
                s = function() {
                    return (0, a.wA)()
                },
                u = n("DTvD");
            var c = n("I/8y"),
                l = n("J+48"),
                f = n("QWVi");
            const d = "display",
                p = "visibility",
                h = ({
                    type: e,
                    complianceKey: t
                }) => {
                    if (!t) return "";
                    switch (e) {
                        case d:
                            return `\n           .${t}-hit-hidden { display: none; } \n           .${t}-hit-block { display: block; }\n           .${t}-hit-inline { display: inline; }\n         `;
                        case p:
                            return `\n           .${t}-hit-invisible { visibility: hidden; }\n           .${t}-hit-visible { visibility: visible; }\n         `;
                        default:
                            return ""
                    }
                };
            const y = ({
                    complianceRestrictList: e = []
                }) => ({
                    cssRules: e.reduce(((e, t) => {
                        const n = h({
                            type: d,
                            complianceKey: t
                        });
                        return t && Object.values(f.Hj).includes(t) && (e += n), e
                    }), "") || "",
                    id: "compliance_css_display"
                }),
                v = ({
                    complianceRestrictList: e = []
                }) => ({
                    cssRules: e.reduce(((e, t) => {
                        const n = h({
                            type: p,
                            complianceKey: t
                        });
                        return t && Object.values(f.Hj).includes(t) && (e += n), e
                    }), "") || "",
                    id: "compliance_css_visibility"
                });
            var m = function() {
                var e = (0, c.I)(),
                    t = (0, l.v)({
                        currency: e,
                        isUseCache: !0
                    }),
                    n = t.restrictedBusinessMap,
                    r = t.isLoading;
                (0, u.useEffect)((function() {
                    n && !r && [y({
                        complianceRestrictList: Object.values(n)
                    }), v({
                        complianceRestrictList: Object.values(n)
                    })].forEach((function(e) {
                        var t = e.id,
                            n = e.cssRules;
                        if (t) {
                            var r = document.getElementById(t);
                            r && (r.innerHTML = n || "")
                        }
                    }))
                }), [n, r])
            }
        },
        "+Ls+": (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => f
            });
            var r = n("hrAD"),
                o = n("qoEP"),
                i = n("DTvD"),
                a = n("VLTf"),
                s = n.n(a),
                u = n("5rIN"),
                c = n("R/bV"),
                l = n("gYIm"),
                f = function() {
                    var e = (0, i.useContext)(c.B).isSSRedPage,
                        t = function() {
                            var e = (0, i.useContext)(c.B).ssrSize;
                            return {
                                isDesktop: "web" === e,
                                isTablet: "tablet" === e,
                                isMobile: "mobile" === e
                            }
                        }(),
                        n = (0, u.Q)(),
                        a = {
                            isDesktop: t.isDesktop,
                            isTablet: t.isTablet,
                            isMobile: t.isMobile
                        },
                        f = {
                            isDesktop: n.isLeastWebSize,
                            isTablet: n.isTablet,
                            isMobile: n.isMobile
                        };
                    return (0, o._)((0, r._)({}, l.S$ ? a : f), {
                        isConsistent: l.S$ || !e || s()(a, f)
                    })
                }
        },
        Yh6a: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => i,
                y: () => a
            });
            var r = n("J02F"),
                o = n("hjFp"),
                i = Boolean(window.navigator.userAgent && /BNC\/[\d\.]+/i.test(window.navigator.userAgent) ? window.navigator.userAgent.match(/BNC\/[\d\.]+/i)[0].slice(4) : ""),
                a = (0, r.vt)((0, r.Q)(o))
        },
        "I/8y": (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => o
            });
            var r = n("HS2I"),
                o = function() {
                    return (0, r.useCurrency)().currency
                }
        },
        WLZf: (e, t, n) => {
            "use strict";
            n.d(t, {
                CU: () => c,
                Wi: () => p,
                XY: () => d,
                X_: () => l,
                ud: () => f
            });
            var r = n("hrAD"),
                o = n("qoEP"),
                i = n("KrVi"),
                a = n("DTvD"),
                s = n("ipKi"),
                u = function(e, t) {
                    var n = (0, s.B)(t),
                        r = n.t,
                        o = n.i18n,
                        i = (0, a.useCallback)((function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = [e, t].filter((function(e) {
                                    return e
                                })).join("-");
                            return r(o, n).trim() || n.defaultValue
                        }), [r, e]);
                    return {
                        i18n: o,
                        t: r,
                        getI18n: i
                    }
                },
                c = function() {
                    return u("trd", "trade-ui")
                },
                l = function() {
                    return u("", "strategy-widget")
                },
                f = function() {
                    var e = u("futures-trade", "futures-ui");
                    return (0, o._)((0, r._)({}, e), {
                        getFutI18n: e.getI18n
                    })
                },
                d = function() {
                    return function(e) {
                        var t = (0, s.B)(e),
                            n = t.t,
                            u = (0, i._)(t, ["t"]),
                            c = (0, a.useCallback)((function(t) {
                                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    o = e.find((function(e) {
                                        return n("".concat(e, ":").concat(t)) !== t
                                    }));
                                return o ? n("".concat(o, ":").concat(t), r).trim() : (null === r || void 0 === r ? void 0 : r.defaultValue) || t
                            }), [n, e]);
                        return (0, o._)((0, r._)({}, u), {
                            t: c,
                            getI18n: c
                        })
                    }(["landing-strategy-ui", "futures-strategy-ui"])
                },
                p = function() {
                    return u("", "landing-strategy-ui")
                }
        },
        GeCL: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => i
            });
            var r = n("gYIm"),
                o = n("S9gL");

            function i() {
                var e = r.S$ ? {
                    deviceWidth: 1600
                } : void 0;
                return {
                    isSmallMobile: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 375px)"
                    }, e),
                    isMobile: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 767px)"
                    }, e),
                    isNotPc: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 1023px)"
                    }, e),
                    isTablet: (0, o.useMediaQuery)({
                        query: "screen and (min-width: 768px) and (max-width: 1023px)"
                    }, e),
                    isLeastWebSize: (0, o.useMediaQuery)({
                        query: "screen and (min-width: 1024px)"
                    }, e),
                    is13Desk: (0, o.useMediaQuery)({
                        query: "screen and (max-width: 1439px)"
                    }, e)
                }
            }
        },
        kI1i: (e, t, n) => {
            "use strict";
            n.d(t, {
                DP: () => _,
                GZ: () => T,
                QE: () => g,
                Sg: () => b,
                by: () => m,
                c$: () => R,
                wD: () => E
            });
            var r = n("S+0I"),
                o = n("jbFV"),
                i = n.n(o),
                a = n("DTvD"),
                s = n("MD8j"),
                u = n("Hf/4"),
                c = n("VLTf"),
                l = n.n(c),
                f = n("XOJJ"),
                d = n("HS2I"),
                p = n("QL2w"),
                h = n("4Oak"),
                y = n("Yh6a"),
                v = function() {
                    return "light" === (0, d.useTheme)().theme
                },
                m = function() {
                    return (0, s.d4)(p._)
                },
                _ = function() {
                    var e = v(),
                        t = (0, d.useTheme)(),
                        n = t.toggleTheme,
                        r = t.theme;
                    return (0, a.useMemo)((function() {
                        return {
                            isLight: e,
                            toggleTheme: n,
                            theme: r
                        }
                    }), [e, r, n])
                },
                g = function() {
                    return v() ? "light" : "dark"
                },
                b = function() {
                    return (0, a.useContext)(f.IT)
                },
                E = function() {
                    ! function(e) {
                        var t = (0, a.useContext)(f.fY),
                            n = e.isLight,
                            o = e.color,
                            s = void 0 === o ? "fresh" : o,
                            c = e.isRUGD,
                            d = void 0 !== c && c,
                            p = {
                                isLight: n,
                                color: s,
                                isRUGD: d
                            },
                            y = (0, u.A)(p),
                            v = y && !l()(p, y);
                        (0, a.useEffect)((function() {
                            (0, r._)(i().mark((function e() {
                                var r;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!v) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, (0, h.Y3)(!!n, s, d);
                                        case 3:
                                            r = e.sent, t(r);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }), [t, s, n, d, v])
                    }({
                        isLight: v(),
                        color: (0, s.d4)(p._),
                        isRUGD: (0, s.d4)(p.K)
                    })
                },
                T = function(e) {
                    var t = (0, a.useRef)(!1),
                        n = (0, d.useTheme)(),
                        r = n.setTheme,
                        o = n.theme;
                    t.current || (y.l && o !== e && r(e), t.current = !0)
                },
                R = function() {
                    var e = m(),
                        t = (0, s.d4)(p.K),
                        n = v();
                    return (0, a.useCallback)((function() {
                        var r = !n;
                        (0, h.Y3)(r, e, t)
                    }), [e, t, n])
                }
        },
        TajZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                nH: () => u,
                vz: () => s,
                Py: () => c
            });
            var r = n("MD8j"),
                o = function(e) {
                    return e.userCenter.loginStatus
                },
                i = function(e) {
                    return e.userCenter.loginStatus.isLoggedIn
                },
                a = function(e) {
                    return e.userCenter.userInfo
                },
                s = function() {
                    return (0, r.d4)(o)
                },
                u = function() {
                    return (0, r.d4)(i)
                },
                c = function() {
                    return (0, r.d4)(a)
                }
        },
        QL2w: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => o,
                _: () => r
            });
            var r = function(e) {
                    return e.setting.color
                },
                o = function(e) {
                    return e.setting.isRedUpGreenDown
                }
        },
        KG9A: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => sr
            });
            var r = n("mXdx"),
                o = n("4hgs"),
                i = n("18F/"),
                a = n("Cr5V"),
                s = n("qV1O"),
                u = n("xfYC"),
                c = n("DTvD"),
                l = n.n(c),
                f = n("5YBB"),
                d = n("UiLJ"),
                p = n("AyYO"),
                h = n("cFMj"),
                y = n("5E2b"),
                v = n("JWaR"),
                m = n("Nqxp"),
                _ = n("LLrz"),
                g = n("jzw2"),
                b = n("Hf/4"),
                E = n("Km4d"),
                T = n.n(E),
                R = n("1HmZ"),
                O = n("b6CO"),
                S = n("hrAD"),
                A = n("KrVi"),
                w = n("mguP"),
                x = n("iZfx");
            const I = x.Bd ? c.useLayoutEffect : c.useEffect;
            var C = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            const P = x.Bd && "undefined" !== typeof window.ResizeObserver ? function() {
                var e = (0, c.useState)(null),
                    t = e[0],
                    n = e[1],
                    r = (0, c.useState)(C),
                    o = r[0],
                    i = r[1],
                    a = (0, c.useMemo)((function() {
                        return new window.ResizeObserver((function(e) {
                            if (e[0]) {
                                var t = e[0].contentRect,
                                    n = t.x,
                                    r = t.y,
                                    o = t.width,
                                    a = t.height,
                                    s = t.top,
                                    u = t.left,
                                    c = t.bottom,
                                    l = t.right;
                                i({
                                    x: n,
                                    y: r,
                                    width: o,
                                    height: a,
                                    top: s,
                                    left: u,
                                    bottom: c,
                                    right: l
                                })
                            }
                        }))
                    }), []);
                return I((function() {
                    if (t) return a.observe(t),
                        function() {
                            a.disconnect()
                        }
                }), [t]), [n, o]
            } : function() {
                return [x.lQ, C]
            };
            var D = n("ZWPC"),
                U = n("TUyf"),
                L = n("cj1O"),
                N = {
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: "drawer"
                },
                k = {
                    overflow: "auto",
                    zIndex: "999999"
                },
                M = {
                    top: {
                        parent: {
                            flexDirection: "column"
                        },
                        child: {
                            width: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    bottom: {
                        parent: {
                            flexDirection: "column-reverse"
                        },
                        child: {
                            width: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    left: {
                        parent: {},
                        child: {
                            height: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    right: {
                        parent: {
                            flexDirection: "row-reverse"
                        },
                        child: {
                            height: "100%",
                            transition: "all 0.5s ease"
                        }
                    }
                },
                j = (0, D.UF)("uikit-core", "Drawer"),
                B = (0, c.forwardRef)((function(e, t) {
                    var n = e.visible,
                        r = void 0 !== n && n,
                        o = e.direction,
                        i = void 0 === o ? "right" : o,
                        a = e.bg,
                        s = void 0 === a ? "background" : a,
                        u = e.maskBg,
                        f = e.children,
                        d = e.childProps,
                        p = void 0 === d ? {} : d,
                        h = e.outerClick,
                        v = (0, A._)(e, ["visible", "direction", "bg", "maskBg", "children", "childProps", "outerClick"]);
                    j();
                    var m = (0, w._)((0, c.useState)(r), 2),
                        _ = m[0],
                        g = m[1],
                        b = (0, c.useRef)(),
                        E = (0, w._)((0, c.useState)(), 2),
                        T = E[0],
                        R = E[1],
                        x = (0, w._)((0, c.useState)(), 2),
                        I = x[0],
                        C = x[1],
                        D = (0, w._)((0, c.useState)("auto"), 2),
                        B = D[0],
                        F = D[1],
                        G = u ? {
                            bg: u,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        } : {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        },
                        Q = (0, w._)(P(), 2),
                        Y = Q[0],
                        q = Q[1],
                        H = q.width,
                        V = q.height,
                        z = (0, L.A)(t, Y),
                        W = l().cloneElement(f, {
                            ref: z
                        });
                    return (0, c.useEffect)((function() {
                        "top" !== i && "bottom" !== i || C(r ? V : 0)
                    }), [V, i, r]), (0, c.useEffect)((function() {
                        "left" !== i && "right" !== i || R(r ? H : 0)
                    }), [H, i, r]), (0, c.useEffect)((function() {
                        return r ? (g(!0), F(document.body.style.overflow || "auto"), document.body.style.setProperty("overflow", "hidden")) : b.current = setTimeout((function() {
                                return g(!1)
                            }), 500),
                            function() {
                                try {
                                    clearTimeout(b.current)
                                } catch (e) {}
                                document.body.style.setProperty("overflow", B)
                            }
                    }), [r]), l().createElement(U.Ay, null, l().createElement(y.A, (0, O._)({
                        __css: (0, S._)({}, N, M[i].parent),
                        display: r || _ ? "flex" : "none"
                    }, v), l().createElement(y.A, (0, O._)({
                        __css: (0, S._)({}, k, M[i].child),
                        width: T,
                        height: I,
                        bg: s
                    }, p), W), l().createElement(y.A, (0, O._)({}, G, {
                        flex: 1,
                        onClick: function(e) {
                            return h && h(e)
                        }
                    }))))
                }));
            B.displayName = "Drawer";
            const F = B;
            var G = n("NSeK"),
                Q = n("tdZS"),
                Y = "undefined" !== typeof window ? l().useLayoutEffect : l().useEffect,
                q = (0, c.forwardRef)((function(e, t) {
                    var n = e.open,
                        r = e.title,
                        o = e.titleSx,
                        i = e.containerSx,
                        a = e.contentSx,
                        s = e.mask,
                        u = void 0 === s || s,
                        f = e.maskSx,
                        d = e.showMaskOnMobile,
                        p = void 0 !== d && d,
                        h = e.onMaskClick,
                        m = e.onCloseIconClick,
                        g = e.showCloseIcon,
                        b = void 0 === g || g,
                        E = e.children,
                        T = e.onPressEnter,
                        R = void 0 === T ? function() {} : T,
                        w = e.onPressEsc,
                        x = void 0 === w ? function() {} : w,
                        I = e.specialCss,
                        C = void 0 === I ? {} : I,
                        P = e.closeSx,
                        D = void 0 === P ? {} : P,
                        L = e.closeIconProps,
                        N = void 0 === L ? {} : L,
                        k = e.showTitleBottomLine,
                        M = void 0 === k || k,
                        j = e.closeIconSize,
                        B = void 0 === j ? 24 : j,
                        F = e.dialogClassName,
                        q = void 0 === F ? "" : F,
                        H = (0, A._)(e, ["open", "title", "titleSx", "containerSx", "contentSx", "mask", "maskSx", "showMaskOnMobile", "onMaskClick", "onCloseIconClick", "showCloseIcon", "children", "onPressEnter", "onPressEsc", "specialCss", "closeSx", "closeIconProps", "showTitleBottomLine", "closeIconSize", "dialogClassName"]),
                        V = function(e) {
                            13 === e.keyCode ? R(e) : 27 === e.keyCode && x(e)
                        };
                    if ((0, c.useEffect)((function() {
                            return n ? document.addEventListener("keydown", V) : document.removeEventListener("keydown", V),
                                function() {
                                    document.removeEventListener("keydown", V)
                                }
                        }), [n]), Y((function() {
                            return u && n ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                                function() {
                                    document.body.style.removeProperty("overflow")
                                }
                        }), [u, n]), !n || "undefined" === typeof document || !document.body) return null;
                    var z = !1;
                    "undefined" !== typeof window && window.matchMedia("(max-width: 766px)").matches && (z = !0);
                    var W = (0, S._)({
                            zIndex: "unset"
                        }, f),
                        $ = u && (p || !z);
                    return l().createElement(U.Ay, null, l().createElement(_.A, {
                        __css: (0, S._)({
                            zIndex: "modal",
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }, C),
                        sx: i,
                        className: q
                    }, $ && l().createElement(Q.A, {
                        visible: !0,
                        onClick: function(e) {
                            return h && h(e)
                        },
                        sx: W
                    }), l().createElement(y.A, (0, O._)({
                        ref: t,
                        __css: {
                            position: "relative",
                            borderRadius: ["0px", "large", "large"],
                            boxShadow: "dialog",
                            backgroundColor: "popupBg",
                            width: ["100%", "auto"],
                            height: ["100%", "auto"],
                            color: "t.primary"
                        }
                    }, H), b && l().createElement(y.A, (0, O._)({
                        __css: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            left: "unset",
                            pt: "20px",
                            pr: "md",
                            color: "t.disabled",
                            cursor: "pointer",
                            ":hover": {
                                color: "t.third"
                            }
                        }
                    }, N, {
                        sx: D,
                        onClick: function(e) {
                            return m && m(e)
                        }
                    }), l().createElement(G.A, {
                        size: B,
                        style: {
                            width: "".concat(B, "px"),
                            height: "".concat(B, "px")
                        }
                    })), r && l().createElement(v.A, {
                        variant: "headline6",
                        className: "modal-title",
                        __css: {
                            pl: "md",
                            pr: "lg",
                            pt: "20px",
                            pb: "19px",
                            borderBottom: "1px solid",
                            borderBottomColor: "line",
                            border: M ? "" : "none",
                            textAlign: "left"
                        },
                        sx: o
                    }, r), l().createElement(y.A, {
                        className: "style-dialog-body",
                        __css: {
                            p: "md",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        sx: a
                    }, E))))
                }));
            q.displayName = "StyledDialog";
            const H = q,
                V = {
                    width: ["375px", "672px"],
                    maxHeight: "calc(100vh - 40px)",
                    bg: "modalBg",
                    alignItems: "center",
                    overflowY: "auto",
                    ".style-dialog-body": {
                        overflowX: "hidden"
                    },
                    ".modal-title": {
                        paddingBottom: 0
                    }
                },
                z = {
                    position: "relative",
                    maxHeight: "calc(100vh - 115px)",
                    overflowX: "hidden",
                    overflowY: "auto",
                    bg: "popupBg",
                    borderRadius: "16px 16px 0px 0px",
                    p: "20px"
                },
                W = {
                    zIndex: 1e3,
                    overflow: "hidden",
                    bottom: "-1px",
                    "> div::-webkit-scrollbar": {
                        display: "none"
                    },
                    ".drawer-title": {
                        pb: "23px",
                        color: "t.primary",
                        textAlign: "center"
                    }
                },
                $ = {
                    position: "absolute",
                    right: "20px",
                    color: "t.third"
                },
                K = ({
                    isVisible: e,
                    mobileVariant: t = "drawer",
                    onClose: n,
                    children: o,
                    maxWidth: i,
                    drawerContentSx: a,
                    dialogContainerSx: s,
                    hideClose: u = !1,
                    showTitleBottomLine: l = !0,
                    title: f,
                    showCloseIcon: d,
                    showMaskOnMobile: p,
                    maxHeight: m
                }) => {
                    const {
                        isMobile: _
                    } = (0, h.Q)(), g = (0, c.useRef)(null), [E, O] = (0, c.useState)(!1), S = (0, b.A)(e);
                    (0, c.useEffect)((() => {
                        S || !e || E || (O(e), g.current = document.documentElement.scrollTop || 0, document.body.style.top = `-${g.current}px`, document.body.style.position = "fixed")
                    }), [S, e, E]);
                    const A = (0, R.Z)((() => {
                        "number" === typeof g.current && (document.body.style.position = "", document.body.style.top = "", document.documentElement.scrollTop = g.current)
                    }));
                    (0, c.useEffect)((() => {
                        S && !e && A()
                    }), [S, e, A]), (0, c.useEffect)((() => A), [A]);
                    const w = (0, c.useMemo)((() => T()({}, z, a)), [a]),
                        x = (0, c.useMemo)((() => T()({}, V, s, {
                            maxWidth: i,
                            maxHeight: m
                        })), [s, m, i]),
                        I = () => {
                            O(!1), setTimeout((() => {
                                "function" === typeof n && n()
                            }), 300)
                        };
                    if (!e && !E) return null;
                    return "drawer" === (_ ? t : "popup") ? (0, r.jsx)(F, {
                        visible: e && E,
                        maskBg: "dialog.mask",
                        bg: "dialog.mask",
                        direction: "bottom",
                        outerClick: I,
                        sx: W,
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)(y.A, {
                                sx: w,
                                children: [!u && (0, r.jsx)(G.A, {
                                    className: "drawer-close-btn",
                                    size: 16,
                                    sx: $,
                                    onClick: I
                                }), f && (0, r.jsx)(v.A, {
                                    variant: "subtitle1",
                                    className: "drawer-title",
                                    children: f
                                }), o]
                            })
                        })
                    }) : (0, r.jsx)(H, {
                        open: e && E,
                        sx: x,
                        onCloseIconClick: I,
                        showTitleBottomLine: l,
                        title: f,
                        showCloseIcon: d,
                        onPressEsc: I,
                        onMaskClick: I,
                        showMaskOnMobile: p,
                        children: o
                    })
                };
            var X = n("J+48"),
                Z = n("trXm"),
                J = n("UuPx"),
                ee = n("QWVi"),
                te = n("krnk"),
                ne = n("bt5r"),
                re = n("ekJu");

            function oe({
                variant: e,
                ...t
            }) {
                const {
                    text: n
                } = (0, re.DP)();
                if ("undefined" === typeof e || "string" === typeof e) return (0, r.jsx)(v.A, {
                    variant: e,
                    ...t
                });
                const o = e.map((e => n ? .[e] ? .fontSize)),
                    i = e.map((e => n ? .[e] ? .fontWeight)),
                    a = e.map((e => n ? .[e] ? .lineHeight));
                return (0, r.jsx)(v.A, {
                    fontSize: o,
                    fontWeight: i,
                    lineHeight: a,
                    ...t
                })
            }
            const ie = {
                    mt: ["0px", "24px"],
                    mb: ["15px", "52px"],
                    color: ["t.third", "t.primary"]
                },
                ae = {
                    display: "inline-block",
                    color: "primary",
                    textDecoration: "none"
                },
                se = {
                    justifyContent: "flex-end",
                    gap: ["15px", "12px"],
                    ".reward-popup-btn": {
                        flex: [1, "0 0 144px"]
                    }
                },
                ue = ({
                    currency: e,
                    isLoggedIn: t,
                    staticHost: n,
                    onClose: i
                }) => {
                    const [a, s] = (0, c.useState)(!1), {
                        restrictedBusinessMap: l,
                        isLoading: b
                    } = (0, X.v)({
                        currency: e,
                        isUseCache: !1
                    }), {
                        data: E,
                        setData: T,
                        hasInitialized: R
                    } = (0, p.z)("strategy-widget", "HAS_SHOWN_futuresGrid_REWARD_HUB", !1), O = !b && !l[ee.Hj.FUTURES_GRID], S = !E && R, {
                        data: A,
                        isLoading: w
                    } = (0, o.useQuery)(te.t5.futGridRewardTask, (() => (0, d.kI)()), {
                        enabled: t && O && S
                    }), x = A ? .data, I = O && S && x, C = !b && R && !w, {
                        t: P
                    } = (0, Z.Y_)(), {
                        isMobile: D
                    } = (0, h.Q)(), U = (0, J.nE)();
                    (0, c.useEffect)((() => {
                        C && (I ? (U(u.ll.popupView, {
                            $element_id: "Get_Vouchers_Reward"
                        }), s(!0), T(!0)) : i ? .())
                    }), [I, T, U, C, i]);
                    const L = () => {
                            U(u.ll.click, {
                                $element_id: "check_later"
                            }), s(!1), "function" === typeof i && i()
                        },
                        N = ne.TPI.REWARD_HUB,
                        k = P("reward-popup-title", {
                            defaultValue: "Complete Task to Get Vouchers!"
                        }),
                        M = `${n}/static/images/futures/strategy/reward/reward-popup-${D?"mobile":"desktop"}.png`;
                    return a ? (0, r.jsx)(K, {
                        onClose: L,
                        showTitleBottomLine: !1,
                        title: D ? void 0 : k,
                        isVisible: a,
                        showCloseIcon: !D,
                        showMaskOnMobile: !0,
                        maxWidth: 520,
                        children: (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(y.A, {
                                minHeight: ["200px", "160px"],
                                children: (0, r.jsx)("img", {
                                    src: M,
                                    width: "100%",
                                    height: "auto"
                                })
                            }), D && (0, r.jsx)(v.A, {
                                fontSize: "18px",
                                fontWeight: "600",
                                lineHeight: "28px",
                                my: "14px",
                                color: "t.primary",
                                textAlign: "center",
                                children: k
                            }), (0, r.jsxs)(y.A, {
                                sx: ie,
                                children: [(0, r.jsx)(oe, {
                                    variant: "body2",
                                    children: P("reward-popup-content-0", {
                                        defaultValue: "Attention Trader,"
                                    })
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(oe, {
                                    variant: "body2",
                                    children: P("reward-popup-content-1", {
                                        defaultValue: "A new Futures Grid task is available, complete it and claim your reward voucher!"
                                    })
                                }), (0, r.jsx)(oe, {
                                    variant: "body2",
                                    children: (0, r.jsx)(f.x, {
                                        t: P,
                                        i18nKey: "reward-popup-content-2",
                                        defaults: "Head over to the <Link>Rewards Hub</Link> to check it out.",
                                        components: {
                                            Link: (0, r.jsx)(m.A, {
                                                sx: ae,
                                                target: "__blank",
                                                href: N
                                            })
                                        }
                                    })
                                }), (0, r.jsx)(oe, {
                                    variant: "body2",
                                    children: P("reward-popup-content-3", {
                                        defaultValue: "Elevate your Bot trading game today!"
                                    })
                                })]
                            }), (0, r.jsxs)(_.A, {
                                sx: se,
                                children: [(0, r.jsx)(g.A, {
                                    className: "reward-popup-btn",
                                    sz: "normal",
                                    colorStyle: "secondary",
                                    onClick: L,
                                    children: P("btn-later", {
                                        defaultValue: "Later"
                                    })
                                }), (0, r.jsx)(g.A, {
                                    className: "reward-popup-btn",
                                    sz: "normal",
                                    colorStyle: "primary",
                                    onClick: () => {
                                        U(u.ll.click, {
                                            $element_id: "check_tasks"
                                        }), window.location.href = N
                                    },
                                    children: P("btn-checkNow", {
                                        defaultValue: "Check Now"
                                    })
                                })]
                            })]
                        })
                    }) : null
                };
            var ce = n("ugJu"),
                le = n("aaF1"),
                fe = n("PsuI");
            const de = ({
                    queryClient: e,
                    ssrHeader: t
                }) => e.prefetchQuery(le.B.QUERY_SPOT_PRODUCTS, (() => (0, fe.y9)({
                    headers: t
                })), {
                    staleTime: 1 / 0
                }),
                pe = ({
                    queryClient: e
                }) => e.prefetchQuery(le.B.QUERY_SPOT_EXCHANGE_INFO, (() => (0, fe.Q_)()), {
                    staleTime: 1 / 0
                });
            var he = n("QXOt"),
                ye = n("zokI"),
                ve = n("qoEP"),
                me = n("C9w4"),
                _e = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                };
            const ge = l().createContext({
                putCoachMarkStep: _e,
                putCoachMark: _e,
                showCoachMark: _e,
                showCoachMarkSingle: _e,
                closeCoachMark: _e
            });
            var be = n("FHqy");
            const Ee = function(e) {
                return l().createElement(be.A, (0, O._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M6.175 8l4.875-4.95L10 2 4 8l6 6 1.05-1.05L6.175 8z",
                    fill: "currentColor"
                }))
            };
            var Te = n("vOeE");
            const Re = function(e) {
                return l().createElement(be.A, (0, O._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 12.676l-1.324 1.316-4.683-4.675L3.324 14l-1.316-1.324L6.676 8 2 3.324l1.324-1.317 4.669 4.676L12.676 2l1.31 1.324L9.315 8 14 12.676z",
                    fill: "currentColor"
                }))
            };
            var Oe = n("ipKi"),
                Se = n("rLsV"),
                Ae = n("/Cny"),
                we = n("OLW9"),
                xe = function(e) {
                    var t = e.isShow,
                        n = e.variant,
                        r = e.getValid,
                        o = e.customIcon,
                        i = {
                            info: Se.A,
                            error: Ae.A,
                            warning: Se.A,
                            success: we.A
                        }[n],
                        a = o && r(o) ? l().cloneElement(o, (0, S._)({
                            size: 20
                        }, o.props), []) : l().createElement(i, {
                            size: 20
                        });
                    return t ? l().createElement(_.A, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            mr: "xs",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0
                        }
                    }, a) : null
                },
                Ie = function(e) {
                    var t = e.isShow,
                        n = e.onClose;
                    return t ? l().createElement(_.A, {
                        sx: {
                            width: "24px",
                            height: "24px",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "t.disabled",
                            marginLeft: "auto"
                        }
                    }, l().createElement(G.A, {
                        size: 18,
                        onClick: n,
                        cursor: "pointer"
                    })) : null
                },
                Ce = (0, c.forwardRef)((function(e, t) {
                    var n = e.children,
                        r = e.icon,
                        o = e.variant,
                        i = void 0 === o ? "warning" : o,
                        a = e.closable,
                        s = void 0 !== a && a,
                        u = e.showIcon,
                        f = void 0 === u || u,
                        d = e.onClose,
                        p = e.title,
                        h = e.insideCenter,
                        v = void 0 !== h && h,
                        m = e.__css,
                        g = (0, A._)(e, ["children", "icon", "variant", "closable", "showIcon", "onClose", "title", "insideCenter", "__css"]);
                    return l().createElement(_.A, (0, O._)({
                        tx: "alertV2",
                        variant: i,
                        alignItems: "flex-start",
                        ref: t,
                        width: "100%",
                        __css: (0, S._)({
                            p: "ls"
                        }, m)
                    }, g), l().createElement(_.A, {
                        justifyContent: v ? "center" : "",
                        flex: "1",
                        alignItems: "flex-start"
                    }, l().createElement(xe, {
                        isShow: f,
                        variant: i,
                        getValid: c.isValidElement,
                        customIcon: r
                    }), l().createElement(y.A, {
                        __css: {
                            wordBreak: "break-word",
                            flexShrink: 1,
                            height: "auto",
                            lineHeight: "24px",
                            width: v ? "auto" : "100%",
                            color: "alertV2.".concat(i, "FontColor")
                        }
                    }, p && l().createElement(y.A, {
                        as: "p",
                        __css: {
                            fontWeight: "medium"
                        }
                    }, p), n)), l().createElement(Ie, {
                        isShow: s,
                        onClose: d
                    }))
                })),
                Pe = (0, c.forwardRef)((function(e, t) {
                    var n = e.enablePortal,
                        r = e.container,
                        o = e.topOfPage,
                        i = e.__css,
                        a = (0, A._)(e, ["enablePortal", "container", "topOfPage", "__css"]);
                    return o || n || r ? l().createElement(U.Ay, {
                        container: r
                    }, l().createElement(Ce, (0, O._)({
                        __css: o ? (0, S._)({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: "alert",
                            borderRadius: 0
                        }, i) : {}
                    }, a, {
                        ref: t
                    }))) : l().createElement(Ce, (0, O._)({}, a))
                }));
            Pe.displayName = "AlertV2";
            const De = Pe;
            var Ue = function(e) {
                    return {
                        on: function() {
                            return Ue(e)
                        },
                        otherwise: function() {
                            return e
                        }
                    }
                },
                Le = function(e) {
                    return {
                        on: function(t, n) {
                            return t(e) ? Ue(n(e)) : Le(e)
                        },
                        otherwise: function(t) {
                            return t(e)
                        }
                    }
                },
                Ne = function(e) {
                    return {
                        "&,&::before": {
                            position: "absolute",
                            width: "8px",
                            height: "8px",
                            zIndex: -1
                        },
                        "&::before": {
                            content: '""',
                            display: "block",
                            backgroundColor: e
                        }
                    }
                },
                ke = {
                    '&[data-popper-placement^="top"] > [data-popper-arrow]': {
                        bottom: "-4px"
                    },
                    '&[data-popper-placement^="top"] > [data-popper-arrow]::before': {
                        transform: "rotate(45deg)"
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]': {
                        top: "-4px"
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]::before': {
                        transform: "rotate(225deg)"
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]': {
                        right: "-4px"
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]::before': {
                        transform: "rotate(-45deg)"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]': {
                        left: "-4px"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]::before': {
                        transform: "rotate(135deg)"
                    }
                },
                Me = function(e) {
                    var t = e.active;
                    return l().createElement(y.A, {
                        __css: {
                            opacity: t ? "1" : "0.2",
                            mr: "xs",
                            width: "8px",
                            height: "8px",
                            borderRadius: "4px",
                            backgroundColor: "#212833"
                        }
                    })
                },
                je = function(e) {
                    var t = e.children,
                        n = e.onClick;
                    return l().createElement(_.A, {
                        onClick: n,
                        __css: {
                            alignItems: "center",
                            ml: "md",
                            fontSize: "sm",
                            lineHeight: "18px",
                            cursor: "pointer"
                        }
                    }, t)
                },
                Be = function(e) {
                    var t = e.title,
                        n = (0, A._)(e, ["title"]);
                    return l().createElement(v.A, (0, O._)({
                        variant: "subtitle1"
                    }, n), t)
                },
                Fe = function(e) {
                    var t = e.type,
                        n = void 0 === t ? "dot" : t,
                        r = e.stepText,
                        o = e.stepsLength,
                        i = e.currentStep;
                    return Le(n).on((function(e) {
                        return "dot" === e
                    }), (function() {
                        return l().createElement(_.A, {
                            __css: {
                                alignItems: "center"
                            }
                        }, Array(o).fill(1).map((function(e, t) {
                            return l().createElement(Me, {
                                key: t,
                                active: t === i
                            })
                        })))
                    })).otherwise((function() {
                        return l().createElement(y.A, null, l().createElement(v.A, {
                            variant: "subtitle2",
                            as: "span"
                        }, r, ": ", i + 1), " ", l().createElement(v.A, {
                            variant: "caption",
                            as: "span"
                        }, "/", o))
                    }))
                },
                Ge = function(e) {
                    var t = e.stepsLength,
                        n = e.currentStep,
                        r = e.onPrev,
                        o = e.onNext,
                        i = e.onClose,
                        a = e.prevText,
                        s = e.doneText,
                        u = e.nextText,
                        c = e.Trigger;
                    return c ? l().createElement(_.A, {
                        alignItems: "center"
                    }, n > 0 && l().createElement(c, {
                        onClick: r,
                        mr: "xxs",
                        children: a
                    }), n < t - 1 && l().createElement(c, {
                        onClick: o,
                        children: u
                    }), n === t - 1 && l().createElement(c, {
                        onClick: i,
                        children: s
                    })) : l().createElement(_.A, {
                        alignItems: "center"
                    }, n > 0 && l().createElement(je, {
                        onClick: r
                    }, l().createElement(Ee, {
                        size: 12
                    }), " ", a), n < t - 1 && l().createElement(je, {
                        onClick: o
                    }, u, " ", l().createElement(Te.A, {
                        size: 12
                    })), n === t - 1 && l().createElement(je, {
                        onClick: i
                    }, s))
                },
                Qe = (0, c.forwardRef)((function(e, t) {
                    var n = e.step,
                        r = e.stepsLength,
                        o = e.title,
                        i = e.content,
                        a = e.hasCloseIcon,
                        s = void 0 === a || a,
                        u = e.onPrev,
                        c = e.onNext,
                        f = e.onClose,
                        d = e.showArrow,
                        p = void 0 === d || d,
                        h = (0, A._)(e, ["step", "stepsLength", "title", "content", "hasCloseIcon", "onPrev", "onNext", "onClose", "showArrow"]),
                        v = (0, Oe.B)("widget-common").t;
                    return l().createElement(y.A, (0, O._)({
                        ref: t
                    }, h, {
                        __css: (0, S._)({
                            position: "relative",
                            px: "sm",
                            pt: "md",
                            pb: "sm",
                            width: "400px",
                            borderRadius: "2px",
                            bg: "primary",
                            color: "#212833",
                            zIndex: "tooltip"
                        }, ke)
                    }), s && l().createElement(y.A, {
                        __css: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            p: "xs",
                            lineHeight: 1,
                            cursor: "pointer"
                        },
                        onClick: f
                    }, l().createElement(Re, {
                        size: 12
                    })), o && l().createElement(Be, {
                        title: o
                    }), l().createElement(y.A, {
                        __css: (0, S._)({
                            pt: "xs",
                            pb: "sm",
                            fontSize: "sm",
                            lineHeight: "18px"
                        }, n > -1 && {
                            borderBottom: "1px solid #DBAB0F"
                        })
                    }, i), r > 0 && l().createElement(_.A, {
                        __css: {
                            justifyContent: "space-between",
                            mt: "sm"
                        }
                    }, l().createElement(Fe, {
                        type: "dot",
                        stepsLength: r,
                        currentStep: n
                    }), l().createElement(Ge, {
                        stepsLength: r,
                        currentStep: n,
                        onPrev: u,
                        onNext: c,
                        onClose: f,
                        prevText: v("widget-common-previous"),
                        doneText: v("widget-common-done"),
                        nextText: v("widget-common-next")
                    })), l().createElement(y.A, {
                        "data-popper-arrow": !0,
                        __css: p ? Ne("primary") : null
                    }))
                })),
                Ye = (0, c.forwardRef)((function(e, t) {
                    var n = e.step,
                        r = e.stepsLength,
                        o = e.title,
                        i = e.content,
                        a = (e.hasCloseIcon, e.onPrev),
                        s = e.onNext,
                        u = e.onClose,
                        c = e.showArrow,
                        f = void 0 === c || c,
                        d = e.alertSx,
                        p = e.bgColor,
                        h = void 0 === p ? "popupBg" : p,
                        m = e.stepTrigger,
                        g = (0, A._)(e, ["step", "stepsLength", "title", "content", "hasCloseIcon", "onPrev", "onNext", "onClose", "showArrow", "alertSx", "bgColor", "stepTrigger"]),
                        b = (0, Oe.B)("widget-common").t;
                    return l().createElement(y.A, (0, O._)({
                        ref: t
                    }, g, {
                        __css: (0, S._)({
                            position: "relative",
                            p: "sm",
                            maxWidth: "432px",
                            borderRadius: "default",
                            bg: h,
                            color: "t.primary",
                            zIndex: "tooltip",
                            wordBreak: "break-word",
                            boxShadow: "elevation3"
                        }, ke)
                    }), o && l().createElement(Be, {
                        mb: "xs",
                        title: o
                    }), l().createElement(v.A, {
                        variant: "body1"
                    }, i), r > 0 && l().createElement(_.A, {
                        __css: {
                            justifyContent: "space-between",
                            mt: "md",
                            alignItems: "center"
                        }
                    }, l().createElement(Fe, {
                        type: "text",
                        stepText: b("widget-common-step"),
                        stepsLength: r,
                        currentStep: n
                    }), l().createElement(Ge, {
                        stepsLength: r,
                        currentStep: n,
                        onPrev: a,
                        onNext: s,
                        onClose: u,
                        prevText: b("widget-common-previous"),
                        doneText: b("widget-common-done"),
                        nextText: b("widget-common-next"),
                        Trigger: m
                    })), l().createElement(De, {
                        showIcon: !1,
                        variant: "warning",
                        insideCenter: !0,
                        sx: (0, S._)({
                            py: "xxs",
                            mt: "md"
                        }, d)
                    }, l().createElement(_.A, null, l().createElement(v.A, {
                        variant: "body2"
                    }, b("widget-common-noGuidanceIsNeeded")), l().createElement(v.A, {
                        variant: "linkBody",
                        onClick: u,
                        __css: {
                            ml: "xxs",
                            cursor: "pointer"
                        }
                    }, b("widget-common-skip")))), l().createElement(y.A, {
                        "data-popper-arrow": !0,
                        __css: f ? Ne(h) : null
                    }))
                })),
                qe = (0, c.forwardRef)((function(e, t) {
                    return l().createElement(Ye, (0, O._)({
                        ref: t,
                        bgColor: "primary",
                        stepTrigger: function(e) {
                            return l().createElement(g.A, (0, O._)({
                                variant: "round",
                                bg: "t.white",
                                color: "bg5",
                                sz: "small"
                            }, e))
                        },
                        alertSx: {
                            bg: "primaryHover"
                        }
                    }, e))
                })),
                He = (0, c.forwardRef)((function(e, t) {
                    return l().createElement(Ye, (0, O._)({
                        ref: t,
                        bgColor: "popupBg",
                        stepTrigger: function(e) {
                            return l().createElement(g.A, (0, O._)({
                                sz: "normal"
                            }, e))
                        }
                    }, e))
                }));
            qe.displayName = "PrimaryWalkthroughCoachmark", He.displayName = "SecondaryWalkthroughCoachmark", Qe.displayName = "Coachmark";
            const Ve = Qe;
            var ze = "undefined" === typeof window ? l().useEffect : l().useLayoutEffect,
                We = (0, D.UF)("uikit-widget", "Coachmark");
            const $e = function(e) {
                var t, n = e.mask,
                    r = e.onClose,
                    o = e.children,
                    i = e.sx,
                    a = e.showArrow,
                    s = e.popoverVariant,
                    u = void 0 === s ? "yellow" : s;
                We();
                var f = (0, w._)((0, c.useState)({}), 2),
                    d = f[0],
                    p = f[1],
                    h = (0, w._)((0, c.useState)({
                        id: "",
                        step: -1,
                        direction: "forward"
                    }), 2),
                    y = h[0],
                    v = h[1],
                    m = (0, c.useRef)(null),
                    _ = (0, c.useMemo)((function() {
                        return {
                            putCoachMarkStep: function(e, t, n) {
                                "" === e || t < 0 ? console.warn("The id can not be empty or step can not < 0!") : (Array.isArray(d[e]) || (d[e] = []), d[e][t] = n, p((0, ve._)((0, S._)({}, d), {
                                    id: d[e].slice()
                                })))
                            },
                            showCoachMark: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "forward";
                                return void 0 !== d[e] && void 0 !== d[e][t] && (v({
                                    id: e,
                                    step: t,
                                    direction: n
                                }), !0)
                            },
                            closeCoachMark: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                v({
                                    id: "",
                                    step: -1,
                                    direction: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "forward"
                                }), r && r(e, t)
                            },
                            putCoachMark: function(e, t) {
                                "" !== e ? (d[e] = t, p((0, ve._)((0, S._)({}, d), {
                                    id: d[e]
                                }))) : console.warn("The id can not be empty!")
                            },
                            showCoachMarkSingle: function(e) {
                                return void 0 !== d[e] && (v((function(t) {
                                    return (0, ve._)((0, S._)({}, t), {
                                        id: e
                                    })
                                })), !0)
                            }
                        }
                    }), []),
                    g = y.id,
                    b = y.step,
                    E = y.direction,
                    T = null,
                    R = null === (t = d[g]) || void 0 === t ? void 0 : t[b],
                    O = n || (null === R || void 0 === R ? void 0 : R.mask);
                if (void 0 !== R) {
                    var A = d[g].length,
                        x = R.title,
                        I = R.content,
                        C = R.hasCloseIcon,
                        P = R.onNext,
                        D = R.onPrev,
                        U = R.onClose,
                        L = function() {
                            v({
                                id: g,
                                step: b + 1,
                                direction: "forward"
                            }), P && P()
                        },
                        N = function() {
                            v({
                                id: g,
                                step: b - 1,
                                direction: "back"
                            }), D && D()
                        },
                        k = function() {
                            _.closeCoachMark(g, b), U && U()
                        };
                    T = Le(u).on((function(e) {
                        return "primarywalkthrough" === e
                    }), (function() {
                        return l().createElement(qe, {
                            ref: m,
                            stepsLength: A,
                            step: b,
                            title: x,
                            content: I,
                            hasCloseIcon: C,
                            onPrev: N,
                            onNext: L,
                            onClose: k,
                            sx: i
                        })
                    })).on((function(e) {
                        return "secondarywalkthrough" === e
                    }), (function() {
                        return l().createElement(He, {
                            ref: m,
                            stepsLength: A,
                            step: b,
                            title: x,
                            content: I,
                            hasCloseIcon: C,
                            onPrev: N,
                            onNext: L,
                            onClose: k,
                            sx: i
                        })
                    })).otherwise((function() {
                        return l().createElement(Ve, {
                            ref: m,
                            stepsLength: A,
                            step: b,
                            title: x,
                            content: I,
                            hasCloseIcon: C,
                            onPrev: N,
                            onNext: L,
                            onClose: k,
                            sx: i
                        })
                    }))
                }
                var M = d[g];
                if (void 0 !== M && void 0 === R) {
                    var j = M.title,
                        B = M.content,
                        F = M.hasCloseIcon,
                        G = M.onClose;
                    T = l().createElement(Ve, {
                        ref: m,
                        step: -1,
                        stepsLength: 0,
                        title: j,
                        content: B,
                        hasCloseIcon: F,
                        onClose: function() {
                            _.closeCoachMark(g), G && G()
                        },
                        sx: i,
                        showArrow: a
                    })
                }
                return ze((function() {
                    var e, t = (null === R || void 0 === R ? void 0 : R.position) || "left-start",
                        n = null === R || void 0 === R || null === (e = R.target) || void 0 === e ? void 0 : e.current;
                    if (!n) {
                        var r;
                        if ("forward" === E) return b + 1 < (null === (r = d[g]) || void 0 === r ? void 0 : r.length) ? v({
                            id: g,
                            step: b + 1,
                            direction: E
                        }) : void 0;
                        if ("back" === E) return b - 1 >= 0 ? v({
                            id: g,
                            step: b - 1,
                            direction: E
                        }) : void 0
                    }
                    var o = (0, me.n4)(n, m.current, {
                        placement: t,
                        modifiers: [{
                            name: "arrow",
                            options: {
                                padding: 5
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [0, 8]
                            }
                        }]
                    });
                    return function() {
                        o && o.destroy()
                    }
                }), [y, R]), ze((function() {
                    var e, t = (null === M || void 0 === M ? void 0 : M.position) || "left-start",
                        n = null === M || void 0 === M || null === (e = M.target) || void 0 === e ? void 0 : e.current;
                    if (n) {
                        var r = (0, me.n4)(n, m.current, {
                            placement: t,
                            modifiers: [{
                                name: "arrow",
                                options: {
                                    padding: 5
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: [0, 8]
                                }
                            }]
                        });
                        return function() {
                            r && r.destroy()
                        }
                    }
                }), [y, M]), l().createElement(ge.Provider, {
                    value: _
                }, O ? l().createElement(Q.A, {
                    visible: !!T,
                    children: T
                }) : T, o)
            };
            var Ke = n("iKvg"),
                Xe = n("d12p"),
                Ze = n("JtvI"),
                Je = function() {
                    if (Object.keys) return Object.keys;
                    var e = Object.prototype.hasOwnProperty,
                        t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        r = n.length;
                    return function(o) {
                        if ("object" !== typeof o && "function" !== typeof o || null === o) throw new TypeError("Object.keys called on non-object");
                        var i = [];
                        for (var a in o) e.call(o, a) && i.push(a);
                        if (t)
                            for (var s = 0; s < r; s++) e.call(o, n[s]) && i.push(n[s]);
                        return i
                    }
                }(),
                et = n("nILx"),
                tt = {
                    default: "stretch",
                    left: "flex-start",
                    right: "flex-end",
                    center: "center"
                },
                nt = l().memo((function(e) {
                    var t = e.anchorOrigin,
                        n = e.position,
                        r = e.enablePortal,
                        o = e.container,
                        i = (0, A._)(e, ["anchorOrigin", "position", "enablePortal", "container"]),
                        a = {
                            position: n,
                            zIndex: "notification",
                            alignItems: tt[t.horizontal] || tt.default
                        };
                    return "top" === t.vertical ? a.top = 12 : a.bottom = 12, "left" === t.horizontal ? a.left = 12 : "center" === t.horizontal ? (a.left = "50%", a.transform = "translateX(-50%)") : a.right = 12, r || o ? l().createElement(U.Ay, {
                        container: o
                    }, l().createElement(_.A, (0, O._)({
                        className: "UikitWidget_NotificationContainer",
                        flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                    }, i, {
                        __css: a
                    }))) : l().createElement(_.A, (0, O._)({
                        className: "UikitWidget_NotificationContainer",
                        flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                    }, i, {
                        __css: a
                    }))
                }));
            const rt = nt;
            const ot = function(e) {
                return l().createElement(be.A, (0, O._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M11.989 22H12c5.527 0 10-4.473 10-10 0-5.528-4.473-10-10-10-5.516 0-9.989 4.472-10 9.989-.011 5.527 4.461 10 9.989 10.011zM10.99 5.016h2.018v2.007h-2.018V5.016zm0 4.633h2.018v9.346h-2.018V9.65z",
                    fill: "currentColor"
                }))
            };
            var it = n("DQRa"),
                at = n("4+lJ");
            const st = function(e) {
                return l().createElement(be.A, (0, O._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "currentColor"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 4.791a.723.723 0 00.716-.729V2.729c0-.402-.32-.729-.716-.729a.723.723 0 00-.716.73v1.332c0 .402.32.73.716.73zM6.884 6.51a.713.713 0 01-.716.72.733.733 0 01-.508-.2l-.936-.94a.713.713 0 01-.212-.515c0-.197.076-.385.212-.515a.734.734 0 011.016 0l.932.934c.136.13.212.319.212.516zm4.436 14.032h1.336c.396 0 .716.326.716.729 0 .402-.32.729-.716.729h-1.332a.723.723 0 01-.716-.73c0-.38.32-.707.712-.729zM2.716 10.268h1.332c.388 0 .716.335.716.73 0 .401-.32.728-.716.728H2.716A.723.723 0 012 10.998c0-.394.328-.73.716-.73zm16.776-4.694a.696.696 0 00-.212-.511.701.701 0 00-1.02 0l-.932.934a.713.713 0 00-.212.516c0 .197.076.386.212.515.14.135.324.202.508.202a.719.719 0 00.508-.206l.932-.934a.73.73 0 00.216-.516zm.46 4.694h1.332c.388 0 .716.335.716.73 0 .401-.32.728-.716.728h-1.332a.723.723 0 01-.716-.729c0-.402.32-.73.716-.73zm-5.964 8.294h-3.976a.723.723 0 00-.716.73c0 .402.32.729.716.729h3.976a.723.723 0 00.716-.73c0-.402-.32-.729-.716-.729zM12 5.981c1.612 0 3.124.625 4.26 1.76A5.984 5.984 0 0118.024 12c0 1.61-.628 3.122-1.764 4.258a5.982 5.982 0 01-4.26 1.76 5.982 5.982 0 01-4.26-1.76A5.984 5.984 0 015.976 12c0-1.61.628-3.123 1.764-4.258A5.982 5.982 0 0112 5.982z",
                    fill: "currentColor"
                }))
            };
            var ut = {
                    info: ot,
                    error: it.A,
                    warning: at.A,
                    success: we.A,
                    tips: st
                },
                ct = (0, c.forwardRef)((function(e, t) {
                    var n = e.message,
                        r = e.header,
                        o = e.footer,
                        i = e.icon,
                        a = e.variant,
                        s = void 0 === a ? "tips" : a,
                        u = e.closable,
                        f = void 0 !== u && u,
                        d = e.showIcon,
                        p = void 0 === d || d,
                        h = e.onClose,
                        m = e.progress,
                        g = (e.showProgress, (0, A._)(e, ["message", "header", "footer", "icon", "variant", "closable", "showIcon", "onClose", "progress", "showProgress"])),
                        b = ut[s],
                        E = "toast.".concat(s),
                        T = (0, c.isValidElement)(i) ? l().cloneElement(i, (0, S._)({
                            size: 20,
                            display: "block"
                        }, i.props), []) : b ? l().createElement(b, {
                            size: 20,
                            display: "block"
                        }) : null;
                    return l().createElement(_.A, (0, O._)({
                        ref: t,
                        sx: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        tx: "toast",
                        variant: s
                    }, g), l().createElement(y.A, {
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(m, "%"),
                            height: "3px",
                            bg: "primary"
                        }
                    }), l().createElement(_.A, {
                        alignItems: "flex-start",
                        __css: {
                            width: "100%"
                        }
                    }, p ? l().createElement(y.A, {
                        color: E,
                        __css: {
                            mr: "ls",
                            pt: "2px",
                            flexShrink: 0
                        }
                    }, T) : null, l().createElement(_.A, {
                        className: "bn-notification-body-wrapper",
                        __css: {
                            maxHeight: "146px",
                            flexDirection: "column",
                            width: "100%"
                        }
                    }, r ? l().createElement(v.A, {
                        sx: {
                            color: "t.primary",
                            mb: "2px",
                            flexShrink: 0
                        },
                        variant: "subtitle1"
                    }, r) : null, n ? l().createElement(v.A, {
                        className: "bn-notification-msg-wrapper",
                        variant: "body2",
                        sx: {
                            color: "t.secondary",
                            overflow: "auto",
                            maxHeight: 120,
                            pr: f ? "md" : 0,
                            wordWrap: "break-word"
                        }
                    }, n) : null, o ? l().createElement(v.A, {
                        variant: "label5",
                        sx: {
                            color: "toast.content",
                            flexShrink: 0,
                            pr: f ? "md" : 0
                        }
                    }, o) : null)), f ? l().createElement(y.A, {
                        __css: {
                            position: "absolute",
                            right: "sm",
                            alignItems: "flex-start",
                            flexShrink: 0,
                            p: "minor"
                        }
                    }, l().createElement(G.A, {
                        size: 20,
                        onClick: h,
                        display: "block",
                        cursor: "pointer",
                        color: "toast.closeColor"
                    })) : null)
                }));
            ct.displayName = "Toast";
            const lt = ct;

            function ft(e) {
                var t = (0, w._)((0, c.useState)(0), 2),
                    n = t[0],
                    r = t[1],
                    o = e.onClose,
                    i = e.item,
                    a = e.style,
                    s = i.autoHideDuration,
                    u = i.open,
                    f = i.key,
                    d = i.showProgress,
                    p = i.onClose,
                    h = (0, A._)(i, ["autoHideDuration", "open", "key", "showProgress", "onClose"]),
                    y = l().useRef(),
                    v = l().useCallback((function(e, t) {
                        p && p(e, t, f), o(e, t, f)
                    }), [f]),
                    m = l().useCallback((function() {
                        s && (clearTimeout(y.current), y.current = setTimeout((function() {
                            s && v(null, "timeout")
                        }), s))
                    }), [s, v]);
                return (0, c.useEffect)((function() {
                    return u && m(),
                        function() {
                            clearTimeout(y.current)
                        }
                }), [u, m]), (0, c.useEffect)((function() {
                    if (s && d) var e = setInterval((function() {
                        r((function(t) {
                            return t >= 100 ? (clearInterval(e), 100) : t + 1e3 / s
                        }))
                    }), 10)
                }), [s]), u ? l().createElement(lt, (0, O._)({
                    mb: "xs",
                    onClose: v,
                    progress: n,
                    showProgress: d
                }, h, {
                    style: a
                })) : null
            }
            var dt = {
                vertical: "top",
                horizontal: "center"
            };
            const pt = function(e) {
                var t = e.anchorOrigin,
                    n = void 0 === t ? dt : t,
                    r = e.autoHideDuration,
                    o = void 0 === r ? 4500 : r,
                    i = e.closable,
                    a = void 0 !== i && i,
                    s = e.disableAnimate,
                    u = void 0 !== s && s,
                    l = e.position,
                    f = void 0 === l ? "fixed" : l,
                    d = e.children,
                    p = e.queueSize,
                    h = void 0 === p ? 10 : p,
                    y = e.container,
                    v = e.enablePortal,
                    m = (0, w._)(c.useState(v), 2),
                    _ = m[0],
                    g = m[1],
                    b = c.useMemo((function() {
                        return []
                    }), []),
                    E = (0, w._)(c.useState([]), 2),
                    T = E[0],
                    R = E[1],
                    O = c.useCallback((function(t, n, r) {
                        e.onClose && e.onClose(t, n, r), R(void 0 !== r && null !== r ? function(e) {
                            return e.filter((function(e) {
                                return e.key !== r.toString()
                            }))
                        } : [])
                    }), [e]),
                    x = c.useRef(null),
                    I = c.useCallback((function() {
                        R((function(t) {
                            var n = t.length - h + 1;
                            if (n >= 1) {
                                for (var r = t.splice(0, n), o = 0; o < r.length; ++o) {
                                    var i = r[o];
                                    i && (i.onClose && i.onClose(null, "max", i.key), e.onClose && e.onClose(null, "max", i.key))
                                }
                                var a = b.splice(0, Math.min(n - 1, b.length));
                                if (a.length > 0) return (0, Xe._)(t).concat((0, Xe._)(a))
                            }
                            return (0, Xe._)(t)
                        }))
                    }), [e, b, h]),
                    C = c.useCallback((function() {
                        b.length > 0 && R((function(e) {
                            var t = b.shift();
                            return t ? (0, Xe._)(e).concat([t]) : e
                        }))
                    }), [b]),
                    P = c.useCallback((function() {
                        return I(), C()
                    }), [I, C]),
                    D = T.reduce((function(e, t) {
                        var r, o = (r = t.anchorOrigin || n, "".concat(r.vertical, "-").concat(r.horizontal)),
                            i = e[o] || [];
                        return (0, ve._)((0, S._)({}, e), (0, Ke._)({}, o, (0, Xe._)(i).concat([t])))
                    }), {}),
                    U = c.useMemo((function() {
                        return {
                            enqueueNotification: function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                if (void 0 !== t[0] || void 0 !== t[1]) {
                                    var i = function(e, t) {
                                        var n;
                                        return "object" !== typeof t[0] || c.isValidElement(t[0]) ? (n = t[1] || e).message = n.message || t[0] : n = t[0] || e, n
                                    }({
                                        anchorOrigin: n,
                                        autoHideDuration: o,
                                        closable: a,
                                        enablePortal: v
                                    }, t);
                                    i.enablePortal && g(i.enablePortal), i.container && (x.current = i.container);
                                    var s = i.key,
                                        u = i.anchorOrigin,
                                        l = void 0 === u ? n : u,
                                        f = i.autoHideDuration,
                                        d = void 0 === f ? o : f,
                                        p = i.closable,
                                        h = void 0 === p ? a : p,
                                        y = i.persist,
                                        m = i.message,
                                        _ = (0, A._)(i, ["key", "anchorOrigin", "autoHideDuration", "closable", "persist", "message"]),
                                        E = s && s.toString() || (new Date).getTime().toString() + Math.random().toString(),
                                        T = (0, ve._)((0, S._)({
                                            key: E
                                        }, _), {
                                            persist: Boolean(y),
                                            autoHideDuration: y ? 0 : d,
                                            closable: h,
                                            open: !0,
                                            message: m,
                                            anchorOrigin: l
                                        });
                                    return b.push(T), P(), E
                                }
                            },
                            closeNotification: function(e) {
                                O(null, null, e)
                            }
                        }
                    }), [b, n, o, a, v, O, P]);
                return c.createElement(et.A.Provider, {
                    value: U
                }, d, function(e) {
                    if (Object.entries) return Object.entries(e);
                    for (var t = Je(e), n = t.length, r = new Array(n); n--;) r[n] = [t[n], e[t[n]]];
                    return r
                }(D).map((function(e) {
                    var t = (0, w._)(e, 2),
                        n = t[0],
                        r = t[1],
                        o = r[0],
                        i = o.anchorOrigin,
                        a = o.style,
                        s = "top" === i.vertical ? -1 : 1;
                    return u ? c.createElement(rt, {
                        key: n,
                        anchorOrigin: i,
                        position: f,
                        container: x.current || y,
                        enablePortal: _,
                        style: null !== a && void 0 !== a ? a : {}
                    }, r.map((function(e) {
                        return c.createElement(ft, {
                            key: e.key,
                            item: e,
                            onClose: O
                        })
                    }))) : c.createElement(Ze.S6, {
                        key: n,
                        defaultStyles: r.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    opacity: 0,
                                    translateY: 60 * s
                                }
                            }
                        })),
                        styles: r.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    translateY: (0, Ze.oz)(0, Ze.v4.gentle),
                                    opacity: (0, Ze.oz)(1, Ze.v4.gentle)
                                }
                            }
                        })),
                        willLeave: function(e) {
                            var t = e.key;
                            return {
                                translateY: (0, Ze.oz)(-60 * s * (r[0].key === t ? 1 : -1)),
                                opacity: (0, Ze.oz)(0)
                            }
                        },
                        willEnter: function() {
                            return {
                                translateY: 60 * s,
                                opacity: 1
                            }
                        }
                    }, (function(e) {
                        return c.createElement(rt, {
                            key: n,
                            anchorOrigin: i,
                            position: f,
                            container: x.current || y,
                            enablePortal: _,
                            style: (0, S._)({
                                transform: "translate3d(".concat("center" === i.horizontal ? "-50%" : "0", ", ").concat(e[e.length - 1].style.translateY, "px, 0)")
                            }, null !== a && void 0 !== a ? a : {})
                        }, e.map((function(e) {
                            var t = e.key,
                                n = e.style.opacity,
                                r = e.data;
                            return c.createElement(ft, {
                                key: t,
                                item: r,
                                onClose: O,
                                style: {
                                    opacity: n
                                }
                            })
                        })))
                    }))
                })))
            };
            var ht = n("tWDR"),
                yt = n("1CC6"),
                vt = n("qRru");
            n("p+yI");
            let mt;
            mt = {
                env: "",
                getUserInfo: async () => ({}),
                getUserInfoSync() {},
                getUserSettings: async () => ({}),
                getSessionInfo: async () => ({}),
                updateUserInfo: async () => ({}),
                onUserInfoChange: async () => ({}),
                setMicroAppRoute: () => ({}),
                updateUserSettings() {},
                onUserSettingsChange() {},
                onActive() {},
                onDeactive() {},
                onLogin() {},
                onLogout() {},
                login() {},
                register() {},
                onRefresh() {},
                registerActionHandle: () => () => {},
                constants: {},
                onAppEvent() {},
                tradeService: {
                    getLayout: async () => ({}),
                    onAddCustomLayout: void 0,
                    onLayoutChange: void 0,
                    onToggleWidgetPanel: void 0,
                    useNotifyLayoutHasUpdate() {},
                    notifyProLayoutUpdate() {},
                    notifyCustomLayoutUpdate() {}
                },
                storage: {
                    setItem: () => Promise.resolve(),
                    getItem: () => Promise.resolve(),
                    removeItem: () => Promise.resolve(),
                    onStorageEvent(e) {}
                }
            };
            const _t = mt;
            var gt = n("OGoN"),
                bt = n("72cf"),
                Et = n("kI1i"),
                Tt = function(e) {
                    var t = e.children,
                        n = (0, Et.Sg)(),
                        o = (0, Et.QE)();
                    return (0, r.jsx)(gt.A, {
                        theme: n,
                        children: (0, r.jsx)(bt.ThemeProvider, {
                            theme: o,
                            children: t
                        })
                    })
                };
            const Rt = (0, c.memo)(Tt);
            var Ot = n("NC2t"),
                St = n("iKFe");
            const At = {
                    flexDirection: "column",
                    minHeight: "100vh",
                    pb: "56px",
                    bg: "layout.componentBg",
                    ".content-container": {
                        flex: "1"
                    }
                },
                wt = {
                    position: "fixed",
                    zIndex: 100,
                    bottom: 0,
                    width: "100vw",
                    height: "56px",
                    px: "16px",
                    pt: "8px",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    bg: "layout.componentBg",
                    borderTop: "1px solid",
                    borderColor: "line",
                    ".tab": {
                        textAlign: "center"
                    }
                };

            function xt() {
                var e = (0, Ot._)(["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "]);
                return xt = function() {
                    return e
                }, e
            }
            var It = {
                desktop: 1260,
                tablet: 992,
                phone: 760
            };
            const Ct = Object.keys(It).reduce((function(e, t) {
                return e[t] = function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return (0, St.AH)(xt(), It[t], St.AH.apply(void 0, (0, Xe._)(n)))
                }, e
            }), {});

            function Pt() {
                var e = (0, Ot._)(["display: none !important;"]);
                return Pt = function() {
                    return e
                }, e
            }

            function Dt() {
                var e = (0, Ot._)(["\n        html {\n          height: 100%;\n          overflow: -moz-hidden-unscrollable;\n          -webkit-tap-highlight-color: transparent;\n        }\n        body {\n          width: 100vw !important;\n          height: 100%;\n          margin: 0;\n          overflow-x: hidden;\n          overflow-y: auto;\n          -ms-overflow-style: none;\n          -webkit-overflow-scrolling: touch;\n          -webkit-tap-highlight-color: transparent;\n        }\n        @media screen and (max-width: 767px) {\n          #__APP_FOOTER footer.footer-wrapper {\n            padding-bottom: ", "px;\n          }\n        }\n        #__next {\n          max-width: 100vw;\n          overflow-x: hidden;\n        }\n        input {\n          font-family: inherit;\n\n          &::placeholder {\n            font-style: normal !important;\n          }\n        }\n\n        .list-grid {\n          > div > div > div {\n            height: 100%;\n            margin-top: 0;\n            margin-bottom: 0;\n            padding-right: 0;\n            padding-left: 0;\n            > div {\n              flex: 1;\n            }\n          }\n        }\n        .chatWidget {\n          ", ";\n        }\n        body::-webkit-scrollbar {\n          display: none;\n        }\n\n        .scrollBar {\n          padding-right: 5px;\n        }\n        .scrollBar:hover {\n          padding-right: 0px;\n        }\n        .scrollBar::-webkit-scrollbar {\n          width: 0px !important;\n          height: 0px !important;\n        }\n        .scrollBar:hover::-webkit-scrollbar {\n          width: 5px !important;\n          height: 6px !important;\n        }\n        ::-webkit-scrollbar {\n          width: 5px !important;\n          height: 6px !important;\n        }\n        /* \u8f93\u5165\u6846 */\n        input[type='number']::-webkit-outer-spin-button,\n        input[type='number']::-webkit-inner-spin-button {\n          margin: 0;\n          -webkit-appearance: none;\n        }\n        @keyframes buttonSelected {\n          0% {\n            -webkit-transform: translateY(0);\n            transform: translateY(0);\n          }\n\n          40% {\n            -webkit-transform: translateY(-3px);\n            transform: translateY(-3px);\n          }\n\n          to {\n            -webkit-transform: translateY(0);\n            transform: translateY(0);\n          }\n        }\n\n        /* \u6eda\u52a8\u69fd */\n        ", "\n      "]);
                return Dt = function() {
                    return e
                }, e
            }

            function Ut() {
                var e = (0, Et.DP)().isLight;
                return (0, r.jsx)(St.mL, {
                    styles: (0, St.AH)(Dt(), 72, Ct.phone(Pt()), e ? "\n  ::-webkit-scrollbar-track {\n    border-radius: 0 !important;\n    background-color: transparent!important;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1) !important;\n    border-radius:3px !important;\n    height: 90px !important;\n    border-color:transparent!important;\n  }\n" : "\n  ::-webkit-scrollbar-track {\n    background-color: transparent!important;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #5E6673 !important;\n    border-radius:3px !important;\n    height: 90px !important;\n    border-color:transparent!important;\n  }\n")
                })
            }
            const Lt = (0, c.memo)(Ut);
            var Nt = n("NoXm"),
                kt = n("kyny"),
                Mt = function() {
                    var e = (0, Et.c$)();
                    return (0, c.useEffect)((function() {
                        kt.b || (0, Nt.registerHeaderRightHandler)((function(t) {
                            if (Array.isArray(t)) {
                                var n, o = t.filter((function(e) {
                                    return "header-theme" !== e.key || (n = e, !1)
                                }));
                                return (0, Xe._)(o).concat((0, Xe._)(n ? [(0, r.jsx)("div", {
                                    onMouseEnter: e,
                                    children: n
                                }, "theme-toggle")] : []))
                            }
                            return (0, r.jsx)(r.Fragment, {
                                children: t
                            })
                        }))
                    }), [e]), null
                },
                jt = (0, c.memo)(Mt),
                Bt = n("9PqG"),
                Ft = n("gYIm"),
                Gt = n("Gii1"),
                Qt = (0, ye.A)((function() {
                    return Promise.all([n.e(2639), n.e(7435)]).then(n.bind(n, "EX7S"))
                }), {
                    webpack: function() {
                        return ["EX7S"]
                    },
                    ssr: !1
                });

            function Yt() {
                var e = (0, Bt.ok)();
                return (0, Gt.vz)().isLoggedIn && !0 ? (0, r.jsx)(Qt, {
                    expand: !0,
                    isSticky: !0,
                    lng: e,
                    i18nHost: Ft.K5
                }) : null
            }
            const qt = (0, c.memo)(Yt);
            var Ht = n("P0pw"),
                Vt = (0, ye.A)((function() {
                    return Promise.all([n.e(5553), n.e(1525)]).then(n.bind(n, "S09A"))
                }), {
                    webpack: function() {
                        return ["S09A"]
                    },
                    ssr: !1
                }),
                zt = function() {
                    var e = (0, c.useState)(!1),
                        t = e[0],
                        n = e[1],
                        o = (0, c.useState)("spotGrid"),
                        i = o[0],
                        a = o[1],
                        s = (0, c.useCallback)((function() {
                            return n(!1)
                        }), []);
                    return (0, c.useEffect)((function() {
                        return Ht.B.on(Ht.R.VIEW_AGREEMENT_MODAL, (function(e) {
                            var t = e.strategyType;
                            n(!0), a(t)
                        }))
                    }), []), t && (0, r.jsx)(Vt, {
                        strategyType: i,
                        visible: t,
                        onClose: s
                    })
                };
            const Wt = (0, c.memo)(zt);
            var $t = n("eMzf"),
                Kt = n("KRo/"),
                Xt = l().memo((function() {
                    return (0, r.jsxs)("div", {
                        style: {
                            width: 0,
                            height: 0,
                            overflow: "hidden"
                        },
                        children: [(0, r.jsx)($t.A, {}), (0, r.jsx)(Kt.A, {})]
                    })
                })),
                Zt = n("G3iB");
            const Jt = (0, c.memo)((({
                children: e,
                theme: t
            }) => (0, r.jsx)(Zt.Nx.Provider, {
                value: t,
                children: e
            })));
            var en = function(e) {
                    var t = e.children,
                        n = (0, Et.DP)();
                    return (0, r.jsx)(Jt, {
                        theme: n,
                        children: t
                    })
                },
                tn = (0, ye.A)((function() {
                    return Promise.all([n.e(2639), n.e(5553), n.e(6103)]).then(n.bind(n, "D79G"))
                }), {
                    webpack: function() {
                        return ["D79G"]
                    },
                    ssr: !1
                }),
                nn = {
                    vertical: "bottom",
                    horizontal: "right"
                },
                rn = function(e) {
                    return e.children
                },
                on = function(e) {
                    var t = e.children,
                        n = (0, Gt.wA)(),
                        o = (0, Gt.vz)().isLoggedIn;
                    return (({
                        isElectron: e,
                        MARKET_STREAM_HOST: t
                    }) => {
                        (0, i.A)((() => {
                            e ? (0, ht.Lu)({
                                clientType: "electron",
                                isHttp: !0,
                                sourceUrl: `${t}/market`,
                                track: vt.u4,
                                getSessionInfo: _t ? .getSessionInfo
                            }) : (0, ht.Lu)({
                                clientType: "web",
                                isHttp: !0,
                                sourceUrl: `${t}/market`,
                                track: vt.u4,
                                getSessionInfo: () => new Promise((e => e({
                                    "bnc-uuid": yt.U.read("bnc-uuid") ? ? void 0,
                                    lang: yt.U.read("lang") ? ? void 0,
                                    cr00: yt.U.read("cr00") ? ? void 0
                                })))
                            })
                        }))
                    })({
                        isElectron: kt.b,
                        MARKET_STREAM_HOST: Ft.$L
                    }), (0, c.useEffect)((function() {
                        n.userCenter.checkLogin()
                    }), [n.userCenter]), (0, c.useEffect)((function() {
                        o && n.userCenter.queryUserInfo()
                    }), [n.userCenter, o]), (0, r.jsxs)(rn, {
                        children: [(0, r.jsx)(Rt, {
                            children: (0, r.jsx)(en, {
                                children: (0, r.jsxs)($e, {
                                    sx: {
                                        maxWidth: "281px"
                                    },
                                    children: [(0, r.jsx)(Xt, {}), (0, r.jsxs)(pt, {
                                        queueSize: 2,
                                        closable: !0,
                                        anchorOrigin: nn,
                                        disableAnimate: !0,
                                        children: [(0, r.jsx)(Lt, {}), (0, r.jsx)(jt, {}), (0, r.jsx)(qt, {}), (0, r.jsx)(tn, {}), t, (0, r.jsx)(Wt, {})]
                                    })]
                                })
                            })
                        }), (0, r.jsx)(he.ReactQueryDevtools, {})]
                    })
                };
            const an = (0, c.memo)(on);
            var sn = n("aooZ"),
                un = n("1lvF"),
                cn = n("1fv+"),
                ln = n("Vur3"),
                fn = n("7wiY"),
                dn = n("jM3e"),
                pn = n("+Log"),
                hn = n("uoy8");
            const yn = function(e) {
                return l().createElement(be.A, (0, O._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 4h6v2h-2v1h7v4.5h2v4h-2V20H4v-4.5H2v-4h2V7h7V6H9V4zm1 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 3.703h6L13.704 16.5h-3.4L9 15.203zM15.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
                    fill: "currentColor"
                }))
            };
            var vn = n("txKm");
            const mn = function(e) {
                    return l().createElement(be.A, (0, O._)({
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), l().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 3h14v18l-3.5-3-3.5 3-3.5-3L5 21V3zm3 4h4v2.5H8V7zm4 5H8v2.5h4V12zm2-5h2.5v2.5H14V7zm2.5 5H14v2.5h2.5V12z",
                        fill: "currentColor"
                    }))
                },
                _n = ({
                    activeTab: e,
                    tabPanel: t,
                    onTabChange: n
                }) => {
                    const o = (() => {
                        const {
                            t: e
                        } = (0, Z.Y_)();
                        return (0, c.useMemo)((() => [{
                            key: fn.F.strategyList,
                            renderIcon: ({
                                size: e,
                                color: t
                            }) => (0, r.jsx)(yn, {
                                size: e,
                                color: t
                            }),
                            label: e("strategyList", {
                                defaultValue: "Strategy List"
                            })
                        }, {
                            key: fn.F.trade,
                            renderIcon: ({
                                size: e,
                                color: t
                            }) => (0, r.jsx)(vn.A, {
                                size: e,
                                color: t
                            }),
                            label: e("trade", {
                                defaultValue: "Trade"
                            })
                        }, {
                            key: fn.F.allOrders,
                            renderIcon: ({
                                size: e,
                                color: t
                            }) => (0, r.jsx)(mn, {
                                size: e,
                                color: t
                            }),
                            label: e("all-orders", {
                                defaultValue: "All Orders"
                            })
                        }]), [e])
                    })();
                    return (0, r.jsxs)(_.A, {
                        sx: At,
                        children: [(0, r.jsx)("div", {
                            className: "content-container",
                            children: t
                        }), (0, r.jsx)(_.A, {
                            sx: wt,
                            children: o.map((t => {
                                const o = t.key === e,
                                    i = o ? "t.primary" : "iconNormal",
                                    a = o ? "t.primary" : "t.third",
                                    s = (0, r.jsxs)("div", {
                                        className: "tab",
                                        children: [t.renderIcon({
                                            size: 24,
                                            color: i
                                        }), (0, r.jsx)(v.A, {
                                            fontSize: "10px",
                                            lineHeight: "16px",
                                            color: a,
                                            mt: "2px",
                                            children: t.label
                                        })]
                                    });
                                return (0, r.jsx)("div", {
                                    onClick: () => {
                                        return e = t.key, void("function" === typeof n && n(e));
                                        var e
                                    },
                                    children: s
                                }, t.key)
                            }))
                        })]
                    })
                };
            var gn = n("+Ls+"),
                bn = n("nK1b"),
                En = (0, ye.A)((function() {
                    return Promise.all([n.e(3179), n.e(2286), n.e(5553), n.e(7416)]).then(n.bind(n, "xe27"))
                }), {
                    webpack: function() {
                        return ["xe27"]
                    },
                    ssr: !0
                }),
                Tn = {
                    pageName: bn.eQ.LANDING,
                    df_source: bn.vV.strategyTrading,
                    eventName: bn.b8.strategyLanding
                };
            const Rn = function() {
                var e = (0, sn.rd)(),
                    t = (({
                        currentStrategy: e,
                        defaultTab: t = fn.F.trade,
                        router: n,
                        currentRoute: r
                    }) => {
                        const {
                            pathname: o,
                            query: i,
                            hash: a
                        } = r || n.current, s = i ? .[fn.V], u = "string" === typeof s ? s.toLowerCase() : t, l = (0, c.useMemo)((() => (0, dn.CX)({
                            search: "",
                            tab: fn.F.strategyList
                        }) === o ? a === `#${hn.MI.BOT_MARKET_PLACE}` ? fn.F.leaderBoard : fn.F.strategyList : u && Object.values(fn.F).includes(u) ? u : t), [t, a, o, u]), f = (0, c.useCallback)((async (t, r) => {
                            if (t === fn.F.strategyList) {
                                const t = (0, dn.CX)({
                                    search: "",
                                    tab: fn.F.strategyList
                                });
                                e && pn.n.setItem(pn.p.lastViewedStrategy, e), l !== fn.F.leaderBoard || "function" !== typeof n ? .push || (0, dn.xw)(t) ? window.location.href = t : n.push(t)
                            } else if (t === fn.F.leaderBoard) {
                                const t = (0, dn.CX)({
                                    search: "",
                                    tab: fn.F.leaderBoard
                                });
                                e && pn.n.setItem(pn.p.lastViewedStrategy, e), l !== fn.F.strategyList || "function" !== typeof n ? .push || (0, dn.xw)(t) ? window.location.href = t : n.push(t)
                            } else {
                                const o = { ...i,
                                        [fn.V]: t
                                    },
                                    a = ln.stringify(o),
                                    s = a ? `?${a}` : "";
                                let u = "";
                                switch (e || await pn.n.getItem(pn.p.lastViewedStrategy) || "spotDca") {
                                    case "spotGrid":
                                        u = (0, dn.Wy)({
                                            symbol: r
                                        }, s);
                                        break;
                                    case "futuresGrid":
                                        u = (0, dn.fc)({
                                            symbol: r
                                        }, s);
                                        break;
                                    case "twap":
                                        u = (0, dn.lV)({
                                            symbol: r
                                        }, s);
                                        break;
                                    case "rebalancingBot":
                                        u = (0, dn.nu)({
                                            symbol: r
                                        }, s);
                                        break;
                                    case "spotDca":
                                        u = (0, dn.k4)({
                                            symbol: r
                                        }, s);
                                        break;
                                    case "arbitrage":
                                        u = (0, dn.z0)({
                                            symbol: r
                                        }, s)
                                }
                                u && (l !== fn.F.trade && l !== fn.F.allOrders || "function" !== typeof n ? .push ? window.location.href = u : n.push(u))
                            }
                        }), [e, i, n, l]);
                        return (0, c.useEffect)((() => {
                            l !== fn.F.leaderBoard && window.scrollTo(0, 0)
                        }), [l]), {
                            activeTab: l,
                            setActiveTab: f
                        }
                    })({
                        defaultTab: fn.F.strategyList,
                        router: e
                    }),
                    n = t.activeTab,
                    o = t.setActiveTab,
                    i = (0, c.useRef)(n),
                    a = (0, gn.n)(),
                    l = a.isMobile,
                    f = a.isConsistent,
                    d = (0, c.useState)(!1),
                    p = d[0],
                    h = d[1],
                    y = (0, c.useRef)(!1),
                    v = (0, vt.w_)();
                (0, Gt.Zx)(), (0, c.useEffect)((function() {
                    !y.current && v && ((0, vt.u4)(u.ll.$pageView, Tn), y.current = !0)
                }), [v]);
                var m = !Ft.S$ && l && i.current === fn.F.leaderBoard,
                    _ = p || f && !m;
                return (0, c.useEffect)((function() {
                    _ || h(!0)
                }), [_]), (0, r.jsx)(s.$, {
                    defaultTrackingData: Tn,
                    sensorTrack: vt.u4,
                    children: (0, r.jsxs)(un.Ay, {
                        className: "bg-BasicBg min-h-screen overflow-hidden",
                        children: [_ ? l ? (0, r.jsx)(_n, {
                            activeTab: n,
                            onTabChange: o,
                            tabPanel: (0, r.jsx)(En, {})
                        }) : (0, r.jsx)(En, {}) : null, !Ft.S$ && cn.j7]
                    })
                })
            };
            var On = n("EnBZ");

            function Sn(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = function(e) {
                        for (var t = [], n = 0; n < e.length;) {
                            var r = e[n];
                            if ("*" !== r && "+" !== r && "?" !== r)
                                if ("\\" !== r)
                                    if ("{" !== r)
                                        if ("}" !== r)
                                            if (":" !== r)
                                                if ("(" !== r) t.push({
                                                    type: "CHAR",
                                                    index: n,
                                                    value: e[n++]
                                                });
                                                else {
                                                    var o = 1,
                                                        i = "",
                                                        a = n + 1;
                                                    if ("?" === e[a]) throw new TypeError('Pattern cannot start with "?" at '.concat(a));
                                                    for (; a < e.length;)
                                                        if ("\\" !== e[a]) {
                                                            if (")" === e[a]) {
                                                                if (0 === --o) {
                                                                    a++;
                                                                    break
                                                                }
                                                            } else if ("(" === e[a] && (o++, "?" !== e[a + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(a));
                                                            i += e[a++]
                                                        } else i += e[a++] + e[a++];
                                                    if (o) throw new TypeError("Unbalanced pattern at ".concat(n));
                                                    if (!i) throw new TypeError("Missing pattern at ".concat(n));
                                                    t.push({
                                                        type: "PATTERN",
                                                        index: n,
                                                        value: i
                                                    }), n = a
                                                }
                            else {
                                for (var s = "", u = n + 1; u < e.length;) {
                                    var c = e.charCodeAt(u);
                                    if (!(c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || 95 === c)) break;
                                    s += e[u++]
                                }
                                if (!s) throw new TypeError("Missing parameter name at ".concat(n));
                                t.push({
                                    type: "NAME",
                                    index: n,
                                    value: s
                                }), n = u
                            } else t.push({
                                type: "CLOSE",
                                index: n,
                                value: e[n++]
                            });
                            else t.push({
                                type: "OPEN",
                                index: n,
                                value: e[n++]
                            });
                            else t.push({
                                type: "ESCAPED_CHAR",
                                index: n++,
                                value: e[n++]
                            });
                            else t.push({
                                type: "MODIFIER",
                                index: n,
                                value: e[n++]
                            })
                        }
                        return t.push({
                            type: "END",
                            index: n,
                            value: ""
                        }), t
                    }(e), r = t.prefixes, o = void 0 === r ? "./" : r, i = "[^".concat(An(t.delimiter || "/#?"), "]+?"), a = [], s = 0, u = 0, c = "", l = function(e) {
                        if (u < n.length && n[u].type === e) return n[u++].value
                    }, f = function(e) {
                        var t = l(e);
                        if (void 0 !== t) return t;
                        var r = n[u],
                            o = r.type,
                            i = r.index;
                        throw new TypeError("Unexpected ".concat(o, " at ").concat(i, ", expected ").concat(e))
                    }, d = function() {
                        for (var e, t = ""; e = l("CHAR") || l("ESCAPED_CHAR");) t += e;
                        return t
                    }; u < n.length;) {
                    var p = l("CHAR"),
                        h = l("NAME"),
                        y = l("PATTERN");
                    if (h || y) {
                        var v = p || ""; - 1 === o.indexOf(v) && (c += v, v = ""), c && (a.push(c), c = ""), a.push({
                            name: h || s++,
                            prefix: v,
                            suffix: "",
                            pattern: y || i,
                            modifier: l("MODIFIER") || ""
                        })
                    } else {
                        var m = p || l("ESCAPED_CHAR");
                        if (m) c += m;
                        else if (c && (a.push(c), c = ""), l("OPEN")) {
                            var _ = d(),
                                g = l("NAME") || "",
                                b = l("PATTERN") || "",
                                E = d();
                            f("CLOSE"), a.push({
                                name: g || (b ? s++ : ""),
                                pattern: g && !b ? i : b,
                                prefix: _,
                                suffix: E,
                                modifier: l("MODIFIER") || ""
                            })
                        } else f("END")
                    }
                }
                return a
            }

            function An(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function wn(e) {
                return e && e.sensitive ? "" : "i"
            }

            function xn(e, t, n) {
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.strict,
                        o = void 0 !== r && r,
                        i = n.start,
                        a = void 0 === i || i,
                        s = n.end,
                        u = void 0 === s || s,
                        c = n.encode,
                        l = void 0 === c ? function(e) {
                            return e
                        } : c,
                        f = "[".concat(An(n.endsWith || ""), "]|$"),
                        d = "[".concat(An(n.delimiter || "/#?"), "]"),
                        p = a ? "^" : "",
                        h = !0,
                        y = !1,
                        v = void 0;
                    try {
                        for (var m, _ = e[Symbol.iterator](); !(h = (m = _.next()).done); h = !0) {
                            var g = m.value;
                            if ("string" === typeof g) p += An(l(g));
                            else {
                                var b = An(l(g.prefix)),
                                    E = An(l(g.suffix));
                                if (g.pattern)
                                    if (t && t.push(g), b || E)
                                        if ("+" === g.modifier || "*" === g.modifier) {
                                            var T = "*" === g.modifier ? "?" : "";
                                            p += "(?:".concat(b, "((?:").concat(g.pattern, ")(?:").concat(E).concat(b, "(?:").concat(g.pattern, "))*)").concat(E, ")").concat(T)
                                        } else p += "(?:".concat(b, "(").concat(g.pattern, ")").concat(E, ")").concat(g.modifier);
                                else p += "(".concat(g.pattern, ")").concat(g.modifier);
                                else p += "(?:".concat(b).concat(E, ")").concat(g.modifier)
                            }
                        }
                    } catch (S) {
                        y = !0, v = S
                    } finally {
                        try {
                            h || null == _.return || _.return()
                        } finally {
                            if (y) throw v
                        }
                    }
                    if (u) o || (p += "".concat(d, "?")), p += n.endsWith ? "(?=".concat(f, ")") : "$";
                    else {
                        var R = e[e.length - 1],
                            O = "string" === typeof R ? d.indexOf(R[R.length - 1]) > -1 : void 0 === R;
                        o || (p += "(?:".concat(d, "(?=").concat(f, "))?")), O || (p += "(?=".concat(d, "|").concat(f, ")"))
                    }
                    return new RegExp(p, wn(n))
                }(Sn(e, n), t, n)
            }

            function In(e, t, n) {
                return (0, On._)(e, RegExp) ? function(e, t) {
                    if (!t) return e;
                    var n = e.source.match(/\((?!\?)/g);
                    if (n)
                        for (var r = 0; r < n.length; r++) t.push({
                            name: r,
                            prefix: "",
                            suffix: "",
                            modifier: "",
                            pattern: ""
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function(e, t, n) {
                    var r = e.map((function(e) {
                        return In(e, t, n).source
                    }));
                    return new RegExp("(?:".concat(r.join("|"), ")"), wn(n))
                }(e, t, n) : xn(e, t, n)
            }
            var Cn = {
                    "&": "&amp;",
                    '"': "&quot;",
                    "'": "&#39;",
                    ">": "&gt;",
                    "<": "&lt;"
                },
                Pn = /[&><'"]/g;

            function Dn(e, t) {
                var n = "".concat(e.replace(/\/+$/, ""), "/").concat(t.replace(/^\/+/, ""));
                return n.replace(Pn, (function(e) {
                    return Cn[e]
                }))
            }

            function Un(e) {
                var t = e.canonicalPathMap,
                    n = void 0 === t ? {} : t,
                    r = e.canonicalBase,
                    o = function(e) {
                        var t = Object.keys(e).map((function(t) {
                            var n = In(t);
                            return function(r) {
                                return n.test(r) ? e[t] : null
                            }
                        }));
                        return function(e) {
                            for (var n = null, r = 0; !n && r < t.length; r++) n = (0, t[r])(e);
                            return n || e
                        }
                    }(n);
                return function(e) {
                    var t = e.canonicalBase,
                        n = void 0 === t ? r : t,
                        i = e.req,
                        a = e.fromAmp,
                        s = void 0 === a || a,
                        u = i.path.replace(/\?.*$/, "");
                    return [{
                        lang: "canonical",
                        rel: s ? "canonical" : "amphtml",
                        href: Dn(n, o(u))
                    }]
                }
            }
            var Ln = n("LwCO"),
                Nn = n("WLZf"),
                kn = n("Yh6a"),
                Mn = Un({
                    canonicalBase: Ft.dM,
                    langRules: [{
                        test: "/:pre/:after*",
                        path: "/#lang/:after"
                    }]
                }),
                jn = function(e) {
                    var t = e.title,
                        n = e.description,
                        o = (0, Nn.XY)().t,
                        i = (0, Nn.CU)().t,
                        a = (0, sn.K7)().pathname,
                        s = Mn({
                            req: {
                                path: a
                            }
                        }),
                        u = t || o("seo-title", {
                            defaultValue: "Bitcoin Exchange | Cryptocurrency Exchange | Binance"
                        }),
                        l = n || i("-seo-description", {
                            defaultValue: "Binance cryptocurrency exchange - We operate the worlds biggest bitcoin exchange and altcoin crypto exchange in the world by volume"
                        }),
                        f = i("-seo-keywords", {
                            defaultValue: "Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Binance, Poloniex, Bittrex"
                        });
                    return (0, c.useEffect)((function() {
                        kn.l && kn.y.setTitle(u)
                    }), [u]), (0, r.jsxs)(Ln.A, {
                        children: [(0, r.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, r.jsx)("title", {
                            children: u
                        }), (0, r.jsx)("meta", {
                            name: "keywords",
                            content: f
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: l
                        }), (0, r.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, r.jsx)("meta", {
                            property: "og:title",
                            content: u
                        }), (0, r.jsx)("meta", {
                            property: "og:site_name",
                            content: Ft.qt
                        }), (0, r.jsx)("meta", {
                            property: "og:image",
                            content: Ft.Hh
                        }), (0, r.jsx)("meta", {
                            property: "twitter:title",
                            content: u
                        }), (0, r.jsx)("meta", {
                            property: "twitter:site",
                            content: Ft.qt
                        }), (0, r.jsx)("meta", {
                            property: "twitter:image",
                            content: Ft.Hh
                        }), (0, r.jsx)("meta", {
                            property: "twitter:image:src",
                            content: Ft.Hh
                        }), (0, r.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), (0, r.jsx)("meta", {
                            name: "apple-mobile-web-app-status-bar-style",
                            content: "black"
                        }), (0, r.jsx)("meta", {
                            name: "apple-mobile-web-app-capable",
                            content: "yes"
                        }), (0, r.jsx)("meta", {
                            name: "format-detection",
                            content: "telephone=no"
                        }), (0, r.jsx)("meta", {
                            name: "format-detection",
                            content: "email=no"
                        }), (0, r.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,minimum-scale=1,maximum-scale=1.0,initial-scale=1,user-scalable=no,viewport-fit=true"
                        }), s.map((function(e) {
                            var t = e.lang,
                                n = (0, A._)(e, ["lang"]);
                            return (0, r.jsx)("link", (0, S._)({}, n), t)
                        }))]
                    })
                },
                Bn = function() {
                    var e = (0, Nn.XY)().t;
                    return (0, r.jsx)(jn, {
                        title: e("landingPage-seo-title", {
                            defaultValue: "Trading Bots | Trade Crypto Like a Pro | Binance"
                        }),
                        description: e("landingPage-seo-desc", {
                            defaultValue: "Deploy Binance automation tools to trade crypto like a pro. Identify and replicate trending strategies on the largest exchange with unparalleled liquidity."
                        })
                    })
                },
                Fn = n("1/4D"),
                Gn = n("S+0I"),
                Qn = n("66mo"),
                Yn = n.n(Qn),
                qn = n("Reoe"),
                Hn = function() {
                    var e = (0, Gn._)(Yn().mark((function e() {
                        var t;
                        return Yn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 6;
                                    break;
                                case 4:
                                    return t = e.sent, e.abrupt("return", t["bnc-uuid"]);
                                case 6:
                                    return e.abrupt("return", yt.U.read("bnc-uuid") || "");
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                Vn = "undefined" === typeof window,
                zn = n("+K15"),
                Wn = n("VLTf"),
                $n = n.n(Wn),
                Kn = n("RrWx"),
                Xn = n.n(Kn),
                Zn = function(e) {
                    var t = e.key,
                        n = e.data,
                        r = e.afterSave,
                        o = zn.IG.getItem(t, {}).result;
                    $n()(n, o) || (zn.IG.setItem(t, n), r && r())
                },
                Jn = function(e) {
                    var t, n = zn.IG.getItem(e, {});
                    if (t = n, Xn()(t) && Xn()(t.result) && "boolean" === typeof t.isLoading) return n;
                    return {
                        result: {},
                        isLoading: !0
                    }
                },
                er = function(e, t) {
                    var n = e.THEMIS_ADDRESS,
                        r = e.THEMIS_AUTH_HEADER,
                        o = e.THEMIS_ENV,
                        i = e.uid,
                        a = e.trace_id,
                        s = e.strategy_ids,
                        u = e.os_version,
                        l = e.os,
                        f = e.app_version,
                        d = e.country,
                        p = t.lazyFetch,
                        h = void 0 !== p && p,
                        y = t.enabled,
                        v = void 0 === y || y,
                        m = t.enableLocalCache,
                        _ = void 0 !== m && m,
                        g = t.app,
                        b = (0, w._)((0, c.useState)(null), 2),
                        E = b[0],
                        T = b[1],
                        R = (0, w._)((0, c.useState)(!1), 2),
                        O = R[0],
                        S = R[1],
                        A = "".concat(g, "_themis_gates_cache"),
                        x = "".concat(g, "_themis_experiments_cache");
                    (0, c.useEffect)((function() {
                        var e = function() {
                            var e = (0, Gn._)(Yn().mark((function e() {
                                var t, c;
                                return Yn().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (v && (!h || O)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, Hn();
                                        case 4:
                                            return t = e.sent, e.next = 7, qn.Ay.initExpAndFg({
                                                trace_id: a || t,
                                                uid: i || void 0,
                                                strategy_ids: s,
                                                os_version: u,
                                                os: l,
                                                app_version: f,
                                                country: d,
                                                env: o
                                            }, {
                                                authHeader: r,
                                                baseUrl: n
                                            });
                                        case 7:
                                            c = e.sent, T(c);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [v, n, r, o, i, a, s, u, l, f, d, O]);
                    var I = function(e) {
                            var t = e.themisHelper,
                                n = e.enableLocalCache,
                                r = e.key,
                                o = (0, w._)((0, c.useState)((function() {
                                    return n && !Vn ? Jn(r) : {
                                        result: {},
                                        isLoading: !0
                                    }
                                })), 2),
                                i = o[0],
                                a = o[1];
                            return (0, c.useEffect)((function() {
                                if (t) {
                                    var e = {
                                            result: t.getStrategiesConfig().universals || {},
                                            isLoading: !1
                                        },
                                        o = function() {
                                            return a(e)
                                        };
                                    n ? Vn || Zn({
                                        key: r,
                                        data: e,
                                        afterSave: o
                                    }) : o()
                                }
                            }), [t]), {
                                experiments: i
                            }
                        }({
                            themisHelper: E,
                            enableLocalCache: _,
                            key: x
                        }).experiments,
                        C = function(e) {
                            var t = e.themisHelper,
                                n = e.enableLocalCache,
                                r = e.key,
                                o = (0, w._)((0, c.useState)((function() {
                                    return n && !Vn ? Jn(r) : {
                                        result: {},
                                        isLoading: !0
                                    }
                                })), 2),
                                i = o[0],
                                a = o[1];
                            return (0, c.useEffect)((function() {
                                function e() {
                                    return (e = (0, Gn._)(Yn().mark((function e() {
                                        var o, i, s;
                                        return Yn().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, t.getFeatureGateResults();
                                                case 2:
                                                    o = e.sent, i = {
                                                        result: o || {},
                                                        isLoading: !1
                                                    }, s = function() {
                                                        return a(i)
                                                    }, n ? Vn || Zn({
                                                        key: r,
                                                        data: i,
                                                        afterSave: s
                                                    }) : s();
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).apply(this, arguments)
                                }
                                t && function() {
                                    e.apply(this, arguments)
                                }()
                            }), [t]), {
                                featureGates: i
                            }
                        }({
                            themisHelper: E,
                            enableLocalCache: _,
                            key: A
                        }).featureGates,
                        P = (0, c.useCallback)((function() {
                            S(!0)
                        }), []);
                    return (0, c.useMemo)((function() {
                        return {
                            experiments: I,
                            featureGates: C,
                            lazyFetch: h,
                            fetch: P
                        }
                    }), [I, C, h, P])
                },
                tr = function(e) {
                    var t = e.children,
                        n = (0, A._)(e, ["children"]),
                        r = n.app,
                        o = n.themisConfig,
                        i = n.lazyFetch,
                        a = n.enabled,
                        s = n.enableLocalCache,
                        u = er(o, {
                            lazyFetch: i,
                            enabled: a,
                            app: r,
                            enableLocalCache: s
                        }),
                        c = (0, Fn.e)(r);
                    return l().createElement(c.Provider, {
                        value: u
                    }, t)
                };
            var nr = (0, c.memo)((function(e) {
                    var t = e.children,
                        n = (0, A._)(e, ["children"]),
                        r = (0, c.useMemo)((function() {
                            return function(e) {
                                return function(t) {
                                    var n = t.children,
                                        r = (0, A._)(t, ["children"]);
                                    return l().createElement(l().Fragment, null, e.reduceRight((function(e, t) {
                                        var n = r.THEMIS_AUTH_HEADER_MAP,
                                            o = r.themisConfig,
                                            i = r.lazyFetch,
                                            a = void 0 !== i && i,
                                            s = (0, A._)(r, ["THEMIS_AUTH_HEADER_MAP", "themisConfig", "lazyFetch"]),
                                            u = n[t];
                                        if (!u) return e;
                                        var c = (0, ve._)((0, S._)({}, s), {
                                            lazyFetch: a,
                                            app: t,
                                            themisConfig: (0, ve._)((0, S._)({}, o), {
                                                THEMIS_AUTH_HEADER: u
                                            })
                                        });
                                        return l().createElement(tr, (0, O._)({}, c), e)
                                    }), n))
                                }
                            }(Object.keys(n.THEMIS_AUTH_HEADER_MAP))
                        }), [n.THEMIS_AUTH_HEADER_MAP]);
                    return l().createElement(r, (0, O._)({}, n), t)
                })),
                rr = n("TajZ"),
                or = {
                    "futures-strategy-ui": Ft.sW,
                    futuresTradeUI: Ft.dE
                },
                ir = function(e) {
                    var t = e.children,
                        n = (0, rr.vz)(),
                        o = n.isLoading,
                        i = n.isLoggedIn,
                        a = (0, rr.Py)().userId,
                        s = void 0 === a ? null : a,
                        u = o || !i ? null : s,
                        l = !o && (i && Boolean(s) || !i),
                        f = (0, c.useMemo)((function() {
                            return {
                                THEMIS_ADDRESS: Ft.Af,
                                THEMIS_ENV: Ft.lF,
                                uid: u
                            }
                        }), [u]);
                    return (0, r.jsx)(nr, {
                        enableLocalCache: !0,
                        lazyFetch: !0,
                        THEMIS_AUTH_HEADER_MAP: or,
                        enabled: l,
                        themisConfig: f,
                        children: t
                    })
                },
                ar = new o.QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: !1
                        }
                    }
                });
            const sr = function() {
                var e = (0, Gt.I7)(),
                    t = (0, Gt.nH)();
                return (0, Et.wD)(), (0, i.A)((function() {
                    (0, a.G)({
                        queryClient: ar,
                        currency: e
                    }), pe({
                        queryClient: ar
                    }), de({
                        queryClient: ar
                    })
                })), (0, r.jsx)(ce.t, {
                    name: "landing-page",
                    children: (0, r.jsx)(o.QueryClientProvider, {
                        client: ar,
                        children: (0, r.jsx)(ir, {
                            children: (0, r.jsxs)(an, {
                                children: [(0, r.jsx)(Bn, {}), (0, r.jsx)(Rn, {}), t && (0, r.jsx)(s.$, {
                                    defaultTrackingData: {
                                        df_source: u.vV.strategyTrading,
                                        pageName: u.Lk.landingPage
                                    },
                                    sensorTrack: vt.u4,
                                    children: (0, r.jsx)(ue, {
                                        isLoggedIn: t,
                                        currency: e,
                                        staticHost: Ft.K5
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        sHFo: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("n0gm"),
                s = (0, o.forwardRef)((function(e, t) {
                    return i().createElement(a.A, (0, r.__assign)({}, e, {
                        ref: t
                    }))
                }));
            s.displayName = "Box";
            const u = s
        },
        EUvc: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("DTvD");
            const o = (0, r.createContext)({
                prefixCls: "bn",
                getI18n: function(e) {
                    return e
                }
            })
        },
        TQvm: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                i = n.n(o),
                a = n("xqbL"),
                s = n.n(a),
                u = n("sHFo"),
                c = n("EUvc");
            const l = function(e) {
                var t = (0, o.useContext)(c.A).prefixCls,
                    n = e.color,
                    a = (e.name, e.viewBox),
                    l = void 0 === a ? "0 0 96 96" : a,
                    f = e.children,
                    d = (0, r.__rest)(e, ["color", "name", "viewBox", "children"]),
                    p = s()("".concat(t, "-svg"), e.className),
                    h = {
                        as: "svg",
                        viewBox: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: n
                    };
                return i().createElement(u.A, (0, r.__assign)({}, d, h, {
                    className: p,
                    children: f
                }))
            }
        },
        "1lvF": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => r
            });
            const r = n("sHFo").A
        },
        n0gm: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                i = n.n(o);
            const a = (0, o.forwardRef)((function(e, t) {
                var n = e.as,
                    o = void 0 === n ? "div" : n,
                    a = (0, r.__rest)(e, ["as"]);
                return i().createElement(o, (0, r.__assign)((0, r.__assign)({}, a), {
                    ref: t
                }))
            }))
        },
        vfX2: (e, t, n) => {
            var r = "undefined" !== typeof globalThis && globalThis || "undefined" !== typeof self && self || "undefined" !== typeof n.g && n.g,
                o = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            ! function(e) {
                ! function(t) {
                    var n = "undefined" !== typeof e && e || "undefined" !== typeof self && self || "undefined" !== typeof n && n,
                        r = "URLSearchParams" in n,
                        o = "Symbol" in n && "iterator" in Symbol,
                        i = "FileReader" in n && "Blob" in n && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        a = "FormData" in n,
                        s = "ArrayBuffer" in n;
                    if (s) var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        c = ArrayBuffer.isView || function(e) {
                            return e && u.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function l(e) {
                        if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError('Invalid character in header field name: "' + e + '"');
                        return e.toLowerCase()
                    }

                    function f(e) {
                        return "string" !== typeof e && (e = String(e)), e
                    }

                    function d(e) {
                        var t = {
                            next: function() {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return o && (t[Symbol.iterator] = function() {
                            return t
                        }), t
                    }

                    function p(e) {
                        this.map = {}, e instanceof p ? e.forEach((function(e, t) {
                            this.append(t, e)
                        }), this) : Array.isArray(e) ? e.forEach((function(e) {
                            this.append(e[0], e[1])
                        }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                            this.append(t, e[t])
                        }), this)
                    }

                    function h(e) {
                        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function y(e) {
                        return new Promise((function(t, n) {
                            e.onload = function() {
                                t(e.result)
                            }, e.onerror = function() {
                                n(e.error)
                            }
                        }))
                    }

                    function v(e) {
                        var t = new FileReader,
                            n = y(t);
                        return t.readAsArrayBuffer(e), n
                    }

                    function m(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function _() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            var t;
                            this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" === typeof e ? this._bodyText = e : i && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && i && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = m(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, i && (this.blob = function() {
                            var e = h(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            if (this._bodyArrayBuffer) {
                                var e = h(this);
                                return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                            }
                            return this.blob().then(v)
                        }), this.text = function() {
                            var e = h(this);
                            if (e) return e;
                            if (this._bodyBlob) return function(e) {
                                var t = new FileReader,
                                    n = y(t);
                                return t.readAsText(e), n
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, a && (this.formData = function() {
                            return this.text().then(E)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    p.prototype.append = function(e, t) {
                        e = l(e), t = f(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + ", " + t : t
                    }, p.prototype.delete = function(e) {
                        delete this.map[l(e)]
                    }, p.prototype.get = function(e) {
                        return e = l(e), this.has(e) ? this.map[e] : null
                    }, p.prototype.has = function(e) {
                        return this.map.hasOwnProperty(l(e))
                    }, p.prototype.set = function(e, t) {
                        this.map[l(e)] = f(t)
                    }, p.prototype.forEach = function(e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, p.prototype.keys = function() {
                        var e = [];
                        return this.forEach((function(t, n) {
                            e.push(n)
                        })), d(e)
                    }, p.prototype.values = function() {
                        var e = [];
                        return this.forEach((function(t) {
                            e.push(t)
                        })), d(e)
                    }, p.prototype.entries = function() {
                        var e = [];
                        return this.forEach((function(t, n) {
                            e.push([n, t])
                        })), d(e)
                    }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
                    var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function b(e, t) {
                        if (!(this instanceof b)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        var n = (t = t || {}).body;
                        if (e instanceof b) {
                            if (e.bodyUsed) throw new TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = function(e) {
                                var t = e.toUpperCase();
                                return g.indexOf(t) > -1 ? t : e
                            }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                        if (this._initBody(n), ("GET" === this.method || "HEAD" === this.method) && ("no-store" === t.cache || "no-cache" === t.cache)) {
                            var r = /([?&])_=[^&]*/;
                            if (r.test(this.url)) this.url = this.url.replace(r, "$1_=" + (new Date).getTime());
                            else {
                                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                            }
                        }
                    }

                    function E(e) {
                        var t = new FormData;
                        return e.trim().split("&").forEach((function(e) {
                            if (e) {
                                var n = e.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    o = n.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(r), decodeURIComponent(o))
                            }
                        })), t
                    }

                    function T(e) {
                        var t = new p;
                        return e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                            return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                        })).forEach((function(e) {
                            var n = e.split(":"),
                                r = n.shift().trim();
                            if (r) {
                                var o = n.join(":").trim();
                                t.append(r, o)
                            }
                        })), t
                    }

                    function R(e, t) {
                        if (!(this instanceof R)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                    b.prototype.clone = function() {
                        return new b(this, {
                            body: this._bodyInit
                        })
                    }, _.call(b.prototype), _.call(R.prototype), R.prototype.clone = function() {
                        return new R(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new p(this.headers),
                            url: this.url
                        })
                    }, R.error = function() {
                        var e = new R(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var O = [301, 302, 303, 307, 308];
                    R.redirect = function(e, t) {
                        if (-1 === O.indexOf(t)) throw new RangeError("Invalid status code");
                        return new R(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, t.DOMException = n.DOMException;
                    try {
                        new t.DOMException
                    } catch (A) {
                        t.DOMException = function(e, t) {
                            this.message = e, this.name = t;
                            var n = Error(e);
                            this.stack = n.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function S(e, r) {
                        return new Promise((function(o, a) {
                            var u = new b(e, r);
                            if (u.signal && u.signal.aborted) return a(new t.DOMException("Aborted", "AbortError"));
                            var c = new XMLHttpRequest;

                            function l() {
                                c.abort()
                            }
                            c.onload = function() {
                                var e = {
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: T(c.getAllResponseHeaders() || "")
                                };
                                e.url = "responseURL" in c ? c.responseURL : e.headers.get("X-Request-URL");
                                var t = "response" in c ? c.response : c.responseText;
                                setTimeout((function() {
                                    o(new R(t, e))
                                }), 0)
                            }, c.onerror = function() {
                                setTimeout((function() {
                                    a(new TypeError("Network request failed"))
                                }), 0)
                            }, c.ontimeout = function() {
                                setTimeout((function() {
                                    a(new TypeError("Network request failed"))
                                }), 0)
                            }, c.onabort = function() {
                                setTimeout((function() {
                                    a(new t.DOMException("Aborted", "AbortError"))
                                }), 0)
                            }, c.open(u.method, function(e) {
                                try {
                                    return "" === e && n.location.href ? n.location.href : e
                                } catch (t) {
                                    return e
                                }
                            }(u.url), !0), "include" === u.credentials ? c.withCredentials = !0 : "omit" === u.credentials && (c.withCredentials = !1), "responseType" in c && (i ? c.responseType = "blob" : s && u.headers.get("Content-Type") && -1 !== u.headers.get("Content-Type").indexOf("application/octet-stream") && (c.responseType = "arraybuffer")), !r || "object" !== typeof r.headers || r.headers instanceof p ? u.headers.forEach((function(e, t) {
                                c.setRequestHeader(t, e)
                            })) : Object.getOwnPropertyNames(r.headers).forEach((function(e) {
                                c.setRequestHeader(e, f(r.headers[e]))
                            })), u.signal && (u.signal.addEventListener("abort", l), c.onreadystatechange = function() {
                                4 === c.readyState && u.signal.removeEventListener("abort", l)
                            }), c.send("undefined" === typeof u._bodyInit ? null : u._bodyInit)
                        }))
                    }
                    S.polyfill = !0, n.fetch || (n.fetch = S, n.Headers = p, n.Request = b, n.Response = R), t.Headers = p, t.Request = b, t.Response = R, t.fetch = S
                }({})
            }(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
            var i = r.fetch ? r : o;
            (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        lRhT: (e, t) => {
            "use strict";
            t.Y = function(e, t) {
                return s(e).some((function(e) {
                    var n = e.inverse,
                        r = "all" === e.type || t.type === e.type;
                    if (r && n || !r && !n) return !1;
                    var o = e.expressions.every((function(e) {
                        var n = e.feature,
                            r = e.modifier,
                            o = e.value,
                            i = t[n];
                        if (!i) return !1;
                        switch (n) {
                            case "orientation":
                            case "scan":
                                return i.toLowerCase() === o.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                o = l(o), i = l(i);
                                break;
                            case "resolution":
                                o = c(o), i = c(i);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                o = u(o), i = u(i);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                o = parseInt(o, 10) || 1, i = parseInt(i, 10) || 0
                        }
                        switch (r) {
                            case "min":
                                return i >= o;
                            case "max":
                                return i <= o;
                            default:
                                return i === o
                        }
                    }));
                    return o && !n || !o && n
                }))
            };
            var n = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                r = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                o = /^(?:(min|max)-)?(.+)/,
                i = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                a = /(dpi|dpcm|dppx)?$/;

            function s(e) {
                return e.split(",").map((function(e) {
                    var t = (e = e.trim()).match(n),
                        i = t[1],
                        a = t[2],
                        s = t[3] || "",
                        u = {};
                    return u.inverse = !!i && "not" === i.toLowerCase(), u.type = a ? a.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], u.expressions = s.map((function(e) {
                        var t = e.match(r),
                            n = t[1].toLowerCase().match(o);
                        return {
                            modifier: n[1],
                            feature: n[2],
                            value: t[2]
                        }
                    })), u
                }))
            }

            function u(e) {
                var t, n = Number(e);
                return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n
            }

            function c(e) {
                var t = parseFloat(e);
                switch (String(e).match(a)[1]) {
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
                switch (String(e).match(i)[1]) {
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
        oOBz: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = /[A-Z]/g,
                o = /^ms-/,
                i = {};

            function a(e) {
                return "-" + e.toLowerCase()
            }
            const s = function(e) {
                if (i.hasOwnProperty(e)) return i[e];
                var t = e.replace(r, a);
                return i[e] = o.test(t) ? "-" + t : t
            }
        },
        qTxo: (e, t, n) => {
            var r = "__lodash_hash_undefined__",
                o = "[object Function]",
                i = "[object GeneratorFunction]",
                a = /^\[object .+?Constructor\]$/,
                s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                u = "object" == typeof self && self && self.Object === Object && self,
                c = s || u || Function("return this")();
            var l = Array.prototype,
                f = Function.prototype,
                d = Object.prototype,
                p = c["__core-js_shared__"],
                h = function() {
                    var e = /[^.]+$/.exec(p && p.keys && p.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                y = f.toString,
                v = d.hasOwnProperty,
                m = d.toString,
                _ = RegExp("^" + y.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                g = l.splice,
                b = x(c, "Map"),
                E = x(Object, "create");

            function T(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function R(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function O(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function S(e, t) {
                for (var n, r, o = e.length; o--;)
                    if ((n = e[o][0]) === (r = t) || n !== n && r !== r) return o;
                return -1
            }

            function A(e) {
                if (!C(e) || (t = e, h && h in t)) return !1;
                var t, n = function(e) {
                    var t = C(e) ? m.call(e) : "";
                    return t == o || t == i
                }(e) || function(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (n) {}
                    return t
                }(e) ? _ : a;
                return n.test(function(e) {
                    if (null != e) {
                        try {
                            return y.call(e)
                        } catch (t) {}
                        try {
                            return e + ""
                        } catch (t) {}
                    }
                    return ""
                }(e))
            }

            function w(e, t) {
                var n = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }

            function x(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return A(n) ? n : void 0
            }

            function I(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        o = t ? t.apply(this, r) : r[0],
                        i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, r);
                    return n.cache = i.set(o, a), a
                };
                return n.cache = new(I.Cache || O), n
            }

            function C(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            T.prototype.clear = function() {
                this.__data__ = E ? E(null) : {}
            }, T.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, T.prototype.get = function(e) {
                var t = this.__data__;
                if (E) {
                    var n = t[e];
                    return n === r ? void 0 : n
                }
                return v.call(t, e) ? t[e] : void 0
            }, T.prototype.has = function(e) {
                var t = this.__data__;
                return E ? void 0 !== t[e] : v.call(t, e)
            }, T.prototype.set = function(e, t) {
                return this.__data__[e] = E && void 0 === t ? r : t, this
            }, R.prototype.clear = function() {
                this.__data__ = []
            }, R.prototype.delete = function(e) {
                var t = this.__data__,
                    n = S(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : g.call(t, n, 1), !0)
            }, R.prototype.get = function(e) {
                var t = this.__data__,
                    n = S(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, R.prototype.has = function(e) {
                return S(this.__data__, e) > -1
            }, R.prototype.set = function(e, t) {
                var n = this.__data__,
                    r = S(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, O.prototype.clear = function() {
                this.__data__ = {
                    hash: new T,
                    map: new(b || R),
                    string: new T
                }
            }, O.prototype.delete = function(e) {
                return w(this, e).delete(e)
            }, O.prototype.get = function(e) {
                return w(this, e).get(e)
            }, O.prototype.has = function(e) {
                return w(this, e).has(e)
            }, O.prototype.set = function(e, t) {
                return w(this, e).set(e, t), this
            }, I.Cache = O, e.exports = I
        },
        TGX5: (e, t, n) => {
            "use strict";
            var r = n("lRhT").Y,
                o = "undefined" !== typeof window ? window.matchMedia : null;

            function i(e, t, n) {
                var i = this;
                if (o && !n) {
                    var a = o.call(window, e);
                    this.matches = a.matches, this.media = a.media, a.addListener(s)
                } else this.matches = r(e, t), this.media = e;

                function s(e) {
                    i.matches = e.matches, i.media = e.media
                }
                this.addListener = function(e) {
                    a && a.addListener(e)
                }, this.removeListener = function(e) {
                    a && a.removeListener(e)
                }, this.dispose = function() {
                    a && a.removeListener(s)
                }
            }
            e.exports = function(e, t, n) {
                return new i(e, t, n)
            }
        },
        Dpzs: function(e, t, n) {
            var r = n("E0jC");
            (function() {
                var t, n, o;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof r && null !== r && r.hrtime ? (e.exports = function() {
                    return (t() - o) / 1e6
                }, n = r.hrtime, o = (t = function() {
                    var e;
                    return 1e9 * (e = n())[0] + e[1]
                })()) : Date.now ? (e.exports = function() {
                    return Date.now() - o
                }, o = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        },
        "B+/+": function(e, t, n) {
            var r = n("E0jC");
            (function() {
                var t, n, o, i, a, s;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof r && null !== r && r.hrtime ? (e.exports = function() {
                    return (t() - a) / 1e6
                }, n = r.hrtime, i = (t = function() {
                    var e;
                    return 1e9 * (e = n())[0] + e[1]
                })(), s = 1e9 * r.uptime(), a = i - s) : Date.now ? (e.exports = function() {
                    return Date.now() - o
                }, o = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        },
        C7x3: (e, t, n) => {
            "use strict";
            var r = n("rnmQ");

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, i, a) {
                    if (a !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
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
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        "1YyT": (e, t, n) => {
            e.exports = n("C7x3")()
        },
        rnmQ: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        gHJi: (e, t, n) => {
            "use strict";
            e.exports = n("wRAs")
        },
        wRAs: (e, t, n) => {
            "use strict";
            var r = t;

            function o() {
                r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader)
            }
            r.build = "minimal", r.Writer = n("R/rw"), r.BufferWriter = n("f0T6"), r.Reader = n("iUYL"), r.BufferReader = n("Fa0v"), r.util = n("a8eG"), r.rpc = n("IZNV"), r.roots = n("gESf"), r.configure = o, o()
        },
        iUYL: (e, t, n) => {
            "use strict";
            e.exports = u;
            var r, o = n("a8eG"),
                i = o.LongBits,
                a = o.utf8;

            function s(e, t) {
                return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
            }

            function u(e) {
                this.buf = e, this.pos = 0, this.len = e.length
            }
            var c = "undefined" !== typeof Uint8Array ? function(e) {
                    if (e instanceof Uint8Array || Array.isArray(e)) return new u(e);
                    throw Error("illegal buffer")
                } : function(e) {
                    if (Array.isArray(e)) return new u(e);
                    throw Error("illegal buffer")
                },
                l = function() {
                    return o.Buffer ? function(e) {
                        return (u.create = function(e) {
                            return o.Buffer.isBuffer(e) ? new r(e) : c(e)
                        })(e)
                    } : c
                };

            function f() {
                var e = new i(0, 0),
                    t = 0;
                if (!(this.len - this.pos > 4)) {
                    for (; t < 3; ++t) {
                        if (this.pos >= this.len) throw s(this);
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
                        if (this.pos >= this.len) throw s(this);
                        if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e
                    }
                throw Error("invalid varint encoding")
            }

            function d(e, t) {
                return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
            }

            function p() {
                if (this.pos + 8 > this.len) throw s(this, 8);
                return new i(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
            }
            u.create = l(), u.prototype._slice = o.Array.prototype.subarray || o.Array.prototype.slice, u.prototype.uint32 = function() {
                var e = 4294967295;
                return function() {
                    if (e = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return e;
                    if (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return e;
                    if ((this.pos += 5) > this.len) throw this.pos = this.len, s(this, 10);
                    return e
                }
            }(), u.prototype.int32 = function() {
                return 0 | this.uint32()
            }, u.prototype.sint32 = function() {
                var e = this.uint32();
                return e >>> 1 ^ -(1 & e)
            }, u.prototype.bool = function() {
                return 0 !== this.uint32()
            }, u.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw s(this, 4);
                return d(this.buf, this.pos += 4)
            }, u.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw s(this, 4);
                return 0 | d(this.buf, this.pos += 4)
            }, u.prototype.float = function() {
                if (this.pos + 4 > this.len) throw s(this, 4);
                var e = o.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, e
            }, u.prototype.double = function() {
                if (this.pos + 8 > this.len) throw s(this, 4);
                var e = o.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, e
            }, u.prototype.bytes = function() {
                var e = this.uint32(),
                    t = this.pos,
                    n = this.pos + e;
                if (n > this.len) throw s(this, e);
                return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
            }, u.prototype.string = function() {
                var e = this.bytes();
                return a.read(e, 0, e.length)
            }, u.prototype.skip = function(e) {
                if ("number" === typeof e) {
                    if (this.pos + e > this.len) throw s(this, e);
                    this.pos += e
                } else
                    do {
                        if (this.pos >= this.len) throw s(this)
                    } while (128 & this.buf[this.pos++]);
                return this
            }, u.prototype.skipType = function(e) {
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
            }, u._configure = function(e) {
                r = e, u.create = l(), r._configure();
                var t = o.Long ? "toLong" : "toNumber";
                o.merge(u.prototype, {
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
                        return p.call(this)[t](!0)
                    },
                    sfixed64: function() {
                        return p.call(this)[t](!1)
                    }
                })
            }
        },
        Fa0v: (e, t, n) => {
            "use strict";
            e.exports = i;
            var r = n("iUYL");
            (i.prototype = Object.create(r.prototype)).constructor = i;
            var o = n("a8eG");

            function i(e) {
                r.call(this, e)
            }
            i._configure = function() {
                o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice)
            }, i.prototype.string = function() {
                var e = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
            }, i._configure()
        },
        gESf: e => {
            "use strict";
            e.exports = {}
        },
        IZNV: (e, t, n) => {
            "use strict";
            t.Service = n("4UAz")
        },
        "4UAz": (e, t, n) => {
            "use strict";
            e.exports = o;
            var r = n("a8eG");

            function o(e, t, n) {
                if ("function" !== typeof e) throw TypeError("rpcImpl must be a function");
                r.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = Boolean(t), this.responseDelimited = Boolean(n)
            }(o.prototype = Object.create(r.EventEmitter.prototype)).constructor = o, o.prototype.rpcCall = function e(t, n, o, i, a) {
                if (!i) throw TypeError("request must be specified");
                var s = this;
                if (!a) return r.asPromise(e, s, t, n, o, i);
                if (s.rpcImpl) try {
                    return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function(e, n) {
                        if (e) return s.emit("error", e, t), a(e);
                        if (null !== n) {
                            if (!(n instanceof o)) try {
                                n = o[s.responseDelimited ? "decodeDelimited" : "decode"](n)
                            } catch (e) {
                                return s.emit("error", e, t), a(e)
                            }
                            return s.emit("data", n, t), a(null, n)
                        }
                        s.end(!0)
                    }))
                } catch (u) {
                    return s.emit("error", u, t), void setTimeout((function() {
                        a(u)
                    }), 0)
                } else setTimeout((function() {
                    a(Error("already ended"))
                }), 0)
            }, o.prototype.end = function(e) {
                return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        },
        dsAi: (e, t, n) => {
            "use strict";
            e.exports = o;
            var r = n("a8eG");

            function o(e, t) {
                this.lo = e >>> 0, this.hi = t >>> 0
            }
            var i = o.zero = new o(0, 0);
            i.toNumber = function() {
                return 0
            }, i.zzEncode = i.zzDecode = function() {
                return this
            }, i.length = function() {
                return 1
            };
            var a = o.zeroHash = "\0\0\0\0\0\0\0\0";
            o.fromNumber = function(e) {
                if (0 === e) return i;
                var t = e < 0;
                t && (e = -e);
                var n = e >>> 0,
                    r = (e - n) / 4294967296 >>> 0;
                return t && (r = ~r >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++r > 4294967295 && (r = 0))), new o(n, r)
            }, o.from = function(e) {
                if ("number" === typeof e) return o.fromNumber(e);
                if (r.isString(e)) {
                    if (!r.Long) return o.fromNumber(parseInt(e, 10));
                    e = r.Long.fromString(e)
                }
                return e.low || e.high ? new o(e.low >>> 0, e.high >>> 0) : i
            }, o.prototype.toNumber = function(e) {
                if (!e && this.hi >>> 31) {
                    var t = 1 + ~this.lo >>> 0,
                        n = ~this.hi >>> 0;
                    return t || (n = n + 1 >>> 0), -(t + 4294967296 * n)
                }
                return this.lo + 4294967296 * this.hi
            }, o.prototype.toLong = function(e) {
                return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: Boolean(e)
                }
            };
            var s = String.prototype.charCodeAt;
            o.fromHash = function(e) {
                return e === a ? i : new o((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0)
            }, o.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, o.prototype.zzEncode = function() {
                var e = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
            }, o.prototype.zzDecode = function() {
                var e = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
            }, o.prototype.length = function() {
                var e = this.lo,
                    t = (this.lo >>> 28 | this.hi << 4) >>> 0,
                    n = this.hi >>> 24;
                return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
            }
        },
        a8eG: function(e, t, n) {
            "use strict";
            var r = t;

            function o(e, t, n) {
                for (var r = Object.keys(t), o = 0; o < r.length; ++o) void 0 !== e[r[o]] && n || (e[r[o]] = t[r[o]]);
                return e
            }

            function i(e) {
                function t(e, n) {
                    if (!(this instanceof t)) return new t(e, n);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return e
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
                        value: (new Error).stack || ""
                    }), n && o(this, n)
                }
                return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
                    get: function() {
                        return e
                    }
                }), t.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, t
            }
            r.asPromise = n("a1X9"), r.base64 = n("kkqJ"), r.EventEmitter = n("CAcF"), r.float = n("I8D1"), r.inquire = n("mpzN"), r.utf8 = n("gA9B"), r.pool = n("FmKl"), r.LongBits = n("dsAi"), r.isNode = Boolean("undefined" !== typeof n.g && n.g && n.g.process && n.g.process.versions && n.g.process.versions.node), r.global = r.isNode && n.g || "undefined" !== typeof window && window || "undefined" !== typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function(e) {
                return "number" === typeof e && isFinite(e) && Math.floor(e) === e
            }, r.isString = function(e) {
                return "string" === typeof e || e instanceof String
            }, r.isObject = function(e) {
                return e && "object" === typeof e
            }, r.isset = r.isSet = function(e, t) {
                var n = e[t];
                return !(null == n || !e.hasOwnProperty(t)) && ("object" !== typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
            }, r.Buffer = function() {
                try {
                    var e = r.inquire("buffer").Buffer;
                    return e.prototype.utf8Write ? e : null
                } catch (t) {
                    return null
                }
            }(), r._Buffer_from = null, r._Buffer_allocUnsafe = null, r.newBuffer = function(e) {
                return "number" === typeof e ? r.Buffer ? r._Buffer_allocUnsafe(e) : new r.Array(e) : r.Buffer ? r._Buffer_from(e) : "undefined" === typeof Uint8Array ? e : new Uint8Array(e)
            }, r.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function(e) {
                return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash
            }, r.longFromHash = function(e, t) {
                var n = r.LongBits.fromHash(e);
                return r.Long ? r.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t))
            }, r.merge = o, r.lcFirst = function(e) {
                return e.charAt(0).toLowerCase() + e.substring(1)
            }, r.newError = i, r.ProtocolError = i("ProtocolError"), r.oneOfGetter = function(e) {
                for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
                return function() {
                    for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
                        if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]]) return e[n]
                }
            }, r.oneOfSetter = function(e) {
                return function(t) {
                    for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]]
                }
            }, r.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, r._configure = function() {
                var e = r.Buffer;
                e ? (r._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) {
                    return new e(t, n)
                }, r._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
                    return new e(t)
                }) : r._Buffer_from = r._Buffer_allocUnsafe = null
            }
        },
        "R/rw": (e, t, n) => {
            "use strict";
            e.exports = f;
            var r, o = n("a8eG"),
                i = o.LongBits,
                a = o.base64,
                s = o.utf8;

            function u(e, t, n) {
                this.fn = e, this.len = t, this.next = void 0, this.val = n
            }

            function c() {}

            function l(e) {
                this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
            }

            function f() {
                this.len = 0, this.head = new u(c, 0, 0), this.tail = this.head, this.states = null
            }
            var d = function() {
                return o.Buffer ? function() {
                    return (f.create = function() {
                        return new r
                    })()
                } : function() {
                    return new f
                }
            };

            function p(e, t, n) {
                t[n] = 255 & e
            }

            function h(e, t) {
                this.len = e, this.next = void 0, this.val = t
            }

            function y(e, t, n) {
                for (; e.hi;) t[n++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
                for (; e.lo > 127;) t[n++] = 127 & e.lo | 128, e.lo = e.lo >>> 7;
                t[n++] = e.lo
            }

            function v(e, t, n) {
                t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24
            }
            f.create = d(), f.alloc = function(e) {
                return new o.Array(e)
            }, o.Array !== Array && (f.alloc = o.pool(f.alloc, o.Array.prototype.subarray)), f.prototype._push = function(e, t, n) {
                return this.tail = this.tail.next = new u(e, t, n), this.len += t, this
            }, h.prototype = Object.create(u.prototype), h.prototype.fn = function(e, t, n) {
                for (; e > 127;) t[n++] = 127 & e | 128, e >>>= 7;
                t[n] = e
            }, f.prototype.uint32 = function(e) {
                return this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this
            }, f.prototype.int32 = function(e) {
                return e < 0 ? this._push(y, 10, i.fromNumber(e)) : this.uint32(e)
            }, f.prototype.sint32 = function(e) {
                return this.uint32((e << 1 ^ e >> 31) >>> 0)
            }, f.prototype.uint64 = function(e) {
                var t = i.from(e);
                return this._push(y, t.length(), t)
            }, f.prototype.int64 = f.prototype.uint64, f.prototype.sint64 = function(e) {
                var t = i.from(e).zzEncode();
                return this._push(y, t.length(), t)
            }, f.prototype.bool = function(e) {
                return this._push(p, 1, e ? 1 : 0)
            }, f.prototype.fixed32 = function(e) {
                return this._push(v, 4, e >>> 0)
            }, f.prototype.sfixed32 = f.prototype.fixed32, f.prototype.fixed64 = function(e) {
                var t = i.from(e);
                return this._push(v, 4, t.lo)._push(v, 4, t.hi)
            }, f.prototype.sfixed64 = f.prototype.fixed64, f.prototype.float = function(e) {
                return this._push(o.float.writeFloatLE, 4, e)
            }, f.prototype.double = function(e) {
                return this._push(o.float.writeDoubleLE, 8, e)
            };
            var m = o.Array.prototype.set ? function(e, t, n) {
                t.set(e, n)
            } : function(e, t, n) {
                for (var r = 0; r < e.length; ++r) t[n + r] = e[r]
            };
            f.prototype.bytes = function(e) {
                var t = e.length >>> 0;
                if (!t) return this._push(p, 1, 0);
                if (o.isString(e)) {
                    var n = f.alloc(t = a.length(e));
                    a.decode(e, n, 0), e = n
                }
                return this.uint32(t)._push(m, t, e)
            }, f.prototype.string = function(e) {
                var t = s.length(e);
                return t ? this.uint32(t)._push(s.write, t, e) : this._push(p, 1, 0)
            }, f.prototype.fork = function() {
                return this.states = new l(this), this.head = this.tail = new u(c, 0, 0), this.len = 0, this
            }, f.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new u(c, 0, 0), this.len = 0), this
            }, f.prototype.ldelim = function() {
                var e = this.head,
                    t = this.tail,
                    n = this.len;
                return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this
            }, f.prototype.finish = function() {
                for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) e.fn(e.val, t, n), n += e.len, e = e.next;
                return t
            }, f._configure = function(e) {
                r = e, f.create = d(), r._configure()
            }
        },
        f0T6: (e, t, n) => {
            "use strict";
            e.exports = i;
            var r = n("R/rw");
            (i.prototype = Object.create(r.prototype)).constructor = i;
            var o = n("a8eG");

            function i() {
                r.call(this)
            }

            function a(e, t, n) {
                e.length < 40 ? o.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n)
            }
            i._configure = function() {
                i.alloc = o._Buffer_allocUnsafe, i.writeBytesBuffer = o.Buffer && o.Buffer.prototype instanceof Uint8Array && "set" === o.Buffer.prototype.set.name ? function(e, t, n) {
                    t.set(e, n)
                } : function(e, t, n) {
                    if (e.copy) e.copy(t, n, 0, e.length);
                    else
                        for (var r = 0; r < e.length;) t[n++] = e[r++]
                }
            }, i.prototype.bytes = function(e) {
                o.isString(e) && (e = o._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return this.uint32(t), t && this._push(i.writeBytesBuffer, t, e), this
            }, i.prototype.string = function(e) {
                var t = o.Buffer.byteLength(e);
                return this.uint32(t), t && this._push(a, t, e), this
            }, i._configure()
        },
        "spJ+": (e, t, n) => {
            for (var r = n("B+/+"), o = "undefined" === typeof window ? n.g : window, i = ["moz", "webkit"], a = "AnimationFrame", s = o["request" + a], u = o["cancel" + a] || o["cancelRequest" + a], c = 0; !s && c < i.length; c++) s = o[i[c] + "Request" + a], u = o[i[c] + "Cancel" + a] || o[i[c] + "CancelRequest" + a];
            if (!s || !u) {
                var l = 0,
                    f = 0,
                    d = [],
                    p = 1e3 / 60;
                s = function(e) {
                    if (0 === d.length) {
                        var t = r(),
                            n = Math.max(0, p - (t - l));
                        l = n + t, setTimeout((function() {
                            var e = d.slice(0);
                            d.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(l)
                                } catch (n) {
                                    setTimeout((function() {
                                        throw n
                                    }), 0)
                                }
                        }), Math.round(n))
                    }
                    return d.push({
                        handle: ++f,
                        callback: e,
                        cancelled: !1
                    }), f
                }, u = function(e) {
                    for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return s.call(o, e)
            }, e.exports.cancel = function() {
                u.apply(o, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u
            }
        },
        "5YBB": (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => I
            });
            var r = n("hLFe");

            function o(e, t) {
                if (null == e) return {};
                var n, o, i = (0, r.A)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) n = a[o], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var i = n("7AjD"),
                a = n("BTiP"),
                s = n("DTvD"),
                u = n("jQIl"),
                c = n.n(u),
                l = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

            function f(e) {
                var t = {
                        type: "tag",
                        name: "",
                        voidElement: !1,
                        attrs: {},
                        children: []
                    },
                    n = e.match(/<\/?([^\s]+?)[/\s>]/);
                if (n && (t.name = n[1], (c()[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0), t.name.startsWith("!--"))) {
                    var r = e.indexOf("--\x3e");
                    return {
                        type: "comment",
                        comment: -1 !== r ? e.slice(4, r) : ""
                    }
                }
                for (var o = new RegExp(l), i = null; null !== (i = o.exec(e));)
                    if (i[0].trim())
                        if (i[1]) {
                            var a = i[1].trim(),
                                s = [a, ""];
                            a.indexOf("=") > -1 && (s = a.split("=")), t.attrs[s[0]] = s[1], o.lastIndex--
                        } else i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
                return t
            }
            var d = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
                p = /^\s*$/,
                h = Object.create(null);

            function y(e, t) {
                switch (t.type) {
                    case "text":
                        return e + t.content;
                    case "tag":
                        return e += "<" + t.name + (t.attrs ? function(e) {
                            var t = [];
                            for (var n in e) t.push(n + '="' + e[n] + '"');
                            return t.length ? " " + t.join(" ") : ""
                        }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(y, "") + "</" + t.name + ">";
                    case "comment":
                        return e + "\x3c!--" + t.comment + "--\x3e"
                }
            }
            var v = {
                parse: function(e, t) {
                    t || (t = {}), t.components || (t.components = h);
                    var n, r = [],
                        o = [],
                        i = -1,
                        a = !1;
                    if (0 !== e.indexOf("<")) {
                        var s = e.indexOf("<");
                        r.push({
                            type: "text",
                            content: -1 === s ? e : e.substring(0, s)
                        })
                    }
                    return e.replace(d, (function(s, u) {
                        if (a) {
                            if (s !== "</" + n.name + ">") return;
                            a = !1
                        }
                        var c, l = "/" !== s.charAt(1),
                            d = s.startsWith("\x3c!--"),
                            h = u + s.length,
                            y = e.charAt(h);
                        if (d) {
                            var v = f(s);
                            return i < 0 ? (r.push(v), r) : ((c = o[i]).children.push(v), r)
                        }
                        if (l && (i++, "tag" === (n = f(s)).type && t.components[n.name] && (n.type = "component", a = !0), n.voidElement || a || !y || "<" === y || n.children.push({
                                type: "text",
                                content: e.slice(h, e.indexOf("<", h))
                            }), 0 === i && r.push(n), (c = o[i - 1]) && c.children.push(n), o[i] = n), (!l || n.voidElement) && (i > -1 && (n.voidElement || n.name === s.slice(2, -1)) && (i--, n = -1 === i ? r : o[i]), !a && "<" !== y && y)) {
                            c = -1 === i ? r : o[i].children;
                            var m = e.indexOf("<", h),
                                _ = e.slice(h, -1 === m ? void 0 : m);
                            p.test(_) && (_ = " "), (m > -1 && i + c.length >= 0 || " " !== _) && c.push({
                                type: "text",
                                content: _
                            })
                        }
                    })), r
                },
                stringify: function(e) {
                    return e.reduce((function(e, t) {
                        return e + y("", t)
                    }), "")
                }
            };
            const m = v;
            var _ = n("a6Nm"),
                g = n("W8V0"),
                b = ["format"],
                E = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        (0, a.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function O(e, t) {
                if (!e) return !1;
                var n = e.props ? e.props.children : e.children;
                return t ? n.length > 0 : !!n
            }

            function S(e) {
                return e ? e.props ? e.props.children : e.children : []
            }

            function A(e) {
                return Array.isArray(e) ? e : [e]
            }

            function w(e, t) {
                if (!e) return "";
                var n = "",
                    r = A(e),
                    a = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
                return r.forEach((function(e, r) {
                    if ("string" === typeof e) n += "".concat(e);
                    else if ((0, s.isValidElement)(e)) {
                        var u = Object.keys(e.props).length,
                            c = a.indexOf(e.type) > -1,
                            l = e.props.children;
                        if (!l && c && 0 === u) n += "<".concat(e.type, "/>");
                        else if (l || c && 0 === u)
                            if (e.props.i18nIsDynamicList) n += "<".concat(r, "></").concat(r, ">");
                            else if (c && 1 === u && "string" === typeof l) n += "<".concat(e.type, ">").concat(l, "</").concat(e.type, ">");
                        else {
                            var f = w(l, t);
                            n += "<".concat(r, ">").concat(f, "</").concat(r, ">")
                        } else n += "<".concat(r, "></").concat(r, ">")
                    } else if (null === e)(0, g.R8)("Trans: the passed in value is invalid - seems you passed in a null child.");
                    else if ("object" === (0, i.A)(e)) {
                        var d = e.format,
                            p = o(e, b),
                            h = Object.keys(p);
                        if (1 === h.length) {
                            var y = d ? "".concat(h[0], ", ").concat(d) : h[0];
                            n += "{{".concat(y, "}}")
                        } else(0, g.R8)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                    } else(0, g.R8)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                })), n
            }

            function x(e, t, n, r, o, a) {
                if ("" === t) return [];
                var u = r.transKeepBasicHtmlNodesFor || [],
                    c = t && new RegExp(u.join("|")).test(t);
                if (!e && !c) return [t];
                var l = {};
                ! function e(t) {
                    A(t).forEach((function(t) {
                        "string" !== typeof t && (O(t) ? e(S(t)) : "object" !== (0, i.A)(t) || (0, s.isValidElement)(t) || Object.assign(l, t))
                    }))
                }(e);
                var f = m.parse("<0>".concat(t, "</0>")),
                    d = R(R({}, l), o);

                function p(e, t, n) {
                    var r = S(e),
                        o = y(r, t.children, n);
                    return function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e) && e.every((function(e) {
                            return (0, s.isValidElement)(e)
                        }))
                    }(r) && 0 === o.length ? r : o
                }

                function h(e, t, n, r, o) {
                    e.dummy && (e.children = t), n.push((0, s.cloneElement)(e, R(R({}, e.props), {}, {
                        key: r
                    }), o ? void 0 : t))
                }

                function y(t, o, l) {
                    var f = A(t);
                    return A(o).reduce((function(t, o, v) {
                        var m = o.children && o.children[0] && o.children[0].content && n.services.interpolator.interpolate(o.children[0].content, d, n.language);
                        if ("tag" === o.type) {
                            var _ = f[parseInt(o.name, 10)];
                            !_ && 1 === l.length && l[0][o.name] && (_ = l[0][o.name]), _ || (_ = {});
                            var g = 0 !== Object.keys(o.attrs).length ? function(e, t) {
                                    var n = R({}, t);
                                    return n.props = Object.assign(e.props, t.props), n
                                }({
                                    props: o.attrs
                                }, _) : _,
                                b = (0, s.isValidElement)(g),
                                E = b && O(o, !0) && !o.voidElement,
                                T = c && "object" === (0, i.A)(g) && g.dummy && !b,
                                S = "object" === (0, i.A)(e) && null !== e && Object.hasOwnProperty.call(e, o.name);
                            if ("string" === typeof g) {
                                var A = n.services.interpolator.interpolate(g, d, n.language);
                                t.push(A)
                            } else if (O(g) || E) {
                                h(g, p(g, o, l), t, v)
                            } else if (T) {
                                var w = y(f, o.children, l);
                                t.push((0, s.cloneElement)(g, R(R({}, g.props), {}, {
                                    key: v
                                }), w))
                            } else if (Number.isNaN(parseFloat(o.name))) {
                                if (S) h(g, p(g, o, l), t, v, o.voidElement);
                                else if (r.transSupportBasicHtmlNodes && u.indexOf(o.name) > -1)
                                    if (o.voidElement) t.push((0, s.createElement)(o.name, {
                                        key: "".concat(o.name, "-").concat(v)
                                    }));
                                    else {
                                        var x = y(f, o.children, l);
                                        t.push((0, s.createElement)(o.name, {
                                            key: "".concat(o.name, "-").concat(v)
                                        }, x))
                                    }
                                else if (o.voidElement) t.push("<".concat(o.name, " />"));
                                else {
                                    var I = y(f, o.children, l);
                                    t.push("<".concat(o.name, ">").concat(I, "</").concat(o.name, ">"))
                                }
                            } else if ("object" !== (0, i.A)(g) || b) 1 === o.children.length && m ? t.push((0, s.cloneElement)(g, R(R({}, g.props), {}, {
                                key: v
                            }), m)) : t.push((0, s.cloneElement)(g, R(R({}, g.props), {}, {
                                key: v
                            })));
                            else {
                                var C = o.children[0] ? m : null;
                                C && t.push(C)
                            }
                        } else if ("text" === o.type) {
                            var P = r.transWrapTextNodes,
                                D = a ? r.unescape(n.services.interpolator.interpolate(o.content, d, n.language)) : n.services.interpolator.interpolate(o.content, d, n.language);
                            P ? t.push((0, s.createElement)(P, {
                                key: "".concat(o.name, "-").concat(v)
                            }, D)) : t.push(D)
                        }
                        return t
                    }), [])
                }
                return S(y([{
                    dummy: !0,
                    children: e || []
                }], f, A(e || []))[0])
            }

            function I(e) {
                var t = e.children,
                    n = e.count,
                    r = e.parent,
                    i = e.i18nKey,
                    a = e.context,
                    u = e.tOptions,
                    c = void 0 === u ? {} : u,
                    l = e.values,
                    f = e.defaults,
                    d = e.components,
                    p = e.ns,
                    h = e.i18n,
                    y = e.t,
                    v = e.shouldUnescape,
                    m = o(e, E),
                    b = (0, s.useContext)(_.gJ) || {},
                    T = b.i18n,
                    O = b.defaultNS,
                    S = h || T || (0, _.TO)();
                if (!S) return (0, g.mc)("You will need to pass in an i18next instance by using i18nextReactModule"), t;
                var A = y || S.t.bind(S) || function(e) {
                    return e
                };
                a && (c.context = a);
                var I = R(R({}, (0, _.rV)()), S.options && S.options.react),
                    C = p || A.ns || O || S.options && S.options.defaultNS;
                C = "string" === typeof C ? [C] : C || ["translation"];
                var P = f || w(t, I) || I.transEmptyNodeValue || i,
                    D = I.hashTransKey,
                    U = i || (D ? D(P) : P),
                    L = l ? c.interpolation : {
                        interpolation: R(R({}, c.interpolation), {}, {
                            prefix: "#$?",
                            suffix: "?$#"
                        })
                    },
                    N = R(R(R(R({}, c), {}, {
                        count: n
                    }, l), L), {}, {
                        defaultValue: P,
                        ns: C
                    }),
                    k = x(d || t, U ? A(U, N) : P, S, I, N, v),
                    M = void 0 !== r ? r : I.defaultTransParent;
                return M ? (0, s.createElement)(M, m, k) : k
            }
        },
        "0x/d": (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = i(n("yiM/")),
                s = i(n("6IVt")),
                u = i(n("/Qij")),
                c = i(n("Dpzs")),
                l = i(n("spJ+")),
                f = i(n("C9Im")),
                d = i(n("DTvD")),
                p = i(n("1YyT")),
                h = 1e3 / 60,
                y = function(e) {
                    function t(n) {
                        var o = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
                            var t = !1,
                                n = o.state,
                                i = n.currentStyle,
                                a = n.currentVelocity,
                                s = n.lastIdealStyle,
                                u = n.lastIdealVelocity;
                            for (var c in e)
                                if (Object.prototype.hasOwnProperty.call(e, c)) {
                                    var l = e[c];
                                    "number" === typeof l && (t || (t = !0, i = r({}, i), a = r({}, a), s = r({}, s), u = r({}, u)), i[c] = l, a[c] = 0, s[c] = l, u[c] = 0)
                                }
                            t && o.setState({
                                currentStyle: i,
                                currentVelocity: a,
                                lastIdealStyle: s,
                                lastIdealVelocity: u
                            })
                        }, this.startAnimationIfNecessary = function() {
                            o.animationID = l.default((function(e) {
                                var t = o.props.style;
                                if (f.default(o.state.currentStyle, t, o.state.currentVelocity)) return o.wasAnimating && o.props.onRest && o.props.onRest(), o.animationID = null, o.wasAnimating = !1, void(o.accumulatedTime = 0);
                                o.wasAnimating = !0;
                                var n = e || c.default(),
                                    r = n - o.prevTime;
                                if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * h && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
                                var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / h) * h) / h,
                                    a = Math.floor(o.accumulatedTime / h),
                                    s = {},
                                    l = {},
                                    d = {},
                                    p = {};
                                for (var y in t)
                                    if (Object.prototype.hasOwnProperty.call(t, y)) {
                                        var v = t[y];
                                        if ("number" === typeof v) d[y] = v, p[y] = 0, s[y] = v, l[y] = 0;
                                        else {
                                            for (var m = o.state.lastIdealStyle[y], _ = o.state.lastIdealVelocity[y], g = 0; g < a; g++) {
                                                var b = u.default(h / 1e3, m, _, v.val, v.stiffness, v.damping, v.precision);
                                                m = b[0], _ = b[1]
                                            }
                                            var E = u.default(h / 1e3, m, _, v.val, v.stiffness, v.damping, v.precision),
                                                T = E[0],
                                                R = E[1];
                                            d[y] = m + (T - m) * i, p[y] = _ + (R - _) * i, s[y] = m, l[y] = _
                                        }
                                    }
                                o.animationID = null, o.accumulatedTime -= a * h, o.setState({
                                    currentStyle: d,
                                    currentVelocity: p,
                                    lastIdealStyle: s,
                                    lastIdealVelocity: l
                                }), o.unreadPropStyle = null, o.startAnimationIfNecessary()
                            }))
                        }, this.state = this.defaultState()
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), o(t, null, [{
                        key: "propTypes",
                        value: {
                            defaultStyle: p.default.objectOf(p.default.number),
                            style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired,
                            children: p.default.func.isRequired,
                            onRest: p.default.func
                        },
                        enumerable: !0
                    }]), t.prototype.defaultState = function() {
                        var e = this.props,
                            t = e.defaultStyle,
                            n = e.style,
                            r = t || s.default(n),
                            o = a.default(r);
                        return {
                            currentStyle: r,
                            currentVelocity: o,
                            lastIdealStyle: r,
                            lastIdealVelocity: o
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.prevTime = c.default(), this.startAnimationIfNecessary()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                    }, t.prototype.componentWillUnmount = function() {
                        null != this.animationID && (l.default.cancel(this.animationID), this.animationID = null)
                    }, t.prototype.render = function() {
                        var e = this.props.children(this.state.currentStyle);
                        return e && d.default.Children.only(e)
                    }, t
                }(d.default.Component);
            t.default = y, e.exports = t.default
        },
        Vfch: (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = i(n("yiM/")),
                s = i(n("6IVt")),
                u = i(n("/Qij")),
                c = i(n("Dpzs")),
                l = i(n("spJ+")),
                f = i(n("C9Im")),
                d = i(n("DTvD")),
                p = i(n("1YyT")),
                h = 1e3 / 60;
            var y = function(e) {
                function t(n) {
                    var o = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = o.state, n = t.currentStyles, i = t.currentVelocities, a = t.lastIdealStyles, s = t.lastIdealVelocities, u = !1, c = 0; c < e.length; c++) {
                            var l = e[c],
                                f = !1;
                            for (var d in l)
                                if (Object.prototype.hasOwnProperty.call(l, d)) {
                                    var p = l[d];
                                    "number" === typeof p && (f || (f = !0, u = !0, n[c] = r({}, n[c]), i[c] = r({}, i[c]), a[c] = r({}, a[c]), s[c] = r({}, s[c])), n[c][d] = p, i[c][d] = 0, a[c][d] = p, s[c][d] = 0)
                                }
                        }
                        u && o.setState({
                            currentStyles: n,
                            currentVelocities: i,
                            lastIdealStyles: a,
                            lastIdealVelocities: s
                        })
                    }, this.startAnimationIfNecessary = function() {
                        o.animationID = l.default((function(e) {
                            var t = o.props.styles(o.state.lastIdealStyles);
                            if (function(e, t, n) {
                                    for (var r = 0; r < e.length; r++)
                                        if (!f.default(e[r], t[r], n[r])) return !1;
                                    return !0
                                }(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
                            var n = e || c.default(),
                                r = n - o.prevTime;
                            if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * h && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
                            for (var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / h) * h) / h, a = Math.floor(o.accumulatedTime / h), s = [], l = [], d = [], p = [], y = 0; y < t.length; y++) {
                                var v = t[y],
                                    m = {},
                                    _ = {},
                                    g = {},
                                    b = {};
                                for (var E in v)
                                    if (Object.prototype.hasOwnProperty.call(v, E)) {
                                        var T = v[E];
                                        if ("number" === typeof T) m[E] = T, _[E] = 0, g[E] = T, b[E] = 0;
                                        else {
                                            for (var R = o.state.lastIdealStyles[y][E], O = o.state.lastIdealVelocities[y][E], S = 0; S < a; S++) {
                                                var A = u.default(h / 1e3, R, O, T.val, T.stiffness, T.damping, T.precision);
                                                R = A[0], O = A[1]
                                            }
                                            var w = u.default(h / 1e3, R, O, T.val, T.stiffness, T.damping, T.precision),
                                                x = w[0],
                                                I = w[1];
                                            m[E] = R + (x - R) * i, _[E] = O + (I - O) * i, g[E] = R, b[E] = O
                                        }
                                    }
                                d[y] = m, p[y] = _, s[y] = g, l[y] = b
                            }
                            o.animationID = null, o.accumulatedTime -= a * h, o.setState({
                                currentStyles: d,
                                currentVelocities: p,
                                lastIdealStyles: s,
                                lastIdealVelocities: l
                            }), o.unreadPropStyles = null, o.startAnimationIfNecessary()
                        }))
                    }, this.state = this.defaultState()
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: p.default.arrayOf(p.default.objectOf(p.default.number)),
                        styles: p.default.func.isRequired,
                        children: p.default.func.isRequired
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        n = e.styles,
                        r = t || n().map(s.default),
                        o = r.map((function(e) {
                            return a.default(e)
                        }));
                    return {
                        currentStyles: r,
                        currentVelocities: o,
                        lastIdealStyles: r,
                        lastIdealVelocities: o
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = c.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    null != this.animationID && (l.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = this.props.children(this.state.currentStyles);
                    return e && d.default.Children.only(e)
                }, t
            }(d.default.Component);
            t.default = y, e.exports = t.default
        },
        "f/FE": (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = i(n("yiM/")),
                s = i(n("6IVt")),
                u = i(n("/Qij")),
                c = i(n("sRZu")),
                l = i(n("Dpzs")),
                f = i(n("spJ+")),
                d = i(n("C9Im")),
                p = i(n("DTvD")),
                h = i(n("1YyT")),
                y = 1e3 / 60;

            function v(e, t, n) {
                var r = t;
                return null == r ? e.map((function(e, t) {
                    return {
                        key: e.key,
                        data: e.data,
                        style: n[t]
                    }
                })) : e.map((function(e, t) {
                    for (var o = 0; o < r.length; o++)
                        if (r[o].key === e.key) return {
                            key: r[o].key,
                            data: r[o].data,
                            style: n[t]
                        };
                    return {
                        key: e.key,
                        data: e.data,
                        style: n[t]
                    }
                }))
            }

            function m(e, t, n, r, o, i, s, u, l) {
                for (var f = c.default(r, o, (function(e, r) {
                        var o = t(r);
                        return null == o || d.default(i[e], o, s[e]) ? (n({
                            key: r.key,
                            data: r.data
                        }), null) : {
                            key: r.key,
                            data: r.data,
                            style: o
                        }
                    })), p = [], h = [], y = [], v = [], m = 0; m < f.length; m++) {
                    for (var _ = f[m], g = null, b = 0; b < r.length; b++)
                        if (r[b].key === _.key) {
                            g = b;
                            break
                        }
                    if (null == g) {
                        var E = e(_);
                        p[m] = E, y[m] = E;
                        var T = a.default(_.style);
                        h[m] = T, v[m] = T
                    } else p[m] = i[g], y[m] = u[g], h[m] = s[g], v[m] = l[g]
                }
                return [f, p, h, y, v]
            }
            var _ = function(e) {
                function t(n) {
                    var o = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = m(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), n = t[0], i = t[1], a = t[2], s = t[3], u = t[4], c = 0; c < e.length; c++) {
                            var l = e[c].style,
                                f = !1;
                            for (var d in l)
                                if (Object.prototype.hasOwnProperty.call(l, d)) {
                                    var p = l[d];
                                    "number" === typeof p && (f || (f = !0, i[c] = r({}, i[c]), a[c] = r({}, a[c]), s[c] = r({}, s[c]), u[c] = r({}, u[c]), n[c] = {
                                        key: n[c].key,
                                        data: n[c].data,
                                        style: r({}, n[c].style)
                                    }), i[c][d] = p, a[c][d] = 0, s[c][d] = p, u[c][d] = 0, n[c].style[d] = p)
                                }
                        }
                        o.setState({
                            currentStyles: i,
                            currentVelocities: a,
                            mergedPropsStyles: n,
                            lastIdealStyles: s,
                            lastIdealVelocities: u
                        })
                    }, this.startAnimationIfNecessary = function() {
                        o.unmounting || (o.animationID = f.default((function(e) {
                            if (!o.unmounting) {
                                var t = o.props.styles,
                                    n = "function" === typeof t ? t(v(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
                                if (function(e, t, n, r) {
                                        if (r.length !== t.length) return !1;
                                        for (var o = 0; o < r.length; o++)
                                            if (r[o].key !== t[o].key) return !1;
                                        for (o = 0; o < r.length; o++)
                                            if (!d.default(e[o], t[o].style, n[o])) return !1;
                                        return !0
                                    }(o.state.currentStyles, n, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
                                var r = e || l.default(),
                                    i = r - o.prevTime;
                                if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + i, o.accumulatedTime > 10 * y && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
                                for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / y) * y) / y, s = Math.floor(o.accumulatedTime / y), c = m(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, n, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), f = c[0], p = c[1], h = c[2], _ = c[3], g = c[4], b = 0; b < f.length; b++) {
                                    var E = f[b].style,
                                        T = {},
                                        R = {},
                                        O = {},
                                        S = {};
                                    for (var A in E)
                                        if (Object.prototype.hasOwnProperty.call(E, A)) {
                                            var w = E[A];
                                            if ("number" === typeof w) T[A] = w, R[A] = 0, O[A] = w, S[A] = 0;
                                            else {
                                                for (var x = _[b][A], I = g[b][A], C = 0; C < s; C++) {
                                                    var P = u.default(y / 1e3, x, I, w.val, w.stiffness, w.damping, w.precision);
                                                    x = P[0], I = P[1]
                                                }
                                                var D = u.default(y / 1e3, x, I, w.val, w.stiffness, w.damping, w.precision),
                                                    U = D[0],
                                                    L = D[1];
                                                T[A] = x + (U - x) * a, R[A] = I + (L - I) * a, O[A] = x, S[A] = I
                                            }
                                        }
                                    _[b] = O, g[b] = S, p[b] = T, h[b] = R
                                }
                                o.animationID = null, o.accumulatedTime -= s * y, o.setState({
                                    currentStyles: p,
                                    currentVelocities: h,
                                    lastIdealStyles: _,
                                    lastIdealVelocities: g,
                                    mergedPropsStyles: f
                                }), o.unreadPropStyles = null, o.startAnimationIfNecessary()
                            }
                        })))
                    }, this.state = this.defaultState()
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: h.default.arrayOf(h.default.shape({
                            key: h.default.string.isRequired,
                            data: h.default.any,
                            style: h.default.objectOf(h.default.number).isRequired
                        })),
                        styles: h.default.oneOfType([h.default.func, h.default.arrayOf(h.default.shape({
                            key: h.default.string.isRequired,
                            data: h.default.any,
                            style: h.default.objectOf(h.default.oneOfType([h.default.number, h.default.object])).isRequired
                        }))]).isRequired,
                        children: h.default.func.isRequired,
                        willEnter: h.default.func,
                        willLeave: h.default.func,
                        didLeave: h.default.func
                    },
                    enumerable: !0
                }, {
                    key: "defaultProps",
                    value: {
                        willEnter: function(e) {
                            return s.default(e.style)
                        },
                        willLeave: function() {
                            return null
                        },
                        didLeave: function() {}
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        n = e.styles,
                        r = e.willEnter,
                        o = e.willLeave,
                        i = e.didLeave,
                        u = "function" === typeof n ? n(t) : n,
                        c = void 0;
                    c = null == t ? u : t.map((function(e) {
                        for (var t = 0; t < u.length; t++)
                            if (u[t].key === e.key) return u[t];
                        return e
                    }));
                    var l = null == t ? u.map((function(e) {
                            return s.default(e.style)
                        })) : t.map((function(e) {
                            return s.default(e.style)
                        })),
                        f = null == t ? u.map((function(e) {
                            return a.default(e.style)
                        })) : t.map((function(e) {
                            return a.default(e.style)
                        })),
                        d = m(r, o, i, c, u, l, f, l, f),
                        p = d[0];
                    return {
                        currentStyles: d[1],
                        currentVelocities: d[2],
                        lastIdealStyles: d[3],
                        lastIdealVelocities: d[4],
                        mergedPropsStyles: p
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = l.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                    var t = e.styles;
                    this.unreadPropStyles = "function" === typeof t ? t(v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    this.unmounting = !0, null != this.animationID && (f.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                        t = this.props.children(e);
                    return t && p.default.Children.only(t)
                }, t
            }(p.default.Component);
            t.default = _, e.exports = t.default
        },
        "yiM/": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
                return t
            }, e.exports = t.default
        },
        sRZu: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, n) {
                for (var r = {}, o = 0; o < e.length; o++) r[e[o].key] = o;
                var i = {};
                for (o = 0; o < t.length; o++) i[t[o].key] = o;
                var a = [];
                for (o = 0; o < t.length; o++) a[o] = t[o];
                for (o = 0; o < e.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(i, e[o].key)) {
                        var s = n(o, e[o]);
                        null != s && a.push(s)
                    }
                return a.sort((function(e, n) {
                    var o = i[e.key],
                        a = i[n.key],
                        s = r[e.key],
                        u = r[n.key];
                    if (null != o && null != a) return i[e.key] - i[n.key];
                    if (null != s && null != u) return r[e.key] - r[n.key];
                    if (null != o) {
                        for (var c = 0; c < t.length; c++) {
                            var l = t[c].key;
                            if (Object.prototype.hasOwnProperty.call(r, l)) {
                                if (o < i[l] && u > r[l]) return -1;
                                if (o > i[l] && u < r[l]) return 1
                            }
                        }
                        return 1
                    }
                    for (c = 0; c < t.length; c++) {
                        l = t[c].key;
                        if (Object.prototype.hasOwnProperty.call(r, l)) {
                            if (a < i[l] && s > r[l]) return 1;
                            if (a > i[l] && s < r[l]) return -1
                        }
                    }
                    return -1
                }))
            }, e.exports = t.default
        },
        HOTO: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = {
                noWobble: {
                    stiffness: 170,
                    damping: 26
                },
                gentle: {
                    stiffness: 120,
                    damping: 14
                },
                wobbly: {
                    stiffness: 180,
                    damping: 12
                },
                stiff: {
                    stiffness: 210,
                    damping: 20
                }
            }, e.exports = t.default
        },
        JtvI: (e, t, n) => {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e.default : e
            }
            r(n("0x/d")), r(n("Vfch"));
            var o = n("f/FE");
            t.S6 = r(o);
            var i = n("gvj2");
            t.oz = r(i);
            var a = n("HOTO");
            t.v4 = r(a), r(n("6IVt")), r(n("N7BD"))
        },
        N7BD: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function() {
                0
            };
            e.exports = t.default
        },
        C9Im: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, n) {
                for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                        if (0 !== n[r]) return !1;
                        var o = "number" === typeof t[r] ? t[r] : t[r].val;
                        if (e[r] !== o) return !1
                    }
                return !0
            }, e.exports = t.default
        },
        gvj2: (e, t, n) => {
            "use strict";
            t.__esModule = !0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = function(e, t) {
                return r({}, s, t, {
                    val: e
                })
            };
            var o, i = n("HOTO"),
                a = (o = i) && o.__esModule ? o : {
                    default: o
                },
                s = r({}, a.default.noWobble, {
                    precision: .01
                });
            e.exports = t.default
        },
        "/Qij": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, r, o, i, a, s) {
                var u = r + (-i * (t - o) + -a * r) * e,
                    c = t + u * e;
                if (Math.abs(u) < s && Math.abs(c - o) < s) return n[0] = o, n[1] = 0, n;
                return n[0] = c, n[1] = u, n
            };
            var n = [0, 0];
            e.exports = t.default
        },
        "6IVt": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" === typeof e[n] ? e[n] : e[n].val);
                return t
            }, e.exports = t.default
        },
        QXOt: e => {
            e.exports = {
                ReactQueryDevtools: function() {
                    return null
                },
                ReactQueryDevtoolsPanel: function() {
                    return null
                }
            }
        },
        FtkP: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => a
            });
            var r = n("lAeT"),
                o = n("z+I1"),
                i = n("iLh5"),
                a = new(function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).setup = function(e) {
                            var t;
                            if (!i.S$ && (null == (t = window) ? void 0 : t.addEventListener)) {
                                var n = function() {
                                    return e()
                                };
                                return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1),
                                    function() {
                                        window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n)
                                    }
                            }
                        }, t
                    }(0, r.A)(t, e);
                    var n = t.prototype;
                    return n.onSubscribe = function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }, n.onUnsubscribe = function() {
                        var e;
                        this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
                    }, n.setEventListener = function(e) {
                        var t, n = this;
                        this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((function(e) {
                            "boolean" === typeof e ? n.setFocused(e) : n.onFocus()
                        }))
                    }, n.setFocused = function(e) {
                        this.focused = e, e && this.onFocus()
                    }, n.onFocus = function() {
                        this.listeners.forEach((function(e) {
                            e()
                        }))
                    }, n.isFocused = function() {
                        return "boolean" === typeof this.focused ? this.focused : "undefined" === typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                    }, t
                }(o.Q))
        },
        vpTH: (e, t, n) => {
            "use strict";
            n.d(t, {
                QueryClient: () => r.E
            });
            var r = n("lGK8"),
                o = n("3EYX");
            n.o(o, "QueryClientProvider") && n.d(t, {
                QueryClientProvider: function() {
                    return o.QueryClientProvider
                }
            }), n.o(o, "useMutation") && n.d(t, {
                useMutation: function() {
                    return o.useMutation
                }
            }), n.o(o, "useQuery") && n.d(t, {
                useQuery: function() {
                    return o.useQuery
                }
            }), n.o(o, "useQueryClient") && n.d(t, {
                useQueryClient: function() {
                    return o.useQueryClient
                }
            })
        },
        dZ8p: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => i,
                t: () => o
            });
            var r = console;

            function o() {
                return r
            }

            function i(e) {
                r = e
            }
        },
        XmiK: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => c,
                s: () => u
            });
            var r = n("ga4H"),
                o = n("dZ8p"),
                i = n("ag8D"),
                a = n("2N81"),
                s = n("iLh5"),
                u = function() {
                    function e(e) {
                        this.options = (0, r.A)({}, e.defaultOptions, e.options), this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.observers = [], this.state = e.state || c(), this.meta = e.meta
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
                        return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(s.lQ).catch(s.lQ)) : Promise.resolve()
                    }, t.continue = function() {
                        return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
                    }, t.execute = function() {
                        var e, t = this,
                            n = "loading" === this.state.status,
                            r = Promise.resolve();
                        return n || (this.dispatch({
                            type: "loading",
                            variables: this.options.variables
                        }), r = r.then((function() {
                            null == t.mutationCache.config.onMutate || t.mutationCache.config.onMutate(t.state.variables, t)
                        })).then((function() {
                            return null == t.options.onMutate ? void 0 : t.options.onMutate(t.state.variables)
                        })).then((function(e) {
                            e !== t.state.context && t.dispatch({
                                type: "loading",
                                context: e,
                                variables: t.state.variables
                            })
                        }))), r.then((function() {
                            return t.executeMutation()
                        })).then((function(n) {
                            e = n, null == t.mutationCache.config.onSuccess || t.mutationCache.config.onSuccess(e, t.state.variables, t.state.context, t)
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
                            return null == t.mutationCache.config.onError || t.mutationCache.config.onError(e, t.state.variables, t.state.context, t), (0, o.t)().error(e), Promise.resolve().then((function() {
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
                        return this.retryer = new a.eJ({
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
                                    return (0, r.A)({}, e, {
                                        failureCount: e.failureCount + 1
                                    });
                                case "pause":
                                    return (0, r.A)({}, e, {
                                        isPaused: !0
                                    });
                                case "continue":
                                    return (0, r.A)({}, e, {
                                        isPaused: !1
                                    });
                                case "loading":
                                    return (0, r.A)({}, e, {
                                        context: t.context,
                                        data: void 0,
                                        error: null,
                                        isPaused: !1,
                                        status: "loading",
                                        variables: t.variables
                                    });
                                case "success":
                                    return (0, r.A)({}, e, {
                                        data: t.data,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    });
                                case "error":
                                    return (0, r.A)({}, e, {
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        isPaused: !1,
                                        status: "error"
                                    });
                                case "setState":
                                    return (0, r.A)({}, e, t.state);
                                default:
                                    return e
                            }
                        }(this.state, e), i.j.batch((function() {
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
        ag8D: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => o
            });
            var r = n("iLh5"),
                o = new(function() {
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
                        this.transactions ? this.queue.push(e) : (0, r.G6)((function() {
                            t.notifyFn(e)
                        }))
                    }, t.batchCalls = function(e) {
                        var t = this;
                        return function() {
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            t.schedule((function() {
                                e.apply(void 0, r)
                            }))
                        }
                    }, t.flush = function() {
                        var e = this,
                            t = this.queue;
                        this.queue = [], t.length && (0, r.G6)((function() {
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
        A99o: (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => a
            });
            var r = n("lAeT"),
                o = n("z+I1"),
                i = n("iLh5"),
                a = new(function(e) {
                    function t() {
                        var t;
                        return (t = e.call(this) || this).setup = function(e) {
                            var t;
                            if (!i.S$ && (null == (t = window) ? void 0 : t.addEventListener)) {
                                var n = function() {
                                    return e()
                                };
                                return window.addEventListener("online", n, !1), window.addEventListener("offline", n, !1),
                                    function() {
                                        window.removeEventListener("online", n), window.removeEventListener("offline", n)
                                    }
                            }
                        }, t
                    }(0, r.A)(t, e);
                    var n = t.prototype;
                    return n.onSubscribe = function() {
                        this.cleanup || this.setEventListener(this.setup)
                    }, n.onUnsubscribe = function() {
                        var e;
                        this.hasListeners() || (null == (e = this.cleanup) || e.call(this), this.cleanup = void 0)
                    }, n.setEventListener = function(e) {
                        var t, n = this;
                        this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e((function(e) {
                            "boolean" === typeof e ? n.setOnline(e) : n.onOnline()
                        }))
                    }, n.setOnline = function(e) {
                        this.online = e, e && this.onOnline()
                    }, n.onOnline = function() {
                        this.listeners.forEach((function(e) {
                            e()
                        }))
                    }, n.isOnline = function() {
                        return "boolean" === typeof this.online ? this.online : "undefined" === typeof navigator || "undefined" === typeof navigator.onLine || navigator.onLine
                    }, t
                }(o.Q))
        },
        lGK8: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => _
            });
            var r = n("ga4H"),
                o = n("iLh5"),
                i = n("lAeT"),
                a = n("ag8D"),
                s = n("dZ8p"),
                u = n("2N81"),
                c = function() {
                    function e(e) {
                        this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = e.meta, this.scheduleGc()
                    }
                    var t = e.prototype;
                    return t.setOptions = function(e) {
                        var t;
                        this.options = (0, r.A)({}, this.defaultOptions, e), this.meta = null == e ? void 0 : e.meta, this.cacheTime = Math.max(this.cacheTime || 0, null != (t = this.options.cacheTime) ? t : 3e5)
                    }, t.setDefaultOptions = function(e) {
                        this.defaultOptions = e
                    }, t.scheduleGc = function() {
                        var e = this;
                        this.clearGcTimeout(), (0, o.gn)(this.cacheTime) && (this.gcTimeout = setTimeout((function() {
                            e.optionalRemove()
                        }), this.cacheTime))
                    }, t.clearGcTimeout = function() {
                        clearTimeout(this.gcTimeout), this.gcTimeout = void 0
                    }, t.optionalRemove = function() {
                        this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this))
                    }, t.setData = function(e, t) {
                        var n, r, i = this.state.data,
                            a = (0, o.Zw)(e, i);
                        return (null == (n = (r = this.options).isDataEqual) ? void 0 : n.call(r, i, a)) ? a = i : !1 !== this.options.structuralSharing && (a = (0, o.BH)(i, a)), this.dispatch({
                            data: a,
                            type: "success",
                            dataUpdatedAt: null == t ? void 0 : t.updatedAt
                        }), a
                    }, t.setState = function(e, t) {
                        this.dispatch({
                            type: "setState",
                            state: e,
                            setStateOptions: t
                        })
                    }, t.cancel = function(e) {
                        var t, n = this.promise;
                        return null == (t = this.retryer) || t.cancel(e), n ? n.then(o.lQ).catch(o.lQ) : Promise.resolve()
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
                        return void 0 === e && (e = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, o.j3)(this.state.dataUpdatedAt, e)
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
                        var n, r, i, a = this;
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
                        var f = (0, o.HN)(this.queryKey),
                            d = (0, o.jY)(),
                            p = {
                                queryKey: f,
                                pageParam: void 0,
                                meta: this.meta
                            };
                        Object.defineProperty(p, "signal", {
                            enumerable: !0,
                            get: function() {
                                if (d) return a.abortSignalConsumed = !0, d.signal
                            }
                        });
                        var h, y, v = {
                            fetchOptions: t,
                            options: this.options,
                            queryKey: f,
                            state: this.state,
                            fetchFn: function() {
                                return a.options.queryFn ? (a.abortSignalConsumed = !1, a.options.queryFn(p)) : Promise.reject("Missing queryFn")
                            },
                            meta: this.meta
                        };
                        (null == (n = this.options.behavior) ? void 0 : n.onFetch) && (null == (h = this.options.behavior) || h.onFetch(v));
                        (this.revertState = this.state, this.state.isFetching && this.state.fetchMeta === (null == (r = v.fetchOptions) ? void 0 : r.meta)) || this.dispatch({
                            type: "fetch",
                            meta: null == (y = v.fetchOptions) ? void 0 : y.meta
                        });
                        return this.retryer = new u.eJ({
                            fn: v.fetchFn,
                            abort: null == d || null == (i = d.abort) ? void 0 : i.bind(d),
                            onSuccess: function(e) {
                                a.setData(e), null == a.cache.config.onSuccess || a.cache.config.onSuccess(e, a), 0 === a.cacheTime && a.optionalRemove()
                            },
                            onError: function(e) {
                                (0, u.wm)(e) && e.silent || a.dispatch({
                                    type: "error",
                                    error: e
                                }), (0, u.wm)(e) || (null == a.cache.config.onError || a.cache.config.onError(e, a), (0, s.t)().error(e)), 0 === a.cacheTime && a.optionalRemove()
                            },
                            onFail: function() {
                                a.dispatch({
                                    type: "failed"
                                })
                            },
                            onPause: function() {
                                a.dispatch({
                                    type: "pause"
                                })
                            },
                            onContinue: function() {
                                a.dispatch({
                                    type: "continue"
                                })
                            },
                            retry: v.options.retry,
                            retryDelay: v.options.retryDelay
                        }), this.promise = this.retryer.promise, this.promise
                    }, t.dispatch = function(e) {
                        var t = this;
                        this.state = this.reducer(this.state, e), a.j.batch((function() {
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
                            n = "undefined" !== typeof e.initialData ? "function" === typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0,
                            r = "undefined" !== typeof t;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchMeta: null,
                            isFetching: !1,
                            isInvalidated: !1,
                            isPaused: !1,
                            status: r ? "success" : "idle"
                        }
                    }, t.reducer = function(e, t) {
                        var n, o;
                        switch (t.type) {
                            case "failed":
                                return (0, r.A)({}, e, {
                                    fetchFailureCount: e.fetchFailureCount + 1
                                });
                            case "pause":
                                return (0, r.A)({}, e, {
                                    isPaused: !0
                                });
                            case "continue":
                                return (0, r.A)({}, e, {
                                    isPaused: !1
                                });
                            case "fetch":
                                return (0, r.A)({}, e, {
                                    fetchFailureCount: 0,
                                    fetchMeta: null != (n = t.meta) ? n : null,
                                    isFetching: !0,
                                    isPaused: !1
                                }, !e.dataUpdatedAt && {
                                    error: null,
                                    status: "loading"
                                });
                            case "success":
                                return (0, r.A)({}, e, {
                                    data: t.data,
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (o = t.dataUpdatedAt) ? o : Date.now(),
                                    error: null,
                                    fetchFailureCount: 0,
                                    isFetching: !1,
                                    isInvalidated: !1,
                                    isPaused: !1,
                                    status: "success"
                                });
                            case "error":
                                var i = t.error;
                                return (0, u.wm)(i) && i.revert && this.revertState ? (0, r.A)({}, this.revertState) : (0, r.A)({}, e, {
                                    error: i,
                                    errorUpdateCount: e.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: e.fetchFailureCount + 1,
                                    isFetching: !1,
                                    isPaused: !1,
                                    status: "error"
                                });
                            case "invalidate":
                                return (0, r.A)({}, e, {
                                    isInvalidated: !0
                                });
                            case "setState":
                                return (0, r.A)({}, e, t.state);
                            default:
                                return e
                        }
                    }, e
                }(),
                l = n("z+I1"),
                f = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this) || this).config = t || {}, n.queries = [], n.queriesMap = {}, n
                    }(0, i.A)(t, e);
                    var n = t.prototype;
                    return n.build = function(e, t, n) {
                        var r, i = t.queryKey,
                            a = null != (r = t.queryHash) ? r : (0, o.F$)(i, t),
                            s = this.get(a);
                        return s || (s = new c({
                            cache: this,
                            queryKey: i,
                            queryHash: a,
                            options: e.defaultQueryOptions(t),
                            state: n,
                            defaultOptions: e.getQueryDefaults(i),
                            meta: t.meta
                        }), this.add(s)), s
                    }, n.add = function(e) {
                        this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                            type: "queryAdded",
                            query: e
                        }))
                    }, n.remove = function(e) {
                        var t = this.queriesMap[e.queryHash];
                        t && (e.destroy(), this.queries = this.queries.filter((function(t) {
                            return t !== e
                        })), t === e && delete this.queriesMap[e.queryHash], this.notify({
                            type: "queryRemoved",
                            query: e
                        }))
                    }, n.clear = function() {
                        var e = this;
                        a.j.batch((function() {
                            e.queries.forEach((function(t) {
                                e.remove(t)
                            }))
                        }))
                    }, n.get = function(e) {
                        return this.queriesMap[e]
                    }, n.getAll = function() {
                        return this.queries
                    }, n.find = function(e, t) {
                        var n = (0, o.b_)(e, t)[0];
                        return "undefined" === typeof n.exact && (n.exact = !0), this.queries.find((function(e) {
                            return (0, o.MK)(n, e)
                        }))
                    }, n.findAll = function(e, t) {
                        var n = (0, o.b_)(e, t)[0];
                        return Object.keys(n).length > 0 ? this.queries.filter((function(e) {
                            return (0, o.MK)(n, e)
                        })) : this.queries
                    }, n.notify = function(e) {
                        var t = this;
                        a.j.batch((function() {
                            t.listeners.forEach((function(t) {
                                t(e)
                            }))
                        }))
                    }, n.onFocus = function() {
                        var e = this;
                        a.j.batch((function() {
                            e.queries.forEach((function(e) {
                                e.onFocus()
                            }))
                        }))
                    }, n.onOnline = function() {
                        var e = this;
                        a.j.batch((function() {
                            e.queries.forEach((function(e) {
                                e.onOnline()
                            }))
                        }))
                    }, t
                }(l.Q),
                d = n("XmiK"),
                p = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this) || this).config = t || {}, n.mutations = [], n.mutationId = 0, n
                    }(0, i.A)(t, e);
                    var n = t.prototype;
                    return n.build = function(e, t, n) {
                        var r = new d.s({
                            mutationCache: this,
                            mutationId: ++this.mutationId,
                            options: e.defaultMutationOptions(t),
                            state: n,
                            defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0,
                            meta: t.meta
                        });
                        return this.add(r), r
                    }, n.add = function(e) {
                        this.mutations.push(e), this.notify(e)
                    }, n.remove = function(e) {
                        this.mutations = this.mutations.filter((function(t) {
                            return t !== e
                        })), e.cancel(), this.notify(e)
                    }, n.clear = function() {
                        var e = this;
                        a.j.batch((function() {
                            e.mutations.forEach((function(t) {
                                e.remove(t)
                            }))
                        }))
                    }, n.getAll = function() {
                        return this.mutations
                    }, n.find = function(e) {
                        return "undefined" === typeof e.exact && (e.exact = !0), this.mutations.find((function(t) {
                            return (0, o.nJ)(e, t)
                        }))
                    }, n.findAll = function(e) {
                        return this.mutations.filter((function(t) {
                            return (0, o.nJ)(e, t)
                        }))
                    }, n.notify = function(e) {
                        var t = this;
                        a.j.batch((function() {
                            t.listeners.forEach((function(t) {
                                t(e)
                            }))
                        }))
                    }, n.onFocus = function() {
                        this.resumePausedMutations()
                    }, n.onOnline = function() {
                        this.resumePausedMutations()
                    }, n.resumePausedMutations = function() {
                        var e = this.mutations.filter((function(e) {
                            return e.state.isPaused
                        }));
                        return a.j.batch((function() {
                            return e.reduce((function(e, t) {
                                return e.then((function() {
                                    return t.continue().catch(o.lQ)
                                }))
                            }), Promise.resolve())
                        }))
                    }, t
                }(l.Q),
                h = n("FtkP"),
                y = n("A99o");

            function v(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function m(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }
            var _ = function() {
                function e(e) {
                    void 0 === e && (e = {}), this.queryCache = e.queryCache || new f, this.mutationCache = e.mutationCache || new p, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
                }
                var t = e.prototype;
                return t.mount = function() {
                    var e = this;
                    this.unsubscribeFocus = h.m.subscribe((function() {
                        h.m.isFocused() && y.t.isOnline() && (e.mutationCache.onFocus(), e.queryCache.onFocus())
                    })), this.unsubscribeOnline = y.t.subscribe((function() {
                        h.m.isFocused() && y.t.isOnline() && (e.mutationCache.onOnline(), e.queryCache.onOnline())
                    }))
                }, t.unmount = function() {
                    var e, t;
                    null == (e = this.unsubscribeFocus) || e.call(this), null == (t = this.unsubscribeOnline) || t.call(this)
                }, t.isFetching = function(e, t) {
                    var n = (0, o.b_)(e, t)[0];
                    return n.fetching = !0, this.queryCache.findAll(n).length
                }, t.isMutating = function(e) {
                    return this.mutationCache.findAll((0, r.A)({}, e, {
                        fetching: !0
                    })).length
                }, t.getQueryData = function(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state.data
                }, t.getQueriesData = function(e) {
                    return this.getQueryCache().findAll(e).map((function(e) {
                        return [e.queryKey, e.state.data]
                    }))
                }, t.setQueryData = function(e, t, n) {
                    var r = (0, o.vh)(e),
                        i = this.defaultQueryOptions(r);
                    return this.queryCache.build(this, i).setData(t, n)
                }, t.setQueriesData = function(e, t, n) {
                    var r = this;
                    return a.j.batch((function() {
                        return r.getQueryCache().findAll(e).map((function(e) {
                            var o = e.queryKey;
                            return [o, r.setQueryData(o, t, n)]
                        }))
                    }))
                }, t.getQueryState = function(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state
                }, t.removeQueries = function(e, t) {
                    var n = (0, o.b_)(e, t)[0],
                        r = this.queryCache;
                    a.j.batch((function() {
                        r.findAll(n).forEach((function(e) {
                            r.remove(e)
                        }))
                    }))
                }, t.resetQueries = function(e, t, n) {
                    var i = this,
                        s = (0, o.b_)(e, t, n),
                        u = s[0],
                        c = s[1],
                        l = this.queryCache,
                        f = (0, r.A)({}, u, {
                            active: !0
                        });
                    return a.j.batch((function() {
                        return l.findAll(u).forEach((function(e) {
                            e.reset()
                        })), i.refetchQueries(f, c)
                    }))
                }, t.cancelQueries = function(e, t, n) {
                    var r = this,
                        i = (0, o.b_)(e, t, n),
                        s = i[0],
                        u = i[1],
                        c = void 0 === u ? {} : u;
                    "undefined" === typeof c.revert && (c.revert = !0);
                    var l = a.j.batch((function() {
                        return r.queryCache.findAll(s).map((function(e) {
                            return e.cancel(c)
                        }))
                    }));
                    return Promise.all(l).then(o.lQ).catch(o.lQ)
                }, t.invalidateQueries = function(e, t, n) {
                    var i, s, u, c = this,
                        l = (0, o.b_)(e, t, n),
                        f = l[0],
                        d = l[1],
                        p = (0, r.A)({}, f, {
                            active: null == (i = null != (s = f.refetchActive) ? s : f.active) || i,
                            inactive: null != (u = f.refetchInactive) && u
                        });
                    return a.j.batch((function() {
                        return c.queryCache.findAll(f).forEach((function(e) {
                            e.invalidate()
                        })), c.refetchQueries(p, d)
                    }))
                }, t.refetchQueries = function(e, t, n) {
                    var i = this,
                        s = (0, o.b_)(e, t, n),
                        u = s[0],
                        c = s[1],
                        l = a.j.batch((function() {
                            return i.queryCache.findAll(u).map((function(e) {
                                return e.fetch(void 0, (0, r.A)({}, c, {
                                    meta: {
                                        refetchPage: null == u ? void 0 : u.refetchPage
                                    }
                                }))
                            }))
                        })),
                        f = Promise.all(l).then(o.lQ);
                    return (null == c ? void 0 : c.throwOnError) || (f = f.catch(o.lQ)), f
                }, t.fetchQuery = function(e, t, n) {
                    var r = (0, o.vh)(e, t, n),
                        i = this.defaultQueryOptions(r);
                    "undefined" === typeof i.retry && (i.retry = !1);
                    var a = this.queryCache.build(this, i);
                    return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data)
                }, t.prefetchQuery = function(e, t, n) {
                    return this.fetchQuery(e, t, n).then(o.lQ).catch(o.lQ)
                }, t.fetchInfiniteQuery = function(e, t, n) {
                    var r = (0, o.vh)(e, t, n);
                    return r.behavior = {
                        onFetch: function(e) {
                            e.fetchFn = function() {
                                var t, n, r, i, a, s, c, l = null == (t = e.fetchOptions) || null == (n = t.meta) ? void 0 : n.refetchPage,
                                    f = null == (r = e.fetchOptions) || null == (i = r.meta) ? void 0 : i.fetchMore,
                                    d = null == f ? void 0 : f.pageParam,
                                    p = "forward" === (null == f ? void 0 : f.direction),
                                    h = "backward" === (null == f ? void 0 : f.direction),
                                    y = (null == (a = e.state.data) ? void 0 : a.pages) || [],
                                    _ = (null == (s = e.state.data) ? void 0 : s.pageParams) || [],
                                    g = (0, o.jY)(),
                                    b = null == g ? void 0 : g.signal,
                                    E = _,
                                    T = !1,
                                    R = e.options.queryFn || function() {
                                        return Promise.reject("Missing queryFn")
                                    },
                                    O = function(e, t, n, r) {
                                        return E = r ? [t].concat(E) : [].concat(E, [t]), r ? [n].concat(e) : [].concat(e, [n])
                                    },
                                    S = function(t, n, r, o) {
                                        if (T) return Promise.reject("Cancelled");
                                        if ("undefined" === typeof r && !n && t.length) return Promise.resolve(t);
                                        var i = {
                                                queryKey: e.queryKey,
                                                signal: b,
                                                pageParam: r,
                                                meta: e.meta
                                            },
                                            a = R(i),
                                            s = Promise.resolve(a).then((function(e) {
                                                return O(t, r, e, o)
                                            }));
                                        return (0, u.dd)(a) && (s.cancel = a.cancel), s
                                    };
                                if (y.length)
                                    if (p) {
                                        var A = "undefined" !== typeof d,
                                            w = A ? d : v(e.options, y);
                                        c = S(y, A, w)
                                    } else if (h) {
                                    var x = "undefined" !== typeof d,
                                        I = x ? d : m(e.options, y);
                                    c = S(y, x, I, !0)
                                } else ! function() {
                                    E = [];
                                    var t = "undefined" === typeof e.options.getNextPageParam,
                                        n = !l || !y[0] || l(y[0], 0, y);
                                    c = n ? S([], t, _[0]) : Promise.resolve(O([], _[0], y[0]));
                                    for (var r = function(n) {
                                            c = c.then((function(r) {
                                                if (!l || !y[n] || l(y[n], n, y)) {
                                                    var o = t ? _[n] : v(e.options, r);
                                                    return S(r, t, o)
                                                }
                                                return Promise.resolve(O(r, _[n], y[n]))
                                            }))
                                        }, o = 1; o < y.length; o++) r(o)
                                }();
                                else c = S([]);
                                var C = c.then((function(e) {
                                    return {
                                        pages: e,
                                        pageParams: E
                                    }
                                }));
                                return C.cancel = function() {
                                    T = !0, null == g || g.abort(), (0, u.dd)(c) && c.cancel()
                                }, C
                            }
                        }
                    }, this.fetchQuery(r)
                }, t.prefetchInfiniteQuery = function(e, t, n) {
                    return this.fetchInfiniteQuery(e, t, n).then(o.lQ).catch(o.lQ)
                }, t.cancelMutations = function() {
                    var e = this,
                        t = a.j.batch((function() {
                            return e.mutationCache.getAll().map((function(e) {
                                return e.cancel()
                            }))
                        }));
                    return Promise.all(t).then(o.lQ).catch(o.lQ)
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
                    var n = this.queryDefaults.find((function(t) {
                        return (0, o.Od)(e) === (0, o.Od)(t.queryKey)
                    }));
                    n ? n.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }, t.getQueryDefaults = function(e) {
                    var t;
                    return e ? null == (t = this.queryDefaults.find((function(t) {
                        return (0, o.Cp)(e, t.queryKey)
                    }))) ? void 0 : t.defaultOptions : void 0
                }, t.setMutationDefaults = function(e, t) {
                    var n = this.mutationDefaults.find((function(t) {
                        return (0, o.Od)(e) === (0, o.Od)(t.mutationKey)
                    }));
                    n ? n.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }, t.getMutationDefaults = function(e) {
                    var t;
                    return e ? null == (t = this.mutationDefaults.find((function(t) {
                        return (0, o.Cp)(e, t.mutationKey)
                    }))) ? void 0 : t.defaultOptions : void 0
                }, t.defaultQueryOptions = function(e) {
                    if (null == e ? void 0 : e._defaulted) return e;
                    var t = (0, r.A)({}, this.defaultOptions.queries, this.getQueryDefaults(null == e ? void 0 : e.queryKey), e, {
                        _defaulted: !0
                    });
                    return !t.queryHash && t.queryKey && (t.queryHash = (0, o.F$)(t.queryKey, t)), t
                }, t.defaultQueryObserverOptions = function(e) {
                    return this.defaultQueryOptions(e)
                }, t.defaultMutationOptions = function(e) {
                    return (null == e ? void 0 : e._defaulted) ? e : (0, r.A)({}, this.defaultOptions.mutations, this.getMutationDefaults(null == e ? void 0 : e.mutationKey), e, {
                        _defaulted: !0
                    })
                }, t.clear = function() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }, e
            }()
        },
        "2N81": (e, t, n) => {
            "use strict";
            n.d(t, {
                dd: () => s,
                eJ: () => l,
                wm: () => c
            });
            var r = n("FtkP"),
                o = n("A99o"),
                i = n("iLh5");

            function a(e) {
                return Math.min(1e3 * Math.pow(2, e), 3e4)
            }

            function s(e) {
                return "function" === typeof(null == e ? void 0 : e.cancel)
            }
            var u = function(e) {
                this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
            };

            function c(e) {
                return e instanceof u
            }
            var l = function(e) {
                var t, n, c, l, f = this,
                    d = !1;
                this.abort = e.abort, this.cancel = function(e) {
                    return null == t ? void 0 : t(e)
                }, this.cancelRetry = function() {
                    d = !0
                }, this.continueRetry = function() {
                    d = !1
                }, this.continue = function() {
                    return null == n ? void 0 : n()
                }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise((function(e, t) {
                    c = e, l = t
                }));
                var p = function(t) {
                        f.isResolved || (f.isResolved = !0, null == e.onSuccess || e.onSuccess(t), null == n || n(), c(t))
                    },
                    h = function(t) {
                        f.isResolved || (f.isResolved = !0, null == e.onError || e.onError(t), null == n || n(), l(t))
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
                            if (!f.isResolved && (h(new u(e)), null == f.abort || f.abort(), s(l))) try {
                                l.cancel()
                            } catch (t) {}
                        }, f.isTransportCancelable = s(l), Promise.resolve(l).then(p).catch((function(t) {
                            var s, u;
                            if (!f.isResolved) {
                                var l = null != (s = e.retry) ? s : 3,
                                    p = null != (u = e.retryDelay) ? u : a,
                                    y = "function" === typeof p ? p(f.failureCount, t) : p,
                                    v = !0 === l || "number" === typeof l && f.failureCount < l || "function" === typeof l && l(f.failureCount, t);
                                !d && v ? (f.failureCount++, null == e.onFail || e.onFail(f.failureCount, t), (0, i.yy)(y).then((function() {
                                    if (!r.m.isFocused() || !o.t.isOnline()) return new Promise((function(t) {
                                        n = t, f.isPaused = !0, null == e.onPause || e.onPause()
                                    })).then((function() {
                                        n = void 0, f.isPaused = !1, null == e.onContinue || e.onContinue()
                                    }))
                                })).then((function() {
                                    d ? h(t) : c()
                                }))) : h(t)
                            }
                        }))
                    }
                }()
            }
        },
        "z+I1": (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => r
            });
            var r = function() {
                function e() {
                    this.listeners = []
                }
                var t = e.prototype;
                return t.subscribe = function(e) {
                    var t = this,
                        n = e || function() {};
                    return this.listeners.push(n), this.onSubscribe(),
                        function() {
                            t.listeners = t.listeners.filter((function(e) {
                                return e !== n
                            })), t.onUnsubscribe()
                        }
                }, t.hasListeners = function() {
                    return this.listeners.length > 0
                }, t.onSubscribe = function() {}, t.onUnsubscribe = function() {}, e
            }()
        },
        "3EYX": () => {},
        iLh5: (e, t, n) => {
            "use strict";
            n.d(t, {
                BH: () => g,
                Cp: () => m,
                F$: () => y,
                G6: () => S,
                GR: () => f,
                HN: () => u,
                MK: () => p,
                Od: () => v,
                S$: () => o,
                Zw: () => a,
                b_: () => d,
                f8: () => b,
                gn: () => s,
                j3: () => c,
                jY: () => A,
                lQ: () => i,
                nJ: () => h,
                vh: () => l,
                yy: () => O
            });
            var r = n("ga4H"),
                o = "undefined" === typeof window;

            function i() {}

            function a(e, t) {
                return "function" === typeof e ? e(t) : e
            }

            function s(e) {
                return "number" === typeof e && e >= 0 && e !== 1 / 0
            }

            function u(e) {
                return Array.isArray(e) ? e : [e]
            }

            function c(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function l(e, t, n) {
                return R(e) ? "function" === typeof t ? (0, r.A)({}, n, {
                    queryKey: e,
                    queryFn: t
                }) : (0, r.A)({}, t, {
                    queryKey: e
                }) : e
            }

            function f(e, t, n) {
                return R(e) ? "function" === typeof t ? (0, r.A)({}, n, {
                    mutationKey: e,
                    mutationFn: t
                }) : (0, r.A)({}, t, {
                    mutationKey: e
                }) : "function" === typeof e ? (0, r.A)({}, t, {
                    mutationFn: e
                }) : (0, r.A)({}, e)
            }

            function d(e, t, n) {
                return R(e) ? [(0, r.A)({}, t, {
                    queryKey: e
                }), n] : [e || {}, t]
            }

            function p(e, t) {
                var n = e.active,
                    r = e.exact,
                    o = e.fetching,
                    i = e.inactive,
                    a = e.predicate,
                    s = e.queryKey,
                    u = e.stale;
                if (R(s))
                    if (r) {
                        if (t.queryHash !== y(s, t.options)) return !1
                    } else if (!m(t.queryKey, s)) return !1;
                var c = function(e, t) {
                    return !0 === e && !0 === t || null == e && null == t ? "all" : !1 === e && !1 === t ? "none" : (null != e ? e : !t) ? "active" : "inactive"
                }(n, i);
                if ("none" === c) return !1;
                if ("all" !== c) {
                    var l = t.isActive();
                    if ("active" === c && !l) return !1;
                    if ("inactive" === c && l) return !1
                }
                return ("boolean" !== typeof u || t.isStale() === u) && (("boolean" !== typeof o || t.isFetching() === o) && !(a && !a(t)))
            }

            function h(e, t) {
                var n = e.exact,
                    r = e.fetching,
                    o = e.predicate,
                    i = e.mutationKey;
                if (R(i)) {
                    if (!t.options.mutationKey) return !1;
                    if (n) {
                        if (v(t.options.mutationKey) !== v(i)) return !1
                    } else if (!m(t.options.mutationKey, i)) return !1
                }
                return ("boolean" !== typeof r || "loading" === t.state.status === r) && !(o && !o(t))
            }

            function y(e, t) {
                return ((null == t ? void 0 : t.queryKeyHashFn) || v)(e)
            }

            function v(e) {
                var t, n = u(e);
                return t = n, JSON.stringify(t, (function(e, t) {
                    return E(t) ? Object.keys(t).sort().reduce((function(e, n) {
                        return e[n] = t[n], e
                    }), {}) : t
                }))
            }

            function m(e, t) {
                return _(u(e), u(t))
            }

            function _(e, t) {
                return e === t || typeof e === typeof t && (!(!e || !t || "object" !== typeof e || "object" !== typeof t) && !Object.keys(t).some((function(n) {
                    return !_(e[n], t[n])
                })))
            }

            function g(e, t) {
                if (e === t) return e;
                var n = Array.isArray(e) && Array.isArray(t);
                if (n || E(e) && E(t)) {
                    for (var r = n ? e.length : Object.keys(e).length, o = n ? t : Object.keys(t), i = o.length, a = n ? [] : {}, s = 0, u = 0; u < i; u++) {
                        var c = n ? u : o[u];
                        a[c] = g(e[c], t[c]), a[c] === e[c] && s++
                    }
                    return r === i && s === r ? e : a
                }
                return t
            }

            function b(e, t) {
                if (e && !t || t && !e) return !1;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function E(e) {
                if (!T(e)) return !1;
                var t = e.constructor;
                if ("undefined" === typeof t) return !0;
                var n = t.prototype;
                return !!T(n) && !!n.hasOwnProperty("isPrototypeOf")
            }

            function T(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function R(e) {
                return "string" === typeof e || Array.isArray(e)
            }

            function O(e) {
                return new Promise((function(t) {
                    setTimeout(t, e)
                }))
            }

            function S(e) {
                Promise.resolve().then(e).catch((function(e) {
                    return setTimeout((function() {
                        throw e
                    }))
                }))
            }

            function A() {
                if ("function" === typeof AbortController) return new AbortController
            }
        },
        "4hgs": (e, t, n) => {
            "use strict";
            n.d(t, {
                QueryClient: () => r.QueryClient,
                QueryClientProvider: () => o.QueryClientProvider,
                useMutation: () => o.useMutation,
                useQuery: () => o.useQuery,
                useQueryClient: () => o.useQueryClient
            });
            var r = n("vpTH");
            n.o(r, "QueryClientProvider") && n.d(t, {
                QueryClientProvider: function() {
                    return r.QueryClientProvider
                }
            }), n.o(r, "useMutation") && n.d(t, {
                useMutation: function() {
                    return r.useMutation
                }
            }), n.o(r, "useQuery") && n.d(t, {
                useQuery: function() {
                    return r.useQuery
                }
            }), n.o(r, "useQueryClient") && n.d(t, {
                useQueryClient: function() {
                    return r.useQueryClient
                }
            });
            var o = n("rS2p")
        },
        rS2p: (e, t, n) => {
            "use strict";
            n.d(t, {
                QueryClientProvider: () => h,
                useMutation: () => T,
                useQuery: () => D,
                useQueryClient: () => p
            });
            var r = n("ag8D"),
                o = n("hTvQ"),
                i = n.n(o)().unstable_batchedUpdates;
            r.j.setBatchNotifyFunction(i);
            var a = n("dZ8p"),
                s = console;
            (0, a.B)(s);
            var u = n("DTvD"),
                c = n.n(u),
                l = c().createContext(void 0),
                f = c().createContext(!1);

            function d(e) {
                return e && "undefined" !== typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = l), window.ReactQueryClientContext) : l
            }
            var p = function() {
                    var e = c().useContext(d(c().useContext(f)));
                    if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                h = function(e) {
                    var t = e.client,
                        n = e.contextSharing,
                        r = void 0 !== n && n,
                        o = e.children;
                    c().useEffect((function() {
                        return t.mount(),
                            function() {
                                t.unmount()
                            }
                    }), [t]);
                    var i = d(r);
                    return c().createElement(f.Provider, {
                        value: r
                    }, c().createElement(i.Provider, {
                        value: t
                    }, o))
                },
                y = n("ga4H"),
                v = n("iLh5"),
                m = n("lAeT"),
                _ = n("XmiK"),
                g = n("z+I1"),
                b = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this) || this).client = t, r.setOptions(n), r.bindMethods(), r.updateResult(), r
                    }(0, m.A)(t, e);
                    var n = t.prototype;
                    return n.bindMethods = function() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }, n.setOptions = function(e) {
                        this.options = this.client.defaultMutationOptions(e)
                    }, n.onUnsubscribe = function() {
                        var e;
                        this.listeners.length || (null == (e = this.currentMutation) || e.removeObserver(this))
                    }, n.onMutationUpdate = function(e) {
                        this.updateResult();
                        var t = {
                            listeners: !0
                        };
                        "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                    }, n.getCurrentResult = function() {
                        return this.currentResult
                    }, n.reset = function() {
                        this.currentMutation = void 0, this.updateResult(), this.notify({
                            listeners: !0
                        })
                    }, n.mutate = function(e, t) {
                        return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, (0, y.A)({}, this.options, {
                            variables: "undefined" !== typeof e ? e : this.options.variables
                        })), this.currentMutation.addObserver(this), this.currentMutation.execute()
                    }, n.updateResult = function() {
                        var e = this.currentMutation ? this.currentMutation.state : (0, _.$)(),
                            t = (0, y.A)({}, e, {
                                isLoading: "loading" === e.status,
                                isSuccess: "success" === e.status,
                                isError: "error" === e.status,
                                isIdle: "idle" === e.status,
                                mutate: this.mutate,
                                reset: this.reset
                            });
                        this.currentResult = t
                    }, n.notify = function(e) {
                        var t = this;
                        r.j.batch((function() {
                            t.mutateOptions && (e.onSuccess ? (null == t.mutateOptions.onSuccess || t.mutateOptions.onSuccess(t.currentResult.data, t.currentResult.variables, t.currentResult.context), null == t.mutateOptions.onSettled || t.mutateOptions.onSettled(t.currentResult.data, null, t.currentResult.variables, t.currentResult.context)) : e.onError && (null == t.mutateOptions.onError || t.mutateOptions.onError(t.currentResult.error, t.currentResult.variables, t.currentResult.context), null == t.mutateOptions.onSettled || t.mutateOptions.onSettled(void 0, t.currentResult.error, t.currentResult.variables, t.currentResult.context))), e.listeners && t.listeners.forEach((function(e) {
                                e(t.currentResult)
                            }))
                        }))
                    }, t
                }(g.Q);

            function E(e, t, n) {
                return "function" === typeof t ? t.apply(void 0, n) : "boolean" === typeof t ? t : !!e
            }

            function T(e, t, n) {
                var o = c().useRef(!1),
                    i = c().useState(0)[1],
                    a = (0, v.GR)(e, t, n),
                    s = p(),
                    u = c().useRef();
                u.current ? u.current.setOptions(a) : u.current = new b(s, a);
                var l = u.current.getCurrentResult();
                c().useEffect((function() {
                    o.current = !0;
                    var e = u.current.subscribe(r.j.batchCalls((function() {
                        o.current && i((function(e) {
                            return e + 1
                        }))
                    })));
                    return function() {
                        o.current = !1, e()
                    }
                }), []);
                var f = c().useCallback((function(e, t) {
                    u.current.mutate(e, t).catch(v.lQ)
                }), []);
                if (l.error && E(void 0, u.current.options.useErrorBoundary, [l.error])) throw l.error;
                return (0, y.A)({}, l, {
                    mutate: f,
                    mutateAsync: l.mutate
                })
            }
            var R = n("FtkP"),
                O = n("2N81"),
                S = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this) || this).client = t, r.options = n, r.trackedProps = [], r.previousSelectError = null, r.bindMethods(), r.setOptions(n), r
                    }(0, m.A)(t, e);
                    var n = t.prototype;
                    return n.bindMethods = function() {
                        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                    }, n.onSubscribe = function() {
                        1 === this.listeners.length && (this.currentQuery.addObserver(this), A(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                    }, n.onUnsubscribe = function() {
                        this.listeners.length || this.destroy()
                    }, n.shouldFetchOnReconnect = function() {
                        return e = this.currentQuery, !1 !== (t = this.options).enabled && ("always" === t.refetchOnReconnect || !1 !== t.refetchOnReconnect && x(e, t));
                        var e, t
                    }, n.shouldFetchOnWindowFocus = function() {
                        return e = this.currentQuery, !1 !== (t = this.options).enabled && ("always" === t.refetchOnWindowFocus || !1 !== t.refetchOnWindowFocus && x(e, t));
                        var e, t
                    }, n.destroy = function() {
                        this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this)
                    }, n.setOptions = function(e, t) {
                        var n = this.options,
                            r = this.currentQuery;
                        if (this.options = this.client.defaultQueryObserverOptions(e), "undefined" !== typeof this.options.enabled && "boolean" !== typeof this.options.enabled) throw new Error("Expected enabled to be a boolean");
                        this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
                        var o = this.hasListeners();
                        o && w(this.currentQuery, r, this.options, n) && this.executeFetch(), this.updateResult(t), !o || this.currentQuery === r && this.options.enabled === n.enabled && this.options.staleTime === n.staleTime || this.updateStaleTimeout();
                        var i = this.computeRefetchInterval();
                        !o || this.currentQuery === r && this.options.enabled === n.enabled && i === this.currentRefetchInterval || this.updateRefetchInterval(i)
                    }, n.getOptimisticResult = function(e) {
                        var t = this.client.defaultQueryObserverOptions(e),
                            n = this.client.getQueryCache().build(this.client, t);
                        return this.createResult(n, t)
                    }, n.getCurrentResult = function() {
                        return this.currentResult
                    }, n.trackResult = function(e, t) {
                        var n = this,
                            r = {},
                            o = function(e) {
                                n.trackedProps.includes(e) || n.trackedProps.push(e)
                            };
                        return Object.keys(e).forEach((function(t) {
                            Object.defineProperty(r, t, {
                                configurable: !1,
                                enumerable: !0,
                                get: function() {
                                    return o(t), e[t]
                                }
                            })
                        })), (t.useErrorBoundary || t.suspense) && o("error"), r
                    }, n.getNextResult = function(e) {
                        var t = this;
                        return new Promise((function(n, r) {
                            var o = t.subscribe((function(t) {
                                t.isFetching || (o(), t.isError && (null == e ? void 0 : e.throwOnError) ? r(t.error) : n(t))
                            }))
                        }))
                    }, n.getCurrentQuery = function() {
                        return this.currentQuery
                    }, n.remove = function() {
                        this.client.getQueryCache().remove(this.currentQuery)
                    }, n.refetch = function(e) {
                        return this.fetch((0, y.A)({}, e, {
                            meta: {
                                refetchPage: null == e ? void 0 : e.refetchPage
                            }
                        }))
                    }, n.fetchOptimistic = function(e) {
                        var t = this,
                            n = this.client.defaultQueryObserverOptions(e),
                            r = this.client.getQueryCache().build(this.client, n);
                        return r.fetch().then((function() {
                            return t.createResult(r, n)
                        }))
                    }, n.fetch = function(e) {
                        var t = this;
                        return this.executeFetch(e).then((function() {
                            return t.updateResult(), t.currentResult
                        }))
                    }, n.executeFetch = function(e) {
                        this.updateQuery();
                        var t = this.currentQuery.fetch(this.options, e);
                        return (null == e ? void 0 : e.throwOnError) || (t = t.catch(v.lQ)), t
                    }, n.updateStaleTimeout = function() {
                        var e = this;
                        if (this.clearStaleTimeout(), !v.S$ && !this.currentResult.isStale && (0, v.gn)(this.options.staleTime)) {
                            var t = (0, v.j3)(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
                            this.staleTimeoutId = setTimeout((function() {
                                e.currentResult.isStale || e.updateResult()
                            }), t)
                        }
                    }, n.computeRefetchInterval = function() {
                        var e;
                        return "function" === typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                    }, n.updateRefetchInterval = function(e) {
                        var t = this;
                        this.clearRefetchInterval(), this.currentRefetchInterval = e, !v.S$ && !1 !== this.options.enabled && (0, v.gn)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval((function() {
                            (t.options.refetchIntervalInBackground || R.m.isFocused()) && t.executeFetch()
                        }), this.currentRefetchInterval))
                    }, n.updateTimers = function() {
                        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                    }, n.clearTimers = function() {
                        this.clearStaleTimeout(), this.clearRefetchInterval()
                    }, n.clearStaleTimeout = function() {
                        clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0
                    }, n.clearRefetchInterval = function() {
                        clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0
                    }, n.createResult = function(e, t) {
                        var n, r = this.currentQuery,
                            o = this.options,
                            i = this.currentResult,
                            s = this.currentResultState,
                            u = this.currentResultOptions,
                            c = e !== r,
                            l = c ? e.state : this.currentQueryInitialState,
                            f = c ? this.currentResult : this.previousQueryResult,
                            d = e.state,
                            p = d.dataUpdatedAt,
                            h = d.error,
                            y = d.errorUpdatedAt,
                            m = d.isFetching,
                            _ = d.status,
                            g = !1,
                            b = !1;
                        if (t.optimisticResults) {
                            var E = this.hasListeners(),
                                T = !E && A(e, t),
                                R = E && w(e, r, t, o);
                            (T || R) && (m = !0, p || (_ = "loading"))
                        }
                        if (t.keepPreviousData && !d.dataUpdateCount && (null == f ? void 0 : f.isSuccess) && "error" !== _) n = f.data, p = f.dataUpdatedAt, _ = f.status, g = !0;
                        else if (t.select && "undefined" !== typeof d.data) {
                            var O;
                            if (i && d.data === (null == s ? void 0 : s.data) && t.select === (null == (O = this.previousSelect) ? void 0 : O.fn) && !this.previousSelectError) n = this.previousSelect.result;
                            else try {
                                n = t.select(d.data), !1 !== t.structuralSharing && (n = (0, v.BH)(null == i ? void 0 : i.data, n)), this.previousSelect = {
                                    fn: t.select,
                                    result: n
                                }, this.previousSelectError = null
                            } catch (I) {
                                (0, a.t)().error(I), h = I, this.previousSelectError = I, y = Date.now(), _ = "error"
                            }
                        } else n = d.data;
                        if ("undefined" !== typeof t.placeholderData && "undefined" === typeof n && ("loading" === _ || "idle" === _)) {
                            var S;
                            if ((null == i ? void 0 : i.isPlaceholderData) && t.placeholderData === (null == u ? void 0 : u.placeholderData)) S = i.data;
                            else if (S = "function" === typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && "undefined" !== typeof S) try {
                                S = t.select(S), !1 !== t.structuralSharing && (S = (0, v.BH)(null == i ? void 0 : i.data, S)), this.previousSelectError = null
                            } catch (I) {
                                (0, a.t)().error(I), h = I, this.previousSelectError = I, y = Date.now(), _ = "error"
                            }
                            "undefined" !== typeof S && (_ = "success", n = S, b = !0)
                        }
                        return {
                            status: _,
                            isLoading: "loading" === _,
                            isSuccess: "success" === _,
                            isError: "error" === _,
                            isIdle: "idle" === _,
                            data: n,
                            dataUpdatedAt: p,
                            error: h,
                            errorUpdatedAt: y,
                            failureCount: d.fetchFailureCount,
                            isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
                            isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
                            isFetching: m,
                            isRefetching: m && "loading" !== _,
                            isLoadingError: "error" === _ && 0 === d.dataUpdatedAt,
                            isPlaceholderData: b,
                            isPreviousData: g,
                            isRefetchError: "error" === _ && 0 !== d.dataUpdatedAt,
                            isStale: x(e, t),
                            refetch: this.refetch,
                            remove: this.remove
                        }
                    }, n.shouldNotifyListeners = function(e, t) {
                        if (!t) return !0;
                        var n = this.options,
                            r = n.notifyOnChangeProps,
                            o = n.notifyOnChangePropsExclusions;
                        if (!r && !o) return !0;
                        if ("tracked" === r && !this.trackedProps.length) return !0;
                        var i = "tracked" === r ? this.trackedProps : r;
                        return Object.keys(e).some((function(n) {
                            var r = n,
                                a = e[r] !== t[r],
                                s = null == i ? void 0 : i.some((function(e) {
                                    return e === n
                                })),
                                u = null == o ? void 0 : o.some((function(e) {
                                    return e === n
                                }));
                            return a && !u && (!i || s)
                        }))
                    }, n.updateResult = function(e) {
                        var t = this.currentResult;
                        if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !(0, v.f8)(this.currentResult, t)) {
                            var n = {
                                cache: !0
                            };
                            !1 !== (null == e ? void 0 : e.listeners) && this.shouldNotifyListeners(this.currentResult, t) && (n.listeners = !0), this.notify((0, y.A)({}, n, e))
                        }
                    }, n.updateQuery = function() {
                        var e = this.client.getQueryCache().build(this.client, this.options);
                        if (e !== this.currentQuery) {
                            var t = this.currentQuery;
                            this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                        }
                    }, n.onQueryUpdate = function(e) {
                        var t = {};
                        "success" === e.type ? t.onSuccess = !0 : "error" !== e.type || (0, O.wm)(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                    }, n.notify = function(e) {
                        var t = this;
                        r.j.batch((function() {
                            e.onSuccess ? (null == t.options.onSuccess || t.options.onSuccess(t.currentResult.data), null == t.options.onSettled || t.options.onSettled(t.currentResult.data, null)) : e.onError && (null == t.options.onError || t.options.onError(t.currentResult.error), null == t.options.onSettled || t.options.onSettled(void 0, t.currentResult.error)), e.listeners && t.listeners.forEach((function(e) {
                                e(t.currentResult)
                            })), e.cache && t.client.getQueryCache().notify({
                                query: t.currentQuery,
                                type: "observerResultsUpdated"
                            })
                        }))
                    }, t
                }(g.Q);

            function A(e, t) {
                return function(e, t) {
                    return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount)
                }(e, t) || function(e, t) {
                    return !1 !== t.enabled && e.state.dataUpdatedAt > 0 && ("always" === t.refetchOnMount || !1 !== t.refetchOnMount && x(e, t))
                }(e, t)
            }

            function w(e, t, n, r) {
                return !1 !== n.enabled && (e !== t || !1 === r.enabled) && (!n.suspense || "error" !== e.state.status) && x(e, n)
            }

            function x(e, t) {
                return e.isStaleByTime(t.staleTime)
            }

            function I() {
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
            var C = c().createContext(I()),
                P = function() {
                    return c().useContext(C)
                };

            function D(e, t, n) {
                return function(e, t) {
                    var n = c().useRef(!1),
                        o = c().useState(0)[1],
                        i = p(),
                        a = P(),
                        s = i.defaultQueryObserverOptions(e);
                    s.optimisticResults = !0, s.onError && (s.onError = r.j.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = r.j.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = r.j.batchCalls(s.onSettled)), s.suspense && ("number" !== typeof s.staleTime && (s.staleTime = 1e3), 0 === s.cacheTime && (s.cacheTime = 1)), (s.suspense || s.useErrorBoundary) && (a.isReset() || (s.retryOnMount = !1));
                    var u = c().useState((function() {
                            return new t(i, s)
                        }))[0],
                        l = u.getOptimisticResult(s);
                    if (c().useEffect((function() {
                            n.current = !0, a.clearReset();
                            var e = u.subscribe(r.j.batchCalls((function() {
                                n.current && o((function(e) {
                                    return e + 1
                                }))
                            })));
                            return u.updateResult(),
                                function() {
                                    n.current = !1, e()
                                }
                        }), [a, u]), c().useEffect((function() {
                            u.setOptions(s, {
                                listeners: !1
                            })
                        }), [s, u]), s.suspense && l.isLoading) throw u.fetchOptimistic(s).then((function(e) {
                        var t = e.data;
                        null == s.onSuccess || s.onSuccess(t), null == s.onSettled || s.onSettled(t, null)
                    })).catch((function(e) {
                        a.clearReset(), null == s.onError || s.onError(e), null == s.onSettled || s.onSettled(void 0, e)
                    }));
                    if (l.isError && !a.isReset() && !l.isFetching && E(s.suspense, s.useErrorBoundary, [l.error, u.getCurrentQuery()])) throw l.error;
                    return "tracked" === s.notifyOnChangeProps && (l = u.trackResult(l, s)), l
                }((0, v.vh)(e, t, n), S)
            }
        },
        S9gL: function(e, t, n) {
            ! function() {
                var t;
                e.exports = (t = n("DTvD"), function(e) {
                    function t(r) {
                        if (n[r]) return n[r].exports;
                        var o = n[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.d = function(e, n, r) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(n, "a", n), n
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 7)
                }([function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        return u(e) || s(e, t) || i(e, t) || o()
                    }

                    function o() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    function i(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function s(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                            } catch (u) {
                                o = !0, i = u
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }

                    function u(e) {
                        if (Array.isArray(e)) return e
                    }
                    var c = n(1),
                        l = n.n(c),
                        f = n(8),
                        d = n.n(f),
                        p = n(2),
                        h = n(10),
                        y = n.n(h),
                        v = n(3),
                        m = n(6),
                        _ = function(e) {
                            return e.query || Object(v.a)(e)
                        },
                        g = function(e) {
                            if (!e) return null;
                            var t = Object.keys(e);
                            return 0 === t.length ? null : t.reduce((function(t, n) {
                                return t[Object(p.a)(n)] = e[n], t
                            }), {})
                        },
                        b = function() {
                            var e = l.a.useRef(!1);
                            return l.a.useEffect((function() {
                                e.current = !0
                            }), []), e.current
                        },
                        E = function(e) {
                            var t = l.a.useContext(m.a),
                                n = function() {
                                    return g(e) || g(t)
                                },
                                o = r(l.a.useState(n), 2),
                                i = o[0],
                                a = o[1];
                            return l.a.useEffect((function() {
                                var e = n();
                                y()(i, e) || a(e)
                            }), [e, t]), i
                        },
                        T = function(e) {
                            var t = function() {
                                    return _(e)
                                },
                                n = r(l.a.useState(t), 2),
                                o = n[0],
                                i = n[1];
                            return l.a.useEffect((function() {
                                var e = t();
                                o !== e && i(e)
                            }), [e]), o
                        },
                        R = function(e, t) {
                            var n = function() {
                                    return d()(e, t || {}, !!t)
                                },
                                o = r(l.a.useState(n), 2),
                                i = o[0],
                                a = o[1],
                                s = b();
                            return l.a.useEffect((function() {
                                return s && a(n()),
                                    function() {
                                        i.dispose()
                                    }
                            }), [e, t]), i
                        },
                        O = function(e) {
                            var t = r(l.a.useState(e.matches), 2),
                                n = t[0],
                                o = t[1];
                            return l.a.useEffect((function() {
                                var t = function() {
                                    o(e.matches)
                                };
                                return e.addListener(t), t(),
                                    function() {
                                        e.removeListener(t)
                                    }
                            }), [e]), n
                        },
                        S = function(e, t, n) {
                            var r = E(t),
                                o = T(e);
                            if (!o) throw new Error("Invalid or missing MediaQuery!");
                            var i = R(o, r),
                                a = O(i),
                                s = b();
                            return l.a.useEffect((function() {
                                s && n && n(a)
                            }), [a]), a
                        };
                    t.a = S
                }, function(e, n) {
                    e.exports = t
                }, function(e, t, n) {
                    "use strict";

                    function r(e) {
                        return "-" + e.toLowerCase()
                    }

                    function o(e) {
                        if (s.hasOwnProperty(e)) return s[e];
                        var t = e.replace(i, r);
                        return s[e] = a.test(t) ? "-" + t : t
                    }
                    var i = /[A-Z]/g,
                        a = /^ms-/,
                        s = {};
                    t.a = o
                }, function(e, t, n) {
                    "use strict";
                    var r = n(2),
                        o = n(11),
                        i = function(e) {
                            return "not ".concat(e)
                        },
                        a = function(e, t) {
                            var n = Object(r.a)(e);
                            return "number" == typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? i(n) : "(".concat(n, ": ").concat(t, ")")
                        },
                        s = function(e) {
                            return e.join(" and ")
                        },
                        u = function(e) {
                            var t = [];
                            return Object.keys(o.a.all).forEach((function(n) {
                                var r = e[n];
                                null != r && t.push(a(n, r))
                            })), s(t)
                        };
                    t.a = u
                }, function(e, t, n) {
                    "use strict";
                    e.exports = n(13)
                }, function(e, t, n) {
                    "use strict";
                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                }, function(e, t, n) {
                    "use strict";
                    var r = n(1),
                        o = n.n(r).a.createContext();
                    t.a = o
                }, function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(0),
                        o = n(17),
                        i = n(3),
                        a = n(6);
                    n.d(t, "default", (function() {
                        return o.a
                    })), n.d(t, "useMediaQuery", (function() {
                        return r.a
                    })), n.d(t, "toQuery", (function() {
                        return i.a
                    })), n.d(t, "Context", (function() {
                        return a.a
                    }))
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t, n) {
                        function r(e) {
                            l && l.addListener(e)
                        }

                        function o(e) {
                            l && l.removeListener(e)
                        }

                        function s(e) {
                            c.matches = e.matches, c.media = e.media
                        }

                        function u() {
                            l && l.removeListener(s)
                        }
                        var c = this;
                        if (a && !n) {
                            var l = a.call(window, e);
                            this.matches = l.matches, this.media = l.media, l.addListener(s)
                        } else this.matches = i(e, t), this.media = e;
                        this.addListener = r, this.removeListener = o, this.dispose = u
                    }

                    function o(e, t, n) {
                        return new r(e, t, n)
                    }
                    var i = n(9).match,
                        a = "undefined" != typeof window ? window.matchMedia : null;
                    e.exports = o
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        return o(e).some((function(e) {
                            var n = e.inverse,
                                r = "all" === e.type || t.type === e.type;
                            if (r && n || !r && !n) return !1;
                            var o = e.expressions.every((function(e) {
                                var n = e.feature,
                                    r = e.modifier,
                                    o = e.value,
                                    u = t[n];
                                if (!u) return !1;
                                switch (n) {
                                    case "orientation":
                                    case "scan":
                                        return u.toLowerCase() === o.toLowerCase();
                                    case "width":
                                    case "height":
                                    case "device-width":
                                    case "device-height":
                                        o = s(o), u = s(u);
                                        break;
                                    case "resolution":
                                        o = a(o), u = a(u);
                                        break;
                                    case "aspect-ratio":
                                    case "device-aspect-ratio":
                                    case "device-pixel-ratio":
                                        o = i(o), u = i(u);
                                        break;
                                    case "grid":
                                    case "color":
                                    case "color-index":
                                    case "monochrome":
                                        o = parseInt(o, 10) || 1, u = parseInt(u, 10) || 0
                                }
                                switch (r) {
                                    case "min":
                                        return u >= o;
                                    case "max":
                                        return u <= o;
                                    default:
                                        return u === o
                                }
                            }));
                            return o && !n || !o && n
                        }))
                    }

                    function o(e) {
                        return e.split(",").map((function(e) {
                            var t = (e = e.trim()).match(u),
                                n = t[1],
                                r = t[2],
                                o = t[3] || "",
                                i = {};
                            return i.inverse = !!n && "not" === n.toLowerCase(), i.type = r ? r.toLowerCase() : "all", o = o.match(/\([^\)]+\)/g) || [], i.expressions = o.map((function(e) {
                                var t = e.match(c),
                                    n = t[1].toLowerCase().match(l);
                                return {
                                    modifier: n[1],
                                    feature: n[2],
                                    value: t[2]
                                }
                            })), i
                        }))
                    }

                    function i(e) {
                        var t, n = Number(e);
                        return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n
                    }

                    function a(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(d)[1]) {
                            case "dpcm":
                                return t / 2.54;
                            case "dppx":
                                return 96 * t;
                            default:
                                return t
                        }
                    }

                    function s(e) {
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
                    t.match = r, t.parse = o;
                    var u = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                        c = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                        l = /^(?:(min|max)-)?(.+)/,
                        f = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                        d = /(dpi|dpcm|dppx)?$/
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        if (e === t) return !0;
                        if (!e || !t) return !1;
                        var n = Object.keys(e),
                            r = Object.keys(t),
                            o = n.length;
                        if (r.length !== o) return !1;
                        for (var i = 0; i < o; i++) {
                            var a = n[i];
                            if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
                        }
                        return !0
                    }
                    e.exports = r
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function o(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? r(Object(n), !0).forEach((function(t) {
                                i(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }

                    function i(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    var a = n(12),
                        s = n.n(a),
                        u = s.a.oneOfType([s.a.string, s.a.number]),
                        c = {
                            orientation: s.a.oneOf(["portrait", "landscape"]),
                            scan: s.a.oneOf(["progressive", "interlace"]),
                            aspectRatio: s.a.string,
                            deviceAspectRatio: s.a.string,
                            height: u,
                            deviceHeight: u,
                            width: u,
                            deviceWidth: u,
                            color: s.a.bool,
                            colorIndex: s.a.bool,
                            monochrome: s.a.bool,
                            resolution: u
                        },
                        l = o({
                            minAspectRatio: s.a.string,
                            maxAspectRatio: s.a.string,
                            minDeviceAspectRatio: s.a.string,
                            maxDeviceAspectRatio: s.a.string,
                            minHeight: u,
                            maxHeight: u,
                            minDeviceHeight: u,
                            maxDeviceHeight: u,
                            minWidth: u,
                            maxWidth: u,
                            minDeviceWidth: u,
                            maxDeviceWidth: u,
                            minColor: s.a.number,
                            maxColor: s.a.number,
                            minColorIndex: s.a.number,
                            maxColorIndex: s.a.number,
                            minMonochrome: s.a.number,
                            maxMonochrome: s.a.number,
                            minResolution: u,
                            maxResolution: u
                        }, c),
                        f = {
                            all: s.a.bool,
                            grid: s.a.bool,
                            aural: s.a.bool,
                            braille: s.a.bool,
                            handheld: s.a.bool,
                            print: s.a.bool,
                            projection: s.a.bool,
                            screen: s.a.bool,
                            tty: s.a.bool,
                            tv: s.a.bool,
                            embossed: s.a.bool
                        },
                        d = o(o({}, f), l);
                    c.type = Object.keys(f), t.a = {
                        all: d,
                        types: f,
                        matchers: c,
                        features: l
                    }
                }, function(e, t, n) {
                    var r = n(4);
                    e.exports = n(14)(r.isElement, !0)
                }, function(e, t, n) {
                    "use strict";
                    ! function() {
                        function e(e) {
                            return "string" == typeof e || "function" == typeof e || e === g || e === S || e === E || e === b || e === w || e === x || "object" == typeof e && null !== e && (e.$$typeof === C || e.$$typeof === I || e.$$typeof === T || e.$$typeof === R || e.$$typeof === A || e.$$typeof === D || e.$$typeof === U || e.$$typeof === L || e.$$typeof === P)
                        }

                        function n(e) {
                            if ("object" == typeof e && null !== e) {
                                var t = e.$$typeof;
                                switch (t) {
                                    case m:
                                        var n = e.type;
                                        switch (n) {
                                            case O:
                                            case S:
                                            case g:
                                            case E:
                                            case b:
                                            case w:
                                                return n;
                                            default:
                                                var r = n && n.$$typeof;
                                                switch (r) {
                                                    case R:
                                                    case A:
                                                    case C:
                                                    case I:
                                                    case T:
                                                        return r;
                                                    default:
                                                        return t
                                                }
                                        }
                                    case _:
                                        return t
                                }
                            }
                        }

                        function r(e) {
                            return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(e) || n(e) === O
                        }

                        function o(e) {
                            return n(e) === S
                        }

                        function i(e) {
                            return n(e) === R
                        }

                        function a(e) {
                            return n(e) === T
                        }

                        function s(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === m
                        }

                        function u(e) {
                            return n(e) === A
                        }

                        function c(e) {
                            return n(e) === g
                        }

                        function l(e) {
                            return n(e) === C
                        }

                        function f(e) {
                            return n(e) === I
                        }

                        function d(e) {
                            return n(e) === _
                        }

                        function p(e) {
                            return n(e) === E
                        }

                        function h(e) {
                            return n(e) === b
                        }

                        function y(e) {
                            return n(e) === w
                        }
                        var v = "function" == typeof Symbol && Symbol.for,
                            m = v ? Symbol.for("react.element") : 60103,
                            _ = v ? Symbol.for("react.portal") : 60106,
                            g = v ? Symbol.for("react.fragment") : 60107,
                            b = v ? Symbol.for("react.strict_mode") : 60108,
                            E = v ? Symbol.for("react.profiler") : 60114,
                            T = v ? Symbol.for("react.provider") : 60109,
                            R = v ? Symbol.for("react.context") : 60110,
                            O = v ? Symbol.for("react.async_mode") : 60111,
                            S = v ? Symbol.for("react.concurrent_mode") : 60111,
                            A = v ? Symbol.for("react.forward_ref") : 60112,
                            w = v ? Symbol.for("react.suspense") : 60113,
                            x = v ? Symbol.for("react.suspense_list") : 60120,
                            I = v ? Symbol.for("react.memo") : 60115,
                            C = v ? Symbol.for("react.lazy") : 60116,
                            P = v ? Symbol.for("react.block") : 60121,
                            D = v ? Symbol.for("react.fundamental") : 60117,
                            U = v ? Symbol.for("react.responder") : 60118,
                            L = v ? Symbol.for("react.scope") : 60119,
                            N = O,
                            k = S,
                            M = R,
                            j = T,
                            B = m,
                            F = A,
                            G = g,
                            Q = C,
                            Y = I,
                            q = _,
                            H = E,
                            V = b,
                            z = w,
                            W = !1;
                        t.AsyncMode = N, t.ConcurrentMode = k, t.ContextConsumer = M, t.ContextProvider = j, t.Element = B, t.ForwardRef = F, t.Fragment = G, t.Lazy = Q, t.Memo = Y, t.Portal = q, t.Profiler = H, t.StrictMode = V, t.Suspense = z, t.isAsyncMode = r, t.isConcurrentMode = o, t.isContextConsumer = i, t.isContextProvider = a, t.isElement = s, t.isForwardRef = u, t.isFragment = c, t.isLazy = l, t.isMemo = f, t.isPortal = d, t.isProfiler = p, t.isStrictMode = h, t.isSuspense = y, t.isValidElementType = e, t.typeOf = n
                    }()
                }, function(e, t, n) {
                    "use strict";

                    function r() {
                        return null
                    }
                    var o = n(4),
                        i = n(15),
                        a = n(5),
                        s = n(16),
                        u = Function.call.bind(Object.prototype.hasOwnProperty),
                        c = function() {};
                    c = function(e) {
                        var t = "Warning: " + e;
                        "undefined" != typeof console && console.error(t);
                        try {
                            throw new Error(t)
                        } catch (n) {}
                    }, e.exports = function(e, t) {
                        function n(e) {
                            var t = e && (w && e[w] || e[x]);
                            if ("function" == typeof t) return t
                        }

                        function l(e, t) {
                            return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
                        }

                        function f(e) {
                            this.message = e, this.stack = ""
                        }

                        function d(e) {
                            function n(n, i, s, u, l, d, p) {
                                if (u = u || I, d = d || s, p !== a) {
                                    if (t) {
                                        var h = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                        throw h.name = "Invariant Violation", h
                                    }
                                    if ("undefined" != typeof console) {
                                        var y = u + ":" + s;
                                        !r[y] && o < 3 && (c("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), r[y] = !0, o++)
                                    }
                                }
                                return null == i[s] ? n ? new f(null === i[s] ? "The " + l + " `" + d + "` is marked as required in `" + u + "`, but its value is `null`." : "The " + l + " `" + d + "` is marked as required in `" + u + "`, but its value is `undefined`.") : null : e(i, s, u, l, d)
                            }
                            var r = {},
                                o = 0,
                                i = n.bind(null, !1);
                            return i.isRequired = n.bind(null, !0), i
                        }

                        function p(e) {
                            function t(t, n, r, o, i, a) {
                                var s = t[n];
                                return R(s) !== e ? new f("Invalid " + o + " `" + i + "` of type `" + O(s) + "` supplied to `" + r + "`, expected `" + e + "`.") : null
                            }
                            return d(t)
                        }

                        function h(e) {
                            function t(t, n, r, o, i) {
                                if ("function" != typeof e) return new f("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                                var s = t[n];
                                if (!Array.isArray(s)) return new f("Invalid " + o + " `" + i + "` of type `" + R(s) + "` supplied to `" + r + "`, expected an array.");
                                for (var u = 0; u < s.length; u++) {
                                    var c = e(s, u, r, o, i + "[" + u + "]", a);
                                    if (c instanceof Error) return c
                                }
                                return null
                            }
                            return d(t)
                        }

                        function y(e) {
                            function t(t, n, r, o, i) {
                                if (!(t[n] instanceof e)) {
                                    var a = e.name || I;
                                    return new f("Invalid " + o + " `" + i + "` of type `" + A(t[n]) + "` supplied to `" + r + "`, expected instance of `" + a + "`.")
                                }
                                return null
                            }
                            return d(t)
                        }

                        function v(e) {
                            function t(t, n, r, o, i) {
                                for (var a = t[n], s = 0; s < e.length; s++)
                                    if (l(a, e[s])) return null;
                                var u = JSON.stringify(e, (function(e, t) {
                                    return "symbol" === O(t) ? String(t) : t
                                }));
                                return new f("Invalid " + o + " `" + i + "` of value `" + String(a) + "` supplied to `" + r + "`, expected one of " + u + ".")
                            }
                            return Array.isArray(e) ? d(t) : (c(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), r)
                        }

                        function m(e) {
                            function t(t, n, r, o, i) {
                                if ("function" != typeof e) return new f("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                                var s = t[n],
                                    c = R(s);
                                if ("object" !== c) return new f("Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected an object.");
                                for (var l in s)
                                    if (u(s, l)) {
                                        var d = e(s, l, r, o, i + "." + l, a);
                                        if (d instanceof Error) return d
                                    }
                                return null
                            }
                            return d(t)
                        }

                        function _(e) {
                            function t(t, n, r, o, i) {
                                for (var s = 0; s < e.length; s++)
                                    if (null == (0, e[s])(t, n, r, o, i, a)) return null;
                                return new f("Invalid " + o + " `" + i + "` supplied to `" + r + "`.")
                            }
                            if (!Array.isArray(e)) return c("Invalid argument supplied to oneOfType, expected an instance of array."), r;
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n];
                                if ("function" != typeof o) return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + S(o) + " at index " + n + "."), r
                            }
                            return d(t)
                        }

                        function g(e) {
                            function t(t, n, r, o, i) {
                                var s = t[n],
                                    u = R(s);
                                if ("object" !== u) return new f("Invalid " + o + " `" + i + "` of type `" + u + "` supplied to `" + r + "`, expected `object`.");
                                for (var c in e) {
                                    var l = e[c];
                                    if (l) {
                                        var d = l(s, c, r, o, i + "." + c, a);
                                        if (d) return d
                                    }
                                }
                                return null
                            }
                            return d(t)
                        }

                        function b(e) {
                            function t(t, n, r, o, s) {
                                var u = t[n],
                                    c = R(u);
                                if ("object" !== c) return new f("Invalid " + o + " `" + s + "` of type `" + c + "` supplied to `" + r + "`, expected `object`.");
                                var l = i({}, t[n], e);
                                for (var d in l) {
                                    var p = e[d];
                                    if (!p) return new f("Invalid " + o + " `" + s + "` key `" + d + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                    var h = p(u, d, r, o, s + "." + d, a);
                                    if (h) return h
                                }
                                return null
                            }
                            return d(t)
                        }

                        function E(t) {
                            switch (typeof t) {
                                case "number":
                                case "string":
                                case "undefined":
                                    return !0;
                                case "boolean":
                                    return !t;
                                case "object":
                                    if (Array.isArray(t)) return t.every(E);
                                    if (null === t || e(t)) return !0;
                                    var r = n(t);
                                    if (!r) return !1;
                                    var o, i = r.call(t);
                                    if (r !== t.entries) {
                                        for (; !(o = i.next()).done;)
                                            if (!E(o.value)) return !1
                                    } else
                                        for (; !(o = i.next()).done;) {
                                            var a = o.value;
                                            if (a && !E(a[1])) return !1
                                        }
                                    return !0;
                                default:
                                    return !1
                            }
                        }

                        function T(e, t) {
                            return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                        }

                        function R(e) {
                            var t = typeof e;
                            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : T(t, e) ? "symbol" : t
                        }

                        function O(e) {
                            if (void 0 === e || null === e) return "" + e;
                            var t = R(e);
                            if ("object" === t) {
                                if (e instanceof Date) return "date";
                                if (e instanceof RegExp) return "regexp"
                            }
                            return t
                        }

                        function S(e) {
                            var t = O(e);
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

                        function A(e) {
                            return e.constructor && e.constructor.name ? e.constructor.name : I
                        }
                        var w = "function" == typeof Symbol && Symbol.iterator,
                            x = "@@iterator",
                            I = "<<anonymous>>",
                            C = {
                                array: p("array"),
                                bool: p("boolean"),
                                func: p("function"),
                                number: p("number"),
                                object: p("object"),
                                string: p("string"),
                                symbol: p("symbol"),
                                any: d(r),
                                arrayOf: h,
                                element: function() {
                                    function t(t, n, r, o, i) {
                                        var a = t[n];
                                        return e(a) ? null : new f("Invalid " + o + " `" + i + "` of type `" + R(a) + "` supplied to `" + r + "`, expected a single ReactElement.")
                                    }
                                    return d(t)
                                }(),
                                elementType: function() {
                                    function e(e, t, n, r, i) {
                                        var a = e[t];
                                        return o.isValidElementType(a) ? null : new f("Invalid " + r + " `" + i + "` of type `" + R(a) + "` supplied to `" + n + "`, expected a single ReactElement type.")
                                    }
                                    return d(e)
                                }(),
                                instanceOf: y,
                                node: function() {
                                    function e(e, t, n, r, o) {
                                        return E(e[t]) ? null : new f("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.")
                                    }
                                    return d(e)
                                }(),
                                objectOf: m,
                                oneOf: v,
                                oneOfType: _,
                                shape: g,
                                exact: b
                            };
                        return f.prototype = Error.prototype, C.checkPropTypes = s, C.resetWarningCache = s.resetWarningCache, C.PropTypes = C, C
                    }
                }, function(e, t, n) {
                    "use strict";

                    function r(e) {
                        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var o = Object.getOwnPropertySymbols,
                        i = Object.prototype.hasOwnProperty,
                        a = Object.prototype.propertyIsEnumerable;
                    e.exports = function() {
                        try {
                            if (!Object.assign) return !1;
                            var e = new String("abc");
                            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                    return t[e]
                                })).join("")) return !1;
                            var r = {};
                            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                r[e] = e
                            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                        } catch (o) {
                            return !1
                        }
                    }() ? Object.assign : function(e, t) {
                        for (var n, s, u = r(e), c = 1; c < arguments.length; c++) {
                            for (var l in n = Object(arguments[c])) i.call(n, l) && (u[l] = n[l]);
                            if (o) {
                                s = o(n);
                                for (var f = 0; f < s.length; f++) a.call(n, s[f]) && (u[s[f]] = n[s[f]])
                            }
                        }
                        return u
                    }
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t, n, r, u) {
                        for (var c in e)
                            if (s(e, c)) {
                                var l;
                                try {
                                    if ("function" != typeof e[c]) {
                                        var f = Error((r || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.");
                                        throw f.name = "Invariant Violation", f
                                    }
                                    l = e[c](t, c, r, n, null, i)
                                } catch (p) {
                                    l = p
                                }
                                if (!l || l instanceof Error || o((r || "React class") + ": type specification of " + n + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), l instanceof Error && !(l.message in a)) {
                                    a[l.message] = !0;
                                    var d = u ? u() : "";
                                    o("Failed " + n + " type: " + l.message + (null != d ? d : ""))
                                }
                            }
                    }
                    var o = function() {},
                        i = n(5),
                        a = {},
                        s = Function.call.bind(Object.prototype.hasOwnProperty);
                    o = function(e) {
                        var t = "Warning: " + e;
                        "undefined" != typeof console && console.error(t);
                        try {
                            throw new Error(t)
                        } catch (n) {}
                    }, r.resetWarningCache = function() {
                        a = {}
                    }, e.exports = r
                }, function(e, t, n) {
                    "use strict";

                    function r(e, t) {
                        if (null == e) return {};
                        var n, r, i = o(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                        return i
                    }

                    function o(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }

                    function i(e) {
                        var t = e.children,
                            n = e.device,
                            o = e.onChange,
                            i = r(e, ["children", "device", "onChange"]),
                            s = Object(a.a)(i, n, o);
                        return "function" == typeof t ? t(s) : s ? t : null
                    }
                    t.a = i;
                    var a = n(0)
                }]))
            }("undefined" != typeof self && self)
        },
        iZfx: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bd: () => o,
                lQ: () => r
            });
            var r = function() {};
            var o = "undefined" !== typeof window
        },
        "18F/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("DTvD");
            const o = function(e) {
                (0, r.useEffect)(e, [])
            };
            const i = function(e) {
                o((function() {
                    e()
                }))
            }
        },
        "Hf/4": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("DTvD");

            function o(e) {
                var t = (0, r.useRef)();
                return (0, r.useEffect)((function() {
                    t.current = e
                })), t.current
            }
        },
        "7so9": e => {
            "use strict";
            e.exports = function(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t),
                    o = n.length;
                if (r.length !== o) return !1;
                for (var i = 0; i < o; i++) {
                    var a = n[i];
                    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
                }
                return !0
            }
        },
        jQIl: e => {
            e.exports = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
        },
        xqbL: (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = a(e, i(n)))
                    }
                    return e
                }

                function i(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return o.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) r.call(e, n) && e[n] && (t = a(t, n));
                    return t
                }

                function a(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                    return o
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        ufZf: (e, t, n) => {
            var r = "function" === typeof fetch ? fetch : void 0;
            if ("undefined" !== typeof n.g && n.g.fetch ? r = n.g.fetch : "undefined" !== typeof window && window.fetch && (r = window.fetch), "undefined" === typeof window) {
                var o = r || n("vfX2");
                o.default && (o = o.default), t.default = o, e.exports = t.default
            }
        },
        lAeT: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, r(e, t)
            }

            function o(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, r(e, t)
            }
            n.d(t, {
                A: () => o
            })
        },
        hLFe: (e, t, n) => {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r]
                    }
                return n
            }
            n.d(t, {
                A: () => r
            })
        }
    }
]);