"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [3826, 78], {
        aCvq: (t, e, n) => {
            n.d(e, {
                a: () => o
            });
            var r = n("vxaL");
            const o = (t, e) => {
                const n = (0, r.Z)(t);
                return n ? .symbolDisplay || e || t
            }
        },
        eS4v: (t, e, n) => {
            n.d(e, {
                t: () => o
            });
            var r = n("vz6D");
            const o = t => {
                const e = (0, r.O)(t);
                return "USDT" === e || "USDC" === e ? "USD" : e
            }
        },
        PyG5: (t, e, n) => {
            n.d(e, {
                n: () => s
            });
            var r = n("4hgs"),
                o = n("Cadp"),
                a = n("krnk");
            const s = t => {
                const {
                    rootUserId: e,
                    strategyId: n,
                    streamerStrategyType: s
                } = t || {};
                return (0, r.useQuery)(a.t5.strategyRoiChart(n, e, s), (() => (0, o.s5)(t).then((t => t.data))), {
                    refetchOnMount: !1,
                    enabled: Boolean(e) && Boolean(n) && Boolean(s)
                })
            }
        },
        AkRh: (t, e, n) => {
            n.d(e, {
                j: () => o
            });
            var r = n("trXm");
            const o = (t, e) => {
                const {
                    t: n
                } = (0, r.Y_)();
                return t && e ? n("common-trailing", "Trailing") : t && !e ? n("trailing-up", "Trailing Up") : !t && e ? n("trailing-down", "Trailing Down") : ""
            }
        },
        ovUV: (t, e, n) => {
            n.d(e, {
                B: () => b
            });
            var r = n("mXdx"),
                o = (n("DTvD"), n("xqbL")),
                a = n.n(o),
                s = n("5YBB"),
                i = n("LLrz"),
                l = n("JWaR"),
                c = n("e+r3"),
                p = n("cFMj"),
                u = n("1lvF"),
                d = n("jor4"),
                f = n("bt5r"),
                m = n("trXm"),
                x = n("f1nL");
            const h = {
                    cursor: "help"
                },
                v = [],
                b = ({
                    data: t,
                    open: e,
                    tip: n,
                    children: o,
                    getConfigList: b,
                    showHelpCursor: y = !1,
                    sx: g,
                    isUniversal: w = !0,
                    enablePortal: E = !0,
                    containerClass: j
                }) => {
                    const {
                        t: T
                    } = (0, m.F$)(), A = e && "function" === typeof b ? b ? .(t) : v, C = "function" === typeof b, S = C ? Boolean(A.length > 0 && e) : Boolean(n && e), {
                        isIPad: N,
                        isMobile: M
                    } = (0, p.Q)();
                    return w ? (0, r.jsx)(x.I, {
                        className: a()("w-full"),
                        useReactPopper: !0,
                        enablePortal: E,
                        offset: 4,
                        tooltips: (0, r.jsx)(u.Ay, {
                            className: "w-full",
                            children: C ? (0, r.jsx)(d.A, {
                                className: "min-w-[180px] flex-col gap-[4px]",
                                children: A ? .map(((t, e) => (0, r.jsxs)(d.A, {
                                    className: "justify-between items-center",
                                    children: [(0, r.jsx)(u.Ay, {
                                        children: (0, r.jsx)(s.x, {
                                            t: T,
                                            i18nKey: String(t.key),
                                            defaults: String(t.defaultValue),
                                            components: {
                                                br: (0, r.jsx)("br", {})
                                            }
                                        })
                                    }), (0, r.jsx)(u.Ay, {
                                        className: "text-right",
                                        children: t.value ? ? f.VsL
                                    })]
                                }, e)))
                            }) : n
                        }),
                        trigger: "hover",
                        open: !M && !N && S,
                        arrow: !0,
                        placement: "top",
                        children: (0, r.jsx)(u.Ay, {
                            className: a()("w-full", {
                                "cursor-help": y
                            }, j),
                            children: o
                        })
                    }) : (0, r.jsx)(c.Ay, {
                        delay: f.uxx,
                        tip: C ? (0, r.jsx)(i.A, {
                            minWidth: "180px",
                            flexDirection: "column",
                            sx: {
                                gap: "4px"
                            },
                            children: A ? .map(((t, e) => (0, r.jsxs)(i.A, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [(0, r.jsx)(l.A, {
                                    variant: "caption",
                                    color: "t.white",
                                    children: (0, r.jsx)(s.x, {
                                        t: T,
                                        i18nKey: String(t.key),
                                        defaults: String(t.defaultValue),
                                        components: {
                                            br: (0, r.jsx)("br", {})
                                        }
                                    })
                                }), (0, r.jsx)(l.A, {
                                    variant: "caption",
                                    color: "t.white",
                                    textAlign: "right",
                                    children: t.value ? ? f.VsL
                                })]
                            }, e)))
                        }) : n,
                        open: !M && !N && S,
                        enablePortal: !0,
                        arrow: !0,
                        onlyShowOnHover: !0,
                        placement: "top",
                        sx: { ...g,
                            ...y ? h : {}
                        },
                        children: o
                    })
                }
        },
        NzjW: (t, e, n) => {
            n.d(e, {
                B: () => x
            });
            var r = n("mXdx"),
                o = n("DTvD"),
                a = n.n(o),
                s = n("jor4"),
                i = n("1lvF"),
                l = n("wIZF"),
                c = n("TQvm");
            const p = function(t) {
                return a().createElement(c.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, t), a().createElement("path", {
                    d: "M9.22 11.778a3.11 3.11 0 100-6.22 3.11 3.11 0 000 6.22zM6.11 13.778A3.11 3.11 0 003 16.888v1.554h12.44v-1.555a3.11 3.11 0 00-3.11-3.11H6.11zM21 18.442h-3.56v-1.555c0-1.17-.394-2.248-1.055-3.11h1.505a3.11 3.11 0 013.11 3.11v1.555zM14.33 8.668a5.087 5.087 0 01-.852 2.825 3.11 3.11 0 100-5.65c.538.809.852 1.78.852 2.825z",
                    fill: "currentColor"
                }))
            };
            var u = n("ovUV"),
                d = n("Bdbj"),
                f = n("trXm"),
                m = n("JloV");
            const x = ({
                copyCount: t
            }) => {
                const [e, n] = (0, o.useState)(!1), {
                    t: a
                } = (0, f.Y_)();
                return (0, r.jsx)(u.B, {
                    open: e,
                    tip: a(d.mB, {
                        defaultValue: d.mQ
                    }),
                    showHelpCursor: !0,
                    children: (0, r.jsxs)(s.A, {
                        className: "items-center",
                        children: [(0, r.jsx)(i.Ay, {
                            className: "w-[16px] h-[16px]",
                            onMouseEnter: () => n(!0),
                            onMouseLeave: () => n(!1),
                            children: (0, r.jsx)(p, {
                                className: "text-[16px]"
                            })
                        }), (0, r.jsx)("span", {
                            children: (0, m.k)(t) ? t : ""
                        })]
                    })
                })
            }
        },
        X6af: (t, e, n) => {
            n.d(e, {
                DG: () => c,
                HL: () => l,
                Ot: () => i
            });
            var r = n("Bdbj");
            const o = "NEUTRAL",
                a = "LONG",
                s = "SHORT",
                i = t => {
                    switch (t) {
                        case o:
                            return 1;
                        case a:
                            return 2;
                        case s:
                            return 3;
                        default:
                            return 1
                    }
                };
            const l = t => {
                    switch (t) {
                        case 1:
                        default:
                            return "spotGrid";
                        case 2:
                        case 3:
                            return "futuresGrid"
                    }
                },
                c = t => {
                    switch (t) {
                        case 1:
                        default:
                            return r.t3.NEUTRAL;
                        case 2:
                            return r.t3.LONG;
                        case 3:
                            return r.t3.SHORT
                    }
                }
        },
        MWgX: (t, e, n) => {
            n.d(e, {
                A: () => a
            });
            var r = n("DTvD"),
                o = n("3W4S");

            function a() {
                return r.useContext(o.A)
            }
        },
        Slg7: (t, e, n) => {
            n.d(e, {
                A: () => m
            });
            var r = n("b6CO"),
                o = n("hrAD"),
                a = n("qoEP"),
                s = n("KrVi"),
                i = n("DTvD"),
                l = n("5E2b"),
                c = n("xqbL"),
                p = n.n(c),
                u = n("oirI"),
                d = {
                    "&,&::before": {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        zIndex: -1
                    },
                    "&::before": {
                        content: '""',
                        display: "block"
                    }
                },
                f = {
                    boxSizing: "content-box",
                    position: "absolute",
                    width: "max-content",
                    wordBreak: "normal",
                    zIndex: "tooltip",
                    maxWidth: "296px",
                    '&[data-popper-placement^="top"] > [data-popper-arrow]': {
                        bottom: "-3px"
                    },
                    "& > .gap-fill": {
                        position: "absolute",
                        display: "block"
                    },
                    '&[data-popper-placement^="top"] > [data-popper-arrow]::before': {
                        transform: "rotate(45deg)"
                    },
                    '&[data-popper-placement^="top"] > .gap-fill': {
                        bottom: "-".concat(u.rQ, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(u.rQ, "px")
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]': {
                        top: "-3px"
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]::before': {
                        transform: "rotate(225deg)"
                    },
                    '&[data-popper-placement^="bottom"] > .gap-fill': {
                        top: "-".concat(u.rQ, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(u.rQ, "px")
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]': {
                        right: "-3px"
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]::before': {
                        transform: "rotate(-45deg)"
                    },
                    '&[data-popper-placement^="left"] > .gap-fill': {
                        top: "0",
                        right: "-".concat(u.rQ, "px"),
                        width: "".concat(u.rQ, "px"),
                        height: "100%"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]': {
                        left: "-3px"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]::before': {
                        transform: "rotate(135deg)"
                    },
                    '&[data-popper-placement^="right"] > .gap-fill': {
                        top: "0",
                        left: "-".concat(u.rQ, "px"),
                        width: "".concat(u.rQ, "px"),
                        height: "100%"
                    }
                };
            const m = i.forwardRef((function(t, e) {
                var n = t.arrow,
                    c = t.arrowRef,
                    u = t.arrowStyle,
                    m = t.children,
                    x = t.open,
                    h = t.className,
                    v = t.bg,
                    b = t.sx,
                    y = (0, s._)(t, ["arrow", "arrowRef", "arrowStyle", "children", "open", "className", "bg", "sx"]);
                return x ? i.createElement(l.A, (0, r._)({
                    ref: e,
                    variant: "tooltip",
                    bg: v,
                    className: p()(h, "bn-tooltip-box")
                }, y, {
                    __css: (0, a._)((0, o._)({}, f), {
                        ".bn-tooltip-arrow[data-popper-arrow]::before": {
                            backgroundColor: v
                        }
                    }),
                    sx: b
                }), m, n && i.createElement(l.A, {
                    className: "bn-tooltip-arrow",
                    ref: c,
                    "data-popper-arrow": !0,
                    __css: d,
                    style: u
                }), i.createElement("i", {
                    className: "gap-fill"
                })) : null
            }))
        },
        "e+r3": (t, e, n) => {
            n.d(e, {
                Ay: () => b
            });
            var r = n("b6CO"),
                o = n("hrAD"),
                a = n("KrVi"),
                s = n("mguP"),
                i = n("DTvD"),
                l = n("cj1O"),
                c = n("5E2b"),
                p = n("TUyf"),
                u = n("MWgX"),
                d = n("Toyo"),
                f = n("A29I"),
                m = n("Slg7"),
                x = n("oirI"),
                h = n("jWkY"),
                v = function() {
                    return "undefined" !== typeof window ? document.body.offsetHeight : 0
                };
            const b = i.forwardRef((function(t, e) {
                var n = t.arrow,
                    b = void 0 !== n && n,
                    y = t.boundary,
                    g = t.container,
                    w = t.tip,
                    E = t.delay,
                    j = void 0 === E ? 0 : E,
                    T = t.pos,
                    A = t.placement,
                    C = void 0 === A ? T || "top" : A,
                    S = t.children,
                    N = t.open,
                    M = t.trigger,
                    k = void 0 === M ? "hover" : M,
                    D = t.onClick,
                    L = t.enablePortal,
                    O = void 0 !== L && L,
                    P = t.bg,
                    R = t.scroll,
                    _ = t.resize,
                    B = t.boxOffset,
                    I = void 0 === B ? 0 : B,
                    V = t.arrowPadding,
                    H = void 0 === V ? 0 : V,
                    Q = t.fallbackPlacements,
                    U = t.onlyShowOnHover,
                    z = void 0 === U || U,
                    W = t.clickOutsideClose,
                    X = void 0 !== W && W,
                    F = t.onClickOutside,
                    G = t.tooltipBoxProps,
                    Y = (0, a._)(t, ["arrow", "boundary", "container", "tip", "delay", "pos", "placement", "children", "open", "trigger", "onClick", "enablePortal", "bg", "scroll", "resize", "boxOffset", "arrowPadding", "fallbackPlacements", "onlyShowOnHover", "clickOutsideClose", "onClickOutside", "tooltipBoxProps"]),
                    Z = "rtl" === (0, u.A)() ? x.kL[C] : C,
                    K = i.useRef(null != N).current,
                    q = i.useRef(null),
                    J = (0, s._)(i.useState(null), 2),
                    $ = J[0],
                    tt = J[1],
                    et = (0, s._)(i.useState(null), 2),
                    nt = et[0],
                    rt = et[1],
                    ot = (0, s._)(i.useState(null), 2),
                    at = ot[0],
                    st = ot[1],
                    it = i.useRef(0),
                    lt = i.useRef(),
                    ct = (0, d.E)($, nt, {
                        placement: Z,
                        modifiers: [{
                            name: "eventListeners",
                            options: {
                                scroll: R,
                                resize: _
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: at,
                                padding: H
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [I || 0, x.rQ]
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !1,
                                gpuAcceleration: !1
                            }
                        }, {
                            name: "flip",
                            options: {
                                boundary: y,
                                fallbackPlacements: Q
                            }
                        }]
                    }),
                    pt = ct.state,
                    ut = ct.styles,
                    dt = ct.attributes,
                    ft = ct.update,
                    mt = i.useMemo((function() {
                        return (0, x.yP)(null === pt || void 0 === pt ? void 0 : pt.placement)
                    }), [null === pt || void 0 === pt ? void 0 : pt.placement]),
                    xt = (0, s._)(i.useState(N), 2),
                    ht = xt[0],
                    vt = xt[1];
                K && (k = void 0, N !== ht && vt(N)), i.useEffect((function() {
                    return function() {
                        lt.current && window.clearTimeout(lt.current), lt.current = 0
                    }
                }), [ht]), (0, h.W)(q, (function(t) {
                    X && vt(!1), F && F(t)
                }), !!F || !!X);
                var bt = (0, l.A)(tt, e),
                    yt = "click" === k ? function(t) {
                        lt.current && window.clearTimeout(lt.current), it.current = 0, lt.current = 0, vt(!ht), ft && ft(), D && D(t)
                    } : D,
                    gt = "hover" === k ? function(t) {
                        !ht && window.performance.now() - it.current > 500 && (lt.current = j ? lt.current || window.setTimeout((function() {
                            return vt(!0)
                        }), j) : (vt(!0), 0), ft && ft(), it.current = window.performance.now()), Y.onMouseMove && Y.onMouseMove(t)
                    } : Y.onMouseMove,
                    wt = "hover" === k ? function(t) {
                        lt.current && window.clearTimeout(lt.current), it.current = 0, lt.current = 0, vt(!1), ft && ft(), Y.onMouseLeave && Y.onMouseLeave(t)
                    } : Y.onMouseLeave,
                    Et = z ? {
                        appear: !0,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        onEnter: v
                    } : {};
                return i.createElement(c.A, (0, r._)({
                    ref: bt
                }, Y, {
                    __css: {
                        display: "inline-block",
                        position: "relative"
                    },
                    onClick: yt,
                    onMouseMove: gt,
                    onMouseLeave: wt
                }), i.createElement(f.Ay, (0, r._)({ in: ht,
                    timeout: x.p0
                }, Et), (function(t) {
                    return g || O ? i.createElement(p.Ay, {
                        container: g
                    }, i.createElement(m.A, (0, r._)({
                        open: !0,
                        arrow: b,
                        arrowStyle: ut.arrow,
                        style: (0, o._)({}, ut.popper, x.lv, mt[t]),
                        bg: P,
                        arrowRef: st,
                        ref: rt
                    }, dt.popper, G), i.createElement(c.A, {
                        ref: q
                    }, w))) : i.createElement(m.A, (0, r._)({
                        open: !0,
                        arrow: b,
                        arrowStyle: ut.arrow,
                        style: (0, o._)({}, ut.popper, x.lv, mt[t]),
                        bg: P,
                        arrowRef: st,
                        ref: rt
                    }, dt.popper, G), i.createElement(c.A, {
                        ref: q
                    }, w))
                })), S)
            }))
        },
        oirI: (t, e, n) => {
            n.d(e, {
                kL: () => i,
                lv: () => o,
                p0: () => r,
                rQ: () => l,
                yP: () => s
            });
            var r = 120,
                o = {
                    transition: "opacity ".concat(r, "ms ease-in-out, transform ").concat(r, "ms ease-in-out"),
                    opacity: .25,
                    transform: "translate3d(0, 0, 0)"
                },
                a = {
                    bottom: "translate3d(0, 6px, 0)",
                    left: "translate3d(-6px, 0, 0)",
                    right: "translate3d(6px, 0, 0)",
                    top: "translate3d(0, -6px, 0)"
                };
            var s = function(t) {
                    return t = function(t) {
                        return t.split("-")[0]
                    }(t || "top"), {
                        entering: {
                            opacity: .25,
                            transform: "translate3d(0, 0, 0)"
                        },
                        entered: {
                            opacity: 1,
                            transform: "translate3d(0, 0, 0)"
                        },
                        exiting: {
                            opacity: .25,
                            transform: a[t]
                        },
                        exited: {
                            visibility: "hidden",
                            opacity: 0,
                            transform: a[t]
                        }
                    }
                },
                i = {
                    "bottom-end": "bottom-start",
                    "bottom-start": "bottom-end",
                    "left-end": "right-end",
                    "left-start": "right-start",
                    left: "right",
                    "right-end": "left-end",
                    "right-start": "left-start",
                    right: "left",
                    "top-end": "top-start",
                    "top-start": "top-end"
                },
                l = 8
        },
        jWkY: (t, e, n) => {
            n.d(e, {
                W: () => a
            });
            var r = n("DTvD"),
                o = n("1HmZ"),
                a = function(t, e, n) {
                    var a = (0, o.Z)((function(n) {
                        t && t.current && !t.current.contains(n.target) && e(n)
                    }));
                    (0, r.useEffect)((function() {
                        return n ? (document.addEventListener("mousedown", a), document.addEventListener("touchstart", a), function() {
                            document.removeEventListener("mousedown", a), document.removeEventListener("touchstart", a)
                        }) : function() {}
                    }), [n, a])
                }
        },
        gvat: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => j
            });
            var r = n("DTvD"),
                o = n("mXdx"),
                a = n("trXm"),
                s = n("eS4v"),
                i = n("dSFF"),
                l = n("zjPc"),
                c = n("Bdbj"),
                p = n("OZ3C"),
                u = n("Cw/n"),
                d = n("ovUV"),
                f = n("+f5r"),
                m = n("8uRx"),
                x = n("sIut"),
                h = n("4frZ"),
                v = n("1lvF"),
                b = n("tM9B"),
                y = n("jlmu"),
                g = n("16ah"),
                w = n("gYIm"),
                E = function(t) {
                    var e = t.onButtonClick,
                        n = t.data,
                        E = t.sortBy,
                        j = (0, r.useState)(!1),
                        T = j[0],
                        A = j[1],
                        C = (0, r.useState)(!1),
                        S = C[0],
                        N = C[1],
                        M = (0, r.useState)(!1),
                        k = M[0],
                        D = M[1],
                        L = (0, r.useState)(!1),
                        O = L[0],
                        P = L[1],
                        R = (0, r.useState)(!1),
                        _ = R[0],
                        B = R[1],
                        I = (0, r.useState)(!1),
                        V = I[0],
                        H = I[1],
                        Q = (0, a.Y_)().t,
                        U = n.symbol,
                        z = n.minInvestment,
                        W = (0, s.t)(U),
                        X = (0, y.D)(U),
                        F = "pnl" === E,
                        G = (0, r.useMemo)((function() {
                            return {
                                pnl: {
                                    title: "".concat(Q("pnl", {
                                        defaultValue: "PNL"
                                    }), " (").concat(W, ")"),
                                    value: (0, o.jsx)(i.n, {
                                        enabledProfitColor: F,
                                        symbol: U,
                                        pnl: n.pnl,
                                        precision: X
                                    })
                                },
                                roi: {
                                    title: Q("roi", {
                                        defaultValue: "ROI"
                                    }),
                                    value: (0, o.jsx)(l.C, {
                                        enabledProfitColor: !F,
                                        roi: Number(n.roi)
                                    })
                                }
                            }
                        }), [n.pnl, n.roi, F, U, Q, W, X]),
                        Y = F ? G.pnl : G.roi,
                        Z = F ? Q(c.so, c._6) : Q(c.EW, c.Kg),
                        K = F ? G.roi : G.pnl,
                        q = F ? Q(c.EW, c.Kg) : Q(c.so, c._6);
                    return (0, o.jsxs)(v.Ay, {
                        className: "flex flex-col p-[20px] gap-y-[20px] w-full w-min-[344px] bg-BasicBg border border-solid border-Line hover:border-PrimaryYellow cursor-pointer text-PrimaryText rounded-[16px]",
                        onClick: e,
                        children: [(0, o.jsx)(p.n, {
                            left: (0, o.jsx)(g.e, {
                                strategyData: n
                            }),
                            right: (0, o.jsx)(u.A, {})
                        }), (0, o.jsx)(p.n, {
                            left: (0, o.jsx)(d.B, {
                                open: S,
                                tip: Z,
                                children: (0, o.jsxs)(v.Ay, {
                                    className: "cursor-help",
                                    onMouseOver: function() {
                                        return N(!0)
                                    },
                                    onMouseLeave: function() {
                                        return N(!1)
                                    },
                                    children: [(0, o.jsx)(v.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[4px]",
                                        children: Y.title
                                    }), (0, o.jsx)(v.Ay, {
                                        className: "t-headline2-1 text-TextBuy break-all",
                                        children: Y.value
                                    })]
                                })
                            }),
                            right: (0, o.jsx)(v.Ay, {
                                className: "h-[60px] w-[164px]",
                                children: (0, o.jsx)(f.o, {
                                    data: n,
                                    sortBy: E,
                                    width: 107,
                                    height: 60
                                })
                            })
                        }), (0, o.jsxs)(v.Ay, {
                            className: "flex justify-between",
                            children: [(0, o.jsx)(d.B, {
                                open: k,
                                tip: q,
                                showHelpCursor: !0,
                                children: (0, o.jsxs)(v.Ay, {
                                    onMouseEnter: function() {
                                        return D(!0)
                                    },
                                    onMouseLeave: function() {
                                        return D(!1)
                                    },
                                    children: [(0, o.jsx)(v.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] max-w-[115px] truncate",
                                        children: K.title
                                    }), (0, o.jsx)(v.Ay, {
                                        className: "t-body3 text-PrimaryText",
                                        children: K.value
                                    })]
                                })
                            }), (0, o.jsx)(d.B, {
                                open: T,
                                tip: Q(c.Qo, {
                                    defaultValue: c.m6
                                }),
                                showHelpCursor: !0,
                                children: (0, o.jsxs)(v.Ay, {
                                    onMouseEnter: function() {
                                        return A(!0)
                                    },
                                    onMouseLeave: function() {
                                        return A(!1)
                                    },
                                    children: [(0, o.jsx)(v.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] max-w-[115px] truncate",
                                        children: Q("runtime", {
                                            defaultValue: "Runtime"
                                        })
                                    }), (0, o.jsx)(m.G, {
                                        runningTime: n.runningTime
                                    })]
                                })
                            }), (0, o.jsx)(d.B, {
                                open: _,
                                tip: Q("min-investment-tooltip", {
                                    defaultValue: "The minimum investment amount needed to engage with this specific trading strategy."
                                }),
                                showHelpCursor: !0,
                                children: (0, o.jsxs)(v.Ay, {
                                    onMouseEnter: function() {
                                        return B(!0)
                                    },
                                    onMouseLeave: function() {
                                        return B(!1)
                                    },
                                    children: [(0, o.jsx)(v.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] text-end max-w-[115px] truncate",
                                        children: Q("min-investment", {
                                            defaultValue: "Min. Investment"
                                        })
                                    }), (0, o.jsx)(v.Ay, {
                                        className: "t-body3 text-PrimaryText text-end",
                                        children: (0, o.jsx)(x.Z, {
                                            minInvestment: z,
                                            data: {
                                                symbol: U
                                            }
                                        })
                                    })]
                                })
                            })]
                        }), (0, o.jsx)(p.n, {
                            containerClassName: "items-end",
                            left: (0, o.jsx)(d.B, {
                                open: V,
                                tip: Q("matched-trades-tooltip", "Number of successfully matched trades (paired buy and sell orders) executed in the past 24 hours / since the bot's launch."),
                                showHelpCursor: !0,
                                children: (0, o.jsxs)(v.Ay, {
                                    onMouseEnter: function() {
                                        return H(!0)
                                    },
                                    onMouseLeave: function() {
                                        return H(!1)
                                    },
                                    children: [(0, o.jsx)(v.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] max-w-[250px] truncate",
                                        children: Q("popularCard-matchedCount", {
                                            defaultValue: "24H/Total Matched Trades"
                                        })
                                    }), (0, o.jsxs)(v.Ay, {
                                        className: "t-body3 text-PrimaryText",
                                        children: [n.latestMatchedCount || 0, "/", n.matchedCount || 0]
                                    })]
                                })
                            }),
                            right: (0, o.jsx)(d.B, {
                                open: O,
                                tip: Q(c.hm, c.ZP),
                                children: (0, o.jsxs)(v.Ay, {
                                    className: "cursor-help",
                                    onMouseOver: function() {
                                        return P(!0)
                                    },
                                    onMouseLeave: function() {
                                        return P(!1)
                                    },
                                    children: [(0, o.jsx)(v.Ay, {
                                        className: "t-caption1 text-TertiaryText mb-[2px] text-end",
                                        children: Q("popularCard-7DMDD", {
                                            defaultValue: "7D MDD"
                                        })
                                    }), (0, o.jsx)(v.Ay, {
                                        className: "t-body3 text-PrimaryText text-end",
                                        children: (0, h.kf)(n.sevenDayMdd) ? "".concat((0, b.jL)((0, b.lw)(n.sevenDayMdd, 100), 2), "%") : w.Vs
                                    })]
                                })
                            })
                        })]
                    })
                };
            const j = (0, r.memo)(E)
        },
        A29I: (t, e, n) => {
            n.d(e, {
                Ay: () => b
            });
            var r = n("hLFe"),
                o = n("lAeT"),
                a = n("DTvD"),
                s = n.n(a),
                i = n("hTvQ"),
                l = n.n(i);
            const c = !1,
                p = s().createContext(null);
            var u = "unmounted",
                d = "exited",
                f = "entering",
                m = "entered",
                x = "exiting",
                h = function(t) {
                    function e(e, n) {
                        var r;
                        r = t.call(this, e, n) || this;
                        var o, a = n && !n.isMounting ? e.enter : e.appear;
                        return r.appearStatus = null, e.in ? a ? (o = d, r.appearStatus = f) : o = m : o = e.unmountOnExit || e.mountOnEnter ? u : d, r.state = {
                            status: o
                        }, r.nextCallback = null, r
                    }(0, o.A)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return t.in && e.status === u ? {
                            status: d
                        } : null
                    };
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(t) {
                        var e = null;
                        if (t !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== f && n !== m && (e = f) : n !== f && n !== m || (e = x)
                        }
                        this.updateStatus(!1, e)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var t, e, n, r = this.props.timeout;
                        return t = e = n = r, null != r && "number" !== typeof r && (t = r.exit, e = r.enter, n = void 0 !== r.appear ? r.appear : e), {
                            exit: t,
                            enter: e,
                            appear: n
                        }
                    }, n.updateStatus = function(t, e) {
                        if (void 0 === t && (t = !1), null !== e)
                            if (this.cancelNextCallback(), e === f) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : l().findDOMNode(this);
                                    n && function(t) {
                                        t.scrollTop
                                    }(n)
                                }
                                this.performEnter(t)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === d && this.setState({
                            status: u
                        })
                    }, n.performEnter = function(t) {
                        var e = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : t,
                            o = this.props.nodeRef ? [r] : [l().findDOMNode(this), r],
                            a = o[0],
                            s = o[1],
                            i = this.getTimeouts(),
                            p = r ? i.appear : i.enter;
                        !t && !n || c ? this.safeSetState({
                            status: m
                        }, (function() {
                            e.props.onEntered(a)
                        })) : (this.props.onEnter(a, s), this.safeSetState({
                            status: f
                        }, (function() {
                            e.props.onEntering(a, s), e.onTransitionEnd(p, (function() {
                                e.safeSetState({
                                    status: m
                                }, (function() {
                                    e.props.onEntered(a, s)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var t = this,
                            e = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : l().findDOMNode(this);
                        e && !c ? (this.props.onExit(r), this.safeSetState({
                            status: x
                        }, (function() {
                            t.props.onExiting(r), t.onTransitionEnd(n.exit, (function() {
                                t.safeSetState({
                                    status: d
                                }, (function() {
                                    t.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: d
                        }, (function() {
                            t.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(t, e) {
                        e = this.setNextCallback(e), this.setState(t, e)
                    }, n.setNextCallback = function(t) {
                        var e = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, e.nextCallback = null, t(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(t, e) {
                        this.setNextCallback(e);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : l().findDOMNode(this),
                            r = null == t && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = o[0],
                                    s = o[1];
                                this.props.addEndListener(a, s)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var t = this.state.status;
                        if (t === u) return null;
                        var e = this.props,
                            n = e.children,
                            o = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, (0, r.A)(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return s().createElement(p.Provider, {
                            value: null
                        }, "function" === typeof n ? n(t, o) : s().cloneElement(s().Children.only(n), o))
                    }, e
                }(s().Component);

            function v() {}
            h.contextType = p, h.propTypes = {}, h.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: v,
                onEntering: v,
                onEntered: v,
                onExit: v,
                onExiting: v,
                onExited: v
            }, h.UNMOUNTED = u, h.EXITED = d, h.ENTERING = f, h.ENTERED = m, h.EXITING = x;
            const b = h
        }
    }
]);