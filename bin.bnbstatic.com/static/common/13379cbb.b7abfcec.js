! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8dfa2344-d245-5411-8990-8fe0f7fb57cc")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [617], {
        EndZ: (e, t, r) => {
            "use strict";
            r.d(t, {
                z6: () => s
            });
            var n = r("sViW"),
                o = r("3yYM"),
                i = r.n(o),
                a = r("VA12"),
                s = function() {
                    var e = (0, n.A)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.get)("/bapi/margin/v1/public/margin/all-price-index");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
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
                var e = (0, n.A)(i().mark((function e(t) {
                    var r, n;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = !1, e.prev = 1, e.next = 4, (0, a.post)("/bapi/margin/v1/private/margin/repay-debt", {
                                    asset: t
                                });
                            case 4:
                                n = e.sent, r = n.success, e.next = 10;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1);
                            case 10:
                                return e.abrupt("return", r);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })))
            })(),
            function() {
                var e = (0, n.A)(i().mark((function e(t, r) {
                    var n, o;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = !1, e.prev = 1, e.next = 4, (0, a.post)("/bapi/margin/v1/private/margin/repay-debt", {
                                    asset: t,
                                    specifyRepayAssets: r
                                });
                            case 4:
                                o = e.sent, n = o.success, e.next = 10;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1);
                            case 10:
                                return e.abrupt("return", n);
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
                var e = (0, n.A)(i().mark((function e(t) {
                    var r, n, o, s;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, a.post)("/bapi/margin/v1/private/margin/avg-open-price", {
                                    assetNames: t
                                });
                            case 4:
                                n = e.sent, o = n.success, s = n.data, o && (r = s), e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(1);
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 9]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(i().mark((function e(t) {
                    var r, n, o, s;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, a.post)("/bapi/margin/v1/private/isolated-margin/avg-open-price", {
                                    symbol: t
                                });
                            case 4:
                                n = e.sent, o = n.success, s = n.data, o && (r = s), e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(1);
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 9]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(i().mark((function e(t) {
                    var r, n, o, s;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = [], e.prev = 1, e.next = 4, (0, a.post)("/bapi/margin/v1/private/isolated-margin/pnl-price", {
                                    symbols: t
                                });
                            case 4:
                                n = e.sent, o = n.success, s = n.data, o && (r = s), e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(1);
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 9]
                    ])
                })))
            }(),
            function() {
                var e = (0, n.A)(i().mark((function e(t) {
                    var r, n, o, s;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = {}, e.prev = 1, e.next = 4, (0, a.post)("/bapi/margin/v1/private/margin/break-even-price", {
                                    tokens: t
                                });
                            case 4:
                                n = e.sent, o = n.success, s = n.data, o && (r = s), e.next = 11;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(1);
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 9]
                    ])
                })))
            }()
        },
        PyYO: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => n
            });
            var n = r("HIvj").vz
        },
        nn0X: (e, t, r) => {
            "use strict";
            r.d(t, {
                oP: () => c,
                uE: () => l
            });
            var n = r("DTvD"),
                o = r("/OND"),
                i = function(e) {
                    return e.cookies || {}
                },
                a = function() {
                    var e = (0, n.useRef)(null),
                        t = (0, o.wA)();
                    return e.current = (0, o.d4)(i), {
                        cookies: e.current,
                        saveCookie: (0, n.useCallback)((function(r, n) {
                            var o = "function" === typeof n ? n(e.current[r]) : n;
                            t.cookies.save({
                                key: r,
                                value: o
                            })
                        }), [])
                    }
                },
                s = "userPreferredCurrency",
                c = function() {
                    var e = a(),
                        t = e.cookies,
                        r = e.saveCookie;
                    return {
                        cachePreferFiat: t[s],
                        setCacheFiat: (0, n.useCallback)((function(e) {
                            r(s, e)
                        }), [])
                    }
                },
                l = function() {
                    return c().cachePreferFiat
                }
        },
        HIvj: (e, t, r) => {
            "use strict";
            r.d(t, {
                E7: () => h,
                PC: () => d,
                Py: () => p,
                vz: () => u,
                xN: () => g
            });
            var n = r("DTvD"),
                o = r("/OND"),
                i = r("nn0X"),
                a = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                s = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userInfo
                },
                c = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.fiatCurrency
                },
                l = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userPreferredCurrency
                },
                u = function() {
                    return (0, o.d4)(a, o.bN) || {}
                },
                p = function() {
                    return (0, o.d4)(s, o.bN) || {}
                },
                d = function() {
                    return (0, o.d4)(c, o.bN) || {}
                },
                f = function() {
                    return (0, o.d4)(l, o.bN) || {}
                },
                h = function() {
                    var e = u().isLoggedIn,
                        t = (0, i.oP)().setCacheFiat,
                        r = f().configName;
                    (0, n.useEffect)((function() {
                        e && r && t(r)
                    }), [e, r])
                },
                g = function() {
                    var e = (0, o.wA)(),
                        t = u().isLoggedIn,
                        r = (0, i.oP)(),
                        a = r.cachePreferFiat,
                        s = r.setCacheFiat,
                        c = f().configName;
                    return {
                        userFiat: (t ? c : a) || a,
                        setUseFiat: (0, n.useMemo)((function() {
                            return t ? function(t) {
                                return e.userCenter.updateCurrentFiat(t)
                            } : function(e) {
                                return s(e)
                            }
                        }), [t])
                    }
                }
        },
        zvJu: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => n
            });
            var n = function(e) {
                location.origin.includes("localhost") && ("undefined" !== typeof(e || {}).df_2 && console.error("@binance/track warning: df_2 is lang code, cannot be modified, please use another field name!"))
            }
        },
        GlbY: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => n
            });
            const n = r("err1").A
        },
        err1: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d,
                D: () => p
            });
            var n, o = r("BK7R"),
                i = r("QUKP"),
                a = r("gZfF"),
                s = r("blBx"),
                c = r("zvJu"),
                l = function(e, t, r) {
                    var n = "undefined" !== typeof e[t] ? e[t] : e[r];
                    if ("undefined" === typeof n) throw new Error("".concat(t, " is require"));
                    e[t] = n
                },
                u = function(e) {
                    var t = "undefined" === typeof e ? "undefined" : (0, s.A)(e);
                    return "number" === t || "string" === t || "boolean" === t
                },
                p = function(e) {
                    n = e
                };
            const d = function(e, t, r) {
                var s = null,
                    p = function(e, t, r) {
                        if ("string" === typeof e) {
                            (0, c.o)(t);
                            var n = t || {},
                                s = (n.df_2, (0, a.A)(n, ["df_2"]));
                            return {
                                info: (0, i.A)((0, o.A)({}, s), {
                                    eventName: e
                                }),
                                opt: r
                            }
                        }
                        if ("object" === typeof e) {
                            (0, c.o)(e);
                            var l = e || {};
                            return l.df_2, {
                                info: (0, a.A)(l, ["df_2"]),
                                opt: t
                            }
                        }
                        throw new Error("params is error")
                    }(e, t, r),
                    d = p.info,
                    f = void 0 === d ? {} : d,
                    h = p.opt,
                    g = f.eventName,
                    b = (0, a.A)(f, ["eventName"]);
                try {
                    l(f, "eventName"), l(f, "elementID", "elementId"), l(f, "pageName", "ScreenName"),
                        function(e) {
                            if ("object" === typeof e) Object.entries(e).forEach((function(e) {
                                if (Array.isArray(e[1])) {
                                    if (e[1].filter((function(e) {
                                            return !u(e)
                                        })).length > 0) throw new Error("extraInfo key:".concat(e[0], " array data limit string/number/boolean"))
                                } else if (!u(e[1])) throw new Error("extraInfo key:".concat(e[0], " limited string/number/array/boolean"))
                            }));
                            else if ("undefined" !== typeof e) throw new Error("extraInfo must be a object")
                        }(null === f || void 0 === f ? void 0 : f.extraInfo)
                } catch (v) {
                    s = v
                }
                var m = n && n(g, b, function(e) {
                    return "function" === typeof e ? {
                        callback: e
                    } : "object" === typeof e ? e : {}
                }(h));
                return s ? Promise.reject(s) : m
            }
        },
        LCuF: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("vTXz");
            n.az.displayName = "Box";
            const o = n.az
        },
        eeDD: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => S
            });
            var n = r("M5j3"),
                o = r("BK7R"),
                i = r("gZfF"),
                a = r("VP0d"),
                s = r("N/Z2"),
                c = r("DTvD"),
                l = r.n(c),
                u = r("hTvQ"),
                p = r.n(u),
                d = r("g80r"),
                f = r("6aZm"),
                h = r("C6y2"),
                g = r("LCuF");
            const b = l().createContext({
                context: null
            });

            function m() {
                var e = (0, s.A)(["\n  0% {\n    transform: scale(0.95);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function v() {
                var e = (0, s.A)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);
                return v = function() {
                    return e
                }, e
            }
            var y = l().useLayoutEffect,
                x = (0, d.i7)(m()),
                w = (0, d.i7)(v()),
                k = (0, f.UF)("uikit-core", "Dialog"),
                C = (0, c.forwardRef)((function(e, t) {
                    k("Modal");
                    var r = e.visible,
                        s = e.mask,
                        u = void 0 === s || s,
                        d = e.onMaskClick,
                        f = e.children,
                        m = e.maskStyles,
                        v = e.onClick,
                        C = e.onPressEnter,
                        S = void 0 === C ? function() {} : C,
                        A = e.onPressEsc,
                        _ = void 0 === A ? function() {} : A,
                        B = e.externalBlock,
                        E = (0, i.A)(e, ["visible", "mask", "onMaskClick", "children", "maskStyles", "onClick", "onPressEnter", "onPressEsc", "externalBlock"]),
                        T = (0, a.A)(l().useState(!1), 2),
                        R = T[0],
                        I = T[1];
                    l().useEffect((function() {
                        r && I(!0)
                    }), [r]);
                    var z = function(e) {
                        13 === e.keyCode ? S(e) : 27 === e.keyCode && _(e)
                    };
                    (0, c.useEffect)((function() {
                        return r ? document.addEventListener("keydown", z) : document.removeEventListener("keydown", z),
                            function() {
                                document.removeEventListener("keydown", z)
                            }
                    }), [r]), y((function() {
                        return u && R ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                            function() {
                                document.body.style.removeProperty("overflow")
                            }
                    }), [u, R]);
                    var D = (0, c.useMemo)((function() {
                            return u ? {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                bg: "dialog.mask"
                            } : {
                                left: "50%",
                                top: "50%",
                                transform: "translate3d(-50%, -50%, 0)"
                            }
                        }), [u]),
                        j = (0, c.useMemo)((function() {
                            return {
                                animation: "".concat(r ? x : w, " 0.3s ease-in-out"),
                                animationIterationCount: 1
                            }
                        }), [r]);
                    return R ? p().createPortal(l().createElement(h.A, {
                        ref: t,
                        __css: (0, o.A)({
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "modal",
                            flexDirection: B ? "column" : "unset"
                        }, D),
                        sx: m,
                        onClick: function(e) {
                            e.target === e.currentTarget && d && d(e)
                        }
                    }, l().createElement(b.Provider, {
                        value: {
                            context: "modal"
                        }
                    }, l().createElement(g.A, (0, n.A)({
                        __css: (0, o.A)({
                            position: "relative",
                            boxShadow: "dialog",
                            borderRadius: "large",
                            bg: "popupBg"
                        }, j),
                        onAnimationEnd: function() {
                            I(r)
                        }
                    }, E, {
                        onClick: v
                    }), f), l().createElement(g.A, {
                        __css: j
                    }, B))), document.body) : null
                }));
            C.displayName = "Dialog";
            const S = C
        },
        C6y2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var n = r("M5j3"),
                o = r("BK7R"),
                i = r("DTvD"),
                a = r.n(i),
                s = r("6aZm"),
                c = r("LCuF"),
                l = (0, s.UF)("uikit-core", "Flex"),
                u = (0, i.forwardRef)((function(e, t) {
                    return l(), a().createElement(c.A, (0, n.A)({
                        ref: t
                    }, e, {
                        __css: (0, o.A)({
                            display: "flex"
                        }, e.__css || {})
                    }))
                }));
            u.displayName = "Flex";
            const p = u
        },
        "w/Qz": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("M5j3"),
                o = r("BK7R"),
                i = r("gZfF"),
                a = r("DTvD"),
                s = r.n(a),
                c = r("LCuF"),
                l = function(e) {
                    var t = e.size,
                        r = e.sx,
                        a = e.color,
                        l = void 0 === a ? "currentColor" : a,
                        u = (0, i.A)(e, ["size", "sx", "color"]),
                        p = c.A;
                    return s().createElement(p, (0, n.A)({
                        as: "svg",
                        xmlns: "http://www.w3.org/2000/svg",
                        variant: "icon",
                        sx: (0, o.A)({
                            fill: l
                        }, r),
                        __css: {
                            color: l,
                            width: t,
                            height: t,
                            fontSize: t
                        }
                    }, u))
                };
            l.defaultProps = {
                size: 24
            }, l.displayName = "SVG";
            const u = l
        },
        "rR/7": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("M5j3"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("w/Qz");
            const s = function(e) {
                return i().createElement(a.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        "/Lz3": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("M5j3"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("w/Qz");
            const s = function(e) {
                return i().createElement(a.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        lwGX: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("M5j3"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("w/Qz");
            const s = function(e) {
                return i().createElement(a.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M18 8l4 4 4-4-4-4-4 4z",
                    fill: "url(#general-success_svg__paint0_linear_22059_28209)"
                }), i().createElement("path", {
                    d: "M85 76l3 3 3-3-3-3-3 3z",
                    fill: "url(#general-success_svg__paint1_linear_22059_28209)"
                }), i().createElement("path", {
                    d: "M86 20l2 2 2-2-2-2-2 2z",
                    fill: "url(#general-success_svg__paint2_linear_22059_28209)"
                }), i().createElement("path", {
                    d: "M0 47l3 3 3-3-3-3-3 3z",
                    fill: "url(#general-success_svg__paint3_linear_22059_28209)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 88c22.091 0 40-17.909 40-40S70.091 8 48 8 8 25.909 8 48s17.909 40 40 40zM31 48.335L43.475 61 64 40.241 59.812 36 43.475 52.547l-8.317-8.423L31 48.335z",
                    fill: "url(#general-success_svg__paint4_linear_22059_28209)"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29zM31 48.335L43.475 61 64 40.241 59.812 36 43.475 52.547l-8.317-8.423L31 48.335z",
                    fill: "url(#general-success_svg__paint5_linear_22059_28209)"
                }), i().createElement("defs", null, i().createElement("linearGradient", {
                    id: "general-success_svg__paint0_linear_22059_28209",
                    x1: 22,
                    y1: 12,
                    x2: 22,
                    y2: 4,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint1_linear_22059_28209",
                    x1: 88,
                    y1: 79,
                    x2: 88,
                    y2: 73,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint2_linear_22059_28209",
                    x1: 88,
                    y1: 22,
                    x2: 88,
                    y2: 18,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint3_linear_22059_28209",
                    x1: 3,
                    y1: 50,
                    x2: 3,
                    y2: 44,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint4_linear_22059_28209",
                    x1: 8,
                    y1: 48,
                    x2: 88,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#28D294",
                    stopOpacity: 0
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                })), i().createElement("linearGradient", {
                    id: "general-success_svg__paint5_linear_22059_28209",
                    x1: 48,
                    y1: 77,
                    x2: 48,
                    y2: 19,
                    gradientUnits: "userSpaceOnUse"
                }, i().createElement("stop", {
                    stopColor: "#02C076"
                }), i().createElement("stop", {
                    offset: 1,
                    stopColor: "#28D294"
                }))))
            }
        },
        NrY2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD");
            const o = n.createContext("ltr")
        },
        S8bp: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("DTvD"),
                o = r("VXBK"),
                i = r("NrY2");
            const a = function(e) {
                var t = e.children,
                    r = e.dir,
                    a = e.theme;
                return n.createElement(i.A.Consumer, null, (function(e) {
                    return n.createElement(i.A.Provider, {
                        value: r || e
                    }, n.createElement(o.NP, {
                        theme: a
                    }, t))
                }))
            }
        },
        Z2u4: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => I
            });
            var n = r("BK7R"),
                o = r("QUKP");
            var i = {
                    normal: {
                        height: "32px",
                        ".rc-picker": {
                            fontSize: "sm",
                            ".rc-picker-input > input": {
                                fontSize: "sm"
                            }
                        }
                    },
                    tiny: {
                        height: "20px",
                        ".rc-picker": {
                            fontSize: "xs",
                            ".rc-picker-input > input": {
                                fontSize: "xs"
                            }
                        }
                    }
                },
                a = {
                    ".rc-picker-range": {
                        "&:hover": {
                            ".rc-picker-clear": {
                                opacity: 1
                            }
                        }
                    },
                    ".rc-picker-clear": {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "t.third",
                        opacity: 0,
                        transition: ".3s opacity linear",
                        cursor: "pointer"
                    },
                    ".rc-picker-suffix": {
                        display: "flex",
                        alignItems: "center",
                        color: "t.third"
                    }
                },
                s = (0, n.A)({
                    display: "inline-flex",
                    minWidth: "240px",
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker": {
                        flexGrow: 1
                    },
                    ".rc-picker .rc-picker-input > input": {
                        py: "0px",
                        outline: "none",
                        border: "none",
                        color: "t.primary",
                        bg: "inherit",
                        textAlign: "center",
                        "&::placeholder": {
                            color: "t.placeholder"
                        }
                    }
                }, a),
                c = function(e) {
                    return Object.keys(i).reduce((function(t, r) {
                        return t[r] = (0, n.A)({}, e, i[r]), t
                    }), {})
                },
                l = (0, n.A)({
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    height: "48px",
                    bg: "transparent",
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "ls",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "246px",
                    py: "14px",
                    paddingRight: "ls",
                    "&.bn-picker-opened": {
                        borderColor: "primaryHover"
                    },
                    "&.bn-picker-disabled": {
                        backgroundColor: "line",
                        ".rc-picker-input input": {
                            cursor: "not-allowed",
                            color: "t.disabled"
                        },
                        "&:hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "line"
                        }
                    },
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker-active-bar": {
                        display: "none"
                    },
                    ".rc-picker-input input": {
                        border: "none",
                        color: "t.primary",
                        lineHeight: "20px",
                        background: "transparent",
                        padding: 0,
                        paddingLeft: "ls",
                        outline: "none",
                        "&::placeholder": {
                            color: "t.disabled"
                        }
                    }
                }, a);
            const u = {
                    rangePicker: {
                        default: s,
                        underline: (0, n.A)({}, c({
                            variant: "rangePicker.default",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "line",
                            "&.bn-picker-opened": {
                                borderBottomColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        outline: (0, n.A)({}, c({
                            variant: "rangePicker.default",
                            height: "48px",
                            borderRadius: "small",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            pr: "xs",
                            "&.bn-picker-opened": {
                                borderColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        phantom: (0, n.A)({}, c({
                            variant: "rangePicker.default",
                            border: "none",
                            ".rc-picker-range.rc-picker-focused .rc-picker-active-bar": {
                                opacity: "0"
                            },
                            ".rc-picker-range .rc-picker-input:hover": {
                                border: "none",
                                input: {
                                    color: "t.yellow"
                                }
                            },
                            "&.bn-picker-opened": {
                                ".rc-picker-range.rc-picker-focused .rc-picker-input.rc-picker-input-active input": {
                                    color: "t.yellow"
                                }
                            },
                            ":hover": {
                                border: "none"
                            }
                        })),
                        line: {
                            md: (0, o.A)((0, n.A)({}, l), {
                                height: "40px"
                            }),
                            lg: (0, o.A)((0, n.A)({}, l), {
                                height: "48px"
                            })
                        }
                    }
                },
                p = {
                    text: {
                        extraHeadline: {
                            fontWeight: "semibold",
                            fontSize: "xxxxl",
                            lineHeight: "64px"
                        },
                        headline1: {
                            fontWeight: "semibold",
                            fontSize: "xxxl",
                            lineHeight: "56px"
                        },
                        headline2: {
                            fontWeight: "semibold",
                            fontSize: "xxl",
                            lineHeight: "48px"
                        },
                        headline3: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        headline4: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        headline5: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        headline6: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        largeBody: {
                            fontWeight: "normal",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        mediumBody: {
                            fontWeight: "light",
                            fontSize: "minor",
                            lineHeight: "28px"
                        },
                        subtitle1: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        subtitle2: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        body1: {
                            fontWeight: "normal",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        body2: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        captionSub: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        caption: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        largeLink: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        },
                        primaryNum1: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        primaryNum2: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        primaryNum3: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        secondaryNum1: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        secondaryNum2: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        tertiaryNum1: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        tertiaryNum2: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        tertiaryNum3: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        formLabel: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelSmall: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelDisabled: {
                            variant: "text.formLabel",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        formLabelSmallDisabled: {
                            variant: "text.formLabelSmall",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        checkbox: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: 1.43,
                            color: "t.primary",
                            cursor: "pointer"
                        },
                        checkboxDisabled: {
                            variant: "text.checkbox",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        infoHelperText: {
                            height: "24px",
                            lineHeight: "24px",
                            fontSize: "xs",
                            color: "t.third"
                        },
                        errorHelperText: {
                            variant: "text.infoHelperText",
                            color: "error"
                        },
                        dottedUnderline: {
                            variant: "text.formLabel",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            borderBottomColor: "t.third"
                        },
                        title2: {
                            fontWeight: "semibold",
                            fontSize: "48px",
                            lineHeight: "56px"
                        },
                        title3: {
                            fontWeight: "semibold",
                            fontSize: "40px",
                            lineHeight: "48px"
                        },
                        title4: {
                            fontWeight: "semibold",
                            fontSize: "32px",
                            lineHeight: "40px"
                        },
                        title5: {
                            fontWeight: "semibold",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        largeText: {
                            fontWeight: "normal",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        title6: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            lineHeight: "24px"
                        },
                        heading: {
                            fontFamily: "heading",
                            lineHeight: "heading",
                            fontWeight: "heading"
                        },
                        display: {
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading",
                            fontSize: [5, 6, 7]
                        },
                        caps: {
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                        },
                        h1: {
                            fontWeight: "semibold",
                            fontSize: [24, 28, 32],
                            lineHeight: ["30px", "32px", "40px"]
                        },
                        h2: {
                            fontWeight: "normal",
                            fontSize: 24,
                            lineHeight: "30px"
                        },
                        h3: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "28px"
                        },
                        h4: {
                            fontWeight: "semibold",
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        h5: {
                            fontWeight: "semibold",
                            fontSize: 2
                        },
                        h6: {
                            fontWeight: "semibold",
                            fontSize: 1
                        },
                        label1: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "26px"
                        },
                        label2: {
                            fontWeight: "medium",
                            fontSize: [16, 18],
                            lineHeight: ["22px", "24px"]
                        },
                        label3: {
                            fontWeight: ["normal", "medium"],
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        label4: {
                            fontWeight: "medium",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label5: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label6: {
                            fontWeight: "normal",
                            fontSize: 13,
                            lineHeight: "18px"
                        },
                        label7: {
                            fontWeight: "medium",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        label8: {
                            fontWeight: "normal",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        p1: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        p2: {
                            fontWeight: "normal",
                            fontSize: 0
                        }
                    }
                };
            var d = p.text,
                f = d.subtitle1,
                h = d.caption,
                g = d.body2,
                b = d.body1,
                m = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {
                        px: "sm",
                        py: "xxs",
                        height: "28px"
                    },
                    ".bn-sdd-optionGroupText": (0, n.A)({}, h),
                    " .bn-sdd-option": {
                        maxHeight: "40px",
                        px: "sm",
                        fontSize: "sm",
                        lineHeight: "20px"
                    },
                    " .bn-sdd-value": {
                        minHeight: "32px",
                        pl: "ls",
                        pr: "md",
                        py: "ls"
                    },
                    " .bn-sdd-noResults": {
                        p: "ls",
                        fontSize: "sm",
                        color: "t.primary"
                    },
                    " .bn-sdd-innerInputContainer": {
                        px: "ls",
                        py: "xs",
                        width: "100%"
                    },
                    " .bn-sdd-icon": {
                        cursor: "pointer",
                        verticalAlign: "middle"
                    }
                };
            const v = {
                searchDropdown: {
                    default: {
                        position: "relative",
                        outline: "none",
                        ".bn-sdd-dropdown": {
                            position: "absolute",
                            zIndex: "dropdown",
                            transition: "height 0.2s ease",
                            bg: "popupBg",
                            boxShadow: "elevation2",
                            borderRadius: "default"
                        },
                        ".bn-sdd-list": {
                            padding: 0,
                            overflowY: "scroll",
                            py: "minor",
                            borderBottomLeftRadius: "default",
                            borderBottomRightRadius: "default"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    },
                    drawer: {
                        px: "md",
                        bg: "modal.bg",
                        position: "relative",
                        flexDirection: "column",
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge",
                        ".bn-sdd-list": {
                            pl: 0,
                            listStyle: "none",
                            overflowY: "auto",
                            py: "minor"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        },
                        ".bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        }
                    },
                    outline: m,
                    filled: m,
                    line: m,
                    clear: m,
                    normal: m,
                    emphasizedGrouping: {
                        variant: "searchDropdown.default",
                        " .bn-sdd-optionGroupLabel": {
                            px: "sm",
                            py: "s",
                            "&.is-active .bn-sdd-optionGroupText": {
                                color: "t.yellow"
                            },
                            "&:hover": {
                                bg: "bg3"
                            },
                            "&:active": {
                                bg: "bg2"
                            },
                            "&.disabled": {
                                " .bn-sdd-optionGroupText": (0, n.A)({
                                    color: "t.disabled"
                                }, b)
                            }
                        },
                        " .bn-sdd-optionGroupText": (0, n.A)({
                            color: "t.primary"
                        }, f),
                        " .bn-sdd-option-item": {
                            maxHeight: "40px"
                        },
                        " .bn-sdd-option": (0, n.A)({
                            maxHeight: "40px",
                            px: "sm"
                        }, g),
                        " .bn-sdd-value": {
                            minHeight: "32px",
                            pl: "ls",
                            pr: "md",
                            py: "ls"
                        },
                        " .bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        },
                        " .bn-sdd-innerInputContainer": {
                            px: "ls",
                            py: "xs",
                            width: "100%"
                        },
                        " .bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    }
                }
            };
            var y = {
                py: "xs",
                px: ["sm", "md"],
                fontWeight: "medium",
                fontSize: ["sm", "md"],
                lineHeight: ["20px", "24px"],
                marginRight: ["sm", "md"],
                userSelect: "none",
                color: "t.third",
                borderRadius: "default"
            };
            const x = {
                tabs: {
                    default: {
                        tab: {
                            padding: "10px 90px",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            "&.active": {
                                borderBottomWidth: "tiny",
                                borderBottomStyle: "solid",
                                borderBottom: "tiny solid",
                                borderColor: "primary",
                                color: "primary"
                            }
                        }
                    },
                    standard: {
                        container: {
                            boxShadow: "inset 0px -1px 0px currentColor",
                            color: "line"
                        },
                        normal: {
                            padding: "14px 0px",
                            marginRight: "28px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 0px -2px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.standard.normal",
                            padding: "20px 0px",
                            marginRight: "28px",
                            lineHeight: "24px",
                            fontSize: "md"
                        },
                        small: {
                            variant: "tabs.standard.normal",
                            padding: "8px 0px"
                        }
                    },
                    vertical: {
                        layout: {
                            display: "flex"
                        },
                        container: {
                            color: "line",
                            display: "flex",
                            flexDirection: "column",
                            width: "fit-content"
                        },
                        normal: {
                            padding: "10px 18px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 2px 0px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.vertical.normal",
                            margin: "4px 0",
                            "&.active": {
                                boxShadow: "inset 4px 0px 0px #F0B90B",
                                color: "t.primary"
                            }
                        }
                    },
                    flow: {
                        tab: {
                            fontWeight: "medium",
                            fontSize: ["14px", "16px"],
                            lineHeight: ["20px", "24px"],
                            letterSpacing: [".16px", ".32px"],
                            padding: ["8px 16px", "8px 24px"],
                            marginRight: "16px",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "extraLarger",
                            ":hover": {
                                bg: "bg3"
                            },
                            "&.active": {
                                bg: "tabs.flowBg",
                                color: "tabs.flowText"
                            }
                        }
                    },
                    filled: {
                        tab: {
                            primary: (0, o.A)((0, n.A)({}, y), {
                                "&.active": {
                                    bg: "badgeYellowBg",
                                    color: "t.yellow"
                                }
                            }),
                            secondary: (0, o.A)((0, n.A)({}, y), {
                                "&.active": {
                                    bg: "bg3",
                                    color: "t.primary"
                                }
                            })
                        }
                    },
                    secondary: {
                        container: {
                            bg: "bg3",
                            borderRadius: "default",
                            height: "24px",
                            width: "fit-content"
                        },
                        tab: {
                            fontSize: "xs",
                            lineHeight: "16px",
                            px: "minor",
                            py: "minor",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "default",
                            minWidth: "82px",
                            textAlign: "center",
                            "&.active": {
                                bg: "primary",
                                color: "bg5",
                                fontWeight: "medium"
                            }
                        }
                    },
                    "trade-next": {
                        tab: {
                            padding: "16px 1px 10px 1px",
                            marginRight: "sm",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            fontSize: "sm",
                            color: "t.secondary",
                            "&.active": {
                                borderBottom: "2px solid",
                                borderColor: "primary",
                                color: "t.primary",
                                fontWeight: "semibold"
                            }
                        }
                    }
                }
            };
            var w = {
                default: {
                    borderBottom: "1px solid transparent",
                    borderColor: "line",
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {},
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "md",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        mr: "minor",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                helperText: {
                    default: {
                        variant: "text.body2"
                    },
                    info: {
                        variant: "textField.helperText.default",
                        color: "t.third"
                    },
                    error: {
                        variant: "textField.helperText.default",
                        color: "error"
                    }
                },
                outline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    "& .bn-input-label": {
                        fontSize: "xs"
                    },
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "xs",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                outlineLarge: {
                    variant: "textField.outline",
                    "&  input": {
                        px: "ls"
                    }
                },
                inline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "minor",
                        textAlign: "right",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        ml: "xs",
                        minWidth: "48px",
                        fontSize: "sm",
                        color: "t.secondary"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mr: "xs",
                        fontSize: "sm",
                        color: "t.third"
                    },
                    "& .bn-input-tooltip": {
                        position: "absolute",
                        bottom: "110%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: "tooltip"
                    },
                    "& .bn-input-tooltip-arrow": {
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        left: "50%",
                        bottom: "-4px",
                        transform: "translateX(-50%) rotate(45deg)",
                        bg: "#FFFFFF",
                        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.08)"
                    },
                    "& .bn-input-tooltip-content": {
                        boxShadow: "card",
                        borderRadius: "default",
                        p: "xxs",
                        bg: "#FFFFFF",
                        fontSize: "sm",
                        lineHeight: "18px",
                        color: "t.secondary"
                    }
                }
            };
            const k = {
                textField: w,
                textFieldV2: (0, o.A)((0, n.A)({}, w), {
                    line: {
                        border: "1px solid transparent",
                        borderColor: "line",
                        borderRadius: "default",
                        bg: "transparent",
                        ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-focus": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            fontSize: "14px"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    filled: {
                        bg: "bg3",
                        borderRadius: "default",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        "&.bn-input-status-focus": {
                            bg: "transparent",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            opacity: .7,
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            borderRadius: "default",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            mr: "minor",
                            fontSize: "sm"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    transparent: {
                        variant: "textField.line",
                        border: "none"
                    }
                })
            };
            var C = {
                borderRadius: "default",
                boxShadow: "tooltip",
                bg: "toast.bg",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: ["343px", "360px"],
                minWidth: "288px",
                minHeight: "56px"
            };
            const S = {
                toast: {
                    default: (0, o.A)((0, n.A)({}, C), {
                        color: "t.primary",
                        lineHeight: "18px",
                        fontSize: "sm",
                        maxHeight: "178px",
                        p: "sm"
                    }),
                    error: {
                        variant: "toast.default"
                    },
                    warning: {
                        variant: "toast.default"
                    },
                    success: {
                        variant: "toast.default"
                    },
                    info: {
                        variant: "toast.default"
                    },
                    tips: {
                        variant: "toast.default"
                    },
                    reset: (0, o.A)((0, n.A)({}, C), {
                        ".bn-notification-body-wrapper": {
                            maxHeight: "unset",
                            ".bn-notification-msg-wrapper": {
                                maxHeight: "unset"
                            }
                        }
                    })
                }
            };
            var A = {
                px: "md",
                bg: "modal.bg",
                position: "relative",
                flexDirection: "column"
            };
            const _ = {
                modal: {
                    default: (0, o.A)((0, n.A)({}, A), {
                        borderRadius: "large"
                    }),
                    drawer: (0, o.A)((0, n.A)({}, A), {
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge"
                    })
                },
                modaltitle: {
                    default: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    center: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                        ".modaltitle": {
                            flex: "1",
                            justifyContent: "center"
                        }
                    }
                },
                modalfooter: {
                    default: {
                        gap: "sm",
                        mb: "md",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    },
                    leftReverseOrder: {
                        mb: "md",
                        gap: "sm",
                        justifyContent: "flex-start",
                        ".btn": {
                            "&:nth-of-type(2)": {
                                order: 1
                            },
                            "&:first-of-type": {
                                order: 2
                            }
                        }
                    },
                    column: {
                        flexDirection: "column-reverse",
                        mb: "md",
                        gap: "xs",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    }
                }
            };
            var B = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                },
                E = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
            const T = {
                    uploader: {
                        common: {
                            color: "t.primary",
                            fontSize: "sm",
                            lineHeight: "20px",
                            wordBreak: "keep-all",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none",
                            backgroundColor: "bg3",
                            fontFamily: "inherit",
                            "&:hover": {
                                backgroundColor: "line"
                            }
                        },
                        drag: {
                            default: {
                                position: "relative",
                                variant: "uploader.common",
                                minWidth: "164px",
                                maxWidth: "164px",
                                height: "164px",
                                py: "ls",
                                color: "t.secondary"
                            },
                            waiting: {
                                variant: "uploader.drag.default"
                            },
                            success: {
                                variant: "uploader.drag.default"
                            },
                            loading: {
                                variant: "uploader.drag.default"
                            },
                            error: {
                                variant: "uploader.drag.default",
                                color: "error"
                            },
                            pending: {
                                variant: "uploader.drag.default"
                            }
                        },
                        click: {
                            default: {
                                variant: "uploader.common",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            normal: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, B),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, B),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, B),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, B)
                            },
                            small: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, E),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, E),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, E),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, E)
                            }
                        }
                    }
                },
                R = (0, n.A)({}, T, {
                    alertV2: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            fontSize: 1
                        },
                        error: {
                            variant: "alertV2.default",
                            color: "alertV2.errorColor",
                            bg: "alertV2.errorBg"
                        },
                        warning: {
                            variant: "alertV2.default",
                            color: "alertV2.warningColor",
                            bg: "alertV2.warningBg"
                        },
                        success: {
                            variant: "alertV2.default",
                            color: "alertV2.successColor",
                            bg: "alertV2.successBg"
                        },
                        info: {
                            variant: "alertV2.default",
                            color: "alertV2.infoColor",
                            bg: "alertV2.infoBg"
                        }
                    }
                }, {
                    alert: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            lineHeight: "18px",
                            fontSize: 1
                        },
                        error: {
                            variant: "alert.default",
                            color: "error",
                            bg: "alert.errorBg"
                        },
                        warning: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        },
                        success: {
                            variant: "alert.default",
                            color: "secondary",
                            bg: "alert.successBg"
                        },
                        info: {
                            variant: "alert.default",
                            color: "t.blue",
                            bg: "alert.infoBg"
                        },
                        tips: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        }
                    }
                }, {
                    button: {
                        default: {
                            wordBreak: "keep-all",
                            color: "bg5",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            "&:disabled": {
                                cursor: "not-allowed",
                                backgroundImage: "none",
                                backgroundColor: "line",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active)": {
                                boxShadow: "none"
                            },
                            "&.inactive": {
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        primary: {
                            variant: "button.default",
                            backgroundImage: "none",
                            backgroundColor: "primaryHover",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "primaryHover",
                                opacity: .9
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "primary"
                            },
                            ":disabled:not(.inactive)": {
                                bg: "line",
                                color: "t.disabled",
                                cursor: "not-allowed"
                            },
                            "&.inactive": {
                                bg: "primaryHover",
                                opacity: .3,
                                color: "bg5",
                                cursor: "not-allowed"
                            }
                        },
                        secondary: {
                            variant: "button.default",
                            backgroundColor: "line",
                            color: "t.primary",
                            backgroundImage: "none",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                boxShadow: "none",
                                backgroundColor: "t.disabled",
                                color: "t.primary"
                            },
                            "&:disabled": {
                                cursor: "not-allowed",
                                boxShadow: "none",
                                color: "t.disabled",
                                bg: "bg3"
                            },
                            "&.inactive": {
                                backgroundColor: "line",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        quiet: {
                            variant: "button.default",
                            color: "t.primary",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        text: {
                            variant: "button.default",
                            color: "bg5",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        round: {
                            variant: "button.default",
                            color: "t.yellow",
                            bg: "bg3",
                            borderRadius: "xlarge",
                            ":disabled:not(.inactive)": {
                                bg: "bg3",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "line"
                            },
                            "&.inactive": {
                                bg: "bg3",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        graytype: {
                            variant: "button.default",
                            color: "t.white",
                            bg: "t.secondary",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&.inactive": {
                                bg: "bg4",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        }
                    },
                    buttons: {
                        default: {
                            default: {
                                variant: "button.primary"
                            },
                            primary: {
                                variant: "button.primary"
                            },
                            flatprimary: {
                                variant: "button.primary"
                            },
                            flatpure: {
                                variant: "button.secondary"
                            },
                            secondary: {
                                variant: "button.secondary"
                            },
                            buy: {
                                variant: "button.default",
                                bg: "buy",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "buyHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "buy"
                                }
                            },
                            sell: {
                                variant: "button.default",
                                bg: "sell",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "sellHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "t.sell"
                                }
                            },
                            negative: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            },
                            destructive: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            }
                        },
                        quiet: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        text: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        round: {
                            primary: {
                                variant: "button.round"
                            },
                            default: {
                                variant: "button.round"
                            }
                        },
                        graytype: {
                            primary: {
                                variant: "button.graytype"
                            },
                            default: {
                                variant: "button.graytype"
                            }
                        },
                        primary: {
                            default: {
                                variant: "button.primary"
                            }
                        }
                    }
                }, {
                    variants: {
                        inputCode: {
                            width: "inputCode",
                            marginRight: "xs"
                        },
                        avatar: {
                            width: "avatar",
                            height: "avatar",
                            borderRadius: "circle"
                        },
                        card: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        },
                        standardLink: {
                            fontSize: "sm",
                            color: "t.yellow"
                        },
                        defaultLink: {
                            fontSize: "xs",
                            color: "t.yellow",
                            textDecoration: "none"
                        },
                        secondaryLink: {
                            fontSize: "xs",
                            color: "t.primary"
                        },
                        link: {
                            color: "primary"
                        },
                        nav: {
                            fontSize: "sm",
                            fontWeight: "bold",
                            display: "inline-block",
                            p: "xs",
                            color: "inherit",
                            textDecoration: "none",
                            ":hover,:focus,.active": {
                                color: "primary"
                            }
                        },
                        badge: {
                            fontSize: "xs",
                            color: "#fff",
                            bg: "error",
                            fontWeight: "semibold",
                            borderRadius: "circle"
                        },
                        mask: {
                            bg: "rgba(0, 0, 0, 0.5)",
                            zIndex: "mask"
                        },
                        icon: {
                            fill: "t.primary"
                        },
                        balanceChart: {
                            fill: "bg1"
                        },
                        tooltip: {
                            variant: "text.caption",
                            fontSize: "xs",
                            color: "t.white",
                            backgroundColor: "bg4",
                            borderRadius: "default",
                            py: "xs",
                            px: "ls",
                            filter: "drop-shadow(0px 3px 6px rgba(20,21,26, 0.08)) drop-shadow(0px 7px 14px rgba(71,77,87,0.08)) drop-shadow(0px 0px 1px rgba(20,21,26,0.1))",
                            ".bn-tooltip-arrow::before": {
                                backgroundColor: "bg4"
                            }
                        }
                    }
                }, {
                    dividers: {
                        primary: {
                            bg: "lines.light"
                        },
                        reverse: {
                            bg: "lines.dark"
                        },
                        selected: {
                            bg: "primary"
                        },
                        disabled: {
                            bg: "lines.light"
                        },
                        error: {
                            bg: "error"
                        }
                    }
                }, {
                    forms: {
                        placeholder: {
                            color: "t.secondary",
                            fontSize: "md"
                        },
                        label: {
                            color: "t.secondary",
                            fontSize: "sm"
                        },
                        selectedLabel: {
                            variant: "forms.label",
                            color: "primary"
                        },
                        disabledLabel: {
                            variant: "forms.label",
                            color: "t.muted"
                        },
                        errorLabel: {
                            variant: "forms.label",
                            color: "error"
                        },
                        field: {
                            borderColor: "lightgray",
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 2px ".concat(e.colors.primary)
                                }
                            }
                        },
                        input: {
                            variant: "forms.field"
                        },
                        select: {
                            variant: "forms.field"
                        },
                        textarea: {
                            variant: "forms.field",
                            ":disabled": {
                                bg: "line",
                                cursor: "not-allowed"
                            }
                        },
                        radio: {},
                        slider: {
                            bg: "lightgray"
                        }
                    }
                }, {
                    textarea: {
                        grayflat: {
                            px: "xs",
                            py: "ls",
                            bg: "bg3",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            border: "none",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        },
                        line: {
                            px: "xs",
                            py: "ls",
                            bg: "transparent",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        }
                    }
                }, {
                    hint: {
                        default: {
                            fontSize: "sm",
                            color: "t.primary",
                            "&::before": {
                                mr: "xs"
                            }
                        },
                        circle: {
                            variant: "hint.default",
                            "&::before": {
                                borderRadius: "circle",
                                mr: "xs"
                            }
                        }
                    }
                }, {
                    inputs: {
                        primary: {
                            bg: "transparent",
                            color: "t.primary",
                            fontSize: "md",
                            "&:disabled": {
                                color: "t.muted",
                                "-webkit-text-fill-color": "currentcolor",
                                opacity: 1
                            },
                            "&:disabled + label": {
                                variant: "forms.disabledLabel"
                            },
                            "&:disabled ~ .bn-input-divider": {
                                variant: "dividers.disabled"
                            },
                            "&:focus + label, &:active + label": {
                                variant: "forms.selectedLabel"
                            },
                            "&:focus ~ .bn-input-divider, &:active ~ .bn-input-divider": {
                                variant: "dividers.selected"
                            }
                        },
                        error: {
                            variant: "inputs.primary",
                            "& + label": {
                                variant: "forms.errorLabel"
                            },
                            "& ~ .bn-input-divider": {
                                variant: "dividers.error"
                            },
                            "&:focus + label": {
                                variant: "forms.errorLabel"
                            },
                            "&:focus ~ .bn-input-divider": {
                                variant: "dividers.error"
                            }
                        }
                    }
                }, k, {
                    listGrid: {
                        default: {
                            borderBottomColor: "line",
                            color: "t.third",
                            fontSize: "sm"
                        },
                        header: {
                            mt: "sm",
                            color: "t.primary",
                            fontSize: "md",
                            fontWeight: "medium",
                            padding: "0 10px 0 16px"
                        },
                        toggleIcon: {
                            color: "t.third",
                            fontSize: "minor",
                            verticalAlign: "middle"
                        },
                        leftHeader: {
                            variant: "text.body2",
                            marginRight: "md"
                        },
                        rightContent: {
                            variant: "text.body2",
                            color: "t.primary",
                            textAlign: "right"
                        },
                        checkbox: {
                            width: "26px",
                            "& svg": {
                                color: "icon",
                                size: "20px",
                                mt: "line"
                            }
                        }
                    }
                }, {
                    pagination: {
                        default: {
                            mx: "minor",
                            p: "0px",
                            bg: "transparent",
                            borderRadius: "default",
                            color: "t.secondary",
                            fontWeight: "normal",
                            "&:hover:not(:disabled)": {
                                bg: "line"
                            },
                            "&:disabled": {
                                cursor: "default"
                            }
                        },
                        current: {
                            variant: "pagination.default",
                            bg: "line",
                            color: "t.primary",
                            fontWeight: "medium"
                        }
                    }
                }, {
                    progress: {
                        outer: {
                            width: "100%",
                            height: 8,
                            borderRadius: "default",
                            bg: "lines.primary"
                        },
                        bar: {
                            borderRadius: "default",
                            background: function(e) {
                                return e.colors.primaryGradient
                            }
                        }
                    }
                }, u, {
                    tag: {
                        default: {
                            borderRadius: "default",
                            px: "xs",
                            py: "minor",
                            fontSize: "xs",
                            lineHeight: "16px",
                            bg: "tag.defaultBg",
                            color: "t.yellow"
                        },
                        blue: {
                            variant: "tag.default",
                            bg: "tag.blueBg",
                            color: "tag.blueTxt"
                        },
                        gray: {
                            variant: "tag.default",
                            bg: "tag.grayBg",
                            color: "tag.grayTxt"
                        },
                        green: {
                            variant: "tag.default",
                            bg: "tag.greenBg",
                            color: "tag.greenTxt"
                        },
                        red: {
                            variant: "tag.default",
                            bg: "tag.redBg",
                            color: "tag.redTxt"
                        }
                    }
                }, x, p, {
                    tabBarItem: {
                        primary: {
                            color: "t.third"
                        },
                        selected: {
                            color: "primary"
                        }
                    },
                    tabBar: {
                        default: {
                            bg: "background",
                            height: 56
                        }
                    }
                }, S, {
                    sideMenu: {
                        item: {
                            borderLeftWidth: "4px",
                            borderLeftColor: "primary",
                            cursor: "pointer",
                            alignItems: "center",
                            fontSize: 1,
                            ":hover": {
                                bg: "muted"
                            }
                        },
                        mainItem: {
                            variant: "sideMenu.item",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent",
                            height: "48px",
                            fontWeight: "medium",
                            "& > div": {
                                flexGrow: 1,
                                overflow: "hidden",
                                fontWeight: "medium",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            "& svg:first-of-type": {
                                flexShrink: 0,
                                marginLeft: "xs",
                                marginRight: "xs",
                                color: "icon"
                            }
                        },
                        activeMainItem: {
                            variant: "sideMenu.mainItem",
                            borderLeftColor: "primary",
                            bg: "muted"
                        },
                        activeLeftIcon: {
                            variant: "sideMenu.leftIcon",
                            color: "primary"
                        },
                        rightIcon: {
                            flexShrink: 0,
                            marginLeft: "minor",
                            marginRight: "sm",
                            color: "icon",
                            transition: "all 0.1s"
                        },
                        activeBlock: {
                            paddingLeft: "32px"
                        },
                        subItem: {
                            variant: "sideMenu.item",
                            pt: "xs",
                            pb: "xs",
                            minHeight: "40px",
                            wordBreak: "break-word",
                            fontWeight: "normal",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent"
                        },
                        activeSubItem: {
                            variant: "sideMenu.subItem",
                            bg: "muted",
                            fontWeight: "medium",
                            borderLeftColor: "primary"
                        }
                    }
                }, {
                    mobileMenu: {
                        container: {
                            bg: "black.header",
                            p: "sm"
                        },
                        noSubMenuContainer: {
                            variant: "mobileMenu.container",
                            pb: "xs"
                        },
                        tabs: {
                            height: "35px"
                        },
                        tab: {
                            marginRight: "md",
                            alignItems: "center",
                            color: "t.third",
                            "& >svg": {
                                marginRight: "minor"
                            },
                            "& >div": {
                                flexDirection: "column",
                                fontSize: "md",
                                lineHeight: 1.5,
                                position: "relative",
                                "& >div": {
                                    position: "absolute",
                                    bottom: "-2px",
                                    height: 2,
                                    width: "100%",
                                    bg: "primary"
                                }
                            }
                        },
                        activeTab: {
                            variant: "mobileMenu.tab",
                            "& > svg": {
                                color: "primary"
                            },
                            "& > div": {
                                color: "#fff"
                            }
                        },
                        dropdownContainer: {
                            width: "100%",
                            zIndex: 11,
                            whiteSpace: "nowrap",
                            fontSize: 1
                        },
                        dropdownBox: {
                            marginTop: "-1px",
                            bg: "background",
                            width: "100%",
                            borderRadius: "0 0 2px 2px",
                            color: "#212833"
                        },
                        dropdown: {
                            p: "0 xp",
                            lineHeight: "40px",
                            height: "40px",
                            bg: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "sm",
                            borderRadius: "small"
                        },
                        selectedDropDown: {
                            variant: "mobileMenu.dropdown",
                            bg: "#F5F5F5",
                            fontWeight: "medium"
                        },
                        dropdownInput: {
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "40px",
                            bg: "#fff",
                            borderRadius: "small",
                            padding: "0 md",
                            color: "#212833",
                            fontWeight: "medium",
                            "& >svg": {
                                marginLeft: "minor",
                                flexShrink: 0,
                                color: "icon"
                            },
                            "& >div": {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }
                        }
                    }
                }, {
                    twoFactor: {
                        pointerText: {
                            cursor: "pointer",
                            textAlign: "center",
                            marginTop: "plus",
                            fontWeight: "normal",
                            fontSize: 1
                        },
                        lable: {
                            fontWeight: "normal",
                            fontSize: 1,
                            lineHeight: "32px",
                            marginBottom: "md"
                        },
                        tabItem: {
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [172, 192]
                        },
                        tabItemSingle: {
                            borderBottom: "2px solid",
                            borderColor: "primary",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [344, 384]
                        },
                        loading: {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "lg",
                            color: "t.third",
                            fontSize: "2",
                            height: "100%",
                            width: "100%",
                            zIndex: "1",
                            userSelect: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.9)"
                        },
                        error: {
                            color: "accent",
                            fontSize: "0",
                            marginTop: "minor"
                        },
                        googleActive: {
                            transform: ["translate3d(0px, 0px, 0px)"]
                        },
                        smsActive: {
                            transform: ["translate3d(172px, 0px, 0px)", "translate3d(192px, 0px, 0px)"]
                        }
                    },
                    Ensure2FA: {
                        title: {
                            color: "text",
                            fontWeight: "medium",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        },
                        desc: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        }
                    },
                    Enable2FA: {
                        wrap: {
                            width: [344, 384],
                            height: "342px",
                            position: "relative",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        title: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: "296px",
                            textAlign: "center",
                            lineHeight: "18px"
                        },
                        card: {
                            width: "160px",
                            height: "64px",
                            border: "1px solid #EAECEF",
                            borderRadius: "4px",
                            margin: "minor",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            boxSizing: "content-box",
                            cursor: "pointer",
                            "&:hover": {
                                borderColor: "primary"
                            },
                            "&:active": {
                                backgroundColor: "#FBEAB6",
                                borderColor: "primary"
                            }
                        },
                        risk: {
                            color: "#F0B90A",
                            fontSize: "1",
                            lineHeight: "30px"
                        },
                        skip: {
                            color: "t.third",
                            fontSize: "1",
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        cardWrap: {
                            margin: "40px 0"
                        },
                        icon: {
                            width: "42px",
                            height: "42px",
                            marginRight: "sm"
                        },
                        front: {
                            zIndex: "1",
                            visibility: "visible"
                        },
                        back: {
                            zIndex: "0",
                            visibility: "hidden"
                        }
                    },
                    Modal: {
                        wrap: {
                            py: [40],
                            width: [344, 384],
                            height: [342],
                            borderRadius: "default"
                        }
                    }
                }, {
                    inputCode: {
                        default: {
                            width: "100%",
                            justifyContent: "space-between",
                            "& > div:not(:last-child)": {
                                mr: "minor"
                            },
                            ".bn-inputCode-input": {
                                width: ["inputCodeMobile", "inputCode"]
                            },
                            ".bn-inputCode-input input": {
                                textAlign: "center",
                                bottom: "xs",
                                position: "relative",
                                fontSize: "md"
                            }
                        },
                        outlineLarge: {
                            variant: "inputCode.default",
                            ".bn-inputCode-input  input": {
                                bottom: "0px",
                                fontSize: "md"
                            },
                            ".bn-inputCode-input > div": {
                                width: "40px"
                            }
                        }
                    }
                }, {
                    safety: {
                        container: {
                            alignItems: "baseline",
                            "& > div": {
                                transform: "translateY(-2px)"
                            },
                            "& > label": {
                                fontSize: "xs",
                                ml: "minor"
                            }
                        },
                        level: {
                            width: "8px",
                            height: "3px",
                            borderRadius: "small",
                            mr: "minor",
                            bg: "muted"
                        }
                    }
                }, {
                    styledSlider: {
                        default: {
                            mt: "sm",
                            mb: "sm",
                            paddingLeft: "ls",
                            paddingRight: "ls",
                            width: "100%",
                            ".bn-slider-container": {
                                position: "relative",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "calc(100% - 14px)",
                                ml: "7px",
                                height: "25px",
                                "&:hover > label": {
                                    visibility: "visible",
                                    opacity: 1
                                }
                            },
                            ".bn-slider-available-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.line",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-progress-bar": {
                                bg: "slider.progressBar"
                            },
                            ".bn-slider-disabled-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.disabledBar",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-radio-button": {
                                position: "absolute",
                                width: "16px",
                                height: "16px",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "slider.tooltipText",
                                borderRadius: "default",
                                border: "4px solid",
                                borderColor: "slider.progressBar",
                                zIndex: 20,
                                cursor: "grab",
                                transition: "box-shadow 0.2s ease",
                                "&::after": {
                                    content: '""',
                                    display: "block",
                                    width: "16px",
                                    height: "16px",
                                    border: "2px solid",
                                    borderColor: "bg1",
                                    borderRadius: "default",
                                    background: "transparent",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)"
                                }
                            },
                            ".bn-slider-radio-tooltip": {
                                visibility: "hidden",
                                opacity: 0,
                                position: "absolute",
                                top: 0,
                                marginTop: "-24px",
                                padding: "2px 4px",
                                borderRadius: "small",
                                bg: "slider.progressBar",
                                color: "slider.tooltipText",
                                fontSize: 0,
                                verticalAlign: "top",
                                transform: "translateX(-50%)",
                                zIndex: 10,
                                userSelect: "none",
                                transition: "visibility 0.2s ease, opacity 0.2s ease"
                            },
                            ".bn-slider-stepper": {
                                boxSizing: "content-box",
                                position: "absolute",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "bg1",
                                color: "t.third",
                                width: "6px",
                                height: "6px",
                                borderRadius: "small",
                                border: "2px solid",
                                borderColor: "line",
                                zIndex: "10",
                                overflow: "visible",
                                cursor: "pointer",
                                ":hover": {
                                    bg: "line",
                                    borderColor: "bg1"
                                }
                            },
                            ".bn-slider-progress-stepper": {
                                bg: "slider.progressBar",
                                borderColor: "bg1",
                                ":hover": {
                                    bg: "slider.progressBar"
                                }
                            },
                            ".bn-slider-disabled-stepper": {
                                bg: "slider.disabledBar",
                                color: "slider.disabledBar",
                                ":hover": {
                                    bg: "slider.disabledBar"
                                }
                            },
                            ".bn-slider-scale": {
                                position: "absolute",
                                left: "20px",
                                top: "15px",
                                transform: "translateX(calc(-50% + 4px)) rotate(-45deg)",
                                fontSize: 1,
                                userSelect: "none"
                            }
                        },
                        primary: {
                            variant: "styledSlider.default",
                            " .bn-slider-progress-bar": {
                                bg: "primary"
                            },
                            " .bn-slider-radio-button": {
                                borderColor: "primary"
                            },
                            " .bn-slider-radio-tooltip": {
                                bg: "primary"
                            },
                            " .bn-slider-progress-stepper": {
                                bg: "primary"
                            }
                        }
                    }
                }, {
                    smartSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "xxs",
                            height: "25px",
                            "&:hover > label": {
                                display: "block"
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "#48515D",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        disabledBar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            height: "4px",
                            bg: "#cccccc",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "#76808F",
                            opacity: "0.2",
                            borderRadius: "circle",
                            border: "2px solid",
                            zIndex: 20,
                            cursor: "grab"
                        },
                        tooltip: {
                            display: "none",
                            position: "absolute",
                            top: 0,
                            marginTop: "-18px",
                            padding: "1px 2px",
                            borderRadius: "small",
                            color: "#FFFFFF",
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "#656D7B",
                            borderRadius: "circle",
                            zIndex: "10",
                            overflow: "visible"
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    tradeSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "7px",
                            height: "25px",
                            "&:hover > label": {
                                visibility: "visible",
                                opacity: 1
                            },
                            "&:hover > .bn-tradeSlider-ratioButton": {
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.slider.ratioButton, ", 0 0 0 4px ").concat(e.colors.lines.primary)
                                }
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "lines.primary",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "slider.ratioButton",
                            borderRadius: "circle",
                            border: "3px solid",
                            zIndex: 20,
                            cursor: "grab",
                            transition: "box-shadow 0.2s ease"
                        },
                        tooltip: {
                            visibility: "hidden",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            marginTop: "20px",
                            padding: "1px 2px",
                            borderRadius: 2,
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none",
                            bg: "transparent",
                            color: "slider.progress",
                            transition: "visibility 0.2s ease, opacity 0.2s ease"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "lines.primary",
                            borderRadius: "circle",
                            boxShadow: "0 0 0 2px",
                            color: "slider.ratioButton",
                            zIndex: "10",
                            overflow: "visible",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                width: "14px",
                                height: "14px"
                            }
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    select: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: 10,
                            padding: 0,
                            transition: "height 0.2s ease",
                            background: "#FFFFFF",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                background: "#F5F5F7"
                            }
                        }
                    }
                }, {
                    search: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            bg: "search.bg",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            bg: "search.bg",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                backgroundColor: "search.hoverBg"
                            }
                        },
                        icon: {
                            cursor: "pointer",
                            color: "t.third",
                            verticalAlign: "middle"
                        }
                    }
                }, v, {
                    pureSelect: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            boxShadow: "tooltip",
                            borderRadius: "default",
                            cursor: "pointer",
                            bg: "popupBg"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        icon: {
                            color: "icon",
                            position: "absolute",
                            right: "10px",
                            top: "50%"
                        }
                    }
                }, {
                    breadcrumb: {
                        container: {
                            alignItems: "center",
                            pl: "plus",
                            pr: "plus",
                            height: "48px",
                            fontSize: 0,
                            color: "t.secondary"
                        },
                        splitter: {
                            ml: "xs",
                            mr: "xs",
                            lineHeight: 1,
                            color: "line"
                        }
                    },
                    breadcrumbLink: {
                        default: {
                            textDecoration: "none",
                            fontSize: "sm",
                            lineHeight: 1
                        }
                    }
                }, {
                    radio: {
                        default: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "pointer",
                            "& svg:hover": {
                                color: "primary"
                            },
                            "& svg:active": {
                                color: "primary"
                            }
                        },
                        disabled: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "not-allowed",
                            color: "t.disabled",
                            "& svg, & label": {
                                cursor: "not-allowed"
                            }
                        }
                    }
                }, {
                    mediaBox: {
                        default: {
                            width: ["100%", "384px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            px: "md",
                            borderRadius: "default",
                            bg: "#fff"
                        },
                        rwdContentBox: {
                            textAlign: "center",
                            width: ["100%", "100%", "736px"],
                            m: [0, "24px auto", "24px auto"],
                            px: "md",
                            py: "xp",
                            borderRadius: "default",
                            bg: "#fff",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadow: {
                            width: ["100%", "750px", "970px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            p: ["md", "40px", "40px"],
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        topShadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"],
                            mt: ["0", "100px", "100px"]
                        },
                        newDSdefault: {
                            width: ["100%", "400px", "432px"],
                            m: ["40px auto", "48px auto", "48px auto"],
                            px: ["sm", "md"],
                            bg: "#fff"
                        }
                    }
                }, {
                    twoFAThreeCode: {
                        default: {
                            width: "484px",
                            position: "relative",
                            maxWidth: "100%",
                            height: "100%",
                            flexDirection: "column",
                            p: "sm",
                            "&.dialog": {
                                width: "436px",
                                p: 0
                            },
                            "&.safeWrap": {
                                width: ["300px", "384px", "384px"],
                                p: 0,
                                ".bn-2fa-title": {
                                    fontSize: "plus",
                                    mt: "xs"
                                }
                            },
                            ".bn-2fa-title": {
                                textAlign: "center"
                            },
                            ".bn-2fa-info": {
                                textAlign: "center",
                                mt: "ls",
                                mb: "plus",
                                color: "t.third",
                                lineHeight: "16px",
                                height: "auto"
                            },
                            ".bn-2fa-info.bn-2fa-table-info": {
                                mb: "27px"
                            },
                            "&.dialog .bn-2fa-title": {
                                lineHeight: "64px",
                                fontSize: "20px",
                                textAlign: "left"
                            },
                            "&.dialog .bn-2fa-info": {
                                textAlign: "left",
                                mt: 0,
                                mb: 4
                            },
                            ".bn-2fa-link": {
                                color: "t.yellow",
                                fontSize: "14px",
                                lineHeight: "20px",
                                fontWeight: 500,
                                textDecoration: "none",
                                textAlign: "left",
                                mb: "md"
                            },
                            ".error .bn-2fa-field": {
                                borderColor: "toast.error"
                            },
                            ".bn-2fa-field": {
                                flex: 1
                            },
                            ".bn-2fa-field .bn-input-label": {
                                whiteSpace: "nowrap",
                                fontSize: "14px"
                            },
                            ".bn-2fa-fieldbutton": {
                                width: "104px",
                                ml: "xs",
                                "&.noCn": {
                                    flexDirection: "column",
                                    lineHeight: 1.15
                                },
                                "&:disabled": {
                                    color: "#D0980B"
                                },
                                "& .sub": {
                                    color: "t.third",
                                    fontSize: "xs",
                                    fontWeight: "normal"
                                }
                            },
                            ".bn-2fa-fieldInfo": {
                                mt: "minor",
                                mb: "20px",
                                lineHeight: "16px",
                                color: "t.third",
                                height: "auto",
                                "& .voiceGet": {
                                    color: "t.yellow",
                                    cursor: "pointer"
                                }
                            },
                            ".error .bn-2fa-fieldInfo": {
                                color: "toast.error"
                            },
                            ".bn-2fa-submit": {
                                mb: "md"
                            },
                            ".bn-2fa-fullscreenSubmit": {
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.06)",
                                p: "md"
                            },
                            ".bn-2fa-cell": {
                                width: "148px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                lineHeight: "18px",
                                padding: "16px",
                                border: "none",
                                ":hover": {
                                    bg: "bg3",
                                    cursor: "pointer"
                                }
                            },
                            ".bn-2fa-cell:nth-of-type(n+2)": {
                                ml: ["sm", "md", "md"]
                            },
                            ".bn-2fa-celltext": {
                                mt: "ls",
                                fontWeight: "medium",
                                whiteSpace: "break-spaces"
                            },
                            ".bn-2fa-nextHit": {
                                fontSize: "xs",
                                textDecoration: "none",
                                color: "t.yellow",
                                "&:hover": {
                                    color: "t.yellow"
                                },
                                cursor: "pointer",
                                alignSelf: "flex-end",
                                mb: 3
                            },
                            ".bn-2fa-tabGroup": {
                                mb: "md"
                            },
                            ".bn-2fa-switchChoice": {
                                textDecoration: "none",
                                mb: "md",
                                color: "t.yellow",
                                width: "auto",
                                display: "inline-block",
                                cursor: "pointer"
                            },
                            ".bn-2fa-cellIconWrap": {
                                position: "relative",
                                width: "48px",
                                height: "48px",
                                lineHeight: "20px"
                            },
                            ".bn-2fa-cellIcon": {
                                position: "absolute"
                            }
                        }
                    }
                }, {
                    card: {
                        default: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        }
                    }
                }, _, {
                    backTop: {
                        default: {
                            borderRadius: "circle",
                            width: "40px",
                            height: "40px",
                            bg: "t.primary",
                            opacity: .5,
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            zIndex: "backTop",
                            "&:hover": {
                                opacity: .7
                            },
                            ".backTop-arrow-icon": {
                                color: "bg1"
                            }
                        }
                    }
                }, {
                    table: {
                        dimhead: {
                            ".bn-table th": {
                                backgroundColor: "bg2"
                            }
                        },
                        purehead: {
                            ".bn-table th": {
                                backgroundColor: "bg1"
                            }
                        }
                    }
                }, {
                    carousel: {
                        dot: {
                            bar: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "16px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "3px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            background: "#fff",
                                            border: 0,
                                            borderRadius: "1px",
                                            outline: "none",
                                            cursor: "pointer",
                                            opacity: .3,
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s",
                                            "&:hover": {
                                                opacity: .75
                                            },
                                            "&:focus": {
                                                opacity: .75
                                            }
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                background: "#fff",
                                                opacity: 1
                                            },
                                            "&:hover": {
                                                opacity: 1
                                            },
                                            "&:focus": {
                                                opacity: 1
                                            }
                                        }
                                    },
                                    "&.slick-dots-bottom": {
                                        bottom: "12px"
                                    },
                                    "&.slick-dots-top": {
                                        top: "12px"
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "3px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "3px",
                                            height: "16px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            "&.slick-active": {
                                                width: "3px",
                                                height: "24px",
                                                button: {
                                                    width: "3px",
                                                    height: "24px"
                                                }
                                            },
                                            button: {
                                                width: "3px",
                                                height: "16px"
                                            }
                                        },
                                        "&.slick-dots-left": {
                                            right: "auto",
                                            left: "12px"
                                        },
                                        "&.slick-dots-right": {
                                            right: "12px",
                                            left: "auto"
                                        }
                                    }
                                }
                            },
                            circle: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "8px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "8px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            backgroundColor: "line",
                                            border: 0,
                                            borderRadius: "8px",
                                            outline: "none",
                                            cursor: "pointer",
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s"
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                backgroundColor: "primary"
                                            }
                                        }
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots-left": {
                                        right: "auto",
                                        left: "12px"
                                    },
                                    ".slick-dots-right": {
                                        right: "12px",
                                        left: "auto"
                                    },
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "8px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "8px",
                                            height: "8px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            button: {
                                                width: "8px",
                                                height: "8px"
                                            },
                                            "&.slick-active": {
                                                width: "8px",
                                                height: "24px",
                                                button: {
                                                    width: "8px",
                                                    height: "24px"
                                                }
                                            }
                                        },
                                        "&.slick-dots-bottom": {
                                            bottom: "12px"
                                        },
                                        "&.slick-dots-top": {
                                            top: "12px"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    formItem: {
                        default: {
                            width: "100%",
                            mb: "md"
                        },
                        label: {
                            variant: "text.body2",
                            width: "100%",
                            alignItems: "center",
                            mb: "minor",
                            color: "t.primary"
                        },
                        help_default: {
                            variant: "text.body2",
                            width: "100%",
                            mt: "minor",
                            color: "t.third"
                        },
                        help_error: {
                            variant: "formItem.help_default",
                            color: "t.sell"
                        },
                        help_warning: {
                            variant: "formItem.help_default",
                            color: "t.yellow"
                        },
                        content: {
                            width: "100%",
                            position: "relative",
                            minHeight: "12px",
                            "&.hide": {
                                height: 0,
                                minHeight: 0,
                                overflow: "hidden"
                            }
                        },
                        crowded: {
                            variant: "formItem.default",
                            display: "flex",
                            alignItems: "center"
                        },
                        crowdedContent: {
                            variant: "formItem.content",
                            flex: 1
                        }
                    }
                }),
                I = (0, n.A)({
                    colors: {
                        greys: {
                            switch: "#C1C6CD",
                            risk: "#EAECEF"
                        },
                        black: {
                            header: "#12161C",
                            footer: "#0B0E11",
                            text: "#212833"
                        },
                        header: {
                            text: "white",
                            bg: "#12161C",
                            dropdown: "#1E2126",
                            gray: "#848E9C",
                            black: "#212833"
                        }
                    },
                    fonts: {
                        heading: "inherit",
                        monospace: "Menlo, monospace"
                    },
                    breakpoints: ["768px", "1024px", "1280px"],
                    fontSizes: (0, o.A)((0, n.A)({}, [12, 14, 16, 20, 24, 28, 32]), {
                        xs: 12,
                        sm: 14,
                        md: 16,
                        minor: 18,
                        plus: 20,
                        xp: 24,
                        lg: 28,
                        xl: 32,
                        xxl: 40,
                        xxxl: 48,
                        xxxxl: 56
                    }),
                    fontWeights: {
                        extraLight: 200,
                        light: 300,
                        normal: 400,
                        regular: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700
                    },
                    lineHeights: {
                        body: 1.5,
                        heading: 1.25
                    },
                    space: (0, o.A)((0, n.A)({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
                        line: 1,
                        tiny: 2,
                        minor: 4,
                        xxs: 6,
                        xs: 8,
                        s: 10,
                        ls: 12,
                        sm: 16,
                        md: 24,
                        plus: 32,
                        xp: 40,
                        lg: 48,
                        xl: 64,
                        xxl: 80
                    }),
                    sizes: {
                        avatar: 48,
                        inputCode: 44,
                        inputCodeMobile: 40
                    },
                    radii: {
                        small: 2,
                        default: 4,
                        large: 6,
                        extra: 8,
                        larger: 10,
                        xlarge: 16,
                        extraLarger: 20,
                        xxlarge: 26,
                        circle: 99999
                    },
                    shadows: {
                        card: " 0px 1px 2px rgba(20,21,26,0.04), 0px 3px 6px rgba(71,77,87,0.04), 0px 0px 1px rgba(20,21,26,0.1)",
                        tooltip: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        calendar: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        dialog: "0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)",
                        area: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                        dropdown: "0px 8px 16px rgba(24, 26, 32, 0.16)"
                    },
                    zIndices: {
                        mask: 10,
                        menu: 1e3,
                        header: 1001,
                        dropdown: 1100,
                        modal: 1200,
                        backTop: 1225,
                        calendar: 1250,
                        mobileDatePopup: 1275,
                        notification: 1300,
                        alert: 1350,
                        tooltip: 1400,
                        drawer: 9999
                    },
                    styles: {
                        root: {
                            fontWeight: "body",
                            lineHeight: "body"
                        }
                    }
                }, R)
        },
        "0vap": (e, t, r) => {
            "use strict";
            r.d(t, {
                D9: () => o,
                Oh: () => n,
                wL: () => a,
                wv: () => s,
                z1: () => i
            });
            var n = {
                    0: "#FFFFFF",
                    5: "#FAFAFA",
                    10: "#F5F5F5",
                    50: "#EAECEF",
                    100: "#D8DCE1",
                    200: "#B7BDC6",
                    250: "#929AA5",
                    300: "#848E9C",
                    400: "#707A8A",
                    500: "#5E6673",
                    600: "#474D57",
                    700: "#2B3139",
                    800: "#1E2329",
                    900: "#181A20",
                    1e3: "#0B0E11"
                },
                o = {
                    5: "#FFFDE6",
                    10: "#FEF6D8",
                    50: "#FFEF87",
                    100: "#FCD535",
                    200: "#F0B90B",
                    300: "#C99400",
                    400: "#A37200",
                    500: "#8D5F02",
                    600: "#6A4403",
                    700: "#3C2601",
                    800: "#281A00"
                },
                i = {
                    400: "#328DFD",
                    600: "#1D53AB"
                },
                a = {
                    5: "#F2FFF7",
                    10: "#E6FFF1",
                    50: "#B5FFD9",
                    100: "#85F2BE",
                    200: "#5AE6A7",
                    300: "#32D993",
                    400: "#0ECB81",
                    500: "#03A66D",
                    600: "#008057",
                    700: "#005940",
                    800: "#102821",
                    900: "#091F19"
                },
                s = {
                    5: "#FEF6F7",
                    10: "#FEF1F2",
                    50: "#FDDDDE",
                    100: "#FFC2C4",
                    200: "#FF99A0",
                    300: "#FF707E",
                    400: "#F6465D",
                    500: "#CF304A",
                    600: "#A81E3A",
                    700: "#82112B",
                    800: "#35141D",
                    900: "#2C1018"
                }
        },
        Ki6D: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("BK7R"),
                o = r("QUKP"),
                i = r("Z2u4"),
                a = r("0vap"),
                s = r("GYch"),
                c = r("RS8X"),
                l = (0, s.CE)(c.A).dark,
                u = (0, n.A)({
                    modalBg: a.Oh[800],
                    popupBg: a.Oh[800],
                    bg1: a.Oh[900],
                    bg2: a.Oh[1e3],
                    bg3: a.Oh[700],
                    bg4: a.Oh[500],
                    bg5: a.Oh[900],
                    bg6: a.Oh[1e3],
                    line: a.Oh[600],
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: a.Oh[50],
                        secondary: a.Oh[200],
                        third: a.Oh[300],
                        placeholder: a.Oh[500],
                        disabled: a.Oh[500],
                        yellow: a.D9[200],
                        buy: a.wL[400],
                        sell: a.wv[400],
                        toast: a.D9[400],
                        white: a.Oh[0]
                    },
                    iconNormal: a.Oh[300],
                    alertYellowBg: a.D9[800],
                    badgeYellowBg: a.D9[700],
                    outlineHover: a.D9[600],
                    primaryHover: a.D9[100],
                    primary: a.D9[200],
                    toastFailBg: a.wv[800],
                    depthSellBg: a.wv[800],
                    sellHover: a.wv[300],
                    sell: a.wv[400],
                    toastSuccessBg: a.wL[800],
                    depthBuyBg: a.wL[800],
                    buyHover: a.wL[300],
                    buy: a.wL[400],
                    invBg: a.Oh[700],
                    success: a.wL[400],
                    error: a.wv[400],
                    successBg: a.wL[800],
                    errorBg: a.wv[800],
                    disableBg: a.Oh[600]
                }, l),
                p = (0, s.LH)("dark")(u);
            const d = u;
            var f = function(e) {
                    return (0, o.A)((0, n.A)({}, i.A.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#444",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 3px 6px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.04), inset 0px 0px 1px rgba(94,102,115,0.8)",
                            shadow02: "0px 7px 14px rgba(0,0,0,.08), 0px 3px 6px rgba(0,0,0,.08), inset 0px 0px 1px rgba(94,102,115,.9)",
                            shadow03: "0px 16px 32px rgba(0,0,0,0.16), 0px 8px 16px rgba(0,0,0,0.16), inset 0px 0px 1px rgba(94,102,115,0.9)"
                        },
                        calendar: {
                            selected: a.Oh[400],
                            selectedRange: a.Oh[600],
                            disableColor: e.t.disabled,
                            shadow: a.Oh[1e3],
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "0, 0, 0"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: a.Oh[500],
                            progressBar: a.Oh[10],
                            tooltipText: e.modalBg,
                            ratioButton: "#1F2124",
                            progress: a.Oh[0],
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: a.Oh[100]
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: "#3B182B",
                            warningBg: "#3C351F",
                            successBg: "#17352F",
                            infoBg: "#1C2D40"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#1C2D40",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: a.z1[400],
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: a.D9[100],
                            flowText: a.Oh[800]
                        },
                        advanced: {
                            downDropBg: "#313336"
                        },
                        transInputBG: e.bg3,
                        maskBg: a.Oh[900],
                        secondary: "#2EBD85",
                        background: "#12161C",
                        accent: "#F23051",
                        muted: "#262626",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#1B1F25",
                        stress: "#1F2124",
                        lines: {
                            primary: "#272A2E",
                            light: "#272A2E",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                h = (0, o.A)((0, n.A)({}, i.A), {
                    shadows: (0, o.A)((0, n.A)({}, i.A.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                }),
                g = (0, s.CK)({
                    palette: d,
                    externalColors: f,
                    layout: h
                });
            (0, s.CK)({
                palette: p,
                externalColors: f,
                layout: h
            });
            const b = g
        },
        "8fYl": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("BK7R"),
                o = r("QUKP"),
                i = r("Z2u4"),
                a = r("0vap"),
                s = r("GYch"),
                c = r("RS8X"),
                l = (0, s.CE)(c.A).light,
                u = (0, n.A)({
                    modalBg: a.Oh[0],
                    popupBg: a.Oh[0],
                    bg1: a.Oh[0],
                    bg2: a.Oh[5],
                    bg3: a.Oh[10],
                    bg4: a.Oh[500],
                    bg5: a.Oh[900],
                    bg6: a.Oh[1e3],
                    line: a.Oh[50],
                    liteBg1: a.Oh[0],
                    liteBg2: a.Oh[5],
                    t: {
                        primary: a.Oh[800],
                        secondary: a.Oh[600],
                        third: a.Oh[400],
                        placeholder: a.Oh[200],
                        disabled: a.Oh[200],
                        yellow: a.D9[300],
                        buy: a.wL[500],
                        sell: a.wv[500],
                        toast: a.D9[500],
                        white: a.Oh[0]
                    },
                    iconNormal: a.Oh[250],
                    alertYellowBg: a.D9[5],
                    badgeYellowBg: a.D9[10],
                    outlineHover: a.D9[50],
                    primaryHover: a.D9[100],
                    primary: a.D9[200],
                    toastFailBg: a.wv[5],
                    depthSellBg: a.wv[10],
                    sellHover: a.wv[300],
                    sell: a.wv[400],
                    toastSuccessBg: a.wL[5],
                    depthBuyBg: a.wL[10],
                    buyHover: a.wL[300],
                    buy: a.wL[400],
                    invBg: a.Oh[5],
                    success: a.wL[400],
                    successBg: a.wL[5],
                    error: a.wv[400],
                    errorBg: a.wv[5],
                    disableBg: a.Oh[50]
                }, l),
                p = (0, s.LH)("light")(u);
            const d = u;
            var f = function(e) {
                    return (0, o.A)((0, n.A)({}, i.A.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#CCCCCC",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                            shadow02: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                            shadow03: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                        },
                        calendar: {
                            selected: a.D9[200],
                            selectedRange: a.D9[100],
                            disableColor: e.t.disabled,
                            shadow: a.Oh[50],
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "255, 255, 255"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: a.Oh[100],
                            progressBar: a.Oh[700],
                            tooltipText: e.modalBg,
                            ratioButton: a.Oh[0],
                            progress: a.Oh[300],
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: a.Oh[100]
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: a.z1[400],
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: a.D9[100],
                            flowText: a.Oh[800]
                        },
                        advanced: {
                            downDropBg: a.Oh[0]
                        },
                        transInputBG: e.bg3,
                        maskBg: a.Oh[900],
                        secondary: "#2EBD85",
                        background: "#FAFAFA",
                        accent: "#F23051",
                        muted: "#F5F5F5",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#EAECEF",
                        stress: "#F2F2F2",
                        lines: {
                            primary: "#EAECEF",
                            light: "#EAECEF",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                h = (0, o.A)((0, n.A)({}, i.A), {
                    shadows: (0, o.A)((0, n.A)({}, i.A.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }),
                g = (0, s.CK)({
                    palette: d,
                    externalColors: f,
                    layout: h
                });
            (0, s.CK)({
                palette: p,
                externalColors: f,
                layout: h
            });
            const b = g
        },
        RS8X: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
            const o = {
                primaryGradient: {
                    light: n,
                    dark: n
                },
                grayGradient: {
                    light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
            }
        },
        GYch: (e, t, r) => {
            "use strict";
            r.d(t, {
                LH: () => y,
                CK: () => w,
                CE: () => v
            });
            var n = r("VP0d"),
                o = r("tEf9"),
                i = r("veKZ"),
                a = r.n(i),
                s = r("3POh"),
                c = r.n(s),
                l = r("jPI1"),
                u = r.n(l),
                p = r("pL+m"),
                d = r.n(p),
                f = r("H8sf"),
                h = r.n(f);
            const g = {
                dark: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#1F8DF9"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#553821",
                        depthBuyBg: "#22384E",
                        toastFailBg: "#553821",
                        toastSuccessBg: "#22384E",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        successBg: "#22384E",
                        errorBg: "#553821"
                    }
                },
                light: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#297FD4"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#FFEFE2",
                        depthBuyBg: "#E6F3FF",
                        toastFailBg: "#FFEFE2",
                        toastSuccessBg: "#E6F2FF",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        errorBg: "#FFEFE2",
                        successBg: "#E6F2FF"
                    }
                }
            };
            var b = ["light", "dark"],
                m = c()(a()),
                v = function(e) {
                    return m({})((function(t, r) {
                        var o;
                        return t[r] = (o = r, u()([d(), m({})((function(e, t) {
                            var r = (0, n.A)(t, 2),
                                i = r[0],
                                a = r[1];
                            return e[i] = a[o], e
                        }))]))(e), t
                    }))(b)
                },
                y = function(e) {
                    return t = g[e].colors,
                        function(e) {
                            return h()({}, e, t)
                        };
                    var t
                },
                x = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return h().apply(void 0, [{}, t].concat((0, o.A)(e)))
                    }
                },
                w = function(e) {
                    var t = e.palette,
                        r = e.externalColors,
                        n = e.layout;
                    return x([{
                        colors: r(t)
                    }, {
                        colors: t
                    }])(n)
                }
        },
        jYqv: (e, t, r) => {
            "use strict";
            r.d(t, {
                j7: () => k,
                aF: () => x
            });
            var n, o = r("M5j3"),
                i = r("BK7R"),
                a = r("gZfF"),
                s = r("VP0d"),
                c = r("tEf9"),
                l = r("DTvD"),
                u = r.n(l),
                p = r("/Lz3"),
                d = r("eeDD"),
                f = r("LCuF"),
                h = r("pR+c");
            var g = 1,
                b = function(e) {
                    var t = e.content,
                        r = e.sx,
                        n = e.isMaskClose,
                        o = e.fullScreen,
                        a = e.close,
                        s = e.needCloseIcon,
                        c = void 0 === s || s,
                        h = e.closeSx,
                        g = e.maskStyles,
                        b = (0, l.useRef)(null),
                        m = (0, l.useMemo)((function() {
                            return o ? {
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                transform: "",
                                borderRadius: 0,
                                maxWidth: "100vw",
                                maxHeight: "100vh"
                            } : {
                                maxWidth: "calc(100vw - 32px)",
                                maxHeight: "calc(100vh - 32px)",
                                overflow: "auto"
                            }
                        }), [o]);
                    return u().createElement(d.A, {
                        visible: !0,
                        onMaskClick: n && a,
                        maskStyles: g,
                        ref: b,
                        sx: (0, i.A)({
                            p: "md",
                            bg: "popupBg",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)",
                            borderRadius: "default",
                            position: "relative"
                        }, m, r)
                    }, u().createElement(f.A, {
                        p: "0",
                        height: "100%"
                    }, c ? u().createElement(p.A, {
                        size: 24,
                        color: "icon",
                        onClick: a,
                        cursor: "pointer",
                        sx: (0, i.A)({
                            position: "absolute",
                            top: "20px",
                            right: "25px",
                            zIndex: 2
                        }, h)
                    }) : null, t))
                },
                m = function() {
                    return console.error("please render the DialogStub")
                },
                v = [function() {
                    return m(), {
                        close: m,
                        update: m
                    }
                }],
                y = [{
                    enqueueNotification: m,
                    closeNotification: m
                }],
                x = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return (n = v)[v.length - 1].apply(n, (0, c.A)(t))
                },
                w = u().memo((function() {
                    var e = (0, s.A)((0, l.useState)([]), 2),
                        t = e[0],
                        r = e[1],
                        n = function() {
                            var e = (0, l.useContext)(h.A);
                            return {
                                enqueueNotification: e.enqueueNotification,
                                closeNotification: e.closeNotification
                            }
                        }();
                    return (0, l.useEffect)((function() {
                        var e = function(e) {
                            return function(e, t) {
                                var r, n = (0, i.A)({
                                        key: g++
                                    }, e),
                                    s = n.dialogComponent,
                                    l = (0, a.A)(n, ["dialogComponent"]),
                                    p = s || b,
                                    d = function() {
                                        t((function(e) {
                                            return e.filter((function(e) {
                                                return e !== r
                                            }))
                                        })), l.onClose && l.onClose()
                                    };
                                return r = u().createElement(p, (0, o.A)({}, l, {
                                    close: d
                                })), t((function(e) {
                                    return (0, c.A)(e).concat([r])
                                })), {
                                    close: d,
                                    update: function(e) {
                                        Object.assign(l, e), t((function(e) {
                                            var t = e.findIndex((function(e) {
                                                return e === r
                                            }));
                                            return r = u().createElement(p, (0, o.A)({}, l, {
                                                close: d
                                            })), (0, c.A)(e.slice(0, t)).concat([r], (0, c.A)(e.slice(t + 1)))
                                        }))
                                    }
                                }
                            }(e, (function(e) {
                                r(e)
                            }))
                        };
                        return v.push(e), y.push(n),
                            function() {
                                v = v.filter((function(t) {
                                    return t !== e
                                })), y = y.filter((function(e) {
                                    return e !== n
                                }))
                            }
                    }), []), u().createElement(u().Fragment, null, t)
                })),
                k = u().createElement(w, null)
        },
        "pR+c": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("DTvD"),
                o = function() {};
            const i = r.n(n)().createContext({
                enqueueNotification: o,
                closeNotification: o
            })
        },
        "6aZm": (e, t, r) => {
            "use strict";
            r.d(t, {
                UF: () => n
            });
            var n = function(e, t) {
                return function() {}
            }
        },
        DY47: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("jjD+"),
                o = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const i = (0, n.A)((function(e) {
                return o.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }))
        },
        "Y7o/": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => b
            });
            var n = r("OHGK"),
                o = r("DTvD"),
                i = r("DY47"),
                a = r("g80r"),
                s = r("3xeB"),
                c = r("xOtz"),
                l = i.A,
                u = function(e) {
                    return "theme" !== e && "innerRef" !== e
                },
                p = function(e) {
                    return "string" === typeof e && e.charCodeAt(0) > 96 ? l : u
                };

            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(r, !0).forEach((function(t) {
                        (0, n.A)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(r).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const h = function e(t, r) {
                var n, i, l;
                void 0 !== r && (n = r.label, l = r.target, i = t.__emotion_forwardProp && r.shouldForwardProp ? function(e) {
                    return t.__emotion_forwardProp(e) && r.shouldForwardProp(e)
                } : r.shouldForwardProp);
                var u = t.__emotion_real === t,
                    d = u && t.__emotion_base || t;
                "function" !== typeof i && u && (i = t.__emotion_forwardProp);
                var h = i || p(d),
                    g = !h("as");
                return function() {
                    var b = arguments,
                        m = u && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                    if (void 0 !== n && m.push("label:" + n + ";"), null == b[0] || void 0 === b[0].raw) m.push.apply(m, b);
                    else {
                        0,
                        m.push(b[0][0]);
                        for (var v = b.length, y = 1; y < v; y++) m.push(b[y], b[0][y])
                    }
                    var x = (0, a.ic)((function(e, t, r) {
                        return (0, o.createElement)(a.Dx.Consumer, null, (function(n) {
                            var a = g && e.as || d,
                                u = "",
                                f = [],
                                b = e;
                            if (null == e.theme) {
                                for (var v in b = {}, e) b[v] = e[v];
                                b.theme = n
                            }
                            "string" === typeof e.className ? u = (0, s.R)(t.registered, f, e.className) : null != e.className && (u = e.className + " ");
                            var y = (0, c.J)(m.concat(f), t.registered, b);
                            (0, s.s)(t, y, "string" === typeof a);
                            u += t.key + "-" + y.name, void 0 !== l && (u += " " + l);
                            var x = g && void 0 === i ? p(a) : h,
                                w = {};
                            for (var k in e) g && "as" === k || x(k) && (w[k] = e[k]);
                            return w.className = u, w.ref = r || e.innerRef, (0, o.createElement)(a, w)
                        }))
                    }));
                    return x.displayName = void 0 !== n ? n : "Styled(" + ("string" === typeof d ? d : d.displayName || d.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = d, x.__emotion_styles = m, x.__emotion_forwardProp = i, Object.defineProperty(x, "toString", {
                        value: function() {
                            return "." + l
                        }
                    }), x.withComponent = function(t, n) {
                        return e(t, void 0 !== n ? f({}, r || {}, {}, n) : r).apply(void 0, m)
                    }, x
                }
            };
            var g = h.bind();
            ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(e) {
                g[e] = g(e)
            }));
            const b = g
        },
        P3FW: (e, t, r) => {
            "use strict";
            r.d(t, {
                s9: () => n.s9,
                x6: () => n.x6
            });
            var n = r("MII3");
            r("rsqs"), r("RVij")
        },
        THUs: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => B
            });
            var n = r("ezuS"),
                o = r("jg1C"),
                i = r("DTvD"),
                a = r.n(i),
                s = r("Lp65"),
                c = r("eeEA"),
                l = r("D4P9"),
                u = r("M5j3"),
                p = r("w/Qz");
            const d = function(e) {
                return a().createElement(p.A, (0, u.A)({
                    width: "96",
                    height: "96",
                    viewBox: "0 0 96 96",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), a().createElement("g", {
                    opacity: "0.3"
                }, a().createElement("path", {
                    d: "M80.0005 13.501L82.5005 11.001L85.0005 13.501L82.5005 16.001L80.0005 13.501Z",
                    fill: "#AEB4BC"
                }), a().createElement("path", {
                    d: "M80.0005 83.8672L84.0005 79.8672L88.0005 83.8672L84.0005 87.8672L80.0005 83.8672Z",
                    fill: "#AEB4BC"
                }), a().createElement("path", {
                    d: "M16 80.001H13V83.001H16V80.001Z",
                    fill: "#AEB4BC"
                })), a().createElement("path", {
                    d: "M16.0005 47.9317L16.0005 47.7149L8.00049 47.7148V47.9316C8.00005 58.1629 11.9061 68.4075 19.7162 76.2176C35.3372 91.8386 60.6638 91.8386 76.2847 76.2176L85.1977 67.3047L90.8748 72.9817V55.9707H73.8638L79.5409 61.6478L70.6279 70.5608C58.1311 83.0576 37.8698 83.0576 25.3731 70.5608C19.1235 64.3112 16.0001 56.1279 16.0005 47.9317Z",
                    fill: "#AEB4BC"
                }), a().createElement("circle", {
                    r: "20",
                    transform: "matrix(1 0 0 -1 48.0005 47.8575)",
                    fill: "url(#paint0_linear_4415_229764)"
                }), a().createElement("path", {
                    d: "M70.6277 25.1538C58.1309 12.6571 37.8696 12.6571 25.3729 25.1538L16.4599 34.0668L22.1365 39.7434H5.12549L5.12549 22.7324L10.803 28.41L19.716 19.497C35.337 3.87601 60.6636 3.87601 76.2845 19.497C84.0947 27.3071 88.0007 37.5517 88.0003 47.783V47.9998H80.0003V47.783C80.0006 39.5867 76.8772 31.4034 70.6277 25.1538Z",
                    fill: "#76808F"
                }), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M49.9336 57.3128V60.0227H46.7156V57.4258C43.8647 57.1717 41.9734 56.0144 40.562 54.4618L43.1025 52.1472C44.1752 53.2763 45.5019 54.0384 47.0826 54.2643V49.1833C42.8485 48.3082 41.1266 46.4452 41.1266 43.7071C41.1266 40.7432 43.0743 38.7673 46.7156 38.3438V35.6904H49.9336V38.3438C52.1918 38.5979 53.8573 39.4729 55.0993 40.8843L52.5306 43.199C51.8531 42.4369 50.9498 41.8158 49.5949 41.5053V46.1911C53.5468 47.0944 55.438 48.7034 55.438 51.5826C55.438 54.3489 53.6879 56.6918 49.9336 57.3128ZM47.0826 41.4489C45.643 41.7312 45.022 42.4933 45.022 43.5942C45.022 44.6668 45.643 45.2314 47.0826 45.6266V41.4489ZM49.5949 54.2078C50.9216 53.8408 51.5426 52.9658 51.5426 51.8931C51.5426 51.0745 51.2039 50.2277 49.5949 49.7478V54.2078Z",
                    fill: "#76808F"
                }), a().createElement("defs", null, a().createElement("linearGradient", {
                    id: "paint0_linear_4415_229764",
                    x1: "20",
                    y1: "0",
                    x2: "20",
                    y2: "39.9999",
                    gradientUnits: "userSpaceOnUse"
                }, a().createElement("stop", {
                    stopColor: "#F0B90B"
                }), a().createElement("stop", {
                    offset: "1",
                    stopColor: "#F8D33A"
                }))))
            };
            var f = r("rR/7"),
                h = r("b4zg"),
                g = r("WAbh"),
                b = r("wIZF"),
                m = r("Y4uf");
            const v = function(e) {
                return a().createElement(m.A, (0, b.__assign)({
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), a().createElement("path", {
                    opacity: .2,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48 44c8.837 0 16-7.164 16-16 0-8.837-7.163-16-16-16s-16 7.163-16 16c0 8.836 7.163 16 16 16zm-24 8c-6.627 0-12 5.372-12 12v20h24V52H24zm36 0v32h5.416a15.962 15.962 0 01-5.415-12c0-8.837 7.163-16 16-16 2.05 0 4.009.385 5.81 1.088A11.985 11.985 0 0072 51.999H60z",
                    fill: "#AEB4BC"
                }), a().createElement("path", {
                    opacity: .5,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M60 84V52L48 64 36 52v32h24z",
                    fill: "#AEB4BC"
                }), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M76 56c-8.836 0-16 7.163-16 16s7.164 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zm-2 6v12h4V62h-4zm0 16v4h4v-4h-4z",
                    fill: "#F0B90B"
                }))
            };
            var y, x = r("qtT+"),
                w = r("lwGX"),
                k = r("9dvl"),
                C = r("PyYO"),
                S = r("p1Ck"),
                A = r("c+5G"),
                _ = (y = {}, (0, n.A)(y, k.R0.success, {
                    icon: (0, o.jsx)(w.A, {
                        size: [60, 96, 96],
                        mb: "16px"
                    })
                }), (0, n.A)(y, k.R0.error, {
                    icon: (0, o.jsx)(h.A, {
                        className: "dialogMainIcon",
                        style: {
                            marginBottom: "16px"
                        }
                    })
                }), (0, n.A)(y, k.R0.generalError, {
                    icon: (0, o.jsx)(h.A, {
                        className: "dialogMainIcon",
                        style: {
                            marginBottom: "16px"
                        }
                    })
                }), (0, n.A)(y, k.R0.warning, {
                    icon: (0, o.jsx)(h.A, {
                        className: "dialogMainIcon",
                        style: {
                            marginBottom: "16px"
                        }
                    })
                }), (0, n.A)(y, k.R0.recurring, {
                    icon: (0, o.jsx)(d, {
                        size: [60, 96, 96],
                        mb: "16px"
                    })
                }), (0, n.A)(y, k.R0.temporarily, {
                    icon: (0, o.jsx)(g.A, {
                        className: "dialogMainIcon",
                        style: {
                            marginBottom: "16px"
                        }
                    })
                }), (0, n.A)(y, k.R0.limit, {
                    icon: (0, o.jsx)(d, {
                        size: [60, 96, 96],
                        mb: "16px"
                    })
                }), (0, n.A)(y, k.R0.kyc, {
                    icon: (0, o.jsx)(x.A, {
                        style: {
                            width: 96,
                            height: 96
                        },
                        src: "".concat(A.K5, "/static/convert-ui/kyc.png")
                    })
                }), (0, n.A)(y, k.R0.login, {
                    icon: (0, o.jsx)(v, {
                        style: {
                            width: "96px",
                            height: "96px",
                            marginBottom: "16px"
                        }
                    })
                }), y),
                B = (0, i.forwardRef)((function(e) {
                    var t, r = e.onClose,
                        n = e.title,
                        a = e.subTitle,
                        u = e.subLabel,
                        p = e.content,
                        d = e.okText,
                        h = e.cancelText,
                        g = e.dialogType,
                        b = void 0 === g ? "" : g,
                        m = e.confirmCallback,
                        v = e.alertIcon,
                        y = e.suffixLabel,
                        x = e.contentList,
                        w = (0, C.b)().isLoggedIn,
                        A = (0, i.useMemo)((function() {
                            return {
                                renderIcon: _[b].icon || v
                            }
                        }), [v, b]),
                        B = (0, i.useMemo)((function() {
                            return Boolean(n)
                        }), [n]),
                        E = (0, i.useCallback)((function() {
                            null === r || void 0 === r || r()
                        }), [r]),
                        T = (0, i.useCallback)((function() {
                            w || (window.location.href = (0, S.fx)())
                        }), [w]),
                        R = (0, i.useCallback)((function() {
                            b !== k.R0.login ? b !== k.R0.kyc ? (null === m || void 0 === m || m(), null === r || void 0 === r || r()) : window.location.href = (0, S.zP)() : null === T || void 0 === T || T()
                        }), [m, b, T, r]);
                    return (0, o.jsxs)(s.A, {
                        className: "convert-base-dialog",
                        id: "convert-dialog-".concat(null !== b && void 0 !== b ? b : ""),
                        children: [A.renderIcon, B && (0, o.jsx)(c.Ay, {
                            className: "dialogTitle",
                            children: n
                        }), u && (0, o.jsx)(c.Ay, {
                            className: "dialogTag typography-Body2",
                            children: u
                        }), a && (0, o.jsx)(c.Ay, {
                            className: "typography-Body2",
                            style: {
                                marginBottom: "4px",
                                color: "var(--color-textPrimary)"
                            },
                            children: a
                        }), (0, o.jsx)(c.Ay, {
                            className: b ? "".concat(b, "Content") : "dialogContent",
                            children: p
                        }), (t = x, (null === t || void 0 === t ? void 0 : t.length) ? (0, o.jsx)(s.A, {
                            style: {
                                width: "100%",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "16px",
                                backgroundColor: "var(--color-bg3)",
                                borderRadius: "4px",
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "var(--color-textThird)",
                                fontWeight: "400",
                                marginTop: "16px"
                            },
                            children: t.map((function(e, r) {
                                return (0, o.jsxs)(s.A, {
                                    style: {
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        marginBottom: r === t.length - 1 ? 0 : "8px"
                                    },
                                    children: [(0, o.jsxs)(c.Ay, {
                                        style: {
                                            textAlign: "left"
                                        },
                                        children: [e.label, "\xa0", e.labelIcon]
                                    }), (0, o.jsx)(c.Ay, {
                                        style: {
                                            textAlign: "right",
                                            fontWeight: "500"
                                        },
                                        children: e.value
                                    })]
                                }, r)
                            }))
                        }) : null), y && (0, o.jsxs)(s.A, {
                            style: {
                                flexDirection: "row",
                                position: "relative"
                            },
                            children: [(0, o.jsx)(s.A, {
                                style: {
                                    position: "absolute",
                                    left: "2px",
                                    top: "18px"
                                },
                                children: (0, o.jsx)(f.A, {
                                    size: 12
                                })
                            }), (0, o.jsx)(c.Ay, {
                                className: "suffixLabel",
                                children: y
                            })]
                        }), (0, o.jsxs)(s.A, {
                            style: {
                                flexDirection: "row",
                                width: "100%"
                            },
                            className: "dialogBtn_mt",
                            children: [h && (0, o.jsx)(l.A, {
                                style: {
                                    flex: 1,
                                    marginRight: "8px"
                                },
                                sz: "large",
                                variant: "secondary",
                                onClick: E,
                                children: h
                            }), d && (0, o.jsx)(l.A, {
                                style: {
                                    flex: 1
                                },
                                sz: "large",
                                variant: "primary",
                                onClick: R,
                                children: d
                            })]
                        })]
                    })
                }));
            B.displayName = "BaseDialog"
        },
        fWzC: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => f
            });
            var n = r("jg1C"),
                o = r("DTvD"),
                i = r("Ki6D"),
                a = r("8fYl"),
                s = r("S8bp"),
                c = r("HS2I"),
                l = r("oVQP"),
                u = r("ulLh"),
                p = r("tKUM"),
                d = r("P3FW"),
                f = function(e) {
                    var t = e.children,
                        r = e.disableThemeToggle,
                        f = e.defaultTheme,
                        h = void 0 === f ? "" : f,
                        g = (0, d.s9)().language,
                        b = (0, c.useTheme)().theme,
                        m = (0, o.useMemo)((function() {
                            return h ? {
                                themeColors: "dark" === h ? l.XT : l.BB,
                                theme: "dark" === h ? "dark" : "light",
                                legacyTheme: "dark" === h ? i.A : a.A
                            } : r || "light" === b ? {
                                themeColors: l.BB,
                                theme: "light",
                                legacyTheme: a.A
                            } : {
                                themeColors: l.XT,
                                theme: "dark",
                                legacyTheme: i.A
                            }
                        }), [r, b]),
                        v = m.theme,
                        y = m.themeColors,
                        x = m.legacyTheme;
                    return (0, n.jsx)(u.A, {
                        mode: v,
                        themeColors: y,
                        dir: (0, p.dir)(g),
                        children: (0, n.jsx)(s.A, {
                            theme: x,
                            dir: (0, p.dir)(g),
                            children: t
                        })
                    })
                }
        },
        "/JX1": (e, t, r) => {
            "use strict";
            r.d(t, {
                Dj: () => o,
                US: () => i,
                uJ: () => n
            });
            var n = {
                    day: "3m",
                    week: "15m",
                    month: "1h"
                },
                o = {
                    day: {
                        days: 1
                    },
                    week: {
                        weeks: 1
                    },
                    month: {
                        months: 1
                    }
                },
                i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        },
        IgnQ: (e, t, r) => {
            "use strict";
            r.d(t, {
                bY: () => E.bY,
                EM: () => C.EM,
                Rz: () => L,
                FN: () => X,
                Ls: () => de,
                JD: () => B,
                iO: () => xe,
                ok: () => T.o,
                Vz: () => ve,
                $4: () => ke.$,
                mi: () => T.m,
                HX: () => O.H,
                Qs: () => Ce.A,
                oj: () => E.oj,
                Vh: () => C.Vh,
                LP: () => pe,
                H4: () => we,
                Vq: () => be
            });
            var n = r("sViW"),
                o = r("0GOp"),
                i = r.n(o),
                a = r("DTvD"),
                s = r("3yYM"),
                c = r.n(s),
                l = r("VA12"),
                u = (function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r, n, o, i, a;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/charge-withdraw-histroy", t);
                                case 2:
                                    return r = e.sent, n = r.data, o = n.data, i = n.total, a = n.direction, e.abrupt("return", {
                                        data: o,
                                        total: i,
                                        direction: a
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r, n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-methods", t);
                                case 2:
                                    return r = e.sent, n = r.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/payment-calculate", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/get-payment-account-info", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/get-country-banks", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/apply-charge", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/charge-notify", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v2/private/fiatpayment/apply-withdraw", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/re-send-withdraw-mail", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/remove-bank", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/bind-confirm", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/submit-offline-charge", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/get-share-kyc-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/share-kyc", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, l.post)("/bapi/fiat/v1/private/fiatpayment/etana/check", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, l.post)("/bapi/fiat/v1/private/fiatpayment/offline-charge-bank-list", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-charge-reference-code", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/standardbank/get-withdrawal-bank-list", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/get-user-kyclimit-and-available", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/apply-nationality-and-estimated-value", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/cards/get-cards", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/cards/unbind-card", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/account/async-check-account-holder-name", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/private/fiatpayment/account/get-async-check-account-holder-name-result", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n.A)(c().mark((function e() {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/sessionId");
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
                }()),
                p = function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/friendly/fiatpayment/eternal/risk/tmx/notifyDownload", t);
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
                }(),
                d = (function() {
                    var e = (0, n.A)(c().mark((function e(t) {
                        var r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, l.post)("/bapi/fiat/v1/friendly/fiatpayment/transactions/get-fiat-currencies", t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", {
                                        result: (null === r || void 0 === r ? void 0 : r.fiatCurrencies) || []
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("zJWh")),
                f = r("NsjG"),
                h = new Set(["EUR", "GBP"]),
                g = "payRiskSafeInfo",
                b = "payRiskSafeResult",
                m = r("PyYO"),
                v = r("tKUM"),
                y = "fiat-activation-widget";

            function x() {
                var e = location.host.split("."),
                    t = atob("YmluYW5jZS5jb20=");
                return location.host.includes("localhost") ? "https://www.".concat(atob("cWExZmRnLm5ldA==")) : (t = e.length > 2 ? e.slice(-2).join(".") : document.domain, "https://www.".concat(t))
            }
            var w = r("c+5G"),
                k = r("o/lm"),
                C = r("s0T/"),
                S = ["EUR", "GBP"],
                A = function() {
                    var e = function() {
                            var e = function() {
                                    var e = document.getElementById("paySafeResult");
                                    e && document.body.removeChild(e);
                                    var t = document.createElement("script");
                                    t.setAttribute("data-ot-ignore", "true"), t.setAttribute("class", "optanon-category-C0001"), t.type = "text/javascript", t.id = "paySafeResult", t.appendChild(document.createTextNode("\n    function tmx_profiling_complete(session_id) {  \n      if (session_id) {\n        const info = { isSuccess: true }\n        typeof window !== 'undefined' &&\n          window.localStorage &&\n          window.localStorage.setItem('payRiskSafeResult', JSON.stringify(info))\n      }\n    }\n    ")), document.body.appendChild(t)
                                },
                                t = function(e) {
                                    if (e) {
                                        var t = document.getElementById("paySafe");
                                        t && document.body.removeChild(t);
                                        var r = document.createElement("script");
                                        r.setAttribute("data-ot-ignore", "true"), r.setAttribute("class", "optanon-category-C0001"), r.type = "text/javascript", r.src = "https://h.online-metrix.net/fp/tags.js?org_id=".concat("3t5fmdir", "&session_id=").concat(e), r.id = "paySafe", document.body.appendChild(r)
                                    }
                                },
                                r = function() {
                                    var e = (0, n.A)(c().mark((function e(t) {
                                        return c().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, p(t);
                                                case 3:
                                                    e.next = 8;
                                                    break;
                                                case 5:
                                                    e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 5]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                o = function(e) {
                                    var t = e.disabledNotify,
                                        n = e.currency,
                                        o = e.source,
                                        i = new RegExp("^/([a-z]{2}(-[a-zA-Z]{2})?)?/?$").test(window.location.pathname),
                                        a = null === n || void 0 === n ? void 0 : n.some((function(e) {
                                            return h.has(e)
                                        }));
                                    t || i || !a || r({
                                        source: o
                                    })
                                },
                                i = function() {
                                    var r = (0, n.A)(c().mark((function r(n) {
                                        var i, a, s, l, p;
                                        return c().wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    if (i = n.disabledNotify, a = n.currency, s = n.source, r.prev = 1, null === d.U || void 0 === d.U ? void 0 : d.U.read("BNC_FV_KEY")) {
                                                        r.next = 5;
                                                        break
                                                    }
                                                    return r.abrupt("return");
                                                case 5:
                                                    return r.next = 7, u();
                                                case 7:
                                                    (l = r.sent.data) && (e(), t(l.sessionId), o({
                                                        disabledNotify: i,
                                                        currency: a,
                                                        source: s
                                                    }), p = {
                                                        sessionId: l.sessionId,
                                                        expiredTime: l.expiredTime
                                                    }, f.IG.setItem(g, p)), r.next = 14;
                                                    break;
                                                case 11:
                                                    r.prev = 11, r.t0 = r.catch(1), console.log(r.t0);
                                                case 14:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r, null, [
                                            [1, 11]
                                        ])
                                    })));
                                    return function(e) {
                                        return r.apply(this, arguments)
                                    }
                                }();
                            return function(r) {
                                var n = r.source,
                                    a = r.currency,
                                    s = r.disabledSessionId,
                                    c = r.disabledNotify,
                                    l = r.forceSessionId,
                                    u = Date.now() / 1e3,
                                    p = f.IG.getItem(g) || {},
                                    d = p.expiredTime,
                                    h = void 0 === d ? 0 : d,
                                    m = p.sessionId,
                                    v = (f.IG.getItem(b) || {}).isSuccess;
                                s || (h < u || l ? (f.IG.setItem(b, {
                                    isSuccess: !1
                                }), i({
                                    disabledNotify: c,
                                    currency: a,
                                    source: n
                                })) : (v || (e(), t(m)), o({
                                    disabledNotify: c,
                                    currency: a,
                                    source: n
                                })))
                            }
                        }(),
                        t = (0, k.mb)(),
                        r = t.marketFromCoin,
                        o = t.marketToCoin,
                        i = t.limitFromCoin,
                        s = t.limitToCoin,
                        l = (0, C.Vh)(C.Iq),
                        v = (0, m.b)().isLoggedIn,
                        y = "market" === l ? r : i,
                        x = "market" === l ? o : s,
                        w = S.find((function(e) {
                            var t, r;
                            return e === (null === y || void 0 === y || null === (t = y.toUpperCase) || void 0 === t ? void 0 : t.call(y)) || e === (null === x || void 0 === x || null === (r = x.toUpperCase) || void 0 === r ? void 0 : r.call(x))
                        }));
                    (0, a.useEffect)((function() {
                        v && w && e({
                            source: "otc",
                            currency: [w]
                        })
                    }), [v, w])
                },
                _ = function() {
                    ! function(e) {
                        var t = e.cdnHost,
                            r = e.host,
                            o = void 0 === r ? "" : r,
                            i = e.onload,
                            s = e.onerror,
                            l = e.onExsit;
                        (0, a.useEffect)((function() {
                            var e = document.getElementById(y);
                            if (e) {
                                if (window.FIAT_ACTIVATION) return void(null === l || void 0 === l || l());
                                e.remove()
                            }

                            function r() {
                                return r = (0, n.A)(c().mark((function e() {
                                    var r, n, a, l, u, p, d, f, h, g;
                                    return c().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = ["", "?v=".concat(Date.now())], n = r[0], a = r[1], l = null === window || void 0 === window ? void 0 : window.__RUN_BY_ELECTRON__, !o && l && (o = (null === window || void 0 === window || null === (u = window.__ElectronDesktop) || void 0 === u || null === (p = u.constants) || void 0 === p ? void 0 : p.API_HOST) || ""), e.prev = 3, d = (0, v.getLanguage)(), f = o || x(), e.next = 8, fetch("".concat(f, "/").concat(d, "/fiat-activation-ui/version")).then((function(e) {
                                                    return e.json()
                                                }));
                                            case 8:
                                                h = e.sent, n = h.data, a = "", e.next = 15;
                                                break;
                                            case 13:
                                                e.prev = 13, e.t0 = e.catch(3);
                                            case 15:
                                                (g = document.createElement("script")).setAttributeNode(document.createAttribute("data-ot-ignore")), g.id = y, g.src = "".concat(t, "/static/fiat-activation-ui/fiat-activation-widget").concat(n ? ".".concat(n) : "", ".js").concat(a), g.onload = function() {
                                                    null === i || void 0 === i || i()
                                                }, g.onerror = function() {
                                                    return null === s || void 0 === s ? void 0 : s()
                                                }, document.body.appendChild(g);
                                            case 22:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [3, 13]
                                    ])
                                }))), r.apply(this, arguments)
                            }! function() {
                                r.apply(this, arguments)
                            }()
                        }), [])
                    }({
                        cdnHost: w.K5
                    })
                },
                B = (function() {
                    var e = (0, n.A)(i().mark((function e(t, r, n, o) {
                        var a, s, c;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = !0, e.prev = 1, s = null === window || void 0 === window ? void 0 : window.FIAT_ACTIVATION, e.next = 5, null === s || void 0 === s ? void 0 : s.check({
                                        bizScene: "CONVERT",
                                        currencyList: [t, r],
                                        toAsset: r,
                                        fiatAmount: o
                                    });
                                case 5:
                                    c = e.sent, a = !!(null === c || void 0 === c ? void 0 : c.success), e.next = 13;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(1), a = !0, console.error(JSON.stringify(e.t0.message));
                                case 13:
                                    return e.abrupt("return", a);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })))
                }(), function() {
                    A(), _()
                }),
                E = r("OZeu"),
                T = (r("shXV"), r("mBIH")),
                R = r("/OND"),
                I = r("ah/i"),
                z = r("BKV1"),
                D = function(e) {
                    return e.userCenter.userPreferredCurrency
                },
                j = function(e) {
                    return e.userCenter.fiatCurrency
                },
                L = function(e) {
                    var t, r, n, o, i = null === (t = (0, R.d4)(D)) || void 0 === t || null === (r = t.configName) || void 0 === r || null === (n = r.split) || void 0 === n || null === (o = n.call(r, "_")) || void 0 === o ? void 0 : o[0],
                        a = (0, R.d4)(j)[i] || {},
                        s = a.rate,
                        c = a.symbol;
                    return s ? "\u2248 ".concat(c).concat((0, z.Xq)((0, I.lw)(+e, s).toFixed(8))) : ""
                },
                O = r("8r0Q"),
                F = r("VP0d"),
                P = r("888e"),
                H = r("nG1z"),
                U = r("BK7R"),
                M = r("tEf9"),
                N = r("GlbY");
            const W = function() {
                var e = localStorage.getItem("deviceId");
                if (e) return e;
                var t = function() {
                    for (var e = [], t = "0123456789abcdef", r = 0; r < 36; r++) e[r] = t.substr(Math.floor(16 * Math.random()), 1);
                    return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
                }();
                return localStorage.setItem("deviceId", t), t
            };
            var V = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        (0, N.Ay)("webClick", (0, U.A)({}, e), (0, U.A)({}, t))
                    } catch (r) {}
                },
                G = function() {
                    function e(t) {
                        var r = t.cdnHost,
                            n = void 0 === r ? "" : r,
                            o = t.isChatEnable,
                            i = void 0 === o || o,
                            a = t.isChatVisible,
                            s = void 0 === a || a,
                            c = t.isChatPopUp,
                            l = void 0 !== c && c,
                            u = t.onChatLoadedCallbackFunction,
                            p = void 0 === u ? function() {} : u,
                            d = t.apiHost,
                            f = void 0 === d ? "" : d,
                            h = t.entryChatData,
                            g = void 0 === h ? {} : h,
                            b = t.onClick,
                            m = t.sourceEntry,
                            v = t.isSenseiMode,
                            y = void 0 !== v && v;
                        (0, P.A)(this, e), this._cdnHost = n, this._isChatEnable = i, this._isChatVisible = s, this._isChatPopUp = l, this.entryChatData = g, this._scriptNode = null, this.onChatLoadedCallbackFunction = p, this._events = {}, this._hasVipGroup = !1, this._isVip = !1, this.apiHost = f, this.onClick = b, this._sourceEntry = m, this._isSenseiMode = y, this._chatScriptUrl = "", this._preChatContainerElement = null
                    }
                    var t = e.prototype;
                    return t.on = function(e, t) {
                        this._events[e] || (this._events[e] = []), this._events[e].push(t)
                    }, t.once = function(e, t) {
                        var r = this,
                            n = function() {
                                t(), r.off(e, n)
                            };
                        this.on(e, n)
                    }, t.off = function(e, t) {
                        this._events[e] = t ? this._events[e].filter((function(e) {
                            return e !== t
                        })) : []
                    }, t.emit = function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        if (this._events[e]) {
                            var o, i = this;
                            this._events[e].forEach((function(e) {
                                return (o = e).call.apply(o, [i].concat((0, M.A)(r)))
                            }))
                        }
                    }, t.changeChatVisibilityStatus = function(e) {
                        this._isChatVisible = e, this.emit("onChatVisibilityStatusChanged", this._isChatVisible), this.scriptNode || (e ? this.initChatEntry() : this.hideChatEntry())
                    }, t.changeChatPopUpStatus = function(e) {
                        this._isChatPopUp = e, this.emit("onChatPopUpStatusChanged", this._isChatPopUp), e && (localStorage.setItem("chatButtonVisible", "false"), this.scriptNode || this.addScript())
                    }, t.entryChat = function(e) {
                        var t = e.step,
                            r = void 0 === t ? 2 : t,
                            n = e.question,
                            o = void 0 === n ? "" : n,
                            i = e.extraInfo;
                        if (this.entryChatData = {
                                step: r,
                                question: o,
                                extraInfo: i
                            }, 1 === r) {
                            var a = document.getElementById("pre-chat-container");
                            this.drawToolTip(a, this.langData.api_tooltip), V({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_entry_tooltip_shown_times",
                                extraInfo: {
                                    url: window.location.href
                                }
                            })
                        }
                        2 === r && (this.changeChatPopUpStatus(!0), this.emit("onEntryChat", this.entryChatData))
                    }, t.checkScriptByUrl = function(e) {
                        return Array.prototype.some.call(document.querySelectorAll("script"), (function(t) {
                            return t.src === e
                        }))
                    }, t.preloadingJsUrl = function() {
                        var e = this;
                        return (0, n.A)(c().mark((function t() {
                            var r;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, e._chatScriptUrl) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, e.getChatScriptUrl();
                                    case 4:
                                        "string" === typeof(r = t.sent) && (e._chatScriptUrl = r);
                                    case 6:
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), console.log(t.t0);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })))()
                    }, t.getChatScriptUrl = function() {
                        var e = this;
                        return (0, n.A)(c().mark((function t() {
                            var r, n, o, i, a, s, u, p;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = "", e._chatScriptUrl) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.next = 5, (0, l.get)("/bapi/haodesk/v3/friendly/haodesk/std/base-info");
                                    case 5:
                                        return o = t.sent, i = o && o.success && (null === (n = o.data) || void 0 === n ? void 0 : n.login) ? "".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)) : "".concat(e.apiHost, "/bapi/haodesk/v3/public/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)), t.next = 10, (0, l.get)(i);
                                    case 10:
                                        if (a = t.sent, s = a.success, u = a.data, s) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 15:
                                        p = /.*binancezh.*$/.test(window.location.hostname), r = p ? "".concat(e.cdnHost).concat(u.cn) : "".concat(e.cdnHost).concat(u.com), t.next = 20;
                                        break;
                                    case 19:
                                        r = e._chatScriptUrl;
                                    case 20:
                                        return t.abrupt("return", r);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, t.displayLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var e = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                t = this._preChatContainerElement.querySelector(".chat-icon");
                            e && t && (e.style.display = "block", t.style.display = "none")
                        }
                    }, t.hideLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var e = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                t = this._preChatContainerElement.querySelector(".chat-icon");
                            e && t && (e.style.display = "none", t.style.display = "block")
                        }
                    }, t.addScript = function() {
                        var e = this;
                        return (0, n.A)(c().mark((function t() {
                            var r, n, o;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, r = "", e._chatScriptUrl) {
                                            t.next = 13;
                                            break
                                        }
                                        return e.displayLoadingIcon(), t.next = 6, e.getChatScriptUrl();
                                    case 6:
                                        if (n = t.sent, e.hideLoadingIcon(), n) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 10:
                                        r = n, t.next = 14;
                                        break;
                                    case 13:
                                        r = e._chatScriptUrl;
                                    case 14:
                                        if (!e.checkScriptByUrl(r)) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        (o = document.createElement("script")).setAttribute("async", "true"), o.src = r, o.onload = function() {
                                            e.removeChatEntry(), e.onChatLoadedCallbackFunction && e.onChatLoadedCallbackFunction(), e.emit("onChatLoaded"), "function" === typeof window.onload && window.onload(new Event("load"))
                                        }, e.scriptNode = o, document.body.appendChild(o), t.next = 28;
                                        break;
                                    case 24:
                                        t.prev = 24, t.t0 = t.catch(0), console.log(t.t0), e.hideLoadingIcon();
                                    case 28:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 24]
                            ])
                        })))()
                    }, t.removeCustomizedOnClick = function() {
                        this.onClick = null
                    }, t.removeChatEntry = function() {
                        var e, t = document.getElementById("pre-chat-container");
                        null === t || void 0 === t || null === (e = t.parentNode) || void 0 === e || e.removeChild(t), this._preChatContainerElement = null
                    }, t.hideChatEntry = function() {
                        var e = document.getElementById("pre-chat-container");
                        e && e.classList.remove("visible")
                    }, t.showChatEntry = function() {
                        var e = document.getElementById("pre-chat-container");
                        e && e.classList.add("visible")
                    }, t.drawChatEntry = function(e) {
                        var t = e.chatEntryTitle,
                            r = void 0 === t ? "Support" : t,
                            o = e.isVip,
                            i = void 0 !== o && o,
                            a = this,
                            s = document.getElementById("pre-chat-container");
                        if (s) return s;
                        var u = document.createElement("style");
                        u.innerHTML = "@keyframes widget-show-grow {0% {opacity: 0;}1% {opacity: 0;transform: scale(0.5);}100% {opacity: 1;transform: scale(1);}}.chat-container {position: fixed; right: 24px; bottom: 24px; cursor: pointer; opacity: 1; z-index: 998; border-radius: 16px; background: #FCD535; display: none; justify-content: center; align-items: center; padding:0px; min-width: 48px; height: 48px;} @media screen and (max-width: 767px) {.chat-container{right: 16px;bottom: 16px;border-radius: 14px; min-width: 40px; height: 40px}}.chat-container.visible {display: flex; animation: 0.5s ease 0s 1 normal backwards running widget-show-grow;}.chat-container.visible:hover {padding: 0 12px 0 8px;}.chat-container.visible:hover .chat-text {display: block;}.chat-container .chat-text {display: none; font-weight: 500; font-size: 16px; line-height: 24px; margin-left: 4px;color: #1E2329;}.chat-container .unread-message-alert { position: absolute;top: 5px;right: -8px; transform: translate(0px, -8px); color: #ffffff; background: #f6465d; border-radius: 16px; text-align: center; line-height: 16px; width: fit-content; min-width:8px; padding: 0px 4px; font-size: 16px; font-weight: 500;}.chat-container .tool-tip { position: absolute; width: 300px; right: 0; bottom: calc(100% + 9px); background: #fff; font-weight: 500; font-size: 16px; line-height: 24px; color: #474D57; border-radius: 4px; padding: 16px }.chat-container .tool-tip:after { content: ''; position: absolute; border: 8px solid transparent; border-top-color: #fff; bottom: -14px; right: 16px;}@keyframes widget-chat-loading-spin {\n        0%{-webkit-transform:rotate(0deg);}\n        25%{-webkit-transform:rotate(90deg);}\n        50%{-webkit-transform:rotate(180deg);}\n        75%{-webkit-transform:rotate(270deg);}\n        100%{-webkit-transform:rotate(360deg);}\n      }\n      .widget-chat-loading-icon {\n        display: inline-block; /* \u786e\u4fdd\u5143\u7d20\u662f\u884c\u5185\u5757\u5143\u7d20\uff0c\u8fd9\u6837 transform \u5c5e\u6027\u4f1a\u751f\u6548 */\n        animation: widget-chat-loading-spin 2s linear infinite; /* 2s\u662f\u65cb\u8f6c\u4e00\u5708\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574 */\n      }\n      ";
                        var p = document.createElement("div"),
                            d = this;
                        p.addEventListener("click", (0, n.A)(c().mark((function e() {
                            var t;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d.onClick) {
                                            e.next = 4;
                                            break
                                        }
                                        d.onClick(), e.next = 9;
                                        break;
                                    case 4:
                                        return localStorage.setItem("chatButtonVisible", "false"), e.next = 8, d.addScript();
                                    case 8:
                                        null === (t = window.CHATWIDGET) || void 0 === t || t.changeChatPopUpStatus(!0);
                                    case 9:
                                        V({
                                            pageName: "binance_support_chat",
                                            elementId: "chat_bubble_in_web",
                                            extraInfo: {
                                                deviceId: W()
                                            }
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), p.id = "pre-chat-container", p.classList.add("chat-container"), p.classList.add("visible");
                        var f = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        i ? (f.style.cssText = "width: 32px; height: 35px", f.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23868 12.7502H11.3363V19.8335H4.25298V15.618C4.25294 15.6065 4.25293 15.595 4.25293 15.5835C4.25293 8.54187 9.9613 2.8335 17.0029 2.8335C24.0446 2.8335 29.7529 8.54187 29.7529 15.5835L29.753 15.5835V19.8335H22.6696V12.7502H25.7671C24.5721 9.05089 21.0999 6.37518 17.0029 6.37518C12.9058 6.37518 9.43372 9.05089 8.23868 12.7502Z" fill="#181A20"/><path d="M21.9162 25.4389V26.5755H23.0528C23.3126 26.5755 23.4912 26.4375 23.4912 26.1615V25.8449C23.4912 25.577 23.3126 25.4389 23.0528 25.4389H21.9162Z" fill="#181A20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9163 22.6665H7.08301V31.1665H26.9163V22.6665ZM10.4958 29.7498H12.2088L14.0111 24.0832H12.5011L11.7136 26.7217L11.4132 28.2885H11.397L11.056 26.7217L10.2685 24.0832H8.70166L10.4958 29.7498ZM15.4779 29.7498H18.4249V28.5158H17.7349V25.3172H18.4249V24.0832H15.4779V25.3172H16.168V28.5158H15.4779V29.7498ZM21.9162 29.7498H20.3494V24.0832H23.2882C24.368 24.0832 25.0905 24.8869 25.0905 26.0072C25.0905 27.1195 24.368 27.9313 23.2882 27.9313H21.9162V29.7498Z" fill="#181A20"/>') : (f.style.cssText = "width: 28px; @media screen and (max-width: 767px) {width: 24px;}", f.setAttribute("viewBox", "0 0 28 29"), f.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5023 20.4105V14.5771C24.5023 14.2147 24.4839 13.8566 24.4481 13.5036C24.4449 13.4725 24.4416 13.4415 24.4382 13.4105C23.8579 8.16054 19.4069 4.07715 14.0023 4.07715C8.2033 4.07715 3.50229 8.77816 3.50229 14.5771V20.4105H9.33562V13.4105H6.50814C7.06932 9.77621 10.2109 6.99381 14.0023 6.99381C17.7937 6.99381 20.9353 9.77621 21.4964 13.4105H18.669V20.4105H19.7178C18.6728 21.4345 17.3539 22.1799 15.8812 22.5266C15.4563 21.9507 14.7729 21.5771 14.0023 21.5771C12.7136 21.5771 11.669 22.6218 11.669 23.9105C11.669 25.1991 12.7136 26.2438 14.0023 26.2438C14.9526 26.2438 15.7702 25.6757 16.134 24.8606C18.8766 24.295 21.2285 22.6599 22.7342 20.4105H24.5023Z" fill="#202630"/>'), f.classList.add("chat-icon"), p.appendChild(f);
                        var h = document.createElement("div");
                        h.style.cssText = "width: 32px; height: 32px;display:none;", h.innerHTML = '\n      <svg class="widget-chat-loading-icon"  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <g id="ic/loading-1c">\n      <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M14 29.1281V25.2891C12.8595 25.0447 11.7948 24.5956 10.8465 23.982L8.13198 26.6966C9.82568 27.9445 11.8265 28.7998 14 29.1281ZM5.30352 23.8682L8.01807 21.1536C7.40449 20.2053 6.95532 19.1406 6.71092 18H2.87183C3.2002 20.1736 4.05554 22.1744 5.30352 23.8682ZM2.87183 14H6.71092C6.95532 12.8593 7.40449 11.7947 8.01806 10.8463L5.30352 8.13177C4.05554 9.82551 3.2002 11.8263 2.87183 14ZM8.13197 5.30337L10.8465 8.01791C11.7948 7.40436 12.8595 6.95522 14 6.71082V2.87183C11.8265 3.20018 9.82568 4.05546 8.13197 5.30337ZM18 29.1281C20.1736 28.7997 22.1744 27.9444 23.8682 26.6964L21.1537 23.982C20.2054 24.5956 19.1407 25.0448 18 25.2892V29.1281ZM23.9821 21.1535L26.6966 23.868C27.9445 22.1743 28.7997 20.1735 29.1281 18H25.2892C25.0449 19.1406 24.5957 20.2052 23.9821 21.1535ZM25.2893 14H29.1281C28.7997 11.8264 27.9445 9.82568 26.6966 8.13199L23.9822 10.8464C24.5957 11.7947 25.0449 12.8594 25.2893 14ZM21.1537 8.01795L23.8682 5.30353C22.1744 4.05556 20.1736 3.20023 18 2.87184V6.71079C19.1407 6.95519 20.2054 7.40436 21.1537 8.01795Z" fill="#202630"/>\n      </g>\n      </svg>\n      ', h.classList.add("widget-chat-loading-icon-wrap"), p.appendChild(h);
                        var g = document.createElement("div");
                        return g.classList.add("chat-text"), g.innerHTML = r, p.appendChild(g), document.getElementsByTagName("head")[0].appendChild(u), document.body.appendChild(p), this._preChatContainerElement = p,
                            function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                try {
                                    (0, N.Ay)("elementShow", (0, U.A)({}, e), (0, U.A)({}, t))
                                } catch (r) {}
                            }({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_in_web",
                                extraInfo: {
                                    deviceId: W()
                                }
                            }), (0, l.post)("".concat(this.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/has-unread"), {
                                token: localStorage.getItem("chatToken")
                            }).then((function(e) {
                                var t, r, n;
                                if (e.success && (!(null === (t = e.data) || void 0 === t ? void 0 : t.expire) && (null === (r = e.data) || void 0 === r ? void 0 : r.hasUnread) || (null === (n = e.data) || void 0 === n ? void 0 : n.hasGroupUnread))) {
                                    var o, i, s = ((null === (o = e.data) || void 0 === o ? void 0 : o.chatUnreadCount) || 0) + ((null === (i = e.data) || void 0 === i ? void 0 : i.groupUnreadCount) || 0);
                                    s > 0 && a.drawUnreadMessageAlert(p, s)
                                }
                            })).catch((function() {})), p
                    }, t.drawUnreadMessageAlert = function(e, t) {
                        var r = document.createElement("div");
                        r.classList.add("unread-message-alert");
                        var n = document.createTextNode("".concat(t > 999 ? "999+" : t));
                        r.appendChild(n), e.appendChild(r)
                    }, t.drawToolTip = function(e, t) {
                        var r = document.createElement("div");
                        r.classList.add("tool-tip");
                        var n = document.createTextNode(t);
                        r.appendChild(n), e.appendChild(r)
                    }, t.getLocaleFromUrl = function() {
                        return (0, v.getLanguage)() || "en"
                    }, t.getI18n = function() {
                        var e = this.getLocaleFromUrl();
                        return fetch("".concat(this.cdnHost, "/api/i18n/-/web/cms/").concat(e, "/binance-chat")).then((function(e) {
                            return e.json()
                        })).catch((function() {}))
                    }, t.initChatEntry = function() {
                        var e = this;
                        return (0, n.A)(c().mark((function t() {
                            var r, n, o, i, a, s, u, p, d, f, h, g, b, m, v, y;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!["academy.binance.com", "academy.binance.info", "academy.mokexweb.cloud", "academy.binance.me", "academy.binancezh.jp", "academy.binancezh.top"].includes(null === window || void 0 === window ? void 0 : window.location.hostname) && !e.isSenseiMode) {
                                            t.next = 4;
                                            break
                                        }
                                        return e.addScript(), t.abrupt("return");
                                    case 4:
                                        if (!document.getElementById("pre-chat-container")) {
                                            t.next = 8;
                                            break
                                        }
                                        return e.showChatEntry(), t.abrupt("return");
                                    case 8:
                                        return r = localStorage.getItem("chatToken"), n = !1, t.prev = 10, t.next = 13, (0, l.get)("".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/visible2?deviceId=").concat(W()));
                                    case 13:
                                        if (!(o = t.sent).data || !o.success) {
                                            t.next = 21;
                                            break
                                        }
                                        if (i = o.data, a = i.visible, s = i.vip, u = i.hasGroup, n = !!s, e._isVip = n, e._hasVipGroup = !!u, a) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 21:
                                        t.next = 25;
                                        break;
                                    case 23:
                                        t.prev = 23, t.t0 = t.catch(10);
                                    case 25:
                                        if (!(p = window.location.search)) {
                                            t.next = 35;
                                            break
                                        }
                                        if (d = new URLSearchParams(p), !d.get("service-group")) {
                                            t.next = 35;
                                            break
                                        }
                                        return null === (f = window.CHATWIDGET) || void 0 === f || f.changeChatPopUpStatus(!0), t.next = 34, e.addScript();
                                    case 34:
                                        return t.abrupt("return");
                                    case 35:
                                        if (!r) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.next = 38, (0, l.post)("".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/user-open-session"), {
                                            token: r
                                        });
                                    case 38:
                                        if (h = t.sent, g = h.success, b = h.data, !g || !b.sessionId || "false" !== localStorage.getItem("chatButtonVisible")) {
                                            t.next = 48;
                                            break
                                        }
                                        return null === (m = window.CHATWIDGET) || void 0 === m || m.changeChatPopUpStatus(!0), t.next = 46, e.addScript();
                                    case 46:
                                        t.next = 59;
                                        break;
                                    case 48:
                                        return t.prev = 48, t.next = 51, e.getI18n();
                                    case 51:
                                        v = t.sent, e.langData = v, e.drawChatEntry({
                                            chatEntryTitle: v["chat-chatButtonText"],
                                            isVip: n
                                        }), t.next = 59;
                                        break;
                                    case 56:
                                        t.prev = 56, t.t1 = t.catch(48), e.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: n
                                        });
                                    case 59:
                                        t.next = 72;
                                        break;
                                    case 61:
                                        return t.prev = 61, t.next = 64, e.getI18n();
                                    case 64:
                                        y = t.sent, e.langData = y, e.drawChatEntry({
                                            chatEntryTitle: y["chat-chatButtonText"],
                                            isVip: n
                                        }), t.next = 72;
                                        break;
                                    case 69:
                                        t.prev = 69, t.t2 = t.catch(61), e.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: n
                                        });
                                    case 72:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [10, 23],
                                [48, 56],
                                [61, 69]
                            ])
                        })))()
                    }, (0, H.A)(e, [{
                        key: "isChatEnable",
                        get: function() {
                            return this._isChatEnable
                        }
                    }, {
                        key: "isChatVisible",
                        get: function() {
                            return this._isChatVisible
                        }
                    }, {
                        key: "isChatPopUp",
                        get: function() {
                            return this._isChatPopUp
                        }
                    }, {
                        key: "scriptNode",
                        get: function() {
                            return this._scriptNode
                        },
                        set: function(e) {
                            this._scriptNode = e
                        }
                    }, {
                        key: "cdnHost",
                        get: function() {
                            return this._cdnHost
                        },
                        set: function(e) {
                            this._cdnHost = e
                        }
                    }, {
                        key: "hasVipGroup",
                        get: function() {
                            return this._hasVipGroup
                        }
                    }, {
                        key: "isVip",
                        get: function() {
                            return this._isVip
                        }
                    }, {
                        key: "sourceEntry",
                        get: function() {
                            return this._sourceEntry
                        }
                    }, {
                        key: "isSenseiMode",
                        get: function() {
                            return this._isSenseiMode
                        }
                    }]), e
                }(),
                Y = r("p1Ck"),
                q = {
                    pageName: "convert-ui",
                    clientType: "web",
                    elementID: "view_haodesk_request_for_quote_button"
                };

            function X() {
                var e = (0, F.A)(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                isChatEnable: !0,
                                isChatVisible: !0,
                                isChatPopUp: !1,
                                onChatLoadedCallbackFunction: function() {},
                                onClick: null,
                                isSenseiMode: !1
                            },
                            r = t.isChatEnable,
                            n = t.isChatVisible,
                            o = t.isChatPopUp,
                            i = t.onChatLoadedCallbackFunction,
                            s = t.apiHost,
                            c = t.onClick,
                            l = t.sourceEntry,
                            u = t.isSenseiMode,
                            p = (0, a.useRef)(new G({
                                cdnHost: e,
                                isChatEnable: r,
                                isChatPopUp: o,
                                isChatVisible: n,
                                onChatLoadedCallbackFunction: i,
                                apiHost: s,
                                onClick: c,
                                sourceEntry: l,
                                isSenseiMode: u
                            }));
                        return (0, a.useEffect)((function() {
                            if (r) {
                                var t = p.current;
                                t.cdnHost = e, window.CHATWIDGET = t, V({
                                    pageName: "binance_support_chat",
                                    elementId: "chat_bubble_entry_amount_of_calls",
                                    extraInfo: {
                                        url: window.location.href
                                    }
                                }), n && (o ? t.changeChatPopUpStatus(!0) : t.changeChatVisibilityStatus(!0))
                            }
                        }), [e]), (0, a.useEffect)((function() {
                            p.current.changeChatVisibilityStatus(n)
                        }), [n]), (0, a.useEffect)((function() {
                            p.current.changeChatPopUpStatus(o)
                        }), [o]), (0, a.useEffect)((function() {
                            setTimeout((function() {
                                p.current.preloadingJsUrl()
                            }), 4e3)
                        }), []), [p.current]
                    }(w.K5, {
                        sourceEntry: "12",
                        isChatEnable: !0,
                        isChatVisible: !0
                    }), 1),
                    t = e[0],
                    r = (0, a.useState)(q),
                    n = r[0],
                    o = r[1],
                    i = (0, a.useState)(!1),
                    s = i[0],
                    c = i[1],
                    l = (0, a.useCallback)((function(e, r, n) {
                        o(n), t.changeChatVisibilityStatus(e), t.changeChatPopUpStatus(e), t.entryChat({
                            step: 2,
                            question: "otc_trading_manual_quotation",
                            extraInfo: {
                                bizType: 1,
                                data: r
                            }
                        })
                    }), [t]);
                return t.on("onChatPopUpStatusChangedNotify", (function(e) {
                    c(e)
                })), (0, a.useEffect)((function() {
                    s && (0, Y.u4)("elementShow", n)
                }), [s, n]), l
            }
            var $ = r("fYnN"),
                K = r.n($),
                Z = r("c6Y9"),
                Q = r("8tQJ"),
                J = r("T3Fm"),
                ee = r("QUKP"),
                te = r("HIvj"),
                re = {
                    emailPrefix: "",
                    formatEmail: "",
                    tradeLevel: 0,
                    lastLoginTime: 0,
                    lastLoginIp: "",
                    idPhoto: "-1",
                    authenticationType: 1,
                    commissionStatus: !1,
                    kycStatus: "-",
                    withdrawWhiteStatus: !1
                },
                ne = r("nsO7"),
                oe = r("a59x"),
                ie = function() {
                    return window._env_ || {}
                },
                ae = function() {
                    return (0, U.A)({}, {
                        REACT_APP_COMMIT_ID: "{}".REACT_APP_COMMIT_ID
                    }, ie(), {
                        ACCOUNTS_DOMAIN: "https://".concat(ie().ACCOUNTS_PREFIX, ".").concat((0, oe.bG)(2))
                    })
                },
                se = ae(),
                ce = se.THEMIS_ADDRESS,
                le = (se.THEMIS_AUTH_HEADER, function() {
                    if (!J.o) return "";
                    var e = d.U.read("bnc-uuid");
                    return e || (e = (0, Z.v4)(), d.U.writeCookieWithDomainLevel("bnc-uuid", e, 1825, !0)), e
                }),
                ue = function() {
                    var e = (0, a.useState)({}),
                        t = e[0],
                        r = e[1],
                        o = (0, a.useState)(null),
                        s = o[0],
                        c = o[1],
                        l = function() {
                            var e = (0, te.Py)(),
                                t = (0, F.A)((0, a.useState)((0, U.A)({}, re, e)), 2),
                                r = t[0],
                                n = t[1];
                            return (0, a.useEffect)((function() {
                                var t = e.email,
                                    r = e.commissionStatus,
                                    o = e.idPhoto,
                                    i = function(e) {
                                        if (!e) return {
                                            emailPrefix: "**",
                                            formatEmail: "******"
                                        };
                                        var t = e.substr(0, 2),
                                            r = e.split("@");
                                        return {
                                            emailPrefix: t,
                                            formatEmail: "".concat(t, "***@").concat(r[1])
                                        }
                                    }(t),
                                    a = i.emailPrefix,
                                    s = i.formatEmail;
                                void 0 !== o && n((0, ee.A)((0, U.A)({}, e), {
                                    emailPrefix: a,
                                    commissionStatus: !!r,
                                    formatEmail: s,
                                    kycStatus: "1" === o
                                }))
                            }), [e]), {
                                userBaseInfo: r,
                                setUserBaseInfo: n
                            }
                        }(),
                        u = l.userBaseInfo.userId,
                        p = (0, a.useCallback)((0, n.A)(i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Q.Ay.init({
                                            device_id: "some-pc",
                                            uid: u,
                                            trace_id: K().get("bnc-uuid") || le(),
                                            platform: 3,
                                            os_version: "1.0.0",
                                            app_version: "1.0.0",
                                            region: "eu",
                                            language: "en",
                                            exchange_rate: "usd",
                                            env: w.lF || "PROD"
                                        }, {
                                            authHeader: "MTIxMjA4MjEyMDoweVZISUZvNTVUc3laTk1nSmJJU2VnWVpNVVVmUk5YcA==",
                                            baseUrl: ce
                                        }, (function(e) {
                                            r((function() {
                                                return e
                                            }))
                                        }));
                                    case 2:
                                        return t = e.sent, c(t), e.abrupt("return", t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [u]);
                    return (0, a.useEffect)((function() {
                        p()
                    }), [u]), {
                        strategy: t,
                        instantStrategy: s
                    }
                },
                pe = function(e, t) {
                    var r = ue().strategy,
                        n = (0, a.useState)(!1),
                        o = n[0],
                        i = n[1];
                    return (0, a.useEffect)((function() {
                        console.log("themis-".concat(e, ": ").concat((0, ne.get)(r, "experiments.".concat(e))), (0, ne.get)(r, "experiments.".concat(e))), console.log("themis config :", r);
                        var n = (0, ne.get)(r, "experiments.".concat(e));
                        i(n === t)
                    }), [r, e, t]), o
                };

            function de(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.enabled,
                    n = void 0 === r || r,
                    o = t.excludeSelectors,
                    i = void 0 === o ? [] : o,
                    s = t.eventType,
                    c = void 0 === s ? "mousedown" : s;
                (0, a.useEffect)((function() {
                    if (n) {
                        var t = function(t) {
                            var r = i[0] || "",
                                n = r && (null === document || void 0 === document ? void 0 : document.querySelector(r));
                            n && (i.some((function(e) {
                                return t.target.closest(e)
                            })) || "input" === t.target.tagName.toLowerCase() || n.contains(t.target) || e(t))
                        };
                        return null === document || void 0 === document || document.addEventListener(c, t),
                            function() {
                                return null === document || void 0 === document ? void 0 : document.removeEventListener(c, t)
                            }
                    }
                }), [e, n, i, c])
            }
            var fe = "var(--color-Buy)",
                he = "var(--color-PrimaryText)",
                ge = "var(--color-Sell)",
                be = function() {
                    var e, t = "true" === (null !== (e = d.U.read("isRedUpGreenDown")) && void 0 !== e ? e : "false"),
                        r = (0, a.useMemo)((function() {
                            var e = (0, F.A)(t ? [ge, fe] : [fe, ge], 2),
                                r = e[0],
                                n = e[1];
                            return {
                                default: he,
                                up: r,
                                down: n
                            }
                        }), [t]),
                        n = (0, a.useCallback)((function(e) {
                            var r = Number(e);
                            if (!r) return he;
                            var n = (0, F.A)(t ? [ge, fe] : [fe, ge], 2),
                                o = n[0],
                                i = n[1];
                            return r > 0 ? o : i
                        }), [t]);
                    return {
                        colors: r,
                        getColor: n
                    }
                },
                me = function(e) {
                    return e.globalConfigs.lngRegion
                },
                ve = function() {
                    return (0, R.d4)(me)
                },
                ye = (r("dNJX"), r("/azZ")),
                xe = function(e) {
                    (0, a.useEffect)((function() {
                        var t = function() {
                            var e = (0, n.A)(i().mark((function e(t) {
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, ye.A.init({
                                                device_id: "some-pc",
                                                platform: 3,
                                                uid: null !== t && void 0 !== t ? t : "",
                                                os_version: "",
                                                os: "",
                                                app_version: "",
                                                language: (0, v.getLanguage)(),
                                                exchange_rate: "usd",
                                                trace_id: K().get("bnc-uuid"),
                                                env: "PROD",
                                                feature_gates: [],
                                                strategy_ids: []
                                            }, {
                                                authHeader: "MTIxMjA4MjEyMDoweVZISUZvNTVUc3laTk1nSmJJU2VnWVpNVVVmUk5YcA==",
                                                baseUrl: ce
                                            });
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), console.error("Error while fetching themis ", e.t0);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 5]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                        t(e)
                    }), [e])
                },
                we = function() {
                    var e = (0, a.useState)({}),
                        t = e[0],
                        r = e[1];
                    return (0, a.useEffect)((function() {
                        var e = function() {
                            var e = (0, n.A)(i().mark((function e() {
                                var t, n;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ye.A.getHelper();
                                        case 2:
                                            return t = e.sent, e.next = 5, null === t || void 0 === t ? void 0 : t.getStrategiesConfig();
                                        case 5:
                                            n = e.sent, r(n);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), []), {
                        strategy: t
                    }
                },
                ke = (r("2JYu"), r("y9Sx")),
                Ce = r("b8jR")
        },
        shXV: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => l
            });
            var n = r("sViW"),
                o = r("0GOp"),
                i = r.n(o),
                a = r("DTvD"),
                s = r("fdP6"),
                c = function() {
                    var e = (0, n.A)(i().mark((function e() {
                        var t, r, n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, (0, s.K$)({
                                        platform: "WEB"
                                    });
                                case 3:
                                    if (!(null === (n = e.sent) || void 0 === n ? void 0 : n.success)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", (null === n || void 0 === n || null === (t = n.data) || void 0 === t || null === (r = t.restriction) || void 0 === r ? void 0 : r.keys) || []);
                                case 6:
                                    return e.abrupt("return", []);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, a.useState)([]),
                        t = e[0],
                        r = e[1];
                    return (0, a.useEffect)((function() {
                        c().then((function(e) {
                            r(e)
                        }))
                    }), []), t
                }
        },
        mBIH: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => s,
                o: () => a
            });
            var n = r("DTvD"),
                o = r("P3FW"),
                i = "convert",
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["convert-ui_convert"],
                        r = (0, o.s9)(t).t;
                    return (0, n.useCallback)((function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = arguments.length > 2 ? arguments[2] : void 0;
                        if (!t) return "";
                        var a = e || o || (null === t || void 0 === t ? void 0 : t.indexOf("lmt-")) >= 0 ? "" : i,
                            s = [a, t].filter((function(e) {
                                return e
                            })).join("-");
                        return r(s, n).trim() || n.defaultValue || ""
                    }), [r, e])
                },
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "convert-oc-",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["one-click-convert-ui"],
                        r = (0, o.s9)(t).t;
                    return (0, n.useCallback)((function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return r(e ? "".concat(e).concat(t) : t, n).trim() || n.defaultValue || ""
                    }), [r])
                }
        },
        y9Sx: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => a
            });
            var n = r("DTvD"),
                o = r("BMJD"),
                i = r("HS2I"),
                a = function() {
                    var e = (0, n.useState)({
                            pass: !1
                        }),
                        t = e[0],
                        r = e[1],
                        a = ((0, i.useUserBaseDetail)().value || {}).userId,
                        s = void 0 === a ? "" : a;
                    return (0, n.useEffect)((function() {
                        s && (0, o.qk)({
                            productLine: "CONVERT",
                            operation: "MICA_CHECK",
                            userId: s
                        }).then((function(e) {
                            var t;
                            r({
                                pass: null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.pass
                            })
                        }))
                    }), [s]), t
                }
        },
        "8r0Q": (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => i
            });
            var n = r("BK9r"),
                o = r("DTvD");

            function i() {
                var e = (0, n.K7)(),
                    t = e.query,
                    r = e.params;
                return (0, o.useMemo)((function() {
                    return {
                        query: t,
                        params: r
                    }
                }), [t])
            }
        },
        "2JYu": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r("VP0d"),
                o = r("DTvD"),
                i = r("p1Ck"),
                a = r("IgnQ"),
                s = {
                    market: "user_stay_duration_instant",
                    recurring: "user_stay_duration_recurring",
                    limit: "user_stay_duration_limit"
                };
            const c = function() {
                var e = (0, o.useRef)(Date.now()),
                    t = (0, n.A)((0, a.Vh)(a.EM), 1)[0],
                    r = (0, o.useRef)(t),
                    c = function(e, t) {
                        (0, i.u4)("elementShow", {
                            pageName: "convert-ui",
                            clientType: "web",
                            elementID: s[t] || "unknown_tab",
                            duration: e
                        }), localStorage.removeItem(t)
                    },
                    l = function() {
                        var r = Math.round((Date.now() - e.current) / 1e3);
                        localStorage.setItem(t, String(r))
                    },
                    u = function() {
                        l();
                        var e = localStorage.getItem(t);
                        e && c(e, t)
                    },
                    p = function() {
                        l()
                    };
                (0, o.useEffect)((function() {
                    e.current = Date.now(), window.addEventListener("pagehide", u), window.addEventListener("unload", p);
                    var r = localStorage.getItem(t);
                    return r && c(r, t),
                        function() {
                            window.removeEventListener("pagehide", u), window.removeEventListener("unload", p)
                        }
                }), []), (0, o.useEffect)((function() {
                    if (r.current !== t) {
                        var n = Math.round((Date.now() - e.current) / 1e3);
                        e.current = Date.now(), c(n, r.current), localStorage.removeItem(r.current), r.current = t
                    }
                }), [t])
            }
        },
        dNJX: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD");
            const o = function(e, t, r) {
                var o = (0, n.useState)([]),
                    i = o[0],
                    a = o[1];
                return (0, n.useEffect)((function() {
                    var n = (t - 1) * r,
                        o = n + r,
                        i = e.slice(n, o);
                    a(i)
                }), [e, t, r]), i
            }
        },
        b8jR: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("DTvD"),
                o = {
                    isMobile: "(max-width: 767px)",
                    isTablet: "(min-width: 768px) and (max-width: 1279px)",
                    isPC: "(min-width: 1280px)"
                };
            const i = function() {
                var e = (0, n.useState)({
                        isMobile: !1,
                        isTablet: !1,
                        isPC: !0
                    }),
                    t = e[0],
                    r = e[1];
                return (0, n.useEffect)((function() {
                    var e = {};
                    Object.keys(o).forEach((function(t) {
                        var r = o[t],
                            n = window.matchMedia(r);
                        e[t] = n.matches
                    })), r(e)
                }), []), t
            }
        },
        OZeu: (e, t, r) => {
            "use strict";
            r.d(t, {
                bY: () => o,
                dG: () => i,
                oj: () => n
            });
            var n = (0, r("7RM3").A)((function(e) {
                    return {
                        showLimit: !0,
                        setShowLimit: function(t) {
                            e({
                                showLimit: t
                            })
                        }
                    }
                })),
                o = function(e) {
                    return e.setShowLimit
                },
                i = function(e) {
                    return e.showLimit
                }
        },
        "s0T/": (e, t, r) => {
            "use strict";
            r.d(t, {
                EM: () => o,
                Iq: () => i,
                Vh: () => n
            });
            var n = (0, r("7RM3").A)((function(e) {
                    return {
                        tab: "market",
                        setTab: function(t) {
                            e({
                                tab: t
                            })
                        }
                    }
                })),
                o = function(e) {
                    return [e.tab, e.setTab]
                },
                i = function(e) {
                    return e.tab
                }
        },
        pDj5: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => E,
                Qx: () => R,
                uh: () => T
            });
            var n = r("sViW"),
                o = r("BK7R"),
                i = r("VP0d"),
                a = r("tEf9"),
                s = r("0GOp"),
                c = r.n(s),
                l = r("jg1C"),
                u = r("DTvD"),
                p = r("eeEA"),
                d = r("W2aP"),
                f = r("3yYM"),
                h = r.n(f),
                g = r("VA12");
            var b = function(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            };

            function m(e, t, r) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, n.A)(h().mark((function e(t, r, n) {
                    var o;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.race([t, b(r).then((function() {
                                    if ("undefined" === typeof n) throw new Error("promise timeout");
                                    return n
                                }))]);
                            case 2:
                                return o = e.sent, e.abrupt("return", o);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }(function() {
                var e = (0, n.A)(h().mark((function e(t) {
                    var r, n, o, i, a;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.promises, n = t.timeout, o = t.fallbackValue, i = r.map((function(e) {
                                    return m(e, n)
                                })), e.next = 4, Promise.allSettled(i);
                            case 4:
                                return a = e.sent, e.abrupt("return", a.map((function(e, t) {
                                    return "fulfilled" === e.status ? e.value : null === o || void 0 === o ? void 0 : o[t]
                                })));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            })(),
            function() {
                var e = (0, n.A)(h().mark((function e(t) {
                    var r, n, o;
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, g.post)("/bapi/asset/v1/private/asset/asset/user-asset-dividend", t);
                            case 2:
                                return r = e.sent, n = r.data, o = r.total, e.abrupt("return", {
                                    data: n,
                                    total: o
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(h().mark((function e(t) {
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, g.post)("/bapi/asset/v1/private/asset-service/partner/queryMigrationStatus?clientId=".concat(t)));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }(),
            function() {
                var e = (0, n.A)(h().mark((function e(t) {
                    return h().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, g.post)("/bapi/asset/v1/private/asset-service/partner/migrate", t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }();
            var y = function(e, t) {
                    var r = Symbol("empty"),
                        o = {},
                        i = {},
                        s = {},
                        c = {};
                    return function() {
                        var l = (0, n.A)(h().mark((function n() {
                            var l, u, p, d, f, g = arguments;
                            return h().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        for (l = g.length, u = new Array(l), p = 0; p < l; p++) u[p] = g[p];
                                        if (d = 0 === u.length ? r : u.toString(), !o[d]) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return", Promise.resolve(o[d]()));
                                    case 4:
                                        if ("pending" !== i[d]) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return", new Promise((function(e, t) {
                                            s[d] || (s[d] = []), c[d] || (c[d] = []), s[d].push(e), c[d].push(t)
                                        })));
                                    case 6:
                                        return n.prev = 6, i[d] = "pending", n.next = 10, e.apply(void 0, (0, a.A)(u));
                                    case 10:
                                        f = n.sent, i[d] = "success", o[d] = function() {
                                            return "number" === typeof t && t > 0 && setTimeout((function() {
                                                o[d] = null
                                            }), t), f
                                        }, s[d] && (s[d].forEach((function(e) {
                                            return e(f)
                                        })), s[d].length = 0), n.next = 21;
                                        break;
                                    case 16:
                                        throw n.prev = 16, n.t0 = n.catch(6), i[d] = "error", c[d] && (c[d].forEach((function(e) {
                                            return e(n.t0)
                                        })), c[d].length = 0), n.t0;
                                    case 21:
                                        return n.abrupt("return", o[d]());
                                    case 22:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [6, 16]
                            ])
                        })));
                        return function() {
                            return l.apply(this, arguments)
                        }
                    }()
                }(function() {
                    var e = (0, n.A)(h().mark((function e() {
                        var t;
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, g.get)("/bapi/asset/v1/public/asset/asset/get-asset-logo");
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
                }()),
                x = (function() {
                    var e = (0, n.A)(h().mark((function e() {
                        var t, r;
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        success: !1,
                                        data: []
                                    }, e.prev = 1, e.next = 4, (0, g.get)("/bapi/futures/v1/public/future/common/futures-stable-assets");
                                case 4:
                                    if (!(r = e.sent).success) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 7:
                                    return e.abrupt("return", t);
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", t);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })))
                }(), r("HS2I")),
                w = r("ylWw"),
                k = r("p1Ck"),
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    return e.reduce((function(e, n) {
                        return e[n[t]] = r ? n[r] : n, e
                    }), {})
                },
                S = r("S8zv"),
                A = {},
                _ = function() {
                    return (0, l.jsx)(p.Ay, {
                        style: {
                            width: "100%",
                            height: "calc(100vh - 64px)",
                            display: "grid",
                            placeItems: "center"
                        },
                        children: (0, l.jsx)(d.A, {
                            label: "Loading..."
                        })
                    })
                },
                B = (0, u.createContext)({
                    assets: [],
                    toggleFavorite: function(e) {}
                }),
                E = (function() {
                    var e = (0, n.A)(c().mark((function e() {
                        var t, r, n, o, a, s;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = {}, e.prev = 4, e.t0 = i.A, e.next = 10, Promise.all([(0, w.NH)(), (0, w.$2)(), y()]);
                                case 10:
                                    e.t1 = e.sent, a = (0, e.t0)(e.t1, 3), t = a[0], r = a[1], n = a[2], r.forEach((function(e) {
                                        o[e.coin] = e
                                    })), (null === t || void 0 === t ? void 0 : t.length) > 0 && (s = C(n, "asset", "pic"), t.forEach((function(e) {
                                        s[e.coin] && (e.logo = s[e.coin]), o[e.coin] ? (e.isFavorite = o[e.coin].isFavorite, e.pop = o[e.coin].isHot, e.newToken = o[e.coin].isNew) : (e.isFavorite = !1, e.pop = !1, e.newToken = !1), e.pop && e.newToken && (e.pop = !1)
                                    }))), e.next = 23;
                                    break;
                                case 20:
                                    throw e.prev = 20, e.t2 = e.catch(4), new Error({
                                        type: "network-error"
                                    });
                                case 23:
                                    if (!t) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("return", t);
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 20]
                        ])
                    })))
                }(), function(e) {
                    var t = e.initialAssets,
                        r = e.disableLoading,
                        i = void 0 !== r && r,
                        s = e.isRecurring,
                        p = void 0 !== s && s,
                        d = e.children,
                        f = e.placeholder,
                        h = void 0 === f ? (0, l.jsx)(_, {}) : f,
                        g = (0, u.useState)(t || []),
                        b = g[0],
                        m = g[1],
                        v = (0, u.useState)(0),
                        E = v[0],
                        T = v[1],
                        R = (0, S.m)().walletType,
                        I = (0, u.useState)({}),
                        z = I[0],
                        D = I[1],
                        j = (0, x.useUserBalance)().update,
                        L = (0, u.useCallback)((0, n.A)(c().mark((function e() {
                            var t, r, n, i, a, s;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [], r = {}, e.prev = 2, e.next = 5, (0, w.NH)();
                                    case 5:
                                        return t = e.sent, n = p ? w.RD : w.yP, e.next = 9, n({
                                            walletType: null !== R && void 0 !== R ? R : "SPOT_FUNDING"
                                        });
                                    case 9:
                                        if (i = e.sent, D(i), (null !== i && void 0 !== i ? i : {}).fromList.forEach((function(e) {
                                                var t;
                                                r[e.coin] = (0, o.A)({}, e), null === e || void 0 === e || null === (t = e.toList) || void 0 === t || t.forEach((function(e) {
                                                    r[e.coin] || (r[e.coin] = (0, o.A)({}, e))
                                                }))
                                            })), !((null === t || void 0 === t ? void 0 : t.length) > 0)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 16, y();
                                    case 16:
                                        a = e.sent, s = C(a, "asset", "pic"), t.forEach((function(e) {
                                            var t, n, o;
                                            (s[e.coin] && (e.logo = s[e.coin]), r[e.coin]) ? (e.free = r[e.coin].free, e.freeUsdt = r[e.coin].freeUsdt, e.isFavorite = null === (t = r[e.coin].tags) || void 0 === t ? void 0 : t.includes(1), e.pop = null === (n = r[e.coin].tags) || void 0 === n ? void 0 : n.includes(2), e.newToken = null === (o = r[e.coin].tags) || void 0 === o ? void 0 : o.includes(3)) : (e.isFavorite = !1, e.pop = !1, e.newToken = !1)
                                        })), m(t);
                                    case 20:
                                        e.next = 26;
                                        break;
                                    case 22:
                                        throw e.prev = 22, e.t0 = e.catch(2), t && m(t), new Error({
                                            type: "network-error"
                                        });
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 22]
                            ])
                        }))), [R, p]),
                        O = (0, u.useCallback)(function() {
                            var e = (0, n.A)(c().mark((function e(t) {
                                var r, n;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!A[t]) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (A[t] = !0, !(r = b.find((function(e) {
                                                    return e.coin === t
                                                }))).isFavorite) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 7, (0, w.jg)(t);
                                        case 7:
                                            r.isFavorite = !1, (0, k.u4)("$WebClick", {
                                                pageName: "convert-ui",
                                                clientType: "web",
                                                eventName: "convert_remove_fav_token"
                                            }), e.next = 15;
                                            break;
                                        case 11:
                                            return e.next = 13, (0, w.Fi)(t);
                                        case 13:
                                            r.isFavorite = !0, (0, k.u4)("$WebClick", {
                                                pageName: "convert-ui",
                                                clientType: "web",
                                                eventName: "convert_add_fav_token"
                                            });
                                        case 15:
                                            (n = (0, a.A)(b)).forEach((function(e) {
                                                e.coin === t && (e = r)
                                            })), T(E + 1), m(n), A[t] = !1;
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [b, E, T]);
                    (0, u.useEffect)((function() {
                        L()
                    }), [R, p]);
                    var F = (0, u.useCallback)(function() {
                        var e = (0, n.A)(c().mark((function e(t) {
                            var r, n, o, i;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.isRecurring, n = void 0 !== r && r, R) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return o = n ? w.RD : w.yP, e.prev = 4, e.next = 7, o({
                                            walletType: null !== R && void 0 !== R ? R : "SPOT_FUNDING"
                                        });
                                    case 7:
                                        i = e.sent, D(i), j(), e.next = 15;
                                        break;
                                    case 12:
                                        throw e.prev = 12, e.t0 = e.catch(4), new Error({
                                            type: "network-error"
                                        });
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 12]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [R, D]);
                    return b.length > 0 || i ? (0, l.jsx)(B.Provider, {
                        value: {
                            assets: b,
                            toggleFavorite: O,
                            fromCoinList: z,
                            refreshFromCoinList: F
                        },
                        children: d
                    }) : null !== h && void 0 !== h ? h : null
                }),
                T = function() {
                    return (0, u.useContext)(B)
                },
                R = function() {
                    return (0, u.useContext)(B).assets
                }
        },
        S8zv: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => h,
                m: () => g
            });
            var n = r("sViW"),
                o = r("VP0d"),
                i = r("0GOp"),
                a = r.n(i),
                s = r("jg1C"),
                c = r("DTvD"),
                l = r("BMJD"),
                u = r("dqst"),
                p = r("8r0Q"),
                d = c.useLayoutEffect,
                f = (0, c.createContext)(null),
                h = function(e) {
                    var t, r = e.children,
                        i = (0, p.H)(),
                        h = i.query,
                        g = i.params,
                        b = g.fromSymbol,
                        m = g.toSymbol,
                        v = h.fromAmount,
                        y = void 0 === v ? "" : v,
                        x = h.toAmount,
                        w = void 0 === x ? "" : x,
                        k = h.walletType,
                        C = (0, c.useState)(b),
                        S = C[0],
                        A = C[1],
                        _ = (0, c.useState)(m),
                        B = _[0],
                        E = _[1],
                        T = (0, c.useState)(!1),
                        R = T[0],
                        I = T[1],
                        z = (0, c.useState)(!1),
                        D = z[0],
                        j = z[1],
                        L = (0, c.useState)(0),
                        O = L[0],
                        F = L[1],
                        P = (0, c.useState)(1e4),
                        H = P[0],
                        U = P[1],
                        M = (0, c.useState)(y),
                        N = M[0],
                        W = M[1],
                        V = (0, c.useState)(w),
                        G = V[0],
                        Y = V[1];
                    (0, c.useEffect)((function() {
                        function e() {
                            return (e = (0, n.A)(a().mark((function e() {
                                var t;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, (0, l.Tc)();
                                        case 3:
                                            t = e.sent, j(t.isUserPersonalOrEnterpriseAccount), F(t.tradeLevel), e.next = 10;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), []), d((function() {
                        k && window.localStorage.removeItem("walletType")
                    }), [k]);
                    var q = (0, o.A)((0, u.A)("walletType", (null === k || void 0 === k || null === (t = k.toUpperCase) || void 0 === t ? void 0 : t.call(k)) || "SPOT_FUNDING"), 2),
                        X = q[0],
                        $ = q[1];
                    return (0, s.jsx)(f.Provider, {
                        value: {
                            globalFromCoin: S,
                            setGlobalFromCoin: A,
                            globalToCoin: B,
                            setGlobalToCoin: E,
                            marketFromAmount: N,
                            setMarketFromAmount: W,
                            marketToAmount: G,
                            setMarketToAmount: Y,
                            walletType: X,
                            setWalletType: $,
                            insufficient: R,
                            setInsufficient: I,
                            balanceLowerLimit: H,
                            setBalanceLowerLimit: U,
                            tradeLevel: O,
                            isEnterpriseAccount: D
                        },
                        children: r
                    })
                },
                g = function() {
                    var e = (0, c.useContext)(f);
                    if (null === e) throw new Error("Coins provider not found");
                    return e
                }
        },
        iknu: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => j,
                k: () => L
            });
            var n = r("VP0d"),
                o = r("jg1C"),
                i = r("DTvD");

            function a(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }

            function s(e, t) {
                if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }

            function c(e) {
                s(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" === typeof e || "[object Number]" === t ? new Date(e) : ("string" !== typeof e && "[object String]" !== t || "undefined" === typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN))
            }

            function l(e, t) {
                s(2, arguments);
                var r = c(e),
                    n = a(t);
                return isNaN(n) ? new Date(NaN) : n ? (r.setDate(r.getDate() + n), r) : r
            }

            function u(e, t) {
                s(2, arguments);
                var r = a(t);
                return l(e, -r)
            }

            function p(e, t) {
                s(2, arguments);
                var r = c(e),
                    n = a(t);
                if (isNaN(n)) return new Date(NaN);
                if (!n) return r;
                var o = r.getDate(),
                    i = new Date(r.getTime());
                i.setMonth(r.getMonth() + n + 1, 0);
                var l = i.getDate();
                return o >= l ? i : (r.setFullYear(i.getFullYear(), i.getMonth(), o), r)
            }

            function d(e, t) {
                s(2, arguments);
                var r = a(t);
                return p(e, -r)
            }
            var f = r("ylWw"),
                h = (r("BKV1"), r("nsO7")),
                g = r("/JX1"),
                b = r("ezuS"),
                m = r("BK7R"),
                v = r("QUKP"),
                y = r("ah/i"),
                x = r("EndZ"),
                w = r("c+5G"),
                k = r("hTvQ"),
                C = r("JZAb"),
                S = r("7c8p"),
                A = null,
                _ = function(e, t) {
                    return null === A ? (A = new C.Ay({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: e,
                        marginWebsocketBaseUrl: t
                    }), C.Ay.setStreamBatch(k.unstable_batchedUpdates), A) : A
                },
                B = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    return e.reduce((function(e, n) {
                        return e[n[t]] = r ? n[r] : n, e
                    }), {})
                },
                E = {
                    USDTUSDT: "1.00000000",
                    USDCUSDT: "1.00000000",
                    BUSDUSDT: "1.00000000",
                    BTCBTC: "1.00000000"
                },
                T = [{
                    symbol: "BTCUSDT",
                    rSymbol: "USDTBTC"
                }, {
                    symbol: "BTCUSDC",
                    rSymbol: "USDCBTC"
                }, {
                    symbol: "BTCBUSD",
                    rSymbol: "BUSDBTC"
                }, {
                    symbol: "BTCEUR",
                    rSymbol: "EURBTC"
                }];

            function R(e) {
                return T.forEach((function(t) {
                    var r = t.symbol,
                        n = t.rSymbol;
                    "undefined" !== typeof e[r] && (e[n] = (0, y.k3)(1, e[r]).toFixed(20))
                })), e
            }
            var I = {
                current: !1
            };
            r("p1Ck");
            var z = i.useLayoutEffect,
                D = (0, i.createContext)({
                    marketPrice: "0",
                    tickSize: 8,
                    klineData: [],
                    endPrice: "",
                    symbol: "",
                    setSymbol: function(e) {},
                    isCross: !1,
                    setIsCross: function() {},
                    price: "",
                    setPrice: function(e) {},
                    inversePrice: "",
                    setInversePrice: function(e) {},
                    klinePeriod: "day",
                    setKlinePeriod: function(e) {},
                    limiLoading: !1,
                    setLimitLoading: function(e) {},
                    setCoinPairPrecision: function(e) {},
                    coinPairPrecision: {
                        toCoinPrecision: 8
                    }
                }),
                j = function(e) {
                    var t = e.children,
                        r = (0, i.useState)("/"),
                        c = r[0],
                        l = r[1],
                        p = (0, i.useState)(!1),
                        y = p[0],
                        k = p[1],
                        C = (0, i.useState)(""),
                        A = C[0],
                        T = C[1],
                        j = (0, i.useState)(""),
                        L = j[0],
                        O = j[1],
                        F = (0, i.useState)(8),
                        P = F[0],
                        H = F[1],
                        U = (0, i.useState)([]),
                        M = U[0],
                        N = U[1],
                        W = (0, i.useState)(!1),
                        V = W[0],
                        G = W[1],
                        Y = (0, i.useState)({
                            toCoinPrecision: 8
                        }),
                        q = Y[0],
                        X = Y[1],
                        $ = (null === c || void 0 === c ? void 0 : c.replace("/", y ? "_" : "")) || "",
                        K = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = (0, i.useState)({}),
                                n = r[0],
                                o = r[1],
                                a = (0, S.dt)({
                                    template: w.iw
                                }),
                                s = (0, S.dt)({
                                    template: w.Eg
                                });
                            return "".concat((0, S.dt)({
                                template: w.WP
                            }), "/ws"), (0, i.useEffect)((function() {
                                if (!I.current) {
                                    I.current = !0, (0, x.z6)().then((function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                            t = R((0, m.A)({}, B(e, "symbol", "price"), E));
                                        o(t)
                                    })).catch((function() {}));
                                    var r = (t ? _(a, s).getConvertTickerStream(e.split(",")) : _(a, s).getStreamKline(e.split(",")[0], "3m")).subscribe((function(e) {
                                        var r = R(t ? Object.keys(e).reduce((function(t, r) {
                                            return (0, v.A)((0, m.A)({}, t), (0, b.A)({}, e[r].symbol, e[r].indexPrice || e[r].price))
                                        }), {}) : (0, b.A)({}, e.symbol, e.close));
                                        o((function(e) {
                                            return (0, m.A)({}, e, r)
                                        }))
                                    }));
                                    return function() {
                                        I.current = !1, r()
                                    }
                                }
                            }), [w.WP, a, e]), n
                        }($, y, "kline"),
                        Z = K[$],
                        Q = (0, i.useState)("day"),
                        J = Q[0],
                        ee = Q[1],
                        te = (0, h.get)((0, h.last)(M), "price", ""),
                        re = q.toCoinPrecision;
                    return z((function() {
                        var e = (new Date).getTime(),
                            t = function(e, t) {
                                if (s(2, arguments), !t || "object" !== typeof t) return new Date(NaN);
                                var r = t.years ? a(t.years) : 0,
                                    n = t.months ? a(t.months) : 0,
                                    o = t.weeks ? a(t.weeks) : 0,
                                    i = t.days ? a(t.days) : 0,
                                    c = t.hours ? a(t.hours) : 0,
                                    l = t.minutes ? a(t.minutes) : 0,
                                    p = t.seconds ? a(t.seconds) : 0,
                                    f = u(d(e, n + 12 * r), i + 7 * o),
                                    h = 1e3 * (p + 60 * (l + 60 * c));
                                return new Date(f.getTime() - h)
                            }(e, g.Dj[J]).getTime(),
                            r = g.uJ[J],
                            o = (0, n.A)(c.split("/"), 2),
                            i = o[0],
                            l = o[1];
                        i && l && i.length && l.length && i !== l && function(e) {
                            return function(t) {
                                var r = t.symbol,
                                    n = t.interval,
                                    o = t.startTime,
                                    i = t.endTime,
                                    a = t.base,
                                    s = t.quote;
                                return e ? (0, f.t8)({
                                    base: a,
                                    quote: s,
                                    interval: n
                                }) : (0, f.w8)({
                                    symbol: r,
                                    interval: n,
                                    startTime: o,
                                    endTime: i
                                })
                            }
                        }(y)({
                            symbol: c,
                            interval: r,
                            startTime: t,
                            endTime: e,
                            quote: l,
                            base: i
                        }).then((function(e) {
                            if (Array.isArray(e)) {
                                var t = e.map((function(e) {
                                    var t = e[0];
                                    "string" === typeof t && (t = parseInt(t));
                                    var r = e[4];
                                    return {
                                        time: t,
                                        price: Number(r).toFixed(re)
                                    }
                                }));
                                t.length && H(t[t.length - 1].price.replace(/\d+\.(\d*)/, "$1").length), N(t)
                            }
                        }))
                    }), [J, c, y, V, N, re]), (0, o.jsx)(D.Provider, {
                        value: {
                            marketPrice: Z,
                            tickSize: P,
                            klineData: M,
                            endPrice: te,
                            symbol: c,
                            setSymbol: function(e) {
                                l(e)
                            },
                            isCross: y,
                            setIsCross: k,
                            price: A,
                            setPrice: T,
                            inversePrice: L,
                            setInversePrice: O,
                            klinePeriod: J,
                            setKlinePeriod: ee,
                            limiLoading: V,
                            setLimitLoading: G,
                            setCoinPairPrecision: X,
                            coinPairPrecision: q
                        },
                        children: t
                    })
                },
                L = function() {
                    var e = (0, i.useContext)(D);
                    if (null === e) throw new Error("klines provider not found");
                    return e
                }
        },
        "o/lm": (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => o.F,
                Kq: () => _,
                Qx: () => o.Qx,
                mb: () => l.m,
                kU: () => A,
                kR: () => u.k,
                M3: () => c
            });
            var n = r("jg1C"),
                o = r("pDj5"),
                i = r("DTvD"),
                a = (0, i.createContext)(null),
                s = function(e) {
                    var t = e.children,
                        r = (0, i.useState)(!1),
                        o = r[0],
                        s = r[1];
                    return (0, n.jsx)(a.Provider, {
                        value: {
                            loading: o,
                            setLoading: s
                        },
                        children: t
                    })
                },
                c = function() {
                    var e = (0, i.useContext)(a);
                    if (null === e) throw new Error("Loading provider not found");
                    return e
                },
                l = r("S8zv"),
                u = r("iknu"),
                p = r("sViW"),
                d = r("ezuS"),
                f = r("BK7R"),
                h = r("0GOp"),
                g = r.n(h),
                b = r("jYqv"),
                m = r("ylWw"),
                v = r("c0rf"),
                y = r("THUs"),
                x = r("nsO7"),
                w = r("9dvl"),
                k = (0, i.createContext)(null),
                C = function(e) {
                    var t = e.res,
                        r = e.options,
                        o = e.t,
                        i = void 0 === o ? function(e) {
                            return e
                        } : o,
                        a = t || {},
                        s = a.code,
                        c = a.message;
                    if (!w.DH.includes(+s)) {
                        var l, u = (0, x.findKey)(w.w0, (function(e) {
                                return e.includes(+s)
                            })) || w.R0.warning,
                            p = (l = {}, (0, d.A)(l, w.R0.limit, {
                                title: "time-limit",
                                cancelText: "cancel"
                            }), (0, d.A)(l, w.R0.kyc, {
                                okText: i("kyc-verify-btn"),
                                cancelText: "",
                                title: i("kyc-title")
                            }), (0, d.A)(l, w.R0.login, {
                                okText: "Log-in",
                                cancelText: "cancel"
                            }), l),
                            h = t ? (0, f.A)({
                                okText: "OK",
                                content: c,
                                dialogType: u || w.R0.warning
                            }, p[u] || {}) : r,
                            g = (0, b.aF)({
                                content: (0, n.jsx)(y.m, (0, f.A)({
                                    onClose: function() {
                                        return m()
                                    }
                                }, h)),
                                needCloseIcon: !1,
                                isMaskClose: !1,
                                sx: {
                                    p: 0,
                                    bg: "unset",
                                    borderRadius: "8px"
                                }
                            }),
                            m = g.close,
                            v = g.update;
                        return {
                            close: m,
                            update: v
                        }
                    }
                };

            function S(e) {
                var t = e.children,
                    r = (0, i.useState)(""),
                    a = r[0],
                    s = r[1],
                    c = (0, i.useRef)(null),
                    l = (0, i.useState)(null),
                    u = l[0],
                    d = l[1],
                    f = (0, i.useState)(null),
                    h = f[0],
                    b = f[1],
                    y = (0, i.useState)(!1),
                    x = y[0],
                    w = y[1],
                    S = (0, o.uh)().refreshFromCoinList;
                (0, i.useEffect)((function() {
                    return function() {
                        clearTimeout(c.current)
                    }
                }), []);
                var A = (0, i.useCallback)((function(e) {
                        c.current = setTimeout((function t(r) {
                            (0, m.uC)(e).then((function(e) {
                                "PROCESS" === e.tradeUserStatus && r > 0 ? c.current = setTimeout(t, 1e3, r - 1) : (d(e), w(!0), s(""), setTimeout((function() {
                                    return S({
                                        isRecurring: !1
                                    })
                                }), 2500))
                            })).catch((function() {
                                w(!1), s("")
                            }))
                        }), 1e3, 3)
                    }), [S]),
                    _ = (0, i.useCallback)(function() {
                        var e = (0, p.A)(g().mark((function e(t) {
                            var r, n, o, i, a;
                            return g().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s(v.W.PROCESS), e.next = 3, (0, m.a7)({
                                            quoteId: t
                                        });
                                    case 3:
                                        r = e.sent, n = r.data, o = r.success, i = r.message, a = r.code, n && o ? (d(n), "PROCESS" === n.tradeUserStatus ? (s(v.W.PROCESS), A(n.orderId)) : (w(!0), setTimeout((function() {
                                            return S({
                                                isRecurring: !1
                                            })
                                        }), 2500))) : (s(v.W.FAILURE), w(!1), C({
                                            res: {
                                                code: a,
                                                data: n,
                                                success: o,
                                                message: i
                                            }
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [A, s, S]);
                return (0, n.jsx)(k.Provider, {
                    value: {
                        launchDialog: C,
                        executeQuote: _,
                        convertResult: u,
                        setConvertResult: d,
                        showConvertResult: x,
                        setShowConvertResult: w,
                        convertStatus: a,
                        setConvertStatus: s,
                        previewInfo: h,
                        setPreviewInfo: b
                    },
                    children: t
                })
            }

            function A() {
                var e = (0, i.useContext)(k);
                if (null === e) throw new Error("Preview provider is not provided");
                return e
            }
            r("8r0Q");
            var _ = function(e) {
                var t = e.initialAssets,
                    r = e.isRecurring,
                    i = e.children;
                return (0, n.jsx)(s, {
                    children: (0, n.jsx)(l.Q, {
                        children: (0, n.jsx)(o.F, {
                            initialAssets: t,
                            isRecurring: r,
                            children: (0, n.jsx)(u.J, {
                                children: (0, n.jsx)(S, {
                                    children: i
                                })
                            })
                        })
                    })
                })
            }
        },
        c0rf: (e, t, r) => {
            "use strict";
            var n, o;
            r.d(t, {
                    W: () => n,
                    q: () => o
                }),
                function(e) {
                    e.SUCCESS = "SUCCESS", e.PROCESS = "PROCESS", e.FAILURE = "FAIL", e.INPREVIEW = "PREVIEW", e.ACCEPT_SUCCESS = "ACCEPT_SUCCESS"
                }(n || (n = {})),
                function(e) {
                    e.MARKET = "market", e.LIMIT = "limit", e.RECURRING = "recurring"
                }(o || (o = {}))
        },
        OBVT: (e, t, r) => {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            r.r(t), r.d(t, {
                css: () => f,
                default: () => h,
                get: () => o,
                responsive: () => d
            });
            var o = function(e, t, r, n, o) {
                    for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : o;
                    return e === o ? r : e
                },
                i = [40, 52, 64].map((function(e) {
                    return e + "em"
                })),
                a = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
                    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                },
                s = {
                    bg: "backgroundColor",
                    m: "margin",
                    mt: "marginTop",
                    mr: "marginRight",
                    mb: "marginBottom",
                    ml: "marginLeft",
                    mx: "marginX",
                    my: "marginY",
                    p: "padding",
                    pt: "paddingTop",
                    pr: "paddingRight",
                    pb: "paddingBottom",
                    pl: "paddingLeft",
                    px: "paddingX",
                    py: "paddingY"
                },
                c = {
                    marginX: ["marginLeft", "marginRight"],
                    marginY: ["marginTop", "marginBottom"],
                    paddingX: ["paddingLeft", "paddingRight"],
                    paddingY: ["paddingTop", "paddingBottom"],
                    size: ["width", "height"]
                },
                l = {
                    color: "colors",
                    backgroundColor: "colors",
                    borderColor: "colors",
                    margin: "space",
                    marginTop: "space",
                    marginRight: "space",
                    marginBottom: "space",
                    marginLeft: "space",
                    marginX: "space",
                    marginY: "space",
                    padding: "space",
                    paddingTop: "space",
                    paddingRight: "space",
                    paddingBottom: "space",
                    paddingLeft: "space",
                    paddingX: "space",
                    paddingY: "space",
                    top: "space",
                    right: "space",
                    bottom: "space",
                    left: "space",
                    gridGap: "space",
                    gridColumnGap: "space",
                    gridRowGap: "space",
                    gap: "space",
                    columnGap: "space",
                    rowGap: "space",
                    fontFamily: "fonts",
                    fontSize: "fontSizes",
                    fontWeight: "fontWeights",
                    lineHeight: "lineHeights",
                    letterSpacing: "letterSpacings",
                    border: "borders",
                    borderTop: "borders",
                    borderRight: "borders",
                    borderBottom: "borders",
                    borderLeft: "borders",
                    borderWidth: "borderWidths",
                    borderStyle: "borderStyles",
                    borderRadius: "radii",
                    borderTopRightRadius: "radii",
                    borderTopLeftRadius: "radii",
                    borderBottomRightRadius: "radii",
                    borderBottomLeftRadius: "radii",
                    borderTopWidth: "borderWidths",
                    borderTopColor: "colors",
                    borderTopStyle: "borderStyles",
                    borderBottomWidth: "borderWidths",
                    borderBottomColor: "colors",
                    borderBottomStyle: "borderStyles",
                    borderLeftWidth: "borderWidths",
                    borderLeftColor: "colors",
                    borderLeftStyle: "borderStyles",
                    borderRightWidth: "borderWidths",
                    borderRightColor: "colors",
                    borderRightStyle: "borderStyles",
                    outlineColor: "colors",
                    boxShadow: "shadows",
                    textShadow: "shadows",
                    zIndex: "zIndices",
                    width: "sizes",
                    minWidth: "sizes",
                    maxWidth: "sizes",
                    height: "sizes",
                    minHeight: "sizes",
                    maxHeight: "sizes",
                    flexBasis: "sizes",
                    size: "sizes",
                    fill: "colors",
                    stroke: "colors"
                },
                u = function(e, t) {
                    if ("number" !== typeof t || t >= 0) return o(e, t, t);
                    var r = Math.abs(t),
                        n = o(e, r, r);
                    return "string" === typeof n ? "-" + n : -1 * n
                },
                p = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce((function(e, t) {
                    var r;
                    return n({}, e, ((r = {})[t] = u, r))
                }), {}),
                d = function(e) {
                    return function(t) {
                        var r = {},
                            n = o(t, "breakpoints", i),
                            a = [null].concat(n.map((function(e) {
                                return "@media screen and (min-width: " + e + ")"
                            })));
                        for (var s in e) {
                            var c = "function" === typeof e[s] ? e[s](t) : e[s];
                            if (null != c)
                                if (Array.isArray(c))
                                    for (var l = 0; l < c.slice(0, a.length).length; l++) {
                                        var u = a[l];
                                        u ? (r[u] = r[u] || {}, null != c[l] && (r[u][s] = c[l])) : r[s] = c[l]
                                    } else r[s] = c
                        }
                        return r
                    }
                },
                f = function e(t) {
                    return function(r) {
                        void 0 === r && (r = {});
                        var i = n({}, a, {}, r.theme || r),
                            u = {},
                            f = "function" === typeof t ? t(i) : t,
                            h = d(f)(i);
                        for (var g in h) {
                            var b = h[g],
                                m = "function" === typeof b ? b(i) : b;
                            if ("variant" !== g)
                                if (m && "object" === typeof m) u[g] = e(m)(i);
                                else {
                                    var v = o(s, g, g),
                                        y = o(l, v),
                                        x = o(i, y, o(i, v, {})),
                                        w = o(p, v, o)(x, m, m);
                                    if (c[v])
                                        for (var k = c[v], C = 0; C < k.length; C++) u[k[C]] = w;
                                    else u[v] = w
                                }
                            else u = n({}, u, {}, e(o(i, m))(i))
                        }
                        return u
                    }
                };
            const h = f
        },
        "9Bf3": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                createShouldForwardProp: () => s,
                default: () => c,
                props: () => a
            });
            const n = function(e) {
                var t = Object.create(null);
                return function(r) {
                    return void 0 === t[r] && (t[r] = e(r)), t[r]
                }
            };
            var o = r("DY47"),
                i = r("8nle"),
                a = (0, i.compose)(i.space, i.typography, i.color, i.layout, i.flexbox, i.border, i.background, i.position, i.grid, i.shadow, i.buttonStyle, i.textStyle, i.colorStyle).propNames,
                s = function(e) {
                    var t = new RegExp("^(" + e.join("|") + ")$");
                    return n((function(e) {
                        return (0, o.A)(e) && !t.test(e)
                    }))
                };
            const c = s(a)
        },
        Y4uf: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => u
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("O94r"),
                s = r.n(a),
                c = r("RGyw"),
                l = r("ZCCp");
            const u = function(e) {
                var t = (0, o.useContext)(l.A).prefixCls,
                    r = e.color,
                    a = (e.name, e.viewBox),
                    u = void 0 === a ? "0 0 96 96" : a,
                    p = e.children,
                    d = (0, n.__rest)(e, ["color", "name", "viewBox", "children"]),
                    f = s()("".concat(t, "-svg"), e.className),
                    h = {
                        as: "svg",
                        viewBox: u,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: r
                    };
                return i().createElement(c.A, (0, n.__assign)({}, d, h, {
                    className: f,
                    children: p
                }))
            }
        },
        WAbh: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("Y4uf");
            const s = function(e) {
                return i().createElement(a.A, (0, n.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    opacity: .15,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.082 14.001v5c0 5.304 2.107 10.106 5.858 13.857L41.082 48 25.94 63.142c-3.75 3.751-5.858 8.554-5.858 13.858v5.001h56v2-7c0-3.049-.696-5.931-2-8.544V74H71.79c.192.965.29 1.958.292 2.973V78h2v4h-50v-5c0-4.182 1.641-7.984 4.686-11.03L32.74 62h30.686l3.97 3.97a16.653 16.653 0 012.688 3.487v-6.456l-15-15 15.141-15.143c3.75-3.75 5.858-8.553 5.858-13.858v-4.999h-56z",
                    fill: "#929AA5"
                }), i().createElement("path", {
                    opacity: .5,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.082 8h56v6h-56V8zm0 74h52v6h-52v-6z",
                    fill: "#929AA5"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M72.082 56c-8.836 0-16 7.163-16 16s7.164 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zm-2 6v12h4V62h-4zm0 16v4h4v-4h-4z",
                    fill: "#F0B90B"
                }))
            }
        },
        b4zg: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("Y4uf");
            const s = function(e) {
                return i().createElement(a.A, (0, n.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), i().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.11 88c22.09 0 40-17.908 40-40 0-22.09-17.91-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm-3-36V32h6v20h-6zm0 12v-6h6v6h-6z",
                    fill: "#F0B90B"
                }), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M77.11 48c0 16.017-12.985 29-29 29-16.017 0-29-12.983-29-29 0-16.015 12.983-29 29-29 16.015 0 29 12.985 29 29zm-26-15v19h-6V33h6zm0 31v-6h-6v6h6z",
                    fill: "#F0B90B"
                }))
            }
        },
        Lp65: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => p
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("RGyw"),
                s = r("O94r"),
                c = r.n(s),
                l = r("fvKX"),
                u = i().forwardRef((function(e, t) {
                    var r = (0, l.r)().prefixCls,
                        o = c()("".concat(r, "-flex"), e.className);
                    return i().createElement(a.A, (0, n.__assign)({}, e, {
                        ref: t,
                        className: o
                    }))
                }));
            u.displayName = "Flex";
            const p = u
        },
        D4P9: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("9xbI");
            const s = (0, o.forwardRef)((function(e, t) {
                var r = e.as,
                    o = void 0 === r ? "button" : r,
                    s = (0, n.__rest)(e, ["as"]);
                return i().createElement(a.A, (0, n.__assign)({}, s, {
                    as: o,
                    ref: t
                }))
            }));
            var c = r("qrIQ"),
                l = r("O94r"),
                u = r.n(l),
                p = r("W2aP"),
                d = r("eeEA"),
                f = r("fvKX"),
                h = (0, o.forwardRef)((function(e, t) {
                    var r, a = e.variant,
                        l = void 0 === a ? "primary" : a,
                        h = e.sz,
                        g = void 0 === h ? "middle" : h,
                        b = e.inactive,
                        m = e.loading,
                        v = e.onClick,
                        y = e.subLine,
                        x = e.children,
                        w = e.textVariant,
                        k = void 0 === w ? "text" === l ? "yellow" : "black" : w,
                        C = e.iconVariant,
                        S = void 0 === C ? "line" : C,
                        A = e["aria-label"],
                        _ = (0, n.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"]),
                        B = (0, f.r)(),
                        E = B.prefixCls,
                        T = B.isRTL,
                        R = "".concat(E, "-button"),
                        I = "text" === l || "info" === l,
                        z = "icon" === l,
                        D = u()(R, ((r = {})["".concat(R, "-rtl")] = !!T, r["".concat(R, "__").concat(l)] = !!l, r["".concat(R, "__").concat(l, "__").concat(k)] = I && !!k, r["".concat(R, "__").concat(l, "__").concat(S)] = z && !!S, r["data-size-".concat(g)] = !!g, r["data-size-".concat(g, "-two-line")] = !!g && !!y, r["data-two-line"] = !!y, r.inactive = !!b, r), e.className),
                        j = !b && "function" === typeof v,
                        L = c.lq ? "none" : e.type,
                        O = j ? v : void 0,
                        F = (0, o.useMemo)((function() {
                            return m ? i().createElement(p.A, null) : i().createElement(i().Fragment, null, x, y && i().createElement(d.Ay, null, y))
                        }), [x, o.useMemo, m]),
                        P = {
                            "aria-label": (0, o.useMemo)((function() {
                                return A || ("string" === typeof x ? x : y && "string" === typeof y ? y : "button")
                            }), [A, x, y]),
                            "aria-disabled": b || m ? "true" : void 0,
                            "aria-busy": m ? "true" : void 0,
                            role: "button"
                        };
                    return i().createElement(s, (0, n.__assign)({
                        key: m ? "loading" : "content"
                    }, P, _, {
                        children: F,
                        ref: t,
                        type: L,
                        className: D,
                        onClick: O
                    }))
                }));
            h.displayName = "Button";
            const g = h
        },
        "qtT+": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => x
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("O94r"),
                s = r.n(a);

            function c(e) {
                var t = e.img;
                return new Promise((function(e, r) {
                    (function(e) {
                        var t = e.img;
                        return new Promise((function(e) {
                            return e(t)
                        }))
                    })({
                        img: t
                    }).then((function(t) {
                        if (/^http/i.test(t)) {
                            var n = new Image;
                            n.addEventListener("load", (function() {
                                return e(t)
                            })), n.addEventListener("error", (function() {
                                return r(new Error("img load error"))
                            })), n.src = t
                        } else r("image path is null")
                    }))
                }))
            }
            var l = r("2OVm"),
                u = r("9xbI");
            const p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inViewPort = function() {
                            var e = t.$refs.root,
                                r = t.props,
                                n = r.isBackground;
                            c({
                                img: r.src
                            }).then((function(t) {
                                e.style.backgroundColor = "transparent", n ? (e.style.backgroundSize = "100%", e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundImage = "url('".concat(t, "')")) : e.src = t
                            })).catch((function() {
                                return null
                            }))
                        }, t
                    }
                    return (0, n.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            r = (e.check, e.lazyLoad, e.isBackground),
                            o = (0, n.__rest)(e, ["src", "check", "lazyLoad", "isBackground"]);
                        return i().createElement(u.A, (0, n.__assign)({}, o, {
                            "data-src": t,
                            ref: this.setRefs("root"),
                            as: r ? "div" : "img"
                        }))
                    }, t
                }(l.A),
                d = (0, o.forwardRef)((function(e, t) {
                    var r = e.lazyLoad,
                        o = e.src,
                        a = e.isBackground,
                        s = e.check,
                        c = (0, n.__rest)(e, ["lazyLoad", "src", "isBackground", "check"]);
                    return r || a ? i().createElement(p, (0, n.__assign)({
                        lazyLoad: r,
                        src: o,
                        isBackground: a,
                        check: s
                    }, c)) : i().createElement(u.A, (0, n.__assign)({}, c, {
                        as: "img",
                        ref: t,
                        src: o,
                        "data-src": o
                    }))
                }));
            var f = r("qrIQ"),
                h = r("fvKX"),
                g = r("GmLw").hp,
                b = "/bapi/fe/resource/image",
                m = "https://www.binance.com",
                v = r("eeEA"),
                y = function(e) {
                    var t, r = e.isRound,
                        a = e.isMask,
                        c = e.mode,
                        l = e.responsive,
                        u = e.src,
                        p = (0, n.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                        y = (0, o.useState)(!1),
                        x = y[0],
                        w = y[1],
                        k = (0, h.r)().prefixCls,
                        C = s()("".concat(k, "-lazy-img"), ((t = {
                            "data-mask": !!a,
                            "data-round": !!r,
                            "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                        })["data-mode-".concat(null === c || void 0 === c ? void 0 : c.replace(/\s+/g, "-"))] = !!c, t), e.className),
                        S = (0, o.useCallback)((function() {
                            return w(!0)
                        }), []),
                        A = (0, o.useMemo)((function() {
                            return !(l && (l.mobile || l.tablet || l.desktop)) || x ? {
                                default: u
                            } : Object.keys(l).reduce((function(e, t) {
                                return e[t] = function(e, t) {
                                    var r = g.from(e).toString("base64");
                                    try {
                                        var n = new URL(b, "https://www.binance.com");
                                        return n.searchParams.set("image", r), Object.entries(t).forEach((function(e) {
                                            var t = e[0],
                                                r = e[1];
                                            void 0 !== r && n.searchParams.set(t, String(r))
                                        })), "".concat(n.pathname).concat(n.search)
                                    } catch (o) {
                                        return "".concat(b, "?image=").concat(r, "&w=").concat(t.w, "&h=").concat(t.h)
                                    }
                                }(u, l[t]), e
                            }), {})
                        }), [u, l, x]),
                        _ = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in A) return i().createElement(d, (0, n.__assign)({}, _, p, {
                        className: C,
                        mode: c,
                        src: A.default
                    }));
                    var B = A.mobile,
                        E = A.tablet,
                        T = A.desktop;
                    if (f.lq) {
                        var R = env.API_HOST || m,
                            I = "".concat(R).concat(B || E || T);
                        return i().createElement(d, (0, n.__assign)({}, _, {
                            onError: S
                        }, p, {
                            className: C,
                            mode: c,
                            src: I
                        }))
                    }
                    return i().createElement(v.Ay, {
                        as: "picture"
                    }, i().createElement(v.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: T
                    }), E && i().createElement(v.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: E
                    }), B && i().createElement(v.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: B
                    }), i().createElement(d, (0, n.__assign)({}, _, {
                        onError: S
                    }, p, {
                        className: C,
                        mode: c,
                        src: T || u
                    })))
                };
            y.displayName = "Image";
            const x = y
        },
        W2aP: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("O94r"),
                s = r.n(a),
                c = r("eeEA"),
                l = r("fvKX"),
                u = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                p = function(e) {
                    var t = (0, l.r)().prefixCls,
                        r = s()("".concat(t, "-spinner__nezha"), e.className);
                    return i().createElement(c.Ay, (0, n.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: r
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: u(1)
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: u(2)
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: u(3)
                    }), i().createElement(c.Ay, {
                        className: "nezha-line",
                        style: u(4)
                    }))
                };
            p.displayName = "Spinner";
            const d = p
        },
        eh2c: (e, t, r) => {
            "use strict";
            r.d(t, {
                nF: () => n,
                sg: () => o
            });
            r("5G2I"), r("IXDp"), r("l4Tt"), r("0h6e");

            function n(e, t) {
                var r = this,
                    n = null;
                return function() {
                    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                    null === n && (n = setTimeout((function() {
                        e.apply(r, o), n = null
                    }), t))
                }
            }

            function o(e, t) {
                var r = this,
                    n = null;
                return function() {
                    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                    n && clearTimeout(n), n = setTimeout((function() {
                        e.apply(r, o), n = null
                    }), t)
                }
            }
        },
        "2OVm": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r("OKx2"),
                a = r("eh2c"),
                s = r("UkUV"),
                c = function(e) {
                    return "function" === typeof e
                },
                l = function(e) {
                    return e && "object" === typeof e
                },
                u = function(e, t) {
                    var r = l(e) && !(0, o.isValidElement)(e),
                        n = l(t) && !(0, o.isValidElement)(t);
                    if (r && r === n) {
                        var i = Object.keys(e),
                            a = Object.keys(t);
                        if (i.length === a.length) return Number(i.every((function(r) {
                            return u(e[r], t[r])
                        })))
                    } else {
                        if (c(e) && c(t)) return !0;
                        if ((0, o.isValidElement)(e) && (0, o.isValidElement)(t)) return !0
                    }
                    return e === t
                },
                p = {
                    offset: 0,
                    x: !0
                },
                d = function(e) {
                    function t(r) {
                        var o = e.call(this, r) || this;
                        return o.unmount = !1, o.index = t.count, o.checkUpdate = function() {
                            return o.$refs.root && !o.unmount
                        }, o.checkViewport = function(e) {
                            var r = o.$refs.root,
                                a = o.props,
                                s = a.check,
                                c = a.lazyLoad;
                            if (o.checkUpdate()) {
                                var l = (0, n.__assign)((0, n.__assign)({}, p), s),
                                    u = l.offset,
                                    d = l.x;
                                !c || (0, i.cH)(r, u, d) ? (delete t.instances[o.index], o.inViewPort(e), "componentDidMount" === e && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", r)) : t.instances[o.index] = o
                            }
                        }, o.inViewPort = function(e) {
                            return e
                        }, o.equalUpdate = function(e, t) {
                            u(e, t) || o.checkViewport()
                        }, t.count += 1, o
                    }
                    return (0, n.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            r = (t.check, (0, n.__rest)(t, ["check"])),
                            o = (e.check, (0, n.__rest)(e, ["check"]));
                        this.equalUpdate(o, r)
                    }, t.prototype.componentDidMount = function() {
                        var e = this;
                        window.window === window ? window.requestAnimationFrame((function() {
                            return e.checkViewport("componentDidMount")
                        })) : this.checkViewport("componentDidMount")
                    }, t.prototype.componentWillUnmount = function() {
                        this.unmount = !0, delete t.instances[this.index]
                    }, t.count = 0, t.instances = {}, t.checkViewport = function() {
                        var e = t.instances;
                        Object.keys(e).forEach((function(t) {
                            var r = e[t];
                            r && r.checkViewport()
                        }))
                    }, t
                }(s.A),
                f = (0, a.nF)(d.checkViewport, 200),
                h = !(0, i.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", f, h), document.addEventListener("scroll", f, h), document.addEventListener("transitionend", f, h));
            const g = d
        },
        UkUV: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("wIZF"),
                o = r("DTvD");
            const i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.$refs = {}, t.setRefs = function(e) {
                        return function(r) {
                            t.$refs[e] = r
                        }
                    }, t
                }
                return (0, n.__extends)(t, e), t
            }(o.PureComponent)
        },
        dEMF: (e, t) => {
            "use strict";
            t.byteLength = function(e) {
                var t = c(e),
                    r = t[0],
                    n = t[1];
                return 3 * (r + n) / 4 - n
            }, t.toByteArray = function(e) {
                var t, r, i = c(e),
                    a = i[0],
                    s = i[1],
                    l = new o(function(e, t, r) {
                        return 3 * (t + r) / 4 - r
                    }(0, a, s)),
                    u = 0,
                    p = s > 0 ? a - 4 : a;
                for (r = 0; r < p; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = 255 & t;
                2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, l[u++] = 255 & t);
                1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = 255 & t);
                return l
            }, t.fromByteArray = function(e) {
                for (var t, n = e.length, o = n % 3, i = [], a = 16383, s = 0, c = n - o; s < c; s += a) i.push(l(e, s, s + a > c ? c : s + a));
                1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
                return i.join("")
            };
            for (var r = [], n = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) r[a] = i[a], n[i.charCodeAt(a)] = a;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function l(e, t, n) {
                for (var o, i, a = [], s = t; s < n; s += 3) o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                return a.join("")
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        GmLw: (e, t, r) => {
            "use strict";
            const n = r("dEMF"),
                o = r("1TxV"),
                i = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.hp = c, t.IS = 50;
            const a = 2147483647;

            function s(e) {
                if (e > a) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                const t = new Uint8Array(e);
                return Object.setPrototypeOf(t, c.prototype), t
            }

            function c(e, t, r) {
                if ("number" === typeof e) {
                    if ("string" === typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return p(e)
                }
                return l(e, t, r)
            }

            function l(e, t, r) {
                if ("string" === typeof e) return function(e, t) {
                    "string" === typeof t && "" !== t || (t = "utf8");
                    if (!c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    const r = 0 | g(e, t);
                    let n = s(r);
                    const o = n.write(e, t);
                    o !== r && (n = n.slice(0, o));
                    return n
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if ($(e, Uint8Array)) {
                        const t = new Uint8Array(e);
                        return f(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return d(e)
                }(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if ($(e, ArrayBuffer) || e && $(e.buffer, ArrayBuffer)) return f(e, t, r);
                if ("undefined" !== typeof SharedArrayBuffer && ($(e, SharedArrayBuffer) || e && $(e.buffer, SharedArrayBuffer))) return f(e, t, r);
                if ("number" === typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return c.from(n, t, r);
                const o = function(e) {
                    if (c.isBuffer(e)) {
                        const t = 0 | h(e.length),
                            r = s(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r
                    }
                    if (void 0 !== e.length) return "number" !== typeof e.length || K(e.length) ? s(0) : d(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
                }(e);
                if (o) return o;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function u(e) {
                if ("number" !== typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function p(e) {
                return u(e), s(e < 0 ? 0 : 0 | h(e))
            }

            function d(e) {
                const t = e.length < 0 ? 0 : 0 | h(e.length),
                    r = s(t);
                for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r
            }

            function f(e, t, r) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(n, c.prototype), n
            }

            function h(e) {
                if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
                return 0 | e
            }

            function g(e, t) {
                if (c.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || $(e, ArrayBuffer)) return e.byteLength;
                if ("string" !== typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                const r = e.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let o = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return Y(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return q(e).length;
                    default:
                        if (o) return n ? -1 : Y(e).length;
                        t = ("" + t).toLowerCase(), o = !0
                }
            }

            function b(e, t, r) {
                let n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return R(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return _(this, t, r);
                    case "ascii":
                        return E(this, t, r);
                    case "latin1":
                    case "binary":
                        return T(this, t, r);
                    case "base64":
                        return A(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return I(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function m(e, t, r) {
                const n = e[t];
                e[t] = e[r], e[r] = n
            }

            function v(e, t, r, n, o) {
                if (0 === e.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), K(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (o) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" === typeof t && (t = c.from(t, n)), c.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, o);
                if ("number" === typeof t) return t &= 255, "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function y(e, t, r, n, o) {
                let i, a = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, c /= 2, r /= 2
                }

                function l(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (o) {
                    let n = -1;
                    for (i = r; i < s; i++)
                        if (l(e, i) === l(t, -1 === n ? 0 : i - n)) {
                            if (-1 === n && (n = i), i - n + 1 === c) return n * a
                        } else -1 !== n && (i -= i - n), n = -1
                } else
                    for (r + c > s && (r = s - c), i = r; i >= 0; i--) {
                        let r = !0;
                        for (let n = 0; n < c; n++)
                            if (l(e, i + n) !== l(t, n)) {
                                r = !1;
                                break
                            }
                        if (r) return i
                    }
                return -1
            }

            function x(e, t, r, n) {
                r = Number(r) || 0;
                const o = e.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                const i = t.length;
                let a;
                for (n > i / 2 && (n = i / 2), a = 0; a < n; ++a) {
                    const n = parseInt(t.substr(2 * a, 2), 16);
                    if (K(n)) return a;
                    e[r + a] = n
                }
                return a
            }

            function w(e, t, r, n) {
                return X(Y(t, e.length - r), e, r, n)
            }

            function k(e, t, r, n) {
                return X(function(e) {
                    const t = [];
                    for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function C(e, t, r, n) {
                return X(q(t), e, r, n)
            }

            function S(e, t, r, n) {
                return X(function(e, t) {
                    let r, n, o;
                    const i = [];
                    for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                    return i
                }(t, e.length - r), e, r, n)
            }

            function A(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function _(e, t, r) {
                r = Math.min(e.length, r);
                const n = [];
                let o = t;
                for (; o < r;) {
                    const t = e[o];
                    let i = null,
                        a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (o + a <= r) {
                        let r, n, s, c;
                        switch (a) {
                            case 1:
                                t < 128 && (i = t);
                                break;
                            case 2:
                                r = e[o + 1], 128 === (192 & r) && (c = (31 & t) << 6 | 63 & r, c > 127 && (i = c));
                                break;
                            case 3:
                                r = e[o + 1], n = e[o + 2], 128 === (192 & r) && 128 === (192 & n) && (c = (15 & t) << 12 | (63 & r) << 6 | 63 & n, c > 2047 && (c < 55296 || c > 57343) && (i = c));
                                break;
                            case 4:
                                r = e[o + 1], n = e[o + 2], s = e[o + 3], 128 === (192 & r) && 128 === (192 & n) && 128 === (192 & s) && (c = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & s, c > 65535 && c < 1114112 && (i = c))
                        }
                    }
                    null === i ? (i = 65533, a = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), o += a
                }
                return function(e) {
                    const t = e.length;
                    if (t <= B) return String.fromCharCode.apply(String, e);
                    let r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += B));
                    return r
                }(n)
            }
            c.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), c.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(c.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this)) return this.byteOffset
                }
            }), c.poolSize = 8192, c.from = function(e, t, r) {
                return l(e, t, r)
            }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e, t, r) {
                return function(e, t, r) {
                    return u(e), e <= 0 ? s(e) : void 0 !== t ? "string" === typeof r ? s(e).fill(t, r) : s(e).fill(t) : s(e)
                }(e, t, r)
            }, c.allocUnsafe = function(e) {
                return p(e)
            }, c.allocUnsafeSlow = function(e) {
                return p(e)
            }, c.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== c.prototype
            }, c.compare = function(e, t) {
                if ($(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), $(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let r = e.length,
                    n = t.length;
                for (let o = 0, i = Math.min(r, n); o < i; ++o)
                    if (e[o] !== t[o]) {
                        r = e[o], n = t[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                let r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                const n = c.allocUnsafe(t);
                let o = 0;
                for (r = 0; r < e.length; ++r) {
                    let t = e[r];
                    if ($(t, Uint8Array)) o + t.length > n.length ? (c.isBuffer(t) || (t = c.from(t)), t.copy(n, o)) : Uint8Array.prototype.set.call(n, t, o);
                    else {
                        if (!c.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        t.copy(n, o)
                    }
                    o += t.length
                }
                return n
            }, c.byteLength = g, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                const e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < e; t += 2) m(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                const e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                const e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                const e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : b.apply(this, arguments)
            }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                let e = "";
                const r = t.IS;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(e, t, r, n, o) {
                if ($(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && t >= r) return 0;
                if (n >= o) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                let i = (o >>>= 0) - (n >>>= 0),
                    a = (r >>>= 0) - (t >>>= 0);
                const s = Math.min(i, a),
                    l = this.slice(n, o),
                    u = e.slice(t, r);
                for (let c = 0; c < s; ++c)
                    if (l[c] !== u[c]) {
                        i = l[c], a = u[c];
                        break
                    }
                return i < a ? -1 : a < i ? 1 : 0
            }, c.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, c.prototype.indexOf = function(e, t, r) {
                return v(this, e, t, r, !0)
            }, c.prototype.lastIndexOf = function(e, t, r) {
                return v(this, e, t, r, !1)
            }, c.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" === typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const o = this.length - t;
                if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let i = !1;
                for (;;) switch (n) {
                    case "hex":
                        return x(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return w(this, e, t, r);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return k(this, e, t, r);
                    case "base64":
                        return C(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, e, t, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const B = 4096;

            function E(e, t, r) {
                let n = "";
                r = Math.min(e.length, r);
                for (let o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                return n
            }

            function T(e, t, r) {
                let n = "";
                r = Math.min(e.length, r);
                for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n
            }

            function R(e, t, r) {
                const n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                let o = "";
                for (let i = t; i < r; ++i) o += Z[e[i]];
                return o
            }

            function I(e, t, r) {
                const n = e.slice(t, r);
                let o = "";
                for (let i = 0; i < n.length - 1; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function z(e, t, r) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function D(e, t, r, n, o, i) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function j(e, t, r, n, o) {
                N(t, n, o, e, r, 7);
                let i = Number(t & BigInt(4294967295));
                e[r++] = i, i >>= 8, e[r++] = i, i >>= 8, e[r++] = i, i >>= 8, e[r++] = i;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, r
            }

            function L(e, t, r, n, o) {
                N(t, n, o, e, r, 7);
                let i = Number(t & BigInt(4294967295));
                e[r + 7] = i, i >>= 8, e[r + 6] = i, i >>= 8, e[r + 5] = i, i >>= 8, e[r + 4] = i;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[r + 3] = a, a >>= 8, e[r + 2] = a, a >>= 8, e[r + 1] = a, a >>= 8, e[r] = a, r + 8
            }

            function O(e, t, r, n, o, i) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function F(e, t, r, n, i) {
                return t = +t, r >>>= 0, i || O(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
            }

            function P(e, t, r, n, i) {
                return t = +t, r >>>= 0, i || O(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
            }
            c.prototype.slice = function(e, t) {
                const r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                const n = this.subarray(e, t);
                return Object.setPrototypeOf(n, c.prototype), n
            }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                let n = this[e],
                    o = 1,
                    i = 0;
                for (; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n
            }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                let n = this[e + --t],
                    o = 1;
                for (; t > 0 && (o *= 256);) n += this[e + --t] * o;
                return n
            }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || z(e, 1, this.length), this[e]
            }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || z(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || z(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || z(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || z(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readBigUInt64LE = Q((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    r = this[e + 7];
                void 0 !== t && void 0 !== r || V(e, this.length - 8);
                const n = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                    o = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
                return BigInt(n) + (BigInt(o) << BigInt(32))
            })), c.prototype.readBigUInt64BE = Q((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    r = this[e + 7];
                void 0 !== t && void 0 !== r || V(e, this.length - 8);
                const n = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    o = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(o)
            })), c.prototype.readIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                let n = this[e],
                    o = 1,
                    i = 0;
                for (; ++i < t && (o *= 256);) n += this[e + i] * o;
                return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n
            }, c.prototype.readIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                let n = t,
                    o = 1,
                    i = this[e + --n];
                for (; n > 0 && (o *= 256);) i += this[e + --n] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i
            }, c.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || z(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || z(e, 2, this.length);
                const r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || z(e, 2, this.length);
                const r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, c.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || z(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || z(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readBigInt64LE = Q((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    r = this[e + 7];
                void 0 !== t && void 0 !== r || V(e, this.length - 8);
                const n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
            })), c.prototype.readBigInt64BE = Q((function(e) {
                W(e >>>= 0, "offset");
                const t = this[e],
                    r = this[e + 7];
                void 0 !== t && void 0 !== r || V(e, this.length - 8);
                const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r)
            })), c.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || z(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || z(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || z(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || z(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                    D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
                }
                let o = 1,
                    i = 0;
                for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, r >>>= 0, !n) {
                    D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
                }
                let o = r - 1,
                    i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeBigUInt64LE = Q((function(e, t = 0) {
                return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            })), c.prototype.writeBigUInt64BE = Q((function(e, t = 0) {
                return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            })), c.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    D(this, e, t, r, n - 1, -n)
                }
                let o = 0,
                    i = 1,
                    a = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / i >> 0) - a & 255;
                return t + r
            }, c.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    D(this, e, t, r, n - 1, -n)
                }
                let o = r - 1,
                    i = 1,
                    a = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / i >> 0) - a & 255;
                return t + r
            }, c.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, c.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeBigInt64LE = Q((function(e, t = 0) {
                return j(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), c.prototype.writeBigInt64BE = Q((function(e, t = 0) {
                return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), c.prototype.writeFloatLE = function(e, t, r) {
                return F(this, e, t, !0, r)
            }, c.prototype.writeFloatBE = function(e, t, r) {
                return F(this, e, t, !1, r)
            }, c.prototype.writeDoubleLE = function(e, t, r) {
                return P(this, e, t, !0, r)
            }, c.prototype.writeDoubleBE = function(e, t, r) {
                return P(this, e, t, !1, r)
            }, c.prototype.copy = function(e, t, r, n) {
                if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                const o = n - r;
                return this === e && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), o
            }, c.prototype.fill = function(e, t, r, n) {
                if ("string" === typeof e) {
                    if ("string" === typeof t ? (n = t, t = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !c.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                        const t = e.charCodeAt(0);
                        ("utf8" === n && t < 128 || "latin1" === n) && (e = t)
                    }
                } else "number" === typeof e ? e &= 255 : "boolean" === typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                let o;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else {
                    const i = c.isBuffer(e) ? e : c.from(e, n),
                        a = i.length;
                    if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (o = 0; o < r - t; ++o) this[o + t] = i[o % a]
                }
                return this
            };
            const H = {};

            function U(e, t, r) {
                H[e] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                    }
                    get code() {
                        return e
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`
                    }
                }
            }

            function M(e) {
                let t = "",
                    r = e.length;
                const n = "-" === e[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
                return `${e.slice(0,r)}${t}`
            }

            function N(e, t, r, n, o, i) {
                if (e > r || e < t) {
                    const n = "bigint" === typeof t ? "n" : "";
                    let o;
                    throw o = i > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(i+1)}${n}` : `>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}` : `>= ${t}${n} and <= ${r}${n}`, new H.ERR_OUT_OF_RANGE("value", o, e)
                }! function(e, t, r) {
                    W(t, "offset"), void 0 !== e[t] && void 0 !== e[t + r] || V(t, e.length - (r + 1))
                }(n, o, i)
            }

            function W(e, t) {
                if ("number" !== typeof e) throw new H.ERR_INVALID_ARG_TYPE(t, "number", e)
            }

            function V(e, t, r) {
                if (Math.floor(e) !== e) throw W(e, r), new H.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
                if (t < 0) throw new H.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new H.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${t}`, e)
            }
            U("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), U("ERR_INVALID_ARG_TYPE", (function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }), TypeError), U("ERR_OUT_OF_RANGE", (function(e, t, r) {
                let n = `The value of "${e}" is out of range.`,
                    o = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = M(String(r)) : "bigint" === typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = M(o)), o += "n"), n += ` It must be ${t}. Received ${o}`, n
            }), RangeError);
            const G = /[^+/0-9A-Za-z-_]/g;

            function Y(e, t) {
                let r;
                t = t || 1 / 0;
                const n = e.length;
                let o = null;
                const i = [];
                for (let a = 0; a < n; ++a) {
                    if (r = e.charCodeAt(a), r > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === n) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function q(e) {
                return n.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(G, "")).length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }(e))
            }

            function X(e, t, r, n) {
                let o;
                for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
                return o
            }

            function $(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function K(e) {
                return e !== e
            }
            const Z = function() {
                const e = "0123456789abcdef",
                    t = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o]
                }
                return t
            }();

            function Q(e) {
                return "undefined" === typeof BigInt ? J : e
            }

            function J() {
                throw new Error("BigInt not supported")
            }
        },
        VXBK: (e, t, r) => {
            "use strict";
            r.d(t, {
                NP: () => p,
                DP: () => d
            });
            var n = r("OHGK"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("g80r");
            const s = function(e) {
                var t = new WeakMap;
                return function(r) {
                    if (t.has(r)) return t.get(r);
                    var n = e(r);
                    return t.set(r, n), n
                }
            };
            r("oXkQ");

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var l = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(r, !0).forEach((function(t) {
                                (0, n.A)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(r).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                u = s((function(e) {
                    return s((function(t) {
                        return l(e, t)
                    }))
                })),
                p = function(e) {
                    return (0, o.createElement)(a.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = u(t)(e.theme)), (0, o.createElement)(a.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };

            function d() {
                return i().useContext(a.Dx)
            }
        },
        "1TxV": (e, t) => {
            t.read = function(e, t, r, n, o) {
                var i, a, s = 8 * o - n - 1,
                    c = (1 << s) - 1,
                    l = c >> 1,
                    u = -7,
                    p = r ? o - 1 : 0,
                    d = r ? -1 : 1,
                    f = e[t + p];
                for (p += d, i = f & (1 << -u) - 1, f >>= -u, u += s; u > 0; i = 256 * i + e[t + p], p += d, u -= 8);
                for (a = i & (1 << -u) - 1, i >>= -u, u += n; u > 0; a = 256 * a + e[t + p], p += d, u -= 8);
                if (0 === i) i = 1 - l;
                else {
                    if (i === c) return a ? NaN : 1 / 0 * (f ? -1 : 1);
                    a += Math.pow(2, n), i -= l
                }
                return (f ? -1 : 1) * a * Math.pow(2, i - n)
            }, t.write = function(e, t, r, n, o, i) {
                var a, s, c, l = 8 * i - o - 1,
                    u = (1 << l) - 1,
                    p = u >> 1,
                    d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    f = n ? 0 : i - 1,
                    h = n ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + p >= 1 ? d / c : d * Math.pow(2, 1 - p)) * c >= 2 && (a++, c /= 2), a + p >= u ? (s = 0, a = u) : a + p >= 1 ? (s = (t * c - 1) * Math.pow(2, o), a += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, o), a = 0)); o >= 8; e[r + f] = 255 & s, f += h, s /= 256, o -= 8);
                for (a = a << o | s, l += o; l > 0; e[r + f] = 255 & a, f += h, a /= 256, l -= 8);
                e[r + f - h] |= 128 * g
            }
        },
        fYnN: (e, t, r) => {
            var n, o;
            ! function(i) {
                if (void 0 === (o = "function" === typeof(n = i) ? n.call(t, r, t, e) : n) || (e.exports = o), !0, e.exports = i(), !!0) {
                    var a = window.Cookies,
                        s = window.Cookies = i();
                    s.noConflict = function() {
                        return window.Cookies = a, s
                    }
                }
            }((function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) t[n] = r[n]
                    }
                    return t
                }

                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function r(n) {
                    function o() {}

                    function i(t, r, i) {
                        if ("undefined" !== typeof document) {
                            "number" === typeof(i = e({
                                path: "/"
                            }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                var a = JSON.stringify(r);
                                /^[\{\[]/.test(a) && (r = a)
                            } catch (l) {}
                            r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var c in i) i[c] && (s += "; " + c, !0 !== i[c] && (s += "=" + i[c].split(";")[0]));
                            return document.cookie = t + "=" + r + s
                        }
                    }

                    function a(e, r) {
                        if ("undefined" !== typeof document) {
                            for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                                var s = i[a].split("="),
                                    c = s.slice(1).join("=");
                                r || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                try {
                                    var l = t(s[0]);
                                    if (c = (n.read || n)(c, l) || t(c), r) try {
                                        c = JSON.parse(c)
                                    } catch (u) {}
                                    if (o[l] = c, e === l) break
                                } catch (u) {}
                            }
                            return e ? o[e] : o
                        }
                    }
                    return o.set = i, o.get = function(e) {
                        return a(e, !1)
                    }, o.getJSON = function(e) {
                        return a(e, !0)
                    }, o.remove = function(t, r) {
                        i(t, "", e(r, {
                            expires: -1
                        }))
                    }, o.defaults = {}, o.withConverter = r, o
                }((function() {}))
            }))
        },
        IXDp: e => {
            var t = 1 / 0,
                r = 9007199254740991,
                n = 17976931348623157e292,
                o = NaN,
                i = "[object Function]",
                a = "[object GeneratorFunction]",
                s = "[object Symbol]",
                c = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                d = /^(?:0|[1-9]\d*)$/,
                f = parseInt,
                h = Object.prototype.toString,
                g = Math.ceil,
                b = Math.max;

            function m(e, t, r) {
                var n = -1,
                    o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), o = t > r ? 0 : r - t >>> 0, t >>>= 0;
                for (var i = Array(o); ++n < o;) i[n] = e[n + t];
                return i
            }

            function v(e, t, n) {
                if (!y(n)) return !1;
                var o = typeof t;
                return !!("number" == o ? function(e) {
                    return null != e && function(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
                    }(e.length) && ! function(e) {
                        var t = y(e) ? h.call(e) : "";
                        return t == i || t == a
                    }(e)
                }(n) && function(e, t) {
                    return !!(t = null == t ? r : t) && ("number" == typeof e || d.test(e)) && e > -1 && e % 1 == 0 && e < t
                }(t, n.length) : "string" == o && t in n) && function(e, t) {
                    return e === t || e !== e && t !== t
                }(n[t], e)
            }

            function y(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            e.exports = function(e, r, i) {
                r = (i ? v(e, r, i) : void 0 === r) ? 1 : b(function(e) {
                    var r = function(e) {
                            if (!e) return 0 === e ? e : 0;
                            if ((e = function(e) {
                                    if ("number" == typeof e) return e;
                                    if (function(e) {
                                            return "symbol" == typeof e || function(e) {
                                                return !!e && "object" == typeof e
                                            }(e) && h.call(e) == s
                                        }(e)) return o;
                                    if (y(e)) {
                                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                        e = y(t) ? t + "" : t
                                    }
                                    if ("string" != typeof e) return 0 === e ? e : +e;
                                    e = e.replace(c, "");
                                    var r = u.test(e);
                                    return r || p.test(e) ? f(e.slice(2), r ? 2 : 8) : l.test(e) ? o : +e
                                }(e)) === t || e === -1 / 0) {
                                return (e < 0 ? -1 : 1) * n
                            }
                            return e === e ? e : 0
                        }(e),
                        i = r % 1;
                    return r === r ? i ? r - i : r : 0
                }(r), 0);
                var a = e ? e.length : 0;
                if (!a || r < 1) return [];
                for (var d = 0, x = 0, w = Array(g(a / r)); d < a;) w[x++] = m(e, d, d += r);
                return w
            }
        },
        "5G2I": (e, t, r) => {
            e = r.nmd(e);
            var n = "Expected a function",
                o = "__lodash_hash_undefined__",
                i = 9007199254740991,
                a = "[object Arguments]",
                s = "[object Array]",
                c = "[object Boolean]",
                l = "[object Date]",
                u = "[object Error]",
                p = "[object Function]",
                d = "[object Map]",
                f = "[object Number]",
                h = "[object Object]",
                g = "[object Promise]",
                b = "[object RegExp]",
                m = "[object Set]",
                v = "[object String]",
                y = "[object Symbol]",
                x = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                k = "[object DataView]",
                C = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                S = /^\w*$/,
                A = /^\./,
                _ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                B = /\\(\\)?/g,
                E = /^\[object .+?Constructor\]$/,
                T = /^(?:0|[1-9]\d*)$/,
                R = {};
            R["[object Float32Array]"] = R["[object Float64Array]"] = R["[object Int8Array]"] = R["[object Int16Array]"] = R["[object Int32Array]"] = R["[object Uint8Array]"] = R["[object Uint8ClampedArray]"] = R["[object Uint16Array]"] = R["[object Uint32Array]"] = !0, R[a] = R[s] = R[w] = R[c] = R[k] = R[l] = R[u] = R[p] = R[d] = R[f] = R[h] = R[b] = R[m] = R[v] = R[x] = !1;
            var I = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                z = "object" == typeof self && self && self.Object === Object && self,
                D = I || z || Function("return this")(),
                j = t && !t.nodeType && t,
                L = j && e && !e.nodeType && e,
                O = L && L.exports === j && I.process,
                F = function() {
                    try {
                        return O && O.binding("util")
                    } catch (e) {}
                }(),
                P = F && F.isTypedArray;

            function H(e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                }
                return e.apply(t, r)
            }

            function U(e, t) {
                for (var r = -1, n = e ? e.length : 0; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }

            function M(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (r) {}
                return t
            }

            function N(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            }

            function W(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
            var V, G, Y = Array.prototype,
                q = Function.prototype,
                X = Object.prototype,
                $ = D["__core-js_shared__"],
                K = function() {
                    var e = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                Z = q.toString,
                Q = X.hasOwnProperty,
                J = X.toString,
                ee = RegExp("^" + Z.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                te = D.Symbol,
                re = D.Uint8Array,
                ne = X.propertyIsEnumerable,
                oe = Y.splice,
                ie = (V = Object.keys, G = Object, function(e) {
                    return V(G(e))
                }),
                ae = Math.max,
                se = Fe(D, "DataView"),
                ce = Fe(D, "Map"),
                le = Fe(D, "Promise"),
                ue = Fe(D, "Set"),
                pe = Fe(D, "WeakMap"),
                de = Fe(Object, "create"),
                fe = Ge(se),
                he = Ge(ce),
                ge = Ge(le),
                be = Ge(ue),
                me = Ge(pe),
                ve = te ? te.prototype : void 0,
                ye = ve ? ve.valueOf : void 0,
                xe = ve ? ve.toString : void 0;

            function we(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function ke(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Ce(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function Se(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.__data__ = new Ce; ++t < r;) this.add(e[t])
            }

            function Ae(e) {
                this.__data__ = new ke(e)
            }

            function _e(e, t) {
                var r = $e(e) || Xe(e) ? function(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }(e.length, String) : [],
                    n = r.length,
                    o = !!n;
                for (var i in e) !t && !Q.call(e, i) || o && ("length" == i || He(i, n)) || r.push(i);
                return r
            }

            function Be(e, t) {
                for (var r = e.length; r--;)
                    if (qe(e[r][0], t)) return r;
                return -1
            }

            function Ee(e, t) {
                for (var r = 0, n = (t = Ue(t, e) ? [t] : je(t)).length; null != e && r < n;) e = e[Ve(t[r++])];
                return r && r == n ? e : void 0
            }

            function Te(e, t) {
                return null != e && t in Object(e)
            }

            function Re(e, t, r, n, o) {
                return e === t || (null == e || null == t || !Je(e) && !et(t) ? e !== e && t !== t : function(e, t, r, n, o, i) {
                    var p = $e(e),
                        g = $e(t),
                        x = s,
                        C = s;
                    p || (x = (x = Pe(e)) == a ? h : x);
                    g || (C = (C = Pe(t)) == a ? h : C);
                    var S = x == h && !M(e),
                        A = C == h && !M(t),
                        _ = x == C;
                    if (_ && !S) return i || (i = new Ae), p || rt(e) ? Le(e, t, r, n, o, i) : function(e, t, r, n, o, i, a) {
                        switch (r) {
                            case k:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case w:
                                return !(e.byteLength != t.byteLength || !n(new re(e), new re(t)));
                            case c:
                            case l:
                            case f:
                                return qe(+e, +t);
                            case u:
                                return e.name == t.name && e.message == t.message;
                            case b:
                            case v:
                                return e == t + "";
                            case d:
                                var s = N;
                            case m:
                                var p = 2 & i;
                                if (s || (s = W), e.size != t.size && !p) return !1;
                                var h = a.get(e);
                                if (h) return h == t;
                                i |= 1, a.set(e, t);
                                var g = Le(s(e), s(t), n, o, i, a);
                                return a.delete(e), g;
                            case y:
                                if (ye) return ye.call(e) == ye.call(t)
                        }
                        return !1
                    }(e, t, x, r, n, o, i);
                    if (!(2 & o)) {
                        var B = S && Q.call(e, "__wrapped__"),
                            E = A && Q.call(t, "__wrapped__");
                        if (B || E) {
                            var T = B ? e.value() : e,
                                R = E ? t.value() : t;
                            return i || (i = new Ae), r(T, R, n, o, i)
                        }
                    }
                    if (!_) return !1;
                    return i || (i = new Ae),
                        function(e, t, r, n, o, i) {
                            var a = 2 & o,
                                s = nt(e),
                                c = s.length,
                                l = nt(t).length;
                            if (c != l && !a) return !1;
                            var u = c;
                            for (; u--;) {
                                var p = s[u];
                                if (!(a ? p in t : Q.call(t, p))) return !1
                            }
                            var d = i.get(e);
                            if (d && i.get(t)) return d == t;
                            var f = !0;
                            i.set(e, t), i.set(t, e);
                            var h = a;
                            for (; ++u < c;) {
                                var g = e[p = s[u]],
                                    b = t[p];
                                if (n) var m = a ? n(b, g, p, t, e, i) : n(g, b, p, e, t, i);
                                if (!(void 0 === m ? g === b || r(g, b, n, o, i) : m)) {
                                    f = !1;
                                    break
                                }
                                h || (h = "constructor" == p)
                            }
                            if (f && !h) {
                                var v = e.constructor,
                                    y = t.constructor;
                                v == y || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y || (f = !1)
                            }
                            return i.delete(e), i.delete(t), f
                        }(e, t, r, n, o, i)
                }(e, t, Re, r, n, o))
            }

            function Ie(e) {
                return !(!Je(e) || function(e) {
                    return !!K && K in e
                }(e)) && (Ze(e) || M(e) ? ee : E).test(Ge(e))
            }

            function ze(e) {
                return "function" == typeof e ? e : null == e ? ot : "object" == typeof e ? $e(e) ? function(e, t) {
                    if (Ue(e) && Me(t)) return Ne(Ve(e), t);
                    return function(r) {
                        var n = function(e, t, r) {
                            var n = null == e ? void 0 : Ee(e, t);
                            return void 0 === n ? r : n
                        }(r, e);
                        return void 0 === n && n === t ? function(e, t) {
                            return null != e && function(e, t, r) {
                                t = Ue(t, e) ? [t] : je(t);
                                var n, o = -1,
                                    i = t.length;
                                for (; ++o < i;) {
                                    var a = Ve(t[o]);
                                    if (!(n = null != e && r(e, a))) break;
                                    e = e[a]
                                }
                                if (n) return n;
                                return !!(i = e ? e.length : 0) && Qe(i) && He(a, i) && ($e(e) || Xe(e))
                            }(e, t, Te)
                        }(r, e) : Re(t, n, void 0, 3)
                    }
                }(e[0], e[1]) : function(e) {
                    var t = function(e) {
                        var t = nt(e),
                            r = t.length;
                        for (; r--;) {
                            var n = t[r],
                                o = e[n];
                            t[r] = [n, o, Me(o)]
                        }
                        return t
                    }(e);
                    if (1 == t.length && t[0][2]) return Ne(t[0][0], t[0][1]);
                    return function(r) {
                        return r === e || function(e, t, r, n) {
                            var o = r.length,
                                i = o,
                                a = !n;
                            if (null == e) return !i;
                            for (e = Object(e); o--;) {
                                var s = r[o];
                                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                            }
                            for (; ++o < i;) {
                                var c = (s = r[o])[0],
                                    l = e[c],
                                    u = s[1];
                                if (a && s[2]) {
                                    if (void 0 === l && !(c in e)) return !1
                                } else {
                                    var p = new Ae;
                                    if (n) var d = n(l, u, c, e, t, p);
                                    if (!(void 0 === d ? Re(u, l, n, 3, p) : d)) return !1
                                }
                            }
                            return !0
                        }(r, e, t)
                    }
                }(e) : function(e) {
                    return Ue(e) ? (t = Ve(e), function(e) {
                        return null == e ? void 0 : e[t]
                    }) : function(e) {
                        return function(t) {
                            return Ee(t, e)
                        }
                    }(e);
                    var t
                }(e)
            }

            function De(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            r = "function" == typeof t && t.prototype || X;
                        return e === r
                    }(e)) return ie(e);
                var t = [];
                for (var r in Object(e)) Q.call(e, r) && "constructor" != r && t.push(r);
                return t
            }

            function je(e) {
                return $e(e) ? e : We(e)
            }

            function Le(e, t, r, n, o, i) {
                var a = 2 & o,
                    s = e.length,
                    c = t.length;
                if (s != c && !(a && c > s)) return !1;
                var l = i.get(e);
                if (l && i.get(t)) return l == t;
                var u = -1,
                    p = !0,
                    d = 1 & o ? new Se : void 0;
                for (i.set(e, t), i.set(t, e); ++u < s;) {
                    var f = e[u],
                        h = t[u];
                    if (n) var g = a ? n(h, f, u, t, e, i) : n(f, h, u, e, t, i);
                    if (void 0 !== g) {
                        if (g) continue;
                        p = !1;
                        break
                    }
                    if (d) {
                        if (!U(t, (function(e, t) {
                                if (!d.has(t) && (f === e || r(f, e, n, o, i))) return d.add(t)
                            }))) {
                            p = !1;
                            break
                        }
                    } else if (f !== h && !r(f, h, n, o, i)) {
                        p = !1;
                        break
                    }
                }
                return i.delete(e), i.delete(t), p
            }

            function Oe(e, t) {
                var r = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function Fe(e, t) {
                var r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return Ie(r) ? r : void 0
            }
            we.prototype.clear = function() {
                this.__data__ = de ? de(null) : {}
            }, we.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, we.prototype.get = function(e) {
                var t = this.__data__;
                if (de) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return Q.call(t, e) ? t[e] : void 0
            }, we.prototype.has = function(e) {
                var t = this.__data__;
                return de ? void 0 !== t[e] : Q.call(t, e)
            }, we.prototype.set = function(e, t) {
                return this.__data__[e] = de && void 0 === t ? o : t, this
            }, ke.prototype.clear = function() {
                this.__data__ = []
            }, ke.prototype.delete = function(e) {
                var t = this.__data__,
                    r = Be(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : oe.call(t, r, 1), !0)
            }, ke.prototype.get = function(e) {
                var t = this.__data__,
                    r = Be(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, ke.prototype.has = function(e) {
                return Be(this.__data__, e) > -1
            }, ke.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = Be(r, e);
                return n < 0 ? r.push([e, t]) : r[n][1] = t, this
            }, Ce.prototype.clear = function() {
                this.__data__ = {
                    hash: new we,
                    map: new(ce || ke),
                    string: new we
                }
            }, Ce.prototype.delete = function(e) {
                return Oe(this, e).delete(e)
            }, Ce.prototype.get = function(e) {
                return Oe(this, e).get(e)
            }, Ce.prototype.has = function(e) {
                return Oe(this, e).has(e)
            }, Ce.prototype.set = function(e, t) {
                return Oe(this, e).set(e, t), this
            }, Se.prototype.add = Se.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, Se.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ae.prototype.clear = function() {
                this.__data__ = new ke
            }, Ae.prototype.delete = function(e) {
                return this.__data__.delete(e)
            }, Ae.prototype.get = function(e) {
                return this.__data__.get(e)
            }, Ae.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ae.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof ke) {
                    var n = r.__data__;
                    if (!ce || n.length < 199) return n.push([e, t]), this;
                    r = this.__data__ = new Ce(n)
                }
                return r.set(e, t), this
            };
            var Pe = function(e) {
                return J.call(e)
            };

            function He(e, t) {
                return !!(t = null == t ? i : t) && ("number" == typeof e || T.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Ue(e, t) {
                if ($e(e)) return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !tt(e)) || (S.test(e) || !C.test(e) || null != t && e in Object(t))
            }

            function Me(e) {
                return e === e && !Je(e)
            }

            function Ne(e, t) {
                return function(r) {
                    return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
                }
            }(se && Pe(new se(new ArrayBuffer(1))) != k || ce && Pe(new ce) != d || le && Pe(le.resolve()) != g || ue && Pe(new ue) != m || pe && Pe(new pe) != x) && (Pe = function(e) {
                var t = J.call(e),
                    r = t == h ? e.constructor : void 0,
                    n = r ? Ge(r) : void 0;
                if (n) switch (n) {
                    case fe:
                        return k;
                    case he:
                        return d;
                    case ge:
                        return g;
                    case be:
                        return m;
                    case me:
                        return x
                }
                return t
            });
            var We = Ye((function(e) {
                var t;
                e = null == (t = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if (tt(e)) return xe ? xe.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var r = [];
                return A.test(e) && r.push(""), e.replace(_, (function(e, t, n, o) {
                    r.push(n ? o.replace(B, "$1") : t || e)
                })), r
            }));

            function Ve(e) {
                if ("string" == typeof e || tt(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function Ge(e) {
                if (null != e) {
                    try {
                        return Z.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }

            function Ye(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(n);
                var r = function() {
                    var n = arguments,
                        o = t ? t.apply(this, n) : n[0],
                        i = r.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, n);
                    return r.cache = i.set(o, a), a
                };
                return r.cache = new(Ye.Cache || Ce), r
            }

            function qe(e, t) {
                return e === t || e !== e && t !== t
            }

            function Xe(e) {
                return function(e) {
                    return et(e) && Ke(e)
                }(e) && Q.call(e, "callee") && (!ne.call(e, "callee") || J.call(e) == a)
            }
            Ye.Cache = Ce;
            var $e = Array.isArray;

            function Ke(e) {
                return null != e && Qe(e.length) && !Ze(e)
            }

            function Ze(e) {
                var t = Je(e) ? J.call(e) : "";
                return t == p || "[object GeneratorFunction]" == t
            }

            function Qe(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i
            }

            function Je(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function et(e) {
                return !!e && "object" == typeof e
            }

            function tt(e) {
                return "symbol" == typeof e || et(e) && J.call(e) == y
            }
            var rt = P ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(P) : function(e) {
                return et(e) && Qe(e.length) && !!R[J.call(e)]
            };

            function nt(e) {
                return Ke(e) ? _e(e) : De(e)
            }

            function ot(e) {
                return e
            }
            e.exports = function(e) {
                var t = e ? e.length : 0,
                    r = ze;
                return e = t ? function(e, t) {
                        for (var r = -1, n = e ? e.length : 0, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
                        return o
                    }(e, (function(e) {
                        if ("function" != typeof e[1]) throw new TypeError(n);
                        return [r(e[0]), e[1]]
                    })) : [],
                    function(e, t) {
                        return t = ae(void 0 === t ? e.length - 1 : t, 0),
                            function() {
                                for (var r = arguments, n = -1, o = ae(r.length - t, 0), i = Array(o); ++n < o;) i[n] = r[t + n];
                                n = -1;
                                for (var a = Array(t + 1); ++n < t;) a[n] = r[n];
                                return a[t] = i, H(e, this, a)
                            }
                    }((function(r) {
                        for (var n = -1; ++n < t;) {
                            var o = e[n];
                            if (H(o[0], this, r)) return H(o[1], this, r)
                        }
                    }))
            }
        },
        l4Tt: (e, t, r) => {
            var n = 9007199254740991,
                o = "[object Arguments]",
                i = "[object Function]",
                a = "[object GeneratorFunction]",
                s = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                l = s || c || Function("return this")();

            function u(e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                }
                return e.apply(t, r)
            }

            function p(e, t) {
                for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
                return e
            }
            var d = Object.prototype,
                f = d.hasOwnProperty,
                h = d.toString,
                g = l.Symbol,
                b = d.propertyIsEnumerable,
                m = g ? g.isConcatSpreadable : void 0,
                v = Math.max;

            function y(e, t, r, n, o) {
                var i = -1,
                    a = e.length;
                for (r || (r = x), o || (o = []); ++i < a;) {
                    var s = e[i];
                    t > 0 && r(s) ? t > 1 ? y(s, t - 1, r, n, o) : p(o, s) : n || (o[o.length] = s)
                }
                return o
            }

            function x(e) {
                return w(e) || function(e) {
                    return function(e) {
                        return function(e) {
                            return !!e && "object" == typeof e
                        }(e) && function(e) {
                            return null != e && function(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
                            }(e.length) && ! function(e) {
                                var t = function(e) {
                                    var t = typeof e;
                                    return !!e && ("object" == t || "function" == t)
                                }(e) ? h.call(e) : "";
                                return t == i || t == a
                            }(e)
                        }(e)
                    }(e) && f.call(e, "callee") && (!b.call(e, "callee") || h.call(e) == o)
                }(e) || !!(m && e && e[m])
            }
            var w = Array.isArray;
            var k = function(e) {
                return t = function(t) {
                        var r = (t = y(t, 1)).length,
                            n = r;
                        for (e && t.reverse(); n--;)
                            if ("function" != typeof t[n]) throw new TypeError("Expected a function");
                        return function() {
                            for (var e = 0, n = r ? t[e].apply(this, arguments) : arguments[0]; ++e < r;) n = t[e].call(this, n);
                            return n
                        }
                    }, r = v(void 0 === r ? t.length - 1 : r, 0),
                    function() {
                        for (var e = arguments, n = -1, o = v(e.length - r, 0), i = Array(o); ++n < o;) i[n] = e[r + n];
                        n = -1;
                        for (var a = Array(r + 1); ++n < r;) a[n] = e[n];
                        return a[r] = i, u(t, this, a)
                    };
                var t, r
            }();
            e.exports = k
        },
        "0h6e": (e, t, r) => {
            e = r.nmd(e);
            var n = "__lodash_hash_undefined__",
                o = 9007199254740991,
                i = "[object Arguments]",
                a = "[object Array]",
                s = "[object Boolean]",
                c = "[object Date]",
                l = "[object Error]",
                u = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                f = "[object Object]",
                h = "[object Promise]",
                g = "[object RegExp]",
                b = "[object Set]",
                m = "[object String]",
                v = "[object Symbol]",
                y = "[object WeakMap]",
                x = "[object ArrayBuffer]",
                w = "[object DataView]",
                k = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                C = /^\w*$/,
                S = /^\./,
                A = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                _ = /\\(\\)?/g,
                B = /^\[object .+?Constructor\]$/,
                E = /^(?:0|[1-9]\d*)$/,
                T = {};
            T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T[i] = T[a] = T[x] = T[s] = T[w] = T[c] = T[l] = T[u] = T[p] = T[d] = T[f] = T[g] = T[b] = T[m] = T[y] = !1;
            var R = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                I = "object" == typeof self && self && self.Object === Object && self,
                z = R || I || Function("return this")(),
                D = t && !t.nodeType && t,
                j = D && e && !e.nodeType && e,
                L = j && j.exports === D && R.process,
                O = function() {
                    try {
                        return L && L.binding("util")
                    } catch (e) {}
                }(),
                F = O && O.isTypedArray;

            function P(e, t, r, n) {
                for (var o = -1, i = e ? e.length : 0; ++o < i;) {
                    var a = e[o];
                    t(n, a, r(a), e)
                }
                return n
            }

            function H(e, t) {
                for (var r = -1, n = e ? e.length : 0; ++r < n;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }

            function U(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (r) {}
                return t
            }

            function M(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, n) {
                    r[++t] = [n, e]
                })), r
            }

            function N(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
            var W, V, G = Array.prototype,
                Y = Function.prototype,
                q = Object.prototype,
                X = z["__core-js_shared__"],
                $ = function() {
                    var e = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                K = Y.toString,
                Z = q.hasOwnProperty,
                Q = q.toString,
                J = RegExp("^" + K.call(Z).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                ee = z.Symbol,
                te = z.Uint8Array,
                re = q.propertyIsEnumerable,
                ne = G.splice,
                oe = (W = Object.keys, V = Object, function(e) {
                    return W(V(e))
                }),
                ie = Ue(z, "DataView"),
                ae = Ue(z, "Map"),
                se = Ue(z, "Promise"),
                ce = Ue(z, "Set"),
                le = Ue(z, "WeakMap"),
                ue = Ue(Object, "create"),
                pe = Xe(ie),
                de = Xe(ae),
                fe = Xe(se),
                he = Xe(ce),
                ge = Xe(le),
                be = ee ? ee.prototype : void 0,
                me = be ? be.valueOf : void 0,
                ve = be ? be.toString : void 0;

            function ye(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function xe(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function we(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function ke(e) {
                var t = -1,
                    r = e ? e.length : 0;
                for (this.__data__ = new we; ++t < r;) this.add(e[t])
            }

            function Ce(e) {
                this.__data__ = new xe(e)
            }

            function Se(e, t) {
                var r = tt(e) || et(e) ? function(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }(e.length, String) : [],
                    n = r.length,
                    o = !!n;
                for (var i in e) !t && !Z.call(e, i) || o && ("length" == i || Ne(i, n)) || r.push(i);
                return r
            }

            function Ae(e, t) {
                for (var r = e.length; r--;)
                    if (Je(e[r][0], t)) return r;
                return -1
            }

            function _e(e, t, r, n) {
                return Te(e, (function(e, o, i) {
                    t(n, e, r(e), i)
                })), n
            }
            ye.prototype.clear = function() {
                this.__data__ = ue ? ue(null) : {}
            }, ye.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, ye.prototype.get = function(e) {
                var t = this.__data__;
                if (ue) {
                    var r = t[e];
                    return r === n ? void 0 : r
                }
                return Z.call(t, e) ? t[e] : void 0
            }, ye.prototype.has = function(e) {
                var t = this.__data__;
                return ue ? void 0 !== t[e] : Z.call(t, e)
            }, ye.prototype.set = function(e, t) {
                return this.__data__[e] = ue && void 0 === t ? n : t, this
            }, xe.prototype.clear = function() {
                this.__data__ = []
            }, xe.prototype.delete = function(e) {
                var t = this.__data__,
                    r = Ae(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : ne.call(t, r, 1), !0)
            }, xe.prototype.get = function(e) {
                var t = this.__data__,
                    r = Ae(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, xe.prototype.has = function(e) {
                return Ae(this.__data__, e) > -1
            }, xe.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = Ae(r, e);
                return n < 0 ? r.push([e, t]) : r[n][1] = t, this
            }, we.prototype.clear = function() {
                this.__data__ = {
                    hash: new ye,
                    map: new(ae || xe),
                    string: new ye
                }
            }, we.prototype.delete = function(e) {
                return He(this, e).delete(e)
            }, we.prototype.get = function(e) {
                return He(this, e).get(e)
            }, we.prototype.has = function(e) {
                return He(this, e).has(e)
            }, we.prototype.set = function(e, t) {
                return He(this, e).set(e, t), this
            }, ke.prototype.add = ke.prototype.push = function(e) {
                return this.__data__.set(e, n), this
            }, ke.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ce.prototype.clear = function() {
                this.__data__ = new xe
            }, Ce.prototype.delete = function(e) {
                return this.__data__.delete(e)
            }, Ce.prototype.get = function(e) {
                return this.__data__.get(e)
            }, Ce.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ce.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof xe) {
                    var n = r.__data__;
                    if (!ae || n.length < 199) return n.push([e, t]), this;
                    r = this.__data__ = new we(n)
                }
                return r.set(e, t), this
            };
            var Be, Ee, Te = (Be = function(e, t) {
                    return e && Re(e, t, lt)
                }, function(e, t) {
                    if (null == e) return e;
                    if (!rt(e)) return Be(e, t);
                    for (var r = e.length, n = Ee ? r : -1, o = Object(e);
                        (Ee ? n-- : ++n < r) && !1 !== t(o[n], n, o););
                    return e
                }),
                Re = function(e) {
                    return function(t, r, n) {
                        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--;) {
                            var c = a[e ? s : ++o];
                            if (!1 === r(i[c], c, i)) break
                        }
                        return t
                    }
                }();

            function Ie(e, t) {
                for (var r = 0, n = (t = We(t, e) ? [t] : Fe(t)).length; null != e && r < n;) e = e[qe(t[r++])];
                return r && r == n ? e : void 0
            }

            function ze(e, t) {
                return null != e && t in Object(e)
            }

            function De(e, t, r, n, o) {
                return e === t || (null == e || null == t || !it(e) && !at(t) ? e !== e && t !== t : function(e, t, r, n, o, u) {
                    var h = tt(e),
                        y = tt(t),
                        k = a,
                        C = a;
                    h || (k = (k = Me(e)) == i ? f : k);
                    y || (C = (C = Me(t)) == i ? f : C);
                    var S = k == f && !U(e),
                        A = C == f && !U(t),
                        _ = k == C;
                    if (_ && !S) return u || (u = new Ce), h || ct(e) ? Pe(e, t, r, n, o, u) : function(e, t, r, n, o, i, a) {
                        switch (r) {
                            case w:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case x:
                                return !(e.byteLength != t.byteLength || !n(new te(e), new te(t)));
                            case s:
                            case c:
                            case d:
                                return Je(+e, +t);
                            case l:
                                return e.name == t.name && e.message == t.message;
                            case g:
                            case m:
                                return e == t + "";
                            case p:
                                var u = M;
                            case b:
                                var f = 2 & i;
                                if (u || (u = N), e.size != t.size && !f) return !1;
                                var h = a.get(e);
                                if (h) return h == t;
                                i |= 1, a.set(e, t);
                                var y = Pe(u(e), u(t), n, o, i, a);
                                return a.delete(e), y;
                            case v:
                                if (me) return me.call(e) == me.call(t)
                        }
                        return !1
                    }(e, t, k, r, n, o, u);
                    if (!(2 & o)) {
                        var B = S && Z.call(e, "__wrapped__"),
                            E = A && Z.call(t, "__wrapped__");
                        if (B || E) {
                            var T = B ? e.value() : e,
                                R = E ? t.value() : t;
                            return u || (u = new Ce), r(T, R, n, o, u)
                        }
                    }
                    if (!_) return !1;
                    return u || (u = new Ce),
                        function(e, t, r, n, o, i) {
                            var a = 2 & o,
                                s = lt(e),
                                c = s.length,
                                l = lt(t).length;
                            if (c != l && !a) return !1;
                            var u = c;
                            for (; u--;) {
                                var p = s[u];
                                if (!(a ? p in t : Z.call(t, p))) return !1
                            }
                            var d = i.get(e);
                            if (d && i.get(t)) return d == t;
                            var f = !0;
                            i.set(e, t), i.set(t, e);
                            var h = a;
                            for (; ++u < c;) {
                                var g = e[p = s[u]],
                                    b = t[p];
                                if (n) var m = a ? n(b, g, p, t, e, i) : n(g, b, p, e, t, i);
                                if (!(void 0 === m ? g === b || r(g, b, n, o, i) : m)) {
                                    f = !1;
                                    break
                                }
                                h || (h = "constructor" == p)
                            }
                            if (f && !h) {
                                var v = e.constructor,
                                    y = t.constructor;
                                v == y || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y || (f = !1)
                            }
                            return i.delete(e), i.delete(t), f
                        }(e, t, r, n, o, u)
                }(e, t, De, r, n, o))
            }

            function je(e) {
                return !(!it(e) || function(e) {
                    return !!$ && $ in e
                }(e)) && (nt(e) || U(e) ? J : B).test(Xe(e))
            }

            function Le(e) {
                return "function" == typeof e ? e : null == e ? ut : "object" == typeof e ? tt(e) ? function(e, t) {
                    if (We(e) && Ve(t)) return Ge(qe(e), t);
                    return function(r) {
                        var n = function(e, t, r) {
                            var n = null == e ? void 0 : Ie(e, t);
                            return void 0 === n ? r : n
                        }(r, e);
                        return void 0 === n && n === t ? function(e, t) {
                            return null != e && function(e, t, r) {
                                t = We(t, e) ? [t] : Fe(t);
                                var n, o = -1,
                                    i = t.length;
                                for (; ++o < i;) {
                                    var a = qe(t[o]);
                                    if (!(n = null != e && r(e, a))) break;
                                    e = e[a]
                                }
                                if (n) return n;
                                return !!(i = e ? e.length : 0) && ot(i) && Ne(a, i) && (tt(e) || et(e))
                            }(e, t, ze)
                        }(r, e) : De(t, n, void 0, 3)
                    }
                }(e[0], e[1]) : function(e) {
                    var t = function(e) {
                        var t = lt(e),
                            r = t.length;
                        for (; r--;) {
                            var n = t[r],
                                o = e[n];
                            t[r] = [n, o, Ve(o)]
                        }
                        return t
                    }(e);
                    if (1 == t.length && t[0][2]) return Ge(t[0][0], t[0][1]);
                    return function(r) {
                        return r === e || function(e, t, r, n) {
                            var o = r.length,
                                i = o,
                                a = !n;
                            if (null == e) return !i;
                            for (e = Object(e); o--;) {
                                var s = r[o];
                                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                            }
                            for (; ++o < i;) {
                                var c = (s = r[o])[0],
                                    l = e[c],
                                    u = s[1];
                                if (a && s[2]) {
                                    if (void 0 === l && !(c in e)) return !1
                                } else {
                                    var p = new Ce;
                                    if (n) var d = n(l, u, c, e, t, p);
                                    if (!(void 0 === d ? De(u, l, n, 3, p) : d)) return !1
                                }
                            }
                            return !0
                        }(r, e, t)
                    }
                }(e) : function(e) {
                    return We(e) ? (t = qe(e), function(e) {
                        return null == e ? void 0 : e[t]
                    }) : function(e) {
                        return function(t) {
                            return Ie(t, e)
                        }
                    }(e);
                    var t
                }(e)
            }

            function Oe(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            r = "function" == typeof t && t.prototype || q;
                        return e === r
                    }(e)) return oe(e);
                var t = [];
                for (var r in Object(e)) Z.call(e, r) && "constructor" != r && t.push(r);
                return t
            }

            function Fe(e) {
                return tt(e) ? e : Ye(e)
            }

            function Pe(e, t, r, n, o, i) {
                var a = 2 & o,
                    s = e.length,
                    c = t.length;
                if (s != c && !(a && c > s)) return !1;
                var l = i.get(e);
                if (l && i.get(t)) return l == t;
                var u = -1,
                    p = !0,
                    d = 1 & o ? new ke : void 0;
                for (i.set(e, t), i.set(t, e); ++u < s;) {
                    var f = e[u],
                        h = t[u];
                    if (n) var g = a ? n(h, f, u, t, e, i) : n(f, h, u, e, t, i);
                    if (void 0 !== g) {
                        if (g) continue;
                        p = !1;
                        break
                    }
                    if (d) {
                        if (!H(t, (function(e, t) {
                                if (!d.has(t) && (f === e || r(f, e, n, o, i))) return d.add(t)
                            }))) {
                            p = !1;
                            break
                        }
                    } else if (f !== h && !r(f, h, n, o, i)) {
                        p = !1;
                        break
                    }
                }
                return i.delete(e), i.delete(t), p
            }

            function He(e, t) {
                var r = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function Ue(e, t) {
                var r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return je(r) ? r : void 0
            }
            var Me = function(e) {
                return Q.call(e)
            };

            function Ne(e, t) {
                return !!(t = null == t ? o : t) && ("number" == typeof e || E.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function We(e, t) {
                if (tt(e)) return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !st(e)) || (C.test(e) || !k.test(e) || null != t && e in Object(t))
            }

            function Ve(e) {
                return e === e && !it(e)
            }

            function Ge(e, t) {
                return function(r) {
                    return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
                }
            }(ie && Me(new ie(new ArrayBuffer(1))) != w || ae && Me(new ae) != p || se && Me(se.resolve()) != h || ce && Me(new ce) != b || le && Me(new le) != y) && (Me = function(e) {
                var t = Q.call(e),
                    r = t == f ? e.constructor : void 0,
                    n = r ? Xe(r) : void 0;
                if (n) switch (n) {
                    case pe:
                        return w;
                    case de:
                        return p;
                    case fe:
                        return h;
                    case he:
                        return b;
                    case ge:
                        return y
                }
                return t
            });
            var Ye = Qe((function(e) {
                var t;
                e = null == (t = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if (st(e)) return ve ? ve.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var r = [];
                return S.test(e) && r.push(""), e.replace(A, (function(e, t, n, o) {
                    r.push(n ? o.replace(_, "$1") : t || e)
                })), r
            }));

            function qe(e) {
                if ("string" == typeof e || st(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function Xe(e) {
                if (null != e) {
                    try {
                        return K.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }
            var $e, Ke, Ze = ($e = function(e, t, r) {
                Z.call(e, r) ? e[r].push(t) : e[r] = [t]
            }, function(e, t) {
                var r = tt(e) ? P : _e,
                    n = Ke ? Ke() : {};
                return r(e, $e, Le(t), n)
            });

            function Qe(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = t ? t.apply(this, n) : n[0],
                        i = r.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, n);
                    return r.cache = i.set(o, a), a
                };
                return r.cache = new(Qe.Cache || we), r
            }

            function Je(e, t) {
                return e === t || e !== e && t !== t
            }

            function et(e) {
                return function(e) {
                    return at(e) && rt(e)
                }(e) && Z.call(e, "callee") && (!re.call(e, "callee") || Q.call(e) == i)
            }
            Qe.Cache = we;
            var tt = Array.isArray;

            function rt(e) {
                return null != e && ot(e.length) && !nt(e)
            }

            function nt(e) {
                var t = it(e) ? Q.call(e) : "";
                return t == u || "[object GeneratorFunction]" == t
            }

            function ot(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
            }

            function it(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function at(e) {
                return !!e && "object" == typeof e
            }

            function st(e) {
                return "symbol" == typeof e || at(e) && Q.call(e) == v
            }
            var ct = F ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(F) : function(e) {
                return at(e) && ot(e.length) && !!T[Q.call(e)]
            };

            function lt(e) {
                return rt(e) ? Se(e) : Oe(e)
            }

            function ut(e) {
                return e
            }
            e.exports = Ze
        },
        deT9: (e, t, r) => {
            var n = r("vGGS"),
                o = r("obGE");

            function i(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            i.prototype = n(o.prototype), i.prototype.constructor = i, e.exports = i
        },
        "0+c5": (e, t, r) => {
            var n = r("vGGS"),
                o = r("obGE");

            function i(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            i.prototype = n(o.prototype), i.prototype.constructor = i, e.exports = i
        },
        OfKG: (e, t, r) => {
            var n = r("c7Qd");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
            }
        },
        cPMt: e => {
            e.exports = function(e, t, r, n) {
                var o = -1,
                    i = null == e ? 0 : e.length;
                for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
                return r
            }
        },
        amiU: (e, t, r) => {
            var n = r("wC3K"),
                o = r("pPzx");
            e.exports = function(e, t, r) {
                (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r)
            }
        },
        DuXo: e => {
            e.exports = function(e, t, r, n) {
                for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                    if (t(e[i], i, e)) return i;
                return -1
            }
        },
        c7Qd: (e, t, r) => {
            var n = r("DuXo"),
                o = r("z9Jh"),
                i = r("n1QJ");
            e.exports = function(e, t, r) {
                return t === t ? i(e, t, r) : n(e, o, r)
            }
        },
        z9Jh: e => {
            e.exports = function(e) {
                return e !== e
            }
        },
        obGE: e => {
            e.exports = function() {}
        },
        MzY2: (e, t, r) => {
            var n = r("HsnV"),
                o = r("amiU"),
                i = r("UdtX"),
                a = r("cb1R"),
                s = r("tQYX"),
                c = r("zH+d"),
                l = r("LL3N");
            e.exports = function e(t, r, u, p, d) {
                t !== r && i(r, (function(i, c) {
                    if (d || (d = new n), s(i)) a(t, r, c, u, e, p, d);
                    else {
                        var f = p ? p(l(t, c), i, c + "", t, r, d) : void 0;
                        void 0 === f && (f = i), o(t, c, f)
                    }
                }), c)
            }
        },
        cb1R: (e, t, r) => {
            var n = r("amiU"),
                o = r("Grae"),
                i = r("6Rtw"),
                a = r("QT01"),
                s = r("sD1O"),
                c = r("bvyN"),
                l = r("wxYD"),
                u = r("Ndl3"),
                p = r("3ajY"),
                d = r("2q8g"),
                f = r("tQYX"),
                h = r("Kkar"),
                g = r("Qd2C"),
                b = r("LL3N"),
                m = r("4ScB");
            e.exports = function(e, t, r, v, y, x, w) {
                var k = b(e, r),
                    C = b(t, r),
                    S = w.get(C);
                if (S) n(e, r, S);
                else {
                    var A = x ? x(k, C, r + "", e, t, w) : void 0,
                        _ = void 0 === A;
                    if (_) {
                        var B = l(C),
                            E = !B && p(C),
                            T = !B && !E && g(C);
                        A = C, B || E || T ? l(k) ? A = k : u(k) ? A = a(k) : E ? (_ = !1, A = o(C, !0)) : T ? (_ = !1, A = i(C, !0)) : A = [] : h(C) || c(C) ? (A = k, c(k) ? A = m(k) : f(k) && !d(k) || (A = s(C))) : _ = !1
                    }
                    _ && (w.set(C, A), y(A, C, v, x, w), w.delete(C)), n(e, r, A)
                }
            }
        },
        "5q8j": e => {
            e.exports = function(e, t, r, n, o) {
                return o(e, (function(e, o, i) {
                    r = n ? (n = !1, e) : t(r, e, o, i)
                })), r
            }
        },
        R3TX: (e, t, r) => {
            var n = r("zWgn"),
                o = r("UAs9"),
                i = r("7Pat");
            e.exports = function(e, t) {
                return i(o(e, t, n), e + "")
            }
        },
        uA6v: (e, t, r) => {
            var n = r("zWgn"),
                o = r("BVx2"),
                i = o ? function(e, t) {
                    return o.set(e, t), e
                } : n;
            e.exports = i
        },
        vyvt: (e, t, r) => {
            var n = r("H87J");
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        "6sC/": e => {
            var t = Math.max;
            e.exports = function(e, r, n, o) {
                for (var i = -1, a = e.length, s = n.length, c = -1, l = r.length, u = t(a - s, 0), p = Array(l + u), d = !o; ++c < l;) p[c] = r[c];
                for (; ++i < s;)(d || i < a) && (p[n[i]] = e[i]);
                for (; u--;) p[c++] = e[i++];
                return p
            }
        },
        gGwV: e => {
            var t = Math.max;
            e.exports = function(e, r, n, o) {
                for (var i = -1, a = e.length, s = -1, c = n.length, l = -1, u = r.length, p = t(a - c, 0), d = Array(p + u), f = !o; ++i < p;) d[i] = e[i];
                for (var h = i; ++l < u;) d[h + l] = r[l];
                for (; ++s < c;)(f || i < a) && (d[h + n[s]] = e[i++]);
                return d
            }
        },
        "qFO/": e => {
            e.exports = function(e, t) {
                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                return n
            }
        },
        wpQC: (e, t, r) => {
            var n = r("R3TX"),
                o = r("R5u7");
            e.exports = function(e) {
                return n((function(t, r) {
                    var n = -1,
                        i = r.length,
                        a = i > 1 ? r[i - 1] : void 0,
                        s = i > 2 ? r[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, s && o(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
                        var c = r[n];
                        c && e(t, c, n, a)
                    }
                    return t
                }))
            }
        },
        HCUT: (e, t, r) => {
            var n = r("iWTG"),
                o = r("IBsm");
            e.exports = function(e, t, r) {
                var i = 1 & t,
                    a = n(e);
                return function t() {
                    var n = this && this !== o && this instanceof t ? a : e;
                    return n.apply(i ? r : this, arguments)
                }
            }
        },
        iWTG: (e, t, r) => {
            var n = r("vGGS"),
                o = r("tQYX");
            e.exports = function(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var r = n(e.prototype),
                        i = e.apply(r, t);
                    return o(i) ? i : r
                }
            }
        },
        LtMG: (e, t, r) => {
            var n = r("zaNA"),
                o = r("iWTG"),
                i = r("JtPM"),
                a = r("kBvp"),
                s = r("4mQY"),
                c = r("AeOa"),
                l = r("IBsm");
            e.exports = function(e, t, r) {
                var u = o(e);
                return function o() {
                    for (var p = arguments.length, d = Array(p), f = p, h = s(o); f--;) d[f] = arguments[f];
                    var g = p < 3 && d[0] !== h && d[p - 1] !== h ? [] : c(d, h);
                    if ((p -= g.length) < r) return a(e, t, i, o.placeholder, void 0, d, g, void 0, void 0, r - p);
                    var b = this && this !== l && this instanceof o ? u : e;
                    return n(b, this, d)
                }
            }
        },
        tUbk: (e, t, r) => {
            var n = r("0+c5"),
                o = r("cH1A"),
                i = r("rjis"),
                a = r("rKb1"),
                s = r("wxYD"),
                c = r("/Bkq");
            e.exports = function(e) {
                return o((function(t) {
                    var r = t.length,
                        o = r,
                        l = n.prototype.thru;
                    for (e && t.reverse(); o--;) {
                        var u = t[o];
                        if ("function" != typeof u) throw new TypeError("Expected a function");
                        if (l && !p && "wrapper" == a(u)) var p = new n([], !0)
                    }
                    for (o = p ? o : r; ++o < r;) {
                        u = t[o];
                        var d = a(u),
                            f = "wrapper" == d ? i(u) : void 0;
                        p = f && c(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? p[a(f[0])].apply(p, f[3]) : 1 == u.length && c(u) ? p[d]() : p.thru(u)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (p && 1 == e.length && s(n)) return p.plant(n).value();
                        for (var o = 0, i = r ? t[o].apply(this, e) : n; ++o < r;) i = t[o].call(this, i);
                        return i
                    }
                }))
            }
        },
        JtPM: (e, t, r) => {
            var n = r("6sC/"),
                o = r("gGwV"),
                i = r("qFO/"),
                a = r("iWTG"),
                s = r("kBvp"),
                c = r("4mQY"),
                l = r("MRwE"),
                u = r("AeOa"),
                p = r("IBsm");
            e.exports = function e(t, r, d, f, h, g, b, m, v, y) {
                var x = 128 & r,
                    w = 1 & r,
                    k = 2 & r,
                    C = 24 & r,
                    S = 512 & r,
                    A = k ? void 0 : a(t);
                return function _() {
                    for (var B = arguments.length, E = Array(B), T = B; T--;) E[T] = arguments[T];
                    if (C) var R = c(_),
                        I = i(E, R);
                    if (f && (E = n(E, f, h, C)), g && (E = o(E, g, b, C)), B -= I, C && B < y) {
                        var z = u(E, R);
                        return s(t, r, e, _.placeholder, d, E, z, m, v, y - B)
                    }
                    var D = w ? d : this,
                        j = k ? D[t] : t;
                    return B = E.length, m ? E = l(E, m) : S && B > 1 && E.reverse(), x && v < B && (E.length = v), this && this !== p && this instanceof _ && (j = A || a(j)), j.apply(D, E)
                }
            }
        },
        I6tc: (e, t, r) => {
            var n = r("zaNA"),
                o = r("iWTG"),
                i = r("IBsm");
            e.exports = function(e, t, r, a) {
                var s = 1 & t,
                    c = o(e);
                return function t() {
                    for (var o = -1, l = arguments.length, u = -1, p = a.length, d = Array(p + l), f = this && this !== i && this instanceof t ? c : e; ++u < p;) d[u] = a[u];
                    for (; l--;) d[u++] = arguments[++o];
                    return n(f, s ? r : this, d)
                }
            }
        },
        kBvp: (e, t, r) => {
            var n = r("/Bkq"),
                o = r("SStt"),
                i = r("E2v+");
            e.exports = function(e, t, r, a, s, c, l, u, p, d) {
                var f = 8 & t;
                t |= f ? 32 : 64, 4 & (t &= ~(f ? 64 : 32)) || (t &= -4);
                var h = [e, t, s, f ? c : void 0, f ? l : void 0, f ? void 0 : c, f ? void 0 : l, u, p, d],
                    g = r.apply(void 0, h);
                return n(e) && o(g, h), g.placeholder = a, i(g, e, t)
            }
        },
        zWkt: (e, t, r) => {
            var n = r("vyvt"),
                o = r("kkM+"),
                i = r("aURW"),
                a = r("5KBi");
            e.exports = function(e) {
                return function(t) {
                    var r = o(t);
                    return "[object Map]" == r ? i(t) : "[object Set]" == r ? a(t) : n(t, e(t))
                }
            }
        },
        "P+cI": (e, t, r) => {
            var n = r("uA6v"),
                o = r("HCUT"),
                i = r("LtMG"),
                a = r("JtPM"),
                s = r("I6tc"),
                c = r("rjis"),
                l = r("9Oiy"),
                u = r("SStt"),
                p = r("E2v+"),
                d = r("m2YG"),
                f = Math.max;
            e.exports = function(e, t, r, h, g, b, m, v) {
                var y = 2 & t;
                if (!y && "function" != typeof e) throw new TypeError("Expected a function");
                var x = h ? h.length : 0;
                if (x || (t &= -97, h = g = void 0), m = void 0 === m ? m : f(d(m), 0), v = void 0 === v ? v : d(v), x -= g ? g.length : 0, 64 & t) {
                    var w = h,
                        k = g;
                    h = g = void 0
                }
                var C = y ? void 0 : c(e),
                    S = [e, t, r, h, g, w, k, b, m, v];
                if (C && l(S, C), e = S[0], t = S[1], r = S[2], h = S[3], g = S[4], !(v = S[9] = void 0 === S[9] ? y ? 0 : e.length : f(S[9] - x, 0)) && 24 & t && (t &= -25), t && 1 != t) A = 8 == t || 16 == t ? i(e, t, v) : 32 != t && 33 != t || g.length ? a.apply(void 0, S) : s(e, t, r, h);
                else var A = o(e, t, r);
                return p((C ? n : u)(A, S), e, t)
            }
        },
        rjis: (e, t, r) => {
            var n = r("BVx2"),
                o = r("nnm9"),
                i = n ? function(e) {
                    return n.get(e)
                } : o;
            e.exports = i
        },
        rKb1: (e, t, r) => {
            var n = r("QaiR"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", r = n[t], i = o.call(n, t) ? r.length : 0; i--;) {
                    var a = r[i],
                        s = a.func;
                    if (null == s || s == e) return a.name
                }
                return t
            }
        },
        "4mQY": e => {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        wafF: e => {
            var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var n = e.match(t);
                return n ? n[1].split(r) : []
            }
        },
        kEP7: e => {
            var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, r) {
                var n = r.length;
                if (!n) return e;
                var o = n - 1;
                return r[o] = (n > 1 ? "& " : "") + r[o], r = r.join(n > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
            }
        },
        R5u7: (e, t, r) => {
            var n = r("pPzx"),
                o = r("9y2L"),
                i = r("pnw1"),
                a = r("tQYX");
            e.exports = function(e, t, r) {
                if (!a(r)) return !1;
                var s = typeof t;
                return !!("number" == s ? o(r) && i(t, r.length) : "string" == s && t in r) && n(r[t], e)
            }
        },
        "/Bkq": (e, t, r) => {
            var n = r("deT9"),
                o = r("rjis"),
                i = r("rKb1"),
                a = r("jm4U");
            e.exports = function(e) {
                var t = i(e),
                    r = a[t];
                if ("function" != typeof r || !(t in n.prototype)) return !1;
                if (e === r) return !0;
                var s = o(r);
                return !!s && e === s[0]
            }
        },
        "9Oiy": (e, t, r) => {
            var n = r("6sC/"),
                o = r("gGwV"),
                i = r("AeOa"),
                a = "__lodash_placeholder__",
                s = 128,
                c = Math.min;
            e.exports = function(e, t) {
                var r = e[1],
                    l = t[1],
                    u = r | l,
                    p = u < 131,
                    d = l == s && 8 == r || l == s && 256 == r && e[7].length <= t[8] || 384 == l && t[7].length <= t[8] && 8 == r;
                if (!p && !d) return e;
                1 & l && (e[2] = t[2], u |= 1 & r ? 0 : 4);
                var f = t[3];
                if (f) {
                    var h = e[3];
                    e[3] = h ? n(h, f, t[4]) : f, e[4] = h ? i(e[3], a) : t[4]
                }
                return (f = t[5]) && (h = e[5], e[5] = h ? o(h, f, t[6]) : f, e[6] = h ? i(e[5], a) : t[6]), (f = t[7]) && (e[7] = f), l & s && (e[8] = null == e[8] ? t[8] : c(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = u, e
            }
        },
        BVx2: (e, t, r) => {
            var n = r("4+Vk"),
                o = n && new n;
            e.exports = o
        },
        QaiR: e => {
            e.exports = {}
        },
        MRwE: (e, t, r) => {
            var n = r("QT01"),
                o = r("pnw1"),
                i = Math.min;
            e.exports = function(e, t) {
                for (var r = e.length, a = i(t.length, r), s = n(e); a--;) {
                    var c = t[a];
                    e[a] = o(c, r) ? s[c] : void 0
                }
                return e
            }
        },
        AeOa: e => {
            var t = "__lodash_placeholder__";
            e.exports = function(e, r) {
                for (var n = -1, o = e.length, i = 0, a = []; ++n < o;) {
                    var s = e[n];
                    s !== r && s !== t || (e[n] = t, a[i++] = n)
                }
                return a
            }
        },
        LL3N: e => {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        SStt: (e, t, r) => {
            var n = r("uA6v"),
                o = r("kG2z")(n);
            e.exports = o
        },
        "5KBi": e => {
            e.exports = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = [e, e]
                })), r
            }
        },
        "E2v+": (e, t, r) => {
            var n = r("wafF"),
                o = r("kEP7"),
                i = r("7Pat"),
                a = r("p4bK");
            e.exports = function(e, t, r) {
                var s = t + "";
                return i(e, o(s, a(n(s), r)))
            }
        },
        n1QJ: e => {
            e.exports = function(e, t, r) {
                for (var n = r - 1, o = e.length; ++n < o;)
                    if (e[n] === t) return n;
                return -1
            }
        },
        p4bK: (e, t, r) => {
            var n = r("LmOH"),
                o = r("OfKG"),
                i = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ];
            e.exports = function(e, t) {
                return n(i, (function(r) {
                    var n = "_." + r[0];
                    t & r[1] && !o(e, n) && e.push(n)
                })), e.sort()
            }
        },
        "e+ll": (e, t, r) => {
            var n = r("deT9"),
                o = r("0+c5"),
                i = r("QT01");
            e.exports = function(e) {
                if (e instanceof n) return e.clone();
                var t = new o(e.__wrapped__, e.__chain__);
                return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        "3POh": (e, t, r) => {
            var n = r("P+cI");

            function o(e, t, r) {
                var i = n(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                return i.placeholder = o.placeholder, i
            }
            o.placeholder = {}, e.exports = o
        },
        jPI1: (e, t, r) => {
            var n = r("tUbk")();
            e.exports = n
        },
        Ndl3: (e, t, r) => {
            var n = r("9y2L"),
                o = r("tLQN");
            e.exports = function(e) {
                return o(e) && n(e)
            }
        },
        H8sf: (e, t, r) => {
            var n = r("MzY2"),
                o = r("wpQC")((function(e, t, r) {
                    n(e, t, r)
                }));
            e.exports = o
        },
        nnm9: e => {
            e.exports = function() {}
        },
        veKZ: (e, t, r) => {
            var n = r("cPMt"),
                o = r("Q4oW"),
                i = r("S3pA"),
                a = r("5q8j"),
                s = r("wxYD");
            e.exports = function(e, t, r) {
                var c = s(e) ? n : a,
                    l = arguments.length < 3;
                return c(e, i(t, 4), r, l, o)
            }
        },
        fWyh: (e, t, r) => {
            var n = r("nvU9"),
                o = 1 / 0;
            e.exports = function(e) {
                return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            }
        },
        m2YG: (e, t, r) => {
            var n = r("fWyh");
            e.exports = function(e) {
                var t = n(e),
                    r = t % 1;
                return t === t ? r ? t - r : t : 0
            }
        },
        "pL+m": (e, t, r) => {
            var n = r("zWkt")(r("BlJA"));
            e.exports = n
        },
        "4ScB": (e, t, r) => {
            var n = r("LtXa"),
                o = r("zH+d");
            e.exports = function(e) {
                return n(e, o(e))
            }
        },
        jm4U: (e, t, r) => {
            var n = r("deT9"),
                o = r("0+c5"),
                i = r("obGE"),
                a = r("wxYD"),
                s = r("tLQN"),
                c = r("e+ll"),
                l = Object.prototype.hasOwnProperty;

            function u(e) {
                if (s(e) && !a(e) && !(e instanceof n)) {
                    if (e instanceof o) return e;
                    if (l.call(e, "__wrapped__")) return c(e)
                }
                return new o(e)
            }
            u.prototype = i.prototype, u.prototype.constructor = u, e.exports = u
        },
        maj8: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var a, s, c = o(e), l = 1; l < arguments.length; l++) {
                    for (var u in a = Object(arguments[l])) r.call(a, u) && (c[u] = a[u]);
                    if (t) {
                        s = t(a);
                        for (var p = 0; p < s.length; p++) n.call(a, s[p]) && (c[s[p]] = a[s[p]])
                    }
                }
                return c
            }
        },
        dqst: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD");
            const o = function(e, t, r) {
                if (!e) throw new Error("useLocalStorage key may not be falsy");
                var o = r ? r.raw ? function(e) {
                        return e
                    } : r.deserializer : JSON.parse,
                    i = (0, n.useRef)((function(e) {
                        try {
                            var n = r ? r.raw ? String : r.serializer : JSON.stringify,
                                i = localStorage.getItem(e);
                            return null !== i ? o(i) : (t && localStorage.setItem(e, n(t)), t)
                        } catch (a) {
                            return t
                        }
                    })),
                    a = (0, n.useState)((function() {
                        return i.current(e)
                    })),
                    s = a[0],
                    c = a[1];
                (0, n.useLayoutEffect)((function() {
                    return c(i.current(e))
                }), [e]);
                var l = (0, n.useCallback)((function(t) {
                        try {
                            var n = "function" === typeof t ? t(s) : t;
                            if ("undefined" === typeof n) return;
                            var i = void 0;
                            i = r ? r.raw ? "string" === typeof n ? n : JSON.stringify(n) : r.serializer ? r.serializer(n) : JSON.stringify(n) : JSON.stringify(n), localStorage.setItem(e, i), c(o(i))
                        } catch (a) {}
                    }), [e, c]),
                    u = (0, n.useCallback)((function() {
                        try {
                            localStorage.removeItem(e), c(void 0)
                        } catch (a) {}
                    }), [e, c]);
                return [s, l, u]
            }
        },
        vTXz: (e, t, r) => {
            "use strict";
            t.az = void 0;
            c(r("DTvD"));
            var n = c(r("Y7o/")),
                o = r("8nle"),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var r = {};
                    if (null != e) {
                        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                        for (var o in e)
                            if (Object.prototype.hasOwnProperty.call(e, o)) {
                                var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                                i && (i.get || i.set) ? Object.defineProperty(r, o, i) : r[o] = e[o]
                            }
                    }
                    r.default = e, t && t.set(e, r);
                    return r
                }(r("OBVT")),
                a = c(r("9Bf3"));

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = (0, n.default)("div", {
                shouldForwardProp: a.default
            })({
                boxSizing: "border-box",
                margin: 0,
                minWidth: 0
            }, (function(e) {
                return (0, i.default)(e.__css)(e.theme)
            }), (function(e) {
                var t = e.theme,
                    r = e.variant,
                    n = e.tx,
                    o = void 0 === n ? "variants" : n;
                return (0, i.default)((0, i.get)(t, o + "." + r, (0, i.get)(t, r)))(t)
            }), (function(e) {
                return (0, i.default)(e.sx)(e.theme)
            }), (function(e) {
                return e.css
            }), (0, o.compose)(o.space, o.layout, o.typography, o.color, o.flexbox));
            t.az = l, (0, n.default)(l)({
                display: "flex"
            })
        },
        "8nle": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                alignContent: () => ve,
                alignItems: () => me,
                alignSelf: () => Ee,
                background: () => z,
                backgroundImage: () => Ke,
                backgroundPosition: () => Qe,
                backgroundRepeat: () => Je,
                backgroundSize: () => Ze,
                border: () => T,
                borderBottom: () => qe,
                borderColor: () => Ve,
                borderLeft: () => Xe,
                borderRadius: () => $e,
                borderRight: () => Ye,
                borderStyle: () => We,
                borderTop: () => Ge,
                borderWidth: () => Ne,
                borders: () => R,
                bottom: () => nt,
                boxShadow: () => G,
                buttonStyle: () => X,
                color: () => y,
                colorStyle: () => K,
                compose: () => g,
                createParser: () => u,
                createStyleFunction: () => f,
                display: () => ie,
                flex: () => Ce,
                flexBasis: () => _e,
                flexDirection: () => ke,
                flexGrow: () => Se,
                flexShrink: () => Ae,
                flexWrap: () => we,
                flexbox: () => C,
                fontFamily: () => pe,
                fontSize: () => ue,
                fontStyle: () => ge,
                fontWeight: () => de,
                get: () => l,
                grid: () => _,
                gridArea: () => Me,
                gridAutoColumns: () => Oe,
                gridAutoFlow: () => Le,
                gridAutoRows: () => Fe,
                gridColumn: () => De,
                gridColumnGap: () => Ie,
                gridGap: () => Re,
                gridRow: () => je,
                gridRowGap: () => ze,
                gridTemplateAreas: () => Ue,
                gridTemplateColumns: () => Pe,
                gridTemplateRows: () => He,
                height: () => Q,
                justifyContent: () => xe,
                justifyItems: () => ye,
                justifySelf: () => Be,
                layout: () => b,
                left: () => ot,
                letterSpacing: () => be,
                lineHeight: () => fe,
                margin: () => M,
                maxHeight: () => re,
                maxWidth: () => te,
                minHeight: () => ee,
                minWidth: () => J,
                opacity: () => le,
                order: () => Te,
                overflow: () => ae,
                overflowX: () => se,
                overflowY: () => ce,
                padding: () => N,
                position: () => L,
                right: () => rt,
                shadow: () => V,
                size: () => ne,
                space: () => W,
                style: () => it,
                system: () => h,
                textAlign: () => he,
                textShadow: () => G,
                textStyle: () => $,
                top: () => tt,
                typography: () => w,
                variant: () => q,
                verticalAlign: () => oe,
                width: () => Z,
                zIndex: () => et
            });
            var n = r("maj8"),
                o = r.n(n),
                i = function(e, t) {
                    var r = o()({}, e, t);
                    for (var n in e) {
                        var i;
                        e[n] && "object" === typeof t[n] && o()(r, ((i = {})[n] = o()(e[n], t[n]), i))
                    }
                    return r
                },
                a = {
                    breakpoints: [40, 52, 64].map((function(e) {
                        return e + "em"
                    }))
                },
                s = function(e) {
                    return "@media screen and (min-width: " + e + ")"
                },
                c = function(e, t) {
                    return l(t, e, e)
                },
                l = function(e, t, r, n, o) {
                    for (t = t && t.split ? t.split(".") : [t], n = 0; n < t.length; n++) e = e ? e[t[n]] : o;
                    return e === o ? r : e
                },
                u = function e(t) {
                    var r = {},
                        n = function(e) {
                            var n = {},
                                c = !1,
                                u = e.theme && e.theme.disableStyledSystemCache;
                            for (var f in e)
                                if (t[f]) {
                                    var h = t[f],
                                        g = e[f],
                                        b = l(e.theme, h.scale, h.defaults);
                                    if ("object" !== typeof g) o()(n, h(g, b, e));
                                    else {
                                        if (r.breakpoints = !u && r.breakpoints || l(e.theme, "breakpoints", a.breakpoints), Array.isArray(g)) {
                                            r.media = !u && r.media || [null].concat(r.breakpoints.map(s)), n = i(n, p(r.media, h, b, g, e));
                                            continue
                                        }
                                        null !== g && (n = i(n, d(r.breakpoints, h, b, g, e)), c = !0)
                                    }
                                }
                            return c && (n = function(e) {
                                var t = {};
                                return Object.keys(e).sort((function(e, t) {
                                    return e.localeCompare(t, void 0, {
                                        numeric: !0,
                                        sensitivity: "base"
                                    })
                                })).forEach((function(r) {
                                    t[r] = e[r]
                                })), t
                            }(n)), n
                        };
                    n.config = t, n.propNames = Object.keys(t), n.cache = r;
                    var c = Object.keys(t).filter((function(e) {
                        return "config" !== e
                    }));
                    return c.length > 1 && c.forEach((function(r) {
                        var o;
                        n[r] = e(((o = {})[r] = t[r], o))
                    })), n
                },
                p = function(e, t, r, n, i) {
                    var a = {};
                    return n.slice(0, e.length).forEach((function(n, s) {
                        var c, l = e[s],
                            u = t(n, r, i);
                        l ? o()(a, ((c = {})[l] = o()({}, a[l], u), c)) : o()(a, u)
                    })), a
                },
                d = function(e, t, r, n, i) {
                    var a = {};
                    for (var c in n) {
                        var l = e[c],
                            u = t(n[c], r, i);
                        if (l) {
                            var p, d = s(l);
                            o()(a, ((p = {})[d] = o()({}, a[d], u), p))
                        } else o()(a, u)
                    }
                    return a
                },
                f = function(e) {
                    var t = e.properties,
                        r = e.property,
                        n = e.scale,
                        o = e.transform,
                        i = void 0 === o ? c : o,
                        a = e.defaultScale;
                    t = t || [r];
                    var s = function(e, r, n) {
                        var o = {},
                            a = i(e, r, n);
                        if (null !== a) return t.forEach((function(e) {
                            o[e] = a
                        })), o
                    };
                    return s.scale = n, s.defaults = a, s
                },
                h = function(e) {
                    void 0 === e && (e = {});
                    var t = {};
                    return Object.keys(e).forEach((function(r) {
                        var n = e[r];
                        t[r] = !0 !== n ? "function" !== typeof n ? f(n) : n : f({
                            property: r,
                            scale: r
                        })
                    })), u(t)
                },
                g = function() {
                    for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    r.forEach((function(t) {
                        t && t.config && o()(e, t.config)
                    }));
                    var i = u(e);
                    return i
                },
                b = h({
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function(e, t) {
                            return l(t, e, ! function(e) {
                                return "number" === typeof e && !isNaN(e)
                            }(e) || e > 1 ? e : 100 * e + "%")
                        }
                    },
                    height: {
                        property: "height",
                        scale: "sizes"
                    },
                    minWidth: {
                        property: "minWidth",
                        scale: "sizes"
                    },
                    minHeight: {
                        property: "minHeight",
                        scale: "sizes"
                    },
                    maxWidth: {
                        property: "maxWidth",
                        scale: "sizes"
                    },
                    maxHeight: {
                        property: "maxHeight",
                        scale: "sizes"
                    },
                    size: {
                        properties: ["width", "height"],
                        scale: "sizes"
                    },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0
                });
            const m = b;
            var v = {
                color: {
                    property: "color",
                    scale: "colors"
                },
                backgroundColor: {
                    property: "backgroundColor",
                    scale: "colors"
                },
                opacity: !0
            };
            v.bg = v.backgroundColor;
            var y = h(v);
            const x = y;
            var w = h({
                fontFamily: {
                    property: "fontFamily",
                    scale: "fonts"
                },
                fontSize: {
                    property: "fontSize",
                    scale: "fontSizes",
                    defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                },
                fontWeight: {
                    property: "fontWeight",
                    scale: "fontWeights"
                },
                lineHeight: {
                    property: "lineHeight",
                    scale: "lineHeights"
                },
                letterSpacing: {
                    property: "letterSpacing",
                    scale: "letterSpacings"
                },
                textAlign: !0,
                fontStyle: !0
            });
            const k = w;
            var C = h({
                alignItems: !0,
                alignContent: !0,
                justifyItems: !0,
                justifyContent: !0,
                flexWrap: !0,
                flexDirection: !0,
                flex: !0,
                flexGrow: !0,
                flexShrink: !0,
                flexBasis: !0,
                justifySelf: !0,
                alignSelf: !0,
                order: !0
            });
            const S = C;
            var A = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                _ = h({
                    gridGap: {
                        property: "gridGap",
                        scale: "space",
                        defaultScale: A.space
                    },
                    gridColumnGap: {
                        property: "gridColumnGap",
                        scale: "space",
                        defaultScale: A.space
                    },
                    gridRowGap: {
                        property: "gridRowGap",
                        scale: "space",
                        defaultScale: A.space
                    },
                    gridColumn: !0,
                    gridRow: !0,
                    gridAutoFlow: !0,
                    gridAutoColumns: !0,
                    gridAutoRows: !0,
                    gridTemplateColumns: !0,
                    gridTemplateRows: !0,
                    gridTemplateAreas: !0,
                    gridArea: !0
                });
            const B = _;
            var E = {
                border: {
                    property: "border",
                    scale: "borders"
                },
                borderWidth: {
                    property: "borderWidth",
                    scale: "borderWidths"
                },
                borderStyle: {
                    property: "borderStyle",
                    scale: "borderStyles"
                },
                borderColor: {
                    property: "borderColor",
                    scale: "colors"
                },
                borderRadius: {
                    property: "borderRadius",
                    scale: "radii"
                },
                borderTop: {
                    property: "borderTop",
                    scale: "borders"
                },
                borderTopLeftRadius: {
                    property: "borderTopLeftRadius",
                    scale: "radii"
                },
                borderTopRightRadius: {
                    property: "borderTopRightRadius",
                    scale: "radii"
                },
                borderRight: {
                    property: "borderRight",
                    scale: "borders"
                },
                borderBottom: {
                    property: "borderBottom",
                    scale: "borders"
                },
                borderBottomLeftRadius: {
                    property: "borderBottomLeftRadius",
                    scale: "radii"
                },
                borderBottomRightRadius: {
                    property: "borderBottomRightRadius",
                    scale: "radii"
                },
                borderLeft: {
                    property: "borderLeft",
                    scale: "borders"
                },
                borderX: {
                    properties: ["borderLeft", "borderRight"],
                    scale: "borders"
                },
                borderY: {
                    properties: ["borderTop", "borderBottom"],
                    scale: "borders"
                },
                borderTopWidth: {
                    property: "borderTopWidth",
                    scale: "borderWidths"
                },
                borderTopColor: {
                    property: "borderTopColor",
                    scale: "colors"
                },
                borderTopStyle: {
                    property: "borderTopStyle",
                    scale: "borderStyles"
                }
            };
            E.borderTopLeftRadius = {
                property: "borderTopLeftRadius",
                scale: "radii"
            }, E.borderTopRightRadius = {
                property: "borderTopRightRadius",
                scale: "radii"
            }, E.borderBottomWidth = {
                property: "borderBottomWidth",
                scale: "borderWidths"
            }, E.borderBottomColor = {
                property: "borderBottomColor",
                scale: "colors"
            }, E.borderBottomStyle = {
                property: "borderBottomStyle",
                scale: "borderStyles"
            }, E.borderBottomLeftRadius = {
                property: "borderBottomLeftRadius",
                scale: "radii"
            }, E.borderBottomRightRadius = {
                property: "borderBottomRightRadius",
                scale: "radii"
            }, E.borderLeftWidth = {
                property: "borderLeftWidth",
                scale: "borderWidths"
            }, E.borderLeftColor = {
                property: "borderLeftColor",
                scale: "colors"
            }, E.borderLeftStyle = {
                property: "borderLeftStyle",
                scale: "borderStyles"
            }, E.borderRightWidth = {
                property: "borderRightWidth",
                scale: "borderWidths"
            }, E.borderRightColor = {
                property: "borderRightColor",
                scale: "colors"
            }, E.borderRightStyle = {
                property: "borderRightStyle",
                scale: "borderStyles"
            };
            var T = h(E);
            const R = T;
            var I = {
                background: !0,
                backgroundImage: !0,
                backgroundSize: !0,
                backgroundPosition: !0,
                backgroundRepeat: !0
            };
            I.bgImage = I.backgroundImage, I.bgSize = I.backgroundSize, I.bgPosition = I.backgroundPosition, I.bgRepeat = I.backgroundRepeat;
            var z = h(I);
            const D = z;
            var j = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                L = h({
                    position: !0,
                    zIndex: {
                        property: "zIndex",
                        scale: "zIndices"
                    },
                    top: {
                        property: "top",
                        scale: "space",
                        defaultScale: j.space
                    },
                    right: {
                        property: "right",
                        scale: "space",
                        defaultScale: j.space
                    },
                    bottom: {
                        property: "bottom",
                        scale: "space",
                        defaultScale: j.space
                    },
                    left: {
                        property: "left",
                        scale: "space",
                        defaultScale: j.space
                    }
                });
            const O = L;
            var F = {
                    space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
                },
                P = function(e) {
                    return "number" === typeof e && !isNaN(e)
                },
                H = function(e, t) {
                    if (!P(e)) return l(t, e, e);
                    var r = e < 0,
                        n = Math.abs(e),
                        o = l(t, n, n);
                    return P(o) ? o * (r ? -1 : 1) : r ? "-" + o : o
                },
                U = {};
            U.margin = {
                margin: {
                    property: "margin",
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                },
                marginTop: {
                    property: "marginTop",
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                },
                marginRight: {
                    property: "marginRight",
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                },
                marginBottom: {
                    property: "marginBottom",
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                },
                marginLeft: {
                    property: "marginLeft",
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                },
                marginX: {
                    properties: ["marginLeft", "marginRight"],
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                },
                marginY: {
                    properties: ["marginTop", "marginBottom"],
                    scale: "space",
                    transform: H,
                    defaultScale: F.space
                }
            }, U.margin.m = U.margin.margin, U.margin.mt = U.margin.marginTop, U.margin.mr = U.margin.marginRight, U.margin.mb = U.margin.marginBottom, U.margin.ml = U.margin.marginLeft, U.margin.mx = U.margin.marginX, U.margin.my = U.margin.marginY, U.padding = {
                padding: {
                    property: "padding",
                    scale: "space",
                    defaultScale: F.space
                },
                paddingTop: {
                    property: "paddingTop",
                    scale: "space",
                    defaultScale: F.space
                },
                paddingRight: {
                    property: "paddingRight",
                    scale: "space",
                    defaultScale: F.space
                },
                paddingBottom: {
                    property: "paddingBottom",
                    scale: "space",
                    defaultScale: F.space
                },
                paddingLeft: {
                    property: "paddingLeft",
                    scale: "space",
                    defaultScale: F.space
                },
                paddingX: {
                    properties: ["paddingLeft", "paddingRight"],
                    scale: "space",
                    defaultScale: F.space
                },
                paddingY: {
                    properties: ["paddingTop", "paddingBottom"],
                    scale: "space",
                    defaultScale: F.space
                }
            }, U.padding.p = U.padding.padding, U.padding.pt = U.padding.paddingTop, U.padding.pr = U.padding.paddingRight, U.padding.pb = U.padding.paddingBottom, U.padding.pl = U.padding.paddingLeft, U.padding.px = U.padding.paddingX, U.padding.py = U.padding.paddingY;
            var M = h(U.margin),
                N = h(U.padding),
                W = g(M, N);
            var V = h({
                boxShadow: {
                    property: "boxShadow",
                    scale: "shadows"
                },
                textShadow: {
                    property: "textShadow",
                    scale: "shadows"
                }
            });
            const G = V;
            var Y = r("OBVT"),
                q = function(e) {
                    var t, r, n = e.scale,
                        o = e.prop,
                        i = void 0 === o ? "variant" : o,
                        a = e.variants,
                        s = void 0 === a ? {} : a,
                        c = e.key;
                    r = Object.keys(s).length ? function(e, t, r) {
                        return (0, Y.default)(l(t, e, null))(r.theme)
                    } : function(e, t) {
                        return l(t, e, null)
                    }, r.scale = n || c, r.defaults = s;
                    var p = ((t = {})[i] = r, t);
                    return u(p)
                };
            var X = q({
                    key: "buttons"
                }),
                $ = q({
                    key: "textStyles",
                    prop: "textStyle"
                }),
                K = q({
                    key: "colorStyles",
                    prop: "colors"
                }),
                Z = m.width,
                Q = m.height,
                J = m.minWidth,
                ee = m.minHeight,
                te = m.maxWidth,
                re = m.maxHeight,
                ne = m.size,
                oe = m.verticalAlign,
                ie = m.display,
                ae = m.overflow,
                se = m.overflowX,
                ce = m.overflowY,
                le = x.opacity,
                ue = k.fontSize,
                pe = k.fontFamily,
                de = k.fontWeight,
                fe = k.lineHeight,
                he = k.textAlign,
                ge = k.fontStyle,
                be = k.letterSpacing,
                me = S.alignItems,
                ve = S.alignContent,
                ye = S.justifyItems,
                xe = S.justifyContent,
                we = S.flexWrap,
                ke = S.flexDirection,
                Ce = S.flex,
                Se = S.flexGrow,
                Ae = S.flexShrink,
                _e = S.flexBasis,
                Be = S.justifySelf,
                Ee = S.alignSelf,
                Te = S.order,
                Re = B.gridGap,
                Ie = B.gridColumnGap,
                ze = B.gridRowGap,
                De = B.gridColumn,
                je = B.gridRow,
                Le = B.gridAutoFlow,
                Oe = B.gridAutoColumns,
                Fe = B.gridAutoRows,
                Pe = B.gridTemplateColumns,
                He = B.gridTemplateRows,
                Ue = B.gridTemplateAreas,
                Me = B.gridArea,
                Ne = R.borderWidth,
                We = R.borderStyle,
                Ve = R.borderColor,
                Ge = R.borderTop,
                Ye = R.borderRight,
                qe = R.borderBottom,
                Xe = R.borderLeft,
                $e = R.borderRadius,
                Ke = D.backgroundImage,
                Ze = D.backgroundSize,
                Qe = D.backgroundPosition,
                Je = D.backgroundRepeat,
                et = O.zIndex,
                tt = O.top,
                rt = O.right,
                nt = O.bottom,
                ot = O.left,
                it = function(e) {
                    var t = e.prop,
                        r = e.cssProperty,
                        n = e.alias,
                        o = e.key,
                        i = e.transformValue,
                        a = e.scale,
                        s = e.properties,
                        c = {};
                    return c[t] = f({
                        properties: s,
                        property: r || t,
                        scale: o,
                        defaultScale: a,
                        transform: i
                    }), n && (c[n] = c[t]), u(c)
                }
        },
        M5j3: (e, t, r) => {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }

            function o() {
                return n.apply(this, arguments)
            }
            r.d(t, {
                A: () => o
            })
        },
        "N/Z2": (e, t, r) => {
            "use strict";

            function n(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            r.d(t, {
                A: () => n
            })
        }
    }
]);
//# debugId=8dfa2344-d245-5411-8990-8fe0f7fb57cc