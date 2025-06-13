! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "dc908254-4197-5266-961a-8f3f496c326c")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [638], {
        OzeQ: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => r
            });
            var r = {
                FAVORITE: "favorite",
                SPOT: "spot_margin",
                FUTURES: "futures",
                INFO: "coinInfo",
                TRADING_DATA: "trading_data",
                MOVES: "moves",
                NEWLISTING: "newListing",
                ZONES: "zones"
            }
        },
        "dn+i": (e, t, n) => {
            "use strict";
            n.d(t, {
                Rm: () => a
            });
            n("DTvD");
            var r = n("/OND"),
                i = function(e) {
                    return e.ssrStore || {}
                },
                a = function() {
                    return (0, r.d4)(i)
                }
        },
        Rc2H: (e, t, n) => {
            "use strict";
            n.d(t, {
                $H: () => g,
                oP: () => p,
                DP: () => m
            });
            var r = n("VP0d"),
                i = n("DTvD"),
                a = n("NsjG"),
                o = n("/OND"),
                c = n("zJWh");
            var s = n("dqst"),
                u = function(e) {
                    return e.cookies || {}
                },
                l = function() {
                    var e = (0, i.useRef)(null),
                        t = (0, o.wA)();
                    return e.current = (0, o.d4)(u), {
                        cookies: e.current,
                        saveCookie: (0, i.useCallback)((function(n, r) {
                            var i = "function" === typeof r ? r(e.current[n]) : r;
                            t.cookies.save({
                                key: n,
                                value: i
                            })
                        }), [])
                    }
                },
                f = "dark",
                d = "light",
                _ = "theme",
                v = "shouldResetTradingView",
                m = function() {
                    var e = l(),
                        t = e.cookies,
                        n = e.saveCookie,
                        r = (0, i.useCallback)((function() {
                            return a.IG.getItem(v, 0) || 0
                        }), []),
                        o = (0, i.useCallback)((function() {
                            var e = r();
                            a.IG.setItem(v, e + 1)
                        }), [r]);
                    return {
                        isLight: t.theme !== f,
                        shouldResetTradingViewKey: v,
                        getThemeCounter: r,
                        incThemeCounter: o,
                        toggleTheme: (0, i.useCallback)((function() {
                            n(_, (function(e) {
                                return e !== d ? d : f
                            })), o()
                        }), [o])
                    }
                },
                k = "userPreferredCurrency",
                p = function() {
                    var e = l(),
                        t = e.cookies,
                        n = e.saveCookie;
                    return {
                        cachePreferFiat: t[k],
                        setCacheFiat: (0, i.useCallback)((function(e) {
                            n(k, e)
                        }), [])
                    }
                },
                g = function() {
                    var e = "finance-common-changeBasisTimeZone",
                        t = "finance-common-changeBasisTimeZone-change",
                        n = function(e) {
                            var t = (0, r.A)((0, i.useState)(c.U.read(e)), 2),
                                n = t[0],
                                a = t[1];
                            return {
                                cookieValue: n,
                                writeCookie: function(t, n, r) {
                                    c.U.write(e, t, n, r), a(t)
                                },
                                eraseCookie: function() {
                                    c.U.erase(e), a(null)
                                }
                            }
                        }("changeBasisTimeZone").cookieValue,
                        o = (0, r.A)((0, s.A)(e, n || ""), 2),
                        u = o[0],
                        l = o[1],
                        f = function() {
                            if ((0, a.Gq)(e) !== u) try {
                                var t;
                                l(JSON.parse(null === window || void 0 === window || null === (t = window.localStorage) || void 0 === t ? void 0 : t[e]) || "")
                            } catch (n) {
                                l("")
                            }
                        },
                        d = function() {
                            var e = new CustomEvent(t, {});
                            window.dispatchEvent(e)
                        };
                    return (0, i.useEffect)((function() {
                        return window.addEventListener(t, f),
                            function() {
                                window.removeEventListener(t, f)
                            }
                    }), [f]), {
                        basisTimeZone: u || "",
                        setBasisTimeZone: (0, i.useCallback)((function(e) {
                            l(e), d()
                        }), [d])
                    }
                }
        },
        HIvj: (e, t, n) => {
            "use strict";
            n.d(t, {
                Py: () => l,
                vz: () => u,
                xN: () => d
            });
            var r = n("DTvD"),
                i = n("/OND"),
                a = n("Rc2H"),
                o = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                c = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userInfo
                },
                s = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userPreferredCurrency
                },
                u = function() {
                    return (0, i.d4)(o, i.bN) || {}
                },
                l = function() {
                    return (0, i.d4)(c, i.bN) || {}
                },
                f = function() {
                    return (0, i.d4)(s, i.bN) || {}
                },
                d = function() {
                    var e = (0, i.wA)(),
                        t = u().isLoggedIn,
                        n = (0, a.oP)(),
                        o = n.cachePreferFiat,
                        c = n.setCacheFiat,
                        s = f().configName;
                    return {
                        userFiat: (t ? s : o) || o,
                        setUseFiat: (0, r.useMemo)((function() {
                            return t ? function(t) {
                                return e.userCenter.updateCurrentFiat(t)
                            } : function(e) {
                                return c(e)
                            }
                        }), [t])
                    }
                }
        },
        hQCL: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => y
            });
            var r = n("M5j3"),
                i = n("BK7R"),
                a = n("gZfF"),
                o = n("VP0d"),
                c = n("DTvD"),
                s = n.n(c),
                u = function() {};
            const l = c.useLayoutEffect;
            var f = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            };
            const d = "undefined" !== typeof window.ResizeObserver ? function() {
                var e = (0, c.useState)(null),
                    t = e[0],
                    n = e[1],
                    r = (0, c.useState)(f),
                    i = r[0],
                    a = r[1],
                    o = (0, c.useMemo)((function() {
                        return new window.ResizeObserver((function(e) {
                            if (e[0]) {
                                var t = e[0].contentRect,
                                    n = t.x,
                                    r = t.y,
                                    i = t.width,
                                    o = t.height,
                                    c = t.top,
                                    s = t.left,
                                    u = t.bottom,
                                    l = t.right;
                                a({
                                    x: n,
                                    y: r,
                                    width: i,
                                    height: o,
                                    top: c,
                                    left: s,
                                    bottom: u,
                                    right: l
                                })
                            }
                        }))
                    }), []);
                return l((function() {
                    if (t) return o.observe(t),
                        function() {
                            o.disconnect()
                        }
                }), [t]), [n, i]
            } : function() {
                return [u, f]
            };
            var _ = n("6aZm"),
                v = n("5XPI"),
                m = n("LCuF"),
                k = n("GKJf"),
                p = {
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: "drawer"
                },
                g = {
                    overflow: "auto",
                    zIndex: "999999"
                },
                b = {
                    top: {
                        parent: {
                            flexDirection: "column"
                        },
                        child: {
                            width: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    bottom: {
                        parent: {
                            flexDirection: "column-reverse"
                        },
                        child: {
                            width: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    left: {
                        parent: {},
                        child: {
                            height: "100%",
                            transition: "all 0.5s ease"
                        }
                    },
                    right: {
                        parent: {
                            flexDirection: "row-reverse"
                        },
                        child: {
                            height: "100%",
                            transition: "all 0.5s ease"
                        }
                    }
                },
                h = (0, _.UF)("uikit-core", "Drawer"),
                w = (0, c.forwardRef)((function(e, t) {
                    var n = e.visible,
                        u = void 0 !== n && n,
                        l = e.direction,
                        f = void 0 === l ? "right" : l,
                        _ = e.bg,
                        w = void 0 === _ ? "background" : _,
                        y = e.maskBg,
                        S = e.children,
                        C = e.childProps,
                        T = void 0 === C ? {} : C,
                        E = e.outerClick,
                        A = (0, a.A)(e, ["visible", "direction", "bg", "maskBg", "children", "childProps", "outerClick"]);
                    h();
                    var D = (0, o.A)((0, c.useState)(u), 2),
                        O = D[0],
                        R = D[1],
                        I = (0, c.useRef)(),
                        L = (0, o.A)((0, c.useState)(), 2),
                        x = L[0],
                        P = L[1],
                        M = (0, o.A)((0, c.useState)(), 2),
                        N = M[0],
                        F = M[1],
                        U = (0, o.A)((0, c.useState)("auto"), 2),
                        V = U[0],
                        j = U[1],
                        z = y ? {
                            bg: y,
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        } : {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        },
                        B = (0, o.A)(d(), 2),
                        q = B[0],
                        Z = B[1],
                        G = Z.width,
                        W = Z.height,
                        H = (0, k.A)(t, q),
                        J = s().cloneElement(S, {
                            ref: H
                        });
                    return (0, c.useEffect)((function() {
                        "top" !== f && "bottom" !== f || F(u ? W : 0)
                    }), [W, f, u]), (0, c.useEffect)((function() {
                        "left" !== f && "right" !== f || P(u ? G : 0)
                    }), [G, f, u]), (0, c.useEffect)((function() {
                        return u ? (R(!0), j(document.body.style.overflow || "auto"), document.body.style.setProperty("overflow", "hidden")) : I.current = setTimeout((function() {
                                return R(!1)
                            }), 500),
                            function() {
                                try {
                                    clearTimeout(I.current)
                                } catch (e) {}
                                document.body.style.setProperty("overflow", V)
                            }
                    }), [u]), s().createElement(v.Ay, null, s().createElement(m.A, (0, r.A)({
                        __css: (0, i.A)({}, p, b[f].parent),
                        display: u || O ? "flex" : "none"
                    }, A), s().createElement(m.A, (0, r.A)({
                        __css: (0, i.A)({}, g, b[f].child),
                        width: x,
                        height: N,
                        bg: w
                    }, T), J), s().createElement(m.A, (0, r.A)({}, z, {
                        flex: 1,
                        onClick: function(e) {
                            return E && E(e)
                        }
                    }))))
                }));
            w.displayName = "Drawer";
            const y = w
        },
        "5XPI": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => m
            });
            var r = n("DTvD"),
                i = n.n(r),
                a = n("DPeK"),
                o = n("aiFg"),
                c = n("hTvQ"),
                s = n.n(c),
                u = ["as"];
            var l = n("VP0d"),
                f = i().useLayoutEffect,
                d = function(e, t) {
                    "function" === typeof e ? e(t) : e && (e.current = t)
                };
            const _ = i().forwardRef((function(e, t) {
                var n = e.children,
                    r = e.container,
                    a = e.disablePortal,
                    o = void 0 !== a && a,
                    c = (0, l.A)(i().useState(), 2),
                    u = c[0],
                    _ = c[1];
                return f((function() {
                    o || _(function(e) {
                        return e = "function" === typeof e ? e() : e, s().findDOMNode(e)
                    }(r) || document.body)
                }), [r]), f((function() {
                    if (u && !o) return d(t, u),
                        function() {
                            d(t, null)
                        }
                }), [t, u, o]), o ? i().isValidElement(n) ? i().cloneElement(n, {
                    ref: t
                }) : n : u ? s().createPortal(n, u) : null
            }));
            var v = function(e) {
                var t = (void 0 === e ? {} : e).multiSources,
                    n = {};

                function r(e) {
                    n.value = e, n.set && n.set.current && n.set.current(e)
                }
                return {
                    Source: function(e) {
                        var r = e.children,
                            a = i().useState(null),
                            o = a[0],
                            c = a[1];
                        return i().useLayoutEffect((function() {
                            var e, r = {
                                current: c
                            };
                            return n.set && (e = n.set, t || n.set.current(null)), n.set = r, c(n.value),
                                function() {
                                    r.current = null, n.set = null, e && e.current && (n.set = e, n.set.current(n.value))
                                }
                        }), []), o ? s().createPortal(r, o) : null
                    },
                    Target: function(e) {
                        var t = e.as,
                            n = void 0 === t ? "div" : t,
                            c = (0, o.A)(e, u);
                        return i().createElement(n, (0, a.A)({
                            ref: r
                        }, c))
                    },
                    useTargetRef: function() {
                        return r
                    }
                }
            }();
            (0, r.createContext)(v.Source);
            const m = _
        },
        "w/Qz": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("M5j3"),
                i = n("BK7R"),
                a = n("gZfF"),
                o = n("DTvD"),
                c = n.n(o),
                s = n("LCuF"),
                u = function(e) {
                    var t = e.size,
                        n = e.sx,
                        o = e.color,
                        u = void 0 === o ? "currentColor" : o,
                        l = (0, a.A)(e, ["size", "sx", "color"]),
                        f = s.A;
                    return c().createElement(f, (0, r.A)({
                        as: "svg",
                        xmlns: "http://www.w3.org/2000/svg",
                        variant: "icon",
                        sx: (0, i.A)({
                            fill: u
                        }, n),
                        __css: {
                            color: u,
                            width: t,
                            height: t,
                            fontSize: t
                        }
                    }, l))
                };
            u.defaultProps = {
                size: 24
            }, u.displayName = "SVG";
            const l = u
        },
        yhUQ: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("M5j3"),
                i = n("DTvD"),
                a = n.n(i),
                o = n("6aZm"),
                c = n("LCuF"),
                s = (0, o.UF)("uikit-core", "Text"),
                u = (0, i.forwardRef)((function(e, t) {
                    return s(), a().createElement(c.A, (0, r.A)({
                        ref: t,
                        "data-bn-type": "text",
                        tx: "text"
                    }, e))
                }));
            u.displayName = "Text";
            const l = u
        },
        GKJf: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("DTvD"),
                i = n.n(r);

            function a(e, t) {
                "function" === typeof e ? e(t) : e && (e.current = t)
            }

            function o(e, t) {
                return i().useMemo((function() {
                    return null == e && null == t ? null : function(n) {
                        a(e, n), a(t, n)
                    }
                }), [e, t])
            }
        },
        "/Lz3": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("M5j3"),
                i = n("DTvD"),
                a = n.n(i),
                o = n("w/Qz");
            const c = function(e) {
                return a().createElement(o.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        NrY2: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("DTvD");
            const i = r.createContext("ltr")
        },
        ZSsA: (e, t, n) => {
            "use strict";
            n.d(t, {
                s9: () => c,
                ok: () => s.o
            });
            var r = n("VP0d"),
                i = n("DTvD"),
                a = n("h+kG"),
                o = n("sshP"),
                c = function(e) {
                    var t = (0, i.useContext)(o.y),
                        n = t.i18n,
                        a = t.__count__,
                        c = n.i18nextIns,
                        s = (0, r.A)((0, i.useState)(c.language), 2),
                        u = s[0],
                        l = s[1],
                        f = (0, i.useCallback)((function(e) {
                            return e
                        }), []),
                        d = (0, i.useMemo)((function() {
                            return c.getFixedT(u, e)
                        }), [u, e, a]);
                    return (0, i.useEffect)((function() {
                        return c.isInitialized ? e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                c.hasResourceBundle(u, e) || c.loadNamespaces(e)
                            })) : n.init(), c.on("languageChanged", l),
                            function() {
                                c.off("languageChanged", l)
                            }
                    }), []), {
                        locale: u,
                        language: u,
                        setLocale: n.setLocale,
                        t: c.isInitialized ? d : f,
                        i18n: c
                    }
                };
            if (null === a.OW || void 0 === a.OW ? void 0 : a.OW.PRERENDER);
            o.y.Provider, n("rsqs");
            var s = n("ztXJ")
        },
        "N/Ki": (e, t, n) => {
            "use strict";
            n.d(t, {
                qU: () => f,
                km: () => p,
                wL: () => l,
                W3: () => h,
                H2: () => b,
                KH: () => D,
                lY: () => E,
                KI: () => P,
                wP: () => S,
                MS: () => O,
                gL: () => R,
                bR: () => I,
                c9: () => d,
                PH: () => g,
                AD: () => L,
                ny: () => N,
                y1: () => T,
                Gs: () => o.G,
                au: () => C,
                M7: () => M,
                DK: () => x,
                hX: () => w,
                gp: () => A,
                jT: () => y,
                Ix: () => m,
                ud: () => k,
                Ef: () => _,
                fW: () => v
            });
            var r, i, a = n("ezuS"),
                o = n("OzeQ"),
                c = n("DTvD"),
                s = n("ZSsA"),
                u = function(e, t) {
                    var n = (0, s.s9)(t),
                        r = n.t,
                        i = n.i18n,
                        a = (0, c.useCallback)((function(t, n) {
                            var i = [e, t].filter((function(e) {
                                return e
                            })).join("-");
                            return r(i, n) || n
                        }), [r, e]);
                    return {
                        i18n: i,
                        t: r,
                        getI18n: a
                    }
                },
                l = "main-exui",
                f = "Binance-copy-trading",
                d = "markets-opportunity",
                _ = function() {
                    return u("", l)
                },
                v = function() {
                    return u("", d)
                },
                m = function() {
                    return u("", f)
                },
                k = function() {
                    return u("", "futures-ui")
                },
                p = {
                    ETF: "ETF",
                    FUTURES: "futuresTab",
                    CM_TRADE: "cmTrade",
                    UM_TRADE: "umTrade",
                    OPTIONS: "E-option",
                    MARGIN: "marginTrade"
                },
                g = "options",
                b = {
                    ALL: null,
                    SPOT: "market_spot",
                    FUTURES: p.FUTURES,
                    OPTION: g
                },
                h = {
                    current_quarter: "QUARTER",
                    next_quarter: "BI-QUARTER",
                    next_month: "BI-MONTH",
                    current_month: "MONTH",
                    next_week: "BI-WEEK",
                    current_week: "WEEK"
                },
                w = function(e) {
                    return h[e] || e
                },
                y = function(e) {
                    return e in h
                },
                S = {
                    BOTH: "BOTH",
                    CROSS: "CROSS",
                    ISOLATED: "ISOLATED"
                },
                C = (r = {}, (0, a.A)(r, o.G.FAVORITE, "Favorite"), (0, a.A)(r, o.G.SPOT, "Spot/Margin Market"), (0, a.A)(r, o.G.FUTURES, "Futures"), (0, a.A)(r, o.G.INFO, "AllCrypto"), (0, a.A)(r, o.G.NEWLISTING, "NewListing"), (0, a.A)(r, o.G.ZONES, "Zones"), r),
                T = {
                    SORT: "MARKET_SORT"
                },
                E = ["perpetual", "quarterly", g],
                A = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "BTC";
                    return "".concat(e, "USDT")
                },
                D = {
                    ALL: "all",
                    SPOT: "spot",
                    FUTURES: "futures",
                    OPTION: "options"
                },
                O = 5,
                R = 30,
                I = 10,
                L = {
                    SPAIN: "es"
                },
                x = {
                    "1H": "1h",
                    "4H": "4h",
                    "24H": "24h"
                },
                P = (i = {}, (0, a.A)(i, x["1H"], "common-th-1h"), (0, a.A)(i, x["4H"], "common-th-4h"), (0, a.A)(i, x["24H"], "common-th-24h"), i),
                M = {
                    SPOT: "spot",
                    FUTURES_UM: "futures_um",
                    FUTURES_CM: "futures_cm",
                    OPTION: "option"
                },
                N = [{
                    id: "0makerfee",
                    label: "market-tab-0makerfee",
                    defaultLabel: "0 maker fee"
                }, {
                    id: "0fee",
                    label: "market-tab-0fee",
                    defaultLabel: "0 fee"
                }]
        },
        "6Zk3": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("HS2I"),
                i = n("dn+i");
            const a = function() {
                var e = (0, i.Rm)().isLogin,
                    t = (0, r.useUserLoginStatus)().value;
                return "1" === e || t
            }
        },
        ZIan: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bl: () => a,
                jH: () => o
            });
            n("DTvD");
            var r = n("W9hJ"),
                i = n("ZSsA"),
                a = function() {
                    return (0, i.ok)()
                },
                o = function() {
                    return (0, r.PC)().dir || "ltr"
                }
        },
        mFFV: (e, t, n) => {
            "use strict";
            n.d(t, {
                xn: () => v,
                i8: () => f,
                UY: () => d
            });
            var r = n("sViW"),
                i = n("888e"),
                a = n("Pz56"),
                o = n.n(a),
                c = n("VA12"),
                s = (n("tEf9"), n("hqSB")),
                u = n.n(s);
            u().warn;
            u().warn = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            };
            const l = u();
            var f = function() {
                    var e = (0, r.A)(o().mark((function e(t, n) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, c.get)(t, n);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r || {});
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), l.warn("BAD REQUEST:\n         host is ".concat(t, "\n         parse ERROR is ").concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 10:
                                    return e.abrupt("return", {});
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, r.A)(o().mark((function e(t, n, r) {
                        var i;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, c.post)(t, n, r);
                                case 3:
                                    return i = e.sent, e.abrupt("return", i || {});
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), l.warn("BAD REQUEST:\n         host is ".concat(t, "\n         parse ERROR is ").concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 10:
                                    return e.abrupt("return", {});
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = {
                    1e3: "NORMAL_CLOSURE",
                    1005: "NO_STATUS_RECEIVED"
                },
                v = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = this;
                        (0, i.A)(this, e), this.open = function() {
                            r.ws = new WebSocket(r.url), r.ws.onmessage = r.opt.onmessage, r.ws.onclose = function(e) {
                                return r.reconnect(e)
                            }, r.ws.onerror = function(e) {
                                return r.reconnect(e)
                            }
                        }, this.reconnect = function(e) {
                            var t;
                            e.code in _ || (null === (t = r.ws) || void 0 === t ? void 0 : t._hand_close_) || r.timer || (r.timer = setTimeout((function() {
                                return r.open()
                            }), r.opt.timeout || 3e3))
                        }, this.close = function() {
                            r.ws && (r.ws._hand_close_ = !0, r.ws.close())
                        }, this.url = t, this.opt = n
                    }
                    return e.prototype.create = function() {
                        return this.open(), this
                    }, e
                }()
        },
        qhd6: (e, t, n) => {
            "use strict";
            n.d(t, {
                uF: () => _,
                Jp: () => d,
                bE: () => m,
                z1: () => g,
                Ei: () => p,
                _9: () => k,
                tm: () => v,
                D1: () => l
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                a = n("GlbY"),
                o = n("err1"),
                c = n("pW51"),
                s = function(e) {
                    return (0, o.A)(c.bJ, e)
                },
                u = function(e) {
                    var t = function() {
                        ! function(e) {
                            (0, o.A)(c.fY, e)
                        }(e)
                    };
                    return window.addEventListener("beforeunload", t),
                        function() {
                            return window.removeEventListener("beforeunload", t)
                        }
                },
                l = {
                    visitMarkets: "binance_visit_markets",
                    quitMarkets: "binance_quit_markets",
                    tabMainClick: "binance_click_markets_main_sector",
                    subTabMainClick: "binance_click_markets_main_filter",
                    tradeClick: "binance_click_markets_trading_pair_trade",
                    searchClick: "binance_click_markets_trading_pair_search",
                    bigDataClick: "binance_click_markets_trading_pair_data",
                    viewTradingData: "page_view_markets_trading_data",
                    viewMoves: "page_view_markets_top_movers",
                    rankVolumeClick: "markets_ranking_volume",
                    rankIncreaseClick: "markets_ranking_increase",
                    rankDeclineClick: "markets_ranking_decline",
                    movesMoreClick: "markets_top_movers_more",
                    derivativesCoinClick: "markets_trading_data_derivatives_coin_futures",
                    derivativesUSDTClick: "markets_trading_data_derivatives_usdt_futures",
                    derivativesETFClick: "markets_trading_data_derivatives_etf",
                    hotCardClick: "binance_click_markets_cardlist_click",
                    mainSubFilterClick: "binance_click_markets_main_subfilter",
                    favoriteSubFilterClick: "binance_click_markets_favorite_subfilter",
                    zoneSubFilterClick: "binance_click_markets_zone_subfilter",
                    featuresSubFilterClick: "binance_click_markets_futures_subfilter",
                    tradingData24RankingMoreClick: "markets_ranking_more",
                    tradingDataDerivativesMoreClick: "markets_trading_data_derivatives_more",
                    topMoversItemClick: "markets_top_movers_details",
                    tradingDataChangeMarketClick: "binance_click_markets_trading_data_change_spot_market",
                    tradingDataTradingPairsClick: "binance_click_markets_trading_data_trading_pairs",
                    visitTradingData: "binance_visit_markets_trading_data",
                    tabSecondClick: "binance_click_markets_second_sector",
                    rowDetailBtnClick: "binance_click_markets_detail",
                    tradingDataTradingPairClick: "binance_click_markets_trading_data_trading_pair_trade",
                    marketZoneItemClick: "binance_click_markets_zone",
                    marketsCardMoreClick: "binance_click_markets_card_more",
                    marketsUpcomingListingTradeClick: "binance_click_markets_trading_pair_trade_new",
                    optionsExpirationDateClick: "binance_click_markets_options_expiration_date",
                    marketsFavoritePageCardViewClick: "binance_click_markets_favorite_card",
                    marketsFavoritePageListViewClick: "binance_click_markets_favorite_list",
                    marketsFavoritePageMultipleChartClick: "binance_click_markets_multiplechart",
                    visitOpportunity: "binance_visit_markets_opportunity",
                    opportunityBuySellTabClick: "binance_click_markets_opportunity_buy/sell",
                    opportunityMarketSwitchClick: "binance_click_markets_opportunity_market",
                    opportunityTradingPairClick: "binance_click_markets_opportunity_trading_pair",
                    opportunitySpotFutureSwitchClick: "binance_click_markets_opportunity_spot/future",
                    opportunityCopyClick: "binance_click_markets_opportunity_spot/future_copy",
                    opportunityViewMoreClick: "binance_click_markets_opportunity_spot/future_more",
                    opportunityCampaignClick: "binance_click_markets_opportunity_campaign",
                    opportunityIndicatorClick: "binance_click_markets_opportunity_indicator",
                    marketsPin: "binance_click_markets_ping",
                    marketsSave: "binance_click_markets_save",
                    marketsSort: "binance_click_markets_sort",
                    marketsVisitEdit: "binance_visit_markets_edit",
                    favoriteEditFavorites: "binance_click_markets_favorite_edit_favorits",
                    favoriteNewGroup: "binance_click_markets_favorite_new_group",
                    favoriteManageGroup: "binance_click_markets_favorite_manage_group",
                    favoriteTab: "binance_click_markets_favorite_tab",
                    favoriteEditTab: "binance_click_markets_favorite_edit_tab",
                    favoriteEditSelectAll: "binance_click_markets_favorite_edit_select_all",
                    favoriteEditAddTo: "binance_click_markets_favorite_edit_add_to",
                    favoriteEditRemove: "binance_click_markets_favorite_edit_remove",
                    favoriteEditSelectPair: "binance_click_markets_favorite_edit_select_pair",
                    favoriteEditTop: "binance_click_markets_favorite_edit_top",
                    favoriteEditPin: "binance_click_markets_favorite_edit_ping",
                    favoriteEditSort: "binance_click_markets_favorite_edit_sort",
                    favoriteEditDone: "binance_click_markets_favorite_edit_done",
                    favoriteAddSelect: "binance_click_markets_favorite_add_select",
                    favoriteAddDone: "binance_click_markets_favorite_add_done",
                    favoriteAddCancel: "binance_click_markets_favorite_add_cancel",
                    favoriteNewSave: "binance_click_markets_favorite_new_save",
                    favoriteNewClose: "binance_click_markets_favorite_new_close",
                    favoriteManageAll: "binance_click_markets_favorite_manage_all",
                    favoriteManageDelete: "binance_click_markets_favorite_manage_delete",
                    favoriteManageDeleteConfirm: "binance_click_markets_favorite_manage_delete_confirm",
                    favoriteManageSelect: "binance_click_markets_favorite_manage_select",
                    favoriteManageSave: "binance_click_markets_favorite_manage_save",
                    favoriteManageCancel: "binance_click_markets_favorite_manage_cancel",
                    favoriteManageEditName: "binance_click_markets_favorite_manage_edit_name",
                    favoriteManageTop: "binance_click_markets_favorite_manage_top",
                    favoriteManageSort: "binance_click_markets_favorite_manage_sort",
                    favoriteNewPageAll: "binance_click_markets_favorite_new_page_all",
                    favoriteNewPageMarket: "binance_click_markets_favorite_new_page_market"
                },
                f = "binance_markets",
                d = "binance_market_trading_data",
                _ = "binance_market_opportunity",
                v = function(e) {
                    return function(t) {
                        (0, a.Ay)((0, i.A)((0, r.A)({}, t), {
                            pageName: (null === t || void 0 === t ? void 0 : t.pageName) || f,
                            elementID: e,
                            eventName: "webClick"
                        }))
                    }
                },
                m = function(e) {
                    return function(t) {
                        (0, a.Ay)((0, i.A)((0, r.A)({}, t), {
                            pageName: (null === t || void 0 === t ? void 0 : t.pageName) || f,
                            elementID: e,
                            eventName: "ComponentShow"
                        }))
                    }
                },
                k = function(e) {
                    var t = e.viewID,
                        n = e.quitID,
                        r = e.pageName,
                        i = void 0 === r ? f : r;
                    return function() {
                        return t && ((null === window || void 0 === window ? void 0 : window.requestIdleCallback) ? window.requestIdleCallback((function() {
                            s({
                                pageName: i,
                                elementID: t
                            })
                        })) : s({
                            pageName: i,
                            elementID: t
                        })), n ? u({
                            pageName: i,
                            elementID: n
                        }) : function() {}
                    }
                },
                p = function(e) {
                    switch (e) {
                        case "ALL":
                        case "SPOT":
                        case "FUTURES":
                        case "OPTION":
                            return e;
                        default:
                            return "CUSTOM"
                    }
                },
                g = function(e) {
                    var t = e.nameColumn,
                        n = e.itemType,
                        r = e.symbol,
                        i = (t || {}).name;
                    return "S" === n ? r : i
                }
        },
        hqSB: e => {
            var t = {
                    debug: {
                        on: !1,
                        out: console.log.bind(console)
                    },
                    info: {
                        on: !0,
                        out: console.log.bind(console)
                    },
                    warn: {
                        on: !0,
                        out: console.error.bind(console)
                    },
                    error: {
                        on: !0,
                        out: console.error.bind(console)
                    },
                    includeTimeDesignator: !1,
                    includeTimeZone: !1,
                    logobject: function(e, t) {
                        var n = new Date;
                        return {
                            timestamp: n.getTime(),
                            datetime: i(n),
                            level: e.toUpperCase(),
                            args: t
                        }
                    },
                    format: null,
                    callback: null
                },
                n = function(e, n) {
                    var r, i;
                    i = t[e], r = t.logobject(e, n), t.callback && t.callback(r), i.on && i.out && (t.format ? i.out.apply(null, t.format(e, n)) : i.out.apply(null, [].concat(r.datetime, r.level, n)))
                },
                r = Array.prototype.slice,
                i = function(e) {
                    var n = function(e) {
                            return e < 10 ? "0" + e : e
                        },
                        r = "number" === typeof t.fixedTimeZoneMinutes ? t.fixedTimeZoneMinutes : e.getTimezoneOffset(),
                        i = (r > 0 ? "-" : "+") + n(parseInt(Math.abs(r / 60)));
                    return i += r % 60 == 0 ? "00" : n(Math.abs(r % 60)), 0 === r && (i = "Z"), e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + (t.includeTimeDesignator ? "T" : " ") + +n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + (t.includeTimeZone ? i : "")
                };
            e.exports = {
                debug: function() {
                    n("debug", r.call(arguments))
                },
                info: function() {
                    n("info", r.call(arguments))
                },
                warn: function() {
                    n("warn", r.call(arguments))
                },
                error: function() {
                    n("error", r.call(arguments))
                },
                level: function(e) {
                    switch ([t.debug, t.info, t.warn, t.error].forEach((function(e) {
                        e.on = !1
                    })), e) {
                        case "debug":
                            t.debug.on = !0;
                        case "info":
                            t.info.on = !0;
                        case "warn":
                            t.warn.on = !0;
                        case "error":
                            t.error.on = !0
                    }
                },
                redirect: function(e, n) {
                    t.debug.out = e, t.info.out = e, t.warn.out = n, t.error.out = n
                },
                callback: function(e) {
                    if ("function" != typeof e) throw new Error("Callback must be a function");
                    t.callback = e
                },
                config: function() {
                    return t
                }
            }
        },
        O94r: (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var a = typeof n;
                            if ("string" === a || "number" === a) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var o = i.apply(null, n);
                                    o && e.push(o)
                                }
                            } else if ("object" === a)
                                if (n.toString === Object.prototype.toString)
                                    for (var c in n) r.call(n, c) && n[c] && e.push(c);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        mkfS: (e, t) => {
            "use strict";
            t.Y = function(e, t) {
                return c(e).some((function(e) {
                    var n = e.inverse,
                        r = "all" === e.type || t.type === e.type;
                    if (r && n || !r && !n) return !1;
                    var i = e.expressions.every((function(e) {
                        var n = e.feature,
                            r = e.modifier,
                            i = e.value,
                            a = t[n];
                        if (!a) return !1;
                        switch (n) {
                            case "orientation":
                            case "scan":
                                return a.toLowerCase() === i.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                i = l(i), a = l(a);
                                break;
                            case "resolution":
                                i = u(i), a = u(a);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                i = s(i), a = s(a);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                i = parseInt(i, 10) || 1, a = parseInt(a, 10) || 0
                        }
                        switch (r) {
                            case "min":
                                return a >= i;
                            case "max":
                                return a <= i;
                            default:
                                return a === i
                        }
                    }));
                    return i && !n || !i && n
                }))
            };
            var n = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                r = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                i = /^(?:(min|max)-)?(.+)/,
                a = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                o = /(dpi|dpcm|dppx)?$/;

            function c(e) {
                return e.split(",").map((function(e) {
                    var t = (e = e.trim()).match(n),
                        a = t[1],
                        o = t[2],
                        c = t[3] || "",
                        s = {};
                    return s.inverse = !!a && "not" === a.toLowerCase(), s.type = o ? o.toLowerCase() : "all", c = c.match(/\([^\)]+\)/g) || [], s.expressions = c.map((function(e) {
                        var t = e.match(r),
                            n = t[1].toLowerCase().match(i);
                        return {
                            modifier: n[1],
                            feature: n[2],
                            value: t[2]
                        }
                    })), s
                }))
            }

            function s(e) {
                var t, n = Number(e);
                return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n
            }

            function u(e) {
                var t = parseFloat(e);
                switch (String(e).match(o)[1]) {
                    case "dpcm":
                        return t / 2.54;
                    case "dppx":
                        return 96 * t;
                    default:
                        return t
                }
            }

            function l(e) {
                var t = parseFloat(e);
                switch (String(e).match(a)[1]) {
                    case "em":
                    case "rem":
                        return 16 * t;
                    case "cm":
                        return 96 * t / 2.54;
                    case "mm":
                        return 96 * t / 2.54 / 10;
                    case "in":
                        return 96 * t;
                    case "pt":
                        return 72 * t;
                    case "pc":
                        return 72 * t / 12;
                    default:
                        return t
                }
            }
        },
        "5BvR": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = /[A-Z]/g,
                i = /^ms-/,
                a = {};

            function o(e) {
                return "-" + e.toLowerCase()
            }
            const c = function(e) {
                if (a.hasOwnProperty(e)) return a[e];
                var t = e.replace(r, o);
                return a[e] = i.test(t) ? "-" + t : t
            }
        },
        dqst: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("DTvD");
            const i = function(e, t, n) {
                if (!e) throw new Error("useLocalStorage key may not be falsy");
                var i = n ? n.raw ? function(e) {
                        return e
                    } : n.deserializer : JSON.parse,
                    a = (0, r.useRef)((function(e) {
                        try {
                            var r = n ? n.raw ? String : n.serializer : JSON.stringify,
                                a = localStorage.getItem(e);
                            return null !== a ? i(a) : (t && localStorage.setItem(e, r(t)), t)
                        } catch (o) {
                            return t
                        }
                    })),
                    o = (0, r.useState)((function() {
                        return a.current(e)
                    })),
                    c = o[0],
                    s = o[1];
                (0, r.useLayoutEffect)((function() {
                    return s(a.current(e))
                }), [e]);
                var u = (0, r.useCallback)((function(t) {
                        try {
                            var r = "function" === typeof t ? t(c) : t;
                            if ("undefined" === typeof r) return;
                            var a = void 0;
                            a = n ? n.raw ? "string" === typeof r ? r : JSON.stringify(r) : n.serializer ? n.serializer(r) : JSON.stringify(r) : JSON.stringify(r), localStorage.setItem(e, a), s(i(a))
                        } catch (o) {}
                    }), [e, s]),
                    l = (0, r.useCallback)((function() {
                        try {
                            localStorage.removeItem(e), s(void 0)
                        } catch (o) {}
                    }), [e, s]);
                return [c, u, l]
            }
        },
        R0eE: (e, t, n) => {
            "use strict";
            var r = n("DTvD");
            var i = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                },
                a = r.useState,
                o = r.useEffect,
                c = r.useLayoutEffect,
                s = r.useDebugValue;

            function u(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = a({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    l = r[1];
                return c((function() {
                    i.value = n, i.getSnapshot = t, u(i) && l({
                        inst: i
                    })
                }), [e, n, t]), o((function() {
                    return u(i) && l({
                        inst: i
                    }), e((function() {
                        u(i) && l({
                            inst: i
                        })
                    }))
                }), [e]), s(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        tPBg: (e, t, n) => {
            "use strict";
            e.exports = n("R0eE")
        },
        aiFg: (e, t, n) => {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }
            n.d(t, {
                A: () => r
            })
        },
        "+8/3": (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => _,
                I: () => E,
                O: () => u,
                S: () => H,
                U: () => s,
                a: () => f,
                b: () => o,
                c: () => q,
                d: () => G,
                e: () => l,
                f: () => W,
                g: () => J,
                i: () => p,
                j: () => Z,
                m: () => d,
                n: () => V,
                o: () => U,
                r: () => A,
                s: () => N,
                t: () => D,
                u: () => O,
                z: () => h
            });
            var r = n("DTvD"),
                i = n("+QqE"),
                a = Object.prototype.hasOwnProperty;
            const o = new WeakMap,
                c = () => {},
                s = c(),
                u = Object,
                l = e => e === s,
                f = e => "function" == typeof e,
                d = (e, t) => ({ ...e,
                    ...t
                }),
                _ = e => f(e.then),
                v = {},
                m = {},
                k = "undefined",
                p = !0,
                g = typeof document != k,
                b = p && "Deno" in window,
                h = (e, t) => {
                    const n = o.get(e);
                    return [() => !l(t) && e.get(t) || v, r => {
                        if (!l(t)) {
                            const i = e.get(t);
                            t in m || (m[t] = i), n[5](t, d(i, r), i || v)
                        }
                    }, n[6], () => !l(t) && t in m ? m[t] : !l(t) && e.get(t) || v]
                };
            let w = !0;
            const [y, S] = p && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [c, c], C = {
                isOnline: () => w,
                isVisible: () => {
                    const e = g && document.visibilityState;
                    return l(e) || "hidden" !== e
                }
            }, T = {
                initFocus: e => (g && document.addEventListener("visibilitychange", e), y("focus", e), () => {
                    g && document.removeEventListener("visibilitychange", e), S("focus", e)
                }),
                initReconnect: e => {
                    const t = () => {
                            w = !0, e()
                        },
                        n = () => {
                            w = !1
                        };
                    return y("online", t), y("offline", n), () => {
                        S("online", t), S("offline", n)
                    }
                }
            }, E = !r.useId, A = !p || b, D = e => p && typeof window.requestAnimationFrame != k ? window.requestAnimationFrame(e) : setTimeout(e, 1), O = A ? r.useEffect : r.useLayoutEffect, R = "undefined" !== typeof navigator && navigator.connection, I = !A && R && (["slow-2g", "2g"].includes(R.effectiveType) || R.saveData), L = new WeakMap, x = (e, t) => u.prototype.toString.call(e) === `[object ${t}]`;
            let P = 0;
            const M = e => {
                    const t = typeof e,
                        n = x(e, "Date"),
                        r = x(e, "RegExp"),
                        i = x(e, "Object");
                    let a, o;
                    if (u(e) !== e || n || r) a = n ? e.toJSON() : "symbol" == t ? e.toString() : "string" == t ? JSON.stringify(e) : "" + e;
                    else {
                        if (a = L.get(e), a) return a;
                        if (a = ++P + "~", L.set(e, a), Array.isArray(e)) {
                            for (a = "@", o = 0; o < e.length; o++) a += M(e[o]) + ",";
                            L.set(e, a)
                        }
                        if (i) {
                            a = "#";
                            const t = u.keys(e).sort();
                            for (; !l(o = t.pop());) l(e[o]) || (a += o + ":" + M(e[o]) + ",");
                            L.set(e, a)
                        }
                    }
                    return a
                },
                N = e => {
                    if (f(e)) try {
                        e = e()
                    } catch (n) {
                        e = ""
                    }
                    const t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? M(e) : "", t]
                };
            let F = 0;
            const U = () => ++F;
            async function V(...e) {
                const [t, n, r, a] = e, c = d({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" === typeof a ? {
                    revalidate: a
                } : a || {});
                let u = c.populateCache;
                const v = c.rollbackOnError;
                let m = c.optimisticData;
                const k = c.throwOnError;
                if (f(n)) {
                    const e = n,
                        r = [],
                        i = t.keys();
                    for (const n of i) !/^\$(inf|sub)\$/.test(n) && e(t.get(n)._k) && r.push(n);
                    return Promise.all(r.map(p))
                }
                return p(n);
                async function p(n) {
                    const [a] = N(n);
                    if (!a) return;
                    const [d, p] = h(t, a), [g, b, w, y] = o.get(t), S = () => {
                        const e = g[a];
                        return (f(c.revalidate) ? c.revalidate(d().data, n) : !1 !== c.revalidate) && (delete w[a], delete y[a], e && e[0]) ? e[0](i.q2).then((() => d().data)) : d().data
                    };
                    if (e.length < 3) return S();
                    let C, T = r;
                    const E = U();
                    b[a] = [E, 0];
                    const A = !l(m),
                        D = d(),
                        O = D.data,
                        R = D._c,
                        I = l(R) ? O : R;
                    if (A && (m = f(m) ? m(I, O) : m, p({
                            data: m,
                            _c: I
                        })), f(T)) try {
                        T = T(I)
                    } catch (L) {
                        C = L
                    }
                    if (T && _(T)) {
                        if (T = await T.catch((e => {
                                C = e
                            })), E !== b[a][0]) {
                            if (C) throw C;
                            return T
                        }
                        C && A && (e => "function" === typeof v ? v(e) : !1 !== v)(C) && (u = !0, p({
                            data: I,
                            _c: s
                        }))
                    }
                    if (u && !C)
                        if (f(u)) {
                            const e = u(T, I);
                            p({
                                data: e,
                                error: s,
                                _c: s
                            })
                        } else p({
                            data: T,
                            error: s,
                            _c: s
                        });
                    if (b[a][1] = U(), Promise.resolve(S()).then((() => {
                            p({
                                _c: s
                            })
                        })), !C) return T;
                    if (k) throw C
                }
            }
            const j = (e, t) => {
                    for (const n in e) e[n][0] && e[n][0](t)
                },
                z = (e, t) => {
                    if (!o.has(e)) {
                        const n = d(T, t),
                            r = Object.create(null),
                            a = V.bind(s, e);
                        let u = c;
                        const l = Object.create(null),
                            f = (e, t) => {
                                const n = l[e] || [];
                                return l[e] = n, n.push(t), () => n.splice(n.indexOf(t), 1)
                            },
                            _ = (t, n, r) => {
                                e.set(t, n);
                                const i = l[t];
                                if (i)
                                    for (const e of i) e(n, r)
                            },
                            v = () => {
                                if (!o.has(e) && (o.set(e, [r, Object.create(null), Object.create(null), Object.create(null), a, _, f]), !A)) {
                                    const t = n.initFocus(setTimeout.bind(s, j.bind(s, r, i.CC))),
                                        a = n.initReconnect(setTimeout.bind(s, j.bind(s, r, i.jB)));
                                    u = () => {
                                        t && t(), a && a(), o.delete(e)
                                    }
                                }
                            };
                        return v(), [e, a, v, u]
                    }
                    return [e, o.get(e)[4]]
                },
                B = function e(t, n) {
                    var r, i;
                    if (t === n) return !0;
                    if (t && n && (r = t.constructor) === n.constructor) {
                        if (r === Date) return t.getTime() === n.getTime();
                        if (r === RegExp) return t.toString() === n.toString();
                        if (r === Array) {
                            if ((i = t.length) === n.length)
                                for (; i-- && e(t[i], n[i]););
                            return -1 === i
                        }
                        if (!r || "object" === typeof t) {
                            for (r in i = 0, t) {
                                if (a.call(t, r) && ++i && !a.call(n, r)) return !1;
                                if (!(r in n) || !e(t[r], n[r])) return !1
                            }
                            return Object.keys(n).length === i
                        }
                    }
                    return t !== t && n !== n
                },
                [q, Z] = z(new Map),
                G = d({
                    onLoadingSlow: c,
                    onSuccess: c,
                    onError: c,
                    onErrorRetry: (e, t, n, r, i) => {
                        const a = n.errorRetryCount,
                            o = i.retryCount,
                            c = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
                        !l(a) && o > a || setTimeout(r, c, i)
                    },
                    onDiscarded: c,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: I ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: I ? 5e3 : 3e3,
                    compare: B,
                    isPaused: () => !1,
                    cache: q,
                    mutate: Z,
                    fallback: {}
                }, C),
                W = (e, t) => {
                    const n = d(e, t);
                    if (t) {
                        const {
                            use: r,
                            fallback: i
                        } = e, {
                            use: a,
                            fallback: o
                        } = t;
                        r && a && (n.use = r.concat(a)), i && o && (n.fallback = d(i, o))
                    }
                    return n
                },
                H = (0, r.createContext)({}),
                J = e => {
                    const {
                        value: t
                    } = e, n = (0, r.useContext)(H), i = f(t), a = (0, r.useMemo)((() => i ? t(n) : t), [i, n, t]), o = (0, r.useMemo)((() => i ? a : W(n, a)), [i, n, a]), c = a && a.provider, u = (0, r.useRef)(s);
                    c && !u.current && (u.current = z(c(o.cache || q), a));
                    const l = u.current;
                    return l && (o.cache = l[0], o.mutate = l[1]), O((() => {
                        if (l) return l[2] && l[2](), l[3]
                    }), []), (0, r.createElement)(H.Provider, d(e, {
                        value: o
                    }))
                }
        },
        "+QqE": (e, t, n) => {
            "use strict";
            n.d(t, {
                CC: () => r,
                I0: () => o,
                jB: () => i,
                q2: () => a
            });
            const r = 0,
                i = 1,
                a = 2,
                o = 3
        },
        x1Jo: (e, t, n) => {
            "use strict";
            n.d(t, {
                aw: () => f,
                iX: () => s,
                qm: () => l,
                Ht: () => d
            });
            var r = n("+8/3");
            var i = n("DTvD");
            const a = r.i && window.__SWR_DEVTOOLS_USE__,
                o = a ? window.__SWR_DEVTOOLS_USE__ : [],
                c = e => (0, r.a)(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                s = () => (0, r.m)(r.d, (0, i.useContext)(r.S)),
                u = o.concat((e => (t, n, i) => e(t, n && ((...e) => {
                    const [i] = (0, r.s)(t), [, , , a] = r.b.get(r.c);
                    if (i.startsWith("$inf$")) return n(...e);
                    const o = a[i];
                    return (0, r.e)(o) ? n(...e) : (delete a[i], o)
                }), i))),
                l = e => function(...t) {
                    const n = s(),
                        [i, a, o] = c(t),
                        l = (0, r.f)(n, o);
                    let f = e;
                    const {
                        use: d
                    } = l, _ = (d || []).concat(u);
                    for (let e = _.length; e--;) f = _[e](f);
                    return f(i, a || l.fetcher || null, l)
                },
                f = (e, t, n) => {
                    const r = t[e] || (t[e] = []);
                    return r.push(n), () => {
                        const e = r.indexOf(n);
                        e >= 0 && (r[e] = r[r.length - 1], r.pop())
                    }
                },
                d = (e, t) => (...n) => {
                    const [r, i, a] = c(n), o = (a.use || []).concat(t);
                    return e(r, i, { ...a,
                        use: o
                    })
                };
            a && (window.__SWR_DEVTOOLS_REACT__ = i)
        },
        itTZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => f
            });
            var r = n("DTvD"),
                i = n("tPBg"),
                a = n("+8/3"),
                o = n("+QqE"),
                c = n("x1Jo");
            const s = () => {};
            s(), new WeakMap;
            const u = r.use || (e => {
                    switch (e.status) {
                        case "pending":
                            throw e;
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e.status = "pending", e.then((t => {
                                e.status = "fulfilled", e.value = t
                            }), (t => {
                                e.status = "rejected", e.reason = t
                            })), e
                    }
                }),
                l = {
                    dedupe: !0
                },
                f = (a.O.defineProperty(a.g, "defaultValue", {
                    value: a.d
                }), (0, c.qm)(((e, t, n) => {
                    const {
                        cache: s,
                        compare: f,
                        suspense: d,
                        fallbackData: _,
                        revalidateOnMount: v,
                        revalidateIfStale: m,
                        refreshInterval: k,
                        refreshWhenHidden: p,
                        refreshWhenOffline: g,
                        keepPreviousData: b
                    } = n, [h, w, y, S] = a.b.get(s), [C, T] = (0, a.s)(e), E = (0, r.useRef)(!1), A = (0, r.useRef)(!1), D = (0, r.useRef)(C), O = (0, r.useRef)(t), R = (0, r.useRef)(n), I = () => R.current, L = () => I().isVisible() && I().isOnline(), [x, P, M, N] = (0, a.z)(s, C), F = (0, r.useRef)({}).current, U = (0, a.e)(_) ? (0, a.e)(n.fallback) ? a.U : n.fallback[C] : _, V = (e, t) => {
                        for (const n in F) {
                            const r = n;
                            if ("data" === r) {
                                if (!f(e[r], t[r])) {
                                    if (!(0, a.e)(e[r])) return !1;
                                    if (!f(J, t[r])) return !1
                                }
                            } else if (t[r] !== e[r]) return !1
                        }
                        return !0
                    }, j = (0, r.useMemo)((() => {
                        const e = !!C && !!t && ((0, a.e)(v) ? !I().isPaused() && !d && !1 !== m : v),
                            n = t => {
                                const n = (0, a.m)(t);
                                return delete n._k, e ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...n
                                } : n
                            },
                            r = x(),
                            i = N(),
                            o = n(r),
                            c = r === i ? o : n(i);
                        let s = o;
                        return [() => {
                            const e = n(x());
                            return V(e, s) ? (s.data = e.data, s.isLoading = e.isLoading, s.isValidating = e.isValidating, s.error = e.error, s) : (s = e, e)
                        }, () => c]
                    }), [s, C]), z = (0, i.useSyncExternalStore)((0, r.useCallback)((e => M(C, ((t, n) => {
                        V(n, t) || e()
                    }))), [s, C]), j[0], j[1]), B = !E.current, q = h[C] && h[C].length > 0, Z = z.data, G = (0, a.e)(Z) ? U && (0, a.B)(U) ? u(U) : U : Z, W = z.error, H = (0, r.useRef)(G), J = b ? (0, a.e)(Z) ? (0, a.e)(H.current) ? G : H.current : Z : G, K = !(q && !(0, a.e)(W)) && (B && !(0, a.e)(v) ? v : !I().isPaused() && (d ? !(0, a.e)(G) && m : (0, a.e)(G) || m)), Q = !!(C && t && B && K), $ = (0, a.e)(z.isValidating) ? Q : z.isValidating, Y = (0, a.e)(z.isLoading) ? Q : z.isLoading, X = (0, r.useCallback)((async e => {
                        const t = O.current;
                        if (!C || !t || A.current || I().isPaused()) return !1;
                        let r, i, c = !0;
                        const s = e || {},
                            u = !y[C] || !s.dedupe,
                            l = () => a.I ? !A.current && C === D.current && E.current : C === D.current,
                            d = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            _ = () => {
                                P(d)
                            },
                            v = () => {
                                const e = y[C];
                                e && e[1] === i && delete y[C]
                            },
                            m = {
                                isValidating: !0
                            };
                        (0, a.e)(x().data) && (m.isLoading = !0);
                        try {
                            if (u && (P(m), n.loadingTimeout && (0, a.e)(x().data) && setTimeout((() => {
                                    c && l() && I().onLoadingSlow(C, n)
                                }), n.loadingTimeout), y[C] = [t(T), (0, a.o)()]), [r, i] = y[C], r = await r, u && setTimeout(v, n.dedupingInterval), !y[C] || y[C][1] !== i) return u && l() && I().onDiscarded(C), !1;
                            d.error = a.U;
                            const e = w[C];
                            if (!(0, a.e)(e) && (i <= e[0] || i <= e[1] || 0 === e[1])) return _(), u && l() && I().onDiscarded(C), !1;
                            const o = x().data;
                            d.data = f(o, r) ? o : r, u && l() && I().onSuccess(r, C, n)
                        } catch (k) {
                            v();
                            const e = I(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            e.isPaused() || (d.error = k, u && l() && (e.onError(k, C, e), (!0 === t || (0, a.a)(t) && t(k)) && (I().revalidateOnFocus && I().revalidateOnReconnect && !L() || e.onErrorRetry(k, C, e, (e => {
                                const t = h[C];
                                t && t[0] && t[0](o.I0, e)
                            }), {
                                retryCount: (s.retryCount || 0) + 1,
                                dedupe: !0
                            }))))
                        }
                        return c = !1, _(), !0
                    }), [C, s]), ee = (0, r.useCallback)(((...e) => (0, a.n)(s, D.current, ...e)), []);
                    if ((0, a.u)((() => {
                            O.current = t, R.current = n, (0, a.e)(Z) || (H.current = Z)
                        })), (0, a.u)((() => {
                            if (!C) return;
                            const e = X.bind(a.U, l);
                            let t = 0;
                            if (I().revalidateOnFocus) {
                                const e = Date.now();
                                t = e + I().focusThrottleInterval
                            }
                            const n = (0, c.aw)(C, h, ((n, r = {}) => {
                                if (n == o.CC) {
                                    const n = Date.now();
                                    I().revalidateOnFocus && n > t && L() && (t = n + I().focusThrottleInterval, e())
                                } else if (n == o.jB) I().revalidateOnReconnect && L() && e();
                                else {
                                    if (n == o.q2) return X();
                                    if (n == o.I0) return X(r)
                                }
                            }));
                            return A.current = !1, D.current = C, E.current = !0, P({
                                _k: T
                            }), K && ((0, a.e)(G) || a.r ? e() : (0, a.t)(e)), () => {
                                A.current = !0, n()
                            }
                        }), [C]), (0, a.u)((() => {
                            let e;

                            function t() {
                                const t = (0, a.a)(k) ? k(x().data) : k;
                                t && -1 !== e && (e = setTimeout(n, t))
                            }

                            function n() {
                                x().error || !p && !I().isVisible() || !g && !I().isOnline() ? t() : X(l).then(t)
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }), [k, p, g, C]), (0, r.useDebugValue)(J), d && (0, a.e)(G) && C) {
                        if (!a.I && a.r) throw new Error("Fallback data is required when using Suspense in SSR.");
                        O.current = t, R.current = n, A.current = !1;
                        const e = S[C];
                        if (!(0, a.e)(e)) {
                            const t = ee(e);
                            u(t)
                        }
                        if (!(0, a.e)(W)) throw W; {
                            const e = X(l);
                            (0, a.e)(J) || (e.status = "fulfilled", e.value = !0), u(e)
                        }
                    }
                    return {
                        mutate: ee,
                        get data() {
                            return F.data = !0, J
                        },
                        get error() {
                            return F.error = !0, W
                        },
                        get isValidating() {
                            return F.isValidating = !0, $
                        },
                        get isLoading() {
                            return F.isLoading = !0, Y
                        }
                    }
                })))
        }
    }
]);
//# debugId=dc908254-4197-5266-961a-8f3f496c326c