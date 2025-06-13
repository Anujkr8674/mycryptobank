(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_FAQPane;
            (() => {
                "use strict";
                var e, t = {
                        54455: (e, t, r) => {
                            r.r(t), r.d(t, {
                                default: () => j
                            });
                            var n = r(24586),
                                i = r(43477),
                                o = r.n(i),
                                a = r(98424),
                                l = r(97984),
                                s = r(20398),
                                c = r(15241),
                                p = r(49301);
                            const u = function(e) {
                                return o().createElement(p.A, (0, c.A)({
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 24 24",
                                    fill: "none"
                                }, e), o().createElement("path", {
                                    d: "M3 10.5v3h18v-3H3z",
                                    fill: "currentColor"
                                }))
                            };
                            const x = function(e) {
                                return o().createElement(p.A, (0, c.A)({
                                    width: "1em",
                                    height: "1em",
                                    viewBox: "0 0 24 24",
                                    fill: "none"
                                }, e), o().createElement("path", {
                                    d: "M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z",
                                    fill: "currentColor"
                                }))
                            };
                            var d = r(88238),
                                m = r(4139),
                                f = r(6668),
                                _ = r(24832),
                                b = r(750),
                                h = r(86673);

                            function v(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    t && (n = n.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    }))), r.push.apply(r, n)
                                }
                                return r
                            }

                            function y(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                                        (0, n.A)(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }
                            var g = {
                                    variant: ["text.subtitle1", "text.subtitle3", "text.subtitle3"]
                                },
                                O = {
                                    variant: ["text.subtitle1", "text.headline6", "text.headline6"]
                                },
                                S = {
                                    variant: ["text.caption", "text.body1", "text.body1"],
                                    color: "t.secondary"
                                },
                                E = e => {
                                    var {
                                        title: t,
                                        subTitle: r,
                                        infos: n = [],
                                        alignTitle: l,
                                        editorTheme: s,
                                        isMarketing: c
                                    } = e, p = (0, d.B)(), [u, x] = (0, i.useState)(null), {
                                        primaryColor: m
                                    } = (0, b.cm)(s), _ = (0, i.useMemo)((() => ({
                                        flexDirection: "column",
                                        gap: c ? ["30px", "40px"] : "16px"
                                    })), [c]);
                                    return o().createElement(f.R, {
                                        editorTheme: s,
                                        isMarketing: c,
                                        title: t,
                                        subTitle: r,
                                        alignTitle: l
                                    }, o().createElement(a.A, {
                                        sx: _
                                    }, n.map(((e, r) => o().createElement(E.Question, {
                                        key: r,
                                        isMarketing: c,
                                        primaryColor: m,
                                        open: r === u,
                                        onClick: () => {
                                            p({
                                                elementId: "faq",
                                                extraInfo: {
                                                    title: t,
                                                    index: r,
                                                    ModuleTitle: "FAQ"
                                                }
                                            }), x((e => e === r ? null : r))
                                        },
                                        title: e.title,
                                        content: e.content,
                                        index: r
                                    })))))
                                };
                            E.Question = e => {
                                var {
                                    isMarketing: t = !1,
                                    primaryColor: r,
                                    open: n,
                                    title: c,
                                    content: p,
                                    onClick: d,
                                    index: m
                                } = e, f = (0, i.useMemo)((() => n ? o().createElement(u, {
                                    size: [16, 24],
                                    sx: {
                                        path: {
                                            fill: "t.primary"
                                        }
                                    }
                                }) : o().createElement(x, {
                                    size: [16, 24],
                                    sx: {
                                        path: {
                                            fill: "t.primary"
                                        }
                                    }
                                })), [n]), v = (0, b.wn)({
                                    isMarketing: t,
                                    primaryColor: r,
                                    standardSx: g,
                                    extraSx: y({}, t && {
                                        position: "relative",
                                        top: "-4px"
                                    })
                                }), E = (0, b.jw)({
                                    isMarketing: t,
                                    primaryColor: r,
                                    standardSx: O,
                                    extraSx: {
                                        flex: 1
                                    }
                                }), j = (0, b._L)({
                                    isMarketing: t,
                                    primaryColor: r,
                                    standardSx: S,
                                    extraSx: y({
                                        transition: "0.1s all",
                                        pl: ["25px", "52px"],
                                        pr: ["24px", "40px"]
                                    }, n ? {
                                        pt: "16px"
                                    } : {
                                        pt: 0,
                                        height: 0,
                                        overflow: "hidden"
                                    })
                                });
                                return o().createElement(a.A, {
                                    flexDirection: "column",
                                    sx: {
                                        bg: n ? "modalBg" : void 0,
                                        py: t ? ["16px", "24px"] : "16px",
                                        px: t ? ["16px", "24px"] : "16px",
                                        borderRadius: "12px",
                                        "&:hover": {
                                            bg: "modalBg"
                                        }
                                    }
                                }, o().createElement(a.A, {
                                    sx: {
                                        cursor: "pointer",
                                        alignItems: "start",
                                        color: "t.primary"
                                    },
                                    onClick: d
                                }, o().createElement(l.A, {
                                    sx: v
                                }, (0, h.y)(m + 1)), o().createElement(s.A, {
                                    sx: {
                                        mx: ["8px", "16px"],
                                        flex: 1
                                    }
                                }, o().createElement(l.A, {
                                    sx: E,
                                    children: c
                                })), f), o().createElement(_.R, {
                                    sx: j,
                                    content: p
                                }))
                            };
                            const j = (0, m.j)(E, {
                                trackCompName: "FAQ"
                            })
                        },
                        43477: e => {
                            e.exports = __IRIS_GLOBAL_MODULES__.React
                        },
                        11027: e => {
                            e.exports = __IRIS_MUSES__.BinanceTrack
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

                function n(e) {
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var o = r[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return t[e].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
                }
                n.m = t, e = [], n.O = (t, r, i, o) => {
                    if (!r) {
                        var a = 1 / 0;
                        for (p = 0; p < e.length; p++) {
                            for (var [r, i, o] = e[p], l = !0, s = 0; s < r.length; s++)(!1 & o || a >= o) && Object.keys(n.O).every((e => n.O[e](r[s]))) ? r.splice(s--, 1) : (l = !1, o < a && (a = o));
                            if (l) {
                                e.splice(p--, 1);
                                var c = i();
                                void 0 !== c && (t = c)
                            }
                        }
                        return t
                    }
                    o = o || 0;
                    for (var p = e.length; p > 0 && e[p - 1][2] > o; p--) e[p] = e[p - 1];
                    e[p] = [r, i, o]
                }, n.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return n.d(t, {
                        a: t
                    }), t
                }, n.d = (e, t) => {
                    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, n.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), n.j = 31, (() => {
                    var e = {
                        31: 0
                    };
                    n.O.j = t => 0 === e[t];
                    var t = (t, r) => {
                            var i, o, [a, l, s] = r,
                                c = 0;
                            if (a.some((t => 0 !== e[t]))) {
                                for (i in l) n.o(l, i) && (n.m[i] = l[i]);
                                if (s) var p = s(n)
                            }
                            for (t && t(r); c < a.length; c++) o = a[c], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                            return n.O(p)
                        },
                        r = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })();
                var i = n.O(void 0, [121], (() => n(54455)));
                i = n.O(i), _iris__binance_iris_muses_FAQPane = i
            })();
            return _iris__binance_iris_muses_FAQPane.default ? _iris__binance_iris_muses_FAQPane.default : _iris__binance_iris_muses_FAQPane
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "FAQPane"], factory()
    ])
})()