(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [6103], {
        ViD7: (e, t, n) => {
            "use strict";
            n.d(t, {
                Nm: () => s,
                X$: () => a
            });
            var r = n("4hgs"),
                o = (n("DTvD"), n("Zfyq")),
                i = n("A4nT");
            const s = (e = "WEB", t) => (0, r.useQuery)(i.Bz.QUERY_COMPLIANCE(e), (() => (0, o.K$)({
                    platform: e
                })), {
                    staleTime: 1 / 0,
                    cacheTime: 1 / 0,
                    notifyOnChangeProps: ["data"],
                    ...t || {}
                }),
                a = (e = "WEB", t) => {
                    const {
                        data: n
                    } = s(e, {
                        select: e => e ? .data ? .restriction ? .keys || [],
                        ...t
                    });
                    return n || []
                }
        },
        "VCr+": (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => c,
                a: () => u
            });
            var r = n("eAFj"),
                o = n("BmHO"),
                i = n.n(o),
                s = n("DTvD");
            let a;
            const l = "SKIP_QUIZ_LAST_SKIP_TIME",
                u = (0, r.A)((e => ({
                    lastSkipTime: -1,
                    quizType: "can-skip",
                    skipModalVisible: !1,
                    enableFuturesSkipQuizFeature: !0,
                    enableSkipQuiz: !1,
                    initializeLastSkipTime: t => {
                        e({
                            lastSkipTime: t
                        })
                    },
                    updateLastSkipTime: () => {
                        const t = Date.now();
                        a ? .setItem(l, t), e({
                            lastSkipTime: t
                        })
                    },
                    updateQuizType: t => e({
                        quizType: t
                    }),
                    updateSkipModalVisible: t => e({
                        skipModalVisible: t
                    }),
                    updateEnableFuturesSkipQuizFeature: t => {
                        e({
                            enableFuturesSkipQuizFeature: t
                        })
                    },
                    updateEnableSkipQuiz: t => {
                        e({
                            enableSkipQuiz: t
                        })
                    }
                })));
            async function c({
                storeName: e = "futures-widget",
                enableSkipQuiz: t
            } = {}) {
                const n = u((e => e.initializeLastSkipTime));
                (0, s.useEffect)((() => {
                    (async function() {
                        a = i().createInstance({
                            name: e
                        });
                        let t = await a.getItem(l);
                        return t || (t = -1), t
                    })().then((e => n(e)))
                }), [e, n]);
                const r = u((e => e.updateEnableSkipQuiz));
                (0, s.useEffect)((() => {
                    "boolean" === typeof t && r(t)
                }), [t, r])
            }
        },
        FKGv: (e, t, n) => {
            "use strict";
            n.d(t, {
                _A: () => a,
                q6: () => l
            });
            var r = n("V7s4"),
                o = n("h7TM"),
                i = n("VCr+");
            let s = !0;
            const a = (e = !1, {
                    type: t = o.SJ,
                    afterClose: n,
                    finishQuiz: a,
                    afterSkip: l,
                    source: u
                } = {}) => {
                    const {
                        quizType: c,
                        enableFuturesSkipQuizFeature: d,
                        updateSkipModalVisible: p,
                        enableSkipQuiz: f
                    } = i.a.getState();
                    if (e) return r.B.emit(o.j3, {
                        visible: !0,
                        type: t,
                        afterClose: n,
                        finishQuiz: a,
                        source: u
                    }), !1;
                    if ("no" === c) return !0;
                    if (!s)
                        if ("can-skip" === c && d) {
                            if (!f) return !0;
                            r.B.emit(o.j3, {
                                visible: !1,
                                type: t,
                                afterClose: n,
                                finishQuiz: a,
                                afterSkip: l,
                                source: u
                            }), p(!0)
                        } else r.B.emit(o.j3, {
                            visible: !0,
                            type: t,
                            afterClose: n,
                            finishQuiz: a,
                            source: u
                        });
                    return s
                },
                l = e => {
                    s = e
                }
        },
        edYk: (e, t, n) => {
            "use strict";
            n.d(t, {
                i$: () => o,
                s: () => i,
                u4: () => s
            });
            const r = {
                    source: "welcome_video_popup",
                    sensorsTrack: void 0
                },
                o = e => {
                    r.source = e
                },
                i = e => {
                    r.sensorsTrack = e
                },
                s = ({
                    _track: e = r.sensorsTrack,
                    elementId: t,
                    event: n = "$WebClick",
                    eventName: o = "futures_quiz",
                    source: i = r.source,
                    dfStatus: s,
                    df_ab: a,
                    title: l
                }) => {
                    const u = {
                        eventName: o,
                        source: i,
                        ...s ? {
                            df_status: s
                        } : {}
                    };
                    t && (u.$element_id = t), a && (u.df_ab = a), l && (u.title = l), e && e(n, u)
                }
        },
        h7TM: (e, t, n) => {
            "use strict";
            n.d(t, {
                SJ: () => o,
                j3: () => r,
                kr: () => i
            });
            const r = "FUTURES_VIDEO_LESSON_VISIBLE",
                o = "video",
                i = "questions"
        },
        YWzz: (e, t, n) => {
            "use strict";
            n.d(t, {
                BJ: () => w,
                Bl: () => b
            });
            var r = n("mguP"),
                o = n("70Da"),
                i = n("S9mB"),
                s = n("t21c"),
                a = n.n(s),
                l = n("7ZgD"),
                u = n("nzVK"),
                c = {
                    cn: "zh-cn",
                    tw: "zh-tw",
                    kr: "ko-kr",
                    ru: "ru-ru",
                    vn: "vi-vn",
                    it: "it-it",
                    es: "es-es",
                    de: "de-de",
                    fr: "fr-fr",
                    jp: "ja-jp"
                },
                d = "(".concat("[a-zA-Z]+", ")(-(").concat("[a-zA-Z]+", "))?"),
                p = function() {
                    if (l.o) {
                        var e, t = null === (e = window.location.pathname) || void 0 === e ? void 0 : e.match(new RegExp("^/(".concat(d, ")($|/)")));
                        return t ? t[1] : (console.log("Can't get path from window.location, regexp: ".concat(d)), "")
                    }
                    return i.A.language
                },
                f = a()((function(e) {
                    var t = "en",
                        n = "";
                    if ("string" !== typeof e) return console.log("The type of path should be string, current is: ", "undefined" === typeof e ? "undefined" : (0, o._)(e)), {
                        lang: t,
                        region: n,
                        path: e
                    };
                    var i, s, a, l = e.match(new RegExp("^".concat(d, "$")));
                    return l ? {
                        lang: t = void 0 === (s = (i = (0, r._)(l, 4))[1]) ? "" : s,
                        region: n = void 0 === (a = i[3]) ? "" : a,
                        path: e
                    } : {
                        lang: t,
                        region: n,
                        path: e
                    }
                })),
                m = (0, u.Zz)(u.PX, (function(e) {
                    return c[e] || e
                })),
                h = (0, u.Zz)((0, u._w)("lang"), f, m),
                x = (0, u.Zz)((0, u._w)("region"), f, m),
                g = ((0, u.Zz)(h, p), (0, u.Zz)(x, p), n("3ARj")),
                v = function() {
                    return (0, g.o)().i18n.language || "undefined" !== typeof window && window.localStorage.i18nextLng || "en-US"
                },
                b = function() {
                    return (0, g.o)().i18n.language || "undefined" !== typeof window && window.localStorage.i18nextLng || "en"
                },
                w = function() {
                    return "zh" === function() {
                        var e = v();
                        return h(e)
                    }()
                }
        },
        o35v: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => u,
                z: () => l
            });
            var r = n("DTvD"),
                o = n("RrWx"),
                i = n.n(o),
                s = n("1/4D");

            function a(e, t) {
                return i()(t) && e in t
            }
            var l = function(e) {
                    var t = (0, s.e)(e),
                        n = (0, r.useContext)(t),
                        o = n.featureGates,
                        i = n.fetch,
                        a = n.lazyFetch;
                    return (0, r.useEffect)((function() {
                        a && i()
                    }), [i, a]), o
                },
                u = function(e, t) {
                    var n = l(e);
                    return n.isLoading || i()(n.result) && t in n.result || console.warn("No featureGates found for key: ".concat(String(t), ", in app: ").concat(e)), {
                        isLoading: n.isLoading,
                        result: a(t, n.result) ? n.result[t] : void 0
                    }
                }
        },
        "0hn9": (e, t, n) => {
            "use strict";
            n.d(t, {
                Py: () => a,
                vz: () => s
            });
            n("DTvD");
            var r = n("MD8j"),
                o = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                i = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userInfo
                },
                s = function() {
                    return (0, r.d4)(o, r.bN) || {}
                },
                a = function() {
                    return (0, r.d4)(i, r.bN) || {}
                }
        },
        GXOF: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => x
            });
            var r = n("b6CO"),
                o = n("hrAD"),
                i = n("KrVi"),
                s = n("DTvD"),
                a = n.n(s),
                l = n("TUyf"),
                u = n("LLrz"),
                c = n("tdZS"),
                d = n("5E2b"),
                p = n("JWaR"),
                f = n("NSeK"),
                m = "undefined" !== typeof window ? a().useLayoutEffect : a().useEffect,
                h = (0, s.forwardRef)((function(e, t) {
                    var n = e.open,
                        h = e.title,
                        x = e.titleSx,
                        g = e.containerSx,
                        v = e.contentSx,
                        b = e.mask,
                        w = void 0 === b || b,
                        y = e.maskSx,
                        _ = e.showMaskOnMobile,
                        k = void 0 !== _ && _,
                        S = e.onMaskClick,
                        C = e.onCloseIconClick,
                        E = e.showCloseIcon,
                        z = void 0 === E || E,
                        j = e.children,
                        q = e.onPressEnter,
                        A = void 0 === q ? function() {} : q,
                        T = e.onPressEsc,
                        I = void 0 === T ? function() {} : T,
                        L = e.specialCss,
                        N = void 0 === L ? {} : L,
                        R = e.closeSx,
                        M = void 0 === R ? {} : R,
                        D = e.closeIconProps,
                        O = void 0 === D ? {} : D,
                        B = e.showTitleBottomLine,
                        F = void 0 === B || B,
                        V = e.closeIconSize,
                        P = void 0 === V ? 24 : V,
                        Q = e.dialogClassName,
                        U = void 0 === Q ? "" : Q,
                        $ = (0, i._)(e, ["open", "title", "titleSx", "containerSx", "contentSx", "mask", "maskSx", "showMaskOnMobile", "onMaskClick", "onCloseIconClick", "showCloseIcon", "children", "onPressEnter", "onPressEsc", "specialCss", "closeSx", "closeIconProps", "showTitleBottomLine", "closeIconSize", "dialogClassName"]),
                        K = function(e) {
                            13 === e.keyCode ? A(e) : 27 === e.keyCode && I(e)
                        };
                    if ((0, s.useEffect)((function() {
                            return n ? document.addEventListener("keydown", K) : document.removeEventListener("keydown", K),
                                function() {
                                    document.removeEventListener("keydown", K)
                                }
                        }), [n]), m((function() {
                            return w && n ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                                function() {
                                    document.body.style.removeProperty("overflow")
                                }
                        }), [w, n]), !n || "undefined" === typeof document || !document.body) return null;
                    var G = !1;
                    "undefined" !== typeof window && window.matchMedia("(max-width: 766px)").matches && (G = !0);
                    var W = (0, o._)({
                            zIndex: "unset"
                        }, y),
                        Z = w && (k || !G);
                    return a().createElement(l.Ay, null, a().createElement(u.A, {
                        __css: (0, o._)({
                            zIndex: "modal",
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }, N),
                        sx: g,
                        className: U
                    }, Z && a().createElement(c.A, {
                        visible: !0,
                        onClick: function(e) {
                            return S && S(e)
                        },
                        sx: W
                    }), a().createElement(d.A, (0, r._)({
                        ref: t,
                        __css: {
                            position: "relative",
                            borderRadius: ["0px", "large", "large"],
                            boxShadow: "dialog",
                            backgroundColor: "popupBg",
                            width: ["100%", "auto"],
                            height: ["100%", "auto"],
                            color: "t.primary"
                        }
                    }, $), z && a().createElement(d.A, (0, r._)({
                        __css: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            left: "unset",
                            pt: "20px",
                            pr: "md",
                            color: "t.disabled",
                            cursor: "pointer",
                            ":hover": {
                                color: "t.third"
                            }
                        }
                    }, O, {
                        sx: M,
                        onClick: function(e) {
                            return C && C(e)
                        }
                    }), a().createElement(f.A, {
                        size: P,
                        style: {
                            width: "".concat(P, "px"),
                            height: "".concat(P, "px")
                        }
                    })), h && a().createElement(p.A, {
                        variant: "headline6",
                        className: "modal-title",
                        __css: {
                            pl: "md",
                            pr: "lg",
                            pt: "20px",
                            pb: "19px",
                            borderBottom: "1px solid",
                            borderBottomColor: "line",
                            border: F ? "" : "none",
                            textAlign: "left"
                        },
                        sx: x
                    }, h), a().createElement(d.A, {
                        className: "style-dialog-body",
                        __css: {
                            p: "md",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        sx: v
                    }, j))))
                }));
            h.displayName = "StyledDialog";
            const x = h
        },
        iGqe: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => q
            });
            var r = n("S+0I"),
                o = n("b6CO"),
                i = n("hrAD"),
                s = n("qoEP"),
                a = n("mguP"),
                l = n("66mo"),
                u = n.n(l),
                c = n("DTvD"),
                d = n.n(c),
                p = n("cj1O"),
                f = n("TUyf"),
                m = n("5E2b"),
                h = n("MWgX"),
                x = n("Toyo"),
                g = n("A29I"),
                v = n("KrVi"),
                b = n("xqbL"),
                w = n.n(b),
                y = {
                    transition: "opacity ".concat(120, "ms ease-in-out, transform ").concat(120, "ms ease-in-out"),
                    opacity: .25,
                    transform: "translate3d(0, 0, 0)"
                },
                _ = {
                    bottom: "translate3d(0, 6px, 0)",
                    left: "translate3d(-6px, 0, 0)",
                    right: "translate3d(6px, 0, 0)",
                    top: "translate3d(0, -6px, 0)"
                };
            var k = {
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
                S = {
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
                C = {
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
                        bottom: "-".concat(8, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(8, "px")
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]': {
                        top: "-3px"
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]::before': {
                        transform: "rotate(225deg)"
                    },
                    '&[data-popper-placement^="bottom"] > .gap-fill': {
                        top: "-".concat(8, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(8, "px")
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]': {
                        right: "-3px"
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]::before': {
                        transform: "rotate(-45deg)"
                    },
                    '&[data-popper-placement^="left"] > .gap-fill': {
                        top: "0",
                        right: "-".concat(8, "px"),
                        width: "".concat(8, "px"),
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
                        left: "-".concat(8, "px"),
                        width: "".concat(8, "px"),
                        height: "100%"
                    }
                };
            const E = c.forwardRef((function(e, t) {
                var n = e.arrow,
                    r = e.arrowRef,
                    a = e.arrowStyle,
                    l = e.children,
                    u = e.open,
                    d = e.className,
                    p = e.bg,
                    f = e.sx,
                    h = (0, v._)(e, ["arrow", "arrowRef", "arrowStyle", "children", "open", "className", "bg", "sx"]);
                return u ? c.createElement(m.A, (0, o._)({
                    ref: t,
                    variant: "tooltip",
                    bg: p,
                    className: w()(d, "bn-tooltip-box")
                }, h, {
                    __css: (0, s._)((0, i._)({}, C), {
                        ".bn-tooltip-arrow[data-popper-arrow]::before": {
                            backgroundColor: p
                        }
                    }),
                    sx: f
                }), l, n && c.createElement(m.A, {
                    className: "bn-tooltip-arrow",
                    ref: r,
                    "data-popper-arrow": !0,
                    __css: S,
                    style: a
                }), c.createElement("i", {
                    className: "gap-fill"
                })) : null
            }));
            var z = n("1HmZ"),
                j = function() {
                    return "undefined" !== typeof window ? document.body.offsetHeight : 0
                };
            const q = d().forwardRef((function(e, t) {
                var n = e.arrow,
                    l = void 0 !== n && n,
                    v = e.boundary,
                    b = e.delay,
                    w = void 0 === b ? 0 : b,
                    S = e.container,
                    C = e.tip,
                    q = e.placement,
                    A = e.pos,
                    T = e.children,
                    I = e.open,
                    L = e.trigger,
                    N = void 0 === L ? "hover" : L,
                    R = e.scroll,
                    M = void 0 === R || R,
                    D = e.resize,
                    O = void 0 === D || D,
                    B = e.enablePortal,
                    F = void 0 !== B && B,
                    V = e.leaveDelay,
                    P = void 0 === V ? 0 : V,
                    Q = e.boxOffset,
                    U = void 0 === Q ? 0 : Q,
                    $ = e.arrowPadding,
                    K = void 0 === $ ? 0 : $,
                    G = e.onlyShowOnHover,
                    W = void 0 === G || G,
                    Z = e.tipBoxSx,
                    H = void 0 === Z ? {} : Z,
                    Y = e.onClickOutside,
                    X = e.clickOutsideClose,
                    J = e.bg;
                q = q || A || "top", q = "rtl" === (0, h.A)() ? k[q] : q;
                var ee = d().useRef(null != I).current,
                    te = d().useRef(null),
                    ne = (0, a._)((0, c.useState)(null), 2),
                    re = ne[0],
                    oe = ne[1],
                    ie = (0, a._)((0, c.useState)(null), 2),
                    se = ie[0],
                    ae = ie[1],
                    le = (0, a._)((0, c.useState)(null), 2),
                    ue = le[0],
                    ce = le[1],
                    de = d().useRef(0),
                    pe = d().useRef(0),
                    fe = (0, x.E)(re, se, {
                        placement: q,
                        modifiers: [{
                            name: "eventListeners",
                            options: {
                                scroll: M,
                                resize: O
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: ue,
                                padding: K
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [U || 0, 8]
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
                                boundary: v
                            }
                        }]
                    }),
                    me = fe.styles,
                    he = fe.attributes,
                    xe = fe.update,
                    ge = fe.state,
                    ve = d().useMemo((function() {
                        return function(e) {
                            return e = function(e) {
                                return e.split("-")[0]
                            }(e || "top"), {
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
                                    transform: _[e]
                                },
                                exited: {
                                    visibility: "hidden",
                                    opacity: 0,
                                    transform: _[e]
                                }
                            }
                        }(null === ge || void 0 === ge ? void 0 : ge.placement)
                    }), [null === ge || void 0 === ge ? void 0 : ge.placement]),
                    be = (0, a._)((0, c.useState)(I), 2),
                    we = be[0],
                    ye = be[1];
                d().useEffect((function() {
                        return function() {
                            pe.current && window.clearTimeout(pe.current), pe.current = 0
                        }
                    }), [we]), ee && (N = void 0, I !== we && ye(I)),
                    function(e, t, n) {
                        var r = (0, z.Z)((function(n) {
                            e && e.current && !e.current.contains(n.target) && t(n)
                        }));
                        (0, c.useEffect)((function() {
                            return n ? (document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), function() {
                                document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r)
                            }) : function() {}
                        }), [n, r])
                    }(te, (function(e) {
                        X && ye(!1), Y && Y(e)
                    }), !!Y || !!X);
                var _e = (0, p.A)(oe, t),
                    ke = "click" === N ? function(e) {
                        pe.current && window.clearTimeout(pe.current), de.current = 0, pe.current = 0, ye(!we), xe && xe(), T.props.onClick && T.props.onClick(e)
                    } : T.props.onClick,
                    Se = "hover" === N ? function(e) {
                        !we && window.performance.now() - de.current > 500 && (pe.current = w ? pe.current || window.setTimeout((function() {
                            return ye(!0)
                        }), w) : (ye(!0), 0), xe && xe(), de.current = window.performance.now()), T.props.onMouseMove && T.props.onMouseMove(e)
                    } : T.props.onMouseMove,
                    Ce = "hover" === N ? function() {
                        var e = (0, r._)(u().mark((function e(t) {
                            return u().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        P ? setTimeout((function() {
                                            pe.current && window.clearTimeout(pe.current), de.current = 0, pe.current = 0, ye(!1), xe && xe(), T.props.onMouseLeave && T.props.onMouseLeave(t)
                                        }), P) : (pe.current && window.clearTimeout(pe.current), de.current = 0, pe.current = 0, ye(!1), xe && xe(), T.props.onMouseLeave && T.props.onMouseLeave(t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }() : T.props.onMouseLeave,
                    Ee = (0, s._)((0, i._)({}, T.props), {
                        onClick: ke,
                        onMouseMove: Se,
                        onMouseLeave: Ce,
                        ref: _e
                    }),
                    ze = W ? {
                        appear: !0,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        onEnter: j
                    } : {};
                return d().createElement(d().Fragment, null, d().cloneElement(T, Ee), d().createElement(g.Ay, (0, o._)({ in: we,
                    timeout: 120
                }, ze), (function(e) {
                    return S || F ? d().createElement(f.Ay, {
                        container: S
                    }, d().createElement(E, (0, o._)({
                        open: !0,
                        arrow: l,
                        arrowStyle: me.arrow,
                        style: (0, i._)({}, me.popper, y, ve[e]),
                        bg: J,
                        arrowRef: ce,
                        ref: ae
                    }, he.popper, {
                        sx: H
                    }), d().createElement(m.A, {
                        ref: te
                    }, C))) : d().createElement(E, (0, o._)({
                        open: !0,
                        arrow: l,
                        arrowStyle: me.arrow,
                        style: (0, i._)({}, me.popper, y, ve[e]),
                        bg: J,
                        arrowRef: ce,
                        ref: ae
                    }, he.popper, {
                        sx: H
                    }), d().createElement(m.A, {
                        ref: te
                    }, C))
                })))
            }))
        },
        V7s4: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => o
            });
            var r = n("Bkzn"),
                o = new function e() {
                    var t = this;
                    (0, r._)(this, e), this.cbs = {}, this.on = function(e, n) {
                        var r = t;
                        return t.cbs[e] || (t.cbs[e] = []), t.cbs[e].push(n),
                            function() {
                                return r.off(e, n)
                            }
                    }, this.off = function(e, n) {
                        t.cbs[e] || (t.cbs[e] = []), t.cbs[e] = t.cbs[e].filter((function(e) {
                            return e !== n
                        }))
                    }, this.emit = function(e) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        t.cbs[e] || (t.cbs[e] = []), t.cbs[e].forEach((function(e) {
                            return "function" === typeof e && e.apply(null, r)
                        }))
                    }
                }
        },
        D79G: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Ge
            });
            var r = n("mXdx"),
                o = n("DTvD"),
                i = n.n(o),
                s = n("5E2b"),
                a = n("JWaR"),
                l = n("jzw2"),
                u = n("4hgs"),
                c = n("S+0I"),
                d = n("66mo"),
                p = n.n(d),
                f = n("5nld"),
                m = function() {
                    var e = (0, c._)(p().mark((function e() {
                        var t, n, r, o, i, s, a = arguments;
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {
                                        pathFilter: !0
                                    }, n = {
                                        data: !0,
                                        message: "",
                                        success: !1
                                    }, e.prev = 2, e.next = 5, (0, f.bE)("/bapi/futures/v1/private/future/common/user-setting/get-future-tutorial-result", t);
                                case 5:
                                    r = e.sent, o = r.data, i = r.message, s = r.success, n = {
                                        data: !!o,
                                        message: i,
                                        success: s
                                    }, e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(2), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 15:
                                    return e.abrupt("return", n);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 12]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, c._)(p().mark((function e() {
                        var t, n, r, o, i, s, a = arguments;
                        return p().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, n = {
                                        data: !1,
                                        message: "",
                                        success: !1
                                    }, e.prev = 2, e.next = 5, (0, f.bE)("/bapi/futures/v1/private/future/common/user-setting/update-future-tutorial-result", t);
                                case 5:
                                    r = e.sent, o = r.data, i = r.message, s = r.success, n = {
                                        data: !!o,
                                        message: i,
                                        success: s
                                    }, e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(2), console.log("BAD REQUEST:\n       parse ERROR is ".concat(e.t0.message, "\n").concat(e.t0.stack));
                                case 15:
                                    return e.abrupt("return", n);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 12]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                x = n("A4nT"),
                g = n("21Yo");
            const v = x.Bz.TUTORIAL_RESULT,
                b = (e = !1) => {
                    const {
                        data: t
                    } = (e => {
                        const {
                            isExistFutureAccount: t
                        } = (0, g.Py)();
                        return (0, u.useQuery)(v, (() => m()), {
                            notifyOnChangeProps: ["data"],
                            cacheTime: 1 / 0,
                            staleTime: 1 / 0,
                            placeholderData: {
                                data: !0,
                                success: !0,
                                message: ""
                            },
                            ...e,
                            enabled: "undefined" === typeof e ? .enabled ? Boolean(t) : Boolean(t && e ? .enabled)
                        })
                    })({
                        enabled: e
                    });
                    return t ? .data ? ? !0
                };
            var w = n("GXOF"),
                y = n("0hn9"),
                _ = n("3ARj"),
                k = n("KRo/"),
                S = n("V7s4"),
                C = n("YWzz"),
                E = n("cFMj"),
                z = n("edYk"),
                j = function() {};
            const q = i().createContext({
                enqueueNotification: j,
                closeNotification: j
            });
            var A = n("5YBB");
            const T = i().memo((({
                answeredLen: e,
                questionsLength: t,
                error: n,
                firstTip: o
            }) => {
                const {
                    t: i
                } = (0, _.o)("", "futures-ui");
                return n ? (0, r.jsx)(A.x, {
                    t: i,
                    className: "reselecting",
                    parent: "div",
                    i18nKey: "quiz-hint-reselect-short",
                    defaults: "Please select the correct answer."
                }) : e ? (0, r.jsx)(A.x, {
                    t: i,
                    i18nKey: "quiz-hint-before-correct",
                    defaults: "You have finished {{answeredLen}}/{{questionsLength}} questions.",
                    values: {
                        answeredLen: e,
                        questionsLength: t
                    }
                }) : o ? (0, r.jsx)(r.Fragment, {
                    children: o
                }) : (0, r.jsx)(A.x, {
                    t: i,
                    i18nKey: "quiz-hint-before-answer",
                    defaults: "You need to pass all {{questionsLength}} questions to be able to trade Futures.",
                    values: {
                        questionsLength: t
                    }
                })
            }));
            var I = n("b6CO"),
                L = n("hrAD"),
                N = n("KrVi"),
                R = n("u4/q"),
                M = {
                    xl: {
                        width: "20px",
                        height: "20px",
                        mr: "5px"
                    },
                    l: {
                        width: "18px",
                        height: "20px",
                        mr: "5px"
                    },
                    m: {
                        width: "18px",
                        height: "20px",
                        mr: "5px"
                    },
                    xs: {
                        width: "18px",
                        height: "12px",
                        mr: "5px"
                    }
                },
                D = {
                    xl: M.xl,
                    large: M.xl,
                    l: M.l,
                    normal: M.l,
                    m: M.m,
                    small: M.m,
                    xs: M.xs,
                    tiny: M.xs,
                    s: M.xs
                },
                O = {
                    color: "t.third",
                    bg: "muted",
                    borderColor: "t.third",
                    verticalAlign: "bottom",
                    ":hover:not(:disabled):not(:active)": {
                        bg: "muted",
                        backgroundImage: "none"
                    }
                },
                B = (0, o.forwardRef)((function(e, t) {
                    var n = e.loading,
                        r = e.children,
                        a = e.sz,
                        u = void 0 === a ? "m" : a,
                        c = e.sx,
                        d = void 0 === c ? {} : c,
                        p = e.spinnerProps,
                        f = void 0 === p ? {} : p,
                        m = (0, N._)(e, ["loading", "children", "sz", "sx", "spinnerProps"]),
                        h = D[u] || {},
                        x = n ? O : {},
                        g = f.sx,
                        v = void 0 === g ? {} : g,
                        b = (0, N._)(f, ["sx"]),
                        w = (0, o.useCallback)((function(e) {
                            var t;
                            return n ? null : null === (t = m.onClick) || void 0 === t ? void 0 : t.call(m, e)
                        }), [m.onClick, n]);
                    return i().createElement(l.A, (0, I._)({
                        ref: t,
                        sx: (0, L._)({}, x, d),
                        disabled: n,
                        sz: u
                    }, m, {
                        onClick: w
                    }), n && i().createElement(R.A, (0, I._)({
                        itemsColor: "t.third",
                        sx: (0, L._)({}, h, v)
                    }, b)), i().createElement(s.A, {
                        display: "inherit"
                    }, r))
                }));
            B.displayName = "LoadingButton";
            const F = B,
                V = ({
                    disabled: e = !1,
                    children: t,
                    ...n
                }) => (0, r.jsx)(F, {
                    disabled: e,
                    sz: "l",
                    ...n,
                    children: t
                }),
                P = i().memo(V);
            var Q = n("iGqe"),
                U = n("FHqy");
            const $ = e => (0, r.jsx)(U.A, {
                    width: "22px",
                    height: "28px",
                    viewBox: "0 0 22 28",
                    fill: "none",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M1.15254 13.3209L8.02001 27H17.486C18.4666 22 21 20.6236 21 16.6C21 14.3687 20.3548 12.7 19.5277 11.7687C18.9569 11.1261 17.9191 10.9925 17.486 10.9925C17.3313 10.7338 16.7782 10.0824 16.2795 9.73135C15.5397 9.21053 14.4235 9.56966 13.8666 9.73135C13.6192 9.34329 12.9572 8.52837 12.289 8.37314C11.6208 8.21792 10.6494 8.43782 10.2473 8.56717V2.84329C10.2164 2.22886 9.80183 1 8.39121 1C6.9806 1 6.62794 2.22886 6.62794 2.84329V11.9474C6.62794 13.3158 6.44185 13.2835 6.28718 13.3158C5.35914 13.5098 4.49346 11.8657 4.12225 11.3806C3.75103 10.8955 2.6374 10.2164 1.61655 10.9925C0.799882 11.6134 0.966929 12.8035 1.15254 13.3209Z",
                        fill: "white",
                        stroke: "#848E9C",
                        strokeWidth: "1.5",
                        strokeLinejoin: "round"
                    })
                }),
                K = {
                    position: "absolute"
                },
                G = ({
                    children: e,
                    tip: t,
                    pointerSx: n,
                    ...o
                }) => t ? (0, r.jsx)(Q.A, {
                    placement: "top",
                    open: !0,
                    arrow: !0,
                    tip: t,
                    ...o,
                    children: i().cloneElement(e, e.props, (0, r.jsxs)(r.Fragment, {
                        children: [e.props.children, (0, r.jsx)($, {
                            __css: K,
                            sx: n
                        })]
                    }))
                }) : (0, r.jsx)(r.Fragment, {
                    children: e
                }),
                W = {
                    width: "128px"
                },
                Z = {
                    right: "64px",
                    top: "54px"
                },
                H = i().memo((({
                    onSubmit: e,
                    hasChange: t,
                    questionsLength: n,
                    error: i,
                    loading: s,
                    currentQuestionIndex: a,
                    showTip: l = !1,
                    submitButton: u,
                    nextButton: c,
                    buttonTooltip: d
                }) => {
                    const {
                        getI18n: p
                    } = (0, _.o)("", "futures-ui"), {
                        getI18n: f
                    } = (0, _.o)("", "trade-ui"), {
                        btnContent: m,
                        isDisabled: h
                    } = (0, o.useMemo)((() => a === n - 1 ? {
                        btnContent: u || f("trd-leveraged-quiz-btntext2"),
                        isDisabled: !t || i
                    } : {
                        btnContent: c || p("quiz-fint-next", {
                            defaultValue: "Next"
                        }),
                        isDisabled: !t || i
                    }), [f, p, i, t, n, a, u, c]);
                    return (0, r.jsx)(G, {
                        pointerSx: Z,
                        tip: l ? d || p("quiz-video-lesson-next-button-hint", {
                            defaultValue: "Send an answer!"
                        }) : "",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(P, {
                                sx: W,
                                onClick: e,
                                disabled: h,
                                loading: s,
                                children: m
                            })
                        })
                    })
                }));
            var Y = n("iKvg"),
                X = n("qoEP"),
                J = n("mguP"),
                ee = n("ZWPC"),
                te = function(e) {
                    var t = e.checked,
                        n = e.disabled,
                        r = (0, N._)(e, ["checked", "disabled"]);
                    return i().createElement(U.A, (0, I._)({
                        viewBox: "0 0 16 16",
                        fill: "none",
                        sx: {
                            fill: n ? "line" : "none"
                        },
                        size: 16
                    }, r), i().createElement("circle", (0, I._)({
                        cx: "8",
                        cy: "8",
                        r: "7.5"
                    }, n ? {
                        fill: "line"
                    } : {
                        stroke: "currentColor"
                    })), t ? i().createElement("circle", {
                        cx: "8",
                        cy: "8",
                        r: "4",
                        fill: "currentColor"
                    }) : null)
                },
                ne = i().createElement(te, {
                    checked: !0
                }),
                re = i().createElement(te, null),
                oe = i().createElement(te, {
                    checked: !0,
                    disabled: !0
                }),
                ie = i().createElement(te, {
                    disabled: !0
                }),
                se = {
                    top: "column",
                    bottom: "column-reverse",
                    left: "row-reverse",
                    right: "row"
                },
                ae = {
                    top: {
                        mt: "minor"
                    },
                    bottom: {
                        mb: "minor"
                    },
                    left: {
                        mr: "xs"
                    },
                    right: {
                        ml: "xs"
                    }
                },
                le = (0, ee.UF)("uikit-core", "Radio"),
                ue = (0, o.forwardRef)((function(e, t) {
                    var n = e.checked,
                        r = e.children,
                        a = e.label,
                        l = e.id,
                        u = e.onCheckedChange,
                        c = e.name,
                        d = void 0 === c ? "" : c,
                        p = e.value,
                        f = e.onChange,
                        m = e.disabled,
                        h = void 0 !== m && m,
                        x = e.direction,
                        g = void 0 === x ? "right" : x,
                        v = (e.variant, e.accept),
                        b = e.alt,
                        w = e.autoFocus,
                        y = e.capture,
                        _ = e.form,
                        k = e.formAction,
                        S = e.formEncType,
                        C = e.formMethod,
                        E = e.formNoValidate,
                        z = e.formTarget,
                        j = e.list,
                        q = e.max,
                        A = e.maxLength,
                        T = e.min,
                        L = e.minLength,
                        R = e.pattern,
                        M = e.readOnly,
                        D = e.required,
                        O = (0, N._)(e, ["checked", "children", "label", "id", "onCheckedChange", "name", "value", "onChange", "disabled", "direction", "variant", "accept", "alt", "autoFocus", "capture", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "list", "max", "maxLength", "min", "minLength", "pattern", "readOnly", "required"]);
                    le(), a = a || r;
                    var B = i().useRef(null != n).current,
                        F = (0, J._)((0, o.useState)(n), 2),
                        V = F[0],
                        P = F[1];
                    B && V !== n && P(n);
                    var Q = function(e) {
                        var t = e.target.checked;
                        V !== t && P(t), u && u(e, t)
                    };
                    return i().createElement(s.A, (0, I._)({
                        ref: t,
                        tx: "radio",
                        variant: h ? "disabled" : "default"
                    }, O, {
                        __css: {
                            "& svg": {
                                color: h ? null : V ? "primary" : "t.disabled"
                            }
                        },
                        onClick: function() {
                            h || V || (P(!V), f && f(p))
                        }
                    }), i().createElement(s.A, {
                        as: "label",
                        sx: {
                            display: "flex",
                            flexDirection: se[g],
                            alignItems: "center"
                        }
                    }, h ? V ? oe : ie : V ? ne : re, a ? i().createElement(s.A, (0, I._)({}, ae[g]), a, i().createElement("input", {
                        id: l,
                        disabled: h,
                        style: {
                            clip: "rect(0px,0px,0px,0px)",
                            position: "absolute"
                        },
                        hidden: !0,
                        type: "radio",
                        "data-bn-type": "radio",
                        name: d,
                        checked: V,
                        value: p,
                        onChange: Q,
                        accept: v,
                        alt: b,
                        autoFocus: w,
                        capture: y,
                        form: _,
                        formAction: k,
                        formEncType: S,
                        formMethod: C,
                        formNoValidate: E,
                        formTarget: z,
                        list: j,
                        max: q,
                        maxLength: A,
                        min: T,
                        minLength: L,
                        pattern: R,
                        readOnly: M,
                        required: D
                    })) : i().createElement("input", {
                        disabled: h,
                        style: {
                            clip: "rect(0px,0px,0px,0px)",
                            position: "absolute"
                        },
                        type: "radio",
                        "data-bn-type": "radio",
                        name: d,
                        checked: V,
                        value: p,
                        onChange: Q
                    })))
                }));
            ue.__name = "Radio";
            var ce = {
                    Vertical: {
                        marginKey: "marginBottom",
                        gap: 16,
                        direction: "column"
                    },
                    Horizontal: {
                        marginKey: "marginRight",
                        gap: 24,
                        direction: "row"
                    }
                },
                de = (0, o.forwardRef)((function(e, t) {
                    var n = e.children,
                        r = e.value,
                        o = void 0 === r ? "" : r,
                        a = e.name,
                        l = e.onChange,
                        u = e.layout,
                        c = (0, N._)(e, ["children", "value", "name", "onChange", "layout"]),
                        d = i().Children.map(n, (function(e) {
                            return i().isValidElement(e) && "Radio" === (e && e.type && e.type.__name) ? i().cloneElement(e, (0, X._)((0, L._)({}, e.props), {
                                onChange: l,
                                name: a,
                                checked: o === e.props.value
                            })) : null
                        }));
                    if ("Horizontal" === u || "Vertical" === u) {
                        var p = ce[u];
                        return i().createElement(s.A, (0, I._)({
                            ref: t
                        }, c, {
                            __css: {
                                "& > *:not(:last-child)": (0, Y._)({}, p.marginKey, p.gap),
                                display: "flex",
                                flexDirection: p.direction
                            }
                        }), d)
                    }
                    return i().createElement(s.A, (0, I._)({
                        ref: t
                    }, c), d)
                }));
            ue.displayName = "Radio";
            const pe = ue;
            var fe = n("LLrz");
            const me = function(e) {
                return i().createElement(U.A, (0, I._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 18H8v3h8v-3zm-8.33-2.5a7 7 0 118.66 0h-3.08v-2.355l2.67-2.67-1.767-1.768L12 10.86 9.847 8.707 8.08 10.475l2.67 2.67V15.5H7.67z",
                    fill: "currentColor"
                }))
            };
            var he = n("xqbL"),
                xe = n.n(he);
            const ge = {
                    left: "10px",
                    top: "10px",
                    width: "22px !important",
                    height: "28px !important"
                },
                ve = {
                    position: "absolute",
                    left: "0px",
                    top: 6
                },
                be = ({
                    index: e,
                    value: t,
                    onChange: n,
                    questionsIndex: i,
                    answerIndex: s,
                    hintIndex: a,
                    rightAnswer: l,
                    getI18n: u,
                    hasChange: c,
                    questionsLength: d,
                    showTip: p,
                    defaultMessageMap: f,
                    hintTitle: m = null
                }) => {
                    const {
                        t: h
                    } = (0, _.o)("", "futures-ui"), x = u(`${i}${e+1}`, f ? {
                        defaultValue: f ? .[`${i}${e+1}`]
                    } : void 0).split("\n"), g = x.shift(), v = u(`${s}${e+1}`, f ? {
                        defaultValue: f ? .[`${s}${e+1}`]
                    } : void 0).split("||"), b = u(`${a}${e+1}`, {
                        defaultValue: f ? .[`${a}${e+1}`] || ""
                    }), w = b ? b.split("||") : [], [y, k] = (0, o.useState)(null);
                    return (0, o.useEffect)((() => {
                        t !== l[e] && k(t)
                    }), [t, l, e]), (0, r.jsxs)("div", {
                        className: "item",
                        children: [(0, r.jsx)("div", {
                            className: "question-order",
                            children: (0, r.jsx)(A.x, {
                                t: h,
                                i18nKey: "quiz-questions-order",
                                defaults: "Questions {{current}}/<total>{{total}}</total>",
                                parent: "b",
                                values: {
                                    current: e + 1,
                                    total: d
                                },
                                components: {
                                    total: (0, r.jsx)("span", {
                                        className: "total"
                                    })
                                }
                            })
                        }), (0, r.jsxs)("div", {
                            className: "question-container",
                            children: [(0, r.jsx)("b", {
                                className: "question",
                                children: g
                            }), x.map(((e, t) => (0, r.jsx)("div", {
                                className: "question-item",
                                children: e
                            }, t)))]
                        }), (0, r.jsx)(de, {
                            tx: "optionsTutorial",
                            variant: "radiosGroup",
                            name: "xx",
                            value: t,
                            onChange: n,
                            children: v.map(((n, o) => {
                                let i = {
                                    answer: !0
                                };
                                p && l[e] === o ? i.active = !0 : c && l[e] === o ? i.right = !0 : (t === o && l[e] !== t || y === o) && (i.error = !0);
                                const s = p && o === l[e];
                                return (0, r.jsx)(pe, {
                                    className: xe()(i),
                                    value: o,
                                    children: (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)(fe.A, {
                                            sx: {
                                                position: "relative"
                                            },
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            children: (0, r.jsx)("div", {
                                                children: v[o]
                                            })
                                        }), (0, r.jsx)(G, {
                                            tip: s ? h("futures-video-lesson-question-hint", {
                                                defaultValue: "Try to answer the question!"
                                            }) : "",
                                            arrowPadding: 16,
                                            placement: "top-start",
                                            pointerSx: ge,
                                            children: (0, r.jsx)("div", {
                                                style: ve
                                            })
                                        })]
                                    })
                                }, o)
                            }))
                        }), (0, r.jsxs)("div", {
                            className: "hint-container",
                            children: [!!w.length && (0, r.jsxs)("div", {
                                className: "hint-title",
                                children: [(0, r.jsx)(me, {
                                    mr: "4px"
                                }), " ", m]
                            }), (0, r.jsx)("div", {
                                children: w.map(((e, t) => (0, r.jsx)("div", {
                                    className: "hint-content",
                                    children: e
                                }, t)))
                            })]
                        })]
                    })
                },
                we = new Array(14).fill(null).map((() => !1)),
                ye = ({
                    onSubmit: e,
                    onTrack: t,
                    title: n,
                    questionsIndex: i,
                    answerIndex: l,
                    rightAnswer: c,
                    successBtnText: d,
                    hintIndex: p,
                    hintUrlIndex: f,
                    getI18n: m,
                    updateData: x,
                    lng: g
                }, b) => {
                    const w = c.length,
                        [y, _] = (0, o.useState)(Array(w).fill(void 0)),
                        k = y.filter((e => void 0 !== e)).length,
                        [S, C] = (0, o.useState)(!1),
                        [j, A] = (0, o.useState)(we),
                        [I, L] = (0, o.useState)(0),
                        {
                            isMobile: N
                        } = (0, E.Q)(),
                        {
                            enqueueNotification: R
                        } = function() {
                            var e = (0, o.useContext)(q);
                            return {
                                enqueueNotification: e.enqueueNotification,
                                closeNotification: e.closeNotification
                            }
                        }(),
                        [M, D] = (0, o.useState)(!1),
                        O = 0 === I && c[I] !== y[I],
                        B = 0 === I && c[I] === y[I],
                        {
                            mutate: F
                        } = (() => {
                            const e = (0, u.useQueryClient)();
                            return (0, u.useMutation)({
                                mutationFn: h,
                                onSuccess: () => {
                                    e.invalidateQueries({
                                        queryKey: v
                                    })
                                }
                            })
                        })(),
                        V = (0, o.useCallback)((async () => {
                            if (M && I === w - 1) return C(!0), A(we), F({
                                isFutureTutorialPassed: !0,
                                pathFilter: !0
                            }, {
                                onSuccess: n => {
                                    const {
                                        success: r,
                                        data: o,
                                        message: i
                                    } = n;
                                    r || o ? (e(), t("exam_passed", "start_trading")) : (R({
                                        message: i,
                                        variant: "error"
                                    }), t("exam_failed", "start_trading"))
                                }
                            }), x && x(), void C(!1);
                            L(I + 1), (0, z.u4)({
                                eventName: "futures_quiz_flow_show_0727",
                                title: `question${I+1}`,
                                elementId: "fix_and_next"
                            })
                        }), [e, R, x, t, L, I, M, w]);
                    (0, o.useEffect)((function() {
                        const e = c.reduce(((e, t, n) => e && t === y[n]));
                        D(e)
                    }), [y, c]), (0, o.useEffect)((function() {
                        (0, z.u4)({
                            event: "PopupView",
                            eventName: "futures_quiz_flow_show_0727",
                            title: `question${I+1}`
                        })
                    }), [I, t]), (0, o.useImperativeHandle)(b, (() => ({
                        getCurrentQuestionIndex: () => I
                    })));
                    const P = j[I],
                        Q = "number" === typeof y[I] && c[I] !== y[I];
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(a.A, {
                            variant: "headline6",
                            className: "title",
                            children: m(n)
                        }), (0, r.jsx)(s.A, {
                            className: "content",
                            children: (0, r.jsx)("div", {
                                className: "scrollBar view",
                                ref: b,
                                children: (0, r.jsx)(be, {
                                    index: I,
                                    value: y[I],
                                    questionsIndex: i,
                                    answerIndex: l,
                                    hintUrlIndex: f,
                                    hintIndex: p,
                                    rightAnswer: c,
                                    onChange: e => ((e, t) => {
                                        const n = y.concat([]);
                                        n[t] = e, _(n), j[t] || c[t] !== e ? j[t] || c[t] === e || (0, z.u4)({
                                            eventName: "futures_quiz_flow_show_0727",
                                            title: `question${I+1}`,
                                            elementId: "select_incorrect_answer"
                                        }) : (O || I === c.length - 1 || L(I + 1), R({
                                            message: m("Correct"),
                                            variant: "success",
                                            autoHideDuration: 2e3,
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: N ? "center" : "right"
                                            }
                                        }), (0, z.u4)({
                                            eventName: "futures_quiz_flow_show_0727",
                                            title: `question${I+1}`,
                                            elementId: "select_correct_answer"
                                        }));
                                        const r = [...j];
                                        r[t] = !0, A(r)
                                    })(e, I),
                                    getI18n: m,
                                    hasChange: P,
                                    lng: g,
                                    questionsLength: w,
                                    showTip: O
                                }, I)
                            })
                        }), (0, r.jsxs)("div", {
                            className: "questions-bottom",
                            children: [(0, r.jsx)("div", {
                                className: "tips",
                                children: (0, r.jsx)(T, {
                                    answeredLen: k,
                                    questionsLength: w,
                                    error: Q
                                })
                            }), (0, r.jsx)(H, {
                                successBtnText: d,
                                hasChange: P,
                                onSubmit: V,
                                answeredLen: k,
                                questionsLength: w,
                                currentQuestionIndex: I,
                                error: Q,
                                loading: S,
                                showTip: B
                            })]
                        })]
                    })
                },
                _e = i().memo(i().forwardRef(ye)),
                ke = ({
                    path: e = "",
                    title: t = "",
                    padding: n
                }) => {
                    const o = `?${encodeURI("plugin[captions-v1][onByDefault]=true")}`;
                    return (0, r.jsx)("div", {
                        className: "wistia_responsive_padding",
                        style: {
                            padding: `${n||"56.25% 0 0 0"}`,
                            position: "relative"
                        },
                        children: (0, r.jsx)("div", {
                            className: "wistia_responsive_wrapper",
                            style: {
                                height: "100%",
                                left: 0,
                                position: "absolute",
                                top: 0,
                                width: "100%"
                            },
                            children: (0, r.jsx)("iframe", {
                                className: "wistia_embed",
                                src: `https://fast.wistia.net/embed/iframe/${e}${o}`,
                                title: t,
                                allow: "autoplay; fullscreen",
                                allowTransparency: !0,
                                frameBorder: "0",
                                scrolling: "no",
                                name: "wistia_embed",
                                allowFullScreen: !0,
                                width: "100%",
                                height: "100%"
                            })
                        })
                    })
                },
                Se = i().memo(ke),
                Ce = ({
                    onSubmit: e,
                    tips: t,
                    tipsNoQuiz: n,
                    title: o,
                    videoTitle: i,
                    videoPath: s,
                    getI18n: l,
                    btnText: u,
                    padding: c,
                    review: d
                }) => {
                    const p = d ? n : t;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(a.A, {
                            variant: "headline6",
                            className: "title",
                            children: l(o)
                        }), (0, r.jsxs)("div", {
                            className: "content",
                            children: [(0, r.jsx)("div", {
                                className: "top-tips tips",
                                children: p
                            }), s ? (0, r.jsx)(Se, {
                                path: s,
                                title: l(i),
                                padding: c
                            }) : (0, r.jsx)("div", {
                                className: "video-placeholder"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "bottom",
                            children: !d && (0, r.jsx)(P, {
                                onClick: e,
                                children: l(u || "trd-leveraged-quiz-btntext1")
                            })
                        })]
                    })
                },
                Ee = i().memo(Ce),
                ze = {
                    bg: "modalBg",
                    height: "100%",
                    ".title": {
                        color: "t.primary",
                        pt: "18px",
                        px: [16, 24],
                        pb: 42,
                        lineHeight: "24px",
                        display: "flex",
                        alignItems: "center",
                        ".back-icon": {
                            mr: "48px",
                            cursor: "pointer"
                        }
                    },
                    ".content": {
                        px: [16, 24],
                        py: 0,
                        boxSizing: "border-box",
                        height: "calc(100% - 176px)",
                        overflowY: "auto",
                        ".scrollBar::-webkit-scrollbar": {
                            width: "5px",
                            height: "6px"
                        },
                        ".scrollBar.view": {
                            height: "100%",
                            overflowY: "auto"
                        }
                    },
                    ".top-tips": {
                        mb: "24px",
                        fontSize: "14px",
                        color: "t.secondary"
                    },
                    ".tips": {
                        color: "t.third",
                        fontSize: "14px",
                        ".primary": {
                            color: "t.primary"
                        },
                        ".reselecting": {
                            color: "t.yellow"
                        }
                    },
                    ".video-placeholder": {
                        width: "100%",
                        height: "380px",
                        backgroundColor: "t.white"
                    },
                    ".question-content": {
                        padding: "16px"
                    },
                    ".answer-result": {
                        color: "t.disabled",
                        ".primary": {
                            color: "t.primary"
                        }
                    },
                    ".bottom": {
                        py: "24px",
                        px: [16, 24],
                        textAlign: ["center", "right"],
                        button: {
                            width: ["100%", "auto"]
                        }
                    },
                    ".questions-bottom": {
                        display: "flex",
                        py: "24px",
                        px: [16, 24],
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative"
                    },
                    ".item": {
                        paddingBottom: "30px",
                        color: "t.primary"
                    },
                    ".question-order": {
                        mb: "15px",
                        fontSize: "16px",
                        b: {
                            fontWeight: 500
                        },
                        ".total": {
                            color: "t.third"
                        }
                    },
                    ".question-container": {
                        mb: "30px"
                    },
                    ".question": {
                        paddingBottom: "8px",
                        fontSize: "16px",
                        fontWeight: 500
                    },
                    ".answer": {
                        cursor: "pointer",
                        display: "block",
                        paddingY: "6px",
                        paddingX: "12px",
                        borderRadius: "4px",
                        position: "relative",
                        label: {
                            cursor: "pointer",
                            alignItems: "flex-start"
                        },
                        svg: {
                            marginTop: "2px",
                            cursor: "pointer"
                        },
                        border: "1px solid",
                        borderColor: "line",
                        mb: "8px",
                        py: "10px",
                        pr: "12px",
                        ".check-icon": {
                            display: "none",
                            width: "24px"
                        },
                        "label > div": {
                            flex: 1
                        },
                        "&.active": {
                            bg: "badgeYellowBg"
                        },
                        "&.right": {
                            bg: "toastSuccessBg",
                            borderColor: "toastSuccessBg",
                            color: "success",
                            svg: {
                                color: "success",
                                stroke: "currentColor"
                            }
                        },
                        "&.error": {
                            bg: "toastFailBg",
                            borderColor: "toastFailBg",
                            color: "error",
                            svg: {
                                color: "error",
                                stroke: "currentColor"
                            }
                        }
                    },
                    ".right": {
                        color: "success"
                    },
                    ".error": {
                        color: "error"
                    },
                    ".hint": {
                        mr: "10px",
                        color: "t.third"
                    },
                    ".hint-container": {
                        my: "30px",
                        color: "t.third",
                        ".hint-title": {
                            display: "flex",
                            alignItems: "center",
                            mb: "8px"
                        }
                    },
                    ".hint-content": {
                        color: "t.third"
                    },
                    ".question-item": {
                        mb: "8px"
                    },
                    ".bn-tooltip-box": {
                        width: "fit-content",
                        fontSize: "14px",
                        px: "8px",
                        py: "12px"
                    }
                },
                je = {
                    borderRadius: "6px",
                    overflow: "hidden",
                    boxShadow: "elevation3"
                },
                qe = {
                    NEW0223: {
                        questionsIndex: "futures-video-lesson-quiz-new0223-question",
                        answerIndex: "futures-video-lesson-quiz-new0223-ans",
                        hintIndex: "futures-video-lesson-quiz-new0223-hint",
                        hintUrlIndex: "futures-video-lesson-quiz-new0223-hintUrl",
                        rightAnswer: [1, 2, 1, 0, 2, 0, 1, 2, 1, 1, 2, 1, 0, 0]
                    },
                    "0505": {
                        questionsIndex: "futures-video-lesson-quiz-new0223-question",
                        answerIndex: "futures-video-lesson-quiz-new0223-ans",
                        hintIndex: "futures-video-lesson-quiz-0505-hint",
                        hintUrlIndex: "",
                        rightAnswer: [1, 2, 1, 0, 2, 0, 1, 2, 1, 1, 2, 1, 0, 0, 1]
                    },
                    DEFAULT: {
                        questionsIndex: "futures-video-lesson-quiz-new-question",
                        answerIndex: "futures-video-lesson-quiz-new-ans",
                        hintIndex: "futures-video-lesson-quiz-hint",
                        hintUrlIndex: "futures-video-lesson-quiz-hintUrl",
                        rightAnswer: [0, 2, 1, 2, 1, 0, 2, 1, 0, 2, 1, 1, 1, 0]
                    }
                },
                Ae = ({
                    onSuccess: e = () => {},
                    activeType: t,
                    setActiveType: n,
                    review: i,
                    updateData: a,
                    videoPath: l,
                    lng: u,
                    sensorsTrack: c,
                    questionConfig: d = qe.DEFAULT,
                    setQuizPassDialogVisible: p,
                    questionRef: f
                }) => {
                    const m = (0, C.BJ)(),
                        {
                            getI18n: h
                        } = (0, _.o)("", "futures-ui"),
                        {
                            getI18n: x
                        } = (0, _.o)("", "trade-ui"),
                        {
                            isMobile: g
                        } = (0, E.Q)(),
                        v = (0, o.useCallback)((() => {
                            n("questions"), (0, z.u4)({
                                _track: c,
                                elementId: "start_quiz"
                            })
                        }), [c, n]),
                        b = (0, o.useCallback)(((e, t = "submit") => {
                            (0, z.u4)({
                                _track: c,
                                elementId: t,
                                dfStatus: e
                            })
                        }), [c]),
                        w = {
                            title: "futures-video-lesson-title",
                            tips: h("futures-video-lesson-tips1"),
                            tipsNoQuiz: x("futures-video-lesson-tips2"),
                            videoTitle: "futures-video-lesson-iframe-title",
                            videoPath: (() => {
                                if ("string" === typeof l) return l;
                                let e = "";
                                return e = g ? m ? "ee1s2i3y6z" : "j7xr0stker" : m ? "fjw94jmw16" : "yy4khyz2qb", e
                            })(),
                            onSubmit: v,
                            btnText: "futures-video-lesson-start-quiz",
                            getI18n: h,
                            review: i,
                            padding: g ? "177.7% 0 0 0" : void 0
                        },
                        y = {
                            title: "futures-video-lesson-quiz-title",
                            onSubmit: () => {
                                e(), p(!0)
                            },
                            onTrack: b,
                            review: i,
                            updateData: a,
                            successBtnText: h("futures-video-lesson-pass-btn"),
                            getI18n: h,
                            showIndex: !0,
                            lng: u,
                            ...d,
                            sensorsTrack: c
                        },
                        k = (0, o.useMemo)((() => {
                            switch (t) {
                                case "video":
                                    return (0, r.jsx)(Ee, { ...w
                                    });
                                case "questions":
                                    return (0, r.jsx)(_e, { ...y,
                                        ref: f
                                    });
                                default:
                                    return null
                            }
                        }), [t, h, i]);
                    return (0, r.jsx)(s.A, {
                        sx: ze,
                        children: k
                    })
                },
                Te = i().memo(Ae);
            var Ie = n("h7TM"),
                Le = n("FIMj");
            const Ne = function(e) {
                    return i().createElement(U.A, (0, I._)({
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
                },
                Re = ({
                    visible: e,
                    setVisible: t,
                    timeout: n,
                    onOK: i,
                    title: s,
                    content: u,
                    okText: c
                }) => {
                    const [d, p] = (0, o.useState)(n), f = (0, o.useCallback)((() => {
                        t(!1), i()
                    }), [t, i]);
                    return (0, o.useEffect)((() => {
                        e || p(n)
                    }), [e, n]), (0, o.useEffect)((() => {
                        e && d && setTimeout((() => {
                            p(d - 1)
                        }), 1e3)
                    }), [d, e]), (0, o.useEffect)((() => {
                        0 === d && f()
                    }), [d, f]), (0, r.jsx)(Le.A, {
                        visible: e,
                        sx: {
                            width: "360px",
                            p: "md"
                        },
                        maskStyles: {
                            zIndex: 1e4
                        },
                        children: (0, r.jsxs)(fe.A, {
                            flexDirection: "column",
                            alignItems: "center",
                            children: [(0, r.jsx)(Ne, {
                                size: 96,
                                mb: "sm",
                                color: "t.white"
                            }), (0, r.jsx)(a.A, {
                                className: "text-center",
                                variant: "title6",
                                color: "t.primary",
                                as: "h6",
                                mb: "xs",
                                children: s
                            }), (0, r.jsx)(a.A, {
                                variant: "body2",
                                mb: "md",
                                color: "t.third",
                                textAlign: "center",
                                children: u
                            }), (0, r.jsxs)(l.A, {
                                sz: "l",
                                width: "100%",
                                onClick: f,
                                children: [c, " (", d, "s)"]
                            })]
                        })
                    })
                };
            var Me = n("FKGv"),
                De = n("VCr+");
            var Oe = n("o35v");
            const Be = () => (0, Oe.z)("futuresTradeUI") ? .result || {},
                Fe = (0, o.lazy)((() => Promise.all([n.e(2639), n.e(2081)]).then(n.bind(n, "ED7s"))));
            let Ve, Pe;
            const Qe = ({
                showCloseIcon: e = !0,
                videoPath: t,
                lng: n,
                sensorsTrack: i,
                questionConfig: u = qe.DEFAULT,
                trackFuncs: c,
                enableSkipQuiz: d = !1,
                businessComplianceCheckResult: p,
                storeName: f,
                useFeatureGate: m = Be
            }) => {
                const {
                    isExistFutureAccount: h
                } = (0, y.Py)(), {
                    isLoggedIn: x
                } = (0, y.vz)(), {
                    getI18n: g
                } = (0, _.o)("", "trade-ui"), {
                    getI18n: v
                } = (0, _.o)("futures-trade", "futures-ui"), {
                    getI18n: C
                } = (0, _.o)("", "futures-ui"), {
                    onVisibleChange: E,
                    onClickCongratOk: j,
                    onCloseQuestion: q,
                    onClickQuitQuesOk: A
                } = c ? ? {}, [T, I] = (0, o.useState)(!1), [L, N] = (0, o.useState)(Ie.SJ);
                (0, De.V)({
                    storeName: f,
                    enableSkipQuiz: d
                }), (e => {
                    const t = e ? .restriction ? .keys || [],
                        n = t.includes("No_futures_quiz") ? "no" : t.includes("Mandatory_futures_quiz") ? "mandatory" : "can-skip",
                        r = (0, De.a)((e => e.updateQuizType));
                    (0, o.useEffect)((() => {
                        r(n)
                    }), [n, r])
                })(p);
                const R = (e => {
                        const t = (0, De.a)((e => e.updateEnableFuturesSkipQuizFeature)),
                            n = (0, De.a)((e => e.enableFuturesSkipQuizFeature));
                        return (0, o.useEffect)((() => {
                            "boolean" === typeof e ? .futures_skip_quiz ? .pass && t(e ? .futures_skip_quiz ? .pass)
                        }), [e, t]), n
                    })(m()),
                    M = (0, o.useRef)(),
                    D = (0, De.a)((e => e.skipModalVisible)),
                    O = (0, o.useCallback)((() => {
                        I(!0)
                    }), [I]);
                S.B.on(Ie.j3, (({
                    visible: e,
                    type: t,
                    afterClose: n,
                    finishQuiz: r,
                    afterSkip: o,
                    source: i
                }) => {
                    M.current = o, Ve = n, Pe = r, "function" === typeof E && E(e), I(e), t && N(t), i && (0, z.i$)(i)
                })), (0, o.useEffect)((() => {
                    (0, z.s)(i)
                }), [i]);
                const B = b(x && h);
                (0, o.useEffect)((() => {
                    (0, Me.q6)(B)
                }), [B]);
                const [F, V] = (0, o.useState)(!1), [P, Q] = (0, o.useState)(!1), U = (0, o.useRef)();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(w.A, {
                        open: T,
                        showCloseIcon: e,
                        onCloseIconClick: () => L === Ie.kr ? ("function" === typeof q && q(), V(!0)) : L !== Ie.kr || B ? (Ve && Ve(), I(!1)) : void V(!0),
                        sx: { ...je,
                            "> div:first-child": {
                                pr: e ? [16, 24] : 0
                            }
                        },
                        contentSx: {
                            height: ["100%", "620px"],
                            width: ["100%", "640px", "720px"],
                            p: 0
                        },
                        containerSx: {
                            zIndex: [12, "modal"]
                        },
                        children: (0, r.jsx)(Te, {
                            activeType: L,
                            setActiveType: N,
                            review: B || !x || !h,
                            onSuccess: () => {
                                Pe && Pe(), I(!1)
                            },
                            updateData: () => {},
                            videoPath: t,
                            lng: n,
                            sensorsTrack: i,
                            questionConfig: u,
                            setQuizPassDialogVisible: Q,
                            questionRef: U
                        })
                    }), (0, r.jsx)(w.A, {
                        open: F,
                        showCloseIcon: !1,
                        mask: !0,
                        showMaskOnMobile: !0,
                        sx: {
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "elevation3",
                            width: "auto",
                            height: "auto"
                        },
                        contentSx: {
                            bg: "modalBg"
                        },
                        containerSx: {
                            zIndex: [12, "modal"]
                        },
                        onMaskClick: () => {
                            V(!1)
                        },
                        children: (0, r.jsxs)(s.A, {
                            sx: {
                                textAlign: "center",
                                width: "250px"
                            },
                            children: [(0, r.jsx)(k.A, {
                                size: 64,
                                color: "t.secondary"
                            }), (0, r.jsx)(a.A, {
                                sx: {
                                    fontSize: "14px",
                                    letterSpacing: "0.16px",
                                    mt: "16px",
                                    mb: "24px",
                                    color: "t.primary"
                                },
                                children: g("trd-leveraged-quiz-quit")
                            }), (0, r.jsx)(l.A, {
                                sz: "normal",
                                width: "100%",
                                onClick: () => {
                                    "function" === typeof A && A(), V(!1), I(!1), Ve && Ve()
                                },
                                children: v("OK", {
                                    defaultValue: "OK"
                                })
                            })]
                        })
                    }), d && D && R && (0, r.jsx)(o.Suspense, {
                        fallback: null,
                        children: (0, r.jsx)(Fe, {
                            openQuiz: O,
                            afterSkip: M.current
                        })
                    }), (0, r.jsx)(Re, {
                        visible: P,
                        setVisible: Q,
                        timeout: 5,
                        onOK: () => {
                            "function" === typeof j && j(), Q(!1)
                        },
                        title: C("Congratulations", {
                            defaultValue: "Congratulations"
                        }),
                        content: C("quiz-passed-text", {
                            defaultValue: "You have passed the quiz and can start trading."
                        }),
                        okText: C("futures-trade-OK")
                    })]
                })
            };
            var Ue = n("ViD7"),
                $e = function() {
                    return (0, Oe.z)("futuresTradeUI").result
                },
                Ke = function() {
                    var e = (0, Ue.Nm)().data;
                    return (0, r.jsx)(Qe, {
                        questionConfig: qe.NEW0223,
                        businessComplianceCheckResult: null === e || void 0 === e ? void 0 : e.data,
                        useFeatureGate: $e
                    })
                };
            const Ge = (0, o.memo)(Ke)
        },
        ZXeE: e => {
            var t = "undefined" !== typeof Element,
                n = "function" === typeof Map,
                r = "function" === typeof Set,
                o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, s) {
                if (e === s) return !0;
                if (e && s && "object" == typeof e && "object" == typeof s) {
                    if (e.constructor !== s.constructor) return !1;
                    var a, l, u, c;
                    if (Array.isArray(e)) {
                        if ((a = e.length) != s.length) return !1;
                        for (l = a; 0 !== l--;)
                            if (!i(e[l], s[l])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && s instanceof Map) {
                        if (e.size !== s.size) return !1;
                        for (c = e.entries(); !(l = c.next()).done;)
                            if (!s.has(l.value[0])) return !1;
                        for (c = e.entries(); !(l = c.next()).done;)
                            if (!i(l.value[1], s.get(l.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && s instanceof Set) {
                        if (e.size !== s.size) return !1;
                        for (c = e.entries(); !(l = c.next()).done;)
                            if (!s.has(l.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
                        if ((a = e.length) != s.length) return !1;
                        for (l = a; 0 !== l--;)
                            if (e[l] !== s[l]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
                    if (e.valueOf !== Object.prototype.valueOf && "function" === typeof e.valueOf && "function" === typeof s.valueOf) return e.valueOf() === s.valueOf();
                    if (e.toString !== Object.prototype.toString && "function" === typeof e.toString && "function" === typeof s.toString) return e.toString() === s.toString();
                    if ((a = (u = Object.keys(e)).length) !== Object.keys(s).length) return !1;
                    for (l = a; 0 !== l--;)
                        if (!Object.prototype.hasOwnProperty.call(s, u[l])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (l = a; 0 !== l--;)
                        if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !e.$$typeof) && !i(e[u[l]], s[u[l]])) return !1;
                    return !0
                }
                return e !== e && s !== s
            }
            e.exports = function(e, t) {
                try {
                    return i(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        Toyo: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => d
            });
            var r = n("DTvD"),
                o = n("hTvQ"),
                i = n("C9w4"),
                s = n("ZXeE"),
                a = n.n(s),
                l = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                u = "undefined" !== typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                c = [],
                d = function(e, t, n) {
                    void 0 === n && (n = {});
                    var s = r.useRef(null),
                        d = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || c
                        },
                        p = r.useState({
                            styles: {
                                popper: {
                                    position: d.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        f = p[0],
                        m = p[1],
                        h = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    o.flushSync((function() {
                                        m({
                                            styles: l(n.map((function(e) {
                                                return [e, t.styles[e] || {}]
                                            }))),
                                            attributes: l(n.map((function(e) {
                                                return [e, t.attributes[e]]
                                            })))
                                        })
                                    }))
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        x = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: d.onFirstUpdate,
                                placement: d.placement,
                                strategy: d.strategy,
                                modifiers: [].concat(d.modifiers, [h, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return a()(s.current, e) ? s.current || e : (s.current = e, e)
                        }), [d.onFirstUpdate, d.placement, d.strategy, d.modifiers, h]),
                        g = r.useRef();
                    return u((function() {
                        g.current && g.current.setOptions(x)
                    }), [x]), u((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || i.n4)(e, t, x);
                            return g.current = r,
                                function() {
                                    r.destroy(), g.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: g.current ? g.current.state : null,
                        styles: f.styles,
                        attributes: f.attributes,
                        update: g.current ? g.current.update : null,
                        forceUpdate: g.current ? g.current.forceUpdate : null
                    }
                }
        },
        eAFj: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("DTvD");

            function o(e) {
                let t;
                const n = new Set,
                    r = (e, r) => {
                        const o = "function" === typeof e ? e(t) : e;
                        if (o !== t) {
                            const e = t;
                            t = r ? o : Object.assign({}, t, o), n.forEach((n => n(t, e)))
                        }
                    },
                    o = () => t,
                    i = {
                        setState: r,
                        getState: o,
                        subscribe: (e, r, i) => r || i ? ((e, r = o, i = Object.is) => {
                            console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                            let s = r(t);

                            function a() {
                                const n = r(t);
                                if (!i(s, n)) {
                                    const t = s;
                                    e(s = n, t)
                                }
                            }
                            return n.add(a), () => n.delete(a)
                        })(e, r, i) : (n.add(e), () => n.delete(e)),
                        destroy: () => n.clear()
                    };
                return t = e(r, o, i), i
            }
            const i = "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? r.useEffect : r.useLayoutEffect;

            function s(e) {
                const t = "function" === typeof e ? o(e) : e,
                    n = (e = t.getState, n = Object.is) => {
                        const [, o] = (0, r.useReducer)((e => e + 1), 0), s = t.getState(), a = (0, r.useRef)(s), l = (0, r.useRef)(e), u = (0, r.useRef)(n), c = (0, r.useRef)(!1), d = (0, r.useRef)();
                        let p;
                        void 0 === d.current && (d.current = e(s));
                        let f = !1;
                        (a.current !== s || l.current !== e || u.current !== n || c.current) && (p = e(s), f = !n(d.current, p)), i((() => {
                            f && (d.current = p), a.current = s, l.current = e, u.current = n, c.current = !1
                        }));
                        const m = (0, r.useRef)(s);
                        i((() => {
                            const e = () => {
                                    try {
                                        const e = t.getState(),
                                            n = l.current(e);
                                        u.current(d.current, n) || (a.current = e, d.current = n, o())
                                    } catch (e) {
                                        c.current = !0, o()
                                    }
                                },
                                n = t.subscribe(e);
                            return t.getState() !== m.current && e(), n
                        }), []);
                        const h = f ? p : d.current;
                        return (0, r.useDebugValue)(h), h
                    };
                return Object.assign(n, t), n[Symbol.iterator] = function() {
                    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                    const e = [n, t];
                    return {
                        next() {
                            const t = e.length <= 0;
                            return {
                                value: e.shift(),
                                done: t
                            }
                        }
                    }
                }, n
            }
        }
    }
]);