(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_StepPanel;
            (() => {
                "use strict";
                var e, t = {
                        24110: (e, t, r) => {
                            r.r(t), r.d(t, {
                                default: () => S
                            });
                            var a = r(24586),
                                n = r(89575),
                                o = r(43477),
                                i = r.n(o),
                                s = r(98424),
                                c = r(92484),
                                l = r(4139),
                                p = r(86673),
                                d = function(e) {
                                    return e.INSIDE = "inside", e.OUTSIDE = "outside", e
                                }({}),
                                u = r(20398),
                                f = r(66186),
                                m = r(96876),
                                b = r(80524),
                                x = r(66982);

                            function g(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    t && (a = a.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    }))), r.push.apply(r, a)
                                }
                                return r
                            }

                            function y(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                                        (0, a.A)(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }
                            var h = e => {
                                var {
                                    imgSrc: t,
                                    title: r,
                                    date: a,
                                    description: n,
                                    sx: c,
                                    imageSx: l
                                } = e, {
                                    getImageURL: p
                                } = (0, x.CV)(), d = (0, o.useMemo)((() => p(t)), [t]), g = (0, o.useMemo)((() => y({
                                    position: "relative",
                                    borderRadius: "xxlarge",
                                    p: ["16px", "24px"],
                                    display: "inline-flex",
                                    flexDirection: "column",
                                    gap: "sm",
                                    border: "1px solid",
                                    borderColor: "slider.line"
                                }, c)), [c]);
                                return i().createElement(u.A, {
                                    className: "muses-card",
                                    sx: g
                                }, i().createElement(u.A, {
                                    className: "muses-card-image",
                                    sx: {
                                        textAlign: "center"
                                    }
                                }, i().createElement(f.A, {
                                    src: d,
                                    variant: "avatar",
                                    m: "0 auto",
                                    sx: y({
                                        width: [48, 64],
                                        height: [48, 64]
                                    }, l)
                                })), i().createElement(s.A, {
                                    className: "muses-card-content",
                                    sx: {
                                        flexDirection: "column",
                                        gap: "8px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }
                                }, i().createElement(m.h, {
                                    title: r,
                                    sx: {
                                        variant: ["text.subtitle1", "text.headline5", "text.headline5"],
                                        color: "t.link"
                                    }
                                }), i().createElement(m.h, {
                                    title: a,
                                    sx: {
                                        variant: "text.subtitle1",
                                        color: "t.primary"
                                    }
                                }), i().createElement(b.f, {
                                    description: n,
                                    textSx: {
                                        variant: "text.body2",
                                        color: "t.secondary"
                                    }
                                })))
                            };

                            function O(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var a = Object.getOwnPropertySymbols(e);
                                    t && (a = a.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    }))), r.push.apply(r, a)
                                }
                                return r
                            }

                            function _(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                                        (0, a.A)(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }
                            h.displayName = "MusesCard";
                            var v = e => {
                                var {
                                    iconPosition: t,
                                    cards: r = []
                                } = e, {
                                    isMobile: a
                                } = (0, c.Qs)(), l = (0, o.useMemo)((() => {
                                    var e = r.filter((e => !!e.title)),
                                        {
                                            length: t
                                        } = e;
                                    if (!t) return null;
                                    var o = {};
                                    return a || (o.flexBasis = 1 === t ? "33.333333%" : "".concat((0, p.M)(100 / t, 6), "%")), e.map((e => i().createElement(h, (0, n.A)({}, e, {
                                        key: "panel_card_".concat(e.title),
                                        sx: o
                                    }))))
                                }), [r, a]), u = (0, o.useMemo)((() => {
                                    var e = {};
                                    return e["& .step-panel--cardwrap"] = {
                                        flexDirection: a ? "column" : "row",
                                        "& .muses-card:first-of-type .muses-card-image::before": {
                                            display: "none"
                                        },
                                        "& .muses-card:last-of-type .muses-card-image::after": {
                                            display: "none"
                                        }
                                    }, t === d.OUTSIDE && (e["& .muses-card-image"] = _(_({
                                        "&::before": _({
                                            content: "''",
                                            display: "block",
                                            position: "absolute",
                                            zIndex: 1
                                        }, a ? {
                                            backgroundImage: "linear-gradient(to bottom,transparent 0%,transparent 50%,#fcd535 50%,#fcd535 100%)",
                                            backgroundSize: "1px 6px",
                                            backgroundRepeat: "repeat-y",
                                            width: "1px",
                                            height: "calc(50% - 24px + 14px)",
                                            left: "50%",
                                            top: "-14px",
                                            transform: "translateX(-50%)"
                                        } : {
                                            backgroundImage: "linear-gradient(to left,transparent 0%,transparent 50%,#fcd535 50%,#fcd535 100%)",
                                            backgroundSize: "6px 1px",
                                            backgroundRepeat: "repeat-x",
                                            width: "calc(50% - 32px + 12px)",
                                            height: "1px",
                                            top: "50%",
                                            insetInlineStart: "-12px",
                                            transform: "translateY(-50%)"
                                        }),
                                        "&::after": _({
                                            content: "''",
                                            display: "block",
                                            position: "absolute",
                                            zIndex: 1
                                        }, a ? {
                                            backgroundImage: "linear-gradient(to bottom,transparent 0%,transparent 50%,#fcd535 50%,#fcd535 100%)",
                                            backgroundSize: "1px 6px",
                                            backgroundRepeat: "repeat-y",
                                            width: "1px",
                                            height: "calc(50% - 24px + 13px)",
                                            left: "50%",
                                            bottom: "-14px",
                                            transform: "translateX(-50%)"
                                        } : {
                                            backgroundImage: "linear-gradient(to left,transparent 0%,transparent 50%,#fcd535 50%,#fcd535 100%)",
                                            backgroundSize: "6px 1px",
                                            backgroundRepeat: "repeat-x",
                                            width: "calc(50% - 32px + 12px)",
                                            height: "1px",
                                            top: "50%",
                                            insetInlineEnd: "-12px",
                                            transform: "translateY(-50%)"
                                        }),
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    }, a ? {
                                        height: "100%",
                                        transform: "translateX(calc(-100% - 8px))"
                                    } : {
                                        width: "100%",
                                        transform: "translateY(calc(-100% - 8px))"
                                    }), {}, {
                                        "& img": {
                                            position: "relative",
                                            zIndex: 2
                                        }
                                    }), e["& .step-panel--cardwrap"] = _(_({}, e["& .step-panel--cardwrap"]), a ? {
                                        pl: "48px"
                                    } : {
                                        pt: "72px"
                                    })), a && (e["& .muses-card"] = {
                                        flexDirection: "row",
                                        gap: "xs",
                                        "& .muses-card-image": {
                                            display: "inline-flex",
                                            alignItems: "center"
                                        }
                                    }, e["& .muses-card-content"] = {
                                        flex: 1,
                                        alignItems: "flex-start"
                                    }), e
                                }), [a, t]);
                                return i().createElement(s.A, {
                                    sx: _({
                                        flexDirection: "column"
                                    }, u)
                                }, i().createElement(s.A, {
                                    className: "step-panel--cardwrap",
                                    sx: {
                                        alignItems: "stretch",
                                        gap: "md"
                                    }
                                }, l))
                            };
                            v.displayName = "StepPanel";
                            const S = (0, l.j)(v, {
                                trackCompName: "StepPanel"
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

                function a(e) {
                    var n = r[e];
                    if (void 0 !== n) return n.exports;
                    var o = r[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return t[e].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports
                }
                a.m = t, e = [], a.O = (t, r, n, o) => {
                    if (!r) {
                        var i = 1 / 0;
                        for (p = 0; p < e.length; p++) {
                            for (var [r, n, o] = e[p], s = !0, c = 0; c < r.length; c++)(!1 & o || i >= o) && Object.keys(a.O).every((e => a.O[e](r[c]))) ? r.splice(c--, 1) : (s = !1, o < i && (i = o));
                            if (s) {
                                e.splice(p--, 1);
                                var l = n();
                                void 0 !== l && (t = l)
                            }
                        }
                        return t
                    }
                    o = o || 0;
                    for (var p = e.length; p > 0 && e[p - 1][2] > o; p--) e[p] = e[p - 1];
                    e[p] = [r, n, o]
                }, a.n = e => {
                    var t = e && e.__esModule ? () => e.default : () => e;
                    return a.d(t, {
                        a: t
                    }), t
                }, a.d = (e, t) => {
                    for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }, a.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), a.j = 365, (() => {
                    var e = {
                        365: 0
                    };
                    a.O.j = t => 0 === e[t];
                    var t = (t, r) => {
                            var n, o, [i, s, c] = r,
                                l = 0;
                            if (i.some((t => 0 !== e[t]))) {
                                for (n in s) a.o(s, n) && (a.m[n] = s[n]);
                                if (c) var p = c(a)
                            }
                            for (t && t(r); l < i.length; l++) o = i[l], a.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                            return a.O(p)
                        },
                        r = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
                })();
                var n = a.O(void 0, [121], (() => a(24110)));
                n = a.O(n), _iris__binance_iris_muses_StepPanel = n
            })();
            return _iris__binance_iris_muses_StepPanel.default ? _iris__binance_iris_muses_StepPanel.default : _iris__binance_iris_muses_StepPanel
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "StepPanel"], factory()
    ])
})()