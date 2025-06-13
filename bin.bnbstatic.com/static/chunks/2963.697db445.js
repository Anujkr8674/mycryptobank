"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2963], {
        gxIC: (e, t, r) => {
            r.d(t, {
                dM: () => i
            });
            var n = r("S+0I"),
                a = r("66mo"),
                s = r.n(a),
                o = r("VA12"),
                i = (function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/user-setting/get-pnl-price-basis");
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.get)("/bapi/futures/v1/private/future/user-setting/get-pnl-price-basis-denominator");
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e(t, r) {
                        var n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/user-setting/update-pnl-price-basis", t, r);
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
                    var e = (0, n._)(s().mark((function e(t, r) {
                        var n;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/user-setting/update-pnl-price-basis-denominator", t, r);
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
                    var e = (0, n._)(s().mark((function e(t) {
                        var r;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/public/future/landing/page/header-activity", t);
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
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/user-setting/get-unit");
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/delivery/user-setting/get-unit");
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
                    })))
                }(), function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, (0, o.post)("/bapi/futures/v1/private/future/user-setting/get-account-credit-config");
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
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
        },
        "8sdr": (e, t, r) => {
            r.d(t, {
                AF: () => u,
                E8: () => l,
                Kq: () => p,
                f0: () => v,
                u_: () => c
            });
            var n = r("S+0I"),
                a = r("66mo"),
                s = r.n(a),
                o = r("VA12"),
                i = r("XqCI"),
                c = function(e) {
                    return (0, o.post)("/bapi/margin/v1/private/margin/portfolio/open-account", void 0, e)
                },
                l = function() {
                    return (0, o.post)("/bapi/margin/v1/private/margin/portfolio/close-account")
                },
                u = function() {
                    return (0, o.get)("/bapi/margin/v1/private/margin/portfolio/account")
                },
                p = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.get)("/bapi/margin/v1/private/margin/portfolio/account-config?".concat((0, i.E2)(t))));
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
                v = function() {
                    var e = (0, n._)(s().mark((function e(t) {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.post)("/bapi/margin/v1/private/margin/portfolio/account-config", t));
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
            (function() {
                var e = (0, n._)(s().mark((function e() {
                    var t;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, o.get)("/bapi/margin/v1/private/margin/portfolio/account-indicate");
                            case 3:
                                return t = e.sent, e.abrupt("return", t);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", {
                                    success: !1,
                                    data: null
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            })(),
            function() {
                var e = (0, n._)(s().mark((function e(t) {
                    var r;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, (0, o.post)("/bapi/margin/v1/private/margin/negative-convert-list", t);
                            case 3:
                                return r = e.sent, e.abrupt("return", r);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", {
                                    success: !1,
                                    data: {
                                        rows: [],
                                        total: 0
                                    }
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))
            }()
        },
        X6De: (e, t, r) => {
            r.d(t, {
                tA: () => i
            });
            var n = r("S+0I"),
                a = r("66mo"),
                s = r.n(a),
                o = r("VA12"),
                i = function() {
                    var e = (0, n._)(s().mark((function e() {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/margin/v1/private/margin/portfolio/repay-negative-balance");
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
                }();
            (function() {
                var e = (0, n._)(s().mark((function e(t) {
                    var r;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.post)("/bapi/margin/v1/private/margin/portfolio/repay-negative-balance-asset", {
                                    asset: t
                                });
                            case 4:
                                r = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), r = {
                                    success: !1,
                                    data: null,
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                    code: ""
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
            })(),
            function() {
                var e = (0, n._)(s().mark((function e() {
                    var t;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 1, e.next = 4, (0, o.post)("/bapi/margin/v1/private/margin/portfolio/fund-collection");
                            case 4:
                                t = e.sent, e.next = 10;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e.catch(1), t = {
                                    success: !1,
                                    data: null,
                                    message: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message,
                                    code: ""
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
            }()
        },
        RQP0: (e, t, r) => {
            r.d(t, {
                p: () => h
            });
            var n = r("S+0I"),
                a = r("hrAD"),
                s = r("66mo"),
                o = r.n(s),
                i = r("kU6N"),
                c = r("c8iC"),
                l = {
                    DIALOG: "dialog",
                    TOAST: "toast"
                };

            function u(e) {
                var t = e.url,
                    r = e.res,
                    n = e.options;
                console.groupCollapsed("Response Interceptor Matched ".concat(t)), console.log("Request url is ".concat(t)), console.log("Res is ".concat(JSON.stringify(r))), console.log("Api options is ".concat(JSON.stringify(n))), console.groupEnd()
            }

            function p(e, t) {
                return e === t || Boolean(-1 !== (null === e || void 0 === e ? void 0 : e.indexOf(t))) || new RegExp(t).test(e)
            }
            var v = r("O13v");
            var d, f = {
                    "err-http-400": "Invalid request, please check whether the input parameters meet the specifications before request again",
                    "err-http-401": "Haven't logged in yet, please log in first",
                    "err-http-403": "Sorry, you have no permission to access this service",
                    "err-http-404": "The visited address doesn\u2019t seem to exist",
                    "err-http-405": "Service request failed, please report to customer service or other staff",
                    "err-http-418": "Your operations are too frequent. Please try again later. Additionally, if you are using a proxy service, consider switching the proxy.",
                    "err-http-429": "Your operations are too frequent. Please try again later. Additionally, if you are using a proxy service, consider switching the proxy.",
                    "err-http-500": "Something is wrong with the server, please try to request a moment later",
                    "err-http-502": "Server is busy, please try to request a moment later",
                    "err-http-503": "System is busy, please try again later",
                    "err-http-504": "System is busy, please try again later",
                    "err-http-default": "System is busy, please try again later",
                    "err-http-timeout": "Request timed out, please check your network status",
                    OK: "OK",
                    "dialog-i-understand": "I understand",
                    "default-error-message": "System busy, please try again later."
                },
                m = !1,
                g = function(e) {
                    var t = e.i18nHost,
                        r = e.language;
                    return new Promise((function(e) {
                        m && e(f), d ? d.then((function(t) {
                            return e(t)
                        })).catch((function() {
                            d = null, e(f)
                        })) : null === (d = (0, v.TU)({
                            basePath: t,
                            locale: r,
                            namespace: "universal",
                            fallback: "en"
                        })) || void 0 === d || d.then((function(t) {
                            m = !0, f = t, e(t)
                        })).catch((function(t) {
                            console.error(t), d = null, e(f)
                        }))
                    }))
                },
                h = l;

            function b(e) {
                var t = e.res,
                    r = e.i18n,
                    n = e.defaultMsg,
                    s = e.toastOpts,
                    o = e.enableErrorDialogOnly,
                    u = t || {},
                    p = u.messageDetail,
                    v = u.message,
                    d = u.code,
                    f = p || {},
                    m = f.type,
                    g = f.title,
                    h = f.linkUrl,
                    b = f.linkTitle,
                    _ = v || n || r["default-error-message"] || "System busy, please try again later.";
                m !== l.TOAST && m || o || function(e) {
                    var t = e.message,
                        r = e.title,
                        n = e.toastOpts;
                    (0, i.rG)(t, (0, a._)({
                        header: r,
                        variant: "error"
                    }, n))
                }({
                    message: _,
                    title: g,
                    toastOpts: s
                }), m === l.DIALOG && function(e) {
                    var t = e.message,
                        r = e.title,
                        n = e.linkUrl,
                        a = e.linkTitle,
                        s = e.i18n,
                        o = e.code,
                        i = e.closeAble,
                        l = void 0 === i || i;
                    (0, c.w)({
                        message: t,
                        title: r,
                        okText: s["dialog-i-understand"] || "I understand",
                        cancelText: s["dialog-Cancel"] || "Cancel",
                        linkTitle: a,
                        linkUrl: n,
                        closeAble: l,
                        code: o
                    })
                }({
                    message: _,
                    linkUrl: h,
                    linkTitle: b,
                    i18n: r,
                    title: g,
                    code: d
                })
            }! function() {
                var e = (0, n._)(o().mark((function e(t) {
                    var r, n, s, i, c, l, v, d, f, m, h, _, x, y, w, E, k, A, D, C, z, O, R, M, N, S, P, T;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.response, n = t.apiOpts, s = t.globalOpts, "undefined" !== typeof window) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", r);
                            case 4:
                                if ("function" !== typeof(null === r || void 0 === r ? void 0 : r.clone)) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 7, null === (i = null === r || void 0 === r ? void 0 : r.clone()) || void 0 === i ? void 0 : i.json();
                            case 7:
                                e.t0 = e.sent, e.next = 11;
                                break;
                            case 10:
                                e.t0 = {};
                            case 11:
                                if (l = e.t0, v = l.code, void 0 !== (d = l.success) && !0 !== d) {
                                    e.next = 15;
                                    break
                                }
                                return e.abrupt("return");
                            case 15:
                                f = {
                                    globalOpts: s = s || {},
                                    apiOpts: n = n || {},
                                    res: l,
                                    response: r
                                }, m = !0, h = !1, _ = void 0, e.prev = 19, x = (s.plugins || [])[Symbol.iterator]();
                            case 21:
                                if (m = (y = x.next()).done) {
                                    e.next = 30;
                                    break
                                }
                                if (w = y.value, !f.skipAllPlugins) {
                                    e.next = 25;
                                    break
                                }
                                return e.abrupt("break", 30);
                            case 25:
                                return e.next = 27, null === w || void 0 === w ? void 0 : w.apply(f);
                            case 27:
                                m = !0, e.next = 21;
                                break;
                            case 30:
                                e.next = 36;
                                break;
                            case 32:
                                e.prev = 32, e.t1 = e.catch(19), h = !0, _ = e.t1;
                            case 36:
                                e.prev = 36, e.prev = 37, m || null == x.return || x.return();
                            case 39:
                                if (e.prev = 39, !h) {
                                    e.next = 42;
                                    break
                                }
                                throw _;
                            case 42:
                                return e.finish(39);
                            case 43:
                                return e.finish(36);
                            case 44:
                                if (E = (null === (c = s.excludeErrorCode || []) || void 0 === c ? void 0 : c.concat(n.excludeErrorCode || [])) || [], k = (0, a._)({}, s.customCode, n.customCode), A = n.enableErrorMsgIntercept, D = n.enableErrorDialogOnly, C = s.debug, z = void 0 !== C && C, O = s.enable, R = void 0 !== O && O, M = s.i18nHost, N = s.language, S = s.toastOpts, void 0 === A ? R : A) {
                                    e.next = 51;
                                    break
                                }
                                return e.abrupt("return");
                            case 51:
                                if (!(null === E || void 0 === E ? void 0 : E.some((function(e) {
                                        return p(v, e)
                                    })))) {
                                    e.next = 53;
                                    break
                                }
                                return e.abrupt("return");
                            case 53:
                                if (P = !1, Object.keys(k).forEach((function(e) {
                                        var t;
                                        p(v, e) && (P = !0, null === k || void 0 === k || null === (t = k[e]) || void 0 === t || t.call(k, l))
                                    })), !P) {
                                    e.next = 57;
                                    break
                                }
                                return e.abrupt("return");
                            case 57:
                                return e.prev = 57, z && u({
                                    url: r.url,
                                    res: l,
                                    options: n
                                }), e.next = 61, g({
                                    i18nHost: M,
                                    language: N
                                });
                            case 61:
                                T = e.sent, b({
                                    res: l,
                                    i18n: T,
                                    defaultMsg: n.defaultMsg || s.defaultMsg || "",
                                    toastOpts: S,
                                    enableErrorDialogOnly: D
                                }), e.next = 68;
                                break;
                            case 65:
                                e.prev = 65, e.t2 = e.catch(57), console.error("http error msg interceptor error", e.t2);
                            case 68:
                                return e.abrupt("return", r);
                            case 69:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [19, 32, 36, 44],
                        [37, , 39, 43],
                        [57, 65]
                    ])
                })))
            }()
        },
        fsjv: (e, t, r) => {
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
                    d: "M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        Oug7: (e, t, r) => {
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
                    d: "M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        qdhY: (e, t, r) => {
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
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M18 8l4 4 4-4-4-4-4 4z",
                    fill: "url(#general-success_svg__paint0_linear_55048_24236)"
                }), s().createElement("path", {
                    d: "M85 76l3 3 3-3-3-3-3 3z",
                    fill: "url(#general-success_svg__paint1_linear_55048_24236)"
                }), s().createElement("path", {
                    d: "M86 20l2 2 2-2-2-2-2 2z",
                    fill: "url(#general-success_svg__paint2_linear_55048_24236)"
                }), s().createElement("path", {
                    d: "M2 47l3 3 3-3-3-3-3 3z",
                    fill: "url(#general-success_svg__paint3_linear_55048_24236)"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 88c22.091 0 40-17.91 40-40C88 25.907 70.091 8 48 8S8 25.908 8 48c0 22.09 17.909 40 40 40zM31 48.334l12.475 12.664L64 40.242l-4.188-4.242-16.337 16.547-8.317-8.422L31 48.334z",
                    fill: "url(#general-success_svg__paint4_linear_55048_24236)"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 19c16.016 0 29 12.983 29 29 0 16.016-12.984 29-29 29S19 64.016 19 48c0-16.017 12.984-29 29-29zM31 48.335l12.475 12.664L64 40.242l-4.188-4.242-16.337 16.547-8.317-8.422L31 48.334z",
                    fill: "url(#general-success_svg__paint5_linear_55048_24236)"
                }), s().createElement("defs", null, s().createElement("linearGradient", {
                    id: "general-success_svg__paint0_linear_55048_24236",
                    x1: 22,
                    y1: 11.999,
                    x2: 22,
                    y2: 4,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#02C076"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), s().createElement("linearGradient", {
                    id: "general-success_svg__paint1_linear_55048_24236",
                    x1: 88,
                    y1: 78.999,
                    x2: 88,
                    y2: 72.999,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#02C076"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), s().createElement("linearGradient", {
                    id: "general-success_svg__paint2_linear_55048_24236",
                    x1: 88,
                    y1: 22,
                    x2: 88,
                    y2: 18,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#02C076"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), s().createElement("linearGradient", {
                    id: "general-success_svg__paint3_linear_55048_24236",
                    x1: 5,
                    y1: 49.999,
                    x2: 5,
                    y2: 43.999,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#02C076"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), s().createElement("linearGradient", {
                    id: "general-success_svg__paint4_linear_55048_24236",
                    x1: 8,
                    y1: 47.999,
                    x2: 88,
                    y2: 47.999,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#28D294",
                    stopOpacity: 0
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), s().createElement("linearGradient", {
                    id: "general-success_svg__paint5_linear_55048_24236",
                    x1: 48,
                    y1: 76.999,
                    x2: 48,
                    y2: 19,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#02C076"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                }))))
            }
        },
        hcwF: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("qqbu");
            const i = function(e) {
                return s().createElement(o.A, (0, n.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), s().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.123 88c22.091 0 40-17.908 40-40 0-22.09-17.909-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zM55.9 35.98l4.243 4.243L52.366 48l7.778 7.778-4.243 4.243-7.778-7.779-7.778 7.779-4.243-4.243 7.779-7.778-7.779-7.778 4.243-4.243 7.778 7.778 7.778-7.778z",
                    fill: "#FF375B"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.123 77c16.016 0 29-12.983 29-29 0-16.015-12.984-29-29-29-16.017 0-29 12.985-29 29 0 16.017 12.983 29 29 29zM55.9 35.98l4.243 4.243L52.366 48l7.778 7.778-4.243 4.243-7.778-7.779-7.778 7.779-4.243-4.243 7.779-7.778-7.779-7.778 4.243-4.243 7.778 7.778 7.778-7.778z",
                    fill: "#FF375B"
                }))
            }
        },
        xj6P: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("qqbu");
            const i = function(e) {
                return s().createElement(o.A, (0, n.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), s().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.096 88c22.091 0 40-17.908 40-40 0-22.09-17.909-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm12.312-50.597l4.243 4.242-19.799 19.8-4.243-4.243-7.07-7.071 4.242-4.243 7.071 7.071 15.556-15.556z",
                    fill: "#2EE39D"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.096 77c16.016 0 29-12.983 29-29 0-16.015-12.984-29-29-29-16.017 0-29 12.985-29 29 0 16.017 12.983 29 29 29zm12.312-39.597l4.243 4.242-19.799 19.8-4.243-4.243-7.07-7.071 4.242-4.243 7.071 7.071 15.556-15.556z",
                    fill: "#2EE39D"
                }))
            }
        },
        pYeY: (e, t, r) => {
            r.d(t, {
                Ay: () => n
            });
            const n = r("puuf").A
        },
        "5uUu": (e, t, r) => {
            r.d(t, {
                A: () => g
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("o85P"),
                i = r("048I"),
                c = r("xqbL"),
                l = r.n(c),
                u = r("pYeY"),
                p = r("/vf/"),
                v = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                d = function(e) {
                    var t = (0, p.r)().prefixCls,
                        r = l()("".concat(t, "-spinner__nezha"), e.className);
                    return s().createElement(u.Ay, (0, n.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: r
                    }), s().createElement(u.Ay, {
                        className: "nezha-line",
                        style: v(1)
                    }), s().createElement(u.Ay, {
                        className: "nezha-line",
                        style: v(2)
                    }), s().createElement(u.Ay, {
                        className: "nezha-line",
                        style: v(3)
                    }), s().createElement(u.Ay, {
                        className: "nezha-line",
                        style: v(4)
                    }))
                };
            d.displayName = "Spinner";
            const f = d;
            var m = (0, a.forwardRef)((function(e, t) {
                var r, c = e.variant,
                    v = void 0 === c ? "primary" : c,
                    d = e.sz,
                    m = void 0 === d ? "middle" : d,
                    g = e.inactive,
                    h = e.loading,
                    b = e.onClick,
                    _ = e.subLine,
                    x = e.children,
                    y = e.textVariant,
                    w = void 0 === y ? "text" === v ? "yellow" : "black" : y,
                    E = e.iconVariant,
                    k = void 0 === E ? "line" : E,
                    A = (e["aria-label"], (0, n.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"])),
                    D = (0, p.r)(),
                    C = D.prefixCls,
                    z = D.isRTL,
                    O = "".concat(C, "-button"),
                    R = "text" === v || "info" === v,
                    M = "icon" === v,
                    N = l()(O, ((r = {})["".concat(O, "-rtl")] = !!z, r["".concat(O, "__").concat(v)] = !!v, r["".concat(O, "__").concat(v, "__").concat(w)] = R && !!w, r["".concat(O, "__").concat(v, "__").concat(k)] = M && !!k, r["data-size-".concat(m)] = !!m, r["data-size-".concat(m, "-two-line")] = !!m && !!_, r["data-two-line"] = !!_, r.inactive = !!g, r), e.className),
                    S = !g && "function" === typeof b,
                    P = i.lq ? "none" : e.type,
                    T = S ? b : void 0,
                    q = (0, a.useMemo)((function() {
                        return h ? s().createElement(f, null) : s().createElement(s().Fragment, null, x, _ && s().createElement(u.Ay, null, _))
                    }), [x, a.useMemo, h]),
                    I = {
                        "aria-disabled": g || h ? "true" : void 0,
                        "aria-busy": h ? "true" : void 0
                    };
                return s().createElement(o.A, (0, n.__assign)({
                    key: h ? "loading" : "content"
                }, I, A, {
                    children: q,
                    ref: t,
                    type: P,
                    className: N,
                    onClick: T
                }))
            }));
            m.displayName = "Button";
            const g = m
        },
        "/vf/": (e, t, r) => {
            r.d(t, {
                r: () => s
            });
            r("wIZF");
            var n = r("DTvD"),
                a = r("qZra"),
                s = function() {
                    return (0, n.useContext)(a.A)
                }
        },
        YD0E: (e, t, r) => {
            r.d(t, {
                A: () => b
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("xqbL"),
                i = r.n(o),
                c = r("pYeY"),
                l = r("hTvQ"),
                u = r.n(l),
                p = r("048I"),
                v = r("/vf/"),
                d = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                f = function(e) {
                    var t = e.placement,
                        r = e.offset,
                        n = e.isArrow,
                        a = t.split("-"),
                        s = a[0],
                        o = a[1],
                        i = o ? 0 : "50%",
                        c = n ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[s] : "",
                        l = n ? r - Math.floor(3) : "100%",
                        u = o ? n ? 9 : 0 : "50%";
                    return ("end" === o ? {
                        top: {
                            transform: "translate(-".concat(i, ", 0)").concat(c),
                            bottom: l,
                            right: u
                        },
                        left: {
                            transform: "translate(0, -".concat(i, ")").concat(c),
                            right: l,
                            bottom: u
                        },
                        right: {
                            transform: "translate(0, -".concat(i, ")").concat(c),
                            left: l,
                            bottom: u
                        },
                        bottom: {
                            transform: "translate(-".concat(i, ", 0)").concat(c),
                            top: l,
                            right: u
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(i, ", 0)").concat(c),
                            bottom: l,
                            left: u
                        },
                        left: {
                            transform: "translate(0, -".concat(i, ")").concat(c),
                            right: l,
                            top: u
                        },
                        right: {
                            transform: "translate(0, -".concat(i, ")").concat(c),
                            left: l,
                            top: u
                        },
                        bottom: {
                            transform: "translate(-".concat(i, ", 0)").concat(c),
                            top: l,
                            left: u
                        }
                    })[s]
                },
                m = function(e) {
                    var t, r, a = e.arrow,
                        o = e.shadow,
                        l = e.isFloat,
                        m = e.offset,
                        g = void 0 === m ? 6 : m,
                        h = e.variant,
                        b = void 0 === h ? "primary" : h,
                        _ = e.placement,
                        x = void 0 === _ ? "top" : _,
                        y = e.enablePortal,
                        w = e.portalNode,
                        E = e.style,
                        k = e.radius,
                        A = e.bubbleFontSize,
                        D = void 0 === A ? 14 : A,
                        C = (0, n.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        z = (0, v.r)().prefixCls,
                        O = "".concat(z, "-bubble"),
                        R = i()(O, ((t = {})["".concat(O, "__").concat(b)] = !!b, t["data-shadow"] = !!o, t["data-font-".concat(D)] = !!D, t), e.className);
                    g = a ? Math.max(g, 4) : g;
                    var M = x.split("-")[0],
                        N = l ? f({
                            offset: g,
                            placement: x
                        }) : {},
                        S = f({
                            offset: g,
                            placement: x,
                            isArrow: !0
                        }),
                        P = ((r = {})[d[M]] = g, r.borderRadius = k, r),
                        T = s().createElement(c.Ay, (0, n.__assign)({}, C, {
                            className: R,
                            style: (0, n.__assign)((0, n.__assign)({}, N), E)
                        }), !!a && s().createElement(c.Ay, {
                            className: "".concat(O, "-arrow"),
                            style: S
                        }), !!a && !!o && s().createElement(c.Ay, {
                            className: "".concat(O, "-arrow-shadow"),
                            style: S
                        }), s().createElement(c.Ay, {
                            style: P,
                            className: "".concat(O, "-content"),
                            children: e.children
                        }));
                    return !p.lq && y ? u().createPortal(T, w instanceof HTMLElement ? w : document.body) : T
                };
            m.displayName = "Bubble";
            const g = m;
            var h = function(e) {
                var t, r = e.label,
                    o = e.arrow,
                    l = e.size,
                    u = void 0 === l ? "middle" : l,
                    p = e.placement,
                    d = void 0 === p ? "right" : p,
                    f = e.variant,
                    m = void 0 === f ? "primary" : f,
                    h = e.labelIcon,
                    b = e.offset,
                    _ = e.cornerPosition,
                    x = e.iconPosition,
                    y = void 0 === x ? "start" : x,
                    w = e.radius,
                    E = (0, n.__rest)(e, ["label", "arrow", "size", "placement", "variant", "labelIcon", "offset", "cornerPosition", "iconPosition", "radius"]),
                    k = (0, v.r)(),
                    A = k.prefixCls,
                    D = k.isRTL,
                    C = "".concat(A, "-tag"),
                    z = i()("".concat(C, "-wrap"), e.className),
                    O = {
                        variant: m,
                        arrow: o,
                        placement: d,
                        className: i()(C, ((t = {})["data-size-".concat(u)] = !!u, t["data-corner-".concat(_)] = !!_, t)),
                        offset: _ || !e.children ? 0 : b,
                        radius: w
                    },
                    R = (0, a.useMemo)((function() {
                        if (!h) return r;
                        var e = "end" !== y === !D;
                        return s().createElement(s().Fragment, null, e && h, r, !e && h)
                    }), [r, h, y, D]),
                    M = {
                        "aria-label": "".concat(m, " tag")
                    };
                return s().createElement(c.Ay, (0, n.__assign)({}, M, E, {
                    className: z
                }), /^left/.test(d) && s().createElement(g, (0, n.__assign)({}, O), R), e.children, /^right/.test(d) && s().createElement(g, (0, n.__assign)({}, O), R))
            };
            h.displayName = "Tag";
            const b = h
        },
        "1Gwf": (e, t, r) => {
            r.d(t, {
                A: () => f
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                s = r.n(a),
                o = r("xqbL"),
                i = r.n(o),
                c = r("unLX"),
                l = r("0nCq"),
                u = function(e) {
                    var t = e.path,
                        r = e.pathPrefix,
                        n = e.subDomain,
                        a = e.isRegionMode,
                        s = e.level2Domain,
                        o = e.lang;
                    try {
                        var i = "https://binance.com",
                            c = new URL(t, i),
                            l = function(e) {
                                return e.replace(/^\/+|\/+$/g, "")
                            }(r),
                            u = "/".concat(l).concat(c.pathname).replace(/\/+/g, "/"),
                            p = new URL(u, i);
                        c.searchParams.forEach((function(e, t) {
                            p.searchParams.set(t, e)
                        })), a && p.searchParams.set("hl", o || "en");
                        var v = p.pathname + p.search + c.hash;
                        return n && (v = "https://".concat(n, ".").concat(s).concat(v)), v
                    } catch (d) {
                        return console.error("Error generating href:", d), t
                    }
                },
                p = (r("kPx0"), /^[a-zA-Z][a-zA-Z\d+\-.]*?:/),
                v = function(e) {
                    return p.test(e)
                };
            var d = s().forwardRef((function(e, t) {
                var r = e.path,
                    s = e.subDomain,
                    o = e.className,
                    p = (0, n.__rest)(e, ["path", "subDomain", "className"]),
                    d = (0, c.r)().prefixCls,
                    f = (0, l.x)(),
                    m = f.pathPrefix,
                    g = f.isRegionMode,
                    h = f.level2Domain,
                    b = f.lang,
                    _ = "".concat(d, "-balink"),
                    x = i()(_, o);
                if (!m) throw new Error("pathPrefix is required in Provider");
                if (v(r)) throw new Error("path should be relative URL");
                if (s && !h) throw new Error("level2Domain is required in Provider when subDomain is provided");
                var y = {
                    role: e.role || "link"
                };
                return (0, a.createElement)("a", (0, n.__assign)((0, n.__assign)({
                    className: x,
                    href: u({
                        path: r,
                        pathPrefix: m,
                        subDomain: s,
                        isRegionMode: g,
                        level2Domain: h,
                        lang: b
                    }),
                    ref: t
                }, y), p))
            }));
            d.displayName = "BALink";
            const f = d
        }
    }
]);