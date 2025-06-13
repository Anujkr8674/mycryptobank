(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_HorizontalCards;
            (() => {
                "use strict";
                var e, t = {
                        49579: (e, t, r) => {
                            r.r(t), r.d(t, {
                                default: () => j
                            });
                            var o = r(89575),
                                n = r(43477),
                                i = r.n(n),
                                a = r(98424),
                                s = r(4139),
                                c = r(6668),
                                l = r(24586),
                                p = r(20398),
                                u = r(97984),
                                d = r(66186),
                                b = r(92484),
                                m = r(24832),
                                _ = r(750),
                                f = r(66982);

                            function x(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    t && (o = o.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    }))), r.push.apply(r, o)
                                }
                                return r
                            }

                            function g(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                                        (0, l.A)(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }
                            var y = {
                                    variant: ["text.subtitle1", "text.subtitle1", "text.headline3"],
                                    mb: ["16px", "16px", "24px"]
                                },
                                h = {
                                    color: "t.secondary",
                                    variant: ["text.body2", "text.body2", "text.largeBody"]
                                },
                                v = e => {
                                    var {
                                        title: t,
                                        description: r,
                                        imageSrc: o,
                                        isMarketing: s,
                                        editorTheme: c
                                    } = e, {
                                        isDesktop: l
                                    } = (0, b.Qs)(), {
                                        primaryColor: x
                                    } = (0, _.cm)(c), {
                                        getImageURL: v
                                    } = (0, f.CV)(), O = (0, n.useMemo)((() => {
                                        var e = {};
                                        return l ? e.justifyContent = "space-between" : e.flexDirection = "column-reverse", e
                                    }), [l]), j = (0, n.useMemo)((() => l ? {
                                        flex: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column"
                                    } : {}), [l]), S = (0, _.CF)({
                                        isMarketing: s,
                                        primaryColor: x,
                                        standardSx: y,
                                        extraSx: g({}, s && {
                                            mb: ["8px", "16px", "40px"]
                                        })
                                    }), k = (0, _._L)({
                                        isMarketing: s,
                                        primaryColor: x,
                                        standardSx: h
                                    }), M = (0, n.useMemo)((() => g({
                                        borderRadius: "24px",
                                        bg: "rgba(0,0,0,0.2)",
                                        aspectRatio: s ? "576/324" : "368/192",
                                        width: ["100%", "100%", "".concat(s ? 576 : 368, "px")],
                                        height: ["auto", "auto", "".concat(s ? 324 : 192, "px")]
                                    }, l ? {
                                        ml: "48px"
                                    } : {
                                        mb: "24px"
                                    })), [l, s]);
                                    return i().createElement(a.A, {
                                        sx: O
                                    }, i().createElement(p.A, {
                                        sx: j
                                    }, t && i().createElement(u.A, {
                                        sx: S
                                    }, t), i().createElement(m.R, {
                                        sx: k,
                                        content: r
                                    })), i().createElement(p.A, {
                                        sx: M
                                    }, i().createElement(d.A, {
                                        src: v(o),
                                        sx: {
                                            width: "100%",
                                            display: "block"
                                        }
                                    })))
                                },
                                O = r(35769);
                            const j = (0, s.j)((e => {
                                var {
                                    title: t,
                                    alignTitle: r,
                                    cards: s,
                                    isMarketing: l,
                                    editorTheme: p
                                } = e, u = (0, n.useMemo)((() => ({
                                    flexDirection: "column",
                                    gap: l ? O.Lk.GAP3 : O.Lk.GAP
                                })), [l]);
                                return i().createElement(c.R, {
                                    editorTheme: p,
                                    isMarketing: l,
                                    title: t,
                                    alignTitle: r
                                }, i().createElement(a.A, {
                                    sx: u
                                }, s.map(((e, t) => i().createElement(v, (0, o.A)({}, e, {
                                    key: "".concat(t),
                                    isMarketing: l,
                                    editorTheme: p
                                }))))))
                            }), {
                                trackCompName: "HorizontalCards"
                            })
                        },
                        43477: e => {
                            e.exports = __IRIS_GLOBAL_MODULES__.React
                        },
                        32336: e => {
                            e.exports = __IRIS_MUSES__.EmotionCore
                        },
                        8913: e => {
                            e.exports = __IRIS_MUSES__.MusesComponentTrack
                        },
                        48753: e => {
                            e.exports = __IRIS_MUSES__.ReactRedux
                        }
                    },
                    r = {};

                function o(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var i = r[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return t[e].call(i.exports, i, i.exports, o), i.loaded = !0, i.exports
                }
                o.m = t, e = [], o.O = (t, r, n, i) => {
                    if (!r) {
                        var a = 1 / 0;
                        for (p = 0; p < e.length; p++) {
                            for (var [r, n, i] = e[p], s = !0, c = 0; c < r.length; c++)(!1 & i || a >= i) && Object.keys(o.O).every((e => o.O[e](r[c]))) ? r.splice(c--, 1) : (s = !1, i < a && (a = i));
                            if (s) {
                                e.splice(p--, 1);
                                var l = n();
                                void 0 !== l && (t = l)
                            }
                        }
                        return t
                    }
                    i = i || 0;
                    for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
                    e[p] = [r, n, i]
                }, o.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return o.d(t, {
                        a: t
                    }), t
                }, o.d = (e, t) => {
                    for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, o.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), o.j = 816, (() => {
                    var e = {
                        816: 0
                    };
                    o.O.j = t => 0 === e[t];
                    var t = (t, r) => {
                            var n, i, [a, s, c] = r,
                                l = 0;
                            if (a.some((t => 0 !== e[t]))) {
                                for (n in s) o.o(s, n) && (o.m[n] = s[n]);
                                if (c) var p = c(o)
                            }
                            for (t && t(r); l < a.length; l++) i = a[l], o.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                            return o.O(p)
                        },
                        r = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })();
                var n = o.O(void 0, [121], (() => o(49579)));
                n = o.O(n), _iris__binance_iris_muses_HorizontalCards = n
            })();
            return _iris__binance_iris_muses_HorizontalCards.default ? _iris__binance_iris_muses_HorizontalCards.default : _iris__binance_iris_muses_HorizontalCards
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "HorizontalCards"], factory()
    ])
})()