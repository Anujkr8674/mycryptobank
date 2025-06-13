(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [2488], {
        zhxR: (t, e, r) => {
            "use strict";
            r.d(e, {
                P: () => a
            });
            var n = r("445e");
            const a = t => {
                const e = (0, n.f)(t);
                return e ? .contractVal
            }
        },
        HmBK: (t, e, r) => {
            "use strict";
            r.d(e, {
                o: () => a
            });
            var n = r("5+ty");
            const a = t => {
                const e = (0, n.Y)();
                return e[t] ? .quoteAsset
            }
        },
        "9jLk": (t, e, r) => {
            "use strict";
            r.d(e, {
                E: () => s
            });
            var n = r("tM9B"),
                a = r("O3g0");

            function i(t, e = 0, r) {
                if (null == t || "undefined" === typeof t || Number.isNaN(t)) return a.Vs;
                const i = (t => {
                        switch (t) {
                            case "floor":
                            default:
                                return 3;
                            case "halfUp":
                                return 4;
                            case "ceil":
                                return 2
                        }
                    })(r),
                    s = (0, n.jL)(t, e, i);
                return (0, n.ZV)(s, e)
            }
            const s = ({
                gridInitialValue: t,
                initialLeverage: e,
                marginPrecision: r,
                totalAdjustmentAmount: s
            }) => {
                const u = (0, n.k3)(Number(t), Number(e)).toNumber(),
                    l = (0, n.tY)(u, Number(s || 0)).toNumber();
                return t && e ? {
                    initialMargin: u,
                    initialMarginDisplay: i(u, r),
                    investedMargin: l,
                    investedMarginDisplay: i(l, r)
                } : {
                    initialMargin: 0,
                    initialMarginDisplay: a.Vs,
                    investedMargin: 0,
                    investedMarginDisplay: a.Vs
                }
            }
        },
        "/vLj": (t, e, r) => {
            "use strict";
            r.d(e, {
                B: () => i
            });
            var n = r("uJ9s");
            const a = t => Object.keys(t).reduce(((e, r) => {
                    const n = t[Number(r)];
                    return n && e.push(n), e
                }), []),
                i = (t, e) => {
                    const r = (0, n.X)(t, {
                        select: a,
                        ...e || {}
                    });
                    return { ...r,
                        data: r ? .data || []
                    }
                }
        },
        uJ9s: (t, e, r) => {
            "use strict";
            r.d(e, {
                X: () => b
            });
            var n = r("4hgs"),
                a = r("oSg3"),
                i = r("MNDJ"),
                s = r("DTvD"),
                u = r("A4nT"),
                l = r("fc5I"),
                o = r.n(l),
                c = r("6+EK"),
                d = r("eR+e");
            const f = (0, c.k)({
                    queryKey: u.Bz.OPEN_GRIDS_V2,
                    subscribeToStreamFn: ({
                        stream: t,
                        isCM: e,
                        queryClient: r,
                        userListenKey: n
                    }) => "getGridStream" in t && n ? .listenKey ? t.getStrategyGridUpdateStream([n ? .listenKey]).subscribe((({
                        grid: t
                    }) => {
                        const n = t ? t.strategyId : void 0,
                            a = t ? {
                                gridProfit: Number(t.gridProfit),
                                matchedPnl: Number(t.matchedPnl),
                                strategyStatus: t.strategyStatus,
                                symbol: t.symbol,
                                unmatchedAvgPrice: Number(t.unmatchedAvgPrice),
                                unmatchedFee: Number(t.unmatchedFee),
                                unmatchedQty: Number(t.unmatchedQty),
                                updateTime: Number(t.updateTime)
                            } : void 0;
                        r.setQueryData(u.Bz.OPEN_GRIDS_V2(e), (t => {
                            const e = n ? t ? .[n] : void 0;
                            return n && t && e && a ? { ...t,
                                [n]: { ...e,
                                    ...a
                                }
                            } : t
                        }))
                    })) : o()
                }),
                h = (0, d.y)({
                    queryKey: u.Bz.OPEN_GRIDS_V2,
                    subscribeToStreamFn: ({
                        stream: t,
                        isCM: e,
                        queryClient: r
                    }) => "getGridStream" in t ? t.getStrategyStream().subscribe((({
                        streategy: t
                    }) => {
                        const {
                            strategyId: n,
                            strategyStatus: a
                        } = t || {};
                        r.setQueryData(u.Bz.OPEN_GRIDS_V2(e), (t => t && n && a ? "WORKING" === a && t[n] ? { ...t,
                            [n]: { ...t[n],
                                strategyStatus: a
                            }
                        } : (r.invalidateQueries(u.Bz.OPEN_GRIDS_V2(e)), r.invalidateQueries(u.Bz.STRATEGY_USER_LISTEN_KEY(e)), t) : t))
                    })) : o()
                });
            var v = r("YxIV"),
                m = r("v76/"),
                g = r("21Yo"),
                p = r("+rZ2");
            const b = (t, e = {}) => {
                const {
                    isCM: r
                } = t, l = (0, v.OE)(), o = (0, m.n)(), {
                    isExistFutureAccount: c
                } = (0, g.Py)(), d = (0, n.useQueryClient)(), {
                    enabled: b = !0
                } = e, y = Boolean(o) && Boolean(c) && b && void 0 !== r, {
                    data: k = []
                } = (0, p.b)({
                    isCM: r
                });
                return (0, s.useEffect)((function() {
                    y && k ? .length && f({
                        getSDK: l,
                        queryClient: d
                    })
                }), [y, k, l, d]), (0, s.useEffect)((function() {
                    y && h({
                        getSDK: l,
                        queryClient: d
                    })
                }), [y, d, l]), (0, n.useQuery)(u.Bz.OPEN_GRIDS_V2(Boolean(r)), (async () => {
                    const t = (t => t ? a.yk : i.m2)(Boolean(r)),
                        {
                            data: e
                        } = await t();
                    return e.reduce(((t, e) => {
                        const {
                            strategyId: r,
                            gridProfit: n,
                            matchedPnl: a,
                            unmatchedAvgPrice: i,
                            unmatchedFee: s,
                            unmatchedQty: u,
                            updateTime: l,
                            strategyStatus: o,
                            fundingFee: c
                        } = e || {};
                        return r && (t[Number(r)] = { ...e,
                            strategyStatus: o,
                            gridProfit: Number(n),
                            matchedPnl: Number(a),
                            unmatchedAvgPrice: Number(i),
                            unmatchedFee: Number(s),
                            unmatchedQty: Number(u),
                            updateTime: Number(l),
                            fundingFee: Number(c)
                        }), t
                    }), {})
                }), { ...e || {},
                    refetchOnMount: !1,
                    enabled: y
                })
            }
        },
        dObz: (t, e, r) => {
            "use strict";
            r.d(e, {
                Q: () => x
            });
            var n = r("DTvD"),
                a = r("4hgs"),
                i = r("S+0I"),
                s = r("66mo"),
                u = r.n(s),
                l = r("5nld"),
                o = function() {
                    var t = (0, i._)(u().mark((function t(e) {
                        var r;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, l.bE)("/bapi/futures/v1/private/future/strategy/user-data/query-user-leverages", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                c = (function() {
                    var t = (0, i._)(u().mark((function t(e) {
                        var r;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, l.bE)("/bapi/futures/v1/private/future/strategy/user-data/adjust-leverage", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), r("Hf/4")),
                d = r("A4nT"),
                f = r("v76/"),
                h = r("21Yo"),
                v = r("YxIV"),
                m = r("+rZ2"),
                g = r("fc5I"),
                p = r.n(g);
            const b = (0, r("6+EK").k)({
                    queryKey: d.Bz.STRATEGY_LEVERAGE,
                    subscribeToStreamFn: ({
                        stream: t,
                        isCM: e,
                        queryClient: r,
                        userListenKey: n
                    }) => t && "getStrategyAccountConfigStream" in t && n ? .listenKey ? t.getStrategyAccountConfigStream([n ? .listenKey]).subscribe((t => {
                        const a = t.leverage ? .symbol,
                            i = n ? .uid;
                        a && i && r.setQueryData(d.Bz.STRATEGY_LEVERAGE(e), ((e = {}) => ({ ...e,
                            [i]: { ...e[i] || {},
                                [a]: t.leverage ? .leverage
                            }
                        })))
                    })) : p()
                }),
                y = (t, {
                    select: e,
                    enabled: r = !0,
                    ...i
                } = {}) => {
                    const s = (0, f.n)(),
                        {
                            isExistFutureAccount: u
                        } = (0, h.Py)(),
                        l = r && "boolean" === typeof t && Boolean(s) && Boolean(u),
                        g = (0, v.OE)(),
                        p = (0, a.useQueryClient)(),
                        {
                            data: y = []
                        } = (0, m.b)({
                            isCM: t
                        }),
                        k = (0, c.A)(y.length);
                    return (0, n.useEffect)((() => {
                        r && "undefined" !== typeof k && k !== y.length && p.invalidateQueries(d.Bz.STRATEGY_LEVERAGE(Boolean(t)))
                    }), [r, k, y.length, t]), (0, n.useEffect)((function() {
                        r && y ? .length && b({
                            getSDK: g,
                            queryClient: p
                        })
                    }), [r, y, g, p]), (0, a.useQuery)(d.Bz.STRATEGY_LEVERAGE(t), (async () => {
                        const e = await o({
                            strategyType: t ? "DELIVERY_GRID" : "FUTURE_GRID"
                        });
                        return e ? .success ? (async t => {
                            const e = t ? .data ? .strategyUserIdLeverageMap;
                            return e ? Object.keys(e).reduce(((t, r) => (e[r].forEach((e => {
                                t[r] || (t[r] = {}), t[r][e.symbol] = e.leverage
                            })), t)), {}) : {}
                        })(e) : {}
                    }), {
                        select: e,
                        enabled: l,
                        ...i || {},
                        staleTime: 1 / 0
                    })
                },
                k = t => e => e ? .[t],
                x = (t, e) => y(t, {
                    select: k(e)
                })
        },
        UJEW: (t, e, r) => {
            "use strict";
            r.d(e, {
                f: () => _
            });
            var n = r("DTvD"),
                a = r("4hgs"),
                i = r("S+0I"),
                s = r("66mo"),
                u = r.n(s),
                l = r("5nld"),
                o = function() {
                    var t = (0, i._)(u().mark((function t(e) {
                        var r;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, l.bE)("/bapi/futures/v1/private/future/strategy/user-data/get-future-user-positions", e || {});
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var t = (0, i._)(u().mark((function t(e) {
                        var r;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, l.bE)("/bapi/futures/v1/private/future/strategy/user-data/get-delivery-user-positions", e || {});
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                d = (function() {
                    var t = (0, i._)(u().mark((function t(e) {
                        var r;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, l.bE)("/bapi/futures/v1/private/delivery/grid/close-grid-position", e || {});
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, i._)(u().mark((function t(e) {
                        var r;
                        return u().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, l.bE)("/bapi/futures/v1/private/future/grid/close-grid-position", e || {});
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: null,
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), r("Hf/4")),
                f = r("A4nT"),
                h = r("YxIV"),
                v = r("21Yo"),
                m = r("v76/"),
                g = r("+rZ2"),
                p = r("fc5I"),
                b = r.n(p),
                y = r("6+EK");
            const k = (0, y.k)({
                    queryKey: f.Bz.TRADING_BOT_OPEN_ORDERS,
                    subscribeToStreamFn: ({
                        stream: t,
                        isCM: e,
                        queryClient: r,
                        userListenKey: n
                    }) => t && "getStrategyGridOrderTradeUpdateStream" in t && n ? .listenKey ? t.getStrategyGridOrderTradeUpdateStream([n ? .listenKey]).subscribe((({
                        order: t
                    }) => {
                        const {
                            strategyId: n,
                            symbol: a
                        } = t, i = r.getQueryData(f.Bz.TRADING_BOT_OPEN_ORDERS(e)), s = i ? .[n] ? .[0] ? .strategyUserId;
                        s && r.setQueryData(f.Bz.QUERY_USER_STRATEGY_POSITION(e), (e => {
                            const r = "undefined" !== typeof t.askNotional,
                                n = "undefined" !== typeof t.bidNotional,
                                i = r || n;
                            if (s && a && e ? .[s] ? .[a] && i) {
                                const i = e[s][a].askNotional,
                                    u = e[s][a].bidNotional,
                                    l = r ? t.askNotional : i,
                                    o = n ? t.bidNotional : u;
                                return { ...e,
                                    [s]: { ...e[s],
                                        [a]: { ...e[s][a],
                                            askNotional: l,
                                            bidNotional: o
                                        }
                                    }
                                }
                            }
                            return e
                        }))
                    })) : b()
                }),
                x = (0, y.k)({
                    queryKey: f.Bz.QUERY_USER_STRATEGY_POSITION,
                    subscribeToStreamFn: ({
                        stream: t,
                        isCM: e,
                        queryClient: r,
                        userListenKey: n
                    }) => t && "getStrategyShadowAccountStream" in t && n ? .listenKey ? t.getStrategyShadowAccountStream([n ? .listenKey]).subscribe((({
                        positions: t
                    }) => {
                        r.setQueryData(f.Bz.QUERY_USER_STRATEGY_POSITION(e), (e => {
                            const r = t.filter((t => "BOTH" === t.positionSide)),
                                a = n ? .uid;
                            if (r.length > 0 && a && e ? .[a]) {
                                const t = r.length > 0 ? r.reduce(((t, e) => {
                                    const {
                                        marginType: r,
                                        ...n
                                    } = e;
                                    return { ...t,
                                        [n.symbol]: { ...t ? .[n.symbol],
                                            ...n,
                                            isolated : "isolated" === r
                                        }
                                    }
                                }), e ? .[a]) : void 0;
                                return { ...e,
                                    [Number(a)]: t
                                }
                            }
                            return e
                        }))
                    })) : b()
                }),
                _ = (t, e = {}) => {
                    const {
                        isCM: r
                    } = t, {
                        enabled: i = !0
                    } = e, s = (0, h.OE)(), {
                        data: u = []
                    } = (0, g.b)({
                        isCM: r
                    }), l = (0, d.A)(u.length), {
                        isExistFutureAccount: p
                    } = (0, v.Py)(), b = (0, a.useQueryClient)(), y = (0, m.n)(), _ = Boolean(y) && Boolean(p) && i && "boolean" === typeof r;
                    return (0, n.useEffect)((() => {
                        _ && "undefined" !== typeof l && l !== u.length && b.invalidateQueries(f.Bz.QUERY_USER_STRATEGY_POSITION(r))
                    }), [_, b, l, u.length, r]), (0, n.useEffect)((function() {
                        _ && u ? .length && k({
                            getSDK: s,
                            queryClient: b
                        })
                    }), [_, u, s, b]), (0, n.useEffect)((function() {
                        _ && u ? .length && x({
                            getSDK: s,
                            queryClient: b
                        })
                    }), [_, b, s, u, r]), (0, a.useQuery)(f.Bz.QUERY_USER_STRATEGY_POSITION(r), (async () => {
                        const t = r ? c : o,
                            {
                                data: e,
                                success: n
                            } = await t();
                        return n ? (a = e, Object.keys(a).reduce(((t, e) => (a[e].forEach((r => {
                            t[e] || (t[e] = {}), "BOTH" === r.positionSide && (t[e][r.symbol] = { ...r,
                                strategyUserId: Number(e),
                                positionSize: Number(r.positionAmount)
                            })
                        })), t)), {})) : {};
                        var a
                    }), {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        ...e || {},
                        enabled: _
                    })
                }
        },
        "+rZ2": (t, e, r) => {
            "use strict";
            r.d(e, {
                b: () => o
            });
            var n = r("4hgs"),
                a = r("oSg3"),
                i = r("UiLJ"),
                s = r("A4nT"),
                u = r("v76/"),
                l = r("21Yo");
            const o = (t, e = {}) => {
                const {
                    isCM: r
                } = t, o = (0, u.n)(), {
                    isExistFutureAccount: c
                } = (0, l.Py)(), {
                    enabled: d = !0
                } = e, f = Boolean(o) && Boolean(c) && d && "boolean" === typeof r;
                return (0, n.useQuery)(s.Bz.STRATEGY_USER_LISTEN_KEY(r), (async () => {
                    const t = (t => t ? a.ss : i.Ph)(r),
                        {
                            data: e
                        } = await t();
                    return (t => t ? .userListenKeyRets || [])(e)
                }), { ...e || {},
                    enabled: f,
                    staleTime: 1 / 0
                })
            }
        },
        OU3o: (t, e, r) => {
            "use strict";
            r.d(e, {
                w: () => a
            });
            var n = r("zuny");
            const a = (t, e) => {
                const {
                    isCM: r
                } = t;
                return (0, n._)(r, e)
            }
        },
        zuny: (t, e, r) => {
            "use strict";
            r.d(e, {
                _: () => o
            });
            var n = r("DTvD"),
                a = r("4hgs"),
                i = r("vuDY"),
                s = r("A4nT"),
                u = r("YxIV");
            const l = (0, r("eR+e").y)({
                    queryKey: s.Bz.QUERY_24HR_TICKER,
                    subscribeToStreamFn: ({
                        isCM: t,
                        stream: e,
                        queryClient: r
                    }) => e.getStreamTickers().subscribe((e => {
                        r.setQueryData(s.Bz.QUERY_24HR_TICKER(t), (t => t && e ? { ...t,
                            ...e
                        } : t))
                    }))
                }),
                o = (t, {
                    select: e,
                    ...r
                } = {}) => {
                    const o = "boolean" === typeof t,
                        c = (0, a.useQueryClient)(),
                        d = (0, u.OE)();
                    (0, n.useEffect)((function() {
                        o && l({
                            getSDK: d,
                            queryClient: c
                        })
                    }), [c, o, d]);
                    const f = t ? i.Gk : i.vX,
                        h = s.Bz.QUERY_24HR_TICKER(Boolean(t));
                    return (0, a.useQuery)(h, (() => f().then((t => t.reduce(((t, e) => e.symbol ? { ...t,
                        [e.symbol]: {
                            eventTime: Number(e.eventTime),
                            highPrice: Number(e.highPrice),
                            lastPrice: Number(e.lastPrice),
                            lowPrice: Number(e.lowPrice),
                            openPrice: Number(e.openPrice),
                            quoteVolume: Number(e.quoteVolume),
                            symbol: e.symbol,
                            volume: Number(e.volume)
                        }
                    } : t), {})))), {
                        select: e,
                        refetchOnMount: !1,
                        enabled: o,
                        ...r
                    })
                }
        },
        "VLe/": (t, e, r) => {
            "use strict";
            r.d(e, {
                b: () => n
            });
            const n = (t, e, r) => (...n) => {
                try {
                    return t(...n)
                } catch (a) {
                    return console.log(`abacus "${r}" compute error`, ...n), console.log(a), e
                }
            }
        },
        "6+EK": (t, e, r) => {
            "use strict";
            r.d(e, {
                k: () => a
            });
            var n = r("A4nT");
            const a = ({
                queryKey: t,
                subscribeToStreamFn: e
            }) => {
                const r = [{
                    CM: void 0,
                    UM: void 0
                }];
                let a = !1;
                return ({
                    getSDK: i,
                    queryClient: s
                }) => {
                    if (a) return;
                    a = !0;
                    s.getQueryCache().subscribe((a => {
                        if (!a) return;
                        const {
                            query: u,
                            type: l
                        } = a;
                        if ("queryRemoved" === l || "removed" === l) return;
                        const o = u.queryKey[1],
                            c = "CM" === o,
                            d = t(c),
                            f = u.queryKey[0] === d[0],
                            h = n.Bz.STRATEGY_USER_LISTEN_KEY(c),
                            v = u.queryKey[0] === h[0];
                        if (!f && !v) return;
                        const m = i({
                                isCM: c
                            }),
                            g = "observerRemoved" === l;
                        if (g) {
                            if (g && 0 === u.getObserversCount() && r[o]) {
                                try {
                                    Object.keys(r[o]).forEach((t => {
                                        const e = r[o][t];
                                        "function" === typeof e && e()
                                    }))
                                } catch (p) {
                                    console.error(p)
                                }
                                r[o] = void 0, s.invalidateQueries(d)
                            }
                        } else {
                            const t = s.getQueryData(h);
                            t ? .length && t.forEach((t => {
                                const n = t ? .listenKey;
                                r[o] || (r[o] = {}), r[o][n] || (r[o][n] = e({
                                    isCM: c,
                                    stream: m,
                                    queryClient: s,
                                    userListenKey: t
                                }))
                            }))
                        }
                    }))
                }
            }
        },
        "/C9T": (t, e, r) => {
            "use strict";
            r.d(e, {
                N: () => n
            });
            const n = ({
                positionSize: t = 0,
                markPrice: e = 0
            }, {
                isDelivery: r = !1,
                contractVal: n = 0
            }) => {
                const a = Number(e);
                return Math.abs(1 * t * (r ? n * (a ? 1 / a : 0) : a))
            }
        },
        AkRh: (t, e, r) => {
            "use strict";
            r.d(e, {
                j: () => a
            });
            var n = r("trXm");
            const a = (t, e) => {
                const {
                    t: r
                } = (0, n.Y_)();
                return t && e ? r("common-trailing", "Trailing") : t && !e ? r("trailing-up", "Trailing Up") : !t && e ? r("trailing-down", "Trailing Down") : ""
            }
        },
        X6af: (t, e, r) => {
            "use strict";
            r.d(e, {
                DG: () => o,
                HL: () => l,
                Ot: () => u
            });
            var n = r("Bdbj");
            const a = "NEUTRAL",
                i = "LONG",
                s = "SHORT",
                u = t => {
                    switch (t) {
                        case a:
                            return 1;
                        case i:
                            return 2;
                        case s:
                            return 3;
                        default:
                            return 1
                    }
                };
            const l = t => {
                    switch (t) {
                        case 1:
                        default:
                            return "spotGrid";
                        case 2:
                        case 3:
                            return "futuresGrid"
                    }
                },
                o = t => {
                    switch (t) {
                        case 1:
                        default:
                            return n.t3.NEUTRAL;
                        case 2:
                            return n.t3.LONG;
                        case 3:
                            return n.t3.SHORT
                    }
                }
        },
        MNDJ: (t, e, r) => {
            "use strict";
            r.d(e, {
                aW: () => d,
                k$: () => c,
                L6: () => h,
                tn: () => f,
                m2: () => o
            });
            var n = r("S+0I"),
                a = r("66mo"),
                i = r.n(a),
                s = r("5nld"),
                u = r("XqCI"),
                l = (function() {
                    var t = (0, n._)(i().mark((function t() {
                        var e;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/public/future/common/twap/notional-limit");
                                case 4:
                                    e = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), e = {
                                        success: !1,
                                        data: ""
                                    };
                                case 10:
                                    return t.abrupt("return", e);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/future/twap/place-twap", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t() {
                        var e;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/private/future/twap/query-open-twaps");
                                case 4:
                                    e = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), e = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", e);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()),
                o = (function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/future/twap/query-twap-history", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/future/twap/close-twap", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: null,
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/private/future/twap/query-twap-detail?".concat((0, u.E2)(e)));
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/future/twap/query-twap-items", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t() {
                        var e, r, n = arguments;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = n.length > 0 && void 0 !== n[0] ? n[0] : {}, t.prev = 2, t.next = 5, (0, s.Jt)("/bapi/futures/v1/private/future/grid/query-open-grids?".concat((0, u.E2)(e)));
                                case 5:
                                    r = t.sent, t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(2), r = {
                                        success: !1,
                                        data: []
                                    };
                                case 11:
                                    return t.abrupt("return", r);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v2/private/future/grid/query-open-grids", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: []
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()),
                c = function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r, n, a, u, o = arguments;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = !(o.length > 1 && void 0 !== o[1]) || o[1], t.prev = 2, a = !1, !r) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7, l();
                                case 7:
                                    u = t.sent.data, a = u.some((function(t) {
                                        return t.symbol === e.symbol
                                    }));
                                case 9:
                                    if (!a) {
                                        t.next = 13;
                                        break
                                    }
                                    n = {
                                        success: !1,
                                        data: {},
                                        code: "symbolInTwap"
                                    }, t.next = 16;
                                    break;
                                case 13:
                                    return t.next = 15, (0, s.bE)("/bapi/futures/v2/private/future/grid/place-grid", e);
                                case 15:
                                    n = t.sent;
                                case 16:
                                    t.next = 21;
                                    break;
                                case 18:
                                    t.prev = 18, t.t0 = t.catch(2), n = {
                                        success: !1,
                                        data: {},
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 21:
                                    return t.abrupt("return", n);
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 18]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v2/private/delivery/grid/place-grid", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                f = (function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/future/grid/place-grid", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/public/future/common/grid/all-recommending-params?".concat((0, u.E2)(e)));
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: []
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()),
                h = function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/public/delivery/grid/all-recommending-params?".concat((0, u.E2)(e)));
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: []
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
        },
        oSg3: (t, e, r) => {
            "use strict";
            r.d(e, {
                ss: () => c,
                uo: () => o,
                yk: () => l
            });
            var n = r("S+0I"),
                a = r("66mo"),
                i = r.n(a),
                s = r("5nld"),
                u = r("XqCI"),
                l = (function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r, n;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e ? "?".concat((0, u.E2)(e)) : "", t.prev = 2, t.next = 5, (0, s.Jt)("/bapi/futures/v1/private/delivery/grid/query-open-grids".concat(n));
                                case 5:
                                    r = t.sent, t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(2), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 11:
                                    return t.abrupt("return", r);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 8]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v2/private/delivery/grid/query-open-grids", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()),
                o = (function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/private/delivery/grid/query-grid-detail?".concat((0, u.E2)(e)));
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.Jt)("/bapi/futures/v1/private/delivery/grid/query-matched-info?".concat((0, u.E2)(e)));
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/delivery/grid/place-grid", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/delivery/grid/update-grid", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()),
                c = (function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/future/grid/close-grid", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/delivery/grid/close-grid", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/delivery/grid/query-grid-history", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v2/private/delivery/grid/query-grid-history", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t(e) {
                        var r;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/delivery/grid/query-grid-matched-items", e);
                                case 4:
                                    r = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r = {
                                        success: !1,
                                        data: [],
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n._)(i().mark((function t() {
                        var e;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 1, t.next = 4, (0, s.bE)("/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys");
                                case 4:
                                    e = t.sent, t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), e = {
                                        success: !1,
                                        data: {},
                                        message: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.message,
                                        code: null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.status
                                    };
                                case 10:
                                    return t.abrupt("return", e);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }())
        },
        "P/En": (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => Mn
            });
            var n = r("mXdx"),
                a = r("DTvD"),
                i = r.n(a),
                s = r("1lvF"),
                u = r("wIZF"),
                l = r("TQvm");
            const o = function(t) {
                return i().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, t), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.8 3h-3.6v2.027c-.66.17-1.285.431-1.858.77L6.91 4.363 4.363 6.91l1.434 1.433a7.157 7.157 0 00-.77 1.858H3v3.6h2.027c.17.66.431 1.285.77 1.858L4.363 17.09l2.546 2.546 1.433-1.434c.573.339 1.197.6 1.858.77V21h3.6v-2.027a7.157 7.157 0 001.858-.77l1.433 1.434 2.546-2.546-1.434-1.434a7.16 7.16 0 00.77-1.857H21v-3.6h-2.027a7.158 7.158 0 00-.77-1.858l1.434-1.433-2.546-2.546-1.434 1.434a7.156 7.156 0 00-1.857-.77V3zm-4.5 9a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z",
                    fill: "currentColor"
                }))
            };
            var c = r("UuPx"),
                d = r("f1nL"),
                f = r("WLZf"),
                h = r("Gii1"),
                v = r("hrAD"),
                m = r("qoEP"),
                g = r("xqbL"),
                p = r.n(g),
                b = r("jor4"),
                y = r("hxBv"),
                k = r("PaVQ"),
                x = r("5JIq"),
                _ = r("Cr5V"),
                S = r("b6CO"),
                N = r("FHqy");
            const A = function(t) {
                return i().createElement(N.A, (0, S._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, t), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z",
                    fill: "currentColor"
                }))
            };
            const I = function(t) {
                return i().createElement(N.A, (0, S._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, t), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 11.824l-3.888 3.889-1.768-1.768 5.657-5.657 1.768 1.768 3.889 3.89L16 15.712l-3.89-3.89z",
                    fill: "currentColor"
                }))
            };
            var q = r("gYIm"),
                P = r("KPPo"),
                w = r("xs7W"),
                j = "Spot_Grid",
                R = "Futures_Grid",
                M = r("cFMj"),
                C = r("y2tO"),
                T = r("sQCs"),
                E = r("4hgs"),
                L = r("8zyX"),
                O = r("aaF1"),
                F = r("BMee");
            const z = t => {
                    const e = (0, F.n)(),
                        {
                            enabled: r = !0
                        } = t || {},
                        n = Boolean(r) && Boolean(e),
                        {
                            refetch: i,
                            ...s
                        } = (0, E.useQuery)(O.B.QUERY_SPOT_GRID_RUNNING, (async () => (async () => {
                            const t = await (0, L.S6)(),
                                {
                                    success: e,
                                    data: r,
                                    message: n
                                } = t;
                            if (e) return r;
                            throw new Error(n || "queryOpenSpotGridsV2 failed")
                        })().then((t => (t => t.openGrids.reduce(((t, e) => {
                            const {
                                strategyId: r
                            } = e;
                            return t[r] = { ...e
                            }, t
                        }), {}))(t)))), { ...t || {},
                            enabled: n,
                            refetchOnMount: !1
                        });
                    return {
                        refetch: (0, a.useCallback)((() => {
                            n && i()
                        }), [i, n]),
                        ...s
                    }
                },
                B = t => Object.values(t);
            var V = function(t) {
                    var e = (0, f.XY)().t;
                    return (0, a.useMemo)((function() {
                        return {
                            rankSettingColumns: t ? {
                                market: e("landingPage-rankingSetting-market", {
                                    defaultValue: "Market"
                                }),
                                ROI: e("landingPage-rankingSetting-ROI", {
                                    defaultValue: "ROI"
                                }),
                                PNL: e("landingPage-rankingSetting-PNL", {
                                    defaultValue: "PNL"
                                }),
                                runningTime: e("landingPage-rankingSetting-runningTime", {
                                    defaultValue: "RunningTime"
                                })
                            } : {
                                market: e("landingPage-rankingSetting-market", {
                                    defaultValue: "Market"
                                }),
                                ROI: e("landingPage-rankingSetting-ROI", {
                                    defaultValue: "ROI"
                                }),
                                PNL: e("landingPage-rankingSetting-PNL", {
                                    defaultValue: "PNL"
                                }),
                                runningTime: e("landingPage-rankingSetting-runningTime", {
                                    defaultValue: "RunningTime"
                                }),
                                action: e("Action", {
                                    defaultValue: "Action"
                                })
                            },
                            rankSettingColumnsOrderName: t ? ["market", "ROI", "PNL", "runningTime"] : ["market", "ROI", "PNL", "runningTime", "action"]
                        }
                    }), [t, e])
                },
                U = r("S+0I"),
                D = r("jbFV"),
                Y = r.n(D),
                K = r("Cadp"),
                G = r("/vLj"),
                H = r("hbgo"),
                Q = r("mkl1"),
                W = r("TajZ");
            const $ = function(t) {
                return i().createElement(l.A, (0, u.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, t), i().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.11 88c22.09 0 40-17.908 40-40 0-22.09-17.91-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm-3-36V32h6v20h-6zm0 12v-6h6v6h-6z",
                    fill: "#F0B90B"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M77.11 48c0 16.017-12.985 29-29 29-16.017 0-29-12.983-29-29 0-16.015 12.983-29 29-29 16.015 0 29 12.985 29 29zm-26-15v19h-6V33h6zm0 31v-6h-6v6h6z",
                    fill: "#F0B90B"
                }))
            };
            var X = r("bznE"),
                J = function(t) {
                    var e = t.onRefresh,
                        r = void 0 === e ? function() {} : e,
                        a = (0, f.XY)().getI18n;
                    return (0, n.jsxs)(b.A, {
                        className: "mt-[28px] flex-col items-center",
                        children: [(0, n.jsx)($, {
                            size: 48
                        }), (0, n.jsxs)(s.Ay, {
                            className: "typography-body3 text-PrimaryText",
                            children: [(0, n.jsx)(s.Ay, {
                                as: "span",
                                className: "mr-[4px]",
                                children: a("api-error-refresh-tip", {
                                    defaultValue: "API request failed. Data lost, please refresh the page."
                                })
                            }), (0, n.jsx)(X.A, {
                                sz: "tiny",
                                variant: "gray",
                                onClick: r,
                                children: a("refresh", {
                                    defaultValue: "Refresh"
                                })
                            })]
                        })]
                    })
                },
                Z = r("iKvg"),
                tt = r("p5Sb"),
                et = r("u/YI"),
                rt = r("8VP5"),
                nt = r("unte"),
                at = r("AkRh");
            const it = ({
                trailingUp: t,
                trailingDown: e,
                size: r = "small",
                className: a
            }) => {
                const i = (0, at.j)(t, e);
                return i ? (0, n.jsx)(nt.A, {
                    label: (0, n.jsx)("span", {
                        className: a,
                        children: i
                    }),
                    placement: "left",
                    size: r,
                    variant: "warn"
                }) : null
            };
            var st = r("EAni"),
                ut = r("Y/tq"),
                lt = r("/d8Z");
            const ot = t => Number(t) > 0 ? "+" : "";
            var ct = r("tM9B"),
                dt = r("iqmX");

            function ft(t, e = 0, r) {
                if (null == t || "undefined" === typeof t || Number.isNaN(Number(t))) return dt.Vs;
                const n = (t => {
                        switch (t) {
                            case "floor":
                            default:
                                return 3;
                            case "halfUp":
                                return 4;
                            case "ceil":
                                return 2;
                            case "down":
                                return 1
                        }
                    })(r),
                    a = (0, ct.jL)(t, e, n);
                return (0, ct.Xq)(a, e)
            }
            var ht = r("GH0r"),
                vt = r("w5K+"),
                mt = r("/unZ"),
                gt = r("sm4I");
            const pt = t => {
                const e = (0, mt.G)(t),
                    r = (0, vt.z)() ? .data;
                if (!r) return 8;
                const n = r ? .[t];
                let a = 8;
                if ("BUSD" !== n ? .quoteAsset && "USDT" !== n ? .quoteAsset) {
                    const t = r ? .[`${n?.quoteAsset}USDT`],
                        i = t ? .minStepSize || "0.00000001",
                        s = (0, gt.X)(Number(i));
                    a = Math.max(Number(e), Number(s))
                } else a = e;
                return Number.isNaN(a) ? 8 : a
            };
            var bt = r("xRXw");
            const yt = ({
                    initialValue: t,
                    quoteQty: e,
                    baseQty: r,
                    symbol: n,
                    strategyStatus: a,
                    historyTotalProfit: i,
                    trailing: s,
                    totalWithdrawAmount: u
                }) => {
                    const l = "NEW" === a,
                        o = "NEW" !== a && "WORKING" !== a,
                        c = pt(String(n)),
                        d = (({
                            symbol: t,
                            baseQty: e,
                            quoteQty: r,
                            isHistory: n
                        }) => {
                            const a = (0, bt.i)(t, {
                                listenUpdate: !n,
                                enabled: !n
                            });
                            return a ? (0, ct.tY)((0, ct.lw)(Number(a), e).toNumber(), r).toNumber() : NaN
                        })({
                            symbol: n,
                            baseQty: r,
                            quoteQty: e,
                            isHistory: o
                        }),
                        f = o ? Number(i) : (0, ct.Rd)(Number(d), t).toNumber();
                    if (l) return {
                        totalProfit: 0,
                        formatTotalProfit: ft(0, c, "floor"),
                        totalProfitRoe: 0,
                        formatTotalProfitRoe: `${ft(0,2,"floor")}%`
                    };
                    if (!t || !n || !(0, ht.k)(f) || !(0, ht.k)(d)) return {
                        totalProfit: NaN,
                        formatTotalProfit: dt.Vs,
                        totalProfitRoe: NaN,
                        formatTotalProfitRoe: dt.Vs
                    };
                    const h = Number.isNaN(f) ? 0 : f,
                        v = s || o ? h : (0, ct.tY)(h, Number(u)).toNumber(),
                        m = ft(v, c, "floor"),
                        g = (0, ct.k3)(v, t).toNumber();
                    return {
                        totalProfit: v,
                        formatTotalProfit: m,
                        totalProfitRoe: g,
                        formatTotalProfitRoe: `${ft(100*g,2,"floor")}%`
                    }
                },
                kt = (t, e, r = {
                    digit: 2,
                    withSymbol: !1,
                    allowNegative: !0,
                    fallback: "percentage",
                    roundingMode: 3
                }) => {
                    const n = Number(t) || 0,
                        a = Number(e) || 0,
                        {
                            digit: i = 2,
                            withSymbol: s = !1,
                            allowNegative: u = (!1).valueOf,
                            fallback: l = "percentage",
                            roundingMode: o
                        } = r,
                        c = s ? ((t, e) => t > 0 ? e > 0 ? "+" : "-" : t < 0 ? e > 0 ? "-" : "+" : "")(n, a) : "",
                        d = u ? n / a : Math.abs(n / a);
                    return 0 === a ? "percentage" === l ? `${(0).toFixed(i)}%` : "--" : `${c}${(0,ct.jL)(100*d,i,o)}%`
                };
            var xt = r("2h1e");
            const _t = {},
                St = ({
                    enabled: t = !0,
                    listenUpdate: e = !0
                }) => {
                    const r = (0, a.useRef)(void 0),
                        n = (0, a.useCallback)((t => e ? (r.current = void 0, t) : (r.current || (r.current = t), r.current)), [e]),
                        {
                            data: i,
                            isLoading: s,
                            isFetched: u
                        } = (0, xt.w)(t, n);
                    return {
                        data: i || _t,
                        isLoading: s,
                        isFetched: u
                    }
                };

            function Nt(t) {
                const {
                    data: {
                        buyPriceSum: e = "",
                        sellQtySum: r = "",
                        baseReversedFee: n = "",
                        quoteReversedFee: i = "",
                        gridQty: s = "",
                        initialValue: u = "",
                        symbol: l = "",
                        quoteAsset: o = ""
                    } = {}
                } = t, {
                    data: c
                } = St({
                    enabled: !0,
                    listenUpdate: !0
                }), d = pt(l), f = (0, a.useCallback)((t => (0, ct.jL)(t, d, 1)), [d]);
                if (!c ? .[l] ? .lastPrice) return {
                    unrealizedPNL: NaN,
                    formattedUnrealizedPNL: dt.Vs,
                    asset: o,
                    percent: dt.Vs
                };
                const h = f(u),
                    v = (({
                        buyPriceSum: t,
                        sellQtySum: e,
                        baseReversedFee: r,
                        quoteReversedFee: n,
                        gridQty: a,
                        lastPrice: i,
                        initialValue: s
                    }) => Number(s) ? (0, ct.lw)(t, a).plus((0, ct.lw)(e, i)).plus((0, ct.lw)(r, i)).plus(n).minus(s).toNumber() : 0)({
                        buyPriceSum: e,
                        sellQtySum: r,
                        baseReversedFee: n,
                        quoteReversedFee: i,
                        gridQty: s,
                        lastPrice: `${c?.[l]?.lastPrice}`,
                        initialValue: h
                    }),
                    m = Number.isNaN(v) ? 0 : v;
                return {
                    unrealizedPNL: m,
                    formattedUnrealizedPNL: (0, ct.Xq)(f(m), d),
                    asset: o,
                    percent: kt(f(m), f(u), {
                        roundingMode: 1
                    })
                }
            }

            function At(t) {
                const {
                    initialValue: e = "",
                    symbol: r = "",
                    gridProfit: n = "",
                    commissions: i = {},
                    quoteAsset: s = "",
                    trailingUp: u = !1
                } = t ? .data || {}, {
                    data: l
                } = St({
                    enabled: !0,
                    listenUpdate: !0
                }), o = pt(r), c = (0, a.useCallback)((t => (0, ct.jL)(t, o, 1)), [o]);
                let d = 0;
                if (l && Object.keys(l).length && !u) {
                    const t = (({
                        commissions: t,
                        quoteAsset: e,
                        lastPriceMap: r
                    }) => {
                        let n = 0;
                        return Math.abs(Number(t.total)) > 0 ? Number(t.total) : (Object.keys(t).forEach((a => {
                            if (a === e) n += Number(t[a]) || 0;
                            else if (r[`${a}${e}`.toUpperCase()] ? .lastPrice) n += (0, ct.lw)(r[`${a}${e}`.toUpperCase()] ? .lastPrice, t[a]).toNumber() || 0;
                            else if (r[`${e}${a}`.toUpperCase()] ? .lastPrice) n += (0, ct.k3)(t[a], r[`${e}${a}`.toUpperCase()] ? .lastPrice).toNumber() || 0;
                            else {
                                const i = (0, ct.k3)(r[`${a}USDT`.toUpperCase()] ? .lastPrice, r[`${e}USDT`.toUpperCase()] ? .lastPrice);
                                n += (0, ct.lw)(i, t[a]).toNumber() || 0
                            }
                        })), n)
                    })({
                        commissions: i,
                        quoteAsset: s,
                        lastPriceMap: l
                    });
                    d = Number(n) - Number(t)
                } else d = Number(n);
                const f = Number.isNaN(d) ? 0 : d;
                return {
                    gridProfit: f,
                    formattedGridProfit: (0, ct.Xq)(c(f), o),
                    asset: s,
                    percent: kt(c(f), c(e), {
                        roundingMode: 1
                    })
                }
            }

            function It(t) {
                const {
                    data: {
                        initialValue: e = "",
                        symbol: r = "",
                        quoteAsset: n = ""
                    } = {}
                } = t, {
                    unrealizedPNL: i
                } = Nt(t), {
                    gridProfit: s
                } = At(t), u = pt(r), l = (0, a.useCallback)((t => (0, ct.jL)(t, u, 1)), [u]);
                if (!(0, ht.k)(i) || !(0, ht.k)(s)) return {
                    totalProfit: NaN,
                    formattedTotalProfit: dt.Vs,
                    asset: n,
                    percent: dt.Vs
                };
                const o = (0, ct.tY)(l(Number(s)), l(Number(i))).toNumber(),
                    c = Number.isNaN(o) ? 0 : l(o),
                    d = (0, ct.Xq)(c, u),
                    f = (0, ct.k3)(c, l(e)).toNumber(),
                    h = `${ft(100*f,2,"floor")}%`;
                return {
                    totalProfit: c,
                    formattedTotalProfit: d,
                    asset: n,
                    percent: h,
                    totalProfitRoe: f,
                    formatTotalProfitRoe: h
                }
            }

            function qt(t) {
                var e = t.strategy,
                    r = t.onRoiChange,
                    i = e || {},
                    u = i.baseQty,
                    l = i.quoteQty,
                    o = i.symbol,
                    c = void 0 === o ? "" : o,
                    d = i.initialValue,
                    f = i.strategyStatus,
                    h = i.isSubAccount,
                    v = i.trailingUp,
                    m = i.totalWithdrawAmount,
                    g = yt({
                        initialValue: d,
                        baseQty: Number(u),
                        quoteQty: Number(l),
                        symbol: c,
                        strategyStatus: f,
                        historyTotalProfit: "",
                        trailing: v,
                        totalWithdrawAmount: m
                    }),
                    b = g.totalProfitRoe,
                    y = g.formatTotalProfitRoe,
                    k = It({
                        data: e
                    }),
                    x = k.totalProfitRoe,
                    _ = k.formatTotalProfitRoe,
                    S = h ? b : x,
                    N = h ? y : _,
                    A = (0, lt.A)(S, "text-PrimaryText", !0),
                    I = ot(S),
                    q = S ? Number(S.toFixed(4)) : 0,
                    P = e.strategyId;
                return (0, a.useEffect)((function() {
                    r(P, q)
                }), [P, q, r]), (0, n.jsx)(s.Ay, {
                    className: p()("typography-subtitle3", A),
                    children: "".concat(I).concat(N)
                })
            }

            function Pt(t) {
                var e = t.strategy,
                    r = e || {},
                    a = r.baseQty,
                    i = r.quoteQty,
                    u = r.symbol,
                    l = void 0 === u ? "" : u,
                    o = r.initialValue,
                    c = r.strategyStatus,
                    d = r.isSubAccount,
                    f = r.quoteAsset,
                    h = r.trailingUp,
                    v = r.totalWithdrawAmount,
                    m = yt({
                        initialValue: o,
                        baseQty: Number(a),
                        quoteQty: Number(i),
                        symbol: l,
                        strategyStatus: c,
                        historyTotalProfit: "",
                        trailing: h,
                        totalWithdrawAmount: v
                    }),
                    g = m.formatTotalProfit,
                    b = m.totalProfit,
                    y = It({
                        data: e
                    }),
                    k = y.formattedTotalProfit,
                    x = y.totalProfit,
                    _ = d ? b : x,
                    S = d ? g : k,
                    N = (0, lt.A)(Number(_), "text-PrimaryText", !0),
                    A = ot(_),
                    I = "".concat(A).concat(S, " ").concat(f);
                return (0, n.jsx)(s.Ay, {
                    className: p()("typography-subtitle3", N),
                    children: I
                })
            }
            var wt = function(t, e) {
                    var r = (0, h.HH)().t,
                        i = (0, et.L)().data,
                        u = function() {
                            var t = (0, a.useState)(!1),
                                e = t[0],
                                r = t[1],
                                n = (0, E.useQueryClient)(),
                                i = (0, ut.A)().enqueueNotification,
                                s = (0, f.XY)().t,
                                u = (0, a.useCallback)(function() {
                                    var t = (0, U._)(Y().mark((function t(e, a, u, l) {
                                        var o, c, d, f, h;
                                        return Y().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return o = e.triggerPrice, c = e.cos, d = e.cps, f = e.stopLowerLimit, h = e.stopUpperLimit, r(!0), t.next = 4, (0, L.KO)((0, v._)({
                                                        symbol: a,
                                                        strategyId: u,
                                                        cos: c,
                                                        cps: d,
                                                        sharing: l
                                                    }, Number(o) ? {
                                                        triggerPrice: Number(o)
                                                    } : {}, Number(f) ? {
                                                        stopLowerLimit: Number(f)
                                                    } : {}, Number(h) ? {
                                                        stopUpperLimit: Number(h)
                                                    } : {}));
                                                case 4:
                                                    t.sent.success && (i(s("Update Grid Succeed!", {
                                                        defaultValue: "Update Grid Succeed!"
                                                    }), {
                                                        variant: "success"
                                                    }), n.invalidateQueries(O.B.QUERY_SPOT_GRID_RUNNING)), r(!1);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e, r, n, a) {
                                        return t.apply(this, arguments)
                                    }
                                }(), [i, n, s]);
                            return {
                                updateSpotGridCallBack: u,
                                isSubmitting: e
                            }
                        }(),
                        l = u.updateSpotGridCallBack,
                        o = u.isSubmitting,
                        c = (0, rt.m)().data,
                        d = void 0 === c ? [] : c,
                        g = (0, a.useState)({}),
                        p = g[0],
                        b = g[1],
                        y = (0, a.useCallback)((function(t, e) {
                            b((function(r) {
                                return (0, m._)((0, v._)({}, r), (0, Z._)({}, t, e))
                            }))
                        }), []);
                    return (0, a.useMemo)((function() {
                        if (!t) return null;
                        var a = t.filter((function(t) {
                            return "WORKING" === t.strategyStatus && d.includes(t.symbol)
                        })).map((function(t) {
                            var a, u = t.symbol,
                                c = t.triggerTime,
                                d = t.sharing,
                                f = t.strategyId,
                                h = (null === (a = i[u]) || void 0 === a ? void 0 : a.symbolDisplay) || u,
                                v = c ? (0, st.a)((0, st.e)(e - c), r) : q.Vs;
                            return {
                                ROI_SORT_VALUE: p[f] || 0,
                                market: (0, n.jsxs)(s.Ay, {
                                    className: "flex items-center text-center gap-[2px]",
                                    children: [(0, n.jsx)(s.Ay, {
                                        className: "typography-subtitle2",
                                        children: h
                                    }), (0, n.jsx)(it, {
                                        trailingUp: null === t || void 0 === t ? void 0 : t.trailingUp
                                    })]
                                }),
                                ROI: (0, n.jsx)(qt, {
                                    strategy: t,
                                    onRoiChange: y
                                }),
                                PNL: (0, n.jsx)(Pt, {
                                    strategy: t
                                }),
                                runningTime: (0, n.jsx)(s.Ay, {
                                    className: "typography-subtitle3 text-PrimaryText",
                                    children: v
                                }),
                                action: (0, n.jsx)(tt.A, {
                                    size: "small",
                                    checked: d,
                                    disabled: o,
                                    onChange: function(e) {
                                        l(t, u, f, e)
                                    }
                                })
                            }
                        })).sort((function(t, e) {
                            return Number(e.ROI_SORT_VALUE) - Number(t.ROI_SORT_VALUE)
                        }));
                        return a
                    }), [t, e, d, y, l, i, p, r, o])
                },
                jt = r("HmBK"),
                Rt = r("D8sT"),
                Mt = r("A4nT"),
                Ct = r("5saw"),
                Tt = r("qYeW"),
                Et = r("uJ9s");
            const Lt = {};
            var Ot = r("O3g0");
            var Ft = r("9jLk"),
                zt = r("0Um/"),
                Bt = r("UJEW");
            const Vt = ({
                symbol: t,
                isCM: e,
                enabled: r,
                strategyUserId: n
            }) => {
                const i = (0, a.useCallback)((e => n && t ? e ? .[n] ? .[t] : void 0), [n, t]),
                    {
                        data: s,
                        isLoading: u
                    } = (0, Bt.f)({
                        isCM: e
                    }, {
                        select: i,
                        notifyOnChangeProps: ["data"],
                        enabled: r && Boolean(n) && Boolean(t)
                    });
                return {
                    data: s,
                    isLoading: u
                }
            };
            var Ut = r("dObz"),
                Dt = r("OU3o");
            const Yt = (t, {
                enabled: e
            } = {
                enabled: !0
            }) => {
                const r = (0, Tt.e)(t),
                    n = (0, a.useCallback)((e => e[t] ? .lastPrice), [t]),
                    {
                        data: i
                    } = (0, Dt.w)({
                        isCM: Boolean(r)
                    }, {
                        select: n,
                        enabled: e && "boolean" === typeof r
                    });
                return i
            };
            var Kt = r("zhxR"),
                Gt = r("+jcl"),
                Ht = r.n(Gt);
            var Qt = r("/C9T");
            const Wt = ({
                positionSize: t = 0,
                entryPrice: e = 0,
                markPrice: r = 0,
                lastPrice: n = 0,
                unrealizedProfit: a = 0
            }, {
                isDelivery: i = !1,
                contractVal: s = 0
            }, u = !1) => {
                const l = u && n ? n : r;
                if (!l) return a;
                const o = Number(e) || 0,
                    c = Number(l) || 0;
                return (Number(t) || 0) * (i ? s * ((o ? 1 / o : 0) - (c ? 1 / c : 0)) : c - o) || 0
            };
            var $t = r("4frZ");
            const Xt = !0,
                Jt = ({
                    symbol: t,
                    strategyUserId: e
                }, {
                    enabled: r
                } = {
                    enabled: !0
                }) => {
                    const n = (0, zt.i)(t),
                        {
                            data: a,
                            isLoading: i
                        } = Vt({
                            isCM: Xt,
                            strategyUserId: e,
                            symbol: t,
                            enabled: r
                        }),
                        s = Number(a ? .positionAmount),
                        {
                            data: u = {}
                        } = (0, Ut.Q)(Xt, String(e)),
                        l = u[t],
                        o = Number(Yt(t)),
                        c = (0, Kt.P)(t) || 100,
                        d = (0, Qt.N)({
                            positionSize: s,
                            markPrice: o
                        }, {
                            isDelivery: Xt,
                            contractVal: c
                        }) * (t => Number(Ht()(1 / t, 5)))(l),
                        f = Wt({
                            positionSize: s,
                            entryPrice: Number(a ? .entryPrice),
                            markPrice: o
                        }, {
                            isDelivery: Xt,
                            contractVal: c
                        }, !1),
                        h = 0 === Number(f) ? "" : Number(f) > 0 ? "buy" : "sell",
                        v = 0 === Number(f) ? "" : Number(f) > 0 ? "text-Buy" : "text-Sell",
                        m = 0 === Number(f) ? "" : Number(f) > 0 ? "+" : "";
                    return {
                        isLoading: i,
                        unrealizedPnl: f,
                        formattedPnl: (0, $t.kf)(f) ? `${(0,ct.RI)(f,n,!0)}` : Ot.Vs,
                        pnlColor: h,
                        pnlSign: m,
                        ROEVal: `${(100*(f/d||0)).toFixed(2)}%`,
                        pnlColorClassName: v
                    }
                };
            var Zt = r("2Siz"),
                te = r("UWQe");

            function ee(t) {
                return (0, Zt.Qi)((0, Zt.b2)(), (0, te.bK)(t), 4)
            }
            var re, ne = r("onyb"),
                ae = r("yCNW"),
                ie = r("96qr");

            function se() {
                if (re === ie.I) {
                    class t extends Error {
                        constructor(t, e) {
                            return new.target.nd(t, e)
                        }
                        static nd(t, e) {
                            var r = (0, ne.Xh)(this);
                            return (0, ne.mB)(r, t, e), (0, ne.OZ)(r, r.md_1), r
                        }
                    }(0, ae.mK)(t, "AbacusException"), re = t
                }
                return re
            }
            var ue, le, oe, ce, de, fe, he, ve = r("FOOV"),
                me = r("0Zz7");

            function ge() {
                if (oe) return ve.h;
                oe = !0, ue = new(pe())("BUY", 0), le = new(pe())("SELL", 1)
            }

            function pe() {
                if (ce === ie.I) {
                    class t extends((0, me.c)()) {
                        get name() {
                            return this.k1()
                        }
                        get ordinal() {
                            return this.l1()
                        }
                    }(0, ae.mK)(t, "TradeSide"), ce = t
                }
                return ce
            }

            function be() {
                if (fe) return ve.h;
                fe = !0, new(ye())("OPEN", 0), de = new(ye())("CLOSE", 1)
            }

            function ye() {
                if (he === ie.I) {
                    class t extends((0, me.c)()) {
                        get name() {
                            return this.k1()
                        }
                        get ordinal() {
                            return this.l1()
                        }
                    }(0, ae.mK)(t, "TradeSideHedgeWay"), he = t
                }
                return he
            }

            function ke(t) {
                return t.equals(xe()) ? (0, Zt.b2)() : (0, Zt.rr)()
            }

            function xe() {
                return ge(), ue
            }

            function _e() {
                return ge(), le
            }

            function Se() {
                return be(), de
            }

            function Ne(t, e, r, n, a, i) {
                var s, u = Ae(a, n),
                    l = Ae(a, r);
                e.isLimit() ? s = t.equals(xe()) ? i : (0, Zt.dg)((0, Zt.dg)(a, i), u) : s = t.equals(xe()) ? l.kd((0, te.Yt)(1.0005)) : u;
                return s
            }

            function Ae(t, e) {
                return e.qc((0, Zt.tx)()) <= 0 ? t : e
            }
            var Ie, qe = r("AHWj"),
                Pe = r("oj/q"),
                we = r("xK95");

            function je(t) {
                return new(function() {
                    if (Ie === ie.I) {
                        class t {
                            constructor(t, e) {
                                this.jg_1 = t, this.kg_1 = e, this.lg_1 = this.jg_1.kd(this.kg_1)
                            }
                        }(0, ae.mK)(t, "UmLpPosition"), Ie = t
                    }
                    return Ie
                }())((0, te.y8)(t.positionAmount), (0, te.y8)(t.entryPrice))
            }
            var Re = r("noRI"),
                Me = r("5rag"),
                Ce = r("XqFO"),
                Te = r("us5i"),
                Ee = r("DJbt");

            function Le(t, e, r, n) {
                for (var a = (0, Pe.e)().v4(), i = 0, s = e.length; i < s;) {
                    var u = e[i];
                    i = i + 1 | 0, (0, we.Lh)(u) && a.l3(u)
                }
                var l, o = a,
                    c = t.symbol;
                t: {
                    for (var d = o.o(); d.p();) {
                        var f = d.q();
                        if (f.symbol === c && (0, we.pj)(f)) {
                            l = f;
                            break t
                        }
                    }
                    l = null
                }
                var h, v = null == l ? null : je(l);
                t: {
                    for (var m = o.o(); m.p();) {
                        var g = m.q();
                        if (g.symbol === c && (0, we.jn)(g)) {
                            h = g;
                            break t
                        }
                    }
                    h = null
                }
                var p, b = null == h ? null : je(h);
                t: {
                    for (var y = o.o(); y.p();) {
                        var k = y.q();
                        if (k.symbol === c && (0, we.pF)(k)) {
                            p = k;
                            break t
                        }
                    }
                    p = null
                }
                var x, _, S, N = null == p ? null : je(p),
                    A = new((0, Re.mm)())(n);
                if (t.isolated) x = (0, Zt.iS)(t.isolatedWallet), _ = (0, Zt.tx)(), S = (0, Zt.tx)();
                else {
                    x = r;
                    var I = Fe(c, t.collateral, o, A),
                        q = I.fc();
                    _ = I.gc(), S = q
                }
                var P = function(t, e, r, n, a, i, s) {
                    var u = function(u) {
                        return function(t, e, r, n, a, i, s, u) {
                            return ze("BOTH" === t.positionSide ? e : null, "LONG" === t.positionSide ? r : null, "SHORT" === t.positionSide ? n : null, "BOTH" === t.positionSide ? u : null, "LONG" === t.positionSide ? u : null, "SHORT" === t.positionSide ? u : null, a, i, s)
                        }(t, e, r, n, a, i, s, u)
                    };
                    return u.callableName = "oneWayLpFormula", u
                }(t, v, b, N, x, _, S);
                return Oe(t, b, N, x, A, P, function(t, e, r, n, a, i) {
                    var s = function(s, u) {
                        return function(t, e, r, n, a, i, s, u) {
                            return ze(t, e, r, null, s, u, n, a, i)
                        }(t, e, r, n, a, i, s, u)
                    };
                    return s.callableName = "hedgeWayLpFormula", s
                }(v, b, N, x, _, S))
            }

            function Oe(t, e, r, n, a, i, s, u) {
                u = u === ie.I || u;
                var l = t.symbol,
                    o = a.td(l);
                if (null == o) return (0, Me.A)();
                var c = o,
                    d = null == e ? null : e.jg_1,
                    f = null == d ? null : d.ed(),
                    h = null == f ? (0, Zt.tx)() : f,
                    v = null == r ? null : r.jg_1,
                    m = null == v ? null : v.ed(),
                    g = null == m ? (0, Zt.tx)() : m,
                    p = c.getLastSeqRisk(),
                    b = (0, te.Yt)(p.bracketMaintenanceMarginRate);
                if ("BOTH" === t.positionSide || t.isolated || null == e || null == r || h.equals((0, Zt.tx)()) || g.equals((0, Zt.tx)())) {
                    var y = p,
                        k = (0, Zt.iS)(t.positionAmount).ed(),
                        x = (0, Zt.tx)();
                    t: for (; y.bracketSeq >= 0;) {
                        var _ = i(y),
                            S = y.bracketNotionalFloor,
                            N = y.bracketNotionalCap,
                            A = (0, Zt.yp)(_.kd(k));
                        if (S < A && A <= N || y.equals(p) && A > N) {
                            x = _;
                            break t
                        }
                        var I = Be(c, y.bracketSeq - 1 | 0);
                        if (null == I) break t;
                        y = I
                    }
                    return x
                }
                var q = (0, Zt.iS)(t.markPrice);
                if (h.qc(g) > 0) {
                    if (h.jd(g).qc(b.kd(h.id(g))) > 0) {
                        if (n.jd(e.lg_1.ed()).id(r.lg_1.ed()).qc((0, Zt.tx)()) >= 0) return (0, Zt.tx)();
                        var P = (0, Ce.Oe)(e, q).ed(),
                            w = c.getRiskByNotionalV3((0, Zt.yp)(P));
                        if (null == w) return (0, Zt.tx)();
                        var j = w,
                            R = (0, Ce.Oe)(r, q).ed(),
                            M = c.getRiskByNotionalV3((0, Zt.yp)(R));
                        return null == M ? (0, Zt.tx)() : Ve(s, g, h, p, c, j, 0, M, 0)
                    }
                    var C = (0, Ce.Oe)(e, q).ed(),
                        T = c.getRiskByNotionalV3((0, Zt.yp)(C));
                    if (null == T) return (0, Zt.tx)();
                    var E = T,
                        L = (0, Ce.Oe)(r, q).ed(),
                        O = c.getRiskByNotionalV3((0, Zt.yp)(L));
                    if (null == O) return (0, Zt.tx)();
                    var F = O,
                        z = Ve(s, g, h, p, c, E, 0, F, 0);
                    return z.qc((0, Zt.tx)()) <= 0 && (z = Ve(s, g, h, p, c, p, E.bracketSeq, p, F.bracketSeq)), z
                }
                var B = (0, Ce.Oe)(e, q).ed(),
                    V = c.getRiskByNotionalV3((0, Zt.yp)(B));
                if (null == V) return (0, Zt.tx)();
                var U = V,
                    D = (0, Ce.Oe)(r, q).ed(),
                    Y = c.getRiskByNotionalV3((0, Zt.yp)(D));
                if (null == Y) return (0, Zt.tx)();
                var K = Y;
                return Ve(s, g, h, p, c, p, U.bracketSeq, p, K.bracketSeq)
            }

            function Fe(t, e, r, n) {
                for (var a = (0, Zt.tx)(), i = (0, Zt.tx)(), s = (0, Pe.e)().v4(), u = r.o(); u.p();) {
                    var l = u.q();
                    l.isolated || !(0, Te.iu)(e, l.collateral, !0) || (0, Te.iu)(t, l.symbol, !0) || s.l3(l)
                }
                for (var o = s.o(); o.p();) {
                    var c = o.q(),
                        d = (0, Zt.iS)(c.markPrice),
                        f = (0, Zt.iS)(c.positionAmount),
                        h = (0, Ce.b6)(c, d).ed(),
                        v = n.of(c.symbol, h),
                        m = (0, te.Yt)(v.bracketMaintenanceMarginRate),
                        g = (0, te.Yt)(v.cumFastMaintenanceAmount),
                        p = h.kd(m).jd(g);
                    a = a.id(p);
                    var b = f.kd(d.jd((0, Zt.iS)(c.entryPrice)));
                    i = i.id(b)
                }
                return new((0, Ee.e9)())(i, a)
            }

            function ze(t, e, r, n, a, i, s, u, l) {
                var o = null == t ? null : t.lg_1,
                    c = null == o ? (0, Zt.tx)() : o,
                    d = null == e ? null : e.lg_1,
                    f = null == d ? null : d.ed(),
                    h = null == f ? (0, Zt.tx)() : f,
                    v = null == r ? null : r.lg_1,
                    m = null == v ? null : v.ed(),
                    g = null == m ? (0, Zt.tx)() : m,
                    p = null == n ? null : n.cumFastMaintenanceAmount,
                    b = null == p ? null : (0, te.Yt)(p),
                    y = null == b ? (0, Zt.tx)() : b,
                    k = null == a ? null : a.cumFastMaintenanceAmount,
                    x = null == k ? null : (0, te.Yt)(k),
                    _ = null == x ? (0, Zt.tx)() : x,
                    S = null == i ? null : i.cumFastMaintenanceAmount,
                    N = null == S ? null : (0, te.Yt)(S),
                    A = null == N ? (0, Zt.tx)() : N,
                    I = null == n ? null : n.bracketMaintenanceMarginRate,
                    q = null == I ? null : (0, te.Yt)(I),
                    P = null == q ? (0, Zt.tx)() : q,
                    w = null == a ? null : a.bracketMaintenanceMarginRate,
                    j = null == w ? null : (0, te.Yt)(w),
                    R = null == j ? (0, Zt.tx)() : j,
                    M = null == i ? null : i.bracketMaintenanceMarginRate,
                    C = null == M ? null : (0, te.Yt)(M),
                    T = null == C ? (0, Zt.tx)() : C,
                    E = null == t ? null : t.jg_1,
                    L = null == E ? (0, Zt.tx)() : E,
                    O = null == e ? null : e.jg_1,
                    F = null == O ? null : O.ed(),
                    z = null == F ? (0, Zt.tx)() : F,
                    B = null == r ? null : r.jg_1,
                    V = null == B ? null : B.ed(),
                    U = null == V ? (0, Zt.tx)() : V;
                return (0, Zt.Dx)(s.jd(u).id(l).id(y).id(_).id(A).jd(c).jd(h).id(g), L.ed().kd(P).id(z.kd(R)).id(U.kd(T)).jd(L).jd(z).id(U))
            }

            function Be(t, e) {
                return t.getRiskBySeq(e)
            }

            function Ve(t, e, r, n, a, i, s, u, l) {
                var o = (0, Zt.tx)(),
                    c = i;
                t: for (; c.bracketSeq >= s;) {
                    0;
                    var d = u;
                    e: for (; d.bracketSeq >= l;) {
                        var f = t(c, d),
                            h = d.bracketNotionalFloor,
                            v = d.bracketNotionalCap,
                            m = (0, Zt.yp)(f.kd(e)),
                            g = c.bracketNotionalFloor,
                            p = c.bracketNotionalCap,
                            b = (0, Zt.yp)(f.kd(r));
                        if ((h < m && m <= v || d.equals(n) && m > v) && (g < b && b <= p || c.equals(n) && b > p)) {
                            o = f;
                            break t
                        }
                        var y = Be(a, d.bracketSeq - 1 | 0);
                        if (null == y) break e;
                        d = y
                    }
                    var k = Be(a, c.bracketSeq - 1 | 0);
                    if (null == k) break t;
                    c = k
                }
                return o
            }
            var Ue = r("68PZ"),
                De = r("w3mb"),
                Ye = r("BTXI");

            function Ke(t, e, r, n, a) {
                for (var i = (0, Pe.e)().v4(), s = 0, u = e.length; s < u;) {
                    var l = e[s];
                    s = s + 1 | 0, (0, we.Lh)(l) && i.l3(l)
                }
                var o = i;
                if (o.z()) return (0, Me.A)();
                var c, d = t.symbol,
                    f = new((0, Re.mm)())(a);
                t: {
                    for (var h = o.o(); h.p();) {
                        var v = h.q();
                        if (v.symbol === d && (0, we.pj)(v)) {
                            c = v;
                            break t
                        }
                    }
                    c = null
                }
                var m, g = null == c ? null : je(c);
                t: {
                    for (var p = o.o(); p.p();) {
                        var b = p.q();
                        if (b.symbol === d && (0, we.jn)(b)) {
                            m = b;
                            break t
                        }
                    }
                    m = null
                }
                var y, k = null == m ? null : je(m);
                t: {
                    for (var x = o.o(); x.p();) {
                        var _ = x.q();
                        if (_.symbol === d && (0, we.pF)(_)) {
                            y = _;
                            break t
                        }
                    }
                    y = null
                }
                var S, N = null == y ? null : je(y);
                if (null == n) S = null;
                else {
                    for (var A = (0, De.vv)((0, Ue.lB)(n.length), 16), I = (0, Ye.B)().j8(A), q = 0, P = n.length; q < P;) {
                        var w = n[q];
                        q = q + 1 | 0;
                        var j = w.symbol.toUpperCase();
                        I.m4(j, w)
                    }
                    S = I
                }
                var R, M = S;
                if (null == M) R = null;
                else {
                    var C = t.collateral.toUpperCase();
                    R = M.f1(C + "USD")
                }
                var T = R;
                if (null == T) return (0, Me.A)();
                var E, L = T,
                    O = (0, Zt.iS)(L.askRate),
                    F = (0, Zt.iS)(L.bidRate);
                t: {
                    for (var z = 0, B = r.length; z < B;) {
                        var V = r[z];
                        if (z = z + 1 | 0, (0, Te.iu)(V.asset, t.collateral, !0)) {
                            E = V;
                            break t
                        }
                    }
                    E = null
                }
                var U = null == E ? null : E.crossWalletBalance,
                    D = null == U ? null : (0, Zt.iS)(U);
                if (null == D) return (0, Me.A)();
                var Y = D,
                    K = function(t, e, r, n, a, i) {
                        var s = (0, Zt.tx)(),
                            u = (0, Zt.tx)(),
                            l = (0, Zt.tx)(),
                            o = 0,
                            c = t.length;
                        for (; o < c;) {
                            var d = t[o];
                            if (o = o + 1 | 0, d.marginAvailable) {
                                var f, h = Fe(e, d.asset, r, n),
                                    v = h.fc(),
                                    m = h.gc();
                                if (null == a) f = null;
                                else {
                                    var g = d.asset.toUpperCase();
                                    f = a.f1(g + "USD")
                                }
                                var p = f,
                                    b = null == p ? null : p.askRate,
                                    y = null == b ? null : (0, Zt.iS)(b),
                                    k = null == y ? (0, Zt.tx)() : y,
                                    x = null == p ? null : p.bidRate,
                                    _ = null == x ? null : (0, Zt.iS)(x),
                                    S = null == _ ? (0, Zt.tx)() : _,
                                    N = (0, Zt.iS)(d.crossWalletBalance).id(v);
                                (0, Te.iu)(d.asset, i, !0) ? l = v: s = s.id((0, Zt.$C)(N.kd(k), N.kd(S))), u = u.id(m.kd(k))
                            }
                        }
                        return new((0, Ee.jh)())(s, u, l)
                    }(r, d, o, f, M, t.collateral),
                    G = K.fc(),
                    H = K.gc(),
                    Q = K.oc(),
                    W = null == g ? null : g.jg_1,
                    $ = null == W ? (0, Zt.tx)() : W,
                    X = null == k ? null : k.jg_1,
                    J = null == X ? null : X.ed(),
                    Z = null == J ? (0, Zt.tx)() : J,
                    tt = null == N ? null : N.jg_1,
                    et = null == tt ? null : tt.ed(),
                    rt = null == et ? (0, Zt.tx)() : et,
                    nt = He(t, k, N, Y, f, g, O, G, H, Q, F),
                    at = null == g ? null : g.kg_1,
                    it = null == at ? (0, Zt.tx)() : at,
                    st = null == k ? null : k.kg_1,
                    ut = null == st ? (0, Zt.tx)() : st,
                    lt = null == N ? null : N.kg_1,
                    ot = null == lt ? (0, Zt.tx)() : lt;
                return Y.id($.kd(nt.jd(it))).id(Z.kd(nt.jd(ut))).id(rt.kd(ot.jd(nt))).qc((0, Zt.tx)()) > 0 ? nt : nt = He(t, k, N, Y, f, g, O, G, H, Q, O)
            }

            function Ge(t, e, r, n, a, i, s, u, l, o, c, d) {
                var f = null == t ? null : t.jg_1,
                    h = null == f ? (0, Zt.tx)() : f,
                    v = h.ed(),
                    m = null == e ? null : e.jg_1,
                    g = null == m ? null : m.ed(),
                    p = null == g ? (0, Zt.tx)() : g,
                    b = null == r ? null : r.jg_1,
                    y = null == b ? null : b.ed(),
                    k = null == y ? (0, Zt.tx)() : y,
                    x = null == t ? null : t.lg_1,
                    _ = null == x ? (0, Zt.tx)() : x,
                    S = null == e ? null : e.lg_1,
                    N = null == S ? null : S.ed(),
                    A = null == N ? (0, Zt.tx)() : N,
                    I = null == r ? null : r.lg_1,
                    q = null == I ? null : I.ed(),
                    P = null == q ? (0, Zt.tx)() : q,
                    w = null == a ? null : a.cumFastMaintenanceAmount,
                    j = null == w ? null : (0, te.Yt)(w),
                    R = null == j ? (0, Zt.tx)() : j,
                    M = null == i ? null : i.cumFastMaintenanceAmount,
                    C = null == M ? null : (0, te.Yt)(M),
                    T = null == C ? (0, Zt.tx)() : C,
                    E = null == s ? null : s.cumFastMaintenanceAmount,
                    L = null == E ? null : (0, te.Yt)(E),
                    O = null == L ? (0, Zt.tx)() : L,
                    F = null == a ? null : a.bracketMaintenanceMarginRate,
                    z = null == F ? null : (0, te.Yt)(F),
                    B = v.kd(null == z ? (0, Zt.tx)() : z),
                    V = null == i ? null : i.bracketMaintenanceMarginRate,
                    U = null == V ? null : (0, te.Yt)(V),
                    D = p.kd(null == U ? (0, Zt.tx)() : U),
                    Y = null == s ? null : s.bracketMaintenanceMarginRate,
                    K = null == Y ? null : (0, te.Yt)(Y),
                    G = k.kd(null == K ? (0, Zt.tx)() : K);
                return (0, Zt.Dx)(o.jd(c).id(R.id(T).id(O).kd(l)).id(n.id(d).jd(_).jd(A).id(P).kd(u)), B.id(D).id(G).kd(l).jd(h.id(p).jd(k).kd(u)))
            }

            function He(t, e, r, n, a, i, s, u, l, o, c) {
                var d = function(t, e, r, n, a, i, s, u, l, o) {
                    var c = function(c) {
                        return function(t, e, r, n, a, i, s, u, l, o, c) {
                            return Ge("BOTH" === t.positionSide ? e : null, "LONG" === t.positionSide ? r : null, "SHORT" === t.positionSide ? n : null, a, "BOTH" === t.positionSide ? c : null, "LONG" === t.positionSide ? c : null, "SHORT" === t.positionSide ? c : null, i, s, u, l, o)
                        }(t, e, r, n, a, i, s, u, l, o, c)
                    };
                    return c.callableName = "oneWayLpFormula", c
                }(t, i, e, r, n, c, s, u, l, o);
                return Oe(t, e, r, n, a, d, function(t, e, r, n, a, i, s, u, l) {
                    var o = function(o, c) {
                        return function(t, e, r, n, a, i, s, u, l, o, c) {
                            return Ge(t, e, r, n, null, o, c, a, i, s, u, l)
                        }(t, e, r, n, a, i, s, u, l, o, c)
                    };
                    return o.callableName = "hedgeWayLpFormula", o
                }(i, e, r, n, c, s, u, l, o))
            }
            var Qe = r("LO/3");

            function We(t, e, r, n) {
                return Le(e, r, n, t)
            }
            var $e, Xe, Je = r("KpqF");
            Math.imul;

            function Ze() {
                return Xe || (Xe = !0, $e = (0, Zt.b2)()), $e
            }

            function tr(t, e, r, n, a) {
                a = a !== ie.I && a;
                var i, s = (0, Zt.tx)();
                if (null == r) i = null;
                else {
                    for (var u = (0, Pe.e)().v4(), l = 0, o = r.length; l < o;) {
                        var c = r[l];
                        l = l + 1 | 0, (0, Te.iu)(c.collateral, t, !0) && c.isolated && u.l3(c)
                    }
                    i = u
                }
                if (null == i);
                else
                    for (var d = i.o(); d.p();) {
                        var f = d.q(),
                            h = ee(f.leverage),
                            v = (0, Zt.iS)(f.positionAmount).kd((0, Je.p)().ni_1).kd((0, Zt.iS)(f.markPrice)),
                            m = (0, Zt.dg)(v.id((0, Zt.iS)(f.bidNotional)).id((0, Zt.tx)()).ed(), v.jd((0, Zt.iS)(f.askNotional)).jd((0, Zt.tx)()).ed()).ad(h).jd((0, Zt.iS)(f.markPrice).ad((0, Zt.iS)(f.positionAmount).ed()).ad(h));
                        s = s.id(m)
                    }
                var g, p = (0, Zt.tx)(),
                    b = (0, Zt.tx)();
                if (null == r) g = null;
                else {
                    for (var y = (0, Pe.e)().v4(), k = 0, x = r.length; k < x;) {
                        var _ = r[k];
                        k = k + 1 | 0, (0, Te.iu)(_.collateral, t, !0) && !_.isolated && y.l3(_)
                    }
                    g = y
                }
                if (null == g);
                else
                    for (var S = g.o(); S.p();) {
                        var N = S.q(),
                            A = (0, Zt.iS)(N.markPrice),
                            I = (0, Zt.iS)(N.lastPrice);
                        I.qc((0, Zt.tx)()) <= 0 && (I = A);
                        var q = (0, Zt.iS)(N.positionAmount),
                            P = (0, Zt.iS)(N.entryPrice),
                            w = ee(N.leverage),
                            j = q.kd((0, Je.p)().ni_1).kd(A),
                            R = (0, Zt.dg)(j.id((0, Zt.iS)(N.bidNotional)).id((0, Zt.tx)()).ed(), j.jd((0, Zt.iS)(N.askNotional)).jd((0, Zt.tx)()).ed()).kd(w);
                        p = p.id(R), b = b.id((0, Zt.$C)(q.kd(A.jd(P)), q.kd(I.jd(P))))
                    }
                var M, C = e.id(b).jd(p.id(s));
                if (a) {
                    var T = function(t, e, r, n, a) {
                        var i, s = (0, Zt.tx)(),
                            u = (0, Zt.tx)();
                        if (null == n) i = null;
                        else {
                            for (var l = (0, Pe.e)().v4(), o = 0, c = n.length; o < c;) {
                                var d = n[o];
                                o = o + 1 | 0, (0, Te.iu)(d.collateral, t, !0) && l.l3(d)
                            }
                            i = l
                        }
                        var f = i;
                        if (null == f);
                        else
                            for (var h = f.o(); h.p();) {
                                var v = h.q();
                                t: {
                                    var m = (0, te.IG)(v.positionAmount),
                                        g = (0, te.IG)(v.markPrice);
                                    if (v.isolated) {
                                        var p = (0, te.IG)(v.bidNotional),
                                            b = (0, te.IG)(v.askNotional),
                                            y = m.kd(g),
                                            k = (0, Zt.dg)(y.id(p).ed(), y.jd(b).ed()),
                                            x = ee(v.leverage);
                                        s = s.id(k.jd(g.kd(m.ed())).kd(x))
                                    } else {
                                        var _, S = (0, Zt.yp)(m.ed().kd(g));
                                        if (null == a) _ = null;
                                        else {
                                            var N;
                                            e: {
                                                for (var A = 0, I = a.length; A < I;) {
                                                    var q = a[A];
                                                    if (A = A + 1 | 0, q.symbol === v.symbol) {
                                                        N = q;
                                                        break e
                                                    }
                                                }
                                                N = null
                                            }
                                            _ = N
                                        }
                                        var P = null == _ ? null : _.getRiskByNotional(S);
                                        if (null == P) break t;
                                        var w = P,
                                            j = (0, te.Yt)(w.bracketMaintenanceMarginRate),
                                            R = (0, te.Yt)(w.cumFastMaintenanceAmount);
                                        u = u.id(m.ed().kd(j).kd(g).jd(R))
                                    }
                                }
                            }
                        return (0, Zt.$C)(e.jd(s).jd(u), r)
                    }(t, e, C, r, n);
                    M = (0, Ee.Sd)(T, (0, Zt.dg)((0, Zt.tx)(), T))
                } else M = (0, Ee.Sd)(C, (0, Zt.dg)((0, Zt.tx)(), C));
                return M
            }

            function er(t, e) {
                var r;
                t: {
                    for (var n = 0, a = e.length; n < a;) {
                        var i = e[n];
                        if (n = n + 1 | 0, (0, Te.iu)(i.symbol, t + "USD", !0)) {
                            r = i;
                            break t
                        }
                    }
                    r = null
                }
                return r
            }
            var rr, nr, ar, ir, sr, ur, lr, or, cr, dr, fr = r("6n23"),
                hr = Math.imul;

            function vr() {
                if (rr === ie.I) {
                    class t {
                        constructor(t, e) {
                            t = t === ie.I ? "" : t, e = e === ie.I ? "" : e, this.originAvailable = t, this.shownAvailable = e
                        }
                        oe() {
                            return this.originAvailable
                        }
                        pe() {
                            return this.shownAvailable
                        }
                        fc() {
                            return this.originAvailable
                        }
                        gc() {
                            return this.shownAvailable
                        }
                        qe(t, e) {
                            return new(vr())(t, e)
                        }
                        copy(t, e, r) {
                            return t = t === ie.I ? this.originAvailable : t, e = e === ie.I ? this.shownAvailable : e, this.qe(t, e)
                        }
                        toString() {
                            return "FuturesAvailable(originAvailable=" + this.originAvailable + ", shownAvailable=" + this.shownAvailable + ")"
                        }
                        hashCode() {
                            var t = (0, ne.HR)(this.originAvailable);
                            return t = hr(t, 31) + (0, ne.HR)(this.shownAvailable) | 0
                        }
                        equals(t) {
                            if (this === t) return !0;
                            if (!(t instanceof vr())) return !1;
                            var e = t instanceof vr() ? t : (0, fr.XR)();
                            return this.originAvailable === e.originAvailable && this.shownAvailable === e.shownAvailable
                        }
                    }(0, ae.mK)(t, "FuturesAvailable", vr), rr = t
                }
                return rr
            }

            function mr(t) {
                return new(vr())(t.dc_1.hd(), t.ec_1.hd())
            }

            function gr(t, e, r, n, a, i) {
                var s, u, l, o = (s = a, (u = n).qc((0, Zt.tx)()) <= 0 ? s : u);
                if (e.isLimit()) {
                    var c;
                    switch (null == r ? -1 : r.j1_1) {
                        case 1:
                        case 3:
                            c = o.kd((0, te.Yt)(1.001));
                            break;
                        case 2:
                        case 4:
                            c = o.kd((0, te.Yt)(1.004));
                            break;
                        default:
                            c = t.equals(xe()) ? i : (0, Zt.dg)((0, Zt.dg)(a, i), o.kd((0, te.Yt)(1.001)))
                    }
                    l = c
                } else l = o.kd((0, te.Yt)(1.001));
                return l
            }

            function pr(t, e, r, n, a, i, s, u, l, o, c) {
                var d = null == u ? null : u.positionAmount,
                    f = null == d ? null : (0, te.y8)(d),
                    h = null == f ? (0, Zt.tx)() : f,
                    v = (0, Zt.tx)();
                if (t) {
                    v = h.equals((0, Zt.tx)()) ? (0, Zt.tx)() : h.qc((0, Zt.tx)()) > 0 ? e.equals(xe()) ? (0, Zt.tx)() : h.ed() : e.equals(xe()) ? h.ed() : (0, Zt.tx)()
                } else {
                    var m = null == u ? null : u.bidNotional,
                        g = null == m ? null : (0, te.y8)(m),
                        p = null == g ? (0, Zt.tx)() : g,
                        b = null == u ? null : u.askNotional,
                        y = null == b ? null : (0, te.y8)(b),
                        k = null == y ? (0, Zt.tx)() : y,
                        x = ee(l);
                    if (r.isLimit() && a.qc((0, Zt.tx)()) <= 0) return (0, Zt.tx)();
                    var _ = gr(e, r, n, s, i, a);
                    if (_.qc((0, Zt.tx)()) <= 0 || i.qc((0, Zt.tx)()) <= 0) return v;
                    var S, N = null == u ? null : (0, Ce.b6)(u, i),
                        A = null == N ? (0, Zt.tx)() : N,
                        I = (0, Zt.dg)(A.id(p).ed(), A.jd(k).ed()).kd(x),
                        q = function(t, e, r, n, a) {
                            var i, s = (0, te.bK)(e.equals(_e()) ? -1 : 1);
                            i = t.isLimit() ? a : n;
                            var u = i;
                            return (0, Zt.$C)((0, Zt.tx)(), s.kd(r.jd(u))).ed()
                        }(r, e, i, _, a),
                        P = (0, Je.p)().ni_1.kd(_.kd(x).id(q));
                    if (e.equals(xe())) {
                        var w = function(t, e, r, n, a, i, s, u, l, o) {
                                var c;
                                if (t.qc((0, Zt.tx)()) >= 0) c = (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).jd(n.id(a).kd(i))), s);
                                else {
                                    var d, f = (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).jd(n.id(a).kd(i)).id(t.ed().kd((0, Je.p)().ni_1).kd(u))), s);
                                    if (f.qc(t.ed()) >= 0) d = n.id(a).id(f.kd(l)).ed().qc(n.jd(o).ed()) < 0 ? (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).id(n.jd(o).kd(i)).id(t.ed().kd(u))), u) : f;
                                    else d = (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).jd(n.id(a).kd(i))), (0, Je.p)().ni_1.kd(l).kd(i));
                                    c = d
                                }
                                return c
                            }(h, c, I, A, p, x, P, q, _, k),
                            j = _.kd(w);
                        S = (0, Zt.dg)(A.id(p).id(j).ed(), A.jd(k).ed()).qc(o) <= 0 ? w : (0, Zt.Dx)(o.jd(A).jd(p), _)
                    } else {
                        var R = function(t, e, r, n, a, i, s, u, l, o) {
                                var c;
                                if (t.qc((0, Zt.tx)()) < 0) c = (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).id(n.jd(a).kd(i))), s);
                                else {
                                    var d, f = (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).id(n.jd(a).kd(i)).id(t.ed().kd((0, Je.p)().ni_1).kd(u))), s);
                                    if (f.qc(t.ed()) >= 0) d = n.id(l).ed().qc(n.jd(a).jd(f.kd(o)).ed()) > 0 ? (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).jd(n.id(l).kd(i)).id(t.ed().kd(u))), u) : f;
                                    else d = (0, Zt.Dx)((0, Zt.dg)((0, Zt.tx)(), e.id(r).id(n.jd(a).kd(i))), (0, Je.p)().ni_1.kd(o).kd(i));
                                    c = d
                                }
                                return c
                            }(h, c, I, A, k, x, P, q, p, _),
                            M = _.kd(R);
                        S = (0, Zt.dg)(A.id(p).ed(), A.jd(k).jd(M).ed()).qc(o) <= 0 ? R : (0, Zt.Dx)(o.id(A).jd(k), _)
                    }
                    v = S, v = (0, Zt.dg)((0, Zt.tx)(), v)
                }
                return v
            }

            function br(t, e, r, n, a, i, s, u, l, o, c) {
                if (t.equals(Se())) {
                    var d = null == s ? null : s.positionAmount,
                        f = null == d ? null : (0, te.y8)(d),
                        h = null == f ? (0, Zt.tx)() : f,
                        v = null == u ? null : u.positionAmount,
                        m = null == v ? null : (0, te.y8)(v),
                        g = null == m ? (0, Zt.tx)() : m;
                    return new((0, Ee.e9)())(h.ed(), g.ed())
                }
                var p = function(t, e, r, n, a, i, s, u, l, o) {
                        if (t.isLimit() && r.qc((0, Zt.tx)()) <= 0) return (0, Zt.tx)();
                        var c = gr(xe(), t, e, a, n, r);
                        if (c.qc((0, Zt.tx)()) <= 0 || n.qc((0, Zt.tx)()) <= 0) return (0, Zt.tx)();
                        var d, f = (0, Ce.uH)(i, n),
                            h = (0, Ce.uH)(s, n),
                            v = yr(o, xe(), t, c, n, r, u);
                        if (v.qc((0, Zt.tx)()) <= 0) d = (0, Zt.tx)();
                        else {
                            var m;
                            m = function(t, e, r, n, a) {
                                var i = (0, Ce.b6)(t, e),
                                    s = r.kd(n),
                                    u = null == t ? null : t.bidNotional,
                                    l = null == u ? null : (0, te.y8)(u),
                                    o = null == l ? (0, Zt.tx)() : l,
                                    c = null == t ? null : t.askNotional,
                                    d = null == c ? null : (0, te.y8)(c),
                                    f = null == d ? (0, Zt.tx)() : d;
                                return (0, Zt.dg)(i.id(o).id(s).ed(), i.jd(f).ed()).id(a)
                            }(i, n, c, v, h).qc(l) <= 0 ? v : kr(l, f, h, c), d = m
                        }
                        var g = d;
                        return g
                    }(e, r, n, a, i, s, u, l, o, c),
                    b = function(t, e, r, n, a, i, s, u, l, o) {
                        if (t.isLimit() && r.qc((0, Zt.tx)()) <= 0) return (0, Zt.tx)();
                        var c = gr(_e(), t, e, a, n, r);
                        if (c.qc((0, Zt.tx)()) <= 0 || n.qc((0, Zt.tx)()) <= 0) return (0, Zt.tx)();
                        var d, f = (0, Ce.uH)(i, n),
                            h = (0, Ce.uH)(s, n),
                            v = yr(o, _e(), t, c, n, r, u);
                        if (v.qc((0, Zt.tx)()) <= 0) d = (0, Zt.tx)();
                        else {
                            var m;
                            m = function(t, e, r, n, a) {
                                var i = (0, Ce.b6)(t, e),
                                    s = r.kd(n),
                                    u = null == t ? null : t.bidNotional,
                                    l = null == u ? null : (0, te.y8)(u),
                                    o = null == l ? (0, Zt.tx)() : l,
                                    c = null == t ? null : t.askNotional,
                                    d = null == c ? null : (0, te.y8)(c),
                                    f = null == d ? (0, Zt.tx)() : d;
                                return (0, Zt.dg)(i.id(o).ed(), i.jd(f).jd(s).ed()).id(a)
                            }(s, n, c, v, f).qc(l) <= 0 ? v : kr(l, f, h, c), d = m
                        }
                        var g = d;
                        return g
                    }(e, r, n, a, i, s, u, l, o, c);
                return new((0, Ee.e9)())((0, Zt.dg)(p, (0, Zt.tx)()), (0, Zt.dg)(b, (0, Zt.tx)()))
            }

            function yr(t, e, r, n, a, i, s) {
                return (0, Zt.px)(t, function(t, e, r, n, a, i) {
                    var s, u = ke(t);
                    s = e.isLimit() ? (0, Zt.$C)((0, Zt.tx)(), u.kd(r.jd(n))).ed() : (0, Zt.$C)((0, Zt.tx)(), u.kd(r.jd(a))).ed();
                    var l = s,
                        o = ee(i);
                    return a.kd(o).id(l)
                }(e, r, a, i, n, s))
            }

            function kr(t, e, r, n) {
                var a = e.id(r);
                return (0, Zt.dg)((0, Zt.px)(t.jd(a), n), (0, Zt.tx)())
            }

            function xr(t, e, r, n, a, i, s, u, l) {
                var o = ee(l),
                    c = gr(i, n, a, u, e, s),
                    d = Sr(t, (0, Ce.b6)(r, e), r, o, c, i),
                    f = Nr(t, e, r, n, i, s, c);
                return d.id(f)
            }

            function _r(t, e, r, n, a, i, s, u, l) {
                var o = ee(l),
                    c = Ne(a, n, u, s, e, i),
                    d = Sr(t, (0, Ce.b6)(r, e), r, o, c, a),
                    f = Nr(t, e, r, n, a, i, c);
                return d.id(f)
            }

            function Sr(t, e, r, n, a, i) {
                var s = null == r ? null : r.bidNotional,
                    u = null == s ? null : (0, Zt.iS)(s),
                    l = null == u ? (0, Zt.tx)() : u,
                    o = null == r ? null : r.askNotional,
                    c = null == o ? null : (0, Zt.iS)(o),
                    d = null == c ? (0, Zt.tx)() : c,
                    f = e.jd(d).ed(),
                    h = e.id(l).ed(),
                    v = (0, Zt.dg)(f, h),
                    m = function(t, e, r, n, a, i, s) {
                        var u = (0, Zt.tx)();
                        e.equals(xe()) && (u = r.kd(t).kd((0, Je.p)().ni_1));
                        var l = (0, Zt.tx)();
                        e.equals(_e()) && (l = r.kd(t).kd((0, Je.p)().ni_1));
                        var o = n.id(u).id(a).ed(),
                            c = n.jd(l).jd(i).ed();
                        return (0, Zt.dg)(o, c).kd(s)
                    }(t, i, a, e, l, d, n);
                return (0, Zt.dg)((0, Zt.tx)(), m.jd(v.kd(n)))
            }

            function Nr(t, e, r, n, a, i, s) {
                var u = t,
                    l = null == r ? null : r.positionAmount,
                    o = null == l ? null : (0, Zt.iS)(l),
                    c = null == o ? (0, Zt.tx)() : o,
                    d = 0;
                return a.equals(xe()) ? d = 1 : a.equals(_e()) && (d = -1), c.qc((0, Zt.tx)()) >= 0 && a.equals(_e()) ? u = (0, Zt.dg)((0, Zt.tx)(), t.jd(c)) : c.qc((0, Zt.tx)()) < 0 && a.equals(xe()) && (u = (0, Zt.dg)((0, Zt.tx)(), t.id(c))), n.isLimit() ? i.equals((0, Zt.tx)()) ? (0, Zt.tx)() : u.kd((0, Je.p)().ni_1).kd((0, Zt.$C)((0, Zt.tx)(), (0, te.bK)(d).kd(e.jd(i))).ed()) : u.kd((0, Je.p)().ni_1).kd((0, Zt.$C)((0, Zt.tx)(), (0, te.bK)(d).kd(e.jd(s))).ed())
            }

            function Ar(t, e, r, n, a, i, s, u) {
                var l = ee(u),
                    o = gr(a, r, n, s, e, i),
                    c = qr(t, l, o),
                    d = Pr(t, i, r, a, e, o);
                return c.id(d)
            }

            function Ir(t, e, r, n, a, i, s, u) {
                var l = ee(u),
                    o = Ne(n, r, s, i, e, a),
                    c = qr(t, l, o),
                    d = Pr(t, a, r, n, e, o);
                return c.id(d)
            }

            function qr(t, e, r) {
                return r.kd(t).kd(e)
            }

            function Pr(t, e, r, n, a, i) {
                var s = 0;
                return n.equals(xe()) ? s = 1 : n.equals(_e()) && (s = -1), r.isLimit() ? e.equals((0, Zt.tx)()) ? (0, Zt.tx)() : t.kd((0, Je.p)().ni_1).kd((0, Zt.$C)((0, Zt.tx)(), (0, te.bK)(s).kd(a.jd(e))).ed()) : t.kd((0, Je.p)().ni_1).kd((0, Zt.$C)((0, Zt.tx)(), (0, te.bK)(s).kd(a.jd(i))).ed())
            }

            function wr() {
                if (ar) return ve.h;
                ar = !0, new(jr())("CONTRACT", 0), nr = new(jr())("MARK", 1)
            }

            function jr() {
                if (ir === ie.I) {
                    class t extends((0, me.c)()) {
                        get name() {
                            return this.k1()
                        }
                        get ordinal() {
                            return this.l1()
                        }
                    }(0, ae.mK)(t, "FutureOrderWorkingType"), ir = t
                }
                return ir
            }

            function Rr() {
                return wr(), nr
            }

            function Mr() {
                if (lr) return ve.h;
                lr = !0, sr = new(Cr())("COIN", 0), ur = new(Cr())("USDT", 1)
            }

            function Cr() {
                if (or === ie.I) {
                    class t extends((0, me.c)()) {
                        get name() {
                            return this.k1()
                        }
                        get ordinal() {
                            return this.l1()
                        }
                    }(0, ae.mK)(t, "UMUnitType"), or = t
                }
                return or
            }

            function Tr() {
                return Mr(), sr
            }

            function Er() {
                return Mr(), ur
            }

            function Lr(t, e, r, n, a, i, s, u) {
                var l = function(t, e, r) {
                        if (null != e) return e;
                        if (null != r) return (0, te.bK)(1).id(r.ld((0, te.bK)(100))).kd(t);
                        return (0, Zt.tx)()
                    }(s.equals(Rr()) ? e : r, n, a),
                    o = function(t, e, r) {
                        if (t.equals(Tr())) return e;
                        if (t.equals(Er()) && !r.equals((0, Zt.tx)())) return e.ld(r);
                        return (0, Zt.tx)()
                    }(u, i, l),
                    c = (0, Zt.iS)(t.positionAmount).qc((0, Zt.tx)()) > 0 ? 1 : -1;
                return l.jd((0, Zt.iS)(t.entryPrice)).kd(o).kd((0, te.bK)(c))
            }

            function Or(t, e, r, n) {
                var a = tr(r = r === ie.I ? "USDT" : r, e, t, n, !0).ec_1,
                    i = function(t, e, r) {
                        var n = new((0, Re.mm)())(r),
                            a = "0",
                            i = (0, Pe.e)().v4(),
                            s = 0,
                            u = e.length;
                        for (; s < u;) {
                            var l = e[s];
                            s = s + 1 | 0, l.isolated || l.collateral !== t || i.l3(l)
                        }
                        var o = i.o();
                        for (; o.p();) {
                            var c = o.q(),
                                d = (0, te.y8)(c.positionAmount).ed().ad((0, te.y8)(c.markPrice)),
                                f = n.ud(c.symbol, d);
                            a += d.ad((0, te.Yt)(f.bracketMaintenanceMarginRate)).jd((0, te.Yt)(f.cumFastMaintenanceAmount)).toString()
                        }
                        return (0, te.y8)(a)
                    }(r, t, n),
                    s = function(t, e) {
                        var r = (0, Pe.e)().v4(),
                            n = 0,
                            a = e.length;
                        for (; n < a;) {
                            var i = e[n];
                            n = n + 1 | 0, i.isolated && i.collateral === t && r.l3(i)
                        }
                        var s = r,
                            u = (0, Zt.tx)(),
                            l = s.o();
                        for (; l.p();) {
                            var o = l.q(),
                                c = ee(o.leverage);
                            u = u.id(Fr((0, te.y8)(o.positionAmount).kd((0, te.y8)(o.markPrice)), (0, te.y8)(o.bidNotional), (0, te.y8)(o.askNotional)).kd(c).jd((0, te.y8)(o.positionAmount).ed().kd((0, te.y8)(o.markPrice)).kd(c)))
                        }
                        return u
                    }(r, t);
                return (0, Zt.dg)((0, Zt.tx)(), (0, Zt.$C)(a, e.jd(s).jd(i)))
            }

            function Fr(t, e, r) {
                return (0, Zt.dg)(t.id(e).ed(), t.jd(r).ed())
            }

            function zr(t, e, r) {
                var n = (0, Zt.iS)(t.isolatedWallet),
                    a = (0, Zt.iS)(t.positionAmount),
                    i = (0, Zt.iS)(t.markPrice),
                    s = (0, Zt.iS)(t.entryPrice),
                    u = n.id(a.kd(i.jd(s))).jd(i.kd(a.ed()).kd(e)),
                    l = function(t, e) {
                        var r = new((0, Re.mm)())(e),
                            n = (0, Zt.iS)(t.positionAmount).ed().ad((0, Zt.iS)(t.markPrice)),
                            a = r.ud(t.symbol, n);
                        return n.ad((0, te.Yt)(a.bracketMaintenanceMarginRate)).jd((0, te.Yt)(a.cumFastMaintenanceAmount))
                    }(t, r),
                    o = (0, Zt.$C)(u, n.jd(l));
                return o.qc((0, Zt.tx)()) < 0 && (o = (0, Zt.tx)()), o
            }

            function Br(t, e, r, n, a) {
                var i;
                if (t.isolated) {
                    var s = function(t, e, r) {
                            var n;
                            t: {
                                for (var a = 0, i = r.length; a < i;) {
                                    var s = r[a];
                                    if (a = a + 1 | 0, s.symbol === t.symbol) {
                                        n = s;
                                        break t
                                    }
                                }
                                n = null
                            }
                            var u, l = n,
                                o = null == l ? null : l.markPrice,
                                c = null == o ? null : (0, te.y8)(o),
                                d = null == c ? (0, te.y8)(t.markPrice) : c,
                                f = (0, Zt.yp)((0, Ce.b6)(t, d).ed());
                            t: {
                                for (var h = 0, v = e.length; h < v;) {
                                    var m = e[h];
                                    if (h = h + 1 | 0, m.symbol === t.symbol) {
                                        u = m;
                                        break t
                                    }
                                }
                                u = null
                            }
                            var g, p = u,
                                b = null == p ? null : p.getRiskByNotional(f);
                            if (null == b) return (0, Zt.tx)();
                            g = b;
                            var y = g;
                            return (0, te.y8)(t.positionAmount).ed().kd((0, te.Yt)(y.bracketMaintenanceMarginRate)).kd(d).jd((0, te.Yt)(y.cumFastMaintenanceAmount))
                        }(t, n, a),
                        u = Vr(t, a);
                    i = (0, Zt.Dx)(s, (0, te.y8)(t.isolatedWallet).id(u))
                } else {
                    var l, o = t.collateral,
                        c = Ur(n, e, a, o);
                    t: {
                        for (var d = 0, f = r.length; d < f;) {
                            var h = r[d];
                            if (d = d + 1 | 0, h.asset === o) {
                                l = h;
                                break t
                            }
                        }
                        l = null
                    }
                    var v = null == l ? null : l.crossWalletBalance,
                        m = null == v ? null : (0, te.y8)(v);
                    if (null == m) return (0, Zt.tx)();
                    var g = m,
                        p = function(t, e, r) {
                            var n = (0, Zt.tx)(),
                                a = (0, Pe.e)().v4(),
                                i = 0,
                                s = t.length;
                            for (; i < s;) {
                                var u = t[i];
                                i = i + 1 | 0, !u.isolated && (0, Te.iu)(r, u.collateral, !0) && a.l3(u)
                            }
                            var l = a.o();
                            for (; l.p();) {
                                var o = l.q();
                                n = n.id(Vr(o, e))
                            }
                            return n
                        }(e, a, o);
                    i = (0, Zt.Dx)(c, g.id(p))
                }
                return i
            }

            function Vr(t, e) {
                var r;
                t: {
                    for (var n = 0, a = e.length; n < a;) {
                        var i = e[n];
                        if (n = n + 1 | 0, i.symbol === t.symbol) {
                            r = i;
                            break t
                        }
                    }
                    r = null
                }
                var s = null == r ? null : r.markPrice,
                    u = null == s ? null : (0, te.y8)(s),
                    l = null == u ? (0, te.y8)(t.markPrice) : u;
                return (0, te.y8)(t.positionAmount).kd(l.jd((0, te.y8)(t.entryPrice)))
            }

            function Ur(t, e, r, n) {
                for (var a = (0, Zt.tx)(), i = (0, Pe.e)().v4(), s = 0, u = e.length; s < u;) {
                    var l = e[s];
                    s = s + 1 | 0, !l.isolated && (0, Te.iu)(n, l.collateral, !0) && i.l3(l)
                }
                for (var o = i.o(); o.p();) {
                    var c = o.q();
                    a = a.id(Dr(t, r, c))
                }
                return a
            }

            function Dr(t, e, r) {
                var n;
                t: {
                    for (var a = 0, i = e.length; a < i;) {
                        var s = e[a];
                        if (a = a + 1 | 0, s.symbol === r.symbol) {
                            n = s;
                            break t
                        }
                    }
                    n = null
                }
                var u, l = null == n ? null : n.markPrice,
                    o = null == l ? null : (0, te.y8)(l),
                    c = null == o ? (0, te.y8)(r.markPrice) : o,
                    d = (0, Zt.yp)((0, Ce.b6)(r, c).ed());
                t: {
                    for (var f = 0, h = t.length; f < h;) {
                        var v = t[f];
                        if (f = f + 1 | 0, v.symbol === r.symbol) {
                            u = v;
                            break t
                        }
                    }
                    u = null
                }
                var m = null == u ? null : u.getRiskByNotional(d);
                if (null == m) return (0, Zt.tx)();
                var g = m;
                return (0, te.Yt)(d).kd((0, te.Yt)(g.bracketMaintenanceMarginRate)).jd((0, te.Yt)(g.cumFastMaintenanceAmount))
            }

            function Yr(t, e, r, n) {
                for (var a = (0, Zt.tx)(), i = (0, Pe.e)().v4(), s = 0, u = e.length; s < u;) {
                    var l = e[s];
                    s = s + 1 | 0, !(0, te.y8)(l.positionAmount).equals((0, Zt.tx)()) && (0, Te.iu)(t, l.collateral, !0) && i.l3(l)
                }
                for (var o = i.o(); o.p();) {
                    var c = o.q(),
                        d = a,
                        f = (0, Zt.yp)(Vr(c, r)),
                        h = (0, Zt.yp)(Hr(c, n)),
                        v = Math.min(f, h);
                    a = d.id((0, te.Yt)(v))
                }
                return a
            }

            function Kr(t, e) {
                var r, n = t + "USD";
                t: {
                    for (var a = 0, i = e.length; a < i;) {
                        var s = e[a];
                        if (a = a + 1 | 0, s.symbol === n) {
                            r = s;
                            break t
                        }
                    }
                    r = null
                }
                var u = null == r ? null : r.askRate,
                    l = null == u ? null : (0, te.y8)(u);
                return null == l ? (0, Zt.tx)() : l
            }

            function Gr(t, e) {
                var r, n = t + "USD";
                t: {
                    for (var a = 0, i = e.length; a < i;) {
                        var s = e[a];
                        if (a = a + 1 | 0, s.symbol === n) {
                            r = s;
                            break t
                        }
                    }
                    r = null
                }
                var u = null == r ? null : r.bidRate,
                    l = null == u ? null : (0, te.y8)(u);
                return null == l ? (0, Zt.tx)() : l
            }

            function Hr(t, e) {
                var r;
                t: {
                    for (var n = 0, a = e.length; n < a;) {
                        var i = e[n];
                        if (n = n + 1 | 0, i.symbol === t.symbol) {
                            r = i;
                            break t
                        }
                    }
                    r = null
                }
                var s = null == r ? null : r.close,
                    u = null == s ? null : (0, te.y8)(s),
                    l = null == u ? (0, te.y8)(t.markPrice) : u;
                return (0, te.y8)(t.positionAmount).kd(l.jd((0, te.y8)(t.entryPrice)))
            }
            dr = new(function() {
                if (cr === ie.I) {
                    class t {
                        calculateIMR(t) {
                            try {
                                return ee(t).hd()
                            } catch (r) {
                                if (r instanceof Error) {
                                    var e = r;
                                    throw se().nd("Abacus: " + e.message, e)
                                }
                                throw r
                            }
                        }
                        calculateAssumingPrice(t, e, r, n, a, i) {
                            var s;
                            try {
                                s = Ne(t, e, (0, te.y8)(r), (0, te.y8)(n), (0, te.y8)(a), (0, te.y8)(i)).hd()
                            } catch (l) {
                                if (l instanceof Error) {
                                    var u = l;
                                    throw se().nd("Abacus: " + u.message, u)
                                }
                                throw l
                            }
                            return s
                        }
                        calculateLiquidationPriceForSingleAssetMode(t, e, r, n) {
                            try {
                                return (0, qe.Mw)(t, e, r, n).hd()
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculateLiquidationPriceForSingleAssetModeV2(t, e, r, n) {
                            try {
                                return (0, qe.O7)(t, e, r, n).hd()
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculateLiquidationPriceForSingleAssetModeV3(t, e, r, n) {
                            try {
                                return Le(t, e, (0, te.y8)(r), n).hd()
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculateLiquidationPriceForMultiAssetModeV3(t, e, r, n, a) {
                            try {
                                return Ke(t, e, r, n, a).hd()
                            } catch (s) {
                                if (s instanceof Error) {
                                    var i = s;
                                    throw se().nd("Abacus: " + i.message, i)
                                }
                                throw s
                            }
                        }
                        calculateEstLiquidationPriceForPlaceOrder(t, e, r, n, a, i, s, u, l, o, c) {
                            try {
                                return function(t, e, r, n, a, i, s, u, l, o, c) {
                                    var d;
                                    if (null == l) d = null;
                                    else {
                                        var f;
                                        t: {
                                            for (var h = 0, v = l.length; h < v;) {
                                                var m = l[h];
                                                if (h = h + 1 | 0, m.symbol === t && m.positionSide === e) {
                                                    f = m;
                                                    break t
                                                }
                                            }
                                            f = null
                                        }
                                        d = f
                                    }
                                    var g = d,
                                        p = null == g ? null : g.positionAmount,
                                        b = null == p ? null : (0, te.y8)(p),
                                        y = null == b ? (0, Zt.tx)() : b,
                                        k = null == g ? null : g.entryPrice,
                                        x = null == k ? null : (0, te.y8)(k),
                                        _ = null == x ? (0, Zt.tx)() : x,
                                        S = ke(r),
                                        N = (0, Zt.Dx)(a.kd(s).kd(i), (0, te.y8)("1000000.0")),
                                        A = y.id(a.kd(S));
                                    if (null != g && !(0, te.y8)(g.positionAmount).equals((0, Zt.tx)()) && (y.qc((0, Zt.tx)()) > 0 && r.equals(_e()) || y.qc((0, Zt.tx)()) < 0 && r.equals(xe()))) {
                                        var I;
                                        if (y.ed().qc(a.ed()) > 0) I = o.jd(a.kd(S).kd(s.jd(_))).jd(N);
                                        else {
                                            if (y.ed().equals(a.ed())) return (0, Me.A)();
                                            g.entryPrice = s.hd(), I = o.id(y.kd(s.jd(_))).jd(N)
                                        }
                                        var q = I;
                                        return g.positionAmount = A.hd(), g.markPrice = g.entryPrice, We(c, g, l, q)
                                    }
                                    var P = g,
                                        w = null == l ? [] : l;
                                    if (null == P) {
                                        P = new((0, we.ox)());
                                        var j = (0, Qe.ek)(w);
                                        j.l3(P), w = (0, Ue.Tb)(j)
                                    }
                                    var R = P;
                                    R.isolated = u;
                                    var M = y.ed().kd(_).id(s.kd(a)).ld(A.ed());
                                    return R.entryPrice = M.hd(), R.positionAmount = A.hd(), R.collateral = n, R.positionSide = e, R.markPrice = R.entryPrice, R.symbol = t, We(c, P, w, o.jd(N))
                                }(t, e, r, n, (0, te.y8)(a), (0, te.y8)(i), (0, te.y8)(s), u, l, (0, te.y8)(o), c).hd()
                            } catch (f) {
                                if (f instanceof Error) {
                                    var d = f;
                                    throw se().nd("Abacus: " + d.message, d)
                                }
                                throw f
                            }
                        }
                        oi(t, e, r, n, a) {
                            try {
                                return mr(tr(t, (0, te.y8)(e), r, n, a))
                            } catch (s) {
                                if (s instanceof Error) {
                                    var i = s;
                                    throw se().nd("Abacus: " + i.message, i)
                                }
                                throw s
                            }
                        }
                        calculateAvailableForOrderInSingleAssetMode(t, e, r, n, a, i) {
                            return a = a !== ie.I && a, this.oi(t, e, r, n, a)
                        }
                        pi(t, e, r, n, a) {
                            try {
                                return mr(function(t, e, r, n, a) {
                                    a = a !== ie.I && a;
                                    var i = (0, Zt.tx)(),
                                        s = (0, Zt.tx)(),
                                        u = (0, Zt.tx)(),
                                        l = (0, Zt.tx)();
                                    if (null == r);
                                    else
                                        for (var o = 0, c = r.length; o < c;) {
                                            var d = r[o];
                                            o = o + 1 | 0;
                                            t: if ((0, Te.iu)(d.collateral, t, !0)) {
                                                var f = ee(d.leverage),
                                                    h = (0, Zt.iS)(d.markPrice),
                                                    v = (0, Zt.iS)(d.positionAmount),
                                                    m = v.kd((0, Je.p)().ni_1).kd(h),
                                                    g = (0, Zt.iS)(d.bidNotional),
                                                    p = (0, Zt.iS)(d.askNotional),
                                                    b = (0, Zt.dg)(m.id(g).ed(), m.jd(p).ed()).kd(f);
                                                if (d.isolated) {
                                                    var y = b.jd(h.kd(v.ed()).kd(f));
                                                    i = i.id(y)
                                                } else {
                                                    var k = (0, Zt.iS)(d.lastPrice);
                                                    k.qc((0, Zt.tx)()) <= 0 && (k = h);
                                                    var x = (0, Zt.iS)(d.entryPrice);
                                                    s = s.id(b), u = u.id((0, Zt.$C)(v.kd(h.jd(x)), v.kd(k.jd(x))))
                                                }
                                                if (a && !d.isolated) {
                                                    var _;
                                                    if (null == n) _ = null;
                                                    else {
                                                        var S;
                                                        e: {
                                                            for (var N = 0, A = n.length; N < A;) {
                                                                var I = n[N];
                                                                if (N = N + 1 | 0, I.symbol === d.symbol) {
                                                                    S = I;
                                                                    break e
                                                                }
                                                            }
                                                            S = null
                                                        }
                                                        _ = S
                                                    }
                                                    var q = null == _ ? null : _.getRiskByNotional((0, Zt.yp)(m.ed()));
                                                    if (null == q) break t;
                                                    var P = q,
                                                        w = (0, te.Yt)(P.bracketMaintenanceMarginRate),
                                                        j = (0, te.Yt)(P.cumFastMaintenanceAmount);
                                                    l = l.id(v.ed().kd(w).kd(h).jd(j))
                                                }
                                            }
                                        }
                                    var R, M = e.id(u).jd(s.id(i));
                                    if (a) {
                                        var C = (0, Zt.$C)(e.jd(i).jd(l), M);
                                        R = (0, Ee.Sd)(C, (0, Zt.dg)((0, Zt.tx)(), C))
                                    } else R = (0, Ee.Sd)(M, (0, Zt.dg)((0, Zt.tx)(), M));
                                    return R
                                }(t, (0, te.y8)(e), r, n, a))
                            } catch (s) {
                                if (s instanceof Error) {
                                    var i = s;
                                    throw se().nd("Abacus: " + i.message, i)
                                }
                                throw s
                            }
                        }
                        calculateAvailableForOrderInSingleAssetModeV2(t, e, r, n, a, i) {
                            return a = a !== ie.I && a, this.pi(t, e, r, n, a)
                        }
                        calculateAvailableForOrderInMultiMarginAssetMode(t, e, r, n) {
                            try {
                                return mr(function(t, e, r, n) {
                                    for (var a = (0, Zt.tx)(), i = (0, Zt.tx)(), s = (0, Pe.e)().v4(), u = 0, l = e.length; u < l;) {
                                        var o = e[u];
                                        u = u + 1 | 0, o.marginAvailable && s.l3(o)
                                    }
                                    for (var c = s.o(); c.p();) {
                                        var d = c.q(),
                                            f = d.asset,
                                            h = er(f, n);
                                        if (null != h) {
                                            var v, m = h,
                                                g = (0, te.nq)(m.bidRate),
                                                p = null == g ? Ze() : g,
                                                b = (0, te.nq)(m.askRate),
                                                y = null == b ? Ze() : b,
                                                k = (0, Zt.tx)(),
                                                x = (0, Zt.tx)();
                                            if (null == r) v = null;
                                            else {
                                                for (var _ = (0, Pe.e)().v4(), S = 0, N = r.length; S < N;) {
                                                    var A = r[S];
                                                    S = S + 1 | 0, (0, Te.iu)(A.collateral, f, !0) && !A.isolated && _.l3(A)
                                                }
                                                v = _
                                            }
                                            if (null == v);
                                            else
                                                for (var I = v.o(); I.p();) {
                                                    var q = I.q(),
                                                        P = ee(q.leverage),
                                                        w = (0, Zt.iS)(q.positionAmount).kd((0, Je.p)().ni_1).kd((0, Zt.iS)(q.markPrice)),
                                                        j = (0, Zt.dg)(w.id((0, Zt.iS)(q.bidNotional)).id((0, Zt.tx)()).ed(), w.jd((0, Zt.iS)(q.askNotional)).jd((0, Zt.tx)()).ed()).kd(P);
                                                    k = k.id(j), x = x.id((0, Zt.$C)((0, Zt.iS)(q.positionAmount).kd((0, Zt.iS)(q.markPrice).jd((0, te.IG)(q.entryPrice))), (0, Zt.iS)(q.positionAmount).kd((0, Zt.iS)(q.lastPrice).jd((0, Zt.iS)(q.entryPrice)))))
                                                }
                                            var R = (0, Zt.iS)(d.crossWalletBalance).id(x);
                                            a = a.id((0, Zt.$C)(R.kd(y), R.kd(p))), i = i.id(k.kd(y))
                                        }
                                    }
                                    var M = er(t, n),
                                        C = null == M ? null : M.askRate,
                                        T = null == C ? null : (0, te.nq)(C),
                                        E = null == T ? Ze() : T,
                                        L = a.jd(i).ld(E);
                                    return (0, Ee.Sd)(L, (0, Zt.dg)((0, Zt.tx)(), L))
                                }(t, e, r, n))
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculateAvailableForOrderInMultiMarginAssetModeV2(t, e, r, n) {
                            try {
                                return mr(function(t, e, r, n) {
                                    for (var a = (0, Zt.tx)(), i = (0, Zt.tx)(), s = (0, Pe.e)().v4(), u = 0, l = e.length; u < l;) {
                                        var o = e[u];
                                        u = u + 1 | 0, o.marginAvailable && s.l3(o)
                                    }
                                    for (var c = s.o(); c.p();) {
                                        var d = c.q(),
                                            f = d.asset,
                                            h = er(f, n);
                                        if (null != h) {
                                            var v, m = h,
                                                g = (0, te.nq)(m.bidRate),
                                                p = null == g ? Ze() : g,
                                                b = (0, te.nq)(m.askRate),
                                                y = null == b ? Ze() : b,
                                                k = (0, Zt.tx)(),
                                                x = (0, Zt.tx)();
                                            if (null == r) v = null;
                                            else {
                                                for (var _ = (0, Pe.e)().v4(), S = 0, N = r.length; S < N;) {
                                                    var A = r[S];
                                                    S = S + 1 | 0, (0, Te.iu)(A.collateral, f, !0) && !A.isolated && _.l3(A)
                                                }
                                                v = _
                                            }
                                            if (null == v);
                                            else
                                                for (var I = v.o(); I.p();) {
                                                    var q = I.q(),
                                                        P = ee(q.leverage),
                                                        w = (0, Zt.iS)(q.markPrice),
                                                        j = (0, Zt.iS)(q.positionAmount),
                                                        R = j.kd((0, Je.p)().ni_1).kd(w),
                                                        M = (0, Zt.iS)(q.bidNotional),
                                                        C = (0, Zt.iS)(q.askNotional),
                                                        T = (0, Zt.dg)(R.id(M).ed(), R.jd(C).ed()).kd(P);
                                                    k = k.id(T);
                                                    var E, L = (0, Zt.iS)(q.entryPrice),
                                                        O = (0, Zt.iS)(q.lastPrice),
                                                        F = null == (E = O.qc((0, Zt.tx)()) > 0 ? O : null) ? w : E;
                                                    x = x.id((0, Zt.$C)(j.kd(w.jd(L)), j.kd(F.jd(L))))
                                                }
                                            var z = (0, Zt.iS)(d.crossWalletBalance).id(x);
                                            a = a.id((0, Zt.$C)(z.kd(y), z.kd(p))), i = i.id(k.kd(y))
                                        }
                                    }
                                    var B = er(t, n),
                                        V = null == B ? null : B.askRate,
                                        U = null == V ? null : (0, te.nq)(V),
                                        D = null == U ? Ze() : U,
                                        Y = a.jd(i).ld(D);
                                    return (0, Ee.Sd)(Y, (0, Zt.dg)((0, Zt.tx)(), Y))
                                }(t, e, r, n))
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculateMaxQtyForOneWayMode(t, e, r, n, a, i, s, u, l, o, c) {
                            try {
                                return pr(t, e, r, n, (0, te.y8)(a), (0, te.y8)(i), (0, te.y8)(s), u, l, (0, te.y8)(o), (0, te.y8)(c)).hd()
                            } catch (f) {
                                if (f instanceof Error) {
                                    var d = f;
                                    throw se().nd("Abacus: " + d.message, d)
                                }
                                throw f
                            }
                        }
                        calculateMaxQtyForHedgeWayMode(t, e, r, n, a, i, s, u, l, o, c) {
                            try {
                                var d = br(t, e, r, (0, te.y8)(n), (0, te.y8)(a), (0, te.y8)(i), s, u, l, (0, te.y8)(o), (0, te.y8)(c)),
                                    f = d.fc(),
                                    h = d.gc();
                                return [f.hd(), h.hd()]
                            } catch (m) {
                                if (m instanceof Error) {
                                    var v = m;
                                    throw se().nd("Abacus: " + v.message, v)
                                }
                                throw m
                            }
                        }
                        calculateCostForOneWayMode(t, e, r, n, a, i, s, u, l) {
                            try {
                                return _r((0, te.y8)(t), (0, te.y8)(e), r, n, a, (0, te.y8)(i), (0, te.y8)(s), (0, te.y8)(u), l).hd()
                            } catch (c) {
                                if (c instanceof Error) {
                                    var o = c;
                                    throw se().nd("Abacus: " + o.message, o)
                                }
                                throw c
                            }
                        }
                        calculateCostForOneWayModeV2(t, e, r, n, a, i, s, u, l) {
                            try {
                                return xr((0, te.y8)(t), (0, te.y8)(e), r, n, a, i, (0, te.y8)(s), (0, te.y8)(u), l).hd()
                            } catch (c) {
                                if (c instanceof Error) {
                                    var o = c;
                                    throw se().nd("Abacus: " + o.message, o)
                                }
                                throw c
                            }
                        }
                        calculateCostForHedgeWayModeV2(t, e, r, n, a, i, s, u) {
                            try {
                                return Ar((0, te.y8)(t), (0, te.y8)(e), r, n, a, (0, te.y8)(i), (0, te.y8)(s), u).hd()
                            } catch (o) {
                                if (o instanceof Error) {
                                    var l = o;
                                    throw se().nd("Abacus: " + l.message, l)
                                }
                                throw o
                            }
                        }
                        calculateCostForHedgeWayMode(t, e, r, n, a, i, s, u) {
                            try {
                                return Ir((0, te.y8)(t), (0, te.y8)(e), r, n, (0, te.y8)(a), (0, te.y8)(i), (0, te.y8)(s), u).hd()
                            } catch (o) {
                                if (o instanceof Error) {
                                    var l = o;
                                    throw se().nd("Abacus: " + l.message, l)
                                }
                                throw o
                            }
                        }
                        calculateScaledCostForOneWayMode(t, e, r, n, a, i, s, u, l) {
                            try {
                                return function(t, e, r, n, a, i, s, u, l) {
                                    var o = (0, te.IG)("0"),
                                        c = 0,
                                        d = t.length - 1 | 0;
                                    if (c <= d)
                                        do {
                                            var f = c;
                                            c = c + 1 | 0, o = o.id(_r((0, te.y8)(t[f]), (0, te.y8)(e), r, n, a, (0, te.y8)(i[f]), (0, te.y8)(s), (0, te.y8)(u), l))
                                        } while (c <= d);
                                    return o
                                }(t, e, r, n, a, i, s, u, l).hd()
                            } catch (c) {
                                if (c instanceof Error) {
                                    var o = c;
                                    throw se().nd("Abacus: " + o.message, o)
                                }
                                throw c
                            }
                        }
                        calculateScaledCostForHedgeWayMode(t, e, r, n, a, i, s, u) {
                            try {
                                return function(t, e, r, n, a, i, s, u) {
                                    var l = (0, te.IG)("0"),
                                        o = 0,
                                        c = t.length - 1 | 0;
                                    if (o <= c)
                                        do {
                                            var d = o;
                                            o = o + 1 | 0, l = l.id(Ir((0, te.y8)(t[d]), (0, te.y8)(e), r, n, (0, te.y8)(a[d]), (0, te.y8)(i), (0, te.y8)(s), u))
                                        } while (o <= c);
                                    return l
                                }(t, e, r, n, a, i, s, u).hd()
                            } catch (o) {
                                if (o instanceof Error) {
                                    var l = o;
                                    throw se().nd("Abacus: " + l.message, l)
                                }
                                throw o
                            }
                        }
                        calculateScaledCostForOneWayModeV2(t, e, r, n, a, i, s, u) {
                            try {
                                return function(t, e, r, n, a, i, s, u) {
                                    var l = (0, Zt.tx)(),
                                        o = 0,
                                        c = t.length - 1 | 0;
                                    if (o <= c)
                                        do {
                                            var d = o;
                                            o = o + 1 | 0, l = l.id(xr((0, te.y8)(t[d]), (0, te.y8)(e), r, n, null, a, (0, te.y8)(i[d]), (0, te.y8)(s), u))
                                        } while (o <= c);
                                    return l
                                }(t, e, r, n, a, i, s, u).hd()
                            } catch (o) {
                                if (o instanceof Error) {
                                    var l = o;
                                    throw se().nd("Abacus: " + l.message, l)
                                }
                                throw o
                            }
                        }
                        calculateScaledCostForHedgeWayModeV2(t, e, r, n, a, i, s) {
                            try {
                                return function(t, e, r, n, a, i, s) {
                                    var u = (0, Zt.tx)(),
                                        l = 0,
                                        o = t.length - 1 | 0;
                                    if (l <= o)
                                        do {
                                            var c = l;
                                            l = l + 1 | 0, u = u.id(Ar((0, te.y8)(t[c]), e, r, null, n, (0, te.y8)(a[c]), i, s))
                                        } while (l <= o);
                                    return u
                                }(t, (0, te.y8)(e), r, n, a, (0, te.y8)(i), s).hd()
                            } catch (l) {
                                if (l instanceof Error) {
                                    var u = l;
                                    throw se().nd("Abacus: " + u.message, u)
                                }
                                throw l
                            }
                        }
                        calculateTPSLEstimatedPNL(t, e, r, n, a, i, s, u) {
                            try {
                                return Lr(t, (0, te.y8)(e), (0, te.y8)(r), null == n ? null : (0, te.y8)(n), null == a ? null : (0, te.y8)(a), (0, te.y8)(i), s, u).hd()
                            } catch (o) {
                                if (o instanceof Error) {
                                    var l = o;
                                    throw se().nd("Abacus: " + l.message, l)
                                }
                                throw o
                            }
                        }
                        qi(t, e, r, n) {
                            try {
                                return Or(t, (0, te.y8)(e), r, n).hd()
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculateMaxAddable(t, e, r, n, a) {
                            return r = r === ie.I ? "USDT" : r, this.qi(t, e, r, n)
                        }
                        calculateMaxRemovable(t, e, r) {
                            try {
                                return zr(t, ee(e), r).hd()
                            } catch (a) {
                                if (a instanceof Error) {
                                    var n = a;
                                    throw se().nd("Abacus: " + n.message, n)
                                }
                                throw a
                            }
                        }
                        calculateUnrealizedPNL(t, e, r) {
                            try {
                                return function(t, e, r) {
                                    return t.kd(e.jd(r))
                                }((0, te.y8)(t), (0, te.y8)(e), (0, te.y8)(r)).hd()
                            } catch (a) {
                                if (a instanceof Error) {
                                    var n = a;
                                    throw se().nd("Abacus: " + n.message, n)
                                }
                                throw a
                            }
                        }
                        calculateRoe(t, e, r, n) {
                            try {
                                return function(t, e, r, n) {
                                    var a = ee(n);
                                    return (0, Zt.Dx)(t, e.ed().kd(r).kd(a))
                                }((0, te.y8)(t), (0, te.y8)(e), (0, te.y8)(r), n).hd()
                            } catch (i) {
                                if (i instanceof Error) {
                                    var a = i;
                                    throw se().nd("Abacus: " + a.message, a)
                                }
                                throw i
                            }
                        }
                        calculatePositionMargin(t) {
                            try {
                                return function(t) {
                                    var e = ee(t.leverage);
                                    return t.isolated ? (0, te.y8)(t.isolatedWallet) : (0, te.y8)(t.positionAmount).ed().kd((0, te.y8)(t.markPrice)).kd(e)
                                }(t).hd()
                            } catch (r) {
                                if (r instanceof Error) {
                                    var e = r;
                                    throw se().nd("Abacus: " + e.message, e)
                                }
                                throw r
                            }
                        }
                        calculatePositionRiskRatio(t, e, r, n, a) {
                            try {
                                return Br(t, e, r, n, a).hd()
                            } catch (s) {
                                if (s instanceof Error) {
                                    var i = s;
                                    throw se().nd("Abacus: " + i.message, i)
                                }
                                throw s
                            }
                        }
                        calculateJointMarginRatio(t, e, r, n, a, i) {
                            try {
                                return function(t, e, r, n, a, i) {
                                    for (var s = (0, Zt.tx)(), u = (0, Zt.tx)(), l = (0, Pe.e)().v4(), o = 0, c = e.length; o < c;) {
                                        var d = e[o];
                                        o = o + 1 | 0, d.marginAvailable && l.l3(d)
                                    }
                                    for (var f = l.o(); f.p();) {
                                        var h = f.q();
                                        s = s.id(Ur(r, t, n, h.asset).kd(Kr(h.asset, a)));
                                        var v = (0, te.y8)(h.crossWalletBalance).id(Yr(h.asset, t, n, i)),
                                            m = Gr(h.asset, a).kd(v),
                                            g = Kr(h.asset, a).kd(v),
                                            p = u,
                                            b = (0, Zt.yp)(m),
                                            y = (0, Zt.yp)(g),
                                            k = Math.min(b, y);
                                        u = p.id((0, te.Yt)(k))
                                    }
                                    return (0, Zt.Dx)(s, u)
                                }(t, e, r, n, a, i).hd()
                            } catch (u) {
                                if (u instanceof Error) {
                                    var s = u;
                                    throw se().nd("Abacus: " + s.message, s)
                                }
                                throw u
                            }
                        }
                        calculate3DayRevenue(t, e) {
                            try {
                                return function(t, e) {
                                    return (0, te.y8)(t).ed().kd((0, te.y8)(e)).kd((0, te.Yt)(.5))
                                }(t, e).hd()
                            } catch (n) {
                                if (n instanceof Error) {
                                    var r = n;
                                    throw se().nd("Abacus: " + r.message, r)
                                }
                                throw n
                            }
                        }
                        calculate3DayRevenueAfterInterest(t, e, r) {
                            try {
                                return function(t, e, r) {
                                    return (0, te.y8)(t).ed().jd((0, te.y8)(r).kd((0, te.bK)(3))).kd((0, te.y8)(e)).kd((0, te.Yt)(.5))
                                }(t, e, r).hd()
                            } catch (a) {
                                if (a instanceof Error) {
                                    var n = a;
                                    throw se().nd("Abacus: " + n.message, n)
                                }
                                throw a
                            }
                        }
                        calculateNDayCumRateAfterInterest(t, e, r) {
                            try {
                                return function(t, e, r) {
                                    return (0, Zt.px)((0, te.y8)(t).ed().jd((0, te.y8)(e).kd((0, te.bK)(r))).kd((0, te.bK)(100)).kd((0, te.bK)(365)).kd((0, te.Yt)(.5)), (0, te.bK)(r))
                                }(t, e, r).hd()
                            } catch (a) {
                                if (a instanceof Error) {
                                    var n = a;
                                    throw se().nd("Abacus: " + n.message, n)
                                }
                                throw a
                            }
                        }
                        presentNotional(t) {
                            try {
                                return (0, Ce.u6)(t).hd()
                            } catch (r) {
                                if (r instanceof Error) {
                                    var e = r;
                                    throw se().nd("Abacus: " + e.message, e)
                                }
                                throw r
                            }
                        }
                    }(0, ae.F)(t, "UmAbacus"), cr = t
                }
                return cr
            }());
            var Qr = {
                    getInstance: function() {
                        return dr
                    }
                },
                Wr = r("VLe/");
            const $r = Qr.getInstance(),
                Xr = (0, Wr.b)($r.calculateUnrealizedPNL.bind($r), NaN, "UMupnl"),
                Jr = (0, Wr.b)($r.calculateRoe.bind($r), "0.00", "UMroe"),
                Zr = !1;
            var tn = r("bcaU");
            const en = t => {
                    const {
                        symbol: e,
                        initialLeverage: r,
                        gridInitialValue: n,
                        strategyUserId: i,
                        gridProfit: s,
                        isSubAccount: u,
                        fundingFee: l,
                        debugLog: o,
                        debugGridData: c,
                        totalAdjustmentAmount: d
                    } = t || {}, f = (0, zt.i)(e), h = (0, Tt.e)(e), {
                        unrealizedPnl: v
                    } = Jt({
                        symbol: e,
                        strategyUserId: i
                    }, {
                        enabled: !0 === h
                    }), {
                        unrealizedPnl: m
                    } = (({
                        symbol: t,
                        strategyUserId: e,
                        debugLog: r
                    }, {
                        enabled: n
                    } = {
                        enabled: !0
                    }) => {
                        const i = (0, zt.i)(t),
                            {
                                data: s = {}
                            } = (0, Ut.Q)(Zr, String(e)),
                            u = s[t],
                            {
                                data: l,
                                isLoading: o
                            } = Vt({
                                isCM: Zr,
                                strategyUserId: e,
                                symbol: t,
                                enabled: n
                            }),
                            c = l ? .positionAmount,
                            d = Number(Yt(t)),
                            f = Xr(String(c), String(d), String(l ? .entryPrice)),
                            h = Number(f),
                            v = f && c && u && d ? Number(Jr(f, String(c), String(d), u)) : 0,
                            m = 0 === Number(h) ? "" : Number(h) > 0 ? "buy" : "sell",
                            g = 0 === Number(h) ? "" : Number(h) > 0 ? "text-Buy" : "text-Sell",
                            p = Number(h) > 0 ? "+" : "",
                            b = (0, $t.kf)(h) ? `${(0,ct.RI)(h,i,!0)}` : Ot.Vs,
                            y = `${(100*v).toFixed(2)}%`,
                            k = JSON.stringify(l);
                        return (0, a.useEffect)((() => {
                            "function" !== typeof r || (0, $t.kf)(h) || r("widget_error", {
                                eventName: "useUMPnlRoe",
                                userId: `strategyUserId_${e}`,
                                type: "isCM_false",
                                symbol: t,
                                df_3: `positionSize_${c}_&_entryPrice_${l?.entryPrice}`,
                                df_4: `formattedPnl_${b}_&_unrealizedPnl_${h}`,
                                df_5: `abacusUPNL_${f}`,
                                df_7: `symbol_${t}`,
                                df_8: `curPosition_${k}`
                            })
                        }), [r, e, Zr, c, d, l ? .entryPrice, k, f, i, h, b, t]), {
                            isLoading: o,
                            unrealizedPnl: h,
                            formattedPnl: b,
                            pnlColor: m,
                            pnlSign: p,
                            ROEVal: y,
                            pnlColorClassName: g
                        }
                    })({
                        symbol: e,
                        strategyUserId: i,
                        debugLog: o
                    }, {
                        enabled: !1 === h
                    }), g = h ? v : m, p = (0, zt.i)(e, !0), b = u ? l : "0", y = (0, ct.tY)(g, Number(s), Number(b)).toNumber(), k = JSON.stringify(c);
                    if ((0, a.useEffect)((() => {
                            "function" !== typeof o || (0, $t.kf)(y) || o("widget_error", {
                                eventName: "useGridMatchedTotalProfit",
                                userId: `strategyUserId_${i}`,
                                symbol: e,
                                type: `isCM_${h}`,
                                total: `totalProfit_${y}`,
                                df_3: `cmUnrealizedPnl_${v}_&_umUnrealizedPnl_${m}`,
                                df_4: `pnlPrecision_${f}_&_marginPrecision_${p}`,
                                df_5: `gridDataStrategyUserId_${c?.strategyUserId}`,
                                df_7: `gridData_${k}`,
                                df_8: `gridProfit_${s}`
                            })
                        }), [o, i, h, v, m, f, p, e, s, y, c ? .strategyUserId, k]), !(0, $t.kf)(y)) return tn.q7;
                    const x = Number((0, ct.jL)(y, f, 3)),
                        _ = (0, ct.ZV)(x, f),
                        {
                            investedMargin: S
                        } = (0, Ft.E)({
                            gridInitialValue: n,
                            initialLeverage: r,
                            marginPrecision: p,
                            totalAdjustmentAmount: d
                        }),
                        N = Number(y) / S,
                        A = (0, $t.kf)(N) ? `${function(t,e=0,r){if(null==t||"undefined"===typeof t||Number.isNaN(t))return Ot.Vs;const n=(t=>{switch(t){case"floor":default:return 3;case"halfUp":return 4;case"ceil":return 2}})(r);return(0,ct.jL)(t,e,n)}(100*N,2,Number(y)>0?"floor":"ceil")}%` : Ot.Ff;
                    return {
                        pnl: y,
                        roundedPnl: x,
                        formattedPnl: _,
                        roi: N,
                        formattedRoi: A
                    }
                },
                rn = ({
                    strategyId: t,
                    strategyUserId: e,
                    symbol: r,
                    debugLog: n
                }) => {
                    const i = (0, Tt.e)(r),
                        {
                            data: s
                        } = ((t, e, r) => {
                            const n = (0, a.useCallback)((e => e ? .[t]), [t]),
                                {
                                    isCM: i
                                } = e,
                                s = (0, Et.X)(e, {
                                    select: n,
                                    enabled: Boolean(t) && "boolean" === typeof i,
                                    ...r || {}
                                });
                            return { ...s,
                                data: s ? .data || Lt
                            }
                        })(t, {
                            isCM: i
                        }),
                        {
                            gridInitialValue: u,
                            initialLeverage: l,
                            gridProfit: o,
                            isSubAccount: c,
                            fundingFee: d,
                            totalAdjustmentAmount: f
                        } = s;
                    return en({
                        symbol: r,
                        initialLeverage: l,
                        gridInitialValue: u,
                        strategyUserId: e,
                        isSubAccount: c,
                        fundingFee: d,
                        gridProfit: o,
                        totalAdjustmentAmount: f,
                        debugLog: n,
                        debugGridData: s
                    })
                };
            var nn = r("QdPh"),
                an = r("trXm"),
                sn = r("Bdbj"),
                un = r("X6af");
            const ln = ({
                direction: t,
                leverage: e
            }) => {
                const {
                    t: r
                } = (0, an.Y_)(), i = (0, a.useMemo)((() => t ? (0, un.DG)(t) : null), [t]);
                if (!i) return null;
                const s = (0, n.jsxs)(n.Fragment, {
                    children: [r(i, {
                        defaultValue: i
                    }), e && ` ${e}x`]
                });
                return (0, n.jsxs)(d.I, {
                    useReactPopper: !0,
                    tooltips: r(sn.s3, {
                        defaultValue: sn.om
                    }),
                    children: ["LONG" === i && (0, n.jsx)(nt.A, {
                        variant: "success",
                        size: "small",
                        label: s
                    }), "SHORT" === i && (0, n.jsx)(nt.A, {
                        variant: "error",
                        size: "small",
                        label: s
                    }), "NEUTRAL" === i && (0, n.jsx)(nt.A, {
                        variant: "info",
                        size: "small",
                        label: s
                    })]
                })
            };
            var on, cn = r("fc5I"),
                dn = r.n(cn),
                fn = r("UiLJ"),
                hn = r("oSg3"),
                vn = function(t) {
                    var e = t.symbol,
                        r = t.strategyId,
                        a = t.strategyUserId,
                        i = (0, jt.o)(e),
                        u = rn({
                            strategyId: r,
                            strategyUserId: a,
                            symbol: e
                        }),
                        l = u.formattedPnl,
                        o = u.pnl,
                        c = (0, lt.A)(o, "text-PrimaryText", !0),
                        d = ot(o);
                    return (0, n.jsx)(s.Ay, {
                        className: p()("typography-subtitle3", c),
                        children: "".concat(d).concat(l, " ").concat(i)
                    })
                },
                mn = function(t) {
                    var e = t.symbol,
                        r = t.strategyId,
                        i = t.strategyUserId,
                        u = t.onRoiChange,
                        l = rn({
                            strategyId: r,
                            strategyUserId: i,
                            symbol: e
                        }),
                        o = l.formattedRoi,
                        c = l.roi,
                        d = (0, lt.A)(c, "text-PrimaryText", !0),
                        f = Number(c.toFixed(4)),
                        h = ot(c);
                    return (0, a.useEffect)((function() {
                        u(r, f)
                    }), [r, f, u]), (0, n.jsx)(s.Ay, {
                        className: p()("typography-subtitle3", d),
                        children: "".concat(h).concat(o)
                    })
                },
                gn = function(t, e) {
                    var r = (0, h.HH)().t,
                        i = (0, h.ud)().getI18n,
                        u = (0, Rt.h)(),
                        l = function(t) {
                            var e = (0, E.useQueryClient)();
                            return (0, E.useMutation)((function(t) {
                                return (0, fn.Ow)(t)
                            }), {
                                onSuccess: (0, U._)(Y().mark((function r() {
                                    return Y().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (!t) {
                                                    r.next = 2;
                                                    break
                                                }
                                                return r.abrupt("return", e.invalidateQueries(t));
                                            case 2:
                                                return r.abrupt("return", dn());
                                            case 3:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            }).mutate
                        }(Mt.Bz.OPEN_GRIDS_V2(Boolean(!1))),
                        o = function(t) {
                            var e = (0, E.useQueryClient)();
                            return (0, E.useMutation)((function(t) {
                                return (0, hn.uo)(t)
                            }), {
                                onSuccess: (0, U._)(Y().mark((function r() {
                                    return Y().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (!t) {
                                                    r.next = 2;
                                                    break
                                                }
                                                return r.abrupt("return", e.invalidateQueries(t));
                                            case 2:
                                                return r.abrupt("return", dn());
                                            case 3:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            }).mutate
                        }(Mt.Bz.OPEN_GRIDS_V2(Boolean(!0))),
                        c = (0, a.useState)({}),
                        d = c[0],
                        f = c[1],
                        g = (0, a.useCallback)((function(t, e) {
                            f((function(r) {
                                return (0, m._)((0, v._)({}, r), (0, Z._)({}, t, e))
                            }))
                        }), []),
                        p = t;
                    return (0, a.useMemo)((function() {
                        return p && 0 !== p.length ? p.filter((function(t) {
                            return "WORKING" === t.strategyStatus
                        })).map((function(t) {
                            var a, c = t.symbol,
                                f = t.direction,
                                h = t.triggerTime,
                                v = t.sharing,
                                m = t.strategyId,
                                p = t.strategyUserId,
                                b = (0, Ct.S)(u[c] || {}, i).symbol,
                                y = null === u || void 0 === u || null === (a = u[c]) || void 0 === a ? void 0 : a.isCM,
                                k = h ? (0, st.a)((0, st.e)(e - h), r) : q.Vs;
                            return {
                                ROI_SORT_VALUE: d[m] || 0,
                                market: (0, n.jsxs)(s.Ay, {
                                    className: "flex items-center text-center gap-[2px]",
                                    children: [(0, n.jsx)(s.Ay, {
                                        className: "typography-subtitle2",
                                        children: b
                                    }), (0, n.jsx)(nn.t, {
                                        symbol: c
                                    }), (0, n.jsx)(ln, {
                                        direction: (0, un.Ot)(f)
                                    }), (0, n.jsx)(it, {
                                        trailingUp: null === t || void 0 === t ? void 0 : t.trailingUp,
                                        trailingDown: null === t || void 0 === t ? void 0 : t.trailingDown
                                    })]
                                }),
                                runningTime: (0, n.jsx)(s.Ay, {
                                    className: "typography-subtitle3 text-PrimaryText",
                                    children: k
                                }),
                                ROI: (0, n.jsx)(mn, {
                                    symbol: c,
                                    strategyId: Number(m),
                                    strategyUserId: p,
                                    onRoiChange: g
                                }),
                                PNL: (0, n.jsx)(vn, {
                                    symbol: c,
                                    strategyId: Number(m),
                                    strategyUserId: p
                                }),
                                action: (0, n.jsx)(tt.A, {
                                    size: "small",
                                    checked: Boolean(v),
                                    onChange: function(t) {
                                        (y ? o : l)({
                                            sharing: t,
                                            symbol: c,
                                            strategyId: m
                                        })
                                    }
                                })
                            }
                        })).sort((function(t, e) {
                            return Number(e.ROI_SORT_VALUE) - Number(t.ROI_SORT_VALUE)
                        })) : null
                    }), [p, e, i, g, l, o, u, d, r])
                },
                pn = r("2qpU"),
                bn = (on = {}, (0, Z._)(on, q.t2, "isSpotAllDisplay"), (0, Z._)(on, q.$S, "isFuturesAllDisplay"), on),
                yn = function(t) {
                    var e = t.fieldName,
                        r = t.onChangeEvent,
                        i = t.defaultValue,
                        s = (0, k.as)({
                            name: e
                        }).field,
                        u = s.value,
                        l = s.onChange,
                        o = (0, a.useCallback)((function(t) {
                            r(t), l(t)
                        }), [l, r]);
                    return void 0 !== i && (0, n.jsx)(pn.A, {
                        value: e,
                        defaultChecked: i,
                        checked: Boolean(u),
                        onChange: function() {
                            return o(!u)
                        }
                    })
                },
                kn = function(t) {
                    var e = t.tab,
                        r = (0, h.HH)().t,
                        i = (0, k.xW)(),
                        u = i.getValues,
                        l = i.setValue,
                        o = bn[e],
                        c = e === q.t2 ? "spotGrid" : "futureGrid",
                        f = function() {
                            var t = (0, E.useQuery)([Q.t5.getRankingDisplay], (function() {
                                    return (0, K.ow)()
                                }), {
                                    refetchOnMount: !1
                                }),
                                e = t.data,
                                r = t.isLoading,
                                n = t.refetch;
                            return {
                                data: e,
                                error: t.error,
                                isLoading: r,
                                refetch: n
                            }
                        }(),
                        v = f.data,
                        m = function() {
                            var t = (0, E.useQueryClient)();
                            return {
                                mutate: (0, E.useMutation)((function(t) {
                                    return (0, K.NJ)(t)
                                }), {
                                    onSuccess: (0, U._)(Y().mark((function e() {
                                        return Y().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.abrupt("return", t.invalidateQueries([Q.t5.getRankingDisplay]));
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))
                                }).mutate
                            }
                        }().mutate,
                        g = null === v || void 0 === v ? void 0 : v.data;
                    (0, a.useEffect)((function() {
                        g && (l(bn[q.t2], g.spotGrid), l(bn[q.$S], g.futureGrid))
                    }), [g, l]);
                    var p = (0, a.useCallback)((function(t) {
                        var e = u(),
                            r = {
                                spotGrid: e.isSpotAllDisplay,
                                futureGrid: e.isFuturesAllDisplay
                            };
                        r[c] = t, m(r)
                    }), [u, c, m]);
                    return (0, n.jsx)(d.I, {
                        tooltips: r("landingPage-rankSetting-remindText", {
                            defaultValue: "You can still set participation ranking for each order separately."
                        }),
                        useReactPopper: !0,
                        placement: "top",
                        arrow: !0,
                        className: "cursor-help",
                        children: (0, n.jsxs)(b.A, {
                            className: "mb-[20px] items-center",
                            children: [g && (0, n.jsx)(yn, {
                                defaultValue: g[c],
                                fieldName: o,
                                onChangeEvent: p
                            }), (0, n.jsx)(s.Ay, {
                                className: "ml-[4px] typography-body3",
                                children: r("landingPage-rankingSetting-checkboxContent", {
                                    defaultValue: "All strategy orders participate in the ranking by default."
                                })
                            })]
                        })
                    })
                },
                xn = function() {
                    var t = (0, f.XY)().t,
                        e = (0, M.Q)().isMobile,
                        r = z({
                            select: B,
                            ...{
                                refetchInterval: 6e4
                            } || {}
                        }),
                        a = r.data,
                        i = r.isLoading,
                        u = r.error,
                        l = r.refetch,
                        o = r.dataUpdatedAt,
                        c = V(e),
                        d = wt(a, o);
                    return u ? (0, n.jsx)(J, {
                        onRefresh: l
                    }) : i ? (0, n.jsx)(C.A, {
                        className: "w-full h-full"
                    }) : 0 !== (null === d || void 0 === d ? void 0 : d.length) || i ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(kn, {
                            tab: "spot"
                        }), (0, n.jsx)(s.Ay, {
                            className: "space-y-[20px]",
                            children: null === d || void 0 === d ? void 0 : d.map((function(t, e) {
                                var r = t.market,
                                    a = t.action,
                                    i = t.ROI,
                                    u = t.PNL,
                                    l = t.runningTime;
                                return (0, n.jsxs)(s.Ay, {
                                    className: "p-[12px] border-[1px] border-solid border-Line rounded-[16px]",
                                    children: [(0, n.jsxs)(b.A, {
                                        className: "justify-between mb-[12px] items-center",
                                        children: [r, a]
                                    }), (0, n.jsxs)(b.A, {
                                        className: "justify-between items-center",
                                        children: [(0, n.jsxs)(s.Ay, {
                                            children: [(0, n.jsx)(s.Ay, {
                                                className: "typography-caption1",
                                                children: c.rankSettingColumns.ROI
                                            }), i]
                                        }), (0, n.jsxs)(s.Ay, {
                                            children: [(0, n.jsxs)(s.Ay, {
                                                className: "typography-caption1",
                                                children: [" ", c.rankSettingColumns.PNL]
                                            }), u]
                                        }), (0, n.jsxs)(s.Ay, {
                                            children: [(0, n.jsx)(s.Ay, {
                                                className: "typography-caption1",
                                                children: c.rankSettingColumns.runningTime
                                            }), (0, n.jsx)(s.Ay, {
                                                children: l
                                            })]
                                        })]
                                    })]
                                }, e)
                            }))
                        })]
                    }) : (0, n.jsx)(T.A, {
                        className: "h-full justify-center",
                        children: t("landingPage-strategy-no-results", {
                            defaultValue: "No results"
                        })
                    })
                },
                _n = function(t) {
                    var e = t.strategyTypeNumber,
                        r = (0, M.Q)().isMobile,
                        a = (0, f.XY)().t,
                        i = function(t) {
                            var e = (0, W.nH)(),
                                r = (0, G.B)({
                                    isCM: t === H.J.FUTURES_GRID_CM
                                }, {
                                    enabled: Boolean(e)
                                }),
                                n = r.data,
                                a = r.dataUpdatedAt,
                                i = r.error,
                                s = r.isLoading;
                            return {
                                data: n,
                                error: i,
                                dataUpdatedAt: a,
                                refetch: r.refetch,
                                isLoading: s
                            }
                        }(e),
                        u = i.data,
                        l = i.error,
                        o = i.dataUpdatedAt,
                        c = i.refetch,
                        d = i.isLoading,
                        h = gn(u, o),
                        v = V(r);
                    return l ? (0, n.jsx)(J, {
                        onRefresh: c
                    }) : d ? (0, n.jsx)(C.A, {
                        className: "w-full h-full"
                    }) : h || d ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(kn, {
                            tab: "futures"
                        }), (0, n.jsx)(s.Ay, {
                            className: "space-y-[20px]",
                            children: null === h || void 0 === h ? void 0 : h.map((function(t, e) {
                                var r = t.market,
                                    a = t.action,
                                    i = t.ROI,
                                    u = t.PNL,
                                    l = t.runningTime;
                                return (0, n.jsxs)(s.Ay, {
                                    className: "p-[12px] border-[1px] border-solid border-Line rounded-[16px]",
                                    children: [(0, n.jsxs)(b.A, {
                                        className: "justify-between mb-[12px] items-center",
                                        children: [r, a]
                                    }), (0, n.jsxs)(b.A, {
                                        className: "justify-between items-center",
                                        children: [(0, n.jsxs)(s.Ay, {
                                            children: [(0, n.jsx)(s.Ay, {
                                                className: "typography-caption1",
                                                children: v.rankSettingColumns.ROI
                                            }), i]
                                        }), (0, n.jsxs)(s.Ay, {
                                            children: [(0, n.jsx)(s.Ay, {
                                                className: "typography-caption1",
                                                children: v.rankSettingColumns.PNL
                                            }), u]
                                        }), (0, n.jsxs)(s.Ay, {
                                            children: [(0, n.jsx)(s.Ay, {
                                                className: "typography-caption1",
                                                children: v.rankSettingColumns.runningTime
                                            }), (0, n.jsx)(s.Ay, {
                                                children: l
                                            })]
                                        })]
                                    })]
                                }, e)
                            }))
                        })]
                    }) : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(T.A, {
                            className: "h-full justify-center",
                            children: a("landingPage-strategy-no-results", {
                                defaultValue: "No results"
                            })
                        })
                    })
                },
                Sn = r("dcyq"),
                Nn = r("72g6");

            function An(t, e) {
                switch (t) {
                    case q.Sn:
                        return (0, n.jsx)(xn, {});
                    case q.us:
                        return (0, n.jsx)(_n, {
                            strategyTypeNumber: e
                        });
                    default:
                        return null
                }
            }
            var In = function(t) {
                    var e = t.tab,
                        r = (0, w.s)(),
                        i = (0, a.useState)(!1),
                        u = i[0],
                        l = i[1],
                        o = r(e),
                        c = (0, x.i)(new Date(o), "yyyy-MM-dd hh:mm:ss"),
                        d = (0, (0, h.HH)().t)("landingPage-rankingSetting-content", {
                            defaultValue: "All your strategy orders participate in the ranking in the strategy pool by default. Once disabled, the strategy order will not be displayed in the strategy pool when the ranking data is updated next time. Ranking Data refreshes hourly and is last updated at {{lastRefreshTime}}",
                            lastRefreshTime: c
                        });
                    return o > 0 && (0, n.jsxs)(b.A, {
                        className: "typography-tertiaryNum3 text-TertiaryText items-end",
                        children: [(0, n.jsx)(s.Ay, {
                            className: p()({
                                "line-clamp-4": u,
                                "line-clamp-1": !u
                            }),
                            children: d
                        }), (0, n.jsxs)(s.Ay, {
                            className: "w-[16px] h-[16px] cursor-pointer",
                            children: [!u && (0, n.jsx)(A, {
                                className: "text-[16px]",
                                onClick: function() {
                                    l(!0)
                                }
                            }), u && (0, n.jsx)(I, {
                                className: "text-[16px]",
                                onClick: function() {
                                    l(!1)
                                }
                            })]
                        })]
                    })
                },
                qn = [q.Sn, q.us],
                Pn = function(t) {
                    var e = t.strategyTypeNumber,
                        r = t.tab,
                        a = (0, k.mN)();
                    return (0, n.jsx)(k.Op, (0, m._)((0, v._)({}, a), {
                        children: An(r, e)
                    }))
                },
                wn = (0, a.forwardRef)((function(t, e) {
                    var r = t.defaultStrategyType,
                        i = (0, a.useState)(!1),
                        u = i[0],
                        l = i[1];
                    (0, a.useImperativeHandle)(e, (function() {
                        return {
                            openModal: function() {
                                l(!0)
                            }
                        }
                    }));
                    var o = (0, a.useState)(2),
                        c = o[0],
                        d = o[1],
                        f = (0, h.HH)().t,
                        v = (0, h.I7)(),
                        m = (0, _.L)({
                            currency: v
                        }).checkIsValidOption,
                        g = m(R),
                        p = m(j),
                        k = qn.filter((function(t) {
                            return function(t) {
                                switch (t) {
                                    case q.Sn:
                                        return p;
                                    case q.us:
                                        return g;
                                    default:
                                        return !0
                                }
                            }(t)
                        }))[0],
                        x = function(t) {
                            switch (t) {
                                case q.us:
                                    return 1;
                                case q.Sn:
                                default:
                                    return 0
                            }
                        }(r || k),
                        S = (0, a.useState)(x),
                        N = S[0],
                        A = S[1],
                        I = 0 === N ? q.Sn : q.us,
                        w = (0, n.jsxs)(s.Ay, {
                            children: [(0, n.jsx)(In, {
                                tab: I
                            }), (0, n.jsxs)(b.A, {
                                className: "mt-[20px] mb-[20px] relative",
                                children: [(0, n.jsxs)(y.A, {
                                    fontSizeType: Sn.I.extraSmall,
                                    lazy: !0,
                                    variant: "primary-gray",
                                    selectedIndex: N,
                                    onChange: function(t) {
                                        0 === t && d(2), A(t)
                                    },
                                    children: [p && (0, n.jsx)(y.A.TabPane, {
                                        tabNode: f("landingPage-rankingSetting-SpotGridTab", {
                                            defaultValue: "Spot Grid"
                                        })
                                    }, 0), g && (0, n.jsx)(y.A.TabPane, {
                                        tabNode: f("landingPage-rankingSetting-FuturesGridTab", {
                                            defaultValue: "Futures Grid"
                                        })
                                    }, 1)]
                                }), 1 === N && g && (0, n.jsx)(Nn.Y, {
                                    strategyTypeNumber: c,
                                    className: "[&_.bn-select-field]:h-[32px]",
                                    onChange: d
                                })]
                            })]
                        });
                    return (0, n.jsxs)(P.X, {
                        hideClose: !1,
                        dialogContentClassName: "max-h-[640px] h-[400px] pt-[0]",
                        modalSize: "middle",
                        isVisible: u,
                        onClose: function() {
                            return l(!1)
                        },
                        title: (0, n.jsx)(s.Ay, {
                            className: "typography-subtitle1 md:typography-headline5 mb-[16px] md:mb-[24px] text-PrimaryText",
                            children: f("landingPage-rankingSetting-title", {
                                defaultValue: "Ranking Settings"
                            })
                        }),
                        children: [w, (0, n.jsx)(Pn, {
                            strategyTypeNumber: c,
                            tab: I
                        })]
                    })
                })),
                jn = r("nK1b"),
                Rn = function(t) {
                    var e = t.strategyType,
                        r = (0, f.XY)().t,
                        i = (0, h.Qs)().isMobile,
                        u = (0, a.useRef)({
                            openModal: function() {}
                        }),
                        l = (0, c.nE)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(d.I, {
                            arrow: !0,
                            offset: 12,
                            placement: i ? "left" : "top",
                            tooltips: r("landingPage-rankingSetting-title", {
                                defaultValue: "Ranking Setting"
                            }),
                            enterDelayTime: 0,
                            trigger: "hover",
                            variant: "gray",
                            className: "ml-[24px]",
                            children: (0, n.jsx)(s.Ay, {
                                className: "cursor-pointer",
                                onClick: function() {
                                    l(jn.ll.click, {
                                        $element_id: "settings",
                                        df_source: jn.vV[e]
                                    }), u.current.openModal()
                                },
                                children: (0, n.jsx)(o, {
                                    className: "text-[24px] text-PrimaryText"
                                })
                            })
                        }), (0, n.jsx)(wn, {
                            ref: u,
                            defaultStrategyType: e
                        })]
                    })
                };
            const Mn = (0, a.memo)(Rn)
        },
        "72g6": (t, e, r) => {
            "use strict";
            r.d(e, {
                Y: () => o
            });
            var n = r("hrAD"),
                a = r("mXdx"),
                i = r("DTvD"),
                s = r("ORvS"),
                u = r("Bdbj"),
                l = r("WLZf"),
                o = function(t) {
                    var e = t.className,
                        r = t.strategyTypeNumber,
                        o = t.onChange,
                        c = (0, l.X_)().t,
                        d = (0, i.useMemo)((function() {
                            return u.Bx.STRATEGY_TYPE_OPTIONS.map((function(t) {
                                return {
                                    children: c(t.name, t.tOptions),
                                    value: t.value,
                                    optionCheckIcon: !0
                                }
                            }))
                        }), [c]);
                    return (0, a.jsx)(s.A, {
                        className: e,
                        size: "middle",
                        type: "single",
                        variant: "auto",
                        emptyText: c("landingPage-strategy-no-results", {
                            defaultValue: "No results"
                        }),
                        value: ["".concat(r)],
                        onChange: function(t) {
                            var e = null === t || void 0 === t ? void 0 : t[0];
                            o(Number(e))
                        },
                        renderFn: function(t) {
                            var e, r = t.selects,
                                n = t.options,
                                a = null === r || void 0 === r ? void 0 : r[0];
                            return null === (e = n.find((function(t) {
                                return t.value === a
                            }))) || void 0 === e ? void 0 : e.children
                        },
                        options: d,
                        useReactPopper: !0,
                        children: d.map((function(t) {
                            return (0, a.jsx)(s.A.Option, (0, n._)({}, t), t.value)
                        }))
                    })
                }
        },
        s2HK: (t, e, r) => {
            var n = r("Rj8A"),
                a = r("DS4t"),
                i = r("AWd0"),
                s = r("Q2Vm"),
                u = n.isFinite,
                l = Math.min;
            t.exports = function(t) {
                var e = Math[t];
                return function(t, r) {
                    if (t = i(t), (r = null == r ? 0 : l(a(r), 292)) && u(t)) {
                        var n = (s(t) + "e").split("e"),
                            o = e(n[0] + "e" + (+n[1] + r));
                        return +((n = (s(o) + "e").split("e"))[0] + "e" + (+n[1] - r))
                    }
                    return e(t)
                }
            }
        },
        "+jcl": (t, e, r) => {
            var n = r("s2HK")("ceil");
            t.exports = n
        },
        "5rag": (t, e, r) => {
            "use strict";
            r.d(e, {
                A: () => s
            });
            var n, a, i = r("2Siz");

            function s() {
                return a || (a = !0, n = (0, i.tx)()), n
            }
        },
        noRI: (t, e, r) => {
            "use strict";
            r.d(e, {
                Lq: () => k,
                hR: () => x,
                jh: () => _,
                mm: () => S,
                z6: () => y
            });
            var n, a, i, s, u, l = r("96qr"),
                o = r("LO/3"),
                c = r("onyb"),
                d = r("6n23"),
                f = r("yCNW"),
                h = r("CzUG"),
                v = r("2Siz"),
                m = r("68PZ"),
                g = r("w3mb"),
                p = r("BTXI"),
                b = Math.imul;

            function y() {
                if (n === l.I) {
                    class t {
                        constructor(t, e) {
                            t = t === l.I ? "" : t, e = e === l.I ? [] : e, this.symbol = t, this.riskBrackets = e
                        }
                        zd() {
                            return this.symbol
                        }
                        cf() {
                            return this.riskBrackets
                        }
                        getRiskByNotional(t) {
                            var e, r = this.riskBrackets;
                            t: {
                                var n = r.length - 1 | 0;
                                if (0 <= n)
                                    do {
                                        var a = n;
                                        n = n + -1 | 0;
                                        var i = r[a];
                                        if (t >= i.bracketNotionalFloor && t <= i.bracketNotionalCap) {
                                            e = i;
                                            break t
                                        }
                                    } while (0 <= n);e = null
                            }
                            var s = e;
                            if (null == s) {
                                var u = this.getLastSeqRisk();
                                if (t >= u.bracketNotionalCap) return u
                            }
                            return s
                        }
                        getRiskByNotionalV3(t) {
                            var e, r = this.riskBrackets;
                            t: {
                                var n = r.length - 1 | 0;
                                if (0 <= n)
                                    do {
                                        var a = n;
                                        n = n + -1 | 0;
                                        var i = r[a];
                                        if (i.bracketNotionalFloor < t && t <= i.bracketNotionalCap) {
                                            e = i;
                                            break t
                                        }
                                    } while (0 <= n);e = null
                            }
                            var s = e;
                            if (null == s) {
                                var u = this.getLastSeqRisk();
                                if (t > u.bracketNotionalCap) return u
                            }
                            return s
                        }
                        getFirstSeqRisk() {
                            var t = (0, o.OP)(this.riskBrackets);
                            if (null == t) return k().DEFAULT;
                            for (var e = t, r = this.riskBrackets, n = 0, a = r.length; n < a;) {
                                var i = r[n];
                                n = n + 1 | 0, e = i.bracketSeq <= e.bracketSeq ? i : e
                            }
                            return e
                        }
                        getLastSeqRisk() {
                            var t = (0, o.OP)(this.riskBrackets);
                            if (null == t) return k().DEFAULT;
                            for (var e = t, r = this.riskBrackets, n = 0, a = r.length; n < a;) {
                                var i = r[n];
                                n = n + 1 | 0, e = i.bracketSeq >= e.bracketSeq ? i : e
                            }
                            return e
                        }
                        getRiskBySeq(t) {
                            var e, r = this.riskBrackets;
                            t: {
                                var n = r.length - 1 | 0;
                                if (0 <= n)
                                    do {
                                        var a = n;
                                        n = n + -1 | 0;
                                        var i = r[a];
                                        if (i.bracketSeq === t) {
                                            e = i;
                                            break t
                                        }
                                    } while (0 <= n);e = null
                            }
                            return e
                        }
                        getRiskByLeverage(t) {
                            var e, r = this.riskBrackets;
                            t: {
                                var n = r.length - 1 | 0;
                                if (0 <= n)
                                    do {
                                        var a = n;
                                        n = n + -1 | 0;
                                        var i = r[a];
                                        if (t > i.minOpenPosLeverage && t < i.maxOpenPosLeverage || t === i.minOpenPosLeverage || t === i.maxOpenPosLeverage) {
                                            e = i;
                                            break t
                                        }
                                    } while (0 <= n);e = null
                            }
                            return e
                        }
                        getMaxSeq() {
                            for (var t = 0, e = this.riskBrackets, r = 0, n = e.length; r < n;) {
                                var a = e[r];
                                r = r + 1 | 0, t = a.bracketSeq > t ? a.bracketSeq : t
                            }
                            return t
                        }
                        fc() {
                            return this.symbol
                        }
                        gc() {
                            return this.riskBrackets
                        }
                        df(t, e) {
                            return new(y())(t, e)
                        }
                        copy(t, e, r) {
                            return t = t === l.I ? this.symbol : t, e = e === l.I ? this.riskBrackets : e, this.df(t, e)
                        }
                        toString() {
                            return "FuturesBracket(symbol=" + this.symbol + ", riskBrackets=" + (0, c.no)(this.riskBrackets) + ")"
                        }
                        hashCode() {
                            var t = (0, c.HR)(this.symbol);
                            return t = b(t, 31) + (0, c.gP)(this.riskBrackets) | 0
                        }
                        equals(t) {
                            if (this === t) return !0;
                            if (!(t instanceof y())) return !1;
                            var e = t instanceof y() ? t : (0, d.XR)();
                            return this.symbol === e.symbol && !!(0, c.mR)(this.riskBrackets, e.riskBrackets)
                        }
                    }(0, f.mK)(t, "FuturesBracket", y), n = t
                }
                return n
            }

            function k() {
                return i === l.I && new(function() {
                    if (a === l.I) {
                        class t {
                            constructor() {
                                i = this, this.DEFAULT = new(x())
                            }
                            ef() {
                                return this.DEFAULT
                            }
                        }(0, f.cA)(t), a = t
                    }
                    return a
                }()), i
            }

            function x() {
                if (s === l.I) {
                    class t {
                        constructor(t, e, r, n, a, i, s, u) {
                            k(), t = t === l.I ? 0 : t, e = e === l.I ? 0 : e, r = r === l.I ? 0 : r, n = n === l.I ? 1 : n, a = a === l.I ? 0 : a, i = i === l.I ? 0 : i, s = s === l.I ? 0 : s, u = u === l.I ? 0 : u, this.bracketMaintenanceMarginRate = t, this.bracketNotionalCap = e, this.bracketNotionalFloor = r, this.bracketSeq = n, this.cumFastMaintenanceAmount = a, this.fastMaintenanceAmount = i, this.maxOpenPosLeverage = s, this.minOpenPosLeverage = u
                        }
                        ff() {
                            return this.bracketMaintenanceMarginRate
                        }
                        gf() {
                            return this.bracketNotionalCap
                        }
                        hf() {
                            return this.bracketNotionalFloor
                        }
                        if () {
                            return this.bracketSeq
                        }
                        jf() {
                            return this.cumFastMaintenanceAmount
                        }
                        kf() {
                            return this.fastMaintenanceAmount
                        }
                        lf() {
                            return this.maxOpenPosLeverage
                        }
                        mf() {
                            return this.minOpenPosLeverage
                        }
                        fc() {
                            return this.bracketMaintenanceMarginRate
                        }
                        gc() {
                            return this.bracketNotionalCap
                        }
                        oc() {
                            return this.bracketNotionalFloor
                        }
                        je() {
                            return this.bracketSeq
                        }
                        ke() {
                            return this.cumFastMaintenanceAmount
                        }
                        le() {
                            return this.fastMaintenanceAmount
                        }
                        me() {
                            return this.maxOpenPosLeverage
                        }
                        af() {
                            return this.minOpenPosLeverage
                        }
                        nf(t, e, r, n, a, i, s, u) {
                            return new(x())(t, e, r, n, a, i, s, u)
                        }
                        copy(t, e, r, n, a, i, s, u, o) {
                            return t = t === l.I ? this.bracketMaintenanceMarginRate : t, e = e === l.I ? this.bracketNotionalCap : e, r = r === l.I ? this.bracketNotionalFloor : r, n = n === l.I ? this.bracketSeq : n, a = a === l.I ? this.cumFastMaintenanceAmount : a, i = i === l.I ? this.fastMaintenanceAmount : i, s = s === l.I ? this.maxOpenPosLeverage : s, u = u === l.I ? this.minOpenPosLeverage : u, this.nf(t, e, r, n, a, i, s, u)
                        }
                        toString() {
                            return "RiskBracket(bracketMaintenanceMarginRate=" + this.bracketMaintenanceMarginRate + ", bracketNotionalCap=" + this.bracketNotionalCap + ", bracketNotionalFloor=" + this.bracketNotionalFloor + ", bracketSeq=" + this.bracketSeq + ", cumFastMaintenanceAmount=" + this.cumFastMaintenanceAmount + ", fastMaintenanceAmount=" + this.fastMaintenanceAmount + ", maxOpenPosLeverage=" + this.maxOpenPosLeverage + ", minOpenPosLeverage=" + this.minOpenPosLeverage + ")"
                        }
                        hashCode() {
                            var t = (0, h.Ic)(this.bracketMaintenanceMarginRate);
                            return t = b(t, 31) + (0, h.Ic)(this.bracketNotionalCap) | 0, t = b(t, 31) + (0, h.Ic)(this.bracketNotionalFloor) | 0, t = b(t, 31) + this.bracketSeq | 0, t = b(t, 31) + (0, h.Ic)(this.cumFastMaintenanceAmount) | 0, t = b(t, 31) + (0, h.Ic)(this.fastMaintenanceAmount) | 0, t = b(t, 31) + (0, h.Ic)(this.maxOpenPosLeverage) | 0, t = b(t, 31) + (0, h.Ic)(this.minOpenPosLeverage) | 0
                        }
                        equals(t) {
                            if (this === t) return !0;
                            if (!(t instanceof x())) return !1;
                            var e = t instanceof x() ? t : (0, d.XR)();
                            return !!(0, c.mR)(this.bracketMaintenanceMarginRate, e.bracketMaintenanceMarginRate) && (!!(0, c.mR)(this.bracketNotionalCap, e.bracketNotionalCap) && (!!(0, c.mR)(this.bracketNotionalFloor, e.bracketNotionalFloor) && (this.bracketSeq === e.bracketSeq && (!!(0, c.mR)(this.cumFastMaintenanceAmount, e.cumFastMaintenanceAmount) && (!!(0, c.mR)(this.fastMaintenanceAmount, e.fastMaintenanceAmount) && (!!(0, c.mR)(this.maxOpenPosLeverage, e.maxOpenPosLeverage) && !!(0, c.mR)(this.minOpenPosLeverage, e.minOpenPosLeverage)))))))
                        }
                    }(0, f.mK)(t, "RiskBracket", x), s = t
                }
                return s
            }

            function _(t, e) {
                var r = null == t ? null : t.getRiskByNotional((0, v.yp)(e));
                return null == r ? k().DEFAULT : r
            }

            function S() {
                if (u === l.I) {
                    class t {
                        constructor(t) {
                            var e;
                            if (null == t) e = null;
                            else {
                                for (var r = (0, g.vv)((0, m.lB)(t.length), 16), n = (0, p.B)().j8(r), a = 0, i = t.length; a < i;) {
                                    var s = t[a];
                                    a = a + 1 | 0;
                                    var u = s.symbol;
                                    n.m4(u, s)
                                }
                                e = n
                            }
                            this.sd_1 = e
                        }
                        td(t) {
                            var e = this.sd_1;
                            return null == e ? null : e.f1(t)
                        }
                        ud(t, e) {
                            return _(this.td(t), e)
                        } of (t, e) {
                            var r = this.td(t),
                                n = null == r ? null : r.getRiskByNotionalV3((0, v.yp)(e));
                            return null == n ? k().DEFAULT : n
                        }
                    }(0, f.mK)(t, "BracketsStore"), u = t
                }
                return u
            }
        },
        xK95: (t, e, r) => {
            "use strict";
            r.d(e, {
                Lh: () => d,
                jn: () => f,
                ox: () => c,
                pF: () => h,
                pj: () => v
            });
            var n, a = r("96qr"),
                i = r("onyb"),
                s = r("6n23"),
                u = r("yCNW"),
                l = r("2Siz"),
                o = Math.imul;

            function c() {
                if (n === a.I) {
                    class t {
                        constructor(t, e, r, n, i, s, u, l, o, c, d, f, h, v, m, g, p) {
                            t = t === a.I ? "" : t, e = e === a.I ? "" : e, r = r === a.I ? "" : r, n = n === a.I ? "" : n, i = i === a.I ? "" : i, s = s === a.I ? "" : s, u = u === a.I ? 20 : u, l = l === a.I ? "" : l, o = o === a.I ? "" : o, c = c === a.I ? "" : c, d = d === a.I ? "" : d, f = f === a.I ? "" : f, h = h !== a.I && h, v = v === a.I ? "0" : v, m = m === a.I ? 0 : m, g = g === a.I ? "" : g, p = p === a.I ? "" : p, this.askNotional = t, this.bidNotional = e, this.collateral = r, this.cumRealized = n, this.entryPrice = i, this.id = s, this.leverage = u, this.notionalValue = l, this.positionAmount = o, this.symbol = c, this.markPrice = d, this.unrealizedProfit = f, this.isolated = h, this.isolatedWallet = v, this.adl = m, this.positionSide = g, this.lastPrice = p
                        }
                        ng(t) {
                            this.askNotional = t
                        }
                        og() {
                            return this.askNotional
                        }
                        pg(t) {
                            this.bidNotional = t
                        }
                        qg() {
                            return this.bidNotional
                        }
                        rg(t) {
                            this.collateral = t
                        }
                        sg() {
                            return this.collateral
                        }
                        tg(t) {
                            this.cumRealized = t
                        }
                        ug() {
                            return this.cumRealized
                        }
                        vg(t) {
                            this.entryPrice = t
                        }
                        wg() {
                            return this.entryPrice
                        }
                        xg(t) {
                            this.id = t
                        }
                        yg() {
                            return this.id
                        }
                        zg(t) {
                            this.leverage = t
                        }
                        ah() {
                            return this.leverage
                        }
                        bh(t) {
                            this.notionalValue = t
                        }
                        ch() {
                            return this.notionalValue
                        }
                        dh(t) {
                            this.positionAmount = t
                        }
                        eh() {
                            return this.positionAmount
                        }
                        yd(t) {
                            this.symbol = t
                        }
                        zd() {
                            return this.symbol
                        }
                        fh(t) {
                            this.markPrice = t
                        }
                        gh() {
                            return this.markPrice
                        }
                        hh(t) {
                            this.unrealizedProfit = t
                        }
                        we() {
                            return this.unrealizedProfit
                        }
                        ih(t) {
                            this.isolated = t
                        }
                        jh() {
                            return this.isolated
                        }
                        kh(t) {
                            this.isolatedWallet = t
                        }
                        lh() {
                            return this.isolatedWallet
                        }
                        mh(t) {
                            this.adl = t
                        }
                        nh() {
                            return this.adl
                        }
                        oh(t) {
                            this.positionSide = t
                        }
                        ph() {
                            return this.positionSide
                        }
                        qh(t) {
                            this.lastPrice = t
                        }
                        rh() {
                            return this.lastPrice
                        }
                        fc() {
                            return this.askNotional
                        }
                        gc() {
                            return this.bidNotional
                        }
                        oc() {
                            return this.collateral
                        }
                        je() {
                            return this.cumRealized
                        }
                        ke() {
                            return this.entryPrice
                        }
                        le() {
                            return this.id
                        }
                        me() {
                            return this.leverage
                        }
                        af() {
                            return this.notionalValue
                        }
                        cg() {
                            return this.positionAmount
                        }
                        dg() {
                            return this.symbol
                        }
                        eg() {
                            return this.markPrice
                        }
                        fg() {
                            return this.unrealizedProfit
                        }
                        gg() {
                            return this.isolated
                        }
                        hg() {
                            return this.isolatedWallet
                        }
                        sh() {
                            return this.adl
                        }
                        th() {
                            return this.positionSide
                        }
                        uh() {
                            return this.lastPrice
                        }
                        vh(t, e, r, n, a, i, s, u, l, o, d, f, h, v, m, g, p) {
                            return new(c())(t, e, r, n, a, i, s, u, l, o, d, f, h, v, m, g, p)
                        }
                        copy(t, e, r, n, i, s, u, l, o, c, d, f, h, v, m, g, p, b) {
                            return t = t === a.I ? this.askNotional : t, e = e === a.I ? this.bidNotional : e, r = r === a.I ? this.collateral : r, n = n === a.I ? this.cumRealized : n, i = i === a.I ? this.entryPrice : i, s = s === a.I ? this.id : s, u = u === a.I ? this.leverage : u, l = l === a.I ? this.notionalValue : l, o = o === a.I ? this.positionAmount : o, c = c === a.I ? this.symbol : c, d = d === a.I ? this.markPrice : d, f = f === a.I ? this.unrealizedProfit : f, h = h === a.I ? this.isolated : h, v = v === a.I ? this.isolatedWallet : v, m = m === a.I ? this.adl : m, g = g === a.I ? this.positionSide : g, p = p === a.I ? this.lastPrice : p, this.vh(t, e, r, n, i, s, u, l, o, c, d, f, h, v, m, g, p)
                        }
                        toString() {
                            return "FuturesPosition(askNotional=" + this.askNotional + ", bidNotional=" + this.bidNotional + ", collateral=" + this.collateral + ", cumRealized=" + this.cumRealized + ", entryPrice=" + this.entryPrice + ", id=" + this.id + ", leverage=" + this.leverage + ", notionalValue=" + this.notionalValue + ", positionAmount=" + this.positionAmount + ", symbol=" + this.symbol + ", markPrice=" + this.markPrice + ", unrealizedProfit=" + this.unrealizedProfit + ", isolated=" + this.isolated + ", isolatedWallet=" + this.isolatedWallet + ", adl=" + this.adl + ", positionSide=" + this.positionSide + ", lastPrice=" + this.lastPrice + ")"
                        }
                        hashCode() {
                            var t = (0, i.HR)(this.askNotional);
                            return t = o(t, 31) + (0, i.HR)(this.bidNotional) | 0, t = o(t, 31) + (0, i.HR)(this.collateral) | 0, t = o(t, 31) + (0, i.HR)(this.cumRealized) | 0, t = o(t, 31) + (0, i.HR)(this.entryPrice) | 0, t = o(t, 31) + (0, i.HR)(this.id) | 0, t = o(t, 31) + this.leverage | 0, t = o(t, 31) + (0, i.HR)(this.notionalValue) | 0, t = o(t, 31) + (0, i.HR)(this.positionAmount) | 0, t = o(t, 31) + (0, i.HR)(this.symbol) | 0, t = o(t, 31) + (0, i.HR)(this.markPrice) | 0, t = o(t, 31) + (0, i.HR)(this.unrealizedProfit) | 0, t = o(t, 31) + (0, i.U6)(this.isolated) | 0, t = o(t, 31) + (0, i.HR)(this.isolatedWallet) | 0, t = o(t, 31) + this.adl | 0, t = o(t, 31) + (0, i.HR)(this.positionSide) | 0, t = o(t, 31) + (0, i.HR)(this.lastPrice) | 0
                        }
                        equals(t) {
                            if (this === t) return !0;
                            if (!(t instanceof c())) return !1;
                            var e = t instanceof c() ? t : (0, s.XR)();
                            return this.askNotional === e.askNotional && (this.bidNotional === e.bidNotional && (this.collateral === e.collateral && (this.cumRealized === e.cumRealized && (this.entryPrice === e.entryPrice && (this.id === e.id && (this.leverage === e.leverage && (this.notionalValue === e.notionalValue && (this.positionAmount === e.positionAmount && (this.symbol === e.symbol && (this.markPrice === e.markPrice && (this.unrealizedProfit === e.unrealizedProfit && (this.isolated === e.isolated && (this.isolatedWallet === e.isolatedWallet && (this.adl === e.adl && (this.positionSide === e.positionSide && this.lastPrice === e.lastPrice)))))))))))))))
                        }
                    }(0, u.mK)(t, "FuturesPosition", c), n = t
                }
                return n
            }

            function d(t) {
                return !(0 === (0, l.QU)(t.positionAmount)) || (0, l.QU)(t.isolatedWallet) < 0 || !(0 === (0, l.QU)(t.bidNotional)) || !(0 === (0, l.QU)(t.askNotional))
            }

            function f(t) {
                return "LONG" === t.positionSide
            }

            function h(t) {
                return "SHORT" === t.positionSide
            }

            function v(t) {
                return "BOTH" === t.positionSide
            }
        },
        AHWj: (t, e, r) => {
            "use strict";
            r.d(e, {
                Mw: () => m,
                O7: () => b,
                vO: () => v
            });
            var n = r("2Siz"),
                a = r("5rag"),
                i = r("noRI"),
                s = r("oj/q"),
                u = r("xK95"),
                l = r("UWQe"),
                o = r("XqFO"),
                c = r("us5i"),
                d = r("KpqF"),
                f = r("DJbt"),
                h = r("BTXI");

            function v(t, e, r, a) {
                return (0, n.yp)(m(t, e, r, a))
            }

            function m(t, e, r, c) {
                var d;
                t: {
                    for (var f = 0, h = r.length; f < h;) {
                        var v = r[f];
                        if (f = f + 1 | 0, v.asset === t.collateral) {
                            d = v;
                            break t
                        }
                    }
                    d = null
                }
                var m = d;
                if (null == m) return (0, a.A)();
                var b = m,
                    y = (0, n.iS)(b.crossWalletBalance),
                    k = t.symbol,
                    S = new((0, i.mm)())(c),
                    N = S.td(k);
                if (null == N) return (0, a.A)();
                for (var A = N, I = (0, s.e)().v4(), q = 0, P = e.length; q < P;) {
                    var w = e[q];
                    q = q + 1 | 0, (0, u.Lh)(w) && I.l3(w)
                }
                var j, R = I;
                if ("BOTH" === t.positionSide || t.isolated) {
                    var M = x(A),
                        C = (0, n.iS)(t.positionAmount).ed(),
                        T = (0, n.tx)();
                    t: for (; M.bracketSeq >= 0 && (T = g(t, R, M, y, S), !((0, l.Yt)(M.bracketNotionalFloor).qc(T.kd(C)) < 0 || (0, l.Yt)(M.bracketNotionalFloor).qc((0, n.tx)()) <= 0 && T.kd(C).equals((0, n.tx)())));) {
                        var E = _(A, M.bracketSeq - 1 | 0);
                        if (null == E) break t;
                        M = E
                    }
                    return T
                }
                t: {
                    for (var L = R.o(); L.p();) {
                        var O = L.q();
                        if (O.symbol === k && "LONG" === O.positionSide) {
                            j = O;
                            break t
                        }
                    }
                    j = null
                }
                var F, z = j;
                t: {
                    for (var B = R.o(); B.p();) {
                        var V = B.q();
                        if (V.symbol === k && "SHORT" === V.positionSide) {
                            F = V;
                            break t
                        }
                    }
                    F = null
                }
                var U = F,
                    D = (0, n.iS)(null == z ? null : z.positionAmount).ed(),
                    Y = (0, n.iS)(null == U ? null : U.positionAmount).ed(),
                    K = (0, n.tx)(),
                    G = null == z ? null : z.markPrice,
                    H = null == G ? null : (0, n.iS)(G),
                    Q = (0, o.b6)(z, null == H ? (0, n.tx)() : H).ed(),
                    W = A.getRiskByNotional((0, n.yp)(Q));
                if (null == W);
                else {
                    var $ = W;
                    t: for (; $.bracketSeq >= 0;) {
                        var X = x(A);
                        e: for (; X.bracketSeq >= 0 && (K = p(t, R, $, X, y, S), !((0, l.Yt)(X.bracketNotionalFloor).qc(K.kd(Y)) < 0 || (0, l.Yt)(X.bracketNotionalFloor).qc((0, n.tx)()) <= 0 && K.kd(Y).equals((0, n.tx)())));) {
                            var J = _(A, X.bracketSeq - 1 | 0);
                            if (null == J) break e;
                            X = J
                        }
                        if ((0, l.Yt)($.bracketNotionalFloor).qc(K.kd(D)) < 0 || (0, l.Yt)($.bracketNotionalFloor).qc((0, n.tx)()) <= 0 && K.kd(D).equals((0, n.tx)())) break t;
                        var Z = _(A, $.bracketSeq - 1 | 0);
                        if (null == Z) break t;
                        $ = Z
                    }
                }
                if (D.qc(Y) > 0) {
                    var tt = (0, o.b6)(z, (0, n.iS)(null == z ? null : z.markPrice)).ed(),
                        et = (0, o.b6)(U, (0, n.iS)(null == U ? null : U.markPrice)).ed(),
                        rt = p(t, R, (0, i.jh)(A, tt), (0, i.jh)(A, et), y, S);
                    if (K.qc((0, n.tx)()) >= 0 && rt.qc((0, n.tx)()) < 0) return K;
                    var nt = (0, n.iS)(t.markPrice);
                    if (K.qc((0, n.tx)()) >= 0 && rt.qc((0, n.tx)()) >= 0 && K.jd(nt).ed().qc(rt.jd(nt).ed()) > 0) return rt;
                    if (K.qc((0, n.tx)()) < 0 && rt.qc((0, n.tx)()) >= 0) return rt
                }
                return K
            }

            function g(t, e, r, a, i) {
                var u, o = (0, n.iS)(t.positionAmount),
                    h = (0, n.iS)(t.entryPrice),
                    v = o.qc((0, n.tx)()) >= 0 ? (0, n.iS)("1.0") : (0, n.iS)("-1.0"),
                    m = (0, l.Yt)(r.bracketMaintenanceMarginRate),
                    g = (0, l.Yt)(r.cumFastMaintenanceAmount);
                if (t.isolated) {
                    var p = (0, n.iS)(t.isolatedWallet),
                        b = o.ed().kd(m.jd(v));
                    u = (0, n.Dx)(p.id(g).jd(o.kd(h)), b)
                } else {
                    var y = function(t, e, r, a) {
                            var i = (0, n.tx)(),
                                u = (0, n.tx)(),
                                o = (0, s.e)().v4(),
                                h = r.o();
                            for (; h.p();) {
                                var v = h.q();
                                v.isolated || !(0, c.iu)(t, v.collateral, !0) || (0, c.iu)(e, v.symbol, !0) || o.l3(v)
                            }
                            var m = o.o();
                            for (; m.p();) {
                                var g = m.q(),
                                    p = (0, n.iS)(g.positionAmount),
                                    b = p.ed().kd((0, n.iS)(g.markPrice)).kd((0, d.p)().ni_1),
                                    y = a.ud(g.symbol, b),
                                    k = (0, n.iS)(g.markPrice);
                                i = i.id(p.ed().kd(k).kd((0, l.Yt)(y.bracketMaintenanceMarginRate)).jd((0, l.Yt)(y.cumFastMaintenanceAmount))), u = u.id(p.kd(k.jd((0, n.iS)(g.entryPrice))))
                            }
                            return new((0, f.e9)())(u, i)
                        }(t.collateral, t.symbol, e, i),
                        k = y.ec_1,
                        x = y.dc_1,
                        _ = o.ed().kd(m.jd(v));
                    u = (0, n.Dx)(a.jd(k).id(x).id(g).jd(o.kd(h)), _)
                }
                return u
            }

            function p(t, e, r, a, i, u) {
                for (var c = (0, n.tx)(), f = (0, n.tx)(), v = (0, s.e)().v4(), m = e.o(); m.p();) {
                    var g = m.q();
                    g.isolated || g.collateral !== t.collateral || v.l3(g)
                }
                for (var p = v, b = (0, h.B)().i8(), y = p.o(); y.p();) {
                    var k, x = y.q(),
                        _ = x.symbol,
                        S = b.f1(_);
                    if (null == S) {
                        var N = (0, s.e)().v4();
                        b.m4(_, N), k = N
                    } else k = S;
                    k.l3(x)
                }
                for (var A = b, I = A.h1().o(); I.p();) {
                    var q = I.q(),
                        P = q.c1();
                    if (P !== t.symbol) {
                        for (var w, j = (0, n.tx)(), R = (0, n.tx)(), M = q.d1().o(); M.p();) {
                            var C = M.q(),
                                T = C;
                            w = (0, n.iS)(T.markPrice);
                            var E = (0, o.b6)(C, w).ed(),
                                L = (0, n.iS)(T.positionAmount).kd(w.jd((0, n.iS)(T.entryPrice)));
                            j = j.id(L);
                            var O = u.ud(P, E),
                                F = (0, n.iS)(T.positionAmount).ed().kd(w).kd((0, d.p)().ni_1).kd((0, l.Yt)(O.bracketMaintenanceMarginRate)).jd((0, l.Yt)(O.cumFastMaintenanceAmount));
                            R = R.id(F)
                        }
                        c = c.id(R), f = f.id(j)
                    }
                }
                var z = A.f1(t.symbol),
                    B = (0, n.tx)(),
                    V = (0, n.tx)(),
                    U = null,
                    D = null;
                if (null == z);
                else
                    for (var Y = z.o(); Y.p();) {
                        var K = Y.q();
                        "LONG" === K.positionSide && (U = K, B = (0, n.iS)(K.positionAmount).ed().kd((0, n.iS)(K.entryPrice))), "SHORT" === K.positionSide && (D = K, V = (0, n.iS)(K.positionAmount).ed().kd((0, n.iS)(K.entryPrice)))
                    }
                var G = (0, l.Yt)(a.cumFastMaintenanceAmount),
                    H = (0, l.Yt)(r.cumFastMaintenanceAmount),
                    Q = i.jd(c).id(f).id(H).id(G).jd(B).id(V),
                    W = (0, l.Yt)(r.bracketMaintenanceMarginRate),
                    $ = (0, l.Yt)(a.bracketMaintenanceMarginRate),
                    X = U,
                    J = (0, n.iS)(null == X ? null : X.positionAmount).ed(),
                    Z = D,
                    tt = (0, n.iS)(null == Z ? null : Z.positionAmount).ed(),
                    et = J.kd(W).id(tt.kd($)).jd(J).id(tt);
                return (0, n.Dx)(Q, et)
            }

            function b(t, e, r, v) {
                var m;
                t: {
                    for (var g = 0, p = r.length; g < p;) {
                        var b = r[g];
                        if (g = g + 1 | 0, b.asset === t.collateral) {
                            m = b;
                            break t
                        }
                    }
                    m = null
                }
                var x = m;
                if (null == x) return (0, a.A)();
                var _ = x,
                    A = (0, n.iS)(_.crossWalletBalance),
                    I = t.symbol,
                    q = new((0, i.mm)())(v),
                    P = q.td(I);
                if (null == P) return (0, a.A)();
                for (var w = P, j = (0, s.e)().v4(), R = 0, M = e.length; R < M;) {
                    var C = e[R];
                    R = R + 1 | 0, (0, u.Lh)(C) && j.l3(C)
                }
                var T, E = j;
                if ("BOTH" === t.positionSide || t.isolated) {
                    var L, O = (0, n.iS)(t.positionAmount).ed();
                    L = t.isolated ? (0, f.Sd)((0, n.tx)(), (0, n.tx)()) : function(t, e, r, a) {
                        var i = (0, n.tx)(),
                            u = (0, n.tx)(),
                            o = (0, s.e)().v4(),
                            h = r.o();
                        for (; h.p();) {
                            var v = h.q();
                            v.isolated || !(0, c.iu)(t, v.collateral, !0) || (0, c.iu)(e, v.symbol, !0) || o.l3(v)
                        }
                        var m = o.o();
                        for (; m.p();) {
                            var g = m.q(),
                                p = (0, n.iS)(g.positionAmount),
                                b = (0, n.iS)(g.markPrice),
                                y = (0, n.iS)(g.entryPrice),
                                k = p.ed().kd(b).kd((0, d.p)().ni_1),
                                x = a.ud(g.symbol, k),
                                _ = p.ed().kd(b).kd((0, l.Yt)(x.bracketMaintenanceMarginRate)).jd((0, l.Yt)(x.cumFastMaintenanceAmount)),
                                S = p.kd(b.jd(y));
                            i = i.id(_), u = u.id(S)
                        }
                        return (0, f.Sd)(u, i)
                    }(t.collateral, t.symbol, E, q);
                    var F = L,
                        z = F.fc(),
                        B = F.gc(),
                        V = S(w),
                        U = (0, n.tx)(),
                        D = (0, n.iS)(t.positionAmount),
                        Y = (0, n.iS)(t.entryPrice),
                        K = (0, n.iS)(t.isolatedWallet);
                    t: for (; V.bracketSeq >= 0;) {
                        var G = (U = k(t, D, Y, K, V, A, z, B)).kd(O),
                            H = (0, l.Yt)(V.bracketNotionalFloor);
                        if (H.qc(G) < 0 || H.qc((0, n.tx)()) <= 0 && G.equals((0, n.tx)())) break t;
                        var Q = N(V.bracketSeq - 1 | 0, w);
                        if (null == Q) break t;
                        V = Q
                    }
                    return U
                }
                t: {
                    for (var W = E.o(); W.p();) {
                        var $ = W.q();
                        if ($.symbol === I && "LONG" === $.positionSide) {
                            T = $;
                            break t
                        }
                    }
                    T = null
                }
                var X, J = T;
                t: {
                    for (var Z = E.o(); Z.p();) {
                        var tt = Z.q();
                        if (tt.symbol === I && "SHORT" === tt.positionSide) {
                            X = tt;
                            break t
                        }
                    }
                    X = null
                }
                for (var et = X, rt = (0, n.iS)(null == J ? null : J.positionAmount).ed(), nt = (0, n.iS)(null == et ? null : et.positionAmount).ed(), at = null == J ? null : J.markPrice, it = null == at ? null : (0, n.iS)(at), st = (0, o.b6)(J, null == it ? (0, n.tx)() : it).ed(), ut = (0, o.b6)(et, (0, n.iS)(null == et ? null : et.markPrice)).ed(), lt = function(t, e, r, a) {
                        var i = e.kd((0, n.iS)(null == t ? null : t.entryPrice)),
                            s = a.kd((0, n.iS)(null == r ? null : r.entryPrice));
                        return (0, f.Sd)(i, s)
                    }(J, rt, et, nt), ot = lt.fc(), ct = lt.gc(), dt = (0, n.tx)(), ft = (0, s.e)().v4(), ht = 0, vt = e.length; ht < vt;) {
                    var mt = e[ht];
                    ht = ht + 1 | 0, mt.isolated || mt.collateral !== t.collateral || ft.l3(mt)
                }
                for (var gt = ft, pt = (0, h.B)().i8(), bt = gt.o(); bt.p();) {
                    var yt, kt = bt.q(),
                        xt = kt.symbol,
                        _t = pt.f1(xt);
                    if (null == _t) {
                        var St = (0, s.e)().v4();
                        pt.m4(xt, St), yt = St
                    } else yt = _t;
                    yt.l3(kt)
                }
                var Nt = function(t, e, r) {
                        var a = (0, n.tx)(),
                            i = (0, n.tx)(),
                            s = e.h1().o();
                        for (; s.p();) {
                            var u = s.q(),
                                c = u.c1(),
                                h = u.d1();
                            if (c !== t.symbol) {
                                for (var v = (0, f.Sd)((0, n.tx)(), (0, n.tx)()), m = h.o(); m.p();) {
                                    var g = m.q(),
                                        p = v,
                                        b = p.fc(),
                                        y = p.gc(),
                                        k = (0, n.iS)(g.markPrice),
                                        x = (0, n.iS)(g.positionAmount).kd(k.jd((0, n.iS)(g.entryPrice))),
                                        _ = (0, o.b6)(g, k).ed(),
                                        S = r.ud(c, _),
                                        N = (0, n.iS)(g.positionAmount).ed().kd(k).kd((0, d.p)().ni_1).kd((0, l.Yt)(S.bracketMaintenanceMarginRate)).jd((0, l.Yt)(S.cumFastMaintenanceAmount));
                                    v = (0, f.Sd)(b.id(x), y.id(N))
                                }
                                var A = v,
                                    I = A.fc(),
                                    q = A.gc();
                                a = a.id(q), i = i.id(I)
                            }
                        }
                        return (0, f.Sd)(i, a)
                    }(t, pt, q),
                    At = Nt.fc(),
                    It = Nt.gc(),
                    qt = w.getRiskByNotional((0, n.yp)(st));
                if (null == qt);
                else {
                    var Pt = qt;
                    t: for (; Pt.bracketSeq >= 0;) {
                        var wt = S(w);
                        e: for (; wt.bracketSeq >= 0 && (dt = y(Pt, wt, A, rt, ot, nt, ct, At, It), !((0, l.Yt)(wt.bracketNotionalFloor).qc(dt.kd(nt)) < 0 || (0, l.Yt)(wt.bracketNotionalFloor).qc((0, n.tx)()) <= 0 && dt.kd(nt).equals((0, n.tx)())));) {
                            var jt = N(wt.bracketSeq - 1 | 0, w);
                            if (null == jt) break e;
                            wt = jt
                        }
                        if ((0, l.Yt)(Pt.bracketNotionalFloor).qc(dt.kd(rt)) < 0 || (0, l.Yt)(Pt.bracketNotionalFloor).qc((0, n.tx)()) <= 0 && dt.kd(rt).equals((0, n.tx)())) break t;
                        var Rt = N(Pt.bracketSeq - 1 | 0, w);
                        if (null == Rt) break t;
                        Pt = Rt
                    }
                }
                if (rt.qc(nt) > 0) {
                    var Mt = y((0, i.jh)(w, st), (0, i.jh)(w, ut), A, rt, ot, nt, ct, At, It);
                    if (dt.qc((0, n.tx)()) >= 0 && Mt.qc((0, n.tx)()) < 0) return dt;
                    var Ct = (0, n.iS)(t.markPrice);
                    if (dt.qc((0, n.tx)()) >= 0 && Mt.qc((0, n.tx)()) >= 0 && dt.jd(Ct).ed().qc(Mt.jd(Ct).ed()) > 0) return Mt;
                    if (dt.qc((0, n.tx)()) < 0 && Mt.qc((0, n.tx)()) >= 0) return Mt
                }
                return dt
            }

            function y(t, e, r, a, i, s, u, o, c) {
                var d = (0, l.Yt)(e.cumFastMaintenanceAmount),
                    f = (0, l.Yt)(t.cumFastMaintenanceAmount),
                    h = r.jd(c).id(o).id(f).id(d).jd(i).id(u),
                    v = (0, l.Yt)(t.bracketMaintenanceMarginRate),
                    m = (0, l.Yt)(e.bracketMaintenanceMarginRate),
                    g = a.kd(v).id(s.kd(m)).jd(a).id(s);
                return (0, n.Dx)(h, g)
            }

            function k(t, e, r, a, i, s, u, o) {
                var c, d = e.qc((0, n.tx)()) >= 0 ? (0, n.b2)() : new((0, l.ri)())("-1.0"),
                    f = (0, l.Yt)(i.bracketMaintenanceMarginRate),
                    h = (0, l.Yt)(i.cumFastMaintenanceAmount),
                    v = e.ed().kd(f.jd(d));
                if (t.isolated) {
                    var m = a.id(h).jd(e.kd(r));
                    c = (0, n.Dx)(m, v)
                } else {
                    var g = s.jd(o).id(u).id(h).jd(e.kd(r));
                    c = (0, n.Dx)(g, v)
                }
                return c
            }

            function x(t) {
                return t.getLastSeqRisk()
            }

            function _(t, e) {
                return t.getRiskBySeq(e)
            }

            function S(t) {
                return t.getLastSeqRisk()
            }

            function N(t, e) {
                return e.getRiskBySeq(t)
            }
        },
        XqFO: (t, e, r) => {
            "use strict";
            r.d(e, {
                u6: () => o,
                b6: () => s,
                Oe: () => u,
                uH: () => l
            });
            var n = r("2Siz"),
                a = r("UWQe"),
                i = r("KpqF");

            function s(t, e) {
                return null == t ? (0, n.tx)() : (0, a.y8)(t.positionAmount).kd(e).kd((0, i.p)().ni_1)
            }

            function u(t, e) {
                return null == t ? (0, n.tx)() : t.jg_1.kd(e).kd((0, i.p)().ni_1)
            }

            function l(t, e) {
                return null == t ? (0, n.tx)() : function(t, e) {
                    if (null == t) return (0, n.tx)();
                    var r = (0, a.y8)(t.bidNotional),
                        i = (0, a.y8)(t.askNotional);
                    return (0, n.dg)(e.id(r).ed(), e.jd(i).ed())
                }(t, s(t, e))
            }

            function o(t) {
                if (null == t) return (0, n.tx)();
                var e = (0, a.y8)(t.markPrice);
                return e.qc((0, n.tx)()) <= 0 ? (0, n.tx)() : l(t, e)
            }
        },
        KpqF: (t, e, r) => {
            "use strict";
            r.d(e, {
                p: () => l
            });
            var n, a, i = r("2Siz"),
                s = r("yCNW"),
                u = r("96qr");

            function l() {
                return a === u.I && new(function() {
                    if (n === u.I) {
                        class t {
                            constructor() {
                                a = this, this.ni_1 = (0, i.b2)()
                            }
                        }(0, s.F)(t, "UmConstants"), n = t
                    }
                    return n
                }()), a
            }
        },
        DJbt: (t, e, r) => {
            "use strict";
            r.d(e, {
                Sd: () => f,
                e9: () => d,
                jh: () => h
            });
            var n, a, i = r("H4Sp"),
                s = r("onyb"),
                u = r("6n23"),
                l = r("yCNW"),
                o = r("96qr"),
                c = Math.imul;

            function d() {
                if (n === o.I) {
                    class t {
                        constructor(t, e) {
                            this.dc_1 = t, this.ec_1 = e
                        }
                        toString() {
                            return "(" + (0, i.V)(this.dc_1) + ", " + (0, i.V)(this.ec_1) + ")"
                        }
                        fc() {
                            return this.dc_1
                        }
                        gc() {
                            return this.ec_1
                        }
                        hashCode() {
                            var t = null == this.dc_1 ? 0 : (0, s.gP)(this.dc_1);
                            return t = c(t, 31) + (null == this.ec_1 ? 0 : (0, s.gP)(this.ec_1)) | 0
                        }
                        equals(t) {
                            if (this === t) return !0;
                            if (!(t instanceof d())) return !1;
                            var e = t instanceof d() ? t : (0, u.XR)();
                            return !!(0, s.mR)(this.dc_1, e.dc_1) && !!(0, s.mR)(this.ec_1, e.ec_1)
                        }
                    }(0, l.mK)(t, "Pair"), n = t
                }
                return n
            }

            function f(t, e) {
                return new(d())(t, e)
            }

            function h() {
                if (a === o.I) {
                    class t {
                        constructor(t, e, r) {
                            this.lc_1 = t, this.mc_1 = e, this.nc_1 = r
                        }
                        toString() {
                            return "(" + (0, i.V)(this.lc_1) + ", " + (0, i.V)(this.mc_1) + ", " + (0, i.V)(this.nc_1) + ")"
                        }
                        fc() {
                            return this.lc_1
                        }
                        gc() {
                            return this.mc_1
                        }
                        oc() {
                            return this.nc_1
                        }
                        hashCode() {
                            var t = null == this.lc_1 ? 0 : (0, s.gP)(this.lc_1);
                            return t = c(t, 31) + (null == this.mc_1 ? 0 : (0, s.gP)(this.mc_1)) | 0, t = c(t, 31) + (null == this.nc_1 ? 0 : (0, s.gP)(this.nc_1)) | 0
                        }
                        equals(t) {
                            if (this === t) return !0;
                            if (!(t instanceof h())) return !1;
                            var e = t instanceof h() ? t : (0, u.XR)();
                            return !!(0, s.mR)(this.lc_1, e.lc_1) && (!!(0, s.mR)(this.mc_1, e.mc_1) && !!(0, s.mR)(this.nc_1, e.nc_1))
                        }
                    }(0, l.mK)(t, "Triple"), a = t
                }
                return a
            }
        },
        qWJg: (t, e, r) => {
            "use strict";
            r.d(e, {
                M: () => f
            });
            var n, a = r("H4Sp"),
                i = r("onyb"),
                s = r("8CVC"),
                u = r("0qyc"),
                l = r("96qr"),
                o = r("TudY"),
                c = r("68PZ"),
                d = r("yCNW");

            function f() {
                if (n === l.I) {
                    class t {
                        static k3(t) {
                            return (0, i.Xh)(this, t)
                        }
                        a1(t) {
                            var e;
                            t: {
                                if (!!(0, u.GT)(this, (0, s.oy)()) && this.z()) e = !1;
                                else {
                                    for (var r = this.o(); r.p();) {
                                        var n = r.q();
                                        if ((0, i.mR)(n, t)) {
                                            e = !0;
                                            break t
                                        }
                                    }
                                    e = !1
                                }
                            }
                            return e
                        }
                        b1(t) {
                            var e;
                            t: {
                                if (!!(0, u.GT)(t, (0, s.oy)()) && t.z()) e = !0;
                                else {
                                    for (var r = t.o(); r.p();) {
                                        var n = r.q();
                                        if (!this.a1(n)) {
                                            e = !1;
                                            break t
                                        }
                                    }
                                    e = !0
                                }
                            }
                            return e
                        }
                        z() {
                            return 0 === this.r()
                        }
                        toString() {
                            return (0, o.SC)(this, ", ", "[", "]", l.I, l.I, (t = this, function(e) {
                                return e === t ? "(this Collection)" : (0, a.V)(e)
                            }));
                            var t
                        }
                        toArray() {
                            return (0, c.wg)(this)
                        }
                    }(0, d.mK)(t, "AbstractCollection", l.I, l.I, [(0, s.oy)()]), n = t
                }
                return n
            }
        },
        "9Rpo": (t, e, r) => {
            "use strict";
            r.d(e, {
                D: () => o
            });
            var n, a = r("qWJg"),
                i = r("onyb"),
                s = r("8CVC"),
                u = r("yCNW"),
                l = r("96qr");

            function o() {
                if (n === l.I) {
                    class t extends((0, a.M)()) {
                        static j3() {
                            return this.k3()
                        }
                        m3(t) {
                            this.n3();
                            for (var e = this.o(); e.p();)
                                if ((0, i.mR)(e.q(), t)) return e.o3(), !0;
                            return !1
                        }
                        p3(t) {
                            this.n3();
                            for (var e = !1, r = t.o(); r.p();) {
                                var n = r.q();
                                this.l3(n) && (e = !0)
                            }
                            return e
                        }
                        toJSON() {
                            return this.toArray()
                        }
                        n3() {}
                    }(0, u.mK)(t, "AbstractMutableCollection", l.I, l.I, [(0, a.M)(), (0, s.oy)()]), n = t
                }
                return n
            }
        },
        "oj/q": (t, e, r) => {
            "use strict";
            r.d(e, {
                e: () => N
            });
            var n, a, i = r("yCNW"),
                s = r("96qr"),
                u = r("uThH"),
                l = r("SR+u"),
                o = r("onyb"),
                c = r("9Rpo"),
                d = r("8CVC"),
                f = r("0qyc");

            function h() {
                if (a === s.I) {
                    class t extends((0, c.D)()) {
                        static w3() {
                            var t = this.j3();
                            return t.u3_1 = 0, t
                        }
                        l3(t) {
                            return this.n3(), this.x3(this.r(), t), !0
                        }
                        o() {
                            return new(function() {
                                if (n === s.I) {
                                    class t {
                                        constructor(t) {
                                            this.s3_1 = t, this.q3_1 = 0, this.r3_1 = -1
                                        }
                                        p() {
                                            return this.q3_1 < this.s3_1.r()
                                        }
                                        q() {
                                            if (!this.p()) throw (0, l.Lo)().t3();
                                            var t = this.q3_1;
                                            return this.q3_1 = t + 1 | 0, this.r3_1 = t, this.s3_1.w(this.r3_1)
                                        }
                                        o3() {
                                            if (-1 === this.r3_1) throw (0, l.XI)().i2((0, o.no)("Call next() or previous() before removing element from the iterator."));
                                            this.s3_1.v3(this.r3_1), this.q3_1 = this.r3_1, this.r3_1 = -1
                                        }
                                    }(0, i.mK)(t, "IteratorImpl"), n = t
                                }
                                return n
                            }())(this)
                        }
                        a1(t) {
                            return this.y3(t) >= 0
                        }
                        y3(t) {
                            var e;
                            t: {
                                for (var r = 0, n = this.o(); n.p();) {
                                    var a = n.q();
                                    if ((0, o.mR)(a, t)) {
                                        e = r;
                                        break t
                                    }
                                    r = r + 1 | 0
                                }
                                e = -1
                            }
                            return e
                        }
                        equals(t) {
                            return t === this || !(null == t || !(0, f.GT)(t, (0, d.mi)())) && u.C.z3(this, t)
                        }
                        hashCode() {
                            return u.C.a4(this)
                        }
                    }(0, i.mK)(t, "AbstractMutableList", s.I, s.I, [(0, c.D)(), (0, d.mi)(), (0, d.oy)()]), a = t
                }
                return a
            }
            var v, m, g, p = r("68PZ"),
                b = r("6n23"),
                y = r("NjuE"),
                k = r("LO/3");

            function x(t) {
                return (0, o.no)(t)
            }

            function _() {
                return m === s.I && new(function() {
                    if (v === s.I) {
                        class t {
                            constructor() {
                                m = this;
                                var t = N().r4(0);
                                t.f_1 = !0, this.s4_1 = t
                            }
                        }(0, i.cA)(t), v = t
                    }
                    return v
                }()), m
            }

            function S(t, e) {
                return u.C.t4(e, t.r()), e
            }

            function N() {
                if (g === s.I) {
                    class t extends(h()) {
                        static g3(t) {
                            _();
                            var e = this.w3();
                            return e.e_1 = t, e.f_1 = !1, e
                        }
                        static v4() {
                            _();
                            return this.g3([])
                        }
                        static r4(t) {
                            _();
                            var e = this.g3([]);
                            if (!(t >= 0)) {
                                var r = "Negative initial capacity: " + t;
                                throw (0, l.fK)().v((0, o.no)(r))
                            }
                            return e
                        }
                        static g(t) {
                            _();
                            var e = (0, p.Tb)(t);
                            return this.g3(e)
                        }
                        r() {
                            return this.e_1.length
                        }
                        w(t) {
                            var e = this.e_1[S(this, t)];
                            return null == e || null != e ? e : (0, b.XR)()
                        }
                        i3(t, e) {
                            this.n3(), S(this, t);
                            var r = this.e_1[t];
                            this.e_1[t] = e;
                            return null == r || null != r ? r : (0, b.XR)()
                        }
                        l3(t) {
                            return this.n3(), this.e_1.push(t), this.u3_1 = this.u3_1 + 1 | 0, !0
                        }
                        x3(t, e) {
                            this.n3(), this.e_1.splice(function(t, e) {
                                return u.C.u4(e, t.r()), e
                            }(this, t), 0, e), this.u3_1 = this.u3_1 + 1 | 0
                        }
                        v3(t) {
                            return this.n3(), S(this, t), this.u3_1 = this.u3_1 + 1 | 0, t === (0, y.zM)(this) ? this.e_1.pop() : this.e_1.splice(t, 1)[0]
                        }
                        m3(t) {
                            this.n3();
                            var e = 0,
                                r = this.e_1.length - 1 | 0;
                            if (e <= r)
                                do {
                                    var n = e;
                                    if (e = e + 1 | 0, (0, o.mR)(this.e_1[n], t)) return this.e_1.splice(n, 1), this.u3_1 = this.u3_1 + 1 | 0, !0
                                } while (e <= r);
                            return !1
                        }
                        y3(t) {
                            return (0, k.LW)(this.e_1, t)
                        }
                        toString() {
                            return t = this.e_1, (0, k.Mi)(t, ", ", "[", "]", s.I, s.I, x);
                            var t
                        }
                        w4() {
                            return [].slice.call(this.e_1)
                        }
                        toArray() {
                            return this.w4()
                        }
                        n3() {
                            if (this.f_1) throw (0, l.mP)().a5()
                        }
                    }(0, i.mK)(t, "ArrayList", t.v4, s.I, [h(), (0, d.mi)(), (0, d.oy)()]), g = t
                }
                return g
            }
        },
        "8CVC": (t, e, r) => {
            "use strict";
            r.d(e, {
                LD: () => v,
                gc: () => f,
                jt: () => h,
                mi: () => c,
                oy: () => d
            });
            var n, a, i, s, u, l = r("yCNW"),
                o = r("96qr");

            function c() {
                if (n === o.I) {
                    class t {}(0, l.Ou)(t, "List", o.I, o.I, [d()]), n = t
                }
                return n
            }

            function d() {
                if (a === o.I) {
                    class t {}(0, l.Ou)(t, "Collection"), a = t
                }
                return a
            }

            function f() {
                if (i === o.I) {
                    class t {}(0, l.Ou)(t, "Entry"), i = t
                }
                return i
            }

            function h() {
                if (s === o.I) {
                    class t {}(0, l.Ou)(t, "Map"), s = t
                }
                return s
            }

            function v() {
                if (u === o.I) {
                    class t {}(0, l.Ou)(t, "Set", o.I, o.I, [d()]), u = t
                }
                return u
            }
        },
        NjuE: (t, e, r) => {
            "use strict";
            r.d(e, {
                F2: () => g,
                Le: () => m,
                yP: () => f,
                zM: () => h
            });
            var n, a, i = r("5rI7"),
                s = r("LO/3"),
                u = r("8CVC"),
                l = r("0qyc"),
                o = r("yCNW"),
                c = r("96qr"),
                d = r("SR+u");

            function f(t) {
                if (t.z()) return [];
                for (var e = t.r(), r = (0, i.M)(Array(e), null), n = t.o(), a = 0; n.p();) {
                    var s = a;
                    a = s + 1 | 0, r[s] = n.q()
                }
                return r
            }

            function h(t) {
                return t.r() - 1 | 0
            }

            function v() {
                if (n === c.I) {
                    class t {
                        constructor(t, e) {
                            this.da_1 = t, this.ea_1 = e
                        }
                        r() {
                            return this.da_1.length
                        }
                        z() {
                            return 0 === this.da_1.length
                        }
                        fa(t) {
                            return (0, s.Al)(this.da_1, t)
                        }
                        ga(t) {
                            var e;
                            t: {
                                if (!!(0, l.GT)(t, (0, u.oy)()) && t.z()) e = !0;
                                else {
                                    for (var r = t.o(); r.p();) {
                                        var n = r.q();
                                        if (!this.fa(n)) {
                                            e = !1;
                                            break t
                                        }
                                    }
                                    e = !0
                                }
                            }
                            return e
                        }
                        b1(t) {
                            return this.ga(t)
                        }
                        o() {
                            return (0, i.j)(this.da_1)
                        }
                    }(0, o.mK)(t, "ArrayAsCollection", c.I, c.I, [(0, u.oy)()]), n = t
                }
                return n
            }

            function m(t) {
                return new(v())(t, !1)
            }

            function g() {
                throw (0, d.nt)().h9("Index overflow has happened.")
            }
            new(function() {
                if (a === c.I) {
                    class t {
                        p() {
                            return !1
                        }
                        q() {
                            throw (0, d.Lo)().t3()
                        }
                    }(0, o.F)(t, "EmptyIterator"), a = t
                }
                return a
            }())
        },
        BTXI: (t, e, r) => {
            "use strict";
            r.d(e, {
                B: () => xt
            });
            var n, a, i, s = r("yCNW"),
                u = r("96qr"),
                l = r("H4Sp"),
                o = r("onyb"),
                c = r("qWJg"),
                d = r("8CVC"),
                f = r("0qyc");
            a = new(function() {
                if (n === u.I) {
                    class t {
                        q4(t) {
                            for (var e = 0, r = t.o(); r.p();) {
                                var n = r.q(),
                                    a = e,
                                    i = null == n ? null : (0, o.gP)(n);
                                e = a + (null == i ? 0 : i) | 0
                            }
                            return e
                        }
                        p4(t, e) {
                            return t.r() === e.r() && t.b1(e)
                        }
                    }(0, s.cA)(t), n = t
                }
                return n
            }());
            var h, v, m, g, p = r("6n23"),
                b = r("TudY");

            function y(t, e) {
                return e === t ? "(this Map)" : (0, l.V)(e)
            }

            function k(t, e) {
                var r;
                t: {
                    for (var n = t.h1().o(); n.p();) {
                        var a = n.q();
                        if ((0, o.mR)(a.c1(), e)) {
                            r = a;
                            break t
                        }
                    }
                    r = null
                }
                return r
            }

            function x() {
                if (m === u.I) {
                    class t extends(function() {
                        if (i === u.I) {
                            class t extends((0, c.M)()) {
                                static ba(t) {
                                    return this.k3(t)
                                }
                                equals(t) {
                                    return t === this || !(null == t || !(0, f.GT)(t, (0, d.LD)())) && a.p4(this, t)
                                }
                                hashCode() {
                                    return a.q4(this)
                                }
                            }(0, s.mK)(t, "AbstractSet", u.I, u.I, [(0, c.M)(), (0, d.LD)()]), i = t
                        }
                        return i
                    }()) {
                        static aa(t, e) {
                            return e === u.I && (e = {}), e.z9_1 = t, this.ba(e)
                        }
                        x5(t) {
                            return this.z9_1.e1(t)
                        }
                        a1(t) {
                            return (null == t || null != t) && this.x5(null == t || null != t ? t : (0, p.XR)())
                        }
                        o() {
                            var t = this.z9_1.h1().o();
                            return new(function() {
                                if (h === u.I) {
                                    class t {
                                        constructor(t) {
                                            this.y9_1 = t
                                        }
                                        p() {
                                            return this.y9_1.p()
                                        }
                                        q() {
                                            return this.y9_1.q().c1()
                                        }
                                    }(0, s.mK)(t), h = t
                                }
                                return h
                            }())(t)
                        }
                        r() {
                            return this.z9_1.r()
                        }
                    }(0, s.mK)(t), m = t
                }
                return m
            }

            function _() {
                if (g === u.I) {
                    class t {
                        static i4() {
                            var t = (0, o.Xh)(this);
                            return t.g4_1 = null, t.h4_1 = null, t
                        }
                        e1(t) {
                            return !(null == k(this, t))
                        }
                        n4(t) {
                            if (null == t || !(0, f.GT)(t, (0, d.gc)())) return !1;
                            var e = t.c1(),
                                r = t.d1(),
                                n = ((0, f.GT)(this, (0, d.jt)()) ? this : (0, p.XR)()).f1(e);
                            return !!(0, o.mR)(r, n) && !(null == n && !((0, f.GT)(this, (0, d.jt)()) ? this : (0, p.XR)()).e1(e))
                        }
                        equals(t) {
                            if (t === this) return !0;
                            if (null == t || !(0, f.GT)(t, (0, d.jt)())) return !1;
                            if (this.r() !== t.r()) return !1;
                            var e;
                            t: {
                                var r = t.h1();
                                if (!!(0, f.GT)(r, (0, d.oy)()) && r.z()) e = !0;
                                else {
                                    for (var n = r.o(); n.p();) {
                                        var a = n.q();
                                        if (!this.n4(a)) {
                                            e = !1;
                                            break t
                                        }
                                    }
                                    e = !0
                                }
                            }
                            return e
                        }
                        f1(t) {
                            var e = k(this, t);
                            return null == e ? null : e.d1()
                        }
                        hashCode() {
                            return (0, o.gP)(this.h1())
                        }
                        r() {
                            return this.h1().r()
                        }
                        g1() {
                            if (null == this.g4_1) {
                                this.g4_1 = x().aa(this)
                            }
                            return (0, p.Nh)(this.g4_1)
                        }
                        toString() {
                            var t, e = this.h1();
                            return (0, b.SC)(e, ", ", "{", "}", u.I, u.I, (t = this, function(e) {
                                return t.ca(e)
                            }))
                        }
                        ca(t) {
                            return y(this, t.c1()) + "=" + y(this, t.d1())
                        }
                    }(0, s.mK)(t, "AbstractMap", u.I, u.I, [(0, d.jt)()]), g = t
                }
                return g
            }
            new(function() {
                if (v === u.I) {
                    class t {}(0, s.cA)(t), v = t
                }
                return v
            }());
            var S, N = r("9Rpo");

            function A() {
                if (S === u.I) {
                    class t extends((0, N.D)()) {
                        static o4() {
                            return this.j3()
                        }
                        equals(t) {
                            return t === this || !(null == t || !(0, f.GT)(t, (0, d.LD)())) && a.p4(this, t)
                        }
                        hashCode() {
                            return a.q4(this)
                        }
                    }(0, s.mK)(t, "AbstractMutableSet", u.I, u.I, [(0, N.D)(), (0, d.LD)(), (0, d.oy)()]), S = t
                }
                return S
            }
            var I, q, P, w = r("SR+u");

            function j() {
                if (q === u.I) {
                    class t extends(A()) {
                        static l4(t) {
                            var e = this.o4();
                            return e.k4_1 = t, e
                        }
                        m6(t) {
                            throw (0, w.mP)().n6("Add is not supported on keys")
                        }
                        l3(t) {
                            return this.m6(null == t || null != t ? t : (0, p.XR)())
                        }
                        x5(t) {
                            return this.k4_1.e1(t)
                        }
                        a1(t) {
                            return (null == t || null != t) && this.x5(null == t || null != t ? t : (0, p.XR)())
                        }
                        o() {
                            var t = this.k4_1.h1().o();
                            return new(function() {
                                if (I === u.I) {
                                    class t {
                                        constructor(t) {
                                            this.l6_1 = t
                                        }
                                        p() {
                                            return this.l6_1.p()
                                        }
                                        q() {
                                            return this.l6_1.q().c1()
                                        }
                                        o3() {
                                            return this.l6_1.o3()
                                        }
                                    }(0, s.mK)(t), I = t
                                }
                                return I
                            }())(t)
                        }
                        r() {
                            return this.k4_1.r()
                        }
                        n3() {
                            return this.k4_1.n3()
                        }
                    }(0, s.mK)(t, "HashMapKeysDefault"), q = t
                }
                return q
            }

            function R() {
                if (P === u.I) {
                    class t extends(_()) {
                        static f4() {
                            var t = this.i4();
                            return t.d4_1 = null, t.e4_1 = null, t
                        }
                        j4() {
                            return j().l4(this)
                        }
                        g1() {
                            var t, e = this.d4_1;
                            if (null == e) {
                                var r = this.j4();
                                this.d4_1 = r, t = r
                            } else t = e;
                            return t
                        }
                        n3() {}
                    }(0, s.mK)(t, "AbstractMutableMap", u.I, u.I, [_(), (0, d.jt)()]), P = t
                }
                return P
            }
            var M = r("w3mb"),
                C = r("PRQZ"),
                T = r("FOOV"),
                E = r("uThH"),
                L = r("5rI7");

            function O(t) {
                if (!(t >= 0)) {
                    throw (0, w.fK)().v((0, o.no)("capacity must be non-negative."))
                }
                return (0, L.M)(Array(t), null)
            }

            function F(t, e, r) {
                t.fill(null, e, r)
            }

            function z(t, e) {
                return function(t, e) {
                    if (!(e >= 0)) {
                        var r = "Invalid new array size: " + e + ".";
                        throw (0, w.fK)().v((0, o.no)(r))
                    }
                    return function(t, e, r) {
                        var n = t.slice(0, e);
                        void 0 !== t.$type$ && (n.$type$ = t.$type$);
                        var a = t.length;
                        if (e > a)
                            for (n.length = e; a < e;) {
                                var i = a;
                                a = i + 1 | 0, n[i] = r
                            }
                        return n
                    }(t, e, null)
                }(t, e)
            }

            function B(t, e) {
                t[e] = null
            }
            var V, U = r("evBU"),
                D = r("qXtv");

            function Y(t) {
                var e;
                t: {
                    if (!!(0, f.GT)(t, (0, d.oy)()) && t.z()) e = !0;
                    else {
                        for (var r = t.o(); r.p();) {
                            var n = r.q();
                            if (!(!(null == n || !(0, f.GT)(n, (0, d.gc)())) && this.b8(n))) {
                                e = !1;
                                break t
                            }
                        }
                        e = !0
                    }
                }
                return e
            }

            function K() {
                if (V === u.I) {
                    class t {}(0, s.Ou)(t, "InternalMap"), V = t
                }
                return V
            }
            var G, H, Q, W, $, X, J, Z, tt, et, rt, nt = Math.imul,
                at = Math.clz32;

            function it(t, e) {
                return (0, C.GV)(nt((0, M.vv)(e, 1), 3))
            }

            function st(t, e) {
                return at(e) + 1 | 0
            }

            function ut(t) {
                return t.j5_1.length
            }

            function lt(t) {
                return t.m5_1.length
            }

            function ot(t) {
                t.q5_1 = t.q5_1 + 1 | 0
            }

            function ct(t, e) {
                ! function(t, e) {
                    var r = ut(t) - t.o5_1 | 0,
                        n = t.o5_1 - t.r() | 0;
                    return r < e && (n + r | 0) >= e && n >= (ut(t) / 4 | 0)
                }(t, e) ? function(t, e) {
                    if (e < 0) throw (0, w.sU)().t6("too many elements");
                    if (e > ut(t)) {
                        var r = E.C.u6(ut(t), e);
                        t.j5_1 = z(t.j5_1, r);
                        var n = t,
                            a = t.k5_1;
                        n.k5_1 = null == a ? null : z(a, r), t.l5_1 = function(t, e) {
                            if (!(e >= 0)) {
                                var r = "Invalid new array size: " + e + ".";
                                throw (0, w.fK)().v((0, o.no)(r))
                            }
                            return function(t, e) {
                                for (var r = t.length, n = e.length, a = 0, i = e; a < r && a < n;) {
                                    var s = a,
                                        u = a;
                                    a = u + 1 | 0, i[s] = t[u]
                                }
                                return e
                            }(t, new Int32Array(e))
                        }(t.l5_1, r);
                        var i = it(0, r);
                        i > lt(t) && ft(t, i)
                    }
                }(t, t.o5_1 + e | 0) : ft(t, lt(t))
            }

            function dt(t, e) {
                return null == e ? 0 : nt((0, o.gP)(e), -1640531527) >>> t.p5_1 | 0
            }

            function ft(t, e) {
                var r, n, a, i;
                ot(t), t.o5_1 > t.r5_1 && function(t) {
                    for (var e = 0, r = 0, n = t.k5_1; e < t.o5_1;) t.l5_1[e] >= 0 && (t.j5_1[r] = t.j5_1[e], null != n && (n[r] = n[e]), r = r + 1 | 0), e = e + 1 | 0;
                    F(t.j5_1, r, t.o5_1), null == n || F(n, r, t.o5_1), t.o5_1 = r
                }(t), e !== lt(t) ? (t.m5_1 = new Int32Array(e), t.p5_1 = st(0, e)) : (r = t.m5_1, n = 0, a = 0, i = lt(t), a = a === u.I ? 0 : a, i = i === u.I ? r.length : i, E.C.f3(a, i, r.length), r.fill(n, a, i));
                for (var s = 0; s < t.o5_1;) {
                    var l = s;
                    if (s = l + 1 | 0, !ht(t, l)) throw (0, w.XI)().i2("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?")
                }
            }

            function ht(t, e) {
                for (var r = dt(t, t.j5_1[e]), n = t.n5_1;;) {
                    if (0 === t.m5_1[r]) return t.m5_1[r] = e + 1 | 0, t.l5_1[e] = r, !0;
                    if ((n = n - 1 | 0) < 0) return !1;
                    var a = r;
                    r = a - 1 | 0, 0 === a && (r = lt(t) - 1 | 0)
                }
            }

            function vt(t, e) {
                for (var r = dt(t, e), n = t.n5_1;;) {
                    var a = t.m5_1[r];
                    if (0 === a) return -1;
                    if (a > 0 && (0, o.mR)(t.j5_1[a - 1 | 0], e)) return a - 1 | 0;
                    if ((n = n - 1 | 0) < 0) return -1;
                    var i = r;
                    r = i - 1 | 0, 0 === i && (r = lt(t) - 1 | 0)
                }
            }

            function mt(t, e) {
                B(t.j5_1, e);
                var r = t.k5_1;
                null == r || B(r, e),
                    function(t, e) {
                        var r = e,
                            n = e,
                            a = 0,
                            i = (0, M.iG)(nt(t.n5_1, 2), lt(t) / 2 | 0);
                        for (;;) {
                            var s = r;
                            if (r = s - 1 | 0, 0 === s && (r = lt(t) - 1 | 0), (a = a + 1 | 0) > t.n5_1) return t.m5_1[n] = 0, T.h;
                            var u = t.m5_1[r];
                            if (0 === u) return t.m5_1[n] = 0, T.h;
                            if (u < 0) t.m5_1[n] = -1, n = r, a = 0;
                            else(dt(t, t.j5_1[u - 1 | 0]) - r & lt(t) - 1) >= a && (t.m5_1[n] = u, t.l5_1[u - 1 | 0] = n, n = r, a = 0);
                            if ((i = i - 1 | 0) < 0) return t.m5_1[n] = -1, T.h
                        }
                    }(t, t.l5_1[e]), t.l5_1[e] = -1, t.r5_1 = t.r5_1 - 1 | 0, ot(t)
            }

            function gt() {
                if (H === u.I) {
                    class t {
                        constructor(t) {
                            this.z6_1 = t, this.a7_1 = 0, this.b7_1 = -1, this.c7_1 = this.z6_1.q5_1, this.d7()
                        }
                        d7() {
                            for (; this.a7_1 < this.z6_1.o5_1 && this.z6_1.l5_1[this.a7_1] < 0;) this.a7_1 = this.a7_1 + 1 | 0
                        }
                        p() {
                            return this.a7_1 < this.z6_1.o5_1
                        }
                        o3() {
                            if (this.e7(), -1 === this.b7_1) {
                                throw (0, w.XI)().i2((0, o.no)("Call next() before removing element from the iterator."))
                            }
                            this.z6_1.d6(), mt(this.z6_1, this.b7_1), this.b7_1 = -1, this.c7_1 = this.z6_1.q5_1
                        }
                        e7() {
                            if (this.z6_1.q5_1 !== this.c7_1) throw (0, w.Xw)().i7()
                        }
                    }(0, s.mK)(t, "Itr"), H = t
                }
                return H
            }

            function pt() {
                if (W === u.I) {
                    class t extends(gt()) {
                        q() {
                            if (this.e7(), this.a7_1 >= this.z6_1.o5_1) throw (0, w.Lo)().t3();
                            var t = this.a7_1;
                            this.a7_1 = t + 1 | 0, this.b7_1 = t;
                            var e = new(function() {
                                if ($ === u.I) {
                                    class t {
                                        constructor(t, e) {
                                            this.w7_1 = t, this.x7_1 = e
                                        }
                                        c1() {
                                            return this.w7_1.j5_1[this.x7_1]
                                        }
                                        d1() {
                                            return (0, p.Nh)(this.w7_1.k5_1)[this.x7_1]
                                        }
                                        equals(t) {
                                            return !!(!(null == t || !(0, f.GT)(t, (0, d.gc)())) && (0, o.mR)(t.c1(), this.c1())) && (0, o.mR)(t.d1(), this.d1())
                                        }
                                        hashCode() {
                                            var t = this.c1(),
                                                e = null == t ? null : (0, o.gP)(t),
                                                r = null == e ? 0 : e,
                                                n = this.d1(),
                                                a = null == n ? null : (0, o.gP)(n);
                                            return r ^ (null == a ? 0 : a)
                                        }
                                        toString() {
                                            return (0, l.V)(this.c1()) + "=" + (0, l.V)(this.d1())
                                        }
                                    }(0, s.mK)(t, "EntryRef", u.I, u.I, [(0, d.gc)()]), $ = t
                                }
                                return $
                            }())(this.z6_1, this.b7_1);
                            return this.d7(), e
                        }
                        r7() {
                            if (this.a7_1 >= this.z6_1.o5_1) throw (0, w.Lo)().t3();
                            var t = this.a7_1;
                            this.a7_1 = t + 1 | 0, this.b7_1 = t;
                            var e = this.z6_1.j5_1[this.b7_1],
                                r = null == e ? null : (0, o.gP)(e),
                                n = null == r ? 0 : r,
                                a = (0, p.Nh)(this.z6_1.k5_1)[this.b7_1],
                                i = null == a ? null : (0, o.gP)(a),
                                s = n ^ (null == i ? 0 : i);
                            return this.d7(), s
                        }
                        s7(t) {
                            if (this.a7_1 >= this.z6_1.o5_1) throw (0, w.Lo)().t3();
                            var e = this.a7_1;
                            this.a7_1 = e + 1 | 0, this.b7_1 = e;
                            var r = this.z6_1.j5_1[this.b7_1];
                            (0, o.mR)(r, this.z6_1) ? t.u7("(this Map)"): t.t7(r), t.v7((0, U.WB)(61));
                            var n = (0, p.Nh)(this.z6_1.k5_1)[this.b7_1];
                            (0, o.mR)(n, this.z6_1) ? t.u7("(this Map)"): t.t7(n), this.d7()
                        }
                    }(0, s.mK)(t, "EntriesItr"), W = t
                }
                return W
            }

            function bt() {
                if (X === u.I) {
                    class t {
                        static y7(t, e, r, n, a, i) {
                            var s = (0, o.Xh)(this);
                            return s.j5_1 = t, s.k5_1 = e, s.l5_1 = r, s.m5_1 = n, s.n5_1 = a, s.o5_1 = i, s.p5_1 = st(0, lt(s)), s.q5_1 = 0, s.r5_1 = 0, s.s5_1 = !1, s
                        }
                        r() {
                            return this.r5_1
                        }
                        static t5() {
                            return this.z7(8)
                        }
                        static z7(t) {
                            return this.y7(O(t), null, new Int32Array(t), new Int32Array(it(0, t)), 2, 0)
                        }
                        static v5(t, e) {
                            var r = this.z7(t);
                            if (!(e > 0)) {
                                var n = "Non-positive load factor: " + e;
                                throw (0, w.fK)().v((0, o.no)(n))
                            }
                            return r
                        }
                        f1(t) {
                            var e = vt(this, t);
                            return e < 0 ? null : (0, p.Nh)(this.k5_1)[e]
                        }
                        x5(t) {
                            return vt(this, t) >= 0
                        }
                        m4(t, e) {
                            var r = function(t, e) {
                                    t.d6();
                                    t: for (;;)
                                        for (var r = dt(t, e), n = (0, M.iG)(nt(t.n5_1, 2), lt(t) / 2 | 0), a = 0;;) {
                                            var i = t.m5_1[r];
                                            if (i <= 0) {
                                                if (t.o5_1 >= ut(t)) {
                                                    ct(t, 1);
                                                    continue t
                                                }
                                                var s = t.o5_1;
                                                t.o5_1 = s + 1 | 0;
                                                var u = s;
                                                return t.j5_1[u] = e, t.l5_1[u] = r, t.m5_1[r] = u + 1 | 0, t.r5_1 = t.r5_1 + 1 | 0, ot(t), a > t.n5_1 && (t.n5_1 = a), u
                                            }
                                            if ((0, o.mR)(t.j5_1[i - 1 | 0], e)) return 0 | -i;
                                            if ((a = a + 1 | 0) > n) {
                                                ft(t, nt(lt(t), 2));
                                                continue t
                                            }
                                            var l = r;
                                            r = l - 1 | 0, 0 === l && (r = lt(t) - 1 | 0)
                                        }
                                }(this, t),
                                n = function(t) {
                                    var e = t.k5_1;
                                    if (null != e) return e;
                                    var r = O(ut(t));
                                    return t.k5_1 = r, r
                                }(this);
                            if (r < 0) {
                                var a = n[(0 | -r) - 1 | 0];
                                return n[(0 | -r) - 1 | 0] = e, a
                            }
                            return n[r] = e, null
                        }
                        equals(t) {
                            var e, r;
                            t === this ? e = !0 : (r = !(null == t || !(0, f.GT)(t, (0, d.jt)())) && function(t, e) {
                                return t.r5_1 === e.r() && t.k6(e.h1())
                            }(this, t), e = r);
                            return e
                        }
                        hashCode() {
                            for (var t = 0, e = this.g6(); e.p();) t = t + e.r7() | 0;
                            return t
                        }
                        toString() {
                            var t = (0, D.H)().a8(2 + nt(this.r5_1, 3) | 0);
                            t.u7("{");
                            for (var e = 0, r = this.g6(); r.p();) e > 0 && t.u7(", "), r.s7(t), e = e + 1 | 0;
                            return t.u7("}"), t.toString()
                        }
                        d6() {
                            if (this.s5_1) throw (0, w.mP)().a5()
                        }
                        j6(t) {
                            var e = vt(this, t.c1());
                            return !(e < 0) && (0, o.mR)((0, p.Nh)(this.k5_1)[e], t.d1())
                        }
                        b8(t) {
                            return this.j6((0, f.GT)(t, (0, d.gc)()) ? t : (0, p.XR)())
                        }
                        c6() {
                            return new(function() {
                                if (Q === u.I) {
                                    class t extends(gt()) {
                                        q() {
                                            if (this.e7(), this.a7_1 >= this.z6_1.o5_1) throw (0, w.Lo)().t3();
                                            var t = this.a7_1;
                                            this.a7_1 = t + 1 | 0, this.b7_1 = t;
                                            var e = this.z6_1.j5_1[this.b7_1];
                                            return this.d7(), e
                                        }
                                    }(0, s.mK)(t, "KeysItr"), Q = t
                                }
                                return Q
                            }())(this)
                        }
                        g6() {
                            return new(pt())(this)
                        }
                    }(0, o.Z4)(t).k6 = Y, (0, s.mK)(t, "InternalHashMap", t.t5, u.I, [K()]), X = t
                }
                return X
            }

            function yt() {
                if (Z === u.I) {
                    class t extends(function() {
                        if (tt === u.I) {
                            class t extends(A()) {
                                static f6(t) {
                                    var e = this.o4();
                                    return e.e6_1 = t, e
                                }
                                r() {
                                    return this.e6_1.r()
                                }
                                z() {
                                    return 0 === this.e6_1.r()
                                }
                                h6(t) {
                                    return this.e6_1.j6(t)
                                }
                                a1(t) {
                                    return !(null == t || !(0, f.GT)(t, (0, d.gc)())) && this.h6(null != t && (0, f.GT)(t, (0, d.gc)()) ? t : (0, p.XR)())
                                }
                                i6(t) {
                                    throw (0, w.mP)().a5()
                                }
                                l3(t) {
                                    return this.i6(null != t && (0, f.GT)(t, (0, d.gc)()) ? t : (0, p.XR)())
                                }
                                p3(t) {
                                    throw (0, w.mP)().a5()
                                }
                                b1(t) {
                                    return this.e6_1.k6(t)
                                }
                                n3() {
                                    return this.e6_1.d6()
                                }
                            }(0, s.mK)(t, "HashMapEntrySetBase", u.I, u.I, [(0, d.LD)(), (0, d.oy)(), A()]), tt = t
                        }
                        return tt
                    }()) {
                        static b6(t) {
                            return this.f6(t)
                        }
                        o() {
                            return this.e6_1.g6()
                        }
                    }(0, s.mK)(t, "HashMapEntrySet"), Z = t
                }
                return Z
            }

            function kt() {
                if (et === u.I) {
                    class t extends(R()) {
                        static h5(t) {
                            var e = this.f4();
                            return e.g5_1 = null, e.f5_1 = t, e
                        }
                        static i5() {
                            return this.h5(bt().t5())
                        }
                        static u5(t, e) {
                            return this.h5(bt().v5(t, e))
                        }
                        static w5(t) {
                            return this.u5(t, 1)
                        }
                        e1(t) {
                            return this.f5_1.x5(t)
                        }
                        j4() {
                            return function() {
                                if (J === u.I) {
                                    class t extends(A()) {
                                        static z5(t) {
                                            var e = this.o4();
                                            return e.y5_1 = t, e
                                        }
                                        r() {
                                            return this.y5_1.r()
                                        }
                                        z() {
                                            return 0 === this.y5_1.r()
                                        }
                                        a1(t) {
                                            return this.y5_1.x5(t)
                                        }
                                        l3(t) {
                                            throw (0, w.mP)().a5()
                                        }
                                        p3(t) {
                                            throw (0, w.mP)().a5()
                                        }
                                        o() {
                                            return this.y5_1.c6()
                                        }
                                        n3() {
                                            return this.y5_1.d6()
                                        }
                                    }(0, s.mK)(t, "HashMapKeys", u.I, u.I, [(0, d.LD)(), (0, d.oy)(), A()]), J = t
                                }
                                return J
                            }().z5(this.f5_1)
                        }
                        h1() {
                            var t, e = this.g5_1;
                            if (null == e) {
                                var r = yt().b6(this.f5_1);
                                this.g5_1 = r, t = r
                            } else t = e;
                            return t
                        }
                        f1(t) {
                            return this.f5_1.f1(t)
                        }
                        m4(t, e) {
                            return this.f5_1.m4(t, e)
                        }
                        r() {
                            return this.f5_1.r()
                        }
                    }(0, s.mK)(t, "HashMap", t.i5, u.I, [R(), (0, d.jt)()]), et = t
                }
                return et
            }

            function xt() {
                if (rt === u.I) {
                    class t extends(kt()) {
                        static i8() {
                            var t = this.i5();
                            return t
                        }
                        static j8(t) {
                            var e = this.w5(t);
                            return e
                        }
                        n3() {
                            return this.f5_1.d6()
                        }
                    }(0, s.mK)(t, "LinkedHashMap", t.i8, u.I, [kt(), (0, d.jt)()]), rt = t
                }
                return rt
            }
            new(function() {
                if (G === u.I) {
                    class t {
                        constructor() {
                            this.v6_1 = -1640531527, this.w6_1 = 8, this.x6_1 = 2, this.y6_1 = -1
                        }
                    }(0, s.cA)(t), G = t
                }
                return G
            }())
        },
        "LO/3": (t, e, r) => {
            "use strict";
            r.d(e, {
                Al: () => f,
                LW: () => d,
                Mi: () => v,
                OP: () => c,
                cK: () => h,
                ek: () => o
            });
            var n = r("oj/q"),
                a = r("NjuE"),
                i = r("onyb"),
                s = r("96qr"),
                u = r("qXtv"),
                l = r("DInM");

            function o(t) {
                return (0, n.e)().g((0, a.Le)(t))
            }

            function c(t) {
                return 0 === t.length ? null : t[0]
            }

            function d(t, e) {
                if (null == e) {
                    var r = 0,
                        n = t.length - 1 | 0;
                    if (r <= n)
                        do {
                            var a = r;
                            if (r = r + 1 | 0, null == t[a]) return a
                        } while (r <= n)
                } else {
                    var s = 0,
                        u = t.length - 1 | 0;
                    if (s <= u)
                        do {
                            var l = s;
                            if (s = s + 1 | 0, (0, i.mR)(e, t[l])) return l
                        } while (s <= u)
                }
                return -1
            }

            function f(t, e) {
                return d(t, e) >= 0
            }

            function h(t) {
                return t.length - 1 | 0
            }

            function v(t, e, r, n, a, i, o) {
                return e = e === s.I ? ", " : e, r = r === s.I ? "" : r, n = n === s.I ? "" : n, a = a === s.I ? -1 : a, i = i === s.I ? "..." : i, o = o === s.I ? null : o,
                    function(t, e, r, n, a, i, u, o) {
                        r = r === s.I ? ", " : r, n = n === s.I ? "" : n, a = a === s.I ? "" : a, i = i === s.I ? -1 : i, u = u === s.I ? "..." : u, o = o === s.I ? null : o, e.n(n);
                        var c = 0,
                            d = 0,
                            f = t.length;
                        t: for (; d < f;) {
                            var h = t[d];
                            if (d = d + 1 | 0, (c = c + 1 | 0) > 1 && e.n(r), !(i < 0 || c <= i)) break t;
                            (0, l.k)(e, h, o)
                        }
                        i >= 0 && c > i && e.n(u);
                        return e.n(a), e
                    }(t, (0, u.H)().m(), e, r, n, a, i, o).toString()
            }
        },
        TudY: (t, e, r) => {
            "use strict";
            r.d(e, {
                SC: () => s
            });
            var n = r("96qr"),
                a = r("qXtv"),
                i = r("DInM");

            function s(t, e, r, s, u, l, o) {
                return e = e === n.I ? ", " : e, r = r === n.I ? "" : r, s = s === n.I ? "" : s, u = u === n.I ? -1 : u, l = l === n.I ? "..." : l, o = o === n.I ? null : o,
                    function(t, e, r, a, s, u, l, o) {
                        r = r === n.I ? ", " : r, a = a === n.I ? "" : a, s = s === n.I ? "" : s, u = u === n.I ? -1 : u, l = l === n.I ? "..." : l, o = o === n.I ? null : o, e.n(a);
                        var c = 0,
                            d = t.o();
                        t: for (; d.p();) {
                            var f = d.q();
                            if ((c = c + 1 | 0) > 1 && e.n(r), !(u < 0 || c <= u)) break t;
                            (0, i.k)(e, f, o)
                        }
                        u >= 0 && c > u && e.n(l);
                        return e.n(s), e
                    }(t, (0, a.H)().m(), e, r, s, u, l, o).toString()
            }
        },
        "68PZ": (t, e, r) => {
            "use strict";
            r.d(e, {
                hm: () => v,
                wg: () => d,
                Tb: () => m,
                lB: () => h,
                sW: () => f
            });
            var n, a = r("NjuE"),
                i = r("FOOV"),
                s = r("LO/3"),
                u = r("5rI7");

            function l(t, e) {
                if (function() {
                        var t = n;
                        if (null != t) return t;
                        n = !1;
                        var e = [],
                            r = 0;
                        if (r < 600)
                            do {
                                var a = r;
                                r = r + 1 | 0, e.push(a)
                            } while (r < 600);
                        var i = c;
                        e.sort(i);
                        var s = 1,
                            u = e.length;
                        if (s < u)
                            do {
                                var l = s;
                                s = s + 1 | 0;
                                var o = e[l - 1 | 0],
                                    d = e[l];
                                if ((3 & o) === (3 & d) && o >= d) return !1
                            } while (s < u);
                        return n = !0, !0
                    }()) {
                    var r = (a = e, function(t, e) {
                        return a.compare(t, e)
                    });
                    t.sort(r)
                } else ! function(t, e, r, n) {
                    var a = t.length,
                        i = (0, u.M)(Array(a), null),
                        s = o(t, i, e, r, n);
                    if (s !== t) {
                        var l = e;
                        if (l <= r)
                            do {
                                var c = l;
                                l = l + 1 | 0, t[c] = s[c]
                            } while (c !== r)
                    }
                }(t, 0, (0, s.cK)(t), e);
                var a
            }

            function o(t, e, r, n, a) {
                if (r === n) return t;
                var i = (r + n | 0) / 2 | 0,
                    s = o(t, e, r, i, a),
                    u = o(t, e, i + 1 | 0, n, a),
                    l = s === e ? t : e,
                    c = r,
                    d = i + 1 | 0,
                    f = r;
                if (f <= n)
                    do {
                        var h = f;
                        if (f = f + 1 | 0, c <= i && d <= n) {
                            var v = s[c],
                                m = u[d];
                            a.compare(v, m) <= 0 ? (l[h] = v, c = c + 1 | 0) : (l[h] = m, d = d + 1 | 0)
                        } else c <= i ? (l[h] = s[c], c = c + 1 | 0) : (l[h] = u[d], d = d + 1 | 0)
                    } while (h !== n);
                return l
            }

            function c(t, e) {
                return (3 & t) - (3 & e) | 0
            }

            function d(t) {
                return (0, a.yP)(t)
            }

            function f(t, e) {
                ! function(t, e) {
                    if (t.r() <= 1) return i.h;
                    var r = m(t);
                    l(r, e);
                    var n = 0,
                        a = r.length;
                    if (n < a)
                        do {
                            var s = n;
                            n = n + 1 | 0, t.i3(s, r[s])
                        } while (n < a)
                }(t, e)
            }

            function h(t) {
                return t
            }

            function v(t) {
                return t < 0 && (0, a.F2)(), t
            }

            function m(t) {
                return void 0 !== t.toArray ? t.toArray() : d(t)
            }
            n = null
        },
        "5rI7": (t, e, r) => {
            "use strict";
            r.d(e, {
                M: () => u,
                j: () => l
            });
            var n, a = r("SR+u"),
                i = r("yCNW"),
                s = r("96qr");

            function u(t, e) {
                var r = 0,
                    n = t.length - 1 | 0;
                if (r <= n)
                    do {
                        var a = r;
                        r = r + 1 | 0, t[a] = e
                    } while (a !== n);
                return t
            }

            function l(t) {
                return new(function() {
                    if (n === s.I) {
                        class t {
                            constructor(t) {
                                this.e2_1 = t, this.d2_1 = 0
                            }
                            p() {
                                return !(this.d2_1 === this.e2_1.length)
                            }
                            q() {
                                if (this.d2_1 === this.e2_1.length) throw (0, a.Lo)().k("" + this.d2_1);
                                var t = this.d2_1;
                                return this.d2_1 = t + 1 | 0, this.e2_1[t]
                            }
                        }(0, i.mK)(t), n = t
                    }
                    return n
                }())(t)
            }
        },
        DInM: (t, e, r) => {
            "use strict";
            r.d(e, {
                k: () => s
            });
            var n = r("H4Sp"),
                a = r("evBU"),
                i = r("0qyc");

            function s(t, e, r) {
                null != r ? t.n(r(e)) : null == e || (0, i.we)(e) ? t.n(e) : e instanceof(0, a.x_)() ? t.v7(e.sb_1) : t.n((0, n.V)(e))
            }
        }
    }
]);