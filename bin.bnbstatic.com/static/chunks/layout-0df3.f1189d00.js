"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cda11571-ec75-5aed-8f7c-fc7db6b178c3")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [735], {
        vv8P: (e, n, t) => {
            t.d(n, {
                v: () => L
            });
            var r = t("sViW"),
                o = t("Pz56"),
                i = t.n(o),
                a = t("UqW6"),
                u = t("DTvD"),
                c = t("Zu1U"),
                s = t("NoXm"),
                l = t("HIvj"),
                d = t("fqkG"),
                v = t("l+4Q"),
                f = t("VP0d"),
                g = t("tEf9"),
                h = t("XaLc"),
                m = t("DKqT");

            function b(e, n, t) {
                var r = (0, f.A)("string" === typeof e ? [n, t] : [e, n], 2),
                    o = r[0],
                    i = r[1];
                (0, h.Z)(function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return m.A.apply(void 0, ["login"].concat((0, g.A)(n)))
                }(o, i))
            }
            var C = t("BxDl"),
                p = t("Y6RH"),
                k = function(e, n) {
                    var t = e.params,
                        o = void 0 === t ? {} : t,
                        a = e.autoLogin,
                        f = void 0 !== a && a,
                        g = e.returnToUrl,
                        h = e.onCallback,
                        m = (0, c.S)().isHybrid,
                        p = (0, C.b)(),
                        k = p.isLoggedIn,
                        A = p.isLoading,
                        w = ((null === l.G || void 0 === l.G ? void 0 : (0, l.G)()) || {}).setUserCenter,
                        L = (0, u.useCallback)((0, r.A)(i().mark((function e() {
                            var t, r, a, u, c;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!m || n) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 3, d.A.ensureLogged();
                                    case 3:
                                        t = e.sent, r = t.logged, a = t.alreadyLogged, (r || a) && (null === s.cachePromiseStore || void 0 === s.cachePromiseStore || null === (u = s.cachePromiseStore.setState) || void 0 === u || u.call(s.cachePromiseStore, "loginIn", !0), null === s.cachePromiseStore || void 0 === s.cachePromiseStore || null === (c = s.cachePromiseStore.setState) || void 0 === c || c.call(s.cachePromiseStore, "loginIn-loading", !1), null === w || void 0 === w || w("loginStatus", {
                                            isLoggedIn: !0,
                                            isLoading: !1
                                        }), h && h()), e.next = 10;
                                        break;
                                    case 9:
                                        b(o, g);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [o, g]);
                    return (0, v.t)(o.registerChannel), (0, u.useEffect)((function() {
                        !f || A || k || L()
                    }), [k, A, L]), {
                        login: L,
                        isLoggedIn: k,
                        isLoading: A
                    }
                },
                A = function(e) {
                    return k(e, !1)
                },
                w = function(e) {
                    return (0, p.U)({
                        onCallback: e.onCallback
                    }), k(e, !0)
                },
                L = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return ((0, a.A)(e.params) ? A : w)(e)
                }
        },
        BxDl: (e, n, t) => {
            t.d(n, {
                b: () => u
            });
            var r = t("DTvD"),
                o = t("HS2I"),
                i = t("HIvj").vz,
                a = (0, r.createContext)({
                    isLoggedIn: !1,
                    isLoading: !0,
                    useNezhaWebviewLogin: !1
                });
            var u = function() {
                var e = (0, r.useContext)(a),
                    n = (null === o.useUserLoginStatus || void 0 === o.useUserLoginStatus ? void 0 : (0, o.useUserLoginStatus)()) || {},
                    t = n.value,
                    u = n.loading,
                    c = i(),
                    s = "boolean" === typeof t ? {
                        isLoggedIn: t,
                        isLoading: u
                    } : c;
                return e.useNezhaWebviewLogin ? e : s
            }
        },
        Y6RH: (e, n, t) => {
            t.d(n, {
                U: () => u
            });
            var r = t("DTvD"),
                o = t("ySFI"),
                i = t("fnDL"),
                a = t("BxDl"),
                u = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).onCallback,
                        n = (0, a.b)(),
                        t = n.isLoggedIn,
                        u = n.isLoading,
                        c = (0, r.useCallback)((function(n, r) {
                            o.lL && !u && !t && r && (e ? e() : window.location.reload())
                        }), [t, u]);
                    (0, i.C)(c)
                }
        },
        DKqT: (e, n, t) => {
            t.d(n, {
                A: () => f
            });
            var r = t("BK7R"),
                o = t("gZfF"),
                i = t("oG/F"),
                a = t("/4G5"),
                u = t("AUe6"),
                c = t("W0y1"),
                s = t("qMwq"),
                l = t("LKsJ"),
                d = ".";
            var v = function(e) {
                    return function() {
                        var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                            r = arguments.length > 1 ? arguments[1] : void 0,
                            o = null !== (n = null !== r && void 0 !== r ? r : null === l.Ke || void 0 === l.Ke || null === (e = l.Ke.location) || void 0 === e ? void 0 : e.hostname) && void 0 !== n ? n : "",
                            i = o.split(d);
                        return i.length > t ? i.slice(-t).join(d) : o
                    }(2, e)
                },
                f = function(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = arguments.length > 2 ? arguments[2] : void 0,
                        d = t.return_to,
                        f = void 0 === d ? null !== l && void 0 !== l ? l : u.nk : d,
                        g = t.host,
                        h = void 0 === g ? u.A5 : g,
                        m = t.loginChannel,
                        b = t.registerChannel,
                        C = (0, o.A)(t, ["return_to", "host", "loginChannel", "registerChannel"]),
                        p = (0, c.e)("ref", "vc", "loginChannel", "registerChannel", "utm_source", "utm_campaign", "utm_medium"),
                        k = {
                            loginChannel: null !== (n = null !== m && void 0 !== m ? m : p.loginChannel) && void 0 !== n ? n : "login" === e ? null !== b && void 0 !== b ? b : p.registerChannel : null,
                            registerChannel: b
                        },
                        A = {
                            params: (0, r.A)({}, p, C, (0, i.A)(k, a.A)),
                            encodedParams: f ? {
                                return_to: f
                            } : void 0
                        };
                    return {
                        hybrid: (0, s.Px)("/setting/".concat(e), A),
                        web: (0, s.hL)("https://accounts.".concat(v(h), "/").concat(e), A)
                    }
                }
        },
        fqkG: (e, n, t) => {
            t.d(n, {
                A: () => l
            });
            var r = t("BK7R"),
                o = t("Cjys"),
                i = t("dX47"),
                a = t("sViW"),
                u = t("Pz56"),
                c = t.n(u);
            const s = {
                    ensureLogged: function() {
                        return (0, a.A)(c().mark((function e() {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        console.warn("ensureLogged() has no implement for web now.");
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                l = (0, o.vt)((0, o.Q)((0, r.A)({}, i, s)))
        },
        ySFI: (e, n, t) => {
            t.d(n, {
                lL: () => a
            });
            var r = t("Zu1U"),
                o = t("5tkj"),
                i = window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction,
                a = (0, r.S)().isHybrid;
            o.cz
        },
        "5tkj": (e, n, t) => {
            t.d(n, {
                cz: () => r
            });
            var r = !1
        },
        "l+4Q": (e, n, t) => {
            t.d(n, {
                t: () => a
            });
            var r = t("VP0d"),
                o = t("DTvD"),
                i = t("HS2I"),
                a = function(e) {
                    var n = (0, r.A)((0, i.useBizChannel)(), 2)[1];
                    (0, o.useEffect)((function() {
                        e && n(e)
                    }), [e, n])
                }
        },
        fnDL: (e, n, t) => {
            t.d(n, {
                C: () => o
            });
            var r = t("DTvD"),
                o = function(e) {
                    (0, r.useEffect)((function() {
                        var n = function(e) {
                            return function(n) {
                                return e(n, "visible" === document.visibilityState)
                            }
                        }(e);
                        return document.addEventListener("visibilitychange", n),
                            function() {
                                document.removeEventListener("visibilitychange", n)
                            }
                    }), [e])
                }
        },
        qMwq: (e, n, t) => {
            t.d(n, {
                Px: () => b,
                hL: () => m,
                um: () => C
            });
            var r = t("BK7R"),
                o = t("4Whi"),
                i = t("A1pX"),
                a = t("oG/F"),
                u = t("/4G5"),
                c = t("GR8Z"),
                s = t("jEyD"),
                l = t("rnGa"),
                d = t("Pac+"),
                v = t("wwcI"),
                f = t("AUe6"),
                g = {
                    base: f.aG,
                    encode: !1
                },
                h = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, i.A)({}, (0, a.A)(e, u.A), (0, c.A)((0, a.A)(n, u.A), (function(e) {
                        return (0, s.A)(e) ? e.map(o.o4.encodeURI) : o.o4.encodeURI(e)
                    })))
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
                        t = n.base,
                        r = void 0 === t ? f.aG : t,
                        i = n.params,
                        a = n.encodedParams,
                        u = n.encode,
                        c = u ? o.o4.encodeURI : l.A,
                        s = (0, f.n3)(e) ? "".concat(r).concat(e) : e;
                    return c((0, v.m)(s, h(i, a)))
                },
                b = function(e, n) {
                    return m(e, (0, i.A)({
                        base: "bnc://app.binance.com"
                    }, n))
                },
                C = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = m(e, (0, d.A)(n || {}, ["params", "encodedParams"]));
                    return b("/webview/webview", {
                        params: (0, r.A)({
                            type: "default"
                        }, t),
                        encodedParams: {
                            url: o
                        }
                    })
                }
        },
        XaLc: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t("Zu1U"),
                o = t("fqkG"),
                i = t("qMwq"),
                a = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = (0, r.S)(),
                        a = t.isHybrid,
                        u = t.clientType,
                        c = /electron/i.test(navigator.userAgent),
                        s = e.web,
                        l = e.hybrid,
                        d = e.electron,
                        v = e.external;
                    if (a)
                        if (v) o.A.open({
                            link: (0, i.hL)("bnc://app.binance.com/mp/app?appId=ZvaPKhYnqyTfxjcXyk5VXe&startPagePath=cGFnZXMvaW5kZXgvaW5kZXg", {
                                encodedParams: {
                                    startPageQuery: "url=".concat(v)
                                }
                            })
                        });
                        else {
                            var f = e[null === u || void 0 === u ? void 0 : u.toLowerCase()] || l || s,
                                g = /^bnc:/i.test(f) ? f : (0, i.um)(f);
                            o.A.open({
                                link: g
                            })
                        }
                    else c ? window.open(d || s) : window.open(s || v, n ? "_blank" : "_self")
                }
        },
        nn0X: (e, n, t) => {
            t.d(n, {
                DP: () => v,
                oP: () => g,
                uE: () => h
            });
            var r = t("DTvD"),
                o = t("NsjG"),
                i = t("/Q1k"),
                a = function(e) {
                    return e.cookies || {}
                },
                u = function() {
                    var e = (0, r.useRef)(null),
                        n = (0, i.wA)();
                    return e.current = (0, i.d4)(a), {
                        cookies: e.current,
                        saveCookie: (0, r.useCallback)((function(t, r) {
                            var o = "function" === typeof r ? r(e.current[t]) : r;
                            n.cookies.save({
                                key: t,
                                value: o
                            })
                        }), [])
                    }
                },
                c = "dark",
                s = "light",
                l = "theme",
                d = "shouldResetTradingView",
                v = function() {
                    var e = u(),
                        n = e.cookies,
                        t = e.saveCookie,
                        i = (0, r.useCallback)((function() {
                            return o.IG.getItem(d, 0) || 0
                        }), []),
                        a = (0, r.useCallback)((function() {
                            var e = i();
                            o.IG.setItem(d, e + 1)
                        }), [i]);
                    return {
                        isLight: n.theme !== c,
                        shouldResetTradingViewKey: d,
                        getThemeCounter: i,
                        incThemeCounter: a,
                        toggleTheme: (0, r.useCallback)((function() {
                            t(l, (function(e) {
                                return e !== s ? s : c
                            })), a()
                        }), [a])
                    }
                },
                f = "userPreferredCurrency",
                g = function() {
                    var e = u(),
                        n = e.cookies,
                        t = e.saveCookie;
                    return {
                        cachePreferFiat: n[f],
                        setCacheFiat: (0, r.useCallback)((function(e) {
                            t(f, e)
                        }), [])
                    }
                },
                h = function() {
                    return g().cachePreferFiat
                }
        },
        HIvj: (e, n, t) => {
            t.d(n, {
                E7: () => f,
                G: () => v,
                vz: () => l
            });
            var r = t("ezuS"),
                o = t("DTvD"),
                i = t("/Q1k"),
                a = t("nn0X"),
                u = function(e) {
                    return e.userCenter
                },
                c = function(e) {
                    var n;
                    return null === (n = e.userCenter) || void 0 === n ? void 0 : n.loginStatus
                },
                s = function(e) {
                    var n;
                    return null === (n = e.userCenter) || void 0 === n ? void 0 : n.userPreferredCurrency
                },
                l = function() {
                    return (0, i.d4)(c, i.bN) || {}
                },
                d = function() {
                    return (0, i.d4)(s, i.bN) || {}
                },
                v = function() {
                    var e = (0, o.useRef)(),
                        n = (0, i.wA)();
                    return e.current = (0, i.d4)(u) || {}, {
                        userCenter: e.current,
                        setUserCenter: (0, o.useCallback)((function(t, o) {
                            var i = "function" === typeof o ? o(e.current[t]) : o;
                            n.userCenter.updateState((0, r.A)({}, t, i))
                        }), [])
                    }
                },
                f = function() {
                    var e = l().isLoggedIn,
                        n = (0, a.oP)().setCacheFiat,
                        t = d().configName;
                    (0, o.useEffect)((function() {
                        e && t && n(t)
                    }), [e, t])
                }
        },
        FubV: (e, n, t) => {
            t.d(n, {
                default: () => s
            });
            var r = t("BK7R"),
                o = t("TrCV"),
                i = (t("DTvD"), t("BK9r")),
                a = t("vv8P"),
                u = (t("Peay"), t("yiIT")),
                c = (t("H7mm"), function() {
                    return (0, a.v)({
                        autoLogin: !0,
                        params: {
                            registerChannel: u.mu
                        }
                    }), (0, o.jsx)(i.Tp, {})
                });

            function s(e) {
                return (0, o.jsx)(c, (0, r.A)({}, e))
            }
        },
        H7mm: () => {},
        Peay: () => {}
    }
]);
//# debugId=cda11571-ec75-5aed-8f7c-fc7db6b178c3