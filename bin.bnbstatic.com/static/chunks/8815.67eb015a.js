(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8815], {
        "b6L+": () => {},
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
        kchA: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => l,
                L: () => d
            });
            var n = r("DTvD"),
                i = r("4hgs"),
                o = r("2DR2"),
                a = r("A4nT"),
                s = r("fc5I"),
                u = r.n(s);
            const c = (0, r("IS1a").j)({
                    queryKey: a.Bz.QUERY_PM_ASSET_INDEX,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getPortfolioAssetIndexStream" in e) {
                            return e.getPortfolioAssetIndexStream().subscribe((e => {
                                t.setQueryData(a.Bz.QUERY_PM_ASSET_INDEX, (t => ({
                                    success: !0,
                                    data: { ...t ? .data || {},
                                        ...e
                                    }
                                })))
                            }))
                        }
                        return u()
                    }
                }),
                l = async () => {
                    const e = await (0, o.ec)();
                    if (e.success) {
                        const t = e.data.reduce(((e, t) => {
                            const r = t.name;
                            return { ...e,
                                [r]: {
                                    symbol: t.name,
                                    index: t.price,
                                    time: t.time
                                }
                            }
                        }), {});
                        return { ...e,
                            data: t
                        }
                    }
                    return { ...e,
                        data: {}
                    }
                },
                d = e => {
                    const {
                        enabled: t,
                        getUMSDK: r
                    } = e, o = (0, i.useQueryClient)();
                    (0, n.useEffect)((function() {
                        !1 !== t && c({
                            getSDK: r,
                            queryClient: o
                        })
                    }), [t]);
                    const {
                        data: s
                    } = (0, i.useQuery)(a.Bz.QUERY_PM_ASSET_INDEX, l, {
                        notifyOnChangeProps: ["data"],
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: t
                    });
                    return !1 === t ? {} : s ? .data || {}
                }
        },
        Bxol: (e, t, r) => {
            "use strict";
            r.d(t, {
                uQ: () => x,
                sd: () => E
            });
            var n = r("vtLN"),
                i = r("2nAp"),
                o = (r("DTvD"), r("4hgs")),
                a = r("A4nT"),
                s = r("gC4N"),
                u = r("g6NH"),
                c = r("vuDY");
            const l = "undefined" === typeof window,
                d = {
                    DELIVERING: "DELIVERING",
                    PRE_DELIVERING: "PRE_DELIVERING",
                    TRADING: "TRADING",
                    PRE_SETTLE: "PRE_SETTLE",
                    PENDING_TRADING: "PENDING_TRADING"
                },
                p = (d.TRADING, d.PRE_DELIVERING, d.PRE_SETTLE, Object.freeze([]), Object.freeze({}), (e, t) => e && "0" !== e ? e : t);
            Error;

            function f(e, t, r) {
                const n = e.filters.find((e => "LOT_SIZE" === e ? .filterType)),
                    i = e.filters.find((e => "MARKET_LOT_SIZE" === e ? .filterType));
                return {
                    s: e.symbol,
                    ts: p(e.filters[0] ? .tickSize, "0.01"),
                    i: p(e.filters[1] ? .minQty, "0.001"),
                    lss: p(n && "stepSize" in n ? n.stepSize : void 0, "0.001"),
                    mss: p(i && "stepSize" in i ? i.stepSize : void 0, "0.001"),
                    q: e.quoteAsset,
                    b: e.baseAsset,
                    m: e.marginAsset,
                    o: t ? .openPrice,
                    c: t ? .lastPrice,
                    h: t ? .highPrice,
                    l: t ? .lowPrice,
                    qp: e.quantityPrecision,
                    pp: e.pricePrecision,
                    qv: t && "quoteVolume" in t ? t.quoteVolume : void 0,
                    f: e.filters,
                    p: e.pair,
                    cv: "contractSize" in e ? e.contractSize : void 0,
                    ct: e ? .contractType,
                    dd: e ? .deliveryDate,
                    cts: "contractStatus" in e ? e ? .contractStatus : e ? .status,
                    v: t ? .volume,
                    eqp: "equalQtyPrecision" in e ? e ? .equalQtyPrecision : void 0,
                    bv: t && "baseVolume" in t ? t ? .baseVolume : void 0,
                    sp: "settlePlan" in e ? e.settlePlan : void 0,
                    tags: e.underlyingSubType,
                    tp: e.triggerProtect,
                    lf: e.liquidationFee,
                    mtb: e.marketTakeBound,
                    isDelivery: r,
                    ml: e.maxMoveOrderLimit,
                    obd: e.onboardDate,
                    uyt: e.underlyingType
                }
            }
            const m = async ({
                    isAll: e,
                    serverSideHost: t
                }) => {
                    if (l && !t) throw new Error("fetchUMProducts needs serverSideHost to be called on server side");
                    const r = t || "";
                    try {
                        const [t, n] = await Promise.allSettled([(0, u.aw)({
                            showall: e
                        }, {
                            host: r
                        }), (0, c.vX)({
                            host: r
                        })]), {
                            symbols: i = [],
                            assets: o = []
                        } = "fulfilled" === t.status ? t.value : {}, a = "fulfilled" === n.status ? n.value : [];
                        return {
                            umProducts: i.map((e => f(e, a.find((t => t.symbol === e.symbol)), !1))) || [],
                            umAutoAssetExchangeInfo: (0, s.G)(o, "asset") || {}
                        }
                    } catch (n) {
                        if (console.log(`BAD REQUEST:\n          fetchUMProducts\n           parse ERROR is ${n.message}\n${n.stack}`), l) throw n
                    }
                    return {}
                },
                v = async ({
                    isAll: e,
                    serverSideHost: t
                }) => {
                    if (l && !t) throw new Error("fetchCMProducts needs serverSideHost to be called on server side");
                    const r = t || "";
                    try {
                        const [t, n] = await Promise.allSettled([(0, u.Yz)({
                            showall: e
                        }, {
                            host: r
                        }), (0, c.Gk)({
                            host: r
                        })]), i = "fulfilled" === t.status ? t.value : [], o = "fulfilled" === n.status ? n.value : [];
                        return i.map((e => f(e, o.find((t => t.symbol === e.symbol)), !0))) || []
                    } catch (n) {
                        if (console.log(`BAD REQUEST:\n        fetchCMProducts\n           parse ERROR is ${n.message}\n${n.stack}`), l) throw n
                    }
                    return []
                };

            function g(e) {
                const t = e.contractStatus || e.cts;
                return [d.TRADING, d.PRE_DELIVERING, d.PRE_SETTLE].includes(t)
            }
            const y = {
                    l: "lowPrice",
                    c: "lastPrice",
                    h: "highPrice",
                    o: "openPrice"
                },
                T = {
                    l: "low",
                    c: "close",
                    h: "high",
                    o: "open",
                    v: "volume",
                    qv: "quoteVolume",
                    bv: "baseVolume",
                    s: "symbol",
                    ts: "tickSize",
                    i: "minQty",
                    q: "quoteAsset",
                    b: "baseAsset",
                    m: "marginAsset",
                    qn: "quoteName",
                    an: "baseAssetName",
                    pm: "parentMarket",
                    pn: "parentMarketName",
                    cs: "circulatingSupply",
                    qp: "quantityPrecision",
                    pp: "pricePrecision",
                    f: "filters",
                    etf: "etf",
                    dd: "deliveryDate",
                    p: "pair",
                    ct: "contractType",
                    cv: "contractVal",
                    cts: "contractStatus",
                    eqp: "equalQtyPrecision",
                    sp: "settlePlan",
                    pom: "delisted",
                    pomt: "delistedTime",
                    tp: "triggerProtect",
                    tags: "tags",
                    isDelivery: "isDelivery",
                    type: "",
                    lss: "limitStepSize",
                    mss: "marketStepSize",
                    st: "tradingStatus",
                    lf: "liquidationFee",
                    mtb: "marketTakeBound",
                    ml: "maxMoveOrderLimit",
                    obd: "onboardDate",
                    uyt: "underlyingType"
                },
                _ = Object.keys(T);
            const A = e => (Array.isArray(e) ? e : []).reduce(((e, t) => (t.s && (e[t.s] = function(e) {
                    return e ? _.reduce(((t, r) => {
                        "ts" === r && 0 === Number(e.ts) && (e.ts = "1");
                        const n = T[r],
                            i = y[r];
                        return n && (t[n] = e[r]), i && (t[i] = parseFloat(e[r] || "0")), "isDelivery" === r && (t.isCM = e.isDelivery), t
                    }), {
                        symbolDisplay: e ? .isDelivery ? [e.s].join("/") : [e.b, e.q].join("/")
                    }) : e
                }(t)), e)), {}),
                b = e => {
                    const {
                        perpetual: t,
                        delivery: r,
                        umAutoAssetExchangeInfo: n
                    } = e;
                    return {
                        perpetual: (0, s.G)(t, "s"),
                        delivery: (0, s.G)(r, "s"),
                        umAutoAssetExchangeInfo: n
                    }
                },
                S = (0, n.D)((e => {
                    const {
                        perpetual: t,
                        delivery: r,
                        umAutoAssetExchangeInfo: n
                    } = e, i = Object.values(t || {}), o = Object.values(r || {}), a = i.filter(g), s = o.filter(g), u = [...a, ...s], c = A([...i, ...o]), l = A(a), d = A(s);
                    return {
                        rawData: e,
                        products: u,
                        allProducts: c,
                        productMap: { ...l,
                            ...d
                        },
                        typesProductMap: {
                            perpetual: l,
                            delivery: d
                        },
                        updateTime: Date.now(),
                        umAutoAssetExchangeInfo: n
                    }
                })),
                h = async e => {
                    const t = await async function({
                            isObj: e = !1,
                            isAll: t = !1
                        } = {}) {
                            const [r, n] = await Promise.allSettled([m({
                                isAll: t
                            }), v({
                                isAll: t
                            })]), {
                                umProducts: i = [],
                                umAutoAssetExchangeInfo: o = {}
                            } = "fulfilled" === r.status ? r.value : {}, a = "fulfilled" === n.status ? n.value : [];
                            return e ? {
                                perpetual: i,
                                delivery: a,
                                umAutoAssetExchangeInfo: o
                            } : [...i, ...a]
                        }({
                            isObj: !0,
                            isAll: !0
                        }),
                        {
                            perpetual: r,
                            delivery: n
                        } = t,
                        i = e.getQueryData(a.Bz.PRODUCT_FUTURE_SERVICE);
                    return i && (0 === r.length && (t.perpetual = Object.values(i.perpetual || {})), 0 === n.length && (t.delivery = Object.values(i.delivery || {}))), b(t)
                };
            const x = {
                    rawData: {
                        perpetual: {},
                        delivery: {},
                        umAutoAssetExchangeInfo: {}
                    },
                    products: [],
                    allProducts: {},
                    productMap: {},
                    typesProductMap: {
                        perpetual: {},
                        delivery: {}
                    },
                    updateTime: Date.now(),
                    umAutoAssetExchangeInfo: {}
                },
                E = ({
                    enabled: e
                } = {}) => {
                    const t = (0, o.useQueryClient)();
                    return (0, o.useQuery)(a.Bz.PRODUCT_FUTURE_SERVICE, (async () => (await i.F.yield(), h(t))), {
                        enabled: e,
                        select: S,
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        structuralSharing: !1
                    })
                }
        },
        YxIV: (e, t, r) => {
            "use strict";
            r.d(t, {
                Qr: () => i,
                ve: () => o
            });
            var n = r("DTvD");
            const i = (0, n.createContext)(void 0),
                o = () => (0, n.useContext)(i)
        },
        gC4N: (e, t, r) => {
            "use strict";

            function n(e, t, r) {
                return e.reduce(((e, n) => (e[n[t]] = r ? n[r] : n, e)), {})
            }
            r.d(t, {
                G: () => n
            })
        },
        IS1a: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => n
            });
            const n = ({
                queryKey: e,
                subscribeToStreamFn: t
            }) => {
                let r, n = !1;
                return ({
                    getSDK: i,
                    queryClient: o
                }) => {
                    if (n) return;
                    n = !0;
                    o.getQueryCache().subscribe((n => {
                        if (!n) return;
                        const {
                            query: a,
                            type: s
                        } = n;
                        if ("queryRemoved" === s || "removed" === s) return;
                        const u = e;
                        if (!(a.queryKey[0] === u[0])) return;
                        const c = i(),
                            l = "observerRemoved" === s;
                        r || l || 0 === a.getObserversCount() ? l && 0 === a.getObserversCount() && (r ? .(), o.invalidateQueries(u), r = void 0) : r = t({
                            stream: c,
                            queryClient: o
                        })
                    }))
                }
            }
        },
        aaF1: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => n
            });
            const n = {
                QUERY_ASSET_LOGO: ["queryAssetLogo"],
                QUERY_ALL_COINS: ["queryAllCoins"],
                QUERY_ALL_COINS_FINANCE: ["QUERY_ALL_COINS_FINANCE"],
                QUERY_REBALANCING_RUNNING: ["queryRebalancingRunning"],
                QUERY_REBALANCING_HISTORY: (e, t, r, n) => ["queryRebalancingHistory", e || "all", t || "no-startTime", r || "no-endTIme", n || "no-pageRow"],
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
                QUERY_SPOT_DAC_ORDER_ITEMS: (e, t, r, n) => ["querySpotDcaOrderItems", e, ...t ? [`round-${t}`] : [], ...r ? [`page-${r}`] : [], ...n ? [`rows-${n}`] : []],
                QUERY_DCA_BOT_RUNNING: ["queryDCABotRunning"],
                QUERY_DCA_BOT_HISTORY: ["queryDCABotHistory"],
                QUERY_SPOT_BALANCE: ["querySpotBalance"],
                QUERY_SPOT_GRID_CONFIG: ["SPOT_GRID_CONFIG"],
                QUERY_SPOT_STRATEGY_SYMBOL_CONFIG: ["SPOT_STRATEGY_SYMBOL_CONFIG"],
                QUERY_SPOT_ASSET_DETAIL: e => ["QUERY_SPOT_ASSET_DETAIL", e],
                QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY", e],
                QUERY_BOTS_TOTAL_PNL_BY_STRATEGY: e => ["QUERY_BOTS_TOTAL_PNL_BY_STRATEGY", e],
                QUERY_SPOT_STRATEGY_OPEN_ORDERS: (e, t, r, n) => ["SPOT_STRATEGY_OPEN_ORDERS", e, t, r, Array.isArray(n) && n.length > 0 ? n.sort().join("_") : "EMPTY_USER_ID"],
                QUERY_SPOT_GRID_STRATEGY_OPEN_ORDERS_HISTORY: (e, t, r) => ["SPOT_GRID_STRATEGY_OPEN_ORDERS_HISTORY", e, t || "all", r],
                QUERY_SPOT_GRID_TRAILING_RECORDS: (e, t, r) => ["QUERY_SPOT_GRID_TRAILING_RECORDS", e, t, r],
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
                    page: r,
                    raws: n
                }) => ["QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE", e, t, r, n]
            }
        },
        b5Ab: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ed: () => b,
                PU: () => _,
                Od: () => S,
                Gp: () => A
            });
            var n = r("x/RO"),
                i = r("4hgs"),
                o = r("DTvD"),
                a = r("KRgq"),
                s = r("AUnR"),
                u = r("jkP7"),
                c = r("yn6G"),
                l = r("tM9B");
            var d = r("aaF1");
            const p = a.t,
                f = s.J,
                m = u.R,
                v = c.C,
                g = async () => {
                    const e = await (0, n.ko)();
                    if (e) return e;
                    throw new Error("queryAccountDetail failed")
                },
                y = async () => {
                    const e = await (0, n.xv)();
                    if (e) return e;
                    throw new Error("queryAccountDetail failed")
                },
                T = async () => {
                    const e = await (0, n.X$)();
                    if (e) return e;
                    throw new Error("queryAccountDetail failed")
                },
                _ = ({
                    enabled: e
                } = {}) => (0, i.useQuery)(d.B.QUERY_MARGIN_CROSS_ASSET, g, {
                    staleTime: 2e3,
                    enabled: e
                }),
                A = () => {
                    const e = (0, i.useQueryClient)();
                    return () => e.invalidateQueries(d.B.QUERY_MARGIN_CROSS_ASSET)
                },
                b = () => (0, i.useQuery)(d.B.QUERY_MARGIN_ASSET_LV, T, {
                    staleTime: 2e3
                }),
                S = ({
                    enabled: e = !0,
                    getSpotSDK: t
                }) => {
                    const [r, n] = (0, o.useState)([]), [a, s] = (0, o.useState)([]), [u, c] = (0, o.useState)([]), {
                        data: g = {},
                        isLoading: T
                    } = _({
                        enabled: e
                    }), {
                        data: A,
                        isLoading: S
                    } = (({
                        enabled: e
                    }) => (0, i.useQuery)(d.B.QUERY_MARGIN_ASSET_MMR, y, {
                        staleTime: 2e3,
                        enabled: e
                    }))({
                        enabled: e
                    }), {
                        data: h,
                        isLoading: x
                    } = b(), {
                        userAssets: E = []
                    } = g, I = (0, o.useCallback)((e => {
                        n((t => ((e = [], t = []) => t.reduce(((e, t) => {
                            const {
                                asset: r,
                                free: n,
                                locked: i
                            } = t;
                            return e.map((e => e ? .asset === r ? { ...e,
                                free: n,
                                locked: i,
                                netAsset: (0, l.tY)(n || 0, i || 0).toFixed(8)
                            } : e))
                        }), e))(t, e)))
                    }), []), R = (0, o.useCallback)((e => {
                        n((t => ((e = [], t = {}) => {
                            const {
                                asset: r,
                                totalLiability: n = 0,
                                interest: i = 0,
                                principal: o = 0
                            } = t;
                            return e.map((e => r === e.asset ? { ...e,
                                totalDebt: n,
                                interest: i,
                                borrowed: o,
                                netAsset: (0, l.tY)(e ? .free || 0, e ? .locked || 0).toFixed(8)
                            } : e))
                        })(t, e)))
                    }), []), O = r.map((e => new p(e ? .asset, `${e?.borrowed}`, `${e?.interest}`))), C = r.map((e => new f(e ? .asset, `${e?.netAsset}`))), N = (0, o.useMemo)((() => r ? .length > 0), [r]);
                    return (0, o.useEffect)((() => {
                        const e = ((e = []) => e.map((e => {
                            const {
                                free: t = 0,
                                asset: r,
                                locked: n = 0,
                                borrowed: i = 0,
                                interest: o = 0,
                                netAsset: a = 0,
                                ...s
                            } = e;
                            return { ...s,
                                free: t,
                                asset: r,
                                locked: n,
                                borrowed: i,
                                interest: o,
                                totalAmount: (0, l.tY)(t, n).toFixed(8),
                                totalDebt: (0, l.tY)(i, o).toFixed(8),
                                netAsset: (0, l.tY)(t || 0, n || 0).toFixed(8)
                            }
                        }), {}))(E);
                        0 === E.length || T || n(e)
                    }), [g]), (0, o.useEffect)((() => {
                        if (S) return;
                        const {
                            maintainMarginRates: e
                        } = A ? .data || {
                            maintainMarginRates: []
                        };
                        A && e && e.length && s(e.map((({
                            leverage: e,
                            rate: t
                        }) => new m(e, t))))
                    }), [A]), (0, o.useEffect)((() => {
                        if (x) return;
                        const {
                            data: e
                        } = h || {
                            data: []
                        };
                        h && e && e.length && c(e.map((({
                            assetName: e,
                            leverage: t
                        }) => new v(e, t))))
                    }), [x, h]), (0, o.useEffect)((() => {
                        if (!e) return;
                        if (!N) return;
                        return t().getUserAssetsStream("CROSS").subscribe((e => {
                            const {
                                balances: t = []
                            } = e;
                            I(t)
                        }))
                    }), [t, e, N, R]), (0, o.useEffect)((() => {
                        if (!e) return;
                        if (!N) return;
                        return t().getUserDebtStream().subscribe((e => {
                            R(e)
                        }))
                    }), [t, e, N, R]), {
                        marginAsset: r,
                        spotLoanList: O,
                        spotBalances: C,
                        mmrList: a,
                        lvList: u
                    }
                }
        },
        bbE3: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => u,
                W: () => c
            });
            var n = r("DTvD"),
                i = r("WT+B"),
                o = r("r86R"),
                a = r("tM9B");
            const s = (e, t = !1) => {
                    const r = Math.abs(e) > 1 ? 2 : 8;
                    return t ? (0, o.lP)(e, r, !0) : (0, a.Xq)(e, r)
                },
                u = (e, t, r) => {
                    const o = e,
                        a = t,
                        u = r,
                        c = (0, n.useMemo)((() => ((e = {}, t = {}) => {
                            const r = { ...t
                            };
                            return Object.keys(e).forEach((t => {
                                const {
                                    baseAsset: n,
                                    quoteAsset: i,
                                    lastPrice: o,
                                    close: a
                                } = e[t];
                                n && i && (o || a) && (/^USDT$/i.test(n) ? r[i.toUpperCase()] = 1 / Number(o || a) : /^USDT$/i.test(i) && (r[n.toUpperCase()] = o || a))
                            })), r
                        })(o, {})), [o]);
                    return (0, i.Z)(((e, r) => {
                        const n = c,
                            i = /USDT/i.test(r) ? 1 : n[r ? .toUpperCase()] || 0;
                        if (u[r]) {
                            const {
                                rate: n,
                                symbol: i
                            } = u[a] || {}, o = 1 / u[r].rate, c = (n || 0) * (e || 0) * o;
                            return {
                                symbol: i,
                                fiatPrice: s(c),
                                usdPrice: s((e || 0) * o),
                                fiatPriceNumber: c,
                                userCurrency: t
                            }
                        }
                        if (a && u[a]) {
                            const {
                                rate: r,
                                symbol: n
                            } = u[a] || {}, o = (r || 0) * (e || 0) * i;
                            return {
                                symbol: n,
                                fiatPrice: s(o),
                                usdPrice: s((e || 0) * i),
                                fiatPriceNumber: o,
                                userCurrency: t
                            }
                        }
                        return {
                            fiatPrice: 0,
                            usdPrice: "0",
                            symbol: "",
                            fiatPriceNumber: 0,
                            userCurrency: t
                        }
                    }))
                },
                c = ({
                    fiatPriceNumber: e,
                    userCurrency: t
                }, r) => "USD" === t ? "" : `\u2248 ${s(e,r)} ${t}`
        },
        RfPe: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("2IQ4");
            const s = ({
                    path: e = "",
                    title: t = "",
                    padding: r,
                    iframePath: i = "https://fast.wistia.net/embed/iframe/",
                    wistiaIframeOptions: o
                }) => (0, n.jsx)(a.A, {
                    className: "wistia_responsive_padding",
                    style: {
                        padding: `${r||"56.25% 0 0 0"}`,
                        position: "relative"
                    },
                    children: (0, n.jsx)("div", {
                        className: "wistia_responsive_wrapper",
                        style: {
                            height: "100%",
                            left: 0,
                            position: "absolute",
                            top: 0,
                            width: "100%"
                        },
                        children: (0, n.jsx)("iframe", {
                            className: "wistia_embed",
                            src: `${i}${e}`,
                            title: t,
                            allow: "autoplay; fullscreen",
                            allowtransparency: "true",
                            frameBorder: "0",
                            scrolling: "no",
                            name: "wistia_embed",
                            allowFullScreen: !0,
                            width: "100%",
                            height: "100%",
                            ...o
                        })
                    })
                }),
                u = o().memo(s)
        },
        Xz3K: (e, t, r) => {
            "use strict";
            r.d(t, {
                KC: () => i,
                S1: () => u,
                V: () => f,
                X2: () => o,
                _q: () => l,
                ah: () => p,
                du: () => c,
                fe: () => s,
                ji: () => d,
                mC: () => a,
                uq: () => n
            });
            const n = "BI_TRD_ENABLE_SHORTCUTS_",
                i = "BI_TRD_SHORTCUTS_MAP",
                o = "BI_TRD_PAYLOAD_",
                a = {
                    OPEN_SHORTCUTS: "OPEN_SHORTCUTS",
                    PREVIEW_SHORTCUTS: "PREVIEW_SHORTCUTS",
                    PREVIEW_SHORTCUTS_CANCEL: "PREVIEW_SHORTCUTS_CANCEL",
                    TRADING_BUY: "TRADING_BUY",
                    TRADING_SELL: "TRADING_SELL",
                    TRADING_SWITCH: "TRADING_SWITCH",
                    TRADING_CANCEL: "TRADING_CANCEL",
                    TRADING_CANCEL_ALL: "TRADING_CANCEL_ALL",
                    CLOSE_ALL_POSITION: "CLOSE_ALL_POSITION",
                    TRADING_SEARCH_PAIRS: "TRADING_SEARCH_PAIRS",
                    TRADING_ONE_BUY: "TRADING_ONE_BUY",
                    TRADING_ONE_SELL: "TRADING_ONE_SELL",
                    TRADING_OPEN_HEDGE: "TRADING_OPEN_HEDGE",
                    TRADING_CLOSE_HEDGE: "TRADING_CLOSE_HEDGE",
                    ORDERCONFIRM_CONTINUE: "ORDERCONFIRM_CONTINUE",
                    ORDERCONFIRM_CANCEL: "ORDERCONFIRM_CANCEL",
                    MODIFY_INCREASE_PRICE: "MODIFY_INCREASE_PRICE",
                    MODIFY_DECREASE_PRICE: "MODIFY_DECREASE_PRICE",
                    MODIFY_INCREASE_AMOUNT: "MODIFY_INCREASE_AMOUNT",
                    MODIFY_DECREASE_AMOUNT: "MODIFY_DECREASE_AMOUNT",
                    KLINE_ZOOMIN: "KLINE_ZOOMIN",
                    KLINE_ZOOMOUT: "KLINE_ZOOMOUT",
                    KLINE_MOVEL: "KLINE_MOVEL",
                    KLINE_MOVER: "KLINE_MOVER",
                    KLINE_SWITCH: "KLINE_SWITCH",
                    KLINE_INTERVAL_0: "KLINE_INTERVAL_0",
                    KLINE_INTERVAL_1: "KLINE_INTERVAL_1",
                    KLINE_INTERVAL_2: "KLINE_INTERVAL_2",
                    KLINE_INTERVAL_3: "KLINE_INTERVAL_3",
                    KLINE_INTERVAL_4: "KLINE_INTERVAL_4",
                    KLINE_INTERVAL_5: "KLINE_INTERVAL_5",
                    KLINE_INTERVAL_6: "KLINE_INTERVAL_6",
                    KLINE_INTERVAL_7: "KLINE_INTERVAL_7",
                    KLINE_INTERVAL_8: "KLINE_INTERVAL_8",
                    KLINE_INTERVAL_9: "KLINE_INTERVAL_9"
                },
                s = {
                    OPEN_SHORTCUTS: "alt&&space",
                    PREVIEW_SHORTCUTS: "alt",
                    TRADING_BUY: "shift&&b",
                    TRADING_SELL: "shift&&s",
                    TRADING_SWITCH: "shift&&w",
                    TRADING_CANCEL: "shift&&z",
                    TRADING_CANCEL_ALL: "shift&&a",
                    TRADING_SEARCH_PAIRS: "f2",
                    ORDERCONFIRM_CONTINUE: "enter",
                    ORDERCONFIRM_CANCEL: "esc",
                    MODIFY_INCREASE_PRICE: "shift&&up",
                    MODIFY_DECREASE_PRICE: "shift&&down",
                    MODIFY_INCREASE_AMOUNT: "shift&&left",
                    MODIFY_DECREASE_AMOUNT: "shift&&right"
                },
                u = {
                    PREVIEW_SHORTCUTS: "alt",
                    OPEN_SHORTCUTS: "alt&&space",
                    TRADING_BUY: "shift&&b",
                    TRADING_SELL: "shift&&s",
                    TRADING_SWITCH: "shift&&w",
                    TRADING_CANCEL: "shift&&z",
                    TRADING_CANCEL_ALL: "shift&&a",
                    TRADING_SEARCH_PAIRS: "f2",
                    ORDERCONFIRM_CONTINUE: "enter",
                    ORDERCONFIRM_CANCEL: "esc",
                    MODIFY_INCREASE_PRICE: "shift&&up",
                    MODIFY_DECREASE_PRICE: "shift&&down",
                    MODIFY_INCREASE_AMOUNT: "shift&&left",
                    MODIFY_DECREASE_AMOUNT: "shift&&right"
                },
                c = {
                    OPEN_SHORTCUTS: "alt&&space",
                    PREVIEW_SHORTCUTS: "alt",
                    TRADING_BUY: "shift&&b",
                    TRADING_SELL: "shift&&s",
                    TRADING_CANCEL: "shift&&z",
                    TRADING_CANCEL_ALL: "shift&&a",
                    CLOSE_ALL_POSITION: "shift&&p",
                    TRADING_SEARCH_PAIRS: "f2",
                    TRADING_OPEN_HEDGE: "shift&&o",
                    TRADING_CLOSE_HEDGE: "shift&&c",
                    ORDERCONFIRM_CONTINUE: "enter",
                    ORDERCONFIRM_CANCEL: "esc",
                    MODIFY_INCREASE_PRICE: "shift&&up",
                    MODIFY_DECREASE_PRICE: "shift&&down",
                    MODIFY_INCREASE_AMOUNT: "shift&&left",
                    MODIFY_DECREASE_AMOUNT: "shift&&right"
                },
                l = {
                    PREVIEW_SHORTCUTS: "alt",
                    OPEN_SHORTCUTS: "alt&&space",
                    TRADING_BUY: "shift&&b",
                    TRADING_SELL: "shift&&s",
                    TRADING_CANCEL: "shift&&z",
                    TRADING_CANCEL_ALL: "shift&&a",
                    CLOSE_ALL_POSITION: "shift&&p",
                    TRADING_SEARCH_PAIRS: "f2",
                    TRADING_OPEN_HEDGE: "shift&&o",
                    TRADING_CLOSE_HEDGE: "shift&&c",
                    ORDERCONFIRM_CONTINUE: "enter",
                    ORDERCONFIRM_CANCEL: "esc",
                    MODIFY_INCREASE_PRICE: "shift&&up",
                    MODIFY_DECREASE_PRICE: "shift&&down",
                    MODIFY_INCREASE_AMOUNT: "shift&&left",
                    MODIFY_DECREASE_AMOUNT: "shift&&right"
                },
                d = {
                    KLINE_ZOOMIN: "alt&&=",
                    KLINE_ZOOMOUT: "alt&&-",
                    KLINE_MOVEL: "alt&&left",
                    KLINE_MOVER: "alt&&right",
                    KLINE_SWITCH: "f9",
                    KLINE_INTERVAL_0: "0",
                    KLINE_INTERVAL_1: "1",
                    KLINE_INTERVAL_2: "2",
                    KLINE_INTERVAL_3: "3",
                    KLINE_INTERVAL_4: "4",
                    KLINE_INTERVAL_5: "5",
                    KLINE_INTERVAL_6: "6",
                    KLINE_INTERVAL_7: "7",
                    KLINE_INTERVAL_8: "8",
                    KLINE_INTERVAL_9: "9"
                },
                p = {
                    KLINE_ZOOMIN: "alt&&=",
                    KLINE_ZOOMOUT: "alt&&-",
                    KLINE_MOVEL: "shift&&j",
                    KLINE_MOVER: "shift&&l",
                    KLINE_SWITCH: "f9",
                    KLINE_INTERVAL_0: "0",
                    KLINE_INTERVAL_1: "1",
                    KLINE_INTERVAL_2: "2",
                    KLINE_INTERVAL_3: "3",
                    KLINE_INTERVAL_4: "4",
                    KLINE_INTERVAL_5: "5",
                    KLINE_INTERVAL_6: "6",
                    KLINE_INTERVAL_7: "7",
                    KLINE_INTERVAL_8: "8",
                    KLINE_INTERVAL_9: "9"
                },
                f = ["TRADING_BUY", "TRADING_SELL", "TRADING_CANCEL", "TRADING_CANCEL_ALL", "CLOSE_ALL_POSITION", "ORDERCONFIRM_CONTINUE", "ORDERCONFIRM_CANCEL", "TRADING_ONE_BUY", "TRADING_ONE_SELL", "TRADING_OPEN_HEDGE", "TRADING_CLOSE_HEDGE"]
        },
        "1mjm": (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => n
            });
            const n = (0, r("eAFj").A)((e => ({
                boardIsEditing: !1,
                setBoardIsEditing: t => e({
                    boardIsEditing: t
                })
            })))
        },
        otf7: (e, t, r) => {
            "use strict";
            r.d(t, {
                W: () => c,
                q: () => a
            });
            var n = r("q+oq"),
                i = r("Xz3K"),
                o = r("buHu");
            const a = e => (0, n.T)(`${i.uq}${e}`, !1),
                s = {
                    up: "\u2191",
                    down: "\u2193",
                    left: "\u2190",
                    right: "\u2192",
                    esc: "ESC",
                    "-": "\u2014",
                    "=": "+"
                },
                u = e => s[e] || (0, o.ZH)(e),
                c = (e = "", t = "") => {
                    const [r, n] = (0, o.O7)(e);
                    if (!t) return n ? `${u(r)} + ${u(n)}` : u(r);
                    const [i, a] = (0, o.O7)(t);
                    return r === i ? `${u(r)} + ${u(n)}/${u(a)}` : `${u(r)} + ${u(n)} / ${u(i)} + ${u(a)}`
                }
        },
        Qt1q: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => l,
                z: () => d
            });
            var n = r("Km4d"),
                i = r.n(n),
                o = r("DTvD"),
                a = r("q+oq"),
                s = r("MTsP"),
                u = r("Xz3K"),
                c = r("buHu");
            const l = ({
                    type: e
                }) => {
                    const t = (0, c.Y8)(),
                        [r = t, n] = (0, a.T)(u.KC, t),
                        i = (0, o.useCallback)(((t = {}) => {
                            const i = { ...r,
                                [e]: { ...r[e],
                                    ...t
                                }
                            };
                            n(i), (0, s.$)(i)
                        }), [n, e, r]);
                    return [r && r[e] ? r[e] : {}, i]
                },
                d = e => {
                    const t = (0, c.Y8)(),
                        [r, n] = (0, a.T)(u.KC);
                    (0, o.useEffect)((() => {
                        e && async function() {
                            const {
                                data: e,
                                success: r
                            } = await (0, s.w)();
                            if (r && e && e.shortCutConfig) {
                                const r = JSON.parse(e.shortCutConfig);
                                if (r && r.SPOT) {
                                    const e = i()({}, t, r);
                                    n(e)
                                } else n(t)
                            }
                        }()
                    }), [n, e])
                }
        },
        Rhdc: (e, t, r) => {
            "use strict";
            r.d(t, {
                r: () => g,
                m: () => y
            });
            var n = r("DTvD"),
                i = r("V7s4"),
                o = r("q+oq"),
                a = r("ilyg"),
                s = r.n(a),
                u = r("otf7"),
                c = r("Qt1q"),
                l = r("1mjm"),
                d = r("Xz3K"),
                p = r("buHu");
            const f = {
                    TRADING_BUY: "place_long_order",
                    TRADING_SELL: "place_short_order",
                    TRADING_SWITCH: ["Switching_spot_trading_direction", "Switching_futures_trading_direction"],
                    TRADING_CANCEL: "cancel_order",
                    TRADING_CANCEL_ALL: "cancel_all_order",
                    TRADING_SEARCH_PAIRS: "search_tradingpair",
                    TRADING_ONE_BUY: "buy_in",
                    TRADING_ONE_SELL: "sell_out",
                    TRADING_OPEN_HEDGE: "open_position",
                    TRADING_CLOSE_HEDGE: "close_position",
                    ORDERCONFIRM_CONTINUE: "second_confirm_yes",
                    ORDERCONFIRM_CANCEL: "second_confirm_no",
                    MODIFY_INCREASE_PRICE: "add_price",
                    MODIFY_DECREASE_PRICE: "reduce_price",
                    MODIFY_INCREASE_AMOUNT: "add_amount",
                    MODIFY_DECREASE_AMOUNT: "reduce_amount",
                    KLINE_ZOOMIN: "kline_zoom_in",
                    KLINE_ZOOMOUT: "kline_zoom_out",
                    KLINE_MOVEL: "kline_left",
                    KLINE_MOVER: "kline_right",
                    KLINE_SWITCH: "kline_period"
                },
                m = (e = "", t = "", r = "", n) => {
                    let i = "";
                    i = t === d.mC.TRADING_SWITCH ? f[t][0] : f[t], n && n("$WebClick", {
                        eventName: "trading_shortcut",
                        keybinding: e,
                        action: i
                    })
                },
                v = (e, t) => i.B.emit("triggerShortCuts", e, t),
                g = e => (i.B.on("triggerShortCuts", e), () => {
                    i.B.off("triggerShortCuts", e)
                }),
                y = ({
                    type: e,
                    isLogin: t = !1,
                    enable: r = !0,
                    klineEnabled: i = !1,
                    track: a
                }) => {
                    const [f] = (0, u.q)(e), g = f && r, [y] = (0, c.l)({
                        type: e
                    }), [T] = (0, c.l)({
                        type: "KLINE"
                    }), [_] = (0, o.T)(`${d.X2}${e}`), A = (0, l.c)((e => e.boardIsEditing)), b = (0, n.useRef)(!1), [S, h] = (0, n.useState)(!1), x = (0, n.useMemo)((() => ({ ...y,
                        ...i ? T : {}
                    })), [y, i, T]), E = (0, n.useCallback)((async r => {
                        if (A) return;
                        if ((0, p.rV)(r)) return b.current = !0, void s()((() => {
                            t && b.current && (v(d.mC.PREVIEW_SHORTCUTS), h(!0))
                        }), 1500);
                        const n = (0, p.uZ)(r);
                        n && (b.current = !1, S && (v(d.mC.PREVIEW_SHORTCUTS_CANCEL), h(!1)), Object.keys(x).map((r => {
                            if (x[r] === n && (t || !d.V.includes(r))) switch (r) {
                                case d.mC.TRADING_ONE_BUY:
                                    _ ? .BUY ? .checked && (v(r, {
                                        priceLevel: _.BUY ? .level,
                                        valueInput: {
                                            type: "percentage",
                                            value: _.BUY ? .percent
                                        }
                                    }), m(n, r, e, a));
                                    break;
                                case d.mC.TRADING_ONE_SELL:
                                    _ ? .SELL ? .checked && (v(r, {
                                        priceLevel: _.SELL ? .level,
                                        valueInput: {
                                            type: "percentage",
                                            value: _.SELL ? .percent
                                        }
                                    }), m(n, r, e, a));
                                    break;
                                default:
                                    v(r), m(n, r, e, a)
                            }
                        })))
                    }), [t, x, _, b.current, S, A]), I = (0, n.useCallback)((() => {
                        (b.current || S) && (v(d.mC.PREVIEW_SHORTCUTS_CANCEL), b.current = !1, h(!1))
                    }), [S, b.current]), R = (0, n.useCallback)((async e => (0, p.rV)(e) && I()), [I]), O = (0, n.useCallback)((async () => I()), [I]);
                    (0, c.z)(t), (0, n.useEffect)((() => {
                        if ("undefined" !== typeof window && g) return window.addEventListener("keydown", E), () => {
                            window.removeEventListener("keydown", E)
                        }
                    }), [g, E]), (0, n.useEffect)((() => {
                        if ("undefined" !== typeof window && g) return window.addEventListener("keyup", R), window.addEventListener("blur", O), () => {
                            window.removeEventListener("keyup", R), window.removeEventListener("blur", O)
                        }
                    }), [g, R, O])
                }
        },
        buHu: (e, t, r) => {
            "use strict";
            r.d(t, {
                AS: () => c,
                O7: () => f,
                OT: () => v,
                Y8: () => m,
                ZH: () => g,
                iC: () => d,
                rV: () => u,
                uZ: () => p
            });
            var n = r("9LPm"),
                i = r.n(n),
                o = r("Xz3K"),
                a = r("xrJm");
            const s = e => "alt" === e,
                u = e => s(i()(e) ? .toLowerCase()),
                c = e => {
                    const t = i()(e) ? .toLowerCase();
                    return "enter" === t || "esc" === t || /^f([1-9]|1[0-2])$/.test(t) || s(t) || /^[0-9]$/.test(t) ? t : ""
                },
                l = ["up", "down", "left", "right", "space", "-", "="],
                d = e => {
                    const t = i()(e) ? .toLowerCase();
                    if (/^[a-zA-Z0-9\/]$/.test(t) || l.includes(t) || /^f([1-9]|1[0-2])$/.test(t)) {
                        if (e.altKey) return `alt&&${t}`;
                        if (e.shiftKey) return `shift&&${t}`;
                        if (e.ctrlKey) return `ctrl&&${t}`;
                        if (e.metaKey) return `command&&${t}`
                    }
                    return ""
                },
                p = e => e.metaKey || e.ctrlKey || e.altKey || e.shiftKey ? d(e) : c(e),
                f = (e = "") => "string" !== typeof e ? ["", ""] : e.split("&&"),
                m = () => ({
                    SPOT: (0, a.u)() ? o.fe : o.S1,
                    FUTURES: (0, a.u)() ? o.du : o._q,
                    KLINE: (0, a.u)() ? o.ah : o.ji
                }),
                v = e => "editing" === e || "edited" === e,
                g = e => e.charAt(0).toUpperCase() + e.slice(1)
        },
        HBSB: (e, t, r) => {
            "use strict";
            r.d(t, {
                sy: () => _t,
                ox: () => Tt,
                TW: () => gt,
                eL: () => yt,
                p0: () => bt,
                vB: () => At,
                yj: () => vt
            });
            var n = r("b5Ab"),
                i = r("4hgs"),
                o = r("aaGT"),
                a = r("DTvD"),
                s = r("A4nT"),
                u = r("gC4N"),
                c = r("fc5I"),
                l = r.n(c),
                d = r("Km4d"),
                p = r.n(d);
            const f = (({
                    queryKey: e,
                    subscribeToStreamFn: t
                }) => {
                    const r = {
                        CM: void 0,
                        UM: void 0
                    };
                    let n = !1;
                    return ({
                        getSDK: i,
                        queryClient: o
                    }) => {
                        if (n) return;
                        n = !0;
                        o.getQueryCache().subscribe((n => {
                            if (!n) return;
                            const {
                                query: a,
                                type: s
                            } = n;
                            if ("queryRemoved" === s || "removed" === s) return;
                            const u = a.queryKey[1],
                                c = a.queryKey[2],
                                l = "CM" === u,
                                d = e(l, {});
                            if (!(a.queryKey[0] === d[0])) return;
                            const p = i({
                                    isCM: l
                                }),
                                f = "observerRemoved" === s,
                                m = ((e, t) => e ? "CM" : t ? .copyTradeType ? `UM-${t?.copyTradeType}-${t?.portfolioId}` : "UM")(a.queryKey[1], a.queryKey[2]);
                            r[m] || f || 0 === a.getObserversCount() ? f && 0 === a.getObserversCount() && (r[m] ? .(), r[m] = void 0, o.invalidateQueries(a.queryKey)) : r[m] = t({
                                isCM: l,
                                stream: p,
                                queryClient: o,
                                copyTradingPayload: c
                            })
                        }))
                    }
                })({
                    queryKey: s.Bz.BRACKETS_V2,
                    subscribeToStreamFn: ({
                        stream: e,
                        isCM: t,
                        queryClient: r
                    }) => {
                        if ("getContractInfoStream" in e) {
                            return e.getContractInfoStream().subscribe((({
                                symbol: e,
                                contractStatus: n,
                                brackets: i
                            }) => {
                                "TRADING" !== n && Array.isArray(i) || Array.isArray(i) && i.length && r.setQueryData(s.Bz.BRACKETS_V2(t), (t => {
                                    if (!t ? .data) return t;
                                    const r = t.data.notionalLimits ? ? {},
                                        n = (({
                                            data: e = [],
                                            notionalLimit: t = 100
                                        }) => e.map((e => ({
                                            bracketSeq: e.bs,
                                            bracketNotionalCap: t / 100 * e.bnc,
                                            bracketNotionalFloor: t / 100 * e.bnf,
                                            cumFastMaintenanceAmount: t / 100 * e.cf,
                                            bracketMaintenanceMarginRate: e.mmr,
                                            minOpenPosLeverage: e.mi,
                                            maxOpenPosLeverage: e.ma
                                        }))))({
                                            data: i,
                                            notionalLimit: r[e] ? ? 100
                                        });
                                    return { ...t,
                                        data: { ...t.data,
                                            riskBrackets: p()({}, t.data.riskBrackets, {
                                                [e]: n
                                            })
                                        }
                                    }
                                }))
                            }))
                        }
                        return l()
                    }
                }),
                m = ({
                    enabled: e,
                    isCM: t,
                    getUMSDK: r,
                    getCMSDK: n
                }) => {
                    const c = s.Bz.BRACKETS_V2(t),
                        l = (0, i.useQueryClient)(),
                        d = (0, a.useCallback)((e => e.isCM ? n() : r()), [r, n]);
                    return (0, a.useEffect)((function() {
                        !1 !== e && f({
                            getSDK: d,
                            queryClient: l
                        })
                    }), [l, e, d]), (0, i.useQuery)(c, (() => (async e => {
                        const t = e ? o.$O : o.j9,
                            r = await t({
                                pathFilter: !0
                            }),
                            n = r ? .data ? .brackets || [];
                        return { ...r,
                            data: {
                                riskBrackets: (0, u.G)(n, "symbol", "riskBrackets"),
                                notionalLimits: (0, u.G)(n, "symbol", "notionalLimit")
                            }
                        }
                    })(t)), {
                        notifyOnChangeProps: ["data"],
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: e
                    })
                },
                v = e => {
                    const {
                        data: t
                    } = m(e);
                    return !1 === e.enabled ? {} : t ? .data ? .riskBrackets || {}
                };
            var g = r("EqJo"),
                y = r.n(g);
            const T = e => "undefined" === typeof e || null === e ? "0" : String(e),
                _ = (e, t) => function r(...n) {
                    return "undefined" === typeof r._deps ? (r._deps = n, r._value = e(...n)) : ("function" === typeof t && t(r._deps, n) || r._deps.some(((e, t) => e !== n[t])) && (r._deps = n, r._value = e(...n)), r._value)
                };
            var A = r("HYmr");

            function b(e) {
                const {
                    askNotional: t,
                    bidNotional: r,
                    collateral: n,
                    cumRealized: i,
                    entryPrice: o,
                    id: a,
                    leverage: s,
                    notionalValue: u,
                    positionSize: c,
                    symbol: l,
                    markPrice: d,
                    unrealizedProfit: p,
                    isolated: f,
                    isolatedWallet: m,
                    adl: v,
                    positionSide: g,
                    lastPrice: y
                } = e;
                return new A.e(T(t), T(r), n, T(i), T(o), a, s, T(u), T(c), l, T(d), T(p), f, T(m), v, g, T(y))
            }
            const S = e => Object.values(e).filter((e => {
                const {
                    positionSize: t,
                    isolatedWallet: r,
                    askNotional: n,
                    bidNotional: i
                } = e || {};
                if (void 0 === t) return;
                const o = Number(t);
                return 0 !== o || 0 === o && Number(r) < 0 || n || i
            }));
            const h = _(((e, t) => S(e).map((e => {
                const r = t[e.symbol],
                    n = r ? .marginAsset || "",
                    i = Number(r ? .lastPrice),
                    o = !i || y()(i) ? e.markPrice : i;
                return function(e, t, r) {
                    const {
                        askNotional: n,
                        bidNotional: i,
                        collateral: o,
                        cumRealized: a,
                        entryPrice: s,
                        id: u,
                        leverage: c,
                        notionalValue: l,
                        positionSize: d,
                        symbol: p,
                        markPrice: f,
                        unrealizedProfit: m,
                        isolated: v,
                        isolatedWallet: g,
                        adl: y,
                        positionSide: _
                    } = e;
                    return new A.e(T(n), T(i), o || r, T(a), T(s), u, c, T(l), T(d), p, T(f), T(m), v, T(g), y, _, T(t))
                }(e, String(o), n)
            }))));
            var x = r("g6NH"),
                E = r("K9aZ"),
                I = r.n(E);
            const R = async () => await (0, x.Yz)(),
                O = ({
                    enabled: e
                } = {}) => {
                    const {
                        data: t
                    } = (({
                        enabled: e
                    } = {}) => {
                        const t = s.Bz.CM_EXCHANGE_INFO_SYMBOLS;
                        return (0, i.useQuery)(t, R, {
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0,
                            enabled: e
                        })
                    })({
                        enabled: e
                    });
                    return (0, a.useMemo)((() => I()(t, "symbol")), [t])
                };
            var C = r("9f0p");
            const N = _((e => Object.values(e).map((e => {
                const {
                    asset: t,
                    marginAvailable: r,
                    initialMargin: n,
                    maintenanceMargin: i,
                    marginBalance: o,
                    unrealizedProfit: a,
                    walletBalance: s,
                    crossWalletBalance: u
                } = e;
                return new C.R(t, Boolean(r), String(n), String(i), String(o), String(a), String(s), String(u))
            }))));
            var L = r("JVfW");
            const P = _((e => Object.values(e).map((e => {
                const {
                    asset: t,
                    assetSpotOpenLost: r
                } = e;
                return new L.x(t, r)
            }))));
            var k = r("Qpzv");
            const M = _((e => Object.values(e).filter((e => void 0 !== e.contractVal)).map((e => {
                const {
                    symbol: t,
                    contractVal: r
                } = e;
                return new k.w(String(r), t)
            }))));
            _((e => Object.values(e).filter((e => void 0 !== e.contractSize)).map((e => {
                const {
                    symbol: t,
                    contractSize: r
                } = e;
                return new k.w(String(r), t)
            }))));
            var D = r("M9F1");
            const w = _((e => {
                const t = [];
                return Object.entries(e).forEach((([e, r]) => {
                    if (Array.isArray(r)) {
                        const n = r.map((e => new D.O(e.bracketMaintenanceMarginRate, e.bracketNotionalCap, e.bracketNotionalFloor, e.bracketSeq, e.cumFastMaintenanceAmount, e.fastMaintenanceAmount, e.maxOpenPosLeverage, e.minOpenPosLeverage))),
                            i = new D.D(e, n);
                        t.push(i)
                    }
                })), t
            }));
            var U = r("nmV/"),
                B = r("6oak");
            const q = _((e => Object.values(e).map((e => {
                const {
                    symbol: t,
                    index: r
                } = e;
                return new U.W(t, String(r))
            }))));
            _((e => Object.values(e).map((e => {
                const {
                    symbol: t,
                    time: r,
                    index: n,
                    bidBuffer: i,
                    askBuffer: o,
                    bidRate: a,
                    askRate: s
                } = e;
                return new B.P(t, String(r), String(n), String(i), String(o), String(a), String(s))
            }))));
            var j = r("tvZx");
            const F = _((e => e.map((e => {
                const {
                    asset: t,
                    collateralRate: r
                } = e;
                return new j.G(t, r)
            }))));
            var Q = r("w58Y");
            var G = r("kchA"),
                Y = r("u1kY");
            const K = e => {
                const t = (e || []).map((e => ({ ...e,
                    availableBalance: "availableBalance" in e ? Number(e.availableBalance) : 0,
                    crossWalletBalance: Number(e.crossWalletBalance || 0),
                    initialMargin: Number(e.initialMargin || 0),
                    maintenanceMargin: Number(e.maintenanceMargin || 0),
                    marginBalance: Number(e.marginBalance || 0),
                    unrealizedProfit: Number(e.unrealizedProfit || 0),
                    walletBalance: Number(e.walletBalance || 0)
                })));
                return (0, u.G)(t, "asset")
            };
            var V = r("F0wf"),
                W = r("xrOZ"),
                z = r.n(W);
            const H = (e, t) => t && "BOTH" !== t ? `${e}_${t}` : `${e}`,
                $ = (e = []) => e.reduce(((e, t) => {
                    const {
                        symbol: r
                    } = t;
                    return e[r] = t, e[`${H(r,"LONG")}`] = t, e[`${H(r,"SHORT")}`] = t, e
                }), {}),
                Z = e => {
                    return (t = e, Object.values(t)).filter((e => {
                        const {
                            positionSize: t,
                            isolatedWallet: r
                        } = e || {};
                        if (void 0 === t) return;
                        const n = Number(t);
                        return 0 !== n || 0 === n && Number(r) < 0
                    }));
                    var t
                },
                J = e => "undefined" !== typeof e ? Number(e) : void 0,
                X = (_(((e, t) => Object.entries(e).reduce(((e, [r, n]) => {
                    const {
                        symbol: i = ""
                    } = n || {};
                    if (!i || !n) return e;
                    const o = t[i];
                    if (!o) return e;
                    const {
                        close: a,
                        contractVal: s,
                        marginAsset: u,
                        baseAsset: c,
                        quoteAsset: l,
                        quantityPrecision: d,
                        pricePrecision: p,
                        equalQtyPrecision: f,
                        tickSize: m,
                        limitStepSize: v,
                        marketStepSize: g
                    } = o;
                    return e[r] = {
                        contractVal: s,
                        baseAsset: c,
                        quoteAsset: l,
                        quantityPrecision: d,
                        pricePrecision: p,
                        equalQtyPrecision: f,
                        tickSize: m,
                        limitStepSize: v,
                        marketStepSize: g,
                        ...n,
                        lastPrice: n.lastPrice || a,
                        marginAsset: n.marginAsset || u,
                        askNotional: J(n.askNotional),
                        bidNotional: J(n.bidNotional),
                        cumRealized: J(n.cumRealized),
                        entryPrice: J(n.entryPrice),
                        isolatedWallet: J(n.isolatedWallet),
                        markPrice: J(n.markPrice),
                        notionalValue: J(n.notionalValue),
                        positionSize: J(n.positionSize || 0),
                        unrealizedProfit: J(n.unrealizedProfit)
                    }, e
                }), {}))), _((e => Z(e))), (e, t, r, n) => {
                    if ("initialMarkPrice" === r) return e || t || n.markPrice
                }),
                ee = (e, t) => (0, V.Ay)(e, (e => z()(e, t, X))),
                te = (e = []) => e.reduce(((e, t) => {
                    const {
                        symbol: r,
                        positionSide: n,
                        collateral: i,
                        askNotional: o,
                        bidNotional: a,
                        cumRealized: s,
                        entryPrice: u,
                        isolatedWallet: c,
                        markPrice: l,
                        initialMarkPrice: d,
                        notionalValue: p,
                        positionAmount: f,
                        unrealizedProfit: m,
                        ...v
                    } = t || {};
                    return e[H(r, n)] = {
                        symbol: r,
                        positionSide: n,
                        collateral: i,
                        marginAsset: i,
                        askNotional: Number(o),
                        bidNotional: Number(a),
                        cumRealized: Number(s),
                        entryPrice: Number(u),
                        isolatedWallet: Number(c),
                        markPrice: Number(l),
                        initialMarkPrice: Number(d || l),
                        notionalValue: Number(p),
                        positionSize: Number(f),
                        unrealizedProfit: Number(m),
                        ...v
                    }, e
                }), {}),
                re = e => (e || []).map((e => ({ ...e,
                    askNotional: Number(e.askNotional),
                    bidNotional: Number(e.bidNotional),
                    cumRealized: Number(e.cumRealized),
                    entryPrice: Number(e.entryPrice),
                    isolatedWallet: Number(e.isolatedWallet),
                    markPrice: Number(e.markPrice),
                    notionalValue: Number(e.notionalValue),
                    positionAmount: Number(e.positionAmount),
                    unrealizedProfit: Number(e.unrealizedProfit)
                })));
            var ne = r("IS1a");
            const ie = (e, t) => ({
                    balances: r
                }) => {
                    const n = (0, u.G)(r, "asset");
                    e.setQueryData(s.Bz.QUERY_PORTFOLIO_MARGIN_INFO, (e => e ? { ...e,
                        [t]: p()({}, e ? .[t], n)
                    } : e))
                },
                oe = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getUMUserAssetsStream" in e) {
                            return e.getUMUserAssetsStream().subscribe(ie(t, "umBalance"))
                        }
                        return l()
                    }
                }),
                ae = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getCMUserAssetsStream" in e) {
                            return e.getCMUserAssetsStream().subscribe(ie(t, "cmBalance"))
                        }
                        return l()
                    }
                }),
                se = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getAssetSpotOpenLostStream" in e) {
                            return e.getAssetSpotOpenLostStream().subscribe((e => {
                                t.setQueryData(s.Bz.QUERY_PORTFOLIO_MARGIN_INFO, (t => t ? { ...t,
                                    openOrderLoss: p()({}, t ? .openOrderLoss, e)
                                } : t))
                            }))
                        }
                        return l()
                    }
                });
            var ue = r("g77m"),
                ce = r.n(ue);
            let le = {},
                de = {};
            const pe = ce()((e => {
                    e.setQueryData(s.Bz.QUERY_PORTFOLIO_MARGIN_INFO, (e => e ? { ...e,
                        umPosition: le
                    } : e))
                }), 300),
                fe = ce()((e => {
                    e.setQueryData(s.Bz.QUERY_PORTFOLIO_MARGIN_INFO, (e => e ? { ...e,
                        cmPosition: de
                    } : e))
                }), 300),
                me = (e, t) => r => {
                    const n = Object.values(r).map((e => ({
                            symbol: e ? .symbol,
                            markPrice: e ? .markPrice
                        }))),
                        i = $(n);
                    "umPosition" === t ? (le = ee(le, p()({}, le, i)), pe(e)) : (de = ee(de, p()({}, de, i)), fe(e))
                },
                ve = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getMarkPriceMiniStream" in e) {
                            return e.getMarkPriceMiniStream().subscribe(me(t, "umPosition"))
                        }
                        return l()
                    }
                }),
                ge = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getMarkPriceMiniStream" in e) {
                            return e.getMarkPriceMiniStream().subscribe(me(t, "cmPosition"))
                        }
                        return l()
                    }
                }),
                ye = (e, t) => r => {
                    const n = $(Object.values(r));
                    "umPosition" === t ? (le = ee(le, p()({}, le, n)), pe(e)) : (de = ee(de, p()({}, de, n)), fe(e))
                },
                Te = ((0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getStreamTickers" in e) {
                            return e.getStreamTickers().subscribe(ye(t, "umPosition"))
                        }
                        return l()
                    }
                }), (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getStreamTickers" in e) {
                            return e.getStreamTickers().subscribe(ye(t, "cmPosition"))
                        }
                        return l()
                    }
                }), (e, t) => ({
                    positions: r
                }) => {
                    const n = Object.values(r).reduce(((e, t) => {
                        const {
                            symbol: r,
                            positionSide: n
                        } = t;
                        return e[H(r, n)] = { ...t,
                            pushTime: Date.now()
                        }, e
                    }), {});
                    "umPosition" === t ? (le = ee(le, p()({}, le, n)), pe(e)) : (de = ee(de, p()({}, de, n)), fe(e))
                }),
                _e = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getUMUserAssetsStream" in e) {
                            return e.getUMUserAssetsStream().subscribe(Te(t, "umPosition"))
                        }
                        return l()
                    }
                }),
                Ae = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getCMUserAssetsStream" in e) {
                            return e.getCMUserAssetsStream().subscribe(Te(t, "cmPosition"))
                        }
                        return l()
                    }
                }),
                be = (e, t) => r => {
                    const n = (Array.isArray(r) ? r : [r]).reduce(((e, t) => e.concat(t)), []),
                        i = "umPosition" === t ? le : de,
                        o = n.reduce(((e, t) => {
                            const {
                                askNotional: r = 0,
                                bidNotional: n = 0,
                                symbol: o,
                                positionSide: a
                            } = t, s = H(o, a), u = i[s];
                            return u && (e[s] = { ...u,
                                askNotional: r,
                                bidNotional: n
                            }), e
                        }), {});
                    "umPosition" === t ? (le = ee(le, o), pe(e)) : (de = ee(de, o), fe(e))
                },
                Se = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getUMUserOrderStream" in e) {
                            return e.getUMUserOrderStream().subscribe(be(t, "umPosition"))
                        }
                        return l()
                    }
                }),
                he = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getCMUserOrderStream" in e) {
                            return e.getCMUserOrderStream().subscribe(be(t, "cmPosition"))
                        }
                        return l()
                    }
                }),
                xe = (e, t) => r => {
                    const {
                        leverage: n
                    } = r;
                    if (!n) return;
                    const i = $([n]);
                    "umPosition" === t ? (le = p()({}, le, i), pe(e)) : (de = p()({}, de, i), fe(e))
                },
                Ee = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getUMUserAccountConfigUpdateStream" in e) {
                            return e.getUMUserAccountConfigUpdateStream().subscribe(xe(t, "umPosition"))
                        }
                        return l()
                    }
                }),
                Ie = (0, ne.j)({
                    queryKey: s.Bz.QUERY_PORTFOLIO_MARGIN_INFO,
                    subscribeToStreamFn: ({
                        stream: e,
                        queryClient: t
                    }) => {
                        if ("getCMUserAccountConfigUpdateStream" in e) {
                            return e.getCMUserAccountConfigUpdateStream().subscribe(xe(t, "cmPosition"))
                        }
                        return l()
                    }
                }),
                Re = async () => {
                    const {
                        data: e
                    } = await (0, Y.L)(), {
                        marginOpenLossList: t,
                        umPositionList: r,
                        cmPositionList: n,
                        umBalanceList: i,
                        cmBalanceList: o
                    } = e, a = te(re(r || [])), s = te(re(n || []));
                    return le = a, de = s, {
                        openOrderLoss: I()((t || []).map((({
                            asset: e,
                            loss: t
                        }) => ({
                            asset: e,
                            assetSpotOpenLost: t
                        }))), "asset"),
                        umPosition: a,
                        cmPosition: s,
                        umBalance: K(i || []),
                        cmBalance: K(o || [])
                    }
                },
                Oe = {
                    openOrderLoss: {},
                    umPosition: {},
                    cmPosition: {},
                    umBalance: {},
                    cmBalance: {}
                };
            var Ce = r("Bxol");
            var Ne = r("YxIV"),
                Le = r("0C+4");
            const Pe = ({
                    name: e,
                    queueMap: t
                }) => ({
                    copyTradingPayload: r
                }) => {
                    const {
                        copyTradeType: n,
                        portfolioId: i
                    } = r || {}, o = `${n}_${i}`, a = t[o];
                    if (a) return a;
                    const s = new Le.j({
                        name: `${e}_${o}`,
                        interval: 1e3,
                        maxSize: 1e4
                    });
                    return t[o] = s, s
                },
                ke = {},
                Me = (Pe({
                    name: "umPosition",
                    queueMap: ke
                }), new Le.j({
                    name: "cmPosition",
                    interval: 1e3,
                    maxSize: 1e4
                }), new Le.j({
                    name: "umMarkPrice",
                    interval: 1e3,
                    maxSize: 1e4
                }), new Le.j({
                    name: "cmMarkPrice",
                    interval: 1e3,
                    maxSize: 1e4
                }), new Le.j({
                    name: "cmBalance",
                    interval: 1e3,
                    maxSize: 1e4
                }), {}),
                De = (Pe({
                    name: "umBalance",
                    queueMap: Me
                }), {}),
                we = (Pe({
                    name: "umOrder",
                    queueMap: De
                }), new Le.j({
                    name: "cmOrder",
                    interval: 1e3,
                    maxSize: 1e4
                }), new Le.j({
                    name: "ticker",
                    interval: 1e3,
                    maxSize: 1e4
                }));
            new Le.j({
                name: "umTicker",
                interval: 1e3,
                maxSize: 1e4
            }), new Le.j({
                name: "cmTicker",
                interval: 1e3,
                maxSize: 1e4
            }), new Le.j({
                name: "tradeSnape",
                interval: 1e3,
                maxSize: 1e4
            }), new Le.j({
                name: "markPrice",
                interval: 1e3,
                maxSize: 1e4
            }), new Le.j({
                name: "topMovers",
                interval: 200,
                maxSize: 1e3
            });
            const Ue = ({
                    stream: e,
                    queryClient: t
                }) => {
                    if ("getStreamTickers" in e) {
                        const r = e => {
                            t.setQueryData(s.Bz.PRODUCT_TICKER_MAP, (t => t ? (0, V.Ay)(t, (t => {
                                const r = {};
                                e.reverse().forEach((e => {
                                    const {
                                        symbol: n
                                    } = e;
                                    if (r[n]) return;
                                    r[n] = !0;
                                    const i = t[n],
                                        o = Number(e.lastPrice || 0) - Number(i ? .lastPrice || 0),
                                        a = i ? .lastPrice ? 0 === o ? i.lastFlag : o : void 0;
                                    t[n] ? Object.assign(t[n], e, {
                                        lastFlag: a
                                    }) : t[n] = { ...e,
                                        lastFlag: a
                                    }
                                }))
                            })) : t))
                        };
                        we.addWorker(r);
                        const n = e.getStreamTickers().subscribe((e => {
                            Object.keys(e).forEach((t => {
                                we.push(e[t])
                            }))
                        }));
                        return () => {
                            n(), we.removeWorker(r)
                        }
                    }
                    return l()
                },
                Be = (0, ne.j)({
                    queryKey: s.Bz.PRODUCT_TICKER_MAP,
                    subscribeToStreamFn: Ue
                }),
                qe = (0, ne.j)({
                    queryKey: s.Bz.PRODUCT_TICKER_MAP,
                    subscribeToStreamFn: Ue
                }),
                je = ({
                    enabled: e = !0,
                    getUMSDK: t,
                    getCMSDK: r,
                    select: n
                } = {
                    enabled: !0
                }) => {
                    const o = (0, i.useQueryClient)(),
                        u = (0, Ce.sd)().data ? .productMap || Ce.uQ.productMap,
                        c = (() => {
                            const {
                                isLoading: e,
                                isFetching: t
                            } = (0, Ce.sd)();
                            return e || t
                        })(),
                        {
                            data: l
                        } = (0, i.useQuery)(s.Bz.PRODUCT_TICKER_MAP, (() => u), {
                            select: n,
                            enabled: e && !c,
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0,
                            notifyOnChangeProps: ["data"]
                        }),
                        d = (0, Ne.ve)();
                    return (0, a.useEffect)((function() {
                        e && !c && (d || t || r) && (qe({
                            getSDK: d ? () => d({
                                isCM: !1
                            }) : t,
                            queryClient: o
                        }), Be({
                            getSDK: d ? () => d ? .({
                                isCM: !0
                            }) : r,
                            queryClient: o
                        }))
                    }), [o, e, c, d, t, r]), l || ("function" === typeof n ? n(u) : u)
                },
                Fe = e => {
                    const {
                        openOrderLoss: t,
                        umPosition: r,
                        cmPosition: n,
                        umBalance: o,
                        cmBalance: u
                    } = (({
                        enabled: e,
                        getPMSDK: t,
                        getUMSDK: r,
                        getCMSDK: n
                    }) => {
                        const o = (0, i.useQueryClient)(),
                            u = s.Bz.QUERY_PORTFOLIO_MARGIN_INFO;
                        (0, a.useEffect)((() => {
                            !1 !== e && (oe({
                                getSDK: t,
                                queryClient: o
                            }), ae({
                                getSDK: t,
                                queryClient: o
                            }), se({
                                getSDK: t,
                                queryClient: o
                            }), ve({
                                getSDK: r,
                                queryClient: o
                            }), ge({
                                getSDK: n,
                                queryClient: o
                            }), _e({
                                getSDK: t,
                                queryClient: o
                            }), Ae({
                                getSDK: t,
                                queryClient: o
                            }), Se({
                                getSDK: t,
                                queryClient: o
                            }), he({
                                getSDK: t,
                                queryClient: o
                            }), Ee({
                                getSDK: t,
                                queryClient: o
                            }), Ie({
                                getSDK: t,
                                queryClient: o
                            }))
                        }), [e]);
                        const {
                            data: c
                        } = (0, i.useQuery)(u, Re, {
                            enabled: e,
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0
                        });
                        return !1 === e ? Oe : c || Oe
                    })(e), {
                        getUMSDK: c,
                        getCMSDK: l,
                        enabled: d,
                        preloadedAllTickerMap: p
                    } = e, f = je({
                        enabled: !1 !== d && void 0 === p,
                        getUMSDK: c,
                        getCMSDK: l
                    });
                    return {
                        umPositionList: h(r, p || f),
                        cmPositionList: h(n, p || f),
                        umBalanceList: N(o),
                        cmBalanceList: N(u),
                        assetSpotOpenLostArray: P(t)
                    }
                },
                Qe = ({
                    enabled: e,
                    preloadedCMProductMap: t
                } = {}) => {
                    const r = O({
                        enabled: !1 !== e && void 0 === t
                    });
                    return {
                        cmContractSizeArray: M(t || r)
                    }
                },
                Ge = e => {
                    const t = v({
                            isCM: !1,
                            ...e
                        }),
                        r = v({
                            isCM: !0,
                            ...e
                        });
                    return {
                        umBracketList: w(t),
                        cmBracketList: w(r)
                    }
                },
                Ye = e => {
                    const t = (0, G.L)(e);
                    return {
                        assetIndexPriceArray: q(t),
                        pmAssetIndexMap: t
                    }
                },
                Ke = () => {
                    const {
                        data: e = []
                    } = (() => {
                        const e = s.Bz.COLLATERAL_RATE;
                        return (0, i.useQuery)(e, Q.NZ, {
                            placeholderData: {},
                            select: e => e ? .data || [],
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0
                        })
                    })();
                    return {
                        collateralRates: F(e)
                    }
                };
            const Ve = r("qwk9").i.getInstance(),
                {
                    initialMargin: We,
                    maintenanceMargin: ze,
                    totalDebt: He,
                    totalNotionalValue: $e,
                    futuresAvailable: Ze,
                    feVirtualAvailable: Je,
                    adjustedEquity: Xe,
                    unpaidInterests: et,
                    negativeBalances: tt,
                    borrowedInMargin: rt,
                    calcUMLiquidationPrice: nt,
                    calcCMLiquidationPrice: it
                } = Ve,
                ot = 1e3,
                at = ce()(We, ot),
                st = ce()(ze, ot),
                ut = ce()(He, ot),
                ct = (ce()($e, ot), ce()(Ze, ot)),
                lt = ce()(Je, ot),
                dt = ce()(Xe, ot),
                pt = ce()(et, ot),
                ft = ce()(tt, ot),
                mt = ce()(rt, ot),
                vt = ({
                    preloadedCMProductMap: e,
                    preloadedAllTickerMap: t,
                    getPMSDK: r,
                    getUMSDK: i,
                    getCMSDK: o,
                    enabled: a
                }) => {
                    const {
                        spotLoanList: s = [],
                        spotBalances: u = [],
                        lvList: c,
                        mmrList: l
                    } = (0, n.Od)({
                        getSpotSDK: r,
                        enabled: a
                    }), {
                        umPositionList: d,
                        cmPositionList: p,
                        umBalanceList: f,
                        cmBalanceList: m,
                        assetSpotOpenLostArray: v
                    } = Fe({
                        getPMSDK: r,
                        getUMSDK: i,
                        getCMSDK: o,
                        enabled: a,
                        preloadedAllTickerMap: t
                    }), {
                        cmContractSizeArray: g
                    } = Qe({
                        enabled: a,
                        preloadedCMProductMap: e
                    }), {
                        collateralRates: y
                    } = Ke(), {
                        assetIndexPriceArray: T
                    } = Ye({
                        getUMSDK: i,
                        enabled: a
                    }), {
                        umBracketList: _,
                        cmBracketList: A
                    } = Ge({
                        getUMSDK: i,
                        getCMSDK: o,
                        enabled: a
                    });
                    return !1 === a ? {
                        initialMargin: "0",
                        maintenanceMargin: "0",
                        adjustedEquity: "0"
                    } : {
                        initialMargin: at(d, p, f, m, g, T, s, c),
                        maintenanceMargin: st(d, p, _, A, T, g, s, c, l),
                        adjustedEquity: dt(d, f, p, m, g, y, u, s, T, v)
                    }
                },
                gt = ({
                    preloadedCMProductMap: e,
                    preloadedAllTickerMap: t,
                    getPMSDK: r,
                    getUMSDK: i,
                    getCMSDK: o,
                    enabled: a
                }) => {
                    const {
                        spotLoanList: s = [],
                        spotBalances: u = [],
                        lvList: c
                    } = (0, n.Od)({
                        getSpotSDK: r,
                        enabled: a
                    }), {
                        umPositionList: l,
                        cmPositionList: d,
                        umBalanceList: p,
                        cmBalanceList: f,
                        assetSpotOpenLostArray: m
                    } = Fe({
                        getPMSDK: r,
                        getUMSDK: i,
                        getCMSDK: o,
                        enabled: a,
                        preloadedAllTickerMap: t
                    }), {
                        cmContractSizeArray: v
                    } = Qe({
                        enabled: a,
                        preloadedCMProductMap: e
                    }), {
                        collateralRates: g
                    } = Ke(), {
                        assetIndexPriceArray: y
                    } = Ye({
                        getUMSDK: i,
                        enabled: a
                    });
                    return !1 === a ? "0" : lt(l, p, d, f, v, g, s, u, y, m, c)
                },
                yt = ({
                    preloadedCMProductMap: e,
                    preloadedAllTickerMap: t,
                    getPMSDK: r,
                    getUMSDK: i,
                    getCMSDK: o,
                    enabled: a
                }) => {
                    const {
                        spotLoanList: s = [],
                        spotBalances: u = [],
                        lvList: c
                    } = (0, n.Od)({
                        getSpotSDK: r,
                        enabled: a
                    }), {
                        umPositionList: l,
                        cmPositionList: d,
                        umBalanceList: p,
                        cmBalanceList: f,
                        assetSpotOpenLostArray: m
                    } = Fe({
                        getPMSDK: r,
                        getUMSDK: i,
                        getCMSDK: o,
                        enabled: a,
                        preloadedAllTickerMap: t
                    }), {
                        cmContractSizeArray: v
                    } = Qe({
                        enabled: a,
                        preloadedCMProductMap: e
                    }), {
                        collateralRates: g
                    } = Ke(), {
                        assetIndexPriceArray: y,
                        pmAssetIndexMap: T
                    } = Ye({
                        getUMSDK: i,
                        enabled: a
                    });
                    return {
                        pmFuturesVirtualAvailable: !1 === a ? "0" : lt(l, p, d, f, v, g, s, u, y, m, c),
                        pmAssetIndexMap: T
                    }
                },
                Tt = ({
                    preloadedCMProductMap: e,
                    preloadedAllTickerMap: t,
                    unitAsset: r,
                    getPMSDK: i,
                    getUMSDK: o,
                    getCMSDK: a,
                    enabled: s
                }) => {
                    const {
                        spotLoanList: u = [],
                        spotBalances: c = [],
                        lvList: l
                    } = (0, n.Od)({
                        getSpotSDK: i,
                        enabled: s
                    }), {
                        umPositionList: d,
                        cmPositionList: p,
                        umBalanceList: f,
                        cmBalanceList: m,
                        assetSpotOpenLostArray: v
                    } = Fe({
                        getPMSDK: i,
                        getUMSDK: o,
                        getCMSDK: a,
                        enabled: s,
                        preloadedAllTickerMap: t
                    }), {
                        cmContractSizeArray: g
                    } = Qe({
                        enabled: s,
                        preloadedCMProductMap: e
                    }), {
                        collateralRates: y
                    } = Ke(), {
                        assetIndexPriceArray: T
                    } = Ye({
                        getUMSDK: o,
                        enabled: s
                    });
                    return !1 === s ? "0" : ct(r, d, f, p, m, g, y, u, c, T, v, l)
                },
                _t = ({
                    getPMSDK: e,
                    getUMSDK: t,
                    getCMSDK: r,
                    enabled: i,
                    preloadedAllTickerMap: o
                }) => {
                    const {
                        spotLoanList: s = []
                    } = (0, n.Od)({
                        getSpotSDK: e,
                        enabled: i
                    }), {
                        umBalanceList: u,
                        cmBalanceList: c
                    } = Fe({
                        getPMSDK: e,
                        getUMSDK: t,
                        getCMSDK: r,
                        enabled: i,
                        preloadedAllTickerMap: o
                    }), {
                        assetIndexPriceArray: l
                    } = Ye({
                        getUMSDK: t,
                        enabled: i
                    });
                    return (0, a.useMemo)((() => !1 === i ? {
                        unpaidInterests: "0",
                        negativeBalances: "0",
                        borrowedInMargin: "0",
                        totalDebt: "0"
                    } : {
                        unpaidInterests: pt(l, s),
                        negativeBalances: ft(u, c, l),
                        borrowedInMargin: mt(l, s),
                        totalDebt: ut(u, c, l, s)
                    }), [l, c, s, u, i])
                },
                At = ({
                    preloadedCMProductMap: e,
                    preloadedAllTickerMap: t,
                    getPMSDK: r,
                    getUMSDK: i,
                    getCMSDK: o,
                    enabled: a
                }) => {
                    const {
                        spotLoanList: s = [],
                        spotBalances: u = [],
                        lvList: c,
                        mmrList: l
                    } = (0, n.Od)({
                        getSpotSDK: r,
                        enabled: a
                    }), {
                        umPositionList: d,
                        cmPositionList: p,
                        umBalanceList: f,
                        cmBalanceList: m,
                        assetSpotOpenLostArray: v
                    } = Fe({
                        getPMSDK: r,
                        getUMSDK: i,
                        getCMSDK: o,
                        enabled: a,
                        preloadedAllTickerMap: t
                    }), {
                        cmContractSizeArray: g
                    } = Qe({
                        enabled: a,
                        preloadedCMProductMap: e
                    }), {
                        collateralRates: y
                    } = Ke(), {
                        assetIndexPriceArray: T
                    } = Ye({
                        getUMSDK: i,
                        enabled: a
                    }), {
                        umBracketList: _,
                        cmBracketList: A
                    } = Ge({
                        getUMSDK: i,
                        getCMSDK: o,
                        enabled: a
                    });
                    return {
                        umPositionList: d,
                        umBalanceList: f,
                        umBracketList: _,
                        cmPositionList: p,
                        cmBalanceList: m,
                        cmBracketList: A,
                        cmContractSizeArray: g,
                        collateralRates: y,
                        spotBalances: u,
                        spotLoanList: s,
                        assetSpotOpenLostArray: v,
                        assetIndexPriceArray: T,
                        lvList: c,
                        mmrList: l
                    }
                },
                bt = (e, t, r) => {
                    const n = b(e),
                        {
                            umPositionList: i,
                            umBalanceList: o,
                            umBracketList: s,
                            cmPositionList: u,
                            cmBalanceList: c,
                            cmBracketList: l,
                            cmContractSizeArray: d,
                            collateralRates: p,
                            spotBalances: f,
                            spotLoanList: m,
                            assetSpotOpenLostArray: v,
                            assetIndexPriceArray: g,
                            lvList: y,
                            mmrList: T
                        } = At(r),
                        _ = (0, a.useRef)(ce()(nt, 3e3)).current,
                        A = (0, a.useRef)(ce()(it, 3e3)).current,
                        S = t ? A : _;
                    return !1 === r.enabled ? "0" : S(n, i, o, s, u, c, l, d, p, f, m, v, g, y, T)
                }
        },
        xrJm: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i,
                u: () => n
            });
            const n = () => "undefined" !== typeof window && /windows|win32/i.test(window.navigator.userAgent),
                i = () => n() ? "win" : "mac"
        },
        "8TKQ": (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => n
            });
            var n = {
                DISCLAIMER_CONTENT: "DISCLAIMER_WARNING",
                DISCLAIMER_POPUP_CONTENT: "DISCLAIMER_POPUP_WARNING",
                DISCLAIMER_RED: "DISCLAIMER_RED",
                NEWS_H5_PREFERENCE: "h5-news-preference",
                popularTabCoachMark: "POPULAR_TAB_COACH_MARK",
                ELECTRON_PRODUCTS: "ELECTRON_PRODUCTS",
                getPopularTabFilters: function(e) {
                    return "POPULAR_TAB_FILTERS_".concat(e.toUpperCase())
                },
                MARKET_TABS: "MARKET_TABS",
                DISCLAIMER_RED_DIALOG: "DISCLAIMER_RED_DIALOG"
            }
        },
        ZGYs: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            var n = {
                HEADER: "HEADER",
                AUTO_BORROW: "AUTO_BORROW",
                CROSS_ACCOUNT: "CROSS_ACCOUNT",
                ACCOUNT_MODE: "ACCOUNT_MODE",
                BASIS: "BASIS",
                TRADE_RULES: "TRADE_RULES",
                DATA_INFO: "DATA_INFO",
                SHORTCUTS: "SHORTCUTS"
            }
        },
        Qhol: (e, t, r) => {
            "use strict";
            r.d(t, {
                z0T: () => w.z0,
                Pwh: () => ut,
                tdz: () => ct,
                Oy$: () => ke.Oy,
                BkF: () => vr,
                xMv: () => Tr,
                dUb: () => x,
                P7H: () => I,
                DGl: () => E,
                bNJ: () => y,
                hXu: () => M,
                _id: () => w._i,
                pP0: () => oe,
                fbc: () => vt,
                by5: () => ce.by,
                L1A: () => br,
                HQg: () => R.H,
                qkd: () => b.q,
                x$o: () => Ot,
                NUE: () => pr.NU,
                b3O: () => pr.b3,
                Amo: () => ce.Am,
                MXs: () => F,
                jH7: () => Ye,
                nDu: () => U,
                kao: () => Q.k,
                MJ0: () => It,
                oOR: () => B,
                U2V: () => d,
                YGq: () => yt.YG,
                ttu: () => _,
                tSU: () => ir,
                RYv: () => ne,
                MRb: () => w.MR,
                H9X: () => ar,
                hUq: () => dr,
                Bm2: () => yt.Bm,
                tk1: () => yt.tk,
                $X2: () => w.$X,
                s1N: () => tr,
                uRb: () => sr,
                GER: () => nr,
                rTg: () => ae,
                thk: () => rr,
                NZ0: () => or,
                TBx: () => gt,
                LUR: () => qt,
                be3: () => Bt,
                sb7: () => b.s,
                Mjn: () => Lt,
                h_5: () => yr,
                DYq: () => $t,
                FzM: () => Ut,
                joH: () => ce.jo,
                mbc: () => jt.mb,
                $mR: () => jt.$m,
                ME5: () => jt.ME,
                nNw: () => jt.nN,
                UT5: () => jt.UT,
                wiF: () => jt.wi,
                qK7: () => jt.qK,
                iMB: () => jt.iM,
                BSp: () => jt.BS,
                oqM: () => jt.oq,
                yD_: () => jt.yD,
                p8K: () => jt.p8,
                YVB: () => Rr.Y,
                rJh: () => jt.rJ,
                z1p: () => jt.z1,
                Hix: () => jt.Hi,
                Kc7: () => jt.Kc,
                lw3: () => jt.lw,
                qK2: () => jt.Zm,
                S1y: () => jt.S1,
                pl4: () => jt.pl,
                Rp$: () => jt.Rp,
                vAQ: () => jt.vA,
                Cf3: () => jt.Cf,
                p9q: () => Pt,
                N2e: () => Ft,
                qgR: () => ke.qg,
                stA: () => Ar,
                nHk: () => S.nH,
                NSY: () => Gt,
                mcl: () => jt.mc,
                FCl: () => Nt,
                yTn: () => jt.yT,
                KTH: () => jt.KT,
                i24: () => ke.i2,
                Fky: () => ke.Fk,
                _h0: () => jt._h,
                zCE: () => Ct,
                CLR: () => Qt,
                DFo: () => Jt,
                HuG: () => Or.Hu,
                ok2: () => A.ok,
                hUb: () => J,
                vzt: () => S.vz,
                RYR: () => Er,
                Jon: () => s,
                Ned: () => xt,
                SJn: () => mr,
                _ar: () => G._,
                q$z: () => jt.q$,
                Oc_: () => Oe,
                O9C: () => Ht,
                $iq: () => S.$i,
                Uan: () => Pe,
                KBk: () => qe,
                U8Q: () => ue,
                dk7: () => se,
                m03: () => Ne,
                Yej: () => Sr,
                Z9o: () => We,
                SVN: () => Ve,
                k0r: () => C.k0,
                g8W: () => Ir.g8,
                ZCR: () => Yt,
                Bjx: () => C.Bj,
                rSl: () => C.rS,
                igz: () => P,
                l6p: () => k,
                xXR: () => C.xX,
                puJ: () => C.pu,
                hFK: () => C.hF,
                Y5O: () => Ce,
                otd: () => D,
                ipf: () => pr.ip,
                wp2: () => C.wp,
                QsY: () => De.Q,
                A_u: () => dt,
                XA$: () => lt,
                yEO: () => g,
                okI: () => Fe.o,
                qB_: () => jt.qB,
                zpw: () => _r,
                $yB: () => A.$y,
                XY5: () => A.XY,
                jUM: () => zt,
                d3A: () => ke.d3,
                sL: () => l.s,
                cHp: () => c,
                KUg: () => He,
                zZc: () => C.zZ,
                DPo: () => ce.DP,
                gh4: () => yt.gh,
                wjM: () => me,
                xkU: () => fe,
                eY6: () => je,
                CUO: () => A.CU,
                Grl: () => ke.Gr,
                I7v: () => R.I,
                Pyz: () => S.Py,
                FH0: () => Me.F,
                Bpf: () => kt,
                NF7: () => C.NF
            });
            var n, i = r("DTvD"),
                o = r("MD8j"),
                a = r("bQ69"),
                s = function() {
                    var e = (0, o.wA)();
                    (0, i.useEffect)((function() {
                        return (0, a.D5)().getStreamTickers().subscribe((function() {
                            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            return e.miniTicker.updateSpot(r)
                        }))
                    }), [e.miniTicker])
                },
                u = r("lW1t"),
                c = function() {
                    return (0, o.d4)(u.makeSymbolChangedCounter)
                },
                l = r("gz7j"),
                d = function(e) {
                    var t = (0, i.useState)(e),
                        r = t[0],
                        n = t[1];
                    return {
                        filters: r,
                        setFilter: n,
                        useHandler: function(e) {
                            return (0, i.useMemo)((function() {
                                var t = Object.keys(r);
                                return (e || []).filter((function(e) {
                                    return !t.length || t.every((function(t) {
                                        return r[t](e)
                                    }))
                                }))
                            }), [r, e])
                        }
                    }
                },
                p = r("EnBZ"),
                f = r("mguP"),
                m = r("d12p"),
                v = r("92Cd"),
                g = function(e, t) {
                    var r = (0, i.useRef)(null);
                    return (0, i.useEffect)((function() {
                        var t = r.current;
                        if (t && (0, p._)(t, Element)) {
                            var n = t.querySelector(e);
                            n && (0, p._)(n, Element) && (n.scrollTop = 0)
                        }
                    }), (0, m._)(t)), {
                        boxRef: r
                    }
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 50,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = (0, f._)((0, v.wY)(), 2),
                        n = r[0],
                        o = r[1],
                        a = o.height;
                    return (0, i.useEffect)((function() {
                        var r, i = n.current;
                        a && i && t && i.parentElement && i.offsetHeight - (null === (r = i.parentElement) || void 0 === r ? void 0 : r.offsetHeight) > e && (i.parentElement.scrollTop = i.offsetHeight - i.parentElement.offsetHeight)
                    }), [a, t]), [n, o]
                },
                T = r("tM9B"),
                _ = function(e) {
                    return {
                        format: (0, i.useCallback)((function(t) {
                            return t ? (0, T.ZV)(t, e) : "-"
                        }), [e])
                    }
                },
                A = r("b2AH");
            r("Vur3");
            ! function(e) {
                e[e.Undecided = 0] = "Undecided", e[e.Selected = 1] = "Selected", e[e.Unselected = 2] = "Unselected"
            }(n || (n = {}));
            var b = r("KLjx"),
                S = r("c2J1"),
                h = r("OKXq"),
                x = function() {
                    return (0, o.d4)(h.makeAssets)
                },
                E = function() {
                    return (0, o.d4)(h.isAssetsLoading)
                },
                I = function() {
                    return (0, o.d4)(h.isAssetsError)
                },
                R = r("/kUC"),
                O = r("r86R"),
                C = r("eWL+"),
                N = Math.log10,
                L = Math.abs,
                P = function(e, t, r) {
                    var n = (0, C.hF)()[e] || {};
                    t && 0 !== Object.keys(t).length && (n = t);
                    var o = n.minQty,
                        a = void 0 === o ? 1e-7 : o,
                        s = n.tickSize,
                        u = void 0 === s ? 1e-7 : s,
                        c = L(N(a)),
                        l = L(N(u));
                    return {
                        product: n,
                        formatTk: (0, i.useCallback)((function(e) {
                            return e ? (0, T.ZV)(e, l) : "-"
                        }), [l]),
                        formatMi: (0, i.useCallback)((function(e) {
                            return r ? (0, O.lP)(+e, c) : e ? (0, T.ZV)(e, c) : "-"
                        }), [c, r])
                    }
                },
                k = function() {
                    var e = (0, C.Bj)();
                    return {
                        getFormatSize: (0, i.useCallback)((function(t) {
                            var r = e[t] || {},
                                n = r.tickSize,
                                i = r.minQty;
                            return {
                                ts: n && L(N(n)) || 8,
                                mi: i && L(N(n)) || 8
                            }
                        }), [e])
                    }
                },
                M = function(e) {
                    var t, r;
                    return (null === (t = (0, C.hF)()) || void 0 === t || null === (r = t[e]) || void 0 === r ? void 0 : r.baseAsset) || ""
                },
                D = function(e) {
                    var t, r;
                    return (null === (t = (0, C.hF)()) || void 0 === t || null === (r = t[e]) || void 0 === r ? void 0 : r.quoteAsset) || ""
                },
                w = r("IIoL"),
                U = function() {
                    var e = (0, C.hF)(),
                        t = [],
                        r = {};
                    return Object.keys(e).map((function(n) {
                        var i = e[n],
                            o = i.etf,
                            a = i.baseAsset;
                        o && (r[a] || (t.push(a), r[a] = i))
                    })), {
                        ETFList: t,
                        ETFMap: r
                    }
                },
                B = function() {
                    var e = (0, C.hF)(),
                        t = [],
                        r = {};
                    return Object.keys(e).map((function(n) {
                        var i = e[n],
                            o = i.quoteAsset,
                            a = void 0 === o ? "" : o,
                            s = i.parentMarket;
                        "FIAT" === (void 0 === s ? "" : s) && (r[a] || (t.push(a), r[a] = i))
                    })), {
                        FAITList: t,
                        FAITMap: r
                    }
                },
                q = r("NoXm"),
                j = {
                    isFuturesVisible: !0,
                    isLvtVisible: !0,
                    isTOptionsVisible: !0
                };

            function F() {
                var e = (0, i.useState)(j),
                    t = e[0],
                    r = e[1],
                    n = (0, S.nH)(),
                    o = (0, f._)((0, q.useCacheState)("region"), 1)[0],
                    a = (0, S.Py)(),
                    s = a.noDerivativesFutures,
                    u = a.noDerivativesLVT,
                    c = a.noDerivativesToptions;
                return (0, i.useEffect)((function() {
                    var e, t;
                    n ? r({
                        isFuturesVisible: !s,
                        isLvtVisible: !u,
                        isTOptionsVisible: !c
                    }) : "es" !== (null === (e = o) || void 0 === e || null === (t = e.country) || void 0 === t ? void 0 : t.toLowerCase()) ? r(j) : r({
                        isFuturesVisible: !1,
                        isLvtVisible: !1,
                        isTOptionsVisible: !1
                    })
                }), [n, o, s, u, c]), t
            }
            var Q = r("ctcW"),
                G = r("XNzI"),
                Y = r("S+0I"),
                K = r("jbFV"),
                V = r.n(K),
                W = r("iXts"),
                z = r("x76r"),
                H = r("5JIq"),
                $ = function() {
                    return (0, H.i)(new Date, "yyyy-MM-dd hh:mm:ss")
                },
                Z = [],
                J = function(e) {
                    var t = {
                            offset: 0,
                            limit: e
                        },
                        r = (0, W.W)(Z, t),
                        n = r.pagination,
                        o = r.updatePagination,
                        a = (0, i.useState)($()),
                        s = a[0],
                        u = a[1],
                        c = n.offset;
                    return (0, z.A)((function() {
                        o({
                            offset: c + 1
                        })
                    }), 100 / 6, [s]), {
                        pagination: n,
                        refresh: function() {
                            return o({
                                offset: 0
                            })
                        },
                        loadMore: (0, Y._)(V().mark((function e() {
                            return V().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", u($()));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }
                },
                X = r("fl7p"),
                ee = r("zx3+"),
                te = {
                    ask: {
                        tree: [],
                        entityById: {},
                        levelById: {}
                    },
                    bid: {
                        tree: [],
                        entityById: {},
                        levelById: {}
                    }
                };

            function re(e, t) {
                for (var r = e.tree.slice(), n = e.levelById, i = []; r.length > 0;) {
                    var o = (t ? r.pop() : r.shift()) || {},
                        a = o.price,
                        s = o.levelID,
                        u = o.children;
                    if (u) r = t ? r.concat(u) : u.concat(r);
                    else {
                        var c = n[s];
                        c && a && i.push([a, c.amount, c.total])
                    }
                }
                return i
            }
            var ne = function(e) {
                    var t = ((0, o.d4)((function(e) {
                            return e.exchangeInfo.infos
                        }))[e] || {
                            levels: X.A_.map((function(e) {
                                return (0, X.rM)(e)
                            }))
                        }).levels,
                        r = ((0, C.hF)()[e] || {}).minQty,
                        n = void 0 === r ? "0.00000001" : r,
                        s = (0, ee.w1)(Number(n)),
                        u = (0, i.useRef)(te);
                    return (0, i.useEffect)((function() {
                        var r;
                        try {
                            r = (0, a.D$)().getOrderbookStore(e, {
                                levels: t,
                                quantityPrecision: s
                            }, !1).subscribe((function(e) {
                                u.current = e
                            }))
                        } catch (n) {
                            console.error(n)
                        }
                        return r
                    }), [e, t, s, u]), (0, i.useCallback)((function() {
                        var e = u.current,
                            t = re(e.bid, !0),
                            r = re(e.ask, !1);
                        return e = null, {
                            bids: t,
                            asks: r
                        }
                    }), [])
                },
                ie = r("6NLa"),
                oe = function() {
                    return (0, o.d4)(ie.makeBurnBnbRate)
                },
                ae = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = (0, i.useRef)("0");
                    return (0, i.useEffect)((function() {
                        r.current = t.close || "0"
                    }), [t]), (0, i.useEffect)((function() {
                        return (0, a.D$)().getStreamTrade(e).subscribe((function(e) {
                            var t = (e[0] || {}).price;
                            r.current = t
                        }))
                    }), [e]), (0, i.useCallback)((function() {
                        return r.current
                    }), [r])
                },
                se = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return (0, o.d4)((function(t) {
                        var r = "priceQty".concat(e);
                        return t.orderForm[r] || t.orderForm.priceQty || {}
                    }))
                },
                ue = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return (0, o.d4)((function(t) {
                        var r = "inputFocus".concat(e);
                        return t.orderForm[r] || t.orderForm.inputFocus || {}
                    }))
                },
                ce = r("G7PN"),
                le = r("rOIZ"),
                de = Math.log10,
                pe = Math.abs,
                fe = function(e) {
                    return (0, i.useMemo)((function() {
                        return pe(de(e))
                    }), [e])
                },
                me = function(e) {
                    var t = (0, C.Bj)()[e] || {};
                    return (0, le.XV)(t.tickSize)
                },
                ve = r("hrAD"),
                ge = r("qoEP"),
                ye = r("KrVi"),
                Te = r("0603"),
                _e = r("Ja0G"),
                Ae = r("Bz5g"),
                be = r("ozYv");

            function Se(e) {
                return he.apply(this, arguments)
            }

            function he() {
                return (he = (0, Y._)(V().mark((function e(t) {
                    var r, n, i, o, a, s;
                    return V().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.asyncRequest, n = t.times, i = void 0 === n ? 4 : n, o = t.promiseTimeout, a = void 0 === o ? 1e4 : o, i) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", {
                                    success: !1
                                });
                            case 3:
                                return e.prev = 3, e.next = 6, (0, be.q4)(r(), [{
                                    success: !1
                                }], a);
                            case 6:
                                if (!(s = e.sent) || !s[0] || !1 !== s[0].success) {
                                    e.next = 14;
                                    break
                                }
                                return i -= 1, e.next = 11, Se({
                                    asyncRequest: r,
                                    times: i,
                                    promiseTimeout: a
                                });
                            case 11:
                            case 22:
                                return e.abrupt("return", e.sent);
                            case 14:
                                return e.abrupt("return", s);
                            case 15:
                                e.next = 23;
                                break;
                            case 17:
                                return e.prev = 17, e.t0 = e.catch(3), i -= 1, e.next = 22, Se({
                                    asyncRequest: r,
                                    times: i,
                                    promiseTimeout: a
                                });
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [3, 17]
                    ])
                })))).apply(this, arguments)
            }

            function xe(e, t) {
                return Ee.apply(this, arguments)
            }

            function Ee() {
                return (Ee = (0, Y._)(V().mark((function e(t, r) {
                    var n, i, o, a, s;
                    return V().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = {
                                    times: 4,
                                    promiseTimeout: 1e4
                                }, i = (0, ve._)({}, n, r), o = i.times, a = i.promiseTimeout, e.next = 4, Se({
                                    asyncRequest: t,
                                    times: o,
                                    promiseTimeout: a
                                });
                            case 4:
                                return s = e.sent, e.abrupt("return", s);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Ie = r("jD6E"),
                Re = r("E4Qg"),
                Oe = function() {
                    return (0, o.d4)(_e.makeOpenOrder)
                },
                Ce = function(e) {
                    var t = (0, S.nH)(),
                        r = (0, Re.M)(),
                        n = (0, Te.s)((0, Y._)(V().mark((function n() {
                            var i, o;
                            return V().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t && !r) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return", []);
                                    case 2:
                                        return i = e ? {
                                            accountType: e
                                        } : {}, n.next = 5, xe((function() {
                                            return (0, Ae.L)(i)
                                        }));
                                    case 5:
                                        if (null !== (o = n.sent.data)) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt("return", []);
                                    case 8:
                                        return n.abrupt("return", o.map((function(e) {
                                            return (0, ge._)((0, ve._)({}, e), {
                                                prefixStr: (0, Ie.y5)(e)
                                            })
                                        })));
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [t], {
                            value: null
                        }),
                        i = n.value,
                        o = (0, ye._)(n, ["value"]);
                    return (0, ge._)((0, ve._)({}, o), {
                        openOrders: i
                    })
                },
                Ne = function() {
                    return (0, o.d4)(_e.makeOrderHistory)
                },
                Le = (r("dbe9"), r("hL8O")),
                Pe = function() {
                    return (0, o.d4)(Le.makeData)
                },
                ke = r("qoEh"),
                Me = r("H+pn"),
                De = r("UWKL"),
                we = r("UXyB"),
                Ue = r("wtFP"),
                Be = r("hAzz"),
                qe = function() {
                    var e = (0, i.useState)(a.vI.DIS_CONNECTED),
                        t = e[0],
                        r = e[1];
                    return (0, i.useEffect)((function() {
                        var e = Date.now(),
                            t = new Set,
                            n = (0, a.D$)().getOrderbookStatusStream().subscribe((function(n) {
                                var i = n.status,
                                    o = n.times;
                                ! function(r) {
                                    t.has(r) || (t.add(r), (0, Ue.u4)("stream", {
                                        duration: (0, Be.a3)(Date.now() - e),
                                        status: r
                                    }))
                                }(i), i === a.vI.CONNECTING && o > 5 ? r(a.vI.DIS_CONNECTED) : r(i)
                            }));
                        return n
                    }), []), (0, we.A)((function() {
                        t === a.vI.DIS_CONNECTED && (0, Ue.u4)("ws_disconnected", {
                            status: t,
                            isFutures: !1
                        })
                    }), [t]), t
                };
            var je = function(e) {
                    var t = (0, i.useState)(!!e),
                        r = t[0],
                        n = t[1];
                    return [r, (0, i.useCallback)((function() {
                        n((function(e) {
                            return !e
                        }))
                    }), [])]
                },
                Fe = r("Rb/Q"),
                Qe = r("ZvZy"),
                Ge = r("zHUU"),
                Ye = function() {
                    var e = (0, Ge.uU)();
                    return (0, Qe.y)(e)
                },
                Ke = r("Ov3/"),
                Ve = function(e) {
                    var t = (0, o.d4)((function(e) {
                        return e.pageStore.page
                    }));
                    return "".concat(t, "-").concat(e)
                },
                We = function(e, t) {
                    var r = Ve(e);
                    return (0, Ke.A)(r, t)
                },
                ze = (r("sR6W"), r("d/69")),
                He = function(e) {
                    var t = ((0, C.hF)()[e] || {}).tags,
                        r = (0, C.zZ)() || {},
                        n = ["bsc", "mining-zone"];
                    return (0, i.useMemo)((function() {
                        return Array.isArray(t) ? t.filter((function(e) {
                            return n.indexOf("".concat(e).toLocaleLowerCase()) < 0
                        })).filter((function(e) {
                            return !!r[e] || e === ze.hr
                        })) : []
                    }), [t, r])
                },
                $e = r("iKvg"),
                Ze = r("mXdx"),
                Je = r("BiCW"),
                Xe = r("J+v0"),
                et = r.n(Xe),
                tt = r("ppwf"),
                rt = r("VA12"),
                nt = r("Wywd"),
                it = r("4hgs"),
                ot = r("sXI5"),
                at = r("8TKQ"),
                st = (0, Je.A)((function() {
                    return r.e(4381).then(r.bind(r, "T18S"))
                }), {
                    webpack: function() {
                        return ["T18S"]
                    }
                }),
                ut = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Gr.SPOT;
                    return (0, Be.V$)(e) ? "margin" : e.toLowerCase()
                },
                ct = function(e) {
                    return "riskPreservedWarning" === e
                },
                lt = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Gr.SPOT,
                        n = (0, A.ok)().getI18n,
                        o = (0, i.useState)(null),
                        s = o[0],
                        u = o[1],
                        c = (0, i.useState)(""),
                        l = c[0],
                        d = c[1],
                        p = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Gr.SPOT,
                                r = ut(t),
                                n = (0, it.useQuery)(["SPOT_QUERY_DISCLAIMER", e, r], (function() {
                                    return !!e && (0, rt.post)("/bapi/apex/v1/friendly/apex/marketing/symbolDisclaimer/querySymbolDisclaimer", {
                                        tradingPairs: e,
                                        type: r
                                    })
                                }), {
                                    staleTime: 3e3
                                }),
                                i = n.isFetched,
                                o = n.data;
                            return i && o && (null === o || void 0 === o ? void 0 : o.data) && o.data.id ? null === o || void 0 === o ? void 0 : o.data : null
                        }(e, r);
                    return (0, i.useEffect)((function() {
                        if (u(null), e && "" !== e) return d(e), p && (null === p || void 0 === p ? void 0 : p.id) ? u(p) : u(t ? {
                                id: "riskPreservedWarning",
                                title: n("trd-risk-dialog-title", {
                                    defaultValue: "Risk warning"
                                }),
                                content: n("trd-risk-dialog-text", {
                                    defaultValue: "The price of this token is subject to high volatility. Please understand the risks involved and trade with caution. Binance will not be held responsible for any trading losses."
                                }),
                                frequency: a.P_,
                                placement: "1,3"
                            } : null),
                            function() {
                                u(null)
                            }
                    }), [t, e, r, p]), s && e === l ? s : {}
                },
                dt = function(e) {
                    var t, r = (0, ce.DP)().isLight,
                        n = (0, C.Bj)(),
                        o = (0, f._)((0, l.s)(), 1)[0],
                        s = (0, nt.z)("spot-trade-ui", at.p.DISCLAIMER_POPUP_CONTENT, {}),
                        u = s.data,
                        c = s.setData,
                        d = (0, tt.S)(),
                        p = !!(null === (t = n[o]) || void 0 === t ? void 0 : t.risk),
                        m = lt(o, p),
                        v = m.title,
                        g = m.content,
                        y = m.id,
                        T = m.placement,
                        _ = void 0 === T ? "" : T,
                        A = m.attachedLink,
                        b = m.linkCopy,
                        S = m.frequency,
                        h = ut(e),
                        x = ct(y) ? "".concat(o) : "".concat(o, "_").concat(y, "_").concat(h),
                        E = _.includes("3"),
                        I = u ? u[x] : "",
                        R = !!I && et()(+I).isSame(et()(), "day"),
                        O = u[x] && (Number(S) === a.pT || Number(S) === a.P_ && R),
                        N = (0, i.useCallback)((function() {
                            ot.Ay.close(), c((0, ge._)((0, ve._)({}, u), (0, $e._)({}, x, Date.now())))
                        }), [u, x]),
                        L = (0, i.useCallback)((function() {
                            ot.Ay.show({
                                isLight: r,
                                contentSx: {
                                    padding: 0,
                                    maxWidth: "90vw"
                                },
                                sx: {
                                    width: "auto",
                                    height: "auto"
                                },
                                showCloseIcon: !1,
                                notMaskClick: !0,
                                children: (0, Ze.jsx)(st, {
                                    title: v,
                                    text: g,
                                    attachedLink: A,
                                    linkCopy: b,
                                    onClose: N
                                })
                            })
                        }), [A, r, b, N, g, v]),
                        P = y && E && !O;
                    (0, i.useEffect)((function() {
                        !d && P && L()
                    }), [o, P]), (0, i.useEffect)((function() {
                        P && L()
                    }), [P])
                },
                pt = r("eAFj"),
                ft = ((0, pt.A)((function(e) {
                    return {
                        dialogStep: "nccp",
                        setDialogStep: function(t) {
                            return e((function() {
                                return {
                                    dialogStep: t
                                }
                            }))
                        }
                    }
                })), r("XqCI")),
                mt = function() {
                    var e = (0, Y._)(V().mark((function e(t) {
                        var r, n;
                        return V().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, ft.Eg)("/bapi/apex/v1/public/apex/marketing/tardingPair/detail", {
                                        symbol: t
                                    }), e.next = 3, (0, rt.get)(r);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                vt = function(e) {
                    var t = (0, i.useState)({}),
                        r = t[0],
                        n = t[1],
                        o = (0, i.useState)(null),
                        a = o[0],
                        s = o[1];
                    return (0, i.useEffect)((function() {
                        mt(e).then((function(e) {
                            n(e[0] || {})
                        })).catch((function(e) {
                            s(e.message)
                        }))
                    }), [e]), {
                        coinInfo: r,
                        err: a
                    }
                },
                gt = (r("/Wc2"), r("Sr3F"), function() {
                    (0, i.useEffect)((function() {
                        if (window.performance && window.performance.memory) {
                            var e = setInterval((function() {
                                var e = performance.memory.usedJSHeapSize / 1048576;
                                e >= 300 && (0, Ue.u4)("memory_usage", {
                                    current: e
                                })
                            }), 6e4);
                            return function() {
                                clearInterval(e)
                            }
                        }
                    }), [])
                }),
                yt = r("0GV5"),
                Tt = r("L/q1"),
                _t = r("R5aq"),
                At = r("qFGl"),
                bt = r.n(At),
                St = function() {
                    var e = (0, Y._)(V().mark((function e(t) {
                        var r, n, i, o, a, s;
                        return V().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.startTime, n = t.endTime, i = t.rows, o = t.page, a = t.accountType, e.prev = 3, e.next = 6, (0, rt.post)("/bapi/capital/v1/private/streamer/trade/get-user-trades", {
                                        accountType: a,
                                        startTime: r,
                                        endTime: n,
                                        page: o,
                                        rows: i
                                    });
                                case 6:
                                    s = e.sent, e.next = 12;
                                    break;
                                case 9:
                                    throw e.prev = 9, e.t0 = e.catch(3), new Error("network error");
                                case 12:
                                    if ("000000" === s.code) {
                                        e.next = 14;
                                        break
                                    }
                                    throw new Error(s.message || "unknown error");
                                case 14:
                                    return e.abrupt("return", {
                                        data: s.data || [],
                                        total: s.total
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ht = function(e, t) {
                    return e.filter((function(e) {
                        return "".concat(e.baseAsset).concat(e.quoteAsset).toLowerCase() === t.toLowerCase()
                    }))
                },
                xt = function() {
                    var e = (0, f._)((0, l.s)(), 1)[0],
                        t = (0, f._)((0, ke.Gr)(), 1)[0],
                        r = (0, i.useState)([]),
                        n = r[0],
                        o = r[1],
                        s = (0, i.useState)(Date.now()),
                        u = s[0],
                        c = s[1],
                        d = (0, f._)((0, Tt.A)((0, Y._)(V().mark((function e() {
                            var r, n, i, a, s, u, c, l, d = arguments;
                            return V().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = (r = d.length > 0 && void 0 !== d[0] ? d[0] : {}).page, i = r.rows, a = void 0 === i ? 200 : i, s = (0, _t.zq)("1d"), u = s.startTime, c = s.endTime, null !== u && null !== c) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.prev = 4, e.next = 7, St({
                                            startTime: u,
                                            endTime: c,
                                            page: n,
                                            rows: a,
                                            accountType: (0, Be.U8)(t)
                                        });
                                    case 7:
                                        l = e.sent.data, o(l), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), o([]);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 11]
                            ])
                        }))), [t], {
                            loading: !0
                        }), 2),
                        p = d[0].loading,
                        v = d[1];
                    return (0, i.useEffect)((function() {
                            v({
                                page: 1
                            })
                        }), [v]),
                        function(e, t) {
                            var r = (0, S.nH)(),
                                n = (0, C.Bj)(),
                                o = (0, f._)((0, ke.Gr)(), 1)[0];
                            (0, i.useEffect)((function() {
                                if (r) {
                                    var i = Date.now(),
                                        s = bt()((function() {
                                            (0, Ue.u4)("stream_first_push", {
                                                duration: (0, Be.a3)(Date.now() - i)
                                            })
                                        }));
                                    return (0, a.D$)().getUserOrderStream(o).subscribe((function(r) {
                                        s(), e((function(e) {
                                            return (0, m._)([].concat(r).map((function(e) {
                                                var t = e.symbol,
                                                    r = n[t] || {};
                                                return (0, ge._)((0, ve._)({}, e), {
                                                    symbol: t,
                                                    baseAsset: r.baseAsset,
                                                    quoteAsset: r.quoteAsset,
                                                    tradeId: e.tradeId,
                                                    price: e.lastPrice,
                                                    time: e.transactionTime,
                                                    side: e.side,
                                                    qty: e.LastExecutedQuantity,
                                                    fee: e.commissionAmount,
                                                    feeAsset: e.commissionAsset,
                                                    totalQuota: e.lastQuoteQuantity
                                                })
                                            })).filter((function(e) {
                                                var t = e.orderStatus,
                                                    r = (0, _t.zq)("1d").endTime,
                                                    n = null === r || "number" === typeof e.time && e.time <= r;
                                                return ("PARTIALLY_FILLED" === t || "FILLED" === t) && n
                                            }))).concat((0, m._)(e))
                                        })), t(Date.now())
                                    }))
                                }
                            }), [r, o])
                        }(o, c), {
                            trades: ht(n, e),
                            updateTime: u,
                            loading: p
                        }
                },
                Et = r("+LY0"),
                It = function() {
                    var e = (0, i.useState)({}),
                        t = e[0],
                        r = e[1];
                    return (0, i.useEffect)((function() {
                        return (0, Et.E)((function(e) {
                            var t = {};
                            (e.exchangeRate || []).forEach((function(e) {
                                var r = e.baseAsset,
                                    n = e.exchangeRateV2;
                                t[r] = (n / Math.pow(10, 12)).toFixed(12)
                            })), r(t)
                        }))
                    }), []), t
                },
                Rt = r("F6Re"),
                Ot = function() {
                    return (0, o.d4)(Rt.makeLayout) || a.ug
                },
                Ct = function() {
                    return Ot() === a.iW
                },
                Nt = function() {
                    return Ot() === a.ug
                },
                Lt = function() {
                    return Ot() === a.Pv
                },
                Pt = function() {
                    return Ot() === a.a0
                },
                kt = (r("G/TK"), function(e, t, r) {
                    var n = (0, f._)((0, Ke.A)(e, t), 2),
                        o = n[0],
                        a = n[1];
                    return (0, i.useEffect)((function() {
                        "undefined" !== typeof localStorage && localStorage && localStorage[e]
                    }), [r]), [o, a]
                }),
                Mt = r("zOA2"),
                Dt = r("Impr"),
                wt = r("b9LU"),
                Ut = function() {
                    var e = Ot();
                    return !Mt.VU.find((function(t) {
                        return t === e
                    }))
                },
                Bt = function(e, t) {
                    var r, n, s, c = (0, i.useContext)(wt.x),
                        l = c.currentSymbol,
                        d = c.currentGroup;
                    n = e || l || "BTCUSDT", s = t || (void 0 === d ? "" : d) || "0";
                    var p = (0, o.d4)(u.makeCostomizeTradeType),
                        f = null === (r = (0, Dt.cA)().symbolsMap[n]) || void 0 === r ? void 0 : r.type,
                        m = p[s] || p[0] || "SPOT",
                        v = (0, o.wA)(),
                        g = (0, jt.q$)(),
                        y = function(e) {
                            var t = g && (0, Be.V$)(e) ? a.Gr.SPOT : e;
                            return v.pageStore.toggleCostomizeTradeType((0, $e._)({}, s, t))
                        };
                    return s && "" !== s && (m === a.Gr.CROSS && ["BOTH", "CROSS"].includes(f) || m === a.Gr.ISOLATED && ["BOTH", "ISOLATED"].includes(f)) ? [m, y] : [a.Gr.SPOT, y]
                },
                qt = function(e, t) {
                    var r, n, s, c = (0, i.useContext)(wt.x),
                        l = c.currentSymbol,
                        d = c.currentGroup;
                    n = e || l || "BTCUSDT", s = t || (void 0 === d ? "" : d) || "0";
                    var p = (0, o.d4)(u.makeCostomizeTradeType),
                        f = p[s] || p[0] || "SPOT",
                        m = null === (r = (0, Dt.cA)().symbolsMap[n]) || void 0 === r ? void 0 : r.type;
                    return (f !== a.Gr.CROSS || !["BOTH", "CROSS"].includes(m)) && ((f !== a.Gr.ISOLATED || !["BOTH", "ISOLATED"].includes(m)) && (0, Be.lX)(f))
                },
                jt = r("obHX"),
                Ft = function() {
                    return "en-GB" === (0, Ge.Bl)()
                },
                Qt = function() {
                    return "en-TR" === (0, Ge.Bl)()
                },
                Gt = function() {
                    var e = (0, C.xX)(),
                        t = null === e || void 0 === e ? void 0 : e.planToOpenMarketTime;
                    return !!(t && t > Date.now())
                },
                Yt = function(e) {
                    var t = (0, i.useRef)();
                    return (0, i.useEffect)((function() {
                        t.current = e
                    }), [e]), t.current
                },
                Kt = (r("FkjH"), r("hufm")),
                Vt = r("HiJ2"),
                Wt = r("LWbc"),
                zt = function() {
                    var e = (0, Kt.$H)().basisTimeZone,
                        t = (0, o.wA)(),
                        r = Ht(),
                        n = (0, Vt.i)("spot", e) || {},
                        a = Object.keys(n).reduce((function(e, t) {
                            var r, i;
                            t && (null === n || void 0 === n || null === (r = n[t]) || void 0 === r ? void 0 : r.openToday) && (e[t] = null === n || void 0 === n || null === (i = n[t]) || void 0 === i ? void 0 : i.openToday);
                            return e
                        }), {});
                    return (0, i.useEffect)((function() {
                        "{}" === JSON.stringify(r) && "" === e || ("" === e ? t.market.updateState({
                            openPriceMap: {}
                        }) : t.market.updateState({
                            openPriceMap: a
                        }))
                    }), [e, n]), a
                },
                Ht = function() {
                    return (0, o.d4)(Wt.makeOpenPriceMap)
                },
                $t = function() {
                    var e = (0, Kt.$H)().basisTimeZone;
                    return !(!e || "" === e)
                },
                Zt = r("/jvT"),
                Jt = function() {
                    var e = (0, o.d4)(Zt.makeIsPm1_0),
                        t = (0, o.d4)(Zt.makeIsPm1_5),
                        r = (0, o.d4)(Zt.makeVirtualAvailableUsd);
                    return {
                        isPm1_0: e,
                        isPm1_5: t,
                        minUpgrateLevel: (0, o.d4)(Zt.makeMinUniUpgrateLevel),
                        virtualAvailableUsd: r,
                        isPmAccount: e || t
                    }
                },
                Xt = r("O13v"),
                er = function(e) {
                    var t = e.namespace,
                        r = void 0 === t ? "" : t,
                        n = e.path,
                        o = void 0 === n ? "" : n,
                        s = e.fetchAfterLogin,
                        u = void 0 === s || s,
                        c = (0, Ge.Bl)(),
                        l = (0, A.ok)().i18n,
                        d = (0, S.nH)();
                    (0, i.useEffect)((function() {
                        function e() {
                            return t.apply(this, arguments)
                        }

                        function t() {
                            return (t = (0, Y._)(V().mark((function e() {
                                var t;
                                return V().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, (0, Xt.TU)({
                                                basePath: a.pR,
                                                locale: c,
                                                namespace: o
                                            });
                                        case 3:
                                            t = e.sent, l.addResourceBundle(c, r, t), e.next = 9;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))).apply(this, arguments)
                        }
                        l.hasResourceBundle(c, r) || (u ? d && window.requestIdleCallback && window.requestIdleCallback((function() {
                            setTimeout((function() {
                                e()
                            }), 400)
                        })) : window.requestIdleCallback && window.requestIdleCallback((function() {
                            setTimeout((function() {
                                e()
                            }), 400)
                        })))
                    }), [c, d])
                },
                tr = function() {
                    return er({
                        namespace: "futures-ui",
                        path: "futures-ui",
                        fetchAfterLogin: !0
                    })
                },
                rr = function() {
                    return er({
                        namespace: "news-ui",
                        path: "news-ui",
                        fetchAfterLogin: !1
                    })
                },
                nr = function() {
                    return er({
                        namespace: "futures-widget",
                        path: "futures-widget",
                        fetchAfterLogin: !0
                    })
                },
                ir = function() {
                    er({
                        namespace: "asset-transfer",
                        path: "asset-transfer",
                        fetchAfterLogin: !0
                    }), er({
                        namespace: "kyc-errorCode",
                        path: "kyc-errorCode",
                        fetchAfterLogin: !0
                    })
                },
                or = function() {
                    return er({
                        namespace: "spot-strategy-ui",
                        path: "spot-strategy-ui",
                        fetchAfterLogin: !0
                    })
                },
                ar = function() {
                    return er({
                        namespace: "Binance-copy-trading",
                        path: "Binance-copy-trading",
                        fetchAfterLogin: !0
                    })
                },
                sr = function() {
                    return er({
                        namespace: "futures-ui",
                        path: "futures-ui",
                        fetchAfterLogin: !0
                    })
                },
                ur = (r("VeuS"), r("MiNH")),
                cr = r("g77m"),
                lr = r.n(cr),
                dr = function(e) {
                    var t = e.enable,
                        r = e.keyword,
                        n = void 0 === r ? "" : r,
                        o = {
                            title: null,
                            subtitle: null,
                            linkUrl: null
                        },
                        a = (0, i.useState)(o),
                        s = a[0],
                        u = a[1],
                        c = (0, i.useCallback)(lr()(ur.HD, 500), []),
                        l = (0, Ge.Bl)();
                    return (0, i.useEffect)((function() {
                        if (t && !(n.length < 2)) {
                            var e = setTimeout((function() {
                                var e;
                                null === (e = c({
                                    keyword: "".concat(n).toUpperCase(),
                                    language: l
                                })) || void 0 === e || e.then((function(e) {
                                    ! function(e) {
                                        "".concat(n).toUpperCase() === (null === e || void 0 === e ? void 0 : e.assetCode) ? u({
                                            title: null === e || void 0 === e ? void 0 : e.title,
                                            subtitle: null === e || void 0 === e ? void 0 : e.subtitle,
                                            linkUrl: null === e || void 0 === e ? void 0 : e.linkUrl
                                        }) : u(o)
                                    }(e)
                                }))
                            }), 600);
                            return function() {
                                clearTimeout(e)
                            }
                        }
                    }), [n, t]), t ? s : {
                        title: null,
                        subtitle: null,
                        linkUrl: null
                    }
                },
                pr = r("wmlU"),
                fr = (0, pt.A)((function(e) {
                    return {
                        newsShow: !0,
                        setNewsShow: function(t) {
                            return e((function() {
                                return {
                                    newsShow: t
                                }
                            }))
                        }
                    }
                })),
                mr = function() {
                    var e = fr((function(e) {
                            return e.newsShow
                        })),
                        t = fr((function(e) {
                            return e.setNewsShow
                        })),
                        r = (0, nt.z)("finance-common", at.p.NEWS_H5_PREFERENCE, !0),
                        n = r.data,
                        o = r.setData,
                        a = r.hasInitialized;
                    return (0, i.useEffect)((function() {
                        a && t(n)
                    }), [n, a]), {
                        show: e,
                        setShow: (0, i.useCallback)((function(e) {
                            o(e), t(e)
                        }), [t, o])
                    }
                },
                vr = function() {
                    var e = (0, S.nH)(),
                        t = (0, i.useState)(!1),
                        r = t[0],
                        n = t[1],
                        o = (0, it.useQuery)("adjust-confirm", (function() {
                            return (0, ur.am)({
                                configType: "ORDER_ADJUST_CONFIRMATION_SWITCH"
                            })
                        }), {
                            refetchOnMount: !1,
                            enabled: Boolean(e)
                        }),
                        a = o.data,
                        s = o.refetch,
                        u = o.isLoading,
                        c = function() {
                            var e = (0, Y._)(V().mark((function e(t) {
                                return V().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!r && !u) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return n(!0), e.next = 5, (0, ur.M2)({
                                                configType: "ORDER_ADJUST_CONFIRMATION_SWITCH",
                                                configValue: "".concat(t)
                                            });
                                        case 5:
                                            n(!1), s();
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return {
                        status: a,
                        changeStatus: c,
                        isLoading: u || r
                    }
                },
                gr = r("QFrD"),
                yr = function() {
                    var e = (0, o.d4)(Zt.makeMarginAccount);
                    return {
                        isCM2_0: "MARGIN_2" === (null === e || void 0 === e ? void 0 : e.accountType)
                    }
                },
                Tr = function() {
                    return {
                        assetleverageBracketList: (0, o.d4)(Zt.makeAssetleverageBracketList) || []
                    }
                },
                _r = function() {
                    return (0, it.useQuery)("SPOT_REFERRAL_CODE", ur.EF, {
                        enabled: !0,
                        staleTime: 1 / 0
                    }).data
                },
                Ar = function() {
                    var e = (0, o.d4)(Zt.makeIsolatedAutoTranslate),
                        t = (0, f._)((0, ke.Gr)(), 1)[0] === a.Gr.ISOLATED,
                        r = (0, gr.b)();
                    return {
                        isAuto: t && (r || e),
                        isAutoIgnoreTradeType: r || e
                    }
                },
                br = function() {
                    var e = (0, o.d4)(Zt.makeCrossAutoTranslate),
                        t = (0, f._)((0, ke.Gr)(), 1)[0] === a.Gr.CROSS,
                        r = Jt().isPmAccount;
                    return {
                        isAuto: !r && (t && e),
                        isAutoIgnoreTradeType: !r && e
                    }
                },
                Sr = function() {
                    var e, t, r, n = Tr().assetleverageBracketList;
                    return n && n.length > 0 && ((null === n || void 0 === n || null === (e = n[0]) || void 0 === e || null === (t = e.brackets) || void 0 === t || null === (r = t[0]) || void 0 === r ? void 0 : r.leverage) || "10") || "10"
                },
                hr = ((0, pt.A)((function(e) {
                    return {
                        visibleType: "",
                        setVisibleType: function(t) {
                            return e((function() {
                                return {
                                    visibleType: t
                                }
                            }))
                        }
                    }
                })), r("arbg")),
                xr = r("bQsp"),
                Er = function(e) {
                    var t = e.tradeType,
                        r = (0, i.useState)(""),
                        n = r[0],
                        s = r[1],
                        u = (0, i.useState)(""),
                        c = u[0],
                        d = u[1],
                        p = Jt().isPm1_5,
                        m = (0, f._)((0, l.s)(), 1)[0],
                        v = (0, o.d4)(Zt.makeIsolatedAccount)[m] || {},
                        g = null === v || void 0 === v ? void 0 : v.marginLevelStatus,
                        y = (0, o.d4)(Zt.makeMarginAccount);
                    return (0, i.useEffect)((function() {
                        t !== a.Gr.GRID && t !== a.Gr.SPOT && "FORCE_LIQUIDATION" === (null === y || void 0 === y ? void 0 : y.marginLevelStatus) && (p ? (0, hr.lT)().then((function(e) {
                            var t = e.data.accountStatus;
                            d(void 0 === t ? "" : t)
                        })) : (0, hr.WU)().then((function(e) {
                            var t = e.data.liquidationType;
                            s(void 0 === t ? "" : t)
                        })))
                    }), [y, t, p]), (0, i.useEffect)((function() {
                        if (p) return (0, xr.Uz)().getUserLvChangeStream().subscribe((function(e) {
                            (null === e || void 0 === e ? void 0 : e.status) && d(null === e || void 0 === e ? void 0 : e.status)
                        }))
                    }), [xr.Uz, p]), t === a.Gr.CROSS ? p ? "FORCE_LIQUIDATION" === c || "BANKRUPTED" === c : "NORMAL" === n : "FORCE_LIQUIDATION" === g
                },
                Ir = (r("FA/f"), r("5s+a")),
                Rr = r("KKaJ"),
                Or = r("MIKm")
        },
        nai5: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wm: () => c,
                Y_: () => l
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("5aL3"),
                a = r("eAFj"),
                s = r("bQ69"),
                u = (0, a.A)((function(e) {
                    return {
                        chatWidgetInstance: void 0,
                        setLoadLoadChat: function(t) {
                            return e((function() {
                                return {
                                    chatWidgetInstance: t
                                }
                            }))
                        }
                    }
                }));

            function c() {
                var e = u((function(e) {
                        return e.setLoadLoadChat
                    })),
                    t = (0, n._)((0, o.q)(s.K5, {
                        isChatEnable: !0,
                        isChatVisible: !1,
                        isChatPopUp: !1,
                        onChatLoadedCallbackFunction: function() {},
                        sourceEntry: "16"
                    }), 1)[0];
                (0, i.useEffect)((function() {
                    e(t)
                }), [t])
            }

            function l() {
                var e = u((function(e) {
                    return e.chatWidgetInstance
                }));
                return {
                    changeVisibility: (0, i.useCallback)((function(t) {
                        e.changeChatVisibilityStatus(t), e.changeChatPopUpStatus(t)
                    }), [e]),
                    changeChatVisibleByOrder: function(t) {
                        var r = t || {},
                            n = r.status,
                            i = r.orderType,
                            o = r.orderId,
                            a = r.type,
                            s = r.orderTypeNew;
                        e.changeChatVisibilityStatus(!0), e.changeChatPopUpStatus(!0), e.entryChat({
                            step: 2,
                            question: "spot_chatopen_history_page",
                            extraInfo: {
                                bizType: 10,
                                data: {
                                    bu: "Spot",
                                    trade_bu: i,
                                    trade_type: a,
                                    status: n,
                                    orderid: o,
                                    sourceEntry: "16",
                                    valueDetail: s
                                }
                            }
                        })
                    }
                }
            }
        },
        obHX: (e, t, r) => {
            "use strict";
            r.d(t, {
                $m: () => x,
                BS: () => m,
                Cf: () => u,
                Hi: () => O,
                KT: () => N,
                Kc: () => v,
                ME: () => L,
                NY: () => M,
                PY: () => p,
                Rp: () => _,
                S1: () => y,
                UT: () => c,
                Zm: () => d,
                _7: () => s,
                _h: () => w,
                iM: () => C,
                lw: () => D,
                mb: () => S,
                mc: () => k,
                nN: () => U,
                oq: () => R,
                p8: () => I,
                pl: () => g,
                q$: () => a,
                qB: () => b,
                qK: () => l,
                rJ: () => T,
                vA: () => P,
                wi: () => A,
                yD: () => E,
                yT: () => h,
                z1: () => f
            });
            var n = r("MD8j"),
                i = r("lW1t"),
                o = r("CLKF"),
                a = function() {
                    var e = (0, o.O)();
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("marginTrade") || e
                },
                s = function() {
                    var e = (0, o.O)();
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("ETF") || e
                },
                u = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("umTrade")
                },
                c = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("cmTrade")
                },
                l = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("Spot_Grid")
                },
                d = function() {
                    var e = (0, o.O)();
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("sor") || e
                },
                p = function() {
                    return (0, o.O)()
                },
                f = function() {
                    var e = (0, n.d4)(i.makeComplianceDisabledTags);
                    return e.includes("spot_top_movement") || e.includes("spot_movers")
                },
                m = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_trading_invite")
                },
                v = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("orderbook_more")
                },
                g = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_tutorial")
                },
                y = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_tag_ranking")
                },
                T = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("margin_tutorial")
                },
                _ = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_footer_square")
                },
                A = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("margin_account_pro")
                },
                b = function() {
                    return !(0, n.d4)(i.makeComplianceDisabledTags).includes("otc_trading_algo")
                },
                S = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_grid_AI")
                },
                h = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_grid_popular")
                },
                x = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("campaign_announcement")
                },
                E = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("JP_USDT")
                },
                I = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("jp_zones")
                },
                R = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("jp_value")
                },
                O = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("multiple_charts")
                },
                C = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_heatmap")
                },
                N = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("Bahrain_orderbook_tips")
                },
                L = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("autp_invest_on_spotpage")
                },
                P = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("FDUSD_promo")
                },
                k = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("portfolioMargin")
                },
                M = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("overview-wallet-name-CARD")
                },
                D = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("spot_pre_market")
                },
                w = function() {
                    return (0, n.d4)(i.makeComplianceDisabledTags).includes("mica_stable_coin_sunset")
                },
                U = function() {
                    var e = (0, n.d4)(i.makeComplianceDisabledTags);
                    return e.includes("SPOT_BLOCK") || e.includes("COMPLIANCE_CHECK")
                }
        },
        VeuS: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD"),
                i = function() {};

            function o(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                    o = (0, n.useState)(e),
                    a = o[0],
                    s = o[1],
                    u = (0, n.useRef)(null),
                    c = (0, n.useRef)("function" === typeof t ? t : i);
                (0, n.useEffect)((function() {
                    c.current = "function" === typeof t ? t : i
                }), [t]);
                var l = (0, n.useCallback)((function() {
                    s(e), clearInterval(u.current), u.current = setInterval((function() {
                        s((function(t) {
                            return t <= 0 && (s(e), c.current()), t - 1e3
                        }))
                    }), r)
                }), [e, r, u]);
                return (0, n.useEffect)((function() {
                    return l(),
                        function() {
                            return clearInterval(u.current)
                        }
                }), [l]), {
                    leftTime: a,
                    reset: l
                }
            }
        },
        "/kUC": (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => u,
                I: () => s
            });
            var n = r("mguP"),
                i = r("MD8j"),
                o = r("DTvD"),
                a = r("HS2I"),
                s = function() {
                    var e = (0, a.useCurrency)().currency,
                        t = (0, i.d4)((function(e) {
                            return e.userCenter.userSetting.userPreferredCurrency
                        }));
                    (0, n._)((t || "USD").split("_"), 1)[0];
                    return e
                },
                u = function() {
                    var e = (0, a.useCurrency)().currencyList,
                        t = ((0, i.d4)((function(e) {
                            var t;
                            return null === (t = e.pageStore) || void 0 === t ? void 0 : t.currency
                        })), e),
                        r = (0, o.useMemo)((function() {
                            var e = {
                                USD: {
                                    pair: "USD_USD",
                                    rate: 1,
                                    symbol: "$"
                                }
                            };
                            return Array.isArray(t) && t.length > 0 && t.forEach((function(t) {
                                var r = (0, n._)(t.pair.split("_"), 2),
                                    i = r[0];
                                "USD" === r[1] && (e[i] = t)
                            })), e
                        }), [t]);
                    return r
                }
        },
        wcOk: (e, t, r) => {
            "use strict";
            r.d(t, {
                Wr: () => l,
                dI: () => c,
                kT: () => d
            });
            var n = r("DTvD"),
                i = r("HS2I"),
                o = r("Qhol"),
                a = r("CLKF"),
                s = r("obHX"),
                u = r("c2J1"),
                c = function() {
                    var e = (0, u.nH)(),
                        t = (0, a.O)(),
                        r = (0, s.NY)();
                    return e && !t && !r
                },
                l = function(e) {
                    var t, r = c(),
                        n = (0, o.dUb)(),
                        a = (0, i.useCombineTrade)({
                            biz: "spotTrade",
                            coin: e
                        }) || {},
                        s = a.maxAvaliable,
                        u = a.selectedWallet;
                    return {
                        maxAvaliable: r ? s : null === (t = n[e]) || void 0 === t ? void 0 : t.free,
                        balanceWallet: r ? u : null
                    }
                },
                d = function(e, t) {
                    var r = c(),
                        o = ((0, i.useCombineTrade)({
                            biz: "spotTrade",
                            coin: e
                        }) || {}).updateBalance,
                        a = ((0, i.useCombineTrade)({
                            biz: "spotTrade",
                            coin: t
                        }) || {}).updateBalance;
                    return (0, n.useCallback)((function(e) {
                        r && e && (null === e || void 0 === e ? void 0 : e.details) && Array.isArray(e.details) && e.details.some((function(e) {
                            return "EARN_FLEXIBLE_SAVING" === (null === e || void 0 === e ? void 0 : e.fundSourceWalletType)
                        })) && setTimeout((function() {
                            o(), a()
                        }), 3e3)
                    }), [r, e, t, o, a])
                }
        },
        Ml1i: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => d
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("WT+B"),
                a = r("gz7j"),
                s = (r("IIoL"), r("eWL+")),
                u = r("bQ69"),
                c = [],
                l = function(e) {
                    var t = e.symbol,
                        r = (e.limit, e.stream),
                        n = e.snap,
                        o = void 0 === n || n,
                        a = (0, i.useRef)(c);
                    return (0, i.useEffect)((function() {
                        if (r) {
                            var e = "function" === typeof r.getStreamTradeSnap && o ? "getStreamTradeSnap" : "getStreamTrade";
                            return a.current = null, r[e](t).subscribe((function(e) {
                                a.current = Array.isArray(e) ? e[0] : e
                            }))
                        }
                    }), [r, t, o]), a
                },
                d = function(e) {
                    var t = (0, n._)((0, a.s)(), 1)[0],
                        r = e || t,
                        i = ((0, s.hF)()[r] || {}).close,
                        c = l({
                            symbol: r,
                            stream: (0, u.D$)()
                        });
                    return (0, o.Z)((function() {
                        var e;
                        return (null === (e = c.current) || void 0 === e ? void 0 : e.price) || i
                    }))
                }
        },
        ctcW: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => a,
                n: () => s
            });
            var n = r("eN/s"),
                i = r("MD8j"),
                o = r("rOIZ"),
                a = function() {
                    return (0, i.d4)(n.makeExchangeInfos) || {}
                },
                s = function(e) {
                    var t, r = (null === (t = a()[e]) || void 0 === t ? void 0 : t.minStepSize) || "0.00000001";
                    return (0, o.XV)(Number(r))
                }
        },
        rk0M: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => u,
                R: () => s
            });
            var n = r("mguP"),
                i = r("Ov3/"),
                o = r("Bkzn");
            const a = new(function() {
                function e() {
                    (0, o._)(this, e)
                }
                var t = e.prototype;
                return t.setItem = function(e, t) {
                    try {
                        localStorage.setItem(e, JSON.stringify(t))
                    } catch (r) {}
                }, t.getItem = function(e) {
                    var t;
                    try {
                        t = JSON.parse(localStorage.getItem(e))
                    } catch (r) {}
                    return t
                }, e
            }());
            var s = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 864e5,
                        o = Date.now(),
                        a = (0, n._)((0, i.A)(e, {
                            value: t,
                            time: o
                        }), 2),
                        s = a[0],
                        u = a[1],
                        c = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                            u({
                                value: e,
                                time: t
                            })
                        };
                    return o - Number((null === s || void 0 === s ? void 0 : s.time) || 0) > r ? (c(!1), [!1, c]) : [!!(null === s || void 0 === s ? void 0 : s.value), c]
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 864e5,
                        r = a.getItem(e) || {},
                        n = r.value,
                        i = r.time;
                    return !(Date.now() - Number(i || 0) > t) && n
                }
        },
        IIoL: (e, t, r) => {
            "use strict";
            r.d(t, {
                $X: () => p,
                MR: () => m,
                _i: () => f,
                z0: () => d
            });
            var n = r("DTvD"),
                i = r("bbE3"),
                o = r("WT+B"),
                a = r("tM9B"),
                s = r("/kUC"),
                u = r("Ml1i"),
                c = r("MwhE"),
                l = r("eWL+"),
                d = function(e) {
                    var t = Math.abs(Number(e)) > 1 ? 2 : 8;
                    return (0, a.QF)(e, {
                        maximumFractionDigits: t
                    })
                },
                p = function() {
                    var e = (0, l.Bj)(),
                        t = (0, s.I)(),
                        r = (0, s.H)(),
                        o = (0, i.$)(e, t, r);
                    return (0, n.useCallback)((function(e, t) {
                        return o(e, t)
                    }), [t])
                },
                f = function() {
                    var e = (0, c.y)("BTCUSDT").lastPrice,
                        t = p()(e, "USDT");
                    return {
                        currencySymbol: t.symbol,
                        fiatPrice: t.fiatPriceNumber,
                        lastPrice: e
                    }
                },
                m = function() {
                    var e = p(),
                        t = (0, u.C)("BTCUSDT");
                    return (0, o.Z)((function() {
                        var r = t();
                        return e(r, "USDT")
                    }))
                }
        },
        tskG: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => s,
                d: () => u
            });
            var n = r("eAFj"),
                i = r("DTvD"),
                o = r("c2J1"),
                a = r("MiNH"),
                s = (0, n.A)((function(e) {
                    return {
                        showIcon: !1,
                        setShowIcon: function(t) {
                            return e((function() {
                                return {
                                    showIcon: t
                                }
                            }))
                        }
                    }
                })),
                u = function() {
                    var e = s((function(e) {
                            return e.setShowIcon
                        })),
                        t = (0, o.nH)();
                    (0, i.useEffect)((function() {
                        t && (0, a.oO)().then((function(t) {
                            t && t[0] && !0 === t[0].participated && e(!0)
                        })).catch((function() {}))
                    }), [t])
                }
        },
        Sr3F: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => o
            });
            var n = r("DTvD"),
                i = r("bJ6b"),
                o = function() {
                    (0, i.rd)();
                    return (0, n.useCallback)((function(e) {
                        window.history.replaceState({}, "", e)
                    }), [])
                }
        },
        KLjx: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => p,
                s: () => d
            });
            var n = r("mguP"),
                i = r("MD8j"),
                o = r("+IdJ"),
                a = r("lW1t"),
                s = r("eWL+"),
                u = r("gz7j"),
                c = r("zHUU"),
                l = r("bQ69"),
                d = function(e) {
                    var t = (0, i.d4)(a.makeInfo) || {},
                        r = (0, n._)((0, u.s)(), 2),
                        o = (0, n._)(r[1], 1)[0],
                        s = e || (void 0 === o ? "" : o);
                    return s && t[s.toLowerCase()] || {}
                },
                p = function(e) {
                    var t = (0, i.d4)(a.makeInfo) || {},
                        r = (0, c.Bl)() || "",
                        d = (0, n._)((0, u.s)(), 2),
                        p = d[0],
                        f = (0, n._)(d[1], 1)[0],
                        m = e || (void 0 === f ? "" : f),
                        v = (0, s.hF)()[p] || {},
                        g = (null === v || void 0 === v ? void 0 : v.baseAssetName) || "",
                        y = (0, o.E)({
                            lang: r,
                            isEtfCoin: null === v || void 0 === v ? void 0 : v.etf,
                            name: g,
                            baseAsset: m,
                            infos: t,
                            RESEARCH_HOST: l.Xu,
                            SITE_HOST: l.dM
                        }),
                        T = y.status;
                    return {
                        link: y.link,
                        status: T,
                        name: g
                    }
                }
        },
        E4Qg: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => o
            });
            var n = r("MD8j"),
                i = r("bQ69"),
                o = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.page
                    })) === i.KL.BLOCKTRADE
                }
        },
        CLKF: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => o
            });
            var n = r("MD8j"),
                i = r("bQ69"),
                o = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.page
                    })) === i.KL.TRADECL
                }
        },
        MIKm: (e, t, r) => {
            "use strict";
            r.d(t, {
                w8: () => O,
                Hu: () => R,
                GO: () => I
            });
            var n = r("mguP"),
                i = r("mXdx"),
                o = r("DTvD"),
                a = r("eAFj"),
                s = r("jwne"),
                u = r("H8jA"),
                c = r("Gz4J"),
                l = r("nND3"),
                d = r("bJj1"),
                p = r("BkSf"),
                f = r("P0ri"),
                m = r("gLBh"),
                v = r("nai5"),
                g = r("T0Sc"),
                y = r("iAEW"),
                T = r("4hgs"),
                _ = r("pRBb"),
                A = r("Qhol"),
                b = r("bQ69"),
                S = r("wtFP"),
                h = {
                    200003905: "under_review",
                    200003903: "kyc_fail"
                },
                x = r("CLKF"),
                E = {
                    200003905: "PROCESS",
                    200003904: "no-kyc",
                    200003903: "REFUSED"
                },
                I = (0, a.A)((function(e) {
                    return {
                        kycStatus: "PASS",
                        kycStatusCode: 1,
                        setKycStatus: function(t) {
                            return e((function() {
                                return {
                                    kycStatus: t
                                }
                            }))
                        },
                        setKycStatusCode: function(t) {
                            return e((function() {
                                return {
                                    kycStatusCode: t
                                }
                            }))
                        },
                        showDialog: !1,
                        setShowDialog: function(t) {
                            return e((function() {
                                return {
                                    showDialog: t
                                }
                            }))
                        }
                    }
                })),
                R = function() {
                    var e = (0, A.nHk)(),
                        t = function(e) {
                            var t = e.isLogin,
                                r = void 0 !== t && t,
                                n = (0, T.useQuery)("trd-userComplianceCheck", (function() {
                                    return (0, _.bA)({
                                        productLine: "USER_KYC_GUIDE",
                                        operation: "KYC_STATUS_CHECK"
                                    }, void 0)
                                }), {
                                    refetchOnMount: !1,
                                    enabled: Boolean(r)
                                }),
                                i = n.data,
                                o = n.isLoading;
                            return {
                                value: ((null === i || void 0 === i ? void 0 : i.data) || {}).errorCode,
                                loading: o
                            }
                        }({
                            isLogin: e
                        }),
                        r = t.value,
                        n = t.loading,
                        i = I((function(e) {
                            return e.setKycStatus
                        })),
                        a = I((function(e) {
                            return e.setKycStatusCode
                        })),
                        s = (0, x.O)(),
                        u = (0, A.tk1)("web_finance_guide_to_kyc").pass;
                    (0, o.useEffect)((function() {
                        e && (n || s || u && (u ? (i((null === E || void 0 === E ? void 0 : E[r]) || "PASS"), a(r)) : i("PASS")))
                    }), [e, n, r, u])
                },
                O = function() {
                    var e = (0, A.nHk)(),
                        t = (0, g.o)(),
                        r = t.getI18n,
                        a = t.t,
                        T = (0, n._)((0, A.Grl)(), 1)[0] === b.Gr.SPOT,
                        _ = T ? "spot" : "margin",
                        x = I((function(e) {
                            return e.kycStatus
                        })),
                        R = I((function(e) {
                            return e.kycStatusCode
                        })),
                        O = I((function(e) {
                            return e.showDialog
                        })),
                        C = I((function(e) {
                            return e.setShowDialog
                        })),
                        N = (0, A.QsY)().isMobile,
                        L = (0, v.Y_)().changeVisibility,
                        P = E[R] || "PASS",
                        k = (0, i.jsx)(m.x, {
                            t: a,
                            i18nKey: "trd-".concat(_, "-kyc-dialog-description-").concat(P),
                            defaults: "One step away from starting Spot Trading. While we are reviewing your identity, check out \u201cWhat is Spot Trading?\u201d in the <hlink>Help Center</hlink>.",
                            components: {
                                hlink: (0, i.jsx)("span", {
                                    className: "text-TextLink cursor-pointer",
                                    onClick: function() {
                                        ! function(e) {
                                            var t = e.isSpot,
                                                r = e.title;
                                            (0, S.u4)("$WebClick", {
                                                eventName: "kyc_popup",
                                                pageName: t ? "spot_trading" : "margin_trading",
                                                title: (null === h || void 0 === h ? void 0 : h[r]) || "submit_kyc",
                                                $element_id: "help_center"
                                            })
                                        }({
                                            isSpot: T,
                                            title: R || 99
                                        }), window.open("".concat("/trade-get-started/").concat(_), "_blank")
                                    }
                                })
                            }
                        }),
                        M = {
                            "no-kyc": (0, i.jsx)(l.A, {}),
                            PROCESS: (0, i.jsx)(d.A, {}),
                            PASS: (0, i.jsx)(l.A, {}),
                            REFUSED: (0, i.jsx)(p.A, {})
                        };
                    return (0, o.useEffect)((function() {
                        O && function(e) {
                            var t = e.isSpot,
                                r = e.title;
                            (0, S.u4)("PopupView", {
                                eventName: "kyc_popup",
                                pageName: t ? "spot_trading" : "margin_trading",
                                title: (null === h || void 0 === h ? void 0 : h[r]) || "submit_kyc"
                            })
                        }({
                            isSpot: T,
                            title: R || 99
                        })
                    }), [O]), e ? "PASS" === x ? (0, i.jsx)(i.Fragment, {}) : O ? (0, i.jsx)(s.Ay, {
                        enablePortal: !0,
                        visible: O,
                        onClose: function() {
                            return C(!1)
                        },
                        children: (0, i.jsx)(u.A, {
                            icon: M[P] || (0, i.jsx)(l.A, {}),
                            title: r("trd-kyc-dialog-title-".concat(P)),
                            description: k,
                            actions: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(c.A, {
                                    style: {
                                        width: "100%"
                                    },
                                    sz: "large",
                                    onClick: function() {
                                        ! function(e) {
                                            var t = e.isSpot,
                                                r = e.title;
                                            (0, S.u4)("$WebClick", {
                                                eventName: "kyc_popup",
                                                pageName: t ? "spot_trading" : "margin_trading",
                                                title: (null === h || void 0 === h ? void 0 : h[r]) || "submit_kyc",
                                                $element_id: "verify"
                                            })
                                        }({
                                            isSpot: T,
                                            title: R || 99
                                        }), (0, y.a)().then((function(e) {
                                            window.open(e, "_blank")
                                        }))
                                    },
                                    children: r("trd-kyc-dialog-button-".concat(P))
                                }), (0, i.jsxs)(c.A, {
                                    style: {
                                        width: "100%",
                                        marginTop: "8px"
                                    },
                                    sz: "large",
                                    textVariant: "yellow",
                                    variant: "text",
                                    onClick: function() {
                                        ! function(e) {
                                            var t = e.isSpot,
                                                r = e.title;
                                            (0, S.u4)("$WebClick", {
                                                eventName: "kyc_popup",
                                                pageName: t ? "spot_trading" : "margin_trading",
                                                title: (null === h || void 0 === h ? void 0 : h[r]) || "submit_kyc",
                                                $element_id: "cs_bot"
                                            })
                                        }({
                                            isSpot: T,
                                            title: R || 99
                                        }), N ? window.open("/chat?sourceEntry=4&errorCode=".concat(R, "&question=account_function_verify_personal_account"), "_blank") : L(!0)
                                    },
                                    children: [(0, i.jsx)(f.A, {
                                        className: "h-[20px] w-[20px]"
                                    }), r("trd-customer-help", {
                                        defaultValue: "Customer Support"
                                    })]
                                })]
                            })
                        })
                    }) : (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(i.Fragment, {})
                }
        },
        b2AH: (e, t, r) => {
            "use strict";
            r.d(t, {
                $y: () => c,
                CU: () => a,
                F$: () => u,
                XY: () => s,
                ok: () => o
            });
            var n = r("DTvD"),
                i = r("Wpmw"),
                o = function(e, t) {
                    var r = (0, i.B)(t),
                        o = r.t,
                        a = r.i18n,
                        s = (0, n.useCallback)((function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = [e, t].filter((function(e) {
                                    return e
                                })).join("-");
                            return o(n, r).trim() || r.defaultValue
                        }), [o, e]);
                    return {
                        i18n: a,
                        t: o,
                        getI18n: s
                    }
                },
                a = function() {
                    return o("trd", "trade-ui")
                },
                s = function() {
                    return o("", "strategy-widget")
                },
                u = function() {
                    return o("", "futures-strategy-ui")
                },
                c = function() {
                    return o("", "spot-strategy-ui")
                }
        },
        "nlZ+": (e, t, r) => {
            "use strict";
            r.d(t, {
                $n: () => c,
                LA: () => l,
                c9: () => s,
                jl: () => a,
                un: () => u
            });
            var n = r("iKvg"),
                i = r("eAFj"),
                o = r("bQ69"),
                a = (0, i.A)((function(e) {
                    var t;
                    return {
                        askBids: (t = {}, (0, n._)(t, o.Vl.BUY, ""), (0, n._)(t, o.Vl.SELL, ""), t),
                        setAskBids: function(t, r) {
                            return e((function() {
                                var e;
                                return {
                                    askBids: (e = {}, (0, n._)(e, o.Vl.BUY, t), (0, n._)(e, o.Vl.SELL, r), e)
                                }
                            }))
                        }
                    }
                })),
                s = (0, i.A)((function(e) {
                    return {
                        params: {},
                        setInnerFormParams: function(t) {
                            return e((function() {
                                return {
                                    params: t
                                }
                            }))
                        }
                    }
                })),
                u = (0, i.A)((function(e) {
                    return {
                        flashOrder: !o.S$ && "false" !== localStorage.getItem("trade-flashorder-visible"),
                        setFlashOrder: function(t) {
                            return e((function() {
                                return localStorage.setItem("trade-flashorder-visible", t), {
                                    flashOrder: t
                                }
                            }))
                        }
                    }
                })),
                c = function(e) {
                    return e.flashOrder
                },
                l = function(e) {
                    return e.setFlashOrder
                }
        },
        "/Wc2": (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => a
            });
            var n = r("eAFj"),
                i = {
                    bid: [],
                    ask: []
                },
                o = (0, n.A)((function(e) {
                    return {
                        lastPricesRef: {
                            current: i
                        }
                    }
                })),
                a = function() {
                    return o((function(e) {
                        return e.lastPricesRef
                    }))
                }
        },
        pIAZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                f: () => l,
                y: () => d
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("eAFj"),
                a = r("Ov3/"),
                s = r("q+oq"),
                u = r("CLKF"),
                c = (0, o.A)((function(e) {
                    return {
                        loadTradeNews: !0,
                        setLoadTradeNews: function(t) {
                            return e((function() {
                                return {
                                    loadTradeNews: t
                                }
                            }))
                        }
                    }
                })),
                l = function() {
                    var e = (0, n._)((0, a.A)("trd-load-announcement", !1), 2),
                        t = e[0],
                        r = e[1],
                        o = c((function(e) {
                            return e.setLoadTradeNews
                        })),
                        s = c((function(e) {
                            return e.loadTradeNews
                        })),
                        l = (0, u.O)();
                    (0, i.useEffect)((function() {
                        o(!l && !t)
                    }), [l]);
                    var d = (0, i.useCallback)((function(e) {
                        o(e), r(!e)
                    }), []);
                    return (0, i.useMemo)((function() {
                        return [s, d]
                    }), [s, d])
                },
                d = function() {
                    return (0, s.T)("trd-load-order-tips", !0)
                }
        },
        "eWL+": (e, t, r) => {
            "use strict";
            r.d(t, {
                Bj: () => s,
                NF: () => u,
                ZU: () => l,
                hF: () => i,
                iT: () => p,
                k0: () => f,
                pu: () => o,
                rS: () => a,
                wp: () => d,
                xX: () => m,
                zZ: () => c
            });
            var n = r("MD8j"),
                i = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.productMap
                    }))
                },
                o = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.loading
                    }))
                },
                a = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.isError
                    }))
                },
                s = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.filterProductMap
                    }))
                },
                u = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.marketTags.list
                    }))
                },
                c = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.marketTags.listMap
                    }))
                },
                l = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.commission
                    }))
                },
                d = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.marketTags.redtag
                    }))
                },
                p = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.marketTags.seedTag
                    }))
                },
                f = function() {
                    return (0, n.d4)((function(e) {
                        return e.pageStore.marketTags.pmTag
                    }))
                },
                m = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.productInfo
                    }))
                }
        },
        XNzI: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => s
            });
            var n = r("hrAD"),
                i = r("KrVi"),
                o = r("DTvD"),
                a = r("tSdT"),
                s = function() {
                    var e = (0, o.useState)(),
                        t = e[0],
                        r = e[1],
                        s = (0, a.A)().enqueueNotification;
                    return (0, o.useEffect)((function() {
                        var e = t || {},
                            r = e.message,
                            o = e.header,
                            a = e.variant,
                            u = void 0 === a ? "error" : a,
                            c = (0, i._)(e, ["message", "header", "variant"]);
                        (r || o) && s((0, n._)({
                            message: r,
                            header: o,
                            variant: u
                        }, c))
                    }), [t]), {
                        setMessageInfo: (0, o.useCallback)((function(e) {
                            return r(e),
                                function() {
                                    return r({})
                                }
                        }), [r])
                    }
                }
        },
        dbe9: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => _
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("tSdT"),
                a = r("MD8j"),
                s = r("b2AH"),
                u = r("bQ69"),
                c = r("hAzz"),
                l = r("m6e0"),
                d = r("eWL+"),
                p = r("qoEh"),
                f = r("c2J1"),
                m = r("PUby"),
                v = r("pIAZ"),
                g = r("Ykh1"),
                y = r("E4Qg"),
                T = function() {
                    var e, t = (0, s.ok)("trd-openOrder", e).getI18n,
                        r = (0, o.A)().enqueueNotification,
                        a = (0, n._)((0, v.y)(), 1)[0],
                        u = (0, m.A)(),
                        l = u.notice,
                        d = u.noticeV2,
                        p = (0, i.useCallback)((function(e) {
                            var t = e.side,
                                r = e.type,
                                n = e.trailingDelta,
                                i = (0, c.e4)(r, n),
                                o = t.toUpperCase(),
                                a = i.replace(/[-_]/g, "");
                            return "".concat(o).concat(a)
                        }), []),
                        f = (0, i.useCallback)((function(e) {
                            a && r(e)
                        }), [a, r]),
                        g = (0, i.useCallback)((function(e) {
                            if ("LIQUIDATION" !== e.type) {
                                var r = p(e),
                                    n = t("".concat(r, "CancelTitle"), {
                                        defaultValue: "".concat(e.type, " ").concat(e.side, " Order Canceled")
                                    }),
                                    i = e.origQty,
                                    o = e.baseAsset,
                                    a = e.quoteAsset,
                                    s = t("".concat(r, "CancelText"), {
                                        quantity: i,
                                        base: o,
                                        quote: a,
                                        defaultValue: "Canceled exchange ".concat(e.type, " ").concat(e.side, " order for {{quantity}} {{base}} by using {{quote}}")
                                    });
                                f({
                                    header: n,
                                    message: s || "",
                                    variant: "warning"
                                })
                            }
                        }), [t, f, p]),
                        y = (0, i.useCallback)((function(e) {
                            if (l(e.orderId), "LIQUIDATION" !== e.type) {
                                var r = p(e),
                                    n = t("".concat(r, "FillTitle"), {
                                        defaultValue: "".concat(e.type, " ").concat(e.side, " Order Filled")
                                    }),
                                    i = e.origQty,
                                    o = e.baseAsset,
                                    a = e.quoteAsset,
                                    s = t("".concat(r, "FillText"), {
                                        quantity: i,
                                        base: o,
                                        quote: a,
                                        defaultValue: "Filled exchange ".concat(e.type, " ").concat(e.side, " order for {{quantity}} {{base}} by using {{quote}}")
                                    });
                                f({
                                    header: n,
                                    message: s || "",
                                    variant: "success"
                                })
                            }
                        }), [t, f, p]),
                        T = (0, i.useCallback)((function(e) {
                            d(e.orderId)
                        }), [d]);
                    return {
                        cancelOrderNotify: g,
                        fillOrderNotify: y,
                        fillOrderPartNotify: (0, i.useCallback)((function(e) {
                            if (l(e.orderId), "LIQUIDATION" !== e.type) {
                                var r = p(e),
                                    n = t("".concat(r, "PFTitle"), {
                                        defaultValue: "".concat(e.type, " ").concat(e.side, " Order Partially Filled")
                                    }),
                                    i = e.origQty,
                                    o = e.baseAsset,
                                    a = e.quoteAsset,
                                    s = t("".concat(r, "PFText"), {
                                        quantity: i,
                                        base: o,
                                        quote: a,
                                        defaultValue: "Partially filled exchange ".concat(e.type, " ").concat(e.side, " order for {{quantity}} {{base}} by using {{quote}}")
                                    });
                                f({
                                    header: n,
                                    message: s || "",
                                    variant: "success"
                                })
                            }
                        }), [t, f, p]),
                        orderExpiredNotify: (0, i.useCallback)((function(e) {
                            l(e.orderId)
                        }), [l]),
                        newOrderNotify: T
                    }
                },
                _ = function(e) {
                    var t = (0, a.wA)(),
                        r = (0, d.Bj)(),
                        o = (0, f.nH)(),
                        s = (0, n._)((0, p.Gr)(), 1)[0],
                        m = function(e) {
                            return e === u.Gr.GRID ? u.Gr.SPOT : e
                        }(e || s),
                        v = (0, f.Py)().isExistMarginAccount,
                        _ = (0, c.B4)(m, v),
                        A = (0, g.N8)(),
                        b = A.created,
                        S = A.enable,
                        h = (0, y.M)(),
                        x = "".concat(b).concat(S),
                        E = T(),
                        I = E.fillOrderNotify,
                        R = E.cancelOrderNotify,
                        O = E.fillOrderPartNotify,
                        C = E.orderExpiredNotify,
                        N = E.newOrderNotify,
                        L = (0, d.pu)();
                    (0, i.useEffect)((function() {
                        if (!(h || "ISOLATED" === m && "undefinedundefined" === x)) return o && _ && !L ? (0, u.D$)().getUserOrderStream(m, void 0, true).subscribe((function(e) {
                            var n = (Array.isArray(e) ? e : [e]).reduce((function(e, t) {
                                var n, i = r[t.symbol] || {},
                                    o = i.baseAsset,
                                    a = i.quoteAsset;
                                return "NEW" === (null === t || void 0 === t ? void 0 : t.executionType) && (0, l.Zu)(null === t || void 0 === t ? void 0 : t.clientOrderId), !o || !a || (null === (n = t.clientOrderId) || void 0 === n ? void 0 : n.indexOf("web_grid_init")) >= 0 ? e : e.concat({
                                    baseAsset: o,
                                    quoteAsset: a,
                                    symbol: t.symbol,
                                    time: t.transactionTime,
                                    side: t.side,
                                    type: t.orderType,
                                    orderType: t.orderType,
                                    status: t.orderStatus,
                                    orderStatus: t.orderStatus,
                                    workingIndicator: t.isOnOrderBook,
                                    origQty: t.quantity,
                                    price: t.price,
                                    stopPrice: t.stopPrice,
                                    executedQty: t.cumulativeFilledQuantity,
                                    commissionAsset: t.commissionAsset,
                                    orderId: t.orderId,
                                    orderListId: t.orderListId,
                                    lastQty: t.LastExecutedQuantity,
                                    lastPrice: t.lastPrice,
                                    commission: t.commissionAmount,
                                    isMaker: t.isMaker,
                                    clientOrderId: t.clientOrderId,
                                    trailingDelta: t.trailingDelta,
                                    trailingTime: t.trailingTime,
                                    workingTime: t.workingTime,
                                    icebergQty: t.icebergQuantity,
                                    isSor: t.isSor,
                                    contingencyType: ""
                                })
                            }), []);
                            t.orders.mergeState({
                                type: "push",
                                payload: {
                                    orders: n
                                },
                                isFutures: !1,
                                cancelOrderNotify: R,
                                fillOrderNotify: I,
                                fillOrderPartNotify: O,
                                orderExpiredNotify: C,
                                newOrderNotify: N
                            })
                        })) : void 0
                    }), [t.orders, t.position, o, m, _, L, x, h])
                }
        },
        "H+pn": (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => o,
                F: () => a
            });
            var n = r("MD8j"),
                i = r("8Qll"),
                o = function() {
                    return (0, n.d4)(i.makeSearchFundKey)
                },
                a = function() {
                    return {
                        isHideSmallBalance: (0, n.d4)(i.makeIsHideSmallBalance),
                        isOrderHideOtherPairs: (0, n.d4)(i.makeIsOrderHideOtherPairs),
                        isOrderHistoryHideOtherPairs: (0, n.d4)(i.makeIsOrderHistoryHideOtherPairs),
                        isTradeHideOtherPairs: (0, n.d4)(i.makeIsTradeHideOtherPairs),
                        positionsMark: (0, n.d4)(i.makePositionsMark),
                        searchFundKey: (0, n.d4)(i.makeSearchFundKey)
                    }
                }
        },
        "Py+1": (e, t, r) => {
            "use strict";
            r.d(t, {
                y: () => u
            });
            var n = r("HBSB"),
                i = r("WMUl"),
                o = r("bQsp"),
                a = r("Qhol"),
                s = r("Bxol");
            var u = function() {
                var e = (0, a.nHk)(),
                    t = function() {
                        return (0, o.oE)(e || !1)
                    },
                    r = function() {
                        return (0, o.GD)(e || !1)
                    },
                    u = ((0, s.sd)().data ? .typesProductMap || s.uQ.typesProductMap).delivery,
                    c = (0, n.yj)({
                        getPMSDK: o.Uz,
                        getUMSDK: t,
                        getCMSDK: r,
                        preloadedCMProductMap: u,
                        enabled: !0
                    }),
                    l = c.initialMargin,
                    d = c.maintenanceMargin,
                    p = c.adjustedEquity,
                    f = (0, n.sy)({
                        getPMSDK: o.Uz,
                        getUMSDK: t,
                        getCMSDK: r,
                        enabled: !0
                    });
                return {
                    initialMargin: l,
                    maintenanceMargin: d,
                    adjustedEquity: p,
                    unpaidInterests: f.unpaidInterests,
                    negativeBalances: f.negativeBalances,
                    borrowedInMargin: f.borrowedInMargin,
                    totalDebt: f.totalDebt,
                    unimmr: (0, i.J)({
                        adjustedEquity: p,
                        maintenanceMargin: d
                    })
                }
            }
        },
        "5s+a": (e, t, r) => {
            "use strict";
            r.d(t, {
                No: () => b,
                Zf: () => A,
                g8: () => S
            });
            var n = r("S+0I"),
                i = r("mguP"),
                o = r("jbFV"),
                a = r.n(o),
                s = r("mXdx"),
                u = r("DTvD"),
                c = r("BiCW"),
                l = r("ppwf"),
                d = r("eAFj"),
                p = r("kU6N"),
                f = r("eWL+"),
                m = r("c2J1"),
                v = r("Qhol"),
                g = r("MiNH"),
                y = r("d/69"),
                T = r("3TJ4"),
                _ = (0, c.A)((function() {
                    return r.e(3809).then(r.bind(r, "rOXM"))
                }), {
                    webpack: function() {
                        return ["rOXM"]
                    }
                }),
                A = function(e) {
                    var t = ((0, f.hF)()[e] || {}).tags;
                    return (0, u.useMemo)((function() {
                        return !!Array.isArray(t) && t.indexOf(y.hr) > -1
                    }), [t])
                },
                b = (0, d.A)((function(e) {
                    return {
                        showDialog: !1,
                        setShowDialog: function(t) {
                            return e((function() {
                                return {
                                    showDialog: t
                                }
                            }))
                        },
                        isNeedSign: !1,
                        setIsNeedSign: function(t) {
                            return e((function() {
                                return {
                                    isNeedSign: t
                                }
                            }))
                        },
                        fetched: !1,
                        setIsfetched: function(t) {
                            return e((function() {
                                return {
                                    fetched: t
                                }
                            }))
                        },
                        hadSign: !1,
                        setHadSign: function(t) {
                            return e((function() {
                                return {
                                    hadSign: t
                                }
                            }))
                        }
                    }
                })),
                S = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = t.no_need_dialog,
                        o = void 0 !== r && r,
                        c = t.forceFetch,
                        d = void 0 !== c && c,
                        f = t.no_need_fetch,
                        y = void 0 !== f && f,
                        S = (0, i._)((0, v.sL)(), 1)[0],
                        h = A(S),
                        x = (0, m.nH)(),
                        E = (0, l.S)(),
                        I = b((function(e) {
                            return e.showDialog
                        })),
                        R = b((function(e) {
                            return e.setShowDialog
                        })),
                        O = b((function(e) {
                            return e.setIsNeedSign
                        })),
                        C = b((function(e) {
                            return e.setIsfetched
                        })),
                        N = b((function(e) {
                            return e.setHadSign
                        })),
                        L = b((function(e) {
                            return e.fetched
                        })),
                        P = b((function(e) {
                            return e.hadSign
                        })),
                        k = x && h,
                        M = function() {
                            (0, g.M2)({
                                configType: "PRE_MARKET",
                                configValue: "true"
                            }).then((function(t) {
                                t && t.success && (O(!1), N(!0), e())
                            })), (0, T.YR)()
                        },
                        D = {
                            color: "t.third",
                            fontSize: "20px",
                            cursor: "pointer",
                            "&:hover": {
                                color: "t.secondary"
                            }
                        },
                        w = (0, u.useCallback)((function() {
                            function t() {
                                return (t = (0, n._)(a().mark((function t() {
                                    var r, n;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, (0, g.VJ)({
                                                    configType: "PRE_MARKET"
                                                });
                                            case 2:
                                                if (r = t.sent, C(!0), N(r || !1), !h || !r) {
                                                    t.next = 8;
                                                    break
                                                }
                                                return O(!1), t.abrupt("return");
                                            case 8:
                                                if (!r && k && O(!0), o) {
                                                    t.next = 15;
                                                    break
                                                }
                                                if (!document.getElementById("trd-PreMarketDiscaimer")) {
                                                    t.next = 12;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 12:
                                                n = (0, p.aF)({
                                                    sx: {
                                                        padding: 0,
                                                        maxWidth: "720px"
                                                    },
                                                    closeSx: D,
                                                    content: (0, s.jsx)(_, {
                                                        onClose: function() {
                                                            return n()
                                                        },
                                                        onSubmit: M
                                                    }),
                                                    onClose: function() {}
                                                }).close, e = n, R(!1);
                                            case 15:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))).apply(this, arguments)
                            }(k || d) && (L && P || function() {
                                t.apply(this, arguments)
                            }())
                        }), [k, S, L, P]);
                    (0, u.useEffect)((function() {
                        k || O(!1), !E && w()
                    }), [S]), (0, u.useEffect)((function() {
                        y || !E && I && w()
                    }), [I]), (0, u.useEffect)((function() {
                        void 0 !== x && w()
                    }), [x])
                }
        },
        wmlU: (e, t, r) => {
            "use strict";
            r.d(t, {
                NU: () => E,
                b3: () => I,
                ip: () => O,
                vx: () => R
            });
            var n = r("S+0I"),
                i = r("iKvg"),
                o = r("hrAD"),
                a = r("qoEP"),
                s = r("mguP"),
                u = r("jbFV"),
                c = r.n(u),
                l = r("mXdx"),
                d = r("DTvD"),
                p = r("BiCW"),
                f = r("ppwf"),
                m = r("Ov3/"),
                v = r("eAFj"),
                g = r("sR6W"),
                y = r.n(g),
                T = r("kU6N"),
                _ = r("eWL+"),
                A = r("c2J1"),
                b = r("Qhol"),
                S = r("MiNH"),
                h = (0, p.A)((function() {
                    return r.e(1543).then(r.bind(r, "6Uxg"))
                }), {
                    webpack: function() {
                        return ["6Uxg"]
                    }
                }),
                x = (0, p.A)((function() {
                    return r.e(3673).then(r.bind(r, "1cz2"))
                }), {
                    webpack: function() {
                        return ["1cz2"]
                    }
                }),
                E = function(e) {
                    var t = (0, _.wp)(),
                        r = ((0, _.hF)()[e] || {}).tags;
                    return (0, d.useMemo)((function() {
                        if (Array.isArray(r)) {
                            var e = y()(t, r);
                            return e.length > 0 ? e[0] : ""
                        }
                        return ""
                    }), [t, r])
                },
                I = function(e) {
                    var t = (0, _.iT)(),
                        r = ((0, _.hF)()[e] || {}).tags;
                    return (0, d.useMemo)((function() {
                        if (Array.isArray(r)) {
                            var e = y()(t, r);
                            return e.length > 0 ? e[0] : ""
                        }
                        return ""
                    }), [t, r])
                },
                R = (0, v.A)((function(e) {
                    return {
                        showDialog: !1,
                        setShowDialog: function(t) {
                            return e((function() {
                                return {
                                    showDialog: t
                                }
                            }))
                        },
                        isNeedSign: !1,
                        setIsNeedSign: function(t) {
                            return e((function() {
                                return {
                                    isNeedSign: t
                                }
                            }))
                        }
                    }
                })),
                O = function() {
                    var e, t = (0, s._)((0, b.sL)(), 1)[0],
                        r = E(t),
                        u = I(t),
                        p = (0, A.nH)(),
                        v = (0, b.DPo)().isLight,
                        g = (0, f.S)(),
                        y = (0, b.Pyz)().userId,
                        _ = void 0 === y ? "" : y,
                        O = (0, s._)((0, m.A)("trd-hadAssign-red", {}), 2),
                        C = O[0],
                        N = O[1],
                        L = (0, s._)((0, m.A)("trd-hadAssign-seed", {}), 2),
                        P = L[0],
                        k = L[1],
                        M = (null === C || void 0 === C ? void 0 : C[_]) || "",
                        D = (null === P || void 0 === P ? void 0 : P[_]) || "",
                        w = function(e) {
                            N((0, a._)((0, o._)({}, C), (0, i._)({}, _, e)))
                        },
                        U = function(e) {
                            k((0, a._)((0, o._)({}, P), (0, i._)({}, _, e)))
                        },
                        B = !p || "" !== M && (new Date).valueOf() < Number(M) + 864e5,
                        q = !p || "" !== D && (new Date).valueOf() < Number(D) + 864e5,
                        j = R((function(e) {
                            return e.showDialog
                        })),
                        F = R((function(e) {
                            return e.setShowDialog
                        })),
                        Q = R((function(e) {
                            return e.setIsNeedSign
                        })),
                        G = p && (r && !B || u && !q),
                        Y = function() {
                            (0, S.M2)({
                                configType: "RED_ASSETS_QUIZ",
                                configValue: "true"
                            }).then((function(t) {
                                t && (w("".concat((new Date).valueOf())), e())
                            })), r && u && K()
                        },
                        K = function() {
                            (0, S.M2)({
                                configType: "SEED_ASSETS_QUIZ",
                                configValue: "true"
                            }).then((function(t) {
                                t && (U("".concat((new Date).valueOf())), e())
                            }))
                        },
                        V = {
                            color: "t.third",
                            fontSize: "20px",
                            cursor: "pointer",
                            "&:hover": {
                                color: "t.secondary"
                            }
                        },
                        W = (0, d.useCallback)((function() {
                            function t() {
                                return t = (0, n._)(c().mark((function t() {
                                    var n, i, o, a, d, p, f, m;
                                    return c().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.t0 = s._, t.next = 3, Promise.all([(0, S.VJ)({
                                                    configType: "RED_ASSETS_QUIZ"
                                                }), (0, S.VJ)({
                                                    configType: "SEED_ASSETS_QUIZ"
                                                })]);
                                            case 3:
                                                if (t.t1 = t.sent, n = (0, t.t0)(t.t1, 2), i = n[0], o = n[1], a = document.getElementById("redQuiz"), d = document.getElementById("seedQuiz"), !a && !d) {
                                                    t.next = 11;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 11:
                                                if (i && w("".concat((new Date).valueOf())), o && U("".concat((new Date).valueOf())), !(r && u && i) || o) {
                                                    t.next = 18;
                                                    break
                                                }
                                                return p = (0, T.aF)({
                                                    sx: {
                                                        padding: 0,
                                                        maxWidth: "720px"
                                                    },
                                                    closeSx: V,
                                                    content: (0, l.jsx)(x, {
                                                        onClose: function() {
                                                            return p()
                                                        },
                                                        onSubmit: K
                                                    }),
                                                    onClose: function() {}
                                                }).close, e = p, F(!1), t.abrupt("return");
                                            case 18:
                                                if (!r || i) {
                                                    t.next = 25;
                                                    break
                                                }
                                                return f = (0, T.aF)({
                                                    sx: {
                                                        padding: 0,
                                                        maxWidth: "720px"
                                                    },
                                                    closeSx: V,
                                                    content: (0, l.jsx)(h, {
                                                        onClose: function() {
                                                            return f()
                                                        },
                                                        onSubmit: Y
                                                    }),
                                                    onClose: function() {}
                                                }).close, e = f, F(!1), t.abrupt("return");
                                            case 25:
                                                u && !o && (m = (0, T.aF)({
                                                    sx: {
                                                        padding: 0,
                                                        maxWidth: "720px"
                                                    },
                                                    closeSx: V,
                                                    content: (0, l.jsx)(x, {
                                                        onClose: function() {
                                                            return m()
                                                        },
                                                        onSubmit: K
                                                    }),
                                                    onClose: function() {}
                                                }).close, e = m, F(!1));
                                            case 26:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), t.apply(this, arguments)
                            }
                            p && (r && !u && B || u && !r && q || function() {
                                t.apply(this, arguments)
                            }())
                        }), [v, G, t]);
                    (0, d.useEffect)((function() {
                        Q(G)
                    }), [G]), (0, d.useEffect)((function() {
                        !g && W()
                    }), [t]), (0, d.useEffect)((function() {
                        !g && j && W()
                    }), [j]), (0, d.useEffect)((function() {
                        void 0 !== p && W()
                    }), [p])
                }
        },
        UWKL: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => l
            });
            var n = r("bQ69"),
                i = r("S9gL"),
                o = r("bLkt"),
                a = {
                    query: "screen and (max-width: 767px)"
                },
                s = {
                    query: o.pW
                },
                u = {
                    query: "screen and (max-width: 1279px)"
                },
                c = {
                    query: o.hJ
                };

            function l() {
                if (n.S$) return {
                    isMobile: !1,
                    isIPad: !1,
                    isDesktop: !0,
                    isLeastWebSize: !1
                };
                var e = (0, i.useMediaQuery)(a),
                    t = (0, i.useMediaQuery)(s),
                    r = (0, i.useMediaQuery)(u);
                return {
                    isMobile: e,
                    isIPad: t,
                    isDesktop: (0, i.useMediaQuery)(c),
                    isLeastWebSize: r
                }
            }
        },
        "FA/f": (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => p
            });
            var n = r("VA12"),
                i = r("WOGT"),
                o = r("DTvD"),
                a = r("bQ69"),
                s = r("Qhol"),
                u = {
                    get: n.get,
                    post: n.post
                },
                c = new i.O("fc8q5jqk", "web", "FRAMEWORK_INIT"),
                l = i.i.getInstance(),
                d = !1,
                p = function() {
                    var e = (0, s.Pyz)();
                    (0, o.useEffect)((function() {
                        (null === e || void 0 === e ? void 0 : e.fetched) && !d && ((null === e || void 0 === e ? void 0 : e.fetched) && (c.user_id = null === e || void 0 === e ? void 0 : e.userId, c.setEventParam("email", null === e || void 0 === e ? void 0 : e.email)), l.init(c, u, a.K5).then((function(e) {
                            console.log("[*] falcon init success: ".concat(e)), d = !0
                        })).catch((function(e) {
                            console.error("[*] falcon init failed: ".concat(e))
                        })))
                    }), [e])
                }
        },
        "Rb/Q": (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => o
            });
            var n = r("DTvD"),
                i = r("bJ6b");

            function o() {
                var e = (0, i.K7)().query,
                    t = void 0 === e ? {} : e;
                return (0, n.useMemo)((function() {
                    return t
                }), [t])
            }
        },
        G7PN: (e, t, r) => {
            "use strict";
            r.d(t, {
                Am: () => y,
                DP: () => g,
                by: () => T,
                jo: () => _,
                wD: () => b
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                a = r("DTvD"),
                s = r("MD8j"),
                u = r("Hf/4"),
                c = r("VLTf"),
                l = r.n(c),
                d = r("XOJJ"),
                p = r("NoXm"),
                f = (r("bQ69"), r("F6Re")),
                m = r("/LKW"),
                v = r("FkjH"),
                g = (r("ozYv"), v.A.getUserSettings, function() {
                    var e = (0, s.d4)((function(e) {
                            return e.setting.theme
                        })),
                        t = (0, p.useCacheState)("theme")[0] || e,
                        r = "light" === t;
                    return (0, a.useMemo)((function() {
                        return {
                            isLight: r,
                            theme: t
                        }
                    }), [r])
                }),
                y = function(e) {
                    return (0, a.useContext)(d.IT)
                },
                T = function() {
                    return (0, s.d4)(f.makeColor)
                },
                _ = function() {
                    return "cvd" === (0, s.d4)(f.makeColor)
                },
                A = function(e) {
                    var t = (0, a.useContext)(d.fY),
                        r = e.isLight,
                        i = e.color,
                        s = void 0 === i ? "fresh" : i,
                        c = e.isRUGD,
                        p = void 0 !== c && c,
                        f = {
                            isLight: r,
                            color: s,
                            isRUGD: p
                        },
                        v = (0, u.A)(f),
                        g = v && !l()(f, v);
                    (0, a.useEffect)((function() {
                        (0, n._)(o().mark((function e() {
                            var n;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!g) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, (0, m.Y3)(!!r, s, p);
                                    case 3:
                                        n = e.sent, t(n);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [t, s, r, p, g])
                },
                b = function() {
                    var e = g().isLight,
                        t = (0, s.d4)(f.makeColor),
                        r = (0, s.d4)(f.maketIsRedUpGreenDown);
                    A({
                        isLight: e,
                        color: t,
                        isRUGD: r
                    })
                }
        },
        gz7j: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => o
            });
            var n = r("MD8j"),
                i = r("lW1t"),
                o = function() {
                    return (0, n.d4)(i.makeSymbol)
                }
        },
        "0GV5": (e, t, r) => {
            "use strict";
            r.d(t, {
                Bm: () => s,
                YG: () => c,
                gh: () => a,
                tk: () => u
            });
            var n = r("bQ69"),
                i = r("PBWd"),
                o = r("oQEc"),
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return (0, i.l)(n.C3, e).result === t
                },
                s = function(e) {
                    return ((0, o.x)(n.C3, e).result || {
                        pass: !1
                    }).pass
                },
                u = function(e) {
                    var t = (0, o.x)(n.C3, e),
                        r = t.result,
                        i = t.isLoading;
                    return {
                        pass: (r || {
                            pass: !1
                        }).pass,
                        loaded: !i
                    }
                },
                c = function() {
                    return (0, o.z)("finance-common").result
                }
        },
        "G/TK": (e, t, r) => {
            "use strict";
            r.d(t, {
                i: () => b
            });
            var n = r("S+0I"),
                i = r("iKvg"),
                o = r("hrAD"),
                a = r("qoEP"),
                s = r("mguP"),
                u = r("d12p"),
                c = r("jbFV"),
                l = r.n(c),
                d = r("bQ69"),
                p = r("Qhol"),
                f = r("DTvD"),
                m = r("rOIZ"),
                v = r("tM9B"),
                g = r("MD8j"),
                y = r("WT+B"),
                T = r("45td"),
                _ = {
                    a: "aggTradeId",
                    f: "firstTradeId",
                    l: "lastTradeId",
                    p: "price",
                    T: "tradeTime",
                    q: "quantity",
                    m: "buyerIsMaker"
                },
                A = function() {
                    var e = (0, n._)(l().mark((function e(t) {
                        var r, n;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 3, e.next = 6, (0, T.F)({
                                        symbol: t,
                                        limit: 80,
                                        isFutures: !1,
                                        isDelivery: !1
                                    });
                                case 6:
                                    r = e.sent, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), console.error(e.t0);
                                case 12:
                                    return n = Object.keys(_), e.abrupt("return", (r || []).map((function(e) {
                                        return n.reduce((function(t, r) {
                                            var n = _[r];
                                            return (0, a._)((0, o._)({}, t), (0, i._)({}, n, e[r]))
                                        }), {
                                            symbol: t
                                        })
                                    })));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, s._)((0, p.sL)(), 1)[0],
                        t = (0, p.igz)(e).product,
                        r = t.close,
                        i = t.tickSize,
                        o = (0, f.useMemo)((function() {
                            return (0, m.XV)(i)
                        }), [i]),
                        a = (0, g.wA)(),
                        c = (0, y.Z)((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = (e[e.length - 1] || {}).price,
                                n = void 0 === t ? r : t;
                            a.ticker.updateState({
                                lastPrice: n,
                                showPrice: (0, v.ZV)(n, o),
                                tk: o,
                                tradeList: (0, u._)(e)
                            })
                        }));
                    (0, f.useEffect)((function() {
                        var t = [];

                        function r() {
                            return (r = (0, n._)(l().mark((function r() {
                                var n;
                                return l().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return a.ticker.updateState({
                                                initLoading: !0
                                            }), r.next = 3, A(e);
                                        case 3:
                                            n = r.sent, c(n), t = n, a.ticker.updateState({
                                                initLoading: !1
                                            });
                                        case 7:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))).apply(this, arguments)
                        }
                        return c([]),
                            function() {
                                r.apply(this, arguments)
                            }(), (0, d.D5)().getStreamTrade(e).subscribe((function(e) {
                                var r = Array.isArray(e) ? e : [e];
                                t = t.concat(r).slice(-80), c(t)
                            }))
                    }), [e])
                }
        },
        qoEh: (e, t, r) => {
            "use strict";
            r.d(t, {
                Fk: () => S,
                Gr: () => A,
                Oy: () => x,
                d3: () => I,
                i2: () => b,
                qg: () => E
            });
            var n = r("S+0I"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("mguP"),
                s = r("jbFV"),
                u = r.n(s),
                c = r("DTvD"),
                l = r("bJ6b"),
                d = r("MD8j"),
                p = r("Vur3"),
                f = r("lW1t"),
                m = r("bQ69"),
                v = r("hAzz"),
                g = r("obHX"),
                y = r("Sr3F"),
                T = r("Qhol"),
                _ = r("zHUU"),
                A = function(e, t) {
                    var r = (0, d.wA)(),
                        s = (0, d.d4)(f.makeTradeType),
                        _ = (0, y.s)(),
                        A = (0, l.rd)(),
                        b = (0, g.q$)(),
                        S = (0, T.okI)(),
                        h = (0, T.DPo)().isLight,
                        x = ((0, T.FzM)(), (0, c.useCallback)(function() {
                            var e = (0, n._)(u().mark((function e(t) {
                                var n, a, c, l, d;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = b && (0, v.V$)(s) ? m.Gr.SPOT : t, r.pageStore.toggleTradeType(n), e.next = 4;
                                            break;
                                        case 4:
                                            a = (0, o._)((0, i._)({}, S), {
                                                type: String(n).toLowerCase()
                                            }), c = p.stringify(a), l = "".concat(window.location.pathname).concat(c ? "?" : "").concat(c), _(l), d = A.afterEach((function(e) {
                                                var t = e.pathname,
                                                    r = e.query;
                                                n === m.Gr.CROSS ? r.type = "cross" : delete r.type;
                                                var i = p.stringify(r),
                                                    o = "".concat(t).concat(i && "?").concat(i);
                                                _(o), d()
                                            }));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [r.pageStore, _, A, b, h])),
                        E = (0, a._)((0, T.be3)(e, t), 2);
                    E[0], E[1];
                    return [s, x]
                },
                b = function(e, t) {
                    var r = (0, a._)(A(), 1)[0];
                    (0, T.FzM)(), (0, T.LUR)(e, t);
                    return (0, v.lX)(r)
                },
                S = function(e) {
                    return !1
                },
                h = ["es-LA", "es-MX"],
                x = function(e) {
                    var t, r = e.symbol,
                        n = void 0 === r ? "" : r,
                        i = e.productMap,
                        o = void 0 === i ? {} : i,
                        a = e.lng,
                        s = void 0 === a ? "" : a,
                        u = e.isMobile,
                        c = void 0 !== u && u,
                        l = e.openGrid,
                        d = void 0 === l || l,
                        p = e.disabledGrid;
                    return !(!d || void 0 !== p && p) && ((null === (t = o[n]) || void 0 === t ? void 0 : t.gridTrade) && !h.includes(s) && !c)
                },
                E = function() {
                    var e = (0, T.FzM)(),
                        t = (0, T.zCE)();
                    return !e && !t
                },
                I = function(e) {
                    var t = (0, T.hFK)(),
                        r = (0, _.Bl)(),
                        n = (0, T.QsY)().isMobile,
                        i = E(),
                        o = (0, T.qK7)();
                    return x({
                        symbol: e,
                        productMap: t,
                        lng: r,
                        isMobile: n,
                        openGrid: i,
                        disabledGrid: o
                    })
                }
        },
        KKaJ: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => S,
                Y: () => b
            });
            var n = r("S+0I"),
                i = r("iKvg"),
                o = r("hrAD"),
                a = r("qoEP"),
                s = r("mguP"),
                u = r("jbFV"),
                c = r.n(u),
                l = r("DTvD"),
                d = r("QQ00"),
                p = r("eAFj"),
                f = r("MD8j"),
                m = r("Qhol"),
                v = r("hAzz"),
                g = r("/jvT"),
                y = (0, p.A)((function(e) {
                    return {
                        isMarginBlocked: {
                            margin: !1,
                            pm: !1
                        },
                        setIsMarginBlocked: function(t, r) {
                            return e((function(e) {
                                return {
                                    isMarginBlocked: (0, a._)((0, o._)({}, e.isMarginBlocked), (0, i._)({}, t, r))
                                }
                            }))
                        }
                    }
                })),
                T = function() {
                    var e = (0, f.d4)(g.makeMarginAccount);
                    return null === e || void 0 === e ? void 0 : e.isUniAccount
                };

            function _(e, t) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = (0, n._)(c().mark((function e(t, r) {
                    var n, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, d.qk)(t);
                            case 3:
                                (null === (n = e.sent) || void 0 === n ? void 0 : n.success) && r(!1 === (null === n || void 0 === n || null === (i = n.data) || void 0 === i ? void 0 : i.pass)), e.next = 9;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0);
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }
            var b = function() {
                    var e = (0, m.DFo)().isPmAccount,
                        t = T(),
                        r = (0, s._)((0, m.Grl)(), 1)[0];
                    return y((function(e) {
                        return e.isMarginBlocked
                    }))[(t || e) && (0, v.hx)(r) ? "pm" : "margin"]
                },
                S = function() {
                    var e = (0, m.DFo)().isPmAccount,
                        t = T(),
                        r = y((function(e) {
                            return e.setIsMarginBlocked
                        }));
                    (0, l.useEffect)((function() {
                        _({
                            productLine: "MARGIN",
                            operation: "DEFAULT_AND_ENFORCE_KYC"
                        }, (function(e) {
                            return r("margin", e)
                        }))
                    }), []);
                    var n = t || e;
                    (0, l.useEffect)((function() {
                        n && _({
                            productLine: "PORTFOLIO_MARGIN",
                            operation: "TRADE_RESTRICT"
                        }, (function(e) {
                            return r("pm", e)
                        }))
                    }), [n])
                }
        },
        c2J1: (e, t, r) => {
            "use strict";
            r.d(t, {
                $i: () => u,
                Py: () => s,
                nH: () => a,
                vz: () => o
            });
            var n = r("MD8j"),
                i = r("rPfi"),
                o = function() {
                    return (0, n.d4)(i.makeLogin)
                },
                a = function() {
                    return (0, n.d4)(i.makeIsLogin)
                },
                s = function() {
                    return (0, n.d4)(i.makeUserInfo)
                },
                u = function() {
                    return (0, n.d4)(i.makeOrderAdjustment)
                }
        },
        zOA2: (e, t, r) => {
            "use strict";
            r.d(t, {
                VU: () => i
            });
            var n = r("bQ69"),
                i = [n.Pv, n.ug, n.a0, n.iW, ""]
        },
        "0naa": (e, t, r) => {
            "use strict";
            r.d(t, {
                Qu: () => n
            });
            var n = [{
                id: "0",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "1",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "2",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "3",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "4",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "5",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "6",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "7",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }, {
                id: "8",
                currentSymbol: "",
                currentBaseAsset: "",
                currentQuoteAsset: "",
                widgetKeys: []
            }]
        },
        SFsY: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => u
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("d12p"),
                a = r("eAFj"),
                s = r("0naa"),
                u = (0, a.A)((function(e) {
                    return {
                        currentMaxZIndex: 0,
                        currentActiveLayout: "",
                        currentActiveLayoutGroup: "",
                        layouts: [],
                        groups: s.Qu,
                        addLayout: function(t) {
                            e((function(e) {
                                return {
                                    layouts: (0, o._)(e.layouts).concat([(0, n._)({}, t)])
                                }
                            }))
                        },
                        removeLayout: function(t) {
                            e((function(e) {
                                return {
                                    layouts: e.layouts.filter((function(e) {
                                        return e.key !== t
                                    }))
                                }
                            }))
                        },
                        updateLayout: function(t) {
                            e((function(e) {
                                return {
                                    layouts: e.layouts.map((function(e) {
                                        return e.key === t.key ? (0, n._)({}, t) : e
                                    }))
                                }
                            }))
                        },
                        updateLayoutZIndex: function(t) {
                            e((function(e) {
                                return {
                                    layouts: e.layouts.map((function(r) {
                                        return r.key === t.key ? (0, i._)((0, n._)({}, r, t), {
                                            zIndex: ++e.currentMaxZIndex
                                        }) : r
                                    }))
                                }
                            }))
                        },
                        updateCurrentMaxZIndex: function(t) {
                            e((function() {
                                return {
                                    currentMaxZIndex: t
                                }
                            }))
                        },
                        emptyLayout: function() {
                            e((function() {
                                return {
                                    layouts: []
                                }
                            }))
                        },
                        updateCurrentActiveLayout: function(t) {
                            e((function() {
                                return {
                                    currentActiveLayout: t
                                }
                            }))
                        },
                        updateCurrentActiveLayoutGroup: function(t) {
                            e((function() {
                                return {
                                    currentActiveLayoutGroup: t
                                }
                            }))
                        },
                        toggleCurrentWidgetLock: function() {
                            e((function(e) {
                                return {
                                    layouts: e.layouts.map((function(t) {
                                        return t.key === e.currentActiveLayout ? (0, i._)((0, n._)({}, t), {
                                            locked: !t.locked
                                        }) : t
                                    }))
                                }
                            }))
                        },
                        changeCurrentGroups: function(t, r) {
                            e((function(e) {
                                var o = e.groups;
                                if (t.id === r.id) return e;
                                if ("0" === t.id) return o.forEach((function(e) {
                                    if (e.id === r.id) {
                                        var t = e.widgetKeys.indexOf(r.widgetKey);
                                        e.widgetKeys.splice(t, 1)
                                    }
                                })), (0, i._)((0, n._)({}, e), {
                                    groups: o,
                                    layouts: e.layouts.map((function(e) {
                                        return e.key === t.widgetKey ? (0, i._)((0, n._)({}, e), {
                                            group: "0"
                                        }) : e
                                    }))
                                });
                                var a = {
                                        currentSymbol: "",
                                        currentQuoteAsset: "",
                                        currentBaseAsset: ""
                                    },
                                    s = {
                                        currentSymbol: "",
                                        currentQuoteAsset: "",
                                        currentBaseAsset: ""
                                    },
                                    u = {
                                        currentSymbol: "BTCUSDT",
                                        currentBaseAsset: "BTC",
                                        currentQuoteAsset: "USDT"
                                    };
                                o.forEach((function(e) {
                                    if (e.id === r.id) {
                                        s = {
                                            currentSymbol: e.currentSymbol,
                                            currentQuoteAsset: e.currentQuoteAsset,
                                            currentBaseAsset: e.currentBaseAsset
                                        };
                                        var n = e.widgetKeys.indexOf(r.widgetKey);
                                        e.widgetKeys.splice(n, 1)
                                    }
                                    e.id === t.id && (a = {
                                        currentSymbol: e.currentSymbol,
                                        currentQuoteAsset: e.currentQuoteAsset,
                                        currentBaseAsset: e.currentBaseAsset
                                    }, e.widgetKeys.push(t.widgetKey))
                                })), a.currentSymbol && (u = a), !a.currentSymbol && s.currentSymbol && (u = s);
                                var c = e.layouts.map((function(e) {
                                        return e.key === t.widgetKey ? (0, n._)((0, i._)((0, n._)({}, e), {
                                            group: t.id
                                        }), u) : e
                                    })),
                                    l = o.map((function(e) {
                                        return e.id === t.id ? (0, n._)({}, e, u) : e
                                    }));
                                return (0, i._)((0, n._)({}, e), {
                                    groups: l,
                                    layouts: c
                                })
                            }))
                        },
                        changeCurrentGroupSymbol: function(t, r, o, a, s) {
                            e((function(e) {
                                return {
                                    groups: e.groups.map((function(e) {
                                        return e.id === t ? (0, i._)((0, n._)({}, e), {
                                            currentSymbol: r,
                                            currentBaseAsset: o,
                                            currentQuoteAsset: a
                                        }) : e
                                    })),
                                    layouts: e.layouts.map((function(e) {
                                        var u = s && s === e.key,
                                            c = !s && e.group === t;
                                        return u || c ? (0, i._)((0, n._)({}, e), {
                                            widgetSymbol: r,
                                            widgetBaseAsset: o,
                                            widgetQuoteAsset: a
                                        }) : e
                                    }))
                                }
                            }))
                        },
                        changeComponentsSymbolByKey: function(t, r, o, a) {
                            e((function(e) {
                                return {
                                    layouts: e.layouts.map((function(e) {
                                        return e.key === t ? (0, i._)((0, n._)({}, e), {
                                            widgetSymbol: r,
                                            widgetBaseAsset: o,
                                            widgetQuoteAsset: a
                                        }) : e
                                    }))
                                }
                            }))
                        },
                        uploadInitUserSetting: function(t) {
                            var r = function(e) {
                                var t = s.Qu;
                                return e.forEach((function(e) {
                                    t.forEach((function(t) {
                                        t.id === e.group && (t.currentSymbol = e.widgetSymbol || "", t.currentBaseAsset = e.widgetBaseAsset || "", t.currentQuoteAsset = e.widgetQuoteAsset || "", t.widgetKeys.push(e.key))
                                    }))
                                })), t
                            }((0, o._)(t));
                            e((function() {
                                return {
                                    groups: r,
                                    layouts: (0, o._)(t)
                                }
                            }))
                        }
                    }
                }))
        },
        "3GNB": (e, t, r) => {
            "use strict";
            r.d(t, {
                WP: () => c,
                bL: () => u
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                a = r("VA12"),
                s = r("XqCI"),
                u = function() {
                    var e = (0, n._)(o().mark((function e(t) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.get)("/bapi/margin/v1/friendly/margin/dynamic-interest-rate?".concat((0, s.E2)(t)));
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = (function() {
                    var e = (0, n._)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.get)("/bapi/margin/v1/public/margin/beta-feature/DYNAMIC_INTEREST_RATE");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(o().mark((function e() {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.get)("/bapi/margin/v1/public/margin/swap-config");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
        },
        Bz5g: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => s,
                b: () => u
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                a = r("VA12"),
                s = function() {
                    var e = (0, n._)(o().mark((function e(t) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.post)("/bapi/capital/v1/private/streamer/order/get-open-orders", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = function() {
                    var e = (0, n._)(o().mark((function e(t) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        success: !1,
                                        message: ""
                                    }, e.prev = 1, e.next = 4, (0, a.post)("/bapi/mbx/v1/private/mbxgateway/order/cancelReplace", t);
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 10:
                                    return e.abrupt("return", r);
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
                }()
        },
        "6A/j": (e, t, r) => {
            "use strict";
            r.d(t, {
                Dl: () => c,
                GV: () => p,
                IL: () => v,
                M: () => y,
                PC: () => T,
                SN: () => _,
                fj: () => A,
                gy: () => f,
                jz: () => d,
                s: () => m,
                tM: () => g,
                vY: () => l
            });
            var n = r("S+0I"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("jbFV"),
                s = r.n(a),
                u = r("VA12"),
                c = (function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n, i, o, a, c, l = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = l.length > 0 && void 0 !== l[0] ? l[0] : {}, r = {
                                        success: !1,
                                        message: ""
                                    }, e.prev = 2, e.next = 5, (0, u.post)("/bapi/accounts/v1/private/account/user/finishUserSignatureConfig", t);
                                case 5:
                                    n = e.sent, i = n.success, o = void 0 !== i && i, a = n.message, c = void 0 === a ? "" : a, r.success = o, r.message = c, e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(2), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 17:
                                    return e.abrupt("return", r);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 14]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = !1, e.prev = 2, e.next = 5, (0, u.get)("/bapi/margin/v1/private/margin/quiz/pass-check");
                                case 5:
                                    r = e.sent.data, t = 1 == (null === r || void 0 === r ? void 0 : r.quizPass), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(2), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 12:
                                    return e.abrupt("return", t);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 9]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {}, e.prev = 2, e.next = 5, (0, u.get)("/bapi/margin/v1/private/margin/quiz/pass-check");
                                case 5:
                                    r = e.sent.data, t = r, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(2), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 12:
                                    return e.abrupt("return", t);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                l = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n, i, o;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = null, e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/margin/account/flag");
                                case 4:
                                    r = e.sent, n = r.data, i = void 0 === n ? {} : n, o = r.success, void 0 !== o && o && (t = i), e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(1), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 15:
                                    return e.abrupt("return", t);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 12]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.get)("/bapi/margin/v1/private/margin/account/flag/enabled");
                                case 2:
                                    return t = e.sent, r = t.data, n = void 0 === r ? [] : r, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : "MARGIN_PRO_QUIZ_2", e.next = 3, (0, u.post)("/bapi/margin/v1/private/margin/account/flag", {
                                        code: t
                                    });
                                case 3:
                                    return r = e.sent, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.post)("/bapi/margin/v1/private/margin/account-type-switch", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = (function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.get)("/bapi/margin/v1/private/margin/quiz/pass-check");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.get)("/bapi/margin/v1/private/margin/quiz/select");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                v = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.quizType, e.next = 3, (0, u.get)("/bapi/margin/v1/private/margin/quiz/select?quizType=".concat(r));
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = (function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.post)("/bapi/margin/v1/private/margin/quiz/answer-submit", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.get)("/bapi/margin/v1/private/margin/quiz/pass-check");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                y = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.post)("/bapi/margin/v1/private/margin/quiz/submit", {
                                        skipQuiz: !0,
                                        code: "LEVERAGE_TEST"
                                    });
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                T = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.post)("/bapi/margin/v1/private/margin/account/flag", {
                                        code: "MARGIN_TERM"
                                    });
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.post)("/bapi/margin/v1/private/margin/quiz/submit", (0, o._)((0, i._)({}, t), {
                                        skipQuiz: !1,
                                        code: "LEVERAGE_TEST"
                                    }));
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.post)("/bapi/margin/v1/private/margin/quiz/submit", (0, o._)((0, i._)({}, t), {
                                        code: "MARGIN_TRADE_PRO"
                                    }));
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
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
        bQsp: (e, t, r) => {
            "use strict";
            r.d(t, {
                GD: () => l,
                Uz: () => d,
                oE: () => c
            });
            var n = r("86f0"),
                i = r("hTvQ"),
                o = r("bQ69"),
                a = null,
                s = null,
                u = null,
                c = function(e) {
                    return null === a ? (a = new n.E1({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: o.yZ + (e ? "/swift" : "")
                    }), n.E1.setStreamBatch(i.unstable_batchedUpdates), a) : a
                },
                l = function(e) {
                    return null === s ? (s = new n.h3({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: o.Hk + (e ? "/swift" : "")
                    }), n.h3.setStreamBatch(i.unstable_batchedUpdates), s) : s
                },
                d = function() {
                    return null === u ? (u = new n.qF({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: o.Cs
                    }), n.qF.setStreamBatch(i.unstable_batchedUpdates), u) : u
                }
        },
        Rduq: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => I
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("KrVi"),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r("2IQ4"),
                c = r("GIr8"),
                l = r("Vhyo"),
                d = r("61q2"),
                p = r("gLBh"),
                f = r("b2AH"),
                m = r("GJ+9"),
                v = r("Qhol"),
                g = function(e) {
                    var t = e.text,
                        r = void 0 === t ? "" : t,
                        n = e.link,
                        i = void 0 === n ? "" : n,
                        o = (0, v.ok2)().getI18n;
                    return (0, a.jsx)(m.A, {
                        target: "_blank",
                        href: i,
                        sx: {
                            fontSize: "14px",
                            color: "bg5",
                            fontWeight: "500",
                            textDecoration: "underline",
                            marginRight: "16px"
                        },
                        children: o(r, {
                            defaultValue: r
                        })
                    })
                },
                y = function(e) {
                    var t = e.faqArray,
                        r = void 0 === t ? [] : t;
                    return (0, a.jsx)(c.A, {
                        sx: {
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "center"
                        },
                        children: r.map((function(e, t) {
                            return (0, a.jsx)(g, {
                                text: null === e || void 0 === e ? void 0 : e.text,
                                link: null === e || void 0 === e ? void 0 : e.link
                            }, t)
                        }))
                    })
                },
                T = {
                    "&,&::before": {
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        zIndex: -1
                    },
                    "&::before": {
                        content: '""',
                        display: "block",
                        backgroundColor: "primary"
                    }
                },
                _ = {
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
                A = {
                    borderRadius: "4px",
                    bg: "primary",
                    p: "24px",
                    color: "#1E2329",
                    width: "440px"
                },
                b = {
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#1E2329",
                    fontWeight: "500"
                },
                S = {
                    p: 0,
                    top: "28px",
                    right: "27px"
                },
                h = {
                    borderBottom: "none",
                    py: "16px",
                    lineHeight: "24px",
                    fontSize: "16px"
                },
                x = {
                    color: "#1E2329",
                    ".steps": {
                        justifyContent: "space-between",
                        alignItems: "center",
                        ".label": {
                            alignItems: "baseline",
                            ".step": {
                                fontSize: "16px",
                                lineHeight: "20px",
                                fontWeight: "500"
                            },
                            ".len": {
                                fontSize: "12px",
                                lineHeight: "16px"
                            }
                        },
                        ".btn": {
                            cursor: "pointer",
                            lineHeight: "22px",
                            px: "24px",
                            color: "bg5",
                            fontSize: "14px",
                            py: "5px",
                            bg: "#fff",
                            borderRadius: "16px",
                            fontWeight: "500"
                        }
                    },
                    ".skip": {
                        mt: "16px",
                        bg: "#FCD535",
                        lineHeight: "20px",
                        fontSize: "14px",
                        borderRadius: "4px",
                        py: "6px",
                        textAlign: "center",
                        ".underline": {
                            fontWeight: "500",
                            textDecoration: "underline",
                            cursor: "pointer"
                        }
                    }
                },
                E = (0, s.forwardRef)((function(e, t) {
                    var r = e.step,
                        m = e.stepsLength,
                        v = e.title,
                        g = e.content,
                        E = (e.onPre, e.onNext),
                        I = e.onClose,
                        R = e.id,
                        O = (e.isMargin, e.onSkip),
                        C = e.showSkip,
                        N = e.faqSlot,
                        L = (0, o._)(e, ["step", "stepsLength", "title", "content", "onPre", "onNext", "onClose", "id", "isMargin", "onSkip", "showSkip", "faqSlot"]),
                        P = (0, f.ok)("widget-common", "widget-common").getI18n,
                        k = (0, f.ok)().getI18n,
                        M = (0, s.useCallback)((function() {
                            "function" === typeof O && O(), "function" === typeof I && I()
                        }), [O, I]);
                    return (0, s.useEffect)((function() {
                        t && t.current && t.current.scrollIntoView({
                            behavior: "smooth"
                        })
                    }), [r]), (0, a.jsxs)(u.A, (0, i._)((0, n._)({
                        ref: t
                    }, L), {
                        id: r > -1 ? "coachmark" : "coachmarksingle",
                        __css: (0, n._)({
                            position: "relative",
                            px: "sm",
                            pt: "md",
                            pb: "sm",
                            width: "400px",
                            borderRadius: "2px",
                            bg: "primary",
                            color: "#212833",
                            zIndex: "1401"
                        }, _, A),
                        children: [(0, a.jsx)(u.A, {
                            __css: (0, n._)({
                                position: "absolute",
                                top: 0,
                                right: 0,
                                p: "xs",
                                lineHeight: 1,
                                cursor: "pointer"
                            }, S),
                            onClick: I,
                            children: (0, a.jsx)(d.A, {
                                size: 16,
                                "data-testid": "button-close-dialog"
                            })
                        }), v && (0, a.jsx)(u.A, {
                            __css: (0, n._)({
                                fontSize: "md",
                                fontWeight: "medium"
                            }, b),
                            children: v
                        }), (0, a.jsx)(u.A, {
                            __css: (0, n._)({
                                pt: "xs",
                                pb: "sm",
                                fontSize: "sm",
                                lineHeight: "18px"
                            }, r > -1 && {
                                borderBottom: "1px solid #DBAB0F"
                            }, h),
                            children: g
                        }), m > 0 && (0, a.jsxs)(u.A, {
                            className: "margin-guide-footer",
                            __css: x,
                            children: [(0, a.jsxs)(c.A, {
                                className: "steps",
                                children: [(0, a.jsxs)(c.A, {
                                    className: "label",
                                    children: [(0, a.jsxs)(l.A, {
                                        className: "step",
                                        children: [k("trd-mg-step"), " ", r + 1]
                                    }), (0, a.jsxs)(l.A, {
                                        className: "len",
                                        children: ["/", m]
                                    })]
                                }), (0, a.jsx)(y, {
                                    faqArray: N
                                }), r + 1 < m ? (0, a.jsx)(u.A, {
                                    id: "margin-guide-".concat(R, "-").concat(r, "-next"),
                                    className: "btn",
                                    onClick: E,
                                    children: k("trd-mg-next")
                                }) : (0, a.jsx)(u.A, {
                                    id: "margin-guide-".concat(R, "-").concat(r, "-ok"),
                                    className: "btn",
                                    onClick: I,
                                    children: P("done")
                                })]
                            }), C && (0, a.jsx)(l.A, {
                                className: "skip",
                                children: (0, a.jsx)(p.x, {
                                    i18nKey: "trd-mg-skip",
                                    components: {
                                        skip: (0, a.jsx)("span", {
                                            id: "margin-guide-".concat(R, "-").concat(r, "-skip"),
                                            onClick: M,
                                            className: "underline"
                                        })
                                    }
                                })
                            })]
                        }), (0, a.jsx)(u.A, {
                            "data-popper-arrow": !0,
                            __css: T
                        })]
                    }))
                }));
            E.displayName = "Coachmark";
            const I = E
        },
        "36RL": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD"),
                i = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
                };
            const o = r.n(n)().createContext({
                putCoachMarkStep: i,
                putCoachMark: i,
                showCoachMark: i,
                showCoachMarkSingle: i,
                closeCoachMark: i
            })
        },
        "Ip+n": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => m
            });
            var n = r("iKvg"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r.n(s),
                c = r("C9w4"),
                l = r("UWKL"),
                d = r("36RL"),
                p = r("Rduq"),
                f = u().useLayoutEffect;
            const m = function(e) {
                var t, r = e.onClose,
                    u = e.children,
                    m = (0, s.useState)({}),
                    v = m[0],
                    g = m[1],
                    y = (0, s.useState)({
                        id: "",
                        step: -1,
                        direction: "forward"
                    }),
                    T = y[0],
                    _ = y[1],
                    A = (0, s.useRef)(null),
                    b = (0, l.Q)(),
                    S = b.isMobile,
                    h = b.isIPad,
                    x = (0, s.useMemo)((function() {
                        return {
                            putCoachMarkStep: function(e, t, r) {
                                "" === e || t < 0 ? console.warn("The id can not be empty or step can not < 0!") : (Array.isArray(v[e]) || (v[e] = []), v[e][t] = r, g((0, o._)((0, i._)({}, v), {
                                    id: v[e].slice()
                                })))
                            },
                            putCoachMark: function(e, t) {
                                "" !== e ? (v[e] = t, g((0, o._)((0, i._)({}, v), {
                                    id: v[e]
                                }))) : console.warn("The id can not be empty!")
                            },
                            showCoachMark: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "forward";
                                return void 0 !== v[e] && void 0 !== v[e][t] && (_({
                                    id: e,
                                    step: t,
                                    direction: r
                                }), !0)
                            },
                            showCoachMarkSingle: function(e) {
                                return void 0 !== v[e] && (_((function(t) {
                                    return (0, o._)((0, i._)({}, t), {
                                        id: e
                                    })
                                })), !0)
                            },
                            closeCoachMark: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                _({
                                    id: "",
                                    step: -1,
                                    direction: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "forward"
                                }), r && r(e, t)
                            }
                        }
                    }), []),
                    E = T.id,
                    I = T.step,
                    R = T.direction,
                    O = null,
                    C = null === (t = v[E]) || void 0 === t ? void 0 : t[I];
                if (void 0 !== C) {
                    var N = v[E].filter((function(e) {
                            return e
                        })).length,
                        L = C.title,
                        P = C.content,
                        k = C.onNext,
                        M = C.onClose,
                        D = C.isMargin,
                        w = C.onSkip,
                        U = C.showSkip,
                        B = void 0 === U || U,
                        q = C.faqSlot;
                    O = (0, a.jsx)(p.A, {
                        id: E,
                        ref: A,
                        stepsLength: N,
                        step: I,
                        title: L,
                        content: P,
                        faqSlot: q,
                        onPre: function() {
                            return _({
                                id: E,
                                step: I - 1,
                                direction: "back"
                            })
                        },
                        onNext: function() {
                            g((0, o._)((0, i._)({}, v), (0, n._)({}, E, v[E].filter((function(e) {
                                return e
                            }))))), _({
                                id: E,
                                step: I + 1,
                                direction: "forward"
                            }), k && k()
                        },
                        onClose: function() {
                            x.closeCoachMark(E, I), M && M()
                        },
                        isMargin: D,
                        onSkip: w,
                        showSkip: B
                    })
                }
                var j = v[E];
                if (void 0 !== j && void 0 === C) {
                    var F = j.title,
                        Q = j.content,
                        G = j.onClose,
                        Y = j.isMargin,
                        K = j.onSkip,
                        V = j.faqSlot;
                    O = (0, a.jsx)(p.A, {
                        id: E,
                        ref: A,
                        step: -1,
                        stepsLength: 0,
                        title: F,
                        content: Q,
                        faqSlot: V,
                        onClose: function() {
                            x.closeCoachMark(E), G && G()
                        },
                        isMargin: Y,
                        onSkip: K
                    })
                }
                return f((function() {
                    var e, t = (null === C || void 0 === C ? void 0 : C.position) || "left-start",
                        r = null === C || void 0 === C || null === (e = C.target) || void 0 === e ? void 0 : e.current,
                        n = null;
                    if (S || h) {
                        var i = document.getElementById("coachmark");
                        i && i.remove()
                    } else {
                        if (!r) {
                            var o;
                            if ("forward" === R) return I + 1 < (null === (o = v[E]) || void 0 === o ? void 0 : o.length) ? _({
                                id: E,
                                step: I + 1,
                                direction: R
                            }) : void 0;
                            if ("back" === R) return I - 1 >= 0 ? _({
                                id: E,
                                step: I - 1,
                                direction: R
                            }) : void 0
                        }
                        if (!r) return function() {
                            if (n) {
                                n.destroy();
                                var e = document.getElementById("coachmark");
                                e && e.remove()
                            }
                        };
                        n = (0, c.n4)(r, A.current, {
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
                            }, {
                                name: "flip",
                                options: {
                                    rootBoundary: "document"
                                }
                            }]
                        })
                    }
                }), [T, C, S, h]), f((function() {
                    var e, t = (null === j || void 0 === j ? void 0 : j.position) || "left-start",
                        r = null === j || void 0 === j || null === (e = j.target) || void 0 === e ? void 0 : e.current;
                    if (r) {
                        var n = (0, c.n4)(r, A.current, {
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
                            n && n.destroy()
                        }
                    }
                }), [T, j]), (0, a.jsxs)(d.A.Provider, {
                    value: x,
                    children: [O, u]
                })
            }
        },
        YRJq: (e, t, r) => {
            "use strict";
            r.d(t, {
                h1: () => o
            });
            r("Rduq");
            var n = r("DTvD"),
                i = r("36RL");

            function o() {
                return (0, n.useContext)(i.A)
            }
            r("Ip+n")
        },
        "fAV+": (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => u,
                Y: () => s
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("Qhol"),
                a = r("bQ69"),
                s = function(e) {
                    var t = e.isLoggedIn,
                        r = e.asset,
                        s = e.balance,
                        u = (0, n._)((0, o.Grl)(), 1)[0],
                        c = (0, n._)((0, o.sL)(), 2),
                        l = (0, n._)(c[1], 2),
                        d = l[0],
                        p = l[1];
                    return (0, i.useMemo)((function() {
                        return "BUSD" === r && ![d, p].includes("FDUSD") && (t && u === a.Gr.SPOT && !!s && !!+s)
                    }), [u, d, p, r, s])
                },
                u = function(e, t) {
                    var r = "BUSD" === t;
                    return {
                        busdQuotePair: r,
                        hasFdusdPair: (0, o.Bjx)()[r ? "".concat(e, "FDUSD") : "FDUSD".concat(t)]
                    }
                }
        },
        I25Y: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("Olbk"),
                s = r("gLBh"),
                u = r("GJ+9"),
                c = r("Qhol"),
                l = r("BBQg"),
                d = function(e) {
                    var t = e.base,
                        r = e.quote,
                        i = (0, c.ok2)(),
                        o = (i.getI18n, i.t);
                    return (0, l.j)({
                        baseAsset: t,
                        quoteAsset: r
                    }).needConvert ? (0, n.jsxs)(a.Ay, {
                        className: "flex flex-row items-start mt-[4px] text-Error",
                        children: [(0, n.jsx)(a.Ay, {
                            className: "mr-[4px] my-[4px] leading-[18px] text-[12px] text-Error",
                            children: "*"
                        }), (0, n.jsx)(a.Ay, {
                            className: "flex-1 leading-[18px] text-[12px] text-Error my-[4px] [&_strong]:!font-normal",
                            children: (0, n.jsx)(s.x, {
                                t: o,
                                i18nKey: "trd-usdc-risk-desc",
                                defaults: "Due to local regulatory requirements, the trading service of this pair will not be available to you after 31st March 2025. Convert to and trade USDC pair instead or click here for <jump1>more details</jump1>.",
                                components: {
                                    jump1: (0, n.jsx)(u.A, {
                                        className: "!text-Error",
                                        target: "_blank",
                                        href: "/support/announcement/bcaa1f68d6a6450099056ff694ad6c46"
                                    })
                                }
                            })
                        })]
                    }) : (0, n.jsx)(n.Fragment, {})
                };
            const p = o().memo(d)
        },
        BBQg: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => s
            });
            var n = r("mguP"),
                i = r("Qhol"),
                o = r("0GV5"),
                a = ["USDT", "FDUSD", "TUSD", "USDP", "DAI", "AEUR", "IDRT", "PAXG", "XUSD"],
                s = function(e) {
                    e.currentSymbol;
                    var t, r, s = e.baseAsset,
                        u = e.quoteAsset,
                        c = (0, n._)((0, i.sL)(), 2),
                        l = (c[0], (0, n._)(c[1], 2)),
                        d = l[0],
                        p = l[1],
                        f = (0, i._h0)();
                    return t = s || d, r = u || p, (0, o.Bm)("Web_Mica_EU") && f && (a.includes(t) || a.includes(r)) ? {
                        needConvert: !0,
                        baseConvert: a.includes(t),
                        quoteConvert: a.includes(r)
                    } : {
                        needConvert: !1
                    }
                }
        },
        sXI5: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => R,
                lG: () => I
            });
            var n, i = r("S+0I"),
                o = r("Bkzn"),
                a = r("hrAD"),
                s = r("qoEP"),
                u = r("KrVi"),
                c = r("jbFV"),
                l = r.n(c),
                d = r("mXdx"),
                p = r("/LKW"),
                f = r("bTgu"),
                m = r("zX7I"),
                v = r("2IQ4"),
                g = r("GIr8"),
                y = r("OGoN"),
                T = r("ZL13"),
                _ = r("ecWg"),
                A = r("Brq1"),
                b = r("DTvD"),
                S = r.n(b),
                h = r("hTvQ"),
                x = r.n(h),
                E = 0;
            ! function(e) {
                e.dialog = "dialog", e.styledDialog = "styledDialog"
            }(n || (n = {}));
            var I = function e() {
                var t = this;
                (0, o._)(this, e), this.id = "", this.show = function(e) {
                    var r = e.type,
                        i = void 0 === r ? n.styledDialog : r,
                        o = (0, u._)(e, ["type"]),
                        a = document.getElementById(t.id);
                    if (a || ((a = document.createElement("div")).id = t.id, document.body.appendChild(a)), x().unmountComponentAtNode(a), i === n.dialog) {
                        if (!o.dialogProps) throw new Error("must pass dialogProps");
                        t.showDialog(o, a)
                    } else t.showStyledDialog(o, a)
                }, this.showDialog = function(e, r) {
                    var n = e.dialogProps;
                    requestAnimationFrame((function() {
                        x().render((0, d.jsx)(y.A, {
                            theme: e.isLight ? p._k : p.a5,
                            children: (0, d.jsxs)(f.A, {
                                sx: (0, a._)({
                                    width: ["298px", "360px", "360px"],
                                    p: "md"
                                }, e.sx),
                                visible: !0,
                                onMaskClick: t.close,
                                children: [null === n || void 0 === n ? void 0 : n.body, (0, d.jsx)(m.A, {
                                    mt: ["16px", "16px", "24px"],
                                    sz: "l",
                                    width: "100%",
                                    onClick: t.close,
                                    children: null === n || void 0 === n ? void 0 : n.okText
                                }), null === n || void 0 === n ? void 0 : n.rest]
                            })
                        }), r)
                    }))
                }, this.showStyledDialog = function(e, r) {
                    requestAnimationFrame((function() {
                        x().render((0, d.jsx)(y.A, {
                            theme: e.isLight ? p._k : p.a5,
                            children: (0, d.jsx)(T.A, {
                                queueSize: 2,
                                closable: !0,
                                autoHideDuration: 4e3,
                                anchorOrigin: {
                                    vertical: e.isMobile ? "top" : "bottom",
                                    horizontal: "right"
                                },
                                children: (0, d.jsx)(_.A, (0, s._)((0, a._)({
                                    open: !0,
                                    onMaskClick: (null === e || void 0 === e ? void 0 : e.notMaskClick) ? void 0 : t.close,
                                    onCloseIconClick: t.close,
                                    closeSx: {
                                        right: (null === e || void 0 === e ? void 0 : e.isRtl) ? "unset" : "0",
                                        left: (null === e || void 0 === e ? void 0 : e.isRtl) ? "18px" : "unset"
                                    },
                                    showTitleBottomLine: !1
                                }, e), {
                                    contentSx: (0, a._)({
                                        p: "18px 24px"
                                    }, null === e || void 0 === e ? void 0 : e.contentSx),
                                    sx: (0, a._)({
                                        bg: "modalBg",
                                        boxShadow: "elevation3",
                                        borderRadius: "6px"
                                    }, null === e || void 0 === e ? void 0 : e.sx)
                                }))
                            })
                        }), r)
                    }))
                }, this.close = function() {
                    var e = document.getElementById(t.id);
                    e && x().unmountComponentAtNode(e)
                };
                var r = this;
                this.confirm = function() {
                    var e = (0, i._)(l().mark((function e(t) {
                        var n, i, o, c, p, f, y, T;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.isLight, i = t.sx, o = t.content, c = t.cancelText, p = t.okText, f = t.hasFooter, y = void 0 === f || f, T = (0, u._)(t, ["isLight", "sx", "content", "cancelText", "okText", "hasFooter"]), e.abrupt("return", new Promise((function(e, t) {
                                        r.show((0, s._)((0, a._)({}, T), {
                                            closeSx: {
                                                zIndex: 1
                                            },
                                            isLight: n,
                                            sx: (0, a._)({
                                                minWidth: "368px"
                                            }, i),
                                            children: (0, d.jsxs)(S().Fragment, {
                                                children: [(0, d.jsx)(v.A, {
                                                    sx: {
                                                        mt: "xs",
                                                        textAlign: "center"
                                                    },
                                                    children: o
                                                }), y && (0, d.jsx)(A.R, {
                                                    sx: {
                                                        backgroundColor: "inherit"
                                                    },
                                                    children: (0, d.jsxs)(g.A, {
                                                        children: [c && (0, d.jsx)(m.A, {
                                                            flexGrow: 1,
                                                            variant: "outline",
                                                            onClick: t,
                                                            sz: "l",
                                                            sx: {
                                                                boxShadow: "none",
                                                                border: "1px solid",
                                                                borderColor: "dropdown.hoverBg",
                                                                color: "t.primary",
                                                                mr: 3,
                                                                width: .5,
                                                                "&:hover": {
                                                                    borderColor: "t.yellow300",
                                                                    color: "t.yellow300",
                                                                    bg: "transparent !important"
                                                                }
                                                            },
                                                            children: c
                                                        }), p && (0, d.jsx)(m.A, {
                                                            sx: {
                                                                width: .5
                                                            },
                                                            sz: "l",
                                                            flexGrow: 1,
                                                            onClick: e,
                                                            children: p
                                                        })]
                                                    })
                                                })]
                                            })
                                        }))
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), this.id = "binance-dialog".concat(E), E++
            };
            const R = new I
        },
        OCZr: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("2IQ4"),
                s = r("GIr8"),
                u = r("zX7I"),
                c = r("B9MC"),
                l = function(e) {
                    var t = e.onCancel,
                        r = e.message,
                        i = e.cancelText,
                        o = e.okText,
                        l = e.onOk;
                    return (0, n.jsxs)(a.A, {
                        width: ["298px", "360px"],
                        children: [(0, n.jsx)(s.A, {
                            justifyContent: "center",
                            mb: "8px",
                            children: (0, n.jsx)(c.A, {
                                size: 96
                            })
                        }), (0, n.jsx)(a.A, {
                            sx: {
                                mb: "md",
                                mt: "12px",
                                fontSize: "14px",
                                textAlign: "center",
                                color: "t.primary"
                            },
                            children: r
                        }), (0, n.jsxs)(s.A, {
                            children: [(0, n.jsx)(u.A, {
                                flexGrow: 1,
                                onClick: t,
                                sz: "l",
                                colorStyle: "secondary",
                                sx: {
                                    mr: "8px",
                                    width: .5,
                                    backgroundColor: "line"
                                },
                                children: i
                            }), (0, n.jsx)(u.A, {
                                colorStyle: "flatprimary",
                                sx: {
                                    width: .5
                                },
                                sz: "l",
                                flexGrow: 1,
                                onClick: l,
                                children: o
                            })]
                        })]
                    })
                };
            const d = o().memo(l)
        },
        bLkt: (e, t, r) => {
            "use strict";
            r.d(t, {
                XY: () => u,
                Yh: () => o,
                hJ: () => a,
                ok: () => i,
                pW: () => s
            });
            var n = r("Qhol"),
                i = function(e) {
                    return (0, n.ok2)("trd-layout", e)
                },
                o = 593,
                a = "screen and (min-width: 1024px)",
                s = "screen and (min-width: 768px) and (max-width: 1023px)",
                u = "screen and (max-width: 767px)"
        },
        dEVk: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("iKvg"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r.n(s),
                c = r("MD8j"),
                l = r("8l2I"),
                d = r("46Ff"),
                p = r("zHUU"),
                f = r("JyEq"),
                m = r("bQ69"),
                v = r("Qhol"),
                g = r("qgOy"),
                y = /^\d+\.?\d*|%$/,
                T = /^0+(?=\d)/,
                _ = function(e) {
                    var t = e.children,
                        r = e.htmlFor;
                    return (0, a.jsx)("label", {
                        className: "trd-text-ellipsis",
                        style: {
                            fontWeight: 500
                        },
                        htmlFor: r,
                        children: t
                    })
                },
                A = function(e) {
                    var t = e.name,
                        r = e.value,
                        u = e.before,
                        A = e.label,
                        b = e.after,
                        S = void 0 === b ? "" : b,
                        h = e.invalid,
                        x = e.step,
                        E = e.precision,
                        I = e.placeholder,
                        R = e.maxLength,
                        O = e.symbol,
                        C = void 0 === O ? "normal" : O,
                        N = e.autoZero,
                        L = void 0 !== N && N,
                        P = e.widgetKey,
                        k = void 0 === P ? "" : P,
                        M = e.boxStyle,
                        D = e.className,
                        w = e.onAmountChange,
                        U = e.onAmountBlur,
                        B = e.handleChange,
                        q = e.disabled,
                        j = e.inputType,
                        F = void 0 === j ? "text" : j,
                        Q = e.errorText,
                        G = e.helperText,
                        Y = e.onStep,
                        K = e.min,
                        V = e.max,
                        W = e.isPrefixFixedType,
                        z = e.size,
                        H = void 0 === z ? "middle" : z,
                        $ = (0, c.wA)(),
                        Z = (0, s.useRef)(),
                        J = (0, s.useRef)(),
                        X = (0, s.useContext)(f.cb).layout,
                        ee = (0, v.U8Q)(k),
                        te = "FormRow-".concat(C, "-").concat(t).concat(k ? "-".concat(k) : ""),
                        re = (0, p.uU)(),
                        ne = (0, s.useCallback)((function(e) {
                            (!0 === L && "string" === typeof e && 0 === e.indexOf(".") && (e = "0".concat(e)), !y.test(e) && "" !== e || isNaN(e)) || (e = e.replace(T, ""), (0, g.w1)(e) > E && (e = e.replace(new RegExp("^(\\d*\\.\\d{".concat(E, "})\\d*")), "$1")), R && e.split(".")[0].length > R && (e = r), 0 === E && (e = e.replace(".", "")), w && w(e), B && B("", t, e))
                        }), [$.orderForm, k, ee, B, R, E, r, t]),
                        ie = (0, s.useCallback)((function(e) {
                            if (69 === e.keyCode || 189 === e.keyCode || 187 === e.keyCode) return e.preventDefault(), !1
                        }), []),
                        oe = (0, s.useCallback)((function(e) {
                            $.orderForm.updateState((0, n._)({}, "inputFocus".concat(k), (0, o._)((0, i._)({}, ee), {
                                priceFocus: !1
                            })));
                            var r = e.target.value;
                            y.test(r) || (e.target.value = ""), U && U(t)
                        }), [ee, $.orderForm, k]),
                        ae = (0, s.useCallback)((function(e) {
                            Y && Y(e, t), w && w(e)
                        }), [J.current]);
                    (0, s.useEffect)((function() {
                        if (r && (null === ee || void 0 === ee ? void 0 : ee.priceFocus)) {
                            var e = document.getElementById("FormRow-".concat(ee.side, "-price").concat(k ? "-".concat(k) : ""));
                            e && e.focus()
                        }
                    }), [r, C, t, null === ee || void 0 === ee ? void 0 : ee.priceFocus, null === ee || void 0 === ee ? void 0 : ee.side, ee, k]), (0, s.useEffect)((function() {
                        if (r && (null === ee || void 0 === ee ? void 0 : ee.flashBorder) && t === ee.type) {
                            var e = document.getElementById("FormRow-".concat(ee.side, "-").concat(ee.type).concat(k ? "-".concat(k) : ""));
                            if (e && (null === e || void 0 === e ? void 0 : e.parentElement)) {
                                var a = e.parentElement;
                                null === a || void 0 === a || a.classList.add("focus"), Z.current && clearInterval(Z.current), Z.current = setInterval((function() {
                                    null === a || void 0 === a || a.classList.remove("focus"), Z.current && clearInterval(Z.current)
                                }), 2e3), $.orderForm.updateState((0, n._)({}, "inputFocus".concat(k), (0, o._)((0, i._)({}, ee), {
                                    flashBorder: !1
                                })))
                            }
                        }
                    }), [null === ee || void 0 === ee ? void 0 : ee.flashBorder, k, null === ee || void 0 === ee ? void 0 : ee.side, null === ee || void 0 === ee ? void 0 : ee.type, t]);
                    var se = (0, s.useMemo)((function() {
                        var e = X === m.ug ? u : u || A;
                        return e ? (0, a.jsx)(_, {
                            htmlFor: te,
                            children: e
                        }) : ""
                    }), [u, te, X, A]);
                    return (0, a.jsx)(l.A, {
                        className: "orderform-formrow ".concat(D, " inputtype-").concat(F),
                        tipsVariant: "inline",
                        style: M,
                        tips: G,
                        errMsg: Q,
                        tooltipsProps: {
                            placement: X === m.ug ? "top-start" : "top"
                        },
                        label: X !== m.ug ? "" : A,
                        children: (0, a.jsx)(d.A, {
                            ref: J,
                            lang: "en",
                            variant: "line",
                            locale: re,
                            size: H,
                            enableClear: !1,
                            isPrefixFixedType: void 0 === W ? X !== m.ug : W,
                            id: te,
                            name: t,
                            prefix: se,
                            suffix: S,
                            status: h ? "error" : "success",
                            maxlength: R,
                            value: r,
                            onStep: ae,
                            onChange: ne,
                            onKeyDown: ie,
                            onBlur: oe,
                            placeholder: I,
                            disabled: q,
                            type: "number",
                            controls: "number" === F,
                            step: "number" === F && x ? +x : void 0,
                            min: K,
                            max: V
                        })
                    })
                };
            const b = u().memo(A)
        },
        g5A9: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s,
                V: () => a
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = function(e) {
                    var t = e.deg,
                        r = e.size,
                        i = void 0 === r ? 16 : r;
                    return (0, n.jsxs)("svg", {
                        width: i,
                        height: i,
                        viewBox: "0 0 12 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            position: "relative"
                        },
                        children: [(0, n.jsx)("path", {
                            d: "M8.42383 8.99622C9.04428 8.37577 9.42803 7.51863 9.42803 6.57185C9.42803 5.62507 9.04428 4.76793 8.42383 4.14748L9.63601 2.9353C10.5667 3.86598 11.1423 5.15169 11.1423 6.57185C11.1423 7.99201 10.5667 9.27772 9.63601 10.2084L8.42383 8.99622Z",
                            fill: "var(--color-TextSell)"
                        }), (0, n.jsx)("path", {
                            d: "M5.99983 3.143C5.05305 3.143 4.19591 3.52675 3.57546 4.1472L2.36328 2.93502C3.29396 2.00435 4.57967 1.42871 5.99983 1.42871C7.41999 1.42871 8.7057 2.00435 9.63638 2.93502L8.4242 4.1472C7.80375 3.52675 6.9466 3.143 5.99983 3.143Z",
                            fill: "var(--color-PrimaryYellow)"
                        }), (0, n.jsx)("path", {
                            d: "M2.57171 6.57185C2.57171 7.51863 2.95546 8.37577 3.57591 8.99622L2.36373 10.2084C1.43306 9.27772 0.857422 7.99201 0.857422 6.57185C0.857422 5.15169 1.43306 3.86598 2.36373 2.9353L3.57591 4.14748C2.95546 4.76793 2.57171 5.62507 2.57171 6.57185Z",
                            fill: "var(--color-TextBuy)"
                        }), (0, n.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M8.00028 6.57129C8.00028 7.67586 7.10485 8.57129 6.00028 8.57129C5.14737 8.57129 4.41915 8.0374 4.1316 7.28558H0.906631C0.874191 7.05212 0.857422 6.81365 0.857422 6.57125C0.857422 6.32889 0.874189 6.09044 0.906623 5.857H4.1316C4.41915 5.10518 5.14737 4.57129 6.00028 4.57129C7.10485 4.57129 8.00028 5.46672 8.00028 6.57129ZM6.57171 6.57129C6.57171 6.88688 6.31587 7.14272 6.00028 7.14272C5.68469 7.14272 5.42885 6.88688 5.42885 6.57129C5.42885 6.2557 5.68469 5.99986 6.00028 5.99986C6.31587 5.99986 6.57171 6.2557 6.57171 6.57129Z",
                            fill: "var(--color-PrimaryText)",
                            style: {
                                transform: "rotate(".concat(t, "deg)"),
                                position: "absolute",
                                left: "0",
                                top: "0",
                                transformOrigin: "center",
                                transition: "transform 1s ease"
                            }
                        })]
                    })
                },
                a = function() {
                    return (0, n.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsxs)("g", {
                            id: "Risk Badge ICON",
                            children: [(0, n.jsx)("path", {
                                id: "Subtract",
                                d: "M16.8467 17.9929C18.0876 16.752 18.8551 15.0377 18.8551 13.1442C18.8551 11.2506 18.0876 9.53635 16.8467 8.29545L19.271 5.87109C21.1324 7.73244 22.2837 10.3039 22.2837 13.1442C22.2837 15.9845 21.1324 18.5559 19.271 20.4173L16.8467 17.9929Z",
                                fill: "var(--color-DisabledText)"
                            }), (0, n.jsx)("path", {
                                id: "Subtract_2",
                                d: "M12.0006 6.28618C10.1071 6.28618 8.3928 7.05369 7.1519 8.29458L4.72754 5.87022C6.58889 4.00888 9.16031 2.8576 12.0006 2.8576C14.841 2.8576 17.4124 4.00887 19.2737 5.87022L16.8494 8.29458C15.6085 7.05369 13.8942 6.28618 12.0006 6.28618Z",
                                fill: "var(--color-DisabledText)"
                            }), (0, n.jsx)("path", {
                                id: "Subtract_3",
                                d: "M5.14439 13.1442C5.14439 15.0377 5.9119 16.752 7.1528 17.9929L4.72844 20.4173C2.86709 18.5559 1.71582 15.9845 1.71582 13.1442C1.71582 10.3039 2.86709 7.73244 4.72844 5.87109L7.1528 8.29545C5.9119 9.53635 5.14439 11.2506 5.14439 13.1442Z",
                                fill: "var(--color-DisabledText)"
                            }), (0, n.jsx)("path", {
                                id: "Union",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M16.0015 13.1424C16.0015 15.3515 14.2107 17.1424 12.0015 17.1424C10.2957 17.1424 8.83928 16.0746 8.26418 14.571H1.81424C1.74936 14.1041 1.71582 13.6271 1.71582 13.1423C1.71582 12.6576 1.74935 12.1807 1.81422 11.7138H8.26418C8.83928 10.2102 10.2957 9.1424 12.0015 9.1424C14.2107 9.1424 16.0015 10.9333 16.0015 13.1424ZM13.1444 13.1424C13.1444 13.7736 12.6327 14.2853 12.0015 14.2853C11.3704 14.2853 10.8587 13.7736 10.8587 13.1424C10.8587 12.5112 11.3704 11.9995 12.0015 11.9995C12.6327 11.9995 13.1444 12.5112 13.1444 13.1424Z",
                                fill: "var(--color-PrimaryText)"
                            })]
                        })
                    })
                };
            const s = r.n(i)().memo(o)
        },
        U33U: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => j
            });
            var n = r("iKvg"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("mguP"),
                s = r("mXdx"),
                u = r("DTvD"),
                c = r.n(u),
                l = r("kcvK"),
                d = r("zxgP"),
                p = r("MKk+"),
                f = r("NEBA"),
                m = r("Ov3/"),
                v = r("Qhol"),
                g = r("J+BU"),
                y = r("hAzz"),
                T = r("WT+B"),
                _ = r("JyEq"),
                A = r("dEVk"),
                b = r("bQ69"),
                S = function(e) {
                    return e === 1 / 0 || e === -1 / 0 || "Infinity" === e || "-Infinity" === e
                },
                h = r("C7Nc"),
                x = r("CAdv"),
                E = r("tM9B"),
                I = r("MwhE"),
                R = function(e) {
                    var t = (0, v.ok2)().getI18n,
                        r = (0, u.useState)(""),
                        a = r[0],
                        c = r[1],
                        l = (0, u.useState)(""),
                        d = l[0],
                        p = l[1],
                        f = (0, u.useContext)(_.cb).layout,
                        m = e.name,
                        R = e.symbol,
                        O = e.price,
                        C = e.value,
                        N = e.calcLarge,
                        L = e.dispatch,
                        P = e.precision,
                        k = e.orderType,
                        M = e.autoFillName,
                        D = e.suffix,
                        w = void 0 === D ? "%" : D,
                        U = e.quantity,
                        B = e.total,
                        q = e.side,
                        j = e.istp,
                        F = e.tpMode,
                        Q = e.slMode,
                        G = e.errorText,
                        Y = function(e) {
                            var t, r = e.side,
                                n = (0, u.useContext)(_.cb),
                                i = n.base,
                                o = n.quote,
                                a = n.tradeType,
                                s = n.userAssets,
                                c = "".concat(i).concat(o),
                                l = null === (t = s[r === g.Vl.BUY ? o : i]) || void 0 === t ? void 0 : t.free,
                                d = (0, I.y)(c).lastPrice,
                                p = (0, v.dUb)(),
                                f = (0, h.tD)({
                                    symbol: c,
                                    base: i,
                                    quote: o,
                                    tradeType: a,
                                    side: r
                                }).disableSpotBalance,
                                m = (0, v.stA)().isAuto,
                                y = (0, v.L1A)().isAuto,
                                T = (0, u.useMemo)((function() {
                                    var e = r === g.Vl.BUY ? o : i;
                                    return f ? 0 : (p[e] || {}).free
                                }), [r, p, o, i, f]),
                                A = (0, E.tY)(l, T || 0).toFixed(x.uW),
                                b = m || y ? A : l;
                            return {
                                realFree: r === g.Vl.BUY ? b : d * b
                            }
                        }({
                            side: q
                        }).realFree,
                        K = j ? F : Q,
                        V = function(e) {
                            return "pnl" === K ? function(e) {
                                var t = e.side,
                                    r = e.isSl,
                                    n = e.amount,
                                    i = e.total,
                                    o = e.price,
                                    a = e.precision,
                                    s = void 0 === a ? 2 : a;
                                if (!o || "0" == o) return "";
                                if (!n || "0" == n) return "";
                                var u = "";
                                return u = "BUY" === t ? r ? (0, y.RI)(Number(i) - Number(o) * Number(n), s, !1) + "" : (0, y.RI)(Number(o) * Number(n) - Number(i), s, !1) + "" : r ? (0, y.RI)(Number(o) * Number(n) - Number(i), s, !1) + "" : (0, y.RI)(Number(i) - Number(o) * Number(n), s, !1) + "", Number(u) < 0 || S(u) ? "" : u
                            }({
                                side: q,
                                isSl: !j,
                                amount: U,
                                total: B,
                                price: e,
                                precision: P
                            }) : "roi" === K ? function(e) {
                                var t = e.side,
                                    r = e.isSl,
                                    n = e.amount,
                                    i = e.total,
                                    o = e.price,
                                    a = (e.precision, e.avbl),
                                    s = Number(i) > Number(a) ? a : i;
                                if (!n || "0" == n) return "";
                                if (!o || "0" == o) return "";
                                if ("0" == s || Number(s) <= 0) return "";
                                var u = "";
                                return u = "BUY" === t ? r ? (0, y.RI)((Number(i) - Number(o) * Number(n)) / Number(s) * 100, 2, !1) + "" : (0, y.RI)((Number(o) * Number(n) - Number(i)) / Number(s) * 100, 2, !1) + "" : r ? (0, y.RI)((Number(o) * Number(n) - Number(i)) / Number(s) * 100, 2, !1) + "" : (0, y.RI)((Number(i) - Number(o) * Number(n)) / Number(s) * 100, 2, !1) + "", Number(u) < 0 || S(u) ? "" : u
                            }({
                                side: q,
                                isSl: !j,
                                amount: U,
                                total: B,
                                price: e,
                                precision: P,
                                avbl: Y
                            }) : function(e) {
                                var t = e.price,
                                    r = e.value,
                                    n = (e.calcLarge ? +r - +t : +t - +r) / +t * 100;
                                return n >= 0 ? (0, y.RI)(n, 2, !1) + "" : ""
                            }({
                                price: O,
                                value: e,
                                calcLarge: N
                            })
                        },
                        W = function(e) {
                            return "pnl" === K ? function(e) {
                                var t = e.side,
                                    r = e.isSl,
                                    n = e.amount,
                                    i = e.total,
                                    o = e.pnl,
                                    a = e.precision,
                                    s = void 0 === a ? 2 : a,
                                    u = "";
                                return u = "BUY" === t ? r ? (0, y.RI)((Number(i) - Number(o)) / Number(n), s, !1) + "" : (0, y.RI)((Number(o) + Number(i)) / Number(n), s, !1) + "" : r ? (0, y.RI)((Number(o) + Number(i)) / Number(n), s, !1) + "" : (0, y.RI)((Number(i) - Number(o)) / Number(n), s, !1) + "", Number(u) < 0 || S(u) ? "" : u
                            }({
                                side: q,
                                isSl: !j,
                                amount: U,
                                total: B,
                                pnl: e,
                                precision: P
                            }) : "roi" === K ? function(e) {
                                var t = e.side,
                                    r = e.isSl,
                                    n = e.amount,
                                    i = e.total,
                                    o = e.roi,
                                    a = e.precision,
                                    s = void 0 === a ? 2 : a,
                                    u = e.avbl,
                                    c = Number(i) > Number(u) ? u : i;
                                if (!n || "0" == n) return 0;
                                if (!o || "0" == o) return 0;
                                if ("0" == c || Number(c) <= 0) return "";
                                var l = "";
                                return l = "BUY" === t ? r ? (0, y.RI)((Number(i) - Number(o) / 100 * Number(c)) / Number(n), s, !1) + "" : (0, y.RI)((Number(o) / 100 * Number(c) + Number(i)) / Number(n), s, !1) + "" : r ? (0, y.RI)((Number(o) / 100 * Number(c) + Number(i)) / Number(n), s, !1) + "" : (0, y.RI)((Number(i) - Number(o) / 100 * Number(c)) / Number(n), s, !1) + "", Number(l) < 0 || S(l) ? 0 : l
                            }({
                                side: q,
                                isSl: !j,
                                amount: U,
                                total: B,
                                roi: e,
                                precision: P,
                                avbl: Y
                            }) : function(e) {
                                var t = e.price,
                                    r = e.percent,
                                    n = e.calcLarge,
                                    i = e.precision,
                                    o = n ? +t * (1 + .01 * +r) : +t * (1 - .01 * +r);
                                return (0, y.RI)(o, i, !1) + ""
                            }({
                                price: O,
                                percent: e,
                                calcLarge: N,
                                precision: P
                            })
                        },
                        z = (0, u.useCallback)((function(e) {
                            var t = +e > 0 || "" === e ? e : "0",
                                r = M ? (0, n._)({}, "".concat(M), {
                                    value: t,
                                    invalid: !1
                                }) : {};
                            L({
                                type: g.Bd.FIELD_CHANGE,
                                payload: {
                                    orderType: k,
                                    field: (0, i._)((0, n._)({}, "".concat(m), {
                                        value: t,
                                        invalid: !1
                                    }), r)
                                }
                            })
                        }), [m, M, L, k]),
                        H = (0, T.Z)((function(e) {
                            Promise.resolve().then((function() {
                                var t = W(e);
                                z(t)
                            })), p(e + ""), c("amount")
                        }));
                    (0, u.useEffect)((function() {
                        if ("amount" === a) {
                            var e = W(d);
                            z(e)
                        } else if ("percent" === a) {
                            var t = V(C);
                            p(t)
                        }
                    }), [O]), (0, u.useEffect)((function() {
                        if ("" !== C && ("pnl" === K || "roi" === K))
                            if ("amount" === a) {
                                var e = W(d);
                                z(e)
                            } else if ("percent" === a) {
                            var t = V(C);
                            p(t)
                        }
                    }), [U]), (0, u.useEffect)((function() {
                        "" === C && (p(""), c(""))
                    }), [C]), (0, u.useEffect)((function() {
                        p(""), z(""), c("")
                    }), [K]);
                    var $ = {
                            offset: t("trd-offset"),
                            pnl: t("trd-orderForm-spot-pnl", {
                                defaultValue: "PnL"
                            }),
                            roi: t("trd-orderForm-roi", {
                                defaultValue: "ROI"
                            })
                        },
                        Z = (0, u.useMemo)((function() {
                            return {
                                boxStyle: {
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                    flex: 2,
                                    minWidth: "120px"
                                },
                                before: d ? void 0 : (null === $ || void 0 === $ ? void 0 : $[K || "offset"]) || t("trd-offset")
                            }
                        }), [d, K]),
                        J = (0, u.useMemo)((function() {
                            return {
                                boxStyle: {
                                    marginTop: "0px",
                                    marginBottom: "0px",
                                    flex: 3
                                },
                                after: void 0,
                                before: 0 !== C && !C || f === b.Pv ? e.before : void 0,
                                isPrefixFixedType: f === b.Pv,
                                errorText: ""
                            }
                        }), [C, e.before, f]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "8px",
                                marginBottom: "8px"
                            },
                            children: [(0, s.jsx)(A.A, (0, o._)((0, i._)({
                                className: "prefix-wide"
                            }, e, J), {
                                onAmountChange: function(e) {
                                    var t = V(e);
                                    p(t), c("percent")
                                }
                            })), (0, s.jsx)(A.A, (0, i._)({
                                name: "offset-".concat(m),
                                className: "formrow-offset",
                                symbol: R,
                                min: .01,
                                step: .01,
                                precision: "pnl" === K ? P : 2,
                                value: d,
                                invalid: !1,
                                onAmountChange: H,
                                handleChange: null === e || void 0 === e ? void 0 : e.handleChange,
                                after: w
                            }, Z))]
                        }), G && (0, s.jsx)("div", {
                            className: "bn-formItem-errMsg",
                            style: {
                                marginTop: "-4px"
                            },
                            children: G
                        })]
                    })
                };
            const O = c().memo(R);
            var C = r("5gCu"),
                N = r("wtFP"),
                L = r("Dj9W"),
                P = r("TaoO"),
                k = r("pPGf"),
                M = P.A.Option,
                D = (0, u.memo)((function(e) {
                    var t = e.label;
                    return (0, s.jsxs)("div", {
                        className: "flex text-PrimaryText t-body4 items-center cursor-pointer",
                        children: [t, (0, s.jsx)(k.A, {
                            className: "h-[16px] w-[16px] text-IconNormal"
                        })]
                    })
                })),
                w = function(e) {
                    var t = e.tpMode,
                        r = e.onChange,
                        n = (e.side, e.tradeType, e.base, e.quote),
                        i = (0, v.ok2)().getI18n,
                        o = "pnl" === (null === t || void 0 === t ? void 0 : t[0]) ? n : "%",
                        a = (0, v.QsY)().isMobile;
                    return (0, s.jsxs)(P.A, {
                        size: "large",
                        trigger: "click",
                        customField: (0, s.jsx)(D, {
                            label: o
                        }),
                        type: "single",
                        useReactPopper: !0,
                        enablePortal: !0,
                        placement: "bottom-end",
                        variant: "full",
                        value: t,
                        onChange: r,
                        reactPopperProps: {
                            sameWidth: !1,
                            offsetX: 13
                        },
                        children: [(0, s.jsx)(M, {
                            value: "offset",
                            className: "[&_.bn-tooltips-wrap]:flex-1",
                            label: "offset",
                            optionCheckIcon: !0,
                            children: a ? i("trd-orderForm-spot-offset", {
                                defaultValue: "Offset% / ROI%"
                            }) : (0, s.jsx)(l.A, {
                                disabled: a,
                                useReactPopper: !0,
                                enablePortal: !0,
                                tooltips: i("trd-orderForm-spot-offset-tips"),
                                children: i("trd-orderForm-spot-offset", {
                                    defaultValue: "Offset% / ROI%"
                                })
                            })
                        }), (0, s.jsx)(M, {
                            value: "pnl",
                            className: "[&_.bn-tooltips-wrap]:flex-1",
                            label: "pnl",
                            optionCheckIcon: !0,
                            children: a ? i("trd-orderForm-spot-pnl", {
                                defaultValue: "PnL"
                            }) : (0, s.jsx)(l.A, {
                                disabled: a,
                                useReactPopper: !0,
                                enablePortal: !0,
                                tooltips: i("trd-orderForm-spot-pnl-tips"),
                                children: i("trd-orderForm-spot-pnl", {
                                    defaultValue: "PnL"
                                })
                            })
                        })]
                    })
                },
                U = function(e) {
                    var t = e.tpMode,
                        r = e.onChange,
                        n = (e.side, e.tradeType, e.base, e.quote),
                        i = (0, v.ok2)().getI18n,
                        o = "pnl" === (null === t || void 0 === t ? void 0 : t[0]) ? n : "%",
                        a = (0, v.QsY)().isMobile;
                    return (0, s.jsxs)(P.A, {
                        size: "middle",
                        trigger: "click",
                        customField: (0, s.jsx)(D, {
                            label: o
                        }),
                        type: "single",
                        useReactPopper: !0,
                        enablePortal: !0,
                        placement: "bottom-end",
                        variant: "full",
                        value: t,
                        onChange: r,
                        bubbleClassName: "[&_.bn-bubble-content]:!min-w-[100px]",
                        children: [(0, s.jsx)(M, {
                            value: "offset",
                            className: "[&_.bn-tooltips-wrap]:flex-1",
                            label: "offset",
                            optionCheckIcon: !0,
                            children: a ? i("trd-orderForm-margin-offset", {
                                defaultValue: "Offset%"
                            }) : (0, s.jsx)(l.A, {
                                disabled: a,
                                useReactPopper: !0,
                                enablePortal: !0,
                                tooltips: i("trd-orderForm-margin-offset-tips"),
                                children: i("trd-orderForm-margin-offset", {
                                    defaultValue: "Offset%"
                                })
                            })
                        }), (0, s.jsx)(M, {
                            value: "pnl",
                            className: "[&_.bn-tooltips-wrap]:flex-1",
                            label: "pnl",
                            optionCheckIcon: !0,
                            children: a ? i("trd-orderForm-margin-pnl", {
                                defaultValue: "PNL"
                            }) : (0, s.jsx)(l.A, {
                                disabled: a,
                                useReactPopper: !0,
                                enablePortal: !0,
                                tooltips: i("trd-orderForm-margin-pnl-tips"),
                                children: i("trd-orderForm-margin-pnl", {
                                    defaultValue: "PNL"
                                })
                            })
                        }), (0, s.jsx)(M, {
                            value: "roi",
                            className: "[&_.bn-tooltips-wrap]:flex-1",
                            label: "roi",
                            optionCheckIcon: !0,
                            children: a ? i("trd-orderForm-margin-roi", {
                                defaultValue: "ROI%"
                            }) : (0, s.jsx)(l.A, {
                                disabled: a,
                                useReactPopper: !0,
                                enablePortal: !0,
                                tooltips: i("trd-orderForm-margin-roi-tips"),
                                children: i("trd-orderForm-margin-roi", {
                                    defaultValue: "ROI%"
                                })
                            })
                        })]
                    })
                },
                B = {
                    SPOT: {
                        BUY: {
                            tp: ["offset"],
                            sl: ["offset"]
                        },
                        SELL: {
                            tp: ["offset"],
                            sl: ["offset"]
                        }
                    },
                    CROSS: {
                        BUY: {
                            tp: ["offset"],
                            sl: ["offset"]
                        },
                        SELL: {
                            tp: ["offset"],
                            sl: ["offset"]
                        }
                    },
                    ISOLATED: {
                        BUY: {
                            tp: ["offset"],
                            sl: ["offset"]
                        },
                        SELL: {
                            tp: ["offset"],
                            sl: ["offset"]
                        }
                    }
                },
                q = function(e) {
                    var t, r, c, T, _ = e.quote,
                        A = e.side,
                        b = e.minQty,
                        S = e.tpsl,
                        h = e.postOnly,
                        x = e.dispatch,
                        E = e.timeInForce,
                        I = e.tickSizePrecision,
                        R = e.sor,
                        P = e.curOrderState,
                        k = e.widgetKey,
                        M = void 0 === k ? "" : k,
                        D = e.orderType,
                        q = e.openBuySellGrid,
                        j = void 0 === q || q,
                        F = e.tradeType,
                        Q = e.updateTpsl,
                        G = e.isConfirm,
                        Y = void 0 !== G && G,
                        K = e.handleChange,
                        V = (0, v.ok2)().getI18n,
                        W = (0, a._)((0, L.$)(), 2),
                        z = W[0],
                        H = W[1],
                        $ = (0, v.YVB)(),
                        Z = (0, a._)((0, m.A)("trd-tpsl-side-mode", B), 2),
                        J = Z[0],
                        X = Z[1],
                        ee = (0, u.useState)((null === J || void 0 === J || null === (t = J[F]) || void 0 === t || null === (r = t[A]) || void 0 === r ? void 0 : r.tp) || ["offset"]),
                        te = ee[0],
                        re = ee[1],
                        ne = (0, u.useState)((null === J || void 0 === J || null === (c = J[F]) || void 0 === c || null === (T = c[A]) || void 0 === T ? void 0 : T.sl) || ["offset"]),
                        ie = ne[0],
                        oe = ne[1],
                        ae = E !== g.Zm.GTC || h || !!R && R[A],
                        se = (0, y.V$)(F) ? U : w,
                        ue = (0, u.useCallback)((function(e) {
                            if (Q) return Q(e);
                            var t = e ? {
                                tpsl: e,
                                postOnly: !1,
                                timeInForce: "GTC"
                            } : {
                                tpsl: e
                            };
                            x({
                                type: g.Bd.SHADOW_CHANGE,
                                payload: t
                            }), H((0, i._)({}, z, t)), e || Promise.resolve().then((function() {
                                x({
                                        type: g.Bd.FIELD_CHANGE,
                                        payload: {
                                            orderType: D,
                                            field: {
                                                tpslTPLimitPrice: {
                                                    value: "",
                                                    invalid: !1
                                                },
                                                tpslSLTriggerPrice: {
                                                    value: "",
                                                    invalid: !1
                                                },
                                                tpslSLLimitPrice: {
                                                    value: "",
                                                    invalid: !1
                                                }
                                            }
                                        }
                                    }),
                                    function(e) {
                                        var t = e.tradeType;
                                        (0, N.u4)("$WebClick", {
                                            module: "order_form",
                                            $element_id: "tpsl_checkbox",
                                            pageName: N.$1[t],
                                            df_source: N.Yx[t]
                                        })
                                    }({
                                        tradeType: "SPOT"
                                    })
                            }))
                        }), [z, D, Q]),
                        ce = (0, u.useCallback)((function(e, t, r) {
                            x({
                                type: g.Bd.FIELD_CHANGE,
                                payload: {
                                    orderType: D,
                                    field: (0, n._)({}, t, {
                                        value: r,
                                        invalid: !1
                                    })
                                }
                            })
                        }), [D, x]);
                    if ((0, u.useEffect)((function() {
                            z && void 0 !== (null === z || void 0 === z ? void 0 : z.tpsl) && (null === z || void 0 === z ? void 0 : z.tpsl) !== S && x({
                                type: g.Bd.SHADOW_CHANGE,
                                payload: {
                                    tpsl: z.tpsl
                                }
                            })
                        }), [null === z || void 0 === z ? void 0 : z.tpsl]), $ && (0, y.V$)(F)) return (0, s.jsx)(s.Fragment, {});
                    var le = (0, s.jsx)(l.A, {
                        arrow: !0,
                        useReactPopper: !0,
                        offset: 4,
                        tooltips: (0, s.jsxs)(s.Fragment, {
                            children: [V("trd-orderForm-tpsl-tips-".concat(A === g.Vl.BUY ? "1" : "2")), "\xa0", (0, s.jsx)("a", {
                                target: "_blank",
                                href: "/support/faq/5344bac15f224ad1a692adddd8ab1d1b",
                                className: "trade-common-link underline ",
                                style: {
                                    color: "var(--color-SecondaryBg)",
                                    fontWeight: "500"
                                },
                                children: V("trd-orderForm-viewMore")
                            })]
                        }),
                        children: (0, s.jsx)("span", {
                            style: {
                                cursor: "help",
                                fontSize: "12px"
                            },
                            children: V("trd-orderForm-tpsl".concat(A === g.Vl.BUY ? "" : "-sell"))
                        })
                    });
                    return (0, s.jsxs)("div", {
                        className: "orderform-tspl w-full",
                        children: [(0, s.jsx)("label", {
                            htmlFor: "tspl-show-".concat(A, "-").concat(M),
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            onClick: function() {
                                return Y && ue(!S)
                            },
                            children: Y ? (0, s.jsxs)(s.Fragment, {
                                children: [le, S ? (0, s.jsx)(p.A, {
                                    style: {
                                        width: "20px",
                                        fontSize: "20px",
                                        color: "var(--color-PrimaryText)",
                                        transform: "rotate(270deg)"
                                    }
                                }) : (0, s.jsx)(f.A, {
                                    style: {
                                        width: "20px",
                                        fontSize: "20px",
                                        color: "var(--color-PrimaryText)",
                                        transform: "rotate(270deg)"
                                    }
                                })]
                            }) : (0, s.jsx)(d.A, {
                                value: "tpsl",
                                id: "tspl-show-".concat(A, "-").concat(M),
                                disabled: ae,
                                checked: S,
                                onChange: function() {
                                    return ue(!S)
                                },
                                children: le
                            })
                        }), S && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)("div", {
                                    style: {
                                        fontSize: "12px",
                                        lineHeight: "18px",
                                        color: "var(--color-TertiaryText)",
                                        marginBottom: "4px",
                                        marginTop: "8px"
                                    },
                                    children: V("trd-Position-takeProfit".concat(A === g.Vl.BUY ? "" : "-sell"))
                                }), (0, s.jsx)(O, {
                                    name: "tpslTPLimitPrice",
                                    symbol: A,
                                    min: b,
                                    step: b,
                                    precision: +I,
                                    before: V("trd-orderForm-TPLimit".concat(A !== g.Vl.BUY ? "" : "-sell")),
                                    after: _,
                                    value: null === P || void 0 === P ? void 0 : P.tpslTPLimitPrice.value,
                                    invalid: null === P || void 0 === P ? void 0 : P.tpslTPLimitPrice.invalid,
                                    errorText: null === P || void 0 === P ? void 0 : P.tpslTPLimitPrice.errorMsg,
                                    autoZero: !0,
                                    price: null === P || void 0 === P ? void 0 : P.price.value,
                                    quantity: null === P || void 0 === P ? void 0 : P.quantity.value,
                                    total: null === P || void 0 === P ? void 0 : P.total.value,
                                    calcLarge: A === g.Vl.BUY,
                                    side: A,
                                    dispatch: x,
                                    orderType: D,
                                    openBuySellGrid: j,
                                    tpMode: (null === te || void 0 === te ? void 0 : te[0]) || "offset",
                                    handleChange: K,
                                    istp: !0,
                                    suffix: (0, s.jsx)(se, {
                                        tpMode: te,
                                        onChange: function(e) {
                                            ! function(e) {
                                                try {
                                                    var t, r, a = JSON.parse(localStorage.getItem("trd-tpsl-side-mode") || JSON.stringify(B));
                                                    re(e), X((0, o._)((0, i._)({}, a), (0, n._)({}, F, (0, o._)((0, i._)({}, null === a || void 0 === a ? void 0 : a[F]), (0, n._)({}, A, {
                                                        tp: e,
                                                        sl: (null === a || void 0 === a || null === (t = a[F]) || void 0 === t || null === (r = t[A]) || void 0 === r ? void 0 : r.sl) || ["offset"]
                                                    })))))
                                                } catch (s) {
                                                    re(e), X(B)
                                                }
                                            }(e)
                                        },
                                        side: A,
                                        tradeType: F,
                                        quote: _
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                style: {
                                    marginBottom: "8px"
                                },
                                children: [(0, s.jsx)("div", {
                                    style: {
                                        fontSize: "12px",
                                        lineHeight: "18px",
                                        color: "var(--color-TertiaryText)",
                                        marginBottom: "4px",
                                        marginTop: "8px"
                                    },
                                    children: V("trd-Position-stopLoss".concat(A === g.Vl.BUY ? "" : "-sell"))
                                }), (0, s.jsx)(O, {
                                    name: "tpslSLTriggerPrice",
                                    symbol: A,
                                    min: b,
                                    step: b,
                                    precision: +I,
                                    before: V("trd-orderForm-SLTrigger".concat(A !== g.Vl.BUY ? "" : "-sell")),
                                    after: _,
                                    value: null === P || void 0 === P ? void 0 : P.tpslSLTriggerPrice.value,
                                    invalid: null === P || void 0 === P ? void 0 : P.tpslSLTriggerPrice.invalid,
                                    errorText: null === P || void 0 === P ? void 0 : P.tpslSLTriggerPrice.errorMsg,
                                    autoZero: !0,
                                    price: null === P || void 0 === P ? void 0 : P.price.value,
                                    quantity: null === P || void 0 === P ? void 0 : P.quantity.value,
                                    total: null === P || void 0 === P ? void 0 : P.total.value,
                                    calcLarge: A !== g.Vl.BUY,
                                    side: A,
                                    dispatch: x,
                                    orderType: D,
                                    autoFillName: "tpslSLLimitPrice",
                                    openBuySellGrid: j,
                                    handleChange: K,
                                    slMode: (null === ie || void 0 === ie ? void 0 : ie[0]) || "offset",
                                    suffix: (0, s.jsx)(se, {
                                        tpMode: ie,
                                        onChange: function(e) {
                                            ! function(e) {
                                                try {
                                                    var t, r, a = JSON.parse(localStorage.getItem("trd-tpsl-side-mode") || JSON.stringify(B));
                                                    oe(e), X((0, o._)((0, i._)({}, a), (0, n._)({}, F, (0, o._)((0, i._)({}, null === a || void 0 === a ? void 0 : a[F]), (0, n._)({}, A, {
                                                        tp: (null === a || void 0 === a || null === (t = a[F]) || void 0 === t || null === (r = t[A]) || void 0 === r ? void 0 : r.tp) || ["offset"],
                                                        sl: e
                                                    })))))
                                                } catch (s) {
                                                    oe(e), X(B)
                                                }
                                            }(e)
                                        },
                                        side: A,
                                        tradeType: F,
                                        quote: _
                                    })
                                }), (0, s.jsx)(C.A, {
                                    name: "tpslSLLimitPrice",
                                    triggerName: "tpslSLTriggerPrice",
                                    side: A,
                                    i18nSide: A === g.Vl.BUY ? g.Vl.SELL : g.Vl.BUY,
                                    widgetKey: M,
                                    curOrderState: P,
                                    handleFormChange: ce,
                                    orderType: D,
                                    dispatch: x,
                                    handleChange: K
                                }, "SLInput")]
                            })]
                        })]
                    })
                };
            const j = c().memo(q)
        },
        Dj9W: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => u,
                o: () => o
            });
            var n = r("DTvD"),
                i = r("Wpmw"),
                o = function(e) {
                    var t = (0, i.B)(e),
                        r = t.t,
                        o = t.i18n,
                        a = (0, n.useCallback)((function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            "boolean" === typeof i ? t = i ? "trd-orderForm" : "trd" : "string" === typeof i && (t = i);
                            var o = "".concat(t, "-").concat(e);
                            return r(o, n)
                        }), [r]);
                    return {
                        i18n: o,
                        getI18n: a
                    }
                },
                a = r("q+oq"),
                s = r("CLKF"),
                u = function() {
                    var e = (0, s.O)();
                    return (0, a.T)("advancedStorage".concat(e ? "-cp" : ""), {})
                }
        },
        WHzC: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => i
            });
            var n = r("J+BU"),
                i = function(e) {
                    return e === n.W4.STOPLIMIT ? "STOP_LIMIT" : e
                }
        },
        CAdv: (e, t, r) => {
            "use strict";
            r.d(t, {
                CS: () => h,
                GJ: () => g,
                Ne: () => T,
                UB: () => b,
                X5: () => p,
                au: () => l,
                de: () => S,
                tW: () => _,
                uW: () => y,
                zj: () => A
            });
            var n, i = r("iKvg"),
                o = r("hrAD"),
                a = r("qoEP"),
                s = r("J+BU"),
                u = {
                    type: "input",
                    name: "price",
                    withHelper: !0,
                    isPrice: !0,
                    inputType: "number"
                },
                c = (0, a._)((0, o._)({}, u), {
                    beforeI18nKey: "TPLimit",
                    sideSellkey: "-sell"
                }),
                l = {
                    type: "input",
                    name: "quantity",
                    minKey: "minQty",
                    stepKey: "minQty",
                    withHelper: !1,
                    isBase: !0,
                    inputType: "number"
                },
                d = {
                    type: "slider",
                    name: "sliderQuantity"
                },
                p = {
                    type: "input",
                    name: "total",
                    minKey: "minTotal",
                    stepKey: "minTotal",
                    placeholder: "minTotal",
                    withHelper: !0,
                    needLogin: !0,
                    isBase: !1
                },
                f = {
                    type: "input",
                    name: "stopPrice",
                    withHelper: !0,
                    isPrice: !0,
                    inputType: "number"
                },
                m = (0, a._)((0, o._)({}, f), {
                    beforeI18nKey: "SLTrigger",
                    sideSellkey: "-sell"
                }),
                v = {
                    type: "SLInput",
                    name: "stopLimitPrice",
                    withHelper: !0,
                    isPrice: !0,
                    inputType: "number"
                },
                g = (n = {}, (0, i._)(n, s.W4.LIMIT, [u, l, d, p]), (0, i._)(n, s.W4.MARKET, [{
                    type: "input",
                    name: "price",
                    disabled: !0,
                    placeholder: "marketprice-v2",
                    noafter: !0
                }, {
                    type: "mixedInput",
                    name: "qtyTotal"
                }, d]), (0, i._)(n, s.W4.STOPLIMIT, [f, {
                    type: "input",
                    name: "stopLimitPrice",
                    withHelper: !0,
                    isPrice: !0,
                    inputType: "number"
                }, l, d, p]), (0, i._)(n, s.W4.OCO, [c, m, v, l, d, p]), (0, i._)(n, s.W4.TRAILING_STOP, [{
                    type: "trailingDelta",
                    name: "trailingDelta"
                }, v, l, d, {
                    type: "actPrice",
                    name: "stopPrice",
                    withHelper: !0,
                    beforeI18nKey: "act-price",
                    isPrice: !0
                }]), (0, i._)(n, s.W4.STOP_MARKET, [{
                    type: "input",
                    name: "price",
                    withHelper: !0,
                    beforeI18nKey: "stopPrice",
                    isPrice: !0,
                    inputType: "number"
                }, {
                    type: "input",
                    name: "stopMarketPrice",
                    disabled: !0,
                    beforeI18nKey: "price",
                    placeholder: "marketprice-v2",
                    isPrice: !0,
                    noafter: !0
                }, l, d]), n),
                y = 8,
                T = 16,
                _ = .02,
                A = "blacklistUser.not.enabled",
                b = {
                    STOPLIMIT: "support/faq/115003372072",
                    OCO: "support/faq/360032605831",
                    STOP: "support/faq/360036351051",
                    STOP_MARKET: "support/faq/139d0102b17c4727bc42191a9e84abeb",
                    TRAILING_STOP: "support/faq/339635f6260d43c5aefa4c3c921728ec",
                    LIMIT: "support/faq/what-are-market-order-and-limit-order-and-how-to-place-them-12cba755d6334ad98ced0b66ddde66ec",
                    MARKET: "support/faq/what-are-market-order-and-limit-order-and-how-to-place-them-12cba755d6334ad98ced0b66ddde66ec"
                },
                S = {
                    STOPLIMIT: "stopLimit",
                    TRAILING_STOP: "trailingStop",
                    OCO: "OCOType",
                    STOP_MARKET: "stopMarket"
                },
                h = 3e3
        },
        qgOy: (e, t, r) => {
            "use strict";
            r.d(t, {
                $W: () => f,
                Ai: () => m,
                Fr: () => s,
                J1: () => v,
                J8: () => c,
                ND: () => p,
                Yp: () => T,
                kW: () => g,
                tK: () => l,
                w1: () => u,
                zt: () => _
            });
            var n = r("iKvg"),
                i = r("tM9B"),
                o = r("J+BU"),
                a = /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;

            function s() {
                return window.matchMedia("(max-width: 768px)").matches
            }

            function u(e) {
                var t = "".concat(e).match(a);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }

            function c(e, t) {
                return isNaN(+e) ? "" : (0, i.tY)(e).toFixed(t, 1)
            }

            function l(e, t) {
                return e.reduce((function(e, r) {
                    return e[r] = {
                        value: void 0 !== t[r] ? t[r] : "",
                        invalid: !1,
                        errorMsg: ""
                    }, e
                }), {})
            }
            var d, p = function(e) {
                    return l(Object.keys(e), e)
                },
                f = (d = {}, (0, n._)(d, o.W4.LIMIT, ["price", "quantity", "sliderQty", "total", "tpslTPLimitPrice", "tpslSLTriggerPrice", "tpslSLLimitPrice", "icebergQty", "stopType"]), (0, n._)(d, o.W4.MARKET, ["price", "quantity", "sliderQty", "total"]), (0, n._)(d, o.W4.STOPLIMIT, ["stopPrice", "stopLimitPrice", "quantity", "sliderQty", "total", "icebergQty"]), (0, n._)(d, o.W4.STOP_MARKET, ["price", "stopMarketPrice", "quantity", "sliderQty"]), (0, n._)(d, o.W4.OCO, ["price", "stopPrice", "stopLimitPrice", "quantity", "sliderQty", "total", "stopType"]), (0, n._)(d, o.W4.TRAILING_STOP, ["stopPrice", "trailingDelta", "stopLimitPrice", "quantity", "sliderQty", "total", "stopType"]), d);

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    sliderQty: 0
                };
                return l(f[e] || [], t)
            }

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.keys(t).reduce((function(e, r) {
                    return e.replace(new RegExp("%".concat(r, "%"), "g"), t[r])
                }), e)
            }
            var g = function(e) {
                    return Math.pow(.1, e).toFixed(e)
                },
                y = function(e) {
                    return /[^\d|.|,|\u3002|e-]/.test(e)
                },
                T = function(e, t, r, n) {
                    var i = e.target.value;
                    return Number(i) < 0 && (i = "0"), y(i) ? "" : (/\u3002|,/.test(i) && (i = i.replace(/[\u3002|,]/g, ".")), /^0\d/.test(i) ? i = "0" : /^\./.test(i) ? i = 0 + i.substring(0, n + 1) : Number(i) >= 0 && -1 !== i.indexOf(".") && i.split(".")[1].length >= n && (i = i.replace(new RegExp("^(\\d*\\.\\d{".concat(n, "})\\d*")), "$1")), Number.isNaN(Number(i)) ? "" : (r ? t(r, i) : t(i), i))
                },
                _ = function(e) {
                    return !/\d*\.?\d+$/.test(e.target.value) && (e.target.value = "")
                }
        },
        ebQf: (e, t, r) => {
            "use strict";
            r.d(t, {
                YN: () => j,
                KM: () => Q,
                nm: () => G,
                z2: () => K,
                y8: () => M,
                v0: () => D,
                n7: () => P,
                Xd: () => U,
                Q$: () => k,
                oD: () => $
            });
            var n = r("S+0I"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("KrVi"),
                s = r("mguP"),
                u = r("jbFV"),
                c = r.n(u),
                l = r("k8+c"),
                d = r("lguG"),
                p = r("9Fi+"),
                f = r("BX8v"),
                m = r("xJpq"),
                v = r("tM9B"),
                g = r("bQ69"),
                y = r("hAzz"),
                T = r("JJde"),
                _ = r("vTbz"),
                A = r("8iyE"),
                b = r("CAdv"),
                S = r("J+BU"),
                h = function(e) {
                    var t, r, n, i, o, a, s, u, c, l, d, p, f, m, g, y, T, _, A, b, S, h, x, E, I = e.forceLiquidationBar,
                        R = e.userAssets,
                        O = e.willBorrowAmount,
                        C = e.willRepayAmount,
                        N = e.payload,
                        L = e.base,
                        P = e.quote,
                        k = e.marketPrice,
                        M = e.takerCommission,
                        D = void 0 === M ? "0" : M,
                        w = 0,
                        U = 0,
                        B = 0,
                        q = 0,
                        j = function(e) {
                            return Number(e) * (1 - Number(D))
                        };
                    "BUY" === N.side ? "MARKET" === (null === N || void 0 === N ? void 0 : N.type) ? (w = Number(null === (t = R[P]) || void 0 === t ? void 0 : t.totalDebt) + Number(O), U = Number(O) > 0 ? 0 + Number((null === (r = R[P]) || void 0 === r ? void 0 : r.locked) || 0) : Number(null === (n = R[P]) || void 0 === n ? void 0 : n.totalAmount) - ((null === N || void 0 === N ? void 0 : N.quoteOrderQty) ? Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty) : Number((null === N || void 0 === N ? void 0 : N.quantity) * Number(k))), B = Number(null === (i = R[L]) || void 0 === i ? void 0 : i.totalAmount) + j((null === N || void 0 === N ? void 0 : N.quoteOrderQty) ? Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty) / Number(k) : Number(null === N || void 0 === N ? void 0 : N.quantity)) - Number(C), q = Number(null === (o = R[L]) || void 0 === o ? void 0 : o.totalDebt) - Number(C) <= 0 ? 0 : Number(null === (a = R[L]) || void 0 === a ? void 0 : a.totalDebt) - Number(C)) : (w = Number(null === (s = R[P]) || void 0 === s ? void 0 : s.totalDebt) + Number(O), U = Number(O) > 0 ? 0 + Number((null === (u = R[P]) || void 0 === u ? void 0 : u.locked) || 0) : Number(null === (c = R[P]) || void 0 === c ? void 0 : c.totalAmount) - ((null === N || void 0 === N ? void 0 : N.quantity) ? Number((null === N || void 0 === N ? void 0 : N.quantity) * (null === N || void 0 === N ? void 0 : N.price)) : Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty)), B = Number(null === (l = R[L]) || void 0 === l ? void 0 : l.totalAmount) + j((null === N || void 0 === N ? void 0 : N.quantity) ? Number(null === N || void 0 === N ? void 0 : N.quantity) : Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty) / (null === N || void 0 === N ? void 0 : N.price)) - Number(C), q = Number(null === (d = R[L]) || void 0 === d ? void 0 : d.totalDebt) - Number(C) <= 0 ? 0 : Number(null === (p = R[L]) || void 0 === p ? void 0 : p.totalDebt) - Number(C)) : "MARKET" === (null === N || void 0 === N ? void 0 : N.type) ? (q = Number(null === (f = R[L]) || void 0 === f ? void 0 : f.totalDebt) + Number(O), B = Number(O) > 0 ? 0 + Number((null === (m = R[L]) || void 0 === m ? void 0 : m.locked) || 0) : Number(null === (g = R[L]) || void 0 === g ? void 0 : g.totalAmount) - ((null === N || void 0 === N ? void 0 : N.quoteOrderQty) ? Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty) / Number(k) : Number(null === N || void 0 === N ? void 0 : N.quantity)), U = Number(null === (y = R[P]) || void 0 === y ? void 0 : y.totalAmount) + j((null === N || void 0 === N ? void 0 : N.quoteOrderQty) ? Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty) : Number((null === N || void 0 === N ? void 0 : N.quantity) * Number(k))) - Number(C), w = Number(null === (T = R[P]) || void 0 === T ? void 0 : T.totalDebt) - Number(C) <= 0 ? 0 : Number(null === (_ = R[P]) || void 0 === _ ? void 0 : _.totalDebt) - Number(C)) : (q = Number(null === (A = R[L]) || void 0 === A ? void 0 : A.totalDebt) + Number(O), B = Number(O) > 0 ? 0 + Number((null === (b = R[L]) || void 0 === b ? void 0 : b.locked) || 0) : Number(null === (S = R[L]) || void 0 === S ? void 0 : S.totalAmount) - ((null === N || void 0 === N ? void 0 : N.quantity) ? Number(null === N || void 0 === N ? void 0 : N.quantity) : Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty) / (null === N || void 0 === N ? void 0 : N.price)), U = Number(null === (h = R[P]) || void 0 === h ? void 0 : h.totalAmount) + j((null === N || void 0 === N ? void 0 : N.quantity) ? Number((null === N || void 0 === N ? void 0 : N.quantity) * (null === N || void 0 === N ? void 0 : N.price)) : Number(null === N || void 0 === N ? void 0 : N.quoteOrderQty)) - Number(C), w = Number(null === (x = R[P]) || void 0 === x ? void 0 : x.totalDebt) - Number(C) <= 0 ? 0 : Number(null === (E = R[P]) || void 0 === E ? void 0 : E.totalDebt) - Number(C));
                    var F = (0, v.k3)((0, v.Rd)((0, v.lw)(w, I), U), (0, v.Rd)(B, (0, v.lw)(q, I))).toFixed(8);
                    return {
                        liquidationPrice: Number(w) <= 0 && Number(q) <= 0 ? "-999" : F,
                        asssetChange: {
                            baseTotal: Number(B) < 0 ? 0 : B,
                            quoteTotal: Number(U) < 0 ? 0 : U,
                            baseDebt: q,
                            quoteDebt: w
                        }
                    }
                },
                x = r("iKvg"),
                E = r("k3xa"),
                I = r("0cM6"),
                R = function(e) {
                    var t, r, n, a, s, u, c, l, d, p, f, m, v, g, y, T, _, A, b, S, h, R, O, C, N, L, P = e.forceLiquidationBar,
                        k = e.userAssets,
                        M = e.willBorrowAmount,
                        D = e.willRepayAmount,
                        w = e.payload,
                        U = e.base,
                        B = e.quote,
                        q = e.marketPrice,
                        j = e.takerCommission,
                        F = void 0 === j ? "0" : j,
                        Q = e.isCM2_0,
                        G = e.priceIndexMap,
                        Y = e.assetleverageBracketList,
                        K = 0,
                        V = 0,
                        W = 0,
                        z = 0,
                        H = function(e) {
                            return Number(e) * (1 - Number(F))
                        };
                    "BUY" === w.side ? "MARKET" === (null === w || void 0 === w ? void 0 : w.type) ? (K = Number(null === (r = k[B]) || void 0 === r ? void 0 : r.totalDebt) + Number(M), V = Number(M) > 0 ? 0 + Number((null === (n = k[B]) || void 0 === n ? void 0 : n.locked) || 0) : Number(null === (a = k[B]) || void 0 === a ? void 0 : a.totalAmount) - ((null === w || void 0 === w ? void 0 : w.quoteOrderQty) ? Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty) : Number((null === w || void 0 === w ? void 0 : w.quantity) * Number(q))), W = Number(null === (s = k[U]) || void 0 === s ? void 0 : s.totalAmount) + H((null === w || void 0 === w ? void 0 : w.quoteOrderQty) ? Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty) / Number(q) : Number(null === w || void 0 === w ? void 0 : w.quantity)) - Number(D), z = Number(null === (u = k[U]) || void 0 === u ? void 0 : u.totalDebt) - Number(D) <= 0 ? 0 : Number(null === (c = k[U]) || void 0 === c ? void 0 : c.totalDebt) - Number(D)) : (K = Number(null === (l = k[B]) || void 0 === l ? void 0 : l.totalDebt) + Number(M), V = Number(M) > 0 ? 0 + Number((null === (d = k[B]) || void 0 === d ? void 0 : d.locked) || 0) : Number(null === (p = k[B]) || void 0 === p ? void 0 : p.totalAmount) - ((null === w || void 0 === w ? void 0 : w.quantity) ? Number((null === w || void 0 === w ? void 0 : w.quantity) * (null === w || void 0 === w ? void 0 : w.price)) : Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty)), W = Number(null === (f = k[U]) || void 0 === f ? void 0 : f.totalAmount) + H((null === w || void 0 === w ? void 0 : w.quantity) ? Number(null === w || void 0 === w ? void 0 : w.quantity) : Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty) / (null === w || void 0 === w ? void 0 : w.price)) - Number(D), z = Number(null === (m = k[U]) || void 0 === m ? void 0 : m.totalDebt) - Number(D) <= 0 ? 0 : Number(null === (v = k[U]) || void 0 === v ? void 0 : v.totalDebt) - Number(D)) : "MARKET" === (null === w || void 0 === w ? void 0 : w.type) ? (z = Number(null === (g = k[U]) || void 0 === g ? void 0 : g.totalDebt) + Number(M), W = Number(M) > 0 ? 0 + Number((null === (y = k[U]) || void 0 === y ? void 0 : y.locked) || 0) : Number(null === (T = k[U]) || void 0 === T ? void 0 : T.totalAmount) - ((null === w || void 0 === w ? void 0 : w.quoteOrderQty) ? Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty) / Number(q) : Number(null === w || void 0 === w ? void 0 : w.quantity)), V = Number(null === (_ = k[B]) || void 0 === _ ? void 0 : _.totalAmount) + H((null === w || void 0 === w ? void 0 : w.quoteOrderQty) ? Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty) : Number((null === w || void 0 === w ? void 0 : w.quantity) * Number(q))) - Number(D), K = Number(null === (A = k[B]) || void 0 === A ? void 0 : A.totalDebt) - Number(D) <= 0 ? 0 : Number(null === (b = k[B]) || void 0 === b ? void 0 : b.totalDebt) - Number(D)) : (z = Number(null === (S = k[U]) || void 0 === S ? void 0 : S.totalDebt) + Number(M), W = Number(M) > 0 ? 0 + Number((null === (h = k[U]) || void 0 === h ? void 0 : h.locked) || 0) : Number(null === (R = k[U]) || void 0 === R ? void 0 : R.totalAmount) - ((null === w || void 0 === w ? void 0 : w.quantity) ? Number(null === w || void 0 === w ? void 0 : w.quantity) : Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty) / (null === w || void 0 === w ? void 0 : w.price)), V = Number(null === (O = k[B]) || void 0 === O ? void 0 : O.totalAmount) + H((null === w || void 0 === w ? void 0 : w.quantity) ? Number((null === w || void 0 === w ? void 0 : w.quantity) * (null === w || void 0 === w ? void 0 : w.price)) : Number(null === w || void 0 === w ? void 0 : w.quoteOrderQty)) - Number(D), K = Number(null === (C = k[B]) || void 0 === C ? void 0 : C.totalDebt) - Number(D) <= 0 ? 0 : Number(null === (N = k[B]) || void 0 === N ? void 0 : N.totalDebt) - Number(D));
                    var $ = (0, o._)((0, i._)({}, k), (L = {}, (0, x._)(L, U, (null === k || void 0 === k ? void 0 : k[U]) ? (0, o._)((0, i._)({}, null === k || void 0 === k ? void 0 : k[U]), {
                            netAsset: W,
                            totalAmount: W,
                            free: W,
                            locked: z,
                            totalDebt: z,
                            borrowed: z
                        }) : {
                            asset: U,
                            netAsset: W,
                            totalAmount: W,
                            free: W,
                            locked: z,
                            totalDebt: z,
                            borrowed: z,
                            interest: 0
                        }), (0, x._)(L, B, (null === k || void 0 === k ? void 0 : k[B]) ? (0, o._)((0, i._)({}, null === k || void 0 === k ? void 0 : k[B]), {
                            netAsset: V,
                            totalAmount: V,
                            free: V,
                            locked: K,
                            totalDebt: K,
                            borrowed: K
                        }) : {
                            asset: B,
                            netAsset: V,
                            totalAmount: V,
                            free: V,
                            locked: K,
                            totalDebt: K,
                            borrowed: K,
                            interest: 0
                        }), L)),
                        Z = Object.keys($).map((function(e) {
                            return $[e]
                        })),
                        J = Z.filter((function(e) {
                            var t = e.free,
                                r = void 0 === t ? 0 : t,
                                n = e.locked,
                                i = void 0 === n ? 0 : n,
                                o = e.totalDebt,
                                a = void 0 === o ? 0 : o,
                                s = e.interest,
                                u = void 0 === s ? 0 : s;
                            return 0 !== Number(r) || 0 !== Number(i) || 0 !== Number(a) || 0 !== Number(u)
                        })),
                        X = (0, I.N)(Z, G, Y);
                    return {
                        liquidationPrice: null === (t = ((0, E.ix)({
                            mode: "USDT",
                            bigLiquidationText: ">10X",
                            priceIndexMap: G,
                            forceLiquidationBar: P,
                            userAssets: J,
                            avgOpenPriceList: [],
                            liquidationPriceDict: Q ? X : {}
                        }) || []).find((function(e) {
                            return e.asset === U
                        }))) || void 0 === t ? void 0 : t.liquidationPriceUSDT,
                        asssetChange: {
                            baseTotal: Number(W) < 0 ? 0 : W,
                            quoteTotal: Number(V) < 0 ? 0 : V,
                            baseDebt: z,
                            quoteDebt: K
                        }
                    }
                },
                O = function(e, t, r) {
                    return "MARKET" === r ? {
                        stopMarketTimeInForce: t
                    } : {
                        stopLimitPrice: e,
                        stopLimitTimeInForce: t
                    }
                },
                C = r("wtFP"),
                N = function(e) {
                    (0, C.u4)("$pageview", {
                        df_source: "spot",
                        pageName: "spot_trading",
                        $element_id: e
                    })
                },
                L = function(e) {
                    (0, C.u4)("$WebClick", {
                        df_source: "spot",
                        pageName: "spot_trading",
                        $element_id: e
                    })
                },
                P = function(e) {
                    var t, r, n;
                    return "MARKET" === ((null === (t = e.stopType) || void 0 === t ? void 0 : t.value) || "") ? (null === (n = e.stopPrice) || void 0 === n ? void 0 : n.value) || "" : (null === (r = e.stopLimitPrice) || void 0 === r ? void 0 : r.value) || ""
                },
                k = function(e, t, r) {
                    var n, i;
                    if ("MARKET" === ((null === (n = e.stopType) || void 0 === n ? void 0 : n.value) || "")) {
                        var o, a, s = (null === (o = e.trailingDelta) || void 0 === o ? void 0 : o.value) || "0",
                            u = (null === (a = e.stopPrice) || void 0 === a ? void 0 : a.value) || "",
                            c = r === S.Vl.BUY ? 1 + .01 * +s : 1 - .01 * +s;
                        return (0, v.lw)(+u || +t, c).toNumber()
                    }
                    return (null === (i = e.stopLimitPrice) || void 0 === i ? void 0 : i.value) || ""
                };

            function M(e) {
                var t, r = e.orderType,
                    n = e.marketPrice,
                    i = void 0 === n ? "0" : n,
                    o = e.curOrderState,
                    a = void 0 === o ? {} : o,
                    s = e.side,
                    u = (null === (t = a.price) || void 0 === t ? void 0 : t.value) || "",
                    c = P(a);
                return r === S.W4.STOPLIMIT ? u = c : r === S.W4.MARKET ? u = i : r === S.W4.OCO && +c > +u ? u = c : r === S.W4.TRAILING_STOP && (u = k(a, i, s)), u
            }

            function D(e) {
                return e === S.W4.STOPLIMIT ? "stopLimitPrice" : "price"
            }
            var w = {};

            function U(e, t) {
                return B.apply(this, arguments)
            }

            function B() {
                return (B = (0, n._)(c().mark((function e(t, r) {
                    var n, i, o, a, s, u, p, f, m, v;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.mode, i = r.asset, o = r.symbol, a = r.tradeType, s = r.delay, u = void 0 === s ? 0 : s, p = r.isLoggedIn, f = r.isAuto, m = r.spotTransAssetMount, v = r.spotTransAsset, e.abrupt("return", new Promise((function(e) {
                                    w[t] && (clearTimeout(w[t]), w[t] = null);
                                    if (!p || !(0, _.bS)(n)) return e("0");
                                    var r = setTimeout((function() {
                                        var r = {
                                            excludeErrorCode: ["051061", "128037"]
                                        };
                                        a === g.Gr.CROSS ? f ? (0, l.gU)(i, v, m, r).then(e) : (0, l.eb)(i, r).then(e) : f ? (0, d.dk)(i, o, r, v, m).then(e) : (0, d.rZ)(i, o, r).then(e), w[t] = null
                                    }), u);
                                    w[t] = r
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var q = .02;

            function j(e, t, r) {
                var n = r.getBook,
                    o = (0, a._)(r, ["getBook"]),
                    u = !1,
                    c = "",
                    l = o.price,
                    d = void 0 === l ? "0" : l,
                    p = o.marketPrice,
                    f = o.side,
                    m = void 0 === f ? "" : f,
                    v = o.tradeType,
                    g = o.disableConvert,
                    T = (0, y.V$)(v);
                if (e === S.W4.LIMIT) {
                    var _ = (+d - +p) / +p,
                        A = Math.round(100 * q),
                        h = T || g ? "limitgaptip-2" : "limitgaptip-3";
                    (m === S.Vl.BUY && _ > q || m === S.Vl.SELL && -_ > q) && (u = !0, c = t(h, {
                        percent: A
                    }) || "")
                }
                if (e === S.W4.MARKET) {
                    var x, E = n();
                    x = (0, s._)(function(e, t) {
                        var r = t.side,
                            n = t.book,
                            i = t.quantity,
                            o = t.total,
                            a = t.marketPrice,
                            u = t.qtyTotalMode,
                            c = t.tradeType,
                            l = t.disableConvert,
                            d = "BUY" === r ? n.asks : n.bids;
                        if (!Array.isArray(d)) return [!1, ""];
                        for (var p = 0, f = 0, m = (0, s._)(u === S.o1.QUANTITY ? [i, 1] : [o, 2], 2), v = m[0], g = void 0 === v ? "0" : v, T = m[1], _ = 0; _ < d.length; _++) {
                            var A = (0, s._)(d[_], 1)[0];
                            if ((p += +d[_][T]) >= +g) {
                                f = +A;
                                break
                            }
                        }
                        if (+g > p) return [!0, e("marketlargegaptip") || ""];
                        var h = (0, y.V$)(c),
                            x = Math.abs((f - +a) / +a),
                            E = Math.round(100 * b.tW);
                        return [x > b.tW, e(h || l ? "market".concat(r.toLowerCase(), "gaptip") : "gaptip-2", {
                            percent: E
                        }) || ""]
                    }(t, (0, i._)({
                        book: E
                    }, o)), 2), u = x[0], c = x[1]
                }
                return [u, c]
            }
            var F = function(e) {
                var t = e.data,
                    r = e.quote,
                    n = e.getLastPriceCb,
                    i = e.marketPrice,
                    o = n(),
                    a = t.total ? +t.total : +(t.quantity || 0) * +i;
                return "USDT" === r ? a : o ? a * o : 0
            };

            function Q(e) {
                var t = e.getI18n,
                    r = e.tradeType,
                    n = e.quote,
                    i = e.base,
                    o = e.side,
                    a = e.showGap,
                    s = e.orderType,
                    u = e.submitOrder,
                    c = e.disableConvert,
                    l = void 0 !== c && c,
                    d = e.getLastPriceCb,
                    p = e.data,
                    f = e.marketPrice,
                    m = e.swtichLimitCb;
                if (!!a && !l && !(0, y.V$)(r)) {
                    var v = s === S.W4.MARKET,
                        _ = s === S.W4.LIMIT;
                    if (_ || v && F({
                            data: p,
                            quote: n,
                            getLastPriceCb: d,
                            marketPrice: f
                        }) <= 1e5) return N(_ ? "modify_spot_limit_order_popup" : "modify_spot_market_order_popup"), {
                        okText: t("try-convert"),
                        cancelText: t("confirm"),
                        onCancel: function(e) {
                            e || (L(_ ? "modify_spot_limit_order_popup_continue" : "modify_spot_market_order_popup_continue"), u())
                        },
                        onOk: function() {
                            L(_ ? "modify_spot_limit_order_popup_convert" : "modify_spot_market_order_popup_convert");
                            var e = o === S.Vl.BUY ? "".concat(n, "/").concat(i) : "".concat(i, "/").concat(n);
                            window.open("".concat((0, T.J1)(g.TP.OTC_URL), "/").concat(e), "_blank")
                        },
                        maskClose: !0,
                        hiddenCheckReminder: !0
                    };
                    if (v) return N("modify_spot_market_order_popup"), {
                        okText: t("try-limit"),
                        cancelText: t("confirm"),
                        onCancel: function(e) {
                            e || (L("modify_spot_market_order_popup_continue"), u())
                        },
                        onOk: function() {
                            L("modify_spot_market_order_popup_convert"), m(p)
                        },
                        hiddenCheckReminder: !0,
                        maskClose: !0
                    }
                }
                return {
                    okText: t("confirm"),
                    cancelText: t("cancel"),
                    onOk: u,
                    hiddenCheckReminder: !0
                }
            }

            function G(e, t) {
                var r = t.orderType,
                    n = t.side,
                    a = t.symbol,
                    s = t.mode,
                    u = t.tradeType,
                    c = t.postOnly,
                    l = t.iceBerg,
                    d = t.timeInForce,
                    p = t.marketPrice,
                    f = t.qtyTotalMode,
                    m = t.tpsl,
                    g = t.balanceWallet,
                    T = t.asset,
                    b = e.stopPrice,
                    h = void 0 === b ? "" : b,
                    x = e.price,
                    E = void 0 === x ? "" : x,
                    I = e.quantity,
                    R = e.stopLimitPrice,
                    C = void 0 === R ? "0" : R,
                    N = e.total,
                    L = e.icebergQty,
                    P = e.tpslTPLimitPrice,
                    k = e.tpslSLTriggerPrice,
                    M = e.tpslSLLimitPrice,
                    D = e.stopType,
                    w = e.trailingDelta,
                    U = {
                        side: n,
                        symbol: a,
                        quantity: I
                    },
                    B = "STOP_LOSS_LIMIT";
                switch (r) {
                    case S.W4.STOPLIMIT:
                        (n === S.Vl.BUY && +h < +p || n === S.Vl.SELL && +h > +p) && (B = "TAKE_PROFIT_LIMIT"), U = (0, o._)((0, i._)({}, U), {
                            type: B,
                            stopPrice: h,
                            price: C
                        }), d && (U.timeInForce = d), l && (U.icebergQty = L);
                        break;
                    case S.W4.STOP_MARKET:
                        B = n === S.Vl.BUY && +E < +p || n === S.Vl.SELL && +E > +p ? "TAKE_PROFIT" : "STOP_LOSS", U = (0, o._)((0, i._)({}, U), {
                            type: B,
                            stopPrice: E
                        });
                        break;
                    case S.W4.LIMIT:
                        U = (0, o._)((0, i._)({}, U), {
                            price: E,
                            type: c ? "LIMIT_MAKER" : "LIMIT"
                        }), d && (U.timeInForce = d), l && (U.icebergQty = L), m && (U.stopType = D, U.tpslTPLimitPrice = P, U.tpslSLTriggerPrice = k, U.tpslSLLimitPrice = M);
                        break;
                    case S.W4.OCO:
                        var q = O(C, d, D);
                        U = (0, i._)((0, o._)((0, i._)({}, U), {
                            price: E,
                            stopPrice: h,
                            isOco: !0
                        }), q);
                        break;
                    case S.W4.TRAILING_STOP:
                        B = !h || n === S.Vl.BUY && +h < +p || n === S.Vl.SELL && +h > +p ? "MARKET" === D ? "TAKE_PROFIT" : "TAKE_PROFIT_LIMIT" : "MARKET" === D ? "STOP_LOSS" : "STOP_LOSS_LIMIT", U = (0, o._)((0, i._)({}, U), {
                            type: B,
                            stopPrice: h,
                            trailingDelta: (0, v.lw)(Number(e.trailingDelta), 100) + "",
                            price: "MARKET" !== D ? C : void 0,
                            stopType: D
                        });
                        break;
                    case S.W4.MARKET:
                        f === S.o1.TOTAL && (delete U.quantity, U = (0, o._)((0, i._)({}, U), {
                            quoteOrderQty: N
                        })), U.type = "MARKET";
                        break;
                    default:
                        U = (0, o._)((0, i._)({}, U), {
                            type: r.toUpperCase()
                        })
                }(0, y.V$)(u) && (U.sideEffectType = function(e) {
                    var t = S.Wb.NO_SIDE_EFFECT;
                    return (0, _.bS)(e) && (0, _.hK)(e) ? S.Wb.AUTO_BORROW_REPAY : ((0, _.bS)(e) && (t = S.Wb.MARGIN_BUY), (0, _.hK)(e) && (t = S.Wb.AUTO_REPAY), t)
                }(s));
                var j = {
                    tradeType: u,
                    quantity: I,
                    side: n,
                    total: N,
                    balanceWallet: g,
                    price: E,
                    asset: T,
                    orderType: r,
                    marketPrice: p,
                    stopLimitPrice: C,
                    stopType: D,
                    stopPrice: h,
                    trailingDelta: w
                };
                (0, A.l)(j);
                var F = (0, A.S)(j);
                return F && (U.assetCollectArg = F), U
            }
            var Y = function(e) {
                var t = e.qtyTotalMode,
                    r = e.side,
                    n = e.payload,
                    i = n.type,
                    o = n.isOco,
                    a = n.quantity,
                    s = n.price,
                    u = n.quoteOrderQty,
                    c = o ? S.W4.OCO : i;
                return r === S.Vl.BUY ? c === S.W4.MARKET && t === S.o1.TOTAL ? "market" : a : r === S.Vl.SELL ? c === S.W4.MARKET ? t === S.o1.TOTAL ? u : "market" : (0, v.lw)(a, s).toFixed(8) : "0"
            };

            function K(e, t, r) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = (0, n._)(c().mark((function e(t, r, n) {
                    var i, o, a, s, u, l, d, m, v, T, A, b, x, E, I, O, C, N, L, P, k, M, D, w, U, B, q, j, F, Q, G, K, V, W, z, H, $, Z, J, X, ee, te, re, ne, ie, oe, ae, se;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                i = !1, o = !1, a = "0", s = "", u = "0", l = "0", d = {}, m = t.side, v = t.sideEffectType, T = n.base, A = n.quote, b = n.userAssets, x = n.tradeType, E = n.orderConfirmStatus, I = n.qtyTotalMode, O = n.isolatedCoeff, C = n.marketPrice, N = n.takerCommission, L = n.isAuto, P = n.spotAsset, k = n.effectType, M = n.crossMargionForceLiquidationBar, D = n.priceIndexMap, w = n.assetleverageBracketList, U = n.isCM2_0, B = E.limitOrder, q = E.marketOrder, j = E.oco, F = E.stopLossOrder, Q = E.autoBorrowRepay, G = E.trailingStopOrder, K = E.stopMarketOrder, V = E.marginAutoTransfer, W = k.marginAutoBorrow, z = k.marginAutoRepay, e.t0 = r, e.next = e.t0 === S.W4.LIMIT ? 14 : e.t0 === S.W4.MARKET ? 16 : e.t0 === S.W4.OCO ? 18 : e.t0 === S.W4.TRAILING_STOP ? 20 : e.t0 === S.W4.STOP_MARKET ? 22 : 24;
                                break;
                            case 14:
                                return i = B, e.abrupt("break", 25);
                            case 16:
                                return i = q, e.abrupt("break", 25);
                            case 18:
                                return i = j, e.abrupt("break", 25);
                            case 20:
                                return i = G, e.abrupt("break", 25);
                            case 22:
                                return i = K, e.abrupt("break", 25);
                            case 24:
                                i = F;
                            case 25:
                                if (!(0, _.F5)(v) || !Q) {
                                    e.next = 35;
                                    break
                                }
                                return H = x === g.Gr.CROSS ? p.iu : f.dJ, e.next = 29, H(t);
                            case 29:
                                a = e.sent, s = a, L && ($ = (P[T] || {}).free, Z = (P[A] || {}).free, J = m === S.Vl.BUY ? Z : $, a = +(a = "".concat(Number(a) - Number(J || 0))) < 0 ? "0" : a), o = +a > 0, e.next = 40;
                                break;
                            case 35:
                                if (!(V && (0, y.V$)(x) && L)) {
                                    e.next = 40;
                                    break
                                }
                                return X = x === g.Gr.CROSS ? p.iu : f.dJ, e.next = 39, X(t);
                            case 39:
                                s = e.sent;
                            case 40:
                                return (0, _.BW)(v) && Q && (te = m === S.Vl.BUY ? T : A, re = null === (ee = b[te]) || void 0 === ee ? void 0 : ee.totalDebt, ne = Y({
                                    qtyTotalMode: I,
                                    side: m,
                                    payload: t
                                }) || "", u = "market" === ne || +re > +ne ? ne : re, o = +re > 0 || o), r !== S.W4.LIMIT && r !== S.W4.MARKET && r !== S.W4.STOPLIMIT || (x === g.Gr.CROSS && (ie = R({
                                    forceLiquidationBar: M,
                                    userAssets: b,
                                    willBorrowAmount: a,
                                    willRepayAmount: u,
                                    payload: t,
                                    base: T,
                                    quote: A,
                                    marketPrice: C,
                                    takerCommission: N,
                                    isCM2_0: U,
                                    priceIndexMap: D,
                                    assetleverageBracketList: w
                                }), l = ie.liquidationPrice, d = ie.asssetChange), x === g.Gr.ISOLATED && (ae = (null === O || void 0 === O || null === (oe = O["".concat(T).concat(A)]) || void 0 === oe ? void 0 : oe.forceLiquidationBar) || 1.1, se = h({
                                    forceLiquidationBar: ae,
                                    userAssets: b,
                                    willBorrowAmount: a,
                                    willRepayAmount: u,
                                    payload: t,
                                    base: T,
                                    quote: A,
                                    marketPrice: C,
                                    takerCommission: N
                                }), l = se.liquidationPrice, d = se.asssetChange)), e.abrupt("return", [i, o, {
                                    willBorrowAmount: a,
                                    willBorrowAmountApiRaw: s,
                                    willRepayAmount: u,
                                    marginAutoBorrow: W,
                                    marginAutoRepay: z,
                                    estLiqPrice: l,
                                    asssetChange: d
                                }]);
                            case 43:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var W = function(e) {
                    var t = (null === e || void 0 === e ? void 0 : e.tpslTPLimitPrice) ? {
                        pendingPrice: null === e || void 0 === e ? void 0 : e.tpslTPLimitPrice,
                        pendingType: "LIMIT_MAKER"
                    } : {
                        pendingPrice: null === e || void 0 === e ? void 0 : e.tpslSLLimitPrice,
                        pendingStopPrice: null === e || void 0 === e ? void 0 : e.tpslSLTriggerPrice,
                        pendingType: "MARKET" === (null === e || void 0 === e ? void 0 : e.stopType) ? "STOP_LOSS" : "STOP_LOSS_LIMIT"
                    };
                    return (0, i._)({
                        symbol: null === e || void 0 === e ? void 0 : e.symbol,
                        workingSide: null === e || void 0 === e ? void 0 : e.side,
                        workingType: null === e || void 0 === e ? void 0 : e.type,
                        workingPrice: null === e || void 0 === e ? void 0 : e.price,
                        workingQuantity: null === e || void 0 === e ? void 0 : e.quantity,
                        workingIcebergQty: null === e || void 0 === e ? void 0 : e.icebergQty,
                        pendingSide: (null === e || void 0 === e ? void 0 : e.side) === S.Vl.BUY ? S.Vl.SELL : S.Vl.BUY,
                        pendingQuantity: null === e || void 0 === e ? void 0 : e.quantity,
                        assetCollectArg: null === e || void 0 === e ? void 0 : e.assetCollectArg
                    }, t)
                },
                z = function(e) {
                    var t = (null === e || void 0 === e ? void 0 : e.side) === S.Vl.BUY ? {
                        pendingAbovePrice: null === e || void 0 === e ? void 0 : e.tpslTPLimitPrice,
                        pendingAboveType: "LIMIT_MAKER",
                        pendingBelowPrice: null === e || void 0 === e ? void 0 : e.tpslSLLimitPrice,
                        pendingBelowStopPrice: null === e || void 0 === e ? void 0 : e.tpslSLTriggerPrice,
                        pendingBelowType: "MARKET" === (null === e || void 0 === e ? void 0 : e.stopType) ? "STOP_LOSS" : "STOP_LOSS_LIMIT"
                    } : {
                        pendingBelowPrice: null === e || void 0 === e ? void 0 : e.tpslTPLimitPrice,
                        pendingBelowType: "LIMIT_MAKER",
                        pendingAbovePrice: null === e || void 0 === e ? void 0 : e.tpslSLLimitPrice,
                        pendingAboveStopPrice: null === e || void 0 === e ? void 0 : e.tpslSLTriggerPrice,
                        pendingAboveType: "MARKET" === (null === e || void 0 === e ? void 0 : e.stopType) ? "STOP_LOSS" : "STOP_LOSS_LIMIT"
                    };
                    return (0, i._)({
                        symbol: null === e || void 0 === e ? void 0 : e.symbol,
                        workingSide: null === e || void 0 === e ? void 0 : e.side,
                        workingType: null === e || void 0 === e ? void 0 : e.type,
                        workingPrice: null === e || void 0 === e ? void 0 : e.price,
                        workingQuantity: null === e || void 0 === e ? void 0 : e.quantity,
                        workingIcebergQty: null === e || void 0 === e ? void 0 : e.icebergQty,
                        pendingSide: (null === e || void 0 === e ? void 0 : e.side) === S.Vl.BUY ? S.Vl.SELL : S.Vl.BUY,
                        pendingQuantity: null === e || void 0 === e ? void 0 : e.quantity,
                        assetCollectArg: null === e || void 0 === e ? void 0 : e.assetCollectArg
                    }, t)
                },
                H = function(e) {
                    if ((null === e || void 0 === e ? void 0 : e.tpslTPLimitPrice) || (null === e || void 0 === e ? void 0 : e.tpslSLTriggerPrice)) {
                        var t = e.tpslTPLimitPrice,
                            r = e.tpslSLLimitPrice,
                            n = void 0 === r ? "" : r,
                            s = e.tpslSLTriggerPrice,
                            u = (0, a._)(e, ["tpslTPLimitPrice", "tpslSLLimitPrice", "tpslSLTriggerPrice"]);
                        return (0, o._)((0, i._)({}, u), {
                            spOrderType: "OTO",
                            tpLimitPrice: t,
                            stopPrice: s,
                            stopLimitPrice: n
                        })
                    }
                    return e
                };

            function $(e, t, r) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = (0, n._)(c().mark((function e(t, r, n) {
                    var i, o;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = r.isOco, o = (0, a._)(r, ["isOco"]), t !== g.Gr.CROSS) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 4, (0, m.O6)(H(r));
                            case 4:
                            case 8:
                            case 12:
                            case 16:
                            case 21:
                            case 25:
                            case 28:
                                return e.abrupt("return", e.sent);
                            case 5:
                                if (t !== g.Gr.ISOLATED) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 8, (0, m.Jq)(H(r));
                            case 9:
                                if (!(null === r || void 0 === r ? void 0 : r.tpslTPLimitPrice) || !(null === r || void 0 === r ? void 0 : r.tpslSLTriggerPrice)) {
                                    e.next = 13;
                                    break
                                }
                                return e.next = 12, (0, m.HP)(z(o));
                            case 13:
                                if (!(null === r || void 0 === r ? void 0 : r.tpslTPLimitPrice) && !(null === r || void 0 === r ? void 0 : r.tpslSLTriggerPrice)) {
                                    e.next = 17;
                                    break
                                }
                                return e.next = 16, (0, m.$_)(W(o));
                            case 17:
                                if (r.stopType && delete r.stopType, !i) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 21, (0, m.sQ)(o);
                            case 22:
                                if (!n) {
                                    e.next = 26;
                                    break
                                }
                                return e.next = 25, (0, m.df)(r);
                            case 26:
                                return e.next = 28, (0, m.Vl)(r);
                            case 29:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        R6t6: (e, t, r) => {
            "use strict";
            r.d(t, {
                y: () => T
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r("bTgu"),
                a = r("GIr8"),
                s = r("Vhyo"),
                u = r("cSeX"),
                c = r("oY5g"),
                l = r("zX7I"),
                d = r("Mnf7"),
                p = r("MDXB"),
                f = r("bQ69"),
                m = r("kU6N"),
                v = r("6A/j"),
                g = r("9mKD"),
                y = function(e) {
                    var t = e.showAcceptTermDialog,
                        r = e.closeTermDialog,
                        m = e.isLight,
                        y = e.getI18n,
                        T = e.submitTerm,
                        _ = e.dontSign,
                        A = void 0 !== _ && _,
                        b = e.onSuccess,
                        S = (0, i.useState)(!1),
                        h = S[0],
                        x = S[1],
                        E = (0, i.useCallback)((function(e) {
                            x(e.currentTarget.checked)
                        }), []),
                        I = (0, g.I)((function(e) {
                            return e.setTermPass
                        })),
                        R = (0, g.I)((function(e) {
                            return e.setIsSigned
                        }));
                    return (0, n.jsxs)(o.A, {
                        visible: t,
                        onMaskClick: r,
                        maskStyles: {
                            zIndex: 1401
                        },
                        sx: {
                            width: "298px",
                            height: "260px",
                            bg: "popupBg",
                            p: "md",
                            borderRadius: "8px",
                            boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 2px rgba(94, 102, 115, 0.9)"
                        },
                        children: [(0, n.jsxs)(a.A, {
                            sx: {
                                flexDirection: "column",
                                alignItems: "center"
                            },
                            children: [m ? (0, n.jsx)(d.A, {
                                size: 45
                            }) : (0, n.jsx)(p.A, {
                                size: 45
                            }), (0, n.jsx)(s.A, {
                                sx: {
                                    color: "t.primary",
                                    fontSize: "16px",
                                    mt: "md"
                                },
                                children: y("dialog-margin-service-terms", {
                                    defaultValue: "Service Terms"
                                })
                            }), (0, n.jsxs)(u.A, {
                                sx: {
                                    mt: 2,
                                    alignItems: "flex-start"
                                },
                                children: [(0, n.jsx)(c.A, {
                                    sx: {
                                        mt: 1
                                    },
                                    checked: h,
                                    onChange: E,
                                    defaultChecked: !1
                                }), (0, n.jsx)(s.A, {
                                    sx: {
                                        color: "t.secondary",
                                        a: {
                                            textDecoration: "none",
                                            color: "primary"
                                        }
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: y("dialog-margin-terms-prompt-new", {
                                            defaultValue: 'I have read and agree to <a target="_blank" href="{{url}}">Margin service terms</a>',
                                            url: f.TP.MARGIN_TERMS_URL
                                        }) || ""
                                    }
                                })]
                            })]
                        }), (0, n.jsxs)(a.A, {
                            width: "100%",
                            mt: "md",
                            children: [(0, n.jsx)(l.A, {
                                flex: "1 0 0",
                                variant: "outline",
                                colorStyle: "second",
                                sz: "l",
                                mr: "xs",
                                onClick: r,
                                children: y("trd-dialog-cancel", {
                                    defaultValue: "Cancel"
                                })
                            }), (0, n.jsx)(l.A, {
                                flex: "1 0 0",
                                sz: "l",
                                disabled: !h,
                                onClick: function() {
                                    (0, v.PC)().then((function() {
                                        A || R(!0), I(!0), T(), r(), b && b()
                                    }))
                                },
                                children: y("trd-dialog-confirm", {
                                    defaultValue: "Confirm"
                                })
                            })]
                        })]
                    })
                },
                T = function(e) {
                    var t = e.isLight,
                        r = e.getI18n,
                        i = e.submitTerm,
                        o = e.dontSign,
                        a = void 0 !== o && o,
                        s = e.onSuccess,
                        u = (0, m.aF)({
                            content: (0, n.jsx)(y, {
                                showAcceptTermDialog: !0,
                                closeTermDialog: function() {
                                    return u()
                                },
                                isLight: t,
                                getI18n: r,
                                submitTerm: i,
                                dontSign: a,
                                onSuccess: s
                            })
                        }).close
                }
        },
        TD0h: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => o
            });
            var n = r("DTvD"),
                i = {
                    notice: function() {},
                    toogleSwitch: function() {},
                    enabledVoice: "0",
                    noticeV2: function() {},
                    toogleSwitchV2: function() {},
                    enabledVoiceV2: "0"
                },
                o = (0, n.createContext)(i)
        },
        PUby: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD"),
                i = r("TD0h");

            function o() {
                var e = (0, n.useContext)(i.t);
                return {
                    notice: e.notice,
                    toogleSwitch: e.toogleSwitch,
                    enabledVoice: e.enabledVoice,
                    noticeV2: e.noticeV2,
                    toogleSwitchV2: e.toogleSwitchV2,
                    enabledVoiceV2: e.enabledVoiceV2
                }
            }
        },
        "92Cd": (e, t, r) => {
            "use strict";
            r.d(t, {
                Vp: () => a,
                CM: () => c,
                wY: () => p,
                r0: () => g
            });
            var n = r("DTvD"),
                i = (r("OlNZ"), r("tSdT")),
                o = r("Vc2Y"),
                a = function() {
                    var e = (0, i.A)().enqueueNotification;
                    (0, n.useEffect)((function() {
                        return o.R.on(o.q.NOTIFICATION, (function(t) {
                            return e(t)
                        }))
                    }))
                },
                s = r("9iv7"),
                u = r("zHUU");

            function c() {
                var e = (0, u.Bl)();
                (0, n.useEffect)((function() {
                    (0, s.j0)(e)
                }), [e])
            }
            r("Qhol");
            var l = r("mguP"),
                d = r("jd1c"),
                p = function() {
                    var e = (0, n.useRef)(null),
                        t = (0, n.useRef)(null),
                        r = (0, n.useState)({
                            x: 0,
                            y: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }),
                        i = r[0],
                        o = r[1];
                    return (0, n.useEffect)((function() {
                        if (window.ResizeObserver) {
                            var r = new d.default((function(e) {
                                var r = (0, l._)(e, 1)[0];
                                t.current && window.cancelAnimationFrame(t.current);
                                var n = function() {
                                    return o(r.contentRect)
                                };
                                window.requestAnimationFrame ? t.current = window.requestAnimationFrame(n) : n()
                            }));
                            return e.current && r.observe(e.current),
                                function() {
                                    t.current && window.cancelAnimationFrame(t.current), r.disconnect()
                                }
                        }
                        return function() {}
                    }), []), [e, i]
                },
                f = r("d12p"),
                m = r("g77m"),
                v = r.n(m),
                g = function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                    var o = (0, n.useRef)((function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
                    }));
                    return o.current = e, (0, n.useCallback)(v().apply(void 0, [function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return o.current.apply(this, t)
                    }].concat((0, f._)(r))), [])
                };
            r("MwhE"), r("ZByt")
        },
        nL0y: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => d
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("mguP"),
                a = r("DTvD"),
                s = r("MD8j"),
                u = r("Qhol"),
                c = r("I3nN"),
                l = r("ROyg"),
                d = function() {
                    var e = (0, s.wA)(),
                        t = (0, a.useState)(!1),
                        r = t[0],
                        d = t[1],
                        p = (0, o._)((0, u.sL)(), 1)[0],
                        f = (0, u.xXR)(),
                        m = (0, s.d4)((function(e) {
                            return e.exchangeInfo.infos
                        }))[p],
                        v = (0, s.d4)(c.makeLastPrice),
                        g = null === f || void 0 === f ? void 0 : f.c,
                        y = null === m || void 0 === m ? void 0 : m.levels,
                        T = 0 === +v;
                    (0, a.useEffect)((function() {
                        if (!r && 0 === +g && !T && Array.isArray(y) && 0 === y.length) {
                            var t = (0, l.getExchangeInfo)([(0, i._)((0, n._)({}, f), {
                                c: v
                            })]).infos;
                            e.exchangeInfo.updateInfos(p, t[p]), d(!0)
                        }
                    }), [r, g, y, T, p, v])
                }
        },
        MwhE: (e, t, r) => {
            "use strict";
            r.d(t, {
                y: () => f
            });
            var n = r("hrAD"),
                i = r("KrVi"),
                o = r("mguP"),
                a = r("DTvD"),
                s = r("VGJx"),
                u = r("3W4Sc"),
                c = r("tM9B"),
                l = r("Qhol"),
                d = r("rOIZ"),
                p = r("bQ69"),
                f = function(e, t) {
                    var r, f, m = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        v = (0, p.D5)(),
                        g = (0, o._)((0, l.sL)(), 1)[0],
                        y = e || g,
                        T = (0, l.O9C)(),
                        _ = (0, l.igz)(y, t).product,
                        A = (0, s.t)(v).tickers,
                        b = _.low,
                        S = _.close,
                        h = _.high,
                        x = _.open,
                        E = _.quoteVolume,
                        I = _.tickSize,
                        R = _.volume,
                        O = T[y],
                        C = (0, a.useMemo)((function() {
                            return (0, d.XV)(I)
                        }), [I]),
                        N = A[y] || {},
                        L = N.lastPrice,
                        P = N.lowPrice,
                        k = void 0 === P ? b : P,
                        M = N.highPrice,
                        D = void 0 === M ? h : M,
                        w = N.openPrice,
                        U = void 0 === w ? x : w,
                        B = N.tickerVolume,
                        q = void 0 === B ? R : B,
                        j = (0, i._)(N, ["lastPrice", "lowPrice", "highPrice", "openPrice", "tickerVolume"]),
                        F = ((0, u.Y)({
                            symbol: y,
                            stream: m ? null : v,
                            limit: 1
                        }).trades[0] || {}).price,
                        Q = void 0 === F ? S : F,
                        G = O && "" !== O ? O : U,
                        Y = m ? L || Q : Q,
                        K = Number(Y) - Number(G),
                        V = [K > 0 ? "+" : "", (G ? K / G * 100 : 0).toFixed(2)].join("");
                    return (0, n._)({
                        lowPrice: k,
                        lastPrice: Y,
                        showPrice: (0, c.ZV)(Y, C),
                        tk: C,
                        highPrice: D,
                        quoteVolume: E,
                        volume: q || R,
                        diffPrice: K,
                        difference: V,
                        tickSize: I,
                        bigThan: (r = Y, f = G, +r >= +f)
                    }, j)
                }
        },
        ZByt: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => f
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("tM9B"),
                a = r("MD8j"),
                s = r("Qhol"),
                u = r("KLjx"),
                c = r("bQ69"),
                l = r("I3nN"),
                d = r("dZkl"),
                p = r("b2AH"),
                f = function() {
                    var e = (0, n._)((0, s.sL)(), 2),
                        t = e[0],
                        r = e[1],
                        f = (0, a.d4)(l.makeLastPrice),
                        m = (0, a.d4)(l.makeTk),
                        v = (0, i.useRef)(f),
                        g = (0, p.CU)().getI18n,
                        y = (0, u.s)(),
                        T = null === y || void 0 === y ? void 0 : y.assetName;
                    (0, i.useEffect)((function() {
                        var e = v.current;
                        t && f && e !== f && T && (v.current = f, document.title = (0, d.q)({
                            getI18n: g,
                            price: (0, o.ZV)(+f, m),
                            symbol: r.join("_"),
                            assetName: T,
                            release_channel: c.Ui
                        }))
                    }), [f, t, m, g, r, T])
                }
        },
        eQl9: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => g
            });
            var n = r("mguP"),
                i = r("mXdx"),
                o = r("DTvD"),
                a = r("zxgP"),
                s = r("Gz4J"),
                u = r("LtgJ"),
                c = r("1tqE"),
                l = r("RfPe"),
                d = r("Qhol"),
                p = r("zHUU"),
                f = r("q+oq"),
                m = [{
                    title: "trd-margin-tutorial-v-1",
                    video: {
                        en: "eygx6c0mpu?videoFoam=true",
                        zh: "81epvrfj2f",
                        ru: "7z9otsofpv"
                    },
                    href: "360030851071"
                }, {
                    title: "trd-margin-tutorial-v-2",
                    video: {
                        en: "i8x57p13sq",
                        zh: "l2qonr4954"
                    },
                    href: "b4e9e6ad70934bd082e8e09e33e69513"
                }, {
                    title: "trd-margin-tutorial-v-3",
                    video: {
                        en: "jks5iirr7j",
                        zh: "zo8rxci4pl",
                        ru: "d6czr9asoa"
                    },
                    href: "40f4959a94ec450ba3d6ad6da9c7c44b"
                }, {
                    title: "trd-margin-tutorial-v-4",
                    video: {
                        en: "aq64mavcg8",
                        zh: "q1kj7xlh1c",
                        ru: "ocldlmx7e8"
                    },
                    href: "c5124a83ca4c48468115a5ac7ce7bc24"
                }, {
                    title: "trd-margin-tutorial-v-5",
                    video: {
                        en: "5f124myal9"
                    },
                    href: "85286755ac844e39a1c1cc286b652bda"
                }],
                v = function(e) {
                    var t = e.onClose,
                        r = e.isMobile,
                        u = void 0 !== r && r,
                        v = e.showNextTime,
                        g = (0, d.ok2)().getI18n,
                        y = (0, p.uU)(),
                        T = (0, n._)((0, f.T)("trd-margin-tutorial-force"), 2),
                        _ = T[0],
                        A = T[1],
                        b = (0, o.useCallback)((function(e) {
                            A(e)
                        }), [A]);
                    return (0, i.jsxs)("div", {
                        style: {
                            padding: u ? "0px 15px 15px" : "0px 24px 24px"
                        },
                        children: [(0, i.jsxs)("div", {
                            style: {
                                padding: u ? "14px 0px" : "18px 0px",
                                color: "var(--color-PrimaryText)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [(0, i.jsx)("div", {
                                style: {
                                    lineHeight: "28px",
                                    fontWeight: "600",
                                    fontSize: u ? "18px" : "20px"
                                },
                                children: g("trd-margin-tutorial-title-1")
                            }), (0, i.jsx)(c.A, {
                                style: {
                                    fontSize: u ? "20px" : "24px",
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return t()
                                }
                            })]
                        }), (0, i.jsx)("div", {
                            style: {
                                lineHeight: "22px",
                                color: "var(--color-PrimaryText)",
                                fontSize: "14px",
                                marginBottom: "16px"
                            },
                            children: g("trd-margin-tutorial-tip")
                        }), (0, i.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "16px",
                                overflowY: "auto",
                                maxHeight: "55vh"
                            },
                            children: [m.map((function(e) {
                                var t = e.title,
                                    r = e.video,
                                    n = e.href;
                                return (0, i.jsxs)("div", {
                                    style: {
                                        width: u ? "100%" : "240px"
                                    },
                                    children: [(0, i.jsx)(l.A, {
                                        path: r[y] || r.en
                                    }), (0, i.jsx)("a", {
                                        target: "_blank",
                                        href: "/support/faq/".concat(n),
                                        style: {
                                            lineHeight: "22px",
                                            color: "var(--color-PrimaryText)",
                                            fontSize: "14px",
                                            padding: u ? "12px 0px 0px" : "12px 0px 24px",
                                            textDecoration: "none",
                                            display: "block"
                                        },
                                        children: g(t)
                                    })]
                                })
                            })), (0, i.jsx)("a", {
                                style: u ? {
                                    fontSize: "12px",
                                    lineHeight: "18px",
                                    fontWeight: "500",
                                    color: "var(--color-TextLink)",
                                    textDecoration: "none",
                                    marginTop: "20px"
                                } : {
                                    width: "240px",
                                    height: "136px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--color-Line)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "500",
                                    color: "var(--color-TextLink)",
                                    textDecoration: "none"
                                },
                                target: "_blank",
                                href: "/support/faq/spot-margin-trading?c=3&navId=3#16",
                                children: g("trd-guide-guidelink")
                            })]
                        }), (v || u) && (0, i.jsxs)("div", {
                            style: {
                                paddingTop: "24px",
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap"
                            },
                            children: [v && (0, i.jsx)(a.A, {
                                checked: _,
                                onChange: function(e, t) {
                                    return b(t)
                                },
                                sz: "md",
                                style: {
                                    lineHeight: "30px"
                                },
                                children: g("trd-not-display")
                            }), (0, i.jsx)(s.A, {
                                style: {
                                    width: u ? "100%" : "160px"
                                },
                                onClick: function() {
                                    return t()
                                },
                                children: g("trd-dialog-ok")
                            })]
                        })]
                    })
                },
                g = function() {
                    var e = (0, d.QsY)().isMobile,
                        t = (0, u.Z)(),
                        r = t.openModal,
                        n = t.closeModal,
                        a = t.openDrawer,
                        s = t.closeDrawer,
                        c = (0, d.ok2)().getI18n,
                        l = (0, o.useCallback)((function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            e ? a({
                                direction: "bottom",
                                content: (0, i.jsx)(v, {
                                    onClose: s,
                                    isMobile: !0,
                                    showNextTime: t
                                })
                            }) : r({
                                maskClose: !1,
                                content: (0, i.jsx)(v, {
                                    onClose: n,
                                    showNextTime: t
                                }),
                                className: "[&_.bn-modal-wrap]:!w-[816px] z-[1999]"
                            })
                        }), [c, e]);
                    return l
                }
        },
        "3TJ4": (e, t, r) => {
            "use strict";
            r.d(t, {
                YR: () => a,
                ai: () => o,
                hy: () => i
            });
            var n = r("wtFP"),
                i = function(e) {
                    var t = e.tradeType;
                    (0, n.u4)("$WebClick", {
                        module: "market",
                        $element_id: "coin_info_link",
                        pageName: n.$1[t],
                        df_source: n.Yx[t]
                    })
                },
                o = function() {
                    (0, n.u4)("$WebClick", {
                        module: "market",
                        $element_id: "pre_market",
                        element_id: "pre_market"
                    })
                },
                a = function() {
                    (0, n.u4)("$WebClick", {
                        module: "market",
                        $element_id: "pre_market_guidelines_ok",
                        element_id: "pre_market_guidelines_ok"
                    })
                }
        },
        "d/69": (e, t, r) => {
            "use strict";
            r.d(t, {
                CW: () => A,
                Ch: () => g,
                ID: () => d,
                N4: () => E,
                PG: () => _,
                Qu: () => x,
                YY: () => c,
                Z: () => T,
                es: () => a,
                g$: () => f,
                hr: () => l,
                jS: () => m,
                jT: () => h,
                kM: () => p,
                l7: () => s,
                ok: () => o,
                pf: () => S,
                rc: () => b,
                y2: () => u,
                yt: () => v,
                z6: () => y
            });
            var n = r("Qhol"),
                i = r("bQ69"),
                o = function(e) {
                    return (0, n.ok2)("trd-market", e)
                },
                a = function() {
                    return !0
                },
                s = 300,
                u = "all",
                c = "FAVORITES",
                l = "Pre-Market",
                d = "HOLDING",
                p = "newListing",
                f = "BTC",
                m = "Margin",
                v = "ETF",
                g = "BOTH",
                y = "Zones",
                T = "Grid",
                _ = (i.Gr.CROSS, i.Gr.ISOLATED, i.pI, i.vf, i.is, i.hS, i.dQ, ["ETH", "BTC", "BNB"]),
                A = ["", "ETH", "BTC", "BNB", "TUSD", "USDC", "FDUSD", "USDT"],
                b = 1e3,
                S = 1e4,
                h = 1e5,
                x = {
                    first: {
                        flex: "5 1 0",
                        justifyContent: "flex-start",
                        minWidth: "122px",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "70%"
                    },
                    second: {
                        flex: "3 1 0",
                        minWidth: "calc(100% - 122px)",
                        justifyContent: "flex-end",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "70%",
                        paddingRight: "0px"
                    },
                    third: {
                        flex: "5 1 0",
                        minWidth: "60px",
                        justifyContent: "flex-end",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "70%"
                    },
                    fourth: {
                        flex: "5 1 0",
                        minWidth: "60px",
                        justifyContent: "flex-end",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "70%"
                    }
                },
                E = {
                    first: {
                        flex: "5 1 0",
                        justifyContent: "flex-start",
                        minWidth: "120px",
                        flexWrap: "nowrap"
                    },
                    second: {
                        flex: "3 1 0",
                        minWidth: "165px",
                        justifyContent: "flex-end",
                        flexWrap: "nowrap"
                    },
                    third: {
                        flex: "5 1 0",
                        minWidth: "60px",
                        justifyContent: "flex-end",
                        flexWrap: "nowrap"
                    },
                    fourth: {
                        flex: "5 1 0",
                        minWidth: "60px",
                        justifyContent: "flex-end",
                        flexWrap: "nowrap"
                    }
                }
        },
        gugO: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => _,
                p: () => y
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("2IQ4"),
                s = r("Vhyo"),
                u = r("GIr8"),
                c = r("hAzz"),
                l = r("g5A9"),
                d = r("3IvL"),
                p = r("Qhol"),
                f = r("bQ69"),
                m = r("Py+1"),
                v = r("jDSn"),
                g = r("7mbB"),
                y = function(e) {
                    var t = e.getI18n;
                    return (0, n.jsxs)(a.A, {
                        children: [(0, n.jsx)(s.A, {
                            children: t("unimmr-tips-1")
                        }), (0, n.jsx)(s.A, {
                            children: t("unimmr-tips-2")
                        }), (0, n.jsx)(s.A, {
                            children: t("unimmr-tips-3")
                        }), (0, n.jsx)(s.A, {
                            children: t("unimmr-tips-4")
                        }), (0, n.jsx)(s.A, {
                            children: t("unimmr-tips-5")
                        }), (0, n.jsx)(s.A, {
                            children: t("unimmr-tips-6")
                        }), (0, n.jsx)(s.A, {
                            children: t("unimmr-tips-7")
                        })]
                    })
                },
                T = function(e) {
                    var t = e.getI18n,
                        r = e.accountInfo,
                        i = void 0 === r ? {} : r,
                        o = e.unimmr,
                        a = e.tradeType,
                        T = i.risk,
                        _ = i.marginLevel,
                        A = i.isUniAccount,
                        b = i.marginBar,
                        S = (0, p.DFo)(),
                        h = S.isPm1_5,
                        x = S.isPm1_0,
                        E = (0, p.h_5)().isCM2_0,
                        I = (0, m.y)(),
                        R = I.totalDebt,
                        O = I.maintenanceMargin,
                        C = I.adjustedEquity,
                        N = a === f.Gr.CROSS && h,
                        L = N ? o : (0, d.Yd)(_),
                        P = N || x ? L : _,
                        k = (0, c.eF)(Number(o)),
                        M = k.color,
                        D = k.edge,
                        w = (0, p.RYR)({
                            tradeType: a
                        }),
                        U = (0, p.ok2)().getI18n,
                        B = (0, n.jsxs)(u.A, {
                            sx: {
                                alignItems: "center"
                            },
                            children: [(0, n.jsx)(l.V, {}), (0, n.jsx)(v.A, {
                                isUniAccount: A,
                                isCM2_0: E,
                                tipContent: T.tip,
                                tradeType: a,
                                marginBar: b,
                                children: (0, n.jsx)(s.A, {
                                    sx: {
                                        fontSize: "12px",
                                        color: "var(--color-PrimaryText)",
                                        marginLeft: "4px",
                                        textDecoration: "underline",
                                        textDecorationStyle: "dotted",
                                        cursor: "pointer"
                                    },
                                    children: U("trd-liquidating")
                                })
                            })]
                        });
                    return (0, n.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "4px"
                        },
                        children: [(0, n.jsx)(v.A, {
                            isUniAccount: A,
                            isCM2_0: E,
                            tipContent: T.tip,
                            tradeType: a,
                            marginBar: b,
                            isPm1_5: N,
                            umTips: N ? (0, n.jsx)(g.z, {
                                getI18n: U,
                                totalDebt: R,
                                maintenanceMargin: O,
                                adjustedEquity: C
                            }) : (0, n.jsx)(y, {
                                getI18n: t
                            }),
                            children: (0, n.jsx)("div", {
                                style: {
                                    cursor: "help",
                                    textDecoration: "underline dotted",
                                    color: "var(--color-TertiaryText)",
                                    fontSize: "12px"
                                },
                                children: A || N ? t("UniMMR") : t("mg-h-margin-level", {}, !1)
                            })
                        }), w ? B : (0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [(0, n.jsx)(l.A, {
                                size: 16,
                                deg: N ? D : T.edge
                            }), (0, n.jsxs)("div", {
                                className: "",
                                style: {
                                    fontSize: "12px",
                                    marginLeft: "4px",
                                    lineHeight: "1.333",
                                    color: N ? M : T.color
                                },
                                children: ["ML", " ", P]
                            })]
                        })]
                    })
                };
            const _ = o().memo(T)
        },
        jDSn: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => h
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r("kcvK"),
                a = r("F05g"),
                s = r("Gz4J"),
                u = r("jwne"),
                c = r("2IQ4"),
                l = r("Vhyo"),
                d = r("GJ+9"),
                p = r("GIr8"),
                f = r("OLW9"),
                m = r("/Cny"),
                v = r("zHUU"),
                g = r("Qhol"),
                y = r("hAzz"),
                T = function(e) {
                    return Array.isArray(e) ? "\u2264 ".concat(e[0]) : "< ".concat(e)
                },
                _ = function(e) {
                    return e[1] ? e[0] ? "".concat(e[0], " < ML ").concat(T(e[1])) : "ML ".concat(T(e[1])) : "ML > ".concat(e[0])
                },
                A = function(e) {
                    var t = e.onClick,
                        r = e.color;
                    return (0, n.jsx)("div", {
                        className: "trd-text-ellipsis",
                        id: "risk-content",
                        onClick: t,
                        style: {
                            maxWidth: "72px",
                            fontSize: "12px",
                            cursor: "pointer",
                            color: r || "var(--color-TertiaryText)"
                        }
                    })
                },
                b = function(e) {
                    var t = e.riskType,
                        r = e.marginBar,
                        i = e.tradeType,
                        o = (0, g.ok2)().getI18n,
                        a = function(e) {
                            return {
                                "3x": {
                                    msgKey: ["trd-risk-ml-msg", "trd-risk-ml-msg-default"],
                                    hideHeader: !1,
                                    content: [{
                                        i18nKey: [],
                                        range: [2],
                                        enable: [!0, !0, !0],
                                        color: "t.buy"
                                    }, {
                                        i18nKey: [],
                                        range: [1.5, [2]],
                                        enable: [!0, !0, !1],
                                        color: "t.buy"
                                    }, {
                                        i18nKey: [],
                                        range: [1.3, [1.5]],
                                        enable: [!0, !1, !1],
                                        color: "t.yellow"
                                    }, {
                                        i18nKey: ["trd-risk-ml-marginCall"],
                                        range: [1.1, [1.3]],
                                        enable: [!0, !1, !1],
                                        tips: "trd-risk-ml-calltip",
                                        color: "t.yellow"
                                    }, {
                                        i18nKey: ["trd-orderForm-liquidated"],
                                        range: [, [1.1]],
                                        enable: null,
                                        tips: "trd-risk-ml-liqtip",
                                        color: "t.sell"
                                    }],
                                    learnMore: !0
                                },
                                "5x": {
                                    msgKey: ["trd-risk-ml-msg", "trd-risk-ml-msg-default"],
                                    hideHeader: !1,
                                    content: [{
                                        i18nKey: [],
                                        range: [2],
                                        enable: [!0, !0, !0],
                                        color: "t.buy"
                                    }, {
                                        i18nKey: [],
                                        range: [1.25, [2]],
                                        enable: [!0, !0, !1],
                                        color: "t.buy"
                                    }, {
                                        i18nKey: [],
                                        range: [1.16, [1.25]],
                                        enable: [!0, !1, !1],
                                        color: "t.yellow"
                                    }, {
                                        i18nKey: ["trd-risk-ml-marginCall"],
                                        range: [1.1, [1.16]],
                                        enable: [!0, !1, !1],
                                        tips: "trd-risk-ml-calltip",
                                        color: "t.sell"
                                    }, {
                                        i18nKey: ["trd-orderForm-liquidated"],
                                        range: [, [1.1]],
                                        enable: null,
                                        tips: "trd-risk-ml-liqtip",
                                        color: "t.third"
                                    }],
                                    learnMore: !0
                                },
                                "10x": {
                                    msgKey: ["trd-risk-ml-msg10x", "trd-risk-ml-msg-default"],
                                    hideHeader: !0,
                                    content: [{
                                        i18nKey: ["trd-risk-ml-marginCall"],
                                        range: [, 1.5],
                                        enable: null,
                                        tips: "trd-risk-ml-medtip",
                                        color: "t.yellow"
                                    }, {
                                        i18nKey: ["trd-orderForm-liquidated"],
                                        range: [, [1]],
                                        enable: null,
                                        tips: "trd-risk-ml-hightip",
                                        color: "t.sell"
                                    }],
                                    learnMore: !0
                                },
                                i10x: {
                                    msgKey: ["trd-risk-ml-msg", "trd-risk-ml-msg-default", "trd-risk-ml-msgiso"],
                                    hideHeader: !1,
                                    content: [{
                                        i18nKey: [],
                                        range: [2],
                                        enable: [!0, !0, !0],
                                        color: "t.buy"
                                    }, {
                                        i18nKey: [],
                                        range: ["IR", [2]],
                                        enable: [!0, !0, !1],
                                        color: "t.buy"
                                    }, {
                                        i18nKey: [],
                                        range: ["MCR", ["IR"]],
                                        enable: [!0, !1, !1],
                                        color: "t.yellow"
                                    }, {
                                        i18nKey: ["trd-risk-ml-marginCall"],
                                        range: ["LR", ["MCR"]],
                                        enable: [!0, !1, !1],
                                        tips: "trd-risk-ml-calltip",
                                        color: "t.yellow"
                                    }, {
                                        i18nKey: ["trd-orderForm-liquidated"],
                                        range: [, ["LR"]],
                                        enable: null,
                                        tips: "trd-risk-ml-liqtip",
                                        color: "t.sell"
                                    }],
                                    learnMore: !0
                                }
                            }[e]
                        }(t),
                        s = a.msgKey,
                        u = a.content,
                        T = a.learnMore,
                        A = a.hideHeader,
                        b = (0, v.Bl)(),
                        S = "/".concat(b, "/support/faq/binance-margin-level-and-risk-control-360030493931");
                    return "Custom" === r ? (0, n.jsxs)(c.A, {
                        sx: {
                            padding: "0 24px 24px"
                        },
                        children: [(0, n.jsxs)(l.A, {
                            sx: {
                                color: "t.primary",
                                fontSize: "14px",
                                lineHeight: "20px"
                            },
                            children: [o((0, y.ed)(i) ? "trd-layout-isolatedMargin" : "trd-layout-crossMargin"), " ".concat(o("trd-customized-leverage", {
                                defaultValue: "Customized Leverage"
                            }))]
                        }), (0, n.jsxs)(c.A, {
                            sx: {
                                color: "t.primary",
                                fontSize: "12px",
                                "& > div:last-of-type": {
                                    display: "inline-block",
                                    margin: "0 8px 0 0"
                                },
                                "& > a": {
                                    textDecoration: "none"
                                }
                            },
                            children: [s.map((function(e) {
                                return (0, n.jsx)(l.A, {
                                    children: o(e)
                                }, e)
                            })), T && (0, n.jsx)(d.A, {
                                target: "_blank",
                                href: S,
                                children: o("trd-learn-more")
                            })]
                        })]
                    }) : (0, n.jsxs)(c.A, {
                        children: [(0, n.jsxs)(l.A, {
                            sx: {
                                color: "t.primary",
                                fontSize: "14px",
                                lineHeight: "20px"
                            },
                            children: [o((0, y.ed)(i) ? "trd-layout-isolatedMargin" : "trd-layout-crossMargin"), " ".concat(r)]
                        }), (0, n.jsxs)(c.A, {
                            sx: {
                                color: "t.primary",
                                marginBottom: "12px",
                                fontSize: "12px",
                                "& > div:last-of-type": {
                                    display: "inline-block",
                                    margin: "0 8px 0 0"
                                },
                                "& > a": {
                                    textDecoration: "none"
                                }
                            },
                            children: [s.map((function(e) {
                                return (0, n.jsx)(l.A, {
                                    children: o(e)
                                }, e)
                            })), T && (0, n.jsx)(d.A, {
                                target: "_blank",
                                href: S,
                                children: o("trd-learn-more")
                            })]
                        }), !A && (0, n.jsxs)(p.A, {
                            sx: {
                                margin: "0px 0 4px",
                                padding: "0 16px",
                                color: "--color-TertiaryText",
                                fontSize: "12px",
                                "& :nth-of-type(n+2)": {
                                    textAlign: "center",
                                    flex: 1
                                }
                            },
                            children: [(0, n.jsx)(l.A, {
                                sx: {
                                    width: "120px"
                                },
                                children: o("trd-level")
                            }), (0, n.jsx)(l.A, {
                                children: o("trd-mg-trade")
                            }), (0, n.jsx)(l.A, {
                                children: o("trd-orderForm-borrow")
                            }), (0, n.jsx)(l.A, {
                                children: o("trd-orderForm-transferout", {
                                    defaultValue: "Transfer out"
                                })
                            })]
                        }), (0, n.jsx)(c.A, {
                            sx: {
                                padding: "0 16px",
                                border: "1px solid",
                                borderColor: "line",
                                borderRadius: "12px",
                                "& .risk-items-content:nth-of-type(n+2)": {
                                    borderTop: "1px solid",
                                    borderColor: "line"
                                }
                            },
                            children: u.map((function(e, t) {
                                var r = e.i18nKey,
                                    i = e.range,
                                    a = e.enable,
                                    s = e.tips,
                                    u = e.color;
                                return (0, n.jsxs)(c.A, {
                                    className: "risk-items-content",
                                    sx: {
                                        padding: "12px 0"
                                    },
                                    children: [(0, n.jsxs)(p.A, {
                                        alignItems: "center",
                                        children: [(0, n.jsxs)(c.A, {
                                            sx: {
                                                width: "120px"
                                            },
                                            children: [(0, n.jsx)(l.A, {
                                                sx: {
                                                    color: "t.primary",
                                                    fontSize: "14px",
                                                    lineHeight: "20px"
                                                },
                                                children: _(i)
                                            }), r.map((function(e) {
                                                return (0, n.jsx)(l.A, {
                                                    fontSize: 12,
                                                    color: u,
                                                    children: o(e)
                                                }, e)
                                            }))]
                                        }), (0, n.jsxs)(p.A, {
                                            sx: {
                                                alignItems: "center",
                                                flex: 1
                                            },
                                            children: [a && a.map((function(e, t) {
                                                return e ? (0, n.jsx)(f.A, {
                                                    size: 12,
                                                    sx: {
                                                        color: "buy",
                                                        flex: 1
                                                    }
                                                }, "enable-".concat(t)) : (0, n.jsx)(m.A, {
                                                    size: 12,
                                                    sx: {
                                                        color: "t.third",
                                                        flex: 1
                                                    }
                                                }, "enable-".concat(t))
                                            })), !a && s && (0, n.jsx)(l.A, {
                                                sx: {
                                                    textAlign: "left",
                                                    fontSize: "12px",
                                                    color: "t.primary"
                                                },
                                                children: o(s)
                                            })]
                                        })]
                                    }), a && s && (0, n.jsx)(l.A, {
                                        sx: {
                                            textAlign: "left",
                                            paddingLeft: "120px",
                                            fontSize: "12px",
                                            color: "t.primary"
                                        },
                                        children: o(s)
                                    })]
                                }, "content-".concat(t))
                            }))
                        })]
                    })
                },
                S = function(e) {
                    var t = e.isUniAccount,
                        r = e.isCM2_0,
                        c = e.tradeType,
                        l = e.marginBar,
                        d = e.umTips,
                        p = e.children,
                        f = e.color,
                        m = e.isPm1_5,
                        v = e.boxStyle,
                        T = e.className,
                        _ = (0, i.useState)(!1),
                        S = _[0],
                        h = _[1],
                        x = (0, g.ok2)().getI18n,
                        E = (0, g.QsY)().isMobile;
                    if (t || m) return (0, n.jsx)(o.A, {
                        offset: 4,
                        tooltips: d || (0, n.jsx)("div", {
                            style: {
                                whiteSpace: "pre-line"
                            },
                            dangerouslySetInnerHTML: {
                                __html: "".concat(x("trd-margin-unimmr-tip-3")).concat(x("trd-margin-unimmr-tip-4")) || ""
                            }
                        }),
                        placement: "bottom",
                        arrow: !0,
                        enablePortal: !0,
                        useReactPopper: !0,
                        children: p || (0, n.jsx)(A, {
                            color: f
                        })
                    });
                    var I = function(e) {
                        var t = e.isCM2_0,
                            r = e.tradeType,
                            n = e.marginBar;
                        return (0, y.ed)(r) ? "i10x" : t ? "10x" : "5x" === n ? "5x" : "3x"
                    }({
                        isCM2_0: r,
                        tradeType: c,
                        marginBar: l
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [p ? (0, n.jsx)("div", {
                            style: v,
                            className: T,
                            onClick: function() {
                                return h(!0)
                            },
                            children: p
                        }) : (0, n.jsx)(A, {
                            onClick: function() {
                                return h(!0)
                            },
                            color: f
                        }), E ? (0, n.jsx)(a.A, {
                            visible: S,
                            direction: "bottom",
                            onClose: function() {
                                return h(!1)
                            },
                            children: (0, n.jsxs)("div", {
                                className: "px-[15px] pb-[34px]",
                                children: [(0, n.jsx)("div", {
                                    className: "t-headline4 py-[14px]",
                                    style: {
                                        color: "var(--color-textPrimary)"
                                    },
                                    children: x("trd-risk-ml-title")
                                }), (0, n.jsx)(b, {
                                    riskType: I,
                                    marginBar: l,
                                    tradeType: c
                                }), (0, n.jsx)("div", {
                                    className: "py-[16px]",
                                    children: (0, n.jsx)(s.A, {
                                        type: "primary",
                                        onClick: function() {
                                            return h(!1)
                                        },
                                        className: "w-full",
                                        children: x("trd-dialog-ok", {
                                            defaultValue: "OK"
                                        })
                                    })
                                })]
                            })
                        }) : (0, n.jsxs)(u.Ay, {
                            visible: S,
                            onClose: function() {
                                return h(!1)
                            },
                            modalSize: "middle",
                            children: [(0, n.jsx)(u.Ay.Header, {
                                showNext: !0,
                                onNextClick: function() {
                                    return h(!1)
                                },
                                children: (0, n.jsx)("div", {
                                    className: "t-headline5",
                                    style: {
                                        color: "var(--color-textPrimary)"
                                    },
                                    children: x("trd-risk-ml-title")
                                })
                            }), (0, n.jsx)(u.Ay.Content, {
                                style: {
                                    maxHeight: "100%",
                                    paddingTop: "0"
                                },
                                children: (0, n.jsx)(b, {
                                    riskType: I,
                                    marginBar: l,
                                    tradeType: c
                                })
                            })]
                        })]
                    })
                };
            const h = (0, i.memo)(S)
        },
        ugWk: (e, t, r) => {
            "use strict";
            r.d(t, {
                Rh: () => a,
                Rn: () => u,
                Vi: () => s,
                Vl: () => i,
                cP: () => n,
                uW: () => o,
                zI: () => c
            });
            var n = {
                    FUT_TRANSTER: "FUT_TRANSTER",
                    TRANSTER: "TRANSTER",
                    BORROW: "BORROW",
                    REPAY: "REPAY",
                    ADJUST: "ADJUST",
                    COOLOFF: "COOLOFF"
                },
                i = {
                    BUY: "BUY",
                    SELL: "SELL"
                },
                o = 8,
                a = "support/articles/115000583311",
                s = "redeem",
                u = "subscribe",
                c = {
                    AUTO: "AUTO",
                    MANUAL: "MANUAL",
                    POPULAR: "POPULAR"
                }
        },
        Ykh1: (e, t, r) => {
            "use strict";
            r.d(t, {
                d9: () => n.d,
                iq: () => m,
                iM: () => Ir,
                N: () => k,
                PA: () => lr,
                N8: () => pr,
                bY: () => Pr,
                wL: () => Lr,
                lS: () => Cr,
                OK: () => mr,
                ep: () => hr,
                _h: () => Er,
                $z: () => Rr
            });
            var n = r("cYwZ"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("MD8j"),
                s = r("Qhol"),
                u = r("/Wc2"),
                c = r("J+BU"),
                l = r("FkjH"),
                d = (l.A.registerActionHandle, l.A.constants, c.W4.LIMIT, c.W4.STOPLIMIT, c.W4.OCO, r("mguP")),
                p = r("C7Nc"),
                f = r("hAzz");

            function m() {
                var e, t = (0, s.dUb)(),
                    r = (0, p.TK)().userAssets,
                    n = (0, d._)((0, s.Grl)(), 1)[0],
                    i = (0, f.V$)(n) ? r : t;
                return null === i || void 0 === i || null === (e = i.BNB) || void 0 === e ? void 0 : e.free
            }
            var v = r("iKvg"),
                g = r("hrAD"),
                y = r("qoEP"),
                T = r("tM9B"),
                _ = r("ebQf"),
                A = {
                    tpslTPLimitPrice: {
                        value: "",
                        invalid: !1
                    },
                    tpslSLTriggerPrice: {
                        value: "",
                        invalid: !1
                    },
                    tpslSLLimitPrice: {
                        value: "",
                        invalid: !1
                    }
                },
                b = function(e) {
                    var t = e.marketPrice,
                        r = e.orderType,
                        n = e.side,
                        i = e.price,
                        o = e.value,
                        a = e.tickSize;
                    if (r === c.W4.LIMIT && o) {
                        if (void 0 !== a && +o < +a) return {
                            invalid: !0,
                            errorMsg: "priceerr"
                        };
                        if (n === c.Vl.BUY && +i >= +t && +o <= +t) return {
                            invalid: !0,
                            errorMsg: "buy-tplessmarket"
                        };
                        if (n === c.Vl.BUY && +i < +t && +o <= +i) return {
                            invalid: !0,
                            errorMsg: "buy-tplesswork"
                        };
                        if (n === c.Vl.SELL && +i > +t && +o >= +i) return {
                            invalid: !0,
                            errorMsg: "sell-tplargework"
                        };
                        if (n === c.Vl.SELL && +i <= +t && +o >= +t) return {
                            invalid: !0,
                            errorMsg: "sell-tplargemarket"
                        }
                    }
                    return {
                        invalid: !1,
                        errorMsg: ""
                    }
                },
                S = function(e) {
                    var t = e.marketPrice,
                        r = e.orderType,
                        n = e.side,
                        i = e.price,
                        o = e.value,
                        a = e.tpslSLLimitPrice,
                        s = e.tickSize,
                        u = void 0 === s ? "0" : s;
                    if (r === c.W4.LIMIT && void 0 !== a && a && !o) return {
                        invalid: !0,
                        errorMsg: "priceerr"
                    };
                    if (r === c.W4.LIMIT && o) {
                        if (+o < +u) return {
                            invalid: !0,
                            errorMsg: "priceerr"
                        };
                        if (n === c.Vl.BUY && +i >= +t && (+o >= +t || +o > +i)) return {
                            invalid: !0,
                            errorMsg: "buy-triggerlarge"
                        };
                        if (n === c.Vl.BUY && +i < +t && +o >= +i) return {
                            invalid: !0,
                            errorMsg: "buy-triggerlargework"
                        };
                        if (n === c.Vl.SELL && +i > +t && +o <= +i) return {
                            invalid: !0,
                            errorMsg: "sell-triggerlesswork"
                        };
                        if (n === c.Vl.SELL && +i <= +t && (+o <= +t || +o < +i)) return {
                            invalid: !0,
                            errorMsg: "sell-triggerless"
                        }
                    }
                    return {
                        invalid: !1,
                        errorMsg: ""
                    }
                },
                h = {
                    tpslTPLimitPrice: function(e, t) {
                        var r = t.marketPrice,
                            n = t.orderType,
                            i = t.side,
                            o = t.tickSize,
                            a = e.tpslTPLimitPrice,
                            s = void 0 === a ? "" : a,
                            u = e.price,
                            c = b({
                                marketPrice: r,
                                orderType: n,
                                side: i,
                                price: void 0 === u ? "0" : u,
                                value: s,
                                tickSize: o
                            }),
                            l = c.invalid,
                            d = c.errorMsg;
                        return l ? [!1, {
                            value: s,
                            invalid: l,
                            errorMsg: d
                        }] : [!0, {}]
                    },
                    tpslSLTriggerPrice: function(e, t) {
                        var r = t.marketPrice,
                            n = t.orderType,
                            i = t.side,
                            o = t.tickSize,
                            a = e.tpslSLTriggerPrice,
                            s = void 0 === a ? "" : a,
                            u = e.tpslSLLimitPrice,
                            c = void 0 === u ? "" : u,
                            l = e.price,
                            d = S({
                                marketPrice: r,
                                orderType: n,
                                side: i,
                                price: void 0 === l ? "0" : l,
                                value: s,
                                tpslSLLimitPrice: c,
                                tickSize: o
                            }),
                            p = d.invalid,
                            f = d.errorMsg;
                        return p ? [!1, {
                            value: s,
                            invalid: p,
                            errorMsg: f
                        }] : [!0, {}]
                    },
                    tpslSLLimitPrice: function(e, t) {
                        var r = t.tickSize,
                            n = e.tpslSLTriggerPrice,
                            i = void 0 === n ? "" : n,
                            o = e.tpslSLLimitPrice,
                            a = void 0 === o ? "" : o;
                        return i && !a || "" !== a && +a < +r ? [!1, {
                            value: a,
                            invalid: !0,
                            errorMsg: "priceerr"
                        }] : [!0, {}]
                    }
                },
                x = r("AUgw"),
                E = r("mXdx"),
                I = r("bQ69"),
                R = r("GIr8"),
                O = r("Vhyo"),
                C = r("GJ+9"),
                N = r("YRJq"),
                L = r("Dj9W"),
                P = "support/faq/different-order-types-in-spot-trading-8a2973eef1de429dbfad38ab878aa3eb";

            function k(e) {
                var t = e.ref,
                    r = e.step,
                    n = e.side,
                    o = (0, N.h1)().putCoachMarkStep,
                    u = (0, L.o)().getI18n,
                    c = (0, s.CUO)().getI18n,
                    l = (0, a.d4)((function(e) {
                        return e.setting.layout
                    })),
                    d = "/".concat(P);
                (0, i.useEffect)((function() {
                    if (2 === r) {
                        var e = (0, E.jsx)(R.A, {
                            children: (0, E.jsxs)(O.A, {
                                children: [u("guide-content"), (0, E.jsx)(C.A, {
                                    href: d,
                                    target: "_blank",
                                    sx: {
                                        color: "t.grey800",
                                        ml: 1,
                                        display: "inline-block",
                                        textDecoration: "underline"
                                    },
                                    children: u("guide-link")
                                })]
                            })
                        });
                        if ("BUY" !== n) return;
                        return o("tradeGuide", 2, {
                            title: u("guide-title"),
                            content: e,
                            target: t,
                            position: l === I.Pv ? "bottom-end" : "left-start"
                        })
                    }
                    return o("tradeGuide", r, {
                        title: c("dot-title"),
                        content: c("dot-content"),
                        target: t,
                        position: l === I.Pv ? "bottom-end" : "left-start",
                        faqSlot: [{
                            text: "FeeFaq",
                            link: "/support/faq/what-is-binance-spot-trading-fee-and-how-to-calculate-e85d6e703b874674840122196b89780a"
                        }, {
                            text: "MoreFaq",
                            link: "/support/faq/spot-margin-trading?c=3&navId=3"
                        }]
                    })
                }), [t, r, c, u])
            }
            var M = r("wmlU"),
                D = r("5s+a"),
                w = (0, g._)({
                    price: function(e, t) {
                        var r = t.side,
                            n = t.marketPrice,
                            i = t.tickSize,
                            o = e.price,
                            a = void 0 === o ? "0" : o,
                            s = e.stopPrice;
                        if (+a < +i) return [!1, {
                            value: a,
                            invalid: !0,
                            errorMsg: "priceerr"
                        }];
                        if (s) {
                            var u = +a <= +n,
                                l = +a >= +n;
                            if (r === c.Vl.BUY && l) return [!1, {
                                value: a,
                                invalid: !0,
                                errorMsg: "pltmarket"
                            }];
                            if (r === c.Vl.SELL && u) return [!1, {
                                value: a,
                                invalid: !0,
                                errorMsg: "pgtmarket"
                            }]
                        }
                        return [!0, {}]
                    },
                    stopPrice: function(e, t) {
                        var r = t.side,
                            n = t.tickSize,
                            i = t.marketPrice,
                            o = t.orderType,
                            a = e.stopPrice,
                            s = void 0 === a ? "0" : a,
                            u = e.price,
                            l = void 0 === u ? "" : u;
                        if (o === c.W4.TRAILING_STOP && !s && "0" !== s) return [!0, {
                            value: s,
                            invalid: !1
                        }];
                        if (+s < +n) return [!1, {
                            value: s,
                            invalid: !0,
                            errorMsg: "priceerr"
                        }];
                        if (l) {
                            var d = +s <= +l,
                                p = +s >= +l,
                                f = +s <= +i,
                                m = +s >= +i;
                            if (r === c.Vl.BUY && (d || f)) return [!1, {
                                value: s,
                                invalid: !0,
                                errorMsg: d ? "stgtbuy" : "stgtmarket"
                            }];
                            if (r === c.Vl.SELL && (p || m)) return [!1, {
                                value: s,
                                invalid: !0,
                                errorMsg: p ? "stltsell" : "stltmarket"
                            }]
                        }
                        return [!0, {}]
                    },
                    stopLimitPrice: function(e, t) {
                        var r = t.tickSize,
                            n = e.stopLimitPrice || "0";
                        return +n < +r ? [!1, {
                            value: n,
                            invalid: !0,
                            errorMsg: "priceerr"
                        }] : [!0, {}]
                    },
                    quantity: function(e, t) {
                        var r = t.minTrade,
                            n = t.mostAmount,
                            i = e.quantity || "0";
                        return +i < +r ? [!1, {
                            value: i,
                            invalid: !0,
                            errorMsg: "quantityerr"
                        }] : +i > +n ? [!1, {
                            value: i,
                            invalid: !0,
                            errorMsg: "insufficientBalance"
                        }] : [!0, {}]
                    },
                    total: function(e, t) {
                        var r = t.minTotal,
                            n = t.mostTotalAmount,
                            i = e.total || "0";
                        return +i < +r ? [!1, {
                            value: i,
                            invalid: !0,
                            errorMsg: "totalerr"
                        }] : +i > +n ? [!1, {
                            value: i,
                            invalid: !0,
                            errorMsg: "insufficientBalance"
                        }] : [!0, {}]
                    },
                    icebergQty: function(e) {
                        var t = e.icebergQty,
                            r = void 0 === t ? "0" : t,
                            n = e.quantity;
                        return 0 === +r ? [!1, {
                            value: r,
                            invalid: !0,
                            errorMsg: "quantityerr"
                        }] : +r >= +(void 0 === n ? "" : n) ? [!1, {
                            value: r,
                            invalid: !0,
                            errorMsg: "icebergerror"
                        }] : [!0, {}]
                    },
                    trailingDelta: function(e) {
                        var t = e.trailingDelta;
                        return !t || Number(t) < .1 ? [!1, {
                            value: t,
                            invalid: !0,
                            errorMsg: "delta-error"
                        }] : [!0, {}]
                    }
                }, h);
            const U = function(e, t, r) {
                for (var n = !0, i = {}, o = function(e, t) {
                        return e === c.o1.QUANTITY && delete t.total, e === c.o1.TOTAL && delete t.quantity, t
                    }(r.qtyTotalMode, e), a = Object.keys(o), s = 0; s < a.length; s++) {
                    var u = w[a[s]];
                    if ("function" === typeof u) {
                        var l = (0, d._)(u(o, r), 2),
                            p = l[0],
                            f = l[1],
                            m = f.value,
                            g = f.invalid,
                            y = f.errorMsg;
                        if (!(n = n && p)) {
                            i = (0, v._)({}, a[s], {
                                value: m,
                                invalid: g,
                                errorMsg: t(y || "")
                            });
                            break
                        }
                    }
                }
                return [n, i]
            };
            var B = r("Ml1i"),
                q = r("JyEq"),
                j = r("S+0I"),
                F = r("jbFV"),
                Q = r.n(F),
                G = r("lW1t"),
                Y = r("/jvT"),
                K = r("qgOy"),
                V = r("9mKD"),
                W = r("gy+1"),
                z = r("cDUC"),
                H = r("eWL+"),
                $ = r("p4tc"),
                Z = r("ttBN"),
                J = r("KrVi"),
                X = r("2IQ4"),
                ee = r("zHUU"),
                te = r("TR7n"),
                re = r("nxXE"),
                ne = r("wtFP"),
                ie = r("Xeyi"),
                oe = r("fAV+"),
                ae = function(e) {
                    var t = e.base,
                        r = e.quote,
                        n = e.tradeType,
                        o = e.preFixKey,
                        a = e.sx,
                        u = e.hideSign,
                        c = e.isPlaceorder,
                        l = void 0 !== c && c,
                        d = e.onClose,
                        p = (0, s.ok2)().getI18n,
                        f = (0, ee.Bl)(),
                        m = (0, oe.Q)(t, r),
                        v = m.busdQuotePair,
                        T = m.hasFdusdPair,
                        _ = (0, re.o)();
                    (0, te.H)({
                        cdnHost: I.K5,
                        host: I.dM,
                        loadUikitStyle: !1
                    });
                    var A = (0, i.useCallback)((function() {
                        var e, i = v ? "".concat(t, "/FDUSD") : "FDUSD/".concat(r);
                        ((0, ne.u4)("$WebClick", {
                            module: "convert_to_fdusd_hint",
                            $element_id: T ? "Trade_promo_pairs" : "convert_now",
                            df_source: (0, ie.Vq)(n) ? "spot" : "margin",
                            pageName: (0, ie.Vq)(n) ? "spot_trading" : "margin_trading"
                        }), l && (0, z.yA)("place_new_order", "tradeArea", "ConvertToFDUSD"), T) ? _({
                            resPathList: [i.split("/").join("_")]
                        }): null === window || void 0 === window || null === (e = window.CONVERT_WIDGET) || void 0 === e || e.open({
                            source: "SPOT_WEB",
                            fromCoin: "BUSD",
                            targetCoin: "FDUSD",
                            walletType: "SPOT",
                            lang: f
                        });
                        d && d()
                    }), [v, T, f, r, t, n]);
                    return (0, E.jsxs)(X.A, {
                        sx: (0, y._)((0, g._)({}, a), {
                            cursor: "pointer"
                        }),
                        as: "span",
                        onClick: A,
                        children: [p("".concat(o).concat(T ? "" : "-un")), u ? "" : ">"]
                    })
                };
            const se = o().memo(ae);
            var ue, ce, le = r("vTbz"),
                de = r("Olbk"),
                pe = r("tgKj"),
                fe = r("kcvK"),
                me = r("WHzC"),
                ve = r("TUKb"),
                ge = r("trTv"),
                ye = function(e) {
                    var t, r, n, i, o = e.base,
                        a = e.quote,
                        u = e.userAssets,
                        c = e.asssetChange,
                        l = e.tickSizePrecision,
                        d = (e.minQtyPrecision, e.estLiqPrice),
                        p = c.quoteDebt,
                        f = c.quoteTotal,
                        m = c.baseTotal,
                        v = c.baseDebt,
                        g = (0, T.tv)((0, K.J8)(null === (t = u[a]) || void 0 === t ? void 0 : t.totalDebt, 8)),
                        y = (0, T.tv)((0, K.J8)(null === (r = u[a]) || void 0 === r ? void 0 : r.totalAmount, 8)),
                        _ = (0, T.tv)((0, K.J8)(null === (n = u[o]) || void 0 === n ? void 0 : n.totalAmount, 8)),
                        A = (0, T.tv)((0, K.J8)(null === (i = u[o]) || void 0 === i ? void 0 : i.totalDebt, 8)),
                        b = (0, T.tv)((0, K.J8)(p, 8)),
                        S = (0, T.tv)((0, K.J8)(f, 8)),
                        h = (0, T.tv)((0, K.J8)(m, 8)),
                        x = (0, T.tv)((0, K.J8)(v, 8)),
                        I = (0, s.ok2)().getI18n;
                    return (0, E.jsxs)(de.Ay, {
                        className: "text-[14px] pt-[16px] pb-[8px] mb-[16px]",
                        style: {
                            borderBottom: "1px solid",
                            borderBottomColor: "var(--color-Line)"
                        },
                        children: [(0, E.jsxs)(pe.A, {
                            className: "justify-between items-center mb-[8px]",
                            children: [(0, E.jsxs)(pe.A, {
                                className: "flex-col",
                                children: [(0, E.jsx)(de.Ay, {
                                    className: "text-primaryText font-medium leading-[22px]",
                                    children: I("trd-tradeTransaction-asset")
                                }), (0, E.jsxs)(de.Ay, {
                                    className: "text-TertiaryText text-[12px] leading-[18px]",
                                    children: [I("trd-asset-before", {
                                        defaultValue: "before"
                                    }), " &", " ", I("trd-asset-after", {
                                        defaultValue: "after"
                                    })]
                                })]
                            }), (0, E.jsxs)(pe.A, {
                                className: "flex-col",
                                children: [(0, E.jsxs)(pe.A, {
                                    className: "flex-row flex justify-end items-center leading-[22px]",
                                    style: {
                                        justifyContent: "flex-end"
                                    },
                                    children: [(0, E.jsx)(de.Ay, {
                                        className: "text-TertiaryText",
                                        children: _
                                    }), (0, E.jsx)(ge.A, {
                                        className: "text-TertiaryText mr-[4px] ml-[4px]"
                                    }), (0, E.jsxs)(de.Ay, {
                                        className: "text-primaryText font-medium",
                                        children: [h, " ", o]
                                    })]
                                }), (0, E.jsxs)(pe.A, {
                                    className: "flex-row flex justify-end items-center leading-[22px]",
                                    style: {
                                        justifyContent: "flex-end"
                                    },
                                    children: [(0, E.jsx)(de.Ay, {
                                        className: "text-TertiaryText",
                                        children: y
                                    }), (0, E.jsx)(ge.A, {
                                        className: "text-TertiaryText mr-[4px] ml-[4px]"
                                    }), (0, E.jsxs)(de.Ay, {
                                        className: "text-primaryText font-medium",
                                        children: [S, " ", a]
                                    })]
                                })]
                            })]
                        }), (0, E.jsxs)(pe.A, {
                            className: "justify-between items-center mb-[8px]",
                            children: [(0, E.jsxs)(pe.A, {
                                className: "flex-col",
                                children: [(0, E.jsx)(de.Ay, {
                                    className: "text-primaryText font-medium leading-[22px]",
                                    children: I("trd-funds-debt")
                                }), (0, E.jsxs)(de.Ay, {
                                    className: "text-TertiaryText text-[12px] leading-[18px]",
                                    children: [I("trd-asset-before", {
                                        defaultValue: "before"
                                    }), " &", " ", I("trd-asset-after", {
                                        defaultValue: "after"
                                    })]
                                })]
                            }), (0, E.jsxs)(pe.A, {
                                className: "flex-col",
                                children: [(0, E.jsxs)(pe.A, {
                                    className: "flex-row flex justify-end items-center leading-[22px]",
                                    style: {
                                        justifyContent: "flex-end"
                                    },
                                    children: [(0, E.jsx)(de.Ay, {
                                        className: "text-TertiaryText",
                                        children: A
                                    }), (0, E.jsx)(ge.A, {
                                        className: "text-TertiaryText mr-[4px] ml-[4px]"
                                    }), (0, E.jsxs)(de.Ay, {
                                        className: "text-primaryText font-medium",
                                        children: [x, " ", o]
                                    })]
                                }), (0, E.jsxs)(pe.A, {
                                    className: "flex-row flex justify-end items-center leading-[22px]",
                                    style: {
                                        justifyContent: "flex-end"
                                    },
                                    children: [(0, E.jsx)(de.Ay, {
                                        className: "text-TertiaryText",
                                        children: g
                                    }), (0, E.jsx)(ge.A, {
                                        className: "text-TertiaryText mr-[4px] ml-[4px]"
                                    }), (0, E.jsxs)(de.Ay, {
                                        className: "text-primaryText font-medium",
                                        children: [b, " ", a]
                                    })]
                                })]
                            })]
                        }), (0, E.jsxs)(pe.A, {
                            className: "justify-between items-center mb-[8px]",
                            children: [(0, E.jsx)(de.Ay, {
                                className: "text-primaryText font-medium leading-[22px]",
                                children: I("trd-estliq")
                            }), (0, E.jsx)(de.Ay, {
                                className: "text-primaryText font-medium",
                                children: Number(d) < 0 || isNaN(Number(d)) ? "-" : (0, K.J8)(d, l)
                            })]
                        })]
                    })
                },
                Te = r("8EuM"),
                _e = r("WMUl"),
                Ae = r("gugO"),
                be = r("Ov3/"),
                Se = r("HvRD"),
                he = r("w0hl"),
                xe = r("6B/c"),
                Ee = function(e) {
                    var t = e.payload,
                        r = (e.base, e.quote, (0, s.ok2)().getI18n),
                        n = (0, L.o)().getI18n,
                        o = (0, d._)((0, be.A)("trd-show-mmr-change-detail", !1), 2),
                        a = o[0],
                        u = o[1],
                        c = (0, i.useState)(null),
                        l = c[0],
                        p = c[1];
                    (0, i.useEffect)((function() {
                        (0, Te.gu)(t).then((function(e) {
                            var t = e.data,
                                r = void 0 === t ? {} : t,
                                n = r.adjustedEquityBefore,
                                i = r.adjustedEquityAfter,
                                o = r.maintainMarginBefore,
                                a = r.maintainMarginAfter;
                            p({
                                adjustedEquityBefore: (0, K.J8)(n, 2),
                                adjustedEquityAfter: (0, K.J8)(i, 2),
                                maintainMarginBefore: (0, K.J8)(o, 2),
                                maintainMarginAfter: (0, K.J8)(a, 2),
                                EquityChange: (0, K.J8)(n - i, 2),
                                MarginChange: (0, K.J8)(o - a, 2),
                                mmrBefore: (0, _e.J)({
                                    adjustedEquity: n,
                                    maintenanceMargin: o
                                }),
                                mmrAfter: (0, _e.J)({
                                    adjustedEquity: i,
                                    maintenanceMargin: a
                                })
                            })
                        }))
                    }), []);
                    var m = (0, f.eF)(null === l || void 0 === l ? void 0 : l.mmrBefore).color,
                        v = (0, f.eF)(null === l || void 0 === l ? void 0 : l.mmrAfter).color;
                    return l ? (0, E.jsxs)(de.Ay, {
                        className: "text-[14px] pt-[16px] pb-[16px] mb-[16px] border-0 border-b-[1px] border-Line border-solid",
                        children: [(0, E.jsxs)(pe.A, {
                            style: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            children: [(0, E.jsxs)(pe.A, {
                                style: {
                                    alignItems: "center"
                                },
                                children: [(0, E.jsx)(de.Ay, {
                                    children: r("trd-unimmr-change", {
                                        defaultValue: "UniMMR Change"
                                    })
                                }), (0, E.jsx)(fe.A, {
                                    offset: 4,
                                    tooltips: (0, E.jsx)(Ae.p, {
                                        getI18n: n
                                    }),
                                    useReactPopper: !0,
                                    bubbleClassName: "text-left [&_.bn-bubble-content]:!max-h-[unset]",
                                    arrow: !0,
                                    enablePortal: !0,
                                    children: (0, E.jsx)(Se.A, {
                                        className: "w-[18px] h-[18px] text-TertiaryText"
                                    })
                                })]
                            }), (0, E.jsxs)(pe.A, {
                                style: {
                                    justifyContent: "flex-end",
                                    gap: "4px"
                                },
                                children: [(0, E.jsxs)(pe.A, {
                                    children: [r("trd-asset-before"), (0, E.jsx)(de.Ay, {
                                        style: {
                                            color: m,
                                            marginLeft: "4px"
                                        },
                                        as: "span",
                                        children: null === l || void 0 === l ? void 0 : l.mmrBefore
                                    })]
                                }), (0, E.jsx)(de.Ay, {
                                    children: "\u2192"
                                }), (0, E.jsxs)(pe.A, {
                                    children: [r("trd-asset-after"), (0, E.jsx)(de.Ay, {
                                        style: {
                                            color: v,
                                            marginLeft: "4px"
                                        },
                                        as: "span",
                                        children: null === l || void 0 === l ? void 0 : l.mmrAfter
                                    })]
                                }), a ? (0, E.jsx)(he.A, {
                                    className: "w-[24px] h-[24px]",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: function() {
                                        return u(!1)
                                    }
                                }) : (0, E.jsx)(xe.A, {
                                    className: "w-[24px] h-[24px]",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: function() {
                                        return u(!0)
                                    }
                                })]
                            })]
                        }), a ? (0, E.jsxs)(pe.A, {
                            className: "text-PrimaryText",
                            style: {
                                flexDirection: "column",
                                fontSize: "12px",
                                marginTop: "20px",
                                overflow: "auto"
                            },
                            children: [(0, E.jsxs)(pe.A, {
                                className: "header",
                                style: {
                                    justifyContent: "normal",
                                    color: "t.third",
                                    gap: "4px"
                                },
                                children: [(0, E.jsx)(de.Ay, {
                                    className: "title",
                                    style: {
                                        minWidth: "100px",
                                        flexBasis: "100px",
                                        textAlign: "left"
                                    }
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item1",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: r("trd-before-usd", {
                                        defaultValue: "Before(USD)"
                                    })
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item2",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: r("trd-after-usd", {
                                        defaultValue: "After(USD)"
                                    })
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item3",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: r("trd-change-usd", {
                                        defaultValue: "Change(USD)"
                                    })
                                })]
                            }), (0, E.jsxs)(pe.A, {
                                className: "col justify-between items-center",
                                style: {
                                    marginTop: "10px",
                                    marginBottom: "10px"
                                },
                                children: [(0, E.jsx)(de.Ay, {
                                    className: "title",
                                    style: {
                                        minWidth: "100px",
                                        flexBasis: "100px",
                                        color: "t.third",
                                        textAlign: "left",
                                        flexGrow: "1"
                                    },
                                    children: r("trd-orderForm-adjusted-equity")
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item1",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: null === l || void 0 === l ? void 0 : l.adjustedEquityBefore
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item2",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: null === l || void 0 === l ? void 0 : l.adjustedEquityAfter
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item3",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: null === l || void 0 === l ? void 0 : l.EquityChange
                                })]
                            }), (0, E.jsxs)(pe.A, {
                                className: "col justify-between items-center",
                                style: {
                                    justifyContent: "normal",
                                    gap: "4px"
                                },
                                children: [(0, E.jsx)(de.Ay, {
                                    className: "title",
                                    style: {
                                        minWidth: "100px",
                                        flexBasis: "100px",
                                        color: "t.third",
                                        textAlign: "left",
                                        flexGrow: "1"
                                    },
                                    children: r("trd-maintainance-margin", {
                                        defaultValue: "Maintainance Margin"
                                    })
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item1",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: null === l || void 0 === l ? void 0 : l.maintainMarginBefore
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item2",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: null === l || void 0 === l ? void 0 : l.maintainMarginAfter
                                }), (0, E.jsx)(de.Ay, {
                                    className: "item3",
                                    style: {
                                        minWidth: "80px",
                                        flexBasis: "80px",
                                        flexGrow: "1",
                                        textAlign: "right"
                                    },
                                    children: null === l || void 0 === l ? void 0 : l.MarginChange
                                })]
                            })]
                        }) : (0, E.jsx)(E.Fragment, {})]
                    }) : (0, E.jsx)(E.Fragment, {})
                },
                Ie = r("zxgP"),
                Re = (ue = {}, (0, v._)(ue, c.W4.LIMIT, "limitOrder"), (0, v._)(ue, c.W4.MARKET, "marketOrder"), (0, v._)(ue, c.W4.STOP_LIMIT, "stopLossOrder"), (0, v._)(ue, c.W4.STOPLIMIT, "stopLossOrder"), (0, v._)(ue, c.W4.OCO, "oco"), (0, v._)(ue, c.W4.TRAILING_STOP, "trailingStopOrder"), (0, v._)(ue, c.W4.STOP_MARKET, "stopMarketOrder"), ue),
                Oe = (ce = {}, (0, v._)(ce, c.W4.LIMIT, "trd-layout-limitorder"), (0, v._)(ce, c.W4.MARKET, "trd-layout-marketorder"), (0, v._)(ce, c.W4.STOP_LIMIT, "trd-layout-slorder"), (0, v._)(ce, c.W4.STOPLIMIT, "trd-layout-slorder"), (0, v._)(ce, c.W4.OCO, "trd-layout-ocoOrder"), (0, v._)(ce, c.W4.TRAILING_STOP, "trd-layout-trailingStopOrder"), (0, v._)(ce, c.W4.STOP_MARKET, "trd-layout-smorder"), ce),
                Ce = function() {
                    var e = (0, s.ok2)().getI18n;
                    return (0, E.jsx)("div", {
                        className: "mb-[12px] text-[12px] [&_a]:text-TextLink [&_a]:no-underline",
                        dangerouslySetInnerHTML: {
                            __html: e("trd-orderForm-autotransfer-tips", {
                                url: "/support/faq/ad98a63d9d0243b2bf76e2c921f2cfc3"
                            }) || ""
                        }
                    })
                },
                Ne = function(e) {
                    var t = e.showTip,
                        r = e.showMarginTip,
                        n = e.orderType,
                        o = e.tradeType,
                        u = (0, i.useState)(!1),
                        c = (u[0], u[1]),
                        l = (0, a.wA)(),
                        d = (0, s.ok2)().getI18n,
                        p = (0, s.stA)().isAuto,
                        f = (0, s.L1A)().isAuto,
                        m = d((null === Oe || void 0 === Oe ? void 0 : Oe[n]) || "", {
                            defaultValue: n
                        }),
                        v = (0, ie.V$)(o) && (p || f);
                    return r && !t ? (0, E.jsxs)(E.Fragment, {
                        children: [v && (0, E.jsx)(Ce, {}), (0, E.jsx)(pe.A, {
                            className: "mb-[16px]",
                            children: (0, E.jsx)(Ie.A, {
                                className: "!text-[12px] !leading-[18px] items-start",
                                defaultChecked: !1,
                                onChange: function(e, t) {
                                    c(t), l.userCenter.updateOrderConfirmStatus({
                                        key: "autoBorrowRepay",
                                        value: !t
                                    })
                                },
                                children: d("trd-borrow-repay-check", {
                                    defaultValue: "Don't display Auto borrow/repay for order confirmation again. You can also adjust it in Preferences."
                                })
                            })
                        })]
                    }) : (0, E.jsxs)(E.Fragment, {
                        children: [v && (0, E.jsx)(Ce, {}), (0, E.jsx)(pe.A, {
                            className: "mb-[16px]",
                            children: (0, E.jsx)(Ie.A, {
                                className: "!text-[12px] !leading-[18px] items-start",
                                defaultChecked: !1,
                                onChange: function(e, t) {
                                    c(t), l.userCenter.updateOrderConfirmStatus({
                                        key: Re[n] || "stopLossOrder",
                                        value: !t
                                    })
                                },
                                children: d("trd-confirm-order-type-check", {
                                    defaultValue: "Don't display double confirmation for {{orderTypeText}} again. You can also adjust it in Preferences.",
                                    orderTypeText: m
                                })
                            })
                        })]
                    })
                },
                Le = function(e) {
                    var t = e.payload,
                        r = e.quote,
                        n = (0, s.ok2)().getI18n,
                        i = t.stopLimitPrice,
                        o = void 0 === i ? "0" : i,
                        a = t.stopPrice,
                        u = t.price,
                        c = t.stopMarketTimeInForce;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsxs)(de.Ay, {
                            style: {
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)",
                                padding: "16px 0"
                            },
                            children: [(0, E.jsx)(de.Ay, {
                                className: "text-PrimaryText leading-[22px] font-[500]",
                                children: n("trd-Position-takeProfit")
                            }), (0, E.jsxs)(pe.A, {
                                className: "leading-[22px] justify-between items-center",
                                children: [(0, E.jsx)(de.Ay, {
                                    as: "span",
                                    className: "text-TertiaryText",
                                    children: n("trd-orderForm-LIMIT")
                                }), (0, E.jsxs)(de.Ay, {
                                    as: "span",
                                    className: "text-PrimaryText font-medium",
                                    children: [u, " ", r]
                                })]
                            })]
                        }), (0, E.jsxs)(de.Ay, {
                            style: {
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)",
                                padding: "16px 0",
                                marginBottom: "16px"
                            },
                            children: [(0, E.jsx)(de.Ay, {
                                className: "text-PrimaryText leading-[22px] font-[500]",
                                children: n("trd-Position-stopLoss")
                            }), (0, E.jsxs)(pe.A, {
                                className: "leading-[22px] justify-between items-center",
                                children: [(0, E.jsx)(de.Ay, {
                                    as: "span",
                                    className: "text-TertiaryText",
                                    children: n("trd-orderform-triggerPrice")
                                }), (0, E.jsxs)(de.Ay, {
                                    as: "span",
                                    className: "text-PrimaryText font-medium",
                                    children: [a, " ", r]
                                })]
                            }), (0, E.jsxs)(pe.A, {
                                className: "leading-[22px] justify-between items-center",
                                children: [(0, E.jsx)(de.Ay, {
                                    as: "span",
                                    className: "text-TertiaryText",
                                    children: n(c ? "trd-orderForm-price" : "trd-orderForm-LIMIT")
                                }), (0, E.jsx)(de.Ay, {
                                    as: "span",
                                    className: "text-PrimaryText font-medium",
                                    children: c ? n("trd-orderForm-marketprice") : "".concat(o, " ").concat(r)
                                })]
                            })]
                        })]
                    })
                };
            const Pe = o().memo(Le);
            var ke = r("12iX"),
                Me = r("U33U"),
                De = function(e) {
                    var t = e.payload,
                        r = e.ticker,
                        n = e.base,
                        o = e.quote,
                        a = e.orderType,
                        s = e.tradeType,
                        u = e.marketPrice,
                        c = e.getI18n,
                        l = e.total,
                        p = t.side,
                        f = t.timeInForce,
                        m = t.postOnly,
                        T = t.quantity,
                        _ = t.price,
                        A = (0, i.useState)(!1),
                        x = A[0],
                        I = A[1],
                        R = r.tickSize,
                        O = (0, i.useState)({
                            tpslSLLimitPrice: {
                                value: "",
                                invalid: !1,
                                errorMsg: ""
                            },
                            tpslTPLimitPrice: {
                                value: "",
                                invalid: !1,
                                errorMsg: ""
                            },
                            tpslSLTriggerPrice: {
                                value: "",
                                invalid: !1,
                                errorMsg: ""
                            },
                            stopType: {
                                value: "LIMIT",
                                invalid: !1,
                                errorMsg: ""
                            },
                            price: {
                                value: _
                            },
                            quantity: {
                                value: T
                            },
                            total: {
                                value: l
                            }
                        }),
                        C = O[0],
                        N = O[1],
                        L = (0, i.useCallback)((function(e) {
                            N(e), t.stopType = e.stopType.value, t.tpslTPLimitPrice = e.tpslTPLimitPrice.value, t.tpslSLTriggerPrice = e.tpslSLTriggerPrice.value, t.tpslSLLimitPrice = "MARKET" === e.stopType.value ? void 0 : e.tpslSLLimitPrice.value
                        }), [t, N]),
                        P = (0, i.useCallback)((function(e) {
                            var t = e.payload;
                            if ("FIELD_CHANGE" === e.type) {
                                var r = t.field;
                                L((0, g._)({}, C, r))
                            }
                        }), [C]),
                        k = (0, i.useCallback)((function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                n = (0, y._)((0, g._)({}, C), (0, v._)({}, t, {
                                    value: r,
                                    invalid: !1
                                }));
                            if ("tpslTPLimitPrice" === t) {
                                var i = b({
                                        marketPrice: u,
                                        orderType: a,
                                        side: p,
                                        price: _,
                                        value: r,
                                        tickSize: R
                                    }),
                                    o = i.invalid,
                                    s = i.errorMsg;
                                o && (n.tpslTPLimitPrice = {
                                    value: r,
                                    invalid: !0,
                                    errorMsg: c(s)
                                })
                            }
                            if ("tpslSLTriggerPrice" === t) {
                                var l = S({
                                        marketPrice: u,
                                        orderType: a,
                                        side: p,
                                        price: _,
                                        value: r,
                                        tickSize: R
                                    }),
                                    f = l.invalid,
                                    m = l.errorMsg;
                                f && (n.tpslSLTriggerPrice = {
                                    value: r,
                                    invalid: !0,
                                    errorMsg: c(m)
                                })
                            }
                            if ("tpslSLLimitPrice" === t) {
                                var T = (0, d._)(h.tpslSLLimitPrice({
                                        tpslSLTriggerPrice: C.tpslSLTriggerPrice.value,
                                        tpslSLLimitPrice: r
                                    }, {
                                        tickSize: R
                                    }), 2),
                                    A = (T[0], T[1]),
                                    x = A.invalid,
                                    E = A.errorMsg;
                                x && (n.tpslSLLimitPrice = {
                                    value: r,
                                    invalid: !0,
                                    errorMsg: c(E)
                                })
                            }
                            L(n)
                        }), [a, p, _, C, u, R]),
                        M = (0, i.useMemo)((function() {
                            return C.tpslSLTriggerPrice.invalid || C.tpslTPLimitPrice.invalid || C.tpslSLLimitPrice.invalid
                        }), [C]);
                    return (0, i.useEffect)((function() {
                        t.disableConfirm = M
                    }), [M]), (0, E.jsx)("div", {
                        className: "trd-orderform-container pb-[16px] mb-[16px] border-0 border-b-[1px] border-Line border-solid",
                        children: (0, E.jsx)(ke.A, {
                            className: "orderform-autoform",
                            noValidate: !0,
                            autoComplete: "off",
                            children: (0, E.jsx)(Me.A, {
                                quote: o,
                                side: p,
                                minQty: r.minQty,
                                dispatch: P,
                                postOnly: m,
                                orderType: a,
                                timeInForce: f,
                                tickSizePrecision: r.tickSizePrecision,
                                tpsl: x,
                                curOrderState: C,
                                widgetKey: "confirm",
                                tradeType: s,
                                updateTpsl: I,
                                isConfirm: !0,
                                handleChange: k
                            }, "".concat(p, "_").concat(n, "_").concat(o))
                        })
                    })
                };
            const we = o().memo(De);
            var Ue = function(e) {
                    return "".concat((Number(e) / 100).toFixed(1), "%")
                },
                Be = function(e, t) {
                    var r = e.quantity,
                        n = e.price,
                        i = e.stopPrice,
                        o = void 0 === i ? "0" : i,
                        a = e.side,
                        s = e.trailingDelta,
                        u = e.stopType,
                        c = t.base,
                        l = t.quote,
                        d = t.getI18n,
                        p = "MARKET" === u ? "-slmarket" : "";
                    return o ? d("".concat("BUY" === a ? "BUY-down" : "SELL-up", "-tstip").concat(p), {
                        price: n,
                        base: " " + l,
                        quote: " " + c,
                        trailingDelta: Ue(s),
                        quantity: r,
                        stopPrice: o
                    }) : d("".concat(a, "-market-tstip").concat(p), {
                        price: n,
                        base: l,
                        quote: c,
                        trailingDelta: Ue(s),
                        quantity: r
                    })
                },
                qe = function(e) {
                    var t = e.getI18n,
                        r = e.payload,
                        n = e.tickSizePrecision,
                        i = e.quote;
                    return (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsxs)("li", {
                            className: "leading-[30px]",
                            children: [(0, E.jsx)("span", {
                                className: "text-TertiaryText",
                                children: t("actPrice")
                            }), (0, E.jsx)("span", {
                                className: "text-PrimaryText font-medium",
                                style: {
                                    float: "right"
                                },
                                children: r.stopPrice && Number(r.stopPrice) ? "".concat((0, K.J8)(r.stopPrice, n), " ").concat(i) : t("marketprice")
                            })]
                        }), (0, E.jsxs)("li", {
                            className: "leading-[30px]",
                            children: [(0, E.jsx)("span", {
                                className: "text-TertiaryText",
                                children: t("trailing-delta")
                            }), (0, E.jsx)("span", {
                                className: "text-PrimaryText font-medium",
                                style: {
                                    float: "right"
                                },
                                children: Ue(r.trailingDelta)
                            })]
                        }), (0, E.jsxs)("li", {
                            className: "leading-[30px]",
                            children: [(0, E.jsx)("span", {
                                className: "text-TertiaryText",
                                children: t("MARKET" === r.stopType ? "price" : "stopLimitPrice")
                            }), (0, E.jsx)("span", {
                                className: "text-PrimaryText font-medium",
                                style: {
                                    float: "right"
                                },
                                children: "MARKET" === r.stopType ? t("marketprice") : "".concat((0, K.J8)(r.price, n) || t("price"), " ").concat(i)
                            })]
                        })]
                    })
                };
            const je = o().memo(qe);
            var Fe, Qe = (Fe = {}, (0, v._)(Fe, c.W4.LIMIT, [{
                    label: "price",
                    key: "price"
                }]), (0, v._)(Fe, c.W4.MARKET, [{
                    label: "price",
                    key: "marketprice"
                }]), (0, v._)(Fe, c.W4.STOPLIMIT, [{
                    label: "stopPrice",
                    key: "stopPrice"
                }, {
                    label: "stopLimitPrice",
                    key: "price"
                }]), (0, v._)(Fe, c.W4.STOP_MARKET, [{
                    label: "stopPrice",
                    key: "stopPrice"
                }, {
                    label: "price",
                    key: "marketprice"
                }]), (0, v._)(Fe, c.W4.TRAILING_STOP, []), (0, v._)(Fe, c.W4.OCO, []), Fe),
                Ge = r("I25Y"),
                Ye = r("BBQg"),
                Ke = function(e) {
                    var t = e.children;
                    return (0, E.jsx)(de.Ay, {
                        as: "span",
                        className: "text-PrimaryText font-medium",
                        children: t
                    })
                },
                Ve = function(e) {
                    var t = e.children;
                    return (0, E.jsx)(de.Ay, {
                        as: "span",
                        className: "text-PrimaryText font-medium",
                        style: {
                            float: "right"
                        },
                        children: t
                    })
                },
                We = function(e) {
                    var t = e.side,
                        r = e.willBorrowAmountApiRaw,
                        n = e.spotAsset,
                        i = e.base,
                        o = e.quote,
                        a = e.getI18n,
                        s = e.showMarginTip,
                        u = (n[i] || {}).free,
                        l = (n[o] || {}).free,
                        d = t === c.Vl.BUY ? l : u,
                        p = t === c.Vl.BUY ? o : i,
                        f = "0";
                    return f = r < d ? r : d, 0 === Number(f) ? (0, E.jsx)(E.Fragment, {}) : (0, E.jsx)(de.Ay, {
                        as: "ul",
                        style: {
                            listStyle: "none",
                            borderBottom: s ? "none" : "1px solid",
                            borderBottomColor: s ? "none" : "var(--color-Line)",
                            paddingBottom: s ? "0px" : "16px",
                            marginBottom: s ? "0px" : "16px"
                        },
                        children: (0, E.jsxs)(de.Ay, {
                            as: "li",
                            className: "leading-[30px]",
                            children: [(0, E.jsx)(Ke, {
                                children: a("trd-orderForm-autoTransfer")
                            }), (0, E.jsxs)(Ve, {
                                children: [(0, T.tv)(f), " ", p]
                            })]
                        })
                    })
                },
                ze = function(e, t) {
                    var r = e.stopLimitPrice,
                        n = void 0 === r ? "" : r,
                        i = e.price,
                        o = e.quantity,
                        a = Math.max(+n, +i);
                    return (0, T.lw)(a, o).toFixed(t)
                },
                He = [c.W4.MARKET, c.W4.TRAILING_STOP, c.W4.STOP_MARKET, c.W4.OCO],
                $e = function(e) {
                    var t = e.children;
                    return (0, E.jsx)(de.Ay, {
                        as: "span",
                        className: "text-TertiaryText",
                        children: t
                    })
                },
                Ze = function(e) {
                    var t = e.children;
                    return (0, E.jsx)(de.Ay, {
                        as: "span",
                        className: "text-PrimaryText font-medium",
                        style: {
                            float: "right"
                        },
                        children: t
                    })
                };

            function Je(e, t) {
                var r = e.quantity,
                    n = e.price,
                    i = e.stopPrice,
                    o = void 0 === i ? "0" : i,
                    a = e.side,
                    s = e.icebergQty,
                    u = t.base,
                    c = t.quote,
                    l = t.marketPrice,
                    d = t.getI18n,
                    p = s ? "Ice" : "";
                return +o >= +l ? "BUY" === a ? d("buyUp".concat(p, "LimitTip"), {
                    stopPrice: o,
                    quote: c,
                    icebergQty: s,
                    quantity: r,
                    base: u,
                    price: n
                }) : d("sellUp".concat(p, "LimitTip"), {
                    stopPrice: o,
                    quote: c,
                    quantity: r,
                    base: u,
                    price: n
                }) : d("BUY" === a ? "buyBase".concat(p, "LimitTip") : "sellBase".concat(p, "LimitTip"), {
                    stopPrice: o,
                    quote: c,
                    quantity: r,
                    base: u,
                    price: n
                })
            }

            function Xe(e, t) {
                var r = e.quantity,
                    n = e.stopPrice,
                    i = void 0 === n ? "0" : n,
                    o = e.side,
                    a = t.base,
                    s = t.quote,
                    u = +i >= +t.marketPrice ? "Up" : "";
                return (0, t.getI18n)("".concat(o).concat(u, "SMTip"), {
                    stopPrice: i,
                    quote: s,
                    quantity: r,
                    base: a
                })
            }
            var et = function(e) {
                    var t = e.htmlText,
                        r = (0, J._)(e, ["htmlText"]);
                    return (0, E.jsxs)(de.Ay, {
                        className: "flex flex-row items-start mt-[4px]",
                        children: [(0, E.jsx)(de.Ay, {
                            className: "mr-[4px] my-[4px] leading-[18px] text-[12px] text-TertiaryText",
                            children: "*"
                        }), (0, E.jsx)(de.Ay, (0, y._)((0, g._)({
                            className: "flex-1 leading-[18px] text-[12px] text-TertiaryText my-[4px] [&_strong]:!font-normal"
                        }, r), {
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }))]
                    })
                },
                tt = function(e) {
                    var t = e.payload,
                        r = e.borrowAmount,
                        n = e.qtyTotalMode,
                        o = e.repayAmount,
                        a = e.marginAutoBorrow,
                        u = e.marginAutoRepay,
                        l = (0, i.useContext)(q.cb),
                        d = l.base,
                        p = l.quote,
                        f = l.userAssets,
                        m = l.ticker.tickSizePrecision,
                        v = (0, s.Bm2)("Margin_auto_borrow_auto_repay");
                    return function(e, t) {
                        var r = e.side,
                            n = e.sideEffectType,
                            i = t.base,
                            o = t.quote,
                            a = t.getI18n,
                            s = t.borrowAmount,
                            u = t.repayAmount,
                            l = t.autoborrowFeature,
                            d = void 0 !== l && l,
                            p = t.marginAutoBorrow,
                            f = t.marginAutoRepay,
                            m = {
                                borrow: {
                                    key: "trd-margin-borrow",
                                    tipKey: "trd-confirm-borrow-tip",
                                    amount: ""
                                },
                                repay: {
                                    key: "trd-margin-repay",
                                    tipKey: "trd-confirm-repay-tip",
                                    amount: ""
                                }
                            },
                            v = r === c.Vl.BUY ? o : i,
                            g = r === c.Vl.BUY ? i : o,
                            y = d ? p : (0, le.F5)(n),
                            _ = d ? f : (0, le.BW)(n),
                            A = y && _;
                        return y && (m.borrow.amount = "".concat((0, T.tv)(s), " ").concat(v)), _ && (m.repay.amount = "market" === u ? a("trd-margin-base-on-trd") : "".concat((0, T.tv)(u), " ").concat(g)), (0, E.jsxs)(E.Fragment, {
                            children: [y && (0, E.jsx)(de.Ay, {
                                style: {
                                    borderBottom: A ? "none" : "1px solid",
                                    borderBottomColor: A ? "none" : "var(--color-Line)",
                                    paddingBottom: A ? "0px" : "16px"
                                },
                                className: "font-medium",
                                children: (0, E.jsxs)(pe.A, {
                                    className: "leading-[30px] text-[14px] justify-between",
                                    children: [(0, E.jsx)(fe.A, {
                                        offset: 4,
                                        enablePortal: !0,
                                        useReactPopper: !0,
                                        tooltips: a(m.borrow.tipKey),
                                        children: (0, E.jsx)(de.Ay, {
                                            className: "underline decoration-dotted cursor-pointer",
                                            children: a(m.borrow.key)
                                        })
                                    }), (0, E.jsx)(de.Ay, {
                                        className: "text-PrimaryText",
                                        children: m.borrow.amount
                                    })]
                                })
                            }), _ && (0, E.jsx)(de.Ay, {
                                style: {
                                    borderBottom: "1px solid",
                                    borderBottomColor: "var(--color-Line)",
                                    paddingBottom: "16px"
                                },
                                className: "font-medium",
                                children: (0, E.jsxs)(pe.A, {
                                    className: "leading-[30px] text-[14px] justify-between",
                                    children: [(0, E.jsx)(fe.A, {
                                        offset: 4,
                                        enablePortal: !0,
                                        useReactPopper: !0,
                                        tooltips: a(m.repay.tipKey),
                                        children: (0, E.jsx)(de.Ay, {
                                            className: "underline decoration-dotted cursor-pointer",
                                            children: a(m.repay.key)
                                        })
                                    }), (0, E.jsx)(de.Ay, {
                                        className: "text-PrimaryText",
                                        children: m.repay.amount
                                    })]
                                })
                            })]
                        })
                    }(t, {
                        base: d,
                        quote: p,
                        getI18n: (0, s.ok2)().getI18n,
                        userAssets: f,
                        borrowAmount: r,
                        repayAmount: o,
                        qtyTotalMode: n,
                        tickSizePrecision: m,
                        autoborrowFeature: v,
                        marginAutoBorrow: a,
                        marginAutoRepay: u
                    })
                },
                rt = function(e) {
                    var t = e.tpslTPLimitPrice,
                        r = e.tpslSLTriggerPrice,
                        n = e.tpslSLLimitPrice,
                        i = e.quote,
                        o = e.stopType,
                        a = e.side,
                        u = (0, s.ok2)().getI18n;
                    return t || r || n ? (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsxs)("div", {
                            style: {
                                marginTop: "16px",
                                paddingBottom: "16px",
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)"
                            },
                            children: [(0, E.jsx)("div", {
                                style: {
                                    lineHeight: "22px",
                                    color: "var(--color-PrimaryText)",
                                    fontWeight: "500",
                                    marginBottom: "4px"
                                },
                                children: u("trd-Position-takeProfit".concat(a === c.Vl.BUY ? "" : "-sell"))
                            }), (0, E.jsxs)(de.Ay, {
                                className: "leading-[22px]",
                                children: [(0, E.jsx)($e, {
                                    children: u("trd-orderForm-LIMIT")
                                }), (0, E.jsx)(Ze, {
                                    children: t ? "".concat(t, " ").concat(i) : "--"
                                })]
                            })]
                        }), (0, E.jsxs)("div", {
                            style: {
                                padding: "16px 0",
                                marginBottom: "16px",
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)"
                            },
                            children: [(0, E.jsx)("div", {
                                style: {
                                    lineHeight: "22px",
                                    color: "var(--color-PrimaryText)",
                                    fontWeight: "500",
                                    marginBottom: "4px"
                                },
                                children: u("trd-Position-stopLoss".concat(a === c.Vl.BUY ? "" : "-sell"))
                            }), (0, E.jsxs)(de.Ay, {
                                className: "leading-[22px]",
                                children: [(0, E.jsx)($e, {
                                    children: u("trd-orderform-triggerPrice")
                                }), (0, E.jsx)(Ze, {
                                    children: r ? "".concat(r, " ").concat(i) : "--"
                                })]
                            }), (0, E.jsxs)(de.Ay, {
                                className: "leading-[22px]",
                                children: [(0, E.jsx)($e, {
                                    children: u("trd-orderForm-".concat("MARKET" === o ? "price" : "LIMIT"))
                                }), (0, E.jsx)(Ze, {
                                    children: r ? "MARKET" === o ? u("trd-orderForm-marketprice") : "".concat(n, " ").concat(i) : "--"
                                })]
                            })]
                        })]
                    }) : (0, E.jsx)(E.Fragment, {})
                },
                nt = function(e) {
                    var t = e.showTip,
                        r = e.payload,
                        n = e.orderType,
                        o = e.qtyTotalMode,
                        a = e.borrowAmount,
                        u = e.willBorrowAmountApiRaw,
                        l = e.repayAmount,
                        d = e.marginAutoBorrow,
                        p = e.marginAutoRepay,
                        f = e.showMarginTip,
                        m = e.estfee,
                        v = e.sorEnable,
                        g = e.tradeType,
                        y = e.modalRef,
                        T = e.estLiqPrice,
                        _ = e.asssetChange,
                        A = e.tpsl,
                        b = e.isAuto,
                        S = e.orderConfirmStatus,
                        h = r.side,
                        x = r.quantity,
                        I = r.quoteOrderQty,
                        R = void 0 === I ? "0" : I,
                        O = r.icebergQty,
                        C = r.tpslTPLimitPrice,
                        N = r.tpslSLTriggerPrice,
                        L = r.tpslSLLimitPrice,
                        P = r.stopType,
                        k = (0, i.useContext)(q.cb),
                        M = k.base,
                        D = k.quote,
                        w = k.getI18n,
                        U = k.getMarketPrice,
                        B = k.userAssets,
                        j = k.ticker,
                        F = j.tickSizePrecision,
                        Q = j.minQtyPrecision,
                        G = j.minTotalPrecision,
                        Y = (0, oe.Q)(M, D).hasFdusdPair,
                        V = (0, s.ok2)().getI18n,
                        W = U(),
                        z = (0, s.dUb)(),
                        H = (0, s.DFo)().isPm1_5,
                        $ = (0, ve.e)(n),
                        Z = (0, Ye.j)({
                            baseAsset: M,
                            quoteAsset: D
                        }).needConvert,
                        J = S.marginAutoTransfer,
                        X = ((0, ie.ed)(g) || (0, ie.hx)(g)) && [c.W4.LIMIT, c.W4.MARKET, c.W4.STOPLIMIT].indexOf(n) >= 0 && !A,
                        ee = H && (0, ie.hx)(g) && [c.W4.MARKET, c.W4.LIMIT, c.W4.STOP_MARKET].indexOf(n) >= 0,
                        te = [],
                        re = n === c.W4.LIMIT && A || $ && !C && !N || void 0 !== r.disableConfirm;
                    return te.push((0, E.jsxs)(de.Ay, {
                            className: "mb-[18px]",
                            children: [(0, E.jsxs)(de.Ay, {
                                className: "leading-[28px] font-semibold text-[20px]",
                                children: [M, "/", D]
                            }), (0, E.jsxs)(de.Ay, {
                                className: "".concat(h === c.Vl.BUY ? "text-Buy" : "text-Sell", " text-[14px] leading-[22px]"),
                                children: [w((0, me.u)(n)), " / ", w(h)]
                            })]
                        })), u && Number(u) > 0 && b && J && te.push((0, E.jsx)(We, {
                            getI18n: V,
                            base: M,
                            quote: D,
                            side: h,
                            willBorrowAmountApiRaw: u,
                            spotAsset: z,
                            showMarginTip: f
                        })), f && te.push((0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsx)(tt, {
                                payload: r,
                                borrowAmount: a,
                                repayAmount: l,
                                qtyTotalMode: o,
                                marginAutoBorrow: d,
                                marginAutoRepay: p
                            }), X && (0, E.jsx)(ye, {
                                base: M,
                                quote: D,
                                userAssets: B,
                                asssetChange: _,
                                tickSizePrecision: F,
                                minQtyPrecision: Q,
                                estLiqPrice: T
                            })]
                        })), t && te.push((0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsxs)(de.Ay, {
                                as: "ul",
                                className: "mb-[16px] pb-[16px]",
                                style: {
                                    listStyle: "none",
                                    borderBottom: "1px solid",
                                    borderBottomColor: "var(--color-Line)"
                                },
                                children: [n === c.W4.TRAILING_STOP && (0, E.jsx)(je, {
                                    getI18n: w,
                                    payload: r,
                                    tickSizePrecision: F,
                                    quote: D
                                }), n === c.W4.OCO && (0, E.jsx)(Pe, {
                                    payload: r,
                                    quote: D
                                }), Qe[n] && Qe[n].map((function(e, t) {
                                    var n = e.label,
                                        i = e.key;
                                    return (0, E.jsxs)(de.Ay, {
                                        as: "li",
                                        className: "leading-[30px]",
                                        children: [(0, E.jsx)($e, {
                                            children: w(n)
                                        }), (0, E.jsxs)(Ze, {
                                            children: ["marketprice" !== i ? (0, K.J8)(r[i], F) : w(i), " ", "marketprice" === i ? "" : D]
                                        })]
                                    }, t)
                                })), (0, E.jsx)(de.Ay, {
                                    as: "li",
                                    className: "leading-[30px]",
                                    children: o === c.o1.QUANTITY ? (0, E.jsxs)(E.Fragment, {
                                        children: [(0, E.jsx)($e, {
                                            children: w("quantity")
                                        }), (0, E.jsxs)(Ze, {
                                            children: [(0, K.J8)(x, Q), " ", M]
                                        })]
                                    }) : (0, E.jsxs)(E.Fragment, {
                                        children: [(0, E.jsx)($e, {
                                            children: w("total")
                                        }), (0, E.jsxs)(Ze, {
                                            children: [(0, K.J8)(R, G), " ", D]
                                        })]
                                    })
                                }), !!O && (0, E.jsxs)(de.Ay, {
                                    as: "li",
                                    className: "leading-[30px]",
                                    children: [(0, E.jsx)($e, {
                                        children: V("trd-orderForm-iceberAmount")
                                    }), (0, E.jsxs)(Ze, {
                                        children: [(0, K.J8)(O, Q), " ", M]
                                    })]
                                }), !He.includes(n) && (0, E.jsxs)(de.Ay, {
                                    as: "li",
                                    className: "leading-[30px]",
                                    children: [(0, E.jsx)($e, {
                                        children: w("total")
                                    }), (0, E.jsxs)(Ze, {
                                        children: [ze(r, G), " ", D]
                                    })]
                                }), m && (0, E.jsxs)(de.Ay, {
                                    as: "li",
                                    className: "leading-[30px]",
                                    children: [(0, E.jsx)($e, {
                                        children: V("trd-estfee")
                                    }), (0, E.jsx)(Ze, {
                                        children: m
                                    })]
                                }), v && (0, E.jsxs)(de.Ay, {
                                    as: "li",
                                    className: "leading-[30px]",
                                    children: [(0, E.jsx)($e, {
                                        children: V("trd-orderform-sor")
                                    }), (0, E.jsx)(Ze, {
                                        children: "True"
                                    })]
                                }), n === c.W4.STOPLIMIT && (0, E.jsx)(et, {
                                    htmlText: Je(r, {
                                        base: M,
                                        quote: D,
                                        marketPrice: W,
                                        getI18n: w
                                    })
                                }), n === c.W4.STOP_MARKET && (0, E.jsx)(et, {
                                    htmlText: Xe(r, {
                                        base: M,
                                        quote: D,
                                        marketPrice: W,
                                        getI18n: w
                                    })
                                }), n === c.W4.TRAILING_STOP && (0, E.jsx)(et, {
                                    htmlText: Be(r, {
                                        base: M,
                                        quote: D,
                                        getI18n: w
                                    })
                                }), [c.W4.STOP_MARKET, c.W4.MARKET].includes(n) && (0, E.jsx)(et, {
                                    htmlText: V("trd-orderForm-slippage-tips") || ""
                                }), !re && (0, E.jsx)(Ge.A, {
                                    base: M,
                                    quote: D
                                })]
                            }), n === c.W4.LIMIT && A && (0, E.jsx)(rt, {
                                tpslTPLimitPrice: C,
                                tpslSLTriggerPrice: N,
                                tpslSLLimitPrice: L,
                                quote: D,
                                stopType: P,
                                side: h
                            })]
                        })), ee && te.push((0, E.jsx)(Ee, {
                            base: M,
                            quote: D,
                            payload: r
                        })),
                        function(e) {
                            var t = e.quote,
                                r = e.base,
                                n = e.side;
                            return "BUSD" === t && n === c.Vl.SELL || "BUSD" === r && n === c.Vl.BUY
                        }({
                            quote: D,
                            base: M,
                            side: h
                        }) && te.push((0, E.jsxs)(de.Ay, {
                            children: [V("trd-unset-busd"), " ", (0, ie.Vq)(g) && (Y ? (0, E.jsx)(se, {
                                base: M,
                                quote: D,
                                tradeType: g,
                                preFixKey: "trd-convert-promo-text",
                                sx: {
                                    color: "t.yellow"
                                },
                                isPlaceorder: !0,
                                onClose: y.current.close
                            }) : V("trd-convert-after-busd"))]
                        })), ($ && !C && !N || void 0 !== r.disableConfirm) && te.push((0, E.jsx)(we, {
                            payload: r,
                            ticker: j,
                            sor: v,
                            base: M,
                            quote: D,
                            orderType: n,
                            tradeType: g,
                            marketPrice: W,
                            getI18n: w,
                            total: ze(r, G)
                        })), re && Z && te.push((0, E.jsx)("div", {
                            className: "pb-[16px] mb-[16px] border-solid-b",
                            children: (0, E.jsx)(Ge.A, {
                                base: M,
                                quote: D
                            })
                        })), te.push((0, E.jsx)(Ne, {
                            showTip: t,
                            showMarginTip: f,
                            orderType: n,
                            tradeType: g
                        })), (0, E.jsx)(de.Ay, {
                            className: "text-PrimaryText text-[14px] leading-[18px]",
                            children: te
                        })
                };
            const it = o().memo(nt);
            var ot = r("Gz4J"),
                at = r("9Fi+"),
                st = r("BX8v"),
                ut = function(e) {
                    var t = e.children;
                    return (0, E.jsx)(de.Ay, {
                        as: "span",
                        className: "text-PrimaryText font-medium",
                        children: t
                    })
                },
                ct = function(e) {
                    var t = e.children;
                    return (0, E.jsx)(de.Ay, {
                        as: "span",
                        className: "text-PrimaryText font-medium",
                        style: {
                            float: "right"
                        },
                        children: t
                    })
                },
                lt = function(e) {
                    var t = e.getI18n,
                        r = e.onContinue,
                        n = e.updateOrderConfirmStatus,
                        i = e.marginAutoTransfer,
                        o = e.willBorrowAmount,
                        a = e.extra,
                        s = e.payload,
                        u = e.spotAsset,
                        l = a.base,
                        d = a.quote,
                        p = a.orderType,
                        f = s.side,
                        m = (u[l] || {}).free,
                        v = (u[d] || {}).free,
                        g = f === c.Vl.BUY ? v : m,
                        y = f === c.Vl.BUY ? d : l,
                        _ = "0";
                    return _ = o < g ? o : g, (0, E.jsxs)(de.Ay, {
                        className: "text-PrimaryText text-[14px] leading-[18px]",
                        children: [(0, E.jsxs)(de.Ay, {
                            className: "mb-[18px]",
                            children: [(0, E.jsxs)(de.Ay, {
                                className: "leading-[28px] font-semibold text-[20px]",
                                children: [l, "/", d]
                            }), (0, E.jsxs)(de.Ay, {
                                className: "".concat(f === c.Vl.BUY ? "text-Buy" : "text-Sell", " text-[14px] leading-[22px]"),
                                children: [t((0, me.u)(p)), " / ", t(f)]
                            })]
                        }), (0, E.jsx)(de.Ay, {
                            as: "ul",
                            style: {
                                listStyle: "none",
                                borderBottom: "1px solid",
                                borderBottomColor: "var(--color-Line)",
                                paddingBottom: "16px",
                                marginBottom: "16px"
                            },
                            children: (0, E.jsxs)(de.Ay, {
                                as: "li",
                                className: "leading-[30px]",
                                children: [(0, E.jsx)(ut, {
                                    children: t("autoTransfer")
                                }), (0, E.jsxs)(ct, {
                                    children: [(0, T.tv)(_), " ", y]
                                })]
                            })
                        }), (0, E.jsx)(Ie.A, {
                            defaultChecked: !0,
                            onChange: function(e, t) {
                                n(!i)
                            },
                            sz: "md",
                            className: "!text-[12px] !leading-[18px] items-start mb-[16px]",
                            children: t("no-autotrans-again", {
                                defaultValue: "Don't display double confirmation for Auto Transfer again. You can also adjust it in Preferences."
                            })
                        }), (0, E.jsx)(ot.A, {
                            className: "mt-[4px] mb-[24px] w-full",
                            variant: "primary",
                            sz: "middle",
                            onClick: r,
                            children: t("confirm-v2")
                        })]
                    })
                },
                dt = function() {
                    var e = (0, j._)(Q().mark((function e(t, r) {
                        var n, i, a, s, u, l, d, p, f, m, v, g, y, T, _, A, b, S, h, x, E, R;
                        return Q().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.modalRef, i = t.getI18n, a = t.orderConfirmStatus, s = t.reduxDispatch, u = t.payload, l = t.spotAsset, d = t.extra, p = a.marginAutoTransfer, f = void 0 === p || p, m = d.tradeType, v = d.willBorrowAmountApiRaw, g = m === I.Gr.CROSS ? at.iu : st.dJ, "" === v) {
                                        e.next = 8;
                                        break
                                    }
                                    e.t0 = v, e.next = 11;
                                    break;
                                case 8:
                                    return e.next = 10, g(u);
                                case 10:
                                    e.t0 = e.sent;
                                case 11:
                                    y = e.t0, T = function(e) {
                                        s.userCenter.updateOrderConfirmStatus({
                                            key: "autoBorrowRepay",
                                            value: e
                                        })
                                    }, _ = d.base, A = d.quote, b = u.side, S = (l[_] || {}).free, h = (l[A] || {}).free, x = b === c.Vl.BUY ? h : S, E = "0", E = y < x ? y : x, f && Number(E) > 0 ? (R = o().createElement(lt, {
                                        getI18n: i,
                                        onContinue: function() {
                                            r(), n.current.close()
                                        },
                                        updateOrderConfirmStatus: T,
                                        marginAutoTransfer: f,
                                        willBorrowAmount: y,
                                        extra: d,
                                        payload: u,
                                        spotAsset: l
                                    }), n.current.create({
                                        content: R,
                                        showFooter: !1,
                                        showClose: !0,
                                        canMaskClick: !0
                                    })) : r();
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                pt = r("LtgJ"),
                ft = r("H8jA"),
                mt = r("tbl2"),
                vt = r("zx3+"),
                gt = r("ctcW"),
                yt = function(e) {
                    var t = e.base,
                        r = e.quote,
                        n = e.collateRate,
                        i = void 0 === n ? [] : n,
                        o = e.rankRatios,
                        a = void 0 === o ? {} : o,
                        s = e.quoteRankRatios,
                        u = void 0 === s ? {} : s,
                        c = 1,
                        l = u[r] ? u[r] : (null === u || void 0 === u ? void 0 : u.default) || 1;
                    return null === i || void 0 === i || i.forEach((function(e) {
                        var r = e.assetNames,
                            n = void 0 === r ? [] : r,
                            i = e.rank,
                            o = void 0 === i ? "" : i;
                        n.includes(t) && (c = a[o] || c)
                    })), c * l
                },
                Tt = function(e) {
                    var t = e.formData,
                        r = e.orderQuantity,
                        n = e.maxOrder,
                        i = e.exchangeInfo;
                    if (t.estfee) {
                        var o = (null === i || void 0 === i ? void 0 : i.baseCommissionPrecision) || 8,
                            a = (null === i || void 0 === i ? void 0 : i.quoteCommissionPrecision) || 8,
                            s = t.side === I.Vl.BUY ? o : a,
                            u = (0, d._)(t.estfee.split(" "), 2),
                            c = u[0],
                            l = u[1],
                            p = (0, T.lw)((0, T.k3)(c, r), n),
                            f = (0, vt.gC)(p, s);
                        t.estfee = "".concat(f, " ").concat(l)
                    }
                },
                _t = function(e, t, r, n) {
                    var o = e.getI18n,
                        u = e.getMarketPrice,
                        l = e.orderConfirmStatus,
                        p = e.urlConfig,
                        m = e.locale,
                        v = e.base,
                        y = e.quote,
                        T = e.userAssets,
                        A = e.minQtyPrecision,
                        b = e.minTotalPrecision,
                        S = t.side,
                        h = t.mode,
                        x = t.orderType,
                        R = t.tradeType,
                        O = t.qtyTotalMode,
                        C = t.postOnly,
                        N = t.iceBerg,
                        L = t.timeInForce,
                        P = t.sorEnable,
                        k = t.tpsl,
                        M = t.balanceWallet,
                        w = t.getBalanceWallet,
                        U = "".concat(v).concat(y),
                        B = (0, V.I)((function(e) {
                            return e.isSigned
                        })),
                        q = (0, V.I)((function(e) {
                            return e.setIsShowDialog
                        })),
                        F = (0, a.d4)(G.makeBannedProduct),
                        J = (0, a.d4)(Y.makeMarginEffectType),
                        X = (0, a.wA)(),
                        ee = (0, a.d4)(Y.makeIsolatedCoeff),
                        te = ((0, H.ZU)() || {}).takerCommission,
                        re = (0, $.z)().forceLiquidationBar,
                        ne = (0, Z.T)(),
                        ie = (0, s.h_5)().isCM2_0,
                        oe = (0, s.xMv)().assetleverageBracketList,
                        ae = (0, s.stA)().isAuto,
                        se = (0, s.L1A)().isAuto,
                        ue = (0, s.dUb)(),
                        ce = (0, D.Zf)(U),
                        le = (0, W.K)((function(e) {
                            return e.isNeedSigned
                        })),
                        de = (0, W.K)((function(e) {
                            return e.setShowDialog
                        })),
                        pe = function(e) {
                            var t = e.base,
                                r = void 0 === t ? "" : t,
                                n = e.quote,
                                o = void 0 === n ? "" : n,
                                u = e.minQtyPrecision,
                                c = void 0 === u ? 8 : u,
                                l = e.minTotalPrecision,
                                d = void 0 === l ? 8 : l,
                                p = (0, gt.k)(),
                                m = (0, a.d4)(Y.makeCollateRate),
                                v = (0, a.d4)((function(e) {
                                    return e.margin.rankRatios
                                })),
                                g = (0, a.d4)((function(e) {
                                    return e.margin.quoteRankRatios
                                })),
                                y = (0, pt.Z)(),
                                T = y.openModal,
                                _ = y.closeModal,
                                A = (0, s.ok2)().getI18n,
                                b = "".concat(r).concat(o),
                                S = p[b],
                                h = null === S || void 0 === S ? void 0 : S.maxMarketOrderQty;
                            return (0, i.useCallback)(function() {
                                var e = (0, j._)(Q().mark((function e(t, n, i) {
                                    var a, s, u;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (a = yt({
                                                        base: r,
                                                        quote: o,
                                                        collateRate: m,
                                                        rankRatios: v,
                                                        quoteRankRatios: g
                                                    }), s = (null === t || void 0 === t ? void 0 : t.quoteOrderQty) ? Number(null === t || void 0 === t ? void 0 : t.quoteOrderQty) / Number(i) : Number(null === t || void 0 === t ? void 0 : t.quantity), u = +(0, f.RI)(Number(h) * a, c, !1), !(s > u)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.abrupt("return", new Promise((function(e, o) {
                                                    T({
                                                        maskClose: !1,
                                                        content: (0, E.jsx)(ft.A, {
                                                            title: A("trd-market-maxamount-title"),
                                                            description: A("trd-market-maxamount-desc", {
                                                                defaultValue: "The maximum market order amount you can place now is {{order}}. Would you like to proceed with this amount?",
                                                                order: "".concat(u, " ").concat(r)
                                                            }),
                                                            icon: (0, E.jsx)(mt.A, {
                                                                className: "w-[80px] h-[80px]"
                                                            }),
                                                            actions: (0, E.jsxs)("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "var(--space-2xs)"
                                                                },
                                                                children: [(0, E.jsx)(ot.A, {
                                                                    onClick: function() {
                                                                        _(), Tt({
                                                                            formData: n,
                                                                            orderQuantity: s,
                                                                            maxOrder: u,
                                                                            exchangeInfo: S
                                                                        }), t.quoteOrderQty ? t.quoteOrderQty = (0, vt.gC)(+u * +i, d) : t.quantity = u, e("")
                                                                    },
                                                                    style: {
                                                                        width: "100%"
                                                                    },
                                                                    children: A("confirm")
                                                                }), (0, E.jsx)(ot.A, {
                                                                    onClick: function() {
                                                                        _(), o()
                                                                    },
                                                                    style: {
                                                                        width: "100%"
                                                                    },
                                                                    variant: "secondary",
                                                                    children: A("trd-dialog-cancel")
                                                                })]
                                                            })
                                                        }),
                                                        className: "z-[1500]"
                                                    })
                                                })));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, r, n) {
                                    return e.apply(this, arguments)
                                }
                            }(), [m, b, v, g, S])
                        }({
                            base: v,
                            quote: y,
                            minQtyPrecision: A,
                            minTotalPrecision: b
                        }),
                        fe = ae && R === I.Gr.ISOLATED || se && R === I.Gr.CROSS,
                        me = (0, i.useCallback)(function() {
                            var e = (0, j._)(Q().mark((function e(t) {
                                var i, a, s, p, m, A, b, I, D, j, G, Y, V, W, H;
                                return Q().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (i = (0, z.Jg)({
                                                    side: S,
                                                    mode: h,
                                                    tradeType: R,
                                                    orderType: x,
                                                    qtyTotalMode: O,
                                                    base: v,
                                                    quote: y,
                                                    data: t,
                                                    isPreMarket: ce
                                                }), !(0, f.V$)(R)) {
                                                e.next = 7;
                                                break
                                            }
                                            if (!le) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return", de(!0));
                                        case 4:
                                            if (B) {
                                                e.next = 7;
                                                break
                                            }
                                            return q("force-open"), e.abrupt("return");
                                        case 7:
                                            if (!F.includes(U)) {
                                                e.next = 10;
                                                break
                                            }
                                            return X.pageStore.updateIfShowBannedWarning(!0), e.abrupt("return");
                                        case 10:
                                            if (a = S || (null === t || void 0 === t ? void 0 : t.side), s = u(), p = (0, _.nm)(t, {
                                                    side: a,
                                                    mode: h,
                                                    symbol: U,
                                                    tradeType: R,
                                                    orderType: x,
                                                    qtyTotalMode: O,
                                                    postOnly: C,
                                                    iceBerg: N,
                                                    timeInForce: L,
                                                    marketPrice: s,
                                                    tpsl: k,
                                                    balanceWallet: w ? w(a) : M,
                                                    asset: a === c.Vl.BUY ? y : v
                                                }), !(0, f.V$)(R) || x !== c.W4.MARKET) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 16, pe(p, t, s);
                                        case 16:
                                            return e.t0 = d._, e.next = 19, (0, _.z2)(p, x, {
                                                base: v,
                                                quote: y,
                                                tradeType: R,
                                                userAssets: T,
                                                orderConfirmStatus: l,
                                                qtyTotalMode: O,
                                                isolatedCoeff: ee,
                                                marketPrice: s,
                                                takerCommission: te,
                                                isAuto: ae || se,
                                                spotAsset: ue,
                                                effectType: J,
                                                crossMargionForceLiquidationBar: re,
                                                priceIndexMap: ne,
                                                assetleverageBracketList: oe,
                                                isCM2_0: ie
                                            });
                                        case 19:
                                            if (e.t1 = e.sent, m = (0, e.t0)(e.t1, 3), A = m[0], b = m[1], I = m[2], D = I.willBorrowAmount, j = I.willRepayAmount, G = I.marginAutoBorrow, Y = I.marginAutoRepay, V = I.estLiqPrice, W = I.asssetChange, H = I.willBorrowAmountApiRaw, !(b || !(0, K.Fr)() && A)) {
                                                e.next = 36;
                                                break
                                            }
                                            return r.current.create({
                                                content: (0, E.jsx)(it, {
                                                    payload: p,
                                                    showTip: A,
                                                    orderType: x,
                                                    qtyTotalMode: O,
                                                    showMarginTip: b,
                                                    borrowAmount: D,
                                                    willBorrowAmountApiRaw: H,
                                                    repayAmount: j,
                                                    marginAutoBorrow: G,
                                                    marginAutoRepay: Y,
                                                    estfee: null === t || void 0 === t ? void 0 : t.estfee,
                                                    tradeType: R,
                                                    modalRef: r,
                                                    sorEnable: P,
                                                    estLiqPrice: V,
                                                    asssetChange: W,
                                                    tpsl: k,
                                                    isAuto: fe,
                                                    orderConfirmStatus: l
                                                }),
                                                showClose: !0,
                                                onOk: function() {
                                                    return !(null === p || void 0 === p ? void 0 : p.disableConfirm) && (delete p.disableConfirm, n(R, p))
                                                },
                                                okText: o("confirm-v2", {
                                                    defaultValue: "Confirm"
                                                }),
                                                onCancel: function() {
                                                    (0, z.yA)("place_new_order", "tradeArea", "userCanceled", i)
                                                }
                                            }), e.abrupt("return");
                                        case 36:
                                            if (!(0, f.V$)(R) || !ae && !se) {
                                                e.next = 40;
                                                break
                                            }
                                            return e.next = 39, dt({
                                                modalRef: r,
                                                getI18n: o,
                                                orderConfirmStatus: l,
                                                reduxDispatch: X,
                                                payload: (0, g._)({}, p),
                                                spotAsset: ue,
                                                extra: {
                                                    base: v,
                                                    quote: y,
                                                    tradeType: R,
                                                    orderType: x,
                                                    willBorrowAmountApiRaw: H
                                                }
                                            }, (function() {
                                                return n(R, p)
                                            }));
                                        case 39:
                                            return e.abrupt("return");
                                        case 40:
                                            n(R, p);
                                        case 41:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [R, B, F, U, S, h, x, O, u, v, y, T, l, q, X.pageStore, r, o, p.PREFERENCE_URL, m, n, C, N, L, te, ae, ue, se, ce, M, w, le, de]);
                    return me
                };
            var At = function(e, t) {
                var r = e.calcPrice,
                    n = e.orderType,
                    o = e.side,
                    a = e.qtyTotalMode,
                    s = e.sildeUpdate,
                    u = (0, i.useContext)(q.cb),
                    l = u.ticker,
                    d = l.minTotalPrecision,
                    p = l.tickSizePrecision,
                    f = (0, u.getBook)(),
                    m = (0, i.useCallback)((function(e) {
                        if (n !== c.W4.MARKET) e.total = (0, T.lw)(e.quantity, r).toFixed(d), t({
                            type: c.Bd.FIELD_CHANGE,
                            payload: {
                                orderType: n,
                                field: {
                                    total: {
                                        value: e.total,
                                        invalid: !1
                                    }
                                }
                            }
                        });
                        else if (s && o === c.Vl.SELL && a === c.o1.TOTAL) {
                            var i, u, l = (null !== e && void 0 !== e ? e : {}).quantity,
                                m = void 0 === l ? 0 : l,
                                v = (null !== f && void 0 !== f ? f : {}).bids,
                                g = void 0 === v ? [] : v,
                                y = (0, T.lw)(null !== (u = null === g || void 0 === g || null === (i = g[0]) || void 0 === i ? void 0 : i[0]) && void 0 !== u ? u : r, .9995).toFixed(p),
                                _ = 0 === +y ? "" : (0, T.lw)(m, y).toFixed(d);
                            e.total = _, t({
                                type: c.Bd.FIELD_CHANGE,
                                payload: {
                                    orderType: n,
                                    field: {
                                        total: {
                                            value: e.total,
                                            invalid: !1
                                        }
                                    }
                                }
                            })
                        }
                    }), [o, a, f, p, r, t, d, n]);
                return m
            };
            var bt = function(e, t) {
                var r = e.calcPrice,
                    n = e.orderType,
                    o = e.side,
                    a = e.qtyTotalMode,
                    s = e.sildeUpdate,
                    u = (0, i.useContext)(q.cb),
                    l = u.ticker,
                    d = l.minQtyPrecision,
                    p = l.tickSizePrecision,
                    f = (0, u.getBook)(),
                    m = (0, i.useCallback)((function(e) {
                        if (s && o === c.Vl.BUY && a === c.o1.QUANTITY && n === c.W4.MARKET) {
                            var i, u, l = (null !== e && void 0 !== e ? e : {}).total,
                                m = void 0 === l ? 0 : l,
                                v = (null !== f && void 0 !== f ? f : {}).asks,
                                g = void 0 === v ? [] : v,
                                y = (0, T.lw)(null !== (u = null === g || void 0 === g || null === (i = g[0]) || void 0 === i ? void 0 : i[0]) && void 0 !== u ? u : r, 1.0005).toFixed(p),
                                _ = 0 === +y ? "" : (0, T.k3)(m, y).toFixed(d);
                            e.quantity = _, t({
                                type: c.Bd.FIELD_CHANGE,
                                payload: {
                                    orderType: n,
                                    field: {
                                        quantity: {
                                            value: e.quantity,
                                            invalid: !1
                                        }
                                    }
                                }
                            })
                        }
                    }), [r, o, a, n, f, d, p, t]);
                return m
            };
            var St = r("kU6N"),
                ht = function(e) {
                    var t, r, n = (null === e || void 0 === e || null === (t = e.messageDetail) || void 0 === t ? void 0 : t.type) || "";
                    (null === e || void 0 === e ? void 0 : e.success) || n && "toast" !== n || (0, St.rG)(null === e || void 0 === e ? void 0 : e.message, {
                        header: null === e || void 0 === e || null === (r = e.messageDetail) || void 0 === r ? void 0 : r.title,
                        message: null === e || void 0 === e ? void 0 : e.message,
                        variant: "error"
                    })
                },
                xt = r("fnC5"),
                Et = r("c6Y9"),
                It = r("XNzI"),
                Rt = r("CAdv"),
                Ot = r("fXRy"),
                Ct = r("ozYv"),
                Nt = r("m6e0"),
                Lt = r("pIAZ"),
                Pt = r("obHX"),
                kt = r("wcOk"),
                Mt = r("oY5g"),
                Dt = r("KRo/"),
                wt = r("rk0M"),
                Ut = "trd-orderform-guide-convert",
                Bt = function(e) {
                    var t = e.tip,
                        r = e.getI18n,
                        n = e.isReminderRef,
                        i = (0, d._)((0, wt.R)(Ut, !1), 2),
                        o = i[0],
                        a = i[1];
                    return (0, E.jsxs)("div", {
                        className: "mb-[16px]",
                        children: [(0, E.jsx)("div", {
                            style: {
                                textAlign: "center"
                            },
                            children: (0, E.jsx)(Dt.A, {
                                width: "80px",
                                height: "80px"
                            })
                        }), (0, E.jsx)("div", {
                            children: t
                        }), (0, E.jsxs)("label", {
                            style: {
                                display: "flex",
                                marginTop: "12px"
                            },
                            htmlFor: "orderform-guide-convert",
                            "data-sensors-click": !0,
                            children: [(0, E.jsx)(Mt.A, {
                                id: "orderform-guide-convert",
                                size: 20,
                                checked: o,
                                onChange: function(e) {
                                    var t = e.target.checked;
                                    a(t), n.current = t
                                }
                            }), (0, E.jsx)(O.A, {
                                children: r("hide-7d")
                            })]
                        })]
                    })
                },
                qt = function(e) {
                    var t = e.getI18n,
                        r = e.message,
                        n = e.base,
                        i = e.quote,
                        a = e.modalRef,
                        s = e.locale,
                        u = e.code,
                        l = e.side,
                        d = e.qtyTotalMode,
                        p = e.payload,
                        f = (0, wt.u)(Ut, 6048e5),
                        m = {
                            current: f
                        },
                        v = {};
                    return v = d === c.o1.QUANTITY ? l === c.Vl.BUY ? {
                        targetAmount: null === p || void 0 === p ? void 0 : p.quantity
                    } : {
                        fromAmount: null === p || void 0 === p ? void 0 : p.quantity
                    } : l === c.Vl.BUY ? {
                        fromAmount: null === p || void 0 === p ? void 0 : p.quoteOrderQty
                    } : {
                        targetAmount: null === p || void 0 === p ? void 0 : p.quoteOrderQty
                    }, f || a.current.create({
                        okText: t("try-convert"),
                        cancelText: t("cancel"),
                        content: o().createElement(Bt, {
                            tip: r,
                            getI18n: t,
                            isReminderRef: m
                        }),
                        sx: {
                            maxWidth: "360px"
                        },
                        onOk: function() {
                            var e;
                            (0, ne.u4)("$WebClick", {
                                type: m.current ? "dont_remind_is_selected" : "dont_remind_is_not_selected",
                                error: "027056" === u ? "minNotional" : "maxQty",
                                eventName: "try_convert_dialog",
                                df_source: "spot",
                                $element_id: "try_convert"
                            }), null === window || void 0 === window || null === (e = window.CONVERT_WIDGET) || void 0 === e || e.open((0, g._)({
                                source: "SPOT_WEB",
                                fromCoin: l === c.Vl.BUY ? i : n,
                                targetCoin: l === c.Vl.BUY ? n : i,
                                walletType: "SPOT",
                                lang: s
                            }, v))
                        },
                        onCancel: function() {
                            (0, ne.u4)("$WebClick", {
                                type: m.current ? "dont_remind_is_selected" : "dont_remind_is_not_selected",
                                error: "027056" === u ? "minNotional" : "maxQty",
                                eventName: "try_convert_dialog",
                                df_source: "spot",
                                $element_id: "cancel"
                            })
                        }
                    }), f
                },
                jt = r("lSUd"),
                Ft = r("HuzR"),
                Qt = r("sXI5"),
                Gt = function(e) {
                    var t = e.getI18n;
                    return (0, E.jsxs)(X.A, {
                        children: [(0, E.jsx)(Dt.A, {
                            width: "80px",
                            height: "80px"
                        }), (0, E.jsx)(O.A, {
                            sx: {
                                marginTop: "24px",
                                color: "t.primary",
                                lineHeight: "28px",
                                textAlign: "center",
                                fontSize: "14px"
                            },
                            children: t("transfer-failed")
                        })]
                    })
                },
                Yt = function() {
                    var e = (0, j._)(Q().mark((function e(t) {
                        var r, n, i, o, a, s, u, l, d, p, f, m, v, g, y, T;
                        return Q().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.isAuto, n = t.payload, i = t.spotAsset, o = t.base, a = t.quote, s = t.side, u = t.getI18n, l = t.isLight, d = t.isCrossAuto, r || d) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !0
                                    });
                                case 3:
                                    if (p = "".concat(o).concat(a), f = (i[o] || {}).free, m = (i[a] || {}).free, v = s === c.Vl.BUY ? m : f, g = s === c.Vl.BUY ? a : o, !r) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.next = 11, (0, st.dJ)(n);
                                case 11:
                                    e.t0 = e.sent, e.next = 17;
                                    break;
                                case 14:
                                    return e.next = 16, (0, at.iu)(n);
                                case 16:
                                    e.t0 = e.sent;
                                case 17:
                                    if (y = e.t0, T = function() {
                                            return Qt.Ay.close()
                                        }, !(Number(y) <= 0 || Number(v) <= 0)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !0
                                    });
                                case 21:
                                    if (!(y <= v)) {
                                        e.next = 43;
                                        break
                                    }
                                    if (!r) {
                                        e.next = 34;
                                        break
                                    }
                                    return e.next = 25, (0, jt.GL)({
                                        asset: g,
                                        amount: y,
                                        symbol: p,
                                        target: "SPOT",
                                        clientTag: "AUTO_TRANSFER",
                                        targetSymbol: p
                                    });
                                case 25:
                                    if (!e.sent.success) {
                                        e.next = 30;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !0
                                    });
                                case 30:
                                    return Qt.Ay.confirm({
                                        isLight: l,
                                        okText: u("ok"),
                                        content: (0, E.jsx)(Gt, {
                                            getI18n: u
                                        }),
                                        sx: {
                                            maxWidth: "360px"
                                        }
                                    }).then((0, j._)(Q().mark((function e() {
                                        return Q().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    T();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).catch((function() {
                                        T()
                                    })), e.abrupt("return", {
                                        success: !1
                                    });
                                case 32:
                                    e.next = 43;
                                    break;
                                case 34:
                                    return e.next = 36, (0, Ft.NP)({
                                        asset: g,
                                        amount: y,
                                        clientTag: "AUTO_TRANSFER",
                                        target: "SPOT"
                                    });
                                case 36:
                                    if (!e.sent.success) {
                                        e.next = 41;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !0
                                    });
                                case 41:
                                    return Qt.Ay.confirm({
                                        isLight: l,
                                        okText: u("ok"),
                                        content: (0, E.jsx)(Gt, {
                                            getI18n: u
                                        }),
                                        sx: {
                                            maxWidth: "360px"
                                        }
                                    }).then((0, j._)(Q().mark((function e() {
                                        return Q().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    T();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).catch((function() {
                                        T()
                                    })), e.abrupt("return", {
                                        success: !1
                                    });
                                case 43:
                                    if (!(y > v)) {
                                        e.next = 65;
                                        break
                                    }
                                    if (!r) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.next = 47, (0, jt.GL)({
                                        asset: g,
                                        amount: v,
                                        symbol: p,
                                        target: "SPOT",
                                        clientTag: "AUTO_TRANSFER",
                                        targetSymbol: p
                                    });
                                case 47:
                                    if (!e.sent.success) {
                                        e.next = 52;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !0
                                    });
                                case 52:
                                    return Qt.Ay.confirm({
                                        isLight: l,
                                        okText: u("ok"),
                                        content: (0, E.jsx)(Gt, {
                                            getI18n: u
                                        }),
                                        sx: {
                                            maxWidth: "360px"
                                        }
                                    }).then((0, j._)(Q().mark((function e() {
                                        return Q().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    T();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).catch((function() {
                                        T()
                                    })), e.abrupt("return", {
                                        success: !1
                                    });
                                case 54:
                                    e.next = 65;
                                    break;
                                case 56:
                                    return e.next = 58, (0, Ft.NP)({
                                        asset: g,
                                        amount: v,
                                        clientTag: "AUTO_TRANSFER",
                                        target: "SPOT"
                                    });
                                case 58:
                                    if (!e.sent.success) {
                                        e.next = 63;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !0
                                    });
                                case 63:
                                    return Qt.Ay.confirm({
                                        isLight: l,
                                        okText: u("ok"),
                                        content: (0, E.jsx)(Gt, {
                                            getI18n: u
                                        }),
                                        sx: {
                                            maxWidth: "360px"
                                        }
                                    }).then((0, j._)(Q().mark((function e() {
                                        return Q().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    T();
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))).catch((function() {
                                        T()
                                    })), e.abrupt("return", {
                                        success: !1
                                    });
                                case 65:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Kt = function(e) {
                    var t = e.msg;
                    return (0, E.jsxs)(R.A, {
                        flexDirection: "column",
                        alignItems: "center",
                        children: [(0, E.jsx)(xt.A, {
                            size: 72,
                            sx: {
                                mb: "xs"
                            }
                        }), (0, E.jsx)(O.A, {
                            children: t
                        })]
                    })
                };

            function Vt(e, t) {
                e({
                    type: c.Bd.SHADOW_CHANGE,
                    payload: {
                        isFetching: t
                    }
                })
            }
            var Wt = function(e, t, r, n) {
                    var o = e.getI18n,
                        a = e.base,
                        u = e.quote,
                        l = e.idPhoto,
                        f = e.locale,
                        m = e.urlConfig,
                        v = e.magicRefresh,
                        T = e.getMarketPrice,
                        b = e.getBook,
                        S = e.sildeUpdate,
                        h = e.tickSizePrecision,
                        R = e.minQtyPrecision,
                        O = e.onSuccess,
                        C = e.qtyTotalMode,
                        N = e.mode,
                        L = e.sorEnable,
                        P = t.side,
                        k = t.orderType,
                        M = t.placeType,
                        w = void 0 === M ? "" : M,
                        U = (0, It._)().setMessageInfo,
                        B = (0, d._)((0, Lt.y)(), 1)[0],
                        q = (0, s.stA)().isAuto,
                        F = (0, D.Zf)("".concat(a).concat(u)),
                        G = (0, s.L1A)().isAuto,
                        Y = (0, s.dUb)(),
                        V = (0, p.Ey)(),
                        W = (0, Pt.PY)(),
                        H = (0, s.DPo)().isLight,
                        $ = (0, kt.kT)(a, u),
                        Z = (0, i.useCallback)((function(e) {
                            B && U(e)
                        }), [B, U]),
                        J = (0, i.useCallback)(function() {
                            var e = (0, j._)(Q().mark((function e(t, i) {
                                var s, d, p, M, D, U, B, j, J, X, ee, te, re, ne, ie, oe, ae, se, ue;
                                return Q().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return (0, x.ML)({
                                                sildeUpdate: S,
                                                side: P,
                                                orderType: k,
                                                placeType: w,
                                                payload: i,
                                                getMarketPrice: T,
                                                getBook: b,
                                                tickSizePrecision: h,
                                                minQtyPrecision: R
                                            }), Vt(r, !0), s = Date.now(), d = !1, p = "error_toast", e.next = 7, Yt({
                                                isAuto: q,
                                                payload: i,
                                                spotAsset: Y,
                                                base: a,
                                                quote: u,
                                                side: P,
                                                getI18n: o,
                                                isLight: H,
                                                isCrossAuto: G
                                            });
                                        case 7:
                                            if (M = e.sent, M.success) {
                                                e.next = 12;
                                                break
                                            }
                                            return Vt(r, !1), e.abrupt("return");
                                        case 12:
                                            return e.next = 14, (0, _.oD)(t, i, L);
                                        case 14:
                                            if (D = e.sent, U = D.success, B = D.message, j = D.code, J = D.data, X = (0, z.Jg)({
                                                    side: P,
                                                    mode: N,
                                                    tradeType: t,
                                                    orderType: k,
                                                    qtyTotalMode: C,
                                                    base: a,
                                                    quote: u,
                                                    data: i
                                                }), !U) {
                                                e.next = 21;
                                                break
                                            }
                                            ee = {
                                                title: o("ordertitle"),
                                                text: ""
                                            }, (0, Ot.b)({
                                                side: P,
                                                quote: u,
                                                base: a,
                                                orderType: k,
                                                tradeType: (0, Ct.Cl)(t),
                                                orderId: null === J || void 0 === J ? void 0 : J.clientOrderId
                                            }), i.sideEffectType && i.sideEffectType !== c.Wb.NO_SIDE_EFFECT || (ee = {
                                                title: o("".concat(P || (null === i || void 0 === i ? void 0 : i.side)).concat(k, "Title")),
                                                text: o("".concat(P || (null === i || void 0 === i ? void 0 : i.side)).concat(k, "Text"), {
                                                    quantity: i.quantity || (null === J || void 0 === J ? void 0 : J.executedQty),
                                                    base: a,
                                                    quote: u
                                                })
                                            }), te = (0, g._)({
                                                sliderQty: {
                                                    value: "",
                                                    invalid: !1
                                                },
                                                quantity: {
                                                    value: "",
                                                    invalid: !1
                                                },
                                                icebergQty: {
                                                    value: "",
                                                    invalid: !1
                                                }
                                            }, A), k !== c.W4.MARKET && (te.total = {
                                                value: "",
                                                invalid: !1
                                            }), r({
                                                type: c.Bd.FIELD_CHANGE,
                                                payload: {
                                                    orderType: k,
                                                    field: te
                                                }
                                            }), v && v(), Z({
                                                header: ee.title,
                                                message: ee.text,
                                                variant: "success"
                                            }), V(i.sideEffectType), null === O || void 0 === O || O(), $(null === i || void 0 === i ? void 0 : i.assetCollectArg), e.next = 32;
                                            break;
                                        case 21:
                                            if (B !== Rt.zj) {
                                                e.next = 31;
                                                break
                                            }
                                            return re = m.IDENTITY_URL, ne = m.WITHDRAWAL_URL, ie = o(1 !== l ? "kycverify" : "gotowithdraw"), oe = 1 !== l ? re : ne, ae = o(1 !== l ? "goToIdentityTip" : "forbidentLoginTip"), n.current.create({
                                                content: (0, E.jsx)(Kt, {
                                                    msg: ae
                                                }),
                                                onOk: function() {
                                                    window.location.href = (0, K.J1)(oe, {
                                                        locale: f,
                                                        coin: "USD"
                                                    })
                                                },
                                                okText: ie,
                                                cancelText: o("notnow")
                                            }), Vt(r, !1), e.abrupt("return");
                                        case 31:
                                            t === I.Gr.SPOT && !W && "string" === typeof j && ["027056", "027060"].includes(j) && B ? (qt({
                                                getI18n: o,
                                                message: B,
                                                locale: f,
                                                base: a,
                                                quote: u,
                                                modalRef: n,
                                                code: j,
                                                side: P,
                                                qtyTotalMode: C,
                                                payload: i
                                            }) && ht(D), d = !0, p = "try_convert_dialog") : "string" === typeof j && j.startsWith("200003") && B || (ht(D), d = !0);
                                        case 32:
                                            se = "flashorder" === w ? "flashOrder" : "tradeArea", d ? (ue = (0, Et.v4)(), (0, z.m_)("place_new_order", se, j, X, p, F), (0, Nt.mc)(ue, s, {
                                                placeType: w
                                            }), (0, Nt.wW)(ue, D)) : ((0, Nt.mc)(null === J || void 0 === J ? void 0 : J.clientOrderId, s, {
                                                placeType: w
                                            }), (0, Nt.lR)(null === J || void 0 === J ? void 0 : J.clientOrderId), (0, z.ST)("place_new_order", se, (0, y._)((0, g._)({}, X), {
                                                orderId: null === J || void 0 === J ? void 0 : J.orderId,
                                                orders: null === J || void 0 === J ? void 0 : J.orders,
                                                isPreMarket: F
                                            }))), Vt(r, !1);
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [r, o, Z, k, v, P, a, u, m, l, n, f, V, S, w, O, L, $]);
                    return J
                },
                zt = function(e) {
                    var t = e.gapTip,
                        r = e.getI18n,
                        n = e.hiddenCheckReminder,
                        i = (0, d._)((0, wt.R)("trd-orderform-checked-reminders", !1, 36e5), 2),
                        o = i[0],
                        a = i[1];
                    return (0, E.jsxs)("div", {
                        className: "mb-[16px]",
                        children: [(0, E.jsx)("div", {
                            className: "mb-[16px] text-[14px]",
                            children: t
                        }), !n && (0, E.jsxs)("label", {
                            style: {
                                display: "flex",
                                marginTop: "16px",
                                paddingTop: "16px",
                                borderTop: "1px solid var(--color-Line)",
                                fontSize: "12px"
                            },
                            htmlFor: "orderform-checked-reminders",
                            "data-sensors-click": !0,
                            children: [(0, E.jsx)(Ie.A, {
                                id: "orderform-checked-reminders",
                                size: 20,
                                checked: o,
                                onChange: function(e, t) {
                                    return a(t)
                                }
                            }), (0, E.jsx)(de.Ay, {
                                className: "text-[12px]",
                                children: r("reminders-1")
                            })]
                        })]
                    })
                },
                Ht = r("dZDZ"),
                $t = r("WOJV");
            const Zt = function(e) {
                var t = e.isSpotHasNoAssets,
                    r = e.tradeType,
                    n = e.base,
                    o = (0, ee.Bl)();
                return (0, i.useCallback)((function() {
                    r === I.Gr.SPOT && t && ((0, $t.aY)(), (0, Ht.y)({
                        locale: o,
                        staticHost: I.K5,
                        coin: n,
                        position: "homepage",
                        bizScene: "Spot",
                        depositToWalletType: "MAIN",
                        depositFromWalletType: "CARD",
                        onClose: function() {
                            (0, $t.ZF)({
                                $element_id: "close"
                            })
                        }
                    }).catch((function() {
                        (0, $t.ZF)({
                            $element_id: "close"
                        })
                    })))
                }), [o, t, r, n])
            };
            var Jt = r("b9LU"),
                Xt = function(e, t) {
                    var r = (0, i.useContext)(Jt.x).setOrderType,
                        n = (0, a.wA)(),
                        o = (0, B.C)();
                    return (0, i.useCallback)((function(i) {
                        null === r || void 0 === r || r(c.W4.LIMIT), e({
                            type: c.Bd.FIELD_CHANGE,
                            payload: {
                                orderType: c.W4.LIMIT
                            }
                        }), Promise.resolve().then((function() {
                            if (t)(null === i || void 0 === i ? void 0 : i.quantity) ? t && t("", "quantity", i.quantity) : (null === i || void 0 === i ? void 0 : i.total) && t && t("", "total", i.total);
                            else {
                                var e = o();
                                n.orderForm.updateState({
                                    priceQty: {
                                        price: e,
                                        side: "BUY" === i.side ? "SELL" : "BUY",
                                        qty: i.quantity
                                    }
                                })
                            }
                        }))
                    }), [t])
                },
                er = r("MIKm"),
                tr = r("DcxV"),
                rr = function(e, t, r, n) {
                    var a = e.side,
                        u = e.mode,
                        l = void 0 === u ? c.V9.NORMAL : u,
                        p = e.tradeType,
                        f = e.orderType,
                        m = e.mostAmount,
                        v = e.mostTotalAmount,
                        T = e.isFetching,
                        A = e.qtyTotalMode,
                        b = e.calcPrice,
                        S = e.postOnly,
                        h = e.sorEnable,
                        x = e.iceBerg,
                        E = e.timeInForce,
                        I = e.sildeUpdate,
                        R = void 0 !== I && I,
                        O = e.tpsl,
                        C = void 0 !== O && O,
                        N = e.tickSizePrecision,
                        L = e.minQtyPrecision,
                        P = e.onSuccess,
                        k = e.balanceWallet,
                        w = e.curOrderState,
                        j = (0, M.vx)((function(e) {
                            return e.isNeedSign
                        })),
                        F = (0, M.vx)((function(e) {
                            return e.setShowDialog
                        })),
                        Q = (0, D.No)((function(e) {
                            return e.isNeedSign
                        })),
                        G = (0, D.No)((function(e) {
                            return e.setShowDialog
                        })),
                        Y = (0, er.GO)((function(e) {
                            return e.kycStatus
                        })),
                        K = (0, er.GO)((function(e) {
                            return e.setShowDialog
                        })),
                        V = (0, Pt.PY)(),
                        W = function() {
                            var e = (0, s.dUb)(),
                                t = Object.keys(e);
                            return t.every((function(t) {
                                var r;
                                return (null === (r = e[t]) || void 0 === r ? void 0 : r.total) <= 0
                            })) && 0 !== t.length
                        }(),
                        H = (0, i.useContext)(q.cb),
                        $ = H.base,
                        Z = H.quote,
                        X = H.locale,
                        ee = H.ticker,
                        te = H.getI18n,
                        re = H.getBook,
                        ne = H.hideMask,
                        ie = H.userInfo,
                        oe = H.urlConfig,
                        ae = H.userAssets,
                        se = H.isLoggedIn,
                        ue = H.magicRefresh,
                        ce = H.getMarketPrice,
                        le = (0, D.Zf)("".concat($).concat(Z)),
                        de = (0, B.C)("".concat(Z, "USDT")),
                        pe = Xt(t, n),
                        fe = ie || {},
                        me = fe.idPhoto,
                        ve = void 0 === me ? "" : me,
                        ge = fe.orderConfirmStatus,
                        ye = Wt({
                            getI18n: te,
                            base: $,
                            quote: Z,
                            idPhoto: ve,
                            locale: X,
                            urlConfig: oe,
                            magicRefresh: ue,
                            getBook: re,
                            getMarketPrice: ce,
                            sildeUpdate: R,
                            tickSizePrecision: N,
                            minQtyPrecision: L,
                            onSuccess: P,
                            qtyTotalMode: A,
                            mode: l,
                            sorEnable: h
                        }, {
                            side: a,
                            orderType: f
                        }, t, r),
                        Te = _t({
                            getI18n: te,
                            getMarketPrice: ce,
                            orderConfirmStatus: ge,
                            locale: X,
                            urlConfig: oe,
                            base: $,
                            quote: Z,
                            userAssets: ae,
                            minQtyPrecision: L,
                            minTotalPrecision: null === ee || void 0 === ee ? void 0 : ee.minTotalPrecision
                        }, {
                            side: a,
                            mode: l,
                            tradeType: p,
                            orderType: f,
                            qtyTotalMode: A,
                            postOnly: S,
                            iceBerg: x,
                            timeInForce: E,
                            sorEnable: h,
                            tpsl: C,
                            balanceWallet: k
                        }, r, ye),
                        _e = At({
                            calcPrice: b,
                            orderType: f,
                            side: a,
                            qtyTotalMode: A,
                            sildeUpdate: R
                        }, t),
                        Ae = bt({
                            calcPrice: b,
                            orderType: f,
                            side: a,
                            qtyTotalMode: A,
                            sildeUpdate: R
                        }, t),
                        be = Zt({
                            isSpotHasNoAssets: W,
                            tradeType: p,
                            base: $,
                            quote: Z,
                            side: a
                        }),
                        Se = ee.tickSize,
                        he = ee.minQty,
                        xe = ee.minTotal,
                        Ee = (0, i.useCallback)((function(e, n) {
                            var i = (0, tr.i)(n, w),
                                s = (0, z.Jg)({
                                    side: a,
                                    mode: l,
                                    tradeType: p,
                                    orderType: f,
                                    qtyTotalMode: A,
                                    base: $,
                                    quote: Z,
                                    data: i,
                                    isPreMarket: le
                                });
                            if ((0, z.x8)("place_new_order", "tradeArea", s), e && e.preventDefault(), se && !T)
                                if ("PASS" === Y) {
                                    if (j) return F(!0), void(0, z.yA)("place_new_order", "tradeArea", "invalidRiskState", s, le);
                                    if (Q) G(!0);
                                    else {
                                        _e(i), Ae(i), "PASS" == Y && be();
                                        var u = (0, d._)(U(i, te, {
                                                side: a,
                                                minTotal: xe,
                                                orderType: f,
                                                mostAmount: m,
                                                tickSize: Se,
                                                qtyTotalMode: A,
                                                mostTotalAmount: v,
                                                minTrade: he,
                                                marketPrice: ce()
                                            }), 2),
                                            b = u[0],
                                            S = u[1];
                                        if (!b) return t({
                                            type: c.Bd.FIELD_CHANGE,
                                            payload: {
                                                orderType: f,
                                                field: S
                                            }
                                        }), void(0, z.yA)("place_new_order", "tradeArea", "inputIsIllegal", s, le);
                                        ne && ne();
                                        var h = i.price,
                                            x = i.total,
                                            E = i.quantity,
                                            I = ce(),
                                            R = (0, d._)((0, _.YN)(f, te, {
                                                side: a,
                                                price: h,
                                                total: x,
                                                getBook: re,
                                                quantity: E,
                                                qtyTotalMode: A,
                                                tradeType: p,
                                                marketPrice: I,
                                                disableConvert: V
                                            }), 2),
                                            O = R[0],
                                            C = R[1];
                                        ! function(e, t) {
                                            var r = e.modalRef,
                                                n = e.getI18n,
                                                i = e.gapTip,
                                                a = e.showGap,
                                                s = e.side,
                                                u = e.tradeType,
                                                c = e.base,
                                                l = e.quote,
                                                d = e.orderType,
                                                p = e.disableConvert,
                                                f = e.getLastPriceCb,
                                                m = e.swtichLimitCb,
                                                v = e.data,
                                                T = e.marketPrice;
                                            if (a) {
                                                var A = (0, _.KM)({
                                                        getI18n: n,
                                                        side: s,
                                                        tradeType: u,
                                                        base: c,
                                                        quote: l,
                                                        showGap: a,
                                                        orderType: d,
                                                        submitOrder: t,
                                                        disableConvert: p,
                                                        getLastPriceCb: f,
                                                        data: v,
                                                        marketPrice: T,
                                                        swtichLimitCb: m
                                                    }),
                                                    b = A.hiddenCheckReminder,
                                                    S = (0, J._)(A, ["hiddenCheckReminder"]),
                                                    h = o().createElement(zt, {
                                                        gapTip: i,
                                                        getI18n: n,
                                                        hiddenCheckReminder: b
                                                    });
                                                r.current.create((0, y._)((0, g._)({
                                                    content: h
                                                }, S), {
                                                    showIcon: !0
                                                }))
                                            } else t()
                                        }({
                                            modalRef: r,
                                            showGap: O,
                                            gapTip: C,
                                            getI18n: te,
                                            side: a,
                                            tradeType: p,
                                            base: $,
                                            quote: Z,
                                            orderType: f,
                                            disableConvert: V,
                                            getLastPriceCb: de,
                                            data: i,
                                            marketPrice: I,
                                            swtichLimitCb: pe
                                        }, (function() {
                                            return Te(i)
                                        }))
                                    }
                                } else K(!0)
                        }), [se, T, j, _e, te, a, xe, f, m, Se, A, v, he, ce, ne, re, F, t, r, Te, P, Q, le, w]);
                    return Ee
                };
            var nr = r("WT+B"),
                ir = r("nlZ+"),
                or = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        n = [];
                    return K.$W[t] && (n = K.$W[t].filter((function(e) {
                        return e !== r
                    }))), (0, K.tK)(n, e)
                },
                ar = r("eAFj"),
                sr = r("tprX"),
                ur = ((0, ar.A)((function(e) {
                    return {
                        tabSide: "BUY",
                        setTabSide: function(t) {
                            return e((function() {
                                return {
                                    tabSide: t
                                }
                            }))
                        }
                    }
                })), function(e, t, r) {
                    var n = e.mode,
                        o = void 0 === n ? c.V9.NORMAL : n,
                        a = e.tradeType,
                        s = e.isFetching,
                        u = e.getBalanceWallet,
                        l = (0, M.vx)((function(e) {
                            return e.isNeedSign
                        })),
                        p = (0, M.vx)((function(e) {
                            return e.setShowDialog
                        })),
                        f = (0, D.No)((function(e) {
                            return e.isNeedSign
                        })),
                        m = (0, D.No)((function(e) {
                            return e.setShowDialog
                        })),
                        v = (0, er.GO)((function(e) {
                            return e.kycStatus
                        })),
                        T = (0, er.GO)((function(e) {
                            return e.setShowDialog
                        })),
                        A = (0, i.useContext)(q.cb),
                        b = A.base,
                        S = A.quote,
                        h = A.locale,
                        x = A.getI18n,
                        E = A.getBook,
                        I = A.hideMask,
                        R = A.userInfo,
                        O = A.urlConfig,
                        C = A.userAssets,
                        N = A.isLoggedIn,
                        L = A.magicRefresh,
                        P = A.getMarketPrice,
                        k = A.ticker,
                        w = (0, B.C)("".concat(S, "USDT")),
                        U = (0, Pt.PY)(),
                        j = Xt(t),
                        F = R || {},
                        Q = F.idPhoto,
                        G = void 0 === Q ? "" : Q,
                        Y = F.orderConfirmStatus,
                        K = c.o1.QUANTITY,
                        V = c.W4.MARKET,
                        W = (null === k || void 0 === k ? void 0 : k.minQty) || 0,
                        H = Wt({
                            getI18n: x,
                            base: b,
                            quote: S,
                            idPhoto: G,
                            locale: h,
                            urlConfig: O,
                            magicRefresh: L
                        }, {
                            orderType: V,
                            placeType: "flashorder"
                        }, t, r),
                        $ = (0, D.Zf)("".concat(b).concat(S)),
                        Z = _t({
                            getI18n: x,
                            getMarketPrice: P,
                            orderConfirmStatus: Y,
                            locale: h,
                            urlConfig: O,
                            base: b,
                            quote: S,
                            userAssets: C,
                            minQtyPrecision: null === k || void 0 === k ? void 0 : k.minQtyPrecision,
                            minTotalPrecision: null === k || void 0 === k ? void 0 : k.minTotalPrecision
                        }, {
                            mode: o,
                            tradeType: a,
                            orderType: V,
                            qtyTotalMode: K,
                            getBalanceWallet: u
                        }, r, H),
                        X = (0, nr.Z)((function(e) {
                            var t = {
                                side: null === e || void 0 === e ? void 0 : e.side,
                                mode: o,
                                tradeType: a,
                                orderType: V,
                                qtyTotalMode: K,
                                base: b,
                                quote: S,
                                isPreMarket: $
                            };
                            if ((0, z.x8)("place_new_order", "flashOrder", t), N && !s)
                                if ("PASS" === v) {
                                    if (l) return p(!0), void TrackFeValidPlaceOrder("place_new_order", "flashOrder", "invalidRiskState", t);
                                    if (f) m(!0);
                                    else {
                                        I && I();
                                        var n = e.price,
                                            i = e.total,
                                            u = e.quantity,
                                            c = e.side;
                                        if (!(Number(u) < Number(W))) {
                                            var A = P(),
                                                h = (0, d._)((0, _.YN)(V, x, {
                                                    side: c,
                                                    price: n,
                                                    total: i,
                                                    getBook: E,
                                                    quantity: u,
                                                    qtyTotalMode: K,
                                                    tradeType: a,
                                                    marketPrice: A,
                                                    disableConvert: U
                                                }), 2),
                                                R = h[0],
                                                O = h[1];
                                            if (R) {
                                                var C = (0, _.KM)({
                                                        getI18n: x,
                                                        side: c,
                                                        tradeType: a,
                                                        base: b,
                                                        quote: S,
                                                        showGap: R,
                                                        orderType: V,
                                                        submitOrder: function() {
                                                            return Z(e)
                                                        },
                                                        disableConvert: U,
                                                        getLastPriceCb: w,
                                                        data: e,
                                                        marketPrice: A,
                                                        swtichLimitCb: j
                                                    }),
                                                    L = C.hiddenCheckReminder,
                                                    k = (0, J._)(C, ["hiddenCheckReminder"]),
                                                    M = React.createElement(zt, {
                                                        gapTip: O,
                                                        getI18n: x,
                                                        hiddenCheckReminder: L
                                                    });
                                                r.current.create((0, y._)((0, g._)({
                                                    content: M
                                                }, k), {
                                                    showIcon: !0
                                                }))
                                            } else Z(e)
                                        }
                                    }
                                } else T(!0)
                        }));
                    return X
                });
            var cr = function(e, t, r, n) {
                    var i = t(+e, r),
                        o = i.symbol,
                        a = i.fiatPrice;
                    return (0, f.US)(a) ? "" : "rtl" === n ? "".concat(o).concat(a, " \u2248") : "\u2248 ".concat(o).concat(a)
                },
                lr = function(e) {
                    var t = e.side,
                        r = e.tradeType,
                        n = e.orderType,
                        o = e.modalRef,
                        u = e.onSuccess,
                        l = e.price,
                        d = e.enableFlashOrder,
                        p = e.watchOrderFormPriceQty,
                        f = void 0 === p || p,
                        m = e.initOrderMode,
                        A = e.getBalanceWallet,
                        h = (0, i.useContext)(q.cb),
                        E = h.quote,
                        R = h.ticker,
                        O = h.getI18n,
                        C = h.isLoggedIn,
                        N = h.getFiatPrice,
                        L = h.getMarketPrice,
                        P = h.orderFormPriceQty,
                        k = (0, s.jH7)(),
                        M = (0, i.useReducer)(q.Ff, (0, q.SN)({
                            price: l,
                            stopLimitPrice: l,
                            initOrderMode: m
                        })),
                        D = M[0],
                        w = M[1],
                        U = R.minTotalPrecision,
                        B = R.minQtyPrecision,
                        j = R.tickSizePrecision,
                        F = R.minQty,
                        Q = D[n] || {},
                        G = D.mode,
                        Y = D.balance,
                        V = D.isFetching,
                        W = D.qtyTotalMode,
                        z = D.postOnly,
                        H = D.iceBerg,
                        $ = D.timeInForce,
                        Z = D.sor,
                        J = D.tpsl,
                        X = D.balanceWallet,
                        ee = (0, ir.c9)((function(e) {
                            return e.setInnerFormParams
                        })),
                        te = (0, i.useMemo)((function() {
                            return (0, _.y8)({
                                orderType: n,
                                marketPrice: L(),
                                curOrderState: Q,
                                side: t
                            }) || "0"
                        }), [n, L, Q]),
                        re = (0, i.useMemo)((function() {
                            var e = "-";
                            return C && (t === c.Vl.SELL ? e = (0, T.lw)(Y).toFixed(B, 1) : 0 === +(e = 0 !== +Y && 0 !== +te ? (0, T.k3)(Y, te).toFixed(B, 1) : "0") && (e = "0")), e
                        }), [C, Y, te, t, B]),
                        ne = (0, i.useMemo)((function() {
                            var e = "-";
                            return C && n === c.W4.MARKET && (t === c.Vl.BUY ? e = (0, T.lw)(Y).toFixed(U, 1) : 0 === +(e = 0 !== +Y && 0 !== +te ? (0, T.lw)(Y, te).toFixed(U, 1) : "0") && (e = "0")), e
                        }), [C, n, t, Y, U, te]),
                        ie = (0, i.useCallback)((function(e, t) {
                            var r = "";
                            return "total" === e ? 0 !== +t ? r = t.length >= Rt.Ne ? t : cr(t, N, E, k) : t.length >= Rt.Ne && (r = t) : 0 !== +t && (r = cr(t, N, E, k)), r
                        }), [N, E, k]),
                        oe = (0, nr.Z)((function(e) {
                            if (C && (t !== c.Vl.BUY || n !== c.W4.MARKET || !Z[t])) {
                                var r = (0, T.lw)(re, e / 100).toFixed(B, 1),
                                    i = (0, T.lw)(te, r).toFixed(U),
                                    o = {
                                        quantity: {
                                            value: r,
                                            invalid: !1
                                        },
                                        sliderQty: {
                                            value: parseInt(e),
                                            invalid: !1
                                        },
                                        total: {
                                            value: 0 === +i ? "" : i,
                                            invalid: !1
                                        }
                                    };
                                return (0, x.zP)(w, {
                                    side: t,
                                    orderType: n,
                                    value: !0
                                }), w({
                                    type: c.Bd.FIELD_CHANGE,
                                    payload: {
                                        orderType: n,
                                        field: o
                                    }
                                }), o
                            }
                        })),
                        ae = (0, nr.Z)((function(e) {
                            if (C && (t !== c.Vl.BUY || n !== c.W4.MARKET || !Z[t])) {
                                var r = (0, T.lw)(re, e / 100).toFixed(B);
                                r <= F && (r = F);
                                var i = (0, T.lw)(te, r).toFixed(U),
                                    o = {
                                        quantity: {
                                            value: r,
                                            invalid: !1
                                        },
                                        sliderQty: {
                                            value: e,
                                            invalid: !1
                                        },
                                        total: {
                                            value: 0 === +i ? "" : i,
                                            invalid: !1
                                        }
                                    };
                                return (0, x.zP)(w, {
                                    side: t,
                                    orderType: n,
                                    value: !0
                                }), w({
                                    type: c.Bd.FIELD_CHANGE,
                                    payload: {
                                        orderType: n,
                                        field: o
                                    }
                                }), o
                            }
                        })),
                        se = (0, nr.Z)(function(e, t, r) {
                            var n = e.ticker,
                                o = e.getI18n,
                                a = e.getMarketPrice,
                                s = t.side,
                                u = t.orderType,
                                l = t.mostAmount,
                                d = t.mostTotalAmount,
                                p = t.curOrderState,
                                f = n.minQtyPrecision,
                                m = n.tickSizePrecision,
                                A = n.minTotalPrecision;
                            return (0, i.useCallback)((function(e, t, n) {
                                if (t || n) {
                                    var i = (0, y._)((0, g._)({}, p), (0, v._)({}, t, {
                                        value: n,
                                        invalid: !1
                                    }));
                                    if ("quantity" === t && +n > +l && (i.quantity = {
                                            value: n,
                                            invalid: !0,
                                            errorMsg: o("most".concat(s), {
                                                amount: l
                                            })
                                        }), "icebergQty" === t && +n >= +i.quantity.value && (i.icebergQty = {
                                            value: n,
                                            invalid: !0,
                                            errorMsg: o("icebergerror")
                                        }), "tpslTPLimitPrice" === t) {
                                        var h, E = b({
                                                marketPrice: a(),
                                                orderType: u,
                                                side: s,
                                                price: null === (h = i.price) || void 0 === h ? void 0 : h.value,
                                                value: n
                                            }),
                                            I = E.invalid,
                                            R = E.errorMsg;
                                        I && (i.tpslTPLimitPrice = {
                                            value: n,
                                            invalid: !0,
                                            errorMsg: o(R)
                                        })
                                    }
                                    if ("tpslSLTriggerPrice" === t) {
                                        var O, C = S({
                                                marketPrice: a(),
                                                orderType: u,
                                                side: s,
                                                price: null === (O = i.price) || void 0 === O ? void 0 : O.value,
                                                value: n
                                            }),
                                            N = C.invalid,
                                            L = C.errorMsg;
                                        N && (i.tpslSLTriggerPrice = {
                                            value: n,
                                            invalid: !0,
                                            errorMsg: o(L)
                                        })
                                    }
                                    "total" === t && +n > +d && (i.total = {
                                        value: n,
                                        invalid: !0,
                                        errorMsg: o("most".concat(s), {
                                            amount: d
                                        })
                                    });
                                    var P = i.quantity.value,
                                        k = (0, _.y8)({
                                            orderType: u,
                                            marketPrice: a(),
                                            curOrderState: i,
                                            side: s
                                        });
                                    if (["quantity", "price", "stopLimitPrice", "stopPrice", "stopType"].indexOf(t) > -1) {
                                        var M = (0, T.lw)(P, k).toFixed(A);
                                        i.total = {
                                            invalid: !1,
                                            value: 0 === +M ? "" : M
                                        }
                                    }
                                    if ("total" === t) {
                                        var D = n || "0";
                                        if (0 !== +k) {
                                            var w = (0, T.k3)(D, k).toFixed(f, 1);
                                            i.quantity = {
                                                invalid: !1,
                                                value: 0 === +w ? "" : w
                                            }
                                        } else if (0 !== +P) {
                                            var U = (0, T.k3)(D, P).toFixed(m);
                                            i[(0, _.v0)(u)] = {
                                                invalid: !1,
                                                value: 0 === +U ? "" : U
                                            }
                                        }
                                    }
                                    var B = 0;
                                    if ("-" !== l) {
                                        var q = "0";
                                        0 !== +l ? q = (0, T.lw)(+i.quantity.value / +l, 100).toFixed(0) : i.quantity.value && (q = "100"), B = Math.min(+q, 100)
                                    }
                                    i.sliderQty.value = B, (0, x.zP)(r, {
                                        side: s,
                                        orderType: u,
                                        value: !1
                                    }), r({
                                        type: c.Bd.FIELD_CHANGE,
                                        payload: {
                                            orderType: u,
                                            field: i
                                        }
                                    })
                                }
                            }), [p, l, d, u, a, r, o, s, A, f, m])
                        }({
                            ticker: R,
                            getI18n: O,
                            getMarketPrice: L
                        }, {
                            side: t,
                            orderType: n,
                            mostAmount: re,
                            mostTotalAmount: ne,
                            curOrderState: Q
                        }, w)),
                        ue = !![c.W4.LIMIT, c.W4.MARKET].includes(n) && Z[t],
                        ce = (0, nr.Z)(rr({
                            side: t,
                            mode: G,
                            tradeType: r,
                            orderType: n,
                            mostAmount: re,
                            calcPrice: te,
                            mostTotalAmount: ne,
                            isFetching: V,
                            qtyTotalMode: W,
                            postOnly: z,
                            iceBerg: H,
                            timeInForce: $,
                            sildeUpdate: (0, x.eG)(D, t),
                            tickSizePrecision: j,
                            minQtyPrecision: B,
                            onSuccess: u,
                            sorEnable: ue,
                            tpsl: J,
                            balanceWallet: X,
                            curOrderState: Q
                        }, w, o, se)),
                        le = (0, nr.Z)(ur({
                            mode: G,
                            tradeType: r,
                            isFetching: V,
                            getBalanceWallet: A
                        }, w, o));
                    return (0, i.useEffect)((function() {
                            d && ee({
                                handleFlashFormSubmit: le
                            })
                        }), [ee, le, d]),
                        function(e, t) {
                            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            (0, i.useEffect)((function() {
                                if (r && e.lastPrice) {
                                    var n, i = (0, K.J8)(e.lastPrice, e.tickSizePrecision),
                                        o = (n = {}, (0, v._)(n, c.W4.LIMIT, or({
                                            price: i,
                                            stopPrice: "",
                                            stopLimitPrice: ""
                                        }, c.W4.LIMIT)), (0, v._)(n, c.W4.MARKET, or({}, c.W4.MARKET)), (0, v._)(n, c.W4.STOPLIMIT, or({
                                            price: "",
                                            stopPrice: "",
                                            stopLimitPrice: i
                                        }, c.W4.STOPLIMIT)), (0, v._)(n, c.W4.STOP_MARKET, or({
                                            price: "",
                                            stopMarketPrice: ""
                                        }, c.W4.STOP_MARKET)), (0, v._)(n, c.W4.OCO, or({
                                            price: "",
                                            stopPrice: "",
                                            stopLimitPrice: i
                                        }, c.W4.OCO, "stopType")), (0, v._)(n, c.W4.TRAILING_STOP, or({
                                            price: "",
                                            stopPrice: "",
                                            stopLimitPrice: i
                                        }, c.W4.TRAILING_STOP, "stopType")), n);
                                    t({
                                        type: c.Bd.FORM_CHANGE,
                                        payload: o
                                    })
                                }
                            }), [e, t, r])
                        }(R, w, void 0 === l),
                        function(e, t, r) {
                            var n, o = e.isLoggedIn,
                                s = e.minTotalPrecision,
                                u = void 0 === s ? 0 : s,
                                l = e.minQtyPrecision,
                                d = void 0 === l ? 0 : l,
                                p = e.tickSizePrecision,
                                f = void 0 === p ? 0 : p,
                                m = e.orderFormPriceQty,
                                g = e.enabled,
                                y = void 0 === g || g,
                                _ = e.curOrderState,
                                A = t.side,
                                b = t.curQuantity,
                                S = t.mostAmount,
                                h = (0, a.d4)((function(e) {
                                    return e.setting.layout
                                })),
                                x = (0, i.useRef)({}),
                                E = (0, sr.x7)((function(e) {
                                    return e.quickSwitch
                                })),
                                R = (0, i.useContext)(Jt.x).setTabSide,
                                O = (null === _ || void 0 === _ || null === (n = _.stopType) || void 0 === n ? void 0 : n.value) || "";
                            (0, i.useEffect)((function() {
                                if (y) {
                                    var e = x.current,
                                        t = e.side,
                                        n = e.price,
                                        i = e.qty;
                                    if (m && (t !== m.side || n !== m.price || i !== m.qty)) {
                                        x.current = m;
                                        var a = (0, T.tY)(m.price).toFixed(f),
                                            s = m.qty || b;
                                        s && 0 !== +s && (s = (0, T.tY)(s.replace(/,/g, "")).toFixed(d));
                                        var l = (0, T.lw)(a, s).toFixed(u);
                                        if (A !== m.side || !E && h === I.ug) {
                                            if (o) {
                                                var p = 0 === +S ? "" : S; + s > +p && (s = p, l = (0, T.lw)(a, s).toFixed(u))
                                            }
                                        } else s = "", l = "";
                                        0 === +l && (l = ""), E && "function" === typeof R && R("BUY" === m.side ? "SELL" : "BUY");
                                        var g, _ = +s;
                                        if (0 !== +s) {
                                            var C = (0, T.lw)(+s / +S, 100).toFixed(0);
                                            _ = Math.min(+C, 100)
                                        }
                                        var N = (g = {}, (0, v._)(g, c.W4.LIMIT, (0, K.ND)({
                                            price: a,
                                            stopPrice: a,
                                            stopLimitPrice: a,
                                            quantity: s,
                                            sliderQty: "".concat(_),
                                            total: l
                                        })), (0, v._)(g, c.W4.STOPLIMIT, (0, K.ND)({
                                            price: a,
                                            stopPrice: "",
                                            stopLimitPrice: a,
                                            quantity: s,
                                            sliderQty: "".concat(_),
                                            total: l
                                        })), (0, v._)(g, c.W4.STOP_MARKET, (0, K.ND)({
                                            price: a,
                                            stopMarketPrice: "",
                                            quantity: s,
                                            sliderQty: "".concat(_),
                                            total: l
                                        })), (0, v._)(g, c.W4.OCO, (0, K.ND)({
                                            price: "",
                                            stopPrice: "MARKET" === O ? a : "",
                                            stopLimitPrice: "MARKET" === O ? "" : a,
                                            quantity: s,
                                            sliderQty: "".concat(_),
                                            total: l
                                        })), (0, v._)(g, c.W4.TRAILING_STOP, (0, K.ND)({
                                            price: a,
                                            stopPrice: "",
                                            stopLimitPrice: a,
                                            quantity: s,
                                            sliderQty: "".concat(_),
                                            total: l
                                        })), g);
                                        r({
                                            type: c.Bd.FORM_CHANGE,
                                            payload: N
                                        })
                                    }
                                }
                            }), [y, A, o, b, m, S, r, u, f, d, h, R, O])
                        }({
                            isLoggedIn: C,
                            minTotalPrecision: U,
                            minQtyPrecision: B,
                            tickSizePrecision: j,
                            orderFormPriceQty: P,
                            enabled: f,
                            curOrderState: Q
                        }, {
                            side: t,
                            mostAmount: re,
                            curQuantity: Q.quantity.value
                        }, w),
                        function(e, t, r) {
                            (0, i.useEffect)((function() {
                                var e = t.quantity.value;
                                e && r("", "quantity", e)
                            }), [e])
                        }(Y, Q, se), {
                            state: D,
                            dispatch: w,
                            getHelperText: ie,
                            handleFormChange: se,
                            handleFormSubmit: ce,
                            handleQuantityChange: oe,
                            handleQuantityElectronChange: ae
                        }
                },
                dr = r("BZR+"),
                pr = function(e, t) {
                    var r, n = (0, d._)((0, s.sL)(), 1)[0],
                        o = t || (0, i.useContext)(Jt.x).currentSymbol || n,
                        u = (0, d._)((0, s.Grl)(), 1)[0],
                        c = e || u,
                        l = (0, a.d4)(Y.makeMarginCoeff),
                        m = (0, a.d4)(Y.makeMarginAccount),
                        v = (0, a.d4)(Y.makeIsolatedCoeff),
                        g = (0, a.d4)(Y.makeMarginUniAccount),
                        y = (0, a.d4)(Y.makeIsolatedAccount)[o] || {},
                        _ = (0, a.d4)(Y.makeIsBnbDeduct),
                        A = (0, s.h_5)().isCM2_0,
                        b = (0, p.YN)({
                            symbol: o
                        }),
                        S = c === I.Gr.CROSS ? m : y,
                        h = S.created,
                        x = S.enable,
                        E = S.marginBar,
                        R = S.marginLevel,
                        O = S.totalAssetOfBtc,
                        C = S.totalLiabilityOfBtc,
                        N = S.totalNetAssetOfBtc,
                        L = S.transferOutBar,
                        P = S.canAdjustMarginBar,
                        k = S.canManualLiquidation,
                        M = c === I.Gr.CROSS ? l : null !== (r = v[o]) && void 0 !== r ? r : {},
                        D = null === m || void 0 === m ? void 0 : m.isUniAccount,
                        w = D ? null === g || void 0 === g ? void 0 : g.uniMMR : R,
                        U = (0, i.useMemo)((function() {
                            return D ? (0, f.eF)(+w) : (0, f.EQ)(+w, M)
                        }), [w, M, D]),
                        B = null === m || void 0 === m ? void 0 : m.isBnbDiscount,
                        q = (0, dr.Qh)(),
                        j = (0, dr.Qh)("CROSS"),
                        F = (0, s.Yej)(),
                        Q = "Custom" === (null === m || void 0 === m ? void 0 : m.marginBar) ? null === m || void 0 === m ? void 0 : m.marginBar : (0, dr.iM)(A ? "".concat(b || I.E0, "x") : (null === m || void 0 === m ? void 0 : m.marginBar) || "".concat(I.E0, "x"), j);
                    return (0, i.useMemo)((function() {
                        return {
                            risk: U,
                            created: h,
                            enable: x,
                            marginBar: "Custom" === E ? E : (0, dr.iM)("margin2" === E ? "".concat(F) : E, q),
                            marginLevel: w,
                            totalNetAssetOfBtc: N,
                            totalBalance: O,
                            totalDebt: C,
                            transferOutBar: (0, T.tv)(Number(null !== L && void 0 !== L ? L : "2").toFixed(2)),
                            marginCoeff: M,
                            isUniAccount: D,
                            isBnbDiscount: B,
                            isBnbDeduct: _,
                            canAdjustMarginBar: P,
                            crossMarginBar: Q,
                            canManualLiquidation: k,
                            rawMarginBar: E,
                            rawCrossMarginBar: null === m || void 0 === m ? void 0 : m.marginBar
                        }
                    }), [U, h, x, E, R, N, O, C, L, M, D, B, _, P, Q, k, A, b, F])
                },
                fr = r("rOIZ");

            function mr() {
                var e = (0, s.nHk)(),
                    t = (0, i.useContext)(Jt.x),
                    r = t.currentSymbol,
                    o = t.currentGroup,
                    a = (0, d._)((0, n.d)(), 2),
                    u = a[0],
                    c = a[1],
                    l = (0, s.Pyz)(),
                    p = (0, s.$X2)(),
                    f = (0, s.RYv)(r),
                    m = (0, s.dk7)(o),
                    v = (0, s.hFK)()[r] || {},
                    _ = (0, N.h1)().putCoachMarkStep,
                    A = (0, i.useMemo)((function() {
                        var e = (0, fr.XV)(v.minQty),
                            t = (0, fr.XV)(v.tickSize),
                            r = Math.min(e + t, 8),
                            n = (0, T.lw)(v.minQty, v.tickSize).toFixed(r);
                        return (0, y._)((0, g._)({}, v), {
                            minTotal: n,
                            minTotalPrecision: r,
                            minQtyPrecision: e,
                            tickSizePrecision: t,
                            lastPrice: v.close
                        })
                    }), [v]);
                return {
                    base: u,
                    quote: c,
                    ticker: A,
                    userInfo: l,
                    isLoggedIn: e,
                    getAskBids: f,
                    getFiatPrice: p,
                    putCoachMarkStep: _,
                    getMarketPrice: (0, s.rTg)(r, A),
                    orderFormPriceQty: m,
                    urlConfig: I.TP
                }
            }
            var vr = r("Rhdc"),
                gr = r("Xz3K"),
                yr = r("ugWk"),
                Tr = [c.W4.LIMIT, c.W4.STOPLIMIT, c.W4.OCO],
                _r = function(e) {
                    return e === yr.Vl.BUY ? yr.Vl.SELL : yr.Vl.BUY
                },
                Ar = l.A.registerActionHandle,
                br = (l.A.constants, 1),
                Sr = function() {
                    return br++
                },
                hr = function(e) {
                    var t = e.orderType,
                        r = e.side,
                        n = e.handleFormChange,
                        o = e.handleQuantityElectronChange,
                        l = e.curOrderState,
                        d = (e.isLoggedIn, e.handleFormSubmit),
                        p = e.handleQuantityChange,
                        f = e.minQtyPrecision,
                        m = e.tickSizePrecision,
                        _ = (0, a.wA)(),
                        A = (0, u.F)(),
                        b = (0, i.useContext)(Jt.x),
                        S = b.tabSide,
                        h = b.setTabSide,
                        x = b.currentGroup,
                        E = b.currentActiveLayoutGroup,
                        R = b.currentActiveLayout,
                        O = b.widgetKey,
                        C = (0, s.ZCR)(R),
                        N = (0, a.d4)((function(e) {
                            return e.setting.layout
                        })),
                        L = (0, s.U8Q)(O);
                    (0, i.useEffect)((function() {
                        N === I.Pv || N === I.a0 || N === I.ug || I.iW;
                        var e = Ar((function(e) {
                            e.name, e.payload
                        }));
                        return e
                    }), [l, n, o, A, t, _.orderForm, r, br, h, S, x, E, R, C, N]), (0, i.useEffect)((function() {
                        var e = N === I.Pv || N === I.a0,
                            i = !!(e || N === I.ug || N === I.iW) || E;
                        return (0, vr.r)((function(o, a) {
                            if (!x || x === E) {
                                var s = l.quantity.value,
                                    u = a || {
                                        valueInput: {
                                            type: "value",
                                            value: 0
                                        },
                                        priceLevel: "1"
                                    };
                                switch (o) {
                                    case gr.mC.TRADING_ONE_BUY:
                                        if (r === I.Vl.SELL && N !== I.ug) break;
                                        ! function(e) {
                                            var t = e.shouldIncreaseOrDecrease,
                                                r = e.orderType,
                                                n = e.setTabSide,
                                                i = e.prevActiveLayout,
                                                o = e.inputFocus,
                                                a = e.currentActiveLayout,
                                                s = e.reduxDispatch,
                                                u = e.payload,
                                                l = e.side,
                                                d = e.handleQuantityChange,
                                                p = e.currentActiveLayoutGroup,
                                                f = e.lastPrice,
                                                m = e.curOrderState,
                                                T = e.handleFormChange,
                                                _ = e.uidAdd;
                                            if (t) {
                                                if (n(yr.Vl.BUY), r !== c.W4.MARKET) {
                                                    var A, b = (A = {}, (0, v._)(A, "inputFocus".concat(i), (0, y._)((0, g._)({}, o), {
                                                        priceFocus: !1,
                                                        side: yr.Vl.BUY
                                                    })), (0, v._)(A, "inputFocus".concat(a), (0, y._)((0, g._)({}, o), {
                                                        priceFocus: !0,
                                                        side: yr.Vl.BUY
                                                    })), A);
                                                    s.orderForm.updateState(b)
                                                }
                                                setTimeout((function() {
                                                    if (l === yr.Vl.BUY) {
                                                        var e, t, n = u.valueInput.value,
                                                            i = Number(u.priceLevel);
                                                        if ("percentage" === u.valueInput.type && (n = d(u.valueInput.value).quantity.value), Tr.includes(r)) return void(i > 0 ? s.orderForm.updateState((0, v._)({}, "priceQty".concat(p), {
                                                            side: yr.Vl.SELL,
                                                            qty: "".concat(n),
                                                            price: (null === (e = null === f || void 0 === f ? void 0 : f.bid[i - 1]) || void 0 === e ? void 0 : e.price) || m.price.value
                                                        })) : s.orderForm.updateState((0, v._)({}, "priceQty".concat(p), {
                                                            side: yr.Vl.SELL,
                                                            qty: "".concat(n),
                                                            price: (null === (t = null === f || void 0 === f ? void 0 : f.ask[Math.abs(i) - 1]) || void 0 === t ? void 0 : t.price) || m.price.value
                                                        })));
                                                        r === c.W4.MARKET && T("", "quantity", n), _()
                                                    }
                                                }), 10)
                                            }
                                        }({
                                            shouldIncreaseOrDecrease: i,
                                            orderType: t,
                                            setTabSide: h,
                                            prevActiveLayout: C,
                                            inputFocus: L,
                                            currentActiveLayout: R,
                                            reduxDispatch: _,
                                            payload: u,
                                            side: r,
                                            handleQuantityChange: p,
                                            currentActiveLayoutGroup: E,
                                            lastPrice: A.current,
                                            curOrderState: l,
                                            handleFormChange: n,
                                            uidAdd: Sr
                                        });
                                        break;
                                    case gr.mC.TRADING_ONE_SELL:
                                        if (r === I.Vl.BUY && N !== I.ug) break;
                                        ! function(e) {
                                            var t = e.shouldIncreaseOrDecrease,
                                                r = e.orderType,
                                                n = e.setTabSide,
                                                i = e.prevActiveLayout,
                                                o = e.inputFocus,
                                                a = e.currentActiveLayout,
                                                s = e.reduxDispatch,
                                                u = e.payload,
                                                l = e.side,
                                                d = e.handleQuantityChange,
                                                p = e.currentActiveLayoutGroup,
                                                f = e.lastPrice,
                                                m = e.curOrderState,
                                                T = e.handleFormChange,
                                                _ = e.uidAdd;
                                            if (t) {
                                                if (n(yr.Vl.SELL), r !== c.W4.MARKET) {
                                                    var A, b = (A = {}, (0, v._)(A, "inputFocus".concat(i), (0, y._)((0, g._)({}, o), {
                                                        priceFocus: !1,
                                                        side: yr.Vl.SELL
                                                    })), (0, v._)(A, "inputFocus".concat(a), (0, y._)((0, g._)({}, o), {
                                                        priceFocus: !0,
                                                        side: yr.Vl.SELL
                                                    })), A);
                                                    s.orderForm.updateState(b)
                                                }
                                                setTimeout((function() {
                                                    if (l === yr.Vl.SELL) {
                                                        var e, t, n = u.valueInput.value,
                                                            i = Number(u.priceLevel);
                                                        if ("percentage" === u.valueInput.type && (n = d(u.valueInput.value).quantity.value), Tr.includes(r)) return void(i > 0 ? s.orderForm.updateState((0, v._)({}, "priceQty".concat(p), {
                                                            side: yr.Vl.BUY,
                                                            qty: "".concat(n),
                                                            price: (null === (e = null === f || void 0 === f ? void 0 : f.bid[i - 1]) || void 0 === e ? void 0 : e.price) || m.price.value
                                                        })) : s.orderForm.updateState((0, v._)({}, "priceQty".concat(p), {
                                                            side: yr.Vl.BUY,
                                                            qty: "".concat(n),
                                                            price: (null === (t = null === f || void 0 === f ? void 0 : f.ask[Math.abs(i) - 1]) || void 0 === t ? void 0 : t.price) || m.price.value
                                                        })));
                                                        r === c.W4.MARKET && T("", "quantity", n), _()
                                                    }
                                                }), 10)
                                            }
                                        }({
                                            shouldIncreaseOrDecrease: i,
                                            orderType: t,
                                            setTabSide: h,
                                            prevActiveLayout: C,
                                            inputFocus: L,
                                            currentActiveLayout: R,
                                            reduxDispatch: _,
                                            payload: u,
                                            side: r,
                                            handleQuantityChange: p,
                                            currentActiveLayoutGroup: E,
                                            lastPrice: A.current,
                                            curOrderState: l,
                                            handleFormChange: n,
                                            uidAdd: Sr
                                        });
                                        break;
                                    case gr.mC.TRADING_BUY:
                                        ! function(e) {
                                            var t = e.orderType,
                                                r = e.side,
                                                n = e.curOrderState,
                                                i = e.tabSide,
                                                o = e.currentGroup,
                                                a = e.handleFormSubmit;
                                            if (i === r && r === yr.Vl.BUY) {
                                                var s = {};
                                                Array.from(document.forms["autoFormBUY".concat(o)].elements).forEach((function(e) {
                                                    e.name && (s = (0, y._)((0, g._)({}, s), (0, v._)({}, e.name, e.value)))
                                                })), s = (0, y._)((0, g._)({}, s), {
                                                    price: n.price.value,
                                                    quantity: n.quantity.value,
                                                    side: _r(i)
                                                }), setTimeout((function() {
                                                    t !== c.W4.LIMIT ? t !== c.W4.MARKET ? t !== c.W4.STOPLIMIT && t !== c.W4.OCO || a("", s) : a("", {
                                                        quantity: n.quantity.value,
                                                        total: s.total
                                                    }) : a("", s)
                                                }), 10)
                                            }
                                        }({
                                            orderType: t,
                                            side: r,
                                            curOrderState: l,
                                            tabSide: S,
                                            currentGroup: x,
                                            handleFormSubmit: d
                                        });
                                        break;
                                    case gr.mC.TRADING_SELL:
                                        ! function(e) {
                                            var t = e.orderType,
                                                r = e.side,
                                                n = e.curOrderState,
                                                i = e.tabSide,
                                                o = e.currentGroup,
                                                a = e.handleFormSubmit,
                                                s = e.isBasicOrFullScreen;
                                            if (r === yr.Vl.SELL && (s || i === r)) {
                                                var u = {};
                                                Array.from(document.forms["autoFormSELL".concat(o)].elements).forEach((function(e) {
                                                    e.name && (u = (0, y._)((0, g._)({}, u), (0, v._)({}, e.name, e.value)))
                                                })), u = (0, y._)((0, g._)({}, u), {
                                                    price: n.price.value,
                                                    quantity: n.quantity.value,
                                                    side: _r(yr.Vl.SELL)
                                                }), setTimeout((function() {
                                                    t !== c.W4.LIMIT ? t !== c.W4.MARKET ? t !== c.W4.STOPLIMIT && t !== c.W4.OCO || a("", u) : a("", {
                                                        quantity: n.quantity.value,
                                                        total: u.total
                                                    }) : a("", u)
                                                }), 10)
                                            }
                                        }({
                                            orderType: t,
                                            side: r,
                                            curOrderState: l,
                                            tabSide: S,
                                            currentGroup: x,
                                            handleFormSubmit: d,
                                            isBasicOrFullScreen: e
                                        });
                                        break;
                                    case gr.mC.TRADING_SWITCH:
                                        ! function(e) {
                                            var t = e.tabSide,
                                                r = e.setTabSide,
                                                n = e.side;
                                            t === n && r(_r(n))
                                        }({
                                            tabSide: S,
                                            setTabSide: h,
                                            side: r
                                        });
                                        break;
                                    case gr.mC.MODIFY_INCREASE_PRICE:
                                        u.valueInput.value = Number((0, K.kW)(m)),
                                            function(e) {
                                                var t = e.shouldIncreaseOrDecrease,
                                                    r = e.orderType,
                                                    n = e.reduxDispatch,
                                                    i = e.payload,
                                                    o = e.side,
                                                    a = e.currentActiveLayoutGroup,
                                                    s = e.curOrderState,
                                                    u = e.tabSide,
                                                    l = e.uidAdd,
                                                    d = e.inputFocus,
                                                    p = e.currentActiveLayout;
                                                if (u === o && t) {
                                                    if (r === c.W4.LIMIT) {
                                                        var f = s.price.value;
                                                        return void setTimeout((function() {
                                                            f = "percentage" === i.valueInput.type ? (0, T.lw)(f, 1 + i.valueInput.value / 100) : (0, T.tY)(f, i.valueInput.value), n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                                side: _r(u),
                                                                qty: s.quantity.value,
                                                                price: f.toFixed()
                                                            })), d && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(p), (0, y._)((0, g._)({}, d), {
                                                                flashBorder: !0,
                                                                type: "price",
                                                                side: u
                                                            }))), l()
                                                        }), 10)
                                                    }
                                                    if (r === c.W4.STOPLIMIT || r === c.W4.OCO) {
                                                        var m = s.stopLimitPrice.value;
                                                        setTimeout((function() {
                                                            m = "percentage" === i.valueInput.type ? (0, T.lw)(m, 1 + i.valueInput.value / 100) : (0, T.tY)(m, i.valueInput.value), n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                                side: _r(u),
                                                                qty: s.quantity.value,
                                                                price: m.toFixed()
                                                            })), d && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(p), (0, y._)((0, g._)({}, d), {
                                                                flashBorder: !0,
                                                                type: "price",
                                                                side: u
                                                            }))), l()
                                                        }), 10)
                                                    }
                                                }
                                            }({
                                                shouldIncreaseOrDecrease: i,
                                                orderType: t,
                                                reduxDispatch: _,
                                                payload: u,
                                                side: r,
                                                currentActiveLayoutGroup: E,
                                                curOrderState: l,
                                                tabSide: S,
                                                uidAdd: Sr,
                                                inputFocus: L,
                                                currentActiveLayout: R
                                            });
                                        break;
                                    case gr.mC.MODIFY_DECREASE_PRICE:
                                        u.valueInput.value = Number((0, K.kW)(m)),
                                            function(e) {
                                                var t = e.shouldIncreaseOrDecrease,
                                                    r = e.orderType,
                                                    n = e.reduxDispatch,
                                                    i = e.payload,
                                                    o = e.side,
                                                    a = e.currentActiveLayoutGroup,
                                                    s = e.curOrderState,
                                                    u = e.tabSide,
                                                    l = e.uidAdd,
                                                    d = e.inputFocus,
                                                    p = e.currentActiveLayout;
                                                if (u === o && t) {
                                                    if (r === c.W4.LIMIT) {
                                                        var f = s.price.value;
                                                        return void setTimeout((function() {
                                                            f = "percentage" === i.valueInput.type ? (0, T.lw)(f, 1 - i.valueInput.value / 100) : (0, T.Rd)(f, i.valueInput.value), n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                                side: _r(u),
                                                                qty: s.quantity.value,
                                                                price: f.toFixed()
                                                            })), d && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(p), (0, y._)((0, g._)({}, d), {
                                                                flashBorder: !0,
                                                                type: "price",
                                                                side: u
                                                            }))), l()
                                                        }), 10)
                                                    }
                                                    if (r === c.W4.STOPLIMIT || r === c.W4.OCO) {
                                                        var m = s.stopLimitPrice.value;
                                                        setTimeout((function() {
                                                            m = "percentage" === i.valueInput.type ? (0, T.lw)(m, 1 - i.valueInput.value / 100) : (0, T.Rd)(m, i.valueInput.value), n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                                side: _r(u),
                                                                qty: s.quantity.value,
                                                                price: m.toFixed()
                                                            })), d && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(p), (0, y._)((0, g._)({}, d), {
                                                                flashBorder: !0,
                                                                type: "price",
                                                                side: u
                                                            }))), l()
                                                        }), 10)
                                                    }
                                                }
                                            }({
                                                shouldIncreaseOrDecrease: i,
                                                orderType: t,
                                                reduxDispatch: _,
                                                payload: u,
                                                side: r,
                                                currentActiveLayoutGroup: E,
                                                curOrderState: l,
                                                tabSide: S,
                                                uidAdd: Sr,
                                                inputFocus: L,
                                                currentActiveLayout: R
                                            });
                                        break;
                                    case gr.mC.MODIFY_INCREASE_AMOUNT:
                                        u.valueInput.value = Number((0, K.kW)(f)),
                                            function(e) {
                                                var t = e.shouldIncreaseOrDecrease,
                                                    r = e.orderType,
                                                    n = e.reduxDispatch,
                                                    i = e.payload,
                                                    o = e.side,
                                                    a = e.currentActiveLayoutGroup,
                                                    s = e.curOrderState,
                                                    u = e.tabSide,
                                                    l = e.handleQuantityChange,
                                                    d = e.handleFormChange,
                                                    p = e.quantity,
                                                    f = e.inputFocus,
                                                    m = e.currentActiveLayout,
                                                    _ = e.uidAdd;
                                                u === o && t && setTimeout((function() {
                                                    if ("percentage" === i.valueInput.type) {
                                                        var e = l(i.valueInput.value),
                                                            t = (0, T.tY)(p, e.quantity.value);
                                                        p = t > 0 ? t : (0, T.tY)(0, 0)
                                                    } else {
                                                        var o = (0, T.tY)(p, i.valueInput.value);
                                                        p = o > 0 ? o : (0, T.tY)(0, 0)
                                                    }
                                                    if (r === c.W4.LIMIT) return n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                        side: _r(u),
                                                        qty: p.toFixed(),
                                                        price: s.price.value
                                                    })), void(f && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(m), (0, y._)((0, g._)({}, f), {
                                                        flashBorder: !0,
                                                        type: "quantity",
                                                        side: u
                                                    }))));
                                                    r !== c.W4.MARKET ? (r !== c.W4.STOPLIMIT && r !== c.W4.OCO || (n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                        side: _r(u),
                                                        qty: p.toFixed(),
                                                        price: s.stopLimitPrice.value
                                                    })), f && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(m), (0, y._)((0, g._)({}, f), {
                                                        flashBorder: !0,
                                                        type: "quantity",
                                                        side: u
                                                    })))), _()) : d("", "quantity", p.toFixed())
                                                }), 10)
                                            }({
                                                shouldIncreaseOrDecrease: i,
                                                orderType: t,
                                                reduxDispatch: _,
                                                payload: u,
                                                side: r,
                                                currentActiveLayoutGroup: E,
                                                curOrderState: l,
                                                tabSide: S,
                                                handleQuantityChange: p,
                                                handleFormChange: n,
                                                quantity: s,
                                                uidAdd: Sr,
                                                inputFocus: L,
                                                currentActiveLayout: R
                                            });
                                        break;
                                    case gr.mC.MODIFY_DECREASE_AMOUNT:
                                        u.valueInput.value = Number((0, K.kW)(f)),
                                            function(e) {
                                                var t = e.shouldIncreaseOrDecrease,
                                                    r = e.orderType,
                                                    n = e.reduxDispatch,
                                                    i = e.payload,
                                                    o = e.side,
                                                    a = e.currentActiveLayoutGroup,
                                                    s = e.curOrderState,
                                                    u = e.tabSide,
                                                    l = e.handleQuantityChange,
                                                    d = e.handleFormChange,
                                                    p = e.quantity,
                                                    f = e.inputFocus,
                                                    m = e.currentActiveLayout,
                                                    _ = e.uidAdd;
                                                u === o && t && setTimeout((function() {
                                                    if ("percentage" === i.valueInput.type) {
                                                        var e = l(i.valueInput.value),
                                                            t = (0, T.Rd)(p, e.quantity.value);
                                                        p = t > 0 ? t : (0, T.tY)(0, 0)
                                                    } else {
                                                        var o = (0, T.Rd)(p, i.valueInput.value);
                                                        p = o > 0 ? o : (0, T.tY)(0, 0)
                                                    }
                                                    if (r === c.W4.LIMIT) return n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                        side: _r(u),
                                                        qty: p.toFixed(),
                                                        price: s.price.value
                                                    })), void(f && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(m), (0, y._)((0, g._)({}, f), {
                                                        flashBorder: !0,
                                                        type: "quantity",
                                                        side: u
                                                    }))));
                                                    r !== c.W4.MARKET && r !== c.W4.OCO ? (r === c.W4.STOPLIMIT && (n.orderForm.updateState((0, v._)({}, "priceQty".concat(a), {
                                                        side: _r(u),
                                                        qty: p.toFixed(),
                                                        price: s.stopLimitPrice.value
                                                    })), f && n.orderForm.updateState((0, v._)({}, "inputFocus".concat(m), (0, y._)((0, g._)({}, f), {
                                                        flashBorder: !0,
                                                        type: "quantity",
                                                        side: u
                                                    })))), _()) : d("", "quantity", p.toFixed())
                                                }), 10)
                                            }({
                                                shouldIncreaseOrDecrease: i,
                                                orderType: t,
                                                reduxDispatch: _,
                                                payload: u,
                                                side: r,
                                                currentActiveLayoutGroup: E,
                                                curOrderState: l,
                                                tabSide: S,
                                                handleQuantityChange: p,
                                                handleFormChange: n,
                                                quantity: s,
                                                uidAdd: Sr,
                                                inputFocus: L,
                                                currentActiveLayout: R
                                            })
                                }
                            }
                        }))
                    }), [l, n, p, t, _.orderForm, r, br, h, S, x, E, R, C, N, f, m])
                },
                xr = r("qoEh"),
                Er = function() {
                    var e = (0, d._)((0, be.A)("qtyAndTotalStorage", {}), 2);
                    return {
                        storage: e[0],
                        changeStorage: e[1]
                    }
                },
                Ir = function(e) {
                    var t = e.dispatch,
                        r = e.orderType,
                        n = c.o1.QUANTITY;
                    (0, i.useEffect)((function() {
                        var e = n;
                        r !== c.W4.MARKET && t({
                            type: c.Bd.SHADOW_CHANGE,
                            payload: {
                                qtyTotalMode: e
                            }
                        })
                    }), [r])
                },
                Rr = function(e) {
                    var t, r = e.orderType,
                        o = e.storage,
                        a = e.changeStorage,
                        u = e.dispatch,
                        l = e.side,
                        p = (0, d._)((0, n.d)(), 3)[2],
                        f = (0, s.Fky)(p),
                        m = (0, gt.k)(),
                        T = c.o1.TOTAL,
                        _ = c.o1.QUANTITY,
                        A = (0, d._)((0, xr.Gr)(), 1)[0],
                        b = l + A,
                        S = !1 === (null === (t = m[p]) || void 0 === t ? void 0 : t.quoteOrderQtyMarketAllowed);
                    return (0, i.useEffect)((function() {
                        if (r === c.W4.MARKET) {
                            var e = S ? _ : o && o[b] ? o[b] : l === c.Vl.SELL ? _ : T;
                            u({
                                type: c.Bd.SHADOW_CHANGE,
                                payload: {
                                    qtyTotalMode: e
                                }
                            }), a && a((0, y._)((0, g._)({}, o), (0, v._)({}, b, e)))
                        }
                    }), [r, f, b, S]), (0, i.useCallback)((function(e) {
                        u({
                            type: c.Bd.SHADOW_CHANGE,
                            payload: {
                                qtyTotalMode: e
                            }
                        }), (0, $t.tS)({
                            tradeType: A,
                            element_id: e
                        }), a && a((0, y._)((0, g._)({}, o), (0, v._)({}, b, e)))
                    }), [a, u, b, o])
                },
                Or = r("PWhi"),
                Cr = function() {
                    return (0, i.useContext)(Or.t)
                },
                Nr = (r("zmmj"), (0, ar.A)((function(e) {
                    return {
                        orderType: c.W4.LIMIT,
                        setOrderType: function(t) {
                            return e((function() {
                                return {
                                    orderType: t
                                }
                            }))
                        }
                    }
                })), {
                    current: !1
                });

            function Lr() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = (0, d._)((0, s.Grl)(), 1)[0],
                    o = (0, a.wA)(),
                    u = (0, a.d4)(Y.makeMarginAccount),
                    l = (0, f.V$)(n),
                    p = null !== (e = null === u || void 0 === u ? void 0 : u.coolingOff) && void 0 !== e ? e : {},
                    m = p.on,
                    v = void 0 !== m && m,
                    g = p.endTime,
                    y = void 0 === g ? "0" : g,
                    T = (0, s.nHk)();
                return (0, i.useEffect)((function() {
                    n === c.Gr.ISOLATED && !Nr.current && T && (Nr.current = !0, o.margin.queryMarginAccount())
                }), [n, o.margin.queryMarginAccount, T]), {
                    disableBorrow: l && v && t && r > 0,
                    endTime: y
                }
            }
            var Pr = function() {
                var e = (0, a.d4)(Y.makeMarginEffectType);
                return {
                    auotBorrow: null === e || void 0 === e ? void 0 : e.marginAutoBorrow,
                    autoRepay: null === e || void 0 === e ? void 0 : e.marginAutoRepay
                }
            }
        },
        zmmj: (e, t, r) => {
            "use strict";
            r.d(t, {
                R: () => d
            });
            var n = r("mguP"),
                i = r("mXdx"),
                o = r("DTvD"),
                a = r("gLBh"),
                s = r("GJ+9"),
                u = r("Ov3/"),
                c = r("YRJq"),
                l = r("b2AH"),
                d = function() {
                    var e = (0, l.CU)().getI18n,
                        t = (0, c.h1)(),
                        r = t.showCoachMark,
                        d = t.putCoachMarkStep,
                        p = (0, o.useRef)(null),
                        f = (0, o.useRef)(null),
                        m = (0, o.useRef)(null),
                        v = (0, n._)((0, u.A)("advancedTutorialView"), 2),
                        g = v[0],
                        y = v[1],
                        T = (0, n._)((0, u.A)("marginGuide-viewed"), 1)[0];
                    return (0, o.useEffect)((function() {
                        g || "afterOrder" !== T || (d("advanceOrder", 0, {
                            target: p,
                            title: e("post-only"),
                            position: "left",
                            content: (0, i.jsx)(a.x, {
                                i18nKey: "trd-post-only-guide",
                                components: {
                                    primary: (0, i.jsx)(s.A, {
                                        color: "#212833",
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        href: "/support/faq/5d3fa5e5709f47e0b5f186b350da1655"
                                    })
                                }
                            })
                        }), d("advanceOrder", 1, {
                            target: f,
                            title: e("tif"),
                            position: "left",
                            content: (0, i.jsx)(a.x, {
                                i18nKey: "trd-tif-guide",
                                components: {
                                    primary: (0, i.jsx)(s.A, {
                                        color: "#212833",
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        href: "/support/faq/5d3fa5e5709f47e0b5f186b350da1655"
                                    })
                                }
                            })
                        }), d("advanceOrder", 2, {
                            target: m,
                            title: e("iceberg"),
                            position: "left",
                            content: (0, i.jsx)(a.x, {
                                i18nKey: "trd-iceberg-guide",
                                components: {
                                    primary: (0, i.jsx)(s.A, {
                                        color: "#212833",
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        href: "/support/faq/5d3fa5e5709f47e0b5f186b350da1655"
                                    })
                                }
                            })
                        }), y(!0), r("advanceOrder", 0))
                    }), [e]), {
                        tifRef: f,
                        icebergRef: m,
                        postOnlyRef: p
                    }
                }
        },
        cYwZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => o
            });
            var n = r("DTvD"),
                i = r("b9LU"),
                o = function() {
                    var e = (0, n.useContext)(i.x),
                        t = e.currentSymbol,
                        r = e.currentBaseAsset;
                    return [r, t.replace(r, ""), t]
                }
        },
        TUKb: (e, t, r) => {
            "use strict";
            r.d(t, {
                e: () => s
            });
            var n = r("mguP"),
                i = r("Qhol"),
                o = r("hAzz"),
                a = r("J+BU"),
                s = function(e) {
                    var t = (0, i.DFo)().isPmAccount,
                        r = (0, i.h_5)().isCM2_0,
                        s = (0, n._)((0, i.Grl)(), 1)[0];
                    return e === a.W4.LIMIT && !(t && (0, o.hx)(s)) && !r
                }
        },
        PWhi: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => o,
                z: () => a
            });
            var n = r("DTvD"),
                i = {
                    buyMode: void 0,
                    sellMode: void 0,
                    onModeChange: function() {}
                },
                o = (0, n.createContext)(i),
                a = o.Provider
        },
        "7mbB": (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => m,
                z: () => f
            });
            var n = r("hrAD"),
                i = r("mXdx"),
                o = (r("DTvD"), r("GIr8")),
                a = r("2IQ4"),
                s = r("kcvK"),
                u = r("Qhol"),
                c = r("g5A9"),
                l = r("Py+1"),
                d = r("hAzz"),
                p = function(e) {
                    return (0, i.jsx)(o.A, (0, n._)({
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "nowrap",
                        __css: {
                            mb: "6px",
                            lineHeight: "16px"
                        }
                    }, e))
                },
                f = function(e) {
                    var t = e.getI18n,
                        r = e.totalDebt,
                        n = e.maintenanceMargin,
                        o = e.adjustedEquity,
                        s = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return (0, d.RI)(Number(e), 2, !1)
                        };
                    return (0, i.jsxs)(a.A, {
                        className: "w-[230px] text-[12px]",
                        children: [(0, i.jsx)("div", {
                            style: {
                                fontSize: "14px",
                                marginBottom: "8px",
                                fontWeight: "500"
                            },
                            children: t("trd-orderForm-portfolio-margin-info", {
                                defaultValue: "Portfolio Margin Info"
                            })
                        }), (0, i.jsxs)(p, {
                            children: [(0, i.jsx)("div", {
                                className: "title",
                                children: t("trd-orderForm-debt")
                            }), (0, i.jsx)("div", {
                                children: "".concat(s(r), " USD")
                            })]
                        }), (0, i.jsxs)(p, {
                            children: [(0, i.jsx)("div", {
                                className: "title",
                                children: t("trd-orderForm-maintenance-margin", {
                                    defaultValue: "Maintenance Margin"
                                })
                            }), (0, i.jsx)("div", {
                                children: "".concat(s(n), " USD")
                            })]
                        }), (0, i.jsxs)(p, {
                            children: [(0, i.jsx)("div", {
                                className: "title",
                                children: t("trd-orderForm-adjusted-equity", {
                                    defaultValue: "Adjusted Equity"
                                })
                            }), (0, i.jsx)("div", {
                                children: "".concat(s(o), " USD")
                            })]
                        })]
                    })
                },
                m = function(e) {
                    var t = e.isLiquidating,
                        r = (0, u.ok2)().getI18n,
                        n = (0, l.y)(),
                        o = n.unimmr,
                        a = n.totalDebt,
                        p = n.maintenanceMargin,
                        m = n.adjustedEquity,
                        v = (0, d.eF)(Number(o)),
                        g = v.color,
                        y = v.edge;
                    return t ? (0, i.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "2px"
                        },
                        children: [(0, i.jsx)(c.V, {}), (0, i.jsx)(s.A, {
                            offset: 4,
                            placement: "top",
                            arrow: !0,
                            enablePortal: !0,
                            useReactPopper: !0,
                            tooltips: (0, i.jsx)(f, {
                                getI18n: r,
                                totalDebt: a,
                                maintenanceMargin: p,
                                adjustedEquity: m
                            }),
                            children: (0, i.jsx)("div", {
                                style: {
                                    fontSize: "12px",
                                    color: "var(--color-PrimaryText)",
                                    cursor: "pointer"
                                },
                                children: r("trd-liquidating")
                            })
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.A, {
                            deg: y
                        }), (0, i.jsx)(s.A, {
                            offset: 4,
                            placement: "top",
                            arrow: !0,
                            enablePortal: !0,
                            useReactPopper: !0,
                            tooltips: (0, i.jsx)(f, {
                                getI18n: r,
                                totalDebt: a,
                                maintenanceMargin: p,
                                adjustedEquity: m
                            }),
                            children: (0, i.jsxs)("div", {
                                className: "trd-text-ellipsis",
                                style: {
                                    maxWidth: "87px",
                                    marginLeft: "2px",
                                    marginRight: "2px",
                                    fontSize: "12px",
                                    color: g,
                                    textDecoration: "underline"
                                },
                                children: [r("UniMMR"), "\xa0", o]
                            })
                        })]
                    })
                }
        },
        "5gCu": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var n = r("iKvg"),
                i = r("mguP"),
                o = r("mXdx"),
                a = r("DTvD"),
                s = r.n(a),
                u = r("Ov3/"),
                c = r("Qhol"),
                l = r("bQ69"),
                d = r("dEVk"),
                p = r("J+BU"),
                f = r("JyEq"),
                m = function(e) {
                    var t = e.setMode,
                        r = e.mode,
                        n = void 0 === r ? "" : r,
                        i = (0, c.ok2)().getI18n;
                    return (0, o.jsx)("div", {
                        onClick: function() {
                            return t("LIMIT" === n ? "MARKET" : "LIMIT")
                        },
                        style: {
                            display: "flex",
                            minWidth: "120px",
                            flex: 2
                        },
                        children: (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid",
                                borderColor: "LIMIT" === n ? "var(--color-InputLine)" : "var(--color-PrimaryText)",
                                padding: "0 8px",
                                borderRadius: "8px",
                                cursor: "pointer",
                                height: "40px",
                                width: "100%"
                            },
                            children: i("trd-orderForm-MARKET")
                        })
                    })
                },
                v = function(e) {
                    var t = e.name,
                        r = void 0 === t ? "stopLimitPrice" : t,
                        s = e.triggerName,
                        v = void 0 === s ? "stopPrice" : s,
                        g = e.side,
                        y = e.curOrderState,
                        T = e.widgetKey,
                        _ = e.handleFormChange,
                        A = e.orderType,
                        b = e.dispatch,
                        S = e.i18nSide,
                        h = e.quote,
                        x = (e.base, e.handleChange),
                        E = (0, c.ok2)().getI18n,
                        I = (0, a.useContext)(f.cb),
                        R = I.ticker,
                        O = I.layout,
                        C = (0, a.useState)(!1),
                        N = C[0],
                        L = C[1],
                        P = A === p.W4.TRAILING_STOP,
                        k = (0, i._)((0, u.A)("trd-".concat(A, "-").concat(g, "-").concat(T), P ? "LIMIT" : "MARKET"), 2),
                        M = k[0],
                        D = k[1],
                        w = S || g,
                        U = (0, c.tk1)("Trailing_stop_add_stop_market"),
                        B = U.pass,
                        q = U.loaded,
                        j = P && !B,
                        F = (0, a.useCallback)((function(e) {
                            var t;
                            D(e), b({
                                type: p.Bd.FIELD_CHANGE,
                                payload: {
                                    orderType: A,
                                    field: (t = {
                                        stopType: {
                                            value: e,
                                            invalid: !1
                                        }
                                    }, (0, n._)(t, v, {
                                        value: "",
                                        invalid: !1
                                    }), (0, n._)(t, r, {
                                        value: "",
                                        invalid: !1
                                    }), t)
                                }
                            })
                        }), [r, v, b]);
                    (0, a.useEffect)((function() {
                        !N && M && (_("", "stopType", M), L(!0))
                    }), [M, N, _, j, q]), (0, a.useEffect)((function() {
                        q && j && F("LIMIT")
                    }), [q, j]);
                    var Q = y[r].value,
                        G = (0, a.useMemo)((function() {
                            if (!Q || O === l.Pv) {
                                if (A === p.W4.TRAILING_STOP) return E("trd-orderForm-LIMIT");
                                var e = "trd-orderform-SLLimit".concat(w === p.Vl.BUY ? "" : "-sell");
                                return E(e)
                            }
                        }), [Q, O, w]),
                        Y = (0, a.useMemo)((function() {
                            return A === p.W4.TRAILING_STOP ? E("trd-orderForm-MARKET") : E("trd-orderform-SLMarket".concat(w === p.Vl.BUY ? "" : "-sell"))
                        }), [A, w]);
                    return (0, o.jsxs)("div", {
                        children: [O === l.ug && (0, o.jsx)("div", {
                            style: {
                                fontSize: "12px",
                                lineHeight: "18px",
                                color: "var(--color-TertiaryText)",
                                marginBottom: "4px",
                                marginTop: A === p.W4.LIMIT ? "8px" : "0px"
                            },
                            children: E("trd-orderform-SLPrice".concat(w === p.Vl.BUY ? "" : "-sell"))
                        }), (0, o.jsxs)("div", {
                            style: {
                                display: "flex",
                                gap: "8px",
                                alignItems: "flex-start"
                            },
                            children: [(j || "LIMIT" === M) && (0, o.jsx)(d.A, {
                                name: r,
                                className: "prefix-wide",
                                widgetKey: T,
                                before: G,
                                symbol: g,
                                min: R.tickSize,
                                step: R.tickSize,
                                precision: R.tickSizePrecision,
                                value: y[r].value,
                                invalid: y[r].invalid,
                                errorText: y[r].errorMsg,
                                boxStyle: {
                                    flex: 3
                                },
                                isPrefixFixedType: O === l.Pv,
                                after: j ? h : "",
                                handleChange: x
                            }), !j && "MARKET" === M && (0, o.jsx)("div", {
                                onClick: function() {
                                    return F("LIMIT")
                                },
                                style: {
                                    display: "flex",
                                    flex: 3,
                                    color: "var(--color-DisabledText)",
                                    backgroundColor: "var(--color-Line)",
                                    cursor: "pointer",
                                    paddingLeft: "8px",
                                    width: "100%",
                                    height: "40px",
                                    borderRadius: "8px",
                                    alignItems: "center",
                                    fontWeight: 500
                                },
                                children: Y
                            }), !j && (0, o.jsx)(m, {
                                mode: M,
                                setMode: F
                            }), (0, o.jsx)("input", {
                                name: "stopType",
                                value: M,
                                type: "hidden"
                            })]
                        })]
                    })
                };
            const g = s().memo(v)
        },
        JyEq: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ff: () => f,
                SN: () => p,
                cb: () => m
            });
            var n = r("iKvg"),
                i = r("hrAD"),
                o = r("qoEP"),
                a = r("DTvD"),
                s = r.n(a),
                u = r("Km4d"),
                c = r.n(u),
                l = r("qgOy"),
                d = r("J+BU"),
                p = function(e) {
                    var t, r, i = e.price,
                        o = e.stopLimitPrice;
                    return r = {
                        balance: "0",
                        isFetching: !1,
                        mode: e.initOrderMode
                    }, (0, n._)(r, d.W4.LIMIT, (0, l.Ai)(d.W4.LIMIT, {
                        price: i
                    })), (0, n._)(r, d.W4.MARKET, (0, l.Ai)(d.W4.MARKET)), (0, n._)(r, d.W4.STOPLIMIT, (0, l.Ai)(d.W4.STOPLIMIT, {
                        stopLimitPrice: o
                    })), (0, n._)(r, d.W4.STOP_MARKET, (0, l.Ai)(d.W4.STOP_MARKET)), (0, n._)(r, d.W4.OCO, (0, l.Ai)(d.W4.OCO)), (0, n._)(r, d.W4.TRAILING_STOP, (0, l.Ai)(d.W4.TRAILING_STOP)), (0, n._)(r, "postOnly", !1), (0, n._)(r, "sor", (t = {}, (0, n._)(t, d.Vl.BUY, !1), (0, n._)(t, d.Vl.SELL, !1), t)), (0, n._)(r, "iceBerg", !1), (0, n._)(r, "tpsl", !1), (0, n._)(r, "timeInForce", d.Zm.GTC), (0, n._)(r, "sliderBuyLastUpdate", !1), (0, n._)(r, "sliderSellLastUpdate", !1), (0, n._)(r, "balanceWallet", void 0), r
                },
                f = function(e, t) {
                    var r = t.type,
                        a = t.payload,
                        s = (null === a || void 0 === a ? void 0 : a.orderType) || "";
                    switch (r) {
                        case d.Bd.FIELD_CHANGE:
                            return (0, o._)((0, i._)({}, e), (0, n._)({}, s, (0, i._)({}, e[s], a.field)));
                        case d.Bd.SHADOW_CHANGE:
                            return (0, i._)({}, e, a);
                        case d.Bd.FORM_CHANGE:
                            return c()({}, e, a);
                        default:
                            return e
                    }
                },
                m = s().createContext({
                    locale: "",
                    getI18n: function() {},
                    base: "",
                    quote: "",
                    tradeType: "",
                    layout: "",
                    ticker: void 0,
                    urlConfig: void 0,
                    isLoggedIn: void 0,
                    userAssets: {}
                })
        },
        AUgw: (e, t, r) => {
            "use strict";
            r.d(t, {
                ML: () => d,
                eG: () => c,
                nj: () => l,
                zP: () => u
            });
            var n = r("iKvg"),
                i = r("tM9B"),
                o = r("J+BU"),
                a = r("wtFP"),
                s = function(e) {
                    return e === o.Vl.BUY ? "sliderBuyLastUpdate" : "sliderSellLastUpdate"
                },
                u = function(e, t) {
                    var r = t.side,
                        i = t.orderType,
                        a = t.value;
                    if (i === o.W4.MARKET) {
                        var u = s(r);
                        e({
                            type: o.Bd.SHADOW_CHANGE,
                            payload: (0, n._)({}, u, a)
                        })
                    }
                },
                c = function(e, t) {
                    return !!e[s(t)]
                },
                l = function(e, t) {
                    return e === o.Vl.BUY && "quantity" === t || e === o.Vl.SELL && "total" === t
                },
                d = function(e) {
                    var t = e.sildeUpdate,
                        r = e.side,
                        n = e.orderType,
                        s = e.placeType,
                        u = e.payload,
                        c = e.getMarketPrice,
                        l = e.getBook,
                        d = e.tickSizePrecision,
                        p = e.minQtyPrecision;
                    try {
                        if (!s && n === o.W4.MARKET && t && function(e, t) {
                                return e === o.Vl.BUY && t.quantity || e === o.Vl.SELL && t.quoteOrderQty
                            }(r, u)) {
                            var f = l(),
                                m = c(),
                                v = (r === o.Vl.BUY ? f.asks[0] : f.bids[0])[0] || m;
                            if (r === o.Vl.BUY) {
                                var g = (0, i.vC)((0, i.lw)(v, 1.0005, u.quantity), d);
                                delete u.quantity, u.quoteOrderQty = g
                            } else {
                                var y = (0, i.vC)((0, i.k3)(u.quoteOrderQty, (0, i.lw)(v, .9995)), p);
                                delete u.quoteOrderQty, u.quantity = y
                            }
                        }
                    } catch (A) {
                        var T, _;
                        (0, a.u4)("placeorder_market_params_update_error", {
                            sildeUpdate: t,
                            side: r,
                            orderType: n,
                            placeType: s,
                            payload: u,
                            tickSizePrecision: d,
                            marketPrice: c(),
                            orderAskPrice: (null === (T = l()) || void 0 === T ? void 0 : T.asks[0]) || 0,
                            orderBidPrice: (null === (_ = l()) || void 0 === _ ? void 0 : _.bids[0]) || 0
                        })
                    }
                }
        },
        vTbz: (e, t, r) => {
            "use strict";
            r.d(t, {
                BW: () => s,
                F5: () => a,
                bS: () => i,
                hK: () => o
            });
            var n = r("J+BU"),
                i = function(e) {
                    return e === n.V9.BORROW || e === n.V9.BOTH
                },
                o = function(e) {
                    return e === n.V9.REPAY || e === n.V9.BOTH
                },
                a = function(e) {
                    return e === n.Wb.MARGIN_BUY || e === n.Wb.AUTO_BORROW_REPAY
                },
                s = function(e) {
                    return e === n.Wb.AUTO_REPAY || e === n.Wb.AUTO_BORROW_REPAY
                }
        },
        WOJV: (e, t, r) => {
            "use strict";
            r.d(t, {
                AO: () => s,
                Ve: () => c,
                ZF: () => o,
                aY: () => i,
                n_: () => a,
                rM: () => u,
                tS: () => l
            });
            var n = r("wtFP"),
                i = function() {
                    (0, n.u4)("PopupView", {
                        eventName: "fund_account",
                        title: "fund_account_popup",
                        df_source: "spot"
                    })
                },
                o = function(e) {
                    var t = e.$element_id;
                    (0, n.u4)("$WebClick", {
                        eventName: "fund_account",
                        title: "fund_account_popup",
                        $element_id: t,
                        df_source: "spot"
                    })
                },
                a = function(e) {
                    var t = e.tradeType;
                    (0, n.u4)("$WebClick", {
                        module: "order_form",
                        $element_id: "buy_with",
                        pageName: n.$1[t],
                        df_source: n.Yx[t]
                    })
                },
                s = function(e) {
                    var t = e.tradeType;
                    (0, n.u4)("$WebClick", {
                        module: "order_form",
                        $element_id: "calculator",
                        pageName: n.$1[t],
                        df_source: n.Yx[t]
                    })
                },
                u = function(e) {
                    var t = e.tradeType;
                    (0, n.u4)("$WebClick", {
                        module: "order_form",
                        $element_id: "transfer",
                        pageName: n.$1[t],
                        df_source: n.Yx[t]
                    })
                },
                c = function(e) {
                    var t = e.tradeType;
                    (0, n.u4)("$WebClick", {
                        module: "order_form",
                        $element_id: "borrow",
                        pageName: n.$1[t],
                        df_source: n.Yx[t]
                    })
                },
                l = function(e) {
                    var t = e.tradeType,
                        r = e.element_id;
                    (0, n.u4)("$WebClick", {
                        module: "order_form",
                        $element_id: r,
                        pageName: n.$1[t],
                        df_source: n.Yx[t]
                    })
                }
        },
        b9LU: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d,
                x: () => c
            });
            var n = r("mguP"),
                i = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                s = r("Qhol"),
                u = r("J+BU"),
                c = a().createContext({
                    currentSymbol: "",
                    currentBaseAsset: "",
                    currentQuoteAsset: "",
                    isETFCoin: !1,
                    hideCurrentSymbol: !1,
                    currentGroup: "",
                    currentActiveLayoutGroup: "",
                    currentActiveLayout: "",
                    widgetKey: "",
                    currentTabs: void 0,
                    onShowTransferPanel: void 0
                }),
                l = function(e) {
                    var t = e.children,
                        r = e.currentSymbol,
                        a = e.currentBaseAsset,
                        l = e.currentQuoteAsset,
                        d = e.isETFCoin,
                        p = void 0 !== d && d,
                        f = e.currentGroup,
                        m = void 0 === f ? "" : f,
                        v = e.hideCurrentSymbol,
                        g = void 0 !== v && v,
                        y = e.currentActiveLayoutGroup,
                        T = void 0 === y ? "" : y,
                        _ = e.currentActiveLayout,
                        A = void 0 === _ ? "" : _,
                        b = e.widgetKey,
                        S = void 0 === b ? "" : b,
                        h = e.currentTabs,
                        x = e.onShowTransferPanel,
                        E = e.initTabSide,
                        I = e.initOrderType,
                        R = e.showOrderTypeTab,
                        O = void 0 === R || R,
                        C = e.showOrderModeTab,
                        N = void 0 === C || C,
                        L = e.initOrderMode,
                        P = e.showProExtra,
                        k = void 0 === P || P,
                        M = (0, s.CLR)(),
                        D = (0, n._)((0, s.Z9o)("orderform-ordertype-".concat(S), M ? u.W4.MARKET : u.W4.LIMIT), 2),
                        w = D[0],
                        U = D[1],
                        B = (0, o.useState)(E || "BUY"),
                        q = {
                            currentSymbol: r,
                            currentBaseAsset: a,
                            currentQuoteAsset: l,
                            currentGroup: m,
                            currentActiveLayoutGroup: T,
                            currentActiveLayout: A,
                            widgetKey: S,
                            isETFCoin: p,
                            orderType: I || w,
                            setOrderType: U,
                            tabSide: B[0],
                            setTabSide: B[1],
                            hideCurrentSymbol: g,
                            currentTabs: h,
                            onShowTransferPanel: x,
                            showOrderTypeTab: O,
                            showOrderModeTab: N,
                            initOrderMode: L,
                            showProExtra: k
                        };
                    return (0, i.jsx)(c.Provider, {
                        value: q,
                        children: t
                    })
                };
            const d = a().memo(l)
        },
        mnvu: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("DTvD");
            const i = (0, n.createContext)({
                symbol: "",
                changeSymbol: function(e) {
                    console.info(e)
                },
                getFormatSize: function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return {
                        ts: 2,
                        mi: 2
                    }
                },
                actionCancel: function() {
                    return !1
                },
                checked: !0,
                handleHideOtherPairs: function() {
                    return !0
                },
                emptyText: "You have no open orders."
            })
        },
        cL68: (e, t, r) => {
            "use strict";
            r.d(t, {
                Uw: () => a,
                bV: () => s,
                ok: () => i
            });
            var n = r("b2AH"),
                i = function(e) {
                    return (0, n.ok)("trd-openOrder", e)
                },
                o = [88, 120, 110, 60, 120, 120, 100, 60, 80, 100, 48, 48, 100],
                a = function(e, t, r) {
                    var n = o[e] || 0;
                    return t ? {
                        width: "".concat(n, "px"),
                        minWidth: "".concat(n, "px"),
                        maxWidth: "".concat(n, "px"),
                        flexGrow: 1,
                        right: 0,
                        padding: "0 8px",
                        zIndex: "20",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    } : {
                        width: "".concat(n, "px"),
                        minWidth: "".concat(n, "px"),
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }
                },
                s = o.reduce((function(e, t) {
                    return e + t
                }), 0)
        },
        rit8: (e, t, r) => {
            "use strict";
            r.d(t, {
                xD: () => P,
                SO: () => k,
                IT: () => d,
                i7: () => S,
                PV: () => C,
                AY: () => N
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("DTvD"),
                a = r.n(o),
                s = r("MD8j"),
                u = r("Qhol"),
                c = r("hAzz"),
                l = r("Ykh1"),
                d = function(e) {
                    var t = (0, s.wA)(),
                        r = (0, u.Oc_)(),
                        a = (0, c.U8)(e),
                        d = (0, u.Y5O)(a),
                        p = d.openOrders,
                        f = d.onRefresh,
                        m = d.loading,
                        v = d.updateTime,
                        g = d.error,
                        y = (0, l.N8)(),
                        T = y.created,
                        _ = y.enable,
                        A = "".concat(T).concat(_),
                        b = (0, o.useRef)(!0);
                    return (0, o.useEffect)((function() {
                        if (g && !m && t.orders.mergeState({
                                type: "openOrder.merge",
                                payload: {
                                    isError: !0
                                }
                            }), p) {
                            var e = {
                                loading: m,
                                updateTime: v,
                                orders: p
                            };
                            t.orders.mergeState({
                                type: "openOrder.init",
                                payload: e
                            })
                        } else t.orders.mergeState({
                            type: "openOrder.merge",
                            payload: {
                                loading: m
                            }
                        })
                    }), [v, m, p, t.orders]), (0, o.useEffect)((function() {
                        "ISOLATED_MARGIN" === a && "undefinedundefined" !== A && (b.current ? b.current = !1 : f && f())
                    }), [A]), (0, i._)((0, n._)({}, r), {
                        onRefresh: f
                    })
                },
                p = r("EpzF"),
                f = r("tM9B"),
                m = r("J+v0"),
                v = r.n(m),
                g = r("bQ69"),
                y = r("jD6E"),
                T = r("rOIZ"),
                _ = r("mnvu"),
                A = r("cL68"),
                b = function(e) {
                    return ["TRAILING_STOP", "STOP_LOSS", "TAKE_PROFIT"].includes(e)
                },
                S = function(e) {
                    var t = e.baseAsset,
                        r = e.quoteAsset,
                        n = e.time,
                        i = e.side,
                        a = e.type,
                        s = e.price,
                        c = e.origQty,
                        l = e.executedQty,
                        d = e.symbol,
                        m = e.stopPrice,
                        S = e.trailingDelta,
                        h = e.trailingTime,
                        x = e.workingTime,
                        E = e.orderType,
                        I = e.icebergQty,
                        R = e.icebergQuantity,
                        O = e.isSor,
                        C = e.contingencyType,
                        N = (0, A.ok)().getI18n,
                        L = (0, u.ok2)().getI18n,
                        P = (0, u.Bjx)()[d] || {},
                        k = (0, T.XV)(P.minQty),
                        M = (0, T.XV)(P.tickSize),
                        D = (0, o.useContext)(_.A).getFormatSize,
                        w = (0, p.R)(a, S),
                        U = D(d).ts,
                        B = (0, y.y5)({
                            side: i,
                            type: a
                        }),
                        q = (0, f.ZV)(m, U),
                        j = B && q ? Number(m) ? [B, q].join(" ") : L("trd-orderForm-MARKET") : g.jr,
                        F = parseFloat(s),
                        Q = parseFloat(c);
                    return {
                        nextDate: v()(n).format("YYYY-MM-DD HH:mm:ss"),
                        nextPair: [t, r].join("/"),
                        nextType: N((0, y.EI)(w)),
                        nextPrice: (0, y.VP)({
                            price: s,
                            tickSizePrecision: M,
                            getBaseI18n: L,
                            type: w
                        }),
                        nextAmount: (0, f.ZV)(c, k),
                        nextFilled: [(0, f.ZV)(parseFloat(l) / Q * 100, 0), "%"].join(""),
                        nextTotal: b(w) ? "-" : [(0, f.ZV)(Q * F, M), r].join(" "),
                        nextTriggerConditions: j,
                        nextTrailingDelta: (0, p.u)(S),
                        nextTrailingTime: h,
                        nextWorkingTime: x,
                        nextOrderType: E,
                        nextIceBergQty: I || R || "-",
                        nextSor: O ? "True" : "-",
                        nextExecutedQty: l,
                        isOTOType: "OTO" === C
                    }
                },
                h = r("iKvg"),
                x = r("mXdx"),
                E = r("mguP"),
                I = r("tgKj"),
                R = function() {
                    var e = (0, A.ok)().getI18n,
                        t = (0, o.useContext)(_.A).actionCancel,
                        r = (0, E._)((0, u.Grl)(), 1)[0] === g.Gr.SPOT,
                        n = {
                            text: e("actionAll", {
                                defaultValue: "All"
                            }),
                            message: e("actionAllMsg", {
                                defaultValue: "Are you sure you want to cancel all?"
                            })
                        },
                        i = {
                            text: e("actionLimit", {
                                defaultValue: "Limit"
                            }),
                            message: e("actionLimitMsg", {
                                defaultValue: "Are you sure to cancel all Limit orders?"
                            })
                        },
                        a = {
                            text: e("actionStopLimit-Trailing", {
                                defaultValue: "Stop-Limit(Include Trailing Stop)"
                            }),
                            message: e("actionStopLimitMsg", {
                                defaultValue: "Are you sure to cancel all Stop-Limit orders?"
                            })
                        },
                        s = {
                            text: e("actionStopMarket", {
                                defaultValue: "Stop Market"
                            }),
                            message: e("actionStopMarketMsg", {
                                defaultValue: "Are you sure to cancel all Stop Market orders?"
                            })
                        },
                        c = {
                            text: e("actionLimitMaker", {
                                defaultValue: "Limit-Maker"
                            }),
                            message: e("actionLimitMakerMsg", {
                                defaultValue: "Are you sure to cancel all Limit Maker orders?"
                            })
                        },
                        l = r ? [n, i, a, s, c] : [n, i, a, c];
                    return (0, x.jsx)(I.A, {
                        style: {
                            backgroundColor: "var(--color-CardBg)",
                            boxShadow: "var(--shadow-shadow2)",
                            borderRadius: "12px",
                            flexDirection: "column",
                            padding: "10px 0px"
                        },
                        children: l.map((function(e, n) {
                            return (0, x.jsx)(I.A, {
                                style: {
                                    whiteSpace: "nowrap",
                                    height: "38px",
                                    borderRadius: "0px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    color: "var(--color-SecondaryText)",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: "14px"
                                },
                                className: "hover:bg-Line",
                                onClick: function() {
                                    ! function(e) {
                                        var n = e.key,
                                            i = e.item;
                                        t((function(e) {
                                            var t = e.type,
                                                i = void 0 === t ? "" : t,
                                                o = e.trailingDelta,
                                                a = void 0 === o ? "" : o,
                                                s = (0, p.R)(i, a);
                                            return r ? 1 === n ? "LIMIT" === s : 2 === n ? "TAKE_PROFIT_LIMIT" === s || "STOP_LOSS_LIMIT" === s || "TRAILING_STOP" === s : 3 === n ? "TAKE_PROFIT" === s || "STOP_LOSS" === s : 4 !== n || "LIMIT_MAKER" === s : 1 === n ? "LIMIT" === s : 2 === n ? "TAKE_PROFIT_LIMIT" === s || "STOP_LOSS_LIMIT" === s || "TRAILING_STOP" === s : 3 !== n || "LIMIT_MAKER" === s
                                        }), i.message, n)
                                    }({
                                        key: n,
                                        item: e
                                    })
                                },
                                children: e.text
                            }, n)
                        }))
                    })
                };
            const O = a().memo(R);
            var C = function() {
                    var e, t = (0, A.ok)().getI18n,
                        r = (0, u.ok2)().getI18n;
                    return [{
                        text: t("date", {
                            defaultValue: "Date"
                        }),
                        textKey: "date"
                    }, {
                        text: t("pair", {
                            defaultValue: "Pair"
                        }),
                        textKey: "pair"
                    }, {
                        text: t("type", {
                            defaultValue: "Type"
                        }),
                        textKey: "type"
                    }, {
                        text: t("side", {
                            defaultValue: "Side"
                        }),
                        textKey: "side"
                    }, {
                        text: t("price", {
                            defaultValue: "Price"
                        }),
                        textKey: "price"
                    }, {
                        text: t("amount", {
                            defaultValue: "Amount"
                        }),
                        textKey: "amount"
                    }, {
                        text: r("trd-orderHistory-iceberAmount", {
                            defaultValue: "Amount per Iceberg Order"
                        }),
                        textKey: "icebergAmount"
                    }, {
                        text: t("filled", {
                            defaultValue: "Filled"
                        }),
                        textKey: "filled"
                    }, {
                        text: t("total", {
                            defaultValue: "Total"
                        }),
                        textKey: "total"
                    }, {
                        text: t("triggerConditions", {
                            defaultValue: "Trigger"
                        }),
                        area: "left",
                        textKey: "triggerConditions"
                    }, {
                        text: r("trd-orderform-sor", {
                            defaultValue: "SOR"
                        })
                    }, {
                        text: r("trd-orderForm-tpsl"),
                        tooltip: r("trd-orderconfirm-tpsl-tips"),
                        textKey: "tpsl"
                    }, (e = {
                        text: t("action", {
                            defaultValue: "Cancel All"
                        })
                    }, (0, h._)(e, "data-testid", "openOrderCancelAll"), (0, h._)(e, "overlay", (0, x.jsx)(O, {})), (0, h._)(e, "textKey", "action"), e)]
                },
                N = function() {
                    var e = (0, A.ok)().getI18n;
                    return [{
                        text: e("date", {
                            defaultValue: "Date"
                        }),
                        textKey: "date"
                    }, {
                        text: e("type", {
                            defaultValue: "Type"
                        }),
                        textKey: "type"
                    }, {
                        text: e("side", {
                            defaultValue: "Side"
                        }),
                        textKey: "side"
                    }, {
                        text: e("price", {
                            defaultValue: "Price"
                        }),
                        textKey: "price"
                    }, {
                        text: e("total", {
                            defaultValue: "Total"
                        }),
                        textKey: "total"
                    }, {
                        text: e("triggerConditions", {
                            defaultValue: "Trigger"
                        }),
                        area: "left",
                        textKey: "triggerConditions"
                    }, {
                        text: e("cancel", {
                            defaultValue: "Cancel"
                        }),
                        textKey: "action"
                    }]
                },
                L = r("eAFj"),
                P = (0, L.A)((function(e) {
                    return {
                        orderSide: "All",
                        setOrderSide: function(t) {
                            return e((function() {
                                return {
                                    orderSide: t
                                }
                            }))
                        }
                    }
                })),
                k = (0, L.A)((function(e) {
                    return {
                        orderType: "All",
                        setOrderType: function(t) {
                            return e((function() {
                                return {
                                    orderType: t
                                }
                            }))
                        }
                    }
                }))
        },
        "/4Sa": (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => u
            });
            var n = r("C7vZ"),
                i = r("IUcl"),
                o = r("n7Sa"),
                a = r("bQ69"),
                s = r("hAzz"),
                u = function(e) {
                    return (0, s.lX)(e) ? (0, n.Q)() : e === a.Gr.CROSS ? (0, i.Y)() : (0, o.Z)()
                }
        },
        C7Nc: (e, t, r) => {
            "use strict";
            r.d(t, {
                ot: () => i.o,
                Ey: () => ee,
                M2: () => ye.M2,
                YN: () => ye.YN,
                tD: () => Y.tD,
                eY: () => ge,
                IQ: () => _e,
                NH: () => ve,
                IE: () => Q,
                VS: () => n.V,
                mi: () => le,
                nj: () => ie,
                TK: () => n.T,
                xo: () => E,
                of: () => X,
                U: () => G,
                cA: () => Y.cA,
                RS: () => $,
                Hg: () => re,
                v2: () => g,
                R8: () => F,
                $J: () => j,
                pf: () => be,
                Gs: () => ye.Gs,
                J8: () => ye.J8,
                YQ: () => ye.YQ
            });
            var n = r("cshA"),
                i = r("nxXE"),
                o = (r("ttBN"), r("DB4s"), r("qH9a"), r("9mKD"), r("mguP")),
                a = r("DTvD"),
                s = r("MD8j"),
                u = r("Qhol"),
                c = r("gz7j"),
                l = r("nai5"),
                d = r("LrP/"),
                p = ["USDT", "FDUSD", "USDC", "TUSD", "BNB", "BTC", "ALTS", "FIAT"],
                f = r("Q8oT"),
                m = r("NoXm"),
                v = r("bQ69"),
                g = function() {
                    var e = (0, s.wA)(),
                        t = (0, o._)((0, c.s)(), 1)[0];
                    (0, u.jUM)(), (0, ye.Gs)(), (0, ye.J8)(), (0, ye.YQ)(), (0, l.Wm)(),
                    function() {
                        var e = (0, s.wA)();
                        (0, a.useEffect)((function() {
                            (0, d.ai)().then((function(t) {
                                t && t.length ? e.pageStore.updatePmTag(t) : e.pageStore.updatePmTag(p)
                            })).catch((function() {
                                e.pageStore.updatePmTag(p)
                            }))
                        }), [])
                    }(), (0, a.useEffect)((function() {
                        (0, m.installCommonWidgetWs)({
                            type: "sdk",
                            name: "tradeSDK",
                            sdk: (0, v.D$)()
                        }), (0, m.installCommonWidgetWs)({
                            type: "withStream",
                            name: "",
                            sdk: f.H
                        })
                    }), []), (0, a.useEffect)((function() {
                        e.products.queryMarginSymbol(), e.cookies.loadBasisTimeZone()
                    }), []), (0, a.useEffect)((function() {
                        e.products.queryProductBySymbol(t)
                    }), [t])
                },
                y = r("iOZB"),
                T = r("qoEh"),
                _ = r("c2J1"),
                A = r("/jvT"),
                b = r("hAzz"),
                S = (v.Gr.CROSS, v.Gr.ISOLATED, r("zHUU")),
                h = v.Gr.CROSS,
                x = v.Gr.ISOLATED,
                E = function() {
                    var e = (0, s.wA)(),
                        t = (0, u.nHk)(),
                        r = (0, o._)((0, u.Grl)(), 1)[0],
                        n = (0, S.Bl)(),
                        i = (0, u.q$z)();
                    ! function() {
                        var e = (0, s.wA)(),
                            t = (0, _.nH)(),
                            r = (0, o._)((0, T.Gr)(), 1)[0],
                            n = (0, _.Py)().isExistMarginAccount,
                            i = (0, s.d4)(A.makeUserAssets),
                            u = t && v.Gr.CROSS === r && n,
                            c = (0, s.d4)(A.makeMarginAccount);
                        (0, a.useEffect)((function() {
                            if (u) return (0, v.D$)().getUserDebtStream().subscribe((function(t) {
                                var r = t.asset,
                                    n = t.interest,
                                    i = t.principal,
                                    o = t.totalLiability;
                                e.margin.updateDebtAssets([{
                                    asset: r,
                                    interest: n,
                                    borrowed: i,
                                    totalDebt: o
                                }])
                            }))
                        }), [u, e.margin]);
                        var l = (0, a.useState)(0),
                            d = l[0],
                            p = l[1];
                        (0, y.A)((function() {
                            p(Date.now())
                        }), 3e4), (0, a.useEffect)((function() {
                            if (u) {
                                var t = c.totalAssetOfBtc,
                                    r = c.totalLiabilityOfBtc,
                                    n = c.totalNetAssetOfBtc,
                                    i = c.marginLevel;
                                e.margin.updateCrossAccount({
                                    totalAssetOfBtc: t,
                                    totalLiabilityOfBtc: r,
                                    marginLevel: i,
                                    totalNetAssetOfBtc: n
                                })
                            }
                        }), [u, i, e.margin, d])
                    }(),
                    function() {
                        var e = (0, s.d4)(A.makeUserAssets),
                            t = (0, s.wA)(),
                            r = (0, a.useState)(0),
                            n = r[0],
                            i = r[1];
                        (0, a.useEffect)((function() {
                            var r = (Object.keys(e) || []).filter((function(t) {
                                var r = (e[t] || {}).netAsset;
                                return !!r && 0 !== Number(r)
                            }));
                            r.length > 0 && r.length !== n && (n < 1 ? (t.margin.queryAvgOpenPrice(r), i(r.length)) : (i(r.length), setTimeout((function() {
                                t.margin.queryAvgOpenPrice(r)
                            }), 1e4)))
                        }), [n, e])
                    }();
                    var c = (0, a.useCallback)((0, b.Oo)((function() {
                            e.margin.queryMarginCoeff(), e.margin.queryMarginAssets(), e.margin.queryMarginInterest(), e.margin.queryMarginConfig()
                        })), [e.margin]),
                        l = (0, a.useCallback)((0, b.Oo)((function() {
                            e.margin.queryIsolatedInterest()
                        })), [e.margin]);
                    (0, a.useEffect)((function() {
                        t && r === h && c()
                    }), [c, t, r]), (0, a.useEffect)((function() {
                        t && r === x && l()
                    }), [l, t, r]), (0, a.useEffect)((function() {
                        t && (e.margin.queryCollateralRate(), e.margin.queryPMCollateralRate(), e.margin.queryIsolatedTransMode(), e.margin.queryCrossTransMode())
                    }), [c, t, r]), (0, a.useEffect)((function() {
                        t && (0, b.V$)(r) && e.margin.queryMarginEffectType()
                    }), [t, r]), (0, a.useEffect)((function() {
                        if (window && (r === h || r === x) && i) {
                            var e = window.location.href.replace(n, "en");
                            window.location.href = e
                        }
                    }), [r, i])
                },
                I = r("7o5y"),
                R = r("V+rp"),
                O = r("g11u"),
                C = r("u5kV"),
                N = r("Pn24"),
                L = r("29ZD"),
                P = r("2m9I"),
                k = r("nL0y"),
                M = r("lW1t"),
                D = r("6COY"),
                w = r("nHho"),
                U = r("lvZR"),
                B = r("wtFP"),
                q = r("tskG"),
                j = function() {
                    var e = (0, u.nHk)(),
                        t = (0, s.wA)(),
                        r = (0, s.d4)(M.makeRawInfo),
                        n = (0, u.$iq)(),
                        i = (0, u.i24)();
                    (0, I.C)(), (0, u.Jon)(), (0, w.A)(), (0, D.Af)(), (0, u.ipf)(), (0, u.g8W)(), (0, R.Ad)(), (0, O.U)(), (0, u.A_u)(), (0, U.X)(), (0, C.r)(), (0, N.l)(), (0, L.Z)(), (0, P.Z)(), (0, k.Y)(), (0, q.d)(), (0, a.useEffect)((function() {
                        t.pageStore.queryCoinInfo()
                    }), [t.userCenter, t.pageStore]), (0, a.useEffect)((function() {
                        e && r && t.assets.queryAllUserAssets({
                            rawInfo: r,
                            retryFlag: !1
                        })
                    }), [r, e, t.assets]), (0, a.useEffect)((function() {
                        e && (t.orderForm.queryBurnBnbRate(), t.market.queryFavorites())
                    }), [e, t.assets, t.orderForm, t.market, t.exchangeInfo, t.products]), (0, a.useEffect)((function() {
                        t.global.queryRegion()
                    }), [t.global]), (0, a.useEffect)((function() {
                        t.market.queryP2PList()
                    }), [t.market]), (0, a.useEffect)((function() {
                        e && (0, B.u4)("ModuleView", {
                            eventName: "trade_preference",
                            title: "order_adjustment",
                            item: "kline_adjustment",
                            df_tpSettings: {
                                switch: n.klineAdjustment
                            },
                            pageName: i ? "spot_trading" : "margin_trading",
                            df_source: i ? "spot" : "margin"
                        })
                    }), [e])
                },
                F = function() {
                    var e = (0, u.nHk)(),
                        t = (0, s.wA)(),
                        r = (0, s.d4)(M.makeRawInfo),
                        n = (0, u.$iq)(),
                        i = (0, u.i24)();
                    (0, I.C)(), (0, u.Jon)(), (0, w.A)(), (0, u.ipf)(), (0, u.g8W)(), (0, R.Ad)(), (0, u.A_u)(), (0, U.X)(), (0, C.r)(), (0, k.Y)(), (0, q.d)(), (0, a.useEffect)((function() {
                        t.pageStore.queryCoinInfo()
                    }), [t.userCenter, t.pageStore]), (0, a.useEffect)((function() {
                        e && r && t.assets.queryAllUserAssets({
                            rawInfo: r,
                            retryFlag: !1
                        })
                    }), [r, e, t.assets]), (0, a.useEffect)((function() {
                        e && (t.orderForm.queryBurnBnbRate(), t.market.queryFavorites())
                    }), [e, t.assets, t.orderForm, t.market, t.exchangeInfo, t.products]), (0, a.useEffect)((function() {
                        t.global.queryRegion()
                    }), [t.global]), (0, a.useEffect)((function() {
                        t.market.queryP2PList()
                    }), [t.market]), (0, a.useEffect)((function() {
                        e && (0, B.u4)("ModuleView", {
                            eventName: "trade_preference",
                            title: "order_adjustment",
                            item: "kline_adjustment",
                            df_tpSettings: {
                                switch: n.klineAdjustment
                            },
                            pageName: i ? "spot_trading" : "margin_trading",
                            df_source: i ? "spot" : "margin"
                        })
                    }), [e])
                },
                Q = (r("bhWp"), function(e) {
                    var t = (0, o._)((0, u.Grl)(), 1)[0],
                        r = (0, Y.cA)().symbolsMap,
                        n = (0, o._)((0, c.s)(), 1)[0],
                        i = r[e || n];
                    return v.N8 && i && (0, b.V$)(t)
                }),
                G = function() {
                    var e = (0, Y.cA)().symbolsMap,
                        t = (0, o._)((0, c.s)(), 1)[0],
                        r = (0, u.q$z)();
                    return Boolean(e[t]) && !r
                },
                Y = r("Impr"),
                K = r("S+0I"),
                V = r("d12p"),
                W = r("jbFV"),
                z = r.n(W),
                H = r("LWbc"),
                $ = function() {
                    var e = (0, s.wA)(),
                        t = (0, _.nH)();
                    return {
                        favorites: (0, s.d4)(H.makeMarketFavorites) || [],
                        setFavorite: (0, a.useCallback)(function() {
                            var r = (0, K._)(z().mark((function r(n, i) {
                                var o, a, s, u = arguments;
                                return z().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            o = u.length > 2 && void 0 !== u[2] ? u[2] : [], a = [], s = "", i > -1 ? (a = (0, V._)(o.slice(0, i)).concat((0, V._)(o.slice(i + 1))), s = "del") : (a = [n].concat((0, V._)(o)), s = "add"), e.market.oprFavorite({
                                                symbol: n,
                                                type: s,
                                                values: a,
                                                isLoggedIn: t
                                            });
                                        case 5:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function(e, t) {
                                return r.apply(this, arguments)
                            }
                        }(), [e.market, t]),
                        updateFavorite: (0, a.useCallback)((function(r) {
                            e.market.sortFavorite({
                                values: r,
                                isLoggedIn: t
                            })
                        }), [e.market, t])
                    }
                },
                Z = (r("mXdx"), r("Ov3/")),
                J = (r("YRJq"), r("b2AH"), r("J+BU")),
                X = function() {
                    var e = (0, s.d4)((function(e) {
                            return e.userProfile.finishMarginTransfer
                        })),
                        t = (0, s.d4)((function(e) {
                            return e.userProfile.finishMarginBorrow
                        })),
                        r = (0, s.d4)((function(e) {
                            return e.userProfile.finishMarginOrder
                        })),
                        n = (0, s.d4)((function(e) {
                            return e.userProfile.finishMarginBorrowOrder
                        })),
                        i = (0, s.d4)((function(e) {
                            return e.userProfile.skipMarginGuide
                        })),
                        u = (0, s.wA)(),
                        c = (0, o._)((0, Z.A)("marginGuide-finishMarginTransfer"), 2)[1],
                        l = (0, o._)((0, Z.A)("marginGuide-finishMarginBorrow"), 2)[1],
                        d = (0, o._)((0, Z.A)("marginGuide-finishMarginOrder"), 2)[1],
                        p = (0, o._)((0, Z.A)("marginGuide-finishMarginBorrowOrder"), 2)[1],
                        f = (0, o._)((0, Z.A)("marginGuide-skipMarginGuide"), 2)[1];
                    return {
                        finishTransfer: e,
                        setFinishTransfer: (0, a.useCallback)((function(e) {
                            u.userProfile.save({
                                key: "finishMarginTransfer",
                                value: e
                            }), c(e)
                        }), []),
                        finishBorrow: t,
                        setFinishBorrow: (0, a.useCallback)((function(e) {
                            u.userProfile.save({
                                key: "finishMarginBorrow",
                                value: e
                            }), l(e)
                        }), []),
                        finishOrder: r,
                        setFinishOrder: (0, a.useCallback)((function(e) {
                            u.userProfile.save({
                                key: "finishMarginOrder",
                                value: e
                            }), d(e)
                        }), []),
                        skipMarginGuide: i,
                        setSkipMarginGuide: (0, a.useCallback)((function(e) {
                            u.userProfile.save({
                                key: "skipMarginGuide",
                                value: e
                            }), f(e)
                        }), []),
                        finishBorrowOrder: n,
                        setFinishBorrowOrder: (0, a.useCallback)((function(e) {
                            u.userProfile.save({
                                key: "finishMarginBorrowOrder",
                                value: e
                            }), p(e)
                        }), [])
                    }
                },
                ee = function() {
                    var e = X(),
                        t = e.setFinishOrder,
                        r = e.setFinishBorrowOrder,
                        n = (0, o._)((0, u.Grl)(), 1)[0];
                    return (0, a.useCallback)((function(e) {
                        (0, b.V$)(n) && (e === J.Wb.MARGIN_BUY ? r("true") : t("true"))
                    }), [n, t, r])
                },
                te = r("G/TK"),
                re = function() {
                    (0, te.i)()
                },
                ne = r("BZR+"),
                ie = function(e) {
                    var t = e.symbol,
                        r = (0, Y.cA)().symbolsMap[t] || {},
                        n = (0, ne.Qh)(),
                        i = r.isolatedRatio,
                        o = r.defaultRatio;
                    return (0, ne.iM)(i || o, n)
                },
                oe = r("hrAD"),
                ae = r("qoEP"),
                se = r("tM9B"),
                ue = r("OKXq"),
                ce = r("ozYv"),
                le = function(e) {
                    var t = e.currentSymbol,
                        r = void 0 === t ? "" : t,
                        n = (0, s.d4)(ue.makeAssets),
                        i = (0, s.d4)(A.makeMarginAllAssets),
                        o = (0, s.d4)(A.makeIsolatedInterestRate),
                        c = (0, s.d4)(A.makeIsolatedUserAssets) || {},
                        l = o,
                        d = (0, u.Bjx)();
                    return (0, a.useMemo)((function() {
                        var e = (0, ce.G)(i, "assetName"),
                            t = function(e, t) {
                                return e.sort((function(e, t) {
                                    return t.totalNetAssetOfBtc - e.totalNetAssetOfBtc
                                })), e.reduce((function(e, r) {
                                    return r.symbol === t ? e.unshift(r) : e.push(r), e
                                }), [])
                            }(Object.keys(c).filter((function(e) {
                                return Object.keys(c[e]).some((function(t) {
                                    var r;
                                    return Number(null === (r = c[e][t]) || void 0 === r ? void 0 : r.netAsset) > 0
                                }))
                            })).map((function(t) {
                                var r = d[t] || {};
                                return Object.keys(c[t]).reduce((function(i, o) {
                                    var a, s, u = n[o] || {
                                            free: "0.00000000",
                                            logoUrl: "",
                                            assetName: ""
                                        },
                                        d = u.free,
                                        p = u.logoUrl;
                                    u.assetName, u.base;
                                    (i.baseAsset = r.baseAsset, i.quoteAsset = r.quoteAsset, i.symbol = "".concat(r.baseAsset).concat(r.quoteAsset), i[o] = (0, ae._)((0, oe._)({}, e[o], c[t][o]), {
                                        logoUrl: p,
                                        maxTransferAmount: "".concat(d),
                                        interestRate: l[o],
                                        debt: c[t][o].borrowed && c[t][o].interest ? (0, se.tY)(c[t][o].borrowed, c[t][o].interest).toFixed(8) : "0.00000000"
                                    }), i.totalNetAssetOfBtc) ? i.totalNetAssetOfBtc = Number(null === i || void 0 === i || null === (a = i[o]) || void 0 === a ? void 0 : a.netAssetOfBtc) + Number(i.totalNetAssetOfBtc): i.totalNetAssetOfBtc = Number(null === i || void 0 === i || null === (s = i[o]) || void 0 === s ? void 0 : s.netAssetOfBtc);
                                    return i
                                }), {})
                            })), r);
                        return {
                            userIsolatedAssets: t
                        }
                    }), [i, l, c, n, r])
                },
                de = r("VA12"),
                pe = function() {
                    var e = (0, K._)(z().mark((function e(t, r) {
                        var n;
                        return z().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, de.get)(t, r);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n || {});
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0);
                                case 9:
                                    return e.abrupt("return", {});
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                fe = function() {
                    var e = (0, K._)(z().mark((function e() {
                        var t;
                        return z().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, pe("/bapi/apex/v1/public/apex/marketing/symbol/list");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t && t.data || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                me = function(e) {
                    return e.filter((function(e) {
                        return 0 !== e.hidden
                    }))
                },
                ve = (function() {
                    var e = (0, K._)(z().mark((function e() {
                        var t, r, n;
                        return z().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = o._, e.next = 3, Promise.all([fe()]);
                                case 3:
                                    return e.t1 = e.sent, t = (0, e.t0)(e.t1, 1), r = t[0], n = me(r), e.abrupt("return", {
                                        list: n
                                    });
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, u.Pyz)();
                    return {
                        isExistFutureAccount: e.isExistFutureAccount,
                        canUpgratePM1_5: e.tradeLevel >= (0, u.DFo)().minUpgrateLevel
                    }
                }),
                ge = function() {
                    var e = (0, s.wA)(),
                        t = (0, s.d4)((function(e) {
                            return e.market.logos
                        })),
                        r = Object.keys(t).length;
                    return (0, a.useEffect)((function() {
                        0 === r && e.market.queryLogos()
                    }), [e.market, r]), t
                },
                ye = r("mjbD"),
                Te = r("ROyg"),
                _e = (r("PHSU"), function() {
                    var e = (0, s.wA)(),
                        t = (0, u.NF7)(),
                        r = (0, u.MXs)().isLvtVisible,
                        n = ((0, o._)((0, c.s)(), 1)[0], (0, a.useState)([])),
                        i = n[0],
                        l = n[1];
                    (0, a.useEffect)((function() {
                        e.products.queryProduct().then((function(e) {
                            e && e.length > 0 && l(e)
                        }))
                    }), []), (0, a.useEffect)((function() {
                        if (i && i.length > 0) {
                            var n = (0, Te.getExchangeInfo)(i, t, r);
                            e.exchangeInfo.updateState(n)
                        }
                    }), [e.exchangeInfo, t, r, i])
                });

            function Ae(e) {
                return "basic" === e ? ".spot-basic-layout-display { display: block; }" : ".spot-basic-layout-display { display: none; }"
            }
            var be = function(e) {
                var t = (0, o._)((0, Z.A)("spot-layout", "basic"), 2),
                    r = t[0],
                    n = t[1];
                (0, a.useEffect)((function() {
                    var t;
                    e !== r && e && (t = [{
                        cssRules: Ae(e),
                        id: "layout_css_display"
                    }], Array.isArray(t) && t.forEach((function(e) {
                        var t = e.cssRules,
                            r = void 0 === t ? "" : t,
                            n = e.id,
                            i = void 0 === n ? "" : n;
                        if (i) {
                            var o = document.createElement("style");
                            o.textContent = r, o.id = i, document.head.appendChild(o)
                        }
                    })), n(e))
                }), [e, r, n])
            }
        },
        QFrD: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => u,
                b: () => s
            });
            var n = r("mguP"),
                i = r("0GV5"),
                o = r("Qhol"),
                a = r("bQ69"),
                s = function() {
                    return (0, i.Bm)("isolated_margin_wallet_removal")
                },
                u = function() {
                    var e = s(),
                        t = (0, n._)((0, o.Grl)(), 1)[0];
                    return e && t === a.Gr.ISOLATED
                }
        },
        "V+rp": (e, t, r) => {
            "use strict";
            r.d(t, {
                Ad: () => g,
                eI: () => d,
                nd: () => m,
                o7: () => v,
                ts: () => f
            });
            var n = r("d12p"),
                i = r("FZHc"),
                o = r("DTvD"),
                a = r("zHUU"),
                s = r("WT+B"),
                u = r("Qhol"),
                c = r("eAFj"),
                l = r("hAzz"),
                d = (0, c.A)((function(e) {
                    return {
                        announmentList: [],
                        setAnnounmentList: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return e((function() {
                                return {
                                    announmentList: t
                                }
                            }))
                        }
                    }
                })),
                p = function() {
                    return (new Date).toLocaleDateString()
                },
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = p(),
                        o = t.date,
                        a = t.ids;
                    r({
                        date: i,
                        ids: i === o ? (0, n._)(a).concat([e]) : [e]
                    })
                },
                m = function() {
                    return (0, u.Z9o)("annouments-close")
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        i = Date.now(),
                        o = t.date,
                        a = t.ids,
                        s = p(),
                        u = [];
                    o === s && (u = a);
                    var c = (0, l.V$)(n) ? "margin" : "spot";
                    return e.filter((function(e) {
                        var t, n, i, o, a, s, u, l;
                        return (null === e || void 0 === e || null === (t = e.tradingPairs) || void 0 === t || null === (n = t[c]) || void 0 === n || null === (i = n.tradingPair) || void 0 === i || null === (o = i.includes) || void 0 === o ? void 0 : o.call(i, r)) || (null === e || void 0 === e || null === (a = e.tradingPairs) || void 0 === a || null === (s = a[c]) || void 0 === s || null === (u = s.tradingPair) || void 0 === u || null === (l = u.includes) || void 0 === l ? void 0 : l.call(u, "ALL_TRADING_PAIRS"))
                    })).filter((function(e) {
                        return i >= Number(null === e || void 0 === e ? void 0 : e.startTime) && i <= Number(null === e || void 0 === e ? void 0 : e.endTime) && !u.includes(null === e || void 0 === e ? void 0 : e.id)
                    }))
                },
                g = function() {
                    var e = (0, a.Bl)(),
                        t = (0, u.nHk)(),
                        r = d((function(e) {
                            return e.setAnnounmentList
                        })),
                        n = (0, s.Z)((function(e) {
                            (null === e || void 0 === e ? void 0 : e.emergencyMessage) && Array.isArray(e.emergencyMessage) && r(e.emergencyMessage)
                        }));
                    (0, o.useEffect)((function() {
                        if (void 0 !== t) return (0, i.y)(e, n)
                    }), [e, n, t])
                }
        },
        lvZR: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => l
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                a = r("DTvD"),
                s = r("Zfyq"),
                u = r("MD8j"),
                c = r("/kUC"),
                l = function() {
                    (0, c.I)();
                    var e = (0, u.wA)();
                    (0, a.useEffect)((function() {
                        var t = !1;

                        function r() {
                            return (r = (0, n._)(o().mark((function r() {
                                var n, i;
                                return o().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, (0, s.K$)({
                                                platform: "WEB",
                                                currency: ""
                                            });
                                        case 2:
                                            (n = r.sent) && n.success && (i = (null === n || void 0 === n ? void 0 : n.data.restriction.keys) || [], !t && e.pageStore.updateComplianceDisabledTags(i));
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))).apply(this, arguments)
                        }
                        return function() {
                                r.apply(this, arguments)
                            }(),
                            function() {
                                t = !0
                            }
                    }), [""])
                }
        },
        nxXE: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => y
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("mguP"),
                a = r("DTvD"),
                s = r("MD8j"),
                u = r("Vur3"),
                c = r("zHUU"),
                l = r("Sr3F"),
                d = r("Qlla"),
                p = r("Qhol"),
                f = r("bQ69"),
                m = r("eWL+"),
                v = r("C7Nc"),
                g = r("SFsY"),
                y = (r("hAzz"), function() {
                    var e = (0, s.wA)(),
                        t = (0, f.L2)(),
                        r = (0, m.hF)(),
                        y = (0, c.Bl)(),
                        T = (0, l.s)(),
                        _ = (0, o._)((0, p.Grl)(), 1)[0],
                        A = (0, p.okI)(),
                        b = (0, s.d4)((function(e) {
                            return e.setting.isElectronMainWindow
                        })),
                        S = (0, v.cA)().symbolsMap,
                        h = (0, g.c)().changeCurrentGroupSymbol,
                        x = (0, p.QsY)().isMobile,
                        E = (0, p.qgR)(),
                        I = (0, a.useCallback)((function(a) {
                            var s = a.resPathList,
                                c = void 0 === s ? [] : s,
                                l = a.isBlank,
                                m = void 0 !== l && l,
                                v = a.stateSymbol,
                                g = (a.electronUpdateTabs, a.activeSubTab),
                                _ = a.activeTab,
                                b = a.group;
                            if (c.length < 1) return console.warn("spot resPathList length must >= 1");
                            var I = t.split("/"),
                                R = I.slice(0, I.length - c.length).concat(c),
                                O = v || c[c.length - 1],
                                C = O.split("_").join(""),
                                N = (S[C] || {}).type,
                                L = (0, d.X)(O),
                                P = (0, o._)(L, 2),
                                k = (P[0], (0, o._)(P[1], 2)),
                                M = k[0],
                                D = k[1],
                                w = (0, p.Oy$)({
                                    symbol: C,
                                    lng: y,
                                    productMap: r,
                                    isMobile: x,
                                    openGrid: E
                                }),
                                U = "Margin" === _ || "Grid" === _ && w,
                                B = f.Gr.CROSS;
                            B = "Margin" !== _ || g !== f.Ch && g !== f.Gr.CROSS ? "Margin" === _ && g === f.Gr.ISOLATED ? N === f.Ch || N === f.Gr.ISOLATED ? f.Gr.ISOLATED : f.Gr.CROSS : "Grid" === _ && w ? f.Gr.GRID : g : N ? N === f.Ch || N === f.Gr.CROSS ? f.Gr.CROSS : f.Gr.ISOLATED : f.Gr.SPOT, U && e.pageStore.toggleTradeType(B), b && h(b, C, M, D);
                            var q = u.stringify((0, i._)((0, n._)({}, A), {
                                    type: U ? B.toLocaleLowerCase() : null === A || void 0 === A ? void 0 : A.type
                                })),
                                j = "".concat(R.join("/")).concat(q && "?".concat(q));
                            m ? window.location.href = j : (e.pageStore.addSymbolChangedCounter(), e.pageStore.updateSymbol(L), T((0, d.B)(j)))
                        }), [t, S, e.pageStore, b, A, T, h, _, y, x, E]);
                    return I
                })
        },
        g11u: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => g
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                o = r("MD8j"),
                a = r("GIr8"),
                s = r("Vhyo"),
                u = r("zX7I"),
                c = r("GJ+9"),
                l = r("KRo/"),
                d = r("lW1t"),
                p = r("Qhol"),
                f = r("b2AH"),
                m = r("sXI5"),
                v = r("bQ69"),
                g = function() {
                    var e = (0, p.nHk)(),
                        t = (0, o.wA)(),
                        r = (0, p.DPo)().isLight,
                        g = (0, o.d4)(d.makeIfShowBannedWarning),
                        y = (0, f.CU)().getI18n,
                        T = (0, i.useCallback)((function() {
                            m.Ay.close(), t.pageStore.updateIfShowBannedWarning(!1)
                        }), [t.pageStore]);
                    (0, i.useEffect)((function() {
                        e && t.pageStore.queryBannedProducts()
                    }), [t.pageStore, e]), (0, i.useEffect)((function() {
                        if (g) {
                            var e = v.TP.TERMS_URL;
                            m.Ay.show({
                                isLight: r,
                                showCloseIcon: !1,
                                contentSx: {
                                    marginTop: ["150px", 0]
                                },
                                onMaskClick: T,
                                children: (0, n.jsxs)(a.A, {
                                    sx: {
                                        flexDirection: "column",
                                        width: ["298px", "336px"],
                                        alignItems: "center",
                                        wordBreak: "break-word"
                                    },
                                    children: [(0, n.jsx)(l.A, {
                                        width: "96px",
                                        height: "96px"
                                    }), (0, n.jsx)(s.A, {
                                        sx: {
                                            mt: "24px",
                                            textAlign: "center"
                                        },
                                        children: y("banned-product-warning-new", {
                                            defaultValue: "You are no longer able to place an order for this trading pair due to changes to our Terms of Use."
                                        })
                                    }), (0, n.jsx)(u.A, {
                                        sx: {
                                            width: "100%",
                                            height: "40px",
                                            mt: "24px"
                                        },
                                        onClick: T,
                                        children: y("banned-product-ok", {
                                            defaultValue: "OK"
                                        })
                                    }), (0, n.jsx)(c.A, {
                                        variant: "defaultLink",
                                        onClick: function(e) {
                                            0
                                        },
                                        href: e,
                                        mt: "21px",
                                        fontSize: "14px",
                                        children: y("banned-product-view-details", {
                                            defaultValue: "View Details"
                                        })
                                    })]
                                })
                            })
                        }
                    }), [T, y, g, r])
                }
        },
        tprX: (e, t, r) => {
            "use strict";
            r.d(t, {
                BU: () => p,
                Mv: () => d,
                lE: () => l,
                oZ: () => c,
                x7: () => s,
                zS: () => u
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("Ov3/"),
                a = r("q+oq"),
                s = (0, r("eAFj").A)((function(e) {
                    return {
                        showOverlay: !0,
                        changeOverlay: function(t) {
                            return e((function() {
                                return {
                                    showOverlay: t
                                }
                            }))
                        },
                        quickSwitch: !1,
                        changeQuickSwitch: function(t) {
                            return e((function() {
                                return {
                                    quickSwitch: t
                                }
                            }))
                        },
                        animation: !1,
                        changeAnimation: function(t) {
                            return e((function() {
                                return {
                                    animation: t
                                }
                            }))
                        },
                        compare: !1,
                        changeCompare: function(t) {
                            return e((function() {
                                return {
                                    compare: t
                                }
                            }))
                        }
                    }
                })),
                u = function() {
                    var e = (0, n._)((0, o.A)("orderbook-overlay", !0), 2),
                        t = e[0],
                        r = e[1],
                        a = s((function(e) {
                            return e.changeOverlay
                        }));
                    return (0, i.useEffect)((function() {
                        a(t)
                    }), [a, t]), (0, i.useMemo)((function() {
                        return [t, r]
                    }), [t, r])
                },
                c = function() {
                    var e = (0, n._)((0, o.A)("orderbook-quickswitch", !1), 2),
                        t = e[0],
                        r = e[1],
                        a = s((function(e) {
                            return e.changeQuickSwitch
                        }));
                    return (0, i.useEffect)((function() {
                        a(t)
                    }), [a, t]), (0, i.useMemo)((function() {
                        return [t, r]
                    }), [t, r])
                },
                l = function() {
                    var e = (0, n._)((0, o.A)("orderbook-animation", !1), 2),
                        t = e[0],
                        r = e[1],
                        a = s((function(e) {
                            return e.changeAnimation
                        }));
                    return (0, i.useEffect)((function() {
                        a(t)
                    }), [a, t]), (0, i.useMemo)((function() {
                        return [t, r]
                    }), [t, r])
                },
                d = function() {
                    var e = (0, n._)((0, o.A)("orderbook-compare", !0), 2),
                        t = e[0],
                        r = e[1],
                        a = s((function(e) {
                            return e.changeCompare
                        }));
                    return (0, i.useEffect)((function() {
                        a(t)
                    }), [a, t]), (0, i.useMemo)((function() {
                        return [t, r]
                    }), [t, r])
                },
                p = function() {
                    var e = (0, n._)((0, a.T)("orderbook-rounding-v2", !0), 2);
                    return [e[0], e[1]]
                }
        },
        mjbD: (e, t, r) => {
            "use strict";
            r.d(t, {
                Gs: () => A,
                J8: () => _,
                M2: () => T,
                YN: () => y,
                YQ: () => b,
                vO: () => g
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("mguP"),
                a = r("MD8j"),
                s = r("/jvT"),
                u = r("ozYv"),
                c = r("eWL+"),
                l = r("C7Nc"),
                d = r("DTvD"),
                p = r("Qhol"),
                f = r("BZR+"),
                m = r("bQ69"),
                v = r("hAzz"),
                g = function() {
                    var e = (0, a.d4)(s.makeMarginAllAssets);
                    return (0, u.G)(e, "assetName")
                },
                y = function(e) {
                    var t, r, n = e.symbol,
                        i = g(),
                        o = (0, c.Bj)(),
                        a = (null === o || void 0 === o ? void 0 : o[n]) || {},
                        s = a.baseAsset,
                        u = a.quoteAsset,
                        l = null === i || void 0 === i || null === (t = i[s]) || void 0 === t ? void 0 : t.leverage,
                        d = null === i || void 0 === i || null === (r = i[u]) || void 0 === r ? void 0 : r.leverage,
                        p = (0, f.Qh)();
                    return l || d ? (0, f.u8)(Math.max(Number(l), Number(d)), p) : null
                },
                T = function(e) {
                    var t, r = e.coin,
                        n = (0, f.Qh)("CROSS"),
                        i = g();
                    return (0, f.u8)(null === i || void 0 === i || null === (t = i[r]) || void 0 === t ? void 0 : t.leverage, n) || null
                },
                _ = function() {
                    var e = (0, l.cA)(),
                        t = e.rawSymbols,
                        r = e.symbolsMap,
                        o = (0, p.DFo)().isPmAccount,
                        u = (0, c.Bj)(),
                        v = g(),
                        y = (0, a.wA)(),
                        T = (0, p.nHk)(),
                        _ = (0, f.Qh)(m.Gr.CROSS),
                        A = (0, f.Qh)(m.Gr.ISOLATED),
                        b = (0, a.d4)(s.makeMarginAllAssets);
                    (0, d.useEffect)((function() {
                        if (o && T && t && 0 !== t.length && _) {
                            var e = {};
                            Object.keys(r).map((function(t) {
                                var o, a, s = (null === u || void 0 === u ? void 0 : u[t]) || {},
                                    c = s.baseAsset,
                                    l = s.quoteAsset,
                                    d = null === v || void 0 === v || null === (o = v[c]) || void 0 === o ? void 0 : o.leverage,
                                    p = null === v || void 0 === v || null === (a = v[l]) || void 0 === a ? void 0 : a.leverage;
                                e[t] = (0, i._)((0, n._)({}, r[t]), {
                                    crossRatio: (0, f.iM)(d && p ? "".concat(Math.max(Number(d), Number(p)), "x") : r[t].crossRatio, _),
                                    marginRatio: (0, f.iM)(d && p ? "".concat(Math.max(Number(d), Number(p)), "x") : r[t].marginRatio, _),
                                    isolatedRatio: (0, f.iM)(r[t].marginRatio, A),
                                    defaultRatio: (0, f.iM)(d && p ? "".concat(Math.max(Number(d), Number(p)), "x") : r[t].marginRatio, _)
                                })
                            })), y.products.updateState({
                                marginSymbol: {
                                    rawSymbols: t,
                                    symbolsMap: e
                                }
                            })
                        }
                    }), [o, t, _, A, b])
                },
                A = function() {
                    var e = (0, l.cA)(),
                        t = e.rawSymbols,
                        r = e.symbolsMap,
                        u = (0, p.h_5)().isCM2_0,
                        y = (0, c.Bj)(),
                        T = (0, a.d4)(s.makeMarginAllAssets),
                        _ = g(),
                        A = (0, a.wA)(),
                        b = (0, p.nHk)(),
                        S = (0, f.Qh)(m.Gr.CROSS),
                        h = (0, f.Qh)(m.Gr.ISOLATED),
                        x = (0, o._)((0, p.Grl)(), 1)[0],
                        E = (0, v.V$)(x);
                    (0, d.useEffect)((function() {
                        E && A.margin.queryAssetLeverageBrackets()
                    }), [E]), (0, d.useEffect)((function() {
                        if (u && b && t && 0 !== t.length && S) {
                            var e = {};
                            Object.keys(r).map((function(t) {
                                var o, a, s, u, c, l, d, p, m, v, g = (null === y || void 0 === y ? void 0 : y[t]) || {},
                                    T = g.baseAsset,
                                    A = g.quoteAsset,
                                    b = null === _ || void 0 === _ || null === (o = _[T]) || void 0 === o ? void 0 : o.leverage,
                                    x = null === _ || void 0 === _ || null === (a = _[A]) || void 0 === a ? void 0 : a.leverage,
                                    E = (0, f.iM)(b && x ? "".concat(Math.max(Number(b), Number(x)), "x") : r[t].crossRatio, S),
                                    I = (0, f.iM)(r[t].isolatedRatio || "5x", h);
                                e[t] = (0, i._)((0, n._)({}, r[t]), {
                                    crossRatio: E,
                                    isolatedRatio: I,
                                    marginRatio: "BOTH" === (null === (s = r[t]) || void 0 === s ? void 0 : s.type) ? Math.max(Number(null === (u = null === E || void 0 === E ? void 0 : E.split("x")) || void 0 === u ? void 0 : u[0]), Number(null === (c = null === I || void 0 === I ? void 0 : I.split("x")) || void 0 === c ? void 0 : c[0])) + "x" : "ISOLATED" === (null === (l = r[t]) || void 0 === l ? void 0 : l.type) ? I : E,
                                    defaultRatio: "BOTH" === (null === (d = r[t]) || void 0 === d ? void 0 : d.type) ? Math.max(Number(null === (p = null === E || void 0 === E ? void 0 : E.split("x")) || void 0 === p ? void 0 : p[0]), Number(null === (m = null === I || void 0 === I ? void 0 : I.split("x")) || void 0 === m ? void 0 : m[0])) + "x" : "ISOLATED" === (null === (v = r[t]) || void 0 === v ? void 0 : v.type) ? I : E
                                })
                            })), A.products.updateState({
                                marginSymbol: {
                                    rawSymbols: t,
                                    symbolsMap: e
                                }
                            })
                        }
                    }), [u, t, S, h, T])
                },
                b = function() {
                    var e = (0, l.cA)(),
                        t = e.rawSymbols,
                        r = e.symbolsMap,
                        o = (0, a.wA)(),
                        s = (0, p.h_5)().isCM2_0,
                        u = (0, p.DFo)().isPmAccount,
                        c = (0, f.Qh)(m.Gr.CROSS),
                        v = (0, f.Qh)(m.Gr.ISOLATED);
                    (0, d.useEffect)((function() {
                        o.margin.queryMaxComplianceRadio()
                    }), []), (0, d.useEffect)((function() {
                        if (!s && !u && t && 0 !== t.length) {
                            var e = {};
                            Object.keys(r).map((function(t) {
                                var o, a, s, u, l, d, p, m, g = (0, f.iM)(r[t].crossRatio, c),
                                    y = (0, f.iM)(r[t].isolatedRatio, v);
                                e[t] = (0, i._)((0, n._)({}, r[t]), {
                                    crossRatio: g,
                                    isolatedRatio: y,
                                    marginRatio: "BOTH" === (null === (o = r[t]) || void 0 === o ? void 0 : o.type) ? Math.max(Number(null === (a = null === g || void 0 === g ? void 0 : g.split("x")) || void 0 === a ? void 0 : a[0]), Number(null === (s = null === y || void 0 === y ? void 0 : y.split("x")) || void 0 === s ? void 0 : s[0])) + "x" : "ISOLATED" === (null === (u = r[t]) || void 0 === u ? void 0 : u.type) ? y : g,
                                    defaultRatio: "BOTH" === (null === (l = r[t]) || void 0 === l ? void 0 : l.type) ? Math.max(Number(null === (d = null === g || void 0 === g ? void 0 : g.split("x")) || void 0 === d ? void 0 : d[0]), Number(null === (p = null === y || void 0 === y ? void 0 : y.split("x")) || void 0 === p ? void 0 : p[0])) + "x" : "ISOLATED" === (null === (m = r[t]) || void 0 === m ? void 0 : m.type) ? y : g
                                })
                            })), o.products.updateState({
                                marginSymbol: {
                                    rawSymbols: t,
                                    symbolsMap: e
                                }
                            })
                        }
                    }), [t, c, v])
                }
        },
        u5kV: (e, t, r) => {
            "use strict";
            r.d(t, {
                r: () => o
            });
            var n = r("DTvD"),
                i = r("MD8j"),
                o = function() {
                    var e = (0, i.wA)();
                    (0, n.useEffect)((function() {
                        e.exchangeInfo.fetchExchangeInfos()
                    }), [e])
                }
        },
        "29ZD": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r("S+0I"),
                i = r("mguP"),
                o = r("jbFV"),
                a = r.n(o),
                s = r("DTvD"),
                u = r("MD8j"),
                c = r("Qhol"),
                l = r("MiNH"),
                d = function() {
                    var e = (0, i._)((0, c.sL)(), 1)[0],
                        t = (0, c.nHk)(),
                        r = (0, u.wA)();
                    (0, s.useEffect)((function() {
                        function i() {
                            return (i = (0, n._)(a().mark((function t() {
                                var n;
                                return a().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, (0, l.lm)(e);
                                        case 2:
                                            (null === (n = t.sent) || void 0 === n ? void 0 : n.success) && r.products.updateCommission((null === n || void 0 === n ? void 0 : n.data) || {});
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))).apply(this, arguments)
                        }
                        t && e && function() {
                            i.apply(this, arguments)
                        }()
                    }), [e, t])
                }
        },
        Pn24: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => p
            });
            var n = r("S+0I"),
                i = r("mguP"),
                o = r("jbFV"),
                a = r.n(o),
                s = r("DTvD"),
                u = r("MD8j"),
                c = r("8zyX"),
                l = r("Qhol"),
                d = r("E4Qg"),
                p = function() {
                    var e = (0, l.nHk)(),
                        t = (0, u.wA)(),
                        r = (0, i._)((0, l.sL)(), 1)[0],
                        o = (0, l.d3A)(r),
                        p = (0, d.M)();
                    (0, s.useEffect)((function() {
                        var r = function() {
                            var e = (0, n._)(a().mark((function e() {
                                var r, n, i, o;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, c.S6)();
                                        case 2:
                                            r = e.sent, n = r.success, i = r.data, n && t.pageStore.updateGridRunning((null === i || void 0 === i ? void 0 : i.openGrids) && (null === i || void 0 === i || null === (o = i.openGrids) || void 0 === o ? void 0 : o.length) > 0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        p || e && o && r()
                    }), [o, e])
                }
        },
        "2m9I": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => S
            });
            var n = r("DTvD"),
                i = r("Rhdc"),
                o = r("Xz3K"),
                a = r("S+0I"),
                s = r("mguP"),
                u = r("jbFV"),
                c = r.n(u),
                l = r("mXdx"),
                d = r("kU6N"),
                p = r("Vhyo"),
                f = r("cL68"),
                m = r("OCZr"),
                v = r("Qhol"),
                g = r("Rlgd"),
                y = r("rit8"),
                T = r("/4Sa"),
                _ = r("wtFP"),
                A = r("Vc2Y"),
                b = r("ZGYs"),
                S = function() {
                    var e = (0, v.QsY)().isDesktop,
                        t = (0, v.nHk)(),
                        r = function() {
                            var e = (0, s._)((0, v.sL)(), 1)[0],
                                t = (0, f.ok)().getI18n,
                                r = (0, s._)((0, v.Grl)(), 1)[0],
                                u = (0, y.IT)(r).preOrders,
                                _ = (0, T.Q)(r).delOpenOrders,
                                A = (0, g.hy)(u, !1, e),
                                b = (0, n.useRef)({
                                    close: function() {
                                        return null
                                    },
                                    confirm: function() {
                                        return null
                                    }
                                }),
                                S = (0, n.useCallback)(function() {
                                    var e = (0, a._)(c().mark((function e(t) {
                                        var r, n;
                                        return c().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    r = [], n = [], A.forEach((function(e) {
                                                        e && t(e) && (r.push(e.symbol), n.push(e.orderId))
                                                    })), r.length && n.length && _({
                                                        symbols: r,
                                                        orderIds: n
                                                    });
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [A, _]),
                                h = function(e) {
                                    var t = e.message,
                                        r = e.onOk,
                                        n = e.okText,
                                        i = e.cancelText,
                                        o = (0, d.aF)({
                                            content: (0, l.jsx)(m.A, {
                                                message: t,
                                                onOk: function() {
                                                    null === r || void 0 === r || r(), o()
                                                },
                                                onCancel: function() {
                                                    return o()
                                                },
                                                okText: (0, l.jsx)(p.A, {
                                                    "data-testid": "confirmButton",
                                                    children: n
                                                }),
                                                cancelText: i
                                            }),
                                            sx: {
                                                bg: "commonDialog.bg",
                                                color: "t.primary"
                                            }
                                        }).close;
                                    b.current.close = o, b.current.confirm = function() {
                                        null === r || void 0 === r || r(), o()
                                    }
                                };
                            (0, n.useEffect)((function() {
                                return (0, i.r)((function(e) {
                                    var t;
                                    if (null === b || void 0 === b || null === (t = b.current) || void 0 === t ? void 0 : t.close) switch (e) {
                                        case o.mC.ORDERCONFIRM_CONTINUE:
                                            var r;
                                            null === b || void 0 === b || null === (r = b.current) || void 0 === r || r.confirm();
                                            break;
                                        case o.mC.ORDERCONFIRM_CANCEL:
                                            var n;
                                            null === b || void 0 === b || null === (n = b.current) || void 0 === n || n.close()
                                    }
                                }))
                            }), []);
                            var x = (0, n.useCallback)(function() {
                                    var e = (0, a._)(c().mark((function e(r, n) {
                                        return c().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    n ? h({
                                                        message: n,
                                                        onOk: function() {
                                                            return S(r)
                                                        },
                                                        cancelText: t("dialog-cancel", {
                                                            defaultValue: "Cancel"
                                                        }),
                                                        okText: t("dialog-confirm", {
                                                            defaultValue: "Confirm"
                                                        })
                                                    }) : S(r);
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t, r) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [S, t]),
                                E = function() {
                                    var e;
                                    return "input" === (null === (e = document.activeElement) || void 0 === e ? void 0 : e.tagName.toLowerCase())
                                },
                                I = (0, n.useCallback)((function(e) {
                                    if (!E()) {
                                        var t = (e.length && e[0]).orderId;
                                        x((function(e) {
                                            var r = e.orderId;
                                            return t === r
                                        }))
                                    }
                                }), [x]),
                                R = (0, n.useCallback)((function() {
                                    E() || x((function() {
                                        return !0
                                    }), t("actionAllMsg", {
                                        defaultValue: "Are you sure you want to cancel all?"
                                    }))
                                }), [x]);
                            return {
                                openOrders: A,
                                cancelLastOrder: I,
                                cancelAllOrder: R
                            }
                        }(),
                        u = r.openOrders,
                        S = r.cancelLastOrder,
                        h = r.cancelAllOrder,
                        x = e;
                    (0, i.m)({
                        type: "SPOT",
                        enable: x,
                        isLogin: !!t,
                        track: _.u4,
                        klineEnabled: !0
                    }), (0, n.useEffect)((function() {
                        return (0, i.r)((function(e) {
                            switch (e) {
                                case o.mC.TRADING_CANCEL:
                                    u.length > 0 && S(u);
                                    break;
                                case o.mC.TRADING_CANCEL_ALL:
                                    u.length > 0 && h();
                                    break;
                                case o.mC.OPEN_SHORTCUTS:
                                    A.R.emit(A.q.OPEN_SETTING_MODAL, b.Z.SHORTCUTS)
                            }
                        }))
                    }), [u])
                }
        },
        "7o5y": (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => d
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("Ov3/"),
                a = r("gz7j"),
                s = r("eWL+"),
                u = r("bQ69"),
                c = r("nxXE"),
                l = "BTC_USDT",
                d = function() {
                    var e = (0, n._)((0, a.s)(), 2),
                        t = e[0],
                        r = (0, n._)(e[1], 2),
                        d = r[0],
                        p = void 0 === d ? "" : d,
                        f = r[1],
                        m = void 0 === f ? "" : f,
                        v = (0, n._)((0, o.A)("trd-store-symbol", l), 2),
                        g = v[0],
                        y = v[1],
                        T = (0, c.o)(),
                        _ = (0, s.hF)(),
                        A = (0, s.pu)();
                    (0, i.useEffect)((function() {
                        var e;
                        if (!((null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.href.indexOf("multipleChart")) > -1) && !t) {
                            var r = (0, u.L2)().split("/");
                            T({
                                stateSymbol: g,
                                resPathList: "trade" === r[r.length - 1] ? ["trade/".concat(g)] : [g]
                            })
                        }
                    }), []), (0, i.useEffect)((function() {
                        p && m && y("".concat(p, "_").concat(m))
                    }), [p, m]), (0, i.useEffect)((function() {
                        t && !1 === A && (_["".concat(p).concat(m)] || T({
                            stateSymbol: l,
                            resPathList: [l]
                        }))
                    }), [t, p, m, A])
                }
        },
        DB4s: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => s
            });
            var n = r("mguP"),
                i = r("Qhol"),
                o = r("bhWp"),
                a = r("bQ69"),
                s = function(e, t) {
                    var r = (0, n._)((0, i.sL)(), 1)[0],
                        s = t || r,
                        u = (0, n._)((0, i.Grl)(), 1)[0],
                        c = e || u,
                        l = ((0, o.Q)()[s] || {}).created,
                        d = (0, i.Pyz)().isExistMarginAccount;
                    return {
                        isExistCrossAccount: d,
                        isExistIsolatedAccount: l,
                        isExistMarginAccount: c === a.Gr.CROSS ? d : l
                    }
                }
        },
        bhWp: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => o
            });
            var n = r("MD8j"),
                i = r("/jvT"),
                o = function() {
                    return (0, n.d4)(i.makeIsolatedAccount)
                }
        },
        cshA: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => f,
                V: () => m
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                o = r("mguP"),
                a = r("DTvD"),
                s = r("MD8j"),
                u = r("/jvT"),
                c = r("OKXq"),
                l = r("ozYv"),
                d = r("bQ69"),
                p = r("Qhol"),
                f = function(e) {
                    var t = (0, o._)((0, p.sL)(), 1)[0],
                        r = (0, s.d4)(c.makeAssets),
                        f = (0, o._)((0, p.Grl)(), 1)[0],
                        m = e || f,
                        v = (0, s.d4)(u.makeUserAssets),
                        g = (0, s.d4)(u.makeMarginAllAssets),
                        y = (0, s.d4)(u.makeMarginInterestRate),
                        T = (0, s.d4)(u.makeIsolatedInterestRate),
                        _ = (0, s.d4)(u.makeIsolatedUserAssets)[t] || {},
                        A = m === d.Gr.CROSS ? y : T,
                        b = m === d.Gr.CROSS ? v : _;
                    return (0, a.useMemo)((function() {
                        var e = (0, l.G)(g, "assetName"),
                            t = Object.keys(b).reduce((function(t, o) {
                                var a = r[o] || {
                                        free: "0.00000000",
                                        logoUrl: "",
                                        assetName: ""
                                    },
                                    s = a.free,
                                    u = a.logoUrl,
                                    c = a.assetName;
                                return t[o] = (0, i._)((0, n._)({}, e[o], b[o]), {
                                    assetName: c,
                                    logoUrl: u,
                                    maxTransferAmount: "".concat(s),
                                    interestRate: A[o]
                                }), t
                            }), {});
                        return {
                            rawAssets: Object.keys(t).map((function(e) {
                                return t[e]
                            })),
                            userAssets: t
                        }
                    }), [g, A, b, r])
                },
                m = function() {
                    var e = (0, s.d4)(c.makeAssets),
                        t = (0, s.d4)(u.makeMarginAllAssets),
                        r = (0, s.d4)(u.makeIsolatedInterestRate),
                        o = (0, s.d4)(u.makeIsolatedUserAssets) || {},
                        d = r;
                    return (0, a.useMemo)((function() {
                        var r = (0, l.G)(t, "assetName");
                        return {
                            userIsolatedAssets: Object.keys(o).reduce((function(t, a) {
                                return t[a] = Object.keys(o[a]).reduce((function(t, s) {
                                    var u = e[s] || {
                                            free: "0.00000000",
                                            logoUrl: "",
                                            assetName: ""
                                        },
                                        c = u.free,
                                        l = u.logoUrl,
                                        p = u.assetName;
                                    return t[s] = (0, i._)((0, n._)({}, r[s], o[a][s]), {
                                        assetName: p,
                                        logoUrl: l,
                                        maxTransferAmount: "".concat(c),
                                        interestRate: d[s]
                                    }), t
                                }), {}), t
                            }), {})
                        }
                    }), [t, d, o, e])
                }
        },
        "gy+1": (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => y,
                Z: () => _
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r("8lEz"),
                c = r("eAFj"),
                l = r("zxgP"),
                d = r("Gz4J"),
                p = r("LtgJ"),
                f = r("H8jA"),
                m = r("BkSf"),
                v = r("6A/j"),
                g = r("Qhol"),
                y = (0, c.A)((function(e) {
                    return {
                        isNeedSigned: !1,
                        setIsNeedSigned: function(t) {
                            return e((function() {
                                return {
                                    isNeedSigned: t
                                }
                            }))
                        },
                        showDialog: !1,
                        setShowDialog: function(t) {
                            return e((function() {
                                return {
                                    showDialog: t
                                }
                            }))
                        }
                    }
                })),
                T = function(e) {
                    var t = e.onConfirm,
                        r = e.onCancel,
                        n = e.isMobile,
                        i = (0, s.useState)(!1),
                        o = i[0],
                        u = i[1],
                        c = (0, g.ok2)().getI18n,
                        p = (0, s.useCallback)((function(e) {
                            u(e)
                        }), [u]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            style: {
                                textAlign: "left",
                                fontSize: "14px",
                                lineHeight: "22px"
                            },
                            children: [(0, a.jsx)("div", {
                                children: c("trd-nccd-c-1")
                            }), (0, a.jsxs)("div", {
                                style: {
                                    marginTop: "4px"
                                },
                                children: ["\u2022 ", c("trd-nccd-c-2")]
                            }), (0, a.jsxs)("div", {
                                style: {
                                    marginBottom: "4px"
                                },
                                children: ["\u2022 ", c("trd-nccd-c-3")]
                            }), (0, a.jsxs)("div", {
                                style: {
                                    marginBottom: "12px"
                                },
                                children: ["\u2022 ", c("trd-nccd-c-5")]
                            }), (0, a.jsx)(l.A, {
                                checked: o,
                                onChange: function(e, t) {
                                    return p(t)
                                },
                                sz: "md",
                                children: c("trd-nccd-c-4")
                            })]
                        }), (0, a.jsxs)("div", {
                            style: n ? {
                                display: "flex",
                                gap: "8px",
                                marginTop: "8px"
                            } : {
                                marginTop: "16px"
                            },
                            children: [(0, a.jsx)(d.A, {
                                style: n ? {
                                    flex: 1
                                } : {
                                    width: "100%"
                                },
                                onClick: t,
                                children: c("trd-dialog-confirm"),
                                disabled: !o
                            }), (0, a.jsx)(d.A, {
                                style: n ? {
                                    flex: 1
                                } : {
                                    width: "100%",
                                    marginTop: "8px"
                                },
                                onClick: r,
                                variant: "secondary",
                                children: c("trd-dialog-cancel")
                            })]
                        })]
                    })
                },
                _ = function() {
                    var e = (0, g.nHk)(),
                        t = (0, s.useState)({}),
                        r = t[0],
                        i = t[1],
                        c = (0, s.useState)(),
                        l = c[0],
                        d = c[1],
                        _ = y((function(e) {
                            return e.setIsNeedSigned
                        })),
                        A = y((function(e) {
                            return e.showDialog
                        })),
                        b = y((function(e) {
                            return e.setShowDialog
                        })),
                        S = function(e) {
                            var t = (0, g.ok2)().getI18n,
                                r = (0, g.QsY)().isMobile,
                                i = (0, p.Z)(),
                                u = i.openModal,
                                c = i.closeModal,
                                l = i.openDrawer,
                                d = i.closeDrawer,
                                _ = y((function(e) {
                                    return e.setIsNeedSigned
                                })),
                                A = y((function(e) {
                                    return e.setShowDialog
                                })),
                                b = (0, s.useCallback)(function() {
                                    var t = (0, n._)(o().mark((function t(r) {
                                        var n;
                                        return o().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, (0, v.GV)("MARGIN_AU_NCCP");
                                                case 3:
                                                    (null === (n = t.sent) || void 0 === n ? void 0 : n.success) && (_(!1), e(!0), r()), t.next = 9;
                                                    break;
                                                case 7:
                                                    t.prev = 7, t.t0 = t.catch(0);
                                                case 9:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 7]
                                        ])
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }(), []);
                            return (0, s.useCallback)((function() {
                                var e = function() {
                                    b(r ? d : c)
                                };
                                A(!1), r ? l({
                                    direction: "bottom",
                                    content: (0, a.jsxs)("div", {
                                        style: {
                                            textAlign: "center",
                                            padding: "16px"
                                        },
                                        children: [(0, a.jsx)(m.A, {
                                            className: "w-[80px] h-[80px]",
                                            style: {
                                                marginBottom: "8px"
                                            }
                                        }), (0, a.jsx)(T, {
                                            onConfirm: e,
                                            onCancel: d,
                                            isMobile: !0
                                        })]
                                    })
                                }) : u({
                                    maskClose: !1,
                                    content: (0, a.jsx)(f.A, {
                                        icon: (0, a.jsx)(m.A, {
                                            className: "w-[80px] h-[80px]"
                                        }),
                                        actions: (0, a.jsx)(T, {
                                            onConfirm: e,
                                            onCancel: c
                                        })
                                    }),
                                    className: "z-[1500]"
                                })
                            }), [t, r, b])
                        }(d),
                        h = (0, s.useMemo)((function() {
                            if (r.country) return "AU" === r.country && (["LOW", "MEDIUM"].includes(r.riskRateLevel) || ["HIGH"].includes(r.riskRateLevel) && "PASS" === r.eddStatus.toUpperCase() || !r.riskRateLevel || "" === r.riskRateLevel)
                        }), [r]);
                    (0, s.useEffect)((function() {
                        r.loaded && void 0 !== l && h && !1 === l && (_(!0), b(!0))
                    }), [h, l, r]), (0, s.useEffect)((function() {
                        A && S()
                    }), [A]), (0, s.useEffect)((function() {
                        function t() {
                            return t = (0, n._)(o().mark((function e() {
                                var t, r, n;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, (0, u.N)();
                                        case 3:
                                            (null === (t = e.sent) || void 0 === t ? void 0 : t.success) && (null === t || void 0 === t ? void 0 : t.data) ? i({
                                                country: null === (r = t.data) || void 0 === r || null === (n = r.fillInfo) || void 0 === n ? void 0 : n.residenceCountry,
                                                riskRateLevel: t.data.riskRateLevel,
                                                eddStatus: t.data.eddStatus,
                                                loaded: !0
                                            }): i({
                                                loaded: !0
                                            }), e.next = 11;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), i({
                                                loaded: !0
                                            }), console.error("kycCurrentStatus error", e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            }))), t.apply(this, arguments)
                        }
                        e && function() {
                            t.apply(this, arguments)
                        }()
                    }), [e]), (0, s.useEffect)((function() {
                        function t() {
                            return (t = (0, n._)(o().mark((function e() {
                                var t;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, v.vY)();
                                        case 2:
                                            t = e.sent, d(!!t && !!t.MARGIN_AU_NCCP);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        e && function() {
                            t.apply(this, arguments)
                        }()
                    }), [e])
                }
        },
        p4tc: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => o
            });
            var n = r("MD8j"),
                i = r("/jvT"),
                o = function() {
                    return (0, n.d4)(i.makeMarginCoeff)
                }
        },
        "9mKD": (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => A,
                r: () => b
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                o = r.n(i),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r("BiCW"),
                c = r("eAFj"),
                l = r("2IQ4"),
                d = r("MD8j"),
                p = r("sXI5"),
                f = r("Qhol"),
                m = r("c2J1"),
                v = r("6A/j"),
                g = r("/jvT"),
                y = r("eQl9"),
                T = r("R6t6"),
                _ = (0, u.A)((function() {
                    return Promise.all([r.e(9431), r.e(3397)]).then(r.bind(r, "7Gs7"))
                }), {
                    webpack: function() {
                        return ["7Gs7"]
                    }
                }),
                A = (0, c.A)((function(e) {
                    return {
                        isShowDialog: "hide",
                        setIsShowDialog: function(t) {
                            return e((function() {
                                return {
                                    isShowDialog: t
                                }
                            }))
                        },
                        isSigned: !1,
                        setIsSigned: function(t) {
                            return e((function() {
                                return {
                                    isSigned: t
                                }
                            }))
                        },
                        quiz_pass: !1,
                        setQuizPass: function(t) {
                            return e((function() {
                                return {
                                    quiz_pass: t
                                }
                            }))
                        },
                        term_pass: !1,
                        setTermPass: function(t) {
                            return e((function() {
                                return {
                                    term_pass: t
                                }
                            }))
                        },
                        necessary: !0,
                        setNecessary: function(t) {
                            return e((function() {
                                return {
                                    necessary: t
                                }
                            }))
                        }
                    }
                })),
                b = function() {
                    var e = (0, d.d4)(g.makeMarginAccount),
                        t = null === e || void 0 === e ? void 0 : e.accountType,
                        r = (0, m.nH)(),
                        i = (0, f.DPo)().isLight,
                        u = (0, f.rJh)(),
                        c = A((function(e) {
                            return e.isShowDialog
                        })),
                        b = A((function(e) {
                            return e.setIsShowDialog
                        })),
                        S = A((function(e) {
                            return e.setIsSigned
                        })),
                        h = (0, y.C)(),
                        x = A((function(e) {
                            return e.term_pass
                        })),
                        E = A((function(e) {
                            return e.setTermPass
                        })),
                        I = (A((function(e) {
                            return e.necessary
                        })), A((function(e) {
                            return e.setNecessary
                        }))),
                        R = A((function(e) {
                            return e.quiz_pass
                        })),
                        O = A((function(e) {
                            return e.setQuizPass
                        })),
                        C = (0, f.ok2)().getI18n,
                        N = (0, s.useCallback)((function() {
                            p.Ay.close(), b("hide")
                        }), [b]),
                        L = (0, s.useCallback)((function() {
                            N(), S(!0)
                        }), [N, S]),
                        P = r || "force-open" === c,
                        k = (0, s.useCallback)((function() {
                            N(), h()
                        }), [N, h]);
                    (0, s.useEffect)((function() {
                        b("show")
                    }), []), (0, s.useEffect)((function() {
                        function e() {
                            return e = (0, n._)(o().mark((function e() {
                                var n, s, d, f, m, g, y, A, h, P, M;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("hide" !== c) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if ("undefined" !== "".concat(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return e.next = 6, (0, v.tM)();
                                        case 6:
                                            if (n = e.sent.data, s = n.pass, d = n.quizPass, f = void 0 !== d && d, m = n.termPass, g = void 0 !== m && m, y = n.quizSkip, A = void 0 !== y && y, h = n.country, P = n.necessary, S((s || A || f) && g), O(f), E(g), I("required" === P), "force-open" === c) {
                                                e.next = 15;
                                                break
                                            }
                                            return b("hide"), e.abrupt("return");
                                        case 15:
                                            M = R || !r, x || !R && !A ? p.Ay.show({
                                                isLight: i,
                                                contentSx: {
                                                    padding: 0,
                                                    maxWidth: "720px"
                                                },
                                                containerSx: {
                                                    zIndex: 1400
                                                },
                                                onCloseIconClick: N,
                                                onMaskClick: N,
                                                children: (0, a.jsx)(l.A, {
                                                    sx: {
                                                        height: ["100vh", "auto"],
                                                        width: ["100%", "720px"]
                                                    },
                                                    children: (0, a.jsx)(_, {
                                                        closeDialog: N,
                                                        review: M,
                                                        onSuccess: L,
                                                        isLight: i,
                                                        disableMarginTur: u,
                                                        country: h,
                                                        openMarginTutorial: k,
                                                        necessary: P,
                                                        term_pass: x
                                                    })
                                                })
                                            }) : (0, T.y)({
                                                isLight: i,
                                                getI18n: C,
                                                submitTerm: function() {
                                                    E(!0)
                                                }
                                            });
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), e.apply(this, arguments)
                        }
                        P && function() {
                            e.apply(this, arguments)
                        }()
                    }), [P, c, r, b, u, t])
                }
        },
        Impr: (e, t, r) => {
            "use strict";
            r.d(t, {
                GY: () => p,
                cA: () => l,
                tD: () => d
            });
            var n = r("MD8j"),
                i = r("Qhol"),
                o = r("hAzz"),
                a = r("bQ69"),
                s = r("cshA"),
                u = r("4hgs"),
                c = r("3GNB"),
                l = function() {
                    return (0, n.d4)((function(e) {
                        return e.products.marginSymbol
                    }))
                },
                d = function(e) {
                    var t = e.symbol,
                        r = e.base,
                        n = e.quote,
                        u = e.tradeType,
                        c = e.side,
                        d = l().symbolsMap[t] || {},
                        p = d.crossDelistTime,
                        f = d.crossStatus,
                        m = d.isolatedStatus,
                        v = d.delistTime,
                        g = (0, i.stA)().isAuto,
                        y = (0, i.L1A)().isAuto,
                        T = (0, s.T)().userAssets,
                        _ = T[r] || {},
                        A = T[n] || {},
                        b = !!p && "PREPARE_DELIST" === f && Date.now() < +p,
                        S = _ && _.delistTime && "PREPARE_DELIST" === _.status && Date.now() < +_.delistTime,
                        h = A && A.delistTime && "PREPARE_DELIST" === A.status && Date.now() < +A.delistTime,
                        x = !!v && "PREPARE_DELIST" === m && Date.now() < +v,
                        E = (0, o.hx)(u) && y && b && S,
                        I = (0, o.hx)(u) && y && b && h,
                        R = (0, o.ed)(u) && g && x;
                    return {
                        disableSpotBalance: (0, o.ed)(u) ? R : c === a.Vl.BUY ? I : E,
                        showPreDelist: (0, o.ed)(u) ? R : E || I,
                        showCrossBasePreDelist: E,
                        isCrossBasePreDelist: S
                    }
                },
                p = function(e) {
                    var t = e.symbol,
                        r = e.base,
                        n = e.quote,
                        i = e.tradeType,
                        a = l().symbolsMap[t] || {},
                        s = a.crossDelistTime,
                        d = a.delistTime,
                        p = (0, u.useQuery)("margin-prepare-swap", (function() {
                            return (0, c.WP)()
                        }), {
                            refetchOnMount: !1
                        }),
                        f = p.data,
                        m = (p.refetch, p.isLoading),
                        v = f || {},
                        g = v.swapAssets,
                        y = void 0 === g ? [] : g,
                        T = v.swapSymbols,
                        _ = void 0 === T ? [] : T;
                    return m ? {
                        showCrossPrepareSwap: !1,
                        showIosPrepareSwap: !1,
                        showPrepareSwap: !1,
                        time: 99999999999,
                        isLoading: !0
                    } : (0, o.hx)(i) && y.includes(r) && s && Date.now() < +s ? {
                        time: s,
                        showPrepareSwap: !0,
                        baseSwap: !0,
                        quoteSwap: y.includes(n),
                        isLoading: !1
                    } : (0, o.hx)(i) && y.includes(n) && s && Date.now() < +s ? {
                        time: s,
                        showPrepareSwap: !0,
                        baseSwap: y.includes(r),
                        quoteSwap: !0,
                        isLoading: !1
                    } : (0, o.ed)(i) && _.includes(t) && d ? {
                        time: d,
                        showPrepareSwap: !0,
                        baseSwap: !0,
                        isLoading: !1
                    } : {
                        showCrossPrepareSwap: !1,
                        showIosPrepareSwap: !1,
                        showPrepareSwap: !1,
                        time: 99999999999,
                        isLoading: !1
                    }
                }
        },
        "BZR+": (e, t, r) => {
            "use strict";
            r.d(t, {
                AV: () => c,
                Qh: () => u,
                iM: () => l,
                u8: () => d
            });
            var n = r("mguP"),
                i = r("MD8j"),
                o = r("Qhol"),
                a = r("bQ69"),
                s = r("Ykh1"),
                u = function(e) {
                    var t = (0, i.d4)((function(e) {
                            return e.margin.maxComplianceRadio
                        })),
                        r = (0, n._)((0, o.Grl)(), 1)[0];
                    return (e || r) === a.Gr.ISOLATED ? (null === t || void 0 === t ? void 0 : t.isolated) < 1 ? 999 : (null === t || void 0 === t ? void 0 : t.isolated) || 999 : (null === t || void 0 === t ? void 0 : t.cross) < 1 ? 999 : (null === t || void 0 === t ? void 0 : t.cross) || 999
                },
                c = function() {
                    var e = u(a.Gr.CROSS),
                        t = (0, s.N8)().rawCrossMarginBar;
                    return Number(e) < 3 || Number(e) <= 4 && Number("".concat(t).split("x")[0]) <= e
                },
                l = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 999,
                        n = r < 0 ? 999 : r;
                    return "".concat(Math.min(Number(null === (e = null === t || void 0 === t ? void 0 : t.split("x")) || void 0 === e ? void 0 : e[0]), n), "x")
                },
                d = function(e) {
                    var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 999,
                        i = n < 0 ? 999 : n;
                    return Math.min(Number(null === (r = null === (t = "".concat(e)) || void 0 === t ? void 0 : t.split("x")) || void 0 === r ? void 0 : r[0]), i)
                }
        },
        qH9a: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => y
            });
            var n = r("hrAD"),
                i = r("mguP"),
                o = r("DTvD"),
                a = r("tM9B"),
                s = r("vWh5"),
                u = r("bQ69"),
                c = r("ozYv"),
                l = r("Qhol"),
                d = r("hAzz"),
                p = r("DB4s"),
                f = r("ttBN"),
                m = r("+LY0"),
                v = {
                    USDTUSDT: "1.00000000",
                    USDCUSDT: "1.00000000",
                    BUSDUSDT: "1.00000000",
                    BTCBTC: "1.00000000"
                },
                g = [{
                    symbol: "BTCUSDT",
                    rSymbol: "USDTBTC"
                }, {
                    symbol: "BTCUSDC",
                    rSymbol: "USDCBTC"
                }, {
                    symbol: "BTCBUSD",
                    rSymbol: "BUSDBTC"
                }, {
                    symbol: "BTCEUR",
                    rSymbol: "EURBTC"
                }];
            var y = function() {
                var e = (0, l.nHk)(),
                    t = (0, i._)((0, l.Grl)(), 1)[0],
                    r = (0, o.useCallback)((function(e) {
                        f.$.dispatch(e)
                    }), [f.$]),
                    y = (0, o.useCallback)((0, d.Oo)((function() {
                        (0, s.z6)().then((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = function(e) {
                                    return g.forEach((function(t) {
                                        var r = t.symbol,
                                            n = t.rSymbol;
                                        "undefined" !== typeof e[r] && (e[n] = (0, a.k3)(1, e[r]).toFixed(20))
                                    })), e
                                }((0, n._)({}, (0, c.G)(e, "symbol", "price"), v));
                            r(t)
                        })).catch((function() {}))
                    })), [r]),
                    T = (0, p.m)().isExistCrossAccount,
                    _ = u.Gr.CROSS === t && T || u.Gr.ISOLATED === t;
                (0, o.useEffect)((function() {
                    if (e && _) return y(), (0, m.E)((function(e) {
                        var t = {};
                        (e.exchangeRate || []).forEach((function(e) {
                            var r = e.baseAsset,
                                n = e.exchangeRateV2 / Math.pow(10, 12);
                            t["".concat(r, "BTC")] = n.toFixed(12)
                        })), r(t)
                    }))
                }), [_, y, e, r]), (0, o.useEffect)((function() {
                    if (e && _) return (0, m.g)((function(e) {
                        var t = {},
                            n = e.rates,
                            i = void 0 === n ? [] : n,
                            o = e.scale,
                            a = void 0 === o ? 6 : o;
                        (i || []).forEach((function(e) {
                            var r = e.base,
                                n = e.rate;
                            t["".concat(r, "USDT")] = (Number(n) / Math.pow(10, a)).toFixed(12)
                        })), r(t)
                    }))
                }), [_, e, r])
            }
        },
        "6COY": (e, t, r) => {
            "use strict";
            r.d(t, {
                Af: () => T
            });
            var n = r("S+0I"),
                i = r("mguP"),
                o = r("jbFV"),
                a = r.n(o),
                s = r("mXdx"),
                u = r("DTvD"),
                c = r("eAFj"),
                l = r("MD8j"),
                d = r("2IQ4"),
                p = r("zX7I"),
                f = r("sXI5"),
                m = r("qoEh"),
                v = r("c2J1"),
                g = r("Qhol"),
                y = (0, c.A)((function(e) {
                    return {
                        count: 0,
                        trigger: function() {
                            return e((function(e) {
                                return {
                                    count: e.count + 1
                                }
                            }))
                        }
                    }
                })),
                T = function() {
                    var e = (0, v.nH)(),
                        t = (0, i._)((0, g.sL)(), 1)[0],
                        r = (0, m.Fk)(t),
                        o = (0, g.ok2)().getI18n,
                        c = (0, l.d4)((function(e) {
                            var t;
                            return null === (t = e.userCenter.userInfo) || void 0 === t ? void 0 : t.signedLVTRiskAgreement
                        })) || !1,
                        T = y((function(e) {
                            return e.count
                        })),
                        _ = (0, g.DPo)().isLight;
                    (0, u.useEffect)((function() {
                        function t() {
                            return (t = (0, n._)(a().mark((function e() {
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            f.Ay.show({
                                                isLight: _,
                                                containerSx: {
                                                    width: ["298px", "384px"],
                                                    height: "auto",
                                                    margin: "auto"
                                                },
                                                sx: {
                                                    height: "auto"
                                                },
                                                contentSx: {
                                                    padding: 0,
                                                    width: ["298px", "384px"]
                                                },
                                                onCloseIconClick: f.Ay.close,
                                                onMaskClick: f.Ay.close,
                                                title: o("trd-leveraged-notice"),
                                                children: (0, s.jsxs)(d.A, {
                                                    sx: {
                                                        padding: "0 24px 24px",
                                                        textAlign: "center"
                                                    },
                                                    children: [(0, s.jsx)("div", {
                                                        style: {
                                                            paddingBottom: "24px",
                                                            textAlign: "left"
                                                        },
                                                        children: o("trd-leveraged-notice-content")
                                                    }), (0, s.jsx)(p.A, {
                                                        sz: "l",
                                                        onClick: f.Ay.close,
                                                        width: "100%",
                                                        children: o("trd-order-chat-guide-ok")
                                                    })]
                                                })
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        r && e && !c && function() {
                            t.apply(this, arguments)
                        }()
                    }), [r, e, T])
                }
        },
        nHho: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => l
            });
            var n = r("mguP"),
                i = r("DTvD"),
                o = r("MD8j"),
                a = r("Qhol"),
                s = r("DB4s"),
                u = r("bQ69"),
                c = r("hAzz");
            const l = function() {
                var e = (0, o.d4)((function(e) {
                        return e.setting.layout
                    })),
                    t = (0, o.wA)(),
                    r = (0, a.nHk)(),
                    l = (0, n._)((0, a.Grl)(), 1)[0],
                    d = function(e) {
                        return [u.Pv, u.ug, u.a0, u.iW, ""].filter((function(t) {
                            return t === e
                        })).length > 0
                    }(e),
                    p = (0, s.m)(),
                    f = p.isExistCrossAccount,
                    m = p.isExistIsolatedAccount,
                    v = r && (u.Gr.CROSS === l || !d),
                    g = r && f && (u.Gr.CROSS === l || !d),
                    y = r && m && (u.Gr.ISOLATED === l || !d);
                (0, i.useEffect)((function() {
                    if (r) return (0, u.D$)().getUserAssetsStream(u.Gr.SPOT).subscribe((function(e) {
                        t.assets.updateAssets(e.balances)
                    }))
                }), [t.assets, t.margin, r]);
                var T = (0, i.useCallback)((0, c.Oo)((function() {
                    t.margin.queryMarginAccount()
                })), [t.margin]);
                (0, i.useEffect)((function() {
                    v && T()
                }), [v, T]), (0, i.useEffect)((function() {
                    if (g) return (0, u.D$)().getUserAssetsStream(u.Gr.CROSS).subscribe((function(e) {
                        Promise.resolve().then((function() {
                            t.margin.updateAssets(e.balances)
                        }))
                    }))
                }), [g, t.margin]), (0, i.useEffect)((function() {
                    r && u.Gr.ISOLATED === l && t.margin.queryIsolatedAccount()
                }), [r, l]), (0, i.useEffect)((function() {
                    if (y) return (0, u.D$)().getUserAssetsStream(u.Gr.ISOLATED).subscribe((function(e) {
                        var r = e.symbol,
                            n = e.balances;
                        Promise.resolve().then((function() {
                            t.margin.updateIsolatedAssets(r, n)
                        }))
                    }))
                }), [y, t.margin]), (0, i.useEffect)((function() {
                    v && t.margin.queryIsUniaccount()
                }), [v])
            }
        },
        Qlla: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => i,
                X: () => n
            });
            var n = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toUpperCase().split("_");
                    return [e.join(""), e]
                },
                i = function(e) {
                    return e.startsWith("#") ? e.slice(1) : e
                }
        },
        "0cM6": (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => l
            });
            var n = r("V9K3"),
                i = r("Wy4J"),
                o = r("EvK5"),
                a = r("j7Jo"),
                s = function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        "0.00000000" === e.borrowed && "0.00000000" === e.free && "0.00000000" === e.interest && "0.00000000" === e.locked || t.push(new n._(e.asset, e.free, e.locked, e.borrowed, e.interest))
                    })), t
                },
                u = function() {
                    var e = [];
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((function(t) {
                        var r = new Array;
                        t.brackets.forEach((function(e) {
                            var t = new i.M(e.maxDebt, e.maintenanceMarginRate, e.fastNum);
                            r.push(t)
                        })), e.push(new i.P(t.assetNames, r))
                    })), e
                },
                c = function(e) {
                    var t = [];
                    return Object.keys(e).forEach((function(r) {
                        if (r.endsWith("USDT")) {
                            var n = r.replace(/USDT$/, "");
                            t.push(new o.S(n, e[r]))
                        }
                    })), t
                },
                l = function(e, t, r) {
                    var n = s(e),
                        i = c(t),
                        o = u(r),
                        l = (0, a.K)(n, i, o),
                        d = {};
                    return l.forEach((function(e) {
                        d[e.asset] = e.liquidationPrice
                    })), d
                }
        },
        "8iyE": (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => l,
                l: () => c
            });
            var n = r("tM9B"),
                i = r("hAzz"),
                o = r("J+BU"),
                a = r("CAdv"),
                s = r("ebQf"),
                u = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "FUNDING" === e.toUpperCase() ? "CARD" : "EARN" === e.toUpperCase() ? "EARN_FLEXIBLE_SAVING" : e.toUpperCase()
                },
                c = function(e) {
                    var t = e.orderType,
                        r = e.stopLimitPrice,
                        n = e.marketPrice,
                        i = e.stopType,
                        o = e.stopPrice,
                        a = e.side,
                        u = (0, s.y8)({
                            orderType: t,
                            marketPrice: n,
                            side: a,
                            curOrderState: {
                                price: {
                                    value: e.price
                                },
                                stopType: {
                                    value: i
                                },
                                stopPrice: {
                                    value: o
                                },
                                stopLimitPrice: {
                                    value: r
                                },
                                trailingDelta: {
                                    value: null === e || void 0 === e ? void 0 : e.trailingDelta
                                }
                            }
                        });
                    e.price = u
                },
                l = function(e, t) {
                    var r = e.tradeType,
                        s = e.price,
                        c = e.quantity,
                        l = e.side,
                        d = e.total,
                        p = e.balanceWallet,
                        f = e.asset;
                    if ((0, i.Vq)(r) && p && Array.isArray(p)) {
                        var m = 0,
                            v = {
                                asset: f,
                                details: []
                            };
                        return m = l === o.Vl.SELL ? c ? +c : (0, n.k3)(d, s) : c ? (0, n.lw)(c, s) : +d, t && (m = (0, n.Rd)(m, +t)), p.forEach((function(e) {
                            if ("spot" !== (null === e || void 0 === e ? void 0 : e.walletType) && +m > 0 && (null === e || void 0 === e ? void 0 : e.balance)) {
                                var t = Math.min(+(null === e || void 0 === e ? void 0 : e.balance), +m);
                                v.details.push({
                                    amount: t.toFixed(a.uW),
                                    fundSourceWalletType: u(null === e || void 0 === e ? void 0 : e.walletType)
                                })
                            }
                            m = (0, n.Rd)(m, (null === e || void 0 === e ? void 0 : e.balance) || 0)
                        })), +m <= 0 && v.details.length > 0 ? v : void 0
                    }
                }
        },
        jD6E: (e, t, r) => {
            "use strict";
            r.d(t, {
                EI: () => o,
                VP: () => a,
                y5: () => i
            });
            var n = r("tM9B"),
                i = function(e) {
                    var t = e.side,
                        r = e.type;
                    return ("BUY" !== t || "STOP_LOSS_LIMIT" !== r && "STOP_LOSS" !== r) && ("SELL" !== t || "TAKE_PROFIT_LIMIT" !== r && "TAKE_PROFIT" !== r) ? ("BUY" !== t || "TAKE_PROFIT_LIMIT" !== r && "TAKE_PROFIT" !== r) && ("SELL" !== t || "STOP_LOSS_LIMIT" !== r && "STOP_LOSS" !== r) ? "" : "<=" : ">="
                },
                o = function(e) {
                    return "TAKE_PROFIT" === e ? "type-TAKE_PROFIT_MARKET" : "type-".concat(e)
                },
                a = function(e) {
                    var t = e.price,
                        r = e.tickSizePrecision,
                        i = e.type,
                        o = e.getBaseI18n;
                    return (0, n.ZV)(0, r) === (0, n.ZV)(t, r) ? "TRAILING_STOP" === i || "TAKE_PROFIT" === i || "STOP_LOSS" === i || "market" === i.toLowerCase() ? o("trd-openOrder-type-MARKET") : "\u2014" : (0, n.ZV)(t, r)
                }
        },
        fXRy: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => o,
                b: () => a
            });
            var n = r("RaBh"),
                i = r.n(n),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return i()(String(e)).toString()
                },
                a = function(e) {
                    e.quote, e.base, e.side, e.tradeType, e.orderType, e.orderId
                }
        },
        m6e0: (e, t, r) => {
            "use strict";
            r.d(t, {
                Zu: () => c,
                lR: () => s,
                mc: () => a,
                wW: () => u
            });
            var n = r("hrAD"),
                i = r("hAzz"),
                o = "trd_orderform_placeorder_timeout",
                a = function(e, t, r) {
                    var a = (0, i.PM)({
                            id: "fetchPlaceorderStart"
                        }),
                        s = (0, i.PM)({
                            id: "fetchPlaceorderSuccess",
                            timeout: 10
                        }),
                        u = (0, i.PM)({
                            id: "fetchPlaceorderError",
                            timeout: 10
                        }),
                        c = (0, i.PM)({
                            id: "fetchPlaceorderWsUpdated",
                            timeout: 10
                        }),
                        l = i.PM.auto({
                            log: function(e) {
                                (0, e.track)((function(e) {
                                    var t = e.duration;
                                    return {
                                        type: "success",
                                        duration: (0, i.a3)(t, 300)
                                    }
                                }))
                            }
                        });
                    i._.init({
                        eventId: o,
                        scheduleId: e,
                        step: a._(i.PM.race(i.PM.all(s, c), u))._(l)
                    }), (0, i._)({
                        eventId: o,
                        scheduleId: e,
                        timeStamp: t,
                        stepId: "fetchPlaceorderStart",
                        catch: function(e) {
                            var t = e.error,
                                r = e.track;
                            r({
                                FETCH_DATA_START_TYPE: t
                            }), r({
                                type: "FETCH_DATA_START_TYPE_".concat(t)
                            })
                        },
                        log: function(e) {
                            (0, e.track)((0, n._)({
                                FETCH_DATA_START_TYPE: "SUCCESS"
                            }, r))
                        }
                    })
                },
                s = function(e) {
                    return (0, i._)({
                        eventId: o,
                        stepId: "fetchPlaceorderSuccess",
                        scheduleId: e,
                        catch: function(e) {
                            var t = e.error,
                                r = e.track;
                            r({
                                FETCH_DATA_SUCCESS_TYPE: t
                            }), r({
                                type: "FETCH_DATA_SUCCESS_TYPE_".concat(t)
                            })
                        },
                        log: function(e) {
                            (0, e.track)({
                                FETCH_DATA_SUCCESS_TYPE: "SUCCESS"
                            })
                        }
                    })
                },
                u = function(e, t) {
                    var r = JSON.stringify(t).slice(0, 1e3);
                    (0, i._)({
                        eventId: o,
                        stepId: "fetchPlaceorderError",
                        scheduleId: e,
                        catch: function(e) {
                            var t = e.error,
                                n = e.track;
                            n({
                                FETCH_DATA_ERROR_TYPE: t,
                                errorMsg: r
                            }), n({
                                type: "FETCH_DATA_ERROR_TYPE_".concat(t),
                                errorMsg: r
                            })
                        },
                        log: function(e) {
                            var t = e.track;
                            t({
                                FETCH_DATA_ERROR_TYPE: "SUCCESS",
                                errorMsg: r
                            }), t({
                                type: "FETCH_DATA_ERROR_TYPE_SUCCESS",
                                errorMsg: r
                            })
                        }
                    })
                },
                c = function(e) {
                    (0, i._)({
                        eventId: o,
                        stepId: "fetchPlaceorderWsUpdated",
                        scheduleId: e,
                        catch: function(t) {
                            var r = t.error,
                                n = t.track;
                            n({
                                WS_DATA_UPDATED_TYPE: r,
                                clientOrderId: e
                            }), n({
                                type: "WS_DATA_UPDATED_TYPE_".concat(r)
                            })
                        },
                        log: function(t) {
                            (0, t.track)({
                                WS_DATA_UPDATED_TYPE: "SUCCESS",
                                clientOrderId: e
                            })
                        }
                    })
                }
        },
        dZkl: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => i
            });
            var n = r("mguP");

            function i(e) {
                var t = e.getI18n,
                    r = e.price,
                    i = void 0 === r ? "" : r,
                    o = e.symbol,
                    a = void 0 === o ? "" : o,
                    s = e.assetName,
                    u = void 0 === s ? "" : s,
                    c = e.release_channel,
                    l = void 0 === c ? "" : c,
                    d = (0, n._)(a.split("_"), 2),
                    p = d[0],
                    f = d[1];
                return "".concat(t("trd-seo-title1", {
                    base: p,
                    quote: f,
                    price: i,
                    assetName: u,
                    defaultValue: "{{price}} | {{base}} {{quote}} | {{assetName}} to {{quote}} - Binance Spot"
                })).concat(l ? " ".concat(l) : "")
            }
        },
        cDUC: (e, t, r) => {
            "use strict";
            r.d(t, {
                Bf: () => g,
                Jg: () => T,
                Kv: () => m,
                Nb: () => v,
                Nj: () => y,
                ST: () => f,
                m_: () => d,
                x8: () => c,
                yA: () => l
            });
            var n = r("hrAD"),
                i = r("Vur3"),
                o = r("wtFP"),
                a = r("fXRy"),
                s = {
                    SPOT: "spot",
                    ISOLATED: "margin",
                    CROSS: "margin"
                },
                u = function(e) {
                    var t = e.mode,
                        r = e.orderType,
                        n = e.qtyTotalMode,
                        o = e.tradeType,
                        a = e.base,
                        u = e.quote,
                        c = e.side,
                        l = e.symbol,
                        d = i.parse(window.location.search);
                    return {
                        type: r,
                        market: n,
                        df_business: s[o],
                        symbol: l || "".concat(a, "/").concat(u),
                        mode: o,
                        placeOrderType: t,
                        side: c,
                        df_5: (null === d || void 0 === d ? void 0 : d.contentId) || ""
                    }
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "place_new_order",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tradeArea",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = (0, n._)({
                            $element_id: "place_order_triggered",
                            placeType: e,
                            source: t
                        }, u(r));
                    (null === r || void 0 === r ? void 0 : r.isPreMarket) && (i = Object.assign(i, {
                        df_13: "pre_market"
                    })), (0, o.u4)("place_order_event", i)
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "place_new_order",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tradeArea",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        s = (0, n._)({
                            $element_id: "place_order_intercepted",
                            placeType: e,
                            source: t,
                            df_type: r
                        }, u(i));
                    (a || (null === i || void 0 === i ? void 0 : i.isPreMarket)) && (s = Object.assign(s, {
                        df_13: "pre_market"
                    })), (0, o.u4)("place_order_event", s)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "place_new_order",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tradeArea",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "error_toast",
                        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                        c = (0, n._)({
                            $element_id: "place_order_failed",
                            placeType: e,
                            source: t,
                            df_status: r,
                            errorType: a
                        }, u(i));
                    s && (c = Object.assign(c, {
                        df_13: "pre_market"
                    })), (0, o.u4)("place_order_event", c)
                },
                p = function(e) {
                    return (null === e || void 0 === e ? void 0 : e.orders) && Array.isArray(e.orders) ? e.orders.map((function(e) {
                        return (0, a.B)(null === e || void 0 === e ? void 0 : e.orderId)
                    })).join(",") : (null === e || void 0 === e ? void 0 : e.orderId) ? (0, a.B)(null === e || void 0 === e ? void 0 : e.orderId) : ""
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "place_new_order",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tradeArea",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = (0, n._)({
                            $element_id: "place_order_successful",
                            placeType: e,
                            source: t,
                            df_10: p(r)
                        }, u(r));
                    (null === r || void 0 === r ? void 0 : r.isPreMarket) && (i = Object.assign(i, {
                        df_13: "pre_market"
                    })), (0, o.u4)("place_order_event", i)
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = (0, n._)({
                            $element_id: "place_order_triggered",
                            placeType: "cancel_order",
                            df_business: s[e],
                            source: "OOP"
                        }, t);
                    (0, o.u4)("place_order_event", r)
                },
                v = function(e) {
                    var t = {
                        $element_id: "place_order_triggered",
                        placeType: "cancel_all",
                        df_business: s[e],
                        source: "OOP"
                    };
                    (0, o.u4)("place_order_event", t)
                },
                g = function(e, t) {
                    var r = {
                        $element_id: "place_order_triggered",
                        placeType: "close_position",
                        df_business: s[e],
                        symbol: t,
                        source: "OOP"
                    };
                    (0, o.u4)("place_order_event", r)
                },
                y = function() {
                    var e = {
                        $element_id: "place_order_triggered",
                        placeType: "modify_order",
                        source: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            source: "OOP"
                        }).source,
                        df_business: "spot"
                    };
                    (0, o.u4)("place_order_event", e)
                },
                T = function(e) {
                    var t = e.side,
                        r = e.mode,
                        n = e.tradeType,
                        i = e.orderType,
                        o = e.qtyTotalMode,
                        a = e.base,
                        s = e.quote,
                        u = e.data,
                        c = e.isPreMarket,
                        l = function(e, t) {
                            return (null === t || void 0 === t ? void 0 : t.tpslTPLimitPrice) && (null === t || void 0 === t ? void 0 : t.tpslSLTriggerPrice) ? "normal_with_tpsl" : (null === t || void 0 === t ? void 0 : t.tpslTPLimitPrice) && !(null === t || void 0 === t ? void 0 : t.tpslSLTriggerPrice) ? "normal_with_tp" : !(null === t || void 0 === t ? void 0 : t.tpslTPLimitPrice) && (null === t || void 0 === t ? void 0 : t.tpslSLTriggerPrice) ? "normal_with_sl" : e
                        }(r, u);
                    return {
                        side: t,
                        mode: l,
                        tradeType: n,
                        orderType: i,
                        qtyTotalMode: o,
                        base: a,
                        quote: s,
                        isPreMarket: c
                    }
                }
        },
        ZG4d: () => {}
    }
]);