(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1694], {
        Zc2P: (e, r, t) => {
            "use strict";
            t.d(r, {
                K1: () => i,
                cF: () => o
            });
            var n = t("S+0I"),
                a = t("66mo"),
                s = t.n(a),
                c = t("VA12"),
                u = t("5k5x"),
                i = (function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        var t, n, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.post)("/bapi/asset/v1/private/asset/asset/user-asset-dividend", r);
                                case 2:
                                    return t = e.sent, n = t.data, a = t.total, e.abrupt("return", {
                                        data: n,
                                        total: a
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, c.post)("/bapi/asset/v1/private/asset-service/partner/queryMigrationStatus?clientId=".concat(r)));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(r) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, c.post)("/bapi/asset/v1/private/asset-service/partner/migrate", r));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, c.get)("/bapi/asset/v1/public/asset/asset/get-asset-logo");
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r || []);
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
                o = (0, u.CM)(i);
            ! function() {
                var e = (0, n._)(s().mark((function e() {
                    var r, t;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = {
                                    success: !1,
                                    data: []
                                }, e.prev = 1, e.next = 4, (0, c.get)("/bapi/futures/v1/public/future/common/futures-stable-assets");
                            case 4:
                                if (!(t = e.sent).success) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", t);
                            case 7:
                                return e.abrupt("return", r);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", r);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }()
        },
        nzy6: (e, r, t) => {
            "use strict";
            t.d(r, {
                Wo: () => v
            });
            var n = t("S+0I"),
                a = t("hrAD"),
                s = t("66mo"),
                c = t.n(s),
                u = t("VA12"),
                i = t("biWu"),
                o = t("Pir2"),
                p = t("FyNj"),
                v = (function() {
                    var e = (0, n._)(c().mark((function e(r) {
                        var t, n, a, s, i, o, p;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = !1, n = "", a = "", e.prev = 3, e.next = 6, (0, u.post)("/bapi/margin/v1/private/isolated-margin/create-isolated-margin-user", r);
                                case 6:
                                    s = e.sent, i = s.success, o = s.code, p = s.message, i || (n = o, a = p), t = i, e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(3), n = e.t0.message;
                                case 17:
                                    return e.abrupt("return", [t, n, a]);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 14]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(c().mark((function e(r) {
                        var t, n, a, s, i;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-details".concat((0, p.S)(r)));
                                case 4:
                                    n = e.sent, a = n.success, s = n.data, i = void 0 === s ? [] : s, a && (t = i), e.next = 13;
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
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }());
            (function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, s, v, f, l;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = 10, n = function(e) {
                                    return Math.min(Math.floor(e / 1e3), t)
                                }, s = (0, i.UE)(), v = (0, i.u0)(), f = Date.now(), l = function(e) {
                                    var a = e ? 2 * t : t;
                                    return (0, u.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-details".concat((0, p.S)(r))).then((function() {
                                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = n(Date.now() - f);
                                        return s({
                                            type: t === a ? "SUCCESS_TIMEOUT" : "SUCCESS",
                                            ws_sessionId: v,
                                            responseFrom: "http",
                                            fallback: e.toString(),
                                            request: "isolatedMarginAccountReq",
                                            duration: t
                                        }), (null === r || void 0 === r ? void 0 : r.success) && (null === r || void 0 === r ? void 0 : r.data) ? null === r || void 0 === r ? void 0 : r.data : []
                                    })).catch((function(r) {
                                        throw s({
                                            type: "ERROR",
                                            ws_sessionId: v,
                                            request: "isolatedMarginAccountReq",
                                            fallback: e.toString(),
                                            responseFrom: "http",
                                            error: JSON.stringify(r.message),
                                            duration: n(Date.now() - f)
                                        }), r
                                    }))
                                }, e.next = 8, (0, i.hT)()("cr00");
                            case 8:
                                if (e.sent) {
                                    e.next = 11;
                                    break
                                }
                                return s({
                                    type: "NO_CR00"
                                }), e.abrupt("return", []);
                            case 11:
                                return e.abrupt("return", (0, i.Bz)() ? l(!1) : (0, o.P)({
                                    service: "isolated-margin",
                                    argName: "isolatedMarginAccountReq",
                                    responseName: "isolatedMarginAccountResp"
                                })(r || {}, t).then((function(e) {
                                    return "error" in e ? (s((0, a._)({
                                        responseFrom: "websocket",
                                        request: "isolatedMarginAccountReq",
                                        ws_sessionId: v,
                                        duration: n(Date.now() - f)
                                    }, e.error)), l(!0)) : (s({
                                        responseFrom: "websocket",
                                        request: "isolatedMarginAccountReq",
                                        type: "SUCCESS",
                                        duration: n(Date.now() - f),
                                        ws_sessionId: v
                                    }), e.data.isolatedMarginAccountDetail || [])
                                })).catch((function(e) {
                                    return s({
                                        responseFrom: "websocket",
                                        request: "isolatedMarginAccountReq",
                                        type: "ERROR",
                                        ws_sessionId: v,
                                        error: JSON.stringify(e.message),
                                        duration: n(Date.now() - f)
                                    }), l(!0)
                                })));
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-asset-position?period=".concat(r));
                            case 4:
                                n = e.sent, a = n.success, s = n.data, i = void 0 === s ? [] : s, a && (t = i), e.next = 13;
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
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n, a, s;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-trading-position");
                            case 4:
                                t = e.sent, n = t.success, a = t.data, s = void 0 === a ? [] : a, n && (r = s), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", r);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n, a, s;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/isolated-margin-account-summary");
                            case 4:
                                t = e.sent, n = t.success, a = t.data, s = void 0 === a ? [] : a, n && (r = s), e.next = 13;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1);
                            case 13:
                                return e.abrupt("return", r);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 11]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    beginDate: "",
                                    profits: {
                                        BTC: "0.00000000",
                                        USDT: "0.00000000"
                                    }
                                }, e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/profit?period=".concat(r));
                            case 4:
                                n = e.sent, a = n.success, s = n.data, i = void 0 === s ? {} : s, a && (t = i), e.next = 13;
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
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, s, i, o;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = {
                                    total: 0
                                }, e.prev = 1, e.next = 4, (0, u.post)("/bapi/composite/v1/private/promo/voucher/pageQuery", (0, a._)({
                                    voucherStatus: "ENABLE",
                                    voucherSubType: "MARGIN_LOAN"
                                }, r));
                            case 4:
                                n = e.sent, s = n.success, i = n.data, o = void 0 === i ? {
                                    total: 0
                                } : i, s && (t = o), e.next = 13;
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
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !0, e.prev = 2, e.next = 5, (0, u.post)("/bapi/margin/v1/private/isolated-margin/account-enable/".concat(r));
                            case 5:
                                a = e.sent, s = a.success, i = a.message, t = !s, n = i, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), n = e.t0.message;
                            case 15:
                                return e.abrupt("return", [t, n]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !0, e.prev = 2, e.next = 5, (0, u.post)("/bapi/margin/v1/private/isolated-margin/account-disable/".concat(r));
                            case 5:
                                a = e.sent, s = a.success, i = a.message, t = !s, n = i, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), n = e.t0.message;
                            case 15:
                                return e.abrupt("return", [t, n]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n, a, s;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = !0, e.prev = 2, e.next = 5, (0, u.post)("/bapi/margin/v1/private/isolated-margin/accounts-disable");
                            case 5:
                                n = e.sent, a = n.success, s = n.message, r = !a, t = s, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), t = e.t0.message;
                            case 15:
                                return e.abrupt("return", [r, t]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n, a;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = {
                                    enableCount: 0,
                                    limitCount: 0,
                                    canDisableAccounts: !1
                                }, e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/account-limit-config");
                            case 4:
                                t = e.sent, n = t.success, a = t.data, n && (r = a), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", r);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !1, e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/account-disable-check/".concat(r));
                            case 4:
                                n = e.sent, a = n.success, s = n.data, t = a && s.canDisable, e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n, a;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/public/isolated-margin/account-limit");
                            case 4:
                                t = e.sent, n = t.success, a = t.data, n && (r = a), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", r);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n, a;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = {
                                    data: [],
                                    endTime: 0
                                }, e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/trade-position");
                            case 4:
                                t = e.sent, n = t.success, a = t.data, n && (r = a), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", r);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 2, e.next = 5, (0, u.post)("/bapi/margin/v1/private/isolated-margin/cover-config", r);
                            case 5:
                                a = e.sent, s = a.message, i = a.success, t = i, n = s, e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(2), console.log("error....", e.t0);
                            case 15:
                                return e.abrupt("return", [t, n]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 12]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v1/private/isolated-margin/bar/get-call-bar");
                            case 4:
                                t = e.sent, n = t.data, t.success && Array.isArray(n) && (r = n), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", r);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e() {
                    var r, t, n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, u.get)("/bapi/margin/v2/private/isolated-margin/bar/get-call-bar");
                            case 4:
                                t = e.sent, n = t.data, t.success && n && (r = n), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(1);
                            case 12:
                                return e.abrupt("return", r);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !1, e.prev = 1, e.next = 4, (0, u.post)("/bapi/margin/v1/private/isolated-margin/bar/reset-call-bar", {
                                    ratio: r
                                });
                            case 4:
                                n = e.sent, t = n.success, e.next = 10;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1);
                            case 10:
                                return e.abrupt("return", t);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = !1, e.prev = 1, e.next = 4, (0, u.post)("/bapi/margin/v1/private/isolated-margin/bar/set-call-bar", r);
                            case 4:
                                n = e.sent, t = n.success, e.next = 10;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1);
                            case 10:
                                return e.abrupt("return", t);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            }(),
            function() {
                var e = (0, n._)(c().mark((function e(r) {
                    var t, n, a, s, i = arguments;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 1 && void 0 !== i[1] ? i[1] : "24H", n = [!1, ""], e.prev = 2, e.next = 5, (0, u.post)("/bapi/margin/v1/private/isolated-margin/bar/set-call-bars", {
                                    callBars: r,
                                    callFrequency: t
                                });
                            case 5:
                                a = e.sent, n = (null === a || void 0 === a ? void 0 : a.success) ? [!0, ""] : [!1, null !== (s = null === a || void 0 === a ? void 0 : a.message) && void 0 !== s ? s : ""], e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(2);
                            case 11:
                                return e.abrupt("return", n);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 9]
                    ])
                })))
            }()
        },
        ZLGz: (e, r, t) => {
            "use strict";
            t.d(r, {
                PC: () => d,
                Py: () => l,
                eg: () => h,
                tZ: () => g,
                xN: () => b
            });
            var n = t("iKvg"),
                a = t("DTvD"),
                s = t("MD8j"),
                c = t("hufm"),
                u = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.loginStatus
                },
                i = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.userInfo
                },
                o = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.fiatCurrency
                },
                p = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.userPreferredCurrency
                },
                v = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.userQuoteAsset
                },
                f = function() {
                    return (0, s.d4)(u, s.bN) || {}
                },
                l = function() {
                    return (0, s.d4)(i, s.bN) || {}
                },
                d = function() {
                    return (0, s.d4)(o, s.bN) || {}
                },
                m = function() {
                    return (0, s.d4)(p, s.bN) || {}
                },
                b = function() {
                    var e = (0, s.wA)(),
                        r = f().isLoggedIn,
                        t = (0, c.oP)(),
                        n = t.cachePreferFiat,
                        u = t.setCacheFiat,
                        i = m().configName;
                    return {
                        userFiat: (r ? i : n) || n,
                        setUseFiat: (0, a.useMemo)((function() {
                            return r ? function(r) {
                                return e.userCenter.updateCurrentFiat(r)
                            } : function(e) {
                                return u(e)
                            }
                        }), [r])
                    }
                },
                g = function() {
                    return b().userFiat
                },
                h = function() {
                    var e = (0, a.useRef)(),
                        r = (0, s.wA)();
                    return e.current = (0, s.d4)(v, s.bN) || "", {
                        userQuoteAsset: e.current,
                        setUserQuoteAsset: (0, a.useCallback)((function(t, a) {
                            var s = "function" === typeof a ? a(e.current[t]) : a;
                            r.userCenter.updateState((0, n._)({}, t, s))
                        }), [])
                    }
                }
        },
        Najx: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => u
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                s = t.n(a),
                c = t("PzHQ");
            const u = function(e) {
                return s().createElement(c.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            }
        },
        "3zHj": (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => u
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                s = t.n(a),
                c = t("PzHQ");
            const u = function(e) {
                return s().createElement(c.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                    fill: "currentColor"
                }))
            }
        },
        Pir2: (e, r, t) => {
            "use strict";
            t.d(r, {
                P: () => d
            });
            var n = t("S+0I"),
                a = t("iKvg"),
                s = t("66mo"),
                c = t.n(s),
                u = t("vXhJ"),
                i = t("zxSN"),
                o = t("biWu"),
                p = t("TdM3"),
                v = t("cqfI"),
                f = t("07yi"),
                l = t("gJBT"),
                d = function(e) {
                    var r = e.service,
                        t = e.argName,
                        s = e.responseName;
                    return function() {
                        var e = (0, n._)(c().mark((function e(n) {
                            var d, m = arguments;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d = m.length > 1 && void 0 !== m[1] ? m[1] : o.xc, e.abrupt("return", new Promise((function(e, c) {
                                            var m;
                                            (0, o.$s)() ? ((0, u.mS)(), (0, l.Vw)((function() {
                                                return m = window.setTimeout((function() {
                                                    e({
                                                        error: {
                                                            type: "TIMEOUT"
                                                        }
                                                    })
                                                }), 1e3 * d), p.j
                                            })), (0, l.zf)((function() {
                                                return e({
                                                    error: {
                                                        type: "WS_CONNECTION_TIMEOUT"
                                                    }
                                                }), p.j
                                            })), (0, l.TH)((function() {
                                                return e({
                                                    error: {
                                                        type: "WS_ABNORMAL_CLOSE"
                                                    }
                                                }), p.j
                                            })), (0, o.lM)((function() {
                                                return e({
                                                    error: {
                                                        type: "GET_TOKEN_ERROR"
                                                    }
                                                }), p.j
                                            })), (0, i.Ts)((function() {
                                                return (0, v.Em)({
                                                    payload: (0, a._)({
                                                        reqAction: f.$.SERVICE_REQ,
                                                        service: r
                                                    }, t, n),
                                                    callback: function(r) {
                                                        clearTimeout(m), e("error" in r ? r : {
                                                            data: r[s]
                                                        })
                                                    }
                                                })
                                            }))) : c(Error("ws-http-sdk: need to init websocket before use"))
                                        })));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
        },
        "j+bC": (e, r, t) => {
            var n = t("PLcw"),
                a = t("BL0e"),
                s = t("hzJ1"),
                c = t("mQkt");
            e.exports = function(e) {
                var r = null == e ? 0 : e.length,
                    t = s;
                return e = r ? a(e, (function(e) {
                    if ("function" != typeof e[1]) throw new TypeError("Expected a function");
                    return [t(e[0]), e[1]]
                })) : [], c((function(t) {
                    for (var a = -1; ++a < r;) {
                        var s = e[a];
                        if (n(s[0], this, t)) return n(s[1], this, t)
                    }
                }))
            }
        },
        FB3O: e => {
            e.exports = function() {
                return !0
            }
        }
    }
]);