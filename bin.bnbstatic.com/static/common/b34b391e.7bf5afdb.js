"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [8646], {
        FWa8: (e, t, r) => {
            r.d(t, {
                X: () => s
            });
            const n = 1e-7;

            function s(e = n) {
                let t = Number(e);
                return Number.isNaN(t) && (t = n), 0 === t && (t = 1), Math.floor(Math.abs(Math.log10(t)))
            }
        },
        "1/kJ": (e, t, r) => {
            r.d(t, {
                I: () => C
            });
            var n = r("DTvD"),
                s = r("4hgs"),
                a = r("S+0I"),
                i = r("66mo"),
                o = r.n(i),
                c = r("5nld"),
                u = r("XqCI"),
                l = (function() {
                    var e = (0, a._)(o().mark((function e(t) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, c.Jt)("/fapi/v1/ticker/price", t);
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, a._)(o().mark((function e(t) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, c.Jt)("/dapi/v1/ticker/price", t);
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1
                                    };
                                case 10:
                                    return e.abrupt("return", r);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, a._)(o().mark((function e(t) {
                        var r, n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, c.Jt)("/fapi/v1/ticker/price?".concat((0, u.E2)(t)));
                                case 4:
                                    n = e.sent, r = {
                                        success: !0,
                                        data: n
                                    }, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), r = {
                                        success: !1,
                                        data: {}
                                    };
                                case 11:
                                    return e.abrupt("return", r);
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
                }()),
                d = function() {
                    var e = (0, a._)(o().mark((function e(t) {
                        var r, n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, c.Jt)("/dapi/v1/ticker/price?".concat((0, u.E2)(t)));
                                case 4:
                                    n = e.sent, r = {
                                        success: !0,
                                        data: n
                                    }, e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), r = {
                                        success: !1,
                                        data: {}
                                    };
                                case 11:
                                    return e.abrupt("return", r);
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
                m = r("tM9B"),
                x = r("D8sT"),
                p = r("FWa8");
            var h = r("XAon"),
                y = r("qYeW"),
                v = r("445e");
            var f = r("A4nT"),
                b = r("YxIV"),
                g = r("AkME"),
                T = r("Tpr9");
            const j = (0, g.C)({
                    queryKey: f.Bz.QUERY_LAST_PRICE,
                    subscribeToStreamFn: ({
                        symbol: e,
                        stream: t,
                        queryClient: r
                    }) => {
                        const n = t => {
                            t.reverse().every((t => {
                                const {
                                    symbol: n,
                                    trade: s
                                } = t;
                                if (n !== e) return !0;
                                const {
                                    price: a,
                                    tradeTime: i
                                } = s;
                                return r.setQueryData(f.Bz.QUERY_LAST_PRICE(e), {
                                    success: !0,
                                    data: {
                                        symbol: e,
                                        price: a,
                                        time: i
                                    }
                                }), !1
                            }))
                        };
                        T.Ih.addWorker(n);
                        const s = t.getStreamTradeSnap(e).subscribe((t => {
                            T.Ih.push({
                                symbol: e,
                                trade: t[0]
                            })
                        }));
                        return () => {
                            s(), T.Ih.removeWorker(n)
                        }
                    }
                }),
                C = (e, t = {
                    enabled: !0
                }) => {
                    const r = (0, x.h)(),
                        a = (0, h.p)(),
                        i = (() => {
                            const e = (0, x.h)();
                            return (0, n.useCallback)((({
                                symbol: t,
                                price: r,
                                rm: n
                            }) => {
                                const s = e ? .[t],
                                    a = (0, p.X)(Number(s ? .tickSize) || void 0);
                                return (0, m.jL)(r, a, n)
                            }), [e])
                        })(),
                        o = (0, y.e)(e),
                        c = !a && Boolean(r[e]) && t.enabled,
                        u = (e => {
                            const t = (0, v.f)(e);
                            return t ? .close
                        })(e),
                        g = f.Bz.QUERY_LAST_PRICE(e),
                        T = (0, s.useQueryClient)(),
                        C = (0, b.OE)();
                    (0, n.useEffect)((function() {
                        c && j({
                            getSDK: C,
                            queryClient: T,
                            productMap: r
                        })
                    }), [r, T, c, C]);
                    const w = (e => (0, n.useMemo)((() => {
                            const t = e ? d : l;
                            return async ({
                                symbol: e
                            }) => {
                                const r = await t({
                                    symbol: e
                                });
                                return { ...r,
                                    data: Array.isArray(r.data) ? r.data[0] : r.data
                                }
                            }
                        }), [e]))(Boolean(o)),
                        {
                            data: k
                        } = (0, s.useQuery)(g, (() => w({
                            symbol: e
                        })), {
                            notifyOnChangeProps: ["data"],
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0,
                            enabled: c && "undefined" !== typeof o,
                            select: t => i({
                                price: t ? .data ? .price || u || "",
                                symbol: e,
                                rm: 1
                            })
                        });
                    return k || i({
                        price: u || "",
                        symbol: e,
                        rm: 1
                    })
                }
        },
        euV7: (e, t, r) => {
            r.d(t, {
                F: () => s
            });
            var n = r("445e");
            const s = ({
                symbol: e
            }) => {
                const t = (0, n.f)(e);
                return t ? .pricePrecision
            }
        },
        XAon: (e, t, r) => {
            r.d(t, {
                p: () => s
            });
            var n = r("luRU");
            const s = () => {
                const {
                    isLoading: e,
                    isFetching: t
                } = (0, n.sd)();
                return e || t
            }
        },
        YxIV: (e, t, r) => {
            r.d(t, {
                OE: () => a,
                Qr: () => s
            });
            var n = r("DTvD");
            const s = (0, n.createContext)(void 0),
                a = () => {
                    const e = (0, n.useContext)(s);
                    if (!e) throw new Error("FuturesCoreProvider: Prop getSDK is not available");
                    return e
                }
        },
        AkME: (e, t, r) => {
            r.d(t, {
                C: () => n
            });
            const n = ({
                queryKey: e,
                subscribeToStreamFn: t
            }) => {
                const r = {};
                let n = !1;
                return ({
                    getSDK: s,
                    queryClient: a,
                    productMap: i
                }) => {
                    if (n) return;
                    n = !0;
                    a.getQueryCache().subscribe((n => {
                        if (!n) return;
                        const {
                            query: o,
                            type: c
                        } = n;
                        if ("queryRemoved" === c || "removed" === c) return;
                        const u = o.queryKey[1],
                            l = e(u);
                        if (!(o.queryKey[0] === l[0])) return;
                        const d = i[u];
                        if (!d) return;
                        const {
                            isCM: m
                        } = d, x = s({
                            isCM: m
                        }), p = "observerRemoved" === c;
                        r[u] || p || 0 === o.getObserversCount() ? p && 0 === o.getObserversCount() && (r[u] ? .(), r[u] = void 0, a.invalidateQueries(l)) : r[u] = t({
                            symbol: u,
                            stream: x,
                            queryClient: a
                        })
                    }))
                }
            }
        },
        Tpr9: (e, t, r) => {
            r.d(t, {
                s1: () => d,
                Ih: () => l
            });
            var n = r("Bkzn"),
                s = r("d12p"),
                a = function() {
                    function e(t) {
                        (0, n._)(this, e), this.workers = [], this.paused = !1, this.queue = [], this.interval = t.interval, this.maxSize = t.maxSize, this.name = t.name, this.initOptions = t, this.__debug = t.__debug, "undefined" !== typeof window && this.startTimer()
                    }
                    var t = e.prototype;
                    return t.addWorker = function(e) {
                        this.workers.push(e)
                    }, t.removeWorker = function(e) {
                        var t = this.workers.findIndex((function(t) {
                            return t === e
                        }));
                        this.workers.splice(t, 1)
                    }, t.decelerate = function(e) {
                        this.updateOptions({
                            maxSize: this.maxSize * e,
                            interval: this.interval * e
                        })
                    }, t.updateOptions = function(e) {
                        e.maxSize && (this.maxSize = e.maxSize), e.interval && (this.interval = e.interval), this.flush()
                    }, t.reset = function() {
                        this.updateOptions(this.initOptions)
                    }, t.pause = function() {
                        this.flush(), this.paused = !0
                    }, t.resume = function() {
                        this.paused = !1, this.startTimer()
                    }, t.push = function(e) {
                        this.paused || this.queue.push(e), this.queue.length >= this.maxSize && this.flush(), this.debug("push", this.queue.length)
                    }, t.clear = function() {
                        this.queue = [], this.debug("clear")
                    }, t.startTimer = function() {
                        var e = this;
                        this.paused || (this.debug("start"), this.timeoutId = setTimeout((function() {
                            e.flush()
                        }), this.interval))
                    }, t.flush = function() {
                        this.timeoutId && clearTimeout(this.timeoutId);
                        var e = this.queue.slice();
                        this.debug("process", e.length);
                        try {
                            !this.paused && e.length > 0 && this.workers.forEach((function(t) {
                                return t(e)
                            }))
                        } catch (t) {
                            console.error(t)
                        }
                        this.clear(), this.startTimer()
                    }, t.debug = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        var n;
                        this.__debug && (n = console).log.apply(n, [Date().toString(), this.name || "Queue"].concat((0, s._)(t)))
                    }, e
                }();
            const i = ({
                    name: e,
                    queueMap: t
                }) => ({
                    copyTradingPayload: r
                }) => {
                    const {
                        copyTradeType: n,
                        portfolioId: s
                    } = r || {}, i = `${n}_${s}`, o = t[i];
                    if (o) return o;
                    const c = new a({
                        name: `${e}_${i}`,
                        interval: 1e3,
                        maxSize: 1e4
                    });
                    return t[i] = c, c
                },
                o = {},
                c = (i({
                    name: "umPosition",
                    queueMap: o
                }), new a({
                    name: "cmPosition",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "umMarkPrice",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "cmMarkPrice",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "cmBalance",
                    interval: 1e3,
                    maxSize: 1e4
                }), {}),
                u = (i({
                    name: "umBalance",
                    queueMap: c
                }), {}),
                l = (i({
                    name: "umOrder",
                    queueMap: u
                }), new a({
                    name: "cmOrder",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "ticker",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "umTicker",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "cmTicker",
                    interval: 1e3,
                    maxSize: 1e4
                }), new a({
                    name: "tradeSnape",
                    interval: 1e3,
                    maxSize: 1e4
                })),
                d = new a({
                    name: "markPrice",
                    interval: 1e3,
                    maxSize: 1e4
                });
            new a({
                name: "topMovers",
                interval: 200,
                maxSize: 1e3
            })
        },
        "8uRx": (e, t, r) => {
            r.d(t, {
                G: () => u
            });
            var n = r("mXdx"),
                s = (r("DTvD"), r("1lvF")),
                a = r("xqbL"),
                i = r.n(a),
                o = r("NmA0"),
                c = r("trXm");
            const u = ({
                runningTime: e,
                className: t
            }) => {
                const {
                    t: r
                } = (0, c.Y_)();
                return (0, n.jsx)(s.Ay, {
                    className: i()("typography-body3 text-PrimaryText", t),
                    children: (0, o.a3)((0, o.xY)(e), r)
                })
            }
        },
        dSFF: (e, t, r) => {
            r.d(t, {
                A: () => d,
                n: () => m
            });
            var n = r("mXdx"),
                s = r("DTvD"),
                a = r("qYeW"),
                i = r("1lvF"),
                o = r("VrC+"),
                c = r("/d8Z"),
                u = r("wK5/");
            const l = !0,
                d = ({
                    pnl: e,
                    enabledProfitColor: t = !0
                }) => {
                    const r = (0, o.q)(e, 2),
                        s = t ? (0, c.A)(e, "text-PrimaryText", l) : "text-PrimaryText";
                    return (0, n.jsxs)(i.Ay, {
                        className: s,
                        children: ["$", r]
                    })
                },
                m = ({
                    symbol: e,
                    pnl: t,
                    enabledProfitColor: r,
                    precision: d
                }) => {
                    const m = (0, a.e)(e),
                        x = (0, s.useMemo)((() => m ? (0, u.r)(m) : 2), [m]),
                        p = d || x,
                        h = (0, o.q)(t, p),
                        y = r ? (0, c.A)(t, "text-PrimaryText", l) : "text-PrimaryText";
                    return (0, n.jsx)(i.Ay, {
                        className: y,
                        children: `${m?"":"$"}${h}`
                    })
                }
        },
        "+f5r": (e, t, r) => {
            r.d(t, {
                o: () => m
            });
            var n = r("mXdx"),
                s = r("DTvD"),
                a = r("qYeW"),
                i = r("1lvF"),
                o = r("PyG5"),
                c = r("X6af"),
                u = r("4gDs");
            const l = (0, s.lazy)((() => Promise.all([r.e(4315), r.e(2639), r.e(3087)]).then(r.bind(r, "uZNH")))),
                d = () => (0, n.jsx)(i.Ay, {
                    className: "mx-auto w-[108px] h-[40px] border-solid border-0 border-b-[1px] border-Line border-dashed"
                }),
                m = ({
                    data: e,
                    sortBy: t,
                    width: r,
                    height: i
                }) => {
                    const {
                        strategyId: m,
                        userId: x,
                        strategyType: p,
                        symbol: h
                    } = e || {}, y = (0, a.e)(h), v = "pnl" === t, f = (0, s.useMemo)((() => "futuresGrid" === (0, c.HL)(p) ? y ? "CM_GRID" : "UM_GRID" : "SPOT_GRID"), [y, p]), {
                        data: b = []
                    } = (0, o.n)({
                        rootUserId: x,
                        strategyId: m,
                        streamerStrategyType: f
                    }), g = Array.isArray(b) ? b.map((e => v ? e.pnl : e.roi)) : [];
                    return 0 !== g.length && (0, u.o)() ? (0, n.jsx)(s.Suspense, {
                        fallback: (0, n.jsx)(d, {}),
                        children: (0, n.jsx)(l, {
                            lineList: g,
                            width: r,
                            height: i
                        })
                    }) : (0, n.jsx)(d, {})
                }
        },
        zjPc: (e, t, r) => {
            r.d(t, {
                C: () => i
            });
            var n = r("mXdx"),
                s = (r("DTvD"), r("1lvF")),
                a = r("/d8Z");
            const i = ({
                roi: e,
                enabledProfitColor: t = !0
            }) => {
                const r = t ? (0, a.A)(e, "text-PrimaryText", true) : "text-PrimaryText";
                return (0, n.jsxs)(s.Ay, {
                    className: r,
                    children: [e.toFixed(2), "%"]
                })
            }
        },
        jlmu: (e, t, r) => {
            r.d(t, {
                D: () => o
            });
            var n = r("qYeW"),
                s = r("vz6D"),
                a = r("euV7"),
                i = r("0Um/"),
                o = function(e) {
                    var t = (0, n.e)(e),
                        r = (0, s.O)(e),
                        o = (0, a.F)({
                            symbol: e
                        }),
                        c = (0, i.i)(e, !0);
                    return t ? c : "BTC" === r ? o : c
                }
        },
        "16ah": (e, t, r) => {
            r.d(t, {
                e: () => b
            });
            var n = r("mXdx"),
                s = r("DTvD"),
                a = r("aCvq"),
                i = r("trXm"),
                o = r("NzjW"),
                c = r("ENMH"),
                u = r("X6af"),
                l = r("AkRh"),
                d = r("1lvF"),
                m = r("unte"),
                x = r("4frZ"),
                p = r("xqbL"),
                h = r.n(p),
                y = function() {
                    return (0, n.jsx)(d.Ay, {
                        className: "w-[1px] bg-Line mx-[4px] inline-block my-[5px]"
                    })
                },
                v = function(e) {
                    var t = e.symbol,
                        r = e.trailingText,
                        s = e.copyCount,
                        c = e.isCardMode,
                        u = e.symbolExtraNode,
                        l = (0, i.Y_)().t,
                        m = (0, a.a)(t);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(d.Ay, {
                            className: "flex items-center mb-[2px]",
                            children: [(0, n.jsx)(d.Ay, {
                                className: "truncate typography-headline5 text-PrimaryText",
                                children: m
                            }), u]
                        }), (0, n.jsxs)(d.Ay, {
                            className: "flex flex-wrap w-full",
                            children: [!c && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: l("strategy-spotGrid", {
                                        defaultValue: "Spot Grid"
                                    })
                                }), (0, n.jsx)(y, {})]
                            }), r && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: r
                                }), (0, n.jsx)(y, {})]
                            }), (0, x.kf)(s) && (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(d.Ay, {
                                    className: "inline-flex",
                                    children: (0, n.jsx)(o.B, {
                                        copyCount: s
                                    })
                                })
                            })]
                        })]
                    })
                },
                f = function(e) {
                    var t = e.symbol,
                        r = e.direction,
                        a = e.trailingText,
                        l = e.leverage,
                        p = e.copyCount,
                        v = e.isCardMode,
                        f = e.symbolExtraNode,
                        b = (0, c.Z)(t),
                        g = b.symbolDisplay,
                        T = b.shortContractTypeI18n,
                        j = (0, i.Y_)().t,
                        C = (0, s.useMemo)((function() {
                            return r ? (0, u.DG)(r) : null
                        }), [r]),
                        w = C ? (0, n.jsxs)("span", {
                            className: h()({
                                "text-Buy": "LONG" === C,
                                "text-Sell": "SHORT" === C
                            }),
                            children: [j(C, {
                                defaultValue: C
                            }), l && " ".concat(l, "x")]
                        }) : null;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(d.Ay, {
                            className: "flex items-center mb-[2px]",
                            children: [(0, n.jsx)(d.Ay, {
                                className: "truncate typography-headline5 text-PrimaryText",
                                children: g
                            }), !v && T && (0, n.jsx)(m.A, {
                                className: "ml-[8px]",
                                size: "small",
                                variant: "info",
                                label: T
                            }), f]
                        }), (0, n.jsxs)(d.Ay, {
                            className: "flex flex-wrap w-full",
                            children: [!v && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: j("strategy-futGrid", {
                                        defaultValue: "Futures Grid"
                                    })
                                }), (0, n.jsx)(y, {})]
                            }), v && T && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: T
                                }), (0, n.jsx)(y, {})]
                            }), w && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: w
                                }), " ", (0, n.jsx)(y, {})]
                            }), a && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("span", {
                                    children: a
                                }), " ", (0, n.jsx)(y, {})]
                            }), (0, x.kf)(p) && (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(d.Ay, {
                                    className: "inline-flex",
                                    children: (0, n.jsx)(o.B, {
                                        copyCount: p
                                    })
                                })
                            })]
                        })]
                    })
                },
                b = function(e) {
                    var t = e.strategyData,
                        r = e.symbolExtraNode,
                        s = e.isCardMode,
                        a = void 0 === s || s,
                        i = t.strategyType,
                        o = t.symbol,
                        c = t.direction,
                        m = t.copyCount,
                        x = t.strategyParams,
                        p = x.leverage,
                        h = x.trailingUp,
                        y = x.trailingDown,
                        b = (0, u.HL)(i),
                        g = (0, l.j)(h, y);
                    return (0, n.jsx)(d.Ay, {
                        className: "t-caption1 text-TertiaryText",
                        children: "futuresGrid" === b ? (0, n.jsx)(f, {
                            symbol: o,
                            direction: c,
                            leverage: Number(p),
                            trailingText: g,
                            copyCount: m,
                            isCardMode: a,
                            symbolExtraNode: r
                        }) : (0, n.jsx)(v, {
                            symbol: o,
                            trailingText: g,
                            copyCount: m,
                            isCardMode: a,
                            symbolExtraNode: r
                        })
                    })
                }
        }
    }
]);