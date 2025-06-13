"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1666, 2871, 2790], {
        yVd9: (e, r, t) => {
            t.d(r, {
                bi: () => s,
                lX: () => o
            });
            var n = t("S+0I"),
                a = t("66mo"),
                u = t.n(a),
                c = t("VA12"),
                s = function() {
                    return (0, c.post)("/bapi/futures/v1/private/future/spot-copy-trade/lead-portfolio/lead-info")
                },
                o = (function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, c.post)("/bapi/futures/v1/private/future/spot-copy-trade/account/user-summary-info");
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
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        success: !1
                                    }, e.prev = 1, e.next = 4, (0, c.post)("/bapi/futures/v1/private/future/copy-trade/account/get-user-ct-balance");
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", r);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        success: !1
                                    }, e.prev = 1, e.next = 4, (0, c.get)("/bapi/futures/v1/private/future/copy-trade/copy-portfolio/detail-list?ongoing=true");
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", r);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        success: !1
                                    }, e.prev = 1, e.next = 4, (0, c.get)("/bapi/futures/v1/friendly/future/copy-trade/lead-data/positions?portfolioId=".concat(r));
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
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        success: !1
                                    }, e.prev = 1, e.next = 4, (0, c.post)("/bapi/futures/v1/private/future/copy-trade/lead-portfolio/last-lead-info");
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", r);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        success: !1
                                    }, e.prev = 1, e.next = 4, (0, c.post)("/bapi/futures/v1/private/future/spot-copy-trade/lead-portfolio/last-lead-info");
                                case 4:
                                    r = e.sent, e.next = 9;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1);
                                case 9:
                                    return e.abrupt("return", r);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        success: !1
                                    }, e.prev = 1, e.next = 4, (0, c.post)("/bapi/futures/v1/friendly/future/spot-copy-trade/lead-portfolio/get-active-holding-by-page", r);
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
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }())
        },
        EXwb: (e, r, t) => {
            t.d(r, {
                A: () => c,
                e: () => u
            });
            var n = t("DTvD"),
                a = t("ekJu"),
                u = function(e) {
                    var r = (0, a.DP)();
                    return Number(e) >= 0 ? r.colors.t.buy : r.colors.t.sell
                };
            const c = function(e) {
                var r, t, u = e.lastPrice,
                    c = (0, a.DP)(),
                    s = (0, n.useRef)(0),
                    o = s.current,
                    p = (0, n.useState)(),
                    i = p[0],
                    f = p[1];
                return s.current = u, (0, n.useEffect)((function() {
                    var e, r;
                    i || !(null === c || void 0 === c || null === (e = c.colors) || void 0 === e || null === (r = e.t) || void 0 === r ? void 0 : r.primary) ? o < u ? f(c.colors.t.buy) : o > u && f(c.colors.t.sell) : f(c.colors.t.primary)
                }), [u, c.colors.t.buy, c.colors.t.sell, c.colors.t.primary]), i || (null === c || void 0 === c || null === (r = c.colors) || void 0 === r || null === (t = r.t) || void 0 === t ? void 0 : t.primary) || "#fff"
            }
        }
    }
]);