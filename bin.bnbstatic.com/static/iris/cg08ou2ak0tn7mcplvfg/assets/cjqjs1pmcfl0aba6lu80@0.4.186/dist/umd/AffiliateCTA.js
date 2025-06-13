(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_AffiliateCTA;
            (() => {
                "use strict";
                var e, t = {
                        82947: (e, t, r) => {
                            r.r(t), r.d(t, {
                                default: () => d
                            });
                            var i = r(24586),
                                n = r(43477),
                                o = r.n(n),
                                a = r(37057),
                                l = r(78422),
                                s = r(88238),
                                c = r(4139),
                                u = r(6668),
                                _ = r(750),
                                b = r(35769);

                            function f(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    }))), r.push.apply(r, i)
                                }
                                return r
                            }
                            var p = {
                                variant: ["text.subtitle2", "text.subtitle1", "text.subtitle1"]
                            };
                            const d = (0, c.j)((e => {
                                var {
                                    title: t,
                                    subTitle: r,
                                    alignTitle: c,
                                    btnText: d,
                                    btnLink: O,
                                    isMarketing: v,
                                    editorTheme: h
                                } = e, g = !!d, m = (0, s.B)(), y = (0, n.useCallback)((() => {
                                    m({
                                        elementId: "AffiliateCTA",
                                        extraInfo: {
                                            index: "null",
                                            link: O,
                                            ModuleTitle: "AffiliateCTA"
                                        }
                                    })
                                }), [O, m]), {
                                    btnSx: S,
                                    btnSz: x
                                } = (0, _.p5)({
                                    isMarketing: v,
                                    standardSx: p
                                }), T = (0, n.useMemo)((() => function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? f(Object(r), !0).forEach((function(t) {
                                            (0, i.A)(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({}, v && {
                                    gap: b.Lk.GAP
                                })), [v]);
                                return o().createElement(u.R, {
                                    editorTheme: h,
                                    isMarketing: v,
                                    title: t,
                                    subTitle: r,
                                    alignTitle: c,
                                    titleSx: T,
                                    sx: T,
                                    action: g ? o().createElement(a.$, {
                                        as: l.A,
                                        variant: "default",
                                        href: O,
                                        onClick: y,
                                        children: d,
                                        sx: S,
                                        sz: x
                                    }) : null
                                })
                            }), {
                                trackCompName: "TextCTA"
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

                function i(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var o = r[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return t[e].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
                }
                i.m = t, e = [], i.O = (t, r, n, o) => {
                    if (!r) {
                        var a = 1 / 0;
                        for (u = 0; u < e.length; u++) {
                            for (var [r, n, o] = e[u], l = !0, s = 0; s < r.length; s++)(!1 & o || a >= o) && Object.keys(i.O).every((e => i.O[e](r[s]))) ? r.splice(s--, 1) : (l = !1, o < a && (a = o));
                            if (l) {
                                e.splice(u--, 1);
                                var c = n();
                                void 0 !== c && (t = c)
                            }
                        }
                        return t
                    }
                    o = o || 0;
                    for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
                    e[u] = [r, n, o]
                }, i.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return i.d(t, {
                        a: t
                    }), t
                }, i.d = (e, t) => {
                    for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, i.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), i.j = 538, (() => {
                    var e = {
                        538: 0
                    };
                    i.O.j = t => 0 === e[t];
                    var t = (t, r) => {
                            var n, o, [a, l, s] = r,
                                c = 0;
                            if (a.some((t => 0 !== e[t]))) {
                                for (n in l) i.o(l, n) && (i.m[n] = l[n]);
                                if (s) var u = s(i)
                            }
                            for (t && t(r); c < a.length; c++) o = a[c], i.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                            return i.O(u)
                        },
                        r = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })();
                var n = i.O(void 0, [121], (() => i(82947)));
                n = i.O(n), _iris__binance_iris_muses_AffiliateCTA = n
            })();
            return _iris__binance_iris_muses_AffiliateCTA.default ? _iris__binance_iris_muses_AffiliateCTA.default : _iris__binance_iris_muses_AffiliateCTA
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "AffiliateCTA"], factory()
    ])
})()