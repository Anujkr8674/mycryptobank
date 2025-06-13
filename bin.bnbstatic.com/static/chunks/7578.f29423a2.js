(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [7578], {
        K64I: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p,
                p: () => c
            });
            var r = n("DTvD"),
                a = n("4hgs"),
                s = n("VKcy"),
                i = n("A4nT"),
                o = n("YxIV");
            const l = (0, n("eR+e").y)({
                    queryKey: i.Bz.QUERY_MARK_PRICE_ALL,
                    subscribeToStreamFn: ({
                        stream: e,
                        isCM: t,
                        queryClient: n
                    }) => e.getMarkPriceAllStream().subscribe((e => {
                        n.setQueryData(i.Bz.QUERY_MARK_PRICE_ALL(t), (t => ({ ...t || {},
                            ...e
                        })))
                    }))
                }),
                u = {},
                c = (e, t = {
                    enabled: !0
                }) => {
                    const n = (0, a.useQueryClient)(),
                        u = t.enabled && "boolean" === typeof e,
                        c = (0, o.OE)();
                    (0, r.useEffect)((function() {
                        u && l({
                            getSDK: c,
                            queryClient: n
                        })
                    }), [n, u, c]);
                    const {
                        data: d
                    } = (0, a.useQuery)(i.Bz.QUERY_MARK_PRICE_ALL(e), (() => (({
                        isCM: e
                    }) => (e ? s.Cs : s.Q5)({}).then((e => e ? e.reduce(((e, t) => (e[t.symbol] = {
                        indexPrice: Number(t.indexPrice),
                        lastFundingRate: Number(t.lastFundingRate),
                        markPrice: Number(t.markPrice),
                        nextFundingTime: Number(t.nextFundingTime),
                        estimatedSettlePrice: Number(t.estimatedSettlePrice),
                        symbol: t.symbol
                    }, e)), {}) : {})))({
                        isCM: e
                    })), {
                        notifyOnChangeProps: ["data"],
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: u,
                        select: t.select
                    });
                    return d
                },
                d = e => e,
                p = (e, t = {
                    enabled: !0
                }) => {
                    const n = (0, a.useQueryClient)(),
                        s = t.enabled && "boolean" === typeof e,
                        i = (0, o.OE)();
                    (0, r.useEffect)((function() {
                        s && l({
                            getSDK: i,
                            queryClient: n
                        })
                    }), [n, s, i]);
                    return c(e, { ...t,
                        select: d
                    }) || u
                }
        },
        "eR+e": (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => r
            });
            const r = ({
                queryKey: e,
                subscribeToStreamFn: t
            }) => {
                const n = {
                    CM: void 0,
                    UM: void 0
                };
                let r = !1;
                return ({
                    getSDK: a,
                    queryClient: s
                }) => {
                    if (r) return;
                    r = !0;
                    s.getQueryCache().subscribe((r => {
                        if (!r) return;
                        const {
                            query: i,
                            type: o
                        } = r;
                        if ("queryRemoved" === o || "removed" === o) return;
                        const l = i.queryKey[1],
                            u = i.queryKey[2],
                            c = "CM" === l,
                            d = e(c, {});
                        if (!(i.queryKey[0] === d[0])) return;
                        const p = a({
                                isCM: c
                            }),
                            m = "observerRemoved" === o,
                            f = ((e, t) => e ? "CM" : t ? .copyTradeType ? `UM-${t?.copyTradeType}-${t?.portfolioId}` : "UM")(i.queryKey[1], i.queryKey[2]);
                        n[f] || m || 0 === i.getObserversCount() ? m && 0 === i.getObserversCount() && (n[f] ? .(), n[f] = void 0, s.invalidateQueries(i.queryKey)) : n[f] = t({
                            isCM: c,
                            stream: p,
                            queryClient: s,
                            copyTradingPayload: u
                        })
                    }))
                }
            }
        },
        vAYx: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => v,
                M: () => h
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                s = n.n(a),
                i = n("jor4"),
                o = n("1lvF"),
                l = n("wIZF"),
                u = n("TQvm");
            const c = function(e) {
                return s().createElement(u.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 5h18v4a3 3 0 100 6v4H3v-4a3 3 0 100-6V5zm12.5 2.5H13v9h2.5v-9z",
                    fill: "currentColor"
                }))
            };
            var d = n("xqbL"),
                p = n.n(d),
                m = n("tM9B"),
                f = n("trXm"),
                y = n("mTPC"),
                x = n("JloV"),
                g = n("bt5r");
            const h = ({
                    isCM: e,
                    currency: t
                }) => {
                    const {
                        data: n
                    } = (0, y.X)({
                        currency: t
                    });
                    return "CLAIM" === n ? .status && !e
                },
                v = ({
                    shouldShowIcon: e,
                    isCM: t,
                    containerClassName: n,
                    shouldShowBg: a = !1,
                    currency: s
                }) => {
                    const {
                        t: l
                    } = (0, f.Y_)(), u = h({
                        isCM: t,
                        currency: s
                    }), {
                        data: d
                    } = (0, y.X)({
                        currency: s
                    });
                    if (!u) return (0, r.jsx)(r.Fragment, {});
                    const v = (0, x.k)(d ? .voucherAmount) ? (0, m.jL)(Number(d ? .voucherAmount), 0, 1) : g.VsL;
                    return (0, r.jsxs)(i.A, {
                        className: p()("items-center px-[8px] py-[5px] t-body5", {
                            "rounded-[8px] bg-badgeBg": a
                        }, n),
                        children: [e && (0, r.jsx)(i.A, {
                            className: "items-center justify-center w-[16px] h-[16px] text-TextLink mr-[4px]",
                            children: (0, r.jsx)(c, {
                                className: "text-[16px]"
                            })
                        }), (0, r.jsx)(o.Ay, {
                            className: "text-TextLink",
                            children: l("lossProtection-claimed-hint", {
                                defaultValue: "Your first UM Futures Grid is protected up to {{amount}} {{asset}}",
                                amount: v,
                                asset: "USDT"
                            })
                        })]
                    })
                }
        },
        mLe0: (e, t, n) => {
            "use strict";
            n.d(t, {
                h: () => r
            });
            const r = [{
                name: "strategy-history-all",
                value: "",
                tOptions: {
                    defaultValue: "All"
                }
            }]
        },
        zjzf: (e, t, n) => {
            "use strict";
            n.d(t, {
                o: () => T
            });
            var r = n("DTvD"),
                a = n("+fvz"),
                s = n("5saw"),
                i = n("D8sT"),
                o = n("S+0I"),
                l = n("KrVi"),
                u = n("66mo"),
                c = n.n(u),
                d = n("5nld"),
                p = (function() {
                    var e = (0, o._)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, d.bE)("/bapi/futures/v1/private/future/user-setting/update-optional-symbols", t);
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
                    var e = (0, o._)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, d.bE)("/bapi/futures/v1/private/future/user-setting/get-optional-symbols", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: "",
                                        message: "",
                                        code: ""
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
                    var e = (0, o._)(c().mark((function e(t) {
                        var n, r, a, s;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = "/bapi/futures/v1/public/future/section/info", a = t.host, s = (0, l._)(t, ["host"]), e.prev = 3, e.next = 6, (0, d.Jt)("".concat(a ? "".concat(a).concat(r) : r), s);
                                case 6:
                                    n = e.sent, e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), n = {
                                        success: !1,
                                        data: ""
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
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                m = (function() {
                    var e = (0, o._)(c().mark((function e(t) {
                        var n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, d.Jt)("/bapi/futures/v1/public/future/symbol/extInfo", t);
                                case 4:
                                    n = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), n = {
                                        success: !1,
                                        data: ""
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
                }(), n("4hgs")),
                f = n("A4nT");
            const y = [{
                    description: "",
                    display: "USD\u24c8-M",
                    ruleNumber: 1e3,
                    sectionKey: "USDT-MARIN",
                    sortValue: 1
                }, {
                    description: "",
                    display: "COIN-M",
                    ruleNumber: 4e3,
                    sectionKey: "COIN-MARIN",
                    sortValue: 2
                }],
                x = async e => {
                    try {
                        const {
                            data: t,
                            success: n = !1
                        } = await p({
                            pathFilter: !0,
                            ...e || {}
                        });
                        return n && t.length ? t : y
                    } catch (t) {
                        return y
                    }
                };
            const g = () => (({
                select: e
            } = {}) => (0, m.useQuery)(f.Bz.QUERY_FUTURES_SECTION_INFO, (() => x()), {
                select: e,
                placeholderData: y,
                cacheTime: 1 / 0,
                staleTime: 1 / 0
            }))().data || y;
            var h = n("trXm"),
                v = n("mLe0");
            const b = (e, t) => {
                const {
                    getFutI18n: n
                } = (0, h.ud)(), a = (0, i.h)(), o = g(), l = 3 === Number(t), u = (0, r.useMemo)((() => Object.values(a).filter((e => e && l ? e.isCM : !e ? .isCM)).map((e => {
                    if (!e) return {
                        name: "",
                        value: ""
                    };
                    const {
                        fullName: t
                    } = (0, s.S)(e, n);
                    return {
                        name: t,
                        value: e.symbol
                    }
                })).sort(((e, t) => e.name.localeCompare(t.name)))), [n, a, l]), c = (0, r.useMemo)((() => o.sort(((e, t) => (e.sortValue ? ? 0) - (t.sortValue ? ? 0))).map((e => ({
                    name: e.display,
                    value: e.sectionKey
                })))), [o]);
                return {
                    marketOptions: (0, r.useMemo)((() => v.h.concat(u)), [u]),
                    zoneOptions: (0, r.useMemo)((() => e ? v.h : [...v.h, ...c]), [c, e])
                }
            };
            var j = n("JjoD");

            function T({
                strategyType: e,
                symbol: t = "",
                lang: n
            }) {
                const s = (0, j.c)(t, n),
                    i = b(t, e),
                    o = (0, a.J9)();
                return {
                    marketOptions: (0, r.useMemo)((() => (1 === e ? s.marketOptions : i.marketOptions).filter((e => !o[e.value]))), [e, s.marketOptions, i.marketOptions, o]),
                    zoneOptions: (0, r.useMemo)((() => 1 === e ? s.zoneOptions : i.zoneOptions), [e, s.zoneOptions, i.zoneOptions])
                }
            }
        },
        JjoD: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => c
            });
            var r = n("DTvD"),
                a = n("5nld"),
                s = n("u/YI"),
                i = n("8VP5"),
                o = n("trXm"),
                l = n("mLe0");
            const u = e => {
                const [t, n] = (0, r.useState)({
                    list: [],
                    riskys: [],
                    listMap: {}
                });
                return (0, r.useEffect)((() => {
                    (async () => {
                        const t = await (async e => {
                            const t = "/bapi/asset/v2/public/asset/biz-tags",
                                n = {
                                    list: [],
                                    riskys: [],
                                    listMap: {}
                                };
                            try {
                                const r = {
                                        headers: {
                                            "x-gray-env": "assettag",
                                            lang: e
                                        }
                                    },
                                    [s, i] = await Promise.all([(0, a.Jt)(`${t}?bizKey=trade`, r), (0, a.Jt)(`${t}?bizKey=trade-risky`, r)]),
                                    o = s ? .data || [],
                                    l = i ? .data || [];
                                n.list = o.map((e => e.tag)), n.riskys = l.map((e => e.tag)), o.forEach((e => {
                                    e && e.tag && (n.listMap[e.tag] = e.display || e.tag)
                                }))
                            } catch (r) {
                                console.log(`BAD REQUEST:\n           parse ERROR is ${r.message}\n${r.stack}`)
                            }
                            return n
                        })(e);
                        n(t || {
                            list: [],
                            riskys: [],
                            listMap: {}
                        })
                    })()
                }), [e]), t
            };

            function c(e, t, n = !0) {
                const {
                    getI18n: a
                } = (0, o.w7)(), {
                    data: c
                } = (0, s.L)(), {
                    data: d = []
                } = (0, i.m)(), {
                    listMap: p,
                    list: m
                } = u(t), f = (0, r.useMemo)((() => d.map((e => ({
                    name: c ? .[e] ? c[e].symbolDisplay : e,
                    value: e
                }))).sort(((e, t) => e.name.localeCompare(t.name)))), [c, d]), y = (0, r.useMemo)((() => m.map((e => ({
                    name: p[e] || a(e, {
                        defaultValue: e
                    }),
                    value: e
                })))), [a, p, m]), x = (0, r.useMemo)((() => n ? l.h.concat(f) : f), [n, f]), g = (0, r.useMemo)((() => e || !n ? l.h : [...l.h, ...y]), [n, y, e]);
                return {
                    marketOptions: x,
                    zoneTags: m,
                    zoneTagMap: p,
                    zoneOptions: g
                }
            }
        },
        "8xSX": (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => p,
                Y: () => m
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                s = n("qYeW"),
                i = n("1lvF"),
                o = n("xqbL"),
                l = n.n(o),
                u = n("VrC+"),
                c = n("/d8Z"),
                d = n("wK5/");
            const p = ({
                    pnl: e,
                    enabledProfitColor: t = !0,
                    className: n
                }) => {
                    const a = (0, u.q)(e, 2),
                        s = t ? (0, c.A)(e, "text-PrimaryText", !0) : "text-PrimaryText";
                    return (0, r.jsxs)(i.Ay, {
                        className: l()(s, n),
                        children: ["$", a]
                    })
                },
                m = ({
                    symbol: e,
                    pnl: t,
                    precision: n,
                    enabledProfitColor: o,
                    className: p
                }) => {
                    const m = (0, s.e)(e),
                        f = (0, a.useMemo)((() => m ? (0, d.r)(m) : 2), [m]),
                        y = n || f,
                        x = (0, u.q)(t, y),
                        g = o ? (0, c.A)(t, "text-PrimaryText", !0) : "text-PrimaryText";
                    return (0, r.jsx)(i.Ay, {
                        className: l()(g, p),
                        children: `${m?"":"$"}${x}`
                    })
                }
        },
        Ynvp: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => l
            });
            var r = n("mXdx"),
                a = (n("DTvD"), n("xqbL")),
                s = n.n(a),
                i = n("1lvF"),
                o = n("/d8Z");
            const l = ({
                roi: e,
                enabledProfitColor: t = !0,
                className: n
            }) => {
                const a = t ? (0, o.A)(e, "text-PrimaryText", !0) : "text-PrimaryText";
                return (0, r.jsxs)(i.Ay, {
                    className: s()(a, n),
                    children: [e.toFixed(2), "%"]
                })
            }
        },
        OMWI: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => d
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                s = n("Unpw"),
                i = n("/unZ"),
                o = n("09nj"),
                l = n("46dt"),
                u = n("tM9B"),
                c = n("bt5r");
            const d = ({
                data: e
            }) => {
                const {
                    symbol: t = "",
                    trailingUp: n
                } = e || {}, d = (0, s.E)(t), p = (0, i.G)(t), {
                    roundedMinInvestQty: m
                } = (0, o.D)({
                    type: "QUOTE",
                    data: e,
                    enabled: n
                }), {
                    roundedMinInvestQty: f
                } = (0, l.l)({
                    type: "QUOTE",
                    data: e,
                    enabled: !n
                }), y = n ? m : f, x = (0, a.useMemo)((() => y ? (0, u.ZV)((0, u.jL)(y, p, 0), p) : c.VsL), [y, p]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [x, " ", d]
                })
            }
        },
        "0DKd": (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => l
            });
            var r = n("mXdx"),
                a = (n("DTvD"), n("1lvF")),
                s = n("xqbL"),
                i = n.n(s),
                o = n("G3iB");
            const l = ({
                className: e
            }) => {
                const t = (0, o.F7)(),
                    {
                        isLight: n
                    } = t;
                return (0, r.jsx)(a.Ay, {
                    className: i()({
                        "bg-custom-gradient-light": n,
                        "bg-custom-gradient-dark": !n
                    }, e, "h-[24px] w-full h-6 w-full bg-repeat bg-[400%_100%] animate-custom-animation")
                })
            }
        },
        cLDE: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => r
            });
            const r = e => ({
                isStrategyUMType: 2 === Number(e),
                isStrategyCMType: 3 === Number(e)
            })
        },
        VKcy: (e, t, n) => {
            "use strict";
            n.d(t, {
                Cs: () => c,
                Q5: () => u,
                Vq: () => d,
                rK: () => p
            });
            var r = n("S+0I"),
                a = n("KrVi"),
                s = n("66mo"),
                i = n.n(s),
                o = n("5nld"),
                l = n("XqCI"),
                u = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r, s, l;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, s = (r = t || {}).host, l = (0, a._)(r, ["host"]), e.next = 5, (0, o.Jt)("".concat(s || "", "/fapi/v1/premiumIndex"), l);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), n = [];
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r, s, l;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, s = (r = t || {}).host, l = (0, a._)(r, ["host"]), e.next = 5, (0, o.Jt)("".concat(s || "", "/dapi/v1/premiumIndex"), l);
                                case 5:
                                    n = e.sent, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), n = [];
                                case 11:
                                    return e.abrupt("return", n);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, a, s, u;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, a = "/fapi/v1/premiumIndex", s = (0, l.Eg)("".concat((null === n || void 0 === n ? void 0 : n.host) ? "".concat(n.host).concat(a) : a), t || {}), e.next = 6, (0, o.Jt)(s);
                                case 6:
                                    u = e.sent, r = {
                                        success: !0,
                                        data: u
                                    }, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(1), r = {
                                        success: !1,
                                        data: {}
                                    };
                                case 13:
                                    return e.abrupt("return", r);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, a, s, u;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, a = "/dapi/v1/premiumIndex", s = (0, l.Eg)("".concat((null === n || void 0 === n ? void 0 : n.host) ? "".concat(n.host).concat(a) : a), t || {}), e.next = 6, (0, o.Jt)(s);
                                case 6:
                                    u = e.sent, r = {
                                        success: !0,
                                        data: (null === u || void 0 === u ? void 0 : u[0]) || {}
                                    }, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(1), r = {
                                        success: !1,
                                        data: {}
                                    };
                                case 13:
                                    return e.abrupt("return", r);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "5JIq": (e, t, n) => {
            "use strict";

            function r(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = n ? {
                        "M+": e.getUTCMonth() + 1,
                        "d+": e.getUTCDate(),
                        "h+": e.getUTCHours(),
                        "m+": e.getUTCMinutes(),
                        "s+": e.getUTCSeconds(),
                        "q+": Math.floor((e.getUTCMonth() + 3) / 3),
                        S: e.getUTCMilliseconds()
                    } : {
                        "M+": e.getMonth() + 1,
                        "d+": e.getDate(),
                        "h+": e.getHours(),
                        "m+": e.getMinutes(),
                        "s+": e.getSeconds(),
                        "q+": Math.floor((e.getMonth() + 3) / 3),
                        S: e.getMilliseconds()
                    },
                    a = t,
                    s = n ? e.getUTCFullYear() : e.getFullYear(),
                    i = /(y+)/.exec(t);
                if (null !== i) {
                    var o = i[1];
                    a = t.replace(o, "".concat(s).substr(4 - o.length))
                }
                return Object.keys(r).forEach((function(e) {
                    var t = new RegExp("(".concat(e, ")")).exec(a);
                    if (null !== t) {
                        var n = t[1];
                        a = a.replace(n, 1 === n.length ? r[e] : "00".concat(r[e]).substr("".concat(r[e]).length))
                    }
                })), a
            }
            n.d(t, {
                i: () => r
            })
        },
        uxM4: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => l
            });
            var r = n("mXdx"),
                a = n("5JIq"),
                s = n("1lvF"),
                i = n("xs7W"),
                o = n("Gii1"),
                l = function(e) {
                    var t = e.strategyType,
                        n = (0, i.s)(),
                        l = (0, o.HH)().t;
                    if ("spotGrid" !== t && "futuresGrid" !== t) return null;
                    var u = n(t),
                        c = (0, a.i)(new Date(u), "yyyy-MM-dd hh:mm:ss");
                    return (0, r.jsx)(s.Ay, {
                        className: "text-DisabledText typography-body3",
                        children: l("landingPage-strategy-refreshDate", {
                            defaultValue: "Last updated on {{refreshDate}}.",
                            refreshDate: c
                        })
                    })
                }
        },
        VtEJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => p
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                s = n("HKzA"),
                i = n("jor4"),
                o = n("bznE"),
                l = n("1lvF"),
                u = n("HYEe"),
                c = n("Gii1"),
                d = function(e) {
                    var t = e.isVisible,
                        n = e.setIsVisible,
                        a = e.header,
                        l = e.body,
                        u = function() {
                            return n(!1)
                        },
                        d = (0, c.X_)().t;
                    return (0, r.jsxs)(s.Ay, {
                        onClose: u,
                        maskClose: !0,
                        modalSize: "small",
                        visible: t,
                        children: [(0, r.jsx)(s.Ay.Header, {
                            children: (0, r.jsx)(i.A, {
                                className: "justify-center",
                                children: a
                            })
                        }), (0, r.jsx)(s.Ay.Content, {
                            className: "!pt-[0] typography-body3 !pb-[36px] !md:pb-0",
                            children: l
                        }), (0, r.jsx)(s.Ay.Footer, {
                            className: "mt-[10px]",
                            children: (0, r.jsx)(o.A, {
                                className: "w-full",
                                variant: "primary",
                                onClick: u,
                                children: d("common-ok", {
                                    defaultValue: "OK"
                                })
                            })
                        })]
                    })
                },
                p = function(e) {
                    var t = e.modalHeader,
                        n = e.modalBody,
                        s = e.onClick,
                        i = (0, a.useState)(!1),
                        o = i[0],
                        c = i[1],
                        p = (0, a.useCallback)((function() {
                            "function" === typeof s && s(), c(!0)
                        }), [s]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Ay, {
                            className: "flex cursor-pointer",
                            children: (0, r.jsx)(u.A, {
                                className: "text-DisabledText shrink-0 text-[24px]",
                                onClick: p
                            })
                        }), (0, r.jsx)(d, {
                            isVisible: o,
                            setIsVisible: c,
                            header: t,
                            body: n
                        })]
                    })
                }
        },
        3608: (e, t, n) => {
            "use strict";
            n.d(t, {
                XV: () => y,
                l6: () => f,
                tX: () => x
            });
            var r = n("hrAD"),
                a = n("qoEP"),
                s = n("mXdx"),
                i = n("DTvD"),
                o = n("PaVQ"),
                l = n("1lvF"),
                u = n("ORvS"),
                c = n("UuPx"),
                d = n("WLZf"),
                p = n("nK1b"),
                m = function(e) {
                    var t = e.name,
                        n = e.options,
                        r = void 0 === n ? [] : n,
                        a = e.disabled,
                        s = (0, o.as)({
                            name: t
                        }).field;
                    return (0, i.useEffect)((function() {
                        var e;
                        r.some((function(e) {
                            return e.value === s.value
                        })) || a || s.onChange(null === (e = r[0]) || void 0 === e ? void 0 : e.value)
                    }), [s, a, r]), (0, i.useEffect)((function() {
                        var e;
                        a && s.onChange(null === (e = r[0]) || void 0 === e ? void 0 : e.value)
                    }), [a, s, r]), {
                        options: r,
                        field: s
                    }
                },
                f = (0, i.memo)((function(e) {
                    var t = (0, d.X_)().t,
                        n = (0, i.useState)(""),
                        o = n[0],
                        c = n[1],
                        p = e.disabled,
                        m = e.search,
                        f = void 0 !== m && m,
                        y = e.placeholder,
                        x = e.label,
                        g = e.className,
                        h = e.reactPopperProps,
                        v = e.onTrack,
                        b = e.options,
                        j = e.onChange,
                        T = e.value,
                        N = (0, i.useMemo)((function() {
                            return b.map((function(e) {
                                return {
                                    children: t(e.name, e.tOptions),
                                    value: e.value,
                                    optionCheckIcon: !0
                                }
                            }))
                        }), [t, b]),
                        A = (0, i.useMemo)((function() {
                            var e = (o || "").toUpperCase();
                            return function(t) {
                                return String(t.value || "").includes(e)
                            }
                        }), [o]);
                    return (0, s.jsx)(l.Ay, {
                        className: g,
                        children: (0, s.jsx)(u.A, (0, a._)((0, r._)({
                            size: "middle",
                            type: "single",
                            variant: "full",
                            emptyText: t("landingPage-strategy-no-results", {
                                defaultValue: "No results"
                            }),
                            placeholder: y,
                            value: [T],
                            onVisibleChange: function(e) {
                                e || c("")
                            },
                            onChange: function(e) {
                                var t = e[0];
                                null === j || void 0 === j || j(t), c(""), null === v || void 0 === v || v(t)
                            },
                            renderFn: function(e) {
                                var t, n = e.selects,
                                    r = e.options,
                                    a = null === n || void 0 === n ? void 0 : n[0],
                                    s = null === (t = null === r || void 0 === r ? void 0 : r.find((function(e) {
                                        return e.value === a
                                    }))) || void 0 === t ? void 0 : t.children;
                                return p || "" === a ? x : s
                            },
                            disabled: p,
                            options: N,
                            useReactPopper: !0,
                            reactPopperProps: h
                        }, f ? {
                            enableSearchClear: !0,
                            searchPlaceholder: t("search", {
                                defaultValue: "Search"
                            }),
                            onSearchFn: c
                        } : {}), {
                            children: N.filter(A).map((function(e) {
                                return (0, s.jsx)(u.A.Option, (0, r._)({}, e), e.value)
                            }))
                        }))
                    })
                })),
                y = function(e) {
                    var t = e.disabled,
                        n = e.options,
                        o = e.prefix,
                        l = e.strategyType,
                        f = m(e).field,
                        y = (0, d.X_)().t,
                        x = (0, c.nE)(),
                        g = (0, i.useMemo)((function() {
                            return n.map((function(e) {
                                return {
                                    children: y(e.name, e.tOptions),
                                    value: e.value,
                                    optionCheckIcon: !0
                                }
                            }))
                        }), [y, n]);
                    return (0, s.jsx)(u.A, {
                        value: [f.value],
                        disabled: t,
                        onChange: function(e) {
                            var t = e[0];
                            f.onChange(t), x(p.ll.click, {
                                module: p.DM.BOT_MARKET,
                                $element_id: "sort_by",
                                pageName: p.eQ.LANDING,
                                df_source: "spotGrid" === l ? p.vV.spotGrid : p.vV.futuresGrid,
                                df_5: p.Zx[t]
                            })
                        },
                        prefix: o,
                        size: "middle",
                        type: "single",
                        variant: "full",
                        options: g,
                        children: g.map((function(e) {
                            return (0, s.jsx)(u.A.Option, (0, a._)((0, r._)({
                                className: "whitespace-nowrap"
                            }, e), {
                                optionCheckIcon: !0
                            }), e.value)
                        }))
                    })
                },
                x = function(e) {
                    var t = m(e),
                        n = t.field,
                        i = t.options;
                    return (0, s.jsx)(f, (0, a._)((0, r._)({}, e), {
                        options: i,
                        value: n.value,
                        onChange: n.onChange
                    }))
                }
        },
        UJMK: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => s
            });
            var r = n("mXdx"),
                a = n("p5Sb"),
                s = function(e) {
                    var t = e.field,
                        n = e.value,
                        s = e.onChange;
                    return (0, r.jsx)(a.A, {
                        size: "small",
                        checked: n,
                        onChange: function(e) {
                            s(t, e)
                        }
                    })
                }
        },
        xs7W: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => i
            });
            var r = n("DTvD"),
                a = n("gYIm"),
                s = n("PhYZ"),
                i = function() {
                    var e = (0, s.N)(),
                        t = e.futuresGrid,
                        n = e.spotGrid;
                    return (0, r.useCallback)((function(e) {
                        return e === a.Sn ? n.lastUpdateTime : t.lastUpdateTime
                    }), [t.lastUpdateTime, n.lastUpdateTime])
                }
        },
        qGsM: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                VIEW_TYPE: () => yr,
                default: () => hr
            });
            var r = n("iKvg"),
                a = n("mguP"),
                s = n("mXdx"),
                i = n("DTvD"),
                o = n.n(i),
                l = n("zokI"),
                u = n("jor4"),
                c = n("1lvF"),
                d = n("wIZF"),
                p = n("TQvm");
            const m = function(e) {
                return o().createElement(p.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5 6.5l5 5V8h3a5 5 0 11-5 5H5a8 8 0 108-8h-3V1.5l-5 5z",
                    fill: "currentColor"
                }))
            };
            const f = function(e) {
                return o().createElement(p.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 4h3v3H4V4zm0 13h3v3H4v-3zm0-6.5h3v3H4v-3zM10 4h10v3H10V4zm0 13h10v3H10v-3zm0-6.5h10v3H10v-3z",
                    fill: "currentColor"
                }))
            };
            const y = function(e) {
                return o().createElement(p.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 4v7h7V4H4zm9 7V4h7v7h-7zm3.5 9.743L12.257 16.5l4.243-4.243 4.243 4.243-4.243 4.243zM4 13h7v7H4v-7z",
                    fill: "currentColor"
                }))
            };
            var x = n("hbgo"),
                g = n("UuPx"),
                h = n("QWVi"),
                v = n("5YBB"),
                b = n("WjQj"),
                j = n("trXm"),
                T = n("bt5r");
            const N = () => {
                const {
                    t: e
                } = (0, j.Y_)();
                return (0, s.jsx)("div", {
                    className: "text-PrimaryText t-body3",
                    children: (0, s.jsx)(v.x, {
                        t: e,
                        i18nKey: "investment-disclaimer-content",
                        defaults: "Digital asset prices can be volatile. The value of your investment may go down or up and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. Not financial advice. For more information, see our <termsLink>Terms of Use</termsLink>.",
                        components: {
                            termsLink: (0, s.jsx)(b.Z, {
                                className: "text-TextLink",
                                path: T.TPI.TRADING_BOT_TERMS,
                                target: "_blank",
                                rel: "noopener noreferrer"
                            })
                        }
                    })
                })
            };
            var A = n("vAYx"),
                _ = n("f1nL"),
                C = n("C01/"),
                w = n("IWST"),
                k = n("WLZf"),
                M = n("TajZ"),
                V = n("+Ls+"),
                P = n("hrAD"),
                R = n("qoEP"),
                S = n("PaVQ"),
                F = n("aooZ"),
                I = n("uoy8"),
                D = n("HZrL"),
                E = n("xqbL"),
                L = n.n(E),
                B = n("Bdbj"),
                O = n("qV1O"),
                z = n("xfYC"),
                G = n("Gii1"),
                H = n("3608"),
                K = n("nK1b");
            const U = function(e) {
                return o().createElement(p.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 6h-7.79a4.001 4.001 0 00-7.42 0H3v3h2.79a4.001 4.001 0 007.42 0H21V6zm-10.21 9H3v3h7.79a4.001 4.001 0 007.42 0H21v-3h-2.79a4.001 4.001 0 00-7.42 0z",
                    fill: "currentColor"
                }))
            };
            var Y = n("HKzA"),
                q = n("bznE"),
                Q = n("9PqG"),
                X = n("cLDE"),
                Z = n("zjzf"),
                $ = n("UJMK"),
                J = n("qRru"),
                W = n("ORvS"),
                ee = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        r = e.field,
                        a = e.disabled,
                        o = e.options,
                        l = e.nonSelectedValueDisplay,
                        u = (0, G.X_)().t,
                        c = (0, i.useMemo)((function() {
                            return o.map((function(e) {
                                return {
                                    children: u(e.name, e.tOptions),
                                    value: e.value,
                                    optionCheckIcon: !0
                                }
                            }))
                        }), [u, o]);
                    return (0, s.jsx)(W.A, {
                        enablePortal: !0,
                        listMaxHeight: 200,
                        useReactPopper: !0,
                        value: [t],
                        disabled: a,
                        emptyText: u("landingPage-strategy-no-results", {
                            defaultValue: "No results"
                        }),
                        onChange: function(e) {
                            n(r, e[0])
                        },
                        size: "middle",
                        type: "single",
                        variant: "full",
                        options: c,
                        renderFn: function(e) {
                            var t, n = e.selects,
                                r = e.options,
                                s = null === n || void 0 === n ? void 0 : n[0],
                                i = null === (t = r.find((function(e) {
                                    return e.value === s
                                }))) || void 0 === t ? void 0 : t.children;
                            return "string" === typeof l && "" === s ? l : a || "" === s ? "" : i
                        },
                        children: c.map((function(e) {
                            return (0, s.jsx)(W.A.Option, (0, R._)((0, P._)({
                                className: "whitespace-nowrap"
                            }, e), {
                                optionCheckIcon: !0
                            }), e.value)
                        }))
                    })
                },
                te = n("wwEu"),
                ne = n("pc6L"),
                re = function(e) {
                    var t, n = e.onClose,
                        o = (0, G.HH)().t,
                        l = (0, G.nH)(),
                        d = (0, Q.ok)(),
                        p = (0, S.xW)(),
                        m = p.getValues,
                        f = p.setValue,
                        y = (0, a._)((0, S.FH)({
                            name: ["market", "sort"]
                        }), 2),
                        x = y[0],
                        g = y[1],
                        h = (0, i.useState)(m(B.eo.strategyType))[0],
                        v = (0, X.L)(Number(h)).isStrategyUMType,
                        b = (0, Z.o)({
                            strategyType: h,
                            symbol: x,
                            lang: d
                        }).zoneOptions,
                        j = (0, i.useState)((t = {}, (0, r._)(t, B.eo.zone, m(B.eo.zone)), (0, r._)(t, B.eo.trailingType, Boolean(m(B.eo.trailingType))), (0, r._)(t, B.eo.investmentType, !!l && m(B.eo.investmentType)), t)),
                        T = j[0],
                        N = j[1],
                        A = function(e, t) {
                            N((0, R._)((0, P._)({}, T), (0, r._)({}, e, t)))
                        };
                    return (0, i.useEffect)((function() {
                        var e = "",
                            t = Boolean(T[B.eo.trailingType]),
                            n = T[B.eo.investmentType];
                        t && n && v && (e = "both_on"), t && !n && (e = "only_trailing_on"), !t && n && (e = "only_copy_ready_grid_on"), t || n || !v || (e = "both_off"), (0, J.u4)(K.ll.moduleView, {
                            sortby: g,
                            module: K.DM.BOT_MARKET,
                            pageName: K.eQ.LANDING,
                            df_source: K.vV.spotGrid,
                            df_10: e
                        })
                    }), [T, v, g]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(Y.Ay, {
                            visible: !0,
                            responsive: !0,
                            size: "limit",
                            modalSize: "small",
                            children: [(0, s.jsx)(Y.Ay.Header, {
                                showNext: !0,
                                onNextClick: n,
                                children: o("Filters", {
                                    defaultValue: "Filters"
                                })
                            }), (0, s.jsx)(Y.Ay.Content, {
                                children: (0, s.jsxs)(c.Ay, {
                                    className: "space-y-[24px]",
                                    children: [(0, s.jsxs)(c.Ay, {
                                        children: [(0, s.jsxs)(c.Ay, {
                                            className: "mb-[4px]",
                                            children: [" ", o("landingPage-strategy-zone", {
                                                defaultValue: "Zone"
                                            })]
                                        }), (0, s.jsx)(ee, {
                                            options: b,
                                            field: B.eo.zone,
                                            disabled: b.length <= 1,
                                            value: T[B.eo.zone],
                                            onChange: function(e, t) {
                                                N((0, R._)((0, P._)({}, T), (0, r._)({}, e, t)))
                                            },
                                            nonSelectedValueDisplay: o("common-all", {
                                                defaultValue: "All"
                                            })
                                        })]
                                    }), v && (0, s.jsxs)(u.A, {
                                        className: "items-center justify-between",
                                        children: [(0, s.jsx)(c.Ay, {
                                            className: "t-subtitle2 text-PrimaryText",
                                            children: o("trailing", {
                                                defaultValue: "Trailing"
                                            })
                                        }), (0, s.jsx)(ne.F, {
                                            onChange: A,
                                            value: Boolean(T[B.eo.trailingType])
                                        })]
                                    }), l && (0, s.jsxs)(u.A, {
                                        className: "items-center justify-between",
                                        children: [(0, s.jsx)(_.I, {
                                            arrow: !0,
                                            offset: 8,
                                            placement: "top",
                                            tooltips: o("copy-read-grid-tip", {
                                                defaultValue: "View the range of Grid Bot Strategies you can replicate based on your present margin level.  Increase your margin to unlock more Strategies."
                                            }),
                                            trigger: "hover",
                                            variant: "gray",
                                            useReactPopper: !0,
                                            children: (0, s.jsx)(c.Ay, {
                                                className: "t-subtitle2 text-PrimaryText",
                                                children: o("botMarketPlace-filter-copyReadyGrids", {
                                                    defaultValue: "Copy-Ready Grids"
                                                })
                                            })
                                        }), (0, s.jsx)($.j, {
                                            field: B.eo.investmentType,
                                            value: T[B.eo.investmentType],
                                            onChange: A
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)(Y.Ay.Footer, {
                                children: (0, s.jsxs)(u.A, {
                                    className: "w-full gap-x-[8px]",
                                    children: [(0, s.jsx)(q.A, {
                                        className: "flex-1",
                                        variant: "secondary",
                                        onClick: function() {
                                            var e, t = !!v && Boolean(te.$Z.trailingType),
                                                n = (e = {}, (0, r._)(e, B.eo.zone, te.$Z.zone), (0, r._)(e, B.eo.trailingType, t), (0, r._)(e, B.eo.investmentType, te.$Z.investmentType), e);
                                            N(n)
                                        },
                                        children: o("reset", {
                                            defaultValue: "Reset"
                                        })
                                    }), (0, s.jsx)(q.A, {
                                        className: "flex-1",
                                        variant: "primary",
                                        onClick: function() {
                                            Object.keys(T).forEach((function(e) {
                                                e === B.eo.trailingType ? f(e, T[e] ? "TRAILING" : "") : f(e, T[e])
                                            })), n()
                                        },
                                        children: o("Confirm", {
                                            defaultValue: "Confirm"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                ae = function(e) {
                    var t, n = e.onClose,
                        o = (0, G.HH)().t,
                        l = (0, G.nH)(),
                        d = (0, S.xW)(),
                        p = d.getValues,
                        m = d.setValue,
                        f = (0, Q.ok)(),
                        y = (0, a._)((0, S.FH)({
                            name: ["market", "sort"]
                        }), 2),
                        x = y[0],
                        g = y[1],
                        h = (0, Z.o)({
                            strategyType: 1,
                            symbol: x,
                            lang: f
                        }).zoneOptions,
                        v = (0, i.useState)((t = {}, (0, r._)(t, B.eo.zone, p(B.eo.zone)), (0, r._)(t, B.eo.trailingType, Boolean(p(B.eo.trailingType))), (0, r._)(t, B.eo.investmentType, p(B.eo.investmentType)), t)),
                        b = v[0],
                        j = v[1],
                        T = function(e, t) {
                            j((0, R._)((0, P._)({}, b), (0, r._)({}, e, t)))
                        };
                    return (0, i.useEffect)((function() {
                        var e = "",
                            t = Boolean(b[B.eo.trailingType]),
                            n = b[B.eo.investmentType];
                        t && n && (e = "both_on"), t && !n && (e = "only_trailing_on"), !t && n && (e = "only_copy_ready_grid_on"), t || n || (e = "both_off"), (0, J.u4)(K.ll.moduleView, {
                            sortby: g,
                            module: K.DM.BOT_MARKET,
                            pageName: K.eQ.LANDING,
                            df_source: K.vV.spotGrid,
                            df_10: e
                        })
                    }), [b, g]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(Y.Ay, {
                            visible: !0,
                            responsive: !0,
                            size: "limit",
                            modalSize: "small",
                            children: [(0, s.jsx)(Y.Ay.Header, {
                                showNext: !0,
                                onNextClick: n,
                                children: o("Filters", {
                                    defaultValue: "Filters"
                                })
                            }), (0, s.jsx)(Y.Ay.Content, {
                                children: (0, s.jsxs)(c.Ay, {
                                    className: "space-y-[24px]",
                                    children: [(0, s.jsxs)(c.Ay, {
                                        children: [(0, s.jsxs)(c.Ay, {
                                            className: "mb-[4px]",
                                            children: [" ", o("landingPage-strategy-zone", {
                                                defaultValue: "Zone"
                                            })]
                                        }), (0, s.jsx)(ee, {
                                            options: h,
                                            field: B.eo.zone,
                                            disabled: h.length <= 1,
                                            value: b[B.eo.zone],
                                            onChange: function(e, t) {
                                                j((0, R._)((0, P._)({}, b), (0, r._)({}, e, t)))
                                            },
                                            nonSelectedValueDisplay: o("common-all", {
                                                defaultValue: "All"
                                            })
                                        })]
                                    }), (0, s.jsxs)(u.A, {
                                        className: "items-center justify-between",
                                        children: [(0, s.jsx)(c.Ay, {
                                            className: "t-subtitle2 text-PrimaryText",
                                            children: o("trailing", {
                                                defaultValue: "Trailing"
                                            })
                                        }), (0, s.jsx)(ne.F, {
                                            onChange: T,
                                            value: Boolean(b[B.eo.trailingType])
                                        })]
                                    }), l && (0, s.jsxs)(u.A, {
                                        className: "items-center justify-between",
                                        children: [(0, s.jsx)(_.I, {
                                            arrow: !0,
                                            offset: 8,
                                            placement: "top",
                                            tooltips: o("copy-read-grid-tip", {
                                                defaultValue: "View the range of Grid Bot Strategies you can replicate based on your present margin level.  Increase your margin to unlock more Strategies."
                                            }),
                                            trigger: "hover",
                                            variant: "gray",
                                            useReactPopper: !0,
                                            children: (0, s.jsx)(c.Ay, {
                                                className: "t-subtitle2 text-PrimaryText",
                                                children: o("botMarketPlace-filter-copyReadyGrids", {
                                                    defaultValue: "Copy-Ready Grids"
                                                })
                                            })
                                        }), (0, s.jsx)($.j, {
                                            field: B.eo.investmentType,
                                            value: b[B.eo.investmentType],
                                            onChange: T
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)(Y.Ay.Footer, {
                                children: (0, s.jsxs)(u.A, {
                                    className: "w-full gap-x-[8px]",
                                    children: [(0, s.jsx)(q.A, {
                                        className: "flex-1",
                                        variant: "secondary",
                                        onClick: function() {
                                            var e, t = (e = {}, (0, r._)(e, B.eo.zone, te.EY.zone), (0, r._)(e, B.eo.trailingType, Boolean(te.EY.trailingType)), (0, r._)(e, B.eo.investmentType, te.EY.investmentType), e);
                                            j(t)
                                        },
                                        children: o("reset", {
                                            defaultValue: "Reset"
                                        })
                                    }), (0, s.jsx)(q.A, {
                                        className: "flex-1",
                                        variant: "primary",
                                        onClick: function() {
                                            Object.keys(b).forEach((function(e) {
                                                e === B.eo.trailingType ? m(e, b[e] ? "TRAILING" : "") : m(e, b[e])
                                            })), n()
                                        },
                                        children: o("Confirm", {
                                            defaultValue: "Confirm"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                se = function(e) {
                    var t = e.strategyType,
                        n = (0, i.useState)(!1),
                        r = n[0],
                        a = n[1],
                        o = "futuresGrid" === t ? re : ae;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(U, {
                            className: "text-[24px] cursor-pointer",
                            onClick: function() {
                                a(!0)
                            }
                        }), r && (0, s.jsx)(o, {
                            onClose: function() {
                                a(!1)
                            }
                        })]
                    })
                },
                ie = (0, l.A)((function() {
                    return n.e(9885).then(n.bind(n, "B0O6"))
                }), {
                    webpack: function() {
                        return ["B0O6"]
                    },
                    ssr: !1
                }),
                oe = (0, l.A)((function() {
                    return n.e(59).then(n.bind(n, "aluQ"))
                }), {
                    webpack: function() {
                        return ["aluQ"]
                    },
                    ssr: !1
                }),
                le = (0, l.A)((function() {
                    return n.e(8410).then(n.bind(n, "uGw6"))
                }), {
                    webpack: function() {
                        return ["uGw6"]
                    },
                    ssr: !1
                }),
                ue = (0, l.A)((function() {
                    return n.e(9686).then(n.bind(n, "Aeqm"))
                }), {
                    webpack: function() {
                        return ["Aeqm"]
                    },
                    ssr: !1
                }),
                ce = B.Bx.POPULAR_SORT_OPTIONS,
                de = B.Bx.ARBITRAGE_POPULAR_OPTIONS,
                pe = function(e) {
                    var t = e.strategyType,
                        n = e.getTrackingData,
                        r = (0, G.Qs)().isMobile,
                        a = (0, G.HH)().t,
                        o = "arbitrage" === t ? de : ce,
                        l = (0, i.useMemo)((function() {
                            switch (t) {
                                case "spotGrid":
                                    return r ? (0, s.jsx)(ue, {
                                        strategyType: t,
                                        getTrackingData: n
                                    }) : (0, s.jsx)(ie, {});
                                case "futuresGrid":
                                    return r ? (0, s.jsx)(ue, {
                                        strategyType: t,
                                        getTrackingData: n
                                    }) : (0, s.jsx)(oe, {});
                                case "arbitrage":
                                    return r ? (0, s.jsx)(ue, {
                                        strategyType: t,
                                        getTrackingData: n
                                    }) : (0, s.jsx)(le, {
                                        strategyType: t
                                    });
                                default:
                                    return null
                            }
                        }), [t, r, n]);
                    return r ? (0, s.jsx)(c.Ay, {
                        className: "mb-[22px] justify-between items-center",
                        children: l
                    }) : (0, s.jsx)(O.$, {
                        defaultTrackingData: {
                            module: K.DM.STRATEGY_LIST,
                            df_source: "spotGrid" === t ? z.vV.spotGrid : z.vV.futuresGrid
                        },
                        children: (0, s.jsxs)(c.Ay, {
                            className: L()("mt-[16px] md:mt-[24px] mb-[22px] md:mb-[24px] justify-between items-center md:items-start lg:items-center", {
                                "block lg:flex": "arbitrage" !== t,
                                "md:flex": "arbitrage" === t
                            }),
                            children: [(0, s.jsx)(c.Ay, {
                                className: "gap-[14px] md:gap-[16px]",
                                children: l
                            }), (0, s.jsxs)(c.Ay, {
                                className: L()("flex lg:mt-0 items-center justify-end md:justify-between lg:justify-end", {
                                    "mt-[24px]": "arbitrage" !== t
                                }),
                                children: [(0, s.jsx)(H.XV, {
                                    strategyType: t,
                                    prefix: "arbitrage" !== t ? "" : (0, s.jsx)(c.Ay, {
                                        className: "text-[14px]",
                                        children: a("sort-by", {
                                            defaultValue: "Sort By"
                                        })
                                    }),
                                    name: "sort",
                                    options: o
                                }), ("spotGrid" === t || "futuresGrid" === t) && (0, s.jsx)(c.Ay, {
                                    className: "ml-[24px]",
                                    children: (0, s.jsx)(se, {
                                        strategyType: t
                                    })
                                })]
                            })]
                        })
                    })
                },
                me = n("as/d"),
                fe = n("L7h2"),
                ye = n("TwfU"),
                xe = n("ndjx");
            const ge = ({
                strategyType: e
            }) => x.v0.includes(e);
            var he, ve = n("1HmZ"),
                be = n("gYIm"),
                je = n("pk/O"),
                Te = n("+hkn"),
                Ne = n("d12p"),
                Ae = n("cejE"),
                _e = n("Ynvp"),
                Ce = n("8xSX"),
                we = n("Cw/n"),
                ke = n("OMWI"),
                Me = n("sIut"),
                Ve = n("4frZ"),
                Pe = n("tM9B"),
                Re = n("OmhG"),
                Se = function(e) {
                    var t = e.strategyType,
                        n = e.symbol,
                        r = function(e) {
                            switch (e) {
                                case be.us:
                                    return Re.j;
                                case be.Sn:
                                    return Re.d;
                                default:
                                    return null
                            }
                        }(t);
                    return r ? (0, s.jsx)(r, {
                        symbol: n
                    }) : (0, s.jsx)(s.Fragment, {
                        children: n
                    })
                },
                Fe = function(e, t) {
                    switch (e) {
                        case be.us:
                        case be.Sn:
                            return (0, s.jsx)(Se, {
                                strategyType: e,
                                symbol: t
                            });
                        default:
                            return (0, s.jsx)(s.Fragment, {
                                children: t
                            })
                    }
                },
                Ie = function(e) {
                    var t = e.symbol,
                        n = e.strategyType,
                        r = e.containerClassName;
                    return (0, s.jsx)(u.A, {
                        className: L()("items-center", r),
                        children: Fe(n, t)
                    })
                },
                De = n("z47x"),
                Ee = n("GeCL"),
                Le = n("EAni"),
                Be = function(e, t) {
                    var n = (0, k.XY)().t,
                        r = (0, k.X_)().t,
                        a = (0, Ee.Q)().isMobile,
                        o = "futuresGrid" === t;
                    return (0, i.useMemo)((function() {
                        return {
                            columnConfig: {
                                symbol: {
                                    headAndBodyClassName: L()("text-left w-[160px] left-0 z-[2] md:relative md:z-[1]"),
                                    title: n("landingPage-top-rankMarket", {
                                        defaultValue: "Rank/Market"
                                    }),
                                    valueKey: "symbol",
                                    renderValue: function(e) {
                                        var n = e.cellValue;
                                        return (0, s.jsx)(Ie, {
                                            symbol: n,
                                            strategyType: t,
                                            containerClassName: L()({
                                                "bg-BasicBg": a
                                            })
                                        })
                                    }
                                },
                                running: {
                                    headAndBodyClassName: L()("text-right justify-end", {
                                        "w-[85px]": o,
                                        "w-[110px]": !o
                                    }),
                                    title: (0, s.jsx)(Ae.n, {
                                        tip: n(te.P5, {
                                            defaultValue: te.V$
                                        }),
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "text-TertiaryText hover:text-PrimaryText",
                                            children: n("runtime", {
                                                defaultValue: "Runtime"
                                            })
                                        })
                                    }),
                                    valueKey: "runningTime",
                                    renderValue: function(e) {
                                        var t = e.cellValue;
                                        return (0, Le.a)(Number(t) / 60, n)
                                    }
                                },
                                roi: {
                                    headAndBodyClassName: L()("text-right justify-end", {
                                        "w-[75px]": o,
                                        "w-[110px]": !o
                                    }),
                                    title: (0, s.jsx)(Ae.n, {
                                        tip: o ? r(B.EW, B.Kg) : n("spot-roi-tip", {
                                            defaultValue: "Total PnL divided by the Total Investment, based on the parameter provider's settings."
                                        }),
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "text-TertiaryText hover:text-PrimaryText",
                                            children: n("landingPage-strategy-roi", {
                                                defaultValue: "ROI"
                                            })
                                        })
                                    }),
                                    valueKey: "roi",
                                    renderValue: function(e) {
                                        var t = e.cellValue;
                                        return (0, s.jsx)(_e.$, {
                                            roi: Number(t)
                                        })
                                    }
                                },
                                pnl: {
                                    headAndBodyClassName: "text-right justify-end w-[161px]",
                                    title: (0, s.jsx)(Ae.n, {
                                        tip: o ? r(B.so, B._6) : n("column-pnl-tip", {
                                            defaultValue: "The net sum of all profits and losses (both matched and unmatched) generated by this bot, deducting trading fees."
                                        }),
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "text-TertiaryText hover:text-PrimaryText",
                                            children: "".concat(n("landingPage-strategy-pnl", {
                                                defaultValue: "PNL"
                                            }), "(USD)")
                                        })
                                    }),
                                    valueKey: "pnl",
                                    renderValue: function(e) {
                                        var n = e.rowData;
                                        return "spotGrid" === t ? (0, s.jsx)(Ce.J, {
                                            enabledProfitColor: !1,
                                            pnl: n.pnl
                                        }) : "futuresGrid" === t ? (0, s.jsx)(Ce.Y, {
                                            enabledProfitColor: !1,
                                            symbol: n.symbol,
                                            pnl: n.pnl
                                        }) : null
                                    }
                                },
                                copyCount: {
                                    headAndBodyClassName: "text-right justify-end w-[160px]",
                                    title: (0, s.jsx)(Ae.n, {
                                        tip: n(te.jg, {
                                            defaultValue: te.zv
                                        }),
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "justify-end text-TertiaryText hover:text-PrimaryText",
                                            children: n("landingPage-strategy-copy-pop", {
                                                defaultValue: "Copy Popularity"
                                            })
                                        })
                                    }),
                                    valueKey: "copyCount"
                                },
                                direction: {
                                    headAndBodyClassName: "text-right justify-end w-[60px]",
                                    title: (0, s.jsx)(Ae.n, {
                                        tip: n(te.fM, {
                                            defaultValue: te.ly
                                        }),
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "justify-end hover:text-PrimaryText",
                                            children: n("Direction", {
                                                defaultValue: "Direction"
                                            })
                                        })
                                    }),
                                    valueKey: "strategyParams",
                                    renderValue: function(e) {
                                        var t = function(e) {
                                            switch (e) {
                                                case 1:
                                                default:
                                                    return De.t3.NEUTRAL;
                                                case 2:
                                                    return De.t3.LONG;
                                                case 3:
                                                    return De.t3.SHORT
                                            }
                                        }(e.rowData.direction);
                                        return n("direction-".concat(t), {
                                            defaultValue: t
                                        })
                                    }
                                },
                                action: {
                                    headAndBodyClassName: "text-right justify-end w-[110px]",
                                    title: n("Action", {
                                        defaultValue: "Action"
                                    }),
                                    renderValue: function() {
                                        return (0, s.jsx)(we.A, {
                                            className: "!px-0 !w-auto",
                                            buttonClassName: "text-right",
                                            variant: "text",
                                            sz: "small"
                                        })
                                    }
                                },
                                sevenDayMdd: {
                                    headAndBodyClassName: "text-right justify-end w-[100px]",
                                    title: (0, s.jsx)(Ae.n, {
                                        tip: n(B.hm, {
                                            defaultValue: B.ZP
                                        }),
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "justify-end hover:text-PrimaryText",
                                            children: n("popularCard-7DMDD", {
                                                defaultValue: "7D MDD"
                                            })
                                        })
                                    }),
                                    valueKey: "sevenDayMdd",
                                    renderValue: function(e) {
                                        var t = e.rowData.sevenDayMdd;
                                        return (0, Ve.kf)(t) ? "".concat((0, Pe.jL)((0, Pe.lw)(t, 100), 2), "%") : be.Vs
                                    }
                                },
                                minInvestment: {
                                    headAndBodyClassName: "text-right justify-end w-[160px]",
                                    title: n("landingPage-strategy-minInvestment", {
                                        defaultValue: "Min. Investment"
                                    }),
                                    valueKey: "pnl",
                                    renderValue: function(e) {
                                        var n = e.rowData,
                                            r = n || {},
                                            a = r.strategyParams,
                                            i = r.symbol,
                                            o = r.minInvestment;
                                        if (!n || !a) return (0, s.jsx)(s.Fragment, {
                                            children: be.Vs
                                        });
                                        var l = a.lowerLimit,
                                            u = a.gridCount,
                                            c = a.type,
                                            d = a.triggerPrice,
                                            p = a.upperLimit,
                                            m = a.trailingUp;
                                        if ("spotGrid" === t) {
                                            var f = {
                                                lowerLimit: l,
                                                gridCount: u,
                                                type: c,
                                                triggerPrice: d,
                                                upperLimit: p,
                                                symbol: i,
                                                trailingUp: m
                                            };
                                            return (0, s.jsx)(ke.s, {
                                                data: f
                                            })
                                        }
                                        if ("futuresGrid" === t) {
                                            var y = {
                                                lowerLimit: l,
                                                gridCount: u,
                                                type: c,
                                                triggerPrice: d,
                                                upperLimit: p,
                                                symbol: i
                                            };
                                            return (0, s.jsx)(Me.Z, {
                                                data: y,
                                                minInvestment: o
                                            })
                                        }
                                        return null
                                    }
                                },
                                matchedCount: {
                                    headAndBodyClassName: "text-right justify-end w-[200px] pl-[10px]",
                                    title: n("popularTable-matchedCount", {
                                        defaultValue: "Matched Trades (24H/Total)"
                                    }),
                                    renderValue: function(e) {
                                        var t = e.rowData;
                                        return (0, s.jsxs)(c.Ay, {
                                            className: "text-right justify-end typography-subtitle2",
                                            children: [t.latestMatchedCount, "/", t.matchedCount]
                                        })
                                    }
                                }
                            },
                            columnOrder: ["symbol"].concat((0, Ne._)(o ? ["direction"] : []), ["running", "roi", "pnl", "copyCount", "minInvestment", "sevenDayMdd", "matchedCount"], (0, Ne._)(a ? [] : ["action"]))
                        }
                    }), [t, r, o, n, a])
                },
                Oe = function(e) {
                    var t = e.onRowClick,
                        n = (e.pageNumber, e.list),
                        r = e.isLoading,
                        a = (0, S.FH)(),
                        i = (0, D.HL)(a[B.eo.strategyType]),
                        o = Be(0, i),
                        l = o.columnOrder,
                        u = o.columnConfig;
                    return (0, s.jsx)(Te.D, {
                        containerClassName: "pt-0",
                        isLoading: r,
                        listData: n,
                        columnOrder: l,
                        columnConfig: u,
                        onRowClick: t
                    })
                },
                ze = n("7Idg"),
                Ge = (0, l.A)((function() {
                    return Promise.all([n.e(8646), n.e(3820)]).then(n.bind(n, "LMpq"))
                }), {
                    webpack: function() {
                        return ["LMpq"]
                    },
                    ssr: !1
                }),
                He = (0, l.A)((function() {
                    return Promise.all([n.e(8646), n.e(3826)]).then(n.bind(n, "gvat"))
                }), {
                    webpack: function() {
                        return ["gvat"]
                    },
                    ssr: !1
                }),
                Ke = function(e) {
                    var t = e.onButtonClick,
                        n = e.list,
                        r = e.sortBy,
                        a = (0, G.HH)().t;
                    return 0 === (null === n || void 0 === n ? void 0 : n.length) ? (0, s.jsx)(c.Ay, {
                        className: "h-[350px] w-full",
                        children: (0, s.jsx)(ze.W, {
                            size: 96,
                            customText: a("landingPage-strategy-no-results", {
                                defaultValue: "No results"
                            })
                        })
                    }) : (0, s.jsx)(c.Ay, {
                        className: "gap-[24px] flex-wrap grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]",
                        children: n.map((function(e, n) {
                            var a = e.strategyType,
                                i = (0, D.HL)(a);
                            return "spotGrid" === i ? (0, s.jsx)(Ge, {
                                options: {
                                    symbolTag: !0
                                },
                                data: e,
                                onButtonClick: function() {
                                    t(n)
                                },
                                sortBy: r
                            }, n) : "futuresGrid" === i ? (0, s.jsx)(He, {
                                options: {
                                    symbolTag: !0,
                                    directionTag: !0
                                },
                                data: e,
                                onButtonClick: function() {
                                    t(n)
                                },
                                sortBy: r
                            }, n) : null
                        }))
                    })
                },
                Ue = n("dECp"),
                Ye = n("uxM4"),
                qe = function(e) {
                    var t = e.pageNumber,
                        n = e.total,
                        r = e.rowSize,
                        a = void 0 === r ? 10 : r,
                        i = e.onPaginationClick,
                        o = e.strategyType,
                        l = e.className,
                        u = e.maxPage;
                    return (0, s.jsxs)(c.Ay, {
                        className: L()("block md:flex md:justify-between items-end md:items-center md:h-[28px]", l),
                        children: [(0, s.jsx)("div", {
                            className: "mb-[16px] md:mb-0",
                            children: (0, s.jsx)(Ye.z, {
                                strategyType: o
                            })
                        }), (0, s.jsx)(Ue.S, {
                            page: t,
                            rowSize: a,
                            total: n,
                            onPageClick: function(e) {
                                i(e)
                            },
                            maxPage: u
                        })]
                    })
                },
                Qe = n("B/Zp"),
                Xe = n("Hf/4"),
                Ze = n("ajAa"),
                $e = n.n(Ze),
                Je = "all",
                We = (he = {}, (0, r._)(he, be.Sn, K.vV.spotGrid), (0, r._)(he, be.us, K.vV.futuresGrid), he),
                et = {
                    copyCount: "most_copied",
                    pnl: "highest_pnl",
                    roi: "highest_roi"
                },
                tt = function(e) {
                    var t = (0, g.nE)(),
                        n = function(e) {
                            return Object.keys(e).reduce((function(t, n) {
                                return "runningTime" === n ? (t.runtime = e[n], t) : "sort" === n ? (t.sort_by = e[n], t) : (t[n] = e[n], t)
                            }), {})
                        }(e),
                        r = (0, Xe.A)(n);
                    (0, i.useEffect)((function() {
                        var a = $e()(n, (function(e, t) {
                                return (null === r || void 0 === r ? void 0 : r[t]) === e
                            })),
                            s = Object.keys(a);
                        if (s.length > 0 && r) {
                            var i, o, l = (0, D.HL)(e[B.eo.strategyType]),
                                u = null === (i = B.Bx.RUNNING_TIME_OPTIONS.find((function(t) {
                                    return t.value === e[B.eo.runningTime]
                                }))) || void 0 === i ? void 0 : i.sensorKey,
                                c = null === (o = B.Bx.STRATEGY_7D_MDD.find((function(t) {
                                    return t.value === e[B.eo.sevenDayMdd]
                                }))) || void 0 === o ? void 0 : o.sensorKey;
                            t(K.ll.click, {
                                $element_id: s[0],
                                df_source: We[l],
                                market: e[B.eo.market] || Je,
                                df_direction: "futuresGrid" === l ? e[B.eo.direction] || Je : void 0,
                                duration: u || Je,
                                df_3: e[B.eo.roi] || Je,
                                df_4: e[B.eo.zone] || Je,
                                df_5: et[e[B.eo.sort]],
                                df_7dMDD: c || Je
                            })
                        }
                    }), [r, t, n, e])
                },
                nt = n("vCaB"),
                rt = n("TR5C"),
                at = n("VLTf"),
                st = n.n(at),
                it = function(e) {
                    var t = e.handleConditionChange,
                        n = e.values,
                        r = e.pageNumber,
                        a = (0, Xe.A)(n);
                    (0, i.useEffect)((function() {
                        1 === r || st()(n, a) || t()
                    }))
                },
                ot = n("R60M"),
                lt = Math.ceil,
                ut = Math.max;
            const ct = function(e, t, n, r) {
                for (var a = -1, s = ut(lt((t - e) / (n || 1)), 0), i = Array(s); s--;) i[r ? s : ++a] = e, e += n;
                return i
            };
            const dt = function(e, t) {
                return e === t || e !== e && t !== t
            };
            const pt = "object" == typeof global && global && global.Object === Object && global;
            var mt = "object" == typeof self && self && self.Object === Object && self;
            const ft = (pt || mt || Function("return this")()).Symbol;
            var yt = Object.prototype,
                xt = yt.hasOwnProperty,
                gt = yt.toString,
                ht = ft ? ft.toStringTag : void 0;
            const vt = function(e) {
                var t = xt.call(e, ht),
                    n = e[ht];
                try {
                    e[ht] = void 0;
                    var r = !0
                } catch (s) {}
                var a = gt.call(e);
                return r && (t ? e[ht] = n : delete e[ht]), a
            };
            var bt = Object.prototype.toString;
            const jt = function(e) {
                return bt.call(e)
            };
            var Tt = ft ? ft.toStringTag : void 0;
            const Nt = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Tt && Tt in Object(e) ? vt(e) : jt(e)
            };
            const At = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            };
            const _t = function(e) {
                if (!At(e)) return !1;
                var t = Nt(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            };
            const Ct = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            };
            const wt = function(e) {
                return null != e && Ct(e.length) && !_t(e)
            };
            var kt = /^(?:0|[1-9]\d*)$/;
            const Mt = function(e, t) {
                var n = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && kt.test(e)) && e > -1 && e % 1 == 0 && e < t
            };
            const Vt = function(e, t, n) {
                if (!At(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? wt(n) && Mt(t, n.length) : "string" == r && t in n) && dt(n[t], e)
            };
            var Pt = /\s/;
            const Rt = function(e) {
                for (var t = e.length; t-- && Pt.test(e.charAt(t)););
                return t
            };
            var St = /^\s+/;
            const Ft = function(e) {
                return e ? e.slice(0, Rt(e) + 1).replace(St, "") : e
            };
            const It = function(e) {
                return null != e && "object" == typeof e
            };
            const Dt = function(e) {
                return "symbol" == typeof e || It(e) && "[object Symbol]" == Nt(e)
            };
            var Et = /^[-+]0x[0-9a-f]+$/i,
                Lt = /^0b[01]+$/i,
                Bt = /^0o[0-7]+$/i,
                Ot = parseInt;
            const zt = function(e) {
                if ("number" == typeof e) return e;
                if (Dt(e)) return NaN;
                if (At(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = At(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Ft(e);
                var n = Lt.test(e);
                return n || Bt.test(e) ? Ot(e.slice(2), n ? 2 : 8) : Et.test(e) ? NaN : +e
            };
            var Gt = 1 / 0;
            const Ht = function(e) {
                return e ? (e = zt(e)) === Gt || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            };
            const Kt = function(e) {
                return function(t, n, r) {
                    return r && "number" != typeof r && Vt(t, n, r) && (n = r = void 0), t = Ht(t), void 0 === n ? (n = t, t = 0) : n = Ht(n), r = void 0 === r ? t < n ? 1 : -1 : Ht(r), ct(t, n, r, e)
                }
            }();
            var Ut = n("0DKd"),
                Yt = function() {
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(Ut.d, {
                            className: "h-[40px] mb-[50px] w-[273px]"
                        }), (0, s.jsx)(Ut.d, {
                            className: "mb-[16px] w-[632px]"
                        }), (0, s.jsx)(Ut.d, {
                            className: "mb-[50px] w-[632px]"
                        })]
                    })
                },
                qt = function() {
                    return (0, s.jsx)(s.Fragment, {
                        children: Kt(10).map((function(e, t) {
                            return (0, s.jsx)(Ut.d, {
                                className: "mb-[16px] h-[24px]"
                            }, t)
                        }))
                    })
                },
                Qt = function() {
                    var e = (0, V.n)().isDesktop ? 9 : 8,
                        t = (0, i.useMemo)((function() {
                            return Kt(e)
                        }), [e]),
                        n = function() {
                            return (0, s.jsxs)(c.Ay, {
                                className: "bg-CardBg p-[16px]",
                                children: [(0, s.jsx)(Ut.d, {
                                    className: "mb-[24px] h-[70px]"
                                }), (0, s.jsx)(Ut.d, {
                                    className: "mb-[24px] h-[70px]"
                                }), (0, s.jsxs)(u.A, {
                                    className: "justify-between",
                                    children: [(0, s.jsx)(Ut.d, {
                                        className: "w-[101px] h-[70px]"
                                    }), (0, s.jsx)(Ut.d, {
                                        className: "w-[101px] h-[70px]"
                                    })]
                                })]
                            })
                        };
                    return (0, s.jsx)(c.Ay, {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: t.map((function(e, t) {
                            return (0, s.jsx)(n, {}, t)
                        }))
                    })
                },
                Xt = function(e) {
                    var t = e.viewType,
                        n = (0, S.FH)(),
                        r = (0, g.nE)();
                    tt(n);
                    var a = (0, G.nH)(),
                        o = (0, i.useState)(void 0),
                        l = o[0],
                        u = o[1],
                        d = (0, G.Qs)().isTablet,
                        p = (0, i.useState)(1),
                        m = p[0],
                        f = p[1],
                        y = Number(n[B.eo.strategyType]),
                        h = (0, D.HL)(y),
                        v = function(e, t) {
                            return "cardView" === e ? t ? 6 : 9 : 10
                        }(t, d),
                        b = (0, Qe.j)(),
                        j = (0, me.r)(),
                        T = null !== j && void 0 !== j ? j : {},
                        N = T.usdt,
                        A = void 0 === N ? 0 : N,
                        _ = T.isLoading,
                        C = (0, D.LU)((0, R._)((0, P._)({}, n), {
                            investmentType: Boolean(n.investmentType && a && A),
                            asset: A,
                            trailingType: 3 === y ? "" : n.trailingType
                        }), {
                            page: m,
                            rows: v
                        }),
                        w = (0, nt.ny)().updateFormCopyValue,
                        k = (0, rt.MP)().updateFormCopyValue,
                        M = (0, i.useCallback)((function() {
                            return f(1)
                        }), []);
                    it({
                        values: n,
                        handleConditionChange: M,
                        pageNumber: m
                    });
                    var V = (0, i.useCallback)((function(e) {
                            var t = document.getElementById(I.MI.BOT_MARKET_PLACE);
                            t && t.scrollIntoView({
                                behavior: "smooth"
                            }), f(e), r(z.ll.click, {
                                pageNo: e,
                                df_source: "spotGrid" === h ? z.vV.spotGrid : z.vV.futuresGrid,
                                $element_id: "next_page"
                            })
                        }), [h, r]),
                        F = "undefined" !== typeof a && !_,
                        E = (0, fe._3)(C, {
                            enabled: F
                        }),
                        L = E.list,
                        O = E.total,
                        H = E.isLoading,
                        U = (0, i.useMemo)((function() {
                            return L.filter((function(e) {
                                return b(e.symbol, h)
                            }))
                        }), [b, L, h]),
                        Y = (0, i.useState)(null),
                        q = Y[0],
                        Q = Y[1],
                        X = (0, ve.Z)((function(e) {
                            var t = h === x.Sn;
                            ! function() {
                                var a = {
                                        eventName: "trading_bot_landing_create",
                                        pageName: "trading_bot_landing",
                                        df_source: t ? z.vV.spotGrid : z.vV.futuresGrid,
                                        source: "bot_market_place"
                                    },
                                    s = U[e];
                                r(z.ll.popupView, a), r(z.ll.click, {
                                    $element_id: "strategy_create",
                                    df_source: t ? z.vV.spotGrid : z.vV.futuresGrid,
                                    pageName: K.DM.STRATEGY_LIST,
                                    module: K.DM.STRATEGY_LIST,
                                    df_5: K.Zx[n[B.eo.sort]]
                                }), Q(s), u("copyForm")
                            }()
                        })),
                        Z = (({
                            isSpot: e,
                            callback: t,
                            staticHost: n,
                            isLoggedIn: r,
                            strategy: a,
                            replacePageName: s
                        }) => {
                            const {
                                wrappedFunction: i,
                                modal: o
                            } = (0, ye.d)({
                                callback: t,
                                isLoggedIn: r,
                                strategy: a,
                                replacePageName: s
                            }), {
                                wrappedFunction: l,
                                modal: u
                            } = (0, xe.Z)({
                                callback: t,
                                staticHost: n,
                                isLoggedIn: r,
                                strategy: a,
                                replacePageName: s
                            });
                            return {
                                wrappedFunction: e ? i : l,
                                modal: e ? o : u
                            }
                        })({
                            isSpot: ge({
                                strategyType: h
                            }),
                            staticHost: be.K5,
                            callback: X,
                            isLoggedIn: a,
                            strategy: h,
                            replacePageName: "strategy_landing"
                        }),
                        $ = Z.wrappedFunction,
                        J = Z.modal;
                    return (0, s.jsx)(ot.C, {
                        containerClassName: "h-fit",
                        isLoading: H,
                        skeletonTemplate: "tableView" === t ? (0, s.jsx)(qt, {}) : (0, s.jsx)(Qt, {}),
                        children: (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(je.b, {
                                openModuleType: l,
                                setOpenModuleType: u,
                                copyingStrategy: q,
                                onClose: function() {
                                    Q(null), u(void 0);
                                    var e = {
                                        isAdvancedOpen: !1,
                                        isCustomizeParametersOpen: !1
                                    };
                                    w(e), k(e)
                                },
                                strategyType: h,
                                sortBy: null === C || void 0 === C ? void 0 : C.sort,
                                viewType: t,
                                isLoading: H
                            }), "tableView" === t ? (0, s.jsx)(Oe, {
                                isLoading: H,
                                onRowClick: $,
                                pageNumber: m,
                                list: U
                            }) : (0, s.jsx)(Ke, {
                                onButtonClick: $,
                                list: U,
                                sortBy: null === C || void 0 === C ? void 0 : C.sort
                            }), (0, s.jsx)(c.Ay, {
                                className: "mt-[16px] md:mt-[36px]",
                                children: (0, s.jsx)(qe, {
                                    pageNumber: m,
                                    onPaginationClick: V,
                                    total: O,
                                    rowSize: v,
                                    strategyType: h,
                                    maxPage: 50
                                })
                            }), J]
                        })
                    })
                },
                Zt = {},
                $t = (0, i.forwardRef)((function(e, t) {
                    var n = e.strategyType,
                        r = e.getTrackingData,
                        a = e.viewType,
                        o = (0, F.K7)(),
                        l = o.query,
                        u = o.hash,
                        d = (0, S.mN)({
                            defaultValues: "futuresGrid" === n ? (0, D.pp)({
                                strategyType: 2,
                                query: Zt
                            }) : (0, D.fI)({
                                strategyType: 1,
                                query: "spotGrid" === n && u.includes(I.MI.BOT_MARKET_PLACE) ? l : Zt
                            })
                        });
                    return (0, i.useImperativeHandle)(t, (function() {
                        return {
                            resetForm: function() {
                                d.reset("futuresGrid" === n ? (0, D.pp)({
                                    strategyType: 2
                                }) : (0, D.fI)({
                                    strategyType: 1
                                }))
                            }
                        }
                    })), (0, s.jsx)(S.Op, (0, R._)((0, P._)({}, d), {
                        children: (0, s.jsxs)(c.Ay, {
                            className: "flex flex-col-reverse",
                            children: [(0, s.jsx)(Xt, {
                                viewType: a
                            }), (0, s.jsx)(pe, {
                                strategyType: n,
                                getTrackingData: r
                            })]
                        })
                    }))
                })),
                Jt = n("D8sT"),
                Wt = n("4hgs"),
                en = n("S+0I"),
                tn = n("66mo"),
                nn = n.n(tn),
                rn = n("5nld"),
                an = function() {
                    var e = (0, en._)(nn().mark((function e() {
                        return nn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, rn.Jt)("/bapi/futures/v1/public/future/common/get-funding-info"));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                sn = function() {
                    var e = (0, en._)(nn().mark((function e() {
                        return nn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, rn.Jt)("/bapi/futures/v1/public/delivery/common/get-funding-info"));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                on = n("A4nT");
            const ln = ({
                isCM: e
            }) => (0, Wt.useQuery)(on.Bz.QUERY_FUNDING_INFO(e), (() => (e => (e ? sn : an)())(e).then((e => (e => e.reduce(((e, t) => (e[t.symbol] = t, e)), {}))(e.data)))), {
                enabled: "undefined" !== typeof e,
                staleTime: 1 / 0,
                cacheTime: 1 / 0
            });
            var un = n("BIu/");
            const cn = async () => {
                    const [{
                        data: e
                    }, {
                        data: t
                    }] = await Promise.all([(0, un.j)({
                        futuresType: "CM"
                    }), (0, un.j)({
                        futuresType: "UM"
                    })]);
                    return [...e, ...t]
                },
                dn = (e = {}) => (0, Wt.useQuery)(on.Bz.QUERY_ARBITRAGE_SYMBOLS, (() => cn().then((e => e.reduce(((e, t) => {
                    const {
                        futuresSymbol: n
                    } = t;
                    return n && (e[n] = t), e
                }), {})))), { ...e,
                    staleTime: 1 / 0
                }),
                pn = e => e,
                mn = "3",
                fn = "7",
                yn = "30",
                xn = "next",
                gn = {
                    [mn]: {
                        apr: "apr3d",
                        funding: "cum3dFundingRate"
                    },
                    [fn]: {
                        apr: "apr7d",
                        funding: "cum7dFundingRate"
                    },
                    [yn]: {
                        apr: "apr30d",
                        funding: "cum30dFundingRate"
                    },
                    [xn]: {
                        apr: "",
                        funding: ""
                    }
                };
            var hn = n("Wn7T");
            const vn = ({
                nextFundingRate: e,
                fundingIntervalHours: t = 8
            }) => {
                const n = (0, Pe.lw)((0, Pe.lw)(e, 1 / Number(t)), 8760).toNumber(),
                    r = (0, Pe.jL)((0, Pe.lw)(n, 100), 2, hn._g);
                return {
                    nextFundingAPR: (0, Ve.kf)(n) ? Number(r) : NaN,
                    roundedNextFundingAPR: (0, Ve.kf)(n) ? r : NaN
                }
            };
            var bn = n("jM3e"),
                jn = n("OZ3C"),
                Tn = n("5saw"),
                Nn = n("445e"),
                An = n("0hHH"),
                _n = n("Unpw"),
                Cn = n("0Igy"),
                wn = n.n(Cn);
            const kn = {
                    display: "inline-block"
                },
                Mn = (0, i.memo)((({
                    children: e
                }) => {
                    const t = (0, i.useMemo)((() => (e => {
                        if ("string" !== typeof e) return [];
                        const t = e.split(" "),
                            n = t.length,
                            r = t.map(((e, t) => {
                                const r = [];
                                if (e.length > 10)
                                    for (let n = 0; n < Math.ceil(e.length / 3); n++) {
                                        const t = e.substring(3 * n, 3 * (n + 1));
                                        r.push(t)
                                    } else r.push(e);
                                return t < n - 1 && r.push(" "), r
                            }));
                        return wn()(r)
                    })(e)), [e]);
                    return (0, s.jsx)(s.Fragment, {
                        children: t.map(((e, t) => " " === e ? (0, s.jsx)("span", {
                            style: kn,
                            children: "\xa0"
                        }, t) : (0, s.jsx)("span", {
                            style: kn,
                            children: e
                        }, t)))
                    })
                }));
            Mn.displayName = "SplitText";
            const Vn = ({
                    content: e
                }) => (0, s.jsx)(u.A, {
                    className: "rounded-[2px] mt-[2px] text-PrimaryText px-[5px] bg-Input typography-caption2 h-[16px] lg:mt-[0px] items-center",
                    children: e ? `${e}` : T.VsL
                }),
                Pn = ({
                    size: e,
                    futuresSymbol: t,
                    leftNode: n,
                    rightNode: r,
                    leverageNode: a,
                    futuresSide: o,
                    spotSymbol: l,
                    spotSide: d,
                    isReady: p
                }) => {
                    const {
                        t: m
                    } = (0, j.Y_)(), f = (0, An.x)(l || ""), y = (0, _n.E)(l || ""), x = (0, Nn.f)(t || ""), {
                        getFutI18n: g
                    } = (0, j.ud)(), {
                        symbol: h
                    } = (0, Tn.S)(x, g), v = (0, s.jsx)(c.Ay, {
                        className: "bg-DepthBuyBg px-[5px] w-[16px] h-[16px] flex justify-center items-center rounded",
                        children: (0, s.jsx)(c.Ay, {
                            className: "text-Buy typography-caption2",
                            children: m("arbitrage-buy-short", "B")
                        })
                    }), b = (0, s.jsx)(c.Ay, {
                        className: "bg-DepthSellBg px-[5px] w-[16px] h-[16px] flex justify-center items-center rounded",
                        children: (0, s.jsx)(c.Ay, {
                            className: "text-Sell typography-caption2",
                            children: m("arbitrage-sell-short", "S")
                        })
                    }), N = (0, i.useMemo)((() => ({
                        "text-PrimaryText": !0,
                        "mx-[4px]": !0,
                        "typography-subtitle6": "large" === e,
                        "typography-subtitle2": "medium" === e,
                        "typography-caption1": "small" === e,
                        "typography-headline5 mt-[-2px]": "headline5" === e
                    })), [e]), A = f && y ? `${f}/${y}` : T.VsL, _ = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(c.Ay, {
                            className: "flex items-center mb-[2px]",
                            children: [(0, s.jsx)(c.Ay, {
                                children: p && o ? "BUY" === o ? v : b : null
                            }), (0, s.jsx)(c.Ay, {
                                className: `${L()(N)} displayText`,
                                children: h
                            }), (0, s.jsxs)(u.A, {
                                className: "gap-[4px]",
                                children: [(0, s.jsx)(Vn, {
                                    content: m("perp", "Perp")
                                }), a]
                            })]
                        }), (0, s.jsxs)(c.Ay, {
                            className: "flex items-center",
                            children: [(0, s.jsx)(c.Ay, {
                                children: p && d ? "BUY" === d ? v : b : null
                            }), (0, s.jsx)(c.Ay, {
                                className: `${L()(N)} displayText`,
                                children: (0, s.jsx)(Mn, {
                                    children: A
                                })
                            })]
                        })]
                    });
                    return n || r ? (0, s.jsxs)(c.Ay, {
                        className: "flex justify-center items-center",
                        children: [n && n, (0, s.jsx)(c.Ay, {
                            children: _
                        }), r && (0, s.jsx)(c.Ay, {
                            className: "ml-[8px]",
                            children: r
                        })]
                    }) : _
                },
                Rn = ({
                    futuresSymbol: e
                }) => dn({
                    select: t => e ? t[e] : {}
                });
            var Sn = n("qYeW"),
                Fn = n("K64I");
            const In = e => {
                    const t = !!(0, Sn.e)(e || ""),
                        n = (0, Fn.Z)(t);
                    return {
                        nextFundingRate: e && n[e] ? .lastFundingRate || NaN,
                        nextFundingTime: e && n[e] ? .nextFundingTime || NaN
                    }
                },
                Dn = ({
                    value: e
                }) => (0, Ve.kf)(e) ? (0, s.jsx)(c.Ay, {
                    className: "text-Buy",
                    children: `${e}%`
                }) : (0, s.jsx)(s.Fragment, {
                    children: T.VsL
                }),
                En = ({
                    futuresSymbol: e,
                    fundingRangeType: t,
                    renderFn: n
                }) => {
                    const {
                        data: r
                    } = Rn({
                        futuresSymbol: e
                    }), {
                        roundedNextFundingAPR: a
                    } = (({
                        symbol: e,
                        enabled: t
                    }) => {
                        const n = (0, Sn.e)(e || ""),
                            {
                                data: r
                            } = ln({
                                isCM: n
                            }),
                            a = r ? .[e || ""] ? .fundingIntervalHours || 8,
                            {
                                nextFundingRate: s
                            } = In(e);
                        return t && s && a && e ? vn({
                            nextFundingRate: s,
                            fundingIntervalHours: a
                        }) : {
                            nextFundingAPR: NaN,
                            roundedNextFundingAPR: NaN
                        }
                    })({
                        symbol: e,
                        enabled: "next" === t
                    }), i = gn[t].apr, o = "" !== i ? r ? .[i] : "", l = t === xn ? a : (0, Ve.kf)(o) ? (0, Pe.jL)(100 * Number(o), 2, hn._g) : NaN;
                    return "function" === typeof n ? (0, s.jsx)(s.Fragment, {
                        children: n(Number(l))
                    }) : (0, s.jsx)(Dn, {
                        value: String(l)
                    })
                };
            var Ln = function() {
                    var e = (0, en._)(nn().mark((function e(t) {
                        return nn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, rn.bE)("/bapi/futures/v1/public/future/common/get-funding-rate-history", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Bn = function() {
                    var e = (0, en._)(nn().mark((function e(t) {
                        return nn().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, rn.bE)("/bapi/futures/v1/public/delivery/common/get-funding-rate-history", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            var On = n("4gDs");
            const zn = (0, i.lazy)((() => Promise.all([n.e(4315), n.e(2639), n.e(3087)]).then(n.bind(n, "uZNH")))),
                Gn = () => (0, s.jsx)(c.Ay, {
                    className: "mx-auto w-[108px] h-[40px] border-solid border-0 border-b-[1px] border-Line border-dashed"
                }),
                Hn = ({
                    symbol: e,
                    width: t,
                    height: n
                }) => {
                    const {
                        data: r = []
                    } = ((e, t, n) => {
                        const r = (0, Sn.e)(e),
                            a = r ? Bn : Ln,
                            {
                                data: s,
                                isLoading: i,
                                isFetching: o,
                                isFetched: l
                            } = (0, Wt.useQuery)(on.Bz.ARBITRAGE_FUNDING_FEE_HISTORY(e, Boolean(r), n, t), (() => a({
                                symbol: e,
                                page: t,
                                rows: n
                            })), {
                                enabled: "undefined" !== typeof r && Boolean(e) && Boolean(n) && Boolean(t)
                            });
                        return {
                            data: s ? .data ? ? [],
                            isLoading: i || o,
                            isFetched: l
                        }
                    })(e, 1, 20), a = Array.isArray(r) ? r.map((e => Number(e.lastFundingRate))) : [];
                    return 0 !== a.length && (0, On.o)() ? (0, s.jsx)(i.Suspense, {
                        fallback: (0, s.jsx)(Gn, {}),
                        children: (0, s.jsx)(zn, {
                            lineList: a,
                            width: t,
                            height: n
                        })
                    }) : (0, s.jsx)(Gn, {})
                },
                Kn = ({
                    futuresSymbol: e,
                    fundingRangeType: t,
                    renderFn: n
                }) => {
                    const {
                        data: r,
                        isLoading: a
                    } = Rn({
                        futuresSymbol: e
                    }), {
                        roundedNextFundingRate: i
                    } = (({
                        symbol: e,
                        enabled: t
                    }) => {
                        const {
                            nextFundingRate: n
                        } = In(e), {
                            data: r
                        } = Rn({
                            futuresSymbol: e
                        }), a = n || r ? .lastFundingRate;
                        if (!t || !a || !e) return {
                            nextFundingRate: NaN,
                            roundedNextFundingRate: NaN
                        };
                        const s = Number((0, Pe.jL)((0, Pe.lw)(a, 100), 4, hn._g));
                        return {
                            nextFundingRate: (0, Ve.kf)(a) ? Number(a) : NaN,
                            roundedNextFundingRate: (0, Ve.kf)(s) ? s : NaN
                        }
                    })({
                        symbol: e,
                        enabled: "next" === t
                    });
                    if (a || !r) return (0, s.jsx)(s.Fragment, {
                        children: T.VsL
                    });
                    const o = "next" !== t ? gn[t].funding : "",
                        l = o && r ? .[o],
                        u = t === xn ? i : (0, Ve.kf)(l) ? (0, Pe.jL)(100 * Number(l), 4, hn._g) : NaN;
                    return "function" === typeof n ? (0, s.jsx)(s.Fragment, {
                        children: n(Number(u))
                    }) : u ? (0, s.jsxs)(s.Fragment, {
                        children: [u, "%"]
                    }) : (0, s.jsx)(s.Fragment, {
                        children: T.VsL
                    })
                };
            var Un = n("TVsB"),
                Yn = n("bn6G"),
                qn = n("1/kJ"),
                Qn = n("vxaL"),
                Xn = n("xRXw");
            const Zn = e => {
                if (!e) return "";
                const t = e.match(/^\d+/);
                return t ? t[0] : "1"
            };
            var $n, Jn = function(e) {
                    var t = (({
                            symbol: e
                        }) => {
                            const {
                                data: t
                            } = Rn({
                                futuresSymbol: e
                            }), n = (0, Yn.h)(e), {
                                spotSymbol: r,
                                futuresSide: a,
                                spotBaseAsset: s
                            } = t || {}, i = "SELL" === a, o = Zn(n), l = Zn(s), u = (0, qn.I)(e), c = (0, Qn.Z)(r || ""), d = (0, Xn.i)(r || "") || c ? .closePrice, p = i ? {
                                sellPrice: new Un.g(u),
                                sellMultiplier: new Un.g(o),
                                buyPrice: new Un.g(d || ""),
                                buyMultiplier: new Un.g(l)
                            } : {
                                sellPrice: new Un.g(d || ""),
                                sellMultiplier: new Un.g(l),
                                buyPrice: new Un.g(u),
                                buyMultiplier: new Un.g(o)
                            }, m = p.sellPrice.dividedBy(p.sellMultiplier), f = p.buyPrice.dividedBy(p.buyMultiplier);
                            return {
                                spreadRate: m.minus(f).dividedBy(f)
                            }
                        })({
                            symbol: e.symbol
                        }).spreadRate,
                        n = (0, Ve.kf)(t) ? "".concat((0, Pe.lw)(t, 100).toFixed(4, T.csZ), "%") : be.Vs;
                    return (0, s.jsx)(s.Fragment, {
                        children: n
                    })
                },
                Wn = n("NmA0"),
                er = function(e) {
                    var t = e.nextFundingTime,
                        n = (0, i.useState)((function() {
                            return t - Date.now()
                        })),
                        r = n[0],
                        a = n[1];
                    (0, i.useEffect)((function() {
                        var e = setInterval((function() {
                            a(t - Date.now())
                        }), 1e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }), [t]);
                    var o = (0, Wn.nv)(r);
                    return (0, s.jsx)(c.Ay, {
                        children: o
                    })
                },
                tr = function(e) {
                    var t = e.symbol,
                        n = (0, Wt.useQueryClient)(),
                        r = In(t).nextFundingTime,
                        a = Rn({
                            futuresSymbol: t
                        }).data,
                        o = r || (null === a || void 0 === a ? void 0 : a.lastFundingTime),
                        l = o && Number.isInteger(o),
                        u = Date.now();
                    return (0, i.useEffect)((function() {
                        u === o && n.invalidateQueries(on.Bz.QUERY_ARBITRAGE_SYMBOLS)
                    }), [n, u, o]), l ? (0, s.jsx)(er, {
                        nextFundingTime: Number(o)
                    }) : (0, s.jsx)(s.Fragment, {
                        children: be.Vs
                    })
                },
                nr = function(e) {
                    var t = e.i18nKey,
                        n = e.defaultValue,
                        r = (0, G.Wi)().t;
                    return (0, s.jsx)(c.Ay, {
                        onClick: function(e) {
                            e.preventDefault()
                        },
                        children: (0, s.jsx)(v.x, {
                            t: r,
                            i18nKey: t,
                            defaults: n,
                            components: {
                                br: (0, s.jsx)("br", {}),
                                learnMoreLink: (0, s.jsx)(b.Z, {
                                    onClick: function() {
                                        window.open(T.TPI.ARBITRAGE_NEXT_FUNDING, "_blank")
                                    },
                                    path: T.TPI.ARBITRAGE_NEXT_FUNDING,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-TextLink no-underline cursor-pointer"
                                })
                            }
                        })
                    })
                },
                rr = function(e) {
                    var t = e.arbitrageInfo,
                        n = (0, G.Wi)().t,
                        r = (0, i.useState)(!1),
                        a = r[0],
                        o = r[1],
                        l = (0, i.useState)(!1),
                        u = l[0],
                        d = l[1],
                        p = (0, i.useState)(!1),
                        m = p[0],
                        f = p[1],
                        y = (0, i.useState)(!1),
                        x = y[0],
                        g = y[1],
                        h = (0, i.useState)(!1),
                        v = h[0],
                        b = h[1],
                        j = (0, i.useState)(!1),
                        T = j[0],
                        N = j[1],
                        A = t.spotSymbol,
                        C = t.futuresSymbol,
                        w = t.futuresSide,
                        k = t.spotSide;
                    return (0, s.jsxs)(c.Ay, {
                        className: "flex flex-col gap-y-[20px] p-[20px] w-full w-min-[344px] bg-BasicBg border border-solid border-Line hover:border-PrimaryYellow cursor-pointer text-PrimaryText rounded-[16px]",
                        children: [(0, s.jsx)(_.I, {
                            className: "w-full",
                            useReactPopper: !0,
                            open: a,
                            tooltips: (0, s.jsx)(c.Ay, {
                                className: "h-full",
                                children: (0, s.jsx)(nr, {
                                    i18nKey: "arbitrage-card-symbolPairTip",
                                    defaultValue: "The direction of arbitrage portfolio is based on 3 Day (Recent 72 hrs) Cumulative Funding Rate. <br />If 3 Day Funding Rate is positive, Short Futures and Buy Spot. <br/>If 3 Day Funding Rate is negative, Long Futures and Sell Spot."
                                })
                            }),
                            children: (0, s.jsx)(jn.n, {
                                left: (0, s.jsx)(c.Ay, {
                                    className: "flex-1",
                                    onMouseOver: function() {
                                        return o(!0)
                                    },
                                    onMouseLeave: function() {
                                        return o(!1)
                                    },
                                    children: (0, s.jsx)(Pn, {
                                        size: "headline5",
                                        isReady: !0,
                                        spotSymbol: A,
                                        spotSide: k,
                                        futuresSymbol: C,
                                        futuresSide: w
                                    })
                                }),
                                right: (0, s.jsx)(c.Ay, {
                                    className: "flex justify-end min-w-[65px]",
                                    children: (0, s.jsx)(q.A, {
                                        sz: "regular",
                                        className: "h-[36px] !px-[5px]",
                                        children: (0, s.jsx)(c.Ay, {
                                            className: "truncate min-w-[55px] max-w-[90px]",
                                            children: n("create", {
                                                defaultValue: "Create"
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, s.jsx)(jn.n, {
                            left: (0, s.jsx)(_.I, {
                                useReactPopper: !0,
                                open: u,
                                tooltips: n("botMarketPlace-arbitrage-3aprTip", {
                                    defaultValue: "3d APR = | Average (Last 72hr Funding Rate%) | / Funding Interval * 24 * 365"
                                }),
                                children: (0, s.jsxs)(c.Ay, {
                                    className: "cursor-help",
                                    onMouseOver: function() {
                                        return d(!0)
                                    },
                                    onMouseLeave: function() {
                                        return d(!1)
                                    },
                                    children: [(0, s.jsx)(c.Ay, {
                                        className: "typography-caption1 text-TertiaryText",
                                        children: n("botMarketPlace-arbitrage-3apr", {
                                            defaultValue: "3d APR"
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "typography-headline2-1 text-TextBuy break-all",
                                        children: (0, s.jsx)(En, {
                                            futuresSymbol: C,
                                            fundingRangeType: "3"
                                        })
                                    })]
                                })
                            }),
                            right: (0, s.jsx)(_.I, {
                                arrow: !0,
                                offset: 12,
                                placement: "top",
                                tooltips: n("arbitrage-fundingRateHistory", {
                                    defaultValue: "Funding Rate History"
                                }),
                                trigger: "hover",
                                variant: "gray",
                                className: "ml-[24px]",
                                children: (0, s.jsx)(c.Ay, {
                                    className: "h-[60px] w-[164px]",
                                    children: (0, s.jsx)(Hn, {
                                        symbol: A,
                                        width: 160,
                                        height: 50
                                    })
                                })
                            })
                        }), (0, s.jsxs)(c.Ay, {
                            className: "flex justify-between",
                            children: [(0, s.jsx)(_.I, {
                                className: "flex-1",
                                useReactPopper: !0,
                                open: m,
                                tooltips: n("botMarketPlace-arbitrage-7aprTip", {
                                    defaultValue: "7d APR = | Average (Last 168hr Funding Rate%) | / Funding Interval * 24 * 365"
                                }),
                                children: (0, s.jsxs)(c.Ay, {
                                    onMouseOver: function() {
                                        return f(!0)
                                    },
                                    onMouseLeave: function() {
                                        return f(!1)
                                    },
                                    children: [(0, s.jsx)(c.Ay, {
                                        className: "typography-caption1 text-TertiaryText",
                                        children: n("botMarketPlace-arbitrage-7apr", {
                                            defaultValue: "7d APR"
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "typography-body3 text-PrimaryText",
                                        children: (0, s.jsx)(En, {
                                            futuresSymbol: C,
                                            fundingRangeType: "7"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(_.I, {
                                className: "flex-1",
                                useReactPopper: !0,
                                open: x,
                                tooltips: n("botMarketPlace-arbitrage-30aprTip", {
                                    defaultValue: "30d APR = | Average (Last 720hr Funding Rate%) | / Funding Interval * 24 * 365"
                                }),
                                children: (0, s.jsxs)(c.Ay, {
                                    onMouseOver: function() {
                                        return g(!0)
                                    },
                                    onMouseLeave: function() {
                                        return g(!1)
                                    },
                                    children: [(0, s.jsx)(c.Ay, {
                                        className: "typography-caption1 text-TertiaryText",
                                        children: n("botMarketPlace-arbitrage-30apr", {
                                            defaultValue: "30d APR"
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "typography-body3 text-PrimaryText",
                                        children: (0, s.jsx)(En, {
                                            futuresSymbol: C,
                                            fundingRangeType: "30"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(_.I, {
                                className: "flex-1 flex justify-end",
                                useReactPopper: !0,
                                open: v,
                                tooltips: n("botMarketPlace-arbitrage-spreadRateTip", {
                                    defaultValue: "(The last price of the sell pair - the last price of the buy pair) / the last price of the buy pair * 100%"
                                }),
                                children: (0, s.jsxs)(c.Ay, {
                                    className: "flex flex-col items-end w-full",
                                    onMouseOver: function() {
                                        return b(!0)
                                    },
                                    onMouseLeave: function() {
                                        return b(!1)
                                    },
                                    children: [(0, s.jsx)(c.Ay, {
                                        className: "typography-caption1 text-TertiaryText",
                                        children: n("botMarketPlace-arbitrage-spreadRate", {
                                            defaultValue: "Spread Rate"
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "typography-body3 text-PrimaryText",
                                        children: (0, s.jsx)(Jn, {
                                            symbol: C
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsxs)(c.Ay, {
                            className: "flex justify-between",
                            children: [(0, s.jsx)(_.I, {
                                className: "flex-1",
                                useReactPopper: !0,
                                tooltips: (0, s.jsx)(nr, {
                                    i18nKey: "botMarketPlace-arbitrage-nextFundingTip",
                                    defaultValue: "The funding rate to be exchanged between the long and short positions in the next funding fee cycle. If the funding rate is positive, long position pays to short position. If negative, short position pay to long position. <br/> <learnMoreLink> Learn More </learnMoreLink>"
                                }),
                                children: (0, s.jsxs)(c.Ay, {
                                    className: "overflow-hidden",
                                    children: [(0, s.jsx)(c.Ay, {
                                        className: "typography-caption1 text-TertiaryText",
                                        children: n("botMarketPlace-arbitrage-nextFunding", {
                                            defaultValue: "Next Funding"
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "typography-body3 text-PrimaryText",
                                        children: (0, s.jsx)(Kn, {
                                            futuresSymbol: C,
                                            fundingRangeType: "next"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(_.I, {
                                className: "flex-1 justify-end",
                                useReactPopper: !0,
                                open: T,
                                tooltips: n("botMarketPlace-arbitrage-countDownTip", {
                                    defaultValue: "Remaining time till next funding fee cycle."
                                }),
                                children: (0, s.jsxs)(c.Ay, {
                                    className: "w-full text-end",
                                    onMouseOver: function() {
                                        return N(!0)
                                    },
                                    onMouseLeave: function() {
                                        return N(!1)
                                    },
                                    children: [(0, s.jsx)(c.Ay, {
                                        className: "typography-caption1 text-TertiaryText",
                                        children: n("botMarketPlace-arbitrage-countDown", {
                                            defaultValue: "Countdown"
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "typography-body3 text-PrimaryText",
                                        children: (0, s.jsx)(tr, {
                                            symbol: C
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                ar = function() {
                    var e = (0, G.Qs)(),
                        t = e.isTablet,
                        n = e.isMobile,
                        r = (0, S.FH)(),
                        a = r[D.OI.zone],
                        o = (0, Jt.h)(),
                        l = ln({
                            isCM: !0
                        }).data,
                        u = ln({
                            isCM: !1
                        }).data,
                        d = r[D.OI.direction],
                        p = r[D.OI.sort],
                        m = (0, i.useState)(1),
                        f = m[0],
                        y = m[1],
                        x = (({
                            enabled: e
                        } = {
                            enabled: !0
                        }) => dn({
                            select: pn,
                            enabled: e
                        }))(),
                        h = x.data,
                        v = void 0 === h ? {} : h,
                        j = x.isLoading,
                        T = (0, g.nE)(),
                        N = (0, i.useMemo)((function() {
                            var e = Object.keys(v || {}).map((function(e) {
                                return v[e]
                            }));
                            return "" !== a && (e = e.filter((function(e) {
                                return e.futuresType === a
                            }))), "" !== d && (e = e.filter((function(e) {
                                return d === be.Jx.FUNDING_POSITIVE ? Number(e.cum3dFundingRate) > 0 : d !== be.Jx.FUNDING_REVERT || Number(e.cum3dFundingRate) < 0
                            }))), e = e.map((function(e) {
                                var t, n, r = (null === o || void 0 === o || null === (t = o[e.futuresSymbol]) || void 0 === t ? void 0 : t.isCM) ? l : u,
                                    a = (null === r || void 0 === r || null === (n = r[e.futuresSymbol || ""]) || void 0 === n ? void 0 : n.fundingIntervalHours) || 8;
                                return (0, R._)((0, P._)({}, e), {
                                    aprNext: vn({
                                        nextFundingRate: e.lastFundingRate,
                                        fundingIntervalHours: a
                                    })
                                })
                            })), e.sort((function(e, t) {
                                return t[p] - e[p]
                            }))
                        }), [v, a, p, d, o, l, u]),
                        A = N.length,
                        _ = function(e, t) {
                            return e ? 6 : t ? 8 : 9
                        }(t, n),
                        C = (0, i.useMemo)((function() {
                            return [_ * (f - 1), _ * f]
                        }), [_, f]),
                        w = C[0],
                        k = C[1],
                        M = (0, i.useMemo)((function() {
                            return N.slice(w, k)
                        }), [N, w, k]),
                        V = (0, i.useCallback)((function() {
                            return y(1)
                        }), []);
                    it({
                        values: r,
                        handleConditionChange: V,
                        pageNumber: f
                    });
                    return (0, s.jsx)(ot.C, {
                        containerClassName: "h-fit",
                        isLoading: j,
                        skeletonTemplate: (0, s.jsx)(Qt, {}),
                        children: (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(c.Ay, {
                                className: "gap-[24px] flex-wrap grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]",
                                children: M.map((function(e, t) {
                                    var n = e.futuresSymbol,
                                        r = (0, bn.z0)({
                                            symbol: n || I.d5
                                        }, "");
                                    return (0, s.jsx)(b.Z, {
                                        className: "no-underline",
                                        path: r,
                                        target: "_blank",
                                        onClick: function() {
                                            return e = n, void T(z.ll.click, {
                                                module: "bot_market",
                                                $element_id: "arbitrage_marketplace_create",
                                                symbol: e,
                                                eventName: "strategy_landing",
                                                pageName: "strategy_landing"
                                            });
                                            var e
                                        },
                                        children: (0, s.jsx)(rr, {
                                            arbitrageInfo: e
                                        })
                                    }, t)
                                }))
                            }), (0, s.jsx)(c.Ay, {
                                className: "mt-[16px] md:mt-[36px]",
                                children: (0, s.jsx)(qe, {
                                    pageNumber: f,
                                    onPaginationClick: y,
                                    total: A,
                                    rowSize: _,
                                    maxPage: 50
                                })
                            })]
                        })
                    })
                },
                sr = (0, i.forwardRef)((function(e, t) {
                    var n = e.strategyType,
                        r = e.getTrackingData,
                        a = (0, S.mN)({
                            defaultValues: (0, D.mq)()
                        });
                    return (0, i.useImperativeHandle)(t, (function() {
                        return {
                            resetForm: function() {
                                a.reset((0, D.mq)())
                            }
                        }
                    })), (0, s.jsx)(S.Op, (0, R._)((0, P._)({}, a), {
                        children: (0, s.jsxs)(c.Ay, {
                            className: "flex flex-col-reverse",
                            children: [(0, s.jsx)(ar, {}), (0, s.jsx)(pe, {
                                strategyType: n,
                                getTrackingData: r
                            })]
                        })
                    }))
                })),
                ir = n("YZbU"),
                or = n("VtEJ"),
                lr = n("3I7B"),
                ur = n("WjPW"),
                cr = (0, l.A)((function() {
                    return n.e(2488).then(n.bind(n, "P/En"))
                }), {
                    webpack: function() {
                        return ["P/En"]
                    },
                    ssr: !1
                }),
                dr = "botMarketplace-tip",
                pr = "<ul><li>Bot Marketplace features the top Grid Trading Strategies on Binance worldwide for Spot Grid and Futures Grid, allowing users to replicate the corresponding parameters for their trading strategy.</li><br/><li> By default, all of your bots are shared in the marketplace. You can disable this in your trade settings.</li></ul>",
                mr = function() {
                    return {
                        module: K.DM.BOT_MARKET,
                        df_source: K.vV.strategyTrading,
                        pageName: K.QX.landingPage,
                        clientType: K.Yx,
                        eventName: K.b8.strategyLanding
                    }
                },
                fr = ($n = {}, (0, r._)($n, be.Sn, "spot_grid"), (0, r._)($n, be.us, "futures_grid"), $n),
                yr = {
                    CARD_VIEW: "cardView",
                    TABLE_VIEW: "tableView"
                },
                xr = [be.Sn, be.us, x.S8],
                gr = function() {
                    var e = (0, k.XY)().t,
                        t = (0, k.Wi)().t,
                        n = (0, k.X_)().t,
                        r = (0, G.I7)(),
                        o = (0, i.useRef)({
                            resetForm: function() {}
                        }),
                        l = (0, i.useRef)({
                            resetForm: function() {}
                        }),
                        d = (0, V.n)().isMobile,
                        p = yr.CARD_VIEW,
                        b = (0, a._)((0, ur.z)(ir.p.botMarketViewType, p), 2),
                        j = b[0],
                        T = b[1],
                        P = (0, M.nH)(),
                        R = (0, g.nE)(),
                        S = "tableView" === j ? e("landingPage-tabsTool-cardView", {
                            defaultValue: "Card View"
                        }) : e("landingPage-tabsTool-tableView", {
                            defaultValue: "Table View"
                        }),
                        F = (0, i.useCallback)((function() {
                            R(K.ll.click, {
                                $element_id: "tool_tip"
                            })
                        }), [R]),
                        I = function() {
                            o.current.resetForm()
                        },
                        D = function() {
                            l.current.resetForm()
                        };
                    return (0, s.jsx)(lr.m, {
                        children: (0, s.jsx)(C.y, {
                            list: xr,
                            tabFontSize: d ? "middle" : "large",
                            variant: "default",
                            mobileVariant: "default",
                            isShowSpinner: !1,
                            localForageKey: ir.p.strategyPoolTab,
                            moduleComplianceKey: h.Hj.TRADING_BOT_LIST,
                            skeletonTemplate: (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(Yt, {}), "tableView" === j ? (0, s.jsx)(qt, {}) : (0, s.jsx)(Qt, {})]
                            }),
                            renderTabPane: function(e) {
                                return e === x.S8 ? (0, s.jsx)(sr, {
                                    ref: l,
                                    strategyType: e,
                                    getTrackingData: mr,
                                    viewType: j
                                }) : (0, s.jsx)($t, {
                                    ref: o,
                                    strategyType: e,
                                    getTrackingData: mr,
                                    viewType: j
                                })
                            },
                            renderTitle: function() {
                                return (0, s.jsxs)(u.A, {
                                    className: "flex-wrap items-center",
                                    children: [(0, s.jsx)(w.C, {
                                        classNames: "items-center",
                                        title: e("landingPage-tabs-botMarketplace", {
                                            defaultValue: "Bot Marketplace"
                                        }),
                                        icon: (0, s.jsx)(u.A, {
                                            className: "items-center",
                                            children: (0, s.jsx)(c.Ay, {
                                                className: "mr-[12px]",
                                                children: (0, s.jsx)(or.X, {
                                                    onClick: function() {
                                                        return F()
                                                    },
                                                    modalHeader: n("disclaimer-popup-title", {
                                                        defaultValue: "Disclaimer"
                                                    }),
                                                    modalBody: (0, s.jsxs)(c.Ay, {
                                                        children: [(0, s.jsx)("ul", {
                                                            className: "pl-[20px]",
                                                            children: (0, s.jsx)("li", {
                                                                children: (0, s.jsx)(N, {})
                                                            })
                                                        }), (0, s.jsx)("br", {}), (0, s.jsx)(v.x, {
                                                            t: t,
                                                            i18nKey: dr,
                                                            defaults: pr,
                                                            components: {
                                                                li: (0, s.jsx)("li", {}),
                                                                ul: (0, s.jsx)("ul", {
                                                                    className: "pl-[20px]"
                                                                })
                                                            }
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, s.jsx)(c.Ay, {
                                        className: "mb-[16px] md:mb-[24px] items-center",
                                        children: (0, s.jsx)(A.E, {
                                            containerClassName: "t-caption1",
                                            shouldShowIcon: !0,
                                            shouldShowBg: !0,
                                            currency: r
                                        })
                                    })]
                                })
                            },
                            tabContainerClassName: "absolute top-0 my-[10px] right-0 w-[150px] flex justify-end items-center z-[10]",
                            renderAfterTabs: function(t) {
                                return (0, s.jsxs)(s.Fragment, {
                                    children: [P && "arbitrage" !== t && (0, s.jsx)(cr, {
                                        strategyType: t
                                    }), !d && (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)(_.I, {
                                            arrow: !0,
                                            offset: 12,
                                            placement: "top",
                                            tooltips: e("resetFilter", {
                                                defaultValue: "Reset Filter"
                                            }),
                                            enterDelayTime: 0,
                                            trigger: "hover",
                                            variant: "gray",
                                            className: "ml-[24px]",
                                            children: (0, s.jsx)(c.Ay, {
                                                className: "cursor-pointer",
                                                onClick: "arbitrage" !== t ? I : D,
                                                children: (0, s.jsx)(m, {
                                                    className: "text-[24px] text-PrimaryText"
                                                })
                                            })
                                        }), "arbitrage" !== t && (0, s.jsx)(_.I, {
                                            arrow: !0,
                                            offset: 12,
                                            className: "ml-[24px]",
                                            placement: "top",
                                            tooltips: S,
                                            enterDelayTime: 0,
                                            trigger: "hover",
                                            variant: "gray",
                                            children: (0, s.jsx)(c.Ay, {
                                                className: "cursor-pointer",
                                                onClick: function() {
                                                    return function(e) {
                                                        var t = j === yr.TABLE_VIEW ? yr.CARD_VIEW : yr.TABLE_VIEW;
                                                        R(K.ll.click, {
                                                            $element_id: "cardView" === t ? "card_view" : "list_view",
                                                            df_source: "spotGrid" === e ? K.vV.spotGrid : K.vV.futuresGrid
                                                        }), T(t)
                                                    }(t)
                                                },
                                                children: "cardView" === j ? (0, s.jsx)(f, {
                                                    className: "text-[24px] text-PrimaryText"
                                                }) : (0, s.jsx)(y, {
                                                    className: "text-[24px] text-PrimaryText"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            },
                            onTabClick: function(e) {
                                R(K.ll.click, {
                                    $element_id: fr[e]
                                })
                            }
                        })
                    })
                };
            const hr = (0, i.memo)(gr)
        },
        pc6L: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => i
            });
            var r = n("mXdx"),
                a = n("Bdbj"),
                s = n("UJMK"),
                i = function(e) {
                    var t = e.onChange,
                        n = e.value;
                    return (0, r.jsx)(s.j, {
                        field: a.eo.trailingType,
                        value: n,
                        onChange: function(e, n) {
                            t(e, n)
                        }
                    })
                }
        },
        p5Sb: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => x
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                s = n.n(a),
                i = n("/70K"),
                o = n("TQvm");
            const l = function(e) {
                return s().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 5H3v14h18V5zm-7.5 10.267l5.5-5.5L17.23 8l-3.73 3.731-3-3L5 14.231 6.768 16l3.732-3.732 3 3z",
                    fill: "currentColor"
                }))
            };
            const u = function(e) {
                return s().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.412 19.191A9 9 0 1110.75 3.086v5.11a4.005 4.005 0 103.048 7.381l3.614 3.614zm1.77-1.766a9.002 9.002 0 00-5.932-14.34v5.111a4.005 4.005 0 012.32 5.617l3.612 3.612z",
                    fill: "currentColor"
                }))
            };
            var c = n("xqbL"),
                d = n.n(c),
                p = n("1lvF"),
                m = n("UVzS"),
                f = s().createElement(l, null),
                y = s().createElement(u, null);
            const x = function(e) {
                var t, n = e.disabled,
                    a = e.onChange,
                    o = e.size,
                    l = void 0 === o ? "middle" : o,
                    u = e.variant,
                    c = void 0 === u ? "regular" : u,
                    x = e.styleVariant,
                    g = void 0 === x ? "line" : x,
                    h = e.checked,
                    v = e.defaultChecked,
                    b = e.leftContent,
                    j = void 0 === b ? f : b,
                    T = e.rightContent,
                    N = void 0 === T ? y : T,
                    A = (0, r.__rest)(e, ["disabled", "onChange", "size", "variant", "styleVariant", "checked", "defaultChecked", "leftContent", "rightContent"]),
                    _ = (0, i.j)({
                        defaultChecked: v,
                        checked: h,
                        disabled: n,
                        onChange: a
                    }),
                    C = _.onChecked,
                    w = _.checked,
                    k = (0, m.r)(),
                    M = k.prefixCls,
                    V = k.isRTL,
                    P = "".concat(M, "-switch"),
                    R = d()(P, ((t = {})["".concat(P, "-rtl")] = !!V, t["".concat(P, "__").concat(c)] = !!c, t["".concat(P, "__content__").concat(g)] = "content" === c && !!g, t["data-size-".concat(l)] = !!l, t.disabled = !!n, t.checked = !!w, t), e.className),
                    S = {
                        role: "switch",
                        "aria-checked": w,
                        "aria-disabled": n,
                        "aria-label": "switch",
                        tabIndex: n ? -1 : 0,
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || (e.preventDefault(), C())
                        }
                    };
                return s().createElement(p.Ay, (0, r.__assign)({}, S, A, {
                    onClick: C,
                    className: R
                }), "content" === c ? s().createElement(s().Fragment, null, s().createElement(p.Ay, {
                    className: "".concat(P, "__content-left")
                }, j), s().createElement(p.Ay, {
                    className: "".concat(P, "__content-right")
                }, N)) : null, s().createElement(p.Ay, {
                    className: "".concat(P, "-dot"),
                    children: e.children
                }))
            }
        },
        "7mHb": (e, t, n) => {
            var r = n("KtJ+"),
                a = n("vaf0"),
                s = n("HrxU");
            e.exports = function(e, t, n) {
                for (var i = -1, o = t.length, l = {}; ++i < o;) {
                    var u = t[i],
                        c = r(e, u);
                    n(c, u) && a(l, s(u, e), c)
                }
                return l
            }
        },
        vaf0: (e, t, n) => {
            var r = n("iaNN"),
                a = n("HrxU"),
                s = n("hjQD"),
                i = n("bEdQ"),
                o = n("Sl8P");
            e.exports = function(e, t, n, l) {
                if (!i(e)) return e;
                for (var u = -1, c = (t = a(t, e)).length, d = c - 1, p = e; null != p && ++u < c;) {
                    var m = o(t[u]),
                        f = n;
                    if ("__proto__" === m || "constructor" === m || "prototype" === m) return e;
                    if (u != d) {
                        var y = p[m];
                        void 0 === (f = l ? l(y, m, p) : void 0) && (f = i(y) ? y : s(t[u + 1]) ? [] : {})
                    }
                    r(p, m, f), p = p[m]
                }
                return e
            }
        },
        y9kU: e => {
            e.exports = function(e) {
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }
        },
        ajAa: (e, t, n) => {
            var r = n("hzJ1"),
                a = n("y9kU"),
                s = n("M/D+");
            e.exports = function(e, t) {
                return s(e, a(r(t)))
            }
        },
        "M/D+": (e, t, n) => {
            var r = n("BL0e"),
                a = n("hzJ1"),
                s = n("7mHb"),
                i = n("Fa2J");
            e.exports = function(e, t) {
                if (null == e) return {};
                var n = r(i(e), (function(e) {
                    return [e]
                }));
                return t = a(t), s(e, n, (function(e, n) {
                    return t(e, n[0])
                }))
            }
        }
    }
]);