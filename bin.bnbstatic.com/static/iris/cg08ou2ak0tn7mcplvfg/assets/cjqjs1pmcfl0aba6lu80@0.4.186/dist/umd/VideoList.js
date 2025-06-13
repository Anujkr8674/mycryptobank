(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_VideoList;
            (() => {
                "use strict";
                var e, t = {
                        80269: (e, t, r) => {
                            r.r(t), r.d(t, {
                                default: () => k
                            });
                            var i = r(89575),
                                n = r(43477),
                                a = r.n(n),
                                o = r(20398),
                                l = r(37057),
                                s = r(4139),
                                c = r(6668),
                                d = r(98424),
                                u = r(97984),
                                m = r(8913),
                                p = r(27703),
                                _ = r(24832),
                                b = r(750),
                                g = {
                                    mt: "24px",
                                    flexDirection: "column",
                                    gap: ["8px", "16px"]
                                },
                                f = {
                                    variant: ["text.subtitle1", "text.headline6", "text.headline6"]
                                },
                                v = {
                                    color: "t.secondary",
                                    variant: ["text.body2", "text.body1", "text.body1"]
                                },
                                x = e => {
                                    var {
                                        desc: t,
                                        src: r,
                                        title: i,
                                        isMarketing: n,
                                        editorTheme: l
                                    } = e, {
                                        primaryColor: s
                                    } = (0, b.cm)(l), {
                                        trackClick: c
                                    } = (0, m.useComponentTrack)();
                                    var x = (0, b.CF)({
                                            isMarketing: n,
                                            primaryColor: s,
                                            standardSx: f
                                        }),
                                        h = (0, b._L)({
                                            isMarketing: n,
                                            primaryColor: s,
                                            standardSx: v
                                        });
                                    return a().createElement(o.A, null, a().createElement(o.A, {
                                        sx: {
                                            borderRadius: "24px",
                                            bg: "rgba(0,0,0,0.2)",
                                            minHeight: 120,
                                            "& iframe": {
                                                borderRadius: "24px"
                                            }
                                        }
                                    }, a().createElement(p.C, {
                                        src: r,
                                        onClick: function() {
                                            c({
                                                url: r
                                            })
                                        }
                                    })), a().createElement(d.A, {
                                        sx: g
                                    }, i && a().createElement(u.A, {
                                        sx: x
                                    }, i), a().createElement(_.R, {
                                        sx: h,
                                        content: t
                                    })))
                                },
                                h = r(97940),
                                y = r(23769);
                            const k = (0, s.j)((e => {
                                var {
                                    title: t,
                                    alignTitle: r,
                                    videos: s = [],
                                    videoLimitDesktop: d,
                                    videoLimitTablet: u,
                                    videoLimitMobile: m,
                                    isMarketing: p,
                                    editorTheme: _
                                } = e, {
                                    t: b
                                } = (0, h.W)(), g = (0, y.t)().getResponsiveValue({
                                    desktop: d,
                                    tablet: u,
                                    mobile: m
                                }), f = (0, n.useCallback)(((e, t) => {
                                    if (!e) return t;
                                    var r = parseInt(g, 10);
                                    return r || t
                                }), [g]), [v, k] = (0, n.useState)(f(g, s.length)), S = (0, n.useCallback)((() => {
                                    k(s.length)
                                }), [s]);
                                (0, n.useEffect)((() => {
                                    k(f(g, s.length))
                                }), [g, s.length]);
                                var E = v >= s.length,
                                    C = parseInt(g, 10) || 3,
                                    T = E ? s : s.slice(0, C);
                                return a().createElement(c.R, {
                                    editorTheme: _,
                                    isMarketing: p,
                                    title: t,
                                    alignTitle: r
                                }, a().createElement(o.A, {
                                    sx: {
                                        display: "grid",
                                        gridTemplateColumns: ["1fr", "1fr", "1fr 1fr 1fr"],
                                        columnGap: "24px",
                                        rowGap: p ? "64px" : "48px",
                                        minHeight: 120,
                                        color: "t.primary"
                                    }
                                }, T.map(((e, t) => a().createElement(x, (0, i.A)({
                                    key: "".concat(e.src).concat(t)
                                }, e, {
                                    isMarketing: p,
                                    editorTheme: _
                                }))))), !E && a().createElement(o.A, {
                                    sx: {
                                        mt: "48px",
                                        textAlign: "center"
                                    }
                                }, a().createElement(l.$, {
                                    colorStyle: "secondary",
                                    sz: "large",
                                    onClick: S
                                }, b("video_list_more"))))
                            }), {
                                trackCompName: "VideoList"
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

                function i(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var a = r[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return t[e].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports
                }
                i.m = t, e = [], i.O = (t, r, n, a) => {
                    if (!r) {
                        var o = 1 / 0;
                        for (d = 0; d < e.length; d++) {
                            for (var [r, n, a] = e[d], l = !0, s = 0; s < r.length; s++)(!1 & a || o >= a) && Object.keys(i.O).every((e => i.O[e](r[s]))) ? r.splice(s--, 1) : (l = !1, a < o && (o = a));
                            if (l) {
                                e.splice(d--, 1);
                                var c = n();
                                void 0 !== c && (t = c)
                            }
                        }
                        return t
                    }
                    a = a || 0;
                    for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
                    e[d] = [r, n, a]
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
                }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), i.j = 92, (() => {
                    var e = {
                        92: 0
                    };
                    i.O.j = t => 0 === e[t];
                    var t = (t, r) => {
                            var n, a, [o, l, s] = r,
                                c = 0;
                            if (o.some((t => 0 !== e[t]))) {
                                for (n in l) i.o(l, n) && (i.m[n] = l[n]);
                                if (s) var d = s(i)
                            }
                            for (t && t(r); c < o.length; c++) a = o[c], i.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                            return i.O(d)
                        },
                        r = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })();
                var n = i.O(void 0, [121], (() => i(80269)));
                n = i.O(n), _iris__binance_iris_muses_VideoList = n
            })();
            return _iris__binance_iris_muses_VideoList.default ? _iris__binance_iris_muses_VideoList.default : _iris__binance_iris_muses_VideoList
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "VideoList"], factory()
    ])
})()