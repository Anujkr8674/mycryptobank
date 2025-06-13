"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8073], {
        ofJc: (e, t, r) => {
            r.d(t, {
                $5: () => u,
                EI: () => l,
                bT: () => s,
                zL: () => o
            });
            var n = r("S+0I"),
                i = r("66mo"),
                a = r.n(i),
                c = r("VA12"),
                o = (function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/streamer/order/get-open-orders", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/mbx/v2/private/mbxgateway/order/delall", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/mbx/v1/private/mbxgateway/order/del", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/streamer/order/get-trade-orders", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/streamer/trade/get-user-trade-detail", t);
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
                }()),
                s = (function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/capital/v1/private/streamer/trade/get-user-trades", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/mbx/v1/private/streamer/order/order/get-list-orders", t);
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
                }()),
                u = function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, c.post)("/bapi/capital/v1/private/streamer/order/get-trade-orders", t);
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        data: [],
                                        total: 0,
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
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, n._)(a().mark((function e(t) {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, c.post)("/bapi/capital/v2/private/streamer/order/fetch-tran-orders", t));
                                case 1:
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
        P4Wp: (e, t, r) => {
            r.d(t, {
                P: () => i
            });
            var n = r("mguP"),
                i = function(e) {
                    var t = (0, n._)(e, 8);
                    return {
                        time: +t[0],
                        open: +t[1],
                        high: +t[2],
                        low: +t[3],
                        close: +t[4],
                        volume: +t[5],
                        quantity: +t[7]
                    }
                }
        },
        xFxZ: (e, t, r) => {
            r.d(t, {
                g: () => n
            });
            var n = function(e) {
                if ("8" === e) return "08:00"
            }
        },
        mFKG: (e, t, r) => {
            r.d(t, {
                J: () => o
            });
            var n = r("DTvD"),
                i = r("bQ69"),
                a = r("wtFP"),
                c = (0, i.D$)(),
                o = function(e, t) {
                    var r = (0, n.useRef)();
                    (0, n.useEffect)((function() {
                        return t || !e ? function() {
                            return null
                        } : c.getStreamTrade(e).subscribe((function(t) {
                            var n, i = t[t.length - 1];
                            r.current && i.eventTime - (null === (n = r.current) || void 0 === n ? void 0 : n.eventTime) >= 8e3 && (0, a.u4)("kline_ws_timeout", {
                                business: "spot",
                                wsType: "aggTrade",
                                symbol: e,
                                neighbor: JSON.stringify([r.current, i]),
                                isOnline: window.navigator.onLine
                            }), r.current = i
                        }))
                    }), [e, t])
                }
        },
        WrUx: (e, t, r) => {
            r.d(t, {
                K: () => x,
                L: () => T
            });
            var n, i = r("mguP"),
                a = r("DTvD"),
                c = r("bmS5"),
                o = r.n(c),
                s = r("cvvB"),
                u = r("tM9B"),
                l = r("Qhol"),
                d = r("S+0I"),
                p = r("jbFV"),
                m = r.n(p),
                f = r("hAzz"),
                v = (r("VA12"), r("ofJc")),
                y = function() {
                    var e = (0, d._)(m().mark((function e(t) {
                        var r;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, v.EI)(t);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", []);
                                case 10:
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
                }(),
                b = function(e) {
                    var t = e.accountType,
                        r = e.symbol;
                    return y({
                        accountType: t,
                        startTime: Date.now() - 15552e6,
                        endTime: Date.now(),
                        symbol: r
                    })
                },
                g = (0, r("bQ69").D$)();
            ! function(e) {
                e.Unknown = "-1", e.Canceled = "0", e.PartiallyFilled = "1", e.Filled = "2", e.Expired = "4"
            }(n || (n = {}));
            var T = function(e) {
                    var t = s.t1.OrderHistoryStore.createStore(e),
                        r = (0, i._)(t(s.t1.OrderHistoryStore.getOrderHistory), 4),
                        c = r[2],
                        o = r[3],
                        u = (0, a.useRef)(),
                        l = (0, a.useCallback)(function() {
                            var e = (0, d._)(m().mark((function e(t) {
                                var r, i, a, s, l;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = t.symbol, i = t.tradeType, a = t.isReady, o(), null === (s = u.current) || void 0 === s || s.call(u), a) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            return e.next = 8, b({
                                                accountType: (0, f.U8)(i),
                                                symbol: r
                                            });
                                        case 8:
                                            l = e.sent, c(l.map((function(e) {
                                                return {
                                                    id: e.orderId.toString(),
                                                    avgPrice: +e.executedPrice,
                                                    executedQty: +e.executedQty,
                                                    side: e.side,
                                                    time: e.updateTime,
                                                    status: e.status,
                                                    statusCode: e.statusCode
                                                }
                                            }))), u.current = g.getUserOrderStream(i).subscribe((function(e) {
                                                e.symbol === r && c([{
                                                    id: e.orderId.toString(),
                                                    avgPrice: e.lastPrice || e.price,
                                                    executedQty: e.cumulativeFilledQuantity,
                                                    side: e.side,
                                                    time: e.transactionTime,
                                                    status: e.orderStatus,
                                                    statusCode: n.Unknown
                                                }])
                                            }));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [c, o]);
                    return l
                },
                x = function(e) {
                    var t = e.symbol,
                        r = e.namespace,
                        c = s.t1.OrderHistoryStore.createStore(r),
                        d = (0, i._)(c(s.t1.OrderHistoryStore.getOrderHistory), 1)[0],
                        p = (0, l.CUO)().getI18n,
                        m = (0, l.hFK)()[t] || {},
                        f = m.tickSize,
                        v = void 0 === f ? "0" : f,
                        y = m.minQty,
                        b = void 0 === y ? "2" : y,
                        g = (0, a.useMemo)((function() {
                            return p("openOrder-sideBuyBOTH", {
                                defaultValue: "Buy"
                            }) || ""
                        }), [p]),
                        T = (0, a.useMemo)((function() {
                            return p("openOrder-sideSellBOTH", {
                                defaultValue: "Sell"
                            }) || ""
                        }), [p]),
                        x = (0, a.useMemo)((function() {
                            return Math.abs(Math.log10(+v))
                        }), [v]),
                        I = (0, a.useMemo)((function() {
                            return Math.abs(Math.log10(+b))
                        }), [b]),
                        _ = (0, a.useCallback)((function(e) {
                            var t = e.executedQty;
                            return (0, u.ZV)(t, I)
                        }), [I]);
                    return (0, a.useMemo)((function() {
                        return d.filter((function(e) {
                            var t = e.status,
                                r = e.statusCode,
                                i = void 0 === r ? n.Unknown : r,
                                a = e.executedQty;
                            return "FILLED" === t.toUpperCase() || i === n.Filled || "PARTIAL FILL" === t.toUpperCase() || i === n.PartiallyFilled || "PARTIALLY_FILLED" === t.toUpperCase() || ("EXPIRED" === t.toUpperCase() || i === n.Expired) && a > 0 || ("CANCELED" === t.toUpperCase() || i === n.Canceled) && a > 0
                        })).map((function(e) {
                            var t = e.id,
                                r = e.avgPrice,
                                n = e.side,
                                i = e.time,
                                a = e.executedQty,
                                c = "BUY" === n ? g : T,
                                s = _({
                                    executedQty: a
                                }),
                                u = o()(x, 0, 100),
                                l = "".concat(c, " ").concat(s, " @ ").concat(r.toFixed(u));
                            return {
                                id: t,
                                price: r,
                                time: i,
                                isBuy: "BUY" === n,
                                tooltip: l
                            }
                        }))
                    }), [d, g, T, _, x])
                }
        },
        "kI+t": (e, t, r) => {
            r.d(t, {
                z: () => u
            });
            var n = r("DTvD"),
                i = r("cvvB"),
                a = r("bQ69"),
                c = r("wtFP"),
                o = r("i6bu"),
                s = (0, a.D$)(),
                u = function(e) {
                    var t = e.symbol,
                        r = e.interval,
                        a = e.timeZone,
                        u = e.enabled,
                        l = void 0 === u || u,
                        d = (0, n.useRef)();
                    (0, n.useEffect)((function() {
                        if (!l || !t || !r) return function() {
                            return null
                        };
                        d.current = void 0;
                        var e = i.t1.utils.intervalToMillseconds(r);
                        return s.getStreamKline(t, r, {
                            timeZone: (0, o.q)(a)
                        }).subscribe((function(n) {
                            var i;
                            d.current && n.time > (null === (i = d.current) || void 0 === i ? void 0 : i.time) + e && (0, c.u4)("kline_ws_timeout", {
                                business: "spot",
                                wsType: "kline",
                                symbol: t,
                                interval: r,
                                neighbor: JSON.stringify([d.current, n]),
                                isOnline: window.navigator.onLine
                            }), d.current = n
                        }))
                    }), [t, r, a, l])
                }
        },
        hYIL: (e, t, r) => {
            r.d(t, {
                v: () => w
            });
            var n = r("S+0I"),
                i = r("hrAD"),
                a = r("qoEP"),
                c = r("mguP"),
                o = r("jbFV"),
                s = r.n(o),
                u = r("DTvD"),
                l = r("tM9B"),
                d = r("C7vZ"),
                p = r("IUcl"),
                m = r("n7Sa"),
                f = r("bQ69"),
                v = r("hAzz"),
                y = r("J+BU"),
                b = r("rit8"),
                g = r("N3Ul"),
                T = r("cmpa"),
                x = r("Qhol"),
                I = r("eWL+"),
                _ = r("qoEh"),
                h = r("cDUC"),
                O = r("b2AH"),
                S = r("idG9"),
                k = [y.W4.LIMIT, y.W4.STOP_LOSS_LIMIT, y.W4.LIMIT_MAKER, y.W4.TAKE_PROFIT_LIMIT2, y.W4.TAKE_PROFIT_MARKET, y.W4.STOP_LOSS_MARKET],
                w = function(e) {
                    var t = e.symbol,
                        r = (0, u.useState)(1),
                        o = r[0],
                        w = r[1],
                        A = (0, u.useCallback)((function() {
                            return w((function(e) {
                                return e + 1
                            }))
                        }), [w]),
                        P = (0, O.CU)().getI18n,
                        C = (0, O.ok)().getI18n,
                        Q = (0, x.BkF)().status,
                        L = (0, I.hF)(),
                        M = (0, c._)((0, _.Gr)(), 1)[0],
                        F = (0, b.IT)(M).preOrders,
                        D = function(e) {
                            var t = (0, d.Q)(),
                                r = (0, p.Y)(),
                                n = (0, m.Z)();
                            switch (e) {
                                case f.Gr.CROSS:
                                    return r.delOpenOrders;
                                case f.Gr.ISOLATED:
                                    return n.delOpenOrders;
                                case f.Gr.SPOT:
                                default:
                                    return t.delOpenOrders
                            }
                        }(M),
                        E = (0, u.useContext)(S.A),
                        B = E.setOrder,
                        j = E.setShowOrderModification,
                        R = E.modalRef,
                        q = (0, u.useCallback)((function() {
                            return (0, h.Kv)(M, {
                                source: "chart"
                            })
                        }), [M]),
                        W = (0, u.useCallback)((function() {
                            return (0, h.Nj)({
                                source: "chart"
                            })
                        }), []),
                        N = (0, c._)((0, T.E)({
                            onSuccess: W,
                            symbol: t
                        }), 1)[0],
                        U = (0, u.useCallback)((function(e) {
                            return function(t) {
                                var r = t.entryType;
                                B({
                                    orderId: e.orderId.toString(),
                                    side: e.side,
                                    baseAsset: e.baseAsset,
                                    quoteAsset: e.quoteAsset,
                                    time: e.insertTime,
                                    type: e.type,
                                    price: e.price.toString(),
                                    origQty: e.origQty.toString(),
                                    executedQty: e.executedQty.toString(),
                                    symbol: e.symbol,
                                    stopPrice: e.stopPrice,
                                    trailingDelta: e.trailingDelta || "",
                                    entryType: r,
                                    icebergQty: e.icebergQty,
                                    contingencyType: e.contingencyType
                                }), j(!0)
                            }
                        }), [B, j]),
                        K = (0, u.useCallback)((function(e) {
                            return function(t) {
                                var r = {
                                    symbol: e.symbol,
                                    orderId: e.orderId,
                                    side: e.side,
                                    type: e.type,
                                    timeInForce: e.timeInForce,
                                    price: t.newPrice,
                                    quantity: e.origQty,
                                    origQty: +e.origQty - +e.executedQty,
                                    cancelOrderId: e.orderId,
                                    cancelOrigClientOrderId: e.clientOrderId,
                                    newClientOrderId: e.clientOrderId,
                                    cancelNewClientOrderId: e.clientOrderId,
                                    initialPrice: e.price,
                                    baseAsset: e.baseAsset,
                                    quoteAsset: e.quoteAsset,
                                    icebergQty: e.icebergQty,
                                    contingencyType: e.contingencyType
                                };
                                (0, g.L)({
                                    modalRef: R,
                                    getI18n: C,
                                    onCancel: function() {
                                        A()
                                    },
                                    submitData: (0, a._)((0, i._)({}, r), {
                                        initOrigQty: e.origQty
                                    }),
                                    isNoReminder: !Q
                                }, (function() {
                                    N(r, {
                                        price: e.price,
                                        origQty: e.origQty
                                    }), A()
                                }))
                            }
                        }), [R, C, A, N, Q]),
                        V = (0, u.useCallback)(function() {
                            var e = (0, n._)(s().mark((function e(t) {
                                var r, n, i;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = F.filter(t), n = r.map((function(e) {
                                                    return e.symbol
                                                })), i = r.map((function(e) {
                                                    return e.orderId.toString()
                                                })), 0 !== n.length && 0 !== i.length) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.next = 7, D({
                                                symbols: n,
                                                orderIds: i
                                            });
                                        case 7:
                                            q();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [F, D, q]),
                        Y = (0, u.useMemo)((function() {
                            return function(e) {
                                return function(t) {
                                    var r = t.pricePrecision,
                                        n = t.price,
                                        i = t.stopPrice,
                                        a = t.isBuy,
                                        c = t.type,
                                        o = t.trailingDelta,
                                        s = e("openOrder-trigger", {
                                            defaultValue: "Trigger"
                                        }),
                                        u = e("openOrder-type-LIMIT", {
                                            defaultValue: "Limit"
                                        }),
                                        d = e("openOrder-type-MARKET"),
                                        p = e("openOrder-type-LIMIT_MAKER", {
                                            defaultValue: "Limit Maker"
                                        }),
                                        m = e("openOrder-type-STOP_LOSS_LIMIT", {
                                            defaultValue: "Stop Loss Limit"
                                        }),
                                        f = e("openOrder-type-TAKE_PROFIT_LIMIT", {
                                            defaultValue: "Take Profit Limit"
                                        }),
                                        v = e("openOrder-type-TRAILING_STOP", {
                                            defaultValue: "Trailing Stop"
                                        }),
                                        b = e("openOrder-type-STOP_LOSS", {
                                            defaultValue: "Stop Loss"
                                        }),
                                        g = e("openOrder-type-TAKE_PROFIT_MARKET", {
                                            defaultValue: "Take Profit"
                                        }),
                                        T = (0, l.mk)(n, r),
                                        x = (0, l.mk)(i, r);
                                    switch (c) {
                                        case y.W4.LIMIT_MAKER:
                                            return "".concat(p, " ").concat(i > 0 ? x : T);
                                        case y.W4.STOP_LOSS_LIMIT:
                                            return "".concat(o ? v : m, " ").concat(T, " ").concat(s, " ").concat(a ? ">=" : "<=", " ").concat(x);
                                        case y.W4.TAKE_PROFIT_LIMIT2:
                                            return "".concat(o ? v : f, " ").concat(T, " ").concat(s, " ").concat(a ? "<=" : ">=", " ").concat(x);
                                        case y.W4.STOP_LOSS_MARKET:
                                            var I = o ? "".concat(d, " ") : +T ? "".concat(T, " ") : "";
                                            return "".concat(o ? v : b, " ").concat(I).concat(s, " ").concat(a ? ">=" : "<=", " ").concat(x);
                                        case y.W4.TAKE_PROFIT_MARKET:
                                            var _ = o ? "".concat(d, " ") : +T ? "".concat(T, " ") : "";
                                            return "".concat(o ? v : g, " ").concat(_).concat(s, " ").concat(a ? "<=" : ">=", " ").concat(x);
                                        case y.W4.LIMIT:
                                        default:
                                            return "".concat(u, " ").concat(T)
                                    }
                                }
                            }(P)
                        }), [P]),
                        z = (0, u.useMemo)((function() {
                            return F.filter((function(e) {
                                var r = e.symbol,
                                    n = e.type;
                                return r === t && k.includes(n)
                            })).filter((function(e) {
                                var t = e.trailingDelta,
                                    r = e.stopPrice;
                                return !t || Number(r) > 0
                            }))
                        }), [F, t]),
                        G = (0, u.useMemo)((function() {
                            return z.map((function(e) {
                                var t = L[e.symbol] || {},
                                    r = t.tickSize,
                                    n = t.baseAsset,
                                    c = t.quoteAsset,
                                    o = (0, v.XV)(r),
                                    s = +e.origQty - +e.executedQty,
                                    u = +e.stopPrice > 0 ? e.stopPrice : e.price,
                                    l = "BUY" === e.side,
                                    d = Y({
                                        pricePrecision: o,
                                        price: +e.price,
                                        stopPrice: +e.stopPrice,
                                        isBuy: l,
                                        type: e.type,
                                        trailingDelta: e.trailingDelta
                                    }),
                                    p = (+u).toFixed(o);
                                return {
                                    order: e,
                                    quantity: s,
                                    price: p,
                                    isBuy: l,
                                    text: d,
                                    pricePrecision: o,
                                    cancel: function() {
                                        return V((function(t) {
                                            var r = t.orderId;
                                            return e.orderId === r
                                        }))
                                    },
                                    showOrderModificationModal: U((0, a._)((0, i._)({}, e), {
                                        baseAsset: n,
                                        quoteAsset: c,
                                        price: p
                                    })),
                                    showOrderConfirmation: K((0, a._)((0, i._)({}, e), {
                                        baseAsset: n,
                                        quoteAsset: c
                                    }))
                                }
                            }))
                        }), [z, L, Y, V, U, K, o]);
                    return G
                }
        },
        i6bu: (e, t, r) => {
            r.d(t, {
                B: () => m,
                q: () => d
            });
            var n = r("hrAD"),
                i = r("qoEP"),
                a = r("lCim"),
                c = r.n(a),
                o = r("cvvB"),
                s = (0, r("bQ69").D$)(),
                u = 2592e5,
                l = function(e) {
                    var t = e.price,
                        r = e.time,
                        a = e.symbol,
                        c = e.eventTime,
                        o = {
                            time: r,
                            open: t,
                            high: t,
                            low: t,
                            close: t,
                            volume: 0,
                            quantity: 0
                        };
                    return {
                        candlestick: o,
                        rawCandlestick: (0, i._)((0, n._)({}, o), {
                            symbol: a,
                            eventTime: c
                        })
                    }
                },
                d = function(e) {
                    if ("8" === e) return "+08:00"
                },
                p = function(e) {
                    return "8" === e ? 288e5 : 0
                },
                m = function(e) {
                    var t, r = e.symbol,
                        a = e.interval,
                        m = e.useMiniTicker,
                        f = e.callback,
                        v = e.timeZone,
                        y = e.adjustTime,
                        b = void 0 === y ? c() : y,
                        g = o.t1.utils.intervalToMillseconds(a),
                        T = s.getStreamKline(r, a, {
                            timeZone: d(v)
                        }).subscribe((function(e) {
                            t = (0, i._)((0, n._)({}, e), {
                                time: b(e.time)
                            }), f(t, t)
                        })),
                        x = m ? s.getStreamTickers().subscribe((function(e) {
                            var a = e[r];
                            if (a) {
                                var c = b(a.eventTime - a.eventTime % g - p(v)),
                                    o = +a.lastPrice,
                                    s = l({
                                        price: o,
                                        time: c,
                                        symbol: r,
                                        eventTime: a.eventTime
                                    });
                                t && (c > t.time && g < u ? f(s.candlestick, s.rawCandlestick) : f((0, i._)((0, n._)({}, t), {
                                    close: o
                                }), t))
                            }
                        })) : s.getStreamTrade(r).subscribe((function(e) {
                            var a = e[e.length - 1],
                                c = b(a.tradeTime - a.tradeTime % g - p(v)),
                                o = +a.price,
                                s = l({
                                    price: o,
                                    time: c,
                                    symbol: r,
                                    eventTime: a.eventTime
                                });
                            t && (c > t.time && g < u ? f(s.candlestick, s.rawCandlestick) : f((0, i._)((0, n._)({}, t), {
                                close: o
                            }), t))
                        }));
                    return function() {
                        T(), x()
                    }
                }
        },
        N3Ul: (e, t, r) => {
            r.d(t, {
                L: () => v
            });
            var n = r("mXdx"),
                i = r("DTvD"),
                a = r.n(i),
                c = r("2IQ4"),
                o = r("GIr8"),
                s = r("oY5g"),
                u = r("Vhyo"),
                l = r("KzWS"),
                d = r("0vT3"),
                p = r("Qhol"),
                m = r("I25Y"),
                f = function(e) {
                    var t = e.getI18n,
                        r = e.submitData,
                        a = (0, p.BkF)().changeStatus,
                        f = r.side,
                        v = r.origQty,
                        y = r.quoteAsset,
                        b = r.baseAsset,
                        g = r.price,
                        T = r.initPrice,
                        x = r.initOrigQty,
                        I = r.contingencyType,
                        _ = "BUY" === f;
                    return (0, i.useEffect)((function() {
                        (0, d.pr)("confirm")
                    }), []), (0, n.jsxs)("div", {
                        className: "mb-[16px]",
                        children: [(0, n.jsxs)(c.A, {
                            children: [(0, n.jsx)(o.A, {
                                sx: {
                                    color: _ ? "t.buy" : "t.sell",
                                    justifyContent: "flex-end",
                                    marginTop: "16px",
                                    marginBottom: "16px"
                                },
                                children: t("trd-openOrde-side".concat(_ ? "Buy" : "Sell"))
                            }), (0, n.jsxs)(o.A, {
                                sx: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    fontSize: "14px"
                                },
                                children: [(0, n.jsx)(c.A, {
                                    color: "t.third",
                                    children: t("trd-openOrder-price".concat(Number(g) !== Number(T) ? "-adjusted" : ""))
                                }), (0, n.jsx)(c.A, {
                                    color: "t.primary",
                                    children: "".concat(g, " ").concat(y)
                                })]
                            }), (0, n.jsxs)(o.A, {
                                sx: {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    fontSize: "14px",
                                    marginTop: "8px"
                                },
                                children: [(0, n.jsx)(c.A, {
                                    color: "t.third",
                                    children: t("trd-openOrder-amount".concat(Number(x) === Number(v) ? "" : "-adjusted"))
                                }), (0, n.jsx)(c.A, {
                                    color: "t.primary",
                                    children: "".concat(v, " ").concat(b)
                                })]
                            })]
                        }), "OTO" === I && (0, n.jsxs)("div", {
                            className: "bg-[--color-BadgeBg] flex rounded-xl ",
                            style: {
                                padding: "12px",
                                marginTop: "16px"
                            },
                            children: [(0, n.jsx)(l.A, {
                                className: "w-5 h-5 text-[--color-PrimaryText]",
                                color: "PrimaryText",
                                name: "CircledWarningF"
                            }), (0, n.jsx)("div", {
                                className: "typography-body5 text-[--color-PrimaryText] flex-1",
                                children: t("trd-orderconfirm-tpsl-tips")
                            })]
                        }), (0, n.jsx)(m.A, {
                            base: b,
                            quote: y
                        }), (0, n.jsxs)("label", {
                            style: {
                                display: "flex",
                                marginTop: "12px",
                                fontSize: "14px"
                            },
                            htmlFor: "openorder-checked-reminders",
                            "data-sensors-click": !0,
                            children: [(0, n.jsx)(s.A, {
                                id: "openorder-checked-reminders",
                                size: 20,
                                onChange: function(e) {
                                    var t;
                                    t = e.target.checked, a(!t)
                                }
                            }), (0, n.jsx)(u.A, {
                                children: t("trd-adjustment-confirmation-checkbox")
                            })]
                        })]
                    })
                },
                v = function(e, t) {
                    var r = e.modalRef,
                        n = e.getI18n,
                        i = e.submitData,
                        c = e.onCancel,
                        o = e.isNoReminder;
                    if (void 0 === o || o) t();
                    else {
                        var s = a().createElement(f, {
                            getI18n: n,
                            submitData: i
                        });
                        r.current.create({
                            title: n("trd-orderForm-orderconfirm"),
                            content: s,
                            onOk: function() {
                                (0, d.qL)({
                                    title: "adjust_confirm_popup",
                                    element_id: "confirm"
                                }), t()
                            },
                            onCancel: function() {
                                (0, d.qL)({
                                    title: "adjust_confirm_popup",
                                    element_id: "cancel"
                                }), null === c || void 0 === c || c()
                            },
                            okText: n("trd-dialog-confirm"),
                            cancelText: n("trd-dialog-cancel")
                        })
                    }
                }
        },
        cmpa: (e, t, r) => {
            r.d(t, {
                E: () => v
            });
            var n = r("S+0I"),
                i = r("jbFV"),
                a = r.n(i),
                c = r("DTvD"),
                o = r("tM9B"),
                s = r("Qhol"),
                u = r("rOIZ"),
                l = r("Bz5g"),
                d = r("wcOk"),
                p = r("8iyE"),
                m = r("bQ69"),
                f = r("MIKm"),
                v = function(e) {
                    var t = e.onSuccess,
                        r = e.symbol,
                        i = (0, s.ok2)().getI18n,
                        v = (0, s._ar)().setMessageInfo,
                        y = function(e) {
                            var t = (0, s.hFK)(),
                                r = t[e] || {},
                                n = r.baseAsset,
                                i = r.quoteAsset,
                                a = (0, d.Wr)(n),
                                l = a.maxAvaliable,
                                p = a.balanceWallet,
                                m = (0, d.Wr)(i),
                                f = m.maxAvaliable,
                                v = m.balanceWallet;
                            return {
                                getMostAmount: (0, c.useCallback)((function(e) {
                                    var r = e.symbol,
                                        n = e.side,
                                        i = e.price,
                                        a = e.origQty,
                                        c = (t[r] || {}).minQty,
                                        s = (0, u.XV)(c);
                                    if ("BUY" === n) {
                                        var d = (0, o.lw)(i, a).toNumber(),
                                            p = (0, o.tY)(d, f || 0).toNumber();
                                        return (0, o.k3)(p, i).toFixed(s)
                                    }
                                    return (0, o.tY)(a, l || 0).toFixed(s)
                                }), [t, l, f]),
                                baseBalanceWallet: p,
                                quoteBalanceWallet: v
                            }
                        }(r),
                        b = y.getMostAmount,
                        g = y.baseBalanceWallet,
                        T = y.quoteBalanceWallet,
                        x = (0, f.GO)((function(e) {
                            return e.kycStatus
                        })),
                        I = (0, f.GO)((function(e) {
                            return e.setShowDialog
                        })),
                        _ = (0, c.useCallback)(function() {
                            var e = (0, n._)(a().mark((function e(r, n) {
                                var c, s, u, d, f, y, _;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (c = b({
                                                    symbol: r.symbol,
                                                    side: r.side,
                                                    price: r.price.toString(),
                                                    origQty: r.origQty.toString()
                                                }), "PASS" === x) {
                                                e.next = 4;
                                                break
                                            }
                                            return I(!0), e.abrupt("return");
                                        case 4:
                                            if (!(+r.origQty > +c)) {
                                                e.next = 7;
                                                break
                                            }
                                            return v(i("trd-openOrder-amount-lack-msg")), e.abrupt("return");
                                        case 7:
                                            return s = r.side === m.Vl.BUY ? r.quoteAsset : r.baseAsset, u = r.side === m.Vl.BUY ? T : g, d = r.side === m.Vl.BUY ? (0, o.lw)(n.price, n.origQty).toNumber() : n.origQty, f = {
                                                tradeType: m.Gr.SPOT,
                                                quantity: r.origQty,
                                                side: r.side,
                                                price: r.price,
                                                orderType: r.type,
                                                asset: s,
                                                balanceWallet: u,
                                                total: "",
                                                marketPrice: "",
                                                stopLimitPrice: ""
                                            }, (0, p.l)(f), y = (0, p.S)(f, d), _ = {
                                                symbol: r.symbol,
                                                side: r.side,
                                                type: r.type,
                                                timeInForce: r.timeInForce,
                                                price: r.price,
                                                quantity: r.origQty,
                                                cancelOrderId: r.orderId,
                                                cancelOrigClientOrderId: r.clientOrderId,
                                                icebergQty: (null === r || void 0 === r ? void 0 : r.icebergQty) || null,
                                                newClientOrderId: r.clientOrderId,
                                                cancelNewClientOrderId: r.clientOrderId
                                            }, y && (_.assetCollectArg = y), e.next = 17, (0, l.b)(_);
                                        case 17:
                                            e.sent.success && (v({
                                                header: i("trd-orderForm-re-ordertitle"),
                                                message: "",
                                                variant: "success"
                                            }), null === t || void 0 === t || t());
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [i, b, t, g, T, x, I]);
                    return [_, b]
                }
        },
        "0vT3": (e, t, r) => {
            r.d(t, {
                oD: () => i,
                pr: () => a,
                qL: () => c
            });
            var n = r("wtFP"),
                i = function(e) {
                    (0, n.u4)("ModuleView", {
                        title: "open_order_list",
                        eventName: "spot_adjust_order",
                        $element_id: e,
                        df_source: "spot"
                    })
                },
                a = function(e) {
                    (0, n.u4)("PopupView", {
                        title: "adjust_".concat(e, "_popup"),
                        eventName: "spot_adjust_order",
                        df_source: "spot"
                    })
                },
                c = function(e) {
                    var t = e.title,
                        r = e.element_id;
                    (0, n.u4)("$WebClick", {
                        title: t,
                        $element_id: r,
                        eventName: "spot_adjust_order",
                        df_source: "spot"
                    })
                }
        }
    }
]);