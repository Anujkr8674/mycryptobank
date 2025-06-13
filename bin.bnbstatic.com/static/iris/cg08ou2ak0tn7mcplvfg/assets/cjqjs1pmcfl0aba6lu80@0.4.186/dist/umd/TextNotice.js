(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_TextNotice;
            (() => {
                "use strict";
                var e, t = {
                        16927: (e, t, r) => {
                            r.r(t), r.d(t, {
                                default: () => p
                            });
                            var o = r(24586),
                                i = r(43477),
                                n = r.n(i),
                                a = r(4139),
                                c = r(6668),
                                s = r(35769);

                            function l(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var o = Object.getOwnPropertySymbols(e);
                                    t && (o = o.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    }))), r.push.apply(r, o)
                                }
                                return r
                            }
                            var u = {
                                    mb: "8px",
                                    variant: "text.subtitle1",
                                    color: "t.primary"
                                },
                                _ = {
                                    variant: "text.caption",
                                    color: "t.third"
                                };
                            const p = (0, a.j)((e => {
                                var {
                                    title: t,
                                    content: r,
                                    alignTitle: a,
                                    editorTheme: p,
                                    isMarketing: b
                                } = e, f = (0, i.useMemo)((() => function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? l(Object(r), !0).forEach((function(t) {
                                            (0, o.A)(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({}, b && {
                                    gap: s.Lk.GAP
                                })), [b]);
                                return n().createElement(c.R, {
                                    editorTheme: p,
                                    isMarketing: b,
                                    title: t,
                                    content: r,
                                    alignTitle: a,
                                    defaultTitleSx: u,
                                    defaultContentSx: _,
                                    titleSx: f
                                })
                            }), {
                                trackCompName: "TextNotice"
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
                    var i = r[e];
                    if (void 0 !== i) return i.exports;
                    var n = r[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return t[e].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports
                }
                o.m = t, e = [], o.O = (t, r, i, n) => {
                    if (!r) {
                        var a = 1 / 0;
                        for (u = 0; u < e.length; u++) {
                            for (var [r, i, n] = e[u], c = !0, s = 0; s < r.length; s++)(!1 & n || a >= n) && Object.keys(o.O).every((e => o.O[e](r[s]))) ? r.splice(s--, 1) : (c = !1, n < a && (a = n));
                            if (c) {
                                e.splice(u--, 1);
                                var l = i();
                                void 0 !== l && (t = l)
                            }
                        }
                        return t
                    }
                    n = n || 0;
                    for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
                    e[u] = [r, i, n]
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
                }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), o.j = 194, (() => {
                    var e = {
                        194: 0
                    };
                    o.O.j = t => 0 === e[t];
                    var t = (t, r) => {
                            var i, n, [a, c, s] = r,
                                l = 0;
                            if (a.some((t => 0 !== e[t]))) {
                                for (i in c) o.o(c, i) && (o.m[i] = c[i]);
                                if (s) var u = s(o)
                            }
                            for (t && t(r); l < a.length; l++) n = a[l], o.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                            return o.O(u)
                        },
                        r = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })();
                var i = o.O(void 0, [121], (() => o(16927)));
                i = o.O(i), _iris__binance_iris_muses_TextNotice = i
            })();
            return _iris__binance_iris_muses_TextNotice.default ? _iris__binance_iris_muses_TextNotice.default : _iris__binance_iris_muses_TextNotice
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "TextNotice"], factory()
    ])
})()