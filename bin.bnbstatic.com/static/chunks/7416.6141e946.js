(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [7416, 9317], {
        WjQj: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("xqbL"),
                s = n.n(o),
                c = n("LYqd"),
                u = n("wIZF"),
                l = n("UVzS"),
                d = function(e) {
                    var t = e.path,
                        n = e.pathPrefix,
                        r = e.subDomain,
                        a = e.isRegionMode,
                        i = e.level2Domain,
                        o = e.lang;
                    try {
                        var s = "https://binance.com",
                            c = new URL(t, s),
                            u = function(e) {
                                return e.replace(/^\/+|\/+$/g, "")
                            }(n),
                            l = "/".concat(u).concat(c.pathname).replace(/\/+/g, "/"),
                            d = new URL(l, s);
                        c.searchParams.forEach((function(e, t) {
                            d.searchParams.set(t, e)
                        })), a && d.searchParams.set("hl", o || "en");
                        var p = d.pathname + d.search + c.hash;
                        return r && (p = "https://".concat(r, ".").concat(i).concat(p)), p
                    } catch (f) {
                        return console.error("Error generating href:", f), t
                    }
                },
                p = (n("kPx0"), /^[a-zA-Z][a-zA-Z\d+\-.]*?:/),
                f = function(e) {
                    return p.test(e)
                };
            var v = i().forwardRef((function(e, t) {
                var n = e.path,
                    r = e.subDomain,
                    i = e.className,
                    o = (0, u.__rest)(e, ["path", "subDomain", "className"]),
                    p = (0, l.r)().prefixCls,
                    v = (0, c.x)(),
                    m = v.pathPrefix,
                    h = v.isRegionMode,
                    g = v.level2Domain,
                    b = v.lang,
                    y = "".concat(p, "-balink"),
                    w = s()(y, i);
                if (!m) throw new Error("pathPrefix is required in Provider");
                if (f(n)) throw new Error("path should be relative URL");
                if (r && !g) throw new Error("level2Domain is required in Provider when subDomain is provided");
                var _ = {
                    role: e.role || "link"
                };
                return (0, a.createElement)("a", (0, u.__assign)((0, u.__assign)({
                    className: w,
                    href: d({
                        path: n,
                        pathPrefix: m,
                        subDomain: r,
                        isRegionMode: h,
                        level2Domain: g,
                        lang: b
                    }),
                    ref: t
                }, _), o))
            }));
            v.displayName = "BALink";
            const m = v,
                h = e => {
                    const t = (0, c.x)(),
                        {
                            path: n,
                            subDomain: i,
                            className: o,
                            ...u
                        } = e,
                        {
                            pathPrefix: l,
                            level2Domain: d
                        } = t || {};
                    return (0, a.useMemo)((() => !!l && (!/^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(n) && !(i && !d))), [d, n, l, i]) ? (0, r.jsx)(m, {
                        path: n,
                        subDomain: i,
                        className: s()("f-link", o),
                        ...u
                    }) : (0, r.jsx)("a", {
                        href: n,
                        className: s()("f-link", o),
                        ...u
                    })
                }
        },
        "v76/": (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => i,
                z: () => a
            });
            var r = n("DTvD");
            const a = (0, r.createContext)(null),
                i = () => (0, r.useContext)(a)
        },
        "4frZ": (e, t, n) => {
            "use strict";
            n.d(t, {
                kf: () => r
            });
            const r = e => {
                const t = Number(e);
                return null !== e && e !== 1 / 0 && !Number.isNaN(t)
            }
        },
        Q2gR: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => i,
                v: () => a
            });
            var r = n("DTvD");
            const a = (0, r.createContext)((() => {})),
                i = a.Provider
        },
        iCNu: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => i,
                Q: () => a
            });
            var r = n("DTvD");
            const a = (0, r.createContext)(void 0),
                i = () => {
                    const e = (0, r.useContext)(a);
                    if (!e) throw new Error("SpotCoreProvider: Prop getSDK is not available");
                    return e
                }
        },
        BMee: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => i,
                z: () => a
            });
            var r = n("DTvD");
            const a = (0, r.createContext)(null),
                i = () => (0, r.useContext)(a)
        },
        xRXw: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => a
            });
            var r = n("vpLP");
            const a = (e, {
                enabled: t = !0,
                listenUpdate: n = !0
            } = {}) => {
                const {
                    data: a
                } = (0, r.i)({
                    symbol: e,
                    key: "lastPrice"
                }, {
                    enabled: t,
                    listenUpdate: n
                });
                return a
            }
        },
        vpLP: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => i
            });
            var r = n("DTvD"),
                a = n("2h1e");
            const i = ({
                symbol: e,
                key: t
            }, {
                enabled: n = !0,
                listenUpdate: i = !0
            } = {}) => {
                const o = (0, r.useRef)(void 0),
                    s = (0, r.useRef)(void 0),
                    c = (0, r.useCallback)((n => (s.current = n ? .[e] ? .[t], (i || "undefined" === typeof o.current) && (o.current = s.current), o.current)), [e, t, i]);
                return (0, a.w)(n, c), {
                    data: i ? s.current : o.current
                }
            }
        },
        "2h1e": (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => u
            });
            var r = n("DTvD"),
                a = n("4hgs"),
                i = n("8zyX"),
                o = n("aaF1"),
                s = n("iCNu");
            const c = (({
                    queryKey: e,
                    subscribeToStreamFn: t
                }) => {
                    let n, r = !1;
                    return ({
                        getSDK: a,
                        queryClient: i
                    }) => {
                        if (r) return;
                        r = !0;
                        i.getQueryCache().subscribe((r => {
                            if (!r) return;
                            const {
                                query: o,
                                type: s
                            } = r;
                            if ("queryRemoved" === s || "removed" === s) return;
                            let c = !1;
                            if (Array.isArray(o.queryKey) ? c = o.queryKey.join("") === e.join("") : "string" === typeof o.queryKey && (c = o.queryKey === e.join("")), !c) return;
                            const u = a(),
                                l = "observerRemoved" === s;
                            n || l ? l && 0 === o.getObserversCount() && ("function" === typeof n && n(), n = void 0, i.invalidateQueries(e)) : n = t({
                                stream: u,
                                queryClient: i
                            })
                        }))
                    }
                })({
                    queryKey: o.B.QUERY_SPOT_TICKER_MAP,
                    subscribeToStreamFn: ({
                        queryClient: e,
                        stream: t
                    }) => "function" === typeof t ? .getStreamTickers ? t.getStreamTickers(1e3).subscribe((t => {
                        e.setQueryData(o.B.QUERY_SPOT_TICKER_MAP, (e => ({ ...e,
                            ...t
                        })))
                    })) : () => {}
                }),
                u = (e, t) => {
                    const n = (0, s.O)(),
                        u = (0, a.useQueryClient)(),
                        l = (0, a.useQuery)(o.B.QUERY_SPOT_TICKER_MAP, (() => (0, i.Mw)().then((e => {
                            return t = e, t ? .reduce(((e, t) => t.symbol ? (e[t.symbol] = {
                                symbol: t.symbol,
                                highPrice: Number(t.highPrice),
                                lastPrice: Number(t.lastPrice) || Number(t.prevClosePrice),
                                lowPrice: Number(t.lowPrice),
                                openPrice: Number(t.openPrice),
                                quoteVolume: Number(t.quoteVolume),
                                volume: Number(t.volume)
                            }, e) : e), {});
                            var t
                        }))), {
                            notifyOnChangeProps: ["data"],
                            staleTime: 1 / 0,
                            enabled: e,
                            select: t
                        });
                    return (0, r.useEffect)((function() {
                        e && c({
                            getSDK: n,
                            queryClient: u
                        })
                    }), [e, n, u]), l
                }
        },
        eQhr: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => s
            });
            var r = n("4hgs"),
                a = n("5nld");
            var i = n("aaF1"),
                o = n("BMee");
            const s = (e, t = {}) => {
                const n = (0, o.n)(),
                    {
                        enabled: s = !0
                    } = t,
                    c = Boolean(n) && s;
                return (0, r.useQuery)(i.B.QUERY_SPOT_STRATEGY_USER_COMPLIANCE_CHECK(e), (async () => {
                    const {
                        data: t
                    } = await (async e => {
                        let t;
                        try {
                            t = await (0, a.bE)("/bapi/accounts/v1/private/account/compliance/userComplianceCheck", e)
                        } catch (n) {
                            let e = "";
                            n instanceof Error && (e = n.message), t = {
                                success: !1,
                                message: e,
                                data: {}
                            }
                        }
                        return t
                    })(e);
                    return t
                }), { ...t || {},
                    enabled: c,
                    staleTime: 1 / 0
                })
            }
        },
        IOEU: (e, t, n) => {
            "use strict";
            n.d(t, {
                I9: () => c,
                M3: () => p,
                __: () => a,
                bf: () => u,
                nO: () => l,
                pm: () => s,
                wP: () => i,
                zl: () => o,
                zy: () => d
            });
            var r = n("JSvb");
            const a = {
                    CM: 4,
                    UM: 2
                },
                i = {
                    ISOLATED: "ISOLATED",
                    CROSSED: "CROSSED"
                },
                o = 2,
                s = 4,
                c = {
                    direction: "direction",
                    type: "gridType",
                    lowerLimit: "gridLowerLimit",
                    upperLimit: "gridUpperLimit",
                    gridCount: "gridCount",
                    gridProfit: "gridProfit",
                    initialMargin: "gridInitialValue",
                    isTrailingUp: "isTrailingUp",
                    isTrailingDown: "isTrailingDown",
                    triggerPrice: "triggerPrice",
                    triggerType: "triggerType",
                    stopLowerLimit: "stopLowerLimit",
                    stopUpperLimit: "stopUpperLimit",
                    stopTriggerType: "stopTriggerType",
                    trailingUpLimitPrice: "trailingUpLimitPrice",
                    trailingDownLimitPrice: "trailingDownLimitPrice",
                    cos: "cos",
                    cps: "cps",
                    qtyPerOrder: "qtyPerOrder",
                    totalInvestment: "totalInvestment",
                    leverage: "leverage",
                    marginType: "marginType",
                    tpslCps: "tpslCps",
                    tpSlType: "tpSlType",
                    stopTpPnl: "stopTpPnl",
                    stopSlPnl: "stopSlPnl",
                    autoInitPos: "autoInitPos",
                    totalAdjustmentAmount: "totalAdjustmentAmount"
                },
                u = 2,
                l = 169,
                d = {
                    min: 0,
                    max: 0
                },
                p = (c.direction, r.t3.NEUTRAL, c.type, r.YA.ARITH, c.lowerLimit, c.upperLimit, c.gridCount, c.gridProfit, c.initialMargin, c.cos, c.cps, c.leverage, {
                    [c.direction]: r.t3.NEUTRAL,
                    [c.type]: r.YA.ARITH,
                    [c.lowerLimit]: "",
                    [c.upperLimit]: "",
                    [c.gridCount]: "",
                    [c.gridProfit]: d,
                    [c.initialMargin]: "",
                    [c.triggerPrice]: "",
                    [c.triggerType]: r.IJ.MARK_PRICE,
                    [c.stopLowerLimit]: "",
                    [c.stopUpperLimit]: "",
                    [c.stopTriggerType]: r.IJ.MARK_PRICE,
                    [c.cos]: !0,
                    [c.cps]: !0,
                    [c.leverage]: void 0,
                    [c.marginType]: void 0,
                    [c.trailingUpLimitPrice]: "",
                    [c.trailingDownLimitPrice]: "",
                    [c.isTrailingUp]: !1,
                    [c.isTrailingDown]: !1,
                    [c.tpslCps]: !0,
                    [c.tpSlType]: r.cy.PRICE,
                    [c.stopTpPnl]: "",
                    [c.stopSlPnl]: "",
                    [c.autoInitPos]: !0
                })
        },
        JSvb: (e, t, n) => {
            "use strict";
            n.d(t, {
                $S: () => l,
                $Z: () => m,
                D4: () => p,
                Gs: () => i,
                IJ: () => o,
                NH: () => v,
                Sy: () => u,
                U9: () => g,
                YA: () => a,
                cy: () => s,
                mB: () => f,
                r5: () => h,
                t2: () => d,
                t3: () => c,
                zI: () => r
            });
            const r = {
                    AUTO: "AUTO",
                    POPULAR: "POPULAR",
                    MANUAL: "MANUAL"
                },
                a = {
                    ARITH: "ARITH",
                    GEO: "GEO"
                },
                i = {
                    CANCELLED: "CANCELLED",
                    EXPIRED: "EXPIRED",
                    NEW: "NEW",
                    WORKING: "WORKING",
                    FINISHED: "FINISHED",
                    REJECTED: "REJECTED"
                },
                o = {
                    MARK_PRICE: "MARK_PRICE",
                    CONTRACT_PRICE: "CONTRACT_PRICE"
                },
                s = {
                    PRICE: "price",
                    ROI: "roi",
                    PNL: "pnl"
                },
                c = {
                    NEUTRAL: "NEUTRAL",
                    LONG: "LONG",
                    SHORT: "SHORT"
                },
                u = {
                    Quote: "QUOTE",
                    Base: "BASE"
                },
                l = "futures",
                d = "spot",
                p = "90804155",
                f = "90814170",
                v = "BTCUSDT",
                m = {
                    LANDING_PAGE: "LANDING_PAGE",
                    TRADE_PANEL: "TRADE_PANEL",
                    CREATE_MODAL: "CREATE_MODAL"
                },
                h = {
                    AUTO: "auto",
                    COPY: "copy",
                    MARKETPLACE: "marketplace"
                },
                g = {
                    autoManual: "auto_manual",
                    popularManual: "popular_manual",
                    marketplaceManual: "marketplace_manual"
                }
        },
        Wn7T: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tz: () => a,
                _g: () => r
            });
            const r = 1,
                a = 0
        },
        iAZ9: (e, t, n) => {
            "use strict";
            n.d(t, {
                QY: () => l,
                Tk: () => s,
                Xv: () => i,
                kz: () => a,
                q8: () => u,
                t4: () => c
            });
            var r = n("JSvb");
            const a = {
                    Single: "SINGLE",
                    Both: "BOTH"
                },
                i = {
                    type: "type",
                    lowerLimit: "lowerLimit",
                    upperLimit: "upperLimit",
                    gridCount: "gridCount",
                    gridProfit: "gridProfit",
                    triggerPrice: "triggerPrice",
                    stopLowerLimit: "stopLowerLimit",
                    stopUpperLimit: "stopUpperLimit",
                    cos: "cos",
                    cps: "cps",
                    investMode: "investMode",
                    baseQty: "baseQty",
                    quoteQty: "quoteQty",
                    trailingUp: "trailingUp",
                    qtyPerOrder: "qtyPerOrder",
                    tpSlType: "tpSlType",
                    stopTpPnl: "stopTpPnl",
                    initialQuote: "initialQuote",
                    stopSlPnl: "stopSlPnl"
                },
                o = {
                    min: 0,
                    max: 0
                },
                s = !0,
                c = (i.type, r.YA.ARITH, i.lowerLimit, i.upperLimit, i.gridCount, i.gridProfit, i.investMode, a.Single, i.quoteQty, i.cos, i.cps, {
                    [i.type]: r.YA.ARITH,
                    [i.lowerLimit]: "",
                    [i.upperLimit]: "",
                    [i.gridCount]: "",
                    [i.gridProfit]: o,
                    [i.triggerPrice]: "",
                    [i.stopLowerLimit]: "",
                    [i.stopUpperLimit]: "",
                    [i.investMode]: a.Single,
                    [i.baseQty]: "",
                    [i.quoteQty]: "",
                    [i.cos]: !0,
                    [i.cps]: s,
                    [i.tpSlType]: r.cy.PRICE,
                    [i.stopTpPnl]: "",
                    [i.stopSlPnl]: ""
                }),
                u = 2,
                l = 170
        },
        dzVE: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => l
            });
            var r = n("4hgs"),
                a = n("Feur"),
                i = n("krnk"),
                o = n("1Au+"),
                s = n("hbgo");
            const c = {
                    data: {
                        status: "true"
                    }
                },
                u = [s.$$, s.sY, s.S8],
                l = ({
                    strategy: e,
                    isLogin: t
                }) => {
                    const n = !!o.YX[e],
                        {
                            data: s = c,
                            isLoading: l
                        } = (0, r.useQuery)(i.t5.agreement, a.Oj, {
                            enabled: Boolean(t) && !n,
                            staleTime: 1 / 0
                        }),
                        {
                            data: d,
                            isLoading: p
                        } = (0, r.useQuery)(i.z6.rebalancingBot, (() => (0, a.W_)({
                            configTypes: Object.values(o.YX)
                        })), {
                            enabled: Boolean(t) && n,
                            staleTime: 1 / 0
                        }),
                        f = u.reduce(((t, n) => {
                            const r = "rebalancingBot" === n,
                                a = d ? .data ? .configRets,
                                i = o.YX[n],
                                s = a ? .find((e => e.configType === i)) ? .configValue ? ? null,
                                c = a ? .find((e => e.configType === i)) ? .configValue,
                                u = Number(c) >= +o.LO[e],
                                l = !!s || u;
                            return { ...t,
                                [n]: r ? l : u
                            }
                        }), {});
                    return {
                        agreed: !1 === t || (n ? f ? .[e] ? ? !1 : "true" === s ? .data ? .status),
                        isChecking: l || p || "boolean" !== typeof t
                    }
                }
        },
        L7h2: (e, t, n) => {
            "use strict";
            n.d(t, {
                _3: () => u
            });
            var r = n("DTvD"),
                a = n("Hf/4"),
                i = n("4hgs"),
                o = n("Cadp"),
                s = n("krnk");
            const c = e => {
                const t = void 0 !== e.investmentMin || void 0 !== e.investmentMax;
                return [e.sort || void 0, e.strategyType || void 0, e.symbol || void 0, e.runningTimeMin || void 0, e.runningTimeMax || void 0, e.zone || void 0, e.roiMin || void 0, e.roiMax || void 0, e.rows || void 0, e.trailingType || void 0, e.direction || void 0, e.leverageMin || void 0, e.leverageMax || void 0, e.minSevenDayMdd || void 0, e.maxSevenDayMdd || void 0, ...t ? [e.investmentMin || void 0, e.investmentMax || void 0] : []].filter(Boolean).join("_")
            };

            function u(e, t) {
                const [n, u] = (0, r.useState)(0), l = e ? c(e) : null, {
                    data: d,
                    isLoading: p,
                    dataUpdatedAt: f,
                    isFetched: v,
                    refetch: m
                } = (0, i.useQuery)([s.t5.topStrategies, l, e ? .page, e ? .rows], (() => e && (0, o.N7)(e)), { ...t,
                    enabled: !1 !== t ? .enabled && e && Boolean(e.sort)
                }), h = (0, a.A)(l), g = d ? .total || 0;
                return (0, r.useEffect)((() => {
                    g ? g !== n && u(g) : l !== h && u(0)
                }), [g, n, l, h, u]), {
                    isFetched: v,
                    list: d ? .data || [],
                    total: n,
                    isLoading: p,
                    dataUpdatedAt: f,
                    refetch: m
                }
            }
        },
        ndjx: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => A
            });
            var r = n("DTvD"),
                a = n("mXdx"),
                i = n("21Yo"),
                o = n("MD8j"),
                s = n("Q2gR");
            const c = (0, r.lazy)((() => Promise.all([n.e(2639), n.e(2692)]).then(n.bind(n, "TlSY"))));
            var u = n("v76/"),
                l = n("4hgs"),
                d = n("S+0I"),
                p = n("66mo"),
                f = n.n(p),
                v = n("5nld"),
                m = n("XqCI"),
                h = (function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, v.bE)("/bapi/kyc/v1/private/risk/check/withdraw-pre-check", t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e() {
                        var t;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, v.Jt)("/bapi/kyc/v1/private/risk/check/withdraw-x-days-hisAddr");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e() {
                        var t;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, v.Jt)("/bapi/kyc/v1/private/risk/check/crypto-deposit-pre-check");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e() {
                        var t, n, r, a = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        productLine: "MAINSITE",
                                        operation: "ENFORCE_KYC"
                                    }, n = a.length > 1 ? a[1] : void 0, e.next = 3, (0, v.bE)("/bapi/accounts/v1/private/account/compliance/userComplianceCheck", t, n);
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
                }()),
                g = (function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n, r = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.abrupt("return", (0, v.bE)("/bapi/accounts/v2/private/account/compliance/userComplianceCheck", t, n));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e() {
                        var t;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, v.Jt)("/bapi/accounts/v2/private/country/user/restricted");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n, r = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.abrupt("return", (0, v.Jt)("/bapi/kyc/v1/private/risk/check/init-user-question?".concat((0, m.E2)(t)), n));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n, r = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.abrupt("return", (0, v.bE)("/bapi/kyc/v1/private/risk/check/submit", t, n));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n, r = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.abrupt("return", (0, v.bE)("/bapi/kyc/v1/private/risk/check/submit_v2", t, n));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n, r = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.abrupt("return", (0, v.bE)("/bapi/kyc/v1/private/risk/check/domain", t, n));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, d._)(f().mark((function e(t) {
                        var n, r, a = arguments;
                        return f().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.prev = 1, e.next = 4, (0, v.Jt)("/bapi/apex/v1/private/apex/marketing/withdrawRisk/checkRisk?amount=".concat(t.amount, "&asset=").concat(t.asset), n);
                                case 4:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", {
                                        hit: !1
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })))
                }(), n("A4nT"));
            const b = (e, t) => {
                    const {
                        productLine: n,
                        operation: r,
                        userId: a
                    } = e;
                    return (0, l.useQuery)(g.Bz.USER_COMPLIANCE_CHECK(n, r, a), (() => h(e, {})), {
                        staleTime: 1 / 0,
                        cacheTime: 1 / 0,
                        notifyOnChangeProps: ["data", "isFetching"],
                        ...t || {}
                    })
                },
                y = (0, r.lazy)((() => Promise.all([n.e(2639), n.e(615)]).then(n.bind(n, "yjbs"))));

            function w(e, {
                withModal: t = !1,
                track: n,
                getI18n: o
            } = {}) {
                const {
                    pass: c,
                    unexpectedCase: l,
                    errorCode: d
                } = (e => {
                    const t = (0, u.n)(),
                        {
                            userId: n
                        } = (0, i.Py)(),
                        {
                            data: r,
                            isFetching: a,
                            isFetched: o
                        } = b({
                            productLine: "USER_KYC_GUIDE",
                            operation: "KYC_STATUS_CHECK"
                        }, { ...e || {},
                            enabled: e ? .enabled || Boolean(Number(n)) && Boolean(t)
                        }),
                        s = String(r ? .data ? .errorCode) || "",
                        c = "200003903" === s,
                        l = "200003904" === s,
                        d = "200003905" === s,
                        p = Boolean(r ? .data ? .pass) || !1;
                    return {
                        pass: p,
                        errorCode: s,
                        isFetching: a,
                        isFailed: c,
                        isUnverified: l,
                        isUnderReview: d,
                        unexpectedCase: !p && !c && !l && !d && o
                    }
                })(), [p, f] = (0, r.useState)(!1);
                return {
                    modal: (0, r.useMemo)((() => p ? (0, a.jsx)(s.$, {
                        value: n,
                        children: (0, a.jsx)(r.Suspense, {
                            fallback: null,
                            children: (0, a.jsx)(y, {
                                visible: !0,
                                errorCode: d,
                                onClose: () => {
                                    f(!1)
                                },
                                getI18n: o
                            })
                        })
                    }) : null), [p, n, d]),
                    wrappedFunction: (0, r.useCallback)(((...n) => c || l ? e(...n) : ("object" === typeof n[0] && "preventDefault" in n[0] && "function" === typeof n[0].preventDefault && n[0].preventDefault(), t && f(!0), null)), [c, t, e, l]),
                    passKyc: c
                }
            }

            function _(e, {
                staticHost: t,
                enablePositionVoucher: n,
                track: u,
                afterOpenFuturesAccount: l,
                autoUpdateIsExistFuturesAccountInRedux: d,
                enableReferralInput: p,
                afterGoToFutures: f,
                afterCloseSuccessModal: v,
                afterOpenPositionVoucher: m,
                getI18n: h
            }) {
                const {
                    wrappedFunction: g,
                    modal: b,
                    isExistFutureAccount: y
                } = function(e, {
                    withModal: t = !1,
                    enablePositionVoucher: n = !1,
                    staticHost: u,
                    track: l,
                    afterOpenFuturesAccount: d,
                    afterGoToFutures: p,
                    afterOpenPositionVoucher: f,
                    afterCloseSuccessModal: v,
                    autoUpdateIsExistFuturesAccountInRedux: m = !1,
                    enableReferralInput: h
                } = {
                    staticHost: ""
                }) {
                    const g = (0, o.wA)(),
                        b = (0, r.useCallback)((() => {
                            m && g.userCenter ? .updateUserInfo && g.userCenter.updateUserInfo({
                                isExistFutureAccount: !0
                            })
                        }), [g, m]),
                        y = (0, r.useCallback)((() => {
                            b(), d ? .()
                        }), [d, b]),
                        {
                            isExistFutureAccount: w
                        } = (0, i.Py)(),
                        [_, x] = (0, r.useState)(!1),
                        T = (0, r.useMemo)((() => _ ? (0, a.jsx)(s.$, {
                            value: l,
                            children: (0, a.jsx)(r.Suspense, {
                                fallback: null,
                                children: (0, a.jsx)(c, {
                                    visible: !0,
                                    onClose: () => {
                                        x(!1)
                                    },
                                    staticHost: u,
                                    goTo: e => window.open(e, "_blank"),
                                    enablePositionVoucher: n,
                                    afterOpenFuturesAccount: y,
                                    enableReferralInput: h,
                                    afterGoToFutures: p,
                                    afterOpenPositionVoucher: f,
                                    afterCloseSuccessModal: v
                                })
                            })
                        }) : null), [_, n, u, l, y, p, h, v, f]);
                    return {
                        modal: T,
                        wrappedFunction: (0, r.useCallback)(((...n) => w ? e(...n) : ("object" === typeof n[0] && "preventDefault" in n[0] && "function" === typeof n[0].preventDefault && n[0].preventDefault(), t && x(!0), null)), [w, t, e]),
                        isExistFutureAccount: w
                    }
                }(e, {
                    withModal: !0,
                    staticHost: t,
                    enablePositionVoucher: n,
                    track: u,
                    afterOpenFuturesAccount: l,
                    afterGoToFutures: f,
                    afterCloseSuccessModal: v,
                    autoUpdateIsExistFuturesAccountInRedux: d,
                    enableReferralInput: p,
                    afterOpenPositionVoucher: m
                }), {
                    wrappedFunction: _,
                    modal: x,
                    passKyc: T
                } = w(g, {
                    withModal: !0,
                    track: u,
                    getI18n: h
                });
                return {
                    wrappedFunction: _,
                    modal: (0, a.jsxs)(a.Fragment, {
                        children: [x, b]
                    }),
                    passKyc: T,
                    isExistFutureAccount: y
                }
            }
            var x = n("trXm");
            var T = n("dzVE"),
                E = n("qRru"),
                k = n("P0pw"),
                S = n("xfYC");
            const A = ({
                callback: e,
                isLoggedIn: t,
                strategy: n,
                staticHost: a,
                replacePageName: i
            }) => {
                const {
                    agreed: o,
                    isChecking: s
                } = (0, T.y)({
                    isLogin: t,
                    strategy: n
                }), c = i || S.EH[n], u = (0, r.useCallback)(((e, t) => {
                    (0, E.u4)(e, { ...t,
                        pageName: c
                    })
                }), [c, E.u4]), l = !t, d = (...r) => {
                    if (t && !o && !s) return u("PopupView", {
                        eventName: "disclaimer_popup"
                    }), k.B.emit(k.R.VIEW_AGREEMENT_MODAL, {
                        strategyType: n
                    });
                    e(...r)
                }, {
                    wrappedFunction: p,
                    modal: f
                } = (({
                    callback: e,
                    staticHost: t,
                    track: n,
                    afterOpenFuturesAccount: r
                }) => {
                    const {
                        t: a
                    } = (0, x.F$)(), {
                        wrappedFunction: i,
                        modal: o
                    } = _(e, {
                        staticHost: t,
                        enablePositionVoucher: !1,
                        autoUpdateIsExistFuturesAccountInRedux: !0,
                        afterOpenFuturesAccount: r,
                        track: n,
                        getI18n: a
                    });
                    return {
                        wrappedFunction: i,
                        modal: o
                    }
                })({
                    callback: d,
                    staticHost: a,
                    track: u,
                    afterOpenFuturesAccount: () => {
                        u("PopupView", {
                            eventName: "open_futures_account",
                            pageName: c
                        })
                    }
                });
                return {
                    wrappedFunction: l ? d : p,
                    modal: f
                }
            }
        },
        TwfU: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => g
            });
            var r = n("DTvD"),
                a = n("mXdx"),
                i = n("eQhr");
            const o = "200003903",
                s = "200003904",
                c = "200003905";
            var u = n("UuPx"),
                l = n("qV1O");
            const d = (0, r.lazy)((async () => await n.e(2285).then(n.bind(n, "VaUY"))));

            function p(e, {
                withModal: t = !1,
                strategy: n
            } = {}) {
                const {
                    pass: p,
                    errorCode: f
                } = (() => {
                    const {
                        data: e,
                        isFetching: t,
                        isFetched: n
                    } = (0, i.l)({
                        productLine: "USER_KYC_GUIDE",
                        operation: "KYC_STATUS_CHECK"
                    }), r = String(e ? .errorCode) || "", a = r === o, u = r === s, l = r === c, d = Boolean(e ? .pass) || !1;
                    return {
                        pass: d,
                        errorCode: r,
                        isFetching: t,
                        isFailed: a,
                        isUnverified: u,
                        isUnderReview: l,
                        unexpectedCase: !d && !a && !u && !l && n
                    }
                })(), v = (0, u.nE)(), [m, h] = (0, r.useState)(!1);
                return {
                    modal: (0, r.useMemo)((() => m ? (0, a.jsx)(l.$, {
                        sensorTrack: v,
                        children: (0, a.jsx)(r.Suspense, {
                            fallback: null,
                            children: (0, a.jsx)(d, {
                                visible: !0,
                                errorCode: f,
                                onClose: () => {
                                    h(!1)
                                },
                                strategy: n
                            })
                        })
                    }) : null), [m, v, f]),
                    wrappedFunction: (0, r.useCallback)(((...n) => {
                        if (p) return e(...n);
                        t && h(!0)
                    }), [p, t, e])
                }
            }
            var f = n("dzVE"),
                v = n("qRru"),
                m = n("P0pw"),
                h = n("xfYC");
            const g = ({
                callback: e,
                isLoggedIn: t,
                strategy: n,
                isSkipKyc: a = !1,
                replacePageName: i
            }) => {
                const {
                    agreed: o,
                    isChecking: s
                } = (0, f.y)({
                    isLogin: t,
                    strategy: n
                }), c = i || h.EH[n], u = (0, r.useCallback)(((e, t) => {
                    (0, v.u4)(e, { ...t,
                        pageName: c
                    })
                }), [c, v.u4]), l = a || !t, d = (...r) => {
                    if (t && !o && !s) return u("PopupView", {
                        eventName: "disclaimer_popup"
                    }), m.B.emit(m.R.VIEW_AGREEMENT_MODAL, {
                        strategyType: n
                    });
                    e(...r)
                }, {
                    wrappedFunction: g,
                    modal: b
                } = (({
                    callback: e,
                    track: t,
                    strategy: n
                }) => {
                    const {
                        wrappedFunction: r,
                        modal: a
                    } = p(e, {
                        withModal: !0,
                        track: t,
                        strategy: n
                    });
                    return {
                        wrappedFunction: r,
                        modal: a
                    }
                })({
                    callback: d,
                    track: u,
                    strategy: n
                });
                return {
                    wrappedFunction: l ? d : g,
                    modal: b
                }
            }
        },
        "as/d": (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => m
            });
            var r, a = n("S+0I"),
                i = n("EnBZ"),
                o = n("KrVi"),
                s = n("66mo"),
                c = n.n(s),
                u = n("5nld"),
                l = n("XqCI"),
                d = (function() {
                    var e = (0, a._)(c().mark((function e(t) {
                        var n, r, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, u.bE)("/bapi/asset/v1/private/asset-service/wallet/transfer", t);
                                case 2:
                                    if (n = e.sent, r = n.success, a = n.message, r) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Error(a);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a._)(c().mark((function e(t) {
                        var n, r, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = t.userId, r = {
                                        "x-user-id": n
                                    }, e.next = 5, (0, u.Jt)("/bapi/asset/v2/private/asset-service/wallet/asset", {
                                        headers: r
                                    });
                                case 5:
                                    return a = e.sent.data, e.abrupt("return", a);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getAssets failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", []);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })))
                }(), function() {
                    var e = (0, a._)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, u.Jt)("/bapi/asset/v2/private/asset-service/wallet/asset?".concat((0, l.E2)(t)));
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getAssets failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", []);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n, r, a, s;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, n = t.userId, r = (0, o._)(t, ["userId"]), a = {
                                    "x-user-id": n
                                }, e.next = 5, (0, u.Jt)("/bapi/asset/v2/private/asset-service/wallet/asset-detail?".concat((0, l.E2)(r)), {
                                    headers: a
                                });
                            case 5:
                                return s = e.sent.data, e.abrupt("return", s);
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getAssetsDetail failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", []);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })))
            })(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.Jt)("/bapi/asset/v3/private/asset-service/wallet/asset-detail?".concat((0, l.E2)(t)));
                            case 3:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getAssetsDetail failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", {});
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }();
            ! function(e) {
                e.Spot = "Spot", e.Funding = "Funding", e.Earn = "Earn", e.Futures = "Futures", e.TradingBots = "TradingBots", e.CopyTrading = "CopyTrading"
            }(r || (r = {}));
            (function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.Jt)("/bapi/asset/v3/private/asset-service/wallet/wallet-group-asset-detail?".concat((0, l.E2)(t)));
                            case 3:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getAssetsDetail failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", {});
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            })(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.Jt)("/bapi/asset/v3/private/asset-service/wallet/balance?".concat((0, l.E2)(t)));
                            case 3:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getAssetsDetail failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", []);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e() {
                    var t;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.Jt)("/bapi/asset/v1/private/wallet-direct/buw/wallet/balance");
                            case 3:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getDeFiWalletInfo failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", {});
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n, r;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.bE)("/bapi/apex/v1/friendly/apex/marketing/web/walletCoin/search", t);
                            case 3:
                                return n = e.sent, r = n.data, e.abrupt("return", (null === r || void 0 === r ? void 0 : r.coins) || []);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] searchCoins failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", []);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n, r;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, n = t.coin, !(void 0 === n ? "" : n)) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 5, (0, u.bE)("/bapi/apex/v1/friendly/apex/marketing/web/walletNetworks/search", t);
                            case 5:
                                return r = e.sent.data, e.abrupt("return", (null === r || void 0 === r ? void 0 : r.networks) || []);
                            case 7:
                                return e.abrupt("return", []);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] searchNetworks failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", []);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.Jt)("/bapi/asset/v1/private/asset-service/asset/get-user-asset-logs?".concat((0, l.E2)(t)));
                            case 3:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getFundingWalletTransactionHistory failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", {});
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, u.bE)("/bapi/capital/v1/public/future/common/strategy/landing-page/queryMaxRoi", t);
                            case 3:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), console.error("[libs/api/assetService/wallet] getTradingBotData failed", (0, i._)(e.t0, Error) ? null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message : e.t0), e.abrupt("return", {});
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e() {
                    var t;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, u.Jt)("/bapi/defi/v1/private/wallet-direct/cloud-wallet/alpha");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", (null === t || void 0 === t ? void 0 : t.list) || []);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, u.Jt)("/bapi/defi/v1/public/wallet-direct/buw/wallet/cex/alpha/token/full/info?chainId=".concat(t.chainId, "&contractAddress=").concat(t.contractAddress));
                            case 2:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e() {
                    var t;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, u.Jt)("/bapi/defi/v1/public/wallet-direct/buw/wallet/cex/alpha/all/token/list");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, a._)(c().mark((function e(t) {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, u.bE)("/bapi/asset/v1/private/asset-service/wallet/transfer", t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var p = n("0hn9"),
                f = n("4hgs"),
                v = n("krnk");
            const m = () => {
                const {
                    isLoggedIn: e
                } = (0, p.vz)(), t = (0, f.useQuery)(v.$K.all, (() => d({
                    needPnl: "false",
                    quoteAsset: "USDT"
                })), {
                    enabled: Boolean(e)
                });
                return {
                    usdt: +(Array.isArray(t ? .data) ? t.data : []).reduce(((e, t) => +e + +(t ? .valuationAmount ? ? 0)), 0),
                    isFetching: t.isFetching,
                    isLoading: t.isLoading,
                    isFetched: t.isFetched
                }
            }
        },
        Bdbj: (e, t, n) => {
            "use strict";
            n.d(t, {
                AA: () => b,
                Bx: () => l,
                C6: () => _,
                EW: () => E,
                GG: () => i,
                JV: () => R,
                Kg: () => k,
                Mj: () => a,
                Qo: () => p,
                U7: () => y,
                ZP: () => A,
                _3: () => w,
                _6: () => T,
                eo: () => d,
                hm: () => S,
                m6: () => f,
                mB: () => v,
                mQ: () => m,
                om: () => g,
                qN: () => C,
                s3: () => h,
                so: () => x,
                t3: () => r
            });
            const r = {
                    NEUTRAL: "NEUTRAL",
                    LONG: "LONG",
                    SHORT: "SHORT"
                },
                a = {
                    lessThanOne: "0-86400",
                    oneToTwo: "86400-172800",
                    oneToSeven: "86400-604800",
                    twoToSeven: "172800-604800",
                    sevenToFifteen: "604800-1296000",
                    sevenToThirty: "604800-2592000",
                    fifteenToThirty: "1296000-2592000",
                    moreThanThirty: "2592000"
                },
                i = {
                    roi: "roi",
                    pnl: "pnl",
                    copyCount: "copyCount",
                    latestMatchedCount: "latestMatchedCount"
                },
                o = "apr3d",
                s = "apr7d",
                c = "apr30d",
                u = "aprNext",
                l = {
                    RUNNING_TIME_OPTIONS: [{
                        name: "all",
                        value: "",
                        tOptions: {
                            defaultValue: "All"
                        },
                        sensorKey: "all"
                    }, {
                        name: "runtime-option-day",
                        value: a.lessThanOne,
                        tOptions: {
                            defaultValue: "{{- range}} Day",
                            range: "\u22641"
                        },
                        sensorKey: "less_than_1"
                    }, {
                        name: "runtime-option-days",
                        value: a.oneToSeven,
                        tOptions: {
                            defaultValue: "{{- range}} Days",
                            range: "1-7"
                        },
                        sensorKey: "1_to_7"
                    }, {
                        name: "runtime-option-days",
                        value: a.sevenToThirty,
                        tOptions: {
                            defaultValue: "{{- range}} Days",
                            range: "7-30"
                        },
                        sensorKey: "7_to_30"
                    }, {
                        name: "runtime-option-days",
                        value: a.moreThanThirty,
                        tOptions: {
                            defaultValue: "{{- range}} Days",
                            range: "\u226530"
                        },
                        sensorKey: "more_than_30"
                    }],
                    DIRECTION_OPTIONS: [{
                        name: "all",
                        value: "",
                        tOptions: {
                            defaultValue: "All"
                        },
                        sensorKey: ""
                    }, {
                        name: "NEUTRAL",
                        value: "NEUTRAL",
                        tOptions: {
                            defaultValue: "Neutral"
                        },
                        sensorKey: ""
                    }, {
                        name: "LONG",
                        value: "LONG",
                        tOptions: {
                            defaultValue: "Long"
                        },
                        sensorKey: ""
                    }, {
                        name: "SHORT",
                        value: "SHORT",
                        tOptions: {
                            defaultValue: "Short"
                        },
                        sensorKey: ""
                    }],
                    ARBITRAGE_DIRECTION_OPTIONS: [{
                        name: "arbitrage-market-allTab",
                        value: "",
                        tOptions: {
                            defaultValue: "All"
                        },
                        sensorKey: ""
                    }, {
                        name: "arbitrage-market-positiveTab",
                        value: "positive",
                        tOptions: {
                            defaultValue: "Positive Carry"
                        },
                        sensorKey: ""
                    }, {
                        name: "arbitrage-market-reverseTab",
                        value: "reverse",
                        tOptions: {
                            defaultValue: "Reverse Carry"
                        },
                        sensorKey: ""
                    }],
                    ROI_OPTIONS: [{
                        name: "all",
                        value: "",
                        tOptions: {
                            defaultValue: "All"
                        },
                        sensorKey: "all"
                    }, {
                        name: "\u2265100%",
                        value: "1",
                        tOptions: {
                            defaultValue: "\u2265100%"
                        },
                        sensorKey: "more_than_100"
                    }, {
                        name: "70%-100%",
                        value: "0.7-1",
                        tOptions: {
                            defaultValue: "70%-100%"
                        },
                        sensorKey: "70_to_100"
                    }, {
                        name: "50%-70%",
                        value: "0.5-0.7",
                        tOptions: {
                            defaultValue: "50%-70%"
                        },
                        sensorKey: "50_to_70"
                    }, {
                        name: "20%-50%",
                        value: "0.2-0.5",
                        tOptions: {
                            defaultValue: "20%-50%"
                        },
                        sensorKey: "20_to_50"
                    }, {
                        name: "10%-20%",
                        value: "0.1-0.2",
                        tOptions: {
                            defaultValue: "10%-20%"
                        },
                        sensorKey: "10_to_20"
                    }, {
                        name: "5%-10%",
                        value: "0.05-0.1",
                        tOptions: {
                            defaultValue: "5%-10%"
                        },
                        sensorKey: "5_to_10"
                    }, {
                        name: "0-5%",
                        value: "0-0.05",
                        tOptions: {
                            defaultValue: "0-5%"
                        },
                        sensorKey: "0_to_5"
                    }],
                    LEVERAGE_OPTIONS: [{
                        name: "all",
                        value: "",
                        tOptions: {
                            defaultValue: "All"
                        },
                        sensorKey: "all"
                    }, {
                        name: "1-5x",
                        value: "1-5",
                        tOptions: {
                            defaultValue: "1-5x"
                        },
                        sensorKey: "1-5x"
                    }, {
                        name: "5-10x",
                        value: "5-10",
                        tOptions: {
                            defaultValue: "5-10x"
                        },
                        sensorKey: "5-10x"
                    }, {
                        name: "10-20x",
                        value: "10-20",
                        tOptions: {
                            defaultValue: "10-20x"
                        },
                        sensorKey: "10-20x"
                    }, {
                        name: "20-50x",
                        value: "20-50",
                        tOptions: {
                            defaultValue: "20-50x"
                        },
                        sensorKey: "20-50x"
                    }, {
                        name: ">50x",
                        value: "50",
                        tOptions: {
                            defaultValue: ">50x"
                        },
                        sensorKey: ">50x"
                    }],
                    SORT_OPTIONS: [{
                        name: "roi",
                        value: i.roi,
                        tOptions: {
                            defaultValue: "ROI"
                        },
                        sensorKey: "roi"
                    }, {
                        name: "pnl",
                        value: i.pnl,
                        tOptions: {
                            defaultValue: "PNL"
                        },
                        sensorKey: "pnl"
                    }, {
                        name: "copyCount",
                        value: i.copyCount,
                        tOptions: {
                            defaultValue: "Most Copied"
                        },
                        sensorKey: "most_copied"
                    }, {
                        name: "most-matched",
                        value: i.latestMatchedCount,
                        tOptions: {
                            defaultValue: "Most Matched"
                        },
                        sensorKey: "most_matched"
                    }],
                    POPULAR_SORT_OPTIONS: [{
                        name: "highest-roi",
                        value: i.roi,
                        tOptions: {
                            defaultValue: "Highest ROI"
                        },
                        sensorKey: "roi"
                    }, {
                        name: "highest-pnl",
                        value: i.pnl,
                        tOptions: {
                            defaultValue: "Highest PNL"
                        },
                        sensorKey: "pnl"
                    }, {
                        name: "most-copied",
                        value: i.copyCount,
                        tOptions: {
                            defaultValue: "Most Copied"
                        },
                        sensorKey: "most_copied"
                    }, {
                        name: "most-matched",
                        value: i.latestMatchedCount,
                        tOptions: {
                            defaultValue: "Most Matched"
                        },
                        sensorKey: "most_matched"
                    }],
                    ARBITRAGE_POPULAR_OPTIONS: [{
                        name: "arbitrage-3d-apr",
                        value: o,
                        tOptions: {
                            defaultValue: "3d APR"
                        },
                        sensorKey: "apr3d"
                    }, {
                        name: "arbitrage-7d-apr",
                        value: s,
                        tOptions: {
                            defaultValue: "7d APR"
                        },
                        sensorKey: "apr7d"
                    }, {
                        name: "arbitrage-30d-apr",
                        value: c,
                        tOptions: {
                            defaultValue: "30d APR"
                        },
                        sensorKey: "apr30d"
                    }, {
                        name: "arbitrage-funding-apr",
                        value: u,
                        tOptions: {
                            defaultValue: "Next Funding APR"
                        },
                        sensorKey: "aprNext"
                    }],
                    STRATEGY_TYPE_OPTIONS: [{
                        name: "usds-m",
                        value: "2",
                        tOptions: {
                            defaultValue: "USD\u24c8-M"
                        },
                        sensorKey: "um_grid"
                    }, {
                        name: "coin-m",
                        value: "3",
                        tOptions: {
                            defaultValue: "COIN-M"
                        },
                        sensorKey: "cm_grid"
                    }],
                    STRATEGY_7D_MDD: [{
                        name: "all",
                        value: "",
                        tOptions: {
                            defaultValue: "All"
                        },
                        sensorKey: "all"
                    }, {
                        name: "0-20%",
                        value: "0-0.2",
                        tOptions: {
                            defaultValue: "0%-20%"
                        },
                        sensorKey: "0_to_20"
                    }, {
                        name: "20%-40%",
                        value: "0.2-0.4",
                        tOptions: {
                            defaultValue: "20%-40%"
                        },
                        sensorKey: "20_to_40"
                    }, {
                        name: "40%-60%",
                        value: "0.4-0.6",
                        tOptions: {
                            defaultValue: "40%-60%"
                        },
                        sensorKey: "40_to_60"
                    }]
                },
                d = {
                    strategyType: "strategyType",
                    market: "market",
                    runningTime: "runningTime",
                    zone: "zone",
                    roi: "roi",
                    sort: "sort",
                    direction: "direction",
                    trailingType: "trailingType",
                    investmentType: "investmentType",
                    leverage: "leverage",
                    sevenDayMdd: "sevenDayMdd"
                },
                p = "runtime-tip",
                f = "This Running Time shows how long this strategy has been running since it was created.",
                v = "copy-tip",
                m = "The Copy Popularity is a measure of how many copies of this order have been made. When a user creates a strategy based on an order parameter, it will count as a copy even if the order parameter is changed.",
                h = "direction-tip",
                g = "Direction displays the current direction of the Grid Trading Strategy, which can be Long, Short or Neutral.",
                b = "pnl-tooltip",
                y = "The net sum of all profits and losses (both matched and unmatched) generated by this bot.",
                w = "roi-tooltip",
                _ = "Total PnL divided by the Total Investment,based on the parameter provider's settings.",
                x = "fut-pnl-tooltip",
                T = "The net sum of Matched PNL and Funding Fee generated by this bot. Note: Unmatched PNL are not included into PNL calculation.",
                E = "fut-roi-tooltip",
                k = "PNL divided by the Total Investment, based on the parameter provider's settings. Note: Unmatched PNL are not included into PNL calculation.",
                S = "sevenDay-mdd-tooltip",
                A = "Max Drawdown is the maximum observed loss from a peak to a trough of a trader over a fixed period. A lower maximum drawdown percentage means lower risk.",
                C = {
                    [d.strategyType]: Number(l.STRATEGY_TYPE_OPTIONS[0].value),
                    [d.market]: "",
                    [d.runningTime]: a.oneToSeven,
                    [d.zone]: "",
                    [d.roi]: l.ROI_OPTIONS[0].value,
                    [d.sort]: l.SORT_OPTIONS[0].value,
                    [d.direction]: l.DIRECTION_OPTIONS[0].value,
                    [d.trailingType]: "TRAILING",
                    [d.investmentType]: !1,
                    [d.leverage]: "5-10",
                    [d.sevenDayMdd]: ""
                },
                R = {
                    [d.market]: "",
                    [d.runningTime]: a.oneToSeven,
                    [d.zone]: "",
                    [d.roi]: l.ROI_OPTIONS[0].value,
                    [d.sort]: l.SORT_OPTIONS[0].value,
                    [d.direction]: l.DIRECTION_OPTIONS[0].value,
                    [d.trailingType]: "",
                    [d.investmentType]: !0,
                    [d.sevenDayMdd]: ""
                }
        },
        "/D2/": (e, t, n) => {
            "use strict";
            n.d(t, {
                P_: () => s,
                xY: () => c
            });
            var r = n("mXdx"),
                a = n("DTvD");
            const i = {},
                o = (0, a.createContext)({
                    formTrackFlowParams: i,
                    onChangeFormTrackFlowParams: () => {}
                }),
                s = ({
                    children: e
                }) => {
                    const [t, n] = (0, a.useState)(i), s = (0, a.useMemo)((() => ({
                        formTrackFlowParams: t,
                        onChangeFormTrackFlowParams: n
                    })), [t]);
                    return (0, r.jsx)(o.Provider, {
                        value: s,
                        children: e
                    })
                },
                c = () => {
                    const {
                        formTrackFlowParams: e,
                        onChangeFormTrackFlowParams: t
                    } = (0, a.useContext)(o);
                    return {
                        formTrackFlowParams: e,
                        onChangeFormTrackFlowParams: t
                    }
                }
        },
        cOJc: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("mXdx"),
                a = (n("DTvD"), n("frD5")),
                i = n("HKzA"),
                o = n("5rIN");
            const s = ({
                children: e,
                className: t,
                direction: n,
                visible: s,
                modalSize: c,
                size: u,
                portalNode: l,
                enablePortal: d,
                maskClose: p,
                onClose: f
            }) => {
                const {
                    isMobile: v
                } = (0, o.Q)();
                return v ? (0, r.jsx)(a.A, {
                    maskClose: p,
                    onClose: f,
                    enablePortal: d,
                    size: u,
                    className: t,
                    direction: n,
                    visible: s,
                    children: e
                }) : (0, r.jsx)(i.Ay, {
                    modalSize: c,
                    className: t,
                    visible: s,
                    portalNode: l,
                    enablePortal: d,
                    maskClose: p,
                    onClose: f,
                    children: e
                })
            }
        },
        f1nL: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => c
            });
            var r = n("mXdx"),
                a = (n("DTvD"), n("xqbL")),
                i = n.n(a),
                o = n("TfXH"),
                s = n("1lvF");
            const c = ({
                showUnderLine: e,
                triggerClassName: t,
                children: n,
                enterDelayTime: a = 600,
                ...c
            }) => (0, r.jsx)(o.A, {
                useReactPopper: !0,
                bubbleFontSize: 12,
                delay: {
                    enter: a
                },
                placement: "top",
                triggerClassName: i()("cursor-help", t),
                ...c,
                children: e ? (0, r.jsx)(s.Ay, {
                    className: "border-0 border-b border-dotted",
                    children: n
                }) : n
            })
        },
        ONUU: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("TVsB"),
                a = n("JSvb");
            const i = (e, t, n, i, o) => {
                const s = new r.A(t),
                    c = new r.A(n),
                    u = i || 2;
                let l;
                e === a.cy.ROI ? l = s.dividedBy(c).multipliedBy(100) : e === a.cy.PNL && (l = c.multipliedBy(.01).multipliedBy(s));
                return l.decimalPlaces(u, o).toString()
            }
        },
        Feur: (e, t, n) => {
            "use strict";
            n.d(t, {
                Oj: () => s,
                RU: () => l,
                W_: () => u,
                bW: () => c
            });
            var r = n("S+0I"),
                a = n("66mo"),
                i = n.n(a),
                o = n("5nld"),
                s = function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/accounts/v1/private/account/user/queryStrategicTradingRiskAgreement");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: {
                                            status: "true"
                                        },
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                }(),
                c = function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/accounts/v1/private/account/user/updateStrategicTradingRiskAgreement");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: !0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                }(),
                u = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/accounts/v1/private/account/user-personal-config/unified-batch-query", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: !0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                l = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/accounts/v1/private/account/user-personal-config/unified-modify", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: !0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                }();
            ! function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/accounts/v1/private/account/user-personal-config/unified-query", t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: !0,
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
        "BIu/": (e, t, n) => {
            "use strict";
            n.d(t, {
                Bx: () => u,
                j: () => c
            });
            var r = n("S+0I"),
                a = n("66mo"),
                i = n.n(a),
                o = n("5nld"),
                s = n("XqCI"),
                c = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t ? "?".concat((0, s.E2)(t)) : "", e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v1/public/future/strategy/arbitrage/symbols".concat(r));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: []
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = (function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/public/future/strategy/arbitrage/coef");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: {}
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
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/future/strategy/arbitrage/query-uni-mmr");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: []
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
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/place-arbitrage", t);
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
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/query-arbitrage-detail", t);
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
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/cancel-arbitrage", t);
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
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/query-open-arbitrage", t);
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
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, r._)(i().mark((function e() {
                    var t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/user-data/get-um-arbitrage-user-positions", {
                                    strategyUserIds: []
                                });
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
                })))
            })(),
            function() {
                var e = (0, r._)(i().mark((function e() {
                    var t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/user-data/get-cm-arbitrage-user-positions", {
                                    strategyUserIds: []
                                });
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
                })))
            }(),
            function() {
                var e = (0, r._)(i().mark((function e() {
                    var t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/user-data/get-um-arbitrage-user-balances", {
                                    strategyUserIds: []
                                });
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                })))
            }(),
            function() {
                var e = (0, r._)(i().mark((function e() {
                    var t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/user-data/get-cm-arbitrage-user-balances", {
                                    strategyUserIds: []
                                });
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                })))
            }(),
            function() {
                var e = (0, r._)(i().mark((function e() {
                    var t;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/query-open-arbitrage");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: [],
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
                })))
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/query-arbitrage-history", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/add-position", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/remove-position", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/query-arbitrage-fundingfee", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/query-arbitrage-operation-history", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/composite/v1/private/bigdata/finance/mini-app2/subscribe/subscribe", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/composite/v1/private/bigdata/finance/mini-app2/subscribe/unSubscribe", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/composite/v1/private/bigdata/finance/mini-app2/subscribe/isSubscribe", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/arbitrage/cancel-arbitrage-skipspread", t);
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
            }()
        },
        Cadp: (e, t, n) => {
            "use strict";
            n.d(t, {
                I5: () => c,
                N7: () => d,
                NJ: () => v,
                Xt: () => u,
                li: () => l,
                m8: () => p,
                ow: () => f,
                s5: () => m
            });
            var r = n("S+0I"),
                a = n("66mo"),
                i = n.n(a),
                o = n("5nld"),
                s = n("XqCI"),
                c = (function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/public/future/common/strategy/landing-page/config");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: {
                                            hideFuturesStrategy: !0
                                        },
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/public/future/common/strategy/landing-page/introduction");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                u = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r, a, s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.strategyType, r = t.rows, a = t.page, e.prev = 2, e.next = 5, (0, o.bE)("/bapi/futures/v1/public/future/common/strategy/landing-page/queryTopCount", {
                                        strategyType: n,
                                        rows: r,
                                        page: a
                                    });
                                case 5:
                                    s = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), s = {
                                        success: !1,
                                        data: [],
                                        total: 0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", s);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r, a, s;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.strategyType, r = t.rows, a = t.page, e.prev = 2, e.next = 5, (0, o.bE)("/bapi/futures/v1/public/future/common/strategy/landing-page/queryTopVolatility", {
                                        strategyType: n,
                                        rows: r,
                                        page: a
                                    });
                                case 5:
                                    s = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), s = {
                                        success: !1,
                                        data: [],
                                        total: 0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", s);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/public/future/common/strategy/landing-page/queryTopStrategy", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        total: 0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                p = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t ? "?".concat((0, s.E2)(t)) : "", e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v1/public/future/common/strategy/banner/queryBanners".concat(r));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: [],
                                        total: 0,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/future/strategy/landing-page/getRankingSettings");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                }(),
                v = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/landing-page/updateRankingSettings", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                m = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/public/future/common/strategy/landing-page/queryRoiChart", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                }()
        },
        "8zyX": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ci: () => c,
                KO: () => u,
                LR: () => d,
                Mw: () => p,
                S6: () => l
            });
            var r = n("S+0I"),
                a = n("66mo"),
                i = n.n(a),
                o = n("5nld"),
                s = n("XqCI"),
                c = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v2/private/strategy/grid/place-grid", t);
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
                }(),
                u = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/strategy/grid/cancel-grid", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                                    return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/strategy/grid/update-grid", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                l = (function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t, n, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-open-grids?".concat((0, s.E2)(t)));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t, n, r, a = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, r = Object.keys(t).length ? "?".concat((0, s.E2)(t)) : "", e.prev = 3, e.next = 6, (0, o.Jt)("/bapi/futures/v2/private/strategy/grid/query-open-grids".concat(r));
                                case 6:
                                    n = e.sent, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 12:
                                    return e.abrupt("return", n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                d = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-grid-detail?".concat((0, s.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                        var t, n, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-grid-history?".concat((0, s.E2)(t)));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t, n, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v2/private/strategy/grid/query-grid-history?".concat((0, s.E2)(t)));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-grid-open-items?".concat((0, s.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                        var t, n, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-grid-matched-items?".concat((0, s.E2)(t)));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e() {
                        var t, n, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, e.prev = 2, e.next = 5, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-grid-commissions?".concat((0, s.E2)(t)));
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(2), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
                                    };
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-matched-info?".concat((0, s.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/config");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                p = (function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/public/strategy/grid/recommending-params?".concat((0, s.E2)(t)));
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
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/margin/v2/public/asset-service/product/get-product-by-symbol?".concat((0, s.E2)(t)));
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
                                    return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/public/strategy/grid/all-recommending-params?".concat((0, s.E2)(t)));
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
                        var n, r, a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, r = "/api/v3/ticker/24hr", a = (0, s.Eg)("".concat((null === t || void 0 === t ? void 0 : t.host) ? "".concat(t.host).concat(r) : r), {}), e.next = 6, (0, o.Jt)(a);
                                case 6:
                                    n = e.sent, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(1), n = [];
                                case 12:
                                    return e.abrupt("return", n);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.Jt)("/bapi/futures/v1/private/strategy/grid/query-grid-trailing-records?".concat((0, s.E2)(t)));
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            })(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/strategy/grid/withdraw-profit", t);
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
            }(),
            function() {
                var e = (0, r._)(i().mark((function e(t) {
                    var n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.bE)("/bapi/futures/v1/private/future/strategy/user-data/query-operate-record", t);
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
        Fv9w: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                generateFvideoToken: () => Yt,
                generateToken: () => Jt,
                getFvideoId: () => Kt,
                syncLocalDfp: () => Wt
            });
            var r, a = n("S+0I"),
                i = n("66mo"),
                o = n.n(i),
                s = "undefined" !== typeof window,
                c = !("undefined" === typeof window || !(null === (r = window) || void 0 === r ? void 0 : r.__RUN_BY_ELECTRON__)),
                u = !! function() {
                    try {
                        if ("undefined" === typeof window) return "";
                        if (window && window.navigator.userAgent) {
                            var e, t, n, r, a = window.navigator.userAgent;
                            return /BNC\/[\d\.]+/i.test(a) ? null === a || void 0 === a || null === (e = a.match) || void 0 === e || null === (t = e.call(a, /BNC\/[\d\.]+/i)) || void 0 === t || null === (n = t[0]) || void 0 === n || null === (r = n.slice) || void 0 === r ? void 0 : r.call(n, 4) : ""
                        }
                        return ""
                    } catch (i) {
                        return ""
                    }
                }();

            function l(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }
            var d = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                p = function(e) {
                    if (!s || !d(e)) return null;
                    if (c) {
                        if ("BNC-Location" === e) return window.__store.getState().temp.bncLocation;
                        var t = window.localStorage.getItem("APP_COOKIES_".concat(e));
                        return t ? l(t) : null
                    }
                    for (var n = "".concat(e, "=").trim(), r = ((document || {}).cookie || "").split(";"), a = 0; a < r.length; a++) {
                        var i = (r[a] || "").trim();
                        if (0 === i.indexOf(n)) {
                            var o = i.slice(n.length).trim();
                            return l('"' === o[0] ? o.slice(1, -1) : o)
                        }
                    }
                    return null
                },
                f = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (s && d(e)) {
                        c && (t ? window.localStorage.setItem("APP_COOKIES_".concat(e), encodeURIComponent(t)) : window.localStorage.removeItem("APP_COOKIES_".concat(e)));
                        var a = ["path=/"];
                        r && a.unshift("Domain=".concat(function() {
                            var e = window.location.hostname,
                                t = e.split(".");
                            return t.length > 2 ? t.slice(-2).join(".") : e
                        }())), Number.isNaN(+n) || a.unshift("Max-Age=".concat(Math.floor(86400 * n))), a.unshift("".concat(e, "=").concat(encodeURIComponent(t))), document.cookie = a.join("; ")
                    }
                },
                v = "2024.12.17",
                m = "unknown",
                h = "BNC_FV_KEY",
                g = "BNC_FV_KEY_EXPIRE",
                b = n("hrAD"),
                y = n("qoEP"),
                w = n("EnBZ"),
                _ = function() {
                    return _ = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }, _.apply(this, arguments)
                };

            function x(e, t, n, r) {
                return new(n || (n = Promise))((function(a, i) {
                    var o = function(e) {
                            try {
                                c(r.next(e))
                            } catch (t) {
                                i(t)
                            }
                        },
                        s = function(e) {
                            try {
                                c(r.throw(e))
                            } catch (t) {
                                i(t)
                            }
                        },
                        c = function(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, (0, w._)(t, n) ? t : new n((function(e) {
                                e(t)
                            }))).then(o, s)
                        };
                    c((r = r.apply(e, t || [])).next())
                }))
            }

            function T(e, t) {
                var n, r, a, i, o = function(o) {
                        return function(c) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i && (i = 0, o[0] && (s = 0)), s;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < a[1]) {
                                                s.label = a[1], a = o;
                                                break
                                            }
                                            if (a && s.label < a[2]) {
                                                s.label = a[2], s.ops.push(o);
                                                break
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, s)
                                } catch (c) {
                                    o = [6, c], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, c])
                        }
                    },
                    s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i
            }

            function E(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, a = 0, i = t.length; a < i; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
                return e.concat(r || Array.prototype.slice.call(t))
            }

            function k(e, t) {
                return new Promise((function(n) {
                    return setTimeout(n, e, t)
                }))
            }

            function S(e) {
                return !!e && "function" == typeof e.then
            }

            function A(e, t) {
                try {
                    var n = e();
                    S(n) ? n.then((function(e) {
                        return t(!0, e)
                    }), (function(e) {
                        return t(!1, e)
                    })) : t(!0, n)
                } catch (r) {
                    t(!1, r)
                }
            }

            function C(e, t, n) {
                return void 0 === n && (n = 16), x(this, void 0, void 0, (function() {
                    var r, a, i, o;
                    return T(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                r = Array(e.length), a = Date.now(), i = 0, s.label = 1;
                            case 1:
                                return i < e.length ? (r[i] = t(e[i], i), (o = Date.now()) >= a + n ? (a = o, [4, new Promise((function(e) {
                                    var t = new MessageChannel;
                                    t.port1.onmessage = function() {
                                        return e()
                                    }, t.port2.postMessage(null)
                                }))]) : [3, 3]) : [3, 4];
                            case 2:
                                s.sent(), s.label = 3;
                            case 3:
                                return ++i, [3, 1];
                            case 4:
                                return [2, r]
                        }
                    }))
                }))
            }

            function R(e) {
                return e.then(void 0, (function() {})), e
            }

            function I(e) {
                return parseInt(e)
            }

            function N(e) {
                return parseFloat(e)
            }

            function O(e, t) {
                return "number" == typeof e && isNaN(e) ? t : e
            }

            function P(e) {
                return e.reduce((function(e, t) {
                    return e + (t ? 1 : 0)
                }), 0)
            }

            function L(e, t) {
                if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
                var n = 1 / t;
                return Math.round(e * n) / n
            }

            function M(e, t) {
                var n = e[0] >>> 16,
                    r = 65535 & e[0],
                    a = e[1] >>> 16,
                    i = 65535 & e[1],
                    o = t[0] >>> 16,
                    s = 65535 & t[0],
                    c = t[1] >>> 16,
                    u = 0,
                    l = 0,
                    d = 0,
                    p = 0;
                d += (p += i + (65535 & t[1])) >>> 16, p &= 65535, l += (d += a + c) >>> 16, d &= 65535, u += (l += r + s) >>> 16, l &= 65535, u += n + o, u &= 65535, e[0] = u << 16 | l, e[1] = d << 16 | p
            }

            function D(e, t) {
                var n = e[0] >>> 16,
                    r = 65535 & e[0],
                    a = e[1] >>> 16,
                    i = 65535 & e[1],
                    o = t[0] >>> 16,
                    s = 65535 & t[0],
                    c = t[1] >>> 16,
                    u = 65535 & t[1],
                    l = 0,
                    d = 0,
                    p = 0,
                    f = 0;
                p += (f += i * u) >>> 16, f &= 65535, d += (p += a * u) >>> 16, p &= 65535, d += (p += i * c) >>> 16, p &= 65535, l += (d += r * u) >>> 16, d &= 65535, l += (d += a * c) >>> 16, d &= 65535, l += (d += i * s) >>> 16, d &= 65535, l += n * u + r * c + a * s + i * o, l &= 65535, e[0] = l << 16 | d, e[1] = p << 16 | f
            }

            function V(e, t) {
                var n = e[0];
                32 === (t %= 64) ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
            }

            function j(e, t) {
                0 !== (t %= 64) && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
            }

            function F(e, t) {
                e[0] ^= t[0], e[1] ^= t[1]
            }
            var U = [4283543511, 3981806797],
                G = [3301882366, 444984403];

            function B(e) {
                var t = [0, e[0] >>> 1];
                F(e, t), D(e, U), t[1] = e[0] >>> 1, F(e, t), D(e, G), t[1] = e[0] >>> 1, F(e, t)
            }
            var z = [2277735313, 289559509],
                H = [1291169091, 658871167],
                W = [0, 5],
                q = [0, 1390208809],
                Y = [0, 944331445];

            function J(e, t) {
                var n = function(e) {
                    for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        if (r > 127) return (new TextEncoder).encode(e);
                        t[n] = r
                    }
                    return t
                }(e);
                t = t || 0;
                var r, a = [0, n.length],
                    i = a[1] % 16,
                    o = a[1] - i,
                    s = [0, t],
                    c = [0, t],
                    u = [0, 0],
                    l = [0, 0];
                for (r = 0; r < o; r += 16) u[0] = n[r + 4] | n[r + 5] << 8 | n[r + 6] << 16 | n[r + 7] << 24, u[1] = n[r] | n[r + 1] << 8 | n[r + 2] << 16 | n[r + 3] << 24, l[0] = n[r + 12] | n[r + 13] << 8 | n[r + 14] << 16 | n[r + 15] << 24, l[1] = n[r + 8] | n[r + 9] << 8 | n[r + 10] << 16 | n[r + 11] << 24, D(u, z), V(u, 31), D(u, H), F(s, u), V(s, 27), M(s, c), D(s, W), M(s, q), D(l, H), V(l, 33), D(l, z), F(c, l), V(c, 31), M(c, s), D(c, W), M(c, Y);
                u[0] = 0, u[1] = 0, l[0] = 0, l[1] = 0;
                var d = [0, 0];
                switch (i) {
                    case 15:
                        d[1] = n[r + 14], j(d, 48), F(l, d);
                    case 14:
                        d[1] = n[r + 13], j(d, 40), F(l, d);
                    case 13:
                        d[1] = n[r + 12], j(d, 32), F(l, d);
                    case 12:
                        d[1] = n[r + 11], j(d, 24), F(l, d);
                    case 11:
                        d[1] = n[r + 10], j(d, 16), F(l, d);
                    case 10:
                        d[1] = n[r + 9], j(d, 8), F(l, d);
                    case 9:
                        d[1] = n[r + 8], F(l, d), D(l, H), V(l, 33), D(l, z), F(c, l);
                    case 8:
                        d[1] = n[r + 7], j(d, 56), F(u, d);
                    case 7:
                        d[1] = n[r + 6], j(d, 48), F(u, d);
                    case 6:
                        d[1] = n[r + 5], j(d, 40), F(u, d);
                    case 5:
                        d[1] = n[r + 4], j(d, 32), F(u, d);
                    case 4:
                        d[1] = n[r + 3], j(d, 24), F(u, d);
                    case 3:
                        d[1] = n[r + 2], j(d, 16), F(u, d);
                    case 2:
                        d[1] = n[r + 1], j(d, 8), F(u, d);
                    case 1:
                        d[1] = n[r], F(u, d), D(u, z), V(u, 31), D(u, H), F(s, u)
                }
                return F(s, a), F(c, a), M(s, c), M(c, s), B(s), B(c), M(s, c), M(c, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }

            function K(e) {
                return "function" != typeof e
            }

            function Z() {
                var e = window,
                    t = navigator;
                return P(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
            }

            function X() {
                var e = window,
                    t = navigator;
                return P(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function Q() {
                var e = window;
                return P(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === navigator.vendor.indexOf("Apple"), "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
            }

            function $() {
                var e = window,
                    t = e.HTMLElement,
                    n = e.Document;
                return P(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
            }

            function ee() {
                var e, t = window;
                return e = t.print, /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e)) && "[object WebPageNamespace]" === String(t.browser)
            }

            function te() {
                var e, t, n = window;
                return P(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
            }

            function ne() {
                var e = window,
                    t = navigator,
                    n = e.CSS,
                    r = e.HTMLButtonElement;
                return P([!("getStorageUpdates" in t), r && "popover" in r.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4
            }

            function re() {
                var e = X(),
                    t = te(),
                    n = window,
                    r = navigator,
                    a = "connection";
                return e ? P([!("SharedWorker" in n), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : !!t && P(["onorientationchange" in n, "orientation" in n, /android/i.test(r.appVersion)]) >= 2
            }

            function ae(e) {
                var t = new Error(e);
                return t.name = e, t
            }

            function ie(e, t, n) {
                var r, a, i;
                return void 0 === n && (n = 50), x(this, void 0, void 0, (function() {
                    var o, s;
                    return T(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                o = document, c.label = 1;
                            case 1:
                                return o.body ? [3, 3] : [4, k(n)];
                            case 2:
                                return c.sent(), [3, 1];
                            case 3:
                                s = o.createElement("iframe"), c.label = 4;
                            case 4:
                                return c.trys.push([4, , 10, 11]), [4, new Promise((function(e, n) {
                                    var r = !1,
                                        a = function() {
                                            r = !0, e()
                                        };
                                    s.onload = a, s.onerror = function(e) {
                                        r = !0, n(e)
                                    };
                                    var i = s.style;
                                    i.setProperty("display", "block", "important"), i.position = "absolute", i.top = "0", i.left = "0", i.visibility = "hidden", t && "srcdoc" in s ? s.srcdoc = t : s.src = "about:blank", o.body.appendChild(s);
                                    var c = function() {
                                        var e, t;
                                        r || ("complete" === (null === (t = null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? a() : setTimeout(c, 10))
                                    };
                                    c()
                                }))];
                            case 5:
                                c.sent(), c.label = 6;
                            case 6:
                                return (null === (a = null === (r = s.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, k(n)];
                            case 7:
                                return c.sent(), [3, 6];
                            case 8:
                                return [4, e(s, s.contentWindow)];
                            case 9:
                                return [2, c.sent()];
                            case 10:
                                return null === (i = s.parentNode) || void 0 === i || i.removeChild(s), [7];
                            case 11:
                                return [2]
                        }
                    }))
                }))
            }

            function oe(e) {
                for (var t = function(e) {
                        for (var t, n, r = "Unexpected syntax '".concat(e, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(e), i = a[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                                o[e] = o[e] || [], o[e].push(t)
                            };;) {
                            var u = s.exec(a[2]);
                            if (!u) break;
                            var l = u[0];
                            switch (l[0]) {
                                case ".":
                                    c("class", l.slice(1));
                                    break;
                                case "#":
                                    c("id", l.slice(1));
                                    break;
                                case "[":
                                    var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                                    if (!d) throw new Error(r);
                                    c(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                                    break;
                                default:
                                    throw new Error(r)
                            }
                        }
                        return [i, o]
                    }(e), n = t[0], r = t[1], a = document.createElement(null != n ? n : "div"), i = 0, o = Object.keys(r); i < o.length; i++) {
                    var s = o[i],
                        c = r[s].join(" ");
                    "style" === s ? se(a.style, c) : a.setAttribute(s, c)
                }
                return a
            }

            function se(e, t) {
                for (var n = 0, r = t.split(";"); n < r.length; n++) {
                    var a = r[n],
                        i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
                    if (i) {
                        var o = i[1],
                            s = i[2],
                            c = i[4];
                        e.setProperty(o, s, c || "")
                    }
                }
            }
            var ce, ue, le = ["monospace", "sans-serif", "serif"],
                de = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function pe(e) {
                return e.toDataURL()
            }

            function fe() {
                var e = this;
                return function() {
                        if (void 0 === ue) {
                            var e = function() {
                                var t = ve();
                                me(t) ? ue = setTimeout(e, 2500) : (ce = t, ue = void 0)
                            };
                            e()
                        }
                    }(),
                    function() {
                        return x(e, void 0, void 0, (function() {
                            var e;
                            return T(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return me(e = ve()) ? ce ? [2, E([], ce, !0)] : function() {
                                            var e = document;
                                            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
                                        }() ? [4, (n = document, (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                                    case 1:
                                        t.sent(), e = ve(), t.label = 2;
                                    case 2:
                                        return me(e) || (ce = e), [2, e]
                                }
                                var n
                            }))
                        }))
                    }
            }

            function ve() {
                var e = screen;
                return [O(N(e.availTop), null), O(N(e.width) - N(e.availWidth) - O(N(e.availLeft), 0), null), O(N(e.height) - N(e.availHeight) - O(N(e.availTop), 0), null), O(N(e.availLeft), null)]
            }

            function me(e) {
                for (var t = 0; t < 4; ++t)
                    if (e[t]) return !1;
                return !0
            }

            function he(e) {
                var t;
                return x(this, void 0, void 0, (function() {
                    var n, r, a, i, o, s, c;
                    return T(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                for (n = document, r = n.createElement("div"), a = new Array(e.length), i = {}, ge(r), c = 0; c < e.length; ++c) "DIALOG" === (o = oe(e[c])).tagName && o.show(), ge(s = n.createElement("div")), s.appendChild(o), r.appendChild(s), a[c] = o;
                                u.label = 1;
                            case 1:
                                return n.body ? [3, 3] : [4, k(50)];
                            case 2:
                                return u.sent(), [3, 1];
                            case 3:
                                n.body.appendChild(r);
                                try {
                                    for (c = 0; c < e.length; ++c) a[c].offsetParent || (i[e[c]] = !0)
                                } finally {
                                    null === (t = r.parentNode) || void 0 === t || t.removeChild(r)
                                }
                                return [2, i]
                        }
                    }))
                }))
            }

            function ge(e) {
                e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
            }

            function be(e) {
                return matchMedia("(inverted-colors: ".concat(e, ")")).matches
            }

            function ye(e) {
                return matchMedia("(forced-colors: ".concat(e, ")")).matches
            }

            function we(e) {
                return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
            }

            function _e(e) {
                return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
            }

            function xe(e) {
                return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
            }

            function Te(e) {
                return matchMedia("(dynamic-range: ".concat(e, ")")).matches
            }
            var Ee = Math,
                ke = function() {
                    return 0
                },
                Se = {
                    default: [],
                    apple: [{
                        font: "-apple-system-body"
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: "monospace"
                    }],
                    min: [{
                        fontSize: "1px"
                    }],
                    system: [{
                        fontFamily: "system-ui"
                    }]
                },
                Ae = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                Ce = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                Re = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                Ie = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"];

            function Ne(e) {
                if (e.webgl) return e.webgl.context;
                var t, n = document.createElement("canvas");
                n.addEventListener("webglCreateContextError", (function() {
                    return t = void 0
                }));
                for (var r = 0, a = ["webgl", "experimental-webgl"]; r < a.length; r++) {
                    var i = a[r];
                    try {
                        t = n.getContext(i)
                    } catch (o) {}
                    if (t) break
                }
                return e.webgl = {
                    context: t
                }, t
            }

            function Oe(e, t, n) {
                var r = e.getShaderPrecisionFormat(e[t], e[n]);
                return r ? [r.rangeMin, r.rangeMax, r.precision] : []
            }

            function Pe(e) {
                return Object.keys(e.__proto__).filter(Le)
            }

            function Le(e) {
                return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
            }

            function Me() {
                return te()
            }

            function De(e) {
                return "function" == typeof e.getParameter
            }
            var Ve = {
                fonts: function() {
                    var e = this;
                    return ie((function(t, n) {
                        var r = n.document;
                        return x(e, void 0, void 0, (function() {
                            var e, t, n, a, i, o, s, c, u, l, d;
                            return T(this, (function(p) {
                                for ((e = r.body).style.fontSize = "48px", (t = r.createElement("div")).style.setProperty("visibility", "hidden", "important"), n = {}, a = {}, i = function(e) {
                                        var n = r.createElement("span"),
                                            a = n.style;
                                        return a.position = "absolute", a.top = "0", a.left = "0", a.fontFamily = e, n.textContent = "mmMwWLliI0O&1", t.appendChild(n), n
                                    }, o = function(e, t) {
                                        return i("'".concat(e, "',").concat(t))
                                    }, s = function() {
                                        for (var e = {}, t = function(t) {
                                                e[t] = le.map((function(e) {
                                                    return o(t, e)
                                                }))
                                            }, n = 0, r = de; n < r.length; n++) t(r[n]);
                                        return e
                                    }, c = function(e) {
                                        return le.some((function(t, r) {
                                            return e[r].offsetWidth !== n[t] || e[r].offsetHeight !== a[t]
                                        }))
                                    }, u = le.map(i), l = s(), e.appendChild(t), d = 0; d < le.length; d++) n[le[d]] = u[d].offsetWidth, a[le[d]] = u[d].offsetHeight;
                                return [2, de.filter((function(e) {
                                    return c(l[e])
                                }))]
                            }))
                        }))
                    }))
                },
                domBlockers: function(e) {
                    var t = (void 0 === e ? {} : e).debug;
                    return x(this, void 0, void 0, (function() {
                        var e, n, r, a, i;
                        return T(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return Q() || re() ? (s = atob, e = {
                                        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', s("I0JveC1CYW5uZXItYWRz")],
                                        abpvn: [".quangcao", "#mobileCatfish", s("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                                        adBlockFinland: [".mainostila", s("LnNwb25zb3JpdA=="), ".ylamainos", s("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", s("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", s("LmhlYWRlci1ibG9ja2VkLWFk"), s("I2FkX2Jsb2NrZXI=")],
                                        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                                        adGuardBase: [".BetterJsPopOverlay", s("I2FkXzMwMFgyNTA="), s("I2Jhbm5lcmZsb2F0MjI="), s("I2NhbXBhaWduLWJhbm5lcg=="), s("I0FkLUNvbnRlbnQ=")],
                                        adGuardChinese: [s("LlppX2FkX2FfSA=="), s("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", s("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), s("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                        adGuardFrench: ["#pavePub", s("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", s("LmFkc19iYW4=")],
                                        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                                        adGuardJapanese: ["#kauli_yad_1", s("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), s("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), s("LmFkZ29vZ2xl"), s("Ll9faXNib29zdFJldHVybkFk")],
                                        adGuardMobile: [s("YW1wLWF1dG8tYWRz"), s("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", s("I2FkX2ludmlld19hcmVh")],
                                        adGuardRussian: [s("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), s("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', s("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                                        adGuardSocial: [s("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), s("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                                        adGuardTrackingProtection: ["#qoo-counter", s("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), s("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), s("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                        adGuardTurkish: ["#backkapat", s("I3Jla2xhbWk="), s("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), s("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), s("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                        bulgarian: [s("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                                        easyList: [".yb-floorad", s("LndpZGdldF9wb19hZHNfd2lkZ2V0"), s("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", s("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                                        easyListChina: [s("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), s("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                                        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", s("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                                        easyListCzechSlovak: ["#onlajny-stickers", s("I3Jla2xhbW5pLWJveA=="), s("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", s("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                        easyListDutch: [s("I2FkdmVydGVudGll"), s("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", s("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                        easyListGermany: ["#SSpotIMPopSlider", s("LnNwb25zb3JsaW5rZ3J1ZW4="), s("I3dlcmJ1bmdza3k="), s("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), s("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                                        easyListItaly: [s("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", s("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                        easyListLithuania: [s("LnJla2xhbW9zX3RhcnBhcw=="), s("LnJla2xhbW9zX251b3JvZG9z"), s("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), s("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), s("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                        estonian: [s("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                                        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                                        frellwitSwedish: [s("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), s("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", s("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                        greekAdBlock: [s("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), s("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), s("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", s("LmFkX19tYWlu"), s("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                                        icelandicAbp: [s("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                        latvian: [s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                        listKr: [s("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), s("I2xpdmVyZUFkV3JhcHBlcg=="), s("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), s("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                        listeAr: [s("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", s("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), s("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), s("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                        listeFr: [s("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), s("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), s("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                        officialPolish: ["#ceneo-placeholder-ceneo-12", s("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), s("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), s("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), s("ZGl2I3NrYXBpZWNfYWQ=")],
                                        ro: [s("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), s("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                        ruAd: [s("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), s("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), s("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                        thaiAds: ["a[href*=macau-uta-popup]", s("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), s("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", s("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                                    }, n = Object.keys(e), [4, he((i = []).concat.apply(i, n.map((function(t) {
                                        return e[t]
                                    }))))]) : [2, void 0];
                                case 1:
                                    return r = o.sent(), t && function(e, t) {
                                        for (var n = "DOM blockers debug:\n```", r = 0, a = Object.keys(e); r < a.length; r++) {
                                            var i = a[r];
                                            n += "\n".concat(i, ":");
                                            for (var o = 0, s = e[i]; o < s.length; o++) {
                                                var c = s[o];
                                                n += "\n  ".concat(t[c] ? "\ud83d\udeab" : "\u27a1\ufe0f", " ").concat(c)
                                            }
                                        }
                                        console.log("".concat(n, "\n```"))
                                    }(e, r), (a = n.filter((function(t) {
                                        var n = e[t];
                                        return P(n.map((function(e) {
                                            return r[e]
                                        }))) > .6 * n.length
                                    }))).sort(), [2, a]
                            }
                            var s
                        }))
                    }))
                },
                fontPreferences: function() {
                    return void 0 === e && (e = 4e3), ie((function(t, n) {
                        var r = n.document,
                            a = r.body,
                            i = a.style;
                        i.width = "".concat(e, "px"), i.webkitTextSizeAdjust = i.textSizeAdjust = "none", X() ? a.style.zoom = "".concat(1 / n.devicePixelRatio) : Q() && (a.style.zoom = "reset");
                        var o = r.createElement("div");
                        return o.textContent = E([], Array(e / 20 | 0), !0).map((function() {
                                return "word"
                            })).join(" "), a.appendChild(o),
                            function(e, t) {
                                for (var n = {}, r = {}, a = 0, i = Object.keys(Se); a < i.length; a++) {
                                    var o = i[a],
                                        s = Se[o],
                                        c = s[0],
                                        u = void 0 === c ? {} : c,
                                        l = s[1],
                                        d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                                        p = e.createElement("span");
                                    p.textContent = d, p.style.whiteSpace = "nowrap";
                                    for (var f = 0, v = Object.keys(u); f < v.length; f++) {
                                        var m = v[f],
                                            h = u[m];
                                        void 0 !== h && (p.style[m] = h)
                                    }
                                    n[o] = p, t.append(e.createElement("br"), p)
                                }
                                for (var g = 0, b = Object.keys(Se); g < b.length; g++) r[o = b[g]] = n[o].getBoundingClientRect().width;
                                return r
                            }(r, a)
                    }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                    var e
                },
                audio: function() {
                    return Q() && ne() && ee() || X() && function() {
                        var e = navigator,
                            t = window,
                            n = Audio.prototype,
                            r = t.visualViewport;
                        return P(["srLatency" in n, "srChannelCount" in n, "devicePosture" in e, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
                    }() && (t = (e = window).URLPattern, P(["union" in Set.prototype, "Iterator" in e, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3) ? -4 : function() {
                        var e = window,
                            t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                        if (!t) return -2;
                        if (Q() && !$() && ! function() {
                                var e = window;
                                return P(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
                            }()) return -1;
                        var n = new t(1, 5e3, 44100),
                            r = n.createOscillator();
                        r.type = "triangle", r.frequency.value = 1e4;
                        var a = n.createDynamicsCompressor();
                        a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, r.connect(a), a.connect(n.destination), r.start(0);
                        var i = function(e) {
                                var t = function() {};
                                return [new Promise((function(n, r) {
                                    var a = !1,
                                        i = 0,
                                        o = 0;
                                    e.oncomplete = function(e) {
                                        return n(e.renderedBuffer)
                                    };
                                    var s = function() {
                                            setTimeout((function() {
                                                return r(ae("timeout"))
                                            }), Math.min(500, o + 5e3 - Date.now()))
                                        },
                                        c = function() {
                                            try {
                                                var t = e.startRendering();
                                                switch (S(t) && R(t), e.state) {
                                                    case "running":
                                                        o = Date.now(), a && s();
                                                        break;
                                                    case "suspended":
                                                        document.hidden || i++, a && i >= 3 ? r(ae("suspended")) : setTimeout(c, 500)
                                                }
                                            } catch (n) {
                                                r(n)
                                            }
                                        };
                                    c(), t = function() {
                                        a || (a = !0, o > 0 && s())
                                    }
                                })), t]
                            }(n),
                            o = i[0],
                            s = i[1],
                            c = R(o.then((function(e) {
                                return function(e) {
                                    for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                                    return t
                                }(e.getChannelData(0).subarray(4500))
                            }), (function(e) {
                                if ("timeout" === e.name || "suspended" === e.name) return -3;
                                throw e
                            })));
                        return function() {
                            return s(), c
                        }
                    }();
                    var e, t
                },
                screenFrame: function() {
                    var e = this;
                    if (Q() && ne() && ee()) return function() {
                        return Promise.resolve(void 0)
                    };
                    var t = fe();
                    return function() {
                        return x(e, void 0, void 0, (function() {
                            var e, n;
                            return T(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, t()];
                                    case 1:
                                        return e = r.sent(), [2, [(n = function(e) {
                                            return null === e ? null : L(e, 10)
                                        })(e[0]), n(e[1]), n(e[2]), n(e[3])]]
                                }
                            }))
                        }))
                    }
                },
                canvas: function() {
                    return function(e) {
                        var t, n, r, a, i, o = !1,
                            s = function() {
                                var e = document.createElement("canvas");
                                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
                            }(),
                            c = s[0],
                            u = s[1];
                        return i = c, u && i.toDataURL ? ((a = u).rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), o = !a.isPointInPath(5, 5, "evenodd"), e ? n = r = "skipped" : (n = (t = function(e, t) {
                            ! function(e, t) {
                                e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                                var n = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                                t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
                            }(e, t);
                            var n = pe(e);
                            return n !== pe(e) ? ["unstable", "unstable"] : (function(e, t) {
                                e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                                for (var n = 0, r = [
                                        ["#f2f", 40, 40],
                                        ["#2ff", 80, 40],
                                        ["#ff2", 60, 80]
                                    ]; n < r.length; n++) {
                                    var a = r[n],
                                        i = a[0],
                                        o = a[1],
                                        s = a[2];
                                    t.fillStyle = i, t.beginPath(), t.arc(o, s, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                                }
                                t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
                            }(e, t), [pe(e), n])
                        }(c, u))[0], r = t[1])) : n = r = "unsupported", {
                            winding: o,
                            geometry: n,
                            text: r
                        }
                    }(Q() && ne() && ee())
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, t = navigator,
                        n = [],
                        r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
                    if (void 0 !== r && n.push([r]), Array.isArray(t.languages)) X() && P([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
                    else if ("string" == typeof t.languages) {
                        var a = t.languages;
                        a && n.push(a.split(","))
                    }
                    return n
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return O(N(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    if (!(Q() && ne() && ee())) return function() {
                        var e = screen,
                            t = function(e) {
                                return O(I(e), null)
                            },
                            n = [t(e.width), t(e.height)];
                        return n.sort().reverse(), n
                    }()
                },
                hardwareConcurrency: function() {
                    return O(I(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (t) {
                        var n = (new t).resolvedOptions().timeZone;
                        if (n) return n
                    }
                    var r, a = (r = (new Date).getFullYear(), -Math.max(N(new Date(r, 0, 1).getTimezoneOffset()), N(new Date(r, 6, 1).getTimezoneOffset())));
                    return "UTC".concat(a >= 0 ? "+" : "").concat(a)
                },
                sessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                localStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                indexedDB: function() {
                    if (!Z() && ! function() {
                            var e = window,
                                t = navigator;
                            return P(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !Z()
                        }()) try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                openDatabase: function() {
                    return !!window.openDatabase
                },
                cpuClass: function() {
                    return navigator.cpuClass
                },
                platform: function() {
                    var e = navigator.platform;
                    return "MacIntel" === e && Q() && !$() ? function() {
                        if ("iPad" === navigator.platform) return !0;
                        var e = screen,
                            t = e.width / e.height;
                        return P(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
                    }() ? "iPad" : "iPhone" : e
                },
                plugins: function() {
                    var e = navigator.plugins;
                    if (e) {
                        for (var t = [], n = 0; n < e.length; ++n) {
                            var r = e[n];
                            if (r) {
                                for (var a = [], i = 0; i < r.length; ++i) {
                                    var o = r[i];
                                    a.push({
                                        type: o.type,
                                        suffixes: o.suffixes
                                    })
                                }
                                t.push({
                                    name: r.name,
                                    description: r.description,
                                    mimeTypes: a
                                })
                            }
                        }
                        return t
                    }
                },
                touchSupport: function() {
                    var e, t = navigator,
                        n = 0;
                    void 0 !== t.maxTouchPoints ? n = I(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (E) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: n,
                        touchEvent: e,
                        touchStart: "ontouchstart" in window
                    }
                },
                vendor: function() {
                    return navigator.vendor || ""
                },
                vendorFlavors: function() {
                    for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
                        var r = n[t],
                            a = window[r];
                        a && "object" == typeof a && e.push(r)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var t = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
                    } catch (T) {
                        return !1
                    }
                },
                colorGamut: function() {
                    for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
                        var n = t[e];
                        if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n
                    }
                },
                invertedColors: function() {
                    return !!be("inverted") || !be("none") && void 0
                },
                forcedColors: function() {
                    return !!ye("active") || !ye("none") && void 0
                },
                monochrome: function() {
                    if (matchMedia("(min-monochrome: 0)").matches) {
                        for (var e = 0; e <= 100; ++e)
                            if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
                        throw new Error("Too high value")
                    }
                },
                contrast: function() {
                    return we("no-preference") ? 0 : we("high") || we("more") ? 1 : we("low") || we("less") ? -1 : we("forced") ? 10 : void 0
                },
                reducedMotion: function() {
                    return !!_e("reduce") || !_e("no-preference") && void 0
                },
                reducedTransparency: function() {
                    return !!xe("reduce") || !xe("no-preference") && void 0
                },
                hdr: function() {
                    return !!Te("high") || !Te("standard") && void 0
                },
                math: function() {
                    var e, t = Ee.acos || ke,
                        n = Ee.acosh || ke,
                        r = Ee.asin || ke,
                        a = Ee.asinh || ke,
                        i = Ee.atanh || ke,
                        o = Ee.atan || ke,
                        s = Ee.sin || ke,
                        c = Ee.sinh || ke,
                        u = Ee.cos || ke,
                        l = Ee.cosh || ke,
                        d = Ee.tan || ke,
                        p = Ee.tanh || ke,
                        f = Ee.exp || ke,
                        v = Ee.expm1 || ke,
                        m = Ee.log1p || ke;
                    return {
                        acos: t(.12312423423423424),
                        acosh: n(1e308),
                        acoshPf: (e = 1e154, Ee.log(e + Ee.sqrt(e * e - 1))),
                        asin: r(.12312423423423424),
                        asinh: a(1),
                        asinhPf: Ee.log(1 + Ee.sqrt(2)),
                        atanh: i(.5),
                        atanhPf: Ee.log(3) / 2,
                        atan: o(.5),
                        sin: s(-1e300),
                        sinh: c(1),
                        sinhPf: Ee.exp(1) - 1 / Ee.exp(1) / 2,
                        cos: u(10.000000000123),
                        cosh: l(1),
                        coshPf: (Ee.exp(1) + 1 / Ee.exp(1)) / 2,
                        tan: d(-1e300),
                        tanh: p(1),
                        tanhPf: (Ee.exp(2) - 1) / (Ee.exp(2) + 1),
                        exp: f(1),
                        expm1: v(1),
                        expm1Pf: Ee.exp(1) - 1,
                        log1p: m(10),
                        log1pPf: Ee.log(11),
                        powPI: Ee.pow(Ee.PI, -100)
                    }
                },
                pdfViewerEnabled: function() {
                    return navigator.pdfViewerEnabled
                },
                architecture: function() {
                    var e = new Float32Array(1),
                        t = new Uint8Array(e.buffer);
                    return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
                },
                applePay: function() {
                    var e = window.ApplePaySession;
                    if ("function" != typeof(null == e ? void 0 : e.canMakePayments)) return -1;
                    if (function() {
                            for (var e = window;;) {
                                var t = e.parent;
                                if (!t || t === e) return !1;
                                try {
                                    if (t.location.origin !== e.location.origin) return !0
                                } catch (n) {
                                    if ((0, w._)(n, Error) && "SecurityError" === n.name) return !0;
                                    throw n
                                }
                                e = t
                            }
                        }()) return -3;
                    try {
                        return e.canMakePayments() ? 1 : 0
                    } catch (t) {
                        return function(e) {
                            if ((0, w._)(e, Error) && "InvalidAccessError" === e.name && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
                            throw e
                        }(t)
                    }
                },
                privateClickMeasurement: function() {
                    var e, t = document.createElement("a"),
                        n = null !== (e = t.attributionSourceId) && void 0 !== e ? e : t.attributionsourceid;
                    return void 0 === n ? void 0 : String(n)
                },
                audioBaseLatency: function() {
                    var e;
                    return re() || Q() ? window.AudioContext && null !== (e = (new AudioContext).baseLatency) && void 0 !== e ? e : -1 : -2
                },
                webGlBasics: function(e) {
                    var t, n, r, a, i, o, s = Ne(e.cache);
                    if (!s) return -1;
                    if (!De(s)) return -2;
                    var c = Me() ? null : s.getExtension("WEBGL_debug_renderer_info");
                    return {
                        version: (null === (t = s.getParameter(s.VERSION)) || void 0 === t ? void 0 : t.toString()) || "",
                        vendor: (null === (n = s.getParameter(s.VENDOR)) || void 0 === n ? void 0 : n.toString()) || "",
                        vendorUnmasked: c ? null === (r = s.getParameter(c.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
                        renderer: (null === (a = s.getParameter(s.RENDERER)) || void 0 === a ? void 0 : a.toString()) || "",
                        rendererUnmasked: c ? null === (i = s.getParameter(c.UNMASKED_RENDERER_WEBGL)) || void 0 === i ? void 0 : i.toString() : "",
                        shadingLanguageVersion: (null === (o = s.getParameter(s.SHADING_LANGUAGE_VERSION)) || void 0 === o ? void 0 : o.toString()) || ""
                    }
                },
                webGlExtensions: function(e) {
                    var t = Ne(e.cache);
                    if (!t) return -1;
                    if (!De(t)) return -2;
                    var n = t.getSupportedExtensions(),
                        r = t.getContextAttributes(),
                        a = [],
                        i = [],
                        o = [],
                        s = [],
                        c = [];
                    if (r)
                        for (var u = 0, l = Object.keys(r); u < l.length; u++) {
                            var d = l[u];
                            i.push("".concat(d, "=").concat(r[d]))
                        }
                    for (var p = 0, f = Pe(t); p < f.length; p++) {
                        var v = t[_ = f[p]];
                        o.push("".concat(_, "=").concat(v).concat(Ae.has(v) ? "=".concat(t.getParameter(v)) : ""))
                    }
                    if (n)
                        for (var m = 0, h = n; m < h.length; m++) {
                            var g = h[m];
                            if (!("WEBGL_debug_renderer_info" === g && Me() || "WEBGL_polygon_mode" === g && (X() || Q()))) {
                                var b = t.getExtension(g);
                                if (b)
                                    for (var y = 0, w = Pe(b); y < w.length; y++) {
                                        var _;
                                        v = b[_ = w[y]], s.push("".concat(_, "=").concat(v).concat(Ce.has(v) ? "=".concat(t.getParameter(v)) : ""))
                                    } else a.push(g)
                            }
                        }
                    for (var x = 0, T = Re; x < T.length; x++)
                        for (var E = T[x], k = 0, S = Ie; k < S.length; k++) {
                            var A = S[k],
                                C = Oe(t, E, A);
                            c.push("".concat(E, ".").concat(A, "=").concat(C.join(",")))
                        }
                    return s.sort(), o.sort(), {
                        contextAttributes: i,
                        parameters: o,
                        shaderPrecisions: c,
                        extensions: n,
                        extensionParameters: s,
                        unsupportedExtensions: a
                    }
                }
            };

            function je(e) {
                var t = function(e) {
                        if (re()) return .4;
                        if (Q()) return !$() || ne() && ee() ? .3 : .5;
                        var t = "value" in e.platform ? e.platform.value : "";
                        return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                    }(e),
                    n = L(.99 + .01 * t, 1e-4);
                return {
                    score: t,
                    comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(n))
                }
            }

            function Fe(e) {
                return JSON.stringify(e, (function(e, t) {
                    return (0, w._)(t, Error) ? _({
                        name: (n = t).name,
                        message: n.message,
                        stack: null === (r = n.stack) || void 0 === r ? void 0 : r.split("\n")
                    }, n) : t;
                    var n, r
                }), 2)
            }

            function Ue(e) {
                return J(function(e) {
                    for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
                        var a = r[n],
                            i = e[a],
                            o = "error" in i ? "error" : JSON.stringify(i.value);
                        t += "".concat(t ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
                    }
                    return t
                }(e))
            }

            function Ge(e, t) {
                var n = Date.now();
                return {
                    get: function(r) {
                        return x(this, void 0, void 0, (function() {
                            var a, i, o;
                            return T(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return a = Date.now(), [4, e()];
                                    case 1:
                                        return i = s.sent(), o = function(e) {
                                            var t;
                                            return {
                                                get visitorId() {
                                                    return void 0 === t && (t = Ue(this.components)), t
                                                },
                                                set visitorId(e) {
                                                    t = e
                                                },
                                                confidence: je(e),
                                                components: e,
                                                version: "4.5.1"
                                            }
                                        }(i), (t || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(a - n, "\nvisitorId: ").concat(o.visitorId, "\ncomponents: ").concat(Fe(i), "\n```")), [2, o]
                                }
                            }))
                        }))
                    }
                }
            }
            var Be = {
                    load: function(e) {
                        return void 0 === e && (e = {}), x(this, void 0, void 0, (function() {
                            var t, n, r;
                            return T(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e.monitoring, t = e.delayFallback, n = e.debug, [4, (i = t, void 0 === i && (i = 50), function(e, t) {
                                            void 0 === t && (t = 1 / 0);
                                            var n = window.requestIdleCallback;
                                            return n ? new Promise((function(e) {
                                                return n.call(window, (function() {
                                                    return e()
                                                }), {
                                                    timeout: t
                                                })
                                            })) : k(Math.min(e, t))
                                        }(i, 2 * i))];
                                    case 1:
                                        return a.sent(), r = function(e, t, n, r) {
                                            var a = Object.keys(e).filter((function(e) {
                                                    return ! function(e, t) {
                                                        for (var n = 0, r = e.length; n < r; ++n)
                                                            if (e[n] === t) return !0;
                                                        return !1
                                                    }(n, e)
                                                })),
                                                i = R(C(a, (function(n) {
                                                    return function(e, t) {
                                                        var n = R(new Promise((function(n) {
                                                            var r = Date.now();
                                                            A(e.bind(null, t), (function() {
                                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                                var a = Date.now() - r;
                                                                if (!e[0]) return n((function() {
                                                                    return {
                                                                        error: e[1],
                                                                        duration: a
                                                                    }
                                                                }));
                                                                var i = e[1];
                                                                if (K(i)) return n((function() {
                                                                    return {
                                                                        value: i,
                                                                        duration: a
                                                                    }
                                                                }));
                                                                n((function() {
                                                                    return new Promise((function(e) {
                                                                        var t = Date.now();
                                                                        A(i, (function() {
                                                                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                                                            var i = a + Date.now() - t;
                                                                            if (!n[0]) return e({
                                                                                error: n[1],
                                                                                duration: i
                                                                            });
                                                                            e({
                                                                                value: n[1],
                                                                                duration: i
                                                                            })
                                                                        }))
                                                                    }))
                                                                }))
                                                            }))
                                                        })));
                                                        return function() {
                                                            return n.then((function(e) {
                                                                return e()
                                                            }))
                                                        }
                                                    }(e[n], t)
                                                }), r));
                                            return function() {
                                                return x(this, void 0, void 0, (function() {
                                                    var e, t, n, o;
                                                    return T(this, (function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                return [4, i];
                                                            case 1:
                                                                return [4, C(s.sent(), (function(e) {
                                                                    return R(e())
                                                                }), r)];
                                                            case 2:
                                                                return e = s.sent(), [4, Promise.all(e)];
                                                            case 3:
                                                                for (t = s.sent(), n = {}, o = 0; o < a.length; ++o) n[a[o]] = t[o];
                                                                return [2, n]
                                                        }
                                                    }))
                                                }))
                                            }
                                        }(Ve, {
                                            cache: {},
                                            debug: n
                                        }, []), [2, Ge(r, n)]
                                }
                                var i
                            }))
                        }))
                    },
                    hashComponents: Ue,
                    componentsToDebugString: Fe
                },
                ze = function() {
                    var e = (0, a._)(o().mark((function e() {
                        var t, n, r, i, s, c;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = function() {
                                        var e, t, n, r;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            platform: null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t ? void 0 : t.platform,
                                            version: null === (n = window.Telegram) || void 0 === n || null === (r = n.WebApp) || void 0 === r ? void 0 : r.version
                                        }
                                    }, n = function() {
                                        var e, t, n, r, a, i, o, s, c, u, l, d, p, f, v, m;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            userId: null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.initDataUnsafe) || void 0 === n || null === (r = n.user) || void 0 === r ? void 0 : r.id,
                                            username: null === (a = window.Telegram) || void 0 === a || null === (i = a.WebApp) || void 0 === i || null === (o = i.initDataUnsafe) || void 0 === o || null === (s = o.user) || void 0 === s ? void 0 : s.username,
                                            userLanguageCode: null === (c = window.Telegram) || void 0 === c || null === (u = c.WebApp) || void 0 === u || null === (l = u.initDataUnsafe) || void 0 === l || null === (d = l.user) || void 0 === d ? void 0 : d.language_code,
                                            userIsBot: null === (p = window.Telegram) || void 0 === p || null === (f = p.WebApp) || void 0 === f || null === (v = f.initDataUnsafe) || void 0 === v || null === (m = v.user) || void 0 === m ? void 0 : m.is_bot
                                        }
                                    }, r = function() {
                                        return {
                                            ua: navigator.userAgent
                                        }
                                    }, i = function() {
                                        var e, t, n, r, a, i, o, s, c, u, l, d;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            isBioInited: null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.BiometricManager) || void 0 === n ? void 0 : n.isInited,
                                            isBioAva: null === (r = window.Telegram) || void 0 === r || null === (a = r.WebApp) || void 0 === a || null === (i = a.BiometricManager) || void 0 === i ? void 0 : i.isBiometricAvailable,
                                            bioType: null === (o = window.Telegram) || void 0 === o || null === (s = o.WebApp) || void 0 === s || null === (c = s.BiometricManager) || void 0 === c ? void 0 : c.biometricType,
                                            bioDeviceId: null === (u = window.Telegram) || void 0 === u || null === (l = u.WebApp) || void 0 === l || null === (d = l.BiometricManager) || void 0 === d ? void 0 : d.deviceId
                                        }
                                    }, s = function() {
                                        var e, t, n;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            chatType: null === (e = window.Telegram) || void 0 === e || null === (t = e.WebApp) || void 0 === t || null === (n = t.initDataUnsafe) || void 0 === n ? void 0 : n.chat_type
                                        }
                                    }, c = function() {
                                        var e = (0, a._)(o().mark((function e() {
                                            var a, c, u, l, d, p, f, v, m, h, g, y, w, _, x, T, E, k, S, A, C, R;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Be.load();
                                                    case 2:
                                                        return a = e.sent, e.next = 5, a.get();
                                                    case 5:
                                                        return c = e.sent, u = c.components, l = u.applePay, d = u.architecture, p = u.audio, f = u.cookiesEnabled, v = u.cpuClass, m = u.deviceMemory, h = u.fonts, g = u.hardwareConcurrency, y = u.hdr, w = u.languages, _ = u.pdfViewerEnabled, x = u.plugins, T = u.screenResolution, E = u.timezone, k = u.touchSupport, S = u.vendor, A = u.webGlBasics, C = {
                                                            applePay: l.value,
                                                            architecture: d.value,
                                                            audio: p.value,
                                                            cookiesEnabled: f.value,
                                                            cpuClass: v.value,
                                                            deviceMemory: m.value,
                                                            fonts: h.value,
                                                            hardwareConcurrency: g.value,
                                                            hdr: y.value,
                                                            languages: w.value,
                                                            pdfViewerEnabled: _.value,
                                                            plugins: x.value,
                                                            screenResolution: T.value,
                                                            timezone: E.value,
                                                            touchSupport: k.value,
                                                            browserVendor: S.value,
                                                            webGlVendor: A.value.vendor,
                                                            webGlVendorUnmasked: A.value.vendorUnmasked,
                                                            webGlRenderer: A.value.renderer,
                                                            webGlRendererUnmasked: A.value.rendererUnmasked,
                                                            webGlVersion: A.value.version
                                                        }, R = (0, b._)({}, t(), r(), i(), n(), s(), C), console.log(R), e.abrupt("return", {});
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.prev = 11, e.next = 14, c();
                                case 14:
                                    return e.abrupt("return", e.sent);
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(11), console.error("Fingerprint error: ", e.t0);
                                case 20:
                                    return e.abrupt("return", Promise.resolve({}));
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [11, 17]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            const He = ze;
            "".concat(h, "_T");

            function We(e) {
                var t, n, r;
                if (!e.t) throw new Error("please make sure config.t and config.domain are not empty");
                return {
                    t: e.t,
                    domain: e.domain || "",
                    storeKey: {
                        device_id_key: (null === e || void 0 === e || null === (t = e.storeKey) || void 0 === t ? void 0 : t.device_id_key) || h,
                        device_dfp_expire_key: (null === e || void 0 === e || null === (n = e.storeKey) || void 0 === n ? void 0 : n.device_dfp_expire_key) || g
                    },
                    fvideo_token_key: "".concat((null === e || void 0 === e || null === (r = e.storeKey) || void 0 === r ? void 0 : r.device_id_key) || h, "_T")
                }
            }
            var qe = function(e) {
                    if (!e) return e;
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                },
                Ye = function() {
                    return "undefined" !== typeof localStorage
                },
                Je = function() {
                    return "undefined" !== typeof sessionStorage
                },
                Ke = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (Ye()) return n.ttl ? localStorage.setItem(e, JSON.stringify({
                        value: t,
                        expire: (new Date).getTime() + n.ttl
                    })) : localStorage.setItem(e, JSON.stringify(t))
                },
                Ze = function(e) {
                    if (Ye()) {
                        var t = localStorage.getItem(e),
                            n = qe(t);
                        return n && n.expire ? n.expire && n.expire > (new Date).getTime() ? n.value : null : n
                    }
                },
                Xe = n("F3rx"),
                Qe = n.n(Xe),
                $e = function(e, t, n) {
                    var r, a = function(e) {
                            if ("undefined" === typeof window) return e;
                            var t = p("cr00");
                            return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = Qe()(t || "")), e
                        }(e) || {},
                        i = {
                            method: t || "GET",
                            mode: "cors",
                            headers: a.headers,
                            credentials: a.credentials,
                            body: n
                        };
                    e.headers && e.headers["Content-Type"] || (null === i || void 0 === i || null === (r = i.headers) || void 0 === r || delete r["Content-Type"]);
                    return i
                },
                et = function() {
                    var e = (0, a._)(o().mark((function e(t, n) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(t, n);
                                case 2:
                                    return r = e.sent, e.next = 5, r.json();
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                tt = function() {
                    var e = (0, a._)(o().mark((function e(t, n) {
                        var r, a = arguments;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = $e(a.length > 2 && void 0 !== a[2] ? a[2] : {}, "POST", n), e.abrupt("return", et(t, r));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                nt = n("iKvg"),
                rt = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = !0,
                        a = !1,
                        i = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                            var c = o.value;
                            if (null !== c && void 0 !== c) return c
                        }
                    } catch (u) {
                        a = !0, i = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                    return null
                },
                at = function(e) {
                    var t, n = e.storeKey.device_id_key,
                        r = e.fvideo_token_key,
                        a = p(n),
                        i = null === (t = Ze(n)) || void 0 === t ? void 0 : t.value,
                        o = p(r),
                        s = function(e) {
                            if (Ye()) return localStorage.getItem(e)
                        }(r);
                    return {
                        dfp: rt(a, i),
                        dt: rt(o, s)
                    }
                },
                it = function(e, t, n) {
                    var r = n.storeKey,
                        a = r.device_id_key,
                        i = r.device_dfp_expire_key,
                        o = n.fvideo_token_key,
                        s = Date.now() + 216e5;
                    f(a, e, 365), f(o, t, 365), f(i, s, 365), Ke(a, (0, nt._)({
                            value: e
                        }, i, s)),
                        function(e, t) {
                            if (Ye()) localStorage.setItem(e, t)
                        }(o, t)
                },
                ot = function(e) {
                    var t = e.storeKey.device_dfp_expire_key,
                        n = p(t);
                    null != n && (n = Number(n));
                    var r = Ze(t);
                    return null != r && "string" === typeof r && (r = Number(n)), rt(n, r)
                };
            var st = 2654435769;

            function ct(e, t) {
                var n = e.length,
                    r = n << 2;
                if (t) {
                    var a = e[n - 1];
                    if (a < (r -= 4) - 3 || a > r) return null;
                    r = a
                }
                for (var i = 0; i < n; i++) e[i] = String.fromCharCode(255 & e[i], e[i] >>> 8 & 255, e[i] >>> 16 & 255, e[i] >>> 24 & 255);
                var o = e.join("");
                return t ? o.substring(0, r) : o
            }

            function ut(e, t) {
                var n, r = e.length,
                    a = r >> 2;
                0 !== (3 & r) && ++a, t ? (n = new Array(a + 1))[a] = r : n = new Array(a);
                for (var i = 0; i < r; ++i) n[i >> 2] |= e.charCodeAt(i) << ((3 & i) << 3);
                return n
            }

            function lt(e) {
                return 4294967295 & e
            }

            function dt(e, t, n, r, a, i) {
                return (n >>> 5 ^ t << 2) + (t >>> 3 ^ n << 4) ^ (e ^ t) + (i[3 & r ^ a] ^ n)
            }

            function pt(e) {
                return e.length < 4 && (e.length = 4), e
            }

            function ft(e) {
                if (/^[\x00-\x7f]*$/.test(e)) return e;
                for (var t = [], n = e.length, r = 0, a = 0; r < n; ++r, ++a) {
                    var i = e.charCodeAt(r);
                    if (i < 128) t[a] = e.charAt(r);
                    else if (i < 2048) t[a] = String.fromCharCode(192 | i >> 6, 128 | 63 & i);
                    else {
                        if (!(i < 55296 || i > 57343)) {
                            if (r + 1 < n) {
                                var o = e.charCodeAt(r + 1);
                                if (i < 56320 && 56320 <= o && o <= 57343) {
                                    var s = 65536 + ((1023 & i) << 10 | 1023 & o);
                                    t[a] = String.fromCharCode(240 | s >> 18 & 63, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s), ++r;
                                    continue
                                }
                            }
                            throw new Error("Malformed string")
                        }
                        t[a] = String.fromCharCode(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i)
                    }
                }
                return t.join("")
            }

            function vt(e, t) {
                return (void 0 === t || null === t || t < 0) && (t = e.length), 0 === t ? "" : /^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e) ? t === e.length ? e : e.substr(0, t) : t < 32767 ? function(e, t) {
                    for (var n = new Array(t), r = 0, a = 0, i = e.length; r < t && a < i; r++) {
                        var o = e.charCodeAt(a++);
                        switch (o >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                n[r] = o;
                                break;
                            case 12:
                            case 13:
                                if (!(a < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                n[r] = (31 & o) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 14:
                                if (!(a + 1 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                n[r] = (15 & o) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 15:
                                if (!(a + 2 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                var s = ((7 & o) << 18 | (63 & e.charCodeAt(a++)) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++)) - 65536;
                                if (!(0 <= s && s <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + s.toString(16));
                                n[r++] = s >> 10 & 1023 | 55296, n[r] = 1023 & s | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + o.toString(16))
                        }
                    }
                    return r < t && (n.length = r), String.fromCharCode.apply(String, n)
                }(e, t) : function(e, t) {
                    for (var n = [], r = new Array(32768), a = 0, i = 0, o = e.length; a < t && i < o; a++) {
                        var s = e.charCodeAt(i++);
                        switch (s >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                r[a] = s;
                                break;
                            case 12:
                            case 13:
                                if (!(i < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[a] = (31 & s) << 6 | 63 & e.charCodeAt(i++);
                                break;
                            case 14:
                                if (!(i + 1 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[a] = (15 & s) << 12 | (63 & e.charCodeAt(i++)) << 6 | 63 & e.charCodeAt(i++);
                                break;
                            case 15:
                                if (!(i + 2 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                var c = ((7 & s) << 18 | (63 & e.charCodeAt(i++)) << 12 | (63 & e.charCodeAt(i++)) << 6 | 63 & e.charCodeAt(i++)) - 65536;
                                if (!(0 <= c && c <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                                r[a++] = c >> 10 & 1023 | 55296, r[a] = 1023 & c | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + s.toString(16))
                        }
                        if (a >= 32766) {
                            var u = a + 1;
                            r.length = u, n[n.length] = String.fromCharCode.apply(String, r), t -= u, a = -1
                        }
                    }
                    return a > 0 && (r.length = a, n[n.length] = String.fromCharCode.apply(String, r)), n.join("")
                }(e, t)
            }

            function mt(e, t) {
                return void 0 === e || null === e || 0 === e.length ? e : (e = ft(e), t = ft(t), ct(function(e, t) {
                    var n, r, a, i, o, s, c = e.length,
                        u = c - 1;
                    for (r = e[u], a = 0, s = 0 | Math.floor(6 + 52 / c); s > 0; --s) {
                        for (i = (a = lt(a + st)) >>> 2 & 3, o = 0; o < u; ++o) n = e[o + 1], r = e[o] = lt(e[o] + dt(a, n, r, o, i, t));
                        n = e[0], r = e[u] = lt(e[u] + dt(a, n, r, u, i, t))
                    }
                    return e
                }(ut(e, !0), pt(ut(t, !1))), !1))
            }

            function ht(e, t) {
                return void 0 === e || null === e || 0 === e.length ? e : (t = ft(t), vt(ct(function(e, t) {
                    var n, r, a, i, o, s = e.length,
                        c = s - 1;
                    for (n = e[0], a = lt(Math.floor(6 + 52 / s) * st); 0 !== a; a = lt(a - st)) {
                        for (i = a >>> 2 & 3, o = c; o > 0; --o) r = e[o - 1], n = e[o] = lt(e[o] - dt(a, n, r, o, i, t));
                        r = e[c], n = e[0] = lt(e[0] - dt(a, n, r, 0, i, t))
                    }
                    return e
                }(ut(e, !1), pt(ut(t, !1))), !0)))
            }
            const gt = {
                utf8Encode: ft,
                utf8Decode: vt,
                encrypt: mt,
                encryptToBase64: function(e, t) {
                    return function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                        return function(t) {
                            var n, r, a, i, o, s, c;
                            for (r = a = 0, i = t.length, s = (i -= o = i % 3) / 3 << 2, o > 0 && (s += 4), n = new Array(s); r < i;) c = t.charCodeAt(r++) << 16 | t.charCodeAt(r++) << 8 | t.charCodeAt(r++), n[a++] = e[c >> 18] + e[c >> 12 & 63] + e[c >> 6 & 63] + e[63 & c];
                            return 1 == o ? (c = t.charCodeAt(r++), n[a++] = e[c >> 2] + e[(3 & c) << 4] + "==") : 2 == o && (c = t.charCodeAt(r++) << 8 | t.charCodeAt(r++), n[a++] = e[c >> 10] + e[c >> 4 & 63] + e[(15 & c) << 2] + "="), n.join("")
                        }
                    }()(mt(e, t))
                },
                decrypt: ht,
                decryptFromBase64: function(e, t) {
                    return void 0 === e || null === e || 0 === e.length ? e : ht(function() {
                        var e = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
                        return function(t) {
                            var n, r, a, i, o, s, c, u, l, d;
                            if ((c = t.length) % 4 !== 0) return "";
                            if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t)) return "";
                            for (l = c, (u = "=" == t.charAt(c - 2) ? 1 : "=" == t.charAt(c - 1) ? 2 : 0) > 0 && (l -= 4), l = 3 * (l >> 2) + u, d = new Array(l), o = s = 0; o < c && -1 != (n = e[t.charCodeAt(o++)]) && -1 != (r = e[t.charCodeAt(o++)]) && (d[s++] = String.fromCharCode(n << 2 | (48 & r) >> 4), -1 != (a = e[t.charCodeAt(o++)])) && (d[s++] = String.fromCharCode((15 & r) << 4 | (60 & a) >> 2), -1 != (i = e[t.charCodeAt(o++)]));) d[s++] = String.fromCharCode((3 & a) << 6 | i);
                            return d.join("")
                        }
                    }()(e), t)
                }
            };
            var bt = function(e) {
                    var t = function(e) {
                            for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = ""; n.length < e;) n += t[Math.floor(62 * Math.random())];
                            return n
                        }(6),
                        n = Date.now(),
                        r = "".concat(e, "|").concat(n),
                        a = gt.encryptToBase64(r, t),
                        i = function(e) {
                            var t = 0,
                                n = !0,
                                r = !1,
                                a = void 0;
                            try {
                                for (var i, o = e[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) t ^= i.value.charCodeAt(0)
                            } catch (c) {
                                r = !0, a = c
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (r) throw a
                                }
                            }
                            var s = t.toString(16);
                            return 2 === s.length ? s : "0".concat(s)
                        }("".concat(t).concat(a));
                    return "".concat(t).concat(a).concat(i)
                },
                yt = function(e, t, n) {
                    var r = "".concat(e.domain, "/fvideo/dt/sign/").concat(n, "?en=YDS&t=").concat(e.t, "&v=").concat(v),
                        a = bt(JSON.stringify(t));
                    try {
                        tt(r, a, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(t) {
                            t.success && it(t.dfp, t.dt, e)
                        }))
                    } catch (i) {}
                },
                wt = function(e, t, n, r, a) {
                    var i = n || t,
                        o = "".concat(e.domain, "/fvideo/dt/report/").concat(a, "?en=YDS&t=").concat(e.t, "&v=").concat(v),
                        s = bt(JSON.stringify((0, y._)((0, b._)({}, r), {
                            dfp: i
                        })));
                    try {
                        tt(o, s, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(t) {
                            t.success && it(t.dfp, t.dt, e)
                        }))
                    } catch (c) {}
                },
                _t = function(e) {
                    var t;
                    t = e, document.cookie = "".concat(t, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                        function(e) {
                            Ye() && localStorage.removeItem(e)
                        }(e),
                        function(e) {
                            Je() && sessionStorage.removeItem(e)
                        }(e)
                },
                xt = function(e) {
                    _t(e.storeKey.device_id_key), _t(e.storeKey.device_dfp_expire_key), _t(e.fvideo_token_key);
                    var t = p("BNC_TG_FV_KEY"),
                        n = p("BNC_TG_FV_KEY_T");
                    return _t("BNC_TG_FV_KEY"), _t("BNC_TG_FV_KEY_T"), _t("BNC_TG_FV_UT"), {
                        dfp: t,
                        dt: n
                    }
                };

            function Tt(e) {
                return Et.apply(this, arguments)
            }

            function Et() {
                return (Et = (0, a._)(o().mark((function e(t) {
                    var n, r, a, i, s, c, l, d;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, "undefined" !== typeof window && !u) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (n = We(t), r = at(n), a = r.dfp, i = r.dt, s = ot(n), a && a.startsWith("3") && (c = xt(n), a = c.dfp, i = c.dt, s = null), !(a && i && s && Number(s) > Date.now())) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return e.next = 13, He();
                            case 13:
                                l = e.sent, d = (0, y._)((0, b._)({}, l), {
                                    deviceTime: Date.now()
                                }), a ? wt(n, a, i, d, "tgma") : yt(n, d, "tgma"), e.next = 21;
                                break;
                            case 18:
                                e.prev = 18, e.t0 = e.catch(0), console.log(e.t0);
                            case 21:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 18]
                    ])
                })))).apply(this, arguments)
            }
            var kt, St = n("ew97"),
                At = n("qGMf"),
                Ct = n.n(At),
                Rt = function(e) {
                    var t, n = Math.floor(Math.abs(e) / 60),
                        r = Math.abs(e % 60);
                    return t = 0 === r ? "".concat(n.toString().padStart(2, "0"), ":00") : "".concat(n.toString().padStart(2, "0"), ":").concat(r.toString().padStart(2, "0")), t = e > 0 ? "-".concat(t) : "+".concat(t), "GMT".concat(t)
                },
                It = function(e) {
                    var t = e.plugins || e.regular_plugins || e.ie_plugins;
                    if (!Array.isArray(t)) return m;
                    var n = [];
                    return t.forEach((function(e) {
                        n.push(e[0])
                    })), n.length > 500 ? n.slice(0, 500).join(",") : n.join(",")
                },
                Nt = function(e) {
                    var t = e[1].replace("canvas fp:data:image/png;base64,", "");
                    try {
                        var n = function(e) {
                            var t, n, r, a = "";
                            for (t = 0, n = (e += "").length; t < n; t++) a += (r = e.charCodeAt(t).toString(16)).length < 2 ? "0".concat(r) : r;
                            return a
                        }(atob(t).slice(-16, -12));
                        return n
                    } catch (r) {
                        return console.warn("Failed to get canvas code: ", r), m
                    }
                },
                Ot = function(e) {
                    var t = {
                        screenResolution: m,
                        avaScreenResolution: m
                    };
                    return e.screenResolution && (t.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && (t.avaScreenResolution = e.availableScreenResolution.join(",")), t
                },
                Pt = function(e) {
                    var t = {
                        vendor: m,
                        renderer: m
                    };
                    if (!e || !e.length) return t;
                    for (var n = e.length, r = 0, a = 0; a < n; a++) {
                        var i = e[a] || "";
                        if (i.indexOf("webgl unmasked vendor:") > -1 ? (t.vendor = i.split("webgl unmasked vendor:")[1] || m, r += 1) : i.indexOf("webgl unmasked renderer:") > -1 && (t.renderer = i.split("webgl unmasked renderer:")[1] || m, r += 1), 2 === r) break
                    }
                    return t
                },
                Lt = {
                    colorDepth: !0,
                    deviceMemory: !0,
                    pixelRatio: !0,
                    hardwareConcurrency: !0,
                    sessionStorage: !0,
                    localStorage: !0,
                    indexedDb: !0,
                    addBehavior: !0,
                    openDatabase: !0,
                    adBlock: !0,
                    hasLiedLanguages: !0,
                    hasLiedResolution: !0,
                    hasLiedOs: !0,
                    hasLiedBrowser: !0,
                    touchSupport: !0,
                    fonts: !0,
                    fontsFlash: !0,
                    enumerateDevices: !0
                };

            function Mt() {
                return kt = kt || (new St.UAParser).getResult()
            }
            var Dt = m,
                Vt = function() {
                    var e = Mt().os;
                    return e && e.name ? "".concat(e.name, " ").concat(e.version) : Dt
                },
                jt = function() {
                    var e = Mt().device;
                    return e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : Dt
                },
                Ft = function() {
                    var e = Mt(),
                        t = e.browser,
                        n = e.os || {};
                    return t && t.name ? "".concat(t.name, " V").concat(t.version, " (").concat(n.name || "", ")") : Dt
                },
                Ut = function() {
                    var e = (0, a._)(o().mark((function e() {
                        var t, n, r, i;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (s) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", Promise.resolve({}));
                                case 2:
                                    if (t = "FV_INFO", n = (0, b._)({}, Lt), !(r = qe(Ze(t)))) {
                                        e.next = 8;
                                        break
                                    }
                                    return r.deviceTime = Date.now(), e.abrupt("return", r);
                                case 8:
                                    return i = function() {
                                        var e = (0, a._)(o().mark((function e() {
                                            var r, a, i, s, c, u;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Ct().getPromise({
                                                            excludes: n
                                                        });
                                                    case 2:
                                                        return r = e.sent, a = r.reduce((function(e, t) {
                                                            return e[t.key] = t.value, e
                                                        }), {}), i = Pt(a.webgl), s = Ot(a), c = {
                                                            resolution: s.screenResolution,
                                                            availableResolution: s.avaScreenResolution,
                                                            systemVersion: Vt(),
                                                            brandModel: jt(),
                                                            sysLanguage: a.language,
                                                            timezone: Rt(a.timezoneOffset),
                                                            timezoneOffset: a.timezoneOffset,
                                                            ua: a.userAgent,
                                                            pluginList: It(a),
                                                            canvas: Nt(a.canvas),
                                                            webglVendor: i.vendor,
                                                            webglRenderer: i.renderer,
                                                            audio: a.audio,
                                                            platform: a.platform,
                                                            webTimezone: a.timezone,
                                                            cpuClass: a.cpuClass,
                                                            doNotTrack: a.doNotTrack,
                                                            deviceName: Ft(),
                                                            domain: document.domain
                                                        }, u = Object.keys(c).sort().map((function(e) {
                                                            return c[e]
                                                        })), c.fingerprint = Ct().x64hash128(u.join(""), 32), Ke(t, JSON.stringify(c), {
                                                            ttl: 864e5
                                                        }), e.abrupt("return", c);
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.prev = 9, e.next = 12, i();
                                case 12:
                                    return e.abrupt("return", e.sent);
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(9), console.error("Fingerprint error: ", e.t0);
                                case 18:
                                    return e.abrupt("return", Promise.resolve({}));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [9, 15]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            const Gt = Ut;

            function Bt(e) {
                return zt.apply(this, arguments)
            }

            function zt() {
                return (zt = (0, a._)(o().mark((function e(t) {
                    var n, r, a, i, s, c, l;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, "undefined" !== typeof window && !u) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (n = We(t), r = at(n), a = r.dfp, i = r.dt, s = ot(n), !(a && i && s && Number(s) > Date.now())) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                return e.next = 12, Gt();
                            case 12:
                                c = e.sent, l = (0, y._)((0, b._)({}, c), {
                                    deviceTime: Date.now()
                                }), a ? wt(n, a, i, l, "web") : yt(n, l, "web"), e.next = 20;
                                break;
                            case 17:
                                e.prev = 17, e.t0 = e.catch(0), console.log(e.t0);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 17]
                    ])
                })))).apply(this, arguments)
            }
            var Ht = {
                t: "",
                client: "",
                domain: "",
                storeKey: {
                    device_id_key: h,
                    device_dfp_expire_key: g
                },
                fvideo_token_key: "".concat(h, "_T")
            };

            function Wt(e) {
                return qt.apply(this, arguments)
            }

            function qt() {
                return (qt = (0, a._)(o().mark((function e(t) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("undefined" === typeof window || !window.Telegram) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, Tt(t);
                            case 3:
                                e.next = 7;
                                break;
                            case 5:
                                return e.next = 7, Bt(t);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Yt = function(e) {
                    return bt(e)
                },
                Jt = function() {
                    var e = p(Ht.fvideo_token_key);
                    return e ? Yt(e) : ""
                },
                Kt = function() {
                    return p(Ht.storeKey.device_id_key) || ""
                }
        },
        o35v: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => u,
                z: () => c
            });
            var r = n("DTvD"),
                a = n("RrWx"),
                i = n.n(a),
                o = n("1/4D");

            function s(e, t) {
                return i()(t) && e in t
            }
            var c = function(e) {
                    var t = (0, o.e)(e),
                        n = (0, r.useContext)(t),
                        a = n.featureGates,
                        i = n.fetch,
                        s = n.lazyFetch;
                    return (0, r.useEffect)((function() {
                        s && i()
                    }), [i, s]), a
                },
                u = function(e, t) {
                    var n = c(e);
                    return n.isLoading || i()(n.result) && t in n.result || console.warn("No featureGates found for key: ".concat(String(t), ", in app: ").concat(e)), {
                        isLoading: n.isLoading,
                        result: s(t, n.result) ? n.result[t] : void 0
                    }
                }
        },
        "0hn9": (e, t, n) => {
            "use strict";
            n.d(t, {
                Py: () => s,
                vz: () => o
            });
            n("DTvD");
            var r = n("MD8j"),
                a = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                i = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userInfo
                },
                o = function() {
                    return (0, r.d4)(a, r.bN) || {}
                },
                s = function() {
                    return (0, r.d4)(i, r.bN) || {}
                }
        },
        HwII: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => a
            });
            var r = n("Bkzn"),
                a = function e() {
                    var t = this;
                    (0, r._)(this, e), this.cbs = {}, this.on = function(e, n) {
                        var r = t;
                        return t.cbs[e] || (t.cbs[e] = []), t.cbs[e].push(n),
                            function() {
                                return r.off(e, n)
                            }
                    }, this.off = function(e, n) {
                        t.cbs[e] || (t.cbs[e] = []), t.cbs[e] = t.cbs[e].filter((function(e) {
                            return e !== n
                        }))
                    }, this.emit = function(e, n) {
                        t.cbs[e] || (t.cbs[e] = []), t.cbs[e].forEach((function(e) {
                            return "function" === typeof e && e(n)
                        }))
                    }
                }
        },
        tM9B: (e, t, n) => {
            "use strict";
            n.d(t, {
                J8: () => v,
                RI: () => m,
                Rd: () => d,
                WQ: () => f,
                Xq: () => c,
                ZV: () => s,
                jL: () => h,
                k3: () => u,
                lw: () => p,
                tY: () => l
            });
            var r = n("t21c"),
                a = n.n(r),
                i = n("TVsB"),
                o = a()((function(e, t) {
                    return new RegExp("\\d(?=(\\d{".concat(t || 3, "})+").concat(e > 0 ? "\\." : "$", ")"), "g")
                }), (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.join(",")
                })),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    e = "number" === typeof e ? e : +e;
                    var n = o(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3);
                    return e.toFixed(Math.max(0, ~~t)).replace(n, "$&,")
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    try {
                        e = "number" === typeof e ? e : +e;
                        var n = Math.max(0, ~~t),
                            r = {
                                minimumFractionDigits: n,
                                maximumFractionDigits: n
                            };
                        return new Intl.NumberFormat("en-US", r).format(e)
                    } catch (a) {
                        return s(e, t)
                    }
                },
                u = function(e, t) {
                    return new i.A(e).dividedBy(t)
                },
                l = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce((function(e, t) {
                        return e.plus(t || 0)
                    }), new i.A(0))
                },
                d = function(e, t) {
                    return new i.A(e).minus(t)
                },
                p = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r;
                    return r = new i.A(t[0] ? 1 : 0), t.forEach((function(e) {
                        r = r.multipliedBy(e || 0)
                    })), r
                },
                f = function(e, t, n) {
                    var r, a;
                    try {
                        r = e.toString().split(".")[1].length
                    } catch (o) {
                        r = 0
                    }
                    try {
                        a = t.toString().split(".")[1].length
                    } catch (s) {
                        a = 0
                    }
                    var i = Math.pow(10, Math.max(r, a));
                    return ((e * i + t * i) / i).toFixed(n ? Math.max(r, a) : 2)
                },
                v = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "round",
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        a = Math.pow(10, t),
                        i = String(e).split(".")[1] || "",
                        o = i.length > t ? i.length : t,
                        c = (+e + 1 / Math.pow(10, o + 3)) * a;
                    if ("string" === typeof n) {
                        c = parseInt((c * Math.pow(10, 2)).toString(), 10) / Math.pow(10, 2), n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "bids";
                            return function() {
                                switch (e) {
                                    case "bids":
                                        return "floor";
                                    case "asks":
                                        return "ceil";
                                    default:
                                        if (Math[e]) return Math[e];
                                        throw new Error("getRoundFunc called with unknown type")
                                }
                            }()
                        }(n)
                    }
                    if ("function" !== typeof n) throw new Error("decRound unknown rounding func");
                    return r ? s(n(c) / a, t) : (n(c) / a).toFixed(t)
                },
                m = function(e, t, n) {
                    return v(e, t, "floor", n)
                };

            function h(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return new i.A(e).toFixed(t, n)
            }
        },
        WMHT: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => te
            });
            var r, a, i = n("iKvg"),
                o = n("u++W"),
                s = n("EzMS"),
                c = n("S+0I"),
                u = n("EnBZ"),
                l = n("hrAD"),
                d = n("qoEP"),
                p = n("70Da"),
                f = n("66mo"),
                v = n.n(f);
            ! function(e) {
                e[e.SERVICE_REQ = 1] = "SERVICE_REQ", e[e.SUBSCRIBE = 2] = "SUBSCRIBE", e[e.UNSUBSCRIBE = 3] = "UNSUBSCRIBE", e[e.LIST_CHANNELS = 4] = "LIST_CHANNELS", e[e.REFRESH_TOKEN = 5] = "REFRESH_TOKEN", e[e.CLEAR_TOKEN = 7] = "CLEAR_TOKEN", e[e.PUBLIC_SERVICE_REQ = 8] = "PUBLIC_SERVICE_REQ", e[e.FRIENDLY_SERVICE_REQ = 9] = "FRIENDLY_SERVICE_REQ", e[e.PING = 10] = "PING"
            }(r || (r = {})),
            function(e) {
                e[e.INVALID_TOKEN = 1] = "INVALID_TOKEN", e[e.INVALID_REQUEST = 2] = "INVALID_REQUEST", e[e.SERVICE_ERROR = 3] = "SERVICE_ERROR"
            }(a || (a = {}));
            var m = {},
                h = !1,
                g = function(e) {
                    h = e
                },
                b = {},
                y = function(e) {
                    var t = e.payload,
                        n = e.callback,
                        a = (0, o.OX)().toString(),
                        i = (0, o.HL)(),
                        c = (0, l._)((0, d._)((0, l._)({}, t), {
                            wsReqId: a,
                            reqTime: (new Date).valueOf()
                        }), t.reqAction === r.PING || t.reqAction === r.LIST_CHANNELS || t.reqAction === r.CLEAR_TOKEN ? {
                            reqArgs: ""
                        } : {}),
                        u = i.verify(c);
                    if (u) return n({
                        error: {
                            type: "VERIFY",
                            errorMsg: u
                        }
                    }), s.j;
                    var p = i.encode(i.create(c)).finish();
                    return (0, o.Vl)()(p), m[a] = n,
                        function() {
                            delete m[a]
                        }
                },
                w = function(e) {
                    var t = e.data,
                        n = (0, o.UE)(),
                        r = t;
                    if ("SOCKET_CLOSED" === (null === r || void 0 === r ? void 0 : r.errorMsg) || "SOCKET_CONNECTION_ERROR" === (null === r || void 0 === r ? void 0 : r.errorMsg)) return Object.keys(b).forEach((function(e) {
                        b[e].forEach((function(e) {
                            e(r)
                        }))
                    })), void n({
                        error: "socket response error ".concat(null === r || void 0 === r ? void 0 : r.errorMsg)
                    });
                    if ((0, u._)(t, Blob)) {
                        var i = new FileReader;
                        i.readAsArrayBuffer(t), i.onload = (0, c._)(v().mark((function e() {
                            var t, r, s, c, u, p, f, g, y, w, _, x;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = i.result;
                                        try {
                                            r = (0, o.iq)(), "wsResp" in (s = r.toObject(r.decode(new Uint8Array(t)), {
                                                enums: String,
                                                longs: String,
                                                arrays: !0,
                                                objects: !0
                                            })) ? (c = s.wsResp, u = c.wsReqId, p = c.respError, f = c.reqAction, g = c.errorCode, y = c.errorMsg, (w = m[u]) && (p ? (_ = function() {
                                                switch (p) {
                                                    case a[a.INVALID_REQUEST]:
                                                        return {
                                                            error: {
                                                                type: "INVALID_REQUEST"
                                                            }
                                                        };
                                                    case a[a.INVALID_TOKEN]:
                                                        return {
                                                            error: {
                                                                type: "INVALID_TOKEN"
                                                            }
                                                        };
                                                    case a[a.SERVICE_ERROR]:
                                                        return {
                                                            error: {
                                                                type: "SERVICE_ERROR",
                                                                errorCode: g || 0,
                                                                errorMsg: y || ""
                                                            }
                                                        };
                                                    default:
                                                        return {
                                                            error: {
                                                                type: "INVALID_REQUEST"
                                                            }
                                                        }
                                                }
                                            }(), n((0, d._)((0, l._)({}, _.error), {
                                                reqAction: f
                                            })), w(_)) : w(s.wsResp), delete m[u])) : h && (x = s.channel, (b[x] || []).forEach((function(e) {
                                                e(s)
                                            })))
                                        } catch (v) {
                                            n({
                                                error: "socket decode error".concat(JSON.stringify(v.message))
                                            })
                                        }
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    } else n({
                        error: "parse data type other then blob".concat("undefined" === typeof t ? "undefined" : (0, p._)(t))
                    })
                },
                _ = n("CudX"),
                x = n("d12p"),
                T = function(e) {
                    var t = "fn" in e ? e.fn : e,
                        n = "fn" in e ? e.seeds : s.W,
                        r = [],
                        a = {},
                        i = function(e) {},
                        o = !1,
                        u = new Set,
                        d = function() {
                            u.forEach((function(e) {
                                e()
                            })), u.clear(), o = !1
                        },
                        p = function() {
                            var e = (0, c._)(v().mark((function e(p, f) {
                                var m, h, g, b;
                                return v().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return i = p, m = a = f, d(), o = !0, g = s.j, u.add((function() {
                                                clearTimeout(h), g()
                                            })), b = function() {
                                                var e = (0, c._)(v().mark((function e(a) {
                                                    return v().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return g(), h = window.setTimeout((function() {
                                                                    b(a + 1)
                                                                }), 1e3 * n(a)), e.next = 4, t((function(e) {
                                                                    if (m = (0, l._)({}, e), clearTimeout(h), 0 === r.length) i((0, l._)({}, e));
                                                                    else {
                                                                        var t = function(e, n, a) {
                                                                            var i = r[a];
                                                                            i.start((function(n) {
                                                                                a >= r.length - 1 ? e((0, l._)({}, n)) : t(e, (0, l._)({}, n), a + 1)
                                                                            }), n), u.add(i.cancel)
                                                                        };
                                                                        t(i, m, 0)
                                                                    }
                                                                }), m);
                                                            case 4:
                                                                g = e.sent;
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 11, b(0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        f = {
                            then: function(e) {
                                return r.push(e), f
                            },
                            start: p,
                            cancel: d,
                            restart: function() {
                                o && (d(), p(i, a))
                            }
                        };
                    return f
                };
            T.all = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = [],
                    a = {},
                    i = function(e) {},
                    o = !1,
                    s = new Set,
                    u = function() {
                        s.forEach((function(e) {
                            e()
                        })), s.clear(), o = !1
                    },
                    d = function() {
                        var e = (0, c._)(v().mark((function e(n, c) {
                            var d, p;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        i = n, d = a = c, u(), o = !0, p = 0, t.forEach((function(e) {
                                            e.start((function(e) {
                                                if (d = (0, l._)({}, e, d), ++p >= t.length)
                                                    if (0 === r.length) i(d);
                                                    else {
                                                        var n = function(e, t, a) {
                                                            var i = r[a];
                                                            i.start((function(t) {
                                                                a >= r.length - 1 ? e((0, l._)({}, t)) : n(e, (0, l._)({}, t), a + 1)
                                                            }), t), s.add(i.cancel)
                                                        };
                                                        n(i, d, 0)
                                                    }
                                            }), d), s.add(e.cancel)
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    p = {
                        then: function(e) {
                            return r.push(e), p
                        },
                        start: d,
                        cancel: u,
                        restart: function() {
                            o && (u(), d(i, a))
                        }
                    };
                return p
            }, T.oneOf = function(e, t) {
                var n = [],
                    r = {},
                    a = function(e) {},
                    i = !1,
                    o = new Set,
                    s = function() {
                        o.forEach((function(e) {
                            e()
                        })), o.clear(), i = !1
                    },
                    u = function() {
                        var u = (0, c._)(v().mark((function c(u, d) {
                            var p, f;
                            return v().wrap((function(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return r = d, a = u, c.next = 4, t(r);
                                    case 4:
                                        c.t0 = c.sent, c.t1 = e[c.t0], p = [c.t1].concat((0, x._)(n)), s(), i = !0, (f = function(e, t, n) {
                                            var r = p[n];
                                            r.start((function(t) {
                                                n >= p.length - 1 ? e((0, l._)({}, t)) : f(e, (0, l._)({}, t), n + 1)
                                            }), t), o.add(r.cancel)
                                        })(a, r, 0);
                                    case 11:
                                    case "end":
                                        return c.stop()
                                }
                            }), c)
                        })));
                        return function(e, t) {
                            return u.apply(this, arguments)
                        }
                    }(),
                    d = {
                        then: function(e) {
                            return n.push(e), d
                        },
                        start: u,
                        cancel: s,
                        restart: function() {
                            i && (s(), u(a, r))
                        }
                    };
                return d
            };
            var E, k = n("CqRL"),
                S = (0, _.H)(),
                A = S.setReady,
                C = (S.onReady, (0, _.H)()),
                R = C.setReady,
                I = (C.onReady, (0, _.H)()),
                N = I.setReady,
                O = I.onReady,
                P = (0, _.H)(),
                L = P.setReady,
                M = (P.onReady, P.clean, !1),
                D = T({
                    fn: function() {
                        var e = (0, c._)(v().mark((function e(t, n) {
                            var a, i, u, p, f, m, h, g, b;
                            return v().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = function() {
                                            var e = (0, c._)(v().mark((function e(t) {
                                                var n, r;
                                                return v().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return n = (0, o.$s)(), e.next = 3, (0, o.hT)()("bnc-uuid");
                                                        case 3:
                                                            return e.t0 = e.sent, e.next = 6, (0, o.hT)()("lang");
                                                        case 6:
                                                            return e.t1 = e.sent, e.t2 = t, e.t3 = (0, o.yS)(), r = {
                                                                uuid: e.t0,
                                                                lang: e.t1,
                                                                token: e.t2,
                                                                clienttype: e.t3
                                                            }, e.abrupt("return", "".concat(n, "?").concat(Object.keys(r).filter((function(e) {
                                                                return r[e]
                                                            })).map((function(e) {
                                                                return "".concat(e, "=").concat(r[e])
                                                            })).join("&")));
                                                        case 11:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), e.next = 3, (0, o.gf)();
                                    case 3:
                                        return i = e.sent, e.next = 6, a(i);
                                    case 6:
                                        return u = e.sent, (0, k.Lx)("ws_start"), E && E.close(), L(!1), E = new WebSocket(u), A(!1), e.t0 = "", e.next = 17, (0, o.hT)()("bnc-uuid");
                                    case 17:
                                        return e.t1 = e.sent, m = e.t0.concat.call(e.t0, e.t1, "_").concat(Date.now()), h = Date.now(), g = setTimeout((function() {
                                            (0, o.P4)(), A(!0), (0, o.UE)()({
                                                ws_connectId: m,
                                                ws_type: "ws_openDelay",
                                                duration: Math.floor((Date.now() - h) / 1e3)
                                            })
                                        }), 1e4), b = function() {
                                            clearTimeout(p), clearInterval(f)
                                        }, E.onopen = function() {
                                            N(!1), (0, o.UE)()({
                                                ws_connectId: m,
                                                ws_type: "ws_open",
                                                duration: Math.floor((Date.now() - h) / 1e3)
                                            }), R(!0), clearTimeout(g), (0, o.XK)(), (0, k.Lx)("ws_connected"), (0, o.Lq)((function(e) {
                                                1 === E.readyState ? E.send(e) : (0, o.UE)()({
                                                    type: "SOCKET_NOT_READY_BEFORE_SEND",
                                                    readyState: E.readyState
                                                })
                                            })), t((0, d._)((0, l._)({}, n), {
                                                token: i
                                            })), E.onmessage = function(e) {
                                                console.log("socket onmessage"), b(), f = window.setInterval((function() {
                                                    var e = s.j;
                                                    ! function t(n) {
                                                        e(), n >= 2 ? E.close() : (e = y({
                                                            payload: {
                                                                reqAction: r.PING
                                                            },
                                                            callback: function(e) {
                                                                "error" in e || clearTimeout(p)
                                                            }
                                                        }), p = window.setTimeout((function() {
                                                            t(n + 1)
                                                        }), 2e3))
                                                    }(0)
                                                }), 4e4), w(e)
                                            }
                                        }, E.onerror = function() {
                                            console.log("socket error"), (0, k.Lx)("ws_error"), w({
                                                data: {
                                                    errorMsg: "SOCKET_CONNECTION_ERROR"
                                                }
                                            })
                                        }, E.onclose = function(e) {
                                            console.log("socket onclose"), w({
                                                data: {
                                                    errorMsg: "SOCKET_CLOSED"
                                                }
                                            }), N(!0), R(!1), (0, o.P4)(), (0, k.Lx)("ws_closed"), b(), clearTimeout(g), (0, o.UE)()({
                                                ws_connectId: m,
                                                ws_type: "ws_close",
                                                duration: Math.floor((Date.now() - h) / 1e3),
                                                error: e.reason,
                                                code: e.code
                                            }), 1e3 === e.code ? D.restart() : (M || L(!0), M = !1, D.cancel())
                                        }, e.abrupt("return", (function() {
                                            M = !0, E && E.close()
                                        }));
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    seeds: function() {
                        return Math.floor(2147483.647)
                    }
                }),
                V = (0, _.H)(),
                j = V.setReady,
                F = (V.onReady, T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, k.Lx)("publicRequest"), t(n), j(!0), e.abrupt("return", (function() {
                                        j(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())),
                U = (0, _.H)(),
                G = U.setReady,
                B = (U.onReady, U.clean, T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, k.Lx)("privateRequest"), t(n), G(!0), e.abrupt("return", (function() {
                                        G(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())),
                z = T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, k.Lx)("list_channels"), e.abrupt("return", y({
                                        payload: {
                                            reqAction: r.LIST_CHANNELS
                                        },
                                        callback: function(e) {
                                            if (!("error" in e)) {
                                                var r = function(e, t) {
                                                        return Array.from(e).filter((function(e) {
                                                            return !t.has(e)
                                                        })).join(",")
                                                    },
                                                    a = e.resp,
                                                    i = void 0 === a ? "" : a,
                                                    o = new Set("" === i.trim() ? [] : i.split(",")),
                                                    s = new Set(Object.keys(b));
                                                t((0, d._)((0, l._)({}, n), {
                                                    toSubscribeChannelStr: r(s, o),
                                                    toUnSubscribeChannelStr: r(o, s)
                                                }))
                                            }
                                        }
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                H = T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, k.Lx)("subscribe_channels"), !n.toSubscribeChannelStr) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", y({
                                        payload: {
                                            reqAction: r.SUBSCRIBE,
                                            reqArgs: n.toSubscribeChannelStr
                                        },
                                        callback: function(e) {
                                            "error" in e || t(n)
                                        }
                                    }));
                                case 3:
                                    return t(n), e.abrupt("return", s.j);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                W = T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, k.Lx)("unsubscribe_channels"), !n.toUnSubscribeChannelStr) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", y({
                                        payload: {
                                            reqAction: r.UNSUBSCRIBE,
                                            reqArgs: n.toUnSubscribeChannelStr
                                        },
                                        callback: function(e) {
                                            "error" in e || t(n)
                                        }
                                    }));
                                case 3:
                                    return t(n), e.abrupt("return", s.j);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                q = (0, _.H)(),
                Y = q.setReady,
                J = (q.onReady, T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, k.Lx)("friendlyRequest"), t(n), Y(!0), e.abrupt("return", (function() {
                                        Y(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())),
                K = T(function() {
                    var e = (0, c._)(v().mark((function e(t, n) {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, k.Lx)("stream"), t(n), g(!0), e.abrupt("return", (function() {
                                        g(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                Z = T({
                    fn: (0, c._)(v().mark((function e() {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, k.Lx)("deadEnd"), e.abrupt("return", s.j);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    seeds: function() {
                        return Math.floor(2147483.647)
                    }
                }),
                X = D.then(T.all(F, T.oneOf({
                    string: T.all(B, J),
                    undefined: J,
                    null: Z
                }, (function(e) {
                    return null === e.token ? "null" : void 0 === e.token ? "undefined" : "string"
                })), z.then(T.all(H, W)).then(K))),
                Q = X.start,
                $ = (X.cancel, z.restart),
                ee = !1,
                te = function(e) {
                    var t = e.channel,
                        n = e.responseName,
                        r = e.onConnectionError,
                        a = e.onSocketClosed;
                    return function(e) {
                        if (!(0, o.$s)()) return console.error("ws-http-sdk:error: need to init websocket before use"), s.j;
                        ee || (window.addEventListener("online", (function() {
                            O((function() {
                                return Q((function(e) {}), {}), s.j
                            }))
                        })), ee = !0, Q((function(e) {}), {}));
                        var c = function(e) {
                            var t = e.channel,
                                n = e.callback;
                            return b[t] ? b[t].add(n) : b[t] = new Set([n]),
                                function() {
                                    b[t].delete(n), 0 === b[t].size && delete b[t]
                                }
                        }({
                            channel: t,
                            callback: function(t) {
                                var o = t;
                                if ("SOCKET_CONNECTION_ERROR" === (null === o || void 0 === o ? void 0 : o.errorMsg) && r) null === r || void 0 === r || r(o);
                                else if ("SOCKET_CLOSED" === (null === o || void 0 === o ? void 0 : o.errorMsg) && a) null === a || void 0 === a || a(o);
                                else {
                                    var s = new Set(Object.keys(t));
                                    "string" === typeof n ? e(t[n]) : n.forEach((function(n) {
                                        if (s.has(n)) return e((0, i._)({}, n, t[n]))
                                    }))
                                }
                            }
                        });
                        return $(), c
                    }
                }
        },
        "/PUg": (e, t, n) => {
            "use strict";

            function r() {
                const e = {};
                return e.promise = new Promise(((t, n) => {
                    e.resolve = t, e.reject = n
                })), e
            }

            function a(e) {
                return e && e.Math == Math ? e : void 0
            }
            n.d(t, {
                OW: () => i,
                v6: () => r
            });
            const i = "object" == typeof globalThis && a(globalThis) || "object" == typeof window && a(window) || "object" == typeof self && a(self) || "object" == typeof n.g && a(n.g) || function() {
                return this
            }() || {}
        },
        "DsA/": (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => f
            });
            var r = n("hrAD"),
                a = n("KrVi"),
                i = n("mXdx"),
                o = n("DTvD"),
                s = n("1lvF"),
                c = n("R7An"),
                u = n.n(c),
                l = n("OlNZ"),
                d = n.n(l),
                p = n("gYIm"),
                f = function(e) {
                    var t = e.lottieJsonPage,
                        n = e.options,
                        c = e.className,
                        l = (0, o.useRef)(null),
                        f = n || {},
                        v = f.playWhenScrollIn,
                        m = void 0 === v || v,
                        h = f.loop,
                        g = void 0 !== h && h,
                        b = (0, a._)(f, ["playWhenScrollIn", "loop"]),
                        y = (0, o.useState)(!1),
                        w = y[0],
                        _ = y[1],
                        x = (0, o.useState)(!1),
                        T = x[0],
                        E = x[1],
                        k = (0, o.useRef)(d()(E, 100)),
                        S = (0, o.useRef)(null);
                    return (0, o.useEffect)((function() {
                        if ("undefined" !== typeof IntersectionObserver) {
                            var e = new IntersectionObserver((function(e) {
                                k.current(e[0].isIntersecting)
                            }));
                            return l.current && e.observe(l.current),
                                function() {
                                    l.current && e.unobserve(l.current)
                                }
                        }
                        return E(!0),
                            function() {}
                    }), [T]), (0, o.useEffect)((function() {
                        S.current && S.current.destroy();
                        var e = u().loadAnimation({
                            container: l.current,
                            renderer: "svg",
                            loop: g,
                            autoplay: !0,
                            path: "".concat(p.K5).concat(t)
                        });
                        S.current = e
                    }), [g, t]), (0, o.useEffect)((function() {
                        m && (T && !w && S.current ? (S.current.play(), S.current.addEventListener("complete", (function() {
                            return _(!0)
                        }))) : !T && w && (S.current.goToAndStop(0), _(!1)), T && !w && S.current && (null === n || void 0 === n ? void 0 : n.speed) && S.current.setSpeed(null === n || void 0 === n ? void 0 : n.speed))
                    }), [T, w, m, null === n || void 0 === n ? void 0 : n.speed]), (0, i.jsx)(s.Ay, (0, r._)({
                        ref: l,
                        className: c
                    }, b))
                }
        },
        YZbU: (e, t, n) => {
            "use strict";
            n.d(t, {
                p: () => r
            });
            var r = {
                getFormTab: function(e) {
                    return "FORM_TAB_".concat(e.toUpperCase())
                },
                rbFormTriggerShown: "REBALANCING_FORM_TRIGGER_SHOWN",
                rbFormCopiedValue: "REBALANCING_FORM_COPIED_VALUE",
                getStrategyPoolCopyingStrategy: function(e) {
                    return "".concat(e.toUpperCase(), "_STRATEGY_POOL_COPYING_SYMBOL")
                },
                strategyPoolTab: "STRATEGY_POOL_TAB",
                trendingMarketTab: "TRENDING_MARKET_TAB",
                volatilityTab: "VOLATILITY_TAB",
                tutorialTab: "TUTORIAL_TAB",
                academyPopUpTab: "ACADEMY_POP_UP_TAB",
                lastViewedStrategy: "LAST_VIEWED_STRATEGY",
                futGridFormLeverage: "FUTURES_GRID_FORM_LEVERAGE",
                futGridFormMarginMode: "FUTURES_GRID_FORM_MARGIN_MODE",
                futGridPopularTab: "FUTURES_GRID_POPULAR_TAB",
                isStrategyListTipShowed: "IS_STRATEGY_LIST_TIP_SHOWED",
                botMarketViewType: "BOT_MARKET_VIEW_TYPE",
                strategyCategoryTab: "STRATEGY_CATEGORY_TAB",
                futGridFormCPS: "FUTURES_GRID_FORM_CPS",
                isLossProtectionNotifyShowedMap: "IS_LOSS_PROTECTION_NOTIFY_SHOWED_MAP"
            }
        },
        hR7C: (e, t, n) => {
            "use strict";
            n.d(t, {
                ON: () => a,
                XJ: () => r,
                fi: () => i
            });
            var r = {
                    top_roi_list: "ctrl",
                    top_pnl_list: "ctpl",
                    top_copied_list: "ctcl",
                    top_matched_list: "ctml",
                    top_roi_card: "ctrc",
                    top_pnl_card: "ctpc",
                    top_copied_card: "ctcc",
                    top_matched_card: "ctmc"
                },
                a = {
                    trending: "t",
                    volatility: "v",
                    strategyPool: "s",
                    poster: "p",
                    auto: "a",
                    manual: "m",
                    dailyPicks: "d"
                },
                i = {
                    s: "bot_market",
                    t: "trending_market_top_10",
                    v: "volatility_top_10"
                }
        },
        mkl1: (e, t, n) => {
            "use strict";
            n.d(t, {
                FV: () => i,
                t5: () => a
            });
            var r = function(e) {
                    return e ? "CM" : "UM"
                },
                a = {
                    assetLogo: "ASSET_KEY",
                    historySpotGrids: "HISTORY_SPOT_GRIDS",
                    historySpotGridsPagination: "HISTORY_SPOT_GRIDS_PAGINATION",
                    referralCode: "REFERRAL_CODE",
                    referralDomain: "REFERRAL_DOMAIN",
                    referralQRcode: "REFERRAL_QR_CODE",
                    openSpotGridItems: "OPEN_SPORT_GRID_ITEMS",
                    agreement: "STRATEGY_AGREEMENT_STATUS",
                    spotGridConfig: "SPOT_GRID_CONFIG",
                    avgPrice: "AVG_PRICE",
                    futGridRecommendParams: "FUT_GRID_RECOMMEND_PARAMS",
                    spotGridRecommendParams: "SPOT_GRID_RECOMMEND_PARAMS",
                    accountIpCountry: "ACCOUNT_IP_COUNTRY",
                    landingPageConfig: "LANDING_PAGE_CONFIG",
                    strategyInformation: "STRATEGY_INFORMATION",
                    leverageList: "LEVERAGE_LIST",
                    assetMode: "ASSET_MODE",
                    futuresConfig: "FUTURES_CONFIG",
                    assetIndex: "ASSET_INDEX",
                    brackets: "BRACKETS",
                    topStrategies: "TOP_STRATEGIES",
                    getRankingDisplay: "GET_RANKING_DISPLAY",
                    SpotGridCommissions: "SPOT_GRID_COMMISSIONS",
                    SpotGridMatchedInfo: "SPOT_GRID_MATCHED_INFO",
                    SpotGridMatchedList: "SPOT_GRID_MATCHED_LIST",
                    SpotGridMatchedListInfiniteScroll: "SPOT_GRID_MATCHED_LIST_INFINITE_SCROLL",
                    cmGridOpenSubOrders: "CM_GRID_OPEN_SUB_ORDERS",
                    gridOpenSubOrders: "GRID_OPEN_SUB_ORDERS",
                    cmGridMatchingData: "CM_GRID_MATCHING_DATA",
                    gridMatchingData: "GRID_MATCHING_DATA",
                    gridPosition: "GRID_POSITION",
                    gridMatchedItem: "GRID_MATCHED_ITEM",
                    historyFuturesGrids: "HISTORY_FUTURES_GRIDS",
                    wsGridPositionData: "WS_GRID_POSITION_DATA",
                    rebalancingbotRecommendedParams: "REBALANCINGBOT_RECOMMENDED_PARAMS",
                    rebalancingbotDetailParams: "REBALANCINGBOT_DETAIL_PARAMS",
                    adjustCoef: function(e) {
                        return ["ADJUST_COEF", r(e)]
                    },
                    rebalancingBotDetailSubOrders: "REBALANCINGBOT_DETAIL_SUB_ORDERS",
                    bannerList: "BANNER_LIST",
                    futuresGridReferralCode: "FUTURES_GRID_REFERRAL_CODE",
                    spotGridReferralCode: "SPOT_GRID_REFERRAL_CODE"
                },
                i = {
                    trending: function(e, t, n) {
                        return ["TRADE_MARKET", e, t, n]
                    },
                    volatility: function(e, t, n) {
                        return ["TRADE_VOLATILITY", e, t, n]
                    }
                }
        },
        "4WNF": (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => a,
                d: () => r
            });
            var r = "BTCUSDT",
                a = "?formTab=auto"
        },
        vCaB: (e, t, n) => {
            "use strict";
            n.d(t, {
                TU: () => c,
                ny: () => u
            });
            var r = n("hrAD"),
                a = n("qoEP"),
                i = n("eAFj"),
                o = {
                    isAdvancedOpen: !1,
                    isCustomizeParametersOpen: !1
                },
                s = (0, i.A)((function(e) {
                    return (0, a._)((0, r._)({}, o), {
                        updateCopyFormInit: function(t) {
                            return e((function(e) {
                                return (0, r._)({}, e, t)
                            }))
                        },
                        resetFormCopyValue: function() {
                            return e(o)
                        }
                    })
                })),
                c = function() {
                    return s((function(e) {
                        return {
                            isAdvancedOpen: e.isAdvancedOpen,
                            isCustomizeParametersOpen: e.isCustomizeParametersOpen
                        }
                    }))
                },
                u = function() {
                    return s((function(e) {
                        return {
                            updateFormCopyValue: e.updateCopyFormInit
                        }
                    }))
                }
        },
        "3I7B": (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => s
            });
            var r = n("mXdx"),
                a = n("xqbL"),
                i = n.n(a),
                o = n("1lvF"),
                s = function(e) {
                    var t = e.children,
                        n = e.className;
                    return (0, r.jsx)(o.Ay, {
                        className: i()("pt-[40px] lg:pt-[80px] bg-BasicBg", n),
                        children: (0, r.jsx)(o.Ay, {
                            className: "relative md:mx-auto md:w-[768px] lg:w-[1248px] max-w-full px-[15px] md:px-[24px] text-PrimaryText",
                            children: t
                        })
                    })
                }
        },
        xe27: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => bs
            });
            var r = n("iKvg"),
                a = n("hrAD"),
                i = n("qoEP"),
                o = n("mguP"),
                s = n("mXdx"),
                c = n("DTvD"),
                u = n.n(c),
                l = n("zokI"),
                d = n("aooZ"),
                p = n("PaVQ"),
                f = n("uoy8"),
                v = n("Cr5V"),
                m = n("QWVi"),
                h = n("hbgo"),
                g = n("qV1O"),
                b = n("ugJu"),
                y = n("Gii1"),
                w = n("3I7B"),
                _ = n("xqbL"),
                x = n.n(_),
                T = n("TVsB"),
                E = U(),
                k = e => D(e, E),
                S = U();
            k.write = e => D(e, S);
            var A = U();
            k.onStart = e => D(e, A);
            var C = U();
            k.onFrame = e => D(e, C);
            var R = U();
            k.onFinish = e => D(e, R);
            var I = [];
            k.setTimeout = (e, t) => {
                const n = k.now() + t,
                    r = () => {
                        const e = I.findIndex((e => e.cancel == r));
                        ~e && I.splice(e, 1), L -= ~e ? 1 : 0
                    },
                    a = {
                        time: n,
                        handler: e,
                        cancel: r
                    };
                return I.splice(N(n), 0, a), L += 1, V(), a
            };
            var N = e => ~(~I.findIndex((t => t.time > e)) || ~I.length);
            k.cancel = e => {
                A.delete(e), C.delete(e), R.delete(e), E.delete(e), S.delete(e)
            }, k.sync = e => {
                M = !0, k.batchedUpdates(e), M = !1
            }, k.throttle = e => {
                let t;

                function n() {
                    try {
                        e(...t)
                    } finally {
                        t = null
                    }
                }

                function r(...e) {
                    t = e, k.onStart(n)
                }
                return r.handler = e, r.cancel = () => {
                    A.delete(n), t = null
                }, r
            };
            var O = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            k.use = e => O = e, k.now = "undefined" != typeof performance ? () => performance.now() : Date.now, k.batchedUpdates = e => e(), k.catch = console.error, k.frameLoop = "always", k.advance = () => {
                "demand" !== k.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : F()
            };
            var P = -1,
                L = 0,
                M = !1;

            function D(e, t) {
                M ? (t.delete(e), e(0)) : (t.add(e), V())
            }

            function V() {
                P < 0 && (P = 0, "demand" !== k.frameLoop && O(j))
            }

            function j() {
                ~P && (O(j), k.batchedUpdates(F))
            }

            function F() {
                const e = P;
                P = k.now();
                const t = N(P);
                t && (G(I.splice(0, t), (e => e.handler())), L -= t), L ? (A.flush(), E.flush(e ? Math.min(64, P - e) : 16.667), C.flush(), S.flush(), R.flush()) : P = -1
            }

            function U() {
                let e = new Set,
                    t = e;
                return {
                    add(n) {
                        L += t != e || e.has(n) ? 0 : 1, e.add(n)
                    },
                    delete: n => (L -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
                    flush(n) {
                        t.size && (e = new Set, L -= t.size, G(t, (t => t(n) && e.add(t))), L += e.size, t = e)
                    }
                }
            }

            function G(e, t) {
                e.forEach((e => {
                    try {
                        t(e)
                    } catch (n) {
                        k.catch(n)
                    }
                }))
            }
            var B = Object.defineProperty,
                z = {};

            function H() {}((e, t) => {
                for (var n in t) B(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(z, {
                assign: () => ae,
                colors: () => te,
                createStringInterpolator: () => X,
                skipAnimation: () => ne,
                to: () => Q,
                willAdvance: () => re
            });
            var W = {
                arr: Array.isArray,
                obj: e => !!e && "Object" === e.constructor.name,
                fun: e => "function" === typeof e,
                str: e => "string" === typeof e,
                num: e => "number" === typeof e,
                und: e => void 0 === e
            };

            function q(e, t) {
                if (W.arr(e)) {
                    if (!W.arr(t) || e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
                return e === t
            }
            var Y = (e, t) => e.forEach(t);

            function J(e, t, n) {
                if (W.arr(e))
                    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
                else
                    for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
            }
            var K = e => W.und(e) ? [] : W.arr(e) ? e : [e];

            function Z(e, t) {
                if (e.size) {
                    const n = Array.from(e);
                    e.clear(), Y(n, t)
                }
            }
            var X, Q, $ = (e, ...t) => Z(e, (e => e(...t))),
                ee = () => "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                te = null,
                ne = !1,
                re = H,
                ae = e => {
                    e.to && (Q = e.to), e.now && (k.now = e.now), void 0 !== e.colors && (te = e.colors), null != e.skipAnimation && (ne = e.skipAnimation), e.createStringInterpolator && (X = e.createStringInterpolator), e.requestAnimationFrame && k.use(e.requestAnimationFrame), e.batchedUpdates && (k.batchedUpdates = e.batchedUpdates), e.willAdvance && (re = e.willAdvance), e.frameLoop && (k.frameLoop = e.frameLoop)
                },
                ie = new Set,
                oe = [],
                se = [],
                ce = 0,
                ue = {
                    get idle() {
                        return !ie.size && !oe.length
                    },
                    start(e) {
                        ce > e.priority ? (ie.add(e), k.onStart(le)) : (de(e), k(fe))
                    },
                    advance: fe,
                    sort(e) {
                        if (ce) k.onFrame((() => ue.sort(e)));
                        else {
                            const t = oe.indexOf(e);
                            ~t && (oe.splice(t, 1), pe(e))
                        }
                    },
                    clear() {
                        oe = [], ie.clear()
                    }
                };

            function le() {
                ie.forEach(de), ie.clear(), k(fe)
            }

            function de(e) {
                oe.includes(e) || pe(e)
            }

            function pe(e) {
                oe.splice(function(e, t) {
                    const n = e.findIndex(t);
                    return n < 0 ? e.length : n
                }(oe, (t => t.priority > e.priority)), 0, e)
            }

            function fe(e) {
                const t = se;
                for (let n = 0; n < oe.length; n++) {
                    const r = oe[n];
                    ce = r.priority, r.idle || (re(r), r.advance(e), r.idle || t.push(r))
                }
                return ce = 0, (se = oe).length = 0, (oe = t).length > 0
            }
            var ve = "[-+]?\\d*\\.?\\d+",
                me = ve + "%";

            function he(...e) {
                return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var ge = new RegExp("rgb" + he(ve, ve, ve)),
                be = new RegExp("rgba" + he(ve, ve, ve, ve)),
                ye = new RegExp("hsl" + he(ve, me, me)),
                we = new RegExp("hsla" + he(ve, me, me, ve)),
                _e = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                xe = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                Te = /^#([0-9a-fA-F]{6})$/,
                Ee = /^#([0-9a-fA-F]{8})$/;

            function ke(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }

            function Se(e, t, n) {
                const r = n < .5 ? n * (1 + t) : n + t - n * t,
                    a = 2 * n - r,
                    i = ke(a, r, e + 1 / 3),
                    o = ke(a, r, e),
                    s = ke(a, r, e - 1 / 3);
                return Math.round(255 * i) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
            }

            function Ae(e) {
                const t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }

            function Ce(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }

            function Re(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }

            function Ie(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }

            function Ne(e) {
                let t = function(e) {
                    let t;
                    return "number" === typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Te.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : te && void 0 !== te[e] ? te[e] : (t = ge.exec(e)) ? (Ae(t[1]) << 24 | Ae(t[2]) << 16 | Ae(t[3]) << 8 | 255) >>> 0 : (t = be.exec(e)) ? (Ae(t[1]) << 24 | Ae(t[2]) << 16 | Ae(t[3]) << 8 | Re(t[4])) >>> 0 : (t = _e.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Ee.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = xe.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ye.exec(e)) ? (255 | Se(Ce(t[1]), Ie(t[2]), Ie(t[3]))) >>> 0 : (t = we.exec(e)) ? (Se(Ce(t[1]), Ie(t[2]), Ie(t[3])) | Re(t[4])) >>> 0 : null
                }(e);
                if (null === t) return e;
                t = t || 0;
                return `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`
            }
            var Oe = (e, t, n) => {
                if (W.fun(e)) return e;
                if (W.arr(e)) return Oe({
                    range: e,
                    output: t,
                    extrapolate: n
                });
                if (W.str(e.output[0])) return X(e);
                const r = e,
                    a = r.output,
                    i = r.range || [0, 1],
                    o = r.extrapolateLeft || r.extrapolate || "extend",
                    s = r.extrapolateRight || r.extrapolate || "extend",
                    c = r.easing || (e => e);
                return e => {
                    const t = function(e, t) {
                        for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                        return n - 1
                    }(e, i);
                    return function(e, t, n, r, a, i, o, s, c) {
                        let u = c ? c(e) : e;
                        if (u < t) {
                            if ("identity" === o) return u;
                            "clamp" === o && (u = t)
                        }
                        if (u > n) {
                            if ("identity" === s) return u;
                            "clamp" === s && (u = n)
                        }
                        if (r === a) return r;
                        if (t === n) return e <= t ? r : a;
                        t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t);
                        u = i(u), r === -1 / 0 ? u = -u : a === 1 / 0 ? u += r : u = u * (a - r) + r;
                        return u
                    }(e, i[t], i[t + 1], a[t], a[t + 1], c, o, s, r.map)
                }
            };
            var Pe = 1.70158,
                Le = 1.525 * Pe,
                Me = Pe + 1,
                De = 2 * Math.PI / 3,
                Ve = 2 * Math.PI / 4.5,
                je = e => {
                    const t = 7.5625,
                        n = 2.75;
                    return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                },
                Fe = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => 1 - (1 - e) * (1 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => 1 - Math.pow(1 - e, 3),
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - Math.pow(1 - e, 4),
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 - Math.pow(1 - e, 5),
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
                    easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
                    easeOutSine: e => Math.sin(e * Math.PI / 2),
                    easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
                    easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
                    easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
                    easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
                    easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
                    easeInBack: e => Me * e * e * e - Pe * e * e,
                    easeOutBack: e => 1 + Me * Math.pow(e - 1, 3) + Pe * Math.pow(e - 1, 2),
                    easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Le) / 2 : (Math.pow(2 * e - 2, 2) * ((Le + 1) * (2 * e - 2) + Le) + 2) / 2,
                    easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * De),
                    easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * De) + 1,
                    easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ve) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ve) / 2 + 1,
                    easeInBounce: e => 1 - je(1 - e),
                    easeOutBounce: je,
                    easeInOutBounce: e => e < .5 ? (1 - je(1 - 2 * e)) / 2 : (1 + je(2 * e - 1)) / 2,
                    steps: (e, t = "end") => n => {
                        const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e,
                            a = "end" === t ? Math.floor(r) : Math.ceil(r);
                        return i = 0, o = 1, s = a / e, Math.min(Math.max(s, i), o);
                        var i, o, s
                    }
                },
                Ue = Symbol.for("FluidValue.get"),
                Ge = Symbol.for("FluidValue.observers"),
                Be = e => Boolean(e && e[Ue]),
                ze = e => e && e[Ue] ? e[Ue]() : e,
                He = e => e[Ge] || null;

            function We(e, t) {
                const n = e[Ge];
                n && n.forEach((e => {
                    ! function(e, t) {
                        e.eventObserved ? e.eventObserved(t) : e(t)
                    }(e, t)
                }))
            }
            var qe = class {
                    constructor(e) {
                        if (!e && !(e = this.get)) throw Error("Unknown getter");
                        Ye(this, e)
                    }
                },
                Ye = (e, t) => Xe(e, Ue, t);

            function Je(e, t) {
                if (e[Ue]) {
                    let n = e[Ge];
                    n || Xe(e, Ge, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
                }
                return t
            }

            function Ke(e, t) {
                const n = e[Ge];
                if (n && n.has(t)) {
                    const r = n.size - 1;
                    r ? n.delete(t) : e[Ge] = null, e.observerRemoved && e.observerRemoved(r, t)
                }
            }
            var Ze, Xe = (e, t, n) => Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }),
                Qe = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                $e = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                et = new RegExp(`(${Qe.source})(%|[a-z]+)`, "i"),
                tt = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                nt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                rt = e => {
                    const [t, n] = at(e);
                    if (!t || ee()) return e;
                    const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
                    if (r) return r.trim();
                    if (n && n.startsWith("--")) {
                        const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                        return t || e
                    }
                    return n && nt.test(n) ? rt(n) : n || e
                },
                at = e => {
                    const t = nt.exec(e);
                    if (!t) return [, ];
                    const [, n, r] = t;
                    return [n, r]
                },
                it = (e, t, n, r, a) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,
                ot = e => {
                    Ze || (Ze = te ? new RegExp(`(${Object.keys(te).join("|")})(?!\\w)`, "g") : /^\b$/);
                    const t = e.output.map((e => ze(e).replace(nt, rt).replace($e, Ne).replace(Ze, Ne))),
                        n = t.map((e => e.match(Qe).map(Number))),
                        r = n[0].map(((e, t) => n.map((e => {
                            if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                            return e[t]
                        })))).map((t => Oe({ ...e,
                            output: t
                        })));
                    return e => {
                        const n = !et.test(t[0]) && t.find((e => et.test(e))) ? .replace(Qe, "");
                        let a = 0;
                        return t[0].replace(Qe, (() => `${r[a++](e)}${n||""}`)).replace(tt, it)
                    }
                },
                st = "react-spring: ",
                ct = e => {
                    const t = e;
                    let n = !1;
                    if ("function" != typeof t) throw new TypeError(`${st}once requires a function parameter`);
                    return (...e) => {
                        n || (t(...e), n = !0)
                    }
                },
                ut = ct(console.warn);
            var lt = ct(console.warn);

            function dt(e) {
                return W.str(e) && ("#" == e[0] || /\d/.test(e) || !ee() && nt.test(e) || e in (te || {}))
            }
            var pt = ee() ? c.useEffect : c.useLayoutEffect;

            function ft() {
                const e = (0, c.useState)()[1],
                    t = (() => {
                        const e = (0, c.useRef)(!1);
                        return pt((() => (e.current = !0, () => {
                            e.current = !1
                        })), []), e
                    })();
                return () => {
                    t.current && e(Math.random())
                }
            }
            var vt = e => (0, c.useEffect)(e, mt),
                mt = [];

            function ht(e) {
                const t = (0, c.useRef)();
                return (0, c.useEffect)((() => {
                    t.current = e
                })), t.current
            }
            var gt = Symbol.for("Animated:node"),
                bt = e => e && e[gt],
                yt = (e, t) => {
                    return n = e, r = gt, a = t, Object.defineProperty(n, r, {
                        value: a,
                        writable: !0,
                        configurable: !0
                    });
                    var n, r, a
                },
                wt = e => e && e[gt] && e[gt].getPayload(),
                _t = class {
                    constructor() {
                        yt(this, this)
                    }
                    getPayload() {
                        return this.payload || []
                    }
                },
                xt = class extends _t {
                    constructor(e) {
                        super(), this._value = e, this.done = !0, this.durationProgress = 0, W.num(this._value) && (this.lastPosition = this._value)
                    }
                    static create(e) {
                        return new xt(e)
                    }
                    getPayload() {
                        return [this]
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(e, t) {
                        return W.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
                    }
                    reset() {
                        const {
                            done: e
                        } = this;
                        this.done = !1, W.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
                    }
                },
                Tt = class extends xt {
                    constructor(e) {
                        super(0), this._string = null, this._toString = Oe({
                            output: [e, e]
                        })
                    }
                    static create(e) {
                        return new Tt(e)
                    }
                    getValue() {
                        const e = this._string;
                        return null == e ? this._string = this._toString(this._value) : e
                    }
                    setValue(e) {
                        if (W.str(e)) {
                            if (e == this._string) return !1;
                            this._string = e, this._value = 1
                        } else {
                            if (!super.setValue(e)) return !1;
                            this._string = null
                        }
                        return !0
                    }
                    reset(e) {
                        e && (this._toString = Oe({
                            output: [this.getValue(), e]
                        })), this._value = 0, super.reset()
                    }
                },
                Et = {
                    dependencies: null
                },
                kt = class extends _t {
                    constructor(e) {
                        super(), this.source = e, this.setValue(e)
                    }
                    getValue(e) {
                        const t = {};
                        return J(this.source, ((n, r) => {
                            var a;
                            (a = n) && a[gt] === a ? t[r] = n.getValue(e) : Be(n) ? t[r] = ze(n) : e || (t[r] = n)
                        })), t
                    }
                    setValue(e) {
                        this.source = e, this.payload = this._makePayload(e)
                    }
                    reset() {
                        this.payload && Y(this.payload, (e => e.reset()))
                    }
                    _makePayload(e) {
                        if (e) {
                            const t = new Set;
                            return J(e, this._addToPayload, t), Array.from(t)
                        }
                    }
                    _addToPayload(e) {
                        Et.dependencies && Be(e) && Et.dependencies.add(e);
                        const t = wt(e);
                        t && Y(t, (e => this.add(e)))
                    }
                },
                St = class extends kt {
                    constructor(e) {
                        super(e)
                    }
                    static create(e) {
                        return new St(e)
                    }
                    getValue() {
                        return this.source.map((e => e.getValue()))
                    }
                    setValue(e) {
                        const t = this.getPayload();
                        return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(At)), !0)
                    }
                };

            function At(e) {
                return (dt(e) ? Tt : xt).create(e)
            }

            function Ct(e) {
                const t = bt(e);
                return t ? t.constructor : W.arr(e) ? St : dt(e) ? Tt : xt
            }
            var Rt = (e, t) => {
                    const n = !W.fun(e) || e.prototype && e.prototype.isReactComponent;
                    return (0, c.forwardRef)(((r, a) => {
                        const i = (0, c.useRef)(null),
                            o = n && (0, c.useCallback)((e => {
                                i.current = function(e, t) {
                                    e && (W.fun(e) ? e(t) : e.current = t);
                                    return t
                                }(a, e)
                            }), [a]),
                            [s, u] = function(e, t) {
                                const n = new Set;
                                Et.dependencies = n, e.style && (e = { ...e,
                                    style: t.createAnimatedStyle(e.style)
                                });
                                return e = new kt(e), Et.dependencies = null, [e, n]
                            }(r, t),
                            l = ft(),
                            d = () => {
                                const e = i.current;
                                if (n && !e) return;
                                !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && l()
                            },
                            p = new It(d, u),
                            f = (0, c.useRef)();
                        pt((() => (f.current = p, Y(u, (e => Je(e, p))), () => {
                            f.current && (Y(f.current.deps, (e => Ke(e, f.current))), k.cancel(f.current.update))
                        }))), (0, c.useEffect)(d, []), vt((() => () => {
                            const e = f.current;
                            Y(e.deps, (t => Ke(t, e)))
                        }));
                        const v = t.getComponentProps(s.getValue());
                        return c.createElement(e, { ...v,
                            ref: o
                        })
                    }))
                },
                It = class {
                    constructor(e, t) {
                        this.update = e, this.deps = t
                    }
                    eventObserved(e) {
                        "change" == e.type && k.write(this.update)
                    }
                };
            var Nt = Symbol.for("AnimatedComponent"),
                Ot = e => W.str(e) ? e : e && W.str(e.displayName) ? e.displayName : W.fun(e) && e.name || null;

            function Pt(e, ...t) {
                return W.fun(e) ? e(...t) : e
            }
            var Lt = (e, t) => !0 === e || !!(t && e && (W.fun(e) ? e(t) : K(e).includes(t))),
                Mt = (e, t) => W.obj(e) ? t && e[t] : e,
                Dt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
                Vt = e => e,
                jt = (e, t = Vt) => {
                    let n = Ft;
                    e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
                    const r = {};
                    for (const a of n) {
                        const n = t(e[a], a);
                        W.und(n) || (r[a] = n)
                    }
                    return r
                },
                Ft = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
                Ut = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1
                };

            function Gt(e) {
                const t = function(e) {
                    const t = {};
                    let n = 0;
                    if (J(e, ((e, r) => {
                            Ut[r] || (t[r] = e, n++)
                        })), n) return t
                }(e);
                if (t) {
                    const n = {
                        to: t
                    };
                    return J(e, ((e, r) => r in t || (n[r] = e))), n
                }
                return { ...e
                }
            }

            function Bt(e) {
                return e = ze(e), W.arr(e) ? e.map(Bt) : dt(e) ? z.createStringInterpolator({
                    range: [0, 1],
                    output: [e, e]
                })(1) : e
            }

            function zt(e) {
                for (const t in e) return !0;
                return !1
            }

            function Ht(e) {
                return W.fun(e) || W.arr(e) && W.obj(e[0])
            }

            function Wt(e, t) {
                e.ref ? .delete(e), t ? .delete(e)
            }

            function qt(e, t) {
                t && e.ref !== t && (e.ref ? .delete(e), t.add(e), e.ref = t)
            }
            var Yt = {
                    tension: 170,
                    friction: 26,
                    mass: 1,
                    damping: 1,
                    easing: Fe.linear,
                    clamp: !1
                },
                Jt = class {
                    constructor() {
                        this.velocity = 0, Object.assign(this, Yt)
                    }
                };

            function Kt(e, t) {
                if (W.und(t.decay)) {
                    const n = !W.und(t.tension) || !W.und(t.friction);
                    !n && W.und(t.frequency) && W.und(t.damping) && W.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
                } else e.duration = void 0
            }
            var Zt = [],
                Xt = class {
                    constructor() {
                        this.changed = !1, this.values = Zt, this.toValues = null, this.fromValues = Zt, this.config = new Jt, this.immediate = !1
                    }
                };

            function Qt(e, {
                key: t,
                props: n,
                defaultProps: r,
                state: a,
                actions: i
            }) {
                return new Promise(((o, s) => {
                    let c, u, l = Lt(n.cancel ? ? r ? .cancel, t);
                    if (l) f();
                    else {
                        W.und(n.pause) || (a.paused = Lt(n.pause, t));
                        let e = r ? .pause;
                        !0 !== e && (e = a.paused || Lt(e, t)), c = Pt(n.delay || 0, t), e ? (a.resumeQueue.add(p), i.pause()) : (i.resume(), p())
                    }

                    function d() {
                        a.resumeQueue.add(p), a.timeouts.delete(u), u.cancel(), c = u.time - k.now()
                    }

                    function p() {
                        c > 0 && !z.skipAnimation ? (a.delayed = !0, u = k.setTimeout(f, c), a.pauseQueue.add(d), a.timeouts.add(u)) : f()
                    }

                    function f() {
                        a.delayed && (a.delayed = !1), a.pauseQueue.delete(d), a.timeouts.delete(u), e <= (a.cancelId || 0) && (l = !0);
                        try {
                            i.start({ ...n,
                                callId: e,
                                cancel: l
                            }, o)
                        } catch (t) {
                            s(t)
                        }
                    }
                }))
            }
            var $t = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? nn(e.get()) : t.every((e => e.noop)) ? en(e.get()) : tn(e.get(), t.every((e => e.finished))),
                en = e => ({
                    value: e,
                    noop: !0,
                    finished: !0,
                    cancelled: !1
                }),
                tn = (e, t, n = !1) => ({
                    value: e,
                    finished: t,
                    cancelled: n
                }),
                nn = e => ({
                    value: e,
                    cancelled: !0,
                    finished: !1
                });

            function rn(e, t, n, r) {
                const {
                    callId: a,
                    parentId: i,
                    onRest: o
                } = t, {
                    asyncTo: s,
                    promise: c
                } = n;
                return i || e !== s || t.reset ? n.promise = (async () => {
                    n.asyncId = a, n.asyncTo = e;
                    const u = jt(t, ((e, t) => "onRest" === t ? void 0 : e));
                    let l, d;
                    const p = new Promise(((e, t) => (l = e, d = t))),
                        f = e => {
                            const t = a <= (n.cancelId || 0) && nn(r) || a !== n.asyncId && tn(r, !1);
                            if (t) throw e.result = t, d(e), e
                        },
                        v = (e, t) => {
                            const i = new on,
                                o = new sn;
                            return (async () => {
                                if (z.skipAnimation) throw an(n), o.result = tn(r, !1), d(o), o;
                                f(i);
                                const s = W.obj(e) ? { ...e
                                } : { ...t,
                                    to: e
                                };
                                s.parentId = a, J(u, ((e, t) => {
                                    W.und(s[t]) && (s[t] = e)
                                }));
                                const c = await r.start(s);
                                return f(i), n.paused && await new Promise((e => {
                                    n.resumeQueue.add(e)
                                })), c
                            })()
                        };
                    let m;
                    if (z.skipAnimation) return an(n), tn(r, !1);
                    try {
                        let t;
                        t = W.arr(e) ? (async e => {
                            for (const t of e) await v(t)
                        })(e) : Promise.resolve(e(v, r.stop.bind(r))), await Promise.all([t.then(l), p]), m = tn(r.get(), !0, !1)
                    } catch (h) {
                        if (h instanceof on) m = h.result;
                        else {
                            if (!(h instanceof sn)) throw h;
                            m = h.result
                        }
                    } finally {
                        a == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? c : void 0)
                    }
                    return W.fun(o) && k.batchedUpdates((() => {
                        o(m, r, r.item)
                    })), m
                })() : c
            }

            function an(e, t) {
                Z(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
            }
            var on = class extends Error {
                    constructor() {
                        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
                    }
                },
                sn = class extends Error {
                    constructor() {
                        super("SkipAnimationSignal")
                    }
                },
                cn = e => e instanceof ln,
                un = 1,
                ln = class extends qe {
                    constructor() {
                        super(...arguments), this.id = un++, this._priority = 0
                    }
                    get priority() {
                        return this._priority
                    }
                    set priority(e) {
                        this._priority != e && (this._priority = e, this._onPriorityChange(e))
                    }
                    get() {
                        const e = bt(this);
                        return e && e.getValue()
                    }
                    to(...e) {
                        return z.to(this, e)
                    }
                    interpolate(...e) {
                        return ut(`${st}The "interpolate" function is deprecated in v9 (use "to" instead)`), z.to(this, e)
                    }
                    toJSON() {
                        return this.get()
                    }
                    observerAdded(e) {
                        1 == e && this._attach()
                    }
                    observerRemoved(e) {
                        0 == e && this._detach()
                    }
                    _attach() {}
                    _detach() {}
                    _onChange(e, t = !1) {
                        We(this, {
                            type: "change",
                            parent: this,
                            value: e,
                            idle: t
                        })
                    }
                    _onPriorityChange(e) {
                        this.idle || ue.sort(this), We(this, {
                            type: "priority",
                            parent: this,
                            priority: e
                        })
                    }
                },
                dn = Symbol.for("SpringPhase"),
                pn = e => (1 & e[dn]) > 0,
                fn = e => (2 & e[dn]) > 0,
                vn = e => (4 & e[dn]) > 0,
                mn = (e, t) => t ? e[dn] |= 3 : e[dn] &= -3,
                hn = (e, t) => t ? e[dn] |= 4 : e[dn] &= -5,
                gn = class extends ln {
                    constructor(e, t) {
                        if (super(), this.animation = new Xt, this.defaultProps = {}, this._state = {
                                paused: !1,
                                delayed: !1,
                                pauseQueue: new Set,
                                resumeQueue: new Set,
                                timeouts: new Set
                            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !W.und(e) || !W.und(t)) {
                            const n = W.obj(e) ? { ...e
                            } : { ...t,
                                from: e
                            };
                            W.und(n.default) && (n.default = !0), this.start(n)
                        }
                    }
                    get idle() {
                        return !(fn(this) || this._state.asyncTo) || vn(this)
                    }
                    get goal() {
                        return ze(this.animation.to)
                    }
                    get velocity() {
                        const e = bt(this);
                        return e instanceof xt ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
                    }
                    get hasAnimated() {
                        return pn(this)
                    }
                    get isAnimating() {
                        return fn(this)
                    }
                    get isPaused() {
                        return vn(this)
                    }
                    get isDelayed() {
                        return this._state.delayed
                    }
                    advance(e) {
                        let t = !0,
                            n = !1;
                        const r = this.animation;
                        let {
                            toValues: a
                        } = r;
                        const {
                            config: i
                        } = r, o = wt(r.to);
                        !o && Be(r.to) && (a = K(ze(r.to))), r.values.forEach(((s, c) => {
                            if (s.done) return;
                            const u = s.constructor == Tt ? 1 : o ? o[c].lastPosition : a[c];
                            let l = r.immediate,
                                d = u;
                            if (!l) {
                                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                                let t = s.elapsedTime += e;
                                const n = r.fromValues[c],
                                    a = null != s.v0 ? s.v0 : s.v0 = W.arr(i.velocity) ? i.velocity[c] : i.velocity;
                                let o;
                                const p = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
                                if (W.und(i.duration))
                                    if (i.decay) {
                                        const e = !0 === i.decay ? .998 : i.decay,
                                            r = Math.exp(-(1 - e) * t);
                                        d = n + a / (1 - e) * (1 - r), l = Math.abs(s.lastPosition - d) <= p, o = a * r
                                    } else {
                                        o = null == s.lastVelocity ? a : s.lastVelocity;
                                        const t = i.restVelocity || p / 10,
                                            r = i.clamp ? 0 : i.bounce,
                                            c = !W.und(r),
                                            f = n == u ? s.v0 > 0 : n < u;
                                        let v, m = !1;
                                        const h = 1,
                                            g = Math.ceil(e / h);
                                        for (let e = 0; e < g && (v = Math.abs(o) > t, v || (l = Math.abs(u - d) <= p, !l)); ++e) {
                                            c && (m = d == u || d > u == f, m && (o = -o * r, d = u));
                                            o += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * o) / i.mass * h, d += o * h
                                        }
                                    }
                                else {
                                    let r = 1;
                                    i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (u - n), o = (d - s.lastPosition) / e, l = 1 == r
                                }
                                s.lastVelocity = o, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), l = !0)
                            }
                            o && !o[c].done && (l = !1), l ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
                        }));
                        const s = bt(this),
                            c = s.getValue();
                        if (t) {
                            const e = ze(r.to);
                            c === e && !n || i.decay ? n && i.decay && this._onChange(c) : (s.setValue(e), this._onChange(e)), this._stop()
                        } else n && this._onChange(c)
                    }
                    set(e) {
                        return k.batchedUpdates((() => {
                            this._stop(), this._focus(e), this._set(e)
                        })), this
                    }
                    pause() {
                        this._update({
                            pause: !0
                        })
                    }
                    resume() {
                        this._update({
                            pause: !1
                        })
                    }
                    finish() {
                        if (fn(this)) {
                            const {
                                to: e,
                                config: t
                            } = this.animation;
                            k.batchedUpdates((() => {
                                this._onStart(), t.decay || this._set(e, !1), this._stop()
                            }))
                        }
                        return this
                    }
                    update(e) {
                        return (this.queue || (this.queue = [])).push(e), this
                    }
                    start(e, t) {
                        let n;
                        return W.und(e) ? (n = this.queue || [], this.queue = []) : n = [W.obj(e) ? e : { ...t,
                            to: e
                        }], Promise.all(n.map((e => this._update(e)))).then((e => $t(this, e)))
                    }
                    stop(e) {
                        const {
                            to: t
                        } = this.animation;
                        return this._focus(this.get()), an(this._state, e && this._lastCallId), k.batchedUpdates((() => this._stop(t, e))), this
                    }
                    reset() {
                        this._update({
                            reset: !0
                        })
                    }
                    eventObserved(e) {
                        "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
                    }
                    _prepareNode(e) {
                        const t = this.key || "";
                        let {
                            to: n,
                            from: r
                        } = e;
                        n = W.obj(n) ? n[t] : n, (null == n || Ht(n)) && (n = void 0), r = W.obj(r) ? r[t] : r, null == r && (r = void 0);
                        const a = {
                            to: n,
                            from: r
                        };
                        return pn(this) || (e.reverse && ([n, r] = [r, n]), r = ze(r), W.und(r) ? bt(this) || this._set(n) : this._set(r)), a
                    }
                    _update({ ...e
                    }, t) {
                        const {
                            key: n,
                            defaultProps: r
                        } = this;
                        e.default && Object.assign(r, jt(e, ((e, t) => /^on/.test(t) ? Mt(e, n) : e))), En(this, e, "onProps"), kn(this, "onProps", e, this);
                        const a = this._prepareNode(e);
                        if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                        const i = this._state;
                        return Qt(++this._lastCallId, {
                            key: n,
                            props: e,
                            defaultProps: r,
                            state: i,
                            actions: {
                                pause: () => {
                                    vn(this) || (hn(this, !0), $(i.pauseQueue), kn(this, "onPause", tn(this, bn(this, this.animation.to)), this))
                                },
                                resume: () => {
                                    vn(this) && (hn(this, !1), fn(this) && this._resume(), $(i.resumeQueue), kn(this, "onResume", tn(this, bn(this, this.animation.to)), this))
                                },
                                start: this._merge.bind(this, a)
                            }
                        }).then((n => {
                            if (e.loop && n.finished && (!t || !n.noop)) {
                                const t = yn(e);
                                if (t) return this._update(t, !0)
                            }
                            return n
                        }))
                    }
                    _merge(e, t, n) {
                        if (t.cancel) return this.stop(!0), n(nn(this));
                        const r = !W.und(e.to),
                            a = !W.und(e.from);
                        if (r || a) {
                            if (!(t.callId > this._lastToId)) return n(nn(this));
                            this._lastToId = t.callId
                        }
                        const {
                            key: i,
                            defaultProps: o,
                            animation: s
                        } = this, {
                            to: c,
                            from: u
                        } = s;
                        let {
                            to: l = c,
                            from: d = u
                        } = e;
                        !a || r || t.default && !W.und(l) || (l = d), t.reverse && ([l, d] = [d, l]);
                        const p = !q(d, u);
                        p && (s.from = d), d = ze(d);
                        const f = !q(l, c);
                        f && this._focus(l);
                        const v = Ht(t.to),
                            {
                                config: m
                            } = s,
                            {
                                decay: h,
                                velocity: g
                            } = m;
                        (r || a) && (m.velocity = 0), t.config && !v && function(e, t, n) {
                            n && (Kt(n = { ...n
                            }, t), t = { ...n,
                                ...t
                            }), Kt(e, t), Object.assign(e, t);
                            for (const o in Yt) null == e[o] && (e[o] = Yt[o]);
                            let {
                                frequency: r,
                                damping: a
                            } = e;
                            const {
                                mass: i
                            } = e;
                            W.und(r) || (r < .01 && (r = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * a * i / r)
                        }(m, Pt(t.config, i), t.config !== o.config ? Pt(o.config, i) : void 0);
                        let b = bt(this);
                        if (!b || W.und(l)) return n(tn(this, !0));
                        const y = W.und(t.reset) ? a && !t.default : !W.und(d) && Lt(t.reset, i),
                            w = y ? d : this.get(),
                            _ = Bt(l),
                            x = W.num(_) || W.arr(_) || dt(_),
                            T = !v && (!x || Lt(o.immediate || t.immediate, i));
                        if (f) {
                            const e = Ct(l);
                            if (e !== b.constructor) {
                                if (!T) throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);
                                b = this._set(_)
                            }
                        }
                        const E = b.constructor;
                        let S = Be(l),
                            A = !1;
                        if (!S) {
                            const e = y || !pn(this) && p;
                            (f || e) && (A = q(Bt(w), _), S = !A), (q(s.immediate, T) || T) && q(m.decay, h) && q(m.velocity, g) || (S = !0)
                        }
                        if (A && fn(this) && (s.changed && !y ? S = !0 : S || this._stop(c)), !v && ((S || Be(c)) && (s.values = b.getPayload(), s.toValues = Be(l) ? null : E == Tt ? [1] : K(_)), s.immediate != T && (s.immediate = T, T || y || this._set(c)), S)) {
                            const {
                                onRest: e
                            } = s;
                            Y(Tn, (e => En(this, t, e)));
                            const r = tn(this, bn(this, c));
                            $(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && k.batchedUpdates((() => {
                                s.changed = !y, e ? .(r, this), y ? Pt(o.onRest, r) : s.onStart ? .(r, this)
                            }))
                        }
                        y && this._set(w), v ? n(rn(t.to, t, this._state, this)) : S ? this._start() : fn(this) && !f ? this._pendingCalls.add(n) : n(en(w))
                    }
                    _focus(e) {
                        const t = this.animation;
                        e !== t.to && (He(this) && this._detach(), t.to = e, He(this) && this._attach())
                    }
                    _attach() {
                        let e = 0;
                        const {
                            to: t
                        } = this.animation;
                        Be(t) && (Je(t, this), cn(t) && (e = t.priority + 1)), this.priority = e
                    }
                    _detach() {
                        const {
                            to: e
                        } = this.animation;
                        Be(e) && Ke(e, this)
                    }
                    _set(e, t = !0) {
                        const n = ze(e);
                        if (!W.und(n)) {
                            const e = bt(this);
                            if (!e || !q(n, e.getValue())) {
                                const r = Ct(n);
                                e && e.constructor == r ? e.setValue(n) : yt(this, r.create(n)), e && k.batchedUpdates((() => {
                                    this._onChange(n, t)
                                }))
                            }
                        }
                        return bt(this)
                    }
                    _onStart() {
                        const e = this.animation;
                        e.changed || (e.changed = !0, kn(this, "onStart", tn(this, bn(this, e.to)), this))
                    }
                    _onChange(e, t) {
                        t || (this._onStart(), Pt(this.animation.onChange, e, this)), Pt(this.defaultProps.onChange, e, this), super._onChange(e, t)
                    }
                    _start() {
                        const e = this.animation;
                        bt(this).reset(ze(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), fn(this) || (mn(this, !0), vn(this) || this._resume())
                    }
                    _resume() {
                        z.skipAnimation ? this.finish() : ue.start(this)
                    }
                    _stop(e, t) {
                        if (fn(this)) {
                            mn(this, !1);
                            const n = this.animation;
                            Y(n.values, (e => {
                                e.done = !0
                            })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), We(this, {
                                type: "idle",
                                parent: this
                            });
                            const r = t ? nn(this.get()) : tn(this.get(), bn(this, e ? ? n.to));
                            $(this._pendingCalls, r), n.changed && (n.changed = !1, kn(this, "onRest", r, this))
                        }
                    }
                };

            function bn(e, t) {
                const n = Bt(t);
                return q(Bt(e.get()), n)
            }

            function yn(e, t = e.loop, n = e.to) {
                const r = Pt(t);
                if (r) {
                    const a = !0 !== r && Gt(r),
                        i = (a || e).reverse,
                        o = !a || a.reset;
                    return wn({ ...e,
                        loop: t,
                        default: !1,
                        pause: void 0,
                        to: !i || Ht(n) ? n : void 0,
                        from: o ? e.from : void 0,
                        reset: o,
                        ...a
                    })
                }
            }

            function wn(e) {
                const {
                    to: t,
                    from: n
                } = e = Gt(e), r = new Set;
                return W.obj(t) && xn(t, r), W.obj(n) && xn(n, r), e.keys = r.size ? Array.from(r) : null, e
            }

            function _n(e) {
                const t = wn(e);
                return W.und(t.default) && (t.default = jt(t)), t
            }

            function xn(e, t) {
                J(e, ((e, n) => null != e && t.add(n)))
            }
            var Tn = ["onStart", "onRest", "onChange", "onPause", "onResume"];

            function En(e, t, n) {
                e.animation[n] = t[n] !== Dt(t, n) ? Mt(t[n], e.key) : void 0
            }

            function kn(e, t, ...n) {
                e.animation[t] ? .(...n), e.defaultProps[t] ? .(...n)
            }
            var Sn = ["onStart", "onChange", "onRest"],
                An = 1,
                Cn = class {
                    constructor(e, t) {
                        this.id = An++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                            paused: !1,
                            pauseQueue: new Set,
                            resumeQueue: new Set,
                            timeouts: new Set
                        }, this._events = {
                            onStart: new Map,
                            onChange: new Map,
                            onRest: new Map
                        }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                            default: !0,
                            ...e
                        })
                    }
                    get idle() {
                        return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
                    }
                    get item() {
                        return this._item
                    }
                    set item(e) {
                        this._item = e
                    }
                    get() {
                        const e = {};
                        return this.each(((t, n) => e[n] = t.get())), e
                    }
                    set(e) {
                        for (const t in e) {
                            const n = e[t];
                            W.und(n) || this.springs[t].set(n)
                        }
                    }
                    update(e) {
                        return e && this.queue.push(wn(e)), this
                    }
                    start(e) {
                        let {
                            queue: t
                        } = this;
                        return e ? t = K(e).map(wn) : this.queue = [], this._flush ? this._flush(this, t) : (Mn(this, t), Rn(this, t))
                    }
                    stop(e, t) {
                        if (e !== !!e && (t = e), t) {
                            const n = this.springs;
                            Y(K(t), (t => n[t].stop(!!e)))
                        } else an(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
                        return this
                    }
                    pause(e) {
                        if (W.und(e)) this.start({
                            pause: !0
                        });
                        else {
                            const t = this.springs;
                            Y(K(e), (e => t[e].pause()))
                        }
                        return this
                    }
                    resume(e) {
                        if (W.und(e)) this.start({
                            pause: !1
                        });
                        else {
                            const t = this.springs;
                            Y(K(e), (e => t[e].resume()))
                        }
                        return this
                    }
                    each(e) {
                        J(this.springs, e)
                    }
                    _onFrame() {
                        const {
                            onStart: e,
                            onChange: t,
                            onRest: n
                        } = this._events, r = this._active.size > 0, a = this._changed.size > 0;
                        (r && !this._started || a && !this._started) && (this._started = !0, Z(e, (([e, t]) => {
                            t.value = this.get(), e(t, this, this._item)
                        })));
                        const i = !r && this._started,
                            o = a || i && n.size ? this.get() : null;
                        a && t.size && Z(t, (([e, t]) => {
                            t.value = o, e(t, this, this._item)
                        })), i && (this._started = !1, Z(n, (([e, t]) => {
                            t.value = o, e(t, this, this._item)
                        })))
                    }
                    eventObserved(e) {
                        if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                        else {
                            if ("idle" != e.type) return;
                            this._active.delete(e.parent)
                        }
                        k.onFrame(this._onFrame)
                    }
                };

            function Rn(e, t) {
                return Promise.all(t.map((t => In(e, t)))).then((t => $t(e, t)))
            }
            async function In(e, t, n) {
                const {
                    keys: r,
                    to: a,
                    from: i,
                    loop: o,
                    onRest: s,
                    onResolve: c
                } = t, u = W.obj(t.default) && t.default;
                o && (t.loop = !1), !1 === a && (t.to = null), !1 === i && (t.from = null);
                const l = W.arr(a) || W.fun(a) ? a : void 0;
                l ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Y(Sn, (n => {
                    const r = t[n];
                    if (W.fun(r)) {
                        const a = e._events[n];
                        t[n] = ({
                            finished: e,
                            cancelled: t
                        }) => {
                            const n = a.get(r);
                            n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : a.set(r, {
                                value: null,
                                finished: e || !1,
                                cancelled: t || !1
                            })
                        }, u && (u[n] = t[n])
                    }
                }));
                const d = e._state;
                t.pause === !d.paused ? (d.paused = t.pause, $(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
                const p = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
                    f = !0 === t.cancel || !0 === Dt(t, "cancel");
                (l || f && d.asyncId) && p.push(Qt(++e._lastAsyncId, {
                    props: t,
                    state: d,
                    actions: {
                        pause: H,
                        resume: H,
                        start(t, n) {
                            f ? (an(d, e._lastAsyncId), n(nn(e))) : (t.onRest = s, n(rn(l, t, d, e)))
                        }
                    }
                })), d.paused && await new Promise((e => {
                    d.resumeQueue.add(e)
                }));
                const v = $t(e, await Promise.all(p));
                if (o && v.finished && (!n || !v.noop)) {
                    const n = yn(t, o, a);
                    if (n) return Mn(e, [n]), In(e, n, !0)
                }
                return c && k.batchedUpdates((() => c(v, e, e.item))), v
            }

            function Nn(e, t) {
                const n = { ...e.springs
                };
                return t && Y(K(t), (e => {
                    W.und(e.keys) && (e = wn(e)), W.obj(e.to) || (e = { ...e,
                        to: void 0
                    }), Ln(n, e, (e => Pn(e)))
                })), On(e, n), n
            }

            function On(e, t) {
                J(t, ((t, n) => {
                    e.springs[n] || (e.springs[n] = t, Je(t, e))
                }))
            }

            function Pn(e, t) {
                const n = new gn;
                return n.key = e, t && Je(n, t), n
            }

            function Ln(e, t, n) {
                t.keys && Y(t.keys, (r => {
                    (e[r] || (e[r] = n(r)))._prepareNode(t)
                }))
            }

            function Mn(e, t) {
                Y(t, (t => {
                    Ln(e.springs, t, (t => Pn(t, e)))
                }))
            }
            var Dn, Vn, jn = ({
                    children: e,
                    ...t
                }) => {
                    const n = (0, c.useContext)(Fn),
                        r = t.pause || !!n.pause,
                        a = t.immediate || !!n.immediate;
                    t = function(e, t) {
                        const [n] = (0, c.useState)((() => ({
                            inputs: t,
                            result: e()
                        }))), r = (0, c.useRef)(), a = r.current;
                        let i = a;
                        i ? Boolean(t && i.inputs && function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }(t, i.inputs)) || (i = {
                            inputs: t,
                            result: e()
                        }) : i = n;
                        return (0, c.useEffect)((() => {
                            r.current = i, a == n && (n.inputs = n.result = void 0)
                        }), [i]), i.result
                    }((() => ({
                        pause: r,
                        immediate: a
                    })), [r, a]);
                    const {
                        Provider: i
                    } = Fn;
                    return c.createElement(i, {
                        value: t
                    }, e)
                },
                Fn = (Dn = jn, Vn = {}, Object.assign(Dn, c.createContext(Vn)), Dn.Provider._context = Dn, Dn.Consumer._context = Dn, Dn);
            jn.Provider = Fn.Provider, jn.Consumer = Fn.Consumer;
            var Un = () => {
                const e = [],
                    t = function(t) {
                        lt(`${st}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                        const r = [];
                        return Y(e, ((e, a) => {
                            if (W.und(t)) r.push(e.start());
                            else {
                                const i = n(t, e, a);
                                i && r.push(e.start(i))
                            }
                        })), r
                    };
                t.current = e, t.add = function(t) {
                    e.includes(t) || e.push(t)
                }, t.delete = function(t) {
                    const n = e.indexOf(t);
                    ~n && e.splice(n, 1)
                }, t.pause = function() {
                    return Y(e, (e => e.pause(...arguments))), this
                }, t.resume = function() {
                    return Y(e, (e => e.resume(...arguments))), this
                }, t.set = function(t) {
                    Y(e, ((e, n) => {
                        const r = W.fun(t) ? t(n, e) : t;
                        r && e.set(r)
                    }))
                }, t.start = function(t) {
                    const n = [];
                    return Y(e, ((e, r) => {
                        if (W.und(t)) n.push(e.start());
                        else {
                            const a = this._getProps(t, e, r);
                            a && n.push(e.start(a))
                        }
                    })), n
                }, t.stop = function() {
                    return Y(e, (e => e.stop(...arguments))), this
                }, t.update = function(t) {
                    return Y(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
                };
                const n = function(e, t, n) {
                    return W.fun(e) ? e(n, t) : e
                };
                return t._getProps = n, t
            };

            function Gn(e, t, n) {
                const r = W.fun(t) && t;
                r && !n && (n = []);
                const a = (0, c.useMemo)((() => r || 3 == arguments.length ? Un() : void 0), []),
                    i = (0, c.useRef)(0),
                    o = ft(),
                    s = (0, c.useMemo)((() => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = Nn(e, t);
                            return i.current > 0 && !s.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Rn(e, t) : new Promise((r => {
                                On(e, n), s.queue.push((() => {
                                    r(Rn(e, t))
                                })), o()
                            }))
                        }
                    })), []),
                    u = (0, c.useRef)([...s.ctrls]),
                    l = [],
                    d = ht(e) || 0;

                function p(e, n) {
                    for (let a = e; a < n; a++) {
                        const e = u.current[a] || (u.current[a] = new Cn(null, s.flush)),
                            n = r ? r(a, e) : t[a];
                        n && (l[a] = _n(n))
                    }
                }(0, c.useMemo)((() => {
                    Y(u.current.slice(e, d), (e => {
                        Wt(e, a), e.stop(!0)
                    })), u.current.length = e, p(d, e)
                }), [e]), (0, c.useMemo)((() => {
                    p(0, Math.min(d, e))
                }), n);
                const f = u.current.map(((e, t) => Nn(e, l[t]))),
                    v = (0, c.useContext)(jn),
                    m = ht(v),
                    h = v !== m && zt(v);
                pt((() => {
                    i.current++, s.ctrls = u.current;
                    const {
                        queue: e
                    } = s;
                    e.length && (s.queue = [], Y(e, (e => e()))), Y(u.current, ((e, t) => {
                        a ? .add(e), h && e.start({
                            default: v
                        });
                        const n = l[t];
                        n && (qt(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
                    }))
                })), vt((() => () => {
                    Y(s.ctrls, (e => e.stop(!0)))
                }));
                const g = f.map((e => ({ ...e
                })));
                return a ? [g, a] : g
            }

            function Bn(e, t) {
                const n = W.fun(e),
                    [
                        [r], a
                    ] = Gn(1, n ? e : [e], n ? t || [] : t);
                return n || 2 == arguments.length ? [r, a] : r
            }
            var zn = class extends ln {
                constructor(e, t) {
                    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Oe(...t);
                    const n = this._get(),
                        r = Ct(n);
                    yt(this, r.create(n))
                }
                advance(e) {
                    const t = this._get();
                    q(t, this.get()) || (bt(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Wn(this._active) && qn(this)
                }
                _get() {
                    const e = W.arr(this.source) ? this.source.map(ze) : K(ze(this.source));
                    return this.calc(...e)
                }
                _start() {
                    this.idle && !Wn(this._active) && (this.idle = !1, Y(wt(this), (e => {
                        e.done = !1
                    })), z.skipAnimation ? (k.batchedUpdates((() => this.advance())), qn(this)) : ue.start(this))
                }
                _attach() {
                    let e = 1;
                    Y(K(this.source), (t => {
                        Be(t) && Je(t, this), cn(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
                    })), this.priority = e, this._start()
                }
                _detach() {
                    Y(K(this.source), (e => {
                        Be(e) && Ke(e, this)
                    })), this._active.clear(), qn(this)
                }
                eventObserved(e) {
                    "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = K(this.source).reduce(((e, t) => Math.max(e, (cn(t) ? t.priority : 0) + 1)), 0))
                }
            };

            function Hn(e) {
                return !1 !== e.idle
            }

            function Wn(e) {
                return !e.size || Array.from(e).every(Hn)
            }

            function qn(e) {
                e.idle || (e.idle = !0, Y(wt(e), (e => {
                    e.done = !0
                })), We(e, {
                    type: "idle",
                    parent: e
                }))
            }
            z.assign({
                createStringInterpolator: ot,
                to: (e, t) => new zn(e, t)
            });
            ue.advance;
            var Yn = n("hTvQ"),
                Jn = /^--/;

            function Kn(e, t) {
                return null == t || "boolean" === typeof t || "" === t ? "" : "number" !== typeof t || 0 === t || Jn.test(e) || Xn.hasOwnProperty(e) && Xn[e] ? ("" + t).trim() : t + "px"
            }
            var Zn = {};
            var Xn = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                Qn = ["Webkit", "Ms", "Moz", "O"];
            Xn = Object.keys(Xn).reduce(((e, t) => (Qn.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Xn);
            var $n = /^(matrix|translate|scale|rotate|skew)/,
                er = /^(translate)/,
                tr = /^(rotate|skew)/,
                nr = (e, t) => W.num(e) && 0 !== e ? e + t : e,
                rr = (e, t) => W.arr(e) ? e.every((e => rr(e, t))) : W.num(e) ? e === t : parseFloat(e) === t,
                ar = class extends kt {
                    constructor({
                        x: e,
                        y: t,
                        z: n,
                        ...r
                    }) {
                        const a = [],
                            i = [];
                        (e || t || n) && (a.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>nr(e,"px"))).join(",")})`, rr(e, 0)]))), J(r, ((e, t) => {
                            if ("transform" === t) a.push([e || ""]), i.push((e => [e, "" === e]));
                            else if ($n.test(t)) {
                                if (delete r[t], W.und(e)) return;
                                const n = er.test(t) ? "px" : tr.test(t) ? "deg" : "";
                                a.push(K(e)), i.push("rotate3d" === t ? ([e, t, r, a]) => [`rotate3d(${e},${t},${r},${nr(a,n)})`, rr(a, 0)] : e => [`${t}(${e.map((e=>nr(e,n))).join(",")})`, rr(e, t.startsWith("scale") ? 1 : 0)])
                            }
                        })), a.length && (r.transform = new ir(a, i)), super(r)
                    }
                },
                ir = class extends qe {
                    constructor(e, t) {
                        super(), this.inputs = e, this.transforms = t, this._value = null
                    }
                    get() {
                        return this._value || (this._value = this._get())
                    }
                    _get() {
                        let e = "",
                            t = !0;
                        return Y(this.inputs, ((n, r) => {
                            const a = ze(n[0]),
                                [i, o] = this.transforms[r](W.arr(a) ? a : n.map(ze));
                            e += " " + i, t = t && o
                        })), t ? "none" : e
                    }
                    observerAdded(e) {
                        1 == e && Y(this.inputs, (e => Y(e, (e => Be(e) && Je(e, this)))))
                    }
                    observerRemoved(e) {
                        0 == e && Y(this.inputs, (e => Y(e, (e => Be(e) && Ke(e, this)))))
                    }
                    eventObserved(e) {
                        "change" == e.type && (this._value = null), We(this, e)
                    }
                };
            z.assign({
                batchedUpdates: Yn.unstable_batchedUpdates,
                createStringInterpolator: ot,
                colors: {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                }
            });
            var or = ((e, {
                    applyAnimatedValues: t = () => !1,
                    createAnimatedStyle: n = e => new kt(e),
                    getComponentProps: r = e => e
                } = {}) => {
                    const a = {
                            applyAnimatedValues: t,
                            createAnimatedStyle: n,
                            getComponentProps: r
                        },
                        i = e => {
                            const t = Ot(e) || "Anonymous";
                            return (e = W.str(e) ? i[e] || (i[e] = Rt(e, a)) : e[Nt] || (e[Nt] = Rt(e, a))).displayName = `Animated(${t})`, e
                        };
                    return J(e, ((t, n) => {
                        W.arr(e) && (n = Ot(t)), i[n] = i(t)
                    })), {
                        animated: i
                    }
                })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
                    applyAnimatedValues: function(e, t) {
                        if (!e.nodeType || !e.setAttribute) return !1;
                        const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                            {
                                className: r,
                                style: a,
                                children: i,
                                scrollTop: o,
                                scrollLeft: s,
                                viewBox: c,
                                ...u
                            } = t,
                            l = Object.values(u),
                            d = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : Zn[t] || (Zn[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
                        void 0 !== i && (e.textContent = i);
                        for (const p in a)
                            if (a.hasOwnProperty(p)) {
                                const t = Kn(p, a[p]);
                                Jn.test(p) ? e.style.setProperty(p, t) : e.style[p] = t
                            }
                        d.forEach(((t, n) => {
                            e.setAttribute(t, l[n])
                        })), void 0 !== r && (e.className = r), void 0 !== o && (e.scrollTop = o), void 0 !== s && (e.scrollLeft = s), void 0 !== c && e.setAttribute("viewBox", c)
                    },
                    createAnimatedStyle: e => new ar(e),
                    getComponentProps: ({
                        scrollTop: e,
                        scrollLeft: t,
                        ...n
                    }) => n
                }),
                sr = or.animated,
                cr = n("1lvF"),
                ur = n("jor4"),
                lr = n("bznE"),
                dr = n("xRXw"),
                pr = n("JSvb"),
                fr = n("S+0I"),
                vr = n("66mo"),
                mr = n.n(vr),
                hr = n("5nld"),
                gr = n("XqCI"),
                br = (function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/strategy/rebalancingbot/query-open");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    })))
                }(), function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/strategy/rebalancingbot/query-history?".concat((0, gr.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/asset/v2/public/asset-service/product/get-product-by-symbols?symbols=".concat(t), {});
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
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryAllStrategyAsset", {});
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
                                    return e.abrupt("return", (0, a._)({
                                        success: "000000" === (null === t || void 0 === t ? void 0 : t.code)
                                    }, t));
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
                yr = function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryStrategyInfo".concat(t ? "?productLine=".concat(t) : ""), {});
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
                                    return e.abrupt("return", (0, a._)({
                                        success: "000000" === (null === n || void 0 === n ? void 0 : n.code)
                                    }, n));
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
                wr = (function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryStrategyPosition?coin=".concat(t), {});
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
                                    return e.abrupt("return", (0, a._)({
                                        success: "000000" === (null === n || void 0 === n ? void 0 : n.code)
                                    }, n));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/strategy/rebalancingbot/cancel-rebalancing-bot", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: null,
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/strategy/rebalancingbot/update-rebalancing-bot", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/public/strategy/rebalancingbot/recommending-params");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    })))
                }(), function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/strategy/rebalancingbot/place-rebalancing-bot", t);
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
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/strategy/rebalancingbot/adjust-position", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryRewardInfo", {});
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                        code: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.status
                                    };
                                case 10:
                                    return e.abrupt("return", (0, a._)({
                                        success: "000000" === (null === t || void 0 === t ? void 0 : t.code)
                                    }, t));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/future/strategy/wallet/withdrawReward");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    })))
                }(), function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/strategy/rebalancingbot/query-detail?".concat((0, gr.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/asset/v2/public/asset/asset/get-all-asset");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    })))
                }(), function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryBnbRebateFee?".concat((0, gr.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/strategy/rebalancingbot/query-sub-order?".concat((0, gr.E2)(t)));
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: {},
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v2/private/asset-service/wallet/balance?needBalanceDetail=true");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        data: [],
                                        message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                    })))
                }(), n("4hgs")),
                _r = n("krnk");
            var xr = n("jM3e"),
                Tr = n("UuPx"),
                Er = n("bt5r"),
                kr = n("wIZF"),
                Sr = n("TQvm");
            const Ar = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.94 5.06l16 16 2.12-2.12-2.446-2.447L23 12l-5.555-5.69a7.566 7.566 0 00-9.883-.87L5.06 2.94 2.939 5.06zm6.747 2.506a5 5 0 016.747 6.747L9.687 7.566z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    d: "M1 12l2.29-2.346 10.198 10.198a7.574 7.574 0 01-6.933-2.162L1 12z",
                    fill: "currentColor"
                }))
            };
            const Cr = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.555 6.31L1 12l5.555 5.69a7.572 7.572 0 0010.89 0L23 12l-5.555-5.69a7.572 7.572 0 00-10.89 0zM17 12a5 5 0 11-10 0 5 5 0 0110 0z",
                    fill: "currentColor"
                }))
            };
            var Rr = n("shb9"),
                Ir = n("A4nT");
            (function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryUMAssetDetail");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: [],
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                })))
            })(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/composite/v1/private/bigdata/finance/trading-bot/total-pnl/trend", t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            }();
            var Nr = function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/composite/v1/private/bigdata/finance/trading-bot/total-pnl");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            }();
            (function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/composite/v1/private/bigdata/finance/trading-bot/total-pnl/transaction-fee", t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            })(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/queryCMAssetDetail");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: [],
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/capital/v1/private/future/strategy/wallet/queryArbitrageAssetDetail");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: [],
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/composite/v1/private/bigdata/finance/trading-bot/bot-pnl", t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/composite/v1/private/bigdata/finance/trading-bot/bot-pnl/trend", t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: {},
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/futures/v1/private/future/strategy/wallet/querySpotAssetDetail?strategyType=".concat(t.strategyType), t);
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: [],
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message
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
            }();
            var Or = n("BIu/");
            var Pr = n("tM9B"),
                Lr = n("NoXm"),
                Mr = (Lr.cachePromiseStore.checkCacheBeforeRequest("vipInfo", function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        var t, n, r;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, hr.Jt)("/bapi/accounts/v1/private/vip/vip-portal/crm-mgmt/vip-customer-agent-info");
                                case 3:
                                    if (t = e.sent, n = t.success, r = t.data, !n) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(0), console.error(e.t0);
                                case 13:
                                    return e.abrupt("return", null);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()), function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        var t, n, r = arguments;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, e.next = 3, (0, hr.bE)("/bapi/composite/v2/private/pgc/user", {
                                        getFollowCount: !0
                                    }, t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }());
            Lr.cachePromiseStore.checkCacheBeforeRequest("userSquareInfo", (0, fr._)(mr().mark((function e() {
                var t, n, r, a, i, o;
                return mr().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Mr();
                        case 3:
                            return t = e.sent, n = t.data || {}, r = n.totalFollowCount, a = n.totalFollowerCount, i = n.binanceUid, o = n.username, e.abrupt("return", {
                                followingCount: r,
                                followerCount: a,
                                binanceUid: i,
                                isLoaded: !0,
                                username: o
                            });
                        case 8:
                            e.prev = 8, e.t0 = e.catch(0), console.error("Error fetching PGC user info:", e.t0);
                        case 11:
                            return e.abrupt("return", null);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 8]
                ])
            }))));
            n("b6CO"), n("FHqy");
            var Dr = n("txKm");
            Dr.A;
            var Vr, jr = "MAIN",
                Fr = "MARGIN",
                Ur = "FUTURE",
                Gr = "SAVING",
                Br = "CARD",
                zr = "DELIVERY",
                Hr = "ISOLATED_MARGIN",
                Wr = "TOPTION",
                qr = "STRATEGY",
                Yr = "COPY_TRADE",
                Jr = "PORTFOLIO_MARGIN",
                Kr = (Vr = {}, (0, r._)(Vr, jr, "{{lang}}/trade/{{pair}}"), (0, r._)(Vr, Br, "{{lang}}/convert/{{pair}}"), (0, r._)(Vr, Fr, "{{lang}}/trade/{{pair}}?type=cross"), (0, r._)(Vr, Ur, "{{lang}}/futures/{{pair}}"), (0, r._)(Vr, zr, "{{lang}}/delivery/{{pair}}_perpetual"), (0, r._)(Vr, Hr, "{{lang}}/trade/{{pair}}?type=isolated"), (0, r._)(Vr, Gr, "{{lang}}/earn"), (0, r._)(Vr, Wr, "{{lang}}/eoptions/BTCUSDT"), (0, r._)(Vr, qr, "{{lang}}/trading-bots"), (0, r._)(Vr, Yr, "{{lang}}/copy-trading"), (0, r._)(Vr, Jr, "{{lang}}/trade/{{pair}}?type=cross"), n("HS2I")),
                Zr = n("S9mB"),
                Xr = n("NBFp"),
                Qr = n("CIs1"),
                $r = n("4xHp"),
                ea = n("5nra"),
                ta = n("/PUg");
            var na = n("7ZgD"),
                ra = function() {
                    var e = window.localStorage.getItem("nearingRedirectTime"),
                        t = window.localStorage.getItem("redirectTimes") || 0,
                        n = (new Date).getTime();
                    e && n - e < 3e5 ? ++t > 3 && function(...e) {
                        ta.OW.pika = (null === ta.OW || void 0 === ta.OW ? void 0 : ta.OW.pika) || {}, ta.OW.pika.__REPORT_ERRORS__ = ta.OW.pika.__REPORT_ERRORS__ || [], ta.OW.pika.__REPORT_ERRORS__.push(e)
                    }("0100000", "redirect warning", {
                        page: "mainuc"
                    }) : (window.localStorage.setItem("nearingRedirectTime", n), window.localStorage.setItem("redirectTimes", 1))
                },
                aa = (0, Xr.PC)(),
                ia = aa.I18N_BASE_PRIVATE,
                oa = aa.I18N_BASE_PUBLIC,
                sa = aa.STATIC_HOST,
                ca = na.o ? oa : ia,
                ua = function(e, t) {
                    return e.indexOf(t) > -1
                };
            ! function() {
                var e = (0, fr._)(mr().mark((function e(t, n, r) {
                    var a, i, o, s, c, u;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 3, (0, Qr.Qr)({
                                    response: t,
                                    apiOpts: n,
                                    opts: r,
                                    staticHost: sa
                                });
                            case 3:
                                return 401 === (t = e.sent).status && na.o && (null === Lr.cachePromiseStore || void 0 === Lr.cachePromiseStore || null === (a = Lr.cachePromiseStore.state) || void 0 === a || null === (i = a.commonEnv) || void 0 === i ? void 0 : i.domain) && ua(t.url, Lr.cachePromiseStore.state.commonEnv.domain) && (o = Lr.cachePromiseStore.state.commonEnv.domain, s = Lr.cachePromiseStore.state.lang, c = window.btoa(window.location.href), ra(), window.location.href = "https://www.".concat(o, "/").concat(s, "/login?return_to=").concat(c)), u = Zr.A.language || "undefined" !== typeof window && window.localStorage.i18nextLng || "en", e.next = 8, (0, $r.A)({
                                    response: t,
                                    apiOpts: n,
                                    globalOpts: {
                                        language: u,
                                        i18nHost: ca,
                                        enableAutoToast: !1,
                                        toastOpts: {
                                            anchorOrigin: {
                                                horizontal: "right",
                                                vertical: "top"
                                            }
                                        }
                                    }
                                });
                            case 8:
                                return (0, ea.V)({
                                    response: t,
                                    apiOpts: n,
                                    globalOpts: {
                                        language: u,
                                        i18nHost: ca,
                                        enable: !0,
                                        excludeErrorCode: ["100001005", "128003", "200011003"],
                                        toastOpts: {
                                            anchorOrigin: {
                                                horizontal: "right",
                                                vertical: "top"
                                            }
                                        }
                                    }
                                }), e.abrupt("return", t);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var la = n("F3rx"),
                da = n.n(la);
            "undefined" === typeof window || (window.matchMedia("(min-width: 1280px)").matches, window.matchMedia("(max-width: 767px)").matches, window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches);
            !!na.o && window.navigator.userAgent.includes("Electron");
            var pa = (0, Xr.PC)();
            pa.REACT_APP_SITE_HOST, pa.SITE_HOST, (0, n("m0k9").S)().isHybrid;
            var fa = function(e, t) {
                if (!na.o) return function() {
                    return [t, function() {}]
                };
                var n = function(e) {
                    try {
                        var t = window.localStorage.getItem(e);
                        return null === t ? null : "true" === t || "false" === t ? "true" === t : JSON.parse(t)
                    } catch (n) {
                        return console.error("Error retrieving ".concat(e, " from localStorage:"), n), null
                    }
                }(e);
                return function() {
                    var t = (0, o._)((0, Lr.useCacheState)(e, n), 2),
                        r = t[0],
                        a = t[1];
                    return [r, function(t) {
                        window.localStorage.setItem(e, JSON.stringify(t)), a(t)
                    }]
                }
            }("isHideSmallBalance", !0);
            console.warn("formatNumberLocale is deprecated, please use 'import { normalizeDecimals2ToN } from @binance/com-format' instead");
            (0, Xr.PC)().REACT_APP_SITE_HOST;
            var va = function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/margin/v1/friendly/margin/asset/all");
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
            }();
            (function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/margin/v1/private/margin/portfolio/user-liability");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/margin/v1/private/margin/portfolio/repay");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t, n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/margin/v1/private/margin/manual-liquidation/privacy-tokens");
                            case 4:
                                n = e.sent, t = n, e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    message: e.t0.message
                                };
                            case 11:
                                return e.abrupt("return", t);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t, n, r, a;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = null, e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/margin/v1/private/margin/region-privacy-tokens");
                            case 4:
                                n = e.sent, r = n.success, a = n.data, r && (t = a), e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1), t = null;
                            case 13:
                                return e.abrupt("return", t);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    data: [],
                                    success: !1
                                }, e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/margin/v1/public/margin/asset/all");
                            case 4:
                                t = e.sent, e.next = 9;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1);
                            case 9:
                                return e.abrupt("return", t);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/margin/v1/public/margin/config");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t, n) {
                    var r;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/margin/v1/private/margin/close-asset-position/".concat(t, "?targetAsset=").concat(n.targetAsset), n);
                            case 2:
                                return r = e.sent, e.abrupt("return", r);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/margin/v1/private/margin/close-all-asset-positions/".concat(t));
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(), Lr.cachePromiseStore.checkCacheBeforeRequest("marginAsset", (0, fr._)(mr().mark((function e() {
                var t, n;
                return mr().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, va();
                        case 2:
                            return t = e.sent, n = t.reduce((function(e, t) {
                                return e[t.assetName] = t, e
                            }), {}), e.abrupt("return", {
                                assetsList: t,
                                assetsMap: n
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))));
            (function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/asset/v1/private/asset-service/asset/btc-valuation", t);
                            case 2:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n, r;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/asset/v2/private/asset-service/asset/get-user-asset", t);
                            case 2:
                                return n = e.sent, r = n.data, e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t, n, r, a = arguments;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.next = 3, (0, hr.bE)("/bapi/asset/v3/private/asset-service/asset/get-user-asset", t);
                            case 3:
                                return n = e.sent, r = n.data, e.abrupt("return", r);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/fiat/v1/private/fiatpayment/deposit/kyclimit", t);
                            case 2:
                                if ("000000" !== (n = e.sent).code) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", n.data);
                            case 5:
                                return e.abrupt("return", {});
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/c2c/v1/private/c2c/asset/get-user-assets-to-btc", t);
                            case 2:
                                return n = e.sent.data, e.abrupt("return", n);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/asset/v1/private/asset-service/asset/checkUserAsset");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/future/leverage/token/redeem", t);
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
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.bE)("/bapi/futures/v1/private/future/leverage/token/purchase", t);
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
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n, r, a = arguments;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a.length > 1 && void 0 !== a[1] && a[1], e.next = 3, (0, hr.bE)("/bapi/asset/v1/private/asset-service/wallet/transfer", t, {
                                    enableErrorMsgIntercept: n
                                });
                            case 3:
                                return r = e.sent, e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n, r, a = arguments;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a.length > 1 && void 0 !== a[1] && a[1], e.next = 3, (0, hr.bE)("/bapi/margin/v1/private/margin/portfolio/transfer-futures", t, {
                                    enableErrorMsgIntercept: n
                                });
                            case 3:
                                return r = e.sent, e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/asset/v1/private/asset-service/wallet/get-all-config");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t || []);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var ma = function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/asset/v1/public/asset-service/wallet/get-support-asset");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t || {});
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n, r, a;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/asset/v1/private/asset-service/asset/get-transaction-history", t);
                            case 2:
                                return n = e.sent, r = n.data, a = n.total, e.abrupt("return", {
                                    rows: r,
                                    total: a
                                } || {
                                    rows: [],
                                    total: 0
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.bE)("/bapi/asset/v3/private/asset-service/asset/get-ledger-asset", t);
                            case 2:
                                return n = e.sent.data, e.abrupt("return", n || []);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/asset/v1/private/asset-service/product/blocked");
                            case 2:
                                return t = e.sent, e.abrupt("return", t);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t) {
                    var n;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/asset/v2/private/asset-service/wallet/balance?".concat((0, gr.E2)(t)));
                            case 4:
                                n = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), n = {
                                    success: !1,
                                    data: []
                                };
                            case 10:
                                return e.abrupt("return", Array.isArray(null === n || void 0 === n ? void 0 : n.data) ? null === n || void 0 === n ? void 0 : n.data : []);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))
            }(), Lr.cachePromiseStore.checkCacheBeforeRequest("assetServiceWalletAsset", (0, fr._)(mr().mark((function e() {
                var t, n;
                return mr().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ma();
                        case 2:
                            return t = e.sent, n = Object.keys(t).reduce((function(e, n) {
                                var o = n.toUpperCase();
                                return t[n].forEach((function(t) {
                                    e[t.assetCode] = e[t.assetCode] ? (0, i._)((0, a._)({}, e[t.assetCode]), (0, r._)({}, o, !0)) : (0, r._)({}, o, !0)
                                })), e
                            }), {}), e.abrupt("return", {
                                supportAssetMap: n,
                                allSupportAsset: t
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))));
            var ha = function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        var t;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/apex/v1/private/apex/marketing/defaultHoldingList");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        data: []
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
                }(),
                ga = (Lr.cachePromiseStore.checkCacheBeforeRequest("getDefaultHoldingList", (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, ha();
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t || []);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))), n("tWDR"), n("WMHT"), n("1CC6")),
                ba = function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        var t, n, r, a, i;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = [], e.prev = 1, e.next = 4, (0, hr.Jt)("/bapi/asset/v1/public/wallet-direct/buw/wallet/cex/alpha/all/token/list");
                                case 4:
                                    n = e.sent, r = n.success, a = n.data, i = void 0 === a ? [] : a, r && (t = i || []), e.next = 13;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(1);
                                case 13:
                                    return e.abrupt("return", t);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 11]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            (0, Lr.generateUseState)("useAlphaProducts", ba);
            let ya = 0;

            function wa(e, t) {
                const n = "atom" + ++ya,
                    r = {
                        toString() {
                            return this.debugLabel ? n + ":" + this.debugLabel : n
                        }
                    };
                return "function" === typeof e ? r.read = e : (r.init = e, r.read = _a, r.write = xa), t && (r.write = t), r
            }

            function _a(e) {
                return e(this)
            }

            function xa(e, t, n) {
                return t(this, "function" === typeof n ? n(e(this)) : n)
            }
            var Ta = wa({}),
                Ea = (wa((function(e) {
                    return e(Ta)
                }), (function(e, t, n) {
                    var r = e(Ta);
                    t(Ta, (0, a._)({}, r, Object.assign({}, n)))
                })), wa(0), n("R7An"), n("AMFC"));
            Lr.cachePromiseStore.checkCacheBeforeRequest("accountUserQuoteAssetGet", Ea.Jq);
            var ka = function() {
                var e = (0, fr._)(mr().mark((function e() {
                    var t;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, hr.Jt)("/bapi/apex/v1/friendly/apex/marketing/complianceSymbolList");
                            case 2:
                                return t = e.sent.data, e.abrupt("return", t || []);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            Lr.cachePromiseStore.checkCacheBeforeRequest("queryMarketsSymbolList", (0, fr._)(mr().mark((function e() {
                var t, n;
                return mr().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ka();
                        case 2:
                            return t = e.sent, n = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                                var t = e.hidden,
                                    n = e.symbol,
                                    r = e.legalMoney;
                                return 0 !== t && n && !r
                            })), e.abrupt("return", {
                                symbolList: n,
                                allSymbolList: t
                            });
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))));
            var Sa = {
                    coin: "",
                    name: "",
                    logoUrl: "",
                    locked: "0",
                    free: "0",
                    freeze: "0",
                    withdrawing: "0",
                    total: 0,
                    btcValue: 0,
                    isLegalMoney: !1,
                    depositAllEnable: !0,
                    withdrawAllEnable: !0
                },
                Aa = {
                    _capitalConfigArr: [],
                    _capitalConfigMap: {},
                    _totalUserQuoteAsset: 0,
                    _totalCryptoUserQuoteAsset: 0,
                    _assetsCounter: []
                },
                Ca = wa({
                    activeCapital: Sa,
                    activeLedgerAsset: Sa,
                    ledgerAssetConfig: {},
                    capitalConfigArr: Aa._capitalConfigArr,
                    capitalConfigMap: Aa._capitalConfigMap,
                    totalUserQuoteAsset: Aa._totalUserQuoteAsset,
                    loading: !1,
                    totalMbxBalanceToFiat: 0,
                    totalCryptoUserQuoteAsset: 0,
                    onRefresh: function() {}
                });
            wa((function(e) {
                return e(Ca).capitalConfigArr
            })), wa((function(e) {
                return e(Ca).capitalConfigMap
            })), wa((function(e) {
                return e(Ca).totalUserQuoteAsset
            })), wa((function(e) {
                return e(Ca).totalMbxBalanceToFiat
            }));
            var Ra = {
                    isMobile: "(max-width: 767px)",
                    isTablet: "(min-width: 768px) and (max-width: 1023px)",
                    isDesktop: "(min-width: 1024px)"
                },
                Ia = wa({
                    isMobile: !1,
                    isTablet: !1,
                    isDesktop: !0
                });
            Ia.onMount = function(e) {
                if ("undefined" === typeof window) return function() {};
                var t = Object.entries(Ra).map((function(t) {
                    var n = (0, o._)(t, 2),
                        s = n[0],
                        c = n[1],
                        u = window.matchMedia(c),
                        l = function() {
                            e((function(e) {
                                return (0, i._)((0, a._)({}, e), (0, r._)({}, s, u.matches))
                            }))
                        };
                    return u.addEventListener("change", l), e((function(e) {
                            return e[s] !== u.matches ? (0, i._)((0, a._)({}, e), (0, r._)({}, s, u.matches)) : e
                        })),
                        function() {
                            return u.removeEventListener("change", l)
                        }
                }));
                return function() {
                    t.forEach((function(e) {
                        return e()
                    }))
                }
            };
            var Na = n("J02F"),
                Oa = n("hjFp");
            var Pa = function() {
                var e = (0, fr._)(mr().mark((function e() {
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", {
                                    convertEnabled: !1,
                                    assetDetails: []
                                });
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            Lr.cachePromiseStore.checkCacheBeforeRequest("capitalConfigUserContract", (0, Kr.requestAfterCheckLogin)((0, fr._)(mr().mark((function e() {
                var t;
                return mr().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Pa();
                        case 2:
                            return t = e.sent, e.abrupt("return", t);
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))));
            (0, Xr.PC)().STATIC_HOST, n("K9aZ");
            var La = n("ZFFV");
            var Ma = function(e) {
                    try {
                        var t, n, r, a, i, o, s;
                        if ("undefined" === typeof window) return;
                        var c = function(e) {
                            try {
                                return e.startsWith("http") ? new URL(e) : new URL(e, window.location.origin)
                            } catch (t) {
                                return console.warn("[http] getURLObject failed", t), {}
                            }
                        }(e.url);
                        ! function(e, ...t) {
                            ta.OW.pika = (null === ta.OW || void 0 === ta.OW ? void 0 : ta.OW.pika) || {}, ta.OW.pika.__REPORT_MONITOR_EVENTS__ = ta.OW.pika.__REPORT_MONITOR_EVENTS__ || [], ta.OW.pika.__REPORT_MONITOR_EVENTS__.push([e, ...t])
                        }({
                            data: {
                                event: {
                                    reqm: null === (t = e.opts) || void 0 === t ? void 0 : t.method,
                                    host: null === c || void 0 === c ? void 0 : c.host,
                                    path: null === c || void 0 === c ? void 0 : c.pathname,
                                    s: null === (n = e.res) || void 0 === n ? void 0 : n.status,
                                    res_header: Da(null === (r = e.res) || void 0 === r ? void 0 : r.headers),
                                    ct: e.duration,
                                    bc: null === (a = e.result) || void 0 === a ? void 0 : a.message,
                                    busc: null === (i = e.result) || void 0 === i ? void 0 : i.code,
                                    tid: null === (o = e.opts) || void 0 === o || null === (s = o.headers) || void 0 === s ? void 0 : s["X-TRACE-ID"],
                                    phost: location.host,
                                    ppath: location.pathname
                                }
                            }
                        })
                    } catch (u) {
                        console.log("libs/http/logger2", u)
                    }
                },
                Da = function(e) {
                    var t = {};
                    return e ? (["x-cache"].forEach((function(n) {
                        t[n] = e.get ? e.get(n) : e[n]
                    })), t) : t
                };
            var Va = "undefined" !== typeof window ? function() {
                return {
                    fetch: window.fetch
                }
            } : n.n(La)();
            if ("undefined" !== typeof window && window.fetch && !window.__ESSENTIAL_FETCH_TAG__) {
                var ja = window.fetch;
                window.fetch = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r, a, i = (0, o._)(t, 3),
                        s = i[0],
                        c = i[1],
                        u = i[2],
                        l = Date.now();
                    return ja.apply(window, t).then((function(e) {
                        var t = Date.now();
                        return a = t - l, r = e, e
                    })).catch((function(e) {
                        throw e
                    })).finally((function() {
                        u || Ma({
                            opts: c,
                            url: s,
                            res: r,
                            duration: a,
                            result: undefined,
                            net_err_exist: !r
                        })
                    }))
                }, window.__ESSENTIAL_FETCH_TAG__ = !0
            }
            var Fa = n("SSRs"),
                Ua = n("7Vpp"),
                Ga = Va().fetch,
                Ba = (0, Fa.P)().hybrid.isHybrid,
                za = "_acc_org",
                Ha = 0,
                Wa = [],
                qa = !1;

            function Ya(e) {
                var t, n = e.defaultOrigin,
                    r = e.enbleSites,
                    a = void 0 === r ? [] : r,
                    i = e.checkAccelerable;
                return "undefined" !== typeof window && !Ba && (n = ri(n), a && (t = a, "[object Array]" === Object.prototype.toString.call(t)) && ~a.indexOf(window.location.hostname) && n && "string" === typeof n && /^(https?:)?\/\//.test(n) && "function" === typeof i)
            }

            function Ja() {
                if ("undefined" !== typeof window && !qa) {
                    qa = !0;
                    var e = window.location.origin;
                    $a(e), ei(e)
                }
            }

            function Ka() {
                if (++Ha, window._accelerate_http_failed && 2 === Ha) {
                    var e = ti(),
                        t = e.r,
                        n = e.o,
                        r = e.t;
                    t || (window.localStorage.setItem(za, JSON.stringify({
                        r: !0,
                        o: n,
                        t: r
                    })), window.location.reload())
                }
            }

            function Za(e, t) {
                return $a(e), ni(e).then((function() {
                    Xa(t) || Qa()
                })).catch((function() {
                    window._accelerate_http_failed = !0, Ka(), Qa()
                }))
            }

            function Xa(e) {
                return e && +new Date - e < 432e5
            }

            function Qa() {
                var e = (Wa.push(window.location.origin), Wa);
                (function(e) {
                    var t = 0;
                    return new Promise((function(n, r) {
                        e.forEach((function(a) {
                            ni(a).then((function(e) {
                                n(e), ++t
                            })).catch((function() {
                                ++t === e.length && r()
                            }))
                        }))
                    }))
                })(e).then((function(t) {
                    var n = e.find((function(e) {
                        return ~t.url.indexOf(e)
                    }));
                    $a(n), ei(n), Ka()
                })).catch((function() {
                    ei(void 0)
                }))
            }

            function $a(e) {
                e = ri(e), window._ACCELERATE_ORIGIN = e
            }

            function ei(e) {
                var t = {
                    t: +new Date
                };
                e && (e = ri(e), t.o = e);
                var n = ti(),
                    r = n.r;
                Xa(n.t) && r && (t.r = r), window.localStorage.setItem(za, JSON.stringify(t))
            }

            function ti() {
                return JSON.parse(window.localStorage.getItem(za) || "{}")
            }

            function ni(e) {
                return Ga("".concat(ri(e)).concat("/bapi/composite/v2/public/common/config/stub/score", "?timestamp=").concat(+new Date)).then((function(e) {
                    return 200 <= (t = e.status) && t < 300 ? e : Promise.reject();
                    var t
                }))
            }

            function ri(e) {
                return e ? /^https?:/.test(e) ? e : "https://".concat(e) : e
            }
            const ai = (0, Na.vt)((0, Na.Q)((0, a._)({}, Oa, {})));
            var ii = {
                requestInterceptors: [],
                responseInterceptors: [],
                resultInterceptors: [],
                baseUrl: "",
                accelerate: {
                    defaultOrigin: "",
                    origins: [],
                    enbleSites: null,
                    checkAccelerable: null
                }
            };
            var oi = !1,
                si = function(e) {
                    if (oi) {
                        console.error("[http] initConfig should only be called once.")
                    }
                    try {
                        var t = e.accelerate;
                        t && Ya(t) && function(e) {
                            var t = e.defaultOrigin,
                                n = void 0 === t ? "" : t,
                                r = e.origins,
                                a = void 0 === r ? [] : r;
                            if ("undefined" !== typeof window && !Ba && "03N03N03N01G02T02K03202S03202U02W01G02U033031" !== function(e) {
                                    for (var t, n, r, a = "0123ABCDEFGNXYZ456789OPQRSTUVWHIJKLM", i = a.length, o = a.split(""), s = "", c = 0; c < e.length; c++) s += o[(t = ((t = ((t = e.charCodeAt(c)) - (n = t % i)) / i) - (r = t % i)) / i) % i] + o[r] + o[n];
                                    return s
                                }(window.location.hostname) && !window.__accelerate_compoleted) {
                                window.__accelerate_compoleted = !0, Wa = a;
                                var i = ti(),
                                    o = i.o,
                                    s = i.t;
                                o ? Xa(s) ? ($a(o), ni(o).then((function() {})).catch((function() {
                                    window._accelerate_http_failed = !0, Ka(), Qa()
                                }))) : Za(n, s) : Xa(s) || Za(n, s)
                            }
                        }(t)
                    } catch (n) {}
                    Object.assign(ii, e), oi = !0
                };
            var ci = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return n ? "".concat(e, "_").concat(t, "_").concat(n) : "".concat(e, "_").concat(t)
            };

            function ui(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return e;
                var t = Object.keys(e).sort(),
                    n = {};
                return t.forEach((function(t) {
                    n[t] = ui(e[t])
                })), n
            }
            var li = n("PoZF"),
                di = n("Fv9w"),
                pi = n("o1su"),
                fi = n("uQXD"),
                vi = n("lUEC"),
                mi = (0, Fa.P)().hybrid.isHybrid,
                hi = function() {
                    var e = (0, fr._)(mr().mark((function e() {
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("undefined" !== typeof window && !mi) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", {});
                                case 2:
                                    return e.next = 4, (0, li._5)();
                                case 4:
                                    return e.t0 = e.sent, e.abrupt("return", {
                                        "device-info": e.t0
                                    });
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
                gi = function() {
                    try {
                        return Intl.DateTimeFormat().resolvedOptions().timeZone
                    } catch (e) {
                        return ""
                    }
                },
                bi = function() {
                    if ("undefined" === typeof window) return "";
                    var e = pi.LF("bnc-uuid");
                    return e || (e = (0, Ua.v4)(), pi.M9("bnc-uuid", e, 1825, !0)), e
                }(),
                yi = function(e) {
                    var t;
                    if ("undefined" !== typeof window) return {};
                    var n = (null === e || void 0 === e || null === (t = e.headers) || void 0 === t ? void 0 : t.cookie) || null;
                    return n ? {
                        cookie: n
                    } : {}
                },
                wi = function() {
                    if ("undefined" !== typeof window) return "";
                    try {
                        return "{}".CDN_REGION
                    } catch (e) {
                        return "en"
                    }
                }(),
                _i = function() {
                    var e = (0, fr._)(mr().mark((function e(t, n) {
                        var r, o, s, c, u, l, d, p, f, v, m, h;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.omitHeader, o = n.lang, s = n.headers, c = n.req, u = n.credentials, e.next = 3, hi();
                                case 3:
                                    return l = e.sent, d = r ? {} : (0, a._)({
                                        lang: o || ("undefined" === typeof window ? "en" : (0, fi.Z)()),
                                        "X-UI-REQUEST-TRACE": t,
                                        "X-TRACE-ID": t,
                                        "BNC-UUID": bi,
                                        "Content-Type": "application/json"
                                    }, l), !r && wi && (d = Object.assign(d, {
                                        "X-CDN-REGION": wi
                                    })), r || mi || (d = Object.assign(d, {
                                        clienttype: "web"
                                    })), "undefined" === typeof window || mi || (p = pi.LF("BNC_FV_KEY_T") || "", d = Object.assign(d, {
                                        "FVIDEO-ID": pi.LF("BNC_FV_KEY") || "",
                                        "FVIDEO-TOKEN": p ? (0, di.generateFvideoToken)(p) : "",
                                        "X-PASSTHROUGH-TOKEN": localStorage.getItem("X-PASSTHROUGH-TOKEN") || pi.LF("bnc-challenge-token") || "",
                                        "BNC-Location": pi.LF("BNC-Location") || ""
                                    }), null !== (f = "undefined" === typeof window ? null : window.localStorage.getItem("BNC-Level") || null) && (d["BNC-Level"] = f)), v = yi(c), m = "undefined" !== typeof window ? (0, vi.M)() : {}, h = {
                                        method: "GET",
                                        mode: "cors",
                                        headers: (0, i._)((0, a._)({}, d, v, s, m), {
                                            "BNC-Time-Zone": gi()
                                        }),
                                        credentials: u
                                    }, e.abrupt("return", {
                                        opts: h
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                xi = function(e) {
                    if ("undefined" === typeof window) return e;
                    var t = pi.LF("cr00");
                    return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = da()(t || "")), e
                },
                Ti = (0, Fa.P)().hybrid.isHybrid,
                Ei = function() {
                    var e = (0, fr._)(mr().mark((function e(t, n) {
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", ai.fetch(t, n));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            "undefined" !== typeof window && (Ei = Ei.bind(window));
            "undefined" === typeof window || Ti || window.fetch;
            var ki = function() {
                    var e = (0, fr._)(mr().mark((function e(t) {
                        var n, r;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t._skipCheckStatus) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", t);
                                case 2:
                                    if (!((a = t.status) >= 200 && a < 300 || 401 === a)) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", t);
                                case 4:
                                    return e.prev = 4, e.next = 7, t.json();
                                case 7:
                                    throw n = e.sent, (r = new Error(t.statusText || t.status)).errorMsg = n, r;
                                case 13:
                                    throw e.prev = 13, e.t0 = e.catch(4), e.t0.code = t.status, "undefined" !== typeof window && (e.t0.name = t.status), e.t0;
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                            var a
                        }), e, null, [
                            [4, 13]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Si = function(e) {
                    var t, n, r = ii.baseUrl,
                        a = ii.accelerate,
                        i = a.checkAccelerable;
                    if ("undefined" !== typeof window) {
                        var o = a.enbleSites;
                        "string" === typeof(t = window._ACCELERATE_ORIGIN || a.defaultOrigin) && (t = (n = t) ? /^https?:/.test(n) ? n : "https://".concat(n) : n), o && Array.isArray(o) && !~o.indexOf(window.location.hostname) && (t = "")
                    }
                    return /^(https?:)?\/\//.test(e) ? e : "undefined" !== typeof window && !Ti && t && "string" === typeof t && /^(https?:)?\/\//.test(t) && i && i(e) ? "".concat(t).concat(e) : r ? "".concat(r).concat(e) : Ti ? "".concat(window.location.origin).concat(e) : "undefined" !== typeof window ? "".concat(e) : e
                },
                Ai = {},
                Ci = function() {
                    var e = (0, fr._)(mr().mark((function e(t, n, r) {
                        var a, i, s, c, u, l, d, p, f, v, m, h, g, b, y, w, _, x, T, E, k, S, A, C, R, I, N, O, P, L, M, D, V, j;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = ii.requestInterceptors, i = ii.responseInterceptors, s = ii.resultInterceptors, c = Date.now(), u = (n || {}).body, l = ci((null === n || void 0 === n ? void 0 : n.method) || "GET", t, u), e.prev = 7, t = Si(t), v = !0, m = !1, h = void 0, e.prev = 10, g = a[Symbol.iterator]();
                                case 12:
                                    if (v = (b = g.next()).done) {
                                        e.next = 26;
                                        break
                                    }
                                    return y = b.value, e.t0 = o._, e.next = 18, y(t, n, r);
                                case 18:
                                    e.t1 = e.sent, w = (0, e.t0)(e.t1, 2), t = w[0], n = w[1];
                                case 23:
                                    v = !0, e.next = 12;
                                    break;
                                case 26:
                                    e.next = 32;
                                    break;
                                case 28:
                                    e.prev = 28, e.t2 = e.catch(10), m = !0, h = e.t2;
                                case 32:
                                    e.prev = 32, e.prev = 33, v || null == g.return || g.return();
                                case 35:
                                    if (e.prev = 35, !m) {
                                        e.next = 38;
                                        break
                                    }
                                    throw h;
                                case 38:
                                    return e.finish(35);
                                case 39:
                                    return e.finish(32);
                                case 40:
                                    return _ = "undefined" === typeof window || Ti ? Ei : window.fetch, e.next = 43, _(t, n, !0);
                                case 43:
                                    d = e.sent, x = !0, T = !1, E = void 0, e.prev = 45, k = i[Symbol.iterator]();
                                case 47:
                                    if (x = (S = k.next()).done) {
                                        e.next = 55;
                                        break
                                    }
                                    return A = S.value, e.next = 51, A(d, r, n);
                                case 51:
                                    d = e.sent;
                                case 52:
                                    x = !0, e.next = 47;
                                    break;
                                case 55:
                                    e.next = 61;
                                    break;
                                case 57:
                                    e.prev = 57, e.t3 = e.catch(45), T = !0, E = e.t3;
                                case 61:
                                    e.prev = 61, e.prev = 62, x || null == k.return || k.return();
                                case 64:
                                    if (e.prev = 64, !T) {
                                        e.next = 67;
                                        break
                                    }
                                    throw E;
                                case 67:
                                    return e.finish(64);
                                case 68:
                                    return e.finish(61);
                                case 69:
                                    return C = Date.now(), p = C - c, e.next = 73, ki(d);
                                case 73:
                                    (I = d._bodyBlob) && (R = I.type);
                                    try {
                                        (O = null === d || void 0 === d || null === (N = d.headers) || void 0 === N ? void 0 : N.get("content-type")) && (R = O)
                                    } catch (F) {}
                                    if (!R || !["application/vnd.ms-excel", "application/vnd.ms-pdf", "application/pdf", "application/octet-stream"].some((function(e) {
                                            return "".concat(R).includes(e)
                                        }))) {
                                        e.next = 79;
                                        break
                                    }
                                    return e.abrupt("return", d.blob());
                                case 79:
                                    return e.next = 81, d.json();
                                case 81:
                                    f = e.sent, Ti || Ma({
                                        opts: n,
                                        url: t,
                                        res: d,
                                        duration: p,
                                        result: f
                                    }), P = !0, L = !1, M = void 0, e.prev = 84, D = s[Symbol.iterator]();
                                case 86:
                                    if (P = (V = D.next()).done) {
                                        e.next = 94;
                                        break
                                    }
                                    return j = V.value, e.next = 90, j(f, {
                                        url: t
                                    });
                                case 90:
                                    f = e.sent;
                                case 91:
                                    P = !0, e.next = 86;
                                    break;
                                case 94:
                                    e.next = 100;
                                    break;
                                case 96:
                                    e.prev = 96, e.t4 = e.catch(84), L = !0, M = e.t4;
                                case 100:
                                    e.prev = 100, e.prev = 101, P || null == D.return || D.return();
                                case 103:
                                    if (e.prev = 103, !L) {
                                        e.next = 106;
                                        break
                                    }
                                    throw M;
                                case 106:
                                    return e.finish(103);
                                case 107:
                                    return e.finish(100);
                                case 108:
                                    return e.abrupt("return", f);
                                case 111:
                                    throw e.prev = 111, e.t5 = e.catch(7), Ai[l] && (delete Ai[l], console.warn("prefetch ".concat(l, " error"))), "undefined" !== typeof window && !Ti && e.t5 && "TypeError" === e.t5.name && Ja(), Ti || Ma({
                                        opts: n,
                                        url: t,
                                        res: d,
                                        duration: p,
                                        result: f,
                                        net_err_exist: !0
                                    }), console.warn(e.t5), e.t5;
                                case 118:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [7, 111],
                            [10, 28, 32, 40],
                            [33, , 35, 39],
                            [45, 57, 61, 69],
                            [62, , 64, 68],
                            [84, 96, 100, 108],
                            [101, , 103, 107]
                        ])
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ri = function() {
                    var e = (0, fr._)(mr().mark((function e(t, n) {
                        var r, a, i, o;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = ci("GET", t), !Ai[r]) {
                                        e.next = 5;
                                        break
                                    }
                                    return a = Ai[r], delete Ai[r], e.abrupt("return", a);
                                case 5:
                                    return n = n || {}, i = (0, Ua.v4)(), e.next = 9, _i(i, xi(n));
                                case 9:
                                    return o = e.sent.opts, e.abrupt("return", Ci(t, o, n));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ii = function() {
                    var e = (0, fr._)(mr().mark((function e(t, n) {
                        var r, a, i, o, s, c = arguments;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, a = ci("POST", t, JSON.stringify(ui(n))), !Ai[a]) {
                                        e.next = 6;
                                        break
                                    }
                                    return i = Ai[a], delete Ai[a], e.abrupt("return", i);
                                case 6:
                                    return o = (0, Ua.v4)(), e.next = 9, _i(o, xi(r));
                                case 9:
                                    return s = e.sent.opts, s = Object.assign(s, {
                                        method: "POST",
                                        body: JSON.stringify(n)
                                    }), e.abrupt("return", Ci(t, s, r));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            (function() {
                var e = (0, fr._)(mr().mark((function e(t, n) {
                    var r, a, i, o = arguments;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = o.length > 2 && void 0 !== o[2] ? o[2] : {}, a = (0, Ua.v4)(), e.next = 4, _i(a, xi(r));
                            case 4:
                                return i = e.sent.opts, i = Object.assign(i, {
                                    method: "PUT",
                                    body: JSON.stringify(n)
                                }), e.abrupt("return", Ci(t, i, r));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t, n) {
                    var r, a, i, o = arguments;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = o.length > 2 && void 0 !== o[2] ? o[2] : {}, a = (0, Ua.v4)(), e.next = 4, _i(a, xi(r));
                            case 4:
                                return i = e.sent.opts, i = Object.assign(i, {
                                    method: "DELETE",
                                    body: JSON.stringify(n)
                                }), e.abrupt("return", Ci(t, i, r));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, fr._)(mr().mark((function e(t, n) {
                    var r, a, i, o, s, c = arguments;
                    return mr().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = (0, Ua.v4)(), e.next = 5, _i(o, xi(r));
                            case 5:
                                return s = e.sent.opts, (null === (a = r) || void 0 === a || null === (i = a.headers) || void 0 === i ? void 0 : i["Content-Type"]) || delete s.headers["Content-Type"], s = Object.assign(s, {
                                    method: "POST",
                                    body: n
                                }), e.abrupt("return", Ci(t, s, r));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var Ni = function() {
                    var e = (0, fr._)(mr().mark((function e(t, n) {
                        var r, a, i, o, s;
                        return mr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("undefined" !== typeof window) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (!Ai[t]) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (a = (r = n || {}).method, i = void 0 === a ? "GET" : a, o = r.body, "GET" === i || "POST" === i) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return s = ci(i, t, "GET" === i ? "" : JSON.stringify(ui(o))), Ai[s] = "GET" === i ? Ri(t, n) : Ii(t, o, n), e.abrupt("return", Ai[s]);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Oi = function(e) {
                    if ("undefined" !== typeof window) {
                        var t = e.accelerateConfig,
                            n = e.baseUrl,
                            r = function(e) {
                                var t, n, r = {};
                                return e.__ACCELERATE_ENABLED__ && (r = {
                                    defaultOrigin: e.__ACCELERATE_DEFAULT_DOMAIN__,
                                    origins: null === (t = e.__ACCELERATE_AVAILABLE_DOMAIN__) || void 0 === t ? void 0 : t.split(",").map((function(e) {
                                        return e.trim()
                                    })),
                                    enbleSites: null === (n = e.__ACCELERATE_ENBLED_SITES__) || void 0 === n ? void 0 : n.split(",").map((function(e) {
                                        return e.trim()
                                    })),
                                    checkAccelerable: function(e) {
                                        var t = e.split("?")[0];
                                        return !t.includes("/private/") && !t.includes("/protected/")
                                    }
                                }), r
                            }(t);
                        si((0, a._)({
                            baseUrl: n
                        }, r || {}));
                        for (var i = window._bn_http_prefetch || [], o = 0; o < i.length; o++) try {
                            var s = i[o],
                                c = s.url,
                                u = s.options;
                            Ni(c, (0, a._)({}, u))
                        } catch (l) {
                            console.error("prefetch error", l)
                        }
                        window._bn_http_prefetch = [], window._bn_http_prefetch.push = function(e) {
                            var t = e.url,
                                n = e.options;
                            return Ni(t, n)
                        }
                    }
                };
            "undefined" !== typeof window && function() {
                var e = window._bn_http_init;
                e && e[0] ? Oi(e[0]) : (window._bn_http_init = window._bn_http_init || [], window._bn_http_init.push = function(e) {
                    return Oi(e)
                })
            }();
            ! function() {
                ta.OW.__HTTP_MODULE_DEFER__ = ta.OW.__HTTP_MODULE_DEFER__ || (0, ta.v6)();
                const e = setTimeout((() => {
                        var e;
                        null === (e = ta.OW.__HTTP_MODULE_DEFER__) || void 0 === e || e.resolve(void 0)
                    }), 12e4),
                    t = () => {
                        var t;
                        null === (t = ta.OW.__HTTP_MODULE_DEFER__) || void 0 === t || t.resolve(void 0), e && clearTimeout(e), delete ta.OW.__HTTP_MODULE_DEFER_RESOLVE__
                    };
                ta.OW.__HTTP_MODULE_DEFER_RESOLVE__ = ta.OW.__HTTP_MODULE_DEFER_RESOLVE__ || t, ta.OW.pika = ta.OW.pika || {}, "object" === typeof ta.OW.pika.__HTTP_MODULE__ && t()
            }();
            var Pi, Li = n("nK1b"),
                Mi = n("DsA/"),
                Di = n("PhYZ"),
                Vi = n("M3Ey"),
                ji = n("4WNF"),
                Fi = 1e6,
                Ui = 1e9,
                Gi = function(e) {
                    var t = e.classname,
                        n = e.placeholder,
                        r = void 0 === n ? "******" : n;
                    return (0, s.jsx)(cr.Ay, {
                        className: x()("text-PrimaryText", t),
                        children: r
                    })
                },
                Bi = (0, l.A)((function() {
                    return Promise.all([n.e(2639), n.e(8646), n.e(3632)]).then(n.bind(n, "5+V2"))
                }), {
                    webpack: function() {
                        return ["5+V2"]
                    },
                    ssr: !1
                }),
                zi = (0, l.A)((function() {
                    return n.e(9253).then(n.bind(n, "slOZ"))
                }), {
                    webpack: function() {
                        return ["slOZ"]
                    },
                    ssr: !1
                }),
                Hi = function(e) {
                    var t = e.num,
                        n = e.precision,
                        r = e.symbol,
                        a = e.loop,
                        i = void 0 === a || a,
                        o = (0, c.useState)(!1),
                        u = o[0],
                        l = o[1],
                        d = Bn({
                            from: {
                                number: 0
                            },
                            number: t,
                            delay: 0,
                            loop: i,
                            config: {
                                mass: 1,
                                tension: 300,
                                friction: 50,
                                duration: 1500
                            },
                            onRest: function() {
                                l(!0)
                            }
                        }).number;
                    return (0, s.jsxs)(cr.Ay, {
                        className: "flex",
                        children: [r, (0, s.jsx)(sr.div, {
                            children: u ? (0, Pr.Xq)(t, n) : null === d || void 0 === d ? void 0 : d.to((function(e) {
                                return (0, Pr.Xq)(Number(e), n)
                            }))
                        })]
                    })
                },
                Wi = (Pi = {}, (0, r._)(Pi, h.Lw.SPOT_GRID, 0), (0, r._)(Pi, h.Lw.REBALANCE_BOT, 0), (0, r._)(Pi, h.Lw.DELIVERY_GRID, 0), (0, r._)(Pi, h.Lw.SPOT_DCA, 0), (0, r._)(Pi, h.Lw.FUTURE_GRID, 0), Pi),
                qi = 5e3,
                Yi = function() {
                    var e, t, n, a, i, u, l = (0, y.HH)().t,
                        d = Boolean((0, y.nH)()),
                        p = (0, y.I7)(),
                        g = (0, Di.N)().total,
                        b = (0, o._)(fa(), 2),
                        w = b[0],
                        _ = b[1],
                        E = (0, dr.i)(pr.NH),
                        k = (({
                            isSkipRefetchInterval: e = !1
                        }, t) => (0, wr.useQuery)(Ir.Bz.QUERY_ALL_STRATEGY_ASSET, (() => br()), {
                            refetchInterval: (t, n) => !e && !n ? .state ? .errorUpdateCount && 5e3,
                            ...t
                        }))({
                            isSkipRefetchInterval: !1
                        }, {
                            enabled: d
                        }),
                        S = k.data,
                        A = Number(null === S || void 0 === S || null === (e = S.data) || void 0 === e ? void 0 : e.spotAssetBtcValuation),
                        C = Number(null === S || void 0 === S || null === (t = S.data) || void 0 === t ? void 0 : t.umAssetBtcValuation),
                        R = Number(null === S || void 0 === S || null === (n = S.data) || void 0 === n ? void 0 : n.cmAssetBtcValuation),
                        I = Number(null === S || void 0 === S || null === (a = S.data) || void 0 === a ? void 0 : a.arbitrageAssetBtcValuation),
                        N = new T.g(A).plus(C).plus(R).plus(I).multipliedBy(E).decimalPlaces(2, T.g.ROUND_DOWN).toNumber(),
                        O = (0, Vi.B)(),
                        P = ((e = {}) => (0, wr.useQuery)(Ir.Bz.QUERY_BOTS_TOTAL_PNL, (async () => {
                            const {
                                data: e,
                                success: t
                            } = await Nr();
                            return t ? e : {
                                success: t
                            }
                        }), { ...e || {},
                            staleTime: 1 / 0
                        }))({
                            enabled: d,
                            refetchInterval: qi
                        }),
                        L = P.data,
                        M = P.isLoading || 0 === (null === L || void 0 === L ? void 0 : L.todayPnl),
                        D = (null === L || void 0 === L ? void 0 : L.todayPnl) > 0,
                        V = (null === L || void 0 === L ? void 0 : L.todayPnl) < 0,
                        j = ((e, t = {}) => (0, wr.useQuery)(Ir.Bz.QUERY_ARBITRAGE_OPEN_ORDERS(e), (() => (0, Or.Bx)({
                            strategyId: e
                        })), { ...t,
                            staleTime: 1 / 0
                        }))(null, {
                            enabled: d,
                            refetchInterval: qi
                        }).data,
                        F = ((e, t) => {
                            const n = _r.SY.productLine;
                            return (0, wr.useQuery)(n(e), (() => yr(e)), {
                                staleTime: 1 / 0,
                                cacheTime: 1 / 0,
                                ...t
                            })
                        })(void 0, {
                            enabled: d,
                            refetchInterval: qi
                        }).data,
                        U = (0, c.useMemo)((function() {
                            return "undefined" === typeof F || "undefined" === typeof(null === F || void 0 === F ? void 0 : F.data) ? Wi : F.data.reduce((function(e, t) {
                                return e[t.strategyType] += 1, e
                            }), (e = {}, (0, r._)(e, h.Lw.SPOT_GRID, 0), (0, r._)(e, h.Lw.REBALANCE_BOT, 0), (0, r._)(e, h.Lw.DELIVERY_GRID, 0), (0, r._)(e, h.Lw.SPOT_DCA, 0), (0, r._)(e, h.Lw.FUTURE_GRID, 0), e));
                            var e
                        }), [F]),
                        G = (0, c.useMemo)((function() {
                            var e, t, n = null !== (t = null === j || void 0 === j || null === (e = j.data) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0,
                                r = U[h.Lw.SPOT_GRID] + U[h.Lw.FUTURE_GRID] + U[h.Lw.DELIVERY_GRID] + n + U[h.Lw.SPOT_DCA] + U[h.Lw.REBALANCE_BOT];
                            return U[h.Lw.SPOT_GRID] > 0 ? {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.SPOT_GRID, {
                                    symbol: "BTCUSDC"
                                })
                            } : U[h.Lw.FUTURE_GRID] > 0 ? {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.FUTURES_GRID, {
                                    symbol: "BTCUSDC"
                                })
                            } : U[h.Lw.DELIVERY_GRID] > 0 ? {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.FUTURES_GRID, {
                                    symbol: "BTCUSD_PERP"
                                })
                            } : n > 0 ? {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.ARBITRAGE, {
                                    symbol: "BTCUSDT"
                                })
                            } : U[h.Lw.SPOT_DCA] > 0 ? {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.SPOT_DCA, {
                                    symbol: "BTCUSDC"
                                })
                            } : U[h.Lw.REBALANCE_BOT] > 0 ? {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.REBALANCING_BOT, {
                                    symbol: "BTCUSDT"
                                })
                            } : {
                                total: r,
                                redirectURL: (0, xr.GM)(h.Jo.SPOT_GRID, {
                                    symbol: "BTCUSDC"
                                })
                            }
                        }), [U, j]),
                        B = (0, v.L)({
                            currency: p,
                            isUseCache: !1
                        }),
                        z = B.isValidCheckReady,
                        H = B.checkIsValidOption,
                        W = z && H(m.Hj.FUTURES_GRID),
                        q = z && H(m.Hj.TRADING_BOT_LIST),
                        Y = (0, Tr.nE)(),
                        J = (0, c.useCallback)((function() {
                            Y(Li.ll.click, {
                                $element_id: "trade_now"
                            });
                            var e = (0, xr.fc)({
                                    symbol: f.cb
                                }, ""),
                                t = (0, xr.Wy)({
                                    symbol: ji.d
                                }, ""),
                                n = W ? e : t;
                            window.location.href = n
                        }), [W, Y]),
                        K = (0, c.useCallback)((function() {
                            window.location.href = G.redirectURL, Y(Li.ll.click, {
                                $element_id: "running_checking",
                                pageName: "strategy_landing",
                                module: "hero"
                            })
                        }), [G.redirectURL, Y]),
                        Z = (0, c.useCallback)((function() {
                            window.location.href = "/".concat(O, "/my/wallet/account/trading-bots")
                        }), [O]),
                        X = (0, c.useCallback)((function() {
                            "function" === typeof _ && _(!w)
                        }), [w, _]),
                        Q = (0, c.useCallback)((function() {
                            window.location.href = "/".concat(O, "/my/wallet/account/trading-bots/pnl"), Y(Li.ll.click, {
                                $element_id: "pnl_checking",
                                pageName: "strategy_landing",
                                module: "hero"
                            })
                        }), [O, Y]);
                    return (0, s.jsxs)(cr.Ay, {
                        className: "text-PrimaryText items-start lg:items-center w-full block lg:flex justify-between",
                        children: [d ? (0, s.jsxs)(cr.Ay, {
                            className: "mb-[40px] lg:mb-0 mr-0 lg:mr-[64px]",
                            children: [(0, s.jsx)(cr.Ay, {
                                className: "mb-[24px]",
                                children: (0, s.jsx)("h1", {
                                    className: "t-title2 text-PrimaryText mb-[20px]",
                                    children: l("landingPage-banner-titleContent", {
                                        defaultValue: "Strategy Trading Bots"
                                    })
                                })
                            }), (0, s.jsxs)(cr.Ay, {
                                children: [(0, s.jsxs)(ur.A, {
                                    className: "gap-[4px] t-body3 items-center",
                                    children: [(0, s.jsx)(cr.Ay, {
                                        children: l("total-balance-subtitle", {
                                            defaultValue: "Total Balance"
                                        })
                                    }), (0, s.jsx)(ur.A, {
                                        className: "items-center cursor-pointer ml-1",
                                        onClick: X,
                                        id: "switch-balance-button",
                                        children: w ? (0, s.jsx)(Ar, {
                                            className: "text-[16px] text-iconNormal"
                                        }) : (0, s.jsx)(Cr, {
                                            className: "text-[16px] text-iconNormal"
                                        })
                                    })]
                                }), (0, s.jsx)(ur.A, {
                                    className: "gap-[8px] mb-[4px] items-end",
                                    children: (0, s.jsxs)(cr.Ay, {
                                        className: "t-headline4 text-PrimaryText font-semibold",
                                        children: [(0, s.jsx)("div", {
                                            className: x()({
                                                block: w,
                                                hidden: !w
                                            }),
                                            children: (0, s.jsx)(Gi, {})
                                        }), (0, s.jsx)("div", {
                                            className: x()({
                                                block: !w,
                                                hidden: w
                                            }),
                                            children: Number.isNaN(N) ? "$0" : (0, s.jsx)(Hi, {
                                                precision: 2,
                                                symbol: "$",
                                                num: N
                                            })
                                        })]
                                    })
                                }), (0, s.jsxs)(ur.A, {
                                    className: "mb-[20px] items-center",
                                    children: [(0, s.jsxs)(ur.A, {
                                        className: "t-body3 items-center",
                                        children: [(0, s.jsx)(cr.Ay, {
                                            className: "mr-[4px]",
                                            children: l("totdays-pnl", {
                                                defaultValue: "Today's PNL"
                                            })
                                        }), w ? (0, s.jsx)(Gi, {}) : (0, s.jsx)(cr.Ay, {
                                            className: x()({
                                                "text-Buy": D,
                                                "text-Sell": V,
                                                "text-PrimaryText": M
                                            }),
                                            children: "".concat(D || M ? "+" : "-", " $").concat("number" === typeof(null === L || void 0 === L ? void 0 : L.todayPnl) ? (0, Pr.Xq)(Math.abs(null === L || void 0 === L ? void 0 : L.todayPnl), 2) : "0")
                                        }), (0, s.jsx)(Rr.A, {
                                            className: "mt-[2px] cursor-pointer",
                                            size: 16,
                                            onClick: Q
                                        })]
                                    }), G.total > 0 && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)(cr.Ay, {
                                            className: "w-[1px] h-[12px] bg-Line mx-[15px]"
                                        }), (0, s.jsxs)(ur.A, {
                                            className: "items-center cursor-pointer",
                                            onClick: K,
                                            children: [(0, s.jsx)(Mi.a, {
                                                options: {
                                                    loop: !0,
                                                    speed: .8
                                                },
                                                lottieJsonPage: "/static/images/strategy/landing/running-animation.json"
                                            }), (0, s.jsx)(cr.Ay, {
                                                className: "ml-[4px] t-body3",
                                                children: "".concat(l("running", {
                                                    defaultValue: "Running"
                                                }), " (").concat(G.total, ")")
                                            }), (0, s.jsx)(Rr.A, {
                                                className: "mt-[2px]",
                                                size: 16
                                            })]
                                        })]
                                    })]
                                }), (0, s.jsxs)(ur.A, {
                                    className: "flex gap-[16px] w-full md:w-auto items-center",
                                    children: [(0, s.jsx)(lr.A, {
                                        sz: "regular",
                                        variant: "primary",
                                        className: "w-[50%] lg:w-auto",
                                        onClick: J,
                                        children: l("tradeNow", {
                                            defaultValue: "Trade Now"
                                        })
                                    }), (0, s.jsx)(lr.A, {
                                        sz: "regular",
                                        variant: "secondary",
                                        className: "w-[50%] lg:w-auto",
                                        onClick: Z,
                                        children: l("bots-wallet", {
                                            defaultValue: "Bots Wallet"
                                        })
                                    })]
                                })]
                            })]
                        }) : (0, s.jsxs)(cr.Ay, {
                            className: "mb-[40px] lg:mb-0 mr-0 lg:mr-[64px]",
                            children: [(0, s.jsxs)(cr.Ay, {
                                className: "mb-[8px] md:mb-[20px]",
                                children: [(0, s.jsx)("h1", {
                                    className: "t-title2 mt-[0px] text-PrimaryText mb-[20px]",
                                    children: l("landingPage-banner-titleContent", {
                                        defaultValue: "Strategy Trading Bots"
                                    })
                                }), (0, s.jsx)(cr.Ay, {
                                    className: "".concat(m.Hj.TRADING_BOT_LIST, "-hit-invisible"),
                                    children: (0, s.jsx)(cr.Ay, {
                                        className: "text-SecondaryText t-body1-1 mb-[20px] md:mb-0",
                                        children: l("landingPage-slider-strategyTrading", {
                                            defaultValue: "Deploy Binance automation tools to trade crypto like a pro. Identify and replicate trending strategies on the largest exchange with unparalleled liquidity."
                                        })
                                    })
                                })]
                            }), (0, s.jsxs)(ur.A, {
                                className: "mb-[20px]",
                                children: [(0, s.jsxs)(cr.Ay, {
                                    className: "mr-[20px]",
                                    children: [(0, s.jsx)(cr.Ay, {
                                        className: "t-body1-1 text-TertiaryText mb-[4px]",
                                        children: l("landing-heroSession-activeStrategies", {
                                            defaultValue: "Active Strategies"
                                        })
                                    }), (0, s.jsx)(cr.Ay, {
                                        className: "t-headline4 text-PrimaryText",
                                        children: (0, s.jsx)(Hi, {
                                            precision: 0,
                                            num: Number(null === g || void 0 === g ? void 0 : g.activeCount)
                                        })
                                    })]
                                }), (0, s.jsxs)(cr.Ay, {
                                    children: [(0, s.jsx)(cr.Ay, {
                                        className: "t-body1-1 text-TertiaryText mb-[4px]",
                                        children: l("landing-heroSession-value", {
                                            defaultValue: "Total Value"
                                        })
                                    }), (0, s.jsx)(cr.Ay, {
                                        className: "t-headline4 text-PrimaryText",
                                        children: Number.isNaN(null === g || void 0 === g ? void 0 : g.totalValue) ? Er.VsL : (i = null === g || void 0 === g ? void 0 : g.totalValue, u = 2, i < 1e3 ? "$".concat(new T.g(i).decimalPlaces(u, T.g.ROUND_DOWN).toNumber()) : i < Fi ? "$".concat(new T.g(i).dividedBy(1e3).decimalPlaces(u, T.g.ROUND_DOWN).toNumber(), "K") : i < Ui ? "$".concat(new T.g(i).dividedBy(Fi).decimalPlaces(u, T.g.ROUND_DOWN).toNumber(), "M") : "$".concat(new T.g(i).dividedBy(Ui).decimalPlaces(u, T.g.ROUND_DOWN).toNumber(), "B"))
                                    })]
                                })]
                            }), (0, s.jsx)(cr.Ay, {
                                className: "flex w-full md:w-auto items-center",
                                children: (0, s.jsx)(lr.A, {
                                    sz: "regular",
                                    variant: "primary",
                                    className: "mr-[24px]",
                                    onClick: J,
                                    children: l("tradeNow", {
                                        defaultValue: "Trade Now"
                                    })
                                })
                            })]
                        }), (0, s.jsxs)(cr.Ay, {
                            className: x()({
                                visible: q,
                                invisible: !q
                            }, "md:mb-0 w-full lg:w-auto min-w-auto lg:min-w-[480px]"),
                            children: [(0, s.jsx)(cr.Ay, {
                                className: "mb-[12px] flex w-full justify-end",
                                children: (0, s.jsx)(zi, {
                                    onClick: function() {
                                        Y(Li.ll.click, {
                                            $element_id: "strategy_academy"
                                        })
                                    }
                                })
                            }), (0, s.jsx)(cr.Ay, {
                                className: "w-full lg:w-[480px] h-[180px]",
                                children: (0, s.jsx)(Bi, {})
                            })]
                        })]
                    })
                },
                Ji = n("I/8y"),
                Ki = n("YZbU"),
                Zi = n("WjPW"),
                Xi = n("O1JD"),
                Qi = n("Ov3/"),
                $i = n("hxBv");
            const eo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 3H7v2H4v3h16V5h-3V3h-3v2h-4V3zm10 7H4v10h16V10zM9 15l3-3 3 3-3 3-3-3z",
                    fill: "currentColor"
                }))
            };
            var to = n("Bdbj"),
                no = n("J+48"),
                ro = n("xfYC"),
                ao = n("f1nL"),
                io = n("hR7C"),
                oo = n("HZrL"),
                so = n("pk/O"),
                co = n("vCaB"),
                uo = n("TR5C"),
                lo = n("kI1i"),
                po = n("gYIm"),
                fo = "IS_FINISH_DAILY_PICK_TOUR",
                vo = n("pNeN"),
                mo = n("as/d"),
                ho = n("L7h2"),
                go = n("TwfU"),
                bo = n("ndjx"),
                yo = n("cOJc"),
                wo = n("LLrz"),
                _o = n("JWaR"),
                xo = n("5E2b"),
                To = n("eMzf");
            const Eo = {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "t.disabled",
                fontSize: "12px",
                py: ["", "40px"]
            };
            var ko = n("trXm");
            const So = {
                    color: "t.third",
                    fontSize: 0,
                    textAlign: "center",
                    px: "md",
                    py: "xs"
                },
                Ao = ({
                    isNeedRefresh: e = !1,
                    refreshFn: t
                }) => {
                    const {
                        t: n
                    } = (0, ko.Y_)();
                    return (0, s.jsxs)(wo.A, {
                        sx: Eo,
                        children: [(0, s.jsx)(To.A, {
                            size: 96
                        }), (0, s.jsx)(_o.A, {
                            sx: So,
                            children: n("no-records", {
                                defaultValue: "No records found"
                            })
                        }), e && (0, s.jsx)(xo.A, {
                            onClick: () => {
                                t ? .()
                            },
                            className: "text-TextLink t-subtitle2 mt-[8px] cursor-pointer",
                            children: n("refresh", {
                                defaultValue: "Refresh"
                            })
                        })]
                    })
                };
            var Co = n("1HmZ"),
                Ro = n("eQhr"),
                Io = n("TajZ"),
                No = (0, l.A)((function() {
                    return Promise.all([n.e(2639), n.e(8646), n.e(496)]).then(n.bind(n, "LMpq"))
                }), {
                    webpack: function() {
                        return ["LMpq"]
                    },
                    ssr: !1
                }),
                Oo = (0, l.A)((function() {
                    return Promise.all([n.e(2639), n.e(8646), n.e(78)]).then(n.bind(n, "gvat"))
                }), {
                    webpack: function() {
                        return ["gvat"]
                    },
                    ssr: !1
                }),
                Po = 1,
                Lo = 2,
                Mo = function(e) {
                    var t = e.isVisible,
                        n = e.handleDailyPickVisible,
                        r = e.isShowFuturesCard,
                        c = e.isShowSpotCard,
                        u = e.setCopyingStrategy,
                        l = e.setOpenModuleType,
                        d = (0, y.Wi)().t,
                        f = (0, p.xW)().setValue,
                        v = (0, Tr.nE)(),
                        m = (0, mo.r)(),
                        g = m.usdt,
                        b = m.isFetched,
                        w = (0, Ro.l)({
                            productLine: "SPOT_GRID",
                            operation: "MICA_CHECK"
                        }),
                        _ = w.data,
                        x = w.isFetched,
                        E = (0, Io.nH)(),
                        k = (0, o._)((0, oo.RC)(to.Mj.sevenToThirty), 2),
                        S = k[0],
                        A = k[1],
                        C = x && c && b || !E && !ga.U.read("cr00"),
                        R = r && b || !E && !ga.U.read("cr00"),
                        I = (0, ho._3)((0, i._)((0, a._)({}, !_ || _.pass ? {} : {
                            symbol: "BTCUSDC"
                        }), {
                            sort: to.GG.copyCount,
                            runningTimeMin: S,
                            runningTimeMax: A,
                            roiMin: .05,
                            strategyType: Number(Po),
                            rows: r || !E ? 1 : 2,
                            page: 1
                        }), {
                            enabled: C
                        }),
                        N = I.list,
                        O = I.isLoading,
                        P = I.refetch,
                        L = (0, ho._3)((0, i._)((0, a._)({}, function(e, t) {
                            return t ? e <= 100 ? {
                                investmentMin: 0,
                                investmentMax: 10,
                                roiMin: .1,
                                leverageMax: 50
                            } : e > 100 && e <= 1e3 ? {
                                investmentMin: new T.g(e).multipliedBy(.1).toNumber(),
                                investmentMax: new T.g(e).multipliedBy(.3).toNumber(),
                                roiMin: .1,
                                leverageMax: 20,
                                maxSevenDayMdd: .6
                            } : e > 1e3 && e <= 1e4 ? {
                                investmentMin: new T.g(e).multipliedBy(.1).toNumber(),
                                investmentMax: new T.g(e).multipliedBy(.3).toNumber(),
                                roiMin: .1,
                                leverageMax: 10,
                                maxSevenDayMdd: .4,
                                trailingType: "TRAILING"
                            } : e > 1e4 ? {
                                investmentMin: 1e3,
                                investmentMax: 5e3,
                                roiMin: .1,
                                leverageMax: 10,
                                maxSevenDayMdd: .2,
                                trailingType: "TRAILING"
                            } : {} : {
                                investmentMin: 0,
                                investmentMax: 100,
                                roiMin: .1,
                                leverageMax: 20,
                                maxSevenDayMdd: .6
                            }
                        }(g, E)), {
                            runningTimeMin: S,
                            runningTimeMax: A,
                            sort: to.GG.copyCount,
                            strategyType: Number(Lo),
                            rows: 1,
                            page: 1
                        }), {
                            enabled: R
                        }),
                        M = L.list,
                        D = L.isLoading,
                        V = L.refetch,
                        j = (0, Co.Z)((function(e, t) {
                            var r = e === Po;
                            f(to.eo.strategyType, e);
                            ! function() {
                                var e = {
                                        $element_id: "copy",
                                        df_source: r ? ro.vV.spotGrid : ro.vV.futuresGrid,
                                        pageName: "daily_picks"
                                    },
                                    n = {
                                        eventName: "trading_bot_landing_create",
                                        pageName: "trading_bot_landing",
                                        df_source: r ? ro.vV.spotGrid : ro.vV.futuresGrid,
                                        source: "daily_picks",
                                        module: "daily_picks"
                                    };
                                v(ro.ll.click, e), v(ro.ll.popupView, n), v(ro.ll.click, {
                                    $element_id: "strategy_create",
                                    df_source: r ? ro.vV.spotGrid : ro.vV.futuresGrid,
                                    pageName: Li.DM.STRATEGY_LIST,
                                    module: Li.DM.STRATEGY_LIST,
                                    df_5: to.GG.copyCount
                                }), u(r ? N[t] : M[t]), l("copyForm")
                            }(), n()
                        })),
                        F = (0, go.d)({
                            callback: j,
                            isLoggedIn: E,
                            strategy: h.Sn,
                            replacePageName: "strategy_landing"
                        }),
                        U = F.wrappedFunction,
                        G = F.modal,
                        B = (0, bo.Z)({
                            callback: j,
                            isLoggedIn: Boolean(E),
                            staticHost: po.K5,
                            strategy: h.us,
                            replacePageName: "strategy_landing"
                        }),
                        z = B.wrappedFunction,
                        H = B.modal;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [t ? (0, s.jsx)(yo.A, {
                            modalSize: "large",
                            className: "w-full",
                            direction: "bottom",
                            visible: !0,
                            children: (0, s.jsxs)(cr.Ay, {
                                className: "max-w-[720px] w-full",
                                children: [(0, s.jsxs)(ur.A, {
                                    className: "px-[24px] w-full py-[18px] justify-between items-center",
                                    children: [(0, s.jsx)(cr.Ay, {
                                        className: "text-PrimaryText typography-headline5",
                                        children: d("daily-pick", {
                                            defaultValue: "Daily Pick"
                                        })
                                    }), (0, s.jsx)(vo.A, {
                                        onClick: n,
                                        className: "w-[24px] h-[24px]"
                                    })]
                                }), (0, s.jsxs)(cr.Ay, {
                                    className: "px-[24px] mb-[24px]",
                                    children: [(0, s.jsxs)(ur.A, {
                                        className: "gap-[24px] min-h-[314px] flex-col md:flex-row",
                                        children: [!O && N.length ? (0, s.jsx)(s.Fragment, {
                                            children: N.map((function(e, t) {
                                                return (0, s.jsx)(ur.A, {
                                                    className: "w-full md:flex-[0_1_50%]",
                                                    children: (0, s.jsx)(No, {
                                                        options: {
                                                            symbolTag: !0
                                                        },
                                                        data: e,
                                                        onButtonClick: function() {
                                                            return U(Po, t)
                                                        },
                                                        sortBy: to.GG.copyCount
                                                    })
                                                }, e.strategyId)
                                            }))
                                        }) : null, r && !D && !!M.length && (0, s.jsx)(s.Fragment, {
                                            children: M.map((function(e, t) {
                                                return (0, s.jsx)(ur.A, {
                                                    className: "w-full md:flex-[0_1_50%]",
                                                    children: (0, s.jsx)(Oo, {
                                                        options: {
                                                            symbolTag: !0
                                                        },
                                                        data: e,
                                                        onButtonClick: function() {
                                                            return z(Lo, t)
                                                        },
                                                        sortBy: to.GG.copyCount
                                                    })
                                                }, e.strategyId)
                                            }))
                                        }), !O && !N.length && !D && !M.length && (0, s.jsx)(ur.A, {
                                            className: "w-full items-center justify-center h-[314px] flex-col",
                                            children: (0, s.jsx)(Ao, {
                                                isNeedRefresh: !0,
                                                refreshFn: function() {
                                                    C && P(), R && V()
                                                }
                                            })
                                        })]
                                    }), (0, s.jsx)(cr.Ay, {
                                        className: "t-caption1 text-TertiaryText mt-[16px]",
                                        children: "*".concat(d("update-every-hours", {
                                            defaultValue: "Update every hours"
                                        }))
                                    })]
                                })]
                            })
                        }) : null, G, H]
                    })
                },
                Do = n("WjQj");
            const Vo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-12.733c-.59 0-1.066.477-1.066 1.066v.427H8.8v-.427a3.2 3.2 0 115.461 2.262l-1.196 1.196v1.234h-2.133v-2.117l1.821-1.82A1.066 1.066 0 0012 8.267zm-1.066 9.598v-2.133h2.132v2.133h-2.133z",
                    fill: "currentColor"
                }))
            };
            const jo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M12.243 8L8 12.243l4.243 4.242 4.242-4.242L12.243 8z",
                    fill: "currentColor"
                }))
            };
            var Fo, Uo = (Fo = {}, (0, r._)(Fo, po.us, "futures_grid"), (0, r._)(Fo, po.Sn, "spot_grid"), (0, r._)(Fo, po.$$, "rebalancing_bot"), (0, r._)(Fo, po.HT, "futures_twap"), (0, r._)(Fo, "vp", "futures_vp"), (0, r._)(Fo, "autoInvest", "auto_invst"), (0, r._)(Fo, "spotDca", "spot_dca"), (0, r._)(Fo, po.s_, "algo_order"), (0, r._)(Fo, h.S8, "arbitrage_bot"), Fo),
                Go = function(e) {
                    var t = e.icon,
                        n = e.title,
                        r = e.iconClassName,
                        a = e.titleClassName;
                    return (0, s.jsxs)(cr.Ay, {
                        className: "flex items-center",
                        children: [(0, s.jsx)(cr.Ay, {
                            className: r,
                            children: t
                        }), (0, s.jsx)(cr.Ay, {
                            className: a,
                            children: n
                        })]
                    })
                };
            const Bo = function(e) {
                var t = e.cardConfig,
                    n = e.onClick,
                    r = (0, y.I7)(),
                    a = (0, v.L)({
                        currency: r,
                        isUseCache: !1
                    }),
                    i = a.isValidCheckReady,
                    u = a.checkIsValidOption,
                    l = i && u(m.Hj.TRADING_BOT_LIST),
                    d = (0, Tr.nE)(),
                    p = (0, y.HH)().t,
                    f = (0, o._)((0, Zi.z)(Ki.p.academyPopUpTab, po.Sn), 2)[1],
                    h = t.title,
                    g = t.content,
                    b = t.advantageList,
                    w = t.key,
                    _ = t.url,
                    T = t.icon,
                    E = (0, c.useRef)({
                        openModal: function() {}
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(Do.Z, {
                        path: _,
                        target: "_blank",
                        className: "no-underline",
                        children: [(0, s.jsxs)(cr.Ay, {
                            className: "mb-[12px] flex justify-between items-center",
                            children: [(0, s.jsx)(Go, {
                                iconClassName: "mr-[4px]",
                                titleClassName: "typography-subtitle1 truncate max-w-[135px] text-PrimaryText",
                                icon: T,
                                title: h
                            }), (0, s.jsx)("div", {
                                className: x()("hidden ", {
                                    "group-hover:flex": l
                                }),
                                onClick: function(e) {
                                    e.stopPropagation(), e.preventDefault(), d(Li.ll.click, {
                                        df_5: Uo[w],
                                        $element_id: "tutorial"
                                    }), f("spotTwap" === w ? "algoOrder" : "twap" === w || "vp" === w ? "algoOrder-".concat(w) : w), E.current.openModal()
                                },
                                children: (0, s.jsx)(Vo, {
                                    className: "text-[20px] text-PrimaryText"
                                })
                            })]
                        }), (0, s.jsx)(cr.Ay, {
                            className: "h-[72px] mb-[16px] ".concat(m.Hj.TRADING_BOT_LIST, "-hit-hidden"),
                            children: (0, s.jsx)(cr.Ay, {
                                className: "text-SecondaryText md:text-TertiaryText typography-caption1 line-clamp-4",
                                children: g
                            })
                        }), (0, s.jsx)(cr.Ay, {
                            children: b.map((function(e, t) {
                                return (0, s.jsx)(cr.Ay, {
                                    children: (0, s.jsx)(Go, {
                                        icon: (0, s.jsx)(cr.Ay, {
                                            className: "w-[16px] h-[16px] mr-[4px] text-[16px] flex text-PrimaryText",
                                            children: (0, s.jsx)(jo, {
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }),
                                        titleClassName: "typography-caption1 text-SecondaryText md:text-TertiaryText truncate",
                                        title: e
                                    })
                                }, t)
                            }))
                        }), (0, s.jsx)(cr.Ay, {
                            className: "hidden md:block bg-Line h-[0.5px] w-[100%] mt-[16px] mb-[12px]"
                        }), (0, s.jsx)(cr.Ay, {
                            className: "hidden md:flex typography-subtitle2 text-TextLink justify-center",
                            onClick: function() {
                                d(Li.ll.click, {
                                    df_5: Uo[w],
                                    $element_id: "create"
                                }), n(_)
                            },
                            children: p("Create", {
                                defaultValue: "Create"
                            })
                        })]
                    }), (0, s.jsx)(Xi.h, {
                        ref: E
                    })]
                })
            };
            const zo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.765 7.154L14 3.92V2.667H2v5.529L4.996 5.2l.943.943L2 10.08v1.252h12V5.805l-2.292 2.292-.943-.943zm-1.904.944L6.914 6.152l.943-.943 1.946 1.947-.942.942zM5.48 4.722l.942-.943.943.943-.943.943-.943-.943zm4.802 2.909l.943.943-.943.943-.942-.943.942-.943z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    d: "M2 14h12v-1.334H2V14z",
                    fill: "currentColor"
                }))
            };
            const Ho = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 3H4v18h12a4 4 0 004-4V3zm-9.84 3.667l3.35 3.314 1.753-1.752L13.8 6.768H18v4.197L16.535 9.5l-3.018 3.017-3.351-3.313L6 13.367v-2.544l4.16-4.156zM6 15.333h12v2H6v-2z",
                    fill: "currentColor"
                }))
            };
            const Wo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M8.5 9.75V7.5h-2v4H4V5h4.5V2.75l3.5 3.5-3.5 3.5z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 7a4 4 0 10-8 0 4 4 0 008 0zm-4 1.75L15.25 7 17 5.25 18.75 7 17 8.75zM7 21a4 4 0 110-8 4 4 0 010 8zm1.75-4L7 15.25 5.25 17 7 18.75 8.75 17z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    d: "M15.5 14.25v2.25h2v-4H20V19h-4.5v2.25l-3.5-3.5 3.5-3.5z",
                    fill: "currentColor"
                }))
            };
            const qo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M3.031 13.408h7.592V21a9.057 9.057 0 01-7.592-7.592zM20.93 13.408h-7.592V21a9.057 9.057 0 007.592-7.592zM4.693 6.683a9.004 9.004 0 00-1.662 4.01h5.672l-4.01-4.01zM12.582 10.693h8.387C20.314 6.339 16.556 3 12.019 3a9.01 9.01 0 00-5.368 1.763l5.93 5.93z",
                    fill: "currentColor"
                }))
            };
            const Yo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.206 3h4.5v4.5h-1.5v2.069l1.682 1.681h2.068v-1.5h4.5v4.5h-4.5v-1.5h-2.069l-2.431 2.432-2.432-2.432H7.956v1.5h-1.5v4h3.614a2.501 2.501 0 110 1.5H4.956v-5.5h-1.5v-4.5h4.5v1.5h2.068l1.683-1.683V7.5h-1.501V3z",
                    fill: "currentColor"
                }))
            };
            const Jo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M11.46 7.622v2.918h2.918V9.46H12.54V7.621h-1.08z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20 3H4v18h12a4 4 0 004-4V3zm-8 11a4 4 0 100-8 4 4 0 000 8zm-6 2h12v2H6v-2z",
                    fill: "currentColor"
                }))
            };
            const Ko = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M18 6a3 3 0 10-6 0 3 3 0 006 0zM9 13a1 1 0 10-2 0 1 1 0 002 0z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 15.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8 0l2.5 2.5 2.5-2.5-2.5-2.5-2.5 2.5zM11 7a4 4 0 11-8 0 4 4 0 018 0zM5.5 7L7 5.5 8.5 7 7 8.5 5.5 7z",
                    fill: "currentColor"
                }), u().createElement("path", {
                    d: "M21 9a1 1 0 11-2 0 1 1 0 012 0zM9 18a3 3 0 11-6 0 3 3 0 016 0z",
                    fill: "currentColor"
                }))
            };
            const Zo = function(e) {
                return u().createElement(Sr.A, (0, kr.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.309 7.324L3 6.014v4.5h4.5l-1.35-1.35a6.5 6.5 0 016.7-3.609l.324-2.479a8.995 8.995 0 00-8.865 4.248zm10.179-1.331c.527.219 1.02.505 1.468.85L17.48 4.86a8.99 8.99 0 00-2.035-1.177l-.957 2.31zm2.67 2.05c.344.448.63.941.85 1.47l2.309-.958A8.992 8.992 0 0019.14 6.52l-1.982 1.524zm2.533 8.633L21 17.986v-4.5h-4.5l1.35 1.35a6.5 6.5 0 01-6.7 3.609l-.324 2.479a8.995 8.995 0 008.865-4.248zM9.512 18.007a6.494 6.494 0 01-1.468-.85L6.52 19.14a8.992 8.992 0 002.035 1.177l.957-2.31zm-2.67-2.05a6.494 6.494 0 01-.85-1.47l-2.309.958A8.99 8.99 0 004.86 17.48l1.982-1.524zm9.274-7.32h-4.5l1.535 1.534-1.267 1.266-1.775-1.774-3.581 3.582 1.414 1.414 2.168-2.168 1.774 1.775 2.68-2.68 1.552 1.55v-4.5z",
                    fill: "currentColor"
                }))
            };
            var Xo = n("9PqG"),
                Qo = n("itmy"),
                $o = n("+Ls+"),
                es = n("haD4"),
                ts = n("AyYO");
            const ns = e => {
                const {
                    enabled: t
                } = e || {}, {
                    getData: n,
                    setData: r
                } = (0, ts.z)("futures-core", "futuresUserCreditStatus", 0);
                return (0, wr.useQuery)(Ir.Bz.QUERY_USER_CREDIT_STATUS, (() => async function(e, t) {
                    let n;
                    try {
                        n = await (0, es.UT)(), t(n.data ? .creditStatus || 0)
                    } catch (r) {
                        const t = await e();
                        n = {
                            success: !0,
                            data: {
                                creditStatus: "number" === typeof t ? t : 0
                            }
                        }
                    }
                    return n
                }(n, r)), {
                    enabled: Boolean(t),
                    cacheTime: 1 / 0,
                    staleTime: 1 / 0
                })
            };
            var rs = n("o35v");
            var as = function() {
                    var e = (0, Io.Py)().isExistFutureAccount,
                        t = (0, Io.nH)(),
                        n = (0, rs.x)("futures-strategy-ui", "MiCA_FE_Allplatform").result;
                    return (e => {
                        const {
                            enabled: t
                        } = e || {}, {
                            data: n,
                            isFetched: r
                        } = ns({
                            enabled: t
                        }), a = n ? .data ? .creditStatus || 0;
                        return (0, c.useMemo)((() => ({
                            isFetched: r,
                            creditStatus: a,
                            isMiCAUser: 1 === a || 2 === a,
                            shouldCreditMode: 1 === a,
                            isCreditMode: 2 === a
                        })), [a, r])
                    })({
                        enabled: t && e && Boolean(null === n || void 0 === n ? void 0 : n.pass)
                    })
                },
                is = function(e) {
                    var t = e.children;
                    return (0, s.jsx)(cr.Ay, {
                        className: "w-[20px] h-[20px] flex text-[20px] text-PrimaryText",
                        children: t
                    })
                },
                os = function() {
                    var e, t, n, u, l = (0, y.Qs)(),
                        d = l.isMobile,
                        v = l.isTablet,
                        g = (0, c.useState)(void 0),
                        b = g[0],
                        w = g[1],
                        _ = (0, c.useState)("1"),
                        T = _[0],
                        E = _[1],
                        k = (0, c.useState)(0),
                        S = k[0],
                        A = k[1],
                        C = (0, y.Wi)().t,
                        R = (0, lo.DP)().isLight,
                        I = (0, Tr.nE)(),
                        N = (0, y.nH)(),
                        O = (0, p.FH)(),
                        P = Number(O[to.eo.strategyType]),
                        L = (0, oo.HL)(P),
                        M = (0, o._)((0, Qi.A)(fo, !1), 2),
                        D = M[0],
                        V = M[1],
                        j = (0, co.ny)().updateFormCopyValue,
                        F = (0, uo.MP)().updateFormCopyValue,
                        U = (0, c.useState)(!1),
                        G = U[0],
                        B = U[1],
                        z = (0, c.useState)(!1),
                        H = z[0],
                        W = z[1],
                        q = (0, Ji.I)(),
                        Y = function(e, t) {
                            return e ? 4 : t ? 6 : 5
                        }(d, v),
                        J = (0, no.v)({
                            currency: q,
                            isUseCache: !0
                        }).restrictedBusinessMap,
                        K = (0, no.v)({
                            currency: q,
                            isUseCache: !1
                        }),
                        Z = K.isLoading,
                        X = K.restrictedBusinessMap,
                        Q = (0, c.useState)(null),
                        $ = Q[0],
                        ee = Q[1],
                        te = Z || (null === X || void 0 === X ? void 0 : X[m.Hj.TRADING_BOT_LIST]),
                        ne = !J.Spot_Grid,
                        re = !J.Futures_Grid,
                        ae = ne || re || !N,
                        ie = (0, c.useMemo)((function() {
                            return [{
                                key: "all",
                                label: C("common-all", "All"),
                                targetStrategies: null,
                                sequence: 0
                            }, {
                                key: "batches",
                                label: C("batches", "Algos"),
                                targetStrategies: [po.s_, po.HT, po.VP],
                                sequence: 1
                            }, {
                                key: "sideways",
                                label: C("sideways", "Sideways"),
                                targetStrategies: [po.Sn, po.us, h.S8, po.sY],
                                sequence: 2
                            }, {
                                key: "bullish",
                                label: C("bullish", "Bullish"),
                                targetStrategies: [po.Sn, po.$$, po.sY],
                                sequence: 3
                            }, {
                                key: "bearish",
                                label: C("bearish", "Bearish"),
                                targetStrategies: [po.us, po.sY],
                                sequence: 4
                            }]
                        }), [C, te]),
                        oe = function() {
                            var e = (0, Xo.ok)(),
                                t = (0, y.X_)().t,
                                n = (0, y.HH)().t,
                                r = (0, y.Wi)().t,
                                a = (0, $o.n)().isMobile,
                                i = as().isMiCAUser;
                            return (0, c.useMemo)((function() {
                                return [{
                                    optionKey: m.Hj.SPOT_GRID,
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(zo, {
                                            className: "text-PrimaryText"
                                        })
                                    }),
                                    key: po.Sn,
                                    url: (0, xr.Wy)({
                                        symbol: ji.d
                                    }, "", {
                                        shouldCheckH5: !1
                                    }),
                                    title: t("strategy-spotGrid", {
                                        defaultValue: "Spot Grid"
                                    }),
                                    content: t(a ? "strategyMobileList-spotContent" : "strategyList-spotContent", {
                                        defaultValue: a ? "Buy low and sell high 24/7 in just one click." : "Buy low and sell high 24/7 automatically with just one click."
                                    }),
                                    advantageList: [n("strategyList-advantage-volatileMarkets", {
                                        defaultValue: "Volatile Markets"
                                    }), n("strategyList-advantage-presetRanges", {
                                        defaultValue: "Preset Ranges"
                                    })]
                                }, {
                                    optionKey: m.Hj.FUTURES_GRID,
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(Ho, {
                                            className: "text-PrimaryText"
                                        })
                                    }),
                                    url: (0, xr.fc)({
                                        symbol: f.cb
                                    }, "", {
                                        shouldCheckElectron: !1
                                    }),
                                    key: po.us,
                                    title: t("strategy-futGrid", {
                                        defaultValue: "Futures Grid"
                                    }),
                                    content: t(a ? "strategyMobileList-futuresContent" : "strategyList-futuresContent", {
                                        defaultValue: a ? "Amplify your purchasing power with Futures." : "Amplify your purchasing power with an advanced version of Grid Trading."
                                    }),
                                    advantageList: [n("strategyList-advantage-shortOrders", {
                                        defaultValue: "Short Orders"
                                    }), n("strategyList-advantage-tradeType", {
                                        defaultValue: "USD\u24c8-M / COIN-M"
                                    })]
                                }, {
                                    optionKey: m.Hj.ARBITRAGE_BOT,
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(Wo, {
                                            size: 20
                                        })
                                    }),
                                    url: (0, xr.z0)({
                                        symbol: ji.d
                                    }, "", {
                                        shouldCheckElectron: !1
                                    }),
                                    key: h.S8,
                                    title: t("strategy-arbitrage", {
                                        defaultValue: "Arbitrage"
                                    }),
                                    content: t("strategyList-arbitrageContent", {
                                        defaultValue: "A delta neutral strategy to earn Funding Fee effortlessly."
                                    }),
                                    advantageList: [r("strategyList-advantage-fundingFeeArbitrage", {
                                        defaultValue: "Funding Fee Arbitrage"
                                    }), r("strategyList-advantage-hedgedPriceRisk", {
                                        defaultValue: "Hedged Price Risk"
                                    })]
                                }, {
                                    optionKey: m.Hj.REBALANCING_MANUAL,
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(qo, {
                                            className: "text-PrimaryText"
                                        })
                                    }),
                                    url: (0, xr.nu)({
                                        symbol: ji.d
                                    }, ""),
                                    key: po.$$,
                                    title: t("strategy-rebalancingBot", {
                                        defaultValue: "Rebalancing Bot"
                                    }),
                                    content: t("strategyList-rbContent", {
                                        defaultValue: "A Long term position strategy supporting an investment portfolio."
                                    }),
                                    advantageList: [n("strategyList-advantage-diversifyRisk", {
                                        defaultValue: "Diversify risk"
                                    }), n("strategyList-advantage-dynamicRebalance", {
                                        defaultValue: "Dynamic rebalance"
                                    })]
                                }, {
                                    optionKey: m.Hj.OTC_ALGO,
                                    key: po.s_,
                                    url: (0, Qo.J)(Er.TPI.ALGO_TRADING, {
                                        locale: e
                                    }),
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(Yo, {
                                            size: 20
                                        })
                                    }),
                                    title: t("strategy-algoOrder", {
                                        defaultValue: "Algo Order"
                                    }),
                                    content: t("strategyList-algoOrderContent", {
                                        defaultValue: "Enhance execution of large orders in smaller blocks with intelligent algo orders. Also available on API."
                                    }),
                                    advantageList: [r("strategyList-advantage-algoOrder-1", {
                                        defaultValue: "TWAP and POV"
                                    }), r("strategyList-advantage-algoOrder-2", {
                                        defaultValue: "Reduce execution costs"
                                    })]
                                }, {
                                    optionKey: m.Hj.OTC_FUTURES_TWAP,
                                    key: po.HT,
                                    url: (0, xr.lV)({
                                        symbol: f.cb
                                    }, ""),
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(Jo, {
                                            className: "text-PrimaryText"
                                        })
                                    }),
                                    title: t("strategy-twap", {
                                        defaultValue: "Futures Twap"
                                    }),
                                    content: t(a ? "strategyMobileList-twapContent" : "strategyList-twapContent", {
                                        defaultValue: a ? "Reduce execution costs by splitting orders." : "Slice large orders into smaller ones to get a better execution price. Available on API trading."
                                    }),
                                    advantageList: [n("strategyList-advantage-largeOrders", {
                                        defaultValue: "Large Orders"
                                    }), n("strategyList-advantage-priceOptimize", {
                                        defaultValue: "Price Optimization"
                                    })],
                                    isVisible: function() {
                                        return !i
                                    }
                                }, {
                                    optionKey: m.Hj.OTC_FUTURES_VP,
                                    key: po.VP,
                                    url: "zh-CN" === e ? po.TP.VP_API_DOC_CN : po.TP.VP_API_DOC,
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(Ko, {
                                            className: "text-PrimaryText"
                                        })
                                    }),
                                    title: t("strategy-vp", {
                                        defaultValue: "Futures VP"
                                    }),
                                    content: t(a ? "strategyMobileList-vpContent" : "strategyList-vpContent", {
                                        defaultValue: a ? "Split large orders among specific market volumes." : "Split large orders across a specific market volume ratio. Available on API only."
                                    }),
                                    advantageList: [n("strategyList-advantage-targetedVolume", {
                                        defaultValue: "Targeted Volume%"
                                    }), n("strategyList-advantage-enhancedExecution", {
                                        defaultValue: "Enhanced Execution"
                                    })],
                                    isVisible: function() {
                                        return !i
                                    }
                                }, {
                                    optionKey: m.Hj.SPOT_GRID,
                                    icon: (0, s.jsx)(is, {
                                        children: (0, s.jsx)(Zo, {
                                            className: "text-PrimaryText"
                                        })
                                    }),
                                    key: po.sY,
                                    url: (0, xr.k4)({
                                        symbol: "BTCUSDT"
                                    }, ""),
                                    title: t("strategy-spotDca", {
                                        defaultValue: "Spot DCA"
                                    }),
                                    content: t("strategyList-spotDcaContent", {
                                        defaultValue: "Auto-place buy/sell orders for better average price and close your position favorably."
                                    }),
                                    advantageList: [n("strategyList-advantage-advanceDca", {
                                        defaultValue: "Advanced DCA"
                                    }), n("strategyList-advantage-priceOptimize", {
                                        defaultValue: "Price Optimization"
                                    })]
                                }]
                            }), [t, a, n, r, e, i])
                        }(),
                        se = oe.filter((function(e) {
                            return "function" !== typeof e.isVisible || e.isVisible()
                        })),
                        ce = se.filter((function(e) {
                            return !(null === J || void 0 === J ? void 0 : J[e.optionKey])
                        })),
                        ue = function() {
                            B((function(e) {
                                return !e
                            }))
                        },
                        le = (0, c.useMemo)((function() {
                            return ie.reduce((function(e, t) {
                                var n = ce.filter((function(e) {
                                    return null === t.targetStrategies || t.targetStrategies.includes(e.key)
                                }));
                                return n.length > 0 && (e.tab.push(t), e.list[t.sequence] = n), e
                            }), {
                                tab: [],
                                list: {}
                            })
                        }), [ie, ce]),
                        de = null !== (u = null === le || void 0 === le || null === (e = le.list) || void 0 === e ? void 0 : e[String(S)]) && void 0 !== u ? u : null === le || void 0 === le || null === (t = le.list) || void 0 === t ? void 0 : t[0],
                        pe = de.length > Y,
                        fe = (0, c.useCallback)((function() {
                            return I(ro.ll.click, {
                                $element_id: H ? "collapse" : "expand"
                            }), W((function(e) {
                                return !e
                            }))
                        }), [H, I]),
                        ve = function(e) {
                            (0, xr.xw)(e) && (window.location.href = e)
                        };
                    return (0, c.useEffect)((function() {
                        E(d ? "2" : "1")
                    }), [d]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(so.b, {
                            openModuleType: b,
                            setOpenModuleType: w,
                            copyingStrategy: $,
                            onClose: function() {
                                ee(null), w(void 0);
                                var e = {
                                    isAdvancedOpen: !1,
                                    isCustomizeParametersOpen: !1
                                };
                                j(e), F(e)
                            },
                            strategyType: L,
                            sortBy: to.GG.copyCount,
                            viewType: "cardView",
                            isLoading: Z,
                            openFrom: io.ON.dailyPicks
                        }), (0, s.jsxs)(ur.A, {
                            className: "mb-[24px] justify-between relative",
                            children: [(0, s.jsx)($i.A, {
                                size: "middle",
                                variant: "default",
                                fontSizeType: T,
                                onChange: A,
                                selectedIndex: S,
                                tabListProps: {
                                    className: "pr-[50px] md:pr-[0px]"
                                },
                                children: null === le || void 0 === le || null === (n = le.tab) || void 0 === n ? void 0 : n.map((function(e, t) {
                                    var n = e.label,
                                        r = e.tagLabel;
                                    return (0, s.jsx)($i.A.TabPane, (0, a._)({
                                        tabNode: n
                                    }, r ? {
                                        badgeProps: {
                                            label: r
                                        }
                                    } : {}), "".concat(n, "-").concat(t))
                                }))
                            }), ae && (0, s.jsx)(cr.Ay, {
                                className: x()("absolute top-[-1px] right-[-1px] p-[10px] pr-[15px] md:!bg-none", {
                                    "bg-custom-gradient-light": R,
                                    "bg-custom-gradient-dark": !R
                                }),
                                children: (0, s.jsx)(ao.I, {
                                    open: !D,
                                    placement: "bottom",
                                    onVisibleChange: function(e) {
                                        e || V(!0)
                                    },
                                    triggerClassName: "cursor-pointer",
                                    trigger: "click",
                                    once: !0,
                                    tooltips: C("daily-pick-tour", {
                                        defaultValue: "Discover our daily selection of grid bots tailored just for you."
                                    }),
                                    arrow: !0,
                                    children: (0, s.jsx)(ao.I, (0, i._)((0, a._)({}, d || v ? {
                                        open: !1
                                    } : {}), {
                                        arrow: !0,
                                        triggerClassName: "cursor-pointer",
                                        tooltips: C("daily-pick", {
                                            defaultValue: "Daily Pick"
                                        }),
                                        children: (0, s.jsx)(eo, {
                                            onClick: function() {
                                                I(ro.ll.click, {
                                                    pageName: "strategy_landing",
                                                    $element_id: "daily_picks"
                                                }), ue()
                                            },
                                            className: " w-[24px] h-[24px] text-PrimaryText"
                                        })
                                    }))
                                })
                            })]
                        }), (0, s.jsx)(cr.Ay, {
                            className: "grid gap-x-[10px] gap-y-[16px] md:gap-x-[24px] md:gap-y-[24px] my-[16px] md:my-[24px] auto-rows-fr grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,220px)]",
                            children: de.map((function(e, t) {
                                var n, a = e.key,
                                    i = e.optionKey,
                                    o = t >= Y;
                                return (0, s.jsx)(cr.Ay, {
                                    className: x()((n = {}, (0, r._)(n, "".concat(i, "-hit-hidden"), !0), (0, r._)(n, "hidden", pe && !H && o), n), "p-[16px] cursor-pointer border-solid border border-Line  hover:border-PrimaryYellow rounded-[16px] group"),
                                    children: (0, s.jsx)(Bo, {
                                        cardConfig: e,
                                        onClick: ve
                                    })
                                }, a)
                            }))
                        }), pe && (0, s.jsx)(cr.Ay, {
                            className: "text-TextLink typography-subtitle2 cursor-pointer flex justify-center",
                            onClick: fe,
                            children: H ? C("strategyList-lessBots", {
                                defaultValue: "Less Bots"
                            }) : C("strategyList-moreBot", {
                                defaultValue: "More Bots"
                            })
                        }), (0, s.jsx)(Mo, {
                            isShowFuturesCard: re,
                            isShowSpotCard: ne,
                            handleDailyPickVisible: ue,
                            isVisible: G,
                            setCopyingStrategy: ee,
                            setOpenModuleType: w
                        })]
                    })
                };
            const ss = (0, c.memo)(os);
            var cs, us = (0, l.A)((function() {
                    return Promise.all([n.e(2639), n.e(3549)]).then(n.bind(n, "cy5s"))
                }), {
                    webpack: function() {
                        return ["cy5s"]
                    },
                    ssr: !0
                }),
                ls = (0, l.A)((function() {
                    return Promise.all([n.e(2639), n.e(8646), n.e(7578)]).then(n.bind(n, "qGsM"))
                }), {
                    webpack: function() {
                        return ["qGsM"]
                    },
                    ssr: !0
                }),
                ds = (0, l.A)((function() {
                    return n.e(5995).then(n.bind(n, "Dtic"))
                }), {
                    webpack: function() {
                        return ["Dtic"]
                    },
                    ssr: !1
                }),
                ps = (0, l.A)((function() {
                    return Promise.all([n.e(2639), n.e(3098)]).then(n.bind(n, "oeN8"))
                }), {
                    webpack: function() {
                        return ["oeN8"]
                    },
                    ssr: !1
                }),
                fs = (0, l.A)((function() {
                    return n.e(5879).then(n.bind(n, "2yzs"))
                }), {
                    webpack: function() {
                        return ["2yzs"]
                    },
                    ssr: !1
                }),
                vs = (0, l.A)((function() {
                    return n.e(489).then(n.bind(n, "ILXR"))
                }), {
                    webpack: function() {
                        return ["ILXR"]
                    },
                    ssr: !1
                }),
                ms = (0, l.A)((function() {
                    return n.e(4277).then(n.bind(n, "3kYU"))
                }), {
                    webpack: function() {
                        return ["3kYU"]
                    },
                    ssr: !1
                }),
                hs = (cs = {}, (0, r._)(cs, f.MI.BOT_MARKET_PLACE, Ki.p.strategyPoolTab), (0, r._)(cs, f.MI.TRENDING_MARKET, Ki.p.trendingMarketTab), (0, r._)(cs, f.MI.VOLATILITY, Ki.p.volatilityTab), (0, r._)(cs, f.MI.STRATEGY_ACADEMY, Ki.p.academyPopUpTab), (0, r._)(cs, f.MI.TUTORIAL, Ki.p.tutorialTab), cs),
                gs = function() {
                    var e = (0, c.useRef)({
                            openModal: function() {}
                        }),
                        t = (0, d.K7)(),
                        n = t.hash,
                        r = t.query,
                        u = (0, y.Qs)().isMobile,
                        l = (0, Ji.I)(),
                        _ = (0, v.L)({
                            currency: l,
                            isUseCache: !1
                        }),
                        x = _.isValidCheckReady,
                        T = _.checkIsValidOption,
                        E = x && T(m.Hj.TRADING_BOT_LIST),
                        k = (0, o._)(n.split("-"), 2),
                        S = k[0],
                        A = k[1],
                        C = S.replace("#", ""),
                        R = (0, o._)((0, Zi.z)(hs[C], h.Sn), 3),
                        I = R[1],
                        N = R[2],
                        O = (0, p.mN)({
                            defaultValues: {}
                        }),
                        P = (0, o._)((0, Zi.z)(hs[f.MI.STRATEGY_ACADEMY], h.Sn), 3),
                        L = P[1],
                        M = P[2],
                        D = (0, c.useRef)({
                            isSetForage: !1,
                            isOpenPositioningPopUp: !1
                        });
                    return (0, c.useEffect)((function() {
                        A && N && !D.current.isSetForage && f.tQ[A] && (I(f.tQ[A]), D.current.isSetForage = !0)
                    }), [N, I, A]), (0, c.useEffect)((function() {
                        var t, n = (null === r || void 0 === r ? void 0 : r.popup) || "",
                            a = (0, o._)(n.split("-"), 2),
                            i = a[0],
                            s = a[1];
                        s && x && M && i === f.MI.STRATEGY_ACADEMY && !D.current.isOpenPositioningPopUp && f.tQ[s] && (L(f.tQ[s]), null === (t = e.current) || void 0 === t || t.openModal(), D.current.isOpenPositioningPopUp = !0)
                    }), [M, x, null === r || void 0 === r ? void 0 : r.popup, L]), (0, c.useEffect)((function() {
                        var e = document.getElementById(C);
                        e && x && e.scrollIntoView()
                    }), [C, x]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(w.m, {
                            className: "overflow-hidden pb-0 h-[558px] lg:h-[344px]",
                            children: (0, s.jsx)(b.t, {
                                name: "page-top",
                                children: (0, s.jsx)(g.$, {
                                    defaultTrackingData: {
                                        module: Li.DM.HERO
                                    },
                                    children: (0, s.jsx)(Yi, {})
                                })
                            })
                        }), (0, s.jsx)(w.m, {
                            className: "pb-0 pt-0",
                            children: (0, s.jsx)("div", {
                                id: f.MI.STRATEGY_LIST,
                                children: (0, s.jsx)(b.t, {
                                    name: "strategy-list",
                                    children: (0, s.jsx)(g.$, {
                                        defaultTrackingData: {
                                            module: Li.DM.STRATEGY_LIST
                                        },
                                        children: (0, s.jsx)(p.Op, (0, i._)((0, a._)({}, O), {
                                            children: (0, s.jsx)(ss, {})
                                        }))
                                    })
                                })
                            })
                        }), (0, s.jsx)("div", {
                            id: f.MI.BOT_MARKET_PLACE,
                            children: (0, s.jsx)(b.t, {
                                name: "bot-marketplace",
                                children: (0, s.jsx)(g.$, {
                                    defaultTrackingData: {
                                        module: Li.DM.BOT_MARKET
                                    },
                                    children: (0, s.jsx)(ls, {})
                                })
                            })
                        }), (0, s.jsx)("div", {
                            id: f.MI.TRENDING_MARKET
                        }), (0, s.jsx)("div", {
                            id: f.MI.VOLATILITY
                        }), (0, s.jsx)(b.t, {
                            name: "hot-coin-leaderboard",
                            children: (0, s.jsx)(us, {})
                        }), E && !u && (0, s.jsx)("div", {
                            id: f.MI.FEATURES,
                            children: (0, s.jsx)(b.t, {
                                name: "features",
                                children: (0, s.jsx)(fs, {
                                    initialVisible: !1,
                                    children: (0, s.jsx)(vs, {})
                                })
                            })
                        }), E && !u && (0, s.jsx)("div", {
                            id: f.MI.TUTORIAL,
                            children: (0, s.jsx)(b.t, {
                                name: "academy",
                                children: (0, s.jsx)(fs, {
                                    initialVisible: !1,
                                    children: (0, s.jsx)(ps, {})
                                })
                            })
                        }), E && (0, s.jsx)("div", {
                            id: f.MI.FAQ,
                            children: (0, s.jsx)(b.t, {
                                name: "faq",
                                children: (0, s.jsx)(fs, {
                                    initialVisible: !1,
                                    children: (0, s.jsx)(ds, {})
                                })
                            })
                        }), (0, s.jsx)(Xi.h, {
                            ref: e
                        }), (null === r || void 0 === r ? void 0 : r.gridType) && (0, s.jsx)(ms, {
                            strategyType: null === r || void 0 === r ? void 0 : r.gridType
                        })]
                    })
                };
            const bs = (0, c.memo)(gs)
        },
        KPPo: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => v
            });
            var r = n("mXdx"),
                a = n("xqbL"),
                i = n.n(a),
                o = n("DTvD"),
                s = n("Hf/4"),
                c = n("cFMj"),
                u = n("1HmZ"),
                l = n("frD5"),
                d = n("1lvF"),
                p = n("HKzA"),
                f = n("pNeN"),
                v = function(e) {
                    var t = e.isVisible,
                        n = e.onClose,
                        a = e.children,
                        v = e.drawerContentClassName,
                        m = e.dialogContentClassName,
                        h = e.hideClose,
                        g = void 0 !== h && h,
                        b = e.renderFooter,
                        y = e.modalSize,
                        w = e.title,
                        _ = (0, c.Q)().isMobile,
                        x = (0, o.useRef)(null),
                        T = (0, o.useState)(!1),
                        E = T[0],
                        k = T[1],
                        S = (0, s.A)(t);
                    (0, o.useEffect)((function() {
                        S || !t || E || (k(t), x.current = document.documentElement.scrollTop || 0, document.body.style.top = "-".concat(x.current, "px"), document.body.style.position = "fixed")
                    }), [S, t, E]);
                    var A = (0, u.Z)((function() {
                        "number" === typeof x.current && (document.body.style.position = "", document.body.style.top = "", document.documentElement.scrollTop = x.current)
                    }));
                    (0, o.useEffect)((function() {
                        S && !t && A()
                    }), [S, t, A]), (0, o.useEffect)((function() {
                        return A
                    }), [A]);
                    var C = function() {
                        k(!1), setTimeout((function() {
                            "function" === typeof n && n()
                        }), 300)
                    };
                    return t || E ? _ ? (0, r.jsxs)(l.A, {
                        size: "auto",
                        enablePortal: !0,
                        visible: t && E,
                        direction: "bottom",
                        onClose: C,
                        children: [(0, r.jsx)("div", {
                            children: (0, r.jsxs)(d.Ay, {
                                className: i()("relative max-h-[calc(100vh-115px)] min-h-[calc(50vh)] overflow-x-hidden overflow-y-auto bg-CardBg p-[20px] rounded-t-[16px]", v),
                                children: [!g && (0, r.jsx)(f.A, {
                                    size: 16,
                                    className: "absolute right-[20px] text-TertiaryText",
                                    onClick: C
                                }), w, a]
                            })
                        }), "function" === typeof b && (0, r.jsx)(p.Ay.Footer, {
                            children: b()
                        })]
                    }) : (0, r.jsxs)(p.Ay, {
                        modalSize: y,
                        responsive: !0,
                        maskClose: !0,
                        onClose: C,
                        visible: t && E,
                        children: [w && (0, r.jsx)(p.Ay.Header, {
                            onNextClick: n,
                            showNext: !g,
                            className: "w-full items-start",
                            children: w
                        }), (0, r.jsx)(p.Ay.Content, {
                            className: m,
                            children: a
                        }), "function" === typeof b && (0, r.jsx)(p.Ay.Footer, {
                            children: b()
                        })]
                    }) : null
                }
        },
        "pk/O": (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => C
            });
            var r = n("hrAD"),
                a = n("qoEP"),
                i = n("mXdx"),
                o = n("DTvD"),
                s = n("/D2/"),
                c = (0, o.createContext)(null),
                u = n("iKvg"),
                l = n("iAZ9"),
                d = n("JSvb"),
                p = n("IOEU"),
                f = n("ONUU"),
                v = n("Wn7T"),
                m = n("4frZ"),
                h = n("z47x"),
                g = function(e) {
                    return Number(e) ? e.toString() : ""
                };

            function b(e) {
                if (1 === e.strategyType && (null === e || void 0 === e ? void 0 : e.strategyParams)) {
                    var t, n, i = e.strategyParams;
                    return (0, r._)((t = {}, (0, u._)(t, l.Xv.type, i.type), (0, u._)(t, l.Xv.lowerLimit, g(i.lowerLimit)), (0, u._)(t, l.Xv.upperLimit, g(i.upperLimit)), (0, u._)(t, l.Xv.gridCount, g(i.gridCount)), (0, u._)(t, l.Xv.triggerPrice, g(i.triggerPrice)), (0, u._)(t, l.Xv.stopLowerLimit, g(i.stopLowerLimit)), (0, u._)(t, l.Xv.stopUpperLimit, g(i.stopUpperLimit)), (0, u._)(t, l.Xv.trailingUp, e.strategyParams.trailingUp || !1), t), i.stopTpPnl || i.stopSlPnl ? (n = {}, (0, u._)(n, l.Xv.tpSlType, d.cy.PNL), (0, u._)(n, l.Xv.stopTpPnl, g(i.stopTpPnl)), (0, u._)(n, l.Xv.stopSlPnl, g(i.stopSlPnl)), n) : (0, u._)({}, l.Xv.tpSlType, d.cy.PRICE))
                }
                if (2 === e.strategyType && (null === e || void 0 === e ? void 0 : e.strategyParams)) {
                    var o, s, c, b = e.strategyParams,
                        y = (0, m.kf)(null === b || void 0 === b ? void 0 : b.totalAdjustmentAmount) ? Number(b.totalAdjustmentAmount) : 0;
                    return (0, a._)((0, r._)((o = {}, (0, u._)(o, p.I9.direction, function(e) {
                        switch (e) {
                            case 1:
                            default:
                                return h.t3.NEUTRAL;
                            case 2:
                                return h.t3.LONG;
                            case 3:
                                return h.t3.SHORT
                        }
                    }(null === e || void 0 === e ? void 0 : e.direction)), (0, u._)(o, p.I9.type, b.type), (0, u._)(o, p.I9.lowerLimit, g(b.lowerLimit)), (0, u._)(o, p.I9.upperLimit, g(b.upperLimit)), (0, u._)(o, p.I9.gridCount, g(b.gridCount)), (0, u._)(o, p.I9.triggerPrice, ""), (0, u._)(o, p.I9.stopLowerLimit, g(b.stopLowerLimit)), (0, u._)(o, p.I9.stopUpperLimit, g(b.stopUpperLimit)), (0, u._)(o, p.I9.isTrailingUp, e.strategyParams.trailingUp || !1), (0, u._)(o, p.I9.isTrailingDown, e.strategyParams.trailingDown || !1), o), b.stopTpPnl || b.stopSlPnl ? (s = {}, (0, u._)(s, p.I9.tpSlType, d.cy.ROI), (0, u._)(s, p.I9.stopTpPnl, g((0, f.Z)(d.cy.ROI, b.stopTpPnl, Number(e.initialMargin) + y, v._g))), (0, u._)(s, p.I9.stopSlPnl, g((0, f.Z)(d.cy.ROI, b.stopSlPnl, Number(e.initialMargin) + y, v.Tz))), (0, u._)(s, p.I9.stopTriggerType, b.pnlStopTriggerType || d.IJ.MARK_PRICE), s) : (0, u._)({}, p.I9.tpSlType, d.cy.PRICE)), (c = {}, (0, u._)(c, p.I9.triggerType, b.stopTriggerType || d.IJ.MARK_PRICE), (0, u._)(c, p.I9.autoInitPos, "boolean" === typeof b.autoInitPos ? b.autoInitPos : void 0), c))
                }
                return {}
            }
            var y = n("hR7C"),
                w = n("KrVi"),
                _ = n("zokI"),
                x = (0, _.A)((function() {
                    return Promise.all([n.e(4315), n.e(1869), n.e(2639), n.e(8646), n.e(5553), n.e(5638)]).then(n.bind(n, "ZLFp"))
                }), {
                    webpack: function() {
                        return ["ZLFp"]
                    },
                    ssr: !1
                }),
                T = (0, _.A)((function() {
                    return Promise.all([n.e(4315), n.e(1869), n.e(2639), n.e(8646), n.e(5553), n.e(4432)]).then(n.bind(n, "suBA"))
                }), {
                    webpack: function() {
                        return ["suBA"]
                    },
                    ssr: !1
                }),
                E = function(e) {
                    var t = e.strategyType,
                        n = (0, w._)(e, ["strategyType"]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: ["spotGrid" === t && (0, i.jsx)(x, (0, r._)({}, n)), "futuresGrid" === t && (0, i.jsx)(T, (0, r._)({}, n))]
                    })
                },
                k = n("Gii1"),
                S = n("vCaB"),
                A = n("TR5C"),
                C = function(e) {
                    var t = e.copyingStrategy,
                        n = e.strategyType,
                        u = e.sortBy,
                        l = e.viewType,
                        d = e.isLoading,
                        p = e.openModuleType,
                        f = e.setOpenModuleType,
                        v = e.onClose,
                        m = e.openFrom,
                        h = {
                            viewType: l,
                            sort: u,
                            copiedStrategyId: null === t || void 0 === t ? void 0 : t.strategyId
                        },
                        g = (0, k.Qs)().isMobile ? "mobile" : "desktop",
                        w = (0, S.ny)().updateFormCopyValue,
                        _ = (0, A.MP)().updateFormCopyValue,
                        x = (0, o.useCallback)((function() {
                            var e = "",
                                t = "",
                                n = "tableView" === l,
                                r = u;
                            return "pnl" === r && (t = r, e = n ? y.XJ.top_pnl_list : y.XJ.top_pnl_card), "roi" === r && (t = r, e = n ? y.XJ.top_roi_list : y.XJ.top_roi_card), "copyCount" === r && (t = "copied", e = n ? y.XJ.top_copied_list : y.XJ.top_copied_card), "latestMatchedCount" === r && (t = r, e = n ? y.XJ.top_matched_list : y.XJ.top_matched_card), {
                                clientIdPrefix: e,
                                sortType: t,
                                uiType: n ? "list" : "card"
                            }
                        }), [u, l])(),
                        T = (0, o.useMemo)((function() {
                            return t ? b((0, a._)((0, r._)({}, t), {
                                strategyType: "spotGrid" === n ? 1 : 2
                            })) : {}
                        }), [t, n]);
                    return (0, i.jsx)(i.Fragment, {
                        children: "copyForm" === p && t && !d && (0, i.jsx)(c.Provider, {
                            value: x,
                            children: (0, i.jsx)(s.P_, {
                                children: (0, i.jsx)(E, {
                                    isFetching: d,
                                    variant: g,
                                    symbol: t.symbol,
                                    visible: Boolean(t),
                                    onClose: v,
                                    copyInfo: t,
                                    strategyType: n,
                                    openFrom: m || y.ON.strategyPool,
                                    initValues: T,
                                    formTrackParams: h,
                                    onToCreateModalClick: function() {
                                        f("createForm"), ("futuresGrid" === n ? w : _)({
                                            isAdvancedOpen: !0,
                                            isCustomizeParametersOpen: !0
                                        })
                                    }
                                })
                            })
                        })
                    })
                }
        },
        PhYZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => b
            });
            var r, a = n("iKvg"),
                i = n("hrAD"),
                o = n("qoEP"),
                s = n("4hgs"),
                c = n("Cadp"),
                u = n("Cr5V"),
                l = n("QWVi"),
                d = n("GHbR"),
                p = n.n(d),
                f = n("mkl1"),
                v = n("I/8y"),
                m = n("gYIm"),
                h = (r = {
                    total: {
                        activeCount: 0,
                        totalValue: 0,
                        lastUpdateTime: 0
                    }
                }, (0, a._)(r, m.Sn, {
                    activeCount: 0,
                    totalValue: 0,
                    lastUpdateTime: 0
                }), (0, a._)(r, m.us, {
                    activeCount: 0,
                    totalValue: 0,
                    lastUpdateTime: 0
                }), r),
                g = {
                    1: m.Sn,
                    2: m.us
                },
                b = function() {
                    var e, t = (0, v.I)(),
                        n = (0, u.L)({
                            currency: t,
                            isUseCache: !1
                        }).checkIsValidOption,
                        r = (0, s.useQuery)(f.t5.strategyInformation, c.I5, {
                            staleTime: 36e5
                        }).data;
                    return (null === r || void 0 === r ? void 0 : r.success) ? null === r || void 0 === r || null === (e = r.data) || void 0 === e ? void 0 : e.reduce((function(e, t) {
                        var r = t.strategyType,
                            s = t.activeCount,
                            c = t.totalValue,
                            u = t.lastUpdateTime,
                            d = function(e) {
                                switch (e) {
                                    case 1:
                                        return n(l.Hj.SPOT_GRID);
                                    case 2:
                                        return n(l.Hj.UM_FUTURES_GRID);
                                    case 3:
                                        return n(l.Hj.CM_FUTURES_GRID);
                                    default:
                                        return !0
                                }
                            }(r);
                        if (d) {
                            var f = p()([e.total.lastUpdateTime, u]);
                            return (0, o._)((0, i._)({}, e), (0, a._)({
                                total: (0, o._)((0, i._)({}, e.total), {
                                    activeCount: e.total.activeCount + Number(s),
                                    totalValue: e.total.totalValue + Number(c),
                                    lastUpdateTime: f
                                })
                            }, g[r], {
                                activeCount: s,
                                totalValue: Number(c),
                                lastUpdateTime: u
                            }))
                        }
                        return (0, i._)({}, e)
                    }), (0, i._)({}, h)) : h
                }
        },
        O1JD: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => w
            });
            var r = n("hrAD"),
                a = n("qoEP"),
                i = n("mguP"),
                o = n("mXdx"),
                s = n("DTvD"),
                c = n("zokI"),
                u = n("bznE"),
                l = n("UuPx"),
                d = n("Hf/4"),
                p = n("KPPo"),
                f = n("WLZf"),
                v = n("nK1b"),
                m = n("YZbU"),
                h = n("gYIm"),
                g = n("WjPW"),
                b = (0, c.A)((function() {
                    return Promise.all([n.e(2639), n.e(3098)]).then(n.bind(n, "oeN8"))
                }), {
                    webpack: function() {
                        return ["oeN8"]
                    },
                    ssr: !1
                }),
                y = {
                    module: v.DM.ACADEMY,
                    df_source: v.vV.strategyTrading,
                    pageName: v.eQ.ACADEMY,
                    clientType: v.Yx,
                    eventName: v.b8.strategyLanding
                },
                w = (0, s.forwardRef)((function(e, t) {
                    var n = (0, i._)((0, g.z)(m.p.academyPopUpTab, h.Sn), 1)[0],
                        c = (0, s.useState)(!1),
                        w = c[0],
                        _ = c[1],
                        x = (0, d.A)(w),
                        T = (0, f.XY)().t,
                        E = (0, l.nE)();
                    (0, s.useImperativeHandle)(t, (function() {
                        return {
                            openModal: function() {
                                _(!0)
                            }
                        }
                    }));
                    var k = (0, s.useCallback)((function() {
                            E(v.ll.click, (0, a._)((0, r._)({}, y), {
                                $element_id: "close"
                            })), _(!1)
                        }), [E]),
                        S = (0, s.useCallback)((function() {
                            E(v.ll.click, (0, a._)((0, r._)({}, y), {
                                module: v.DM.BOTTOM,
                                df_source: v.vV[n],
                                $element_id: "ok"
                            })), _(!1)
                        }), [n, E]),
                        A = (0, s.useCallback)((function() {
                            return (0, o.jsx)(u.A, {
                                className: "float-right min-w-full md:min-w-[128px]",
                                onClick: S,
                                children: T("common-ok", {
                                    defaultValue: "OK"
                                })
                            })
                        }), [S, T]);
                    return (0, s.useEffect)((function() {
                        w && !1 === x && E("PopupView", {
                            clientType: v.Yx,
                            pageName: "strategy_landing_academy",
                            df_source: "strategy_trading"
                        })
                    }), [w, x, E]), (0, o.jsx)(p.X, {
                        modalSize: "large",
                        dialogContentClassName: "max-h-fit",
                        renderFooter: A,
                        isVisible: w,
                        onClose: k,
                        children: (0, o.jsx)(b, {
                            variant: "popup"
                        })
                    })
                }))
        },
        wwEu: (e, t, n) => {
            "use strict";
            n.d(t, {
                $Z: () => s,
                EY: () => c,
                P5: () => u,
                V$: () => l,
                fM: () => f,
                jg: () => d,
                ly: () => v,
                zv: () => p
            });
            var r, a, i = n("iKvg"),
                o = n("Bdbj"),
                s = (r = {}, (0, i._)(r, o.eo.market, ""), (0, i._)(r, o.eo.runningTime, o.Mj.oneToSeven), (0, i._)(r, o.eo.zone, ""), (0, i._)(r, o.eo.roi, o.Bx.ROI_OPTIONS[0].value), (0, i._)(r, o.eo.sort, o.GG.roi), (0, i._)(r, o.eo.direction, o.Bx.DIRECTION_OPTIONS[0].value), (0, i._)(r, o.eo.trailingType, "TRAILING"), (0, i._)(r, o.eo.investmentType, !0), (0, i._)(r, o.eo.leverage, o.Bx.LEVERAGE_OPTIONS[2].value), (0, i._)(r, o.eo.strategyType, 2), (0, i._)(r, o.eo.sevenDayMdd, ""), r),
                c = (a = {}, (0, i._)(a, o.eo.market, ""), (0, i._)(a, o.eo.runningTime, o.Mj.oneToSeven), (0, i._)(a, o.eo.zone, ""), (0, i._)(a, o.eo.roi, o.Bx.ROI_OPTIONS[0].value), (0, i._)(a, o.eo.sort, o.GG.roi), (0, i._)(a, o.eo.direction, o.Bx.DIRECTION_OPTIONS[0].value), (0, i._)(a, o.eo.trailingType, ""), (0, i._)(a, o.eo.investmentType, !0), (0, i._)(a, o.eo.strategyType, 1), (0, i._)(a, o.eo.sevenDayMdd, ""), a),
                u = "botMarketPlace-runningTime-tip",
                l = "This Runtime shows how long this strategy has been running since it was created.",
                d = "botMarketPlace-copyPop-tip",
                p = "The Copy Popularity is a measure of how many copies of this order have been made. When a user creates a strategy based on an order parameter, it will count as a copy even if the order parameter is changed.",
                f = "botMarketPlace-direction-tip",
                v = "Direction displays the current direction of the Grid Trading Strategy, which can be Long, Short or Neutral."
        },
        HZrL: (e, t, n) => {
            "use strict";
            n.d(t, {
                HL: () => l,
                LU: () => y,
                OI: () => h,
                RC: () => u,
                T7: () => d,
                fI: () => b,
                mq: () => g,
                pp: () => m
            });
            var r = n("iKvg"),
                a = n("hrAD"),
                i = n("qoEP"),
                o = n("mguP"),
                s = n("Bdbj"),
                c = n("wwEu");

            function u(e) {
                var t;
                if (!e) return [void 0, void 0];
                var n = (0, o._)(null === e || void 0 === e || null === (t = e.split) || void 0 === t ? void 0 : t.call(e, "-"), 2),
                    r = n[0],
                    a = n[1];
                return [r ? Number(r) : void 0, a ? Number(a) : void 0]
            }
            var l = function(e) {
                    switch (Number(e)) {
                        case 1:
                        default:
                            return "spotGrid";
                        case 2:
                        case 3:
                            return "futuresGrid"
                    }
                },
                d = function(e) {
                    switch (e) {
                        case "spotGrid":
                        default:
                            return 1;
                        case "futuresGrid":
                            return 2
                    }
                },
                p = function(e) {
                    var t = null === e || void 0 === e ? void 0 : e[s.eo.market];
                    return (Array.isArray(t) ? t[0] : t) || c.$Z[s.eo.market]
                },
                f = function(e) {
                    var t = null === e || void 0 === e ? void 0 : e[s.eo.runningTime],
                        n = Array.isArray(t) ? t[0] : t;
                    return Object.keys(s.Mj).includes(n) ? s.Mj[n] : c.$Z[s.eo.runningTime]
                },
                v = function(e, t) {
                    var n = null === e || void 0 === e ? void 0 : e[s.eo.strategyType],
                        r = Array.isArray(n) ? n[0] : n,
                        a = 2 === t || 3 === t ? c.$Z[s.eo.strategyType] : c.EY[s.eo.strategyType];
                    return Number(r) || a
                },
                m = function(e) {
                    var t, n = e.strategyType,
                        o = e.query;
                    return (0, i._)((0, a._)({}, c.$Z), (t = {}, (0, r._)(t, s.eo.sort, s.GG.pnl), (0, r._)(t, s.eo.market, p(o)), (0, r._)(t, s.eo.runningTime, f(o)), (0, r._)(t, s.eo.strategyType, v(o, n)), t))
                },
                h = {
                    sort: "sort",
                    zone: "zone",
                    direction: "direction"
                },
                g = function() {
                    var e;
                    return e = {}, (0, r._)(e, s.eo.sort, "apr3d"), (0, r._)(e, s.eo.zone, ""), (0, r._)(e, s.eo.direction, ""), e
                },
                b = function(e) {
                    var t, n = e.strategyType,
                        o = e.query;
                    return (0, i._)((0, a._)({}, c.EY), (t = {}, (0, r._)(t, s.eo.sort, s.GG.pnl), (0, r._)(t, s.eo.market, p(o)), (0, r._)(t, s.eo.runningTime, f(o)), (0, r._)(t, s.eo.strategyType, v(o, n)), t))
                },
                y = function(e, t) {
                    var n = e.strategyType,
                        r = e.market,
                        s = e.zone,
                        c = e.runningTime,
                        l = e.roi,
                        d = e.sort,
                        p = e.direction,
                        f = e.trailingType,
                        v = e.investmentType,
                        m = e.asset,
                        h = e.leverage,
                        g = e.sevenDayMdd,
                        b = (0, o._)(u(c), 2),
                        y = b[0],
                        w = b[1],
                        _ = (0, o._)(u(l), 2),
                        x = _[0],
                        T = _[1],
                        E = (0, o._)(u(g), 2),
                        k = E[0],
                        S = E[1],
                        A = (0, o._)(function(e) {
                            if (!e) return [void 0, void 0];
                            var t = (0, o._)(e.split("-"), 2),
                                n = t[0],
                                r = t[1];
                            return [n ? Number(n) : void 0, r ? Number(r) : void 0]
                        }(h), 2),
                        C = A[0],
                        R = A[1],
                        I = function(e) {
                            switch (e) {
                                case "NEUTRAL":
                                    return 1;
                                case "LONG":
                                    return 2;
                                case "SHORT":
                                    return 3;
                                default:
                                    return null
                            }
                        }(p);
                    return (0, a._)((0, i._)((0, a._)({}, t), {
                        direction: I,
                        strategyType: Number(n),
                        symbol: r,
                        zone: s,
                        runningTimeMin: y,
                        runningTimeMax: w,
                        roiMin: x,
                        roiMax: T,
                        maxSevenDayMdd: S,
                        minSevenDayMdd: k,
                        sort: d
                    }), C ? {
                        leverageMin: C
                    } : {}, R ? {
                        leverageMax: R
                    } : {}, f ? {
                        trailingType: f
                    } : {}, v ? {
                        investmentMin: 0,
                        investmentMax: m
                    } : {})
                }
        },
        TR5C: (e, t, n) => {
            "use strict";
            n.d(t, {
                EE: () => c,
                MP: () => u
            });
            var r = n("hrAD"),
                a = n("qoEP"),
                i = n("eAFj"),
                o = {
                    isAdvancedOpen: !1,
                    isCustomizeParametersOpen: !1
                },
                s = (0, i.A)((function(e) {
                    return (0, a._)((0, r._)({}, o), {
                        updateCopyFormInit: function(t) {
                            return e((function(e) {
                                return (0, r._)({}, e, t)
                            }))
                        },
                        resetFormCopyValue: function() {
                            return e(o)
                        }
                    })
                })),
                c = function() {
                    return s((function(e) {
                        return {
                            isAdvancedOpen: e.isAdvancedOpen,
                            isCustomizeParametersOpen: e.isCustomizeParametersOpen
                        }
                    }))
                },
                u = function() {
                    return s((function(e) {
                        return {
                            updateFormCopyValue: e.updateCopyFormInit
                        }
                    }))
                }
        },
        M3Ey: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r
            });
            var r = n("9PqG").ok
        },
        WjPW: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => m
            });
            var r = n("S+0I"),
                a = n("jbFV"),
                i = n.n(a),
                o = n("DTvD"),
                s = n("BmHO"),
                c = n.n(s),
                u = n("1HmZ"),
                l = n("HwII"),
                d = n("gYIm"),
                p = c().createInstance({
                    name: d.C3
                }),
                f = new l.b,
                v = {
                    APP_NAME: p
                };

            function m(e, t, n) {
                var a = (0, o.useRef)(!1),
                    s = (0, o.useState)(!1),
                    l = s[0],
                    p = s[1],
                    m = (0, o.useState)(t),
                    h = m[0],
                    g = m[1],
                    b = n || {},
                    y = b.onAfterInitial,
                    w = b.targetForage,
                    _ = void 0 === w ? d.C3 : w,
                    x = b.getDefaultState,
                    T = b.onError,
                    E = v[_] || c().createInstance({
                        name: _
                    });
                E && !v[_] && (v[_] = E);
                var k = (0, u.Z)((function(e) {
                    "function" === typeof T && T(e)
                }));
                (0, o.useEffect)((function() {
                    return f.on("LOCAL_FORAGE_UPDATE_".concat(e), (function(e) {
                        var t = e.value;
                        h !== t && g(t)
                    }))
                }), [e, h, E]), (0, o.useEffect)((function() {
                    function n() {
                        return (n = (0, r._)(i().mark((function n() {
                            var r, o;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!l && !a.current) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        return a.current = !0, n.next = 5, E.getItem(e);
                                    case 5:
                                        if (r = n.sent, null !== (o = r)) {
                                            n.next = 15;
                                            break
                                        }
                                        if ("function" !== typeof x) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.next = 11, x();
                                    case 11:
                                        o = n.sent, n.next = 15;
                                        break;
                                    case 14:
                                        o = t;
                                    case 15:
                                        g(o), p(!0), "function" === typeof y && y(o), a.current = !1;
                                    case 19:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))).apply(this, arguments)
                    }! function() {
                        n.apply(this, arguments)
                    }()
                }), [e, l, y, t, E, x, h]);
                var S = (0, u.Z)((function(t) {
                    E.setItem(e, t).then((function() {
                        f.emit("LOCAL_FORAGE_UPDATE_".concat(e), {
                            value: t
                        })
                    })).catch((function(e) {
                        k(e)
                    }))
                }));
                return (0, o.useEffect)((function() {
                    l && e && E.setItem(e, h)
                }), [e, h, l, E]), [h, S, l]
            }
        },
        itmy: (e, t, n) => {
            "use strict";

            function r(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.keys(t).reduce((function(e, n) {
                    return e.replace(new RegExp("%".concat(n, "%"), "g"), t[n])
                }), e)
            }
            n.d(t, {
                J: () => r
            })
        },
        rWPd: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("TQvm");
            const s = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        shb9: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("TQvm");
            const s = function(e) {
                return i().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        jor4: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("sHFo"),
                s = n("xqbL"),
                c = n.n(s),
                u = n("UVzS"),
                l = i().forwardRef((function(e, t) {
                    var n = (0, u.r)().prefixCls,
                        a = c()("".concat(n, "-flex"), e.className);
                    return i().createElement(o.A, (0, r.__assign)({}, e, {
                        ref: t,
                        className: a
                    }))
                }));
            l.displayName = "Flex";
            const d = l
        },
        "+wTv": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("hTvQ"),
                s = n.n(o),
                c = n("xqbL"),
                u = n.n(c),
                l = n("048I"),
                d = n("1lvF"),
                p = n("UVzS"),
                f = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                v = function(e) {
                    var t = e.placement,
                        n = e.offset,
                        r = e.isArrow,
                        a = t.split("-"),
                        i = a[0],
                        o = a[1],
                        s = o ? 0 : "50%",
                        c = r ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[i] : "",
                        u = r ? n - Math.floor(3) : "100%",
                        l = o ? r ? 9 : 0 : "50%";
                    return ("end" === o ? {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            bottom: u,
                            right: l
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            right: u,
                            bottom: l
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            left: u,
                            bottom: l
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            top: u,
                            right: l
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            bottom: u,
                            left: l
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            right: u,
                            top: l
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            left: u,
                            top: l
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            top: u,
                            left: l
                        }
                    })[i]
                },
                m = function(e) {
                    var t, n, a = e.arrow,
                        o = e.shadow,
                        c = e.isFloat,
                        m = e.offset,
                        h = void 0 === m ? 6 : m,
                        g = e.variant,
                        b = void 0 === g ? "primary" : g,
                        y = e.placement,
                        w = void 0 === y ? "top" : y,
                        _ = e.enablePortal,
                        x = e.portalNode,
                        T = e.style,
                        E = e.radius,
                        k = e.bubbleFontSize,
                        S = void 0 === k ? 14 : k,
                        A = (0, r.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        C = (0, p.r)().prefixCls,
                        R = "".concat(C, "-bubble"),
                        I = u()(R, ((t = {})["".concat(R, "__").concat(b)] = !!b, t["data-shadow"] = !!o, t["data-font-".concat(S)] = !!S, t), e.className);
                    h = a ? Math.max(h, 4) : h;
                    var N = w.split("-")[0],
                        O = c ? v({
                            offset: h,
                            placement: w
                        }) : {},
                        P = v({
                            offset: h,
                            placement: w,
                            isArrow: !0
                        }),
                        L = ((n = {})[f[N]] = h, n.borderRadius = E, n),
                        M = i().createElement(d.Ay, (0, r.__assign)({}, A, {
                            className: I,
                            style: (0, r.__assign)((0, r.__assign)({}, O), T)
                        }), !!a && i().createElement(d.Ay, {
                            className: "".concat(R, "-arrow"),
                            style: P
                        }), !!a && !!o && i().createElement(d.Ay, {
                            className: "".concat(R, "-arrow-shadow"),
                            style: P
                        }), i().createElement(d.Ay, {
                            style: L,
                            className: "".concat(R, "-content"),
                            children: e.children
                        }));
                    return !l.lq && _ ? s().createPortal(M, x instanceof HTMLElement ? x : document.body) : M
                };
            m.displayName = "Bubble";
            const h = m
        },
        bznE: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("0j4f"),
                s = n("048I"),
                c = n("xqbL"),
                u = n.n(c),
                l = n("y2tO"),
                d = n("1lvF"),
                p = n("UVzS"),
                f = (0, a.forwardRef)((function(e, t) {
                    var n, c = e.variant,
                        f = void 0 === c ? "primary" : c,
                        v = e.sz,
                        m = void 0 === v ? "middle" : v,
                        h = e.inactive,
                        g = e.loading,
                        b = e.onClick,
                        y = e.subLine,
                        w = e.children,
                        _ = e.textVariant,
                        x = void 0 === _ ? "text" === f ? "yellow" : "black" : _,
                        T = e.iconVariant,
                        E = void 0 === T ? "line" : T,
                        k = e["aria-label"],
                        S = (0, r.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"]),
                        A = (0, p.r)(),
                        C = A.prefixCls,
                        R = A.isRTL,
                        I = "".concat(C, "-button"),
                        N = "text" === f || "info" === f,
                        O = "icon" === f,
                        P = u()(I, ((n = {})["".concat(I, "-rtl")] = !!R, n["".concat(I, "__").concat(f)] = !!f, n["".concat(I, "__").concat(f, "__").concat(x)] = N && !!x, n["".concat(I, "__").concat(f, "__").concat(E)] = O && !!E, n["data-size-".concat(m)] = !!m, n["data-size-".concat(m, "-two-line")] = !!m && !!y, n["data-two-line"] = !!y, n.inactive = !!h, n), e.className),
                        L = !h && "function" === typeof b,
                        M = s.lq ? "none" : e.type,
                        D = L ? b : void 0,
                        V = (0, a.useMemo)((function() {
                            return g ? i().createElement(l.A, null) : i().createElement(i().Fragment, null, w, y && i().createElement(d.Ay, null, y))
                        }), [w, a.useMemo, g]),
                        j = {
                            "aria-label": (0, a.useMemo)((function() {
                                return k || ("string" === typeof w ? w : y && "string" === typeof y ? y : "button")
                            }), [k, w, y]),
                            "aria-disabled": h || g ? "true" : void 0,
                            "aria-busy": g ? "true" : void 0,
                            role: "button"
                        };
                    return i().createElement(o.A, (0, r.__assign)({
                        key: g ? "loading" : "content"
                    }, j, S, {
                        children: V,
                        ref: t,
                        type: M,
                        className: P,
                        onClick: D
                    }))
                }));
            f.displayName = "Button";
            const v = f
        },
        y2tO: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("xqbL"),
                s = n.n(o),
                c = n("1lvF"),
                u = n("UVzS"),
                l = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                d = function(e) {
                    var t = (0, u.r)().prefixCls,
                        n = s()("".concat(t, "-spinner__nezha"), e.className);
                    return i().createElement(c.Ay, (0, r.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: n
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: l(1)
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: l(2)
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: l(3)
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: l(4)
                    }))
                };
            d.displayName = "Spinner";
            const p = d
        },
        hxBv: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => R
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("LsdE"),
                s = n("xqbL"),
                c = n.n(s),
                u = n("1lvF"),
                l = n("UVzS"),
                d = function(e) {
                    var t, n = e.variant,
                        a = void 0 === n ? "number" : n,
                        o = e.theme,
                        s = e.label,
                        d = e.className,
                        p = e.sz,
                        f = void 0 === p ? "md" : p,
                        v = (0, r.__rest)(e, ["variant", "theme", "label", "className", "sz"]),
                        m = (0, l.r)(),
                        h = m.prefixCls,
                        g = m.isRTL,
                        b = "".concat(h, "-badge"),
                        y = c()(b, ((t = {})["".concat(b, "-rtl")] = !!g, t["".concat(b, "__").concat(a)] = !!a, t["data-theme-".concat(o)] = !!o, t["data-size-".concat(f)] = !!f, t)),
                        w = /^dot/i.test(a);
                    return i().createElement(u.Ay, (0, r.__assign)({}, v, {
                        className: c()("".concat(b, "-wrap"), d)
                    }), e.children, i().createElement(u.Ay, {
                        className: y,
                        children: !w && s
                    }))
                };
            d.displayName = "Badge";
            const p = d;
            var f = function(e) {
                var t, n = e.variant,
                    a = e.subVariant,
                    o = e.size,
                    s = e.active,
                    d = e.fontSizeType,
                    f = e.badgeProps,
                    v = e.tabKey,
                    m = (0, r.__rest)(e, ["variant", "subVariant", "size", "active", "fontSizeType", "badgeProps", "tabKey"]),
                    h = (0, l.r)(),
                    g = h.prefixCls,
                    b = h.isRTL,
                    y = "".concat(g, "-tab"),
                    w = c()(y, ((t = {})["".concat(y, "-rtl")] = !!b, t["".concat(y, "__").concat(n)] = !!n, t["".concat(y, "__").concat(n, "__").concat(a)] = !!n && !!a, t["".concat(y, "-badge")] = !!f, t["data-size-".concat(o)] = !!o, t["data-font-".concat(d)] = !!d, t.active = !!s, t), e.className),
                    _ = c()("".concat(y, "-badge-wrap"), null === f || void 0 === f ? void 0 : f.className),
                    x = {
                        role: "tab",
                        "aria-selected": !!s
                    };
                return f ? i().createElement(p, (0, r.__assign)({
                    sz: "sm",
                    variant: "string"
                }, f, {
                    className: _,
                    "data-tab-key": v
                }), i().createElement(u.Ay, (0, r.__assign)({}, x, m, {
                    className: w
                }))) : i().createElement(u.Ay, (0, r.__assign)({}, x, m, {
                    className: w,
                    "data-tab-key": v
                }))
            };
            f.__name = "Tab", f.displayName = "Tab";
            const v = f;
            var m = n("fzup"),
                h = n("T3HO"),
                g = n("048I"),
                b = n("rWPd"),
                y = n("shb9"),
                w = function(e) {
                    var t = e.showSlideMasks,
                        n = e.showSlideArrow,
                        r = e.maskVisible,
                        o = e.arrowVisible,
                        s = e.tabsHeight,
                        d = e.onArrowClick,
                        p = (0, l.r)().prefixCls,
                        f = "".concat(p, "-tab-list-shadow"),
                        v = "".concat(p, "-tab-list-arrow");
                    if (!t && !n) return null;
                    var m = (0, a.useMemo)((function() {
                            return i().createElement(i().Fragment, null, r.left && i().createElement(u.Ay, {
                                className: c()(f, "".concat(f, "-left")),
                                style: {
                                    height: s
                                },
                                "aria-hidden": "true"
                            }), r.right && i().createElement(u.Ay, {
                                className: c()(f, "".concat(f, "-right")),
                                style: {
                                    height: s
                                },
                                "aria-hidden": "true"
                            }))
                        }), [r, s]),
                        h = (0, a.useMemo)((function() {
                            return i().createElement(i().Fragment, null, o.left && i().createElement(b.A, {
                                color: "IconNormal",
                                className: c()(v, "".concat(v, "-left")),
                                onClick: function() {
                                    return null === d || void 0 === d ? void 0 : d("prev")
                                },
                                style: {
                                    height: s
                                },
                                role: "button",
                                "aria-label": "Scroll tabs left",
                                tabIndex: 0
                            }), o.right && i().createElement(y.A, {
                                color: "IconNormal",
                                className: c()(v, "".concat(v, "-right")),
                                onClick: function() {
                                    return null === d || void 0 === d ? void 0 : d("next")
                                },
                                style: {
                                    height: s
                                },
                                role: "button",
                                "aria-label": "Scroll tabs right",
                                tabIndex: 0
                            }))
                        }), [o, s, d]);
                    return i().createElement(i().Fragment, null, t && m, n && h)
                };
            w.displayName = "TabsEdge";
            const _ = w;
            var x = (0, a.forwardRef)((function(e, t) {
                var n, o = e.variant,
                    s = e.subVariant,
                    d = e.size,
                    p = e.selectedIndex,
                    f = e.onTabClick,
                    v = e.children,
                    b = e.fontSizeType,
                    y = e.gap,
                    w = e.showSlideMasks,
                    x = e.showSlideArrow,
                    T = e.suffix,
                    E = (0, r.__rest)(e, ["variant", "subVariant", "size", "selectedIndex", "onTabClick", "children", "fontSizeType", "gap", "showSlideMasks", "showSlideArrow", "suffix"]),
                    k = (0, a.useRef)(null);
                (0, a.useImperativeHandle)(t, (function() {
                    return k.current
                }), []);
                var S = (0, l.r)().prefixCls,
                    A = "".concat(S, "-tab-list"),
                    C = c()(A, ((n = {})["".concat(A, "__").concat(o)] = !!o, n["data-size-".concat(d)] = !!d, n["data-font-".concat(b)] = !!b, n), e.className),
                    R = i().useState({
                        left: !1,
                        right: !1
                    }),
                    I = R[0],
                    N = R[1],
                    O = i().useState({
                        left: !1,
                        right: !1
                    }),
                    P = O[0],
                    L = O[1],
                    M = i().useState(0),
                    D = M[0],
                    V = M[1],
                    j = (0, a.useCallback)((function(e) {
                        var t = e.containerRef;
                        if (t && t.current) {
                            var n = t.current,
                                r = n.scrollLeft,
                                a = n.scrollWidth,
                                i = n.clientWidth;
                            N && N({
                                right: a > Math.round(i + r),
                                left: r > 0
                            }), L && L({
                                right: a > Math.round(i + r),
                                left: r > 0
                            })
                        }
                    }), [N, L]),
                    F = (0, m.sg)((function() {
                        null === j || void 0 === j || j({
                            containerRef: k
                        })
                    }), 500),
                    U = (0, a.useCallback)((function(e) {
                        if (k.current) {
                            var t = k.current,
                                n = t.scrollLeft,
                                r = t.children,
                                a = Array.from(r).map((function(e) {
                                    return e.offsetLeft
                                })),
                                i = function(e) {
                                    return function(t) {
                                        return function(n) {
                                            var r, a = t.findIndex((function(e) {
                                                return e >= n
                                            }));
                                            return r = "next" === e ? Math.min(a + 4, t.length - 1) : Math.max(a - 4, 0), t[r] - n
                                        }
                                    }
                                }(e)(a)(n);
                            (0, h.HN)(k.current, i, 0, 300), null === j || void 0 === j || j({
                                containerRef: k
                            })
                        }
                    }), [j]),
                    G = (0, a.useMemo)((function() {
                        return "vertical" === o || "buySell" === o ? null : i().createElement(_, {
                            showSlideMasks: w,
                            showSlideArrow: x,
                            maskVisible: I,
                            arrowVisible: P,
                            tabsHeight: D,
                            onArrowClick: U
                        })
                    }), [o, w, x, I, P, D, U]);
                (0, a.useEffect)((function() {
                    if (k.current) {
                        var e = k.current.clientHeight;
                        V(e)
                    }
                }), [V]), (0, a.useEffect)((function() {
                    var e = k.current;
                    if (!g.lq && e instanceof Element) {
                        var t = null;
                        if ("number" !== typeof p || isNaN(p) ? "string" === typeof p && (t = Array.from(e.childNodes).find((function(e) {
                                return e.getAttribute("data-tab-key") === p
                            }))) : t = e.childNodes[p], t) {
                            if ("vertical" === o) {
                                var n = t.getBoundingClientRect(),
                                    r = n.top,
                                    a = n.height,
                                    i = e.getBoundingClientRect(),
                                    s = i.top,
                                    c = -(i.height / 2 - a / 2 - r + s);
                                (0, h.HN)(e, 0, c, 500)
                            } else if ("buySell" !== o) {
                                var u = t.getBoundingClientRect(),
                                    l = u.left,
                                    d = u.width,
                                    f = e.getBoundingClientRect(),
                                    v = f.left;
                                c = -(f.width / 2 - d / 2 - l + v);
                                (0, h.HN)(e, c, 0, 500)
                            }
                            null === j || void 0 === j || j({
                                containerRef: k
                            })
                        }
                    }
                }), [p, o, j]);
                var B = i().Children.toArray(v).map((function(e, t) {
                    var n, a, c;
                    if (!i().isValidElement(e)) return null;
                    if ("Tab" !== (null === (n = e.type) || void 0 === n ? void 0 : n.__name)) return null;
                    var u = "number" === typeof p ? p === t : e.props.tabKey === p,
                        l = {
                            id: "".concat(S, "-tab-").concat((null === (a = e.props) || void 0 === a ? void 0 : a.tabKey) || t),
                            "aria-controls": "".concat(S, "-tab-pane-").concat((null === (c = e.props) || void 0 === c ? void 0 : c.tabKey) || t),
                            tabIndex: u ? 0 : -1
                        };
                    return i().cloneElement(e, (0, r.__assign)((0, r.__assign)({
                        size: d,
                        variant: o,
                        subVariant: s,
                        fontSizeType: b,
                        active: u,
                        onClick: function() {
                            var n;
                            return f && f(t, null === (n = e.props) || void 0 === n ? void 0 : n.tabKey)
                        }
                    }, l), e.props))
                })).filter(Boolean);
                "buySell" === o && (B = B.slice(0, 2));
                var z = {
                        role: "tablist",
                        "aria-orientation": "vertical" === o ? "vertical" : "horizontal"
                    },
                    H = (0, a.useMemo)((function() {
                        return i().createElement(i().Fragment, null, i().createElement(u.Ay, (0, r.__assign)({}, z, E, {
                            className: C,
                            style: (0, r.__assign)({
                                gap: y
                            }, E.style),
                            ref: k,
                            onScroll: function() {
                                return F()
                            }
                        }), B), G)
                    }), [B, C, y, E, G, k, o]);
                return T ? i().createElement(u.Ay, {
                    className: "".concat(A, "-wrapper")
                }, i().createElement(u.Ay, {
                    className: "".concat(A, "-content")
                }, H), i().createElement(u.Ay, {
                    className: "".concat(A, "-suffix")
                }, T)) : H
            }));
            x.displayName = "TabList";
            const T = x;
            var E = function(e) {
                e.tabNode;
                var t, n = e.active,
                    o = e.lazy,
                    s = e.children,
                    d = (e.tabKey, e.badgeProps, e.tabProps, (0, r.__rest)(e, ["tabNode", "active", "lazy", "children", "tabKey", "badgeProps", "tabProps"])),
                    p = (0, a.useState)(!o || n),
                    f = p[0],
                    v = p[1],
                    m = (0, l.r)(),
                    h = m.prefixCls,
                    g = m.isRTL,
                    b = "".concat(h, "-tab-pane"),
                    y = c()(b, ((t = {})["".concat(b, "-rtl")] = !!g, t.active = !!n, t), e.className);
                (0, a.useEffect)((function() {
                    return v((function(e) {
                        return e || n
                    }))
                }), [n]);
                var w = n ? {} : {
                        display: "none"
                    },
                    _ = {
                        role: "tabpanel",
                        "aria-hidden": !n
                    };
                return i().createElement(u.Ay, (0, r.__assign)({}, _, d, {
                    style: w,
                    className: y,
                    children: f ? s : null
                }))
            };
            E.__name = "TabPane", E.displayName = "TabPane";
            const k = E;
            var S = function(e) {
                var t = e.variant,
                    n = e.lazy,
                    a = e.selectedIndex,
                    o = e.className,
                    s = e.children,
                    d = (0, r.__rest)(e, ["variant", "lazy", "selectedIndex", "className", "children"]),
                    p = (0, l.r)().prefixCls,
                    f = "".concat(p, "-tab-pane-list"),
                    v = c()(f, o),
                    m = i().Children.toArray(s).map((function(e, t) {
                        var o;
                        if (!i().isValidElement(e)) return null;
                        if ("TabPane" !== (null === (o = e.type) || void 0 === o ? void 0 : o.__name)) return null;
                        var s = "number" === typeof a ? a === t : e.props.tabKey === a;
                        return i().cloneElement(e, (0, r.__assign)({
                            active: s,
                            lazy: n,
                            id: "".concat(p, "-tab-pane-").concat(e.props.tabKey || t),
                            "aria-labelledby": "".concat(p, "-tab-").concat(e.props.tabKey || t)
                        }, e.props))
                    })).filter(Boolean);
                return "buySell" === t && (m = m.slice(0, 2)), i().createElement(u.Ay, (0, r.__assign)({}, d, {
                    className: v,
                    children: m
                }))
            };
            S.displayName = "TabPaneList";
            const A = S;
            var C = function(e) {
                var t, n = e.size,
                    s = e.lazy,
                    d = e.onChange,
                    p = e.variant,
                    f = void 0 === p ? "primary" : p,
                    m = e.subVariant,
                    h = e.initialIndex,
                    g = void 0 === h ? 0 : h,
                    b = e.selectedIndex,
                    y = e.showSlideMasks,
                    w = void 0 !== y && y,
                    _ = e.showSlideArrow,
                    x = void 0 !== _ && _,
                    E = e.fontSizeType,
                    k = e.tabListProps,
                    S = e.tabPaneListProps,
                    C = (0, r.__rest)(e, ["size", "lazy", "onChange", "variant", "subVariant", "initialIndex", "selectedIndex", "showSlideMasks", "showSlideArrow", "fontSizeType", "tabListProps", "tabPaneListProps"]),
                    R = (0, a.useState)((function() {
                        return void 0 === b ? g : b
                    })),
                    I = R[0],
                    N = R[1],
                    O = (0, a.useRef)(null),
                    P = (0, l.r)(),
                    L = P.prefixCls,
                    M = P.isRTL,
                    D = "".concat(L, "-tabs"),
                    V = c()(D, ((t = {})["".concat(D, "-rtl")] = !!M, t["".concat(D, "__").concat(f)] = !!f, t), e.className),
                    j = [];
                i().Children.forEach(e.children, (function(e, t) {
                    var n, a;
                    if (i().isValidElement(e) && "TabPane" === (null === (a = e.type) || void 0 === a ? void 0 : a.__name)) {
                        var o = e.props,
                            s = o.badgeProps,
                            u = o.tabKey,
                            l = o.tabNode,
                            d = o.tabProps,
                            p = (0, r.__assign)((0, r.__assign)({}, d), {
                                key: t,
                                tabKey: u,
                                badgeProps: s
                            }),
                            f = i().isValidElement(l) ? c()(((n = {})["".concat(L, "-").concat(l.props.className)] = l.props.className, n), null === d || void 0 === d ? void 0 : d.className) : null === d || void 0 === d ? void 0 : d.className;
                        j.push({
                            tabNode: i().createElement(v, (0, r.__assign)({}, p, {
                                className: f,
                                children: l
                            })),
                            tabPaneNode: e
                        })
                    }
                }));
                var F = (0, a.useCallback)((function(e, t) {
                    N(void 0 !== t ? t : e), null === d || void 0 === d || d(e, t)
                }), [d]);
                return (0, o.op)((function() {
                    void 0 !== b && b !== I && N(b)
                })), i().createElement(u.Ay, (0, r.__assign)({}, C, {
                    className: V
                }), i().createElement(T, (0, r.__assign)({
                    ref: O,
                    size: n,
                    variant: f,
                    subVariant: m,
                    onTabClick: F,
                    selectedIndex: I,
                    children: j.map((function(e) {
                        return e.tabNode
                    })),
                    fontSizeType: E,
                    showSlideMasks: w,
                    showSlideArrow: x
                }, k)), i().createElement(A, (0, r.__assign)({
                    lazy: s,
                    selectedIndex: I,
                    children: j.map((function(e) {
                        return e.tabPaneNode
                    }))
                }, S)))
            };
            C.displayName = "Tab", C.Tab = v, C.TabList = T, C.TabPane = k, C.TabPaneList = A;
            const R = C
        },
        TfXH: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => L
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("048I"),
                s = n("OYm7"),
                c = n("wROZ"),
                u = n("xqbL"),
                l = n.n(u),
                d = n("1lvF"),
                p = n("+wTv"),
                f = n("UVzS"),
                v = {
                    right: "left",
                    left: "right",
                    "top-start": "top-end",
                    "right-start": "left-start",
                    "left-start": "right-start",
                    "bottom-start": "bottom-end",
                    "top-end": "top-start",
                    "right-end": "left-end",
                    "left-end": "right-end",
                    "bottom-end": "bottom-start"
                },
                m = 50,
                h = function(e) {
                    var t;
                    e.stopPropagation(), o.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                },
                g = n("iCLV"),
                b = "tooltip";

            function y(e, t, n) {
                return "menu" === t ? {
                    role: "button",
                    "aria-expanded": n,
                    "aria-controls": e,
                    "aria-haspopup": "listbox"
                } : "combobox" === t ? {} : {
                    "aria-describedby": e
                }
            }

            function w(e, t, n) {
                return "combobox" === t ? {} : {
                    id: e,
                    role: t,
                    tabindex: n ? 0 : -1
                }
            }

            function _(e, t, n) {
                void 0 === t && (t = b), void 0 === n && (n = !1);
                var r = (0, a.useMemo)((function() {
                    return "".concat(e, "-").concat((0, g.uR)(8))
                }), [e, t, n]);
                return {
                    triggerAriaProps: y(r, t, n),
                    contentAriaProps: w(r, t, n)
                }
            }
            var x = function(e) {
                var t, n = e.open,
                    u = e.once,
                    g = e.arrow,
                    y = e.offset,
                    w = void 0 === y ? 12 : y,
                    x = e.disabled,
                    T = e.tooltips,
                    E = e.variant,
                    k = void 0 === E ? "gray" : E,
                    S = e.placement,
                    A = void 0 === S ? "top" : S,
                    C = e.trigger,
                    R = void 0 === C ? "hover" : C,
                    I = e.onVisibleChange,
                    N = e.enablePortal,
                    O = e.portalNode,
                    P = e.bubbleClassName,
                    L = e.triggerClassName,
                    M = e.delay,
                    D = void 0 === M ? m : M,
                    V = e.enableClickBubble,
                    j = e.ariaRole,
                    F = void 0 === j ? b : j,
                    U = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "bubbleClassName", "triggerClassName", "delay", "enableClickBubble", "ariaRole"]),
                    G = i().useState(n),
                    B = G[0],
                    z = G[1],
                    H = i().useRef(),
                    W = (0, f.r)(),
                    q = W.prefixCls,
                    Y = W.isMobile,
                    J = W.isTablet,
                    K = W.isClient,
                    Z = W.isRTL,
                    X = !o.lq && !Y && !J;
                R = X ? R : "click";
                var Q = "".concat(q, "-tooltips");
                i().useEffect((function() {
                    "undefined" !== typeof n && B !== !!n && z(!B)
                }), [n, B]);
                var $ = (0, s.d)({
                        fn: I
                    }).debounceFn,
                    ee = (0, a.useCallback)((function(e) {
                        x || z((function(t) {
                            var n = "boolean" === typeof e ? e : !t;
                            return t !== n && $(n), t !== n ? n : t
                        }))
                    }), [x, $]),
                    te = (0, a.useMemo)((function() {
                        var e, t, n;
                        return "number" === typeof D ? {
                            enter: D,
                            leave: D,
                            click: D
                        } : {
                            enter: null !== (e = D.enter) && void 0 !== e ? e : m,
                            leave: null !== (t = D.leave) && void 0 !== t ? t : m,
                            click: null !== (n = D.click) && void 0 !== n ? n : m
                        }
                    }), [D]),
                    ne = (0, s.d)({
                        fn: ee,
                        time: te.enter
                    }),
                    re = ne.debounceFn,
                    ae = ne.clearTimer,
                    ie = (0, s.d)({
                        fn: ee,
                        time: te.leave
                    }),
                    oe = ie.debounceFn,
                    se = ie.clearTimer,
                    ce = (0, s.d)({
                        fn: ee,
                        time: te.click
                    }).debounceFn,
                    ue = (0, a.useCallback)(ce, [ce]),
                    le = (0, a.useCallback)((function() {
                        return ce(!1)
                    }), [ce]);
                i().useEffect((function() {
                    var e = H.current,
                        t = function() {
                            se(), re(!0)
                        },
                        n = function() {
                            ae(), oe(!1)
                        };
                    if (!o.lq && e instanceof Element) {
                        if ("hover" === R) return e.addEventListener("mouseover", t, !0), e.addEventListener("mouseout", n, !0),
                            function() {
                                e.removeEventListener("mouseover", t, !0), e.removeEventListener("mouseout", n, !0)
                            };
                        var r = function(e) {
                            if (!H.current.contains(e.target)) return ce(!1)
                        };
                        return document.addEventListener("click", r),
                            function() {
                                document.removeEventListener("click", r)
                            }
                    }
                    return c.es
                }), [R, re, se, ae, oe, ce]);
                var de = "click" === R,
                    pe = !x && B,
                    fe = u ? le : void 0,
                    ve = !de && !u || V ? void 0 : h,
                    me = de ? ue : void 0,
                    he = l()("".concat(Q, "-wrap"), {
                        active: pe
                    }, e.className),
                    ge = l()("".concat(Q, "-ele"), ((t = {})["".concat(Q, "-ele-rtl")] = !!Z, t), L),
                    be = l()(Q, {
                        active: pe
                    }, P),
                    ye = Z && v[A] || A,
                    we = (0, r.__assign)({
                        arrow: g,
                        offset: w,
                        variant: k,
                        placement: ye,
                        shadow: !0,
                        isFloat: !0,
                        enablePortal: N,
                        portalNode: O
                    }, U);
                "gray" === k && (we = (0, r.__assign)((0, r.__assign)({}, we), {
                    shadow: !1
                }));
                var _e = K && !x,
                    xe = _(Q, F, _e),
                    Te = xe.triggerAriaProps,
                    Ee = xe.contentAriaProps;
                return i().createElement(d.Ay, {
                    ref: H,
                    onClick: ve,
                    className: he
                }, i().createElement(d.Ay, (0, r.__assign)({}, Te, {
                    className: ge,
                    onClick: me,
                    children: e.children
                })), _e ? i().createElement(p.A, (0, r.__assign)({}, Ee, we, {
                    className: be,
                    onClick: fe,
                    children: T
                })) : null)
            };
            x.displayName = "Tooltips";
            const T = x;
            var E = n("hTvQ"),
                k = n.n(E),
                S = n("LsdE"),
                A = n("Toyo"),
                C = (0, a.forwardRef)((function(e, t) {
                    var n, a = e.arrow,
                        s = e.shadow,
                        c = e.variant,
                        u = void 0 === c ? "primary" : c,
                        p = (e.placement, e.style),
                        v = e.radius,
                        m = e.arrowRef,
                        h = e.arrowStyle,
                        g = e.bubbleFontSize,
                        b = void 0 === g ? 14 : g,
                        y = (0, r.__rest)(e, ["arrow", "shadow", "variant", "placement", "style", "radius", "arrowRef", "arrowStyle", "bubbleFontSize"]),
                        w = (0, f.r)().prefixCls,
                        _ = "".concat(w, "-bubble"),
                        x = l()(_, "".concat(_, "-web"), ((n = {})["".concat(_, "__").concat(u)] = !!u, n["data-font-".concat(b)] = !!b, n["web-shadow"] = !!s, n), e.className),
                        T = {
                            borderRadius: v
                        };
                    if (o.lq) throw new Error("this component only use Web side");
                    return i().createElement(d.Ay, (0, r.__assign)({}, y, {
                        className: x,
                        style: p,
                        ref: t
                    }), i().createElement(d.Ay, {
                        style: T,
                        className: "".concat(_, "-content"),
                        children: e.children
                    }), !!a && i().createElement(d.Ay, {
                        className: "".concat(_, "-web-arrow"),
                        style: h,
                        ref: m,
                        "data-popper-arrow": !0
                    }))
                }));
            C.displayName = "Bubble";
            const R = C;
            var I = n("SLx+"),
                N = function(e) {
                    var t, n = e.open,
                        c = e.once,
                        u = e.arrow,
                        p = e.offset,
                        g = void 0 === p ? 12 : p,
                        y = e.disabled,
                        w = e.tooltips,
                        x = e.variant,
                        T = void 0 === x ? "gray" : x,
                        E = e.placement,
                        C = void 0 === E ? "top" : E,
                        N = e.trigger,
                        O = void 0 === N ? "hover" : N,
                        P = e.onVisibleChange,
                        L = e.enablePortal,
                        M = e.portalNode,
                        D = e.reactPopperProps,
                        V = void 0 === D ? {} : D,
                        j = V.sameWidth,
                        F = V.popperWidth,
                        U = V.offsetX,
                        G = V.screenPadding,
                        B = e.bubbleClassName,
                        z = e.bubbleWrapperClz,
                        H = e.triggerClassName,
                        W = e.enableHoverSafeArea,
                        q = e.delay,
                        Y = void 0 === q ? m : q,
                        J = e.enableClickBubble,
                        K = e.ariaRole,
                        Z = void 0 === K ? b : K,
                        X = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "reactPopperProps", "bubbleClassName", "bubbleWrapperClz", "triggerClassName", "enableHoverSafeArea", "delay", "enableClickBubble", "ariaRole"]),
                        Q = (0, a.useState)(n),
                        $ = Q[0],
                        ee = Q[1],
                        te = (0, a.useState)(null),
                        ne = te[0],
                        re = te[1],
                        ae = (0, f.r)(),
                        ie = ae.prefixCls,
                        oe = ae.isMobile,
                        se = ae.isTablet,
                        ce = ae.isRTL,
                        ue = ae.isClient,
                        le = (0, a.useState)(null),
                        de = le[0],
                        pe = le[1],
                        fe = (0, a.useState)(null),
                        ve = fe[0],
                        me = fe[1],
                        he = (0, a.useState)(null),
                        ge = he[0],
                        be = he[1],
                        ye = (0, a.useState)(""),
                        we = ye[0],
                        _e = ye[1],
                        xe = !o.lq && !oe && !se,
                        Te = "".concat(ie, "-tooltips"),
                        Ee = l()("".concat(ie, "-tooltips-trans"), z),
                        ke = l()("".concat(Te, "-ele"), ((t = {})["".concat(Te, "-ele-rtl")] = !!ce, t["".concat(Te, "-ele-with-safe-area")] = !!W && "hover" === O, t), H),
                        Se = l()(Te, {
                            active: $
                        }, B),
                        Ae = l()("".concat(Te, "-wrap"), "".concat(Te, "-web"), {
                            active: !y && $
                        }, X.className);
                    O = xe ? O : "click";
                    var Ce = ce && v[C] || C;
                    if (o.lq) throw new Error("this component only use Web side");
                    var Re = (0, s.d)({
                            fn: P
                        }).debounceFn,
                        Ie = (0, a.useCallback)((function(e) {
                            y || ee((function(t) {
                                var n = "boolean" === typeof e ? e : !t;
                                return t !== n && (null === Re || void 0 === Re || Re(n)), t !== n ? n : t
                            }))
                        }), [y, Re]),
                        Ne = (0, a.useMemo)((function() {
                            var e, t, n;
                            return "number" === typeof Y ? {
                                enter: Y,
                                leave: Y,
                                click: Y
                            } : {
                                enter: null !== (e = Y.enter) && void 0 !== e ? e : m,
                                leave: null !== (t = Y.leave) && void 0 !== t ? t : m,
                                click: null !== (n = Y.click) && void 0 !== n ? n : m
                            }
                        }), [Y]),
                        Oe = (0, s.d)({
                            fn: Ie,
                            time: Ne.enter
                        }),
                        Pe = Oe.debounceFn,
                        Le = Oe.clearTimer,
                        Me = (0, s.d)({
                            fn: Ie,
                            time: Ne.leave
                        }),
                        De = Me.debounceFn,
                        Ve = Me.clearTimer,
                        je = (0, s.d)({
                            fn: Ie,
                            time: Ne.click
                        }).debounceFn,
                        Fe = (0, a.useCallback)((function(e) {
                            var t = null === ve || void 0 === ve ? void 0 : ve.contains(e.target),
                                n = null === de || void 0 === de ? void 0 : de.contains(e.target);
                            !(!c && t || n) && $ && je(!1)
                        }), [je, de, ve, c, $]);
                    g = u ? Math.max(g, 4) : g;
                    var Ue = i().useMemo((function() {
                            return {
                                name: "applyArrowHide",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = t.placement,
                                        r = t.elements,
                                        a = t.rects,
                                        i = r.arrow,
                                        o = r.reference;
                                    if (i && o) {
                                        var s = (["top", "bottom"].includes(n.split("-")[0]) ? a.reference.width : a.reference.height) / 2 - 3,
                                            c = Math.abs(t.modifiersData.arrow.centerOffset),
                                            u = Math.abs(c) > s;
                                        i && (u ? i.setAttribute("data-hide", "") : i.removeAttribute("data-hide"))
                                    }
                                }
                            }
                        }), []),
                        Ge = [{
                            name: "arrow",
                            options: {
                                element: ge,
                                padding: 12
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [U || 0, g]
                            }
                        }, Ue],
                        Be = i().useMemo((function() {
                            return {
                                name: "sameWidth",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state;
                                    t.styles.popper.width = "".concat(F || t.rects.reference.width, "px")
                                },
                                effect: function(e) {
                                    var t = e.state;
                                    t.elements.popper.style.width = "".concat(F || t.elements.reference.offsetWidth, "px")
                                }
                            }
                        }), [F]),
                        ze = i().useMemo((function() {
                            return {
                                name: "preventOverflow",
                                options: {
                                    padding: G
                                }
                            }
                        }), [G]);
                    (F || j) && Ge.push(Be), G && Ge.push(ze);
                    var He = (0, A.E)(de, ve, {
                            placement: Ce,
                            strategy: "fixed",
                            modifiers: Ge
                        }),
                        We = He.styles,
                        qe = He.attributes,
                        Ye = He.update,
                        Je = (0, a.useCallback)((function(e) {
                            !J && h(e);
                            var t = null === ve || void 0 === ve ? void 0 : ve.contains(e.target),
                                n = !c && t;
                            t && Ye && Ye(), n || je(e)
                        }), [c, ve, je, Ye, J]),
                        Ke = (0, a.useCallback)((function(e) {
                            if (ve && de) {
                                var t, n, r, a = ve.getBoundingClientRect(),
                                    i = de.getBoundingClientRect(),
                                    o = e.clientX - i.left,
                                    s = e.clientY - i.top,
                                    c = {
                                        top: a.top - i.top,
                                        bottom: a.bottom - i.top,
                                        left: a.left - i.left,
                                        right: a.right - i.left
                                    };
                                switch (Ce.split("-")[0]) {
                                    case "left":
                                        o = Math.min(o + 4, i.width);
                                        var u = c.top + (o - c.right) * (0 - c.top) / (i.width - c.right),
                                            l = c.bottom + (o - c.right) * (i.height - c.bottom) / (i.width - c.right);
                                        s = Math.min(Math.max(s, u), l), t = "".concat(o, ",").concat(s), n = "".concat(c.right, ",").concat(c.top - 2), r = "".concat(c.right, ",").concat(c.bottom + 2);
                                        break;
                                    case "right":
                                        o = Math.max(o - 4, 0);
                                        var d = c.top + (o - c.left) * (0 - c.top) / (0 - c.left),
                                            p = c.bottom + (o - c.left) * (i.height - c.bottom) / (0 - c.left);
                                        s = Math.min(Math.max(s, d), p), t = "".concat(o, ",").concat(s), n = "".concat(c.left, ",").concat(c.top - 2), r = "".concat(c.left, ",").concat(c.bottom + 2);
                                        break;
                                    case "top":
                                        s = Math.min(s + 4, i.height);
                                        var f = c.left + (s - c.bottom) * (0 - c.left) / (i.height - c.bottom),
                                            v = c.right + (s - c.bottom) * (i.width - c.right) / (i.height - c.bottom);
                                        o = Math.min(Math.max(o, f), v), t = "".concat(o, ",").concat(s), n = "".concat(c.left, ",").concat(c.bottom), r = "".concat(c.right, ",").concat(c.bottom);
                                        break;
                                    default:
                                        s = Math.max(s - 4, 0);
                                        var m = c.left + (s - c.top) * (0 - c.left) / (0 - c.top),
                                            h = c.right + (s - c.top) * (i.width - c.right) / (0 - c.top);
                                        o = Math.min(Math.max(o, m), h), t = "".concat(o, ",").concat(s), n = "".concat(c.left, ",").concat(c.top), r = "".concat(c.right, ",").concat(c.top)
                                }
                                _e("".concat(t, " ").concat(n, " ").concat(r))
                            }
                        }), [ve, de, Ce]);
                    (0, a.useEffect)((function() {
                        return document.addEventListener("click", Fe),
                            function() {
                                document.removeEventListener("click", Fe)
                            }
                    }), [Fe]), (0, a.useEffect)((function() {
                        "undefined" !== typeof n && !!n !== $ && ee(n)
                    }), [n, $]), (0, a.useEffect)((function() {
                        M instanceof HTMLElement ? re(M) : re(document.body)
                    }), [M]), (0, S.op)((function() {
                        null === Ye || void 0 === Ye || Ye()
                    }), [w, Ye]);
                    var Ze = "hover" === O ? {
                            onMouseEnter: function() {
                                Ve(), Pe(!0)
                            },
                            onMouseLeave: function() {
                                Le(), De(!1)
                            },
                            onMouseMove: W ? Ke : void 0
                        } : {
                            onClick: Je
                        },
                        Xe = (0, r.__assign)({
                            arrow: u,
                            variant: T,
                            shadow: !0
                        }, X);
                    "gray" === T && (Xe = (0, r.__assign)((0, r.__assign)({}, Xe), {
                        shadow: !1
                    }));
                    var Qe = !y && $,
                        $e = _(Te, Z, Qe),
                        et = $e.triggerAriaProps,
                        tt = $e.contentAriaProps,
                        nt = i().createElement(I.A, {
                            visible: Qe,
                            className: Ee
                        }, i().createElement(R, (0, r.__assign)({}, tt, Xe, {
                            className: Se,
                            ref: me,
                            arrowRef: be,
                            arrowStyle: We.arrow,
                            style: (0, r.__assign)((0, r.__assign)({}, We.popper), null === X || void 0 === X ? void 0 : X.style)
                        }, qe.popper, {
                            children: w
                        })));
                    return i().createElement(d.Ay, (0, r.__assign)({
                        ref: pe
                    }, Ze, {
                        className: Ae
                    }), W && "hover" === O && $ && i().createElement("svg", {
                        className: "".concat(Te, "-safety-triangle"),
                        pointerEvents: "none"
                    }, i().createElement("polygon", {
                        pointerEvents: "auto",
                        points: we
                    })), i().createElement(d.Ay, (0, r.__assign)({}, et, {
                        className: ke,
                        children: X.children
                    })), ue && L && null !== ne ? k().createPortal(nt, ne) : nt)
                };
            N.displayName = "Tooltips";
            const O = N;
            var P = function(e) {
                var t = e.useReactPopper,
                    n = e.reactPopperProps,
                    a = e.enableHoverSafeArea,
                    s = e.bubbleWrapperClz,
                    c = (0, r.__rest)(e, ["useReactPopper", "reactPopperProps", "enableHoverSafeArea", "bubbleWrapperClz"]);
                return !o.lq && t ? i().createElement(O, (0, r.__assign)({
                    reactPopperProps: n,
                    enableHoverSafeArea: a,
                    bubbleWrapperClz: s
                }, c)) : i().createElement(T, (0, r.__assign)({}, c))
            };
            P.displayName = "Tooltips";
            const L = P
        },
        "0j4f": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                i = n.n(a),
                o = n("n0gm");
            const s = (0, a.forwardRef)((function(e, t) {
                var n = e.as,
                    a = void 0 === n ? "button" : n,
                    s = (0, r.__rest)(e, ["as"]);
                return i().createElement(o.A, (0, r.__assign)({}, s, {
                    as: a,
                    ref: t
                }))
            }))
        },
        F4gq: (e, t, n) => {
            var r = n("CMmH");
            e.exports = function(e, t, n) {
                for (var a = -1, i = e.length; ++a < i;) {
                    var o = e[a],
                        s = t(o);
                    if (null != s && (void 0 === c ? s === s && !r(s) : n(s, c))) var c = s,
                        u = o
                }
                return u
            }
        },
        pk5X: e => {
            e.exports = function(e, t) {
                return e > t
            }
        },
        GHbR: (e, t, n) => {
            var r = n("F4gq"),
                a = n("pk5X"),
                i = n("lCim");
            e.exports = function(e) {
                return e && e.length ? r(e, i, a) : void 0
            }
        },
        ZXeE: e => {
            var t = "undefined" !== typeof Element,
                n = "function" === typeof Map,
                r = "function" === typeof Set,
                a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, o) {
                if (e === o) return !0;
                if (e && o && "object" == typeof e && "object" == typeof o) {
                    if (e.constructor !== o.constructor) return !1;
                    var s, c, u, l;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != o.length) return !1;
                        for (c = s; 0 !== c--;)
                            if (!i(e[c], o[c])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && o instanceof Map) {
                        if (e.size !== o.size) return !1;
                        for (l = e.entries(); !(c = l.next()).done;)
                            if (!o.has(c.value[0])) return !1;
                        for (l = e.entries(); !(c = l.next()).done;)
                            if (!i(c.value[1], o.get(c.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && o instanceof Set) {
                        if (e.size !== o.size) return !1;
                        for (l = e.entries(); !(c = l.next()).done;)
                            if (!o.has(c.value[0])) return !1;
                        return !0
                    }
                    if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
                        if ((s = e.length) != o.length) return !1;
                        for (c = s; 0 !== c--;)
                            if (e[c] !== o[c]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
                    if (e.valueOf !== Object.prototype.valueOf && "function" === typeof e.valueOf && "function" === typeof o.valueOf) return e.valueOf() === o.valueOf();
                    if (e.toString !== Object.prototype.toString && "function" === typeof e.toString && "function" === typeof o.toString) return e.toString() === o.toString();
                    if ((s = (u = Object.keys(e)).length) !== Object.keys(o).length) return !1;
                    for (c = s; 0 !== c--;)
                        if (!Object.prototype.hasOwnProperty.call(o, u[c])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (c = s; 0 !== c--;)
                        if (("_owner" !== u[c] && "__v" !== u[c] && "__o" !== u[c] || !e.$$typeof) && !i(e[u[c]], o[u[c]])) return !1;
                    return !0
                }
                return e !== e && o !== o
            }
            e.exports = function(e, t) {
                try {
                    return i(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        Toyo: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => d
            });
            var r = n("DTvD"),
                a = n("hTvQ"),
                i = n("C9w4"),
                o = n("ZXeE"),
                s = n.n(o),
                c = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                u = "undefined" !== typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                l = [],
                d = function(e, t, n) {
                    void 0 === n && (n = {});
                    var o = r.useRef(null),
                        d = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || l
                        },
                        p = r.useState({
                            styles: {
                                popper: {
                                    position: d.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        f = p[0],
                        v = p[1],
                        m = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    a.flushSync((function() {
                                        v({
                                            styles: c(n.map((function(e) {
                                                return [e, t.styles[e] || {}]
                                            }))),
                                            attributes: c(n.map((function(e) {
                                                return [e, t.attributes[e]]
                                            })))
                                        })
                                    }))
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        h = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: d.onFirstUpdate,
                                placement: d.placement,
                                strategy: d.strategy,
                                modifiers: [].concat(d.modifiers, [m, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return s()(o.current, e) ? o.current || e : (o.current = e, e)
                        }), [d.onFirstUpdate, d.placement, d.strategy, d.modifiers, m]),
                        g = r.useRef();
                    return u((function() {
                        g.current && g.current.setOptions(h)
                    }), [h]), u((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || i.n4)(e, t, h);
                            return g.current = r,
                                function() {
                                    r.destroy(), g.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: g.current ? g.current.state : null,
                        styles: f.styles,
                        attributes: f.attributes,
                        update: g.current ? g.current.update : null,
                        forceUpdate: g.current ? g.current.forceUpdate : null
                    }
                }
        },
        "Ov3/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("DTvD"),
                a = n("iZfx");
            const i = function(e, t, n) {
                if (!a.Bd) return [t, a.lQ, a.lQ];
                if (!e) throw new Error("useLocalStorage key may not be falsy");
                var i = n ? n.raw ? function(e) {
                        return e
                    } : n.deserializer : JSON.parse,
                    o = (0, r.useRef)((function(e) {
                        try {
                            var r = n ? n.raw ? String : n.serializer : JSON.stringify,
                                a = localStorage.getItem(e);
                            return null !== a ? i(a) : (t && localStorage.setItem(e, r(t)), t)
                        } catch (s) {
                            return t
                        }
                    })),
                    s = (0, r.useState)((function() {
                        return o.current(e)
                    })),
                    c = s[0],
                    u = s[1];
                (0, r.useLayoutEffect)((function() {
                    return u(o.current(e))
                }), [e]);
                var l = (0, r.useCallback)((function(t) {
                        try {
                            var r = "function" === typeof t ? t(c) : t;
                            if ("undefined" === typeof r) return;
                            var a = void 0;
                            a = n ? n.raw ? "string" === typeof r ? r : JSON.stringify(r) : n.serializer ? n.serializer(r) : JSON.stringify(r) : JSON.stringify(r), localStorage.setItem(e, a), u(i(a))
                        } catch (s) {}
                    }), [e, u]),
                    d = (0, r.useCallback)((function() {
                        try {
                            localStorage.removeItem(e), u(void 0)
                        } catch (s) {}
                    }), [e, u]);
                return [c, l, d]
            }
        },
        eAFj: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("DTvD");

            function a(e) {
                let t;
                const n = new Set,
                    r = (e, r) => {
                        const a = "function" === typeof e ? e(t) : e;
                        if (a !== t) {
                            const e = t;
                            t = r ? a : Object.assign({}, t, a), n.forEach((n => n(t, e)))
                        }
                    },
                    a = () => t,
                    i = {
                        setState: r,
                        getState: a,
                        subscribe: (e, r, i) => r || i ? ((e, r = a, i = Object.is) => {
                            console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                            let o = r(t);

                            function s() {
                                const n = r(t);
                                if (!i(o, n)) {
                                    const t = o;
                                    e(o = n, t)
                                }
                            }
                            return n.add(s), () => n.delete(s)
                        })(e, r, i) : (n.add(e), () => n.delete(e)),
                        destroy: () => n.clear()
                    };
                return t = e(r, a, i), i
            }
            const i = "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? r.useEffect : r.useLayoutEffect;

            function o(e) {
                const t = "function" === typeof e ? a(e) : e,
                    n = (e = t.getState, n = Object.is) => {
                        const [, a] = (0, r.useReducer)((e => e + 1), 0), o = t.getState(), s = (0, r.useRef)(o), c = (0, r.useRef)(e), u = (0, r.useRef)(n), l = (0, r.useRef)(!1), d = (0, r.useRef)();
                        let p;
                        void 0 === d.current && (d.current = e(o));
                        let f = !1;
                        (s.current !== o || c.current !== e || u.current !== n || l.current) && (p = e(o), f = !n(d.current, p)), i((() => {
                            f && (d.current = p), s.current = o, c.current = e, u.current = n, l.current = !1
                        }));
                        const v = (0, r.useRef)(o);
                        i((() => {
                            const e = () => {
                                    try {
                                        const e = t.getState(),
                                            n = c.current(e);
                                        u.current(d.current, n) || (s.current = e, d.current = n, a())
                                    } catch (e) {
                                        l.current = !0, a()
                                    }
                                },
                                n = t.subscribe(e);
                            return t.getState() !== v.current && e(), n
                        }), []);
                        const m = f ? p : d.current;
                        return (0, r.useDebugValue)(m), m
                    };
                return Object.assign(n, t), n[Symbol.iterator] = function() {
                    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                    const e = [n, t];
                    return {
                        next() {
                            const t = e.length <= 0;
                            return {
                                value: e.shift(),
                                done: t
                            }
                        }
                    }
                }, n
            }
        },
        TVsB: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => x,
                g: () => _
            });
            var r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                a = Math.ceil,
                i = Math.floor,
                o = "[BigNumber Error] ",
                s = o + "Number primitive has more than 15 significant digits: ",
                c = 1e14,
                u = 14,
                l = 9007199254740991,
                d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                p = 1e7,
                f = 1e9;

            function v(e) {
                var t = 0 | e;
                return e > 0 || e === t ? t : t - 1
            }

            function m(e) {
                for (var t, n, r = 1, a = e.length, i = e[0] + ""; r < a;) {
                    for (t = e[r++] + "", n = u - t.length; n--; t = "0" + t);
                    i += t
                }
                for (a = i.length; 48 === i.charCodeAt(--a););
                return i.slice(0, a + 1 || 1)
            }

            function h(e, t) {
                var n, r, a = e.c,
                    i = t.c,
                    o = e.s,
                    s = t.s,
                    c = e.e,
                    u = t.e;
                if (!o || !s) return null;
                if (n = a && !a[0], r = i && !i[0], n || r) return n ? r ? 0 : -s : o;
                if (o != s) return o;
                if (n = o < 0, r = c == u, !a || !i) return r ? 0 : !a ^ n ? 1 : -1;
                if (!r) return c > u ^ n ? 1 : -1;
                for (s = (c = a.length) < (u = i.length) ? c : u, o = 0; o < s; o++)
                    if (a[o] != i[o]) return a[o] > i[o] ^ n ? 1 : -1;
                return c == u ? 0 : c > u ^ n ? 1 : -1
            }

            function g(e, t, n, r) {
                if (e < t || e > n || e !== i(e)) throw Error(o + (r || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
            }

            function b(e) {
                var t = e.c.length - 1;
                return v(e.e / u) == t && e.c[t] % 2 != 0
            }

            function y(e, t) {
                return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
            }

            function w(e, t, n) {
                var r, a;
                if (t < 0) {
                    for (a = n + "."; ++t; a += n);
                    e = a + e
                } else if (++t > (r = e.length)) {
                    for (a = n, t -= r; --t; a += n);
                    e += a
                } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
                return e
            }
            var _ = function e(t) {
                var n, _, x, T = V.prototype = {
                        constructor: V,
                        toString: null,
                        valueOf: null
                    },
                    E = new V(1),
                    k = 20,
                    S = 4,
                    A = -7,
                    C = 21,
                    R = -1e7,
                    I = 1e7,
                    N = !1,
                    O = 1,
                    P = 0,
                    L = {
                        prefix: "",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        groupSeparator: ",",
                        decimalSeparator: ".",
                        fractionGroupSize: 0,
                        fractionGroupSeparator: "\xa0",
                        suffix: ""
                    },
                    M = "0123456789abcdefghijklmnopqrstuvwxyz",
                    D = !0;

                function V(e, t) {
                    var n, a, o, c, d, p, f, v, m = this;
                    if (!(m instanceof V)) return new V(e, t);
                    if (null == t) {
                        if (e && !0 === e._isBigNumber) return m.s = e.s, void(!e.c || e.e > I ? m.c = m.e = null : e.e < R ? m.c = [m.e = 0] : (m.e = e.e, m.c = e.c.slice()));
                        if ((p = "number" == typeof e) && 0 * e == 0) {
                            if (m.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                for (c = 0, d = e; d >= 10; d /= 10, c++);
                                return void(c > I ? m.c = m.e = null : (m.e = c, m.c = [e]))
                            }
                            v = String(e)
                        } else {
                            if (!r.test(v = String(e))) return x(m, v, p);
                            m.s = 45 == v.charCodeAt(0) ? (v = v.slice(1), -1) : 1
                        }(c = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (d = v.search(/e/i)) > 0 ? (c < 0 && (c = d), c += +v.slice(d + 1), v = v.substring(0, d)) : c < 0 && (c = v.length)
                    } else {
                        if (g(t, 2, M.length, "Base"), 10 == t && D) return G(m = new V(e), k + m.e + 1, S);
                        if (v = String(e), p = "number" == typeof e) {
                            if (0 * e != 0) return x(m, v, p, t);
                            if (m.s = 1 / e < 0 ? (v = v.slice(1), -1) : 1, V.DEBUG && v.replace(/^0\.0*|\./, "").length > 15) throw Error(s + e)
                        } else m.s = 45 === v.charCodeAt(0) ? (v = v.slice(1), -1) : 1;
                        for (n = M.slice(0, t), c = d = 0, f = v.length; d < f; d++)
                            if (n.indexOf(a = v.charAt(d)) < 0) {
                                if ("." == a) {
                                    if (d > c) {
                                        c = f;
                                        continue
                                    }
                                } else if (!o && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
                                    o = !0, d = -1, c = 0;
                                    continue
                                }
                                return x(m, String(e), p, t)
                            }
                        p = !1, (c = (v = _(v, t, 10, m.s)).indexOf(".")) > -1 ? v = v.replace(".", "") : c = v.length
                    }
                    for (d = 0; 48 === v.charCodeAt(d); d++);
                    for (f = v.length; 48 === v.charCodeAt(--f););
                    if (v = v.slice(d, ++f)) {
                        if (f -= d, p && V.DEBUG && f > 15 && (e > l || e !== i(e))) throw Error(s + m.s * e);
                        if ((c = c - d - 1) > I) m.c = m.e = null;
                        else if (c < R) m.c = [m.e = 0];
                        else {
                            if (m.e = c, m.c = [], d = (c + 1) % u, c < 0 && (d += u), d < f) {
                                for (d && m.c.push(+v.slice(0, d)), f -= u; d < f;) m.c.push(+v.slice(d, d += u));
                                d = u - (v = v.slice(d)).length
                            } else d -= f;
                            for (; d--; v += "0");
                            m.c.push(+v)
                        }
                    } else m.c = [m.e = 0]
                }

                function j(e, t, n, r) {
                    var a, i, o, s, c;
                    if (null == n ? n = S : g(n, 0, 8), !e.c) return e.toString();
                    if (a = e.c[0], o = e.e, null == t) c = m(e.c), c = 1 == r || 2 == r && (o <= A || o >= C) ? y(c, o) : w(c, o, "0");
                    else if (i = (e = G(new V(e), t, n)).e, s = (c = m(e.c)).length, 1 == r || 2 == r && (t <= i || i <= A)) {
                        for (; s < t; c += "0", s++);
                        c = y(c, i)
                    } else if (t -= o, c = w(c, i, "0"), i + 1 > s) {
                        if (--t > 0)
                            for (c += "."; t--; c += "0");
                    } else if ((t += i - s) > 0)
                        for (i + 1 == s && (c += "."); t--; c += "0");
                    return e.s < 0 && a ? "-" + c : c
                }

                function F(e, t) {
                    for (var n, r, a = 1, i = new V(e[0]); a < e.length; a++)(!(r = new V(e[a])).s || (n = h(i, r)) === t || 0 === n && i.s === t) && (i = r);
                    return i
                }

                function U(e, t, n) {
                    for (var r = 1, a = t.length; !t[--a]; t.pop());
                    for (a = t[0]; a >= 10; a /= 10, r++);
                    return (n = r + n * u - 1) > I ? e.c = e.e = null : n < R ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                }

                function G(e, t, n, r) {
                    var o, s, l, p, f, v, m, h = e.c,
                        g = d;
                    if (h) {
                        e: {
                            for (o = 1, p = h[0]; p >= 10; p /= 10, o++);
                            if ((s = t - o) < 0) s += u,
                            l = t,
                            f = h[v = 0],
                            m = i(f / g[o - l - 1] % 10);
                            else if ((v = a((s + 1) / u)) >= h.length) {
                                if (!r) break e;
                                for (; h.length <= v; h.push(0));
                                f = m = 0, o = 1, l = (s %= u) - u + 1
                            } else {
                                for (f = p = h[v], o = 1; p >= 10; p /= 10, o++);
                                m = (l = (s %= u) - u + o) < 0 ? 0 : i(f / g[o - l - 1] % 10)
                            }
                            if (r = r || t < 0 || null != h[v + 1] || (l < 0 ? f : f % g[o - l - 1]), r = n < 4 ? (m || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == n || r || 6 == n && (s > 0 ? l > 0 ? f / g[o - l] : 0 : h[v - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !h[0]) return h.length = 0, r ? (t -= e.e + 1, h[0] = g[(u - t % u) % u], e.e = -t || 0) : h[0] = e.e = 0, e;
                            if (0 == s ? (h.length = v, p = 1, v--) : (h.length = v + 1, p = g[u - s], h[v] = l > 0 ? i(f / g[o - l] % g[l]) * p : 0), r)
                                for (;;) {
                                    if (0 == v) {
                                        for (s = 1, l = h[0]; l >= 10; l /= 10, s++);
                                        for (l = h[0] += p, p = 1; l >= 10; l /= 10, p++);
                                        s != p && (e.e++, h[0] == c && (h[0] = 1));
                                        break
                                    }
                                    if (h[v] += p, h[v] != c) break;
                                    h[v--] = 0, p = 1
                                }
                            for (s = h.length; 0 === h[--s]; h.pop());
                        }
                        e.e > I ? e.c = e.e = null : e.e < R && (e.c = [e.e = 0])
                    }
                    return e
                }

                function B(e) {
                    var t, n = e.e;
                    return null === n ? e.toString() : (t = m(e.c), t = n <= A || n >= C ? y(t, n) : w(t, n, "0"), e.s < 0 ? "-" + t : t)
                }
                return V.clone = e, V.ROUND_UP = 0, V.ROUND_DOWN = 1, V.ROUND_CEIL = 2, V.ROUND_FLOOR = 3, V.ROUND_HALF_UP = 4, V.ROUND_HALF_DOWN = 5, V.ROUND_HALF_EVEN = 6, V.ROUND_HALF_CEIL = 7, V.ROUND_HALF_FLOOR = 8, V.EUCLID = 9, V.config = V.set = function(e) {
                    var t, n;
                    if (null != e) {
                        if ("object" != typeof e) throw Error(o + "Object expected: " + e);
                        if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (g(n = e[t], 0, f, t), k = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (g(n = e[t], 0, 8, t), S = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (g(n[0], -f, 0, t), g(n[1], 0, f, t), A = n[0], C = n[1]) : (g(n, -f, f, t), A = -(C = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                            if ((n = e[t]) && n.pop) g(n[0], -f, -1, t), g(n[1], 1, f, t), R = n[0], I = n[1];
                            else {
                                if (g(n, -f, f, t), !n) throw Error(o + t + " cannot be zero: " + n);
                                R = -(I = n < 0 ? -n : n)
                            }
                        if (e.hasOwnProperty(t = "CRYPTO")) {
                            if ((n = e[t]) !== !!n) throw Error(o + t + " not true or false: " + n);
                            if (n) {
                                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw N = !n, Error(o + "crypto unavailable");
                                N = n
                            } else N = n
                        }
                        if (e.hasOwnProperty(t = "MODULO_MODE") && (g(n = e[t], 0, 9, t), O = n), e.hasOwnProperty(t = "POW_PRECISION") && (g(n = e[t], 0, f, t), P = n), e.hasOwnProperty(t = "FORMAT")) {
                            if ("object" != typeof(n = e[t])) throw Error(o + t + " not an object: " + n);
                            L = n
                        }
                        if (e.hasOwnProperty(t = "ALPHABET")) {
                            if ("string" != typeof(n = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(o + t + " invalid: " + n);
                            D = "0123456789" == n.slice(0, 10), M = n
                        }
                    }
                    return {
                        DECIMAL_PLACES: k,
                        ROUNDING_MODE: S,
                        EXPONENTIAL_AT: [A, C],
                        RANGE: [R, I],
                        CRYPTO: N,
                        MODULO_MODE: O,
                        POW_PRECISION: P,
                        FORMAT: L,
                        ALPHABET: M
                    }
                }, V.isBigNumber = function(e) {
                    if (!e || !0 !== e._isBigNumber) return !1;
                    if (!V.DEBUG) return !0;
                    var t, n, r = e.c,
                        a = e.e,
                        s = e.s;
                    e: if ("[object Array]" == {}.toString.call(r)) {
                        if ((1 === s || -1 === s) && a >= -f && a <= f && a === i(a)) {
                            if (0 === r[0]) {
                                if (0 === a && 1 === r.length) return !0;
                                break e
                            }
                            if ((t = (a + 1) % u) < 1 && (t += u), String(r[0]).length == t) {
                                for (t = 0; t < r.length; t++)
                                    if ((n = r[t]) < 0 || n >= c || n !== i(n)) break e;
                                if (0 !== n) return !0
                            }
                        }
                    } else
                    if (null === r && null === a && (null === s || 1 === s || -1 === s)) return !0;
                    throw Error(o + "Invalid BigNumber: " + e)
                }, V.maximum = V.max = function() {
                    return F(arguments, -1)
                }, V.minimum = V.min = function() {
                    return F(arguments, 1)
                }, V.random = function() {
                    var e = 9007199254740992,
                        t = Math.random() * e & 2097151 ? function() {
                            return i(Math.random() * e)
                        } : function() {
                            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                        };
                    return function(e) {
                        var n, r, s, c, l, p = 0,
                            v = [],
                            m = new V(E);
                        if (null == e ? e = k : g(e, 0, f), c = a(e / u), N)
                            if (crypto.getRandomValues) {
                                for (n = crypto.getRandomValues(new Uint32Array(c *= 2)); p < c;)(l = 131072 * n[p] + (n[p + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), n[p] = r[0], n[p + 1] = r[1]) : (v.push(l % 1e14), p += 2);
                                p = c / 2
                            } else {
                                if (!crypto.randomBytes) throw N = !1, Error(o + "crypto unavailable");
                                for (n = crypto.randomBytes(c *= 7); p < c;)(l = 281474976710656 * (31 & n[p]) + 1099511627776 * n[p + 1] + 4294967296 * n[p + 2] + 16777216 * n[p + 3] + (n[p + 4] << 16) + (n[p + 5] << 8) + n[p + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, p) : (v.push(l % 1e14), p += 7);
                                p = c / 7
                            }
                        if (!N)
                            for (; p < c;)(l = t()) < 9e15 && (v[p++] = l % 1e14);
                        for (c = v[--p], e %= u, c && e && (l = d[u - e], v[p] = i(c / l) * l); 0 === v[p]; v.pop(), p--);
                        if (p < 0) v = [s = 0];
                        else {
                            for (s = -1; 0 === v[0]; v.splice(0, 1), s -= u);
                            for (p = 1, l = v[0]; l >= 10; l /= 10, p++);
                            p < u && (s -= u - p)
                        }
                        return m.e = s, m.c = v, m
                    }
                }(), V.sum = function() {
                    for (var e = 1, t = arguments, n = new V(t[0]); e < t.length;) n = n.plus(t[e++]);
                    return n
                }, _ = function() {
                    var e = "0123456789";

                    function t(e, t, n, r) {
                        for (var a, i, o = [0], s = 0, c = e.length; s < c;) {
                            for (i = o.length; i--; o[i] *= t);
                            for (o[0] += r.indexOf(e.charAt(s++)), a = 0; a < o.length; a++) o[a] > n - 1 && (null == o[a + 1] && (o[a + 1] = 0), o[a + 1] += o[a] / n | 0, o[a] %= n)
                        }
                        return o.reverse()
                    }
                    return function(r, a, i, o, s) {
                        var c, u, l, d, p, f, v, h, g = r.indexOf("."),
                            b = k,
                            y = S;
                        for (g >= 0 && (d = P, P = 0, r = r.replace(".", ""), f = (h = new V(a)).pow(r.length - g), P = d, h.c = t(w(m(f.c), f.e, "0"), 10, i, e), h.e = h.c.length), l = d = (v = t(r, a, i, s ? (c = M, e) : (c = e, M))).length; 0 == v[--d]; v.pop());
                        if (!v[0]) return c.charAt(0);
                        if (g < 0 ? --l : (f.c = v, f.e = l, f.s = o, v = (f = n(f, h, b, y, i)).c, p = f.r, l = f.e), g = v[u = l + b + 1], d = i / 2, p = p || u < 0 || null != v[u + 1], p = y < 4 ? (null != g || p) && (0 == y || y == (f.s < 0 ? 3 : 2)) : g > d || g == d && (4 == y || p || 6 == y && 1 & v[u - 1] || y == (f.s < 0 ? 8 : 7)), u < 1 || !v[0]) r = p ? w(c.charAt(1), -b, c.charAt(0)) : c.charAt(0);
                        else {
                            if (v.length = u, p)
                                for (--i; ++v[--u] > i;) v[u] = 0, u || (++l, v = [1].concat(v));
                            for (d = v.length; !v[--d];);
                            for (g = 0, r = ""; g <= d; r += c.charAt(v[g++]));
                            r = w(r, l, c.charAt(0))
                        }
                        return r
                    }
                }(), n = function() {
                    function e(e, t, n) {
                        var r, a, i, o, s = 0,
                            c = e.length,
                            u = t % p,
                            l = t / p | 0;
                        for (e = e.slice(); c--;) s = ((a = u * (i = e[c] % p) + (r = l * i + (o = e[c] / p | 0) * u) % p * p + s) / n | 0) + (r / p | 0) + l * o, e[c] = a % n;
                        return s && (e = [s].concat(e)), e
                    }

                    function t(e, t, n, r) {
                        var a, i;
                        if (n != r) i = n > r ? 1 : -1;
                        else
                            for (a = i = 0; a < n; a++)
                                if (e[a] != t[a]) {
                                    i = e[a] > t[a] ? 1 : -1;
                                    break
                                } return i
                    }

                    function n(e, t, n, r) {
                        for (var a = 0; n--;) e[n] -= a, a = e[n] < t[n] ? 1 : 0, e[n] = a * r + e[n] - t[n];
                        for (; !e[0] && e.length > 1; e.splice(0, 1));
                    }
                    return function(r, a, o, s, l) {
                        var d, p, f, m, h, g, b, y, w, _, x, T, E, k, S, A, C, R = r.s == a.s ? 1 : -1,
                            I = r.c,
                            N = a.c;
                        if (!I || !I[0] || !N || !N[0]) return new V(r.s && a.s && (I ? !N || I[0] != N[0] : N) ? I && 0 == I[0] || !N ? 0 * R : R / 0 : NaN);
                        for (w = (y = new V(R)).c = [], R = o + (p = r.e - a.e) + 1, l || (l = c, p = v(r.e / u) - v(a.e / u), R = R / u | 0), f = 0; N[f] == (I[f] || 0); f++);
                        if (N[f] > (I[f] || 0) && p--, R < 0) w.push(1), m = !0;
                        else {
                            for (k = I.length, A = N.length, f = 0, R += 2, (h = i(l / (N[0] + 1))) > 1 && (N = e(N, h, l), I = e(I, h, l), A = N.length, k = I.length), E = A, x = (_ = I.slice(0, A)).length; x < A; _[x++] = 0);
                            C = N.slice(), C = [0].concat(C), S = N[0], N[1] >= l / 2 && S++;
                            do {
                                if (h = 0, (d = t(N, _, A, x)) < 0) {
                                    if (T = _[0], A != x && (T = T * l + (_[1] || 0)), (h = i(T / S)) > 1)
                                        for (h >= l && (h = l - 1), b = (g = e(N, h, l)).length, x = _.length; 1 == t(g, _, b, x);) h--, n(g, A < b ? C : N, b, l), b = g.length, d = 1;
                                    else 0 == h && (d = h = 1), b = (g = N.slice()).length;
                                    if (b < x && (g = [0].concat(g)), n(_, g, x, l), x = _.length, -1 == d)
                                        for (; t(N, _, A, x) < 1;) h++, n(_, A < x ? C : N, x, l), x = _.length
                                } else 0 === d && (h++, _ = [0]);
                                w[f++] = h, _[0] ? _[x++] = I[E] || 0 : (_ = [I[E]], x = 1)
                            } while ((E++ < k || null != _[0]) && R--);
                            m = null != _[0], w[0] || w.splice(0, 1)
                        }
                        if (l == c) {
                            for (f = 1, R = w[0]; R >= 10; R /= 10, f++);
                            G(y, o + (y.e = f + p * u - 1) + 1, s, m)
                        } else y.e = p, y.r = +m;
                        return y
                    }
                }(), x = function() {
                    var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                        t = /^([^.]+)\.$/,
                        n = /^\.([^.]+)$/,
                        r = /^-?(Infinity|NaN)$/,
                        a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                    return function(i, s, c, u) {
                        var l, d = c ? s : s.replace(a, "");
                        if (r.test(d)) i.s = isNaN(d) ? null : d < 0 ? -1 : 1;
                        else {
                            if (!c && (d = d.replace(e, (function(e, t, n) {
                                    return l = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, u && u != l ? e : t
                                })), u && (l = u, d = d.replace(t, "$1").replace(n, "0.$1")), s != d)) return new V(d, l);
                            if (V.DEBUG) throw Error(o + "Not a" + (u ? " base " + u : "") + " number: " + s);
                            i.s = null
                        }
                        i.c = i.e = null
                    }
                }(), T.absoluteValue = T.abs = function() {
                    var e = new V(this);
                    return e.s < 0 && (e.s = 1), e
                }, T.comparedTo = function(e, t) {
                    return h(this, new V(e, t))
                }, T.decimalPlaces = T.dp = function(e, t) {
                    var n, r, a, i = this;
                    if (null != e) return g(e, 0, f), null == t ? t = S : g(t, 0, 8), G(new V(i), e + i.e + 1, t);
                    if (!(n = i.c)) return null;
                    if (r = ((a = n.length - 1) - v(this.e / u)) * u, a = n[a])
                        for (; a % 10 == 0; a /= 10, r--);
                    return r < 0 && (r = 0), r
                }, T.dividedBy = T.div = function(e, t) {
                    return n(this, new V(e, t), k, S)
                }, T.dividedToIntegerBy = T.idiv = function(e, t) {
                    return n(this, new V(e, t), 0, 1)
                }, T.exponentiatedBy = T.pow = function(e, t) {
                    var n, r, s, c, l, d, p, f, v = this;
                    if ((e = new V(e)).c && !e.isInteger()) throw Error(o + "Exponent not an integer: " + B(e));
                    if (null != t && (t = new V(t)), l = e.e > 14, !v.c || !v.c[0] || 1 == v.c[0] && !v.e && 1 == v.c.length || !e.c || !e.c[0]) return f = new V(Math.pow(+B(v), l ? e.s * (2 - b(e)) : +B(e))), t ? f.mod(t) : f;
                    if (d = e.s < 0, t) {
                        if (t.c ? !t.c[0] : !t.s) return new V(NaN);
                        (r = !d && v.isInteger() && t.isInteger()) && (v = v.mod(t))
                    } else {
                        if (e.e > 9 && (v.e > 0 || v.e < -1 || (0 == v.e ? v.c[0] > 1 || l && v.c[1] >= 24e7 : v.c[0] < 8e13 || l && v.c[0] <= 9999975e7))) return c = v.s < 0 && b(e) ? -0 : 0, v.e > -1 && (c = 1 / c), new V(d ? 1 / c : c);
                        P && (c = a(P / u + 2))
                    }
                    for (l ? (n = new V(.5), d && (e.s = 1), p = b(e)) : p = (s = Math.abs(+B(e))) % 2, f = new V(E);;) {
                        if (p) {
                            if (!(f = f.times(v)).c) break;
                            c ? f.c.length > c && (f.c.length = c) : r && (f = f.mod(t))
                        }
                        if (s) {
                            if (0 === (s = i(s / 2))) break;
                            p = s % 2
                        } else if (G(e = e.times(n), e.e + 1, 1), e.e > 14) p = b(e);
                        else {
                            if (0 === (s = +B(e))) break;
                            p = s % 2
                        }
                        v = v.times(v), c ? v.c && v.c.length > c && (v.c.length = c) : r && (v = v.mod(t))
                    }
                    return r ? f : (d && (f = E.div(f)), t ? f.mod(t) : c ? G(f, P, S, undefined) : f)
                }, T.integerValue = function(e) {
                    var t = new V(this);
                    return null == e ? e = S : g(e, 0, 8), G(t, t.e + 1, e)
                }, T.isEqualTo = T.eq = function(e, t) {
                    return 0 === h(this, new V(e, t))
                }, T.isFinite = function() {
                    return !!this.c
                }, T.isGreaterThan = T.gt = function(e, t) {
                    return h(this, new V(e, t)) > 0
                }, T.isGreaterThanOrEqualTo = T.gte = function(e, t) {
                    return 1 === (t = h(this, new V(e, t))) || 0 === t
                }, T.isInteger = function() {
                    return !!this.c && v(this.e / u) > this.c.length - 2
                }, T.isLessThan = T.lt = function(e, t) {
                    return h(this, new V(e, t)) < 0
                }, T.isLessThanOrEqualTo = T.lte = function(e, t) {
                    return -1 === (t = h(this, new V(e, t))) || 0 === t
                }, T.isNaN = function() {
                    return !this.s
                }, T.isNegative = function() {
                    return this.s < 0
                }, T.isPositive = function() {
                    return this.s > 0
                }, T.isZero = function() {
                    return !!this.c && 0 == this.c[0]
                }, T.minus = function(e, t) {
                    var n, r, a, i, o = this,
                        s = o.s;
                    if (t = (e = new V(e, t)).s, !s || !t) return new V(NaN);
                    if (s != t) return e.s = -t, o.plus(e);
                    var l = o.e / u,
                        d = e.e / u,
                        p = o.c,
                        f = e.c;
                    if (!l || !d) {
                        if (!p || !f) return p ? (e.s = -t, e) : new V(f ? o : NaN);
                        if (!p[0] || !f[0]) return f[0] ? (e.s = -t, e) : new V(p[0] ? o : 3 == S ? -0 : 0)
                    }
                    if (l = v(l), d = v(d), p = p.slice(), s = l - d) {
                        for ((i = s < 0) ? (s = -s, a = p) : (d = l, a = f), a.reverse(), t = s; t--; a.push(0));
                        a.reverse()
                    } else
                        for (r = (i = (s = p.length) < (t = f.length)) ? s : t, s = t = 0; t < r; t++)
                            if (p[t] != f[t]) {
                                i = p[t] < f[t];
                                break
                            } if (i && (a = p, p = f, f = a, e.s = -e.s), (t = (r = f.length) - (n = p.length)) > 0)
                        for (; t--; p[n++] = 0);
                    for (t = c - 1; r > s;) {
                        if (p[--r] < f[r]) {
                            for (n = r; n && !p[--n]; p[n] = t);
                            --p[n], p[r] += c
                        }
                        p[r] -= f[r]
                    }
                    for (; 0 == p[0]; p.splice(0, 1), --d);
                    return p[0] ? U(e, p, d) : (e.s = 3 == S ? -1 : 1, e.c = [e.e = 0], e)
                }, T.modulo = T.mod = function(e, t) {
                    var r, a, i = this;
                    return e = new V(e, t), !i.c || !e.s || e.c && !e.c[0] ? new V(NaN) : !e.c || i.c && !i.c[0] ? new V(i) : (9 == O ? (a = e.s, e.s = 1, r = n(i, e, 0, 3), e.s = a, r.s *= a) : r = n(i, e, 0, O), (e = i.minus(r.times(e))).c[0] || 1 != O || (e.s = i.s), e)
                }, T.multipliedBy = T.times = function(e, t) {
                    var n, r, a, i, o, s, l, d, f, m, h, g, b, y, w, _ = this,
                        x = _.c,
                        T = (e = new V(e, t)).c;
                    if (!x || !T || !x[0] || !T[0]) return !_.s || !e.s || x && !x[0] && !T || T && !T[0] && !x ? e.c = e.e = e.s = null : (e.s *= _.s, x && T ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                    for (r = v(_.e / u) + v(e.e / u), e.s *= _.s, (l = x.length) < (m = T.length) && (b = x, x = T, T = b, a = l, l = m, m = a), a = l + m, b = []; a--; b.push(0));
                    for (y = c, w = p, a = m; --a >= 0;) {
                        for (n = 0, h = T[a] % w, g = T[a] / w | 0, i = a + (o = l); i > a;) n = ((d = h * (d = x[--o] % w) + (s = g * d + (f = x[o] / w | 0) * h) % w * w + b[i] + n) / y | 0) + (s / w | 0) + g * f, b[i--] = d % y;
                        b[i] = n
                    }
                    return n ? ++r : b.splice(0, 1), U(e, b, r)
                }, T.negated = function() {
                    var e = new V(this);
                    return e.s = -e.s || null, e
                }, T.plus = function(e, t) {
                    var n, r = this,
                        a = r.s;
                    if (t = (e = new V(e, t)).s, !a || !t) return new V(NaN);
                    if (a != t) return e.s = -t, r.minus(e);
                    var i = r.e / u,
                        o = e.e / u,
                        s = r.c,
                        l = e.c;
                    if (!i || !o) {
                        if (!s || !l) return new V(a / 0);
                        if (!s[0] || !l[0]) return l[0] ? e : new V(s[0] ? r : 0 * a)
                    }
                    if (i = v(i), o = v(o), s = s.slice(), a = i - o) {
                        for (a > 0 ? (o = i, n = l) : (a = -a, n = s), n.reverse(); a--; n.push(0));
                        n.reverse()
                    }
                    for ((a = s.length) - (t = l.length) < 0 && (n = l, l = s, s = n, t = a), a = 0; t;) a = (s[--t] = s[t] + l[t] + a) / c | 0, s[t] = c === s[t] ? 0 : s[t] % c;
                    return a && (s = [a].concat(s), ++o), U(e, s, o)
                }, T.precision = T.sd = function(e, t) {
                    var n, r, a, i = this;
                    if (null != e && e !== !!e) return g(e, 1, f), null == t ? t = S : g(t, 0, 8), G(new V(i), e, t);
                    if (!(n = i.c)) return null;
                    if (r = (a = n.length - 1) * u + 1, a = n[a]) {
                        for (; a % 10 == 0; a /= 10, r--);
                        for (a = n[0]; a >= 10; a /= 10, r++);
                    }
                    return e && i.e + 1 > r && (r = i.e + 1), r
                }, T.shiftedBy = function(e) {
                    return g(e, -9007199254740991, l), this.times("1e" + e)
                }, T.squareRoot = T.sqrt = function() {
                    var e, t, r, a, i, o = this,
                        s = o.c,
                        c = o.s,
                        u = o.e,
                        l = k + 4,
                        d = new V("0.5");
                    if (1 !== c || !s || !s[0]) return new V(!c || c < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
                    if (0 == (c = Math.sqrt(+B(o))) || c == 1 / 0 ? (((t = m(s)).length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(+t), u = v((u + 1) / 2) - (u < 0 || u % 2), r = new V(t = c == 1 / 0 ? "5e" + u : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + u)) : r = new V(c + ""), r.c[0])
                        for ((c = (u = r.e) + l) < 3 && (c = 0);;)
                            if (i = r, r = d.times(i.plus(n(o, i, l, 1))), m(i.c).slice(0, c) === (t = m(r.c)).slice(0, c)) {
                                if (r.e < u && --c, "9999" != (t = t.slice(c - 3, c + 1)) && (a || "4999" != t)) {
                                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (G(r, r.e + k + 2, 1), e = !r.times(r).eq(o));
                                    break
                                }
                                if (!a && (G(i, i.e + k + 2, 0), i.times(i).eq(o))) {
                                    r = i;
                                    break
                                }
                                l += 4, c += 4, a = 1
                            }
                    return G(r, r.e + k + 1, S, e)
                }, T.toExponential = function(e, t) {
                    return null != e && (g(e, 0, f), e++), j(this, e, t, 1)
                }, T.toFixed = function(e, t) {
                    return null != e && (g(e, 0, f), e = e + this.e + 1), j(this, e, t)
                }, T.toFormat = function(e, t, n) {
                    var r, a = this;
                    if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = L;
                    else if ("object" != typeof n) throw Error(o + "Argument not an object: " + n);
                    if (r = a.toFixed(e, t), a.c) {
                        var i, s = r.split("."),
                            c = +n.groupSize,
                            u = +n.secondaryGroupSize,
                            l = n.groupSeparator || "",
                            d = s[0],
                            p = s[1],
                            f = a.s < 0,
                            v = f ? d.slice(1) : d,
                            m = v.length;
                        if (u && (i = c, c = u, u = i, m -= i), c > 0 && m > 0) {
                            for (i = m % c || c, d = v.substr(0, i); i < m; i += c) d += l + v.substr(i, c);
                            u > 0 && (d += l + v.slice(i)), f && (d = "-" + d)
                        }
                        r = p ? d + (n.decimalSeparator || "") + ((u = +n.fractionGroupSize) ? p.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : p) : d
                    }
                    return (n.prefix || "") + r + (n.suffix || "")
                }, T.toFraction = function(e) {
                    var t, r, a, i, s, c, l, p, f, v, h, g, b = this,
                        y = b.c;
                    if (null != e && (!(l = new V(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(E))) throw Error(o + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + B(l));
                    if (!y) return new V(b);
                    for (t = new V(E), f = r = new V(E), a = p = new V(E), g = m(y), s = t.e = g.length - b.e - 1, t.c[0] = d[(c = s % u) < 0 ? u + c : c], e = !e || l.comparedTo(t) > 0 ? s > 0 ? t : f : l, c = I, I = 1 / 0, l = new V(g), p.c[0] = 0; v = n(l, t, 0, 1), 1 != (i = r.plus(v.times(a))).comparedTo(e);) r = a, a = i, f = p.plus(v.times(i = f)), p = i, t = l.minus(v.times(i = t)), l = i;
                    return i = n(e.minus(r), a, 0, 1), p = p.plus(i.times(f)), r = r.plus(i.times(a)), p.s = f.s = b.s, h = n(f, a, s *= 2, S).minus(b).abs().comparedTo(n(p, r, s, S).minus(b).abs()) < 1 ? [f, a] : [p, r], I = c, h
                }, T.toNumber = function() {
                    return +B(this)
                }, T.toPrecision = function(e, t) {
                    return null != e && g(e, 1, f), j(this, e, t, 2)
                }, T.toString = function(e) {
                    var t, n = this,
                        r = n.s,
                        a = n.e;
                    return null === a ? r ? (t = "Infinity", r < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = a <= A || a >= C ? y(m(n.c), a) : w(m(n.c), a, "0") : 10 === e && D ? t = w(m((n = G(new V(n), k + a + 1, S)).c), n.e, "0") : (g(e, 2, M.length, "Base"), t = _(w(m(n.c), a, "0"), 10, e, r, !0)), r < 0 && n.c[0] && (t = "-" + t)), t
                }, T.valueOf = T.toJSON = function() {
                    return B(this)
                }, T._isBigNumber = !0, T[Symbol.toStringTag] = "BigNumber", T[Symbol.for("nodejs.util.inspect.custom")] = T.valueOf, null != t && V.set(t), V
            }();
            const x = _
        }
    }
]);