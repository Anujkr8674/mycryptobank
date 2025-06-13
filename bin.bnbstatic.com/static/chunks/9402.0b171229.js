(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9402], {
        GqbV: (e, t, r) => {
            "use strict";
            r.d(t, {
                BW: () => m,
                CP: () => d,
                DJ: () => p,
                Gx: () => l,
                Hp: () => v,
                S3: () => c,
                Zo: () => f,
                m2: () => u
            });
            var n = r("S+0I"),
                a = r("66mo"),
                s = r.n(a),
                o = r("VA12"),
                i = r("XqCI"),
                u = (function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/asset/v1/private/asset-service/asset/btc-valuation", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r, n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/asset/v2/private/asset-service/asset/get-user-asset", t);
                                case 2:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t, r, n, a = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.next = 3, (0, o.post)("/bapi/asset/v3/private/asset-service/asset/get-user-asset", t);
                                case 3:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                c = (function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/fiat/v1/private/fiatpayment/deposit/kyclimit", t);
                                case 2:
                                    if ("000000" !== (r = e.sent).code) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", r.data);
                                case 5:
                                    return e.abrupt("return", {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/c2c/v1/private/c2c/asset/get-user-assets-to-btc", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r);
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
                                    return e.next = 2, (0, o.post)("/bapi/asset/v1/private/asset-service/asset/checkUserAsset");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/leverage/token/redeem", t);
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
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                l = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/leverage/token/purchase", t);
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
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r, n, a = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] && a[1], e.next = 3, (0, o.post)("/bapi/asset/v1/private/asset-service/wallet/transfer", t, {
                                        enableErrorMsgIntercept: r
                                    });
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
                d = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r, n, a = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] && a[1], e.next = 3, (0, o.post)("/bapi/margin/v1/private/margin/portfolio/transfer-futures", t, {
                                        enableErrorMsgIntercept: r
                                    });
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
                f = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/asset/v1/private/asset-service/wallet/get-all-config");
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
                }(),
                v = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/asset/v1/public/asset-service/wallet/get-support-asset");
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
                }(),
                m = (function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r, n, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/asset/v1/private/asset-service/asset/get-transaction-history", t);
                                case 2:
                                    return r = e.sent, n = r.data, a = r.total, e.abrupt("return", {
                                        rows: n,
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
                }(), function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/asset/v3/private/asset-service/asset/get-ledger-asset", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r || []);
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
                                    return e.next = 2, (0, o.get)("/bapi/asset/v1/private/asset-service/product/blocked");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.get)("/bapi/asset/v2/private/asset-service/wallet/balance?".concat((0, i.E2)(t)));
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), r = {
                                        success: !1,
                                        data: []
                                    };
                                case 10:
                                    return e.abrupt("return", Array.isArray(null === r || void 0 === r ? void 0 : r.data) ? null === r || void 0 === r ? void 0 : r.data : []);
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
                }())
        },
        chLO: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => E
            });
            var n = r("S+0I"),
                a = r("hrAD"),
                s = r("qoEP"),
                o = r("mguP"),
                i = r("d12p"),
                u = r("66mo"),
                c = r.n(u),
                l = r("DTvD"),
                p = r("hTvQ"),
                d = r("GqbV"),
                f = r("biWu"),
                v = r("Pir2"),
                m = r("XqCI"),
                h = r("VA12"),
                g = function() {
                    var e = (0, n._)(c().mark((function e(t) {
                        var r, n, s, o, i, u, l = arguments;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = l.length > 1 && void 0 !== l[1] ? l[1] : 10, n = function(e, t) {
                                        return Math.min(Math.floor(e / 1e3), t)
                                    }, s = Date.now(), o = (0, f.UE)(), i = (0, f.u0)(), u = function(e) {
                                        var a = e ? 2 * r : r;
                                        return (0, h.get)("/bapi/asset/v2/private/asset-service/wallet/balance?".concat((0, m.E2)(t))).then((function(t) {
                                            var r = t.data,
                                                u = void 0 === r ? [] : r,
                                                c = n(Date.now() - s, a);
                                            return o({
                                                type: c === a ? "SUCCESS_TIMEOUT" : "SUCCESS",
                                                ws_sessionId: i,
                                                responseFrom: "http",
                                                fallback: e.toString(),
                                                request: "walletBalanceReq",
                                                duration: c
                                            }), u
                                        })).catch((function(t) {
                                            throw o({
                                                type: "ERROR",
                                                ws_sessionId: i,
                                                request: "walletBalanceReq",
                                                fallback: e.toString(),
                                                responseFrom: "http",
                                                error: JSON.stringify(t.message),
                                                duration: n(Date.now() - s, a)
                                            }), t
                                        }))
                                    }, e.next = 8, (0, f.hT)()("cr00");
                                case 8:
                                    if (e.sent) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 10:
                                    return e.abrupt("return", (0, f.Bz)() ? u(!1) : (0, v.P)({
                                        service: "binance-mgs-asset",
                                        argName: "walletBalanceReq",
                                        responseName: "walletBalanceResp"
                                    })(t, r).then((function(e) {
                                        return "error" in e ? (o((0, a._)({
                                            responseFrom: "websocket",
                                            request: "walletBalanceReq",
                                            ws_sessionId: i,
                                            duration: n(Date.now() - s, r)
                                        }, e.error)), u(!0)) : (o({
                                            responseFrom: "websocket",
                                            request: "walletBalanceReq",
                                            type: "SUCCESS",
                                            duration: n(Date.now() - s, r),
                                            ws_sessionId: i
                                        }), e.data.walletBalance || [])
                                    })).catch((function(e) {
                                        return o({
                                            responseFrom: "websocket",
                                            request: "balanceValuationReq",
                                            type: "ERROR",
                                            ws_sessionId: i,
                                            error: JSON.stringify(e.message),
                                            duration: n(Date.now() - s, r)
                                        }), u(!0)
                                    })));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                b = r("UZoC"),
                w = r("Zc2P"),
                x = function() {
                    var e = (0, n._)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, h.post)("/bapi/eoptions/v1/private/eoptions/account/info");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        message: e.t0.message,
                                        data: {
                                            account: [],
                                            greek: [],
                                            userRiskLevel: "normal"
                                        }
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
                k = (function() {
                    var e = (0, n._)(c().mark((function e(t) {
                        var r, n, a, s, o;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (r = t || {}).inviteCode, a = r.countryCode, s = r.ipAddress, e.next = 3, (0, h.post)("/bapi/eoptions/v1/private/eoptions/account/open?".concat((0, m.E2)({
                                        code: n,
                                        countryCode: a,
                                        ipAddress: s
                                    })));
                                case 3:
                                    return o = e.sent, e.abrupt("return", o);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, h.post)("/bapi/eoptions/v1/private/eoptions/account/open/status");
                                case 4:
                                    t = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), t = {
                                        success: !1,
                                        message: e.t0.message,
                                        data: !1
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
                    var e = (0, n._)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, h.post)("/bapi/apex/v2/private/apex/user/current/profile/external/query", {
                                        bizCode: "futures"
                                    });
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), (0, r("m0k9").S)().isHybrid),
                _ = {
                    needMargin: !0,
                    lazyFetch: !1,
                    needChangeQuoteAsset: !1
                },
                y = function(e) {
                    var t = e.supportAssets,
                        r = e.assetBalances,
                        n = new Set,
                        a = r.map((function(e) {
                            return e.asset && n.add(e.asset), {
                                assetCode: e.asset,
                                assetName: e.assetName,
                                logoUrl: e.logoUrl
                            }
                        }));
                    return t.forEach((function(e) {
                        n.has(e.assetCode) || (a.push(e), n.add(e.assetCode))
                    })), a
                },
                C = function(e, t, r) {
                    var n = null === e || void 0 === e ? void 0 : e.find((function(e) {
                        return "TOPTION" === e.accountType
                    }));
                    n && (n.assetBalances && 0 !== n.assetBalances.length ? n.assetBalances = n.assetBalances.map((function(e) {
                        var r, n = null === (r = t.data) || void 0 === r ? void 0 : r.account.find((function(t) {
                            return t.currency === e.asset
                        }));
                        return (0, s._)((0, a._)({}, e), {
                            free: Math.min(e.free, (null === n || void 0 === n ? void 0 : n.available) || 0)
                        })
                    })) : n.assetBalances = ((null === r || void 0 === r ? void 0 : r.topion) || []).map((function(e) {
                        return {
                            asset: e.assetCode,
                            assetName: e.assetName,
                            free: "0",
                            locked: "0",
                            freeze: "0",
                            withdrawing: "0",
                            transferBtc: "0"
                        }
                    })))
                },
                E = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                        r = t.needMargin,
                        u = void 0 === r || r,
                        f = t.lazyFetch,
                        v = t.needChangeQuoteAsset,
                        m = void 0 !== v && v,
                        h = (0, o._)((0, l.useState)({}), 2),
                        E = h[0],
                        A = h[1],
                        N = (0, o._)((0, l.useState)([]), 2),
                        B = N[0],
                        S = N[1],
                        T = (0, o._)((0, l.useState)(!0), 2),
                        R = T[0],
                        z = T[1],
                        D = (0, o._)((0, l.useState)({}), 2),
                        P = D[0],
                        M = D[1],
                        I = "undefined" !== typeof window && window.__RUN_BY_ELECTRON_BROWSER__,
                        L = (0, l.useCallback)((function(e) {
                            return k || m || I ? (0, d.BW)(e) : g(e)
                        }), []);
                    (0, l.useEffect)((function() {
                        var t = function() {
                            var t = (0, n._)(c().mark((function t() {
                                var r, n, i, l, f, v, m, h, g, k, _, E, N, B, T, R;
                                return c().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.t0 = o._, t.next = 5, Promise.all([L(e), (0, d.Hp)(), u ? (0, b._v)() : [], (0, w.cF)(), x()]);
                                        case 5:
                                            t.t1 = t.sent, l = (0, t.t0)(t.t1, 5), f = l[0], v = l[1], m = l[2], h = l[3], g = l[4], k = {}, h.forEach((function(e) {
                                                var t = null !== e && void 0 !== e ? e : {},
                                                    r = t.pic,
                                                    n = void 0 === r ? "" : r,
                                                    a = t.asset;
                                                k[void 0 === a ? "" : a] = n
                                            })), _ = m.map((function(e) {
                                                var t = e.assetName,
                                                    r = e.assetFullName,
                                                    n = e.delistedTime,
                                                    a = e.status;
                                                return {
                                                    assetCode: t,
                                                    assetName: r,
                                                    logoUrl: k[t] || "",
                                                    delistedTime: n,
                                                    status: a
                                                }
                                            })), E = new Set, N = ((null === (r = null === f || void 0 === f ? void 0 : f.find((function(e) {
                                                return "FUTURE" === e.accountType
                                            }))) || void 0 === r ? void 0 : r.assetBalances) || []).map((function(e) {
                                                return e.asset && E.add(e.asset), {
                                                    assetCode: e.asset,
                                                    assetName: e.assetName,
                                                    logoUrl: e.logoUrl
                                                }
                                            })), v.future.forEach((function(e) {
                                                E.has(e.assetCode) || (N.push(e), E.add(e.assetCode))
                                            })), B = y({
                                                assetBalances: (null === (n = null === f || void 0 === f ? void 0 : f.find((function(e) {
                                                    return "FUTURE" === e.accountType
                                                }))) || void 0 === n ? void 0 : n.assetBalances) || [],
                                                supportAssets: v.future || []
                                            }), T = y({
                                                assetBalances: (null === (i = null === f || void 0 === f ? void 0 : f.find((function(e) {
                                                    return "DELIVERY" === e.accountType
                                                }))) || void 0 === i ? void 0 : i.assetBalances) || [],
                                                supportAssets: v.delivery || []
                                            }), R = (0, s._)((0, a._)({}, v), {
                                                future: B,
                                                delivery: T,
                                                margin: _,
                                                mining: v.main || []
                                            }), C(f, g, R), (0, p.unstable_batchedUpdates)((function() {
                                                z(!1), A(R), S(f), M(k)
                                            })), t.next = 29;
                                            break;
                                        case 25:
                                            t.prev = 25, t.t2 = t.catch(0), z(!1), console.log("useWalletBalance abnormal!", t.t2);
                                        case 29:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 25]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        !f && t()
                    }), [f]);
                    var F = (0, l.useCallback)((0, n._)(c().mark((function t() {
                            var r, n, a;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, z(!0), t.t0 = o._, t.next = 5, Promise.all([L(e), x()]);
                                    case 5:
                                        t.t1 = t.sent, r = (0, t.t0)(t.t1, 2), n = r[0], a = r[1], C(n, a, E), (0, p.unstable_batchedUpdates)((function() {
                                            z(!1), S(n || [])
                                        })), t.next = 17;
                                        break;
                                    case 13:
                                        t.prev = 13, t.t2 = t.catch(0), z(!1), console.log("refresh walletBalance abnormal!", t.t2);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 13]
                            ])
                        }))), [e, E]),
                        q = (0, l.useCallback)(function() {
                            var e = (0, n._)(c().mark((function e(t) {
                                var r;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, z(!0), e.next = 4, (0, d.BW)(t);
                                        case 4:
                                            r = e.sent, (0, p.unstable_batchedUpdates)((function() {
                                                z(!1), S(r || [])
                                            })), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), z(!1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), []),
                        G = (0, l.useMemo)((function() {
                            return (B || []).map((function(e) {
                                var t, r = e.accountType,
                                    n = e.activate,
                                    o = e.assetBalances;
                                if (!n) return (0, s._)((0, a._)({}, e), {
                                    assetBalances: []
                                });
                                var u = E[null !== (t = null === r || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== t ? t : 0];
                                if (!u) return (0, a._)({}, e);
                                var c = u.map((function(e) {
                                    var t = e.assetCode,
                                        r = e.assetName,
                                        n = e.logoUrl,
                                        i = e.status,
                                        u = e.delistedTime,
                                        c = (o || []).filter((function(e) {
                                            return e.asset === t
                                        }));
                                    if (c.length) {
                                        var l = c[0],
                                            p = l.free,
                                            d = l.freeze,
                                            f = l.locked,
                                            v = l.withdrawing,
                                            m = l.transferBtc;
                                        return (0, s._)((0, a._)({}, e), {
                                            asset: t,
                                            assetName: r,
                                            free: p,
                                            freeze: d,
                                            locked: f,
                                            withdrawing: v,
                                            transferBtc: m
                                        })
                                    }
                                    return {
                                        logoUrl: n,
                                        asset: t,
                                        assetName: r,
                                        free: "0",
                                        freeze: "0",
                                        locked: "0",
                                        withdrawing: "0",
                                        transferBtc: "0",
                                        status: i,
                                        delistedTime: u
                                    }
                                }));
                                return (0, s._)((0, a._)({}, e), {
                                    assetBalances: (0, i._)(c)
                                })
                            }))
                        }), [B, E]);
                    return {
                        data: (0, l.useMemo)((function() {
                            return G.reduce((function(e, t) {
                                return e[t.activate ? "activate" : "unActivate"].push(t), e
                            }), {
                                activate: [],
                                unActivate: [],
                                all: G
                            })
                        }), [G]),
                        loading: R,
                        onRefresh: F,
                        logoMap: P,
                        onSwitchQuoteAsset: q
                    }
                }
        },
        boXg: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("PzHQ");
            const i = function(e) {
                return s().createElement(o.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M20.018 5.768L20 5.786V12l-3.107-3.107L5.768 20.018 4 18.25 15.125 7.125 12 4h8v1.75l.018.018z",
                    fill: "currentColor"
                }), s().createElement("path", {
                    d: "M5.768 4l4.827 4.827-1.768 1.768L4 5.768 5.768 4zM13.423 15.19l1.768-1.767 4.827 4.827-1.768 1.768-4.827-4.827z",
                    fill: "currentColor"
                }))
            }
        },
        fPTZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("PzHQ");
            const i = function(e) {
                return s().createElement(o.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM20 4h-8l3.125 3.125L4.061 18.19l1.768 1.768L16.893 8.893 20 12V4zm0 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z",
                    fill: "currentColor"
                }))
            }
        },
        "0TaA": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("b6CO"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("PzHQ");
            const i = function(e) {
                return s().createElement(o.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z",
                    fill: "currentColor"
                }))
            }
        },
        "/APJ": (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => d
            });
            var n = r("b6CO"),
                a = r("KrVi"),
                s = r("DTvD"),
                o = r.n(s),
                i = r("2IQ4"),
                u = r("GIr8"),
                c = r("oY5g"),
                l = r("Vhyo"),
                p = r("3zHj"),
                d = o().forwardRef((function(e, t) {
                    var r = e.multiple,
                        s = void 0 !== r && r,
                        d = e.isActive,
                        f = void 0 !== d && d,
                        v = e.isChecked,
                        m = void 0 !== v && v,
                        h = e.value,
                        g = e.disabled,
                        b = e.showChecked,
                        w = void 0 !== b && b,
                        x = e.children,
                        k = e.prefix,
                        _ = e.suffix,
                        y = e.combo,
                        C = e.suffixLine,
                        E = (0, a._)(e, ["multiple", "isActive", "isChecked", "value", "disabled", "showChecked", "children", "prefix", "suffix", "combo", "suffixLine"]);
                    return o().createElement(i.A, (0, n._)({
                        as: "li",
                        role: "option",
                        id: h,
                        key: h,
                        title: h,
                        ref: t,
                        className: m ? "bnb-active-option bn-sdd-option-item" : "bn-sdd-option-item",
                        __css: {
                            color: !g && f ? "t.yellow" : "t.primary",
                            opacity: g ? .4 : 1,
                            cursor: g ? "default" : "pointer",
                            bg: "popupBg",
                            ":hover": {
                                bg: g ? "" : "bg3"
                            },
                            py: y ? "12px" : "8px",
                            lineHeight: 1
                        }
                    }, E), o().createElement(u.A, {
                        className: "bn-sdd-option"
                    }, s && o().createElement(c.A, {
                        checked: m,
                        disabled: g
                    }), k && o().createElement(u.A, {
                        mr: 2,
                        alignItems: "center"
                    }, k), o().createElement(i.A, {
                        flex: 1
                    }, x), w && o().createElement(o().Fragment, null, o().createElement(u.A, {
                        flex: 1,
                        minWidth: "8px"
                    }), o().createElement(p.A, {
                        color: m ? "primary" : "transparent"
                    })), _ && o().createElement(i.A, {
                        color: "t.third",
                        ml: "xs"
                    }, _)), y && o().createElement(i.A, {
                        __css: {
                            px: "sm"
                        }
                    }, o().createElement(l.A, {
                        color: "t.third",
                        variant: "caption",
                        style: {
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            lineHeight: "16px"
                        }
                    }, y)), C && o().createElement(i.A, {
                        __css: {
                            px: "sm"
                        }
                    }, C))
                }));
            d.displayName = "SearchDropdownOption"
        },
        nQqE: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => G
            });
            var n = r("b6CO"),
                a = r("hrAD"),
                s = r("qoEP"),
                o = r("KrVi"),
                i = r("mguP"),
                u = r("d12p"),
                c = r("DTvD"),
                l = r.n(c),
                p = r("GIr8"),
                d = r("2IQ4"),
                f = r("oICd"),
                v = r("QCYV"),
                m = r("Najx"),
                h = r("PzHQ");
            const g = function(e) {
                return l().createElement(h.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            };
            var b = r("/Cny"),
                w = r("j+bC"),
                x = r.n(w),
                k = r("2TFz"),
                _ = r.n(k),
                y = r("ZzWN"),
                C = r.n(y),
                E = r("FB3O"),
                A = r.n(E),
                N = r("Vhyo"),
                B = r("xqbL"),
                S = r.n(B),
                T = c.forwardRef((function(e, t) {
                    var r = e.label,
                        n = e.children,
                        a = e.groupNameClickable,
                        s = e.handleGroupNameClick,
                        o = e.isActive,
                        i = void 0 !== o && o;
                    return c.createElement(d.A, {
                        as: "li",
                        ref: t
                    }, c.createElement(d.A, {
                        __css: {
                            cursor: a ? "pointer" : "default"
                        },
                        className: S()("bn-sdd-optionGroupLabel", {
                            "is-active": i
                        }),
                        onClick: function(e) {
                            a && s && s(e)
                        }
                    }, c.createElement(N.A, {
                        className: "bn-sdd-optionGroupText"
                    }, r)), c.createElement(d.A, {
                        as: "ul",
                        padding: 0
                    }, n))
                }));
            T.displayName = "SearchDropdownOptGroup";
            var R = r("/APJ"),
                z = r("HEid"),
                D = r("6ScU"),
                P = r("vjpm"),
                M = "undefined" !== typeof window ? c.useLayoutEffect : c.useEffect,
                I = {
                    sm: 32,
                    md: 40,
                    lg: 48
                },
                L = function(e, t) {
                    return "".concat(e, "-").concat(t)
                },
                F = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = l().Children.toArray(e);
                    return e ? n.reduce((function(e, n) {
                        var i;
                        if ((null === n || void 0 === n || null === (i = n.type) || void 0 === i ? void 0 : i.displayName) === T.displayName) {
                            var u = n.props,
                                c = u.label,
                                l = u.children,
                                p = (0, o._)(u, ["label", "children"]);
                            return e.concat(F(l, c, p))
                        }
                        return e.concat((0, s._)((0, a._)({
                            group: t
                        }, n.props), {
                            optGroupProps: r
                        }))
                    }), []) : []
                },
                q = function(e) {
                    var t = e.disabled,
                        r = e.label,
                        h = e.onValueChange,
                        w = e.limit,
                        k = void 0 === w ? 5 : w,
                        y = e.children,
                        E = e.value,
                        N = e.placeholder,
                        B = e.defaultValue,
                        S = e.renderValue,
                        q = e.filterFunction,
                        G = void 0 === q ? function(e, t) {
                            return t.toLowerCase().startsWith(e.toLowerCase())
                        } : q,
                        H = e.onChange,
                        O = e.onBlur,
                        U = e.multiple,
                        V = void 0 !== U && U,
                        W = e.showChecked,
                        Q = void 0 !== W && W,
                        Z = e.searchPlaceholder,
                        J = e.empty,
                        j = void 0 === J ? "No results found." : J,
                        K = e.alternativeEmpty,
                        X = e.dropdownFullWidth,
                        Y = e.variant,
                        $ = void 0 === Y ? "filled" : Y,
                        ee = e.hideSearch,
                        te = void 0 !== ee && ee,
                        re = e.lazy,
                        ne = void 0 !== re && re,
                        ae = e.error,
                        se = void 0 !== ae && ae,
                        oe = e.infoText,
                        ie = e.errorText,
                        ue = e.footer,
                        ce = e.size,
                        le = void 0 === ce ? "md" : ce,
                        pe = e.searchError,
                        de = void 0 !== pe && pe,
                        fe = e.searchErrorText,
                        ve = e.searchFieldProps,
                        me = void 0 === ve ? {} : ve,
                        he = e.needSeo,
                        ge = void 0 === he || he,
                        be = e.textFieldProps,
                        we = void 0 === be ? {} : be,
                        xe = e.textFieldBoxProps,
                        ke = void 0 === xe ? {} : xe,
                        _e = e.groupNameClickable,
                        ye = void 0 !== _e && _e,
                        Ce = e.emphasizedGrouping,
                        Ee = void 0 !== Ce && Ce,
                        Ae = e.activeGroup,
                        Ne = e.onOpenChange,
                        Be = e.defaultOpen,
                        Se = void 0 !== Be && Be,
                        Te = e.itemHeight,
                        Re = e.customBoundaryHeight,
                        ze = e.alternativeMobileUI,
                        De = e.drawerTitle,
                        Pe = (0, o._)(e, ["disabled", "label", "onValueChange", "limit", "children", "value", "placeholder", "defaultValue", "renderValue", "filterFunction", "onChange", "onBlur", "multiple", "showChecked", "searchPlaceholder", "empty", "alternativeEmpty", "dropdownFullWidth", "variant", "hideSearch", "lazy", "error", "infoText", "errorText", "footer", "size", "searchError", "searchErrorText", "searchFieldProps", "needSeo", "textFieldProps", "textFieldBoxProps", "groupNameClickable", "emphasizedGrouping", "activeGroup", "onOpenChange", "defaultOpen", "itemHeight", "customBoundaryHeight", "alternativeMobileUI", "drawerTitle"]),
                        Me = (0, i._)((0, c.useState)(""), 2),
                        Ie = Me[0],
                        Le = Me[1],
                        Fe = (0, i._)((0, c.useState)(B), 2),
                        qe = Fe[0],
                        Ge = Fe[1],
                        He = (0, i._)((0, c.useState)(Ae), 2),
                        Oe = He[0],
                        Ue = He[1],
                        Ve = (0, i._)((0, c.useState)(0), 2),
                        We = Ve[0],
                        Qe = Ve[1],
                        Ze = (0, i._)((0, c.useState)(""), 2),
                        Je = Ze[0],
                        je = Ze[1],
                        Ke = (0, i._)((0, c.useState)(0), 2),
                        Xe = Ke[0],
                        Ye = Ke[1],
                        $e = (0, i._)((0, c.useState)(Se), 2),
                        et = $e[0],
                        tt = $e[1],
                        rt = (0, i._)((0, c.useState)(ge), 2),
                        nt = rt[0],
                        at = rt[1],
                        st = (0, i._)((0, c.useState)({}), 2),
                        ot = st[0],
                        it = st[1],
                        ut = (0, c.useRef)(null),
                        ct = (0, c.useRef)(null),
                        lt = (0, c.useRef)({}),
                        pt = (0, c.useRef)({}),
                        dt = (0, c.useRef)(null),
                        ft = (0, c.useRef)(null),
                        vt = (0, P.Q)().isMobile,
                        mt = l().useCallback((function() {
                            return x()([
                                [C()("outline"), _()("filled")],
                                [A(), _()($)]
                            ])($)
                        }), [$]),
                        ht = l().useCallback((function() {
                            return x()([
                                [function(e) {
                                    return !!e
                                }, _()("emphasizedGrouping")],
                                [A(), _()("normal")]
                            ])(Ee)
                        }), [Ee]);
                    void 0 !== E && E !== qe && Ge(E), void 0 !== Ae && Ae !== Oe && Ue(E);
                    var gt = (0, c.useMemo)((function() {
                            return Ie ? F(y).filter((function(e) {
                                return G(Ie, e.value)
                            })) : F(y)
                        }), [y, Ie]),
                        bt = (0, c.useMemo)((function() {
                            return Array.isArray(gt) ? Math.min(gt.length, k) : 0
                        }), [gt]),
                        wt = (0, c.useMemo)((function() {
                            return gt.reduce((function(e, t, r) {
                                var n = t.group,
                                    a = t.optGroupProps;
                                return e.length > 0 && e[e.length - 1].group === n ? e[e.length - 1].options.push(t) : e.push({
                                    key: r,
                                    index: r,
                                    group: n,
                                    groupSeq: L(n, r),
                                    optGroupProps: a,
                                    options: [t]
                                }), e
                            }), [])
                        }), [gt]),
                        xt = (0, c.useCallback)((function() {
                            Le(""), tt(!1), Ne && Ne(!1)
                        }), []);
                    (0, c.useEffect)((function() {
                        ut.current && Ye(ut.current.offsetLeft)
                    }), []), (0, c.useEffect)((function() {
                        var e = Math.max(gt.findIndex((function(e) {
                                return e.value === qe
                            })), 0),
                            t = wt.findIndex((function(e) {
                                return e.group === Oe
                            }));
                        Ee && -1 !== t && wt[t] ? je(wt[t].groupSeq) : Qe(e)
                    }), [Ie, qe, Oe]), (0, c.useEffect)((function() {
                        if (gt.length > 0) {
                            var e = lt.current[We],
                                t = lt.current[We + 1],
                                r = dt.current;
                            if (e && r) {
                                var n = r.scrollTop,
                                    a = r.clientHeight,
                                    s = e.offsetTop;
                                if (s - 68 < n) return void(r.scrollTop = s - 68);
                                s >= n + a && t && (r.scrollTop += t.offsetTop - s)
                            }
                        }
                    }), [We]), (0, c.useEffect)((function() {
                        if (et) {
                            window.addEventListener("click", xt), ct.current && ct.current.focus();
                            var e = Je ? pt.current[Je] : lt.current[We],
                                t = dt.current;
                            e && t && (wt.length > 1 ? t.scrollTop = e.offsetTop : t.scrollTop = We * (Te || 40))
                        } else window.removeEventListener("click", xt);
                        return function() {
                            window.removeEventListener("click", xt)
                        }
                    }), [et, Je]);
                    var kt = (0, c.useRef)(null),
                        _t = (0, i._)((0, c.useState)(1), 2),
                        yt = _t[0],
                        Ct = _t[1];
                    M((function() {
                        kt.current && ut.current && (kt.current.clientHeight >= ut.current.clientHeight ? Ct((function(e) {
                            return e + 1
                        })) : ut.current.clientHeight - kt.current.clientHeight > 20 && Ct((function(e) {
                            return e - 1
                        })))
                    }), [qe]);
                    var Et = function(e) {
                            h && h(e), Le(e)
                        },
                        At = function() {
                            if (null !== ft.current) {
                                var e = ft.current.getBoundingClientRect(),
                                    t = "function" === typeof getComputedStyle ? getComputedStyle(ft.current) : {
                                        marginLeft: "0",
                                        marginRight: "0",
                                        margin: "0"
                                    },
                                    r = t.marginLeft,
                                    n = t.marginRight,
                                    s = t.margin,
                                    o = function(e) {
                                        return Number(e.split("px")[0])
                                    },
                                    i = ft.current.parentElement.getBoundingClientRect().width - o(r) - o(n) - o(s) / 2,
                                    u = "number" !== typeof Re || isNaN(Re) ? window.innerHeight : Re;
                                if (e.bottom + 40 * bt > u) it((0, a._)({
                                    bottom: "".concat(e.height, "px")
                                }, X && {
                                    width: i
                                }));
                                else {
                                    var c = se ? ie : oe,
                                        l = c && c.length > 0;
                                    it((0, a._)({
                                        mt: l ? "-16px" : "0px"
                                    }, X && {
                                        width: i
                                    }))
                                }!nt && at(!0), tt(!0), Ne && Ne(!0)
                            }
                        };
                    M((function() {
                        var e = se ? ie : oe,
                            t = e && e.length > 0;
                        it((function(e) {
                            return (0, s._)((0, a._)({}, e), {
                                mt: t ? "-16px" : "0px"
                            })
                        }))
                    }), [ie, oe]);
                    var Nt = function(e) {
                            if (38 === e.keyCode) {
                                e.preventDefault();
                                var t = Math.max(We - 1, 0);
                                Qe(t)
                            } else if (40 === e.keyCode) {
                                e.preventDefault();
                                var r = Math.min(We + 1, gt.length - 1);
                                Qe(r)
                            } else if (13 === e.keyCode)
                                if (et && !V) {
                                    if (gt[We]) {
                                        var n = gt[We],
                                            a = n.label || n.value;
                                        if (n.disabled) return;
                                        Et(a), H && H(a), Ge(a), ut.current && ut.current.blur()
                                    }
                                    xt()
                                } else At();
                            else 27 === e.keyCode && xt()
                        },
                        Bt = S ? S(qe) : Array.isArray(qe) ? l().createElement(p.A, {
                            flexWrap: "wrap",
                            ref: kt
                        }, qe.map((function(e) {
                            return l().createElement(d.A, {
                                key: e,
                                flexShrink: 0,
                                __css: {
                                    bg: "line",
                                    borderRadius: "small",
                                    my: "2px",
                                    mr: "minor",
                                    px: "xs",
                                    height: "24px",
                                    lineHeight: "24px"
                                }
                            }, e)
                        }))) : "",
                        St = l().createElement(z.A, (0, n._)({
                            ref: ut,
                            className: "bn-sdd-input",
                            variant: mt(),
                            disabled: t,
                            error: se,
                            size: le,
                            infoText: oe,
                            errorText: ie,
                            sx: {
                                visibility: S || Array.isArray(qe) ? "hidden" : "visible",
                                cursor: t ? "default" : "pointer"
                            },
                            bg: "transparent",
                            boxProps: (0, a._)({
                                sx: {
                                    height: V && yt > 1 ? "".concat(I[le] + 28 * (yt - 1), "px") : I[le],
                                    width: "100%",
                                    ".bn-input-suffix": {
                                        height: "100%",
                                        mr: "xs"
                                    },
                                    cursor: t ? "default" : "pointer"
                                },
                                onClick: function(e) {
                                    (e.preventDefault(), t) || (!1 === et ? (document.querySelector(".bn-sdd-dropdown.showing") || e.stopPropagation(), At()) : xt())
                                },
                                onMouseDown: function(e) {
                                    e.stopPropagation(), e.preventDefault()
                                }
                            }, ke),
                            suffix: l().createElement(p.A, {
                                height: "100%",
                                alignItems: "center"
                            }, l().createElement(m.A, {
                                sx: {
                                    transform: et ? "rotate(180deg)" : "rotate(0)",
                                    color: "t.third"
                                },
                                size: 16
                            })),
                            onFocus: function(e) {
                                e.stopPropagation(), e.preventDefault(), ut.current && ut.current.blur(), !1 === et && At()
                            },
                            label: r,
                            value: qe || "",
                            onKeyDown: function(e) {
                                return Nt(e)
                            }
                        }, !E && !qe && {
                            placeholder: N,
                            sx: {
                                visibility: "visible",
                                cursor: t ? "default" : "pointer"
                            }
                        }, we)),
                        Tt = l().createElement(d.A, {
                            className: "bn-sdd-innerInputContainer",
                            width: "100%"
                        }, l().createElement(z.A, (0, n._)({
                            ref: ct,
                            boxProps: {
                                width: "100%",
                                sx: {
                                    ".bn-input-prefix": {
                                        display: "flex"
                                    },
                                    ".bn-input-suffix": {
                                        display: "flex"
                                    }
                                }
                            },
                            variant: mt(),
                            size: "md",
                            onClick: function(e) {
                                e.stopPropagation(), e.preventDefault()
                            },
                            error: de,
                            errorText: fe,
                            value: Ie,
                            bg: "transparent",
                            onChange: function(e) {
                                Et(e.target.value), !1 === et && At()
                            },
                            onKeyDown: function(e) {
                                return Nt(e)
                            },
                            onBlur: function(e) {
                                O && O(e)
                            },
                            prefix: l().createElement(g, {
                                color: "t.placeholder",
                                ml: "8px",
                                mr: "-8px",
                                className: "bn-sdd-icon"
                            }),
                            suffix: l().createElement(b.A, {
                                id: null === me || void 0 === me ? void 0 : me.closeButtonId,
                                className: "bn-sdd-icon",
                                sx: {
                                    color: "t.placeholder",
                                    mr: "xs"
                                },
                                size: 20,
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation(), Le(""), ct.current && ct.current.focus()
                                }
                            }),
                            placeholder: Z
                        }, me))),
                        Rt = (0, c.useMemo)((function() {
                            return l().createElement(d.A, {
                                ref: dt,
                                as: "ul",
                                role: "listbox",
                                className: "bn-sdd-list",
                                sx: {
                                    maxHeight: ze && vt ? "none" : "".concat(40 * (.7 + k), "px")
                                }
                            }, (!ne || et) && wt.map((function(e) {
                                return function(e) {
                                    var t = e.key,
                                        r = e.group,
                                        n = e.children,
                                        a = e.groupNameClickable,
                                        s = e.handleGroupNameClick,
                                        o = e.isActive;
                                    return r ? l().createElement(T, {
                                        groupNameClickable: a,
                                        handleGroupNameClick: s,
                                        label: r,
                                        key: t,
                                        isActive: o,
                                        ref: function(e) {
                                            pt.current[L(r, t)] = e
                                        }
                                    }, n) : l().createElement(l().Fragment, {
                                        key: t
                                    }, n)
                                }({
                                    key: e.key,
                                    group: e.group,
                                    groupNameClickable: ye,
                                    isActive: Je === e.groupSeq,
                                    handleGroupNameClick: function(t) {
                                        var r, n, a = e.group;
                                        h && h(a), H && H(a), Ge(a), Ue(a), (null === (r = e.optGroupProps) || void 0 === r ? void 0 : r.handleGroupNameClick) && (null === (n = e.optGroupProps) || void 0 === n || n.handleGroupNameClick(t))
                                    },
                                    children: e.options.map((function(t, r) {
                                        t.group;
                                        var n = (0, o._)(t, ["group"]),
                                            i = e.index + r;
                                        return l().createElement(R.c, (0, s._)((0, a._)({}, n), {
                                            key: i,
                                            multiple: V,
                                            isActive: Je ? Je === e.groupSeq && !V : We === i && !V,
                                            isChecked: Array.isArray(qe) ? -1 !== qe.indexOf(n.value) : n.value === qe,
                                            showChecked: Q,
                                            ref: function(e) {
                                                return lt.current[i] = e
                                            },
                                            onClick: function(e) {
                                                if (e.stopPropagation(), !n.disabled) {
                                                    var t;
                                                    if (V || Qe(i), V) {
                                                        var r = Array.isArray(qe) ? (0, u._)(qe) : [],
                                                            a = r.indexOf(n.value); - 1 === a ? r.push(n.value) : r.splice(a, 1), t = r
                                                    } else t = n.value;
                                                    h && h(t), H && H(t), Ge(t), Ue(""), V || xt()
                                                }
                                            }
                                        }))
                                    }))
                                })
                            })))
                        }), [dt, k, ne, et, wt, We, qe, ze, vt]),
                        zt = ze && vt;
                    return l().createElement(d.A, (0, n._)({
                        tx: "searchDropdown",
                        variant: ht(),
                        ref: ft
                    }, Pe), St, Bt && l().createElement(d.A, {
                        className: "bn-sdd-value",
                        sx: {
                            height: V && yt > 1 ? "".concat(I[le] + 28 * (yt - 1), "px") : I[le],
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            left: Xe || 0,
                            bottom: 0,
                            right: 0,
                            pointerEvents: "none",
                            wordBreak: "keep-all",
                            fontSize: "sm",
                            lineHeight: 1,
                            color: t ? "t.disabled" : "t.primary"
                        }
                    }, Bt), nt && !zt && l().createElement(f.Ay, {
                        container: ft.current
                    }, l().createElement(d.A, {
                        className: "bn-sdd-dropdown ".concat(et ? "showing" : "closing"),
                        __css: (0, a._)({
                            outline: "none",
                            height: "auto",
                            display: et ? "block" : "none",
                            width: "auto!important",
                            minWidth: "100%!important"
                        }, ot)
                    }, !te && Tt, 0 === wt.length && l().createElement(d.A, {
                        className: "bn-sdd-noResults"
                    }, j), Rt, ue)), zt && l().createElement(v.A, {
                        direction: "bottom",
                        visible: et,
                        maskBg: "dialog.mask",
                        bg: "dialog.mask"
                    }, l().createElement(p.A, {
                        tx: "searchDropdown",
                        variant: "drawer",
                        className: "bn-sdd-drawer ".concat(et ? "showing" : "closing"),
                        width: "100%",
                        color: "t.primary"
                    }, l().createElement(D.Ay.ModalTitle, {
                        onClose: xt,
                        title: De
                    }), l().createElement(p.A, {
                        width: "100%",
                        height: "50vh",
                        flexDirection: "column"
                    }, !te && Tt, 0 === wt.length && l().createElement(d.A, {
                        className: "bn-sdd-noResults"
                    }, K), Rt, ue))))
                };
            q.displayName = "SearchDropdown";
            const G = l().memo(q)
        },
        ZzWN: (e, t, r) => {
            var n = r("T/+f"),
                a = r("i4GD");
            e.exports = function(e) {
                return a(n(e, 1))
            }
        }
    }
]);