"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [7422], {
        sPFb: (e, n, t) => {
            t.d(n, {
                V_: () => i,
                dY: () => c,
                pu: () => u
            });
            var r = t("S+0I"),
                a = t("66mo"),
                o = t.n(a),
                s = t("VA12"),
                u = function() {
                    var e = (0, r._)(o().mark((function e(n) {
                        var t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, s.get)("/bapi/apex/v1/public/apex/marketing/token-unlock/detail?symbol=".concat(n));
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1
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
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                i = function() {
                    var e = (0, r._)(o().mark((function e(n) {
                        var t, r, a, u;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.baseAsset, r = n.range, a = void 0 === r ? "all" : r, e.prev = 2, e.next = 5, (0, s.get)("/bapi/apex/v1/public/apex/marketing/token-unlock/schedule?symbol=".concat(t, "&range=").concat(a));
                                case 5:
                                    u = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), u = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", u);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, r._)(o().mark((function e(n) {
                        var t, r, a, u, i;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.baseAsset, r = n.type, a = n.page, u = n.raws, e.prev = 2, e.next = 5, (0, s.get)("/bapi/apex/v1/public/apex/marketing/token-unlock/event?symbol=".concat(t, "&type=").concat(r, "&page=").concat(a, "&raws=").concat(u));
                                case 5:
                                    i = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), i = {
                                        success: !1
                                    };
                                case 11:
                                    return e.abrupt("return", i);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        Cw3K: (e, n, t) => {
            t.d(n, {
                B: () => a
            });
            var r = t("d12p"),
                a = {
                    QUERY_ASSET_LOGO: ["queryAssetLogo"],
                    QUERY_ALL_COINS: ["queryAllCoins"],
                    QUERY_REBALANCING_RUNNING: ["queryRebalancingRunning"],
                    QUERY_REBALANCING_HISTORY: function(e, n, t, r) {
                        return ["queryRebalancingHistory", e || "all", n || "no-startTime", t || "no-endTIme", r || "no-pageRow"]
                    },
                    QUERY_REBALANCING_HISTORY_PAGINATION: ["queryRebalancingHistoryPagination"],
                    QUERY_LAST_PRICE: ["queryLastPrice"],
                    QUERY_USER_ASSET: ["queryUserAsset"],
                    QUERY_USER_BALANCE: ["queryUserBalance"],
                    QUERY_SPOT_TICKER_MAP: ["querySpotTickerMap"],
                    QUERY_SPOT_PRODUCTS: ["querySpotProducts"],
                    QUERY_SPOT_EXCHANGE_INFO: ["queryExchangeInfo"],
                    QUERY_SPOT_EXCHANGE_INFO_V3: ["queryExchangeInfoV3"],
                    QUERY_STRATEGY_SYMBOLS: ["queryStrategySymbols"],
                    QUERY_STRATEGY_ORDER_TRADE: function(e) {
                        return ["queryStrategyOrderTrade", e]
                    },
                    QUERY_SPOT_GRID_HISTORY: ["querySpotGridHistory"],
                    QUERY_SPOT_GRID_HISTORY_V2: ["querySpotGridHistoryV2"],
                    QUERY_SPOT_GRID_RUNNING: ["querySpotGridRunning"],
                    QUERY_SPOT_GRID_DETAIL: ["spot_grid_detail"],
                    QUERY_MARGIN_CROSS_ASSET: ["queryCrossAsset"],
                    QUERY_MARGIN_CROSS_DEBT: ["queryCrossAssetDebt"],
                    QUERY_INDEX_PRICE_MAP: ["queryIndexPriceMap"],
                    QUERY_SPOT_WITHDRAW_OPERATE_RECORD: function(e) {
                        return ["queryOperateRecord", e]
                    },
                    QUERY_SPOT_DCA_DETAIL: function(e) {
                        return ["querySpotDcaDetail", e]
                    },
                    QUERY_SPOT_DAC_ORDER_ITEMS: function(e, n, t, a) {
                        return ["querySpotDcaOrderItems", e].concat((0, r._)(n ? ["round-".concat(n)] : []), (0, r._)(t ? ["page-".concat(t)] : []), (0, r._)(a ? ["rows-".concat(a)] : []))
                    },
                    QUERY_DCA_BOT_RUNNING: ["queryDCABotRunning"],
                    QUERY_DCA_BOT_HISTORY: ["queryDCABotHistory"],
                    QUERY_SPOT_BALANCE: ["querySpotBalance"],
                    QUERY_SPOT_GRID_CONFIG: ["SPOT_GRID_CONFIG"],
                    QUERY_SPOT_STRATEGY_SYMBOL_CONFIG: ["SPOT_STRATEGY_SYMBOL_CONFIG"],
                    QUERY_SPOT_ASSET_DETAIL: function(e) {
                        return ["QUERY_SPOT_ASSET_DETAIL", e]
                    },
                    QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY: function(e) {
                        return ["QUERY_BOTS_TOTAL_PNL_TREND_BY_STRATEGY", e]
                    },
                    QUERY_BOTS_TOTAL_PNL_BY_STRATEGY: function(e) {
                        return ["QUERY_BOTS_TOTAL_PNL_BY_STRATEGY", e]
                    },
                    QUERY_SPOT_STRATEGY_OPEN_ORDERS: function(e, n, t, r) {
                        return ["SPOT_STRATEGY_OPEN_ORDERS", e, n, t, Array.isArray(r) && r.length > 0 ? r.sort().join("_") : "EMPTY_USER_ID"]
                    },
                    QUERY_SPOT_GRID_STRATEGY_OPEN_ORDERS_HISTORY: function(e, n, t) {
                        return ["SPOT_GRID_STRATEGY_OPEN_ORDERS_HISTORY", e, n || "all", t]
                    },
                    QUERY_SPOT_GRID_TRAILING_RECORDS: function(e, n, t) {
                        return ["QUERY_SPOT_GRID_TRAILING_RECORDS", e, n, t]
                    },
                    QUERY_SPOT_STRATEGY_USER_COMPLIANCE_CHECK: function(e) {
                        return ["queryUserStrategyComplianceCheck", e]
                    },
                    avgPrice: ["AVG_PRICE"],
                    QUERY_SPOT_GRID_RECOMMEND_PARAMS: ["querySpotGridRecommendParams"],
                    QUERY_MARGIN_ASSET_LV: ["MARGIN_ASSET_LV"],
                    QUERY_MARGIN_ASSET_MMR: ["MARGIN_ASSET_MMR"],
                    QUERY_MARGIN_INTEREST_RATE: ["marginInterestRate"],
                    QUERY_ISOLATED_INTEREST_RATE: ["isolatedInterestRate"],
                    QUERY_ISOLATED_ACCOUNT_DETAIL: ["isolatedAccountDetail"],
                    QUERY_USER_CREDIT_STATUS: ["queryUserCreditStatus"],
                    getSpotCommissionService: function(e) {
                        return ["SPOT_COMMISSION_SERVICE", e]
                    },
                    QUERY_SPOT_PM_TAGS: ["querySpotPmTags"],
                    QUERY_SPOT_MARKET_HOT_SEARCH: ["querySpotMarketHotSearch"],
                    QUERY_MARKET_TOKEN_UNLOCK_DETAIL: function(e) {
                        return ["QUERY_MARKET_TOKEN_UNLOCK_DETAIL", e]
                    },
                    QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE: function(e) {
                        return ["QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE", e.baseAsset, e.range]
                    },
                    QUERY_MARKET_TOKEN_UNLOCK_EVENT: function(e) {
                        return ["QUERY_MARKET_TOKEN_UNLOCK_SCHEDULE", e.baseAsset, e.type, e.page, e.raws]
                    }
                }
        },
        MVhD: (e, n, t) => {
            t.d(n, {
                O: () => o,
                Q: () => a
            });
            var r = t("DTvD"),
                a = (0, r.createContext)(void 0),
                o = function() {
                    var e = (0, r.useContext)(a);
                    if (!e) throw new Error("SpotCoreProvider: Prop getSDK is not available");
                    return e
                }
        },
        ozu2: (e, n, t) => {
            t.d(n, {
                n: () => o,
                z: () => a
            });
            var r = t("DTvD"),
                a = (0, r.createContext)(null),
                o = function() {
                    return (0, r.useContext)(a)
                }
        },
        "k+tL": (e, n, t) => {
            t.d(n, {
                b: () => u
            });
            var r = t("DTvD"),
                a = t.n(r),
                o = t("MVhD"),
                s = t("ozu2"),
                u = (0, r.memo)((function(e) {
                    var n = e.getSDK,
                        t = e.isLoggedIn,
                        r = e.children;
                    return a().createElement(o.Q.Provider, {
                        value: n
                    }, a().createElement(s.z.Provider, {
                        value: t
                    }, r))
                }));
            u.displayName = "SpotCoreProvider"
        },
        chgy: (e, n, t) => {
            t.d(n, {
                A: () => N
            });
            var r = t("S+0I"),
                a = t("mguP"),
                o = t("jbFV"),
                s = t.n(o),
                u = t("mXdx"),
                i = t("DTvD"),
                c = t.n(i),
                _ = t("r2Gn"),
                l = t("NbzZ"),
                T = t("4hgs"),
                d = t("sPFb"),
                R = t("Cw3K"),
                E = {
                    version: 0,
                    updateDate: "",
                    summary: [],
                    progress: {
                        unlockedAmount: 0,
                        lockedAmount: 0,
                        untrackedAmount: 0
                    }
                },
                S = function(e) {
                    var n;
                    return (null === (n = function(e) {
                        return (0, T.useQuery)(R.B.QUERY_MARKET_TOKEN_UNLOCK_DETAIL(e), (function() {
                            return (0, d.pu)(e)
                        }), {
                            enabled: Boolean(e),
                            staleTime: 1 / 0,
                            cacheTime: 1 / 0,
                            notifyOnChangeProps: ["data"]
                        })
                    }(e).data) || void 0 === n ? void 0 : n.data) || E
                },
                p = t("k+tL"),
                m = t("BiCW"),
                A = t("Qhol"),
                b = t("px+e"),
                f = t("bQ69"),
                O = t("SB7F"),
                I = t("wtFP"),
                g = (0, m.A)((0, r._)(s().mark((function e() {
                    var n;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([t.e(4315), t.e(995), t.e(6140), t.e(734), t.e(1694), t.e(1323), t.e(4988), t.e(2716), t.e(4945), t.e(1172), t.e(3424), t.e(5890), t.e(650), t.e(6375)]).then(t.bind(t, "LgSs"));
                            case 2:
                                return n = e.sent, e.abrupt("return", n.TRS);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), {
                    webpack: function() {
                        return ["LgSs"]
                    },
                    ssr: !1
                }),
                y = (0, m.A)((0, r._)(s().mark((function e() {
                    var n;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([t.e(4315), t.e(995), t.e(6140), t.e(734), t.e(1694), t.e(1323), t.e(4988), t.e(2716), t.e(4945), t.e(1172), t.e(3424), t.e(5890), t.e(650), t.e(6375)]).then(t.bind(t, "LgSs"));
                            case 2:
                                return n = e.sent, e.abrupt("return", n.CoinInfo);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), {
                    webpack: function() {
                        return ["LgSs"]
                    },
                    ssr: !1
                }),
                U = function(e) {
                    var n = e.loading,
                        t = e.coinInfo,
                        r = void 0 === t ? {} : t,
                        o = (0, A.DPo)().theme,
                        s = (0, i.useState)(0),
                        c = s[0],
                        T = s[1],
                        d = (0, i.useState)("coin-info"),
                        R = d[0],
                        E = d[1],
                        m = (0, a._)((0, A.sL)(), 2),
                        U = m[0],
                        N = (0, a._)(m[1], 1)[0],
                        Y = (0, a._)((0, A.Grl)(), 1)[0],
                        h = function(e) {
                            var n = S(e);
                            return (0, i.useMemo)((function() {
                                return n && n.progress && n.summary && Object.keys(n.progress).length && Boolean(n.summary.length)
                            }), [n])
                        }(N),
                        C = (0, A.ok2)().getI18n,
                        v = (0, A.nHk)(),
                        D = (0, A.$X2)(),
                        P = (0, i.useMemo)((function() {
                            var e = [{
                                name: "coin-info",
                                elementId: "coinInfo",
                                tabNode: C("trd-coin-info"),
                                paneContent: (0, u.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, u.jsx)(y, {
                                        coinInfo: r || {},
                                        theme: o,
                                        getFiatPrice: D,
                                        isLoading: n,
                                        track: I.u4
                                    }), (0, u.jsx)(b.K, {
                                        style: {
                                            right: "0px",
                                            bottom: "0px"
                                        }
                                    })]
                                })
                            }];
                            return h && e.push({
                                name: "TRS",
                                elementId: "trs",
                                tabNode: C("trd-TRS-panel-title"),
                                paneContent: (0, u.jsx)(l.t, {
                                    name: "TRSWidget",
                                    children: (0, u.jsx)(g, {
                                        symbol: U,
                                        baseAsset: N
                                    })
                                })
                            }), e
                        }), [C, o, r, D, n, h, U, N]),
                        x = (0, i.useCallback)((function(e) {
                            T(e), E(P[e].name), (0, O.X)(P[e].elementId, Y)
                        }), [P, Y]),
                        L = (0, i.useMemo)((function() {
                            return -1 === P.findIndex((function(e) {
                                return e.name === R
                            })) ? 0 : c
                        }), [P, R, c]);
                    return (0, u.jsx)(p.b, {
                        getSDK: f.D5,
                        isLoggedIn: !!v,
                        children: (0, u.jsx)("div", {
                            className: "symbol-info-tabs ".concat(h ? "" : "tab-hidden"),
                            children: (0, u.jsx)(_.A, {
                                lazy: !0,
                                variant: "primary-gray",
                                size: "small",
                                fontSizeType: "4",
                                className: "h-full",
                                selectedIndex: L,
                                onChange: x,
                                children: P.map((function(e) {
                                    var n = e.name,
                                        t = e.paneContent,
                                        r = e.tabNode;
                                    return (0, u.jsx)(_.A.TabPane, {
                                        tabNode: r,
                                        children: t
                                    }, n)
                                }))
                            })
                        })
                    })
                };
            const N = c().memo(U)
        },
        IxmT: (e, n, t) => {
            t.d(n, {
                F: () => _
            });
            var r = t("4hgs"),
                a = t("wkzY"),
                o = t("XqCI");
            var s = t("T0Sc"),
                u = t("A4nT");
            const i = async (e, n) => {
                const t = await (async ({
                    symbol: e
                }) => {
                    const n = (0, o.Eg)("/bapi/apex/v1/friendly/apex/marketing/web/token-info", {
                            symbol: e
                        }),
                        {
                            data: t
                        } = await (0, a.Jt)(n);
                    return t
                })({
                    symbol: e
                });
                return t ? {
                    symbol: t.sb,
                    url: t.url,
                    alias: t.alias,
                    rank: t.rk,
                    marketCap: t.mc,
                    fullyDilutedMarketCap: t.fdmc,
                    dominance: t.dmc,
                    volumn: t.v,
                    volumnPercentMarket: t.vpm,
                    circulatingSupply: t.cs,
                    totalSupply: t.ts,
                    infiniteSupply: t.is,
                    maxSupply: t.ms,
                    issueDate: t.id,
                    issuePriceUsd: t.ipu,
                    allTimeHighPriceUsd: t.athpu,
                    allTimeHighDate: t.athd,
                    allTimeLowPriceUsd: t.atlpu,
                    allTimeLowDate: t.ald,
                    website: t.ws,
                    explorerUrls: t.eu,
                    whitePaperUrl: t.wpu,
                    description: n(t.dbk, ""),
                    projectWallets: t.pw,
                    financialReportId: t.fri,
                    xHandlerName: t.xhn,
                    xUrl: t.xu,
                    xLatestUpdateTime: t.xlut,
                    xLatestMessages: t.xlm,
                    xMsgUrl: t.fu,
                    repoHandlerName: t.rhn,
                    repoName: t.rn,
                    repoDescription: t.rd,
                    repoLatestUpdateTime: t.rut,
                    repoUrl: t.ru
                } : null
            };
            var c = t("Qhol"),
                _ = function(e) {
                    var n = e.symbol,
                        t = (0, c.Bjx)();
                    return ((e, {
                        enabled: n
                    } = {
                        enabled: !0
                    }) => {
                        const {
                            getI18n: t
                        } = (0, s.o)("", "symbol-description");
                        return (0, r.useQuery)(u.Bz.COIN_INFO(e), (() => i(e, t)), {
                            enabled: Boolean(e) && n,
                            staleTime: 3e5
                        })
                    })(((null === t || void 0 === t ? void 0 : t[n]) || {}).baseAsset)
                }
        },
        SB7F: (e, n, t) => {
            t.d(n, {
                X: () => o
            });
            var r = t("wtFP"),
                a = {
                    chart: "Klintable_Chart",
                    coinInfo: "Klintable_Info",
                    tradingData: "Klintable_TradingData",
                    tradingAnalysis: "Klintable_TraderAnalysis",
                    square: "klinetable_square",
                    trs: "Klintable_TRS"
                },
                o = function(e, n) {
                    (0, r.u4)("$WebClick", {
                        $element_id: (null === a || void 0 === a ? void 0 : a[e]) || a.chart,
                        pageName: r.$1[n],
                        df_source: r.Yx[n]
                    })
                }
        },
        cNo3: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => O
            });
            var r = t("mguP"),
                a = t("mXdx"),
                o = t("DTvD"),
                s = t.n(o),
                u = t("MD8j"),
                i = t("cvvB"),
                c = t("BiCW"),
                _ = t("lSwr"),
                l = t("Qhol"),
                T = t("VaDm"),
                d = t("bLkt"),
                R = t("hFZM"),
                E = t("I3nN"),
                S = t("IxmT"),
                p = t("chgy"),
                m = (t("9G2x"), (0, c.A)((function() {
                    return Promise.resolve().then(t.bind(t, "hFZM"))
                }), {
                    webpack: function() {
                        return ["hFZM"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                })),
                A = (0, c.A)((function() {
                    return Promise.all([t.e(6140), t.e(650), t.e(4963)]).then(t.bind(t, "ktGr"))
                }), {
                    webpack: function() {
                        return ["ktGr"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                b = (0, c.A)((function() {
                    return Promise.all([t.e(6140), t.e(2883)]).then(t.bind(t, "obVV"))
                }), {
                    webpack: function() {
                        return ["obVV"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                f = (0, c.A)((function() {
                    return Promise.all([t.e(4315), t.e(7405)]).then(t.bind(t, "rcen"))
                }), {
                    webpack: function() {
                        return ["rcen"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                });
            const O = s().memo((function() {
                var e = (0, d.ok)(),
                    n = e.getI18n,
                    t = (e.i18n.language, (0, l.ok2)().getI18n),
                    s = (0, r._)((0, l.sL)(), 2),
                    c = s[0],
                    O = (0, r._)(s[1], 2),
                    I = O[0],
                    g = O[1],
                    y = (0, u.d4)(E.makeTradeList),
                    U = (0, u.d4)(E.makeInitLoading),
                    N = (0, S.F)({
                        symbol: c
                    }),
                    Y = N.data,
                    h = void 0 === Y ? {} : Y,
                    C = N.isLoading,
                    v = (0, o.useMemo)((function() {
                        var e = [
                            [function() {
                                return n("chartTle", {
                                    defaultValue: "Chart"
                                }) || "Chart"
                            }, (0, a.jsx)(m, {
                                symbol: c,
                                namespace: _.X8,
                                useMiniTicker: !1,
                                generateToolbar: (0, R.createMainToobar)({
                                    symbol: c,
                                    headerSlot: null,
                                    isPro: !1,
                                    showFullscreenIcon: !1,
                                    showChartModeDropdown: !1,
                                    tabKeys: [i.t1.Store.Tabs.Origin, i.t1.Store.Tabs.TradingView, i.t1.Store.Tabs.Depth]
                                })
                            }, "chart")],
                            [function() {
                                return n("orderBookTle", {
                                    defaultValue: "Order Book"
                                }) || "Order Book"
                            }, (0, a.jsx)("div", {
                                className: "px-[16px] py-[8px] h-full",
                                children: (0, a.jsx)(A, {
                                    symbol: c,
                                    baseAsset: I,
                                    quoteAsset: g
                                }, "orderBook")
                            }, "orderbook")],
                            [function() {
                                return n("tradesTle", {
                                    defaultValue: "Trades"
                                }) || "Trades"
                            }, (0, a.jsx)("div", {
                                className: "px-[16px] pb-[16px] h-full",
                                children: (0, a.jsx)(b, {
                                    trades: y,
                                    symbol: c,
                                    loading: U,
                                    base: I,
                                    quote: g
                                })
                            }, "trades")]
                        ];
                        return h && e.push([function() {
                            return t("trd-coin-info", {
                                defaultValue: "Coin Info"
                            }) || ""
                        }, (0, a.jsx)(p.A, {
                            coinInfo: h,
                            loading: C
                        }, "coinInfo")]), e.push([function() {
                            return t("trd-trading-data", {
                                defaultValue: "Trading data"
                            }) || ""
                        }, (0, a.jsx)(f, {}, "tradingData")]), e
                    }), [c, I, g, y, U, h, C, n, t]);
                return (0, a.jsx)(T.x, {
                    className: "[&>.trd-table-v2>.bn-tabs>.bn-tab-list]:pl-[16px] [&>.trd-table-v2>.bn-tabs>.bn-tab-pane-list]:h-[calc(100%-42px)]",
                    area: "charts",
                    name: "charts",
                    useCalcWidth: !1,
                    panes: v,
                    css: {
                        px: 0,
                        pb: 0,
                        borderRadius: 0
                    }
                })
            }))
        },
        "9G2x": () => {}
    }
]);