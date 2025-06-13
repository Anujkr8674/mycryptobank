"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "71e99990-cf2d-5a33-b7c2-15d3438959a1")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [584], {
        nn0X: (e, t, n) => {
            n.d(t, {
                DP: () => d,
                oP: () => v,
                uE: () => h
            });
            var r = n("DTvD"),
                u = n("NsjG"),
                a = n("/Q1k"),
                i = function(e) {
                    return e.cookies || {}
                },
                o = function() {
                    var e = (0, r.useRef)(null),
                        t = (0, a.wA)();
                    return e.current = (0, a.d4)(i), {
                        cookies: e.current,
                        saveCookie: (0, r.useCallback)((function(n, r) {
                            var u = "function" === typeof r ? r(e.current[n]) : r;
                            t.cookies.save({
                                key: n,
                                value: u
                            })
                        }), [])
                    }
                },
                c = "dark",
                s = "light",
                l = "theme",
                f = "shouldResetTradingView",
                d = function() {
                    var e = o(),
                        t = e.cookies,
                        n = e.saveCookie,
                        a = (0, r.useCallback)((function() {
                            return u.IG.getItem(f, 0) || 0
                        }), []),
                        i = (0, r.useCallback)((function() {
                            var e = a();
                            u.IG.setItem(f, e + 1)
                        }), [a]);
                    return {
                        isLight: t.theme !== c,
                        shouldResetTradingViewKey: f,
                        getThemeCounter: a,
                        incThemeCounter: i,
                        toggleTheme: (0, r.useCallback)((function() {
                            n(l, (function(e) {
                                return e !== s ? s : c
                            })), i()
                        }), [i])
                    }
                },
                m = "userPreferredCurrency",
                v = function() {
                    var e = o(),
                        t = e.cookies,
                        n = e.saveCookie;
                    return {
                        cachePreferFiat: t[m],
                        setCacheFiat: (0, r.useCallback)((function(e) {
                            n(m, e)
                        }), [])
                    }
                },
                h = function() {
                    return v().cachePreferFiat
                }
        },
        "28x1": (e, t, n) => {
            n.d(t, {
                K: () => w
            });
            var r = n("ezuS"),
                u = n("gZfF"),
                a = n("TrCV"),
                i = n("O94r"),
                o = n.n(i),
                c = n("nsO7"),
                s = n("DTvD"),
                l = n.n(s),
                f = n("Q755"),
                d = n("RGyw"),
                m = n("BK7R"),
                v = n("QUKP"),
                h = n("VP0d"),
                p = function(e, t) {
                    if (String.prototype.padStart) return String.prototype.padStart.call(e, t, "0");
                    if (e > Math.pow(10, t)) return e;
                    for (var n = "0"; n.length < t;) n = "0".concat(n);
                    return "".concat(n).concat(e).slice(-t)
                };

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if ("number" !== typeof e) throw new TypeError("Expected a number");
                return {
                    days: p(Math.trunc(e / 864e5), t),
                    hours: p(Math.trunc(e / 36e5) % 24, t),
                    minutes: p(Math.trunc(e / 6e4) % 60, t),
                    seconds: p(Math.trunc(e / 1e3) % 60, t),
                    milliseconds: p(Math.trunc(e) % 1e3, t)
                }
            }
            var T = (null === window || void 0 === window ? void 0 : window.requestAnimationFrame) || (null === window || void 0 === window ? void 0 : window.webkitRequestAnimationFrame),
                k = (null === window || void 0 === window ? void 0 : window.cancelAnimationFrame) || function(e) {
                    clearTimeout(e)
                },
                A = n("mQvl"),
                w = function(e) {
                    var t = e.duration,
                        n = e.interval,
                        i = void 0 === n ? 1e3 : n,
                        p = e.timeLeftToComplete,
                        w = void 0 === p ? 0 : p,
                        I = e.onCompleted,
                        g = e.format,
                        y = void 0 === g ? [] : g,
                        D = e.className,
                        b = e.variant,
                        P = void 0 === b ? "primary" : b,
                        N = e.simplified,
                        S = void 0 !== N && N,
                        F = e.timeClass,
                        O = (0, A.B)().t,
                        R = (0, s.useState)(!1),
                        L = R[0],
                        V = R[1],
                        _ = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6e4,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                                n = arguments.length > 2 ? arguments[2] : void 0,
                                r = (0, h.A)(l().useState(0), 2),
                                u = r[0],
                                a = r[1],
                                i = l().useRef({}),
                                o = function(e) {
                                    i.current.started || (i.current.started = e, i.current.lastInterval = e);
                                    var n = Math.min(t, i.current.timeLeft || 1 / 0);
                                    e - i.current.lastInterval >= n && (i.current.lastInterval += n, a((function(e) {
                                        return i.current.timeLeft = e - n, i.current.timeLeft
                                    }))), e - i.current.started < i.current.timeToCount ? i.current.requestId = T(o) : (i.current = {}, a(0))
                                },
                                c = l().useCallback((function(t) {
                                    k(i.current.requestId);
                                    var n = void 0 !== t ? t : e;
                                    i.current.started = null, i.current.lastInterval = null, i.current.timeToCount = n, i.current.requestId = T(o), a(n)
                                }), []),
                                f = l().useCallback((function() {
                                    k(i.current.requestId), i.current.started = null, i.current.lastInterval = null, i.current.timeToCount = i.current.timeLeft
                                }), []),
                                d = l().useCallback((function() {
                                    !i.current.started && i.current.timeLeft > 0 && (k(i.current.requestId), i.current.requestId = T(o))
                                }), []),
                                p = l().useCallback((function() {
                                    i.current.timeLeft && (k(i.current.requestId), i.current = {}, a(0))
                                }), []),
                                A = l().useMemo((function() {
                                    return {
                                        start: c,
                                        pause: f,
                                        resume: d,
                                        reset: p
                                    }
                                }), []);
                            return (0, s.useEffect)((function() {
                                n && c()
                            }), [n]), (0, s.useEffect)((function() {
                                return function() {
                                    return k(i.current.requestId)
                                }
                            }), []), (0, v.A)((0, m.A)({
                                timeLeft: u
                            }, C(u, 2)), {
                                actions: A
                            })
                        }(t, i, !1),
                        E = _.timeLeft,
                        j = _.actions.start,
                        q = (0, u.A)(_, ["timeLeft", "actions"]),
                        B = y.length > 0 ? y : E < 864e5 ? ["hours", "minutes", "seconds"] : ["days", "hours", "minutes"];
                    (0, f.A)((function() {
                        j(), V(!0)
                    })), (0, s.useEffect)((function() {
                        E === w && L && I && I()
                    }), [E]);
                    return (0, a.jsxs)(d.A, {
                        className: o()("TimeCounter", D, (0, r.A)({}, "TimeCounter--".concat(P), P)),
                        children: [S && B.map((function(e) {
                            return "".concat(q[e]).concat(O((0, c.capitalize)(e).charAt(0)))
                        })).map((function(e, t) {
                            return (0, a.jsxs)(s.Fragment, {
                                children: [e, t < B.length - 1 && (0, a.jsx)(d.A, {
                                    as: "span",
                                    className: "bn-span",
                                    children: ":"
                                })]
                            }, t)
                        })), !S && B.map((function(e, t) {
                            return (0, a.jsxs)(d.A, {
                                className: "TimeCounter-wrap",
                                children: [(0, a.jsx)(d.A, {
                                    className: o()("TimeCounter-value", F),
                                    children: q[e]
                                }), (0, a.jsx)(d.A, {
                                    className: "TimeCounter-unit",
                                    children: O((0, c.capitalize)(e))
                                })]
                            }, t)
                        }))]
                    })
                }
        },
        GfFo: (e, t, n) => {
            n.d(t, {
                HT: () => h,
                QN: () => v,
                xM: () => m,
                Bk: () => p,
                YN: () => C
            });
            var r = n("BK7R"),
                u = n("QUKP"),
                a = n("DTvD"),
                i = n("Q755"),
                o = n("fLtG"),
                c = function(e) {
                    return function(t, n) {
                        return (0, o.u)(e, t, n)
                    }
                },
                s = c("webClick"),
                l = c("pageView"),
                f = c("ModuleView"),
                d = (c("pageQuit"), n("brFs")),
                m = function(e) {
                    var t = (0, d.O)();
                    (0, i.A)((function() {
                        l((0, u.A)((0, r.A)({}, e), {
                            pageName: t
                        }))
                    }))
                },
                v = function(e) {
                    var t = (0, d.O)();
                    (0, i.A)((function() {
                        f((0, u.A)((0, r.A)({}, e), {
                            pageName: t
                        }))
                    }))
                },
                h = function(e) {
                    return function() {
                        s(e)
                    }
                },
                p = function(e, t) {
                    var n = (0, d.O)();
                    return (0, a.useCallback)((function() {
                        (0, o.u)(e, (0, u.A)((0, r.A)({}, t), {
                            pageName: n
                        }))
                    }), [e, t, n, o.u])
                },
                C = function(e) {
                    var t = (0, d.O)();
                    return (0, a.useCallback)((function(n) {
                        (0, o.u)(e, (0, u.A)((0, r.A)({}, n), {
                            pageName: t
                        }))
                    }), [e, t, o.u])
                }
        },
        YZ1P: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            var r;
            ! function(e) {
                e.Onboarding = "ONBOARDING_TASKS", e.Daily = "DAILY_TASKS", e.Other = "OTHER_TASKS"
            }(r || (r = {}))
        },
        Yhem: (e, t, n) => {
            n.d(t, {
                u: () => u
            });
            var r = {
                    BUY_WITH_CARD: {
                        key: "Deposit-BuyWithCard",
                        defaultValue: "Fiat Deposit (Card)"
                    },
                    BUY_WITH_THIRD_PARTY: {
                        key: "Deposit-BuyWithThirdParty",
                        defaultValue: "Fiat Deposit (Third Party)"
                    },
                    C2C: {
                        key: "Deposit-C2C",
                        defaultValue: "P2P"
                    },
                    FIAT_DEPOSIT: {
                        key: "Deposit-Fiat",
                        defaultValue: "Fiat Deposit (Bank Transfer)"
                    },
                    CAPITAL_DEPOSIT: {
                        key: "Deposit-Crypto",
                        defaultValue: "Crypto Deposit"
                    }
                },
                u = function(e, t) {
                    var n = r[e];
                    return n ? t(n.key, n.defaultValue) : e
                }
        },
        eheR: (e, t, n) => {
            n.d(t, {
                E: () => r,
                jr: () => u.j
            });
            var r, u = n("YZ1P");
            ! function(e) {
                e.Voucher = "VOUCHER", e.Points = "POINTS"
            }(r || (r = {}));
            n("Yhem")
        }
    }
]);
//# debugId=71e99990-cf2d-5a33-b7c2-15d3438959a1