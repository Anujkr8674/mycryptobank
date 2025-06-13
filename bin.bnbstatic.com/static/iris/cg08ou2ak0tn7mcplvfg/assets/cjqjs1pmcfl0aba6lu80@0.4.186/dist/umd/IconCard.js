(function() {
    function factory() {
        return function() {
            var _iris__binance_iris_muses_IconCard;
            (() => {
                "use strict";
                var e, r = {
                        74408: (e, r, t) => {
                            t.r(r), t.d(r, {
                                default: () => M
                            });
                            var n = t(24586),
                                a = t(89575),
                                i = t(43477),
                                o = t.n(i),
                                s = t(37057),
                                c = t(20398),
                                l = t(98424),
                                p = t(92484),
                                u = t(4139),
                                d = t(6668),
                                m = t(86673),
                                b = t(66186),
                                x = t(97984),
                                g = t(24832),
                                f = t(66982),
                                y = t(750);

                            function _(e, r) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r && (n = n.filter((function(r) {
                                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                                    }))), t.push.apply(t, n)
                                }
                                return t
                            }

                            function O(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var t = null != arguments[r] ? arguments[r] : {};
                                    r % 2 ? _(Object(t), !0).forEach((function(r) {
                                        (0, n.A)(e, r, t[r])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function(r) {
                                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                                    }))
                                }
                                return e
                            }
                            var h = {
                                    variant: ["text.subtitle1", "text.headline6", "text.headline6"],
                                    color: "t.primary",
                                    mb: "8px"
                                },
                                v = {
                                    variant: "text.subtitle2",
                                    color: "t.secondary",
                                    mb: "16px"
                                },
                                j = e => {
                                    var {
                                        imgSrc: r,
                                        title: t,
                                        description: n,
                                        border: a = !0,
                                        extra: s,
                                        sx: p,
                                        imageSx: u,
                                        showImage: d = !0,
                                        editorTheme: m,
                                        isMarketing: _
                                    } = e, {
                                        getImageURL: j
                                    } = (0, f.CV)(), S = (0, i.useMemo)((() => j(r)), [r]), {
                                        primaryColor: w
                                    } = (0, y.cm)(m), C = (0, i.useMemo)((() => O(O({
                                        position: "relative",
                                        borderRadius: "xxlarge",
                                        p: "md",
                                        display: "inline-flex",
                                        flexDirection: "column",
                                        gap: "sm"
                                    }, a ? {
                                        border: "1px solid",
                                        borderColor: "slider.line"
                                    } : {}), p)), [a, p]), E = (0, y.CF)({
                                        isMarketing: _,
                                        primaryColor: w,
                                        standardSx: h,
                                        extraSx: O({}, _ && {
                                            mb: ["16px", "38px"]
                                        })
                                    }), M = (0, y._L)({
                                        isMarketing: _,
                                        primaryColor: w,
                                        standardSx: v,
                                        extraSx: O({}, _ && {
                                            mb: ["8px", "15px"]
                                        })
                                    });
                                    return o().createElement(c.A, {
                                        className: "muses-card",
                                        sx: C
                                    }, d && o().createElement(c.A, {
                                        className: "muses-card-image",
                                        sx: {
                                            textAlign: "center"
                                        }
                                    }, o().createElement(b.A, {
                                        src: S,
                                        variant: "avatar",
                                        m: "0 auto",
                                        sx: O({
                                            width: [48, 64],
                                            height: [48, 64]
                                        }, u)
                                    })), o().createElement(l.A, {
                                        className: "muses-card-content",
                                        sx: {
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }
                                    }, t && o().createElement(x.A, {
                                        sx: E
                                    }, t), o().createElement(g.R, {
                                        sx: M,
                                        content: n
                                    }), s))
                                };

                            function S(e, r) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r && (n = n.filter((function(r) {
                                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                                    }))), t.push.apply(t, n)
                                }
                                return t
                            }

                            function w(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var t = null != arguments[r] ? arguments[r] : {};
                                    r % 2 ? S(Object(t), !0).forEach((function(r) {
                                        (0, n.A)(e, r, t[r])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach((function(r) {
                                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                                    }))
                                }
                                return e
                            }
                            j.displayName = "MusesCard";
                            var C = {
                                    "& .muses-card": {
                                        flexDirection: "row",
                                        gap: "sm",
                                        padding: "0",
                                        "& .muses-card-image": {
                                            display: "inline-flex",
                                            alignItems: "flex-start"
                                        }
                                    },
                                    "& .muses-card-content": {
                                        flex: 1,
                                        alignItems: "flex-start",
                                        '& > [data-bn-type="button"]': {
                                            paddingInlineStart: 0,
                                            py: 0
                                        }
                                    }
                                },
                                E = e => {
                                    var {
                                        title: r,
                                        alignTitle: t,
                                        cards: n = [],
                                        gap: u = 40,
                                        gridCols: b = 3,
                                        editorTheme: x,
                                        isMarketing: g
                                    } = e, {
                                        isDesktop: f
                                    } = (0, p.Qs)(), y = f ? b : 1, _ = (0, i.useMemo)((() => {
                                        var e = n.filter((e => !!e.title)),
                                            {
                                                length: r
                                            } = e;
                                        return r ? e.map(((e, r) => o().createElement(j, (0, a.A)({}, e, {
                                            key: "icon_card_".concat(e.title, "_").concat(r),
                                            border: g,
                                            showImage: !g,
                                            sx: {
                                                gridColumnStart: "span ".concat(Number(null == e ? void 0 : e.span) || 1)
                                            },
                                            imageSx: {
                                                width: 48,
                                                height: 48
                                            },
                                            extra: (() => {
                                                if (!e.btnText) return null;
                                                var r = "".concat(e.btnText, " ").concat(e.btnLink ? ">" : "");
                                                return o().createElement(s.$, {
                                                    variant: "quiet",
                                                    href: e.btnLink,
                                                    sz: "m"
                                                }, r)
                                            })(),
                                            editorTheme: x,
                                            isMarketing: g
                                        })))) : null
                                    }), [n, x, g]), O = (0, i.useMemo)((() => {
                                        var e = n.reduce(((e, r) => e + (Number(null == r ? void 0 : r.span) || 1)), 0) % y;
                                        return e ? o().createElement(c.A, {
                                            className: "card-item-remain",
                                            style: {
                                                gridColumnStart: "span ".concat(y - e)
                                            }
                                        }) : null
                                    }), [n]), h = (0, i.useMemo)((() => {
                                        var e = (y - 1) * u / y,
                                            r = (0, m.M)(100 / y, 6),
                                            t = {
                                                width: "100%",
                                                display: "grid",
                                                rowGap: ["18px", "28px"],
                                                columnGap: "32px",
                                                gridTemplateColumns: "repeat(".concat(y, ", calc(").concat(r, "% - ").concat(e, "px))")
                                            };
                                        return g && (t = w(w({}, t), {}, {
                                            "& .muses-card": {
                                                borderRadius: "24px",
                                                borderWidth: "2px",
                                                py: ["24px", "36px"],
                                                px: ["16px", "48px"]
                                            }
                                        })), t
                                    }), [y, u, g]);
                                    return o().createElement(d.R, {
                                        editorTheme: x,
                                        isMarketing: g,
                                        title: r,
                                        alignTitle: t,
                                        sx: C
                                    }, o().createElement(l.A, {
                                        sx: h
                                    }, _, O))
                                };
                            E.displayName = "IconCard";
                            const M = (0, u.j)(E, {
                                trackCompName: "IconCard"
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
                    t = {};

                function n(e) {
                    var a = t[e];
                    if (void 0 !== a) return a.exports;
                    var i = t[e] = {
                        id: e,
                        loaded: !1,
                        exports: {}
                    };
                    return r[e].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
                }
                n.m = r, e = [], n.O = (r, t, a, i) => {
                    if (!t) {
                        var o = 1 / 0;
                        for (p = 0; p < e.length; p++) {
                            for (var [t, a, i] = e[p], s = !0, c = 0; c < t.length; c++)(!1 & i || o >= i) && Object.keys(n.O).every((e => n.O[e](t[c]))) ? t.splice(c--, 1) : (s = !1, i < o && (o = i));
                            if (s) {
                                e.splice(p--, 1);
                                var l = a();
                                void 0 !== l && (r = l)
                            }
                        }
                        return r
                    }
                    i = i || 0;
                    for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
                    e[p] = [t, a, i]
                }, n.n = e => {
                    var r = e && e.__esModule ? () => e.default : () => e;
                    return n.d(r, {
                        a: r
                    }), r
                }, n.d = (e, r) => {
                    for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r[t]
                    })
                }, n.g = function() {
                    if ("object" == typeof globalThis) return globalThis;
                    try {
                        return this || new Function("return this")()
                    } catch (e) {
                        if ("object" == typeof window) return window
                    }
                }(), n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n.r = e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), n.j = 138, (() => {
                    var e = {
                        138: 0
                    };
                    n.O.j = r => 0 === e[r];
                    var r = (r, t) => {
                            var a, i, [o, s, c] = t,
                                l = 0;
                            if (o.some((r => 0 !== e[r]))) {
                                for (a in s) n.o(s, a) && (n.m[a] = s[a]);
                                if (c) var p = c(n)
                            }
                            for (r && r(t); l < o.length; l++) i = o[l], n.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                            return n.O(p)
                        },
                        t = globalThis.webpackChunk_iris_binance_iris_muses_ = globalThis.webpackChunk_iris_binance_iris_muses_ || [];
                    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
                })();
                var a = n.O(void 0, [121], (() => n(74408)));
                a = n.O(a), _iris__binance_iris_muses_IconCard = a
            })();
            return _iris__binance_iris_muses_IconCard.default ? _iris__binance_iris_muses_IconCard.default : _iris__binance_iris_muses_IconCard
        }
    }
    (window.__IRIS_COMPONENTS__ = window.__IRIS_COMPONENTS__ || []).push([
        ["@binance/iris-muses", "0.4.186", "IconCard"], factory()
    ])
})()